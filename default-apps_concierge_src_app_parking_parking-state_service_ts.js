"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["default-apps_concierge_src_app_parking_parking-state_service_ts"],{6685:(N,y,n)=>{n.d(y,{U:()=>k});var e=n(9204),o=n(4456),p=n(2587),L=n(7915),f=n(2333),t=n(7404),U=n(316),b=n(4950),B=n(7984),x=n(1134),R=n(5060),W=n(9608),T=n(8e3),j=n(9434),A=n(4844);function P(d,M){1&d&&(t.j41(0,"button",7)(1,"app-icon"),t.EFF(2,"close"),t.k0s()())}function F(d,M){1&d&&(t.j41(0,"div",24),t.nrm(1,"a-user-search-field",25),t.k0s())}function c(d,M){1&d&&(t.j41(0,"span"),t.EFF(1,"*"),t.k0s())}function _(d,M){if(1&d&&(t.j41(0,"main",8),t.DNE(1,F,2,0,"div",9),t.j41(2,"div",10)(3,"div",11)(4,"label",12),t.EFF(5,"Name"),t.k0s(),t.j41(6,"mat-form-field",13),t.nrm(7,"input",14),t.j41(8,"mat-error"),t.EFF(9,"A name is required"),t.k0s()()(),t.j41(10,"div",11)(11,"label",15),t.EFF(12,"Email"),t.k0s(),t.j41(13,"mat-form-field",13),t.nrm(14,"input",16),t.j41(15,"mat-error"),t.EFF(16,"An email is required"),t.k0s()()()(),t.j41(17,"label",17),t.EFF(18,"Date"),t.k0s(),t.nrm(19,"a-date-field",18),t.j41(20,"label",19),t.EFF(21,"Parking Space"),t.k0s(),t.nrm(22,"parking-space-list-field",20),t.j41(23,"label",21),t.EFF(24," Plate Number"),t.DNE(25,c,2,0,"span",22),t.k0s(),t.j41(26,"mat-form-field",13),t.nrm(27,"input",23),t.j41(28,"mat-error"),t.EFF(29,"A plate number is required"),t.k0s()()()),2&d){const m=t.XpG();t.Y8G("formGroup",m.form),t.R7$(),t.Y8G("ngIf",!m.user),t.R7$(24),t.Y8G("ngIf",m.user)}}function h(d,M){if(1&d){const m=t.RV6();t.j41(0,"footer",26)(1,"button",27),t.EFF(2," Cancel "),t.k0s(),t.j41(3,"button",28),t.bIt("click",function(){t.eBV(m);const v=t.XpG();return t.Njj(v.postForm())}),t.EFF(4," Save "),t.k0s()()}}function r(d,M){1&d&&(t.j41(0,"main",29),t.nrm(1,"mat-spinner",30),t.j41(2,"p"),t.EFF(3,"Saving parking reservation..."),t.k0s()())}let k=(()=>{class d extends f.Tv{get id(){return this.form.value.id}constructor(m,C,v){super(),this._data=m,this._booking_form=C,this._dialog_ref=v,this.loading=!1,this.user=this._data.user,this.date=this._data.date,this.form=this._booking_form.form}ngOnInit(){this._booking_form.newForm(this._data.booking),this._booking_form.setOptions({type:"parking"}),this.subscription("user_changes",this.form.controls.user.valueChanges.subscribe(m=>{m&&this.form.patchValue({user_name:m.name,user_email:m.email,user_id:m.id||m.email,attendees:[m]})})),this.form.patchValue({all_day:!0,booking_type:"parking",user:this._data.user||(0,f.Ny)()}),this._data.user&&(this.form.patchValue({user_email:this._data.user.email,user_id:this._data.user.email,user_name:this._data.user.name,attendees:[this._data.user]}),this.form.controls.plate_number.setValidators([o.k0.required]),this.form.controls.user_name.disable(),this.form.controls.user_email.disable()),this._data.level&&this._booking_form.setOptions({zone_id:this._data.level.id}),this._data.link_id&&this.form.patchValue({parent_id:this._data.link_id}),this._data.space&&this.form.patchValue({resources:[this._data.space]}),this._data.date&&(this.timeout("init_date",()=>{this.form.patchValue({date:this._data.date}),this.form.get("date").disable()},300),this.subscription("form_change",this.form.valueChanges.subscribe(m=>{this.timeout("disable_date",()=>this.form.get("date").disable({emitEvent:!1}),50)})))}postForm(){var m=this;return(0,e.A)(function*(){if(m.form.updateValueAndValidity(),!m.form.valid)return;m.loading=!0;const C=yield m._booking_form.postForm().catch(v=>{throw m.loading=!1,m.form.controls.plate_number.setValidators([]),(0,f.UG)(v),v});m.form.controls.plate_number.setValidators([]),m._dialog_ref.close(C.id)})()}static#e=this.\u0275fac=function(C){return new(C||d)(t.rXU(p.Vh),t.rXU(L.nx),t.rXU(p.CP))};static#t=this.\u0275cmp=t.VBU({type:d,selectors:[["parking-booking-modal"]],features:[t.Vt3],decls:9,vars:5,consts:[["load_state",""],[1,"w-[32rem]"],[1,"flex","items-center","justify-between","px-2","w-full"],[1,"px-2"],["icon","","matRipple","","mat-dialog-close","",4,"ngIf"],["class","p-4 flex flex-col max-h-[65vh] overflow-auto",3,"formGroup",4,"ngIf","ngIfElse"],["class","flex items-center justify-end space-x-2 p-2 border-t border-base-200",4,"ngIf"],["icon","","matRipple","","mat-dialog-close",""],[1,"p-4","flex","flex-col","max-h-[65vh]","overflow-auto",3,"formGroup"],["class","flex items-center space-x-2 mb-4",4,"ngIf"],[1,"flex","items-center","space-x-2"],[1,"flex-1"],["for","user-name"],["appearance","outline",1,"w-full"],["matInput","","name","user-name","formControlName","user_name","placeholder","Name"],["for","email"],["matInput","","name","email","formControlName","user_email","placeholder","Email"],["for","date"],["formControlName","date"],["for","parking-space"],["name","parking-space","formControlName","resources",1,"mb-2"],["for","plate-number"],[4,"ngIf"],["matInput","","name","plate-number","formControlName","plate_number","placeholder","Plate Number"],[1,"flex","items-center","space-x-2","mb-4"],["name","user","formControlName","user",1,"flex-1"],[1,"flex","items-center","justify-end","space-x-2","p-2","border-t","border-base-200"],["btn","","matRipple","","mat-dialog-close","",1,"w-32","inverse"],["btn","","matRipple","",1,"w-32",3,"click"],[1,"p-8","flex","flex-col","items-center","justify-center","user-y-2"],["diameter","32"]],template:function(C,v){if(1&C&&(t.j41(0,"div",1)(1,"header",2)(2,"h2",3),t.EFF(3),t.k0s(),t.DNE(4,P,3,0,"button",4),t.k0s(),t.DNE(5,_,30,3,"main",5)(6,h,5,0,"footer",6),t.k0s(),t.DNE(7,r,4,0,"ng-template",null,0,t.C5r)),2&C){const V=t.sdS(8);t.R7$(3),t.SpI(" ",v.id?"Edit":"New"," Parking Reservation "),t.R7$(),t.Y8G("ngIf",!v.loading),t.R7$(),t.Y8G("ngIf",!v.loading)("ngIfElse",V),t.R7$(),t.Y8G("ngIf",!v.loading)}},dependencies:[U.bT,b.rl,b.TL,B.fg,x.LG,p.tx,R.r6,o.me,o.BC,o.cb,o.j4,o.JD,W.G,T.$,j.R,A.I]})}return d})()},4836:(N,y,n)=>{n.d(y,{D:()=>A});var e=n(7404),o=n(4456),p=n(2587),L=n(316),f=n(4950),t=n(7984),U=n(640),b=n(1134),B=n(5060),x=n(8e3),R=n(9434);function W(P,F){1&P&&(e.j41(0,"button",6)(1,"app-icon"),e.EFF(2,"close"),e.k0s()())}function T(P,F){if(1&P){const c=e.RV6();e.j41(0,"main",7)(1,"label",8),e.EFF(2,"Parking Space Name/Bay Number"),e.k0s(),e.j41(3,"mat-form-field",9),e.nrm(4,"input",10),e.j41(5,"mat-error"),e.EFF(6,"A name is required for parking spaces"),e.k0s()(),e.j41(7,"label",11),e.EFF(8,"Map ID"),e.k0s(),e.j41(9,"mat-form-field",9),e.nrm(10,"input",12),e.j41(11,"mat-error"),e.EFF(12," A map ID is required for parking spaces "),e.k0s()(),e.j41(13,"label",13),e.EFF(14,"Assigned User"),e.k0s(),e.j41(15,"div",14),e.nrm(16,"a-user-search-field",15),e.j41(17,"button",16),e.bIt("click",function(){e.eBV(c);const h=e.XpG();return e.Njj(h.form.patchValue({assigned_user:null,assigned_to:null,assigned_name:null}))}),e.j41(18,"app-icon",17),e.EFF(19," person_cancel "),e.k0s()()(),e.j41(20,"label",18),e.EFF(21,"Notes"),e.k0s(),e.j41(22,"mat-form-field",9),e.nrm(23,"textarea",19),e.k0s(),e.j41(24,"div",20)(25,"button",21),e.EFF(26," Cancel "),e.k0s(),e.j41(27,"button",22),e.bIt("click",function(){e.eBV(c);const h=e.XpG();return e.Njj(h.postForm())}),e.EFF(28," Save "),e.k0s()()()}if(2&P){const c=e.XpG();e.Y8G("formGroup",c.form)}}function j(P,F){1&P&&(e.j41(0,"main",23),e.nrm(1,"mat-spinner",24),e.j41(2,"p"),e.EFF(3,"Saving parking space details..."),e.k0s()())}let A=(()=>{class P{get id(){return this._data?.id||""}constructor(c,_){this._data=c,this._dialog_ref=_,this.event=new e.bkB,this.form=new o.gE({id:new o.MJ(""),name:new o.MJ("",[o.k0.required]),map_id:new o.MJ("",[o.k0.required]),assigned_user:new o.MJ(null),assigned_to:new o.MJ(""),assigned_name:new o.MJ(""),notes:new o.MJ(""),map_rotation:new o.MJ(0)}),c&&this.form.patchValue(c)}postForm(){if(!this.form.valid)return;this.loading=!0;const c={...this.form.getRawValue()};c.assigned_user&&(c.assigned_to=c.assigned_user.email,c.assigned_name=c.assigned_user.name,delete c.assigned_user),this._dialog_ref.disableClose=!0,this.event.emit({reason:"done",metadata:c})}static#e=this.\u0275fac=function(_){return new(_||P)(e.rXU(p.Vh),e.rXU(p.CP))};static#t=this.\u0275cmp=e.VBU({type:P,selectors:[["parking-space-modal"]],outputs:{event:"event"},decls:8,vars:4,consts:[["load_state",""],[1,"w-[28rem]"],[1,"flex","items-center","justify-between","px-2","w-full"],[1,"px-2"],["icon","","matRipple","","mat-dialog-close","",4,"ngIf"],["class","p-4 flex flex-col",3,"formGroup",4,"ngIf","ngIfElse"],["icon","","matRipple","","mat-dialog-close",""],[1,"p-4","flex","flex-col",3,"formGroup"],["for","name"],["appearance","outline"],["matInput","","name","name","formControlName","name"],["for","map-id"],["matInput","","name","map-id","formControlName","map_id"],["for","user"],[1,"flex","items-center","space-x-2","mb-4"],["name","user","formControlName","assigned_user",1,"flex-1"],["icon","","matRipple","","matTooltip","Clear Assigned User",1,"h-12","w-12","min-w-12","rounded","bg-secondary","text-secondary-content",3,"click"],["className","material-symbols-outlined"],["for","notes"],["matInput","","name","notes","formControlName","notes"],[1,"flex","items-center","justify-center","space-x-2"],["btn","","matRipple","","mat-dialog-close","",1,"w-32","inverse"],["btn","","matRipple","",1,"w-32",3,"click"],[1,"p-8","flex","flex-col","items-center","justify-center","space-y-2"],["diameter","32"]],template:function(_,h){if(1&_&&(e.j41(0,"div",1)(1,"header",2)(2,"h2",3),e.EFF(3),e.k0s(),e.DNE(4,W,3,0,"button",4),e.k0s(),e.DNE(5,T,29,1,"main",5),e.k0s(),e.DNE(6,j,4,0,"ng-template",null,0,e.C5r)),2&_){const r=e.sdS(7);e.R7$(3),e.SpI("",h.id?"Edit":"New"," Parking Space"),e.R7$(),e.Y8G("ngIf",!h.loading),e.R7$(),e.Y8G("ngIf",!h.loading)("ngIfElse",r)}},dependencies:[L.bT,f.rl,f.TL,t.fg,U.oV,b.LG,p.tx,B.r6,o.me,o.BC,o.cb,o.j4,o.JD,x.$,R.R]})}return P})()},8007:(N,y,n)=>{n.d(y,{X:()=>C});var e=n(9204),o=n(7915),p=n(2333),L=n(2185),f=n(3998),t=n(9908),U=n(3240),b=n(6441),B=n(6671),x=n(521),R=n(2175),W=n(1536),T=n(5443),j=n(1963),A=n(6e3),P=n(7841),F=n(8627),c=n(9803),_=n(7871),h=n(3602),r=n(4836),k=n(6233),d=n(6685),M=n(7404),m=n(2587);let C=(()=>{class v extends p.Tv{constructor(a,s,u){super(),this._org=a,this._dialog=s,this._settings=u,this._poll=new x.t(0),this._change=new x.t(0),this._options=new x.t({date:Date.now(),search:"",zones:[]}),this._loading=new x.t([]),this.levels=(0,R.zV)([this._org.active_region,this._org.active_building]).pipe((0,T.T)(([i,g])=>{const l=this._org.levels.filter(E=>E.tags.includes("parking"));if(this._settings.get("app.use_region")){const E=this._org.buildingsForRegion(),O=E.map(D=>D.id),I=l.filter(D=>O.includes(D.parent_id));return I.map(D=>({...D,display_name:`${E.find(S=>S.id===D.parent_id)?.display_name} - ${D.display_name}`})),I}return l.filter(E=>E.parent_id===g.id)})),this.spaces=(0,R.zV)([this.levels,this._options,this._change]).pipe((0,j.n)(([i,g])=>g.zones[0]||i[0]?.id?(this._loading.next([...this._loading.getValue(),"spaces"]),(0,f.bpY)(g.zones[0]||i[0]?.id,"parking-spaces").pipe((0,T.T)(({details:l})=>(l instanceof Array?l:[]).map(E=>({...E,zone_id:g.zones[0]||i[0]?.id}))))):(0,W.of)([])),(0,A.M)(()=>this._loading.next(this._loading.getValue().filter(i=>"spaces"!==i))),(0,P.t)(1)),this.users=(0,R.zV)([this._org.active_building,this._change]).pipe((0,F.p)(([i])=>!!i?.id),(0,j.n)(([i])=>(this._loading.next([...this._loading.getValue(),"users"]),(0,f.bpY)(i.id,"parking-users"))),(0,T.T)(i=>i.details instanceof Array?i.details:[]),(0,A.M)(()=>this._loading.next(this._loading.getValue().filter(i=>"users"!==i))),(0,P.t)(1)),this.bookings=(0,R.zV)([this._org.active_building,this._options,this.users,this._poll]).pipe((0,c.B)(500),(0,j.n)(([i,g,l])=>(this._loading.next([...this._loading.getValue(),"bookings"]),(0,o.tj)({period_start:(0,t._)((0,U.o)(g.date)),period_end:(0,t._)((0,b.D)(g.date)),type:"parking",zones:g.zones?.length?g.zones.join(","):(this._settings.get("app.use_region")?this._org.region?.id:"")||i?.id,include_checked_out:!0}).pipe((0,T.T)(E=>{for(const O of E){const I=l.find(D=>D.email.toLowerCase()===O.user_email.toLowerCase());I&&(O.extension_data.plate_number=O.extension_data.plate_number||I.plate_number)}return E})))),(0,A.M)(()=>this._loading.next(this._loading.getValue().filter(i=>"bookings"!==i))),(0,P.t)(1)),this.options=this._options.asObservable(),this.loading=this._loading.asObservable()}setOptions(a){this._options.next({...this._options.getValue(),...a})}startPolling(a=12e4){return this._poll.next(Date.now()),this.interval("poll",()=>this._poll.next(Date.now()),a),()=>this.stopPolling()}stopPolling(){this.clearInterval("poll")}editSpace(a={}){var s=this;return(0,e.A)(function*(){const u=s._dialog.open(r.D,{data:a}),i=yield Promise.race([u.afterClosed().toPromise(),u.componentInstance.event.pipe((0,_.$)(D=>"done"===D.reason)).toPromise()]);if("done"!==i?.reason)return;const g=s._options.getValue().zones[0]||a.zone_id||s._org.levelsForBuilding()[0]?.id,l={...i.metadata,id:i.metadata.id||`parking-${g}.${(0,p.HO)(999999)}`},E=yield s.spaces.pipe((0,h.s)(1)).toPromise(),O=E.findIndex(D=>D.id===l.id);if(a.assigned_to&&a.assigned_to!==l.assigned_to){const S=(yield(0,o.tj)({period_start:(0,t._)((0,U.o)(Date.now())),period_end:(0,t._)((0,b.D)(Date.now())),type:"parking",email:l.assigned_to}).toPromise()).filter(K=>K.asset_id===a.id);yield Promise.all(S.map(K=>(0,o.UN)(K.id).toPromise()))}a.assigned_to!==l.assigned_to&&l.assigned_to&&(yield(0,o.X0)(new o.Qr({user_id:l.assigned_to,user_email:l.assigned_to,booking_start:(0,t._)((0,U.o)(Date.now())),booking_end:(0,t._)((0,b.D)(Date.now())),type:"parking",booking_type:"parking",asset_id:l.id,asset_name:l.name,recurrence_type:"daily",recurrence_days:o.WS.MONDAY|o.WS.TUESDAY|o.WS.WEDNESDAY|o.WS.THURSDAY|o.WS.FRIDAY,zones:(0,p.Am)([s._org.organisation.id,s._org.region?.id,s._org.building?.id,a.zone_id])})).toPromise()),O>=0?E[O]=l:E.push(l);const I=E;yield(0,f.D58)(g,{name:"parking-spaces",details:I,description:"List of available parking spaces"}).toPromise(),s._change.next(Date.now()),u.close()})()}removeSpace(a){var s=this;return(0,e.A)(function*(){const u=yield(0,p.GE)({title:"Remove Parking Space",content:`Are you sure you wish to remove the parking space "${a.name}"?`,icon:{content:"delete"}},s._dialog);if("done"!==u?.reason)return;u.loading("Removing parking space...");const i=s._options.getValue().zones[0],g=yield s.spaces.pipe((0,h.s)(1)).toPromise();yield(0,f.D58)(i,{name:"parking-spaces",details:g.filter(l=>l.id!==a.id),description:"List of available parking spaces"}).toPromise(),u.close()})()}editUser(a){var s=this;return(0,e.A)(function*(){console.log("Edit User",a);const u=s._dialog.open(k.K,{data:a}),i=yield Promise.race([u.afterClosed().toPromise(),u.componentInstance.event.pipe((0,_.$)(I=>"done"===I.reason)).toPromise()]);if("done"!==i?.reason)return;const g=s._org.building.id,l={...i.metadata,id:i.metadata.id||`P:USR-${(0,p.HO)(999999)}`};"user"in l&&delete l.user;const E=yield s.users.pipe((0,h.s)(1)).toPromise(),O=E.findIndex(I=>I.id===l.id);O>=0?E[O]=l:E.push(l),yield(0,f.D58)(g,{name:"parking-users",details:E,description:"List of available parking users"}).toPromise(),s._change.next(Date.now()),u.close()})()}removeUser(a){var s=this;return(0,e.A)(function*(){const u=yield(0,p.GE)({title:"Remove Parking User",content:`Are you sure you wish to remove the parking user "${a.name}"?`,icon:{content:"delete"}},s._dialog);if("done"!==u?.reason)return;u.loading("Removing parking user...");const i=s._options.getValue().zones[0],g=yield s.users.pipe((0,h.s)(1)).toPromise();yield(0,f.D58)(i,{name:"parking-users",details:g.filter(l=>l.id!==a.id),description:"List of available parking users"}).toPromise(),u.close()})()}editReservation(a,{user:s,link_id:u,date:i,space:g}={}){var l=this;return console.log("Reservation:",g),new Promise(function(){var E=(0,e.A)(function*(O){const I=yield l.levels.pipe((0,h.s)(1)).toPromise(),D=yield l.spaces.pipe((0,h.s)(1)).toPromise();!g&&a?.asset_id&&(g=D.find(K=>K.id===a.asset_id)),l._dialog.open(d.U,{data:{booking:a,user:s,link_id:u,date:i,level:I[0],space:g}}).afterClosed().subscribe(K=>O(K))});return function(O){return E.apply(this,arguments)}}())}approveBooking(a){var s=this;return(0,e.A)(function*(){const u=yield(0,o.DD)(a.id).toPromise().catch(i=>"failed");"failed"===u?(0,p.UG)("Error approving in desk booking"):(0,p.VX)(`Approved parking reservation for ${a.user_name} on ${(0,B.GP)(a.date,"MMM Do")}.`),"failed"!==u&&s._change.next(Date.now())})()}rejectBooking(a){var s=this;return(0,e.A)(function*(){const u=yield(0,o.vB)(a.id).toPromise().catch(i=>"failed");"failed"===u?(0,p.UG)("Error rejecting in desk booking"):(0,p.VX)(`Rejected parking reservation for ${a.user_name} on ${(0,B.GP)(a.date,"MMM dd")}.`),"failed"!==u&&s._change.next(Date.now())})()}static#e=this.\u0275fac=function(s){return new(s||v)(M.KVO(L.yb),M.KVO(m.bZ),M.KVO(p.h$))};static#t=this.\u0275prov=M.jDH({token:v,factory:v.\u0275fac,providedIn:"root"})}return v})()},6233:(N,y,n)=>{n.d(y,{K:()=>c});var e=n(7404),o=n(4456),p=n(2587),L=n(2333),f=n(316),t=n(4950),U=n(7984),b=n(7024),B=n(640),x=n(1134),R=n(5060),W=n(8e3),T=n(9434);function j(_,h){1&_&&(e.j41(0,"button",8)(1,"app-icon"),e.EFF(2,"close"),e.k0s()())}function A(_,h){if(1&_){const r=e.RV6();e.j41(0,"main",9)(1,"div",10),e.nrm(2,"a-user-search-field",11),e.j41(3,"button",12),e.bIt("click",function(){e.eBV(r);const d=e.XpG();return e.Njj(d.form.patchValue({user:null,email:null,name:null,phone:null}))}),e.j41(4,"app-icon",13),e.EFF(5," person_cancel "),e.k0s()()(),e.j41(6,"label",14),e.EFF(7,"Name"),e.k0s(),e.j41(8,"mat-form-field",15),e.nrm(9,"input",16),e.j41(10,"mat-error"),e.EFF(11,"A name is required"),e.k0s()(),e.j41(12,"label",17),e.EFF(13,"Email"),e.k0s(),e.j41(14,"mat-form-field",15),e.nrm(15,"input",18),e.j41(16,"mat-error"),e.EFF(17,"An email is required"),e.k0s()(),e.j41(18,"div",19)(19,"div",20)(20,"label",21),e.EFF(21,"Car Number Plate"),e.k0s(),e.j41(22,"mat-form-field",22),e.nrm(23,"input",23),e.k0s()(),e.j41(24,"div",20)(25,"label",24),e.EFF(26,"Car Colour"),e.k0s(),e.j41(27,"mat-form-field",22),e.nrm(28,"input",25),e.k0s()()(),e.j41(29,"label",26),e.EFF(30,"Notes"),e.k0s(),e.j41(31,"mat-form-field",15),e.nrm(32,"textarea",27),e.k0s(),e.j41(33,"div",28)(34,"mat-checkbox",29),e.pXf(35,1),e.k0s()()()}if(2&_){const r=e.XpG();e.Y8G("formGroup",r.form)}}function P(_,h){if(1&_){const r=e.RV6();e.j41(0,"footer",30)(1,"button",31),e.EFF(2," Cancel "),e.k0s(),e.j41(3,"button",32),e.bIt("click",function(){e.eBV(r);const d=e.XpG();return e.Njj(d.postForm())}),e.EFF(4," Save "),e.k0s()()}}function F(_,h){1&_&&(e.j41(0,"main",33),e.nrm(1,"mat-spinner",34),e.j41(2,"p"),e.EFF(3,"Saving parking user details..."),e.k0s()())}let c=(()=>{class _ extends L.Tv{get id(){return this._data?.id||""}constructor(r,k){super(),this._data=r,this._dialog_ref=k,this.event=new e.bkB,this.loading=!1,this.form=new o.gE({id:new o.MJ(""),user:new o.MJ(null),name:new o.MJ("",[o.k0.required]),email:new o.MJ("",[o.k0.required]),plate_number:new o.MJ(""),car_color:new o.MJ(""),notes:new o.MJ(""),deny:new o.MJ(!1)}),r&&this.form.patchValue(r),console.log("User Modal",this.form.value,r)}ngOnInit(){this.subscription("user",this.form.valueChanges.subscribe(r=>{r.user&&this.form.patchValue({email:r.user.email,name:r.user.name})}))}postForm(){if(!this.form.valid)return;this.loading=!0;const r=this.form.value;r.user&&(r.email=r.user.email,r.name=r.user.name),this._dialog_ref.disableClose=!0,this.event.emit({reason:"done",metadata:r})}static#e=this.\u0275fac=function(k){return new(k||_)(e.rXU(p.Vh),e.rXU(p.CP))};static#t=this.\u0275cmp=e.VBU({type:_,selectors:[["parking-user-modal"]],outputs:{event:"event"},features:[e.Vt3],decls:9,vars:5,consts:()=>{let r;return r=$localize`:@@deny␟52641a66d27267c758ce08ae66f779767c90552f␟5404152440006125242: Deny User Parking Access `,[["load_state",""],r,[1,"w-[28rem]"],[1,"flex","items-center","justify-between","px-2","w-full"],[1,"px-2"],["icon","","matRipple","","mat-dialog-close","",4,"ngIf"],["class","p-4 flex flex-col max-h-[65vh] overflow-auto",3,"formGroup",4,"ngIf","ngIfElse"],["class","flex items-center justify-end space-x-2 p-2 border-t border-base-200",4,"ngIf"],["icon","","matRipple","","mat-dialog-close",""],[1,"p-4","flex","flex-col","max-h-[65vh]","overflow-auto",3,"formGroup"],[1,"flex","items-center","space-x-2","mb-4"],["name","user","formControlName","user",1,"flex-1"],["icon","","matRipple","","matTooltip","Clear Selected User",1,"h-12","w-12","min-w-12","rounded","bg-secondary","text-secondary-content",3,"click"],["className","material-symbols-outlined"],["for","name"],["appearance","outline"],["matInput","","name","name","formControlName","name","placeholder","Name"],["for","email"],["matInput","","name","email","formControlName","email","placeholder","Email"],[1,"flex","items-center","space-x-2"],[1,"flex-1","w-1/3"],["for","plate-number"],["appearance","outline",1,"w-full"],["matInput","","name","plate-number","formControlName","plate_number","placeholder","Car Plate Number"],["for","car-color"],["matInput","","name","car-color","formControlName","car_color","placeholder","Car Colour"],["for","notes"],["matInput","","name","notes","formControlName","notes","placeholder","User's Notes"],[1,"px-2","pb-2"],["name","deny","formControlName","deny"],[1,"flex","items-center","justify-end","space-x-2","p-2","border-t","border-base-200"],["btn","","matRipple","","mat-dialog-close","",1,"w-32","inverse"],["btn","","matRipple","",1,"w-32",3,"click"],[1,"p-8","flex","flex-col","items-center","justify-center","user-y-2"],["diameter","32"]]},template:function(k,d){if(1&k&&(e.j41(0,"div",2)(1,"header",3)(2,"h2",4),e.EFF(3),e.k0s(),e.DNE(4,j,3,0,"button",5),e.k0s(),e.DNE(5,A,36,1,"main",6)(6,P,5,0,"footer",7),e.k0s(),e.DNE(7,F,4,0,"ng-template",null,0,e.C5r)),2&k){const M=e.sdS(8);e.R7$(3),e.SpI("",d.id?"Edit":"New"," Parking User"),e.R7$(),e.Y8G("ngIf",!d.loading),e.R7$(),e.Y8G("ngIf",!d.loading)("ngIfElse",M),e.R7$(),e.Y8G("ngIf",!d.loading)}},dependencies:[f.bT,t.rl,t.TL,U.fg,b.So,B.oV,x.LG,p.tx,R.r6,o.me,o.BC,o.cb,o.j4,o.JD,W.$,T.R]})}return _})()},7915:(N,y,n)=>{n.d(y,{Qr:()=>p.Q,nx:()=>o.n,WS:()=>p.W,SG:()=>e.S,DD:()=>f.DD,Z$:()=>f.Z$,u3:()=>f.u3,tj:()=>f.tj,WE:()=>f.WE,vB:()=>f.vB,UN:()=>f.UN,X0:()=>f.X0,tl:()=>f.tl,DO:()=>f.DO,vq:()=>f.vq});var e=n(9478),o=n(8379),p=n(3857),f=(n(7141),n(8026));n(2333),n(5762),n(3367),n(7254),n(8796),n(1781),n(7547),n(7642),n(1593)}}]);
//# sourceMappingURL=default-apps_concierge_src_app_parking_parking-state_service_ts.js.map