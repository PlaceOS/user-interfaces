"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_staff_staff_module_ts"],{1744:(W,E,a)=>{a.r(E),a.d(E,{COMPONENTS:()=>et,StaffModule:()=>tt});var m=a(316),c=a(4456),j=a(6842),g=a(9204),d=a(8390),_=a(521),b=a(2175),C=a(7915),u=a(5443),R=a(1963),p=a(7841),P=a(9908),Z=a(3240),X=a(6441),h=a(7375),S=a(2185),e=a(7404);let v=(()=>{class s extends h.Tv{constructor(t){var n;super(),n=this,this._org=t,this._onsite={},this._events={},this._filters=new _.t({}),this._search=new _.t(""),this._loading=new _.t(!1),this._users=new _.t([]),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.users=this._filters.asObservable(),this.filtered_users=(0,b.zV)([this._search,this._users,this._filters]).pipe((0,u.T)(o=>{const[i,l,f]=o;return l.filter(k=>(!i||k.name.toLowerCase().includes(i)||k.email.toLowerCase().includes(i))&&(!f.only_onsite||this._onsite[k.email]))})),this.user_events=(0,b.zV)([this._filters]).pipe((0,R.n)(function(){var o=(0,g.A)(function*(i){n._loading.next(!0);const l=yield(0,C.tj)({period_start:(0,P._)((0,Z.o)(Date.now())),period_end:(0,P._)((0,X.D)(Date.now())),type:"staff"}).toPromise(),f={},k=(new Date).valueOf();for(const T of l)(0,h.dH)(k,k,T.date,T.date+60*T.duration*1e3)&&(f[T.asset_id]=T.checked_in,n._events[T.asset_id]=T);return n._onsite=f,n._loading.next(!1),f});return function(i){return o.apply(this,arguments)}}()),(0,p.t)(1)),this.loadUsers(),this.user_events.subscribe()}setFilters(t){this._filters.next({...this._filters.getValue(),...t})}setSearchString(t){this._search.next(t)}startPolling(t=3e4){this.setFilters(this._filters.getValue()),this.interval("poll",()=>this.setFilters(this._filters.getValue()),t)}stopPolling(){this.clearInterval("poll")}checkin(t){var n=this;return(0,g.A)(function*(){const o=yield(0,C.X0)({booking_start:Math.floor((new Date).valueOf()/1e3),booking_end:Math.floor((0,X.D)(new Date).valueOf()/1e3),asset_id:t.email,title:"Checked-in Onsite",description:n._org.building.display_name||n._org.building.name,zones:[n._org.building.id],booking_type:"staff"}).toPromise();yield(0,C.Z$)(o.id,!0).toPromise(),n._events[t.email]=o,n._onsite[t.email]=!0})()}checkout(t){var n=this;return(0,g.A)(function*(){const o=n._events[t.email];if(o){const i=yield(0,C.X0)({...o.toJSON(),booking_end:Math.floor((new Date).valueOf()/1e3)}).toPromise();yield(0,C.Z$)(i.id,!1).toPromise(),n._events[t.email]=i,n._onsite[t.email]=!1}})()}loadUsers(){var t=this;return(0,g.A)(function*(){const n=yield(0,d.N8)("").toPromise();n.sort((o,i)=>o.name.localeCompare(i.name)),t._users.next(n)})()}static#e=this.\u0275fac=function(n){return new(n||s)(e.KVO(S.yb))};static#t=this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var D=a(4605),G=a(6354),B=a(7871),U=a(2236),F=a(4950),V=a(5175),y=a(5060),z=a(8827);function Y(s,r){if(1&s&&(e.j41(0,"mat-option",8),e.EFF(1),e.k0s()),2&s){const t=r.$implicit;e.Y8G("value",t.id),e.R7$(),e.SpI(" ",t.display_name||t.name," ")}}let N=(()=>{class s extends h.Tv{constructor(t,n,o,i){super(),this._state=t,this._org=n,this._route=o,this._router=i,this.zones=[],this.levels=this._org.active_levels,this.filters=this._state.filters,this.setDate=l=>this._state.setFilters({date:l}),this.setFilters=l=>this._state.setFilters(l),this.setSearch=l=>this._state.setSearchString(l),this.updateZones=l=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:l.join(",")}}),this._state.setFilters({zones:l})}}ngOnInit(){var t=this;return(0,g.A)(function*(){yield t._org.initialised.pipe((0,B.$)(n=>n)).toPromise(),t.subscription("route.query",t._route.queryParamMap.subscribe(n=>{if(n.has("zone_ids")){const o=n.get("zone_ids").split(",");if(o.length){const i=t._org.levelWithID(o);if(!i)return;t._org.building=t._org.buildings.find(l=>l.id===i.parent_id),t.zones=o}}})),t.subscription("levels",t._org.active_levels.subscribe(n=>{t.zones=t.zones.filter(o=>n.find(i=>i.id===o)),!t.zones.length&&n.length&&t.zones.push(n[0].id),t.updateZones(t.zones)})),t.setSearch("")})()}static#e=this.\u0275fac=function(n){return new(n||s)(e.rXU(v),e.rXU(S.yb),e.rXU(j.nX),e.rXU(j.Ix))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["staff-topbar"]],features:[e.Vt3],decls:11,vars:7,consts:[[1,"flex","items-center","bg-base-100","h-20","px-4","border-b","border-base-200","space-x-2"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[1,"m-2",3,"ngModelChange","ngModel"],[1,"text-xs"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange"],[3,"value"]],template:function(n,o){if(1&n&&(e.j41(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),e.mxI("ngModelChange",function(l){return e.DH7(o.zones,l)||(o.zones=l),l}),e.bIt("ngModelChange",function(l){return o.updateZones(l)}),e.DNE(3,Y,2,2,"mat-option",3),e.nI1(4,"async"),e.k0s()(),e.j41(5,"mat-slide-toggle",4),e.nI1(6,"async"),e.bIt("ngModelChange",function(l){return o.setFilters({only_onsite:l})}),e.j41(7,"div",5),e.EFF(8,"Onsite Only"),e.k0s()(),e.nrm(9,"div",6),e.j41(10,"searchbar",7),e.bIt("modelChange",function(l){return o.setSearch(l)}),e.k0s()()),2&n){let i;e.R7$(2),e.R50("ngModel",o.zones),e.R7$(),e.Y8G("ngForOf",e.bMT(4,3,o.levels)),e.R7$(2),e.Y8G("ngModel",null==(i=e.bMT(6,5,o.filters))?null:i.only_onsite)}},dependencies:[m.Sq,c.BC,c.vS,U.x,F.rl,V.VO,y.wT,z.sG,m.Jj],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n\n/*# sourceMappingURL=staff-topbar.component.ts-angular-inline--150.css.map*/"]})}return s})();var L=a(640),M=a(8157),$=a(9434),le=a(3574);function re(s,r){1&s&&(e.j41(0,"div",11),e.EFF(1,"Onsite"),e.k0s())}function ce(s,r){if(1&s){const t=e.RV6();e.j41(0,"div",1),e.nrm(1,"a-user-avatar",2),e.j41(2,"div",3)(3,"div",4),e.EFF(4),e.k0s(),e.j41(5,"div",5),e.EFF(6),e.k0s()(),e.DNE(7,re,2,0,"div",6),e.j41(8,"div",7)(9,"action-icon",8),e.bIt("click",function(){e.eBV(t);const o=e.XpG();return e.Njj(o.onsite?o.checkout():o.checkin())}),e.k0s(),e.j41(10,"a",9)(11,"app-icon"),e.EFF(12,"email"),e.k0s()(),e.j41(13,"a",10)(14,"app-icon"),e.EFF(15,"call"),e.k0s()()()()}if(2&s){const t=e.XpG();e.R7$(),e.Y8G("user",t.user),e.R7$(3),e.JRh(null==t.user?null:t.user.name),e.R7$(2),e.SpI(" ",null==t.user?null:t.user.email," "),e.R7$(),e.Y8G("ngIf",t.onsite),e.R7$(2),e.Y8G("matTooltip",t.onsite?"Checkout Staff":"Checkin Staff")("loading",t.loading)("content",t.onsite?"event_busy":"event_available"),e.R7$(),e.Y8G("href","mailto:"+(null==t.user?null:t.user.email),e.B4B),e.BMQ("disabled",!(null!=t.user&&t.user.email)),e.R7$(3),e.Y8G("href","tel:"+(null==t.user?null:t.user.phone),e.B4B),e.BMQ("disabled",!(null!=t.user&&t.user.phone))}}let H=(()=>{class s{constructor(t){var n=this;this._state=t,this.checkin=(0,g.A)(function*(){n.loading=!0,yield n._state.checkin(n.user).catch(o=>(0,h.UG)("Error checking in Staff member")),n.loading=!1}),this.checkout=(0,g.A)(function*(){n.loading=!0,yield n._state.checkout(n.user).catch(o=>(0,h.UG)("Error checking out Staff member")),n.loading=!1})}static#e=this.\u0275fac=function(n){return new(n||s)(e.rXU(v))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["staff-details"]],inputs:{user:"user",onsite:"onsite"},decls:1,vars:1,consts:[["class","w-full flex items-center px-4 py-2 bg-base-100 border-b border-base-200 hover:opacity-80","details","",4,"ngIf"],["details","",1,"w-full","flex","items-center","px-4","py-2","bg-base-100","border-b","border-base-200","hover:opacity-80"],[3,"user"],[1,"flex","flex-col","flex-1"],[1,"px-2"],[1,"px-2","text-xs","text-opacity-50"],["class","text-xs opacity-50 px-4",4,"ngIf"],[1,"flex","items-center"],[3,"click","matTooltip","loading","content"],["icon","","matRipple","","matTooltip","Email Staff",3,"href"],["icon","","matRipple","","matTooltip","Phone Staff",3,"href"],[1,"text-xs","opacity-50","px-4"]],template:function(n,o){1&n&&e.DNE(0,ce,16,11,"div",0),2&n&&e.Y8G("ngIf",o.user)},dependencies:[m.bT,L.oV,y.r6,M.X,$.R,le.a]})}return s})();const me=["container"];function pe(s,r){if(1&s){const t=e.RV6();e.j41(0,"div",7),e.nI1(1,"async"),e.bIt("click",function(){const o=e.eBV(t).$implicit,i=e.XpG();return e.Njj(i.scrollTo(o))}),e.EFF(2),e.k0s()}if(2&s){const t=r.$implicit,n=e.XpG();e.AVh("disabled",e.bMT(1,5,n.user_list)[t].length<=0)("active",t===n.active_group),e.R7$(2),e.SpI(" ",t," ")}}function fe(s,r){if(1&s&&(e.nrm(0,"staff-details",12),e.nI1(1,"async"),e.nI1(2,"async")),2&s){const t=r.$implicit,n=r.index,o=e.XpG(2).$implicit,i=e.XpG(2);e.Y8G("id","letter-"+o+"-"+n)("user",t)("onsite",!!e.bMT(1,3,i.events)&&e.bMT(2,5,i.events)[t.email])}}function de(s,r){if(1&s&&(e.qex(0),e.j41(1,"div",10),e.EFF(2),e.k0s(),e.DNE(3,fe,3,7,"staff-details",11),e.nI1(4,"async"),e.bVm()),2&s){const t=e.XpG().$implicit,n=e.XpG(2);e.R7$(),e.Y8G("id","letter-"+("#"===t?"0":t)),e.R7$(),e.SpI(" ",t," "),e.R7$(),e.Y8G("ngForOf",e.bMT(4,3,n.user_list)[t])}}function ge(s,r){if(1&s&&(e.qex(0),e.DNE(1,de,5,5,"ng-container",9),e.nI1(2,"async"),e.bVm()),2&s){const t=r.$implicit,n=e.XpG(2);e.R7$(),e.Y8G("ngIf",e.bMT(2,1,n.user_list)[t].length)}}function ue(s,r){if(1&s&&(e.qex(0),e.DNE(1,ge,3,3,"ng-container",8),e.bVm()),2&s){const t=e.XpG();e.R7$(),e.Y8G("ngForOf",t.groups)}}function _e(s,r){1&s&&e.nrm(0,"mat-progress-bar",13)}function he(s,r){1&s&&(e.j41(0,"div",14)(1,"p"),e.EFF(2,"No matching staff members"),e.k0s()())}const w="#abcdefghijklmnopqrstuvwxyz".split("");let A=(()=>{class s extends h.Tv{constructor(t){super(),this._state=t,this.active_group="#",this.groups=w,this.events=this._state.user_events,this.loading=this._state.loading,this.user_count=this._state.filtered_users.pipe((0,u.T)(n=>n.length)),this.user_list=this._state.filtered_users.pipe((0,u.T)(n=>{const o={};for(const i of w)o[i]=(n||[]).filter(l=>l.name.toLowerCase()[0].startsWith(i)||"#"===i&&!w.includes(l.name.toLowerCase()[0]));return this.timeout("scroll",()=>this.onScroll({}),30),o}))}onScroll(t){const n=this._el.nativeElement.scrollTop;for(const o of w){const i=document.querySelector(`#letter-${"#"===o?"0":o}`);if(i){if(i.offsetTop-n>0)break;this.active_group=o}}}scrollTo(t){const n=document.querySelector(`#letter-${t}-0`);n&&(n.scrollIntoView({behavior:"smooth",block:"center"}),this.active_group=t)}static#e=this.\u0275fac=function(n){return new(n||s)(e.rXU(v))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["staff-listings"]],viewQuery:function(n,o){if(1&n&&e.GBs(me,5),2&n){let i;e.mGM(i=e.lsd())&&(o._el=i.first)}},features:[e.Vt3],decls:10,vars:8,consts:[["container",""],["empty_state",""],[1,"w-full","p-2","flex","items-center","justify-center"],["letter","","class","capitalize h-6 w-6 flex items-center justify-center text-xs cursor-pointer",3,"disabled","active","click",4,"ngFor","ngForOf"],[1,"flex-1","overflow-auto","w-full","relative","bg-base-200",2,"height","50%",3,"scroll"],[4,"ngIf","ngIfElse"],["mode","indeterminate",4,"ngIf"],["letter","",1,"capitalize","h-6","w-6","flex","items-center","justify-center","text-xs","cursor-pointer",3,"click"],[4,"ngFor","ngForOf"],[4,"ngIf"],["group","",1,"capitalize","bg-base-200","border-b","text-sm","font-medium","sticky","top-0","z-10",3,"id"],[3,"id","user","onsite",4,"ngFor","ngForOf"],[3,"id","user","onsite"],["mode","indeterminate"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center"]],template:function(n,o){if(1&n){const i=e.RV6();e.j41(0,"div",2),e.DNE(1,pe,3,7,"div",3),e.k0s(),e.j41(2,"div",4,0),e.bIt("scroll",function(f){return e.eBV(i),e.Njj(o.onScroll(f))}),e.DNE(4,ue,2,1,"ng-container",5),e.nI1(5,"async"),e.k0s(),e.DNE(6,_e,1,0,"mat-progress-bar",6),e.nI1(7,"async"),e.DNE(8,he,3,0,"ng-template",null,1,e.C5r)}if(2&n){const i=e.sdS(9);e.R7$(),e.Y8G("ngForOf",o.groups),e.R7$(3),e.Y8G("ngIf",e.bMT(5,4,o.user_count))("ngIfElse",i),e.R7$(2),e.Y8G("ngIf",e.bMT(7,6,o.loading))}},dependencies:[m.Sq,m.bT,G.HM,H,m.Jj],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:50%}[letter][_ngcontent-%COMP%]{transition:font-size .2s,color .2s}[group][_ngcontent-%COMP%]{border-color:#ccc;padding:.5rem 1.65rem}.disabled[_ngcontent-%COMP%]{opacity:.2;pointer-events:none}.active[_ngcontent-%COMP%]{font-size:1.25rem;opacity:1;color:#d81b60}\n\n/*# sourceMappingURL=staff-listing.component.ts-angular-inline--151.css.map*/"]})}return s})();const ve=["app-staff",""];function ye(s,r){1&s&&e.nrm(0,"mat-progress-bar",4)}let K=(()=>{class s{constructor(t){this._state=t,this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}static#e=this.\u0275fac=function(n){return new(n||s)(e.rXU(v))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["","app-staff",""]],attrs:ve,decls:6,vars:3,consts:[[1,"relative","overflow-hidden","flex-1","flex","flex-col"],[1,"w-full"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(n,o){1&n&&(e.nrm(0,"sidebar"),e.j41(1,"main",0),e.nrm(2,"staff-topbar",1)(3,"staff-listings",2),e.DNE(4,ye,1,0,"mat-progress-bar",3),e.nI1(5,"async"),e.k0s()),2&n&&(e.R7$(4),e.Y8G("ngIf",e.bMT(5,1,o.loading)))},dependencies:[m.bT,D.k,G.HM,N,A,m.Jj],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--b1)}\n\n/*# sourceMappingURL=staff.component.ts-angular-inline--149.css.map*/"]})}return s})();var be=a(363),q=a(5189),ee=a(6843);const Ce=["app-new-staff",""];function xe(s,r){1&s&&e.nrm(0,"mat-progress-bar",5)}let te=(()=>{class s{constructor(t){this._state=t,this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}static#e=this.\u0275fac=function(n){return new(n||s)(e.rXU(v))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["","app-new-staff",""]],attrs:Ce,decls:8,vars:3,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"w-full"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(n,o){1&n&&(e.nrm(0,"app-topbar"),e.j41(1,"div",0),e.nrm(2,"app-sidebar"),e.j41(3,"main",1),e.nrm(4,"staff-topbar",2)(5,"staff-listings",3),e.DNE(6,xe,1,0,"mat-progress-bar",4),e.nI1(7,"async"),e.k0s()()),2&n&&(e.R7$(6),e.Y8G("ngIf",e.bMT(7,1,o.loading)))},dependencies:[m.bT,q.S,ee.c,G.HM,N,A,m.Jj],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}\n\n/*# sourceMappingURL=new-staff.component.ts-angular-inline--152.css.map*/"]})}return s})();var x=a(3998),J=a(8627),O=a(3602),I=a(2587),ne=a(6815),Q=a(7984),ke=a(1134),je=a(8e3),oe=a(2238);const Fe=()=>({standalone:!0}),Me=()=>[];function Te(s,r){1&s&&(e.j41(0,"button",6)(1,"app-icon"),e.EFF(2,"close"),e.k0s()())}function Ee(s,r){if(1&s&&(e.j41(0,"mat-option",27),e.EFF(1),e.k0s()),2&s){const t=r.$implicit;e.Y8G("value",t.id),e.R7$(),e.SpI(" ",t.display_name||t.name," ")}}function Re(s,r){if(1&s&&(e.j41(0,"mat-option",27),e.EFF(1),e.k0s()),2&s){const t=e.XpG().$implicit;e.Y8G("value",t),e.R7$(),e.SpI(" ",t," ")}}function Se(s,r){if(1&s&&(e.qex(0),e.DNE(1,Re,2,2,"mat-option",28),e.bVm()),2&s){const t=r.$implicit;e.R7$(),e.Y8G("ngIf",t)}}function Ie(s,r){if(1&s){const t=e.RV6();e.j41(0,"main",7)(1,"form",8)(2,"a-user-search-field",9),e.bIt("ngModelChange",function(o){e.eBV(t);const i=e.XpG();return e.Njj(i.setUser(o))}),e.k0s(),e.j41(3,"div",10)(4,"label",11),e.EFF(5,"Name:"),e.k0s(),e.j41(6,"mat-form-field",12),e.nrm(7,"input",13),e.k0s()(),e.j41(8,"div",14)(9,"div",15)(10,"label",16),e.EFF(11,"Email:"),e.k0s(),e.j41(12,"mat-form-field",12),e.nrm(13,"input",17),e.k0s()(),e.j41(14,"div",15)(15,"label",16),e.EFF(16,"Phone:"),e.k0s(),e.j41(17,"mat-form-field",12),e.nrm(18,"input",18),e.k0s()()(),e.j41(19,"div",10)(20,"label",11),e.EFF(21,"Level:"),e.k0s(),e.j41(22,"mat-form-field",12)(23,"mat-select",19)(24,"mat-option",20),e.EFF(25,"All Levels"),e.k0s(),e.DNE(26,Ee,2,2,"mat-option",21),e.nI1(27,"async"),e.k0s()()(),e.j41(28,"div",10)(29,"label",16),e.EFF(30,"Roles:"),e.k0s(),e.j41(31,"div",14)(32,"mat-form-field",22)(33,"mat-select",23),e.DNE(34,Se,2,1,"ng-container",24),e.nI1(35,"async"),e.k0s()(),e.j41(36,"button",25)(37,"app-icon"),e.EFF(38,"add"),e.k0s(),e.j41(39,"div",26),e.EFF(40,"Add New Role"),e.k0s()()()()()()}if(2&s){let t;const n=e.XpG(),o=e.sdS(10);e.R7$(),e.Y8G("formGroup",n.form),e.R7$(),e.Y8G("ngModelOptions",e.lJ4(9,Fe)),e.R7$(24),e.Y8G("ngForOf",e.bMT(27,5,n.levels)),e.R7$(8),e.Y8G("ngForOf",(null==(t=e.bMT(35,7,n.data))?null:t.roles)||e.lJ4(10,Me)),e.R7$(2),e.Y8G("content",o)}}function De(s,r){if(1&s){const t=e.RV6();e.j41(0,"footer",29)(1,"button",30),e.bIt("click",function(){e.eBV(t);const o=e.XpG();return e.Njj(o.save())}),e.EFF(2,"Save"),e.k0s()()}}function Ge(s,r){1&s&&(e.j41(0,"main",31),e.nrm(1,"mat-spinner",32),e.j41(2,"p"),e.EFF(3,"Saving contact details..."),e.k0s()()),2&s&&(e.R7$(),e.Y8G("diameter",48))}function Ve(s,r){if(1&s){const t=e.RV6();e.j41(0,"div",33)(1,"mat-form-field",12)(2,"input",34),e.mxI("ngModelChange",function(o){e.eBV(t);const i=e.XpG();return e.DH7(i.role_name,o)||(i.role_name=o),e.Njj(o)}),e.k0s()(),e.j41(3,"button",35),e.bIt("click",function(){e.eBV(t);const o=e.XpG();return e.Njj(o.addRole())}),e.EFF(4," Save Role "),e.k0s()()}if(2&s){const t=e.XpG();e.R7$(2),e.R50("ngModel",t.role_name)}}let se=(()=>{class s{constructor(t,n,o){this._data=t,this._dialog_ref=n,this._org=o,this._changes=new _.t(0),this.loading=!1,this.contact=this._data,this.data=(0,b.zV)([this._org.active_building,this._changes]).pipe((0,J.p)(([i])=>!!i),(0,R.n)(([i])=>(0,x.bpY)(i.id,"emergency_contacts")),(0,u.T)(({details:i})=>i||{roles:[],contacts:[]}),(0,p.t)(1)),this.form=new c.gE({id:new c.MJ(this._data?.id||`ecntct-${(0,h.DU)(8)}`),name:new c.MJ(this._data?.name||""),email:new c.MJ(this._data?.email||""),phone:new c.MJ(this._data?.phone||""),zone:new c.MJ(this._data?.zone||""),roles:new c.MJ(this._data?.roles||[])}),this.levels=this._org.active_levels}addRole(){var t=this;return(0,g.A)(function*(){if(!t.role_name)return;t._tooltip.close(),t.loading=!0,t._dialog_ref.disableClose=!0;const n=yield t.data.pipe((0,O.s)(1)).toPromise();yield(0,x.D58)(t._org.building.id,{name:"emergency_contacts",description:"Emergency Contacts",details:{roles:[...n.roles||[],t.role_name].filter(o=>!!o),contacts:n.contacts}}).toPromise(),t._changes.next(0),t.form.patchValue({roles:[...t.form.value.roles||[],t.role_name]}),t.role_name="",t.loading=!1,t._dialog_ref.disableClose=!1})()}setUser(t){this.form.patchValue({name:t?.name,email:t?.email,phone:t?.phone})}save(){var t=this;return(0,g.A)(function*(){t.loading=!0,t._dialog_ref.disableClose=!0;const n=yield t.data.pipe((0,O.s)(1)).toPromise(),i=[...(n?.contacts||[]).filter(l=>l.id!==t.contact?.id),t.form.value].sort((l,f)=>l.name.localeCompare(f.name));yield(0,x.D58)(t._org.building.id,{name:"emergency_contacts",description:"Emergency Contacts",details:{roles:n.roles||[],contacts:i}}).toPromise(),t._dialog_ref.disableClose=!0,(0,h.VX)("Successfully updated emergency contacts."),t.loading=!1,t._dialog_ref.close()})()}static#e=this.\u0275fac=function(n){return new(n||s)(e.rXU(I.Vh),e.rXU(I.CP),e.rXU(S.yb))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["emergency-contact-modal"]],viewQuery:function(n,o){if(1&n&&e.GBs(ne.In,5),2&n){let i;e.mGM(i=e.lsd())&&(o._tooltip=i.first)}},decls:11,vars:5,consts:[["load_state",""],["role_form",""],[1,"flex-1","w-0"],["icon","","mat-dialog-close","",4,"ngIf"],["class","p-4 w-[36rem]",4,"ngIf","ngIfElse"],["class","flex justify-center items-center p-2 border-t border-base-200",4,"ngIf"],["icon","","mat-dialog-close",""],[1,"p-4","w-[36rem]"],[1,"space-y-4",3,"formGroup"],["ngModel","",1,"mb-4",3,"ngModelChange","ngModelOptions"],[1,"flex","flex-col"],["for","name"],["appearance","outline"],["matInput","","formControlName","name","placeholder","Full name"],[1,"flex","items-center","space-x-2"],[1,"flex","flex-col","flex-1"],["for","email"],["matInput","","formControlName","email","type","email","placeholder","Email address"],["matInput","","formControlName","phone","type","tel","placeholder","Emergency contact number"],["formControlName","zone","placeholder","All Levels"],["value",""],[3,"value",4,"ngFor","ngForOf"],["appearance","outline",1,"no-subscript","flex-1"],["multiple","","formControlName","roles","placeholder","Select roles"],[4,"ngFor","ngForOf"],["btn","","matRipple","","customTooltip","",1,"space-x-2",3,"content"],[1,"pr-2"],[3,"value"],[3,"value",4,"ngIf"],[1,"flex","justify-center","items-center","p-2","border-t","border-base-200"],["btn","","matRipple","",1,"w-32",3,"click"],["loading","",1,"h-64","flex","flex-col","items-center","justify-center"],[1,"mb-4",3,"diameter"],[1,"bg-base-100","p-4","rounded"],["matInput","","placeholder","Role name",3,"ngModelChange","ngModel"],["btn","","matRipple","",1,"w-full",3,"click"]],template:function(n,o){if(1&n&&(e.j41(0,"header")(1,"h2"),e.EFF(2),e.k0s(),e.nrm(3,"div",2),e.DNE(4,Te,3,0,"button",3),e.k0s(),e.DNE(5,Ie,41,11,"main",4)(6,De,3,0,"footer",5)(7,Ge,4,1,"ng-template",null,0,e.C5r)(9,Ve,5,1,"ng-template",null,1,e.C5r)),2&n){const i=e.sdS(8);e.R7$(2),e.SpI("",o.contact?"Edit":"New"," Emergency Contact"),e.R7$(2),e.Y8G("ngIf",!o.loading),e.R7$(),e.Y8G("ngIf",!o.loading)("ngIfElse",i),e.R7$(),e.Y8G("ngIf",!o.loading)}},dependencies:[m.Sq,m.bT,c.qT,c.me,c.BC,c.cb,c.vS,F.rl,Q.fg,V.VO,y.wT,ke.LG,I.tx,y.r6,c.j4,c.JD,je.$,$.R,oe.I,m.Jj]})}return s})();function $e(s,r){if(1&s){const t=e.RV6();e.qex(0),e.j41(1,"div",6)(2,"div",7),e.EFF(3),e.k0s(),e.j41(4,"button",8),e.bIt("click",function(){const o=e.eBV(t).$implicit,i=e.XpG();return i.active=o,e.Njj(i.role_name=o)}),e.j41(5,"app-icon"),e.EFF(6,"edit"),e.k0s()(),e.j41(7,"button",9),e.bIt("click",function(){const o=e.eBV(t).$implicit,i=e.XpG();return e.Njj(i.removeRole(o))}),e.j41(8,"app-icon"),e.EFF(9,"delete"),e.k0s()()(),e.bVm()}if(2&s){const t=r.$implicit;e.XpG();const n=e.sdS(15);e.R7$(3),e.JRh(t),e.R7$(),e.Y8G("content",n)}}function Oe(s,r){if(1&s){const t=e.RV6();e.j41(0,"div",10)(1,"mat-form-field",11)(2,"input",12),e.mxI("ngModelChange",function(o){e.eBV(t);const i=e.XpG();return e.DH7(i.role_name,o)||(i.role_name=o),e.Njj(o)}),e.k0s()(),e.j41(3,"button",13),e.bIt("click",function(){e.eBV(t);const o=e.XpG();return e.Njj(o.updateRoles())}),e.EFF(4," Save Role "),e.k0s()()}if(2&s){const t=e.XpG();e.R7$(2),e.R50("ngModel",t.role_name)}}let ie=(()=>{class s{removeRole(t){var n=this;return(0,g.A)(function*(){if(!t)return;n.loading=!0,n._dialog_ref.disableClose=!0;const o=yield n.data.pipe((0,O.s)(1)).toPromise();yield(0,x.D58)(n._org.building.id,{name:"emergency_contacts",description:"Emergency Contacts",details:{roles:[...o.roles.filter(i=>i!==t)].filter(i=>!!i).sort((i,l)=>i.localeCompare(l)),contacts:o.contacts.map(i=>({...i,roles:i.roles.filter(l=>l!==t)}))}}).toPromise(),n._changes.next(0),n.loading=!1,n._dialog_ref.disableClose=!1})()}updateRoles(){var t=this;return(0,g.A)(function*(){if(!t.role_name)return;t.loading=!0,t._tooltip.close(),t._dialog_ref.disableClose=!0;const n=yield t.data.pipe((0,O.s)(1)).toPromise();yield(0,x.D58)(t._org.building.id,{name:"emergency_contacts",description:"Emergency Contacts",details:{roles:[...n.roles.filter(o=>o!==t.active),t.role_name].filter(o=>!!o).sort((o,i)=>o.localeCompare(i)),contacts:n.contacts}}).toPromise(),t._changes.next(0),t.role_name="",t.active="",t.loading=!1,t._dialog_ref.disableClose=!1})()}constructor(t,n){this._org=t,this._dialog_ref=n,this._changes=new _.t(0),this.loading=!1,this.data=(0,b.zV)([this._org.active_building,this._changes]).pipe((0,J.p)(([o])=>!!o),(0,R.n)(([o])=>(0,x.bpY)(o.id,"emergency_contacts")),(0,u.T)(({details:o})=>{const i=o||{roles:[],contacts:[]};return i.roles||(i.roles=[]),i.contacts||(i.contacts=[]),i}),(0,p.t)(1)),this.roles=this.data.pipe((0,u.T)(o=>o.roles))}static#e=this.\u0275fac=function(n){return new(n||s)(e.rXU(S.yb),e.rXU(I.CP))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["role-management-modal"]],viewQuery:function(n,o){if(1&n&&e.GBs(ne.In,5),2&n){let i;e.mGM(i=e.lsd())&&(o._tooltip=i.first)}},decls:16,vars:4,consts:[["role_form",""],["btn","","icon","","matRipple","","mat-dialog-close",""],[1,"overflow-y-auto","min-w-[20rem]","divide-y","divide-base-200","max-h-[65vh]"],["btn","","matRipple","","customTooltip","",1,"flex","items-center","justify-center","space-x-2","w-[calc(100%-1rem)]","m-2",3,"click","content"],[1,"truncate"],[4,"ngFor","ngForOf"],[1,"flex","items-center","space-x-2","hover:bg-base-200:bg-base-300","p-2"],[1,"flex-1","truncate"],["btn","","icon","","matRipple","","customTooltip","",3,"click","content"],["btn","","icon","","matRipple","",3,"click"],[1,"bg-base-100","p-4","rounded"],["appearance","outline"],["matInput","","placeholder","Role name",3,"ngModelChange","ngModel"],["btn","","matRipple","",1,"w-full",3,"click"]],template:function(n,o){if(1&n){const i=e.RV6();e.j41(0,"header")(1,"h2"),e.EFF(2,"Manage Roles"),e.k0s(),e.j41(3,"button",1)(4,"app-icon"),e.EFF(5,"close"),e.k0s()()(),e.j41(6,"main",2)(7,"button",3),e.bIt("click",function(){return e.eBV(i),o.active="",e.Njj(o.role_name="")}),e.j41(8,"div",4),e.EFF(9,"New Role"),e.k0s(),e.j41(10,"app-icon"),e.EFF(11,"add"),e.k0s()(),e.DNE(12,$e,10,2,"ng-container",5),e.nI1(13,"async"),e.k0s(),e.DNE(14,Oe,5,1,"ng-template",null,0,e.C5r)}if(2&n){const i=e.sdS(15);e.R7$(7),e.Y8G("content",i),e.R7$(5),e.Y8G("ngForOf",e.bMT(13,2,o.roles))}},dependencies:[m.Sq,c.me,c.BC,c.vS,F.rl,Q.fg,I.tx,y.r6,$.R,oe.I,m.Jj]})}return s})();var Ne=a(2352),we=a(8328),Pe=a(3666);const Xe=["app-emergency-contacts",""],Be=()=>[],Ue=s=>({key:"name",name:"Person",content:s}),ze=s=>({key:"roles",name:"Roles",content:s,sortable:!1}),Ye=s=>({key:"zone",name:"Zone",content:s,size:"8rem",sortable:!1}),Le=s=>({key:"actions",name:" ",content:s,size:"6rem",sortable:!1}),Ae=(s,r,t,n)=>[s,r,t,n];function Je(s,r){if(1&s&&(e.j41(0,"mat-option",24),e.EFF(1),e.k0s()),2&s){const t=r.$implicit;e.Y8G("value",t),e.R7$(),e.SpI(" ",t," ")}}function Qe(s,r){if(1&s){const t=e.RV6();e.j41(0,"button",25),e.bIt("click",function(){const o=e.eBV(t).row,i=e.XpG();return e.Njj(i.copyToClipboard(o.email))}),e.j41(1,"div",26),e.EFF(2),e.k0s(),e.j41(3,"div",27),e.EFF(4),e.k0s()()}if(2&s){const t=r.row;e.R7$(2),e.JRh(t.name),e.R7$(2),e.SpI(" ",t.email," ")}}function We(s,r){if(1&s&&(e.j41(0,"span",30),e.EFF(1),e.k0s()),2&s){const t=r.$implicit;e.R7$(),e.SpI(" ",t," ")}}function Ze(s,r){if(1&s&&(e.j41(0,"div",28),e.DNE(1,We,2,1,"span",29),e.k0s()),2&s){const t=r.data;e.R7$(),e.Y8G("ngForOf",t)}}function He(s,r){if(1&s&&(e.j41(0,"div",31),e.EFF(1),e.nI1(2,"level"),e.k0s()),2&s){let t;const n=r.data;e.R7$(),e.SpI(" ",n?null==(t=e.bMT(2,1,n))?null:t.display_name:"All"," ")}}function Ke(s,r){if(1&s){const t=e.RV6();e.j41(0,"div",32)(1,"button",33),e.bIt("click",function(){const o=e.eBV(t).row,i=e.XpG();return e.Njj(i.editContact(o))}),e.j41(2,"app-icon"),e.EFF(3,"edit"),e.k0s()(),e.j41(4,"button",34),e.bIt("click",function(){const o=e.eBV(t).row,i=e.XpG();return e.Njj(i.removeContact(o))}),e.j41(5,"app-icon"),e.EFF(6,"delete"),e.k0s()()()}}let ae=(()=>{class s{constructor(t,n,o){this._org=t,this._dialog=n,this._clipboard=o,this._change=new _.t(0),this.search="",this.role_filter=new _.t(""),this.data=(0,b.zV)([this._org.active_building,this._change]).pipe((0,J.p)(([i])=>!!i),(0,R.n)(([i])=>(0,x.bpY)(i.id,"emergency_contacts")),(0,u.T)(({details:i})=>i||{roles:[],contacts:[]}),(0,p.t)(1)),this.roles=this.data.pipe((0,u.T)(i=>i?.roles||[])),this.contacts=this.data.pipe((0,u.T)(i=>i?.contacts||[])),this.filtered_contacts=(0,b.zV)([this.contacts,this.role_filter]).pipe((0,u.T)(([i,l])=>i.filter(f=>!l||f.roles.includes(l)))),this.copyToClipboard=i=>{this._clipboard.copy(i)&&(0,h.VX)("User's email copied to clipboard.")}}ngOnInit(){}manageRoles(){this._dialog.open(ie,{}).afterClosed().subscribe(()=>this._change.next(Date.now()))}editContact(t){this._dialog.open(se,{data:t}).afterClosed().subscribe(()=>this._change.next(Date.now()))}removeContact(t){var n=this;return(0,g.A)(function*(){const o=yield(0,h.GE)({title:"Remove Emergency Contact",content:`Are you sure you want to remove ${t.name} from the emergency contacts?`,icon:{content:"delete"}},n._dialog);if("done"!==o.reason)return;o.loading("Removing contact...");const i=yield n.data.pipe((0,O.s)(1)).toPromise(),l=(i?.contacts||[]).filter(f=>f.id!==t.id);yield(0,x.D58)(n._org.building.id,{name:"emergency_contacts",description:"Emergency Contacts",details:{roles:i.roles,contacts:l}}).toPromise(),o.close(),n._change.next(Date.now()),(0,h.VX)("Successfully removed emergency contact.")})()}static#e=this.\u0275fac=function(n){return new(n||s)(e.rXU(S.yb),e.rXU(I.bZ),e.rXU(Ne.B0))};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["","app-emergency-contacts",""]],attrs:Xe,decls:40,vars:24,consts:[["person_template",""],["roles_template",""],["zone_template",""],["actions_template",""],[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],["topbar","",1,"px-8","py-4","flex","flex-col"],[1,"flex","items-center","justify-between"],[1,"text-2xl","font-medium"],[1,"flex","items-center","space-x-2"],["appearance","outline",1,"no-subscript"],["matPrefix","",1,"text-2xl"],["matInput","","placeholder","Filter contacts...",3,"ngModelChange","ngModel"],["btn","","matRipple","",1,"space-x-2",3,"click"],[1,"text-2xl"],[1,"pr-2"],[1,"flex","items-center","justify-between","py-2","mt-2"],["placeholder","All Roles",3,"ngModelChange","ngModel"],["value",""],[3,"value",4,"ngFor","ngForOf"],["icon","","matRipple","","matTooltip","Manage Roles",1,"h-12","w-12","bg-secondary","text-secondary-content","rounded",3,"click"],[1,"w-full","h-1/2","flex-1","overflow-auto","px-8"],[1,"min-w-[52rem]","block","text-sm",3,"data","filter","empty_message","columns","sortable"],[1,"w-full","h-12"],[3,"value"],[1,"px-4","py-2","text-left","leading-tight",3,"click"],[1,""],[1,"text-[0.625rem]","opacity-30","font-mono"],[1,"flex","flex-wrap","p-2"],["class","m-1 py-1 px-2 rounded-2xl text-xs font-mono bg-info text-info-content",4,"ngFor","ngForOf"],[1,"m-1","py-1","px-2","rounded-2xl","text-xs","font-mono","bg-info","text-info-content"],[1,"p-4"],[1,"flex","items-center","justify-end","w-full","space-x-2","p-2"],["icon","","matRipple","","matTooltip","Edit Emergency Contact",3,"click"],["icon","","matRipple","","matTooltip","Remove Emergency Contact",1,"text-error",3,"click"]],template:function(n,o){if(1&n){const i=e.RV6();e.nrm(0,"app-topbar"),e.j41(1,"div",4),e.nrm(2,"app-sidebar"),e.j41(3,"main",5)(4,"section",6)(5,"div",7)(6,"h2",8),e.EFF(7,"Emergency Contacts"),e.k0s(),e.j41(8,"div",9)(9,"mat-form-field",10)(10,"app-icon",11),e.EFF(11," search "),e.k0s(),e.j41(12,"input",12),e.mxI("ngModelChange",function(f){return e.eBV(i),e.DH7(o.search,f)||(o.search=f),e.Njj(f)}),e.k0s()(),e.j41(13,"button",13),e.bIt("click",function(){return e.eBV(i),e.Njj(o.editContact())}),e.j41(14,"app-icon",14),e.EFF(15,"add"),e.k0s(),e.j41(16,"div",15),e.EFF(17,"Add Contact"),e.k0s()()()(),e.j41(18,"div",16)(19,"mat-form-field",10)(20,"mat-select",17),e.bIt("ngModelChange",function(f){return e.eBV(i),e.Njj(o.role_filter.next(f))}),e.j41(21,"mat-option",18),e.EFF(22,"All Roles"),e.k0s(),e.DNE(23,Je,2,2,"mat-option",19),e.nI1(24,"async"),e.k0s()(),e.j41(25,"div",9)(26,"button",20),e.bIt("click",function(){return e.eBV(i),e.Njj(o.manageRoles())}),e.j41(27,"app-icon"),e.EFF(28,"list_alt"),e.k0s()()()()(),e.j41(29,"section",21),e.nrm(30,"simple-table",22)(31,"div",23),e.DNE(32,Qe,5,2,"ng-template",null,0,e.C5r)(34,Ze,2,1,"ng-template",null,1,e.C5r)(36,He,3,3,"ng-template",null,2,e.C5r)(38,Ke,7,0,"ng-template",null,3,e.C5r),e.k0s()()()}if(2&n){const i=e.sdS(33),l=e.sdS(35),f=e.sdS(37),k=e.sdS(39);e.R7$(12),e.R50("ngModel",o.search),e.R7$(8),e.Y8G("ngModel",o.role_filter.getValue()),e.R7$(3),e.Y8G("ngForOf",e.bMT(24,8,o.roles)||e.lJ4(10,Be)),e.R7$(7),e.Y8G("data",o.filtered_contacts)("filter",o.search)("empty_message",o.search?"No matching contacts":"No emergency contacts for this building")("columns",e.ziG(19,Ae,e.eq3(11,Ue,i),e.eq3(13,ze,l),e.eq3(15,Ye,f),e.eq3(17,Le,k)))("sortable",!0)}},dependencies:[m.Sq,c.me,c.BC,c.vS,q.S,ee.c,F.rl,F.JW,Q.fg,V.VO,y.wT,L.oV,y.r6,$.R,we.O,m.Jj,Pe.D],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}\n\n/*# sourceMappingURL=emergency-contacts.component.ts-angular-inline--153.css.map*/"]})}return s})();const qe=[{path:"",component:K},{path:"new",component:te},{path:"emergency-contacts",component:ae}],et=[te,K,N,A,H,ae,se,ie];let tt=(()=>{class s{static#e=this.\u0275fac=function(n){return new(n||s)};static#t=this.\u0275mod=e.$C({type:s});static#n=this.\u0275inj=e.G2t({imports:[m.MD,c.YN,be.r,j.iI.forChild(qe)]})}return s})()},7915:(W,E,a)=>{a.d(E,{Qr:()=>j.Q,nx:()=>c.n,WS:()=>j.W,SG:()=>m.S,DD:()=>d.DD,wk:()=>d.wk,Z$:()=>d.Z$,eW:()=>d.eW,u3:()=>d.u3,tj:()=>d.tj,WE:()=>d.WE,vB:()=>d.vB,U:()=>d.U,UN:()=>d.UN,X0:()=>d.X0,DO:()=>d.DO,vq:()=>d.vq,MV:()=>d.MV});var m=a(9478),c=a(8379),j=a(3857),d=(a(7141),a(8026));a(7375),a(5762),a(3367),a(7254),a(8796),a(1781),a(7547),a(7642),a(1593)},8390:(W,E,a)=>{a.d(E,{g8:()=>d,kR:()=>m.k,Gp:()=>_.Gp,KJ:()=>_.KJ,N8:()=>u.N8,SZ:()=>u.SZ,is:()=>C.is});var m=a(1081),g=(a(3924),a(4621),a(9908));class d{constructor(p={}){this.type=p.type||p.location||"other",this.position=p.position||p.map_id||p.asset_id||{x:p.x/p.map_width||0,y:p.y/p.map_height||0},this.variance=p.variance||0,this.last_seen=p.last_seen||(0,g._)(new Date),this.level=p.level,this.building=p.building,this.at_location=!!p.at_location,this.coordinates_from=p.coordinates_from||"top-left"}}var _=a(3693),C=(a(4129),a(6039)),u=a(2372)}}]);
//# sourceMappingURL=apps_concierge_src_app_staff_staff_module_ts.js.map