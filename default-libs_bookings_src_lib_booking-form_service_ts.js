"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["default-libs_bookings_src_lib_booking-form_service_ts"],{8929:(V,I,s)=>{s.d(I,{f:()=>J});var e=s(1670),h=s(9885),g=s(9112),T=s(3690),P=s(1810),k=s(2317),C=s(5148),x=s(7485),M=s(4505),U=s(4139),p=s(7716),v=s(9128),f=s(6116),A=s(9095),E=s(6942),R=s(8759),W=s(9151),K=s(823),B=s(5670),F=s(3910),S=s(565),L=s(6962),Z=s(1980),w=s(354),N=s(4282),z=s(8871),b=s(2560),j=s(1484);const Q=["book/desks","book/parking","book/newdesk","book/new-parking"];let J=(()=>{class D extends g.KG{constructor(t,n,l,a,u){super(),this._router=t,this._settings=n,this._org=l,this._dialog=a,this._payments=u,this._view=new M.X("form"),this._options=new M.X({type:"desk"}),this._form=new M.X((0,Z.PR)()),this._booking=new M.X(null),this._loading=new M.X(""),this.last_success=new L.$(JSON.parse(sessionStorage.getItem("PLACEOS.last_booked_booking")||"{}")),this.loading=this._loading.asObservable(),this.options=this._options.pipe((0,v.d)(1)),this.assets=this.options.pipe((0,f.g)("zone_id"),(0,A.w)(({type:o})=>this._org.building&&"desk"===o?(this._loading.next("Loading desks..."),(0,T.BW_)(this._org.building.id,{name:"desks"}).pipe((0,E.U)(i=>(0,g.xH)(i.map(r=>(r.metadata.desks?.details instanceof Array?r.metadata.desks?.details:[]).map(_=>({..._,zone:r.zone}))))))):(0,U.of)([])),(0,R.b)(()=>this._loading.next("")),(0,v.d)(1)),this.features=this.assets.pipe((0,E.U)(o=>{const i=[];for(const{features:r}of o)r instanceof Array&&r.forEach(_=>i.push(_));return(0,g.Tw)(i).sort((r,_)=>r.localeCompare(_))}),(0,v.d)(1)),this.available_assets=(0,p.aj)([this.options,this.assets,this._form]).pipe((0,W.h)(([o,i,r])=>r.getRawValue().date>0&&r.getRawValue().duration>0),(0,K.b)(500),(0,R.b)(([{type:o}])=>this._loading.next(`Checking ${o} availability...`)),(0,A.w)(([o,i,r])=>(0,w.F2)({period_start:(0,P.Z)(r.getRawValue().date),period_end:(0,P.Z)((0,k.Z)(r.getRawValue().date,r.getRawValue().duration||1440)),type:o.type,zones:o.zone_id}).pipe((0,E.U)(_=>i.filter(d=>!1!==d.bookable&&(!o.features||o.features?.every(m=>d.features.includes(m)))&&(!o.zone_id||o.zone_id===d.zone?.id||o.zone_id===d.zone?.parent_id)&&!_.find(m=>m.asset_id===d.id&&"declined"!==m.status))))),(0,R.b)(()=>this._loading.next("")),(0,v.d)(1)),this.grouped_availability=(0,p.aj)([this.options,this.available_assets]).pipe((0,E.U)(([o,i])=>{const r=[],_=[...i].sort((m,c)=>m.zone?.id?.localeCompare(c.zone?.id)),d=o.members?.length?o.members:[(0,g.ar)()];for(;_.length;){const m=[];let c=_.pop();for(;m.length<d.length&&(!m.length||m.find(y=>y.zone?.id===c.zone?.id));)m.push(c),c=_.pop();m.length<d.length||r.push(m)}return r})),this.subscription("router.bookings",this._router.events.subscribe(o=>{o instanceof h.m2&&!Q.find(i=>o.url.includes(i))&&this.clearForm()})),this._org.initialised.pipe((0,B.P)(o=>o)).subscribe(()=>this.setOptions({}))}get view(){return this._view.getValue()}get form(){return this._form.getValue()}get booking(){return this._booking.getValue()}newForm(t=new L.$){this._form.next((0,Z.PR)(t)),this.subscription("form_change",this._form.getValue().valueChanges.subscribe(()=>this.storeForm())),this._booking.next(t),this._options.next({type:this._options.getValue().type})}setView(t){this._view.next(t)}setOptions(t){this._options.next({...this._options.getValue(),...t})}setFeature(t,n){if(!t?.length)return;const l=this._options.getValue()?.features||[];n&&!l.includes(t)&&l.push(t),!n&&l.includes(t)&&l.splice(l.findIndex(a=>a===t),1),this.setOptions({features:l})}resetForm(){this._form.getValue()||this.newForm();const t=this._booking.getValue();this._form.getValue().patchValue({...t||{},...t?.extension_data||{}}),this._options.next({type:this._options.getValue().type})}clearForm(){sessionStorage.removeItem("PLACEOS.booking_form"),sessionStorage.removeItem("PLACEOS.booking_form_options"),this.newForm()}storeForm(){sessionStorage.setItem("PLACEOS.booking_form",JSON.stringify(this._form.getValue()?.getRawValue()||{})),sessionStorage.setItem("PLACEOS.booking_form_filters",JSON.stringify(this._options.getValue()||{}))}loadForm(){this._form.getValue()||this.newForm(),this._form.getValue().patchValue({...JSON.parse(sessionStorage.getItem("PLACEOS.booking_form")||"{}")}),this.setOptions({zone_id:this._org.building?.id,...JSON.parse(sessionStorage.getItem("PLACEOS.booking_form_filters")||"{}")})}confirmPost(){var t=this;return(0,e.Z)(function*(){yield t.checkQuestions();const n=t._options.getValue(),a=t._form.getValue().getRawValue();let u=`Would you like to book the ${n.type} ${a.asset_name} for ${(0,C.Z)(a.date,"dd MMM yyyy")}${a.duration<720?" at "+(0,C.Z)(a.date,"h:mm a"):""}`;n.group&&(u=`${u}.<br>You group members will be assigned desks nearby your selected desk.`);const o=yield(0,g._5)({title:`Book ${n.type}`,content:u,icon:{content:"event_available"}},t._dialog);if("done"!==o?.reason)throw"User cancelled";o.loading("Performing booking request..."),n.group?yield t.postFormForGroup().catch(i=>{throw(0,g.cB)(i),o.close(),i}):yield t.postForm().catch(i=>{throw(0,g.cB)(i),o.close(),i}),o.close()})()}postForm(t=!1){var n=this;return(0,e.Z)(function*(){const l=n._form.getValue();if(!l)throw"No form for booking";if(!l.valid)throw`Some form fields are invalid. [${(0,g.RD)(l).join(", ")}]`;const a=l.getRawValue();if(t||(yield n.checkResourceAvailable(a,n._options.getValue().type)),(a.duration>=720||a.all_day)&&l.patchValue({date:(0,x.Z)(a.date,{hours:11,minutes:59}).valueOf(),duration:720}),n._payments.payment_module){const i=yield n._payments.makePayment({type:"space",resource_name:a.asset_name,date:a.date,duration:a.duration,all_day:a.all_day});if(!i?.success)return;a.extension_data={invoice:i,invoice_id:i.invoice_id}}n._loading.next("Saving booking");const u=yield(0,w.km)(new L.$({...n._options.getValue(),...a,approved:!!n._settings.get("app.bookings.no_approval")})).toPromise();n._loading.next("");const{booking_type:o}=a;return n.clearForm(),l?.patchValue({booking_type:o}),n.last_success=u,sessionStorage.setItem("PLACEOS.last_booked_booking",JSON.stringify(u)),n.setView("success"),u})()}postFormForGroup(){var t=this;return(0,e.Z)(function*(){const{members:n,group:l,type:a}=t._options.getValue();if(!l)throw"No group available to book for";const u=n.filter(c=>c.email!==(0,g.ar)().email);if(u.length<=0)throw"No members in your group to book for.";const o=t._form.getValue().value,i=yield t.available_assets.pipe((0,F.q)(1)).toPromise(),r=i.find(c=>c.id===o.asset_id||c.map_id===o.asset_id),_=t._org.levelWithID([r.zone?.id]),d=[r,...yield t._getNearbyResources(_.map_id,o.asset_id,i,u.length)],m=[(0,g.ar)(),...u];yield Promise.all(m.map((c,y)=>t.checkResourceAvailable({...o,asset_id:d[y].map_id||d[y].id,user_email:c.email},a)));for(let c=0;c<m.length;c++){const y=m[c],O=d[c];t._form.getValue().patchValue({...o,user:y,asset_id:O?.id,asset_name:O.name,map_id:O?.map_id||O?.id,description:O.name,zones:O.zone?[O.zone?.parent_id,O.zone?.id]:[]}),t.postForm(!0)}})()}checkQuestions(){var t=this;return(0,e.Z)(function*(){if(!1!==t._settings.get("app.desks.ignore_questions"))return;const n=t._dialog.open(N.I);if("done"!==(yield Promise.race([n.componentInstance.event.pipe((0,B.P)(u=>"done"===u.reason)).toPromise(),n.afterClosed().toPromise()]))?.reason)throw"User cancelled";const a=n.componentInstance.form.getRawValue();for(const u in a)if(a[u])throw"User failed questionaire";n.close()})()}checkResourceAvailable({asset_id:t,date:n,duration:l,user_email:a,all_day:u},o){var i=this;return(0,e.Z)(function*(){l=u?720:l||60;const r=yield(0,w.F2)({period_start:(0,P.Z)(n),period_end:(0,P.Z)(n+60*l*1e3),type:o}).toPromise();if(r.find(d=>d.asset_id===t))throw`${t} is not available at the selected time`;const _=i._settings.get(`app.booking.allowed_daily_${o}_count`)??1;if(_>0&&r.filter(d=>d.user_email===(a||(0,g.ar)()?.email)&&"declined"!==d.status).length>=_){const d=a===(0,g.ar)()?.email;throw`${d?"You":a} already ${d?"have":"has"} a desk booked`}return!0})()}_getNearbyResources(t,n,l,a){return(0,e.Z)(function*(){const u=[];let o=l.filter(i=>i.id!==n&&i.map_id!==n);for(let i=0;i<a;i++){const r=yield(0,Z.gV)(t,n,o.map(_=>_.map_id||_.id));r&&(u.push(l.find(_=>_.id===r||_.map_id===r)),o=o.filter(_=>_.id!==r&&_.map_id!==r))}return u})()}}return D.\u0275fac=function(t){return new(t||D)(b.LFG(h.F0),b.LFG(g.gb),b.LFG(S.w),b.LFG(j.uw),b.LFG(z.c))},D.\u0275prov=b.Yz7({token:D,factory:D.\u0275fac,providedIn:"root"}),D})()},4282:(V,I,s)=>{s.d(I,{I:()=>U});var e=s(2560),h=s(2508),T=(s(9112),s(4666)),P=s(2922),k=s(4522),C=s(1484);function x(p,v){if(1&p){const f=e.EpF();e.TgZ(0,"div",2)(1,"h2",3),e._uU(2,"COVID-19 Questionnaire"),e.qZA(),e.TgZ(3,"main",4)(4,"div",5)(5,"label"),e._uU(6," Have you travelled overseas within the last 14 days?"),e.TgZ(7,"span"),e._uU(8,"*"),e.qZA()(),e.TgZ(9,"mat-radio-group",6)(10,"mat-radio-button",7),e._uU(11,"Yes"),e.qZA(),e.TgZ(12,"mat-radio-button",7),e._uU(13,"No"),e.qZA()()(),e.TgZ(14,"div",5)(15,"label"),e._uU(16," Are you unwell or experiencing any cold or flu-like symptoms?"),e.TgZ(17,"span"),e._uU(18,"*"),e.qZA()(),e.TgZ(19,"mat-radio-group",8)(20,"mat-radio-button",7),e._uU(21,"Yes"),e.qZA(),e.TgZ(22,"mat-radio-button",7),e._uU(23,"No"),e.qZA()()(),e.TgZ(24,"div",9)(25,"label"),e._uU(26," Have you had contact with anyone with suspected COVID-19?"),e.TgZ(27,"span"),e._uU(28,"*"),e.qZA()(),e.TgZ(29,"mat-radio-group",10)(30,"mat-radio-button",7),e._uU(31,"Yes"),e.qZA(),e.TgZ(32,"mat-radio-button",7),e._uU(33,"No"),e.qZA()()()(),e.TgZ(34,"footer",11)(35,"button",12),e.NdJ("click",function(){e.CHM(f);const E=e.oxw();return e.KtG(E.submit())}),e._uU(36,"Submit"),e.qZA()(),e.TgZ(37,"button",13)(38,"i",14),e._uU(39,"close"),e.qZA()()()}if(2&p){const f=e.oxw();e.xp6(3),e.Q6J("formGroup",f.form),e.xp6(7),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1),e.xp6(8),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1),e.xp6(8),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1)}}function M(p,v){1&p&&(e.TgZ(0,"main",15)(1,"p",16),e._uU(2," Your request to work from the office has been rejected based on your response to the compulsory Covid-19 questions. Please feel free to submit a new request when circumstances change in a way that changes your answer to the questions. "),e.qZA(),e.TgZ(3,"button",13)(4,"i",14),e._uU(5,"close"),e.qZA()()())}let U=(()=>{class p{constructor(){this.event=new e.vpe,this.form=new h.cw({travelled:new h.NI(!1),unwell:new h.NI(!1),contact:new h.NI(!1)})}submit(){this.form.markAllAsTouched(),Object.keys(this.form.value).find(f=>!0===this.form.value[f]||"true"===this.form.value[f])?this.failure=!0:this.event.emit({reason:"done"})}}return p.\u0275fac=function(f){return new(f||p)},p.\u0275cmp=e.Xpm({type:p,selectors:[["desk-question-modal"]],outputs:{event:"event"},decls:3,vars:2,consts:[["class","relative",4,"ngIf","ngIfElse"],["fail_state",""],[1,"relative"],[1,"p-4","text-xl"],[1,"p-4",3,"formGroup"],[1,"flex","flex-col","mb-4"],["formControlName","travelled",1,"space-x-2"],[3,"value"],["formControlName","unwell",1,"space-x-2"],[1,"flex","flex-col"],["formControlName","contact",1,"space-x-2"],[1,"flex","justify-center","items-center","p-2"],["mat-button","",3,"click"],["close","","mat-icon-button","","mat-dialog-close",""],[1,"material-icons"],["failure","",1,"pt-8","relative"],[1,"p-4"]],template:function(f,A){if(1&f&&(e.YNc(0,x,40,7,"div",0),e.YNc(1,M,6,0,"ng-template",null,1,e.W1O)),2&f){const E=e.MAs(2);e.Q6J("ngIf",!A.failure)("ngIfElse",E)}},dependencies:[T.O5,h.JJ,h.JL,h.sg,h.u,P.VQ,P.U0,k.lW,C.ZT],styles:["main[_ngcontent-%COMP%]{width:24rem;max-width:calc(100vw - 4.5rem)}[close][_ngcontent-%COMP%]{position:absolute;top:.5rem;right:.5rem}\n/*# sourceMappingURL=desk-questions-modal.component.ts-angular-inline--59.css.map*/"]}),p})()}}]);
//# sourceMappingURL=default-libs_bookings_src_lib_booking-form_service_ts.js.map