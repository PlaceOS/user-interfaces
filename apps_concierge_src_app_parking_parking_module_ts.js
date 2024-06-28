"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_parking_parking_module_ts"],{23:(te,B,r)=>{r.r(B),r.d(B,{AppParkingModule:()=>Wt});var d=r(60316),c=r(34456),P=r(26354),M=r(38223),_=r(26842),K=r(63046),Q=r(40363),f=r(89204),I=r(57915),u=r(82333),L=r(12185),j=r(3998),D=r(67450),W=r(27419),q=r(13264),X=r(83866),k=r(90521),x=r(42175),tt=r(71536),v=r(35443),R=r(71963),V=r(66e3),E=r(7841),et=r(8627),nt=r(19803),J=r(57871),y=r(33602),t=r(68559),C=r(12587),S=r(24950),st=r(87984),it=r(41134),T=r(85060),ot=r(18e3),F=r(69434);function at(n,l){1&n&&(t.j41(0,"button",6)(1,"app-icon"),t.EFF(2,"close"),t.k0s()())}function rt(n,l){if(1&n){const e=t.RV6();t.j41(0,"main",7)(1,"label",8),t.EFF(2,"Parking Space Name/Bay Number"),t.k0s(),t.j41(3,"mat-form-field",9),t.nrm(4,"input",10),t.j41(5,"mat-error"),t.EFF(6,"A name is required for parking spaces"),t.k0s()(),t.j41(7,"label",11),t.EFF(8,"Map ID"),t.k0s(),t.j41(9,"mat-form-field",9),t.nrm(10,"input",12),t.j41(11,"mat-error"),t.EFF(12," A map ID is required for parking spaces "),t.k0s()(),t.j41(13,"label",13),t.EFF(14,"Assigned User"),t.k0s(),t.j41(15,"div",14),t.nrm(16,"a-user-search-field",15),t.j41(17,"button",16),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.form.patchValue({assigned_user:null,assigned_to:null,assigned_name:null}))}),t.EFF(18," Clear "),t.k0s()(),t.j41(19,"label",17),t.EFF(20,"Notes"),t.k0s(),t.j41(21,"mat-form-field",9),t.nrm(22,"textarea",18),t.k0s(),t.j41(23,"label",19),t.EFF(24,"Map Rotation"),t.k0s(),t.j41(25,"mat-form-field",9),t.nrm(26,"textarea",20),t.k0s(),t.j41(27,"div",21)(28,"button",22),t.EFF(29," Cancel "),t.k0s(),t.j41(30,"button",23),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.postForm())}),t.EFF(31," Save "),t.k0s()()()}if(2&n){const e=t.XpG();t.Y8G("formGroup",e.form)}}function lt(n,l){1&n&&(t.j41(0,"main",24),t.nrm(1,"mat-spinner",25),t.j41(2,"p"),t.EFF(3,"Saving parking space details..."),t.k0s()())}let O=(()=>{class n{get id(){return this._data?.id||""}constructor(e,s){this._data=e,this._dialog_ref=s,this.event=new t.bkB,this.form=new c.gE({id:new c.MJ(""),name:new c.MJ("",[c.k0.required]),map_id:new c.MJ("",[c.k0.required]),assigned_user:new c.MJ(null),assigned_to:new c.MJ(""),assigned_name:new c.MJ(""),notes:new c.MJ(""),map_rotation:new c.MJ(0)}),e&&this.form.patchValue(e)}postForm(){if(!this.form.valid)return;this.loading=!0;const e=this.form.value;e.assigned_user&&(e.assigned_to=e.assigned_user.email,e.assigned_name=e.assigned_user.name),this._dialog_ref.disableClose=!0,this.event.emit({reason:"done",metadata:e})}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(C.Vh),t.rXU(C.CP))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["parking-space-modal"]],outputs:{event:"event"},decls:8,vars:4,consts:[["load_state",""],[1,"w-[28rem]"],[1,"flex","items-center","justify-between","px-2","w-full"],[1,"px-2"],["icon","","matRipple","","mat-dialog-close","",4,"ngIf"],["class","p-4 flex flex-col",3,"formGroup",4,"ngIf","ngIfElse"],["icon","","matRipple","","mat-dialog-close",""],[1,"p-4","flex","flex-col",3,"formGroup"],["for","name"],["appearance","outline"],["matInput","","name","name","formControlName","name"],["for","map-id"],["matInput","","name","map-id","formControlName","map_id"],["for","user"],[1,"flex","items-center","space-x-2"],["name","user","formControlName","assigned_user",1,"mb-4"],["btn","","matRipple","",1,"mb-5",3,"click"],["for","notes"],["matInput","","name","notes","formControlName","notes"],["for","map-rotation"],["matInput","","name","map-rotation","formControlName","map_rotation"],[1,"flex","items-center","justify-center","space-x-2"],["btn","","matRipple","","mat-dialog-close","",1,"w-32","inverse"],["btn","","matRipple","",1,"w-32",3,"click"],[1,"p-8","flex","flex-col","items-center","justify-center","space-y-2"],["diameter","32"]],template:function(s,i){if(1&s&&(t.j41(0,"div",1)(1,"header",2)(2,"h2",3),t.EFF(3),t.k0s(),t.DNE(4,at,3,0,"button",4),t.k0s(),t.DNE(5,rt,32,1,"main",5),t.k0s(),t.DNE(6,lt,4,0,"ng-template",null,0,t.C5r)),2&s){const o=t.sdS(7);t.R7$(3),t.SpI("",i.id?"Edit":"New"," Parking Space"),t.R7$(),t.Y8G("ngIf",!i.loading),t.R7$(),t.Y8G("ngIf",!i.loading)("ngIfElse",o)}},dependencies:[d.bT,S.rl,S.TL,st.fg,it.LG,C.tx,T.r6,c.me,c.BC,c.cb,c.j4,c.JD,ot.$,F.R]})}return n})(),b=(()=>{class n extends u.Tv{constructor(e,s,i){super(),this._org=e,this._dialog=s,this._settings=i,this._poll=new k.t(0),this._change=new k.t(0),this._options=new k.t({date:Date.now(),search:"",zones:[]}),this._loading=new k.t([]),this.levels=(0,x.zV)([this._org.active_region,this._org.active_building]).pipe((0,v.T)(([o,a])=>{const p=this._org.levels;if(!this._settings.get("app.use_region")){const m=this._org.buildingsForRegion(),h=m.map(g=>g.id),w=p.filter(g=>h.includes(g.parent_id)&&g.tags.includes("parking"));return w.map(g=>({...g,display_name:`${m.find(qt=>qt.id===g.parent_id)?.display_name} - ${g.display_name}`})),w}return p.filter(m=>m.parent_id===this._org.building.id&&m.tags.includes("parking"))})),this.spaces=(0,x.zV)([this.levels,this._options,this._change]).pipe((0,R.n)(([o,a])=>a.zones[0]||o[0]?.id?(this._loading.next([...this._loading.getValue(),"spaces"]),(0,j.bpY)(a.zones[0]||o[0]?.id,"parking-spaces")):(0,tt.of)({details:[]})),(0,v.T)(o=>o.details instanceof Array?o.details:[]),(0,V.M)(()=>this._loading.next(this._loading.getValue().filter(o=>"spaces"!==o))),(0,E.t)(1)),this.users=(0,x.zV)([this._org.active_building,this._change]).pipe((0,et.p)(([o])=>!!o?.id),(0,R.n)(([o])=>(this._loading.next([...this._loading.getValue(),"users"]),(0,j.bpY)(o.id,"parking-users"))),(0,v.T)(o=>o.details instanceof Array?o.details:[]),(0,V.M)(()=>this._loading.next(this._loading.getValue().filter(o=>"users"!==o))),(0,E.t)(1)),this.bookings=(0,x.zV)([this._org.active_building,this._options,this._poll]).pipe((0,nt.B)(500),(0,R.n)(([o,a])=>(this._loading.next([...this._loading.getValue(),"bookings"]),(0,I.tj)({period_start:(0,D.A)((0,W.A)(a.date)),period_end:(0,D.A)((0,q.A)(a.date)),type:"parking",zones:a.zones?.length?a.zones.join(","):(this._settings.get("app.use_region")?this._org.region?.id:"")||o?.id}))),(0,V.M)(()=>this._loading.next(this._loading.getValue().filter(o=>"bookings"!==o))),(0,E.t)(1)),this.options=this._options.asObservable(),this.loading=this._loading.asObservable()}setOptions(e){this._options.next({...this._options.getValue(),...e})}startPolling(e=5e3){return this._poll.next(Date.now()),this.interval("poll",()=>this._poll.next(Date.now()),e),()=>this.stopPolling()}stopPolling(){this.clearInterval("poll")}editSpace(e){var s=this;return(0,f.A)(function*(){const i=s._dialog.open(O,{data:e}),o=yield Promise.race([i.afterClosed().toPromise(),i.componentInstance.event.pipe((0,J.$)(g=>"done"===g.reason)).toPromise()]);if("done"!==o?.reason)return;const a=s._options.getValue().zones[0],p={...o.metadata,id:o.metadata.id||`parking-${a}.${(0,u.HO)(999999)}`},m=yield s.spaces.pipe((0,y.s)(1)).toPromise(),h=m.findIndex(g=>g.id===p.id);h>=0?m[h]=p:m.push(p);const w=m;yield(0,j.D58)(a,{name:"parking-spaces",details:w,description:"List of available parking spaces"}).toPromise(),s._change.next(Date.now()),i.close()})()}removeSpace(e){var s=this;return(0,f.A)(function*(){const i=yield(0,u.GE)({title:"Remove Parking Space",content:`Are you sure you wish to remove the parking space "${e.name}"?`,icon:{content:"delete"}},s._dialog);if("done"!==i?.reason)return;i.loading("Removing parking space...");const o=s._options.getValue().zones[0],a=yield s.spaces.pipe((0,y.s)(1)).toPromise();yield(0,j.D58)(o,{name:"parking-spaces",details:a.filter(p=>p.id!==e.id),description:"List of available parking spaces"}).toPromise(),i.close()})()}saveUsers(e){return(0,f.A)(function*(){})()}approveBooking(e){return(0,f.A)(function*(){"failed"===(yield(0,I.DD)(e.id).toPromise().catch(i=>"failed"))?(0,u.UG)("Error approving in desk booking"):(0,u.VX)(`Approved parking reservation for ${e.user_name} on ${(0,X.A)(e.date,"MMM Do")}.`)})()}rejectBooking(e){return(0,f.A)(function*(){"failed"===(yield(0,I.vB)(e.id).toPromise().catch(i=>"failed"))?(0,u.UG)("Error rejecting in desk booking"):(0,u.VX)(`Rejected parking reservation for ${e.user_name} on ${(0,X.A)(e.date,"MMM Do")}.`)})()}static#t=this.\u0275fac=function(s){return new(s||n)(t.KVO(L.yb),t.KVO(C.bZ),t.KVO(u.h$))};static#e=this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var A=r(80640),G=r(12993);const ct=()=>["asset_name","booked_by_name","user_name","plate_number","status","actions"],pt=()=>["Bay No.","Reserved By","Reserved For","Car Plate #","Status"," "],mt=()=>["6r","flex","14r","8r","6r","6r"],dt=(n,l,e)=>({plate_number:n,actions:l,status:e});function ut(n,l){if(1&n&&t.EFF(0),2&n){const e=l.row;t.SpI(" ",null==e||null==e.extension_data?null:e.extension_data.plate_number," ")}}function gt(n,l){if(1&n&&(t.j41(0,"span",5),t.EFF(1),t.k0s()),2&n){const e=l.data;t.AVh("bg-success","approved"===e)("bg-warning","tentative"===e)("bg-error","cancelled"===e||"declined"===e)("text-success-content","approved"===e)("text-warning-content","tentative"===e)("text-error-content","cancelled"===e||"declined"===e),t.R7$(),t.SpI(" ",e," ")}}function _t(n,l){if(1&n){const e=t.RV6();t.j41(0,"div",6)(1,"button",7),t.bIt("click",function(){const i=t.eBV(e).row,o=t.XpG();return t.Njj(o.reject(i))}),t.j41(2,"app-icon"),t.EFF(3,"event_busy"),t.k0s()(),t.j41(4,"button",8),t.bIt("click",function(){const i=t.eBV(e).row,o=t.XpG();return t.Njj(o.approve(i))}),t.j41(5,"app-icon"),t.EFF(6,"event_available"),t.k0s()()()}}function ft(n,l){1&n&&t.nrm(0,"mat-progress-bar",9)}let N=(()=>{class n{constructor(e){this._state=e,this.events=this._state.bookings,this.options=this._state.options,this.loading=this._state.loading,this.reject=s=>this._state.rejectBooking(s),this.approve=s=>this._state.approveBooking(s)}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(b))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["parking-bookings-list"]],decls:11,vars:22,consts:[["plate_template",""],["status_template",""],["action_template",""],[1,"block","min-w-[60rem]",3,"dataSource","columns","display_column","filter","column_size","template"],["class","absolute bottom-0 inset-x-0",4,"ngIf"],[1,"capitalize","px-2","py-1","rounded","border","border-base-200"],[1,"w-full","flex","items-center","justify-end"],["icon","","matTooltip","Reject Parking Reservation",3,"click"],["icon","","matTooltip","Approve Parking Reservation",3,"click"],[1,"absolute","bottom-0","inset-x-0"]],template:function(s,i){if(1&s&&(t.nrm(0,"custom-table",3),t.nI1(1,"async"),t.nI1(2,"async"),t.DNE(3,ut,1,1,"ng-template",null,0,t.C5r)(5,gt,2,13,"ng-template",null,1,t.C5r)(7,_t,7,0,"ng-template",null,2,t.C5r)(9,ft,1,0,"mat-progress-bar",4),t.nI1(10,"async")),2&s){let o,a;const p=t.sdS(4),m=t.sdS(6),h=t.sdS(8);t.AVh("opacity-50",null==(o=t.bMT(1,9,i.loading))?null:o.includes("bookings")),t.Y8G("dataSource",i.events)("columns",t.lJ4(15,ct))("display_column",t.lJ4(16,pt))("filter",t.bMT(2,11,i.options).search)("column_size",t.lJ4(17,mt))("template",t.sMw(18,dt,p,h,m)),t.R7$(9),t.Y8G("ngIf",null==(a=t.bMT(10,13,i.loading))?null:a.includes("bookings"))}},dependencies:[d.bT,A.oV,P.HM,F.R,G.r,d.Jj],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;overflow:auto}\n\n/*# sourceMappingURL=parking-bookings-list.component.ts-angular-inline--161.css.map*/"]})}return n})();const ht=()=>["name","map_id","assigned_to","notes","actions"],vt=()=>["Bay No.","Map ID","Assigned","Notes"," "],bt=()=>["8r","10r","14r","flex","10r"],kt=(n,l)=>({map_id:n,actions:l});function xt(n,l){if(1&n&&(t.j41(0,"span",6),t.EFF(1),t.k0s()),2&n){const e=l.data;t.R7$(),t.JRh(e)}}function yt(n,l){if(1&n){const e=t.RV6();t.j41(0,"div",7)(1,"button",8),t.bIt("click",function(){const i=t.eBV(e).row,o=t.XpG();return t.Njj(o.editSpace(i))}),t.j41(2,"app-icon"),t.EFF(3,"edit"),t.k0s()(),t.j41(4,"button",8),t.bIt("click",function(){const i=t.eBV(e).row,o=t.XpG();return t.Njj(o.removeSpace(i))}),t.j41(5,"app-icon"),t.EFF(6,"delete"),t.k0s()()()}}function jt(n,l){1&n&&t.nrm(0,"mat-progress-bar",9)}let U=(()=>{class n{constructor(e){this._state=e,this.spaces=this._state.spaces,this.options=this._state.options,this.loading=this._state.loading,this.editSpace=s=>this._state.editSpace(s),this.removeSpace=s=>this._state.removeSpace(s)}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(b))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["parking-space-list"]],decls:13,vars:21,consts:[["id_template",""],["action_template",""],[1,"h-full","w-full","overflow-auto"],[1,"block","min-w-[56rem]",3,"dataSource","columns","display_column","column_size","template","filter"],["class","absolute bottom-0 inset-x-0",4,"ngIf"],["btn","","icon","","matRipple","",1,"absolute","bottom-2","left-2","bg-secondary","text-secondary-content",3,"click"],[1,"font-mono","text-sm"],[1,"w-full","flex","items-center","justify-end"],["icon","",3,"click"],[1,"absolute","bottom-0","inset-x-0"]],template:function(s,i){if(1&s){const o=t.RV6();t.j41(0,"div",2),t.nrm(1,"custom-table",3),t.nI1(2,"async"),t.nI1(3,"async"),t.DNE(4,xt,2,1,"ng-template",null,0,t.C5r)(6,yt,7,0,"ng-template",null,1,t.C5r)(8,jt,1,0,"mat-progress-bar",4),t.nI1(9,"async"),t.k0s(),t.j41(10,"button",5),t.bIt("click",function(){return t.eBV(o),t.Njj(i.editSpace())}),t.j41(11,"app-icon"),t.EFF(12,"add"),t.k0s()()}if(2&s){let o,a;const p=t.sdS(5),m=t.sdS(7);t.R7$(),t.AVh("opacity-50",null==(o=t.bMT(2,9,i.loading))?null:o.includes("spaces")),t.Y8G("dataSource",i.spaces)("columns",t.lJ4(15,ht))("display_column",t.lJ4(16,vt))("column_size",t.lJ4(17,bt))("template",t.l_i(18,kt,p,m))("filter",t.bMT(3,11,i.options).search),t.R7$(7),t.Y8G("ngIf",null==(a=t.bMT(9,13,i.loading))?null:a.includes("spaces"))}},dependencies:[d.bT,P.HM,T.r6,F.R,G.r,d.Jj],encapsulation:2})}return n})();var Ct=r(94584),Tt=r(12236),Ft=r(25175),wt=r(56062);function Pt(n,l){if(1&n&&(t.j41(0,"div",13),t.EFF(1),t.nI1(2,"building"),t.j41(3,"span",14),t.EFF(4," - "),t.k0s()()),2&n){let e;const s=t.XpG().$implicit;t.R7$(),t.SpI(" ",null==(e=t.bMT(2,1,s.parent_id))?null:e.display_name," ")}}function Mt(n,l){if(1&n&&(t.j41(0,"mat-option",10)(1,"div",11),t.DNE(2,Pt,5,3,"div",12),t.j41(3,"div"),t.EFF(4),t.k0s()()()),2&n){const e=l.$implicit,s=t.XpG();t.Y8G("value",e.id),t.R7$(2),t.Y8G("ngIf",s.use_region),t.R7$(2),t.JRh(e.display_name||e.name)}}function It(n,l){if(1&n){const e=t.RV6();t.j41(0,"date-options",15),t.bIt("dateChange",function(i){t.eBV(e);const o=t.XpG();return t.Njj(o.setDate(i))}),t.k0s()}}let $=(()=>{class n extends u.Tv{get use_region(){return!!this._settings.get("app.use_region")}constructor(e,s,i,o,a){super(),this._state=e,this._org=s,this._route=i,this._router=o,this._settings=a,this.manage=!1,this.zones=[],this.levels=this._state.levels,this.options=this._state.options,this.setDate=p=>this._state.setOptions({date:p}),this.setSearch=p=>this._state.setOptions({search:p}),this.updateZones=p=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:p.join(",")}}),this._state.setOptions({zones:p})}}ngOnInit(){var e=this;return(0,f.A)(function*(){yield e._org.initialised.pipe((0,J.$)(s=>s)).toPromise(),e.subscription("route.query",e._route.queryParamMap.subscribe(s=>{if(s.has("zone_ids")){const i=s.get("zone_ids").split(",");if(i.length){const o=e._org.levelWithID(i);if(e.zones=i,!o)return;e._org.building=e._org.buildings.find(a=>a.id===o.parent_id)}}})),e.subscription("levels",e._state.levels.subscribe(s=>{e.use_region||(e.zones=e.zones.filter(i=>s.find(o=>o.id===i)),!e.zones.length&&s.length&&e.zones.push(s[0].id),e.updateZones(e.zones))})),e.manage=!e._router.url.includes("events")})()}newReservation(){}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(b),t.rXU(L.yb),t.rXU(_.nX),t.rXU(_.Ix),t.rXU(u.h$))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["parking-topbar"]],features:[t.Vt3],decls:13,vars:9,consts:[[1,"flex","items-center","w-full","pt-4","pb-2","px-8","space-x-2"],[1,"text-2xl","font-medium"],[1,"flex-1","w-px"],[1,"mr-2",3,"modelChange","model"],[1,"flex","items-center","bg-base-100","px-8","h-20"],["appearance","outline",1,"w-60"],["placeholder","All Levels","multiple","",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-1","w-0"],[3,"dateChange",4,"ngIf"],[3,"value"],[1,"flex","flex-col-reverse"],["class","text-xs opacity-30",4,"ngIf"],[1,"text-xs","opacity-30"],[1,"opacity-0"],[3,"dateChange"]],template:function(s,i){if(1&s&&(t.j41(0,"div",0)(1,"h2",1),t.EFF(2),t.k0s(),t.nrm(3,"div",2),t.j41(4,"searchbar",3),t.nI1(5,"async"),t.bIt("modelChange",function(a){return i.setSearch(a)}),t.k0s()(),t.j41(6,"div",4)(7,"mat-form-field",5)(8,"mat-select",6),t.mxI("ngModelChange",function(a){return t.DH7(i.zones,a)||(i.zones=a),a}),t.bIt("ngModelChange",function(a){return i.updateZones(a)}),t.DNE(9,Mt,5,3,"mat-option",7),t.nI1(10,"async"),t.k0s()(),t.nrm(11,"div",8),t.DNE(12,It,1,0,"date-options",9),t.k0s()),2&s){let o;t.R7$(2),t.SpI(" ",i.manage?"Manage Parking":"Parking"," "),t.R7$(2),t.Y8G("model",null==(o=t.bMT(5,5,i.options))?null:o.search),t.R7$(4),t.R50("ngModel",i.zones),t.R7$(),t.Y8G("ngForOf",t.bMT(10,7,i.levels)),t.R7$(3),t.Y8G("ngIf",!i.manage)}},dependencies:[d.Sq,d.bT,Ct.o,Tt.x,S.rl,Ft.VO,T.wT,c.BC,c.vS,d.Jj,wt.b],styles:["button[_ngcontent-%COMP%]{min-width:0;padding:0 .85rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n\n/*# sourceMappingURL=parking-topbar.component.ts-angular-inline--162.css.map*/"]})}return n})();var Rt=r(74605);const Vt=()=>["/parking","events"],Et=()=>["/parking","spaces"];function St(n,l){1&n&&(t.j41(0,"div",6),t.nrm(1,"div",7),t.j41(2,"p"),t.EFF(3,"No parking floors for the currently selected building"),t.k0s()())}let Y=(()=>{class n extends u.Tv{constructor(e,s){super(),this._state=e,this._router=s,this.levels=this._state.levels,this.path=""}ngOnInit(){this._state.startPolling(),this.subscription("router.events",this._router.events.subscribe(s=>{if(s instanceof _.wF){const i=this._router.url?.split("/")||[""];this.path=i[e.length-1].split("?")[0]}}));const e=this._router.url?.split("/")||[""];this.path=e[e.length-1].split("?")[0]}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(b),t.rXU(_.Ix))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-parking"]],features:[t.Vt3],decls:13,vars:9,consts:[[1,"relative","overflow-hidden","bg-base-100"],[1,"dark"],["mat-tab-nav-bar",""],["mat-tab-link","","queryParamsHandling","merge",3,"routerLink","active"],[1,"flex-1","h-1/2","w-full","relative","overflow-auto","px-4"],["class","absolute inset-0 flex flex-col items-center justify-center z-50",4,"ngIf"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center","z-50"],[1,"absolute","inset-0","bg-base-100","opacity-50","z-0"]],template:function(s,i){if(1&s&&(t.nrm(0,"sidebar"),t.j41(1,"main",0),t.nrm(2,"parking-topbar"),t.j41(3,"div",1)(4,"nav",2)(5,"a",3),t.EFF(6," Bookings "),t.k0s(),t.j41(7,"a",3),t.EFF(8," Manage Spaces "),t.k0s()()(),t.j41(9,"div",4),t.nrm(10,"router-outlet"),t.k0s(),t.DNE(11,St,4,0,"div",5),t.nI1(12,"async"),t.k0s()),2&s){let o;t.R7$(5),t.Y8G("routerLink",t.lJ4(7,Vt))("active","events"===i.path),t.R7$(2),t.Y8G("routerLink",t.lJ4(8,Et))("active","spaces"===i.path),t.R7$(4),t.Y8G("ngIf",!(null!=(o=t.bMT(12,5,i.levels))&&o.length))}},dependencies:[d.bT,Rt.k,M.Bu,M.Ql,_.n3,_.Wk,$,d.Jj],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n\n/*# sourceMappingURL=parking.component.ts-angular-inline--163.css.map*/"]})}return n})();var Gt=r(45189),Nt=r(96843);function Ut(n,l){1&n&&(t.j41(0,"div",4),t.nrm(1,"div",5),t.j41(2,"p",6),t.EFF(3," No parking floors for the currently selected building "),t.k0s()())}let H=(()=>{class n extends u.Tv{constructor(e,s){super(),this._state=e,this._router=s,this.levels=this._state.levels,this.path=""}ngOnInit(){this._state.startPolling(),this.subscription("router.events",this._router.events.subscribe(s=>{if(s instanceof _.wF){const i=this._router.url?.split("/")||[""];this.path=i[e.length-1].split("?")[0]}}));const e=this._router.url?.split("/")||[""];this.path=e[e.length-1].split("?")[0]}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(b),t.rXU(_.Ix))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-new-parking"]],features:[t.Vt3],decls:9,vars:3,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full","relative"],[1,"relative","flex-1","h-1/2","w-full","overflow-auto","px-8"],["class","absolute inset-0 flex flex-col items-center justify-center z-50",4,"ngIf"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center","z-50"],[1,"absolute","inset-0","bg-base-100","opacity-80","z-0"],[1,"z-10","opacity-60"]],template:function(s,i){if(1&s&&(t.nrm(0,"app-topbar"),t.j41(1,"div",0),t.nrm(2,"app-sidebar"),t.j41(3,"main",1),t.nrm(4,"parking-topbar"),t.j41(5,"div",2),t.nrm(6,"router-outlet"),t.k0s(),t.DNE(7,Ut,4,0,"div",3),t.nI1(8,"async"),t.k0s()()),2&s){let o;t.R7$(7),t.Y8G("ngIf",!(null!=(o=t.bMT(8,1,i.levels))&&o.length))}},dependencies:[d.bT,Gt.S,Nt.c,_.n3,$,d.Jj],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n\n/*# sourceMappingURL=new-parking.component.ts-angular-inline--164.css.map*/"]})}return n})();const $t=()=>["email","transponder","designation","car_model","car_colour","plate_number","phone","notes","actions"],zt=()=>["","","","","","","",""," "],Bt=()=>["14r","10r","10r","10r","10r","10r","10r","flex"],Lt=(n,l,e,s,i,o,a,p,m,h)=>({email:n,name:l,transponder:e,designation:s,car_model:i,car_colour:o,plate_number:a,phone:p,notes:m,actions:h});function Dt(n,l){if(1&n){const e=t.RV6();t.j41(0,"input",6),t.bIt("ngModelChange",function(i){const o=t.eBV(e);return t.Njj(o.row.get(o.key).setValue(i))}),t.k0s()}if(2&n){const i=l.name;t.Y8G("ngModel",l.row.value[l.key])("placeholder",i)}}function Xt(n,l){if(1&n&&(t.j41(0,"app-icon"),t.EFF(1," warning "),t.k0s()),2&n){const e=t.XpG().row,s=t.XpG();t.AVh("text-red-600",s.deletion.has(e.value.id))("text-yellow-400",!s.deletion.has(e.value.id))}}function Jt(n,l){if(1&n){const e=t.RV6();t.j41(0,"button",11),t.bIt("click",function(){t.eBV(e);const i=t.XpG().row,o=t.XpG();return t.Njj(o.markForDelete(i.value.id))}),t.j41(1,"app-icon"),t.EFF(2,"delete"),t.k0s()()}if(2&n){const e=t.XpG().row,s=t.XpG();t.Y8G("matTooltip",s.isNew(e.value.id)?"Remove New User":"Mark for Deletion")}}function Ot(n,l){if(1&n){const e=t.RV6();t.j41(0,"button",12),t.bIt("click",function(){t.eBV(e);const i=t.XpG(2);return t.Njj(i.clearChanges(i.id))}),t.j41(1,"app-icon"),t.EFF(2,"clear_all"),t.k0s()()}}function At(n,l){if(1&n&&(t.j41(0,"div",7),t.DNE(1,Xt,2,4,"app-icon",8)(2,Jt,3,1,"button",9)(3,Ot,3,0,"button",10),t.k0s()),2&n){const e=l.row,s=t.XpG();t.R7$(),t.Y8G("ngIf",s.deletion.has(e.value.id)||e.dirty||s.isNew(e.value.id)),t.R7$(),t.Y8G("ngIf",!s.deletion.has(e.value.id)),t.R7$(),t.Y8G("ngIf",s.deletion.has(e.value.id)||e.dirty)}}function Yt(n,l){if(1&n&&(t.j41(0,"div",16)(1,"app-icon",17),t.EFF(2,"warning"),t.k0s(),t.j41(3,"div"),t.EFF(4),t.k0s()()),2&n){const e=t.XpG(2);t.R7$(4),t.SpI("",e.deletion.entries.length," users pending deletion")}}function Ht(n,l){if(1&n&&(t.j41(0,"div",16)(1,"app-icon",18),t.EFF(2,"warning"),t.k0s(),t.j41(3,"div"),t.EFF(4),t.nI1(5,"async"),t.k0s()()),2&n){const e=t.XpG(2);t.R7$(4),t.SpI(" ",t.bMT(5,1,e.new_items).length," new users pending save ")}}function Zt(n,l){if(1&n&&(t.j41(0,"div",16)(1,"app-icon",18),t.EFF(2,"warning"),t.k0s(),t.j41(3,"div"),t.EFF(4),t.nI1(5,"async"),t.k0s()()),2&n){const e=t.XpG(2);t.R7$(4),t.SpI("",t.bMT(5,1,e.change_count)," users with pending changes")}}function Kt(n,l){if(1&n&&(t.j41(0,"div",13),t.DNE(1,Yt,5,1,"div",14)(2,Ht,6,3,"div",14),t.nI1(3,"async"),t.DNE(4,Zt,6,3,"div",14),t.nI1(5,"async"),t.j41(6,"button",15),t.EFF(7,"Save Changes"),t.k0s()()),2&n){const e=t.XpG();t.R7$(),t.Y8G("ngIf",e.deletion.entries.length),t.R7$(),t.Y8G("ngIf",t.bMT(3,3,e.new_items).length),t.R7$(2),t.Y8G("ngIf",t.bMT(5,5,e.change_count))}}const Z=n=>new c.gE({id:new c.MJ(n.id||""),email:new c.MJ(n.email||""),name:new c.MJ(n.name||""),transponder:new c.MJ(n.transponder||""),designation:new c.MJ(n.designation||""),car_model:new c.MJ(n.car_model||""),car_colour:new c.MJ(n.car_colour||""),plate_number:new c.MJ(n.plate_number||""),phone:new c.MJ(n.phone||""),notes:new c.MJ(n.notes||"")});let z=(()=>{class n{isNew(e){return!!this.new_items.getValue().find(s=>s.value.id===e)}constructor(e){this._state=e,this.options=this._state.options,this.loading=this._state.loading,this.forms=this._state.users.pipe((0,v.T)(s=>s.map(i=>Z(i)))),this.new_items=new k.t([]),this.user_list=(0,x.zV)([this.forms,this.new_items]).pipe((0,v.T)(([s,i])=>[...s,...i])),this.change_count=this.user_list.pipe((0,v.T)(s=>s.filter(i=>i.dirty||!this.isNew(i.value.id)).length)),this.deletion=new Set}markForDelete(e){this.isNew(e)?this.new_items.next(this.new_items.getValue().filter(s=>s.value.id!==e)):this.deletion.add(e)}clearChanges(e){var s=this;return(0,f.A)(function*(){if(s.isNew(e)){const o=s.new_items.getValue().find(a=>a.value.id===e);o&&o.reset({id:e})}else{const i=yield s.user_list.pipe((0,y.s)(1)).toPromise(),o=yield s._state.users.pipe((0,y.s)(1)).toPromise(),a=i.find(m=>m.value.id===e),p=o.find(m=>m.id===e);a&&p&&a.reset(p)}})()}newUser(){const e=Z({id:`parking-${(0,u.HO)(99999999,1e7)}`});this.new_items.next([...this.new_items.getValue(),e])}saveChanges(){var e=this;return(0,f.A)(function*(){const i=(yield e.user_list.pipe((0,y.s)(1)).toPromise()).map(o=>o.value).filter(o=>!e.deletion.has(o.id));yield e._state.saveUsers(i)})()}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(b))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["parking-users-list"]],decls:14,vars:31,consts:[["text_input_template",""],["action_template",""],[1,"absolute","inset-0","overflow-auto","px-2"],[1,"block","min-w-[96rem]",3,"dataSource","columns","display_column","column_size","template","filter"],["btn","","icon","","matRipple","",1,"absolute","bottom-2","left-2","bg-primary","text-white",3,"click"],["class","absolute bottom-2 right-2 bg-base-100 border border-base-200 p-2 text-base rounded shadow space-y-2",4,"ngIf"],[1,"relative","-top-px","border-none","px-2","py-4","-m-2","text-base","w-full","!outline-none","focus:border-b","border-blue-600",3,"ngModelChange","ngModel","placeholder"],[1,"w-full","flex","items-center","justify-end"],[3,"text-red-600","text-yellow-400",4,"ngIf"],["btn","","icon","",3,"matTooltip","click",4,"ngIf"],["btn","","icon","","matTooltip","Clear Changes",3,"click",4,"ngIf"],["btn","","icon","",3,"click","matTooltip"],["btn","","icon","","matTooltip","Clear Changes",3,"click"],[1,"absolute","bottom-2","right-2","bg-base-100","border","border-base-200","p-2","text-base","rounded","shadow","space-y-2"],["class","flex items-center space-x-2 p-2",4,"ngIf"],["btn","",1,"w-full"],[1,"flex","items-center","space-x-2","p-2"],[1,"text-red-600","text-2xl"],[1,"text-yellow-400","text-2xl"]],template:function(s,i){if(1&s){const o=t.RV6();t.j41(0,"div",2),t.nrm(1,"custom-table",3),t.nI1(2,"async"),t.nI1(3,"async"),t.DNE(4,Dt,1,2,"ng-template",null,0,t.C5r)(6,At,4,3,"ng-template",null,1,t.C5r),t.k0s(),t.j41(8,"button",4),t.bIt("click",function(){return t.eBV(o),t.Njj(i.newUser())}),t.j41(9,"app-icon"),t.EFF(10,"add"),t.k0s()(),t.DNE(11,Kt,8,7,"div",5),t.nI1(12,"async"),t.nI1(13,"async")}if(2&s){let o;const a=t.sdS(5),p=t.sdS(7);t.R7$(),t.AVh("opacity-50",null==(o=t.bMT(2,9,i.loading))?null:o.includes("users")),t.Y8G("dataSource",i.user_list)("columns",t.lJ4(17,$t))("display_column",t.lJ4(18,zt))("column_size",t.lJ4(19,Bt))("template",t.zJS(20,Lt,[a,a,a,a,a,a,a,a,a,p]))("filter",t.bMT(3,11,i.options).search),t.R7$(10),t.Y8G("ngIf",i.deletion.entries.length||t.bMT(12,13,i.change_count)||t.bMT(13,15,i.new_items).length)}},dependencies:[d.bT,A.oV,T.r6,c.me,c.BC,c.vS,F.R,G.r,d.Jj]})}return n})();const Qt=[{path:"new",component:H,children:[{path:"events",component:N},{path:"users",component:z},{path:"manage",component:U},{path:"**",redirectTo:"events"}]},{path:"",component:Y,children:[{path:"events",component:N},{path:"users",component:z},{path:"manage",component:U},{path:"**",redirectTo:"events"}]},{path:"**",redirectTo:""}];let Wt=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#e=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({imports:[d.MD,Q.r,c.YN,c.X1,K.cQ,M.RI,P.PO,_.iI.forChild(Qt)]})}return n})()}}]);
//# sourceMappingURL=apps_concierge_src_app_parking_parking_module_ts.js.map