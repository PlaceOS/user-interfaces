"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([[720],{4720:(we,P,s)=>{s.r(P),s.d(P,{AppScheduleModule:()=>x});var _=s(6895),d=s(4006),D=s(6581),U=s(8242),$=s(4322),e=s(6353),u=s(8115),J=s(5866),O=s(953),H=s(1998),w=s(833),K=s(8370);function N(o,n){var t,i,l,c,a,r,h,m;(0,w.Z)(1,arguments);var A=(0,K.j)(),k=(0,H.Z)(null!==(t=null!==(i=null!==(l=null!==(c=n?.weekStartsOn)&&void 0!==c?c:null==n||null===(a=n.locale)||void 0===a||null===(r=a.options)||void 0===r?void 0:r.weekStartsOn)&&void 0!==l?l:A.weekStartsOn)&&void 0!==i?i:null===(h=A.locale)||void 0===h||null===(m=h.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==t?t:0);if(!(k>=0&&k<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var E=(0,O.Z)(o),Y=E.getDay(),Ue=(Y<k?7:0)+Y-k;return E.setDate(E.getDate()-Ue),E.setHours(0,0,0,0),E}function q(o){(0,w.Z)(1,arguments);var n=(0,O.Z)(o);return n.setDate(1),n.setHours(0,0,0,0),n}var M=s(4960);function R(o,n){(0,w.Z)(2,arguments);var t=(0,O.Z)(o),i=(0,O.Z)(n);return t.getFullYear()===i.getFullYear()&&t.getMonth()===i.getMonth()}var I=s(5650),S=s(5306),C=s(3238);function Q(o,n){if(1&o&&(e.TgZ(0,"div",9),e._uU(1),e.ALo(2,"date"),e.qZA()),2&o){const t=n.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,t.id,"EE")," ")}}function G(o,n){1&o&&e._UZ(0,"div",12)}function j(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){const c=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.setValue(c.id))}),e._uU(1),e.ALo(2,"date"),e.YNc(3,G,1,0,"div",11),e.qZA()}if(2&o){const t=n.$implicit,i=e.oxw();e.ekj("hover:bg-blue-600",t.id!==i.active_date)("hover:bg-opacity-20",t.id!==i.active_date)("text-opacity-30",!t.is_month)("text-white",t.id===i.active_date)("text-black",t.id!==i.active_date)("dark:text-white",t.id!==i.active_date)("dark:text-opacity-30",!t.is_month)("bg-primary",t.id===i.active_date)("font-normal",t.id!==i.active_date),e.xp6(1),e.hij(" ",e.xi3(2,20,t.id,"d")," "),e.xp6(2),e.Q6J("ngIf",i.today===t.id)}}class p{constructor(){this.active_date=(0,u.Z)(Date.now()).valueOf(),this.today=(0,u.Z)(Date.now()).valueOf(),this.offset=0,this.date_list=[],this.registerOnChange=n=>this._onChange=n,this.registerOnTouched=n=>this._onTouch=n}ngOnInit(){this.generateDates()}setValue(n){this.active_date=(0,u.Z)(n).valueOf(),this.offset=0,this.generateDates(),this._onChange&&this._onChange(n)}writeValue(n){this.active_date=(0,u.Z)(n).valueOf(),this.offset=0,this.generateDates()}changeMonth(n){this.offset+=n,this.generateDates()}generateDates(){const n=(0,J.Z)(this.active_date,this.offset);let t=N(q(n));const i=(0,u.Z)(Date.now()),l=[];for(;l.length<42;)l.push({id:t.valueOf(),is_past:(0,M.Z)(t,i),is_month:R(t,n)}),t=(0,I.Z)(t,1);this.date_list=l}}p.\u0275fac=function(n){return new(n||p)},p.\u0275cmp=e.Xpm({type:p,selectors:[["schedule-calendar"]],features:[e._Bn([{provide:d.JU,useExisting:(0,e.Gpc)(()=>p),multi:!0}])],decls:17,vars:10,consts:[[1,"p-2"],[1,"flex","items-center","justify-between"],[1,"px-2","font-medium"],[1,"flex","items-center"],["icon","","matRipple","",3,"click"],[1,"flex","items-center","text-sm"],["class","flex-1 opacity-60 text-center",4,"ngFor","ngForOf"],[1,"flex","items-center","flex-wrap"],["icon","","class","min-w-[14%] flex-1 relative overflow-visible",3,"hover:bg-blue-600","hover:bg-opacity-20","text-opacity-30","text-white","text-black","dark:text-white","dark:text-opacity-30","bg-primary","font-normal","click",4,"ngFor","ngForOf"],[1,"flex-1","opacity-60","text-center"],["icon","",1,"min-w-[14%]","flex-1","relative","overflow-visible",3,"click"],["class","absolute -inset-[2px] border border-primary rounded-full overflow-hidden","matRipple","",4,"ngIf"],["matRipple","",1,"absolute","-inset-[2px]","border","border-primary","rounded-full","overflow-hidden"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3),e.ALo(4,"date"),e.qZA(),e.TgZ(5,"div",3)(6,"button",4),e.NdJ("click",function(){return t.changeMonth(-1)}),e.TgZ(7,"app-icon"),e._uU(8,"chevron_left"),e.qZA()(),e.TgZ(9,"button",4),e.NdJ("click",function(){return t.changeMonth(1)}),e.TgZ(10,"app-icon"),e._uU(11,"chevron_right"),e.qZA()()()(),e.TgZ(12,"div",5),e.YNc(13,Q,3,4,"div",6),e.ALo(14,"slice"),e.qZA(),e.TgZ(15,"div",7),e.YNc(16,j,4,23,"button",8),e.qZA()()),2&n&&(e.xp6(3),e.hij(" ",e.xi3(4,3,(null==t.date_list[6]?null:t.date_list[6].id)||t.active_date,"LLLL")," "),e.xp6(10),e.Q6J("ngForOf",e.Dn7(14,6,t.date_list,0,7)),e.xp6(3),e.Q6J("ngForOf",t.date_list))},dependencies:[_.sg,_.O5,S.o,C.wG,_.OU,_.uU]});var F=s(1966),W=s(6709),L=s(9383);class f{constructor(n,t){this._state=n,this._sheet_ref=t,this.filters=this._state.filters,this.toggleType=i=>this._state.toggleType(i),this.dismiss=()=>this._sheet_ref.dismiss()}}f.\u0275fac=function(n){return new(n||f)(e.Y36(F.I),e.Y36(U.oL))},f.\u0275cmp=e.Xpm({type:f,selectors:[["schedule-filter-card"]],decls:64,vars:42,consts:[[1,"flex","items-center","border-b","border-gray-300","dark:bg-neutral-700","space-x-2","mb-4"],["icon","",3,"click"],[1,"flex-1","w-1/2","text-center","font-medium"],[1,"space-y-4","border-b","border-gray-300","mb-4","pb-4","dark:bg-neutral-700"],["matRipple","",1,"flex","items-center","space-x-2","w-full","text-left","pr-2",3,"click"],[1,"h-10","w-10","rounded-full","flex","items-center","justify-center","text-2xl"],[1,"flex-1"],[1,""],[1,"text-sm","opacity-60"],[3,"ngModel"],["src","assets/icons/desk-outline.svg",1,"w-6"],[1,"px-2","pb-2"],["btn","","matRipple","",1,"w-full",3,"click"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return t.dismiss()}),e.TgZ(2,"app-icon"),e._uU(3,"chevron_left"),e.qZA()(),e.TgZ(4,"h2",2),e._uU(5),e.ALo(6,"translate"),e.qZA(),e._UZ(7,"app-icon"),e.qZA(),e.TgZ(8,"div",3)(9,"button",4),e.NdJ("click",function(){return t.toggleType("event")}),e.TgZ(10,"div",5)(11,"app-icon"),e._uU(12,"meeting_room"),e.qZA()(),e.TgZ(13,"div",6)(14,"div",7),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"div",8),e._uU(18),e.ALo(19,"translate"),e.qZA()(),e._UZ(20,"mat-checkbox",9),e.ALo(21,"async"),e.qZA(),e.TgZ(22,"button",4),e.NdJ("click",function(){return t.toggleType("desk")}),e.TgZ(23,"div",5),e._UZ(24,"img",10),e.qZA(),e.TgZ(25,"div",6)(26,"div",7),e._uU(27),e.ALo(28,"translate"),e.qZA(),e.TgZ(29,"div",8),e._uU(30),e.ALo(31,"translate"),e.qZA()(),e._UZ(32,"mat-checkbox",9),e.ALo(33,"async"),e.qZA(),e.TgZ(34,"button",4),e.NdJ("click",function(){return t.toggleType("parking")}),e.TgZ(35,"div",5)(36,"app-icon"),e._uU(37,"drive_eta"),e.qZA()(),e.TgZ(38,"div",6)(39,"div",7),e._uU(40),e.ALo(41,"translate"),e.qZA(),e.TgZ(42,"div",8),e._uU(43),e.ALo(44,"translate"),e.qZA()(),e._UZ(45,"mat-checkbox",9),e.ALo(46,"async"),e.qZA(),e.TgZ(47,"button",4),e.NdJ("click",function(){return t.toggleType("visitor")}),e.TgZ(48,"div",5)(49,"app-icon"),e._uU(50,"people"),e.qZA()(),e.TgZ(51,"div",6)(52,"div",7),e._uU(53),e.ALo(54,"translate"),e.qZA(),e.TgZ(55,"div",8),e._uU(56),e.ALo(57,"translate"),e.qZA()(),e._UZ(58,"mat-checkbox",9),e.ALo(59,"async"),e.qZA()(),e.TgZ(60,"div",11)(61,"button",12),e.NdJ("click",function(){return t.dismiss()}),e._uU(62),e.ALo(63,"translate"),e.qZA()()),2&n){let i,l,c,a;e.xp6(5),e.hij(" ",e.lcZ(6,14,"WPA.BOOKING_TYPES")," "),e.xp6(10),e.Oqu(e.lcZ(16,16,"WPA.ROOM")),e.xp6(3),e.hij(" ",e.lcZ(19,18,"WPA.SCHEULD_ROOM_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(i=e.lcZ(21,20,t.filters))||null==i.shown_types?null:i.shown_types.includes("event")),e.xp6(7),e.Oqu(e.lcZ(28,22,"WPA.DESK")),e.xp6(3),e.hij(" ",e.lcZ(31,24,"WPA.SCHEDULE_DESK_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(l=e.lcZ(33,26,t.filters))||null==l.shown_types?null:l.shown_types.includes("desk")),e.xp6(8),e.Oqu(e.lcZ(41,28,"WPA.PARKING")),e.xp6(3),e.hij(" ",e.lcZ(44,30,"WPA.SCHEDULE_PARKING_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(c=e.lcZ(46,32,t.filters))||null==c.shown_types?null:c.shown_types.includes("parking")),e.xp6(8),e.Oqu(e.lcZ(54,34,"WPA.VISITORS")),e.xp6(3),e.hij(" ",e.lcZ(57,36,"WPA.SCHEDULE_VISITOR_FILTER"),"s "),e.xp6(2),e.Q6J("ngModel",null==(a=e.lcZ(59,38,t.filters))||null==a.shown_types?null:a.shown_types.includes("visitor")),e.xp6(4),e.hij(" ",e.lcZ(63,40,"WPA.FILTERS_APPLY")," ")}},dependencies:[S.o,C.wG,W.oG,d.JJ,d.On,_.Ov,L.X$],styles:["mat-checkbox[_ngcontent-%COMP%]{pointer-events:none}"]});var b=s(8368);function B(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",11),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.toggleType("event",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&o&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.ROOMS")))}function V(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",11),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.toggleType("desk",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&o&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.DESKS")))}function X(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",12),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.toggleType("parking",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&o&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.PARKING")))}function z(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",12),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.toggleType("visitor",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&o&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.VISITORS")))}function ee(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",13)(1,"div"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",11),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.toggleType("event",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&o&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.ROOMS")))}function te(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",13)(1,"div"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",11),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.toggleType("desk",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&o&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.DESKS")))}function ne(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",13)(1,"div"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",11),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.toggleType("parking",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&o&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.PARKING")))}function oe(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",13)(1,"div"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",11),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.toggleType("visitor",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&o&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.VISITORS")))}class v{constructor(n,t,i){this._sheet=n,this._state=t,this._settings=i,this.filters=this._state.filters,this.toggleType=(l,c=!1)=>this._state.toggleType(l,c)}hasFeature(n){return this._settings.get("app.features")?.includes(n)}openFilters(){this._sheet.open(f)}}function ie(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.toggleType("event"))}),e.TgZ(1,"div",7)(2,"app-icon"),e._uU(3,"meeting_room"),e.qZA()(),e.TgZ(4,"div",8)(5,"div",9),e._uU(6),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"div",10),e._uU(9),e.ALo(10,"translate"),e.qZA()(),e._UZ(11,"mat-checkbox",11),e.ALo(12,"async"),e.qZA()}if(2&o){const t=e.oxw();let i;e.xp6(6),e.Oqu(e.lcZ(7,3,"WPA.ROOM")),e.xp6(3),e.hij(" ",e.lcZ(10,5,"WPA.SCHEDULE_ROOM_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(i=e.lcZ(12,7,t.filters))||null==i.shown_types?null:i.shown_types.includes("event"))}}function le(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.toggleType("desk"))}),e.TgZ(1,"div",7),e._UZ(2,"img",12),e.qZA(),e.TgZ(3,"div",8)(4,"div",9),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"div",10),e._uU(8),e.ALo(9,"translate"),e.qZA()(),e._UZ(10,"mat-checkbox",11),e.ALo(11,"async"),e.qZA()}if(2&o){const t=e.oxw();let i;e.xp6(5),e.Oqu(e.lcZ(6,3,"WPA.DESK")),e.xp6(3),e.hij(" ",e.lcZ(9,5,"WPA.SCHEDULE_DESK_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(i=e.lcZ(11,7,t.filters))||null==i.shown_types?null:i.shown_types.includes("desk"))}}function se(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.toggleType("parking"))}),e.TgZ(1,"div",7)(2,"app-icon"),e._uU(3,"drive_eta"),e.qZA()(),e.TgZ(4,"div",8)(5,"div",9),e._uU(6),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"div",10),e._uU(9),e.ALo(10,"translate"),e.qZA()(),e._UZ(11,"mat-checkbox",11),e.ALo(12,"async"),e.qZA()}if(2&o){const t=e.oxw();let i;e.xp6(6),e.Oqu(e.lcZ(7,3,"WPA.PARKING")),e.xp6(3),e.hij(" ",e.lcZ(10,5,"WPA.SCHEDULE_PARKING_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(i=e.lcZ(12,7,t.filters))||null==i.shown_types?null:i.shown_types.includes("parking"))}}function ce(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.toggleType("visitor"))}),e.TgZ(1,"div",7)(2,"app-icon"),e._uU(3,"people"),e.qZA()(),e.TgZ(4,"div",8)(5,"div",9),e.SDv(6,13),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"div",10),e.SDv(9,14),e.ALo(10,"translate"),e.qZA()(),e._UZ(11,"mat-checkbox",11),e.ALo(12,"async"),e.qZA()}if(2&o){const t=e.oxw();let i;e.xp6(7),e.pQV(e.lcZ(7,3,"WPA.VISITORS")),e.QtT(6),e.xp6(3),e.pQV(e.lcZ(10,5,"WPA.SCHEDULE_VISITOR_FILTER")),e.QtT(9),e.xp6(1),e.Q6J("ngModel",null==(i=e.lcZ(12,7,t.filters))||null==i.shown_types?null:i.shown_types.includes("visitor"))}}v.\u0275fac=function(n){return new(n||v)(e.Y36(U.ch),e.Y36(F.I),e.Y36(b.gb))},v.\u0275cmp=e.Xpm({type:v,selectors:[["schedule-filters"]],decls:26,vars:27,consts:[[1,"hidden","sm:block","bg-white","dark:bg-neutral-800","border","border-gray-300","rounded","p-2"],[1,"font-medium","mb-2"],[1,"flex","flex-wrap","space-x-2"],["class","flex items-center rounded-3xl border border-gray-300",4,"ngIf"],[1,"sm:hidden","flex","items-center","space-x-2"],["btn","","matRipple","",1,"min-w-0","sm:w-24",3,"click"],[1,"flex","items-center","justify-center","space-x-2"],[1,"text-xl"],["class","flex items-center rounded-3xl border border-gray-300 bg-white dark:bg-neutral-700 text-sm pl-2",4,"ngIf"],[1,"flex","items-center","rounded-3xl","border","border-gray-300"],[1,"px-2"],["icon","",3,"click"],["icon","","matRipple","",3,"click"],[1,"flex","items-center","rounded-3xl","border","border-gray-300","bg-white","dark:bg-neutral-700","text-sm","pl-2"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"div",2),e.YNc(5,B,7,3,"div",3),e.ALo(6,"async"),e.YNc(7,V,7,3,"div",3),e.ALo(8,"async"),e.YNc(9,X,7,3,"div",3),e.ALo(10,"async"),e.YNc(11,z,7,3,"div",3),e.ALo(12,"async"),e.qZA()(),e.TgZ(13,"div",4)(14,"button",5),e.NdJ("click",function(){return t.openFilters()}),e.TgZ(15,"div",6)(16,"app-icon",7),e._uU(17,"filter_list"),e.qZA()()(),e.YNc(18,ee,7,3,"div",8),e.ALo(19,"async"),e.YNc(20,te,7,3,"div",8),e.ALo(21,"async"),e.YNc(22,ne,7,3,"div",8),e.ALo(23,"async"),e.YNc(24,oe,7,3,"div",8),e.ALo(25,"async"),e.qZA()),2&n){let i,l,c,a,r,h,m,A;e.xp6(2),e.hij(" ",e.lcZ(3,9,"WPA.SCHEDULE_CAT_FILTERS")," "),e.xp6(3),e.Q6J("ngIf",null==(i=e.lcZ(6,11,t.filters))||null==i.shown_types?null:i.shown_types.includes("event")),e.xp6(2),e.Q6J("ngIf",(null==(l=e.lcZ(8,13,t.filters))||null==l.shown_types?null:l.shown_types.includes("desk"))&&t.hasFeature("desks")),e.xp6(2),e.Q6J("ngIf",(null==(c=e.lcZ(10,15,t.filters))||null==c.shown_types?null:c.shown_types.includes("parking"))&&t.hasFeature("parking")),e.xp6(2),e.Q6J("ngIf",(null==(a=e.lcZ(12,17,t.filters))||null==a.shown_types?null:a.shown_types.includes("visitor"))&&t.hasFeature("visitor-invite")),e.xp6(7),e.Q6J("ngIf",null==(r=e.lcZ(19,19,t.filters))||null==r.shown_types?null:r.shown_types.includes("event")),e.xp6(2),e.Q6J("ngIf",(null==(h=e.lcZ(21,21,t.filters))||null==h.shown_types?null:h.shown_types.includes("desk"))&&t.hasFeature("desks")),e.xp6(2),e.Q6J("ngIf",(null==(m=e.lcZ(23,23,t.filters))||null==m.shown_types?null:m.shown_types.includes("parking"))&&t.hasFeature("parking")),e.xp6(2),e.Q6J("ngIf",(null==(A=e.lcZ(25,25,t.filters))||null==A.shown_types?null:A.shown_types.includes("visitor"))&&t.hasFeature("visitor-invite"))}},dependencies:[_.O5,S.o,C.wG,_.Ov,L.X$]});class Z{constructor(n,t){this._state=n,this._settings=t,this.filters=this._state.filters,this.date=this._state.date,this.toggleType=i=>this._state.toggleType(i),this.setDate=i=>this._state.setDate(i)}hasFeature(n){return this._settings.get("app.features")?.includes(n)}}Z.\u0275fac=function(n){return new(n||Z)(e.Y36(F.I),e.Y36(b.gb))},Z.\u0275cmp=e.Xpm({type:Z,selectors:[["schedule-sidebar"]],decls:10,vars:7,consts:function(){let o,n,t;return o=$localize`:␟1298c1d2bbbb7415f5494e800f6775fdb70f4df6␟4163272119298020373:Filters`,n=$localize`:␟59151f596eb603224ad9b858fdf5e3e6dfb3a4dc␟1215297419226013896: ${"\ufffd0\ufffd"}:INTERPOLATION: `,t=$localize`:␟6c8f5c27706957b7df521a06b88ba1df1f7a31e9␟5823422811675104879: ${"\ufffd0\ufffd"}:INTERPOLATION: `,[[1,"flex","flex-col","w-[18rem]","h-full","overflow-hidden","bg-white","dark:bg-[#1F2021]","border-r","border-gray-300","dark:border-neutral-800"],[1,"border-b","border-gray-200","dark:border-neutral-800",3,"ngModel","ngModelChange"],[1,"mx-4","mt-4","font-medium"],o,[1,"p-4","space-y-4"],["matRipple","","class","flex items-center space-x-2 w-full text-left",3,"click",4,"ngIf"],["matRipple","",1,"flex","items-center","space-x-2","w-full","text-left",3,"click"],[1,"h-10","w-10","rounded-full","flex","items-center","justify-center","bg-gray-200","dark:bg-neutral-800","text-2xl"],[1,"flex-1"],[1,""],[1,"text-sm","opacity-60"],[3,"ngModel"],["src","assets/icons/desk-outline.svg",1,"w-6"],n,t]},template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"schedule-calendar",1),e.NdJ("ngModelChange",function(l){return t.setDate(l)}),e.ALo(2,"async"),e.qZA(),e.TgZ(3,"h3",2),e.SDv(4,3),e.qZA(),e.TgZ(5,"div",4),e.YNc(6,ie,13,9,"button",5),e.YNc(7,le,12,9,"button",5),e.YNc(8,se,13,9,"button",5),e.YNc(9,ce,13,9,"button",5),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("ngModel",e.lcZ(2,5,t.date)),e.xp6(5),e.Q6J("ngIf",t.hasFeature("spaces")),e.xp6(1),e.Q6J("ngIf",t.hasFeature("desks")),e.xp6(1),e.Q6J("ngIf",t.hasFeature("parking")),e.xp6(1),e.Q6J("ngIf",t.hasFeature("visitor-invite")))},dependencies:[_.O5,S.o,C.wG,W.oG,d.JJ,d.On,p,_.Ov,L.X$],styles:["mat-checkbox[_ngcontent-%COMP%]{pointer-events:none}"]});var ae=s(9671),_e=s(9638),y=s(1299),re=s(2641),de=s(6308),ue=s(4850),pe=s(6325),ge=s(4187),he=s(6012),me=s(2551),fe=s(4088),ve=s(3162);function Ze(o,n){if(1&o&&(e.TgZ(0,"div",7),e._uU(1),e.ALo(2,"date"),e.qZA()),2&o){const t=n.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,t.id,"EE")," ")}}function Te(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"button",8),e.NdJ("click",function(){const c=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.setValue(c.id))}),e._uU(1),e.ALo(2,"date"),e.qZA()}if(2&o){const t=n.$implicit,i=e.oxw();e.ekj("text-opacity-30",!t.is_month)("text-primary",t.id===i.active_date)("text-black",t.id!==i.active_date)("dark:text-white",t.id!==i.active_date)("dark:text-opacity-30",!t.is_month)("bg-gray-200",t.id===i.active_date)("font-normal",t.id!==i.active_date),e.xp6(1),e.hij(" ",e.xi3(2,15,t.id,"d")," ")}}class g{constructor(){this.active_date=(0,u.Z)(Date.now()).valueOf(),this.offset=0,this.date_list=[],this.short_list=[],this.show_shortlist=!0,this.registerOnChange=n=>this._onChange=n,this.registerOnTouched=n=>this._onTouch=n}ngOnInit(){this.generateDates()}get list(){return this.show_shortlist?this.short_list:this.date_list}setValue(n){this.active_date=(0,u.Z)(n).valueOf(),this.offset=0,this._onChange&&this._onChange(n)}writeValue(n){this.active_date=(0,u.Z)(n).valueOf(),this.offset=0,this.generateDates()}changeMonth(n){this.offset+=n,this.generateDates()}generateDates(){const n=(0,J.Z)(this.active_date,this.offset);let t=N(q(n));const i=(0,u.Z)(Date.now());let l=[];for(;l.length<42;)l.push({id:t.valueOf(),is_past:(0,M.Z)(t,i),is_month:R(t,n)}),t=(0,I.Z)(t,1);for(this.date_list=l,t=N(n),l=[];l.length<7;)l.push({id:t.valueOf(),is_past:(0,M.Z)(t,i),is_month:R(t,n)}),t=(0,I.Z)(t,1);this.short_list=l}}function xe(o,n){1&o&&e._UZ(0,"topbar")}function Ae(o,n){1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.xp6(1),e.hij("(",e.lcZ(2,1,"COMMON.TODAY"),")"))}function Se(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"event-card",13),e.NdJ("edit",function(){e.CHM(t);const l=e.oxw().$implicit,c=e.oxw(2);return e.KtG(c.edit(l))})("remove",function(){e.CHM(t);const l=e.oxw().$implicit,c=e.oxw(2);return e.KtG(c.remove(l))}),e.qZA()}if(2&o){const t=e.oxw().$implicit;e.Q6J("event",t)}}function Ce(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"booking-card",14),e.NdJ("remove",function(){e.CHM(t);const l=e.oxw().$implicit,c=e.oxw(2);return e.KtG(c.remove(l))}),e.qZA()}if(2&o){const t=e.oxw().$implicit;e.Q6J("booking",t)}}function be(o,n){if(1&o&&(e.ynx(0),e.YNc(1,Se,1,1,"event-card",11),e.YNc(2,Ce,1,1,"ng-template",null,12,e.W1O),e.BQk()),2&o){const t=n.$implicit,i=e.MAs(3),l=e.oxw(2);e.xp6(1),e.Q6J("ngIf",l.isEvent(t))("ngIfElse",i)}}g.\u0275fac=function(n){return new(n||g)},g.\u0275cmp=e.Xpm({type:g,selectors:[["schedule-mobile-calendar"]],features:[e._Bn([{provide:d.JU,useExisting:(0,e.Gpc)(()=>g),multi:!0}])],decls:12,vars:10,consts:[[1,"p-2"],["matRipple","",1,"flex","items-center","w-full","p-2",3,"click"],[1,"px-2","font-medium"],[1,"flex","items-center","justify-center","text-sm","mb-2"],["class","opacity-60 text-center w-10 mx-2",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-between","flex-wrap"],["icon","","matRipple","","class","min-w-[calc(14%-1rem)] flex-1 mx-2",3,"text-opacity-30","text-primary","text-black","dark:text-white","dark:text-opacity-30","bg-gray-200","font-normal","click",4,"ngFor","ngForOf"],[1,"opacity-60","text-center","w-10","mx-2"],["icon","","matRipple","",1,"min-w-[calc(14%-1rem)]","flex-1","mx-2",3,"click"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return t.show_shortlist=!t.show_shortlist}),e.TgZ(2,"div",2),e._uU(3),e.ALo(4,"date"),e.qZA(),e.TgZ(5,"app-icon"),e._uU(6,"arrow_drop_down"),e.qZA()(),e.TgZ(7,"div",3),e.YNc(8,Ze,3,4,"div",4),e.ALo(9,"slice"),e.qZA(),e.TgZ(10,"div",5),e.YNc(11,Te,3,18,"button",6),e.qZA()()),2&n&&(e.xp6(3),e.hij(" ",e.xi3(4,3,(null==t.date_list[6]?null:t.date_list[6].id)||t.active_date,"LLLL")," "),e.xp6(5),e.Q6J("ngForOf",e.Dn7(9,6,t.date_list,0,7)),e.xp6(3),e.Q6J("ngForOf",t.list))},dependencies:[_.sg,S.o,C.wG,_.OU,_.uU]});const ye=function(){return[]};function Ee(o,n){if(1&o&&(e.ynx(0),e.YNc(1,be,4,2,"ng-container",10),e.ALo(2,"async"),e.ALo(3,"async"),e.BQk()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,2,t.loading)?e.DdM(6,ye):e.lcZ(3,4,t.bookings))("ngForTrackBy",t.trackByFn)}}function Oe(o,n){1&o&&e._UZ(0,"mat-progress-bar",15)}function Fe(o,n){1&o&&e._UZ(0,"footer-menu")}function Le(o,n){if(1&o&&(e.TgZ(0,"div",16),e._UZ(1,"img",17),e.TgZ(2,"p",18),e._uU(3),e.ALo(4,"translate"),e.ALo(5,"date"),e.ALo(6,"async"),e.qZA()()),2&o){const t=e.oxw();e.xp6(3),e.AsE(" ",e.lcZ(4,2,"WPA.SCHEDULE_EMPTY")," ",e.xi3(5,4,e.lcZ(6,7,t.date),"EEEE, dd LLL yyyy")," ")}}class T{constructor(n,t,i,l){this._state=n,this._event_form=t,this._router=i,this._dialog=l,this.bookings=this._state.filtered_bookings,this.date=this._state.date,this.loading=this._state.loading,this.is_today=this.date.pipe((0,ue.U)(c=>(0,re.Z)(c,Date.now()))),this.setDate=c=>this._state.setDate(c)}isEvent(n){return n instanceof y.ym}get hide_nav(){return"true"===localStorage.getItem("PlaceOS.hide_nav")}trackByFn(n,t){return t?.id}edit(n){this._router.navigate(["/book","meeting","form"]),this._event_form.newForm(n)}remove(n){var t=this;return(0,ae.Z)(function*(){const i=`${(0,de.Z)(n.date,"dd MMM yyyy h:mma")}`,c=`Delete the booking for ${n instanceof y.ym?n.space?.display_name:n.asset_name||n.asset_id} at ${i}`,a=yield(0,b._5)({title:"Delete booking",content:c,icon:{content:"delete"}},t._dialog);"done"===a.reason&&(a.loading("Requesting booking deletion..."),yield(n instanceof y.ym?y.xC:_e.pv)(n.id).toPromise().catch(r=>{throw(0,b.cB)(`Unable to delete booking. ${r}`),a.close(),r}),(0,b.t5)("Successfully deleted booking."),t._state.removeItem(n),t._dialog.closeAll())})()}}T.\u0275fac=function(n){return new(n||T)(e.Y36(F.I),e.Y36(y.MH),e.Y36(D.F0),e.Y36(pe.uw))},T.\u0275cmp=e.Xpm({type:T,selectors:[["app-schedule"]],decls:21,vars:21,consts:[[4,"ngIf"],[1,"flex","flex-col","sm:flex-row","flex-1","h-1/2","bg-[#F8F8FA]","dark:bg-neutral-900","relative"],[1,"hidden","sm:block"],[1,"w-full","bg-white","dark:bg-[#1F2021]","border-b","border-gray-300","sm:hidden"],[3,"ngModel","ngModelChange"],[1,"flex-1","h-full","p-4","overflow-auto","space-y-2"],[1,"font-medium","my-2"],[4,"ngIf","ngIfElse"],["class","absolute inset-x-0 bottom-0","mode","indeterminate",4,"ngIf"],["empty_state",""],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"event","edit","remove",4,"ngIf","ngIfElse"],["booking_card",""],[3,"event","edit","remove"],[3,"booking","remove"],["mode","indeterminate",1,"absolute","inset-x-0","bottom-0"],[1,"w-full","p-8","flex","flex-col","items-center","justify-center","space-y-4"],["src","assets/img/no-events.svg",1,"mr-4"],[1,"opacity-30"]],template:function(n,t){if(1&n&&(e.YNc(0,xe,1,0,"topbar",0),e.TgZ(1,"div",1),e._UZ(2,"schedule-sidebar",2),e.TgZ(3,"div",3)(4,"schedule-mobile-calendar",4),e.NdJ("ngModelChange",function(l){return t.setDate(l)}),e.ALo(5,"async"),e.qZA()(),e.TgZ(6,"div",5),e._UZ(7,"schedule-filters"),e.TgZ(8,"h3",6),e._uU(9),e.ALo(10,"date"),e.ALo(11,"async"),e.YNc(12,Ae,3,3,"span",0),e.ALo(13,"async"),e.qZA(),e.YNc(14,Ee,4,7,"ng-container",7),e.ALo(15,"async"),e.qZA(),e.YNc(16,Oe,1,0,"mat-progress-bar",8),e.ALo(17,"async"),e.qZA(),e.YNc(18,Fe,1,0,"footer-menu",0),e.YNc(19,Le,7,9,"ng-template",null,9,e.W1O)),2&n){const i=e.MAs(20);let l;e.Q6J("ngIf",!t.hide_nav),e.xp6(4),e.Q6J("ngModel",e.lcZ(5,8,t.date)),e.xp6(5),e.hij(" ",e.xi3(10,10,e.lcZ(11,13,t.date),"EEE dd LLL yyyy")," "),e.xp6(3),e.Q6J("ngIf",e.lcZ(13,15,t.is_today)),e.xp6(2),e.Q6J("ngIf",null==(l=e.lcZ(15,17,t.bookings))?null:l.length)("ngIfElse",i),e.xp6(2),e.Q6J("ngIf",e.lcZ(17,19,t.loading)),e.xp6(2),e.Q6J("ngIf",!t.hide_nav)}},dependencies:[_.sg,_.O5,ge.o,he.i,me.j,fe.E,ve.pW,d.JJ,d.On,Z,v,g,_.Ov,_.uU,L.X$],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}"]});const ke=[{path:"",component:T},{path:"**",redirectTo:""}];class x{}x.\u0275fac=function(n){return new(n||x)},x.\u0275mod=e.oAB({type:x}),x.\u0275inj=e.cJS({imports:[_.ez,$.v,d.u5,U._r,D.Bz.forChild(ke)]})}}]);