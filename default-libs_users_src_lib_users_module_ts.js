"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["default-libs_users_src_lib_users_module_ts"],{4621:(Y,C,n)=>{n.d(C,{X:()=>P});var c=n(2587),h=n(7375),M=n(1257),m=n(9908),f=n(3240),T=n(6441),E=n(8700);function p(d){return(0,E.a)(1e3*d)}var R=n(1874),D=n(9675),I=n(6576),x=n(521),U=n(2175),l=n(1536),b=n(9803),w=n(1963),A=n(9314),F=n(5443),_=n(4702),$=n(7841),t=n(7404);const B=["container"],g=()=>[];function j(d,u){if(1&d&&(t.j41(0,"div",32),t.EFF(1),t.k0s()),2&d){const i=u.index,e=t.XpG();t.xc7("left",-e.offset_x+"px"),t.BMQ("disabled",e.today&&e.current_hour>i),t.R7$(),t.Lme(" ",i%12==0?"12":i%12,"",i>=12?"pm":"am"," ")}}function y(d,u){if(1&d){const i=t.RV6();t.j41(0,"div",33),t.nrm(1,"a-user-avatar",12),t.j41(2,"div",34),t.EFF(3),t.k0s(),t.j41(4,"button",35),t.bIt("click",function(){const o=t.eBV(i).$implicit,s=t.XpG();return t.Njj(s.removeUser(o))}),t.j41(5,"app-icon"),t.EFF(6,"close"),t.k0s()()()}if(2&d){const i=u.$implicit,e=t.XpG();t.xc7("top",-e.offset_y+"px"),t.R7$(),t.Y8G("user",i),t.R7$(2),t.SpI(" ",i.name||e.host.email," ")}}function G(d,u){if(1&d&&t.nrm(0,"div",36),2&d){const i=u.index,e=t.XpG();t.xc7("left",-(e.offset_x+1)+"px"),t.BMQ("disabled",e.today&&e.current_hour>i)}}function O(d,u){if(1&d&&(t.j41(0,"div",37),t.EFF(1),t.nI1(2,"date"),t.k0s()),2&d){const i=t.XpG();t.R7$(),t.SpI(" ",t.i5U(2,1,i.date,"shortTime")," ")}}function V(d,u){if(1&d&&(t.nrm(0,"user-availability-list",25),t.nI1(1,"async"),t.nI1(2,"async")),2&d){const i=u.$implicit,e=t.XpG();t.Y8G("user",i)("date",e.date)("availability",t.bMT(1,3,e.availability)?t.bMT(2,5,e.availability)[i.email.toLowerCase()]:t.lJ4(7,g))}}let P=(()=>{class d extends h.Tv{get today(){return(0,M.r)(this.date,Date.now())}get current_hour(){return(new Date).getHours()}get selection_left(){const i=new Date(this.date);return 5*(i.getHours()+i.getMinutes()/60)}get selection_width(){return this.duration/60*5}constructor(i,e,o){super(),this._data=i,this._renderer=e,this._dialog_ref=o,this.users=new x.t([]),this.search="",this.date=this._data.date||Date.now(),this.duration=this._data.duration||60,this.offset_y=0,this.offset_x=0,this.host=this._data.host,this.hours=new Array(24).fill(0),this.on_change=new x.t(0),this.availability=(0,U.zV)([this.users,this.on_change]).pipe((0,b.B)(300),(0,w.n)(([s])=>(0,I.f6)({calendars:[this.host.email,...s.map(a=>a.email.toLowerCase())].join(","),period_start:(0,m._)((0,f.o)(this.date)),period_end:(0,m._)((0,T.D)(this.date))}).pipe((0,A.W)(()=>(0,l.of)([])))),(0,F.T)(s=>{const a={};for(const r of s)a[r.id.toLowerCase()]=r.availability.filter(v=>"busy"===v.status).map(v=>{const S=p(v.starts_at),N=(0,R.o)(p(v.ends_at),p(v.starts_at));return{date:S,duration:N,start:(S.getHours()+S.getMinutes()/60)/24*100,size:N/60/24*100}});return a}),(0,_.U)({}),(0,$.t)(1)),this.move_time=!1,this._start_time=0,this._move_last=0,this._move_size=1920,this.users.next([...this._data.users])}addUser(i){this.users.next([...this.users.getValue().filter(e=>e.email!==i.email),i]),this.user=null}removeUser(i){this.users.next(this.users.getValue().filter(e=>e.email!==i.email)),this.user=null}closeAndUpdate(){this._dialog_ref.close(!0)}ngAfterViewInit(){const i=new Date(this.date);this.timeout("init",()=>{const e=this._container_el.nativeElement.querySelector(`[hour="${i.getHours()}"]`);if(e){const o=this._container_el.nativeElement.getBoundingClientRect(),s=e.getBoundingClientRect();this._container_el.nativeElement.scrollTo(s.left-128-o.left,0)}this.onScroll()},300)}onScroll(){this.offset_x=this._container_el.nativeElement.scrollLeft,this.offset_y=this._container_el.nativeElement.scrollTop}startMovePeriod(i){i.preventDefault(),i.stopPropagation(),this._move_last=i instanceof MouseEvent?i.clientX:i.touches[0].clientX,this.move_time=!0,this._start_time=this.date,i instanceof MouseEvent?this.subscription("on_move",this._renderer.listen("window","mousemove",e=>this._onMovePeriod(e))):this.subscription("on_move",this._renderer.listen("window","touchmove",e=>this._onMovePeriod(e))),i instanceof MouseEvent?this.subscription("on_move_end",this._renderer.listen("window","mouseup",()=>this._onMoveEnd())):this.subscription("on_move_end",this._renderer.listen("window","touchend",()=>this._onMoveEnd()))}startMoveDuration(i){i.preventDefault(),i.stopPropagation(),this._move_last=i instanceof MouseEvent?i.clientX:i.touches[0].clientX,this._start_time=this.duration,i instanceof MouseEvent?this.subscription("on_move",this._renderer.listen("window","mousemove",e=>this._onMoveDuration(e))):this.subscription("on_move",this._renderer.listen("window","touchmove",e=>this._onMoveDuration(e))),i instanceof MouseEvent?this.subscription("on_move_end",this._renderer.listen("window","mouseup",()=>this._onMoveEnd())):this.subscription("on_move_end",this._renderer.listen("window","touchend",()=>this._onMoveEnd()))}_onMovePeriod(i){const e=this._move_last-(i instanceof MouseEvent?i.clientX:i.touches[0].clientX),s=(e>0?-1:1)*Math.floor(Math.abs(e/this._move_size*24*60)/5)*5;if(s){const a=this.date;this.date=(0,D.z)(this._start_time,s).valueOf(),this.date<Date.now()&&(this.date=a)}}_onMoveDuration(i){const e=this._move_last-(i instanceof MouseEvent?i.clientX:i.touches[0].clientX),s=(e>0?-1:1)*Math.floor(Math.abs(e/this._move_size*24*60)/5)*5;s&&(this.duration=Math.max(30,this._start_time+s))}_onMoveEnd(){this.unsub("on_move"),this.unsub("on_move_end"),this._move_last=0,this.move_time=!1}static#t=this.\u0275fac=function(e){return new(e||d)(t.rXU(c.Vh),t.rXU(t.sFG),t.rXU(c.CP))};static#e=this.\u0275cmp=t.VBU({type:d,selectors:[["find-availability-modal"]],viewQuery:function(e,o){if(1&e&&t.GBs(B,7),2&e){let s;t.mGM(s=t.lsd())&&(o._container_el=s.first)}},features:[t.Vt3],decls:45,vars:31,consts:[["container",""],[1,"relative","flex","items-center","justify-center","p-4"],[1,"text-center"],["icon","","matRipple","","mat-dialog-close","",1,"absolute","top-1/2","left-1","-translate-y-1/2"],[1,"flex","flex-col","h-[calc(100vh-7rem)]","sm:h-[65vh]","overflow-hidden"],[1,"w-full","flex","flex-col","sm:flex-row","space-y-2","sm:space-y-0","sm:space-x-2","p-2"],[1,"max-h-[3.25rem]","flex-1",3,"ngModelChange","ngModel"],[1,"grid","flex-1","h-1/2","w-full","border-t","border-base-200","relative","overflow-hidden","divide-x","divide-y","divide-base-200","max-w-[100vw]","sm:max-w-[80vw]"],["times","",1,"col-start-2","h-10","flex","overflow-hidden","border-l","border-base-200"],["hour","","class","relative border-r border-base-200 h-10 min-w-[5rem] p-2",3,"left",4,"ngFor","ngForOf"],["users","",1,"row-start-2","w-24","overflow-hidden"],["host","",1,"flex","flex-col","items-center","justify-center","h-32","w-24","relative","border-b","border-base-200","py-2"],[1,"text-2xl",3,"user"],[1,"text-xs","break-words","overflow-hidden","max-w-full","px-2","text-center"],["person","","class","flex flex-col items-center justify-center h-32 w-24 relative border-b border-base-200 py-2",3,"top",4,"ngFor","ngForOf"],["blocks","",1,"relative","row-start-2","overflow-hidden"],["fixed","",1,"absolute","inset-0","flex","overflow-hidden"],["divider","","class","relative h-full min-w-[5rem] border-l border-base-200",3,"left",4,"ngFor","ngForOf"],["selection","",1,"absolute","inset-y-0","!border-x-2","!border-info","z-20","cursor-grab","active:cursor-grabbing",3,"mousedown","touchstart"],[1,"absolute","inset-0","bg-info","opacity-30"],["handle","",1,"absolute","top-1/2","-left-px","-translate-x-1/2","-translate-y-1/2","h-3","w-3","rounded-full","bg-info"],["handle","",1,"absolute","top-1/2","-right-px","translate-x-1/2","-translate-y-1/2","h-3","w-3","rounded-full","bg-info","hover:h-4","hover:w-4","active:bg-secondary",3,"mousedown","touchstart"],[1,"bg-base-100","border","border-base-200","p-2","absolute","top-2","left-1/2","-translate-x-1/2","shadow","text-xs","whitespace-nowrap","rounded"],["class","bg-base-100 border border-base-200 p-2 absolute top-12 left-1/2 -translate-x-1/2 shadow text-xs whitespace-nowrap rounded",4,"ngIf"],["scroll","",1,"absolute","inset-0","overflow-auto",3,"scroll"],[1,"pointer-events-none",3,"user","date","availability"],["class","pointer-events-none",3,"user","date","availability",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-between","p-2","border-t","border-base-200","w-full"],["btn","","matRipple","",1,"clear","text-secondary",3,"mat-dialog-close"],[1,"flex","items-center"],[1,"text-xl"],[1,"mr-1","underline"],["hour","",1,"relative","border-r","border-base-200","h-10","min-w-[5rem]","p-2"],["person","",1,"flex","flex-col","items-center","justify-center","h-32","w-24","relative","border-b","border-base-200","py-2"],[1,"text-xs","break-words","max-w-full","px-2","text-center"],["icon","",1,"absolute","-top-1","-left-1",3,"click"],["divider","",1,"relative","h-full","min-w-[5rem]","border-l","border-base-200"],[1,"bg-base-100","border","border-base-200","p-2","absolute","top-12","left-1/2","-translate-x-1/2","shadow","text-xs","whitespace-nowrap","rounded"]],template:function(e,o){if(1&e){const s=t.RV6();t.j41(0,"header",1)(1,"h2",2),t.EFF(2,"Find Availability"),t.k0s(),t.j41(3,"button",3)(4,"app-icon"),t.EFF(5,"close"),t.k0s()()(),t.j41(6,"main",4)(7,"div",5)(8,"a-date-field",6),t.mxI("ngModelChange",function(r){return t.eBV(s),t.DH7(o.date,r)||(o.date=r),t.Njj(r)}),t.bIt("ngModelChange",function(){return t.eBV(s),t.Njj(o.on_change.next(o.on_change.getValue()+1))}),t.k0s(),t.j41(9,"a-user-search-field",6),t.mxI("ngModelChange",function(r){return t.eBV(s),t.DH7(o.user,r)||(o.user=r),t.Njj(r)}),t.bIt("ngModelChange",function(r){return t.eBV(s),t.Njj(o.addUser(r))}),t.k0s()(),t.j41(10,"div",7)(11,"div",8),t.DNE(12,j,2,5,"div",9),t.k0s(),t.j41(13,"div",10)(14,"div",11),t.nrm(15,"a-user-avatar",12),t.j41(16,"div",13),t.EFF(17),t.k0s()(),t.DNE(18,y,7,4,"div",14),t.nI1(19,"async"),t.k0s(),t.j41(20,"div",15)(21,"div",16),t.DNE(22,G,1,3,"div",17),t.j41(23,"div",18),t.bIt("mousedown",function(r){return t.eBV(s),t.Njj(o.startMovePeriod(r))})("touchstart",function(r){return t.eBV(s),t.Njj(o.startMovePeriod(r))}),t.nrm(24,"div",19)(25,"div",20),t.j41(26,"div",21),t.bIt("mousedown",function(r){return t.eBV(s),t.Njj(o.startMoveDuration(r))})("touchstart",function(r){return t.eBV(s),t.Njj(o.startMoveDuration(r))}),t.k0s(),t.j41(27,"div",22),t.EFF(28),t.nI1(29,"duration"),t.k0s(),t.DNE(30,O,3,4,"div",23),t.k0s()(),t.j41(31,"div",24,0),t.bIt("scroll",function(){return t.eBV(s),t.Njj(o.onScroll())}),t.nrm(33,"user-availability-list",25),t.nI1(34,"async"),t.nI1(35,"async"),t.DNE(36,V,3,8,"user-availability-list",26),t.nI1(37,"async"),t.k0s()()()(),t.j41(38,"footer",27)(39,"button",28)(40,"div",29)(41,"app-icon",30),t.EFF(42,"arrow_back"),t.k0s(),t.j41(43,"div",31),t.EFF(44,"Back to form"),t.k0s()()()()}2&e&&(t.R7$(8),t.R50("ngModel",o.date),t.R7$(),t.R50("ngModel",o.user),t.R7$(3),t.Y8G("ngForOf",o.hours),t.R7$(2),t.xc7("top",-o.offset_y+"px"),t.R7$(),t.Y8G("user",o.host),t.R7$(2),t.SpI(" ",o.host.name||o.host.email," "),t.R7$(),t.Y8G("ngForOf",t.bMT(19,20,o.users)),t.R7$(4),t.Y8G("ngForOf",o.hours),t.R7$(),t.xc7("left","calc("+o.selection_left+"rem - "+o.offset_x+"px)")("width",o.selection_width+"rem"),t.R7$(5),t.SpI(" ",t.bMT(29,22,o.duration)," "),t.R7$(2),t.Y8G("ngIf",o.move_time),t.R7$(3),t.Y8G("user",o.host)("date",o.date)("availability",t.bMT(34,24,o.availability)?t.bMT(35,26,o.availability)[o.host.email]:t.lJ4(30,g)),t.R7$(3),t.Y8G("ngForOf",t.bMT(37,28,o.users)),t.R7$(3),t.Y8G("mat-dialog-close",!0))},styles:[".grid[_ngcontent-%COMP%]{grid-template-columns:6rem 1fr;grid-template-rows:2.5rem minmax(0,1fr)}[disabled=true][_ngcontent-%COMP%], [disabled=true][_ngcontent-%COMP%]   [header][_ngcontent-%COMP%]{background:var(--b3)!important;pointer-events:none}[disabled=true][_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{opacity:.3}\n\n/*# sourceMappingURL=find-availability-modal.component.ts-angular-inline--11.css.map*/"]})}return d})()},1081:(Y,C,n)=>{n.d(C,{k:()=>i});var c=n(316),h=n(4456),M=n(1134),m=n(1034),f=n(2587),T=n(7024),E=n(4558),p=n(481),U=(n(3924),n(7111),n(9204),n(6039),n(2372),n(3693)),l=n(7404);new U.KJ;var F=n(3022),_=n(4621);function $(e,o){if(1&e&&(l.j41(0,"div",2)(1,"div",3),l.EFF(2),l.nI1(3,"date"),l.nI1(4,"date"),l.k0s()()),2&e){const s=o.$implicit;l.xc7("left",s.start+"%")("width",s.size+"%"),l.R7$(2),l.Lme(" ",l.i5U(3,6,s.date,"shortTime")," - ",l.i5U(4,9,s.date.valueOf()+60*s.duration*1e3,"shortTime")," ")}}let t=(()=>{class e{constructor(){this.availability=[],this.date=Date.now()}static#t=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275cmp=l.VBU({type:e,selectors:[["user-availability-list"]],inputs:{user:"user",availability:"availability",date:"date"},decls:2,vars:1,consts:[[1,"relative","w-[120rem]","h-32","inset-y-0","border-b","border-base-200"],["event","","class","absolute inset-y-0 bg-error text-white p-2 overflow-hidden border border-red-700 rounded",3,"left","width",4,"ngFor","ngForOf"],["event","",1,"absolute","inset-y-0","bg-error","text-white","p-2","overflow-hidden","border","border-red-700","rounded"],[1,"text-xs","max-w-full"]],template:function(a,r){1&a&&(l.j41(0,"div",0),l.DNE(1,$,5,12,"div",1),l.k0s()),2&a&&(l.R7$(),l.Y8G("ngForOf",r.availability))},dependencies:[c.Sq,c.vh],styles:["[_nghost-%COMP%]{display:block}\n\n/*# sourceMappingURL=user-availability.component.ts-angular-inline--10.css.map*/"]})}return e})();var B=n(1413),g=n(9434),j=n(3574),y=n(5060),G=n(4950),O=n(5175),V=n(9608),P=n(8e3),d=n(7022);let i=(()=>{class e{static#t=this.\u0275fac=function(a){return new(a||e)};static#e=this.\u0275mod=l.$C({type:e});static#i=this.\u0275inj=l.G2t({imports:[c.MD,h.YN,h.X1,f.hM,p.c,E.h,T.g7,M.D6,m.Cn]})}return e})();l.wjB(F.$,[c.Sq,c.bT,h.BC,h.vS,f.tx,B.t,g.R,j.a,y.wT,m.kk,m.fb,m.Cp,G.rl,O.VO,y.r6,M.LG],[c.vh]),l.wjB(_.X,[c.Sq,c.bT,h.BC,h.vS,f.tx,V.G,P.$,g.R,j.a,y.r6,t],[c.Jj,c.vh,d.b])}}]);
//# sourceMappingURL=default-libs_users_src_lib_users_module_ts.js.map