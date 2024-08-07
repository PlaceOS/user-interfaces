"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_visitors_visitors_module_ts"],{8706:(z,C,r)=>{r.r(C),r.d(C,{VisitorsModule:()=>ue});var _=r(316),h=r(4456),b=r(6842),T=r(363),g=r(9204),v=r(521),F=r(2175),V=r(1536),j=r(8627),R=r(9803),m=r(1963),A=r(9314),O=r(6e3),J=r(7841),M=r(5443),S=r(3602),Z=r(3240),H=r(8797),$=r(9908),N=r(6671),p=r(2333),L=r(8390),f=r(7915),w=r(2185),t=r(7404),K=r(7024),x=r(2587),k=r(5060);let Q=(()=>{class n{get induction_details(){return this._settings.get("app.induction_details")}get is_enabled(){return this._settings.get("app.induction_enabled")&&this._settings.get("app.induction_details")}constructor(e){this._settings=e,this.agree=!1}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(p.h$))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["visitor-induction-modal"]],decls:12,vars:5,consts:[[1,"relative","bg-base-100","rounded","shadow","overflow-hidden","flex","flex-col","items-center","w-[32rem]","p-4"],[1,"my-4"],[1,"rounded","border","border-base-300","w-full","p-4","opacity-60","text-sm","overflow-y-auto","overflow-x-hidden","max-h-[50vh]","whitespace-pre-wrap"],[1,"my-4",3,"ngModelChange","ngModel"],[1,"flex","items-center","justify-center","space-x-2"],["btn","","matRipple","",1,"w-32","clear","underline",3,"mat-dialog-close"],["btn","","matRipple","",1,"w-32",3,"disabled","mat-dialog-close"]],template:function(s,i){1&s&&(t.j41(0,"div",0)(1,"p",1),t.EFF(2," Please read the induction information below before proceeding "),t.k0s(),t.j41(3,"div",2),t.EFF(4),t.k0s(),t.j41(5,"mat-checkbox",3),t.mxI("ngModelChange",function(a){return t.DH7(i.agree,a)||(i.agree=a),a}),t.EFF(6," I agree "),t.k0s(),t.j41(7,"div",4)(8,"button",5),t.EFF(9," Decline "),t.k0s(),t.j41(10,"button",6),t.EFF(11," Accept "),t.k0s()()()),2&s&&(t.R7$(4),t.SpI(" ",i.induction_details," "),t.R7$(),t.R50("ngModel",i.agree),t.R7$(3),t.Y8G("mat-dialog-close",!1),t.R7$(2),t.Y8G("disabled",!i.agree)("mat-dialog-close",!0))},dependencies:[h.BC,h.vS,K.So,x.tx,k.r6]})}return n})();var I=r(4950),W=r(7984),q=r(1134),D=r(9434);function tt(n,l){1&n&&(t.j41(0,"button",5)(1,"app-icon"),t.EFF(2,"close"),t.k0s()())}function et(n,l){if(1&n){const e=t.RV6();t.j41(0,"main",6)(1,"mat-form-field",7)(2,"textarea",8),t.mxI("ngModelChange",function(i){t.eBV(e);const o=t.XpG();return t.DH7(o.notes,i)||(o.notes=i),t.Njj(i)}),t.k0s()()()}if(2&n){const e=t.XpG();t.R7$(2),t.R50("ngModel",e.notes)}}function nt(n,l){if(1&n){const e=t.RV6();t.j41(0,"footer",9)(1,"button",10),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.save())}),t.EFF(2,"Save"),t.k0s()()}}function it(n,l){1&n&&(t.j41(0,"div",11),t.nrm(1,"mat-spinner",12),t.j41(2,"p"),t.EFF(3,"Saving visitor notes..."),t.k0s()()),2&n&&(t.R7$(),t.Y8G("diameter",32))}let st=(()=>{class n{constructor(e,s){this._data=e,this._dialog_ref=s,this.item=this._data.item,this.notes=this.item.extension_data?.notes||"",this.loading="",this.item=e.item}save(){var e=this;return(0,g.A)(function*(){e.loading="Saving...",e._dialog_ref.disableClose=!0,yield(0,f.vq)(e.item.id,{...e.item.toJSON(),extension_data:{...e.item.extension_data,notes:e.notes}}).toPromise().catch(s=>{throw(0,p.UG)("Error saving visitor notes"),e._dialog_ref.disableClose=!1,e.loading="",s}),e.loading="",(0,p.VX)("Successfully saved visitor notes"),e._dialog_ref.close()})()}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(x.Vh),t.rXU(x.CP))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["visitor-notes-modal"]],decls:10,vars:5,consts:[["loading_template",""],[1,"font-medium","px-2","py-1","text-sm","bg-base-200","rounded","ml-2"],["icon","","mat-dialog-close","",4,"ngIf"],["class","p-4 w-[36rem] max-h-[65vh] overflow-auto",4,"ngIf","ngIfElse"],["class","flex justify-end space-x-2 p-2 border-t border-base-200",4,"ngIf"],["icon","","mat-dialog-close",""],[1,"p-4","w-[36rem]","max-h-[65vh]","overflow-auto"],["appearance","outline",1,"w-full","no-subscript"],["matInput","","placeholder","Notes for visitor",1,"resize-none","h-[60vh]","max-h-[64rem]",3,"ngModelChange","ngModel"],[1,"flex","justify-end","space-x-2","p-2","border-t","border-base-200"],["btn","","matRipple","",1,"w-32",3,"click"],["loading","",1,"absolute","inset-0","bg-base-100","flex","flex-col","items-center","justify-center","space-y-2"],[3,"diameter"]],template:function(s,i){if(1&s&&(t.j41(0,"header")(1,"h2"),t.EFF(2," Notes for Visitor "),t.j41(3,"span",1),t.EFF(4),t.k0s()(),t.DNE(5,tt,3,0,"button",2),t.k0s(),t.DNE(6,et,3,1,"main",3)(7,nt,3,0,"footer",4)(8,it,4,1,"ng-template",null,0,t.C5r)),2&s){const o=t.sdS(9);t.R7$(4),t.SpI(" ",null==i.item?null:i.item.asset_name," "),t.R7$(),t.Y8G("ngIf",!i.loading),t.R7$(),t.Y8G("ngIf",!i.loading)("ngIfElse",o),t.R7$(),t.Y8G("ngIf",!i.loading)}},dependencies:[_.bT,h.me,h.BC,h.vS,I.rl,W.fg,q.LG,x.tx,k.r6,D.R]})}return n})(),G=(()=>{class n extends p.Tv{get search(){return this._search.getValue()}get time_format(){return this._settings.time_format}constructor(e,s,i){super(),this._dialog=e,this._org=s,this._settings=i,this._poll=new v.t(0),this._filters=new v.t({}),this._search=new v.t(""),this._loading=new v.t(!1),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.bookings=(0,F.zV)([this._org.active_building,this._filters,this._poll]).pipe((0,j.p)(([o])=>!!o),(0,R.B)(150),(0,m.n)(([o,a])=>{this._loading.next(!0);const c=a.date?new Date(a.date):new Date,d=(0,Z.o)(c),u=(0,H.f)(d,a.period||1);return(0,f.tj)({type:"visitor",period_start:(0,$._)(d),period_end:(0,$._)(u),zones:(a.zones||[]).join(",")||o.id,include_checked_out:!0,limit:1e3}).pipe((0,A.W)(y=>(0,V.of)([])))}),(0,O.M)(()=>this._loading.next(!1)),(0,J.t)(1)),this.filtered_bookings=(0,F.zV)([this._search,this.bookings]).pipe((0,M.T)(([o,a])=>{const c=o.toLowerCase();return a.filter(u=>u.asset_name?.toLowerCase().includes(c)||u.user_name?.toLowerCase().includes(c)||u.user_email?.toLowerCase().includes(c)||u.asset_id?.toLowerCase().includes(c)).sort((u,y)=>u.date-y.date)}))}setFilters(e){this._filters.next({...this._filters.getValue(),...e})}setSearchString(e){this._search.next(e)}poll(){this._poll.next(Date.now())}startPolling(e=3e4){this.interval("poll",()=>this._poll.next(Date.now()),e)}stopPolling(){this.clearInterval("poll")}setExt(e,s,i){var o=this;return(0,g.A)(function*(){const a={...e.extension_data};a[s]=i,yield(0,L.is)(e.id,{...e,extension_data:a}).toPromise(),o._poll.next(Date.now())})()}approveVisitor(e){var s=this;return(0,g.A)(function*(){const i=yield(0,p.GE)({title:"Approve Visitor",content:`Approve attendance of ${e.asset_name||e.asset_id} to their meeting?`,icon:{content:"event_available"}},s._dialog);if("done"!==i.reason)return i.close();i.loading("Updating guest details"),yield(0,f.DD)(e.id).toPromise().catch(o=>{throw(0,p.UG)(`Error approving visitor: ${o.message||o.error||o}`),i.close(),o}),(0,p.VX)("Successfully approved visitor"),s._poll.next(Date.now()),i.close()})()}declineVisitor(e){var s=this;return(0,g.A)(function*(){const i=yield(0,p.GE)({title:"Decline Visitor",content:`Decline attendance of ${e.asset_name||e.asset_id} to their meeting?`,icon:{content:"event_available"}},s._dialog);if("done"!==i.reason)return i.close();i.loading("Updating guest details"),yield(0,f.vB)(e.id).toPromise().catch(o=>{throw(0,p.UG)(`Error declining visitor: ${o.message||o.error||o}`),i.close(),o}),(0,p.VX)("Successfully declining visitor"),s._poll.next(Date.now()),i.close()})()}requestInduction(e){var s=this;return(0,g.A)(function*(){const o=yield s._dialog.open(Q,{data:{item:e}}).afterClosed().toPromise();if(!o)throw!1===o&&(yield(0,f.tl)(e.id,"declined_induction").toPromise()),"User declined";yield(0,f.tl)(e.id,"inducted").toPromise(),yield(0,f.vq)(e.id,{...e,induction:!0})})()}setCheckinState(e,s=!0){var i=this;return(0,g.A)(function*(){if(e.rejected)throw"You cannot check in a rejected meeting";!0===s&&(yield i.requestInduction(e)),!e.approved&&!0===s&&(yield(0,f.DD)(e.id).toPromise()),yield(0,f.Z$)(e.id,s).toPromise().catch(a=>{throw(0,p.UG)(`Error checking ${s?"in":"out"} ${e.asset_name||e.asset_id} for ${e.user_name}'s meeting`),a}),(0,p.VX)(`Successfully checked ${s?"in":"out"} ${e.asset_name||e.asset_id} from ${e.user_name}'s meeting`)})()}setCheckinStateForEvent(e,s=!0){var i=this;return(0,g.A)(function*(){if(!e)return;const a=(yield i.bookings.pipe((0,S.s)(1)).toPromise()).filter(c=>c.parent_id===e||c.extension_data.parent_id===e||c.linked_event?.id===e||c.linked_event?.event_id===e);a.length&&(yield Promise.all(a.map(c=>(0,f.Z$)(c.id,s).toPromise().catch(d=>{throw(0,p.UG)(`Error checking ${s?"in":"out"} ${c.asset_name||c.asset_id} for ${c.user_name}'s meeting`),d}))),(0,p.VX)(`Successfully checked ${s?"in":"out"} all visitors from ${a[0].user_name}'s meeting`),i._poll.next(Date.now()))})()}downloadVisitorsList(){var e=this;return(0,g.A)(function*(){const s=yield e.filtered_bookings.pipe((0,S.s)(1)).toPromise();if(!s.length)return;const{date:i}=e._filters.getValue(),o=s.map(c=>({Name:c.asset_name,Email:c.asset_id,"Checked In":c.checked_in,Host:c.user_email||"",Status:c.status,Date:(0,N.GP)(c.date,"dd MMM "+e.time_format)})),a=(0,p.SL)(o);(0,p.PE)(`visitor-list-${(0,N.GP)(i||Date.now(),"MMM-dd")}.csv`,a)})()}editVisitorNotes(e){this._dialog.open(st,{data:{item:e}}).afterClosed().subscribe(()=>this.poll())}static#t=this.\u0275fac=function(s){return new(s||n)(t.KVO(x.bZ),t.KVO(w.yb),t.KVO(p.h$))};static#e=this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ot=r(4605),X=r(6354),at=r(7871),P=r(4584),Y=r(2236),U=r(5175);function rt(n,l){if(1&n&&(t.j41(0,"mat-option",5),t.EFF(1),t.k0s()),2&n){const e=l.$implicit;t.Y8G("value",e.id),t.R7$(),t.SpI(" ",e.display_name||e.name," ")}}let lt=(()=>{class n extends p.Tv{constructor(e,s,i,o){super(),this._state=e,this._org=s,this._route=i,this._router=o,this.zones=[],this.levels=this._org.active_levels,this.filters=this._state.filters,this.setDate=a=>this._state.setFilters({date:a}),this.setFilters=a=>this._state.setFilters(a),this.setSearch=a=>this._state.setSearchString(a),this.updateZones=a=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:a.join(",")}}),this._state.setFilters({zones:a})}}ngOnInit(){var e=this;return(0,g.A)(function*(){yield e._org.initialised.pipe((0,at.$)(s=>s)).toPromise(),e.subscription("route.query",e._route.queryParamMap.subscribe(s=>{if(s.has("zone_ids")){const i=s.get("zone_ids").split(",");if(i.length){const o=e._org.levelWithID(i);if(e.zones=i,!o)return;e._org.building=e._org.buildings.find(a=>a.id===o.parent_id)}}})),e.subscription("levels",e._org.active_levels.subscribe(s=>{e.zones=e.zones.filter(i=>s.find(o=>o.id===i)),!e.zones.length&&s.length&&e.zones.push(s[0].id),e.updateZones(e.zones)})),e.setSearch("")})()}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(G),t.rXU(w.yb),t.rXU(b.nX),t.rXU(b.Ix))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["visitors-topbar"]],features:[t.Vt3],decls:17,vars:10,consts:[[1,"flex","items-center","bg-base-100","h-20","px-4","border-b","border-base-200","space-x-2"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Viewing Period",3,"ngModelChange","ngModel"],[3,"value"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange"],[3,"dateChange"]],template:function(s,i){if(1&s&&(t.j41(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),t.mxI("ngModelChange",function(a){return t.DH7(i.zones,a)||(i.zones=a),a}),t.bIt("ngModelChange",function(a){return i.updateZones(a)}),t.DNE(3,rt,2,2,"mat-option",3),t.nI1(4,"async"),t.k0s()(),t.j41(5,"mat-form-field",1)(6,"mat-select",4),t.nI1(7,"async"),t.bIt("ngModelChange",function(a){return i.setFilters({period:a})}),t.j41(8,"mat-option",5),t.EFF(9,"Show Day"),t.k0s(),t.j41(10,"mat-option",5),t.EFF(11,"Show Week"),t.k0s(),t.j41(12,"mat-option",5),t.EFF(13,"Show Month"),t.k0s()()(),t.nrm(14,"div",6),t.j41(15,"searchbar",7),t.bIt("modelChange",function(a){return i.setSearch(a)}),t.k0s(),t.j41(16,"date-options",8),t.bIt("dateChange",function(a){return i.setDate(a)}),t.k0s()()),2&s){let o;t.R7$(2),t.R50("ngModel",i.zones),t.R7$(),t.Y8G("ngForOf",t.bMT(4,6,i.levels)),t.R7$(3),t.Y8G("ngModel",(null==(o=t.bMT(7,8,i.filters))?null:o.period)||1),t.R7$(2),t.Y8G("value",1),t.R7$(2),t.Y8G("value",7),t.R7$(2),t.Y8G("value",30)}},dependencies:[_.Sq,h.BC,h.vS,P.o,Y.x,I.rl,U.VO,k.wT,_.Jj],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n\n/*# sourceMappingURL=visitors-topbar.component.ts-angular-inline--113.css.map*/"]})}return n})();var ct=r(3998),dt=r(8007),E=r(1034),pt=r(640),ut=r(2238),mt=r(8328);const _t=n=>({key:"state",name:"Checked In",content:n,size:"6.5rem",sortable:!1}),gt=n=>({key:"date",name:"Time",content:n,size:"6rem"}),ft=n=>({key:"asset_name",name:"Visitor",content:n}),ht=n=>({key:"user_name",name:"Host",content:n}),vt=n=>({key:"status",name:"State",content:n,size:"9.5rem"}),xt=(n,l)=>({key:"induction",name:"Inducted",content:n,show:l,size:"5.5rem"}),bt=(n,l)=>({key:"parking_space",name:"Parking",content:n,show:l,size:"5.5rem"}),kt=n=>({key:"notes",name:"Notes",content:n,sortable:!1,size:"4.5rem"}),Ct=n=>({key:"actions",name:" ",content:n,size:"3.25rem",sortable:!1}),Ft=(n,l,e,s,i,o,a,c,d)=>[n,l,e,s,i,o,a,c,d];function jt(n,l){if(1&n&&(t.j41(0,"div",19),t.nI1(1,"date"),t.j41(2,"app-icon"),t.EFF(3,"done"),t.k0s()()),2&n){const e=t.XpG().row,s=t.XpG();t.Y8G("matTooltip","Checked out at "+t.i5U(1,1,e.checked_out_at,s.time_format))}}function wt(n,l){1&n&&(t.j41(0,"div",20)(1,"app-icon"),t.EFF(2,"question_mark"),t.k0s()())}function Gt(n,l){1&n&&(t.j41(0,"div",21)(1,"app-icon"),t.EFF(2,"done"),t.k0s()())}function yt(n,l){if(1&n&&t.DNE(0,jt,4,4,"div",16)(1,wt,3,0,"div",17)(2,Gt,3,0,"div",18),2&n){const e=l.row;t.Y8G("ngIf",!(null!=e&&e.checked_in)&&e.checked_out_at),t.R7$(),t.Y8G("ngIf",!(null!=e&&e.checked_in||e.checked_out_at)),t.R7$(),t.Y8G("ngIf",null==e?null:e.checked_in)}}function Tt(n,l){if(1&n&&(t.j41(0,"div",24),t.EFF(1),t.k0s()),2&n){const e=t.XpG().row;t.R7$(),t.SpI(" ",e.asset_id," ")}}function Vt(n,l){if(1&n&&(t.j41(0,"div",22)(1,"div"),t.EFF(2),t.k0s(),t.DNE(3,Tt,2,1,"div",23),t.k0s()),2&n){const e=l.row;t.R7$(2),t.JRh(e.asset_name||e.asset_id),t.R7$(),t.Y8G("ngIf",e.asset_name&&e.asset_id)}}function It(n,l){if(1&n&&(t.j41(0,"div",24),t.EFF(1),t.k0s()),2&n){const e=t.XpG().row;t.R7$(),t.SpI(" ",e.user_email," ")}}function Et(n,l){if(1&n&&(t.j41(0,"div",22)(1,"div"),t.EFF(2),t.k0s(),t.DNE(3,It,2,1,"div",23),t.k0s()),2&n){const e=l.row;t.R7$(2),t.JRh(e.user_name||e.user_email),t.R7$(),t.Y8G("ngIf",e.user_name&&e.user_email)}}function Rt(n,l){if(1&n&&(t.j41(0,"button",27),t.EFF(1),t.k0s()),2&n){const e=t.XpG().row;t.R7$(),t.SpI(" ",null!=e.extension_data&&e.extension_data.id_confirmed?"Confirmed":!1===(null==e.extension_data?null:e.extension_data.id_confirmed)?"Rejected":"Submitted"," ")}}function Mt(n,l){if(1&n){const e=t.RV6();t.j41(0,"div",28),t.nrm(1,"img",29),t.j41(2,"button",30),t.bIt("click",function(){t.eBV(e);const i=t.XpG().row,o=t.XpG();return t.Njj(o.setExt(i,"id_confirmed",!0))}),t.EFF(3," Confirm ID "),t.k0s(),t.j41(4,"button",31),t.bIt("click",function(){t.eBV(e);const i=t.XpG().row,o=t.XpG();return t.Njj(o.setExt(i,"id_confirmed",!1))}),t.EFF(5," Reject ID "),t.k0s()()}if(2&n){const e=t.XpG().row;t.R7$(),t.Y8G("src",null==e.extension_data||null==e.extension_data.id_data?null:e.extension_data.id_data.url,t.B4B)}}function St(n,l){if(1&n&&(t.j41(0,"div",25),t.DNE(1,Rt,2,1,"button",26),t.k0s(),t.DNE(2,Mt,6,1,"ng-template",null,10,t.C5r)),2&n){const e=l.row,s=t.sdS(3);t.Y8G("content",s),t.R7$(),t.Y8G("ngIf",null==e.extension_data||null==e.extension_data.id_data?null:e.extension_data.id_data.url)}}function $t(n,l){1&n&&(t.j41(0,"div",33)(1,"app-icon"),t.EFF(2,"done"),t.k0s()())}function Nt(n,l){1&n&&t.DNE(0,$t,3,0,"div",32),2&n&&t.Y8G("ngIf",l.row.extension_data.parking_booking_id)}function Lt(n,l){1&n&&(t.j41(0,"div",33)(1,"app-icon"),t.EFF(2,"done"),t.k0s()())}function Dt(n,l){1&n&&(t.j41(0,"div",36)(1,"app-icon"),t.EFF(2,"question_mark"),t.k0s()())}function Xt(n,l){1&n&&(t.j41(0,"div",37)(1,"app-icon"),t.EFF(2,"close"),t.k0s()())}function Pt(n,l){if(1&n&&t.DNE(0,Lt,3,0,"div",32)(1,Dt,3,0,"div",34)(2,Xt,3,0,"div",35),2&n){const e=l.row,s=t.XpG();t.Y8G("ngIf",s.inducted(e)),t.R7$(),t.Y8G("ngIf",null===s.inducted(e)),t.R7$(),t.Y8G("ngIf",!1===s.inducted(e))}}function Yt(n,l){1&n&&(t.j41(0,"app-icon",45),t.EFF(1," arrow_drop_down "),t.k0s())}function Ut(n,l){if(1&n){const e=t.RV6();t.j41(0,"div",38)(1,"button",39)(2,"div",40)(3,"div",41),t.EFF(4),t.k0s(),t.DNE(5,Yt,2,0,"app-icon",42),t.k0s()()(),t.j41(6,"mat-menu",null,11)(8,"button",43),t.bIt("click",function(){const i=t.eBV(e).row,o=t.XpG();return t.Njj(o.approveVisitor(i))}),t.j41(9,"div",44)(10,"app-icon",45),t.EFF(11,"event_available"),t.k0s(),t.j41(12,"div",46),t.EFF(13,"Approve Visitor"),t.k0s()()(),t.j41(14,"button",43),t.bIt("click",function(){const i=t.eBV(e).row,o=t.XpG();return t.Njj(o.declineVisitor(i))}),t.j41(15,"div",44)(16,"app-icon",47),t.EFF(17," event_busy "),t.k0s(),t.j41(18,"div",46),t.EFF(19,"Decline Visitor"),t.k0s()()()()}if(2&n){const e=l.row,s=t.sdS(7);t.R7$(),t.AVh("!text-success-content","approved"===(null==e?null:e.status))("!bg-success","approved"===(null==e?null:e.status))("!text-error-content","declined"===(null==e?null:e.status))("!bg-error","declined"===(null==e?null:e.status))("!text-neutral-content","ended"===(null==e?null:e.status))("!bg-neutral","ended"===(null==e?null:e.status))("opacity-30","ended"===(null==e?null:e.status)),t.Y8G("matMenuTriggerFor",s)("disabled","ended"===(null==e?null:e.status)||e.checked_in&&!e.checked_out_at),t.R7$(3),t.SpI(" ","ended"===(null==e?null:e.status)?"Ended":"approved"===(null==e?null:e.status)?"Approved":"declined"===(null==e?null:e.status)?"Declined":"Pending"," "),t.R7$(),t.Y8G("ngIf",!("ended"===(null==e?null:e.status)||e.checked_in&&!e.checked_out_at))}}function Bt(n,l){if(1&n&&(t.j41(0,"div",38),t.EFF(1),t.nI1(2,"async"),t.nI1(3,"date"),t.k0s()),2&n){let e;const s=l.row,i=t.XpG();t.R7$(),t.SpI(" ",t.i5U(3,3,s.date,(null==(e=t.bMT(2,1,i.filters))?null:e.period)>1?"MMM d, "+i.time_format:i.time_format)," ")}}function zt(n,l){if(1&n){const e=t.RV6();t.j41(0,"button",43),t.bIt("click",function(){t.eBV(e);const i=t.XpG().row,o=t.XpG();return t.Njj(o.reserveParking(i))}),t.j41(1,"div",44)(2,"app-icon",45),t.EFF(3,"directions_car"),t.k0s(),t.j41(4,"div"),t.EFF(5,"Reserve Parking Space"),t.k0s()()()}}function At(n,l){if(1&n&&(t.j41(0,"a",53),t.EFF(1),t.k0s()),2&n){const e=l.$implicit;t.Y8G("href",e.url,t.B4B),t.R7$(),t.SpI(" ",e.name," ")}}function Ot(n,l){if(1&n){const e=t.RV6();t.j41(0,"button",43),t.bIt("click",function(){t.eBV(e);const i=t.XpG(2);return t.Njj(i.printQRCode())}),t.j41(1,"div",44)(2,"app-icon",45),t.EFF(3,"print"),t.k0s(),t.j41(4,"div"),t.EFF(5,"Print QR Code"),t.k0s()()()}}function Jt(n,l){if(1&n){const e=t.RV6();t.j41(0,"button",43),t.bIt("click",function(){t.eBV(e);const i=t.XpG().row,o=t.XpG();return t.Njj(i.checked_in?o.checkout(i):o.checkin(i))}),t.j41(1,"div",44)(2,"app-icon",45),t.EFF(3),t.k0s(),t.j41(4,"div"),t.EFF(5),t.k0s()()()}if(2&n){const e=t.XpG().row;t.R7$(3),t.SpI(" ",e.checked_in?"event_busy":"event_available"," "),t.R7$(2),t.SpI(" ",e.checked_in?"Checkout":"Checkin"," Guest ")}}function Zt(n,l){if(1&n){const e=t.RV6();t.qex(0),t.j41(1,"button",43),t.bIt("click",function(){t.eBV(e);const i=t.XpG().row,o=t.XpG();return t.Njj(o.checkinAllVisitors(i))}),t.j41(2,"div",44)(3,"app-icon",45),t.EFF(4," event_available "),t.k0s(),t.j41(5,"div"),t.EFF(6,"Checkin all for Meeting"),t.k0s()()(),t.j41(7,"button",43),t.bIt("click",function(){t.eBV(e);const i=t.XpG().row,o=t.XpG();return t.Njj(o.checkoutAllVisitors(i))}),t.j41(8,"div",44)(9,"app-icon",47),t.EFF(10," event_busy "),t.k0s(),t.j41(11,"div"),t.EFF(12,"Checkout all for Meeting"),t.k0s()()(),t.bVm()}}function Ht(n,l){if(1&n){const e=t.RV6();t.j41(0,"div",48)(1,"button",49)(2,"app-icon"),t.EFF(3,"more_horiz"),t.k0s()(),t.j41(4,"mat-menu",null,12)(6,"button",50)(7,"div",44)(8,"app-icon",45),t.EFF(9,"attachment"),t.k0s(),t.j41(10,"div"),t.EFF(11,"View Attachments"),t.k0s()()(),t.DNE(12,zt,6,0,"button",51),t.j41(13,"mat-menu",null,11),t.DNE(15,At,2,2,"a",52),t.k0s(),t.j41(16,"button",43),t.bIt("click",function(){const i=t.eBV(e).row,o=t.XpG();return t.Njj(o.setExt(i,"remote",!0))}),t.j41(17,"div",44)(18,"app-icon",45),t.EFF(19),t.k0s(),t.j41(20,"div"),t.EFF(21),t.k0s()()(),t.DNE(22,Ot,6,0,"button",51),t.j41(23,"a",53)(24,"div",44)(25,"app-icon",45),t.EFF(26,"email"),t.k0s(),t.j41(27,"div"),t.EFF(28),t.k0s()()(),t.DNE(29,Jt,6,2,"button",51)(30,Zt,13,0,"ng-container",54),t.k0s()()}if(2&n){const e=l.row,s=t.sdS(5),i=t.XpG();t.R7$(),t.Y8G("matMenuTriggerFor",s),t.R7$(5),t.Y8G("disabled",!(null!=e.attachment&&e.attachment.length))("matMenuTriggerFor",i.attachment_menu),t.R7$(6),t.Y8G("ngIf",i.has_parking&&!e.extension_data.parking_booking_id),t.R7$(3),t.Y8G("ngForOf",e.attachments),t.R7$(4),t.SpI(" ",e.extension_data.remote?"business":"laptop"," "),t.R7$(2),t.SpI(" Set as ",e.extension_data.remote?"Onsite":"Remote"," Visitor "),t.R7$(),t.Y8G("ngIf",i.can_print),t.R7$(),t.Y8G("href","mailto:"+(null==e?null:e.asset_id),t.B4B),t.R7$(5),t.SpI(" Email ",(null==e?null:e.user_email)===(null==e?null:e.asset_id)?"Host":"Guest"," "),t.R7$(),t.Y8G("ngIf",!e.checked_out_at),t.R7$(),t.Y8G("ngIf",e.linked_event)}}function Kt(n,l){1&n&&(t.j41(0,"div",58)(1,"app-icon",59),t.EFF(2," info_i "),t.k0s()())}function Qt(n,l){if(1&n){const e=t.RV6();t.j41(0,"div",55)(1,"button",56),t.bIt("click",function(){const i=t.eBV(e).row,o=t.XpG();return t.Njj(o.editVisitorNotes(i))}),t.j41(2,"app-icon",45),t.EFF(3,"edit_square"),t.k0s()(),t.DNE(4,Kt,3,0,"div",57),t.k0s()}if(2&n){const e=l.row;t.R7$(4),t.Y8G("ngIf",null==e.extension_data||null==e.extension_data.notes?null:e.extension_data.notes.length)}}function Wt(n,l){if(1&n){const e=t.RV6();t.j41(0,"button",60),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.downloadVisitorList())}),t.j41(1,"app-icon"),t.EFF(2,"download"),t.k0s()()}}let B=(()=>{class n extends p.Tv{get has_parking(){return this._settings.get("app.features")?.includes("parking")&&this._settings.get("app.visitors.has_parking")}get time_format(){return this._settings.time_format}inducted(e){return!!e.checked_in||!e.process_state.includes("declined")&&(!(!e.process_state.includes("inducted")&&!e.induction)||null)}constructor(e,s,i,o){var a;super(),a=this,this._state=e,this._parking=s,this._settings=i,this._org=o,this.guests=this._state.filtered_bookings,this.search=this._state.search,this.filters=this._state.filters,this.inductions_enabled=!1,this.downloadVisitorList=()=>this._state.downloadVisitorsList(),this.approveVisitor=c=>this._state.approveVisitor(c),this.declineVisitor=c=>this._state.declineVisitor(c),this.checkinAllVisitors=c=>this._state.setCheckinStateForEvent(c.linked_event?.id,!0),this.checkoutAllVisitors=c=>this._state.setCheckinStateForEvent(c.linked_event?.id,!1),this.setExt=(c,d,u)=>this._state.setExt(c,d,u),this.editVisitorNotes=c=>this._state.editVisitorNotes(c),this.checkin=function(){var c=(0,g.A)(function*(d){yield a._state.setCheckinState(d,!0).catch(u=>{throw"User declined"!==u&&(0,p.UG)(u),u}),a._state.poll()});return function(d){return c.apply(this,arguments)}}(),this.checkout=function(){var c=(0,g.A)(function*(d){yield a._state.setCheckinState(d,!1),a._state.poll()});return function(d){return c.apply(this,arguments)}}()}ngOnInit(){var e=this;this.subscription("building",this._org.active_building.subscribe(function(){var s=(0,g.A)(function*(i){if(!i)return;const o=e._settings.get("app.visitor_kiosk_app")||"visitor-kiosk_app",a=yield(0,ct.bpY)(i.id,o).toPromise();e.inductions_enabled=a.details?.induction_enabled&&a.details?.induction_details});return function(i){return s.apply(this,arguments)}}()))}reserveParking(e){var s=this;return(0,g.A)(function*(){const i=yield s._parking.editReservation(void 0,{user:new L.KJ({email:e.asset_id,name:e.asset_name}),link_id:e.id,date:e.date});i&&(yield(0,f.X0)(new f.Qr({...e,parking_booking_id:i})).toPromise(),s._state.poll())})()}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(G),t.rXU(dt.X),t.rXU(p.h$),t.rXU(w.yb))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["guest-listings"]],features:[t.Vt3],decls:25,vars:39,consts:[["state_template",""],["person_template",""],["host_template",""],["id_template",""],["parking_template",""],["boolean_template",""],["status_template",""],["date_template",""],["action_template",""],["notes_template",""],["id_confirmation",""],["menu","matMenu"],["guest_menu","matMenu"],[1,"min-w-[72rem]","block","text-sm","z-0",3,"data","columns","filter","sortable"],["class","bg-secondary hover:shadow-lg shadow absolute bottom-4 right-4 text-white h-12 w-12 z-20","matTooltip","Download Visitor List","matTooltipPosition","left","icon","","matRipple","",3,"click",4,"ngIf"],[1,"w-full","h-8"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-base-400 text-neutral-content mx-auto","matTooltipPosition","right",3,"matTooltip",4,"ngIf"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-warning text-warning-content mx-auto","matTooltip","Not checked in","matTooltipPosition","right",4,"ngIf"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto","matTooltip","Checked In","matTooltipPosition","right",4,"ngIf"],["matTooltipPosition","right",1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-base-400","text-neutral-content","mx-auto",3,"matTooltip"],["matTooltip","Not checked in","matTooltipPosition","right",1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-warning","text-warning-content","mx-auto"],["matTooltip","Checked In","matTooltipPosition","right",1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-success","text-success-content","mx-auto"],[1,"px-4","py-2"],["class","opacity-30 text-xs",4,"ngIf"],[1,"opacity-30","text-xs"],["customTooltip","",3,"content"],["matRipple","","class","bg-success rounded-3xl px-4 py-2 text-white",4,"ngIf"],["matRipple","",1,"bg-success","rounded-3xl","px-4","py-2","text-white"],[1,"bg-base-100","rounded","p-2","flex","flex-col","space-y-2","my-2","w-[20rem]"],[1,"max-w-[20rem]","max-h-[20rem]","object-contain",3,"src"],["matRipple","",3,"click"],["matRipple","",1,"inverse","mt-2",3,"click"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto",4,"ngIf"],[1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-success","text-success-content","mx-auto"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-warning text-warning-content mx-auto",4,"ngIf"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-error text-error-content mx-auto",4,"ngIf"],[1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-warning","text-warning-content","mx-auto"],[1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-error","text-error-content","mx-auto"],[1,"px-4"],["matRipple","",1,"rounded-3xl","bg-warning","text-warning-content","border-none","w-[7.5rem]","h-10",3,"matMenuTriggerFor","disabled"],[1,"flex","items-center","pl-4","pr-2","space-x-2"],[1,"flex-1","text-left"],["class","text-2xl",4,"ngIf"],["mat-menu-item","",3,"click"],[1,"flex","items-center","space-x-2"],[1,"text-2xl"],[1,"pr-2"],[1,"text-2xl","text-error"],[1,"flex","items-center","justify-end","px-2"],["icon","","matRipple","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"disabled","matMenuTriggerFor"],["mat-menu-item","",3,"click",4,"ngIf"],["mat-menu-item","",3,"href",4,"ngFor","ngForOf"],["mat-menu-item","",3,"href"],[4,"ngIf"],[1,"relative","p-4","mx-auto"],["matTooltip","Edit Visitor Notes","matTooltipPosition","left","icon","","matRipple","",3,"click"],["class","absolute top-1 right-1 bg-info text-info-content rounded-full h-4 w-4 flex items-center justify-center","matTooltip","Visitor Notes Available",4,"ngIf"],["matTooltip","Visitor Notes Available",1,"absolute","top-1","right-1","bg-info","text-info-content","rounded-full","h-4","w-4","flex","items-center","justify-center"],["className","material-symbols-rounded",1,"text-sm"],["matTooltip","Download Visitor List","matTooltipPosition","left","icon","","matRipple","",1,"bg-secondary","hover:shadow-lg","shadow","absolute","bottom-4","right-4","text-white","h-12","w-12","z-20",3,"click"]],template:function(s,i){if(1&s&&(t.nrm(0,"simple-table",13),t.nI1(1,"async"),t.DNE(2,yt,3,3,"ng-template",null,0,t.C5r)(4,Vt,4,2,"ng-template",null,1,t.C5r)(6,Et,4,2,"ng-template",null,2,t.C5r)(8,St,4,2,"ng-template",null,3,t.C5r)(10,Nt,1,1,"ng-template",null,4,t.C5r)(12,Pt,3,3,"ng-template",null,5,t.C5r)(14,Ut,20,18,"ng-template",null,6,t.C5r)(16,Bt,4,6,"ng-template",null,7,t.C5r)(18,Ht,31,12,"ng-template",null,8,t.C5r)(20,Qt,5,1,"ng-template",null,9,t.C5r)(22,Wt,3,0,"button",14),t.nI1(23,"async"),t.nrm(24,"div",15)),2&s){let o;const a=t.sdS(3),c=t.sdS(5),d=t.sdS(7),u=t.sdS(11),y=t.sdS(13),me=t.sdS(15),_e=t.sdS(17),ge=t.sdS(19),fe=t.sdS(21);t.Y8G("data",i.guests)("columns",t.zJS(29,Ft,[t.eq3(9,_t,a),t.eq3(11,gt,_e),t.eq3(13,ft,c),t.eq3(15,ht,d),t.eq3(17,vt,me),t.l_i(19,xt,y,!!i.inductions_enabled),t.l_i(22,bt,u,!!i.has_parking),t.eq3(25,kt,fe),t.eq3(27,Ct,ge)]))("filter",t.bMT(1,5,i.search))("sortable",!0),t.R7$(22),t.Y8G("ngIf",null==(o=t.bMT(23,7,i.guests))?null:o.length)}},dependencies:[_.Sq,_.bT,E.kk,E.fb,E.Cp,pt.oV,k.r6,D.R,ut.I,mt.O,_.Jj,_.vh]})}return n})();const qt=["app-visitors",""];function te(n,l){1&n&&t.nrm(0,"mat-progress-bar",4)}let ee=(()=>{class n{constructor(e){this._state=e,this.loading=this._state.loading,this.filters=this._state.filters}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(G))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["","app-visitors",""]],attrs:qt,decls:6,vars:3,consts:[[1,"relative","w-full","flex","flex-col","bg-base-200"],[1,"w-full"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(s,i){1&s&&(t.nrm(0,"sidebar"),t.j41(1,"main",0),t.nrm(2,"visitors-topbar",1)(3,"guest-listings",2),t.DNE(4,te,1,0,"mat-progress-bar",3),t.nI1(5,"async"),t.k0s()),2&s&&(t.R7$(4),t.Y8G("ngIf",t.bMT(5,1,i.loading)))},dependencies:[_.bT,ot.k,X.HM,lt,B,_.Jj],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}\n\n/*# sourceMappingURL=visitors.component.ts-angular-inline--112.css.map*/"]})}return n})();var ne=r(8874);let ie=(()=>{class n{constructor(e){this._dialog_ref=e}onDone(){this._dialog_ref.close()}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(x.CP))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["invite-visitor-modal"]],decls:2,vars:0,consts:[[1,"relative","min-w-[40rem]","min-h-[40rem]"],[3,"done"]],template:function(s,i){1&s&&(t.j41(0,"main",0)(1,"invite-visitor-form",1),t.bIt("done",function(){return i.onDone()}),t.k0s()())},dependencies:[ne.j]})}return n})();var se=r(5189),oe=r(6843),ae=r(6062);const re=["app-new-visitors",""];function le(n,l){if(1&n&&(t.j41(0,"div",17),t.EFF(1),t.nI1(2,"building"),t.j41(3,"span",18),t.EFF(4," - "),t.k0s()()),2&n){let e;const s=t.XpG().$implicit;t.R7$(),t.SpI(" ",null==(e=t.bMT(2,1,s.parent_id))?null:e.display_name," ")}}function ce(n,l){if(1&n&&(t.j41(0,"mat-option",14)(1,"div",15),t.DNE(2,le,5,3,"div",16),t.j41(3,"div"),t.EFF(4),t.k0s()()()),2&n){const e=l.$implicit,s=t.XpG();t.Y8G("value",e.id),t.R7$(2),t.Y8G("ngIf",s.use_region),t.R7$(2),t.SpI(" ",e.display_name||e.name," ")}}function de(n,l){1&n&&t.nrm(0,"mat-progress-bar",19)}const pe=[{path:"",component:ee},{path:"new",component:(()=>{class n{get use_region(){return!!this._settings.get("app.use_region")}constructor(e,s,i,o,a,c){this._state=e,this._org=s,this._router=i,this._route=o,this._dialog=a,this._settings=c,this.loading=this._state.loading,this.filters=this._state.filters,this.zones=[],this.levels=(0,F.zV)([this._org.active_building,this._org.active_region]).pipe((0,M.T)(([d,u])=>this._settings.get("app.use_region")?this._org.levelsForRegion(u):this._org.levelsForBuilding(d))),this.setDate=d=>this._state.setFilters({date:d}),this.setFilters=d=>this._state.setFilters(d),this.setSearch=d=>this._state.setSearchString(d),this.updateZones=d=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:d.join(",")}}),this._state.setFilters({zones:d})}}inviteVisitor(){this._dialog.open(ie)}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}static#t=this.\u0275fac=function(s){return new(s||n)(t.rXU(G),t.rXU(w.yb),t.rXU(b.Ix),t.rXU(b.nX),t.rXU(x.bZ),t.rXU(p.h$))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["","app-new-visitors",""]],attrs:re,decls:23,vars:9,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"flex","items-center","px-8","py-4","space-x-2"],[1,"text-2xl","font-medium"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange"],["btn","","matRipple","",3,"click"],[1,"flex","items-center","px-8","pb-4"],["appearance","outline",1,"no-subscript","w-60"],["placeholder","All Levels","multiple","",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[3,"dateChange"],[1,"mx-8","flex-1","h-1/2","overflow-auto"],["class","w-full","mode","indeterminate",4,"ngIf"],[3,"value"],[1,"flex","flex-col-reverse"],["class","text-xs opacity-30",4,"ngIf"],[1,"text-xs","opacity-30"],[1,"opacity-0"],["mode","indeterminate",1,"w-full"]],template:function(s,i){if(1&s&&(t.nrm(0,"app-topbar"),t.j41(1,"div",0),t.nrm(2,"app-sidebar"),t.j41(3,"main",1)(4,"div",2)(5,"h2",3),t.EFF(6,"Visitors"),t.k0s(),t.nrm(7,"div",4),t.j41(8,"searchbar",5),t.bIt("modelChange",function(a){return i.setSearch(a)}),t.k0s(),t.j41(9,"button",6),t.bIt("click",function(){return i.inviteVisitor()}),t.EFF(10," Invite Visitor "),t.k0s()(),t.j41(11,"div",7)(12,"mat-form-field",8)(13,"mat-select",9),t.nI1(14,"async"),t.bIt("ngModelChange",function(a){return i.updateZones(a)}),t.DNE(15,ce,5,3,"mat-option",10),t.nI1(16,"async"),t.k0s()(),t.nrm(17,"div",4),t.j41(18,"date-options",11),t.bIt("dateChange",function(a){return i.setDate(a)}),t.k0s()(),t.j41(19,"div",12),t.nrm(20,"guest-listings"),t.k0s(),t.DNE(21,de,1,0,"mat-progress-bar",13),t.nI1(22,"async"),t.k0s()()),2&s){let o;t.R7$(13),t.Y8G("ngModel",null==(o=t.bMT(14,3,i.filters))?null:o.zones),t.R7$(2),t.Y8G("ngForOf",t.bMT(16,5,i.levels)),t.R7$(6),t.Y8G("ngIf",t.bMT(22,7,i.loading))}},dependencies:[_.Sq,_.bT,h.BC,h.vS,P.o,Y.x,se.S,oe.c,I.rl,U.VO,k.wT,X.HM,k.r6,B,_.Jj,ae.b],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}\n\n/*# sourceMappingURL=new-visitors.component.ts-angular-inline--114.css.map*/"]})}return n})()}];let ue=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#e=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({imports:[_.MD,h.YN,T.r,f.SG,b.iI.forChild(pe)]})}return n})()},8390:(z,C,r)=>{r.d(C,{g8:()=>g,kR:()=>_.k,Gp:()=>v.Gp,KJ:()=>v.KJ,N8:()=>j.N8,SZ:()=>j.SZ,is:()=>V.is});var _=r(1081),T=(r(3924),r(4621),r(9908));class g{constructor(m={}){this.type=m.type||m.location||"other",this.position=m.position||m.map_id||m.asset_id||{x:m.x/m.map_width||0,y:m.y/m.map_height||0},this.variance=m.variance||0,this.last_seen=m.last_seen||(0,T._)(new Date),this.level=m.level,this.building=m.building,this.at_location=!!m.at_location,this.coordinates_from=m.coordinates_from||"top-left"}}var v=r(3693),V=(r(4129),r(6039)),j=r(2372)}}]);
//# sourceMappingURL=apps_concierge_src_app_visitors_visitors_module_ts.js.map