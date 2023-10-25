"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_new-schedule_schedule_module_ts"],{3978:(Le,F,c)=>{c.r(F),c.d(F,{AppScheduleModule:()=>ke});var d=c(6477),g=c(9542),M=c(854),x=c(5763),H=c(3696),f=c(7625),e=c(9445),h=c(5306),Z=c(7728),O=c(7672),T=c(8699);let P=(()=>{class l{constructor(t,n){this._state=t,this._sheet_ref=n,this.filters=this._state.filters,this.toggleType=o=>this._state.toggleType(o),this.dismiss=()=>this._sheet_ref.dismiss()}}return l.\u0275fac=function(t){return new(t||l)(e.Y36(f.I),e.Y36(x.oL))},l.\u0275cmp=e.Xpm({type:l,selectors:[["schedule-filter-card"]],decls:64,vars:42,consts:[[1,"flex","items-center","border-b","border-base-200","space-x-2","mb-4","text-xl"],["icon","","matRipple","",3,"click"],[1,"flex-1","w-1/2","text-center"],[1,"space-y-4","border-b","border-base-200","mb-4","pb-4"],["name","schedule-toggle-event-filter","matRipple","",1,"flex","items-center","space-x-2","w-full","text-left","pr-2",3,"click"],[1,"h-10","w-10","rounded-full","flex","items-center","justify-center","text-2xl"],[1,"flex-1"],[1,""],[1,"text-sm","opacity-60"],[3,"ngModel"],["matRipple","","name","schedule-toggle-desk-filter",1,"flex","items-center","space-x-2","w-full","text-left","pr-2",3,"click"],["src","assets/icons/desk-outline.svg",1,"w-6"],["matRipple","","name","schedule-toggle-parking-filter",1,"flex","items-center","space-x-2","w-full","text-left","pr-2",3,"click"],["matRipple","","name","schedule-toggle-visitor-filter",1,"flex","items-center","space-x-2","w-full","text-left","pr-2",3,"click"],[1,"px-2","pb-2"],["btn","","matRipple","","name","schedule-apply-filter",1,"w-full",3,"click"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return n.dismiss()}),e.TgZ(2,"app-icon"),e._uU(3,"chevron_left"),e.qZA()(),e.TgZ(4,"h2",2),e._uU(5),e.ALo(6,"translate"),e.qZA(),e._UZ(7,"app-icon"),e.qZA(),e.TgZ(8,"div",3)(9,"button",4),e.NdJ("click",function(){return n.toggleType("event")}),e.TgZ(10,"div",5)(11,"app-icon"),e._uU(12,"meeting_room"),e.qZA()(),e.TgZ(13,"div",6)(14,"div",7),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"div",8),e._uU(18),e.ALo(19,"translate"),e.qZA()(),e._UZ(20,"mat-checkbox",9),e.ALo(21,"async"),e.qZA(),e.TgZ(22,"button",10),e.NdJ("click",function(){return n.toggleType("desk")}),e.TgZ(23,"div",5),e._UZ(24,"img",11),e.qZA(),e.TgZ(25,"div",6)(26,"div",7),e._uU(27),e.ALo(28,"translate"),e.qZA(),e.TgZ(29,"div",8),e._uU(30),e.ALo(31,"translate"),e.qZA()(),e._UZ(32,"mat-checkbox",9),e.ALo(33,"async"),e.qZA(),e.TgZ(34,"button",12),e.NdJ("click",function(){return n.toggleType("parking")}),e.TgZ(35,"div",5)(36,"app-icon"),e._uU(37,"drive_eta"),e.qZA()(),e.TgZ(38,"div",6)(39,"div",7),e._uU(40),e.ALo(41,"translate"),e.qZA(),e.TgZ(42,"div",8),e._uU(43),e.ALo(44,"translate"),e.qZA()(),e._UZ(45,"mat-checkbox",9),e.ALo(46,"async"),e.qZA(),e.TgZ(47,"button",13),e.NdJ("click",function(){return n.toggleType("visitor")}),e.TgZ(48,"div",5)(49,"app-icon"),e._uU(50,"people"),e.qZA()(),e.TgZ(51,"div",6)(52,"div",7),e._uU(53),e.ALo(54,"translate"),e.qZA(),e.TgZ(55,"div",8),e._uU(56),e.ALo(57,"translate"),e.qZA()(),e._UZ(58,"mat-checkbox",9),e.ALo(59,"async"),e.qZA()(),e.TgZ(60,"div",14)(61,"button",15),e.NdJ("click",function(){return n.dismiss()}),e._uU(62),e.ALo(63,"translate"),e.qZA()()),2&t){let o,s,a,_;e.xp6(5),e.hij(" ",e.lcZ(6,14,"WPA.BOOKING_TYPES")," "),e.xp6(10),e.Oqu(e.lcZ(16,16,"WPA.ROOM")),e.xp6(3),e.hij(" ",e.lcZ(19,18,"WPA.SCHEULD_ROOM_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(o=e.lcZ(21,20,n.filters))||null==o.shown_types?null:o.shown_types.includes("event")),e.xp6(7),e.Oqu(e.lcZ(28,22,"WPA.DESK")),e.xp6(3),e.hij(" ",e.lcZ(31,24,"WPA.SCHEDULE_DESK_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(s=e.lcZ(33,26,n.filters))||null==s.shown_types?null:s.shown_types.includes("desk")),e.xp6(8),e.Oqu(e.lcZ(41,28,"WPA.PARKING")),e.xp6(3),e.hij(" ",e.lcZ(44,30,"WPA.SCHEDULE_PARKING_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(a=e.lcZ(46,32,n.filters))||null==a.shown_types?null:a.shown_types.includes("parking")),e.xp6(8),e.Oqu(e.lcZ(54,34,"WPA.VISITORS")),e.xp6(3),e.hij(" ",e.lcZ(57,36,"WPA.SCHEDULE_VISITOR_FILTER"),"s "),e.xp6(2),e.Q6J("ngModel",null==(_=e.lcZ(59,38,n.filters))||null==_.shown_types?null:_.shown_types.includes("visitor")),e.xp6(4),e.hij(" ",e.lcZ(63,40,"WPA.FILTERS_APPLY")," ")}},dependencies:[h.o,Z.wG,O.oG,g.JJ,g.On,d.Ov,T.X$],styles:["mat-checkbox[_ngcontent-%COMP%]{pointer-events:none}\n/*# sourceMappingURL=schedule-filter-card.component.ts-angular-inline--126.css.map*/"]}),l})();var u=c(1686);function K(l,i){if(1&l){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",11),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.toggleType("event",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&l&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.ROOMS")))}function Q(l,i){if(1&l){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",12),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.toggleType("desk",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&l&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.DESKS")))}function Y(l,i){if(1&l){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",13),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.toggleType("parking",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&l&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.PARKING")))}function G(l,i){if(1&l){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",14),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.toggleType("visitor",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&l&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.VISITORS")))}function j(l,i){if(1&l){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",15),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.toggleType("locker",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&l&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.LOCKERS")))}function B(l,i){if(1&l){const t=e.EpF();e.TgZ(0,"div",16)(1,"div"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",17),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.toggleType("event",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&l&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.ROOMS")))}function X(l,i){if(1&l){const t=e.EpF();e.TgZ(0,"div",16)(1,"div"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",18),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.toggleType("desk",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&l&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.DESKS")))}function V(l,i){if(1&l){const t=e.EpF();e.TgZ(0,"div",16)(1,"div"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",19),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.toggleType("parking",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&l&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.PARKING")))}function z(l,i){if(1&l){const t=e.EpF();e.TgZ(0,"div",16)(1,"div"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",20),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.toggleType("visitor",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&l&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.VISITORS")))}function ee(l,i){if(1&l){const t=e.EpF();e.TgZ(0,"div",16)(1,"div"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",21),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.toggleType("locker",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&l&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.LOCKERS")))}let w=(()=>{class l{hasFeature(t){return this._settings.get("app.features")?.includes(t)}constructor(t,n,o){this._sheet=t,this._state=n,this._settings=o,this.filters=this._state.filters,this.toggleType=(s,a=!1)=>this._state.toggleType(s,a)}openFilters(){this._sheet.open(P)}}return l.\u0275fac=function(t){return new(t||l)(e.Y36(x.ch),e.Y36(f.I),e.Y36(u.gb))},l.\u0275cmp=e.Xpm({type:l,selectors:[["schedule-filters"]],decls:30,vars:33,consts:[[1,"hidden","sm:block","bg-base-100","border","border-base-200","rounded","p-2"],[1,"font-medium","mb-2"],[1,"flex","flex-wrap","space-x-2"],["class","flex items-center rounded-3xl border border-base-200",4,"ngIf"],[1,"sm:hidden","flex","items-center","space-x-2"],["btn","","matRipple","","name","schedule-open-filter-edit",1,"min-w-0","sm:w-24",3,"click"],[1,"flex","items-center","justify-center","space-x-2"],[1,"text-xl"],["class","flex items-center rounded-3xl border border-base-200 bg-base-100 text-sm pl-2",4,"ngIf"],[1,"flex","items-center","rounded-3xl","border","border-base-200"],[1,"px-2"],["icon","","name","schedule-remove-event-filter",3,"click"],["icon","","name","schedule-remove-desk-filter",3,"click"],["icon","","matRipple","","name","schedule-remove-parking-filter",3,"click"],["icon","","matRipple","","name","schedule-remove-visitor-filter",3,"click"],["icon","","matRipple","","name","schedule-remove-locker-filter",3,"click"],[1,"flex","items-center","rounded-3xl","border","border-base-200","bg-base-100","text-sm","pl-2"],["icon","","name","schedule-remove-event-filter-mobile",3,"click"],["icon","","name","schedule-remove-desk-filter-mobile",3,"click"],["icon","","name","schedule-remove-parking-filter-mobile",3,"click"],["icon","","name","schedule-remove-visitor-filter-mobile",3,"click"],["icon","","name","schedule-remove-locker-filter-mobile",3,"click"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"div",2),e.YNc(5,K,7,3,"div",3),e.ALo(6,"async"),e.YNc(7,Q,7,3,"div",3),e.ALo(8,"async"),e.YNc(9,Y,7,3,"div",3),e.ALo(10,"async"),e.YNc(11,G,7,3,"div",3),e.ALo(12,"async"),e.YNc(13,j,7,3,"div",3),e.ALo(14,"async"),e.qZA()(),e.TgZ(15,"div",4)(16,"button",5),e.NdJ("click",function(){return n.openFilters()}),e.TgZ(17,"div",6)(18,"app-icon",7),e._uU(19,"filter_list"),e.qZA()()(),e.YNc(20,B,7,3,"div",8),e.ALo(21,"async"),e.YNc(22,X,7,3,"div",8),e.ALo(23,"async"),e.YNc(24,V,7,3,"div",8),e.ALo(25,"async"),e.YNc(26,z,7,3,"div",8),e.ALo(27,"async"),e.YNc(28,ee,7,3,"div",8),e.ALo(29,"async"),e.qZA()),2&t){let o,s,a,_,r,p,E,y,k,L;e.xp6(2),e.hij(" ",e.lcZ(3,11,"WPA.SCHEDULE_CAT_FILTERS")," "),e.xp6(3),e.Q6J("ngIf",null==(o=e.lcZ(6,13,n.filters))||null==o.shown_types?null:o.shown_types.includes("event")),e.xp6(2),e.Q6J("ngIf",(null==(s=e.lcZ(8,15,n.filters))||null==s.shown_types?null:s.shown_types.includes("desk"))&&n.hasFeature("desks")),e.xp6(2),e.Q6J("ngIf",(null==(a=e.lcZ(10,17,n.filters))||null==a.shown_types?null:a.shown_types.includes("parking"))&&n.hasFeature("parking")),e.xp6(2),e.Q6J("ngIf",(null==(_=e.lcZ(12,19,n.filters))||null==_.shown_types?null:_.shown_types.includes("visitor"))&&n.hasFeature("visitor-invite")),e.xp6(2),e.Q6J("ngIf",(null==(r=e.lcZ(14,21,n.filters))||null==r.shown_types?null:r.shown_types.includes("locker"))&&n.hasFeature("lockers")),e.xp6(7),e.Q6J("ngIf",null==(p=e.lcZ(21,23,n.filters))||null==p.shown_types?null:p.shown_types.includes("event")),e.xp6(2),e.Q6J("ngIf",(null==(E=e.lcZ(23,25,n.filters))||null==E.shown_types?null:E.shown_types.includes("desk"))&&n.hasFeature("desks")),e.xp6(2),e.Q6J("ngIf",(null==(y=e.lcZ(25,27,n.filters))||null==y.shown_types?null:y.shown_types.includes("parking"))&&n.hasFeature("parking")),e.xp6(2),e.Q6J("ngIf",(null==(k=e.lcZ(27,29,n.filters))||null==k.shown_types?null:k.shown_types.includes("visitor"))&&n.hasFeature("visitor-invite")),e.xp6(2),e.Q6J("ngIf",(null==(L=e.lcZ(29,31,n.filters))||null==L.shown_types?null:L.shown_types.includes("locker"))&&n.hasFeature("lockers"))}},dependencies:[d.O5,h.o,Z.wG,d.Ov,T.X$]}),l})();var te=c(3566);function ne(l,i){if(1&l){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.toggleType("event"))}),e.TgZ(1,"div",11)(2,"app-icon"),e._uU(3,"place"),e.qZA()(),e.TgZ(4,"div",12)(5,"div",13),e._uU(6),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"div",14),e._uU(9),e.ALo(10,"translate"),e.qZA()(),e._UZ(11,"mat-checkbox",15),e.ALo(12,"async"),e.qZA()}if(2&l){const t=e.oxw();let n;e.xp6(6),e.Oqu(e.lcZ(7,3,"WPA.ROOM")),e.xp6(3),e.hij(" ",e.lcZ(10,5,"WPA.SCHEDULE_ROOM_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(n=e.lcZ(12,7,t.filters))||null==n.shown_types?null:n.shown_types.includes("event"))}}function le(l,i){if(1&l){const t=e.EpF();e.TgZ(0,"button",16),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.toggleType("desk"))}),e.TgZ(1,"div",11),e._UZ(2,"img",17),e.qZA(),e.TgZ(3,"div",12)(4,"div",13),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"div",14),e._uU(8),e.ALo(9,"translate"),e.qZA()(),e._UZ(10,"mat-checkbox",15),e.ALo(11,"async"),e.qZA()}if(2&l){const t=e.oxw();let n;e.xp6(5),e.Oqu(e.lcZ(6,3,"WPA.DESK")),e.xp6(3),e.hij(" ",e.lcZ(9,5,"WPA.SCHEDULE_DESK_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(n=e.lcZ(11,7,t.filters))||null==n.shown_types?null:n.shown_types.includes("desk"))}}function oe(l,i){if(1&l){const t=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.toggleType("parking"))}),e.TgZ(1,"div",11)(2,"app-icon"),e._uU(3,"drive_eta"),e.qZA()(),e.TgZ(4,"div",12)(5,"div",13),e._uU(6),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"div",14),e._uU(9),e.ALo(10,"translate"),e.qZA()(),e._UZ(11,"mat-checkbox",15),e.ALo(12,"async"),e.qZA()}if(2&l){const t=e.oxw();let n;e.xp6(6),e.Oqu(e.lcZ(7,3,"WPA.PARKING")),e.xp6(3),e.hij(" ",e.lcZ(10,5,"WPA.SCHEDULE_PARKING_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(n=e.lcZ(12,7,t.filters))||null==n.shown_types?null:n.shown_types.includes("parking"))}}function ie(l,i){if(1&l){const t=e.EpF();e.TgZ(0,"button",19),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.toggleType("visitor"))}),e.TgZ(1,"div",11)(2,"app-icon"),e._uU(3,"people"),e.qZA()(),e.TgZ(4,"div",12)(5,"div",13),e.SDv(6,20),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"div",14),e.SDv(9,21),e.ALo(10,"translate"),e.qZA()(),e._UZ(11,"mat-checkbox",15),e.ALo(12,"async"),e.qZA()}if(2&l){const t=e.oxw();let n;e.xp6(7),e.pQV(e.lcZ(7,3,"WPA.VISITORS")),e.QtT(6),e.xp6(3),e.pQV(e.lcZ(10,5,"WPA.SCHEDULE_VISITOR_FILTER")),e.QtT(9),e.xp6(1),e.Q6J("ngModel",null==(n=e.lcZ(12,7,t.filters))||null==n.shown_types?null:n.shown_types.includes("visitor"))}}function se(l,i){if(1&l){const t=e.EpF();e.TgZ(0,"button",22),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.toggleType("locker"))}),e.TgZ(1,"div",11)(2,"app-icon"),e._uU(3,"door_back"),e.qZA()(),e.TgZ(4,"div",12)(5,"div",13),e.SDv(6,23),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"div",14),e.SDv(9,24),e.ALo(10,"translate"),e.qZA()(),e._UZ(11,"mat-checkbox",15),e.ALo(12,"async"),e.qZA()}if(2&l){const t=e.oxw();let n;e.xp6(7),e.pQV(e.lcZ(7,3,"WPA.LOCKERS")),e.QtT(6),e.xp6(3),e.pQV(e.lcZ(10,5,"WPA.SCHEDULE_LOCKER_FILTER")),e.QtT(9),e.xp6(1),e.Q6J("ngModel",null==(n=e.lcZ(12,7,t.filters))||null==n.shown_types?null:n.shown_types.includes("locker"))}}let U=(()=>{class l{hasFeature(t){return this._settings.get("app.features")?.includes(t)}constructor(t,n){this._state=t,this._settings=n,this.filters=this._state.filters,this.date=this._state.date,this.toggleType=o=>this._state.toggleType(o),this.setDate=o=>this._state.setDate(o)}}return l.\u0275fac=function(t){return new(t||l)(e.Y36(f.I),e.Y36(u.gb))},l.\u0275cmp=e.Xpm({type:l,selectors:[["schedule-sidebar"]],decls:11,vars:8,consts:function(){let i,t,n,o,s;return i=$localize`:␟1298c1d2bbbb7415f5494e800f6775fdb70f4df6␟4163272119298020373:Filters`,t=$localize`:␟59151f596eb603224ad9b858fdf5e3e6dfb3a4dc␟1215297419226013896: ${"\ufffd0\ufffd"}:INTERPOLATION: `,n=$localize`:␟6c8f5c27706957b7df521a06b88ba1df1f7a31e9␟5823422811675104879: ${"\ufffd0\ufffd"}:INTERPOLATION: `,o=$localize`:␟613617f03056b686e8959e951f278e3518947bd7␟2481958659371886477: ${"\ufffd0\ufffd"}:INTERPOLATION: `,s=$localize`:␟6a370310350e3781c551d62b37abc16c1515a657␟8248636682633599470: ${"\ufffd0\ufffd"}:INTERPOLATION: `,[[1,"flex","flex-col","w-[18rem]","h-full","overflow-hidden","bg-base-100[#1F2021]","border-r","border-base-200"],[1,"border-b","border-base-200",3,"ngModel","ngModelChange"],[1,"mx-4","mt-4","font-medium"],i,[1,"p-4","space-y-4"],["matRipple","","name","schedule-toggle-event-filter","class","flex items-center space-x-2 w-full text-left",3,"click",4,"ngIf"],["matRipple","","name","schedule-toggle-desk-filter","class","flex items-center space-x-2 w-full text-left",3,"click",4,"ngIf"],["matRipple","","name","schedule-toggle-parking-filter","class","flex items-center space-x-2 w-full text-left",3,"click",4,"ngIf"],["matRipple","","name","schedule-toggle-visitor-filter","class","flex items-center space-x-2 w-full text-left",3,"click",4,"ngIf"],["matRipple","","name","schedule-toggle-locker-filter","class","flex items-center space-x-2 w-full text-left",3,"click",4,"ngIf"],["matRipple","","name","schedule-toggle-event-filter",1,"flex","items-center","space-x-2","w-full","text-left",3,"click"],[1,"h-10","w-10","rounded-full","flex","items-center","justify-center","bg-base-200","text-2xl"],[1,"flex-1"],[1,""],[1,"text-sm","opacity-60"],[3,"ngModel"],["matRipple","","name","schedule-toggle-desk-filter",1,"flex","items-center","space-x-2","w-full","text-left",3,"click"],["src","assets/icons/desk-outline.svg",1,"w-6"],["matRipple","","name","schedule-toggle-parking-filter",1,"flex","items-center","space-x-2","w-full","text-left",3,"click"],["matRipple","","name","schedule-toggle-visitor-filter",1,"flex","items-center","space-x-2","w-full","text-left",3,"click"],t,n,["matRipple","","name","schedule-toggle-locker-filter",1,"flex","items-center","space-x-2","w-full","text-left",3,"click"],o,s]},template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"date-calendar",1),e.NdJ("ngModelChange",function(s){return n.setDate(s)}),e.ALo(2,"async"),e.qZA(),e.TgZ(3,"h3",2),e.SDv(4,3),e.qZA(),e.TgZ(5,"div",4),e.YNc(6,ne,13,9,"button",5),e.YNc(7,le,12,9,"button",6),e.YNc(8,oe,13,9,"button",7),e.YNc(9,ie,13,9,"button",8),e.YNc(10,se,13,9,"button",9),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("ngModel",e.lcZ(2,6,n.date)),e.xp6(5),e.Q6J("ngIf",n.hasFeature("spaces")),e.xp6(1),e.Q6J("ngIf",n.hasFeature("desks")),e.xp6(1),e.Q6J("ngIf",n.hasFeature("parking")),e.xp6(1),e.Q6J("ngIf",n.hasFeature("visitor-invite")),e.xp6(1),e.Q6J("ngIf",n.hasFeature("lockers")))},dependencies:[d.O5,h.o,Z.wG,O.oG,te.O,g.JJ,g.On,d.Ov,T.X$],styles:["mat-checkbox[_ngcontent-%COMP%]{pointer-events:none}\n/*# sourceMappingURL=schedule-sidebar.component.ts-angular-inline--127.css.map*/"]}),l})();var A=c(1670),b=c(3496),m=c(5915),S=c(5845),N=c(9389),R=c(6942),ce=c(7716),ae=c(7486),re=c(4187),_e=c(6012),de=c(2551),ue=c(4088),pe=c(6297),v=c(9377),ge=c(8053),C=c(8031),I=c(2375),D=c(475),J=c(3470),q=c(312);function me(l,i){if(1&l&&(e.TgZ(0,"div",9),e._uU(1),e.ALo(2,"date"),e.qZA()),2&l){const t=i.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,t.id,"EE")," ")}}function fe(l,i){1&l&&e._UZ(0,"div",12)}function he(l,i){if(1&l){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.setValue(s.id))}),e.YNc(1,fe,1,0,"div",11),e._uU(2),e.ALo(3,"date"),e.qZA()}if(2&l){const t=i.$implicit,n=e.oxw();e.ekj("text-opacity-30",!t.is_month)("text-white",t.id===n.active_date)("text-black",t.id!==n.active_date)("dark:text-white",t.id!==n.active_date)("dark:text-opacity-30",!t.is_month)("bg-primary",t.id===n.active_date)("font-normal",t.id!==n.active_date),e.xp6(1),e.Q6J("ngIf",t.is_today),e.xp6(1),e.hij(" ",e.xi3(3,16,t.id,"d")," ")}}let W=(()=>{class l{constructor(){this.active_date=(0,v.Z)(Date.now()).valueOf(),this.offset=0,this.date_list=[],this.short_list=[],this.show_shortlist=!0,this.registerOnChange=t=>this._onChange=t,this.registerOnTouched=t=>this._onTouch=t}ngOnInit(){this.generateDates()}get list(){return this.show_shortlist?this.short_list:this.date_list}setValue(t){this.active_date=(0,v.Z)(t).valueOf(),this.offset=0,this._onChange&&this._onChange(t)}writeValue(t){this.active_date=(0,v.Z)(t).valueOf(),this.offset=0,this.generateDates()}resetMonth(){this.changeMonth(-this.offset)}changeMonth(t){this.offset+=t,this.generateDates()}generateDates(){const t=(0,ge.Z)(this.active_date,this.offset);let n=(0,C.Z)((0,I.Z)(t));const o=(0,v.Z)(Date.now());let s=[];for(;s.length<42;)s.push({id:n.valueOf(),is_past:(0,D.Z)(n,o),is_month:(0,J.Z)(n,t),is_today:(0,S.Z)(Date.now(),n)}),n=(0,q.Z)(n,1);for(this.date_list=s,n=(0,C.Z)(0===this.offset?t:(0,I.Z)(t)),s=[];s.length<7;)s.push({id:n.valueOf(),is_past:(0,D.Z)(n,o),is_month:(0,J.Z)(n,t),is_today:(0,S.Z)(Date.now(),n)}),n=(0,q.Z)(n,1);this.short_list=s}}return l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["schedule-mobile-calendar"]],features:[e._Bn([{provide:g.JU,useExisting:(0,e.Gpc)(()=>l),multi:!0}])],decls:20,vars:10,consts:[[1,"p-2"],[1,"flex","items-center","justify-between"],["btn","","matRipple","",1,"clear","font-medium",3,"click"],[1,"flex","items-center"],["icon","","matRipple","",3,"click"],[1,"flex","items-center","justify-center","text-sm","mb-2"],["class","opacity-60 text-center w-10 mx-2",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-between","flex-wrap"],["icon","","matRipple","","class","min-w-[calc(14%-1rem)] flex-1 mx-2 h-9 overflow-visible",3,"text-opacity-30","text-white","text-black","dark:text-white","dark:text-opacity-30","bg-primary","font-normal","click",4,"ngFor","ngForOf"],[1,"opacity-60","text-center","w-10","mx-2"],["icon","","matRipple","",1,"min-w-[calc(14%-1rem)]","flex-1","mx-2","h-9","overflow-visible",3,"click"],["class","absolute -inset-0.5 border border-primary rounded-full",4,"ngIf"],[1,"absolute","-inset-0.5","border","border-primary","rounded-full"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return n.resetMonth()}),e._uU(3),e.ALo(4,"date"),e.qZA(),e.TgZ(5,"div",3)(6,"button",4),e.NdJ("click",function(){return n.changeMonth(-1)}),e.TgZ(7,"app-icon"),e._uU(8,"chevron_left"),e.qZA()(),e.TgZ(9,"button",4),e.NdJ("click",function(){return n.changeMonth(1)}),e.TgZ(10,"app-icon"),e._uU(11,"chevron_right"),e.qZA()(),e.TgZ(12,"button",4),e.NdJ("click",function(){return n.show_shortlist=!n.show_shortlist}),e.TgZ(13,"app-icon"),e._uU(14,"arrow_drop_down"),e.qZA()()()(),e.TgZ(15,"div",5),e.YNc(16,me,3,4,"div",6),e.ALo(17,"slice"),e.qZA(),e.TgZ(18,"div",7),e.YNc(19,he,4,19,"button",8),e.qZA()()),2&t&&(e.xp6(3),e.hij(" ",e.xi3(4,3,(null==n.date_list[6]?null:n.date_list[6].id)||n.active_date,"LLLL YYYY")," "),e.xp6(13),e.Q6J("ngForOf",e.Dn7(17,6,n.date_list,0,7)),e.xp6(3),e.Q6J("ngForOf",n.list))},dependencies:[d.sg,d.O5,h.o,Z.wG,d.OU,d.uU]}),l})();function Ze(l,i){1&l&&e._UZ(0,"topbar")}function Te(l,i){1&l&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&l&&(e.xp6(1),e.hij("(",e.lcZ(2,1,"COMMON.TODAY"),")"))}function ve(l,i){if(1&l){const t=e.EpF();e.TgZ(0,"event-card",13),e.NdJ("edit",function(){e.CHM(t);const o=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.edit(o))})("remove",function(o){e.CHM(t);const s=e.oxw().$implicit,a=e.oxw(2);return e.KtG(a.remove(s,o))}),e.qZA()}if(2&l){const t=e.oxw().$implicit;e.Q6J("event",t)}}function xe(l,i){if(1&l){const t=e.EpF();e.TgZ(0,"booking-card",14),e.NdJ("edit",function(){e.CHM(t);const o=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.editBooking(o))})("remove",function(){e.CHM(t);const o=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.remove(o))})("end",function(){e.CHM(t);const o=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.end(o))}),e.qZA()}if(2&l){const t=e.oxw().$implicit;e.Q6J("booking",t)}}function Ae(l,i){if(1&l&&(e.ynx(0),e.YNc(1,ve,1,1,"event-card",11),e.YNc(2,xe,1,1,"ng-template",null,12,e.W1O),e.BQk()),2&l){const t=i.$implicit,n=e.MAs(3),o=e.oxw(2);e.xp6(1),e.Q6J("ngIf",o.isEvent(t))("ngIfElse",n)}}function be(l,i){if(1&l&&(e.ynx(0),e.YNc(1,Ae,4,2,"ng-container",10),e.ALo(2,"async"),e.BQk()),2&l){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,2,t.bookings))("ngForTrackBy",t.trackByFn)}}function Se(l,i){1&l&&e._UZ(0,"mat-progress-bar",15)}function Ce(l,i){1&l&&e._UZ(0,"footer-menu")}function Ee(l,i){if(1&l&&(e.TgZ(0,"div",16),e._UZ(1,"img",17),e.TgZ(2,"p",18),e._uU(3),e.ALo(4,"translate"),e.ALo(5,"date"),e.ALo(6,"async"),e.qZA()()),2&l){const t=e.oxw();e.xp6(3),e.AsE(" ",e.lcZ(4,2,"WPA.SCHEDULE_EMPTY")," ",e.xi3(5,4,e.lcZ(6,7,t.date),"EEEE, dd LLL yyyy")," ")}}const ye=[{path:"",component:(()=>{class l extends u.cx{isEvent(t){return t instanceof m.ym}get hide_nav(){return"true"===localStorage.getItem("PlaceOS.hide_nav")}constructor(t,n,o,s,a,_){super(),this._state=t,this._event_form=n,this._booking_form=o,this._router=s,this._dialog=a,this._settings=_,this.bookings=(0,ce.aj)([this._state.filtered_bookings,this._state.loading]).pipe((0,R.U)(([r,p])=>p?[]:r)),this.date=this._state.date,this.loading=this._state.loading,this.is_today=this.date.pipe((0,R.U)(r=>(0,S.Z)(r,Date.now()))),this.setDate=r=>this._state.setDate(r)}ngOnInit(){this._state.triggerPoll(),this.subscription("poll",this._state.startPolling())}trackByFn(t,n){return n?.id}edit(t){var n=this;return(0,A.Z)(function*(){n._router.navigate(["/book","meeting","form"]),t.creator!==t.mailbox&&(t=(yield(0,m.u$)({period_start:t.event_start,period_end:t.event_end,ical_uid:t.ical_uid}).toPromise()).find(o=>o.ical_uid===t.ical_uid)||t),n._event_form.newForm(t)})()}editBooking(t){this._router.navigate(["/book",`new-${t.type}`]),this._booking_form.newForm(t),setTimeout(()=>{this._booking_form.form.patchValue({resources:[{id:t.asset_id,name:t.asset_name||t.description}],asset_id:t.asset_id})},100)}remove(t,n=!1){var o=this;return(0,A.Z)(function*(){const s=`${(0,N.Z)(t.date,"dd MMM yyyy h:mma")}`,_=`Delete the ${n?"recurring series of ":""}booking for ${t instanceof m.ym?t.space?.display_name:t.asset_name||t.asset_id} at ${s}`,r=yield(0,u._5)({title:"Delete booking",content:_,icon:{content:"delete"}},o._dialog);t instanceof m.ym&&t.creator!==t.mailbox&&(t=(yield(0,m.u$)({period_start:t.event_start,period_end:t.event_end,ical_uid:t.ical_uid}).toPromise()).find(p=>p.ical_uid===t.ical_uid)||t),"done"===r.reason&&(r.loading("Requesting booking deletion..."),yield(t instanceof m.ym?m.xC:b.pv)(n?t.recurring_event_id:t.id,{calendar:o._settings.get("app.no_user_calendar")?null:t.calendar||(0,u.ar)()?.email,system_id:t.system?.id}).toPromise().catch(p=>{throw(0,u.cB)(`Unable to delete booking. ${p}`),r.close(),p}),(0,u.t5)("Successfully deleted booking."),o._state.removeItem(t),o._dialog.closeAll())})()}end(t){var n=this;return(0,A.Z)(function*(){const o=`${(0,N.Z)(t.date,"dd MMM yyyy h:mma")}`,a=`End the booking for ${t.asset_name||t.asset_id} at ${o}`,_=yield(0,u._5)({title:"End booking",content:a,icon:{content:"delete"}},n._dialog);"done"===_.reason&&(_.loading("Ending booking..."),yield(0,b.FD)(t.id,!1).toPromise().catch(r=>{throw(0,u.cB)(`Unable to end booking. ${r}`),_.close(),r}),(0,u.t5)("Successfully ended booking."),n._state.removeItem(t),n._dialog.closeAll())})()}}return l.\u0275fac=function(t){return new(t||l)(e.Y36(f.I),e.Y36(m.MH),e.Y36(b.fy),e.Y36(M.F0),e.Y36(ae.uw),e.Y36(u.gb))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-schedule"]],features:[e.qOj],decls:21,vars:21,consts:[[4,"ngIf"],[1,"flex","flex-col","sm:flex-row","flex-1","h-1/2","bg-base-200","relative"],[1,"hidden","sm:block","bg-base-100"],[1,"w-full","bg-base-100","border-b","border-neutral","sm:hidden"],[3,"ngModel","ngModelChange"],[1,"flex-1","h-full","p-4","overflow-auto","space-y-2"],[1,"font-medium","my-2"],[4,"ngIf","ngIfElse"],["class","absolute inset-x-0 bottom-0","mode","indeterminate",4,"ngIf"],["empty_state",""],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"event","edit","remove",4,"ngIf","ngIfElse"],["booking_card",""],[3,"event","edit","remove"],[3,"booking","edit","remove","end"],["mode","indeterminate",1,"absolute","inset-x-0","bottom-0"],[1,"w-full","p-8","flex","flex-col","items-center","justify-center","space-y-4"],["src","assets/img/no-events.svg",1,"mr-4"],[1,"opacity-30"]],template:function(t,n){if(1&t&&(e.YNc(0,Ze,1,0,"topbar",0),e.TgZ(1,"div",1),e._UZ(2,"schedule-sidebar",2),e.TgZ(3,"div",3)(4,"schedule-mobile-calendar",4),e.NdJ("ngModelChange",function(s){return n.setDate(s)}),e.ALo(5,"async"),e.qZA()(),e.TgZ(6,"div",5),e._UZ(7,"schedule-filters"),e.TgZ(8,"h3",6),e._uU(9),e.ALo(10,"date"),e.ALo(11,"async"),e.YNc(12,Te,3,3,"span",0),e.ALo(13,"async"),e.qZA(),e.YNc(14,be,3,4,"ng-container",7),e.ALo(15,"async"),e.qZA(),e.YNc(16,Se,1,0,"mat-progress-bar",8),e.ALo(17,"async"),e.qZA(),e.YNc(18,Ce,1,0,"footer-menu",0),e.YNc(19,Ee,7,9,"ng-template",null,9,e.W1O)),2&t){const o=e.MAs(20);let s;e.Q6J("ngIf",!n.hide_nav),e.xp6(4),e.Q6J("ngModel",e.lcZ(5,8,n.date)),e.xp6(5),e.hij(" ",e.xi3(10,10,e.lcZ(11,13,n.date),"EEE dd LLL yyyy")," "),e.xp6(3),e.Q6J("ngIf",e.lcZ(13,15,n.is_today)),e.xp6(2),e.Q6J("ngIf",null==(s=e.lcZ(15,17,n.bookings))?null:s.length)("ngIfElse",o),e.xp6(2),e.Q6J("ngIf",e.lcZ(17,19,n.loading)),e.xp6(2),e.Q6J("ngIf",!n.hide_nav)}},dependencies:[d.sg,d.O5,re.o,_e.i,de.j,ue.E,pe.pW,g.JJ,g.On,U,w,W,d.Ov,d.uU,T.X$],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}\n/*# sourceMappingURL=schedule.component.ts-angular-inline--128.css.map*/"]}),l})()},{path:"**",redirectTo:""}];let ke=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[d.ez,H.v,g.u5,x._r,M.Bz.forChild(ye)]}),l})()}}]);
//# sourceMappingURL=apps_workplace_src_app_new-schedule_schedule_module_ts.js.map