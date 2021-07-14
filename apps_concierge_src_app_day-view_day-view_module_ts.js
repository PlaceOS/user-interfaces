(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([["apps_concierge_src_app_day-view_day-view_module_ts"],{6726:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DayViewModule:()=>te});var i=n(1511),o=n(6073),s=n(6898),l=n(787),a=n(2619),r=n(1490),c=n(4762),d=n(3530),g=n(8223),p=n(7731),h=n(9294),u=n(5980),f=n(1548),v=n(6283),m=n(4786),_=n(7521),w=n(1521),Z=n(1522);function x(e,t){if(1&e&&(a.TgZ(0,"mat-option",12),a._uU(1),a.qZA()),2&e){const e=t.$implicit;a.Q6J("value",e.id),a.xp6(1),a.hij(" ",e.display_name||e.name," ")}}function b(e,t){if(1&e&&(a.TgZ(0,"mat-option",12),a._uU(1),a.qZA()),2&e){const e=t.$implicit;a.Q6J("value",e.id),a.xp6(1),a.hij(" ",e.name," ")}}const y=function(){return{class:"material-icons",content:"add"}};let A=(()=>{class e extends g.KG{constructor(e,t,n,i){super(),this._state=e,this._org=t,this._route=n,this._router=i,this.zones=[],this.types=[{id:"internal",name:"Internal"},{id:"external",name:"External"},{id:"cancelled",name:"Cancelled"}],this.type_list=this.types.map(e=>`${e.id}`),this.levels=this._org.active_levels,this.ui_options=this._state.options,this.setDate=e=>this._state.setDate(e),this.newBooking=e=>this._state.newBooking(e),this.updateZones=e=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:e.join(",")}}),this._state.setZones(e)},this.updateTypes=e=>this._state.setFilters({hide_type:this.types.reduce((t,n)=>(!e.includes(n.id)&&t.push(n),t),[])})}updateUIOptions(e){this._state.setUIOptions(e)}ngOnInit(){return(0,c.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,d.P)(e=>e)).toPromise(),this.subscription("route.query",this._route.queryParamMap.subscribe(e=>{if(e.has("zone_ids")){const t=e.get("zone_ids").split(",");if(t.length){this.zones=t;const e=this._org.levelWithID(t);if(!e)return;this._org.building=this._org.buildings.find(t=>t.id===e.parent_id)}}})),this.subscription("levels",this._org.active_levels.subscribe(e=>{this.zones=this.zones.filter(t=>e.find(e=>e.id===t)),!this.zones.length&&e.length&&this.zones.push(e[0].id),this.updateZones(this.zones)})),this.updateTypes(this.type_list)})}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(p.Y),a.Y36(h.w7),a.Y36(s.gz),a.Y36(s.F0))},e.\u0275cmp=a.Xpm({type:e,selectors:[["dayview-topbar"]],features:[a.qOj],decls:24,vars:14,consts:[["mat-button","","new","",1,"w-12","xl:w-auto",3,"click"],[1,"flex","items-center"],[1,"mr-2",3,"icon"],[1,"hidden","lg:block"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["multiple","","placeholder","No Events",3,"ngModel","ngModelChange"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[1,"flex-1","w-0"],[3,"dateChange"],[3,"value"]],template:function(e,t){if(1&e&&(a.TgZ(0,"button",0),a.NdJ("click",function(){return t.newBooking()}),a.TgZ(1,"div",1),a._UZ(2,"app-icon",2),a.TgZ(3,"div",3),a._uU(4,"New Booking"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(5,"mat-form-field",4),a.TgZ(6,"mat-select",5),a.NdJ("ngModelChange",function(e){return t.zones=e})("ngModelChange",function(e){return t.updateZones(e)}),a.YNc(7,x,2,2,"mat-option",6),a.ALo(8,"async"),a.qZA(),a.qZA(),a.TgZ(9,"mat-form-field",4),a.TgZ(10,"mat-select",7),a.NdJ("ngModelChange",function(e){return t.type_list=e})("ngModelChange",function(e){return t.updateTypes(e)}),a.TgZ(11,"mat-select-trigger"),a._uU(12,"Legend"),a.qZA(),a.YNc(13,b,2,2,"mat-option",6),a.qZA(),a.qZA(),a.TgZ(14,"mat-slide-toggle",8),a.NdJ("ngModelChange",function(e){return t.updateUIOptions({show_overflow:e})}),a.ALo(15,"async"),a.TgZ(16,"div",9),a._uU(17,"Setup / Breakdown"),a.qZA(),a.qZA(),a.TgZ(18,"mat-slide-toggle",8),a.NdJ("ngModelChange",function(e){return t.updateUIOptions({show_cleaning:e})}),a.ALo(19,"async"),a.TgZ(20,"div",9),a._uU(21,"Cleaners View"),a.qZA(),a.qZA(),a._UZ(22,"div",10),a.TgZ(23,"date-options",11),a.NdJ("dateChange",function(e){return t.setDate(e)}),a.qZA()),2&e){let e,n;a.xp6(2),a.Q6J("icon",a.DdM(13,y)),a.xp6(4),a.Q6J("ngModel",t.zones),a.xp6(1),a.Q6J("ngForOf",a.lcZ(8,7,t.levels)),a.xp6(3),a.Q6J("ngModel",t.type_list),a.xp6(3),a.Q6J("ngForOf",t.types),a.xp6(1),a.Q6J("ngModel",null==(e=a.lcZ(15,9,t.ui_options))?null:e.show_overflow),a.xp6(4),a.Q6J("ngModel",null==(n=a.lcZ(19,11,t.ui_options))?null:n.show_cleaning)}},directives:[u.lW,f.o,v.KE,m.gD,o.JJ,o.On,i.sg,m.$L,_.Rr,w.E,Z.ey],pipes:[i.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em}button[_ngcontent-%COMP%]{min-width:0;padding:0 .85rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em;margin-left:1em}mat-slide-toggle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:5.5em;white-space:normal;line-height:1.2em}"]}),e})();var O=n(3080),T=n(9996),q=n(7209),U=n(4441),M=n(804),C=n(205),J=n(3779);function k(e,t){if(1&e&&a._UZ(0,"div"),2&e){const e=a.oxw();a.Tol("overflow-block absolute rounded overflow-hidden w-full "+e.type),a.Udp("top",100*e.overflow_top+"%")("height",100*e.overflow_height+"%")}}function Y(e,t){if(1&e&&(a.TgZ(0,"div",6),a.TgZ(1,"app-icon",7),a._uU(2,"title"),a.qZA(),a._uU(3),a.qZA()),2&e){const e=a.oxw(2);a.xp6(3),a.hij(" ",e.event.title," ")}}function P(e,t){if(1&e&&(a.TgZ(0,"div",6),a.TgZ(1,"app-icon",7),a._uU(2,"schedule"),a.qZA(),a._uU(3),a.qZA()),2&e){const e=a.oxw(2);a.xp6(3),a.hij(" ",e.time," ")}}function N(e,t){if(1&e&&(a.TgZ(0,"div",6),a.TgZ(1,"app-icon",7),a._uU(2,"people"),a.qZA(),a._uU(3),a.qZA()),2&e){const e=a.oxw(2);a.xp6(3),a.AsE(" ",e.event.attendees.length," Attendee",1===e.event.attendees.length?"":"s"," ")}}function Q(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"div",3),a.NdJ("click",function(){a.CHM(e);const t=a.oxw();return t.view(t.event)}),a.TgZ(1,"div",4),a._uU(2),a.qZA(),a.YNc(3,Y,4,1,"div",5),a.YNc(4,P,4,1,"div",5),a.YNc(5,N,4,2,"div",5),a.qZA()}if(2&e){const e=a.oxw();a.Tol("absolute rounded overflow-hidden text-sm border border-gray-200 shadow-sm "+e.type),a.Udp("top",100*e.top+"%")("height",100*e.height+"%"),a.xp6(2),a.Oqu(null==e.event.organiser?null:e.event.organiser.name),a.xp6(1),a.Q6J("ngIf",e.event.duration>30),a.xp6(1),a.Q6J("ngIf",e.event.duration>60),a.xp6(1),a.Q6J("ngIf",e.event.duration>90)}}function z(e,t){if(1&e&&(a.TgZ(0,"div",8),a.TgZ(1,"div"),a.TgZ(2,"app-icon"),a._uU(3),a.qZA(),a.qZA(),a.TgZ(4,"div",9),a._uU(5),a.qZA(),a.qZA()),2&e){const e=a.oxw();a.Udp("top",100*e.overflow_top+"%")("height",100*e.overflow_height+"%"),a.xp6(1),a.Tol("icon flex mr-2 text-3xl rounded "+e.event.cleaning_status),a.xp6(2),a.Oqu("done"===e.event.cleaning_status?"done":"warning"),a.xp6(2),a.AsE(" ","done"===e.event.cleaning_status?"Finished":"Scheduled to"," clean at ",e.event.cleaning_time," ")}}let F=(()=>{class e{constructor(e){this._state=e,this.top=-999,this.height=0,this.overflow_top=-999,this.overflow_height=0,this.ui_options=this._state.options,this.view=e=>this._state.setEvent(e)}get time(){const e=new Date(this.event.date);return(0,U.Z)(e,"h:mm a")+" - "+(0,U.Z)((0,M.Z)(e,this.event.duration),"h:mm a")}get type(){return this.event.guests.length?"external":"declined"===this.event.status?"cancelled":"internal"}ngOnChanges(e){if(e.event&&this.event){const e=(0,C.Z)(new Date(this.event.date)),t=(0,J.Z)(new Date(this.event.date),e);this.top=t/1440,this.height=this.event.duration/1440,this.overflow_top=(t-this.event.ext("setup"))/1440,this.overflow_height=(this.event.duration+this.event.ext("setup")+this.event.ext("breakdown"))/1440}}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(p.Y))},e.\u0275cmp=a.Xpm({type:e,selectors:[["dayview-event"]],inputs:{event:"event"},features:[a.TTD],decls:5,vars:7,consts:[[3,"class","top","height",4,"ngIf"],["name","event","matRipple","",3,"class","top","height","click",4,"ngIf"],["class","catering-block absolute rounded overflow-hidden flex w-full shadow p-2",3,"top","height",4,"ngIf"],["name","event","matRipple","",3,"click"],[1,"px-2","py-1","font-medium"],["class","py-1 flex items-center",4,"ngIf"],[1,"py-1","flex","items-center"],[1,"mx-2"],[1,"catering-block","absolute","rounded","overflow-hidden","flex","w-full","shadow","p-2"],[1,"text"]],template:function(e,t){if(1&e&&(a.YNc(0,k,1,6,"div",0),a.ALo(1,"async"),a.YNc(2,Q,6,10,"div",1),a.YNc(3,z,6,9,"div",2),a.ALo(4,"async")),2&e){let e,n;a.Q6J("ngIf",null==(e=a.lcZ(1,3,t.ui_options))?null:e.show_overflow),a.xp6(2),a.Q6J("ngIf",t.event),a.xp6(1),a.Q6J("ngIf",null==(n=a.lcZ(4,5,t.ui_options))?null:n.show_cleaning)}},directives:[i.O5,Z.wG,f.o],pipes:[i.Ov],styles:["[name=event][_ngcontent-%COMP%]{background-color:#ccc;width:12rem;z-index:100;transition:box-shadow .2s}[name=event][_ngcontent-%COMP%]:hover{box-shadow:0 1px 3px 1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)!important;cursor:pointer;z-index:999}.overflow-block[_ngcontent-%COMP%]{opacity:.3;width:12rem}.catering-block[_ngcontent-%COMP%]{background-color:#fff;width:12rem;z-index:999}.internal[_ngcontent-%COMP%]{background-color:#1565c0;color:#fff}.icon[_ngcontent-%COMP%]{height:1.5em;width:1.5em;color:#ffbf1f;background-color:#f0f0f0}.icon.done[_ngcontent-%COMP%]{color:#21a453}.external[_ngcontent-%COMP%]{background-color:#ad1457;color:#fff}.cancelled[_ngcontent-%COMP%]{background-color:#ccc}"]}),e})();function I(e,t){1&e&&a._UZ(0,"dayview-event",1),2&e&&a.Q6J("event",t.$implicit)}let L=(()=>{class e{constructor(e){this._state=e,this.events=this._state.filtered.pipe((0,T.U)(e=>e.filter(e=>e.resources.find(e=>this.space.email===e.email))))}ngOnInit(){this._state.filtered.subscribe(e=>{})}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(p.Y))},e.\u0275cmp=a.Xpm({type:e,selectors:[["dayview-space"]],inputs:{space:"space"},decls:2,vars:3,consts:[[3,"event",4,"ngFor","ngForOf"],[3,"event"]],template:function(e,t){1&e&&(a.YNc(0,I,1,1,"dayview-event",0),a.ALo(1,"async")),2&e&&a.Q6J("ngForOf",a.lcZ(1,1,t.events))},directives:[i.sg,F],pipes:[i.Ov],styles:["[_nghost-%COMP%]{position:relative;border-right:1px solid rgba(0,0,0,.1)}"]}),e})();var D=n(5994),j=n(9055);function E(e,t){if(1&e&&(a.TgZ(0,"div",15),a.TgZ(1,"div",16),a._uU(2),a.qZA(),a._UZ(3,"div",17),a.qZA()),2&e){const e=t.$implicit,n=a.oxw();a.Udp("transform","translateY(-"+n.scroll.y+"px)"),a.xp6(2),a.hij(" ",e," ")}}function $(e,t){if(1&e&&(a.TgZ(0,"div",18),a._UZ(1,"div",19),a.TgZ(2,"div",20),a._uU(3),a.qZA(),a.qZA()),2&e){const e=t.$implicit,n=a.oxw();a.Udp("transform","translateX(-"+n.scroll.x+"px)"),a.xp6(3),a.hij(" ",e.display_name||e.name," ")}}function B(e,t){1&e&&a._UZ(0,"dayview-space",21),2&e&&a.Q6J("space",t.$implicit)}function X(e,t){if(1&e&&(a._UZ(0,"div",22),a.ALo(1,"async")),2&e){const e=t.index,n=a.oxw();a.Udp("width",12*a.lcZ(1,4,n.space_list).length+"rem")("top",4*e+"rem")}}function S(e,t){1&e&&a._UZ(0,"mat-progress-bar",23)}function G(e,t){if(1&e&&(a._UZ(0,"view-event-details",24),a.ALo(1,"async")),2&e){const e=a.oxw();a.Q6J("event",a.lcZ(1,1,e.event))}}const K=new Array(24).fill(0).map((e,t)=>(t%12==0?12:t%12)+(t>=12?" PM":" AM"));let R=(()=>{class e extends g.KG{constructor(e,t,n){super(),this._org=e,this._spaces=t,this._state=n,this.blocks=K,this.scroll={x:0,y:0},this.loading=this._state.loading,this.event=this._state.event,this.space_list=(0,O.aj)([this._org.active_building,this._spaces.list,this._state.zones]).pipe((0,T.U)(([e,t,n])=>t.filter(t=>t.zones.includes(e.id)&&(!(null==n?void 0:n.length)||t.zones.find(e=>n.includes(e))))||[]))}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}onScroll(e){requestAnimationFrame(()=>this.scroll={x:e.srcElement.scrollLeft,y:e.srcElement.scrollTop})}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(h.w7),a.Y36(q.sK),a.Y36(p.Y))},e.\u0275cmp=a.Xpm({type:e,selectors:[["dayview-timeline"]],features:[a.qOj],decls:19,vars:14,consts:[[1,"absolute","inset-0","flex"],[1,"time","h-full","w-24","overflow-hidden","bg","relative"],["header","",1,"relative","h-16","z-50"],[1,"bg","absolute","top-0","left-0","right-0","bottom-8"],["change-transform","","class","relative h-16 border-r border-gray-300 z-10",3,"transform",4,"ngFor","ngForOf"],[1,"absolute","h-8","w-px","top-8","right-0","bg-gray-300"],[1,"h-full","flex-1","flex","flex-col","w-1/2"],["header","",1,"flex","relative","overflow-hidden","border-b","border-gray-300","border-opacity-50","bg","h-16","w-full"],["change-transform","","class","relative h-16 w-48 min-w-[12rem]",3,"transform",4,"ngFor","ngForOf"],["content","",1,"relative","flex","flex-1","overflow-auto",3,"scroll"],["scroll_el",""],["class","w-48 min-w-[12rem]",3,"space",4,"ngFor","ngForOf"],["class","absolute bg-gray-300 h-px w-full left-0",3,"width","top",4,"ngFor","ngForOf"],["mode","indeterminate","class","absolute bottom-0 left-0 right-0",4,"ngIf"],[3,"event",4,"ngIf"],["change-transform","",1,"relative","h-16","border-r","border-gray-300","z-10"],[1,"absolute","text-center","w-full","text-xs","top-0","transform","-translate-y-1/2","opacity-40"],[1,"absolute","h-px","w-2","top-0","right-0","bg-gray-300"],["change-transform","",1,"relative","h-16","w-48","min-w-[12rem]"],["bar","",1,"absolute","h-8","w-px","bottom-0","-left-px","bg-gray-300"],[1,"name","m-2","text-center"],[1,"w-48","min-w-[12rem]",3,"space"],[1,"absolute","bg-gray-300","h-px","w-full","left-0"],["mode","indeterminate",1,"absolute","bottom-0","left-0","right-0"],[3,"event"]],template:function(e,t){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a._UZ(3,"div",3),a.qZA(),a.YNc(4,E,4,3,"div",4),a._UZ(5,"div",5),a.qZA(),a.TgZ(6,"div",6),a.TgZ(7,"div",7),a.YNc(8,$,4,3,"div",8),a.ALo(9,"async"),a.qZA(),a.TgZ(10,"div",9,10),a.NdJ("scroll",function(e){return t.onScroll(e)}),a.YNc(12,B,1,1,"dayview-space",11),a.ALo(13,"async"),a.YNc(14,X,2,6,"div",12),a.qZA(),a.qZA(),a.YNc(15,S,1,0,"mat-progress-bar",13),a.ALo(16,"async"),a.YNc(17,G,2,3,"view-event-details",14),a.ALo(18,"async"),a.qZA()),2&e&&(a.xp6(4),a.Q6J("ngForOf",t.blocks),a.xp6(4),a.Q6J("ngForOf",a.lcZ(9,6,t.space_list)),a.xp6(4),a.Q6J("ngForOf",a.lcZ(13,8,t.space_list)),a.xp6(2),a.Q6J("ngForOf",t.blocks),a.xp6(1),a.Q6J("ngIf",a.lcZ(16,10,t.loading)),a.xp6(2),a.Q6J("ngIf",a.lcZ(18,12,t.event)))},directives:[i.sg,i.O5,L,D.pW,j.E],pipes:[i.Ov],styles:["[_nghost-%COMP%]{position:relative;height:100%;width:100%}.bg[_ngcontent-%COMP%]{background-color:#ecf1f5}[change-transform][_ngcontent-%COMP%]{will-change:transform}"]}),e})();const W=["app-dayview",""];let V=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["","app-dayview",""]],attrs:W,decls:4,vars:0,consts:[[1,"h-full"],[1,"relative","overflow-hidden","flex","flex-col","flex-1","w-1/2","h-full"]],template:function(e,t){1&e&&(a._UZ(0,"sidebar",0),a.TgZ(1,"main",1),a._UZ(2,"dayview-topbar"),a._UZ(3,"dayview-timeline"),a.qZA())},directives:[r.k,A,R],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}"]}),e})();var H=n(4587);const ee=[{path:"",component:V}];let te=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[i.ez,o.u5,l.v,q.YR,H.PP,s.Bz.forChild(ee)]]}),e})()}}]);
//# sourceMappingURL=apps_concierge_src_app_day-view_day-view_module_ts.js.map