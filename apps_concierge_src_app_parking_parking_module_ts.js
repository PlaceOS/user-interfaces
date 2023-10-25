"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_parking_parking_module_ts"],{6192:(Ge,Y,r)=>{r.r(Y),r.d(Y,{AppParkingModule:()=>Ee});var p=r(6477),c=r(9542),y=r(6297),P=r(2128),u=r(647),X=r(9816),K=r(3045),_=r(1670),U=r(5375),m=r(9743),z=r(5912),k=r(2182),F=r(1810),W=r(9377),H=r(3200),D=r(1535),v=r(4505),b=r(7716),f=r(6942),q=r(9151),A=r(9095),N=r(8759),M=r(9128),$=r(823),B=r(5670),Z=r(3910),e=r(6839),C=r(7486),L=r(8750),ee=r(380),te=r(5312),T=r(7728),ne=r(9697),w=r(5306);function oe(n,a){1&n&&(e.TgZ(0,"button",6)(1,"app-icon"),e._uU(2,"close"),e.qZA()())}function se(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"main",7)(1,"label",8),e._uU(2,"Parking Space Name/Bay Number"),e.qZA(),e.TgZ(3,"mat-form-field",9),e._UZ(4,"input",10),e.TgZ(5,"mat-error"),e._uU(6,"A name is required for parking spaces"),e.qZA()(),e.TgZ(7,"label",11),e._uU(8,"Map ID"),e.qZA(),e.TgZ(9,"mat-form-field",9),e._UZ(10,"input",12),e.TgZ(11,"mat-error"),e._uU(12," A map ID is required for parking spaces "),e.qZA()(),e.TgZ(13,"label",13),e._uU(14,"Assigned User"),e.qZA(),e._UZ(15,"a-user-search-field",14),e.TgZ(16,"label",15),e._uU(17,"Notes"),e.qZA(),e.TgZ(18,"mat-form-field",9),e._UZ(19,"textarea",16),e.qZA(),e.TgZ(20,"label",17),e._uU(21,"Map Rotation"),e.qZA(),e.TgZ(22,"mat-form-field",9),e._UZ(23,"textarea",18),e.qZA(),e.TgZ(24,"div",19)(25,"button",20),e._uU(26," Cancel "),e.qZA(),e.TgZ(27,"button",21),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.postForm())}),e._uU(28," Save "),e.qZA()()()}if(2&n){const t=e.oxw();e.Q6J("formGroup",t.form)}}function ie(n,a){1&n&&(e.TgZ(0,"main",22),e._UZ(1,"mat-spinner",23),e.TgZ(2,"p"),e._uU(3,"Saving parking space details..."),e.qZA()())}let Q=(()=>{class n{get id(){return this._data?.id||""}constructor(t,o){this._data=t,this._dialog_ref=o,this.event=new e.vpe,this.form=new c.cw({id:new c.NI(""),name:new c.NI("",[c.kI.required]),map_id:new c.NI("",[c.kI.required]),assigned_user:new c.NI(null),assigned_to:new c.NI(""),assigned_name:new c.NI(""),notes:new c.NI(""),map_rotation:new c.NI(0)}),t&&this.form.patchValue(t)}postForm(){if(!this.form.valid)return;this.loading=!0;const t=this.form.value;t.assigned_user&&(t.assigned_to=t.assigned_user.email,t.assigned_name=t.assigned_user.name),this._dialog_ref.disableClose=!0,this.event.emit({reason:"done",metadata:t})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(C.WI),e.Y36(C.so))},n.\u0275cmp=e.Xpm({type:n,selectors:[["parking-space-modal"]],outputs:{event:"event"},decls:8,vars:4,consts:[[1,"w-[28rem]"],[1,"flex","items-center","justify-between","px-2","w-full"],[1,"px-2"],["icon","","matRipple","","mat-dialog-close","",4,"ngIf"],["class","p-4 flex flex-col",3,"formGroup",4,"ngIf","ngIfElse"],["load_state",""],["icon","","matRipple","","mat-dialog-close",""],[1,"p-4","flex","flex-col",3,"formGroup"],["for","name"],["appearance","outline"],["matInput","","name","name","formControlName","name"],["for","map-id"],["matInput","","name","map-id","formControlName","map_id"],["for","user"],["name","user","formControlName","assigned_user"],["for","notes"],["matInput","","name","notes","formControlName","notes"],["for","map-rotation"],["matInput","","name","map-rotation","formControlName","map_rotation"],[1,"flex","items-center","justify-center","space-x-2"],["btn","","matRipple","","mat-dialog-close","",1,"w-32","inverse"],["btn","","matRipple","",1,"w-32",3,"click"],[1,"p-8","flex","flex-col","items-center","justify-center","space-y-2"],["diameter","32"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"header",1)(2,"h2",2),e._uU(3),e.qZA(),e.YNc(4,oe,3,0,"button",3),e.qZA(),e.YNc(5,se,29,1,"main",4),e.qZA(),e.YNc(6,ie,4,0,"ng-template",null,5,e.W1O)),2&t){const s=e.MAs(7);e.xp6(3),e.hij("",o.id?"Edit":"New"," Parking Space"),e.xp6(1),e.Q6J("ngIf",!o.loading),e.xp6(1),e.Q6J("ngIf",!o.loading)("ngIfElse",s)}},dependencies:[p.O5,L.KE,L.TO,ee.Nt,te.Ou,C.ZT,T.wG,c.Fj,c.JJ,c.JL,c.sg,c.u,ne.d,w.o]}),n})(),h=(()=>{class n extends m.cx{constructor(t,o){super(),this._org=t,this._dialog=o,this._poll=new v.X(0),this._change=new v.X(0),this._options=new v.X({date:Date.now(),search:"",zones:[]}),this._loading=new v.X([]),this.levels=this._org.active_levels.pipe((0,f.U)(s=>s.filter(i=>i.tags.includes("parking")))),this.spaces=(0,b.aj)([this.levels,this._options,this._change]).pipe((0,q.h)(([s,i])=>!(!i.zones[0]&&!s[0]?.id)),(0,A.w)(([s,i])=>(this._loading.next([...this._loading.getValue(),"spaces"]),(0,k.rlq)(i.zones[0]||s[0]?.id,"parking-spaces"))),(0,f.U)(s=>s.details instanceof Array?s.details:[]),(0,N.b)(()=>this._loading.next(this._loading.getValue().filter(s=>"spaces"!==s))),(0,M.d)(1)),this.users=(0,b.aj)([this._org.active_building,this._change]).pipe((0,q.h)(([s])=>!!s?.id),(0,A.w)(([s])=>(this._loading.next([...this._loading.getValue(),"users"]),(0,k.rlq)(s.id,"parking-users"))),(0,f.U)(s=>s.details instanceof Array?s.details:[]),(0,N.b)(()=>this._loading.next(this._loading.getValue().filter(s=>"users"!==s))),(0,M.d)(1)),this.bookings=(0,b.aj)([this._org.active_building,this._options,this._poll]).pipe((0,$.b)(500),(0,A.w)(([s,i])=>(this._loading.next([...this._loading.getValue(),"bookings"]),(0,U.F2)({period_start:(0,F.Z)((0,W.Z)(i.date)),period_end:(0,F.Z)((0,H.Z)(i.date)),type:"parking",zones:i.zones?.length?i.zones.join(","):s?.id}))),(0,N.b)(()=>this._loading.next(this._loading.getValue().filter(s=>"bookings"!==s))),(0,M.d)(1)),this.options=this._options.asObservable(),this.loading=this._loading.asObservable()}setOptions(t){this._options.next({...this._options.getValue(),...t})}startPolling(t=5e3){return this._poll.next(Date.now()),this.interval("poll",()=>this._poll.next(Date.now()),t),()=>this.stopPolling()}stopPolling(){this.clearInterval("poll")}editSpace(t){var o=this;return(0,_.Z)(function*(){const s=o._dialog.open(Q,{data:t}),i=yield Promise.race([s.afterClosed().toPromise(),s.componentInstance.event.pipe((0,B.P)(x=>"done"===x.reason)).toPromise()]);if("done"!==i?.reason)return;const l=o._options.getValue().zones[0],g={...i.metadata,id:i.metadata.id||`parking-${l}.${(0,m.Iy)(999999)}`},d=yield o.spaces.pipe((0,Z.q)(1)).toPromise();yield(0,k.Ymr)(l,{name:"parking-spaces",details:[...d.filter(x=>x.id!==g.id),g],description:"List of available parking spaces"}).toPromise(),o._change.next(Date.now()),s.close()})()}removeSpace(t){var o=this;return(0,_.Z)(function*(){const s=yield(0,m._5)({title:"Remove Parking Space",content:`Are you sure you wish to remove the parking space "${t.name}"?`,icon:{content:"delete"}},o._dialog);if("done"!==s?.reason)return;s.loading("Removing parking space...");const i=o._options.getValue().zones[0],l=yield o.spaces.pipe((0,Z.q)(1)).toPromise();yield(0,k.Ymr)(i,{name:"parking-spaces",details:l.filter(g=>g.id!==t.id),description:"List of available parking spaces"}).toPromise(),s.close()})()}saveUsers(t){return(0,_.Z)(function*(){})()}approveBooking(t){return(0,_.Z)(function*(){"failed"===(yield(0,U.jT)(t.id).toPromise().catch(s=>"failed"))?(0,m.cB)("Error approving in desk booking"):(0,m.t5)(`Approved parking reservation for ${t.user_name} on ${(0,D.Z)(t.date,"MMM Do")}.`)})()}rejectBooking(t){return(0,_.Z)(function*(){"failed"===(yield(0,U.FP)(t.id).toPromise().catch(s=>"failed"))?(0,m.cB)("Error rejecting in desk booking"):(0,m.t5)(`Rejected parking reservation for ${t.user_name} on ${(0,D.Z)(t.date,"MMM Do")}.`)})()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(z.w7),e.LFG(C.uw))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var R=r(2423),I=r(1110);function ae(n,a){if(1&n&&e._uU(0),2&n){const t=a.row;e.hij(" ",null==t||null==t.extension_data?null:t.extension_data.plate_number," ")}}function re(n,a){if(1&n&&(e.TgZ(0,"span",5),e._uU(1),e.qZA()),2&n){const t=a.data;e.ekj("bg-success","approved"===t)("bg-pending","tentative"===t)("bg-error","cancelled"===t||"declined"===t),e.xp6(1),e.hij(" ",t," ")}}function le(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",6)(1,"button",7),e.NdJ("click",function(){const i=e.CHM(t).row,l=e.oxw();return e.KtG(l.reject(i))}),e.TgZ(2,"app-icon"),e._uU(3,"event_busy"),e.qZA()(),e.TgZ(4,"button",8),e.NdJ("click",function(){const i=e.CHM(t).row,l=e.oxw();return e.KtG(l.approve(i))}),e.TgZ(5,"app-icon"),e._uU(6,"event_available"),e.qZA()()()}}function ce(n,a){1&n&&e._UZ(0,"mat-progress-bar",9)}const pe=function(){return["asset_name","booked_by_name","user_name","plate_number","status","actions"]},ge=function(){return["Bay No.","Reserved By","Reserved For","Car Plate #","Status"," "]},me=function(){return["6r","flex","14r","8r","6r","10r"]},ue=function(n,a,t){return{plate_number:n,actions:a,status:t}};let O=(()=>{class n{constructor(t){this._state=t,this.events=this._state.bookings,this.options=this._state.options,this.loading=this._state.loading,this.reject=o=>this._state.rejectBooking(o),this.approve=o=>this._state.approveBooking(o)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h))},n.\u0275cmp=e.Xpm({type:n,selectors:[["parking-bookings-list"]],decls:11,vars:22,consts:[[1,"block","min-w-[60rem]",3,"dataSource","columns","display_column","filter","column_size","template"],["plate_template",""],["status_template",""],["action_template",""],["class","absolute bottom-0 inset-x-0",4,"ngIf"],[1,"capitalize","text-white","px-2","py-1","rounded","border","border-base-200"],[1,"w-full","flex","items-center","justify-end"],["icon","","matTooltip","Reject Parking Reservation",3,"click"],["icon","","matTooltip","Approve Parking Reservation",3,"click"],[1,"absolute","bottom-0","inset-x-0"]],template:function(t,o){if(1&t&&(e._UZ(0,"custom-table",0),e.ALo(1,"async"),e.ALo(2,"async"),e.YNc(3,ae,1,1,"ng-template",null,1,e.W1O),e.YNc(5,re,2,7,"ng-template",null,2,e.W1O),e.YNc(7,le,7,0,"ng-template",null,3,e.W1O),e.YNc(9,ce,1,0,"mat-progress-bar",4),e.ALo(10,"async")),2&t){const s=e.MAs(4),i=e.MAs(6),l=e.MAs(8);let g,d;e.ekj("opacity-50",null==(g=e.lcZ(1,9,o.loading))?null:g.includes("bookings")),e.Q6J("dataSource",o.events)("columns",e.DdM(15,pe))("display_column",e.DdM(16,ge))("filter",e.lcZ(2,11,o.options).search)("column_size",e.DdM(17,me))("template",e.kEZ(18,ue,s,l,i)),e.xp6(9),e.Q6J("ngIf",null==(d=e.lcZ(10,13,o.loading))?null:d.includes("bookings"))}},dependencies:[p.O5,R.gM,y.pW,w.o,I.C,p.Ov],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;overflow:auto}\n/*# sourceMappingURL=parking-bookings-list.component.ts-angular-inline--159.css.map*/"]}),n})();function de(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",5)(1,"button",6),e.NdJ("click",function(){const i=e.CHM(t).row,l=e.oxw();return e.KtG(l.editSpace(i))}),e.TgZ(2,"app-icon"),e._uU(3,"edit"),e.qZA()(),e.TgZ(4,"button",6),e.NdJ("click",function(){const i=e.CHM(t).row,l=e.oxw();return e.KtG(l.removeSpace(i))}),e.TgZ(5,"app-icon"),e._uU(6,"delete"),e.qZA()()()}}function _e(n,a){1&n&&e._UZ(0,"mat-progress-bar",7)}const fe=function(){return["name","map_id","assigned_to","notes","actions"]},he=function(){return["Bay No.","Map ID","Assigned","Notes"," "]},ve=function(){return["8r","10r","14r","flex","10r"]},Ze=function(n){return{actions:n}};let S=(()=>{class n{constructor(t){this._state=t,this.spaces=this._state.spaces,this.options=this._state.options,this.loading=this._state.loading,this.editSpace=o=>this._state.editSpace(o),this.removeSpace=o=>this._state.removeSpace(o)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h))},n.\u0275cmp=e.Xpm({type:n,selectors:[["parking-space-list"]],decls:11,vars:20,consts:[[1,"absolute","inset-0","overflow-auto","px-2"],[1,"block","min-w-[56rem]",3,"dataSource","columns","display_column","column_size","template","filter"],["action_template",""],["class","absolute bottom-0 inset-x-0",4,"ngIf"],["btn","","icon","","matRipple","",1,"absolute","bottom-2","left-2","bg-primary","text-white",3,"click"],[1,"w-full","flex","items-center","justify-end"],["icon","",3,"click"],[1,"absolute","bottom-0","inset-x-0"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0),e._UZ(1,"custom-table",1),e.ALo(2,"async"),e.ALo(3,"async"),e.YNc(4,de,7,0,"ng-template",null,2,e.W1O),e.YNc(6,_e,1,0,"mat-progress-bar",3),e.ALo(7,"async"),e.qZA(),e.TgZ(8,"button",4),e.NdJ("click",function(){return o.editSpace()}),e.TgZ(9,"app-icon"),e._uU(10,"add"),e.qZA()()),2&t){const s=e.MAs(5);let i,l;e.xp6(1),e.ekj("opacity-50",null==(i=e.lcZ(2,9,o.loading))?null:i.includes("spaces")),e.Q6J("dataSource",o.spaces)("columns",e.DdM(15,fe))("display_column",e.DdM(16,he))("column_size",e.DdM(17,ve))("template",e.VKq(18,Ze,s))("filter",e.lcZ(3,11,o.options).search),e.xp6(5),e.Q6J("ngIf",null==(l=e.lcZ(7,13,o.loading))?null:l.includes("spaces"))}},dependencies:[p.O5,y.pW,T.wG,w.o,I.C,p.Ov],encapsulation:2}),n})();var xe=r(8441),ke=r(9396),be=r(6508);function Ce(n,a){if(1&n&&(e.TgZ(0,"mat-option",7),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.display_name||t.name," ")}}function Te(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"date-options",8),e.NdJ("dateChange",function(s){e.CHM(t);const i=e.oxw();return e.KtG(i.setDate(s))}),e.qZA()}}let J=(()=>{class n extends m.cx{constructor(t,o,s,i){super(),this._state=t,this._org=o,this._route=s,this._router=i,this.manage=!1,this.zones=[],this.levels=this._state.levels,this.options=this._state.options,this.setDate=l=>this._state.setOptions({date:l}),this.setSearch=l=>this._state.setOptions({search:l}),this.updateZones=l=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:l.join(",")}}),this._state.setOptions({zones:l})}}ngOnInit(){var t=this;return(0,_.Z)(function*(){yield t._org.initialised.pipe((0,B.P)(o=>o)).toPromise(),t.subscription("route.query",t._route.queryParamMap.subscribe(o=>{if(o.has("zone_ids")){const s=o.get("zone_ids").split(",");if(s.length){const i=t._org.levelWithID(s);if(t.zones=s,!i)return;t._org.building=t._org.buildings.find(l=>l.id===i.parent_id)}}})),t.subscription("levels",t._state.levels.subscribe(o=>{t.zones=t.zones.filter(s=>o.find(i=>i.id===s)),!t.zones.length&&o.length&&t.zones.push(o[0].id),t.updateZones(t.zones)})),t.manage=!t._router.url.includes("events")})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h),e.Y36(z.w7),e.Y36(u.gz),e.Y36(u.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["parking-topbar"]],features:[e.qOj],decls:8,vars:5,consts:[[1,"flex","items-center","bg-base-100","px-2","h-20"],["appearance","outline"],["placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-1","w-0"],[1,"mr-2",3,"modelChange"],[3,"dateChange",4,"ngIf"],[3,"value"],[3,"dateChange"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),e.NdJ("ngModelChange",function(i){return o.updateZones([i]),o.zones=[i]}),e.YNc(3,Ce,2,2,"mat-option",3),e.ALo(4,"async"),e.qZA()(),e._UZ(5,"div",4),e.TgZ(6,"searchbar",5),e.NdJ("modelChange",function(i){return o.setSearch(i)}),e.qZA(),e.YNc(7,Te,1,0,"date-options",6),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngModel",o.zones[0]),e.xp6(1),e.Q6J("ngForOf",e.lcZ(4,3,o.levels)),e.xp6(4),e.Q6J("ngIf",!o.manage))},dependencies:[p.sg,p.O5,xe.E,ke.U,L.KE,be.gD,T.ey,c.JJ,c.On,p.Ov],styles:["button[_ngcontent-%COMP%]{min-width:0;padding:0 .85rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=parking-topbar.component.ts-angular-inline--160.css.map*/"]}),n})();var we=r(4945);function ye(n,a){1&n&&(e.TgZ(0,"div",6)(1,"p"),e._uU(2,"No parking floors for the currently selected building"),e.qZA()())}const Pe=function(){return["/parking","events"]},Ue=function(){return["/parking","spaces"]};let E=(()=>{class n extends m.cx{constructor(t,o){super(),this._state=t,this._router=o,this.levels=this._state.levels,this.path=""}ngOnInit(){this._state.startPolling(),this.subscription("router.events",this._router.events.subscribe(o=>{if(o instanceof u.m2){const s=this._router.url?.split("/")||[""];this.path=s[t.length-1].split("?")[0]}}));const t=this._router.url?.split("/")||[""];this.path=t[t.length-1].split("?")[0]}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h),e.Y36(u.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-parking"]],features:[e.qOj],decls:13,vars:9,consts:[[1,"relative","overflow-hidden","bg-base-200"],[1,"dark"],["mat-tab-nav-bar",""],["mat-tab-link","","queryParamsHandling","merge",3,"routerLink","active"],[1,"flex-1","h-1/2","w-full","relative","overflow-auto","px-4"],["class","absolute inset-0 bg-base-100/80/20 flex flex-col items-center justify-center z-50",4,"ngIf"],[1,"absolute","inset-0","bg-base-100/80/20","flex","flex-col","items-center","justify-center","z-50"]],template:function(t,o){if(1&t&&(e._UZ(0,"sidebar"),e.TgZ(1,"main",0),e._UZ(2,"parking-topbar"),e.TgZ(3,"div",1)(4,"nav",2)(5,"a",3),e._uU(6," Bookings "),e.qZA(),e.TgZ(7,"a",3),e._uU(8," Manage Spaces "),e.qZA()()(),e.TgZ(9,"div",4),e._UZ(10,"router-outlet"),e.qZA(),e.YNc(11,ye,3,0,"div",5),e.ALo(12,"async"),e.qZA()),2&t){let s;e.xp6(5),e.Q6J("routerLink",e.DdM(7,Pe))("active","events"===o.path),e.xp6(2),e.Q6J("routerLink",e.DdM(8,Ue))("active","spaces"===o.path),e.xp6(4),e.Q6J("ngIf",!(null!=(s=e.lcZ(12,5,o.levels))&&s.length))}},dependencies:[p.O5,we.k,P.BU,P.Nj,u.lC,u.rH,J,p.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n/*# sourceMappingURL=parking.component.ts-angular-inline--161.css.map*/"]}),n})();var Ae=r(6866),Ne=r(3320);function Me(n,a){1&n&&(e.TgZ(0,"div",4)(1,"p"),e._uU(2,"No parking floors for the currently selected building"),e.qZA()())}let G=(()=>{class n extends m.cx{constructor(t,o){super(),this._state=t,this._router=o,this.levels=this._state.levels,this.path=""}ngOnInit(){this._state.startPolling(),this.subscription("router.events",this._router.events.subscribe(o=>{if(o instanceof u.m2){const s=this._router.url?.split("/")||[""];this.path=s[t.length-1].split("?")[0]}}));const t=this._router.url?.split("/")||[""];this.path=t[t.length-1].split("?")[0]}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h),e.Y36(u.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-new-parking"]],features:[e.qOj],decls:9,vars:3,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full","relative"],[1,"flex-1","h-1/2","w-full","relative","overflow-auto","px-2"],["class","absolute inset-0 bg-base-100/80/20 flex flex-col items-center justify-center z-50",4,"ngIf"],[1,"absolute","inset-0","bg-base-100/80/20","flex","flex-col","items-center","justify-center","z-50"]],template:function(t,o){if(1&t&&(e._UZ(0,"app-topbar"),e.TgZ(1,"div",0),e._UZ(2,"app-sidebar"),e.TgZ(3,"main",1),e._UZ(4,"parking-topbar"),e.TgZ(5,"div",2),e._UZ(6,"router-outlet"),e.qZA(),e.YNc(7,Me,3,0,"div",3),e.ALo(8,"async"),e.qZA()()),2&t){let s;e.xp6(7),e.Q6J("ngIf",!(null!=(s=e.lcZ(8,1,o.levels))&&s.length))}},dependencies:[p.O5,Ae.O,Ne.u,u.lC,J,p.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n/*# sourceMappingURL=new-parking.component.ts-angular-inline--162.css.map*/"]}),n})();function Le(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"input",6),e.NdJ("ngModelChange",function(s){const i=e.CHM(t);return e.KtG(i.row.get(i.key).setValue(s))}),e.qZA()}if(2&n){const s=a.name;e.Q6J("ngModel",a.row.value[a.key])("placeholder",s)}}function Ie(n,a){if(1&n&&(e.TgZ(0,"app-icon"),e._uU(1," warning "),e.qZA()),2&n){const t=e.oxw().row,o=e.oxw();e.ekj("text-red-600",o.deletion.has(t.value.id))("text-yellow-400",!o.deletion.has(t.value.id))}}function Oe(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"button",11),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().row,i=e.oxw();return e.KtG(i.markForDelete(s.value.id))}),e.TgZ(1,"app-icon"),e._uU(2,"delete"),e.qZA()()}if(2&n){const t=e.oxw().row,o=e.oxw();e.Q6J("matTooltip",o.isNew(t.value.id)?"Remove New User":"Mark for Deletion")}}function Se(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(2);return e.KtG(s.clearChanges(s.id))}),e.TgZ(1,"app-icon"),e._uU(2,"clear_all"),e.qZA()()}}function Je(n,a){if(1&n&&(e.TgZ(0,"div",7),e.YNc(1,Ie,2,4,"app-icon",8),e.YNc(2,Oe,3,1,"button",9),e.YNc(3,Se,3,0,"button",10),e.qZA()),2&n){const t=a.row,o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.deletion.has(t.value.id)||t.dirty||o.isNew(t.value.id)),e.xp6(1),e.Q6J("ngIf",!o.deletion.has(t.value.id)),e.xp6(1),e.Q6J("ngIf",o.deletion.has(t.value.id)||t.dirty)}}function je(n,a){if(1&n&&(e.TgZ(0,"div",16)(1,"app-icon",17),e._uU(2,"warning"),e.qZA(),e.TgZ(3,"div"),e._uU(4),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(4),e.hij("",t.deletion.entries.length," users pending deletion")}}function Ye(n,a){if(1&n&&(e.TgZ(0,"div",16)(1,"app-icon",18),e._uU(2,"warning"),e.qZA(),e.TgZ(3,"div"),e._uU(4),e.ALo(5,"async"),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(4),e.hij(" ",e.lcZ(5,1,t.new_items).length," new users pending save ")}}function ze(n,a){if(1&n&&(e.TgZ(0,"div",16)(1,"app-icon",18),e._uU(2,"warning"),e.qZA(),e.TgZ(3,"div"),e._uU(4),e.ALo(5,"async"),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(4),e.hij("",e.lcZ(5,1,t.change_count)," users with pending changes")}}function Fe(n,a){if(1&n&&(e.TgZ(0,"div",13),e.YNc(1,je,5,1,"div",14),e.YNc(2,Ye,6,3,"div",14),e.ALo(3,"async"),e.YNc(4,ze,6,3,"div",14),e.ALo(5,"async"),e.TgZ(6,"button",15),e._uU(7,"Save Changes"),e.qZA()()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.deletion.entries.length),e.xp6(1),e.Q6J("ngIf",e.lcZ(3,3,t.new_items).length),e.xp6(2),e.Q6J("ngIf",e.lcZ(5,5,t.change_count))}}const De=function(){return["email","transponder","designation","car_model","car_colour","plate_number","phone","notes","actions"]},qe=function(){return["","","","","","","",""," "]},Be=function(){return["14r","10r","10r","10r","10r","10r","10r","flex"]},Qe=function(n,a,t,o,s,i,l,g,d,x){return{email:n,name:a,transponder:t,designation:o,car_model:s,car_colour:i,plate_number:l,phone:g,notes:d,actions:x}},V=n=>new c.cw({id:new c.NI(n.id||""),email:new c.NI(n.email||""),name:new c.NI(n.name||""),transponder:new c.NI(n.transponder||""),designation:new c.NI(n.designation||""),car_model:new c.NI(n.car_model||""),car_colour:new c.NI(n.car_colour||""),plate_number:new c.NI(n.plate_number||""),phone:new c.NI(n.phone||""),notes:new c.NI(n.notes||"")});let j=(()=>{class n{isNew(t){return!!this.new_items.getValue().find(o=>o.value.id===t)}constructor(t){this._state=t,this.options=this._state.options,this.loading=this._state.loading,this.forms=this._state.users.pipe((0,f.U)(o=>o.map(s=>V(s)))),this.new_items=new v.X([]),this.user_list=(0,b.aj)([this.forms,this.new_items]).pipe((0,f.U)(([o,s])=>[...o,...s])),this.change_count=this.user_list.pipe((0,f.U)(o=>o.filter(s=>s.dirty||!this.isNew(s.value.id)).length)),this.deletion=new Set}markForDelete(t){this.isNew(t)?this.new_items.next(this.new_items.getValue().filter(o=>o.value.id!==t)):this.deletion.add(t)}clearChanges(t){var o=this;return(0,_.Z)(function*(){if(o.isNew(t)){const i=o.new_items.getValue().find(l=>l.value.id===t);i&&i.reset({id:t})}else{const s=yield o.user_list.pipe((0,Z.q)(1)).toPromise(),i=yield o._state.users.pipe((0,Z.q)(1)).toPromise(),l=s.find(d=>d.value.id===t),g=i.find(d=>d.id===t);l&&g&&l.reset(g)}})()}newUser(){const t=V({id:`parking-${(0,m.Iy)(99999999,1e7)}`});this.new_items.next([...this.new_items.getValue(),t])}saveChanges(){var t=this;return(0,_.Z)(function*(){const s=(yield t.user_list.pipe((0,Z.q)(1)).toPromise()).map(i=>i.value).filter(i=>!t.deletion.has(i.id));yield t._state.saveUsers(s)})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h))},n.\u0275cmp=e.Xpm({type:n,selectors:[["parking-users-list"]],decls:14,vars:31,consts:[[1,"absolute","inset-0","overflow-auto","px-2"],[1,"block","min-w-[96rem]",3,"dataSource","columns","display_column","column_size","template","filter"],["text_input_template",""],["action_template",""],["btn","","icon","","matRipple","",1,"absolute","bottom-2","left-2","bg-primary","text-white",3,"click"],["class","absolute bottom-2 right-2 bg-base-100 border border-base-200 p-2 text-base rounded shadow space-y-2",4,"ngIf"],[1,"relative","-top-px","border-none","px-2","py-4","-m-2","text-base","w-full","!outline-none","focus:border-b","border-blue-600",3,"ngModel","placeholder","ngModelChange"],[1,"w-full","flex","items-center","justify-end"],[3,"text-red-600","text-yellow-400",4,"ngIf"],["btn","","icon","",3,"matTooltip","click",4,"ngIf"],["btn","","icon","","matTooltip","Clear Changes",3,"click",4,"ngIf"],["btn","","icon","",3,"matTooltip","click"],["btn","","icon","","matTooltip","Clear Changes",3,"click"],[1,"absolute","bottom-2","right-2","bg-base-100","border","border-base-200","p-2","text-base","rounded","shadow","space-y-2"],["class","flex items-center space-x-2 p-2",4,"ngIf"],["btn","",1,"w-full"],[1,"flex","items-center","space-x-2","p-2"],[1,"text-red-600","text-2xl"],[1,"text-yellow-400","text-2xl"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0),e._UZ(1,"custom-table",1),e.ALo(2,"async"),e.ALo(3,"async"),e.YNc(4,Le,1,2,"ng-template",null,2,e.W1O),e.YNc(6,Je,4,3,"ng-template",null,3,e.W1O),e.qZA(),e.TgZ(8,"button",4),e.NdJ("click",function(){return o.newUser()}),e.TgZ(9,"app-icon"),e._uU(10,"add"),e.qZA()(),e.YNc(11,Fe,8,7,"div",5),e.ALo(12,"async"),e.ALo(13,"async")),2&t){const s=e.MAs(5),i=e.MAs(7);let l;e.xp6(1),e.ekj("opacity-50",null==(l=e.lcZ(2,9,o.loading))?null:l.includes("users")),e.Q6J("dataSource",o.user_list)("columns",e.DdM(17,De))("display_column",e.DdM(18,qe))("column_size",e.DdM(19,Be))("template",e.rFY(20,Qe,[s,s,s,s,s,s,s,s,s,i]))("filter",e.lcZ(3,11,o.options).search),e.xp6(10),e.Q6J("ngIf",o.deletion.entries.length||e.lcZ(12,13,o.change_count)||e.lcZ(13,15,o.new_items).length)}},dependencies:[p.O5,R.gM,T.wG,c.Fj,c.JJ,c.On,w.o,I.C,p.Ov]}),n})();const Re=[{path:"new",component:G,children:[{path:"events",component:O},{path:"users",component:j},{path:"manage",component:S},{path:"**",redirectTo:"events"}]},{path:"",component:E,children:[{path:"events",component:O},{path:"users",component:j},{path:"manage",component:S},{path:"**",redirectTo:"events"}]},{path:"**",redirectTo:""}];let Ee=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,K.v,c.u5,c.UX,X.W9,P.Nh,y.Cv,u.Bz.forChild(Re)]}),n})()}}]);
//# sourceMappingURL=apps_concierge_src_app_parking_parking_module_ts.js.map