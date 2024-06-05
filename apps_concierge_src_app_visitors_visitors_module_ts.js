"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_visitors_visitors_module_ts"],{39418:(U,b,l)=>{l.r(b),l.d(b,{VisitorsModule:()=>Lt});var p=l(60316),h=l(34456),f=l(26842),F=l(40363),_=l(89204),v=l(90521),C=l(42175),G=l(71536),T=l(8627),E=l(19803),d=l(71963),B=l(29314),M=l(66e3),z=l(7841),R=l(35443),S=l(33602),O=l(27419),Z=l(88402),$=l(67450),L=l(83866),m=l(82333),H=l(68390),x=l(57915),k=l(12185),t=l(68559),V=l(12587);let y=(()=>{class s extends m.Tv{get search(){return this._search.getValue()}get time_format(){return this._settings.time_format}constructor(e,n,i){super(),this._dialog=e,this._org=n,this._settings=i,this._poll=new v.t(0),this._filters=new v.t({}),this._search=new v.t(""),this._loading=new v.t(!1),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.bookings=(0,C.zV)([this._org.active_building,this._filters,this._poll]).pipe((0,T.p)(([o])=>!!o),(0,E.B)(150),(0,d.n)(([o,a])=>{this._loading.next(!0);const r=a.date?new Date(a.date):new Date,u=(0,O.A)(r),g=(0,Z.A)(u,a.period||1);return(0,x.tj)({type:"visitor",period_start:(0,$.A)(u),period_end:(0,$.A)(g),zones:(a.zones||[]).join(",")||o.id,include_checked_out:!0,limit:1e3}).pipe((0,B.W)(w=>(0,G.of)([])))}),(0,M.M)(()=>this._loading.next(!1)),(0,z.t)(1)),this.filtered_bookings=(0,C.zV)([this._search,this.bookings]).pipe((0,R.T)(([o,a])=>{const r=o.toLowerCase();return a.filter(g=>g.asset_name?.toLowerCase().includes(r)||g.user_name?.toLowerCase().includes(r)||g.user_email?.toLowerCase().includes(r)||g.asset_id?.toLowerCase().includes(r)).sort((g,w)=>g.date-w.date)}))}setFilters(e){this._filters.next({...this._filters.getValue(),...e})}setSearchString(e){this._search.next(e)}poll(){this._poll.next(Date.now())}startPolling(e=3e4){this.interval("poll",()=>this._poll.next(Date.now()),e)}stopPolling(){this.clearInterval("poll")}setExt(e,n,i){var o=this;return(0,_.A)(function*(){const a={...e.extension_data};a[n]=i,yield(0,H.is)(e.id,{...e,extension_data:a}).toPromise(),o._poll.next(Date.now())})()}approveVisitor(e){var n=this;return(0,_.A)(function*(){const i=yield(0,m.GE)({title:"Approve Visitor",content:`Approve attendance of ${e.asset_name||e.asset_id} to their meeting?`,icon:{content:"event_available"}},n._dialog);if("done"!==i.reason)return i.close();i.loading("Updating guest details"),yield(0,x.DD)(e.id).toPromise().catch(o=>{throw(0,m.UG)(`Error approving visitor: ${o.message||o.error||o}`),i.close(),o}),(0,m.VX)("Successfully approved visitor"),n._poll.next(Date.now()),i.close()})()}declineVisitor(e){var n=this;return(0,_.A)(function*(){const i=yield(0,m.GE)({title:"Decline Visitor",content:`Decline attendance of ${e.asset_name||e.asset_id} to their meeting?`,icon:{content:"event_available"}},n._dialog);if("done"!==i.reason)return i.close();i.loading("Updating guest details"),yield(0,x.vB)(e.id).toPromise().catch(o=>{throw(0,m.UG)(`Error declining visitor: ${o.message||o.error||o}`),i.close(),o}),(0,m.VX)("Successfully declining visitor"),n._poll.next(Date.now()),i.close()})()}setCheckinState(e,n=!0){return(0,_.A)(function*(){yield(0,x.Z$)(e.id,n).toPromise().catch(o=>{throw(0,m.UG)(`Error checking ${n?"in":"out"} ${e.asset_name||e.asset_id} for ${e.user_name}'s meeting`),o}),(0,m.VX)(`Successfully checked ${n?"in":"out"} ${e.asset_name||e.asset_id} from ${e.user_name}'s meeting`)})()}setCheckinStateForEvent(e,n=!0){var i=this;return(0,_.A)(function*(){if(!e)return;const a=(yield i.bookings.pipe((0,S.s)(1)).toPromise()).filter(r=>r.parent_id===e||r.extension_data.parent_id===e||r.linked_event?.id===e||r.linked_event?.event_id===e);a.length&&(yield Promise.all(a.map(r=>(0,x.Z$)(r.id,n).toPromise().catch(u=>{throw(0,m.UG)(`Error checking ${n?"in":"out"} ${r.asset_name||r.asset_id} for ${r.user_name}'s meeting`),u}))),(0,m.VX)(`Successfully checked ${n?"in":"out"} all visitors from ${a[0].user_name}'s meeting`),i._poll.next(Date.now()))})()}downloadVisitorsList(){var e=this;return(0,_.A)(function*(){const n=yield e.filtered_bookings.pipe((0,S.s)(1)).toPromise();if(!n.length)return;const{date:i}=e._filters.getValue(),o=n.map(r=>({Name:r.asset_name,Email:r.asset_id,"Checked In":r.checked_in,Host:r.user_email||"",Status:r.status,Date:(0,L.A)(r.date,"dd MMM "+e.time_format)})),a=(0,m.SL)(o);(0,m.PE)(`visitor-list-${(0,L.A)(i||Date.now(),"MMM-dd")}.csv`,a)})()}static#t=this.\u0275fac=function(n){return new(n||s)(t.KVO(V.bZ),t.KVO(k.yb),t.KVO(m.h$))};static#e=this.\u0275prov=t.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var J=l(74605),D=l(26354),K=l(57871),X=l(94584),N=l(12236),P=l(24950),Y=l(25175),j=l(85060);function W(s,c){if(1&s&&(t.j41(0,"mat-option",5),t.EFF(1),t.k0s()),2&s){const e=c.$implicit;t.Y8G("value",e.id),t.R7$(),t.SpI(" ",e.display_name||e.name," ")}}let Q=(()=>{class s extends m.Tv{constructor(e,n,i,o){super(),this._state=e,this._org=n,this._route=i,this._router=o,this.zones=[],this.levels=this._org.active_levels,this.filters=this._state.filters,this.setDate=a=>this._state.setFilters({date:a}),this.setFilters=a=>this._state.setFilters(a),this.setSearch=a=>this._state.setSearchString(a),this.updateZones=a=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:a.join(",")}}),this._state.setFilters({zones:a})}}ngOnInit(){var e=this;return(0,_.A)(function*(){yield e._org.initialised.pipe((0,K.$)(n=>n)).toPromise(),e.subscription("route.query",e._route.queryParamMap.subscribe(n=>{if(n.has("zone_ids")){const i=n.get("zone_ids").split(",");if(i.length){const o=e._org.levelWithID(i);if(e.zones=i,!o)return;e._org.building=e._org.buildings.find(a=>a.id===o.parent_id)}}})),e.subscription("levels",e._org.active_levels.subscribe(n=>{e.zones=e.zones.filter(i=>n.find(o=>o.id===i)),!e.zones.length&&n.length&&e.zones.push(n[0].id),e.updateZones(e.zones)})),e.setSearch("")})()}static#t=this.\u0275fac=function(n){return new(n||s)(t.rXU(y),t.rXU(k.yb),t.rXU(f.nX),t.rXU(f.Ix))};static#e=this.\u0275cmp=t.VBU({type:s,selectors:[["visitors-topbar"]],features:[t.Vt3],decls:17,vars:10,consts:[[1,"flex","items-center","bg-base-100","h-20","px-4","border-b","border-base-200","space-x-2"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Viewing Period",3,"ngModelChange","ngModel"],[3,"value"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange"],[3,"dateChange"]],template:function(n,i){if(1&n&&(t.j41(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),t.mxI("ngModelChange",function(a){return t.DH7(i.zones,a)||(i.zones=a),a}),t.bIt("ngModelChange",function(a){return i.updateZones(a)}),t.DNE(3,W,2,2,"mat-option",3),t.nI1(4,"async"),t.k0s()(),t.j41(5,"mat-form-field",1)(6,"mat-select",4),t.nI1(7,"async"),t.bIt("ngModelChange",function(a){return i.setFilters({period:a})}),t.j41(8,"mat-option",5),t.EFF(9,"Show Day"),t.k0s(),t.j41(10,"mat-option",5),t.EFF(11,"Show Week"),t.k0s(),t.j41(12,"mat-option",5),t.EFF(13,"Show Month"),t.k0s()()(),t.nrm(14,"div",6),t.j41(15,"searchbar",7),t.bIt("modelChange",function(a){return i.setSearch(a)}),t.k0s(),t.j41(16,"date-options",8),t.bIt("dateChange",function(a){return i.setDate(a)}),t.k0s()()),2&n){let o;t.R7$(2),t.R50("ngModel",i.zones),t.R7$(),t.Y8G("ngForOf",t.bMT(4,6,i.levels)),t.R7$(3),t.Y8G("ngModel",(null==(o=t.bMT(7,8,i.filters))?null:o.period)||1),t.R7$(2),t.Y8G("value",1),t.R7$(2),t.Y8G("value",7),t.R7$(2),t.Y8G("value",30)}},dependencies:[p.Sq,h.BC,h.vS,X.o,N.x,P.rl,Y.VO,j.wT,p.Jj],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n\n/*# sourceMappingURL=visitors-topbar.component.ts-angular-inline--114.css.map*/"]})}return s})();var q=l(3998),I=l(31034),tt=l(80640),et=l(88157),nt=l(69434),it=l(12993),st=l(22238);const ot=(s,c,e,n,i,o,a)=>({state:s,status:c,date:e,host:n,id_data:i,actions:o,induction:a});function at(s,c){if(1&s&&(t.j41(0,"div",16),t.nI1(1,"date"),t.j41(2,"app-icon"),t.EFF(3,"done"),t.k0s()()),2&s){const e=t.XpG().row,n=t.XpG();t.Y8G("matTooltip","Checked out at "+t.i5U(1,1,e.checked_out_at,n.time_format))}}function lt(s,c){1&s&&(t.j41(0,"div",17)(1,"app-icon"),t.EFF(2,"question_mark"),t.k0s()())}function rt(s,c){1&s&&(t.j41(0,"div",18)(1,"app-icon"),t.EFF(2,"done"),t.k0s()())}function ct(s,c){if(1&s&&t.DNE(0,at,4,4,"div",13)(1,lt,3,0,"div",14)(2,rt,3,0,"div",15),2&s){const e=c.row;t.Y8G("ngIf",!(null!=e&&e.checked_in)&&e.checked_out_at),t.R7$(),t.Y8G("ngIf",!(null!=e&&e.checked_in||e.checked_out_at)),t.R7$(),t.Y8G("ngIf",null==e?null:e.checked_in)}}function ut(s,c){if(1&s&&t.EFF(0),2&s){const e=c.row;t.SpI(" ",null==e.extension_data?null:e.extension_data.host," ")}}function mt(s,c){if(1&s&&(t.j41(0,"button",21),t.EFF(1),t.k0s()),2&s){const e=t.XpG().row;t.R7$(),t.SpI(" ",null!=e.extension_data&&e.extension_data.id_confirmed?"Confirmed":!1===(null==e.extension_data?null:e.extension_data.id_confirmed)?"Rejected":"Submitted"," ")}}function dt(s,c){if(1&s){const e=t.RV6();t.j41(0,"div",22),t.nrm(1,"img",23),t.j41(2,"button",24),t.bIt("click",function(){t.eBV(e);const i=t.XpG().row,o=t.XpG();return t.Njj(o.setExt(i,"id_confirmed",!0))}),t.EFF(3," Confirm ID "),t.k0s(),t.j41(4,"button",25),t.bIt("click",function(){t.eBV(e);const i=t.XpG().row,o=t.XpG();return t.Njj(o.setExt(i,"id_confirmed",!1))}),t.EFF(5," Reject ID "),t.k0s()()}if(2&s){const e=t.XpG().row;t.R7$(),t.Y8G("src",null==e.extension_data||null==e.extension_data.id_data?null:e.extension_data.id_data.url,t.B4B)}}function pt(s,c){if(1&s&&(t.j41(0,"div",19),t.DNE(1,mt,2,1,"button",20),t.k0s(),t.DNE(2,dt,6,1,"ng-template",null,7,t.C5r)),2&s){const e=c.row,n=t.sdS(3);t.Y8G("content",n),t.R7$(),t.Y8G("ngIf",null==e.extension_data||null==e.extension_data.id_data?null:e.extension_data.id_data.url)}}function _t(s,c){1&s&&(t.j41(0,"div",29)(1,"app-icon"),t.EFF(2,"done"),t.k0s()())}function gt(s,c){1&s&&(t.j41(0,"div",30)(1,"app-icon"),t.EFF(2,"question_mark"),t.k0s()())}function ht(s,c){1&s&&(t.j41(0,"div",31)(1,"app-icon"),t.EFF(2,"close"),t.k0s()())}function ft(s,c){if(1&s&&t.DNE(0,_t,3,0,"div",26)(1,gt,3,0,"div",27)(2,ht,3,0,"div",28),2&s){const e=c.row;t.Y8G("ngIf",e.induction),t.R7$(),t.Y8G("ngIf",!e.induction&&!e.process_state.includes("declined")),t.R7$(),t.Y8G("ngIf",!e.induction&&e.process_state.includes("declined"))}}function vt(s,c){if(1&s){const e=t.RV6();t.j41(0,"button",32)(1,"div",33)(2,"div",34),t.EFF(3),t.k0s(),t.j41(4,"app-icon",35),t.EFF(5,"arrow_drop_down"),t.k0s()()(),t.j41(6,"mat-menu",null,8)(8,"button",36),t.bIt("click",function(){const i=t.eBV(e).row,o=t.XpG();return t.Njj(o.approveVisitor(i))}),t.EFF(9," Approve Visitor "),t.k0s(),t.j41(10,"button",36),t.bIt("click",function(){const i=t.eBV(e).row,o=t.XpG();return t.Njj(o.declineVisitor(i))}),t.EFF(11," Decline Visitor "),t.k0s()()}if(2&s){const e=c.row,n=t.sdS(7);t.AVh("!text-success-content","approved"===(null==e?null:e.status))("!bg-success","approved"===(null==e?null:e.status))("!text-error-content","declined"===(null==e?null:e.status))("!bg-error","declined"===(null==e?null:e.status))("!text-neutral-content","ended"===(null==e?null:e.status))("!bg-neutral","ended"===(null==e?null:e.status))("opacity-60","ended"===(null==e?null:e.status)),t.Y8G("matMenuTriggerFor",n)("disabled","ended"===(null==e?null:e.status)),t.R7$(3),t.SpI(" ","ended"===(null==e?null:e.status)?"Ended":"approved"===(null==e?null:e.status)?"Approved":"declined"===(null==e?null:e.status)?"Declined":"Pending"," ")}}function xt(s,c){if(1&s&&(t.EFF(0),t.nI1(1,"async"),t.nI1(2,"date")),2&s){let e;const n=c.row,i=t.XpG();t.SpI(" ",t.i5U(2,3,n.date,(null==(e=t.bMT(1,1,i.filters))?null:e.period)>1?"MMM d, "+i.time_format:i.time_format)," ")}}function bt(s,c){if(1&s&&(t.j41(0,"a",47),t.EFF(1),t.k0s()),2&s){const e=c.$implicit;t.Y8G("href",e.url,t.B4B),t.R7$(),t.JRh(e.name)}}function Ct(s,c){if(1&s){const e=t.RV6();t.j41(0,"div",37)(1,"button",38)(2,"app-icon",35),t.EFF(3," event "),t.k0s()(),t.j41(4,"mat-menu",null,9)(6,"button",36),t.bIt("click",function(){const i=t.eBV(e).row,o=t.XpG();return t.Njj(o.checkinAllVisitors(i))}),t.j41(7,"div",39)(8,"app-icon",35),t.EFF(9,"event_available"),t.k0s(),t.j41(10,"div"),t.EFF(11,"Checkin All for Booking"),t.k0s()()(),t.j41(12,"button",36),t.bIt("click",function(){const i=t.eBV(e).row,o=t.XpG();return t.Njj(o.checkoutAllVisitors(i))}),t.j41(13,"div",39)(14,"app-icon",35),t.EFF(15,"event_busy"),t.k0s(),t.j41(16,"div"),t.EFF(17,"Checkout All for Booking"),t.k0s()()()(),t.j41(18,"button",40)(19,"app-icon"),t.EFF(20,"attachment"),t.k0s()(),t.j41(21,"mat-menu",null,8),t.DNE(23,bt,2,2,"a",41),t.k0s(),t.j41(24,"action-icon",42),t.bIt("click",function(){const i=t.eBV(e).row,o=t.XpG();return t.Njj(o.setExt(i,"remote",!i.extension_data.remote))}),t.k0s(),t.j41(25,"action-icon",43),t.bIt("click",function(){const i=t.eBV(e).row,o=t.XpG();return t.Njj(o.checkin(i))}),t.k0s(),t.j41(26,"action-icon",44),t.bIt("click",function(){const i=t.eBV(e).row,o=t.XpG();return t.Njj(o.checkout(i))}),t.k0s(),t.j41(27,"a",45)(28,"app-icon"),t.EFF(29,"email"),t.k0s()(),t.j41(30,"action-icon",46),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.printQRCode())}),t.k0s()()}if(2&s){const e=c.row,n=t.sdS(5),i=t.sdS(22),o=t.XpG();t.R7$(),t.AVh("pointer-events-none",!e.linked_event),t.Y8G("matMenuTriggerFor",n),t.R7$(),t.AVh("opacity-0",!e.linked_event),t.R7$(16),t.Y8G("disabled",!(null!=e.attachments&&e.attachments.length))("matMenuTriggerFor",i),t.R7$(5),t.Y8G("ngForOf",e.attachments),t.R7$(),t.Y8G("matTooltip",e.extension_data.remote?"Set as In-Person Visitor":"Set as Remote Visitior")("loading","remote"===o.loading)("content",e.extension_data.remote?"tap_and_play":"business"),t.R7$(),t.Y8G("loading","checkin"===o.loading)("state",null!=e&&e.checked_in?"success":""),t.R7$(),t.Y8G("loading","checkout"===o.loading),t.R7$(),t.Y8G("href","mailto:"+(null==e?null:e.asset_id),t.B4B)("matTooltip",(null==e?null:e.user_email)===(null==e?null:e.asset_id)?"Email Host":"Email Guest"),t.R7$(3),t.AVh("invisible",!o.can_print),t.Y8G("loading","printing"===o.loading)}}function Tt(s,c){if(1&s){const e=t.RV6();t.j41(0,"button",48),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.downloadVisitorList())}),t.j41(1,"app-icon"),t.EFF(2,"download"),t.k0s()()}}let A=(()=>{class s extends m.Tv{get columns(){return this._inductions_enabled?["state","date","asset_name","user_name","asset_id","status","induction","actions"]:["state","date","asset_name","user_name","asset_id","status","actions"]}get display_columns(){const e={state:"Checked In",date:"Time",asset_name:"Person",user_name:"Host",asset_id:"Email",id_data:"ID",status:"State",induction:"Inducted",actions:" "};return this.columns.map(n=>e[n]||n)}get column_sizes(){const e={state:"4.5r",date:"8r",asset_name:"12r",user_name:"12r",asset_id:"flex",id_data:"8r",status:"10r",actions:"16r",induction:"5r"};return this.columns.map(n=>e[n]||n)}get time_format(){return this._settings.time_format}constructor(e,n,i){var o;super(),o=this,this._state=e,this._settings=n,this._org=i,this.guests=this._state.filtered_bookings.pipe((0,M.M)(a=>console.log(a))),this.search=this._state.search,this.filters=this._state.filters,this._inductions_enabled=!1,this.downloadVisitorList=()=>this._state.downloadVisitorsList(),this.approveVisitor=a=>this._state.approveVisitor(a),this.declineVisitor=a=>this._state.declineVisitor(a),this.checkinAllVisitors=a=>this._state.setCheckinStateForEvent(a.linked_event?.id,!0),this.checkoutAllVisitors=a=>this._state.setCheckinStateForEvent(a.linked_event?.id,!1),this.setExt=(a,r,u)=>this._state.setExt(a,r,u),this.checkin=function(){var a=(0,_.A)(function*(r){yield o._state.setCheckinState(r,!0),o._state.poll()});return function(r){return a.apply(this,arguments)}}(),this.checkout=function(){var a=(0,_.A)(function*(r){yield o._state.setCheckinState(r,!1),o._state.poll()});return function(r){return a.apply(this,arguments)}}()}ngOnInit(){var e=this;this.subscription("building",this._org.active_building.subscribe(function(){var n=(0,_.A)(function*(i){if(!i)return;const o=e._settings.get("app.visitor_kiosk_app")||"visitor-kiosk_app",a=yield(0,q.bpY)(i.id,o).toPromise();e._inductions_enabled=a.details?.induction_enabled&&a.details?.induction_details});return function(i){return n.apply(this,arguments)}}()))}static#t=this.\u0275fac=function(n){return new(n||s)(t.rXU(y),t.rXU(m.h$),t.rXU(k.yb))};static#e=this.\u0275cmp=t.VBU({type:s,selectors:[["guest-listings"]],features:[t.Vt3],decls:20,vars:22,consts:[["state_template",""],["host_template",""],["id_template",""],["boolean_template",""],["status_template",""],["date_template",""],["action_template",""],["id_confirmation",""],["menu","matMenu"],["checkin_menu","matMenu"],[1,"w-full","flex","flex-col","flex-1","text-sm","h-full","overflow-auto","pb-20"],[1,"min-w-[80rem]",3,"dataSource","filter","columns","display_column","column_size","template","empty"],["class","bg-secondary hover:shadow-lg shadow absolute bottom-4 right-4 text-white h-12 w-12","matTooltip","Download Visitor List","matTooltipPosition","left","icon","","matRipple","",3,"click",4,"ngIf"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-base-400 text-neutral-content mx-auto","matTooltipPosition","right",3,"matTooltip",4,"ngIf"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-warning text-warning-content mx-auto","matTooltip","Not checked in","matTooltipPosition","right",4,"ngIf"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto","matTooltip","Checked In","matTooltipPosition","right",4,"ngIf"],["matTooltipPosition","right",1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-base-400","text-neutral-content","mx-auto",3,"matTooltip"],["matTooltip","Not checked in","matTooltipPosition","right",1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-warning","text-warning-content","mx-auto"],["matTooltip","Checked In","matTooltipPosition","right",1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-success","text-success-content","mx-auto"],["customTooltip","",3,"content"],["matRipple","","class","bg-success rounded-3xl px-4 py-2 text-white",4,"ngIf"],["matRipple","",1,"bg-success","rounded-3xl","px-4","py-2","text-white"],[1,"bg-base-100","rounded","p-2","flex","flex-col","space-y-2","my-2","w-[20rem]"],[1,"max-w-[20rem]","max-h-[20rem]","object-contain",3,"src"],["matRipple","",3,"click"],["matRipple","",1,"inverse","mt-2",3,"click"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto",4,"ngIf"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-warning text-warning-content mx-auto",4,"ngIf"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-error text-error-content mx-auto",4,"ngIf"],[1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-success","text-success-content","mx-auto"],[1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-warning","text-warning-content","mx-auto"],[1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-error","text-error-content","mx-auto"],["matRipple","",1,"rounded-3xl","bg-warning","text-warning-content","border-none",3,"matMenuTriggerFor","disabled"],[1,"flex","items-center"],[1,"mx-2"],[1,"text-2xl"],["mat-menu-item","",3,"click"],[1,"flex","items-center","justify-end"],["icon","","matRipple","",3,"matMenuTriggerFor"],[1,"flex","items-center","space-x-2"],["icon","","matRipple","","title","","matTooltip","View Attachments",3,"disabled","matMenuTriggerFor"],["mat-menu-item","",3,"href",4,"ngFor","ngForOf"],["remote","",3,"click","matTooltip","loading","content"],["checkin","","matTooltip","Checkin Guest","content","event_available",3,"click","loading","state"],["checkout","","matTooltip","Checkout Guest","content","event_busy",3,"click","loading"],["icon","","matRipple","",3,"href","matTooltip"],["matTooltip","Print QR Code","content","event_busy",3,"click","loading"],["mat-menu-item","",3,"href"],["matTooltip","Download Visitor List","matTooltipPosition","left","icon","","matRipple","",1,"bg-secondary","hover:shadow-lg","shadow","absolute","bottom-4","right-4","text-white","h-12","w-12",3,"click"]],template:function(n,i){if(1&n&&(t.j41(0,"div",10),t.nrm(1,"custom-table",11),t.nI1(2,"async"),t.nI1(3,"async"),t.k0s(),t.DNE(4,ct,3,3,"ng-template",null,0,t.C5r)(6,ut,1,1,"ng-template",null,1,t.C5r)(8,pt,4,2,"ng-template",null,2,t.C5r)(10,ft,3,3,"ng-template",null,3,t.C5r)(12,vt,12,17,"ng-template",null,4,t.C5r)(14,xt,3,6,"ng-template",null,5,t.C5r)(16,Ct,31,19,"ng-template",null,6,t.C5r)(18,Tt,3,0,"button",12),t.nI1(19,"async")),2&n){let o;const a=t.sdS(5),r=t.sdS(7),u=t.sdS(9),g=t.sdS(11),w=t.sdS(13),Dt=t.sdS(15),Xt=t.sdS(17);t.R7$(),t.Y8G("dataSource",i.guests)("filter",t.bMT(2,8,i.search))("columns",i.columns)("display_column",i.display_columns)("column_size",i.column_sizes)("template",t.sGs(14,ot,a,w,Dt,r,u,Xt,g))("empty",t.bMT(3,10,i.search)?"No matching visitors":"There are visitors for the currently selected date."),t.R7$(17),t.Y8G("ngIf",null==(o=t.bMT(19,12,i.guests))?null:o.length)}},dependencies:[p.Sq,p.bT,I.kk,I.fb,I.Cp,tt.oV,j.r6,et.X,nt.R,it.r,st.I,p.Jj,p.vh]})}return s})();const kt=["app-visitors",""];function yt(s,c){1&s&&t.nrm(0,"mat-progress-bar",4)}let jt=(()=>{class s{constructor(e){this._state=e,this.loading=this._state.loading,this.filters=this._state.filters}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}static#t=this.\u0275fac=function(n){return new(n||s)(t.rXU(y))};static#e=this.\u0275cmp=t.VBU({type:s,selectors:[["","app-visitors",""]],attrs:kt,decls:6,vars:3,consts:[[1,"relative","w-full","flex","flex-col","bg-base-200"],[1,"w-full"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(n,i){1&n&&(t.nrm(0,"sidebar"),t.j41(1,"main",0),t.nrm(2,"visitors-topbar",1)(3,"guest-listings",2),t.DNE(4,yt,1,0,"mat-progress-bar",3),t.nI1(5,"async"),t.k0s()),2&n&&(t.R7$(4),t.Y8G("ngIf",t.bMT(5,1,i.loading)))},dependencies:[p.bT,J.k,D.HM,Q,A,p.Jj],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}\n\n/*# sourceMappingURL=visitors.component.ts-angular-inline--113.css.map*/"]})}return s})();var wt=l(68874);let Ft=(()=>{class s{constructor(e){this._dialog_ref=e}onDone(){this._dialog_ref.close()}static#t=this.\u0275fac=function(n){return new(n||s)(t.rXU(V.CP))};static#e=this.\u0275cmp=t.VBU({type:s,selectors:[["invite-visitor-modal"]],decls:2,vars:0,consts:[[1,"relative","min-w-[40rem]","min-h-[40rem]"],[3,"done"]],template:function(n,i){1&n&&(t.j41(0,"main",0)(1,"invite-visitor-form",1),t.bIt("done",function(){return i.onDone()}),t.k0s()())},dependencies:[wt.j]})}return s})();var Gt=l(45189),Vt=l(96843),It=l(56062);const Et=["app-new-visitors",""];function Mt(s,c){if(1&s&&(t.j41(0,"div",18),t.EFF(1),t.nI1(2,"building"),t.j41(3,"span",19),t.EFF(4," - "),t.k0s()()),2&s){let e;const n=t.XpG().$implicit;t.R7$(),t.SpI(" ",null==(e=t.bMT(2,1,n.parent_id))?null:e.display_name," ")}}function Rt(s,c){if(1&s&&(t.j41(0,"mat-option",15)(1,"div",16),t.DNE(2,Mt,5,3,"div",17),t.j41(3,"div"),t.EFF(4),t.k0s()()()),2&s){const e=c.$implicit,n=t.XpG();t.Y8G("value",e.id),t.R7$(2),t.Y8G("ngIf",n.use_region),t.R7$(2),t.SpI(" ",e.display_name||e.name," ")}}function St(s,c){1&s&&t.nrm(0,"mat-progress-bar",20)}const $t=[{path:"",component:jt},{path:"new",component:(()=>{class s{get use_region(){return!!this._settings.get("app.use_region")}constructor(e,n,i,o,a,r){this._state=e,this._org=n,this._router=i,this._route=o,this._dialog=a,this._settings=r,this.loading=this._state.loading,this.filters=this._state.filters,this.zones=[],this.levels=(0,C.zV)([this._org.active_building,this._org.active_region]).pipe((0,R.T)(([u,g])=>this._settings.get("app.use_region")?this._org.levelsForRegion(g):this._org.levelsForBuilding(u))),this.setDate=u=>this._state.setFilters({date:u}),this.setFilters=u=>this._state.setFilters(u),this.setSearch=u=>this._state.setSearchString(u),this.updateZones=u=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:u.join(",")}}),this._state.setFilters({zones:u})}}inviteVisitor(){this._dialog.open(Ft)}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}static#t=this.\u0275fac=function(n){return new(n||s)(t.rXU(y),t.rXU(k.yb),t.rXU(f.Ix),t.rXU(f.nX),t.rXU(V.bZ),t.rXU(m.h$))};static#e=this.\u0275cmp=t.VBU({type:s,selectors:[["","app-new-visitors",""]],attrs:Et,decls:23,vars:9,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"flex","items-center","px-8","py-4","space-x-2"],[1,"text-2xl","font-medium"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange"],["btn","","matRipple","",3,"click"],[1,"flex","items-center","px-8","pb-4"],["appearance","outline",1,"no-subscript","w-60"],["placeholder","All Levels","multiple","",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[3,"dateChange"],[1,"px-8"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],[3,"value"],[1,"flex","flex-col-reverse"],["class","text-xs opacity-30",4,"ngIf"],[1,"text-xs","opacity-30"],[1,"opacity-0"],["mode","indeterminate",1,"w-full"]],template:function(n,i){if(1&n&&(t.nrm(0,"app-topbar"),t.j41(1,"div",0),t.nrm(2,"app-sidebar"),t.j41(3,"main",1)(4,"div",2)(5,"h2",3),t.EFF(6,"Visitors"),t.k0s(),t.nrm(7,"div",4),t.j41(8,"searchbar",5),t.bIt("modelChange",function(a){return i.setSearch(a)}),t.k0s(),t.j41(9,"button",6),t.bIt("click",function(){return i.inviteVisitor()}),t.EFF(10," Invite Visitor "),t.k0s()(),t.j41(11,"div",7)(12,"mat-form-field",8)(13,"mat-select",9),t.nI1(14,"async"),t.bIt("ngModelChange",function(a){return i.updateZones(a)}),t.DNE(15,Rt,5,3,"mat-option",10),t.nI1(16,"async"),t.k0s()(),t.nrm(17,"div",4),t.j41(18,"date-options",11),t.bIt("dateChange",function(a){return i.setDate(a)}),t.k0s()(),t.j41(19,"div",12),t.nrm(20,"guest-listings",13),t.k0s(),t.DNE(21,St,1,0,"mat-progress-bar",14),t.nI1(22,"async"),t.k0s()()),2&n){let o;t.R7$(13),t.Y8G("ngModel",null==(o=t.bMT(14,3,i.filters))?null:o.zones),t.R7$(2),t.Y8G("ngForOf",t.bMT(16,5,i.levels)),t.R7$(6),t.Y8G("ngIf",t.bMT(22,7,i.loading))}},dependencies:[p.Sq,p.bT,h.BC,h.vS,X.o,N.x,Gt.S,Vt.c,P.rl,Y.VO,j.wT,D.HM,j.r6,A,p.Jj,It.b],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}\n\n/*# sourceMappingURL=new-visitors.component.ts-angular-inline--115.css.map*/"]})}return s})()}];let Lt=(()=>{class s{static#t=this.\u0275fac=function(n){return new(n||s)};static#e=this.\u0275mod=t.$C({type:s});static#n=this.\u0275inj=t.G2t({imports:[p.MD,h.YN,F.r,x.SG,f.iI.forChild($t)]})}return s})()},68390:(U,b,l)=>{l.d(b,{g8:()=>_,kR:()=>p.k,Gp:()=>v.Gp,N8:()=>T.N8,SZ:()=>T.SZ,is:()=>G.is});var p=l(11081),F=(l(11543),l(7282),l(67450));class _{constructor(d={}){this.type=d.type||d.location||"other",this.position=d.position||d.map_id||d.asset_id||{x:d.x/d.map_width||0,y:d.y/d.map_height||0},this.variance=d.variance||0,this.last_seen=d.last_seen||(0,F.A)(new Date),this.level=d.level,this.building=d.building,this.at_location=!!d.at_location,this.coordinates_from=d.coordinates_from||"top-left"}}var v=l(93693),G=(l(24129),l(86039)),T=l(2372)}}]);
//# sourceMappingURL=apps_concierge_src_app_visitors_visitors_module_ts.js.map