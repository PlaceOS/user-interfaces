"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([[88],{7577:(vt,D,o)=>{o.d(D,{OO:()=>p.OO,Y:()=>mt,PP:()=>ct,mO:()=>p.mO,ro:()=>v.ro,VE:()=>f.VE,pP:()=>v.pP,w0:()=>f.w0,sF:()=>v.sF});var l=o(4755),u=o(9401),w=o(8467),m=o(7406),h=o(6286),M=o(1292),S=o(145),j=o(9651),v=(o(9645),o(9036),o(5861),o(4283)),f=o(9012),p=o(5197),t=o(2223);new p.n5;var A=o(5236),R=o(1426),X=o(2641),b=o(9972),B=o(8115),I=o(2722),Y=o(953),G=o(1998),W=o(833);function y(n){(0,W.Z)(1,arguments);var r=(0,G.Z)(n);return(0,Y.Z)(1e3*r)}var H=o(3494),V=o(9756),K=o(8313),$=o(591),T=o(1086),k=o(13),q=o(7545),tt=o(7221),et=o(4850),it=o(7314),ot=o(5154);const nt=["container"],U=function(){return[]};function rt(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",26),t._UZ(1,"a-user-avatar",11),t.TgZ(2,"div",27),t._uU(3),t.qZA(),t.TgZ(4,"button",28),t.NdJ("click",function(){const s=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.removeUser(s))}),t.TgZ(5,"app-icon"),t._uU(6,"close"),t.qZA()(),t._UZ(7,"user-availability-list",29),t.ALo(8,"async"),t.ALo(9,"async"),t.qZA()}if(2&n){const e=r.$implicit,i=t.oxw();t.xp6(1),t.Q6J("user",e),t.xp6(2),t.hij(" ",e.name||i.host.email," "),t.xp6(4),t.Q6J("user",e)("availability",t.lcZ(8,7,i.availability)?t.lcZ(9,9,i.availability)[e.email]:t.DdM(11,U))("date",i.date)("offset",i.offset)("width",i.width)}}function st(n,r){if(1&n&&(t.TgZ(0,"div",30)(1,"div",31),t._uU(2),t.qZA()()),2&n){const e=r.index,i=t.oxw();t.uIk("hour",e)("disabled",i.today&&e<i.current_hour),t.xp6(2),t.AsE(" ",e%12?e%12:"12","",e>=12?"pm":"am"," ")}}function at(n,r){if(1&n&&(t.TgZ(0,"div",32),t._uU(1),t.ALo(2,"date"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",t.xi3(2,1,e.date,"shortTime")," ")}}let C=(()=>{class n extends R.cx{get today(){return(0,X.Z)(this.date,Date.now())}get current_hour(){return(new Date).getHours()}get selection_left(){const e=new Date(this.date);return 5*(e.getHours()+e.getMinutes()/60)+6}get selection_width(){return this.duration/60*5}constructor(e,i,a){super(),this._data=e,this._renderer=i,this._dialog_ref=a,this.users=new $.X([]),this.search="",this.date=this._data.date||Date.now(),this.duration=this._data.duration||60,this.offset=0,this.width=0,this.host=this._data.host,this.hours=new Array(24).fill(0),this.availability=this.users.pipe((0,k.b)(300),(0,q.w)(s=>s.length?(0,K.LE)({calendars:[this.host.email,...s.map(d=>d.email)].join(","),period_start:(0,b.Z)((0,B.Z)(this.date)),period_end:(0,b.Z)((0,I.Z)(this.date))}).pipe((0,tt.K)(()=>(0,T.of)([]))):(0,T.of)([])),(0,et.U)(s=>{const d={};for(const J of s)d[J.id]=J.availability.filter(c=>"busy"===c.status).map(c=>{const x=y(c.starts_at),P=(0,H.Z)(y(c.ends_at),y(c.starts_at));return{date:x,duration:P,start:(x.getHours()+x.getMinutes()/60)/24*100,size:P/60/24*100}});return d}),(0,it.d)({}),(0,ot.d)(1)),this.move_time=!1,this._start_time=0,this._move_last=0,this._move_size=0,this.users.next([...this._data.users])}addUser(e){this.users.next([...this.users.getValue().filter(i=>i.email!==e.email),e]),this.user=null}removeUser(e){this.users.next(this.users.getValue().filter(i=>i.email!==e.email)),this.user=null}closeAndUpdate(){this._dialog_ref.close(!0)}ngAfterViewInit(){const e=new Date(this.date);this.timeout("init",()=>{const i=this._container_el.nativeElement.querySelector(`[hour="${e.getHours()}"]`);if(i){const a=this._container_el.nativeElement.getBoundingClientRect(),s=i.getBoundingClientRect();this._container_el.nativeElement.scrollTo(s.left-128-a.left,0)}this.updateWidth(),this.updateScroll()},300)}updateWidth(){const e=this._container_el.nativeElement.getBoundingClientRect().width,i=this._container_el.nativeElement.querySelector("[users]").getBoundingClientRect().width;this.width=Math.floor(e-i),this._move_size=24*this._container_el.nativeElement.querySelector("[hour]").getBoundingClientRect().width}updateScroll(){this.offset=this._container_el.nativeElement.scrollLeft}startMovePeriod(e){e.preventDefault(),e.stopPropagation(),this.updateWidth(),this._move_last=e instanceof MouseEvent?e.clientX:e.touches[0].clientX,this.move_time=!0,this._start_time=this.date,e instanceof MouseEvent?this.subscription("on_move",this._renderer.listen("window","mousemove",i=>this._onMovePeriod(i))):this.subscription("on_move",this._renderer.listen("window","touchmove",i=>this._onMovePeriod(i))),e instanceof MouseEvent?this.subscription("on_move_end",this._renderer.listen("window","mouseup",()=>this._onMoveEnd())):this.subscription("on_move_end",this._renderer.listen("window","touchend",()=>this._onMoveEnd()))}startMoveDuration(e){e.preventDefault(),e.stopPropagation(),this.updateWidth(),this._move_last=e instanceof MouseEvent?e.clientX:e.touches[0].clientX,this._start_time=this.duration,e instanceof MouseEvent?this.subscription("on_move",this._renderer.listen("window","mousemove",i=>this._onMoveDuration(i))):this.subscription("on_move",this._renderer.listen("window","touchmove",i=>this._onMoveDuration(i))),e instanceof MouseEvent?this.subscription("on_move_end",this._renderer.listen("window","mouseup",()=>this._onMoveEnd())):this.subscription("on_move_end",this._renderer.listen("window","touchend",()=>this._onMoveEnd()))}_onMovePeriod(e){const i=this._move_last-(e instanceof MouseEvent?e.clientX:e.touches[0].clientX),s=(i>0?-1:1)*Math.floor(Math.abs(i/this._move_size*24*60)/5)*5;if(s){const d=this.date;this.date=(0,V.Z)(this._start_time,s).valueOf(),this.date<Date.now()&&(this.date=d)}}_onMoveDuration(e){const i=this._move_last-(e instanceof MouseEvent?e.clientX:e.touches[0].clientX),s=(i>0?-1:1)*Math.floor(Math.abs(i/this._move_size*24*60)/5)*5;s&&(this.duration=Math.max(30,this._start_time+s))}_onMoveEnd(){this.unsub("on_move"),this.unsub("on_move_end"),this._move_last=0,this.move_time=!1}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.WI),t.Y36(t.Qsj),t.Y36(h.so))},n.\u0275cmp=t.Xpm({type:n,selectors:[["find-availability-modal"]],viewQuery:function(e,i){if(1&e&&t.Gf(nt,7),2&e){let a;t.iGM(a=t.CRH())&&(i._container_el=a.first)}},features:[t.qOj],decls:38,vars:27,consts:[[1,"relative","flex","items-center","justify-center","p-4"],[1,"text-center"],["icon","","matRipple","","mat-dialog-close","",1,"absolute","top-1/2","left-1","-translate-y-1/2"],[1,"flex","flex-col","h-[calc(100vh-7rem)]","sm:h-[65vh]",3,"resize"],[1,"w-full","flex","flex-col","sm:flex-row","space-y-2","sm:space-y-0","sm:space-x-2","p-2"],[1,"max-h-[3.25rem]","flex-1",3,"ngModel","ngModelChange"],[1,"flex","flex-1","h-1/2","w-full","border-t","border-gray-300","dark:border-neutral-500","relative","overflow-auto","divide-x","divide-gray-300","dark:divide-neutral-500","max-w-[100vw]","sm:max-w-[80vw]",3,"scroll"],["container",""],["users","",1,"sticky","left-0","min-h-full","bg-white","dark:bg-neutral-700","border-r","border-gray-300","dark:border-neutral-500","z-30"],["header","",1,"h-10","w-[6rem]","border-b","border-gray-300","dark:border-neutral-500"],["host","",1,"flex","flex-col","items-center","justify-center","h-32","w-[6rem]","relative","border-b","border-gray-300","dark:border-neutral-500","py-2"],[1,"text-2xl",3,"user"],[1,"text-xs","break-words","overflow-hidden","max-w-full","px-2","text-center"],[1,"absolute","top-0","-bottom-px","left-full","pointer-events-none",3,"user","date","offset","availability","width"],["person","","class","flex flex-col items-center justify-center h-32 w-[6rem] relative border-b border-gray-300 dark:border-neutral-500 py-2",4,"ngFor","ngForOf"],["class","min-w-[5rem] bg-gray-50 dark:bg-neutral-600 min-h-full pointer-events-none",4,"ngFor","ngForOf"],["selection","",1,"absolute","top-10","bottom-0","!border-x-2","!border-blue-500","bg-blue-500/30","z-20","cursor-grab","active:cursor-grabbing",3,"mousedown","touchstart"],["handle","",1,"absolute","top-1/2","-left-px","-translate-x-1/2","-translate-y-1/2","h-3","w-3","rounded-full","bg-blue-500"],["handle","",1,"absolute","top-1/2","-right-px","translate-x-1/2","-translate-y-1/2","h-3","w-3","rounded-full","bg-blue-500","hover:h-4","hover:w-4","active:bg-primary",3,"mousedown","touchstart"],[1,"bg-white","dark:bg-neutral-600","border","border-gray-300","dark:border-neutral-500","p-2","absolute","top-2","left-1/2","-translate-x-1/2","shadow","text-xs","whitespace-nowrap","rounded"],["class","bg-white dark:bg-neutral-600 border border-gray-300 dark:border-neutral-500 p-2 absolute top-12 left-1/2 -translate-x-1/2 shadow text-xs whitespace-nowrap rounded",4,"ngIf"],[1,"flex","items-center","justify-between","p-2","border-t","border-gray-200","dark:border-neutral-500","w-full"],["matRipple","",1,"clear","text-primary",3,"mat-dialog-close"],[1,"flex","items-center"],[1,"text-xl"],[1,"mr-1","underline"],["person","",1,"flex","flex-col","items-center","justify-center","h-32","w-[6rem]","relative","border-b","border-gray-300","dark:border-neutral-500","py-2"],[1,"text-xs","break-words","max-w-full","px-2","text-center"],["icon","",1,"absolute","-top-1","-left-1",3,"click"],[1,"absolute","top-0","-bottom-px","left-full","pointer-events-none",3,"user","availability","date","offset","width"],[1,"min-w-[5rem]","bg-gray-50","dark:bg-neutral-600","min-h-full","pointer-events-none"],["header","",1,"h-10","border-b","border-gray-300","dark:border-neutral-500","p-2"],[1,"bg-white","dark:bg-neutral-600","border","border-gray-300","dark:border-neutral-500","p-2","absolute","top-12","left-1/2","-translate-x-1/2","shadow","text-xs","whitespace-nowrap","rounded"]],template:function(e,i){1&e&&(t.TgZ(0,"header",0)(1,"h2",1),t._uU(2,"Find Availability"),t.qZA(),t.TgZ(3,"button",2)(4,"app-icon"),t._uU(5,"close"),t.qZA()()(),t.TgZ(6,"main",3),t.NdJ("resize",function(){return i.updateWidth()},!1,t.Jf7),t.TgZ(7,"div",4)(8,"a-date-field",5),t.NdJ("ngModelChange",function(s){return i.date=s}),t.qZA(),t.TgZ(9,"a-user-search-field",5),t.NdJ("ngModelChange",function(s){return i.user=s})("ngModelChange",function(s){return i.addUser(s)}),t.qZA()(),t.TgZ(10,"div",6,7),t.NdJ("scroll",function(){return i.updateScroll()}),t.TgZ(12,"div",8),t._UZ(13,"div",9),t.TgZ(14,"div",10),t._UZ(15,"a-user-avatar",11),t.TgZ(16,"div",12),t._uU(17),t.qZA(),t._UZ(18,"user-availability-list",13),t.ALo(19,"async"),t.ALo(20,"async"),t.qZA(),t.YNc(21,rt,10,12,"div",14),t.ALo(22,"async"),t.qZA(),t.YNc(23,st,3,4,"div",15),t.TgZ(24,"div",16),t.NdJ("mousedown",function(s){return i.startMovePeriod(s)})("touchstart",function(s){return i.startMovePeriod(s)}),t._UZ(25,"div",17),t.TgZ(26,"div",18),t.NdJ("mousedown",function(s){return i.startMoveDuration(s)})("touchstart",function(s){return i.startMoveDuration(s)}),t.qZA(),t.TgZ(27,"div",19),t._uU(28),t.ALo(29,"duration"),t.qZA(),t.YNc(30,at,3,4,"div",20),t.qZA()()(),t.TgZ(31,"footer",21)(32,"button",22)(33,"div",23)(34,"app-icon",24),t._uU(35,"arrow_back"),t.qZA(),t.TgZ(36,"div",25),t._uU(37,"Back to form"),t.qZA()()()()),2&e&&(t.xp6(8),t.Q6J("ngModel",i.date),t.xp6(1),t.Q6J("ngModel",i.user),t.xp6(6),t.Q6J("user",i.host),t.xp6(2),t.hij(" ",i.host.name||i.host.email," "),t.xp6(1),t.Q6J("user",i.host)("date",i.date)("offset",i.offset)("availability",t.lcZ(19,18,i.availability)?t.lcZ(20,20,i.availability)[i.host.email]:t.DdM(26,U))("width",i.width),t.xp6(3),t.Q6J("ngForOf",t.lcZ(22,22,i.users)),t.xp6(2),t.Q6J("ngForOf",i.hours),t.xp6(1),t.Udp("left",i.selection_left+"rem")("width",i.selection_width+"rem"),t.xp6(4),t.hij(" ",t.lcZ(29,24,i.duration)," "),t.xp6(2),t.Q6J("ngIf",i.move_time),t.xp6(2),t.Q6J("mat-dialog-close",!0))},styles:["[disabled=true][_ngcontent-%COMP%]{background:rgba(0,0,0,.05)!important;pointer-events:none}[disabled=true][_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{color:#0000004d}"]}),n})();function lt(n,r){if(1&n&&(t.TgZ(0,"div",3)(1,"div",4),t._uU(2,"Unavailable"),t.qZA(),t.TgZ(3,"div",5),t._uU(4),t.ALo(5,"date"),t.ALo(6,"date"),t.qZA()()),2&n){const e=r.$implicit;t.Udp("left",e.start+"%")("width",e.size+"%"),t.xp6(4),t.AsE(" ",t.xi3(5,6,e.date,"shortTime")," - ",t.xi3(6,9,e.date.valueOf()+60*e.duration*1e3,"shortTime")," ")}}let _=(()=>{class n{constructor(){this.availability=[],this.date=Date.now(),this.offset=0,this.width=0}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["user-availability-list"]],inputs:{user:"user",availability:"availability",date:"date",offset:"offset",width:"width"},decls:3,vars:5,consts:[[1,"overflow-hidden","relative","border-b","border-gray-300","dark:border-neutral-500","h-full","pointer-events-none"],[1,"absolute","w-[120rem]","h-full","inset-y-0"],["event","","class","absolute inset-y-0 bg-primary text-white p-2 overflow-hidden border border-white rounded",3,"left","width",4,"ngFor","ngForOf"],["event","",1,"absolute","inset-y-0","bg-primary","text-white","p-2","overflow-hidden","border","border-white","rounded"],[1,"text-xs"],[1,"text-xs","max-w-full"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,lt,7,12,"div",2),t.qZA()()),2&e&&(t.Udp("width",i.width+"px"),t.xp6(1),t.Udp("left",-i.offset+"px"),t.xp6(1),t.Q6J("ngForOf",i.availability))},dependencies:[l.sg,l.uU]}),n})();var F=o(5306),E=o(9685),O=o(1217),dt=o(2329),ut=o(9697),ht=o(2193);let ct=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,u.u5,u.UX,h.Is,j.W,S.K,M.p9,w.Cq,m.Tx]}),n})();t.B6R(A.J,[l.sg,l.O5,u.JJ,u.On,h.ZT,F.o,E.k,m.VK,m.OP,m.p6,O.wG,w.Ou,M.oG],[l.uU]),t.B6R(C,[l.sg,l.O5,u.JJ,u.On,h.ZT,dt.Q,ut.d,F.o,E.k,O.wG,_],[l.Ov,l.uU,ht.u]);class mt{constructor(r={}){this.type=r.type||r.location||"other",this.position=r.position||r.map_id||r.asset_id||{x:r.x/r.map_width||0,y:r.y/r.map_height||0},this.variance=r.variance||0,this.last_seen=r.last_seen||(0,b.Z)(new Date),this.level=r.level,this.building=r.building,this.at_location=!!r.at_location,this.coordinates_from=r.coordinates_from||"top-left"}}o(9375)}}]);