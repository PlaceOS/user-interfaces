(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([[726],{6726:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DayViewModule:()=>ie});var i=n(1511),o=n(6073),s=n(6898),l=n(787),r=n(2619),a=n(1490),c=n(4762),d=n(3530),g=n(3206),p=n(1496),h=n(8525),u=n(5980),f=n(1548),v=n(6283),m=n(4786),_=n(7521),w=n(3708),x=n(1522);function Z(e,t){if(1&e&&(r.TgZ(0,"mat-option",12),r._uU(1),r.qZA()),2&e){const e=t.$implicit;r.Q6J("value",e.id),r.xp6(1),r.hij(" ",e.display_name||e.name," ")}}function b(e,t){if(1&e&&(r.TgZ(0,"mat-option",12),r._uU(1),r.qZA()),2&e){const e=t.$implicit;r.Q6J("value",e.id),r.xp6(1),r.hij(" ",e.name," ")}}const y=function(){return{class:"material-icons",content:"add"}};let A=(()=>{class e extends g.KG{constructor(e,t,n,i){super(),this._state=e,this._org=t,this._route=n,this._router=i,this.zones=[],this.types=[{id:"internal",name:"Internal"},{id:"external",name:"External"},{id:"cancelled",name:"Cancelled"}],this.type_list=this.types.map(e=>`${e.id}`),this.levels=this._org.active_levels,this.ui_options=this._state.options,this.setDate=e=>this._state.setDate(e),this.newBooking=e=>this._state.newBooking(e),this.updateZones=e=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:e.join(",")}}),this._state.setZones(e)},this.updateTypes=e=>this._state.setFilters({hide_type:this.types.reduce((t,n)=>(!e.includes(n.id)&&t.push(n),t),[])})}updateUIOptions(e){this._state.setUIOptions(e)}ngOnInit(){return(0,c.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,d.P)(e=>e)).toPromise(),this.subscription("route.query",this._route.queryParamMap.subscribe(e=>{if(e.has("zone_ids")){const t=e.get("zone_ids").split(",");if(t.length){this.zones=t;const e=this._org.levelWithID(t);if(!e)return;this._org.building=this._org.buildings.find(t=>t.id===e.parent_id)}}})),this.subscription("levels",this._org.active_levels.subscribe(e=>{this.zones=this.zones.filter(t=>e.find(e=>e.id===t)),!this.zones.length&&e.length&&this.zones.push(e[0].id),this.updateZones(this.zones)})),this.updateTypes(this.type_list)})}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(h.Y),r.Y36(p.w7),r.Y36(s.gz),r.Y36(s.F0))},e.\u0275cmp=r.Xpm({type:e,selectors:[["dayview-topbar"]],features:[r.qOj],decls:24,vars:14,consts:[["mat-button","","new","",1,"w-12","xl:w-auto",3,"click"],[1,"flex","items-center"],[1,"mr-2",3,"icon"],[1,"hidden","lg:block"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["multiple","","placeholder","No Events",3,"ngModel","ngModelChange"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[1,"flex-1","w-0"],[3,"dateChange"],[3,"value"]],template:function(e,t){if(1&e&&(r.TgZ(0,"button",0),r.NdJ("click",function(){return t.newBooking()}),r.TgZ(1,"div",1),r._UZ(2,"app-icon",2),r.TgZ(3,"div",3),r._uU(4,"New Booking"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(5,"mat-form-field",4),r.TgZ(6,"mat-select",5),r.NdJ("ngModelChange",function(e){return t.zones=e})("ngModelChange",function(e){return t.updateZones(e)}),r.YNc(7,Z,2,2,"mat-option",6),r.ALo(8,"async"),r.qZA(),r.qZA(),r.TgZ(9,"mat-form-field",4),r.TgZ(10,"mat-select",7),r.NdJ("ngModelChange",function(e){return t.type_list=e})("ngModelChange",function(e){return t.updateTypes(e)}),r.TgZ(11,"mat-select-trigger"),r._uU(12,"Legend"),r.qZA(),r.YNc(13,b,2,2,"mat-option",6),r.qZA(),r.qZA(),r.TgZ(14,"mat-slide-toggle",8),r.NdJ("ngModelChange",function(e){return t.updateUIOptions({show_overflow:e})}),r.ALo(15,"async"),r.TgZ(16,"div",9),r._uU(17,"Setup / Breakdown"),r.qZA(),r.qZA(),r.TgZ(18,"mat-slide-toggle",8),r.NdJ("ngModelChange",function(e){return t.updateUIOptions({show_cleaning:e})}),r.ALo(19,"async"),r.TgZ(20,"div",9),r._uU(21,"Cleaners View"),r.qZA(),r.qZA(),r._UZ(22,"div",10),r.TgZ(23,"date-options",11),r.NdJ("dateChange",function(e){return t.setDate(e)}),r.qZA()),2&e){let e,n;r.xp6(2),r.Q6J("icon",r.DdM(13,y)),r.xp6(4),r.Q6J("ngModel",t.zones),r.xp6(1),r.Q6J("ngForOf",r.lcZ(8,7,t.levels)),r.xp6(3),r.Q6J("ngModel",t.type_list),r.xp6(3),r.Q6J("ngForOf",t.types),r.xp6(1),r.Q6J("ngModel",null==(e=r.lcZ(15,9,t.ui_options))?null:e.show_overflow),r.xp6(4),r.Q6J("ngModel",null==(n=r.lcZ(19,11,t.ui_options))?null:n.show_cleaning)}},directives:[u.lW,f.o,v.KE,m.gD,o.JJ,o.On,i.sg,m.$L,_.Rr,w.E,x.ey],pipes:[i.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em}button[_ngcontent-%COMP%]{min-width:0;padding:0 .85rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em;margin-left:1em}mat-slide-toggle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:5.5em;white-space:normal;line-height:1.2em}"]}),e})();var O=n(3080),T=n(9996),q=n(7209),U=n(4441),M=n(804),J=n(205),C=n(3779);function k(e,t){if(1&e&&r._UZ(0,"div"),2&e){const e=r.oxw();r.Tol("overflow-block absolute rounded overflow-hidden w-full "+e.type),r.Udp("top",100*e.overflow_top+"%")("height",100*e.overflow_height+"%")}}function Y(e,t){if(1&e&&(r.TgZ(0,"div",6),r.TgZ(1,"app-icon",7),r._uU(2,"title"),r.qZA(),r._uU(3),r.qZA()),2&e){const e=r.oxw(2);r.xp6(3),r.hij(" ",e.event.title," ")}}function P(e,t){if(1&e&&(r.TgZ(0,"div",6),r.TgZ(1,"app-icon",7),r._uU(2,"schedule"),r.qZA(),r._uU(3),r.qZA()),2&e){const e=r.oxw(2);r.xp6(3),r.hij(" ",e.time," ")}}function Q(e,t){if(1&e&&(r.TgZ(0,"div",6),r.TgZ(1,"app-icon",7),r._uU(2,"people"),r.qZA(),r._uU(3),r.qZA()),2&e){const e=r.oxw(2);r.xp6(3),r.AsE(" ",e.event.attendees.length," Attendee",1===e.event.attendees.length?"":"s"," ")}}function z(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"div",3),r.NdJ("click",function(){r.CHM(e);const t=r.oxw();return t.view(t.event)}),r.TgZ(1,"div",4),r._uU(2),r.qZA(),r.YNc(3,Y,4,1,"div",5),r.YNc(4,P,4,1,"div",5),r.YNc(5,Q,4,2,"div",5),r.qZA()}if(2&e){const e=r.oxw();r.Tol("absolute rounded overflow-hidden text-sm border border-gray-200 shadow-sm z-10 hover:z-30 "+e.type),r.Udp("top",100*e.top+"%")("height",100*e.height+"%"),r.xp6(2),r.Oqu(null==e.event.organiser?null:e.event.organiser.name),r.xp6(1),r.Q6J("ngIf",e.event.duration>30),r.xp6(1),r.Q6J("ngIf",e.event.duration>60),r.xp6(1),r.Q6J("ngIf",e.event.duration>90)}}function N(e,t){if(1&e&&(r.TgZ(0,"div",8),r.TgZ(1,"div"),r.TgZ(2,"app-icon"),r._uU(3),r.qZA(),r.qZA(),r.TgZ(4,"div",9),r._uU(5),r.ALo(6,"date"),r.qZA(),r.qZA()),2&e){const e=r.oxw();r.Udp("top",100*e.top+"%")("height",100*e.height+"%"),r.xp6(1),r.Tol("icon flex items-center justify-center mr-2 text-3xl rounded h-12 w-12 text-pending "+e.event.ext("cleaning_status")),r.xp6(2),r.Oqu("done"===e.event.ext("cleaning_status")?"done":"warning"),r.xp6(2),r.AsE(" ","done"===e.event.ext("cleaning_status")?"Finished":"Scheduled to"," clean at ",r.xi3(6,9,e.event.ext("cleaning_time")||1e3*e.event.event_end,"shortTime")," ")}}n(7141);const I=1440;let F=(()=>{class e{constructor(e){this._state=e,this.top=-999,this.height=0,this.overflow_top=-999,this.overflow_height=0,this.ui_options=this._state.options,this.view=e=>this._state.setEvent(e)}get time(){const e=new Date(this.event.date);return(0,U.Z)(e,"h:mm a")+" - "+(0,U.Z)((0,M.Z)(e,this.event.duration),"h:mm a")}get type(){return this.event.guests.length?"external":"declined"===this.event.status?"cancelled":"internal"}ngOnChanges(e){if(e.event&&this.event){const e=(0,J.Z)(new Date(this.event.date)),t=(0,C.Z)(new Date(this.event.date),e);this.top=t/I,this.height=this.event.duration/I,this.overflow_top=(t-this.event.ext("setup"))/I,this.overflow_height=(this.event.duration+this.event.ext("setup")+this.event.ext("breakdown"))/I}}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(h.Y))},e.\u0275cmp=r.Xpm({type:e,selectors:[["dayview-event"]],inputs:{event:"event"},features:[r.TTD],decls:5,vars:7,consts:[[3,"class","top","height",4,"ngIf"],["event","","matRipple","",3,"class","top","height","click",4,"ngIf"],["cleaning","","class","absolute rounded overflow-hidden flex w-full shadow p-2 bg-white z-20",3,"top","height",4,"ngIf"],["event","","matRipple","",3,"click"],[1,"px-2","py-1","font-medium"],["class","py-1 flex items-center",4,"ngIf"],[1,"py-1","flex","items-center"],[1,"mx-2"],["cleaning","",1,"absolute","rounded","overflow-hidden","flex","w-full","shadow","p-2","bg-white","z-20"],[1,"flex-1","w-1/2"]],template:function(e,t){if(1&e&&(r.YNc(0,k,1,6,"div",0),r.ALo(1,"async"),r.YNc(2,z,6,10,"div",1),r.YNc(3,N,7,12,"div",2),r.ALo(4,"async")),2&e){let e,n;r.Q6J("ngIf",null==(e=r.lcZ(1,3,t.ui_options))?null:e.show_overflow),r.xp6(2),r.Q6J("ngIf",t.event),r.xp6(1),r.Q6J("ngIf",t.event&&(null==(n=r.lcZ(4,5,t.ui_options))?null:n.show_cleaning))}},directives:[i.O5,x.wG,f.o],pipes:[i.Ov,i.uU],styles:["[event][_ngcontent-%COMP%]{background-color:#ccc;width:12rem;z-index:100;transition:box-shadow .2s}[event][_ngcontent-%COMP%]:hover{box-shadow:0 1px 3px 1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)!important;cursor:pointer}.overflow-block[_ngcontent-%COMP%]{opacity:.3;width:12rem}.internal[_ngcontent-%COMP%]{background-color:#1565c0;color:#fff}.icon[_ngcontent-%COMP%]{background-color:#f0f0f0}.icon.done[_ngcontent-%COMP%]{color:#21a453}.external[_ngcontent-%COMP%]{background-color:#ad1457;color:#fff}.cancelled[_ngcontent-%COMP%]{background-color:#ccc}"]}),e})();function L(e,t){1&e&&r._UZ(0,"dayview-event",2),2&e&&r.Q6J("event",t.$implicit)}function j(e,t){if(1&e&&(r.ynx(0),r.YNc(1,L,1,1,"dayview-event",1),r.ALo(2,"async"),r.BQk()),2&e){const e=r.oxw();r.xp6(1),r.Q6J("ngForOf",r.lcZ(2,1,e.events))}}let D=(()=>{class e extends g.KG{constructor(e){super(),this._state=e,this.events=this._state.filtered.pipe((0,T.U)(e=>e.filter(e=>e.resources.find(e=>this.space.email===e.email))))}ngOnInit(){this.subscription("events",this._state.filtered.subscribe())}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(h.Y))},e.\u0275cmp=r.Xpm({type:e,selectors:[["dayview-space"]],inputs:{space:"space"},features:[r.qOj],decls:1,vars:1,consts:[[4,"ngIf"],[3,"event",4,"ngFor","ngForOf"],[3,"event"]],template:function(e,t){1&e&&r.YNc(0,j,3,3,"ng-container",0),2&e&&r.Q6J("ngIf",t.space)},directives:[i.O5,i.sg,F],pipes:[i.Ov],styles:["[_nghost-%COMP%]{position:relative;border-right:1px solid rgba(0,0,0,.1)}"]}),e})();var E=n(5994),B=n(9055);function $(e,t){if(1&e&&(r.TgZ(0,"div",15),r.TgZ(1,"div",16),r._uU(2),r.qZA(),r._UZ(3,"div",17),r.qZA()),2&e){const e=t.$implicit,n=r.oxw();r.Udp("transform","translateY(-"+n.scroll.y+"px)"),r.xp6(2),r.hij(" ",e," ")}}function X(e,t){if(1&e&&(r.TgZ(0,"div",18),r._UZ(1,"div",19),r.TgZ(2,"div",20),r._uU(3),r.qZA(),r.qZA()),2&e){const e=t.$implicit,n=r.oxw();r.Udp("transform","translateX(-"+n.scroll.x+"px)"),r.xp6(3),r.hij(" ",e.display_name||e.name," ")}}function G(e,t){1&e&&r._UZ(0,"dayview-space",21),2&e&&r.Q6J("space",t.$implicit)}function K(e,t){if(1&e&&(r._UZ(0,"div",22),r.ALo(1,"async")),2&e){const e=t.index,n=r.oxw();r.Udp("width",12*r.lcZ(1,4,n.space_list).length+"rem")("top",4*e+"rem")}}function S(e,t){1&e&&r._UZ(0,"mat-progress-bar",23)}function R(e,t){if(1&e&&(r._UZ(0,"view-event-details",24),r.ALo(1,"async")),2&e){const e=r.oxw();r.Q6J("event",r.lcZ(1,1,e.event))}}const W=new Array(24).fill(0).map((e,t)=>(t%12==0?12:t%12)+(t>=12?" PM":" AM"));let V=(()=>{class e extends g.KG{constructor(e,t,n){super(),this._org=e,this._spaces=t,this._state=n,this.blocks=W,this.scroll={x:0,y:0},this.loading=this._state.loading,this.event=this._state.event,this.space_list=(0,O.aj)([this._org.active_building,this._spaces.list,this._state.zones]).pipe((0,T.U)(([e,t,n])=>t.filter(t=>t.zones.includes(e.id)&&(!(null==n?void 0:n.length)||t.zones.find(e=>n.includes(e))))||[]))}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}onScroll(e){requestAnimationFrame(()=>this.scroll={x:e.srcElement.scrollLeft,y:e.srcElement.scrollTop})}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(p.w7),r.Y36(q.sK),r.Y36(h.Y))},e.\u0275cmp=r.Xpm({type:e,selectors:[["dayview-timeline"]],features:[r.qOj],decls:19,vars:14,consts:[[1,"absolute","inset-0","flex"],[1,"time","h-full","w-24","overflow-hidden","bg","relative"],["header","",1,"relative","h-16","z-50"],[1,"bg","absolute","top-0","left-0","right-0","bottom-8"],["change-transform","","class","relative h-16 border-r border-gray-300 z-10",3,"transform",4,"ngFor","ngForOf"],[1,"absolute","h-8","w-px","top-8","right-0","bg-gray-300"],[1,"h-full","flex-1","flex","flex-col","w-1/2"],["header","",1,"flex","relative","overflow-hidden","border-b","border-gray-300","border-opacity-50","bg","h-16","w-full"],["change-transform","","class","relative h-16 w-48 min-w-[12rem]",3,"transform",4,"ngFor","ngForOf"],["content","",1,"relative","flex","flex-1","overflow-auto",3,"scroll"],["scroll_el",""],["class","w-48 min-w-[12rem] h-[96rem]",3,"space",4,"ngFor","ngForOf"],["class","absolute bg-gray-300 h-px min-w-full left-0",3,"width","top",4,"ngFor","ngForOf"],["mode","indeterminate","class","absolute bottom-0 left-0 right-0",4,"ngIf"],[3,"event",4,"ngIf"],["change-transform","",1,"relative","h-16","border-r","border-gray-300","z-10"],[1,"absolute","text-center","w-full","text-xs","top-0","transform","-translate-y-1/2","opacity-40"],[1,"absolute","h-px","w-2","top-0","right-0","bg-gray-300"],["change-transform","",1,"relative","h-16","w-48","min-w-[12rem]"],["bar","",1,"absolute","h-8","w-px","bottom-0","-left-px","bg-gray-300"],[1,"name","m-2","text-center"],[1,"w-48","min-w-[12rem]","h-[96rem]",3,"space"],[1,"absolute","bg-gray-300","h-px","min-w-full","left-0"],["mode","indeterminate",1,"absolute","bottom-0","left-0","right-0"],[3,"event"]],template:function(e,t){1&e&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r._UZ(3,"div",3),r.qZA(),r.YNc(4,$,4,3,"div",4),r._UZ(5,"div",5),r.qZA(),r.TgZ(6,"div",6),r.TgZ(7,"div",7),r.YNc(8,X,4,3,"div",8),r.ALo(9,"async"),r.qZA(),r.TgZ(10,"div",9,10),r.NdJ("scroll",function(e){return t.onScroll(e)}),r.YNc(12,G,1,1,"dayview-space",11),r.ALo(13,"async"),r.YNc(14,K,2,6,"div",12),r.qZA(),r.qZA(),r.YNc(15,S,1,0,"mat-progress-bar",13),r.ALo(16,"async"),r.YNc(17,R,2,3,"view-event-details",14),r.ALo(18,"async"),r.qZA()),2&e&&(r.xp6(4),r.Q6J("ngForOf",t.blocks),r.xp6(4),r.Q6J("ngForOf",r.lcZ(9,6,t.space_list)),r.xp6(4),r.Q6J("ngForOf",r.lcZ(13,8,t.space_list)),r.xp6(2),r.Q6J("ngForOf",t.blocks),r.xp6(1),r.Q6J("ngIf",r.lcZ(16,10,t.loading)),r.xp6(2),r.Q6J("ngIf",r.lcZ(18,12,t.event)))},directives:[i.sg,i.O5,D,E.pW,B.E],pipes:[i.Ov],styles:["[_nghost-%COMP%]{position:relative;height:100%;width:100%}.bg[_ngcontent-%COMP%]{background-color:#ecf1f5}[change-transform][_ngcontent-%COMP%]{will-change:transform}"]}),e})();const H=["app-dayview",""];let ee=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["","app-dayview",""]],attrs:H,decls:4,vars:0,consts:[[1,"h-full"],[1,"relative","overflow-hidden","flex","flex-col","flex-1","w-1/2","h-full"]],template:function(e,t){1&e&&(r._UZ(0,"sidebar",0),r.TgZ(1,"main",1),r._UZ(2,"dayview-topbar"),r._UZ(3,"dayview-timeline"),r.qZA())},directives:[a.k,A,V],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}"]}),e})();var te=n(4587);const ne=[{path:"",component:ee}];let ie=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[i.ez,o.u5,l.v,q.YR,te.PP,s.Bz.forChild(ne)]]}),e})()}}]);