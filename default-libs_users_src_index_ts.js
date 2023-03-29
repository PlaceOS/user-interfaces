"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["default-libs_users_src_index_ts"],{6150:(Je,K,i)=>{i.d(K,{OO:()=>Z.OO,Y:()=>Fe,PP:()=>b,mO:()=>Z.mO,n5:()=>Z.n5,ro:()=>w.ro,VE:()=>A.VE,pP:()=>w.pP,w0:()=>A.w0,sF:()=>w.sF});var u=i(4666),f=i(2508),k=i(1708),y=i(8589),m=i(1484),D=i(4792),V=i(4693),q=i(5170),T=(i(9645),i(9036),i(1670)),w=i(4283),A=i(9012),Z=i(5197),e=i(2560);const C=[],W=new Z.n5;class x{transform(o){return(0,T.Z)(function*(){if(!o)return W;let t=C.find(({id:n,email:s})=>n===o||s===o);return t||(t=yield(0,A.w0)(o).toPromise(),t||(t=yield(0,w.pP)(o).toPromise(),t)?(C.push(t),t):W)})()}}x.\u0275fac=function(o){return new(o||x)},x.\u0275pipe=e.Yjl({name:"user",type:x,pure:!0});var U=i(9112),oe=i(312),P=i(8325),F=i(7367),j=i(1170),ie=i(5380),_=i(1810),H=i(9377),Q=i(3200),N=i(6962),I=i(354);function se(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"div",23)(1,"div",24),e._uU(2),e.ALo(3,"date"),e.qZA(),e.TgZ(4,"div",25)(5,"mat-checkbox",26),e.NdJ("ngModelChange",function(s){const l=e.CHM(t).index,d=e.oxw(2);return e.KtG(d.settings[d.available_weekdays[l]]=s)})("ngModelChange",function(){e.CHM(t);const s=e.oxw(2);return e.KtG(s.changed=!0)}),e.qZA()()()}if(2&a){const t=o.$implicit,n=o.index,s=e.oxw(2);e.xp6(2),e.hij(" ",e.xi3(3,2,t,"EEE")," "),e.xp6(3),e.Q6J("ngModel",s.settings[s.available_weekdays[n]])}}function ae(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"div",4)(1,"div",5),e._UZ(2,"a-user-avatar",6),e.TgZ(3,"div"),e._uU(4),e.qZA(),e.TgZ(5,"div",7),e._uU(6),e.qZA(),e.TgZ(7,"div",7),e._uU(8),e.qZA()(),e.TgZ(9,"div",8)(10,"h3",9),e._uU(11," Today's Working Location "),e.qZA(),e.TgZ(12,"button",10)(13,"div",11)(14,"div",12),e._uU(15),e.qZA(),e.TgZ(16,"app-icon",13),e._uU(17,"arrow_drop_down"),e.qZA()()(),e.TgZ(18,"div",14)(19,"div",15)(20,"app-icon"),e._uU(21,"home"),e.qZA()(),e.TgZ(22,"div",16),e._uU(23," Today is a working from home day. Available for online meetings. "),e.qZA()()(),e.TgZ(24,"div",17)(25,"h3",9),e._uU(26," Default Office Days "),e.qZA(),e.TgZ(27,"div",18),e.YNc(28,se,6,5,"div",19),e.qZA()(),e.TgZ(29,"div",20)(30,"button",21),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.saveChanges())}),e._uU(31," Update "),e.qZA()(),e.TgZ(32,"button",22)(33,"app-icon"),e._uU(34,"close"),e.qZA()()()}if(2&a){const t=e.oxw(),n=e.MAs(2);e.xp6(2),e.Q6J("user",t.user),e.xp6(2),e.Oqu(t.user.name),e.xp6(2),e.Oqu(t.user.email),e.xp6(2),e.Oqu(t.user.phone),e.xp6(4),e.Q6J("matMenuTriggerFor",n),e.xp6(3),e.Oqu(t.option),e.xp6(13),e.Q6J("ngForOf",t.weekdays),e.xp6(2),e.Q6J("disabled",!t.changed)}}function re(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"button",27),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw();return l.option=r.id,e.KtG(l.changed=!0)}),e._uU(1),e.qZA()}if(2&a){const t=o.$implicit;e.uIk("id",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function le(a,o){1&a&&(e.TgZ(0,"div",28),e._UZ(1,"mat-spinner",29),e.TgZ(2,"p"),e._uU(3,"Saving changes to work location settings..."),e.qZA()()),2&a&&(e.xp6(1),e.Q6J("diameter",32))}const R="wfh-days";class v{constructor(o,t){this._settings=o,this._dialog_ref=t,this.options=[{id:"wfo",name:"Work from office (WFO)"},{id:"wfh",name:"Work from home (WFH)"},{id:"aol",name:"Away on Leave (AOL)"}],this.option=this.options[0].id,this.settings=[!0,!0,!0,!0,!0,!0,!0],this.weekdays=[],this.changed=!1,this.loading=!1,this.available_weekdays=[1,2,3,4,5],this._booking=new N.$({type:"wfh-settings",asset_id:this.options[0].id})}ngOnInit(){this.settings=this._settings.get(R)||[!0,!0,!0,!0,!0,!0,!0],this._initWeekdays(),this._loadOptionForToday()}get user(){return(0,U.ar)()}saveChanges(){var o=this;return(0,T.Z)(function*(){o.loading=!0,o._dialog_ref.disableClose=!0,o.option!==o.options[0].id&&o.option!==o._booking.asset_id&&(yield(0,I.km)(new N.$({...o._booking,asset_id:o.option})).toPromise().catch(t=>{throw o._dialog_ref.disableClose=!1,o.loading=!1,t})),o._settings.saveUserSetting(R,o.settings),o.loading=!1,o._dialog_ref.close()})()}_initWeekdays(){let o=new Date;this.weekdays=this.available_weekdays.map(t=>function ne(a,o,t){var n,s,r,l,d,c,h,E;(0,j.Z)(2,arguments);var X=(0,ie.j)(),S=(0,F.Z)(null!==(n=null!==(s=null!==(r=null!==(l=t?.weekStartsOn)&&void 0!==l?l:null==t||null===(d=t.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==r?r:X.weekStartsOn)&&void 0!==s?s:null===(h=X.locale)||void 0===h||null===(E=h.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==n?n:0);if(!(S>=0&&S<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var G=(0,P.Z)(a),M=(0,F.Z)(o),B=G.getDay(),J=7-S;return(0,oe.Z)(G,M<0||M>6?M-(B+J)%7:((M%7+7)%7+J)%7-(B+J)%7)}(o,t).valueOf())}_loadOptionForToday(){var o=this;return(0,T.Z)(function*(){const t=yield(0,I.F2)({type:"wfh-setting",period_start:(0,_.Z)((0,H.Z)(Date.now())),period_end:(0,_.Z)((0,Q.Z)(Date.now()))}).toPromise();t.length&&(o.option=t[0].asset_id,o._booking=t[0])})()}}v.\u0275fac=function(o){return new(o||v)(e.Y36(U.gb),e.Y36(m.so))},v.\u0275cmp=e.Xpm({type:v,selectors:[["wfh-settings-modal"]],decls:6,vars:3,consts:[["class","relative flex flex-col rounded overflow-hidden w-[18rem]",4,"ngIf","ngIfElse"],["menu","matMenu"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["load_state",""],[1,"relative","flex","flex-col","rounded","overflow-hidden","w-[18rem]"],[1,"w-full","px-4","py-8","flex","flex-col","items-center","border-b","border-gray-200"],[3,"user"],[1,"text-xs","opacity-30"],[1,"w-full","p-4","flex","flex-col","border-b","border-gray-200"],[1,"-mt-2","mb-2","text-sm","font-medium"],["btn","","matRipple","","today-location","",1,"inverse","rounded-3xl","w-auto",3,"matMenuTriggerFor"],[1,"flex","items-center","justify-between","w-full"],[1,"uppercase","flex-1","w-1/2"],[1,"text-2xl"],[1,"flex","items-center","pt-4","space-x-2"],[1,"h-8","w-8","rounded-full","bg-gray-300","dark:bg-neutral-800","flex","items-center","justify-center"],[1,"flex-1","w-1/2","text-sm"],[1,"w-full","p-4","flex","flex-col"],[1,"border","border-gray-200","rounded","flex","items-center","justify-between","px-2","pt-2"],["class","flex flex-col items-center flex-1 w-px",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-end","px-4","pb-4"],["btn","","matRipple","","save","",3,"disabled","click"],["icon","","matRipple","","mat-dialog-close","",1,"absolute","top-0","left-0"],[1,"flex","flex-col","items-center","flex-1","w-px"],[1,"text-sm","font-light"],[1,"h-8","w-8","flex","items-center","justify-center"],[3,"ngModel","ngModelChange"],["mat-menu-item","",3,"click"],["loading","",1,"relative","bg-white","flex","flex-col","justify-center","items-center","rounded","overflow-hidden","w-[18rem]","h-[18rem]"],[3,"diameter"]],template:function(o,t){if(1&o&&(e.YNc(0,ae,35,8,"div",0),e.TgZ(1,"mat-menu",null,1),e.YNc(3,re,2,2,"button",2),e.qZA(),e.YNc(4,le,4,1,"ng-template",null,3,e.W1O)),2&o){const n=e.MAs(5);e.Q6J("ngIf",!t.loading)("ngIfElse",n),e.xp6(3),e.Q6J("ngForOf",t.options)}}});var de=i(5845);function O(a){(0,j.Z)(1,arguments);var o=(0,F.Z)(a);return(0,P.Z)(1e3*o)}var ue=i(1361),ce=i(2317),he=i(8313),fe=i(4505),Y=i(4139),me=i(823),ve=i(9095),pe=i(7418),ge=i(6942),be=i(9701),xe=i(9128);const _e=["container"],ye=function(){return[]};function we(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"div",26),e._UZ(1,"a-user-avatar",11),e.TgZ(2,"div",27),e._uU(3),e.qZA(),e.TgZ(4,"button",28),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.removeUser(r))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()(),e._UZ(7,"user-availability-list",29),e.ALo(8,"async"),e.ALo(9,"async"),e.qZA()}if(2&a){const t=o.$implicit,n=e.oxw();e.xp6(1),e.Q6J("user",t),e.xp6(2),e.hij(" ",t.name||n.host.email," "),e.xp6(4),e.Q6J("user",t)("availability",e.lcZ(8,7,n.availability)?e.lcZ(9,9,n.availability)[t.email]:e.DdM(11,ye))("date",n.date)("offset",n.offset)("width",n.width)}}function Ze(a,o){if(1&a&&(e.TgZ(0,"div",30)(1,"div",31),e._uU(2),e.qZA()()),2&a){const t=o.index,n=e.oxw();e.uIk("hour",t)("disabled",n.today&&t<n.current_hour),e.xp6(2),e.AsE(" ",t%12?t%12:"12","",t>=12?"pm":"am"," ")}}function Me(a,o){if(1&a&&(e.TgZ(0,"div",32),e._uU(1),e.ALo(2,"date"),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.hij(" ",e.xi3(2,1,t.date,"shortTime")," ")}}class p extends U.cx{get today(){return(0,de.Z)(this.date,Date.now())}get current_hour(){return(new Date).getHours()}get selection_left(){const o=new Date(this.date);return 5*(o.getHours()+o.getMinutes()/60)+6}get selection_width(){return this.duration/60*5}constructor(o,t,n){super(),this._data=o,this._renderer=t,this._dialog_ref=n,this.users=new fe.X([]),this.search="",this.date=this._data.date||Date.now(),this.duration=this._data.duration||60,this.offset=0,this.width=0,this.host=this._data.host,this.hours=new Array(24).fill(0),this.availability=this.users.pipe((0,me.b)(300),(0,ve.w)(s=>s.length?(0,he.LE)({calendars:s.map(r=>r.email).join(","),period_start:(0,_.Z)((0,H.Z)(this.date)),period_end:(0,_.Z)((0,Q.Z)(this.date))}).pipe((0,pe.K)(()=>(0,Y.of)([]))):(0,Y.of)([])),(0,ge.U)(s=>{const r={};for(const l of s)r[l.id]=l.availability.filter(d=>"busy"===d.status).map(d=>{const c=O(d.starts_at),h=(0,ue.Z)(O(d.ends_at),O(d.starts_at));return console.log("Block:",d,c,h),{date:c,duration:h,start:(c.getHours()+c.getMinutes()/60)/24*100,size:h/60/24*100}});return r}),(0,be.d)({}),(0,xe.d)(1)),this.move_time=!1,this._start_time=0,this._move_last=0,this._move_size=0,this.users.next([...this._data.users])}addUser(o){this.users.next([...this.users.getValue().filter(t=>t.email!==o.email),o]),this.user=null}removeUser(o){this.users.next(this.users.getValue().filter(t=>t.email!==o.email)),this.user=null}closeAndUpdate(){this._dialog_ref.close(!0)}ngAfterViewInit(){const o=new Date(this.date);this.timeout("init",()=>{const t=this._container_el.nativeElement.querySelector(`[hour="${o.getHours()}"]`);if(t){const n=this._container_el.nativeElement.getBoundingClientRect(),s=t.getBoundingClientRect();this._container_el.nativeElement.scrollTo(s.left-128-n.left,0)}this.updateWidth(),this.updateScroll()},300)}updateWidth(){const o=this._container_el.nativeElement.getBoundingClientRect().width,t=this._container_el.nativeElement.querySelector("[users]").getBoundingClientRect().width;this.width=Math.floor(o-t),this._move_size=24*this._container_el.nativeElement.querySelector("[hour]").getBoundingClientRect().width}updateScroll(){this.offset=this._container_el.nativeElement.scrollLeft}startMovePeriod(o){o.preventDefault(),o.stopPropagation(),this.updateWidth(),this._move_last=o instanceof MouseEvent?o.clientX:o.touches[0].clientX,this.move_time=!0,this._start_time=this.date,o instanceof MouseEvent?this.subscription("on_move",this._renderer.listen("window","mousemove",t=>this._onMovePeriod(t))):this.subscription("on_move",this._renderer.listen("window","touchmove",t=>this._onMovePeriod(t))),o instanceof MouseEvent?this.subscription("on_move_end",this._renderer.listen("window","mouseup",()=>this._onMoveEnd())):this.subscription("on_move_end",this._renderer.listen("window","touchend",()=>this._onMoveEnd()))}startMoveDuration(o){o.preventDefault(),o.stopPropagation(),this.updateWidth(),this._move_last=o instanceof MouseEvent?o.clientX:o.touches[0].clientX,this._start_time=this.duration,o instanceof MouseEvent?this.subscription("on_move",this._renderer.listen("window","mousemove",t=>this._onMoveDuration(t))):this.subscription("on_move",this._renderer.listen("window","touchmove",t=>this._onMoveDuration(t))),o instanceof MouseEvent?this.subscription("on_move_end",this._renderer.listen("window","mouseup",()=>this._onMoveEnd())):this.subscription("on_move_end",this._renderer.listen("window","touchend",()=>this._onMoveEnd()))}_onMovePeriod(o){const t=this._move_last-(o instanceof MouseEvent?o.clientX:o.touches[0].clientX),s=(t>0?-1:1)*Math.floor(Math.abs(t/this._move_size*24*60)/5)*5;if(s){const r=this.date;this.date=(0,ce.Z)(this._start_time,s).valueOf(),this.date<Date.now()&&(this.date=r)}}_onMoveDuration(o){const t=this._move_last-(o instanceof MouseEvent?o.clientX:o.touches[0].clientX),s=(t>0?-1:1)*Math.floor(Math.abs(t/this._move_size*24*60)/5)*5;s&&(this.duration=Math.max(30,this._start_time+s))}_onMoveEnd(){this.unsub("on_move"),this.unsub("on_move_end"),this._move_last=0,this.move_time=!1}}function Te(a,o){if(1&a&&(e.TgZ(0,"div",3)(1,"div",4),e._uU(2,"Unavailable"),e.qZA(),e.TgZ(3,"div",5),e._uU(4),e.ALo(5,"date"),e.ALo(6,"date"),e.qZA()()),2&a){const t=o.$implicit;e.Udp("left",t.start+"%")("width",t.size+"%"),e.xp6(4),e.AsE(" ",e.xi3(5,6,t.date,"shortTime")," - ",e.xi3(6,9,t.date.valueOf()+60*t.duration*1e3,"shortTime")," ")}}p.\u0275fac=function(o){return new(o||p)(e.Y36(m.WI),e.Y36(e.Qsj),e.Y36(m.so))},p.\u0275cmp=e.Xpm({type:p,selectors:[["find-availability-modal"]],viewQuery:function(o,t){if(1&o&&e.Gf(_e,7),2&o){let n;e.iGM(n=e.CRH())&&(t._container_el=n.first)}},features:[e.qOj],decls:36,vars:21,consts:[[1,"relative","flex","items-center","justify-center","p-4"],[1,"text-center"],["icon","","matRipple","","mat-dialog-close","",1,"absolute","top-1/2","left-1","-translate-y-1/2"],[1,"flex","flex-col","h-[calc(100vh-7rem)]","sm:h-[65vh]",3,"resize"],[1,"w-full","flex","flex-col","sm:flex-row","space-y-2","sm:space-y-0","sm:space-x-2","p-2"],[1,"max-h-[3.25rem]","flex-1",3,"ngModel","ngModelChange"],[1,"flex","flex-1","h-1/2","w-full","border-t","border-gray-300","dark:border-neutral-500","relative","overflow-auto","divide-x","divide-gray-300","dark:divide-neutral-500","max-w-[100vw]","sm:max-w-[80vw]",3,"scroll"],["container",""],["users","",1,"sticky","left-0","min-h-full","bg-white","dark:bg-neutral-700","border-r","border-gray-300","dark:border-neutral-500","z-30"],["header","",1,"h-10","w-[6rem]","border-b","border-gray-300","dark:border-neutral-500"],["host","",1,"flex","flex-col","items-center","justify-center","h-32","w-[6rem]","relative","border-b","border-gray-300","dark:border-neutral-500","py-2"],[1,"text-2xl",3,"user"],[1,"text-xs","break-words","overflow-hidden","max-w-full","px-2","text-center"],[1,"absolute","top-0","-bottom-px","left-full","pointer-events-none",3,"user","date","offset","width"],["person","","class","flex flex-col items-center justify-center h-32 w-[6rem] relative border-b border-gray-300 dark:border-neutral-500 py-2",4,"ngFor","ngForOf"],["class","min-w-[5rem] bg-gray-50 dark:bg-neutral-600 min-h-full pointer-events-none",4,"ngFor","ngForOf"],["selection","",1,"absolute","top-10","bottom-0","!border-x-2","!border-blue-500","bg-blue-500/30","z-20","cursor-grab","active:cursor-grabbing",3,"mousedown","touchstart"],["handle","",1,"absolute","top-1/2","-left-px","-translate-x-1/2","-translate-y-1/2","h-3","w-3","rounded-full","bg-blue-500"],["handle","",1,"absolute","top-1/2","-right-px","translate-x-1/2","-translate-y-1/2","h-3","w-3","rounded-full","bg-blue-500","hover:h-4","hover:w-4","active:bg-primary",3,"mousedown","touchstart"],[1,"bg-white","dark:bg-neutral-600","border","border-gray-300","dark:border-neutral-500","p-2","absolute","top-2","left-1/2","-translate-x-1/2","shadow","text-xs","whitespace-nowrap","rounded"],["class","bg-white dark:bg-neutral-600 border border-gray-300 dark:border-neutral-500 p-2 absolute top-12 left-1/2 -translate-x-1/2 shadow text-xs whitespace-nowrap rounded",4,"ngIf"],[1,"flex","items-center","justify-between","p-2","border-t","border-gray-200","dark:border-neutral-500","w-full"],["matRipple","",1,"clear","text-primary",3,"mat-dialog-close"],[1,"flex","items-center"],[1,"text-xl"],[1,"mr-1","underline"],["person","",1,"flex","flex-col","items-center","justify-center","h-32","w-[6rem]","relative","border-b","border-gray-300","dark:border-neutral-500","py-2"],[1,"text-xs","break-words","max-w-full","px-2","text-center"],["icon","",1,"absolute","-top-1","-left-1",3,"click"],[1,"absolute","top-0","-bottom-px","left-full","pointer-events-none",3,"user","availability","date","offset","width"],[1,"min-w-[5rem]","bg-gray-50","dark:bg-neutral-600","min-h-full","pointer-events-none"],["header","",1,"h-10","border-b","border-gray-300","dark:border-neutral-500","p-2"],[1,"bg-white","dark:bg-neutral-600","border","border-gray-300","dark:border-neutral-500","p-2","absolute","top-12","left-1/2","-translate-x-1/2","shadow","text-xs","whitespace-nowrap","rounded"]],template:function(o,t){1&o&&(e.TgZ(0,"header",0)(1,"h2",1),e._uU(2,"Find Availability"),e.qZA(),e.TgZ(3,"button",2)(4,"app-icon"),e._uU(5,"close"),e.qZA()()(),e.TgZ(6,"main",3),e.NdJ("resize",function(){return t.updateWidth()},!1,e.Jf7),e.TgZ(7,"div",4)(8,"a-date-field",5),e.NdJ("ngModelChange",function(s){return t.date=s}),e.qZA(),e.TgZ(9,"a-user-search-field",5),e.NdJ("ngModelChange",function(s){return t.user=s})("ngModelChange",function(s){return t.addUser(s)}),e.qZA()(),e.TgZ(10,"div",6,7),e.NdJ("scroll",function(){return t.updateScroll()}),e.TgZ(12,"div",8),e._UZ(13,"div",9),e.TgZ(14,"div",10),e._UZ(15,"a-user-avatar",11),e.TgZ(16,"div",12),e._uU(17),e.qZA(),e._UZ(18,"user-availability-list",13),e.qZA(),e.YNc(19,we,10,12,"div",14),e.ALo(20,"async"),e.qZA(),e.YNc(21,Ze,3,4,"div",15),e.TgZ(22,"div",16),e.NdJ("mousedown",function(s){return t.startMovePeriod(s)})("touchstart",function(s){return t.startMovePeriod(s)}),e._UZ(23,"div",17),e.TgZ(24,"div",18),e.NdJ("mousedown",function(s){return t.startMoveDuration(s)})("touchstart",function(s){return t.startMoveDuration(s)}),e.qZA(),e.TgZ(25,"div",19),e._uU(26),e.ALo(27,"duration"),e.qZA(),e.YNc(28,Me,3,4,"div",20),e.qZA()()(),e.TgZ(29,"footer",21)(30,"button",22)(31,"div",23)(32,"app-icon",24),e._uU(33,"arrow_back"),e.qZA(),e.TgZ(34,"div",25),e._uU(35,"Back to form"),e.qZA()()()()),2&o&&(e.xp6(8),e.Q6J("ngModel",t.date),e.xp6(1),e.Q6J("ngModel",t.user),e.xp6(6),e.Q6J("user",t.host),e.xp6(2),e.hij(" ",t.host.name||t.host.email," "),e.xp6(1),e.Q6J("user",t.host)("date",t.date)("offset",t.offset)("width",t.width),e.xp6(1),e.Q6J("ngForOf",e.lcZ(20,17,t.users)),e.xp6(2),e.Q6J("ngForOf",t.hours),e.xp6(1),e.Udp("left",t.selection_left+"rem")("width",t.selection_width+"rem"),e.xp6(4),e.hij(" ",e.lcZ(27,19,t.duration)," "),e.xp6(2),e.Q6J("ngIf",t.move_time),e.xp6(2),e.Q6J("mat-dialog-close",!0))},styles:["[disabled=true][_ngcontent-%COMP%]{background:rgba(0,0,0,.05)!important;pointer-events:none}[disabled=true][_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{color:#0000004d}\n/*# sourceMappingURL=find-availability-modal.component.ts-angular-inline--12.css.map*/"]});class g{constructor(){this.availability=[],this.date=Date.now(),this.offset=0,this.width=0}}g.\u0275fac=function(o){return new(o||g)},g.\u0275cmp=e.Xpm({type:g,selectors:[["user-availability-list"]],inputs:{user:"user",availability:"availability",date:"date",offset:"offset",width:"width"},decls:3,vars:5,consts:[[1,"overflow-hidden","relative","border-b","border-gray-300","dark:border-neutral-500","h-full","pointer-events-none"],[1,"absolute","w-[120rem]","h-full","inset-y-0"],["event","","class","absolute inset-y-0 bg-primary text-white p-2 overflow-hidden border border-white rounded",3,"left","width",4,"ngFor","ngForOf"],["event","",1,"absolute","inset-y-0","bg-primary","text-white","p-2","overflow-hidden","border","border-white","rounded"],[1,"text-xs"],[1,"text-xs","max-w-full"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,Te,7,12,"div",2),e.qZA()()),2&o&&(e.Udp("width",t.width+"px"),e.xp6(1),e.Udp("left",-t.offset+"px"),e.xp6(1),e.Q6J("ngForOf",t.availability))},dependencies:[u.sg,u.uU]});var L=i(5306),$=i(9685),z=i(207),Ae=i(2306),Ce=i(9697),Ue=i(2193);class b{}b.\u0275fac=function(o){return new(o||b)},b.\u0275mod=e.oAB({type:b}),b.\u0275inj=e.cJS({imports:[u.ez,f.u5,f.UX,m.Is,q.W,V.K,D.p9,k.Cq,y.Tx]}),e.B6R(v,[u.sg,u.O5,f.JJ,f.On,m.ZT,L.o,$.k,y.VK,y.OP,y.p6,z.wG,k.Ou,D.oG],[u.uU]),e.B6R(p,[u.sg,u.O5,f.JJ,f.On,m.ZT,Ae.Q,Ce.d,L.o,$.k,z.wG,g],[u.Ov,u.uU,Ue.u]);class Fe{constructor(o={}){this.type=o.type||o.location||"other",this.position=o.position||o.map_id||o.asset_id||{x:o.x/o.map_width||0,y:o.y/o.map_height||0},this.variance=o.variance||0,this.last_seen=o.last_seen||(0,_.Z)(new Date),this.level=o.level,this.building=o.building,this.at_location=!!o.at_location,this.coordinates_from=o.coordinates_from||"top-left"}}i(9375)}}]);
//# sourceMappingURL=default-libs_users_src_index_ts.js.map