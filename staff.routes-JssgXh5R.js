import {z}from'./chunk-CAtZA81t.js';import {f}from'./chunk-CvCIThkI.js';import {r as re}from'./chunk-w827qfT8.js';import {k as kt}from'./chunk-DSzcj1HD.js';import {G}from'./chunk-CUx8aRiY.js';import'./chunk-BSHG-D3b.js';import {N as Ne}from'./chunk-C9RoqrM5.js';import {h as he,T as Te,j as je,E as Ee}from'./chunk-2kOcWXSt.js';import {e as en$1,r as rn$1,U}from'./chunk-5oB-Rh9T.js';import {Z as Zv,H as Hv,i as ii,t as ti,f as Ta,T as Tt,b as Zt,Y as Yn}from'./chunk-BOashWtY.js';import {m,I as Ie,bT as Z,bU as L,W as Wt,k as ke,F as Fe,V as Ve,y as ye,C as Ue,p as pT,X as yT,cx as P2,R,w,aa as _b,g as Vl,i as B0,h as het,q as qtt,d as xde,c as BM,H as HY,bP as pde,S as SY,br as Stt,bs as btt,t as tMe,au as bV,Q as QNe,j as IJ,J as Jtt,aB as iC,E as Ei$1,l as aC,aw as rF,n as P8,z as ze,o as H4,ao as _i$1,ap as dC,s as rE,u as Fo,K as K6,az as nF,O as Or,v as F8,aC as iu,L as G4,bG as V6,ar as F6,as as U6,Y as Ys,f as ft,an as l,bi as Sg,bn as Ai$1,am as m$1,aL as Kn,a3 as In,bj as CPe,bk as k,a as Ii$1,x as xn,N,P as Pe,Z as np,ae as tE,af as nE,dy as cxe,dz as rxe,bx as $u,co as Zp,cw as Wp,cp as wH,_ as _r,a9 as i2,ce as txe,bw as Oi$1,bD as bb,aT as _T,aN as hQe,aO as fQe,aD as Vce,aU as Jde,bt as eMe,bu as XNe,bv as Gp,aV as Ont,dA as le,dB as se,dC as bt,b3 as Y,dD as Zo,dE as wt,dF as v,dG as Xt,cr as re$1,dH as _n$1,dI as Bl,dJ as lE,dK as Lt,dL as JJe,ba as Ct,dM as ve,b1 as pn$1,b2 as Le,G as Oe,bz as Ge$1,M as ot,bA as Ha,dN as jo,bB as Tn,dO as ou,dm as Nn,dc as Ls,dP as Mn,dQ as Ae,dR as De,T as V4,b0 as Xi$1,aA as qt,dw as B4,aY as L6,bR as pA,c0 as By,aW as X_,aX as J_,bc as R6}from'./main.js';var yi=["*"];function wi(n,l){if(n&1&&(ke(0,"div")(1,"icon"),Ei$1(2),Ve()()),n&2){let e=qt();Ls("state center "+e.state()),ye(2),Fo(" ",e.state()==="success"?"done":"close"," ");}}function Ei(n,l){n&1&&(ke(0,"div",3),Wt(1,"mat-spinner",4),Ve()),n&2&&(ye(),Or("diameter",16));}var li=(()=>{class n{constructor(){this.icon=Xi$1(void 0),this.className=Xi$1("material-symbols-rounded"),this.content=Xi$1(void 0),this.loading=Xi$1(void 0),this.disabled=Xi$1(void 0),this.state=Xi$1("");}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["action-icon"]],inputs:{icon:[1,"icon"],className:[1,"className"],content:[1,"content"],loading:[1,"loading"],disabled:[1,"disabled"],state:[1,"state"]},ngContentSelectors:yi,decls:6,vars:8,consts:[["icon","","matRipple","","title","",1,"relative",3,"disabled"],["root","",3,"className","icon"],[3,"class"],[1,"loader","center"],[3,"diameter"]],template:function(t,i){t&1&&(pn$1(),ke(0,"button",0)(1,"icon",1),Ei$1(2),Le(3),Ve(),Fe(4,wi,3,3,"div",2),Fe(5,Ei,2,1,"div",3),Ve()),t&2&&(Oe("success",i.state()==="success"),Or("disabled",i.loading()||i.disabled()),ye(),Or("className",i.className())("icon",i.icon()),ye(),Fo(" ",i.content()," "),ye(2),Ue(!i.loading()&&i.state()?4:-1),ye(),Ue(i.loading()?5:-1));},dependencies:[Vl,B0,Tt,Zt,het],styles:[`.action-icon.fade[_ngcontent-%COMP%] > icon[_ngcontent-%COMP%]{opacity:.35}.success[_ngcontent-%COMP%]{pointer-events:none}.success[_ngcontent-%COMP%]   icon[root][_ngcontent-%COMP%]{opacity:.2}.state.success[_ngcontent-%COMP%]{color:#388e3c}.state.error[_ngcontent-%COMP%]{color:#e53935}
/*# sourceMappingURL=action-icon.component.css.map */`]});}}return n})();var Be="_EMERGENCY_CONTACTS_",we=(()=>{class n{constructor(){this._org=m(pT),this._change=R(Date.now()),this.category=R(null),this.asset_type=R(null),this.contacts=R([]),this.roles=R([]),ft(()=>{let e=this._org.active_building();this._change(),e&&this._load(e);}),this.ensureCategoryAndTypeExist();}async _load(e){let t=await this._queryCategory(e);this.category.set(t),this.roles.set(this._rolesFromCategory(t));let i=await this._queryAssetType(e,t);this.asset_type.set(i);let s=await this._queryContacts(e,i);this.contacts.set(s);}async _queryCategory(e){try{let{data:t}=await cxe({zone_id:e.id});return t.find(i=>i.name===Be)||null}catch{return null}}async _queryAssetType(e,t){if(!t)return null;try{let{data:i}=await rxe({zone_id:e.id,q:t.name});return i.find(s=>s.name===Be&&s.category_id===t.id)||null}catch{return null}}async _queryContacts(e,t){if(!t)return [];try{let{data:i}=await he({zone_id:e.id,type_id:t.id,limit:200});return i.filter(s=>s.asset_type_id===t.id).map(s=>this.assetToContact(s))}catch{return []}}_rolesFromCategory(e){if(!e?.description)return [];try{return JSON.parse(e.description).roles||[]}catch{return []}}async _queryLegacyMetadata(e){try{let{details:t}=await $u(e.id,"emergency_contacts");return t||{contacts:[],roles:[]}}catch{return {contacts:[],roles:[]}}}async ensureCategoryExists(){await this._org.waitUntilInitialised();let e=this._org.building;if(!e)return null;let t=await this._queryCategory(e);if(t)return t;try{let i=await Te(Zp(new Wp({name:Be,description:JSON.stringify({roles:[]}),hidden:!0}),[0,void 0,"",null]));return this._change.set(Date.now()),i}catch(i){return console.error("Failed to create emergency contacts category:",i),null}}async ensureAssetTypeExists(e){let t=this._org.building;if(!t||!e)return null;let i=await this._queryAssetType(t,e);if(i)return i;try{let s=await je({name:Be,category_id:e.id,zone_id:t.id,brand:"PlaceOS",description:"Emergency contacts for the building"});return this._change.set(Date.now()),s}catch(s){return console.error("Failed to create emergency contacts asset type:",s),null}}async ensureCategoryAndTypeExist(){let e=await this.ensureCategoryExists();return e?this.ensureAssetTypeExists(e):null}async migrateFromMetadata(){let e=this._org.building;if(!e)return  false;try{let t=await this._queryLegacyMetadata(e);if(!t?.contacts?.length&&!t?.roles?.length)return !0;let i=await this.ensureCategoryAndTypeExist();if(!i)throw new Error("Failed to create or find asset type");let s=await this._queryCategory(e);if(!s)throw new Error("Failed to find category");t.roles?.length&&await Te(Zp(new Wp(m$1(l({},s),{hidden:!0,description:JSON.stringify({roles:t.roles})})),[0,null,void 0,""]));for(let g of t.contacts||[]){let C=this.contactToAsset(g,i.id);await Ee(C);}return await wH(e.id,{name:"emergency_contacts",description:"Emergency Contacts (migrated to Assets)",details:{contacts:[],roles:[],migrated:!0}}),this._change.set(Date.now()),_b(_r("APP.CONCIERGE.CONTACTS_MIGRATION_SUCCESS")||"Successfully migrated emergency contacts."),!0}catch(t){return i2(_r("APP.CONCIERGE.CONTACTS_MIGRATION_ERROR",{error:t})||`Failed to migrate emergency contacts: ${t}`),false}}async needsMigration(){let e=this._org.building;if(!e)return  false;let t=await this._queryLegacyMetadata(e);return t&&(t.contacts?.length>0||t.roles?.length>0)?!t.migrated:false}async saveContact(e){try{let t=this.asset_type();if(t||(t=await this.ensureCategoryAndTypeExist()),!t)throw new Error("Failed to create or find asset type");let i=this.contactToAsset(e,t.id);return await Ee(i),this._change.set(Date.now()),_b(_r("APP.CONCIERGE.CONTACTS_SAVE_SUCCESS")),!0}catch(t){return i2(_r("APP.CONCIERGE.CONTACTS_SAVE_ERROR",{error:t})),false}}async deleteContact(e){try{return await txe(e),this._change.set(Date.now()),_b(_r("APP.CONCIERGE.CONTACTS_DELETE_SUCCESS")||"Successfully removed emergency contact."),!0}catch(t){return i2(_r("APP.CONCIERGE.CONTACTS_DELETE_ERROR",{error:t})||`Failed to remove emergency contact: ${t}`),false}}async updateRoles(e){try{let t=this.category();if(t||(t=await this.ensureCategoryExists()),!t)throw new Error("Failed to create or find category");return await Te(new Wp(m$1(l({},t),{description:JSON.stringify({roles:e})}))),this._change.set(Date.now()),!0}catch(t){return i2(`Failed to update roles: ${t}`),false}}async addRole(e){let t=this.roles();return t.includes(e)?true:this.updateRoles([...t,e].filter(Boolean).sort((i,s)=>i.localeCompare(s)))}async removeRole(e){try{let t=this.roles(),i=this.contacts(),s=t.filter(g=>g!==e);await this.updateRoles(s);for(let g of i)if(g.roles.includes(e)){let C=m$1(l({},g),{roles:g.roles.filter(ie=>ie!==e)});await this.saveContact(C);}return !0}catch(t){return i2(`Failed to remove role: ${t}`),false}}async renameRole(e,t){try{let i=this.roles(),s=this.contacts(),g=i.map(C=>C===e?t:C).filter(Boolean).sort((C,ie)=>C.localeCompare(ie));await this.updateRoles(g);for(let C of s)if(C.roles.includes(e)){let ie=m$1(l({},C),{roles:C.roles.map(nt=>nt===e?t:nt)});await this.saveContact(ie);}return !0}catch(i){return i2(`Failed to rename role: ${i}`),false}}refresh(){this._change.set(Date.now());}assetToContact(e){let t=e.other_data,i=this._org.levelWithID(e.zones);return {id:e.id,name:e.identifier||"",email:t?.email||"",phone:t?.phone||"",roles:t?.roles||[],zone:i?.id||""}}contactToAsset(e,t){let i=e.zone?this._org.levelWithID([e.zone]):null;return {id:e.id?.startsWith("contact-")?void 0:e.id,asset_type_id:t,identifier:e.name,other_data:{email:e.email,phone:e.phone,roles:e.roles},zone_id:this._org.building.id,zones:Oi$1([this._org.organisation.id,this._org.region?.id,this._org.building.id,i?.id].filter(s=>s))}}generateContactId(){return `contact-${bb(8)}`}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"});}}return n})();var Mi=()=>({standalone:true}),Si=(n,l)=>l.id;function Ti(n,l){n&1&&(ke(0,"button",3)(1,"icon"),Ei$1(2,"close"),Ve()());}function ki(n,l){if(n&1&&(ke(0,"mat-option",20),Ei$1(1),Ve()),n&2){let e=l.$implicit;Or("value",e.id),ye(),Fo(" ",e.display_name||e.name," ");}}function Ri(n,l){if(n&1&&(ke(0,"mat-option",20),Ei$1(1),Ve()),n&2){let e=qt().$implicit;Or("value",e),ye(),Fo(" ",e," ");}}function Ii(n,l){if(n&1&&Fe(0,Ri,2,2,"mat-option",20),n&2){let e=l.$implicit;Ue(e?0:-1);}}function Oi(n,l){if(n&1){let e=iC();ke(0,"main",4)(1,"form")(2,"a-user-search-field",7),ze("ngModelChange",function(i){X_(e);let s=qt();return J_(s.setUser(i))}),Ve(),P8(),ke(3,"div",8)(4,"label",9),Ei$1(5),aC(6,"translate"),Ve(),ke(7,"mat-form-field",10),Wt(8,"input",11),P8(),Ve()(),ke(9,"div",12)(10,"div",13)(11,"label",14),Ei$1(12),aC(13,"translate"),Ve(),ke(14,"mat-form-field",10),Wt(15,"input",15),aC(16,"translate"),P8(),Ve()(),ke(17,"div",13)(18,"label",14),Ei$1(19),aC(20,"translate"),Ve(),ke(21,"mat-form-field",10),Wt(22,"input",16),aC(23,"translate"),P8(),Ve()()(),ke(24,"div",8)(25,"label",17),Ei$1(26),aC(27,"translate"),Ve(),ke(28,"mat-form-field",10)(29,"mat-select",18),aC(30,"translate"),ke(31,"mat-option",19),Ei$1(32),aC(33,"translate"),Ve(),H4(34,ki,2,2,"mat-option",20,Si),Ve(),P8(),Ve()(),ke(36,"div",8)(37,"label",21),Ei$1(38),aC(39,"translate"),Ve(),ke(40,"div",12)(41,"mat-form-field",22)(42,"mat-select",23),aC(43,"translate"),H4(44,Ii,1,1,null,null,B4),Ve(),P8(),Ve(),ke(46,"div",24),aC(47,"translate"),ke(48,"button",25)(49,"icon"),Ei$1(50,"add"),Ve()()()()()()();}if(n&2){let e=qt(),t=rE(9);ye(2),Or("ngModelOptions",L6(40,Mi)),F8(),ye(3),iu(K6(6,18,"FORM.NAME")),ye(3),Or("formField",e.form.name),F8(),ye(4),iu(K6(13,20,"FORM.EMAIL")),ye(3),Or("formField",e.form.email)("placeholder",K6(16,22,"FORM.EMAIL")),F8(),ye(4),iu(K6(20,24,"FORM.PHONE")),ye(3),Or("formField",e.form.phone)("placeholder",K6(23,26,"APP.CONCIERGE.CONTACTS_PHONE_PLACEHOLDER")),F8(),ye(4),iu(K6(27,28,"RESOURCE.LEVEL")),ye(3),Or("formField",e.form.zone)("placeholder",K6(30,30,"COMMON.LEVEL_SELECT")),F8(),ye(3),iu(K6(33,32,"COMMON.LEVEL_ANY")),ye(2),G4(e.levels()),ye(4),iu(K6(39,34,"APP.CONCIERGE.CONTACTS_ROLES")),ye(4),Or("formField",e.form.roles)("placeholder",K6(43,36,"APP.CONCIERGE.CONTACTS_ROLES_SELECT")),F8(),ye(2),G4(e.roles()),ye(2),Or("matTooltip",K6(47,38,"APP.CONCIERGE.CONTACTS_ROLES_ADD")),ye(2),Or("content",t);}}function Ni(n,l){n&1&&(ke(0,"main",5),Wt(1,"mat-spinner",26),ke(2,"p"),Ei$1(3),aC(4,"translate"),Ve()()),n&2&&(ye(),Or("diameter",48),ye(2),iu(K6(4,2,"APP.CONCIERGE.CONTACTS_SAVING")));}function Ai(n,l){if(n&1){let e=iC();ke(0,"footer",6)(1,"button",27),ze("click",function(){X_(e);let i=qt();return J_(i.save())}),Ei$1(2),aC(3,"translate"),Ve()();}n&2&&(ye(2),Fo(" ",K6(3,1,"COMMON.SAVE")," "));}function Pi(n,l){if(n&1){let e=iC();ke(0,"div",28)(1,"mat-form-field",10)(2,"input",29),aC(3,"translate"),rF("ngModelChange",function(i){X_(e);let s=qt();return R6(s.role_name,i)||(s.role_name=i),J_(i)}),Ve(),P8(),Ve(),ke(4,"button",30),ze("click",function(){X_(e);let i=qt();return J_(i.addRole())}),Ei$1(5),aC(6,"translate"),Ve()();}if(n&2){let e=qt();ye(2),nF("ngModel",e.role_name),Or("placeholder",K6(3,3,"APP.CONCIERGE.CONTACTS_ROLES_NAME")),F8(),ye(3),Fo(" ",K6(6,5,"APP.CONCIERGE.CONTACTS_ROLES_SAVE")," ");}}var pi=(()=>{class n{constructor(){this._data=m(Vce),this._dialog_ref=m(_T),this._org=m(pT),this._contacts_service=m(we),this.loading=R(false),this.role_name=R(""),this.contact=this._data,this.roles=this._contacts_service.roles,this.model=R({id:this._data?.id||this._contacts_service.generateContactId(),name:this._data?.name||"",email:this._data?.email||"",phone:this._data?.phone||"",zone:this._data?.zone||"",roles:this._data?.roles||[]}),this.form=Jde(this.model),this.levels=this._org.active_levels,this._tooltip=np(Ta);}async addRole(){let e=this.role_name().trim();e&&(this._tooltip().close(),this.loading.set(true),this._dialog_ref.disableClose=true,await this._contacts_service.addRole(e),this.model.update(t=>m$1(l({},t),{roles:[...t.roles||[],e]})),this.role_name.set(""),this.loading.set(false),this._dialog_ref.disableClose=false);}setUser(e){this.model.update(t=>m$1(l({},t),{name:e?.name||"",email:e?.email||"",phone:e?.phone||""}));}async save(){this.loading.set(true),this._dialog_ref.disableClose=true;let e=this.model(),t={id:e.id,name:e.name,email:e.email,phone:e.phone,zone:e.zone,roles:e.roles||[]},i=await this._contacts_service.saveContact(t);this._dialog_ref.disableClose=false,this.loading.set(false),i&&this._dialog_ref.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["emergency-contact-modal"]],viewQuery:function(t,i){t&1&&tE(i._tooltip,Ta,5),t&2&&nE();},decls:10,vars:6,consts:[["role_form",""],[1,"bg-base-200","sticky","top-0","z-10","m-2","w-[calc(100%-1rem)]","rounded-sm","border-none","p-2"],[1,"px-2","text-xl","font-medium"],["icon","","matRipple","","mat-dialog-close",""],[1,"w-xl","p-4"],["loading","",1,"flex","h-64","flex-col","items-center","justify-center"],[1,"border-base-200","flex","items-center","justify-end","border-t","px-4","py-2"],["ngModel","",1,"mb-4",3,"ngModelChange","ngModelOptions"],[1,"flex","flex-col"],["for","name"],["appearance","outline"],["matInput","","placeholder","Full name",3,"formField"],[1,"flex","items-center","space-x-4"],[1,"flex","flex-1","flex-col"],["for","email"],["matInput","","type","email",3,"formField","placeholder"],["matInput","","type","tel",3,"formField","placeholder"],["for","zone"],[3,"formField","placeholder"],["value",""],[3,"value"],["for","roles"],["appearance","outline",1,"no-subscript","flex-1"],["multiple","",3,"formField","placeholder"],[3,"matTooltip"],["icon","","default","","matRipple","","customTooltip","",3,"content"],[1,"mb-4",3,"diameter"],["btn","","matRipple","",1,"w-48",3,"click"],[1,"bg-base-100","rounded-sm","p-4"],["matInput","",3,"ngModelChange","ngModel","placeholder"],["btn","","matRipple","",1,"w-full",3,"click"]],template:function(t,i){t&1&&(ke(0,"header",1)(1,"h2",2),Ei$1(2),aC(3,"translate"),Ve(),Fe(4,Ti,3,0,"button",3),Ve(),Fe(5,Oi,51,41,"main",4)(6,Ni,5,4,"main",5),Fe(7,Ai,4,3,"footer",6),_i$1(8,Pi,7,7,"ng-template",null,0,dC)),t&2&&(ye(2),Fo(" ",K6(3,4,i.contact?"APP.CONCIERGE.CONTACTS_EDIT":"APP.CONCIERGE.CONTACTS_NEW")," "),ye(2),Ue(i.loading()?-1:4),ye(),Ue(i.loading()?6:5),ye(2),Ue(i.loading()?-1:7));},dependencies:[het,hQe,fQe,BM,HY,Stt,btt,ii,ti,SY,Vl,B0,tMe,eMe,bV,QNe,XNe,IJ,Gp,Ont,Tt,Zt,Ta,kt,qtt,xde,Jtt],encapsulation:2});}}return n})();var Di=(n,l)=>l+n;function Fi(n,l){n&1&&(ke(0,"button",3)(1,"icon"),Ei$1(2,"close"),Ve()());}function Li(n,l){if(n&1){let e=iC();ke(0,"div",5)(1,"div",10),Ei$1(2),Ve(),ke(3,"button",11),ze("click",function(){let i=X_(e).$implicit,s=qt();return s.active.set(i),J_(s.role_name.set(i))}),ke(4,"icon"),Ei$1(5,"edit"),Ve()(),ke(6,"button",12),ze("click",function(){let i=X_(e).$implicit,s=qt();return J_(s.removeRole(i))}),ke(7,"icon"),Ei$1(8,"delete"),Ve()()();}if(n&2){let e=l.$implicit;qt();let t=rE(16);ye(2),iu(e),ye(),Or("content",t);}}function zi(n,l){if(n&1){let e=iC();ke(0,"div",13)(1,"mat-form-field",14)(2,"input",15),aC(3,"translate"),rF("ngModelChange",function(i){X_(e);let s=qt();return R6(s.role_name,i)||(s.role_name=i),J_(i)}),Ve(),P8(),Ve(),ke(4,"button",16),ze("click",function(){X_(e);let i=qt();return J_(i.updateRoles())}),Ei$1(5),aC(6,"translate"),Ve()();}if(n&2){let e=qt();ye(2),nF("ngModel",e.role_name),Or("placeholder",K6(3,3,"APP.CONCIERGE.CONTACTS_ROLES_NAME")),F8(),ye(3),Fo(" ",K6(6,5,"APP.CONCIERGE.CONTACTS_ROLES_SAVE")," ");}}var hi=(()=>{class n{constructor(){this._dialog_ref=m(_T),this._contacts_service=m(we),this.active=R(""),this.role_name=R(""),this.loading=R(false),this.roles=this._contacts_service.roles,this._tooltip=np(Ta);}async removeRole(e){e&&(this.loading.set(true),this._dialog_ref.disableClose=true,await this._contacts_service.removeRole(e),this.loading.set(false),this._dialog_ref.disableClose=false);}async updateRoles(){let e=this.role_name().trim();e&&(this.loading.set(true),this._tooltip().close(),this._dialog_ref.disableClose=true,this.active()?await this._contacts_service.renameRole(this.active(),e):await this._contacts_service.addRole(e),this.role_name.set(""),this.active.set(""),this.loading.set(false),this._dialog_ref.disableClose=false);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["role-management-modal"]],viewQuery:function(t,i){t&1&&tE(i._tooltip,Ta,5),t&2&&nE();},decls:17,vars:8,consts:[["role_form",""],[1,"bg-base-200","sticky","top-0","z-10","m-2","w-[calc(100%-1rem)]","rounded-sm","border-none","p-2"],[1,"px-2","text-xl","font-medium"],["icon","","matRipple","","mat-dialog-close",""],[1,"h-128","max-h-[65vh]","min-w-md","overflow-y-auto"],[1,"hover:bg-base-200:bg-base-300","border-base-200","m-2","flex","items-center","space-x-2","rounded-sm","border","p-2"],[1,"border-base-200","border-t"],["btn","","matRipple","","customTooltip","",1,"m-2","flex","w-[calc(100%-1rem)]","items-center","justify-center","space-x-2",3,"click","content"],[1,"truncate","pl-2"],[1,"text-2xl"],[1,"flex-1","truncate","px-2"],["icon","","matRipple","","customTooltip","",1,"border-secondary","text-secondary","h-12","w-12","rounded-sm","border",3,"click","content"],["icon","","matRipple","",1,"border-error","text-error","h-12","w-12","rounded-sm","border",3,"click"],[1,"bg-base-100","rounded-sm","p-4"],["appearance","outline"],["matInput","",3,"ngModelChange","ngModel","placeholder"],["btn","","matRipple","",1,"w-full",3,"click"]],template:function(t,i){if(t&1){let s=iC();ke(0,"header",1)(1,"h2",2),Ei$1(2),aC(3,"translate"),Ve(),Fe(4,Fi,3,0,"button",3),Ve(),ke(5,"main",4),H4(6,Li,9,2,"div",5,Di),Ve(),ke(8,"footer",6)(9,"button",7),ze("click",function(){return X_(s),i.active.set(""),J_(i.role_name.set(""))}),ke(10,"div",8),Ei$1(11),aC(12,"translate"),Ve(),ke(13,"icon",9),Ei$1(14,"add"),Ve()()(),_i$1(15,zi,7,7,"ng-template",null,0,dC);}if(t&2){let s=rE(16);ye(2),Fo(" ",K6(3,4,"APP.CONCIERGE.CONTACTS_ROLES_MANAGE")," "),ye(2),Ue(i.loading()?-1:4),ye(2),G4(i.roles()),ye(3),Or("content",s),ye(2),Fo(" ",K6(12,6,"APP.CONCIERGE.CONTACTS_ROLES_ADD")," ");}},dependencies:[tMe,bV,QNe,IJ,hQe,fQe,Vl,B0,BM,HY,Stt,btt,het,Ta,Jtt],encapsulation:2});}}return n})();var Vi=(n,l)=>({key:"name",name:n,content:l}),Bi=(n,l)=>({key:"roles",name:n,content:l,sortable:false}),Gi=(n,l)=>({key:"zone",name:n,content:l,sortable:false}),qi=n=>({key:"actions",name:" ",content:n,size:"6rem",sortable:false}),ji=(n,l,e,t)=>[n,l,e,t],Ui=(n,l)=>l+n;function Wi(n,l){if(n&1&&(ke(0,"mat-option",19),Ei$1(1),Ve()),n&2){let e=l.$implicit;Or("value",e),ye(),Fo(" ",e," ");}}function $i(n,l){if(n&1){let e=iC();ke(0,"button",24),ze("click",function(){let i=X_(e).row,s=qt();return J_(s.copyToClipboard(i.email))}),ke(1,"div",25),Ei$1(2),Ve(),ke(3,"div",26),Ei$1(4),Ve()();}if(n&2){let e=l.row;ye(2),iu(e.name),ye(2),Fo(" ",e.email," ");}}function Hi(n,l){if(n&1&&(ke(0,"span",28),Ei$1(1),Ve()),n&2){let e=l.$implicit;ye(),Fo(" ",e," ");}}function Yi(n,l){if(n&1&&(ke(0,"div",27),H4(1,Hi,2,1,"span",28,V4),Ve()),n&2){let e=l.data;ye(),G4(e);}}function Qi(n,l){if(n&1&&(ke(0,"div",29),Ei$1(1),aC(2,"level"),Ve()),n&2){let e=l.data;ye(),Fo(" ",e?K6(2,1,e)?.display_name:"All"," ");}}function Xi(n,l){if(n&1){let e=iC();ke(0,"div",30)(1,"button",20),aC(2,"translate"),ze("click",function(){let i=X_(e).row,s=qt();return J_(s.editContact(i))}),ke(3,"icon"),Ei$1(4,"edit"),Ve()(),ke(5,"button",31),aC(6,"translate"),ze("click",function(){let i=X_(e).row,s=qt();return J_(s.removeContact(i))}),ke(7,"icon"),Ei$1(8,"delete"),Ve()()();}n&2&&(ye(),Or("matTooltip",K6(2,2,"APP.CONCIERGE.CONTACTS_EDIT")),ye(4),Or("matTooltip",K6(6,4,"APP.CONCIERGE.CONTACTS_REMOVE")));}var gi=(()=>{class n{constructor(){this._org=m(pT),this._dialog=m(yT),this._clipboard=m(P2),this._contacts_service=m(we),this.search=R(""),this.role_filter=R(""),this.roles=this._contacts_service.roles,this.contacts=this._contacts_service.contacts,this.filtered_contacts=w(()=>{let e=this.role_filter();return this.contacts().filter(t=>!e||t.roles.includes(e))}),this.copyToClipboard=e=>{this._clipboard.copy(e)&&_b("User's email copied to clipboard.");};}ngOnInit(){this.checkMigration();}async checkMigration(){if(await this._contacts_service.needsMigration()){let t=await re({title:"Migrate Emergency Contacts",content:"Emergency contacts data from the old system was found. Would you like to migrate it to the new system?",icon:{content:"sync"}},this._dialog);t.reason==="done"&&(t.loading("Migrating contacts..."),await this._contacts_service.migrateFromMetadata()),t.close();}}manageRoles(){this._dialog.open(hi,{}).afterClosed().subscribe(()=>this._contacts_service.refresh());}editContact(e){this._dialog.open(pi,{data:e}).afterClosed().subscribe(()=>this._contacts_service.refresh());}async removeContact(e){let t=await re({title:"Remove Emergency Contact",content:`Are you sure you want to remove ${e.name} from the emergency contacts?`,icon:{content:"delete"}},this._dialog);t.reason==="done"&&(t.loading("Removing contact..."),await this._contacts_service.deleteContact(e.id),t.close());}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["","app-emergency-contacts",""]],decls:50,vars:49,consts:[["person_template",""],["roles_template",""],["zone_template",""],["actions_template",""],[1,"flex","h-px","flex-1"],[1,"flex","h-full","w-1/2","flex-1","flex-col"],["topbar","",1,"flex","flex-col","px-8","py-4"],[1,"flex","items-center","justify-between"],[1,"text-2xl","font-medium"],[1,"flex","items-center","space-x-2"],["appearance","outline",1,"no-subscript"],["matPrefix","",1,"text-2xl"],["matInput","",3,"ngModelChange","ngModel","placeholder"],["btn","","matRipple","",1,"space-x-2",3,"click"],[1,"text-2xl"],[1,"pr-2"],[1,"mt-2","flex","items-center","justify-between","py-2"],[3,"ngModelChange","ngModel","placeholder"],["value",""],[3,"value"],["icon","","default","","matRipple","",3,"click","matTooltip"],[1,"h-1/2","w-full","flex-1","overflow-auto","px-8"],[1,"block","min-w-208","text-sm",3,"data","filter","empty_message","columns","sortable"],[1,"h-12","w-full"],[1,"px-4","py-2","text-left","leading-tight",3,"click"],[1,""],[1,"font-mono","text-[0.625rem]","opacity-30"],[1,"flex","flex-wrap","p-2"],[1,"bg-info","text-info-content","m-1","rounded-2xl","px-2","py-1","font-mono","text-xs"],[1,"p-4"],[1,"flex","w-full","items-center","justify-end","space-x-2","p-2"],["icon","","default","","matRipple","","error","",3,"click","matTooltip"]],template:function(t,i){if(t&1){let s=iC();Wt(0,"app-topbar"),ke(1,"div",4),Wt(2,"app-sidebar"),ke(3,"main",5)(4,"section",6)(5,"div",7)(6,"h2",8),Ei$1(7),aC(8,"translate"),Ve(),ke(9,"div",9)(10,"mat-form-field",10)(11,"icon",11),Ei$1(12," search "),Ve(),ke(13,"input",12),aC(14,"translate"),rF("ngModelChange",function(C){return X_(s),R6(i.search,C)||(i.search=C),J_(C)}),Ve(),P8(),Ve(),ke(15,"button",13),ze("click",function(){return i.editContact()}),ke(16,"icon",14),Ei$1(17,"add"),Ve(),ke(18,"div",15),Ei$1(19),aC(20,"translate"),Ve()()()(),ke(21,"div",16)(22,"mat-form-field",10)(23,"mat-select",17),aC(24,"translate"),rF("ngModelChange",function(C){return X_(s),R6(i.role_filter,C)||(i.role_filter=C),J_(C)}),ke(25,"mat-option",18),Ei$1(26),aC(27,"translate"),Ve(),H4(28,Wi,2,2,"mat-option",19,Ui),Ve(),P8(),Ve(),ke(30,"div",9)(31,"button",20),aC(32,"translate"),ze("click",function(){return i.manageRoles()}),ke(33,"icon"),Ei$1(34,"list_alt"),Ve()()()()(),ke(35,"section",21),Wt(36,"simple-table",22),aC(37,"translate"),aC(38,"translate"),aC(39,"translate"),aC(40,"translate"),Wt(41,"div",23),_i$1(42,$i,5,2,"ng-template",null,0,dC)(44,Yi,3,0,"ng-template",null,1,dC)(46,Qi,3,3,"ng-template",null,2,dC)(48,Xi,9,6,"ng-template",null,3,dC),Ve()()();}if(t&2){let s=rE(43),g=rE(45),C=rE(47),ie=rE(49);ye(7),Fo(" ",K6(8,13,"APP.CONCIERGE.CONTACTS_HEADER")," "),ye(6),nF("ngModel",i.search),Or("placeholder",K6(14,15,"APP.CONCIERGE.CONTACTS_FILTER")),F8(),ye(6),Fo(" ",K6(20,17,"APP.CONCIERGE.CONTACTS_ADD")," "),ye(4),nF("ngModel",i.role_filter),Or("placeholder",K6(24,19,"APP.CONCIERGE.CONTACTS_ROLES_ALL")),F8(),ye(3),iu(K6(27,21,"APP.CONCIERGE.CONTACTS_ROLES_ALL")),ye(2),G4(i.roles()),ye(3),Or("matTooltip",K6(32,23,"APP.CONCIERGE.CONTACTS_ROLES_MANAGE")),ye(5),Or("data",i.filtered_contacts())("filter",i.search())("empty_message",K6(37,25,i.search()?"APP.CONCIERGE.CONTACTS_SEARCH_EMPTY":"APP.CONCIERGE.CONTACTS_EMPTY"))("columns",V6(44,ji,U6(33,Vi,K6(38,27,"COMMON.PERSON"),s),U6(36,Bi,K6(39,29,"APP.CONCIERGE.CONTACTS_ROLES"),g),U6(39,Gi,K6(40,31,"RESOURCE.LEVEL"),C),F6(42,qi,ie)))("sortable",true);}},dependencies:[Vl,B0,het,qtt,xde,Ne,BM,HY,pde,ii,ti,SY,Stt,btt,Zv,Hv,tMe,bV,QNe,IJ,Jtt,f],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--base-100)}
/*# sourceMappingURL=emergency-contacts.component.css.map */`]});}}return n})();var te=(()=>{class n extends Ys{constructor(){super(),this._org=m(pT),this._onsite={},this._events={},this._users=R([]),this._poll=R(0),this.loading=R(false),this.filters=R({}),this.search=R(""),this.user_events=R({}),this.filtered_users=w(()=>{let e=this.search(),t=this._users(),i=this.filters();return t.filter(s=>(!e||s.name.toLowerCase().includes(e)||s.email.toLowerCase().includes(e))&&(!i.only_onsite||this._onsite[s.email]))}),this.loadUsers(),ft(()=>{this._org.active_building(),this._poll(),this.timeout("load-events",()=>this._loadEvents(),300);});}setFilters(e){this.filters.set(l(l({},this.filters()),e));}setSearchString(e){this.search.set(e);}startPolling(e=3*Sg){let t=Math.max(e,3*Sg);this._poll.update(i=>i+1),this.interval("poll",()=>this._poll.update(i=>i+1),t);}stopPolling(){this.clearInterval("poll");}async checkin(e){let t=await en$1({booking_start:Math.floor(new Date().valueOf()/1e3),booking_end:Math.floor(Ai$1(new Date).valueOf()/1e3),asset_id:e.email,title:"Checked-in Onsite",description:this._org.building.display_name||this._org.building.name,zones:[this._org.building.id],booking_type:"staff"});await rn$1(t.id,true),this._events[e.email]=t,this._onsite[e.email]=true;}async checkout(e){let t=this._events[e.email];if(t){let i=await en$1(m$1(l({},t.toJSON()),{booking_end:Math.floor(new Date().valueOf()/1e3)}));await rn$1(i.id,false),this._events[e.email]=i,this._onsite[e.email]=false;}}async _loadEvents(){this.loading.set(true);let e=await U({period_start:Kn(In(Date.now())),period_end:Kn(Ai$1(Date.now())),type:"staff"}),t={},i=new Date().valueOf();for(let s of e)CPe(i,i,s.date,s.date+s.duration*60*1e3)&&(t[s.asset_id]=s.checked_in,this._events[s.asset_id]=s);this._onsite=t,this.user_events.set(t),this.loading.set(false);}async loadUsers(){let e=await G("");e.sort((t,i)=>t.name.localeCompare(i.name)),this._users.set(e);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"});}}return n})();function Ji(n,l){n&1&&(ke(0,"div",5),Ei$1(1),aC(2,"translate"),Ve()),n&2&&(ye(),Fo(" ",K6(2,1,"APP.CONCIERGE.DIRECTORY_ONSITE")," "));}function Zi(n,l){if(n&1){let e=iC();ke(0,"div",0),Wt(1,"a-user-avatar",1),ke(2,"div",2)(3,"div",3),Ei$1(4),Ve(),ke(5,"div",4),Ei$1(6),Ve()(),Fe(7,Ji,3,3,"div",5),ke(8,"div",6)(9,"action-icon",7),aC(10,"translate"),ze("click",function(){X_(e);let i=qt();return J_(i.onsite()?i.checkout():i.checkin())}),Ve(),ke(11,"a",8),aC(12,"translate"),ke(13,"icon"),Ei$1(14,"email"),Ve()(),ke(15,"a",8),aC(16,"translate"),ke(17,"icon"),Ei$1(18,"call"),Ve()()()();}if(n&2){let e=qt();ye(),Or("user",e.user()),ye(3),iu(e.user()?.name),ye(2),Fo(" ",e.user()?.email," "),ye(),Ue(e.onsite()?7:-1),ye(2),Or("matTooltip",K6(10,13,e.onsite()?"COMMON.CHECK_IN":"COMMON.CHECK_OUT"))("loading",e.loading())("content",e.onsite()?"event_busy":"event_available"),ye(2),Or("matTooltip",K6(12,15,"APP.CONCIERGE.DIRECTORY_EMAIL"))("href","mailto:"+e.user()?.email,By),Ge$1("disabled",!e.user()?.email),ye(4),Or("matTooltip",K6(16,17,"APP.CONCIERGE.DIRECTORY_PHONE"))("href","tel:"+e.user()?.phone,By),Ge$1("disabled",!e.user()?.phone);}}var _i=(()=>{class n{constructor(){this._state=m(te),this.user=Xi$1(void 0),this.onsite=Xi$1(void 0),this.loading=R(false),this.checkin=async()=>{this.loading.set(true),await this._state.checkin(this.user()).catch(e=>i2(_r("APP.CONCIERGE.DIRECTORY_CHECKIN_ERROR",{error:e}))),this.loading.set(false);},this.checkout=async()=>{this.loading.set(true),await this._state.checkout(this.user()).catch(e=>_r("APP.CONCIERGE.DIRECTORY_CHECKOUT_ERROR",{error:e})),this.loading.set(false);};}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["staff-details"]],inputs:{user:[1,"user"],onsite:[1,"onsite"]},decls:1,vars:1,consts:[["details","",1,"border-base-200","bg-base-100","flex","w-full","items-center","border-b","px-4","py-2","hover:opacity-80"],[3,"user"],[1,"flex","flex-1","flex-col"],[1,"px-2"],[1,"text-opacity-50","px-2","text-xs"],[1,"px-4","text-xs","opacity-50"],[1,"flex","items-center"],[3,"click","matTooltip","loading","content"],["icon","","matRipple","",3,"matTooltip","href"]],template:function(t,i){t&1&&Fe(0,Zi,19,19,"div",0),t&2&&Ue(i.user()?0:-1);},dependencies:[Yn,li,het,qtt,xde,Jtt],encapsulation:2});}}return n})();var en=["container"];function tn(n,l){if(n&1){let e=iC();ke(0,"div",6),ze("click",function(){let i=X_(e).$implicit,s=qt();return J_(s.scrollTo(i))}),Ei$1(1),Ve();}if(n&2){let e=l.$implicit,t=qt();Oe("disabled",t.user_list()[e].length<=0)("active",e===t.active_group()),ye(),Fo(" ",e," ");}}function nn(n,l){if(n&1&&Wt(0,"staff-details",8),n&2){let e=l.$implicit,t=l.$index,i=qt(2).$implicit,s=qt(2);Or("id","letter-"+i+"-"+t)("user",e)("onsite",s.events()?s.events()[e.email]:false);}}function an(n,l){if(n&1&&(ke(0,"div",7),Ei$1(1),Ve(),H4(2,nn,1,3,"staff-details",8,V4)),n&2){let e=qt().$implicit,t=qt(2);Or("id","letter-"+(e==="#"?"0":e)),ye(),Fo(" ",e," "),ye(),G4(t.user_list()[e]);}}function on(n,l){if(n&1&&Fe(0,an,4,2),n&2){let e=l.$implicit,t=qt(2);Ue(t.user_list()[e].length?0:-1);}}function rn(n,l){if(n&1&&H4(0,on,1,1,null,null,V4),n&2){let e=qt();G4(e.groups);}}function sn(n,l){n&1&&(ke(0,"div",4)(1,"p"),Ei$1(2),aC(3,"translate"),Ve()()),n&2&&(ye(2),Fo(" ",K6(3,1,"APP.CONCIERGE.DIRECTORY_SEARCH_EMPTY")," "));}function ln(n,l){n&1&&Wt(0,"mat-progress-bar",5);}var Ge="#abcdefghijklmnopqrstuvwxyz".split(""),ui=(()=>{class n extends Ys{constructor(){super(),this._state=m(te),this.active_group=R("#"),this.groups=Ge,this.events=this._state.user_events,this.loading=this._state.loading,this.filtered_users=this._state.filtered_users,this.user_count=w(()=>this.filtered_users().length),this.user_list=w(()=>{let e=this.filtered_users()||[],t={};for(let i of Ge)t[i]=e.filter(s=>s.name.toLowerCase()[0].startsWith(i)||i==="#"&&!Ge.includes(s.name.toLowerCase()[0]));return t}),this._el=np("container"),ft(()=>{this.user_list(),this.timeout("scroll",()=>this.onScroll({}),30);});}onScroll(e){let t=this._el();if(!t)return;let i=t.nativeElement.scrollTop;for(let s of Ge){let g=document.querySelector(`#letter-${s==="#"?"0":s}`);if(g){if(g.offsetTop-i>0)break;this.active_group.set(s);}}}scrollTo(e){let t=document.querySelector(`#letter-${e}-0`);t&&(t.scrollIntoView({behavior:"smooth",block:"center"}),this.active_group.set(e));}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["staff-listings"]],viewQuery:function(t,i){t&1&&tE(i._el,en,5),t&2&&nE();},features:[Pe],decls:8,vars:2,consts:[["container",""],[1,"flex","w-full","items-center","justify-center","p-2"],["letter","",1,"flex","h-6","w-6","cursor-pointer","items-center","justify-center","text-xs","capitalize",3,"disabled","active"],[1,"relative","w-full","flex-1","overflow-auto",2,"height","50%",3,"scroll"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center"],["mode","indeterminate"],["letter","",1,"flex","h-6","w-6","cursor-pointer","items-center","justify-center","text-xs","capitalize",3,"click"],["group","",1,"border-base-300","bg-base-200","sticky","top-0","z-10","m-2","rounded-lg","border","text-sm","font-medium","capitalize",3,"id"],[3,"id","user","onsite"]],template:function(t,i){t&1&&(ke(0,"div",1),H4(1,tn,2,5,"div",2,V4),Ve(),ke(3,"div",3,0),ze("scroll",function(g){return i.onScroll(g)}),Fe(5,rn,2,0)(6,sn,4,3,"div",4),Ve(),Fe(7,ln,1,0,"mat-progress-bar",5)),t&2&&(ye(),G4(i.groups),ye(4),Ue(i.user_count()?5:6),ye(2),Ue(i.loading()?7:-1));},dependencies:[Z,L,_i,Jtt],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:50%}[letter][_ngcontent-%COMP%]{transition:font-size .2s,color .2s}[group][_ngcontent-%COMP%]{border-color:#ccc;padding:.5rem 1.65rem}.disabled[_ngcontent-%COMP%]{opacity:.2;pointer-events:none}.active[_ngcontent-%COMP%]{font-size:1.25rem;opacity:1;color:#d81b60}
/*# sourceMappingURL=staff-listing.component.css.map */`]});}}return n})();var cn=["switch"],dn=["*"];function mn(n,l){n&1&&(ke(0,"span",11),pA(),ke(1,"svg",13),Wt(2,"path",14),Ve(),ke(3,"svg",15),Wt(4,"path",16),Ve()());}var pn=new v("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:false,hideIcon:false,disabledInteractive:false})}),qe=class{source;checked;constructor(l,e){this.source=l,this.checked=e;}},it=(()=>{class n{_elementRef=m(Y);_focusMonitor=m(Zo);_changeDetectorRef=m(wt);defaults=m(pn);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=false;_createChangeEvent(e){return new qe(this,e)}_labelId;get buttonId(){return `${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus();}_noopAnimations=Xt();_focused=false;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=false;color;disabled=false;disableRipple=false;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck();}hideIcon;disabledInteractive;change=new re$1;toggleChange=new re$1;get inputId(){return `${this.id||this._uniqueId}-input`}constructor(){m(_n$1).load(Bl);let e=m(new lE("tabindex"),{optional:true}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=m(Lt).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??false,this.disabledInteractive=t.disabledInteractive??false,this._labelId=this._uniqueId+"-label";}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,true).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=true,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=false,this._onTouched(),this._changeDetectorRef.markForCheck();});});}ngOnChanges(e){e.required&&this._validatorOnChange();}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef);}writeValue(e){this.checked=!!e;}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouched=e;}validate(e){return this.required&&e.value!==true?{required:true}:null}registerOnValidatorChange(e){this._validatorOnChange=e;}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck();}toggle(){this.checked=!this.checked,this._onChange(this.checked);}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked));}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new qe(this,this.checked))));}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ie({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(t,i){if(t&1&&Mn(cn,5),t&2){let s;Ae(s=De())&&(i._switchElement=s.first);}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,i){t&2&&(Nn("id",i.id),Ge$1("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Ls(i.color?"mat-"+i.color:""),Oe("mat-mdc-slide-toggle-focused",i._focused)("mat-mdc-slide-toggle-checked",i.checked)("_mat-animation-noopable",i._noopAnimations));},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",ve],color:"color",disabled:[2,"disabled","disabled",ve],disableRipple:[2,"disableRipple","disableRipple",ve],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ou(e)],checked:[2,"checked","checked",ve],hideIcon:[2,"hideIcon","hideIcon",ve],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ve]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[ot([{provide:Ha,useExisting:Tn(()=>n),multi:true},{provide:jo,useExisting:n,multi:true}]),Ct],ngContentSelectors:dn,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,i){if(t&1&&(pn$1(),ke(0,"div",1)(1,"button",2,0),ze("click",function(){return i._handleClick()}),Wt(3,"div",3)(4,"span",4),ke(5,"span",5)(6,"span",6)(7,"span",7),Wt(8,"span",8),Ve(),ke(9,"span",9),Wt(10,"span",10),Ve(),Fe(11,mn,5,0,"span",11),Ve()()(),ke(12,"label",12),ze("click",function(g){return g.stopPropagation()}),Le(13),Ve()()),t&2){let s=rE(2);Or("labelPosition",i.labelPosition),ye(),Oe("mdc-switch--selected",i.checked)("mdc-switch--unselected",!i.checked)("mdc-switch--checked",i.checked)("mdc-switch--disabled",i.disabled)("mat-mdc-slide-toggle-disabled-interactive",i.disabledInteractive),Or("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex)("disabled",i.disabled&&!i.disabledInteractive),Ge$1("id",i.buttonId)("name",i.name)("aria-label",i.ariaLabel)("aria-labelledby",i._getAriaLabelledBy())("aria-describedby",i.ariaDescribedby)("aria-required",i.required||null)("aria-checked",i.checked)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),ye(9),Or("matRippleTrigger",s)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",true),ye(),Ue(i.hideIcon?-1:11),ye(),Or("for",i.buttonId),Ge$1("id",i._labelId);}},dependencies:[B0,JJe],styles:[`.mdc-switch {
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
`],encapsulation:2})}return n})(),fi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=le({type:n});static \u0275inj=se({imports:[it,bt]})}return n})();var gn=(n,l)=>l.id;function _n(n,l){if(n&1&&(ke(0,"mat-option",3),Ei$1(1),Ve()),n&2){let e=l.$implicit;Or("value",e.id),ye(),Fo(" ",e.display_name||e.name," ");}}var vi=(()=>{class n extends Ys{constructor(){super(),this._state=m(te),this._org=m(pT),this._route=m(Ii$1),this._router=m(xn),this.zones=R([]),this.levels=R([]),this.filters=R({}),this.setDate=e=>this._state.setFilters({date:e}),this.setFilters=e=>this._state.setFilters(e),this.setSearch=e=>this._state.setSearchString(e),this.updateZones=e=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:e.join(",")},queryParamsHandling:"merge"}),this._state.setFilters({zones:e});},ft(()=>{this.filters.set(this._state.filters()||{});}),ft(()=>{let e=this._org.active_levels()||[];N(()=>{this.levels.set(e);let t=this.zones().filter(i=>e.find(s=>s.id===i));!t.length&&e.length&&t.push(e[0].id),this.zones.set(t),this.updateZones(t);});});}async ngOnInit(){await this._org.waitUntilInitialised(),this.subscription("route.query",this._route.queryParamMap.subscribe(e=>{if(e.has("zone_ids")){let t=e.get("zone_ids").split(",");if(t.length){let i=this._org.levelWithID(t);if(!i)return;this._org.building=this._org.buildings.find(s=>s.id===i.parent_id),this.zones.set(t);}}})),this.setSearch("");}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["staff-topbar"]],features:[Pe],decls:12,vars:8,consts:[[1,"border-base-200","bg-base-100","flex","items-center","space-x-4","border-b","p-4"],["appearance","outline",1,"no-subscript","w-48"],["multiple","",3,"ngModelChange","ngModel","placeholder"],[3,"value"],[1,"m-2",3,"ngModelChange","ngModel"],[1,"text-xs"],[1,"w-2","flex-1"],[1,"mr-2",3,"modelChange"]],template:function(t,i){t&1&&(ke(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),aC(3,"translate"),rF("ngModelChange",function(g){return R6(i.zones,g)||(i.zones=g),g}),ze("ngModelChange",function(g){return i.updateZones(g)}),H4(4,_n,2,2,"mat-option",3,gn),Ve(),P8(),Ve(),ke(6,"mat-slide-toggle",4),ze("ngModelChange",function(g){return i.setFilters({only_onsite:g})}),ke(7,"div",5),Ei$1(8),aC(9,"translate"),Ve()(),P8(),Wt(10,"div",6),ke(11,"searchbar",7),ze("modelChange",function(g){return i.setSearch(g)}),Ve()()),t&2&&(ye(2),nF("ngModel",i.zones),Or("placeholder",K6(3,4,"COMMON.LEVEL_ALL")),F8(),ye(2),G4(i.levels()),ye(2),Or("ngModel",i.filters()?.only_onsite),F8(),ye(2),Fo(" ",K6(9,6,"APP.CONCIERGE.DIRECTORY_ONSITE_ONLY")," "));},dependencies:[fi,it,z,BM,HY,ii,ti,SY,tMe,QNe,IJ,Jtt],styles:[`mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}
/*# sourceMappingURL=staff-topbar.component.css.map */`]});}}return n})();function un(n,l){n&1&&Wt(0,"mat-progress-bar",4);}var bi=(()=>{class n{constructor(){this._state=m(te),this.loading=this._state.loading;}ngOnInit(){this._state.startPolling();}ngOnDestroy(){this._state.stopPolling();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["","app-new-staff",""]],decls:7,vars:1,consts:[[1,"flex","h-px","flex-1"],[1,"flex","h-full","w-1/2","flex-1","flex-col"],[1,"w-full"],[1,"h-0","w-full","flex-1"],["mode","indeterminate",1,"w-full"]],template:function(t,i){t&1&&(Wt(0,"app-topbar"),ke(1,"div",0),Wt(2,"app-sidebar"),ke(3,"main",1),Wt(4,"staff-topbar",2)(5,"staff-listings",3),Fe(6,un,1,0,"mat-progress-bar",4),Ve()()),t&2&&(ye(6),Ue(i.loading()?6:-1));},dependencies:[Z,L,Zv,Hv,vi,ui],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--base-100)}
/*# sourceMappingURL=staff.component.css.map */`]});}}return n})();var Ro=[{path:"",component:bi,title:"Staff"},{path:"emergency-contacts",component:gi,title:"Emergency Contacts"}];export{Ro as ROUTES};//# sourceMappingURL=staff.routes-JssgXh5R.js.map
