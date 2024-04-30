"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([[581],{5246:(Te,M,s)=>{s.r(M),s.d(M,{BuildingManagerModule:()=>xe});var u=s(6814),d=s(6223),E=s(6980),S=s(7910),U=s(7049),O=s(5157),v=s(5861),c=s(4592),N=s(3121),g=s(7247),b=s(5125),w=s(2994),x=s(6124),_=s(9347),e=s(9212),C=s(4888),T=s(4170),G=s(8582),y=s(8525),f=s(3680),I=s(5940),B=s(4630);function P(n,r){if(1&n&&(e.TgZ(0,"mat-option",22),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.display_name||t.name," ")}}function J(n,r){if(1&n&&(e.TgZ(0,"div",5)(1,"label",19),e.SDv(2,20),e.qZA(),e.TgZ(3,"mat-form-field",8)(4,"mat-select",21)(5,"mat-option",22),e._uU(6,"None"),e.qZA(),e.YNc(7,P,2,2,"mat-option",14),e.ALo(8,"async"),e.qZA()()()),2&n){const t=e.oxw(3);e.xp6(5),e.Q6J("value",t.default_parent),e.xp6(2),e.Q6J("ngForOf",e.lcZ(8,2,t.region_list))}}function F(n,r){if(1&n&&(e.TgZ(0,"mat-option",22),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.Q6J("value",t),e.xp6(),e.Oqu(t)}}function z(n,r){1&n&&(e.TgZ(0,"mat-option",23),e._uU(1," No matching timezones "),e.qZA()),2&n&&e.Q6J("disabled",!0)}function D(n,r){if(1&n&&(e.TgZ(0,"form",3),e.YNc(1,J,9,4,"div",4),e.ALo(2,"async"),e.TgZ(3,"div",5)(4,"label",6),e.SDv(5,7),e.qZA(),e.TgZ(6,"mat-form-field",8),e._UZ(7,"input",9),e.qZA()(),e.TgZ(8,"div",5)(9,"label",6),e.SDv(10,10),e.qZA(),e.TgZ(11,"mat-form-field",8)(12,"app-icon",11),e._uU(13,"search"),e.qZA(),e._UZ(14,"input",12),e.qZA(),e.TgZ(15,"mat-autocomplete",null,13),e.YNc(17,F,2,2,"mat-option",14)(18,z,2,1,"mat-option",15),e.qZA()(),e.TgZ(19,"div",5)(20,"label",16),e.SDv(21,17),e.qZA(),e.TgZ(22,"mat-form-field",8),e._UZ(23,"input",18),e.qZA()()()),2&n){const t=e.MAs(16),i=e.oxw(2);let o;e.Q6J("formGroup",i.form),e.xp6(),e.Q6J("ngIf",null==(o=e.lcZ(2,5,i.region_list))?null:o.length),e.xp6(13),e.Q6J("matAutocomplete",t),e.xp6(3),e.Q6J("ngForOf",i.filtered_timezones),e.xp6(),e.Q6J("ngIf",!i.timezones.length)}}function Q(n,r){if(1&n&&(e.ynx(0),e.YNc(1,D,24,7,"form",2),e.BQk()),2&n){const t=e.oxw();e.xp6(),e.Q6J("ngIf",t.form)}}function $(n,r){1&n&&(e.TgZ(0,"div",24),e._UZ(1,"mat-spinner",25),e.TgZ(2,"p",26),e._uU(3,"Saving building..."),e.qZA()())}let Y=(()=>{class n extends c.cx{get default_parent(){return this._org.organisation.id}constructor(t){super(),this._org=t,this.building=null,this.save=0,this.loading=!1,this.loadingChange=new e.vpe,this.done=new e.vpe,this.timezones=[],this.filtered_timezones=[],this.region_list=this._org.region_list,this.form=new d.cw({id:new d.NI(""),parent_id:new d.NI(this._org.organisation.id,[d.kI.required]),display_name:new d.NI("",[d.kI.required]),timezone:new d.NI(Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone||""),location:new d.NI("")})}ngOnInit(){this._updateTimezoneList(),this.subscription("tz-change",this.form.valueChanges.subscribe(({timezone:t})=>this.filtered_timezones=this.timezones.filter(i=>i.toLowerCase().includes(t.toLowerCase())))),this.building&&this.form.patchValue(this.building)}ngOnChanges(t){t.building&&this.building&&this.form.patchValue(this.building),t.save&&this.save&&this.saveChanges()}saveChanges(){var t=this;return(0,v.Z)(function*(){if(t.form.patchValue({parent_id:t.form.value.parent_id||t._org.organisation.id}),!t.form.valid)return(0,c.cB)(`Some form fields are invalid. [${(0,c.RD)(t.form).join(", ")}]`);const i=t.form.getRawValue();t.loading=!0,t.loadingChange.emit(!0);const o={...i,tags:["building"],name:`BLD ${(0,g.N9E)().description} ${i.display_name}`},a=yield(i.id?(0,g.BfP)(i.id,o):(0,g.ri3)(o)).toPromise().catch(l=>{throw(0,c.cB)(`Error saving building: ${l.message||l.error||l}`),t.loading=!1,t.loadingChange.emit(!1),l});(0,c.t5)("Successfully saved building."),t.loading=!1,t.loadingChange.emit(!1),t.done.emit(a)})()}_updateTimezoneList(){const t=this.form?.value?.timezone||"";this.timezones=c.sM,this.filtered_timezones=this.timezones.filter(i=>i.toLowerCase().includes(t.toLowerCase()))}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(N.w7))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["building-form"]],inputs:{building:"building",save:"save",loading:"loading"},outputs:{loadingChange:"loadingChange",done:"done"},features:[e.qOj,e.TTD],decls:3,vars:2,consts:()=>{let t,i,o,a;return t=$localize`:@@displayNameLabel␟8d766661ed5e178519720ec8e959d2a737f600a6␟1377207093952578744: Display Name: `,i=$localize`:@@displayNameLabel␟dbd34479df566856113383ebef3a2cb98e494642␟7608711767660448404: Timezone: `,o=$localize`:@@displayNameLabel␟8dfcfa872af9be0ad27411537a6944e3d33a278f␟2698045878883517755: Location: `,a=$localize`:@@displayNameLabel␟88b397510643ec67156f0eb2d333d4012801a8c1␟2672381863752151894: Region: `,[[4,"ngIf","ngIfElse"],["load_state",""],["building","","class","flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]",3,"formGroup",4,"ngIf"],["building","",1,"flex","flex-col","w-[36rem]","max-w-[calc(100vw-4rem)]",3,"formGroup"],["class","flex flex-col",4,"ngIf"],[1,"flex","flex-col"],["for","display-name"],t,["appearance","outline"],["matInput","","name","display-name","placeholder","Display Name","formControlName","display_name"],i,["matPrefix","",1,"text-2xl"],["matInput","","formControlName","timezone","placeholder","Building timezone",3,"matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"disabled",4,"ngIf"],["for","address"],o,["matInput","","name","address","placeholder","Location or Address...","formControlName","location"],["for","region"],a,["name","region","formControlName","parent_id","placeholder","Select Region..."],[3,"value"],[3,"disabled"],[1,"flex","flex-col","items-center","justify-center","w-64","h-64"],["diameter","32"],[1,"mt-4"]]},template:function(i,o){if(1&i&&e.YNc(0,Q,2,1,"ng-container",0)(1,$,4,0,"ng-template",null,1,e.W1O),2&i){const a=e.MAs(2);e.Q6J("ngIf",!o.loading)("ngIfElse",a)}},dependencies:[u.sg,u.O5,d._Y,d.Fj,d.JJ,d.JL,T.KE,T.qo,G.Nt,y.gD,f.ey,I.Ou,B.XC,B.ZL,d.sg,d.u,C.o,u.Ov]})}return n})();function q(n,r){1&n&&(e.TgZ(0,"button",4)(1,"app-icon"),e._uU(2,"close"),e.qZA()())}function j(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"footer",5)(1,"button",6),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.save())}),e._uU(2,"Save"),e.qZA()()}}let X=(()=>{class n{constructor(t,i){this._data=t,this._dialog_ref=i,this.loading=!1,this.save_state=0,this.building=this._data,this.close=o=>this._dialog_ref.close(o),this.save=()=>this.save_state=Date.now()}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(_.WI),e.Y36(_.so))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["building-modal"]],decls:7,vars:6,consts:[["btn","","icon","","mat-dialog-close","",4,"ngIf"],[1,"max-h-[65vh]","overflow-y-auto","overflow-x-hidden","p-4"],[3,"building","save","loading","loadingChange","done"],["class","p-2 flex justify-end border-t border-base-200",4,"ngIf"],["btn","","icon","","mat-dialog-close",""],[1,"p-2","flex","justify-end","border-t","border-base-200"],["btn","",1,"w-32",3,"click"]],template:function(i,o){1&i&&(e.TgZ(0,"header")(1,"h2"),e._uU(2),e.qZA(),e.YNc(3,q,3,0,"button",0),e.qZA(),e.TgZ(4,"main",1)(5,"building-form",2),e.NdJ("loadingChange",function(l){return o.loading=l})("done",function(l){return o.close(l)}),e.qZA()(),e.YNc(6,j,3,0,"footer",3)),2&i&&(e.xp6(2),e.hij("",o.building.id?"Edit":"Add"," Building"),e.xp6(),e.Q6J("ngIf",!o.loading),e.xp6(2),e.Q6J("building",o.building)("save",o.save_state)("loading",o.loading),e.xp6(),e.Q6J("ngIf",!o.loading))},dependencies:[u.O5,_.ZT,C.o,Y]})}return n})();var K=s(5581),A=s(9455),H=s(8442);function V(n,r){1&n&&(e.TgZ(0,"button",6)(1,"app-icon",7),e._uU(2,"close"),e.qZA()())}function W(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"main",8)(1,"label"),e._uU(2,"Before Event"),e.qZA(),e.TgZ(3,"a-duration-field",9),e.NdJ("ngModelChange",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.settings.time_before=o)}),e.qZA(),e.TgZ(4,"label"),e._uU(5,"After Event"),e.qZA(),e.TgZ(6,"a-duration-field",9),e.NdJ("ngModelChange",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.settings.time_after=o)}),e.qZA(),e.TgZ(7,"label"),e._uU(8,"Event Types"),e.qZA(),e.TgZ(9,"mat-form-field",10)(10,"mat-select",11),e.NdJ("ngModelChange",function(o){e.CHM(t);const a=e.oxw();return e.KtG(a.settings.resources=o)}),e.TgZ(11,"mat-option",12),e._uU(12," Desks "),e.qZA(),e.TgZ(13,"mat-option",13),e._uU(14," Visitors "),e.qZA(),e.TgZ(15,"mat-option",14),e._uU(16," Parking "),e.qZA()()()()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("min",0)("ngModel",t.settings.time_before),e.xp6(3),e.Q6J("min",0)("ngModel",t.settings.time_after),e.xp6(4),e.Q6J("ngModel",t.settings.resources)}}function k(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"footer",15)(1,"button",16),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.save())}),e._uU(2,"Save"),e.qZA()()}}function ee(n,r){if(1&n&&(e.TgZ(0,"main",17),e._UZ(1,"mat-spinner",18),e.TgZ(2,"p"),e._uU(3),e.qZA()()),2&n){const t=e.oxw();e.xp6(),e.Q6J("diameter",48),e.xp6(2),e.Oqu(t.loading)}}let te=(()=>{class n{constructor(t,i,o){this._id=t,this._dialog_ref=i,this._settings=o,this.loading="",this.id=this._id,this.settings={}}ngOnInit(){this.loadSettings(this.id)}loadSettings(t){var i=this;return(0,v.Z)(function*(){i.loading="Loading auto-release settings for building...",i.settings={};const a=(yield(0,g.oOs)({parent_id:t}).pipe((0,x.U)(l=>l.data)).toPromise()).find(l=>l.encryption_level===g.sUp.None);if(a){try{i.settings=A.zD(a.settings_string)?.auto_release||{}}catch{}i.loading=""}})()}save(){var t=this;return(0,v.Z)(function*(){t.loading="Saving changes to auto-release settings...";let o=(yield(0,g.oOs)({parent_id:t.id}).pipe((0,x.U)(h=>h.data)).toPromise()).find(h=>h.encryption_level===g.sUp.None);o||(o=new g.iJM({parent_id:t.id,encryption_level:g.sUp.None,settings_string:""}));let a={};try{a=A.zD(o.settings_string)||{}}catch{}o.settings_string=A.$w({...a,auto_release:t.settings}),o.id?yield(0,g.VPJ)(o.id,o).toPromise():yield(0,g.zZM)(o).toPromise();const l=t._settings.get("app.workplace_metadata_key")||"workplace_app",p=(yield(0,g.rlq)(t.id,l).toPromise()).details||{};p.auto_release=t.settings,yield(0,g.Ymr)(t.id,{name:l,details:p,description:""}).toPromise(),(0,c.t5)("Auto-release settings updated"),t.loading="",t._dialog_ref.close()})()}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(_.WI),e.Y36(_.so),e.Y36(c.gb))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["auto-release-modal"]],decls:8,vars:4,consts:[[1,"flex","items-center","justify-between","border-b","border-gray-300","p-4"],[1,"text-xl","font-medium"],["icon","","matRipple","","mat-dialog-close","",4,"ngIf"],["class","px-2 w-[20rem]",4,"ngIf","ngIfElse"],["class","p-4 flex justify-end",4,"ngIf"],["load_state",""],["icon","","matRipple","","mat-dialog-close",""],[1,"text-2xl"],[1,"px-2","w-[20rem]"],[3,"min","ngModel","ngModelChange"],["appearance","outline",1,"w-full"],["multiple","","placeholder","Set Event Types...",3,"ngModel","ngModelChange"],["value","desk"],["value","visitor"],["value","parking"],[1,"p-4","flex","justify-end"],["btn","","matRipple","",1,"w-32",3,"click"],[1,"flex","flex-col","items-center","justify-center","p-32","space-y-2"],[3,"diameter"]],template:function(i,o){if(1&i&&(e.TgZ(0,"header",0)(1,"h3",1),e._uU(2,"Auto-Release Settings"),e.qZA(),e.YNc(3,V,3,0,"button",2),e.qZA(),e.YNc(4,W,17,5,"main",3)(5,k,3,0,"footer",4)(6,ee,4,2,"ng-template",null,5,e.W1O)),2&i){const a=e.MAs(7);e.xp6(3),e.Q6J("ngIf",!o.loading),e.xp6(),e.Q6J("ngIf",!o.loading)("ngIfElse",a),e.xp6(),e.Q6J("ngIf",!o.loading)}},dependencies:[u.O5,d.JJ,d.On,T.KE,y.gD,f.ey,I.Ou,_.ZT,f.wG,H.B,C.o]})}return n})(),L=(()=>{class n{constructor(t,i){this._org=t,this._dialog=i,this._options=new b.X({}),this._change=new b.X(0),this.options=this._options.asObservable(),this.filtered_buildings=(0,w.aj)([this._org.region_list,this._org.building_list,this._options,this._org.initialised]).pipe((0,x.U)(([o,a,l])=>{l.zone&&(a=a.filter(m=>m.parent_id===l.zone)),l.search&&(a=a.filter(m=>m.name.toLowerCase().includes(l.search.toLowerCase())));for(const m of a){const p=o.find(h=>h.id===m.parent_id);p&&(m.region=p.display_name||p.name),m.level_count=this._org.levelsForBuilding(m)?.length||0}return a}))}setFilters(t){this._options.next({...this._options.getValue(),...t})}setSearchString(t){this._options.next({...this._options.getValue(),search:t})}editBuilding(t=new g.TT8){this._dialog.open(X,{data:t}).afterClosed().subscribe(o=>{o&&this._org.addZone(o)})}editBuildingMetadata(t=new g.TT8){this._dialog.open(K.K,{data:{zone:t}}).afterClosed().subscribe(o=>{o&&setTimeout(()=>location.reload(),300)})}setAutoRelease(t){t?.id&&this._dialog.open(te,{data:t.id})}removeBuilding(t){var i=this;return(0,v.Z)(function*(){const o=yield(0,c._5)({title:"Remove Building",content:`Are you sure you want to remove the building "${t.name}"?`,icon:{content:"delete_forever"},confirm_text:"Remove"},i._dialog);if("done"!==o.reason)return o.close();o.loading("Removing building..."),yield(0,g.Jwl)(t.id).toPromise(),i._org.removeZone({id:t.id,tags:["building"]}),(0,c.t5)("Successfully removed building."),o.close()})()}static#e=this.\u0275fac=function(i){return new(i||n)(e.LFG(N.w7),e.LFG(_.uw))};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ne=s(3005),ie=s(9842),Z=s(7988),oe=s(7442),ae=s(8075),se=s(6612);function le(n,r){if(1&n&&(e._uU(0),e.ALo(1,"level"),e.ALo(2,"level")),2&n){const t=r.data;let i;e.hij(" ",(null==(i=e.lcZ(1,1,t))?null:i.display_name)||(null==(i=e.lcZ(2,3,t))?null:i.name)," ")}}function re(n,r){if(1&n&&e._UZ(0,"img",7),2&n){const t=e.oxw().data;e.Q6J("source",t[0])}}function de(n,r){1&n&&(e.TgZ(0,"span",8),e._uU(1,"No Images"),e.qZA())}function ge(n,r){if(1&n&&e.YNc(0,re,1,1,"img",5)(1,de,2,0,"span",6),2&n){const t=r.data;e.Q6J("ngIf",t.length),e.xp6(),e.Q6J("ngIf",!t.length)}}function ce(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",9)(1,"button",10)(2,"app-icon"),e._uU(3,"more_vert"),e.qZA()(),e.TgZ(4,"mat-menu",null,11)(6,"button",12),e.NdJ("click",function(){const a=e.CHM(t).row,l=e.oxw();return e.KtG(l.editBuildingMetadata(a))}),e.TgZ(7,"div",13)(8,"app-icon",14),e._uU(9,"edit_square"),e.qZA(),e.TgZ(10,"span"),e._uU(11,"App Configuration"),e.qZA()()(),e.TgZ(12,"button",12),e.NdJ("click",function(){const a=e.CHM(t).row,l=e.oxw();return e.KtG(l.editBuilding(a))}),e.TgZ(13,"div",13)(14,"app-icon",14),e._uU(15,"edit"),e.qZA(),e.TgZ(16,"span"),e._uU(17,"Edit Building"),e.qZA()()(),e.TgZ(18,"button",12),e.NdJ("click",function(){const a=e.CHM(t).row,l=e.oxw();return e.KtG(l.setAutoRelease(a))}),e.TgZ(19,"div",13)(20,"app-icon",15),e._uU(21,"release_alert"),e.qZA(),e.TgZ(22,"span"),e._uU(23,"Auto-release Settings"),e.qZA()()(),e.TgZ(24,"button",12),e.NdJ("click",function(){const a=e.CHM(t).row,l=e.oxw();return e.KtG(l.removeBuilding(a))}),e.TgZ(25,"div",16)(26,"app-icon",17),e._uU(27,"delete"),e.qZA(),e.TgZ(28,"span"),e._uU(29,"Delete Building"),e.qZA()()()()()}if(2&n){const t=e.MAs(5);e.xp6(),e.Q6J("matMenuTriggerFor",t)}}const me=()=>["display_name","address","timezone","region","level_count","actions"],ue=()=>["Name","Location","Timezone","Region","Levels"," "],_e=()=>["12r","flex","12r","10r","6r","3.75r"],pe=(n,r,t)=>({images:n,zones:r,actions:t});let fe=(()=>{class n{constructor(t,i){this._manager=t,this._settings=i,this.buildings=this._manager.filtered_buildings,this.settings={},this.editBuilding=o=>this._manager.editBuilding(o),this.editBuildingMetadata=o=>this._manager.editBuildingMetadata(o),this.removeBuilding=o=>this._manager.removeBuilding(o),this.setAutoRelease=o=>this._manager.setAutoRelease(o)}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(L),e.Y36(c.gb))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["building-list"]],decls:8,vars:12,consts:[[1,"absolute","inset-0","overflow-auto","px-4"],["empty","No buildings",1,"block","min-w-[60rem]","w-full","h-full",3,"dataSource","columns","display_column","column_size","template"],["level_template",""],["image_template",""],["action_template",""],["auth","","class","max-h-[3rem] max-w-[8rem]",3,"source",4,"ngIf"],["class","opacity-30",4,"ngIf"],["auth","",1,"max-h-[3rem]","max-w-[8rem]",3,"source"],[1,"opacity-30"],[1,"w-full","flex","justify-end","space-x-2"],["btn","","icon","","matRipple","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"flex","items-center","space-x-2"],[1,"text-xl"],["className","material-symbols-rounded",1,"text-xl"],[1,"flex","items-center","space-x-2","text-red-500"],[1,"text-error","text-xl"]],template:function(i,o){if(1&i&&(e.TgZ(0,"div",0),e._UZ(1,"custom-table",1),e.qZA(),e.YNc(2,le,3,5,"ng-template",null,2,e.W1O)(4,ge,2,2,"ng-template",null,3,e.W1O)(6,ce,30,1,"ng-template",null,4,e.W1O)),2&i){const a=e.MAs(3),l=e.MAs(5),m=e.MAs(7);e.xp6(),e.Q6J("dataSource",o.buildings)("columns",e.DdM(5,me))("display_column",e.DdM(6,ue))("column_size",e.DdM(7,_e))("template",e.kEZ(8,pe,l,a,m))}},dependencies:[u.O5,Z.VK,Z.OP,Z.p6,f.wG,C.o,oe.C,ae.A,se.M]})}return n})();const he=["app-building-manager",""];let R=(()=>{class n{constructor(t){this._state=t,this.newBuilding=()=>this._state.editBuilding()}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(L))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["","app-building-manager",""]],attrs:he,decls:10,vars:0,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"flex","items-center","justify-between","mb-2","p-8"],[1,"text-2xl","font-medium"],["btn","","matRipple","",3,"click"],[1,"block","w-full","relative","flex-1","h-1/2"]],template:function(i,o){1&i&&(e._UZ(0,"app-topbar"),e.TgZ(1,"div",0),e._UZ(2,"app-sidebar"),e.TgZ(3,"main",1)(4,"header",2)(5,"h2",3),e._uU(6,"Building Management"),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return o.newBuilding()}),e._uU(8," Add Building "),e.qZA()(),e._UZ(9,"building-list",5),e.qZA()())},dependencies:[ne.O,ie.u,f.wG,fe],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}"]})}return n})();var ve=s(2557);const Ce=[{path:"",component:R},{path:"new",component:R}];let xe=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[u.ez,d.u5,S.v,U.YR,O.PP,ve.Hi,E.Bz.forChild(Ce)]})}return n})()}}]);