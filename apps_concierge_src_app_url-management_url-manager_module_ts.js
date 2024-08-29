"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_url-management_url-manager_module_ts"],{39552:(U,u,o)=>{o.r(u),o.d(u,{UrlManagerModule:()=>dt});var _=o(60316),l=o(34456),F=o(26842),v=o(40363),E=o(22168),g=o(68390),d=o(89204),S=o(12185),p=o(90521),C=o(42175),i=o(71963),b=o(7841),A=o(35443),h=o(12587),m=o(77375),t=o(7404),P=o(24950),G=o(87984),I=o(97024),$=o(41134),y=o(81772),T=o(69434);function O(n,c){1&n&&(t.j41(0,"button",7)(1,"app-icon"),t.EFF(2,"close"),t.k0s()())}function j(n,c){1&n&&(t.j41(0,"div",13)(1,"label",14),t.PLo(2,1),t.nrm(3,"span"),t.YFu(),t.k0s(),t.j41(4,"mat-form-field",15),t.nrm(5,"input",16),t.k0s()())}function D(n,c){1&n&&(t.j41(0,"div",17)(1,"label",18),t.pXf(2,2),t.k0s(),t.nrm(3,"rich-text-input",19),t.k0s())}function k(n,c){1&n&&(t.j41(0,"div",13)(1,"label",20),t.PLo(2,3),t.nrm(3,"span"),t.YFu(),t.k0s(),t.j41(4,"mat-form-field",15),t.nrm(5,"input",21),t.k0s()())}function w(n,c){1&n&&(t.j41(0,"div",17)(1,"mat-checkbox",22),t.EFF(2," Enabled "),t.k0s()())}function X(n,c){if(1&n&&(t.j41(0,"form",10),t.DNE(1,j,6,0,"div",11)(2,D,4,0,"div",12)(3,k,6,0,"div",11)(4,w,3,0,"div",12),t.k0s()),2&n){const e=t.XpG(2);t.Y8G("formGroup",e.form),t.R7$(),t.Y8G("ngIf",e.form.controls.name),t.R7$(),t.Y8G("ngIf",e.form.controls.description),t.R7$(),t.Y8G("ngIf",e.form.controls.uri),t.R7$(),t.Y8G("ngIf",e.form.controls.enabled)}}function V(n,c){if(1&n&&(t.j41(0,"main",8),t.DNE(1,X,5,5,"form",9),t.k0s()),2&n){const e=t.XpG();t.R7$(),t.Y8G("ngIf",e.form)}}function Y(n,c){if(1&n){const e=t.RV6();t.j41(0,"footer",23)(1,"button",24),t.bIt("click",function(){t.eBV(e);const r=t.XpG();return t.Njj(r.save())}),t.EFF(2,"Save"),t.k0s()()}}function B(n,c){1&n&&(t.j41(0,"div",25),t.nrm(1,"mat-spinner",26),t.j41(2,"p",27),t.EFF(3,"Saving Short URL..."),t.k0s()())}let J=(()=>{class n extends m.Tv{constructor(e,a){super(),this._data=e,this._dialog_ref=a,this.loading=!1,this.form=new l.gE({id:new l.MJ(this._data?.id||""),name:new l.MJ(this._data?.name||"",[l.k0.required]),description:new l.MJ(this._data?.description||"",[]),uri:new l.MJ(this._data?.uri||"",[l.k0.required]),enabled:new l.MJ(this._data?.enabled??!0,[])})}ngOnInit(){return(0,d.A)(function*(){})()}save(){var e=this;return(0,d.A)(function*(){if(!e.form.valid)return(0,m.UG)(`Some form fields are invalid. [${(0,m.F7)(e.form).join(", ")}]`);const a=e.form.getRawValue();e.loading=!0;const r=yield(0,m.fE)(a).toPromise().catch(s=>(0,m.UG)(`Error saving Short URL: ${s.message}`));r.id&&e._dialog_ref.close(r),e.loading=!1})()}static#t=this.\u0275fac=function(a){return new(a||n)(t.rXU(h.Vh),t.rXU(h.CP))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["short-url-modal"]],features:[t.Vt3],decls:8,vars:5,consts:()=>{let e,a,r,s,f;return e=$localize`:@@namePlaceholder␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`,a=$localize`:@@nameLabel␟5813c0ce49afffe90191cb912c58fa68674457d8␟1912970594501107766: Name${"\ufffd#3\ufffd"}:START_TAG_SPAN:*${"\ufffd/#3\ufffd"}:CLOSE_TAG_SPAN:: `,r=$localize`:@@nameLabel␟9965b5a3b51c515676f9a276e6a893e2a1732ca3␟8750987738498515809: Description: `,s=$localize`:@@uriPlaceholder␟6afb9c1cbd2b73b7a916ca72a1827142d917dc51␟4044274328469675696:URI`,f=$localize`:@@nameLabel␟376ac142eacbbec6739bf8511dbcf6c843326916␟7187203761692841608: URI${"\ufffd#3\ufffd"}:START_TAG_SPAN:*${"\ufffd/#3\ufffd"}:CLOSE_TAG_SPAN:: `,[["load_state",""],a,r,f,["btn","","icon","","mat-dialog-close","",4,"ngIf"],["class","max-h-[65vh] overflow-y-auto overflow-x-hidden p-4",4,"ngIf","ngIfElse"],["class","p-2 flex justify-end border-t border-base-200",4,"ngIf"],["btn","","icon","","mat-dialog-close",""],[1,"max-h-[65vh]","overflow-y-auto","overflow-x-hidden","p-4"],["system","","class","flex flex-col w-[28rem] max-w-[calc(100vw-4rem)]",3,"formGroup",4,"ngIf"],["system","",1,"flex","flex-col","w-[28rem]","max-w-[calc(100vw-4rem)]",3,"formGroup"],["class","flex flex-col",4,"ngIf"],["class","flex flex-col pb-4",4,"ngIf"],[1,"flex","flex-col"],["for","name"],["appearance","outline"],["matInput","","name","name","placeholder",e,"formControlName","name"],[1,"flex","flex-col","pb-4"],["for","description"],["name","description","formControlName","description"],["for","uri"],["matInput","","name","uri","placeholder",s,"formControlName","uri"],["formControlName","enabled"],[1,"p-2","flex","justify-end","border-t","border-base-200"],["btn","",1,"w-32",3,"click"],[1,"flex","flex-col","items-center","justify-center","w-64","h-64"],["diameter","32"],[1,"mt-4"]]},template:function(a,r){if(1&a&&(t.j41(0,"header")(1,"h2"),t.EFF(2),t.k0s(),t.DNE(3,O,3,0,"button",4),t.k0s(),t.DNE(4,V,2,1,"main",5)(5,Y,3,0,"footer",6)(6,B,4,0,"ng-template",null,0,t.C5r)),2&a){const s=t.sdS(7);t.R7$(2),t.SpI("",r.form.value.id?"Edit":"Add"," Short URL"),t.R7$(),t.Y8G("ngIf",!r.loading),t.R7$(),t.Y8G("ngIf",!r.loading)("ngIfElse",s),t.R7$(),t.Y8G("ngIf",!r.loading)}},dependencies:[_.bT,l.qT,l.me,l.BC,l.cb,P.rl,G.fg,I.So,$.LG,h.tx,l.j4,l.JD,y.d,T.R]})}return n})(),N=(()=>{class n{constructor(e,a){this._org=e,this._dialog=a,this._options=new p.t({}),this._change=new p.t(0),this.options=this._options.asObservable(),this._url_list=(0,C.zV)([this._org.active_building,this._change]).pipe((0,i.n)(([r])=>(0,m.nR)({})),(0,b.t)(1)),this.filtered_urls=(0,C.zV)([this._url_list,this._options]).pipe((0,A.T)(([r,s])=>r.filter(f=>!s.search||f.name.toLowerCase().includes(s.search.toLowerCase()))))}setFilters(e){this._options.next({...this._options.getValue(),...e})}setSearchString(e){this._options.next({...this._options.getValue(),search:e})}editURL(e){this._dialog.open(J,{data:e}).afterClosed().subscribe(()=>this._change.next(Date.now()))}removeURL(e){var a=this;return(0,d.A)(function*(){const r=yield(0,m.GE)({title:"Remove Short URL",content:`Are you sure you want to remove the Short URL "${e.name}"?`,icon:{content:"delete_forever"},confirm_text:"Remove"},a._dialog);if("done"!==r.reason)return r.close();r.loading("Removing Short URL..."),yield(0,m.bD)(e.id).toPromise().catch(s=>{throw(0,m.UG)(`Error removing Short URL: ${s.message}`),r.close(),s}),(0,m.VX)("Successfully removed Short URL."),r.close(),a._change.next(Date.now())})()}static#t=this.\u0275fac=function(a){return new(a||n)(t.KVO(S.yb),t.KVO(h.bZ))};static#e=this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var z=o(45189),K=o(96843),x=o(85060),M=o(31034),Q=o(22238),Z=o(88328),H=o(74846),W=o(26781);const q=()=>({key:"name",name:"Name"}),tt=n=>({key:"uri",name:"URI",content:n}),et=()=>({key:"user_name",name:"User Name"}),nt=()=>({key:"description",name:"Description"}),ot=n=>({key:"actions",name:" ",content:n,size:"7rem",sortable:!1}),at=(n,c,e,a,r)=>[n,c,e,a,r];function rt(n,c){if(1&n&&(t.j41(0,"a",7),t.EFF(1),t.k0s()),2&n){const e=c.data;t.Y8G("href",e,t.B4B),t.R7$(),t.SpI(" ",e," ")}}function st(n,c){if(1&n){const e=t.RV6();t.j41(0,"div",15)(1,"div",16)(2,"a",17),t.nI1(3,"safe"),t.nrm(4,"img",18),t.k0s(),t.j41(5,"div",19),t.EFF(6),t.k0s()(),t.j41(7,"button",20),t.bIt("click",function(){t.eBV(e);const r=t.XpG(2);return t.Njj(r.print())}),t.EFF(8," Print QR Code "),t.k0s()()}if(2&n){const e=t.XpG().row;t.R7$(2),t.Y8G("href",t.i5U(3,3,e.uri,"url"),t.B4B),t.R7$(2),t.Y8G("src",e.qr_code,t.B4B),t.R7$(2),t.SpI(" ",e.name||e.id," ")}}function it(n,c){if(1&n){const e=t.RV6();t.j41(0,"div",8)(1,"button",9),t.bIt("click",function(){const r=t.eBV(e).row,s=t.XpG();return t.Njj(s.loadQrCode(r))}),t.j41(2,"app-icon"),t.EFF(3,"qr_code"),t.k0s()(),t.DNE(4,st,9,6,"ng-template",null,2,t.C5r),t.j41(6,"button",10)(7,"app-icon"),t.EFF(8,"more_vert"),t.k0s()(),t.j41(9,"mat-menu",null,3)(11,"button",11),t.bIt("click",function(){const r=t.eBV(e).row,s=t.XpG();return t.Njj(s.edit(r))}),t.j41(12,"div",12)(13,"app-icon"),t.EFF(14,"edit"),t.k0s(),t.j41(15,"span"),t.EFF(16,"Edit Short URL"),t.k0s()()(),t.j41(17,"button",11),t.bIt("click",function(){const r=t.eBV(e).row,s=t.XpG();return t.Njj(s.remove(r))}),t.j41(18,"div",13)(19,"app-icon",14),t.EFF(20,"delete"),t.k0s(),t.j41(21,"span"),t.EFF(22,"Delete Short URL"),t.k0s()()()()()}if(2&n){const e=t.sdS(5),a=t.sdS(10);t.R7$(),t.Y8G("content",e),t.R7$(5),t.Y8G("matMenuTriggerFor",a)}}let lt=(()=>{class n{get kiosk_url(){const e=this._settings.get("app.kiosk_url_path")||"/map-kiosk";return`${window.location.origin}${e}`}loadQrCode(e){return(0,d.A)(function*(){e.qr_code=yield(0,m.EK)(e.id)})()}constructor(e,a){this._manager=e,this._settings=a,this.features=this._manager.filtered_urls,this.edit=r=>this._manager.editURL(r),this.remove=r=>this._manager.removeURL(r)}static#t=this.\u0275fac=function(a){return new(a||n)(t.rXU(N),t.rXU(m.h$))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["short-url-list"]],decls:7,vars:16,consts:[["url_template",""],["action_template",""],["qr_menu",""],["menu","matMenu"],[1,"absolute","inset-0","overflow-auto","px-8"],["empty_message","No Points of Interest found.",1,"min-w-[64rem]","block","text-sm",3,"data","columns","sortable"],[1,"w-full","h-12"],["link","",1,"p-4","truncate","max-w-[32rem]",3,"href"],[1,"w-full","flex","justify-end","space-x-2","px-4","py-2","mx-auto"],["icon","","matRipple","","customTooltip","",3,"click","content"],["btn","","icon","","matRipple","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],[1,"flex","items-center","space-x-2"],[1,"flex","items-center","space-x-2","text-red-500"],[1,"text-error"],[1,"bg-base-100","py-2","shadow","rounded"],["printable","",1,""],["target","_blank","ref","noopener noreferrer",1,"block","p-2","mx-4","my-2","rounded-lg","border","border-base-200","bg-base-100",3,"href"],[1,"w-48","mx-auto",3,"src"],[1,"w-[calc(100%-2rem)]","text-center","mt-2","font-mono","text-sm","bg-base-200","rounded","p-2","mx-4"],["btn","","matRipple","",1,"w-[calc(100%-2rem)]","mx-4","my-2",3,"click"]],template:function(a,r){if(1&a&&(t.j41(0,"div",4),t.nrm(1,"simple-table",5)(2,"div",6),t.k0s(),t.DNE(3,rt,2,2,"ng-template",null,0,t.C5r)(5,it,23,2,"ng-template",null,1,t.C5r)),2&a){const s=t.sdS(4),f=t.sdS(6);t.R7$(),t.Y8G("data",r.features)("columns",t.s1E(10,at,t.lJ4(3,q),t.eq3(4,tt,s),t.lJ4(6,et),t.lJ4(7,nt),t.eq3(8,ot,f)))("sortable",!0)}},dependencies:[M.kk,M.fb,M.Cp,x.r6,T.R,Q.I,Z.O,H.L,W.m]})}return n})();const ct=["app-short-url-manager",""];let L=(()=>{class n{constructor(e){this._state=e,this.new=()=>this._state.editURL()}static#t=this.\u0275fac=function(a){return new(a||n)(t.rXU(N))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["","app-short-url-manager",""]],attrs:ct,decls:10,vars:0,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"flex","items-center","justify-between","mb-2","px-8","py-4"],[1,"text-2xl","font-medium"],["btn","","matRipple","",3,"click"],[1,"block","w-full","relative","flex-1","h-1/2"]],template:function(a,r){1&a&&(t.nrm(0,"app-topbar"),t.j41(1,"div",0),t.nrm(2,"app-sidebar"),t.j41(3,"main",1)(4,"header",2)(5,"h2",3),t.EFF(6,"Short URL Management"),t.k0s(),t.j41(7,"button",4),t.bIt("click",function(){return r.new()}),t.EFF(8,"Add Short URL"),t.k0s()(),t.nrm(9,"short-url-list",5),t.k0s()())},dependencies:[z.S,K.c,x.r6,lt],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n\n/*# sourceMappingURL=url-manager.component.ts-angular-inline--189.css.map*/"]})}return n})();var mt=o(12772);const ft=[{path:"",component:L},{path:"new",component:L}];let dt=(()=>{class n{static#t=this.\u0275fac=function(a){return new(a||n)};static#e=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({imports:[_.MD,l.YN,v.r,E.lx,g.kR,mt.YN,F.iI.forChild(ft)]})}return n})()},68390:(U,u,o)=>{o.d(u,{g8:()=>E,kR:()=>_.k,Gp:()=>g.Gp,KJ:()=>g.KJ,N8:()=>p.N8,SZ:()=>p.SZ,is:()=>S.is});var _=o(73850),v=(o(11543),o(44621),o(99908));class E{constructor(i={}){this.type=i.type||i.location||"other",this.position=i.position||i.map_id||i.asset_id||{x:i.x/i.map_width||0,y:i.y/i.map_height||0},this.variance=i.variance||0,this.last_seen=i.last_seen||(0,v._)(new Date),this.level=i.level,this.building=i.building,this.at_location=!!i.at_location,this.coordinates_from=i.coordinates_from||"top-left"}}var g=o(93693),S=(o(24129),o(86039)),p=o(2372)}}]);
//# sourceMappingURL=apps_concierge_src_app_url-management_url-manager_module_ts.js.map