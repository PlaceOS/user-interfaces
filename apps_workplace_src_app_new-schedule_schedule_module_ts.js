"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_new-schedule_schedule_module_ts"],{9836:(we,w,c)=>{c.r(w),c.d(w,{AppScheduleModule:()=>ke});var r=c(2954),u=c(3557),U=c(465),b=c(3722),H=c(8147),e=c(9523),p=c(3841),M=c(5277),Z=c(3537),Q=c(9354),y=c(9014),Y=c(6659);function E(o,i){var t,n,l,s,a,d,_,g;(0,y.Z)(1,arguments);var m=(0,Y.j)(),S=(0,Q.Z)(null!==(t=null!==(n=null!==(l=null!==(s=i?.weekStartsOn)&&void 0!==s?s:null==i||null===(a=i.locale)||void 0===a||null===(d=a.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==l?l:m.weekStartsOn)&&void 0!==n?n:null===(_=m.locale)||void 0===_||null===(g=_.options)||void 0===g?void 0:g.weekStartsOn)&&void 0!==t?t:0);if(!(S>=0&&S<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=(0,Z.Z)(o),$=v.getDay(),Oe=($<S?7:0)+$-S;return v.setDate(v.getDate()-Oe),v.setHours(0,0,0,0),v}function N(o){(0,y.Z)(1,arguments);var i=(0,Z.Z)(o);return i.setDate(1),i.setHours(0,0,0,0),i}var L=c(586);function F(o,i){(0,y.Z)(2,arguments);var t=(0,Z.Z)(o),n=(0,Z.Z)(i);return t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()}var k=c(5868),h=c(5306),x=c(5432);function G(o,i){if(1&o&&(e.TgZ(0,"div",9),e._uU(1),e.ALo(2,"date"),e.qZA()),2&o){const t=i.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,t.id,"EE")," ")}}function K(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.setValue(s.id))}),e._uU(1),e.ALo(2,"date"),e.qZA()}if(2&o){const t=i.$implicit,n=e.oxw();e.ekj("text-opacity-30",!t.is_month)("text-primary",t.id===n.active_date)("text-black",t.id!==n.active_date)("dark:text-white",t.id!==n.active_date)("dark:text-opacity-30",!t.is_month)("bg-gray-200",t.id===n.active_date)("font-normal",t.id!==n.active_date),e.xp6(1),e.hij(" ",e.xi3(2,15,t.id,"d")," ")}}let I=(()=>{class o{constructor(){this.active_date=(0,p.Z)(Date.now()).valueOf(),this.offset=0,this.date_list=[],this.registerOnChange=t=>this._onChange=t,this.registerOnTouched=t=>this._onTouch=t}ngOnInit(){this.generateDates()}setValue(t){this.active_date=(0,p.Z)(t).valueOf(),this.offset=0,this._onChange&&this._onChange(t)}writeValue(t){this.active_date=(0,p.Z)(t).valueOf(),this.offset=0,this.generateDates()}changeMonth(t){this.offset+=t,this.generateDates()}generateDates(){const t=(0,M.Z)(this.active_date,this.offset);let n=E(N(t));const l=(0,p.Z)(Date.now()),s=[];for(;s.length<42;)s.push({id:n.valueOf(),is_past:(0,L.Z)(n,l),is_month:F(n,t)}),n=(0,k.Z)(n,1);this.date_list=s}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["schedule-calendar"]],features:[e._Bn([{provide:u.JU,useExisting:(0,e.Gpc)(()=>o),multi:!0}])],decls:17,vars:10,consts:[[1,"p-2"],[1,"flex","items-center","justify-between"],[1,"px-2","font-medium"],[1,""],["mat-icon-button","",3,"click"],[1,"flex","items-center","text-sm"],["class","flex-1 opacity-60 text-center",4,"ngFor","ngForOf"],[1,"flex","items-center","flex-wrap"],["mat-icon-button","","class","min-w-[14%] flex-1",3,"text-opacity-30","text-primary","text-black","dark:text-white","dark:text-opacity-30","bg-gray-200","font-normal","click",4,"ngFor","ngForOf"],[1,"flex-1","opacity-60","text-center"],["mat-icon-button","",1,"min-w-[14%]","flex-1",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3),e.ALo(4,"date"),e.qZA(),e.TgZ(5,"div",3)(6,"button",4),e.NdJ("click",function(){return n.changeMonth(-1)}),e.TgZ(7,"app-icon"),e._uU(8,"chevron_left"),e.qZA()(),e.TgZ(9,"button",4),e.NdJ("click",function(){return n.changeMonth(1)}),e.TgZ(10,"app-icon"),e._uU(11,"chevron_right"),e.qZA()()()(),e.TgZ(12,"div",5),e.YNc(13,G,3,4,"div",6),e.ALo(14,"slice"),e.qZA(),e.TgZ(15,"div",7),e.YNc(16,K,3,18,"button",8),e.qZA()()),2&t&&(e.xp6(3),e.hij(" ",e.xi3(4,3,(null==n.date_list[6]?null:n.date_list[6].id)||n.active_date,"LLLL")," "),e.xp6(10),e.Q6J("ngForOf",e.Dn7(14,6,n.date_list,0,7)),e.xp6(3),e.Q6J("ngForOf",n.date_list))},dependencies:[r.sg,h.o,x.lW,r.OU,r.uU]}),o})();var T=c(7625),O=c(4626),P=c(9383),A=c(1547);let D=(()=>{class o{constructor(t,n){this._state=t,this._sheet_ref=n,this.filters=this._state.filters,this.toggleType=l=>this._state.toggleType(l),this.dismiss=()=>this._sheet_ref.dismiss()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(T.I),e.Y36(b.oL))},o.\u0275cmp=e.Xpm({type:o,selectors:[["schedule-filter-card"]],decls:64,vars:42,consts:[[1,"flex","items-center","border-b","border-gray-300","dark:bg-neutral-700","space-x-2","mb-4"],["mat-icon-button","",3,"click"],[1,"flex-1","w-1/2","text-center","font-medium"],[1,"space-y-4","border-b","border-gray-300","mb-4","pb-4","dark:bg-neutral-700"],["matRipple","",1,"flex","items-center","space-x-2","w-full","text-left","pr-2",3,"click"],[1,"h-10","w-10","rounded-full","flex","items-center","justify-center","text-2xl"],[1,"flex-1"],[1,""],[1,"text-sm","opacity-60"],[3,"ngModel"],["src","assets/icons/desk-outline.svg",1,"w-6"],[1,"px-2","pb-2"],["mat-button","",1,"w-full",3,"click"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return n.dismiss()}),e.TgZ(2,"app-icon"),e._uU(3,"chevron_left"),e.qZA()(),e.TgZ(4,"h2",2),e._uU(5),e.ALo(6,"translate"),e.qZA(),e._UZ(7,"app-icon"),e.qZA(),e.TgZ(8,"div",3)(9,"button",4),e.NdJ("click",function(){return n.toggleType("event")}),e.TgZ(10,"div",5)(11,"app-icon"),e._uU(12,"meeting_room"),e.qZA()(),e.TgZ(13,"div",6)(14,"div",7),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"div",8),e._uU(18),e.ALo(19,"translate"),e.qZA()(),e._UZ(20,"mat-checkbox",9),e.ALo(21,"async"),e.qZA(),e.TgZ(22,"button",4),e.NdJ("click",function(){return n.toggleType("desk")}),e.TgZ(23,"div",5),e._UZ(24,"img",10),e.qZA(),e.TgZ(25,"div",6)(26,"div",7),e._uU(27),e.ALo(28,"translate"),e.qZA(),e.TgZ(29,"div",8),e._uU(30),e.ALo(31,"translate"),e.qZA()(),e._UZ(32,"mat-checkbox",9),e.ALo(33,"async"),e.qZA(),e.TgZ(34,"button",4),e.NdJ("click",function(){return n.toggleType("parking")}),e.TgZ(35,"div",5)(36,"app-icon"),e._uU(37,"drive_eta"),e.qZA()(),e.TgZ(38,"div",6)(39,"div",7),e._uU(40),e.ALo(41,"translate"),e.qZA(),e.TgZ(42,"div",8),e._uU(43),e.ALo(44,"translate"),e.qZA()(),e._UZ(45,"mat-checkbox",9),e.ALo(46,"async"),e.qZA(),e.TgZ(47,"button",4),e.NdJ("click",function(){return n.toggleType("visitor")}),e.TgZ(48,"div",5)(49,"app-icon"),e._uU(50,"people"),e.qZA()(),e.TgZ(51,"div",6)(52,"div",7),e._uU(53),e.ALo(54,"translate"),e.qZA(),e.TgZ(55,"div",8),e._uU(56),e.ALo(57,"translate"),e.qZA()(),e._UZ(58,"mat-checkbox",9),e.ALo(59,"async"),e.qZA()(),e.TgZ(60,"div",11)(61,"button",12),e.NdJ("click",function(){return n.dismiss()}),e._uU(62),e.ALo(63,"translate"),e.qZA()()),2&t){let l,s,a,d;e.xp6(5),e.hij(" ",e.lcZ(6,14,"WPA.BOOKING_TYPES")," "),e.xp6(10),e.Oqu(e.lcZ(16,16,"WPA.ROOM")),e.xp6(3),e.hij(" ",e.lcZ(19,18,"WPA.SCHEULD_ROOM_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(l=e.lcZ(21,20,n.filters))||null==l.shown_types?null:l.shown_types.includes("event")),e.xp6(7),e.Oqu(e.lcZ(28,22,"WPA.DESK")),e.xp6(3),e.hij(" ",e.lcZ(31,24,"WPA.SCHEDULE_DESK_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(s=e.lcZ(33,26,n.filters))||null==s.shown_types?null:s.shown_types.includes("desk")),e.xp6(8),e.Oqu(e.lcZ(41,28,"WPA.PARKING")),e.xp6(3),e.hij(" ",e.lcZ(44,30,"WPA.SCHEDULE_PARKING_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(a=e.lcZ(46,32,n.filters))||null==a.shown_types?null:a.shown_types.includes("parking")),e.xp6(8),e.Oqu(e.lcZ(54,34,"WPA.VISITORS")),e.xp6(3),e.hij(" ",e.lcZ(57,36,"WPA.SCHEDULE_VISITOR_FILTER"),"s "),e.xp6(2),e.Q6J("ngModel",null==(d=e.lcZ(59,38,n.filters))||null==d.shown_types?null:d.shown_types.includes("visitor")),e.xp6(4),e.hij(" ",e.lcZ(63,40,"WPA.FILTERS_APPLY")," ")}},dependencies:[h.o,x.lW,O.wG,P.oG,u.JJ,u.On,r.Ov,A.X$],styles:["mat-checkbox[_ngcontent-%COMP%]{pointer-events:none}\n/*# sourceMappingURL=schedule-filter-card.component.ts-angular-inline--116.css.map*/"]}),o})();function j(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",11),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.toggleType("event",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&o&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.ROOMS")))}function B(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",11),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.toggleType("desk",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&o&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.DESKS")))}function X(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",11),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.toggleType("parking",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&o&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.PARKING")))}function V(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",11),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.toggleType("visitor",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&o&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.VISITORS")))}function z(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",12)(1,"div"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",11),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.toggleType("event",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&o&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.ROOMS")))}function ee(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",12)(1,"div"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",11),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.toggleType("desk",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&o&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.DESKS")))}function te(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",12)(1,"div"),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"button",11),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.toggleType("parking",!0))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}2&o&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"WPA.PARKING")))}let J=(()=>{class o{constructor(t,n){this._sheet=t,this._state=n,this.filters=this._state.filters,this.toggleType=(l,s=!1)=>this._state.toggleType(l,s)}openFilters(){this._sheet.open(D)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(b.ch),e.Y36(T.I))},o.\u0275cmp=e.Xpm({type:o,selectors:[["schedule-filters"]],decls:24,vars:24,consts:[[1,"hidden","sm:block","bg-white","dark:bg-neutral-800","border","border-gray-300","rounded","p-2"],[1,"font-medium","mb-2"],[1,"flex","flex-wrap","space-x-2"],["class","flex items-center rounded-3xl border border-gray-300",4,"ngIf"],[1,"sm:hidden","flex","items-center","space-x-2"],["mat-button","",1,"min-w-0","sm:w-24",3,"click"],[1,"flex","items-center","justify-center","space-x-2"],[1,"text-xl"],["class","flex items-center rounded-3xl border border-gray-300 bg-white dark:bg-neutral-700 text-sm pl-2",4,"ngIf"],[1,"flex","items-center","rounded-3xl","border","border-gray-300"],[1,"px-2"],["mat-icon-button","",3,"click"],[1,"flex","items-center","rounded-3xl","border","border-gray-300","bg-white","dark:bg-neutral-700","text-sm","pl-2"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"div",2),e.YNc(5,j,7,3,"div",3),e.ALo(6,"async"),e.YNc(7,B,7,3,"div",3),e.ALo(8,"async"),e.YNc(9,X,7,3,"div",3),e.ALo(10,"async"),e.YNc(11,V,7,3,"div",3),e.ALo(12,"async"),e.qZA()(),e.TgZ(13,"div",4)(14,"button",5),e.NdJ("click",function(){return n.openFilters()}),e.TgZ(15,"div",6)(16,"app-icon",7),e._uU(17,"filter_list"),e.qZA()()(),e.YNc(18,z,7,3,"div",8),e.ALo(19,"async"),e.YNc(20,ee,7,3,"div",8),e.ALo(21,"async"),e.YNc(22,te,7,3,"div",8),e.ALo(23,"async"),e.qZA()),2&t){let l,s,a,d,_,g,m;e.xp6(2),e.hij(" ",e.lcZ(3,8,"WPA.SCHEDULE_CAT_FILTERS")," "),e.xp6(3),e.Q6J("ngIf",null==(l=e.lcZ(6,10,n.filters))||null==l.shown_types?null:l.shown_types.includes("event")),e.xp6(2),e.Q6J("ngIf",null==(s=e.lcZ(8,12,n.filters))||null==s.shown_types?null:s.shown_types.includes("desk")),e.xp6(2),e.Q6J("ngIf",null==(a=e.lcZ(10,14,n.filters))||null==a.shown_types?null:a.shown_types.includes("parking")),e.xp6(2),e.Q6J("ngIf",null==(d=e.lcZ(12,16,n.filters))||null==d.shown_types?null:d.shown_types.includes("visitor")),e.xp6(7),e.Q6J("ngIf",null==(_=e.lcZ(19,18,n.filters))||null==_.shown_types?null:_.shown_types.includes("event")),e.xp6(2),e.Q6J("ngIf",null==(g=e.lcZ(21,20,n.filters))||null==g.shown_types?null:g.shown_types.includes("desk")),e.xp6(2),e.Q6J("ngIf",null==(m=e.lcZ(23,22,n.filters))||null==m.shown_types?null:m.shown_types.includes("parking"))}},dependencies:[r.O5,h.o,x.lW,r.Ov,A.X$]}),o})();var C=c(232);function ne(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.toggleType("event"))}),e.TgZ(1,"div",7)(2,"app-icon"),e._uU(3,"meeting_room"),e.qZA()(),e.TgZ(4,"div",8)(5,"div",9),e._uU(6),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"div",10),e._uU(9),e.ALo(10,"translate"),e.qZA()(),e._UZ(11,"mat-checkbox",11),e.ALo(12,"async"),e.qZA()}if(2&o){const t=e.oxw();let n;e.xp6(6),e.Oqu(e.lcZ(7,3,"WPA.ROOM")),e.xp6(3),e.hij(" ",e.lcZ(10,5,"WPA.SCHEDULE_ROOM_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(n=e.lcZ(12,7,t.filters))||null==n.shown_types?null:n.shown_types.includes("event"))}}function oe(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.toggleType("desk"))}),e.TgZ(1,"div",7),e._UZ(2,"img",12),e.qZA(),e.TgZ(3,"div",8)(4,"div",9),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"div",10),e._uU(8),e.ALo(9,"translate"),e.qZA()(),e._UZ(10,"mat-checkbox",11),e.ALo(11,"async"),e.qZA()}if(2&o){const t=e.oxw();let n;e.xp6(5),e.Oqu(e.lcZ(6,3,"WPA.DESK")),e.xp6(3),e.hij(" ",e.lcZ(9,5,"WPA.SCHEDULE_DESK_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(n=e.lcZ(11,7,t.filters))||null==n.shown_types?null:n.shown_types.includes("desk"))}}function le(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.toggleType("parking"))}),e.TgZ(1,"div",7)(2,"app-icon"),e._uU(3,"drive_eta"),e.qZA()(),e.TgZ(4,"div",8)(5,"div",9),e._uU(6),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"div",10),e._uU(9),e.ALo(10,"translate"),e.qZA()(),e._UZ(11,"mat-checkbox",11),e.ALo(12,"async"),e.qZA()}if(2&o){const t=e.oxw();let n;e.xp6(6),e.Oqu(e.lcZ(7,3,"WPA.PARKING")),e.xp6(3),e.hij(" ",e.lcZ(10,5,"WPA.SCHEDULE_PARKING_FILTER")," "),e.xp6(2),e.Q6J("ngModel",null==(n=e.lcZ(12,7,t.filters))||null==n.shown_types?null:n.shown_types.includes("parking"))}}function ie(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.toggleType("visitor"))}),e.TgZ(1,"div",7)(2,"app-icon"),e._uU(3,"people"),e.qZA()(),e.TgZ(4,"div",8)(5,"div",9),e.SDv(6,13),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"div",10),e.SDv(9,14),e.ALo(10,"translate"),e.qZA()(),e._UZ(11,"mat-checkbox",11),e.ALo(12,"async"),e.qZA()}if(2&o){const t=e.oxw();let n;e.xp6(7),e.pQV(e.lcZ(7,3,"WPA.VISITORS")),e.QtT(6),e.xp6(3),e.pQV(e.lcZ(10,5,"WPA.SCHEDULE_VISITOR_FILTER")),e.QtT(9),e.xp6(1),e.Q6J("ngModel",null==(n=e.lcZ(12,7,t.filters))||null==n.shown_types?null:n.shown_types.includes("visitor"))}}let R=(()=>{class o{constructor(t,n){this._state=t,this._settings=n,this.filters=this._state.filters,this.date=this._state.date,this.toggleType=l=>this._state.toggleType(l),this.setDate=l=>this._state.setDate(l)}hasFeature(t){return this._settings.get("app.features")?.includes(t)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(T.I),e.Y36(C.gb))},o.\u0275cmp=e.Xpm({type:o,selectors:[["schedule-sidebar"]],decls:10,vars:7,consts:function(){let i,t,n;return i=$localize`:␟1298c1d2bbbb7415f5494e800f6775fdb70f4df6␟4163272119298020373:Filters`,t=$localize`:␟59151f596eb603224ad9b858fdf5e3e6dfb3a4dc␟1215297419226013896: ${"\ufffd0\ufffd"}:INTERPOLATION: `,n=$localize`:␟6c8f5c27706957b7df521a06b88ba1df1f7a31e9␟5823422811675104879: ${"\ufffd0\ufffd"}:INTERPOLATION: `,[[1,"flex","flex-col","w-[18rem]","h-full","overflow-hidden","bg-white","dark:bg-[#1F2021]","border-r","border-gray-300","dark:border-neutral-800"],[1,"border-b","border-gray-200","dark:border-neutral-800",3,"ngModel","ngModelChange"],[1,"mx-4","mt-4","font-medium"],i,[1,"p-4","space-y-4"],["matRipple","","class","flex items-center space-x-2 w-full text-left",3,"click",4,"ngIf"],["matRipple","",1,"flex","items-center","space-x-2","w-full","text-left",3,"click"],[1,"h-10","w-10","rounded-full","flex","items-center","justify-center","bg-gray-200","dark:bg-neutral-800","text-2xl"],[1,"flex-1"],[1,""],[1,"text-sm","opacity-60"],[3,"ngModel"],["src","assets/icons/desk-outline.svg",1,"w-6"],t,n]},template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"schedule-calendar",1),e.NdJ("ngModelChange",function(s){return n.setDate(s)}),e.ALo(2,"async"),e.qZA(),e.TgZ(3,"h3",2),e.SDv(4,3),e.qZA(),e.TgZ(5,"div",4),e.YNc(6,ne,13,9,"button",5),e.YNc(7,oe,12,9,"button",5),e.YNc(8,le,13,9,"button",5),e.YNc(9,ie,13,9,"button",5),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("ngModel",e.lcZ(2,5,n.date)),e.xp6(5),e.Q6J("ngIf",n.hasFeature("spaces")),e.xp6(1),e.Q6J("ngIf",n.hasFeature("desks")),e.xp6(1),e.Q6J("ngIf",n.hasFeature("parking")),e.xp6(1),e.Q6J("ngIf",n.hasFeature("visitor-invite")))},dependencies:[r.O5,h.o,O.wG,P.oG,u.JJ,u.On,I,r.Ov,A.X$],styles:["mat-checkbox[_ngcontent-%COMP%]{pointer-events:none}\n/*# sourceMappingURL=schedule-sidebar.component.ts-angular-inline--117.css.map*/"]}),o})();var se=c(1415),ce=c(9638),f=c(1299),ae=c(5816),re=c(4343),de=c(9258),_e=c(6053),ue=c(4187),pe=c(6012),ge=c(2551),me=c(4088),he=c(3953);function fe(o,i){if(1&o&&(e.TgZ(0,"div",7),e._uU(1),e.ALo(2,"date"),e.qZA()),2&o){const t=i.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,t.id,"EE")," ")}}function ve(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"button",8),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.setValue(s.id))}),e._uU(1),e.ALo(2,"date"),e.qZA()}if(2&o){const t=i.$implicit,n=e.oxw();e.ekj("text-opacity-30",!t.is_month)("text-primary",t.id===n.active_date)("text-black",t.id!==n.active_date)("dark:text-white",t.id!==n.active_date)("dark:text-opacity-30",!t.is_month)("bg-gray-200",t.id===n.active_date)("font-normal",t.id!==n.active_date),e.xp6(1),e.hij(" ",e.xi3(2,15,t.id,"d")," ")}}let q=(()=>{class o{constructor(){this.active_date=(0,p.Z)(Date.now()).valueOf(),this.offset=0,this.date_list=[],this.short_list=[],this.show_shortlist=!0,this.registerOnChange=t=>this._onChange=t,this.registerOnTouched=t=>this._onTouch=t}ngOnInit(){this.generateDates()}get list(){return this.show_shortlist?this.short_list:this.date_list}setValue(t){this.active_date=(0,p.Z)(t).valueOf(),this.offset=0,this._onChange&&this._onChange(t)}writeValue(t){this.active_date=(0,p.Z)(t).valueOf(),this.offset=0,this.generateDates()}changeMonth(t){this.offset+=t,this.generateDates()}generateDates(){const t=(0,M.Z)(this.active_date,this.offset);let n=E(N(t));const l=(0,p.Z)(Date.now());let s=[];for(;s.length<42;)s.push({id:n.valueOf(),is_past:(0,L.Z)(n,l),is_month:F(n,t)}),n=(0,k.Z)(n,1);for(this.date_list=s,n=E(t),s=[];s.length<7;)s.push({id:n.valueOf(),is_past:(0,L.Z)(n,l),is_month:F(n,t)}),n=(0,k.Z)(n,1);this.short_list=s}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["schedule-mobile-calendar"]],features:[e._Bn([{provide:u.JU,useExisting:(0,e.Gpc)(()=>o),multi:!0}])],decls:12,vars:10,consts:[[1,"p-2"],["matRipple","",1,"flex","items-center","w-full","p-2",3,"click"],[1,"px-2","font-medium"],[1,"flex","items-center","justify-center","text-sm","mb-2"],["class","opacity-60 text-center w-10 mx-2",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-between","flex-wrap"],["mat-icon-button","","class","min-w-[calc(14%-1rem)] flex-1 mx-2",3,"text-opacity-30","text-primary","text-black","dark:text-white","dark:text-opacity-30","bg-gray-200","font-normal","click",4,"ngFor","ngForOf"],[1,"opacity-60","text-center","w-10","mx-2"],["mat-icon-button","",1,"min-w-[calc(14%-1rem)]","flex-1","mx-2",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return n.show_shortlist=!n.show_shortlist}),e.TgZ(2,"div",2),e._uU(3),e.ALo(4,"date"),e.qZA(),e.TgZ(5,"app-icon"),e._uU(6,"arrow_drop_down"),e.qZA()(),e.TgZ(7,"div",3),e.YNc(8,fe,3,4,"div",4),e.ALo(9,"slice"),e.qZA(),e.TgZ(10,"div",5),e.YNc(11,ve,3,18,"button",6),e.qZA()()),2&t&&(e.xp6(3),e.hij(" ",e.xi3(4,3,(null==n.date_list[6]?null:n.date_list[6].id)||n.active_date,"LLLL")," "),e.xp6(5),e.Q6J("ngForOf",e.Dn7(9,6,n.date_list,0,7)),e.xp6(3),e.Q6J("ngForOf",n.list))},dependencies:[r.sg,h.o,x.lW,O.wG,r.OU,r.uU]}),o})();function Ze(o,i){1&o&&e._UZ(0,"topbar")}function xe(o,i){1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.xp6(1),e.hij("(",e.lcZ(2,1,"COMMON.TODAY"),")"))}function Te(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"event-card",13),e.NdJ("edit",function(){e.CHM(t);const l=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.edit(l))})("remove",function(){e.CHM(t);const l=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.remove(l))}),e.qZA()}if(2&o){const t=e.oxw().$implicit;e.Q6J("event",t)}}function Ae(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"booking-card",14),e.NdJ("remove",function(){e.CHM(t);const l=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.remove(l))}),e.qZA()}if(2&o){const t=e.oxw().$implicit;e.Q6J("booking",t)}}function Ce(o,i){if(1&o&&(e.ynx(0),e.YNc(1,Te,1,1,"event-card",11),e.YNc(2,Ae,1,1,"ng-template",null,12,e.W1O),e.BQk()),2&o){const t=i.$implicit,n=e.MAs(3),l=e.oxw(2);e.xp6(1),e.Q6J("ngIf",l.isEvent(t))("ngIfElse",n)}}const Se=function(){return[]};function be(o,i){if(1&o&&(e.ynx(0),e.YNc(1,Ce,4,2,"ng-container",10),e.ALo(2,"async"),e.ALo(3,"async"),e.BQk()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,2,t.loading)?e.DdM(6,Se):e.lcZ(3,4,t.bookings))("ngForTrackBy",t.trackByFn)}}function ye(o,i){1&o&&e._UZ(0,"mat-progress-bar",15)}function Ee(o,i){1&o&&e._UZ(0,"footer-menu")}function Le(o,i){if(1&o&&(e.TgZ(0,"div",16),e._UZ(1,"img",17),e.TgZ(2,"p",18),e._uU(3),e.ALo(4,"translate"),e.ALo(5,"date"),e.ALo(6,"async"),e.qZA()()),2&o){const t=e.oxw();e.xp6(3),e.AsE(" ",e.lcZ(4,2,"WPA.SCHEDULE_EMPTY")," ",e.xi3(5,4,e.lcZ(6,7,t.date),"EEEE, dd LLL yyyy")," ")}}const Fe=[{path:"",component:(()=>{class o{constructor(t,n,l,s){this._state=t,this._event_form=n,this._router=l,this._dialog=s,this.bookings=this._state.filtered_bookings,this.date=this._state.date,this.loading=this._state.loading,this.is_today=this.date.pipe((0,de.U)(a=>(0,ae.Z)(a,Date.now()))),this.setDate=a=>this._state.setDate(a)}isEvent(t){return t instanceof f.ym}get hide_nav(){return"true"===localStorage.getItem("PlaceOS.hide_nav")}trackByFn(t,n){return n?.id}edit(t){this._router.navigate(["/book","meeting","form"]),this._event_form.newForm(t)}remove(t){var n=this;return(0,se.Z)(function*(){const l=`${(0,re.Z)(t.date,"dd MMM yyyy h:mma")}`,a=`Delete the booking for ${t instanceof f.ym?t.space?.display_name:t.asset_name||t.asset_id} at ${l}`,d=yield(0,C._5)({title:"Delete booking",content:a,icon:{content:"delete"}},n._dialog);"done"===d.reason&&(d.loading("Requesting booking deletion..."),yield(t instanceof f.ym?f.xC:ce.pv)(t.id).toPromise().catch(_=>{throw(0,C.cB)(`Unable to delete booking. ${_}`),d.close(),_}),(0,C.t5)("Successfully deleted booking."),n._state.removeItem(t),n._dialog.closeAll())})()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(T.I),e.Y36(f.MH),e.Y36(U.F0),e.Y36(_e.uw))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-schedule"]],decls:21,vars:21,consts:[[4,"ngIf"],[1,"flex","flex-col","sm:flex-row","flex-1","h-1/2","bg-[#F8F8FA]","dark:bg-neutral-900","relative"],[1,"hidden","sm:block"],[1,"w-full","bg-white","dark:bg-[#1F2021]","border-b","border-gray-300","sm:hidden"],[3,"ngModel","ngModelChange"],[1,"flex-1","h-full","p-4","overflow-auto","space-y-2"],[1,"font-medium","my-2"],[4,"ngIf","ngIfElse"],["class","absolute inset-x-0 bottom-0","mode","indeterminate",4,"ngIf"],["empty_state",""],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"event","edit","remove",4,"ngIf","ngIfElse"],["booking_card",""],[3,"event","edit","remove"],[3,"booking","remove"],["mode","indeterminate",1,"absolute","inset-x-0","bottom-0"],[1,"w-full","p-8","flex","flex-col","items-center","justify-center","space-y-4"],["src","assets/img/no-events.svg",1,"mr-4"],[1,"opacity-30"]],template:function(t,n){if(1&t&&(e.YNc(0,Ze,1,0,"topbar",0),e.TgZ(1,"div",1),e._UZ(2,"schedule-sidebar",2),e.TgZ(3,"div",3)(4,"schedule-mobile-calendar",4),e.NdJ("ngModelChange",function(s){return n.setDate(s)}),e.ALo(5,"async"),e.qZA()(),e.TgZ(6,"div",5),e._UZ(7,"schedule-filters"),e.TgZ(8,"h3",6),e._uU(9),e.ALo(10,"date"),e.ALo(11,"async"),e.YNc(12,xe,3,3,"span",0),e.ALo(13,"async"),e.qZA(),e.YNc(14,be,4,7,"ng-container",7),e.ALo(15,"async"),e.qZA(),e.YNc(16,ye,1,0,"mat-progress-bar",8),e.ALo(17,"async"),e.qZA(),e.YNc(18,Ee,1,0,"footer-menu",0),e.YNc(19,Le,7,9,"ng-template",null,9,e.W1O)),2&t){const l=e.MAs(20);let s;e.Q6J("ngIf",!n.hide_nav),e.xp6(4),e.Q6J("ngModel",e.lcZ(5,8,n.date)),e.xp6(5),e.hij(" ",e.xi3(10,10,e.lcZ(11,13,n.date),"EEE dd LLL yyyy")," "),e.xp6(3),e.Q6J("ngIf",e.lcZ(13,15,n.is_today)),e.xp6(2),e.Q6J("ngIf",null==(s=e.lcZ(15,17,n.bookings))?null:s.length)("ngIfElse",l),e.xp6(2),e.Q6J("ngIf",e.lcZ(17,19,n.loading)),e.xp6(2),e.Q6J("ngIf",!n.hide_nav)}},dependencies:[r.sg,r.O5,ue.o,pe.i,ge.j,me.E,he.pW,u.JJ,u.On,R,J,q,r.Ov,r.uU,A.X$],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}\n/*# sourceMappingURL=schedule.component.ts-angular-inline--118.css.map*/"]}),o})()},{path:"**",redirectTo:""}];let ke=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[r.ez,H.v,u.u5,b._r,U.Bz.forChild(Fe)]}),o})()}}]);
//# sourceMappingURL=apps_workplace_src_app_new-schedule_schedule_module_ts.js.map