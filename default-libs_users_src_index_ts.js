"use strict";(self.webpackChunkvisitor_kiosk=self.webpackChunkvisitor_kiosk||[]).push([["default-libs_users_src_index_ts"],{5533:(fe,E,i)=>{i.d(E,{Y:()=>me,en:()=>ve.en,n2:()=>m.n2,pP:()=>m.pP,w0:()=>b.w0}),i(9861),i(9472),i(9645),i(9036),i(1670);var m=i(4283),b=i(9012),L=i(5197),e=i(9445);new L.n5;var x=i(3754),c=i(7486),j=i(9743),Q=i(5845),f=i(1810),N=i(9377),R=i(3200),X=i(8325),Y=i(7367),I=i(1170);function p(n){(0,I.Z)(1,arguments);var r=(0,Y.Z)(n);return(0,X.Z)(1e3*r)}var G=i(8987),z=i(2317),B=i(8313),w=i(4505),H=i(7716),V=i(4139),$=i(823),K=i(9095),W=i(7418),k=i(6942),q=i(9701),ee=i(9128);const te=["container"];function oe(n,r){if(1&n&&(e.TgZ(0,"div",31),e._uU(1),e.qZA()),2&n){const o=r.index,t=e.oxw();e.Udp("left",-t.offset_x+"px"),e.uIk("disabled",t.today&&t.current_hour>o),e.xp6(1),e.AsE(" ",o%12==0?"12":o%12,"",o>=12?"pm":"am"," ")}}function ie(n,r){if(1&n){const o=e.EpF();e.TgZ(0,"div",32),e._UZ(1,"a-user-avatar",11),e.TgZ(2,"div",33),e._uU(3),e.qZA(),e.TgZ(4,"button",34),e.NdJ("click",function(){const s=e.CHM(o).$implicit,d=e.oxw();return e.KtG(d.removeUser(s))}),e.TgZ(5,"app-icon"),e._uU(6,"close"),e.qZA()()()}if(2&n){const o=r.$implicit,t=e.oxw();e.Udp("top",-t.offset_y+"px"),e.xp6(1),e.Q6J("user",o),e.xp6(2),e.hij(" ",o.name||t.host.email," ")}}function ne(n,r){if(1&n&&e._UZ(0,"div",35),2&n){const o=r.index,t=e.oxw();e.Udp("left",-(t.offset_x+1)+"px"),e.uIk("disabled",t.today&&t.current_hour>o)}}function re(n,r){if(1&n&&(e.TgZ(0,"div",36),e._uU(1),e.ALo(2,"date"),e.qZA()),2&n){const o=e.oxw();e.xp6(1),e.hij(" ",e.xi3(2,1,o.date,"shortTime")," ")}}const Z=function(){return[]};function se(n,r){if(1&n&&(e._UZ(0,"user-availability-list",24),e.ALo(1,"async"),e.ALo(2,"async")),2&n){const o=r.$implicit,t=e.oxw();e.Q6J("user",o)("date",t.date)("availability",e.lcZ(1,3,t.availability)?e.lcZ(2,5,t.availability)[o.email.toLowerCase()]:e.DdM(7,Z))}}let _=(()=>{class n extends j.cx{get today(){return(0,Q.Z)(this.date,Date.now())}get current_hour(){return(new Date).getHours()}get selection_left(){const o=new Date(this.date);return 5*(o.getHours()+o.getMinutes()/60)}get selection_width(){return this.duration/60*5}constructor(o,t,a){super(),this._data=o,this._renderer=t,this._dialog_ref=a,this.users=new w.X([]),this.search="",this.date=this._data.date||Date.now(),this.duration=this._data.duration||60,this.offset_y=0,this.offset_x=0,this.host=this._data.host,this.hours=new Array(24).fill(0),this.on_change=new w.X(0),this.availability=(0,H.aj)([this.users,this.on_change]).pipe((0,$.b)(300),(0,K.w)(([s])=>(0,B.LE)({calendars:[this.host.email,...s.map(d=>d.email.toLowerCase())].join(","),period_start:(0,f.Z)((0,N.Z)(this.date)),period_end:(0,f.Z)((0,R.Z)(this.date))}).pipe((0,W.K)(()=>(0,V.of)([])))),(0,k.U)(s=>{const d={};for(const F of s)d[F.id.toLowerCase()]=F.availability.filter(u=>"busy"===u.status).map(u=>{const y=p(u.starts_at),O=(0,G.Z)(p(u.ends_at),p(u.starts_at));return{date:y,duration:O,start:(y.getHours()+y.getMinutes()/60)/24*100,size:O/60/24*100}});return d}),(0,q.d)({}),(0,ee.d)(1)),this.move_time=!1,this._start_time=0,this._move_last=0,this._move_size=1920,this.users.next([...this._data.users])}addUser(o){this.users.next([...this.users.getValue().filter(t=>t.email!==o.email),o]),this.user=null}removeUser(o){this.users.next(this.users.getValue().filter(t=>t.email!==o.email)),this.user=null}closeAndUpdate(){this._dialog_ref.close(!0)}ngAfterViewInit(){const o=new Date(this.date);this.timeout("init",()=>{const t=this._container_el.nativeElement.querySelector(`[hour="${o.getHours()}"]`);if(t){const a=this._container_el.nativeElement.getBoundingClientRect(),s=t.getBoundingClientRect();this._container_el.nativeElement.scrollTo(s.left-128-a.left,0)}this.onScroll()},300)}onScroll(){this.offset_x=this._container_el.nativeElement.scrollLeft,this.offset_y=this._container_el.nativeElement.scrollTop}startMovePeriod(o){o.preventDefault(),o.stopPropagation(),this._move_last=o instanceof MouseEvent?o.clientX:o.touches[0].clientX,this.move_time=!0,this._start_time=this.date,o instanceof MouseEvent?this.subscription("on_move",this._renderer.listen("window","mousemove",t=>this._onMovePeriod(t))):this.subscription("on_move",this._renderer.listen("window","touchmove",t=>this._onMovePeriod(t))),o instanceof MouseEvent?this.subscription("on_move_end",this._renderer.listen("window","mouseup",()=>this._onMoveEnd())):this.subscription("on_move_end",this._renderer.listen("window","touchend",()=>this._onMoveEnd()))}startMoveDuration(o){o.preventDefault(),o.stopPropagation(),this._move_last=o instanceof MouseEvent?o.clientX:o.touches[0].clientX,this._start_time=this.duration,o instanceof MouseEvent?this.subscription("on_move",this._renderer.listen("window","mousemove",t=>this._onMoveDuration(t))):this.subscription("on_move",this._renderer.listen("window","touchmove",t=>this._onMoveDuration(t))),o instanceof MouseEvent?this.subscription("on_move_end",this._renderer.listen("window","mouseup",()=>this._onMoveEnd())):this.subscription("on_move_end",this._renderer.listen("window","touchend",()=>this._onMoveEnd()))}_onMovePeriod(o){const t=this._move_last-(o instanceof MouseEvent?o.clientX:o.touches[0].clientX),s=(t>0?-1:1)*Math.floor(Math.abs(t/this._move_size*24*60)/5)*5;if(s){const d=this.date;this.date=(0,z.Z)(this._start_time,s).valueOf(),this.date<Date.now()&&(this.date=d)}}_onMoveDuration(o){const t=this._move_last-(o instanceof MouseEvent?o.clientX:o.touches[0].clientX),s=(t>0?-1:1)*Math.floor(Math.abs(t/this._move_size*24*60)/5)*5;s&&(this.duration=Math.max(30,this._start_time+s))}_onMoveEnd(){this.unsub("on_move"),this.unsub("on_move_end"),this._move_last=0,this.move_time=!1}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(c.WI),e.Y36(e.Qsj),e.Y36(c.so))},n.\u0275cmp=e.Xpm({type:n,selectors:[["find-availability-modal"]],viewQuery:function(o,t){if(1&o&&e.Gf(te,7),2&o){let a;e.iGM(a=e.CRH())&&(t._container_el=a.first)}},features:[e.qOj],decls:44,vars:31,consts:[[1,"relative","flex","items-center","justify-center","p-4"],[1,"text-center"],["icon","","matRipple","","mat-dialog-close","",1,"absolute","top-1/2","left-1","-translate-y-1/2"],[1,"flex","flex-col","h-[calc(100vh-7rem)]","sm:h-[65vh]","overflow-hidden"],[1,"w-full","flex","flex-col","sm:flex-row","space-y-2","sm:space-y-0","sm:space-x-2","p-2"],[1,"max-h-[3.25rem]","flex-1",3,"ngModel","ngModelChange"],[1,"grid","flex-1","h-1/2","w-full","border-t","border-gray-300","dark:border-neutral-500","relative","overflow-hidden","divide-x","divide-y","divide-gray-300","dark:divide-neutral-500","max-w-[100vw]","sm:max-w-[80vw]"],["times","",1,"col-start-2","h-10","flex","overflow-hidden","border-l","border-gray-300"],["hour","","class","relative border-r border-gray-300 h-10 min-w-[5rem] p-2",3,"left",4,"ngFor","ngForOf"],["users","",1,"row-start-2","w-24","overflow-hidden"],["host","",1,"flex","flex-col","items-center","justify-center","h-32","w-24","relative","border-b","border-gray-300","dark:border-neutral-500","py-2"],[1,"text-2xl",3,"user"],[1,"text-xs","break-words","overflow-hidden","max-w-full","px-2","text-center"],["person","","class","flex flex-col items-center justify-center h-32 w-24 relative border-b border-gray-300 dark:border-neutral-500 py-2",3,"top",4,"ngFor","ngForOf"],["blocks","",1,"relative","row-start-2","overflow-hidden"],["fixed","",1,"absolute","inset-0","flex","overflow-hidden"],["divider","","class","relative h-full min-w-[5rem] border-l border-gray-300",3,"left",4,"ngFor","ngForOf"],["selection","",1,"absolute","inset-y-0","!border-x-2","!border-blue-500","bg-blue-500/30","z-20","cursor-grab","active:cursor-grabbing",3,"mousedown","touchstart"],["handle","",1,"absolute","top-1/2","-left-px","-translate-x-1/2","-translate-y-1/2","h-3","w-3","rounded-full","bg-blue-500"],["handle","",1,"absolute","top-1/2","-right-px","translate-x-1/2","-translate-y-1/2","h-3","w-3","rounded-full","bg-blue-500","hover:h-4","hover:w-4","active:bg-primary",3,"mousedown","touchstart"],[1,"bg-white","dark:bg-neutral-600","border","border-gray-300","dark:border-neutral-500","p-2","absolute","top-2","left-1/2","-translate-x-1/2","shadow","text-xs","whitespace-nowrap","rounded"],["class","bg-white dark:bg-neutral-600 border border-gray-300 dark:border-neutral-500 p-2 absolute top-12 left-1/2 -translate-x-1/2 shadow text-xs whitespace-nowrap rounded",4,"ngIf"],["scroll","",1,"absolute","inset-0","overflow-auto",3,"scroll"],["container",""],[1,"pointer-events-none",3,"user","date","availability"],["class","pointer-events-none",3,"user","date","availability",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-between","p-2","border-t","border-gray-200","dark:border-neutral-500","w-full"],["btn","","matRipple","",1,"clear","text-primary",3,"mat-dialog-close"],[1,"flex","items-center"],[1,"text-xl"],[1,"mr-1","underline"],["hour","",1,"relative","border-r","border-gray-300","h-10","min-w-[5rem]","p-2"],["person","",1,"flex","flex-col","items-center","justify-center","h-32","w-24","relative","border-b","border-gray-300","dark:border-neutral-500","py-2"],[1,"text-xs","break-words","max-w-full","px-2","text-center"],["icon","",1,"absolute","-top-1","-left-1",3,"click"],["divider","",1,"relative","h-full","min-w-[5rem]","border-l","border-gray-300"],[1,"bg-white","dark:bg-neutral-600","border","border-gray-300","dark:border-neutral-500","p-2","absolute","top-12","left-1/2","-translate-x-1/2","shadow","text-xs","whitespace-nowrap","rounded"]],template:function(o,t){1&o&&(e.TgZ(0,"header",0)(1,"h2",1),e._uU(2,"Find Availability"),e.qZA(),e.TgZ(3,"button",2)(4,"app-icon"),e._uU(5,"close"),e.qZA()()(),e.TgZ(6,"main",3)(7,"div",4)(8,"a-date-field",5),e.NdJ("ngModelChange",function(s){return t.date=s})("ngModelChange",function(){return t.on_change.next(t.on_change.getValue()+1)}),e.qZA(),e.TgZ(9,"a-user-search-field",5),e.NdJ("ngModelChange",function(s){return t.user=s})("ngModelChange",function(s){return t.addUser(s)}),e.qZA()(),e.TgZ(10,"div",6)(11,"div",7),e.YNc(12,oe,2,5,"div",8),e.qZA(),e.TgZ(13,"div",9)(14,"div",10),e._UZ(15,"a-user-avatar",11),e.TgZ(16,"div",12),e._uU(17),e.qZA()(),e.YNc(18,ie,7,4,"div",13),e.ALo(19,"async"),e.qZA(),e.TgZ(20,"div",14)(21,"div",15),e.YNc(22,ne,1,3,"div",16),e.TgZ(23,"div",17),e.NdJ("mousedown",function(s){return t.startMovePeriod(s)})("touchstart",function(s){return t.startMovePeriod(s)}),e._UZ(24,"div",18),e.TgZ(25,"div",19),e.NdJ("mousedown",function(s){return t.startMoveDuration(s)})("touchstart",function(s){return t.startMoveDuration(s)}),e.qZA(),e.TgZ(26,"div",20),e._uU(27),e.ALo(28,"duration"),e.qZA(),e.YNc(29,re,3,4,"div",21),e.qZA()(),e.TgZ(30,"div",22,23),e.NdJ("scroll",function(){return t.onScroll()}),e._UZ(32,"user-availability-list",24),e.ALo(33,"async"),e.ALo(34,"async"),e.YNc(35,se,3,8,"user-availability-list",25),e.ALo(36,"async"),e.qZA()()()(),e.TgZ(37,"footer",26)(38,"button",27)(39,"div",28)(40,"app-icon",29),e._uU(41,"arrow_back"),e.qZA(),e.TgZ(42,"div",30),e._uU(43,"Back to form"),e.qZA()()()()),2&o&&(e.xp6(8),e.Q6J("ngModel",t.date),e.xp6(1),e.Q6J("ngModel",t.user),e.xp6(3),e.Q6J("ngForOf",t.hours),e.xp6(2),e.Udp("top",-t.offset_y+"px"),e.xp6(1),e.Q6J("user",t.host),e.xp6(2),e.hij(" ",t.host.name||t.host.email," "),e.xp6(1),e.Q6J("ngForOf",e.lcZ(19,20,t.users)),e.xp6(4),e.Q6J("ngForOf",t.hours),e.xp6(1),e.Udp("left","calc("+t.selection_left+"rem - "+t.offset_x+"px)")("width",t.selection_width+"rem"),e.xp6(4),e.hij(" ",e.lcZ(28,22,t.duration)," "),e.xp6(2),e.Q6J("ngIf",t.move_time),e.xp6(3),e.Q6J("user",t.host)("date",t.date)("availability",e.lcZ(33,24,t.availability)?e.lcZ(34,26,t.availability)[t.host.email]:e.DdM(30,Z)),e.xp6(3),e.Q6J("ngForOf",e.lcZ(36,28,t.users)),e.xp6(3),e.Q6J("mat-dialog-close",!0))},styles:[".grid[_ngcontent-%COMP%]{grid-template-columns:6rem 1fr;grid-template-rows:2.5rem minmax(0,1fr)}[disabled=true][_ngcontent-%COMP%], [disabled=true][_ngcontent-%COMP%]   [header][_ngcontent-%COMP%]{background:#eee!important;pointer-events:none}[disabled=true][_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{color:#0000004d}\n/*# sourceMappingURL=find-availability-modal.component.ts-angular-inline--33.css.map*/"]}),n})();var l=i(6477);function ae(n,r){if(1&n&&(e.TgZ(0,"div",2)(1,"div",3),e._uU(2),e.ALo(3,"date"),e.ALo(4,"date"),e.qZA()()),2&n){const o=r.$implicit;e.Udp("left",o.start+"%")("width",o.size+"%"),e.xp6(2),e.AsE(" ",e.xi3(3,6,o.date,"shortTime")," - ",e.xi3(4,9,o.date.valueOf()+60*o.duration*1e3,"shortTime")," ")}}let A=(()=>{class n{constructor(){this.availability=[],this.date=Date.now()}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["user-availability-list"]],inputs:{user:"user",availability:"availability",date:"date"},decls:2,vars:1,consts:[[1,"relative","w-[120rem]","h-32","inset-y-0","border-b","border-gray-300","dark:border-neutral-500"],["event","","class","absolute inset-y-0 bg-red-600 text-white p-2 overflow-hidden border border-red-700 rounded",3,"left","width",4,"ngFor","ngForOf"],["event","",1,"absolute","inset-y-0","bg-red-600","text-white","p-2","overflow-hidden","border","border-red-700","rounded"],[1,"text-xs","max-w-full"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0),e.YNc(1,ae,5,12,"div",1),e.qZA()),2&o&&(e.xp6(1),e.Q6J("ngForOf",t.availability))},dependencies:[l.sg,l.uU],styles:["[_nghost-%COMP%]{display:block}\n/*# sourceMappingURL=user-availability.component.ts-angular-inline--32.css.map*/"]}),n})();var h=i(9542),C=i(5306),T=i(9685),g=i(9314),U=i(7728),le=i(5312),de=i(7672),ue=i(2306),ce=i(9697),he=i(2193);e.B6R(x.J,[l.sg,l.O5,h.JJ,h.On,c.ZT,C.o,T.k,g.VK,g.OP,g.p6,U.wG,le.Ou,de.oG],[l.uU]),e.B6R(_,[l.sg,l.O5,h.JJ,h.On,c.ZT,ue.Q,ce.d,C.o,T.k,U.wG,A],[l.Ov,l.uU,he.u]);class me{constructor(r={}){this.type=r.type||r.location||"other",this.position=r.position||r.map_id||r.asset_id||{x:r.x/r.map_width||0,y:r.y/r.map_height||0},this.variance=r.variance||0,this.last_seen=r.last_seen||(0,f.Z)(new Date),this.level=r.level,this.building=r.building,this.at_location=!!r.at_location,this.coordinates_from=r.coordinates_from||"top-left"}}var ve=i(9375)}}]);
//# sourceMappingURL=default-libs_users_src_index_ts.js.map