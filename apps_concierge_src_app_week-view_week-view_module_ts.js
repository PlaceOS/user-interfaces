"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_week-view_week-view_module_ts"],{1908:(ne,v,i)=>{i.r(v),i.d(v,{DayViewModule:()=>q});var r=i(4666),d=i(2508),m=i(9885),C=i(3045),x=i(301),T=i(711),e=i(2560),_=i(4945),Z=i(1670),k=i(5670),u=i(9112),M=i(6221),p=i(3194),O=i(8441),W=i(4522),V=i(5074),A=i(7371),f=i(207),U=i(4714),b=i(5306);function P(t,s){if(1&t&&(e.TgZ(0,"mat-option",11),e._uU(1),e.qZA()),2&t){const n=s.$implicit;e.Q6J("value",n.id),e.xp6(1),e.hij(" ",n.display_name||n.name," ")}}let J=(()=>{class t extends u.KG{constructor(n,o,a,l){super(),this._state=n,this._org=o,this._route=a,this._router=l,this.zones=[],this.levels=this._org.active_levels,this.options=this._state.options,this.setDate=c=>this._state.setDate(c),this.setWeekends=c=>this._state.setUIOptions({show_weekends:c}),this.newBooking=c=>this._state.newBooking(c),this.updateZones=c=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:c.join(",")}}),this._state.setZones(c)}}ngOnInit(){var n=this;return(0,Z.Z)(function*(){yield n._org.initialised.pipe((0,k.P)(o=>o)).toPromise(),n.subscription("route.query",n._route.queryParamMap.subscribe(o=>{if(o.has("zone_ids")){const a=o.get("zone_ids").split(",");if(a.length){const l=n._org.levelWithID(a);if(n.zones=a,!l)return;n._org.building=n._org.buildings.find(c=>c.id===l.parent_id)}}})),n.subscription("levels",n._org.active_levels.subscribe(o=>{n.zones=n.zones.filter(a=>o.find(l=>l.id===a)),!n.zones.length&&o.length&&n.zones.push(o[0].id),n.updateZones(n.zones)}))})()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p.Y),e.Y36(M.w7),e.Y36(m.gz),e.Y36(m.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["week-view-topbar"]],features:[e.qOj],decls:16,vars:7,consts:[["mat-button","","new","",1,"w-12","xl:w-auto",3,"click"],[1,"flex","items-center"],[1,"mr-2"],[1,"hidden","xl:block"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[1,"flex-1","w-0"],[3,"dateChange"],[3,"value"]],template:function(n,o){if(1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return o.newBooking()}),e.TgZ(1,"div",1)(2,"app-icon",2),e._uU(3,"add"),e.qZA(),e.TgZ(4,"div",3),e._uU(5,"New Booking"),e.qZA()()(),e.TgZ(6,"mat-form-field",4)(7,"mat-select",5),e.NdJ("ngModelChange",function(l){return o.zones=l})("ngModelChange",function(l){return o.updateZones(l)}),e.YNc(8,P,2,2,"mat-option",6),e.ALo(9,"async"),e.qZA()(),e.TgZ(10,"mat-slide-toggle",7),e.NdJ("ngModelChange",function(l){return o.setWeekends(l)}),e.ALo(11,"async"),e.TgZ(12,"div",8),e._uU(13,"Show weekends"),e.qZA()(),e._UZ(14,"div",9),e.TgZ(15,"date-options",10),e.NdJ("dateChange",function(l){return o.setDate(l)}),e.qZA()),2&n){let a;e.xp6(7),e.Q6J("ngModel",o.zones),e.xp6(1),e.Q6J("ngForOf",e.lcZ(9,3,o.levels)),e.xp6(2),e.Q6J("ngModel",null==(a=e.lcZ(11,5,o.options))?null:a.show_weekends)}},dependencies:[r.sg,d.JJ,d.On,O.E,W.lW,V.KE,A.gD,f.ey,U.Rr,b.o,r.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em}button[_ngcontent-%COMP%]{min-width:0;padding:0 .85rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em;margin-left:1em}\n/*# sourceMappingURL=week-view-topbar.component.ts-angular-inline--51.css.map*/"]}),t})();var Y=i(914),D=i(1294),h=i(312),w=i(8031),E=i(3200),L=i(4505),F=i(7716),y=i(6942);function Q(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"div",1),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.view(a.event))}),e.TgZ(1,"div",2),e._uU(2),e.qZA(),e.TgZ(3,"div",3),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"div",3),e._uU(7),e.qZA()()}if(2&t){const n=e.oxw();e.Tol("m-2 p-2 bg-white shadow rounded border-2 text-black text-left font-normal "+("done"===(null==n.event?null:n.event.state)?"done":null==n.event?null:n.event.type)),e.xp6(2),e.Oqu(null==n.event?null:n.event.title),e.xp6(2),e.Oqu(e.xi3(5,6,null==n.event?null:n.event.date,"shortTime")),e.xp6(3),e.AsE(" ",null==n.event?null:n.event.attendees.length," Attendee",1===(null==n.event?null:n.event.attendees.length)?"":"s"," ")}}i(9830);let I=(()=>{class t{constructor(n){this._state=n,this.view=o=>this._state.setEvent(o)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p.Y))},t.\u0275cmp=e.Xpm({type:t,selectors:[["week-view-event"]],inputs:{event:"event"},decls:1,vars:1,consts:[["content","","matRipple","",3,"class","click",4,"ngIf"],["content","","matRipple","",3,"click"],[1,"text-base"],[1,"text-sm"]],template:function(n,o){1&n&&e.YNc(0,Q,8,9,"div",0),2&n&&e.Q6J("ngIf",o.event)},dependencies:[r.O5,f.wG,r.uU],styles:["button[_ngcontent-%COMP%]{background:none!important;border:none!important}[content][_ngcontent-%COMP%]{width:calc(100% - 1rem)}.done[_ngcontent-%COMP%]{opacity:.5}.done[_ngcontent-%COMP%]:hover{opacity:1}.cancelled[_ngcontent-%COMP%]{border-color:#626262}.external[_ngcontent-%COMP%]{border-color:#d85be0}.internal[_ngcontent-%COMP%]{border-color:#00a4c7}\n/*# sourceMappingURL=week-view-event.component.ts-angular-inline--54.css.map*/"]}),t})();function N(t,s){1&t&&e._UZ(0,"week-view-event",5),2&t&&e.Q6J("event",s.$implicit)}function z(t,s){if(1&t&&(e.ynx(0),e.YNc(1,N,1,1,"week-view-event",4),e.ALo(2,"async"),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,n.events))}}function B(t,s){1&t&&(e.TgZ(0,"p",6),e._uU(1,"No events"),e.qZA())}let R=(()=>{class t{constructor(n){this._state=n,this._index=new L.X(0),this.date=this._state.date.pipe((0,y.U)(o=>(0,h.Z)((0,w.Z)(o),this.index).valueOf())),this.events=(0,F.aj)([this._state.filtered,this._state.date,this._index]).pipe((0,y.U)(([o,a,l])=>{const c=(0,h.Z)((0,w.Z)(a),l).valueOf(),ee=(0,E.Z)(c).valueOf();return o.filter(g=>(0,u.MZ)(c,ee,g.date,g.date+60*g.duration*1e3))}))}ngOnChanges(n){n.index&&this._index.next(this.index)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p.Y))},t.\u0275cmp=e.Xpm({type:t,selectors:[["week-view-day"]],inputs:{index:"index"},features:[e.TTD],decls:9,vars:10,consts:[[1,"flex","items-center","justify-center","border-b","border-gray-200","bg-gray-500","w-full","py-3","text-white"],[1,"flex-1","h-1/2","overflow-auto","w-full"],[4,"ngIf","ngIfElse"],["empty_state",""],[3,"event",4,"ngFor","ngForOf"],[3,"event"],[1,"text-center","p-2"]],template:function(n,o){if(1&n&&(e.TgZ(0,"header",0),e._uU(1),e.ALo(2,"date"),e.ALo(3,"async"),e.qZA(),e.TgZ(4,"div",1),e.YNc(5,z,3,3,"ng-container",2),e.ALo(6,"async"),e.qZA(),e.YNc(7,B,2,0,"ng-template",null,3,e.W1O)),2&n){const a=e.MAs(8);let l;e.xp6(1),e.hij(" ",e.xi3(2,3,e.lcZ(3,6,o.date),"EEE, MMM d, y")," "),e.xp6(4),e.Q6J("ngIf",null==(l=e.lcZ(6,8,o.events))?null:l.length)("ngIfElse",a)}},dependencies:[r.sg,r.O5,I,r.Ov,r.uU],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;height:100%}\n/*# sourceMappingURL=week-view-day.component.ts-angular-inline--53.css.map*/"]}),t})();function j(t,s){if(1&t&&(e.ynx(0),e._UZ(1,"week-view-day",5),e.BQk()),2&t){const n=e.oxw().$implicit;e.xp6(1),e.Q6J("index",n)}}function X(t,s){if(1&t&&(e.ynx(0),e.YNc(1,j,2,1,"ng-container",4),e.ALo(2,"async"),e.BQk()),2&t){const n=s.$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngIf",0!==n&&6!==n||e.lcZ(2,1,o.options).show_weekends)}}function G(t,s){1&t&&e._UZ(0,"mat-progress-bar",6)}function S(t,s){if(1&t&&(e._UZ(0,"view-event-details",7),e.ALo(1,"async")),2&t){const n=e.oxw();e.Q6J("event",e.lcZ(1,1,n.event))}}let $=(()=>{class t{constructor(n){this._state=n,this.weekdays=[0,1,2,3,4,5,6],this.options=this._state.options,this.event=this._state.event,this.loading=this._state.loading}ngOnInit(){this._state.startPolling("week")}ngOnDestroy(){this._state.stopPolling()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p.Y))},t.\u0275cmp=e.Xpm({type:t,selectors:[["week-view-timeline"]],decls:6,vars:7,consts:[[1,"flex","divide-x","border-gray-400","h-full"],[4,"ngFor","ngForOf"],["mode","indeterminate",4,"ngIf"],[3,"event",4,"ngIf"],[4,"ngIf"],[1,"h-full","flex-1",3,"index"],["mode","indeterminate"],[3,"event"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e.YNc(1,X,3,3,"ng-container",1),e.qZA(),e.YNc(2,G,1,0,"mat-progress-bar",2),e.ALo(3,"async"),e.YNc(4,S,2,3,"view-event-details",3),e.ALo(5,"async")),2&n&&(e.xp6(1),e.Q6J("ngForOf",o.weekdays),e.xp6(1),e.Q6J("ngIf",e.lcZ(3,3,o.loading)),e.xp6(2),e.Q6J("ngIf",e.lcZ(5,5,o.event)))},dependencies:[r.sg,r.O5,Y.E,D.pW,R,r.Ov],styles:["[_nghost-%COMP%]{position:relative;height:100%;width:100%;overflow:hidden}\n/*# sourceMappingURL=week-view-timeline.component.ts-angular-inline--52.css.map*/"]}),t})();const K=["app-weekview",""],H=[{path:"",component:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["","app-weekview",""]],attrs:K,decls:4,vars:0,consts:[[1,"relative","overflow-hidden"]],template:function(n,o){1&n&&(e._UZ(0,"sidebar"),e.TgZ(1,"main",0),e._UZ(2,"week-view-topbar")(3,"week-view-timeline"),e.qZA())},dependencies:[_.k,J,$],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n/*# sourceMappingURL=week-view.component.ts-angular-inline--50.css.map*/"]}),t})()}];let q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.ez,d.u5,C.v,x.YR,T.PP,m.Bz.forChild(H)]}),t})()}}]);
//# sourceMappingURL=apps_concierge_src_app_week-view_week-view_module_ts.js.map