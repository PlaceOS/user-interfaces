(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{v5ts:function(e,t,n){"use strict";n.r(t),n.d(t,"DayViewModule",function(){return T});var i=n("SVse"),s=n("s7LF"),o=n("iInd"),c=n("URK9"),a=n("EE6m"),l=n("qdGH"),r=n("8Y7J"),d=n("ORrl"),b=n("mrSG"),u=n("SxV6"),h=n("grfs"),g=n("lRLz"),f=n("InVF"),p=n("Dxy4"),v=n("z03u"),m=n("Q2Ze"),w=n("ZTz/"),_=n("jMqV"),y=n("jfXU"),O=n("UhP/");function x(e,t){if(1&e&&(r.Xb(0,"mat-option",11),r.Nc(1),r.Wb()),2&e){const e=t.$implicit;r.tc("value",e.id),r.Fb(1),r.Pc(" ",e.display_name||e.name," ")}}const k=function(){return{class:"material-icons",content:"add"}};let M=(()=>{class e extends h.b{constructor(e,t,n,i){super(),this._state=e,this._org=t,this._route=n,this._router=i,this.zones=[],this.levels=this._org.active_levels,this.options=this._state.options,this.setDate=e=>this._state.setDate(e),this.setWeekends=e=>this._state.setUIOptions({show_weekends:e}),this.newBooking=e=>this._state.newBooking(e),this.updateZones=e=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:e.join(",")}}),this._state.setZones(e)}}ngOnInit(){return Object(b.a)(this,void 0,void 0,function*(){yield this._org.initialised.pipe(Object(u.a)(e=>e)).toPromise(),this.subscription("route.query",this._route.queryParamMap.subscribe(e=>{if(e.has("zone_ids")){const t=e.get("zone_ids").split(",");if(t.length){const e=this._org.levelWithID(t);if(!e)return;this._org.building=this._org.buildings.find(t=>t.id===e.parent_id),this.zones=t}}})),this.subscription("levels",this._org.active_levels.subscribe(e=>{this.zones=this.zones.filter(t=>e.find(e=>e.id===t)),!this.zones.length&&e.length&&this.zones.push(e[0].id),this.updateZones(this.zones)}))})}}return e.\u0275fac=function(t){return new(t||e)(r.Rb(g.a),r.Rb(f.c),r.Rb(o.a),r.Rb(o.d))},e.\u0275cmp=r.Lb({type:e,selectors:[["week-view-topbar"]],features:[r.Cb],decls:15,vars:9,consts:[["mat-button","",1,"w-12","xl:w-auto",3,"click"],[1,"flex","items-center"],[1,"mr-2",3,"icon"],[1,"hidden","xl:block"],["appearance","outline"],["multiple","","placeholder","All Levels",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"m-2",3,"ngModel","ngModelChange"],[1,"text-xs"],[1,"flex-1","w-0"],[3,"dateChange"],[3,"value"]],template:function(e,t){if(1&e&&(r.Xb(0,"button",0),r.ic("click",function(){return t.newBooking()}),r.Xb(1,"div",1),r.Sb(2,"app-icon",2),r.Xb(3,"div",3),r.Nc(4,"New Booking"),r.Wb(),r.Wb(),r.Wb(),r.Xb(5,"mat-form-field",4),r.Xb(6,"mat-select",5),r.ic("ngModelChange",function(e){return t.zones=e})("ngModelChange",function(e){return t.updateZones(e)}),r.Lc(7,x,2,2,"mat-option",6),r.nc(8,"async"),r.Wb(),r.Wb(),r.Xb(9,"mat-slide-toggle",7),r.ic("ngModelChange",function(e){return t.setWeekends(e)}),r.nc(10,"async"),r.Xb(11,"div",8),r.Nc(12,"Show weekends"),r.Wb(),r.Wb(),r.Sb(13,"div",9),r.Xb(14,"date-options",10),r.ic("dateChange",function(e){return t.setDate(e)}),r.Wb()),2&e){let e=null;r.Fb(2),r.tc("icon",r.uc(8,k)),r.Fb(4),r.tc("ngModel",t.zones),r.Fb(1),r.tc("ngForOf",r.oc(8,4,t.levels)),r.Fb(2),r.tc("ngModel",null==(e=r.oc(10,6,t.options))?null:e.show_weekends)}},directives:[p.b,v.a,m.c,w.a,s.l,s.o,i.m,_.a,y.a,O.l],pipes:[i.b],styles:["[_nghost-%COMP%] {\n                display: flex;\n                align-items: center;\n                background-color: #fff;\n                height: 5em;\n                padding: 0 1em;\n            }\n\n            button[_ngcontent-%COMP%] {\n                min-width: 0;\n                padding: 0 .85rem;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n                margin-left: 1em;\n            }"]}),e})();var F=n("9/EM"),C=n("aetl"),P=n("piIK"),W=n("2Vo4"),X=n("itXk"),I=n("lJxs");let j=(()=>{class e{constructor(e){this._state=e,this.view=e=>this._state.setEvent(e)}}return e.\u0275fac=function(t){return new(t||e)(r.Rb(g.a))},e.\u0275cmp=r.Lb({type:e,selectors:[["week-view-event"]],inputs:{event:"event"},decls:8,vars:9,consts:[["content","","matRipple","",3,"click"],[1,"text-base"],[1,"text-sm"]],template:function(e,t){1&e&&(r.Xb(0,"div",0),r.ic("click",function(){return t.view(t.event)}),r.Xb(1,"div",1),r.Nc(2),r.Wb(),r.Xb(3,"div",2),r.Nc(4),r.nc(5,"date"),r.Wb(),r.Xb(6,"div",2),r.Nc(7),r.Wb(),r.Wb()),2&e&&(r.Hb("m-2 p-2 bg-white shadow rounded border-2 text-black text-left font-normal "+("done"===t.event.state?"done":null==t.event?null:t.event.type)),r.Fb(2),r.Oc(null==t.event?null:t.event.title),r.Fb(2),r.Oc(r.pc(5,6,null==t.event?null:t.event.date,"shortTime")),r.Fb(3),r.Qc(" ",null==t.event?null:t.event.attendees.length," Attendee",1===(null==t.event?null:t.event.attendees.length)?"":"s"," "))},directives:[O.o],pipes:[i.f],styles:["button[_ngcontent-%COMP%] {\n                background: none !important;\n                border: none !important;\n            }\n\n            [content][_ngcontent-%COMP%] {\n                width: calc(100% - 1rem);\n            }\n\n            .done[_ngcontent-%COMP%] {\n                opacity: 0.5;\n            }\n\n            .done[_ngcontent-%COMP%]:hover {\n                opacity: 1;\n            }\n\n            .cancelled[_ngcontent-%COMP%] {\n                border-color: #626262;\n            }\n\n            .external[_ngcontent-%COMP%] {\n                border-color: #d85be0;\n            }\n\n            .internal[_ngcontent-%COMP%] {\n                border-color: #00a4c7;\n            }"]}),e})();function L(e,t){1&e&&r.Sb(0,"week-view-event",5),2&e&&r.tc("event",t.$implicit)}function z(e,t){if(1&e&&(r.Vb(0),r.Lc(1,L,1,1,"week-view-event",4),r.nc(2,"async"),r.Ub()),2&e){const e=r.mc();r.Fb(1),r.tc("ngForOf",r.oc(2,1,e.events))}}function S(e,t){1&e&&(r.Xb(0,"p",6),r.Nc(1,"No events"),r.Wb())}let R=(()=>{class e{constructor(e){this._state=e,this._index=new W.a(0),this.date=this._state.date.pipe(Object(I.a)(e=>Object(F.a)(Object(C.a)(e),this.index).valueOf())),this.events=Object(X.a)([this._state.filtered_week,this._state.date,this._index]).pipe(Object(I.a)(e=>{const[t,n,i]=e,s=Object(F.a)(Object(C.a)(n),i).valueOf(),o=Object(P.a)(s).valueOf();return t.filter(e=>Object(h.x)(s,o,e.date,e.date+60*e.duration*1e3))}))}ngOnChanges(e){e.index&&this._index.next(this.index)}}return e.\u0275fac=function(t){return new(t||e)(r.Rb(g.a))},e.\u0275cmp=r.Lb({type:e,selectors:[["week-view-day"]],inputs:{index:"index"},features:[r.Db],decls:9,vars:10,consts:[[1,"flex","items-center","justify-center","border-b","border-gray-200","bg-gray-500","w-full","py-3","text-white"],[1,"flex-1","h-1/2","overflow-auto","w-full"],[4,"ngIf","ngIfElse"],["empty_state",""],[3,"event",4,"ngFor","ngForOf"],[3,"event"],[1,"text-center","p-2"]],template:function(e,t){if(1&e&&(r.Xb(0,"header",0),r.Nc(1),r.nc(2,"date"),r.nc(3,"async"),r.Wb(),r.Xb(4,"div",1),r.Lc(5,z,3,3,"ng-container",2),r.nc(6,"async"),r.Wb(),r.Lc(7,S,2,0,"ng-template",null,3,r.Mc)),2&e){const e=r.yc(8);let n=null;r.Fb(1),r.Pc(" ",r.pc(2,3,r.oc(3,6,t.date),"EEE, MMM d, y")," "),r.Fb(4),r.tc("ngIf",null==(n=r.oc(6,8,t.events))?null:n.length)("ngIfElse",e)}},directives:[i.n,i.m,j],pipes:[i.f,i.b],styles:["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                height: 100%;\n            }"]}),e})();var N=n("BTe0"),E=n("vliC");function V(e,t){if(1&e&&(r.Vb(0),r.Sb(1,"week-view-day",5),r.Ub()),2&e){const e=r.mc().$implicit;r.Fb(1),r.tc("index",e)}}function D(e,t){if(1&e&&(r.Vb(0),r.Lc(1,V,2,1,"ng-container",4),r.nc(2,"async"),r.Ub()),2&e){const e=t.$implicit,n=r.mc();r.Fb(1),r.tc("ngIf",0!==e&&6!==e||r.oc(2,1,n.options).show_weekends)}}function U(e,t){1&e&&r.Sb(0,"mat-progress-bar",6)}function Z(e,t){if(1&e&&(r.Sb(0,"view-event-details",7),r.nc(1,"async")),2&e){const e=r.mc();r.tc("event",r.oc(1,1,e.event))}}let q=(()=>{class e{constructor(e){this._state=e,this.weekdays=[0,1,2,3,4,5,6],this.options=this._state.options,this.event=this._state.event,this.loading=this._state.loading}ngOnInit(){this._state.startPollingWeek()}ngOnDestroy(){this._state.stopPolling()}}return e.\u0275fac=function(t){return new(t||e)(r.Rb(g.a))},e.\u0275cmp=r.Lb({type:e,selectors:[["week-view-timeline"]],decls:6,vars:7,consts:[[1,"flex","divide-x","border-gray-400","h-full"],[4,"ngFor","ngForOf"],["mode","indeterminate",4,"ngIf"],[3,"event",4,"ngIf"],[4,"ngIf"],[1,"h-full","flex-1",3,"index"],["mode","indeterminate"],[3,"event"]],template:function(e,t){1&e&&(r.Xb(0,"div",0),r.Lc(1,D,3,3,"ng-container",1),r.Wb(),r.Lc(2,U,1,0,"mat-progress-bar",2),r.nc(3,"async"),r.Lc(4,Z,2,3,"view-event-details",3),r.nc(5,"async")),2&e&&(r.Fb(1),r.tc("ngForOf",t.weekdays),r.Fb(1),r.tc("ngIf",r.oc(3,3,t.loading)),r.Fb(2),r.tc("ngIf",r.oc(5,5,t.event)))},directives:[i.m,i.n,R,N.a,E.a],pipes:[i.b],styles:["[_nghost-%COMP%] {\n                position: relative;\n                height: 100%;\n                width: 100%;\n                overflow: hidden;\n            }"]}),e})();const B=["app-weekview",""],J=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Lb({type:e,selectors:[["","app-weekview",""]],attrs:B,decls:4,vars:0,consts:[[1,"relative","overflow-hidden"]],template:function(e,t){1&e&&(r.Sb(0,"sidebar"),r.Xb(1,"main",0),r.Sb(2,"week-view-topbar"),r.Sb(3,"week-view-timeline"),r.Wb())},directives:[d.a,M,q],styles:["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n                background: var(--bg);\n            }\n\n            sidebar[_ngcontent-%COMP%] {\n                height: 100%;\n            }\n\n            main[_ngcontent-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                flex: 1;\n                min-width: 50%;\n                height: 100%;\n            }"]}),e})()}];let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Pb({type:e}),e.\u0275inj=r.Ob({imports:[[i.c,s.h,c.a,a.a,l.c,o.g.forChild(J)]]}),e})()}}]);
//# sourceMappingURL=week-view-week-view-module.js.map