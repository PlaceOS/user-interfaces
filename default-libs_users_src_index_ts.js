"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["default-libs_users_src_index_ts"],{6150:(Je,B,s)=>{s.d(B,{OO:()=>w.OO,Y:()=>Fe,PP:()=>Ue,mO:()=>w.mO,ro:()=>b.ro,VE:()=>x.VE,pP:()=>b.pP,w0:()=>x.w0,sF:()=>b.sF});var d=s(6477),m=s(9542),F=s(5312),g=s(9314),f=s(7486),O=s(7672),K=s(145),V=s(9651),_=(s(9645),s(9036),s(1670)),b=s(4283),x=s(9012),w=s(5197),e=s(6839);new w.n5;var M=s(1426),ie=s(312),S=s(8325),T=s(7367),J=s(1170),oe=s(5380),p=s(1810),D=s(9377),k=s(3200),W=s(6962),P=s(354);function se(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",23)(1,"div",24),e._uU(2),e.ALo(3,"date"),e.qZA(),e.TgZ(4,"div",25)(5,"mat-checkbox",26),e.NdJ("ngModelChange",function(r){const l=e.CHM(t).index,u=e.oxw(2);return e.KtG(u.settings[u.available_weekdays[l]]=r)})("ngModelChange",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.changed=!0)}),e.qZA()()()}if(2&o){const t=n.$implicit,i=n.index,r=e.oxw(2);e.xp6(2),e.hij(" ",e.xi3(3,2,t,"EEE")," "),e.xp6(3),e.Q6J("ngModel",r.settings[r.available_weekdays[i]])}}function ae(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",4)(1,"div",5),e._UZ(2,"a-user-avatar",6),e.TgZ(3,"div"),e._uU(4),e.qZA(),e.TgZ(5,"div",7),e._uU(6),e.qZA(),e.TgZ(7,"div",7),e._uU(8),e.qZA()(),e.TgZ(9,"div",8)(10,"h3",9),e._uU(11," Today's Working Location "),e.qZA(),e.TgZ(12,"button",10)(13,"div",11)(14,"div",12),e._uU(15),e.qZA(),e.TgZ(16,"app-icon",13),e._uU(17,"arrow_drop_down"),e.qZA()()(),e.TgZ(18,"div",14)(19,"div",15)(20,"app-icon"),e._uU(21,"home"),e.qZA()(),e.TgZ(22,"div",16),e._uU(23," Today is a working from home day. Available for online meetings. "),e.qZA()()(),e.TgZ(24,"div",17)(25,"h3",9),e._uU(26," Default Office Days "),e.qZA(),e.TgZ(27,"div",18),e.YNc(28,se,6,5,"div",19),e.qZA()(),e.TgZ(29,"div",20)(30,"button",21),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.saveChanges())}),e._uU(31," Update "),e.qZA()(),e.TgZ(32,"button",22)(33,"app-icon"),e._uU(34,"close"),e.qZA()()()}if(2&o){const t=e.oxw(),i=e.MAs(2);e.xp6(2),e.Q6J("user",t.user),e.xp6(2),e.Oqu(t.user.name),e.xp6(2),e.Oqu(t.user.email),e.xp6(2),e.Oqu(t.user.phone),e.xp6(4),e.Q6J("matMenuTriggerFor",i),e.xp6(3),e.Oqu(t.option),e.xp6(13),e.Q6J("ngForOf",t.weekdays),e.xp6(2),e.Q6J("disabled",!t.changed)}}function re(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw();return l.option=a.id,e.KtG(l.changed=!0)}),e._uU(1),e.qZA()}if(2&o){const t=n.$implicit;e.uIk("id",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function le(o,n){1&o&&(e.TgZ(0,"div",28),e._UZ(1,"mat-spinner",29),e.TgZ(2,"p"),e._uU(3,"Saving changes to work location settings..."),e.qZA()()),2&o&&(e.xp6(1),e.Q6J("diameter",32))}const j="wfh-days";let H=(()=>{class o{constructor(t,i){this._settings=t,this._dialog_ref=i,this.options=[{id:"wfo",name:"Work from office (WFO)"},{id:"wfh",name:"Work from home (WFH)"},{id:"aol",name:"Away on Leave (AOL)"}],this.option=this.options[0].id,this.settings=[!0,!0,!0,!0,!0,!0,!0],this.weekdays=[],this.changed=!1,this.loading=!1,this.available_weekdays=[1,2,3,4,5],this._booking=new W.$({type:"wfh-settings",asset_id:this.options[0].id})}ngOnInit(){this.settings=this._settings.get(j)||[!0,!0,!0,!0,!0,!0,!0],this._initWeekdays(),this._loadOptionForToday()}get user(){return(0,M.ar)()}saveChanges(){var t=this;return(0,_.Z)(function*(){t.loading=!0,t._dialog_ref.disableClose=!0,t.option!==t.options[0].id&&t.option!==t._booking.asset_id&&(yield(0,P.km)(new W.$({...t._booking,asset_id:t.option})).toPromise().catch(i=>{throw t._dialog_ref.disableClose=!1,t.loading=!1,i})),t._settings.saveUserSetting(j,t.settings),t.loading=!1,t._dialog_ref.close()})()}_initWeekdays(){let t=new Date;this.weekdays=this.available_weekdays.map(i=>function ne(o,n,t){var i,r,a,l,u,c,h,v;(0,J.Z)(2,arguments);var z=(0,oe.j)(),C=(0,T.Z)(null!==(i=null!==(r=null!==(a=null!==(l=t?.weekStartsOn)&&void 0!==l?l:null==t||null===(u=t.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==a?a:z.weekStartsOn)&&void 0!==r?r:null===(h=z.locale)||void 0===h||null===(v=h.options)||void 0===v?void 0:v.weekStartsOn)&&void 0!==i?i:0);if(!(C>=0&&C<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var X=(0,S.Z)(o),y=(0,T.Z)(n),G=X.getDay(),U=7-C;return(0,ie.Z)(X,y<0||y>6?y-(G+U)%7:((y%7+7)%7+U)%7-(G+U)%7)}(t,i).valueOf())}_loadOptionForToday(){var t=this;return(0,_.Z)(function*(){const i=yield(0,P.F2)({type:"wfh-setting",period_start:(0,p.Z)((0,D.Z)(Date.now())),period_end:(0,p.Z)((0,k.Z)(Date.now()))}).toPromise();i.length&&(t.option=i[0].asset_id,t._booking=i[0])})()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(M.gb),e.Y36(f.so))},o.\u0275cmp=e.Xpm({type:o,selectors:[["wfh-settings-modal"]],decls:6,vars:3,consts:[["class","relative flex flex-col rounded overflow-hidden w-[18rem]",4,"ngIf","ngIfElse"],["menu","matMenu"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["load_state",""],[1,"relative","flex","flex-col","rounded","overflow-hidden","w-[18rem]"],[1,"w-full","px-4","py-8","flex","flex-col","items-center","border-b","border-gray-200"],[3,"user"],[1,"text-xs","opacity-30"],[1,"w-full","p-4","flex","flex-col","border-b","border-gray-200"],[1,"-mt-2","mb-2","text-sm","font-medium"],["btn","","matRipple","","today-location","",1,"inverse","rounded-3xl","w-auto",3,"matMenuTriggerFor"],[1,"flex","items-center","justify-between","w-full"],[1,"uppercase","flex-1","w-1/2"],[1,"text-2xl"],[1,"flex","items-center","pt-4","space-x-2"],[1,"h-8","w-8","rounded-full","bg-gray-300","dark:bg-neutral-800","flex","items-center","justify-center"],[1,"flex-1","w-1/2","text-sm"],[1,"w-full","p-4","flex","flex-col"],[1,"border","border-gray-200","rounded","flex","items-center","justify-between","px-2","pt-2"],["class","flex flex-col items-center flex-1 w-px",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-end","px-4","pb-4"],["btn","","matRipple","","save","",3,"disabled","click"],["icon","","matRipple","","mat-dialog-close","",1,"absolute","top-0","left-0"],[1,"flex","flex-col","items-center","flex-1","w-px"],[1,"text-sm","font-light"],[1,"h-8","w-8","flex","items-center","justify-center"],[3,"ngModel","ngModelChange"],["mat-menu-item","",3,"click"],["loading","",1,"relative","bg-white","flex","flex-col","justify-center","items-center","rounded","overflow-hidden","w-[18rem]","h-[18rem]"],[3,"diameter"]],template:function(t,i){if(1&t&&(e.YNc(0,ae,35,8,"div",0),e.TgZ(1,"mat-menu",null,1),e.YNc(3,re,2,2,"button",2),e.qZA(),e.YNc(4,le,4,1,"ng-template",null,3,e.W1O)),2&t){const r=e.MAs(5);e.Q6J("ngIf",!i.loading)("ngIfElse",r),e.xp6(3),e.Q6J("ngForOf",i.options)}}}),o})();var de=s(5845);function A(o){(0,J.Z)(1,arguments);var n=(0,T.Z)(o);return(0,S.Z)(1e3*n)}var ue=s(8987),ce=s(2317),he=s(8313),me=s(4505),Q=s(4139),fe=s(823),ve=s(9095),pe=s(7418),ge=s(6942),be=s(9701),ye=s(9128);const _e=["container"],N=function(){return[]};function xe(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",26),e._UZ(1,"a-user-avatar",11),e.TgZ(2,"div",27),e._uU(3),e.qZA(),e.TgZ(4,"button",28),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.removeUser(a))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()(),e._UZ(7,"user-availability-list",29),e.ALo(8,"async"),e.ALo(9,"async"),e.qZA()}if(2&o){const t=n.$implicit,i=e.oxw();e.xp6(1),e.Q6J("user",t),e.xp6(2),e.hij(" ",t.name||i.host.email," "),e.xp6(4),e.Q6J("user",t)("availability",e.lcZ(8,7,i.availability)?e.lcZ(9,9,i.availability)[t.email]:e.DdM(11,N))("date",i.date)("offset",i.offset)("width",i.width)}}function we(o,n){if(1&o&&(e.TgZ(0,"div",30)(1,"div",31),e._uU(2),e.qZA()()),2&o){const t=n.index,i=e.oxw();e.uIk("hour",t)("disabled",i.today&&t<i.current_hour),e.xp6(2),e.AsE(" ",t%12?t%12:"12","",t>=12?"pm":"am"," ")}}function Ze(o,n){if(1&o&&(e.TgZ(0,"div",32),e._uU(1),e.ALo(2,"date"),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.hij(" ",e.xi3(2,1,t.date,"shortTime")," ")}}let I=(()=>{class o extends M.cx{get today(){return(0,de.Z)(this.date,Date.now())}get current_hour(){return(new Date).getHours()}get selection_left(){const t=new Date(this.date);return 5*(t.getHours()+t.getMinutes()/60)+6}get selection_width(){return this.duration/60*5}constructor(t,i,r){super(),this._data=t,this._renderer=i,this._dialog_ref=r,this.users=new me.X([]),this.search="",this.date=this._data.date||Date.now(),this.duration=this._data.duration||60,this.offset=0,this.width=0,this.host=this._data.host,this.hours=new Array(24).fill(0),this.availability=this.users.pipe((0,fe.b)(300),(0,ve.w)(a=>a.length?(0,he.LE)({calendars:[this.host.email,...a.map(l=>l.email)].join(","),period_start:(0,p.Z)((0,D.Z)(this.date)),period_end:(0,p.Z)((0,k.Z)(this.date))}).pipe((0,pe.K)(()=>(0,Q.of)([]))):(0,Q.of)([])),(0,ge.U)(a=>{const l={};for(const u of a)l[u.id]=u.availability.filter(c=>"busy"===c.status).map(c=>{const h=A(c.starts_at),v=(0,ue.Z)(A(c.ends_at),A(c.starts_at));return{date:h,duration:v,start:(h.getHours()+h.getMinutes()/60)/24*100,size:v/60/24*100}});return l}),(0,be.d)({}),(0,ye.d)(1)),this.move_time=!1,this._start_time=0,this._move_last=0,this._move_size=0,this.users.next([...this._data.users])}addUser(t){this.users.next([...this.users.getValue().filter(i=>i.email!==t.email),t]),this.user=null}removeUser(t){this.users.next(this.users.getValue().filter(i=>i.email!==t.email)),this.user=null}closeAndUpdate(){this._dialog_ref.close(!0)}ngAfterViewInit(){const t=new Date(this.date);this.timeout("init",()=>{const i=this._container_el.nativeElement.querySelector(`[hour="${t.getHours()}"]`);if(i){const r=this._container_el.nativeElement.getBoundingClientRect(),a=i.getBoundingClientRect();this._container_el.nativeElement.scrollTo(a.left-128-r.left,0)}this.updateWidth(),this.updateScroll()},300)}updateWidth(){const t=this._container_el.nativeElement.getBoundingClientRect().width,i=this._container_el.nativeElement.querySelector("[users]").getBoundingClientRect().width;this.width=Math.floor(t-i),this._move_size=24*this._container_el.nativeElement.querySelector("[hour]").getBoundingClientRect().width}updateScroll(){this.offset=this._container_el.nativeElement.scrollLeft}startMovePeriod(t){t.preventDefault(),t.stopPropagation(),this.updateWidth(),this._move_last=t instanceof MouseEvent?t.clientX:t.touches[0].clientX,this.move_time=!0,this._start_time=this.date,t instanceof MouseEvent?this.subscription("on_move",this._renderer.listen("window","mousemove",i=>this._onMovePeriod(i))):this.subscription("on_move",this._renderer.listen("window","touchmove",i=>this._onMovePeriod(i))),t instanceof MouseEvent?this.subscription("on_move_end",this._renderer.listen("window","mouseup",()=>this._onMoveEnd())):this.subscription("on_move_end",this._renderer.listen("window","touchend",()=>this._onMoveEnd()))}startMoveDuration(t){t.preventDefault(),t.stopPropagation(),this.updateWidth(),this._move_last=t instanceof MouseEvent?t.clientX:t.touches[0].clientX,this._start_time=this.duration,t instanceof MouseEvent?this.subscription("on_move",this._renderer.listen("window","mousemove",i=>this._onMoveDuration(i))):this.subscription("on_move",this._renderer.listen("window","touchmove",i=>this._onMoveDuration(i))),t instanceof MouseEvent?this.subscription("on_move_end",this._renderer.listen("window","mouseup",()=>this._onMoveEnd())):this.subscription("on_move_end",this._renderer.listen("window","touchend",()=>this._onMoveEnd()))}_onMovePeriod(t){const i=this._move_last-(t instanceof MouseEvent?t.clientX:t.touches[0].clientX),a=(i>0?-1:1)*Math.floor(Math.abs(i/this._move_size*24*60)/5)*5;if(a){const l=this.date;this.date=(0,ce.Z)(this._start_time,a).valueOf(),this.date<Date.now()&&(this.date=l)}}_onMoveDuration(t){const i=this._move_last-(t instanceof MouseEvent?t.clientX:t.touches[0].clientX),a=(i>0?-1:1)*Math.floor(Math.abs(i/this._move_size*24*60)/5)*5;a&&(this.duration=Math.max(30,this._start_time+a))}_onMoveEnd(){this.unsub("on_move"),this.unsub("on_move_end"),this._move_last=0,this.move_time=!1}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f.WI),e.Y36(e.Qsj),e.Y36(f.so))},o.\u0275cmp=e.Xpm({type:o,selectors:[["find-availability-modal"]],viewQuery:function(t,i){if(1&t&&e.Gf(_e,7),2&t){let r;e.iGM(r=e.CRH())&&(i._container_el=r.first)}},features:[e.qOj],decls:38,vars:27,consts:[[1,"relative","flex","items-center","justify-center","p-4"],[1,"text-center"],["icon","","matRipple","","mat-dialog-close","",1,"absolute","top-1/2","left-1","-translate-y-1/2"],[1,"flex","flex-col","h-[calc(100vh-7rem)]","sm:h-[65vh]",3,"resize"],[1,"w-full","flex","flex-col","sm:flex-row","space-y-2","sm:space-y-0","sm:space-x-2","p-2"],[1,"max-h-[3.25rem]","flex-1",3,"ngModel","ngModelChange"],[1,"flex","flex-1","h-1/2","w-full","border-t","border-gray-300","dark:border-neutral-500","relative","overflow-auto","divide-x","divide-gray-300","dark:divide-neutral-500","max-w-[100vw]","sm:max-w-[80vw]",3,"scroll"],["container",""],["users","",1,"sticky","left-0","min-h-full","bg-white","dark:bg-neutral-700","border-r","border-gray-300","dark:border-neutral-500","z-30"],["header","",1,"h-10","w-[6rem]","border-b","border-gray-300","dark:border-neutral-500"],["host","",1,"flex","flex-col","items-center","justify-center","h-32","w-[6rem]","relative","border-b","border-gray-300","dark:border-neutral-500","py-2"],[1,"text-2xl",3,"user"],[1,"text-xs","break-words","overflow-hidden","max-w-full","px-2","text-center"],[1,"absolute","top-0","-bottom-px","left-full","pointer-events-none",3,"user","date","offset","availability","width"],["person","","class","flex flex-col items-center justify-center h-32 w-[6rem] relative border-b border-gray-300 dark:border-neutral-500 py-2",4,"ngFor","ngForOf"],["class","min-w-[5rem] bg-gray-50 dark:bg-neutral-600 min-h-full pointer-events-none",4,"ngFor","ngForOf"],["selection","",1,"absolute","top-10","bottom-0","!border-x-2","!border-blue-500","bg-blue-500/30","z-20","cursor-grab","active:cursor-grabbing",3,"mousedown","touchstart"],["handle","",1,"absolute","top-1/2","-left-px","-translate-x-1/2","-translate-y-1/2","h-3","w-3","rounded-full","bg-blue-500"],["handle","",1,"absolute","top-1/2","-right-px","translate-x-1/2","-translate-y-1/2","h-3","w-3","rounded-full","bg-blue-500","hover:h-4","hover:w-4","active:bg-primary",3,"mousedown","touchstart"],[1,"bg-white","dark:bg-neutral-600","border","border-gray-300","dark:border-neutral-500","p-2","absolute","top-2","left-1/2","-translate-x-1/2","shadow","text-xs","whitespace-nowrap","rounded"],["class","bg-white dark:bg-neutral-600 border border-gray-300 dark:border-neutral-500 p-2 absolute top-12 left-1/2 -translate-x-1/2 shadow text-xs whitespace-nowrap rounded",4,"ngIf"],[1,"flex","items-center","justify-between","p-2","border-t","border-gray-200","dark:border-neutral-500","w-full"],["matRipple","",1,"clear","text-primary",3,"mat-dialog-close"],[1,"flex","items-center"],[1,"text-xl"],[1,"mr-1","underline"],["person","",1,"flex","flex-col","items-center","justify-center","h-32","w-[6rem]","relative","border-b","border-gray-300","dark:border-neutral-500","py-2"],[1,"text-xs","break-words","max-w-full","px-2","text-center"],["icon","",1,"absolute","-top-1","-left-1",3,"click"],[1,"absolute","top-0","-bottom-px","left-full","pointer-events-none",3,"user","availability","date","offset","width"],[1,"min-w-[5rem]","bg-gray-50","dark:bg-neutral-600","min-h-full","pointer-events-none"],["header","",1,"h-10","border-b","border-gray-300","dark:border-neutral-500","p-2"],[1,"bg-white","dark:bg-neutral-600","border","border-gray-300","dark:border-neutral-500","p-2","absolute","top-12","left-1/2","-translate-x-1/2","shadow","text-xs","whitespace-nowrap","rounded"]],template:function(t,i){1&t&&(e.TgZ(0,"header",0)(1,"h2",1),e._uU(2,"Find Availability"),e.qZA(),e.TgZ(3,"button",2)(4,"app-icon"),e._uU(5,"close"),e.qZA()()(),e.TgZ(6,"main",3),e.NdJ("resize",function(){return i.updateWidth()},!1,e.Jf7),e.TgZ(7,"div",4)(8,"a-date-field",5),e.NdJ("ngModelChange",function(a){return i.date=a}),e.qZA(),e.TgZ(9,"a-user-search-field",5),e.NdJ("ngModelChange",function(a){return i.user=a})("ngModelChange",function(a){return i.addUser(a)}),e.qZA()(),e.TgZ(10,"div",6,7),e.NdJ("scroll",function(){return i.updateScroll()}),e.TgZ(12,"div",8),e._UZ(13,"div",9),e.TgZ(14,"div",10),e._UZ(15,"a-user-avatar",11),e.TgZ(16,"div",12),e._uU(17),e.qZA(),e._UZ(18,"user-availability-list",13),e.ALo(19,"async"),e.ALo(20,"async"),e.qZA(),e.YNc(21,xe,10,12,"div",14),e.ALo(22,"async"),e.qZA(),e.YNc(23,we,3,4,"div",15),e.TgZ(24,"div",16),e.NdJ("mousedown",function(a){return i.startMovePeriod(a)})("touchstart",function(a){return i.startMovePeriod(a)}),e._UZ(25,"div",17),e.TgZ(26,"div",18),e.NdJ("mousedown",function(a){return i.startMoveDuration(a)})("touchstart",function(a){return i.startMoveDuration(a)}),e.qZA(),e.TgZ(27,"div",19),e._uU(28),e.ALo(29,"duration"),e.qZA(),e.YNc(30,Ze,3,4,"div",20),e.qZA()()(),e.TgZ(31,"footer",21)(32,"button",22)(33,"div",23)(34,"app-icon",24),e._uU(35,"arrow_back"),e.qZA(),e.TgZ(36,"div",25),e._uU(37,"Back to form"),e.qZA()()()()),2&t&&(e.xp6(8),e.Q6J("ngModel",i.date),e.xp6(1),e.Q6J("ngModel",i.user),e.xp6(6),e.Q6J("user",i.host),e.xp6(2),e.hij(" ",i.host.name||i.host.email," "),e.xp6(1),e.Q6J("user",i.host)("date",i.date)("offset",i.offset)("availability",e.lcZ(19,18,i.availability)?e.lcZ(20,20,i.availability)[i.host.email]:e.DdM(26,N))("width",i.width),e.xp6(3),e.Q6J("ngForOf",e.lcZ(22,22,i.users)),e.xp6(2),e.Q6J("ngForOf",i.hours),e.xp6(1),e.Udp("left",i.selection_left+"rem")("width",i.selection_width+"rem"),e.xp6(4),e.hij(" ",e.lcZ(29,24,i.duration)," "),e.xp6(2),e.Q6J("ngIf",i.move_time),e.xp6(2),e.Q6J("mat-dialog-close",!0))},styles:["[disabled=true][_ngcontent-%COMP%]{background:rgba(0,0,0,.05)!important;pointer-events:none}[disabled=true][_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{color:#0000004d}\n/*# sourceMappingURL=find-availability-modal.component.ts-angular-inline--12.css.map*/"]}),o})();function Me(o,n){if(1&o&&(e.TgZ(0,"div",3)(1,"div",4),e._uU(2,"Unavailable"),e.qZA(),e.TgZ(3,"div",5),e._uU(4),e.ALo(5,"date"),e.ALo(6,"date"),e.qZA()()),2&o){const t=n.$implicit;e.Udp("left",t.start+"%")("width",t.size+"%"),e.xp6(4),e.AsE(" ",e.xi3(5,6,t.date,"shortTime")," - ",e.xi3(6,9,t.date.valueOf()+60*t.duration*1e3,"shortTime")," ")}}let L=(()=>{class o{constructor(){this.availability=[],this.date=Date.now(),this.offset=0,this.width=0}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["user-availability-list"]],inputs:{user:"user",availability:"availability",date:"date",offset:"offset",width:"width"},decls:3,vars:5,consts:[[1,"overflow-hidden","relative","border-b","border-gray-300","dark:border-neutral-500","h-full","pointer-events-none"],[1,"absolute","w-[120rem]","h-full","inset-y-0"],["event","","class","absolute inset-y-0 bg-primary text-white p-2 overflow-hidden border border-white rounded",3,"left","width",4,"ngFor","ngForOf"],["event","",1,"absolute","inset-y-0","bg-primary","text-white","p-2","overflow-hidden","border","border-white","rounded"],[1,"text-xs"],[1,"text-xs","max-w-full"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,Me,7,12,"div",2),e.qZA()()),2&t&&(e.Udp("width",i.width+"px"),e.xp6(1),e.Udp("left",-i.offset+"px"),e.xp6(1),e.Q6J("ngForOf",i.availability))},dependencies:[d.sg,d.uU]}),o})();var R=s(5306),Y=s(9685),$=s(7728),Te=s(2306),Ae=s(9697),Ce=s(2193);let Ue=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.ez,m.u5,m.UX,f.Is,V.W,K.K,O.p9,F.Cq,g.Tx]}),o})();e.B6R(H,[d.sg,d.O5,m.JJ,m.On,f.ZT,R.o,Y.k,g.VK,g.OP,g.p6,$.wG,F.Ou,O.oG],[d.uU]),e.B6R(I,[d.sg,d.O5,m.JJ,m.On,f.ZT,Te.Q,Ae.d,R.o,Y.k,$.wG,L],[d.Ov,d.uU,Ce.u]);class Fe{constructor(n={}){this.type=n.type||n.location||"other",this.position=n.position||n.map_id||n.asset_id||{x:n.x/n.map_width||0,y:n.y/n.map_height||0},this.variance=n.variance||0,this.last_seen=n.last_seen||(0,p.Z)(new Date),this.level=n.level,this.building=n.building,this.at_location=!!n.at_location,this.coordinates_from=n.coordinates_from||"top-left"}}s(9375)}}]);
//# sourceMappingURL=default-libs_users_src_index_ts.js.map