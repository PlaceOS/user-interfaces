"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_visitors_visitors_module_ts"],{33675:(U,F,l)=>{l.r(F),l.d(F,{VisitorsModule:()=>Kt});var m=l(60316),f=l(34456),v=l(26842),G=l(40363),_=l(89204),x=l(90521),k=l(42175),I=l(71536),C=l(8627),E=l(19803),p=l(71963),A=l(29314),B=l(66e3),z=l(7841),R=l(35443),M=l(33602),O=l(27419),Z=l(88402),$=l(67450),S=l(83866),u=l(82333),H=l(68390),h=l(57915),j=l(12185),t=l(68559),J=l(97024),w=l(12587),b=l(85060);let K=(()=>{class n{get induction_details(){return this._settings.get("app.induction_details")}get is_enabled(){return this._settings.get("app.induction_enabled")&&this._settings.get("app.induction_details")}constructor(e){this._settings=e,this.agree=!1}static#t=this.\u0275fac=function(i){return new(i||n)(t.rXU(u.h$))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["visitor-induction-modal"]],decls:12,vars:5,consts:[[1,"relative","bg-base-100","rounded","shadow","overflow-hidden","flex","flex-col","items-center","w-[32rem]","p-4"],[1,"my-4"],[1,"rounded","border","border-base-300","w-full","p-4","opacity-60","text-sm","overflow-y-auto","overflow-x-hidden","max-h-[50vh]","whitespace-pre-wrap"],[1,"my-4",3,"ngModelChange","ngModel"],[1,"flex","items-center","justify-center","space-x-2"],["btn","","matRipple","",1,"w-32","clear","underline",3,"mat-dialog-close"],["btn","","matRipple","",1,"w-32",3,"disabled","mat-dialog-close"]],template:function(i,s){1&i&&(t.j41(0,"div",0)(1,"p",1),t.EFF(2," Please read the induction information below before proceeding "),t.k0s(),t.j41(3,"div",2),t.EFF(4),t.k0s(),t.j41(5,"mat-checkbox",3),t.mxI("ngModelChange",function(a){return t.DH7(s.agree,a)||(s.agree=a),a}),t.EFF(6," I agree "),t.k0s(),t.j41(7,"div",4)(8,"button",5),t.EFF(9," Decline "),t.k0s(),t.j41(10,"button",6),t.EFF(11," Accept "),t.k0s()()()),2&i&&(t.R7$(4),t.SpI(" ",s.induction_details," "),t.R7$(),t.R50("ngModel",s.agree),t.R7$(3),t.Y8G("mat-dialog-close",!1),t.R7$(2),t.Y8G("disabled",!s.agree)("mat-dialog-close",!0))},dependencies:[f.BC,f.vS,J.So,w.tx,b.r6]})}return n})(),y=(()=>{class n extends u.Tv{get search(){return this._search.getValue()}get time_format(){return this._settings.time_format}constructor(e,i,s){super(),this._dialog=e,this._org=i,this._settings=s,this._poll=new x.t(0),this._filters=new x.t({}),this._search=new x.t(""),this._loading=new x.t(!1),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.bookings=(0,k.zV)([this._org.active_building,this._filters,this._poll]).pipe((0,C.p)(([o])=>!!o),(0,E.B)(150),(0,p.n)(([o,a])=>{this._loading.next(!0);const c=a.date?new Date(a.date):new Date,d=(0,O.A)(c),g=(0,Z.A)(d,a.period||1);return(0,h.tj)({type:"visitor",period_start:(0,$.A)(d),period_end:(0,$.A)(g),zones:(a.zones||[]).join(",")||o.id,include_checked_out:!0,limit:1e3}).pipe((0,A.W)(T=>(0,I.of)([])))}),(0,B.M)(()=>this._loading.next(!1)),(0,z.t)(1)),this.filtered_bookings=(0,k.zV)([this._search,this.bookings]).pipe((0,R.T)(([o,a])=>{const c=o.toLowerCase();return a.filter(g=>g.asset_name?.toLowerCase().includes(c)||g.user_name?.toLowerCase().includes(c)||g.user_email?.toLowerCase().includes(c)||g.asset_id?.toLowerCase().includes(c)).sort((g,T)=>g.date-T.date)}))}setFilters(e){this._filters.next({...this._filters.getValue(),...e})}setSearchString(e){this._search.next(e)}poll(){this._poll.next(Date.now())}startPolling(e=3e4){this.interval("poll",()=>this._poll.next(Date.now()),e)}stopPolling(){this.clearInterval("poll")}setExt(e,i,s){var o=this;return(0,_.A)(function*(){const a={...e.extension_data};a[i]=s,yield(0,H.is)(e.id,{...e,extension_data:a}).toPromise(),o._poll.next(Date.now())})()}approveVisitor(e){var i=this;return(0,_.A)(function*(){const s=yield(0,u.GE)({title:"Approve Visitor",content:`Approve attendance of ${e.asset_name||e.asset_id} to their meeting?`,icon:{content:"event_available"}},i._dialog);if("done"!==s.reason)return s.close();s.loading("Updating guest details"),yield(0,h.DD)(e.id).toPromise().catch(o=>{throw(0,u.UG)(`Error approving visitor: ${o.message||o.error||o}`),s.close(),o}),(0,u.VX)("Successfully approved visitor"),i._poll.next(Date.now()),s.close()})()}declineVisitor(e){var i=this;return(0,_.A)(function*(){const s=yield(0,u.GE)({title:"Decline Visitor",content:`Decline attendance of ${e.asset_name||e.asset_id} to their meeting?`,icon:{content:"event_available"}},i._dialog);if("done"!==s.reason)return s.close();s.loading("Updating guest details"),yield(0,h.vB)(e.id).toPromise().catch(o=>{throw(0,u.UG)(`Error declining visitor: ${o.message||o.error||o}`),s.close(),o}),(0,u.VX)("Successfully declining visitor"),i._poll.next(Date.now()),s.close()})()}requestInduction(e){var i=this;return(0,_.A)(function*(){const o=yield i._dialog.open(K,{data:{item:e}}).afterClosed().toPromise();if(!o)throw!1===o&&(yield(0,h.tl)(e.id,"declined_induction").toPromise()),"User declined";yield(0,h.tl)(e.id,"inducted").toPromise(),yield(0,h.vq)(e.id,{...e,induction:!0})})()}setCheckinState(e,i=!0){var s=this;return(0,_.A)(function*(){if(e.rejected)throw"You cannot check in a rejected meeting";!0===i&&(yield s.requestInduction(e)),!e.approved&&!0===i&&(yield(0,h.DD)(e.id).toPromise()),yield(0,h.Z$)(e.id,i).toPromise().catch(a=>{throw(0,u.UG)(`Error checking ${i?"in":"out"} ${e.asset_name||e.asset_id} for ${e.user_name}'s meeting`),a}),(0,u.VX)(`Successfully checked ${i?"in":"out"} ${e.asset_name||e.asset_id} from ${e.user_name}'s meeting`)})()}setCheckinStateForEvent(e,i=!0){var s=this;return(0,_.A)(function*(){if(!e)return;const a=(yield s.bookings.pipe((0,M.s)(1)).toPromise()).filter(c=>c.parent_id===e||c.extension_data.parent_id===e||c.linked_event?.id===e||c.linked_event?.event_id===e);a.length&&(yield Promise.all(a.map(c=>(0,h.Z$)(c.id,i).toPromise().catch(d=>{throw(0,u.UG)(`Error checking ${i?"in":"out"} ${c.asset_name||c.asset_id} for ${c.user_name}'s meeting`),d}))),(0,u.VX)(`Successfully checked ${i?"in":"out"} all visitors from ${a[0].user_name}'s meeting`),s._poll.next(Date.now()))})()}downloadVisitorsList(){var e=this;return(0,_.A)(function*(){const i=yield e.filtered_bookings.pipe((0,M.s)(1)).toPromise();if(!i.length)return;const{date:s}=e._filters.getValue(),o=i.map(c=>({Name:c.asset_name,Email:c.asset_id,"Checked In":c.checked_in,Host:c.user_email||"",Status:c.status,Date:(0,S.A)(c.date,"dd MMM "+e.time_format)})),a=(0,u.SL)(o);(0,u.PE)(`visitor-list-${(0,S.A)(s||Date.now(),"MMM-dd")}.csv`,a)})()}static#t=this.\u0275fac=function(i){return new(i||n)(t.KVO(w.bZ),t.KVO(j.yb),t.KVO(u.h$))};static#e=this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var W=l(74605),D=l(26354),Q=l(57871),L=l(94584),X=l(12236),N=l(24950),P=l(25175);function q(n,r){if(1&n&&(t.j41(0,"mat-option",5),t.EFF(1),t.k0s()),2&n){const e=r.$implicit;t.Y8G("value",e.id),t.R7$(),t.SpI(" ",e.display_name||e.name," ")}}let tt=(()=>{class n extends u.Tv{constructor(e,i,s,o){super(),this._state=e,this._org=i,this._route=s,this._router=o,this.zones=[],this.levels=this._org.active_levels,this.filters=this._state.filters,this.setDate=a=>this._state.setFilters({date:a}),this.setFilters=a=>this._state.setFilters(a),this.setSearch=a=>this._state.setSearchString(a),this.updateZones=a=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:a.join(",")}}),this._state.setFilters({zones:a})}}ngOnInit(){var e=this;return(0,_.A)(function*(){yield e._org.initialised.pipe((0,Q.$)(i=>i)).toPromise(),e.subscription("route.query",e._route.queryParamMap.subscribe(i=>{if(i.has("zone_ids")){const s=i.get("zone_ids").split(",");if(s.length){const o=e._org.levelWithID(s);if(e.zones=s,!o)return;e._org.building=e._org.buildings.find(a=>a.id===o.parent_id)}}})),e.subscription("levels",e._org.active_levels.subscribe(i=>{e.zones=e.zones.filter(s=>i.find(o=>o.id===s)),!e.zones.length&&i.length&&e.zones.push(i[0].id),e.updateZones(e.zones)})),e.setSearch("")})()}static#t=this.\u0275fac=function(i){return new(i||n)(t.rXU(y),t.rXU(j.yb),t.rXU(v.nX),t.rXU(v.Ix))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["visitors-topbar"]],features:[t.Vt3],decls:17,vars:10,consts:[[1,"flex","items-center","bg-base-100","h-20","px-4","border-b","border-base-200","space-x-2"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Viewing Period",3,"ngModelChange","ngModel"],[3,"value"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange"],[3,"dateChange"]],template:function(i,s){if(1&i&&(t.j41(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),t.mxI("ngModelChange",function(a){return t.DH7(s.zones,a)||(s.zones=a),a}),t.bIt("ngModelChange",function(a){return s.updateZones(a)}),t.DNE(3,q,2,2,"mat-option",3),t.nI1(4,"async"),t.k0s()(),t.j41(5,"mat-form-field",1)(6,"mat-select",4),t.nI1(7,"async"),t.bIt("ngModelChange",function(a){return s.setFilters({period:a})}),t.j41(8,"mat-option",5),t.EFF(9,"Show Day"),t.k0s(),t.j41(10,"mat-option",5),t.EFF(11,"Show Week"),t.k0s(),t.j41(12,"mat-option",5),t.EFF(13,"Show Month"),t.k0s()()(),t.nrm(14,"div",6),t.j41(15,"searchbar",7),t.bIt("modelChange",function(a){return s.setSearch(a)}),t.k0s(),t.j41(16,"date-options",8),t.bIt("dateChange",function(a){return s.setDate(a)}),t.k0s()()),2&i){let o;t.R7$(2),t.R50("ngModel",s.zones),t.R7$(),t.Y8G("ngForOf",t.bMT(4,6,s.levels)),t.R7$(3),t.Y8G("ngModel",(null==(o=t.bMT(7,8,s.filters))?null:o.period)||1),t.R7$(2),t.Y8G("value",1),t.R7$(2),t.Y8G("value",7),t.R7$(2),t.Y8G("value",30)}},dependencies:[m.Sq,f.BC,f.vS,L.o,X.x,N.rl,P.VO,b.wT,m.Jj],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n\n/*# sourceMappingURL=visitors-topbar.component.ts-angular-inline--113.css.map*/"]})}return n})();var et=l(3998),V=l(31034),nt=l(80640),it=l(69434),st=l(22238),ot=l(88328);const at=n=>({key:"state",name:"Checked In",content:n,size:"6.5rem",sortable:!1}),lt=n=>({key:"date",name:"Time",content:n,size:"6rem"}),rt=n=>({key:"asset_name",name:"Visitor",content:n}),ct=n=>({key:"user_name",name:"Host",content:n}),dt=n=>({key:"status",name:"State",content:n,size:"9.5rem"}),ut=(n,r)=>({key:"induction",name:"Inducted",content:n,show:r,size:"5.5rem"}),pt=n=>({key:"actions",name:" ",content:n,size:"3.25rem",sortable:!1}),mt=(n,r,e,i,s,o,a)=>[n,r,e,i,s,o,a];function _t(n,r){if(1&n&&(t.j41(0,"div",17),t.nI1(1,"date"),t.j41(2,"app-icon"),t.EFF(3,"done"),t.k0s()()),2&n){const e=t.XpG().row,i=t.XpG();t.Y8G("matTooltip","Checked out at "+t.i5U(1,1,e.checked_out_at,i.time_format))}}function gt(n,r){1&n&&(t.j41(0,"div",18)(1,"app-icon"),t.EFF(2,"question_mark"),t.k0s()())}function ht(n,r){1&n&&(t.j41(0,"div",19)(1,"app-icon"),t.EFF(2,"done"),t.k0s()())}function ft(n,r){if(1&n&&t.DNE(0,_t,4,4,"div",14)(1,gt,3,0,"div",15)(2,ht,3,0,"div",16),2&n){const e=r.row;t.Y8G("ngIf",!(null!=e&&e.checked_in)&&e.checked_out_at),t.R7$(),t.Y8G("ngIf",!(null!=e&&e.checked_in||e.checked_out_at)),t.R7$(),t.Y8G("ngIf",null==e?null:e.checked_in)}}function vt(n,r){if(1&n&&(t.j41(0,"div",22),t.EFF(1),t.k0s()),2&n){const e=t.XpG().row;t.R7$(),t.SpI(" ",e.asset_id," ")}}function xt(n,r){if(1&n&&(t.j41(0,"div",20)(1,"div"),t.EFF(2),t.k0s(),t.DNE(3,vt,2,1,"div",21),t.k0s()),2&n){const e=r.row;t.R7$(2),t.JRh(e.asset_name||e.asset_id),t.R7$(),t.Y8G("ngIf",e.asset_name&&e.asset_id)}}function bt(n,r){if(1&n&&(t.j41(0,"div",22),t.EFF(1),t.k0s()),2&n){const e=t.XpG().row;t.R7$(),t.SpI(" ",e.user_email," ")}}function Ft(n,r){if(1&n&&(t.j41(0,"div",20)(1,"div"),t.EFF(2),t.k0s(),t.DNE(3,bt,2,1,"div",21),t.k0s()),2&n){const e=r.row;t.R7$(2),t.JRh(e.user_name||e.user_email),t.R7$(),t.Y8G("ngIf",e.user_name&&e.user_email)}}function kt(n,r){if(1&n&&(t.j41(0,"button",25),t.EFF(1),t.k0s()),2&n){const e=t.XpG().row;t.R7$(),t.SpI(" ",null!=e.extension_data&&e.extension_data.id_confirmed?"Confirmed":!1===(null==e.extension_data?null:e.extension_data.id_confirmed)?"Rejected":"Submitted"," ")}}function Ct(n,r){if(1&n){const e=t.RV6();t.j41(0,"div",26),t.nrm(1,"img",27),t.j41(2,"button",28),t.bIt("click",function(){t.eBV(e);const s=t.XpG().row,o=t.XpG();return t.Njj(o.setExt(s,"id_confirmed",!0))}),t.EFF(3," Confirm ID "),t.k0s(),t.j41(4,"button",29),t.bIt("click",function(){t.eBV(e);const s=t.XpG().row,o=t.XpG();return t.Njj(o.setExt(s,"id_confirmed",!1))}),t.EFF(5," Reject ID "),t.k0s()()}if(2&n){const e=t.XpG().row;t.R7$(),t.Y8G("src",null==e.extension_data||null==e.extension_data.id_data?null:e.extension_data.id_data.url,t.B4B)}}function jt(n,r){if(1&n&&(t.j41(0,"div",23),t.DNE(1,kt,2,1,"button",24),t.k0s(),t.DNE(2,Ct,6,1,"ng-template",null,8,t.C5r)),2&n){const e=r.row,i=t.sdS(3);t.Y8G("content",i),t.R7$(),t.Y8G("ngIf",null==e.extension_data||null==e.extension_data.id_data?null:e.extension_data.id_data.url)}}function wt(n,r){1&n&&(t.j41(0,"div",33)(1,"app-icon"),t.EFF(2,"done"),t.k0s()())}function yt(n,r){1&n&&(t.j41(0,"div",34)(1,"app-icon"),t.EFF(2,"question_mark"),t.k0s()())}function Tt(n,r){1&n&&(t.j41(0,"div",35)(1,"app-icon"),t.EFF(2,"close"),t.k0s()())}function Gt(n,r){if(1&n&&t.DNE(0,wt,3,0,"div",30)(1,yt,3,0,"div",31)(2,Tt,3,0,"div",32),2&n){const e=r.row,i=t.XpG();t.Y8G("ngIf",i.inducted(e)),t.R7$(),t.Y8G("ngIf",null===i.inducted(e)),t.R7$(),t.Y8G("ngIf",!1===i.inducted(e))}}function It(n,r){1&n&&(t.j41(0,"app-icon",43),t.EFF(1," arrow_drop_down "),t.k0s())}function Vt(n,r){if(1&n){const e=t.RV6();t.j41(0,"div",36)(1,"button",37)(2,"div",38)(3,"div",39),t.EFF(4),t.k0s(),t.DNE(5,It,2,0,"app-icon",40),t.k0s()()(),t.j41(6,"mat-menu",null,9)(8,"button",41),t.bIt("click",function(){const s=t.eBV(e).row,o=t.XpG();return t.Njj(o.approveVisitor(s))}),t.j41(9,"div",42)(10,"app-icon",43),t.EFF(11,"event_available"),t.k0s(),t.j41(12,"div",44),t.EFF(13,"Approve Visitor"),t.k0s()()(),t.j41(14,"button",41),t.bIt("click",function(){const s=t.eBV(e).row,o=t.XpG();return t.Njj(o.declineVisitor(s))}),t.j41(15,"div",42)(16,"app-icon",45),t.EFF(17," event_busy "),t.k0s(),t.j41(18,"div",44),t.EFF(19,"Decline Visitor"),t.k0s()()()()}if(2&n){const e=r.row,i=t.sdS(7);t.R7$(),t.AVh("!text-success-content","approved"===(null==e?null:e.status))("!bg-success","approved"===(null==e?null:e.status))("!text-error-content","declined"===(null==e?null:e.status))("!bg-error","declined"===(null==e?null:e.status))("!text-neutral-content","ended"===(null==e?null:e.status))("!bg-neutral","ended"===(null==e?null:e.status))("opacity-30","ended"===(null==e?null:e.status)),t.Y8G("matMenuTriggerFor",i)("disabled","ended"===(null==e?null:e.status)||e.checked_in&&!e.checked_out_at),t.R7$(3),t.SpI(" ","ended"===(null==e?null:e.status)?"Ended":"approved"===(null==e?null:e.status)?"Approved":"declined"===(null==e?null:e.status)?"Declined":"Pending"," "),t.R7$(),t.Y8G("ngIf",!("ended"===(null==e?null:e.status)||e.checked_in&&!e.checked_out_at))}}function Et(n,r){if(1&n&&(t.j41(0,"div",36),t.EFF(1),t.nI1(2,"async"),t.nI1(3,"date"),t.k0s()),2&n){let e;const i=r.row,s=t.XpG();t.R7$(),t.SpI(" ",t.i5U(3,3,i.date,(null==(e=t.bMT(2,1,s.filters))?null:e.period)>1?"MMM d, "+s.time_format:s.time_format)," ")}}function Rt(n,r){if(1&n&&(t.j41(0,"a",51),t.EFF(1),t.k0s()),2&n){const e=r.$implicit;t.Y8G("href",e.url,t.B4B),t.R7$(),t.SpI(" ",e.name," ")}}function Mt(n,r){if(1&n){const e=t.RV6();t.j41(0,"button",41),t.bIt("click",function(){t.eBV(e);const s=t.XpG(2);return t.Njj(s.printQRCode())}),t.j41(1,"div",42)(2,"app-icon",43),t.EFF(3,"print"),t.k0s(),t.j41(4,"div"),t.EFF(5,"Print QR Code"),t.k0s()()()}}function $t(n,r){if(1&n){const e=t.RV6();t.qex(0),t.j41(1,"button",41),t.bIt("click",function(){t.eBV(e);const s=t.XpG().row,o=t.XpG();return t.Njj(o.checkinAllVisitors(s))}),t.j41(2,"div",42)(3,"app-icon",43),t.EFF(4," event_available "),t.k0s(),t.j41(5,"div"),t.EFF(6,"Checkin all for Meeting"),t.k0s()()(),t.j41(7,"button",41),t.bIt("click",function(){t.eBV(e);const s=t.XpG().row,o=t.XpG();return t.Njj(o.checkoutAllVisitors(s))}),t.j41(8,"div",42)(9,"app-icon",45),t.EFF(10," event_busy "),t.k0s(),t.j41(11,"div"),t.EFF(12,"Checkout all for Meeting"),t.k0s()()(),t.bVm()}}function St(n,r){if(1&n){const e=t.RV6();t.j41(0,"div",46)(1,"button",47)(2,"app-icon"),t.EFF(3,"more_horiz"),t.k0s()(),t.j41(4,"mat-menu",null,10)(6,"button",48)(7,"div",42)(8,"app-icon",43),t.EFF(9,"attachment"),t.k0s(),t.j41(10,"div"),t.EFF(11,"View Attachments"),t.k0s()()(),t.j41(12,"mat-menu",null,9),t.DNE(14,Rt,2,2,"a",49),t.k0s(),t.j41(15,"button",41),t.bIt("click",function(){const s=t.eBV(e).row,o=t.XpG();return t.Njj(o.setExt(s,"remote",!0))}),t.j41(16,"div",42)(17,"app-icon",43),t.EFF(18),t.k0s(),t.j41(19,"div"),t.EFF(20),t.k0s()()(),t.DNE(21,Mt,6,0,"button",50),t.j41(22,"a",51)(23,"div",42)(24,"app-icon",43),t.EFF(25,"email"),t.k0s(),t.j41(26,"div"),t.EFF(27),t.k0s()()(),t.j41(28,"button",41),t.bIt("click",function(){const s=t.eBV(e).row,o=t.XpG();return t.Njj(s.checked_in?o.checkout(s):o.checkin(s))}),t.j41(29,"div",42)(30,"app-icon",43),t.EFF(31),t.k0s(),t.j41(32,"div"),t.EFF(33),t.k0s()()(),t.DNE(34,$t,13,0,"ng-container",52),t.k0s()()}if(2&n){const e=r.row,i=t.sdS(5),s=t.XpG();t.R7$(),t.Y8G("matMenuTriggerFor",i),t.R7$(5),t.Y8G("disabled",!(null!=e.attachment&&e.attachment.length))("matMenuTriggerFor",s.attachment_menu),t.R7$(8),t.Y8G("ngForOf",e.attachments),t.R7$(4),t.SpI(" ",e.extension_data.remote?"business":"laptop"," "),t.R7$(2),t.SpI(" Set as ",e.extension_data.remote?"Onsite":"Remote"," Visitor "),t.R7$(),t.Y8G("ngIf",s.can_print),t.R7$(),t.Y8G("href","mailto:"+(null==e?null:e.asset_id),t.B4B),t.R7$(5),t.SpI(" Email ",(null==e?null:e.user_email)===(null==e?null:e.asset_id)?"Host":"Guest"," "),t.R7$(4),t.SpI(" ",e.checked_in?"event_busy":"event_available"," "),t.R7$(2),t.SpI(" ",e.checked_in?"Checkout":"Checkin"," Guest "),t.R7$(),t.Y8G("ngIf",e.linked_event)}}function Dt(n,r){if(1&n){const e=t.RV6();t.j41(0,"button",53),t.bIt("click",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.downloadVisitorList())}),t.j41(1,"app-icon"),t.EFF(2,"download"),t.k0s()()}}let Y=(()=>{class n extends u.Tv{get time_format(){return this._settings.time_format}inducted(e){return!e.process_state.includes("declined")&&(!(!e.process_state.includes("inducted")&&!e.induction)||null)}constructor(e,i,s){var o;super(),o=this,this._state=e,this._settings=i,this._org=s,this.guests=this._state.filtered_bookings,this.search=this._state.search,this.filters=this._state.filters,this.inductions_enabled=!1,this.downloadVisitorList=()=>this._state.downloadVisitorsList(),this.approveVisitor=a=>this._state.approveVisitor(a),this.declineVisitor=a=>this._state.declineVisitor(a),this.checkinAllVisitors=a=>this._state.setCheckinStateForEvent(a.linked_event?.id,!0),this.checkoutAllVisitors=a=>this._state.setCheckinStateForEvent(a.linked_event?.id,!1),this.setExt=(a,c,d)=>this._state.setExt(a,c,d),this.checkin=function(){var a=(0,_.A)(function*(c){yield o._state.setCheckinState(c,!0).catch(d=>{throw"User declined"!==d&&(0,u.UG)(d),d}),o._state.poll()});return function(c){return a.apply(this,arguments)}}(),this.checkout=function(){var a=(0,_.A)(function*(c){yield o._state.setCheckinState(c,!1),o._state.poll()});return function(c){return a.apply(this,arguments)}}()}ngOnInit(){var e=this;this.subscription("building",this._org.active_building.subscribe(function(){var i=(0,_.A)(function*(s){if(!s)return;const o=e._settings.get("app.visitor_kiosk_app")||"visitor-kiosk_app",a=yield(0,et.bpY)(s.id,o).toPromise();e.inductions_enabled=a.details?.induction_enabled&&a.details?.induction_details});return function(s){return i.apply(this,arguments)}}()))}static#t=this.\u0275fac=function(i){return new(i||n)(t.rXU(y),t.rXU(u.h$),t.rXU(j.yb))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["guest-listings"]],features:[t.Vt3],decls:21,vars:32,consts:[["state_template",""],["person_template",""],["host_template",""],["id_template",""],["boolean_template",""],["status_template",""],["date_template",""],["action_template",""],["id_confirmation",""],["menu","matMenu"],["guest_menu","matMenu"],[1,"min-w-[60rem]","block","text-sm",3,"data","columns","filter","sortable"],["class","bg-secondary hover:shadow-lg shadow absolute bottom-4 right-4 text-white h-12 w-12","matTooltip","Download Visitor List","matTooltipPosition","left","icon","","matRipple","",3,"click",4,"ngIf"],[1,"w-full","h-8"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-base-400 text-neutral-content mx-auto","matTooltipPosition","right",3,"matTooltip",4,"ngIf"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-warning text-warning-content mx-auto","matTooltip","Not checked in","matTooltipPosition","right",4,"ngIf"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto","matTooltip","Checked In","matTooltipPosition","right",4,"ngIf"],["matTooltipPosition","right",1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-base-400","text-neutral-content","mx-auto",3,"matTooltip"],["matTooltip","Not checked in","matTooltipPosition","right",1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-warning","text-warning-content","mx-auto"],["matTooltip","Checked In","matTooltipPosition","right",1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-success","text-success-content","mx-auto"],[1,"px-4","py-2"],["class","opacity-30 text-xs",4,"ngIf"],[1,"opacity-30","text-xs"],["customTooltip","",3,"content"],["matRipple","","class","bg-success rounded-3xl px-4 py-2 text-white",4,"ngIf"],["matRipple","",1,"bg-success","rounded-3xl","px-4","py-2","text-white"],[1,"bg-base-100","rounded","p-2","flex","flex-col","space-y-2","my-2","w-[20rem]"],[1,"max-w-[20rem]","max-h-[20rem]","object-contain",3,"src"],["matRipple","",3,"click"],["matRipple","",1,"inverse","mt-2",3,"click"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto",4,"ngIf"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-warning text-warning-content mx-auto",4,"ngIf"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-error text-error-content mx-auto",4,"ngIf"],[1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-success","text-success-content","mx-auto"],[1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-warning","text-warning-content","mx-auto"],[1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-error","text-error-content","mx-auto"],[1,"px-4"],["matRipple","",1,"rounded-3xl","bg-warning","text-warning-content","border-none","w-[7.5rem]","h-10",3,"matMenuTriggerFor","disabled"],[1,"flex","items-center","pl-4","pr-2","space-x-2"],[1,"flex-1","text-left"],["class","text-2xl",4,"ngIf"],["mat-menu-item","",3,"click"],[1,"flex","items-center","space-x-2"],[1,"text-2xl"],[1,"pr-2"],[1,"text-2xl","text-error"],[1,"flex","items-center","justify-end","px-2"],["icon","","matRipple","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"disabled","matMenuTriggerFor"],["mat-menu-item","",3,"href",4,"ngFor","ngForOf"],["mat-menu-item","",3,"click",4,"ngIf"],["mat-menu-item","",3,"href"],[4,"ngIf"],["matTooltip","Download Visitor List","matTooltipPosition","left","icon","","matRipple","",1,"bg-secondary","hover:shadow-lg","shadow","absolute","bottom-4","right-4","text-white","h-12","w-12",3,"click"]],template:function(i,s){if(1&i&&(t.nrm(0,"simple-table",11),t.nI1(1,"async"),t.DNE(2,ft,3,3,"ng-template",null,0,t.C5r)(4,xt,4,2,"ng-template",null,1,t.C5r)(6,Ft,4,2,"ng-template",null,2,t.C5r)(8,jt,4,2,"ng-template",null,3,t.C5r)(10,Gt,3,3,"ng-template",null,4,t.C5r)(12,Vt,20,18,"ng-template",null,5,t.C5r)(14,Et,4,6,"ng-template",null,6,t.C5r)(16,St,35,12,"ng-template",null,7,t.C5r)(18,Dt,3,0,"button",12),t.nI1(19,"async"),t.nrm(20,"div",13)),2&i){let o;const a=t.sdS(3),c=t.sdS(5),d=t.sdS(7),g=t.sdS(11),T=t.sdS(13),Wt=t.sdS(15),Qt=t.sdS(17);t.Y8G("data",s.guests)("columns",t.sGs(24,mt,t.eq3(9,at,a),t.eq3(11,lt,Wt),t.eq3(13,rt,c),t.eq3(15,ct,d),t.eq3(17,dt,T),t.l_i(19,ut,g,!!s.inductions_enabled),t.eq3(22,pt,Qt)))("filter",t.bMT(1,5,s.search))("sortable",!0),t.R7$(18),t.Y8G("ngIf",null==(o=t.bMT(19,7,s.guests))?null:o.length)}},dependencies:[m.Sq,m.bT,V.kk,V.fb,V.Cp,nt.oV,b.r6,it.R,st.I,ot.O,m.Jj,m.vh]})}return n})();const Lt=["app-visitors",""];function Xt(n,r){1&n&&t.nrm(0,"mat-progress-bar",4)}let Nt=(()=>{class n{constructor(e){this._state=e,this.loading=this._state.loading,this.filters=this._state.filters}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}static#t=this.\u0275fac=function(i){return new(i||n)(t.rXU(y))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["","app-visitors",""]],attrs:Lt,decls:6,vars:3,consts:[[1,"relative","w-full","flex","flex-col","bg-base-200"],[1,"w-full"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(i,s){1&i&&(t.nrm(0,"sidebar"),t.j41(1,"main",0),t.nrm(2,"visitors-topbar",1)(3,"guest-listings",2),t.DNE(4,Xt,1,0,"mat-progress-bar",3),t.nI1(5,"async"),t.k0s()),2&i&&(t.R7$(4),t.Y8G("ngIf",t.bMT(5,1,s.loading)))},dependencies:[m.bT,W.k,D.HM,tt,Y,m.Jj],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}\n\n/*# sourceMappingURL=visitors.component.ts-angular-inline--112.css.map*/"]})}return n})();var Pt=l(68874);let Yt=(()=>{class n{constructor(e){this._dialog_ref=e}onDone(){this._dialog_ref.close()}static#t=this.\u0275fac=function(i){return new(i||n)(t.rXU(w.CP))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["invite-visitor-modal"]],decls:2,vars:0,consts:[[1,"relative","min-w-[40rem]","min-h-[40rem]"],[3,"done"]],template:function(i,s){1&i&&(t.j41(0,"main",0)(1,"invite-visitor-form",1),t.bIt("done",function(){return s.onDone()}),t.k0s()())},dependencies:[Pt.j]})}return n})();var Ut=l(45189),At=l(96843),Bt=l(56062);const zt=["app-new-visitors",""];function Ot(n,r){if(1&n&&(t.j41(0,"div",17),t.EFF(1),t.nI1(2,"building"),t.j41(3,"span",18),t.EFF(4," - "),t.k0s()()),2&n){let e;const i=t.XpG().$implicit;t.R7$(),t.SpI(" ",null==(e=t.bMT(2,1,i.parent_id))?null:e.display_name," ")}}function Zt(n,r){if(1&n&&(t.j41(0,"mat-option",14)(1,"div",15),t.DNE(2,Ot,5,3,"div",16),t.j41(3,"div"),t.EFF(4),t.k0s()()()),2&n){const e=r.$implicit,i=t.XpG();t.Y8G("value",e.id),t.R7$(2),t.Y8G("ngIf",i.use_region),t.R7$(2),t.SpI(" ",e.display_name||e.name," ")}}function Ht(n,r){1&n&&t.nrm(0,"mat-progress-bar",19)}const Jt=[{path:"",component:Nt},{path:"new",component:(()=>{class n{get use_region(){return!!this._settings.get("app.use_region")}constructor(e,i,s,o,a,c){this._state=e,this._org=i,this._router=s,this._route=o,this._dialog=a,this._settings=c,this.loading=this._state.loading,this.filters=this._state.filters,this.zones=[],this.levels=(0,k.zV)([this._org.active_building,this._org.active_region]).pipe((0,R.T)(([d,g])=>this._settings.get("app.use_region")?this._org.levelsForRegion(g):this._org.levelsForBuilding(d))),this.setDate=d=>this._state.setFilters({date:d}),this.setFilters=d=>this._state.setFilters(d),this.setSearch=d=>this._state.setSearchString(d),this.updateZones=d=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:d.join(",")}}),this._state.setFilters({zones:d})}}inviteVisitor(){this._dialog.open(Yt)}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}static#t=this.\u0275fac=function(i){return new(i||n)(t.rXU(y),t.rXU(j.yb),t.rXU(v.Ix),t.rXU(v.nX),t.rXU(w.bZ),t.rXU(u.h$))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["","app-new-visitors",""]],attrs:zt,decls:23,vars:9,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"flex","items-center","px-8","py-4","space-x-2"],[1,"text-2xl","font-medium"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange"],["btn","","matRipple","",3,"click"],[1,"flex","items-center","px-8","pb-4"],["appearance","outline",1,"no-subscript","w-60"],["placeholder","All Levels","multiple","",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[3,"dateChange"],[1,"mx-8","flex-1","h-1/2","overflow-auto"],["class","w-full","mode","indeterminate",4,"ngIf"],[3,"value"],[1,"flex","flex-col-reverse"],["class","text-xs opacity-30",4,"ngIf"],[1,"text-xs","opacity-30"],[1,"opacity-0"],["mode","indeterminate",1,"w-full"]],template:function(i,s){if(1&i&&(t.nrm(0,"app-topbar"),t.j41(1,"div",0),t.nrm(2,"app-sidebar"),t.j41(3,"main",1)(4,"div",2)(5,"h2",3),t.EFF(6,"Visitors"),t.k0s(),t.nrm(7,"div",4),t.j41(8,"searchbar",5),t.bIt("modelChange",function(a){return s.setSearch(a)}),t.k0s(),t.j41(9,"button",6),t.bIt("click",function(){return s.inviteVisitor()}),t.EFF(10," Invite Visitor "),t.k0s()(),t.j41(11,"div",7)(12,"mat-form-field",8)(13,"mat-select",9),t.nI1(14,"async"),t.bIt("ngModelChange",function(a){return s.updateZones(a)}),t.DNE(15,Zt,5,3,"mat-option",10),t.nI1(16,"async"),t.k0s()(),t.nrm(17,"div",4),t.j41(18,"date-options",11),t.bIt("dateChange",function(a){return s.setDate(a)}),t.k0s()(),t.j41(19,"div",12),t.nrm(20,"guest-listings"),t.k0s(),t.DNE(21,Ht,1,0,"mat-progress-bar",13),t.nI1(22,"async"),t.k0s()()),2&i){let o;t.R7$(13),t.Y8G("ngModel",null==(o=t.bMT(14,3,s.filters))?null:o.zones),t.R7$(2),t.Y8G("ngForOf",t.bMT(16,5,s.levels)),t.R7$(6),t.Y8G("ngIf",t.bMT(22,7,s.loading))}},dependencies:[m.Sq,m.bT,f.BC,f.vS,L.o,X.x,Ut.S,At.c,N.rl,P.VO,b.wT,D.HM,b.r6,Y,m.Jj,Bt.b],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}\n\n/*# sourceMappingURL=new-visitors.component.ts-angular-inline--114.css.map*/"]})}return n})()}];let Kt=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({imports:[m.MD,f.YN,G.r,h.SG,v.iI.forChild(Jt)]})}return n})()},68390:(U,F,l)=>{l.d(F,{g8:()=>_,kR:()=>m.k,Gp:()=>x.Gp,N8:()=>C.N8,SZ:()=>C.SZ,is:()=>I.is});var m=l(11081),G=(l(11543),l(7282),l(67450));class _{constructor(p={}){this.type=p.type||p.location||"other",this.position=p.position||p.map_id||p.asset_id||{x:p.x/p.map_width||0,y:p.y/p.map_height||0},this.variance=p.variance||0,this.last_seen=p.last_seen||(0,G.A)(new Date),this.level=p.level,this.building=p.building,this.at_location=!!p.at_location,this.coordinates_from=p.coordinates_from||"top-left"}}var x=l(93693),I=(l(24129),l(86039)),C=l(2372)}}]);
//# sourceMappingURL=apps_concierge_src_app_visitors_visitors_module_ts.js.map