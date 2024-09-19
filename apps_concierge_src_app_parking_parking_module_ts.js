"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_parking_parking_module_ts"],{27876:(fe,S,l)=>{l.r(S),l.d(S,{AppParkingModule:()=>me});var c=l(60316),b=l(34456),v=l(26354),g=l(38223),p=l(26842),N=l(63046),$=l(40363),_=l(28007),t=l(7404),j=l(31034),x=l(80640),f=l(85060),y=l(69434),P=l(88328);const B=n=>({key:"state",name:"In Use",content:n,size:"4.75rem",sortable:!1}),V=()=>({key:"asset_name",name:"Bay Number"}),Y=n=>({key:"user_name",name:"Reserved For",content:n}),z=n=>({key:"booked_by_name",name:"Reserved By",content:n}),D=n=>({key:"plate_number",name:"Plate Number",content:n,size:"10rem",sortable:!1}),O=n=>({key:"status",name:"Status",content:n,size:"9.5rem"}),J=n=>({key:"actions",name:" ",content:n,size:"3.5rem",sortable:!1}),A=(n,o,e,s,a,i,r)=>[n,o,e,s,a,i,r];function H(n,o){if(1&n&&(t.j41(0,"div",12),t.EFF(1),t.k0s()),2&n){const e=t.XpG().row;t.R7$(),t.SpI(" ",e.user_email," ")}}function Q(n,o){if(1&n&&(t.j41(0,"div",10)(1,"div"),t.EFF(2),t.k0s(),t.DNE(3,H,2,1,"div",11),t.k0s()),2&n){const e=o.row;t.R7$(2),t.JRh(e.user_name||e.user_email),t.R7$(),t.Y8G("ngIf",e.user_name&&e.user_email)}}function Z(n,o){if(1&n&&(t.j41(0,"div",12),t.EFF(1),t.k0s()),2&n){const e=t.XpG().row;t.R7$(),t.SpI(" ",e.booked_by_email," ")}}function W(n,o){if(1&n&&(t.j41(0,"div",10)(1,"div"),t.EFF(2),t.k0s(),t.DNE(3,Z,2,1,"div",11),t.k0s()),2&n){const e=o.row;t.R7$(2),t.JRh(e.booked_by_name||e.booked_by_email),t.R7$(),t.Y8G("ngIf",e.booked_by_name&&e.booked_by_email)}}function K(n,o){if(1&n&&(t.j41(0,"div",16),t.nI1(1,"date"),t.j41(2,"app-icon"),t.EFF(3,"done"),t.k0s()()),2&n){const e=t.XpG().row,s=t.XpG();t.Y8G("matTooltip","Left at "+t.i5U(1,1,1e3*e.checked_out_at,s.time_format))}}function q(n,o){1&n&&(t.j41(0,"div",17)(1,"app-icon"),t.EFF(2,"question_mark"),t.k0s()())}function tt(n,o){1&n&&(t.j41(0,"div",18)(1,"app-icon"),t.EFF(2,"done"),t.k0s()())}function et(n,o){if(1&n&&t.DNE(0,K,4,4,"div",13)(1,q,3,0,"div",14)(2,tt,3,0,"div",15),2&n){const e=o.row;t.Y8G("ngIf",!(null!=e&&e.checked_in)&&e.checked_out_at),t.R7$(),t.Y8G("ngIf",!(null!=e&&e.checked_in||e.checked_out_at)),t.R7$(),t.Y8G("ngIf",null==e?null:e.checked_in)}}function nt(n,o){1&n&&(t.j41(0,"span",21),t.EFF(1," N/A "),t.k0s())}function st(n,o){if(1&n&&(t.j41(0,"div",19),t.EFF(1),t.DNE(2,nt,2,0,"span",20),t.k0s()),2&n){const e=o.row;t.R7$(),t.SpI(" ",null==e||null==e.extension_data?null:e.extension_data.plate_number," "),t.R7$(),t.Y8G("ngIf",!(null!=e&&null!=e.extension_data&&e.extension_data.plate_number))}}function at(n,o){if(1&n){const e=t.RV6();t.j41(0,"div",22)(1,"button",23)(2,"div",24)(3,"div",25),t.EFF(4),t.k0s(),t.j41(5,"app-icon",26),t.EFF(6,"arrow_drop_down"),t.k0s()()()(),t.j41(7,"mat-menu",null,6)(9,"button",27),t.bIt("click",function(){const a=t.eBV(e).row,i=t.XpG();return t.Njj(i.approve(a))}),t.j41(10,"div",28)(11,"app-icon",26),t.EFF(12,"event_available"),t.k0s(),t.j41(13,"div",29),t.EFF(14,"Approve Reservation"),t.k0s()()(),t.j41(15,"button",27),t.bIt("click",function(){const a=t.eBV(e).row,i=t.XpG();return t.Njj(i.reject(a))}),t.j41(16,"div",28)(17,"app-icon",26),t.EFF(18,"event_busy"),t.k0s(),t.j41(19,"div",29),t.EFF(20,"Decline Reservation"),t.k0s()()()()}if(2&n){const e=o.row,s=t.sdS(8);t.R7$(),t.AVh("text-success-content","approved"===(null==e?null:e.status))("bg-success","approved"===(null==e?null:e.status))("text-error-content","declined"===(null==e?null:e.status))("bg-error","declined"===(null==e?null:e.status))("text-neutral-content","ended"===(null==e?null:e.status))("bg-neutral","ended"===(null==e?null:e.status))("opacity-30","ended"===(null==e?null:e.status))("text-warning-content","tentative"===(null==e?null:e.status))("bg-warning","tentative"===(null==e?null:e.status)),t.Y8G("matMenuTriggerFor",s)("disabled","ended"===(null==e?null:e.status)),t.R7$(3),t.SpI(" ","ended"===(null==e?null:e.status)?"Ended":"approved"===(null==e?null:e.status)?"Approved":"declined"===(null==e?null:e.status)?"Declined":"Pending"," ")}}function it(n,o){if(1&n){const e=t.RV6();t.j41(0,"div",30)(1,"button",31),t.bIt("click",function(){const a=t.eBV(e).row,i=t.XpG();return t.Njj(i.editReservation(a))}),t.j41(2,"app-icon",26),t.EFF(3,"edit"),t.k0s()()()}if(2&n){const e=o.row,s=t.XpG();t.R7$(),t.Y8G("matMenuTriggerFor",s.menu)("disabled",e.checked_in||"ended"===e.status)}}let F=(()=>{class n{constructor(e){this._state=e,this.events=this._state.bookings,this.options=this._state.options,this.loading=this._state.loading,this.reject=s=>this._state.rejectBooking(s),this.approve=s=>this._state.approveBooking(s),this.editReservation=s=>this._state.editReservation(s)}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(_.X))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["parking-bookings-list"]],decls:17,vars:31,consts:[["person_template",""],["host_template",""],["state_template",""],["plate_template",""],["status_template",""],["action_template",""],["menu","matMenu"],[1,"sticky","left-0","w-full"],[1,"min-w-[76rem]","block","text-sm",3,"data","columns","filter","sortable"],[1,"w-full","h-20"],[1,"px-4","py-2"],["class","opacity-30 text-xs",4,"ngIf"],[1,"opacity-30","text-xs"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-base-300 text-base-100 mx-auto","matTooltipPosition","right",3,"matTooltip",4,"ngIf"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-warning text-warning-content mx-auto","matTooltip","Has not arrived at space","matTooltipPosition","right",4,"ngIf"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto","matTooltip","Arrived at space","matTooltipPosition","right",4,"ngIf"],["matTooltipPosition","right",1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-base-300","text-base-100","mx-auto",3,"matTooltip"],["matTooltip","Has not arrived at space","matTooltipPosition","right",1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-warning","text-warning-content","mx-auto"],["matTooltip","Arrived at space","matTooltipPosition","right",1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-success","text-success-content","mx-auto"],[1,"p-4","font-mono","text-sm","uppercase"],["class","opacity-30",4,"ngIf"],[1,"opacity-30"],[1,"px-4"],["matRipple","",1,"rounded-3xl","border-none","w-[7.5rem]","h-10",3,"matMenuTriggerFor","disabled"],[1,"flex","items-center","pl-4","pr-2","space-x-2"],[1,"flex-1","text-left"],[1,"text-2xl"],["mat-menu-item","",3,"click"],[1,"flex","items-center","space-x-2"],[1,"pr-2"],[1,"flex","items-center","justify-end","space-x-2","mx-auto"],["icon","","matRipple","",3,"click","matMenuTriggerFor","disabled"]],template:function(s,a){if(1&s&&(t.nrm(0,"mat-progress-bar",7),t.nI1(1,"async"),t.nrm(2,"simple-table",8),t.nI1(3,"async"),t.DNE(4,Q,4,2,"ng-template",null,0,t.C5r)(6,W,4,2,"ng-template",null,1,t.C5r)(8,et,3,3,"ng-template",null,2,t.C5r)(10,st,3,2,"ng-template",null,3,t.C5r)(12,at,21,21,"ng-template",null,4,t.C5r)(14,it,4,2,"ng-template",null,5,t.C5r),t.nrm(16,"div",9)),2&s){let i,r;const d=t.sdS(5),u=t.sdS(7),h=t.sdS(9),k=t.sdS(11),de=t.sdS(13),ge=t.sdS(15);t.AVh("opacity-0",!(null!=(i=t.bMT(1,6,a.loading))&&i.includes("bookings"))),t.R7$(2),t.Y8G("data",a.events)("columns",t.sGs(23,A,t.eq3(10,B,h),t.lJ4(12,V),t.eq3(13,Y,d),t.eq3(15,z,u),t.eq3(17,D,k),t.eq3(19,O,de),t.eq3(21,J,ge)))("filter",null==(r=t.bMT(3,8,a.options))?null:r.search)("sortable",!0)}},dependencies:[c.bT,j.kk,j.fb,j.Cp,x.oV,v.HM,f.r6,y.R,P.O,c.Jj,c.vh]})}return n})();var m=l(77375),ot=l(42175),lt=l(52352);const rt=n=>({key:"name",name:"Parking Bay",content:n}),ct=n=>({key:"assigned_to",name:"Assigned",content:n}),pt=()=>({key:"notes",name:"Notes"}),ut=n=>({key:"status",name:"Status",content:n,sortable:!1,size:"4.5rem"}),_t=n=>({key:"actions",name:" ",content:n,sortable:!1,size:"6.5rem"}),mt=(n,o,e,s,a)=>[n,o,e,s,a];function dt(n,o){if(1&n&&(t.j41(0,"div",7)(1,"app-icon",8),t.EFF(2),t.k0s()()),2&n){const e=o.row,s=t.XpG();t.AVh("bg-warning",!(null!=s.space_status[e.id]&&s.space_status[e.id].includes("free")||null!=s.space_status[e.id]&&s.space_status[e.id].includes("busy")))("text-warning-content",!(null!=s.space_status[e.id]&&s.space_status[e.id].includes("free")||null!=s.space_status[e.id]&&s.space_status[e.id].includes("busy")))("bg-success",null==s.space_status[e.id]?null:s.space_status[e.id].includes("free"))("text-success-content",null==s.space_status[e.id]?null:s.space_status[e.id].includes("free"))("bg-error",null==s.space_status[e.id]?null:s.space_status[e.id].includes("busy"))("text-error-content",null==s.space_status[e.id]?null:s.space_status[e.id].includes("busy")),t.Y8G("matTooltip",s.statusTooltip(s.space_status[e.id])),t.R7$(2),t.SpI(" ",null!=s.space_status[e.id]&&s.space_status[e.id].includes("assigned")?"person":null!=s.space_status[e.id]&&s.space_status[e.id].includes("reuse")?"event_available":"question_mark"," ")}}function gt(n,o){if(1&n){const e=t.RV6();t.j41(0,"button",9),t.bIt("click",function(){const a=t.eBV(e).row,i=t.XpG();return t.Njj(i.copyToClipboard(a.id))}),t.j41(1,"div",10),t.EFF(2),t.k0s(),t.j41(3,"div",11),t.EFF(4),t.k0s()()}if(2&n){const e=o.row,s=o.data;t.R7$(2),t.JRh(s),t.R7$(2),t.SpI(" ",e.id," ")}}function ft(n,o){1&n&&(t.j41(0,"div",14),t.EFF(1,"No Assigned User"),t.k0s())}function ht(n,o){if(1&n&&(t.j41(0,"div",11),t.EFF(1),t.k0s()),2&n){const e=t.XpG(2).data;t.R7$(),t.SpI(" ",e," ")}}function kt(n,o){if(1&n){const e=t.RV6();t.j41(0,"button",9),t.bIt("click",function(){t.eBV(e);const a=t.XpG().data,i=t.XpG();return t.Njj(i.copyToClipboard(a,"assigned"))}),t.j41(1,"div",10),t.EFF(2),t.k0s(),t.DNE(3,ht,2,1,"div",15),t.k0s()}if(2&n){const e=t.XpG(),s=e.row,a=e.data;t.R7$(2),t.JRh(s.assigned_name||a),t.R7$(),t.Y8G("ngIf",s.assigned_name)}}function bt(n,o){if(1&n&&t.DNE(0,ft,2,0,"div",12)(1,kt,4,2,"button",13),2&n){const e=o.data;t.Y8G("ngIf",!e),t.R7$(),t.Y8G("ngIf",e)}}function vt(n,o){if(1&n){const e=t.RV6();t.j41(0,"div",16)(1,"button",17),t.bIt("click",function(){const a=t.eBV(e).row,i=t.XpG();return t.Njj(i.editSpace(a))}),t.j41(2,"app-icon"),t.EFF(3,"edit"),t.k0s()(),t.j41(4,"button",18),t.bIt("click",function(){const a=t.eBV(e).row,i=t.XpG();return t.Njj(i.removeSpace(a))}),t.j41(5,"app-icon"),t.EFF(6,"delete"),t.k0s()()()}}let C=(()=>{class n extends m.Tv{constructor(e,s){super(),this._state=e,this._clipboard=s,this.spaces=this._state.spaces,this.options=this._state.options,this.loading=this._state.loading,this.bookings=this._state.bookings,this.space_status={},this.editSpace=a=>this._state.editSpace(a),this.removeSpace=a=>this._state.removeSpace(a)}ngOnInit(){this.subscription("bookings",(0,ot.zV)([this.spaces,this.bookings]).subscribe(([e,s])=>this._updateStatusList(e,s)))}copyToClipboard(e,s){this._clipboard.copy(e)&&(0,m.VX)(s?"Assigned user email copied to clipboard.":"Parking Bay ID copied to clipboard.")}statusTooltip(e){switch(e){case"assigned_free":return"Space is assigned to a user but available for use";case"assigned_busy":case"reuse_busy":return"Space is assigned to a user and in use";case"busy":return"Space is unassigned and in use";case"free":return"Space is unassigned and available for use"}return"Space is unassigned and available for use"}_updateStatusList(e,s){for(const a of e){const i=s.find(r=>r.asset_id===a.id&&"declined"!==r.status&&"cancelled"!==r.status&&"ended"!==r.status);this.space_status[a.id]=a.assigned_to&&!i?"assigned_free":a.assigned_to&&i&&i.user_email===a.assigned_to?"assigned_busy":a.assigned_to&&i&&i.user_email!==a.assigned_to?"reuse_busy":!a.assigned_to&&i?"busy":"free"}}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(_.X),t.rXU(lt.B0))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["parking-space-list"]],features:[t.Vt3],decls:13,vars:25,consts:[["status_template",""],["name_template",""],["assigned_template",""],["action_template",""],[1,"w-full"],[1,"min-w-[52rem]","block","text-sm",3,"data","columns","filter","sortable"],[1,"w-full","h-20"],["matTooltipPosition","left",1,"flex","items-center","justify-center","h-8","w-8","rounded","mx-auto",3,"matTooltip"],[1,"text-2xl"],[1,"px-4","py-2","text-left","leading-tight",3,"click"],[1,""],[1,"text-[0.625rem]","opacity-30","font-mono"],["class","p-4 opacity-30",4,"ngIf"],["class","px-4 py-2 text-left leading-tight",3,"click",4,"ngIf"],[1,"p-4","opacity-30"],["class","text-[0.625rem] opacity-30 font-mono",4,"ngIf"],[1,"flex","items-center","space-x-2","mx-auto"],["icon","","matRipple","","matTooltip","Edit Parking Space",3,"click"],["icon","","matRipple","","matTooltip","Remove Parking Space",1,"text-error",3,"click"]],template:function(s,a){if(1&s&&(t.nrm(0,"mat-progress-bar",4),t.nI1(1,"async"),t.nrm(2,"simple-table",5),t.nI1(3,"async"),t.DNE(4,dt,3,14,"ng-template",null,0,t.C5r)(6,gt,5,2,"ng-template",null,1,t.C5r)(8,bt,2,2,"ng-template",null,2,t.C5r)(10,vt,7,0,"ng-template",null,3,t.C5r),t.nrm(12,"div",6)),2&s){let i,r;const d=t.sdS(5),u=t.sdS(7),h=t.sdS(9),k=t.sdS(11);t.AVh("opacity-0",!(null!=(i=t.bMT(1,6,a.loading))&&i.includes("spaces"))),t.R7$(2),t.Y8G("data",a.spaces)("columns",t.s1E(19,mt,t.eq3(10,rt,u),t.eq3(12,ct,h),t.lJ4(14,pt),t.eq3(15,ut,d),t.eq3(17,_t,k)))("filter",null==(r=t.bMT(3,8,a.options))?null:r.search)("sortable",!0)}},dependencies:[c.bT,x.oV,v.HM,f.r6,y.R,P.O,c.Jj],encapsulation:2})}return n})();l(34836);var T=l(89204),E=l(57871),G=l(33602),U=l(12185),yt=l(46864),Tt=l(12587),jt=l(94584),Pt=l(12236),Ft=l(24950),Ct=l(25175),Rt=l(56062);function wt(n,o){if(1&n){const e=t.RV6();t.j41(0,"button",15),t.nI1(1,"async"),t.bIt("click",function(){t.eBV(e);const a=t.XpG();return t.Njj(a.newParkingSpace())}),t.j41(2,"div",16),t.EFF(3,"New Space"),t.k0s(),t.j41(4,"app-icon"),t.EFF(5,"add"),t.k0s()()}if(2&n){let e;const s=t.XpG();t.Y8G("disabled",!(null!=(e=t.bMT(1,1,s.options))&&null!=e.zones&&e.zones.length))}}function It(n,o){if(1&n){const e=t.RV6();t.j41(0,"button",17),t.bIt("click",function(){t.eBV(e);const a=t.XpG();return t.Njj(a.newParkingUser())}),t.j41(1,"div",16),t.EFF(2,"New User"),t.k0s(),t.j41(3,"app-icon"),t.EFF(4,"add"),t.k0s()()}}function St(n,o){if(1&n){const e=t.RV6();t.j41(0,"button",18),t.bIt("click",function(){t.eBV(e);const a=t.XpG();return t.Njj(a.newReservation())}),t.j41(1,"div",16),t.EFF(2,"New Reservation"),t.k0s(),t.j41(3,"app-icon"),t.EFF(4,"add"),t.k0s()()}}function Et(n,o){if(1&n&&(t.j41(0,"div",22),t.EFF(1),t.nI1(2,"building"),t.j41(3,"span",23),t.EFF(4," - "),t.k0s()()),2&n){let e;const s=t.XpG().$implicit;t.R7$(),t.SpI(" ",null==(e=t.bMT(2,1,s.parent_id))?null:e.display_name," ")}}function Gt(n,o){if(1&n&&(t.j41(0,"mat-option",19)(1,"div",20),t.DNE(2,Et,5,3,"div",21),t.j41(3,"div"),t.EFF(4),t.k0s()()()),2&n){const e=o.$implicit,s=t.XpG();t.Y8G("value",e.id),t.R7$(2),t.Y8G("ngIf",s.use_region),t.R7$(2),t.JRh(e.display_name||e.name)}}function Ut(n,o){if(1&n){const e=t.RV6();t.j41(0,"button",24),t.bIt("click",function(){t.eBV(e);const a=t.XpG();return t.Njj(a.manageRestrictions())}),t.j41(1,"app-icon"),t.EFF(2,"lock_open"),t.k0s()()}}function Xt(n,o){if(1&n){const e=t.RV6();t.j41(0,"date-options",25),t.bIt("dateChange",function(a){t.eBV(e);const i=t.XpG();return t.Njj(i.setDate(a))}),t.k0s()}}let R=(()=>{class n extends m.Tv{get use_region(){return!!this._settings.get("app.use_region")}manageRestrictions(){this._dialog.open(yt.F,{data:{type:"parking"}})}constructor(e,s,a,i,r,d){super(),this._state=e,this._org=s,this._route=a,this._router=i,this._settings=r,this._dialog=d,this.path="",this.zones=[],this.levels=this._state.levels,this.options=this._state.options,this.setDate=u=>this._state.setOptions({date:u}),this.setSearch=u=>this._state.setOptions({search:u}),this.updateZones=u=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:u.join(",")}}),this._state.setOptions({zones:u})}}ngOnInit(){var e=this;return(0,T.A)(function*(){yield e._org.initialised.pipe((0,E.$)(s=>s)).toPromise(),e.subscription("route.query",e._route.queryParamMap.subscribe(s=>{if(s.has("zone_ids")){const a=s.get("zone_ids").split(",");if(a.length){const i=e._org.levelWithID(a);if(e.zones=a,!i)return;e._org.building=e._org.buildings.find(r=>r.id===i.parent_id),e._state.setOptions({zones:a})}}})),e.subscription("levels",e._state.levels.subscribe(s=>{e.use_region||(e.zones=e.zones.filter(a=>s.find(i=>i.id===a)),!e.zones.length&&s.length&&e.zones.push(s[0].id),e.updateZones(e.zones))})),e.subscription("router.events",e._router.events.subscribe(s=>{s instanceof p.wF&&e._updatePath()})),e._updatePath()})()}newParkingSpace(){this._state.editSpace()}newParkingUser(){this._state.editUser()}newReservation(){var e=this;return(0,T.A)(function*(){const{date:s}=yield e.options.pipe((0,G.s)(1)).toPromise();e._state.editReservation(void 0,{date:s||Date.now(),allow_time_changes:!0})})()}_updatePath(){this.timeout("update_path",()=>{const e=this._router.url?.split("/")||[""];this.path=e[e.length-1].split("?")[0]},50)}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(_.X),t.rXU(U.yb),t.rXU(p.nX),t.rXU(p.Ix),t.rXU(m.h$),t.rXU(Tt.bZ))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["parking-topbar"]],features:[t.Vt3],decls:19,vars:16,consts:[[1,"flex","items-center","w-full","py-4","px-8","space-x-2"],[1,"text-2xl","font-medium"],[1,"flex-1","w-px"],[1,"mr-2",3,"modelChange","model"],[3,"matTooltip"],["btn","","matRipple","","class","space-x-2 w-40",3,"disabled","click",4,"ngIf"],["btn","","matRipple","","class","space-x-2 w-40",3,"click",4,"ngIf"],["btn","","matRipple","","class","space-x-2 w-48",3,"click",4,"ngIf"],[1,"flex","items-center","bg-base-100","px-8","mb-2","h-14"],["appearance","outline",1,"w-56","no-subscript"],["placeholder","All Levels","multiple","",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-1","w-0"],["icon","","matRipple","","class","bg-secondary text-secondary-content rounded h-12 w-12","matTooltip","Parking Restrictions",3,"click",4,"ngIf"],[3,"dateChange",4,"ngIf"],["btn","","matRipple","",1,"space-x-2","w-40",3,"click","disabled"],[1,"pl-2"],["btn","","matRipple","",1,"space-x-2","w-40",3,"click"],["btn","","matRipple","",1,"space-x-2","w-48",3,"click"],[3,"value"],[1,"flex","flex-col-reverse"],["class","text-xs opacity-30",4,"ngIf"],[1,"text-xs","opacity-30"],[1,"opacity-0"],["icon","","matRipple","","matTooltip","Parking Restrictions",1,"bg-secondary","text-secondary-content","rounded","h-12","w-12",3,"click"],[3,"dateChange"]],template:function(s,a){if(1&s&&(t.j41(0,"div",0)(1,"h2",1),t.EFF(2),t.k0s(),t.nrm(3,"div",2),t.j41(4,"searchbar",3),t.nI1(5,"async"),t.bIt("modelChange",function(r){return a.setSearch(r)}),t.k0s(),t.j41(6,"div",4),t.nI1(7,"async"),t.DNE(8,wt,6,3,"button",5),t.k0s(),t.DNE(9,It,5,0,"button",6)(10,St,5,0,"button",7),t.k0s(),t.j41(11,"div",8)(12,"mat-form-field",9)(13,"mat-select",10),t.mxI("ngModelChange",function(r){return t.DH7(a.zones,r)||(a.zones=r),r}),t.bIt("ngModelChange",function(r){return a.updateZones(r)}),t.DNE(14,Gt,5,3,"mat-option",11),t.nI1(15,"async"),t.k0s()(),t.nrm(16,"div",12),t.DNE(17,Ut,3,0,"button",13)(18,Xt,1,0,"date-options",14),t.k0s()),2&s){let i,r;t.R7$(2),t.SpI(" ","events"!==a.path?"Parking Management":"Parking Reservations"," "),t.R7$(2),t.Y8G("model",null==(i=t.bMT(5,10,a.options))?null:i.search),t.R7$(2),t.Y8G("matTooltip",null!=(r=t.bMT(7,12,a.options))&&null!=r.zones&&r.zones.length?"":"Select a level to add a space"),t.R7$(2),t.Y8G("ngIf","manage"===a.path),t.R7$(),t.Y8G("ngIf","users"===a.path),t.R7$(),t.Y8G("ngIf","events"===a.path),t.R7$(3),t.R50("ngModel",a.zones),t.R7$(),t.Y8G("ngForOf",t.bMT(15,14,a.levels)),t.R7$(3),t.Y8G("ngIf","events"!==a.path&&"map"!==a.path),t.R7$(),t.Y8G("ngIf","events"===a.path||"map"===a.path)}},dependencies:[c.Sq,c.bT,jt.o,Pt.x,Ft.rl,Ct.VO,f.wT,x.oV,f.r6,b.BC,b.vS,y.R,c.Jj,Rt.b],styles:["button[_ngcontent-%COMP%]{min-width:0;padding:0 .85rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n\n/*# sourceMappingURL=parking-topbar.component.ts-angular-inline--166.css.map*/"]})}return n})();var Lt=l(74605);const Mt=()=>["/parking","events"],Nt=()=>["/parking","spaces"];function $t(n,o){1&n&&(t.j41(0,"div",6),t.nrm(1,"div",7),t.j41(2,"p"),t.EFF(3,"No parking floors for the currently selected building"),t.k0s()())}let X=(()=>{class n extends m.Tv{constructor(e,s){super(),this._state=e,this._router=s,this.levels=this._state.levels,this.path=""}ngOnInit(){this._state.startPolling(),this.subscription("router.events",this._router.events.subscribe(s=>{if(s instanceof p.wF){const a=this._router.url?.split("/")||[""];this.path=a[e.length-1].split("?")[0]}}));const e=this._router.url?.split("/")||[""];this.path=e[e.length-1].split("?")[0]}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(_.X),t.rXU(p.Ix))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-parking"]],features:[t.Vt3],decls:13,vars:9,consts:[[1,"relative","overflow-hidden","bg-base-100"],[1,"dark"],["mat-tab-nav-bar",""],["mat-tab-link","","queryParamsHandling","merge",3,"routerLink","active"],[1,"flex-1","h-1/2","w-full","relative","overflow-auto","px-4"],["class","absolute inset-0 flex flex-col items-center justify-center z-50",4,"ngIf"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center","z-50"],[1,"absolute","inset-0","bg-base-100","opacity-50","z-0"]],template:function(s,a){if(1&s&&(t.nrm(0,"sidebar"),t.j41(1,"main",0),t.nrm(2,"parking-topbar"),t.j41(3,"div",1)(4,"nav",2)(5,"a",3),t.EFF(6," Bookings "),t.k0s(),t.j41(7,"a",3),t.EFF(8," Manage Spaces "),t.k0s()()(),t.j41(9,"div",4),t.nrm(10,"router-outlet"),t.k0s(),t.DNE(11,$t,4,0,"div",5),t.nI1(12,"async"),t.k0s()),2&s){let i;t.R7$(5),t.Y8G("routerLink",t.lJ4(7,Mt))("active","events"===a.path),t.R7$(2),t.Y8G("routerLink",t.lJ4(8,Nt))("active","spaces"===a.path),t.R7$(4),t.Y8G("ngIf",!(null!=(i=t.bMT(12,5,a.levels))&&i.length))}},dependencies:[c.bT,Lt.k,g.Bu,g.Ql,p.n3,p.Wk,R,c.Jj],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n\n/*# sourceMappingURL=parking.component.ts-angular-inline--167.css.map*/"]})}return n})();var Bt=l(45189),Vt=l(96843);const Yt=()=>["/book","parking","new","manage"],zt=()=>["/book","parking","new","manage","users"],Dt=()=>["/book","parking","new","manage","map"];function Ot(n,o){if(1&n&&(t.j41(0,"div",7)(1,"nav",8)(2,"a",9),t.EFF(3," Spaces "),t.k0s(),t.j41(4,"a",9),t.EFF(5," Users "),t.k0s(),t.j41(6,"a",9),t.EFF(7," Map "),t.k0s()(),t.nrm(8,"mat-tab-nav-panel",null,0),t.k0s()),2&n){const e=t.sdS(9),s=t.XpG();t.R7$(),t.Y8G("tabPanel",e),t.R7$(),t.Y8G("routerLink",t.lJ4(7,Yt))("active","manage"===s.path),t.R7$(2),t.Y8G("routerLink",t.lJ4(8,zt))("active","users"===s.path),t.R7$(2),t.Y8G("routerLink",t.lJ4(9,Dt))("active","map"===s.path)}}function Jt(n,o){1&n&&(t.j41(0,"div",10),t.nrm(1,"div",11),t.j41(2,"p",12),t.EFF(3," No parking floors for the currently selected building "),t.k0s()())}let L=(()=>{class n extends m.Tv{constructor(e,s){super(),this._state=e,this._router=s,this.levels=this._state.levels,this.path=""}ngOnInit(){this._state.startPolling(),this.subscription("router.events",this._router.events.subscribe(e=>{e instanceof p.wF&&this._updatePath()})),this._updatePath()}_updatePath(){this.timeout("update_path",()=>{const e=this._router.url?.split("/")||[""];this.path=e[e.length-1].split("?")[0]},50)}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(_.X),t.rXU(p.Ix))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-new-parking"]],features:[t.Vt3],decls:11,vars:4,consts:[["tabPanel",""],[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full","relative"],["class","px-8 pb-2",4,"ngIf"],[1,"relative","flex-1","h-1/2","w-full","overflow-auto","px-8"],[1,"w-full","h-full","overflow-auto"],["class","absolute inset-0 flex flex-col items-center justify-center z-50",4,"ngIf"],[1,"px-8","pb-2"],["mat-tab-nav-bar","",3,"tabPanel"],["mat-tab-link","",3,"routerLink","active"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center","z-50"],[1,"absolute","inset-0","bg-base-100","opacity-80","z-0"],[1,"z-10","opacity-60"]],template:function(s,a){if(1&s&&(t.nrm(0,"app-topbar"),t.j41(1,"div",1),t.nrm(2,"app-sidebar"),t.j41(3,"main",2),t.nrm(4,"parking-topbar"),t.DNE(5,Ot,10,10,"div",3),t.j41(6,"div",4)(7,"div",5),t.nrm(8,"router-outlet"),t.k0s()(),t.DNE(9,Jt,4,0,"div",6),t.nI1(10,"async"),t.k0s()()),2&s){let i;t.R7$(5),t.Y8G("ngIf","events"!==a.path),t.R7$(4),t.Y8G("ngIf",!(null!=(i=t.bMT(10,2,a.levels))&&i.length))}},dependencies:[c.bT,Bt.S,Vt.c,g.Bu,g.hQ,g.Ql,p.n3,p.Wk,R,c.Jj],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n\n/*# sourceMappingURL=new-parking.component.ts-angular-inline--168.css.map*/"]})}return n})();var At=l(90521);const Ht=n=>({key:"name",name:"User",content:n}),Qt=()=>({key:"car_color",name:"Car Colour"}),Zt=n=>({key:"plate_number",name:"Plate Number",content:n}),Wt=()=>({key:"notes",name:"Notes"}),Kt=n=>({key:"deny",name:"Deny",size:"4.5rem",content:n}),qt=n=>({key:"actions",name:" ",content:n,sortable:!1,size:"6.5rem"}),te=(n,o,e,s,a,i)=>[n,o,e,s,a,i];function ee(n,o){if(1&n){const e=t.RV6();t.j41(0,"button",7),t.bIt("click",function(){const a=t.eBV(e).row,i=t.XpG();return t.Njj(i.copyToClipboard(a.id))}),t.j41(1,"div",8),t.EFF(2),t.k0s(),t.j41(3,"div",9),t.EFF(4),t.k0s()()}if(2&n){const e=o.row,s=o.data;t.R7$(2),t.JRh(s),t.R7$(2),t.SpI(" ",e.email," ")}}function ne(n,o){1&n&&(t.j41(0,"div",11)(1,"app-icon"),t.EFF(2,"close"),t.k0s()())}function se(n,o){1&n&&t.DNE(0,ne,3,0,"div",10),2&n&&t.Y8G("ngIf",o.data)}function ae(n,o){1&n&&(t.j41(0,"span",14),t.EFF(1,"N/A"),t.k0s())}function ie(n,o){if(1&n&&(t.j41(0,"div",12),t.EFF(1),t.DNE(2,ae,2,0,"span",13),t.k0s()),2&n){const e=o.data;t.R7$(),t.SpI(" ",e," "),t.R7$(),t.Y8G("ngIf",!e)}}function oe(n,o){if(1&n){const e=t.RV6();t.j41(0,"div",15)(1,"button",16),t.bIt("click",function(){const a=t.eBV(e).row,i=t.XpG();return t.Njj(i.editUser(a))}),t.j41(2,"app-icon"),t.EFF(3,"edit"),t.k0s()(),t.j41(4,"button",17),t.bIt("click",function(){const a=t.eBV(e).row,i=t.XpG();return t.Njj(i.removeUser(a))}),t.j41(5,"app-icon"),t.EFF(6,"delete"),t.k0s()()()}}let w=(()=>{class n{constructor(e){this._state=e,this.options=this._state.options,this.loading=this._state.loading,this.new_items=new At.t([]),this.user_list=this._state.users,this.editUser=s=>this._state.editUser(s),this.removeUser=s=>this._state.removeUser(s)}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(_.X))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["parking-users-list"]],decls:13,vars:27,consts:[["name_template",""],["denied_template",""],["plate_template",""],["action_template",""],[1,"w-full"],[1,"min-w-[68rem]","block","text-sm",3,"data","columns","filter","sortable"],[1,"w-full","h-20"],[1,"px-4","py-2","text-left","leading-tight",3,"click"],[1,""],[1,"text-[0.625rem]","opacity-30","font-mono"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-error text-error-content mx-auto",4,"ngIf"],[1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-error","text-error-content","mx-auto"],[1,"p-4","font-mono","text-sm","uppercase"],["class","opacity-30",4,"ngIf"],[1,"opacity-30"],[1,"flex","items-center","space-x-2","mx-auto"],["icon","","matRipple","","matTooltip","Edit User",3,"click"],["icon","","matTooltip","Remove User",1,"text-error",3,"click"]],template:function(s,a){if(1&s&&(t.nrm(0,"mat-progress-bar",4),t.nI1(1,"async"),t.nrm(2,"simple-table",5),t.nI1(3,"async"),t.DNE(4,ee,5,2,"ng-template",null,0,t.C5r)(6,se,1,1,"ng-template",null,1,t.C5r)(8,ie,3,2,"ng-template",null,2,t.C5r)(10,oe,7,0,"ng-template",null,3,t.C5r),t.nrm(12,"div",6)),2&s){let i,r;const d=t.sdS(5),u=t.sdS(7),h=t.sdS(9),k=t.sdS(11);t.AVh("opacity-0",!(null!=(i=t.bMT(1,6,a.loading))&&i.includes("users"))),t.R7$(2),t.Y8G("data",a.user_list)("columns",t.l4e(20,te,t.eq3(10,Ht,d),t.lJ4(12,Qt),t.eq3(13,Zt,h),t.lJ4(15,Wt),t.eq3(16,Kt,u),t.eq3(18,qt,k)))("filter",null==(r=t.bMT(3,8,a.options))?null:r.search)("sortable",!0)}},dependencies:[c.bT,x.oV,v.HM,f.r6,y.R,P.O,c.Jj]})}return n})();l(6233);var I=l(23685),re=l(24918);const ce=()=>({controls:!0});let M=(()=>{class n extends m.Tv{constructor(e,s,a,i){super(),this._explore=e,this._ex_parking=s,this._parking=a,this._org=i,this.url=this._explore.map_url,this.styles=this._explore.map_styles,this.features=this._explore.map_features,this.actions=this._explore.map_actions,this.labels=this._explore.map_labels,this.locate=""}ngOnInit(){var e=this;return(0,T.A)(function*(){yield e._org.initialised.pipe((0,E.$)(s=>s)).toPromise(),e.subscription("parking_level",e._parking.options.subscribe(s=>{const a=e._org.levelsForBuilding(),i=s.zones[0]||a.find(r=>r.tags.includes("parking"))?.id;e._explore.setLevel(i)})),e.subscription("parking_poll",e._ex_parking.startPolling()),e.subscription("parking_options",e._parking.options.subscribe(s=>{e._ex_parking.setOptions(s)})),e._ex_parking.on_book=function(){var s=(0,T.A)(function*(a){const i=yield e._parking.options.pipe((0,G.s)(1)).toPromise();yield e._parking.editReservation(void 0,{space:a,date:i.date})});return function(a){return s.apply(this,arguments)}}()})()}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(I.Oe),t.rXU(I.XU),t.rXU(_.X),t.rXU(U.yb))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["parking-map"]],features:[t.Jv_([I.XU]),t.Vt3],decls:7,vars:18,consts:[[1,"relative","w-full","h-[calc(100%-1.5rem)]","my-2","bg-base-200","rounded-xl","shadow"],[3,"src","styles","features","actions","labels","options","focus"]],template:function(s,a){1&s&&(t.j41(0,"div",0),t.nrm(1,"interactive-map",1),t.nI1(2,"async"),t.nI1(3,"async"),t.nI1(4,"async"),t.nI1(5,"async"),t.nI1(6,"async"),t.k0s()),2&s&&(t.R7$(),t.Y8G("src",t.bMT(2,7,a.url))("styles",t.bMT(3,9,a.styles))("features",t.bMT(4,11,a.features))("actions",t.bMT(5,13,a.actions))("labels",t.bMT(6,15,a.labels))("options",t.lJ4(17,ce))("focus",a.locate))},dependencies:[re.S,c.Jj]})}return n})();l(96685);var ue=l(57915);const _e=[{path:"new",component:L,children:[{path:"events",component:F},{path:"manage/users",component:w},{path:"manage/map",component:M},{path:"manage",component:C},{path:"**",redirectTo:"events"}]},{path:"",component:X,children:[{path:"events",component:F},{path:"users",component:w},{path:"manage",component:C},{path:"**",redirectTo:"events"}]},{path:"**",redirectTo:""}];let me=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#e=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({imports:[c.MD,$.r,b.YN,b.X1,N.cQ,g.RI,v.PO,ue.SG,p.iI.forChild(_e)]})}return n})()}}]);
//# sourceMappingURL=apps_concierge_src_app_parking_parking_module_ts.js.map