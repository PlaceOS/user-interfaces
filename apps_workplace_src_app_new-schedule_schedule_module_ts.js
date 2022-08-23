"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_new-schedule_schedule_module_ts"],{8385:(xe,w,c)=>{c.r(w),c.d(w,{AppScheduleModule:()=>Ze});var r=c(4666),u=c(2508),F=c(959),x=c(4865),Y=c(1992),e=c(9676),_=c(9377),U=c(8053),f=c(8325),M=c(7367),y=c(1170);function T(o,l){(0,y.Z)(1,arguments);var t=l||{},n=t.locale,i=n&&n.options&&n.options.weekStartsOn,s=null==i?0:(0,M.Z)(i),a=null==t.weekStartsOn?s:(0,M.Z)(t.weekStartsOn);if(!(a>=0&&a<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=(0,f.Z)(o),p=d.getDay(),h=(p<a?7:0)+p-a;return d.setDate(d.getDate()-h),d.setHours(0,0,0,0),d}function J(o){(0,y.Z)(1,arguments);var l=(0,f.Z)(o);return l.setDate(1),l.setHours(0,0,0,0),l}var b=c(475);function C(o,l){(0,y.Z)(2,arguments);var t=(0,f.Z)(o),n=(0,f.Z)(l);return t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()}var k=c(312),m=c(5306),v=c(4522);function Q(o,l){if(1&o&&(e.TgZ(0,"div",9),e._uU(1),e.ALo(2,"date"),e.qZA()),2&o){const t=l.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,t.id,"EE")," ")}}function G(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.setValue(s.id))}),e._uU(1),e.ALo(2,"date"),e.qZA()}if(2&o){const t=l.$implicit,n=e.oxw();e.ekj("text-opacity-30",!t.is_month)("text-primary",t.id===n.active_date)("text-black",t.id!==n.active_date)("dark:text-white",t.id!==n.active_date)("dark:text-opacity-30",!t.is_month)("bg-gray-200",t.id===n.active_date)("font-normal",t.id!==n.active_date),e.xp6(1),e.hij(" ",e.xi3(2,15,t.id,"d")," ")}}let O=(()=>{class o{constructor(){this.active_date=(0,_.Z)(Date.now()).valueOf(),this.offset=0,this.date_list=[],this.registerOnChange=t=>this._onChange=t,this.registerOnTouched=t=>this._onTouch=t}ngOnInit(){this.generateDates()}setValue(t){this.active_date=(0,_.Z)(t).valueOf(),this.offset=0,this._onChange&&this._onChange(t)}writeValue(t){this.active_date=(0,_.Z)(t).valueOf(),this.offset=0,this.generateDates()}changeMonth(t){this.offset+=t,this.generateDates()}generateDates(){const t=(0,U.Z)(this.active_date,this.offset);let n=T(J(t));const i=(0,_.Z)(Date.now()),s=[];for(;s.length<42;)s.push({id:n.valueOf(),is_past:(0,b.Z)(n,i),is_month:C(n,t)}),n=(0,k.Z)(n,1);this.date_list=s}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["schedule-calendar"]],features:[e._Bn([{provide:u.JU,useExisting:(0,e.Gpc)(()=>o),multi:!0}])],decls:17,vars:10,consts:[[1,"p-2"],[1,"flex","items-center","justify-between"],[1,"px-2","font-medium"],[1,""],["mat-icon-button","",3,"click"],[1,"flex","items-center","text-sm"],["class","flex-1 opacity-60 text-center",4,"ngFor","ngForOf"],[1,"flex","items-center","flex-wrap"],["mat-icon-button","","class","min-w-[14%] flex-1",3,"text-opacity-30","text-primary","text-black","dark:text-white","dark:text-opacity-30","bg-gray-200","font-normal","click",4,"ngFor","ngForOf"],[1,"flex-1","opacity-60","text-center"],["mat-icon-button","",1,"min-w-[14%]","flex-1",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3),e.ALo(4,"date"),e.qZA(),e.TgZ(5,"div",3)(6,"button",4),e.NdJ("click",function(){return n.changeMonth(-1)}),e.TgZ(7,"app-icon"),e._uU(8,"chevron_left"),e.qZA()(),e.TgZ(9,"button",4),e.NdJ("click",function(){return n.changeMonth(1)}),e.TgZ(10,"app-icon"),e._uU(11,"chevron_right"),e.qZA()()()(),e.TgZ(12,"div",5),e.YNc(13,Q,3,4,"div",6),e.ALo(14,"slice"),e.qZA(),e.TgZ(15,"div",7),e.YNc(16,G,3,18,"button",8),e.qZA()()),2&t&&(e.xp6(3),e.hij(" ",e.xi3(4,3,(null==n.date_list[6]?null:n.date_list[6].id)||n.active_date,"LLLL")," "),e.xp6(10),e.Q6J("ngForOf",e.Dn7(14,6,n.date_list,0,7)),e.xp6(3),e.Q6J("ngForOf",n.date_list))},dependencies:[r.sg,m.o,v.lW,r.OU,r.uU]}),o})();var Z=c(7625),A=c(207),L=c(4792);let N=(()=>{class o{constructor(t,n){this._state=t,this._sheet_ref=n,this.filters=this._state.filters,this.toggleType=i=>this._state.toggleType(i),this.dismiss=()=>this._sheet_ref.dismiss()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(Z.I),e.Y36(x.oL))},o.\u0275cmp=e.Xpm({type:o,selectors:[["schedule-filter-card"]],decls:43,vars:9,consts:[[1,"flex","items-center","border-b","border-gray-300","dark:bg-neutral-700","space-x-2","mb-4"],["mat-icon-button","",3,"click"],[1,"flex-1","w-1/2","text-center","font-medium"],[1,"space-y-4","border-b","border-gray-300","mb-4","pb-4","dark:bg-neutral-700"],["matRipple","",1,"flex","items-center","space-x-2","w-full","text-left","pr-2",3,"click"],[1,"h-10","w-10","rounded-full","flex","items-center","justify-center","text-2xl"],[1,"flex-1"],[1,""],[1,"text-sm","opacity-60"],[3,"ngModel"],["src","assets/icons/desk-outline.svg",1,"w-6"],[1,"px-2","pb-2"],["mat-button","",1,"w-full",3,"click"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return n.dismiss()}),e.TgZ(2,"app-icon"),e._uU(3,"chevron_left"),e.qZA()(),e.TgZ(4,"h2",2),e._uU(5,"Booking Types"),e.qZA(),e._UZ(6,"app-icon"),e.qZA(),e.TgZ(7,"div",3)(8,"button",4),e.NdJ("click",function(){return n.toggleType("event")}),e.TgZ(9,"div",5)(10,"app-icon"),e._uU(11,"meeting_room"),e.qZA()(),e.TgZ(12,"div",6)(13,"div",7),e._uU(14,"Room"),e.qZA(),e.TgZ(15,"div",8),e._uU(16," Room and meeting invites "),e.qZA()(),e._UZ(17,"mat-checkbox",9),e.ALo(18,"async"),e.qZA(),e.TgZ(19,"button",4),e.NdJ("click",function(){return n.toggleType("desk")}),e.TgZ(20,"div",5),e._UZ(21,"img",10),e.qZA(),e.TgZ(22,"div",6)(23,"div",7),e._uU(24,"Desk"),e.qZA(),e.TgZ(25,"div",8),e._uU(26,"Desk bookings"),e.qZA()(),e._UZ(27,"mat-checkbox",9),e.ALo(28,"async"),e.qZA(),e.TgZ(29,"button",4),e.NdJ("click",function(){return n.toggleType("parking")}),e.TgZ(30,"div",5)(31,"app-icon"),e._uU(32,"drive_eta"),e.qZA()(),e.TgZ(33,"div",6)(34,"div",7),e._uU(35,"Parking"),e.qZA(),e.TgZ(36,"div",8),e._uU(37,"Car space bookings"),e.qZA()(),e._UZ(38,"mat-checkbox",9),e.ALo(39,"async"),e.qZA()(),e.TgZ(40,"div",11)(41,"button",12),e.NdJ("click",function(){return n.dismiss()}),e._uU(42," Apply Filters "),e.qZA()()),2&t){let i,s,a;e.xp6(17),e.Q6J("ngModel",null==(i=e.lcZ(18,3,n.filters))||null==i.shown_types?null:i.shown_types.includes("event")),e.xp6(10),e.Q6J("ngModel",null==(s=e.lcZ(28,5,n.filters))||null==s.shown_types?null:s.shown_types.includes("desk")),e.xp6(11),e.Q6J("ngModel",null==(a=e.lcZ(39,7,n.filters))||null==a.shown_types?null:a.shown_types.includes("parking"))}},dependencies:[m.o,v.lW,A.wG,L.oG,u.JJ,u.On,r.Ov],styles:["mat-checkbox[_ngcontent-%COMP%]{pointer-events:none}\n/*# sourceMappingURL=schedule-filter-card.component.ts-angular-inline--102.css.map*/"]}),o})();function j(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",10)(1,"div",11),e._uU(2,"Rooms"),e.qZA(),e.TgZ(3,"button",12),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("event",!0))}),e.TgZ(4,"app-icon"),e._uU(5,"close"),e.qZA()()()}}function R(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",10)(1,"div",11),e._uU(2,"Desks"),e.qZA(),e.TgZ(3,"button",12),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("desk",!0))}),e.TgZ(4,"app-icon"),e._uU(5,"close"),e.qZA()()()}}function $(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",10)(1,"div",11),e._uU(2,"Car Spaces"),e.qZA(),e.TgZ(3,"button",12),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("parking",!0))}),e.TgZ(4,"app-icon"),e._uU(5,"close"),e.qZA()()()}}function B(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",13)(1,"div"),e._uU(2,"Rooms"),e.qZA(),e.TgZ(3,"button",12),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("event",!0))}),e.TgZ(4,"app-icon"),e._uU(5,"close"),e.qZA()()()}}function H(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",13)(1,"div"),e._uU(2,"Desks"),e.qZA(),e.TgZ(3,"button",12),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("desk",!0))}),e.TgZ(4,"app-icon"),e._uU(5,"close"),e.qZA()()()}}function K(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",13)(1,"div"),e._uU(2,"Car"),e.qZA(),e.TgZ(3,"button",12),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.toggleType("parking",!0))}),e.TgZ(4,"app-icon"),e._uU(5,"close"),e.qZA()()()}}let q=(()=>{class o{constructor(t,n){this._sheet=t,this._state=n,this.filters=this._state.filters,this.toggleType=(i,s=!1)=>this._state.toggleType(i,s)}openFilters(){this._sheet.open(N)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(x.ch),e.Y36(Z.I))},o.\u0275cmp=e.Xpm({type:o,selectors:[["schedule-filters"]],decls:23,vars:18,consts:[[1,"hidden","sm:block","bg-white","dark:bg-neutral-800","border","border-gray-300","rounded","p-2"],[1,"font-medium","mb-2"],[1,"flex","flex-wrap","space-x-2"],["class","flex items-center rounded-3xl border border-gray-300",4,"ngIf"],[1,"sm:hidden","flex","items-center","space-x-2"],["mat-button","",1,"w-24",3,"click"],[1,"flex","items-center","space-x-2"],[1,"text-xl","-mr-2"],[1,"mr-2"],["class","flex items-center rounded-3xl border border-gray-300 bg-white dark:bg-neutral-700 text-sm pl-2",4,"ngIf"],[1,"flex","items-center","rounded-3xl","border","border-gray-300"],[1,"px-2"],["mat-icon-button","",3,"click"],[1,"flex","items-center","rounded-3xl","border","border-gray-300","bg-white","dark:bg-neutral-700","text-sm","pl-2"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2,"Category Filters"),e.qZA(),e.TgZ(3,"div",2),e.YNc(4,j,6,0,"div",3),e.ALo(5,"async"),e.YNc(6,R,6,0,"div",3),e.ALo(7,"async"),e.YNc(8,$,6,0,"div",3),e.ALo(9,"async"),e.qZA()(),e.TgZ(10,"div",4)(11,"button",5),e.NdJ("click",function(){return n.openFilters()}),e.TgZ(12,"div",6)(13,"app-icon",7),e._uU(14,"filter_list"),e.qZA(),e.TgZ(15,"div",8),e._uU(16,"Filters"),e.qZA()()(),e.YNc(17,B,6,0,"div",9),e.ALo(18,"async"),e.YNc(19,H,6,0,"div",9),e.ALo(20,"async"),e.YNc(21,K,6,0,"div",9),e.ALo(22,"async"),e.qZA()),2&t){let i,s,a,d,p,h;e.xp6(4),e.Q6J("ngIf",null==(i=e.lcZ(5,6,n.filters))||null==i.shown_types?null:i.shown_types.includes("event")),e.xp6(2),e.Q6J("ngIf",null==(s=e.lcZ(7,8,n.filters))||null==s.shown_types?null:s.shown_types.includes("desk")),e.xp6(2),e.Q6J("ngIf",null==(a=e.lcZ(9,10,n.filters))||null==a.shown_types?null:a.shown_types.includes("parking")),e.xp6(9),e.Q6J("ngIf",null==(d=e.lcZ(18,12,n.filters))||null==d.shown_types?null:d.shown_types.includes("event")),e.xp6(2),e.Q6J("ngIf",null==(p=e.lcZ(20,14,n.filters))||null==p.shown_types?null:p.shown_types.includes("desk")),e.xp6(2),e.Q6J("ngIf",null==(h=e.lcZ(22,16,n.filters))||null==h.shown_types?null:h.shown_types.includes("parking"))}},dependencies:[r.O5,m.o,v.lW,r.Ov]}),o})(),D=(()=>{class o{constructor(t){this._state=t,this.filters=this._state.filters,this.date=this._state.date,this.toggleType=n=>this._state.toggleType(n),this.setDate=n=>this._state.setDate(n)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(Z.I))},o.\u0275cmp=e.Xpm({type:o,selectors:[["schedule-sidebar"]],decls:38,vars:12,consts:[[1,"flex","flex-col","w-[18rem]","h-full","overflow-hidden","bg-white","dark:bg-neutral-700","border-r","border-gray-300"],[1,"border-b","border-gray-200",3,"ngModel","ngModelChange"],[1,"mx-4","mt-4","font-medium"],[1,"p-4","space-y-4"],["matRipple","",1,"flex","items-center","space-x-2","w-full","text-left",3,"click"],[1,"h-10","w-10","rounded-full","flex","items-center","justify-center","bg-gray-200","dark:bg-neutral-800","text-2xl"],[1,"flex-1"],[1,""],[1,"text-sm","opacity-60"],[3,"ngModel"],["src","assets/icons/desk-outline.svg",1,"w-6"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"schedule-calendar",1),e.NdJ("ngModelChange",function(s){return n.setDate(s)}),e.ALo(2,"async"),e.qZA(),e.TgZ(3,"h3",2),e._uU(4,"Filters"),e.qZA(),e.TgZ(5,"div",3)(6,"button",4),e.NdJ("click",function(){return n.toggleType("event")}),e.TgZ(7,"div",5)(8,"app-icon"),e._uU(9,"meeting_room"),e.qZA()(),e.TgZ(10,"div",6)(11,"div",7),e._uU(12,"Room"),e.qZA(),e.TgZ(13,"div",8),e._uU(14," Room and meeting invites "),e.qZA()(),e._UZ(15,"mat-checkbox",9),e.ALo(16,"async"),e.qZA(),e.TgZ(17,"button",4),e.NdJ("click",function(){return n.toggleType("desk")}),e.TgZ(18,"div",5),e._UZ(19,"img",10),e.qZA(),e.TgZ(20,"div",6)(21,"div",7),e._uU(22,"Desk"),e.qZA(),e.TgZ(23,"div",8),e._uU(24,"Desk bookings"),e.qZA()(),e._UZ(25,"mat-checkbox",9),e.ALo(26,"async"),e.qZA(),e.TgZ(27,"button",4),e.NdJ("click",function(){return n.toggleType("parking")}),e.TgZ(28,"div",5)(29,"app-icon"),e._uU(30,"drive_eta"),e.qZA()(),e.TgZ(31,"div",6)(32,"div",7),e._uU(33,"Parking"),e.qZA(),e.TgZ(34,"div",8),e._uU(35,"Car, Bike, Van and ACC bookings"),e.qZA()(),e._UZ(36,"mat-checkbox",9),e.ALo(37,"async"),e.qZA()()()),2&t){let i,s,a;e.xp6(1),e.Q6J("ngModel",e.lcZ(2,4,n.date)),e.xp6(14),e.Q6J("ngModel",null==(i=e.lcZ(16,6,n.filters))||null==i.shown_types?null:i.shown_types.includes("event")),e.xp6(10),e.Q6J("ngModel",null==(s=e.lcZ(26,8,n.filters))||null==s.shown_types?null:s.shown_types.includes("desk")),e.xp6(11),e.Q6J("ngModel",null==(a=e.lcZ(37,10,n.filters))||null==a.shown_types?null:a.shown_types.includes("parking"))}},dependencies:[m.o,A.wG,L.oG,u.JJ,u.On,O,r.Ov],styles:["mat-checkbox[_ngcontent-%COMP%]{pointer-events:none}\n/*# sourceMappingURL=schedule-sidebar.component.ts-angular-inline--103.css.map*/"]}),o})();var W=c(1670),P=c(3070),S=c(232),g=c(1187),V=c(5845),X=c(5148),z=c(6942),ee=c(1484),te=c(4187),ne=c(6012),oe=c(2551),ie=c(4088),le=c(1294);function se(o,l){if(1&o&&(e.TgZ(0,"div",7),e._uU(1),e.ALo(2,"date"),e.qZA()),2&o){const t=l.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,t.id,"EE")," ")}}function ce(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"button",8),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.setValue(s.id))}),e._uU(1),e.ALo(2,"date"),e.qZA()}if(2&o){const t=l.$implicit,n=e.oxw();e.ekj("text-opacity-30",!t.is_month)("text-primary",t.id===n.active_date)("text-black",t.id!==n.active_date)("dark:text-white",t.id!==n.active_date)("dark:text-opacity-30",!t.is_month)("bg-gray-200",t.id===n.active_date)("font-normal",t.id!==n.active_date),e.xp6(1),e.hij(" ",e.xi3(2,15,t.id,"d")," ")}}let E=(()=>{class o{constructor(){this.active_date=(0,_.Z)(Date.now()).valueOf(),this.offset=0,this.date_list=[],this.short_list=[],this.show_shortlist=!0,this.registerOnChange=t=>this._onChange=t,this.registerOnTouched=t=>this._onTouch=t}ngOnInit(){this.generateDates()}get list(){return this.show_shortlist?this.short_list:this.date_list}setValue(t){this.active_date=(0,_.Z)(t).valueOf(),this.offset=0,this._onChange&&this._onChange(t)}writeValue(t){this.active_date=(0,_.Z)(t).valueOf(),this.offset=0,this.generateDates()}changeMonth(t){this.offset+=t,this.generateDates()}generateDates(){const t=(0,U.Z)(this.active_date,this.offset);let n=T(J(t));const i=(0,_.Z)(Date.now());let s=[];for(;s.length<42;)s.push({id:n.valueOf(),is_past:(0,b.Z)(n,i),is_month:C(n,t)}),n=(0,k.Z)(n,1);for(this.date_list=s,n=T(t),s=[];s.length<7;)s.push({id:n.valueOf(),is_past:(0,b.Z)(n,i),is_month:C(n,t)}),n=(0,k.Z)(n,1);this.short_list=s}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["schedule-mobile-calendar"]],features:[e._Bn([{provide:u.JU,useExisting:(0,e.Gpc)(()=>o),multi:!0}])],decls:12,vars:10,consts:[[1,"p-2"],["matRipple","",1,"flex","items-center","w-full","p-2",3,"click"],[1,"px-2","font-medium"],[1,"flex","items-center","justify-center","text-sm","mb-2"],["class","opacity-60 text-center w-10 mx-2",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-between","flex-wrap"],["mat-icon-button","","class","min-w-[calc(14%-1rem)] flex-1 mx-2",3,"text-opacity-30","text-primary","text-black","dark:text-white","dark:text-opacity-30","bg-gray-200","font-normal","click",4,"ngFor","ngForOf"],[1,"opacity-60","text-center","w-10","mx-2"],["mat-icon-button","",1,"min-w-[calc(14%-1rem)]","flex-1","mx-2",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return n.show_shortlist=!n.show_shortlist}),e.TgZ(2,"div",2),e._uU(3),e.ALo(4,"date"),e.qZA(),e.TgZ(5,"app-icon"),e._uU(6,"arrow_drop_down"),e.qZA()(),e.TgZ(7,"div",3),e.YNc(8,se,3,4,"div",4),e.ALo(9,"slice"),e.qZA(),e.TgZ(10,"div",5),e.YNc(11,ce,3,18,"button",6),e.qZA()()),2&t&&(e.xp6(3),e.hij(" ",e.xi3(4,3,(null==n.date_list[6]?null:n.date_list[6].id)||n.active_date,"LLLL")," "),e.xp6(5),e.Q6J("ngForOf",e.Dn7(9,6,n.date_list,0,7)),e.xp6(3),e.Q6J("ngForOf",n.list))},dependencies:[r.sg,m.o,v.lW,A.wG,r.OU,r.uU]}),o})();function ae(o,l){1&o&&e._UZ(0,"topbar")}function re(o,l){1&o&&(e.TgZ(0,"span"),e._uU(1,"(Today)"),e.qZA())}function de(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"event-card",13),e.NdJ("edit",function(){e.CHM(t);const i=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.edit(i))})("remove",function(){e.CHM(t);const i=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.remove(i))}),e.qZA()}if(2&o){const t=e.oxw().$implicit;e.Q6J("event",t)}}function ue(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"booking-card",14),e.NdJ("remove",function(){e.CHM(t);const i=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.remove(i))}),e.qZA()}if(2&o){const t=e.oxw().$implicit;e.Q6J("booking",t)}}function pe(o,l){if(1&o&&(e.ynx(0),e.YNc(1,de,1,1,"event-card",11),e.YNc(2,ue,1,1,"ng-template",null,12,e.W1O),e.BQk()),2&o){const t=l.$implicit,n=e.MAs(3),i=e.oxw(2);e.xp6(1),e.Q6J("ngIf",i.isEvent(t))("ngIfElse",n)}}const _e=function(){return[]};function me(o,l){if(1&o&&(e.ynx(0),e.YNc(1,pe,4,2,"ng-container",10),e.ALo(2,"async"),e.ALo(3,"async"),e.BQk()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,2,t.loading)?e.DdM(6,_e):e.lcZ(3,4,t.bookings))("ngForTrackBy",t.trackByFn)}}function ge(o,l){1&o&&e._UZ(0,"mat-progress-bar",15)}function he(o,l){1&o&&e._UZ(0,"footer-menu")}function fe(o,l){if(1&o&&(e.TgZ(0,"div",16),e._UZ(1,"img",17),e.TgZ(2,"p",18),e._uU(3),e.ALo(4,"date"),e.ALo(5,"async"),e.qZA()()),2&o){const t=e.oxw();e.xp6(3),e.hij(" No events and bookings for ",e.xi3(4,1,e.lcZ(5,4,t.date),"EEEE, dd LLL yyyy")," ")}}const ve=[{path:"",component:(()=>{class o{constructor(t,n,i,s){this._state=t,this._event_form=n,this._router=i,this._dialog=s,this.bookings=this._state.filtered_bookings,this.date=this._state.date,this.loading=this._state.loading,this.is_today=this.date.pipe((0,z.U)(a=>(0,V.Z)(a,Date.now()))),this.setDate=a=>this._state.setDate(a)}isEvent(t){return t instanceof g.ym}get hide_nav(){return"true"===localStorage.getItem("PlaceOS.hide_nav")}trackByFn(t,n){return n?.id}edit(t){this._router.navigate(["/book","meeting","form"]),this._event_form.newForm(t)}remove(t){var n=this;return(0,W.Z)(function*(){const i=`${(0,X.Z)(t.date,"dd MMM yyyy h:mma")}`,a=`Delete the booking for ${t instanceof g.ym?t.space?.display_name:t.asset_name||t.asset_id} at ${i}`,d=yield(0,S._5)({title:"Delete booking",content:a,icon:{content:"delete"}},n._dialog);"done"===d.reason&&(d.loading("Requesting booking deletion..."),yield(t instanceof g.ym?g.xC:P.pv)(t.id).toPromise().catch(p=>{throw(0,S.cB)(`Unable to delete booking. ${p}`),d.close(),p}),(0,S.t5)("Successfully deleted booking."),d.close())})()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(Z.I),e.Y36(g.MH),e.Y36(F.F0),e.Y36(ee.uw))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-schedule"]],decls:21,vars:21,consts:[[4,"ngIf"],[1,"flex","flex-col","sm:flex-row","flex-1","h-1/2","bg-[#F8F8FA]","dark:bg-zinc-600","relative"],[1,"hidden","sm:block"],[1,"w-full","bg-white","dark:bg-neutral-700","border-b","border-gray-300","sm:hidden"],[3,"ngModel","ngModelChange"],[1,"flex-1","h-full","p-4","overflow-auto","space-y-2"],[1,"font-medium","my-2"],[4,"ngIf","ngIfElse"],["class","absolute inset-x-0 bottom-0","mode","indeterminate",4,"ngIf"],["empty_state",""],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"event","edit","remove",4,"ngIf","ngIfElse"],["booking_card",""],[3,"event","edit","remove"],[3,"booking","remove"],["mode","indeterminate",1,"absolute","inset-x-0","bottom-0"],[1,"w-full","p-8","flex","flex-col","items-center","justify-center","space-y-4"],["src","assets/img/no-events.svg",1,"mr-4"],[1,"opacity-30"]],template:function(t,n){if(1&t&&(e.YNc(0,ae,1,0,"topbar",0),e.TgZ(1,"div",1),e._UZ(2,"schedule-sidebar",2),e.TgZ(3,"div",3)(4,"schedule-mobile-calendar",4),e.NdJ("ngModelChange",function(s){return n.setDate(s)}),e.ALo(5,"async"),e.qZA()(),e.TgZ(6,"div",5),e._UZ(7,"schedule-filters"),e.TgZ(8,"h3",6),e._uU(9),e.ALo(10,"date"),e.ALo(11,"async"),e.YNc(12,re,2,0,"span",0),e.ALo(13,"async"),e.qZA(),e.YNc(14,me,4,7,"ng-container",7),e.ALo(15,"async"),e.qZA(),e.YNc(16,ge,1,0,"mat-progress-bar",8),e.ALo(17,"async"),e.qZA(),e.YNc(18,he,1,0,"footer-menu",0),e.YNc(19,fe,6,6,"ng-template",null,9,e.W1O)),2&t){const i=e.MAs(20);let s;e.Q6J("ngIf",!n.hide_nav),e.xp6(4),e.Q6J("ngModel",e.lcZ(5,8,n.date)),e.xp6(5),e.hij(" ",e.xi3(10,10,e.lcZ(11,13,n.date),"EEE dd LLL yyyy")," "),e.xp6(3),e.Q6J("ngIf",e.lcZ(13,15,n.is_today)),e.xp6(2),e.Q6J("ngIf",null==(s=e.lcZ(15,17,n.bookings))?null:s.length)("ngIfElse",i),e.xp6(2),e.Q6J("ngIf",e.lcZ(17,19,n.loading)),e.xp6(2),e.Q6J("ngIf",!n.hide_nav)}},dependencies:[r.sg,r.O5,te.o,ne.i,oe.j,ie.E,le.pW,u.JJ,u.On,D,q,E,r.Ov,r.uU],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}\n/*# sourceMappingURL=schedule.component.ts-angular-inline--104.css.map*/"]}),o})()},{path:"**",redirectTo:""}];let Ze=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[r.ez,Y.v,u.u5,x._r,F.Bz.forChild(ve)]}),o})()}}]);
//# sourceMappingURL=apps_workplace_src_app_new-schedule_schedule_module_ts.js.map