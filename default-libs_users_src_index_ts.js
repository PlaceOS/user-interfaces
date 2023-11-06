"use strict";(self.webpackChunkvisitor_kiosk=self.webpackChunkvisitor_kiosk||[]).push([["default-libs_users_src_index_ts"],{8377:(ft,E,i)=>{i.d(E,{Y:()=>vt,en:()=>mt.en,pP:()=>b.pP,w0:()=>y.w0}),i(5936),i(7687),i(6755),i(5396),i(1670);var b=i(8125),y=i(8675),L=i(223),t=i(3129);new L.n5;var x=i(8236),c=i(7401),Q=i(2078),S=i(7393),m=i(7343),N=i(7016),R=i(4512),X=i(7120),Y=i(1578),I=i(7265);function f(s){(0,I.Z)(1,arguments);var a=(0,Y.Z)(s);return(0,X.Z)(1e3*a)}var G=i(9737),z=i(8415),B=i(6511),w=i(462),H=i(8159),V=i(9681),$=i(5933),K=i(6520),W=i(8175),k=i(7422),q=i(2345),tt=i(680);const et=["container"];function ot(s,a){if(1&s&&(t.TgZ(0,"div",32),t._uU(1),t.qZA()),2&s){const e=a.index,o=t.oxw();t.Udp("left",-o.offset_x+"px"),t.uIk("disabled",o.today&&o.current_hour>e),t.xp6(1),t.AsE(" ",e%12==0?"12":e%12,"",e>=12?"pm":"am"," ")}}function it(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"div",33),t._UZ(1,"a-user-avatar",11),t.TgZ(2,"div",34),t._uU(3),t.qZA(),t.TgZ(4,"button",35),t.NdJ("click",function(){const r=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.removeUser(r))}),t.TgZ(5,"app-icon"),t._uU(6,"close"),t.qZA()()()}if(2&s){const e=a.$implicit,o=t.oxw();t.Udp("top",-o.offset_y+"px"),t.xp6(1),t.Q6J("user",e),t.xp6(2),t.hij(" ",e.name||o.host.email," ")}}function nt(s,a){if(1&s&&t._UZ(0,"div",36),2&s){const e=a.index,o=t.oxw();t.Udp("left",-(o.offset_x+1)+"px"),t.uIk("disabled",o.today&&o.current_hour>e)}}function st(s,a){if(1&s&&(t.TgZ(0,"div",37),t._uU(1),t.ALo(2,"date"),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.hij(" ",t.xi3(2,1,e.date,"shortTime")," ")}}const _=function(){return[]};function at(s,a){if(1&s&&(t._UZ(0,"user-availability-list",25),t.ALo(1,"async"),t.ALo(2,"async")),2&s){const e=a.$implicit,o=t.oxw();t.Q6J("user",e)("date",o.date)("availability",t.lcZ(1,3,o.availability)?t.lcZ(2,5,o.availability)[e.email.toLowerCase()]:t.DdM(7,_))}}let Z=(()=>{class s extends Q.cx{get today(){return(0,S.Z)(this.date,Date.now())}get current_hour(){return(new Date).getHours()}get selection_left(){const e=new Date(this.date);return 5*(e.getHours()+e.getMinutes()/60)}get selection_width(){return this.duration/60*5}constructor(e,o,n){super(),this._data=e,this._renderer=o,this._dialog_ref=n,this.users=new w.X([]),this.search="",this.date=this._data.date||Date.now(),this.duration=this._data.duration||60,this.offset_y=0,this.offset_x=0,this.host=this._data.host,this.hours=new Array(24).fill(0),this.on_change=new w.X(0),this.availability=(0,H.aj)([this.users,this.on_change]).pipe((0,$.b)(300),(0,K.w)(([r])=>(0,B.LE)({calendars:[this.host.email,...r.map(l=>l.email.toLowerCase())].join(","),period_start:(0,m.Z)((0,N.Z)(this.date)),period_end:(0,m.Z)((0,R.Z)(this.date))}).pipe((0,W.K)(()=>(0,V.of)([])))),(0,k.U)(r=>{const l={};for(const F of r)l[F.id.toLowerCase()]=F.availability.filter(u=>"busy"===u.status).map(u=>{const g=f(u.starts_at),O=(0,G.Z)(f(u.ends_at),f(u.starts_at));return{date:g,duration:O,start:(g.getHours()+g.getMinutes()/60)/24*100,size:O/60/24*100}});return l}),(0,q.d)({}),(0,tt.d)(1)),this.move_time=!1,this._start_time=0,this._move_last=0,this._move_size=1920,this.users.next([...this._data.users])}addUser(e){this.users.next([...this.users.getValue().filter(o=>o.email!==e.email),e]),this.user=null}removeUser(e){this.users.next(this.users.getValue().filter(o=>o.email!==e.email)),this.user=null}closeAndUpdate(){this._dialog_ref.close(!0)}ngAfterViewInit(){const e=new Date(this.date);this.timeout("init",()=>{const o=this._container_el.nativeElement.querySelector(`[hour="${e.getHours()}"]`);if(o){const n=this._container_el.nativeElement.getBoundingClientRect(),r=o.getBoundingClientRect();this._container_el.nativeElement.scrollTo(r.left-128-n.left,0)}this.onScroll()},300)}onScroll(){this.offset_x=this._container_el.nativeElement.scrollLeft,this.offset_y=this._container_el.nativeElement.scrollTop}startMovePeriod(e){e.preventDefault(),e.stopPropagation(),this._move_last=e instanceof MouseEvent?e.clientX:e.touches[0].clientX,this.move_time=!0,this._start_time=this.date,e instanceof MouseEvent?this.subscription("on_move",this._renderer.listen("window","mousemove",o=>this._onMovePeriod(o))):this.subscription("on_move",this._renderer.listen("window","touchmove",o=>this._onMovePeriod(o))),e instanceof MouseEvent?this.subscription("on_move_end",this._renderer.listen("window","mouseup",()=>this._onMoveEnd())):this.subscription("on_move_end",this._renderer.listen("window","touchend",()=>this._onMoveEnd()))}startMoveDuration(e){e.preventDefault(),e.stopPropagation(),this._move_last=e instanceof MouseEvent?e.clientX:e.touches[0].clientX,this._start_time=this.duration,e instanceof MouseEvent?this.subscription("on_move",this._renderer.listen("window","mousemove",o=>this._onMoveDuration(o))):this.subscription("on_move",this._renderer.listen("window","touchmove",o=>this._onMoveDuration(o))),e instanceof MouseEvent?this.subscription("on_move_end",this._renderer.listen("window","mouseup",()=>this._onMoveEnd())):this.subscription("on_move_end",this._renderer.listen("window","touchend",()=>this._onMoveEnd()))}_onMovePeriod(e){const o=this._move_last-(e instanceof MouseEvent?e.clientX:e.touches[0].clientX),r=(o>0?-1:1)*Math.floor(Math.abs(o/this._move_size*24*60)/5)*5;if(r){const l=this.date;this.date=(0,z.Z)(this._start_time,r).valueOf(),this.date<Date.now()&&(this.date=l)}}_onMoveDuration(e){const o=this._move_last-(e instanceof MouseEvent?e.clientX:e.touches[0].clientX),r=(o>0?-1:1)*Math.floor(Math.abs(o/this._move_size*24*60)/5)*5;r&&(this.duration=Math.max(30,this._start_time+r))}_onMoveEnd(){this.unsub("on_move"),this.unsub("on_move_end"),this._move_last=0,this.move_time=!1}static#t=this.\u0275fac=function(o){return new(o||s)(t.Y36(c.WI),t.Y36(t.Qsj),t.Y36(c.so))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["find-availability-modal"]],viewQuery:function(o,n){if(1&o&&t.Gf(et,7),2&o){let r;t.iGM(r=t.CRH())&&(n._container_el=r.first)}},features:[t.qOj],decls:45,vars:31,consts:[[1,"relative","flex","items-center","justify-center","p-4"],[1,"text-center"],["icon","","matRipple","","mat-dialog-close","",1,"absolute","top-1/2","left-1","-translate-y-1/2"],[1,"flex","flex-col","h-[calc(100vh-7rem)]","sm:h-[65vh]","overflow-hidden"],[1,"w-full","flex","flex-col","sm:flex-row","space-y-2","sm:space-y-0","sm:space-x-2","p-2"],[1,"max-h-[3.25rem]","flex-1",3,"ngModel","ngModelChange"],[1,"grid","flex-1","h-1/2","w-full","border-t","border-base-200","relative","overflow-hidden","divide-x","divide-y","divide-base-200","max-w-[100vw]","sm:max-w-[80vw]"],["times","",1,"col-start-2","h-10","flex","overflow-hidden","border-l","border-base-200"],["hour","","class","relative border-r border-base-200 h-10 min-w-[5rem] p-2",3,"left",4,"ngFor","ngForOf"],["users","",1,"row-start-2","w-24","overflow-hidden"],["host","",1,"flex","flex-col","items-center","justify-center","h-32","w-24","relative","border-b","border-base-200","py-2"],[1,"text-2xl",3,"user"],[1,"text-xs","break-words","overflow-hidden","max-w-full","px-2","text-center"],["person","","class","flex flex-col items-center justify-center h-32 w-24 relative border-b border-base-200 py-2",3,"top",4,"ngFor","ngForOf"],["blocks","",1,"relative","row-start-2","overflow-hidden"],["fixed","",1,"absolute","inset-0","flex","overflow-hidden"],["divider","","class","relative h-full min-w-[5rem] border-l border-base-200",3,"left",4,"ngFor","ngForOf"],["selection","",1,"absolute","inset-y-0","!border-x-2","!border-info","z-20","cursor-grab","active:cursor-grabbing",3,"mousedown","touchstart"],[1,"absolute","inset-0","bg-info","opacity-30"],["handle","",1,"absolute","top-1/2","-left-px","-translate-x-1/2","-translate-y-1/2","h-3","w-3","rounded-full","bg-info"],["handle","",1,"absolute","top-1/2","-right-px","translate-x-1/2","-translate-y-1/2","h-3","w-3","rounded-full","bg-info","hover:h-4","hover:w-4","active:bg-secondary",3,"mousedown","touchstart"],[1,"bg-base-100","border","border-base-200","p-2","absolute","top-2","left-1/2","-translate-x-1/2","shadow","text-xs","whitespace-nowrap","rounded"],["class","bg-base-100 border border-base-200 p-2 absolute top-12 left-1/2 -translate-x-1/2 shadow text-xs whitespace-nowrap rounded",4,"ngIf"],["scroll","",1,"absolute","inset-0","overflow-auto",3,"scroll"],["container",""],[1,"pointer-events-none",3,"user","date","availability"],["class","pointer-events-none",3,"user","date","availability",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-between","p-2","border-t","border-base-200","w-full"],["btn","","matRipple","",1,"clear","text-secondary",3,"mat-dialog-close"],[1,"flex","items-center"],[1,"text-xl"],[1,"mr-1","underline"],["hour","",1,"relative","border-r","border-base-200","h-10","min-w-[5rem]","p-2"],["person","",1,"flex","flex-col","items-center","justify-center","h-32","w-24","relative","border-b","border-base-200","py-2"],[1,"text-xs","break-words","max-w-full","px-2","text-center"],["icon","",1,"absolute","-top-1","-left-1",3,"click"],["divider","",1,"relative","h-full","min-w-[5rem]","border-l","border-base-200"],[1,"bg-base-100","border","border-base-200","p-2","absolute","top-12","left-1/2","-translate-x-1/2","shadow","text-xs","whitespace-nowrap","rounded"]],template:function(o,n){1&o&&(t.TgZ(0,"header",0)(1,"h2",1),t._uU(2,"Find Availability"),t.qZA(),t.TgZ(3,"button",2)(4,"app-icon"),t._uU(5,"close"),t.qZA()()(),t.TgZ(6,"main",3)(7,"div",4)(8,"a-date-field",5),t.NdJ("ngModelChange",function(l){return n.date=l})("ngModelChange",function(){return n.on_change.next(n.on_change.getValue()+1)}),t.qZA(),t.TgZ(9,"a-user-search-field",5),t.NdJ("ngModelChange",function(l){return n.user=l})("ngModelChange",function(l){return n.addUser(l)}),t.qZA()(),t.TgZ(10,"div",6)(11,"div",7),t.YNc(12,ot,2,5,"div",8),t.qZA(),t.TgZ(13,"div",9)(14,"div",10),t._UZ(15,"a-user-avatar",11),t.TgZ(16,"div",12),t._uU(17),t.qZA()(),t.YNc(18,it,7,4,"div",13),t.ALo(19,"async"),t.qZA(),t.TgZ(20,"div",14)(21,"div",15),t.YNc(22,nt,1,3,"div",16),t.TgZ(23,"div",17),t.NdJ("mousedown",function(l){return n.startMovePeriod(l)})("touchstart",function(l){return n.startMovePeriod(l)}),t._UZ(24,"div",18)(25,"div",19),t.TgZ(26,"div",20),t.NdJ("mousedown",function(l){return n.startMoveDuration(l)})("touchstart",function(l){return n.startMoveDuration(l)}),t.qZA(),t.TgZ(27,"div",21),t._uU(28),t.ALo(29,"duration"),t.qZA(),t.YNc(30,st,3,4,"div",22),t.qZA()(),t.TgZ(31,"div",23,24),t.NdJ("scroll",function(){return n.onScroll()}),t._UZ(33,"user-availability-list",25),t.ALo(34,"async"),t.ALo(35,"async"),t.YNc(36,at,3,8,"user-availability-list",26),t.ALo(37,"async"),t.qZA()()()(),t.TgZ(38,"footer",27)(39,"button",28)(40,"div",29)(41,"app-icon",30),t._uU(42,"arrow_back"),t.qZA(),t.TgZ(43,"div",31),t._uU(44,"Back to form"),t.qZA()()()()),2&o&&(t.xp6(8),t.Q6J("ngModel",n.date),t.xp6(1),t.Q6J("ngModel",n.user),t.xp6(3),t.Q6J("ngForOf",n.hours),t.xp6(2),t.Udp("top",-n.offset_y+"px"),t.xp6(1),t.Q6J("user",n.host),t.xp6(2),t.hij(" ",n.host.name||n.host.email," "),t.xp6(1),t.Q6J("ngForOf",t.lcZ(19,20,n.users)),t.xp6(4),t.Q6J("ngForOf",n.hours),t.xp6(1),t.Udp("left","calc("+n.selection_left+"rem - "+n.offset_x+"px)")("width",n.selection_width+"rem"),t.xp6(5),t.hij(" ",t.lcZ(29,22,n.duration)," "),t.xp6(2),t.Q6J("ngIf",n.move_time),t.xp6(3),t.Q6J("user",n.host)("date",n.date)("availability",t.lcZ(34,24,n.availability)?t.lcZ(35,26,n.availability)[n.host.email]:t.DdM(30,_)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(37,28,n.users)),t.xp6(3),t.Q6J("mat-dialog-close",!0))},styles:[".grid[_ngcontent-%COMP%]{grid-template-columns:6rem 1fr;grid-template-rows:2.5rem minmax(0,1fr)}[disabled=true][_ngcontent-%COMP%], [disabled=true][_ngcontent-%COMP%]   [header][_ngcontent-%COMP%]{background:var(--b3)!important;pointer-events:none}[disabled=true][_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{opacity:.3}\n\n/*# sourceMappingURL=find-availability-modal.component.ts-angular-inline--32.css.map*/"]})}return s})();var d=i(6575);function rt(s,a){if(1&s&&(t.TgZ(0,"div",2)(1,"div",3),t._uU(2),t.ALo(3,"date"),t.ALo(4,"date"),t.qZA()()),2&s){const e=a.$implicit;t.Udp("left",e.start+"%")("width",e.size+"%"),t.xp6(2),t.AsE(" ",t.xi3(3,6,e.date,"shortTime")," - ",t.xi3(4,9,e.date.valueOf()+60*e.duration*1e3,"shortTime")," ")}}let A=(()=>{class s{constructor(){this.availability=[],this.date=Date.now()}static#t=this.\u0275fac=function(o){return new(o||s)};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["user-availability-list"]],inputs:{user:"user",availability:"availability",date:"date"},decls:2,vars:1,consts:[[1,"relative","w-[120rem]","h-32","inset-y-0","border-b","border-base-200"],["event","","class","absolute inset-y-0 bg-error text-white p-2 overflow-hidden border border-red-700 rounded",3,"left","width",4,"ngFor","ngForOf"],["event","",1,"absolute","inset-y-0","bg-error","text-white","p-2","overflow-hidden","border","border-red-700","rounded"],[1,"text-xs","max-w-full"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t.YNc(1,rt,5,12,"div",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngForOf",n.availability))},dependencies:[d.sg,d.uU],styles:["[_nghost-%COMP%]{display:block}\n\n/*# sourceMappingURL=user-availability.component.ts-angular-inline--31.css.map*/"]})}return s})();var h=i(8849),T=i(4888),C=i(2882),p=i(8128),U=i(257),lt=i(3910),dt=i(6658),ut=i(6362),ct=i(576),ht=i(5522);t.B6R(x.J,[d.sg,d.O5,h.JJ,h.On,c.ZT,T.o,C.k,p.VK,p.OP,p.p6,U.wG,lt.Ou,dt.oG],[d.uU]),t.B6R(Z,[d.sg,d.O5,h.JJ,h.On,c.ZT,ut.Q,ct.d,T.o,C.k,U.wG,A],[d.Ov,d.uU,ht.u]);class vt{constructor(a={}){this.type=a.type||a.location||"other",this.position=a.position||a.map_id||a.asset_id||{x:a.x/a.map_width||0,y:a.y/a.map_height||0},this.variance=a.variance||0,this.last_seen=a.last_seen||(0,m.Z)(new Date),this.level=a.level,this.building=a.building,this.at_location=!!a.at_location,this.coordinates_from=a.coordinates_from||"top-left"}}var mt=i(1451)}}]);
//# sourceMappingURL=default-libs_users_src_index_ts.js.map