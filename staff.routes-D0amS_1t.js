import{$o as gt,$s as lU,Ac as nNe,Ao as exe,Ar as Ra,B as DXe,Ba as b,Cl as r1,D as Bt,Ei as W4,Fu as x,H as Dn,It as I_,Ja as bs,Jo as gm,Kl as tT,Kr as Td,Ku as y5,Lr as So,M as Cr,Mc as nT,Ml as s6,Mr as Rr,Ms as jd,Mt as IB,N as Ct,Nc as ni,Nn as N,Nr as S1,Nu as wv,Oo as ei,Ot as Ht,Pt as IJ,Ql as u4,Qo as gr,Qt as Jx,Rr as St,Rt as Ie,U as Dr,Uo as g,V as Da,W as Dw,Wo as g1,X as Eh,Xc as pS,Xr as To,Y as Ee,Ya as c6,Yi as YRe,Yo as gn$1,Yr as Tn,Zi as Yb,Zn as Oa,Zu as yV,_ as A_,_i as VXe,ad as zRe,ai as Ue,an as KIe,as as hW,au as ue,b as Ar,bc as mr,ct as Fr,da as Zce,di as V4,du as v5,en as K4,fl as q8,fr as Pt,gc as mh,gd as m,gl as qRe,gr as Q8,gt as Ga,ha as Zt,hc as md,hd as l,hr as Q4,ia as Z8,ic as li,j as Ce,li as Ut,ls as hi$1,ma as Zn,mc as mZ,mn as Ku,mo as dR,nn as K8,pn as Kt,qa as bo,ql as ti,ra as Z7e,rn as KCe,ro as cn$1,so as d4,st as Fp,t as $,tc as lZ,ti as UD,tn as K7e,ul as q4,uo as dE,ur as Pr,uu as v1,v as Aa,vl as qc,vr as QCe,vt as Gi$1,w as BD,wa as _n$1,xi as Vi$1,xr as QRe,y as Ae,ya as _G,yl as qe$1,zo as fe,zu as xE}from"./chunk-MeNto9nX.js";import{C as fd,E as qn,T as pd,k as xa,m as Rs,t as $r,v as Wt}from"./chunk-C-A4N5Xq.js";import{m as Z,n as Yt,p as L,r as mt,t as f}from"./main.js";import"./chunk-wBLFnc-c.js";import{t as he}from"./chunk-Bd-1GHlS.js";import"./chunk-CaxlzhEg.js";import{C as ut,b as qt,m as jt,n as Ab,s as Mn,t as $t,u as Wb}from"./chunk-CFpMdFrE.js";import{t as f$1}from"./chunk-BZGey-Xp.js";import{t as Ne}from"./chunk-Co4W8dg1.js";import{t as re}from"./chunk-DWBDMt93.js";import{d as ee,g as me,r as S}from"./chunk-YYEm62C_.js";import{a as Ge$1,d as Se,f as Ue$1,g as xe}from"./chunk-WUH2q-Lg.js";import{t as z}from"./chunk-NRwxAumu.js";import"./chunk-Dc1J2i7P2.js";import{n as R}from"./chunk-DgGDLW8-2.js";import{t as Ft}from"./chunk-DJKzn-GL2.js";var wi=[`*`];function Si(n,l){if(n&1&&(Ar(0,`div`)(1,`icon`),Ra(2),Cr()()),n&2){let e=Vi$1();Fp(`state center `+e.state()),Ut(2),To(` `,e.state()===`success`?`done`:`close`,` `)}}function Ei(n,l){n&1&&(Ar(0,`div`,3),So(1,`mat-spinner`,4),Cr()),n&2&&(Ut(),Ku(`diameter`,16))}var ci=(()=>{class n{constructor(){this.icon=bs(void 0),this.className=bs(`material-symbols-rounded`),this.content=bs(void 0),this.loading=bs(void 0),this.disabled=bs(void 0),this.state=bs(``)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`action-icon`]],inputs:{icon:[1,`icon`],className:[1,`className`],content:[1,`content`],loading:[1,`loading`],disabled:[1,`disabled`],state:[1,`state`]},ngContentSelectors:wi,decls:6,vars:8,consts:[[`icon`,``,`matRipple`,``,`title`,``,1,`relative`,3,`disabled`],[`root`,``,3,`className`,`icon`],[3,`class`],[1,`loader`,`center`],[3,`diameter`]],template:function(t,i){t&1&&(ei(),Ar(0,`button`,0)(1,`icon`,1),Ra(2),Tn(3),Cr(),Dr(4,Si,3,3,`div`,2),Dr(5,Ei,2,1,`div`,3),Cr()),t&2&&(gt(`success`,i.state()===`success`),Ku(`disabled`,i.loading()||i.disabled()),Ut(),Ku(`className`,i.className())(`icon`,i.icon()),Ut(),To(` `,i.content(),` `),Ut(2),Rr(!i.loading()&&i.state()?4:-1),Ut(),Rr(i.loading()?5:-1))},dependencies:[gm,Dw,ut,qt,VXe],styles:[`.action-icon.fade[_ngcontent-%COMP%] > icon[_ngcontent-%COMP%]{opacity:.35}.success[_ngcontent-%COMP%]{pointer-events:none}.success[_ngcontent-%COMP%]   icon[root][_ngcontent-%COMP%]{opacity:.2}.state.success[_ngcontent-%COMP%]{color:#388e3c}.state.error[_ngcontent-%COMP%]{color:#e53935}
/*# sourceMappingURL=action-icon.component.css.map */`]})}}return n})();var Ge=`_EMERGENCY_CONTACTS_`;var we=(()=>{class n{constructor(){this._org=g(Yb),this._change=N(Date.now()),this.category=N(null),this.asset_type=N(null),this.contacts=N([]),this.roles=N([]),St(()=>{let e=this._org.active_building();this._change(),e&&this._load(e)}),this.ensureCategoryAndTypeExist()}async _load(e){let t=await this._queryCategory(e);this.category.set(t),this.roles.set(this._rolesFromCategory(t));let i=await this._queryAssetType(e,t);this.asset_type.set(i);let s=await this._queryContacts(e,i);this.contacts.set(s)}async _queryCategory(e){try{let{data:t}=await nNe({zone_id:e.id});return t.find(i=>i.name===Ge)||null}catch{return null}}async _queryAssetType(e,t){if(!t)return null;try{let{data:i}=await QCe({zone_id:e.id,q:t.name});return i.find(s=>s.name===Ge&&s.category_id===t.id)||null}catch{return null}}async _queryContacts(e,t){if(!t)return[];try{let{data:i}=await xe({zone_id:e.id,type_id:t.id,limit:200});return i.filter(s=>s.asset_type_id===t.id).map(s=>this.assetToContact(s))}catch{return[]}}_rolesFromCategory(e){if(!e?.description)return[];try{return JSON.parse(e.description).roles||[]}catch{return[]}}async _queryLegacyMetadata(e){try{let{details:t}=await md(e.id,`emergency_contacts`);return t||{contacts:[],roles:[]}}catch{return{contacts:[],roles:[]}}}async ensureCategoryExists(){await this._org.waitUntilInitialised();let e=this._org.building;if(!e)return null;let t=await this._queryCategory(e);if(t)return t;try{let i=await Se(Eh(new mh({name:Ge,description:JSON.stringify({roles:[]}),hidden:!0}),[0,void 0,``,null]));return this._change.set(Date.now()),i}catch(i){return console.error(`Failed to create emergency contacts category:`,i),null}}async ensureAssetTypeExists(e){let t=this._org.building;if(!t||!e)return null;let i=await this._queryAssetType(t,e);if(i)return i;try{let s=await Ue$1({name:Ge,category_id:e.id,zone_id:t.id,brand:`PlaceOS`,description:`Emergency contacts for the building`});return this._change.set(Date.now()),s}catch(s){return console.error(`Failed to create emergency contacts asset type:`,s),null}}async ensureCategoryAndTypeExist(){let e=await this.ensureCategoryExists();return e?this.ensureAssetTypeExists(e):null}async migrateFromMetadata(){let e=this._org.building;if(!e)return!1;try{let t=await this._queryLegacyMetadata(e);if(!t?.contacts?.length&&!t?.roles?.length)return!0;let i=await this.ensureCategoryAndTypeExist();if(!i)throw new Error(`Failed to create or find asset type`);let s=await this._queryCategory(e);if(!s)throw new Error(`Failed to find category`);t.roles?.length&&await Se(Eh(new mh(m(l({},s),{hidden:!0,description:JSON.stringify({roles:t.roles})})),[0,null,void 0,``]));for(let _ of t.contacts||[])await Ge$1(this.contactToAsset(_,i.id));return await yV(e.id,{name:`emergency_contacts`,description:`Emergency Contacts (migrated to Assets)`,details:{contacts:[],roles:[],migrated:!0}}),this._change.set(Date.now()),pS(Zn(`APP.CONCIERGE.CONTACTS_MIGRATION_SUCCESS`)||`Successfully migrated emergency contacts.`),!0}catch(t){return IB(Zn(`APP.CONCIERGE.CONTACTS_MIGRATION_ERROR`,{error:t})||`Failed to migrate emergency contacts: ${t}`),!1}}async needsMigration(){let e=this._org.building;if(!e)return!1;let t=await this._queryLegacyMetadata(e);return t&&(t.contacts?.length>0||t.roles?.length>0)?!t.migrated:!1}async saveContact(e){try{let t=this.asset_type();if(t||(t=await this.ensureCategoryAndTypeExist()),!t)throw new Error(`Failed to create or find asset type`);return await Ge$1(this.contactToAsset(e,t.id)),this._change.set(Date.now()),pS(Zn(`APP.CONCIERGE.CONTACTS_SAVE_SUCCESS`)),!0}catch(t){return IB(Zn(`APP.CONCIERGE.CONTACTS_SAVE_ERROR`,{error:t})),!1}}async deleteContact(e){try{return await KCe(e),this._change.set(Date.now()),pS(Zn(`APP.CONCIERGE.CONTACTS_DELETE_SUCCESS`)||`Successfully removed emergency contact.`),!0}catch(t){return IB(Zn(`APP.CONCIERGE.CONTACTS_DELETE_ERROR`,{error:t})||`Failed to remove emergency contact: ${t}`),!1}}async updateRoles(e){try{let t=this.category();if(t||(t=await this.ensureCategoryExists()),!t)throw new Error(`Failed to create or find category`);return await Se(new mh(m(l({},t),{description:JSON.stringify({roles:e})}))),this._change.set(Date.now()),!0}catch(t){return IB(`Failed to update roles: ${t}`),!1}}async addRole(e){let t=this.roles();return t.includes(e)?!0:this.updateRoles([...t,e].filter(Boolean).sort((i,s)=>i.localeCompare(s)))}async removeRole(e){try{let t=this.roles(),i=this.contacts(),s=t.filter(_=>_!==e);await this.updateRoles(s);for(let _ of i)if(_.roles.includes(e)){let w=m(l({},_),{roles:_.roles.filter(ae=>ae!==e)});await this.saveContact(w)}return!0}catch(t){return IB(`Failed to remove role: ${t}`),!1}}async renameRole(e,t){try{let i=this.roles(),s=this.contacts(),_=i.map(w=>w===e?t:w).filter(Boolean).sort((w,ae)=>w.localeCompare(ae));await this.updateRoles(_);for(let w of s)if(w.roles.includes(e)){let ae=m(l({},w),{roles:w.roles.map(at=>at===e?t:at)});await this.saveContact(ae)}return!0}catch(i){return IB(`Failed to rename role: ${i}`),!1}}refresh(){this._change.set(Date.now())}assetToContact(e){let t=e.other_data,i=this._org.levelWithID(e.zones);return{id:e.id,name:e.identifier||``,email:t?.email||``,phone:t?.phone||``,roles:t?.roles||[],zone:i?.id||``}}contactToAsset(e,t){let i=e.zone?this._org.levelWithID([e.zone]):null;return{id:e.id?.startsWith(`contact-`)?void 0:e.id,asset_type_id:t,identifier:e.name,other_data:{email:e.email,phone:e.phone,roles:e.roles},zone_id:this._org.building.id,zones:Pr([this._org.organisation.id,this._org.region?.id,this._org.building.id,i?.id].filter(s=>s))}}generateContactId(){return`contact-${Td(8)}`}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=x({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();var xi=()=>({standalone:!0});var Mi=(n,l)=>l.id;function Ti(n,l){n&1&&(Ar(0,`button`,3)(1,`icon`),Ra(2,`close`),Cr()())}function ki(n,l){if(n&1&&(Ar(0,`mat-option`,20),Ra(1),Cr()),n&2){let e=l.$implicit;Ku(`value`,e.id),Ut(),To(` `,e.display_name||e.name,` `)}}function Ri(n,l){if(n&1&&(Ar(0,`mat-option`,20),Ra(1),Cr()),n&2){let e=Vi$1().$implicit;Ku(`value`,e),Ut(),To(` `,e,` `)}}function Ii(n,l){if(n&1&&Dr(0,Ri,2,2,`mat-option`,20),n&2){let e=l.$implicit;Rr(e?0:-1)}}function Oi(n,l){if(n&1&&(Ar(0,`div`,24),BD(1,`translate`),Ar(2,`button`,25)(3,`icon`),Ra(4,`add`),Cr()()()),n&2){Vi$1(2);let e=d4(9);Ku(`matTooltip`,s6(1,2,`APP.CONCIERGE.CONTACTS_ROLES_ADD`)),Ut(2),Ku(`content`,e)}}function Ai(n,l){if(n&1){let e=UD();Ar(0,`main`,4)(1,`form`)(2,`a-user-search-field`,7),Bt(`ngModelChange`,function(i){I_(e);return A_(Vi$1().setUser(i))}),Cr(),y5(),Ar(3,`div`,8)(4,`label`,9),Ra(5),BD(6,`translate`),Cr(),Ar(7,`mat-form-field`,10),So(8,`input`,11),y5(),Cr()(),Ar(9,`div`,12)(10,`div`,13)(11,`label`,14),Ra(12),BD(13,`translate`),Cr(),Ar(14,`mat-form-field`,10),So(15,`input`,15),BD(16,`translate`),y5(),Cr()(),Ar(17,`div`,13)(18,`label`,14),Ra(19),BD(20,`translate`),Cr(),Ar(21,`mat-form-field`,10),So(22,`input`,16),BD(23,`translate`),y5(),Cr()()(),Ar(24,`div`,8)(25,`label`,17),Ra(26),BD(27,`translate`),Cr(),Ar(28,`mat-form-field`,10)(29,`mat-select`,18),BD(30,`translate`),Ar(31,`mat-option`,19),Ra(32),BD(33,`translate`),Cr(),Z8(34,ki,2,2,`mat-option`,20,Mi),Cr(),y5(),Cr()(),Ar(36,`div`,8)(37,`label`,21),Ra(38),BD(39,`translate`),Cr(),Ar(40,`div`,12)(41,`mat-form-field`,22)(42,`mat-select`,23),BD(43,`translate`),Z8(44,Ii,1,1,null,null,q8),Cr(),y5(),Cr(),Dr(46,Oi,5,4,`div`,24),Cr()()()()}if(n&2){let e=Vi$1();Ut(2),Ku(`ngModelOptions`,W4(37,xi)),v5(),Ut(3),g1(s6(6,17,`FORM.NAME`)),Ut(3),Ku(`formField`,e.form.name),v5(),Ut(4),g1(s6(13,19,`FORM.EMAIL`)),Ut(3),Ku(`formField`,e.form.email)(`placeholder`,s6(16,21,`FORM.EMAIL`)),v5(),Ut(4),g1(s6(20,23,`FORM.PHONE`)),Ut(3),Ku(`formField`,e.form.phone)(`placeholder`,s6(23,25,`APP.CONCIERGE.CONTACTS_PHONE_PLACEHOLDER`)),v5(),Ut(4),g1(s6(27,27,`RESOURCE.LEVEL`)),Ut(3),Ku(`formField`,e.form.zone)(`placeholder`,s6(30,29,`COMMON.LEVEL_SELECT`)),v5(),Ut(3),g1(s6(33,31,`COMMON.LEVEL_ANY`)),Ut(2),Q8(e.levels()),Ut(4),g1(s6(39,33,`APP.CONCIERGE.CONTACTS_ROLES`)),Ut(4),Ku(`formField`,e.form.roles)(`placeholder`,s6(43,35,`APP.CONCIERGE.CONTACTS_ROLES_SELECT`)),v5(),Ut(2),Q8(e.roles()),Ut(2),Rr(e.can_manage_roles()?46:-1)}}function Pi(n,l){n&1&&(Ar(0,`main`,5),So(1,`mat-spinner`,26),Ar(2,`p`),Ra(3),BD(4,`translate`),Cr()()),n&2&&(Ut(),Ku(`diameter`,48),Ut(2),g1(s6(4,2,`APP.CONCIERGE.CONTACTS_SAVING`)))}function Di(n,l){if(n&1){let e=UD();Ar(0,`footer`,6)(1,`button`,27),Bt(`click`,function(){I_(e);return A_(Vi$1().save())}),Ra(2),BD(3,`translate`),Cr()()}n&2&&(Ut(2),To(` `,s6(3,1,`COMMON.SAVE`),` `))}function Fi(n,l){if(n&1){let e=UD();Ar(0,`div`,28)(1,`mat-form-field`,10)(2,`input`,29),BD(3,`translate`),v1(`ngModelChange`,function(i){I_(e);let s=Vi$1();return V4(s.role_name,i)||(s.role_name=i),A_(i)}),Cr(),y5(),Cr(),Ar(4,`button`,30),Bt(`click`,function(){I_(e);return A_(Vi$1().addRole())}),Ra(5),BD(6,`translate`),Cr()()}if(n&2){let e=Vi$1();Ut(2),S1(`ngModel`,e.role_name),Ku(`placeholder`,s6(3,3,`APP.CONCIERGE.CONTACTS_ROLES_NAME`)),v5(),Ut(3),To(` `,s6(6,5,`APP.CONCIERGE.CONTACTS_ROLES_SAVE`),` `)}}var gi=(()=>{class n{constructor(){this._data=g(Zce),this._dialog_ref=g(tT),this._org=g(Yb),this._contacts_service=g(we),this.loading=N(!1),this.role_name=N(``),this.contact=this._data,this._user=IJ(),this.can_manage_roles=Ae(()=>{let e=this._user().groups||[];return e.includes(`placeos_admin`)||e.includes(`placeos_support`)}),this.roles=this._contacts_service.roles,this.model=N({id:this._data?.id||this._contacts_service.generateContactId(),name:this._data?.name||``,email:this._data?.email||``,phone:this._data?.phone||``,zone:this._data?.zone||``,roles:this._data?.roles||[]}),this.form=xa(this.model),this.levels=this._org.active_levels,this._tooltip=KIe(he)}async addRole(){if(!this.can_manage_roles())return;let e=this.role_name().trim();e&&(this._tooltip().close(),this.loading.set(!0),this._dialog_ref.disableClose=!0,await this._contacts_service.addRole(e),this.model.update(t=>m(l({},t),{roles:[...t.roles||[],e]})),this.role_name.set(``),this.loading.set(!1),this._dialog_ref.disableClose=!1)}setUser(e){this.model.update(t=>m(l({},t),{name:e?.name||``,email:e?.email||``,phone:e?.phone||``}))}async save(){this.loading.set(!0),this._dialog_ref.disableClose=!0;let e=this.model(),t={id:e.id,name:e.name,email:e.email,phone:e.phone,zone:e.zone,roles:e.roles||[]},i=await this._contacts_service.saveContact(t);this._dialog_ref.disableClose=!1,this.loading.set(!1),i&&this._dialog_ref.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`emergency-contact-modal`]],viewQuery:function(t,i){t&1&&r1(i._tooltip,he,5),t&2&&u4()},decls:10,vars:6,consts:[[`role_form`,``],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[1,`w-xl`,`p-4`],[`loading`,``,1,`flex`,`h-64`,`flex-col`,`items-center`,`justify-center`],[1,`border-base-200`,`flex`,`items-center`,`justify-end`,`border-t`,`px-4`,`py-2`],[`ngModel`,``,1,`mb-4`,3,`ngModelChange`,`ngModelOptions`],[1,`flex`,`flex-col`],[`for`,`name`],[`appearance`,`outline`],[`matInput`,``,`placeholder`,`Full name`,3,`formField`],[1,`flex`,`items-center`,`space-x-4`],[1,`flex`,`flex-1`,`flex-col`],[`for`,`email`],[`matInput`,``,`type`,`email`,3,`formField`,`placeholder`],[`matInput`,``,`type`,`tel`,3,`formField`,`placeholder`],[`for`,`zone`],[3,`formField`,`placeholder`],[`value`,``],[3,`value`],[`for`,`roles`],[`appearance`,`outline`,1,`no-subscript`,`flex-1`],[`multiple`,``,3,`formField`,`placeholder`],[3,`matTooltip`],[`icon`,``,`default`,``,`matRipple`,``,`customTooltip`,``,3,`content`],[1,`mb-4`,3,`diameter`],[`btn`,``,`matRipple`,``,1,`w-48`,3,`click`],[1,`bg-base-100`,`rounded-sm`,`p-4`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`]],template:function(t,i){t&1&&(Ar(0,`header`,1)(1,`h2`,2),Ra(2),BD(3,`translate`),Cr(),Dr(4,Ti,3,0,`button`,3),Cr(),Dr(5,Ai,47,38,`main`,4)(6,Pi,5,4,`main`,5),Dr(7,Di,4,3,`footer`,6),Aa(8,Fi,7,7,`ng-template`,null,0,c6)),t&2&&(Ut(2),To(` `,s6(3,4,i.contact?`APP.CONCIERGE.CONTACTS_EDIT`:`APP.CONCIERGE.CONTACTS_NEW`),` `),Ut(2),Rr(i.loading()?-1:4),Ut(),Rr(i.loading()?6:5),Ut(2),Rr(i.loading()?-1:7))},dependencies:[VXe,Z7e,K7e,Wt,qn,fd,pd,$t,jt,hW,gm,Dw,QRe,qRe,lU,zRe,YRe,mZ,lZ,Rs,ut,qt,he,Ft,Yt,mt,f],encapsulation:2})}}return n})();var Li=(n,l)=>l+n;function zi(n,l){n&1&&(Ar(0,`button`,3)(1,`icon`),Ra(2,`close`),Cr()())}function Vi(n,l){if(n&1){let e=UD();Ar(0,`div`,5)(1,`div`,10),Ra(2),Cr(),Ar(3,`button`,11),Bt(`click`,function(){let i=I_(e).$implicit,s=Vi$1();return s.active.set(i),A_(s.role_name.set(i))}),Ar(4,`icon`),Ra(5,`edit`),Cr()(),Ar(6,`button`,12),Bt(`click`,function(){let i=I_(e).$implicit;return A_(Vi$1().removeRole(i))}),Ar(7,`icon`),Ra(8,`delete`),Cr()()()}if(n&2){let e=l.$implicit;Vi$1();let t=d4(16);Ut(2),g1(e),Ut(),Ku(`content`,t)}}function Bi(n,l){if(n&1){let e=UD();Ar(0,`div`,13)(1,`mat-form-field`,14)(2,`input`,15),BD(3,`translate`),v1(`ngModelChange`,function(i){I_(e);let s=Vi$1();return V4(s.role_name,i)||(s.role_name=i),A_(i)}),Cr(),y5(),Cr(),Ar(4,`button`,16),Bt(`click`,function(){I_(e);return A_(Vi$1().updateRoles())}),Ra(5),BD(6,`translate`),Cr()()}if(n&2){let e=Vi$1();Ut(2),S1(`ngModel`,e.role_name),Ku(`placeholder`,s6(3,3,`APP.CONCIERGE.CONTACTS_ROLES_NAME`)),v5(),Ut(3),To(` `,s6(6,5,`APP.CONCIERGE.CONTACTS_ROLES_SAVE`),` `)}}var hi=(()=>{class n{constructor(){this._dialog_ref=g(tT),this._contacts_service=g(we),this.active=N(``),this.role_name=N(``),this.loading=N(!1),this.roles=this._contacts_service.roles,this._tooltip=KIe(he)}async removeRole(e){e&&(this.loading.set(!0),this._dialog_ref.disableClose=!0,await this._contacts_service.removeRole(e),this.loading.set(!1),this._dialog_ref.disableClose=!1)}async updateRoles(){let e=this.role_name().trim();e&&(this.loading.set(!0),this._tooltip().close(),this._dialog_ref.disableClose=!0,this.active()?await this._contacts_service.renameRole(this.active(),e):await this._contacts_service.addRole(e),this.role_name.set(``),this.active.set(``),this.loading.set(!1),this._dialog_ref.disableClose=!1)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`role-management-modal`]],viewQuery:function(t,i){t&1&&r1(i._tooltip,he,5),t&2&&u4()},decls:17,vars:8,consts:[[`role_form`,``],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[1,`h-128`,`max-h-[65vh]`,`min-w-md`,`overflow-y-auto`],[1,`hover:bg-base-200:bg-base-300`,`border-base-200`,`m-2`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`border`,`p-2`],[1,`border-base-200`,`border-t`],[`btn`,``,`matRipple`,``,`customTooltip`,``,1,`m-2`,`flex`,`w-[calc(100%-1rem)]`,`items-center`,`justify-center`,`space-x-2`,3,`click`,`content`],[1,`truncate`,`pl-2`],[1,`text-2xl`],[1,`flex-1`,`truncate`,`px-2`],[`icon`,``,`matRipple`,``,`customTooltip`,``,1,`border-secondary`,`text-secondary`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`,`content`],[`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`],[1,`bg-base-100`,`rounded-sm`,`p-4`],[`appearance`,`outline`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`]],template:function(t,i){if(t&1){let s=UD();Ar(0,`header`,1)(1,`h2`,2),Ra(2),BD(3,`translate`),Cr(),Dr(4,zi,3,0,`button`,3),Cr(),Ar(5,`main`,4),Z8(6,Vi,9,2,`div`,5,Li),Cr(),Ar(8,`footer`,6)(9,`button`,7),Bt(`click`,function(){return I_(s),i.active.set(``),A_(i.role_name.set(``))}),Ar(10,`div`,8),Ra(11),BD(12,`translate`),Cr(),Ar(13,`icon`,9),Ra(14,`add`),Cr()()(),Aa(15,Bi,7,7,`ng-template`,null,0,c6)}if(t&2){let s=d4(16);Ut(2),To(` `,s6(3,4,`APP.CONCIERGE.CONTACTS_ROLES_MANAGE`),` `),Ut(2),Rr(i.loading()?-1:4),Ut(2),Q8(i.roles()),Ut(3),Ku(`content`,s),Ut(2),To(` `,s6(12,6,`APP.CONCIERGE.CONTACTS_ROLES_ADD`),` `)}},dependencies:[QRe,lU,zRe,mZ,Z7e,K7e,gm,Dw,Wt,qn,fd,pd,VXe,he,f],encapsulation:2})}}return n})();var Gi=(n,l)=>({key:`name`,name:n,content:l});var qi=(n,l)=>({key:`roles`,name:n,content:l,sortable:!1});var ji=(n,l)=>({key:`zone`,name:n,content:l,sortable:!1});var Ui=n=>({key:`actions`,name:` `,content:n,size:`6rem`,sortable:!1});var Wi=(n,l,e,t)=>[n,l,e,t];var $i=(n,l)=>l+n;function Hi(n,l){if(n&1&&(Ar(0,`mat-option`,19),Ra(1),Cr()),n&2){let e=l.$implicit;Ku(`value`,e),Ut(),To(` `,e,` `)}}function Yi(n,l){if(n&1){let e=UD();Ar(0,`div`,9)(1,`button`,23),BD(2,`translate`),Bt(`click`,function(){I_(e);return A_(Vi$1().manageRoles())}),Ar(3,`icon`),Ra(4,`list_alt`),Cr()()()}n&2&&(Ut(),Ku(`matTooltip`,s6(2,1,`APP.CONCIERGE.CONTACTS_ROLES_MANAGE`)))}function Qi(n,l){if(n&1){let e=UD();Ar(0,`button`,24),Bt(`click`,function(){let i=I_(e).row;return A_(Vi$1().copyToClipboard(i.email))}),Ar(1,`div`,25),Ra(2),Cr(),Ar(3,`div`,26),Ra(4),Cr()()}if(n&2){let e=l.row;Ut(2),g1(e.name),Ut(2),To(` `,e.email,` `)}}function Xi(n,l){if(n&1&&(Ar(0,`span`,28),Ra(1),Cr()),n&2){let e=l.$implicit;Ut(),To(` `,e,` `)}}function Ji(n,l){if(n&1&&(Ar(0,`div`,27),Z8(1,Xi,2,1,`span`,28,K8),Cr()),n&2){let e=l.data;Ut(),Q8(e)}}function Zi(n,l){if(n&1&&(Ar(0,`div`,29),Ra(1),BD(2,`level`),Cr()),n&2){let e=l.data;Ut(),To(` `,e?s6(2,1,e)?.display_name:`All`,` `)}}function Ki(n,l){if(n&1){let e=UD();Ar(0,`div`,30)(1,`button`,23),BD(2,`translate`),Bt(`click`,function(){let i=I_(e).row;return A_(Vi$1().editContact(i))}),Ar(3,`icon`),Ra(4,`edit`),Cr()(),Ar(5,`button`,31),BD(6,`translate`),Bt(`click`,function(){let i=I_(e).row;return A_(Vi$1().removeContact(i))}),Ar(7,`icon`),Ra(8,`delete`),Cr()()()}n&2&&(Ut(),Ku(`matTooltip`,s6(2,2,`APP.CONCIERGE.CONTACTS_EDIT`)),Ut(4),Ku(`matTooltip`,s6(6,4,`APP.CONCIERGE.CONTACTS_REMOVE`)))}var _i=(()=>{class n{constructor(){this._org=g(Yb),this._dialog=g(nT),this._clipboard=g(_G),this._contacts_service=g(we),this.search=N(``),this.role_filter=N(``),this._user=IJ(),this.can_manage_roles=Ae(()=>{let e=this._user().groups||[];return e.includes(`placeos_admin`)||e.includes(`placeos_support`)}),this.roles=this._contacts_service.roles,this.contacts=this._contacts_service.contacts,this.filtered_contacts=Ae(()=>{let e=this.role_filter();return this.contacts().filter(t=>!e||t.roles.includes(e))}),this.copyToClipboard=e=>{this._clipboard.copy(e)&&pS(`User's email copied to clipboard.`)}}ngOnInit(){this.checkMigration()}async checkMigration(){if(await this._contacts_service.needsMigration()){let t=await re({title:`Migrate Emergency Contacts`,content:`Emergency contacts data from the old system was found. Would you like to migrate it to the new system?`,icon:{content:`sync`}},this._dialog);t.reason===`done`&&(t.loading(`Migrating contacts...`),await this._contacts_service.migrateFromMetadata()),t.close()}}manageRoles(){if(!this.can_manage_roles())return;this._dialog.open(hi,{}).afterClosed().subscribe(()=>this._contacts_service.refresh())}editContact(e){this._dialog.open(gi,{data:e}).afterClosed().subscribe(()=>this._contacts_service.refresh())}async removeContact(e){let t=await re({title:`Remove Emergency Contact`,content:`Are you sure you want to remove ${e.name} from the emergency contacts?`,icon:{content:`delete`}},this._dialog);t.reason===`done`&&(t.loading(`Removing contact...`),await this._contacts_service.deleteContact(e.id),t.close())}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[``,`app-emergency-contacts`,``]],decls:46,vars:47,consts:[[`person_template`,``],[`roles_template`,``],[`zone_template`,``],[`actions_template`,``],[1,`flex`,`h-px`,`flex-1`],[1,`flex`,`h-full`,`w-1/2`,`flex-1`,`flex-col`],[`topbar`,``,1,`flex`,`flex-col`,`px-8`,`py-4`],[1,`flex`,`items-center`,`justify-between`],[1,`text-2xl`,`font-medium`],[1,`flex`,`items-center`,`space-x-2`],[`appearance`,`outline`,1,`no-subscript`],[`matPrefix`,``,1,`text-2xl`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`space-x-2`,3,`click`],[1,`text-2xl`],[1,`pr-2`],[1,`mt-2`,`flex`,`items-center`,`justify-between`,`py-2`],[3,`ngModelChange`,`ngModel`,`placeholder`],[`value`,``],[3,`value`],[1,`h-1/2`,`w-full`,`flex-1`,`overflow-auto`,`px-8`],[1,`block`,`min-w-208`,`text-sm`,3,`data`,`filter`,`empty_message`,`columns`,`sortable`],[1,`h-12`,`w-full`],[`icon`,``,`default`,``,`matRipple`,``,3,`click`,`matTooltip`],[1,`px-4`,`py-2`,`text-left`,`leading-tight`,3,`click`],[1,``],[1,`font-mono`,`text-[0.625rem]`,`opacity-30`],[1,`flex`,`flex-wrap`,`p-2`],[1,`bg-info`,`text-info-content`,`m-1`,`rounded-2xl`,`px-2`,`py-1`,`font-mono`,`text-xs`],[1,`p-4`],[1,`flex`,`w-full`,`items-center`,`justify-end`,`space-x-2`,`p-2`],[`icon`,``,`default`,``,`matRipple`,``,`error`,``,3,`click`,`matTooltip`]],template:function(t,i){if(t&1){let s=UD();So(0,`app-topbar`),Ar(1,`div`,4),So(2,`app-sidebar`),Ar(3,`main`,5)(4,`section`,6)(5,`div`,7)(6,`h2`,8),Ra(7),BD(8,`translate`),Cr(),Ar(9,`div`,9)(10,`mat-form-field`,10)(11,`icon`,11),Ra(12,` search `),Cr(),Ar(13,`input`,12),BD(14,`translate`),v1(`ngModelChange`,function(w){return I_(s),V4(i.search,w)||(i.search=w),A_(w)}),Cr(),y5(),Cr(),Ar(15,`button`,13),Bt(`click`,function(){return i.editContact()}),Ar(16,`icon`,14),Ra(17,`add`),Cr(),Ar(18,`div`,15),Ra(19),BD(20,`translate`),Cr()()()(),Ar(21,`div`,16)(22,`mat-form-field`,10)(23,`mat-select`,17),BD(24,`translate`),v1(`ngModelChange`,function(w){return I_(s),V4(i.role_filter,w)||(i.role_filter=w),A_(w)}),Ar(25,`mat-option`,18),Ra(26),BD(27,`translate`),Cr(),Z8(28,Hi,2,2,`mat-option`,19,$i),Cr(),y5(),Cr(),Dr(30,Yi,5,3,`div`,9),Cr()(),Ar(31,`section`,20),So(32,`simple-table`,21),BD(33,`translate`),BD(34,`translate`),BD(35,`translate`),BD(36,`translate`),So(37,`div`,22),Aa(38,Qi,5,2,`ng-template`,null,0,c6)(40,Ji,3,0,`ng-template`,null,1,c6)(42,Zi,3,3,`ng-template`,null,2,c6)(44,Ki,9,6,`ng-template`,null,3,c6),Cr()()()}if(t&2){let s=d4(39),_=d4(41),w=d4(43),ae=d4(45);Ut(7),To(` `,s6(8,13,`APP.CONCIERGE.CONTACTS_HEADER`),` `),Ut(6),S1(`ngModel`,i.search),Ku(`placeholder`,s6(14,15,`APP.CONCIERGE.CONTACTS_FILTER`)),v5(),Ut(6),To(` `,s6(20,17,`APP.CONCIERGE.CONTACTS_ADD`),` `),Ut(4),S1(`ngModel`,i.role_filter),Ku(`placeholder`,s6(24,19,`APP.CONCIERGE.CONTACTS_ROLES_ALL`)),v5(),Ut(3),g1(s6(27,21,`APP.CONCIERGE.CONTACTS_ROLES_ALL`)),Ut(2),Q8(i.roles()),Ut(2),Rr(i.can_manage_roles()?30:-1),Ut(2),Ku(`data`,i.filtered_contacts())(`filter`,i.search())(`empty_message`,s6(33,23,i.search()?`APP.CONCIERGE.CONTACTS_SEARCH_EMPTY`:`APP.CONCIERGE.CONTACTS_EMPTY`))(`columns`,Q4(42,Wi,K4(31,Gi,s6(34,25,`COMMON.PERSON`),s),K4(34,qi,s6(35,27,`APP.CONCIERGE.CONTACTS_ROLES`),_),K4(37,ji,s6(36,29,`RESOURCE.LEVEL`),w),q4(40,Ui,ae)))(`sortable`,!0)}},dependencies:[gm,Dw,VXe,Yt,mt,Ne,Wt,qn,$r,$t,jt,hW,fd,pd,Wb,Ab,QRe,lU,zRe,mZ,f,f$1],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--%NS%base-100)}
/*# sourceMappingURL=emergency-contacts.component.css.map */`]})}}return n})();var ne=(()=>{class n extends Gi$1{constructor(){super(),this._org=g(Yb),this._onsite={},this._events={},this._users=N([]),this._poll=N(0),this.loading=N(!1),this.filters=N({}),this.search=N(``),this.user_events=N({}),this.filtered_users=Ae(()=>{let e=this.search(),t=this._users(),i=this.filters();return t.filter(s=>(!e||s.name.toLowerCase().includes(e)||s.email.toLowerCase().includes(e))&&(!i.only_onsite||this._onsite[s.email]))}),this.loadUsers(),St(()=>{this._org.active_building(),this._poll(),this.timeout(`load-events`,()=>this._loadEvents(),300)})}setFilters(e){this.filters.set(l(l({},this.filters()),e))}setSearchString(e){this.search.set(e)}startPolling(e=3*Ga){let t=Math.max(e,3*Ga);this._poll.update(i=>i+1),this.interval(`poll`,()=>this._poll.update(i=>i+1),t)}stopPolling(){this.clearInterval(`poll`)}async checkin(e){let t=await me({booking_start:Math.floor(new Date().valueOf()/1e3),booking_end:Math.floor(li(new Date).valueOf()/1e3),asset_id:e.email,title:`Checked-in Onsite`,description:this._org.building.display_name||this._org.building.name,zones:[this._org.building.id],booking_type:`staff`});await ee(t.id,!0),this._events[e.email]=t,this._onsite[e.email]=!0}async checkout(e){let t=this._events[e.email];if(t){let i=await me(m(l({},t.toJSON()),{booking_end:Math.floor(new Date().valueOf()/1e3)}));await ee(i.id,!1),this._events[e.email]=i,this._onsite[e.email]=!1}}async _loadEvents(){this.loading.set(!0);let e=await S({period_start:Dn(cn$1(Date.now())),period_end:Dn(li(Date.now())),type:`staff`}),t={},i=new Date().valueOf();for(let s of e)exe(i,i,s.date,s.date+s.duration*60*1e3)&&(t[s.asset_id]=s.checked_in,this._events[s.asset_id]=s);this._onsite=t,this.user_events.set(t),this.loading.set(!1)}async loadUsers(){let e=await R(``);e.sort((t,i)=>t.name.localeCompare(i.name)),this._users.set(e)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=x({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();function en(n,l){n&1&&(Ar(0,`div`,5),Ra(1),BD(2,`translate`),Cr()),n&2&&(Ut(),To(` `,s6(2,1,`APP.CONCIERGE.DIRECTORY_ONSITE`),` `))}function tn(n,l){if(n&1){let e=UD();Ar(0,`div`,0),So(1,`a-user-avatar`,1),Ar(2,`div`,2)(3,`div`,3),Ra(4),Cr(),Ar(5,`div`,4),Ra(6),Cr()(),Dr(7,en,3,3,`div`,5),Ar(8,`div`,6)(9,`action-icon`,7),BD(10,`translate`),Bt(`click`,function(){I_(e);let i=Vi$1();return A_(i.onsite()?i.checkout():i.checkin())}),Cr(),Ar(11,`a`,8),BD(12,`translate`),Ar(13,`icon`),Ra(14,`email`),Cr()(),Ar(15,`a`,8),BD(16,`translate`),Ar(17,`icon`),Ra(18,`call`),Cr()()()()}if(n&2){let e=Vi$1();Ut(),Ku(`user`,e.user()),Ut(3),g1(e.user()?.name),Ut(2),To(` `,e.user()?.email,` `),Ut(),Rr(e.onsite()?7:-1),Ut(2),Ku(`matTooltip`,s6(10,13,e.onsite()?`COMMON.CHECK_IN`:`COMMON.CHECK_OUT`))(`loading`,e.loading())(`content`,e.onsite()?`event_busy`:`event_available`),Ut(2),Ku(`matTooltip`,s6(12,15,`APP.CONCIERGE.DIRECTORY_EMAIL`))(`href`,`mailto:`+e.user()?.email,dE),Kt(`disabled`,!e.user()?.email),Ut(4),Ku(`matTooltip`,s6(16,17,`APP.CONCIERGE.DIRECTORY_PHONE`))(`href`,`tel:`+e.user()?.phone,dE),Kt(`disabled`,!e.user()?.phone)}}var ui=(()=>{class n{constructor(){this._state=g(ne),this.user=bs(void 0),this.onsite=bs(void 0),this.loading=N(!1),this.checkin=async()=>{this.loading.set(!0),await this._state.checkin(this.user()).catch(e=>IB(Zn(`APP.CONCIERGE.DIRECTORY_CHECKIN_ERROR`,{error:e}))),this.loading.set(!1)},this.checkout=async()=>{this.loading.set(!0),await this._state.checkout(this.user()).catch(e=>Zn(`APP.CONCIERGE.DIRECTORY_CHECKOUT_ERROR`,{error:e})),this.loading.set(!1)}}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`staff-details`]],inputs:{user:[1,`user`],onsite:[1,`onsite`]},decls:1,vars:1,consts:[[`details`,``,1,`border-base-200`,`bg-base-100`,`flex`,`w-full`,`items-center`,`border-b`,`px-4`,`py-2`,`hover:opacity-80`],[3,`user`],[1,`flex`,`flex-1`,`flex-col`],[1,`px-2`],[1,`text-opacity-50`,`px-2`,`text-xs`],[1,`px-4`,`text-xs`,`opacity-50`],[1,`flex`,`items-center`],[3,`click`,`matTooltip`,`loading`,`content`],[`icon`,``,`matRipple`,``,3,`matTooltip`,`href`]],template:function(t,i){t&1&&Dr(0,tn,19,19,`div`,0),t&2&&Rr(i.user()?0:-1)},dependencies:[Mn,ci,VXe,Yt,mt,f],encapsulation:2})}}return n})();var an=[`container`];function on(n,l){if(n&1){let e=UD();Ar(0,`div`,6),Bt(`click`,function(){let i=I_(e).$implicit;return A_(Vi$1().scrollTo(i))}),Ra(1),Cr()}if(n&2){let e=l.$implicit,t=Vi$1();gt(`disabled`,t.user_list()[e].length<=0)(`active`,e===t.active_group()),Ut(),To(` `,e,` `)}}function rn(n,l){if(n&1&&So(0,`staff-details`,8),n&2){let e=l.$implicit,t=l.$index,i=Vi$1(2).$implicit,s=Vi$1(2);Ku(`id`,`letter-`+i+`-`+t)(`user`,e)(`onsite`,s.events()?s.events()[e.email]:!1)}}function sn(n,l){if(n&1&&(Ar(0,`div`,7),Ra(1),Cr(),Z8(2,rn,1,3,`staff-details`,8,K8)),n&2){let e=Vi$1().$implicit,t=Vi$1(2);Ku(`id`,`letter-`+(e===`#`?`0`:e)),Ut(),To(` `,e,` `),Ut(),Q8(t.user_list()[e])}}function ln(n,l){if(n&1&&Dr(0,sn,4,2),n&2){let e=l.$implicit;Rr(Vi$1(2).user_list()[e].length?0:-1)}}function cn(n,l){if(n&1&&Z8(0,ln,1,1,null,null,K8),n&2)Q8(Vi$1().groups)}function dn(n,l){n&1&&(Ar(0,`div`,4)(1,`p`),Ra(2),BD(3,`translate`),Cr()()),n&2&&(Ut(2),To(` `,s6(3,1,`APP.CONCIERGE.DIRECTORY_SEARCH_EMPTY`),` `))}function mn(n,l){n&1&&So(0,`mat-progress-bar`,5)}var qe=`#abcdefghijklmnopqrstuvwxyz`.split(``);var fi=(()=>{class n extends Gi$1{constructor(){super(),this._state=g(ne),this.active_group=N(`#`),this.groups=qe,this.events=this._state.user_events,this.loading=this._state.loading,this.filtered_users=this._state.filtered_users,this.user_count=Ae(()=>this.filtered_users().length),this.user_list=Ae(()=>{let e=this.filtered_users()||[],t={};for(let i of qe)t[i]=e.filter(s=>s.name.toLowerCase()[0].startsWith(i)||i===`#`&&!qe.includes(s.name.toLowerCase()[0]));return t}),this._el=KIe(`container`),St(e=>{this.user_list(),this.timeout(`scroll`,()=>this.onScroll({}),30),e(()=>this.clearTimeout(`scroll`))})}onScroll(e){let t=this._el();if(!t)return;let i=t.nativeElement.scrollTop;for(let s of qe){let _=document.querySelector(`#letter-${s===`#`?`0`:s}`);if(_){if(_.offsetTop-i>0)break;this.active_group.set(s)}}}scrollTo(e){let t=document.querySelector(`#letter-${e}-0`);t&&(t.scrollIntoView({behavior:`smooth`,block:`center`}),this.active_group.set(e))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`staff-listings`]],viewQuery:function(t,i){t&1&&r1(i._el,an,5),t&2&&u4()},features:[Ce],decls:8,vars:2,consts:[[`container`,``],[1,`flex`,`w-full`,`items-center`,`justify-center`,`p-2`],[`letter`,``,1,`flex`,`h-6`,`w-6`,`cursor-pointer`,`items-center`,`justify-center`,`text-xs`,`capitalize`,3,`disabled`,`active`],[1,`relative`,`w-full`,`flex-1`,`overflow-auto`,2,`height`,`50%`,3,`scroll`],[1,`absolute`,`inset-0`,`flex`,`flex-col`,`items-center`,`justify-center`],[`mode`,`indeterminate`],[`letter`,``,1,`flex`,`h-6`,`w-6`,`cursor-pointer`,`items-center`,`justify-center`,`text-xs`,`capitalize`,3,`click`],[`group`,``,1,`border-base-300`,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`rounded-lg`,`border`,`text-sm`,`font-medium`,`capitalize`,3,`id`],[3,`id`,`user`,`onsite`]],template:function(t,i){t&1&&(Ar(0,`div`,1),Z8(1,on,2,5,`div`,2,K8),Cr(),Ar(3,`div`,3,0),Bt(`scroll`,function(_){return i.onScroll(_)}),Dr(5,cn,2,0)(6,dn,4,3,`div`,4),Cr(),Dr(7,mn,1,0,`mat-progress-bar`,5)),t&2&&(Ut(),Q8(i.groups),Ut(4),Rr(i.user_count()?5:6),Ut(2),Rr(i.loading()?7:-1))},dependencies:[Z,L,ui,f],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:50%}[letter][_ngcontent-%COMP%]{transition:font-size .2s,color .2s}[group][_ngcontent-%COMP%]{border-color:#ccc;padding:.5rem 1.65rem}.disabled[_ngcontent-%COMP%]{opacity:.2;pointer-events:none}.active[_ngcontent-%COMP%]{font-size:1.25rem;opacity:1;color:#d81b60}
/*# sourceMappingURL=staff-listing.component.css.map */`]})}}return n})();var pn=[`switch`];var gn=[`*`];function hn(n,l){n&1&&(Ar(0,`span`,11),Jx(),Ar(1,`svg`,13),So(2,`path`,14),Cr(),Ar(3,`svg`,15),So(4,`path`,16),Cr()())}var _n=new b(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var je=class{source;checked;constructor(l,e){this.source=l,this.checked=e}};var nt=(()=>{class n{_elementRef=g(ue);_focusMonitor=g(jd);_changeDetectorRef=g(Zt);defaults=g(_n);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new je(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=gr();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new fe;toggleChange=new fe;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){g(mr).load(wv);let e=g(new xE(`tabindex`),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||`accent`,this.id=this._uniqueId=g(Fr).getId(`mat-mdc-slide-toggle-`),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new je(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(t){return new(t||n)};static ɵcmp=Ue({type:n,selectors:[[`mat-slide-toggle`]],viewQuery:function(t,i){if(t&1&&bo(pn,5),t&2){let s;ti(s=ni())&&(i._switchElement=s.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(t,i){t&2&&(Da(`id`,i.id),Kt(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),Fp(i.color?`mat-`+i.color:``),gt(`mat-mdc-slide-toggle-focused`,i._focused)(`mat-mdc-slide-toggle-checked`,i.checked)(`mat-slide-toggle-full-width`,i.fullWidth)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,qe$1],color:`color`,disabled:[2,`disabled`,`disabled`,qe$1],fullWidth:[2,`fullWidth`,`fullWidth`,qe$1],disableRipple:[2,`disableRipple`,`disableRipple`,qe$1],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:dR(e)],checked:[2,`checked`,`checked`,qe$1],hideIcon:[2,`hideIcon`,`hideIcon`,qe$1],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,qe$1]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[Ht([{provide:qc,useExisting:Pt(()=>n),multi:!0},{provide:Oa,useExisting:n,multi:!0}]),Ct],ngContentSelectors:gn,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(t,i){if(t&1&&(ei(),Ar(0,`div`,1)(1,`button`,2,0),Bt(`click`,function(){return i._handleClick()}),So(3,`div`,3)(4,`span`,4),Ar(5,`span`,5)(6,`span`,6)(7,`span`,7),So(8,`span`,8),Cr(),Ar(9,`span`,9),So(10,`span`,10),Cr(),Dr(11,hn,5,0,`span`,11),Cr()()(),Ar(12,`label`,12),Bt(`click`,function(_){return _.stopPropagation()}),Tn(13),Cr()()),t&2){let s=d4(2);Ku(`labelPosition`,i.labelPosition),Ut(),gt(`mdc-switch--selected`,i.checked)(`mdc-switch--unselected`,!i.checked)(`mdc-switch--checked`,i.checked)(`mdc-switch--disabled`,i.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,i.disabledInteractive),Ku(`tabIndex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex)(`disabled`,i.disabled&&!i.disabledInteractive),Kt(`id`,i.buttonId)(`name`,i.name)(`aria-label`,i.ariaLabel)(`aria-labelledby`,i._getAriaLabelledBy())(`aria-describedby`,i.ariaDescribedby)(`aria-required`,i.required||null)(`aria-checked`,i.checked)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null),Ut(9),Ku(`matRippleTrigger`,s)(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleCentered`,!0),Ut(),Rr(i.hideIcon?-1:11),Ut(),Ku(`for`,i.buttonId),Kt(`id`,i._labelId)}},dependencies:[Dw,DXe],styles:[`.mdc-switch {
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
`],encapsulation:2})}return n})();var vi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Ie({type:n});static ɵinj=Ee({imports:[nt,_n$1]})}return n})();var fn=(n,l)=>l.id;function vn(n,l){if(n&1&&(Ar(0,`mat-option`,3),Ra(1),Cr()),n&2){let e=l.$implicit;Ku(`value`,e.id),Ut(),To(` `,e.display_name||e.name,` `)}}var bi=(()=>{class n extends Gi$1{constructor(){super(),this._state=g(ne),this._org=g(Yb),this._route=g(hi$1),this._router=g(gn$1),this.zones=N([]),this.levels=N([]),this.filters=N({}),this.setDate=e=>this._state.setFilters({date:e}),this.setFilters=e=>this._state.setFilters(e),this.setSearch=e=>this._state.setSearchString(e),this.updateZones=e=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:e.join(`,`)},queryParamsHandling:`merge`}),this._state.setFilters({zones:e})},St(()=>{this.filters.set(this._state.filters()||{})}),St(()=>{let e=this._org.active_levels()||[];$(()=>{this.levels.set(e);let t=this.zones().filter(i=>e.find(s=>s.id===i));!t.length&&e.length&&t.push(e[0].id),this.zones.set(t),this.updateZones(t)})})}async ngOnInit(){await this._org.waitUntilInitialised(),this.subscription(`route.query`,this._route.queryParamMap.subscribe(e=>{if(e.has(`zone_ids`)){let t=e.get(`zone_ids`).split(`,`);if(t.length){let i=this._org.levelWithID(t);if(!i)return;this._org.building=this._org.buildings.find(s=>s.id===i.parent_id),this.zones.set(t)}}})),this.setSearch(``)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`staff-topbar`]],features:[Ce],decls:12,vars:8,consts:[[1,`border-base-200`,`bg-base-100`,`flex`,`items-center`,`space-x-4`,`border-b`,`p-4`],[`appearance`,`outline`,1,`no-subscript`,`w-48`],[`multiple`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[3,`value`],[1,`m-2`,3,`ngModelChange`,`ngModel`],[1,`text-xs`],[1,`w-2`,`flex-1`],[1,`mr-2`,3,`modelChange`]],template:function(t,i){t&1&&(Ar(0,`div`,0)(1,`mat-form-field`,1)(2,`mat-select`,2),BD(3,`translate`),v1(`ngModelChange`,function(_){return V4(i.zones,_)||(i.zones=_),_}),Bt(`ngModelChange`,function(_){return i.updateZones(_)}),Z8(4,vn,2,2,`mat-option`,3,fn),Cr(),y5(),Cr(),Ar(6,`mat-slide-toggle`,4),Bt(`ngModelChange`,function(_){return i.setFilters({only_onsite:_})}),Ar(7,`div`,5),Ra(8),BD(9,`translate`),Cr()(),y5(),So(10,`div`,6),Ar(11,`searchbar`,7),Bt(`modelChange`,function(_){return i.setSearch(_)}),Cr()()),t&2&&(Ut(2),S1(`ngModel`,i.zones),Ku(`placeholder`,s6(3,4,`COMMON.LEVEL_ALL`)),v5(),Ut(2),Q8(i.levels()),Ut(2),Ku(`ngModel`,i.filters()?.only_onsite),v5(),Ut(2),To(` `,s6(9,6,`APP.CONCIERGE.DIRECTORY_ONSITE_ONLY`),` `))},dependencies:[vi,nt,z,Wt,qn,$t,jt,hW,QRe,zRe,mZ,f],styles:[`mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}
/*# sourceMappingURL=staff-topbar.component.css.map */`]})}}return n})();function bn(n,l){n&1&&So(0,`mat-progress-bar`,4)}var Oo=[{path:``,component:(()=>{class n{constructor(){this._state=g(ne),this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[``,`app-new-staff`,``]],decls:7,vars:1,consts:[[1,`flex`,`h-px`,`flex-1`],[1,`flex`,`h-full`,`w-1/2`,`flex-1`,`flex-col`],[1,`w-full`],[1,`h-0`,`w-full`,`flex-1`],[`mode`,`indeterminate`,1,`w-full`]],template:function(t,i){t&1&&(So(0,`app-topbar`),Ar(1,`div`,0),So(2,`app-sidebar`),Ar(3,`main`,1),So(4,`staff-topbar`,2)(5,`staff-listings`,3),Dr(6,bn,1,0,`mat-progress-bar`,4),Cr()()),t&2&&(Ut(6),Rr(i.loading()?6:-1))},dependencies:[Z,L,Wb,Ab,bi,fi],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--%NS%base-100)}
/*# sourceMappingURL=staff.component.css.map */`]})}}return n})(),title:`Staff`},{path:`emergency-contacts`,component:_i,title:`Emergency Contacts`}];export{Oo as ROUTES};
//# debugId=904e3c9d-56e9-5575-a541-d0a8c67953df
//# sourceMappingURL=staff.routes-D0amS_1t.js.map