"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_new-schedule_schedule_module_ts"],{8385:(Me,Z,s)=>{s.r(Z),s.d(Z,{AppScheduleModule:()=>ve});var u=s(4666),C=s(2508),D=s(959),h=s(4865),G=s(8147),e=s(9676),S=s(9377),y=s(8053),T=s(8325),K=s(7367),L=s(1170),J=s(5380);function v(o,i){var t,n,_,l,c,a,r,d;(0,L.Z)(1,arguments);var E=(0,J.j)(),g=(0,K.Z)(null!==(t=null!==(n=null!==(_=null!==(l=i?.weekStartsOn)&&void 0!==l?l:null==i||null===(c=i.locale)||void 0===c||null===(a=c.options)||void 0===a?void 0:a.weekStartsOn)&&void 0!==_?_:E.weekStartsOn)&&void 0!==n?n:null===(r=E.locale)||void 0===r||null===(d=r.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==t?t:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var A=(0,T.Z)(o),w=A.getDay(),Ne=(w<g?7:0)+w-g;return A.setDate(A.getDate()-Ne),A.setHours(0,0,0,0),A}function x(o){(0,L.Z)(1,arguments);var i=(0,T.Z)(o);return i.setDate(1),i.setHours(0,0,0,0),i}var N=s(475);function M(o,i){(0,L.Z)(2,arguments);var t=(0,T.Z)(o),n=(0,T.Z)(i);return t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()}var R=s(312),p=s(5306),m=s(4522);function X(o,i){if(1&o&&(e.TgZ(0,"div",9),e._uU(1),e.ALo(2,"date"),e.qZA()),2&o){const t=i.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,t.id,"EE")," ")}}function q(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){const l=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.setValue(l.id))}),e._uU(1),e.ALo(2,"date"),e.qZA()}if(2&o){const t=i.$implicit,n=e.oxw();e.ekj("text-opacity-30",!t.is_month)("text-primary",t.id===n.active_date)("text-black",t.id!==n.active_date)("dark:text-white",t.id!==n.active_date)("dark:text-opacity-30",!t.is_month)("bg-gray-200",t.id===n.active_date)("font-normal",t.id!==n.active_date),e.xp6(1),e.hij(" ",e.xi3(2,15,t.id,"d")," ")}}let U=(()=>{class o{constructor(){this.active_date=(0,S.Z)(Date.now()).valueOf(),this.offset=0,this.date_list=[],this.registerOnChange=t=>this._onChange=t,this.registerOnTouched=t=>this._onTouch=t}ngOnInit(){this.generateDates()}setValue(t){this.active_date=(0,S.Z)(t).valueOf(),this.offset=0,this._onChange&&this._onChange(t)}writeValue(t){this.active_date=(0,S.Z)(t).valueOf(),this.offset=0,this.generateDates()}changeMonth(t){this.offset+=t,this.generateDates()}generateDates(){const t=(0,y.Z)(this.active_date,this.offset);let n=v(x(t));const _=(0,S.Z)(Date.now()),l=[];for(;l.length<42;)l.push({id:n.valueOf(),is_past:(0,N.Z)(n,_),is_month:M(n,t)}),n=(0,R.Z)(n,1);this.date_list=l}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["schedule-calendar"]],features:[e._Bn([{provide:C.JU,useExisting:(0,e.Gpc)(()=>o),multi:!0}])],decls:17,vars:10,consts:[[1,"p-2"],[1,"flex","items-center","justify-between"],[1,"px-2","font-medium"],[1,""],["mat-icon-button","",3,"click"],[1,"flex","items-center","text-sm"],["class","flex-1 opacity-60 text-center",4,"ngFor","ngForOf"],[1,"flex","items-center","flex-wrap"],["mat-icon-button","","class","min-w-[14%] flex-1",3,"text-opacity-30","text-primary","text-black","dark:text-white","dark:text-opacity-30","bg-gray-200","font-normal","click",4,"ngFor","ngForOf"],[1,"flex-1","opacity-60","text-center"],["mat-icon-button","",1,"min-w-[14%]","flex-1",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3),e.ALo(4,"date"),e.qZA(),e.TgZ(5,"div",3)(6,"button",4),e.NdJ("click",function(){return n.changeMonth(-1)}),e.TgZ(7,"app-icon"),e._uU(8,"chevron_left"),e.qZA()(),e.TgZ(9,"button",4),e.NdJ("click",function(){return n.changeMonth(1)}),e.TgZ(10,"app-icon"),e._uU(11,"chevron_right"),e.qZA()()()(),e.TgZ(12,"div",5),e.YNc(13,X,3,4,"div",6),e.ALo(14,"slice"),e.qZA(),e.TgZ(15,"div",7),e.YNc(16,q,3,18,"button",8),e.qZA()()),2&t&&(e.xp6(3),e.hij(" ",e.xi3(4,3,(null==n.date_list[6]?null:n.date_list[6].id)||n.active_date,"LLLL")," "),e.xp6(10),e.Q6J("ngForOf",e.Dn7(14,6,n.date_list,0,7)),e.xp6(3),e.Q6J("ngForOf",n.date_list))},dependencies:[u.sg,p.o,m.lW,u.OU,u.uU]}),o})();var P=s(7625),b=s(207),$=s(4792);let k=(()=>{class o{constructor(t,n){this._state=t,this._sheet_ref=n,this.filters=this._state.filters,this.toggleType=_=>this._state.toggleType(_),this.dismiss=()=>this._sheet_ref.dismiss()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(P.I),e.Y36(h.oL))},o.\u0275cmp=e.Xpm({type:o,selectors:[["schedule-filter-card"]],decls:54,vars:12,consts:function(){let i,t,n,_,l,c,a,r,d,E;return i=$localize`:␟2e855d9e3feef342cb83df70dcdc3742e68ccb15␟8426229724401189659:Booking Types`,t=$localize`:␟02969438a91ab2201026e0f585ac971cb6f59338␟518297907399160251:Room`,n=$localize`:␟b0dd9f93e8b00887fbd2f6a35ff51397f3b897af␟7982976742274429682: Room and meeting invites `,_=$localize`:␟654c7e59b2003acf985bee710bad11e8cdd461f8␟6078724721705612215:Desk`,l=$localize`:␟7618b8c06e328a01f00c192f96ec32438acad076␟635235832961637359:Desk bookings`,c=$localize`:␟52d90df285c961f80de1093779ec8fa307980bd5␟4549391621541125428:Parking`,a=$localize`:␟62e7ccc05f2447002bdd089a5a4756d925c7983d␟2432884269270809659:Car space bookings`,r=$localize`:␟e612fac62f767a8c75dffdc44884dee675164e80␟2895747618881739814:Visitor`,d=$localize`:␟2f53ba134186a85553feaa437f3b3cc821cb357a␟4384555451235894037:Visitor bookings`,E=$localize`:␟c17e2cc448524a39eb83b2937cea3235a2e8bf37␟2296888311792137027: Apply Filters `,[[1,"flex","items-center","border-b","border-gray-300","dark:bg-neutral-700","space-x-2","mb-4"],["mat-icon-button","",3,"click"],[1,"flex-1","w-1/2","text-center","font-medium"],i,[1,"space-y-4","border-b","border-gray-300","mb-4","pb-4","dark:bg-neutral-700"],["matRipple","",1,"flex","items-center","space-x-2","w-full","text-left","pr-2",3,"click"],[1,"h-10","w-10","rounded-full","flex","items-center","justify-center","text-2xl"],[1,"flex-1"],[1,""],t,[1,"text-sm","opacity-60"],n,[3,"ngModel"],["src","assets/icons/desk-outline.svg",1,"w-6"],_,l,c,a,r,d,[1,"px-2","pb-2"],["mat-button","",1,"w-full",3,"click"],E]},template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return n.dismiss()}),e.TgZ(2,"app-icon"),e._uU(3,"chevron_left"),e.qZA()(),e.TgZ(4,"h2",2),e.SDv(5,3),e.qZA(),e._UZ(6,"app-icon"),e.qZA(),e.TgZ(7,"div",4)(8,"button",5),e.NdJ("click",function(){return n.toggleType("event")}),e.TgZ(9,"div",6)(10,"app-icon"),e._uU(11,"meeting_room"),e.qZA()(),e.TgZ(12,"div",7)(13,"div",8),e.SDv(14,9),e.qZA(),e.TgZ(15,"div",10),e.SDv(16,11),e.qZA()(),e._UZ(17,"mat-checkbox",12),e.ALo(18,"async"),e.qZA(),e.TgZ(19,"button",5),e.NdJ("click",function(){return n.toggleType("desk")}),e.TgZ(20,"div",6),e._UZ(21,"img",13),e.qZA(),e.TgZ(22,"div",7)(23,"div",8),e.SDv(24,14),e.qZA(),e.TgZ(25,"div",10),e.SDv(26,15),e.qZA()(),e._UZ(27,"mat-checkbox",12),e.ALo(28,"async"),e.qZA(),e.TgZ(29,"button",5),e.NdJ("click",function(){return n.toggleType("parking")}),e.TgZ(30,"div",6)(31,"app-icon"),e._uU(32,"drive_eta"),e.qZA()(),e.TgZ(33,"div",7)(34,"div",8),e.SDv(35,16),e.qZA(),e.TgZ(36,"div",10),e.SDv(37,17),e.qZA()(),e._UZ(38,"mat-checkbox",12),e.ALo(39,"async"),e.qZA(),e.TgZ(40,"button",5),e.NdJ("click",function(){return n.toggleType("visitor")}),e.TgZ(41,"div",6)(42,"app-icon"),e._uU(43,"people"),e.qZA()(),e.TgZ(44,"div",7)(45,"div",8),e.SDv(46,18),e.qZA(),e.TgZ(47,"div",10),e.SDv(48,19),e.qZA()(),e._UZ(49,"mat-checkbox",12),e.ALo(50,"async"),e.qZA()(),e.TgZ(51,"div",20)(52,"button",21),e.NdJ("click",function(){return n.dismiss()}),e.SDv(53,22),e.qZA()()),2&t){let _,l,c,a;e.xp6(17),e.Q6J("ngModel",null==(_=e.lcZ(18,4,n.filters))||null==_.shown_types?null:_.shown_types.includes("event")),e.xp6(10),e.Q6J("ngModel",null==(l=e.lcZ(28,6,n.filters))||null==l.shown_types?null:l.shown_types.includes("desk")),e.xp6(11),e.Q6J("ngModel",null==(c=e.lcZ(39,8,n.filters))||null==c.shown_types?null:c.shown_types.includes("parking")),e.xp6(11),e.Q6J("ngModel",null==(a=e.lcZ(50,10,n.filters))||null==a.shown_types?null:a.shown_types.includes("visitor"))}},dependencies:[p.o,m.lW,b.wG,$.oG,C.JJ,C.On,u.Ov],styles:["mat-checkbox[_ngcontent-%COMP%]{pointer-events:none}\n/*# sourceMappingURL=schedule-filter-card.component.ts-angular-inline--113.css.map*/"]}),o})();function Q(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",12)(1,"div",13),e.SDv(2,14),e.qZA(),e.TgZ(3,"button",15),e.NdJ("click",function(){e.CHM(t);const _=e.oxw();return e.KtG(_.toggleType("event",!0))}),e.TgZ(4,"app-icon"),e._uU(5,"close"),e.qZA()()()}}function B(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",12)(1,"div",13),e.SDv(2,16),e.qZA(),e.TgZ(3,"button",15),e.NdJ("click",function(){e.CHM(t);const _=e.oxw();return e.KtG(_.toggleType("desk",!0))}),e.TgZ(4,"app-icon"),e._uU(5,"close"),e.qZA()()()}}function z(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",12)(1,"div",13),e.SDv(2,17),e.qZA(),e.TgZ(3,"button",15),e.NdJ("click",function(){e.CHM(t);const _=e.oxw();return e.KtG(_.toggleType("parking",!0))}),e.TgZ(4,"app-icon"),e._uU(5,"close"),e.qZA()()()}}function Y(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",12)(1,"div",13),e.SDv(2,18),e.qZA(),e.TgZ(3,"button",15),e.NdJ("click",function(){e.CHM(t);const _=e.oxw();return e.KtG(_.toggleType("visitor",!0))}),e.TgZ(4,"app-icon"),e._uU(5,"close"),e.qZA()()()}}function V(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",19)(1,"div"),e.SDv(2,20),e.qZA(),e.TgZ(3,"button",15),e.NdJ("click",function(){e.CHM(t);const _=e.oxw();return e.KtG(_.toggleType("event",!0))}),e.TgZ(4,"app-icon"),e._uU(5,"close"),e.qZA()()()}}function j(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",19)(1,"div"),e.SDv(2,21),e.qZA(),e.TgZ(3,"button",15),e.NdJ("click",function(){e.CHM(t);const _=e.oxw();return e.KtG(_.toggleType("desk",!0))}),e.TgZ(4,"app-icon"),e._uU(5,"close"),e.qZA()()()}}function ee(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",19)(1,"div"),e.SDv(2,22),e.qZA(),e.TgZ(3,"button",15),e.NdJ("click",function(){e.CHM(t);const _=e.oxw();return e.KtG(_.toggleType("parking",!0))}),e.TgZ(4,"app-icon"),e._uU(5,"close"),e.qZA()()()}}let I=(()=>{class o{constructor(t,n){this._sheet=t,this._state=n,this.filters=this._state.filters,this.toggleType=(_,l=!1)=>this._state.toggleType(_,l)}openFilters(){this._sheet.open(k)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.ch),e.Y36(P.I))},o.\u0275cmp=e.Xpm({type:o,selectors:[["schedule-filters"]],decls:25,vars:21,consts:function(){let i,t,n,_,l,c,a,r,d;return i=$localize`:␟1aaa6a939987eabf29840d14bb8c66b6c72161d0␟3218071950408175431:Category Filters`,t=$localize`:␟1298c1d2bbbb7415f5494e800f6775fdb70f4df6␟4163272119298020373:Filters`,n=$localize`:␟d3dfb1ca49bb491ad804012a2ea1838e9e263cfd␟6318077128670918892:Rooms`,_=$localize`:␟b90a61ec2321fa67fbb90333c925a30c1c64e08f␟5422511426533407605:Desks`,l=$localize`:␟785f9e0b50a239f3baf8774a6670a2707ceba8f4␟2586613947943135482:Car Spaces`,c=$localize`:␟0db1c61f6decc9acc8496abbe1e629ccc0bb0e0f␟2940211510142561457:Visitors`,a=$localize`:␟d3dfb1ca49bb491ad804012a2ea1838e9e263cfd␟6318077128670918892:Rooms`,r=$localize`:␟b90a61ec2321fa67fbb90333c925a30c1c64e08f␟5422511426533407605:Desks`,d=$localize`:␟5efc3f391f7ea3bc40fa42ac9fa0975e2ba6275a␟1601325288134771573:Car`,[[1,"hidden","sm:block","bg-white","dark:bg-neutral-800","border","border-gray-300","rounded","p-2"],[1,"font-medium","mb-2"],i,[1,"flex","flex-wrap","space-x-2"],["class","flex items-center rounded-3xl border border-gray-300",4,"ngIf"],[1,"sm:hidden","flex","items-center","space-x-2"],["mat-button","",1,"w-24",3,"click"],[1,"flex","items-center","space-x-2"],[1,"text-xl","-mr-2"],[1,"mr-2"],t,["class","flex items-center rounded-3xl border border-gray-300 bg-white dark:bg-neutral-700 text-sm pl-2",4,"ngIf"],[1,"flex","items-center","rounded-3xl","border","border-gray-300"],[1,"px-2"],n,["mat-icon-button","",3,"click"],_,l,c,[1,"flex","items-center","rounded-3xl","border","border-gray-300","bg-white","dark:bg-neutral-700","text-sm","pl-2"],a,r,d]},template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"h3",1),e.SDv(2,2),e.qZA(),e.TgZ(3,"div",3),e.YNc(4,Q,6,0,"div",4),e.ALo(5,"async"),e.YNc(6,B,6,0,"div",4),e.ALo(7,"async"),e.YNc(8,z,6,0,"div",4),e.ALo(9,"async"),e.YNc(10,Y,6,0,"div",4),e.ALo(11,"async"),e.qZA()(),e.TgZ(12,"div",5)(13,"button",6),e.NdJ("click",function(){return n.openFilters()}),e.TgZ(14,"div",7)(15,"app-icon",8),e._uU(16,"filter_list"),e.qZA(),e.TgZ(17,"div",9),e.SDv(18,10),e.qZA()()(),e.YNc(19,V,6,0,"div",11),e.ALo(20,"async"),e.YNc(21,j,6,0,"div",11),e.ALo(22,"async"),e.YNc(23,ee,6,0,"div",11),e.ALo(24,"async"),e.qZA()),2&t){let _,l,c,a,r,d,E;e.xp6(4),e.Q6J("ngIf",null==(_=e.lcZ(5,7,n.filters))||null==_.shown_types?null:_.shown_types.includes("event")),e.xp6(2),e.Q6J("ngIf",null==(l=e.lcZ(7,9,n.filters))||null==l.shown_types?null:l.shown_types.includes("desk")),e.xp6(2),e.Q6J("ngIf",null==(c=e.lcZ(9,11,n.filters))||null==c.shown_types?null:c.shown_types.includes("parking")),e.xp6(2),e.Q6J("ngIf",null==(a=e.lcZ(11,13,n.filters))||null==a.shown_types?null:a.shown_types.includes("visitor")),e.xp6(9),e.Q6J("ngIf",null==(r=e.lcZ(20,15,n.filters))||null==r.shown_types?null:r.shown_types.includes("event")),e.xp6(2),e.Q6J("ngIf",null==(d=e.lcZ(22,17,n.filters))||null==d.shown_types?null:d.shown_types.includes("desk")),e.xp6(2),e.Q6J("ngIf",null==(E=e.lcZ(24,19,n.filters))||null==E.shown_types?null:E.shown_types.includes("parking"))}},dependencies:[u.O5,p.o,m.lW,u.Ov]}),o})(),F=(()=>{class o{constructor(t){this._state=t,this.filters=this._state.filters,this.date=this._state.date,this.toggleType=n=>this._state.toggleType(n),this.setDate=n=>this._state.setDate(n)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(P.I))},o.\u0275cmp=e.Xpm({type:o,selectors:[["schedule-sidebar"]],decls:49,vars:15,consts:function(){let i,t,n,_,l,c,a,r;return i=$localize`:␟1298c1d2bbbb7415f5494e800f6775fdb70f4df6␟4163272119298020373:Filters`,t=$localize`:␟3291ceee978525130ad72aa7c9e9d51884ff4fcd␟8020269574374220476: Room and meeting invites `,n=$localize`:␟654c7e59b2003acf985bee710bad11e8cdd461f8␟6078724721705612215:Desk`,_=$localize`:␟7618b8c06e328a01f00c192f96ec32438acad076␟635235832961637359:Desk bookings`,l=$localize`:␟52d90df285c961f80de1093779ec8fa307980bd5␟4549391621541125428:Parking`,c=$localize`:␟dc774a8c9164ac58260225513d687fea76033142␟5552709904809919145:Car, Bike, Van and ACC bookings`,a=$localize`:␟0db1c61f6decc9acc8496abbe1e629ccc0bb0e0f␟2940211510142561457:Visitors`,r=$localize`:␟54a4abd3c9cdc670ea5dfb5323f97567ecc73bb1␟2867311280872860256:Visitor invites`,[[1,"flex","flex-col","w-[18rem]","h-full","overflow-hidden","bg-white","dark:bg-[#1F2021]","border-r","border-gray-300","dark:border-neutral-800"],[1,"border-b","border-gray-200","dark:border-neutral-800",3,"ngModel","ngModelChange"],[1,"mx-4","mt-4","font-medium"],i,[1,"p-4","space-y-4"],["matRipple","",1,"flex","items-center","space-x-2","w-full","text-left",3,"click"],[1,"h-10","w-10","rounded-full","flex","items-center","justify-center","bg-gray-200","dark:bg-neutral-800","text-2xl"],[1,"flex-1"],[1,""],[1,"text-sm","opacity-60"],t,[3,"ngModel"],["src","assets/icons/desk-outline.svg",1,"w-6"],n,_,l,c,a,r]},template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"schedule-calendar",1),e.NdJ("ngModelChange",function(l){return n.setDate(l)}),e.ALo(2,"async"),e.qZA(),e.TgZ(3,"h3",2),e.SDv(4,3),e.qZA(),e.TgZ(5,"div",4)(6,"button",5),e.NdJ("click",function(){return n.toggleType("event")}),e.TgZ(7,"div",6)(8,"app-icon"),e._uU(9,"meeting_room"),e.qZA()(),e.TgZ(10,"div",7)(11,"div",8),e._uU(12,"Room"),e.qZA(),e.TgZ(13,"div",9),e.SDv(14,10),e.qZA()(),e._UZ(15,"mat-checkbox",11),e.ALo(16,"async"),e.qZA(),e.TgZ(17,"button",5),e.NdJ("click",function(){return n.toggleType("desk")}),e.TgZ(18,"div",6),e._UZ(19,"img",12),e.qZA(),e.TgZ(20,"div",7)(21,"div",8),e.SDv(22,13),e.qZA(),e.TgZ(23,"div",9),e.SDv(24,14),e.qZA()(),e._UZ(25,"mat-checkbox",11),e.ALo(26,"async"),e.qZA(),e.TgZ(27,"button",5),e.NdJ("click",function(){return n.toggleType("parking")}),e.TgZ(28,"div",6)(29,"app-icon"),e._uU(30,"drive_eta"),e.qZA()(),e.TgZ(31,"div",7)(32,"div",8),e.SDv(33,15),e.qZA(),e.TgZ(34,"div",9),e.SDv(35,16),e.qZA()(),e._UZ(36,"mat-checkbox",11),e.ALo(37,"async"),e.qZA(),e.TgZ(38,"button",5),e.NdJ("click",function(){return n.toggleType("visitor")}),e.TgZ(39,"div",6)(40,"app-icon"),e._uU(41,"people"),e.qZA()(),e.TgZ(42,"div",7)(43,"div",8),e.SDv(44,17),e.qZA(),e.TgZ(45,"div",9),e.SDv(46,18),e.qZA()(),e._UZ(47,"mat-checkbox",11),e.ALo(48,"async"),e.qZA()()()),2&t){let _,l,c,a;e.xp6(1),e.Q6J("ngModel",e.lcZ(2,5,n.date)),e.xp6(14),e.Q6J("ngModel",null==(_=e.lcZ(16,7,n.filters))||null==_.shown_types?null:_.shown_types.includes("event")),e.xp6(10),e.Q6J("ngModel",null==(l=e.lcZ(26,9,n.filters))||null==l.shown_types?null:l.shown_types.includes("desk")),e.xp6(11),e.Q6J("ngModel",null==(c=e.lcZ(37,11,n.filters))||null==c.shown_types?null:c.shown_types.includes("parking")),e.xp6(11),e.Q6J("ngModel",null==(a=e.lcZ(48,13,n.filters))||null==a.shown_types?null:a.shown_types.includes("visitor"))}},dependencies:[p.o,b.wG,$.oG,C.JJ,C.On,U,u.Ov],styles:["mat-checkbox[_ngcontent-%COMP%]{pointer-events:none}\n/*# sourceMappingURL=schedule-sidebar.component.ts-angular-inline--114.css.map*/"]}),o})();var te=s(1670),ne=s(9638),O=s(232),f=s(1299),oe=s(5845),_e=s(5148),ie=s(6942),le=s(1484),se=s(4187),ce=s(6012),ae=s(2551),de=s(4088),re=s(1294);function Ee(o,i){if(1&o&&(e.TgZ(0,"div",7),e._uU(1),e.ALo(2,"date"),e.qZA()),2&o){const t=i.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,t.id,"EE")," ")}}function ue(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"button",8),e.NdJ("click",function(){const l=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.setValue(l.id))}),e._uU(1),e.ALo(2,"date"),e.qZA()}if(2&o){const t=i.$implicit,n=e.oxw();e.ekj("text-opacity-30",!t.is_month)("text-primary",t.id===n.active_date)("text-black",t.id!==n.active_date)("dark:text-white",t.id!==n.active_date)("dark:text-opacity-30",!t.is_month)("bg-gray-200",t.id===n.active_date)("font-normal",t.id!==n.active_date),e.xp6(1),e.hij(" ",e.xi3(2,15,t.id,"d")," ")}}let H=(()=>{class o{constructor(){this.active_date=(0,S.Z)(Date.now()).valueOf(),this.offset=0,this.date_list=[],this.short_list=[],this.show_shortlist=!0,this.registerOnChange=t=>this._onChange=t,this.registerOnTouched=t=>this._onTouch=t}ngOnInit(){this.generateDates()}get list(){return this.show_shortlist?this.short_list:this.date_list}setValue(t){this.active_date=(0,S.Z)(t).valueOf(),this.offset=0,this._onChange&&this._onChange(t)}writeValue(t){this.active_date=(0,S.Z)(t).valueOf(),this.offset=0,this.generateDates()}changeMonth(t){this.offset+=t,this.generateDates()}generateDates(){const t=(0,y.Z)(this.active_date,this.offset);let n=v(x(t));const _=(0,S.Z)(Date.now());let l=[];for(;l.length<42;)l.push({id:n.valueOf(),is_past:(0,N.Z)(n,_),is_month:M(n,t)}),n=(0,R.Z)(n,1);for(this.date_list=l,n=v(t),l=[];l.length<7;)l.push({id:n.valueOf(),is_past:(0,N.Z)(n,_),is_month:M(n,t)}),n=(0,R.Z)(n,1);this.short_list=l}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["schedule-mobile-calendar"]],features:[e._Bn([{provide:C.JU,useExisting:(0,e.Gpc)(()=>o),multi:!0}])],decls:12,vars:10,consts:[[1,"p-2"],["matRipple","",1,"flex","items-center","w-full","p-2",3,"click"],[1,"px-2","font-medium"],[1,"flex","items-center","justify-center","text-sm","mb-2"],["class","opacity-60 text-center w-10 mx-2",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-between","flex-wrap"],["mat-icon-button","","class","min-w-[calc(14%-1rem)] flex-1 mx-2",3,"text-opacity-30","text-primary","text-black","dark:text-white","dark:text-opacity-30","bg-gray-200","font-normal","click",4,"ngFor","ngForOf"],[1,"opacity-60","text-center","w-10","mx-2"],["mat-icon-button","",1,"min-w-[calc(14%-1rem)]","flex-1","mx-2",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return n.show_shortlist=!n.show_shortlist}),e.TgZ(2,"div",2),e._uU(3),e.ALo(4,"date"),e.qZA(),e.TgZ(5,"app-icon"),e._uU(6,"arrow_drop_down"),e.qZA()(),e.TgZ(7,"div",3),e.YNc(8,Ee,3,4,"div",4),e.ALo(9,"slice"),e.qZA(),e.TgZ(10,"div",5),e.YNc(11,ue,3,18,"button",6),e.qZA()()),2&t&&(e.xp6(3),e.hij(" ",e.xi3(4,3,(null==n.date_list[6]?null:n.date_list[6].id)||n.active_date,"LLLL")," "),e.xp6(5),e.Q6J("ngForOf",e.Dn7(9,6,n.date_list,0,7)),e.xp6(3),e.Q6J("ngForOf",n.list))},dependencies:[u.sg,p.o,m.lW,b.wG,u.OU,u.uU]}),o})();function ge(o,i){1&o&&e._UZ(0,"topbar")}function Ce(o,i){1&o&&(e.TgZ(0,"span"),e.SDv(1,10),e.qZA())}function Se(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"event-card",14),e.NdJ("edit",function(){e.CHM(t);const _=e.oxw().$implicit,l=e.oxw(2);return e.KtG(l.edit(_))})("remove",function(){e.CHM(t);const _=e.oxw().$implicit,l=e.oxw(2);return e.KtG(l.remove(_))}),e.qZA()}if(2&o){const t=e.oxw().$implicit;e.Q6J("event",t)}}function pe(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"booking-card",15),e.NdJ("remove",function(){e.CHM(t);const _=e.oxw().$implicit,l=e.oxw(2);return e.KtG(l.remove(_))}),e.qZA()}if(2&o){const t=e.oxw().$implicit;e.Q6J("booking",t)}}function fe(o,i){if(1&o&&(e.ynx(0),e.YNc(1,Se,1,1,"event-card",12),e.YNc(2,pe,1,1,"ng-template",null,13,e.W1O),e.BQk()),2&o){const t=i.$implicit,n=e.MAs(3),_=e.oxw(2);e.xp6(1),e.Q6J("ngIf",_.isEvent(t))("ngIfElse",n)}}const Ae=function(){return[]};function Te(o,i){if(1&o&&(e.ynx(0),e.YNc(1,fe,4,2,"ng-container",11),e.ALo(2,"async"),e.ALo(3,"async"),e.BQk()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,2,t.loading)?e.DdM(6,Ae):e.lcZ(3,4,t.bookings))("ngForTrackBy",t.trackByFn)}}function me(o,i){1&o&&e._UZ(0,"mat-progress-bar",16)}function Pe(o,i){1&o&&e._UZ(0,"footer-menu")}function he(o,i){if(1&o&&(e.TgZ(0,"div",17),e._UZ(1,"img",18),e.TgZ(2,"p",19),e.SDv(3,20),e.ALo(4,"date"),e.ALo(5,"async"),e.qZA()()),2&o){const t=e.oxw();e.xp6(5),e.pQV(e.xi3(4,1,e.lcZ(5,4,t.date),"EEEE, dd LLL yyyy")),e.QtT(3)}}const Le=[{path:"",component:(()=>{class o{constructor(t,n,_,l){this._state=t,this._event_form=n,this._router=_,this._dialog=l,this.bookings=this._state.filtered_bookings,this.date=this._state.date,this.loading=this._state.loading,this.is_today=this.date.pipe((0,ie.U)(c=>(0,oe.Z)(c,Date.now()))),this.setDate=c=>this._state.setDate(c)}isEvent(t){return t instanceof f.ym}get hide_nav(){return"true"===localStorage.getItem("PlaceOS.hide_nav")}trackByFn(t,n){return n?.id}edit(t){this._router.navigate(["/book","meeting","form"]),this._event_form.newForm(t)}remove(t){var n=this;return(0,te.Z)(function*(){const _=`${(0,_e.Z)(t.date,"dd MMM yyyy h:mma")}`,c=`Delete the booking for ${t instanceof f.ym?t.space?.display_name:t.asset_name||t.asset_id} at ${_}`,a=yield(0,O._5)({title:"Delete booking",content:c,icon:{content:"delete"}},n._dialog);"done"===a.reason&&(a.loading("Requesting booking deletion..."),yield(t instanceof f.ym?f.xC:ne.pv)(t.id).toPromise().catch(r=>{throw(0,O.cB)(`Unable to delete booking. ${r}`),a.close(),r}),(0,O.t5)("Successfully deleted booking."),n._state.removeItem(t),n._dialog.closeAll())})()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(P.I),e.Y36(f.MH),e.Y36(D.F0),e.Y36(le.uw))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-schedule"]],decls:21,vars:21,consts:function(){let i,t;return i=$localize`:␟004d7110de90b66dea569a5bfff4456e42d0c1a3␟116144028831936180:(Today)`,t=$localize`:␟d43a492e6b463613a8f52162b2bf44b5b68e8b8f␟6564019464985514806: No events and bookings for ${"\ufffd0\ufffd"}:INTERPOLATION: `,[[4,"ngIf"],[1,"flex","flex-col","sm:flex-row","flex-1","h-1/2","bg-[#F8F8FA]","dark:bg-neutral-900","relative"],[1,"hidden","sm:block"],[1,"w-full","bg-white","dark:bg-[#1F2021]","border-b","border-gray-300","sm:hidden"],[3,"ngModel","ngModelChange"],[1,"flex-1","h-full","p-4","overflow-auto","space-y-2"],[1,"font-medium","my-2"],[4,"ngIf","ngIfElse"],["class","absolute inset-x-0 bottom-0","mode","indeterminate",4,"ngIf"],["empty_state",""],i,[4,"ngFor","ngForOf","ngForTrackBy"],[3,"event","edit","remove",4,"ngIf","ngIfElse"],["booking_card",""],[3,"event","edit","remove"],[3,"booking","remove"],["mode","indeterminate",1,"absolute","inset-x-0","bottom-0"],[1,"w-full","p-8","flex","flex-col","items-center","justify-center","space-y-4"],["src","assets/img/no-events.svg",1,"mr-4"],[1,"opacity-30"],t]},template:function(t,n){if(1&t&&(e.YNc(0,ge,1,0,"topbar",0),e.TgZ(1,"div",1),e._UZ(2,"schedule-sidebar",2),e.TgZ(3,"div",3)(4,"schedule-mobile-calendar",4),e.NdJ("ngModelChange",function(l){return n.setDate(l)}),e.ALo(5,"async"),e.qZA()(),e.TgZ(6,"div",5),e._UZ(7,"schedule-filters"),e.TgZ(8,"h3",6),e._uU(9),e.ALo(10,"date"),e.ALo(11,"async"),e.YNc(12,Ce,2,0,"span",0),e.ALo(13,"async"),e.qZA(),e.YNc(14,Te,4,7,"ng-container",7),e.ALo(15,"async"),e.qZA(),e.YNc(16,me,1,0,"mat-progress-bar",8),e.ALo(17,"async"),e.qZA(),e.YNc(18,Pe,1,0,"footer-menu",0),e.YNc(19,he,6,6,"ng-template",null,9,e.W1O)),2&t){const _=e.MAs(20);let l;e.Q6J("ngIf",!n.hide_nav),e.xp6(4),e.Q6J("ngModel",e.lcZ(5,8,n.date)),e.xp6(5),e.hij(" ",e.xi3(10,10,e.lcZ(11,13,n.date),"EEE dd LLL yyyy")," "),e.xp6(3),e.Q6J("ngIf",e.lcZ(13,15,n.is_today)),e.xp6(2),e.Q6J("ngIf",null==(l=e.lcZ(15,17,n.bookings))?null:l.length)("ngIfElse",_),e.xp6(2),e.Q6J("ngIf",e.lcZ(17,19,n.loading)),e.xp6(2),e.Q6J("ngIf",!n.hide_nav)}},dependencies:[u.sg,u.O5,se.o,ce.i,ae.j,de.E,re.pW,C.JJ,C.On,F,I,H,u.Ov,u.uU],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}\n/*# sourceMappingURL=schedule.component.ts-angular-inline--115.css.map*/"]}),o})()},{path:"**",redirectTo:""}];let ve=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,G.v,C.u5,h._r,D.Bz.forChild(Le)]}),o})()}}]);
//# sourceMappingURL=apps_workplace_src_app_new-schedule_schedule_module_ts.js.map