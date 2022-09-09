"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_staff_staff_module_ts"],{66:(ft,S,a)=>{a.r(S),a.d(S,{COMPONENTS:()=>rt,StaffModule:()=>ct});var c=a(4666),x=a(2508),y=a(9885),f=a(1670),J=a(711),h=a(4505),Z=a(7716),m=a(9232),C=a(6942),P=a(9095),U=a(9128),w=a(9377),T=a(3200),u=a(9112),b=a(6221),t=a(2560);let _=(()=>{class s extends u.KG{constructor(e){var n;super(),n=this,this._org=e,this._onsite={},this._events={},this._filters=new h.X({}),this._search=new h.X(""),this._loading=new h.X(!1),this._users=new h.X([]),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.users=this._filters.asObservable(),this.filtered_users=(0,Z.aj)([this._search,this._users,this._filters]).pipe((0,C.U)(o=>{const[i,r,d]=o;return r.filter(g=>(!i||g.name.toLowerCase().includes(i)||g.email.toLowerCase().includes(i))&&(!d.only_onsite||this._onsite[g.email]))})),this.user_events=(0,Z.aj)([this._filters]).pipe((0,P.w)(function(){var o=(0,f.Z)(function*(i){n._loading.next(!0);const r=yield(0,m.F2)({period_start:Math.floor((0,w.Z)(new Date).valueOf()/1e3),period_end:Math.floor((0,T.Z)(new Date).valueOf()/1e3),type:"staff"}).toPromise(),d={},g=(new Date).valueOf();for(const p of r)(0,u.MZ)(g,g,p.date,p.date+60*p.duration*1e3)&&(d[p.asset_id]=p.checked_in,n._events[p.asset_id]=p);return n._onsite=d,n._loading.next(!1),d});return function(i){return o.apply(this,arguments)}}()),(0,U.d)()),this.loadUsers()}setFilters(e){this._filters.next({...this._filters.getValue(),...e})}setSearchString(e){this._search.next(e)}startPolling(e=3e4){this.setFilters(this._filters.getValue()),this.interval("poll",()=>this.setFilters(this._filters.getValue()),e)}stopPolling(){this.clearInterval("poll")}checkin(e){var n=this;return(0,f.Z)(function*(){const o=yield(0,m.km)({booking_start:Math.floor((new Date).valueOf()/1e3),booking_end:Math.floor((0,T.Z)(new Date).valueOf()/1e3),asset_id:e.email,title:"Checked-in Onsite",description:n._org.building.display_name||n._org.building.name,zones:[n._org.building.id],booking_type:"staff"}).toPromise();yield(0,m.FD)(o.id,!0),n._events[e.email]=o,n._onsite[e.email]=!0})()}checkout(e){var n=this;return(0,f.Z)(function*(){const o=n._events[e.email];if(o){const i=yield(0,m.km)({...o.toJSON(),booking_end:Math.floor((new Date).valueOf()/1e3)}).toPromise();yield(0,m.FD)(i.id,!1).toPromise(),n._events[e.email]=i,n._onsite[e.email]=!1}})()}loadUsers(){var e=this;return(0,f.Z)(function*(){const n=yield(0,J.VE)("").toPromise();n.sort((o,i)=>o.name.localeCompare(i.name)),e._users.next(n)})()}}return s.\u0275fac=function(e){return new(e||s)(t.LFG(b.w7))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var z=a(4945),O=a(1294),Q=a(5670),N=a(9396),I=a(5074),D=a(7371),k=a(207),Y=a(4714);function j(s,l){if(1&s&&(t.TgZ(0,"mat-option",7),t._uU(1),t.qZA()),2&s){const e=l.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.display_name||e.name," ")}}let M=(()=>{class s extends u.KG{constructor(e,n,o,i){super(),this._state=e,this._org=n,this._route=o,this._router=i,this.zones=[],this.levels=this._org.active_levels,this.filters=this._state.filters,this.setDate=r=>this._state.setFilters({date:r}),this.setFilters=r=>this._state.setFilters(r),this.setSearch=r=>this._state.setSearchString(r),this.updateZones=r=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:r.join(",")}}),this._state.setFilters({zones:r})}}ngOnInit(){var e=this;return(0,f.Z)(function*(){yield e._org.initialised.pipe((0,Q.P)(n=>n)).toPromise(),e.subscription("route.query",e._route.queryParamMap.subscribe(n=>{if(n.has("zone_ids")){const o=n.get("zone_ids").split(",");if(o.length){const i=e._org.levelWithID(o);if(!i)return;e._org.building=e._org.buildings.find(r=>r.id===i.parent_id),e.zones=o}}})),e.subscription("levels",e._org.active_levels.subscribe(n=>{e.zones=e.zones.filter(o=>n.find(i=>i.id===o)),!e.zones.length&&n.length&&e.zones.push(n[0].id),e.updateZones(e.zones)})),e.setSearch("")})()}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(_),t.Y36(b.w7),t.Y36(y.gz),t.Y36(y.F0))},s.\u0275cmp=t.Xpm({type:s,selectors:[["staff-topbar"]],features:[t.qOj],decls:10,vars:7,consts:[["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange"],[3,"value"]],template:function(e,n){if(1&e&&(t.TgZ(0,"mat-form-field",0)(1,"mat-select",1),t.NdJ("ngModelChange",function(i){return n.zones=i})("ngModelChange",function(i){return n.updateZones(i)}),t.YNc(2,j,2,2,"mat-option",2),t.ALo(3,"async"),t.qZA()(),t.TgZ(4,"mat-slide-toggle",3),t.NdJ("ngModelChange",function(i){return n.setFilters({only_onsite:i})}),t.ALo(5,"async"),t.TgZ(6,"div",4),t._uU(7,"Onsite Only"),t.qZA()(),t._UZ(8,"div",5),t.TgZ(9,"searchbar",6),t.NdJ("modelChange",function(i){return n.setSearch(i)}),t.qZA()),2&e){let o;t.xp6(1),t.Q6J("ngModel",n.zones),t.xp6(1),t.Q6J("ngForOf",t.lcZ(3,3,n.levels)),t.xp6(2),t.Q6J("ngModel",null==(o=t.lcZ(5,5,n.filters))?null:o.only_onsite)}},dependencies:[c.sg,x.JJ,x.On,N.U,I.KE,D.gD,k.ey,Y.Rr,c.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em;border-bottom:1px solid #ccc}[_nghost-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-left:.5rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=staff-topbar.component.ts-angular-inline--113.css.map*/"]}),s})();var E=a(4522),G=a(6896),R=a(1637),$=a(5306),B=a(9685);function X(s,l){1&s&&(t.TgZ(0,"div",11),t._uU(1,"Onsite"),t.qZA())}function H(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"div",1),t._UZ(1,"a-user-avatar",2),t.TgZ(2,"div",3)(3,"div",4),t._uU(4),t.qZA(),t.TgZ(5,"div",5),t._uU(6),t.qZA()(),t.YNc(7,X,2,0,"div",6),t.TgZ(8,"div",7)(9,"action-icon",8),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.onsite?o.checkout():o.checkin())}),t.qZA(),t.TgZ(10,"a",9)(11,"app-icon"),t._uU(12,"email"),t.qZA()(),t.TgZ(13,"a",10)(14,"app-icon"),t._uU(15,"call"),t.qZA()()()()}if(2&s){const e=t.oxw();t.xp6(1),t.Q6J("user",e.user),t.xp6(3),t.Oqu(null==e.user?null:e.user.name),t.xp6(2),t.hij(" ",null==e.user?null:e.user.email," "),t.xp6(1),t.Q6J("ngIf",e.onsite),t.xp6(2),t.Q6J("matTooltip",e.onsite?"Checkout Staff":"Checkin Staff")("loading",e.loading)("content",e.onsite?"event_busy":"event_available"),t.xp6(1),t.Q6J("href","mailto:"+(null==e.user?null:e.user.email),t.LSH),t.uIk("disabled",!(null!=e.user&&e.user.email)),t.xp6(3),t.Q6J("href","tel:"+(null==e.user?null:e.user.phone),t.LSH),t.uIk("disabled",!(null!=e.user&&e.user.phone))}}let L=(()=>{class s{constructor(e){var n=this;this._state=e,this.checkin=(0,f.Z)(function*(){n.loading=!0,yield n._state.checkin(n.user).catch(o=>(0,u.cB)("Error checking in Staff member")),n.loading=!1}),this.checkout=(0,f.Z)(function*(){n.loading=!0,yield n._state.checkout(n.user).catch(o=>(0,u.cB)("Error checking out Staff member")),n.loading=!1})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(_))},s.\u0275cmp=t.Xpm({type:s,selectors:[["staff-details"]],inputs:{user:"user",onsite:"onsite"},decls:1,vars:1,consts:[["class","w-full flex items-center px-4 py-2 bg-white border-b border-gray-200","details","",4,"ngIf"],["details","",1,"w-full","flex","items-center","px-4","py-2","bg-white","border-b","border-gray-200"],[3,"user"],[1,"flex","flex-col","flex-1"],[1,"px-2"],[1,"px-2","text-xs","text-opacity-50"],["class","text-xs opacity-50 px-4",4,"ngIf"],[1,"flex","items-center"],[3,"matTooltip","loading","content","click"],["mat-icon-button","","matTooltip","Email Staff",3,"href"],["mat-icon-button","","matTooltip","Phone Staff",3,"href"],[1,"text-xs","opacity-50","px-4"]],template:function(e,n){1&e&&t.YNc(0,H,16,11,"div",0),2&e&&t.Q6J("ngIf",n.user)},dependencies:[c.O5,E.zs,G.gM,R.m,$.o,B.k],styles:["[_nghost-%COMP%] > div[_ngcontent-%COMP%]:hover{background-color:#f0f0f0!important}\n/*# sourceMappingURL=staff-details.component.ts-angular-inline--115.css.map*/"]}),s})();const K=["container"];function V(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"div",7),t.NdJ("click",function(){const i=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.scrollTo(i))}),t.ALo(1,"async"),t._uU(2),t.qZA()}if(2&s){const e=l.$implicit,n=t.oxw();t.ekj("disabled",t.lcZ(1,5,n.user_list)[e].length<=0)("active",e===n.active_group),t.xp6(2),t.hij(" ",e," ")}}function W(s,l){if(1&s&&(t._UZ(0,"staff-details",12),t.ALo(1,"async"),t.ALo(2,"async")),2&s){const e=l.$implicit,n=l.index,o=t.oxw(2).$implicit,i=t.oxw(2);t.Q6J("id","letter-"+o+"-"+n)("user",e)("onsite",!!t.lcZ(1,3,i.events)&&t.lcZ(2,5,i.events)[e.email])}}function q(s,l){if(1&s&&(t.ynx(0),t.TgZ(1,"div",10),t._uU(2),t.qZA(),t.YNc(3,W,3,7,"staff-details",11),t.ALo(4,"async"),t.BQk()),2&s){const e=t.oxw().$implicit,n=t.oxw(2);t.xp6(1),t.Q6J("id","letter-"+("#"===e?"0":e)),t.xp6(1),t.hij(" ",e," "),t.xp6(1),t.Q6J("ngForOf",t.lcZ(4,3,n.user_list)[e])}}function tt(s,l){if(1&s&&(t.ynx(0),t.YNc(1,q,5,5,"ng-container",9),t.ALo(2,"async"),t.BQk()),2&s){const e=l.$implicit,n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,n.user_list)[e].length)}}function et(s,l){if(1&s&&(t.ynx(0),t.YNc(1,tt,3,3,"ng-container",8),t.BQk()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.groups)}}function nt(s,l){1&s&&t._UZ(0,"mat-progress-bar",13)}function st(s,l){1&s&&(t.TgZ(0,"div",14)(1,"p"),t._uU(2,"No matching staff members"),t.qZA()())}const v="#abcdefghijklmnopqrstuvwxyz".split("");let F=(()=>{class s extends u.KG{constructor(e){super(),this._state=e,this.active_group="#",this.groups=v,this.events=this._state.user_events,this.loading=this._state.loading,this.user_count=this._state.filtered_users.pipe((0,C.U)(n=>n.length)),this.user_list=this._state.filtered_users.pipe((0,C.U)(n=>{const o={};for(const i of v)o[i]=(n||[]).filter(r=>r.name.toLowerCase()[0].startsWith(i)||"#"===i&&!v.includes(r.name.toLowerCase()[0]));return this.timeout("scroll",()=>this.onScroll({}),30),o}))}onScroll(e){const n=this._el.nativeElement.scrollTop;for(const o of v){const i=document.querySelector(`#letter-${"#"===o?"0":o}`);if(i){if(i.offsetTop-n>0)break;this.active_group=o}}}scrollTo(e){const n=document.querySelector(`#letter-${e}-0`);n&&(n.scrollIntoView({behavior:"smooth",block:"center"}),this.active_group=e)}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(_))},s.\u0275cmp=t.Xpm({type:s,selectors:[["staff-listings"]],viewQuery:function(e,n){if(1&e&&t.Gf(K,5),2&e){let o;t.iGM(o=t.CRH())&&(n._el=o.first)}},features:[t.qOj],decls:10,vars:8,consts:[[1,"w-full","p-2","flex","items-center","justify-center"],["letter","","class","capitalize h-6 w-6 flex items-center justify-center text-xs cursor-pointer",3,"disabled","active","click",4,"ngFor","ngForOf"],[1,"flex-1","overflow-auto","w-full","relative","bg-gray-100",2,"height","50%",3,"scroll"],["container",""],[4,"ngIf","ngIfElse"],["mode","indeterminate",4,"ngIf"],["empty_state",""],["letter","",1,"capitalize","h-6","w-6","flex","items-center","justify-center","text-xs","cursor-pointer",3,"click"],[4,"ngFor","ngForOf"],[4,"ngIf"],["group","",1,"capitalize","bg-gray-300","border-b","text-sm","font-medium","sticky","top-0","z-10",3,"id"],[3,"id","user","onsite",4,"ngFor","ngForOf"],[3,"id","user","onsite"],["mode","indeterminate"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,V,3,7,"div",1),t.qZA(),t.TgZ(2,"div",2,3),t.NdJ("scroll",function(i){return n.onScroll(i)}),t.YNc(4,et,2,1,"ng-container",4),t.ALo(5,"async"),t.qZA(),t.YNc(6,nt,1,0,"mat-progress-bar",5),t.ALo(7,"async"),t.YNc(8,st,3,0,"ng-template",null,6,t.W1O)),2&e){const o=t.MAs(9);t.xp6(1),t.Q6J("ngForOf",n.groups),t.xp6(3),t.Q6J("ngIf",t.lcZ(5,4,n.user_count))("ngIfElse",o),t.xp6(2),t.Q6J("ngIf",t.lcZ(7,6,n.loading))}},dependencies:[c.sg,c.O5,O.pW,L,c.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:50%}[letter][_ngcontent-%COMP%]{transition:font-size .2s,color .2s}[group][_ngcontent-%COMP%]{border-color:#ccc;padding:.5rem 1.65rem}.disabled[_ngcontent-%COMP%]{opacity:.2;pointer-events:none}.active[_ngcontent-%COMP%]{font-size:1.25rem;opacity:1;color:#d81b60}\n/*# sourceMappingURL=staff-listing.component.ts-angular-inline--114.css.map*/"]}),s})();const ot=["app-staff",""];function it(s,l){1&s&&t._UZ(0,"mat-progress-bar",4)}let A=(()=>{class s{constructor(e){this._state=e,this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(_))},s.\u0275cmp=t.Xpm({type:s,selectors:[["","app-staff",""]],attrs:ot,decls:6,vars:3,consts:[[1,"relative","overflow-hidden","flex-1","flex","flex-col"],[1,"w-full"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(e,n){1&e&&(t._UZ(0,"sidebar"),t.TgZ(1,"main",0),t._UZ(2,"staff-topbar",1)(3,"staff-listings",2),t.YNc(4,it,1,0,"mat-progress-bar",3),t.ALo(5,"async"),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngIf",t.lcZ(5,1,n.loading)))},dependencies:[c.O5,z.k,O.pW,M,F,c.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}\n/*# sourceMappingURL=staff.component.ts-angular-inline--112.css.map*/"]}),s})();var at=a(3045);const lt=[{path:"",component:A}],rt=[A,M,F,L];let ct=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[c.ez,x.u5,at.v,y.Bz.forChild(lt)]}),s})()}}]);
//# sourceMappingURL=apps_concierge_src_app_staff_staff_module_ts.js.map