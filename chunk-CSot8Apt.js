import {z}from'./chunk-DRQtjF2U.js';import {f}from'./chunk-dn5BgBtR.js';import {r as re}from'./chunk-CdGa8uDN.js';import {k as kt}from'./chunk-Dj8EIXSO.js';import {G}from'./chunk-C9HWg3gV.js';import'./chunk-iv-ZwkdK.js';import {N as Ne}from'./chunk-B1-H2GRX.js';import {h as he,R as Re,T as Te$1,j as je}from'./chunk-B2_KAFx-.js';import {e as en$1,r as rn$1,U}from'./chunk-CMjBea2r.js';import {d as dk,t as tk,p as pi$1,u as ui$1,i as bl,F as Fo,f as fl,D as Dt,c as ci,b as Lr}from'./chunk-CR_Fxm3z.js';import {m as m$1,T as Te,bN as Z,bO as L,j as jt,a as ke,u as Fe,V as Ve,w as ge,U as Ue,W as WS,S as QS,cr as yH,O,D as De,a9 as Zv,M as Ml,h as Qw,g as YQe,f as DJe,Z as Zce,Q as QN,A as A3,bJ as Nce,s as s3,bm as eJe,bn as JXe,l as F0e,at as sB,x as x0e,G as GQ,N as NJe,az as AD,p as gi$1,R as RD,au as HL,K as KK,r as We,v as t8,an as hi$1,ao as ND,L as LE,y as ko,z as l4,ax as VL,B as Nr,C as QK,aA as Yd,H as n8,bB as e4,aq as Q8,ar as X8,F as Fs,e as Tt,am as l,bd as og,bi as Si$1,al as m$2,aJ as Kn,a2 as Dn,be as sxe,bf as P,b as bi$1,k as kn,q,P as Pe,X as Up,ad as kE,ae as PE,dm as $Oe,dn as UOe,bs as Hv,ci as xh,cq as Oh,cj as pV,_ as _r,a8 as GV,c8 as LOe,br as Ri$1,by as eb,aR as ZS,aL as Y9e,aM as z9e,aB as rae,bo as L0e,bp as k0e,bq as Th,dp as se,dq as ie,dr as vt,a$ as j,ds as jo,dt as Dt$1,du as v,dv as Kt,cl as te$1,dw as yn,dx as Nl,dy as GE,dz as kt$1,dA as xQe,b6 as At,dB as Ee,aZ as gn$1,a_ as Le,E as Oe,bu as $e,I as ft,bv as vu,dC as Pa,bw as An,dD as qd,dc as Mn,d2 as Ds,dE as xn,dF as Ie,dG as Ae,J as e8,aY as Cs,ay as zt,dk as J5,aU as Z8,bL as PI,bW as _E,aS as O_,aT as N_,b8 as G8}from'./main-CTJJTDNF.js';var yi=["*"];function wi(n,l){if(n&1&&(ke(0,"div")(1,"icon"),gi$1(2),Ve()()),n&2){let e=zt();Ds("state center "+e.state()),ge(2),ko(" ",e.state()==="success"?"done":"close"," ");}}function Ei(n,l){n&1&&(ke(0,"div",3),jt(1,"mat-spinner",4),Ve()),n&2&&(ge(),Nr("diameter",16));}var li=(()=>{class n{constructor(){this.icon=Cs(void 0),this.className=Cs("material-symbols-rounded"),this.content=Cs(void 0),this.loading=Cs(void 0),this.disabled=Cs(void 0),this.state=Cs("");}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te({type:n,selectors:[["action-icon"]],inputs:{icon:[1,"icon"],className:[1,"className"],content:[1,"content"],loading:[1,"loading"],disabled:[1,"disabled"],state:[1,"state"]},ngContentSelectors:yi,decls:6,vars:8,consts:[["icon","","matRipple","","title","",1,"relative",3,"disabled"],["root","",3,"className","icon"],[3,"class"],[1,"loader","center"],[3,"diameter"]],template:function(t,i){t&1&&(gn$1(),ke(0,"button",0)(1,"icon",1),gi$1(2),Le(3),Ve(),Fe(4,wi,3,3,"div",2),Fe(5,Ei,2,1,"div",3),Ve()),t&2&&(Oe("success",i.state()==="success"),Nr("disabled",i.loading()||i.disabled()),ge(),Nr("className",i.className())("icon",i.icon()),ge(),ko(" ",i.content()," "),ge(2),Ue(!i.loading()&&i.state()?4:-1),ge(),Ue(i.loading()?5:-1));},dependencies:[Ml,Qw,Dt,ci,YQe],styles:[".action-icon.fade[_ngcontent-%COMP%] > icon[_ngcontent-%COMP%]{opacity:.35}.success[_ngcontent-%COMP%]{pointer-events:none}.success[_ngcontent-%COMP%]   icon[root][_ngcontent-%COMP%]{opacity:.2}.state.success[_ngcontent-%COMP%]{color:#388e3c}.state.error[_ngcontent-%COMP%]{color:#e53935}"]});}}return n})();var Be="_EMERGENCY_CONTACTS_",we=(()=>{class n{constructor(){this._org=m$1(WS),this._change=O(Date.now()),this.category=O(null),this.asset_type=O(null),this.contacts=O([]),this.roles=O([]),Tt(()=>{let e=this._org.active_building();this._change(),e&&this._load(e);}),this.ensureCategoryAndTypeExist();}async _load(e){let t=await this._queryCategory(e);this.category.set(t),this.roles.set(this._rolesFromCategory(t));let i=await this._queryAssetType(e,t);this.asset_type.set(i);let s=await this._queryContacts(e,i);this.contacts.set(s);}async _queryCategory(e){try{let{data:t}=await $Oe({zone_id:e.id});return t.find(i=>i.name===Be)||null}catch{return null}}async _queryAssetType(e,t){if(!t)return null;try{let{data:i}=await UOe({zone_id:e.id,q:t.name});return i.find(s=>s.name===Be&&s.category_id===t.id)||null}catch{return null}}async _queryContacts(e,t){if(!t)return [];try{let{data:i}=await he({zone_id:e.id,type_id:t.id,limit:200});return i.filter(s=>s.asset_type_id===t.id).map(s=>this.assetToContact(s))}catch{return []}}_rolesFromCategory(e){if(!e?.description)return [];try{return JSON.parse(e.description).roles||[]}catch{return []}}async _queryLegacyMetadata(e){try{let{details:t}=await Hv(e.id,"emergency_contacts");return t||{contacts:[],roles:[]}}catch{return {contacts:[],roles:[]}}}async ensureCategoryExists(){await this._org.waitUntilInitialised();let e=this._org.building;if(!e)return null;let t=await this._queryCategory(e);if(t)return t;try{let i=await Re(xh(new Oh({name:Be,description:JSON.stringify({roles:[]}),hidden:!0}),[0,void 0,"",null]));return this._change.set(Date.now()),i}catch(i){return console.error("Failed to create emergency contacts category:",i),null}}async ensureAssetTypeExists(e){let t=this._org.building;if(!t||!e)return null;let i=await this._queryAssetType(t,e);if(i)return i;try{let s=await Te$1({name:Be,category_id:e.id,zone_id:t.id,brand:"PlaceOS",description:"Emergency contacts for the building"});return this._change.set(Date.now()),s}catch(s){return console.error("Failed to create emergency contacts asset type:",s),null}}async ensureCategoryAndTypeExist(){let e=await this.ensureCategoryExists();return e?this.ensureAssetTypeExists(e):null}async migrateFromMetadata(){let e=this._org.building;if(!e)return  false;try{let t=await this._queryLegacyMetadata(e);if(!t?.contacts?.length&&!t?.roles?.length)return !0;let i=await this.ensureCategoryAndTypeExist();if(!i)throw new Error("Failed to create or find asset type");let s=await this._queryCategory(e);if(!s)throw new Error("Failed to find category");t.roles?.length&&await Re(xh(new Oh(m$2(l({},s),{hidden:!0,description:JSON.stringify({roles:t.roles})})),[0,null,void 0,""]));for(let g of t.contacts||[]){let C=this.contactToAsset(g,i.id);await je(C);}return await pV(e.id,{name:"emergency_contacts",description:"Emergency Contacts (migrated to Assets)",details:{contacts:[],roles:[],migrated:!0}}),this._change.set(Date.now()),Zv(_r("APP.CONCIERGE.CONTACTS_MIGRATION_SUCCESS")||"Successfully migrated emergency contacts."),!0}catch(t){return GV(_r("APP.CONCIERGE.CONTACTS_MIGRATION_ERROR",{error:t})||`Failed to migrate emergency contacts: ${t}`),false}}async needsMigration(){let e=this._org.building;if(!e)return  false;let t=await this._queryLegacyMetadata(e);return t&&(t.contacts?.length>0||t.roles?.length>0)?!t.migrated:false}async saveContact(e){try{let t=this.asset_type();if(t||(t=await this.ensureCategoryAndTypeExist()),!t)throw new Error("Failed to create or find asset type");let i=this.contactToAsset(e,t.id);return await je(i),this._change.set(Date.now()),Zv(_r("APP.CONCIERGE.CONTACTS_SAVE_SUCCESS")),!0}catch(t){return GV(_r("APP.CONCIERGE.CONTACTS_SAVE_ERROR",{error:t})),false}}async deleteContact(e){try{return await LOe(e),this._change.set(Date.now()),Zv(_r("APP.CONCIERGE.CONTACTS_DELETE_SUCCESS")||"Successfully removed emergency contact."),!0}catch(t){return GV(_r("APP.CONCIERGE.CONTACTS_DELETE_ERROR",{error:t})||`Failed to remove emergency contact: ${t}`),false}}async updateRoles(e){try{let t=this.category();if(t||(t=await this.ensureCategoryExists()),!t)throw new Error("Failed to create or find category");return await Re(new Oh(m$2(l({},t),{description:JSON.stringify({roles:e})}))),this._change.set(Date.now()),!0}catch(t){return GV(`Failed to update roles: ${t}`),false}}async addRole(e){let t=this.roles();return t.includes(e)?true:this.updateRoles([...t,e].filter(Boolean).sort((i,s)=>i.localeCompare(s)))}async removeRole(e){try{let t=this.roles(),i=this.contacts(),s=t.filter(g=>g!==e);await this.updateRoles(s);for(let g of i)if(g.roles.includes(e)){let C=m$2(l({},g),{roles:g.roles.filter(ie=>ie!==e)});await this.saveContact(C);}return !0}catch(t){return GV(`Failed to remove role: ${t}`),false}}async renameRole(e,t){try{let i=this.roles(),s=this.contacts(),g=i.map(C=>C===e?t:C).filter(Boolean).sort((C,ie)=>C.localeCompare(ie));await this.updateRoles(g);for(let C of s)if(C.roles.includes(e)){let ie=m$2(l({},C),{roles:C.roles.map(nt=>nt===e?t:nt)});await this.saveContact(ie);}return !0}catch(i){return GV(`Failed to rename role: ${i}`),false}}refresh(){this._change.set(Date.now());}assetToContact(e){let t=e.other_data,i=this._org.levelWithID(e.zones);return {id:e.id,name:e.identifier||"",email:t?.email||"",phone:t?.phone||"",roles:t?.roles||[],zone:i?.id||""}}contactToAsset(e,t){let i=e.zone?this._org.levelWithID([e.zone]):null;return {id:e.id?.startsWith("contact-")?void 0:e.id,asset_type_id:t,identifier:e.name,other_data:{email:e.email,phone:e.phone,roles:e.roles},zone_id:this._org.building.id,zones:Ri$1([this._org.organisation.id,this._org.region?.id,this._org.building.id,i?.id].filter(s=>s))}}generateContactId(){return `contact-${eb(8)}`}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"});}}return n})();var Mi=()=>({standalone:true}),Si=(n,l)=>l.id;function Ti(n,l){n&1&&(ke(0,"button",3)(1,"icon"),gi$1(2,"close"),Ve()());}function ki(n,l){if(n&1&&(ke(0,"mat-option",20),gi$1(1),Ve()),n&2){let e=l.$implicit;Nr("value",e.id),ge(),ko(" ",e.display_name||e.name," ");}}function Ii(n,l){if(n&1&&(ke(0,"mat-option",20),gi$1(1),Ve()),n&2){let e=zt().$implicit;Nr("value",e),ge(),ko(" ",e," ");}}function Ri(n,l){if(n&1&&Fe(0,Ii,2,2,"mat-option",20),n&2){let e=l.$implicit;Ue(e?0:-1);}}function Oi(n,l){if(n&1){let e=AD();ke(0,"main",4)(1,"form")(2,"a-user-search-field",7),We("ngModelChange",function(i){O_(e);let s=zt();return N_(s.setUser(i))}),Ve(),KK(),ke(3,"div",8)(4,"label",9),gi$1(5),RD(6,"translate"),Ve(),ke(7,"mat-form-field",10),jt(8,"input",11),KK(),Ve()(),ke(9,"div",12)(10,"div",13)(11,"label",14),gi$1(12),RD(13,"translate"),Ve(),ke(14,"mat-form-field",10),jt(15,"input",15),RD(16,"translate"),KK(),Ve()(),ke(17,"div",13)(18,"label",14),gi$1(19),RD(20,"translate"),Ve(),ke(21,"mat-form-field",10),jt(22,"input",16),RD(23,"translate"),KK(),Ve()()(),ke(24,"div",8)(25,"label",17),gi$1(26),RD(27,"translate"),Ve(),ke(28,"mat-form-field",10)(29,"mat-select",18),RD(30,"translate"),ke(31,"mat-option",19),gi$1(32),RD(33,"translate"),Ve(),t8(34,ki,2,2,"mat-option",20,Si),Ve(),KK(),Ve()(),ke(36,"div",8)(37,"label",21),gi$1(38),RD(39,"translate"),Ve(),ke(40,"div",12)(41,"mat-form-field",22)(42,"mat-select",23),RD(43,"translate"),t8(44,Ri,1,1,null,null,J5),Ve(),KK(),Ve(),ke(46,"div",24),RD(47,"translate"),ke(48,"button",25)(49,"icon"),gi$1(50,"add"),Ve()()()()()()();}if(n&2){let e=zt(),t=LE(9);ge(2),Nr("ngModelOptions",Z8(40,Mi)),QK(),ge(3),Yd(l4(6,18,"FORM.NAME")),ge(3),Nr("formField",e.form.name),QK(),ge(4),Yd(l4(13,20,"FORM.EMAIL")),ge(3),Nr("formField",e.form.email)("placeholder",l4(16,22,"FORM.EMAIL")),QK(),ge(4),Yd(l4(20,24,"FORM.PHONE")),ge(3),Nr("formField",e.form.phone)("placeholder",l4(23,26,"APP.CONCIERGE.CONTACTS_PHONE_PLACEHOLDER")),QK(),ge(4),Yd(l4(27,28,"RESOURCE.LEVEL")),ge(3),Nr("formField",e.form.zone)("placeholder",l4(30,30,"COMMON.LEVEL_SELECT")),QK(),ge(3),Yd(l4(33,32,"COMMON.LEVEL_ANY")),ge(2),n8(e.levels()),ge(4),Yd(l4(39,34,"APP.CONCIERGE.CONTACTS_ROLES")),ge(4),Nr("formField",e.form.roles)("placeholder",l4(43,36,"APP.CONCIERGE.CONTACTS_ROLES_SELECT")),QK(),ge(2),n8(e.roles()),ge(2),Nr("matTooltip",l4(47,38,"APP.CONCIERGE.CONTACTS_ROLES_ADD")),ge(2),Nr("content",t);}}function Ni(n,l){n&1&&(ke(0,"main",5),jt(1,"mat-spinner",26),ke(2,"p"),gi$1(3),RD(4,"translate"),Ve()()),n&2&&(ge(),Nr("diameter",48),ge(2),Yd(l4(4,2,"APP.CONCIERGE.CONTACTS_SAVING")));}function Ai(n,l){if(n&1){let e=AD();ke(0,"footer",6)(1,"button",27),We("click",function(){O_(e);let i=zt();return N_(i.save())}),gi$1(2),RD(3,"translate"),Ve()();}n&2&&(ge(2),ko(" ",l4(3,1,"COMMON.SAVE")," "));}function Pi(n,l){if(n&1){let e=AD();ke(0,"div",28)(1,"mat-form-field",10)(2,"input",29),RD(3,"translate"),HL("ngModelChange",function(i){O_(e);let s=zt();return G8(s.role_name,i)||(s.role_name=i),N_(i)}),Ve(),KK(),Ve(),ke(4,"button",30),We("click",function(){O_(e);let i=zt();return N_(i.addRole())}),gi$1(5),RD(6,"translate"),Ve()();}if(n&2){let e=zt();ge(2),VL("ngModel",e.role_name),Nr("placeholder",l4(3,3,"APP.CONCIERGE.CONTACTS_ROLES_NAME")),QK(),ge(3),ko(" ",l4(6,5,"APP.CONCIERGE.CONTACTS_ROLES_SAVE")," ");}}var pi=(()=>{class n{constructor(){this._data=m$1(rae),this._dialog_ref=m$1(ZS),this._org=m$1(WS),this._contacts_service=m$1(we),this.loading=O(false),this.role_name=O(""),this.contact=this._data,this.roles=this._contacts_service.roles,this.model=O({id:this._data?.id||this._contacts_service.generateContactId(),name:this._data?.name||"",email:this._data?.email||"",phone:this._data?.phone||"",zone:this._data?.zone||"",roles:this._data?.roles||[]}),this.form=Fo(this.model),this.levels=this._org.active_levels,this._tooltip=Up(bl);}async addRole(){let e=this.role_name().trim();e&&(this._tooltip().close(),this.loading.set(true),this._dialog_ref.disableClose=true,await this._contacts_service.addRole(e),this.model.update(t=>m$2(l({},t),{roles:[...t.roles||[],e]})),this.role_name.set(""),this.loading.set(false),this._dialog_ref.disableClose=false);}setUser(e){this.model.update(t=>m$2(l({},t),{name:e?.name||"",email:e?.email||"",phone:e?.phone||""}));}async save(){this.loading.set(true),this._dialog_ref.disableClose=true;let e=this.model(),t={id:e.id,name:e.name,email:e.email,phone:e.phone,zone:e.zone,roles:e.roles||[]},i=await this._contacts_service.saveContact(t);this._dialog_ref.disableClose=false,this.loading.set(false),i&&this._dialog_ref.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te({type:n,selectors:[["emergency-contact-modal"]],viewQuery:function(t,i){t&1&&kE(i._tooltip,bl,5),t&2&&PE();},decls:10,vars:6,consts:[["role_form",""],[1,"bg-base-200","sticky","top-0","z-10","m-2","w-[calc(100%-1rem)]","rounded-sm","border-none","p-2"],[1,"px-2","text-xl","font-medium"],["icon","","matRipple","","mat-dialog-close",""],[1,"w-xl","p-4"],["loading","",1,"flex","h-64","flex-col","items-center","justify-center"],[1,"border-base-200","flex","items-center","justify-end","border-t","px-4","py-2"],["ngModel","",1,"mb-4",3,"ngModelChange","ngModelOptions"],[1,"flex","flex-col"],["for","name"],["appearance","outline"],["matInput","","placeholder","Full name",3,"formField"],[1,"flex","items-center","space-x-4"],[1,"flex","flex-1","flex-col"],["for","email"],["matInput","","type","email",3,"formField","placeholder"],["matInput","","type","tel",3,"formField","placeholder"],["for","zone"],[3,"formField","placeholder"],["value",""],[3,"value"],["for","roles"],["appearance","outline",1,"no-subscript","flex-1"],["multiple","",3,"formField","placeholder"],[3,"matTooltip"],["icon","","default","","matRipple","","customTooltip","",3,"content"],[1,"mb-4",3,"diameter"],["btn","","matRipple","",1,"w-48",3,"click"],[1,"bg-base-100","rounded-sm","p-4"],["matInput","",3,"ngModelChange","ngModel","placeholder"],["btn","","matRipple","",1,"w-full",3,"click"]],template:function(t,i){t&1&&(ke(0,"header",1)(1,"h2",2),gi$1(2),RD(3,"translate"),Ve(),Fe(4,Ti,3,0,"button",3),Ve(),Fe(5,Oi,51,41,"main",4)(6,Ni,5,4,"main",5),Fe(7,Ai,4,3,"footer",6),hi$1(8,Pi,7,7,"ng-template",null,0,ND)),t&2&&(ge(2),ko(" ",l4(3,4,i.contact?"APP.CONCIERGE.CONTACTS_EDIT":"APP.CONCIERGE.CONTACTS_NEW")," "),ge(2),Ue(i.loading()?-1:4),ge(),Ue(i.loading()?6:5),ge(2),Ue(i.loading()?-1:7));},dependencies:[YQe,Y9e,z9e,QN,A3,eJe,JXe,pi$1,ui$1,s3,Ml,Qw,F0e,L0e,sB,x0e,k0e,GQ,Th,fl,Dt,ci,bl,kt,DJe,Zce,NJe],encapsulation:2});}}return n})();var Di=(n,l)=>l+n;function Fi(n,l){n&1&&(ke(0,"button",3)(1,"icon"),gi$1(2,"close"),Ve()());}function Li(n,l){if(n&1){let e=AD();ke(0,"div",5)(1,"div",10),gi$1(2),Ve(),ke(3,"button",11),We("click",function(){let i=O_(e).$implicit,s=zt();return s.active.set(i),N_(s.role_name.set(i))}),ke(4,"icon"),gi$1(5,"edit"),Ve()(),ke(6,"button",12),We("click",function(){let i=O_(e).$implicit,s=zt();return N_(s.removeRole(i))}),ke(7,"icon"),gi$1(8,"delete"),Ve()()();}if(n&2){let e=l.$implicit;zt();let t=LE(16);ge(2),Yd(e),ge(),Nr("content",t);}}function zi(n,l){if(n&1){let e=AD();ke(0,"div",13)(1,"mat-form-field",14)(2,"input",15),RD(3,"translate"),HL("ngModelChange",function(i){O_(e);let s=zt();return G8(s.role_name,i)||(s.role_name=i),N_(i)}),Ve(),KK(),Ve(),ke(4,"button",16),We("click",function(){O_(e);let i=zt();return N_(i.updateRoles())}),gi$1(5),RD(6,"translate"),Ve()();}if(n&2){let e=zt();ge(2),VL("ngModel",e.role_name),Nr("placeholder",l4(3,3,"APP.CONCIERGE.CONTACTS_ROLES_NAME")),QK(),ge(3),ko(" ",l4(6,5,"APP.CONCIERGE.CONTACTS_ROLES_SAVE")," ");}}var hi=(()=>{class n{constructor(){this._dialog_ref=m$1(ZS),this._contacts_service=m$1(we),this.active=O(""),this.role_name=O(""),this.loading=O(false),this.roles=this._contacts_service.roles,this._tooltip=Up(bl);}async removeRole(e){e&&(this.loading.set(true),this._dialog_ref.disableClose=true,await this._contacts_service.removeRole(e),this.loading.set(false),this._dialog_ref.disableClose=false);}async updateRoles(){let e=this.role_name().trim();e&&(this.loading.set(true),this._tooltip().close(),this._dialog_ref.disableClose=true,this.active()?await this._contacts_service.renameRole(this.active(),e):await this._contacts_service.addRole(e),this.role_name.set(""),this.active.set(""),this.loading.set(false),this._dialog_ref.disableClose=false);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te({type:n,selectors:[["role-management-modal"]],viewQuery:function(t,i){t&1&&kE(i._tooltip,bl,5),t&2&&PE();},decls:17,vars:8,consts:[["role_form",""],[1,"bg-base-200","sticky","top-0","z-10","m-2","w-[calc(100%-1rem)]","rounded-sm","border-none","p-2"],[1,"px-2","text-xl","font-medium"],["icon","","matRipple","","mat-dialog-close",""],[1,"h-128","max-h-[65vh]","min-w-md","overflow-y-auto"],[1,"hover:bg-base-200:bg-base-300","border-base-200","m-2","flex","items-center","space-x-2","rounded-sm","border","p-2"],[1,"border-base-200","border-t"],["btn","","matRipple","","customTooltip","",1,"m-2","flex","w-[calc(100%-1rem)]","items-center","justify-center","space-x-2",3,"click","content"],[1,"truncate","pl-2"],[1,"text-2xl"],[1,"flex-1","truncate","px-2"],["icon","","matRipple","","customTooltip","",1,"border-secondary","text-secondary","h-12","w-12","rounded-sm","border",3,"click","content"],["icon","","matRipple","",1,"border-error","text-error","h-12","w-12","rounded-sm","border",3,"click"],[1,"bg-base-100","rounded-sm","p-4"],["appearance","outline"],["matInput","",3,"ngModelChange","ngModel","placeholder"],["btn","","matRipple","",1,"w-full",3,"click"]],template:function(t,i){if(t&1){let s=AD();ke(0,"header",1)(1,"h2",2),gi$1(2),RD(3,"translate"),Ve(),Fe(4,Fi,3,0,"button",3),Ve(),ke(5,"main",4),t8(6,Li,9,2,"div",5,Di),Ve(),ke(8,"footer",6)(9,"button",7),We("click",function(){return O_(s),i.active.set(""),N_(i.role_name.set(""))}),ke(10,"div",8),gi$1(11),RD(12,"translate"),Ve(),ke(13,"icon",9),gi$1(14,"add"),Ve()()(),hi$1(15,zi,7,7,"ng-template",null,0,ND);}if(t&2){let s=LE(16);ge(2),ko(" ",l4(3,4,"APP.CONCIERGE.CONTACTS_ROLES_MANAGE")," "),ge(2),Ue(i.loading()?-1:4),ge(2),n8(i.roles()),ge(3),Nr("content",s),ge(2),ko(" ",l4(12,6,"APP.CONCIERGE.CONTACTS_ROLES_ADD")," ");}},dependencies:[F0e,sB,x0e,GQ,Y9e,z9e,Ml,Qw,QN,A3,eJe,JXe,YQe,bl,NJe],encapsulation:2});}}return n})();var Vi=(n,l)=>({key:"name",name:n,content:l}),Bi=(n,l)=>({key:"roles",name:n,content:l,sortable:false}),Gi=(n,l)=>({key:"zone",name:n,content:l,sortable:false}),qi=n=>({key:"actions",name:" ",content:n,size:"6rem",sortable:false}),ji=(n,l,e,t)=>[n,l,e,t],Ui=(n,l)=>l+n;function Wi(n,l){if(n&1&&(ke(0,"mat-option",19),gi$1(1),Ve()),n&2){let e=l.$implicit;Nr("value",e),ge(),ko(" ",e," ");}}function $i(n,l){if(n&1){let e=AD();ke(0,"button",24),We("click",function(){let i=O_(e).row,s=zt();return N_(s.copyToClipboard(i.email))}),ke(1,"div",25),gi$1(2),Ve(),ke(3,"div",26),gi$1(4),Ve()();}if(n&2){let e=l.row;ge(2),Yd(e.name),ge(2),ko(" ",e.email," ");}}function Hi(n,l){if(n&1&&(ke(0,"span",28),gi$1(1),Ve()),n&2){let e=l.$implicit;ge(),ko(" ",e," ");}}function Yi(n,l){if(n&1&&(ke(0,"div",27),t8(1,Hi,2,1,"span",28,e8),Ve()),n&2){let e=l.data;ge(),n8(e);}}function Qi(n,l){if(n&1&&(ke(0,"div",29),gi$1(1),RD(2,"level"),Ve()),n&2){let e=l.data;ge(),ko(" ",e?l4(2,1,e)?.display_name:"All"," ");}}function Xi(n,l){if(n&1){let e=AD();ke(0,"div",30)(1,"button",20),RD(2,"translate"),We("click",function(){let i=O_(e).row,s=zt();return N_(s.editContact(i))}),ke(3,"icon"),gi$1(4,"edit"),Ve()(),ke(5,"button",31),RD(6,"translate"),We("click",function(){let i=O_(e).row,s=zt();return N_(s.removeContact(i))}),ke(7,"icon"),gi$1(8,"delete"),Ve()()();}n&2&&(ge(),Nr("matTooltip",l4(2,2,"APP.CONCIERGE.CONTACTS_EDIT")),ge(4),Nr("matTooltip",l4(6,4,"APP.CONCIERGE.CONTACTS_REMOVE")));}var gi=(()=>{class n{constructor(){this._org=m$1(WS),this._dialog=m$1(QS),this._clipboard=m$1(yH),this._contacts_service=m$1(we),this.search=O(""),this.role_filter=O(""),this.roles=this._contacts_service.roles,this.contacts=this._contacts_service.contacts,this.filtered_contacts=De(()=>{let e=this.role_filter();return this.contacts().filter(t=>!e||t.roles.includes(e))}),this.copyToClipboard=e=>{this._clipboard.copy(e)&&Zv("User's email copied to clipboard.");};}ngOnInit(){this.checkMigration();}async checkMigration(){if(await this._contacts_service.needsMigration()){let t=await re({title:"Migrate Emergency Contacts",content:"Emergency contacts data from the old system was found. Would you like to migrate it to the new system?",icon:{content:"sync"}},this._dialog);t.reason==="done"&&(t.loading("Migrating contacts..."),await this._contacts_service.migrateFromMetadata()),t.close();}}manageRoles(){this._dialog.open(hi,{}).afterClosed().subscribe(()=>this._contacts_service.refresh());}editContact(e){this._dialog.open(pi,{data:e}).afterClosed().subscribe(()=>this._contacts_service.refresh());}async removeContact(e){let t=await re({title:"Remove Emergency Contact",content:`Are you sure you want to remove ${e.name} from the emergency contacts?`,icon:{content:"delete"}},this._dialog);t.reason==="done"&&(t.loading("Removing contact..."),await this._contacts_service.deleteContact(e.id),t.close());}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te({type:n,selectors:[["","app-emergency-contacts",""]],decls:50,vars:49,consts:[["person_template",""],["roles_template",""],["zone_template",""],["actions_template",""],[1,"flex","h-px","flex-1"],[1,"flex","h-full","w-1/2","flex-1","flex-col"],["topbar","",1,"flex","flex-col","px-8","py-4"],[1,"flex","items-center","justify-between"],[1,"text-2xl","font-medium"],[1,"flex","items-center","space-x-2"],["appearance","outline",1,"no-subscript"],["matPrefix","",1,"text-2xl"],["matInput","",3,"ngModelChange","ngModel","placeholder"],["btn","","matRipple","",1,"space-x-2",3,"click"],[1,"text-2xl"],[1,"pr-2"],[1,"mt-2","flex","items-center","justify-between","py-2"],[3,"ngModelChange","ngModel","placeholder"],["value",""],[3,"value"],["icon","","default","","matRipple","",3,"click","matTooltip"],[1,"h-1/2","w-full","flex-1","overflow-auto","px-8"],[1,"block","min-w-208","text-sm",3,"data","filter","empty_message","columns","sortable"],[1,"h-12","w-full"],[1,"px-4","py-2","text-left","leading-tight",3,"click"],[1,""],[1,"font-mono","text-[0.625rem]","opacity-30"],[1,"flex","flex-wrap","p-2"],[1,"bg-info","text-info-content","m-1","rounded-2xl","px-2","py-1","font-mono","text-xs"],[1,"p-4"],[1,"flex","w-full","items-center","justify-end","space-x-2","p-2"],["icon","","default","","matRipple","","error","",3,"click","matTooltip"]],template:function(t,i){if(t&1){let s=AD();jt(0,"app-topbar"),ke(1,"div",4),jt(2,"app-sidebar"),ke(3,"main",5)(4,"section",6)(5,"div",7)(6,"h2",8),gi$1(7),RD(8,"translate"),Ve(),ke(9,"div",9)(10,"mat-form-field",10)(11,"icon",11),gi$1(12," search "),Ve(),ke(13,"input",12),RD(14,"translate"),HL("ngModelChange",function(C){return O_(s),G8(i.search,C)||(i.search=C),N_(C)}),Ve(),KK(),Ve(),ke(15,"button",13),We("click",function(){return i.editContact()}),ke(16,"icon",14),gi$1(17,"add"),Ve(),ke(18,"div",15),gi$1(19),RD(20,"translate"),Ve()()()(),ke(21,"div",16)(22,"mat-form-field",10)(23,"mat-select",17),RD(24,"translate"),HL("ngModelChange",function(C){return O_(s),G8(i.role_filter,C)||(i.role_filter=C),N_(C)}),ke(25,"mat-option",18),gi$1(26),RD(27,"translate"),Ve(),t8(28,Wi,2,2,"mat-option",19,Ui),Ve(),KK(),Ve(),ke(30,"div",9)(31,"button",20),RD(32,"translate"),We("click",function(){return i.manageRoles()}),ke(33,"icon"),gi$1(34,"list_alt"),Ve()()()()(),ke(35,"section",21),jt(36,"simple-table",22),RD(37,"translate"),RD(38,"translate"),RD(39,"translate"),RD(40,"translate"),jt(41,"div",23),hi$1(42,$i,5,2,"ng-template",null,0,ND)(44,Yi,3,0,"ng-template",null,1,ND)(46,Qi,3,3,"ng-template",null,2,ND)(48,Xi,9,6,"ng-template",null,3,ND),Ve()()();}if(t&2){let s=LE(43),g=LE(45),C=LE(47),ie=LE(49);ge(7),ko(" ",l4(8,13,"APP.CONCIERGE.CONTACTS_HEADER")," "),ge(6),VL("ngModel",i.search),Nr("placeholder",l4(14,15,"APP.CONCIERGE.CONTACTS_FILTER")),QK(),ge(6),ko(" ",l4(20,17,"APP.CONCIERGE.CONTACTS_ADD")," "),ge(4),VL("ngModel",i.role_filter),Nr("placeholder",l4(24,19,"APP.CONCIERGE.CONTACTS_ROLES_ALL")),QK(),ge(3),Yd(l4(27,21,"APP.CONCIERGE.CONTACTS_ROLES_ALL")),ge(2),n8(i.roles()),ge(3),Nr("matTooltip",l4(32,23,"APP.CONCIERGE.CONTACTS_ROLES_MANAGE")),ge(5),Nr("data",i.filtered_contacts())("filter",i.search())("empty_message",l4(37,25,i.search()?"APP.CONCIERGE.CONTACTS_SEARCH_EMPTY":"APP.CONCIERGE.CONTACTS_EMPTY"))("columns",e4(44,ji,X8(33,Vi,l4(38,27,"COMMON.PERSON"),s),X8(36,Bi,l4(39,29,"APP.CONCIERGE.CONTACTS_ROLES"),g),X8(39,Gi,l4(40,31,"RESOURCE.LEVEL"),C),Q8(42,qi,ie)))("sortable",true);}},dependencies:[Ml,Qw,YQe,DJe,Zce,Ne,QN,A3,Nce,pi$1,ui$1,s3,eJe,JXe,dk,tk,F0e,sB,x0e,GQ,NJe,f],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--base-100)}"]});}}return n})();var te=(()=>{class n extends Fs{constructor(){super(),this._org=m$1(WS),this._onsite={},this._events={},this._users=O([]),this._poll=O(0),this.loading=O(false),this.filters=O({}),this.search=O(""),this.user_events=O({}),this.filtered_users=De(()=>{let e=this.search(),t=this._users(),i=this.filters();return t.filter(s=>(!e||s.name.toLowerCase().includes(e)||s.email.toLowerCase().includes(e))&&(!i.only_onsite||this._onsite[s.email]))}),this.loadUsers(),Tt(()=>{this._org.active_building(),this._poll(),this.timeout("load-events",()=>this._loadEvents(),300);});}setFilters(e){this.filters.set(l(l({},this.filters()),e));}setSearchString(e){this.search.set(e);}startPolling(e=3*og){let t=Math.max(e,3*og);this._poll.update(i=>i+1),this.interval("poll",()=>this._poll.update(i=>i+1),t);}stopPolling(){this.clearInterval("poll");}async checkin(e){let t=await en$1({booking_start:Math.floor(new Date().valueOf()/1e3),booking_end:Math.floor(Si$1(new Date).valueOf()/1e3),asset_id:e.email,title:"Checked-in Onsite",description:this._org.building.display_name||this._org.building.name,zones:[this._org.building.id],booking_type:"staff"});await rn$1(t.id,true),this._events[e.email]=t,this._onsite[e.email]=true;}async checkout(e){let t=this._events[e.email];if(t){let i=await en$1(m$2(l({},t.toJSON()),{booking_end:Math.floor(new Date().valueOf()/1e3)}));await rn$1(i.id,false),this._events[e.email]=i,this._onsite[e.email]=false;}}async _loadEvents(){this.loading.set(true);let e=await U({period_start:Kn(Dn(Date.now())),period_end:Kn(Si$1(Date.now())),type:"staff"}),t={},i=new Date().valueOf();for(let s of e)sxe(i,i,s.date,s.date+s.duration*60*1e3)&&(t[s.asset_id]=s.checked_in,this._events[s.asset_id]=s);this._onsite=t,this.user_events.set(t),this.loading.set(false);}async loadUsers(){let e=await G("");e.sort((t,i)=>t.name.localeCompare(i.name)),this._users.set(e);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275prov=P({token:n,factory:n.\u0275fac,providedIn:"root"});}}return n})();function Ji(n,l){n&1&&(ke(0,"div",5),gi$1(1),RD(2,"translate"),Ve()),n&2&&(ge(),ko(" ",l4(2,1,"APP.CONCIERGE.DIRECTORY_ONSITE")," "));}function Zi(n,l){if(n&1){let e=AD();ke(0,"div",0),jt(1,"a-user-avatar",1),ke(2,"div",2)(3,"div",3),gi$1(4),Ve(),ke(5,"div",4),gi$1(6),Ve()(),Fe(7,Ji,3,3,"div",5),ke(8,"div",6)(9,"action-icon",7),RD(10,"translate"),We("click",function(){O_(e);let i=zt();return N_(i.onsite()?i.checkout():i.checkin())}),Ve(),ke(11,"a",8),RD(12,"translate"),ke(13,"icon"),gi$1(14,"email"),Ve()(),ke(15,"a",8),RD(16,"translate"),ke(17,"icon"),gi$1(18,"call"),Ve()()()();}if(n&2){let e=zt();ge(),Nr("user",e.user()),ge(3),Yd(e.user()?.name),ge(2),ko(" ",e.user()?.email," "),ge(),Ue(e.onsite()?7:-1),ge(2),Nr("matTooltip",l4(10,13,e.onsite()?"COMMON.CHECK_IN":"COMMON.CHECK_OUT"))("loading",e.loading())("content",e.onsite()?"event_busy":"event_available"),ge(2),Nr("matTooltip",l4(12,15,"APP.CONCIERGE.DIRECTORY_EMAIL"))("href","mailto:"+e.user()?.email,_E),$e("disabled",!e.user()?.email),ge(4),Nr("matTooltip",l4(16,17,"APP.CONCIERGE.DIRECTORY_PHONE"))("href","tel:"+e.user()?.phone,_E),$e("disabled",!e.user()?.phone);}}var _i=(()=>{class n{constructor(){this._state=m$1(te),this.user=Cs(void 0),this.onsite=Cs(void 0),this.loading=O(false),this.checkin=async()=>{this.loading.set(true),await this._state.checkin(this.user()).catch(e=>GV(_r("APP.CONCIERGE.DIRECTORY_CHECKIN_ERROR",{error:e}))),this.loading.set(false);},this.checkout=async()=>{this.loading.set(true),await this._state.checkout(this.user()).catch(e=>_r("APP.CONCIERGE.DIRECTORY_CHECKOUT_ERROR",{error:e})),this.loading.set(false);};}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te({type:n,selectors:[["staff-details"]],inputs:{user:[1,"user"],onsite:[1,"onsite"]},decls:1,vars:1,consts:[["details","",1,"border-base-200","bg-base-100","flex","w-full","items-center","border-b","px-4","py-2","hover:opacity-80"],[3,"user"],[1,"flex","flex-1","flex-col"],[1,"px-2"],[1,"text-opacity-50","px-2","text-xs"],[1,"px-4","text-xs","opacity-50"],[1,"flex","items-center"],[3,"click","matTooltip","loading","content"],["icon","","matRipple","",3,"matTooltip","href"]],template:function(t,i){t&1&&Fe(0,Zi,19,19,"div",0),t&2&&Ue(i.user()?0:-1);},dependencies:[Lr,li,YQe,DJe,Zce,NJe],encapsulation:2});}}return n})();var en=["container"];function tn(n,l){if(n&1){let e=AD();ke(0,"div",6),We("click",function(){let i=O_(e).$implicit,s=zt();return N_(s.scrollTo(i))}),gi$1(1),Ve();}if(n&2){let e=l.$implicit,t=zt();Oe("disabled",t.user_list()[e].length<=0)("active",e===t.active_group()),ge(),ko(" ",e," ");}}function nn(n,l){if(n&1&&jt(0,"staff-details",8),n&2){let e=l.$implicit,t=l.$index,i=zt(2).$implicit,s=zt(2);Nr("id","letter-"+i+"-"+t)("user",e)("onsite",s.events()?s.events()[e.email]:false);}}function an(n,l){if(n&1&&(ke(0,"div",7),gi$1(1),Ve(),t8(2,nn,1,3,"staff-details",8,e8)),n&2){let e=zt().$implicit,t=zt(2);Nr("id","letter-"+(e==="#"?"0":e)),ge(),ko(" ",e," "),ge(),n8(t.user_list()[e]);}}function on(n,l){if(n&1&&Fe(0,an,4,2),n&2){let e=l.$implicit,t=zt(2);Ue(t.user_list()[e].length?0:-1);}}function rn(n,l){if(n&1&&t8(0,on,1,1,null,null,e8),n&2){let e=zt();n8(e.groups);}}function sn(n,l){n&1&&(ke(0,"div",4)(1,"p"),gi$1(2),RD(3,"translate"),Ve()()),n&2&&(ge(2),ko(" ",l4(3,1,"APP.CONCIERGE.DIRECTORY_SEARCH_EMPTY")," "));}function ln(n,l){n&1&&jt(0,"mat-progress-bar",5);}var Ge="#abcdefghijklmnopqrstuvwxyz".split(""),ui=(()=>{class n extends Fs{constructor(){super(),this._state=m$1(te),this.active_group=O("#"),this.groups=Ge,this.events=this._state.user_events,this.loading=this._state.loading,this.filtered_users=this._state.filtered_users,this.user_count=De(()=>this.filtered_users().length),this.user_list=De(()=>{let e=this.filtered_users()||[],t={};for(let i of Ge)t[i]=e.filter(s=>s.name.toLowerCase()[0].startsWith(i)||i==="#"&&!Ge.includes(s.name.toLowerCase()[0]));return t}),this._el=Up("container"),Tt(()=>{this.user_list(),this.timeout("scroll",()=>this.onScroll({}),30);});}onScroll(e){let t=this._el();if(!t)return;let i=t.nativeElement.scrollTop;for(let s of Ge){let g=document.querySelector(`#letter-${s==="#"?"0":s}`);if(g){if(g.offsetTop-i>0)break;this.active_group.set(s);}}}scrollTo(e){let t=document.querySelector(`#letter-${e}-0`);t&&(t.scrollIntoView({behavior:"smooth",block:"center"}),this.active_group.set(e));}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te({type:n,selectors:[["staff-listings"]],viewQuery:function(t,i){t&1&&kE(i._el,en,5),t&2&&PE();},features:[Pe],decls:8,vars:2,consts:[["container",""],[1,"flex","w-full","items-center","justify-center","p-2"],["letter","",1,"flex","h-6","w-6","cursor-pointer","items-center","justify-center","text-xs","capitalize",3,"disabled","active"],[1,"relative","w-full","flex-1","overflow-auto",2,"height","50%",3,"scroll"],[1,"absolute","inset-0","flex","flex-col","items-center","justify-center"],["mode","indeterminate"],["letter","",1,"flex","h-6","w-6","cursor-pointer","items-center","justify-center","text-xs","capitalize",3,"click"],["group","",1,"border-base-300","bg-base-200","sticky","top-0","z-10","m-2","rounded-lg","border","text-sm","font-medium","capitalize",3,"id"],[3,"id","user","onsite"]],template:function(t,i){t&1&&(ke(0,"div",1),t8(1,tn,2,5,"div",2,e8),Ve(),ke(3,"div",3,0),We("scroll",function(g){return i.onScroll(g)}),Fe(5,rn,2,0)(6,sn,4,3,"div",4),Ve(),Fe(7,ln,1,0,"mat-progress-bar",5)),t&2&&(ge(),n8(i.groups),ge(4),Ue(i.user_count()?5:6),ge(2),Ue(i.loading()?7:-1));},dependencies:[Z,L,_i,NJe],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:50%}[letter][_ngcontent-%COMP%]{transition:font-size .2s,color .2s}[group][_ngcontent-%COMP%]{border-color:#ccc;padding:.5rem 1.65rem}.disabled[_ngcontent-%COMP%]{opacity:.2;pointer-events:none}.active[_ngcontent-%COMP%]{font-size:1.25rem;opacity:1;color:#d81b60}"]});}}return n})();var cn=["switch"],dn=["*"];function mn(n,l){n&1&&(ke(0,"span",11),PI(),ke(1,"svg",13),jt(2,"path",14),Ve(),ke(3,"svg",15),jt(4,"path",16),Ve()());}var pn=new v("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:false,hideIcon:false,disabledInteractive:false})}),qe=class{source;checked;constructor(l,e){this.source=l,this.checked=e;}},it=(()=>{class n{_elementRef=m$1(j);_focusMonitor=m$1(jo);_changeDetectorRef=m$1(Dt$1);defaults=m$1(pn);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=false;_createChangeEvent(e){return new qe(this,e)}_labelId;get buttonId(){return `${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus();}_noopAnimations=Kt();_focused=false;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=false;color;disabled=false;disableRipple=false;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck();}hideIcon;disabledInteractive;change=new te$1;toggleChange=new te$1;get inputId(){return `${this.id||this._uniqueId}-input`}constructor(){m$1(yn).load(Nl);let e=m$1(new GE("tabindex"),{optional:true}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=m$1(kt$1).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??false,this.disabledInteractive=t.disabledInteractive??false,this._labelId=this._uniqueId+"-label";}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,true).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=true,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=false,this._onTouched(),this._changeDetectorRef.markForCheck();});});}ngOnChanges(e){e.required&&this._validatorOnChange();}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef);}writeValue(e){this.checked=!!e;}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouched=e;}validate(e){return this.required&&e.value!==true?{required:true}:null}registerOnValidatorChange(e){this._validatorOnChange=e;}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck();}toggle(){this.checked=!this.checked,this._onChange(this.checked);}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked));}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new qe(this,this.checked))));}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Te({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(t,i){if(t&1&&xn(cn,5),t&2){let s;Ie(s=Ae())&&(i._switchElement=s.first);}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,i){t&2&&(Mn("id",i.id),$e("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Ds(i.color?"mat-"+i.color:""),Oe("mat-mdc-slide-toggle-focused",i._focused)("mat-mdc-slide-toggle-checked",i.checked)("_mat-animation-noopable",i._noopAnimations));},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",Ee],color:"color",disabled:[2,"disabled","disabled",Ee],disableRipple:[2,"disableRipple","disableRipple",Ee],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:qd(e)],checked:[2,"checked","checked",Ee],hideIcon:[2,"hideIcon","hideIcon",Ee],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ee]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[ft([{provide:vu,useExisting:An(()=>n),multi:true},{provide:Pa,useExisting:n,multi:true}]),At],ngContentSelectors:dn,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,i){if(t&1&&(gn$1(),ke(0,"div",1)(1,"button",2,0),We("click",function(){return i._handleClick()}),jt(3,"div",3)(4,"span",4),ke(5,"span",5)(6,"span",6)(7,"span",7),jt(8,"span",8),Ve(),ke(9,"span",9),jt(10,"span",10),Ve(),Fe(11,mn,5,0,"span",11),Ve()()(),ke(12,"label",12),We("click",function(g){return g.stopPropagation()}),Le(13),Ve()()),t&2){let s=LE(2);Nr("labelPosition",i.labelPosition),ge(),Oe("mdc-switch--selected",i.checked)("mdc-switch--unselected",!i.checked)("mdc-switch--checked",i.checked)("mdc-switch--disabled",i.disabled)("mat-mdc-slide-toggle-disabled-interactive",i.disabledInteractive),Nr("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex)("disabled",i.disabled&&!i.disabledInteractive),$e("id",i.buttonId)("name",i.name)("aria-label",i.ariaLabel)("aria-labelledby",i._getAriaLabelledBy())("aria-describedby",i.ariaDescribedby)("aria-required",i.required||null)("aria-checked",i.checked)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),ge(9),Nr("matRippleTrigger",s)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",true),ge(),Ue(i.hideIcon?-1:11),ge(),Nr("for",i.buttonId),$e("id",i._labelId);}},dependencies:[Qw,xQe],styles:[`.mdc-switch {
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
`],encapsulation:2})}return n})(),fi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=se({type:n});static \u0275inj=ie({imports:[it,vt]})}return n})();var gn=(n,l)=>l.id;function _n(n,l){if(n&1&&(ke(0,"mat-option",3),gi$1(1),Ve()),n&2){let e=l.$implicit;Nr("value",e.id),ge(),ko(" ",e.display_name||e.name," ");}}var vi=(()=>{class n extends Fs{constructor(){super(),this._state=m$1(te),this._org=m$1(WS),this._route=m$1(bi$1),this._router=m$1(kn),this.zones=O([]),this.levels=O([]),this.filters=O({}),this.setDate=e=>this._state.setFilters({date:e}),this.setFilters=e=>this._state.setFilters(e),this.setSearch=e=>this._state.setSearchString(e),this.updateZones=e=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:e.join(",")},queryParamsHandling:"merge"}),this._state.setFilters({zones:e});},Tt(()=>{this.filters.set(this._state.filters()||{});}),Tt(()=>{let e=this._org.active_levels()||[];q(()=>{this.levels.set(e);let t=this.zones().filter(i=>e.find(s=>s.id===i));!t.length&&e.length&&t.push(e[0].id),this.zones.set(t),this.updateZones(t);});});}async ngOnInit(){await this._org.waitUntilInitialised(),this.subscription("route.query",this._route.queryParamMap.subscribe(e=>{if(e.has("zone_ids")){let t=e.get("zone_ids").split(",");if(t.length){let i=this._org.levelWithID(t);if(!i)return;this._org.building=this._org.buildings.find(s=>s.id===i.parent_id),this.zones.set(t);}}})),this.setSearch("");}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te({type:n,selectors:[["staff-topbar"]],features:[Pe],decls:12,vars:8,consts:[[1,"border-base-200","bg-base-100","flex","items-center","space-x-4","border-b","p-4"],["appearance","outline",1,"no-subscript","w-48"],["multiple","",3,"ngModelChange","ngModel","placeholder"],[3,"value"],[1,"m-2",3,"ngModelChange","ngModel"],[1,"text-xs"],[1,"w-2","flex-1"],[1,"mr-2",3,"modelChange"]],template:function(t,i){t&1&&(ke(0,"div",0)(1,"mat-form-field",1)(2,"mat-select",2),RD(3,"translate"),HL("ngModelChange",function(g){return G8(i.zones,g)||(i.zones=g),g}),We("ngModelChange",function(g){return i.updateZones(g)}),t8(4,_n,2,2,"mat-option",3,gn),Ve(),KK(),Ve(),ke(6,"mat-slide-toggle",4),We("ngModelChange",function(g){return i.setFilters({only_onsite:g})}),ke(7,"div",5),gi$1(8),RD(9,"translate"),Ve()(),KK(),jt(10,"div",6),ke(11,"searchbar",7),We("modelChange",function(g){return i.setSearch(g)}),Ve()()),t&2&&(ge(2),VL("ngModel",i.zones),Nr("placeholder",l4(3,4,"COMMON.LEVEL_ALL")),QK(),ge(2),n8(i.levels()),ge(2),Nr("ngModel",i.filters()?.only_onsite),QK(),ge(2),ko(" ",l4(9,6,"APP.CONCIERGE.DIRECTORY_ONSITE_ONLY")," "));},dependencies:[fi,it,z,QN,A3,pi$1,ui$1,s3,F0e,x0e,GQ,NJe],styles:["mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}"]});}}return n})();function un(n,l){n&1&&jt(0,"mat-progress-bar",4);}var bi=(()=>{class n{constructor(){this._state=m$1(te),this.loading=this._state.loading;}ngOnInit(){this._state.startPolling();}ngOnDestroy(){this._state.stopPolling();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te({type:n,selectors:[["","app-new-staff",""]],decls:7,vars:1,consts:[[1,"flex","h-px","flex-1"],[1,"flex","h-full","w-1/2","flex-1","flex-col"],[1,"w-full"],[1,"h-0","w-full","flex-1"],["mode","indeterminate",1,"w-full"]],template:function(t,i){t&1&&(jt(0,"app-topbar"),ke(1,"div",0),jt(2,"app-sidebar"),ke(3,"main",1),jt(4,"staff-topbar",2)(5,"staff-listings",3),Fe(6,un,1,0,"mat-progress-bar",4),Ve()()),t&2&&(ge(6),Ue(i.loading()?6:-1));},dependencies:[Z,L,dk,tk,vi,ui],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--base-100)}"]});}}return n})();var Io=[{path:"",component:bi,title:"Staff"},{path:"emergency-contacts",component:gi,title:"Emergency Contacts"}];export{Io as ROUTES};