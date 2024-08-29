"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_level-manager_level-manager_module_ts"],{93125:(A,g,i)=>{i.r(g),i.d(g,{LevelManagerModule:()=>me});var f=i(60316),r=i(34456),x=i(26842),E=i(40363),h=i(22168),v=i(68390),C=i(89204),u=i(12185),p=i(3998),M=i(90521),c=i(42175),b=i(35443),L=i(12587),_=i(77375),e=i(7404),R=i(24950),P=i(87984),G=i(25175),N=i(85060),F=i(97024),I=i(41134),y=i(69434);function O(t,a){1&t&&(e.j41(0,"button",7)(1,"app-icon"),e.EFF(2,"close"),e.k0s()())}function $(t,a){if(1&t&&(e.j41(0,"mat-option",18),e.EFF(1),e.k0s()),2&t){const n=a.$implicit;e.Y8G("value",n.id),e.R7$(),e.SpI(" ",n.display_name||n.name," ")}}function j(t,a){if(1&t&&(e.j41(0,"div",13)(1,"label",14),e.PLo(2,1),e.nrm(3,"span"),e.YFu(),e.k0s(),e.j41(4,"mat-form-field",15)(5,"mat-select",16),e.DNE(6,$,2,2,"mat-option",17),e.nI1(7,"async"),e.k0s(),e.j41(8,"mat-error"),e.EFF(9,"Building is required"),e.k0s()()()),2&t){const n=e.XpG(3);e.R7$(),e.AVh("error",n.form.controls.parent_id.invalid&&n.form.controls.parent_id.touched),e.R7$(5),e.Y8G("ngForOf",e.bMT(7,3,n.building_list))}}function V(t,a){1&t&&(e.j41(0,"div",13)(1,"label",19),e.pXf(2,2),e.k0s(),e.j41(3,"mat-form-field",15),e.nrm(4,"input",20),e.k0s()())}function k(t,a){1&t&&(e.j41(0,"div",13)(1,"label",21),e.pXf(2,3),e.k0s(),e.j41(3,"mat-form-field",15),e.nrm(4,"input",22),e.k0s()())}function D(t,a){1&t&&(e.j41(0,"div",23)(1,"mat-checkbox",24),e.EFF(2," Has Parking Spaces "),e.k0s()())}function X(t,a){if(1&t&&(e.j41(0,"form",10),e.DNE(1,j,10,5,"div",11)(2,V,5,0,"div",11)(3,k,5,0,"div",11)(4,D,3,0,"div",12),e.k0s()),2&t){const n=e.XpG(2);e.Y8G("formGroup",n.form),e.R7$(),e.Y8G("ngIf",n.form.controls.parent_id),e.R7$(),e.Y8G("ngIf",n.form.controls.display_name),e.R7$(),e.Y8G("ngIf",n.form.controls.map_id),e.R7$(),e.Y8G("ngIf",n.form.controls.parking)}}function w(t,a){if(1&t&&(e.j41(0,"main",8),e.DNE(1,X,5,5,"form",9),e.k0s()),2&t){const n=e.XpG();e.R7$(),e.Y8G("ngIf",n.form)}}function B(t,a){if(1&t){const n=e.RV6();e.j41(0,"footer",25)(1,"button",26),e.bIt("click",function(){e.eBV(n);const l=e.XpG();return e.Njj(l.save())}),e.EFF(2,"Save"),e.k0s()()}}function U(t,a){1&t&&(e.j41(0,"div",27),e.nrm(1,"mat-spinner",28),e.j41(2,"p",29),e.EFF(3,"Saving level..."),e.k0s()())}let z=(()=>{class t{constructor(n,o,l){this._org=n,this._data=o,this._dialog_ref=l,this.loading=!1,this.building_list=this._org.building_list,this.form=new r.gE({id:new r.MJ(this._data?.id||""),display_name:new r.MJ(this._data?.display_name||"",[r.k0.required]),parent_id:new r.MJ(this._data?.parent_id||"",[r.k0.required]),map_id:new r.MJ(this._data?.map_id||"",[r.k0.required]),parking:new r.MJ(this._data?.tags?.includes("parking")||!1)})}save(){var n=this;return(0,C.A)(function*(){if(!n.form.valid)return(0,_.UG)(`Some form fields are invalid. [${(0,_.F7)(n.form).join(", ")}]`);n.loading=!0;const o=n.form.getRawValue();o.tags=o.parking?["level","parking"]:["level"];const l=yield(o.id?(0,p.G5B)(o.id,{...o,name:`LEVEL ${(0,p.kup)().description} ${o.display_name}`}):(0,p.aP8)({...o,name:`LEVEL ${(0,p.kup)().description} ${o.display_name}`})).toPromise().catch();l.id&&n._dialog_ref.close(l),n.loading=!1})()}static#e=this.\u0275fac=function(o){return new(o||t)(e.rXU(u.yb),e.rXU(L.Vh),e.rXU(L.CP))};static#t=this.\u0275cmp=e.VBU({type:t,selectors:[["level-modal"]],decls:8,vars:5,consts:()=>{let n,o,l,s,m;return n=$localize`:@@zoneLabel␟5e09041a10f5eb39aadfaa1a8dd77f4dc8d77314␟711878476466678637: Building${"\ufffd#3\ufffd"}:START_TAG_SPAN:*${"\ufffd/#3\ufffd"}:CLOSE_TAG_SPAN:: `,o=$localize`:@@displayNamePlaceholder␟e438ba78cbafdb5bcbce0820bfaad995a504f222␟3013055597615607317:Display Name`,l=$localize`:@@displayNameLabel␟8d766661ed5e178519720ec8e959d2a737f600a6␟1377207093952578744: Display Name: `,s=$localize`:@@mapIdPlaceholder␟f78f3836515ccc83a36f25d9174f585019d54341␟1505388289077394171:URL of the Map SVG file`,m=$localize`:@@mapIdLabel␟df25418cac1c9528713ba16dc8d5e1f497e1e0d3␟7638966832226302469: Map URL: `,[["load_state",""],n,l,m,["btn","","icon","","mat-dialog-close","",4,"ngIf"],["class","max-h-[65vh] overflow-y-auto overflow-x-hidden p-4",4,"ngIf","ngIfElse"],["class","p-2 flex justify-end border-t border-base-200",4,"ngIf"],["btn","","icon","","mat-dialog-close",""],[1,"max-h-[65vh]","overflow-y-auto","overflow-x-hidden","p-4"],["system","","class","flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]",3,"formGroup",4,"ngIf"],["system","",1,"flex","flex-col","w-[36rem]","max-w-[calc(100vw-4rem)]",3,"formGroup"],["class","flex flex-col",4,"ngIf"],["class","flex flex-col py-2",4,"ngIf"],[1,"flex","flex-col"],["for","zone"],["appearance","outline"],["formControlName","parent_id","placeholder","Select Building"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["for","display-name"],["matInput","","name","display-name","placeholder",o,"formControlName","display_name"],["for","map-id"],["matInput","","name","map-id","placeholder",s,"formControlName","map_id"],[1,"flex","flex-col","py-2"],["name","parking","formControlName","parking"],[1,"p-2","flex","justify-end","border-t","border-base-200"],["btn","",1,"w-32",3,"click"],[1,"flex","flex-col","items-center","justify-center","w-64","h-64"],["diameter","32"],[1,"mt-4"]]},template:function(o,l){if(1&o&&(e.j41(0,"header")(1,"h2"),e.EFF(2),e.k0s(),e.DNE(3,O,3,0,"button",4),e.k0s(),e.DNE(4,w,2,1,"main",5)(5,B,3,0,"footer",6)(6,U,4,0,"ng-template",null,0,e.C5r)),2&o){const s=e.sdS(7);e.R7$(2),e.SpI("",l.form.value.id?"Edit":"Add"," Level"),e.R7$(),e.Y8G("ngIf",!l.loading),e.R7$(),e.Y8G("ngIf",!l.loading)("ngIfElse",s),e.R7$(),e.Y8G("ngIf",!l.loading)}},dependencies:[f.Sq,f.bT,r.qT,r.me,r.BC,r.cb,R.rl,R.TL,P.fg,G.VO,N.wT,F.So,I.LG,L.tx,r.j4,r.JD,y.R,f.Jj]})}return t})(),T=(()=>{class t{constructor(n,o){this._org=n,this._dialog=o,this._options=new M.t({}),this._change=new M.t(0),this.options=this._options.asObservable(),this.level_list=this._org.level_list,this.filtered_levels=(0,c.zV)([this.level_list,this._options]).pipe((0,b.T)(([l,s])=>{s.zone&&(l=l.filter(m=>m.parent_id===s.zone)),s.search&&(l=l.filter(m=>m.name.toLowerCase().includes(s.search.toLowerCase())));for(const m of l){const d=this._org.buildings.find(de=>de.id===m.parent_id);d&&(m.building=d.display_name||d.name)}return l}))}setFilters(n){this._options.next({...this._options.getValue(),...n})}setSearchString(n){this._options.next({...this._options.getValue(),search:n})}editLevel(n=new p.kMc){this._dialog.open(z,{data:n}).afterClosed().subscribe(l=>{l&&this._org.addZone(l)})}removeLevel(n){var o=this;return(0,C.A)(function*(){const l=yield(0,_.GE)({title:"Remove Building",content:`Are you sure you want to remove the building "${n.name}"?`,icon:{content:"delete_forever"},confirm_text:"Remove"},o._dialog);if("done"!==l.reason)return l.close();l.loading("Removing building..."),yield(0,p.ZhK)(n.id).toPromise(),o._org.removeZone({id:n.id,tags:["level"]}),(0,_.VX)("Successfully removed building."),l.close()})()}static#e=this.\u0275fac=function(o){return new(o||t)(e.KVO(u.yb),e.KVO(L.bZ))};static#t=this.\u0275prov=e.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Y=i(45189),J=i(96843),Z=i(52352),K=i(80640),H=i(88328);const Q=t=>({key:"display_name",name:"Level Name",content:t}),W=()=>({key:"building",name:"Building",size:"16rem"}),q=t=>({key:"parking",name:"Parking",content:t,size:"5rem",sortable:!1}),ee=t=>({key:"actions",name:" ",content:t,size:"6rem",sortable:!1}),te=(t,a,n,o)=>[t,a,n,o];function ne(t,a){if(1&t){const n=e.RV6();e.j41(0,"button",6),e.bIt("click",function(){const l=e.eBV(n).row,s=e.XpG();return e.Njj(s.copyToClipboard(l.id))}),e.j41(1,"div",7),e.EFF(2),e.k0s(),e.j41(3,"div",8),e.EFF(4),e.k0s()()}if(2&t){const n=a.row,o=a.data;e.R7$(2),e.JRh(o),e.R7$(2),e.SpI(" ",n.id," ")}}function oe(t,a){1&t&&(e.j41(0,"div",10)(1,"app-icon"),e.EFF(2,"done"),e.k0s()())}function le(t,a){if(1&t&&e.DNE(0,oe,3,0,"div",9),2&t){const n=a.row;e.Y8G("ngIf",null==n.tags?null:n.tags.includes("parking"))}}function ie(t,a){if(1&t){const n=e.RV6();e.j41(0,"div",11)(1,"button",12),e.bIt("click",function(){const l=e.eBV(n).row,s=e.XpG();return e.Njj(s.editLevel(l))}),e.j41(2,"app-icon"),e.EFF(3,"edit"),e.k0s()(),e.j41(4,"button",13),e.bIt("click",function(){const l=e.eBV(n).row,s=e.XpG();return e.Njj(s.removeLevel(l))}),e.j41(5,"app-icon"),e.EFF(6,"delete"),e.k0s()()()}}let ae=(()=>{class t{constructor(n,o){this._manager=n,this._clipboard=o,this.levels=this._manager.filtered_levels,this.editLevel=l=>this._manager.editLevel(l),this.removeLevel=l=>this._manager.removeLevel(l),this.copyToClipboard=l=>{this._clipboard.copy(l)&&(0,_.VX)("Level ID copied to clipboard.")}}static#e=this.\u0275fac=function(o){return new(o||t)(e.rXU(T),e.rXU(Z.B0))};static#t=this.\u0275cmp=e.VBU({type:t,selectors:[["level-list"]],decls:9,vars:15,consts:[["name_template",""],["parking_template",""],["action_template",""],[1,"absolute","inset-0","overflow-auto","px-8"],["empty_message","No levels",1,"min-w-[48rem]","block","text-sm",3,"data","columns","sortable"],[1,"w-full","h-20"],[1,"px-4","py-2","text-left","leading-tight",3,"click"],[1,""],[1,"text-[0.625rem]","opacity-30","font-mono"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto",4,"ngIf"],[1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-success","text-success-content","mx-auto"],[1,"w-full","flex","justify-end","space-x-2","p-2"],["icon","","matRipple","","matTooltip","Edit Level",3,"click"],["icon","","matRipple","","matTooltip","Remove Level",1,"text-error",3,"click"]],template:function(o,l){if(1&o&&(e.j41(0,"div",3),e.nrm(1,"simple-table",4)(2,"div",5),e.k0s(),e.DNE(3,ne,5,2,"ng-template",null,0,e.C5r)(5,le,1,1,"ng-template",null,1,e.C5r)(7,ie,7,0,"ng-template",null,2,e.C5r)),2&o){const s=e.sdS(4),m=e.sdS(6),d=e.sdS(8);e.R7$(),e.Y8G("data",l.levels)("columns",e.ziG(10,te,e.eq3(3,Q,s),e.lJ4(5,W),e.eq3(6,q,m),e.eq3(8,ee,d)))("sortable",!0)}},dependencies:[f.bT,K.oV,N.r6,y.R,H.O]})}return t})();const se=["app-level-manager",""];let S=(()=>{class t{constructor(n){this._manager=n,this.newLevel=()=>this._manager.editLevel()}static#e=this.\u0275fac=function(o){return new(o||t)(e.rXU(T))};static#t=this.\u0275cmp=e.VBU({type:t,selectors:[["","app-level-manager",""]],attrs:se,decls:10,vars:0,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"flex","items-center","justify-between","mb-2","px-8","pt-4","pb-8"],[1,"text-2xl","font-medium"],["btn","","matRipple","",1,"w-40",3,"click"],[1,"block","w-full","relative","flex-1","h-1/2"]],template:function(o,l){1&o&&(e.nrm(0,"app-topbar"),e.j41(1,"div",0),e.nrm(2,"app-sidebar"),e.j41(3,"main",1)(4,"header",2)(5,"h2",3),e.EFF(6,"Level Management"),e.k0s(),e.j41(7,"button",4),e.bIt("click",function(){return l.newLevel()}),e.EFF(8," Add Level "),e.k0s()(),e.nrm(9,"level-list",5),e.k0s()())},dependencies:[Y.S,J.c,N.r6,ae],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n\n/*# sourceMappingURL=level-manager.component.ts-angular-inline--185.css.map*/"]})}return t})();var re=i(12772);const ce=[{path:"",component:S},{path:"new",component:S}];let me=(()=>{class t{static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=e.$C({type:t});static#n=this.\u0275inj=e.G2t({imports:[f.MD,r.YN,E.r,h.lx,v.kR,re.YN,x.iI.forChild(ce)]})}return t})()},68390:(A,g,i)=>{i.d(g,{g8:()=>h,kR:()=>f.k,Gp:()=>v.Gp,KJ:()=>v.KJ,N8:()=>p.N8,SZ:()=>p.SZ,is:()=>u.is});var f=i(73850),E=(i(11543),i(44621),i(99908));class h{constructor(c={}){this.type=c.type||c.location||"other",this.position=c.position||c.map_id||c.asset_id||{x:c.x/c.map_width||0,y:c.y/c.map_height||0},this.variance=c.variance||0,this.last_seen=c.last_seen||(0,E._)(new Date),this.level=c.level,this.building=c.building,this.at_location=!!c.at_location,this.coordinates_from=c.coordinates_from||"top-left"}}var v=i(93693),u=(i(24129),i(86039)),p=i(2372)}}]);
//# sourceMappingURL=apps_concierge_src_app_level-manager_level-manager_module_ts.js.map