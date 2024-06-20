"use strict";(self.webpackChunkworkplace=self.webpackChunkworkplace||[]).push([["apps_workplace_src_app_events_group-events_module_ts"],{34535:(pt,T,r)=>{r.r(T),r.d(T,{GroupEventsModule:()=>lt});var p=r(60316),h=r(34456),j=r(19805),R=r(63046),F=r(57915),f=r(21157),$=r(12185),E=r(67450),_=r(27419),m=r(13264),u=r(90521),g=r(42175),A=r(8627),D=r(71963),c=r(35443),w=r(66e3),G=r(7841),t=r(68559);let x=(()=>{class o{constructor(s,n){this._org=s,this._settings=n,this._options=new u.t({date:Date.now()}),this._filters=new u.t({categories:[],tags:[]}),this._tag_list=new u.t([]),this.filters=this._filters.asObservable(),this.tags=this._tag_list.asObservable(),this.events=(0,g.zV)([this._org.active_building,this._options]).pipe((0,A.p)(([e])=>!!e),(0,D.n)(([e,i])=>(0,F.tj)({period_start:(0,E.A)((0,_.A)(Math.max(Date.now(),i.date))),period_end:(0,E.A)((0,m.A)(i.end||i.date)),type:"group-event",zones:this._settings.get("app.use_region")?e.parent_id:e.id})),(0,c.T)(e=>e.filter(i=>"PRIVATE"!==i.permission).sort((i,a)=>i.date-a.date)),(0,w.M)(e=>{const i=this._tag_list.getValue(),a=e.map(d=>d.tags).flat();this._tag_list.next((0,f.Am)([...i,...a]))}),(0,G.t)(1)),this.filtered_events=(0,g.zV)([this.events,this._filters]).pipe((0,c.T)(([e,{tags:i}])=>{const a=i.map(d=>d.toLowerCase());return e.filter(d=>{const dt=d.tags.map(b=>b.toLowerCase());return a.every(b=>dt.includes(b))&&d.date_end>Date.now()})}),(0,G.t)(1)),this.options=this._options.asObservable()}setOptions(s){this._options.next({...this._options.value,...s})}setFilters(s){this._filters.next({...this._filters.value,...s})}static#t=this.\u0275fac=function(n){return new(n||o)(t.KVO($.yb),t.KVO(f.h$))};static#e=this.\u0275prov=t.jDH({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var S=r(17434),k=r(10895),V=r(93736),C=r(89204),v=r(88402),P=r(61947),U=r(69935),y=r(61031),I=r(68266),O=r(33602),M=r(85060),Y=r(24950),N=r(25175),L=r(97024),X=r(89058);function B(o,l){if(1&o&&(t.j41(0,"mat-option",12),t.EFF(1),t.k0s()),2&o){const s=l.$implicit;t.Y8G("value",s.id),t.R7$(),t.SpI(" ",s.display," ")}}function J(o,l){if(1&o){const s=t.RV6();t.j41(0,"button",15),t.bIt("click",function(){const e=t.eBV(s).$implicit,i=t.XpG(2);return t.Njj(i.toggleTag(e))}),t.j41(1,"mat-checkbox",16),t.nI1(2,"async"),t.EFF(3),t.k0s()()}if(2&o){let s;const n=l.$implicit,e=t.XpG(2);t.R7$(),t.Y8G("ngModel",null==(s=t.bMT(2,2,e.filters))||null==s.tags?null:s.tags.includes(n)),t.R7$(2),t.SpI(" ",n," ")}}function z(o,l){if(1&o&&(t.j41(0,"div",13)(1,"h3"),t.EFF(2,"Tags"),t.k0s(),t.DNE(3,J,4,4,"button",14),t.nI1(4,"async"),t.k0s()),2&o){const s=t.XpG();t.R7$(3),t.Y8G("ngForOf",t.bMT(4,1,s.tags))}}let W=(()=>{class o extends f.Tv{constructor(s,n){super(),this._settings=s,this._state=n,this.period=new u.t("week"),this.period_list=[],this.options=this._state.options,this.filters=this._state.filters,this.tags=this._state.tags}ngOnInit(){this.subscription("period",this.period.subscribe(()=>{this._generatePeriods(),this.period_list.length&&(this.setPeriod(this.period_list[0].id),this.selected_range=this.period_list[0].id)})),this._generatePeriods(),this.period_list.length&&(this.setPeriod(this.period_list[0].id),this.selected_range=this.period_list[0].id)}toggleTag(s){var n=this;return(0,C.A)(function*(){const e=(yield n.filters.pipe((0,O.s)(1)).toPromise())?.tags||[];e.includes(s)?n._state.setFilters({tags:e.filter(i=>i!==s)}):n._state.setFilters({tags:[...e,s]})})()}setPeriodFromDate(s){for(const n of this.period_list)if(s>=n.start&&s<=n.end)return this.selected_range=n.id,void this.setPeriod(n.id)}setPeriod(s){const{start:n,end:e}=this.period_list.find(i=>i.id===s);this._state.setOptions({date:n,end:e})}_generatePeriods(){const s=[],n=this.period.value;let e=Date.now();const i=(0,v.A)(e,360).valueOf(),a=this._settings.get("app.week_start")||0;for("month"===n?e=(0,P.A)(e).valueOf():"week"===n&&(e=(0,U.A)(e,{weekStartsOn:a}).valueOf());e<i;)if("week"===n){const d=(0,m.A)((0,v.A)(e,6)).valueOf();s.push({id:e,start:e,end:d,display:`${(0,y.A)(Math.max(Date.now(),e),"EEE, do MMM")} \u2013 ${(0,y.A)(d,"do MMM")}`}),e=(0,v.A)(e,7).valueOf()}else{if("month"!==n)break;{const d=(0,m.A)((0,v.A)((0,I.A)(e,1),-1)).valueOf();s.push({id:e,start:e,end:d,display:`${(0,y.A)(e,"MMMM yyyy")}`}),e=(0,I.A)(e,1).valueOf()}}this.period_list=s}static#t=this.\u0275fac=function(n){return new(n||o)(t.rXU(f.h$),t.rXU(x))};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["group-events-sidebar"]],features:[t.Vt3],decls:21,vars:16,consts:[[1,"flex","flex-col","bg-base-100","w-[18rem]","h-full"],[1,"flex","items-center","space-x-2","p-2"],["btn","","matRipple","",1,"flex-1","rounded-3xl",3,"click"],[1,"flex","flex-col","items-center","space-y-2","pb-2","px-2"],["appearance","outline",1,"w-full","no-subscript"],["placeholder","Select Period",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[1,"border-base-200","w-[calc(100%-1rem)]","mx-auto"],[3,"ngModelChange","ngModel"],[1,"flex","flex-col","flex-1","overflow-auto"],[1,"text-lg","font-medium","p-4"],["class","flex flex-col space-y-2 px-4",4,"ngIf"],[3,"value"],[1,"flex","flex-col","space-y-2","px-4"],["matRipple","","class","flex items-center rounded w-full text-left",3,"click",4,"ngFor","ngForOf"],["matRipple","",1,"flex","items-center","rounded","w-full","text-left",3,"click"],[3,"ngModel"]],template:function(n,e){if(1&n&&(t.j41(0,"div",0)(1,"div",1)(2,"button",2),t.nI1(3,"async"),t.bIt("click",function(){return e.period.next("week")}),t.EFF(4," Week "),t.k0s(),t.j41(5,"button",2),t.nI1(6,"async"),t.bIt("click",function(){return e.period.next("month")}),t.EFF(7," Month "),t.k0s()(),t.j41(8,"div",3)(9,"mat-form-field",4)(10,"mat-select",5),t.mxI("ngModelChange",function(a){return t.DH7(e.selected_range,a)||(e.selected_range=a),a}),t.bIt("ngModelChange",function(a){return e.setPeriod(a)}),t.DNE(11,B,2,2,"mat-option",6),t.k0s()()(),t.nrm(12,"hr",7),t.j41(13,"date-calendar",8),t.nI1(14,"async"),t.bIt("ngModelChange",function(a){return e.setPeriodFromDate(a)}),t.k0s(),t.nrm(15,"hr",7),t.j41(16,"div",9)(17,"h2",10),t.EFF(18,"Filters"),t.k0s(),t.DNE(19,z,5,3,"div",11),t.nI1(20,"async"),t.k0s()()),2&n){let i;t.R7$(2),t.AVh("inverse","week"!==t.bMT(3,8,e.period)),t.R7$(3),t.AVh("inverse","month"!==t.bMT(6,10,e.period)),t.R7$(5),t.R50("ngModel",e.selected_range),t.R7$(),t.Y8G("ngForOf",e.period_list),t.R7$(2),t.Y8G("ngModel",t.bMT(14,12,e.options).date),t.R7$(6),t.Y8G("ngIf",null==(i=t.bMT(20,14,e.tags))?null:i.length)}},dependencies:[p.Sq,p.bT,h.BC,h.vS,M.wT,Y.rl,N.VO,M.r6,L.So,X.I,p.Jj]})}return o})();var H=r(64833),K=r(69434);const Q=()=>[];function Z(o,l){if(1&o){const s=t.RV6();t.j41(0,"div",5)(1,"div",6),t.EFF(2),t.k0s(),t.j41(3,"button",7),t.bIt("click",function(){const e=t.eBV(s).$implicit,i=t.XpG();return t.Njj(i.removeTag(e))}),t.j41(4,"app-icon"),t.EFF(5,"close"),t.k0s()()()}if(2&o){const s=l.$implicit;t.R7$(2),t.JRh(s)}}let q=(()=>{class o{constructor(s){this._state=s,this.options=this._state.options,this.filters=this._state.filters,this.this_period=this._state.options.pipe((0,c.T)(({date:n,end:e})=>Date.now()>=(0,_.A)(n).valueOf()&&Date.now()<(0,m.A)(e||n).valueOf())),this.period=this._state.options.pipe((0,c.T)(({date:n,end:e})=>Math.abs((0,H.A)(n,e||Date.now()))>7?"month":"week"))}removeTag(s){var n=this;return(0,C.A)(function*(){const e=(yield n.filters.pipe((0,O.s)(1)).toPromise())?.tags||[];n._state.setFilters({tags:e.filter(i=>i!==s)})})()}static#t=this.\u0275fac=function(n){return new(n||o)(t.rXU(x))};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["group-events-filters-list"]],decls:15,vars:22,consts:[[1,"my-2","w-[63rem]","max-w-full","mx-auto","border","border-base-300","p-4","bg-base-100","rounded"],[1,"flex","items-center","justify-between","space-x-2","mb-4"],[1,"flex","flex-wrap"],[1,"flex","items-center","px-4","py-3","rounded-3xl","border","border-base-400","m-1","text-sm"],["class","flex items-center pl-4 pr-1 rounded-3xl border border-base-400 m-1",4,"ngFor","ngForOf"],[1,"flex","items-center","pl-4","pr-1","rounded-3xl","border","border-base-400","m-1"],[1,"mr-2","flex-1","text-sm"],["icon","","matRipple","",3,"click"]],template:function(n,e){if(1&n&&(t.j41(0,"div",0)(1,"div",1)(2,"div"),t.EFF(3),t.nI1(4,"async"),t.nI1(5,"async"),t.k0s()(),t.j41(6,"div",2)(7,"div",3),t.EFF(8),t.nI1(9,"async"),t.nI1(10,"date"),t.nI1(11,"async"),t.nI1(12,"date"),t.k0s(),t.DNE(13,Z,6,1,"div",4),t.nI1(14,"async"),t.k0s()()),2&n){let i,a;t.R7$(3),t.Lme(" ",t.bMT(4,5,e.this_period)?"This":"Upcoming"," ","week"===t.bMT(5,7,e.period)?"Week":"Month"," "),t.R7$(5),t.Lme(" ",t.i5U(10,11,null==(i=t.bMT(9,9,e.options))?null:i.date,"MMM d, y")," \u2013 ",t.i5U(12,16,null==(i=t.bMT(11,14,e.options))?null:i.end,"MMM d, y")," "),t.R7$(5),t.Y8G("ngForOf",(null==(a=t.bMT(14,19,e.filters))?null:a.tags)||t.lJ4(21,Q))}},dependencies:[p.Sq,K.R,M.r6,p.Jj,p.vh]})}return o})();const tt=["group-events",""];function et(o,l){if(1&o&&(t.nrm(0,"group-event-card",5),t.nI1(1,"async")),2&o){const s=t.XpG();t.Y8G("event",t.bMT(1,2,s.featured))("featured",!0)}}function st(o,l){1&o&&t.nrm(0,"group-event-card",8),2&o&&t.Y8G("event",l.$implicit)}function nt(o,l){if(1&o&&(t.qex(0),t.j41(1,"div",6),t.DNE(2,st,1,1,"group-event-card",7),t.nI1(3,"async"),t.k0s(),t.bVm()),2&o){const s=t.XpG();t.R7$(2),t.Y8G("ngForOf",t.bMT(3,1,s.events_without_featured))}}function ot(o,l){1&o&&(t.j41(0,"div",9),t.nrm(1,"img",10),t.j41(2,"div",11),t.EFF(3," No events for the selected time period "),t.k0s(),t.j41(4,"div",12),t.EFF(5," Expand you search or try again "),t.k0s()())}let it=(()=>{class o extends f.Tv{constructor(s){super(),this._state=s,this.event_list=this._state.filtered_events,this.featured=this.event_list.pipe((0,c.T)(n=>n.find(e=>e.extension_data?.featured||e.featured))),this.events_without_featured=(0,g.zV)([this.event_list,this.featured]).pipe((0,c.T)(([n,e])=>n.filter(i=>i.id!==e?.id)))}static#t=this.\u0275fac=function(n){return new(n||o)(t.rXU(x))};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["","group-events",""]],features:[t.Vt3],attrs:tt,decls:12,vars:7,consts:[["no_events",""],[1,"flex","flex-1","h-1/2","bg-base-200"],[1,"w-1/2","flex-1","h-full","overflow-auto","p-4"],["class","my-2 mx-auto w-[64rem] max-w-full",3,"event","featured",4,"ngIf"],[4,"ngIf","ngIfElse"],[1,"my-2","mx-auto","w-[64rem]","max-w-full",3,"event","featured"],[1,"flex","flex-wrap","mt-2","w-[64rem]","max-w-full","mx-auto"],["class","m-2",3,"event",4,"ngFor","ngForOf"],[1,"m-2",3,"event"],[1,"flex","flex-col","items-center","justify-center","w-full","h-full","space-y-2"],["src","assets/icons/no-results.svg",1,"w-32"],[1,"font-medium"],[1,"opacity-30"]],template:function(n,e){if(1&n&&(t.nrm(0,"topbar"),t.j41(1,"main",1),t.nrm(2,"group-events-sidebar"),t.j41(3,"div",2),t.nrm(4,"group-events-filters-list"),t.DNE(5,et,2,4,"group-event-card",3),t.nI1(6,"async"),t.DNE(7,nt,4,3,"ng-container",4),t.nI1(8,"async"),t.DNE(9,ot,6,0,"ng-template",null,0,t.C5r),t.k0s()(),t.nrm(11,"footer-menu")),2&n){let i;const a=t.sdS(10);t.R7$(5),t.Y8G("ngIf",t.bMT(6,3,e.featured)),t.R7$(2),t.Y8G("ngIf",null==(i=t.bMT(8,5,e.event_list))?null:i.length)("ngIfElse",a)}},dependencies:[p.Sq,p.bT,S.G,k.e,V.T,W,q,p.Jj],styles:["[_nghost-%COMP%]{position:absolute;inset:0;overflow:hidden;display:flex;flex-direction:column}main[_ngcontent-%COMP%]{min-height:50%}.top[_ngcontent-%COMP%]{background-color:#007ac8}\n\n/*# sourceMappingURL=group-events.component.ts-angular-inline--135.css.map*/"]})}return o})();var rt=r(16591);const at=[{path:"",component:it}];let lt=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.$C({type:o});static#s=this.\u0275inj=t.G2t({imports:[p.MD,h.YN,rt.p,F.SG,R.cQ,j.iI.forChild(at)]})}return o})()}}]);
//# sourceMappingURL=apps_workplace_src_app_events_group-events_module_ts.js.map