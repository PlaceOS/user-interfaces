"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["default-libs_users_src_index_ts"],{711:(Ct,z,s)=>{s.d(z,{OO:()=>_.OO,Y:()=>Zt,PP:()=>wt,mO:()=>_.mO,ro:()=>f.ro,VE:()=>g.VE,pP:()=>f.pP,w0:()=>g.w0,sF:()=>f.sF});var l=s(4666),u=s(2508),C=s(1708),m=s(8589),c=s(1484),U=s(4792),L=s(3723),R=s(5170),p=(s(9645),s(9036),s(1670)),f=s(4283),g=s(9012),_=s(5197),t=s(2560);new _.n5;var x=s(9112),K=s(312),q=s(8325),O=s(7367),V=s(1170),tt=s(5380),y=s(1810),E=s(9377),S=s(3200),J=s(6962),D=s(354);function ot(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",23)(1,"div",24),t._uU(2),t.ALo(3,"date"),t.qZA(),t.TgZ(4,"div",25)(5,"mat-checkbox",26),t.NdJ("ngModelChange",function(a){const d=t.CHM(e).index,h=t.oxw(2);return t.KtG(h.settings[h.available_weekdays[d]]=a)})("ngModelChange",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.changed=!0)}),t.qZA()()()}if(2&n){const e=i.$implicit,o=i.index,a=t.oxw(2);t.xp6(2),t.hij(" ",t.xi3(3,2,e,"EEE")," "),t.xp6(3),t.Q6J("ngModel",a.settings[a.available_weekdays[o]])}}function nt(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",4)(1,"div",5),t._UZ(2,"a-user-avatar",6),t.TgZ(3,"div"),t._uU(4),t.qZA(),t.TgZ(5,"div",7),t._uU(6),t.qZA(),t.TgZ(7,"div",7),t._uU(8),t.qZA()(),t.TgZ(9,"div",8)(10,"h3",9),t._uU(11," Today's Working Location "),t.qZA(),t.TgZ(12,"button",10)(13,"div",11)(14,"div",12),t._uU(15),t.qZA(),t.TgZ(16,"app-icon",13),t._uU(17,"arrow_drop_down"),t.qZA()()(),t.TgZ(18,"div",14)(19,"div",15)(20,"app-icon"),t._uU(21,"home"),t.qZA()(),t.TgZ(22,"div",16),t._uU(23," Today is a working from home day. Available for online meetings. "),t.qZA()()(),t.TgZ(24,"div",17)(25,"h3",9),t._uU(26," Default Office Days "),t.qZA(),t.TgZ(27,"div",18),t.YNc(28,ot,6,5,"div",19),t.qZA()(),t.TgZ(29,"div",20)(30,"button",21),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.saveChanges())}),t._uU(31," Update "),t.qZA()(),t.TgZ(32,"button",22)(33,"app-icon"),t._uU(34,"close"),t.qZA()()()}if(2&n){const e=t.oxw(),o=t.MAs(2);t.xp6(2),t.Q6J("user",e.user),t.xp6(2),t.Oqu(e.user.name),t.xp6(2),t.Oqu(e.user.email),t.xp6(2),t.Oqu(e.user.phone),t.xp6(4),t.Q6J("matMenuTriggerFor",o),t.xp6(3),t.Oqu(e.option),t.xp6(13),t.Q6J("ngForOf",e.weekdays),t.xp6(2),t.Q6J("disabled",!e.changed)}}function it(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){const r=t.CHM(e).$implicit,d=t.oxw();return d.option=r.id,t.KtG(d.changed=!0)}),t._uU(1),t.qZA()}if(2&n){const e=i.$implicit;t.uIk("id",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function st(n,i){1&n&&(t.TgZ(0,"div",28),t._UZ(1,"mat-spinner",29),t.TgZ(2,"p"),t._uU(3,"Saving changes to work location settings..."),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("diameter",32))}const W="wfh-days";let P=(()=>{class n{constructor(e,o){this._settings=e,this._dialog_ref=o,this.options=[{id:"wfo",name:"Work from office (WFO)"},{id:"wfh",name:"Work from home (WFH)"},{id:"aol",name:"Away on Leave (AOL)"}],this.option=this.options[0].id,this.settings=[!0,!0,!0,!0,!0,!0,!0],this.weekdays=[],this.changed=!1,this.loading=!1,this.available_weekdays=[1,2,3,4,5],this._booking=new J.$({type:"wfh-settings",asset_id:this.options[0].id})}ngOnInit(){this.settings=this._settings.get(W)||[!0,!0,!0,!0,!0,!0,!0],this._initWeekdays(),this._loadOptionForToday()}get user(){return(0,x.ar)()}saveChanges(){var e=this;return(0,p.Z)(function*(){e.loading=!0,e._dialog_ref.disableClose=!0,e.option!==e.options[0].id&&e.option!==e._booking.asset_id&&(yield(0,D.km)(new J.$({...e._booking,asset_id:e.option})).toPromise().catch(o=>{throw e._dialog_ref.disableClose=!1,e.loading=!1,o})),e._settings.saveUserSetting(W,e.settings),e.loading=!1,e._dialog_ref.close()})()}_initWeekdays(){let e=new Date;this.weekdays=this.available_weekdays.map(o=>function et(n,i,e){var o,a,r,d,h,w,Z,M;(0,V.Z)(2,arguments);var $=(0,tt.j)(),T=(0,O.Z)(null!==(o=null!==(a=null!==(r=null!==(d=e?.weekStartsOn)&&void 0!==d?d:null==e||null===(h=e.locale)||void 0===h||null===(w=h.options)||void 0===w?void 0:w.weekStartsOn)&&void 0!==r?r:$.weekStartsOn)&&void 0!==a?a:null===(Z=$.locale)||void 0===Z||null===(M=Z.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==o?o:0);if(!(T>=0&&T<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var Y=(0,q.Z)(n),v=(0,O.Z)(i),I=Y.getDay(),Tt=(v%7+7)%7,A=7-T;return(0,K.Z)(Y,v<0||v>6?v-(I+A)%7:(Tt+A)%7-(I+A)%7)}(e,o).valueOf())}_loadOptionForToday(){var e=this;return(0,p.Z)(function*(){const o=yield(0,D.F2)({type:"wfh-setting",period_start:(0,y.Z)((0,E.Z)(Date.now())),period_end:(0,y.Z)((0,S.Z)(Date.now()))}).toPromise();o.length&&(e.option=o[0].asset_id,e._booking=o[0])})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(x.gb),t.Y36(c.so))},n.\u0275cmp=t.Xpm({type:n,selectors:[["wfh-settings-modal"]],decls:6,vars:3,consts:[["class","relative flex flex-col rounded overflow-hidden w-[18rem]",4,"ngIf","ngIfElse"],["menu","matMenu"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["load_state",""],[1,"relative","flex","flex-col","rounded","overflow-hidden","w-[18rem]"],[1,"w-full","px-4","py-8","flex","flex-col","items-center","border-b","border-gray-200"],[3,"user"],[1,"text-xs","opacity-30"],[1,"w-full","p-4","flex","flex-col","border-b","border-gray-200"],[1,"-mt-2","mb-2","text-sm","font-medium"],["mat-button","","today-location","",1,"inverse","rounded-3xl","w-auto",3,"matMenuTriggerFor"],[1,"flex","items-center","justify-between"],[1,"uppercase"],[1,"text-2xl"],[1,"flex","items-center","pt-4","space-x-2"],[1,"h-8","w-8","rounded-full","bg-gray-300","dark:bg-neutral-800","flex","items-center","justify-center"],[1,"flex-1","w-1/2","text-sm"],[1,"w-full","p-4","flex","flex-col"],[1,"border","border-gray-200","rounded","flex","items-center","justify-between","px-2","pt-2"],["class","flex flex-col items-center",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-end","px-4","pb-4"],["mat-button","","save","",3,"disabled","click"],["mat-icon-button","","mat-dialog-close","",1,"absolute","top-0","left-0"],[1,"flex","flex-col","items-center"],[1,"text-sm","font-light"],[1,"h-8","w-8","flex","items-center","justify-center","pr-2"],[3,"ngModel","ngModelChange"],["mat-menu-item","",3,"click"],["loading","",1,"relative","bg-white","flex","flex-col","justify-center","items-center","rounded","overflow-hidden","w-[18rem]","h-[18rem]"],[3,"diameter"]],template:function(e,o){if(1&e&&(t.YNc(0,nt,35,8,"div",0),t.TgZ(1,"mat-menu",null,1),t.YNc(3,it,2,2,"button",2),t.qZA(),t.YNc(4,st,4,1,"ng-template",null,3,t.W1O)),2&e){const a=t.MAs(5);t.Q6J("ngIf",!o.loading)("ngIfElse",a),t.xp6(3),t.Q6J("ngForOf",o.options)}}}),n})();var at=s(5845),rt=s(2317);const lt=["container"];function dt(n,i){if(1&n&&(t.TgZ(0,"div",26),t._UZ(1,"a-user-avatar",11),t.TgZ(2,"div",27),t._uU(3),t.qZA(),t.TgZ(4,"button",28)(5,"app-icon"),t._uU(6,"close"),t.qZA()(),t._UZ(7,"user-availability-list",13),t.qZA()),2&n){const e=i.$implicit,o=t.oxw();t.xp6(1),t.Q6J("user",o.host),t.xp6(2),t.hij(" ",e.name||o.host.email," "),t.xp6(4),t.Q6J("user",e)("date",o.date)("offset",o.offset)("width",o.width)}}function ut(n,i){if(1&n&&(t.TgZ(0,"div",29)(1,"div",30),t._uU(2),t.qZA()()),2&n){const e=i.index,o=t.oxw();t.uIk("hour",e)("disabled",o.today&&e<o.current_hour),t.xp6(2),t.AsE(" ",e%12?e%12:"12","",e>=12?"pm":"am"," ")}}function ct(n,i){if(1&n&&(t.TgZ(0,"div",31),t._uU(1),t.ALo(2,"date"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",t.xi3(2,1,e.date,"shortTime")," ")}}let j=(()=>{class n extends x.KG{constructor(e,o,a){super(),this._data=e,this._renderer=o,this._dialog_ref=a,this.search="",this.date=this._data.date||Date.now(),this.duration=this._data.duration||60,this.users=[...this._data.users],this.offset=0,this.width=0,this.host=this._data.host,this.hours=new Array(24).fill(0),this.move_time=!1,this._start_time=0,this._move_last=0,this._move_size=0}get today(){return(0,at.Z)(this.date,Date.now())}get current_hour(){return(new Date).getHours()}get selection_left(){const e=new Date(this.date);return 5*(e.getHours()+e.getMinutes()/60)+6}get selection_width(){return this.duration/60*5}addUser(e){this.users=[...this.users.filter(o=>o.email!==e.email),e],this.user=null}closeAndUpdate(){this._dialog_ref.close(!0)}ngAfterViewInit(){const e=new Date(this.date);this.timeout("init",()=>{const o=this._container_el.nativeElement.querySelector(`[hour="${e.getHours()}"]`);if(o){const a=this._container_el.nativeElement.getBoundingClientRect(),r=o.getBoundingClientRect();this._container_el.nativeElement.scrollTo(r.left-128-a.left,0)}this.updateWidth(),this.updateScroll()},300)}updateWidth(){const e=this._container_el.nativeElement.getBoundingClientRect().width,o=this._container_el.nativeElement.querySelector("[users]").getBoundingClientRect().width;this.width=Math.floor(e-o),this._move_size=24*this._container_el.nativeElement.querySelector("[hour]").getBoundingClientRect().width}updateScroll(){this.offset=this._container_el.nativeElement.scrollLeft}startMovePeriod(e){e.preventDefault(),e.stopPropagation(),this.updateWidth(),this._move_last=e instanceof MouseEvent?e.clientX:e.touches[0].clientX,this.move_time=!0,this._start_time=this.date,e instanceof MouseEvent?this.subscription("on_move",this._renderer.listen("window","mousemove",o=>this._onMovePeriod(o))):this.subscription("on_move",this._renderer.listen("window","touchmove",o=>this._onMovePeriod(o))),e instanceof MouseEvent?this.subscription("on_move_end",this._renderer.listen("window","mouseup",()=>this._onMoveEnd())):this.subscription("on_move_end",this._renderer.listen("window","touchend",()=>this._onMoveEnd()))}startMoveDuration(e){e.preventDefault(),e.stopPropagation(),this.updateWidth(),this._move_last=e instanceof MouseEvent?e.clientX:e.touches[0].clientX,this._start_time=this.duration,e instanceof MouseEvent?this.subscription("on_move",this._renderer.listen("window","mousemove",o=>this._onMoveDuration(o))):this.subscription("on_move",this._renderer.listen("window","touchmove",o=>this._onMoveDuration(o))),e instanceof MouseEvent?this.subscription("on_move_end",this._renderer.listen("window","mouseup",()=>this._onMoveEnd())):this.subscription("on_move_end",this._renderer.listen("window","touchend",()=>this._onMoveEnd()))}_onMovePeriod(e){const o=this._move_last-(e instanceof MouseEvent?e.clientX:e.touches[0].clientX),r=(o>0?-1:1)*Math.floor(Math.abs(o/this._move_size*24*60)/5)*5;if(r){const d=this.date;this.date=(0,rt.Z)(this._start_time,r).valueOf(),this.date<Date.now()&&(this.date=d)}}_onMoveDuration(e){const o=this._move_last-(e instanceof MouseEvent?e.clientX:e.touches[0].clientX),r=(o>0?-1:1)*Math.floor(Math.abs(o/this._move_size*24*60)/5)*5;r&&(this.duration=Math.max(30,this._start_time+r))}_onMoveEnd(){this.unsub("on_move"),this.unsub("on_move_end"),this._move_last=0,this.move_time=!1}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.WI),t.Y36(t.Qsj),t.Y36(c.so))},n.\u0275cmp=t.Xpm({type:n,selectors:[["find-availability-modal"]],viewQuery:function(e,o){if(1&e&&t.Gf(lt,7),2&e){let a;t.iGM(a=t.CRH())&&(o._container_el=a.first)}},features:[t.qOj],decls:35,vars:19,consts:[[1,"relative","flex","items-center","justify-center","p-4"],[1,"text-center"],["mat-icon-button","","mat-dialog-close","",1,"absolute","top-1/2","left-1","-translate-y-1/2"],[1,"flex","flex-col","h-[calc(100vh-7rem)]","sm:h-[65vh]",3,"resize"],[1,"w-full","flex","flex-col","sm:flex-row","space-y-2","sm:space-y-0","sm:space-x-2","p-2"],[1,"max-h-[3.25rem]","flex-1",3,"ngModel","ngModelChange"],[1,"flex","flex-1","h-1/2","w-full","border-t","border-gray-300","relative","overflow-auto","divide-x","divide-gray-300","max-w-[100vw]","sm:max-w-[80vw]",3,"scroll"],["container",""],["users","",1,"sticky","left-0","min-h-full","bg-white","border-r","border-gray-300","z-30"],["header","",1,"h-10","w-[6rem]","border-b","border-gray-300"],["host","",1,"flex","flex-col","items-center","justify-center","h-32","w-[6rem]","relative","border-b","border-gray-300","py-2"],[1,"text-2xl",3,"user"],[1,"text-xs","break-words","overflow-hidden","max-w-full","px-2","text-center"],[1,"absolute","top-0","-bottom-px","left-full","pointer-events-none",3,"user","date","offset","width"],["person","","class","flex flex-col items-center justify-center h-32 w-[6rem] relative border-b border-gray-300 py-2",4,"ngFor","ngForOf"],["class","min-w-[5rem] bg-gray-50 min-h-full pointer-events-none",4,"ngFor","ngForOf"],["selection","",1,"absolute","top-10","bottom-0","!border-x-2","!border-blue-500","bg-blue-500/30","z-20","cursor-grab","active:cursor-grabbing",3,"mousedown","touchstart"],["handle","",1,"absolute","top-1/2","-left-px","-translate-x-1/2","-translate-y-1/2","h-3","w-3","rounded-full","bg-blue-500"],["handle","",1,"absolute","top-1/2","-right-px","translate-x-1/2","-translate-y-1/2","h-3","w-3","rounded-full","bg-blue-500","hover:h-4","hover:w-4","active:bg-primary",3,"mousedown","touchstart"],[1,"bg-white","dark:bg-neutral-600","border","border-gray-300","p-2","absolute","top-2","left-1/2","-translate-x-1/2","shadow","text-xs","whitespace-nowrap","rounded"],["class","bg-white dark:bg-neutral-600 border border-gray-300 p-2 absolute top-12 left-1/2 -translate-x-1/2 shadow text-xs whitespace-nowrap rounded",4,"ngIf"],[1,"flex","items-center","justify-between","p-2","border-t","border-gray-200","dark:border-neutral-500","w-full"],["mat-button","",1,"clear","text-primary",3,"mat-dialog-close"],[1,"flex","items-center"],[1,"text-xl"],[1,"mr-1","underline"],["person","",1,"flex","flex-col","items-center","justify-center","h-32","w-[6rem]","relative","border-b","border-gray-300","py-2"],[1,"text-xs","break-words","max-w-full","px-2","text-center"],["mat-icon-button","",1,"absolute","-top-1","-left-1"],[1,"min-w-[5rem]","bg-gray-50","min-h-full","pointer-events-none"],["header","",1,"h-10","border-b","border-gray-300","p-2"],[1,"bg-white","dark:bg-neutral-600","border","border-gray-300","p-2","absolute","top-12","left-1/2","-translate-x-1/2","shadow","text-xs","whitespace-nowrap","rounded"]],template:function(e,o){1&e&&(t.TgZ(0,"header",0)(1,"h2",1),t._uU(2,"Find Availability"),t.qZA(),t.TgZ(3,"button",2)(4,"app-icon"),t._uU(5,"close"),t.qZA()()(),t.TgZ(6,"main",3),t.NdJ("resize",function(){return o.updateWidth()},!1,t.Jf7),t.TgZ(7,"div",4)(8,"a-date-field",5),t.NdJ("ngModelChange",function(r){return o.date=r}),t.qZA(),t.TgZ(9,"a-user-search-field",5),t.NdJ("ngModelChange",function(r){return o.user=r})("ngModelChange",function(r){return o.addUser(r)}),t.qZA()(),t.TgZ(10,"div",6,7),t.NdJ("scroll",function(){return o.updateScroll()}),t.TgZ(12,"div",8),t._UZ(13,"div",9),t.TgZ(14,"div",10),t._UZ(15,"a-user-avatar",11),t.TgZ(16,"div",12),t._uU(17),t.qZA(),t._UZ(18,"user-availability-list",13),t.qZA(),t.YNc(19,dt,8,6,"div",14),t.qZA(),t.YNc(20,ut,3,4,"div",15),t.TgZ(21,"div",16),t.NdJ("mousedown",function(r){return o.startMovePeriod(r)})("touchstart",function(r){return o.startMovePeriod(r)}),t._UZ(22,"div",17),t.TgZ(23,"div",18),t.NdJ("mousedown",function(r){return o.startMoveDuration(r)})("touchstart",function(r){return o.startMoveDuration(r)}),t.qZA(),t.TgZ(24,"div",19),t._uU(25),t.ALo(26,"duration"),t.qZA(),t.YNc(27,ct,3,4,"div",20),t.qZA()()(),t.TgZ(28,"footer",21)(29,"button",22)(30,"div",23)(31,"app-icon",24),t._uU(32,"arrow_back"),t.qZA(),t.TgZ(33,"div",25),t._uU(34,"Back to form"),t.qZA()()()()),2&e&&(t.xp6(8),t.Q6J("ngModel",o.date),t.xp6(1),t.Q6J("ngModel",o.user),t.xp6(6),t.Q6J("user",o.host),t.xp6(2),t.hij(" ",o.host.name||o.host.email," "),t.xp6(1),t.Q6J("user",o.host)("date",o.date)("offset",o.offset)("width",o.width),t.xp6(1),t.Q6J("ngForOf",o.users),t.xp6(1),t.Q6J("ngForOf",o.hours),t.xp6(1),t.Udp("left",o.selection_left+"rem")("width",o.selection_width+"rem"),t.xp6(4),t.hij(" ",t.lcZ(26,17,o.duration)," "),t.xp6(2),t.Q6J("ngIf",o.move_time),t.xp6(2),t.Q6J("mat-dialog-close",!0))},styles:["[disabled=true][_ngcontent-%COMP%]{background:rgba(0,0,0,.05)!important;pointer-events:none}[disabled=true][_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{color:#0000004d}\n/*# sourceMappingURL=find-availability-modal.component.ts-angular-inline--11.css.map*/"]}),n})();var ht=s(4505),mt=s(9151),ft=s(9095),vt=s(6942),pt=s(9128),gt=s(4211);function _t(n,i){if(1&n&&(t.TgZ(0,"div",3)(1,"div"),t._uU(2,"Unavailable"),t.qZA(),t.TgZ(3,"div"),t._uU(4),t.ALo(5,"date"),t.ALo(6,"date"),t.qZA()()),2&n){const e=i.$implicit;t.Udp("left",e.start+"%")("width",e.size+"%"),t.xp6(4),t.AsE(" ",t.xi3(5,6,e.date,"shortTime")," - ",t.xi3(6,9,e.date+60*e.duration*1e3,"shortTime")," ")}}let H=(()=>{class n{constructor(){this.date=Date.now(),this.offset=0,this.width=0,this._user$=new ht.X(null),this.availability=this._user$.pipe((0,mt.h)(e=>e),(0,ft.w)(e=>(0,gt.u$)({calendars:e.email,period_start:(0,E.Z)(this.date).valueOf(),period_end:(0,S.Z)(this.date).valueOf()})),(0,vt.U)(e=>e.map(o=>({date:o.date,duration:o.duration,start:(new Date(o.date).getHours()+new Date(o.date).getMinutes()/60)/24,size:o.duration/60/24}))),(0,pt.d)(1))}ngOnChanges(e){e.user&&this.user&&this._user$.next(this.user)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["user-availability-list"]],inputs:{user:"user",date:"date",offset:"offset",width:"width"},features:[t.TTD],decls:4,vars:5,consts:[[1,"overflow-hidden","relative","border-b","border-gray-300","h-full","pointer-events-none"],[1,"w-[120rem]","h-px"],["event","","class","absolute inset-y-0 bg-primary rounded-lg text-white",3,"left","width",4,"ngFor","ngForOf"],["event","",1,"absolute","inset-y-0","bg-primary","rounded-lg","text-white"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.YNc(2,_t,7,12,"div",2),t.ALo(3,"async"),t.qZA()),2&e&&(t.Udp("width",o.width+"px"),t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,3,o.availability)))},dependencies:[l.sg,l.Ov,l.uU]}),n})();var Q=s(5306),N=s(9685),k=s(4522),bt=s(2306),xt=s(9697),yt=s(2193);let wt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,u.u5,u.UX,c.Is,R.W,L.K,U.p9,C.Cq,m.Tx]}),n})();t.B6R(P,[l.sg,l.O5,u.JJ,u.On,c.ZT,Q.o,N.k,m.VK,m.OP,m.p6,k.lW,C.Ou,U.oG],[l.uU]),t.B6R(j,[l.sg,l.O5,u.JJ,u.On,c.ZT,bt.Q,xt.d,Q.o,N.k,k.lW,H],[l.uU,yt.u]);class Zt{constructor(i={}){this.type=i.type||i.location||"other",this.position=i.position||i.map_id||i.asset_id||{x:i.x/i.map_width||0,y:i.y/i.map_height||0},this.variance=i.variance||0,this.last_seen=i.last_seen||(0,y.Z)(new Date),this.level=i.level,this.building=i.building,this.at_location=!!i.at_location,this.coordinates_from=i.coordinates_from||"top-left"}}s(9375)}}]);
//# sourceMappingURL=default-libs_users_src_index_ts.js.map