"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_staff_staff_module_ts"],{66:(ft,C,a)=>{a.r(C),a.d(C,{COMPONENTS:()=>lt,StaffModule:()=>ct});var c=a(6477),x=a(9542),y=a(6585),f=a(1670),U=a(6150),h=a(4505),Z=a(7716),d=a(5375),S=a(6942),k=a(9095),z=a(9128),b=a(1810),P=a(9377),T=a(3200),u=a(1426),O=a(5912),t=a(6839);let _=(()=>{class s extends u.cx{constructor(e){var n;super(),n=this,this._org=e,this._onsite={},this._events={},this._filters=new h.X({}),this._search=new h.X(""),this._loading=new h.X(!1),this._users=new h.X([]),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.users=this._filters.asObservable(),this.filtered_users=(0,Z.aj)([this._search,this._users,this._filters]).pipe((0,S.U)(o=>{const[i,l,m]=o;return l.filter(g=>(!i||g.name.toLowerCase().includes(i)||g.email.toLowerCase().includes(i))&&(!m.only_onsite||this._onsite[g.email]))})),this.user_events=(0,Z.aj)([this._filters]).pipe((0,k.w)(function(){var o=(0,f.Z)(function*(i){n._loading.next(!0);const l=yield(0,d.F2)({period_start:(0,b.Z)((0,P.Z)(Date.now())),period_end:(0,b.Z)((0,T.Z)(Date.now())),type:"staff"}).toPromise(),m={},g=(new Date).valueOf();for(const p of l)(0,u.MZ)(g,g,p.date,p.date+60*p.duration*1e3)&&(m[p.asset_id]=p.checked_in,n._events[p.asset_id]=p);return n._onsite=m,n._loading.next(!1),m});return function(i){return o.apply(this,arguments)}}()),(0,z.d)()),this.loadUsers(),this.user_events.subscribe()}setFilters(e){this._filters.next({...this._filters.getValue(),...e})}setSearchString(e){this._search.next(e)}startPolling(e=3e4){this.setFilters(this._filters.getValue()),this.interval("poll",()=>this.setFilters(this._filters.getValue()),e)}stopPolling(){this.clearInterval("poll")}checkin(e){var n=this;return(0,f.Z)(function*(){const o=yield(0,d.km)({booking_start:Math.floor((new Date).valueOf()/1e3),booking_end:Math.floor((0,T.Z)(new Date).valueOf()/1e3),asset_id:e.email,title:"Checked-in Onsite",description:n._org.building.display_name||n._org.building.name,zones:[n._org.building.id],booking_type:"staff"}).toPromise();yield(0,d.FD)(o.id,!0).toPromise(),n._events[e.email]=o,n._onsite[e.email]=!0})()}checkout(e){var n=this;return(0,f.Z)(function*(){const o=n._events[e.email];if(o){const i=yield(0,d.km)({...o.toJSON(),booking_end:Math.floor((new Date).valueOf()/1e3)}).toPromise();yield(0,d.FD)(i.id,!1).toPromise(),n._events[e.email]=i,n._onsite[e.email]=!1}})()}loadUsers(){var e=this;return(0,f.Z)(function*(){const n=yield(0,U.VE)("").toPromise();n.sort((o,i)=>o.name.localeCompare(i.name)),e._users.next(n)})()}}return s.\u0275fac=function(e){return new(e||s)(t.LFG(O.w7))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var Q=a(4945),M=a(6297),N=a(5670),I=a(9396),D=a(8750),Y=a(6508),L=a(7728),j=a(4291);function E(s,r){if(1&s&&(t.TgZ(0,"mat-option",8),t._uU(1),t.qZA()),2&s){const e=r.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.display_name||e.name," ")}}let F=(()=>{class s extends u.cx{constructor(e,n,o,i){super(),this._state=e,this._org=n,this._route=o,this._router=i,this.zones=[],this.levels=this._org.active_levels,this.filters=this._state.filters,this.setDate=l=>this._state.setFilters({date:l}),this.setFilters=l=>this._state.setFilters(l),this.setSearch=l=>this._state.setSearchString(l),this.updateZones=l=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:l.join(",")}}),this._state.setFilters({zones:l})}}ngOnInit(){var e=this;return(0,f.Z)(function*(){yield e._org.initialised.pipe((0,N.P)(n=>n)).toPromise(),e.subscription("route.query",e._route.queryParamMap.subscribe(n=>{if(n.has("zone_ids")){const o=n.get("zone_ids").split(",");if(o.length){const i=e._org.levelWithID(o);if(!i)return;e._org.building=e._org.buildings.find(l=>l.id===i.parent_id),e.zones=o}}})),e.subscription("levels",e._org.active_levels.subscribe(n=>{e.zones=e.zones.filter(o=>n.find(i=>i.id===o)),!e.zones.length&&n.length&&e.zones.push(n[0].id),e.updateZones(e.zones)})),e.setSearch("")})()}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(_),t.Y36(O.w7),t.Y36(y.gz),t.Y36(y.F0))},s.\u0275cmp=t.Xpm({type:s,selectors:[["staff-topbar"]],features:[t.qOj],decls:11,vars:7,consts:[[1,"flex","items-center","bg-white","dark:bg-neutral-700","h-20","px-4","border-b","border-gray-300","dark:border-neutral-500","space-x-2"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange"],[3,"value"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),t.NdJ("ngModelChange",function(i){return n.zones=i})("ngModelChange",function(i){return n.updateZones(i)}),t.YNc(3,E,2,2,"mat-option",3),t.ALo(4,"async"),t.qZA()(),t.TgZ(5,"mat-slide-toggle",4),t.NdJ("ngModelChange",function(i){return n.setFilters({only_onsite:i})}),t.ALo(6,"async"),t.TgZ(7,"div",5),t._uU(8,"Onsite Only"),t.qZA()(),t._UZ(9,"div",6),t.TgZ(10,"searchbar",7),t.NdJ("modelChange",function(i){return n.setSearch(i)}),t.qZA()()),2&e){let o;t.xp6(2),t.Q6J("ngModel",n.zones),t.xp6(1),t.Q6J("ngForOf",t.lcZ(4,3,n.levels)),t.xp6(2),t.Q6J("ngModel",null==(o=t.lcZ(6,5,n.filters))?null:o.only_onsite)}},dependencies:[c.sg,x.JJ,x.On,I.U,D.KE,Y.gD,L.ey,j.Rr,c.Ov],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=staff-topbar.component.ts-angular-inline--126.css.map*/"]}),s})();var R=a(2423),$=a(1637),B=a(5306),X=a(9685);function G(s,r){1&s&&(t.TgZ(0,"div",11),t._uU(1,"Onsite"),t.qZA())}function H(s,r){if(1&s){const e=t.EpF();t.TgZ(0,"div",1),t._UZ(1,"a-user-avatar",2),t.TgZ(2,"div",3)(3,"div",4),t._uU(4),t.qZA(),t.TgZ(5,"div",5),t._uU(6),t.qZA()(),t.YNc(7,G,2,0,"div",6),t.TgZ(8,"div",7)(9,"action-icon",8),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.onsite?o.checkout():o.checkin())}),t.qZA(),t.TgZ(10,"a",9)(11,"app-icon"),t._uU(12,"email"),t.qZA()(),t.TgZ(13,"a",10)(14,"app-icon"),t._uU(15,"call"),t.qZA()()()()}if(2&s){const e=t.oxw();t.xp6(1),t.Q6J("user",e.user),t.xp6(3),t.Oqu(null==e.user?null:e.user.name),t.xp6(2),t.hij(" ",null==e.user?null:e.user.email," "),t.xp6(1),t.Q6J("ngIf",e.onsite),t.xp6(2),t.Q6J("matTooltip",e.onsite?"Checkout Staff":"Checkin Staff")("loading",e.loading)("content",e.onsite?"event_busy":"event_available"),t.xp6(1),t.Q6J("href","mailto:"+(null==e.user?null:e.user.email),t.LSH),t.uIk("disabled",!(null!=e.user&&e.user.email)),t.xp6(3),t.Q6J("href","tel:"+(null==e.user?null:e.user.phone),t.LSH),t.uIk("disabled",!(null!=e.user&&e.user.phone))}}let A=(()=>{class s{constructor(e){var n=this;this._state=e,this.checkin=(0,f.Z)(function*(){n.loading=!0,yield n._state.checkin(n.user).catch(o=>(0,u.cB)("Error checking in Staff member")),n.loading=!1}),this.checkout=(0,f.Z)(function*(){n.loading=!0,yield n._state.checkout(n.user).catch(o=>(0,u.cB)("Error checking out Staff member")),n.loading=!1})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(_))},s.\u0275cmp=t.Xpm({type:s,selectors:[["staff-details"]],inputs:{user:"user",onsite:"onsite"},decls:1,vars:1,consts:[["class","w-full flex items-center px-4 py-2 bg-white dark:bg-neutral-700 border-b border-gray-200 dark:border-neutral-500 hover:opacity-80","details","",4,"ngIf"],["details","",1,"w-full","flex","items-center","px-4","py-2","bg-white","dark:bg-neutral-700","border-b","border-gray-200","dark:border-neutral-500","hover:opacity-80"],[3,"user"],[1,"flex","flex-col","flex-1"],[1,"px-2"],[1,"px-2","text-xs","text-opacity-50"],["class","text-xs opacity-50 px-4",4,"ngIf"],[1,"flex","items-center"],[3,"matTooltip","loading","content","click"],["icon","","matRipple","","matTooltip","Email Staff",3,"href"],["icon","","matRipple","","matTooltip","Phone Staff",3,"href"],[1,"text-xs","opacity-50","px-4"]],template:function(e,n){1&e&&t.YNc(0,H,16,11,"div",0),2&e&&t.Q6J("ngIf",n.user)},dependencies:[c.O5,R.gM,L.wG,$.m,B.o,X.k]}),s})();const V=["container"];function W(s,r){if(1&s){const e=t.EpF();t.TgZ(0,"div",7),t.NdJ("click",function(){const i=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.scrollTo(i))}),t.ALo(1,"async"),t._uU(2),t.qZA()}if(2&s){const e=r.$implicit,n=t.oxw();t.ekj("disabled",t.lcZ(1,5,n.user_list)[e].length<=0)("active",e===n.active_group),t.xp6(2),t.hij(" ",e," ")}}function K(s,r){if(1&s&&(t._UZ(0,"staff-details",12),t.ALo(1,"async"),t.ALo(2,"async")),2&s){const e=r.$implicit,n=r.index,o=t.oxw(2).$implicit,i=t.oxw(2);t.Q6J("id","letter-"+o+"-"+n)("user",e)("onsite",!!t.lcZ(1,3,i.events)&&t.lcZ(2,5,i.events)[e.email])}}function q(s,r){if(1&s&&(t.ynx(0),t.TgZ(1,"div",10),t._uU(2),t.qZA(),t.YNc(3,K,3,7,"staff-details",11),t.ALo(4,"async"),t.BQk()),2&s){const e=t.oxw().$implicit,n=t.oxw(2);t.xp6(1),t.Q6J("id","letter-"+("#"===e?"0":e)),t.xp6(1),t.hij(" ",e," "),t.xp6(1),t.Q6J("ngForOf",t.lcZ(4,3,n.user_list)[e])}}function tt(s,r){if(1&s&&(t.ynx(0),t.YNc(1,q,5,5,"ng-container",9),t.ALo(2,"async"),t.BQk()),2&s){const e=r.$implicit,n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,n.user_list)[e].length)}}function et(s,r){if(1&s&&(t.ynx(0),t.YNc(1,tt,3,3,"ng-container",8),t.BQk()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.groups)}}function nt(s,r){1&s&&t._UZ(0,"mat-progress-bar",13)}function st(s,r){1&s&&(t.TgZ(0,"div",14)(1,"p"),t._uU(2,"No matching staff members"),t.qZA()())}const v="#abcdefghijklmnopqrstuvwxyz".split("");let w=(()=>{class s extends u.cx{constructor(e){super(),this._state=e,this.active_group="#",this.groups=v,this.events=this._state.user_events,this.loading=this._state.loading,this.user_count=this._state.filtered_users.pipe((0,S.U)(n=>n.length)),this.user_list=this._state.filtered_users.pipe((0,S.U)(n=>{const o={};for(const i of v)o[i]=(n||[]).filter(l=>l.name.toLowerCase()[0].startsWith(i)||"#"===i&&!v.includes(l.name.toLowerCase()[0]));return this.timeout("scroll",()=>this.onScroll({}),30),o}))}onScroll(e){const n=this._el.nativeElement.scrollTop;for(const o of v){const i=document.querySelector(`#letter-${"#"===o?"0":o}`);if(i){if(i.offsetTop-n>0)break;this.active_group=o}}}scrollTo(e){const n=document.querySelector(`#letter-${e}-0`);n&&(n.scrollIntoView({behavior:"smooth",block:"center"}),this.active_group=e)}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(_))},s.\u0275cmp=t.Xpm({type:s,selectors:[["staff-listings"]],viewQuery:function(e,n){if(1&e&&t.Gf(V,5),2&e){let o;t.iGM(o=t.CRH())&&(n._el=o.first)}},features:[t.qOj],decls:10,vars:8,consts:[[1,"w-full","p-2","flex","items-center","justify-center"],["letter","","class","capitalize h-6 w-6 flex items-center justify-center text-xs cursor-pointer",3,"disabled","active","click",4,"ngFor","ngForOf"],[1,"flex-1","overflow-auto","w-full","relative","bg-gray-100","dark:bg-neutral-600",2,"height","50%",3,"scroll"],["container",""],[4,"ngIf","ngIfElse"],["mode","indeterminate",4,"ngIf"],["empty_state",""],["letter","",1,"capitalize","h-6","w-6","flex","items-center","justify-center","text-xs","cursor-pointer",3,"click"],[4,"ngFor","ngForOf"],[4,"ngIf"],["group","",1,"capitalize","bg-gray-300","dark:bg-gray-700","border-b","text-sm","font-medium","sticky","top-0","z-10",3,"id"],[3,"id","user","onsite",4,"ngFor","ngForOf"],[3,"id","user","onsite"],["mode","indeterminate"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,W,3,7,"div",1),t.qZA(),t.TgZ(2,"div",2,3),t.NdJ("scroll",function(i){return n.onScroll(i)}),t.YNc(4,et,2,1,"ng-container",4),t.ALo(5,"async"),t.qZA(),t.YNc(6,nt,1,0,"mat-progress-bar",5),t.ALo(7,"async"),t.YNc(8,st,3,0,"ng-template",null,6,t.W1O)),2&e){const o=t.MAs(9);t.xp6(1),t.Q6J("ngForOf",n.groups),t.xp6(3),t.Q6J("ngIf",t.lcZ(5,4,n.user_count))("ngIfElse",o),t.xp6(2),t.Q6J("ngIf",t.lcZ(7,6,n.loading))}},dependencies:[c.sg,c.O5,M.pW,A,c.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:50%}[letter][_ngcontent-%COMP%]{transition:font-size .2s,color .2s}[group][_ngcontent-%COMP%]{border-color:#ccc;padding:.5rem 1.65rem}.disabled[_ngcontent-%COMP%]{opacity:.2;pointer-events:none}.active[_ngcontent-%COMP%]{font-size:1.25rem;opacity:1;color:#d81b60}\n/*# sourceMappingURL=staff-listing.component.ts-angular-inline--127.css.map*/"]}),s})();const ot=["app-staff",""];function it(s,r){1&s&&t._UZ(0,"mat-progress-bar",4)}let J=(()=>{class s{constructor(e){this._state=e,this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(_))},s.\u0275cmp=t.Xpm({type:s,selectors:[["","app-staff",""]],attrs:ot,decls:6,vars:3,consts:[[1,"relative","overflow-hidden","flex-1","flex","flex-col","bg-gray-200","dark:bg-neutral-600"],[1,"w-full"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(e,n){1&e&&(t._UZ(0,"sidebar"),t.TgZ(1,"main",0),t._UZ(2,"staff-topbar",1)(3,"staff-listings",2),t.YNc(4,it,1,0,"mat-progress-bar",3),t.ALo(5,"async"),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngIf",t.lcZ(5,1,n.loading)))},dependencies:[c.O5,Q.k,M.pW,F,w,c.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}\n/*# sourceMappingURL=staff.component.ts-angular-inline--125.css.map*/"]}),s})();var at=a(3045);const rt=[{path:"",component:J}],lt=[J,F,w,A];let ct=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[c.ez,x.u5,at.v,y.Bz.forChild(rt)]}),s})()}}]);
//# sourceMappingURL=apps_concierge_src_app_staff_staff_module_ts.js.map