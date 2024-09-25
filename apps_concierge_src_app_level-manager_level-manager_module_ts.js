"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_level-manager_level-manager_module_ts"],{93125:(F,u,i)=>{i.r(u),i.d(u,{LevelManagerModule:()=>de});var f=i(60316),r=i(34456),y=i(26842),L=i(40363),E=i(22168),v=i(68390),h=i(89204),C=i(12185),p=i(3998),M=i(90521),c=i(42175),A=i(35443),_=i(12587),g=i(77375),e=i(7404),R=i(24950),P=i(87984),G=i(25175),x=i(85060),I=i(97024),j=i(41134),S=i(69434);function $(n,s){1&n&&(e.j41(0,"button",7)(1,"app-icon"),e.EFF(2,"close"),e.k0s()())}function O(n,s){if(1&n&&(e.j41(0,"mat-option",18),e.EFF(1),e.k0s()),2&n){const t=s.$implicit;e.Y8G("value",t.id),e.R7$(),e.SpI(" ",t.display_name||t.name," ")}}function k(n,s){if(1&n&&(e.j41(0,"div",13)(1,"label",14),e.PLo(2,1),e.nrm(3,"span"),e.YFu(),e.k0s(),e.j41(4,"mat-form-field",15)(5,"mat-select",16),e.DNE(6,O,2,2,"mat-option",17),e.nI1(7,"async"),e.k0s(),e.j41(8,"mat-error"),e.EFF(9,"Building is required"),e.k0s()()()),2&n){const t=e.XpG(3);e.R7$(),e.AVh("error",t.form.controls.parent_id.invalid&&t.form.controls.parent_id.touched),e.R7$(5),e.Y8G("ngForOf",e.bMT(7,3,t.building_list))}}function V(n,s){1&n&&(e.j41(0,"div",13)(1,"label",19),e.pXf(2,2),e.k0s(),e.j41(3,"mat-form-field",15),e.nrm(4,"input",20),e.k0s()())}function D(n,s){1&n&&(e.j41(0,"div",13)(1,"label",21),e.pXf(2,3),e.k0s(),e.j41(3,"mat-form-field",15),e.nrm(4,"input",22),e.k0s()())}function X(n,s){1&n&&(e.j41(0,"div",23)(1,"mat-checkbox",24),e.EFF(2," Has Parking Spaces "),e.k0s()())}function w(n,s){if(1&n&&(e.j41(0,"form",10),e.DNE(1,k,10,5,"div",11)(2,V,5,0,"div",11)(3,D,5,0,"div",11)(4,X,3,0,"div",12),e.k0s()),2&n){const t=e.XpG(2);e.Y8G("formGroup",t.form),e.R7$(),e.Y8G("ngIf",t.form.controls.parent_id),e.R7$(),e.Y8G("ngIf",t.form.controls.display_name),e.R7$(),e.Y8G("ngIf",t.form.controls.map_id),e.R7$(),e.Y8G("ngIf",t.form.controls.parking)}}function B(n,s){if(1&n&&(e.j41(0,"main",8),e.DNE(1,w,5,5,"form",9),e.k0s()),2&n){const t=e.XpG();e.R7$(),e.Y8G("ngIf",t.form)}}function z(n,s){if(1&n){const t=e.RV6();e.j41(0,"footer",25)(1,"button",26),e.bIt("click",function(){e.eBV(t);const l=e.XpG();return e.Njj(l.save())}),e.EFF(2,"Save"),e.k0s()()}}function U(n,s){1&n&&(e.j41(0,"div",27),e.nrm(1,"mat-spinner",28),e.j41(2,"p",29),e.EFF(3,"Saving level..."),e.k0s()())}let Y=(()=>{class n{constructor(t,o,l){this._org=t,this._data=o,this._dialog_ref=l,this.loading=!1,this.building_list=this._org.building_list,this.form=new r.gE({id:new r.MJ(this._data?.id||""),display_name:new r.MJ(this._data?.display_name||"",[r.k0.required]),parent_id:new r.MJ(this._data?.parent_id||"",[r.k0.required]),map_id:new r.MJ(this._data?.map_id||"",[r.k0.required]),parking:new r.MJ(this._data?.tags?.includes("parking")||!1)})}save(){var t=this;return(0,h.A)(function*(){if(!t.form.valid)return(0,g.UG)(`Some form fields are invalid. [${(0,g.F7)(t.form).join(", ")}]`);t.loading=!0;const o=t.form.getRawValue();o.tags=o.parking?["level","parking"]:["level"];const l=yield(o.id?(0,p.G5B)(o.id,{...o,name:`LEVEL ${(0,p.kup)().description} ${o.display_name}`}):(0,p.aP8)({...o,name:`LEVEL ${(0,p.kup)().description} ${o.display_name}`})).toPromise().catch();l.id&&t._dialog_ref.close(l),t.loading=!1})()}static#e=this.\u0275fac=function(o){return new(o||n)(e.rXU(C.yb),e.rXU(_.Vh),e.rXU(_.CP))};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["level-modal"]],decls:8,vars:5,consts:()=>{let t,o,l,a,m;return t=$localize`:@@zoneLabel␟5e09041a10f5eb39aadfaa1a8dd77f4dc8d77314␟711878476466678637: Building${"\ufffd#3\ufffd"}:START_TAG_SPAN:*${"\ufffd/#3\ufffd"}:CLOSE_TAG_SPAN:: `,o=$localize`:@@displayNamePlaceholder␟e438ba78cbafdb5bcbce0820bfaad995a504f222␟3013055597615607317:Display Name`,l=$localize`:@@displayNameLabel␟8d766661ed5e178519720ec8e959d2a737f600a6␟1377207093952578744: Display Name: `,a=$localize`:@@mapIdPlaceholder␟f78f3836515ccc83a36f25d9174f585019d54341␟1505388289077394171:URL of the Map SVG file`,m=$localize`:@@mapIdLabel␟df25418cac1c9528713ba16dc8d5e1f497e1e0d3␟7638966832226302469: Map URL: `,[["load_state",""],t,l,m,["btn","","icon","","mat-dialog-close","",4,"ngIf"],["class","max-h-[65vh] overflow-y-auto overflow-x-hidden p-4",4,"ngIf","ngIfElse"],["class","p-2 flex justify-end border-t border-base-200",4,"ngIf"],["btn","","icon","","mat-dialog-close",""],[1,"max-h-[65vh]","overflow-y-auto","overflow-x-hidden","p-4"],["system","","class","flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]",3,"formGroup",4,"ngIf"],["system","",1,"flex","flex-col","w-[36rem]","max-w-[calc(100vw-4rem)]",3,"formGroup"],["class","flex flex-col",4,"ngIf"],["class","flex flex-col py-2",4,"ngIf"],[1,"flex","flex-col"],["for","zone"],["appearance","outline"],["formControlName","parent_id","placeholder","Select Building"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["for","display-name"],["matInput","","name","display-name","placeholder",o,"formControlName","display_name"],["for","map-id"],["matInput","","name","map-id","placeholder",a,"formControlName","map_id"],[1,"flex","flex-col","py-2"],["name","parking","formControlName","parking"],[1,"p-2","flex","justify-end","border-t","border-base-200"],["btn","",1,"w-32",3,"click"],[1,"flex","flex-col","items-center","justify-center","w-64","h-64"],["diameter","32"],[1,"mt-4"]]},template:function(o,l){if(1&o&&(e.j41(0,"header")(1,"h2"),e.EFF(2),e.k0s(),e.DNE(3,$,3,0,"button",4),e.k0s(),e.DNE(4,B,2,1,"main",5)(5,z,3,0,"footer",6)(6,U,4,0,"ng-template",null,0,e.C5r)),2&o){const a=e.sdS(7);e.R7$(2),e.SpI("",l.form.value.id?"Edit":"Add"," Level"),e.R7$(),e.Y8G("ngIf",!l.loading),e.R7$(),e.Y8G("ngIf",!l.loading)("ngIfElse",a),e.R7$(),e.Y8G("ngIf",!l.loading)}},dependencies:[f.Sq,f.bT,r.qT,r.me,r.BC,r.cb,R.rl,R.TL,P.fg,G.VO,x.wT,I.So,j.LG,_.tx,r.j4,r.JD,S.R,f.Jj]})}return n})(),T=(()=>{class n{constructor(t,o){this._org=t,this._dialog=o,this._options=new M.t({}),this._change=new M.t(0),this.options=this._options.asObservable(),this.level_list=this._org.level_list,this.filtered_levels=(0,c.zV)([this.level_list,this._options]).pipe((0,A.T)(([l,a])=>{a.zone&&(l=l.filter(m=>m.parent_id===a.zone)),a.search&&(l=l.filter(m=>m.name.toLowerCase().includes(a.search.toLowerCase())));for(const m of l){const d=this._org.buildings.find(pe=>pe.id===m.parent_id);d&&(m.building=d.display_name||d.name)}return l}))}setFilters(t){this._options.next({...this._options.getValue(),...t})}setSearchString(t){this._options.next({...this._options.getValue(),search:t})}editLevel(t=new p.kMc){this._dialog.open(Y,{data:t}).afterClosed().subscribe(l=>{l&&this._org.addZone(l)})}removeLevel(t){var o=this;return(0,h.A)(function*(){const l=yield(0,g.GE)({title:"Remove Building",content:`Are you sure you want to remove the building "${t.name}"?`,icon:{content:"delete_forever"},confirm_text:"Remove"},o._dialog);if("done"!==l.reason)return l.close();l.loading("Removing building..."),yield(0,p.ZhK)(t.id).toPromise(),o._org.removeZone({id:t.id,tags:["level"]}),(0,g.VX)("Successfully removed building."),l.close()})()}static#e=this.\u0275fac=function(o){return new(o||n)(e.KVO(C.yb),e.KVO(_.bZ))};static#t=this.\u0275prov=e.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var J=i(45189),Z=i(96843),K=i(82953),H=i(52352),N=i(31034),Q=i(88328);const W=n=>({key:"display_name",name:"Level Name",content:n}),q=()=>({key:"building",name:"Building",size:"16rem"}),ee=n=>({key:"parking",name:"Parking",content:n,size:"5rem",sortable:!1}),te=n=>({key:"actions",name:" ",content:n,size:"3.75rem",sortable:!1}),ne=(n,s,t,o)=>[n,s,t,o];function oe(n,s){if(1&n){const t=e.RV6();e.j41(0,"button",7),e.bIt("click",function(){const l=e.eBV(t).row,a=e.XpG();return e.Njj(a.copyToClipboard(l.id))}),e.j41(1,"div",8),e.EFF(2),e.k0s(),e.j41(3,"div",9),e.EFF(4),e.k0s()()}if(2&n){const t=s.row,o=s.data;e.R7$(2),e.JRh(o),e.R7$(2),e.SpI(" ",t.id," ")}}function le(n,s){1&n&&(e.j41(0,"div",11)(1,"app-icon"),e.EFF(2,"done"),e.k0s()())}function ie(n,s){if(1&n&&e.DNE(0,le,3,0,"div",10),2&n){const t=s.row;e.Y8G("ngIf",null==t.tags?null:t.tags.includes("parking"))}}function ae(n,s){if(1&n){const t=e.RV6();e.j41(0,"div",12)(1,"button",13)(2,"app-icon"),e.EFF(3,"more_vert"),e.k0s()(),e.j41(4,"mat-menu",null,3)(6,"button",14),e.bIt("click",function(){const l=e.eBV(t).row,a=e.XpG();return e.Njj(a.editLevel(l))}),e.j41(7,"div",15)(8,"app-icon",16),e.EFF(9,"edit"),e.k0s(),e.j41(10,"span"),e.EFF(11,"Edit Level"),e.k0s()()(),e.j41(12,"button",14),e.bIt("click",function(){const l=e.eBV(t).row,a=e.XpG();return e.Njj(a.editBookingPanelSettings(l))}),e.j41(13,"div",15)(14,"app-icon",17),e.EFF(15," top_panel_open "),e.k0s(),e.j41(16,"span"),e.EFF(17,"Edit Booking Panel Settings"),e.k0s()()(),e.j41(18,"button",14),e.bIt("click",function(){const l=e.eBV(t).row,a=e.XpG();return e.Njj(a.removeLevel(l))}),e.j41(19,"div",15)(20,"app-icon",18),e.EFF(21," delete "),e.k0s(),e.j41(22,"span"),e.EFF(23,"Remove Level"),e.k0s()()()()()}if(2&n){const t=e.sdS(5);e.R7$(),e.Y8G("matMenuTriggerFor",t)}}let se=(()=>{class n{constructor(t,o,l){this._manager=t,this._clipboard=o,this._dialog=l,this.levels=this._manager.filtered_levels,this.editLevel=a=>this._manager.editLevel(a),this.removeLevel=a=>this._manager.removeLevel(a),this.copyToClipboard=a=>{this._clipboard.copy(a)&&(0,g.VX)("Level ID copied to clipboard.")}}editBookingPanelSettings(t){this._dialog.open(K.z,{data:{zone:t}})}static#e=this.\u0275fac=function(o){return new(o||n)(e.rXU(T),e.rXU(H.B0),e.rXU(_.bZ))};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["level-list"]],decls:9,vars:15,consts:[["name_template",""],["parking_template",""],["action_template",""],["menu","matMenu"],[1,"absolute","inset-0","overflow-auto","px-8"],["empty_message","No levels",1,"min-w-[48rem]","block","text-sm",3,"data","columns","sortable"],[1,"w-full","h-20"],[1,"px-4","py-2","text-left","leading-tight",3,"click"],[1,""],[1,"text-[0.625rem]","opacity-30","font-mono"],["class","rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto",4,"ngIf"],[1,"rounded","h-8","w-8","flex","items-center","justify-center","text-2xl","bg-success","text-success-content","mx-auto"],[1,"w-full","flex","justify-end","space-x-2","p-2"],["icon","","matRipple","",1,"h-12","w-12","rounded",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],[1,"flex","items-center","space-x-2"],[1,"text-2xl"],["className","material-symbols-rounded",1,"text-2xl"],[1,"text-2xl","text-error"]],template:function(o,l){if(1&o&&(e.j41(0,"div",4),e.nrm(1,"simple-table",5)(2,"div",6),e.k0s(),e.DNE(3,oe,5,2,"ng-template",null,0,e.C5r)(5,ie,1,1,"ng-template",null,1,e.C5r)(7,ae,24,1,"ng-template",null,2,e.C5r)),2&o){const a=e.sdS(4),m=e.sdS(6),d=e.sdS(8);e.R7$(),e.Y8G("data",l.levels)("columns",e.ziG(10,ne,e.eq3(3,W,a),e.lJ4(5,q),e.eq3(6,ee,m),e.eq3(8,te,d)))("sortable",!0)}},dependencies:[f.bT,N.kk,N.fb,N.Cp,x.r6,S.R,Q.O]})}return n})();const re=["app-level-manager",""];let b=(()=>{class n{constructor(t){this._manager=t,this.newLevel=()=>this._manager.editLevel()}static#e=this.\u0275fac=function(o){return new(o||n)(e.rXU(T))};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["","app-level-manager",""]],attrs:re,decls:10,vars:0,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"flex","items-center","justify-between","mb-2","px-8","pt-4","pb-8"],[1,"text-2xl","font-medium"],["btn","","matRipple","",1,"w-40",3,"click"],[1,"block","w-full","relative","flex-1","h-1/2"]],template:function(o,l){1&o&&(e.nrm(0,"app-topbar"),e.j41(1,"div",0),e.nrm(2,"app-sidebar"),e.j41(3,"main",1)(4,"header",2)(5,"h2",3),e.EFF(6,"Level Management"),e.k0s(),e.j41(7,"button",4),e.bIt("click",function(){return l.newLevel()}),e.EFF(8," Add Level "),e.k0s()(),e.nrm(9,"level-list",5),e.k0s()())},dependencies:[J.S,Z.c,x.r6,se],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n\n/*# sourceMappingURL=level-manager.component.ts-angular-inline--189.css.map*/"]})}return n})();var ce=i(12772);const me=[{path:"",component:b},{path:"new",component:b}];let de=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.$C({type:n});static#n=this.\u0275inj=e.G2t({imports:[f.MD,r.YN,L.r,E.lx,v.kR,ce.YN,y.iI.forChild(me)]})}return n})()},68390:(F,u,i)=>{i.d(u,{g8:()=>E,kR:()=>f.k,Gp:()=>v.Gp,KJ:()=>v.KJ,N8:()=>p.N8,SZ:()=>p.SZ});var f=i(73850),L=(i(11543),i(44621),i(99908));class E{constructor(c={}){this.type=c.type||c.location||"other",this.position=c.position||c.map_id||c.asset_id||{x:c.x/c.map_width||0,y:c.y/c.map_height||0},this.variance=c.variance||0,this.last_seen=c.last_seen||(0,L._)(new Date),this.level=c.level,this.building=c.building,this.at_location=!!c.at_location,this.coordinates_from=c.coordinates_from||"top-left"}}var v=i(93693),p=(i(24129),i(86039),i(2372))}}]);
//# sourceMappingURL=apps_concierge_src_app_level-manager_level-manager_module_ts.js.map