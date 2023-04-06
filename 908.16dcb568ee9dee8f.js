"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([[908],{1908:(ee,x,i)=>{i.r(x),i.d(x,{DayViewModule:()=>r});var c=i(6895),h=i(4006),u=i(3007),k=i(3045),O=i(2886),M=i(1529),e=i(4650),W=i(4945),V=i(5861),A=i(7224),C=i(9112),b=i(6221),f=i(7100),P=i(2485),J=i(9549),U=i(4385),w=i(3238),Y=i(455),D=i(5306);function E(o,n){if(1&o&&(e.TgZ(0,"mat-option",11),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.display_name||t.name," ")}}class d extends C.cx{constructor(n,t,s,a){super(),this._state=n,this._org=t,this._route=s,this._router=a,this.zones=[],this.levels=this._org.active_levels,this.options=this._state.options,this.setDate=l=>this._state.setDate(l),this.setWeekends=l=>this._state.setUIOptions({show_weekends:l}),this.newBooking=l=>this._state.newBooking(l),this.updateZones=l=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:l.join(",")}}),this._state.setZones(l)}}ngOnInit(){var n=this;return(0,V.Z)(function*(){yield n._org.initialised.pipe((0,A.P)(t=>t)).toPromise(),n.subscription("route.query",n._route.queryParamMap.subscribe(t=>{if(t.has("zone_ids")){const s=t.get("zone_ids").split(",");if(s.length){const a=n._org.levelWithID(s);if(n.zones=s,!a)return;n._org.building=n._org.buildings.find(l=>l.id===a.parent_id)}}})),n.subscription("levels",n._org.active_levels.subscribe(t=>{n.zones=n.zones.filter(s=>t.find(a=>a.id===s)),!n.zones.length&&t.length&&n.zones.push(t[0].id),n.updateZones(n.zones)}))})()}}d.\u0275fac=function(n){return new(n||d)(e.Y36(f.Y),e.Y36(b.w7),e.Y36(u.gz),e.Y36(u.F0))},d.\u0275cmp=e.Xpm({type:d,selectors:[["week-view-topbar"]],features:[e.qOj],decls:16,vars:7,consts:[["btn","","matRipple","","new","",1,"w-12","xl:w-auto",3,"click"],[1,"flex","items-center"],[1,"mr-2"],[1,"hidden","xl:block"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[1,"flex-1","w-0"],[3,"dateChange"],[3,"value"]],template:function(n,t){if(1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return t.newBooking()}),e.TgZ(1,"div",1)(2,"app-icon",2),e._uU(3,"add"),e.qZA(),e.TgZ(4,"div",3),e._uU(5,"New Booking"),e.qZA()()(),e.TgZ(6,"mat-form-field",4)(7,"mat-select",5),e.NdJ("ngModelChange",function(a){return t.zones=a})("ngModelChange",function(a){return t.updateZones(a)}),e.YNc(8,E,2,2,"mat-option",6),e.ALo(9,"async"),e.qZA()(),e.TgZ(10,"mat-slide-toggle",7),e.NdJ("ngModelChange",function(a){return t.setWeekends(a)}),e.ALo(11,"async"),e.TgZ(12,"div",8),e._uU(13,"Show weekends"),e.qZA()(),e._UZ(14,"div",9),e.TgZ(15,"date-options",10),e.NdJ("dateChange",function(a){return t.setDate(a)}),e.qZA()),2&n){let s;e.xp6(7),e.Q6J("ngModel",t.zones),e.xp6(1),e.Q6J("ngForOf",e.lcZ(9,3,t.levels)),e.xp6(2),e.Q6J("ngModel",null==(s=e.lcZ(11,5,t.options))?null:s.show_weekends)}},dependencies:[c.sg,h.JJ,h.On,P.E,J.KE,U.gD,w.ey,Y.Rr,w.wG,D.o,c.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em}button[_ngcontent-%COMP%]{min-width:0;padding:0 .85rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em;margin-left:1em}"]});var F=i(914),Q=i(3162),T=i(5650),Z=i(895),I=i(2722),N=i(591),z=i(3426),_=i(4850);function L(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",1),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.view(a.event))}),e.TgZ(1,"div",2),e._uU(2),e.qZA(),e.TgZ(3,"div",3),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"div",3),e._uU(7),e.qZA()()}if(2&o){const t=e.oxw();e.Tol("m-2 p-2 bg-white shadow rounded border-2 text-black text-left font-normal "+("done"===(null==t.event?null:t.event.state)?"done":null==t.event?null:t.event.type)),e.xp6(2),e.Oqu(null==t.event?null:t.event.title),e.xp6(2),e.Oqu(e.xi3(5,6,null==t.event?null:t.event.date,"shortTime")),e.xp6(3),e.AsE(" ",null==t.event?null:t.event.attendees.length," Attendee",1===(null==t.event?null:t.event.attendees.length)?"":"s"," ")}}i(9830);class p{constructor(n){this._state=n,this.view=t=>this._state.setEvent(t)}}function B(o,n){1&o&&e._UZ(0,"week-view-event",5),2&o&&e.Q6J("event",n.$implicit)}function j(o,n){if(1&o&&(e.ynx(0),e.YNc(1,B,1,1,"week-view-event",4),e.ALo(2,"async"),e.BQk()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,t.events))}}function R(o,n){1&o&&(e.TgZ(0,"p",6),e._uU(1,"No events"),e.qZA())}p.\u0275fac=function(n){return new(n||p)(e.Y36(f.Y))},p.\u0275cmp=e.Xpm({type:p,selectors:[["week-view-event"]],inputs:{event:"event"},decls:1,vars:1,consts:[["content","","matRipple","",3,"class","click",4,"ngIf"],["content","","matRipple","",3,"click"],[1,"text-base"],[1,"text-sm"]],template:function(n,t){1&n&&e.YNc(0,L,8,9,"div",0),2&n&&e.Q6J("ngIf",t.event)},dependencies:[c.O5,w.wG,c.uU],styles:["button[_ngcontent-%COMP%]{background:none!important;border:none!important}[content][_ngcontent-%COMP%]{width:calc(100% - 1rem)}.done[_ngcontent-%COMP%]{opacity:.5}.done[_ngcontent-%COMP%]:hover{opacity:1}.cancelled[_ngcontent-%COMP%]{border-color:#626262}.external[_ngcontent-%COMP%]{border-color:#d85be0}.internal[_ngcontent-%COMP%]{border-color:#00a4c7}"]});class g{constructor(n){this._state=n,this._index=new N.X(0),this.date=this._state.date.pipe((0,_.U)(t=>(0,T.Z)((0,Z.Z)(t),this.index).valueOf())),this.events=(0,z.aj)([this._state.filtered,this._state.date,this._index]).pipe((0,_.U)(([t,s,a])=>{const l=(0,T.Z)((0,Z.Z)(s),a).valueOf(),q=(0,I.Z)(l).valueOf();return t.filter(y=>(0,C.MZ)(l,q,y.date,y.date+60*y.duration*1e3))}))}ngOnChanges(n){n.index&&this._index.next(this.index)}}function X(o,n){if(1&o&&(e.ynx(0),e._UZ(1,"week-view-day",5),e.BQk()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("index",t)}}function G(o,n){if(1&o&&(e.ynx(0),e.YNc(1,X,2,1,"ng-container",4),e.ALo(2,"async"),e.BQk()),2&o){const t=n.$implicit,s=e.oxw();e.xp6(1),e.Q6J("ngIf",0!==t&&6!==t||e.lcZ(2,1,s.options).show_weekends)}}function S(o,n){1&o&&e._UZ(0,"mat-progress-bar",6)}function $(o,n){if(1&o&&(e._UZ(0,"view-event-details",7),e.ALo(1,"async")),2&o){const t=e.oxw();e.Q6J("event",e.lcZ(1,1,t.event))}}g.\u0275fac=function(n){return new(n||g)(e.Y36(f.Y))},g.\u0275cmp=e.Xpm({type:g,selectors:[["week-view-day"]],inputs:{index:"index"},features:[e.TTD],decls:9,vars:10,consts:[[1,"flex","items-center","justify-center","border-b","border-gray-200","bg-gray-500","w-full","py-3","text-white"],[1,"flex-1","h-1/2","overflow-auto","w-full"],[4,"ngIf","ngIfElse"],["empty_state",""],[3,"event",4,"ngFor","ngForOf"],[3,"event"],[1,"text-center","p-2"]],template:function(n,t){if(1&n&&(e.TgZ(0,"header",0),e._uU(1),e.ALo(2,"date"),e.ALo(3,"async"),e.qZA(),e.TgZ(4,"div",1),e.YNc(5,j,3,3,"ng-container",2),e.ALo(6,"async"),e.qZA(),e.YNc(7,R,2,0,"ng-template",null,3,e.W1O)),2&n){const s=e.MAs(8);let a;e.xp6(1),e.hij(" ",e.xi3(2,3,e.lcZ(3,6,t.date),"EEE, MMM d, y")," "),e.xp6(4),e.Q6J("ngIf",null==(a=e.lcZ(6,8,t.events))?null:a.length)("ngIfElse",s)}},dependencies:[c.sg,c.O5,p,c.Ov,c.uU],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;height:100%}"]});class m{constructor(n){this._state=n,this.weekdays=[0,1,2,3,4,5,6],this.options=this._state.options,this.event=this._state.event,this.loading=this._state.loading}ngOnInit(){this._state.startPolling("week")}ngOnDestroy(){this._state.stopPolling()}}m.\u0275fac=function(n){return new(n||m)(e.Y36(f.Y))},m.\u0275cmp=e.Xpm({type:m,selectors:[["week-view-timeline"]],decls:6,vars:7,consts:[[1,"flex","divide-x","border-gray-400","h-full"],[4,"ngFor","ngForOf"],["mode","indeterminate",4,"ngIf"],[3,"event",4,"ngIf"],[4,"ngIf"],[1,"h-full","flex-1",3,"index"],["mode","indeterminate"],[3,"event"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.YNc(1,G,3,3,"ng-container",1),e.qZA(),e.YNc(2,S,1,0,"mat-progress-bar",2),e.ALo(3,"async"),e.YNc(4,$,2,3,"view-event-details",3),e.ALo(5,"async")),2&n&&(e.xp6(1),e.Q6J("ngForOf",t.weekdays),e.xp6(1),e.Q6J("ngIf",e.lcZ(3,3,t.loading)),e.xp6(2),e.Q6J("ngIf",e.lcZ(5,5,t.event)))},dependencies:[c.sg,c.O5,F.E,Q.pW,g,c.Ov],styles:["[_nghost-%COMP%]{position:relative;height:100%;width:100%;overflow:hidden}"]});class v{}v.\u0275fac=function(n){return new(n||v)},v.\u0275cmp=e.Xpm({type:v,selectors:[["","app-weekview",""]],attrs:["app-weekview",""],decls:4,vars:0,consts:[[1,"relative","overflow-hidden"]],template:function(n,t){1&n&&(e._UZ(0,"sidebar"),e.TgZ(1,"main",0),e._UZ(2,"week-view-topbar")(3,"week-view-timeline"),e.qZA())},dependencies:[W.k,d,m],styles:["[_nghost-%COMP%]{display:flex;height:100%;width:100%;background:var(--bg)}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}"]});const H=[{path:"",component:v}];class r{}r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[c.ez,h.u5,k.v,O.YR,M.PP,u.Bz.forChild(H)]})}}]);