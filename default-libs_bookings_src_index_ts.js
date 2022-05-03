"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["default-libs_bookings_src_index_ts"],{4099:(Ne,q,l)=>{l.d(q,{$N:()=>C,fy:()=>Ue,jT:()=>we,FD:()=>Ze,gV:()=>L,F2:()=>F,FP:()=>Ie,km:()=>G,Fo:()=>Ce,Wp:()=>R}),l(3362);var e=l(3184),U=l(5758),v=l(3294),T=l(6362),z=l(7317),m=(l(9697),l(587));l(2306),l(4770),l(4683),l(4742);var B=l(8390);function de(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"div",2)(1,"h2",3),e._uU(2,"COVID-19 Questionnaire"),e.qZA(),e.TgZ(3,"main",4)(4,"div",5)(5,"label"),e._uU(6," Have you travelled overseas within the last 14 days?"),e.TgZ(7,"span"),e._uU(8,"*"),e.qZA()(),e.TgZ(9,"mat-radio-group",6)(10,"mat-radio-button",7),e._uU(11,"Yes"),e.qZA(),e.TgZ(12,"mat-radio-button",7),e._uU(13,"No"),e.qZA()()(),e.TgZ(14,"div",5)(15,"label"),e._uU(16," Are you unwell or experiencing any cold or flu-like symptoms?"),e.TgZ(17,"span"),e._uU(18,"*"),e.qZA()(),e.TgZ(19,"mat-radio-group",8)(20,"mat-radio-button",7),e._uU(21,"Yes"),e.qZA(),e.TgZ(22,"mat-radio-button",7),e._uU(23,"No"),e.qZA()()(),e.TgZ(24,"div",9)(25,"label"),e._uU(26," Have you had contact with anyone with suspected COVID-19?"),e.TgZ(27,"span"),e._uU(28,"*"),e.qZA()(),e.TgZ(29,"mat-radio-group",10)(30,"mat-radio-button",7),e._uU(31,"Yes"),e.qZA(),e.TgZ(32,"mat-radio-button",7),e._uU(33,"No"),e.qZA()()()(),e.TgZ(34,"footer",11)(35,"button",12),e.NdJ("click",function(){return e.CHM(o),e.oxw().submit()}),e._uU(36,"Submit"),e.qZA()(),e.TgZ(37,"button",13)(38,"i",14),e._uU(39,"close"),e.qZA()()()}if(2&t){const o=e.oxw();e.xp6(3),e.Q6J("formGroup",o.form),e.xp6(7),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1),e.xp6(8),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1),e.xp6(8),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1)}}function ue(t,n){1&t&&(e.TgZ(0,"main",15)(1,"p",16),e._uU(2," Your request to work from the office has been rejected based on your response to the compulsory Covid-19 questions. Please feel free to submit a new request when circumstances change in a way that changes your answer to the questions. "),e.qZA(),e.TgZ(3,"button",13)(4,"i",14),e._uU(5,"close"),e.qZA()()())}let P=(()=>{class t{constructor(){this.event=new e.vpe}ngOnInit(){this.form=new m.cw({travelled:new m.NI("",[m.kI.required]),unwell:new m.NI("",[m.kI.required]),contact:new m.NI("",[m.kI.required])})}submit(){this.form.markAllAsTouched(),this.form.valid?Object.keys(this.form.value).find(o=>!0===this.form.value[o]||"true"===this.form.value[o])?this.failure=!0:this.event.emit({reason:"done"}):(0,v.cB)("All the questions must be answered")}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["desk-question-modal"]],outputs:{event:"event"},decls:3,vars:2,consts:[["class","relative",4,"ngIf","ngIfElse"],["fail_state",""],[1,"relative"],[1,"p-4","text-xl"],[1,"p-4",3,"formGroup"],[1,"flex","flex-col","mb-4"],["formControlName","travelled",1,"space-x-2"],[3,"value"],["formControlName","unwell",1,"space-x-2"],[1,"flex","flex-col"],["formControlName","contact",1,"space-x-2"],[1,"flex","justify-center","items-center","p-2"],["mat-button","",3,"click"],["close","","mat-icon-button","","mat-dialog-close",""],[1,"material-icons"],["failure","",1,"pt-8","relative"],[1,"p-4"]],template:function(o,s){if(1&o&&(e.YNc(0,de,40,7,"div",0),e.YNc(1,ue,6,0,"ng-template",null,1,e.W1O)),2&o){const i=e.MAs(2);e.Q6J("ngIf",!s.failure)("ngIfElse",i)}},directives:[T.O5,m.JL,m.sg,B.VQ,m.JJ,m.u,B.U0,z.lW,U.ZT],styles:["main[_ngcontent-%COMP%]{width:24rem;max-width:calc(100vw - 4.5rem)}[close][_ngcontent-%COMP%]{position:absolute;top:.5rem;right:.5rem}\n/*# sourceMappingURL=desk-questions-modal.component.ts-angular-inline--49.css.map*/"]}),t})();var I=l(4929),V=l(9481),ce=l(3619),M=l(3499),Z=l(1810),N=l(2317),j=l(5148),me=l(8235),D=l(4505),Q=l(4139),J=l(7716),O=l(9128),fe=l(3298),$=l(9095),x=l(6942),S=l(8759),ge=l(823),E=l(5670),pe=l(3910),_e=l(5692),ve=l(8987),ke=l(5845),be=l(2757),ye=l(1233);class C{constructor(n={}){var o,s,i;this.id=n.id||"",this.asset_id=n.asset_id||"",this.asset_name=n.asset_name||(null===(o=n.extension_data)||void 0===o?void 0:o.asset_name)||"",this.zones=n.zones||[],this.booking_start=n.date/1e3||n.booking_start||(0,Z.Z)((0,_e.Z)((0,N.Z)(Date.now(),5),{nearestTo:5})),this.booking_end=n.date/1e3+60*n.duration||n.booking_end||(0,Z.Z)((0,N.Z)(1e3*this.booking_start,n.duration||60)),this.booking_type=n.booking_type||"",this.type=n.type||"booking",this.date=n.date||1e3*this.booking_start,this.duration=n.duration||Math.abs((0,ve.Z)(1e3*this.booking_start,1e3*this.booking_end)),this.timezone=n.timezone||Intl.DateTimeFormat().resolvedOptions().timeZone,this.user_email=n.user_email||"",this.user_id=n.user_id||"",this.user_name=n.user_name||"",this.title=n.title||"Desk booking",this.description=n.description||"",this.checked_in=!!n.checked_in,this.rejected=!!n.rejected,this.approved=!!n.approved,this.booked_by_id=n.booked_by_id||"",this.booked_by_name=n.booked_by_name||"",this.booked_by_email=n.booked_by_email||"",this.approver_id=n.approver_id||"",this.approver_email=n.approver_email||"",this.approver_name=n.approver_name||"",this.extension_data=n.extension_data||{},this.access=!!(null===(s=n.extension_data)||void 0===s?void 0:s.access),this.all_day=null!==(i=n.all_day)&&void 0!==i?i:this.duration>720,this.status=this.rejected?"declined":this.approved?"approved":"tentative";for(const r in n)r in this||(this.extension_data[r]=n[r]||this.extension_data[r])}toJSON(){const n=Object.assign({},this);return this.id||delete n.id,delete n.date,delete n.duration,n}get location(){return this.description}get is_today(){return(0,ke.Z)(this.date,new Date)}get is_done(){const n=new Date,o=this.all_day?(0,be.Z)(this.date,24):(0,N.Z)(this.date,this.duration);return(0,ye.Z)(n,o)}}var A=l(4922);function L(t,n,o=[]){return(0,I.mG)(this,void 0,void 0,function*(){const s=document.createElement("div");s.style.position="absolute",s.style.top="-9999px",s.style.width="1000px",s.style.height="1000px",document.body.appendChild(s);const i=yield(0,A.i9)({url:t,element:s}),r=(0,A.gA)(i),a=("string"==typeof n?r.mappings[n]:n)||{x:.5,y:.5};let f=10,d="";console.log("Desks:",o),console.log("Mappings:",r.mappings),console.log("Point:",a);for(const u of o){const{x:c,y:h}=r.mappings[u]||{x:2,y:2},g=Math.sqrt((c-a.x)*(c-a.x)+(h-a.y)*(h-a.y));console.log(`Desk ${u}:`,r.mappings[u],g),g<f&&(f=g,d=u)}return document.body.removeChild(s),(0,A.hX)(i),d})}var Y=l(5038);const w="/api/staff/v1/bookings";function F(t){const n=(0,Y.U)(t);return(0,M.U2M)(`${w}${n?"?"+n:""}`).pipe((0,x.U)(o=>o.map(s=>new C(s))))}function Ce(t){return(0,M.U2M)(`${w}/${encodeURIComponent(t)}`).pipe((0,x.U)(n=>new C(n)))}function R(t,n,o="patch"){return("patch"===o?M.r$K:M.gzd)(`${w}/${encodeURIComponent(t)}`,n).pipe((0,x.U)(s=>new C(s)))}const G=t=>t.id?R(t.id,t):function Me(t){return(0,M.v_Q)(`${w}`,t).pipe((0,x.U)(n=>new C(n)))}(t);function we(t){return(0,M.v_Q)(`${w}/${encodeURIComponent(t)}/approve`,"").pipe((0,x.U)(n=>new C(n)))}function Ie(t){return(0,M.v_Q)(`${w}/${encodeURIComponent(t)}/reject`,"").pipe((0,x.U)(n=>new C(n)))}function Ze(t,n){const o=(0,Y.U)({state:n});return(0,M.v_Q)(`${w}/${encodeURIComponent(t)}/check_in?${o}`,"").pipe((0,x.U)(s=>new C(s)))}const De=["book/desks"];let Ue=(()=>{class t extends v.KG{constructor(o,s,i,r){super(),this._router=o,this._settings=s,this._org=i,this._dialog=r,this._view=new D.X("form"),this._options=new D.X({type:"desk"}),this._form=new D.X(null),this._form_value=new D.X({}),this._booking=new D.X(null),this._loading=new D.X(""),this.last_success=new C(JSON.parse(sessionStorage.getItem("PLACEOS.last_booked_booking")||"{}")),this.loading=this._loading.asObservable(),this.options=this._options.pipe((0,O.d)(1)),this.assets=this.options.pipe(function he(t,n){return(0,fe.x)((o,s)=>n?n(o[t],s[t]):o[t]===s[t])}("zone_id"),(0,$.w)(({type:a})=>this._org.building&&"desk"===a?(this._loading.next("Loading desks..."),(0,M.BW_)(this._org.building.id,{name:"desks"}).pipe((0,x.U)(f=>(0,v.xH)(f.map(d=>{var u,c;return((null===(u=d.metadata.desks)||void 0===u?void 0:u.details)instanceof Array?null===(c=d.metadata.desks)||void 0===c?void 0:c.details:[]).map(h=>Object.assign(Object.assign({},h),{zone:d.zone}))}))))):(0,Q.of)([])),(0,S.b)(()=>this._loading.next("")),(0,O.d)(1)),this.features=this.assets.pipe((0,x.U)(a=>{const f=[];for(const{features:d}of a)d instanceof Array&&d.forEach(u=>f.push(u));return(0,v.Tw)(f).sort((d,u)=>d.localeCompare(u))}),(0,O.d)(1)),this.available_assets=(0,J.aj)([this.options,this.assets,this._form_value]).pipe((0,ge.b)(500),(0,S.b)(([{type:a}])=>this._loading.next(`Checking ${a} availability...`)),(0,$.w)(([a,f,d])=>F({period_start:(0,Z.Z)(d.date),period_end:(0,Z.Z)((0,N.Z)(d.date,d.duration||1440)),type:a.type,zones:a.zone_id}).pipe((0,x.U)(u=>f.filter(c=>{var h,g,k;return!1!==c.bookable&&(!a.features||(null===(h=a.features)||void 0===h?void 0:h.every(p=>c.features.includes(p))))&&(!a.zone_id||a.zone_id===(null===(g=c.zone)||void 0===g?void 0:g.id)||a.zone_id===(null===(k=c.zone)||void 0===k?void 0:k.parent_id))&&!u.find(p=>p.asset_id===c.id&&"declined"!==p.status)})))),(0,S.b)(()=>this._loading.next("")),(0,O.d)(1)),this.grouped_availability=(0,J.aj)([this.options,this.available_assets]).pipe((0,x.U)(([a,f])=>{var d;const u=[],c=[...f].sort((g,k)=>{var p,_,y;return null===(_=null===(p=g.zone)||void 0===p?void 0:p.id)||void 0===_?void 0:_.localeCompare(null===(y=k.zone)||void 0===y?void 0:y.id)}),h=(null===(d=a.members)||void 0===d?void 0:d.length)?a.members:[(0,v.ar)()];for(;c.length;){const g=[];let k=c.pop();for(;g.length<h.length&&(!g.length||g.find(p=>{var _,y;return(null===(_=p.zone)||void 0===_?void 0:_.id)===(null===(y=k.zone)||void 0===y?void 0:y.id)}));)g.push(k),k=c.pop();g.length<h.length||u.push(g)}return u})),this.subscription("router.bookings",this._router.events.subscribe(a=>{a instanceof V.m2&&!De.find(f=>a.url.includes(f))&&this.clearForm()})),this._org.initialised.pipe((0,E.P)(a=>a)).subscribe(()=>this.setOptions({}))}get view(){return this._view.getValue()}get form(){return this._form.getValue()}get booking(){return this._booking.getValue()}newForm(o=new C){this._form.next(function xe(t={}){var n,o;const s=new m.cw({id:new m.NI(t.id||""),date:new m.NI(t.date,[]),all_day:new m.NI(null!==(n=t.all_day)&&void 0!==n&&n),duration:new m.NI(t.duration),booking_type:new m.NI(t.booking_type),zones:new m.NI(t.zones),title:new m.NI(t.title),description:new m.NI(t.description),asset_id:new m.NI(t.asset_id),asset_name:new m.NI(t.description),map_id:new m.NI(null===(o=t.extension_data)||void 0===o?void 0:o.map_id),user:new m.NI((0,v.ar)()),user_id:new m.NI(t.user_id),user_email:new m.NI(t.user_email),booked_by:new m.NI((0,v.ar)()),booked_by_id:new m.NI(t.booked_by_id),booked_by_email:new m.NI(t.booked_by_email)});return s.valueChanges.subscribe(i=>{const r=i.user,a=i.booked_by;(a||r)&&s.patchValue({user_id:r.id||a.id,user_email:r.email||a.id,booked_by_id:a.id,booked_by_email:a.email},{emitEvent:!1})}),s}(o)),this.subscription("form_change",this._form.getValue().valueChanges.subscribe(()=>this.storeForm())),this._booking.next(o),this._options.next({type:this._options.getValue().type})}setView(o){this._view.next(o)}setOptions(o){this._options.next(Object.assign(Object.assign({},this._options.getValue()),o))}resetForm(){this._form.getValue()||this.newForm();const o=this._booking.getValue();this._form.getValue().patchValue(Object.assign(Object.assign({},o||{}),(null==o?void 0:o.extension_data)||{})),this._options.next({type:this._options.getValue().type})}clearForm(){sessionStorage.removeItem("PLACEOS.booking_form"),sessionStorage.removeItem("PLACEOS.booking_form_options"),this.newForm()}storeForm(){var o,s;sessionStorage.setItem("PLACEOS.booking_form",JSON.stringify((null===(o=this._form.getValue())||void 0===o?void 0:o.value)||{})),sessionStorage.setItem("PLACEOS.booking_form_filters",JSON.stringify(this._options.getValue()||{})),this._form_value.next((null===(s=this._form.getValue())||void 0===s?void 0:s.value)||{})}loadForm(){var o;this._form.getValue()||this.newForm(),this._form.getValue().patchValue(Object.assign({},JSON.parse(sessionStorage.getItem("PLACEOS.booking_form")||"{}"))),this.setOptions(Object.assign({zone_id:null===(o=this._org.building)||void 0===o?void 0:o.id},JSON.parse(sessionStorage.getItem("PLACEOS.booking_form_filters")||"{}")))}confirmPost(){return(0,I.mG)(this,void 0,void 0,function*(){yield this.checkQuestions();const o=this._options.getValue(),s=this._form.getValue();let i=`Would you like to book the ${o.type} ${s.value.asset_name} for ${(0,j.Z)(s.value.date,"dd MMM yyyy")}${s.value.duration<720?" at "+(0,j.Z)(s.value.date,"h:mm a"):""}`;o.group&&(i=`${i}.<br>You group members will be assigned desks nearby your selected desk.`);const r=yield(0,v._5)({title:`Book ${o.type}`,content:i,icon:{content:"event_available"}},this._dialog);if("done"!==(null==r?void 0:r.reason))throw"User cancelled";r.loading("Performing booking request..."),o.group?yield this.postFormForGroup().catch(a=>{throw(0,v.cB)(a),r.close(),a}):yield this.postForm().catch(a=>{throw(0,v.cB)(a),r.close(),a}),r.close()})}postForm(o=!1){var s;return(0,I.mG)(this,void 0,void 0,function*(){const i=this._form.getValue();if(!i)throw"No form for booking";if(!i.valid)throw`Some form fields are invalid. [${(0,v.RD)(i).join(", ")}]`;o||(yield this.checkResourceAvailable(i.value,this._options.getValue().type)),(i.value.duration>=720||i.value.all_day)&&i.patchValue({date:(0,me.Z)(i.value.date,{hours:11,minutes:59}),duration:720});const r=yield G(new C(i.value)).toPromise(),{booking_type:a}=i.value;return this.clearForm(),null===(s=this._form.getValue())||void 0===s||s.patchValue({booking_type:a}),this.last_success=r,sessionStorage.setItem("PLACEOS.last_booked_booking",JSON.stringify(r)),this.setView("success"),r})}postFormForGroup(){var o,s,i;return(0,I.mG)(this,void 0,void 0,function*(){const{members:r,group:a,type:f}=this._options.getValue();if(!a)throw"No group available to book for";const d=r.filter(_=>_.email!==(0,v.ar)().email);if(d.length<=0)throw"No members in your group to book for.";const u=this._form.getValue().value,c=yield this.available_assets.pipe((0,pe.q)(1)).toPromise(),h=c.find(_=>_.id===u.asset_id||_.map_id===u.asset_id),g=this._org.levelWithID([null===(o=h.zone)||void 0===o?void 0:o.id]),k=[h,...yield this._getNearbyResources(g.map_id,u.asset_id,c,d.length)];console.log("Selected Assets:",k);const p=[(0,v.ar)(),...d];yield Promise.all(p.map((_,y)=>this.checkResourceAvailable(Object.assign(Object.assign({},u),{asset_id:k[y].map_id||k[y].id,user_email:_.email}),f)));for(let _=0;_<p.length;_++){const y=p[_],b=k[_];this._form.getValue().patchValue(Object.assign(Object.assign({},u),{user:y,asset_id:null==b?void 0:b.id,asset_name:b.name,map_id:(null==b?void 0:b.map_id)||(null==b?void 0:b.id),description:b.name,zones:b.zone?[null===(s=b.zone)||void 0===s?void 0:s.parent_id,null===(i=b.zone)||void 0===i?void 0:i.id]:[]})),console.log("Form Value:",this._form.getValue().value),this.postForm(!0)}})}checkQuestions(){return(0,I.mG)(this,void 0,void 0,function*(){if(!1!==this._settings.get("app.desks.ignore_questions"))return;const o=this._dialog.open(P),s=yield Promise.race([o.componentInstance.event.pipe((0,E.P)(r=>"done"===r.reason)).toPromise(),o.afterClosed().toPromise()]);if("done"!==(null==s?void 0:s.reason))throw"User cancelled";const i=o.componentInstance.form.value;for(const r in i)if(i[r])throw"User failed questionaire";o.close()})}checkResourceAvailable({asset_id:o,date:s,duration:i,user_email:r,all_day:a},f){var d;return(0,I.mG)(this,void 0,void 0,function*(){i=a?720:i||60;const u=yield F({period_start:(0,Z.Z)(s),period_end:(0,Z.Z)(s+60*i*1e3),type:f}).toPromise();if(u.find(h=>h.asset_id===o))throw`${o} is not available at the selected time`;const c=null!==(d=this._settings.get(`app.booking.allowed_daily_${f}_count`))&&void 0!==d?d:1;if(c>0&&u.filter(h=>{var g;return h.user_email===(r||(null===(g=(0,v.ar)())||void 0===g?void 0:g.email))&&"declined"!==h.status}).length>=c){const h=r===(0,v.ar)().email;throw`${h?"You":r} already ${h?"have":"has"} a desk booked`}return!0})}_getNearbyResources(o,s,i,r){return(0,I.mG)(this,void 0,void 0,function*(){const a=[];let f=i.filter(d=>d.id!==s&&d.map_id!==s);console.log("Assets:",i,f,s);for(let d=0;d<r;d++){const u=yield L(o,s,f.map(c=>c.map_id||c.id));u&&(a.push(i.find(c=>c.id===u||c.map_id===u)),f=f.filter(c=>c.id!==u&&c.map_id!==u)),console.log("Asset List:",f)}return a})}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(V.F0),e.LFG(v.gb),e.LFG(ce.w7),e.LFG(U.uw))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);
//# sourceMappingURL=default-libs_bookings_src_index_ts.js.map