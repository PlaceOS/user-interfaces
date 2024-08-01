"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_parking_parking_module_ts"],{7876:(pe,R,l)=>{l.r(R),l.d(R,{AppParkingModule:()=>re});var c=l(316),b=l(4456),v=l(6354),d=l(8223),p=l(6842),M=l(3046),N=l(363),m=l(8007),t=l(7404),T=l(1034),x=l(640),g=l(5060),y=l(9434),j=l(8328);const $=n=>({key:"state",name:"In Use",content:n,size:"4.75rem",sortable:!1}),B=()=>({key:"description",name:"Bay Number"}),V=n=>({key:"user_name",name:"Reserved For",content:n}),Y=n=>({key:"booked_by_name",name:"Reserved By",content:n}),z=n=>({key:"plate_number",name:"Plate Number",content:n,size:"10rem",sortable:!1}),D=n=>({key:"status",name:"Status",content:n,size:"9.5rem"}),O=(n,i,e,s,a,o)=>[n,i,e,s,a,o];function J(n,i){if(1&n&&(t.j41(0,"div",11),t.EFF(1),t.k0s()),2&n){const e=t.XpG().row;t.R7$(),t.SpI(" ",e.user_email," ")}}function A(n,i){if(1&n&&(t.j41(0,"div",9)(1,"div"),t.EFF(2),t.k0s(),t.DNE(3,J,2,1,"div",10),t.k0s()),2&n){const e=i.row;t.R7$(2),t.JRh(e.user_name||e.user_email),t.R7$(),t.Y8G("ngIf",e.user_name&&e.user_email)}}function H(n,i){if(1&n&&(t.j41(0,"div",11),t.EFF(1),t.k0s()),2&n){const e=t.XpG().row;t.R7$(),t.SpI(" ",e.booked_by_email," ")}}function Q(n,i){if(1&n&&(t.j41(0,"div",9)(1,"div"),t.EFF(2),t.k0s(),t.DNE(3,H,2,1,"div",10),t.k0s()),2&n){const e=i.row;t.R7$(2),t.JRh(e.booked_by_name||e.booked_by_email),t.R7$(),t.Y8G("ngIf",e.booked_by_name&&e.booked_by_email)}}function W(n,i){if(1&n&&(t.j41(0,"div",15),t.nI1(1,"date"),t.j41(2,"app-icon"),t.EFF(3,"done"),t.k0s()()),2&n){const e=t.XpG().row,s=t.XpG();t.Y8G("matTooltip","Left at "+t.i5U(1,1,e.checked_out_at,s.time_format))}}function Z(n,i){1&n&&(t.j41(0,"div",16)(1,"app-icon"),t.EFF(2,"question_mark"),t.k0s()())}function K(n,i){1&n&&(t.j41(0,"div",17)(1,"app-icon"),t.EFF(2,"done"),t.k0s()())}function q(n,i){if(1&n&&t.DNE(0,W,4,4,"div",12)(1,Z,3,0,"div",13)(2,K,3,0,"div",14),2&n){const e=i.row;t.Y8G("ngIf",!(null!=e&&e.checked_in)&&e.checked_out_at),t.R7$(),t.Y8G("ngIf",!(null!=e&&e.checked_in||e.checked_out_at)),t.R7$(),t.Y8G("ngIf",null==e?null:e.checked_in)}}function tt(n,i){1&n&&(t.j41(0,"span",20),t.EFF(1," N/A "),t.k0s())}function et(n,i){if(1&n&&(t.j41(0,"div",18),t.EFF(1),t.DNE(2,tt,2,0,"span",19),t.k0s()),2&n){const e=i.row;t.R7$(),t.SpI(" ",null==e||null==e.extension_data?null:e.extension_data.plate_number," "),t.R7$(),t.Y8G("ngIf",!(null!=e&&null!=e.extension_data&&e.extension_data.plate_number))}}function nt(n,i){if(1&n){const e=t.RV6();t.j41(0,"div",21)(1,"button",22)(2,"div",23)(3,"div",24),t.EFF(4),t.k0s(),t.j41(5,"app-icon",25),t.EFF(6,"arrow_drop_down"),t.k0s()()()(),t.j41(7,"mat-menu",null,5)(9,"button",26),t.bIt("click",function(){const a=t.eBV(e).row,o=t.XpG();return t.Njj(o.approve(a))}),t.j41(10,"div",27)(11,"app-icon",25),t.EFF(12,"event_available"),t.k0s(),t.j41(13,"div",28),t.EFF(14,"Approve Reservation"),t.k0s()()(),t.j41(15,"button",26),t.bIt("click",function(){const a=t.eBV(e).row,o=t.XpG();return t.Njj(o.reject(a))}),t.j41(16,"div",27)(17,"app-icon",25),t.EFF(18,"event_busy"),t.k0s(),t.j41(19,"div",28),t.EFF(20,"Decline Reservation"),t.k0s()()()()}if(2&n){const e=i.row,s=t.sdS(8);t.R7$(),t.AVh("text-success-content","approved"===(null==e?null:e.status))("bg-success","approved"===(null==e?null:e.status))("text-error-content","declined"===(null==e?null:e.status))("bg-error","declined"===(null==e?null:e.status))("text-neutral-content","ended"===(null==e?null:e.status))("bg-neutral","ended"===(null==e?null:e.status))("opacity-30","ended"===(null==e?null:e.status))("text-warning-content","tentative"===(null==e?null:e.status))("bg-warning","tentative"===(null==e?null:e.status)),t.Y8G("matMenuTriggerFor",s)("disabled","ended"===(null==e?null:e.status)),t.R7$(3),t.SpI(" ","ended"===(null==e?null:e.status)?"Ended":"approved"===(null==e?null:e.status)?"Approved":"declined"===(null==e?null:e.status)?"Declined":"Pending"," ")}}let P=(()=>{class n{constructor(e){this._state=e,this.events=this._state.bookings,this.options=this._state.options,this.loading=this._state.loading,this.reject=s=>this._state.rejectBooking(s),this.approve=s=>this._state.approveBooking(s)}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(m.X))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["parking-bookings-list"]],decls:15,vars:28,consts:[["person_template",""],["host_template",""],["state_template",""],["plate_template",""],["status_template",""],["menu","matMenu"],[1,"sticky","left-0","w-full"],[1,"min-w-[76rem]","block","text-sm",3,"data","columns","filter","sortable"],[1,"w-full","h-20"],[1,"px-4","py-2"],["class","opacity-30 text-xs",4,"ngIf"],[1,"opacity-30","text-xs"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-base-300 text-base-100 mx-auto","matTooltipPosition","right",3,"matTooltip",4,"ngIf"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-warning text-warning-content mx-auto","matTooltip","Has not arrived at space","matTooltipPosition","right",4,"ngIf"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-error text-error-content mx-auto","matTooltip","Arrived at space","matTooltipPosition","right",4,"ngIf"],["matTooltipPosition","right",1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-base-300","text-base-100","mx-auto",3,"matTooltip"],["matTooltip","Has not arrived at space","matTooltipPosition","right",1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-warning","text-warning-content","mx-auto"],["matTooltip","Arrived at space","matTooltipPosition","right",1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-error","text-error-content","mx-auto"],[1,"p-4","font-mono","text-sm"],["class","opacity-30",4,"ngIf"],[1,"opacity-30"],[1,"px-4"],["matRipple","",1,"rounded-3xl","border-none","w-[7.5rem]","h-10",3,"matMenuTriggerFor","disabled"],[1,"flex","items-center","pl-4","pr-2","space-x-2"],[1,"flex-1","text-left"],[1,"text-2xl"],["mat-menu-item","",3,"click"],[1,"flex","items-center","space-x-2"],[1,"pr-2"]],template:function(s,a){if(1&s&&(t.nrm(0,"mat-progress-bar",6),t.nI1(1,"async"),t.nrm(2,"simple-table",7),t.nI1(3,"async"),t.DNE(4,A,4,2,"ng-template",null,0,t.C5r)(6,Q,4,2,"ng-template",null,1,t.C5r)(8,q,3,3,"ng-template",null,2,t.C5r)(10,et,3,2,"ng-template",null,3,t.C5r)(12,nt,21,21,"ng-template",null,4,t.C5r),t.nrm(14,"div",8)),2&s){let o,r;const u=t.sdS(5),f=t.sdS(7),h=t.sdS(9),k=t.sdS(11),ce=t.sdS(13);t.AVh("opacity-0",!(null!=(o=t.bMT(1,6,a.loading))&&o.includes("bookings"))),t.R7$(2),t.Y8G("data",a.events)("columns",t.l4e(21,O,t.eq3(10,$,h),t.lJ4(12,B),t.eq3(13,V,u),t.eq3(15,Y,f),t.eq3(17,z,k),t.eq3(19,D,ce)))("filter",null==(r=t.bMT(3,8,a.options))?null:r.search)("sortable",!0)}},dependencies:[c.bT,T.kk,T.fb,T.Cp,x.oV,v.HM,g.r6,y.R,j.O,c.Jj,c.vh]})}return n})();var _=l(2333),st=l(2175),at=l(2352);const ot=n=>({key:"name",name:"Parking Bay",content:n}),it=n=>({key:"assigned_to",name:"Assigned",content:n}),lt=()=>({key:"notes",name:"Notes"}),rt=n=>({key:"status",name:"Status",content:n,sortable:!1,size:"4.5rem"}),ct=n=>({key:"actions",name:" ",content:n,sortable:!1,size:"6.5rem"}),pt=(n,i,e,s,a)=>[n,i,e,s,a];function ut(n,i){if(1&n&&(t.j41(0,"div",7)(1,"app-icon",8),t.EFF(2),t.k0s()()),2&n){const e=i.row,s=t.XpG();t.AVh("!bg-success",null==s.space_status[e.id]?null:s.space_status[e.id].includes("free"))("!text-success-content",null==s.space_status[e.id]?null:s.space_status[e.id].includes("free"))("!bg-error",null==s.space_status[e.id]?null:s.space_status[e.id].includes("busy"))("!text-error-content",null==s.space_status[e.id]?null:s.space_status[e.id].includes("busy")),t.Y8G("matTooltip",s.statusTooltip(s.space_status[e.id])),t.R7$(2),t.SpI(" ",null!=s.space_status[e.id]&&s.space_status[e.id].includes("assigned")?"person":null!=s.space_status[e.id]&&s.space_status[e.id].includes("reuse")?"alert":"question_mark"," ")}}function mt(n,i){if(1&n){const e=t.RV6();t.j41(0,"button",9),t.bIt("click",function(){const a=t.eBV(e).row,o=t.XpG();return t.Njj(o.copyToClipboard(a.id))}),t.j41(1,"div",10),t.EFF(2),t.k0s(),t.j41(3,"div",11),t.EFF(4),t.k0s()()}if(2&n){const e=i.row,s=i.data;t.R7$(2),t.JRh(s),t.R7$(2),t.SpI(" ",e.id," ")}}function _t(n,i){1&n&&(t.j41(0,"div",14),t.EFF(1,"No Assigned User"),t.k0s())}function dt(n,i){if(1&n&&(t.j41(0,"div",11),t.EFF(1),t.k0s()),2&n){const e=t.XpG(2).data;t.R7$(),t.SpI(" ",e," ")}}function gt(n,i){if(1&n){const e=t.RV6();t.j41(0,"button",9),t.bIt("click",function(){t.eBV(e);const a=t.XpG().data,o=t.XpG();return t.Njj(o.copyToClipboard(a,"assigned"))}),t.j41(1,"div",10),t.EFF(2),t.k0s(),t.DNE(3,dt,2,1,"div",15),t.k0s()}if(2&n){const e=t.XpG(),s=e.row,a=e.data;t.R7$(2),t.JRh(s.assigned_name||a),t.R7$(),t.Y8G("ngIf",s.assigned_name)}}function ft(n,i){if(1&n&&t.DNE(0,_t,2,0,"div",12)(1,gt,4,2,"button",13),2&n){const e=i.data;t.Y8G("ngIf",!e),t.R7$(),t.Y8G("ngIf",e)}}function ht(n,i){if(1&n){const e=t.RV6();t.j41(0,"div",16)(1,"button",17),t.bIt("click",function(){const a=t.eBV(e).row,o=t.XpG();return t.Njj(o.editSpace(a))}),t.j41(2,"app-icon"),t.EFF(3,"edit"),t.k0s()(),t.j41(4,"button",18),t.bIt("click",function(){const a=t.eBV(e).row,o=t.XpG();return t.Njj(o.removeSpace(a))}),t.j41(5,"app-icon"),t.EFF(6,"delete"),t.k0s()()()}}let F=(()=>{class n extends _.Tv{constructor(e,s){super(),this._state=e,this._clipboard=s,this.spaces=this._state.spaces,this.options=this._state.options,this.loading=this._state.loading,this.bookings=this._state.bookings,this.space_status={},this.editSpace=a=>this._state.editSpace(a),this.removeSpace=a=>this._state.removeSpace(a)}ngOnInit(){this.subscription("bookings",(0,st.zV)([this.spaces,this.bookings]).subscribe(([e,s])=>this._updateStatusList(e,s)))}copyToClipboard(e,s){this._clipboard.copy(e)&&(0,_.VX)(s?"Assigned user email copied to clipboard.":"Parking Bay ID copied to clipboard.")}statusTooltip(e){switch(e){case"assigned_free":return"Space is assigned to a user but available for use";case"assigned_busy":case"reuse_busy":return"Space is assigned to a user and in use";case"busy":return"Space is unassigned and in use";case"free":return"Space is unassigned and available for use"}return"Space is unassigned and available for use"}_updateStatusList(e,s){for(const a of e){const o=s.find(r=>r.asset_id===a.id&&"declined"!==r.status&&"cancelled"!==r.status);this.space_status[a.id]=a.assigned_to&&!o?"assigned_free":a.assigned_to&&o&&o.user_email===a.assigned_to?"assigned_busy":a.assigned_to&&o&&o.user_email!==a.assigned_to?"reuse_busy":!a.assigned_to&&o?"busy":"free"}}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(m.X),t.rXU(at.B0))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["parking-space-list"]],features:[t.Vt3],decls:13,vars:25,consts:[["status_template",""],["name_template",""],["assigned_template",""],["action_template",""],[1,"w-full"],[1,"min-w-[52rem]","block","text-sm",3,"data","columns","filter","sortable"],[1,"w-full","h-20"],["matTooltipPosition","left",1,"flex","items-center","justify-center","h-8","w-8","rounded","bg-warning","text-warning-content","mx-auto",3,"matTooltip"],[1,"text-2xl"],[1,"px-4","py-2","text-left","leading-tight",3,"click"],[1,""],[1,"text-[0.625rem]","opacity-30","font-mono"],["class","p-4 opacity-30",4,"ngIf"],["class","px-4 py-2 text-left leading-tight",3,"click",4,"ngIf"],[1,"p-4","opacity-30"],["class","text-[0.625rem] opacity-30 font-mono",4,"ngIf"],[1,"flex","items-center","space-x-2","mx-auto"],["icon","","matRipple","","matTooltip","Edit Parking Space",3,"click"],["icon","","matRipple","","matTooltip","Remove Parking Space",1,"text-error",3,"click"]],template:function(s,a){if(1&s&&(t.nrm(0,"mat-progress-bar",4),t.nI1(1,"async"),t.nrm(2,"simple-table",5),t.nI1(3,"async"),t.DNE(4,ut,3,10,"ng-template",null,0,t.C5r)(6,mt,5,2,"ng-template",null,1,t.C5r)(8,ft,2,2,"ng-template",null,2,t.C5r)(10,ht,7,0,"ng-template",null,3,t.C5r),t.nrm(12,"div",6)),2&s){let o,r;const u=t.sdS(5),f=t.sdS(7),h=t.sdS(9),k=t.sdS(11);t.AVh("opacity-0",!(null!=(o=t.bMT(1,6,a.loading))&&o.includes("spaces"))),t.R7$(2),t.Y8G("data",a.spaces)("columns",t.s1E(19,pt,t.eq3(10,ot,f),t.eq3(12,it,h),t.lJ4(14,lt),t.eq3(15,rt,u),t.eq3(17,ct,k)))("filter",null==(r=t.bMT(3,8,a.options))?null:r.search)("sortable",!0)}},dependencies:[c.bT,x.oV,v.HM,g.r6,y.R,j.O,c.Jj],encapsulation:2})}return n})();l(4836);var S=l(9204),E=l(7871),G=l(2185),bt=l(4584),vt=l(2236),xt=l(4950),yt=l(5175),Tt=l(6062);function jt(n,i){if(1&n){const e=t.RV6();t.j41(0,"button",14),t.nI1(1,"async"),t.bIt("click",function(){t.eBV(e);const a=t.XpG();return t.Njj(a.newParkingSpace())}),t.j41(2,"div",15),t.EFF(3,"New Space"),t.k0s(),t.j41(4,"app-icon"),t.EFF(5,"add"),t.k0s()()}if(2&n){let e;const s=t.XpG();t.Y8G("disabled",!(null!=(e=t.bMT(1,1,s.options))&&null!=e.zones&&e.zones.length))}}function Pt(n,i){if(1&n){const e=t.RV6();t.j41(0,"button",16),t.bIt("click",function(){t.eBV(e);const a=t.XpG();return t.Njj(a.newParkingUser())}),t.j41(1,"div",15),t.EFF(2,"New User"),t.k0s(),t.j41(3,"app-icon"),t.EFF(4,"add"),t.k0s()()}}function Ft(n,i){if(1&n){const e=t.RV6();t.j41(0,"button",17),t.bIt("click",function(){t.eBV(e);const a=t.XpG();return t.Njj(a.newReservation())}),t.j41(1,"div",15),t.EFF(2,"New Reservation"),t.k0s(),t.j41(3,"app-icon"),t.EFF(4,"add"),t.k0s()()}}function Ct(n,i){if(1&n&&(t.j41(0,"div",21),t.EFF(1),t.nI1(2,"building"),t.j41(3,"span",22),t.EFF(4," - "),t.k0s()()),2&n){let e;const s=t.XpG().$implicit;t.R7$(),t.SpI(" ",null==(e=t.bMT(2,1,s.parent_id))?null:e.display_name," ")}}function wt(n,i){if(1&n&&(t.j41(0,"mat-option",18)(1,"div",19),t.DNE(2,Ct,5,3,"div",20),t.j41(3,"div"),t.EFF(4),t.k0s()()()),2&n){const e=i.$implicit,s=t.XpG();t.Y8G("value",e.id),t.R7$(2),t.Y8G("ngIf",s.use_region),t.R7$(2),t.JRh(e.display_name||e.name)}}function It(n,i){if(1&n){const e=t.RV6();t.j41(0,"date-options",23),t.bIt("dateChange",function(a){t.eBV(e);const o=t.XpG();return t.Njj(o.setDate(a))}),t.k0s()}}let C=(()=>{class n extends _.Tv{get use_region(){return!!this._settings.get("app.use_region")}constructor(e,s,a,o,r){super(),this._state=e,this._org=s,this._route=a,this._router=o,this._settings=r,this.path="",this.zones=[],this.levels=this._state.levels,this.options=this._state.options,this.setDate=u=>this._state.setOptions({date:u}),this.setSearch=u=>this._state.setOptions({search:u}),this.updateZones=u=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:u.join(",")}}),this._state.setOptions({zones:u})}}ngOnInit(){var e=this;return(0,S.A)(function*(){yield e._org.initialised.pipe((0,E.$)(s=>s)).toPromise(),e.subscription("route.query",e._route.queryParamMap.subscribe(s=>{if(s.has("zone_ids")){const a=s.get("zone_ids").split(",");if(a.length){const o=e._org.levelWithID(a);if(e.zones=a,!o)return;e._org.building=e._org.buildings.find(r=>r.id===o.parent_id),e._state.setOptions({zones:a})}}})),e.subscription("levels",e._state.levels.subscribe(s=>{e.use_region||(e.zones=e.zones.filter(a=>s.find(o=>o.id===a)),!e.zones.length&&s.length&&e.zones.push(s[0].id),e.updateZones(e.zones))})),e.subscription("router.events",e._router.events.subscribe(s=>{s instanceof p.wF&&e._updatePath()})),e._updatePath()})()}newParkingSpace(){this._state.editSpace()}newParkingUser(){this._state.editUser()}newReservation(){this._state.editReservation()}_updatePath(){this.timeout("update_path",()=>{const e=this._router.url?.split("/")||[""];this.path=e[e.length-1].split("?")[0]},50)}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(m.X),t.rXU(G.yb),t.rXU(p.nX),t.rXU(p.Ix),t.rXU(_.h$))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["parking-topbar"]],features:[t.Vt3],decls:18,vars:15,consts:[[1,"flex","items-center","w-full","py-4","px-8","space-x-2"],[1,"text-2xl","font-medium"],[1,"flex-1","w-px"],[1,"mr-2",3,"modelChange","model"],[3,"matTooltip"],["btn","","matRipple","","class","space-x-2 w-40",3,"disabled","click",4,"ngIf"],["btn","","matRipple","","class","space-x-2 w-40",3,"click",4,"ngIf"],["btn","","matRipple","","class","space-x-2 w-48",3,"click",4,"ngIf"],[1,"flex","items-center","bg-base-100","px-8","mb-2","h-14"],["appearance","outline",1,"w-56","no-subscript"],["placeholder","All Levels","multiple","",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-1","w-0"],[3,"dateChange",4,"ngIf"],["btn","","matRipple","",1,"space-x-2","w-40",3,"click","disabled"],[1,"pl-2"],["btn","","matRipple","",1,"space-x-2","w-40",3,"click"],["btn","","matRipple","",1,"space-x-2","w-48",3,"click"],[3,"value"],[1,"flex","flex-col-reverse"],["class","text-xs opacity-30",4,"ngIf"],[1,"text-xs","opacity-30"],[1,"opacity-0"],[3,"dateChange"]],template:function(s,a){if(1&s&&(t.j41(0,"div",0)(1,"h2",1),t.EFF(2),t.k0s(),t.nrm(3,"div",2),t.j41(4,"searchbar",3),t.nI1(5,"async"),t.bIt("modelChange",function(r){return a.setSearch(r)}),t.k0s(),t.j41(6,"div",4),t.nI1(7,"async"),t.DNE(8,jt,6,3,"button",5),t.k0s(),t.DNE(9,Pt,5,0,"button",6)(10,Ft,5,0,"button",7),t.k0s(),t.j41(11,"div",8)(12,"mat-form-field",9)(13,"mat-select",10),t.mxI("ngModelChange",function(r){return t.DH7(a.zones,r)||(a.zones=r),r}),t.bIt("ngModelChange",function(r){return a.updateZones(r)}),t.DNE(14,wt,5,3,"mat-option",11),t.nI1(15,"async"),t.k0s()(),t.nrm(16,"div",12),t.DNE(17,It,1,0,"date-options",13),t.k0s()),2&s){let o,r;t.R7$(2),t.SpI(" ","events"!==a.path?"Parking Management":"Parking Reservations"," "),t.R7$(2),t.Y8G("model",null==(o=t.bMT(5,9,a.options))?null:o.search),t.R7$(2),t.Y8G("matTooltip",null!=(r=t.bMT(7,11,a.options))&&null!=r.zones&&r.zones.length?"":"Select a level to add a space"),t.R7$(2),t.Y8G("ngIf","manage"===a.path),t.R7$(),t.Y8G("ngIf","users"===a.path),t.R7$(),t.Y8G("ngIf","events"===a.path),t.R7$(3),t.R50("ngModel",a.zones),t.R7$(),t.Y8G("ngForOf",t.bMT(15,13,a.levels)),t.R7$(3),t.Y8G("ngIf","events"===a.path||"map"===a.path)}},dependencies:[c.Sq,c.bT,bt.o,vt.x,xt.rl,yt.VO,g.wT,x.oV,g.r6,b.BC,b.vS,y.R,c.Jj,Tt.b],styles:["button[_ngcontent-%COMP%]{min-width:0;padding:0 .85rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n\n/*# sourceMappingURL=parking-topbar.component.ts-angular-inline--162.css.map*/"]})}return n})();var Rt=l(4605);const St=()=>["/parking","events"],Et=()=>["/parking","spaces"];function Gt(n,i){1&n&&(t.j41(0,"div",6),t.nrm(1,"div",7),t.j41(2,"p"),t.EFF(3,"No parking floors for the currently selected building"),t.k0s()())}let U=(()=>{class n extends _.Tv{constructor(e,s){super(),this._state=e,this._router=s,this.levels=this._state.levels,this.path=""}ngOnInit(){this._state.startPolling(),this.subscription("router.events",this._router.events.subscribe(s=>{if(s instanceof p.wF){const a=this._router.url?.split("/")||[""];this.path=a[e.length-1].split("?")[0]}}));const e=this._router.url?.split("/")||[""];this.path=e[e.length-1].split("?")[0]}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(m.X),t.rXU(p.Ix))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-parking"]],features:[t.Vt3],decls:13,vars:9,consts:[[1,"relative","overflow-hidden","bg-base-100"],[1,"dark"],["mat-tab-nav-bar",""],["mat-tab-link","","queryParamsHandling","merge",3,"routerLink","active"],[1,"flex-1","h-1/2","w-full","relative","overflow-auto","px-4"],["class","absolute inset-0 flex flex-col items-center justify-center z-50",4,"ngIf"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center","z-50"],[1,"absolute","inset-0","bg-base-100","opacity-50","z-0"]],template:function(s,a){if(1&s&&(t.nrm(0,"sidebar"),t.j41(1,"main",0),t.nrm(2,"parking-topbar"),t.j41(3,"div",1)(4,"nav",2)(5,"a",3),t.EFF(6," Bookings "),t.k0s(),t.j41(7,"a",3),t.EFF(8," Manage Spaces "),t.k0s()()(),t.j41(9,"div",4),t.nrm(10,"router-outlet"),t.k0s(),t.DNE(11,Gt,4,0,"div",5),t.nI1(12,"async"),t.k0s()),2&s){let o;t.R7$(5),t.Y8G("routerLink",t.lJ4(7,St))("active","events"===a.path),t.R7$(2),t.Y8G("routerLink",t.lJ4(8,Et))("active","spaces"===a.path),t.R7$(4),t.Y8G("ngIf",!(null!=(o=t.bMT(12,5,a.levels))&&o.length))}},dependencies:[c.bT,Rt.k,d.Bu,d.Ql,p.n3,p.Wk,C,c.Jj],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n\n/*# sourceMappingURL=parking.component.ts-angular-inline--163.css.map*/"]})}return n})();var Ut=l(5189),Lt=l(6843);const Xt=()=>["/book","parking","new","manage"],Mt=()=>["/book","parking","new","manage","users"],Nt=()=>["/book","parking","new","manage","map"];function $t(n,i){if(1&n&&(t.j41(0,"div",7)(1,"nav",8)(2,"a",9),t.EFF(3," Spaces "),t.k0s(),t.j41(4,"a",9),t.EFF(5," Users "),t.k0s(),t.j41(6,"a",9),t.EFF(7," Map "),t.k0s()(),t.nrm(8,"mat-tab-nav-panel",null,0),t.k0s()),2&n){const e=t.sdS(9),s=t.XpG();t.R7$(),t.Y8G("tabPanel",e),t.R7$(),t.Y8G("routerLink",t.lJ4(7,Xt))("active","manage"===s.path),t.R7$(2),t.Y8G("routerLink",t.lJ4(8,Mt))("active","users"===s.path),t.R7$(2),t.Y8G("routerLink",t.lJ4(9,Nt))("active","map"===s.path)}}function Bt(n,i){1&n&&(t.j41(0,"div",10),t.nrm(1,"div",11),t.j41(2,"p",12),t.EFF(3," No parking floors for the currently selected building "),t.k0s()())}let L=(()=>{class n extends _.Tv{constructor(e,s){super(),this._state=e,this._router=s,this.levels=this._state.levels,this.path=""}ngOnInit(){this._state.startPolling(),this.subscription("router.events",this._router.events.subscribe(e=>{e instanceof p.wF&&this._updatePath()})),this._updatePath()}_updatePath(){this.timeout("update_path",()=>{const e=this._router.url?.split("/")||[""];this.path=e[e.length-1].split("?")[0]},50)}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(m.X),t.rXU(p.Ix))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-new-parking"]],features:[t.Vt3],decls:11,vars:4,consts:[["tabPanel",""],[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full","relative"],["class","px-8 pb-2",4,"ngIf"],[1,"relative","flex-1","h-1/2","w-full","overflow-auto","px-8"],[1,"w-full","h-full","overflow-auto"],["class","absolute inset-0 flex flex-col items-center justify-center z-50",4,"ngIf"],[1,"px-8","pb-2"],["mat-tab-nav-bar","",3,"tabPanel"],["mat-tab-link","",3,"routerLink","active"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center","z-50"],[1,"absolute","inset-0","bg-base-100","opacity-80","z-0"],[1,"z-10","opacity-60"]],template:function(s,a){if(1&s&&(t.nrm(0,"app-topbar"),t.j41(1,"div",1),t.nrm(2,"app-sidebar"),t.j41(3,"main",2),t.nrm(4,"parking-topbar"),t.DNE(5,$t,10,10,"div",3),t.j41(6,"div",4)(7,"div",5),t.nrm(8,"router-outlet"),t.k0s()(),t.DNE(9,Bt,4,0,"div",6),t.nI1(10,"async"),t.k0s()()),2&s){let o;t.R7$(5),t.Y8G("ngIf","events"!==a.path),t.R7$(4),t.Y8G("ngIf",!(null!=(o=t.bMT(10,2,a.levels))&&o.length))}},dependencies:[c.bT,Ut.S,Lt.c,d.Bu,d.hQ,d.Ql,p.n3,p.Wk,C,c.Jj],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n\n/*# sourceMappingURL=new-parking.component.ts-angular-inline--164.css.map*/"]})}return n})();var Vt=l(521);const Yt=n=>({key:"name",name:"User",content:n}),zt=()=>({key:"car_color",name:"Car Colour"}),Dt=n=>({key:"plate_number",name:"Plate Number",content:n}),Ot=()=>({key:"phone",name:"Phone"}),Jt=()=>({key:"notes",name:"Notes"}),At=n=>({key:"deny",name:"Deny",size:"4.5rem",content:n}),Ht=n=>({key:"actions",name:" ",content:n,sortable:!1,size:"6.5rem"}),Qt=(n,i,e,s,a,o,r)=>[n,i,e,s,a,o,r];function Wt(n,i){if(1&n){const e=t.RV6();t.j41(0,"button",7),t.bIt("click",function(){const a=t.eBV(e).row,o=t.XpG();return t.Njj(o.copyToClipboard(a.id))}),t.j41(1,"div",8),t.EFF(2),t.k0s(),t.j41(3,"div",9),t.EFF(4),t.k0s()()}if(2&n){const e=i.row,s=i.data;t.R7$(2),t.JRh(s),t.R7$(2),t.SpI(" ",e.email," ")}}function Zt(n,i){1&n&&(t.j41(0,"div",11)(1,"app-icon"),t.EFF(2,"close"),t.k0s()())}function Kt(n,i){1&n&&t.DNE(0,Zt,3,0,"div",10),2&n&&t.Y8G("ngIf",i.data)}function qt(n,i){1&n&&(t.j41(0,"span",14),t.EFF(1,"N/A"),t.k0s())}function te(n,i){if(1&n&&(t.j41(0,"div",12),t.EFF(1),t.DNE(2,qt,2,0,"span",13),t.k0s()),2&n){const e=i.data;t.R7$(),t.SpI(" ",e," "),t.R7$(),t.Y8G("ngIf",!e)}}function ee(n,i){if(1&n){const e=t.RV6();t.j41(0,"div",15)(1,"button",16),t.bIt("click",function(){const a=t.eBV(e).row,o=t.XpG();return t.Njj(o.editUser(a))}),t.j41(2,"app-icon"),t.EFF(3,"edit"),t.k0s()(),t.j41(4,"button",17),t.bIt("click",function(){const a=t.eBV(e).row,o=t.XpG();return t.Njj(o.removeUser(a))}),t.j41(5,"app-icon"),t.EFF(6,"delete"),t.k0s()()()}}let w=(()=>{class n{constructor(e){this._state=e,this.options=this._state.options,this.loading=this._state.loading,this.new_items=new Vt.t([]),this.user_list=this._state.users,this.editUser=s=>this._state.editUser(s),this.removeUser=s=>this._state.removeUser(s)}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(m.X))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["parking-users-list"]],decls:13,vars:29,consts:[["name_template",""],["denied_template",""],["plate_template",""],["action_template",""],[1,"w-full"],[1,"min-w-[68rem]","block","text-sm",3,"data","columns","filter","sortable"],[1,"w-full","h-20"],[1,"px-4","py-2","text-left","leading-tight",3,"click"],[1,""],[1,"text-[0.625rem]","opacity-30","font-mono"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-error text-error-content mx-auto",4,"ngIf"],[1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-error","text-error-content","mx-auto"],[1,"p-4","font-mono","text-sm"],["class","opacity-30",4,"ngIf"],[1,"opacity-30"],[1,"flex","items-center","space-x-2","mx-auto"],["icon","","matRipple","","matTooltip","Edit User",3,"click"],["icon","","matTooltip","Remove User",1,"text-error",3,"click"]],template:function(s,a){if(1&s&&(t.nrm(0,"mat-progress-bar",4),t.nI1(1,"async"),t.nrm(2,"simple-table",5),t.nI1(3,"async"),t.DNE(4,Wt,5,2,"ng-template",null,0,t.C5r)(6,Kt,1,1,"ng-template",null,1,t.C5r)(8,te,3,2,"ng-template",null,2,t.C5r)(10,ee,7,0,"ng-template",null,3,t.C5r),t.nrm(12,"div",6)),2&s){let o,r;const u=t.sdS(5),f=t.sdS(7),h=t.sdS(9),k=t.sdS(11);t.AVh("opacity-0",!(null!=(o=t.bMT(1,6,a.loading))&&o.includes("users"))),t.R7$(2),t.Y8G("data",a.user_list)("columns",t.sGs(21,Qt,t.eq3(10,Yt,u),t.lJ4(12,zt),t.eq3(13,Dt,h),t.lJ4(15,Ot),t.lJ4(16,Jt),t.eq3(17,At,f),t.eq3(19,Ht,k)))("filter",null==(r=t.bMT(3,8,a.options))?null:r.search)("sortable",!0)}},dependencies:[c.bT,x.oV,v.HM,g.r6,y.R,j.O,c.Jj]})}return n})();l(6233);var I=l(3685),se=l(4918);const ae=()=>({controls:!0});let X=(()=>{class n extends _.Tv{constructor(e,s,a,o){super(),this._explore=e,this._ex_parking=s,this._parking=a,this._org=o,this.url=this._explore.map_url,this.styles=this._explore.map_styles,this.features=this._explore.map_features,this.actions=this._explore.map_actions,this.labels=this._explore.map_labels,this.locate=""}ngOnInit(){var e=this;return(0,S.A)(function*(){yield e._org.initialised.pipe((0,E.$)(s=>s)).toPromise(),e.subscription("parking_level",e._parking.options.subscribe(s=>{const a=e._org.levelsForBuilding(),o=s.zones[0]||a.find(r=>r.tags.includes("parking"))?.id;e._explore.setLevel(o)})),e.subscription("parking_poll",e._ex_parking.startPolling()),e._ex_parking.on_book=s=>e._parking.editReservation(void 0,{space:s})})()}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(I.Oe),t.rXU(I.XU),t.rXU(m.X),t.rXU(G.yb))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["parking-map"]],features:[t.Jv_([I.XU]),t.Vt3],decls:7,vars:18,consts:[[1,"relative","w-full","h-[calc(100%-1.5rem)]","my-2","bg-base-200","rounded-xl","shadow"],[3,"src","styles","features","actions","labels","options","focus"]],template:function(s,a){1&s&&(t.j41(0,"div",0),t.nrm(1,"interactive-map",1),t.nI1(2,"async"),t.nI1(3,"async"),t.nI1(4,"async"),t.nI1(5,"async"),t.nI1(6,"async"),t.k0s()),2&s&&(t.R7$(),t.Y8G("src",t.bMT(2,7,a.url))("styles",t.bMT(3,9,a.styles))("features",t.bMT(4,11,a.features))("actions",t.bMT(5,13,a.actions))("labels",t.bMT(6,15,a.labels))("options",t.lJ4(17,ae))("focus",a.locate))},dependencies:[se.S,c.Jj]})}return n})();l(6685);var ie=l(7915);const le=[{path:"new",component:L,children:[{path:"events",component:P},{path:"manage/users",component:w},{path:"manage/map",component:X},{path:"manage",component:F},{path:"**",redirectTo:"events"}]},{path:"",component:U,children:[{path:"events",component:P},{path:"users",component:w},{path:"manage",component:F},{path:"**",redirectTo:"events"}]},{path:"**",redirectTo:""}];let re=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#e=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({imports:[c.MD,N.r,b.YN,b.X1,M.cQ,d.RI,v.PO,ie.SG,p.iI.forChild(le)]})}return n})()}}]);
//# sourceMappingURL=apps_concierge_src_app_parking_parking_module_ts.js.map