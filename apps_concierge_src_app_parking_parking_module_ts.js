"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_parking_parking_module_ts"],{7797:(Pt,S,a)=>{a.r(S),a.d(S,{AppParkingModule:()=>Z});var p=a(4666),l=a(2508),y=a(1294),C=a(5892),d=a(9885),E=a(9816),Q=a(3045),k=a(1670),x=a(5375),m=a(9112),O=a(6221),P=a(308),I=a(1810),G=a(9377),W=a(3200),L=a(3861),A=a(4505),w=a(7716),z=a(6942),V=a(9151),j=a(9095),J=a(8759),B=a(9128),X=a(823),Y=a(5670),D=a(3910),t=a(2560),b=a(1484),M=a(5074),K=a(1267),$=a(1708),F=a(207),H=a(9697),U=a(5306);function q(s,e){1&s&&(t.TgZ(0,"button",6)(1,"app-icon"),t._uU(2,"close"),t.qZA()())}function tt(s,e){if(1&s&&(t.TgZ(0,"main",7)(1,"label",8),t._uU(2,"Parking Space Name/Bay Number"),t.qZA(),t.TgZ(3,"mat-form-field",9),t._UZ(4,"input",10),t.TgZ(5,"mat-error"),t._uU(6,"A name is required for parking spaces"),t.qZA()(),t.TgZ(7,"label",11),t._uU(8,"Map ID"),t.qZA(),t.TgZ(9,"mat-form-field",9),t._UZ(10,"input",12),t.TgZ(11,"mat-error"),t._uU(12," A map ID is required for parking spaces "),t.qZA()(),t.TgZ(13,"label",13),t._uU(14,"Assigned User"),t.qZA(),t._UZ(15,"a-user-search-field",14),t.TgZ(16,"label",15),t._uU(17,"Notes"),t.qZA(),t.TgZ(18,"mat-form-field",9),t._UZ(19,"textarea",16),t.qZA(),t.TgZ(20,"label",17),t._uU(21,"Map Rotation"),t.qZA(),t.TgZ(22,"mat-form-field",9),t._UZ(23,"textarea",18),t.qZA(),t.TgZ(24,"div",19)(25,"button",20),t._uU(26," Cancel "),t.qZA(),t.TgZ(27,"button",21),t._uU(28,"Save"),t.qZA()()()),2&s){const n=t.oxw();t.Q6J("formGroup",n.form)}}function et(s,e){1&s&&(t.TgZ(0,"main",22),t._UZ(1,"mat-spinner",23),t.TgZ(2,"p"),t._uU(3,"Saving parking space details..."),t.qZA()())}class u{get id(){return this._data?.id||""}constructor(e,n){this._data=e,this._dialog_ref=n,this.event=new t.vpe,this.form=new l.cw({id:new l.NI(""),name:new l.NI("",[l.kI.required]),map_id:new l.NI("",[l.kI.required]),assigned_user:new l.NI(null),assigned_to:new l.NI(""),assigned_name:new l.NI(""),notes:new l.NI(""),map_rotation:new l.NI(0)}),e&&this.form.patchValue(e)}postForm(){this.form.valid&&(this.loading=!0,this._dialog_ref.disableClose=!0,this.event.emit({reason:"done",metadata:this.form.value}))}}u.\u0275fac=function(e){return new(e||u)(t.Y36(b.WI),t.Y36(b.so))},u.\u0275cmp=t.Xpm({type:u,selectors:[["parking-space-modal"]],outputs:{event:"event"},decls:8,vars:4,consts:[[1,"w-[28rem]"],[1,"flex","items-center","justify-between","bg-secondary","px-2","w-full"],[1,"px-2"],["icon","","matRipple","","mat-dialog-close","",4,"ngIf"],["class","p-4 flex flex-col",3,"formGroup",4,"ngIf","ngIfElse"],["load_state",""],["icon","","matRipple","","mat-dialog-close",""],[1,"p-4","flex","flex-col",3,"formGroup"],["for","name"],["appearance","outline"],["matInput","","name","name","formControlName","name"],["for","map-id"],["matInput","","name","map-id","formControlName","map_id"],["for","user"],["name","user","formControlName","assigned_user"],["for","notes"],["matInput","","name","notes","formControlName","notes"],["for","map-rotation"],["matInput","","name","map-rotation","formControlName","map_rotation"],[1,"flex","items-center","justify-center","space-x-2"],["btn","","matRipple","","mat-dialog-close","",1,"w-32","inverse"],["btn","","matRipple","",1,"w-32"],[1,"p-8","flex","flex-col","items-center","justify-center","space-y-2"],["diameter","32"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"header",1)(2,"h2",2),t._uU(3),t.qZA(),t.YNc(4,q,3,0,"button",3),t.qZA(),t.YNc(5,tt,29,1,"main",4),t.qZA(),t.YNc(6,et,4,0,"ng-template",null,5,t.W1O)),2&e){const o=t.MAs(7);t.xp6(3),t.hij("",n.id?"Edit":"New"," Parking Space"),t.xp6(1),t.Q6J("ngIf",!n.loading),t.xp6(1),t.Q6J("ngIf",!n.loading)("ngIfElse",o)}},dependencies:[p.O5,M.KE,M.TO,K.Nt,$.Ou,b.ZT,F.wG,l.Fj,l.JJ,l.JL,l.sg,l.u,H.d,U.o]});class g extends m.cx{constructor(e,n){super(),this._org=e,this._dialog=n,this._poll=new A.X(0),this._options=new A.X({date:Date.now(),search:"",zones:[]}),this._loading=new A.X([]),this.levels=this._org.active_levels.pipe((0,z.U)(o=>o.filter(i=>i.tags.includes("parking")))),this.spaces=(0,w.aj)([this.levels,this._options]).pipe((0,V.h)(([o,i])=>!(!i.zones[0]&&!o[0]?.id)),(0,j.w)(([o,i])=>(this._loading.next([...this._loading.getValue(),"spaces"]),(0,P.rlq)(i.zones[0]||o[0]?.id,"parking-spaces"))),(0,z.U)(o=>o.details instanceof Array?o.details:[]),(0,J.b)(()=>this._loading.next(this._loading.getValue().filter(o=>"spaces"!==o))),(0,B.d)(1)),this.bookings=(0,w.aj)([this._org.active_building,this._options,this._poll]).pipe((0,X.b)(500),(0,j.w)(([o,i])=>(this._loading.next([...this._loading.getValue(),"bookings"]),(0,x.F2)({period_start:(0,I.Z)((0,G.Z)(i.date)),period_end:(0,I.Z)((0,W.Z)(i.date)),type:"parking",zones:i.zones?.length?i.zones.join(","):o?.id}))),(0,J.b)(()=>this._loading.next(this._loading.getValue().filter(o=>"bookings"!==o))),(0,B.d)(1)),this.options=this._options.asObservable(),this.loading=this._loading.asObservable()}setOptions(e){this._options.next({...this._options.getValue(),...e})}startPolling(e=5e3){return this._poll.next(Date.now()),this.interval("poll",()=>this._poll.next(Date.now()),e),()=>this.stopPolling()}stopPolling(){this.clearInterval("poll")}editSpace(e){var n=this;return(0,k.Z)(function*(){const o=n._dialog.open(u,{data:e}),i=yield Promise.race([o.afterClosed().toPromise(),o.componentInstance.event.pipe((0,Y.P)(N=>"done"===N.reason))]);if("done"!==i?.reason)return;const r=n._options.getValue().zones[0],c={...i.metadata,id:i.metadata.id||`parking-${r}.${(0,m.Iy)(999999)}`},T=yield n.spaces.pipe((0,D.q)(1)).toPromise();yield(0,P.Ymr)(r,{name:"parking-spaces",details:[...T.filter(N=>N.id!==c.id),c],description:"List of available parking spaces"}).toPromise(),o.close()})()}removeSpace(e){var n=this;return(0,k.Z)(function*(){const o=yield(0,m._5)({title:"Remove Parking Space",content:`Are you sure you wish to remove the parking space "${e.name}"?`,icon:{content:"delete"}},n._dialog);if("done"!==o?.reason)return;o.loading("Removing parking space...");const i=n._options.getValue().zones[0],r=yield n.spaces.pipe((0,D.q)(1)).toPromise();yield(0,P.Ymr)(i,{name:"parking-spaces",details:r.filter(c=>c.id!==e.id),description:"List of available parking spaces"}).toPromise(),o.close()})()}approveBooking(e){return(0,k.Z)(function*(){"failed"===(yield(0,x.jT)(e.id).toPromise().catch(o=>"failed"))?(0,m.cB)("Error approving in desk booking"):(0,m.t5)(`Approved parking reservation for ${e.user_name} on ${(0,L.Z)(e.date,"MMM Do")}.`)})()}rejectBooking(e){return(0,k.Z)(function*(){"failed"===(yield(0,x.FP)(e.id).toPromise().catch(o=>"failed"))?(0,m.cB)("Error rejecting in desk booking"):(0,m.t5)(`Rejected parking reservation for ${e.user_name} on ${(0,L.Z)(e.date,"MMM Do")}.`)})()}}g.\u0275fac=function(e){return new(e||g)(t.LFG(O.w7),t.LFG(b.uw))},g.\u0275prov=t.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"});var nt=a(6896),R=a(1110);function ot(s,e){if(1&s&&t._uU(0),2&s){const n=e.row;t.hij(" ",null==n||null==n.extension_data?null:n.extension_data.plate_number," ")}}function st(s,e){if(1&s&&(t.TgZ(0,"span",5),t._uU(1),t.qZA()),2&s){const n=e.data;t.ekj("bg-success","approved"===n)("bg-pending","tentative"===n)("bg-error","cancelled"===n||"declined"===n),t.xp6(1),t.hij(" ",n," ")}}function at(s,e){if(1&s){const n=t.EpF();t.TgZ(0,"div",6)(1,"button",7),t.NdJ("click",function(){const r=t.CHM(n).row,c=t.oxw();return t.KtG(c.reject(r))}),t.TgZ(2,"app-icon"),t._uU(3,"event_busy"),t.qZA()(),t.TgZ(4,"button",8),t.NdJ("click",function(){const r=t.CHM(n).row,c=t.oxw();return t.KtG(c.approve(r))}),t.TgZ(5,"app-icon"),t._uU(6,"event_available"),t.qZA()()()}}function it(s,e){1&s&&t._UZ(0,"mat-progress-bar",9)}const rt=function(){return["asset_name","booked_by_name","user_name","plate_number","status","actions"]},lt=function(){return["Bay No.","Reserved By","Reserved For","Car Plate #","Status"," "]},ct=function(){return["6r","flex","14r","8r","6r","10r"]},pt=function(s,e,n){return{plate_number:s,actions:e,status:n}};class f{constructor(e){this._state=e,this.events=this._state.bookings,this.options=this._state.options,this.loading=this._state.loading,this.reject=n=>this._state.rejectBooking(n),this.approve=n=>this._state.approveBooking(n)}}function mt(s,e){if(1&s){const n=t.EpF();t.TgZ(0,"div",3)(1,"button",4),t.NdJ("click",function(){const r=t.CHM(n).row,c=t.oxw();return t.KtG(c.editSpace(r))}),t.TgZ(2,"app-icon"),t._uU(3,"edit"),t.qZA()(),t.TgZ(4,"button",4),t.NdJ("click",function(){const r=t.CHM(n).row,c=t.oxw();return t.KtG(c.removeSpace(r))}),t.TgZ(5,"app-icon"),t._uU(6,"delete"),t.qZA()()()}}function gt(s,e){1&s&&t._UZ(0,"mat-progress-bar",5)}f.\u0275fac=function(e){return new(e||f)(t.Y36(g))},f.\u0275cmp=t.Xpm({type:f,selectors:[["parking-bookings-list"]],decls:11,vars:22,consts:[[1,"block","min-w-[60rem]",3,"dataSource","columns","display_column","filter","column_size","template"],["plate_template",""],["status_template",""],["action_template",""],["class","absolute bottom-0 inset-x-0",4,"ngIf"],[1,"capitalize","text-white","px-2","py-1","rounded","border","border-gray-200"],[1,"w-full","flex","items-center","justify-end"],["icon","","matTooltip","Reject Parking Reservation",3,"click"],["icon","","matTooltip","Approve Parking Reservation",3,"click"],[1,"absolute","bottom-0","inset-x-0"]],template:function(e,n){if(1&e&&(t._UZ(0,"custom-table",0),t.ALo(1,"async"),t.ALo(2,"async"),t.YNc(3,ot,1,1,"ng-template",null,1,t.W1O),t.YNc(5,st,2,7,"ng-template",null,2,t.W1O),t.YNc(7,at,7,0,"ng-template",null,3,t.W1O),t.YNc(9,it,1,0,"mat-progress-bar",4),t.ALo(10,"async")),2&e){const o=t.MAs(4),i=t.MAs(6),r=t.MAs(8);let c,T;t.ekj("opacity-50",null==(c=t.lcZ(1,9,n.loading))?null:c.includes("bookings")),t.Q6J("dataSource",n.events)("columns",t.DdM(15,rt))("display_column",t.DdM(16,lt))("filter",t.lcZ(2,11,n.options).search)("column_size",t.DdM(17,ct))("template",t.kEZ(18,pt,o,r,i)),t.xp6(9),t.Q6J("ngIf",null==(T=t.lcZ(10,13,n.loading))?null:T.includes("bookings"))}},dependencies:[p.O5,nt.gM,y.pW,U.o,R.C,p.Ov],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;overflow:auto}\n/*# sourceMappingURL=parking-bookings-list.component.ts-angular-inline--130.css.map*/"]});const dt=function(){return["name","map_id","assigned_to","notes","actions"]},ut=function(){return["Bay No.","Map ID","Assigned","Notes"," "]},ft=function(){return["8r","10r","14r","flex","10r"]},ht=function(s){return{actions:s}};class h{constructor(e){this._state=e,this.spaces=this._state.spaces,this.options=this._state.options,this.loading=this._state.loading,this.editSpace=n=>this._state.editSpace(n),this.removeSpace=n=>this._state.removeSpace(n)}}h.\u0275fac=function(e){return new(e||h)(t.Y36(g))},h.\u0275cmp=t.Xpm({type:h,selectors:[["parking-space-list"]],decls:7,vars:20,consts:[[1,"block","min-w-[56rem]",3,"dataSource","columns","display_column","column_size","template","filter"],["action_template",""],["class","absolute bottom-0 inset-x-0",4,"ngIf"],[1,"w-full","flex","items-center","justify-end"],["icon","",3,"click"],[1,"absolute","bottom-0","inset-x-0"]],template:function(e,n){if(1&e&&(t._UZ(0,"custom-table",0),t.ALo(1,"async"),t.ALo(2,"async"),t.YNc(3,mt,7,0,"ng-template",null,1,t.W1O),t.YNc(5,gt,1,0,"mat-progress-bar",2),t.ALo(6,"async")),2&e){const o=t.MAs(4);let i,r;t.ekj("opacity-50",null==(i=t.lcZ(1,9,n.loading))?null:i.includes("spaces")),t.Q6J("dataSource",n.spaces)("columns",t.DdM(15,dt))("display_column",t.DdM(16,ut))("column_size",t.DdM(17,ft))("template",t.VKq(18,ht,o))("filter",t.lcZ(2,11,n.options).search),t.xp6(5),t.Q6J("ngIf",null==(r=t.lcZ(6,13,n.loading))?null:r.includes("spaces"))}},dependencies:[p.O5,y.pW,U.o,R.C,p.Ov],encapsulation:2});var vt=a(8441),_t=a(9396),Zt=a(7371);function kt(s,e){if(1&s&&(t.TgZ(0,"mat-option",7),t._uU(1),t.qZA()),2&s){const n=e.$implicit;t.Q6J("value",n.id),t.xp6(1),t.hij(" ",n.display_name||n.name," ")}}class v extends m.cx{constructor(e,n,o,i){super(),this._state=e,this._org=n,this._route=o,this._router=i,this.zones=[],this.levels=this._state.levels,this.options=this._state.options,this.setDate=r=>this._state.setOptions({date:r}),this.setSearch=r=>this._state.setOptions({search:r}),this.updateZones=r=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:r.join(",")}}),this._state.setOptions({zones:r})}}ngOnInit(){var e=this;return(0,k.Z)(function*(){yield e._org.initialised.pipe((0,Y.P)(n=>n)).toPromise(),e.subscription("route.query",e._route.queryParamMap.subscribe(n=>{if(n.has("zone_ids")){const o=n.get("zone_ids").split(",");if(o.length){const i=e._org.levelWithID(o);if(e.zones=o,!i)return;e._org.building=e._org.buildings.find(r=>r.id===i.parent_id)}}})),e.subscription("levels",e._state.levels.subscribe(n=>{e.zones=e.zones.filter(o=>n.find(i=>i.id===o)),!e.zones.length&&n.length&&e.zones.push(n[0].id),e.updateZones(e.zones)}))})()}}v.\u0275fac=function(e){return new(e||v)(t.Y36(g),t.Y36(O.w7),t.Y36(d.gz),t.Y36(d.F0))},v.\u0275cmp=t.Xpm({type:v,selectors:[["parking-topbar"]],features:[t.qOj],decls:8,vars:4,consts:[[1,"flex","items-center","bg-white","dark:bg-neutral-700","px-2","h-20"],["appearance","outline"],["placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-1","w-0"],[1,"mr-2",3,"modelChange"],[3,"dateChange"],[3,"value"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),t.NdJ("ngModelChange",function(i){return n.updateZones([i]),n.zones=[i]}),t.YNc(3,kt,2,2,"mat-option",3),t.ALo(4,"async"),t.qZA()(),t._UZ(5,"div",4),t.TgZ(6,"searchbar",5),t.NdJ("modelChange",function(i){return n.setSearch(i)}),t.qZA(),t.TgZ(7,"date-options",6),t.NdJ("dateChange",function(i){return n.setDate(i)}),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngModel",n.zones[0]),t.xp6(1),t.Q6J("ngForOf",t.lcZ(4,2,n.levels)))},dependencies:[p.sg,vt.E,_t.U,M.KE,Zt.gD,F.ey,l.JJ,l.On,p.Ov],styles:["button[_ngcontent-%COMP%]{min-width:0;padding:0 .85rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=parking-topbar.component.ts-angular-inline--131.css.map*/"]});var bt=a(4945);function Tt(s,e){1&s&&(t.TgZ(0,"div",6)(1,"p"),t._uU(2,"No parking floors for the currently selected building"),t.qZA()())}const yt=function(){return["/parking","events"]},Ct=function(){return["/parking","spaces"]};class _ extends m.cx{constructor(e,n){super(),this._state=e,this._router=n,this.levels=this._state.levels,this.path=""}ngOnInit(){this._state.startPolling(),this.subscription("router.events",this._router.events.subscribe(n=>{if(n instanceof d.m2){const o=this._router.url?.split("/")||[""];this.path=o[e.length-1].split("?")[0]}}));const e=this._router.url?.split("/")||[""];this.path=e[e.length-1].split("?")[0]}}_.\u0275fac=function(e){return new(e||_)(t.Y36(g),t.Y36(d.F0))},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-parking"]],features:[t.qOj],decls:13,vars:9,consts:[[1,"relative","overflow-hidden","bg-gray-100","dark:bg-neutral-600"],[1,"dark"],["mat-tab-nav-bar",""],["mat-tab-link","","queryParamsHandling","merge",3,"routerLink","active"],[1,"flex-1","h-1/2","w-full","relative","overflow-auto"],["class","absolute inset-0 bg-white/80 dark:bg-white/20 flex flex-col items-center justify-center z-50",4,"ngIf"],[1,"absolute","inset-0","bg-white/80","dark:bg-white/20","flex","flex-col","items-center","justify-center","z-50"]],template:function(e,n){if(1&e&&(t._UZ(0,"sidebar"),t.TgZ(1,"main",0),t._UZ(2,"parking-topbar"),t.TgZ(3,"div",1)(4,"nav",2)(5,"a",3),t._uU(6," Bookings "),t.qZA(),t.TgZ(7,"a",3),t._uU(8," Manage Spaces "),t.qZA()()(),t.TgZ(9,"div",4),t._UZ(10,"router-outlet"),t.qZA(),t.YNc(11,Tt,3,0,"div",5),t.ALo(12,"async"),t.qZA()),2&e){let o;t.xp6(5),t.Q6J("routerLink",t.DdM(7,yt))("active","events"===n.path),t.xp6(2),t.Q6J("routerLink",t.DdM(8,Ct))("active","spaces"===n.path),t.xp6(4),t.Q6J("ngIf",!(null!=(o=t.lcZ(12,5,n.levels))&&o.length))}},dependencies:[p.O5,bt.k,C.BU,C.Nj,d.lC,d.rH,v,p.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n/*# sourceMappingURL=parking.component.ts-angular-inline--132.css.map*/"]});const xt=[{path:"",component:_,children:[{path:"events",component:f},{path:"spaces",component:h},{path:"**",redirectTo:"events"}]},{path:"**",redirectTo:""}];class Z{}Z.\u0275fac=function(e){return new(e||Z)},Z.\u0275mod=t.oAB({type:Z}),Z.\u0275inj=t.cJS({imports:[p.ez,Q.v,l.u5,l.UX,E.W9,C.Nh,y.Cv,d.Bz.forChild(xt)]})}}]);
//# sourceMappingURL=apps_concierge_src_app_parking_parking_module_ts.js.map