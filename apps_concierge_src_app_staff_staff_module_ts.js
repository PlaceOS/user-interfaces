(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([["apps_concierge_src_app_staff_staff_module_ts"],{1497:(t,e,s)=>{"use strict";s.r(e),s.d(e,{COMPONENTS:()=>K,StaffModule:()=>R});var i=s(1511),n=s(6073),o=s(6898),r=s(2619),l=s(4762),a=s(4587),c=s(8512),u=s(3080),f=s(6839),h=s(9996),d=s(4689),g=s(8303),p=s(205),_=s(8125),m=s(8223),v=s(9294);let x=(()=>{class t extends m.KG{constructor(t){super(),this._org=t,this._onsite={},this._events={},this._filters=new c.X({}),this._search=new c.X(""),this._loading=new c.X(!1),this._users=new c.X([]),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.users=this._filters.asObservable(),this.filtered_users=(0,u.aj)([this._search,this._users,this._filters]).pipe((0,h.U)(t=>{const[e,s,i]=t;return s.filter(t=>(!e||t.name.toLowerCase().includes(e)||t.email.toLowerCase().includes(e))&&(!i.only_onsite||this._onsite[t.email]))})),this.user_events=(0,u.aj)([this._filters]).pipe((0,d.w)(t=>(0,l.mG)(this,void 0,void 0,function*(){this._loading.next(!0);const t=yield(0,f.F2)({period_start:Math.floor((0,p.Z)(new Date).valueOf()/1e3),period_end:Math.floor((0,_.Z)(new Date).valueOf()/1e3),type:"staff"}).toPromise(),e={},s=(new Date).valueOf();for(const i of t)(0,m.MZ)(s,s,i.date,i.date+60*i.duration*1e3)&&(e[i.asset_id]=i.checked_in,this._events[i.asset_id]=i);return this._onsite=e,this._loading.next(!1),e})),(0,g.d)()),this.loadUsers()}setFilters(t){this._filters.next(Object.assign(Object.assign({},this._filters.getValue()),t))}setSearchString(t){this._search.next(t)}startPolling(t=3e4){this.setFilters(this._filters.getValue()),this.interval("poll",()=>this.setFilters(this._filters.getValue()),t)}stopPolling(){this.clearInterval("poll")}checkin(t){return(0,l.mG)(this,void 0,void 0,function*(){const e=yield(0,f.km)({booking_start:Math.floor((new Date).valueOf()/1e3),booking_end:Math.floor((0,_.Z)(new Date).valueOf()/1e3),asset_id:t.email,title:"Checked-in Onsite",description:this._org.building.display_name||this._org.building.name,zones:[this._org.building.id],booking_type:"staff"}).toPromise();yield(0,f.FD)(e.id,!0),this._events[t.email]=e,this._onsite[t.email]=!0})}checkout(t){return(0,l.mG)(this,void 0,void 0,function*(){const e=this._events[t.email];if(e){const s=yield(0,f.km)(Object.assign(Object.assign({},e.toJSON()),{booking_end:Math.floor((new Date).valueOf()/1e3)})).toPromise();yield(0,f.FD)(s.id,!1).toPromise(),this._events[t.email]=s,this._onsite[t.email]=!1}})}loadUsers(){return(0,l.mG)(this,void 0,void 0,function*(){const t=yield(0,a.VE)("").toPromise();t.sort((t,e)=>t.name.localeCompare(e.name)),this._users.next(t)})}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(v.w7))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var Z=s(1490),b=s(3530),y=s(6283),O=s(4786),w=s(7521),k=s(2319),A=s(1522);function M(t,e){if(1&t&&(r.TgZ(0,"mat-option",7),r._uU(1),r.qZA()),2&t){const t=e.$implicit;r.Q6J("value",t.id),r.xp6(1),r.hij(" ",t.display_name||t.name," ")}}let q=(()=>{class t extends m.KG{constructor(t,e,s,i){super(),this._state=t,this._org=e,this._route=s,this._router=i,this.zones=[],this.levels=this._org.active_levels,this.filters=this._state.filters,this.setDate=t=>this._state.setFilters({date:t}),this.setFilters=t=>this._state.setFilters(t),this.setSearch=t=>this._state.setSearchString(t),this.updateZones=t=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:t.join(",")}}),this._state.setFilters({zones:t})}}ngOnInit(){return(0,l.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,b.P)(t=>t)).toPromise(),this.subscription("route.query",this._route.queryParamMap.subscribe(t=>{if(t.has("zone_ids")){const e=t.get("zone_ids").split(",");if(e.length){const t=this._org.levelWithID(e);if(!t)return;this._org.building=this._org.buildings.find(e=>e.id===t.parent_id),this.zones=e}}})),this.subscription("levels",this._org.active_levels.subscribe(t=>{this.zones=this.zones.filter(e=>t.find(t=>t.id===e)),!this.zones.length&&t.length&&this.zones.push(t[0].id),this.updateZones(this.zones)})),this.setSearch("")})}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(x),r.Y36(v.w7),r.Y36(o.gz),r.Y36(o.F0))},t.\u0275cmp=r.Xpm({type:t,selectors:[["staff-topbar"]],features:[r.qOj],decls:10,vars:7,consts:[["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange"],[3,"value"]],template:function(t,e){if(1&t&&(r.TgZ(0,"mat-form-field",0),r.TgZ(1,"mat-select",1),r.NdJ("ngModelChange",function(t){return e.zones=t})("ngModelChange",function(t){return e.updateZones(t)}),r.YNc(2,M,2,2,"mat-option",2),r.ALo(3,"async"),r.qZA(),r.qZA(),r.TgZ(4,"mat-slide-toggle",3),r.NdJ("ngModelChange",function(t){return e.setFilters({only_onsite:t})}),r.ALo(5,"async"),r.TgZ(6,"div",4),r._uU(7,"Onsite Only"),r.qZA(),r.qZA(),r._UZ(8,"div",5),r.TgZ(9,"searchbar",6),r.NdJ("modelChange",function(t){return e.setSearch(t)}),r.qZA()),2&t){let t;r.xp6(1),r.Q6J("ngModel",e.zones),r.xp6(1),r.Q6J("ngForOf",r.lcZ(3,3,e.levels)),r.xp6(2),r.Q6J("ngModel",null==(t=r.lcZ(5,5,e.filters))?null:t.only_onsite)}},directives:[y.KE,O.gD,n.JJ,n.On,i.sg,w.Rr,k.U,A.ey],pipes:[i.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em;border-bottom:1px solid #ccc}[_nghost-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-left:.5rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}"]}),t})();var C=s(5969),T=s(9436),J=s(6828),P=s(5980),z=s(1548);function F(t,e){1&t&&(r.TgZ(0,"div",10),r._uU(1,"Onsite"),r.qZA())}let S=(()=>{class t{constructor(t){this._state=t,this.checkin=()=>(0,l.mG)(this,void 0,void 0,function*(){this.loading=!0,yield this._state.checkin(this.user).catch(t=>(0,m.cB)("Error checking in Staff member")),this.loading=!1}),this.checkout=()=>(0,l.mG)(this,void 0,void 0,function*(){this.loading=!0,yield this._state.checkout(this.user).catch(t=>(0,m.cB)("Error checking out Staff member")),this.loading=!1})}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(x))},t.\u0275cmp=r.Xpm({type:t,selectors:[["staff-details"]],inputs:{user:"user",onsite:"onsite"},decls:16,vars:11,consts:[[1,"w-full","flex","items-center","px-4","py-2","bg-white","border-b","border-gray-200"],[3,"user"],[1,"flex","flex-col","flex-1"],[1,"px-2"],[1,"px-2","text-xs","text-opacity-50"],["class","text-xs opacity-50 px-4",4,"ngIf"],[1,"flex","items-center"],[3,"matTooltip","loading","content","click"],["mat-icon-button","","matTooltip","Email Staff",3,"disabled","href"],["mat-icon-button","","matTooltip","Phone Staff",3,"disabled","href"],[1,"text-xs","opacity-50","px-4"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r._UZ(1,"a-user-avatar",1),r.TgZ(2,"div",2),r.TgZ(3,"div",3),r._uU(4),r.qZA(),r.TgZ(5,"div",4),r._uU(6),r.qZA(),r.qZA(),r.YNc(7,F,2,0,"div",5),r.TgZ(8,"div",6),r.TgZ(9,"action-icon",7),r.NdJ("click",function(){return e.onsite?e.checkout():e.checkin()}),r.qZA(),r.TgZ(10,"a",8),r.TgZ(11,"app-icon"),r._uU(12,"email"),r.qZA(),r.qZA(),r.TgZ(13,"a",9),r.TgZ(14,"app-icon"),r._uU(15,"call"),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(1),r.Q6J("user",e.user),r.xp6(3),r.Oqu(null==e.user?null:e.user.name),r.xp6(2),r.Oqu(null==e.user?null:e.user.email),r.xp6(1),r.Q6J("ngIf",e.onsite),r.xp6(2),r.Q6J("matTooltip",e.onsite?"Checkout Staff":"Checkin Staff")("loading",e.loading)("content",e.onsite?"event_busy":"event_available"),r.xp6(1),r.Q6J("disabled",!(null!=e.user&&e.user.email))("href","mailto:"+(null==e.user?null:e.user.email),r.LSH),r.xp6(3),r.Q6J("disabled",!(null!=e.user&&e.user.phone))("href","tel:"+(null==e.user?null:e.user.phone),r.LSH))},directives:[C.k,i.O5,T.m,J.gM,P.zs,z.o],styles:["[_nghost-%COMP%] > div[_ngcontent-%COMP%]:hover{background-color:#f0f0f0!important}"]}),t})();var U=s(5994);const Q=["container"];function N(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"div",7),r.NdJ("click",function(){const e=r.CHM(t).$implicit;return r.oxw().scrollTo(e)}),r.ALo(1,"async"),r._uU(2),r.qZA()}if(2&t){const t=e.$implicit,s=r.oxw();r.ekj("disabled",r.lcZ(1,5,s.user_list)[t].length<=0)("active",t===s.active_group),r.xp6(2),r.hij(" ",t," ")}}function j(t,e){if(1&t&&(r._UZ(0,"staff-details",12),r.ALo(1,"async"),r.ALo(2,"async")),2&t){const t=e.$implicit,s=e.index,i=r.oxw(2).$implicit,n=r.oxw(2);r.Q6J("id","letter-"+i+"-"+s)("user",t)("onsite",!!r.lcZ(1,3,n.events)&&r.lcZ(2,5,n.events)[t.email])}}function I(t,e){if(1&t&&(r.ynx(0),r.TgZ(1,"div",10),r._uU(2),r.qZA(),r.YNc(3,j,3,7,"staff-details",11),r.ALo(4,"async"),r.BQk()),2&t){const t=r.oxw().$implicit,e=r.oxw(2);r.xp6(1),r.Q6J("id","letter-"+("#"===t?"0":t)),r.xp6(1),r.hij(" ",t," "),r.xp6(1),r.Q6J("ngForOf",r.lcZ(4,3,e.user_list)[t])}}function L(t,e){if(1&t&&(r.ynx(0),r.YNc(1,I,5,5,"ng-container",9),r.ALo(2,"async"),r.BQk()),2&t){const t=e.$implicit,s=r.oxw(2);r.xp6(1),r.Q6J("ngIf",r.lcZ(2,1,s.user_list)[t].length)}}function Y(t,e){if(1&t&&(r.ynx(0),r.YNc(1,L,3,3,"ng-container",8),r.BQk()),2&t){const t=r.oxw();r.xp6(1),r.Q6J("ngForOf",t.groups)}}function G(t,e){1&t&&r._UZ(0,"mat-progress-bar",13)}function D(t,e){1&t&&(r.TgZ(0,"div",14),r.TgZ(1,"p"),r._uU(2,"No matching staff members"),r.qZA(),r.qZA())}const E="#abcdefghijklmnopqrstuvwxyz".split("");let $=(()=>{class t extends m.KG{constructor(t){super(),this._state=t,this.active_group="#",this.groups=E,this.events=this._state.user_events,this.loading=this._state.loading,this.user_count=this._state.filtered_users.pipe((0,h.U)(t=>t.length)),this.user_list=this._state.filtered_users.pipe((0,h.U)(t=>{const e={};for(const s of E)e[s]=(t||[]).filter(t=>t.name.toLowerCase()[0].startsWith(s)||"#"===s&&!E.includes(t.name.toLowerCase()[0]));return this.timeout("scroll",()=>this.onScroll({}),30),e}))}onScroll(t){const e=this._el.nativeElement.scrollTop;for(const s of E){const t=document.querySelector(`#letter-${"#"===s?"0":s}`);if(t){if(t.offsetTop-e>0)break;this.active_group=s}}}scrollTo(t){const e=document.querySelector(`#letter-${t}-0`);e&&(e.scrollIntoView({behavior:"smooth",block:"center"}),this.active_group=t)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(x))},t.\u0275cmp=r.Xpm({type:t,selectors:[["staff-listings"]],viewQuery:function(t,e){if(1&t&&r.Gf(Q,5),2&t){let t;r.iGM(t=r.CRH())&&(e._el=t.first)}},features:[r.qOj],decls:10,vars:8,consts:[[1,"w-full","p-2","flex","items-center","justify-center"],["letter","","class","capitalize h-6 w-6 flex items-center justify-center text-xs cursor-pointer",3,"disabled","active","click",4,"ngFor","ngForOf"],[1,"flex-1","overflow-auto","w-full","relative","bg-gray-100",2,"height","50%",3,"scroll"],["container",""],[4,"ngIf","ngIfElse"],["mode","indeterminate",4,"ngIf"],["empty_state",""],["letter","",1,"capitalize","h-6","w-6","flex","items-center","justify-center","text-xs","cursor-pointer",3,"click"],[4,"ngFor","ngForOf"],[4,"ngIf"],["group","",1,"capitalize","bg-gray-300","border-b","text-sm","font-medium","sticky","top-0","z-10",3,"id"],[3,"id","user","onsite",4,"ngFor","ngForOf"],[3,"id","user","onsite"],["mode","indeterminate"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center"]],template:function(t,e){if(1&t&&(r.TgZ(0,"div",0),r.YNc(1,N,3,7,"div",1),r.qZA(),r.TgZ(2,"div",2,3),r.NdJ("scroll",function(t){return e.onScroll(t)}),r.YNc(4,Y,2,1,"ng-container",4),r.ALo(5,"async"),r.qZA(),r.YNc(6,G,1,0,"mat-progress-bar",5),r.ALo(7,"async"),r.YNc(8,D,3,0,"ng-template",null,6,r.W1O)),2&t){const t=r.MAs(9);r.xp6(1),r.Q6J("ngForOf",e.groups),r.xp6(3),r.Q6J("ngIf",r.lcZ(5,4,e.user_count))("ngIfElse",t),r.xp6(2),r.Q6J("ngIf",r.lcZ(7,6,e.loading))}},directives:[i.sg,i.O5,S,U.pW],pipes:[i.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:50%}[letter][_ngcontent-%COMP%]{transition:font-size .2s,color .2s}[group][_ngcontent-%COMP%]{border-color:#ccc;padding:.5rem 1.65rem}.disabled[_ngcontent-%COMP%]{opacity:.2;pointer-events:none}.active[_ngcontent-%COMP%]{font-size:1.25rem;opacity:1;color:#d81b60}"]}),t})();const X=["app-staff",""];function B(t,e){1&t&&r._UZ(0,"mat-progress-bar",4)}let V=(()=>{class t{constructor(t){this._state=t,this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(x))},t.\u0275cmp=r.Xpm({type:t,selectors:[["","app-staff",""]],attrs:X,decls:6,vars:3,consts:[[1,"relative","overflow-hidden","flex-1","flex","flex-col"],[1,"w-full"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(t,e){1&t&&(r._UZ(0,"sidebar"),r.TgZ(1,"main",0),r._UZ(2,"staff-topbar",1),r._UZ(3,"staff-listings",2),r.YNc(4,B,1,0,"mat-progress-bar",3),r.ALo(5,"async"),r.qZA()),2&t&&(r.xp6(4),r.Q6J("ngIf",r.lcZ(5,1,e.loading)))},directives:[Z.k,q,$,i.O5,U.pW],pipes:[i.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}"]}),t})();var W=s(787);const H=[{path:"",component:V}],K=[V,q,$,S];let R=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[i.ez,n.u5,W.v,o.Bz.forChild(H)]]}),t})()}}]);
//# sourceMappingURL=apps_concierge_src_app_staff_staff_module_ts.js.map