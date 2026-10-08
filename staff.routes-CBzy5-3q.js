import{$t as Ja,An as Le,As as nc,Bi as Xk,C as B,Ei as Vy,Er as Qx,Es as mk,G as D_,Ga as dd,Gc as tc,Gt as Ioe,H as DP,Hr as SX,Il as xv,Io as hh,Ja as dt,Jl as zG,Jr as Si$1,Jt as J,K as Dce,Ks as on$1,L as Cr,Ma as cA,Ml as xJ,Mn as Li$1,Ni as X0,Nl as xT,Nn as Loe,Nr as Re,Ns as ni,Pc as sk,Qo as jJ,R as D,Ri as Xg,S as Av,Sr as Qk,Tr as Qu,Ul as yn$1,Uo as ic,Ur as SZ,Us as oc,Va as ct,Vr as SP,Vt as IX,Wi as Y1,Wl as ys,Wo as ie,Ws as oh,Y as Doe,Yi as Ye,Yr as Sn,Yt as J0,Z as Dt,Zc as tx,Zr as TE,Zs as p,_ as Ae,_c as rO,_i as VJ,_o as fx,ai as Tv,an as Jk,at as Er,bc as rc,br as Qe,cc as qce,do as fN,ec as pk,fl as vX,fo as fd,gt as Ft,ha as aA,hc as rA,ho as fs,i as $T,ii as Ts,in as Jg,iu as m,ja as by,jr as RX,ml as vce,mn as Kce,no as e_,ns as jk,ol as ux,po as fe,pr as Q0,qc as tle,qs as oo,qt as Is,ro as ek,rt as Ee,ru as l,sl as vA,ta as ZR,tl as ud,ui as UX,us as kT,vs as li,wr as Qt,xc as re,yo as g1,z as D1,za as co}from"./chunk-OUlxIXDX.js";import{Et as iT,G as Tu,H as Re$1,Ut as np,Y as YK,bt as ft,dn as ut,f as Da,fn as vr,h as ET,ot as cb,rn as sl,y as Ge$1}from"./chunk-CTNsPoim.js";import{C as fd$1,E as qn,T as pd,k as xa,m as Rs,t as $r,v as Wt}from"./chunk-BneM072w.js";import{_ as L,a as Yt,o as mt,t as f,v as Z}from"./main.js";import"./chunk-CbjA3lJo.js";import{n as ue}from"./chunk-VttsbiZk.js";import"./chunk-DVwKtLH6.js";import{E as wn,S as qt,T as ut$1,_ as jt,d as Vb,s as Kb,t as $t}from"./chunk-CLfa_8v6.js";import{t as re$1}from"./chunk-BiDMeYlG.js";import{t as f$1}from"./chunk-D55QuWv3.js";import{n as oe,t as Je}from"./chunk-BXNzVc62.js";import{C as xn,f as an,o as K}from"./chunk-DU5vvGxK.js";import{m as qe$1,o as Le$1,r as Ge$2,s as Me}from"./chunk-5azcKXdJ.js";import{t as z}from"./chunk-Dy4Qp-2p2.js";import"./chunk-BZK6LStk2.js";import{n as R}from"./chunk-CV6NAOGW2.js";import{t as Ft$1}from"./chunk-CMnwBzTj2.js";var Si=[`*`];function Ei(n,l){if(n&1&&(fs(0,`div`)(1,`icon`),Jg(2),Ja()()),n&2){let e=fd();Xg(`state center `+e.state()),ni(2),ic(` `,e.state()===`success`?`done`:`close`,` `)}}function Ni(n,l){n&1&&(fs(0,`div`,3),xT(1,`mat-spinner`,4),Ja()),n&2&&(ni(),kT(`diameter`,16))}var di=(()=>{class n{constructor(){this.icon=D_(void 0),this.className=D_(`material-symbols-rounded`),this.content=D_(void 0),this.loading=D_(void 0),this.disabled=D_(void 0),this.state=D_(``)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`action-icon`]],inputs:{icon:[1,`icon`],className:[1,`className`],content:[1,`content`],loading:[1,`loading`],disabled:[1,`disabled`],state:[1,`state`]},ngContentSelectors:Si,decls:6,vars:8,consts:[[`icon`,``,`matRipple`,``,`title`,``,1,`relative`,3,`disabled`],[`root`,``,3,`className`,`icon`],[3,`class`],[1,`loader`,`center`],[3,`diameter`]],template:function(t,i){t&1&&(tc(),fs(0,`button`,0)(1,`icon`,1),Jg(2),nc(3),Ja(),ud(4,Ei,3,3,`div`,2),ud(5,Ni,2,1,`div`,3),Ja()),t&2&&(Er(`success`,i.state()===`success`),kT(`disabled`,i.loading()||i.disabled()),ni(),kT(`className`,i.className())(`icon`,i.icon()),ni(),ic(` `,i.content(),` `),ni(2),dd(!i.loading()&&i.state()?4:-1),ni(),dd(i.loading()?5:-1))},dependencies:[Da,np,ut$1,qt,Loe],styles:[`.action-icon.fade[_ngcontent-%COMP%] > icon[_ngcontent-%COMP%]{opacity:.35}.success[_ngcontent-%COMP%]{pointer-events:none}.success[_ngcontent-%COMP%]   icon[root][_ngcontent-%COMP%]{opacity:.2}.state.success[_ngcontent-%COMP%]{color:#388e3c}.state.error[_ngcontent-%COMP%]{color:#e53935}
/*# sourceMappingURL=action-icon.component.css.map */`]})}}return n})();var Ge=`_EMERGENCY_CONTACTS_`;var we=(()=>{class n{constructor(){this._org=p(Tu),this._change=Ee(Date.now()),this.category=Ee(null),this.asset_type=Ee(null),this.contacts=Ee([]),this.roles=Ee([]),Dt(()=>{let e=this._org.active_building();this._change(),e&&this._load(e)}),this.ensureCategoryAndTypeExist()}async _load(e){let t=await this._queryCategory(e);this.category.set(t),this.roles.set(this._rolesFromCategory(t));let i=await this._queryAssetType(e,t);this.asset_type.set(i);let s=await this._queryContacts(e,i);this.contacts.set(s)}async _queryCategory(e){try{let{data:t}=await jJ({zone_id:e.id});return t.find(i=>i.name===Ge)||null}catch{return null}}async _queryAssetType(e,t){if(!t)return null;try{let{data:i}=await VJ({zone_id:e.id,q:t.name});return i.find(s=>s.name===Ge&&s.category_id===t.id)||null}catch{return null}}async _queryContacts(e,t){if(!t)return[];try{let{data:i}=await qe$1({zone_id:e.id,type_id:t.id,limit:200});return i.filter(s=>s.asset_type_id===t.id).map(s=>this.assetToContact(s))}catch{return[]}}_rolesFromCategory(e){if(!e?.description)return[];try{return JSON.parse(e.description).roles||[]}catch{return[]}}async _queryLegacyMetadata(e){try{let{details:t}=await rO(e.id,`emergency_contacts`);return t||{contacts:[],roles:[]}}catch{return{contacts:[],roles:[]}}}async ensureCategoryExists(){await this._org.waitUntilInitialised();let e=this._org.building;if(!e)return null;let t=await this._queryCategory(e);if(t)return t;try{let i=await Ge$2(Y1(new TE({name:Ge,description:JSON.stringify({roles:[]}),hidden:!0}),[0,void 0,``,null]));return this._change.set(Date.now()),i}catch(i){return console.error(`Failed to create emergency contacts category:`,i),null}}async ensureAssetTypeExists(e){let t=this._org.building;if(!t||!e)return null;let i=await this._queryAssetType(t,e);if(i)return i;try{let s=await Le$1({name:Ge,category_id:e.id,zone_id:t.id,brand:`PlaceOS`,description:`Emergency contacts for the building`});return this._change.set(Date.now()),s}catch(s){return console.error(`Failed to create emergency contacts asset type:`,s),null}}async ensureCategoryAndTypeExist(){let e=await this.ensureCategoryExists();return e?this.ensureAssetTypeExists(e):null}async migrateFromMetadata(){let e=this._org.building;if(!e)return!1;try{let t=await this._queryLegacyMetadata(e);if(!t?.contacts?.length&&!t?.roles?.length)return!0;let i=await this.ensureCategoryAndTypeExist();if(!i)throw new Error(`Failed to create or find asset type`);let s=await this._queryCategory(e);if(!s)throw new Error(`Failed to find category`);t.roles?.length&&await Ge$2(Y1(new TE(m(l({},s),{hidden:!0,description:JSON.stringify({roles:t.roles})})),[0,null,void 0,``]));for(let u of t.contacts||[])await Me(this.contactToAsset(u,i.id));return await UX(e.id,{name:`emergency_contacts`,description:`Emergency Contacts (migrated to Assets)`,details:{contacts:[],roles:[],migrated:!0}}),this._change.set(Date.now()),vce(Li$1(`APP.CONCIERGE.CONTACTS_MIGRATION_SUCCESS`)||`Successfully migrated emergency contacts.`),!0}catch(t){return Dce(Li$1(`APP.CONCIERGE.CONTACTS_MIGRATION_ERROR`,{error:t})||`Failed to migrate emergency contacts: ${t}`),!1}}async needsMigration(){let e=this._org.building;if(!e)return!1;let t=await this._queryLegacyMetadata(e);return t&&(t.contacts?.length>0||t.roles?.length>0)?!t.migrated:!1}async saveContact(e){try{let t=this.asset_type();if(t||(t=await this.ensureCategoryAndTypeExist()),!t)throw new Error(`Failed to create or find asset type`);return await Me(this.contactToAsset(e,t.id)),this._change.set(Date.now()),vce(Li$1(`APP.CONCIERGE.CONTACTS_SAVE_SUCCESS`)),!0}catch(t){return Dce(Li$1(`APP.CONCIERGE.CONTACTS_SAVE_ERROR`,{error:t})),!1}}async deleteContact(e){try{return await xJ(e),this._change.set(Date.now()),vce(Li$1(`APP.CONCIERGE.CONTACTS_DELETE_SUCCESS`)||`Successfully removed emergency contact.`),!0}catch(t){return Dce(Li$1(`APP.CONCIERGE.CONTACTS_DELETE_ERROR`,{error:t})||`Failed to remove emergency contact: ${t}`),!1}}async updateRoles(e){try{let t=this.category();if(t||(t=await this.ensureCategoryExists()),!t)throw new Error(`Failed to create or find category`);return await Ge$2(new TE(m(l({},t),{description:JSON.stringify({roles:e})}))),this._change.set(Date.now()),!0}catch(t){return Dce(`Failed to update roles: ${t}`),!1}}async addRole(e){let t=this.roles();return t.includes(e)?!0:this.updateRoles([...t,e].filter(Boolean).sort((i,s)=>i.localeCompare(s)))}async removeRole(e){try{let t=this.roles(),i=this.contacts(),s=t.filter(u=>u!==e);await this.updateRoles(s);for(let u of i)if(u.roles.includes(e)){let E=m(l({},u),{roles:u.roles.filter(ae=>ae!==e)});await this.saveContact(E)}return!0}catch(t){return Dce(`Failed to remove role: ${t}`),!1}}async renameRole(e,t){try{let i=this.roles(),s=this.contacts(),u=i.map(E=>E===e?t:E).filter(Boolean).sort((E,ae)=>E.localeCompare(ae));await this.updateRoles(u);for(let E of s)if(E.roles.includes(e)){let ae=m(l({},E),{roles:E.roles.map(at=>at===e?t:at)});await this.saveContact(ae)}return!0}catch(i){return Dce(`Failed to rename role: ${i}`),!1}}refresh(){this._change.set(Date.now())}assetToContact(e){let t=e.other_data,i=this._org.levelWithID(e.zones);return{id:e.id,name:e.identifier||``,email:t?.email||``,phone:t?.phone||``,roles:t?.roles||[],zone:i?.id||``}}contactToAsset(e,t){let i=e.zone?this._org.levelWithID([e.zone]):null;return{id:e.id?.startsWith(`contact-`)?void 0:e.id,asset_type_id:t,identifier:e.name,other_data:{email:e.email,phone:e.phone,roles:e.roles},zone_id:this._org.building.id,zones:Kce([this._org.organisation.id,this._org.region?.id,this._org.building.id,i?.id].filter(s=>s))}}generateContactId(){return`contact-${qce(8)}`}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=B({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();var Mi=()=>({standalone:!0});var Ti=(n,l)=>l.id;function ki(n,l){n&1&&(fs(0,`button`,3)(1,`icon`),Jg(2,`close`),Ja()())}function Ri(n,l){if(n&1&&(fs(0,`mat-option`,20),Jg(1),Ja()),n&2){let e=l.$implicit;kT(`value`,e.id),ni(),ic(` `,e.display_name||e.name,` `)}}function Ii(n,l){if(n&1&&(fs(0,`mat-option`,20),Jg(1),Ja()),n&2){let e=fd().$implicit;kT(`value`,e),ni(),ic(` `,e,` `)}}function Oi(n,l){if(n&1&&ud(0,Ii,2,2,`mat-option`,20),n&2){let e=l.$implicit;dd(e?0:-1)}}function Ai(n,l){if(n&1&&(fs(0,`div`,24),e_(1,`translate`),fs(2,`button`,25)(3,`icon`),Jg(4,`add`),Ja()()()),n&2){fd(2);let e=mk(9);kT(`matTooltip`,ux(1,2,`APP.CONCIERGE.CONTACTS_ROLES_ADD`)),ni(2),kT(`content`,e)}}function Di(n,l){if(n&1){let e=sk();fs(0,`main`,4)(1,`form`)(2,`a-user-search-field`,7),Qt(`ngModelChange`,function(i){Tv(e);return Av(fd().setUser(i))}),Ja(),SP(),fs(3,`div`,8)(4,`label`,9),Jg(5),e_(6,`translate`),Ja(),fs(7,`mat-form-field`,10),xT(8,`input`,11),SP(),Ja()(),fs(9,`div`,12)(10,`div`,13)(11,`label`,14),Jg(12),e_(13,`translate`),Ja(),fs(14,`mat-form-field`,10),xT(15,`input`,15),e_(16,`translate`),SP(),Ja()(),fs(17,`div`,13)(18,`label`,14),Jg(19),e_(20,`translate`),Ja(),fs(21,`mat-form-field`,10),xT(22,`input`,16),e_(23,`translate`),SP(),Ja()()(),fs(24,`div`,8)(25,`label`,17),Jg(26),e_(27,`translate`),Ja(),fs(28,`mat-form-field`,10)(29,`mat-select`,18),e_(30,`translate`),fs(31,`mat-option`,19),Jg(32),e_(33,`translate`),Ja(),J0(34,Ri,2,2,`mat-option`,20,Ti),Ja(),SP(),Ja()(),fs(36,`div`,8)(37,`label`,21),Jg(38),e_(39,`translate`),Ja(),fs(40,`div`,12)(41,`mat-form-field`,22)(42,`mat-select`,23),e_(43,`translate`),J0(44,Oi,1,1,null,null,Q0),Ja(),SP(),Ja(),ud(46,Ai,5,4,`div`,24),Ja()()()()}if(n&2){let e=fd();ni(2),kT(`ngModelOptions`,Qk(37,Mi)),DP(),ni(3),rA(ux(6,17,`FORM.NAME`)),ni(3),kT(`formField`,e.form.name),DP(),ni(4),rA(ux(13,19,`FORM.EMAIL`)),ni(3),kT(`formField`,e.form.email)(`placeholder`,ux(16,21,`FORM.EMAIL`)),DP(),ni(4),rA(ux(20,23,`FORM.PHONE`)),ni(3),kT(`formField`,e.form.phone)(`placeholder`,ux(23,25,`APP.CONCIERGE.CONTACTS_PHONE_PLACEHOLDER`)),DP(),ni(4),rA(ux(27,27,`RESOURCE.LEVEL`)),ni(3),kT(`formField`,e.form.zone)(`placeholder`,ux(30,29,`COMMON.LEVEL_SELECT`)),DP(),ni(3),rA(ux(33,31,`COMMON.LEVEL_ANY`)),ni(2),ek(e.levels()),ni(4),rA(ux(39,33,`APP.CONCIERGE.CONTACTS_ROLES`)),ni(4),kT(`formField`,e.form.roles)(`placeholder`,ux(43,35,`APP.CONCIERGE.CONTACTS_ROLES_SELECT`)),DP(),ni(2),ek(e.roles()),ni(2),dd(e.can_manage_roles()?46:-1)}}function Pi(n,l){n&1&&(fs(0,`main`,5),xT(1,`mat-spinner`,26),fs(2,`p`),Jg(3),e_(4,`translate`),Ja()()),n&2&&(ni(),kT(`diameter`,48),ni(2),rA(ux(4,2,`APP.CONCIERGE.CONTACTS_SAVING`)))}function Fi(n,l){if(n&1){let e=sk();fs(0,`footer`,6)(1,`button`,27),Qt(`click`,function(){Tv(e);return Av(fd().save())}),Jg(2),e_(3,`translate`),Ja()()}n&2&&(ni(2),ic(` `,ux(3,1,`COMMON.SAVE`),` `))}function Li(n,l){if(n&1){let e=sk();fs(0,`div`,28)(1,`mat-form-field`,10)(2,`input`,29),e_(3,`translate`),cA(`ngModelChange`,function(i){Tv(e);let s=fd();return jk(s.role_name,i)||(s.role_name=i),Av(i)}),Ja(),SP(),Ja(),fs(4,`button`,30),Qt(`click`,function(){Tv(e);return Av(fd().addRole())}),Jg(5),e_(6,`translate`),Ja()()}if(n&2){let e=fd();ni(2),aA(`ngModel`,e.role_name),kT(`placeholder`,ux(3,3,`APP.CONCIERGE.CONTACTS_ROLES_NAME`)),DP(),ni(3),ic(` `,ux(6,5,`APP.CONCIERGE.CONTACTS_ROLES_SAVE`),` `)}}var hi=(()=>{class n{constructor(){this._data=p(zG),this._dialog_ref=p(hh),this._org=p(Tu),this._contacts_service=p(we),this.loading=Ee(!1),this.role_name=Ee(``),this.contact=this._data,this._user=ET(),this.can_manage_roles=Le(()=>{let e=this._user().groups||[];return e.includes(`placeos_admin`)||e.includes(`placeos_support`)}),this.roles=this._contacts_service.roles,this.model=Ee({id:this._data?.id||this._contacts_service.generateContactId(),name:this._data?.name||``,email:this._data?.email||``,phone:this._data?.phone||``,zone:this._data?.zone||``,roles:this._data?.roles||[]}),this.form=xa(this.model),this.levels=this._org.active_levels,this._tooltip=SZ(ue)}async addRole(){if(!this.can_manage_roles())return;let e=this.role_name().trim();e&&(this._tooltip().close(),this.loading.set(!0),this._dialog_ref.disableClose=!0,await this._contacts_service.addRole(e),this.model.update(t=>m(l({},t),{roles:[...t.roles||[],e]})),this.role_name.set(``),this.loading.set(!1),this._dialog_ref.disableClose=!1)}setUser(e){this.model.update(t=>m(l({},t),{name:e?.name||``,email:e?.email||``,phone:e?.phone||``}))}async save(){this.loading.set(!0),this._dialog_ref.disableClose=!0;let e=this.model(),t={id:e.id,name:e.name,email:e.email,phone:e.phone,zone:e.zone,roles:e.roles||[]},i=await this._contacts_service.saveContact(t);this._dialog_ref.disableClose=!1,this.loading.set(!1),i&&this._dialog_ref.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`emergency-contact-modal`]],viewQuery:function(t,i){t&1&&$T(i._tooltip,ue,5),t&2&&pk()},decls:10,vars:6,consts:[[`role_form`,``],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[1,`w-xl`,`p-4`],[`loading`,``,1,`flex`,`h-64`,`flex-col`,`items-center`,`justify-center`],[1,`border-base-200`,`flex`,`items-center`,`justify-end`,`border-t`,`px-4`,`py-2`],[`ngModel`,``,1,`mb-4`,3,`ngModelChange`,`ngModelOptions`],[1,`flex`,`flex-col`],[`for`,`name`],[`appearance`,`outline`],[`matInput`,``,`placeholder`,`Full name`,3,`formField`],[1,`flex`,`items-center`,`space-x-4`],[1,`flex`,`flex-1`,`flex-col`],[`for`,`email`],[`matInput`,``,`type`,`email`,3,`formField`,`placeholder`],[`matInput`,``,`type`,`tel`,3,`formField`,`placeholder`],[`for`,`zone`],[3,`formField`,`placeholder`],[`value`,``],[3,`value`],[`for`,`roles`],[`appearance`,`outline`,1,`no-subscript`,`flex-1`],[`multiple`,``,3,`formField`,`placeholder`],[3,`matTooltip`],[`icon`,``,`default`,``,`matRipple`,``,`customTooltip`,``,3,`content`],[1,`mb-4`,3,`diameter`],[`btn`,``,`matRipple`,``,1,`w-48`,3,`click`],[1,`bg-base-100`,`rounded-sm`,`p-4`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`]],template:function(t,i){t&1&&(fs(0,`header`,1)(1,`h2`,2),Jg(2),e_(3,`translate`),Ja(),ud(4,ki,3,0,`button`,3),Ja(),ud(5,Di,47,38,`main`,4)(6,Pi,5,4,`main`,5),ud(7,Fi,4,3,`footer`,6),ys(8,Li,7,7,`ng-template`,null,0,fx)),t&2&&(ni(2),ic(` `,ux(3,4,i.contact?`APP.CONCIERGE.CONTACTS_EDIT`:`APP.CONCIERGE.CONTACTS_NEW`),` `),ni(2),dd(i.loading()?-1:4),ni(),dd(i.loading()?6:5),ni(2),dd(i.loading()?-1:7))},dependencies:[Loe,Ioe,Doe,Wt,qn,fd$1,pd,$t,jt,iT,Da,np,RX,IX,ZR,SX,vX,D1,g1,Rs,ut$1,qt,ue,Ft$1,Yt,mt,f],encapsulation:2})}}return n})();var zi=(n,l)=>l+n;function Vi(n,l){n&1&&(fs(0,`button`,3)(1,`icon`),Jg(2,`close`),Ja()())}function Bi(n,l){if(n&1){let e=sk();fs(0,`div`,5)(1,`div`,10),Jg(2),Ja(),fs(3,`button`,11),Qt(`click`,function(){let i=Tv(e).$implicit,s=fd();return s.active.set(i),Av(s.role_name.set(i))}),fs(4,`icon`),Jg(5,`edit`),Ja()(),fs(6,`button`,12),Qt(`click`,function(){let i=Tv(e).$implicit;return Av(fd().removeRole(i))}),fs(7,`icon`),Jg(8,`delete`),Ja()()()}if(n&2){let e=l.$implicit;fd();let t=mk(16);ni(2),rA(e),ni(),kT(`content`,t)}}function Gi(n,l){if(n&1){let e=sk();fs(0,`div`,13)(1,`mat-form-field`,14)(2,`input`,15),e_(3,`translate`),cA(`ngModelChange`,function(i){Tv(e);let s=fd();return jk(s.role_name,i)||(s.role_name=i),Av(i)}),Ja(),SP(),Ja(),fs(4,`button`,16),Qt(`click`,function(){Tv(e);return Av(fd().updateRoles())}),Jg(5),e_(6,`translate`),Ja()()}if(n&2){let e=fd();ni(2),aA(`ngModel`,e.role_name),kT(`placeholder`,ux(3,3,`APP.CONCIERGE.CONTACTS_ROLES_NAME`)),DP(),ni(3),ic(` `,ux(6,5,`APP.CONCIERGE.CONTACTS_ROLES_SAVE`),` `)}}var gi=(()=>{class n{constructor(){this._dialog_ref=p(hh),this._contacts_service=p(we),this.active=Ee(``),this.role_name=Ee(``),this.loading=Ee(!1),this.roles=this._contacts_service.roles,this._tooltip=SZ(ue)}async removeRole(e){e&&(this.loading.set(!0),this._dialog_ref.disableClose=!0,await this._contacts_service.removeRole(e),this.loading.set(!1),this._dialog_ref.disableClose=!1)}async updateRoles(){let e=this.role_name().trim();e&&(this.loading.set(!0),this._tooltip().close(),this._dialog_ref.disableClose=!0,this.active()?await this._contacts_service.renameRole(this.active(),e):await this._contacts_service.addRole(e),this.role_name.set(``),this.active.set(``),this.loading.set(!1),this._dialog_ref.disableClose=!1)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`role-management-modal`]],viewQuery:function(t,i){t&1&&$T(i._tooltip,ue,5),t&2&&pk()},decls:17,vars:8,consts:[[`role_form`,``],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[1,`h-128`,`max-h-[65vh]`,`min-w-md`,`overflow-y-auto`],[1,`hover:bg-base-200:bg-base-300`,`border-base-200`,`m-2`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`border`,`p-2`],[1,`border-base-200`,`border-t`],[`btn`,``,`matRipple`,``,`customTooltip`,``,1,`m-2`,`flex`,`w-[calc(100%-1rem)]`,`items-center`,`justify-center`,`space-x-2`,3,`click`,`content`],[1,`truncate`,`pl-2`],[1,`text-2xl`],[1,`flex-1`,`truncate`,`px-2`],[`icon`,``,`matRipple`,``,`customTooltip`,``,1,`border-secondary`,`text-secondary`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`,`content`],[`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`],[1,`bg-base-100`,`rounded-sm`,`p-4`],[`appearance`,`outline`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`]],template:function(t,i){if(t&1){let s=sk();fs(0,`header`,1)(1,`h2`,2),Jg(2),e_(3,`translate`),Ja(),ud(4,Vi,3,0,`button`,3),Ja(),fs(5,`main`,4),J0(6,Bi,9,2,`div`,5,zi),Ja(),fs(8,`footer`,6)(9,`button`,7),Qt(`click`,function(){return Tv(s),i.active.set(``),Av(i.role_name.set(``))}),fs(10,`div`,8),Jg(11),e_(12,`translate`),Ja(),fs(13,`icon`,9),Jg(14,`add`),Ja()()(),ys(15,Gi,7,7,`ng-template`,null,0,fx)}if(t&2){let s=mk(16);ni(2),ic(` `,ux(3,4,`APP.CONCIERGE.CONTACTS_ROLES_MANAGE`),` `),ni(2),dd(i.loading()?-1:4),ni(2),ek(i.roles()),ni(3),kT(`content`,s),ni(2),ic(` `,ux(12,6,`APP.CONCIERGE.CONTACTS_ROLES_ADD`),` `)}},dependencies:[RX,ZR,SX,D1,Ioe,Doe,Da,np,Wt,qn,fd$1,pd,Loe,ue,f],encapsulation:2})}}return n})();var qi=(n,l)=>({key:`name`,name:n,content:l});var ji=(n,l)=>({key:`roles`,name:n,content:l,sortable:!1});var Ui=(n,l)=>({key:`zone`,name:n,content:l,sortable:!1});var Wi=n=>({key:`actions`,name:` `,content:n,size:`6rem`,sortable:!1});var $i=(n,l,e,t)=>[n,l,e,t];var Hi=(n,l)=>l+n;function Yi(n,l){if(n&1&&(fs(0,`mat-option`,19),Jg(1),Ja()),n&2){let e=l.$implicit;kT(`value`,e),ni(),ic(` `,e,` `)}}function Qi(n,l){if(n&1){let e=sk();fs(0,`div`,9)(1,`button`,23),e_(2,`translate`),Qt(`click`,function(){Tv(e);return Av(fd().manageRoles())}),fs(3,`icon`),Jg(4,`list_alt`),Ja()()()}n&2&&(ni(),kT(`matTooltip`,ux(2,1,`APP.CONCIERGE.CONTACTS_ROLES_MANAGE`)))}function Xi(n,l){if(n&1){let e=sk();fs(0,`button`,24),Qt(`click`,function(){let i=Tv(e).row;return Av(fd().copyToClipboard(i.email))}),fs(1,`div`,25),Jg(2),Ja(),fs(3,`div`,26),Jg(4),Ja()()}if(n&2){let e=l.row;ni(2),rA(e.name),ni(2),ic(` `,e.email,` `)}}function Ji(n,l){if(n&1&&(fs(0,`span`,28),Jg(1),Ja()),n&2){let e=l.$implicit;ni(),ic(` `,e,` `)}}function Zi(n,l){if(n&1&&(fs(0,`div`,27),J0(1,Ji,2,1,`span`,28,X0),Ja()),n&2){let e=l.data;ni(),ek(e)}}function Ki(n,l){if(n&1&&(fs(0,`div`,29),Jg(1),e_(2,`level`),Ja()),n&2){let e=l.data;ni(),ic(` `,e?ux(2,1,e)?.display_name:`All`,` `)}}function en(n,l){if(n&1){let e=sk();fs(0,`div`,30)(1,`button`,23),e_(2,`translate`),Qt(`click`,function(){let i=Tv(e).row;return Av(fd().editContact(i))}),fs(3,`icon`),Jg(4,`edit`),Ja()(),fs(5,`button`,31),e_(6,`translate`),Qt(`click`,function(){let i=Tv(e).row;return Av(fd().removeContact(i))}),fs(7,`icon`),Jg(8,`delete`),Ja()()()}n&2&&(ni(),kT(`matTooltip`,ux(2,2,`APP.CONCIERGE.CONTACTS_EDIT`)),ni(4),kT(`matTooltip`,ux(6,4,`APP.CONCIERGE.CONTACTS_REMOVE`)))}var ui=(()=>{class n{constructor(){this._org=p(Tu),this._dialog=p(fN),this._clipboard=p(cb),this._contacts_service=p(we),this.search=Ee(``),this.role_filter=Ee(``),this._user=ET(),this.can_manage_roles=Le(()=>{let e=this._user().groups||[];return e.includes(`placeos_admin`)||e.includes(`placeos_support`)}),this.roles=this._contacts_service.roles,this.contacts=this._contacts_service.contacts,this.filtered_contacts=Le(()=>{let e=this.role_filter();return this.contacts().filter(t=>!e||t.roles.includes(e))}),this.copyToClipboard=e=>{this._clipboard.copy(e)&&vce(`User's email copied to clipboard.`)}}ngOnInit(){this.checkMigration()}async checkMigration(){if(await this._contacts_service.needsMigration()){let t=await re$1({title:`Migrate Emergency Contacts`,content:`Emergency contacts data from the old system was found. Would you like to migrate it to the new system?`,icon:{content:`sync`}},this._dialog);t.reason===`done`&&(t.loading(`Migrating contacts...`),await this._contacts_service.migrateFromMetadata()),t.close()}}manageRoles(){if(!this.can_manage_roles())return;this._dialog.open(gi,{}).afterClosed().subscribe(()=>this._contacts_service.refresh())}editContact(e){this._dialog.open(hi,{data:e}).afterClosed().subscribe(()=>this._contacts_service.refresh())}async removeContact(e){let t=await re$1({title:`Remove Emergency Contact`,content:`Are you sure you want to remove ${e.name} from the emergency contacts?`,icon:{content:`delete`}},this._dialog);t.reason===`done`&&(t.loading(`Removing contact...`),await this._contacts_service.deleteContact(e.id),t.close())}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[``,`app-emergency-contacts`,``]],decls:46,vars:47,consts:[[`person_template`,``],[`roles_template`,``],[`zone_template`,``],[`actions_template`,``],[1,`flex`,`h-px`,`flex-1`],[1,`flex`,`h-full`,`w-1/2`,`flex-1`,`flex-col`],[`topbar`,``,1,`flex`,`flex-col`,`px-8`,`py-4`],[1,`flex`,`items-center`,`justify-between`],[1,`text-2xl`,`font-medium`],[1,`flex`,`items-center`,`space-x-2`],[`appearance`,`outline`,1,`no-subscript`],[`matPrefix`,``,1,`text-2xl`],[`matInput`,``,`data-shortcut`,`search`,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,`data-shortcut`,`new`,1,`space-x-2`,3,`click`],[1,`text-2xl`],[1,`pr-2`],[1,`mt-2`,`flex`,`items-center`,`justify-between`,`py-2`],[3,`ngModelChange`,`ngModel`,`placeholder`],[`value`,``],[3,`value`],[1,`h-1/2`,`w-full`,`flex-1`,`overflow-auto`,`px-8`],[1,`block`,`min-w-208`,`text-sm`,3,`data`,`filter`,`empty_message`,`columns`,`sortable`],[1,`h-12`,`w-full`],[`icon`,``,`default`,``,`matRipple`,``,3,`click`,`matTooltip`],[1,`px-4`,`py-2`,`text-left`,`leading-tight`,3,`click`],[1,``],[1,`font-mono`,`text-[0.625rem]`,`opacity-30`],[1,`flex`,`flex-wrap`,`p-2`],[1,`bg-info`,`text-info-content`,`m-1`,`rounded-2xl`,`px-2`,`py-1`,`font-mono`,`text-xs`],[1,`p-4`],[1,`flex`,`w-full`,`items-center`,`justify-end`,`space-x-2`,`p-2`],[`icon`,``,`default`,``,`matRipple`,``,`error`,``,3,`click`,`matTooltip`]],template:function(t,i){if(t&1){let s=sk();xT(0,`app-topbar`),fs(1,`div`,4),xT(2,`app-sidebar`),fs(3,`main`,5)(4,`section`,6)(5,`div`,7)(6,`h2`,8),Jg(7),e_(8,`translate`),Ja(),fs(9,`div`,9)(10,`mat-form-field`,10)(11,`icon`,11),Jg(12,` search `),Ja(),fs(13,`input`,12),e_(14,`translate`),cA(`ngModelChange`,function(E){return Tv(s),jk(i.search,E)||(i.search=E),Av(E)}),Ja(),SP(),Ja(),fs(15,`button`,13),Qt(`click`,function(){return i.editContact()}),fs(16,`icon`,14),Jg(17,`add`),Ja(),fs(18,`div`,15),Jg(19),e_(20,`translate`),Ja()()()(),fs(21,`div`,16)(22,`mat-form-field`,10)(23,`mat-select`,17),e_(24,`translate`),cA(`ngModelChange`,function(E){return Tv(s),jk(i.role_filter,E)||(i.role_filter=E),Av(E)}),fs(25,`mat-option`,18),Jg(26),e_(27,`translate`),Ja(),J0(28,Yi,2,2,`mat-option`,19,Hi),Ja(),SP(),Ja(),ud(30,Qi,5,3,`div`,9),Ja()(),fs(31,`section`,20),xT(32,`simple-table`,21),e_(33,`translate`),e_(34,`translate`),e_(35,`translate`),e_(36,`translate`),xT(37,`div`,22),ys(38,Xi,5,2,`ng-template`,null,0,fx)(40,Zi,3,0,`ng-template`,null,1,fx)(42,Ki,3,3,`ng-template`,null,2,fx)(44,en,9,6,`ng-template`,null,3,fx),Ja()()()}if(t&2){let s=mk(39),u=mk(41),E=mk(43),ae=mk(45);ni(7),ic(` `,ux(8,13,`APP.CONCIERGE.CONTACTS_HEADER`),` `),ni(6),aA(`ngModel`,i.search),kT(`placeholder`,ux(14,15,`APP.CONCIERGE.CONTACTS_FILTER`)),DP(),ni(6),ic(` `,ux(20,17,`APP.CONCIERGE.CONTACTS_ADD`),` `),ni(4),aA(`ngModel`,i.role_filter),kT(`placeholder`,ux(24,19,`APP.CONCIERGE.CONTACTS_ROLES_ALL`)),DP(),ni(3),rA(ux(27,21,`APP.CONCIERGE.CONTACTS_ROLES_ALL`)),ni(2),ek(i.roles()),ni(2),dd(i.can_manage_roles()?30:-1),ni(2),kT(`data`,i.filtered_contacts())(`filter`,i.search())(`empty_message`,ux(33,23,i.search()?`APP.CONCIERGE.CONTACTS_SEARCH_EMPTY`:`APP.CONCIERGE.CONTACTS_EMPTY`))(`columns`,tx(42,$i,Jk(31,qi,ux(34,25,`COMMON.PERSON`),s),Jk(34,ji,ux(35,27,`APP.CONCIERGE.CONTACTS_ROLES`),u),Jk(37,Ui,ux(36,29,`RESOURCE.LEVEL`),E),Xk(40,Wi,ae)))(`sortable`,!0)}},dependencies:[Da,np,Loe,Yt,mt,Je,Wt,qn,$r,$t,jt,iT,fd$1,pd,Kb,Vb,RX,ZR,SX,D1,f,f$1],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--%NS%base-100)}
/*# sourceMappingURL=emergency-contacts.component.css.map */`]})}}return n})();var ne=(()=>{class n extends Ge$1{constructor(){super(),this._org=p(Tu),this._onsite={},this._events={},this._events_failed=!1,this._users=Ee([]),this._poll=Ee(0),this.loading=Ee(!1),this.users_loading=Ee(!1),this.users_error=Ee(!1),this.filters=Ee({}),this.search=Ee(``),this.user_events=Ee({}),this.filtered_users=Le(()=>{let e=this.search().toLowerCase(),t=this._users(),i=this.filters();return t.filter(s=>(!e||s.name.toLowerCase().includes(e)||s.email.toLowerCase().includes(e))&&(!i.only_onsite||this._onsite[s.email]))}),this.loadUsers(),Dt(()=>{this._org.active_building(),this._poll(),this.timeout(`load-events`,()=>this._loadEvents(),300)})}setFilters(e){this.filters.set(l(l({},this.filters()),e))}setSearchString(e){this.search.set(e)}startPolling(e=3*vr){let t=Math.max(e,3*vr);this._poll.update(i=>i+1),this.interval(`poll`,()=>this._poll.update(i=>i+1),t)}stopPolling(){this.clearInterval(`poll`)}async checkin(e){let t=await xn({booking_start:Math.floor(new Date().valueOf()/1e3),booking_end:Math.floor(Vy(new Date).valueOf()/1e3),asset_id:e.email,title:`Checked-in Onsite`,description:this._org.building.display_name||this._org.building.name,zones:[this._org.building.id],booking_type:`staff`});await an(t.id,!0),this._events[e.email]=t,this._onsite[e.email]=!0}async checkout(e){let t=this._events[e.email];if(t){let i=await xn(m(l({},t.toJSON()),{booking_end:Math.floor(new Date().valueOf()/1e3)}));await an(i.id,!1),this._events[e.email]=i,this._onsite[e.email]=!1}}async _loadEvents(){this.loading.set(!0);try{let e=await K({period_start:ut(on$1(Date.now())),period_end:ut(Vy(Date.now())),type:`staff`}),t={},i=new Date().valueOf();for(let s of e)tle(i,i,s.date,s.date+s.duration*60*1e3)&&(t[s.asset_id]=s.checked_in,this._events[s.asset_id]=s);this._onsite=t,this.user_events.set(t),this._events_failed=!1}catch(e){console.error(`Staff check-in load failed:`,e),this._events_failed||Dce(Li$1(`COMMON.LOAD_ERROR`)),this._events_failed=!0}finally{this.loading.set(!1)}}async loadUsers(){if(!this.users_loading()){this.users_loading.set(!0),this.users_error.set(!1);try{let e=await R(``);e.sort((t,i)=>t.name.localeCompare(i.name)),this._users.set(e)}catch(e){console.error(`Staff directory load failed:`,e),this.users_error.set(!0)}finally{this.users_loading.set(!1)}}}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=B({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();function tn(n,l){n&1&&(fs(0,`div`,5),Jg(1),e_(2,`translate`),Ja()),n&2&&(ni(),ic(` `,ux(2,1,`APP.CONCIERGE.DIRECTORY_ONSITE`),` `))}function nn(n,l){if(n&1){let e=sk();fs(0,`div`,0),xT(1,`a-user-avatar`,1),fs(2,`div`,2)(3,`div`,3),Jg(4),Ja(),fs(5,`div`,4),Jg(6),Ja()(),ud(7,tn,3,3,`div`,5),fs(8,`div`,6)(9,`action-icon`,7),e_(10,`translate`),Qt(`click`,function(){Tv(e);let i=fd();return Av(i.onsite()?i.checkout():i.checkin())}),Ja(),fs(11,`a`,8),e_(12,`translate`),fs(13,`icon`),Jg(14,`email`),Ja()(),fs(15,`a`,8),e_(16,`translate`),fs(17,`icon`),Jg(18,`call`),Ja()()()()}if(n&2){let e=fd();ni(),kT(`user`,e.user()),ni(3),rA(e.user()?.name),ni(2),ic(` `,e.user()?.email,` `),ni(),dd(e.onsite()?7:-1),ni(2),kT(`matTooltip`,ux(10,13,e.onsite()?`COMMON.CHECK_IN`:`COMMON.CHECK_OUT`))(`loading`,e.loading())(`content`,e.onsite()?`event_busy`:`event_available`),ni(2),kT(`matTooltip`,ux(12,15,`APP.CONCIERGE.DIRECTORY_EMAIL`))(`href`,`mailto:`+e.user()?.email,Qu),yn$1(`disabled`,!e.user()?.email),ni(4),kT(`matTooltip`,ux(16,17,`APP.CONCIERGE.DIRECTORY_PHONE`))(`href`,`tel:`+e.user()?.phone,Qu),yn$1(`disabled`,!e.user()?.phone)}}var fi=(()=>{class n{constructor(){this._state=p(ne),this.user=D_(void 0),this.onsite=D_(void 0),this.loading=Ee(!1),this.checkin=async()=>{this.loading.set(!0),await this._state.checkin(this.user()).catch(e=>Dce(Li$1(`APP.CONCIERGE.DIRECTORY_CHECKIN_ERROR`,{error:e}))),this.loading.set(!1)},this.checkout=async()=>{this.loading.set(!0),await this._state.checkout(this.user()).catch(e=>Dce(Li$1(`APP.CONCIERGE.DIRECTORY_CHECKOUT_ERROR`,{error:e}))),this.loading.set(!1)}}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`staff-details`]],inputs:{user:[1,`user`],onsite:[1,`onsite`]},decls:1,vars:1,consts:[[`details`,``,1,`border-base-200`,`bg-base-100`,`flex`,`w-full`,`items-center`,`border-b`,`px-4`,`py-2`,`hover:opacity-80`],[3,`user`],[1,`flex`,`flex-1`,`flex-col`],[1,`px-2`],[1,`text-opacity-50`,`px-2`,`text-xs`],[1,`px-4`,`text-xs`,`opacity-50`],[1,`flex`,`items-center`],[3,`click`,`matTooltip`,`loading`,`content`],[`icon`,``,`matRipple`,``,3,`matTooltip`,`href`]],template:function(t,i){t&1&&ud(0,nn,19,19,`div`,0),t&2&&dd(i.user()?0:-1)},dependencies:[wn,di,Loe,Yt,mt,f],encapsulation:2})}}return n})();var on=[`container`];function rn(n,l){if(n&1){let e=sk();fs(0,`div`,7),Qt(`click`,function(){let i=Tv(e).$implicit;return Av(fd().scrollTo(i))}),Jg(1),Ja()}if(n&2){let e=l.$implicit,t=fd();Er(`disabled`,t.user_list()[e].length<=0)(`active`,e===t.active_group()),ni(),ic(` `,e,` `)}}function sn(n,l){if(n&1){let e=sk();fs(0,`div`,4)(1,`load-error`,8),Qt(`retry`,function(){Tv(e);return Av(fd().retry())}),Ja()()}}function ln(n,l){if(n&1&&xT(0,`staff-details`,10),n&2){let e=l.$implicit,t=l.$index,i=fd(2).$implicit,s=fd(2);kT(`id`,`letter-`+i+`-`+t)(`user`,e)(`onsite`,s.events()?s.events()[e.email]:!1)}}function cn(n,l){if(n&1&&(fs(0,`div`,9),Jg(1),Ja(),J0(2,ln,1,3,`staff-details`,10,X0)),n&2){let e=fd().$implicit,t=fd(2);kT(`id`,`letter-`+(e===`#`?`0`:e)),ni(),ic(` `,e,` `),ni(),ek(t.user_list()[e])}}function dn(n,l){if(n&1&&ud(0,cn,4,2),n&2){let e=l.$implicit;dd(fd(2).user_list()[e].length?0:-1)}}function mn(n,l){if(n&1&&J0(0,dn,1,1,null,null,X0),n&2)ek(fd().groups)}function pn(n,l){n&1&&(fs(0,`div`,5)(1,`p`),Jg(2),e_(3,`translate`),Ja()()),n&2&&(ni(2),ic(` `,ux(3,1,`APP.CONCIERGE.DIRECTORY_SEARCH_EMPTY`),` `))}function _n(n,l){n&1&&xT(0,`mat-progress-bar`,6)}var qe=`#abcdefghijklmnopqrstuvwxyz`.split(``);var vi=(()=>{class n extends Ge$1{constructor(){super(),this._state=p(ne),this.active_group=Ee(`#`),this.groups=qe,this.events=this._state.user_events,this.loading=this._state.loading,this.users_loading=this._state.users_loading,this.users_error=this._state.users_error,this.filtered_users=this._state.filtered_users,this.user_count=Le(()=>this.filtered_users().length),this.user_list=Le(()=>{let e=this.filtered_users()||[],t={};for(let i of qe)t[i]=e.filter(s=>s.name.toLowerCase()[0].startsWith(i)||i===`#`&&!qe.includes(s.name.toLowerCase()[0]));return t}),this._el=SZ(`container`),Dt(e=>{this.user_list(),this.timeout(`scroll`,()=>this.onScroll({}),30),e(()=>this.clearTimeout(`scroll`))})}onScroll(e){let t=this._el();if(!t)return;let i=t.nativeElement.scrollTop;for(let s of qe){let u=document.querySelector(`#letter-${s===`#`?`0`:s}`);if(u){if(u.offsetTop-i>0)break;this.active_group.set(s)}}}retry(){this._state.loadUsers()}scrollTo(e){let t=document.querySelector(`#letter-${e}-0`);t&&(t.scrollIntoView({behavior:`smooth`,block:`center`}),this.active_group.set(e))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`staff-listings`]],viewQuery:function(t,i){t&1&&$T(i._el,on,5),t&2&&pk()},features:[fe],decls:9,vars:2,consts:[[`container`,``],[1,`flex`,`w-full`,`items-center`,`justify-center`,`p-2`],[`letter`,``,1,`flex`,`h-6`,`w-6`,`cursor-pointer`,`items-center`,`justify-center`,`text-xs`,`capitalize`,3,`disabled`,`active`],[1,`relative`,`w-full`,`flex-1`,`overflow-auto`,2,`height`,`50%`,3,`scroll`],[1,`absolute`,`inset-0`,`flex`,`items-center`,`justify-center`],[1,`absolute`,`inset-0`,`flex`,`flex-col`,`items-center`,`justify-center`],[`mode`,`indeterminate`],[`letter`,``,1,`flex`,`h-6`,`w-6`,`cursor-pointer`,`items-center`,`justify-center`,`text-xs`,`capitalize`,3,`click`],[3,`retry`],[`group`,``,1,`border-base-300`,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`rounded-lg`,`border`,`text-sm`,`font-medium`,`capitalize`,3,`id`],[3,`id`,`user`,`onsite`]],template:function(t,i){t&1&&(fs(0,`div`,1),J0(1,rn,2,5,`div`,2,X0),Ja(),fs(3,`div`,3,0),Qt(`scroll`,function(u){return i.onScroll(u)}),ud(5,sn,2,0,`div`,4)(6,mn,2,0)(7,pn,4,3,`div`,5),Ja(),ud(8,_n,1,0,`mat-progress-bar`,6)),t&2&&(ni(),ek(i.groups),ni(4),dd(i.users_error()?5:i.user_count()?6:i.users_loading()?-1:7),ni(3),dd(i.loading()||i.users_loading()?8:-1))},dependencies:[Z,L,oe,fi,f],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:50%}[letter][_ngcontent-%COMP%]{transition:font-size .2s,color .2s}[group][_ngcontent-%COMP%]{border-color:#ccc;padding:.5rem 1.65rem}.disabled[_ngcontent-%COMP%]{opacity:.2;pointer-events:none}.active[_ngcontent-%COMP%]{font-size:1.25rem;opacity:1;color:#d81b60}
/*# sourceMappingURL=staff-listing.component.css.map */`]})}}return n})();var hn=[`switch`];var gn=[`*`];function un(n,l){n&1&&(fs(0,`span`,11),xv(),fs(1,`svg`,13),xT(2,`path`,14),Ja(),fs(3,`svg`,15),xT(4,`path`,16),Ja()())}var fn=new D(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var je=class{source;checked;constructor(l,e){this.source=l,this.checked=e}};var nt=(()=>{class n{_elementRef=p(ie);_focusMonitor=p(oh);_changeDetectorRef=p(Sn);defaults=p(fn);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new je(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=by();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new re;toggleChange=new re;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){p(co).load(sl);let e=p(new vA(`tabindex`),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||`accent`,this.id=this._uniqueId=p(Cr).getId(`mat-mdc-slide-toggle-`),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new je(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(t){return new(t||n)};static ɵcmp=Ft({type:n,selectors:[[`mat-slide-toggle`]],viewQuery:function(t,i){if(t&1&&Ts(hn,5),t&2){let s;rc(s=oc())&&(i._switchElement=s.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(t,i){t&2&&(Is(`id`,i.id),yn$1(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),Xg(i.color?`mat-`+i.color:``),Er(`mat-mdc-slide-toggle-focused`,i._focused)(`mat-mdc-slide-toggle-checked`,i.checked)(`mat-slide-toggle-full-width`,i.fullWidth)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,ct],color:`color`,disabled:[2,`disabled`,`disabled`,ct],fullWidth:[2,`fullWidth`,`fullWidth`,ct],disableRipple:[2,`disableRipple`,`disableRipple`,ct],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:Qx(e)],checked:[2,`checked`,`checked`,ct],hideIcon:[2,`hideIcon`,`hideIcon`,ct],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ct]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[Qe([{provide:li,useExisting:Ye(()=>n),multi:!0},{provide:oo,useExisting:n,multi:!0}]),dt],ngContentSelectors:gn,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(t,i){if(t&1&&(tc(),fs(0,`div`,1)(1,`button`,2,0),Qt(`click`,function(){return i._handleClick()}),xT(3,`div`,3)(4,`span`,4),fs(5,`span`,5)(6,`span`,6)(7,`span`,7),xT(8,`span`,8),Ja(),fs(9,`span`,9),xT(10,`span`,10),Ja(),ud(11,un,5,0,`span`,11),Ja()()(),fs(12,`label`,12),Qt(`click`,function(u){return u.stopPropagation()}),nc(13),Ja()()),t&2){let s=mk(2);kT(`labelPosition`,i.labelPosition),ni(),Er(`mdc-switch--selected`,i.checked)(`mdc-switch--unselected`,!i.checked)(`mdc-switch--checked`,i.checked)(`mdc-switch--disabled`,i.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,i.disabledInteractive),kT(`tabIndex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex)(`disabled`,i.disabled&&!i.disabledInteractive),yn$1(`id`,i.buttonId)(`name`,i.name)(`aria-label`,i.ariaLabel)(`aria-labelledby`,i._getAriaLabelledBy())(`aria-describedby`,i.ariaDescribedby)(`aria-required`,i.required||null)(`aria-checked`,i.checked)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null),ni(9),kT(`matRippleTrigger`,s)(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleCentered`,!0),ni(),dd(i.hideIcon?-1:11),ni(),kT(`for`,i.buttonId),yn$1(`id`,i._labelId)}},dependencies:[np,YK],styles:[`.mdc-switch {
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
`],encapsulation:2})}return n})();var bi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Re({type:n});static ɵinj=Ae({imports:[nt,Si$1]})}return n})();var bn=(n,l)=>l.id;function Cn(n,l){if(n&1&&(fs(0,`mat-option`,3),Jg(1),Ja()),n&2){let e=l.$implicit;kT(`value`,e.id),ni(),ic(` `,e.display_name||e.name,` `)}}var Ci=(()=>{class n extends Ge$1{constructor(){super(),this._state=p(ne),this._org=p(Tu),this._route=p(Re$1),this._router=p(ft),this.zones=Ee([]),this.levels=Ee([]),this.filters=Ee({}),this.setDate=e=>this._state.setFilters({date:e}),this.setFilters=e=>this._state.setFilters(e),this.setSearch=e=>this._state.setSearchString(e),this.updateZones=e=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:e.join(`,`)},queryParamsHandling:`merge`}),this._state.setFilters({zones:e})},Dt(()=>{this.filters.set(this._state.filters()||{})}),Dt(()=>{let e=this._org.active_levels()||[];J(()=>{this.levels.set(e);let t=this.zones().filter(i=>e.find(s=>s.id===i));!t.length&&e.length&&t.push(e[0].id),this.zones.set(t),this.updateZones(t)})})}async ngOnInit(){await this._org.waitUntilInitialised(),this.subscription(`route.query`,this._route.queryParamMap.subscribe(e=>{if(e.has(`zone_ids`)){let t=e.get(`zone_ids`).split(`,`);if(t.length){let i=this._org.levelWithID(t);if(!i)return;this._org.building=this._org.buildings.find(s=>s.id===i.parent_id),this.zones.set(t)}}})),this.setSearch(``)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`staff-topbar`]],features:[fe],decls:12,vars:8,consts:[[1,`border-base-200`,`bg-base-100`,`flex`,`items-center`,`space-x-4`,`border-b`,`p-4`],[`appearance`,`outline`,1,`no-subscript`,`w-48`],[`multiple`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[3,`value`],[1,`m-2`,3,`ngModelChange`,`ngModel`],[1,`text-xs`],[1,`w-2`,`flex-1`],[1,`mr-2`,3,`modelChange`]],template:function(t,i){t&1&&(fs(0,`div`,0)(1,`mat-form-field`,1)(2,`mat-select`,2),e_(3,`translate`),cA(`ngModelChange`,function(u){return jk(i.zones,u)||(i.zones=u),u}),Qt(`ngModelChange`,function(u){return i.updateZones(u)}),J0(4,Cn,2,2,`mat-option`,3,bn),Ja(),SP(),Ja(),fs(6,`mat-slide-toggle`,4),Qt(`ngModelChange`,function(u){return i.setFilters({only_onsite:u})}),fs(7,`div`,5),Jg(8),e_(9,`translate`),Ja()(),SP(),xT(10,`div`,6),fs(11,`searchbar`,7),Qt(`modelChange`,function(u){return i.setSearch(u)}),Ja()()),t&2&&(ni(2),aA(`ngModel`,i.zones),kT(`placeholder`,ux(3,4,`COMMON.LEVEL_ALL`)),DP(),ni(2),ek(i.levels()),ni(2),kT(`ngModel`,i.filters()?.only_onsite),DP(),ni(2),ic(` `,ux(9,6,`APP.CONCIERGE.DIRECTORY_ONSITE_ONLY`),` `))},dependencies:[bi,nt,z,Wt,qn,$t,jt,iT,RX,SX,D1,f],styles:[`mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}
/*# sourceMappingURL=staff-topbar.component.css.map */`]})}}return n})();function yn(n,l){n&1&&xT(0,`mat-progress-bar`,4)}var Do=[{path:``,component:(()=>{class n{constructor(){this._state=p(ne),this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[``,`app-new-staff`,``]],decls:7,vars:1,consts:[[1,`flex`,`h-px`,`flex-1`],[1,`flex`,`h-full`,`w-1/2`,`flex-1`,`flex-col`],[1,`w-full`],[1,`h-0`,`w-full`,`flex-1`],[`mode`,`indeterminate`,1,`w-full`]],template:function(t,i){t&1&&(xT(0,`app-topbar`),fs(1,`div`,0),xT(2,`app-sidebar`),fs(3,`main`,1),xT(4,`staff-topbar`,2)(5,`staff-listings`,3),ud(6,yn,1,0,`mat-progress-bar`,4),Ja()()),t&2&&(ni(6),dd(i.loading()?6:-1))},dependencies:[Z,L,Kb,Vb,Ci,vi],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--%NS%base-100)}
/*# sourceMappingURL=staff.component.css.map */`]})}}return n})(),title:`Staff`},{path:`emergency-contacts`,component:ui,title:`Emergency Contacts`}];export{Do as ROUTES};
//# debugId=121ac6b4-22d3-5f49-9d9a-24bf137c430f
//# sourceMappingURL=staff.routes-CBzy5-3q.js.map