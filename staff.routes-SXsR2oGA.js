import {z}from'./chunk-f8L_pGjZ.js';import {f}from'./chunk-CvCIThkI.js';import {r as re}from'./chunk-D7cvuVyh.js';import {k as kt}from'./chunk-BIdEDJxY.js';import {G}from'./chunk-BT2NtJMp.js';import'./chunk-DGfLVdKV.js';import {N as Ne}from'./chunk-C2yyLB4d.js';import {h as he,T as Te,j as je,E as Ee}from'./chunk-DUWW_tcg.js';import {e as en$1,r as rn$1,U}from'./chunk-TGyiXgQQ.js';import {Z as Zv,H as Hv,i as ii,t as ti,f as Ta,T as Tt,b as Zt,Y as Yn}from'./chunk-cBwrz24e.js';import {m,I as Ie,bT as Z,bU as L,Y as Yt,k as ke,F as Fe,V as Ve,t as _e,v as Ue,p as pT,Q as yT,cx as L2,R,w,aa as _b,H as Hl,g as V0,f as pet,K as Ktt,e as kde,d as VM,G as GY,bP as mde,T as TY,br as Ttt,bs as Stt,n as nMe,au as SV,X as XNe,A as AJ,i as ent,aB as oC,j as bi$1,l as cC,aw as iF,L as L8,o as Ye,q as G4,ao as Ei$1,ap as uC,r as nE,U as Uo,Z as Z6,az as rF,N as Nr,u as U8,aC as ou,$ as $4,bG as H6,ar as U6,as as B6,z as zs,h as ht,an as l,bi as Sg,bn as Ci,am as m$1,aL as Kn,a3 as Dn,bj as RPe,bk as P,D as Di$1,x as xn,M,P as Pe,S as np,ae as eE,af as tE,dy as lxe,dz as ixe,bx as cb,co as Zp,cw as Wp,cp as OH,_ as _r,a9 as o2,ce as nxe,bw as Mi$1,bD as bb,aT as _T,aN as pQe,aO as hQe,aD as Hce,aU as eue,bt as tMe,bu as JNe,bv as Gp,aV as Nnt,dA as ae,dB as oe,dC as St,b3 as Y,dD as Qo,dE as wt,dF as v,dG as Qt,cr as ne,dH as En,dI as Vl,dJ as cE,dK as Lt,dL as eet,ba as Ct,dM as Ee$1,b1 as gn$1,b2 as Le,O as Oe,bz as $e,y as st,bA as Ga,dN as zo,bB as An,dO as su,dm as Nn,dc as Ps,dP as Mn,dQ as Ae,dR as De,E as H4,b0 as to,aA as Wt,dw as V4,aY as F6,bR as mA,c0 as Uy,aW as Q_,aX as X_,bc as w6}from'./main.js';var yi=["*"];function wi(n,l){if(n&1&&(ke(0,"div")(1,"icon"),bi$1(2),Ve()()),n&2){let e=Wt();Ps("state center "+e.state()),_e(2),Uo(" ",e.state()==="success"?"done":"close"," ");}}function Ei(n,l){n&1&&(ke(0,"div",3),Yt(1,"mat-spinner",4),Ve()),n&2&&(_e(),Nr("diameter",16));}var li=(()=>{class n{constructor(){this.icon=to(void 0),this.className=to("material-symbols-rounded"),this.content=to(void 0),this.loading=to(void 0),this.disabled=to(void 0),this.state=to("");}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["action-icon"]],inputs:{icon:[1,"icon"],className:[1,"className"],content:[1,"content"],loading:[1,"loading"],disabled:[1,"disabled"],state:[1,"state"]},ngContentSelectors:yi,decls:6,vars:8,consts:[["icon","","matRipple","","title","",1,"relative",3,"disabled"],["root","",3,"className","icon"],[3,"class"],[1,"loader","center"],[3,"diameter"]],template:function(t,i){t&1&&(gn$1(),ke(0,"button",0)(1,"icon",1),bi$1(2),Le(3),Ve(),Fe(4,wi,3,3,"div",2),Fe(5,Ei,2,1,"div",3),Ve()),t&2&&(Oe("success",i.state()==="success"),Nr("disabled",i.loading()||i.disabled()),_e(),Nr("className",i.className())("icon",i.icon()),_e(),Uo(" ",i.content()," "),_e(2),Ue(!i.loading()&&i.state()?4:-1),_e(),Ue(i.loading()?5:-1));},dependencies:[Hl,V0,Tt,Zt,pet],styles:[`.action-icon.fade[_ngcontent-%COMP%] > icon[_ngcontent-%COMP%]{opacity:.35}.success[_ngcontent-%COMP%]{pointer-events:none}.success[_ngcontent-%COMP%]   icon[root][_ngcontent-%COMP%]{opacity:.2}.state.success[_ngcontent-%COMP%]{color:#388e3c}.state.error[_ngcontent-%COMP%]{color:#e53935}
/*# sourceMappingURL=action-icon.component.css.map */`]});}}return n})();var Be="_EMERGENCY_CONTACTS_",we=(()=>{class n{constructor(){this._org=m(pT),this._change=R(Date.now()),this.category=R(null),this.asset_type=R(null),this.contacts=R([]),this.roles=R([]),ht(()=>{let e=this._org.active_building();this._change(),e&&this._load(e);}),this.ensureCategoryAndTypeExist();}async _load(e){let t=await this._queryCategory(e);this.category.set(t),this.roles.set(this._rolesFromCategory(t));let i=await this._queryAssetType(e,t);this.asset_type.set(i);let s=await this._queryContacts(e,i);this.contacts.set(s);}async _queryCategory(e){try{let{data:t}=await lxe({zone_id:e.id});return t.find(i=>i.name===Be)||null}catch{return null}}async _queryAssetType(e,t){if(!t)return null;try{let{data:i}=await ixe({zone_id:e.id,q:t.name});return i.find(s=>s.name===Be&&s.category_id===t.id)||null}catch{return null}}async _queryContacts(e,t){if(!t)return [];try{let{data:i}=await he({zone_id:e.id,type_id:t.id,limit:200});return i.filter(s=>s.asset_type_id===t.id).map(s=>this.assetToContact(s))}catch{return []}}_rolesFromCategory(e){if(!e?.description)return [];try{return JSON.parse(e.description).roles||[]}catch{return []}}async _queryLegacyMetadata(e){try{let{details:t}=await cb(e.id,"emergency_contacts");return t||{contacts:[],roles:[]}}catch{return {contacts:[],roles:[]}}}async ensureCategoryExists(){await this._org.waitUntilInitialised();let e=this._org.building;if(!e)return null;let t=await this._queryCategory(e);if(t)return t;try{let i=await Te(Zp(new Wp({name:Be,description:JSON.stringify({roles:[]}),hidden:!0}),[0,void 0,"",null]));return this._change.set(Date.now()),i}catch(i){return console.error("Failed to create emergency contacts category:",i),null}}async ensureAssetTypeExists(e){let t=this._org.building;if(!t||!e)return null;let i=await this._queryAssetType(t,e);if(i)return i;try{let s=await je({name:Be,category_id:e.id,zone_id:t.id,brand:"PlaceOS",description:"Emergency contacts for the building"});return this._change.set(Date.now()),s}catch(s){return console.error("Failed to create emergency contacts asset type:",s),null}}async ensureCategoryAndTypeExist(){let e=await this.ensureCategoryExists();return e?this.ensureAssetTypeExists(e):null}async migrateFromMetadata(){let e=this._org.building;if(!e)return  false;try{let t=await this._queryLegacyMetadata(e);if(!t?.contacts?.length&&!t?.roles?.length)return !0;let i=await this.ensureCategoryAndTypeExist();if(!i)throw new Error("Failed to create or find asset type");let s=await this._queryCategory(e);if(!s)throw new Error("Failed to find category");t.roles?.length&&await Te(Zp(new Wp(m$1(l({},s),{hidden:!0,description:JSON.stringify({roles:t.roles})})),[0,null,void 0,""]));for(let g of t.contacts||[]){let C=this.contactToAsset(g,i.id);await Ee(C);}return await OH(e.id,{name:"emergency_contacts",description:"Emergency Contacts (migrated to Assets)",details:{contacts:[],roles:[],migrated:!0}}),this._change.set(Date.now()),_b(_r("APP.CONCIERGE.CONTACTS_MIGRATION_SUCCESS")||"Successfully migrated emergency contacts."),!0}catch(t){return o2(_r("APP.CONCIERGE.CONTACTS_MIGRATION_ERROR",{error:t})||`Failed to migrate emergency contacts: ${t}`),false}}async needsMigration(){let e=this._org.building;if(!e)return  false;let t=await this._queryLegacyMetadata(e);return t&&(t.contacts?.length>0||t.roles?.length>0)?!t.migrated:false}async saveContact(e){try{let t=this.asset_type();if(t||(t=await this.ensureCategoryAndTypeExist()),!t)throw new Error("Failed to create or find asset type");let i=this.contactToAsset(e,t.id);return await Ee(i),this._change.set(Date.now()),_b(_r("APP.CONCIERGE.CONTACTS_SAVE_SUCCESS")),!0}catch(t){return o2(_r("APP.CONCIERGE.CONTACTS_SAVE_ERROR",{error:t})),false}}async deleteContact(e){try{return await nxe(e),this._change.set(Date.now()),_b(_r("APP.CONCIERGE.CONTACTS_DELETE_SUCCESS")||"Successfully removed emergency contact."),!0}catch(t){return o2(_r("APP.CONCIERGE.CONTACTS_DELETE_ERROR",{error:t})||`Failed to remove emergency contact: ${t}`),false}}async updateRoles(e){try{let t=this.category();if(t||(t=await this.ensureCategoryExists()),!t)throw new Error("Failed to create or find category");return await Te(new Wp(m$1(l({},t),{description:JSON.stringify({roles:e})}))),this._change.set(Date.now()),!0}catch(t){return o2(`Failed to update roles: ${t}`),false}}async addRole(e){let t=this.roles();return t.includes(e)?true:this.updateRoles([...t,e].filter(Boolean).sort((i,s)=>i.localeCompare(s)))}async removeRole(e){try{let t=this.roles(),i=this.contacts(),s=t.filter(g=>g!==e);await this.updateRoles(s);for(let g of i)if(g.roles.includes(e)){let C=m$1(l({},g),{roles:g.roles.filter(ie=>ie!==e)});await this.saveContact(C);}return !0}catch(t){return o2(`Failed to remove role: ${t}`),false}}async renameRole(e,t){try{let i=this.roles(),s=this.contacts(),g=i.map(C=>C===e?t:C).filter(Boolean).sort((C,ie)=>C.localeCompare(ie));await this.updateRoles(g);for(let C of s)if(C.roles.includes(e)){let ie=m$1(l({},C),{roles:C.roles.map(nt=>nt===e?t:nt)});await this.saveContact(ie);}return !0}catch(i){return o2(`Failed to rename role: ${i}`),false}}refresh(){this._change.set(Date.now());}assetToContact(e){let t=e.other_data,i=this._org.levelWithID(e.zones);return {id:e.id,name:e.identifier||"",email:t?.email||"",phone:t?.phone||"",roles:t?.roles||[],zone:i?.id||""}}contactToAsset(e,t){let i=e.zone?this._org.levelWithID([e.zone]):null;return {id:e.id?.startsWith("contact-")?void 0:e.id,asset_type_id:t,identifier:e.name,other_data:{email:e.email,phone:e.phone,roles:e.roles},zone_id:this._org.building.id,zones:Mi$1([this._org.organisation.id,this._org.region?.id,this._org.building.id,i?.id].filter(s=>s))}}generateContactId(){return `contact-${bb(8)}`}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"});}}return n})();var Mi=()=>({standalone:true}),Si=(n,l)=>l.id;function Ti(n,l){n&1&&(ke(0,"button",3)(1,"icon"),bi$1(2,"close"),Ve()());}function ki(n,l){if(n&1&&(ke(0,"mat-option",20),bi$1(1),Ve()),n&2){let e=l.$implicit;Nr("value",e.id),_e(),Uo(" ",e.display_name||e.name," ");}}function Ri(n,l){if(n&1&&(ke(0,"mat-option",20),bi$1(1),Ve()),n&2){let e=Wt().$implicit;Nr("value",e),_e(),Uo(" ",e," ");}}function Ii(n,l){if(n&1&&Fe(0,Ri,2,2,"mat-option",20),n&2){let e=l.$implicit;Ue(e?0:-1);}}function Oi(n,l){if(n&1){let e=oC();ke(0,"main",4)(1,"form")(2,"a-user-search-field",7),Ye("ngModelChange",function(i){Q_(e);let s=Wt();return X_(s.setUser(i))}),Ve(),L8(),ke(3,"div",8)(4,"label",9),bi$1(5),cC(6,"translate"),Ve(),ke(7,"mat-form-field",10),Yt(8,"input",11),L8(),Ve()(),ke(9,"div",12)(10,"div",13)(11,"label",14),bi$1(12),cC(13,"translate"),Ve(),ke(14,"mat-form-field",10),Yt(15,"input",15),cC(16,"translate"),L8(),Ve()(),ke(17,"div",13)(18,"label",14),bi$1(19),cC(20,"translate"),Ve(),ke(21,"mat-form-field",10),Yt(22,"input",16),cC(23,"translate"),L8(),Ve()()(),ke(24,"div",8)(25,"label",17),bi$1(26),cC(27,"translate"),Ve(),ke(28,"mat-form-field",10)(29,"mat-select",18),cC(30,"translate"),ke(31,"mat-option",19),bi$1(32),cC(33,"translate"),Ve(),G4(34,ki,2,2,"mat-option",20,Si),Ve(),L8(),Ve()(),ke(36,"div",8)(37,"label",21),bi$1(38),cC(39,"translate"),Ve(),ke(40,"div",12)(41,"mat-form-field",22)(42,"mat-select",23),cC(43,"translate"),G4(44,Ii,1,1,null,null,V4),Ve(),L8(),Ve(),ke(46,"div",24),cC(47,"translate"),ke(48,"button",25)(49,"icon"),bi$1(50,"add"),Ve()()()()()()();}if(n&2){let e=Wt(),t=nE(9);_e(2),Nr("ngModelOptions",F6(40,Mi)),U8(),_e(3),ou(Z6(6,18,"FORM.NAME")),_e(3),Nr("formField",e.form.name),U8(),_e(4),ou(Z6(13,20,"FORM.EMAIL")),_e(3),Nr("formField",e.form.email)("placeholder",Z6(16,22,"FORM.EMAIL")),U8(),_e(4),ou(Z6(20,24,"FORM.PHONE")),_e(3),Nr("formField",e.form.phone)("placeholder",Z6(23,26,"APP.CONCIERGE.CONTACTS_PHONE_PLACEHOLDER")),U8(),_e(4),ou(Z6(27,28,"RESOURCE.LEVEL")),_e(3),Nr("formField",e.form.zone)("placeholder",Z6(30,30,"COMMON.LEVEL_SELECT")),U8(),_e(3),ou(Z6(33,32,"COMMON.LEVEL_ANY")),_e(2),$4(e.levels()),_e(4),ou(Z6(39,34,"APP.CONCIERGE.CONTACTS_ROLES")),_e(4),Nr("formField",e.form.roles)("placeholder",Z6(43,36,"APP.CONCIERGE.CONTACTS_ROLES_SELECT")),U8(),_e(2),$4(e.roles()),_e(2),Nr("matTooltip",Z6(47,38,"APP.CONCIERGE.CONTACTS_ROLES_ADD")),_e(2),Nr("content",t);}}function Ni(n,l){n&1&&(ke(0,"main",5),Yt(1,"mat-spinner",26),ke(2,"p"),bi$1(3),cC(4,"translate"),Ve()()),n&2&&(_e(),Nr("diameter",48),_e(2),ou(Z6(4,2,"APP.CONCIERGE.CONTACTS_SAVING")));}function Ai(n,l){if(n&1){let e=oC();ke(0,"footer",6)(1,"button",27),Ye("click",function(){Q_(e);let i=Wt();return X_(i.save())}),bi$1(2),cC(3,"translate"),Ve()();}n&2&&(_e(2),Uo(" ",Z6(3,1,"COMMON.SAVE")," "));}function Pi(n,l){if(n&1){let e=oC();ke(0,"div",28)(1,"mat-form-field",10)(2,"input",29),cC(3,"translate"),iF("ngModelChange",function(i){Q_(e);let s=Wt();return w6(s.role_name,i)||(s.role_name=i),X_(i)}),Ve(),L8(),Ve(),ke(4,"button",30),Ye("click",function(){Q_(e);let i=Wt();return X_(i.addRole())}),bi$1(5),cC(6,"translate"),Ve()();}if(n&2){let e=Wt();_e(2),rF("ngModel",e.role_name),Nr("placeholder",Z6(3,3,"APP.CONCIERGE.CONTACTS_ROLES_NAME")),U8(),_e(3),Uo(" ",Z6(6,5,"APP.CONCIERGE.CONTACTS_ROLES_SAVE")," ");}}var pi=(()=>{class n{constructor(){this._data=m(Hce),this._dialog_ref=m(_T),this._org=m(pT),this._contacts_service=m(we),this.loading=R(false),this.role_name=R(""),this.contact=this._data,this.roles=this._contacts_service.roles,this.model=R({id:this._data?.id||this._contacts_service.generateContactId(),name:this._data?.name||"",email:this._data?.email||"",phone:this._data?.phone||"",zone:this._data?.zone||"",roles:this._data?.roles||[]}),this.form=eue(this.model),this.levels=this._org.active_levels,this._tooltip=np(Ta);}async addRole(){let e=this.role_name().trim();e&&(this._tooltip().close(),this.loading.set(true),this._dialog_ref.disableClose=true,await this._contacts_service.addRole(e),this.model.update(t=>m$1(l({},t),{roles:[...t.roles||[],e]})),this.role_name.set(""),this.loading.set(false),this._dialog_ref.disableClose=false);}setUser(e){this.model.update(t=>m$1(l({},t),{name:e?.name||"",email:e?.email||"",phone:e?.phone||""}));}async save(){this.loading.set(true),this._dialog_ref.disableClose=true;let e=this.model(),t={id:e.id,name:e.name,email:e.email,phone:e.phone,zone:e.zone,roles:e.roles||[]},i=await this._contacts_service.saveContact(t);this._dialog_ref.disableClose=false,this.loading.set(false),i&&this._dialog_ref.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["emergency-contact-modal"]],viewQuery:function(t,i){t&1&&eE(i._tooltip,Ta,5),t&2&&tE();},decls:10,vars:6,consts:[["role_form",""],[1,"bg-base-200","sticky","top-0","z-10","m-2","w-[calc(100%-1rem)]","rounded-sm","border-none","p-2"],[1,"px-2","text-xl","font-medium"],["icon","","matRipple","","mat-dialog-close",""],[1,"w-xl","p-4"],["loading","",1,"flex","h-64","flex-col","items-center","justify-center"],[1,"border-base-200","flex","items-center","justify-end","border-t","px-4","py-2"],["ngModel","",1,"mb-4",3,"ngModelChange","ngModelOptions"],[1,"flex","flex-col"],["for","name"],["appearance","outline"],["matInput","","placeholder","Full name",3,"formField"],[1,"flex","items-center","space-x-4"],[1,"flex","flex-1","flex-col"],["for","email"],["matInput","","type","email",3,"formField","placeholder"],["matInput","","type","tel",3,"formField","placeholder"],["for","zone"],[3,"formField","placeholder"],["value",""],[3,"value"],["for","roles"],["appearance","outline",1,"no-subscript","flex-1"],["multiple","",3,"formField","placeholder"],[3,"matTooltip"],["icon","","default","","matRipple","","customTooltip","",3,"content"],[1,"mb-4",3,"diameter"],["btn","","matRipple","",1,"w-48",3,"click"],[1,"bg-base-100","rounded-sm","p-4"],["matInput","",3,"ngModelChange","ngModel","placeholder"],["btn","","matRipple","",1,"w-full",3,"click"]],template:function(t,i){t&1&&(ke(0,"header",1)(1,"h2",2),bi$1(2),cC(3,"translate"),Ve(),Fe(4,Ti,3,0,"button",3),Ve(),Fe(5,Oi,51,41,"main",4)(6,Ni,5,4,"main",5),Fe(7,Ai,4,3,"footer",6),Ei$1(8,Pi,7,7,"ng-template",null,0,uC)),t&2&&(_e(2),Uo(" ",Z6(3,4,i.contact?"APP.CONCIERGE.CONTACTS_EDIT":"APP.CONCIERGE.CONTACTS_NEW")," "),_e(2),Ue(i.loading()?-1:4),_e(),Ue(i.loading()?6:5),_e(2),Ue(i.loading()?-1:7));},dependencies:[pet,pQe,hQe,VM,GY,Ttt,Stt,ii,ti,TY,Hl,V0,nMe,tMe,SV,XNe,JNe,AJ,Gp,Nnt,Tt,Zt,Ta,kt,Ktt,kde,ent],encapsulation:2});}}return n})();var Di=(n,l)=>l+n;function Fi(n,l){n&1&&(ke(0,"button",3)(1,"icon"),bi$1(2,"close"),Ve()());}function Li(n,l){if(n&1){let e=oC();ke(0,"div",5)(1,"div",10),bi$1(2),Ve(),ke(3,"button",11),Ye("click",function(){let i=Q_(e).$implicit,s=Wt();return s.active.set(i),X_(s.role_name.set(i))}),ke(4,"icon"),bi$1(5,"edit"),Ve()(),ke(6,"button",12),Ye("click",function(){let i=Q_(e).$implicit,s=Wt();return X_(s.removeRole(i))}),ke(7,"icon"),bi$1(8,"delete"),Ve()()();}if(n&2){let e=l.$implicit;Wt();let t=nE(16);_e(2),ou(e),_e(),Nr("content",t);}}function zi(n,l){if(n&1){let e=oC();ke(0,"div",13)(1,"mat-form-field",14)(2,"input",15),cC(3,"translate"),iF("ngModelChange",function(i){Q_(e);let s=Wt();return w6(s.role_name,i)||(s.role_name=i),X_(i)}),Ve(),L8(),Ve(),ke(4,"button",16),Ye("click",function(){Q_(e);let i=Wt();return X_(i.updateRoles())}),bi$1(5),cC(6,"translate"),Ve()();}if(n&2){let e=Wt();_e(2),rF("ngModel",e.role_name),Nr("placeholder",Z6(3,3,"APP.CONCIERGE.CONTACTS_ROLES_NAME")),U8(),_e(3),Uo(" ",Z6(6,5,"APP.CONCIERGE.CONTACTS_ROLES_SAVE")," ");}}var hi=(()=>{class n{constructor(){this._dialog_ref=m(_T),this._contacts_service=m(we),this.active=R(""),this.role_name=R(""),this.loading=R(false),this.roles=this._contacts_service.roles,this._tooltip=np(Ta);}async removeRole(e){e&&(this.loading.set(true),this._dialog_ref.disableClose=true,await this._contacts_service.removeRole(e),this.loading.set(false),this._dialog_ref.disableClose=false);}async updateRoles(){let e=this.role_name().trim();e&&(this.loading.set(true),this._tooltip().close(),this._dialog_ref.disableClose=true,this.active()?await this._contacts_service.renameRole(this.active(),e):await this._contacts_service.addRole(e),this.role_name.set(""),this.active.set(""),this.loading.set(false),this._dialog_ref.disableClose=false);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["role-management-modal"]],viewQuery:function(t,i){t&1&&eE(i._tooltip,Ta,5),t&2&&tE();},decls:17,vars:8,consts:[["role_form",""],[1,"bg-base-200","sticky","top-0","z-10","m-2","w-[calc(100%-1rem)]","rounded-sm","border-none","p-2"],[1,"px-2","text-xl","font-medium"],["icon","","matRipple","","mat-dialog-close",""],[1,"h-128","max-h-[65vh]","min-w-md","overflow-y-auto"],[1,"hover:bg-base-200:bg-base-300","border-base-200","m-2","flex","items-center","space-x-2","rounded-sm","border","p-2"],[1,"border-base-200","border-t"],["btn","","matRipple","","customTooltip","",1,"m-2","flex","w-[calc(100%-1rem)]","items-center","justify-center","space-x-2",3,"click","content"],[1,"truncate","pl-2"],[1,"text-2xl"],[1,"flex-1","truncate","px-2"],["icon","","matRipple","","customTooltip","",1,"border-secondary","text-secondary","h-12","w-12","rounded-sm","border",3,"click","content"],["icon","","matRipple","",1,"border-error","text-error","h-12","w-12","rounded-sm","border",3,"click"],[1,"bg-base-100","rounded-sm","p-4"],["appearance","outline"],["matInput","",3,"ngModelChange","ngModel","placeholder"],["btn","","matRipple","",1,"w-full",3,"click"]],template:function(t,i){if(t&1){let s=oC();ke(0,"header",1)(1,"h2",2),bi$1(2),cC(3,"translate"),Ve(),Fe(4,Fi,3,0,"button",3),Ve(),ke(5,"main",4),G4(6,Li,9,2,"div",5,Di),Ve(),ke(8,"footer",6)(9,"button",7),Ye("click",function(){return Q_(s),i.active.set(""),X_(i.role_name.set(""))}),ke(10,"div",8),bi$1(11),cC(12,"translate"),Ve(),ke(13,"icon",9),bi$1(14,"add"),Ve()()(),Ei$1(15,zi,7,7,"ng-template",null,0,uC);}if(t&2){let s=nE(16);_e(2),Uo(" ",Z6(3,4,"APP.CONCIERGE.CONTACTS_ROLES_MANAGE")," "),_e(2),Ue(i.loading()?-1:4),_e(2),$4(i.roles()),_e(3),Nr("content",s),_e(2),Uo(" ",Z6(12,6,"APP.CONCIERGE.CONTACTS_ROLES_ADD")," ");}},dependencies:[nMe,SV,XNe,AJ,pQe,hQe,Hl,V0,VM,GY,Ttt,Stt,pet,Ta,ent],encapsulation:2});}}return n})();var Vi=(n,l)=>({key:"name",name:n,content:l}),Bi=(n,l)=>({key:"roles",name:n,content:l,sortable:false}),Gi=(n,l)=>({key:"zone",name:n,content:l,sortable:false}),qi=n=>({key:"actions",name:" ",content:n,size:"6rem",sortable:false}),ji=(n,l,e,t)=>[n,l,e,t],Ui=(n,l)=>l+n;function Wi(n,l){if(n&1&&(ke(0,"mat-option",19),bi$1(1),Ve()),n&2){let e=l.$implicit;Nr("value",e),_e(),Uo(" ",e," ");}}function $i(n,l){if(n&1){let e=oC();ke(0,"button",24),Ye("click",function(){let i=Q_(e).row,s=Wt();return X_(s.copyToClipboard(i.email))}),ke(1,"div",25),bi$1(2),Ve(),ke(3,"div",26),bi$1(4),Ve()();}if(n&2){let e=l.row;_e(2),ou(e.name),_e(2),Uo(" ",e.email," ");}}function Hi(n,l){if(n&1&&(ke(0,"span",28),bi$1(1),Ve()),n&2){let e=l.$implicit;_e(),Uo(" ",e," ");}}function Yi(n,l){if(n&1&&(ke(0,"div",27),G4(1,Hi,2,1,"span",28,H4),Ve()),n&2){let e=l.data;_e(),$4(e);}}function Qi(n,l){if(n&1&&(ke(0,"div",29),bi$1(1),cC(2,"level"),Ve()),n&2){let e=l.data;_e(),Uo(" ",e?Z6(2,1,e)?.display_name:"All"," ");}}function Xi(n,l){if(n&1){let e=oC();ke(0,"div",30)(1,"button",20),cC(2,"translate"),Ye("click",function(){let i=Q_(e).row,s=Wt();return X_(s.editContact(i))}),ke(3,"icon"),bi$1(4,"edit"),Ve()(),ke(5,"button",31),cC(6,"translate"),Ye("click",function(){let i=Q_(e).row,s=Wt();return X_(s.removeContact(i))}),ke(7,"icon"),bi$1(8,"delete"),Ve()()();}n&2&&(_e(),Nr("matTooltip",Z6(2,2,"APP.CONCIERGE.CONTACTS_EDIT")),_e(4),Nr("matTooltip",Z6(6,4,"APP.CONCIERGE.CONTACTS_REMOVE")));}var gi=(()=>{class n{constructor(){this._org=m(pT),this._dialog=m(yT),this._clipboard=m(L2),this._contacts_service=m(we),this.search=R(""),this.role_filter=R(""),this.roles=this._contacts_service.roles,this.contacts=this._contacts_service.contacts,this.filtered_contacts=w(()=>{let e=this.role_filter();return this.contacts().filter(t=>!e||t.roles.includes(e))}),this.copyToClipboard=e=>{this._clipboard.copy(e)&&_b("User's email copied to clipboard.");};}ngOnInit(){this.checkMigration();}async checkMigration(){if(await this._contacts_service.needsMigration()){let t=await re({title:"Migrate Emergency Contacts",content:"Emergency contacts data from the old system was found. Would you like to migrate it to the new system?",icon:{content:"sync"}},this._dialog);t.reason==="done"&&(t.loading("Migrating contacts..."),await this._contacts_service.migrateFromMetadata()),t.close();}}manageRoles(){this._dialog.open(hi,{}).afterClosed().subscribe(()=>this._contacts_service.refresh());}editContact(e){this._dialog.open(pi,{data:e}).afterClosed().subscribe(()=>this._contacts_service.refresh());}async removeContact(e){let t=await re({title:"Remove Emergency Contact",content:`Are you sure you want to remove ${e.name} from the emergency contacts?`,icon:{content:"delete"}},this._dialog);t.reason==="done"&&(t.loading("Removing contact..."),await this._contacts_service.deleteContact(e.id),t.close());}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["","app-emergency-contacts",""]],decls:50,vars:49,consts:[["person_template",""],["roles_template",""],["zone_template",""],["actions_template",""],[1,"flex","h-px","flex-1"],[1,"flex","h-full","w-1/2","flex-1","flex-col"],["topbar","",1,"flex","flex-col","px-8","py-4"],[1,"flex","items-center","justify-between"],[1,"text-2xl","font-medium"],[1,"flex","items-center","space-x-2"],["appearance","outline",1,"no-subscript"],["matPrefix","",1,"text-2xl"],["matInput","",3,"ngModelChange","ngModel","placeholder"],["btn","","matRipple","",1,"space-x-2",3,"click"],[1,"text-2xl"],[1,"pr-2"],[1,"mt-2","flex","items-center","justify-between","py-2"],[3,"ngModelChange","ngModel","placeholder"],["value",""],[3,"value"],["icon","","default","","matRipple","",3,"click","matTooltip"],[1,"h-1/2","w-full","flex-1","overflow-auto","px-8"],[1,"block","min-w-208","text-sm",3,"data","filter","empty_message","columns","sortable"],[1,"h-12","w-full"],[1,"px-4","py-2","text-left","leading-tight",3,"click"],[1,""],[1,"font-mono","text-[0.625rem]","opacity-30"],[1,"flex","flex-wrap","p-2"],[1,"bg-info","text-info-content","m-1","rounded-2xl","px-2","py-1","font-mono","text-xs"],[1,"p-4"],[1,"flex","w-full","items-center","justify-end","space-x-2","p-2"],["icon","","default","","matRipple","","error","",3,"click","matTooltip"]],template:function(t,i){if(t&1){let s=oC();Yt(0,"app-topbar"),ke(1,"div",4),Yt(2,"app-sidebar"),ke(3,"main",5)(4,"section",6)(5,"div",7)(6,"h2",8),bi$1(7),cC(8,"translate"),Ve(),ke(9,"div",9)(10,"mat-form-field",10)(11,"icon",11),bi$1(12," search "),Ve(),ke(13,"input",12),cC(14,"translate"),iF("ngModelChange",function(C){return Q_(s),w6(i.search,C)||(i.search=C),X_(C)}),Ve(),L8(),Ve(),ke(15,"button",13),Ye("click",function(){return i.editContact()}),ke(16,"icon",14),bi$1(17,"add"),Ve(),ke(18,"div",15),bi$1(19),cC(20,"translate"),Ve()()()(),ke(21,"div",16)(22,"mat-form-field",10)(23,"mat-select",17),cC(24,"translate"),iF("ngModelChange",function(C){return Q_(s),w6(i.role_filter,C)||(i.role_filter=C),X_(C)}),ke(25,"mat-option",18),bi$1(26),cC(27,"translate"),Ve(),G4(28,Wi,2,2,"mat-option",19,Ui),Ve(),L8(),Ve(),ke(30,"div",9)(31,"button",20),cC(32,"translate"),Ye("click",function(){return i.manageRoles()}),ke(33,"icon"),bi$1(34,"list_alt"),Ve()()()()(),ke(35,"section",21),Yt(36,"simple-table",22),cC(37,"translate"),cC(38,"translate"),cC(39,"translate"),cC(40,"translate"),Yt(41,"div",23),Ei$1(42,$i,5,2,"ng-template",null,0,uC)(44,Yi,3,0,"ng-template",null,1,uC)(46,Qi,3,3,"ng-template",null,2,uC)(48,Xi,9,6,"ng-template",null,3,uC),Ve()()();}if(t&2){let s=nE(43),g=nE(45),C=nE(47),ie=nE(49);_e(7),Uo(" ",Z6(8,13,"APP.CONCIERGE.CONTACTS_HEADER")," "),_e(6),rF("ngModel",i.search),Nr("placeholder",Z6(14,15,"APP.CONCIERGE.CONTACTS_FILTER")),U8(),_e(6),Uo(" ",Z6(20,17,"APP.CONCIERGE.CONTACTS_ADD")," "),_e(4),rF("ngModel",i.role_filter),Nr("placeholder",Z6(24,19,"APP.CONCIERGE.CONTACTS_ROLES_ALL")),U8(),_e(3),ou(Z6(27,21,"APP.CONCIERGE.CONTACTS_ROLES_ALL")),_e(2),$4(i.roles()),_e(3),Nr("matTooltip",Z6(32,23,"APP.CONCIERGE.CONTACTS_ROLES_MANAGE")),_e(5),Nr("data",i.filtered_contacts())("filter",i.search())("empty_message",Z6(37,25,i.search()?"APP.CONCIERGE.CONTACTS_SEARCH_EMPTY":"APP.CONCIERGE.CONTACTS_EMPTY"))("columns",H6(44,ji,B6(33,Vi,Z6(38,27,"COMMON.PERSON"),s),B6(36,Bi,Z6(39,29,"APP.CONCIERGE.CONTACTS_ROLES"),g),B6(39,Gi,Z6(40,31,"RESOURCE.LEVEL"),C),U6(42,qi,ie)))("sortable",true);}},dependencies:[Hl,V0,pet,Ktt,kde,Ne,VM,GY,mde,ii,ti,TY,Ttt,Stt,Zv,Hv,nMe,SV,XNe,AJ,ent,f],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--base-100)}
/*# sourceMappingURL=emergency-contacts.component.css.map */`]});}}return n})();var te=(()=>{class n extends zs{constructor(){super(),this._org=m(pT),this._onsite={},this._events={},this._users=R([]),this._poll=R(0),this.loading=R(false),this.filters=R({}),this.search=R(""),this.user_events=R({}),this.filtered_users=w(()=>{let e=this.search(),t=this._users(),i=this.filters();return t.filter(s=>(!e||s.name.toLowerCase().includes(e)||s.email.toLowerCase().includes(e))&&(!i.only_onsite||this._onsite[s.email]))}),this.loadUsers(),ht(()=>{this._org.active_building(),this._poll(),this.timeout("load-events",()=>this._loadEvents(),300);});}setFilters(e){this.filters.set(l(l({},this.filters()),e));}setSearchString(e){this.search.set(e);}startPolling(e=3*Sg){let t=Math.max(e,3*Sg);this._poll.update(i=>i+1),this.interval("poll",()=>this._poll.update(i=>i+1),t);}stopPolling(){this.clearInterval("poll");}async checkin(e){let t=await en$1({booking_start:Math.floor(new Date().valueOf()/1e3),booking_end:Math.floor(Ci(new Date).valueOf()/1e3),asset_id:e.email,title:"Checked-in Onsite",description:this._org.building.display_name||this._org.building.name,zones:[this._org.building.id],booking_type:"staff"});await rn$1(t.id,true),this._events[e.email]=t,this._onsite[e.email]=true;}async checkout(e){let t=this._events[e.email];if(t){let i=await en$1(m$1(l({},t.toJSON()),{booking_end:Math.floor(new Date().valueOf()/1e3)}));await rn$1(i.id,false),this._events[e.email]=i,this._onsite[e.email]=false;}}async _loadEvents(){this.loading.set(true);let e=await U({period_start:Kn(Dn(Date.now())),period_end:Kn(Ci(Date.now())),type:"staff"}),t={},i=new Date().valueOf();for(let s of e)RPe(i,i,s.date,s.date+s.duration*60*1e3)&&(t[s.asset_id]=s.checked_in,this._events[s.asset_id]=s);this._onsite=t,this.user_events.set(t),this.loading.set(false);}async loadUsers(){let e=await G("");e.sort((t,i)=>t.name.localeCompare(i.name)),this._users.set(e);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"});}}return n})();function Ji(n,l){n&1&&(ke(0,"div",5),bi$1(1),cC(2,"translate"),Ve()),n&2&&(_e(),Uo(" ",Z6(2,1,"APP.CONCIERGE.DIRECTORY_ONSITE")," "));}function Zi(n,l){if(n&1){let e=oC();ke(0,"div",0),Yt(1,"a-user-avatar",1),ke(2,"div",2)(3,"div",3),bi$1(4),Ve(),ke(5,"div",4),bi$1(6),Ve()(),Fe(7,Ji,3,3,"div",5),ke(8,"div",6)(9,"action-icon",7),cC(10,"translate"),Ye("click",function(){Q_(e);let i=Wt();return X_(i.onsite()?i.checkout():i.checkin())}),Ve(),ke(11,"a",8),cC(12,"translate"),ke(13,"icon"),bi$1(14,"email"),Ve()(),ke(15,"a",8),cC(16,"translate"),ke(17,"icon"),bi$1(18,"call"),Ve()()()();}if(n&2){let e=Wt();_e(),Nr("user",e.user()),_e(3),ou(e.user()?.name),_e(2),Uo(" ",e.user()?.email," "),_e(),Ue(e.onsite()?7:-1),_e(2),Nr("matTooltip",Z6(10,13,e.onsite()?"COMMON.CHECK_IN":"COMMON.CHECK_OUT"))("loading",e.loading())("content",e.onsite()?"event_busy":"event_available"),_e(2),Nr("matTooltip",Z6(12,15,"APP.CONCIERGE.DIRECTORY_EMAIL"))("href","mailto:"+e.user()?.email,Uy),$e("disabled",!e.user()?.email),_e(4),Nr("matTooltip",Z6(16,17,"APP.CONCIERGE.DIRECTORY_PHONE"))("href","tel:"+e.user()?.phone,Uy),$e("disabled",!e.user()?.phone);}}var _i=(()=>{class n{constructor(){this._state=m(te),this.user=to(void 0),this.onsite=to(void 0),this.loading=R(false),this.checkin=async()=>{this.loading.set(true),await this._state.checkin(this.user()).catch(e=>o2(_r("APP.CONCIERGE.DIRECTORY_CHECKIN_ERROR",{error:e}))),this.loading.set(false);},this.checkout=async()=>{this.loading.set(true),await this._state.checkout(this.user()).catch(e=>_r("APP.CONCIERGE.DIRECTORY_CHECKOUT_ERROR",{error:e})),this.loading.set(false);};}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["staff-details"]],inputs:{user:[1,"user"],onsite:[1,"onsite"]},decls:1,vars:1,consts:[["details","",1,"border-base-200","bg-base-100","flex","w-full","items-center","border-b","px-4","py-2","hover:opacity-80"],[3,"user"],[1,"flex","flex-1","flex-col"],[1,"px-2"],[1,"text-opacity-50","px-2","text-xs"],[1,"px-4","text-xs","opacity-50"],[1,"flex","items-center"],[3,"click","matTooltip","loading","content"],["icon","","matRipple","",3,"matTooltip","href"]],template:function(t,i){t&1&&Fe(0,Zi,19,19,"div",0),t&2&&Ue(i.user()?0:-1);},dependencies:[Yn,li,pet,Ktt,kde,ent],encapsulation:2});}}return n})();var en=["container"];function tn(n,l){if(n&1){let e=oC();ke(0,"div",6),Ye("click",function(){let i=Q_(e).$implicit,s=Wt();return X_(s.scrollTo(i))}),bi$1(1),Ve();}if(n&2){let e=l.$implicit,t=Wt();Oe("disabled",t.user_list()[e].length<=0)("active",e===t.active_group()),_e(),Uo(" ",e," ");}}function nn(n,l){if(n&1&&Yt(0,"staff-details",8),n&2){let e=l.$implicit,t=l.$index,i=Wt(2).$implicit,s=Wt(2);Nr("id","letter-"+i+"-"+t)("user",e)("onsite",s.events()?s.events()[e.email]:false);}}function an(n,l){if(n&1&&(ke(0,"div",7),bi$1(1),Ve(),G4(2,nn,1,3,"staff-details",8,H4)),n&2){let e=Wt().$implicit,t=Wt(2);Nr("id","letter-"+(e==="#"?"0":e)),_e(),Uo(" ",e," "),_e(),$4(t.user_list()[e]);}}function on(n,l){if(n&1&&Fe(0,an,4,2),n&2){let e=l.$implicit,t=Wt(2);Ue(t.user_list()[e].length?0:-1);}}function rn(n,l){if(n&1&&G4(0,on,1,1,null,null,H4),n&2){let e=Wt();$4(e.groups);}}function sn(n,l){n&1&&(ke(0,"div",4)(1,"p"),bi$1(2),cC(3,"translate"),Ve()()),n&2&&(_e(2),Uo(" ",Z6(3,1,"APP.CONCIERGE.DIRECTORY_SEARCH_EMPTY")," "));}function ln(n,l){n&1&&Yt(0,"mat-progress-bar",5);}var Ge="#abcdefghijklmnopqrstuvwxyz".split(""),ui=(()=>{class n extends zs{constructor(){super(),this._state=m(te),this.active_group=R("#"),this.groups=Ge,this.events=this._state.user_events,this.loading=this._state.loading,this.filtered_users=this._state.filtered_users,this.user_count=w(()=>this.filtered_users().length),this.user_list=w(()=>{let e=this.filtered_users()||[],t={};for(let i of Ge)t[i]=e.filter(s=>s.name.toLowerCase()[0].startsWith(i)||i==="#"&&!Ge.includes(s.name.toLowerCase()[0]));return t}),this._el=np("container"),ht(()=>{this.user_list(),this.timeout("scroll",()=>this.onScroll({}),30);});}onScroll(e){let t=this._el();if(!t)return;let i=t.nativeElement.scrollTop;for(let s of Ge){let g=document.querySelector(`#letter-${s==="#"?"0":s}`);if(g){if(g.offsetTop-i>0)break;this.active_group.set(s);}}}scrollTo(e){let t=document.querySelector(`#letter-${e}-0`);t&&(t.scrollIntoView({behavior:"smooth",block:"center"}),this.active_group.set(e));}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["staff-listings"]],viewQuery:function(t,i){t&1&&eE(i._el,en,5),t&2&&tE();},features:[Pe],decls:8,vars:2,consts:[["container",""],[1,"flex","w-full","items-center","justify-center","p-2"],["letter","",1,"flex","h-6","w-6","cursor-pointer","items-center","justify-center","text-xs","capitalize",3,"disabled","active"],[1,"relative","w-full","flex-1","overflow-auto",2,"height","50%",3,"scroll"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center"],["mode","indeterminate"],["letter","",1,"flex","h-6","w-6","cursor-pointer","items-center","justify-center","text-xs","capitalize",3,"click"],["group","",1,"border-base-300","bg-base-200","sticky","top-0","z-10","m-2","rounded-lg","border","text-sm","font-medium","capitalize",3,"id"],[3,"id","user","onsite"]],template:function(t,i){t&1&&(ke(0,"div",1),G4(1,tn,2,5,"div",2,H4),Ve(),ke(3,"div",3,0),Ye("scroll",function(g){return i.onScroll(g)}),Fe(5,rn,2,0)(6,sn,4,3,"div",4),Ve(),Fe(7,ln,1,0,"mat-progress-bar",5)),t&2&&(_e(),$4(i.groups),_e(4),Ue(i.user_count()?5:6),_e(2),Ue(i.loading()?7:-1));},dependencies:[Z,L,_i,ent],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:50%}[letter][_ngcontent-%COMP%]{transition:font-size .2s,color .2s}[group][_ngcontent-%COMP%]{border-color:#ccc;padding:.5rem 1.65rem}.disabled[_ngcontent-%COMP%]{opacity:.2;pointer-events:none}.active[_ngcontent-%COMP%]{font-size:1.25rem;opacity:1;color:#d81b60}
/*# sourceMappingURL=staff-listing.component.css.map */`]});}}return n})();var cn=["switch"],dn=["*"];function mn(n,l){n&1&&(ke(0,"span",11),mA(),ke(1,"svg",13),Yt(2,"path",14),Ve(),ke(3,"svg",15),Yt(4,"path",16),Ve()());}var pn=new v("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:false,hideIcon:false,disabledInteractive:false})}),qe=class{source;checked;constructor(l,e){this.source=l,this.checked=e;}},it=(()=>{class n{_elementRef=m(Y);_focusMonitor=m(Qo);_changeDetectorRef=m(wt);defaults=m(pn);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=false;_createChangeEvent(e){return new qe(this,e)}_labelId;get buttonId(){return `${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus();}_noopAnimations=Qt();_focused=false;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=false;color;disabled=false;disableRipple=false;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck();}hideIcon;disabledInteractive;change=new ne;toggleChange=new ne;get inputId(){return `${this.id||this._uniqueId}-input`}constructor(){m(En).load(Vl);let e=m(new cE("tabindex"),{optional:true}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=m(Lt).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??false,this.disabledInteractive=t.disabledInteractive??false,this._labelId=this._uniqueId+"-label";}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,true).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=true,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=false,this._onTouched(),this._changeDetectorRef.markForCheck();});});}ngOnChanges(e){e.required&&this._validatorOnChange();}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef);}writeValue(e){this.checked=!!e;}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouched=e;}validate(e){return this.required&&e.value!==true?{required:true}:null}registerOnValidatorChange(e){this._validatorOnChange=e;}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck();}toggle(){this.checked=!this.checked,this._onChange(this.checked);}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked));}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new qe(this,this.checked))));}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ie({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(t,i){if(t&1&&Mn(cn,5),t&2){let s;Ae(s=De())&&(i._switchElement=s.first);}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,i){t&2&&(Nn("id",i.id),$e("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Ps(i.color?"mat-"+i.color:""),Oe("mat-mdc-slide-toggle-focused",i._focused)("mat-mdc-slide-toggle-checked",i.checked)("_mat-animation-noopable",i._noopAnimations));},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",Ee$1],color:"color",disabled:[2,"disabled","disabled",Ee$1],disableRipple:[2,"disableRipple","disableRipple",Ee$1],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:su(e)],checked:[2,"checked","checked",Ee$1],hideIcon:[2,"hideIcon","hideIcon",Ee$1],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ee$1]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[st([{provide:Ga,useExisting:An(()=>n),multi:true},{provide:zo,useExisting:n,multi:true}]),Ct],ngContentSelectors:dn,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,i){if(t&1&&(gn$1(),ke(0,"div",1)(1,"button",2,0),Ye("click",function(){return i._handleClick()}),Yt(3,"div",3)(4,"span",4),ke(5,"span",5)(6,"span",6)(7,"span",7),Yt(8,"span",8),Ve(),ke(9,"span",9),Yt(10,"span",10),Ve(),Fe(11,mn,5,0,"span",11),Ve()()(),ke(12,"label",12),Ye("click",function(g){return g.stopPropagation()}),Le(13),Ve()()),t&2){let s=nE(2);Nr("labelPosition",i.labelPosition),_e(),Oe("mdc-switch--selected",i.checked)("mdc-switch--unselected",!i.checked)("mdc-switch--checked",i.checked)("mdc-switch--disabled",i.disabled)("mat-mdc-slide-toggle-disabled-interactive",i.disabledInteractive),Nr("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex)("disabled",i.disabled&&!i.disabledInteractive),$e("id",i.buttonId)("name",i.name)("aria-label",i.ariaLabel)("aria-labelledby",i._getAriaLabelledBy())("aria-describedby",i.ariaDescribedby)("aria-required",i.required||null)("aria-checked",i.checked)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),_e(9),Nr("matRippleTrigger",s)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",true),_e(),Ue(i.hideIcon?-1:11),_e(),Nr("for",i.buttonId),$e("id",i._labelId);}},dependencies:[V0,eet],styles:[`.mdc-switch {
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
`],encapsulation:2})}return n})(),fi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ae({type:n});static \u0275inj=oe({imports:[it,St]})}return n})();var gn=(n,l)=>l.id;function _n(n,l){if(n&1&&(ke(0,"mat-option",3),bi$1(1),Ve()),n&2){let e=l.$implicit;Nr("value",e.id),_e(),Uo(" ",e.display_name||e.name," ");}}var vi=(()=>{class n extends zs{constructor(){super(),this._state=m(te),this._org=m(pT),this._route=m(Di$1),this._router=m(xn),this.zones=R([]),this.levels=R([]),this.filters=R({}),this.setDate=e=>this._state.setFilters({date:e}),this.setFilters=e=>this._state.setFilters(e),this.setSearch=e=>this._state.setSearchString(e),this.updateZones=e=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:e.join(",")},queryParamsHandling:"merge"}),this._state.setFilters({zones:e});},ht(()=>{this.filters.set(this._state.filters()||{});}),ht(()=>{let e=this._org.active_levels()||[];M(()=>{this.levels.set(e);let t=this.zones().filter(i=>e.find(s=>s.id===i));!t.length&&e.length&&t.push(e[0].id),this.zones.set(t),this.updateZones(t);});});}async ngOnInit(){await this._org.waitUntilInitialised(),this.subscription("route.query",this._route.queryParamMap.subscribe(e=>{if(e.has("zone_ids")){let t=e.get("zone_ids").split(",");if(t.length){let i=this._org.levelWithID(t);if(!i)return;this._org.building=this._org.buildings.find(s=>s.id===i.parent_id),this.zones.set(t);}}})),this.setSearch("");}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["staff-topbar"]],features:[Pe],decls:12,vars:8,consts:[[1,"border-base-200","bg-base-100","flex","items-center","space-x-4","border-b","p-4"],["appearance","outline",1,"no-subscript","w-48"],["multiple","",3,"ngModelChange","ngModel","placeholder"],[3,"value"],[1,"m-2",3,"ngModelChange","ngModel"],[1,"text-xs"],[1,"w-2","flex-1"],[1,"mr-2",3,"modelChange"]],template:function(t,i){t&1&&(ke(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),cC(3,"translate"),iF("ngModelChange",function(g){return w6(i.zones,g)||(i.zones=g),g}),Ye("ngModelChange",function(g){return i.updateZones(g)}),G4(4,_n,2,2,"mat-option",3,gn),Ve(),L8(),Ve(),ke(6,"mat-slide-toggle",4),Ye("ngModelChange",function(g){return i.setFilters({only_onsite:g})}),ke(7,"div",5),bi$1(8),cC(9,"translate"),Ve()(),L8(),Yt(10,"div",6),ke(11,"searchbar",7),Ye("modelChange",function(g){return i.setSearch(g)}),Ve()()),t&2&&(_e(2),rF("ngModel",i.zones),Nr("placeholder",Z6(3,4,"COMMON.LEVEL_ALL")),U8(),_e(2),$4(i.levels()),_e(2),Nr("ngModel",i.filters()?.only_onsite),U8(),_e(2),Uo(" ",Z6(9,6,"APP.CONCIERGE.DIRECTORY_ONSITE_ONLY")," "));},dependencies:[fi,it,z,VM,GY,ii,ti,TY,nMe,XNe,AJ,ent],styles:[`mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}
/*# sourceMappingURL=staff-topbar.component.css.map */`]});}}return n})();function un(n,l){n&1&&Yt(0,"mat-progress-bar",4);}var bi=(()=>{class n{constructor(){this._state=m(te),this.loading=this._state.loading;}ngOnInit(){this._state.startPolling();}ngOnDestroy(){this._state.stopPolling();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["","app-new-staff",""]],decls:7,vars:1,consts:[[1,"flex","h-px","flex-1"],[1,"flex","h-full","w-1/2","flex-1","flex-col"],[1,"w-full"],[1,"h-0","w-full","flex-1"],["mode","indeterminate",1,"w-full"]],template:function(t,i){t&1&&(Yt(0,"app-topbar"),ke(1,"div",0),Yt(2,"app-sidebar"),ke(3,"main",1),Yt(4,"staff-topbar",2)(5,"staff-listings",3),Fe(6,un,1,0,"mat-progress-bar",4),Ve()()),t&2&&(_e(6),Ue(i.loading()?6:-1));},dependencies:[Z,L,Zv,Hv,vi,ui],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--base-100)}
/*# sourceMappingURL=staff.component.css.map */`]});}}return n})();var Ro=[{path:"",component:bi,title:"Staff"},{path:"emergency-contacts",component:gi,title:"Emergency Contacts"}];export{Ro as ROUTES};//# sourceMappingURL=staff.routes-SXsR2oGA.js.map
