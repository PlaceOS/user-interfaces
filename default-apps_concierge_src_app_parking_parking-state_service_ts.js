"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["default-apps_concierge_src_app_parking_parking-state_service_ts"],{96685:(S,F,o)=>{o.d(F,{U:()=>h});var t=o(89204),e=o(34456),i=o(12587),A=o(57915),f=o(77375),n=o(7404),I=o(60316),x=o(24950),U=o(87984),R=o(41134),b=o(85060),L=o(19608),T=o(18e3),j=o(69434),y=o(24844);function B(c,k){1&c&&(n.j41(0,"button",7)(1,"app-icon"),n.EFF(2,"close"),n.k0s()())}function W(c,k){1&c&&(n.j41(0,"div",24),n.nrm(1,"a-user-search-field",25),n.k0s())}function P(c,k){1&c&&(n.j41(0,"span"),n.EFF(1,"*"),n.k0s())}function u(c,k){if(1&c&&(n.j41(0,"main",8),n.DNE(1,W,2,0,"div",9),n.j41(2,"div",10)(3,"div",11)(4,"label",12),n.EFF(5,"Name"),n.k0s(),n.j41(6,"mat-form-field",13),n.nrm(7,"input",14),n.j41(8,"mat-error"),n.EFF(9,"A name is required"),n.k0s()()(),n.j41(10,"div",11)(11,"label",15),n.EFF(12,"Email"),n.k0s(),n.j41(13,"mat-form-field",13),n.nrm(14,"input",16),n.j41(15,"mat-error"),n.EFF(16,"An email is required"),n.k0s()()()(),n.j41(17,"label",17),n.EFF(18,"Date"),n.k0s(),n.nrm(19,"a-date-field",18),n.j41(20,"label",19),n.EFF(21,"Parking Space"),n.k0s(),n.nrm(22,"parking-space-list-field",20),n.j41(23,"label",21),n.EFF(24," Plate Number"),n.DNE(25,P,2,0,"span",22),n.k0s(),n.j41(26,"mat-form-field",13),n.nrm(27,"input",23),n.j41(28,"mat-error"),n.EFF(29,"A plate number is required"),n.k0s()()()),2&c){const m=n.XpG();n.Y8G("formGroup",m.form),n.R7$(),n.Y8G("ngIf",!m.user),n.R7$(24),n.Y8G("ngIf",m.user)}}function _(c,k){if(1&c){const m=n.RV6();n.j41(0,"footer",26)(1,"button",27),n.EFF(2," Cancel "),n.k0s(),n.j41(3,"button",28),n.bIt("click",function(){n.eBV(m);const v=n.XpG();return n.Njj(v.postForm())}),n.EFF(4," Save "),n.k0s()()}}function a(c,k){1&c&&(n.j41(0,"main",29),n.nrm(1,"mat-spinner",30),n.j41(2,"p"),n.EFF(3,"Saving parking reservation..."),n.k0s()())}let h=(()=>{class c extends f.Tv{get id(){return this.form.value.id}constructor(m,O,v){super(),this._data=m,this._booking_form=O,this._dialog_ref=v,this.loading=!1,this.user=this._data.user,this.date=this._data.date,this.form=this._booking_form.form}ngOnInit(){this._booking_form.newForm(this._data.booking),this._booking_form.setOptions({type:"parking"}),this.subscription("user_changes",this.form.controls.user.valueChanges.subscribe(m=>{m&&this.form.patchValue({user_name:m.name,user_email:m.email,user_id:m.id||m.email,attendees:[m]})})),this.form.patchValue({all_day:!0,booking_type:"parking",user:this._data.user||(0,f.Ny)()}),this._data.user&&(this.form.patchValue({user_email:this._data.user.email,user_id:this._data.user.email,user_name:this._data.user.name,attendees:[this._data.user]}),this.form.controls.plate_number.setValidators([e.k0.required]),this.form.controls.user_name.disable(),this.form.controls.user_email.disable()),this._data.level&&this._booking_form.setOptions({zone_id:this._data.level.id}),this._data.link_id&&this.form.patchValue({parent_id:this._data.link_id}),this._data.space&&this.form.patchValue({resources:[this._data.space]}),this._data.date&&(this.timeout("init_date",()=>{this.form.patchValue({date:this._data.date}),this._data.allow_time_changes||this.form.get("date").disable()},300),this._data.allow_time_changes||this.subscription("form_change",this.form.valueChanges.subscribe(m=>{this.timeout("disable_date",()=>this.form.get("date").disable({emitEvent:!1}),50)})))}postForm(){var m=this;return(0,t.A)(function*(){if(m.form.markAllAsTouched(),m.form.updateValueAndValidity(),!m.form.valid)return;m.loading=!0,m._data.external_user&&m.form.patchValue({user_id:void 0});const O=yield m._booking_form.postForm().catch(v=>{throw m.loading=!1,m.form.controls.plate_number.setValidators([]),(0,f.UG)(v),v});m.form.controls.plate_number.setValidators([]),m._dialog_ref.close(O.id)})()}static#e=this.\u0275fac=function(O){return new(O||c)(n.rXU(i.Vh),n.rXU(A.nx),n.rXU(i.CP))};static#t=this.\u0275cmp=n.VBU({type:c,selectors:[["parking-booking-modal"]],features:[n.Vt3],decls:9,vars:5,consts:[["load_state",""],[1,"w-[32rem]"],[1,"flex","items-center","justify-between","px-2","w-full"],[1,"px-2"],["icon","","matRipple","","mat-dialog-close","",4,"ngIf"],["class","p-4 flex flex-col max-h-[65vh] overflow-auto",3,"formGroup",4,"ngIf","ngIfElse"],["class","flex items-center justify-end space-x-2 p-2 border-t border-base-200",4,"ngIf"],["icon","","matRipple","","mat-dialog-close",""],[1,"p-4","flex","flex-col","max-h-[65vh]","overflow-auto",3,"formGroup"],["class","flex items-center space-x-2 mb-4",4,"ngIf"],[1,"flex","items-center","space-x-2"],[1,"flex-1"],["for","user-name"],["appearance","outline",1,"w-full"],["matInput","","name","user-name","formControlName","user_name","placeholder","Name"],["for","email"],["matInput","","name","email","formControlName","user_email","placeholder","Email"],["for","date"],["formControlName","date"],["for","parking-space"],["name","parking-space","formControlName","resources",1,"mb-2"],["for","plate-number"],[4,"ngIf"],["matInput","","name","plate-number","formControlName","plate_number","placeholder","Plate Number"],[1,"flex","items-center","space-x-2","mb-4"],["name","user","formControlName","user",1,"flex-1"],[1,"flex","items-center","justify-end","space-x-2","p-2","border-t","border-base-200"],["btn","","matRipple","","mat-dialog-close","",1,"w-32","inverse"],["btn","","matRipple","",1,"w-32",3,"click"],[1,"p-8","flex","flex-col","items-center","justify-center","user-y-2"],["diameter","32"]],template:function(O,v){if(1&O&&(n.j41(0,"div",1)(1,"header",2)(2,"h2",3),n.EFF(3),n.k0s(),n.DNE(4,B,3,0,"button",4),n.k0s(),n.DNE(5,u,30,3,"main",5)(6,_,5,0,"footer",6),n.k0s(),n.DNE(7,a,4,0,"ng-template",null,0,n.C5r)),2&O){const G=n.sdS(8);n.R7$(3),n.SpI(" ",v.id?"Edit":"New"," Parking Reservation "),n.R7$(),n.Y8G("ngIf",!v.loading),n.R7$(),n.Y8G("ngIf",!v.loading)("ngIfElse",G),n.R7$(),n.Y8G("ngIf",!v.loading)}},dependencies:[I.bT,x.rl,x.TL,U.fg,R.LG,i.tx,b.r6,e.me,e.BC,e.cb,e.j4,e.JD,L.G,T.$,j.R,y.I]})}return c})()},34836:(S,F,o)=>{o.d(F,{D:()=>W});var t=o(89204),e=o(7404),i=o(34456),A=o(12587),f=o(68390),n=o(60316),I=o(24950),x=o(87984),U=o(80640),R=o(41134),b=o(85060),L=o(18e3),T=o(69434);function j(P,u){1&P&&(e.j41(0,"button",6)(1,"app-icon"),e.EFF(2,"close"),e.k0s()())}function y(P,u){if(1&P){const _=e.RV6();e.j41(0,"main",7)(1,"label",8),e.EFF(2,"Parking Space Name/Bay Number"),e.k0s(),e.j41(3,"mat-form-field",9),e.nrm(4,"input",10),e.j41(5,"mat-error"),e.EFF(6,"A name is required for parking spaces"),e.k0s()(),e.j41(7,"label",11),e.EFF(8,"Map ID"),e.k0s(),e.j41(9,"mat-form-field",9),e.nrm(10,"input",12),e.j41(11,"mat-error"),e.EFF(12," A map ID is required for parking spaces "),e.k0s()(),e.j41(13,"label",13),e.EFF(14,"Assigned User"),e.k0s(),e.j41(15,"div",14),e.nrm(16,"a-user-search-field",15),e.j41(17,"button",16),e.bIt("click",function(){e.eBV(_);const h=e.XpG();return e.Njj(h.form.patchValue({assigned_user:null,assigned_to:null,assigned_name:null}))}),e.j41(18,"app-icon",17),e.EFF(19," person_cancel "),e.k0s()()(),e.j41(20,"label",18),e.EFF(21,"Notes"),e.k0s(),e.j41(22,"mat-form-field",9),e.nrm(23,"textarea",19),e.k0s(),e.j41(24,"div",20)(25,"button",21),e.EFF(26," Cancel "),e.k0s(),e.j41(27,"button",22),e.bIt("click",function(){e.eBV(_);const h=e.XpG();return e.Njj(h.postForm())}),e.EFF(28," Save "),e.k0s()()()}if(2&P){const _=e.XpG();e.Y8G("formGroup",_.form)}}function B(P,u){1&P&&(e.j41(0,"main",23),e.nrm(1,"mat-spinner",24),e.j41(2,"p"),e.EFF(3,"Saving parking space details..."),e.k0s()())}let W=(()=>{class P{get id(){return this._data?.id||""}constructor(_,a){this._data=_,this._dialog_ref=a,this.event=new e.bkB,this.form=new i.gE({id:new i.MJ(""),name:new i.MJ("",[i.k0.required]),map_id:new i.MJ("",[i.k0.required]),assigned_user:new i.MJ(null),assigned_to:new i.MJ(""),assigned_name:new i.MJ(""),notes:new i.MJ(""),map_rotation:new i.MJ(0)}),_&&this.form.patchValue(_)}ngOnInit(){var _=this;return(0,t.A)(function*(){if(_._data.assigned_to){const a=yield(0,f.SZ)(_._data.assigned_to).toPromise();a&&_.form.patchValue({assigned_user:a,assigned_to:a.email,assigned_name:a.name})}})()}postForm(){if(!this.form.valid)return;this.loading=!0;const _={...this.form.getRawValue()};_.assigned_user&&(_.assigned_to=_.assigned_user.email,_.assigned_name=_.assigned_user.name,delete _.assigned_user),this._dialog_ref.disableClose=!0,this.event.emit({reason:"done",metadata:_})}static#e=this.\u0275fac=function(a){return new(a||P)(e.rXU(A.Vh),e.rXU(A.CP))};static#t=this.\u0275cmp=e.VBU({type:P,selectors:[["parking-space-modal"]],outputs:{event:"event"},decls:8,vars:4,consts:[["load_state",""],[1,"w-[28rem]"],[1,"flex","items-center","justify-between","px-2","w-full"],[1,"px-2"],["icon","","matRipple","","mat-dialog-close","",4,"ngIf"],["class","p-4 flex flex-col",3,"formGroup",4,"ngIf","ngIfElse"],["icon","","matRipple","","mat-dialog-close",""],[1,"p-4","flex","flex-col",3,"formGroup"],["for","name"],["appearance","outline"],["matInput","","name","name","formControlName","name"],["for","map-id"],["matInput","","name","map-id","formControlName","map_id"],["for","user"],[1,"flex","items-center","space-x-2","mb-4"],["name","user","formControlName","assigned_user",1,"flex-1"],["icon","","matRipple","","matTooltip","Clear Assigned User",1,"h-12","w-12","min-w-12","rounded","bg-secondary","text-secondary-content",3,"click"],["className","material-symbols-outlined"],["for","notes"],["matInput","","name","notes","formControlName","notes"],[1,"flex","items-center","justify-center","space-x-2"],["btn","","matRipple","","mat-dialog-close","",1,"w-32","inverse"],["btn","","matRipple","",1,"w-32",3,"click"],[1,"p-8","flex","flex-col","items-center","justify-center","space-y-2"],["diameter","32"]],template:function(a,h){if(1&a&&(e.j41(0,"div",1)(1,"header",2)(2,"h2",3),e.EFF(3),e.k0s(),e.DNE(4,j,3,0,"button",4),e.k0s(),e.DNE(5,y,29,1,"main",5),e.k0s(),e.DNE(6,B,4,0,"ng-template",null,0,e.C5r)),2&a){const c=e.sdS(7);e.R7$(3),e.SpI("",h.id?"Edit":"New"," Parking Space"),e.R7$(),e.Y8G("ngIf",!h.loading),e.R7$(),e.Y8G("ngIf",!h.loading)("ngIfElse",c)}},dependencies:[n.bT,I.rl,I.TL,x.fg,U.oV,R.LG,A.tx,b.r6,i.me,i.BC,i.cb,i.j4,i.JD,L.$,T.R]})}return P})()},28007:(S,F,o)=>{o.d(F,{X:()=>O});var t=o(89204),e=o(57915),i=o(77375),A=o(12185),f=o(3998),n=o(99908),I=o(33240),x=o(56441),U=o(16671),R=o(90521),b=o(42175),L=o(71536),T=o(35443),j=o(71963),y=o(66e3),B=o(7841),W=o(8627),P=o(19803),u=o(57871),_=o(33602),a=o(34836),h=o(6233),c=o(96685),k=o(7404),m=o(12587);let O=(()=>{class v extends i.Tv{constructor(s,r,g){super(),this._org=s,this._dialog=r,this._settings=g,this._poll=new R.t(0),this._change=new R.t(0),this._options=new R.t({date:Date.now(),search:"",zones:[]}),this._loading=new R.t([]),this.levels=(0,b.zV)([this._org.active_region,this._org.active_building]).pipe((0,T.T)(([l,p])=>{const d=this._org.levels.filter(E=>E.tags.includes("parking"));if(this._settings.get("app.use_region")){const E=this._org.buildingsForRegion(),M=E.map(D=>D.id),C=d.filter(D=>M.includes(D.parent_id));return C.map(D=>({...D,display_name:`${E.find(K=>K.id===D.parent_id)?.display_name} - ${D.display_name}`})),C}return d.filter(E=>E.parent_id===p.id)})),this.spaces=(0,b.zV)([this.levels,this._options,this._change]).pipe((0,j.n)(([l,p])=>p.zones[0]||l[0]?.id?(this._loading.next([...this._loading.getValue(),"spaces"]),(0,f.bpY)(p.zones[0]||l[0]?.id,"parking-spaces").pipe((0,T.T)(({details:d})=>(d instanceof Array?d:[]).map(E=>({...E,zone_id:p.zones[0]||l[0]?.id}))))):(0,L.of)([])),(0,y.M)(()=>this._loading.next(this._loading.getValue().filter(l=>"spaces"!==l))),(0,B.t)(1)),this.users=(0,b.zV)([this._org.active_building,this._change]).pipe((0,W.p)(([l])=>!!l?.id),(0,j.n)(([l])=>(this._loading.next([...this._loading.getValue(),"users"]),(0,f.bpY)(l.id,"parking-users"))),(0,T.T)(l=>l.details instanceof Array?l.details:[]),(0,y.M)(()=>this._loading.next(this._loading.getValue().filter(l=>"users"!==l))),(0,B.t)(1)),this.bookings=(0,b.zV)([this._org.active_building,this._options,this.users,this._poll,this._change]).pipe((0,P.B)(500),(0,j.n)(([l,p,d])=>(this._loading.next([...this._loading.getValue(),"bookings"]),(0,e.tj)({period_start:(0,n._)((0,I.o)(p.date)),period_end:(0,n._)((0,x.D)(p.date)),type:"parking",zones:p.zones?.length?p.zones.join(","):(this._settings.get("app.use_region")?this._org.region?.id:"")||l?.id,include_checked_out:!0}).pipe((0,T.T)(E=>{for(const M of E){const C=d.find(D=>D.email.toLowerCase()===M.user_email.toLowerCase());C&&(M.extension_data.plate_number=M.extension_data.plate_number||C.plate_number)}return E})))),(0,y.M)(()=>this._loading.next(this._loading.getValue().filter(l=>"bookings"!==l))),(0,B.t)(1)),this.options=this._options.asObservable(),this.loading=this._loading.asObservable()}setOptions(s){this._options.next({...this._options.getValue(),...s})}startPolling(s=12e4){return this._poll.next(Date.now()),this.interval("poll",()=>this._poll.next(Date.now()),s),()=>this.stopPolling()}stopPolling(){this.clearInterval("poll")}editSpace(s={}){var r=this;return(0,t.A)(function*(){const g=r._dialog.open(a.D,{data:s}),l=yield Promise.race([g.afterClosed().toPromise(),g.componentInstance.event.pipe((0,u.$)(D=>"done"===D.reason)).toPromise()]);if("done"!==l?.reason)return;const p=r._options.getValue().zones[0]||s.zone_id||r._org.levelsForBuilding()[0]?.id,d={...l.metadata,zone:p,id:l.metadata.id||`parking-${p}.${(0,i.HO)(999999)}`},E=yield r.spaces.pipe((0,_.s)(1)).toPromise(),M=E.findIndex(D=>D.id===d.id);if(s.assigned_to&&s.assigned_to!==d.assigned_to){const K=(yield(0,e.tj)({period_start:(0,n._)((0,I.o)(Date.now())),period_end:(0,n._)((0,x.D)(Date.now())),type:"parking",email:d.assigned_to,include_checked_out:!0}).toPromise()).filter(N=>N.asset_id===s.id);yield Promise.all(K.map(N=>(0,e.UN)(N.id).toPromise()))}s.assigned_to!==d.assigned_to&&d.assigned_to&&(yield(0,e.X0)(new e.Qr({user_id:d.assigned_to,user_email:d.assigned_to,booking_start:(0,n._)((0,I.o)(Date.now())),booking_end:(0,n._)((0,x.D)(Date.now())),type:"parking",booking_type:"parking",asset_id:d.id,asset_name:d.name,recurrence_type:"daily",recurrence_days:e.WS.MONDAY|e.WS.TUESDAY|e.WS.WEDNESDAY|e.WS.THURSDAY|e.WS.FRIDAY,zones:(0,i.Am)([r._org.organisation.id,r._org.region?.id,r._org.building?.id,d.zone_id||d.zone?.id||d.zone]),extension_data:{asset_name:d.name}})).toPromise()),M>=0?E[M]=d:E.push(d);const C=E;yield(0,f.D58)(p,{name:"parking-spaces",details:C,description:"List of available parking spaces"}).toPromise(),r._change.next(Date.now()),g.close()})()}removeSpace(s){var r=this;return(0,t.A)(function*(){const g=yield(0,i.GE)({title:"Remove Parking Space",content:`Are you sure you wish to remove the parking space "${s.name}"?`,icon:{content:"delete"}},r._dialog);if("done"!==g?.reason)return;g.loading("Removing parking space...");const l=r._options.getValue().zones[0],p=yield r.spaces.pipe((0,_.s)(1)).toPromise();yield(0,f.D58)(l,{name:"parking-spaces",details:p.filter(d=>d.id!==s.id),description:"List of available parking spaces"}).toPromise(),g.close()})()}editUser(s){var r=this;return(0,t.A)(function*(){const g=r._dialog.open(h.K,{data:s}),l=yield Promise.race([g.afterClosed().toPromise(),g.componentInstance.event.pipe((0,u.$)(C=>"done"===C.reason)).toPromise()]);if("done"!==l?.reason)return;const p=r._org.building.id,d={...l.metadata,id:l.metadata.id||`P:USR-${(0,i.HO)(999999)}`};"user"in d&&delete d.user;const E=yield r.users.pipe((0,_.s)(1)).toPromise(),M=E.findIndex(C=>C.id===d.id);M>=0?E[M]=d:E.push(d),yield(0,f.D58)(p,{name:"parking-users",details:E,description:"List of available parking users"}).toPromise(),r._change.next(Date.now()),g.close()})()}removeUser(s){var r=this;return(0,t.A)(function*(){const g=yield(0,i.GE)({title:"Remove Parking User",content:`Are you sure you wish to remove the parking user "${s.name}"?`,icon:{content:"delete"}},r._dialog);if("done"!==g?.reason)return;g.loading("Removing parking user...");const l=r._options.getValue().zones[0],p=yield r.users.pipe((0,_.s)(1)).toPromise();yield(0,f.D58)(l,{name:"parking-users",details:p.filter(d=>d.id!==s.id),description:"List of available parking users"}).toPromise(),g.close()})()}editReservation(s,{user:r,link_id:g,date:l,space:p,allow_time_changes:d,external_user:E}={}){var M=this;return new Promise(function(){var C=(0,t.A)(function*(D){const K=yield M.levels.pipe((0,_.s)(1)).toPromise(),N=yield M.spaces.pipe((0,_.s)(1)).toPromise();!p&&s?.asset_id&&(p=N.find(V=>V.id===s.asset_id)),M._dialog.open(c.U,{data:{booking:s,user:r,link_id:g,date:l,level:K[0],space:p,allow_time_changes:d,external_user:E}}).afterClosed().subscribe(V=>D(V))});return function(D){return C.apply(this,arguments)}}())}setBookingCheckinState(s,r=!0){var g=this;return(0,t.A)(function*(){const p=yield(s.instance?(0,e.eW)(s.id,s.instance,r):(0,e.Z$)(s.id,r)).toPromise().catch(d=>"failed");"failed"===p?(0,i.UG)("Error setting checkin state of parking booking"):(0,i.VX)(`${r?"Checked in to":"Checked out of"} parking reservation for ${s.user_name} on ${(0,U.GP)(s.date,"MMM Do")}.`),"failed"!==p&&g._change.next(Date.now())})()}approveBooking(s){var r=this;return(0,t.A)(function*(){const l=yield(s.instance?(0,e.wk)(s.id,s.instance):(0,e.DD)(s.id)).toPromise().catch(p=>"failed");"failed"===l?(0,i.UG)("Error approving in parking booking"):(0,i.VX)(`Approved parking reservation for ${s.user_name} on ${(0,U.GP)(s.date,"MMM Do")}.`),"failed"!==l&&r._change.next(Date.now())})()}rejectBooking(s){var r=this;return(0,t.A)(function*(){const l=yield(s.instance?(0,e.U)(s.id,s.instance):(0,e.vB)(s.id)).toPromise().catch(p=>"failed");"failed"===l?(0,i.UG)("Error rejecting in parking booking"):(0,i.VX)(`Rejected parking reservation for ${s.user_name} on ${(0,U.GP)(s.date,"MMM dd")}.`),"failed"!==l&&r._change.next(Date.now())})()}static#e=this.\u0275fac=function(r){return new(r||v)(k.KVO(A.yb),k.KVO(m.bZ),k.KVO(i.h$))};static#t=this.\u0275prov=k.jDH({token:v,factory:v.\u0275fac,providedIn:"root"})}return v})()},6233:(S,F,o)=>{o.d(F,{K:()=>P});var t=o(7404),e=o(34456),i=o(12587),A=o(77375),f=o(60316),n=o(24950),I=o(87984),x=o(97024),U=o(80640),R=o(41134),b=o(85060),L=o(18e3),T=o(69434);function j(u,_){1&u&&(t.j41(0,"button",8)(1,"app-icon"),t.EFF(2,"close"),t.k0s()())}function y(u,_){if(1&u){const a=t.RV6();t.j41(0,"main",9)(1,"div",10),t.nrm(2,"a-user-search-field",11),t.j41(3,"button",12),t.bIt("click",function(){t.eBV(a);const c=t.XpG();return t.Njj(c.form.patchValue({user:null,email:null,name:null,phone:null}))}),t.j41(4,"app-icon",13),t.EFF(5," person_cancel "),t.k0s()()(),t.j41(6,"label",14),t.EFF(7,"Name"),t.k0s(),t.j41(8,"mat-form-field",15),t.nrm(9,"input",16),t.j41(10,"mat-error"),t.EFF(11,"A name is required"),t.k0s()(),t.j41(12,"label",17),t.EFF(13,"Email"),t.k0s(),t.j41(14,"mat-form-field",15),t.nrm(15,"input",18),t.j41(16,"mat-error"),t.EFF(17,"An email is required"),t.k0s()(),t.j41(18,"div",19)(19,"div",20)(20,"label",21),t.EFF(21,"Car Number Plate"),t.k0s(),t.j41(22,"mat-form-field",22),t.nrm(23,"input",23),t.k0s()(),t.j41(24,"div",20)(25,"label",24),t.EFF(26,"Car Colour"),t.k0s(),t.j41(27,"mat-form-field",22),t.nrm(28,"input",25),t.k0s()()(),t.j41(29,"label",26),t.EFF(30,"Notes"),t.k0s(),t.j41(31,"mat-form-field",15),t.nrm(32,"textarea",27),t.k0s(),t.j41(33,"div",28)(34,"mat-checkbox",29),t.pXf(35,1),t.k0s()()()}if(2&u){const a=t.XpG();t.Y8G("formGroup",a.form)}}function B(u,_){if(1&u){const a=t.RV6();t.j41(0,"footer",30)(1,"button",31),t.EFF(2," Cancel "),t.k0s(),t.j41(3,"button",32),t.bIt("click",function(){t.eBV(a);const c=t.XpG();return t.Njj(c.postForm())}),t.EFF(4," Save "),t.k0s()()}}function W(u,_){1&u&&(t.j41(0,"main",33),t.nrm(1,"mat-spinner",34),t.j41(2,"p"),t.EFF(3,"Saving parking user details..."),t.k0s()())}let P=(()=>{class u extends A.Tv{get id(){return this._data?.id||""}constructor(a,h){super(),this._data=a,this._dialog_ref=h,this.event=new t.bkB,this.loading=!1,this.form=new e.gE({id:new e.MJ(""),user:new e.MJ(null),name:new e.MJ("",[e.k0.required]),email:new e.MJ("",[e.k0.required]),plate_number:new e.MJ(""),car_color:new e.MJ(""),notes:new e.MJ(""),deny:new e.MJ(!1)}),a&&this.form.patchValue(a)}ngOnInit(){this.subscription("user",this.form.valueChanges.subscribe(a=>{a.user&&this.form.patchValue({email:a.user.email,name:a.user.name})}))}postForm(){if(!this.form.valid)return;this.loading=!0;const a=this.form.value;a.user&&(a.email=a.user.email,a.name=a.user.name),this._dialog_ref.disableClose=!0,this.event.emit({reason:"done",metadata:a})}static#e=this.\u0275fac=function(h){return new(h||u)(t.rXU(i.Vh),t.rXU(i.CP))};static#t=this.\u0275cmp=t.VBU({type:u,selectors:[["parking-user-modal"]],outputs:{event:"event"},features:[t.Vt3],decls:9,vars:5,consts:()=>{let a;return a=$localize`:@@deny␟52641a66d27267c758ce08ae66f779767c90552f␟5404152440006125242: Deny User Parking Access `,[["load_state",""],a,[1,"w-[28rem]"],[1,"flex","items-center","justify-between","px-2","w-full"],[1,"px-2"],["icon","","matRipple","","mat-dialog-close","",4,"ngIf"],["class","p-4 flex flex-col max-h-[65vh] overflow-auto",3,"formGroup",4,"ngIf","ngIfElse"],["class","flex items-center justify-end space-x-2 p-2 border-t border-base-200",4,"ngIf"],["icon","","matRipple","","mat-dialog-close",""],[1,"p-4","flex","flex-col","max-h-[65vh]","overflow-auto",3,"formGroup"],[1,"flex","items-center","space-x-2","mb-4"],["name","user","formControlName","user",1,"flex-1"],["icon","","matRipple","","matTooltip","Clear Selected User",1,"h-12","w-12","min-w-12","rounded","bg-secondary","text-secondary-content",3,"click"],["className","material-symbols-outlined"],["for","name"],["appearance","outline"],["matInput","","name","name","formControlName","name","placeholder","Name"],["for","email"],["matInput","","name","email","formControlName","email","placeholder","Email"],[1,"flex","items-center","space-x-2"],[1,"flex-1","w-1/3"],["for","plate-number"],["appearance","outline",1,"w-full"],["matInput","","name","plate-number","formControlName","plate_number","placeholder","Car Plate Number"],["for","car-color"],["matInput","","name","car-color","formControlName","car_color","placeholder","Car Colour"],["for","notes"],["matInput","","name","notes","formControlName","notes","placeholder","User's Notes"],[1,"px-2","pb-2"],["name","deny","formControlName","deny"],[1,"flex","items-center","justify-end","space-x-2","p-2","border-t","border-base-200"],["btn","","matRipple","","mat-dialog-close","",1,"w-32","inverse"],["btn","","matRipple","",1,"w-32",3,"click"],[1,"p-8","flex","flex-col","items-center","justify-center","user-y-2"],["diameter","32"]]},template:function(h,c){if(1&h&&(t.j41(0,"div",2)(1,"header",3)(2,"h2",4),t.EFF(3),t.k0s(),t.DNE(4,j,3,0,"button",5),t.k0s(),t.DNE(5,y,36,1,"main",6)(6,B,5,0,"footer",7),t.k0s(),t.DNE(7,W,4,0,"ng-template",null,0,t.C5r)),2&h){const k=t.sdS(8);t.R7$(3),t.SpI("",c.id?"Edit":"New"," Parking User"),t.R7$(),t.Y8G("ngIf",!c.loading),t.R7$(),t.Y8G("ngIf",!c.loading)("ngIfElse",k),t.R7$(),t.Y8G("ngIf",!c.loading)}},dependencies:[f.bT,n.rl,n.TL,I.fg,x.So,U.oV,R.LG,i.tx,b.r6,e.me,e.BC,e.cb,e.j4,e.JD,L.$,T.R]})}return u})()},57915:(S,F,o)=>{o.d(F,{Qr:()=>i.Q,nx:()=>e.n,WS:()=>i.W,SG:()=>t.S,DD:()=>f.DD,wk:()=>f.wk,Z$:()=>f.Z$,eW:()=>f.eW,u3:()=>f.u3,tj:()=>f.tj,WE:()=>f.WE,vB:()=>f.vB,U:()=>f.U,UN:()=>f.UN,X0:()=>f.X0,DO:()=>f.DO,vq:()=>f.vq,MV:()=>f.MV});var t=o(49478),e=o(18379),i=o(53857),f=(o(17141),o(18026));o(77375),o(45762),o(3367),o(67254),o(98796),o(1781),o(27547),o(67642),o(1593)}}]);
//# sourceMappingURL=default-apps_concierge_src_app_parking_parking-state_service_ts.js.map