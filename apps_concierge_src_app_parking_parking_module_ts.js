"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_parking_parking_module_ts"],{7797:(Mt,A,a)=>{a.r(A),a.d(A,{AppParkingModule:()=>At});var p=a(4666),c=a(2508),_=a(1294),Z=a(5892),g=a(9885),G=a(6850),Q=a(2656),u=a(1670),k=a(8014),m=a(1506),M=a(3619),b=a(3690),S=a(1810),R=a(9377),W=a(3200),U=a(5148),C=a(4505),N=a(7716),O=a(6942),K=a(9151),L=a(9095),I=a(8759),z=a(9128),V=a(823),j=a(5670),w=a(3910),t=a(2560),f=a(1484),T=a(4522),y=a(5074),X=a(1267),$=a(1708),H=a(9697),P=a(5306);function q(n,r){1&n&&(t.TgZ(0,"button",6)(1,"app-icon"),t._uU(2,"close"),t.qZA()())}function tt(n,r){if(1&n&&(t.TgZ(0,"main",7)(1,"label",8),t._uU(2,"Parking Space Name/Bay Number"),t.qZA(),t.TgZ(3,"mat-form-field",9),t._UZ(4,"input",10),t.TgZ(5,"mat-error"),t._uU(6,"A name is required for parking spaces"),t.qZA()(),t.TgZ(7,"label",11),t._uU(8,"Map ID"),t.qZA(),t.TgZ(9,"mat-form-field",9),t._UZ(10,"input",12),t.TgZ(11,"mat-error"),t._uU(12," A map ID is required for parking spaces "),t.qZA()(),t.TgZ(13,"label",13),t._uU(14,"Assigned User"),t.qZA(),t._UZ(15,"a-user-search-field",14),t.TgZ(16,"label",15),t._uU(17,"Notes"),t.qZA(),t.TgZ(18,"mat-form-field",9),t._UZ(19,"textarea",16),t.qZA(),t.TgZ(20,"label",17),t._uU(21,"Map Rotation"),t.qZA(),t.TgZ(22,"mat-form-field",9),t._UZ(23,"textarea",18),t.qZA(),t.TgZ(24,"div",19)(25,"button",20),t._uU(26," Cancel "),t.qZA(),t.TgZ(27,"button",21),t._uU(28,"Save"),t.qZA()()()),2&n){const e=t.oxw();t.Q6J("formGroup",e.form)}}function et(n,r){1&n&&(t.TgZ(0,"main",22),t._UZ(1,"mat-spinner",23),t.TgZ(2,"p"),t._uU(3,"Saving parking space details..."),t.qZA()())}let J=(()=>{class n{constructor(e,o){this._data=e,this._dialog_ref=o,this.event=new t.vpe,this.form=new c.cw({id:new c.NI(""),name:new c.NI("",[c.kI.required]),map_id:new c.NI("",[c.kI.required]),assigned_user:new c.NI(null),assigned_to:new c.NI(""),assigned_name:new c.NI(""),notes:new c.NI(""),map_rotation:new c.NI(0)}),e&&this.form.patchValue(e)}get id(){return this._data?.id||""}postForm(){!this.form.valid||(this.loading=!0,this._dialog_ref.disableClose=!0,this.event.emit({reason:"done",metadata:this.form.value}))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f.WI),t.Y36(f.so))},n.\u0275cmp=t.Xpm({type:n,selectors:[["parking-space-modal"]],outputs:{event:"event"},decls:8,vars:4,consts:[[1,"w-[28rem]"],[1,"flex","items-center","justify-between","bg-secondary","px-2","w-full"],[1,"px-2"],["mat-icon-button","","mat-dialog-close","",4,"ngIf"],["class","p-4 flex flex-col",3,"formGroup",4,"ngIf","ngIfElse"],["load_state",""],["mat-icon-button","","mat-dialog-close",""],[1,"p-4","flex","flex-col",3,"formGroup"],["for","name"],["appearance","outline"],["matInput","","name","name","formControlName","name"],["for","map-id"],["matInput","","name","map-id","formControlName","map_id"],["for","user"],["name","user","formControlName","assigned_user"],["for","notes"],["matInput","","name","notes","formControlName","notes"],["for","map-rotation"],["matInput","","name","map-rotation","formControlName","map_rotation"],[1,"flex","items-center","justify-center","space-x-2"],["mat-button","","mat-dialog-close","",1,"w-32","inverse"],["mat-button","",1,"w-32"],[1,"p-8","flex","flex-col","items-center","justify-center","space-y-2"],["diameter","32"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"header",1)(2,"h2",2),t._uU(3),t.qZA(),t.YNc(4,q,3,0,"button",3),t.qZA(),t.YNc(5,tt,29,1,"main",4),t.qZA(),t.YNc(6,et,4,0,"ng-template",null,5,t.W1O)),2&e){const s=t.MAs(7);t.xp6(3),t.hij("",o.id?"Edit":"New"," Parking Space"),t.xp6(1),t.Q6J("ngIf",!o.loading),t.xp6(1),t.Q6J("ngIf",!o.loading)("ngIfElse",s)}},dependencies:[p.O5,T.lW,y.TO,y.KE,X.Nt,$.Ou,f.ZT,c.Fj,c.JJ,c.JL,c.sg,c.u,H.d,P.o]}),n})(),h=(()=>{class n extends m.KG{constructor(e,o){super(),this._org=e,this._dialog=o,this._poll=new C.X(0),this._options=new C.X({date:Date.now(),search:"",zones:[]}),this._loading=new C.X([]),this.levels=this._org.active_levels.pipe((0,O.U)(s=>s.filter(i=>i.tags.includes("parking")))),this.spaces=(0,N.aj)([this.levels,this._options]).pipe((0,K.h)(([s,i])=>!(!i.zones[0]&&!s[0]?.id)),(0,L.w)(([s,i])=>(this._loading.next([...this._loading.getValue(),"spaces"]),(0,b.rlq)(i.zones[0]||s[0]?.id,"parking-spaces"))),(0,O.U)(s=>s.details instanceof Array?s.details:[]),(0,I.b)(()=>this._loading.next(this._loading.getValue().filter(s=>"spaces"!==s))),(0,z.d)(1)),this.bookings=(0,N.aj)([this._org.active_building,this._options,this._poll]).pipe((0,V.b)(500),(0,L.w)(([s,i])=>(this._loading.next([...this._loading.getValue(),"bookings"]),(0,k.F2)({period_start:(0,S.Z)((0,R.Z)(i.date)),period_end:(0,S.Z)((0,W.Z)(i.date)),type:"parking",zones:i.zones?.length?i.zones.join(","):s?.id}))),(0,I.b)(()=>this._loading.next(this._loading.getValue().filter(s=>"bookings"!==s))),(0,z.d)(1)),this.options=this._options.asObservable(),this.loading=this._loading.asObservable()}setOptions(e){this._options.next({...this._options.getValue(),...e})}startPolling(e=5e3){return this._poll.next(Date.now()),this.interval("poll",()=>this._poll.next(Date.now()),e),()=>this.stopPolling()}stopPolling(){this.clearInterval("poll")}editSpace(e){var o=this;return(0,u.Z)(function*(){const s=o._dialog.open(J,{data:e}),i=yield Promise.race([s.afterClosed().toPromise(),s.componentInstance.event.pipe((0,j.P)(x=>"done"===x.reason))]);if("done"!==i?.reason)return;const l=o._options.getValue().zones[0],d={...i.metadata,id:i.metadata.id||`parking-${l}.${(0,m.Iy)(999999)}`},v=yield o.spaces.pipe((0,w.q)(1)).toPromise();yield(0,b.Ymr)(l,{name:"parking-spaces",details:[...v.filter(x=>x.id!==d.id),d],description:"List of available parking spaces"}).toPromise(),s.close()})()}removeSpace(e){var o=this;return(0,u.Z)(function*(){const s=yield(0,m._5)({title:"Remove Parking Space",content:`Are you sure you wish to remove the parking space "${e.name}"?`,icon:{content:"delete"}},o._dialog);if("done"!==s?.reason)return;s.loading(!0);const i=o._options.getValue().zones[0],l=yield o.spaces.pipe((0,w.q)(1)).toPromise();yield(0,b.Ymr)(i,{name:"parking-spaces",details:l.filter(d=>d.id!==e.id),description:"List of available parking spaces"}).toPromise(),s.close()})()}approveBooking(e){return(0,u.Z)(function*(){"failed"===(yield(0,k.jT)(e.id).toPromise().catch(s=>"failed"))?(0,m.cB)("Error approving in desk booking"):(0,m.t5)(`Approved parking reservation for ${e.user_name} on ${(0,U.Z)(e.date,"MMM Do")}.`)})()}rejectBooking(e){return(0,u.Z)(function*(){"failed"===(yield(0,k.FP)(e.id).toPromise().catch(s=>"failed"))?(0,m.cB)("Error rejecting in desk booking"):(0,m.t5)(`Rejected parking reservation for ${e.user_name} on ${(0,U.Z)(e.date,"MMM Do")}.`)})()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(M.w7),t.LFG(f.uw))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var nt=a(6896),B=a(1110);function ot(n,r){if(1&n&&t._uU(0),2&n){const e=r.row;t.hij(" ",null==e||null==e.extension_data?null:e.extension_data.plate_number," ")}}function st(n,r){if(1&n&&(t.TgZ(0,"span",5),t._uU(1),t.qZA()),2&n){const e=r.data;t.ekj("bg-success","approved"===e)("bg-pending","tentative"===e)("bg-error","cancelled"===e||"declined"===e),t.xp6(1),t.hij(" ",e," ")}}function at(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",6)(1,"button",7),t.NdJ("click",function(){const i=t.CHM(e).row,l=t.oxw();return t.KtG(l.reject(i))}),t.TgZ(2,"app-icon"),t._uU(3,"event_busy"),t.qZA()(),t.TgZ(4,"button",8),t.NdJ("click",function(){const i=t.CHM(e).row,l=t.oxw();return t.KtG(l.approve(i))}),t.TgZ(5,"app-icon"),t._uU(6,"event_available"),t.qZA()()()}}function it(n,r){1&n&&t._UZ(0,"mat-progress-bar",9)}const rt=function(){return["asset_name","booked_by_name","user_name","plate_number","status","actions"]},lt=function(){return["Bay No.","Reserved By","Reserved For","Car Plate #","Status"," "]},ct=function(){return["6r","flex","14r","8r","6r","10r"]},pt=function(n,r,e){return{plate_number:n,actions:r,status:e}};let Y=(()=>{class n{constructor(e){this._state=e,this.events=this._state.bookings,this.options=this._state.options,this.loading=this._state.loading,this.reject=o=>this._state.rejectBooking(o),this.approve=o=>this._state.approveBooking(o)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h))},n.\u0275cmp=t.Xpm({type:n,selectors:[["parking-bookings-list"]],decls:11,vars:22,consts:[[1,"block","min-w-[60rem]",3,"dataSource","columns","display_column","filter","column_size","template"],["plate_template",""],["status_template",""],["action_template",""],["class","absolute bottom-0 inset-x-0",4,"ngIf"],[1,"capitalize","text-white","px-2","py-1","rounded","border","border-gray-200"],[1,"w-full","flex","items-center","justify-end"],["mat-icon-button","","matTooltip","Reject Parking Reservation",3,"click"],["mat-icon-button","","matTooltip","Approve Parking Reservation",3,"click"],[1,"absolute","bottom-0","inset-x-0"]],template:function(e,o){if(1&e&&(t._UZ(0,"custom-table",0),t.ALo(1,"async"),t.ALo(2,"async"),t.YNc(3,ot,1,1,"ng-template",null,1,t.W1O),t.YNc(5,st,2,7,"ng-template",null,2,t.W1O),t.YNc(7,at,7,0,"ng-template",null,3,t.W1O),t.YNc(9,it,1,0,"mat-progress-bar",4),t.ALo(10,"async")),2&e){const s=t.MAs(4),i=t.MAs(6),l=t.MAs(8);let d,v;t.ekj("opacity-50",null==(d=t.lcZ(1,9,o.loading))?null:d.includes("bookings")),t.Q6J("dataSource",o.events)("columns",t.DdM(15,rt))("display_column",t.DdM(16,lt))("filter",t.lcZ(2,11,o.options).search)("column_size",t.DdM(17,ct))("template",t.kEZ(18,pt,s,l,i)),t.xp6(9),t.Q6J("ngIf",null==(v=t.lcZ(10,13,o.loading))?null:v.includes("bookings"))}},dependencies:[p.O5,T.lW,nt.gM,_.pW,P.o,B.C,p.Ov],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;overflow:auto}\n/*# sourceMappingURL=parking-bookings-list.component.ts-angular-inline--110.css.map*/"]}),n})();function mt(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",3)(1,"button",4),t.NdJ("click",function(){const i=t.CHM(e).row,l=t.oxw();return t.KtG(l.editSpace(i))}),t.TgZ(2,"app-icon"),t._uU(3,"edit"),t.qZA()(),t.TgZ(4,"button",4),t.NdJ("click",function(){const i=t.CHM(e).row,l=t.oxw();return t.KtG(l.removeSpace(i))}),t.TgZ(5,"app-icon"),t._uU(6,"delete"),t.qZA()()()}}function gt(n,r){1&n&&t._UZ(0,"mat-progress-bar",5)}const dt=function(){return["name","map_id","assigned_to","notes","actions"]},ut=function(){return["Bay No.","Map ID","Assigned","Notes"," "]},ft=function(){return["8r","10r","14r","flex","10r"]},ht=function(n){return{actions:n}};let D=(()=>{class n{constructor(e){this._state=e,this.spaces=this._state.spaces,this.options=this._state.options,this.loading=this._state.loading,this.editSpace=o=>this._state.editSpace(o),this.removeSpace=o=>this._state.removeSpace(o)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h))},n.\u0275cmp=t.Xpm({type:n,selectors:[["parking-space-list"]],decls:7,vars:20,consts:[[1,"block","min-w-[56rem]",3,"dataSource","columns","display_column","column_size","template","filter"],["action_template",""],["class","absolute bottom-0 inset-x-0",4,"ngIf"],[1,"w-full","flex","items-center","justify-end"],["mat-icon-button","",3,"click"],[1,"absolute","bottom-0","inset-x-0"]],template:function(e,o){if(1&e&&(t._UZ(0,"custom-table",0),t.ALo(1,"async"),t.ALo(2,"async"),t.YNc(3,mt,7,0,"ng-template",null,1,t.W1O),t.YNc(5,gt,1,0,"mat-progress-bar",2),t.ALo(6,"async")),2&e){const s=t.MAs(4);let i,l;t.ekj("opacity-50",null==(i=t.lcZ(1,9,o.loading))?null:i.includes("spaces")),t.Q6J("dataSource",o.spaces)("columns",t.DdM(15,dt))("display_column",t.DdM(16,ut))("column_size",t.DdM(17,ft))("template",t.VKq(18,ht,s))("filter",t.lcZ(2,11,o.options).search),t.xp6(5),t.Q6J("ngIf",null==(l=t.lcZ(6,13,o.loading))?null:l.includes("spaces"))}},dependencies:[p.O5,T.lW,_.pW,P.o,B.C,p.Ov],encapsulation:2}),n})();var vt=a(8441),_t=a(9396),Zt=a(7371),kt=a(207);function bt(n,r){if(1&n&&(t.TgZ(0,"mat-option",6),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.display_name||e.name," ")}}let F=(()=>{class n extends m.KG{constructor(e,o,s,i){super(),this._state=e,this._org=o,this._route=s,this._router=i,this.zones=[],this.levels=this._state.levels,this.options=this._state.options,this.setDate=l=>this._state.setOptions({date:l}),this.setSearch=l=>this._state.setOptions({search:l}),this.updateZones=l=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:l.join(",")}}),this._state.setOptions({zones:l})}}ngOnInit(){var e=this;return(0,u.Z)(function*(){yield e._org.initialised.pipe((0,j.P)(o=>o)).toPromise(),e.subscription("route.query",e._route.queryParamMap.subscribe(o=>{if(o.has("zone_ids")){const s=o.get("zone_ids").split(",");if(s.length){const i=e._org.levelWithID(s);if(e.zones=s,!i)return;e._org.building=e._org.buildings.find(l=>l.id===i.parent_id)}}})),e.subscription("levels",e._state.levels.subscribe(o=>{e.zones=e.zones.filter(s=>o.find(i=>i.id===s)),!e.zones.length&&o.length&&e.zones.push(o[0].id),e.updateZones(e.zones)}))})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h),t.Y36(M.w7),t.Y36(g.gz),t.Y36(g.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["parking-topbar"]],features:[t.qOj],decls:7,vars:4,consts:[["appearance","outline"],["placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-1","w-0"],[1,"mr-2",3,"modelChange"],[3,"dateChange"],[3,"value"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-form-field",0)(1,"mat-select",1),t.NdJ("ngModelChange",function(i){return o.updateZones([i]),o.zones=[i]}),t.YNc(2,bt,2,2,"mat-option",2),t.ALo(3,"async"),t.qZA()(),t._UZ(4,"div",3),t.TgZ(5,"searchbar",4),t.NdJ("modelChange",function(i){return o.setSearch(i)}),t.qZA(),t.TgZ(6,"date-options",5),t.NdJ("dateChange",function(i){return o.setDate(i)}),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngModel",o.zones[0]),t.xp6(1),t.Q6J("ngForOf",t.lcZ(3,2,o.levels)))},dependencies:[p.sg,vt.E,_t.U,y.KE,Zt.gD,kt.ey,c.JJ,c.On,p.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em}button[_ngcontent-%COMP%]{min-width:0;padding:0 .85rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=parking-topbar.component.ts-angular-inline--111.css.map*/"]}),n})();var Ct=a(4945);function Tt(n,r){1&n&&(t.TgZ(0,"div",6)(1,"p"),t._uU(2,"No parking floors for the currently selected building"),t.qZA()())}const yt=function(){return["/parking","events"]},Pt=function(){return["/parking","spaces"]};const xt=[{path:"",component:(()=>{class n extends m.KG{constructor(e,o){super(),this._state=e,this._router=o,this.levels=this._state.levels,this.path=""}ngOnInit(){this._state.startPolling(),this.subscription("router.events",this._router.events.subscribe(o=>{if(o instanceof g.m2){const s=this._router.url?.split("/")||[""];this.path=s[e.length-1].split("?")[0]}}));const e=this._router.url?.split("/")||[""];this.path=e[e.length-1].split("?")[0]}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h),t.Y36(g.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-parking"]],features:[t.qOj],decls:13,vars:9,consts:[[1,"relative","overflow-hidden"],[1,"dark"],["mat-tab-nav-bar",""],["mat-tab-link","","queryParamsHandling","merge",3,"routerLink","active"],[1,"flex-1","h-1/2","w-full","relative","overflow-auto"],["class","absolute inset-0 bg-white/80 flex flex-col items-center justify-center z-50",4,"ngIf"],[1,"absolute","inset-0","bg-white/80","flex","flex-col","items-center","justify-center","z-50"]],template:function(e,o){if(1&e&&(t._UZ(0,"sidebar"),t.TgZ(1,"main",0),t._UZ(2,"parking-topbar"),t.TgZ(3,"div",1)(4,"nav",2)(5,"a",3),t._uU(6," Bookings "),t.qZA(),t.TgZ(7,"a",3),t._uU(8," Manage Spaces "),t.qZA()()(),t.TgZ(9,"div",4),t._UZ(10,"router-outlet"),t.qZA(),t.YNc(11,Tt,3,0,"div",5),t.ALo(12,"async"),t.qZA()),2&e){let s;t.xp6(5),t.Q6J("routerLink",t.DdM(7,yt))("active","events"===o.path),t.xp6(2),t.Q6J("routerLink",t.DdM(8,Pt))("active","spaces"===o.path),t.xp6(4),t.Q6J("ngIf",!(null!=(s=t.lcZ(12,5,o.levels))&&s.length))}},dependencies:[p.O5,Ct.k,Z.BU,Z.Nj,g.lC,g.yS,F,p.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n/*# sourceMappingURL=parking.component.ts-angular-inline--112.css.map*/"]}),n})(),children:[{path:"events",component:Y},{path:"spaces",component:D},{path:"**",redirectTo:"events"}]},{path:"**",redirectTo:""}];let At=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez,Q.v,c.u5,c.UX,G.W9,Z.Nh,_.Cv,g.Bz.forChild(xt)]}),n})()}}]);
//# sourceMappingURL=apps_concierge_src_app_parking_parking_module_ts.js.map