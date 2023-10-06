"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([[413],{9413:(_e,C,l)=>{l.r(C),l.d(C,{BuildingManagerModule:()=>ce});var c=l(4755),r=l(9401),b=l(4731),I=l(3045),L=l(2886),y=l(7577),N=l(5861),m=l(337),T=l(5912),u=l(8186),M=l(591),E=l(3426),O=l(4850),_=l(6286),e=l(2223),p=l(5306),x=l(9114),R=l(8097),G=l(787),f=l(1217),S=l(8467),A=l(7184);function P(t,o){if(1&t&&(e.TgZ(0,"mat-option",22),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.Q6J("value",n.id),e.xp6(1),e.hij(" ",n.display_name||n.name," ")}}function U(t,o){if(1&t&&(e.TgZ(0,"div",5)(1,"label",19),e.SDv(2,20),e.qZA(),e.TgZ(3,"mat-form-field",8)(4,"mat-select",21)(5,"mat-option",22),e._uU(6,"None"),e.qZA(),e.YNc(7,P,2,2,"mat-option",14),e.ALo(8,"async"),e.qZA()()()),2&t){const n=e.oxw(3);e.xp6(5),e.Q6J("value",n.default_parent),e.xp6(2),e.Q6J("ngForOf",e.lcZ(8,2,n.region_list))}}function w(t,o){if(1&t&&(e.TgZ(0,"mat-option",22),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.Q6J("value",n),e.xp6(1),e.Oqu(n)}}function F(t,o){1&t&&(e.TgZ(0,"mat-option",23),e._uU(1," No matching timezones "),e.qZA()),2&t&&e.Q6J("disabled",!0)}function z(t,o){if(1&t&&(e.TgZ(0,"form",3),e.YNc(1,U,9,4,"div",4),e.ALo(2,"async"),e.TgZ(3,"div",5)(4,"label",6),e.SDv(5,7),e.qZA(),e.TgZ(6,"mat-form-field",8),e._UZ(7,"input",9),e.qZA()(),e.TgZ(8,"div",5)(9,"label",6),e.SDv(10,10),e.qZA(),e.TgZ(11,"mat-form-field",8)(12,"app-icon",11),e._uU(13,"search"),e.qZA(),e._UZ(14,"input",12),e.qZA(),e.TgZ(15,"mat-autocomplete",null,13),e.YNc(17,w,2,2,"mat-option",14),e.YNc(18,F,2,1,"mat-option",15),e.qZA()(),e.TgZ(19,"div",5)(20,"label",16),e.SDv(21,17),e.qZA(),e.TgZ(22,"mat-form-field",8),e._UZ(23,"input",18),e.qZA()()()),2&t){const n=e.MAs(16),i=e.oxw(2);let a;e.Q6J("formGroup",i.form),e.xp6(1),e.Q6J("ngIf",null==(a=e.lcZ(2,5,i.region_list))?null:a.length),e.xp6(13),e.Q6J("matAutocomplete",n),e.xp6(3),e.Q6J("ngForOf",i.filtered_timezones),e.xp6(1),e.Q6J("ngIf",!i.timezones.length)}}function D(t,o){if(1&t&&(e.ynx(0),e.YNc(1,z,24,7,"form",2),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.form)}}function J(t,o){1&t&&(e.TgZ(0,"div",24),e._UZ(1,"mat-spinner",25),e.TgZ(2,"p",26),e._uU(3,"Saving building..."),e.qZA()())}let $=(()=>{class t extends m.cx{get default_parent(){return this._org.organisation.id}constructor(n){super(),this._org=n,this.building=null,this.save=0,this.loading=!1,this.loadingChange=new e.vpe,this.done=new e.vpe,this.timezones=[],this.filtered_timezones=[],this.form=new r.cw({id:new r.NI(""),parent_id:new r.NI(this._org.organisation.id,[r.kI.required]),display_name:new r.NI("",[r.kI.required]),timezone:new r.NI(Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone||""),location:new r.NI("")})}ngOnInit(){this._updateTimezoneList(),this.subscription("tz-change",this.form.valueChanges.subscribe(({timezone:n})=>this.filtered_timezones=this.timezones.filter(i=>i.toLowerCase().includes(n.toLowerCase())))),this.building&&this.form.patchValue(this.building)}ngOnChanges(n){n.building&&this.building&&this.form.patchValue(this.building),n.save&&this.save&&this.saveChanges()}saveChanges(){var n=this;return(0,N.Z)(function*(){if(n.form.patchValue({parent_id:n.form.value.parent_id||n._org.organisation.id}),!n.form.valid)return(0,m.cB)(`Some form fields are invalid. [${(0,m.RD)(n.form).join(", ")}]`);const i=n.form.getRawValue();n.loading=!0,n.loadingChange.emit(!0);const a={...i,tags:["building"],name:`BLD ${(0,u.N9E)().description} ${i.display_name}`},s=yield(i.id?(0,u.BfP)(i.id,a):(0,u.ri3)(a)).toPromise().catch(d=>{throw(0,m.cB)(`Error saving building: ${d.message||d.error||d}`),n.loading=!1,n.loadingChange.emit(!1),d});(0,m.t5)("Successfully saved building."),n.loading=!1,n.loadingChange.emit(!1),n.done.emit(s)})()}_updateTimezoneList(){const n=this.form?.value?.timezone||"";this.timezones=m.sM,this.filtered_timezones=this.timezones.filter(i=>i.toLowerCase().includes(n.toLowerCase()))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(T.w7))},t.\u0275cmp=e.Xpm({type:t,selectors:[["building-form"]],inputs:{building:"building",save:"save",loading:"loading"},outputs:{loadingChange:"loadingChange",done:"done"},features:[e.qOj,e.TTD],decls:3,vars:2,consts:function(){let o,n,i,a;return o=$localize`:@@displayNameLabel␟8d766661ed5e178519720ec8e959d2a737f600a6␟1377207093952578744: Display Name: `,n=$localize`:@@displayNameLabel␟dbd34479df566856113383ebef3a2cb98e494642␟7608711767660448404: Timezone: `,i=$localize`:@@displayNameLabel␟8dfcfa872af9be0ad27411537a6944e3d33a278f␟2698045878883517755: Location: `,a=$localize`:@@displayNameLabel␟88b397510643ec67156f0eb2d333d4012801a8c1␟2672381863752151894: Region: `,[[4,"ngIf","ngIfElse"],["load_state",""],["building","","class","flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]",3,"formGroup",4,"ngIf"],["building","",1,"flex","flex-col","w-[36rem]","max-w-[calc(100vw-4rem)]",3,"formGroup"],["class","flex flex-col",4,"ngIf"],[1,"flex","flex-col"],["for","display-name"],o,["appearance","outline"],["matInput","","name","display-name","placeholder","Display Name","formControlName","display_name"],n,["matPrefix","",1,"text-2xl"],["matInput","","formControlName","timezone","placeholder","Building timezone",3,"matAutocomplete"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"disabled",4,"ngIf"],["for","address"],i,["matInput","","name","address","placeholder","Location or Address...","formControlName","location"],["for","region"],a,["name","region","formControlName","parent_id","placeholder","Select Region..."],[3,"value"],[3,"disabled"],[1,"flex","flex-col","items-center","justify-center","w-64","h-64"],["diameter","32"],[1,"mt-4"]]},template:function(n,i){if(1&n&&(e.YNc(0,D,2,1,"ng-container",0),e.YNc(1,J,4,0,"ng-template",null,1,e.W1O)),2&n){const a=e.MAs(2);e.Q6J("ngIf",!i.loading)("ngIfElse",a)}},dependencies:[c.sg,c.O5,r._Y,r.Fj,r.JJ,r.JL,x.KE,x.qo,R.Nt,G.gD,f.ey,S.Ou,A.XC,A.ZL,r.sg,r.u,p.o,c.Ov]}),t})();function Y(t,o){1&t&&(e.TgZ(0,"button",4)(1,"app-icon"),e._uU(2,"close"),e.qZA()())}function Q(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"footer",5)(1,"button",6),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.save())}),e._uU(2,"Save"),e.qZA()()}}let X=(()=>{class t{constructor(n,i){this._data=n,this._dialog_ref=i,this.loading=!1,this.save_state=0,this.building=this._data,this.close=a=>this._dialog_ref.close(a),this.save=()=>this.save_state=Date.now()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(_.WI),e.Y36(_.so))},t.\u0275cmp=e.Xpm({type:t,selectors:[["building-modal"]],decls:7,vars:6,consts:[["btn","","icon","","mat-dialog-close","",4,"ngIf"],[1,"max-h-[65vh]","overflow-y-auto","overflow-x-hidden","p-4"],[3,"building","save","loading","loadingChange","done"],["class","p-2 flex justify-end border-t border-gray-200",4,"ngIf"],["btn","","icon","","mat-dialog-close",""],[1,"p-2","flex","justify-end","border-t","border-gray-200"],["btn","",1,"w-32",3,"click"]],template:function(n,i){1&n&&(e.TgZ(0,"header")(1,"h2"),e._uU(2),e.qZA(),e.YNc(3,Y,3,0,"button",0),e.qZA(),e.TgZ(4,"main",1)(5,"building-form",2),e.NdJ("loadingChange",function(s){return i.loading=s})("done",function(s){return i.close(s)}),e.qZA()(),e.YNc(6,Q,3,0,"footer",3)),2&n&&(e.xp6(2),e.hij("",i.building.id?"Edit":"Add"," Building"),e.xp6(1),e.Q6J("ngIf",!i.loading),e.xp6(2),e.Q6J("building",i.building)("save",i.save_state)("loading",i.loading),e.xp6(1),e.Q6J("ngIf",!i.loading))},dependencies:[c.O5,_.ZT,p.o,$]}),t})();var j=l(5328);let B=(()=>{class t{constructor(n,i){this._org=n,this._dialog=i,this._options=new M.X({}),this._change=new M.X(0),this.options=this._options.asObservable(),this.filtered_buildings=(0,E.aj)([this._org.region_list,this._org.building_list,this._options,this._org.initialised]).pipe((0,O.U)(([a,s,d])=>{d.zone&&(s=s.filter(g=>g.parent_id===d.zone)),d.search&&(s=s.filter(g=>g.name.toLowerCase().includes(d.search.toLowerCase())));for(const g of s){const v=a.find(ue=>ue.id===g.parent_id);v&&(g.region=v.display_name||v.name),g.level_count=this._org.levelsForBuilding(g)?.length||0}return s}))}setFilters(n){this._options.next({...this._options.getValue(),...n})}setSearchString(n){this._options.next({...this._options.getValue(),search:n})}editBuilding(n=new u.TT8){this._dialog.open(X,{data:n}).afterClosed().subscribe(a=>{a&&this._org.addZone(a)})}editBuildingMetadata(n=new u.TT8){this._dialog.open(j.K,{data:{zone:n}}).afterClosed().subscribe(a=>{a&&setTimeout(()=>location.reload(),300)})}removeBuilding(n){var i=this;return(0,N.Z)(function*(){const a=yield(0,m._5)({title:"Remove Building",content:`Are you sure you want to remove the building "${n.name}"?`,icon:{content:"delete_forever"},confirm_text:"Remove"},i._dialog);if("done"!==a.reason)return a.close();a.loading("Removing building..."),yield(0,u.Jwl)(n.id).toPromise(),i._org.removeZone({id:n.id,tags:["building"]}),(0,m.t5)("Successfully removed building."),a.close()})()}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(T.w7),e.LFG(_.uw))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var q=l(6866),K=l(3320),h=l(7406),V=l(1110),H=l(4475),W=l(3838);function k(t,o){if(1&t&&(e._uU(0),e.ALo(1,"level"),e.ALo(2,"level")),2&t){const n=o.data;let i;e.hij(" ",(null==(i=e.lcZ(1,1,n))?null:i.display_name)||(null==(i=e.lcZ(2,3,n))?null:i.name)," ")}}function ee(t,o){if(1&t&&e._UZ(0,"img",7),2&t){const n=e.oxw().data;e.Q6J("source",n[0])}}function ne(t,o){1&t&&(e.TgZ(0,"span",8),e._uU(1,"No Images"),e.qZA())}function te(t,o){if(1&t&&(e.YNc(0,ee,1,1,"img",5),e.YNc(1,ne,2,0,"span",6)),2&t){const n=o.data;e.Q6J("ngIf",n.length),e.xp6(1),e.Q6J("ngIf",!n.length)}}function ie(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"div",9)(1,"button",10)(2,"app-icon"),e._uU(3,"more_vert"),e.qZA()(),e.TgZ(4,"mat-menu",null,11)(6,"button",12),e.NdJ("click",function(){const s=e.CHM(n).row,d=e.oxw();return e.KtG(d.editBuildingMetadata(s))}),e.TgZ(7,"div",13)(8,"app-icon"),e._uU(9,"edit_square"),e.qZA(),e.TgZ(10,"span"),e._uU(11,"App Configuration"),e.qZA()()(),e.TgZ(12,"button",12),e.NdJ("click",function(){const s=e.CHM(n).row,d=e.oxw();return e.KtG(d.editBuilding(s))}),e.TgZ(13,"div",13)(14,"app-icon"),e._uU(15,"edit"),e.qZA(),e.TgZ(16,"span"),e._uU(17,"Edit Building"),e.qZA()()(),e.TgZ(18,"button",12),e.NdJ("click",function(){const s=e.CHM(n).row,d=e.oxw();return e.KtG(d.removeBuilding(s))}),e.TgZ(19,"div",14)(20,"app-icon"),e._uU(21,"delete"),e.qZA(),e.TgZ(22,"span"),e._uU(23,"Delete Building"),e.qZA()()()()()}if(2&t){const n=e.MAs(5);e.xp6(1),e.Q6J("matMenuTriggerFor",n)}}const oe=function(){return["display_name","address","timezone","region","level_count","actions"]},ae=function(){return["Name","Location","Timezone","Region","Levels"," "]},le=function(){return["12r","flex","12r","10r","6r","3.75r"]},se=function(t,o,n){return{images:t,zones:o,actions:n}};let de=(()=>{class t{constructor(n){this._manager=n,this.buildings=this._manager.filtered_buildings,this.editBuilding=i=>this._manager.editBuilding(i),this.editBuildingMetadata=i=>this._manager.editBuildingMetadata(i),this.removeBuilding=i=>this._manager.removeBuilding(i)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(B))},t.\u0275cmp=e.Xpm({type:t,selectors:[["building-list"]],decls:8,vars:12,consts:[[1,"absolute","inset-0","overflow-auto","px-4"],["empty","No buildings",1,"block","min-w-[60rem]","w-full","h-full",3,"dataSource","columns","display_column","column_size","template"],["level_template",""],["image_template",""],["action_template",""],["auth","","class","max-h-[3rem] max-w-[8rem]",3,"source",4,"ngIf"],["class","opacity-30",4,"ngIf"],["auth","",1,"max-h-[3rem]","max-w-[8rem]",3,"source"],[1,"opacity-30"],[1,"w-full","flex","justify-end","space-x-2"],["btn","","icon","","matRipple","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"flex","items-center","space-x-2"],[1,"flex","items-center","space-x-2","text-red-500"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0),e._UZ(1,"custom-table",1),e.qZA(),e.YNc(2,k,3,5,"ng-template",null,2,e.W1O),e.YNc(4,te,2,2,"ng-template",null,3,e.W1O),e.YNc(6,ie,24,1,"ng-template",null,4,e.W1O)),2&n){const a=e.MAs(3),s=e.MAs(5),d=e.MAs(7);e.xp6(1),e.Q6J("dataSource",i.buildings)("columns",e.DdM(5,oe))("display_column",e.DdM(6,ae))("column_size",e.DdM(7,le))("template",e.kEZ(8,se,s,a,d))}},dependencies:[c.O5,h.VK,h.OP,h.p6,f.wG,p.o,V.C,H.A,W.M]}),t})();const re=["app-building-manager",""];let Z=(()=>{class t{constructor(n){this._state=n,this.newBuilding=()=>this._state.editBuilding()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(B))},t.\u0275cmp=e.Xpm({type:t,selectors:[["","app-building-manager",""]],attrs:re,decls:10,vars:0,consts:[[1,"flex","flex-1","h-px"],[1,"flex","flex-col","flex-1","w-1/2","h-full"],[1,"flex","items-center","justify-between","mb-2","p-8"],[1,"text-2xl","font-medium"],["btn","","matRipple","",3,"click"],[1,"block","w-full","relative","flex-1","h-1/2"]],template:function(n,i){1&n&&(e._UZ(0,"app-topbar"),e.TgZ(1,"div",0),e._UZ(2,"app-sidebar"),e.TgZ(3,"main",1)(4,"header",2)(5,"h2",3),e._uU(6,"Building Management"),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return i.newBuilding()}),e._uU(8," Add Building "),e.qZA()(),e._UZ(9,"building-list",5),e.qZA()())},dependencies:[q.O,K.u,f.wG,de],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:#fff}sidebar[_ngcontent-%COMP%]{height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;min-width:50%;height:100%}"]}),t})();var me=l(6996);const ge=[{path:"",component:Z},{path:"new",component:Z}];let ce=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,r.u5,I.v,L.YR,y.PP,me.Hi,b.Bz.forChild(ge)]}),t})()}}]);