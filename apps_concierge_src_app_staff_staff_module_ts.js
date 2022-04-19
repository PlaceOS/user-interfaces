"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_staff_staff_module_ts"],{66:(rt,y,o)=>{o.r(y),o.d(y,{COMPONENTS:()=>at,StaffModule:()=>lt});var f=o(6362),_=o(587),v=o(9481),p=o(4929),F=o(6862),d=o(4505),C=o(7716),u=o(4099),x=o(6942),A=o(9095),J=o(9128),P=o(9377),S=o(3200),g=o(3294),b=o(3619),t=o(3184);let m=(()=>{class n extends g.KG{constructor(e){super(),this._org=e,this._onsite={},this._events={},this._filters=new d.X({}),this._search=new d.X(""),this._loading=new d.X(!1),this._users=new d.X([]),this.loading=this._loading.asObservable(),this.filters=this._filters.asObservable(),this.users=this._filters.asObservable(),this.filtered_users=(0,C.aj)([this._search,this._users,this._filters]).pipe((0,x.U)(s=>{const[i,l,r]=s;return l.filter(c=>(!i||c.name.toLowerCase().includes(i)||c.email.toLowerCase().includes(i))&&(!r.only_onsite||this._onsite[c.email]))})),this.user_events=(0,C.aj)([this._filters]).pipe((0,A.w)(s=>(0,p.mG)(this,void 0,void 0,function*(){this._loading.next(!0);const i=yield(0,u.F2)({period_start:Math.floor((0,P.Z)(new Date).valueOf()/1e3),period_end:Math.floor((0,S.Z)(new Date).valueOf()/1e3),type:"staff"}).toPromise(),l={},r=(new Date).valueOf();for(const c of i)(0,g.MZ)(r,r,c.date,c.date+60*c.duration*1e3)&&(l[c.asset_id]=c.checked_in,this._events[c.asset_id]=c);return this._onsite=l,this._loading.next(!1),l})),(0,J.d)()),this.loadUsers()}setFilters(e){this._filters.next(Object.assign(Object.assign({},this._filters.getValue()),e))}setSearchString(e){this._search.next(e)}startPolling(e=3e4){this.setFilters(this._filters.getValue()),this.interval("poll",()=>this.setFilters(this._filters.getValue()),e)}stopPolling(){this.clearInterval("poll")}checkin(e){return(0,p.mG)(this,void 0,void 0,function*(){const s=yield(0,u.km)({booking_start:Math.floor((new Date).valueOf()/1e3),booking_end:Math.floor((0,S.Z)(new Date).valueOf()/1e3),asset_id:e.email,title:"Checked-in Onsite",description:this._org.building.display_name||this._org.building.name,zones:[this._org.building.id],booking_type:"staff"}).toPromise();yield(0,u.FD)(s.id,!0),this._events[e.email]=s,this._onsite[e.email]=!0})}checkout(e){return(0,p.mG)(this,void 0,void 0,function*(){const s=this._events[e.email];if(s){const i=yield(0,u.km)(Object.assign(Object.assign({},s.toJSON()),{booking_end:Math.floor((new Date).valueOf()/1e3)})).toPromise();yield(0,u.FD)(i.id,!1).toPromise(),this._events[e.email]=i,this._onsite[e.email]=!1}})}loadUsers(){return(0,p.mG)(this,void 0,void 0,function*(){const e=yield(0,F.VE)("").toPromise();e.sort((s,i)=>s.name.localeCompare(i.name)),this._users.next(e)})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(b.w7))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var U=o(4945),w=o(5670),z=o(4770),Q=o(1434),N=o(1130),j=o(6623),D=o(9396);function I(n,a){if(1&n&&(t.TgZ(0,"mat-option",7),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.display_name||e.name," ")}}let T=(()=>{class n extends g.KG{constructor(e,s,i,l){super(),this._state=e,this._org=s,this._route=i,this._router=l,this.zones=[],this.levels=this._org.active_levels,this.filters=this._state.filters,this.setDate=r=>this._state.setFilters({date:r}),this.setFilters=r=>this._state.setFilters(r),this.setSearch=r=>this._state.setSearchString(r),this.updateZones=r=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:r.join(",")}}),this._state.setFilters({zones:r})}}ngOnInit(){return(0,p.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,w.P)(e=>e)).toPromise(),this.subscription("route.query",this._route.queryParamMap.subscribe(e=>{if(e.has("zone_ids")){const s=e.get("zone_ids").split(",");if(s.length){const i=this._org.levelWithID(s);if(!i)return;this._org.building=this._org.buildings.find(l=>l.id===i.parent_id),this.zones=s}}})),this.subscription("levels",this._org.active_levels.subscribe(e=>{this.zones=this.zones.filter(s=>e.find(i=>i.id===s)),!this.zones.length&&e.length&&this.zones.push(e[0].id),this.updateZones(this.zones)})),this.setSearch("")})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m),t.Y36(b.w7),t.Y36(v.gz),t.Y36(v.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["staff-topbar"]],features:[t.qOj],decls:10,vars:7,consts:[["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[1,"flex-1","w-2"],[1,"mr-2",3,"modelChange"],[3,"value"]],template:function(e,s){if(1&e&&(t.TgZ(0,"mat-form-field",0)(1,"mat-select",1),t.NdJ("ngModelChange",function(l){return s.zones=l})("ngModelChange",function(l){return s.updateZones(l)}),t.YNc(2,I,2,2,"mat-option",2),t.ALo(3,"async"),t.qZA()(),t.TgZ(4,"mat-slide-toggle",3),t.NdJ("ngModelChange",function(l){return s.setFilters({only_onsite:l})}),t.ALo(5,"async"),t.TgZ(6,"div",4),t._uU(7,"Onsite Only"),t.qZA()(),t._UZ(8,"div",5),t.TgZ(9,"searchbar",6),t.NdJ("modelChange",function(l){return s.setSearch(l)}),t.qZA()),2&e){let i;t.xp6(1),t.Q6J("ngModel",s.zones),t.xp6(1),t.Q6J("ngForOf",t.lcZ(3,3,s.levels)),t.xp6(2),t.Q6J("ngModel",null==(i=t.lcZ(5,5,s.filters))?null:i.only_onsite)}},directives:[z.KE,Q.gD,_.JJ,_.On,f.sg,N.ey,j.Rr,D.U],pipes:[f.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em;border-bottom:1px solid #ccc}[_nghost-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-left:.5rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}\n/*# sourceMappingURL=staff-topbar.component.ts-angular-inline--92.css.map*/"]}),n})();var Y=o(9685),k=o(1637),E=o(89),G=o(7317),R=o(5306);function $(n,a){1&n&&(t.TgZ(0,"div",11),t._uU(1,"Onsite"),t.qZA())}function B(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",1),t._UZ(1,"a-user-avatar",2),t.TgZ(2,"div",3)(3,"div",4),t._uU(4),t.qZA(),t.TgZ(5,"div",5),t._uU(6),t.qZA()(),t.YNc(7,$,2,0,"div",6),t.TgZ(8,"div",7)(9,"action-icon",8),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return i.onsite?i.checkout():i.checkin()}),t.qZA(),t.TgZ(10,"a",9)(11,"app-icon"),t._uU(12,"email"),t.qZA()(),t.TgZ(13,"a",10)(14,"app-icon"),t._uU(15,"call"),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("user",e.user),t.xp6(3),t.Oqu(null==e.user?null:e.user.name),t.xp6(2),t.hij(" ",null==e.user?null:e.user.email," "),t.xp6(1),t.Q6J("ngIf",e.onsite),t.xp6(2),t.Q6J("matTooltip",e.onsite?"Checkout Staff":"Checkin Staff")("loading",e.loading)("content",e.onsite?"event_busy":"event_available"),t.xp6(1),t.Q6J("disabled",!(null!=e.user&&e.user.email))("href","mailto:"+(null==e.user?null:e.user.email),t.LSH),t.xp6(3),t.Q6J("disabled",!(null!=e.user&&e.user.phone))("href","tel:"+(null==e.user?null:e.user.phone),t.LSH)}}let O=(()=>{class n{constructor(e){this._state=e,this.checkin=()=>(0,p.mG)(this,void 0,void 0,function*(){this.loading=!0,yield this._state.checkin(this.user).catch(s=>(0,g.cB)("Error checking in Staff member")),this.loading=!1}),this.checkout=()=>(0,p.mG)(this,void 0,void 0,function*(){this.loading=!0,yield this._state.checkout(this.user).catch(s=>(0,g.cB)("Error checking out Staff member")),this.loading=!1})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m))},n.\u0275cmp=t.Xpm({type:n,selectors:[["staff-details"]],inputs:{user:"user",onsite:"onsite"},decls:1,vars:1,consts:[["class","w-full flex items-center px-4 py-2 bg-white border-b border-gray-200",4,"ngIf"],[1,"w-full","flex","items-center","px-4","py-2","bg-white","border-b","border-gray-200"],[3,"user"],[1,"flex","flex-col","flex-1"],[1,"px-2"],[1,"px-2","text-xs","text-opacity-50"],["class","text-xs opacity-50 px-4",4,"ngIf"],[1,"flex","items-center"],[3,"matTooltip","loading","content","click"],["mat-icon-button","","matTooltip","Email Staff",3,"disabled","href"],["mat-icon-button","","matTooltip","Phone Staff",3,"disabled","href"],[1,"text-xs","opacity-50","px-4"]],template:function(e,s){1&e&&t.YNc(0,B,16,11,"div",0),2&e&&t.Q6J("ngIf",s.user)},directives:[f.O5,Y.k,k.m,E.gM,G.zs,R.o],styles:["[_nghost-%COMP%] > div[_ngcontent-%COMP%]:hover{background-color:#f0f0f0!important}\n/*# sourceMappingURL=staff-details.component.ts-angular-inline--94.css.map*/"]}),n})();var Z=o(833);const X=["container"];function H(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",7),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw().scrollTo(l)}),t.ALo(1,"async"),t._uU(2),t.qZA()}if(2&n){const e=a.$implicit,s=t.oxw();t.ekj("disabled",t.lcZ(1,5,s.user_list)[e].length<=0)("active",e===s.active_group),t.xp6(2),t.hij(" ",e," ")}}function V(n,a){if(1&n&&(t._UZ(0,"staff-details",12),t.ALo(1,"async"),t.ALo(2,"async")),2&n){const e=a.$implicit,s=a.index,i=t.oxw(2).$implicit,l=t.oxw(2);t.Q6J("id","letter-"+i+"-"+s)("user",e)("onsite",!!t.lcZ(1,3,l.events)&&t.lcZ(2,5,l.events)[e.email])}}function W(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"div",10),t._uU(2),t.qZA(),t.YNc(3,V,3,7,"staff-details",11),t.ALo(4,"async"),t.BQk()),2&n){const e=t.oxw().$implicit,s=t.oxw(2);t.xp6(1),t.Q6J("id","letter-"+("#"===e?"0":e)),t.xp6(1),t.hij(" ",e," "),t.xp6(1),t.Q6J("ngForOf",t.lcZ(4,3,s.user_list)[e])}}function K(n,a){if(1&n&&(t.ynx(0),t.YNc(1,W,5,5,"ng-container",9),t.ALo(2,"async"),t.BQk()),2&n){const e=a.$implicit,s=t.oxw(2);t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,s.user_list)[e].length)}}function q(n,a){if(1&n&&(t.ynx(0),t.YNc(1,K,3,3,"ng-container",8),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.groups)}}function tt(n,a){1&n&&t._UZ(0,"mat-progress-bar",13)}function et(n,a){1&n&&(t.TgZ(0,"div",14)(1,"p"),t._uU(2,"No matching staff members"),t.qZA()())}const h="#abcdefghijklmnopqrstuvwxyz".split("");let M=(()=>{class n extends g.KG{constructor(e){super(),this._state=e,this.active_group="#",this.groups=h,this.events=this._state.user_events,this.loading=this._state.loading,this.user_count=this._state.filtered_users.pipe((0,x.U)(s=>s.length)),this.user_list=this._state.filtered_users.pipe((0,x.U)(s=>{const i={};for(const l of h)i[l]=(s||[]).filter(r=>r.name.toLowerCase()[0].startsWith(l)||"#"===l&&!h.includes(r.name.toLowerCase()[0]));return this.timeout("scroll",()=>this.onScroll({}),30),i}))}onScroll(e){const s=this._el.nativeElement.scrollTop;for(const i of h){const l=document.querySelector(`#letter-${"#"===i?"0":i}`);if(l){if(l.offsetTop-s>0)break;this.active_group=i}}}scrollTo(e){const s=document.querySelector(`#letter-${e}-0`);s&&(s.scrollIntoView({behavior:"smooth",block:"center"}),this.active_group=e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m))},n.\u0275cmp=t.Xpm({type:n,selectors:[["staff-listings"]],viewQuery:function(e,s){if(1&e&&t.Gf(X,5),2&e){let i;t.iGM(i=t.CRH())&&(s._el=i.first)}},features:[t.qOj],decls:10,vars:8,consts:[[1,"w-full","p-2","flex","items-center","justify-center"],["letter","","class","capitalize h-6 w-6 flex items-center justify-center text-xs cursor-pointer",3,"disabled","active","click",4,"ngFor","ngForOf"],[1,"flex-1","overflow-auto","w-full","relative","bg-gray-100",2,"height","50%",3,"scroll"],["container",""],[4,"ngIf","ngIfElse"],["mode","indeterminate",4,"ngIf"],["empty_state",""],["letter","",1,"capitalize","h-6","w-6","flex","items-center","justify-center","text-xs","cursor-pointer",3,"click"],[4,"ngFor","ngForOf"],[4,"ngIf"],["group","",1,"capitalize","bg-gray-300","border-b","text-sm","font-medium","sticky","top-0","z-10",3,"id"],[3,"id","user","onsite",4,"ngFor","ngForOf"],[3,"id","user","onsite"],["mode","indeterminate"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center"]],template:function(e,s){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,H,3,7,"div",1),t.qZA(),t.TgZ(2,"div",2,3),t.NdJ("scroll",function(l){return s.onScroll(l)}),t.YNc(4,q,2,1,"ng-container",4),t.ALo(5,"async"),t.qZA(),t.YNc(6,tt,1,0,"mat-progress-bar",5),t.ALo(7,"async"),t.YNc(8,et,3,0,"ng-template",null,6,t.W1O)),2&e){const i=t.MAs(9);t.xp6(1),t.Q6J("ngForOf",s.groups),t.xp6(3),t.Q6J("ngIf",t.lcZ(5,4,s.user_count))("ngIfElse",i),t.xp6(2),t.Q6J("ngIf",t.lcZ(7,6,s.loading))}},directives:[f.sg,f.O5,O,Z.pW],pipes:[f.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:50%}[letter][_ngcontent-%COMP%]{transition:font-size .2s,color .2s}[group][_ngcontent-%COMP%]{border-color:#ccc;padding:.5rem 1.65rem}.disabled[_ngcontent-%COMP%]{opacity:.2;pointer-events:none}.active[_ngcontent-%COMP%]{font-size:1.25rem;opacity:1;color:#d81b60}\n/*# sourceMappingURL=staff-listing.component.ts-angular-inline--93.css.map*/"]}),n})();const nt=["app-staff",""];function st(n,a){1&n&&t._UZ(0,"mat-progress-bar",4)}let L=(()=>{class n{constructor(e){this._state=e,this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m))},n.\u0275cmp=t.Xpm({type:n,selectors:[["","app-staff",""]],attrs:nt,decls:6,vars:3,consts:[[1,"relative","overflow-hidden","flex-1","flex","flex-col"],[1,"w-full"],[1,"w-full","flex-1","h-0"],["class","w-full","mode","indeterminate",4,"ngIf"],["mode","indeterminate",1,"w-full"]],template:function(e,s){1&e&&(t._UZ(0,"sidebar"),t.TgZ(1,"main",0),t._UZ(2,"staff-topbar",1)(3,"staff-listings",2),t.YNc(4,st,1,0,"mat-progress-bar",3),t.ALo(5,"async"),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngIf",t.lcZ(5,1,s.loading)))},directives:[U.k,T,M,f.O5,Z.pW],pipes:[f.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}\n/*# sourceMappingURL=staff.component.ts-angular-inline--91.css.map*/"]}),n})();var it=o(2656);const ot=[{path:"",component:L}],at=[L,T,M,O];let lt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[f.ez,_.u5,it.v,v.Bz.forChild(ot)]]}),n})()}}]);
//# sourceMappingURL=apps_concierge_src_app_staff_staff_module_ts.js.map