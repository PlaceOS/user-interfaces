"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_parking_parking_module_ts"],{2855:(Nt,U,i)=>{i.r(U),i.d(U,{AppParkingModule:()=>wt});var c=i(6477),p=i(9542),_=i(6297),k=i(2128),g=i(6585),E=i(9816),G=i(3045),d=i(1670),Z=i(5375),m=i(1426),w=i(5912),b=i(308),N=i(1810),W=i(9377),X=i(3200),O=i(3861),x=i(4505),S=i(7716),L=i(6942),V=i(9151),I=i(9095),z=i(8759),j=i(9128),K=i(823),J=i(5670),Y=i(3910),t=i(6839),h=i(7486),C=i(8750),$=i(380),H=i(5312),B=i(7728),q=i(9697),y=i(5306);function tt(n,r){1&n&&(t.TgZ(0,"button",6)(1,"app-icon"),t._uU(2,"close"),t.qZA()())}function et(n,r){if(1&n&&(t.TgZ(0,"main",7)(1,"label",8),t._uU(2,"Parking Space Name/Bay Number"),t.qZA(),t.TgZ(3,"mat-form-field",9),t._UZ(4,"input",10),t.TgZ(5,"mat-error"),t._uU(6,"A name is required for parking spaces"),t.qZA()(),t.TgZ(7,"label",11),t._uU(8,"Map ID"),t.qZA(),t.TgZ(9,"mat-form-field",9),t._UZ(10,"input",12),t.TgZ(11,"mat-error"),t._uU(12," A map ID is required for parking spaces "),t.qZA()(),t.TgZ(13,"label",13),t._uU(14,"Assigned User"),t.qZA(),t._UZ(15,"a-user-search-field",14),t.TgZ(16,"label",15),t._uU(17,"Notes"),t.qZA(),t.TgZ(18,"mat-form-field",9),t._UZ(19,"textarea",16),t.qZA(),t.TgZ(20,"label",17),t._uU(21,"Map Rotation"),t.qZA(),t.TgZ(22,"mat-form-field",9),t._UZ(23,"textarea",18),t.qZA(),t.TgZ(24,"div",19)(25,"button",20),t._uU(26," Cancel "),t.qZA(),t.TgZ(27,"button",21),t._uU(28,"Save"),t.qZA()()()),2&n){const e=t.oxw();t.Q6J("formGroup",e.form)}}function nt(n,r){1&n&&(t.TgZ(0,"main",22),t._UZ(1,"mat-spinner",23),t.TgZ(2,"p"),t._uU(3,"Saving parking space details..."),t.qZA()())}let F=(()=>{class n{get id(){return this._data?.id||""}constructor(e,o){this._data=e,this._dialog_ref=o,this.event=new t.vpe,this.form=new p.cw({id:new p.NI(""),name:new p.NI("",[p.kI.required]),map_id:new p.NI("",[p.kI.required]),assigned_user:new p.NI(null),assigned_to:new p.NI(""),assigned_name:new p.NI(""),notes:new p.NI(""),map_rotation:new p.NI(0)}),e&&this.form.patchValue(e)}postForm(){this.form.valid&&(this.loading=!0,this._dialog_ref.disableClose=!0,this.event.emit({reason:"done",metadata:this.form.value}))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.WI),t.Y36(h.so))},n.\u0275cmp=t.Xpm({type:n,selectors:[["parking-space-modal"]],outputs:{event:"event"},decls:8,vars:4,consts:[[1,"w-[28rem]"],[1,"flex","items-center","justify-between","bg-secondary","px-2","w-full"],[1,"px-2"],["icon","","matRipple","","mat-dialog-close","",4,"ngIf"],["class","p-4 flex flex-col",3,"formGroup",4,"ngIf","ngIfElse"],["load_state",""],["icon","","matRipple","","mat-dialog-close",""],[1,"p-4","flex","flex-col",3,"formGroup"],["for","name"],["appearance","outline"],["matInput","","name","name","formControlName","name"],["for","map-id"],["matInput","","name","map-id","formControlName","map_id"],["for","user"],["name","user","formControlName","assigned_user"],["for","notes"],["matInput","","name","notes","formControlName","notes"],["for","map-rotation"],["matInput","","name","map-rotation","formControlName","map_rotation"],[1,"flex","items-center","justify-center","space-x-2"],["btn","","matRipple","","mat-dialog-close","",1,"w-32","inverse"],["btn","","matRipple","",1,"w-32"],[1,"p-8","flex","flex-col","items-center","justify-center","space-y-2"],["diameter","32"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"header",1)(2,"h2",2),t._uU(3),t.qZA(),t.YNc(4,tt,3,0,"button",3),t.qZA(),t.YNc(5,et,29,1,"main",4),t.qZA(),t.YNc(6,nt,4,0,"ng-template",null,5,t.W1O)),2&e){const s=t.MAs(7);t.xp6(3),t.hij("",o.id?"Edit":"New"," Parking Space"),t.xp6(1),t.Q6J("ngIf",!o.loading),t.xp6(1),t.Q6J("ngIf",!o.loading)("ngIfElse",s)}},dependencies:[c.O5,C.KE,C.TO,$.Nt,H.Ou,h.ZT,B.wG,p.Fj,p.JJ,p.JL,p.sg,p.u,q.d,y.o]}),n})(),f=(()=>{class n extends m.cx{constructor(e,o){super(),this._org=e,this._dialog=o,this._poll=new x.X(0),this._options=new x.X({date:Date.now(),search:"",zones:[]}),this._loading=new x.X([]),this.levels=this._org.active_levels.pipe((0,L.U)(s=>s.filter(a=>a.tags.includes("parking")))),this.spaces=(0,S.aj)([this.levels,this._options]).pipe((0,V.h)(([s,a])=>!(!a.zones[0]&&!s[0]?.id)),(0,I.w)(([s,a])=>(this._loading.next([...this._loading.getValue(),"spaces"]),(0,b.rlq)(a.zones[0]||s[0]?.id,"parking-spaces"))),(0,L.U)(s=>s.details instanceof Array?s.details:[]),(0,z.b)(()=>this._loading.next(this._loading.getValue().filter(s=>"spaces"!==s))),(0,j.d)(1)),this.bookings=(0,S.aj)([this._org.active_building,this._options,this._poll]).pipe((0,K.b)(500),(0,I.w)(([s,a])=>(this._loading.next([...this._loading.getValue(),"bookings"]),(0,Z.F2)({period_start:(0,N.Z)((0,W.Z)(a.date)),period_end:(0,N.Z)((0,X.Z)(a.date)),type:"parking",zones:a.zones?.length?a.zones.join(","):s?.id}))),(0,z.b)(()=>this._loading.next(this._loading.getValue().filter(s=>"bookings"!==s))),(0,j.d)(1)),this.options=this._options.asObservable(),this.loading=this._loading.asObservable()}setOptions(e){this._options.next({...this._options.getValue(),...e})}startPolling(e=5e3){return this._poll.next(Date.now()),this.interval("poll",()=>this._poll.next(Date.now()),e),()=>this.stopPolling()}stopPolling(){this.clearInterval("poll")}editSpace(e){var o=this;return(0,d.Z)(function*(){const s=o._dialog.open(F,{data:e}),a=yield Promise.race([s.afterClosed().toPromise(),s.componentInstance.event.pipe((0,J.P)(M=>"done"===M.reason))]);if("done"!==a?.reason)return;const l=o._options.getValue().zones[0],u={...a.metadata,id:a.metadata.id||`parking-${l}.${(0,m.Iy)(999999)}`},v=yield o.spaces.pipe((0,Y.q)(1)).toPromise();yield(0,b.Ymr)(l,{name:"parking-spaces",details:[...v.filter(M=>M.id!==u.id),u],description:"List of available parking spaces"}).toPromise(),s.close()})()}removeSpace(e){var o=this;return(0,d.Z)(function*(){const s=yield(0,m._5)({title:"Remove Parking Space",content:`Are you sure you wish to remove the parking space "${e.name}"?`,icon:{content:"delete"}},o._dialog);if("done"!==s?.reason)return;s.loading("Removing parking space...");const a=o._options.getValue().zones[0],l=yield o.spaces.pipe((0,Y.q)(1)).toPromise();yield(0,b.Ymr)(a,{name:"parking-spaces",details:l.filter(u=>u.id!==e.id),description:"List of available parking spaces"}).toPromise(),s.close()})()}approveBooking(e){return(0,d.Z)(function*(){"failed"===(yield(0,Z.jT)(e.id).toPromise().catch(s=>"failed"))?(0,m.cB)("Error approving in desk booking"):(0,m.t5)(`Approved parking reservation for ${e.user_name} on ${(0,O.Z)(e.date,"MMM Do")}.`)})()}rejectBooking(e){return(0,d.Z)(function*(){"failed"===(yield(0,Z.FP)(e.id).toPromise().catch(s=>"failed"))?(0,m.cB)("Error rejecting in desk booking"):(0,m.t5)(`Rejected parking reservation for ${e.user_name} on ${(0,O.Z)(e.date,"MMM Do")}.`)})()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w.w7),t.LFG(h.uw))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var ot=i(2423),D=i(1110);function st(n,r){if(1&n&&t._uU(0),2&n){const e=r.row;t.hij(" ",null==e||null==e.extension_data?null:e.extension_data.plate_number," ")}}function it(n,r){if(1&n&&(t.TgZ(0,"span",5),t._uU(1),t.qZA()),2&n){const e=r.data;t.ekj("bg-success","approved"===e)("bg-pending","tentative"===e)("bg-error","cancelled"===e||"declined"===e),t.xp6(1),t.hij(" ",e," ")}}function at(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",6)(1,"button",7),t.NdJ("click",function(){const a=t.CHM(e).row,l=t.oxw();return t.KtG(l.reject(a))}),t.TgZ(2,"app-icon"),t._uU(3,"event_busy"),t.qZA()(),t.TgZ(4,"button",8),t.NdJ("click",function(){const a=t.CHM(e).row,l=t.oxw();return t.KtG(l.approve(a))}),t.TgZ(5,"app-icon"),t._uU(6,"event_available"),t.qZA()()()}}function rt(n,r){1&n&&t._UZ(0,"mat-progress-bar",9)}const lt=function(){return["asset_name","booked_by_name","user_name","plate_number","status","actions"]},pt=function(){return["Bay No.","Reserved By","Reserved For","Car Plate #","Status"," "]},ct=function(){return["6r","flex","14r","8r","6r","10r"]},gt=function(n,r,e){return{plate_number:n,actions:r,status:e}};let P=(()=>{class n{constructor(e){this._state=e,this.events=this._state.bookings,this.options=this._state.options,this.loading=this._state.loading,this.reject=o=>this._state.rejectBooking(o),this.approve=o=>this._state.approveBooking(o)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["parking-bookings-list"]],decls:11,vars:22,consts:[[1,"block","min-w-[60rem]",3,"dataSource","columns","display_column","filter","column_size","template"],["plate_template",""],["status_template",""],["action_template",""],["class","absolute bottom-0 inset-x-0",4,"ngIf"],[1,"capitalize","text-white","px-2","py-1","rounded","border","border-gray-200"],[1,"w-full","flex","items-center","justify-end"],["icon","","matTooltip","Reject Parking Reservation",3,"click"],["icon","","matTooltip","Approve Parking Reservation",3,"click"],[1,"absolute","bottom-0","inset-x-0"]],template:function(e,o){if(1&e&&(t._UZ(0,"custom-table",0),t.ALo(1,"async"),t.ALo(2,"async"),t.YNc(3,st,1,1,"ng-template",null,1,t.W1O),t.YNc(5,it,2,7,"ng-template",null,2,t.W1O),t.YNc(7,at,7,0,"ng-template",null,3,t.W1O),t.YNc(9,rt,1,0,"mat-progress-bar",4),t.ALo(10,"async")),2&e){const s=t.MAs(4),a=t.MAs(6),l=t.MAs(8);let u,v;t.ekj("opacity-50",null==(u=t.lcZ(1,9,o.loading))?null:u.includes("bookings")),t.Q6J("dataSource",o.events)("columns",t.DdM(15,lt))("display_column",t.DdM(16,pt))("filter",t.lcZ(2,11,o.options).search)("column_size",t.DdM(17,ct))("template",t.kEZ(18,gt,s,l,a)),t.xp6(9),t.Q6J("ngIf",null==(v=t.lcZ(10,13,o.loading))?null:v.includes("bookings"))}},dependencies:[c.O5,ot.gM,_.pW,y.o,D.C,c.Ov],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;overflow:auto}\n/*# sourceMappingURL=parking-bookings-list.component.ts-angular-inline--151.css.map*/"]}),n})();function mt(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",3)(1,"button",4),t.NdJ("click",function(){const a=t.CHM(e).row,l=t.oxw();return t.KtG(l.editSpace(a))}),t.TgZ(2,"app-icon"),t._uU(3,"edit"),t.qZA()(),t.TgZ(4,"button",4),t.NdJ("click",function(){const a=t.CHM(e).row,l=t.oxw();return t.KtG(l.removeSpace(a))}),t.TgZ(5,"app-icon"),t._uU(6,"delete"),t.qZA()()()}}function ut(n,r){1&n&&t._UZ(0,"mat-progress-bar",5)}const dt=function(){return["name","map_id","assigned_to","notes","actions"]},ft=function(){return["Bay No.","Map ID","Assigned","Notes"," "]},ht=function(){return["8r","10r","14r","flex","10r"]},vt=function(n){return{actions:n}};let T=(()=>{class n{constructor(e){this._state=e,this.spaces=this._state.spaces,this.options=this._state.options,this.loading=this._state.loading,this.editSpace=o=>this._state.editSpace(o),this.removeSpace=o=>this._state.removeSpace(o)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["parking-space-list"]],decls:7,vars:20,consts:[[1,"block","min-w-[56rem]",3,"dataSource","columns","display_column","column_size","template","filter"],["action_template",""],["class","absolute bottom-0 inset-x-0",4,"ngIf"],[1,"w-full","flex","items-center","justify-end"],["icon","",3,"click"],[1,"absolute","bottom-0","inset-x-0"]],template:function(e,o){if(1&e&&(t._UZ(0,"custom-table",0),t.ALo(1,"async"),t.ALo(2,"async"),t.YNc(3,mt,7,0,"ng-template",null,1,t.W1O),t.YNc(5,ut,1,0,"mat-progress-bar",2),t.ALo(6,"async")),2&e){const s=t.MAs(4);let a,l;t.ekj("opacity-50",null==(a=t.lcZ(1,9,o.loading))?null:a.includes("spaces")),t.Q6J("dataSource",o.spaces)("columns",t.DdM(15,dt))("display_column",t.DdM(16,ft))("column_size",t.DdM(17,ht))("template",t.VKq(18,vt,s))("filter",t.lcZ(2,11,o.options).search),t.xp6(5),t.Q6J("ngIf",null==(l=t.lcZ(6,13,o.loading))?null:l.includes("spaces"))}},dependencies:[c.O5,_.pW,y.o,D.C,c.Ov],encapsulation:2}),n})();var _t=i(8441),kt=i(9396),Zt=i(6508);function bt(n,r){if(1&n&&(t.TgZ(0,"mat-option",7),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.display_name||e.name," ")}}let A=(()=>{class n extends m.cx{constructor(e,o,s,a){super(),this._state=e,this._org=o,this._route=s,this._router=a,this.zones=[],this.levels=this._state.levels,this.options=this._state.options,this.setDate=l=>this._state.setOptions({date:l}),this.setSearch=l=>this._state.setOptions({search:l}),this.updateZones=l=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:l.join(",")}}),this._state.setOptions({zones:l})}}ngOnInit(){var e=this;return(0,d.Z)(function*(){yield e._org.initialised.pipe((0,J.P)(o=>o)).toPromise(),e.subscription("route.query",e._route.queryParamMap.subscribe(o=>{if(o.has("zone_ids")){const s=o.get("zone_ids").split(",");if(s.length){const a=e._org.levelWithID(s);if(e.zones=s,!a)return;e._org.building=e._org.buildings.find(l=>l.id===a.parent_id)}}})),e.subscription("levels",e._state.levels.subscribe(o=>{e.zones=e.zones.filter(s=>o.find(a=>a.id===s)),!e.zones.length&&o.length&&e.zones.push(o[0].id),e.updateZones(e.zones)}))})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f),t.Y36(w.w7),t.Y36(g.gz),t.Y36(g.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["parking-topbar"]],features:[t.qOj],decls:8,vars:4,consts:[[1,"flex","items-center","bg-white","dark:bg-neutral-700","px-2","h-20"],["appearance","outline"],["placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-1","w-0"],[1,"mr-2",3,"modelChange"],[3,"dateChange"],[3,"value"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),t.NdJ("ngModelChange",function(a){return o.updateZones([a]),o.zones=[a]}),t.YNc(3,bt,2,2,"mat-option",3),t.ALo(4,"async"),t.qZA()(),t._UZ(5,"div",4),t.TgZ(6,"searchbar",5),t.NdJ("modelChange",function(a){return o.setSearch(a)}),t.qZA(),t.TgZ(7,"date-options",6),t.NdJ("dateChange",function(a){return o.setDate(a)}),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngModel",o.zones[0]),t.xp6(1),t.Q6J("ngForOf",t.lcZ(4,2,o.levels)))},dependencies:[c.sg,_t.E,kt.U,C.KE,Zt.gD,B.ey,p.JJ,p.On,c.Ov],styles:["button[_ngcontent-%COMP%]{min-width:0;padding:0 .85rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=parking-topbar.component.ts-angular-inline--152.css.map*/"]}),n})();var xt=i(4945);function Ct(n,r){1&n&&(t.TgZ(0,"div",6)(1,"p"),t._uU(2,"No parking floors for the currently selected building"),t.qZA()())}const yt=function(){return["/parking","events"]},Pt=function(){return["/parking","spaces"]};let R=(()=>{class n extends m.cx{constructor(e,o){super(),this._state=e,this._router=o,this.levels=this._state.levels,this.path=""}ngOnInit(){this._state.startPolling(),this.subscription("router.events",this._router.events.subscribe(o=>{if(o instanceof g.m2){const s=this._router.url?.split("/")||[""];this.path=s[e.length-1].split("?")[0]}}));const e=this._router.url?.split("/")||[""];this.path=e[e.length-1].split("?")[0]}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f),t.Y36(g.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-parking"]],features:[t.qOj],decls:13,vars:9,consts:[[1,"relative","overflow-hidden","bg-gray-100","dark:bg-neutral-600"],[1,"dark"],["mat-tab-nav-bar",""],["mat-tab-link","","queryParamsHandling","merge",3,"routerLink","active"],[1,"flex-1","h-1/2","w-full","relative","overflow-auto"],["class","absolute inset-0 bg-white/80 dark:bg-white/20 flex flex-col items-center justify-center z-50",4,"ngIf"],[1,"absolute","inset-0","bg-white/80","dark:bg-white/20","flex","flex-col","items-center","justify-center","z-50"]],template:function(e,o){if(1&e&&(t._UZ(0,"sidebar"),t.TgZ(1,"main",0),t._UZ(2,"parking-topbar"),t.TgZ(3,"div",1)(4,"nav",2)(5,"a",3),t._uU(6," Bookings "),t.qZA(),t.TgZ(7,"a",3),t._uU(8," Manage Spaces "),t.qZA()()(),t.TgZ(9,"div",4),t._UZ(10,"router-outlet"),t.qZA(),t.YNc(11,Ct,3,0,"div",5),t.ALo(12,"async"),t.qZA()),2&e){let s;t.xp6(5),t.Q6J("routerLink",t.DdM(7,yt))("active","events"===o.path),t.xp6(2),t.Q6J("routerLink",t.DdM(8,Pt))("active","spaces"===o.path),t.xp6(4),t.Q6J("ngIf",!(null!=(s=t.lcZ(12,5,o.levels))&&s.length))}},dependencies:[c.O5,xt.k,k.BU,k.Nj,g.lC,g.rH,A,c.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n/*# sourceMappingURL=parking.component.ts-angular-inline--153.css.map*/"]}),n})();var Tt=i(6866),At=i(3320);function Mt(n,r){1&n&&(t.TgZ(0,"div",4)(1,"p"),t._uU(2,"No parking floors for the currently selected building"),t.qZA()())}const Ut=[{path:"new",component:(()=>{class n extends m.cx{constructor(e,o){super(),this._state=e,this._router=o,this.levels=this._state.levels,this.path=""}ngOnInit(){this._state.startPolling(),this.subscription("router.events",this._router.events.subscribe(o=>{if(o instanceof g.m2){const s=this._router.url?.split("/")||[""];this.path=s[e.length-1].split("?")[0]}}));const e=this._router.url?.split("/")||[""];this.path=e[e.length-1].split("?")[0]}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f),t.Y36(g.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-new-parking"]],features:[t.qOj],decls:9,vars:3,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full","relative"],[1,"flex-1","h-1/2","w-full","relative","overflow-auto"],["class","absolute inset-0 bg-white/80 dark:bg-white/20 flex flex-col items-center justify-center z-50",4,"ngIf"],[1,"absolute","inset-0","bg-white/80","dark:bg-white/20","flex","flex-col","items-center","justify-center","z-50"]],template:function(e,o){if(1&e&&(t._UZ(0,"app-topbar"),t.TgZ(1,"div",0),t._UZ(2,"app-sidebar"),t.TgZ(3,"main",1),t._UZ(4,"parking-topbar"),t.TgZ(5,"div",2),t._UZ(6,"router-outlet"),t.qZA(),t.YNc(7,Mt,3,0,"div",3),t.ALo(8,"async"),t.qZA()()),2&e){let s;t.xp6(7),t.Q6J("ngIf",!(null!=(s=t.lcZ(8,1,o.levels))&&s.length))}},dependencies:[c.O5,Tt.O,At.u,g.lC,A,c.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:#fff}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n/*# sourceMappingURL=new-parking.component.ts-angular-inline--154.css.map*/"]}),n})(),children:[{path:"events",component:P},{path:"manage",component:T},{path:"**",redirectTo:"events"}]},{path:"",component:R,children:[{path:"events",component:P},{path:"manage",component:T},{path:"**",redirectTo:"events"}]},{path:"**",redirectTo:""}];let wt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,G.v,p.u5,p.UX,E.W9,k.Nh,_.Cv,g.Bz.forChild(Ut)]}),n})()}}]);
//# sourceMappingURL=apps_concierge_src_app_parking_parking_module_ts.js.map