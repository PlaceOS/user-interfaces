"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["apps_concierge_src_app_building-manager_building-manager_module_ts"],{7092:(_e,C,a)=>{a.r(C),a.d(C,{BuildingManagerModule:()=>ge});var g=a(6575),r=a(8849),I=a(2649),B=a(7910),L=a(7049),y=a(8377),N=a(1670),c=a(7109),T=a(3121),u=a(7298),x=a(462),E=a(8159),O=a(7422),_=a(7401),e=a(9039),p=a(4888),A=a(1268),R=a(9674),G=a(162),f=a(257),P=a(3910),b=a(9892);function S(n,d){if(1&n&&(e.TgZ(0,"mat-option",22),e._uU(1),e.qZA()),2&n){const t=d.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.display_name||t.name," ")}}function U(n,d){if(1&n&&(e.TgZ(0,"div",5)(1,"label",19),e.SDv(2,20),e.qZA(),e.TgZ(3,"mat-form-field",8)(4,"mat-select",21)(5,"mat-option",22),e._uU(6,"None"),e.qZA(),e.YNc(7,S,2,2,"mat-option",14),e.ALo(8,"async"),e.qZA()()()),2&n){const t=e.oxw(3);e.xp6(5),e.Q6J("value",t.default_parent),e.xp6(2),e.Q6J("ngForOf",e.lcZ(8,2,t.region_list))}}function w(n,d){if(1&n&&(e.TgZ(0,"mat-option",22),e._uU(1),e.qZA()),2&n){const t=d.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}function F(n,d){1&n&&(e.TgZ(0,"mat-option",23),e._uU(1," No matching timezones "),e.qZA()),2&n&&e.Q6J("disabled",!0)}function z(n,d){if(1&n&&(e.TgZ(0,"form",3),e.YNc(1,U,9,4,"div",4),e.ALo(2,"async"),e.TgZ(3,"div",5)(4,"label",6),e.SDv(5,7),e.qZA(),e.TgZ(6,"mat-form-field",8),e._UZ(7,"input",9),e.qZA()(),e.TgZ(8,"div",5)(9,"label",6),e.SDv(10,10),e.qZA(),e.TgZ(11,"mat-form-field",8)(12,"app-icon",11),e._uU(13,"search"),e.qZA(),e._UZ(14,"input",12),e.qZA(),e.TgZ(15,"mat-autocomplete",null,13),e.YNc(17,w,2,2,"mat-option",14)(18,F,2,1,"mat-option",15),e.qZA()(),e.TgZ(19,"div",5)(20,"label",16),e.SDv(21,17),e.qZA(),e.TgZ(22,"mat-form-field",8),e._UZ(23,"input",18),e.qZA()()()),2&n){const t=e.MAs(16),i=e.oxw(2);let o;e.Q6J("formGroup",i.form),e.xp6(1),e.Q6J("ngIf",null==(o=e.lcZ(2,5,i.region_list))?null:o.length),e.xp6(13),e.Q6J("matAutocomplete",t),e.xp6(3),e.Q6J("ngForOf",i.filtered_timezones),e.xp6(1),e.Q6J("ngIf",!i.timezones.length)}}function D(n,d){if(1&n&&(e.ynx(0),e.YNc(1,z,24,7,"form",2),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.form)}}function J(n,d){1&n&&(e.TgZ(0,"div",24),e._UZ(1,"mat-spinner",25),e.TgZ(2,"p",26),e._uU(3,"Saving building..."),e.qZA()())}let $=(()=>{class n extends c.cx{get default_parent(){return this._org.organisation.id}constructor(t){super(),this._org=t,this.building=null,this.save=0,this.loading=!1,this.loadingChange=new e.vpe,this.done=new e.vpe,this.timezones=[],this.filtered_timezones=[],this.form=new r.cw({id:new r.NI(""),parent_id:new r.NI(this._org.organisation.id,[r.kI.required]),display_name:new r.NI("",[r.kI.required]),timezone:new r.NI(Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone||""),location:new r.NI("")})}ngOnInit(){this._updateTimezoneList(),this.subscription("tz-change",this.form.valueChanges.subscribe(({timezone:t})=>this.filtered_timezones=this.timezones.filter(i=>i.toLowerCase().includes(t.toLowerCase())))),this.building&&this.form.patchValue(this.building)}ngOnChanges(t){t.building&&this.building&&this.form.patchValue(this.building),t.save&&this.save&&this.saveChanges()}saveChanges(){var t=this;return(0,N.Z)(function*(){if(t.form.patchValue({parent_id:t.form.value.parent_id||t._org.organisation.id}),!t.form.valid)return(0,c.cB)(`Some form fields are invalid. [${(0,c.RD)(t.form).join(", ")}]`);const i=t.form.getRawValue();t.loading=!0,t.loadingChange.emit(!0);const o={...i,tags:["building"],name:`BLD ${(0,u.N9E)().description} ${i.display_name}`},s=yield(i.id?(0,u.BfP)(i.id,o):(0,u.ri3)(o)).toPromise().catch(l=>{throw(0,c.cB)(`Error saving building: ${l.message||l.error||l}`),t.loading=!1,t.loadingChange.emit(!1),l});(0,c.t5)("Successfully saved building."),t.loading=!1,t.loadingChange.emit(!1),t.done.emit(s)})()}_updateTimezoneList(){const t=this.form?.value?.timezone||"";this.timezones=c.sM,this.filtered_timezones=this.timezones.filter(i=>i.toLowerCase().includes(t.toLowerCase()))}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(T.w7))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["building-form"]],inputs:{building:"building",save:"save",loading:"loading"},outputs:{loadingChange:"loadingChange",done:"done"},features:[e.qOj,e.TTD],decls:3,vars:2,consts:()=>{let t,i,o,s;return t=$localize`:@@displayNameLabel␟8d766661ed5e178519720ec8e959d2a737f600a6␟1377207093952578744: Display Name: `,i=$localize`:@@displayNameLabel␟dbd34479df566856113383ebef3a2cb98e494642␟7608711767660448404: Timezone: `,o=$localize`:@@displayNameLabel␟8dfcfa872af9be0ad27411537a6944e3d33a278f␟2698045878883517755: Location: `,s=$localize`:@@displayNameLabel␟88b397510643ec67156f0eb2d333d4012801a8c1␟2672381863752151894: Region: `,[[4,"ngIf","ngIfElse"],["load_state",""],["building","","class","flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]",3,"formGroup",4,"ngIf"],["building","",1,"flex","flex-col","w-[36rem]","max-w-[calc(100vw-4rem)]",3,"formGroup"],["class","flex flex-col",4,"ngIf"],[1,"flex","flex-col"],["for","display-name"],t,["appearance","outline"],["matInput","","name","display-name","placeholder","Display Name","formControlName","display_name"],i,["matPrefix","",1,"text-2xl"],["matInput","","formControlName","timezone","placeholder","Building timezone",3,"matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"disabled",4,"ngIf"],["for","address"],o,["matInput","","name","address","placeholder","Location or Address...","formControlName","location"],["for","region"],s,["name","region","formControlName","parent_id","placeholder","Select Region..."],[3,"value"],[3,"disabled"],[1,"flex","flex-col","items-center","justify-center","w-64","h-64"],["diameter","32"],[1,"mt-4"]]},template:function(i,o){if(1&i&&e.YNc(0,D,2,1,"ng-container",0)(1,J,4,0,"ng-template",null,1,e.W1O),2&i){const s=e.MAs(2);e.Q6J("ngIf",!o.loading)("ngIfElse",s)}},dependencies:[g.sg,g.O5,r._Y,r.Fj,r.JJ,r.JL,A.KE,A.qo,R.Nt,G.gD,f.ey,P.Ou,b.XC,b.ZL,r.sg,r.u,p.o,g.Ov]})}return n})();function Q(n,d){1&n&&(e.TgZ(0,"button",4)(1,"app-icon"),e._uU(2,"close"),e.qZA()())}function Y(n,d){if(1&n){const t=e.EpF();e.TgZ(0,"footer",5)(1,"button",6),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.save())}),e._uU(2,"Save"),e.qZA()()}}let X=(()=>{class n{constructor(t,i){this._data=t,this._dialog_ref=i,this.loading=!1,this.save_state=0,this.building=this._data,this.close=o=>this._dialog_ref.close(o),this.save=()=>this.save_state=Date.now()}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(_.WI),e.Y36(_.so))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["building-modal"]],decls:7,vars:6,consts:[["btn","","icon","","mat-dialog-close","",4,"ngIf"],[1,"max-h-[65vh]","overflow-y-auto","overflow-x-hidden","p-4"],[3,"building","save","loading","loadingChange","done"],["class","p-2 flex justify-end border-t border-base-200",4,"ngIf"],["btn","","icon","","mat-dialog-close",""],[1,"p-2","flex","justify-end","border-t","border-base-200"],["btn","",1,"w-32",3,"click"]],template:function(i,o){1&i&&(e.TgZ(0,"header")(1,"h2"),e._uU(2),e.qZA(),e.YNc(3,Q,3,0,"button",0),e.qZA(),e.TgZ(4,"main",1)(5,"building-form",2),e.NdJ("loadingChange",function(l){return o.loading=l})("done",function(l){return o.close(l)}),e.qZA()(),e.YNc(6,Y,3,0,"footer",3)),2&i&&(e.xp6(2),e.hij("",o.building.id?"Edit":"Add"," Building"),e.xp6(1),e.Q6J("ngIf",!o.loading),e.xp6(2),e.Q6J("building",o.building)("save",o.save_state)("loading",o.loading),e.xp6(1),e.Q6J("ngIf",!o.loading))},dependencies:[g.O5,_.ZT,p.o,$]})}return n})();var j=a(6229);let Z=(()=>{class n{constructor(t,i){this._org=t,this._dialog=i,this._options=new x.X({}),this._change=new x.X(0),this.options=this._options.asObservable(),this.filtered_buildings=(0,E.aj)([this._org.region_list,this._org.building_list,this._options,this._org.initialised]).pipe((0,O.U)(([o,s,l])=>{l.zone&&(s=s.filter(m=>m.parent_id===l.zone)),l.search&&(s=s.filter(m=>m.name.toLowerCase().includes(l.search.toLowerCase())));for(const m of s){const v=o.find(ue=>ue.id===m.parent_id);v&&(m.region=v.display_name||v.name),m.level_count=this._org.levelsForBuilding(m)?.length||0}return s}))}setFilters(t){this._options.next({...this._options.getValue(),...t})}setSearchString(t){this._options.next({...this._options.getValue(),search:t})}editBuilding(t=new u.TT8){this._dialog.open(X,{data:t}).afterClosed().subscribe(o=>{o&&this._org.addZone(o)})}editBuildingMetadata(t=new u.TT8){this._dialog.open(j.K,{data:{zone:t}}).afterClosed().subscribe(o=>{o&&setTimeout(()=>location.reload(),300)})}removeBuilding(t){var i=this;return(0,N.Z)(function*(){const o=yield(0,c._5)({title:"Remove Building",content:`Are you sure you want to remove the building "${t.name}"?`,icon:{content:"delete_forever"},confirm_text:"Remove"},i._dialog);if("done"!==o.reason)return o.close();o.loading("Removing building..."),yield(0,u.Jwl)(t.id).toPromise(),i._org.removeZone({id:t.id,tags:["building"]}),(0,c.t5)("Successfully removed building."),o.close()})()}static#e=this.\u0275fac=function(i){return new(i||n)(e.LFG(T.w7),e.LFG(_.uw))};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var q=a(3005),K=a(9842),h=a(8128),V=a(7442),H=a(8075),W=a(6612);function k(n,d){if(1&n&&(e._uU(0),e.ALo(1,"level"),e.ALo(2,"level")),2&n){const t=d.data;let i;e.hij(" ",(null==(i=e.lcZ(1,1,t))?null:i.display_name)||(null==(i=e.lcZ(2,3,t))?null:i.name)," ")}}function ee(n,d){if(1&n&&e._UZ(0,"img",7),2&n){const t=e.oxw().data;e.Q6J("source",t[0])}}function te(n,d){1&n&&(e.TgZ(0,"span",8),e._uU(1,"No Images"),e.qZA())}function ne(n,d){if(1&n&&e.YNc(0,ee,1,1,"img",5)(1,te,2,0,"span",6),2&n){const t=d.data;e.Q6J("ngIf",t.length),e.xp6(1),e.Q6J("ngIf",!t.length)}}function ie(n,d){if(1&n){const t=e.EpF();e.TgZ(0,"div",9)(1,"button",10)(2,"app-icon"),e._uU(3,"more_vert"),e.qZA()(),e.TgZ(4,"mat-menu",null,11)(6,"button",12),e.NdJ("click",function(){const s=e.CHM(t).row,l=e.oxw();return e.KtG(l.editBuildingMetadata(s))}),e.TgZ(7,"div",13)(8,"app-icon"),e._uU(9,"edit_square"),e.qZA(),e.TgZ(10,"span"),e._uU(11,"App Configuration"),e.qZA()()(),e.TgZ(12,"button",12),e.NdJ("click",function(){const s=e.CHM(t).row,l=e.oxw();return e.KtG(l.editBuilding(s))}),e.TgZ(13,"div",13)(14,"app-icon"),e._uU(15,"edit"),e.qZA(),e.TgZ(16,"span"),e._uU(17,"Edit Building"),e.qZA()()(),e.TgZ(18,"button",12),e.NdJ("click",function(){const s=e.CHM(t).row,l=e.oxw();return e.KtG(l.removeBuilding(s))}),e.TgZ(19,"div",14)(20,"app-icon"),e._uU(21,"delete"),e.qZA(),e.TgZ(22,"span"),e._uU(23,"Delete Building"),e.qZA()()()()()}if(2&n){const t=e.MAs(5);e.xp6(1),e.Q6J("matMenuTriggerFor",t)}}const oe=()=>["display_name","address","timezone","region","level_count","actions"],ae=()=>["Name","Location","Timezone","Region","Levels"," "],le=()=>["12r","flex","12r","10r","6r","3.75r"],se=(n,d,t)=>({images:n,zones:d,actions:t});let de=(()=>{class n{constructor(t){this._manager=t,this.buildings=this._manager.filtered_buildings,this.editBuilding=i=>this._manager.editBuilding(i),this.editBuildingMetadata=i=>this._manager.editBuildingMetadata(i),this.removeBuilding=i=>this._manager.removeBuilding(i)}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(Z))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["building-list"]],decls:8,vars:12,consts:[[1,"absolute","inset-0","overflow-auto","px-4"],["empty","No buildings",1,"block","min-w-[60rem]","w-full","h-full",3,"dataSource","columns","display_column","column_size","template"],["level_template",""],["image_template",""],["action_template",""],["auth","","class","max-h-[3rem] max-w-[8rem]",3,"source",4,"ngIf"],["class","opacity-30",4,"ngIf"],["auth","",1,"max-h-[3rem]","max-w-[8rem]",3,"source"],[1,"opacity-30"],[1,"w-full","flex","justify-end","space-x-2"],["btn","","icon","","matRipple","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"flex","items-center","space-x-2"],[1,"flex","items-center","space-x-2","text-red-500"]],template:function(i,o){if(1&i&&(e.TgZ(0,"div",0),e._UZ(1,"custom-table",1),e.qZA(),e.YNc(2,k,3,5,"ng-template",null,2,e.W1O)(4,ne,2,2,"ng-template",null,3,e.W1O)(6,ie,24,1,"ng-template",null,4,e.W1O)),2&i){const s=e.MAs(3),l=e.MAs(5),m=e.MAs(7);e.xp6(1),e.Q6J("dataSource",o.buildings)("columns",e.DdM(5,oe))("display_column",e.DdM(6,ae))("column_size",e.DdM(7,le))("template",e.kEZ(8,se,l,s,m))}},dependencies:[g.O5,h.VK,h.OP,h.p6,f.wG,p.o,V.C,H.A,W.M]})}return n})();const re=["app-building-manager",""];let M=(()=>{class n{constructor(t){this._state=t,this.newBuilding=()=>this._state.editBuilding()}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(Z))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["","app-building-manager",""]],attrs:re,decls:10,vars:0,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"flex","items-center","justify-between","mb-2","p-8"],[1,"text-2xl","font-medium"],["btn","","matRipple","",3,"click"],[1,"block","w-full","relative","flex-1","h-1/2"]],template:function(i,o){1&i&&(e._UZ(0,"app-topbar"),e.TgZ(1,"div",0),e._UZ(2,"app-sidebar"),e.TgZ(3,"main",1)(4,"header",2)(5,"h2",3),e._uU(6,"Building Management"),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return o.newBuilding()}),e._uU(8," Add Building "),e.qZA()(),e._UZ(9,"building-list",5),e.qZA()())},dependencies:[q.O,K.u,f.wG,de],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--b1)}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}\n\n/*# sourceMappingURL=building-manager.component.ts-angular-inline--183.css.map*/"]})}return n})();var me=a(1757);const ce=[{path:"",component:M},{path:"new",component:M}];let ge=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[g.ez,r.u5,B.v,L.YR,y.PP,me.Hi,I.Bz.forChild(ce)]})}return n})()}}]);
//# sourceMappingURL=apps_concierge_src_app_building-manager_building-manager_module_ts.js.map