import{$l as yo,$o as hr,A as Z,Aa as Zn,Ai as Ud,An as Jk,As as k8,At as Ee,Bo as fh,Cc as qX,Ci as Ts,Cs as jb,Dc as qk,Dr as P,E as un,Ei as UDe,Fa as __,Fl as wr,Gn as L7,Gr as Qwe,Ht as Fi$1,J as Ar,Jc as sn$1,Jl as y4,Jn as Lk,Jt as GTe,K as An,Kn as Lb,Ko as g_,Li as VDe,Ll as wx,Lo as fce,Mc as rE,Mn as Jwe,Mt as Eo,Ni as Ui$1,Nr as Pr,Ns as ki$1,Nt as Es,O as yr,Oa as Ze,Or as P4,Os as ju,Pl as we$1,Pr as Pt,Ps as kt,Pt as Et,Qa as b8,Qn as M4,Qr as Ra,Ra as _n$1,Rt as F8,Si as Te,Sl as vQe,Sn as Ir,Ts as je$1,Tt as Dr,Uo as g,Xi as WK,Xo as hd,Xt as GY,Y as At,Ya as an$1,Ys as mr,_o as cm,_s as jDe,an as HF,as as iO,b as ks,bl as v8,c as Is,ci as S8,cu as zMe,dc as on$1,en as Gt,et as BV,eu as ys,fo as cQe,fu as zb,gi as T4,hl as ui$1,hu as zt,in as HDe,io as be,is as iMe,j as $,jl as w9e,jt as En,k as L,ki as Ua,la as Xk,li as SD,m as Uo,ml as ue,mn as I,mo as cS,mu as zn,n as Yt,na as Wt,or as N,qn as Li$1,qs as mh,r as mt,ri as Rr,rn as H7,ro as ba,rs as iB,s as Gr,si as S4,ss as iS,su as zK,t as f,tu as yv,vi as T8,vn as IE,vr as O9e,vu as l,wl as va,wr as Op,ws as jc,x as kt$1,xc as qD,xi as Ta,xo as d4,yi as TD,yl as v4,yu as m,zc as ri,zo as fe,zr as QH}from"./main-BDDYF5CE.js";import"./chunk-CrRCsQrE.js";import{t as he}from"./chunk-DyktHQxC.js";import"./chunk-CwiG3RtD.js";import{C as jn,f as St,h as Yt$1,n as $v,s as Jt,u as Lv,v as ei}from"./chunk-DOoWkXAU.js";import{t as Ne}from"./chunk-Dcwy5KfM.js";import{t as re}from"./chunk-DA0pkb5I.js";import{d as ee,p as ge,y as q}from"./chunk-DpgLVDuq.js";import{a as Ge$1,d as Se,f as Ue,g as xe}from"./chunk-Ckfs9vT2.js";import{n as R}from"./chunk-DJt-UK2R.js";import"./chunk-DD1aukbd.js";import{t as Ft}from"./chunk-bKKvsiFO.js";import"./chunk-CWKih4Rc.js";import{t as f$1}from"./chunk-TRCy-5k32.js";import{t as z}from"./chunk-Blfa7NwG2.js";var wi=[`*`];function Si(n,l){if(n&1&&(Ir(0,`div`)(1,`icon`),Ta(2),Rr()()),n&2){let e=Li$1();Op(`state center `+e.state()),zt(2),yo(` `,e.state()===`success`?`done`:`close`,` `)}}function Ei(n,l){n&1&&(Ir(0,`div`,3),Eo(1,`mat-spinner`,4),Rr()),n&2&&(zt(),ju(`diameter`,16))}var ci=(()=>{class n{constructor(){this.icon=ys(void 0),this.className=ys(`material-symbols-rounded`),this.content=ys(void 0),this.loading=ys(void 0),this.disabled=ys(void 0),this.state=ys(``)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je$1({type:n,selectors:[[`action-icon`]],inputs:{icon:[1,`icon`],className:[1,`className`],content:[1,`content`],loading:[1,`loading`],disabled:[1,`disabled`],state:[1,`state`]},ngContentSelectors:wi,decls:6,vars:8,consts:[[`icon`,``,`matRipple`,``,`title`,``,1,`relative`,3,`disabled`],[`root`,``,3,`className`,`icon`],[3,`class`],[1,`loader`,`center`],[3,`diameter`]],template:function(t,i){t&1&&(ki$1(),Ir(0,`button`,0)(1,`icon`,1),Ta(2),zn(3),Rr(),Ar(4,Si,3,3,`div`,2),Ar(5,Ei,2,1,`div`,3),Rr()),t&2&&(Et(`success`,i.state()===`success`),ju(`disabled`,i.loading()||i.disabled()),zt(),ju(`className`,i.className())(`icon`,i.icon()),zt(),yo(` `,i.content(),` `),zt(2),Dr(!i.loading()&&i.state()?4:-1),zt(),Dr(i.loading()?5:-1))},dependencies:[cm,iO,St,Yt$1,vQe],styles:[`.action-icon.fade[_ngcontent-%COMP%] > icon[_ngcontent-%COMP%]{opacity:.35}.success[_ngcontent-%COMP%]{pointer-events:none}.success[_ngcontent-%COMP%]   icon[root][_ngcontent-%COMP%]{opacity:.2}.state.success[_ngcontent-%COMP%]{color:#388e3c}.state.error[_ngcontent-%COMP%]{color:#e53935}`]})}}return n})();var Ge=`_EMERGENCY_CONTACTS_`;var we=(()=>{class n{constructor(){this._org=g(Lb),this._change=N(Date.now()),this.category=N(null),this.asset_type=N(null),this.contacts=N([]),this.roles=N([]),At(()=>{let e=this._org.active_building();this._change(),e&&this._load(e)}),this.ensureCategoryAndTypeExist()}async _load(e){let t=await this._queryCategory(e);this.category.set(t),this.roles.set(this._rolesFromCategory(t));let i=await this._queryAssetType(e,t);this.asset_type.set(i);let s=await this._queryContacts(e,i);this.contacts.set(s)}async _queryCategory(e){try{let{data:t}=await iMe({zone_id:e.id});return t.find(i=>i.name===Ge)||null}catch{return null}}async _queryAssetType(e,t){if(!t)return null;try{let{data:i}=await Jwe({zone_id:e.id,q:t.name});return i.find(s=>s.name===Ge&&s.category_id===t.id)||null}catch{return null}}async _queryContacts(e,t){if(!t)return[];try{let{data:i}=await xe({zone_id:e.id,type_id:t.id,limit:200});return i.filter(s=>s.asset_type_id===t.id).map(s=>this.assetToContact(s))}catch{return[]}}_rolesFromCategory(e){if(!e?.description)return[];try{return JSON.parse(e.description).roles||[]}catch{return[]}}async _queryLegacyMetadata(e){try{let{details:t}=await hd(e.id,`emergency_contacts`);return t||{contacts:[],roles:[]}}catch{return{contacts:[],roles:[]}}}async ensureCategoryExists(){await this._org.waitUntilInitialised();let e=this._org.building;if(!e)return null;let t=await this._queryCategory(e);if(t)return t;try{let i=await Se(mh(new fh({name:Ge,description:JSON.stringify({roles:[]}),hidden:!0}),[0,void 0,``,null]));return this._change.set(Date.now()),i}catch(i){return console.error(`Failed to create emergency contacts category:`,i),null}}async ensureAssetTypeExists(e){let t=this._org.building;if(!t||!e)return null;let i=await this._queryAssetType(t,e);if(i)return i;try{let s=await Ue({name:Ge,category_id:e.id,zone_id:t.id,brand:`PlaceOS`,description:`Emergency contacts for the building`});return this._change.set(Date.now()),s}catch(s){return console.error(`Failed to create emergency contacts asset type:`,s),null}}async ensureCategoryAndTypeExist(){let e=await this.ensureCategoryExists();return e?this.ensureAssetTypeExists(e):null}async migrateFromMetadata(){let e=this._org.building;if(!e)return!1;try{let t=await this._queryLegacyMetadata(e);if(!t?.contacts?.length&&!t?.roles?.length)return!0;let i=await this.ensureCategoryAndTypeExist();if(!i)throw new Error(`Failed to create or find asset type`);let s=await this._queryCategory(e);if(!s)throw new Error(`Failed to find category`);t.roles?.length&&await Se(mh(new fh(m(l({},s),{hidden:!0,description:JSON.stringify({roles:t.roles})})),[0,null,void 0,``]));for(let _ of t.contacts||[])await Ge$1(this.contactToAsset(_,i.id));return await BV(e.id,{name:`emergency_contacts`,description:`Emergency Contacts (migrated to Assets)`,details:{contacts:[],roles:[],migrated:!0}}),this._change.set(Date.now()),iS(Zn(`APP.CONCIERGE.CONTACTS_MIGRATION_SUCCESS`)||`Successfully migrated emergency contacts.`),!0}catch(t){return iB(Zn(`APP.CONCIERGE.CONTACTS_MIGRATION_ERROR`,{error:t})||`Failed to migrate emergency contacts: ${t}`),!1}}async needsMigration(){let e=this._org.building;if(!e)return!1;let t=await this._queryLegacyMetadata(e);return t&&(t.contacts?.length>0||t.roles?.length>0)?!t.migrated:!1}async saveContact(e){try{let t=this.asset_type();if(t||(t=await this.ensureCategoryAndTypeExist()),!t)throw new Error(`Failed to create or find asset type`);return await Ge$1(this.contactToAsset(e,t.id)),this._change.set(Date.now()),iS(Zn(`APP.CONCIERGE.CONTACTS_SAVE_SUCCESS`)),!0}catch(t){return iB(Zn(`APP.CONCIERGE.CONTACTS_SAVE_ERROR`,{error:t})),!1}}async deleteContact(e){try{return await Qwe(e),this._change.set(Date.now()),iS(Zn(`APP.CONCIERGE.CONTACTS_DELETE_SUCCESS`)||`Successfully removed emergency contact.`),!0}catch(t){return iB(Zn(`APP.CONCIERGE.CONTACTS_DELETE_ERROR`,{error:t})||`Failed to remove emergency contact: ${t}`),!1}}async updateRoles(e){try{let t=this.category();if(t||(t=await this.ensureCategoryExists()),!t)throw new Error(`Failed to create or find category`);return await Se(new fh(m(l({},t),{description:JSON.stringify({roles:e})}))),this._change.set(Date.now()),!0}catch(t){return iB(`Failed to update roles: ${t}`),!1}}async addRole(e){let t=this.roles();return t.includes(e)?!0:this.updateRoles([...t,e].filter(Boolean).sort((i,s)=>i.localeCompare(s)))}async removeRole(e){try{let t=this.roles(),i=this.contacts(),s=t.filter(_=>_!==e);await this.updateRoles(s);for(let _ of i)if(_.roles.includes(e)){let w=m(l({},_),{roles:_.roles.filter(ae=>ae!==e)});await this.saveContact(w)}return!0}catch(t){return iB(`Failed to remove role: ${t}`),!1}}async renameRole(e,t){try{let i=this.roles(),s=this.contacts(),_=i.map(w=>w===e?t:w).filter(Boolean).sort((w,ae)=>w.localeCompare(ae));await this.updateRoles(_);for(let w of s)if(w.roles.includes(e)){let ae=m(l({},w),{roles:w.roles.map(at=>at===e?t:at)});await this.saveContact(ae)}return!0}catch(i){return iB(`Failed to rename role: ${i}`),!1}}refresh(){this._change.set(Date.now())}assetToContact(e){let t=e.other_data,i=this._org.levelWithID(e.zones);return{id:e.id,name:e.identifier||``,email:t?.email||``,phone:t?.phone||``,roles:t?.roles||[],zone:i?.id||``}}contactToAsset(e,t){let i=e.zone?this._org.levelWithID([e.zone]):null;return{id:e.id?.startsWith(`contact-`)?void 0:e.id,asset_type_id:t,identifier:e.name,other_data:{email:e.email,phone:e.phone,roles:e.roles},zone_id:this._org.building.id,zones:wr([this._org.organisation.id,this._org.region?.id,this._org.building.id,i?.id].filter(s=>s))}}generateContactId(){return`contact-${cS(8)}`}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=P({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();var xi=()=>({standalone:!0});var Mi=(n,l)=>l.id;function Ti(n,l){n&1&&(Ir(0,`button`,3)(1,`icon`),Ta(2,`close`),Rr()())}function ki(n,l){if(n&1&&(Ir(0,`mat-option`,20),Ta(1),Rr()),n&2){let e=l.$implicit;ju(`value`,e.id),zt(),yo(` `,e.display_name||e.name,` `)}}function Ii(n,l){if(n&1&&(Ir(0,`mat-option`,20),Ta(1),Rr()),n&2){let e=Li$1().$implicit;ju(`value`,e),zt(),yo(` `,e,` `)}}function Ri(n,l){if(n&1&&Ar(0,Ii,2,2,`mat-option`,20),n&2){let e=l.$implicit;Dr(e?0:-1)}}function Oi(n,l){if(n&1&&(Ir(0,`div`,24),TD(1,`translate`),Ir(2,`button`,25)(3,`icon`),Ta(4,`add`),Rr()()()),n&2){Li$1(2);let e=F8(9);ju(`matTooltip`,M4(1,2,`APP.CONCIERGE.CONTACTS_ROLES_ADD`)),zt(2),ju(`content`,e)}}function Ai(n,l){if(n&1){let e=SD();Ir(0,`main`,4)(1,`form`)(2,`a-user-search-field`,7),kt(`ngModelChange`,function(i){g_(e);return __(Li$1().setUser(i))}),Rr(),zK(),Ir(3,`div`,8)(4,`label`,9),Ta(5),TD(6,`translate`),Rr(),Ir(7,`mat-form-field`,10),Eo(8,`input`,11),zK(),Rr()(),Ir(9,`div`,12)(10,`div`,13)(11,`label`,14),Ta(12),TD(13,`translate`),Rr(),Ir(14,`mat-form-field`,10),Eo(15,`input`,15),TD(16,`translate`),zK(),Rr()(),Ir(17,`div`,13)(18,`label`,14),Ta(19),TD(20,`translate`),Rr(),Ir(21,`mat-form-field`,10),Eo(22,`input`,16),TD(23,`translate`),zK(),Rr()()(),Ir(24,`div`,8)(25,`label`,17),Ta(26),TD(27,`translate`),Rr(),Ir(28,`mat-form-field`,10)(29,`mat-select`,18),TD(30,`translate`),Ir(31,`mat-option`,19),Ta(32),TD(33,`translate`),Rr(),b8(34,ki,2,2,`mat-option`,20,Mi),Rr(),zK(),Rr()(),Ir(36,`div`,8)(37,`label`,21),Ta(38),TD(39,`translate`),Rr(),Ir(40,`div`,12)(41,`mat-form-field`,22)(42,`mat-select`,23),TD(43,`translate`),b8(44,Ri,1,1,null,null,S8),Rr(),zK(),Rr(),Ar(46,Oi,5,4,`div`,24),Rr()()()()}if(n&2){let e=Li$1();zt(2),ju(`ngModelOptions`,y4(37,xi)),WK(),zt(3),qk(M4(6,17,`FORM.NAME`)),zt(3),ju(`formField`,e.form.name),WK(),zt(4),qk(M4(13,19,`FORM.EMAIL`)),zt(3),ju(`formField`,e.form.email)(`placeholder`,M4(16,21,`FORM.EMAIL`)),WK(),zt(4),qk(M4(20,23,`FORM.PHONE`)),zt(3),ju(`formField`,e.form.phone)(`placeholder`,M4(23,25,`APP.CONCIERGE.CONTACTS_PHONE_PLACEHOLDER`)),WK(),zt(4),qk(M4(27,27,`RESOURCE.LEVEL`)),zt(3),ju(`formField`,e.form.zone)(`placeholder`,M4(30,29,`COMMON.LEVEL_SELECT`)),WK(),zt(3),qk(M4(33,31,`COMMON.LEVEL_ANY`)),zt(2),T8(e.levels()),zt(4),qk(M4(39,33,`APP.CONCIERGE.CONTACTS_ROLES`)),zt(4),ju(`formField`,e.form.roles)(`placeholder`,M4(43,35,`APP.CONCIERGE.CONTACTS_ROLES_SELECT`)),WK(),zt(2),T8(e.roles()),zt(2),Dr(e.can_manage_roles()?46:-1)}}function Pi(n,l){n&1&&(Ir(0,`main`,5),Eo(1,`mat-spinner`,26),Ir(2,`p`),Ta(3),TD(4,`translate`),Rr()()),n&2&&(zt(),ju(`diameter`,48),zt(2),qk(M4(4,2,`APP.CONCIERGE.CONTACTS_SAVING`)))}function Di(n,l){if(n&1){let e=SD();Ir(0,`footer`,6)(1,`button`,27),kt(`click`,function(){g_(e);return __(Li$1().save())}),Ta(2),TD(3,`translate`),Rr()()}n&2&&(zt(2),yo(` `,M4(3,1,`COMMON.SAVE`),` `))}function Fi(n,l){if(n&1){let e=SD();Ir(0,`div`,28)(1,`mat-form-field`,10)(2,`input`,29),TD(3,`translate`),Jk(`ngModelChange`,function(i){g_(e);let s=Li$1();return d4(s.role_name,i)||(s.role_name=i),__(i)}),Rr(),zK(),Rr(),Ir(4,`button`,30),kt(`click`,function(){g_(e);return __(Li$1().addRole())}),Ta(5),TD(6,`translate`),Rr()()}if(n&2){let e=Li$1();zt(2),Xk(`ngModel`,e.role_name),ju(`placeholder`,M4(3,3,`APP.CONCIERGE.CONTACTS_ROLES_NAME`)),WK(),zt(3),yo(` `,M4(6,5,`APP.CONCIERGE.CONTACTS_ROLES_SAVE`),` `)}}var hi=(()=>{class n{constructor(){this._data=g(fce),this._dialog_ref=g(jb),this._org=g(Lb),this._contacts_service=g(we),this.loading=N(!1),this.role_name=N(``),this.contact=this._data,this._user=qX(),this.can_manage_roles=Te(()=>{let e=this._user().groups||[];return e.includes(`placeos_admin`)||e.includes(`placeos_support`)}),this.roles=this._contacts_service.roles,this.model=N({id:this._data?.id||this._contacts_service.generateContactId(),name:this._data?.name||``,email:this._data?.email||``,phone:this._data?.phone||``,zone:this._data?.zone||``,roles:this._data?.roles||[]}),this.form=Gr(this.model),this.levels=this._org.active_levels,this._tooltip=GTe(he)}async addRole(){if(!this.can_manage_roles())return;let e=this.role_name().trim();e&&(this._tooltip().close(),this.loading.set(!0),this._dialog_ref.disableClose=!0,await this._contacts_service.addRole(e),this.model.update(t=>m(l({},t),{roles:[...t.roles||[],e]})),this.role_name.set(``),this.loading.set(!1),this._dialog_ref.disableClose=!1)}setUser(e){this.model.update(t=>m(l({},t),{name:e?.name||``,email:e?.email||``,phone:e?.phone||``}))}async save(){this.loading.set(!0),this._dialog_ref.disableClose=!0;let e=this.model(),t={id:e.id,name:e.name,email:e.email,phone:e.phone,zone:e.zone,roles:e.roles||[]},i=await this._contacts_service.saveContact(t);this._dialog_ref.disableClose=!1,this.loading.set(!1),i&&this._dialog_ref.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je$1({type:n,selectors:[[`emergency-contact-modal`]],viewQuery:function(t,i){t&1&&Lk(i._tooltip,he,5),t&2&&k8()},decls:10,vars:6,consts:[[`role_form`,``],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[1,`w-xl`,`p-4`],[`loading`,``,1,`flex`,`h-64`,`flex-col`,`items-center`,`justify-center`],[1,`border-base-200`,`flex`,`items-center`,`justify-end`,`border-t`,`px-4`,`py-2`],[`ngModel`,``,1,`mb-4`,3,`ngModelChange`,`ngModelOptions`],[1,`flex`,`flex-col`],[`for`,`name`],[`appearance`,`outline`],[`matInput`,``,`placeholder`,`Full name`,3,`formField`],[1,`flex`,`items-center`,`space-x-4`],[1,`flex`,`flex-1`,`flex-col`],[`for`,`email`],[`matInput`,``,`type`,`email`,3,`formField`,`placeholder`],[`matInput`,``,`type`,`tel`,3,`formField`,`placeholder`],[`for`,`zone`],[3,`formField`,`placeholder`],[`value`,``],[3,`value`],[`for`,`roles`],[`appearance`,`outline`,1,`no-subscript`,`flex-1`],[`multiple`,``,3,`formField`,`placeholder`],[3,`matTooltip`],[`icon`,``,`default`,``,`matRipple`,``,`customTooltip`,``,3,`content`],[1,`mb-4`,3,`diameter`],[`btn`,``,`matRipple`,``,1,`w-48`,3,`click`],[1,`bg-base-100`,`rounded-sm`,`p-4`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`]],template:function(t,i){t&1&&(Ir(0,`header`,1)(1,`h2`,2),Ta(2),TD(3,`translate`),Rr(),Ar(4,Ti,3,0,`button`,3),Rr(),Ar(5,Ai,47,38,`main`,4)(6,Pi,5,4,`main`,5),Ar(7,Di,4,3,`footer`,6),va(8,Fi,7,7,`ng-template`,null,0,P4)),t&2&&(zt(2),yo(` `,M4(3,4,i.contact?`APP.CONCIERGE.CONTACTS_EDIT`:`APP.CONCIERGE.CONTACTS_NEW`),` `),zt(2),Dr(i.loading()?-1:4),zt(),Dr(i.loading()?6:5),zt(2),Dr(i.loading()?-1:7))},dependencies:[vQe,w9e,O9e,kt$1,un,ks,Is,ei,Jt,GY,cm,iO,jDe,HDe,HF,UDe,VDe,H7,L7,Uo,St,Yt$1,he,Ft,Yt,mt,f],encapsulation:2})}}return n})();var Li=(n,l)=>l+n;function zi(n,l){n&1&&(Ir(0,`button`,3)(1,`icon`),Ta(2,`close`),Rr()())}function Vi(n,l){if(n&1){let e=SD();Ir(0,`div`,5)(1,`div`,10),Ta(2),Rr(),Ir(3,`button`,11),kt(`click`,function(){let i=g_(e).$implicit,s=Li$1();return s.active.set(i),__(s.role_name.set(i))}),Ir(4,`icon`),Ta(5,`edit`),Rr()(),Ir(6,`button`,12),kt(`click`,function(){let i=g_(e).$implicit;return __(Li$1().removeRole(i))}),Ir(7,`icon`),Ta(8,`delete`),Rr()()()}if(n&2){let e=l.$implicit;Li$1();let t=F8(16);zt(2),qk(e),zt(),ju(`content`,t)}}function Bi(n,l){if(n&1){let e=SD();Ir(0,`div`,13)(1,`mat-form-field`,14)(2,`input`,15),TD(3,`translate`),Jk(`ngModelChange`,function(i){g_(e);let s=Li$1();return d4(s.role_name,i)||(s.role_name=i),__(i)}),Rr(),zK(),Rr(),Ir(4,`button`,16),kt(`click`,function(){g_(e);return __(Li$1().updateRoles())}),Ta(5),TD(6,`translate`),Rr()()}if(n&2){let e=Li$1();zt(2),Xk(`ngModel`,e.role_name),ju(`placeholder`,M4(3,3,`APP.CONCIERGE.CONTACTS_ROLES_NAME`)),WK(),zt(3),yo(` `,M4(6,5,`APP.CONCIERGE.CONTACTS_ROLES_SAVE`),` `)}}var gi=(()=>{class n{constructor(){this._dialog_ref=g(jb),this._contacts_service=g(we),this.active=N(``),this.role_name=N(``),this.loading=N(!1),this.roles=this._contacts_service.roles,this._tooltip=GTe(he)}async removeRole(e){e&&(this.loading.set(!0),this._dialog_ref.disableClose=!0,await this._contacts_service.removeRole(e),this.loading.set(!1),this._dialog_ref.disableClose=!1)}async updateRoles(){let e=this.role_name().trim();e&&(this.loading.set(!0),this._tooltip().close(),this._dialog_ref.disableClose=!0,this.active()?await this._contacts_service.renameRole(this.active(),e):await this._contacts_service.addRole(e),this.role_name.set(``),this.active.set(``),this.loading.set(!1),this._dialog_ref.disableClose=!1)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je$1({type:n,selectors:[[`role-management-modal`]],viewQuery:function(t,i){t&1&&Lk(i._tooltip,he,5),t&2&&k8()},decls:17,vars:8,consts:[[`role_form`,``],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[1,`h-128`,`max-h-[65vh]`,`min-w-md`,`overflow-y-auto`],[1,`hover:bg-base-200:bg-base-300`,`border-base-200`,`m-2`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`border`,`p-2`],[1,`border-base-200`,`border-t`],[`btn`,``,`matRipple`,``,`customTooltip`,``,1,`m-2`,`flex`,`w-[calc(100%-1rem)]`,`items-center`,`justify-center`,`space-x-2`,3,`click`,`content`],[1,`truncate`,`pl-2`],[1,`text-2xl`],[1,`flex-1`,`truncate`,`px-2`],[`icon`,``,`matRipple`,``,`customTooltip`,``,1,`border-secondary`,`text-secondary`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`,`content`],[`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`],[1,`bg-base-100`,`rounded-sm`,`p-4`],[`appearance`,`outline`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`]],template:function(t,i){if(t&1){let s=SD();Ir(0,`header`,1)(1,`h2`,2),Ta(2),TD(3,`translate`),Rr(),Ar(4,zi,3,0,`button`,3),Rr(),Ir(5,`main`,4),b8(6,Vi,9,2,`div`,5,Li),Rr(),Ir(8,`footer`,6)(9,`button`,7),kt(`click`,function(){return g_(s),i.active.set(``),__(i.role_name.set(``))}),Ir(10,`div`,8),Ta(11),TD(12,`translate`),Rr(),Ir(13,`icon`,9),Ta(14,`add`),Rr()()(),va(15,Bi,7,7,`ng-template`,null,0,P4)}if(t&2){let s=F8(16);zt(2),yo(` `,M4(3,4,`APP.CONCIERGE.CONTACTS_ROLES_MANAGE`),` `),zt(2),Dr(i.loading()?-1:4),zt(2),T8(i.roles()),zt(3),ju(`content`,s),zt(2),yo(` `,M4(12,6,`APP.CONCIERGE.CONTACTS_ROLES_ADD`),` `)}},dependencies:[jDe,HF,UDe,H7,w9e,O9e,cm,iO,kt$1,un,ks,Is,vQe,he,f],encapsulation:2})}}return n})();var Gi=(n,l)=>({key:`name`,name:n,content:l});var qi=(n,l)=>({key:`roles`,name:n,content:l,sortable:!1});var ji=(n,l)=>({key:`zone`,name:n,content:l,sortable:!1});var Wi=n=>({key:`actions`,name:` `,content:n,size:`6rem`,sortable:!1});var Ui=(n,l,e,t)=>[n,l,e,t];var $i=(n,l)=>l+n;function Hi(n,l){if(n&1&&(Ir(0,`mat-option`,19),Ta(1),Rr()),n&2){let e=l.$implicit;ju(`value`,e),zt(),yo(` `,e,` `)}}function Yi(n,l){if(n&1){let e=SD();Ir(0,`div`,9)(1,`button`,23),TD(2,`translate`),kt(`click`,function(){g_(e);return __(Li$1().manageRoles())}),Ir(3,`icon`),Ta(4,`list_alt`),Rr()()()}n&2&&(zt(),ju(`matTooltip`,M4(2,1,`APP.CONCIERGE.CONTACTS_ROLES_MANAGE`)))}function Qi(n,l){if(n&1){let e=SD();Ir(0,`button`,24),kt(`click`,function(){let i=g_(e).row;return __(Li$1().copyToClipboard(i.email))}),Ir(1,`div`,25),Ta(2),Rr(),Ir(3,`div`,26),Ta(4),Rr()()}if(n&2){let e=l.row;zt(2),qk(e.name),zt(2),yo(` `,e.email,` `)}}function Xi(n,l){if(n&1&&(Ir(0,`span`,28),Ta(1),Rr()),n&2){let e=l.$implicit;zt(),yo(` `,e,` `)}}function Ji(n,l){if(n&1&&(Ir(0,`div`,27),b8(1,Xi,2,1,`span`,28,v8),Rr()),n&2){let e=l.data;zt(),T8(e)}}function Zi(n,l){if(n&1&&(Ir(0,`div`,29),Ta(1),TD(2,`level`),Rr()),n&2){let e=l.data;zt(),yo(` `,e?M4(2,1,e)?.display_name:`All`,` `)}}function Ki(n,l){if(n&1){let e=SD();Ir(0,`div`,30)(1,`button`,23),TD(2,`translate`),kt(`click`,function(){let i=g_(e).row;return __(Li$1().editContact(i))}),Ir(3,`icon`),Ta(4,`edit`),Rr()(),Ir(5,`button`,31),TD(6,`translate`),kt(`click`,function(){let i=g_(e).row;return __(Li$1().removeContact(i))}),Ir(7,`icon`),Ta(8,`delete`),Rr()()()}n&2&&(zt(),ju(`matTooltip`,M4(2,2,`APP.CONCIERGE.CONTACTS_EDIT`)),zt(4),ju(`matTooltip`,M4(6,4,`APP.CONCIERGE.CONTACTS_REMOVE`)))}var _i=(()=>{class n{constructor(){this._org=g(Lb),this._dialog=g(zb),this._clipboard=g(QH),this._contacts_service=g(we),this.search=N(``),this.role_filter=N(``),this._user=qX(),this.can_manage_roles=Te(()=>{let e=this._user().groups||[];return e.includes(`placeos_admin`)||e.includes(`placeos_support`)}),this.roles=this._contacts_service.roles,this.contacts=this._contacts_service.contacts,this.filtered_contacts=Te(()=>{let e=this.role_filter();return this.contacts().filter(t=>!e||t.roles.includes(e))}),this.copyToClipboard=e=>{this._clipboard.copy(e)&&iS(`User's email copied to clipboard.`)}}ngOnInit(){this.checkMigration()}async checkMigration(){if(await this._contacts_service.needsMigration()){let t=await re({title:`Migrate Emergency Contacts`,content:`Emergency contacts data from the old system was found. Would you like to migrate it to the new system?`,icon:{content:`sync`}},this._dialog);t.reason===`done`&&(t.loading(`Migrating contacts...`),await this._contacts_service.migrateFromMetadata()),t.close()}}manageRoles(){if(!this.can_manage_roles())return;this._dialog.open(gi,{}).afterClosed().subscribe(()=>this._contacts_service.refresh())}editContact(e){this._dialog.open(hi,{data:e}).afterClosed().subscribe(()=>this._contacts_service.refresh())}async removeContact(e){let t=await re({title:`Remove Emergency Contact`,content:`Are you sure you want to remove ${e.name} from the emergency contacts?`,icon:{content:`delete`}},this._dialog);t.reason===`done`&&(t.loading(`Removing contact...`),await this._contacts_service.deleteContact(e.id),t.close())}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je$1({type:n,selectors:[[``,`app-emergency-contacts`,``]],decls:46,vars:47,consts:[[`person_template`,``],[`roles_template`,``],[`zone_template`,``],[`actions_template`,``],[1,`flex`,`h-px`,`flex-1`],[1,`flex`,`h-full`,`w-1/2`,`flex-1`,`flex-col`],[`topbar`,``,1,`flex`,`flex-col`,`px-8`,`py-4`],[1,`flex`,`items-center`,`justify-between`],[1,`text-2xl`,`font-medium`],[1,`flex`,`items-center`,`space-x-2`],[`appearance`,`outline`,1,`no-subscript`],[`matPrefix`,``,1,`text-2xl`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`space-x-2`,3,`click`],[1,`text-2xl`],[1,`pr-2`],[1,`mt-2`,`flex`,`items-center`,`justify-between`,`py-2`],[3,`ngModelChange`,`ngModel`,`placeholder`],[`value`,``],[3,`value`],[1,`h-1/2`,`w-full`,`flex-1`,`overflow-auto`,`px-8`],[1,`block`,`min-w-208`,`text-sm`,3,`data`,`filter`,`empty_message`,`columns`,`sortable`],[1,`h-12`,`w-full`],[`icon`,``,`default`,``,`matRipple`,``,3,`click`,`matTooltip`],[1,`px-4`,`py-2`,`text-left`,`leading-tight`,3,`click`],[1,``],[1,`font-mono`,`text-[0.625rem]`,`opacity-30`],[1,`flex`,`flex-wrap`,`p-2`],[1,`bg-info`,`text-info-content`,`m-1`,`rounded-2xl`,`px-2`,`py-1`,`font-mono`,`text-xs`],[1,`p-4`],[1,`flex`,`w-full`,`items-center`,`justify-end`,`space-x-2`,`p-2`],[`icon`,``,`default`,``,`matRipple`,``,`error`,``,3,`click`,`matTooltip`]],template:function(t,i){if(t&1){let s=SD();Eo(0,`app-topbar`),Ir(1,`div`,4),Eo(2,`app-sidebar`),Ir(3,`main`,5)(4,`section`,6)(5,`div`,7)(6,`h2`,8),Ta(7),TD(8,`translate`),Rr(),Ir(9,`div`,9)(10,`mat-form-field`,10)(11,`icon`,11),Ta(12,` search `),Rr(),Ir(13,`input`,12),TD(14,`translate`),Jk(`ngModelChange`,function(w){return g_(s),d4(i.search,w)||(i.search=w),__(w)}),Rr(),zK(),Rr(),Ir(15,`button`,13),kt(`click`,function(){return i.editContact()}),Ir(16,`icon`,14),Ta(17,`add`),Rr(),Ir(18,`div`,15),Ta(19),TD(20,`translate`),Rr()()()(),Ir(21,`div`,16)(22,`mat-form-field`,10)(23,`mat-select`,17),TD(24,`translate`),Jk(`ngModelChange`,function(w){return g_(s),d4(i.role_filter,w)||(i.role_filter=w),__(w)}),Ir(25,`mat-option`,18),Ta(26),TD(27,`translate`),Rr(),b8(28,Hi,2,2,`mat-option`,19,$i),Rr(),zK(),Rr(),Ar(30,Yi,5,3,`div`,9),Rr()(),Ir(31,`section`,20),Eo(32,`simple-table`,21),TD(33,`translate`),TD(34,`translate`),TD(35,`translate`),TD(36,`translate`),Eo(37,`div`,22),va(38,Qi,5,2,`ng-template`,null,0,P4)(40,Ji,3,0,`ng-template`,null,1,P4)(42,Zi,3,3,`ng-template`,null,2,P4)(44,Ki,9,6,`ng-template`,null,3,P4),Rr()()()}if(t&2){let s=F8(39),_=F8(41),w=F8(43),ae=F8(45);zt(7),yo(` `,M4(8,13,`APP.CONCIERGE.CONTACTS_HEADER`),` `),zt(6),Xk(`ngModel`,i.search),ju(`placeholder`,M4(14,15,`APP.CONCIERGE.CONTACTS_FILTER`)),WK(),zt(6),yo(` `,M4(20,17,`APP.CONCIERGE.CONTACTS_ADD`),` `),zt(4),Xk(`ngModel`,i.role_filter),ju(`placeholder`,M4(24,19,`APP.CONCIERGE.CONTACTS_ROLES_ALL`)),WK(),zt(3),qk(M4(27,21,`APP.CONCIERGE.CONTACTS_ROLES_ALL`)),zt(2),T8(i.roles()),zt(2),Dr(i.can_manage_roles()?30:-1),zt(2),ju(`data`,i.filtered_contacts())(`filter`,i.search())(`empty_message`,M4(33,23,i.search()?`APP.CONCIERGE.CONTACTS_SEARCH_EMPTY`:`APP.CONCIERGE.CONTACTS_EMPTY`))(`columns`,T4(42,Ui,v4(31,Gi,M4(34,25,`COMMON.PERSON`),s),v4(34,qi,M4(35,27,`APP.CONCIERGE.CONTACTS_ROLES`),_),v4(37,ji,M4(36,29,`RESOURCE.LEVEL`),w),S4(40,Wi,ae)))(`sortable`,!0)}},dependencies:[cm,iO,vQe,Yt,mt,Ne,kt$1,un,yr,ei,Jt,GY,ks,Is,$v,Lv,jDe,HF,UDe,H7,f,f$1],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--%NS%base-100)}`]})}}return n})();var ne=(()=>{class n extends Ts{constructor(){super(),this._org=g(Lb),this._onsite={},this._events={},this._users=N([]),this._poll=N(0),this.loading=N(!1),this.filters=N({}),this.search=N(``),this.user_events=N({}),this.filtered_users=Te(()=>{let e=this.search(),t=this._users(),i=this.filters();return t.filter(s=>(!e||s.name.toLowerCase().includes(e)||s.email.toLowerCase().includes(e))&&(!i.only_onsite||this._onsite[s.email]))}),this.loadUsers(),At(()=>{this._org.active_building(),this._poll(),this.timeout(`load-events`,()=>this._loadEvents(),300)})}setFilters(e){this.filters.set(l(l({},this.filters()),e))}setSearchString(e){this.search.set(e)}startPolling(e=3*Ua){let t=Math.max(e,3*Ua);this._poll.update(i=>i+1),this.interval(`poll`,()=>this._poll.update(i=>i+1),t)}stopPolling(){this.clearInterval(`poll`)}async checkin(e){let t=await ge({booking_start:Math.floor(new Date().valueOf()/1e3),booking_end:Math.floor(ri(new Date).valueOf()/1e3),asset_id:e.email,title:`Checked-in Onsite`,description:this._org.building.display_name||this._org.building.name,zones:[this._org.building.id],booking_type:`staff`});await ee(t.id,!0),this._events[e.email]=t,this._onsite[e.email]=!0}async checkout(e){let t=this._events[e.email];if(t){let i=await ge(m(l({},t.toJSON()),{booking_end:Math.floor(new Date().valueOf()/1e3)}));await ee(i.id,!1),this._events[e.email]=i,this._onsite[e.email]=!1}}async _loadEvents(){this.loading.set(!0);let e=await q({period_start:An(an$1(Date.now())),period_end:An(ri(Date.now())),type:`staff`}),t={},i=new Date().valueOf();for(let s of e)zMe(i,i,s.date,s.date+s.duration*60*1e3)&&(t[s.asset_id]=s.checked_in,this._events[s.asset_id]=s);this._onsite=t,this.user_events.set(t),this.loading.set(!1)}async loadUsers(){let e=await R(``);e.sort((t,i)=>t.name.localeCompare(i.name)),this._users.set(e)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=P({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();function en(n,l){n&1&&(Ir(0,`div`,5),Ta(1),TD(2,`translate`),Rr()),n&2&&(zt(),yo(` `,M4(2,1,`APP.CONCIERGE.DIRECTORY_ONSITE`),` `))}function tn(n,l){if(n&1){let e=SD();Ir(0,`div`,0),Eo(1,`a-user-avatar`,1),Ir(2,`div`,2)(3,`div`,3),Ta(4),Rr(),Ir(5,`div`,4),Ta(6),Rr()(),Ar(7,en,3,3,`div`,5),Ir(8,`div`,6)(9,`action-icon`,7),TD(10,`translate`),kt(`click`,function(){g_(e);let i=Li$1();return __(i.onsite()?i.checkout():i.checkin())}),Rr(),Ir(11,`a`,8),TD(12,`translate`),Ir(13,`icon`),Ta(14,`email`),Rr()(),Ir(15,`a`,8),TD(16,`translate`),Ir(17,`icon`),Ta(18,`call`),Rr()()()()}if(n&2){let e=Li$1();zt(),ju(`user`,e.user()),zt(3),qk(e.user()?.name),zt(2),yo(` `,e.user()?.email,` `),zt(),Dr(e.onsite()?7:-1),zt(2),ju(`matTooltip`,M4(10,13,e.onsite()?`COMMON.CHECK_IN`:`COMMON.CHECK_OUT`))(`loading`,e.loading())(`content`,e.onsite()?`event_busy`:`event_available`),zt(2),ju(`matTooltip`,M4(12,15,`APP.CONCIERGE.DIRECTORY_EMAIL`))(`href`,`mailto:`+e.user()?.email,rE),Wt(`disabled`,!e.user()?.email),zt(4),ju(`matTooltip`,M4(16,17,`APP.CONCIERGE.DIRECTORY_PHONE`))(`href`,`tel:`+e.user()?.phone,rE),Wt(`disabled`,!e.user()?.phone)}}var ui=(()=>{class n{constructor(){this._state=g(ne),this.user=ys(void 0),this.onsite=ys(void 0),this.loading=N(!1),this.checkin=async()=>{this.loading.set(!0),await this._state.checkin(this.user()).catch(e=>iB(Zn(`APP.CONCIERGE.DIRECTORY_CHECKIN_ERROR`,{error:e}))),this.loading.set(!1)},this.checkout=async()=>{this.loading.set(!0),await this._state.checkout(this.user()).catch(e=>Zn(`APP.CONCIERGE.DIRECTORY_CHECKOUT_ERROR`,{error:e})),this.loading.set(!1)}}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je$1({type:n,selectors:[[`staff-details`]],inputs:{user:[1,`user`],onsite:[1,`onsite`]},decls:1,vars:1,consts:[[`details`,``,1,`border-base-200`,`bg-base-100`,`flex`,`w-full`,`items-center`,`border-b`,`px-4`,`py-2`,`hover:opacity-80`],[3,`user`],[1,`flex`,`flex-1`,`flex-col`],[1,`px-2`],[1,`text-opacity-50`,`px-2`,`text-xs`],[1,`px-4`,`text-xs`,`opacity-50`],[1,`flex`,`items-center`],[3,`click`,`matTooltip`,`loading`,`content`],[`icon`,``,`matRipple`,``,3,`matTooltip`,`href`]],template:function(t,i){t&1&&Ar(0,tn,19,19,`div`,0),t&2&&Dr(i.user()?0:-1)},dependencies:[jn,ci,vQe,Yt,mt,f],encapsulation:2})}}return n})();var an=[`container`];function on(n,l){if(n&1){let e=SD();Ir(0,`div`,6),kt(`click`,function(){let i=g_(e).$implicit;return __(Li$1().scrollTo(i))}),Ta(1),Rr()}if(n&2){let e=l.$implicit,t=Li$1();Et(`disabled`,t.user_list()[e].length<=0)(`active`,e===t.active_group()),zt(),yo(` `,e,` `)}}function rn(n,l){if(n&1&&Eo(0,`staff-details`,8),n&2){let e=l.$implicit,t=l.$index,i=Li$1(2).$implicit,s=Li$1(2);ju(`id`,`letter-`+i+`-`+t)(`user`,e)(`onsite`,s.events()?s.events()[e.email]:!1)}}function sn(n,l){if(n&1&&(Ir(0,`div`,7),Ta(1),Rr(),b8(2,rn,1,3,`staff-details`,8,v8)),n&2){let e=Li$1().$implicit,t=Li$1(2);ju(`id`,`letter-`+(e===`#`?`0`:e)),zt(),yo(` `,e,` `),zt(),T8(t.user_list()[e])}}function ln(n,l){if(n&1&&Ar(0,sn,4,2),n&2){let e=l.$implicit;Dr(Li$1(2).user_list()[e].length?0:-1)}}function cn(n,l){if(n&1&&b8(0,ln,1,1,null,null,v8),n&2)T8(Li$1().groups)}function dn(n,l){n&1&&(Ir(0,`div`,4)(1,`p`),Ta(2),TD(3,`translate`),Rr()()),n&2&&(zt(2),yo(` `,M4(3,1,`APP.CONCIERGE.DIRECTORY_SEARCH_EMPTY`),` `))}function mn(n,l){n&1&&Eo(0,`mat-progress-bar`,5)}var qe=`#abcdefghijklmnopqrstuvwxyz`.split(``);var fi=(()=>{class n extends Ts{constructor(){super(),this._state=g(ne),this.active_group=N(`#`),this.groups=qe,this.events=this._state.user_events,this.loading=this._state.loading,this.filtered_users=this._state.filtered_users,this.user_count=Te(()=>this.filtered_users().length),this.user_list=Te(()=>{let e=this.filtered_users()||[],t={};for(let i of qe)t[i]=e.filter(s=>s.name.toLowerCase()[0].startsWith(i)||i===`#`&&!qe.includes(s.name.toLowerCase()[0]));return t}),this._el=GTe(`container`),At(e=>{this.user_list(),this.timeout(`scroll`,()=>this.onScroll({}),30),e(()=>this.clearTimeout(`scroll`))})}onScroll(e){let t=this._el();if(!t)return;let i=t.nativeElement.scrollTop;for(let s of qe){let _=document.querySelector(`#letter-${s===`#`?`0`:s}`);if(_){if(_.offsetTop-i>0)break;this.active_group.set(s)}}}scrollTo(e){let t=document.querySelector(`#letter-${e}-0`);t&&(t.scrollIntoView({behavior:`smooth`,block:`center`}),this.active_group.set(e))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je$1({type:n,selectors:[[`staff-listings`]],viewQuery:function(t,i){t&1&&Lk(i._el,an,5),t&2&&k8()},features:[we$1],decls:8,vars:2,consts:[[`container`,``],[1,`flex`,`w-full`,`items-center`,`justify-center`,`p-2`],[`letter`,``,1,`flex`,`h-6`,`w-6`,`cursor-pointer`,`items-center`,`justify-center`,`text-xs`,`capitalize`,3,`disabled`,`active`],[1,`relative`,`w-full`,`flex-1`,`overflow-auto`,2,`height`,`50%`,3,`scroll`],[1,`absolute`,`inset-0`,`flex`,`flex-col`,`items-center`,`justify-center`],[`mode`,`indeterminate`],[`letter`,``,1,`flex`,`h-6`,`w-6`,`cursor-pointer`,`items-center`,`justify-center`,`text-xs`,`capitalize`,3,`click`],[`group`,``,1,`border-base-300`,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`rounded-lg`,`border`,`text-sm`,`font-medium`,`capitalize`,3,`id`],[3,`id`,`user`,`onsite`]],template:function(t,i){t&1&&(Ir(0,`div`,1),b8(1,on,2,5,`div`,2,v8),Rr(),Ir(3,`div`,3,0),kt(`scroll`,function(_){return i.onScroll(_)}),Ar(5,cn,2,0)(6,dn,4,3,`div`,4),Rr(),Ar(7,mn,1,0,`mat-progress-bar`,5)),t&2&&(zt(),T8(i.groups),zt(4),Dr(i.user_count()?5:6),zt(2),Dr(i.loading()?7:-1))},dependencies:[Z,L,ui,f],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:50%}[letter][_ngcontent-%COMP%]{transition:font-size .2s,color .2s}[group][_ngcontent-%COMP%]{border-color:#ccc;padding:.5rem 1.65rem}.disabled[_ngcontent-%COMP%]{opacity:.2;pointer-events:none}.active[_ngcontent-%COMP%]{font-size:1.25rem;opacity:1;color:#d81b60}`]})}}return n})();var pn=[`switch`];var hn=[`*`];function gn(n,l){n&1&&(Ir(0,`span`,11),wx(),Ir(1,`svg`,13),Eo(2,`path`,14),Rr(),Ir(3,`svg`,15),Eo(4,`path`,16),Rr()())}var _n=new I(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var je=class{source;checked;constructor(l,e){this.source=l,this.checked=e}};var nt=(()=>{class n{_elementRef=g(ue);_focusMonitor=g(Ud);_changeDetectorRef=g(sn$1);defaults=g(_n);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new je(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=mr();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new fe;toggleChange=new fe;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){g(hr).load(yv);let e=g(new IE(`tabindex`),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||`accent`,this.id=this._uniqueId=g(Pr).getId(`mat-mdc-slide-toggle-`),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new je(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(t){return new(t||n)};static ɵcmp=je$1({type:n,selectors:[[`mat-slide-toggle`]],viewQuery:function(t,i){if(t&1&&Es(pn,5),t&2){let s;Fi$1(s=Ui$1())&&(i._switchElement=s.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(t,i){t&2&&(ba(`id`,i.id),Wt(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),Op(i.color?`mat-`+i.color:``),Et(`mat-mdc-slide-toggle-focused`,i._focused)(`mat-mdc-slide-toggle-checked`,i.checked)(`mat-slide-toggle-full-width`,i.fullWidth)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,Ze],color:`color`,disabled:[2,`disabled`,`disabled`,Ze],fullWidth:[2,`fullWidth`,`fullWidth`,Ze],disableRipple:[2,`disableRipple`,`disableRipple`,Ze],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:qD(e)],checked:[2,`checked`,`checked`,Ze],hideIcon:[2,`hideIcon`,`hideIcon`,Ze],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Ze]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[on$1([{provide:jc,useExisting:Gt(()=>n),multi:!0},{provide:Ra,useExisting:n,multi:!0}]),Pt],ngContentSelectors:hn,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(t,i){if(t&1&&(ki$1(),Ir(0,`div`,1)(1,`button`,2,0),kt(`click`,function(){return i._handleClick()}),Eo(3,`div`,3)(4,`span`,4),Ir(5,`span`,5)(6,`span`,6)(7,`span`,7),Eo(8,`span`,8),Rr(),Ir(9,`span`,9),Eo(10,`span`,10),Rr(),Ar(11,gn,5,0,`span`,11),Rr()()(),Ir(12,`label`,12),kt(`click`,function(_){return _.stopPropagation()}),zn(13),Rr()()),t&2){let s=F8(2);ju(`labelPosition`,i.labelPosition),zt(),Et(`mdc-switch--selected`,i.checked)(`mdc-switch--unselected`,!i.checked)(`mdc-switch--checked`,i.checked)(`mdc-switch--disabled`,i.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,i.disabledInteractive),ju(`tabIndex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex)(`disabled`,i.disabled&&!i.disabledInteractive),Wt(`id`,i.buttonId)(`name`,i.name)(`aria-label`,i.ariaLabel)(`aria-labelledby`,i._getAriaLabelledBy())(`aria-describedby`,i.ariaDescribedby)(`aria-required`,i.required||null)(`aria-checked`,i.checked)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null),zt(9),ju(`matRippleTrigger`,s)(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleCentered`,!0),zt(),Dr(i.hideIcon?-1:11),zt(),ju(`for`,i.buttonId),Wt(`id`,i._labelId)}},dependencies:[iO,cQe],styles:[`.mdc-switch {
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
  width: var(--%NS%mat-slide-toggle-track-width, 52px);
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
  height: var(--%NS%mat-slide-toggle-track-height, 32px);
  border-radius: var(--%NS%mat-slide-toggle-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--%NS%mat-slide-toggle-disabled-track-opacity, 0.12);
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
  border-width: var(--%NS%mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-track-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-color, var(--%NS%mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--%NS%mat-slide-toggle-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-hover-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-focus-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-track-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--%NS%mat-slide-toggle-selected-track-color, var(--%NS%mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-track-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-track-color, var(--%NS%mat-sys-on-surface));
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
  width: calc(100% - var(--%NS%mat-slide-toggle-handle-width));
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
  width: var(--%NS%mat-slide-toggle-handle-width);
  height: var(--%NS%mat-slide-toggle-handle-height);
  border-radius: var(--%NS%mat-slide-toggle-handle-shape, var(--%NS%mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--%NS%mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--%NS%mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
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
.mdc-switch--%NS%selected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-handle-color, var(--%NS%mat-sys-on-primary));
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-handle-color, var(--%NS%mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-handle-color, var(--%NS%mat-sys-surface));
}
.mdc-switch--%NS%unselected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-handle-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--%NS%unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--%NS%mat-slide-toggle-handle-surface-color);
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
  box-shadow: var(--%NS%mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
  height: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
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
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--%NS%unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
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
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
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
  width: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-selected-icon-color, var(--%NS%mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
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
.mat-mdc-slide-toggle .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
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
  color: var(--%NS%mat-slide-toggle-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-slide-toggle-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-slide-toggle-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-slide-toggle-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-slide-toggle-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-slide-toggle-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
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
  color: var(--%NS%mat-slide-toggle-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-slide-toggle-full-width {
  width: 100%;
}
.mat-slide-toggle-full-width .mat-internal-form-field {
  width: 100%;
  justify-content: space-between;
}
.mat-slide-toggle-full-width .mat-internal-form-field label {
  margin: 0;
  flex-grow: 1;
  text-align: end;
}
.mat-slide-toggle-full-width .mdc-form-field--align-end label {
  text-align: start;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return n})();var vi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=be({type:n});static ɵinj=Ee({imports:[nt,En]})}return n})();var fn=(n,l)=>l.id;function vn(n,l){if(n&1&&(Ir(0,`mat-option`,3),Ta(1),Rr()),n&2){let e=l.$implicit;ju(`value`,e.id),zt(),yo(` `,e.display_name||e.name,` `)}}var bi=(()=>{class n extends Ts{constructor(){super(),this._state=g(ne),this._org=g(Lb),this._route=g(ui$1),this._router=g(_n$1),this.zones=N([]),this.levels=N([]),this.filters=N({}),this.setDate=e=>this._state.setFilters({date:e}),this.setFilters=e=>this._state.setFilters(e),this.setSearch=e=>this._state.setSearchString(e),this.updateZones=e=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:e.join(`,`)},queryParamsHandling:`merge`}),this._state.setFilters({zones:e})},At(()=>{this.filters.set(this._state.filters()||{})}),At(()=>{let e=this._org.active_levels()||[];$(()=>{this.levels.set(e);let t=this.zones().filter(i=>e.find(s=>s.id===i));!t.length&&e.length&&t.push(e[0].id),this.zones.set(t),this.updateZones(t)})})}async ngOnInit(){await this._org.waitUntilInitialised(),this.subscription(`route.query`,this._route.queryParamMap.subscribe(e=>{if(e.has(`zone_ids`)){let t=e.get(`zone_ids`).split(`,`);if(t.length){let i=this._org.levelWithID(t);if(!i)return;this._org.building=this._org.buildings.find(s=>s.id===i.parent_id),this.zones.set(t)}}})),this.setSearch(``)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je$1({type:n,selectors:[[`staff-topbar`]],features:[we$1],decls:12,vars:8,consts:[[1,`border-base-200`,`bg-base-100`,`flex`,`items-center`,`space-x-4`,`border-b`,`p-4`],[`appearance`,`outline`,1,`no-subscript`,`w-48`],[`multiple`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[3,`value`],[1,`m-2`,3,`ngModelChange`,`ngModel`],[1,`text-xs`],[1,`w-2`,`flex-1`],[1,`mr-2`,3,`modelChange`]],template:function(t,i){t&1&&(Ir(0,`div`,0)(1,`mat-form-field`,1)(2,`mat-select`,2),TD(3,`translate`),Jk(`ngModelChange`,function(_){return d4(i.zones,_)||(i.zones=_),_}),kt(`ngModelChange`,function(_){return i.updateZones(_)}),b8(4,vn,2,2,`mat-option`,3,fn),Rr(),zK(),Rr(),Ir(6,`mat-slide-toggle`,4),kt(`ngModelChange`,function(_){return i.setFilters({only_onsite:_})}),Ir(7,`div`,5),Ta(8),TD(9,`translate`),Rr()(),zK(),Eo(10,`div`,6),Ir(11,`searchbar`,7),kt(`modelChange`,function(_){return i.setSearch(_)}),Rr()()),t&2&&(zt(2),Xk(`ngModel`,i.zones),ju(`placeholder`,M4(3,4,`COMMON.LEVEL_ALL`)),WK(),zt(2),T8(i.levels()),zt(2),ju(`ngModel`,i.filters()?.only_onsite),WK(),zt(2),yo(` `,M4(9,6,`APP.CONCIERGE.DIRECTORY_ONSITE_ONLY`),` `))},dependencies:[vi,nt,z,kt$1,un,ei,Jt,GY,jDe,UDe,H7,f],styles:[`mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}`]})}}return n})();function bn(n,l){n&1&&Eo(0,`mat-progress-bar`,4)}var Oo=[{path:``,component:(()=>{class n{constructor(){this._state=g(ne),this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je$1({type:n,selectors:[[``,`app-new-staff`,``]],decls:7,vars:1,consts:[[1,`flex`,`h-px`,`flex-1`],[1,`flex`,`h-full`,`w-1/2`,`flex-1`,`flex-col`],[1,`w-full`],[1,`h-0`,`w-full`,`flex-1`],[`mode`,`indeterminate`,1,`w-full`]],template:function(t,i){t&1&&(Eo(0,`app-topbar`),Ir(1,`div`,0),Eo(2,`app-sidebar`),Ir(3,`main`,1),Eo(4,`staff-topbar`,2)(5,`staff-listings`,3),Ar(6,bn,1,0,`mat-progress-bar`,4),Rr()()),t&2&&(zt(6),Dr(i.loading()?6:-1))},dependencies:[Z,L,$v,Lv,bi,fi],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--%NS%base-100)}`]})}}return n})(),title:`Staff`},{path:`emergency-contacts`,component:_i,title:`Emergency Contacts`}];export{Oo as ROUTES};