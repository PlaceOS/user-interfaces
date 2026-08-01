import {z}from'./chunk-DniLvAzk.js';import {f}from'./chunk-CC-Tfmip.js';import {r as re}from'./chunk-MUC-PCzQ.js';import {F as Ft}from'./chunk-BB-E0Dpk.js';import {G}from'./chunk-TOXP8SYZ.js';import'./chunk-ZM9OiO9v.js';import {N as Ne}from'./chunk-CmqRxszy.js';import {h as he,T as Te,j as je,E as Ee$1}from'./chunk-BVtM6OZC.js';import {a as an$1,u as un$1,b}from'./chunk-ZwMGeyZT.js';import {F as Fv,E as Ev,Z as Zt,Q as Qt,C as Ct,X as Xt,W as Wn}from'./chunk-CkXqEjLq.js';import {m,E as Ee,bT as Z,bU as L,B as Bt,k as ke,C as Le,a as Be$1,K as me,W as Fe,O as OT,$ as PT,cy as h$,R,w,ab as Ob,G as Gl,i as iO,h as Mtt,g as frt,U as Uue,u as ux,f as RW,bP as vue,l as lW,br as Vnt,bs as Bnt,_ as _xe,av as WV,j as uxe,n as aee,p as _rt,aC as AC,t as yi$1,v as ip,ax as RF,A as b4,z as He,D as C6,ap as Yn,aq as op,J as mv,P as Bo,Q as RC,aA as CF,S as An,T as T4,aD as lu,Y as R6,bG as D9,as as T9,at as I9,s as so,d as ot,ao as l,bi as hd,bn as Ai$1,an as m$1,aM as Kn,a5 as Dn,bj as $Le,bk as k,I as Ii$1,x as xn,M,r as we$1,a0 as rl,F as D6,af as au,ag as cu,dz as Tke,dA as yke,bx as qu,cr as om,cp as nm,cs as o2,y as yr,aa as k2,cf as gke,bw as Oi$1,bD as kb,aU as kT,bY as dit,aO as OXe,aP as wXe,aE as Ule,aV as ife,bt as pxe,bu as fxe,bv as Qp,aW as qrt,dB as le,dC as se,dD as At,b4 as j,dE as ts,dF as It,dG as E,dH as en$1,cu as re$1,dI as yn,dJ as jl,dK as bv,dL as $t,dM as vtt,bb as Et,dN as be,b2 as Zt$1,b3 as Pe,X as Ne$1,bz as Ge$1,Z as qe$1,bA as Yo,dO as Wo,bB as rn$1,dP as du,dn as Nn,dd as Hs,dQ as Mn,dR as Ae,dS as De,b1 as Qt$1,aB as bt,dx as A6,aZ as S9,bR as xA,c1 as Jy,aX as fy,aY as hy,bd as p9}from'./main.js';var yi=["*"];function wi(n,l){if(n&1&&(ke(0,"div")(1,"icon"),yi$1(2),Be$1()()),n&2){let e=bt();Hs("state center "+e.state()),me(2),Bo(" ",e.state()==="success"?"done":"close"," ");}}function Ei(n,l){n&1&&(ke(0,"div",3),Bt(1,"mat-spinner",4),Be$1()),n&2&&(me(),An("diameter",16));}var li=(()=>{class n{constructor(){this.icon=Qt$1(void 0),this.className=Qt$1("material-symbols-rounded"),this.content=Qt$1(void 0),this.loading=Qt$1(void 0),this.disabled=Qt$1(void 0),this.state=Qt$1("");}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["action-icon"]],inputs:{icon:[1,"icon"],className:[1,"className"],content:[1,"content"],loading:[1,"loading"],disabled:[1,"disabled"],state:[1,"state"]},ngContentSelectors:yi,decls:6,vars:8,consts:[["icon","","matRipple","","title","",1,"relative",3,"disabled"],["root","",3,"className","icon"],[3,"class"],[1,"loader","center"],[3,"diameter"]],template:function(t,i){t&1&&(Zt$1(),ke(0,"button",0)(1,"icon",1),yi$1(2),Pe(3),Be$1(),Le(4,wi,3,3,"div",2),Le(5,Ei,2,1,"div",3),Be$1()),t&2&&(Ne$1("success",i.state()==="success"),An("disabled",i.loading()||i.disabled()),me(),An("className",i.className())("icon",i.icon()),me(),Bo(" ",i.content()," "),me(2),Fe(!i.loading()&&i.state()?4:-1),me(),Fe(i.loading()?5:-1));},dependencies:[Gl,iO,Ct,Xt,Mtt],styles:[`.action-icon.fade[_ngcontent-%COMP%] > icon[_ngcontent-%COMP%]{opacity:.35}.success[_ngcontent-%COMP%]{pointer-events:none}.success[_ngcontent-%COMP%]   icon[root][_ngcontent-%COMP%]{opacity:.2}.state.success[_ngcontent-%COMP%]{color:#388e3c}.state.error[_ngcontent-%COMP%]{color:#e53935}
/*# sourceMappingURL=action-icon.component.css.map */`]});}}return n})();var Be="_EMERGENCY_CONTACTS_",we=(()=>{class n{constructor(){this._org=m(OT),this._change=R(Date.now()),this.category=R(null),this.asset_type=R(null),this.contacts=R([]),this.roles=R([]),ot(()=>{let e=this._org.active_building();this._change(),e&&this._load(e);}),this.ensureCategoryAndTypeExist();}async _load(e){let t=await this._queryCategory(e);this.category.set(t),this.roles.set(this._rolesFromCategory(t));let i=await this._queryAssetType(e,t);this.asset_type.set(i);let s=await this._queryContacts(e,i);this.contacts.set(s);}async _queryCategory(e){try{let{data:t}=await Tke({zone_id:e.id});return t.find(i=>i.name===Be)||null}catch{return null}}async _queryAssetType(e,t){if(!t)return null;try{let{data:i}=await yke({zone_id:e.id,q:t.name});return i.find(s=>s.name===Be&&s.category_id===t.id)||null}catch{return null}}async _queryContacts(e,t){if(!t)return [];try{let{data:i}=await he({zone_id:e.id,type_id:t.id,limit:200});return i.filter(s=>s.asset_type_id===t.id).map(s=>this.assetToContact(s))}catch{return []}}_rolesFromCategory(e){if(!e?.description)return [];try{return JSON.parse(e.description).roles||[]}catch{return []}}async _queryLegacyMetadata(e){try{let{details:t}=await qu(e.id,"emergency_contacts");return t||{contacts:[],roles:[]}}catch{return {contacts:[],roles:[]}}}async ensureCategoryExists(){await this._org.waitUntilInitialised();let e=this._org.building;if(!e)return null;let t=await this._queryCategory(e);if(t)return t;try{let i=await Te(om(new nm({name:Be,description:JSON.stringify({roles:[]}),hidden:!0}),[0,void 0,"",null]));return this._change.set(Date.now()),i}catch(i){return console.error("Failed to create emergency contacts category:",i),null}}async ensureAssetTypeExists(e){let t=this._org.building;if(!t||!e)return null;let i=await this._queryAssetType(t,e);if(i)return i;try{let s=await je({name:Be,category_id:e.id,zone_id:t.id,brand:"PlaceOS",description:"Emergency contacts for the building"});return this._change.set(Date.now()),s}catch(s){return console.error("Failed to create emergency contacts asset type:",s),null}}async ensureCategoryAndTypeExist(){let e=await this.ensureCategoryExists();return e?this.ensureAssetTypeExists(e):null}async migrateFromMetadata(){let e=this._org.building;if(!e)return  false;try{let t=await this._queryLegacyMetadata(e);if(!t?.contacts?.length&&!t?.roles?.length)return !0;let i=await this.ensureCategoryAndTypeExist();if(!i)throw new Error("Failed to create or find asset type");let s=await this._queryCategory(e);if(!s)throw new Error("Failed to find category");t.roles?.length&&await Te(om(new nm(m$1(l({},s),{hidden:!0,description:JSON.stringify({roles:t.roles})})),[0,null,void 0,""]));for(let g of t.contacts||[]){let C=this.contactToAsset(g,i.id);await Ee$1(C);}return await o2(e.id,{name:"emergency_contacts",description:"Emergency Contacts (migrated to Assets)",details:{contacts:[],roles:[],migrated:!0}}),this._change.set(Date.now()),Ob(yr("APP.CONCIERGE.CONTACTS_MIGRATION_SUCCESS")||"Successfully migrated emergency contacts."),!0}catch(t){return k2(yr("APP.CONCIERGE.CONTACTS_MIGRATION_ERROR",{error:t})||`Failed to migrate emergency contacts: ${t}`),false}}async needsMigration(){let e=this._org.building;if(!e)return  false;let t=await this._queryLegacyMetadata(e);return t&&(t.contacts?.length>0||t.roles?.length>0)?!t.migrated:false}async saveContact(e){try{let t=this.asset_type();if(t||(t=await this.ensureCategoryAndTypeExist()),!t)throw new Error("Failed to create or find asset type");let i=this.contactToAsset(e,t.id);return await Ee$1(i),this._change.set(Date.now()),Ob(yr("APP.CONCIERGE.CONTACTS_SAVE_SUCCESS")),!0}catch(t){return k2(yr("APP.CONCIERGE.CONTACTS_SAVE_ERROR",{error:t})),false}}async deleteContact(e){try{return await gke(e),this._change.set(Date.now()),Ob(yr("APP.CONCIERGE.CONTACTS_DELETE_SUCCESS")||"Successfully removed emergency contact."),!0}catch(t){return k2(yr("APP.CONCIERGE.CONTACTS_DELETE_ERROR",{error:t})||`Failed to remove emergency contact: ${t}`),false}}async updateRoles(e){try{let t=this.category();if(t||(t=await this.ensureCategoryExists()),!t)throw new Error("Failed to create or find category");return await Te(new nm(m$1(l({},t),{description:JSON.stringify({roles:e})}))),this._change.set(Date.now()),!0}catch(t){return k2(`Failed to update roles: ${t}`),false}}async addRole(e){let t=this.roles();return t.includes(e)?true:this.updateRoles([...t,e].filter(Boolean).sort((i,s)=>i.localeCompare(s)))}async removeRole(e){try{let t=this.roles(),i=this.contacts(),s=t.filter(g=>g!==e);await this.updateRoles(s);for(let g of i)if(g.roles.includes(e)){let C=m$1(l({},g),{roles:g.roles.filter(ie=>ie!==e)});await this.saveContact(C);}return !0}catch(t){return k2(`Failed to remove role: ${t}`),false}}async renameRole(e,t){try{let i=this.roles(),s=this.contacts(),g=i.map(C=>C===e?t:C).filter(Boolean).sort((C,ie)=>C.localeCompare(ie));await this.updateRoles(g);for(let C of s)if(C.roles.includes(e)){let ie=m$1(l({},C),{roles:C.roles.map(nt=>nt===e?t:nt)});await this.saveContact(ie);}return !0}catch(i){return k2(`Failed to rename role: ${i}`),false}}refresh(){this._change.set(Date.now());}assetToContact(e){let t=e.other_data,i=this._org.levelWithID(e.zones);return {id:e.id,name:e.identifier||"",email:t?.email||"",phone:t?.phone||"",roles:t?.roles||[],zone:i?.id||""}}contactToAsset(e,t){let i=e.zone?this._org.levelWithID([e.zone]):null;return {id:e.id?.startsWith("contact-")?void 0:e.id,asset_type_id:t,identifier:e.name,other_data:{email:e.email,phone:e.phone,roles:e.roles},zone_id:this._org.building.id,zones:Oi$1([this._org.organisation.id,this._org.region?.id,this._org.building.id,i?.id].filter(s=>s))}}generateContactId(){return `contact-${kb(8)}`}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"});}}return n})();var Mi=()=>({standalone:true}),Si=(n,l)=>l.id;function Ti(n,l){n&1&&(ke(0,"button",3)(1,"icon"),yi$1(2,"close"),Be$1()());}function ki(n,l){if(n&1&&(ke(0,"mat-option",20),yi$1(1),Be$1()),n&2){let e=l.$implicit;An("value",e.id),me(),Bo(" ",e.display_name||e.name," ");}}function Ri(n,l){if(n&1&&(ke(0,"mat-option",20),yi$1(1),Be$1()),n&2){let e=bt().$implicit;An("value",e),me(),Bo(" ",e," ");}}function Ii(n,l){if(n&1&&Le(0,Ri,2,2,"mat-option",20),n&2){let e=l.$implicit;Fe(e?0:-1);}}function Oi(n,l){if(n&1){let e=AC();ke(0,"main",4)(1,"form")(2,"a-user-search-field",7),He("ngModelChange",function(i){fy(e);let s=bt();return hy(s.setUser(i))}),Be$1(),b4(),ke(3,"div",8)(4,"label",9),yi$1(5),ip(6,"translate"),Be$1(),ke(7,"mat-form-field",10),Bt(8,"input",11),b4(),Be$1()(),ke(9,"div",12)(10,"div",13)(11,"label",14),yi$1(12),ip(13,"translate"),Be$1(),ke(14,"mat-form-field",10),Bt(15,"input",15),ip(16,"translate"),b4(),Be$1()(),ke(17,"div",13)(18,"label",14),yi$1(19),ip(20,"translate"),Be$1(),ke(21,"mat-form-field",10),Bt(22,"input",16),ip(23,"translate"),b4(),Be$1()()(),ke(24,"div",8)(25,"label",17),yi$1(26),ip(27,"translate"),Be$1(),ke(28,"mat-form-field",10)(29,"mat-select",18),ip(30,"translate"),ke(31,"mat-option",19),yi$1(32),ip(33,"translate"),Be$1(),C6(34,ki,2,2,"mat-option",20,Si),Be$1(),b4(),Be$1()(),ke(36,"div",8)(37,"label",21),yi$1(38),ip(39,"translate"),Be$1(),ke(40,"div",12)(41,"mat-form-field",22)(42,"mat-select",23),ip(43,"translate"),C6(44,Ii,1,1,null,null,A6),Be$1(),b4(),Be$1(),ke(46,"div",24),ip(47,"translate"),ke(48,"button",25)(49,"icon"),yi$1(50,"add"),Be$1()()()()()()();}if(n&2){let e=bt(),t=mv(9);me(2),An("ngModelOptions",S9(40,Mi)),T4(),me(3),lu(RC(6,18,"FORM.NAME")),me(3),An("formField",e.form.name),T4(),me(4),lu(RC(13,20,"FORM.EMAIL")),me(3),An("formField",e.form.email)("placeholder",RC(16,22,"FORM.EMAIL")),T4(),me(4),lu(RC(20,24,"FORM.PHONE")),me(3),An("formField",e.form.phone)("placeholder",RC(23,26,"APP.CONCIERGE.CONTACTS_PHONE_PLACEHOLDER")),T4(),me(4),lu(RC(27,28,"RESOURCE.LEVEL")),me(3),An("formField",e.form.zone)("placeholder",RC(30,30,"COMMON.LEVEL_SELECT")),T4(),me(3),lu(RC(33,32,"COMMON.LEVEL_ANY")),me(2),R6(e.levels()),me(4),lu(RC(39,34,"APP.CONCIERGE.CONTACTS_ROLES")),me(4),An("formField",e.form.roles)("placeholder",RC(43,36,"APP.CONCIERGE.CONTACTS_ROLES_SELECT")),T4(),me(2),R6(e.roles()),me(2),An("matTooltip",RC(47,38,"APP.CONCIERGE.CONTACTS_ROLES_ADD")),me(2),An("content",t);}}function Ni(n,l){n&1&&(ke(0,"main",5),Bt(1,"mat-spinner",26),ke(2,"p"),yi$1(3),ip(4,"translate"),Be$1()()),n&2&&(me(),An("diameter",48),me(2),lu(RC(4,2,"APP.CONCIERGE.CONTACTS_SAVING")));}function Ai(n,l){if(n&1){let e=AC();ke(0,"footer",6)(1,"button",27),He("click",function(){fy(e);let i=bt();return hy(i.save())}),yi$1(2),ip(3,"translate"),Be$1()();}n&2&&(me(2),Bo(" ",RC(3,1,"COMMON.SAVE")," "));}function Pi(n,l){if(n&1){let e=AC();ke(0,"div",28)(1,"mat-form-field",10)(2,"input",29),ip(3,"translate"),RF("ngModelChange",function(i){fy(e);let s=bt();return p9(s.role_name,i)||(s.role_name=i),hy(i)}),Be$1(),b4(),Be$1(),ke(4,"button",30),He("click",function(){fy(e);let i=bt();return hy(i.addRole())}),yi$1(5),ip(6,"translate"),Be$1()();}if(n&2){let e=bt();me(2),CF("ngModel",e.role_name),An("placeholder",RC(3,3,"APP.CONCIERGE.CONTACTS_ROLES_NAME")),T4(),me(3),Bo(" ",RC(6,5,"APP.CONCIERGE.CONTACTS_ROLES_SAVE")," ");}}var pi=(()=>{class n{constructor(){this._data=m(Ule),this._dialog_ref=m(kT),this._org=m(OT),this._contacts_service=m(we),this.loading=R(false),this.role_name=R(""),this.contact=this._data,this.roles=this._contacts_service.roles,this.model=R({id:this._data?.id||this._contacts_service.generateContactId(),name:this._data?.name||"",email:this._data?.email||"",phone:this._data?.phone||"",zone:this._data?.zone||"",roles:this._data?.roles||[]}),this.form=ife(this.model),this.levels=this._org.active_levels,this._tooltip=rl(dit);}async addRole(){let e=this.role_name().trim();e&&(this._tooltip().close(),this.loading.set(true),this._dialog_ref.disableClose=true,await this._contacts_service.addRole(e),this.model.update(t=>m$1(l({},t),{roles:[...t.roles||[],e]})),this.role_name.set(""),this.loading.set(false),this._dialog_ref.disableClose=false);}setUser(e){this.model.update(t=>m$1(l({},t),{name:e?.name||"",email:e?.email||"",phone:e?.phone||""}));}async save(){this.loading.set(true),this._dialog_ref.disableClose=true;let e=this.model(),t={id:e.id,name:e.name,email:e.email,phone:e.phone,zone:e.zone,roles:e.roles||[]},i=await this._contacts_service.saveContact(t);this._dialog_ref.disableClose=false,this.loading.set(false),i&&this._dialog_ref.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["emergency-contact-modal"]],viewQuery:function(t,i){t&1&&au(i._tooltip,dit,5),t&2&&cu();},decls:10,vars:6,consts:[["role_form",""],[1,"bg-base-200","sticky","top-0","z-10","m-2","w-[calc(100%-1rem)]","rounded-sm","border-none","p-2"],[1,"px-2","text-xl","font-medium"],["icon","","matRipple","","mat-dialog-close",""],[1,"w-xl","p-4"],["loading","",1,"flex","h-64","flex-col","items-center","justify-center"],[1,"border-base-200","flex","items-center","justify-end","border-t","px-4","py-2"],["ngModel","",1,"mb-4",3,"ngModelChange","ngModelOptions"],[1,"flex","flex-col"],["for","name"],["appearance","outline"],["matInput","","placeholder","Full name",3,"formField"],[1,"flex","items-center","space-x-4"],[1,"flex","flex-1","flex-col"],["for","email"],["matInput","","type","email",3,"formField","placeholder"],["matInput","","type","tel",3,"formField","placeholder"],["for","zone"],[3,"formField","placeholder"],["value",""],[3,"value"],["for","roles"],["appearance","outline",1,"no-subscript","flex-1"],["multiple","",3,"formField","placeholder"],[3,"matTooltip"],["icon","","default","","matRipple","","customTooltip","",3,"content"],[1,"mb-4",3,"diameter"],["btn","","matRipple","",1,"w-48",3,"click"],[1,"bg-base-100","rounded-sm","p-4"],["matInput","",3,"ngModelChange","ngModel","placeholder"],["btn","","matRipple","",1,"w-full",3,"click"]],template:function(t,i){t&1&&(ke(0,"header",1)(1,"h2",2),yi$1(2),ip(3,"translate"),Be$1(),Le(4,Ti,3,0,"button",3),Be$1(),Le(5,Oi,51,41,"main",4)(6,Ni,5,4,"main",5),Le(7,Ai,4,3,"footer",6),Yn(8,Pi,7,7,"ng-template",null,0,op)),t&2&&(me(2),Bo(" ",RC(3,4,i.contact?"APP.CONCIERGE.CONTACTS_EDIT":"APP.CONCIERGE.CONTACTS_NEW")," "),me(2),Fe(i.loading()?-1:4),me(),Fe(i.loading()?6:5),me(2),Fe(i.loading()?-1:7));},dependencies:[Mtt,OXe,wXe,ux,RW,Vnt,Bnt,Zt,Qt,lW,Gl,iO,_xe,pxe,WV,uxe,fxe,aee,Qp,qrt,Ct,Xt,dit,Ft,frt,Uue,_rt],encapsulation:2});}}return n})();var Di=(n,l)=>l+n;function Fi(n,l){n&1&&(ke(0,"button",3)(1,"icon"),yi$1(2,"close"),Be$1()());}function Li(n,l){if(n&1){let e=AC();ke(0,"div",5)(1,"div",10),yi$1(2),Be$1(),ke(3,"button",11),He("click",function(){let i=fy(e).$implicit,s=bt();return s.active.set(i),hy(s.role_name.set(i))}),ke(4,"icon"),yi$1(5,"edit"),Be$1()(),ke(6,"button",12),He("click",function(){let i=fy(e).$implicit,s=bt();return hy(s.removeRole(i))}),ke(7,"icon"),yi$1(8,"delete"),Be$1()()();}if(n&2){let e=l.$implicit;bt();let t=mv(16);me(2),lu(e),me(),An("content",t);}}function zi(n,l){if(n&1){let e=AC();ke(0,"div",13)(1,"mat-form-field",14)(2,"input",15),ip(3,"translate"),RF("ngModelChange",function(i){fy(e);let s=bt();return p9(s.role_name,i)||(s.role_name=i),hy(i)}),Be$1(),b4(),Be$1(),ke(4,"button",16),He("click",function(){fy(e);let i=bt();return hy(i.updateRoles())}),yi$1(5),ip(6,"translate"),Be$1()();}if(n&2){let e=bt();me(2),CF("ngModel",e.role_name),An("placeholder",RC(3,3,"APP.CONCIERGE.CONTACTS_ROLES_NAME")),T4(),me(3),Bo(" ",RC(6,5,"APP.CONCIERGE.CONTACTS_ROLES_SAVE")," ");}}var hi=(()=>{class n{constructor(){this._dialog_ref=m(kT),this._contacts_service=m(we),this.active=R(""),this.role_name=R(""),this.loading=R(false),this.roles=this._contacts_service.roles,this._tooltip=rl(dit);}async removeRole(e){e&&(this.loading.set(true),this._dialog_ref.disableClose=true,await this._contacts_service.removeRole(e),this.loading.set(false),this._dialog_ref.disableClose=false);}async updateRoles(){let e=this.role_name().trim();e&&(this.loading.set(true),this._tooltip().close(),this._dialog_ref.disableClose=true,this.active()?await this._contacts_service.renameRole(this.active(),e):await this._contacts_service.addRole(e),this.role_name.set(""),this.active.set(""),this.loading.set(false),this._dialog_ref.disableClose=false);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["role-management-modal"]],viewQuery:function(t,i){t&1&&au(i._tooltip,dit,5),t&2&&cu();},decls:17,vars:8,consts:[["role_form",""],[1,"bg-base-200","sticky","top-0","z-10","m-2","w-[calc(100%-1rem)]","rounded-sm","border-none","p-2"],[1,"px-2","text-xl","font-medium"],["icon","","matRipple","","mat-dialog-close",""],[1,"h-128","max-h-[65vh]","min-w-md","overflow-y-auto"],[1,"hover:bg-base-200:bg-base-300","border-base-200","m-2","flex","items-center","space-x-2","rounded-sm","border","p-2"],[1,"border-base-200","border-t"],["btn","","matRipple","","customTooltip","",1,"m-2","flex","w-[calc(100%-1rem)]","items-center","justify-center","space-x-2",3,"click","content"],[1,"truncate","pl-2"],[1,"text-2xl"],[1,"flex-1","truncate","px-2"],["icon","","matRipple","","customTooltip","",1,"border-secondary","text-secondary","h-12","w-12","rounded-sm","border",3,"click","content"],["icon","","matRipple","",1,"border-error","text-error","h-12","w-12","rounded-sm","border",3,"click"],[1,"bg-base-100","rounded-sm","p-4"],["appearance","outline"],["matInput","",3,"ngModelChange","ngModel","placeholder"],["btn","","matRipple","",1,"w-full",3,"click"]],template:function(t,i){if(t&1){let s=AC();ke(0,"header",1)(1,"h2",2),yi$1(2),ip(3,"translate"),Be$1(),Le(4,Fi,3,0,"button",3),Be$1(),ke(5,"main",4),C6(6,Li,9,2,"div",5,Di),Be$1(),ke(8,"footer",6)(9,"button",7),He("click",function(){return fy(s),i.active.set(""),hy(i.role_name.set(""))}),ke(10,"div",8),yi$1(11),ip(12,"translate"),Be$1(),ke(13,"icon",9),yi$1(14,"add"),Be$1()()(),Yn(15,zi,7,7,"ng-template",null,0,op);}if(t&2){let s=mv(16);me(2),Bo(" ",RC(3,4,"APP.CONCIERGE.CONTACTS_ROLES_MANAGE")," "),me(2),Fe(i.loading()?-1:4),me(2),R6(i.roles()),me(3),An("content",s),me(2),Bo(" ",RC(12,6,"APP.CONCIERGE.CONTACTS_ROLES_ADD")," ");}},dependencies:[_xe,WV,uxe,aee,OXe,wXe,Gl,iO,ux,RW,Vnt,Bnt,Mtt,dit,_rt],encapsulation:2});}}return n})();var Vi=(n,l)=>({key:"name",name:n,content:l}),Bi=(n,l)=>({key:"roles",name:n,content:l,sortable:false}),Gi=(n,l)=>({key:"zone",name:n,content:l,sortable:false}),qi=n=>({key:"actions",name:" ",content:n,size:"6rem",sortable:false}),ji=(n,l,e,t)=>[n,l,e,t],Ui=(n,l)=>l+n;function Wi(n,l){if(n&1&&(ke(0,"mat-option",19),yi$1(1),Be$1()),n&2){let e=l.$implicit;An("value",e),me(),Bo(" ",e," ");}}function $i(n,l){if(n&1){let e=AC();ke(0,"button",24),He("click",function(){let i=fy(e).row,s=bt();return hy(s.copyToClipboard(i.email))}),ke(1,"div",25),yi$1(2),Be$1(),ke(3,"div",26),yi$1(4),Be$1()();}if(n&2){let e=l.row;me(2),lu(e.name),me(2),Bo(" ",e.email," ");}}function Hi(n,l){if(n&1&&(ke(0,"span",28),yi$1(1),Be$1()),n&2){let e=l.$implicit;me(),Bo(" ",e," ");}}function Yi(n,l){if(n&1&&(ke(0,"div",27),C6(1,Hi,2,1,"span",28,D6),Be$1()),n&2){let e=l.data;me(),R6(e);}}function Qi(n,l){if(n&1&&(ke(0,"div",29),yi$1(1),ip(2,"level"),Be$1()),n&2){let e=l.data;me(),Bo(" ",e?RC(2,1,e)?.display_name:"All"," ");}}function Xi(n,l){if(n&1){let e=AC();ke(0,"div",30)(1,"button",20),ip(2,"translate"),He("click",function(){let i=fy(e).row,s=bt();return hy(s.editContact(i))}),ke(3,"icon"),yi$1(4,"edit"),Be$1()(),ke(5,"button",31),ip(6,"translate"),He("click",function(){let i=fy(e).row,s=bt();return hy(s.removeContact(i))}),ke(7,"icon"),yi$1(8,"delete"),Be$1()()();}n&2&&(me(),An("matTooltip",RC(2,2,"APP.CONCIERGE.CONTACTS_EDIT")),me(4),An("matTooltip",RC(6,4,"APP.CONCIERGE.CONTACTS_REMOVE")));}var gi=(()=>{class n{constructor(){this._org=m(OT),this._dialog=m(PT),this._clipboard=m(h$),this._contacts_service=m(we),this.search=R(""),this.role_filter=R(""),this.roles=this._contacts_service.roles,this.contacts=this._contacts_service.contacts,this.filtered_contacts=w(()=>{let e=this.role_filter();return this.contacts().filter(t=>!e||t.roles.includes(e))}),this.copyToClipboard=e=>{this._clipboard.copy(e)&&Ob("User's email copied to clipboard.");};}ngOnInit(){this.checkMigration();}async checkMigration(){if(await this._contacts_service.needsMigration()){let t=await re({title:"Migrate Emergency Contacts",content:"Emergency contacts data from the old system was found. Would you like to migrate it to the new system?",icon:{content:"sync"}},this._dialog);t.reason==="done"&&(t.loading("Migrating contacts..."),await this._contacts_service.migrateFromMetadata()),t.close();}}manageRoles(){this._dialog.open(hi,{}).afterClosed().subscribe(()=>this._contacts_service.refresh());}editContact(e){this._dialog.open(pi,{data:e}).afterClosed().subscribe(()=>this._contacts_service.refresh());}async removeContact(e){let t=await re({title:"Remove Emergency Contact",content:`Are you sure you want to remove ${e.name} from the emergency contacts?`,icon:{content:"delete"}},this._dialog);t.reason==="done"&&(t.loading("Removing contact..."),await this._contacts_service.deleteContact(e.id),t.close());}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["","app-emergency-contacts",""]],decls:50,vars:49,consts:[["person_template",""],["roles_template",""],["zone_template",""],["actions_template",""],[1,"flex","h-px","flex-1"],[1,"flex","h-full","w-1/2","flex-1","flex-col"],["topbar","",1,"flex","flex-col","px-8","py-4"],[1,"flex","items-center","justify-between"],[1,"text-2xl","font-medium"],[1,"flex","items-center","space-x-2"],["appearance","outline",1,"no-subscript"],["matPrefix","",1,"text-2xl"],["matInput","",3,"ngModelChange","ngModel","placeholder"],["btn","","matRipple","",1,"space-x-2",3,"click"],[1,"text-2xl"],[1,"pr-2"],[1,"mt-2","flex","items-center","justify-between","py-2"],[3,"ngModelChange","ngModel","placeholder"],["value",""],[3,"value"],["icon","","default","","matRipple","",3,"click","matTooltip"],[1,"h-1/2","w-full","flex-1","overflow-auto","px-8"],[1,"block","min-w-208","text-sm",3,"data","filter","empty_message","columns","sortable"],[1,"h-12","w-full"],[1,"px-4","py-2","text-left","leading-tight",3,"click"],[1,""],[1,"font-mono","text-[0.625rem]","opacity-30"],[1,"flex","flex-wrap","p-2"],[1,"bg-info","text-info-content","m-1","rounded-2xl","px-2","py-1","font-mono","text-xs"],[1,"p-4"],[1,"flex","w-full","items-center","justify-end","space-x-2","p-2"],["icon","","default","","matRipple","","error","",3,"click","matTooltip"]],template:function(t,i){if(t&1){let s=AC();Bt(0,"app-topbar"),ke(1,"div",4),Bt(2,"app-sidebar"),ke(3,"main",5)(4,"section",6)(5,"div",7)(6,"h2",8),yi$1(7),ip(8,"translate"),Be$1(),ke(9,"div",9)(10,"mat-form-field",10)(11,"icon",11),yi$1(12," search "),Be$1(),ke(13,"input",12),ip(14,"translate"),RF("ngModelChange",function(C){return fy(s),p9(i.search,C)||(i.search=C),hy(C)}),Be$1(),b4(),Be$1(),ke(15,"button",13),He("click",function(){return i.editContact()}),ke(16,"icon",14),yi$1(17,"add"),Be$1(),ke(18,"div",15),yi$1(19),ip(20,"translate"),Be$1()()()(),ke(21,"div",16)(22,"mat-form-field",10)(23,"mat-select",17),ip(24,"translate"),RF("ngModelChange",function(C){return fy(s),p9(i.role_filter,C)||(i.role_filter=C),hy(C)}),ke(25,"mat-option",18),yi$1(26),ip(27,"translate"),Be$1(),C6(28,Wi,2,2,"mat-option",19,Ui),Be$1(),b4(),Be$1(),ke(30,"div",9)(31,"button",20),ip(32,"translate"),He("click",function(){return i.manageRoles()}),ke(33,"icon"),yi$1(34,"list_alt"),Be$1()()()()(),ke(35,"section",21),Bt(36,"simple-table",22),ip(37,"translate"),ip(38,"translate"),ip(39,"translate"),ip(40,"translate"),Bt(41,"div",23),Yn(42,$i,5,2,"ng-template",null,0,op)(44,Yi,3,0,"ng-template",null,1,op)(46,Qi,3,3,"ng-template",null,2,op)(48,Xi,9,6,"ng-template",null,3,op),Be$1()()();}if(t&2){let s=mv(43),g=mv(45),C=mv(47),ie=mv(49);me(7),Bo(" ",RC(8,13,"APP.CONCIERGE.CONTACTS_HEADER")," "),me(6),CF("ngModel",i.search),An("placeholder",RC(14,15,"APP.CONCIERGE.CONTACTS_FILTER")),T4(),me(6),Bo(" ",RC(20,17,"APP.CONCIERGE.CONTACTS_ADD")," "),me(4),CF("ngModel",i.role_filter),An("placeholder",RC(24,19,"APP.CONCIERGE.CONTACTS_ROLES_ALL")),T4(),me(3),lu(RC(27,21,"APP.CONCIERGE.CONTACTS_ROLES_ALL")),me(2),R6(i.roles()),me(3),An("matTooltip",RC(32,23,"APP.CONCIERGE.CONTACTS_ROLES_MANAGE")),me(5),An("data",i.filtered_contacts())("filter",i.search())("empty_message",RC(37,25,i.search()?"APP.CONCIERGE.CONTACTS_SEARCH_EMPTY":"APP.CONCIERGE.CONTACTS_EMPTY"))("columns",D9(44,ji,I9(33,Vi,RC(38,27,"COMMON.PERSON"),s),I9(36,Bi,RC(39,29,"APP.CONCIERGE.CONTACTS_ROLES"),g),I9(39,Gi,RC(40,31,"RESOURCE.LEVEL"),C),T9(42,qi,ie)))("sortable",true);}},dependencies:[Gl,iO,Mtt,frt,Uue,Ne,ux,RW,vue,Zt,Qt,lW,Vnt,Bnt,Fv,Ev,_xe,WV,uxe,aee,_rt,f],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--base-100)}
/*# sourceMappingURL=emergency-contacts.component.css.map */`]});}}return n})();var te=(()=>{class n extends so{constructor(){super(),this._org=m(OT),this._onsite={},this._events={},this._users=R([]),this._poll=R(0),this.loading=R(false),this.filters=R({}),this.search=R(""),this.user_events=R({}),this.filtered_users=w(()=>{let e=this.search(),t=this._users(),i=this.filters();return t.filter(s=>(!e||s.name.toLowerCase().includes(e)||s.email.toLowerCase().includes(e))&&(!i.only_onsite||this._onsite[s.email]))}),this.loadUsers(),ot(()=>{this._org.active_building(),this._poll(),this.timeout("load-events",()=>this._loadEvents(),300);});}setFilters(e){this.filters.set(l(l({},this.filters()),e));}setSearchString(e){this.search.set(e);}startPolling(e=3*hd){let t=Math.max(e,3*hd);this._poll.update(i=>i+1),this.interval("poll",()=>this._poll.update(i=>i+1),t);}stopPolling(){this.clearInterval("poll");}async checkin(e){let t=await an$1({booking_start:Math.floor(new Date().valueOf()/1e3),booking_end:Math.floor(Ai$1(new Date).valueOf()/1e3),asset_id:e.email,title:"Checked-in Onsite",description:this._org.building.display_name||this._org.building.name,zones:[this._org.building.id],booking_type:"staff"});await un$1(t.id,true),this._events[e.email]=t,this._onsite[e.email]=true;}async checkout(e){let t=this._events[e.email];if(t){let i=await an$1(m$1(l({},t.toJSON()),{booking_end:Math.floor(new Date().valueOf()/1e3)}));await un$1(i.id,false),this._events[e.email]=i,this._onsite[e.email]=false;}}async _loadEvents(){this.loading.set(true);let e=await b({period_start:Kn(Dn(Date.now())),period_end:Kn(Ai$1(Date.now())),type:"staff"}),t={},i=new Date().valueOf();for(let s of e)$Le(i,i,s.date,s.date+s.duration*60*1e3)&&(t[s.asset_id]=s.checked_in,this._events[s.asset_id]=s);this._onsite=t,this.user_events.set(t),this.loading.set(false);}async loadUsers(){let e=await G("");e.sort((t,i)=>t.name.localeCompare(i.name)),this._users.set(e);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"});}}return n})();function Ji(n,l){n&1&&(ke(0,"div",5),yi$1(1),ip(2,"translate"),Be$1()),n&2&&(me(),Bo(" ",RC(2,1,"APP.CONCIERGE.DIRECTORY_ONSITE")," "));}function Zi(n,l){if(n&1){let e=AC();ke(0,"div",0),Bt(1,"a-user-avatar",1),ke(2,"div",2)(3,"div",3),yi$1(4),Be$1(),ke(5,"div",4),yi$1(6),Be$1()(),Le(7,Ji,3,3,"div",5),ke(8,"div",6)(9,"action-icon",7),ip(10,"translate"),He("click",function(){fy(e);let i=bt();return hy(i.onsite()?i.checkout():i.checkin())}),Be$1(),ke(11,"a",8),ip(12,"translate"),ke(13,"icon"),yi$1(14,"email"),Be$1()(),ke(15,"a",8),ip(16,"translate"),ke(17,"icon"),yi$1(18,"call"),Be$1()()()();}if(n&2){let e=bt();me(),An("user",e.user()),me(3),lu(e.user()?.name),me(2),Bo(" ",e.user()?.email," "),me(),Fe(e.onsite()?7:-1),me(2),An("matTooltip",RC(10,13,e.onsite()?"COMMON.CHECK_IN":"COMMON.CHECK_OUT"))("loading",e.loading())("content",e.onsite()?"event_busy":"event_available"),me(2),An("matTooltip",RC(12,15,"APP.CONCIERGE.DIRECTORY_EMAIL"))("href","mailto:"+e.user()?.email,Jy),Ge$1("disabled",!e.user()?.email),me(4),An("matTooltip",RC(16,17,"APP.CONCIERGE.DIRECTORY_PHONE"))("href","tel:"+e.user()?.phone,Jy),Ge$1("disabled",!e.user()?.phone);}}var _i=(()=>{class n{constructor(){this._state=m(te),this.user=Qt$1(void 0),this.onsite=Qt$1(void 0),this.loading=R(false),this.checkin=async()=>{this.loading.set(true),await this._state.checkin(this.user()).catch(e=>k2(yr("APP.CONCIERGE.DIRECTORY_CHECKIN_ERROR",{error:e}))),this.loading.set(false);},this.checkout=async()=>{this.loading.set(true),await this._state.checkout(this.user()).catch(e=>yr("APP.CONCIERGE.DIRECTORY_CHECKOUT_ERROR",{error:e})),this.loading.set(false);};}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["staff-details"]],inputs:{user:[1,"user"],onsite:[1,"onsite"]},decls:1,vars:1,consts:[["details","",1,"border-base-200","bg-base-100","flex","w-full","items-center","border-b","px-4","py-2","hover:opacity-80"],[3,"user"],[1,"flex","flex-1","flex-col"],[1,"px-2"],[1,"text-opacity-50","px-2","text-xs"],[1,"px-4","text-xs","opacity-50"],[1,"flex","items-center"],[3,"click","matTooltip","loading","content"],["icon","","matRipple","",3,"matTooltip","href"]],template:function(t,i){t&1&&Le(0,Zi,19,19,"div",0),t&2&&Fe(i.user()?0:-1);},dependencies:[Wn,li,Mtt,frt,Uue,_rt],encapsulation:2});}}return n})();var en=["container"];function tn(n,l){if(n&1){let e=AC();ke(0,"div",6),He("click",function(){let i=fy(e).$implicit,s=bt();return hy(s.scrollTo(i))}),yi$1(1),Be$1();}if(n&2){let e=l.$implicit,t=bt();Ne$1("disabled",t.user_list()[e].length<=0)("active",e===t.active_group()),me(),Bo(" ",e," ");}}function nn(n,l){if(n&1&&Bt(0,"staff-details",8),n&2){let e=l.$implicit,t=l.$index,i=bt(2).$implicit,s=bt(2);An("id","letter-"+i+"-"+t)("user",e)("onsite",s.events()?s.events()[e.email]:false);}}function an(n,l){if(n&1&&(ke(0,"div",7),yi$1(1),Be$1(),C6(2,nn,1,3,"staff-details",8,D6)),n&2){let e=bt().$implicit,t=bt(2);An("id","letter-"+(e==="#"?"0":e)),me(),Bo(" ",e," "),me(),R6(t.user_list()[e]);}}function on(n,l){if(n&1&&Le(0,an,4,2),n&2){let e=l.$implicit,t=bt(2);Fe(t.user_list()[e].length?0:-1);}}function rn(n,l){if(n&1&&C6(0,on,1,1,null,null,D6),n&2){let e=bt();R6(e.groups);}}function sn(n,l){n&1&&(ke(0,"div",4)(1,"p"),yi$1(2),ip(3,"translate"),Be$1()()),n&2&&(me(2),Bo(" ",RC(3,1,"APP.CONCIERGE.DIRECTORY_SEARCH_EMPTY")," "));}function ln(n,l){n&1&&Bt(0,"mat-progress-bar",5);}var Ge="#abcdefghijklmnopqrstuvwxyz".split(""),ui=(()=>{class n extends so{constructor(){super(),this._state=m(te),this.active_group=R("#"),this.groups=Ge,this.events=this._state.user_events,this.loading=this._state.loading,this.filtered_users=this._state.filtered_users,this.user_count=w(()=>this.filtered_users().length),this.user_list=w(()=>{let e=this.filtered_users()||[],t={};for(let i of Ge)t[i]=e.filter(s=>s.name.toLowerCase()[0].startsWith(i)||i==="#"&&!Ge.includes(s.name.toLowerCase()[0]));return t}),this._el=rl("container"),ot(()=>{this.user_list(),this.timeout("scroll",()=>this.onScroll({}),30);});}onScroll(e){let t=this._el();if(!t)return;let i=t.nativeElement.scrollTop;for(let s of Ge){let g=document.querySelector(`#letter-${s==="#"?"0":s}`);if(g){if(g.offsetTop-i>0)break;this.active_group.set(s);}}}scrollTo(e){let t=document.querySelector(`#letter-${e}-0`);t&&(t.scrollIntoView({behavior:"smooth",block:"center"}),this.active_group.set(e));}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["staff-listings"]],viewQuery:function(t,i){t&1&&au(i._el,en,5),t&2&&cu();},features:[we$1],decls:8,vars:2,consts:[["container",""],[1,"flex","w-full","items-center","justify-center","p-2"],["letter","",1,"flex","h-6","w-6","cursor-pointer","items-center","justify-center","text-xs","capitalize",3,"disabled","active"],[1,"relative","w-full","flex-1","overflow-auto",2,"height","50%",3,"scroll"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center"],["mode","indeterminate"],["letter","",1,"flex","h-6","w-6","cursor-pointer","items-center","justify-center","text-xs","capitalize",3,"click"],["group","",1,"border-base-300","bg-base-200","sticky","top-0","z-10","m-2","rounded-lg","border","text-sm","font-medium","capitalize",3,"id"],[3,"id","user","onsite"]],template:function(t,i){t&1&&(ke(0,"div",1),C6(1,tn,2,5,"div",2,D6),Be$1(),ke(3,"div",3,0),He("scroll",function(g){return i.onScroll(g)}),Le(5,rn,2,0)(6,sn,4,3,"div",4),Be$1(),Le(7,ln,1,0,"mat-progress-bar",5)),t&2&&(me(),R6(i.groups),me(4),Fe(i.user_count()?5:6),me(2),Fe(i.loading()?7:-1));},dependencies:[Z,L,_i,_rt],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:50%}[letter][_ngcontent-%COMP%]{transition:font-size .2s,color .2s}[group][_ngcontent-%COMP%]{border-color:#ccc;padding:.5rem 1.65rem}.disabled[_ngcontent-%COMP%]{opacity:.2;pointer-events:none}.active[_ngcontent-%COMP%]{font-size:1.25rem;opacity:1;color:#d81b60}
/*# sourceMappingURL=staff-listing.component.css.map */`]});}}return n})();var cn=["switch"],dn=["*"];function mn(n,l){n&1&&(ke(0,"span",11),xA(),ke(1,"svg",13),Bt(2,"path",14),Be$1(),ke(3,"svg",15),Bt(4,"path",16),Be$1()());}var pn=new E("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:false,hideIcon:false,disabledInteractive:false})}),qe=class{source;checked;constructor(l,e){this.source=l,this.checked=e;}},it=(()=>{class n{_elementRef=m(j);_focusMonitor=m(ts);_changeDetectorRef=m(It);defaults=m(pn);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=false;_createChangeEvent(e){return new qe(this,e)}_labelId;get buttonId(){return `${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus();}_noopAnimations=en$1();_focused=false;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=false;color;disabled=false;disableRipple=false;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck();}hideIcon;disabledInteractive;change=new re$1;toggleChange=new re$1;get inputId(){return `${this.id||this._uniqueId}-input`}constructor(){m(yn).load(jl);let e=m(new bv("tabindex"),{optional:true}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=m($t).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??false,this.disabledInteractive=t.disabledInteractive??false,this._labelId=this._uniqueId+"-label";}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,true).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=true,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=false,this._onTouched(),this._changeDetectorRef.markForCheck();});});}ngOnChanges(e){e.required&&this._validatorOnChange();}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef);}writeValue(e){this.checked=!!e;}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouched=e;}validate(e){return this.required&&e.value!==true?{required:true}:null}registerOnValidatorChange(e){this._validatorOnChange=e;}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck();}toggle(){this.checked=!this.checked,this._onChange(this.checked);}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked));}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new qe(this,this.checked))));}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ee({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(t,i){if(t&1&&Mn(cn,5),t&2){let s;Ae(s=De())&&(i._switchElement=s.first);}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,i){t&2&&(Nn("id",i.id),Ge$1("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Hs(i.color?"mat-"+i.color:""),Ne$1("mat-mdc-slide-toggle-focused",i._focused)("mat-mdc-slide-toggle-checked",i.checked)("_mat-animation-noopable",i._noopAnimations));},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",be],color:"color",disabled:[2,"disabled","disabled",be],disableRipple:[2,"disableRipple","disableRipple",be],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:du(e)],checked:[2,"checked","checked",be],hideIcon:[2,"hideIcon","hideIcon",be],disabledInteractive:[2,"disabledInteractive","disabledInteractive",be]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[qe$1([{provide:Yo,useExisting:rn$1(()=>n),multi:true},{provide:Wo,useExisting:n,multi:true}]),Et],ngContentSelectors:dn,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,i){if(t&1&&(Zt$1(),ke(0,"div",1)(1,"button",2,0),He("click",function(){return i._handleClick()}),Bt(3,"div",3)(4,"span",4),ke(5,"span",5)(6,"span",6)(7,"span",7),Bt(8,"span",8),Be$1(),ke(9,"span",9),Bt(10,"span",10),Be$1(),Le(11,mn,5,0,"span",11),Be$1()()(),ke(12,"label",12),He("click",function(g){return g.stopPropagation()}),Pe(13),Be$1()()),t&2){let s=mv(2);An("labelPosition",i.labelPosition),me(),Ne$1("mdc-switch--selected",i.checked)("mdc-switch--unselected",!i.checked)("mdc-switch--checked",i.checked)("mdc-switch--disabled",i.disabled)("mat-mdc-slide-toggle-disabled-interactive",i.disabledInteractive),An("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex)("disabled",i.disabled&&!i.disabledInteractive),Ge$1("id",i.buttonId)("name",i.name)("aria-label",i.ariaLabel)("aria-labelledby",i._getAriaLabelledBy())("aria-describedby",i.ariaDescribedby)("aria-required",i.required||null)("aria-checked",i.checked)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),me(9),An("matRippleTrigger",s)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",true),me(),Fe(i.hideIcon?-1:11),me(),An("for",i.buttonId),Ge$1("id",i._labelId);}},dependencies:[iO,vtt],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return n})(),fi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=le({type:n});static \u0275inj=se({imports:[it,At]})}return n})();var gn=(n,l)=>l.id;function _n(n,l){if(n&1&&(ke(0,"mat-option",3),yi$1(1),Be$1()),n&2){let e=l.$implicit;An("value",e.id),me(),Bo(" ",e.display_name||e.name," ");}}var vi=(()=>{class n extends so{constructor(){super(),this._state=m(te),this._org=m(OT),this._route=m(Ii$1),this._router=m(xn),this.zones=R([]),this.levels=R([]),this.filters=R({}),this.setDate=e=>this._state.setFilters({date:e}),this.setFilters=e=>this._state.setFilters(e),this.setSearch=e=>this._state.setSearchString(e),this.updateZones=e=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:e.join(",")},queryParamsHandling:"merge"}),this._state.setFilters({zones:e});},ot(()=>{this.filters.set(this._state.filters()||{});}),ot(()=>{let e=this._org.active_levels()||[];M(()=>{this.levels.set(e);let t=this.zones().filter(i=>e.find(s=>s.id===i));!t.length&&e.length&&t.push(e[0].id),this.zones.set(t),this.updateZones(t);});});}async ngOnInit(){await this._org.waitUntilInitialised(),this.subscription("route.query",this._route.queryParamMap.subscribe(e=>{if(e.has("zone_ids")){let t=e.get("zone_ids").split(",");if(t.length){let i=this._org.levelWithID(t);if(!i)return;this._org.building=this._org.buildings.find(s=>s.id===i.parent_id),this.zones.set(t);}}})),this.setSearch("");}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["staff-topbar"]],features:[we$1],decls:12,vars:8,consts:[[1,"border-base-200","bg-base-100","flex","items-center","space-x-4","border-b","p-4"],["appearance","outline",1,"no-subscript","w-48"],["multiple","",3,"ngModelChange","ngModel","placeholder"],[3,"value"],[1,"m-2",3,"ngModelChange","ngModel"],[1,"text-xs"],[1,"w-2","flex-1"],[1,"mr-2",3,"modelChange"]],template:function(t,i){t&1&&(ke(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),ip(3,"translate"),RF("ngModelChange",function(g){return p9(i.zones,g)||(i.zones=g),g}),He("ngModelChange",function(g){return i.updateZones(g)}),C6(4,_n,2,2,"mat-option",3,gn),Be$1(),b4(),Be$1(),ke(6,"mat-slide-toggle",4),He("ngModelChange",function(g){return i.setFilters({only_onsite:g})}),ke(7,"div",5),yi$1(8),ip(9,"translate"),Be$1()(),b4(),Bt(10,"div",6),ke(11,"searchbar",7),He("modelChange",function(g){return i.setSearch(g)}),Be$1()()),t&2&&(me(2),CF("ngModel",i.zones),An("placeholder",RC(3,4,"COMMON.LEVEL_ALL")),T4(),me(2),R6(i.levels()),me(2),An("ngModel",i.filters()?.only_onsite),T4(),me(2),Bo(" ",RC(9,6,"APP.CONCIERGE.DIRECTORY_ONSITE_ONLY")," "));},dependencies:[fi,it,z,ux,RW,Zt,Qt,lW,_xe,uxe,aee,_rt],styles:[`mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}
/*# sourceMappingURL=staff-topbar.component.css.map */`]});}}return n})();function un(n,l){n&1&&Bt(0,"mat-progress-bar",4);}var bi=(()=>{class n{constructor(){this._state=m(te),this.loading=this._state.loading;}ngOnInit(){this._state.startPolling();}ngOnDestroy(){this._state.stopPolling();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["","app-new-staff",""]],decls:7,vars:1,consts:[[1,"flex","h-px","flex-1"],[1,"flex","h-full","w-1/2","flex-1","flex-col"],[1,"w-full"],[1,"h-0","w-full","flex-1"],["mode","indeterminate",1,"w-full"]],template:function(t,i){t&1&&(Bt(0,"app-topbar"),ke(1,"div",0),Bt(2,"app-sidebar"),ke(3,"main",1),Bt(4,"staff-topbar",2)(5,"staff-listings",3),Le(6,un,1,0,"mat-progress-bar",4),Be$1()()),t&2&&(me(6),Fe(i.loading()?6:-1));},dependencies:[Z,L,Fv,Ev,vi,ui],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--base-100)}
/*# sourceMappingURL=staff.component.css.map */`]});}}return n})();var Ro=[{path:"",component:bi,title:"Staff"},{path:"emergency-contacts",component:gi,title:"Emergency Contacts"}];export{Ro as ROUTES};//# sourceMappingURL=staff.routes-CbdbevIS.js.map
