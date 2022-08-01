"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["default-libs_bookings_src_index_ts"],{8014:(Se,G,s)=>{s.d(G,{$N:()=>M.$,fy:()=>R,jT:()=>h.jT,FD:()=>h.FD,gV:()=>F.gV,F2:()=>h.F2,FP:()=>h.FP,km:()=>h.km,Fo:()=>h.Fo,Wp:()=>h.Wp}),s(2921),s(6850);var x=s(1670),T=s(1484),p=s(1506),D=s(3619),S=s(2317),C=(s(1799),s(5148)),M=s(6962),h=s(354),e=s(2560),b=s(4666),A=s(4522);s(1708),s(5306),s(9136),s(2581),s(8589);var f=s(2508);s(5074),s(1267),s(2306),s(9697);var E=s(2922);function fe(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",2)(1,"h2",3),e._uU(2,"COVID-19 Questionnaire"),e.qZA(),e.TgZ(3,"main",4)(4,"div",5)(5,"label"),e._uU(6," Have you travelled overseas within the last 14 days?"),e.TgZ(7,"span"),e._uU(8,"*"),e.qZA()(),e.TgZ(9,"mat-radio-group",6)(10,"mat-radio-button",7),e._uU(11,"Yes"),e.qZA(),e.TgZ(12,"mat-radio-button",7),e._uU(13,"No"),e.qZA()()(),e.TgZ(14,"div",5)(15,"label"),e._uU(16," Are you unwell or experiencing any cold or flu-like symptoms?"),e.TgZ(17,"span"),e._uU(18,"*"),e.qZA()(),e.TgZ(19,"mat-radio-group",8)(20,"mat-radio-button",7),e._uU(21,"Yes"),e.qZA(),e.TgZ(22,"mat-radio-button",7),e._uU(23,"No"),e.qZA()()(),e.TgZ(24,"div",9)(25,"label"),e._uU(26," Have you had contact with anyone with suspected COVID-19?"),e.TgZ(27,"span"),e._uU(28,"*"),e.qZA()(),e.TgZ(29,"mat-radio-group",10)(30,"mat-radio-button",7),e._uU(31,"Yes"),e.qZA(),e.TgZ(32,"mat-radio-button",7),e._uU(33,"No"),e.qZA()()()(),e.TgZ(34,"footer",11)(35,"button",12),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.submit())}),e._uU(36,"Submit"),e.qZA()(),e.TgZ(37,"button",13)(38,"i",14),e._uU(39,"close"),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("formGroup",t.form),e.xp6(7),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1),e.xp6(8),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1),e.xp6(8),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1)}}function pe(n,l){1&n&&(e.TgZ(0,"main",15)(1,"p",16),e._uU(2," Your request to work from the office has been rejected based on your response to the compulsory Covid-19 questions. Please feel free to submit a new request when circumstances change in a way that changes your answer to the questions. "),e.qZA(),e.TgZ(3,"button",13)(4,"i",14),e._uU(5,"close"),e.qZA()()())}let P=(()=>{class n{constructor(){this.event=new e.vpe,this.form=new f.cw({travelled:new f.NI(!1),unwell:new f.NI(!1),contact:new f.NI(!1)})}submit(){this.form.markAllAsTouched(),Object.keys(this.form.value).find(t=>!0===this.form.value[t]||"true"===this.form.value[t])?this.failure=!0:this.event.emit({reason:"done"})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["desk-question-modal"]],outputs:{event:"event"},decls:3,vars:2,consts:[["class","relative",4,"ngIf","ngIfElse"],["fail_state",""],[1,"relative"],[1,"p-4","text-xl"],[1,"p-4",3,"formGroup"],[1,"flex","flex-col","mb-4"],["formControlName","travelled",1,"space-x-2"],[3,"value"],["formControlName","unwell",1,"space-x-2"],[1,"flex","flex-col"],["formControlName","contact",1,"space-x-2"],[1,"flex","justify-center","items-center","p-2"],["mat-button","",3,"click"],["close","","mat-icon-button","","mat-dialog-close",""],[1,"material-icons"],["failure","",1,"pt-8","relative"],[1,"p-4"]],template:function(t,o){if(1&t&&(e.YNc(0,fe,40,7,"div",0),e.YNc(1,pe,6,0,"ng-template",null,1,e.W1O)),2&t){const i=e.MAs(2);e.Q6J("ngIf",!o.failure)("ngIfElse",i)}},dependencies:[b.O5,f.JJ,f.JL,f.sg,f.u,E.VQ,E.U0,A.lW,T.ZT],styles:["main[_ngcontent-%COMP%]{width:24rem;max-width:calc(100vw - 4.5rem)}[close][_ngcontent-%COMP%]{position:absolute;top:.5rem;right:.5rem}\n/*# sourceMappingURL=desk-questions-modal.component.ts-angular-inline--57.css.map*/"]}),n})();var z=s(9885),_e=s(3690),w=s(1810),he=s(8235),y=s(4505),B=s(4139),Y=s(7716),I=s(9128),ve=s(6116),L=s(9095),U=s(6942),N=s(8759),ke=s(9151),be=s(823),j=s(5670),Ze=s(3910),F=s(1980);const Te=["book/desks"];let R=(()=>{class n extends p.KG{constructor(t,o,i,r){super(),this._router=t,this._settings=o,this._org=i,this._dialog=r,this._view=new y.X("form"),this._options=new y.X({type:"desk"}),this._form=new y.X((0,F.PR)()),this._booking=new y.X(null),this._loading=new y.X(""),this.last_success=new M.$(JSON.parse(sessionStorage.getItem("PLACEOS.last_booked_booking")||"{}")),this.loading=this._loading.asObservable(),this.options=this._options.pipe((0,I.d)(1)),this.assets=this.options.pipe((0,ve.g)("zone_id"),(0,L.w)(({type:a})=>this._org.building&&"desk"===a?(this._loading.next("Loading desks..."),(0,_e.BW_)(this._org.building.id,{name:"desks"}).pipe((0,U.U)(u=>(0,p.xH)(u.map(d=>(d.metadata.desks?.details instanceof Array?d.metadata.desks?.details:[]).map(m=>({...m,zone:d.zone}))))))):(0,B.of)([])),(0,N.b)(()=>this._loading.next("")),(0,I.d)(1)),this.features=this.assets.pipe((0,U.U)(a=>{const u=[];for(const{features:d}of a)d instanceof Array&&d.forEach(m=>u.push(m));return(0,p.Tw)(u).sort((d,m)=>d.localeCompare(m))}),(0,I.d)(1)),this.available_assets=(0,Y.aj)([this.options,this.assets,this._form]).pipe((0,ke.h)(([a,u,d])=>d.getRawValue().date>0&&d.getRawValue().duration>0),(0,be.b)(500),(0,N.b)(([{type:a}])=>this._loading.next(`Checking ${a} availability...`)),(0,L.w)(([a,u,d])=>(0,h.F2)({period_start:(0,w.Z)(d.getRawValue().date),period_end:(0,w.Z)((0,S.Z)(d.getRawValue().date,d.getRawValue().duration||1440)),type:a.type,zones:a.zone_id}).pipe((0,U.U)(m=>u.filter(g=>!1!==g.bookable&&(!a.features||a.features?.every(c=>g.features.includes(c)))&&(!a.zone_id||a.zone_id===g.zone?.id||a.zone_id===g.zone?.parent_id)&&!m.find(c=>c.asset_id===g.id&&"declined"!==c.status)&&(!a?.show_fav||this.favorite_desks.includes(g.id)))))),(0,N.b)(()=>this._loading.next("")),(0,I.d)(1)),this.grouped_availability=(0,Y.aj)([this.options,this.available_assets]).pipe((0,U.U)(([a,u])=>{const d=[],m=[...u].sort((c,v)=>c.zone?.id?.localeCompare(v.zone?.id)),g=a.members?.length?a.members:[(0,p.ar)()];for(;m.length;){const c=[];let v=m.pop();for(;c.length<g.length&&(!c.length||c.find(_=>_.zone?.id===v.zone?.id));)c.push(v),v=m.pop();c.length<g.length||d.push(c)}return d})),this.subscription("router.bookings",this._router.events.subscribe(a=>{a instanceof z.m2&&!Te.find(u=>a.url.includes(u))&&this.clearForm()})),this._org.initialised.pipe((0,j.P)(a=>a)).subscribe(()=>this.setOptions({}))}get view(){return this._view.getValue()}get form(){return this._form.getValue()}get booking(){return this._booking.getValue()}get favorite_desks(){return this._settings.get("favourite_desks")||[]}newForm(t=new M.$){this._form.next((0,F.PR)(t)),this.subscription("form_change",this._form.getValue().valueChanges.subscribe(()=>this.storeForm())),this._booking.next(t),this._options.next({type:this._options.getValue().type})}setView(t){this._view.next(t)}setOptions(t){this._options.next({...this._options.getValue(),...t})}setFeature(t,o){if(!t?.length)return;const i=this._options.getValue()?.features||[];o&&!i.includes(t)&&i.push(t),!o&&i.includes(t)&&i.splice(i.findIndex(r=>r===t),1),this.setOptions({features:i})}resetForm(){this._form.getValue()||this.newForm();const t=this._booking.getValue();this._form.getValue().patchValue({...t||{},...t?.extension_data||{}}),this._options.next({type:this._options.getValue().type})}clearForm(){sessionStorage.removeItem("PLACEOS.booking_form"),sessionStorage.removeItem("PLACEOS.booking_form_options"),this.newForm()}storeForm(){sessionStorage.setItem("PLACEOS.booking_form",JSON.stringify(this._form.getValue()?.getRawValue()||{})),sessionStorage.setItem("PLACEOS.booking_form_filters",JSON.stringify(this._options.getValue()||{}))}loadForm(){this._form.getValue()||this.newForm(),this._form.getValue().patchValue({...JSON.parse(sessionStorage.getItem("PLACEOS.booking_form")||"{}")}),this.setOptions({zone_id:this._org.building?.id,...JSON.parse(sessionStorage.getItem("PLACEOS.booking_form_filters")||"{}")})}confirmPost(){var t=this;return(0,x.Z)(function*(){console.log("Confirm"),yield t.checkQuestions();const o=t._options.getValue(),r=t._form.getValue().getRawValue();let a=`Would you like to book the ${o.type} ${r.asset_name} for ${(0,C.Z)(r.date,"dd MMM yyyy")}${r.duration<720?" at "+(0,C.Z)(r.date,"h:mm a"):""}`;console.log("Content:",a),o.group&&(a=`${a}.<br>You group members will be assigned desks nearby your selected desk.`);const u=yield(0,p._5)({title:`Book ${o.type}`,content:a,icon:{content:"event_available"}},t._dialog);if("done"!==u?.reason)throw"User cancelled";u.loading("Performing booking request..."),o.group?yield t.postFormForGroup().catch(d=>{throw(0,p.cB)(d),u.close(),d}):yield t.postForm().catch(d=>{throw(0,p.cB)(d),u.close(),d}),u.close()})()}postForm(t=!1){var o=this;return(0,x.Z)(function*(){const i=o._form.getValue();if(!i)throw"No form for booking";if(!i.valid)throw`Some form fields are invalid. [${(0,p.RD)(i).join(", ")}]`;const r=i.getRawValue();t||(yield o.checkResourceAvailable(r,o._options.getValue().type)),(r.duration>=720||r.all_day)&&i.patchValue({date:(0,he.Z)(r.date,{hours:11,minutes:59}).valueOf(),duration:720}),o._loading.next("Saving booking");const a=yield(0,h.km)(new M.$({...r,approved:!!o._settings.get("app.bookings.no_approval")})).toPromise();o._loading.next("");const{booking_type:u}=r;return o.clearForm(),i?.patchValue({booking_type:u}),o.last_success=a,sessionStorage.setItem("PLACEOS.last_booked_booking",JSON.stringify(a)),o.setView("success"),a})()}postFormForGroup(){var t=this;return(0,x.Z)(function*(){const{members:o,group:i,type:r}=t._options.getValue();if(!i)throw"No group available to book for";const a=o.filter(_=>_.email!==(0,p.ar)().email);if(a.length<=0)throw"No members in your group to book for.";const u=t._form.getValue().value,d=yield t.available_assets.pipe((0,Ze.q)(1)).toPromise(),m=d.find(_=>_.id===u.asset_id||_.map_id===u.asset_id),g=t._org.levelWithID([m.zone?.id]),c=[m,...yield t._getNearbyResources(g.map_id,u.asset_id,d,a.length)],v=[(0,p.ar)(),...a];yield Promise.all(v.map((_,k)=>t.checkResourceAvailable({...u,asset_id:c[k].map_id||c[k].id,user_email:_.email},r)));for(let _=0;_<v.length;_++){const k=v[_],Z=c[_];t._form.getValue().patchValue({...u,user:k,asset_id:Z?.id,asset_name:Z.name,map_id:Z?.map_id||Z?.id,description:Z.name,zones:Z.zone?[Z.zone?.parent_id,Z.zone?.id]:[]}),t.postForm(!0)}})()}checkQuestions(){var t=this;return(0,x.Z)(function*(){if(!1!==t._settings.get("app.desks.ignore_questions"))return;const o=t._dialog.open(P);if("done"!==(yield Promise.race([o.componentInstance.event.pipe((0,j.P)(a=>"done"===a.reason)).toPromise(),o.afterClosed().toPromise()]))?.reason)throw"User cancelled";const r=o.componentInstance.form.getRawValue();for(const a in r)if(r[a])throw"User failed questionaire";o.close()})()}checkResourceAvailable({asset_id:t,date:o,duration:i,user_email:r,all_day:a},u){var d=this;return(0,x.Z)(function*(){i=a?720:i||60;const m=yield(0,h.F2)({period_start:(0,w.Z)(o),period_end:(0,w.Z)(o+60*i*1e3),type:u}).toPromise();if(m.find(c=>c.asset_id===t))throw`${t} is not available at the selected time`;const g=d._settings.get(`app.booking.allowed_daily_${u}_count`)??1;if(g>0&&m.filter(c=>c.user_email===(r||(0,p.ar)()?.email)&&"declined"!==c.status).length>=g){const c=r===(0,p.ar)()?.email;throw`${c?"You":r} already ${c?"have":"has"} a desk booked`}return!0})()}_getNearbyResources(t,o,i,r){return(0,x.Z)(function*(){const a=[];let u=i.filter(d=>d.id!==o&&d.map_id!==o);for(let d=0;d<r;d++){const m=yield(0,F.gV)(t,o,u.map(g=>g.map_id||g.id));m&&(a.push(i.find(g=>g.id===m||g.map_id===m)),u=u.filter(g=>g.id!==m&&g.map_id!==m))}return a})()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(z.F0),e.LFG(p.gb),e.LFG(D.w7),e.LFG(T.uw))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();s(1022),s(7303),s(207),s(7371)}}]);
//# sourceMappingURL=default-libs_bookings_src_index_ts.js.map