(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([["apps_concierge_src_app_week-view_week-view_module_ts"],{4010:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DayViewModule:()=>W});var i=n(1511),s=n(6073),o=n(6898),l=n(787),a=n(7209),r=n(4587),c=n(2619),d=n(1490),u=n(4762),g=n(3530),p=n(6687),h=n(7731),v=n(1496),f=n(5980),_=n(1548),w=n(6283),m=n(4786),Z=n(7521),x=n(1521),y=n(1522);function k(e,t){if(1&e&&(c.TgZ(0,"mat-option",11),c._uU(1),c.qZA()),2&e){const e=t.$implicit;c.Q6J("value",e.id),c.xp6(1),c.hij(" ",e.display_name||e.name," ")}}let O=(()=>{class e extends p.KG{constructor(e,t,n,i){super(),this._state=e,this._org=t,this._route=n,this._router=i,this.zones=[],this.levels=this._org.active_levels,this.options=this._state.options,this.setDate=e=>this._state.setDate(e),this.setWeekends=e=>this._state.setUIOptions({show_weekends:e}),this.newBooking=e=>this._state.newBooking(e),this.updateZones=e=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:e.join(",")}}),this._state.setZones(e)}}ngOnInit(){return(0,u.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,g.P)(e=>e)).toPromise(),this.subscription("route.query",this._route.queryParamMap.subscribe(e=>{if(e.has("zone_ids")){const t=e.get("zone_ids").split(",");if(t.length){const e=this._org.levelWithID(t);if(this.zones=t,!e)return;this._org.building=this._org.buildings.find(t=>t.id===e.parent_id)}}})),this.subscription("levels",this._org.active_levels.subscribe(e=>{this.zones=this.zones.filter(t=>e.find(e=>e.id===t)),!this.zones.length&&e.length&&this.zones.push(e[0].id),this.updateZones(this.zones)}))})}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(h.Y),c.Y36(v.w7),c.Y36(o.gz),c.Y36(o.F0))},e.\u0275cmp=c.Xpm({type:e,selectors:[["week-view-topbar"]],features:[c.qOj],decls:16,vars:7,consts:[["mat-button","","new","",1,"w-12","xl:w-auto",3,"click"],[1,"flex","items-center"],[1,"mr-2"],[1,"hidden","xl:block"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[1,"flex-1","w-0"],[3,"dateChange"],[3,"value"]],template:function(e,t){if(1&e&&(c.TgZ(0,"button",0),c.NdJ("click",function(){return t.newBooking()}),c.TgZ(1,"div",1),c.TgZ(2,"app-icon",2),c._uU(3,"add"),c.qZA(),c.TgZ(4,"div",3),c._uU(5,"New Booking"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(6,"mat-form-field",4),c.TgZ(7,"mat-select",5),c.NdJ("ngModelChange",function(e){return t.zones=e})("ngModelChange",function(e){return t.updateZones(e)}),c.YNc(8,k,2,2,"mat-option",6),c.ALo(9,"async"),c.qZA(),c.qZA(),c.TgZ(10,"mat-slide-toggle",7),c.NdJ("ngModelChange",function(e){return t.setWeekends(e)}),c.ALo(11,"async"),c.TgZ(12,"div",8),c._uU(13,"Show weekends"),c.qZA(),c.qZA(),c._UZ(14,"div",9),c.TgZ(15,"date-options",10),c.NdJ("dateChange",function(e){return t.setDate(e)}),c.qZA()),2&e){let e;c.xp6(7),c.Q6J("ngModel",t.zones),c.xp6(1),c.Q6J("ngForOf",c.lcZ(9,3,t.levels)),c.xp6(2),c.Q6J("ngModel",null==(e=c.lcZ(11,5,t.options))?null:e.show_weekends)}},directives:[f.lW,_.o,w.KE,m.gD,s.JJ,s.On,i.sg,Z.Rr,x.E,y.ey],pipes:[i.Ov],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;height:5em;padding:0 1em}button[_ngcontent-%COMP%]{min-width:0;padding:0 .85rem}mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em;margin-left:1em}"]}),e})();var b=n(3848),A=n(2324),M=n(8125),C=n(8512),q=n(3080),P=n(9996);let T=(()=>{class e{constructor(e){this._state=e,this.view=e=>this._state.setEvent(e)}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(h.Y))},e.\u0275cmp=c.Xpm({type:e,selectors:[["week-view-event"]],inputs:{event:"event"},decls:8,vars:9,consts:[["content","","matRipple","",3,"click"],[1,"text-base"],[1,"text-sm"]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c.NdJ("click",function(){return t.view(t.event)}),c.TgZ(1,"div",1),c._uU(2),c.qZA(),c.TgZ(3,"div",2),c._uU(4),c.ALo(5,"date"),c.qZA(),c.TgZ(6,"div",2),c._uU(7),c.qZA(),c.qZA()),2&e&&(c.Tol("m-2 p-2 bg-white shadow rounded border-2 text-black text-left font-normal "+("done"===(null==t.event?null:t.event.state)?"done":null==t.event?null:t.event.type)),c.xp6(2),c.Oqu(null==t.event?null:t.event.title),c.xp6(2),c.Oqu(c.xi3(5,6,null==t.event?null:t.event.date,"shortTime")),c.xp6(3),c.AsE(" ",null==t.event?null:t.event.attendees.length," Attendee",1===(null==t.event?null:t.event.attendees.length)?"":"s"," "))},directives:[y.wG],pipes:[i.uU],styles:["button[_ngcontent-%COMP%]{background:none!important;border:none!important}[content][_ngcontent-%COMP%]{width:calc(100% - 1rem)}.done[_ngcontent-%COMP%]{opacity:.5}.done[_ngcontent-%COMP%]:hover{opacity:1}.cancelled[_ngcontent-%COMP%]{border-color:#626262}.external[_ngcontent-%COMP%]{border-color:#d85be0}.internal[_ngcontent-%COMP%]{border-color:#00a4c7}"]}),e})();function U(e,t){1&e&&c._UZ(0,"week-view-event",5),2&e&&c.Q6J("event",t.$implicit)}function J(e,t){if(1&e&&(c.ynx(0),c.YNc(1,U,1,1,"week-view-event",4),c.ALo(2,"async"),c.BQk()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("ngForOf",c.lcZ(2,1,e.events))}}function Y(e,t){1&e&&(c.TgZ(0,"p",6),c._uU(1,"No events"),c.qZA())}let Q=(()=>{class e{constructor(e){this._state=e,this._index=new C.X(0),this.date=this._state.date.pipe((0,P.U)(e=>(0,b.Z)((0,A.Z)(e),this.index).valueOf())),this.events=(0,q.aj)([this._state.filtered,this._state.date,this._index]).pipe((0,P.U)(([e,t,n])=>{const i=(0,b.Z)((0,A.Z)(t),n).valueOf(),s=(0,M.Z)(i).valueOf();return e.filter(e=>(0,p.MZ)(i,s,e.date,e.date+60*e.duration*1e3))}))}ngOnChanges(e){e.index&&this._index.next(this.index)}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(h.Y))},e.\u0275cmp=c.Xpm({type:e,selectors:[["week-view-day"]],inputs:{index:"index"},features:[c.TTD],decls:9,vars:10,consts:[[1,"flex","items-center","justify-center","border-b","border-gray-200","bg-gray-500","w-full","py-3","text-white"],[1,"flex-1","h-1/2","overflow-auto","w-full"],[4,"ngIf","ngIfElse"],["empty_state",""],[3,"event",4,"ngFor","ngForOf"],[3,"event"],[1,"text-center","p-2"]],template:function(e,t){if(1&e&&(c.TgZ(0,"header",0),c._uU(1),c.ALo(2,"date"),c.ALo(3,"async"),c.qZA(),c.TgZ(4,"div",1),c.YNc(5,J,3,3,"ng-container",2),c.ALo(6,"async"),c.qZA(),c.YNc(7,Y,2,0,"ng-template",null,3,c.W1O)),2&e){const e=c.MAs(8);let n;c.xp6(1),c.hij(" ",c.xi3(2,3,c.lcZ(3,6,t.date),"EEE, MMM d, y")," "),c.xp6(4),c.Q6J("ngIf",null==(n=c.lcZ(6,8,t.events))?null:n.length)("ngIfElse",e)}},directives:[i.O5,i.sg,T],pipes:[i.uU,i.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;height:100%}"]}),e})();var z=n(5994),N=n(9055);function I(e,t){if(1&e&&(c.ynx(0),c._UZ(1,"week-view-day",5),c.BQk()),2&e){const e=c.oxw().$implicit;c.xp6(1),c.Q6J("index",e)}}function L(e,t){if(1&e&&(c.ynx(0),c.YNc(1,I,2,1,"ng-container",4),c.ALo(2,"async"),c.BQk()),2&e){const e=t.$implicit,n=c.oxw();c.xp6(1),c.Q6J("ngIf",0!==e&&6!==e||c.lcZ(2,1,n.options).show_weekends)}}function E(e,t){1&e&&c._UZ(0,"mat-progress-bar",6)}function F(e,t){if(1&e&&(c._UZ(0,"view-event-details",7),c.ALo(1,"async")),2&e){const e=c.oxw();c.Q6J("event",c.lcZ(1,1,e.event))}}let B=(()=>{class e{constructor(e){this._state=e,this.weekdays=[0,1,2,3,4,5,6],this.options=this._state.options,this.event=this._state.event,this.loading=this._state.loading}ngOnInit(){this._state.startPolling("week")}ngOnDestroy(){this._state.stopPolling()}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(h.Y))},e.\u0275cmp=c.Xpm({type:e,selectors:[["week-view-timeline"]],decls:6,vars:7,consts:[[1,"flex","divide-x","border-gray-400","h-full"],[4,"ngFor","ngForOf"],["mode","indeterminate",4,"ngIf"],[3,"event",4,"ngIf"],[4,"ngIf"],[1,"h-full","flex-1",3,"index"],["mode","indeterminate"],[3,"event"]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c.YNc(1,L,3,3,"ng-container",1),c.qZA(),c.YNc(2,E,1,0,"mat-progress-bar",2),c.ALo(3,"async"),c.YNc(4,F,2,3,"view-event-details",3),c.ALo(5,"async")),2&e&&(c.xp6(1),c.Q6J("ngForOf",t.weekdays),c.xp6(1),c.Q6J("ngIf",c.lcZ(3,3,t.loading)),c.xp6(2),c.Q6J("ngIf",c.lcZ(5,5,t.event)))},directives:[i.sg,i.O5,Q,z.pW,N.E],pipes:[i.Ov],styles:["[_nghost-%COMP%]{position:relative;height:100%;width:100%;overflow:hidden}"]}),e})();const D=["app-weekview",""],j=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["","app-weekview",""]],attrs:D,decls:4,vars:0,consts:[[1,"relative","overflow-hidden"]],template:function(e,t){1&e&&(c._UZ(0,"sidebar"),c.TgZ(1,"main",0),c._UZ(2,"week-view-topbar"),c._UZ(3,"week-view-timeline"),c.qZA())},directives:[d.k,O,B],styles:["[_nghost-%COMP%]{display:flex;width:100%;background:var(--bg)}[_nghost-%COMP%], main[_ngcontent-%COMP%], sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%}"]}),e})()}];let W=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[i.ez,s.u5,l.v,a.YR,r.PP,o.Bz.forChild(j)]]}),e})()}}]);
//# sourceMappingURL=apps_concierge_src_app_week-view_week-view_module_ts.js.map