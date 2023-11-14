"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_week-view_week-view_module_ts"],{6226:(te,h,s)=>{s.r(h),s.d(h,{WeekViewModule:()=>q});var c=s(6575),p=s(8849),m=s(2649),y=s(7910),Z=s(7049),T=s(8377),e=s(9039),C=s(2349),k=s(1670),O=s(7627),g=s(7109),M=s(3121),d=s(1433),W=s(1771),A=s(1268),b=s(162),v=s(257),U=s(9293),V=s(4888);function P(n,r){if(1&n&&(e.TgZ(0,"mat-option",11),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.display_name||t.name," ")}}let J=(()=>{class n extends g.cx{constructor(t,i,o,l){super(),this._state=t,this._org=i,this._route=o,this._router=l,this.zones=[],this.levels=this._org.active_levels,this.options=this._state.options,this.setDate=a=>this._state.setDate(a),this.setWeekends=a=>this._state.setUIOptions({show_weekends:a}),this.newBooking=a=>this._state.newBooking(a),this.updateZones=a=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:a.join(",")}}),this._state.setZones(a)}}ngOnInit(){var t=this;return(0,k.Z)(function*(){yield t._org.initialised.pipe((0,O.P)(i=>i)).toPromise(),t.subscription("route.query",t._route.queryParamMap.subscribe(i=>{if(i.has("zone_ids")){const o=i.get("zone_ids").split(",");if(o.length){const l=t._org.levelWithID(o);if(t.zones=o,!l)return;t._org.building=t._org.buildings.find(a=>a.id===l.parent_id)}}})),t.subscription("levels",t._org.active_levels.subscribe(i=>{t.zones=t.zones.filter(o=>i.find(l=>l.id===o)),!t.zones.length&&i.length&&t.zones.push(i[0].id),t.updateZones(t.zones)}))})()}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(d.Y),e.Y36(M.w7),e.Y36(m.gz),e.Y36(m.F0))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["week-view-topbar"]],features:[e.qOj],decls:16,vars:7,consts:[["btn","","matRipple","","new","",1,"w-12","xl:w-auto",3,"click"],[1,"flex","items-center"],[1,"mr-2"],[1,"hidden","xl:block"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[1,"flex-1","w-0"],[3,"dateChange"],[3,"value"]],template:function(i,o){if(1&i&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return o.newBooking()}),e.TgZ(1,"div",1)(2,"app-icon",2),e._uU(3,"add"),e.qZA(),e.TgZ(4,"div",3),e._uU(5,"New Booking"),e.qZA()()(),e.TgZ(6,"mat-form-field",4)(7,"mat-select",5),e.NdJ("ngModelChange",function(a){return o.zones=a})("ngModelChange",function(a){return o.updateZones(a)}),e.YNc(8,P,2,2,"mat-option",6),e.ALo(9,"async"),e.qZA()(),e.TgZ(10,"mat-slide-toggle",7),e.NdJ("ngModelChange",function(a){return o.setWeekends(a)}),e.ALo(11,"async"),e.TgZ(12,"div",8),e._uU(13,"Show weekends"),e.qZA()(),e._UZ(14,"div",9),e.TgZ(15,"date-options",10),e.NdJ("dateChange",function(a){return o.setDate(a)}),e.qZA()),2&i){let l;e.xp6(7),e.Q6J("ngModel",o.zones),e.xp6(1),e.Q6J("ngForOf",e.lcZ(9,3,o.levels)),e.xp6(2),e.Q6J("ngModel",null==(l=e.lcZ(11,5,o.options))?null:l.show_weekends)}},dependencies:[c.sg,p.JJ,p.On,W.E,A.KE,b.gD,v.ey,U.Rr,v.wG,V.o,c.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:var(--b1);height:5em;padding:0 1em}button[_ngcontent-%COMP%]{min-width:0;padding:0 .85rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em;margin-left:1em}\n\n/*# sourceMappingURL=week-view-topbar.component.ts-angular-inline--74.css.map*/"]})}return n})();var Y=s(670),L=s(8173),f=s(5822),w=s(7929),F=s(4512),Q=s(462),E=s(8159),_=s(7422);function I(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",1),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.view(o.event))}),e.TgZ(1,"div",2),e._uU(2),e.qZA(),e.TgZ(3,"div",3),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"div",3),e._uU(7),e.qZA()()}if(2&n){const t=e.oxw();e.Tol("m-2 p-2 bg-base-100 shadow rounded border-2 text-black text-left font-normal "+("done"===(null==t.event?null:t.event.state)?"done":null==t.event?null:t.event.type)),e.xp6(2),e.Oqu(null==t.event?null:t.event.title),e.xp6(2),e.Oqu(e.xi3(5,6,null==t.event?null:t.event.date,t.time_format)),e.xp6(3),e.AsE(" ",null==t.event?null:t.event.attendees.length," Attendee",1===(null==t.event?null:t.event.attendees.length)?"":"s"," ")}}s(9916);let N=(()=>{class n{get time_format(){return this._settings.time_format}constructor(t,i){this._state=t,this._settings=i,this.view=o=>this._state.setEvent(o)}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(d.Y),e.Y36(g.gb))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["week-view-event"]],inputs:{event:"event"},decls:1,vars:1,consts:[["content","","matRipple","",3,"class","click",4,"ngIf"],["content","","matRipple","",3,"click"],[1,"text-base"],[1,"text-sm"]],template:function(i,o){1&i&&e.YNc(0,I,8,9,"div",0),2&i&&e.Q6J("ngIf",o.event)},dependencies:[c.O5,v.wG,c.uU],styles:["button[_ngcontent-%COMP%]{background:none!important;border:none!important}[content][_ngcontent-%COMP%]{width:calc(100% - 1rem)}.done[_ngcontent-%COMP%]{opacity:.5}.done[_ngcontent-%COMP%]:hover{opacity:1}.cancelled[_ngcontent-%COMP%]{border-color:#626262}.external[_ngcontent-%COMP%]{border-color:#d85be0}.internal[_ngcontent-%COMP%]{border-color:#00a4c7}\n\n/*# sourceMappingURL=week-view-event.component.ts-angular-inline--77.css.map*/"]})}return n})();function z(n,r){1&n&&e._UZ(0,"week-view-event",5),2&n&&e.Q6J("event",r.$implicit)}function D(n,r){if(1&n&&(e.ynx(0),e.YNc(1,z,1,1,"week-view-event",4),e.ALo(2,"async"),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,t.events))}}function R(n,r){1&n&&(e.TgZ(0,"p",6),e._uU(1,"No events"),e.qZA())}let B=(()=>{class n{constructor(t){this._state=t,this._index=new Q.X(0),this.date=this._state.date.pipe((0,_.U)(i=>(0,f.Z)((0,w.Z)(i),this.index).valueOf())),this.events=(0,E.aj)([this._state.filtered,this._state.date,this._index]).pipe((0,_.U)(([i,o,l])=>{const a=(0,f.Z)((0,w.Z)(o),l).valueOf(),ee=(0,F.Z)(a).valueOf();return i.filter(u=>(0,g.MZ)(a,ee,u.date,u.date+60*u.duration*1e3))}))}ngOnChanges(t){t.index&&this._index.next(this.index)}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(d.Y))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["week-view-day"]],inputs:{index:"index"},features:[e.TTD],decls:9,vars:10,consts:[[1,"flex","items-center","justify-center","border-b","border-base-200","bg-base-300","w-full","py-3","text-white"],[1,"flex-1","h-1/2","overflow-auto","w-full"],[4,"ngIf","ngIfElse"],["empty_state",""],[3,"event",4,"ngFor","ngForOf"],[3,"event"],[1,"text-center","p-2"]],template:function(i,o){if(1&i&&(e.TgZ(0,"header",0),e._uU(1),e.ALo(2,"date"),e.ALo(3,"async"),e.qZA(),e.TgZ(4,"div",1),e.YNc(5,D,3,3,"ng-container",2),e.ALo(6,"async"),e.qZA(),e.YNc(7,R,2,0,"ng-template",null,3,e.W1O)),2&i){const l=e.MAs(8);let a;e.xp6(1),e.hij(" ",e.xi3(2,3,e.lcZ(3,6,o.date),"EEE, MMM d, y")," "),e.xp6(4),e.Q6J("ngIf",null==(a=e.lcZ(6,8,o.events))?null:a.length)("ngIfElse",l)}},dependencies:[c.sg,c.O5,N,c.Ov,c.uU],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;height:100%}\n\n/*# sourceMappingURL=week-view-day.component.ts-angular-inline--76.css.map*/"]})}return n})();function j(n,r){if(1&n&&(e.ynx(0),e._UZ(1,"week-view-day",5),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("index",t)}}function X(n,r){if(1&n&&(e.ynx(0),e.YNc(1,j,2,1,"ng-container",4),e.ALo(2,"async"),e.BQk()),2&n){const t=r.$implicit,i=e.oxw();e.xp6(1),e.Q6J("ngIf",0!==t&&6!==t||e.lcZ(2,1,i.options).show_weekends)}}function G(n,r){1&n&&e._UZ(0,"mat-progress-bar",6)}function S(n,r){if(1&n&&(e._UZ(0,"view-event-details",7),e.ALo(1,"async")),2&n){const t=e.oxw();e.Q6J("event",e.lcZ(1,1,t.event))}}let $=(()=>{class n{constructor(t){this._state=t,this.weekdays=[0,1,2,3,4,5,6],this.options=this._state.options,this.event=this._state.event,this.loading=this._state.loading}ngOnInit(){this._state.startPolling("week")}ngOnDestroy(){this._state.stopPolling()}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(d.Y))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["week-view-timeline"]],decls:6,vars:7,consts:[[1,"flex","divide-x","border-base-200","h-full"],[4,"ngFor","ngForOf"],["mode","indeterminate",4,"ngIf"],[3,"event",4,"ngIf"],[4,"ngIf"],[1,"h-full","flex-1",3,"index"],["mode","indeterminate"],[3,"event"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0),e.YNc(1,X,3,3,"ng-container",1),e.qZA(),e.YNc(2,G,1,0,"mat-progress-bar",2),e.ALo(3,"async"),e.YNc(4,S,2,3,"view-event-details",3),e.ALo(5,"async")),2&i&&(e.xp6(1),e.Q6J("ngForOf",o.weekdays),e.xp6(1),e.Q6J("ngIf",e.lcZ(3,3,o.loading)),e.xp6(2),e.Q6J("ngIf",e.lcZ(5,5,o.event)))},dependencies:[c.sg,c.O5,Y.E,L.pW,B,c.Ov],styles:["[_nghost-%COMP%]{position:relative;height:100%;width:100%;overflow:hidden}\n\n/*# sourceMappingURL=week-view-timeline.component.ts-angular-inline--75.css.map*/"]})}return n})();const K=["app-weekview",""];let x=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["","app-weekview",""]],attrs:K,decls:4,vars:0,consts:[[1,"relative","overflow-hidden"]],template:function(i,o){1&i&&(e._UZ(0,"sidebar"),e.TgZ(1,"main",0),e._UZ(2,"week-view-topbar")(3,"week-view-timeline"),e.qZA())},dependencies:[C.k,J,$],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--b1)}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n\n/*# sourceMappingURL=week-view.component.ts-angular-inline--73.css.map*/"]})}return n})();const H=[{path:"",component:x},{path:"new",component:x}];let q=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[c.ez,p.u5,y.v,Z.YR,T.PP,m.Bz.forChild(H)]})}return n})()}}]);
//# sourceMappingURL=apps_concierge_src_app_week-view_week-view_module_ts.js.map