"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_day-view_day-view_module_ts"],{9366:(nt,U,a)=>{a.r(U),a.d(U,{DayViewModule:()=>tt});var c=a(6477),v=a(9542),f=a(6585),Y=a(3045),d=a(1426),e=a(6839),I=a(4945),h=a(1670),Q=a(5670),x=a(5912),g=a(3194),L=a(8441),O=a(8750),b=a(6508),m=a(7728),M=a(4291),_=a(5306);function q(n,l){if(1&n&&(e.TgZ(0,"mat-option",13),e._uU(1),e.qZA()),2&n){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.display_name||t.name," ")}}function j(n,l){if(1&n&&(e.TgZ(0,"mat-option",13),e._uU(1),e.qZA()),2&n){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}const z=function(){return{class:"material-icons",content:"add"}};let E=(()=>{class n extends d.cx{updateUIOptions(t){this._state.setUIOptions(t)}constructor(t,o,i,s){super(),this._state=t,this._org=o,this._route=i,this._router=s,this.zones=[],this.types=[{id:"internal",name:"Internal"},{id:"external",name:"External"},{id:"cancelled",name:"Cancelled"}],this.type_list=this.types.map(r=>`${r.id}`),this.levels=this._org.active_levels,this.ui_options=this._state.options,this.setDate=r=>this._state.setDate(r),this.newBooking=r=>this._state.newBooking(r),this.updateZones=r=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:r.join(",")}}),this._state.setZones(r)},this.updateTypes=r=>this._state.setFilters({hide_type:this.types.reduce((p,u)=>(r.includes(u.id)||p.push(u),p),[])})}ngOnInit(){var t=this;return(0,h.Z)(function*(){yield t._org.initialised.pipe((0,Q.P)(o=>o)).toPromise(),t.subscription("route.query",t._route.queryParamMap.subscribe(o=>{if(o.has("zone_ids")){const i=o.get("zone_ids").split(",");if(i.length){t.zones=i;const s=t._org.levelWithID(i);if(!s)return;t._org.building=t._org.buildings.find(r=>r.id===s.parent_id)}}})),t.subscription("levels",t._org.active_levels.subscribe(o=>{t.zones=t.zones.filter(i=>o.find(s=>s.id===i)),!t.zones.length&&o.length&&t.zones.push(o[0].id),t.updateZones(t.zones)})),t.updateTypes(t.type_list)})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.Y),e.Y36(x.w7),e.Y36(f.gz),e.Y36(f.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["dayview-topbar"]],features:[e.qOj],decls:21,vars:11,consts:[[1,"flex","items-center","px-4","h-20","bg-white","dark:bg-neutral-700","border-b","border-gray-200","dark:border-neutral-500"],["btn","","matRipple","","new","",1,"w-12","xl:w-auto","overflow-hidden",3,"click"],[1,"flex","items-center"],[1,"mr-2",3,"icon"],[1,"hidden","xl:block"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["multiple","","placeholder","No Events",3,"ngModel","ngModelChange"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[1,"flex-1","w-0"],[3,"dateChange"],[3,"value"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return o.newBooking()}),e.TgZ(2,"div",2),e._UZ(3,"app-icon",3),e.TgZ(4,"div",4),e._uU(5,"New Booking"),e.qZA()()(),e.TgZ(6,"mat-form-field",5)(7,"mat-select",6),e.NdJ("ngModelChange",function(s){return o.zones=s})("ngModelChange",function(s){return o.updateZones(s)}),e.YNc(8,q,2,2,"mat-option",7),e.ALo(9,"async"),e.qZA()(),e.TgZ(10,"mat-form-field",5)(11,"mat-select",8),e.NdJ("ngModelChange",function(s){return o.type_list=s})("ngModelChange",function(s){return o.updateTypes(s)}),e.TgZ(12,"mat-select-trigger"),e._uU(13,"Legend"),e.qZA(),e.YNc(14,j,2,2,"mat-option",7),e.qZA()(),e.TgZ(15,"mat-slide-toggle",9),e.NdJ("ngModelChange",function(s){return o.updateUIOptions({show_overflow:s})}),e.ALo(16,"async"),e.TgZ(17,"div",10),e._uU(18,"Setup / Breakdown"),e.qZA()(),e._UZ(19,"div",11),e.TgZ(20,"date-options",12),e.NdJ("dateChange",function(s){return o.setDate(s)}),e.qZA()()),2&t){let i;e.xp6(3),e.Q6J("icon",e.DdM(10,z)),e.xp6(4),e.Q6J("ngModel",o.zones),e.xp6(1),e.Q6J("ngForOf",e.lcZ(9,6,o.levels)),e.xp6(3),e.Q6J("ngModel",o.type_list),e.xp6(3),e.Q6J("ngForOf",o.types),e.xp6(1),e.Q6J("ngModel",null==(i=e.lcZ(16,8,o.ui_options))?null:i.show_overflow)}},dependencies:[c.sg,v.JJ,v.On,L.E,O.KE,b.gD,b.$L,m.ey,M.Rr,m.wG,_.o,c.Ov],styles:["button[_ngcontent-%COMP%]{min-width:0;padding:0 .85rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em;margin-left:1em}mat-slide-toggle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:5.5em;white-space:initial;line-height:1.2em}\n/*# sourceMappingURL=dayview-topbar.component.ts-angular-inline--53.css.map*/"]}),n})();var Z=a(308),P=a(4139),D=a(7716),$=a(9151),S=a(9095),G=a(7418),y=a(6942),R=a(9128),F=a(2886),V=a(914),K=a(6297),T=a(3861),X=a(2317),C=a(9377),A=a(8987),k=a(1320);function H(n,l){if(1&n&&e._UZ(0,"div"),2&n){const t=e.oxw();e.Tol("overflow-block absolute rounded overflow-hidden w-full "+t.type),e.Udp("top",100*t.overflow_top+"%")("height",100*t.overflow_height+"%")}}function W(n,l){if(1&n&&(e.TgZ(0,"div",6)(1,"app-icon",7),e._uU(2,"title"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.event.title," ")}}function ee(n,l){if(1&n&&(e.TgZ(0,"div",6)(1,"app-icon",7),e._uU(2,"schedule"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.time," ")}}function te(n,l){if(1&n&&(e.TgZ(0,"div",6)(1,"app-icon",7),e._uU(2,"people"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.AsE(" ",t.event.attendees.length," Attendee",1===t.event.attendees.length?"":"s"," ")}}function ne(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",3),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.view(i.event))}),e.TgZ(1,"div",4),e._uU(2),e.qZA(),e.YNc(3,W,4,1,"div",5),e.YNc(4,ee,4,1,"div",5),e.YNc(5,te,4,2,"div",5),e.qZA()}if(2&n){const t=e.oxw();e.Tol("absolute rounded overflow-hidden text-sm border border-gray-200 shadow-sm z-10 hover:z-30 "+t.type),e.Udp("top",100*t.top+"%")("height",100*t.height+"%"),e.xp6(2),e.Oqu(null==t.event.organiser?null:t.event.organiser.name),e.xp6(1),e.Q6J("ngIf",t.event.duration>30),e.xp6(1),e.Q6J("ngIf",t.event.duration>60),e.xp6(1),e.Q6J("ngIf",t.event.duration>90)}}function oe(n,l){if(1&n&&(e.TgZ(0,"div",8)(1,"div")(2,"app-icon"),e._uU(3),e.qZA()(),e.TgZ(4,"div",9),e._uU(5),e.ALo(6,"date"),e.qZA()()),2&n){const t=e.oxw();e.Udp("top",100*t.top+"%")("height",100*t.height+"%"),e.xp6(1),e.Tol("icon flex items-center justify-center mr-2 text-3xl rounded h-12 w-12 text-pending "+t.event.ext("cleaning_status")),e.xp6(2),e.Oqu("done"===t.event.ext("cleaning_status")?"done":"warning"),e.xp6(2),e.AsE(" ","done"===t.event.ext("cleaning_status")?"Finished":"Scheduled to"," clean at ",e.xi3(6,9,t.event.ext("cleaning_time")||1e3*t.event.event_end,"shortTime")," ")}}const w=1440;let ie=(()=>{class n{get time(){const t=new Date(this.event.date);return(0,T.Z)(t,"h:mm a")+" - "+(0,T.Z)((0,X.Z)(t,this.event.duration),"h:mm a")}get type(){return this.event.guests.length?"external":"declined"===this.event.status?"cancelled":"internal"}constructor(t){this._state=t,this.top=-999,this.height=0,this.overflow_top=-999,this.overflow_height=0,this.ui_options=this._state.options,this.view=o=>this._state.setEvent(o)}ngOnChanges(t){if(t.event&&this.event){const o=(0,C.Z)(new Date(this.event.date)),i=(0,A.Z)(new Date(this.event.date),o);this.top=i/w,this.height=this.event.duration/w,this.overflow_top=(i-(this.event.ext("setup")||0))/w,this.overflow_height=(this.event.duration+(this.event.ext("setup")||0)+(this.event.ext("breakdown")||0))/w}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.Y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["dayview-event"]],inputs:{event:"event"},features:[e.TTD],decls:5,vars:7,consts:[[3,"class","top","height",4,"ngIf"],["event","","matRipple","",3,"class","top","height","click",4,"ngIf"],["cleaning","","class","absolute rounded overflow-hidden flex w-full shadow p-2 bg-white z-20 hover:!h-48",3,"top","height",4,"ngIf"],["event","","matRipple","",3,"click"],[1,"px-2","py-1","font-medium"],["class","py-1 flex items-center",4,"ngIf"],[1,"py-1","flex","items-center"],[1,"mx-2"],["cleaning","",1,"absolute","rounded","overflow-hidden","flex","w-full","shadow","p-2","bg-white","z-20","hover:!h-48"],[1,"flex-1","w-1/2"]],template:function(t,o){if(1&t&&(e.YNc(0,H,1,6,"div",0),e.ALo(1,"async"),e.YNc(2,ne,6,10,"div",1),e.YNc(3,oe,7,12,"div",2),e.ALo(4,"async")),2&t){let i,s;e.Q6J("ngIf",null==(i=e.lcZ(1,3,o.ui_options))?null:i.show_overflow),e.xp6(2),e.Q6J("ngIf",o.event),e.xp6(1),e.Q6J("ngIf",o.event&&(null==(s=e.lcZ(4,5,o.ui_options))?null:s.show_cleaning))}},dependencies:[c.O5,m.wG,_.o,c.Ov,c.uU],styles:["[event][_ngcontent-%COMP%]{background-color:#ccc;width:12rem;z-index:100;transition:box-shadow .2s}[event][_ngcontent-%COMP%]:hover{box-shadow:0 1px 3px 1px #0003,0 1px 1px #00000024,0 2px 1px -1px #0000001f!important;cursor:pointer}.overflow-block[_ngcontent-%COMP%]{opacity:.3;width:12rem}.internal[_ngcontent-%COMP%]{background-color:#1565c0;color:#fff}.icon[_ngcontent-%COMP%]{background-color:#f0f0f0}.icon.done[_ngcontent-%COMP%]{color:#21a453}.external[_ngcontent-%COMP%]{background-color:#ad1457;color:#fff}.cancelled[_ngcontent-%COMP%]{background-color:#ccc}\n/*# sourceMappingURL=dayview-event.component.ts-angular-inline--56.css.map*/"]}),n})();function se(n,l){1&n&&e._UZ(0,"dayview-event",2),2&n&&e.Q6J("event",l.$implicit)}function le(n,l){if(1&n&&(e.ynx(0),e.YNc(1,se,1,1,"dayview-event",1),e.ALo(2,"async"),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,t.events))}}let ae=(()=>{class n extends d.cx{constructor(t){super(),this._state=t,this.events=this._state.filtered.pipe((0,y.U)(o=>o.filter(i=>i.resources.find(s=>this.space.email===s.email))))}ngOnInit(){this.subscription("events",this._state.filtered.subscribe())}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.Y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["dayview-space"]],inputs:{space:"space"},features:[e.qOj],decls:1,vars:1,consts:[[4,"ngIf"],[3,"event",4,"ngFor","ngForOf"],[3,"event"]],template:function(t,o){1&t&&e.YNc(0,le,3,3,"ng-container",0),2&t&&e.Q6J("ngIf",o.space)},dependencies:[c.sg,c.O5,ie,c.Ov],styles:["[_nghost-%COMP%]{position:relative}\n/*# sourceMappingURL=dayview-space.component.ts-angular-inline--55.css.map*/"]}),n})();function re(n,l){if(1&n&&(e.TgZ(0,"div",15)(1,"div",16),e._uU(2),e.qZA(),e._UZ(3,"div",17),e.qZA()),2&n){const t=l.$implicit,o=e.oxw();e.Udp("transform","translateY(-"+o.scroll.y+"px)"),e.xp6(2),e.hij(" ",t," ")}}function ce(n,l){if(1&n&&(e.TgZ(0,"div",18),e._UZ(1,"div",19),e.TgZ(2,"div",20),e._uU(3),e.qZA()()),2&n){const t=l.$implicit,o=e.oxw();e.Udp("transform","translateX(-"+o.scroll.x+"px)"),e.xp6(3),e.hij(" ",t.display_name||t.name," ")}}function pe(n,l){1&n&&e._UZ(0,"dayview-space",21),2&n&&e.Q6J("space",l.$implicit)}function de(n,l){if(1&n&&(e._UZ(0,"div",22),e.ALo(1,"async")),2&n){const t=l.index,o=e.oxw();let i;e.Udp("width",12*(null==(i=e.lcZ(1,4,o.space_list))?null:i.length)+"rem")("top",4*t+"rem")}}function ge(n,l){1&n&&e._UZ(0,"mat-progress-bar",23)}function me(n,l){if(1&n&&(e._UZ(0,"view-event-details",24),e.ALo(1,"async")),2&n){const t=e.oxw();e.Q6J("event",e.lcZ(1,1,t.event))}}const ue=new Array(24).fill(0).map((n,l)=>(l%12==0?12:l%12)+(l>=12?" PM":" AM"));let fe=(()=>{class n extends d.cx{constructor(t,o){super(),this._org=t,this._state=o,this.blocks=ue,this.scroll={x:0,y:0},this.loading=this._state.loading,this.event=this._state.event,this.spaces=this._org.active_building.pipe((0,$.h)(i=>!!i),(0,S.w)(({id:i})=>(0,Z.vIL)({zone_id:i,limit:1e3}).pipe((0,G.K)(()=>(0,P.of)({data:[]})))),(0,y.U)(({data:i})=>i.map(s=>new F.T({...s,level:this._org.levelWithID(s.zones)}))),(0,R.d)(1)),this.space_list=(0,D.aj)([this.spaces,this._state.zones]).pipe((0,y.U)(([i,s])=>i.filter(r=>!s?.length||r.zones.find(p=>s.includes(p)))||[]))}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}onScroll(t){requestAnimationFrame(()=>this.scroll={x:t.srcElement.scrollLeft,y:t.srcElement.scrollTop})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(x.w7),e.Y36(g.Y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["dayview-timeline"]],features:[e.qOj],decls:19,vars:14,consts:[[1,"absolute","inset-0","flex"],[1,"time","h-full","w-24","overflow-hidden","bg-blue-100/20","dark:bg-neutral-700","relative"],["header","",1,"relative","h-16","z-50"],[1,"bg-blue-100/20","dark:bg-neutral-700","absolute","top-0","left-0","right-0","bottom-8"],["change-transform","","class","relative h-16 border-r border-gray-300 dark:border-neutral-500 z-10",3,"transform",4,"ngFor","ngForOf"],[1,"absolute","h-8","w-px","top-8","right-0","bg-gray-300","dark:bg-neutral-500"],[1,"h-full","flex-1","flex","flex-col","w-1/2"],["header","",1,"flex","relative","overflow-hidden","border-b","border-gray-300","dark:border-neutral-500","border-opacity-50","bg-blue-100/20","dark:bg-neutral-700","h-16","w-full"],["change-transform","","class","relative h-16 w-48 min-w-[12rem]",3,"transform",4,"ngFor","ngForOf"],["content","",1,"relative","flex","flex-1","overflow-auto",3,"scroll"],["scroll_el",""],["class","w-48 min-w-[12rem] h-[96rem] border-r border-gray-300 dark:border-neutral-500",3,"space",4,"ngFor","ngForOf"],["class","absolute bg-gray-300 dark:bg-neutral-500 h-px min-w-full left-0",3,"width","top",4,"ngFor","ngForOf"],["mode","indeterminate","class","absolute bottom-0 left-0 right-0",4,"ngIf"],[3,"event",4,"ngIf"],["change-transform","",1,"relative","h-16","border-r","border-gray-300","dark:border-neutral-500","z-10"],[1,"absolute","text-center","w-full","text-xs","top-0","transform","-translate-y-1/2","opacity-40"],[1,"absolute","h-px","w-2","top-0","right-0","bg-gray-300","dark:bg-neutral-500"],["change-transform","",1,"relative","h-16","w-48","min-w-[12rem]"],["bar","",1,"absolute","h-8","w-px","bottom-0","-left-px","bg-gray-300","dark:bg-neutral-500"],[1,"name","m-2","text-center"],[1,"w-48","min-w-[12rem]","h-[96rem]","border-r","border-gray-300","dark:border-neutral-500",3,"space"],[1,"absolute","bg-gray-300","dark:bg-neutral-500","h-px","min-w-full","left-0"],["mode","indeterminate",1,"absolute","bottom-0","left-0","right-0"],[3,"event"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"div",3),e.qZA(),e.YNc(4,re,4,3,"div",4),e._UZ(5,"div",5),e.qZA(),e.TgZ(6,"div",6)(7,"div",7),e.YNc(8,ce,4,3,"div",8),e.ALo(9,"async"),e.qZA(),e.TgZ(10,"div",9,10),e.NdJ("scroll",function(s){return o.onScroll(s)}),e.YNc(12,pe,1,1,"dayview-space",11),e.ALo(13,"async"),e.YNc(14,de,2,6,"div",12),e.qZA()(),e.YNc(15,ge,1,0,"mat-progress-bar",13),e.ALo(16,"async"),e.YNc(17,me,2,3,"view-event-details",14),e.ALo(18,"async"),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngForOf",o.blocks),e.xp6(4),e.Q6J("ngForOf",e.lcZ(9,6,o.space_list)),e.xp6(4),e.Q6J("ngForOf",e.lcZ(13,8,o.space_list)),e.xp6(2),e.Q6J("ngForOf",o.blocks),e.xp6(1),e.Q6J("ngIf",e.lcZ(16,10,o.loading)),e.xp6(2),e.Q6J("ngIf",e.lcZ(18,12,o.event)))},dependencies:[c.sg,c.O5,V.E,K.pW,ae,c.Ov],styles:["[_nghost-%COMP%]{position:relative;height:100%;width:100%}[change-transform][_ngcontent-%COMP%]{will-change:transform}\n/*# sourceMappingURL=dayview-timeline.component.ts-angular-inline--54.css.map*/"]}),n})();const ve=["app-dayview",""];let he=(()=>{class n{get links(){return this._settings.get("app.general.menu")||[]}constructor(t,o){this._settings=t,this._router=o}ngOnInit(){this.links.find(t=>t.route.includes("day-view"))||this._router.navigate([`/${this.links[0].route}`])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.gb),e.Y36(f.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["","app-dayview",""]],attrs:ve,decls:4,vars:0,consts:[[1,"h-full"],[1,"relative","overflow-hidden","flex","flex-col","flex-1","w-1/2","h-full","bg-gray-200","dark:bg-neutral-600"]],template:function(t,o){1&t&&(e._UZ(0,"sidebar",0),e.TgZ(1,"main",1),e._UZ(2,"dayview-topbar")(3,"dayview-timeline"),e.qZA())},dependencies:[I.k,E,fe],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%}\n/*# sourceMappingURL=day-view.component.ts-angular-inline--52.css.map*/"]}),n})();var _e=a(5533),xe=a(1950),ye=a(6866),we=a(3320),be=a(3910),Ze=a(7672),J=a(9314),Te=a(6361),Ce=a(5845),B=a(312),Ae=a(7486);const ke=["scroll_container"];function Ue(n,l){1&n&&(e.TgZ(0,"div",26),e._uU(1," Today "),e.qZA())}function Oe(n,l){if(1&n&&(e.TgZ(0,"div",27),e._uU(1),e.qZA()),2&n){const t=l.$implicit;e.xp6(1),e.hij(" ",t.display_name||t.name," ")}}function Me(n,l){if(1&n&&(e.TgZ(0,"div",28),e._UZ(1,"div",29),e.TgZ(2,"div",30),e._uU(3),e.qZA()()),2&n){const t=l.$implicit;e.xp6(3),e.AsE(" ",t%12?t%12:"12","",t>=12?"PM":"AM"," ")}}function De(n,l){1&n&&e._UZ(0,"div",31)}function Re(n,l){1&n&&e._UZ(0,"div",32)}function Fe(n,l){if(1&n&&(e.TgZ(0,"div",33),e._UZ(1,"div",34),e.qZA()),2&n){const t=e.oxw();e.Udp("top",t.timeToOffset(t.now)-t.offset_y-(48-t.offset_y%48)+48+"px")}}function Je(n,l){if(1&n&&e._UZ(0,"div",41),2&n){const t=e.oxw().$implicit,o=e.oxw(2);e.Udp("height",o.endToOffset(t.duration+(t.ext("setup")||0)+(t.ext("breakdown")||0))+"px")("top",-(t.ext("setup")||0)/60*48+"px")}}function Be(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",36),e.NdJ("click",function(){const s=e.CHM(t).$implicit,r=e.oxw(2);return e.KtG(r.viewEvent(s))}),e.YNc(1,Je,1,4,"div",37),e.ALo(2,"async"),e.TgZ(3,"div",38),e._UZ(4,"div",39),e.TgZ(5,"p",40),e._uU(6),e.ALo(7,"date"),e.qZA(),e.TgZ(8,"p",40),e._uU(9),e.qZA()()()}if(2&n){const t=l.$implicit,o=e.oxw().index,i=e.oxw();let s;e.Udp("left",14*o+.125+"rem")("top",i.timeToOffset(t.date)+"px")("height",i.endToOffset(t.duration)+"px"),e.xp6(1),e.Q6J("ngIf",(null==(s=e.lcZ(2,20,i.ui_options))?null:s.show_overflow)&&(t.ext("setup")||t.ext("breakdown"))&&i.endToOffset(t.duration+(t.ext("setup")||0)+(t.ext("breakdown")||0))),e.xp6(2),e.ekj("opacity-60","done"===t.state),e.xp6(1),e.ekj("bg-pink-600","cancelled"!==t.status)("bg-red-600","cancelled"===t.status),e.xp6(1),e.ekj("opacity-60","cancelled"===t.status),e.xp6(1),e.AsE(" ",e.xi3(7,22,t.date,"shortTime")," \u2013 ",(null==t.organiser?null:t.organiser.name)||t.hjost," "),e.xp6(2),e.ekj("opacity-60","cancelled"===t.status),e.xp6(1),e.hij(" ",t.title," ")}}const Ne=function(){return[]};function Ye(n,l){if(1&n&&(e.ynx(0),e.YNc(1,Be,10,25,"div",35),e.ALo(2,"async"),e.BQk()),2&n){const t=l.$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,o.events)[t.id]||e.DdM(3,Ne))}}let Ie=(()=>{class n extends d.cx{get now(){return(0,Te.Z)(Date.now()).valueOf()}get is_today(){return(0,Ce.Z)(this.date,Date.now())}constructor(t,o){super(),this._state=t,this._dialog=o,this.date=Date.now(),this.offset_x=0,this.offset_y=0,this.w_slots=[],this.h_slots=[],this.hours=Array.from({length:24},(i,s)=>s),this.ui_options=this._state.options,this.spaces=this._state.spaces,this.events=(0,D.aj)([this._state.spaces,this._state.filtered]).pipe((0,y.U)(([i,s])=>{const r={};for(const p of i)r[p.id]=s.filter(u=>u.resources.find(N=>N.id===p.id||N.email===p.email));return r}),(0,R.d)(1)),this.edit=i=>this._state.newBooking(i),this.resetDate=()=>{this.date=Date.now(),this._state.setDate(this.date)},this.previousDate=()=>{this.date=(0,B.Z)(this.date,-1).valueOf(),this._state.setDate(this.date)},this.nextDate=()=>{this.date=(0,B.Z)(this.date,1).valueOf(),this._state.setDate(this.date)}}ngOnInit(){this.subscription("poll",this._state.startPolling());const t=Date.now();console.log("Date Offset:",this.timeToOffset(t),new Date,(0,A.Z)(t,(0,C.Z)(t))),this.onResize()}timeToOffset(t){return(0,A.Z)(t,(0,C.Z)(t))/60*48}endToOffset(t){return t/60*48}onResize(){const t=Math.floor(window.innerWidth/224)+1,o=Math.floor(window.innerHeight/48);this.w_slots=Array.from({length:t},(i,s)=>s),this.h_slots=Array.from({length:o},(i,s)=>s)}onScroll(){this.offset_x=this._scroll_container.nativeElement.scrollLeft,this.offset_y=this._scroll_container.nativeElement.scrollTop}viewEvent(t){const o=this._dialog.open(k.$o,{data:t});this.subscription("edit",o.componentInstance.edit.subscribe(()=>this.edit(t))),this.subscription("remove",o.componentInstance.remove.subscribe(()=>this.remove(t))),this.subscription("actions",o.componentInstance.action.subscribe(i=>{i.includes("breakdown")&&this._dialog.open(k.R2,{data:t})}))}remove(t){var o=this;return(0,h.Z)(function*(){const i=`${(0,T.Z)(t.date,"dd MMM yyyy h:mma")}`,r=`Delete the booking for ${t.space?.display_name} at ${i}`,p=yield(0,d._5)({title:"Delete booking",content:r,icon:{content:"delete"}},o._dialog);"done"===p.reason&&(p.loading("Requesting booking deletion..."),yield(0,k.XF)(t.id).toPromise().catch(u=>{throw(0,d.cB)(`Unable to delete booking. ${u}`),p.close(),u}),(0,d.t5)("Successfully deleted booking."),o._dialog.closeAll())})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.Y),e.Y36(Ae.uw))},n.\u0275cmp=e.Xpm({type:n,selectors:[["room-bookings-timeline"]],viewQuery:function(t,o){if(1&t&&e.Gf(ke,7),2&t){let i;e.iGM(i=e.CRH())&&(o._scroll_container=i.first)}},features:[e.qOj],decls:39,vars:35,consts:[[1,"relative","flex","items-center","justify-center","p-2","space-x-2","border-b","border-gray-200"],[1,"text-2xl"],[3,"dblclick"],["btn","","icon","","matRipple","",3,"click"],["class","absolute top-1/2 -translate-y-1/2 left-4 text-blue-500 text-sm",4,"ngIf"],[1,"flex","flex-col","w-full","flex-1","overflow-hidden",3,"resize"],["header","",1,"flex","items-center","w-full","h-16"],["times","",1,"w-16","h-full","flex","flex-col","items-center","justify-end","text-xs","pb-2","opacity-60"],["spaces","",1,"relative","flex-1","h-full","overflow-hidden","border-r","border-gray-200"],[1,"flex","absolute","inset-y-0"],["class","flex flex-col items-center justify-center h-full w-56",4,"ngFor","ngForOf"],["content","",1,"flex","w-full","flex-1","h-px"],["times","",1,"relative","w-16","h-full","overflow-y-hidden","overflow-x-visible","border-r","border-gray-200"],[1,"absolute","inset-x-0"],["class","relative block h-12",4,"ngFor","ngForOf"],[1,"absolute","bg-primary","right-0","translate-x-1/2","-translate-y-1/2","h-2","w-2","rounded-full","z-30"],["spaces","",1,"relative","flex-1","h-full","overflow-hidden","w-px"],[1,"absolute","top-0","flex","h-full","pointer-events-none"],["class","w-56 h-full border-r border-gray-200",4,"ngFor","ngForOf"],[1,"absolute","left-0","w-full","pointer-events-none"],["class","h-12 w-full border-t border-gray-200",4,"ngFor","ngForOf"],["class","absolute inset-x-0 -translate-y-px h-0.5 bg-primary z-30",3,"top",4,"ngIf"],[1,"relative","w-full","h-full","overflow-auto","z-10",3,"scroll"],["scroll_container",""],[1,"overflow-hidden","relative"],[4,"ngFor","ngForOf"],[1,"absolute","top-1/2","-translate-y-1/2","left-4","text-blue-500","text-sm"],[1,"flex","flex-col","items-center","justify-center","h-full","w-56"],[1,"relative","block","h-12"],[1,"absolute","top-0","right-0","w-2","h-px","bg-gray-200"],[1,"absolute","top-0","right-3","-translate-y-1/2","text-xs","opacity-60"],[1,"w-56","h-full","border-r","border-gray-200"],[1,"h-12","w-full","border-t","border-gray-200"],[1,"absolute","inset-x-0","-translate-y-px","h-0.5","bg-primary","z-30"],[1,"absolute","bg-primary","top-1/2","left-0","-translate-x-1/2","-translate-y-1/2","h-2","w-2","rounded-full"],["event","","class","absolute w-[13.625rem] hover:opacity-90",3,"left","top","height","click",4,"ngFor","ngForOf"],["event","",1,"absolute","w-[13.625rem]","hover:opacity-90",3,"click"],["class","absolute bg-pink-600/50 border border-pink-600 rounded-lg w-full",3,"height","top",4,"ngIf"],[1,"relative","w-full","h-full","shadow","bg-gray-100","hover:bg-gray-200","rounded-lg","overflow-hidden","px-3","py-1","text-xs"],[1,"absolute","left-0","inset-y-0","w-1"],[1,"truncate"],[1,"absolute","bg-pink-600/50","border","border-pink-600","rounded-lg","w-full"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"app-icon",1),e._uU(2,"event"),e.qZA(),e.TgZ(3,"h3",2),e.NdJ("dblclick",function(){return o.resetDate()}),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"button",3),e.NdJ("click",function(){return o.previousDate()}),e.TgZ(7,"app-icon"),e._uU(8,"chevron_left"),e.qZA()(),e.TgZ(9,"button",3),e.NdJ("click",function(){return o.nextDate()}),e.TgZ(10,"app-icon"),e._uU(11,"chevron_right"),e.qZA()(),e.YNc(12,Ue,2,0,"div",4),e.qZA(),e.TgZ(13,"div",5),e.NdJ("resize",function(){return o.onResize()},!1,e.Jf7),e.TgZ(14,"div",6)(15,"div",7),e._uU(16),e.ALo(17,"date"),e.qZA(),e.TgZ(18,"div",8)(19,"div",9),e.YNc(20,Oe,2,1,"div",10),e.ALo(21,"async"),e.qZA()()(),e.TgZ(22,"div",11)(23,"div",12)(24,"div",13),e.YNc(25,Me,4,2,"div",14),e._UZ(26,"div",15),e.qZA()(),e.TgZ(27,"div",16)(28,"div",17),e.YNc(29,De,1,0,"div",18),e.qZA(),e.TgZ(30,"div",19),e.YNc(31,Re,1,0,"div",20),e.YNc(32,Fe,2,2,"div",21),e.qZA(),e.TgZ(33,"div",22,23),e.NdJ("scroll",function(){return o.onScroll()}),e.TgZ(35,"div",24),e.ALo(36,"async"),e.YNc(37,Ye,3,4,"ng-container",25),e.ALo(38,"async"),e.qZA()()()()()),2&t){let i;e.xp6(4),e.hij(" ",e.xi3(5,23,o.date,"mediumDate")," "),e.xp6(8),e.Q6J("ngIf",o.is_today),e.xp6(4),e.hij(" ",e.xi3(17,26,o.date,"z")," "),e.xp6(3),e.Udp("left",-o.offset_x+"px"),e.xp6(1),e.Q6J("ngForOf",e.lcZ(21,29,o.spaces)),e.xp6(4),e.Udp("top",-o.offset_y+"px"),e.xp6(1),e.Q6J("ngForOf",o.hours),e.xp6(1),e.Udp("top",o.timeToOffset(o.now)+"px"),e.xp6(2),e.Udp("left",-o.offset_x%224+"px"),e.xp6(1),e.Q6J("ngForOf",o.w_slots),e.xp6(1),e.Udp("top",-o.offset_y%48+"px"),e.xp6(1),e.Q6J("ngForOf",o.h_slots),e.xp6(1),e.Q6J("ngIf",o.is_today),e.xp6(3),e.Udp("height","72rem")("width",14*(null==(i=e.lcZ(36,31,o.spaces))?null:i.length)+"rem"),e.xp6(2),e.Q6J("ngForOf",e.lcZ(38,33,o.spaces))}},dependencies:[c.sg,c.O5,m.wG,_.o,c.Ov,c.uU],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}\n/*# sourceMappingURL=room-timeline.component.ts-angular-inline--69.css.map*/"]}),n})();var Qe=a(5312),Le=a(6198);function qe(n,l){1&n&&(e.TgZ(0,"div",10),e._UZ(1,"img",11),e.TgZ(2,"p"),e._uU(3,"No pending requests"),e.qZA()())}function je(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",12)(1,"h3"),e._uU(2),e.qZA(),e.TgZ(3,"p",13),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"div",14),e._UZ(7,"img",15),e.ALo(8,"async"),e.ALo(9,"space"),e.qZA(),e.TgZ(10,"div",16)(11,"div",17)(12,"app-icon",18),e._uU(13,"place"),e.qZA()(),e.TgZ(14,"div",19),e._uU(15),e.ALo(16,"async"),e.ALo(17,"space"),e.ALo(18,"async"),e.ALo(19,"space"),e.qZA()(),e.TgZ(20,"div",16)(21,"div",17)(22,"app-icon",18),e._uU(23,"person"),e.qZA()(),e.TgZ(24,"div",19),e._uU(25),e.qZA()(),e.TgZ(26,"div",20)(27,"button",21),e.NdJ("click",function(){const s=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.approve(s))}),e.TgZ(28,"div"),e._uU(29),e.qZA(),e.TgZ(30,"app-icon",22),e._uU(31,"done"),e.qZA()(),e.TgZ(32,"button",23),e.NdJ("click",function(){const s=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.reject(s))}),e.TgZ(33,"div"),e._uU(34),e.qZA(),e.TgZ(35,"app-icon",24),e._uU(36,"close"),e.qZA()()()()}if(2&n){const t=l.$implicit,o=e.oxw();let i,s;e.xp6(2),e.Oqu(t.title),e.xp6(2),e.hij(" ",e.xi3(5,9,t.date,"medium")," "),e.xp6(3),e.Q6J("src",null==(i=e.lcZ(8,12,e.lcZ(9,14,t.resources[0].email)))?null:i.images[0],e.LSH),e.xp6(8),e.hij(" ",(null==(s=e.lcZ(16,16,e.lcZ(17,18,t.resources[0].email)))?null:s.display_name)||(null==(s=e.lcZ(18,20,e.lcZ(19,22,t.resources[0].email)))?null:s.name)||"No Location"," "),e.xp6(10),e.hij(" ",(null==t.organiser?null:t.organiser.name)||t.host," "),e.xp6(2),e.Q6J("disabled","accept"===o.status[t.id]),e.xp6(2),e.hij(" ","accept"===o.status[t.id]?"Approved":"Approve"," "),e.xp6(3),e.Q6J("disabled","decline"===o.status[t.id]),e.xp6(2),e.hij(" ","decline"===o.status[t.id]?"Declined":"Decline"," ")}}function ze(n,l){1&n&&(e.TgZ(0,"div",25),e._UZ(1,"mat-spinner",26),e.TgZ(2,"p"),e._uU(3,"Processing..."),e.qZA()())}function Ee(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.show=!i.show)}),e.TgZ(1,"app-icon"),e._uU(2,"chevron_left"),e.qZA()()}}let Pe=(()=>{class n{constructor(t,o){this._state=t,this._org=o,this.show=!0,this.loading=!1,this.status={},this.pending=this._state.pending}approve(t){var o=this;return(0,h.Z)(function*(){const i=o._org.binding("approvals");if(!i)return;const s=(0,Z.rTZ)(i,"RoomBookingApproval",1);s&&(o.loading=!0,yield s.execute("accept_event",[t.mailbox,t.id]).catch(),o.loading=!1,o.status[t.id]="accept")})()}reject(t){var o=this;return(0,h.Z)(function*(){const i=o._org.binding("approvals");if(!i)return;const s=(0,Z.rTZ)(i,"RoomBookingApproval",1);s&&(o.loading=!0,yield s.execute("decline_event",[t.mailbox,t.id]).catch(),o.loading=!1,o.status[t.id]="decline")})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.Y),e.Y36(x.w7))},n.\u0275cmp=e.Xpm({type:n,selectors:[["room-bookings-approvals"]],decls:18,vars:13,consts:[[1,"flex","flex-col","h-full","overflow-hidden","border-l","border-gray-200"],[1,"flex","items-center","p-2","border-b","border-gray-200","space-x-2"],["btn","","icon","","matRipple","",1,"bg-gray-200",3,"click"],[1,"flex-1"],["btn","","icon","","matRipple",""],[1,"flex-1","overflow-auto","p-2","space-y-2"],["class","w-full h-full flex flex-col items-center justify-center space-y-2",4,"ngIf"],["class","relative border border-gray-200 p-2 w-full rounded",4,"ngFor","ngForOf"],["class","absolute bottom-0 left-0 right-0 top-14 p-2 flex flex-col items-center justify-center bg-white/80 space-y-2",4,"ngIf"],["btn","","icon","","matRipple","","class","bg-pending absolute top-2 -left-8 shadow text-white",3,"click",4,"ngIf"],[1,"w-full","h-full","flex","flex-col","items-center","justify-center","space-y-2"],["src","assets/icons/no-pending.svg"],[1,"relative","border","border-gray-200","p-2","w-full","rounded"],[1,"opacity-30","text-xs","mb-2"],[1,"w-64","h-32","overflow-hidden","mb-2"],[1,"object-cover","min-w-full","min-h-full",3,"src"],[1,"flex","items-center","space-x-2","mb-2"],[1,"h-8","w-8","bg-gray-100","rounded-full","flex","items-center","justify-center"],[1,"text-xl"],[1,"flex-1","text-xs"],[1,"flex","items-center","space-x-2"],["btn","","matRipple","",1,"border-green-600","bg-green-600/30","flex","items-center","space-x-2","text-black",3,"disabled","click"],[1,"text-green-600"],["btn","","matRipple","",1,"border-red-600","bg-red-600/30","flex","items-center","space-x-2","text-black",3,"disabled","click"],[1,"text-red-600"],[1,"absolute","bottom-0","left-0","right-0","top-14","p-2","flex","flex-col","items-center","justify-center","bg-white/80","space-y-2"],["diameter","32"],["btn","","icon","","matRipple","",1,"bg-pending","absolute","top-2","-left-8","shadow","text-white",3,"click"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return o.show=!o.show}),e.TgZ(3,"app-icon"),e._uU(4,"chevron_right"),e.qZA()(),e.TgZ(5,"h3",3),e._uU(6),e.ALo(7,"async"),e.qZA(),e.TgZ(8,"button",4)(9,"app-icon"),e._uU(10,"search"),e.qZA()()(),e.TgZ(11,"div",5),e.YNc(12,qe,4,0,"div",6),e.ALo(13,"async"),e.YNc(14,je,37,24,"div",7),e.ALo(15,"async"),e.qZA(),e.YNc(16,ze,4,0,"div",8),e.qZA(),e.YNc(17,Ee,3,0,"button",9)),2&t){let i,s;e.Udp("width",o.show?"":"0px"),e.xp6(6),e.hij(" Pending Approval (",(null==(i=e.lcZ(7,7,o.pending))?null:i.length)||"0",") "),e.xp6(6),e.Q6J("ngIf",!(null!=(s=e.lcZ(13,9,o.pending))&&s.length)),e.xp6(2),e.Q6J("ngForOf",e.lcZ(15,11,o.pending)),e.xp6(2),e.Q6J("ngIf",o.loading),e.xp6(1),e.Q6J("ngIf",!o.show)}},dependencies:[c.sg,c.O5,Qe.Ou,m.wG,_.o,c.Ov,c.uU,Le.X],styles:["[_nghost-%COMP%]{display:block;position:relative;height:100%}\n/*# sourceMappingURL=room-approvals.component.ts-angular-inline--70.css.map*/"]}),n})();function $e(n,l){if(1&n&&(e.TgZ(0,"mat-option",22),e._uU(1),e.qZA()),2&n){const t=l.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.display_name||t.name," ")}}function Se(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"mat-checkbox",23),e.NdJ("ngModelChange",function(i){const r=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.setFilter(r.id,!i))}),e._uU(1),e.qZA()}if(2&n){const t=l.$implicit,o=e.oxw();e.Q6J("ngModel",!o.type_list.includes(t.id)),e.xp6(1),e.hij(" ",t.name," ")}}function Ge(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",25),e._UZ(1,"div",26),e.TgZ(2,"div"),e._uU(3),e.qZA(),e.TgZ(4,"button",27),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,s=e.oxw();return e.KtG(s.setFilter(i.id,!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}if(2&n){const t=e.oxw().$implicit;e.xp6(1),e.Udp("background-color",t.color),e.xp6(2),e.Oqu(t.name)}}function Ve(n,l){if(1&n&&(e.ynx(0),e.YNc(1,Ge,7,3,"div",24),e.BQk()),2&n){const t=l.$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngIf",!o.type_list.includes(t.id))}}function Ke(n,l){1&n&&e._UZ(0,"room-bookings-approvals")}const Xe=[];let He=(()=>{class n extends d.cx{get type_list(){return this._state.filters.hide_type||Xe}get has_approvals(){return this._org.binding("approvals")}constructor(t,o,i,s){super(),this._org=t,this._state=o,this._router=i,this._route=s,this.zones=this._state.zones,this.ui_options=this._state.options,this.levels=this._org.active_levels,this.updateZones=r=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:r.join(",")}}),this._state.setZones(r)},this.updateUIOptions=r=>this._state.setUIOptions(r),this.newBooking=r=>this._state.newBooking(r),this.types=[{id:"internal",name:"Internal",color:"#D81B60"},{id:"external",name:"External",color:"#1E88E5"},{id:"cancelled",name:"Cancelled",color:"#eeeeee"}]}ngOnInit(){var t=this;this.subscription("route.query",this._route.queryParamMap.subscribe(o=>{if(o.has("zone_ids")){const i=o.get("zone_ids").split(",");if(i.length){const s=this._org.levelWithID(i);if(!s)return;this._org.building=this._org.buildings.find(r=>r.id===s.parent_id)}}})),this.subscription("levels",this._org.active_levels.subscribe(function(){var o=(0,h.Z)(function*(i){const s=(yield t.zones.pipe((0,be.q)(1)).toPromise()).filter(r=>i.find(p=>p.id===r));!s.length&&i.length&&s.push(i[0].id),t.updateZones(s)});return function(i){return o.apply(this,arguments)}}()))}setFilter(t,o){let s=this._state.filters.hide_type||[];s=s.filter(r=>r!==t),o&&s.push(t),this._state.setFilters({hide_type:s})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(x.w7),e.Y36(g.Y),e.Y36(f.F0),e.Y36(f.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["room-bookings"]],features:[e.qOj],decls:35,vars:13,consts:[[1,"absolute","inset-0","flex","flex-col","overflow-hidden","pl-8"],[1,"flex","items-center","justify-between","w-full","py-4","pr-8"],[1,"text-2xl","font-medium"],["btn","","matRipple","",1,"space-x-2",3,"click"],[1,"w-full","flex","items-center"],["appearance","outline",1,"h-[3.5rem]"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"border-l","h-full","ml-8","mr-4"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[1,"flex","items-center","space-x-2"],["btn","","matRipple","",1,"inverse",3,"matMenuTriggerFor"],[1,"mx-2"],[1,""],["menu","matMenu"],[1,"flex","flex-col","space-y-2","overflow-hidden","w-48"],[3,"ngModel","ngModelChange",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"flex","w-full","flex-1","h-px","border-t","mt-4","border-gray-200"],[1,"flex-1"],[4,"ngIf"],[3,"value"],[3,"ngModel","ngModelChange"],["class","flex items-center border border-gray-200 rounded-3xl",4,"ngIf"],[1,"flex","items-center","border","border-gray-200","rounded-3xl"],[1,"h-4","w-4","m-2","rounded-full"],["icon","","matRipple","",3,"click"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),e._uU(3,"Room Bookings"),e.qZA(),e.TgZ(4,"button",3),e.NdJ("click",function(){return o.newBooking()}),e.TgZ(5,"div"),e._uU(6,"New Booking"),e.qZA(),e.TgZ(7,"app-icon"),e._uU(8,"add"),e.qZA()()(),e.TgZ(9,"div",4)(10,"mat-form-field",5)(11,"mat-select",6),e.NdJ("ngModelChange",function(s){return o.updateZones(s)}),e.ALo(12,"async"),e.YNc(13,$e,2,2,"mat-option",7),e.ALo(14,"async"),e.qZA()(),e._UZ(15,"div",8),e.TgZ(16,"mat-slide-toggle",9),e.NdJ("ngModelChange",function(s){return o.updateUIOptions({show_overflow:s})}),e.ALo(17,"async"),e.TgZ(18,"div",10),e._uU(19,"Setup / Breakdown"),e.qZA()(),e._UZ(20,"div",8),e.TgZ(21,"div",11)(22,"button",12)(23,"app-icon"),e._uU(24,"filter_list"),e.qZA(),e.TgZ(25,"div",13),e._uU(26,"Filters"),e.qZA()(),e.TgZ(27,"mat-menu",14,15)(29,"div",16),e.YNc(30,Se,2,2,"mat-checkbox",17),e.qZA()(),e.YNc(31,Ve,2,1,"ng-container",18),e.qZA()(),e.TgZ(32,"div",19),e._UZ(33,"room-bookings-timeline",20),e.YNc(34,Ke,1,0,"room-bookings-approvals",21),e.qZA()()),2&t){const i=e.MAs(28);let s;e.xp6(11),e.Q6J("ngModel",e.lcZ(12,7,o.zones)),e.xp6(2),e.Q6J("ngForOf",e.lcZ(14,9,o.levels)),e.xp6(3),e.Q6J("ngModel",null==(s=e.lcZ(17,11,o.ui_options))?null:s.show_overflow),e.xp6(6),e.Q6J("matMenuTriggerFor",i),e.xp6(8),e.Q6J("ngForOf",o.types),e.xp6(1),e.Q6J("ngForOf",o.types),e.xp6(3),e.Q6J("ngIf",o.has_approvals)}},dependencies:[c.sg,c.O5,v.JJ,v.On,O.KE,b.gD,m.ey,Ze.oG,M.Rr,J.VK,J.p6,m.wG,_.o,Ie,Pe,c.Ov]}),n})();const We=["app-new-dayview",""],et=[{path:"",component:he},{path:"new",component:(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["","app-new-dayview",""]],attrs:We,decls:5,vars:0,consts:[[1,"flex","flex-1","h-px"],[1,"relative","flex","flex-col","flex-1","w-1/2","h-full"]],template:function(t,o){1&t&&(e._UZ(0,"app-topbar"),e.TgZ(1,"div",0),e._UZ(2,"app-sidebar"),e.TgZ(3,"main",1),e._UZ(4,"room-bookings"),e.qZA()())},dependencies:[ye.O,we.u,He],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:#fff}\n/*# sourceMappingURL=new-dayview.component.ts-angular-inline--71.css.map*/"]}),n})()}];let tt=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,v.u5,Y.v,F.YR,_e.PP,xe.uy,f.Bz.forChild(et)]}),n})()}}]);
//# sourceMappingURL=apps_concierge_src_app_day-view_day-view_module_ts.js.map