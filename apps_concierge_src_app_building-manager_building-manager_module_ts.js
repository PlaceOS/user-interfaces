"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_building-manager_building-manager_module_ts"],{37014:(ve,A,s)=>{s.r(A),s.d(A,{BuildingManagerModule:()=>he});var _=s(26575),g=s(28849),E=s(92649),U=s(97910),P=s(47049),O=s(10060),u=s(71670),m=s(22798),b=s(93121),c=s(47298),B=s(70462),G=s(28159),C=s(47422),p=s(17401),e=s(29039),x=s(94888),T=s(71268),S=s(99674),y=s(96355),f=s(10257),R=s(33910),I=s(99892);function J(i,d){if(1&i&&(e.TgZ(0,"mat-option",22),e._uU(1),e.qZA()),2&i){const t=d.$implicit;e.Q6J("value",t.id),e.xp6(),e.hij(" ",t.display_name||t.name," ")}}function F(i,d){if(1&i&&(e.TgZ(0,"div",5)(1,"label",19),e.SDv(2,20),e.qZA(),e.TgZ(3,"mat-form-field",8)(4,"mat-select",21)(5,"mat-option",22),e._uU(6,"None"),e.qZA(),e.YNc(7,J,2,2,"mat-option",14),e.ALo(8,"async"),e.qZA()()()),2&i){const t=e.oxw(3);e.xp6(5),e.Q6J("value",t.default_parent),e.xp6(2),e.Q6J("ngForOf",e.lcZ(8,2,t.region_list))}}function z(i,d){if(1&i&&(e.TgZ(0,"mat-option",22),e._uU(1),e.qZA()),2&i){const t=d.$implicit;e.Q6J("value",t),e.xp6(),e.Oqu(t)}}function D(i,d){1&i&&(e.TgZ(0,"mat-option",23),e._uU(1," No matching timezones "),e.qZA()),2&i&&e.Q6J("disabled",!0)}function $(i,d){if(1&i&&(e.TgZ(0,"form",3),e.YNc(1,F,9,4,"div",4),e.ALo(2,"async"),e.TgZ(3,"div",5)(4,"label",6),e.SDv(5,7),e.qZA(),e.TgZ(6,"mat-form-field",8),e._UZ(7,"input",9),e.qZA()(),e.TgZ(8,"div",5)(9,"label",6),e.SDv(10,10),e.qZA(),e.TgZ(11,"mat-form-field",8)(12,"app-icon",11),e._uU(13,"search"),e.qZA(),e._UZ(14,"input",12),e.qZA(),e.TgZ(15,"mat-autocomplete",null,13),e.YNc(17,z,2,2,"mat-option",14)(18,D,2,1,"mat-option",15),e.qZA()(),e.TgZ(19,"div",5)(20,"label",16),e.SDv(21,17),e.qZA(),e.TgZ(22,"mat-form-field",8),e._UZ(23,"input",18),e.qZA()()()),2&i){const t=e.MAs(16),n=e.oxw(2);let o;e.Q6J("formGroup",n.form),e.xp6(),e.Q6J("ngIf",null==(o=e.lcZ(2,5,n.region_list))?null:o.length),e.xp6(13),e.Q6J("matAutocomplete",t),e.xp6(3),e.Q6J("ngForOf",n.filtered_timezones),e.xp6(),e.Q6J("ngIf",!n.timezones.length)}}function Q(i,d){if(1&i&&(e.ynx(0),e.YNc(1,$,24,7,"form",2),e.BQk()),2&i){const t=e.oxw();e.xp6(),e.Q6J("ngIf",t.form)}}function Y(i,d){1&i&&(e.TgZ(0,"div",24),e._UZ(1,"mat-spinner",25),e.TgZ(2,"p",26),e._uU(3,"Saving building..."),e.qZA()())}let q=(()=>{class i extends m.cx{get default_parent(){return this._org.organisation.id}constructor(t){super(),this._org=t,this.building=null,this.save=0,this.loading=!1,this.loadingChange=new e.vpe,this.done=new e.vpe,this.timezones=[],this.filtered_timezones=[],this.form=new g.cw({id:new g.NI(""),parent_id:new g.NI(this._org.organisation.id,[g.kI.required]),display_name:new g.NI("",[g.kI.required]),timezone:new g.NI(Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone||""),location:new g.NI("")})}ngOnInit(){this._updateTimezoneList(),this.subscription("tz-change",this.form.valueChanges.subscribe(({timezone:t})=>this.filtered_timezones=this.timezones.filter(n=>n.toLowerCase().includes(t.toLowerCase())))),this.building&&this.form.patchValue(this.building)}ngOnChanges(t){t.building&&this.building&&this.form.patchValue(this.building),t.save&&this.save&&this.saveChanges()}saveChanges(){var t=this;return(0,u.Z)(function*(){if(t.form.patchValue({parent_id:t.form.value.parent_id||t._org.organisation.id}),!t.form.valid)return(0,m.cB)(`Some form fields are invalid. [${(0,m.RD)(t.form).join(", ")}]`);const n=t.form.getRawValue();t.loading=!0,t.loadingChange.emit(!0);const o={...n,tags:["building"],name:`BLD ${(0,c.N9E)().description} ${n.display_name}`},a=yield(n.id?(0,c.BfP)(n.id,o):(0,c.ri3)(o)).toPromise().catch(l=>{throw(0,m.cB)(`Error saving building: ${l.message||l.error||l}`),t.loading=!1,t.loadingChange.emit(!1),l});(0,m.t5)("Successfully saved building."),t.loading=!1,t.loadingChange.emit(!1),t.done.emit(a)})()}_updateTimezoneList(){const t=this.form?.value?.timezone||"";this.timezones=m.sM,this.filtered_timezones=this.timezones.filter(n=>n.toLowerCase().includes(t.toLowerCase()))}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(b.w7))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["building-form"]],inputs:{building:"building",save:"save",loading:"loading"},outputs:{loadingChange:"loadingChange",done:"done"},features:[e.qOj,e.TTD],decls:3,vars:2,consts:()=>{let t,n,o,a;return t=$localize`:@@displayNameLabel␟8d766661ed5e178519720ec8e959d2a737f600a6␟1377207093952578744: Display Name: `,n=$localize`:@@displayNameLabel␟dbd34479df566856113383ebef3a2cb98e494642␟7608711767660448404: Timezone: `,o=$localize`:@@displayNameLabel␟8dfcfa872af9be0ad27411537a6944e3d33a278f␟2698045878883517755: Location: `,a=$localize`:@@displayNameLabel␟88b397510643ec67156f0eb2d333d4012801a8c1␟2672381863752151894: Region: `,[[4,"ngIf","ngIfElse"],["load_state",""],["building","","class","flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]",3,"formGroup",4,"ngIf"],["building","",1,"flex","flex-col","w-[36rem]","max-w-[calc(100vw-4rem)]",3,"formGroup"],["class","flex flex-col",4,"ngIf"],[1,"flex","flex-col"],["for","display-name"],t,["appearance","outline"],["matInput","","name","display-name","placeholder","Display Name","formControlName","display_name"],n,["matPrefix","",1,"text-2xl"],["matInput","","formControlName","timezone","placeholder","Building timezone",3,"matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"disabled",4,"ngIf"],["for","address"],o,["matInput","","name","address","placeholder","Location or Address...","formControlName","location"],["for","region"],a,["name","region","formControlName","parent_id","placeholder","Select Region..."],[3,"value"],[3,"disabled"],[1,"flex","flex-col","items-center","justify-center","w-64","h-64"],["diameter","32"],[1,"mt-4"]]},template:function(n,o){if(1&n&&e.YNc(0,Q,2,1,"ng-container",0)(1,Y,4,0,"ng-template",null,1,e.W1O),2&n){const a=e.MAs(2);e.Q6J("ngIf",!o.loading)("ngIfElse",a)}},dependencies:[_.sg,_.O5,g._Y,g.Fj,g.JJ,g.JL,T.KE,T.qo,S.Nt,y.gD,f.ey,R.Ou,I.XC,I.ZL,g.sg,g.u,x.o,_.Ov]})}return i})();function j(i,d){1&i&&(e.TgZ(0,"button",4)(1,"app-icon"),e._uU(2,"close"),e.qZA()())}function X(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"footer",5)(1,"button",6),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.save())}),e._uU(2,"Save"),e.qZA()()}}let K=(()=>{class i{constructor(t,n){this._data=t,this._dialog_ref=n,this.loading=!1,this.save_state=0,this.building=this._data,this.close=o=>this._dialog_ref.close(o),this.save=()=>this.save_state=Date.now()}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(p.WI),e.Y36(p.so))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["building-modal"]],decls:7,vars:6,consts:[["btn","","icon","","mat-dialog-close","",4,"ngIf"],[1,"max-h-[65vh]","overflow-y-auto","overflow-x-hidden","p-4"],[3,"building","save","loading","loadingChange","done"],["class","p-2 flex justify-end border-t border-base-200",4,"ngIf"],["btn","","icon","","mat-dialog-close",""],[1,"p-2","flex","justify-end","border-t","border-base-200"],["btn","",1,"w-32",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"header")(1,"h2"),e._uU(2),e.qZA(),e.YNc(3,j,3,0,"button",0),e.qZA(),e.TgZ(4,"main",1)(5,"building-form",2),e.NdJ("loadingChange",function(l){return o.loading=l})("done",function(l){return o.close(l)}),e.qZA()(),e.YNc(6,X,3,0,"footer",3)),2&n&&(e.xp6(2),e.hij("",o.building.id?"Edit":"Add"," Building"),e.xp6(),e.Q6J("ngIf",!o.loading),e.xp6(2),e.Q6J("building",o.building)("save",o.save_state)("loading",o.loading),e.xp6(),e.Q6J("ngIf",!o.loading))},dependencies:[_.O5,p.ZT,x.o,q]})}return i})();var H=s(66229);let L=(()=>{class i{constructor(t,n){this._org=t,this._dialog=n,this._options=new B.X({}),this._change=new B.X(0),this.options=this._options.asObservable(),this.filtered_buildings=(0,G.aj)([this._org.region_list,this._org.building_list,this._options,this._org.initialised]).pipe((0,C.U)(([o,a,l])=>{l.zone&&(a=a.filter(r=>r.parent_id===l.zone)),l.search&&(a=a.filter(r=>r.name.toLowerCase().includes(l.search.toLowerCase())));for(const r of a){const h=o.find(v=>v.id===r.parent_id);h&&(r.region=h.display_name||h.name),r.level_count=this._org.levelsForBuilding(r)?.length||0}return a}))}setFilters(t){this._options.next({...this._options.getValue(),...t})}setSearchString(t){this._options.next({...this._options.getValue(),search:t})}editBuilding(t=new c.TT8){this._dialog.open(K,{data:t}).afterClosed().subscribe(o=>{o&&this._org.addZone(o)})}editBuildingMetadata(t=new c.TT8){this._dialog.open(H.K,{data:{zone:t}}).afterClosed().subscribe(o=>{o&&setTimeout(()=>location.reload(),300)})}removeBuilding(t){var n=this;return(0,u.Z)(function*(){const o=yield(0,m._5)({title:"Remove Building",content:`Are you sure you want to remove the building "${t.name}"?`,icon:{content:"delete_forever"},confirm_text:"Remove"},n._dialog);if("done"!==o.reason)return o.close();o.loading("Removing building..."),yield(0,c.Jwl)(t.id).toPromise(),n._org.removeZone({id:t.id,tags:["building"]}),(0,m.t5)("Successfully removed building."),o.close()})()}static#e=this.\u0275fac=function(n){return new(n||i)(e.LFG(b.w7),e.LFG(p.uw))};static#t=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var k=s(33005),V=s(19842),Z=s(43811),N=s(78128),W=s(28442),ee=s(27442),te=s(78075),ne=s(6612);function ie(i,d){if(1&i&&(e._uU(0),e.ALo(1,"level"),e.ALo(2,"level")),2&i){const t=d.data;let n;e.hij(" ",(null==(n=e.lcZ(1,1,t))?null:n.display_name)||(null==(n=e.lcZ(2,3,t))?null:n.name)," ")}}function oe(i,d){if(1&i&&e._UZ(0,"img",7),2&i){const t=e.oxw().data;e.Q6J("source",t[0])}}function ae(i,d){1&i&&(e.TgZ(0,"span",8),e._uU(1,"No Images"),e.qZA())}function le(i,d){if(1&i&&e.YNc(0,oe,1,1,"img",5)(1,ae,2,0,"span",6),2&i){const t=d.data;e.Q6J("ngIf",t.length),e.xp6(),e.Q6J("ngIf",!t.length)}}function se(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"div",22),e.NdJ("click",function(o){return o.stopPropagation()}),e.TgZ(1,"label"),e._uU(2,"Before Event"),e.qZA(),e.TgZ(3,"a-duration-field",23),e.NdJ("ngModelChange",function(o){e.CHM(t);const a=e.oxw().row,l=e.oxw();return e.KtG(l.settings[a.id].time_before=o)}),e.qZA(),e.TgZ(4,"label"),e._uU(5,"After Event"),e.qZA(),e.TgZ(6,"a-duration-field",23),e.NdJ("ngModelChange",function(o){e.CHM(t);const a=e.oxw().row,l=e.oxw();return e.KtG(l.settings[a.id].time_after=o)}),e.qZA(),e.TgZ(7,"label"),e._uU(8,"Event Types"),e.qZA(),e.TgZ(9,"mat-form-field",24)(10,"mat-select",25),e.NdJ("ngModelChange",function(o){e.CHM(t);const a=e.oxw().row,l=e.oxw();return e.KtG(l.settings[a.id].resources=o)}),e.TgZ(11,"mat-option",26),e._uU(12,"Rooms"),e.qZA(),e.TgZ(13,"mat-option",27),e._uU(14,"Desks"),e.qZA(),e.TgZ(15,"mat-option",28),e._uU(16,"Visitors"),e.qZA(),e.TgZ(17,"mat-option",29),e._uU(18,"Parking"),e.qZA()()()()}if(2&i){const t=e.oxw().row,n=e.oxw();e.xp6(3),e.Q6J("min",0)("ngModel",n.settings[t.id].time_before),e.xp6(3),e.Q6J("min",0)("ngModel",n.settings[t.id].time_after),e.xp6(4),e.Q6J("ngModel",n.settings[t.id].resources)}}function re(i,d){if(1&i){const t=e.EpF();e.TgZ(0,"div",9)(1,"button",10)(2,"app-icon"),e._uU(3,"more_vert"),e.qZA()(),e.TgZ(4,"mat-menu",null,11)(6,"button",12),e.NdJ("click",function(){const a=e.CHM(t).row,l=e.oxw();return e.KtG(l.editBuildingMetadata(a))}),e.TgZ(7,"div",13)(8,"app-icon",14),e._uU(9,"edit_square"),e.qZA(),e.TgZ(10,"span"),e._uU(11,"App Configuration"),e.qZA()()(),e.TgZ(12,"button",12),e.NdJ("click",function(){const a=e.CHM(t).row,l=e.oxw();return e.KtG(l.editBuilding(a))}),e.TgZ(13,"div",13)(14,"app-icon",14),e._uU(15,"edit"),e.qZA(),e.TgZ(16,"span"),e._uU(17,"Edit Building"),e.qZA()()(),e.TgZ(18,"button",15),e.NdJ("click",function(o){const l=e.CHM(t).row,r=e.oxw();return e.KtG(r.loadSettings(o,l.id))})("mouseenter",function(o){const l=e.CHM(t).row,r=e.oxw();return e.KtG(r.settings[l.id]?"":r.loadSettings(o,l.id))}),e.TgZ(19,"div",13)(20,"app-icon",16),e._uU(21,"release_alert"),e.qZA(),e.TgZ(22,"span"),e._uU(23,"Auto-release Settings"),e.qZA()(),e.TgZ(24,"mat-menu",null,17),e.YNc(26,se,19,5,"div",18),e.TgZ(27,"button",19),e.NdJ("click",function(){const a=e.CHM(t).row,l=e.oxw();return e.KtG(l.saveSettings(a.id))}),e._uU(28," Save "),e.qZA()()(),e.TgZ(29,"button",12),e.NdJ("click",function(){const a=e.CHM(t).row,l=e.oxw();return e.KtG(l.removeBuilding(a))}),e.TgZ(30,"div",20)(31,"app-icon",21),e._uU(32,"delete"),e.qZA(),e.TgZ(33,"span"),e._uU(34,"Delete Building"),e.qZA()()()()()}if(2&i){const t=d.row,n=e.MAs(5),o=e.MAs(25),a=e.oxw();e.xp6(),e.Q6J("matMenuTriggerFor",n),e.xp6(17),e.Q6J("matMenuTriggerFor",o),e.xp6(8),e.Q6J("ngIf",a.settings[t.id])}}const de=()=>["display_name","address","timezone","region","level_count","actions"],ge=()=>["Name","Location","Timezone","Region","Levels"," "],ce=()=>["12r","flex","12r","10r","6r","3.75r"],me=(i,d,t)=>({images:i,zones:d,actions:t});let _e=(()=>{class i{constructor(t,n){this._manager=t,this._settings=n,this.buildings=this._manager.filtered_buildings,this.settings={},this.editBuilding=o=>this._manager.editBuilding(o),this.editBuildingMetadata=o=>this._manager.editBuildingMetadata(o),this.removeBuilding=o=>this._manager.removeBuilding(o)}loadSettings(t,n){var o=this;return(0,u.Z)(function*(){t.preventDefault(),t.stopPropagation(),o.settings[n]={};const l=(yield(0,c.oOs)({parent_id:n}).pipe((0,C.U)(r=>r.data)).toPromise()).find(r=>r.encryption_level===c.sUp.None);if(l){try{o.settings[n]=Z.zD(l.settings_string)?.auto_release||{}}catch{}console.log("Settings:",o.settings[n],l.settings_string)}})()}saveSettings(t){var n=this;return(0,u.Z)(function*(){let a=(yield(0,c.oOs)({parent_id:t}).pipe((0,C.U)(M=>M.data)).toPromise()).find(M=>M.encryption_level===c.sUp.None);a||(a=new c.iJM({parent_id:t,encryption_level:c.sUp.None,settings_string:""}));let l={};try{l=Z.zD(a.settings_string)||{}}catch{}a.settings_string=Z.$w({...l,auto_release:n.settings[t]}),a.id?yield(0,c.VPJ)(a.id,a).toPromise():yield(0,c.zZM)(a).toPromise();const r=n._settings.get("app.workplace_metadata_key")||"workplace_app",v=(yield(0,c.rlq)(t,r).toPromise()).details||{};v.auto_release=n.settings[t],yield(0,c.Ymr)(t,{name:r,details:v,description:""}).toPromise(),(0,m.t5)("Auto-release settings updated")})()}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(L),e.Y36(m.gb))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["building-list"]],decls:8,vars:12,consts:[[1,"absolute","inset-0","overflow-auto","px-4"],["empty","No buildings",1,"block","min-w-[60rem]","w-full","h-full",3,"dataSource","columns","display_column","column_size","template"],["level_template",""],["image_template",""],["action_template",""],["auth","","class","max-h-[3rem] max-w-[8rem]",3,"source",4,"ngIf"],["class","opacity-30",4,"ngIf"],["auth","",1,"max-h-[3rem]","max-w-[8rem]",3,"source"],[1,"opacity-30"],[1,"w-full","flex","justify-end","space-x-2"],["btn","","icon","","matRipple","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"flex","items-center","space-x-2"],[1,"text-xl"],["mat-menu-item","",3,"matMenuTriggerFor","click","mouseenter"],["className","material-symbols-rounded",1,"text-xl"],["auto_release_menu","matMenu"],["class","px-2",3,"click",4,"ngIf"],["btn","","matRipple","",1,"w-[calc(100%-1rem)]","mx-auto",3,"click"],[1,"flex","items-center","space-x-2","text-red-500"],[1,"text-error","text-xl"],[1,"px-2",3,"click"],[3,"min","ngModel","ngModelChange"],["appearance","outline",1,"w-full"],["multiple","","placeholder","Set Event Types...",3,"ngModel","ngModelChange"],["value","room"],["value","desk"],["value","visitor"],["value","parking"]],template:function(n,o){if(1&n&&(e.TgZ(0,"div",0),e._UZ(1,"custom-table",1),e.qZA(),e.YNc(2,ie,3,5,"ng-template",null,2,e.W1O)(4,le,2,2,"ng-template",null,3,e.W1O)(6,re,35,3,"ng-template",null,4,e.W1O)),2&n){const a=e.MAs(3),l=e.MAs(5),r=e.MAs(7);e.xp6(),e.Q6J("dataSource",o.buildings)("columns",e.DdM(5,de))("display_column",e.DdM(6,ge))("column_size",e.DdM(7,ce))("template",e.kEZ(8,me,l,a,r))}},dependencies:[_.O5,g.JJ,g.On,T.KE,y.gD,f.ey,N.VK,N.OP,N.p6,f.wG,W.B,x.o,ee.C,te.A,ne.M]})}return i})();const ue=["app-building-manager",""];let w=(()=>{class i{constructor(t){this._state=t,this.newBuilding=()=>this._state.editBuilding()}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(L))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["","app-building-manager",""]],attrs:ue,decls:10,vars:0,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"flex","items-center","justify-between","mb-2","p-8"],[1,"text-2xl","font-medium"],["btn","","matRipple","",3,"click"],[1,"block","w-full","relative","flex-1","h-1/2"]],template:function(n,o){1&n&&(e._UZ(0,"app-topbar"),e.TgZ(1,"div",0),e._UZ(2,"app-sidebar"),e.TgZ(3,"main",1)(4,"header",2)(5,"h2",3),e._uU(6,"Building Management"),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return o.newBuilding()}),e._uU(8," Add Building "),e.qZA()(),e._UZ(9,"building-list",5),e.qZA()())},dependencies:[k.O,V.u,f.wG,_e],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n\n/*# sourceMappingURL=building-manager.component.ts-angular-inline--184.css.map*/"]})}return i})();var pe=s(21757);const fe=[{path:"",component:w},{path:"new",component:w}];let he=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#n=this.\u0275inj=e.cJS({imports:[_.ez,g.u5,U.v,P.YR,O.PP,pe.Hi,E.Bz.forChild(fe)]})}return i})()}}]);
//# sourceMappingURL=apps_concierge_src_app_building-manager_building-manager_module_ts.js.map