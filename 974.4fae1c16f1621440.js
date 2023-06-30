"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([[974],{6974:(mt,T,r)=>{r.r(T),r.d(T,{COMPONENTS:()=>gt,StaffModule:()=>dt});var c=r(4755),x=r(9401),y=r(5055),f=r(5861),U=r(7577),_=r(591),O=r(3426),d=r(5375),S=r(4850),P=r(7545),k=r(5154),w=r(9972),I=r(8115),M=r(2722),u=r(1426),F=r(5912),t=r(2223);let m=(()=>{class o extends u.cx{constructor(e){var n;super(),n=this,this._org=e,this._onsite={},this._events={},this._filters=new _.X({}),this._search=new _.X(""),this._loading=new _.X(!1),this._users=new _.X([]),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.users=this._filters.asObservable(),this.filtered_users=(0,O.aj)([this._search,this._users,this._filters]).pipe((0,S.U)(s=>{const[i,l,h]=s;return l.filter(g=>(!i||g.name.toLowerCase().includes(i)||g.email.toLowerCase().includes(i))&&(!h.only_onsite||this._onsite[g.email]))})),this.user_events=(0,O.aj)([this._filters]).pipe((0,P.w)(function(){var s=(0,f.Z)(function*(i){n._loading.next(!0);const l=yield(0,d.F2)({period_start:(0,w.Z)((0,I.Z)(Date.now())),period_end:(0,w.Z)((0,M.Z)(Date.now())),type:"staff"}).toPromise(),h={},g=(new Date).valueOf();for(const p of l)(0,u.MZ)(g,g,p.date,p.date+60*p.duration*1e3)&&(h[p.asset_id]=p.checked_in,n._events[p.asset_id]=p);return n._onsite=h,n._loading.next(!1),h});return function(i){return s.apply(this,arguments)}}()),(0,k.d)()),this.loadUsers(),this.user_events.subscribe()}setFilters(e){this._filters.next({...this._filters.getValue(),...e})}setSearchString(e){this._search.next(e)}startPolling(e=3e4){this.setFilters(this._filters.getValue()),this.interval("poll",()=>this.setFilters(this._filters.getValue()),e)}stopPolling(){this.clearInterval("poll")}checkin(e){var n=this;return(0,f.Z)(function*(){const s=yield(0,d.km)({booking_start:Math.floor((new Date).valueOf()/1e3),booking_end:Math.floor((0,M.Z)(new Date).valueOf()/1e3),asset_id:e.email,title:"Checked-in Onsite",description:n._org.building.display_name||n._org.building.name,zones:[n._org.building.id],booking_type:"staff"}).toPromise();yield(0,d.FD)(s.id,!0).toPromise(),n._events[e.email]=s,n._onsite[e.email]=!0})()}checkout(e){var n=this;return(0,f.Z)(function*(){const s=n._events[e.email];if(s){const i=yield(0,d.km)({...s.toJSON(),booking_end:Math.floor((new Date).valueOf()/1e3)}).toPromise();yield(0,d.FD)(i.id,!1).toPromise(),n._events[e.email]=i,n._onsite[e.email]=!1}})()}loadUsers(){var e=this;return(0,f.Z)(function*(){const n=yield(0,U.VE)("").toPromise();n.sort((s,i)=>s.name.localeCompare(i.name)),e._users.next(n)})()}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(F.w7))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var Q=r(4945),C=r(7081),z=r(7224),D=r(9396),Y=r(9114),j=r(787),L=r(1217),E=r(877);function X(o,a){if(1&o&&(t.TgZ(0,"mat-option",8),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.display_name||e.name," ")}}let Z=(()=>{class o extends u.cx{constructor(e,n,s,i){super(),this._state=e,this._org=n,this._route=s,this._router=i,this.zones=[],this.levels=this._org.active_levels,this.filters=this._state.filters,this.setDate=l=>this._state.setFilters({date:l}),this.setFilters=l=>this._state.setFilters(l),this.setSearch=l=>this._state.setSearchString(l),this.updateZones=l=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:l.join(",")}}),this._state.setFilters({zones:l})}}ngOnInit(){var e=this;return(0,f.Z)(function*(){yield e._org.initialised.pipe((0,z.P)(n=>n)).toPromise(),e.subscription("route.query",e._route.queryParamMap.subscribe(n=>{if(n.has("zone_ids")){const s=n.get("zone_ids").split(",");if(s.length){const i=e._org.levelWithID(s);if(!i)return;e._org.building=e._org.buildings.find(l=>l.id===i.parent_id),e.zones=s}}})),e.subscription("levels",e._org.active_levels.subscribe(n=>{e.zones=e.zones.filter(s=>n.find(i=>i.id===s)),!e.zones.length&&n.length&&e.zones.push(n[0].id),e.updateZones(e.zones)})),e.setSearch("")})()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m),t.Y36(F.w7),t.Y36(y.gz),t.Y36(y.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["staff-topbar"]],features:[t.qOj],decls:11,vars:7,consts:[[1,"flex","items-center","bg-white","dark:bg-neutral-700","h-20","px-4","border-b","border-gray-300","dark:border-neutral-500","space-x-2"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange"],[3,"value"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),t.NdJ("ngModelChange",function(i){return n.zones=i})("ngModelChange",function(i){return n.updateZones(i)}),t.YNc(3,X,2,2,"mat-option",3),t.ALo(4,"async"),t.qZA()(),t.TgZ(5,"mat-slide-toggle",4),t.NdJ("ngModelChange",function(i){return n.setFilters({only_onsite:i})}),t.ALo(6,"async"),t.TgZ(7,"div",5),t._uU(8,"Onsite Only"),t.qZA()(),t._UZ(9,"div",6),t.TgZ(10,"searchbar",7),t.NdJ("modelChange",function(i){return n.setSearch(i)}),t.qZA()()),2&e){let s;t.xp6(2),t.Q6J("ngModel",n.zones),t.xp6(1),t.Q6J("ngForOf",t.lcZ(4,3,n.levels)),t.xp6(2),t.Q6J("ngModel",null==(s=t.lcZ(6,5,n.filters))?null:s.only_onsite)}},dependencies:[c.sg,x.JJ,x.On,D.U,Y.KE,j.gD,L.ey,E.Rr,c.Ov],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}"]}),o})();var $=r(3649),B=r(1637),G=r(5306),R=r(9685);function H(o,a){1&o&&(t.TgZ(0,"div",11),t._uU(1,"Onsite"),t.qZA())}function W(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",1),t._UZ(1,"a-user-avatar",2),t.TgZ(2,"div",3)(3,"div",4),t._uU(4),t.qZA(),t.TgZ(5,"div",5),t._uU(6),t.qZA()(),t.YNc(7,H,2,0,"div",6),t.TgZ(8,"div",7)(9,"action-icon",8),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onsite?s.checkout():s.checkin())}),t.qZA(),t.TgZ(10,"a",9)(11,"app-icon"),t._uU(12,"email"),t.qZA()(),t.TgZ(13,"a",10)(14,"app-icon"),t._uU(15,"call"),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("user",e.user),t.xp6(3),t.Oqu(null==e.user?null:e.user.name),t.xp6(2),t.hij(" ",null==e.user?null:e.user.email," "),t.xp6(1),t.Q6J("ngIf",e.onsite),t.xp6(2),t.Q6J("matTooltip",e.onsite?"Checkout Staff":"Checkin Staff")("loading",e.loading)("content",e.onsite?"event_busy":"event_available"),t.xp6(1),t.Q6J("href","mailto:"+(null==e.user?null:e.user.email),t.LSH),t.uIk("disabled",!(null!=e.user&&e.user.email)),t.xp6(3),t.Q6J("href","tel:"+(null==e.user?null:e.user.phone),t.LSH),t.uIk("disabled",!(null!=e.user&&e.user.phone))}}let A=(()=>{class o{constructor(e){var n=this;this._state=e,this.checkin=(0,f.Z)(function*(){n.loading=!0,yield n._state.checkin(n.user).catch(s=>(0,u.cB)("Error checking in Staff member")),n.loading=!1}),this.checkout=(0,f.Z)(function*(){n.loading=!0,yield n._state.checkout(n.user).catch(s=>(0,u.cB)("Error checking out Staff member")),n.loading=!1})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m))},o.\u0275cmp=t.Xpm({type:o,selectors:[["staff-details"]],inputs:{user:"user",onsite:"onsite"},decls:1,vars:1,consts:[["class","w-full flex items-center px-4 py-2 bg-white dark:bg-neutral-700 border-b border-gray-200 dark:border-neutral-500 hover:opacity-80","details","",4,"ngIf"],["details","",1,"w-full","flex","items-center","px-4","py-2","bg-white","dark:bg-neutral-700","border-b","border-gray-200","dark:border-neutral-500","hover:opacity-80"],[3,"user"],[1,"flex","flex-col","flex-1"],[1,"px-2"],[1,"px-2","text-xs","text-opacity-50"],["class","text-xs opacity-50 px-4",4,"ngIf"],[1,"flex","items-center"],[3,"matTooltip","loading","content","click"],["icon","","matRipple","","matTooltip","Email Staff",3,"href"],["icon","","matRipple","","matTooltip","Phone Staff",3,"href"],[1,"text-xs","opacity-50","px-4"]],template:function(e,n){1&e&&t.YNc(0,W,16,11,"div",0),2&e&&t.Q6J("ngIf",n.user)},dependencies:[c.O5,$.gM,L.wG,B.m,G.o,R.k]}),o})();const V=["container"];function K(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",7),t.NdJ("click",function(){const i=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.scrollTo(i))}),t.ALo(1,"async"),t._uU(2),t.qZA()}if(2&o){const e=a.$implicit,n=t.oxw();t.ekj("disabled",t.lcZ(1,5,n.user_list)[e].length<=0)("active",e===n.active_group),t.xp6(2),t.hij(" ",e," ")}}function q(o,a){if(1&o&&(t._UZ(0,"staff-details",12),t.ALo(1,"async"),t.ALo(2,"async")),2&o){const e=a.$implicit,n=a.index,s=t.oxw(2).$implicit,i=t.oxw(2);t.Q6J("id","letter-"+s+"-"+n)("user",e)("onsite",!!t.lcZ(1,3,i.events)&&t.lcZ(2,5,i.events)[e.email])}}function tt(o,a){if(1&o&&(t.ynx(0),t.TgZ(1,"div",10),t._uU(2),t.qZA(),t.YNc(3,q,3,7,"staff-details",11),t.ALo(4,"async"),t.BQk()),2&o){const e=t.oxw().$implicit,n=t.oxw(2);t.xp6(1),t.Q6J("id","letter-"+("#"===e?"0":e)),t.xp6(1),t.hij(" ",e," "),t.xp6(1),t.Q6J("ngForOf",t.lcZ(4,3,n.user_list)[e])}}function et(o,a){if(1&o&&(t.ynx(0),t.YNc(1,tt,5,5,"ng-container",9),t.ALo(2,"async"),t.BQk()),2&o){const e=a.$implicit,n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,n.user_list)[e].length)}}function nt(o,a){if(1&o&&(t.ynx(0),t.YNc(1,et,3,3,"ng-container",8),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.groups)}}function ot(o,a){1&o&&t._UZ(0,"mat-progress-bar",13)}function st(o,a){1&o&&(t.TgZ(0,"div",14)(1,"p"),t._uU(2,"No matching staff members"),t.qZA()())}const v="#abcdefghijklmnopqrstuvwxyz".split("");let b=(()=>{class o extends u.cx{constructor(e){super(),this._state=e,this.active_group="#",this.groups=v,this.events=this._state.user_events,this.loading=this._state.loading,this.user_count=this._state.filtered_users.pipe((0,S.U)(n=>n.length)),this.user_list=this._state.filtered_users.pipe((0,S.U)(n=>{const s={};for(const i of v)s[i]=(n||[]).filter(l=>l.name.toLowerCase()[0].startsWith(i)||"#"===i&&!v.includes(l.name.toLowerCase()[0]));return this.timeout("scroll",()=>this.onScroll({}),30),s}))}onScroll(e){const n=this._el.nativeElement.scrollTop;for(const s of v){const i=document.querySelector(`#letter-${"#"===s?"0":s}`);if(i){if(i.offsetTop-n>0)break;this.active_group=s}}}scrollTo(e){const n=document.querySelector(`#letter-${e}-0`);n&&(n.scrollIntoView({behavior:"smooth",block:"center"}),this.active_group=e)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m))},o.\u0275cmp=t.Xpm({type:o,selectors:[["staff-listings"]],viewQuery:function(e,n){if(1&e&&t.Gf(V,5),2&e){let s;t.iGM(s=t.CRH())&&(n._el=s.first)}},features:[t.qOj],decls:10,vars:8,consts:[[1,"w-full","p-2","flex","items-center","justify-center"],["letter","","class","capitalize h-6 w-6 flex items-center justify-center text-xs cursor-pointer",3,"disabled","active","click",4,"ngFor","ngForOf"],[1,"flex-1","overflow-auto","w-full","relative","bg-gray-100","dark:bg-neutral-600",2,"height","50%",3,"scroll"],["container",""],[4,"ngIf","ngIfElse"],["mode","indeterminate",4,"ngIf"],["empty_state",""],["letter","",1,"capitalize","h-6","w-6","flex","items-center","justify-center","text-xs","cursor-pointer",3,"click"],[4,"ngFor","ngForOf"],[4,"ngIf"],["group","",1,"capitalize","bg-gray-300","dark:bg-gray-700","border-b","text-sm","font-medium","sticky","top-0","z-10",3,"id"],[3,"id","user","onsite",4,"ngFor","ngForOf"],[3,"id","user","onsite"],["mode","indeterminate"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,K,3,7,"div",1),t.qZA(),t.TgZ(2,"div",2,3),t.NdJ("scroll",function(i){return n.onScroll(i)}),t.YNc(4,nt,2,1,"ng-container",4),t.ALo(5,"async"),t.qZA(),t.YNc(6,ot,1,0,"mat-progress-bar",5),t.ALo(7,"async"),t.YNc(8,st,3,0,"ng-template",null,6,t.W1O)),2&e){const s=t.MAs(9);t.xp6(1),t.Q6J("ngForOf",n.groups),t.xp6(3),t.Q6J("ngIf",t.lcZ(5,4,n.user_count))("ngIfElse",s),t.xp6(2),t.Q6J("ngIf",t.lcZ(7,6,n.loading))}},dependencies:[c.sg,c.O5,C.pW,A,c.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:50%}[letter][_ngcontent-%COMP%]{transition:font-size .2s,color .2s}[group][_ngcontent-%COMP%]{border-color:#ccc;padding:.5rem 1.65rem}.disabled[_ngcontent-%COMP%]{opacity:.2;pointer-events:none}.active[_ngcontent-%COMP%]{font-size:1.25rem;opacity:1;color:#d81b60}"]}),o})();const it=["app-staff",""];function at(o,a){1&o&&t._UZ(0,"mat-progress-bar",4)}let J=(()=>{class o{constructor(e){this._state=e,this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m))},o.\u0275cmp=t.Xpm({type:o,selectors:[["","app-staff",""]],attrs:it,decls:6,vars:3,consts:[[1,"relative","overflow-hidden","flex-1","flex","flex-col"],[1,"w-full"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(e,n){1&e&&(t._UZ(0,"sidebar"),t.TgZ(1,"main",0),t._UZ(2,"staff-topbar",1)(3,"staff-listings",2),t.YNc(4,at,1,0,"mat-progress-bar",3),t.ALo(5,"async"),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngIf",t.lcZ(5,1,n.loading)))},dependencies:[c.O5,Q.k,C.pW,Z,b,c.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}"]}),o})();var rt=r(3045),lt=r(6866),ct=r(3320);const ft=["app-new-staff",""];function pt(o,a){1&o&&t._UZ(0,"mat-progress-bar",5)}let N=(()=>{class o{constructor(e){this._state=e,this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m))},o.\u0275cmp=t.Xpm({type:o,selectors:[["","app-new-staff",""]],attrs:ft,decls:8,vars:3,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"w-full"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(e,n){1&e&&(t._UZ(0,"app-topbar"),t.TgZ(1,"div",0),t._UZ(2,"app-sidebar"),t.TgZ(3,"main",1),t._UZ(4,"staff-topbar",2)(5,"staff-listings",3),t.YNc(6,pt,1,0,"mat-progress-bar",4),t.ALo(7,"async"),t.qZA()()),2&e&&(t.xp6(6),t.Q6J("ngIf",t.lcZ(7,1,n.loading)))},dependencies:[c.O5,lt.O,ct.u,C.pW,Z,b,c.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:#fff}"]}),o})();const ut=[{path:"",component:J},{path:"new",component:N}],gt=[N,J,Z,b,A];let dt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.ez,x.u5,rt.v,y.Bz.forChild(ut)]}),o})()}}]);