"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_staff_staff_module_ts"],{21744:(q,S,a)=>{a.r(S),a.d(S,{COMPONENTS:()=>Wt,StaffModule:()=>Kt});var m=a(60316),c=a(34456),I=a(26842),d=a(89204),V=a(68390),u=a(90521),v=a(42175),b=a(57915),g=a(35443),j=a(71963),p=a(7841),Y=a(67450),tt=a(27419),P=a(13264),_=a(82333),M=a(12185),t=a(68559);let R=(()=>{class s extends _.Tv{constructor(e){var n;super(),n=this,this._org=e,this._onsite={},this._events={},this._filters=new u.t({}),this._search=new u.t(""),this._loading=new u.t(!1),this._users=new u.t([]),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.users=this._filters.asObservable(),this.filtered_users=(0,v.zV)([this._search,this._users,this._filters]).pipe((0,g.T)(o=>{const[i,l,f]=o;return l.filter(F=>(!i||F.name.toLowerCase().includes(i)||F.email.toLowerCase().includes(i))&&(!f.only_onsite||this._onsite[F.email]))})),this.user_events=(0,v.zV)([this._filters]).pipe((0,j.n)(function(){var o=(0,d.A)(function*(i){n._loading.next(!0);const l=yield(0,b.tj)({period_start:(0,Y.A)((0,tt.A)(Date.now())),period_end:(0,Y.A)((0,P.A)(Date.now())),type:"staff"}).toPromise(),f={},F=(new Date).valueOf();for(const C of l)(0,_.dH)(F,F,C.date,C.date+60*C.duration*1e3)&&(f[C.asset_id]=C.checked_in,n._events[C.asset_id]=C);return n._onsite=f,n._loading.next(!1),f});return function(i){return o.apply(this,arguments)}}()),(0,p.t)()),this.loadUsers(),this.user_events.subscribe()}setFilters(e){this._filters.next({...this._filters.getValue(),...e})}setSearchString(e){this._search.next(e)}startPolling(e=3e4){this.setFilters(this._filters.getValue()),this.interval("poll",()=>this.setFilters(this._filters.getValue()),e)}stopPolling(){this.clearInterval("poll")}checkin(e){var n=this;return(0,d.A)(function*(){const o=yield(0,b.X0)({booking_start:Math.floor((new Date).valueOf()/1e3),booking_end:Math.floor((0,P.A)(new Date).valueOf()/1e3),asset_id:e.email,title:"Checked-in Onsite",description:n._org.building.display_name||n._org.building.name,zones:[n._org.building.id],booking_type:"staff"}).toPromise();yield(0,b.Z$)(o.id,!0).toPromise(),n._events[e.email]=o,n._onsite[e.email]=!0})()}checkout(e){var n=this;return(0,d.A)(function*(){const o=n._events[e.email];if(o){const i=yield(0,b.X0)({...o.toJSON(),booking_end:Math.floor((new Date).valueOf()/1e3)}).toPromise();yield(0,b.Z$)(i.id,!1).toPromise(),n._events[e.email]=i,n._onsite[e.email]=!1}})()}loadUsers(){var e=this;return(0,d.A)(function*(){const n=yield(0,V.N8)("").toPromise();n.sort((o,i)=>o.name.localeCompare(i.name)),e._users.next(n)})()}static#t=this.\u0275fac=function(n){return new(n||s)(t.KVO(M.yb))};static#e=this.\u0275prov=t.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var et=a(74605),N=a(26354),nt=a(57871),ot=a(12236),T=a(24950),$=a(25175),y=a(85060),st=a(8827);function it(s,r){if(1&s&&(t.j41(0,"mat-option",8),t.EFF(1),t.k0s()),2&s){const e=r.$implicit;t.Y8G("value",e.id),t.R7$(),t.SpI(" ",e.display_name||e.name," ")}}let w=(()=>{class s extends _.Tv{constructor(e,n,o,i){super(),this._state=e,this._org=n,this._route=o,this._router=i,this.zones=[],this.levels=this._org.active_levels,this.filters=this._state.filters,this.setDate=l=>this._state.setFilters({date:l}),this.setFilters=l=>this._state.setFilters(l),this.setSearch=l=>this._state.setSearchString(l),this.updateZones=l=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:l.join(",")}}),this._state.setFilters({zones:l})}}ngOnInit(){var e=this;return(0,d.A)(function*(){yield e._org.initialised.pipe((0,nt.$)(n=>n)).toPromise(),e.subscription("route.query",e._route.queryParamMap.subscribe(n=>{if(n.has("zone_ids")){const o=n.get("zone_ids").split(",");if(o.length){const i=e._org.levelWithID(o);if(!i)return;e._org.building=e._org.buildings.find(l=>l.id===i.parent_id),e.zones=o}}})),e.subscription("levels",e._org.active_levels.subscribe(n=>{e.zones=e.zones.filter(o=>n.find(i=>i.id===o)),!e.zones.length&&n.length&&e.zones.push(n[0].id),e.updateZones(e.zones)})),e.setSearch("")})()}static#t=this.\u0275fac=function(n){return new(n||s)(t.rXU(R),t.rXU(M.yb),t.rXU(I.nX),t.rXU(I.Ix))};static#e=this.\u0275cmp=t.VBU({type:s,selectors:[["staff-topbar"]],features:[t.Vt3],decls:11,vars:7,consts:[[1,"flex","items-center","bg-base-100","h-20","px-4","border-b","border-base-200","space-x-2"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[1,"m-2",3,"ngModelChange","ngModel"],[1,"text-xs"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange"],[3,"value"]],template:function(n,o){if(1&n&&(t.j41(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),t.mxI("ngModelChange",function(l){return t.DH7(o.zones,l)||(o.zones=l),l}),t.bIt("ngModelChange",function(l){return o.updateZones(l)}),t.DNE(3,it,2,2,"mat-option",3),t.nI1(4,"async"),t.k0s()(),t.j41(5,"mat-slide-toggle",4),t.nI1(6,"async"),t.bIt("ngModelChange",function(l){return o.setFilters({only_onsite:l})}),t.j41(7,"div",5),t.EFF(8,"Onsite Only"),t.k0s()(),t.nrm(9,"div",6),t.j41(10,"searchbar",7),t.bIt("modelChange",function(l){return o.setSearch(l)}),t.k0s()()),2&n){let i;t.R7$(2),t.R50("ngModel",o.zones),t.R7$(),t.Y8G("ngForOf",t.bMT(4,3,o.levels)),t.R7$(2),t.Y8G("ngModel",null==(i=t.bMT(6,5,o.filters))?null:i.only_onsite)}},dependencies:[m.Sq,c.BC,c.vS,ot.x,T.rl,$.VO,y.wT,st.sG,m.Jj],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n\n/*# sourceMappingURL=staff-topbar.component.ts-angular-inline--150.css.map*/"]})}return s})();var B=a(80640),at=a(88157),k=a(69434),lt=a(23574);function rt(s,r){1&s&&(t.j41(0,"div",11),t.EFF(1,"Onsite"),t.k0s())}function ct(s,r){if(1&s){const e=t.RV6();t.j41(0,"div",1),t.nrm(1,"a-user-avatar",2),t.j41(2,"div",3)(3,"div",4),t.EFF(4),t.k0s(),t.j41(5,"div",5),t.EFF(6),t.k0s()(),t.DNE(7,rt,2,0,"div",6),t.j41(8,"div",7)(9,"action-icon",8),t.bIt("click",function(){t.eBV(e);const o=t.XpG();return t.Njj(o.onsite?o.checkout():o.checkin())}),t.k0s(),t.j41(10,"a",9)(11,"app-icon"),t.EFF(12,"email"),t.k0s()(),t.j41(13,"a",10)(14,"app-icon"),t.EFF(15,"call"),t.k0s()()()()}if(2&s){const e=t.XpG();t.R7$(),t.Y8G("user",e.user),t.R7$(3),t.JRh(null==e.user?null:e.user.name),t.R7$(2),t.SpI(" ",null==e.user?null:e.user.email," "),t.R7$(),t.Y8G("ngIf",e.onsite),t.R7$(2),t.Y8G("matTooltip",e.onsite?"Checkout Staff":"Checkin Staff")("loading",e.loading)("content",e.onsite?"event_busy":"event_available"),t.R7$(),t.Y8G("href","mailto:"+(null==e.user?null:e.user.email),t.B4B),t.BMQ("disabled",!(null!=e.user&&e.user.email)),t.R7$(3),t.Y8G("href","tel:"+(null==e.user?null:e.user.phone),t.B4B),t.BMQ("disabled",!(null!=e.user&&e.user.phone))}}let U=(()=>{class s{constructor(e){var n=this;this._state=e,this.checkin=(0,d.A)(function*(){n.loading=!0,yield n._state.checkin(n.user).catch(o=>(0,_.UG)("Error checking in Staff member")),n.loading=!1}),this.checkout=(0,d.A)(function*(){n.loading=!0,yield n._state.checkout(n.user).catch(o=>(0,_.UG)("Error checking out Staff member")),n.loading=!1})}static#t=this.\u0275fac=function(n){return new(n||s)(t.rXU(R))};static#e=this.\u0275cmp=t.VBU({type:s,selectors:[["staff-details"]],inputs:{user:"user",onsite:"onsite"},decls:1,vars:1,consts:[["class","w-full flex items-center px-4 py-2 bg-base-100 border-b border-base-200 hover:opacity-80","details","",4,"ngIf"],["details","",1,"w-full","flex","items-center","px-4","py-2","bg-base-100","border-b","border-base-200","hover:opacity-80"],[3,"user"],[1,"flex","flex-col","flex-1"],[1,"px-2"],[1,"px-2","text-xs","text-opacity-50"],["class","text-xs opacity-50 px-4",4,"ngIf"],[1,"flex","items-center"],[3,"click","matTooltip","loading","content"],["icon","","matRipple","","matTooltip","Email Staff",3,"href"],["icon","","matRipple","","matTooltip","Phone Staff",3,"href"],[1,"text-xs","opacity-50","px-4"]],template:function(n,o){1&n&&t.DNE(0,ct,16,11,"div",0),2&n&&t.Y8G("ngIf",o.user)},dependencies:[m.bT,B.oV,y.r6,at.X,k.R,lt.a]})}return s})();const mt=["container"];function pt(s,r){if(1&s){const e=t.RV6();t.j41(0,"div",7),t.nI1(1,"async"),t.bIt("click",function(){const o=t.eBV(e).$implicit,i=t.XpG();return t.Njj(i.scrollTo(o))}),t.EFF(2),t.k0s()}if(2&s){const e=r.$implicit,n=t.XpG();t.AVh("disabled",t.bMT(1,5,n.user_list)[e].length<=0)("active",e===n.active_group),t.R7$(2),t.SpI(" ",e," ")}}function ft(s,r){if(1&s&&(t.nrm(0,"staff-details",12),t.nI1(1,"async"),t.nI1(2,"async")),2&s){const e=r.$implicit,n=r.index,o=t.XpG(2).$implicit,i=t.XpG(2);t.Y8G("id","letter-"+o+"-"+n)("user",e)("onsite",!!t.bMT(1,3,i.events)&&t.bMT(2,5,i.events)[e.email])}}function dt(s,r){if(1&s&&(t.qex(0),t.j41(1,"div",10),t.EFF(2),t.k0s(),t.DNE(3,ft,3,7,"staff-details",11),t.nI1(4,"async"),t.bVm()),2&s){const e=t.XpG().$implicit,n=t.XpG(2);t.R7$(),t.Y8G("id","letter-"+("#"===e?"0":e)),t.R7$(),t.SpI(" ",e," "),t.R7$(),t.Y8G("ngForOf",t.bMT(4,3,n.user_list)[e])}}function gt(s,r){if(1&s&&(t.qex(0),t.DNE(1,dt,5,5,"ng-container",9),t.nI1(2,"async"),t.bVm()),2&s){const e=r.$implicit,n=t.XpG(2);t.R7$(),t.Y8G("ngIf",t.bMT(2,1,n.user_list)[e].length)}}function ut(s,r){if(1&s&&(t.qex(0),t.DNE(1,gt,3,3,"ng-container",8),t.bVm()),2&s){const e=t.XpG();t.R7$(),t.Y8G("ngForOf",e.groups)}}function _t(s,r){1&s&&t.nrm(0,"mat-progress-bar",13)}function ht(s,r){1&s&&(t.j41(0,"div",14)(1,"p"),t.EFF(2,"No matching staff members"),t.k0s()())}const G="#abcdefghijklmnopqrstuvwxyz".split("");let O=(()=>{class s extends _.Tv{constructor(e){super(),this._state=e,this.active_group="#",this.groups=G,this.events=this._state.user_events,this.loading=this._state.loading,this.user_count=this._state.filtered_users.pipe((0,g.T)(n=>n.length)),this.user_list=this._state.filtered_users.pipe((0,g.T)(n=>{const o={};for(const i of G)o[i]=(n||[]).filter(l=>l.name.toLowerCase()[0].startsWith(i)||"#"===i&&!G.includes(l.name.toLowerCase()[0]));return this.timeout("scroll",()=>this.onScroll({}),30),o}))}onScroll(e){const n=this._el.nativeElement.scrollTop;for(const o of G){const i=document.querySelector(`#letter-${"#"===o?"0":o}`);if(i){if(i.offsetTop-n>0)break;this.active_group=o}}}scrollTo(e){const n=document.querySelector(`#letter-${e}-0`);n&&(n.scrollIntoView({behavior:"smooth",block:"center"}),this.active_group=e)}static#t=this.\u0275fac=function(n){return new(n||s)(t.rXU(R))};static#e=this.\u0275cmp=t.VBU({type:s,selectors:[["staff-listings"]],viewQuery:function(n,o){if(1&n&&t.GBs(mt,5),2&n){let i;t.mGM(i=t.lsd())&&(o._el=i.first)}},features:[t.Vt3],decls:10,vars:8,consts:[["container",""],["empty_state",""],[1,"w-full","p-2","flex","items-center","justify-center"],["letter","","class","capitalize h-6 w-6 flex items-center justify-center text-xs cursor-pointer",3,"disabled","active","click",4,"ngFor","ngForOf"],[1,"flex-1","overflow-auto","w-full","relative","bg-base-200",2,"height","50%",3,"scroll"],[4,"ngIf","ngIfElse"],["mode","indeterminate",4,"ngIf"],["letter","",1,"capitalize","h-6","w-6","flex","items-center","justify-center","text-xs","cursor-pointer",3,"click"],[4,"ngFor","ngForOf"],[4,"ngIf"],["group","",1,"capitalize","bg-base-200","border-b","text-sm","font-medium","sticky","top-0","z-10",3,"id"],[3,"id","user","onsite",4,"ngFor","ngForOf"],[3,"id","user","onsite"],["mode","indeterminate"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center"]],template:function(n,o){if(1&n){const i=t.RV6();t.j41(0,"div",2),t.DNE(1,pt,3,7,"div",3),t.k0s(),t.j41(2,"div",4,0),t.bIt("scroll",function(f){return t.eBV(i),t.Njj(o.onScroll(f))}),t.DNE(4,ut,2,1,"ng-container",5),t.nI1(5,"async"),t.k0s(),t.DNE(6,_t,1,0,"mat-progress-bar",6),t.nI1(7,"async"),t.DNE(8,ht,3,0,"ng-template",null,1,t.C5r)}if(2&n){const i=t.sdS(9);t.R7$(),t.Y8G("ngForOf",o.groups),t.R7$(3),t.Y8G("ngIf",t.bMT(5,4,o.user_count))("ngIfElse",i),t.R7$(2),t.Y8G("ngIf",t.bMT(7,6,o.loading))}},dependencies:[m.Sq,m.bT,N.HM,U,m.Jj],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:50%}[letter][_ngcontent-%COMP%]{transition:font-size .2s,color .2s}[group][_ngcontent-%COMP%]{border-color:#ccc;padding:.5rem 1.65rem}.disabled[_ngcontent-%COMP%]{opacity:.2;pointer-events:none}.active[_ngcontent-%COMP%]{font-size:1.25rem;opacity:1;color:#d81b60}\n\n/*# sourceMappingURL=staff-listing.component.ts-angular-inline--151.css.map*/"]})}return s})();const vt=["app-staff",""];function bt(s,r){1&s&&t.nrm(0,"mat-progress-bar",4)}let z=(()=>{class s{constructor(e){this._state=e,this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}static#t=this.\u0275fac=function(n){return new(n||s)(t.rXU(R))};static#e=this.\u0275cmp=t.VBU({type:s,selectors:[["","app-staff",""]],attrs:vt,decls:6,vars:3,consts:[[1,"relative","overflow-hidden","flex-1","flex","flex-col"],[1,"w-full"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(n,o){1&n&&(t.nrm(0,"sidebar"),t.j41(1,"main",0),t.nrm(2,"staff-topbar",1)(3,"staff-listings",2),t.DNE(4,bt,1,0,"mat-progress-bar",3),t.nI1(5,"async"),t.k0s()),2&n&&(t.R7$(4),t.Y8G("ngIf",t.bMT(5,1,o.loading)))},dependencies:[m.bT,et.k,N.HM,w,O,m.Jj],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--b1)}\n\n/*# sourceMappingURL=staff.component.ts-angular-inline--149.css.map*/"]})}return s})();var yt=a(40363),A=a(45189),L=a(96843);const Ct=["app-new-staff",""];function xt(s,r){1&s&&t.nrm(0,"mat-progress-bar",5)}let J=(()=>{class s{constructor(e){this._state=e,this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}static#t=this.\u0275fac=function(n){return new(n||s)(t.rXU(R))};static#e=this.\u0275cmp=t.VBU({type:s,selectors:[["","app-new-staff",""]],attrs:Ct,decls:8,vars:3,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"w-full"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(n,o){1&n&&(t.nrm(0,"app-topbar"),t.j41(1,"div",0),t.nrm(2,"app-sidebar"),t.j41(3,"main",1),t.nrm(4,"staff-topbar",2)(5,"staff-listings",3),t.DNE(6,xt,1,0,"mat-progress-bar",4),t.nI1(7,"async"),t.k0s()()),2&n&&(t.R7$(6),t.Y8G("ngIf",t.bMT(7,1,o.loading)))},dependencies:[m.bT,A.S,L.c,N.HM,w,O,m.Jj],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}\n\n/*# sourceMappingURL=new-staff.component.ts-angular-inline--152.css.map*/"]})}return s})();var h=a(3998),D=a(8627),E=a(33602),x=a(12587),H=a(46815),X=a(87984),Ft=a(41134),jt=a(18e3),Q=a(22238);const Mt=()=>({standalone:!0}),Rt=()=>[];function Tt(s,r){1&s&&(t.j41(0,"button",6)(1,"app-icon"),t.EFF(2,"close"),t.k0s()())}function Et(s,r){if(1&s&&(t.j41(0,"mat-option",27),t.EFF(1),t.k0s()),2&s){const e=r.$implicit;t.Y8G("value",e.id),t.R7$(),t.SpI(" ",e.display_name||e.name," ")}}function St(s,r){if(1&s&&(t.j41(0,"mat-option",27),t.EFF(1),t.k0s()),2&s){const e=t.XpG().$implicit;t.Y8G("value",e),t.R7$(),t.SpI(" ",e," ")}}function It(s,r){if(1&s&&(t.qex(0),t.DNE(1,St,2,2,"mat-option",28),t.bVm()),2&s){const e=r.$implicit;t.R7$(),t.Y8G("ngIf",e)}}function kt(s,r){if(1&s){const e=t.RV6();t.j41(0,"main",7)(1,"form",8)(2,"a-user-search-field",9),t.bIt("ngModelChange",function(o){t.eBV(e);const i=t.XpG();return t.Njj(i.setUser(o))}),t.k0s(),t.j41(3,"div",10)(4,"label",11),t.EFF(5,"Name:"),t.k0s(),t.j41(6,"mat-form-field",12),t.nrm(7,"input",13),t.k0s()(),t.j41(8,"div",14)(9,"div",15)(10,"label",16),t.EFF(11,"Email:"),t.k0s(),t.j41(12,"mat-form-field",12),t.nrm(13,"input",17),t.k0s()(),t.j41(14,"div",15)(15,"label",16),t.EFF(16,"Phone:"),t.k0s(),t.j41(17,"mat-form-field",12),t.nrm(18,"input",18),t.k0s()()(),t.j41(19,"div",10)(20,"label",11),t.EFF(21,"Level:"),t.k0s(),t.j41(22,"mat-form-field",12)(23,"mat-select",19)(24,"mat-option",20),t.EFF(25,"All Levels"),t.k0s(),t.DNE(26,Et,2,2,"mat-option",21),t.nI1(27,"async"),t.k0s()()(),t.j41(28,"div",10)(29,"label",16),t.EFF(30,"Roles:"),t.k0s(),t.j41(31,"div",14)(32,"mat-form-field",22)(33,"mat-select",23),t.DNE(34,It,2,1,"ng-container",24),t.nI1(35,"async"),t.k0s()(),t.j41(36,"button",25)(37,"app-icon"),t.EFF(38,"add"),t.k0s(),t.j41(39,"div",26),t.EFF(40,"Add New Role"),t.k0s()()()()()()}if(2&s){let e;const n=t.XpG(),o=t.sdS(10);t.R7$(),t.Y8G("formGroup",n.form),t.R7$(),t.Y8G("ngModelOptions",t.lJ4(9,Mt)),t.R7$(24),t.Y8G("ngForOf",t.bMT(27,5,n.levels)),t.R7$(8),t.Y8G("ngForOf",(null==(e=t.bMT(35,7,n.data))?null:e.roles)||t.lJ4(10,Rt)),t.R7$(2),t.Y8G("content",o)}}function Gt(s,r){if(1&s){const e=t.RV6();t.j41(0,"footer",29)(1,"button",30),t.bIt("click",function(){t.eBV(e);const o=t.XpG();return t.Njj(o.save())}),t.EFF(2,"Save"),t.k0s()()}}function Vt(s,r){1&s&&(t.j41(0,"main",31),t.nrm(1,"mat-spinner",32),t.j41(2,"p"),t.EFF(3,"Saving contact details..."),t.k0s()()),2&s&&(t.R7$(),t.Y8G("diameter",48))}function Nt(s,r){if(1&s){const e=t.RV6();t.j41(0,"div",33)(1,"mat-form-field",12)(2,"input",34),t.mxI("ngModelChange",function(o){t.eBV(e);const i=t.XpG();return t.DH7(i.role_name,o)||(i.role_name=o),t.Njj(o)}),t.k0s()(),t.j41(3,"button",35),t.bIt("click",function(){t.eBV(e);const o=t.XpG();return t.Njj(o.addRole())}),t.EFF(4," Save Role "),t.k0s()()}if(2&s){const e=t.XpG();t.R7$(2),t.R50("ngModel",e.role_name)}}let Z=(()=>{class s{constructor(e,n,o){this._data=e,this._dialog_ref=n,this._org=o,this._changes=new u.t(0),this.loading=!1,this.contact=this._data,this.data=(0,v.zV)([this._org.active_building,this._changes]).pipe((0,D.p)(([i])=>!!i),(0,j.n)(([i])=>(0,h.bpY)(i.id,"emergency_contacts")),(0,g.T)(({details:i})=>i||{roles:[],contacts:[]}),(0,p.t)(1)),this.form=new c.gE({id:new c.MJ(this._data?.id||`ecntct-${(0,_.DU)(8)}`),name:new c.MJ(this._data?.name||""),email:new c.MJ(this._data?.email||""),phone:new c.MJ(this._data?.phone||""),zone:new c.MJ(this._data?.zone||""),roles:new c.MJ(this._data?.roles||[])}),this.levels=this._org.active_levels}addRole(){var e=this;return(0,d.A)(function*(){if(!e.role_name)return;e._tooltip.close(),e.loading=!0,e._dialog_ref.disableClose=!0;const n=yield e.data.pipe((0,E.s)(1)).toPromise();yield(0,h.D58)(e._org.building.id,{name:"emergency_contacts",description:"Emergency Contacts",details:{roles:[...n.roles||[],e.role_name].filter(o=>!!o),contacts:n.contacts}}).toPromise(),e._changes.next(0),e.form.patchValue({roles:[...e.form.value.roles||[],e.role_name]}),e.role_name="",e.loading=!1,e._dialog_ref.disableClose=!1})()}setUser(e){this.form.patchValue({name:e?.name,email:e?.email,phone:e?.phone})}save(){var e=this;return(0,d.A)(function*(){e.loading=!0,e._dialog_ref.disableClose=!0;const n=yield e.data.pipe((0,E.s)(1)).toPromise(),i=[...(n?.contacts||[]).filter(l=>l.id!==e.contact?.id),e.form.value].sort((l,f)=>l.name.localeCompare(f.name));yield(0,h.D58)(e._org.building.id,{name:"emergency_contacts",description:"Emergency Contacts",details:{roles:n.roles||[],contacts:i}}).toPromise(),e._dialog_ref.disableClose=!0,(0,_.VX)("Successfully updated emergency contacts."),e.loading=!1,e._dialog_ref.close()})()}static#t=this.\u0275fac=function(n){return new(n||s)(t.rXU(x.Vh),t.rXU(x.CP),t.rXU(M.yb))};static#e=this.\u0275cmp=t.VBU({type:s,selectors:[["emergency-contact-modal"]],viewQuery:function(n,o){if(1&n&&t.GBs(H.In,5),2&n){let i;t.mGM(i=t.lsd())&&(o._tooltip=i.first)}},decls:11,vars:5,consts:[["load_state",""],["role_form",""],[1,"flex-1","w-0"],["icon","","mat-dialog-close","",4,"ngIf"],["class","p-4 w-[36rem]",4,"ngIf","ngIfElse"],["class","flex justify-center items-center p-2 border-t border-base-200",4,"ngIf"],["icon","","mat-dialog-close",""],[1,"p-4","w-[36rem]"],[1,"space-y-4",3,"formGroup"],["ngModel","",3,"ngModelChange","ngModelOptions"],[1,"flex","flex-col"],["for","name"],["appearance","outline"],["matInput","","formControlName","name","placeholder","Full name"],[1,"flex","items-center","space-x-2"],[1,"flex","flex-col","flex-1"],["for","email"],["matInput","","formControlName","email","type","email","placeholder","Email address"],["matInput","","formControlName","phone","type","tel","placeholder","Emergency contact number"],["formControlName","zone","placeholder","All Levels"],["value",""],[3,"value",4,"ngFor","ngForOf"],["appearance","outline",1,"no-subscript","flex-1"],["multiple","","formControlName","roles","placeholder","Select roles"],[4,"ngFor","ngForOf"],["btn","","matRipple","","customTooltip","",1,"space-x-2",3,"content"],[1,"pr-2"],[3,"value"],[3,"value",4,"ngIf"],[1,"flex","justify-center","items-center","p-2","border-t","border-base-200"],["btn","","matRipple","",1,"w-32",3,"click"],["loading","",1,"h-64","flex","flex-col","items-center","justify-center"],[1,"mb-4",3,"diameter"],[1,"bg-base-100","p-4","rounded"],["matInput","","placeholder","Role name",3,"ngModelChange","ngModel"],["btn","","matRipple","",1,"w-full",3,"click"]],template:function(n,o){if(1&n&&(t.j41(0,"header")(1,"h2"),t.EFF(2),t.k0s(),t.nrm(3,"div",2),t.DNE(4,Tt,3,0,"button",3),t.k0s(),t.DNE(5,kt,41,11,"main",4)(6,Gt,3,0,"footer",5)(7,Vt,4,1,"ng-template",null,0,t.C5r)(9,Nt,5,1,"ng-template",null,1,t.C5r)),2&n){const i=t.sdS(8);t.R7$(2),t.SpI("",o.contact?"Edit":"New"," Emergency Contact"),t.R7$(2),t.Y8G("ngIf",!o.loading),t.R7$(),t.Y8G("ngIf",!o.loading)("ngIfElse",i),t.R7$(),t.Y8G("ngIf",!o.loading)}},dependencies:[m.Sq,m.bT,c.qT,c.me,c.BC,c.cb,c.vS,T.rl,X.fg,$.VO,y.wT,Ft.LG,x.tx,y.r6,c.j4,c.JD,jt.$,k.R,Q.I,m.Jj]})}return s})();function $t(s,r){if(1&s){const e=t.RV6();t.qex(0),t.j41(1,"div",6)(2,"div",7),t.EFF(3),t.k0s(),t.j41(4,"button",8),t.bIt("click",function(){const o=t.eBV(e).$implicit,i=t.XpG();return i.active=o,t.Njj(i.role_name=o)}),t.j41(5,"app-icon"),t.EFF(6,"edit"),t.k0s()(),t.j41(7,"button",9),t.bIt("click",function(){const o=t.eBV(e).$implicit,i=t.XpG();return t.Njj(i.removeRole(o))}),t.j41(8,"app-icon"),t.EFF(9,"delete"),t.k0s()()(),t.bVm()}if(2&s){const e=r.$implicit;t.XpG();const n=t.sdS(15);t.R7$(3),t.JRh(e),t.R7$(),t.Y8G("content",n)}}function wt(s,r){if(1&s){const e=t.RV6();t.j41(0,"div",10)(1,"mat-form-field",11)(2,"input",12),t.mxI("ngModelChange",function(o){t.eBV(e);const i=t.XpG();return t.DH7(i.role_name,o)||(i.role_name=o),t.Njj(o)}),t.k0s()(),t.j41(3,"button",13),t.bIt("click",function(){t.eBV(e);const o=t.XpG();return t.Njj(o.updateRoles())}),t.EFF(4," Save Role "),t.k0s()()}if(2&s){const e=t.XpG();t.R7$(2),t.R50("ngModel",e.role_name)}}let W=(()=>{class s{removeRole(e){var n=this;return(0,d.A)(function*(){if(!e)return;n.loading=!0,n._dialog_ref.disableClose=!0;const o=yield n.data.pipe((0,E.s)(1)).toPromise();yield(0,h.D58)(n._org.building.id,{name:"emergency_contacts",description:"Emergency Contacts",details:{roles:[...o.roles.filter(i=>i!==e)].filter(i=>!!i).sort((i,l)=>i.localeCompare(l)),contacts:o.contacts.map(i=>({...i,roles:i.roles.filter(l=>l!==e)}))}}).toPromise(),n._changes.next(0),n.loading=!1,n._dialog_ref.disableClose=!1})()}updateRoles(){var e=this;return(0,d.A)(function*(){if(!e.role_name)return;e.loading=!0,e._tooltip.close(),e._dialog_ref.disableClose=!0;const n=yield e.data.pipe((0,E.s)(1)).toPromise();yield(0,h.D58)(e._org.building.id,{name:"emergency_contacts",description:"Emergency Contacts",details:{roles:[...n.roles.filter(o=>o!==e.active),e.role_name].filter(o=>!!o).sort((o,i)=>o.localeCompare(i)),contacts:n.contacts}}).toPromise(),e._changes.next(0),e.role_name="",e.active="",e.loading=!1,e._dialog_ref.disableClose=!1})()}constructor(e,n){this._org=e,this._dialog_ref=n,this._changes=new u.t(0),this.loading=!1,this.data=(0,v.zV)([this._org.active_building,this._changes]).pipe((0,D.p)(([o])=>!!o),(0,j.n)(([o])=>(0,h.bpY)(o.id,"emergency_contacts")),(0,g.T)(({details:o})=>{const i=o||{roles:[],contacts:[]};return i.roles||(i.roles=[]),i.contacts||(i.contacts=[]),i}),(0,p.t)(1)),this.roles=this.data.pipe((0,g.T)(o=>o.roles))}static#t=this.\u0275fac=function(n){return new(n||s)(t.rXU(M.yb),t.rXU(x.CP))};static#e=this.\u0275cmp=t.VBU({type:s,selectors:[["role-management-modal"]],viewQuery:function(n,o){if(1&n&&t.GBs(H.In,5),2&n){let i;t.mGM(i=t.lsd())&&(o._tooltip=i.first)}},decls:16,vars:4,consts:[["role_form",""],["btn","","icon","","matRipple","","mat-dialog-close",""],[1,"overflow-y-auto","min-w-[20rem]","divide-y","divide-base-200","max-h-[65vh]"],["btn","","matRipple","","customTooltip","",1,"flex","items-center","justify-center","space-x-2","w-[calc(100%-1rem)]","m-2",3,"click","content"],[1,"truncate"],[4,"ngFor","ngForOf"],[1,"flex","items-center","space-x-2","hover:bg-base-200:bg-base-300","p-2"],[1,"flex-1","truncate"],["btn","","icon","","matRipple","","customTooltip","",3,"click","content"],["btn","","icon","","matRipple","",3,"click"],[1,"bg-base-100","p-4","rounded"],["appearance","outline"],["matInput","","placeholder","Role name",3,"ngModelChange","ngModel"],["btn","","matRipple","",1,"w-full",3,"click"]],template:function(n,o){if(1&n){const i=t.RV6();t.j41(0,"header")(1,"h2"),t.EFF(2,"Manage Roles"),t.k0s(),t.j41(3,"button",1)(4,"app-icon"),t.EFF(5,"close"),t.k0s()()(),t.j41(6,"main",2)(7,"button",3),t.bIt("click",function(){return t.eBV(i),o.active="",t.Njj(o.role_name="")}),t.j41(8,"div",4),t.EFF(9,"New Role"),t.k0s(),t.j41(10,"app-icon"),t.EFF(11,"add"),t.k0s()(),t.DNE(12,$t,10,2,"ng-container",5),t.nI1(13,"async"),t.k0s(),t.DNE(14,wt,5,1,"ng-template",null,0,t.C5r)}if(2&n){const i=t.sdS(15);t.R7$(7),t.Y8G("content",i),t.R7$(5),t.Y8G("ngForOf",t.bMT(13,2,o.roles))}},dependencies:[m.Sq,c.me,c.BC,c.vS,T.rl,X.fg,x.tx,y.r6,k.R,Q.I,m.Jj]})}return s})();var Ot=a(12993),Dt=a(23666);const Xt=["app-emergency-contacts",""],Yt=()=>[],Pt=()=>["email","name","roles","zone","actions"],Bt=()=>["Email","Name","Roles","Level"," "],Ut=()=>["flex","12r","16r","7r"],zt=(s,r,e)=>({roles:s,zone:r,actions:e});function At(s,r){if(1&s&&(t.j41(0,"mat-option",22),t.EFF(1),t.k0s()),2&s){const e=r.$implicit;t.Y8G("value",e),t.R7$(),t.SpI(" ",e," ")}}function Lt(s,r){if(1&s&&(t.j41(0,"span",24),t.EFF(1),t.k0s()),2&s){const e=r.$implicit;t.R7$(),t.SpI(" ",e," ")}}function Jt(s,r){1&s&&t.DNE(0,Lt,2,1,"span",23),2&s&&t.Y8G("ngForOf",r.data)}function Ht(s,r){if(1&s&&(t.EFF(0),t.nI1(1,"level")),2&s){let e;const n=r.data;t.SpI(" ",n?null==(e=t.bMT(1,1,n))?null:e.display_name:"All"," ")}}function Qt(s,r){if(1&s){const e=t.RV6();t.j41(0,"div",25)(1,"button",26),t.bIt("click",function(){const o=t.eBV(e).row,i=t.XpG();return t.Njj(i.editContact(o))}),t.j41(2,"app-icon"),t.EFF(3,"edit"),t.k0s()(),t.j41(4,"button",26),t.bIt("click",function(){const o=t.eBV(e).row,i=t.XpG();return t.Njj(i.removeContact(o))}),t.j41(5,"app-icon"),t.EFF(6,"delete"),t.k0s()()()}}let K=(()=>{class s{constructor(e,n){this._org=e,this._dialog=n,this._change=new u.t(0),this.search="",this.role_filter=new u.t(""),this.data=(0,v.zV)([this._org.active_building,this._change]).pipe((0,D.p)(([o])=>!!o),(0,j.n)(([o])=>(0,h.bpY)(o.id,"emergency_contacts")),(0,g.T)(({details:o})=>o||{roles:[],contacts:[]}),(0,p.t)(1)),this.roles=this.data.pipe((0,g.T)(o=>o?.roles||[])),this.contacts=this.data.pipe((0,g.T)(o=>o?.contacts||[])),this.filtered_contacts=(0,v.zV)([this.contacts,this.role_filter]).pipe((0,g.T)(([o,i])=>o.filter(l=>!i||l.roles.includes(i))))}ngOnInit(){}manageRoles(){this._dialog.open(W,{}).afterClosed().subscribe(()=>this._change.next(Date.now()))}editContact(e){this._dialog.open(Z,{data:e}).afterClosed().subscribe(()=>this._change.next(Date.now()))}removeContact(e){var n=this;return(0,d.A)(function*(){const o=yield(0,_.GE)({title:"Remove Emergency Contact",content:`Are you sure you want to remove ${e.name} from the emergency contacts?`,icon:{content:"delete"}},n._dialog);if("done"!==o.reason)return;o.loading("Removing contact...");const i=yield n.data.pipe((0,E.s)(1)).toPromise(),l=(i?.contacts||[]).filter(f=>f.id!==e.id);yield(0,h.D58)(n._org.building.id,{name:"emergency_contacts",description:"Emergency Contacts",details:{roles:i.roles,contacts:l}}).toPromise(),o.close(),n._change.next(Date.now()),(0,_.VX)("Successfully removed emergency contact.")})()}static#t=this.\u0275fac=function(n){return new(n||s)(t.rXU(M.yb),t.rXU(x.bZ))};static#e=this.\u0275cmp=t.VBU({type:s,selectors:[["","app-emergency-contacts",""]],attrs:Xt,decls:37,vars:20,consts:[["roles_template",""],["zone_template",""],["actions_template",""],[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],["topbar","",1,"px-8","py-4","flex","flex-col"],[1,"flex","items-center","justify-between"],[1,"text-2xl","font-medium"],[1,"flex","items-center","space-x-2"],["appearance","outline",1,"no-subscript"],["matPrefix","",1,"text-2xl"],["matInput","","placeholder","Filter contacts...",3,"ngModelChange","ngModel"],["btn","","matRipple","",1,"space-x-2",3,"click"],[1,"text-2xl"],[1,"pr-2"],[1,"flex","items-center","justify-between","py-2","mt-2"],["placeholder","All Roles",3,"ngModelChange","ngModel"],["value",""],[3,"value",4,"ngFor","ngForOf"],["icon","","matRipple","","matTooltip","Manage Roles",1,"h-12","w-12","bg-secondary","text-secondary-content","rounded",3,"click"],[1,"w-full","h-1/2","flex-1","overflow-auto","px-8"],[1,"min-w-[60rem]","block",3,"dataSource","filter","columns","display_column","column_size","template","empty"],[3,"value"],["class","m-1 py-1 px-2 rounded-2xl text-xs font-mono bg-info text-info-content",4,"ngFor","ngForOf"],[1,"m-1","py-1","px-2","rounded-2xl","text-xs","font-mono","bg-info","text-info-content"],[1,"flex","items-center","justify-end","w-full","space-x-2"],["icon","","matRipple","",3,"click"]],template:function(n,o){if(1&n){const i=t.RV6();t.nrm(0,"app-topbar"),t.j41(1,"div",3),t.nrm(2,"app-sidebar"),t.j41(3,"main",4)(4,"section",5)(5,"div",6)(6,"h2",7),t.EFF(7,"Emergency Contacts"),t.k0s(),t.j41(8,"div",8)(9,"mat-form-field",9)(10,"app-icon",10),t.EFF(11," search "),t.k0s(),t.j41(12,"input",11),t.mxI("ngModelChange",function(f){return t.eBV(i),t.DH7(o.search,f)||(o.search=f),t.Njj(f)}),t.k0s()(),t.j41(13,"button",12),t.bIt("click",function(){return t.eBV(i),t.Njj(o.editContact())}),t.j41(14,"app-icon",13),t.EFF(15,"add"),t.k0s(),t.j41(16,"div",14),t.EFF(17,"Add Contact"),t.k0s()()()(),t.j41(18,"div",15)(19,"mat-form-field",9)(20,"mat-select",16),t.bIt("ngModelChange",function(f){return t.eBV(i),t.Njj(o.role_filter.next(f))}),t.j41(21,"mat-option",17),t.EFF(22,"All Roles"),t.k0s(),t.DNE(23,At,2,2,"mat-option",18),t.nI1(24,"async"),t.k0s()(),t.j41(25,"div",8)(26,"button",19),t.bIt("click",function(){return t.eBV(i),t.Njj(o.manageRoles())}),t.j41(27,"app-icon"),t.EFF(28,"list_alt"),t.k0s()()()()(),t.j41(29,"section",20),t.nrm(30,"custom-table",21),t.DNE(31,Jt,1,1,"ng-template",null,0,t.C5r)(33,Ht,2,3,"ng-template",null,1,t.C5r)(35,Qt,7,0,"ng-template",null,2,t.C5r),t.k0s()()()}if(2&n){const i=t.sdS(32),l=t.sdS(34),f=t.sdS(36);t.R7$(12),t.R50("ngModel",o.search),t.R7$(8),t.Y8G("ngModel",o.role_filter.getValue()),t.R7$(3),t.Y8G("ngForOf",t.bMT(24,10,o.roles)||t.lJ4(12,Yt)),t.R7$(7),t.Y8G("dataSource",o.filtered_contacts)("filter",o.search)("columns",t.lJ4(13,Pt))("display_column",t.lJ4(14,Bt))("column_size",t.lJ4(15,Ut))("template",t.sMw(16,zt,i,l,f))("empty",o.search?"No matching contacts":"No emergency contacts for this building")}},dependencies:[m.Sq,c.me,c.BC,c.vS,A.S,L.c,T.rl,T.JW,X.fg,$.VO,y.wT,B.oV,y.r6,k.R,Ot.r,m.Jj,Dt.D],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}\n\n/*# sourceMappingURL=emergency-contacts.component.ts-angular-inline--153.css.map*/"]})}return s})();const Zt=[{path:"",component:z},{path:"new",component:J},{path:"emergency-contacts",component:K}],Wt=[J,z,w,O,U,K,Z,W];let Kt=(()=>{class s{static#t=this.\u0275fac=function(n){return new(n||s)};static#e=this.\u0275mod=t.$C({type:s});static#n=this.\u0275inj=t.G2t({imports:[m.MD,c.YN,yt.r,I.iI.forChild(Zt)]})}return s})()},68390:(q,S,a)=>{a.d(S,{g8:()=>V,kR:()=>m.k,Gp:()=>u.Gp,N8:()=>g.N8,SZ:()=>g.SZ,is:()=>b.is});var m=a(11081),d=(a(11543),a(7282),a(67450));class V{constructor(p={}){this.type=p.type||p.location||"other",this.position=p.position||p.map_id||p.asset_id||{x:p.x/p.map_width||0,y:p.y/p.map_height||0},this.variance=p.variance||0,this.last_seen=p.last_seen||(0,d.A)(new Date),this.level=p.level,this.building=p.building,this.at_location=!!p.at_location,this.coordinates_from=p.coordinates_from||"top-left"}}var u=a(93693),b=(a(24129),a(86039)),g=a(2372)}}]);
//# sourceMappingURL=apps_concierge_src_app_staff_staff_module_ts.js.map