"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["default-libs_users_src_index_ts"],{711:(Ae,z,i)=>{i.d(z,{OO:()=>x.OO,Y:()=>we,PP:()=>v,mO:()=>x.mO,n5:()=>x.n5,ro:()=>b.ro,VE:()=>Z.VE,pP:()=>b.pP,w0:()=>Z.w0,sF:()=>b.sF});var a=i(4666),u=i(2508),S=i(1708),_=i(8589),c=i(5699),k=i(4792),L=i(4693),X=i(5170),w=(i(9645),i(9036),i(3918)),b=i(4283),Z=i(9012),x=i(5197),e=i(2560);const M=[],J=new x.n5;class g{transform(o){return(0,w.Z)(function*(){if(!o)return J;let t=M.find(({id:n,email:r})=>n===o||r===o);return t||(t=yield(0,Z.w0)(o).toPromise(),t||(t=yield(0,b.pP)(o).toPromise(),t)?(M.push(t),t):J)})()}}g.\u0275fac=function(o){return new(o||g)},g.\u0275pipe=e.Yjl({name:"user",type:g,pure:!0});var T=i(3770),K=i(312),q=i(8325),D=i(7367),V=i(1170),ee=i(5380),A=i(1810),W=i(9377),P=i(3200),j=i(6962),Q=i(354);function oe(s,o){if(1&s){const t=e.EpF();e.TgZ(0,"div",23)(1,"div",24),e._uU(2),e.ALo(3,"date"),e.qZA(),e.TgZ(4,"div",25)(5,"mat-checkbox",26),e.NdJ("ngModelChange",function(r){const d=e.CHM(t).index,p=e.oxw(2);return e.KtG(p.settings[p.available_weekdays[d]]=r)})("ngModelChange",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.changed=!0)}),e.qZA()()()}if(2&s){const t=o.$implicit,n=o.index,r=e.oxw(2);e.xp6(2),e.hij(" ",e.xi3(3,2,t,"EEE")," "),e.xp6(3),e.Q6J("ngModel",r.settings[r.available_weekdays[n]])}}function ne(s,o){if(1&s){const t=e.EpF();e.TgZ(0,"div",4)(1,"div",5),e._UZ(2,"a-user-avatar",6),e.TgZ(3,"div"),e._uU(4),e.qZA(),e.TgZ(5,"div",7),e._uU(6),e.qZA(),e.TgZ(7,"div",7),e._uU(8),e.qZA()(),e.TgZ(9,"div",8)(10,"h3",9),e._uU(11," Today's Working Location "),e.qZA(),e.TgZ(12,"button",10)(13,"div",11)(14,"div",12),e._uU(15),e.qZA(),e.TgZ(16,"app-icon",13),e._uU(17,"arrow_drop_down"),e.qZA()()(),e.TgZ(18,"div",14)(19,"div",15)(20,"app-icon"),e._uU(21,"home"),e.qZA()(),e.TgZ(22,"div",16),e._uU(23," Today is a working from home day. Available for online meetings. "),e.qZA()()(),e.TgZ(24,"div",17)(25,"h3",9),e._uU(26," Default Office Days "),e.qZA(),e.TgZ(27,"div",18),e.YNc(28,oe,6,5,"div",19),e.qZA()(),e.TgZ(29,"div",20)(30,"button",21),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.saveChanges())}),e._uU(31," Update "),e.qZA()(),e.TgZ(32,"button",22)(33,"app-icon"),e._uU(34,"close"),e.qZA()()()}if(2&s){const t=e.oxw(),n=e.MAs(2);e.xp6(2),e.Q6J("user",t.user),e.xp6(2),e.Oqu(t.user.name),e.xp6(2),e.Oqu(t.user.email),e.xp6(2),e.Oqu(t.user.phone),e.xp6(4),e.Q6J("matMenuTriggerFor",n),e.xp6(3),e.Oqu(t.option),e.xp6(13),e.Q6J("ngForOf",t.weekdays),e.xp6(2),e.Q6J("disabled",!t.changed)}}function ie(s,o){if(1&s){const t=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){const l=e.CHM(t).$implicit,d=e.oxw();return d.option=l.id,e.KtG(d.changed=!0)}),e._uU(1),e.qZA()}if(2&s){const t=o.$implicit;e.uIk("id",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function se(s,o){1&s&&(e.TgZ(0,"div",28),e._UZ(1,"mat-spinner",29),e.TgZ(2,"p"),e._uU(3,"Saving changes to work location settings..."),e.qZA()()),2&s&&(e.xp6(1),e.Q6J("diameter",32))}const H="wfh-days";class h{constructor(o,t){this._settings=o,this._dialog_ref=t,this.options=[{id:"wfo",name:"Work from office (WFO)"},{id:"wfh",name:"Work from home (WFH)"},{id:"aol",name:"Away on Leave (AOL)"}],this.option=this.options[0].id,this.settings=[!0,!0,!0,!0,!0,!0,!0],this.weekdays=[],this.changed=!1,this.loading=!1,this.available_weekdays=[1,2,3,4,5],this._booking=new j.$({type:"wfh-settings",asset_id:this.options[0].id})}ngOnInit(){this.settings=this._settings.get(H)||[!0,!0,!0,!0,!0,!0,!0],this._initWeekdays(),this._loadOptionForToday()}get user(){return(0,T.ar)()}saveChanges(){var o=this;return(0,w.Z)(function*(){o.loading=!0,o._dialog_ref.disableClose=!0,o.option!==o.options[0].id&&o.option!==o._booking.asset_id&&(yield(0,Q.km)(new j.$({...o._booking,asset_id:o.option})).toPromise().catch(t=>{throw o._dialog_ref.disableClose=!1,o.loading=!1,t})),o._settings.saveUserSetting(H,o.settings),o.loading=!1,o._dialog_ref.close()})()}_initWeekdays(){let o=new Date;this.weekdays=this.available_weekdays.map(t=>function te(s,o,t){var n,r,l,d,p,C,F,U;(0,V.Z)(2,arguments);var $=(0,ee.j)(),O=(0,D.Z)(null!==(n=null!==(r=null!==(l=null!==(d=t?.weekStartsOn)&&void 0!==d?d:null==t||null===(p=t.locale)||void 0===p||null===(C=p.options)||void 0===C?void 0:C.weekStartsOn)&&void 0!==l?l:$.weekStartsOn)&&void 0!==r?r:null===(F=$.locale)||void 0===F||null===(U=F.options)||void 0===U?void 0:U.weekStartsOn)&&void 0!==n?n:0);if(!(O>=0&&O<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var Y=(0,q.Z)(s),y=(0,D.Z)(o),I=Y.getDay(),Me=(y%7+7)%7,E=7-O;return(0,K.Z)(Y,y<0||y>6?y-(I+E)%7:(Me+E)%7-(I+E)%7)}(o,t).valueOf())}_loadOptionForToday(){var o=this;return(0,w.Z)(function*(){const t=yield(0,Q.F2)({type:"wfh-setting",period_start:(0,A.Z)((0,W.Z)(Date.now())),period_end:(0,A.Z)((0,P.Z)(Date.now()))}).toPromise();t.length&&(o.option=t[0].asset_id,o._booking=t[0])})()}}h.\u0275fac=function(o){return new(o||h)(e.Y36(T.gb),e.Y36(c.so))},h.\u0275cmp=e.Xpm({type:h,selectors:[["wfh-settings-modal"]],decls:6,vars:3,consts:[["class","relative flex flex-col rounded overflow-hidden w-[18rem]",4,"ngIf","ngIfElse"],["menu","matMenu"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["load_state",""],[1,"relative","flex","flex-col","rounded","overflow-hidden","w-[18rem]"],[1,"w-full","px-4","py-8","flex","flex-col","items-center","border-b","border-gray-200"],[3,"user"],[1,"text-xs","opacity-30"],[1,"w-full","p-4","flex","flex-col","border-b","border-gray-200"],[1,"-mt-2","mb-2","text-sm","font-medium"],["matRipple","","today-location","",1,"inverse","rounded-3xl","w-auto",3,"matMenuTriggerFor"],[1,"flex","items-center","justify-between"],[1,"uppercase"],[1,"text-2xl"],[1,"flex","items-center","pt-4","space-x-2"],[1,"h-8","w-8","rounded-full","bg-gray-300","dark:bg-neutral-800","flex","items-center","justify-center"],[1,"flex-1","w-1/2","text-sm"],[1,"w-full","p-4","flex","flex-col"],[1,"border","border-gray-200","rounded","flex","items-center","justify-between","px-2","pt-2"],["class","flex flex-col items-center",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-end","px-4","pb-4"],["matRipple","","save","",3,"disabled","click"],["icon","","matRipple","","mat-dialog-close","",1,"absolute","top-0","left-0"],[1,"flex","flex-col","items-center"],[1,"text-sm","font-light"],[1,"h-8","w-8","flex","items-center","justify-center","pr-2"],[3,"ngModel","ngModelChange"],["mat-menu-item","",3,"click"],["loading","",1,"relative","bg-white","flex","flex-col","justify-center","items-center","rounded","overflow-hidden","w-[18rem]","h-[18rem]"],[3,"diameter"]],template:function(o,t){if(1&o&&(e.YNc(0,ne,35,8,"div",0),e.TgZ(1,"mat-menu",null,1),e.YNc(3,ie,2,2,"button",2),e.qZA(),e.YNc(4,se,4,1,"ng-template",null,3,e.W1O)),2&o){const n=e.MAs(5);e.Q6J("ngIf",!t.loading)("ngIfElse",n),e.xp6(3),e.Q6J("ngForOf",t.options)}}});var re=i(5845),ae=i(2317);const le=["container"];function de(s,o){if(1&s&&(e.TgZ(0,"div",26),e._UZ(1,"a-user-avatar",11),e.TgZ(2,"div",27),e._uU(3),e.qZA(),e.TgZ(4,"button",28)(5,"app-icon"),e._uU(6,"close"),e.qZA()(),e._UZ(7,"user-availability-list",13),e.qZA()),2&s){const t=o.$implicit,n=e.oxw();e.xp6(1),e.Q6J("user",n.host),e.xp6(2),e.hij(" ",t.name||n.host.email," "),e.xp6(4),e.Q6J("user",t)("date",n.date)("offset",n.offset)("width",n.width)}}function ue(s,o){if(1&s&&(e.TgZ(0,"div",29)(1,"div",30),e._uU(2),e.qZA()()),2&s){const t=o.index,n=e.oxw();e.uIk("hour",t)("disabled",n.today&&t<n.current_hour),e.xp6(2),e.AsE(" ",t%12?t%12:"12","",t>=12?"pm":"am"," ")}}function ce(s,o){if(1&s&&(e.TgZ(0,"div",31),e._uU(1),e.ALo(2,"date"),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.hij(" ",e.xi3(2,1,t.date,"shortTime")," ")}}class m extends T.KG{constructor(o,t,n){super(),this._data=o,this._renderer=t,this._dialog_ref=n,this.search="",this.date=this._data.date||Date.now(),this.duration=this._data.duration||60,this.users=[...this._data.users],this.offset=0,this.width=0,this.host=this._data.host,this.hours=new Array(24).fill(0),this.move_time=!1,this._start_time=0,this._move_last=0,this._move_size=0}get today(){return(0,re.Z)(this.date,Date.now())}get current_hour(){return(new Date).getHours()}get selection_left(){const o=new Date(this.date);return 5*(o.getHours()+o.getMinutes()/60)+6}get selection_width(){return this.duration/60*5}addUser(o){this.users=[...this.users.filter(t=>t.email!==o.email),o],this.user=null}closeAndUpdate(){this._dialog_ref.close(!0)}ngAfterViewInit(){const o=new Date(this.date);this.timeout("init",()=>{const t=this._container_el.nativeElement.querySelector(`[hour="${o.getHours()}"]`);if(t){const n=this._container_el.nativeElement.getBoundingClientRect(),r=t.getBoundingClientRect();this._container_el.nativeElement.scrollTo(r.left-128-n.left,0)}this.updateWidth(),this.updateScroll()},300)}updateWidth(){const o=this._container_el.nativeElement.getBoundingClientRect().width,t=this._container_el.nativeElement.querySelector("[users]").getBoundingClientRect().width;this.width=Math.floor(o-t),this._move_size=24*this._container_el.nativeElement.querySelector("[hour]").getBoundingClientRect().width}updateScroll(){this.offset=this._container_el.nativeElement.scrollLeft}startMovePeriod(o){o.preventDefault(),o.stopPropagation(),this.updateWidth(),this._move_last=o instanceof MouseEvent?o.clientX:o.touches[0].clientX,this.move_time=!0,this._start_time=this.date,o instanceof MouseEvent?this.subscription("on_move",this._renderer.listen("window","mousemove",t=>this._onMovePeriod(t))):this.subscription("on_move",this._renderer.listen("window","touchmove",t=>this._onMovePeriod(t))),o instanceof MouseEvent?this.subscription("on_move_end",this._renderer.listen("window","mouseup",()=>this._onMoveEnd())):this.subscription("on_move_end",this._renderer.listen("window","touchend",()=>this._onMoveEnd()))}startMoveDuration(o){o.preventDefault(),o.stopPropagation(),this.updateWidth(),this._move_last=o instanceof MouseEvent?o.clientX:o.touches[0].clientX,this._start_time=this.duration,o instanceof MouseEvent?this.subscription("on_move",this._renderer.listen("window","mousemove",t=>this._onMoveDuration(t))):this.subscription("on_move",this._renderer.listen("window","touchmove",t=>this._onMoveDuration(t))),o instanceof MouseEvent?this.subscription("on_move_end",this._renderer.listen("window","mouseup",()=>this._onMoveEnd())):this.subscription("on_move_end",this._renderer.listen("window","touchend",()=>this._onMoveEnd()))}_onMovePeriod(o){const t=this._move_last-(o instanceof MouseEvent?o.clientX:o.touches[0].clientX),r=(t>0?-1:1)*Math.floor(Math.abs(t/this._move_size*24*60)/5)*5;if(r){const l=this.date;this.date=(0,ae.Z)(this._start_time,r).valueOf(),this.date<Date.now()&&(this.date=l)}}_onMoveDuration(o){const t=this._move_last-(o instanceof MouseEvent?o.clientX:o.touches[0].clientX),r=(t>0?-1:1)*Math.floor(Math.abs(t/this._move_size*24*60)/5)*5;r&&(this.duration=Math.max(30,this._start_time+r))}_onMoveEnd(){this.unsub("on_move"),this.unsub("on_move_end"),this._move_last=0,this.move_time=!1}}m.\u0275fac=function(o){return new(o||m)(e.Y36(c.WI),e.Y36(e.Qsj),e.Y36(c.so))},m.\u0275cmp=e.Xpm({type:m,selectors:[["find-availability-modal"]],viewQuery:function(o,t){if(1&o&&e.Gf(le,7),2&o){let n;e.iGM(n=e.CRH())&&(t._container_el=n.first)}},features:[e.qOj],decls:35,vars:19,consts:[[1,"relative","flex","items-center","justify-center","p-4"],[1,"text-center"],["icon","","matRipple","","mat-dialog-close","",1,"absolute","top-1/2","left-1","-translate-y-1/2"],[1,"flex","flex-col","h-[calc(100vh-7rem)]","sm:h-[65vh]",3,"resize"],[1,"w-full","flex","flex-col","sm:flex-row","space-y-2","sm:space-y-0","sm:space-x-2","p-2"],[1,"max-h-[3.25rem]","flex-1",3,"ngModel","ngModelChange"],[1,"flex","flex-1","h-1/2","w-full","border-t","border-gray-300","dark:border-neutral-500","relative","overflow-auto","divide-x","divide-gray-300","dark:divide-neutral-500","max-w-[100vw]","sm:max-w-[80vw]",3,"scroll"],["container",""],["users","",1,"sticky","left-0","min-h-full","bg-white","dark:bg-neutral-700","border-r","border-gray-300","dark:border-neutral-500","z-30"],["header","",1,"h-10","w-[6rem]","border-b","border-gray-300","dark:border-neutral-500"],["host","",1,"flex","flex-col","items-center","justify-center","h-32","w-[6rem]","relative","border-b","border-gray-300","dark:border-neutral-500","py-2"],[1,"text-2xl",3,"user"],[1,"text-xs","break-words","overflow-hidden","max-w-full","px-2","text-center"],[1,"absolute","top-0","-bottom-px","left-full","pointer-events-none",3,"user","date","offset","width"],["person","","class","flex flex-col items-center justify-center h-32 w-[6rem] relative border-b border-gray-300 dark:border-neutral-500 py-2",4,"ngFor","ngForOf"],["class","min-w-[5rem] bg-gray-50 dark:bg-neutral-600 min-h-full pointer-events-none",4,"ngFor","ngForOf"],["selection","",1,"absolute","top-10","bottom-0","!border-x-2","!border-blue-500","bg-blue-500/30","z-20","cursor-grab","active:cursor-grabbing",3,"mousedown","touchstart"],["handle","",1,"absolute","top-1/2","-left-px","-translate-x-1/2","-translate-y-1/2","h-3","w-3","rounded-full","bg-blue-500"],["handle","",1,"absolute","top-1/2","-right-px","translate-x-1/2","-translate-y-1/2","h-3","w-3","rounded-full","bg-blue-500","hover:h-4","hover:w-4","active:bg-primary",3,"mousedown","touchstart"],[1,"bg-white","dark:bg-neutral-600","border","border-gray-300","dark:border-neutral-500","p-2","absolute","top-2","left-1/2","-translate-x-1/2","shadow","text-xs","whitespace-nowrap","rounded"],["class","bg-white dark:bg-neutral-600 border border-gray-300 dark:border-neutral-500 p-2 absolute top-12 left-1/2 -translate-x-1/2 shadow text-xs whitespace-nowrap rounded",4,"ngIf"],[1,"flex","items-center","justify-between","p-2","border-t","border-gray-200","dark:border-neutral-500","w-full"],["matRipple","",1,"clear","text-primary",3,"mat-dialog-close"],[1,"flex","items-center"],[1,"text-xl"],[1,"mr-1","underline"],["person","",1,"flex","flex-col","items-center","justify-center","h-32","w-[6rem]","relative","border-b","border-gray-300","dark:border-neutral-500","py-2"],[1,"text-xs","break-words","max-w-full","px-2","text-center"],["icon","",1,"absolute","-top-1","-left-1"],[1,"min-w-[5rem]","bg-gray-50","dark:bg-neutral-600","min-h-full","pointer-events-none"],["header","",1,"h-10","border-b","border-gray-300","dark:border-neutral-500","p-2"],[1,"bg-white","dark:bg-neutral-600","border","border-gray-300","dark:border-neutral-500","p-2","absolute","top-12","left-1/2","-translate-x-1/2","shadow","text-xs","whitespace-nowrap","rounded"]],template:function(o,t){1&o&&(e.TgZ(0,"header",0)(1,"h2",1),e._uU(2,"Find Availability"),e.qZA(),e.TgZ(3,"button",2)(4,"app-icon"),e._uU(5,"close"),e.qZA()()(),e.TgZ(6,"main",3),e.NdJ("resize",function(){return t.updateWidth()},!1,e.Jf7),e.TgZ(7,"div",4)(8,"a-date-field",5),e.NdJ("ngModelChange",function(r){return t.date=r}),e.qZA(),e.TgZ(9,"a-user-search-field",5),e.NdJ("ngModelChange",function(r){return t.user=r})("ngModelChange",function(r){return t.addUser(r)}),e.qZA()(),e.TgZ(10,"div",6,7),e.NdJ("scroll",function(){return t.updateScroll()}),e.TgZ(12,"div",8),e._UZ(13,"div",9),e.TgZ(14,"div",10),e._UZ(15,"a-user-avatar",11),e.TgZ(16,"div",12),e._uU(17),e.qZA(),e._UZ(18,"user-availability-list",13),e.qZA(),e.YNc(19,de,8,6,"div",14),e.qZA(),e.YNc(20,ue,3,4,"div",15),e.TgZ(21,"div",16),e.NdJ("mousedown",function(r){return t.startMovePeriod(r)})("touchstart",function(r){return t.startMovePeriod(r)}),e._UZ(22,"div",17),e.TgZ(23,"div",18),e.NdJ("mousedown",function(r){return t.startMoveDuration(r)})("touchstart",function(r){return t.startMoveDuration(r)}),e.qZA(),e.TgZ(24,"div",19),e._uU(25),e.ALo(26,"duration"),e.qZA(),e.YNc(27,ce,3,4,"div",20),e.qZA()()(),e.TgZ(28,"footer",21)(29,"button",22)(30,"div",23)(31,"app-icon",24),e._uU(32,"arrow_back"),e.qZA(),e.TgZ(33,"div",25),e._uU(34,"Back to form"),e.qZA()()()()),2&o&&(e.xp6(8),e.Q6J("ngModel",t.date),e.xp6(1),e.Q6J("ngModel",t.user),e.xp6(6),e.Q6J("user",t.host),e.xp6(2),e.hij(" ",t.host.name||t.host.email," "),e.xp6(1),e.Q6J("user",t.host)("date",t.date)("offset",t.offset)("width",t.width),e.xp6(1),e.Q6J("ngForOf",t.users),e.xp6(1),e.Q6J("ngForOf",t.hours),e.xp6(1),e.Udp("left",t.selection_left+"rem")("width",t.selection_width+"rem"),e.xp6(4),e.hij(" ",e.lcZ(26,17,t.duration)," "),e.xp6(2),e.Q6J("ngIf",t.move_time),e.xp6(2),e.Q6J("mat-dialog-close",!0))},styles:["[disabled=true][_ngcontent-%COMP%]{background:rgba(0,0,0,.05)!important;pointer-events:none}[disabled=true][_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{color:#0000004d}\n/*# sourceMappingURL=find-availability-modal.component.ts-angular-inline--12.css.map*/"]});var he=i(4505),me=i(9151),fe=i(9095),ve=i(6942),pe=i(9128),ge=i(4211);function _e(s,o){if(1&s&&(e.TgZ(0,"div",3)(1,"div"),e._uU(2,"Unavailable"),e.qZA(),e.TgZ(3,"div"),e._uU(4),e.ALo(5,"date"),e.ALo(6,"date"),e.qZA()()),2&s){const t=o.$implicit;e.Udp("left",t.start+"%")("width",t.size+"%"),e.xp6(4),e.AsE(" ",e.xi3(5,6,t.date,"shortTime")," - ",e.xi3(6,9,t.date+60*t.duration*1e3,"shortTime")," ")}}class f{constructor(){this.date=Date.now(),this.offset=0,this.width=0,this._user$=new he.X(null),this.availability=this._user$.pipe((0,me.h)(o=>o),(0,fe.w)(o=>(0,ge.u$)({calendars:o.email,period_start:(0,W.Z)(this.date).valueOf(),period_end:(0,P.Z)(this.date).valueOf()})),(0,ve.U)(o=>o.map(t=>({date:t.date,duration:t.duration,start:(new Date(t.date).getHours()+new Date(t.date).getMinutes()/60)/24,size:t.duration/60/24}))),(0,pe.d)(1))}ngOnChanges(o){o.user&&this.user&&this._user$.next(this.user)}}f.\u0275fac=function(o){return new(o||f)},f.\u0275cmp=e.Xpm({type:f,selectors:[["user-availability-list"]],inputs:{user:"user",date:"date",offset:"offset",width:"width"},features:[e.TTD],decls:4,vars:5,consts:[[1,"overflow-hidden","relative","border-b","border-gray-300","dark:border-neutral-500","h-full","pointer-events-none"],[1,"w-[120rem]","h-px"],["event","","class","absolute inset-y-0 bg-primary rounded-lg text-white",3,"left","width",4,"ngFor","ngForOf"],["event","",1,"absolute","inset-y-0","bg-primary","rounded-lg","text-white"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.YNc(2,_e,7,12,"div",2),e.ALo(3,"async"),e.qZA()),2&o&&(e.Udp("width",t.width+"px"),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,3,t.availability)))},dependencies:[a.sg,a.Ov,a.uU]});var N=i(5306),R=i(9685),be=i(2306),xe=i(9697),ye=i(2193);class v{}v.\u0275fac=function(o){return new(o||v)},v.\u0275mod=e.oAB({type:v}),v.\u0275inj=e.cJS({imports:[a.ez,u.u5,u.UX,c.Is,X.W,L.K,k.p9,S.Cq,_.Tx]}),e.B6R(h,[a.sg,a.O5,u.JJ,u.On,c.ZT,N.o,R.k,_.VK,_.OP,_.p6,S.Ou,k.oG],[a.uU]),e.B6R(m,[a.sg,a.O5,u.JJ,u.On,c.ZT,be.Q,xe.d,N.o,R.k,f],[a.uU,ye.u]);class we{constructor(o={}){this.type=o.type||o.location||"other",this.position=o.position||o.map_id||o.asset_id||{x:o.x/o.map_width||0,y:o.y/o.map_height||0},this.variance=o.variance||0,this.last_seen=o.last_seen||(0,A.Z)(new Date),this.level=o.level,this.building=o.building,this.at_location=!!o.at_location,this.coordinates_from=o.coordinates_from||"top-left"}}i(9375)}}]);
//# sourceMappingURL=default-libs_users_src_index_ts.js.map