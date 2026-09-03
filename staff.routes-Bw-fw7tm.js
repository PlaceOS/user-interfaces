import{$i as Ve,$r as Q6,$s as ike,Au as vn,Bc as lo,Bn as Kfe,Cc as kee,Cd as l,Ct as FLe,D as Ay,Di as Srt,Dr as Nit,Ds as gnt,E as Ax,El as q9,En as Jt,Fi as Tt,Gl as rnt,Gt,Hi as Ue,Hl as rit,Hn as Kl,J as Cn,Ji as V9,Jt as H2,K as Ci,Lu as we$1,Mn as K9,Nl as qn,Ns as hJe,Oa as Xxe,Oc as kn,Or as O,Os as gp,Ot as Fe,Pa as YT,Pi as Tr,Pl as qo,Po as bt,Pr as Oe,Qo as dde,Qr as Pn,R as C,Ri as UC,Rn as KW,Sc as ke,Sl as pH,Sr as NW,Tc as kj,Va as Z6,Vc as m,Vn as Kit,Vu as wt,Wn as Ko,Wr as PLe,Wt as Gs,Xt as HC,Ya as Zl,Yr as Pit,Z as DE,Zs as iit,_d as zS,_l as oe,ai as Qn,al as nn$1,an as Ht,au as tf,b as Ae,bn as Je,ca as W9,cd as yu,co as _u,cu as tke,dd as z4,dn as Ie,ed as y0,ei as Q9,en as HS,f as A1e,fa as WT,fc as je,fd as zA,fs as en$1,gi as S,gn as J6,go as ae,hi as Rt,ht as Ee,id as ye,io as _m,ja as YF,kn as Jxe,ko as bi,ks as gu,ku as vm,la as WF,li as R,mi as Rn,ms as fJe,mt as Ed,nc as is,nl as ni,nr as Ln,oo as _p,or as ME,pi as Ri$1,pu as uE,qc as mu,qn as L,qr as Pe,ra as Vo,sa as W4,sc as jLe,st as Dy,su as tj,t as $,tn as HT,vd as ze,vo as al,vs as fe,wd as m$1,ws as gfe,xa as X6,xd as zue,yo as an$1,zc as lm,zl as re,zn as Ke}from"./chunk-CBNakCD-.js";import{c as L$1,l as Z}from"./main.js";import{_ as Xt,g as Wn,l as Lv,m as Qt,r as Ct,s as Iv,y as Zt}from"./chunk-BUWUhSJh.js";import{t as f}from"./chunk-CvATgEGC.js";import{t as re$1}from"./chunk-Bc-Z6Gr_.js";import{t as Ne}from"./chunk-DCoeeQnd.js";import{g as me,m as j,u as ee}from"./chunk-gh8GppDk.js";import{a as Ge$1,d as Se,f as Ue$1,g as xe}from"./chunk-Dbcn8WfQ.js";import{t as z}from"./chunk-ChxFg64Q.js";import"./chunk-EimWKIK-.js";import{n as R$1}from"./chunk-BRKoPd0e2.js";import{t as Ft}from"./chunk-B3kWq4hl2.js";var yi=[`*`];function wi(n,l){if(n&1&&(ke(0,`div`)(1,`icon`),bi(2),Ve()()),n&2){let e=Tt();Gs(`state center `+e.state()),fe(2),Vo(` `,e.state()===`success`?`done`:`close`,` `)}}function Si(n,l){n&1&&(ke(0,`div`,3),Ht(1,`mat-spinner`,4),Ve()),n&2&&(fe(),Cn(`diameter`,16))}var li=(()=>{class n{constructor(){this.icon=en$1(void 0),this.className=en$1(`material-symbols-rounded`),this.content=en$1(void 0),this.loading=en$1(void 0),this.disabled=en$1(void 0),this.state=en$1(``)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=ye({type:n,selectors:[[`action-icon`]],inputs:{icon:[1,`icon`],className:[1,`className`],content:[1,`content`],loading:[1,`loading`],disabled:[1,`disabled`],state:[1,`state`]},ngContentSelectors:yi,decls:6,vars:8,consts:[[`icon`,``,`matRipple`,``,`title`,``,1,`relative`,3,`disabled`],[`root`,``,3,`className`,`icon`],[3,`class`],[1,`loader`,`center`],[3,`diameter`]],template:function(t,i){t&1&&(Jt(),ke(0,`button`,0)(1,`icon`,1),bi(2),Pe(3),Ve(),Fe(4,wi,3,3,`div`,2),Fe(5,Si,2,1,`div`,3),Ve()),t&2&&(Oe(`success`,i.state()===`success`),Cn(`disabled`,i.loading()||i.disabled()),fe(),Cn(`className`,i.className())(`icon`,i.icon()),fe(),Vo(` `,i.content(),` `),fe(2),Ue(!i.loading()&&i.state()?4:-1),fe(),Ue(i.loading()?5:-1))},dependencies:[Zl,y0,Ct,Xt,gnt],styles:[`.action-icon.fade[_ngcontent-%COMP%] > icon[_ngcontent-%COMP%]{opacity:.35}.success[_ngcontent-%COMP%]{pointer-events:none}.success[_ngcontent-%COMP%]   icon[root][_ngcontent-%COMP%]{opacity:.2}.state.success[_ngcontent-%COMP%]{color:#388e3c}.state.error[_ngcontent-%COMP%]{color:#e53935}
/*# sourceMappingURL=action-icon.component.css.map */`]})}}return n})();var Be=`_EMERGENCY_CONTACTS_`;var we=(()=>{class n{constructor(){this._org=m(HT),this._change=C(Date.now()),this.category=C(null),this.asset_type=C(null),this.contacts=C([]),this.roles=C([]),Je(()=>{let e=this._org.active_building();this._change(),e&&this._load(e)}),this.ensureCategoryAndTypeExist()}async _load(e){let t=await this._queryCategory(e);this.category.set(t),this.roles.set(this._rolesFromCategory(t));let i=await this._queryAssetType(e,t);this.asset_type.set(i);let s=await this._queryContacts(e,i);this.contacts.set(s)}async _queryCategory(e){try{let{data:t}=await jLe({zone_id:e.id});return t.find(i=>i.name===Be)||null}catch{return null}}async _queryAssetType(e,t){if(!t)return null;try{let{data:i}=await FLe({zone_id:e.id,q:t.name});return i.find(s=>s.name===Be&&s.category_id===t.id)||null}catch{return null}}async _queryContacts(e,t){if(!t)return[];try{let{data:i}=await xe({zone_id:e.id,type_id:t.id,limit:200});return i.filter(s=>s.asset_type_id===t.id).map(s=>this.assetToContact(s))}catch{return[]}}_rolesFromCategory(e){if(!e?.description)return[];try{return JSON.parse(e.description).roles||[]}catch{return[]}}async _queryLegacyMetadata(e){try{let{details:t}=await tf(e.id,`emergency_contacts`);return t||{contacts:[],roles:[]}}catch{return{contacts:[],roles:[]}}}async ensureCategoryExists(){await this._org.waitUntilInitialised();let e=this._org.building;if(!e)return null;let t=await this._queryCategory(e);if(t)return t;try{let i=await Se(vm(new _m({name:Be,description:JSON.stringify({roles:[]}),hidden:!0}),[0,void 0,``,null]));return this._change.set(Date.now()),i}catch(i){return console.error(`Failed to create emergency contacts category:`,i),null}}async ensureAssetTypeExists(e){let t=this._org.building;if(!t||!e)return null;let i=await this._queryAssetType(t,e);if(i)return i;try{let s=await Ue$1({name:Be,category_id:e.id,zone_id:t.id,brand:`PlaceOS`,description:`Emergency contacts for the building`});return this._change.set(Date.now()),s}catch(s){return console.error(`Failed to create emergency contacts asset type:`,s),null}}async ensureCategoryAndTypeExist(){let e=await this.ensureCategoryExists();return e?this.ensureAssetTypeExists(e):null}async migrateFromMetadata(){let e=this._org.building;if(!e)return!1;try{let t=await this._queryLegacyMetadata(e);if(!t?.contacts?.length&&!t?.roles?.length)return!0;let i=await this.ensureCategoryAndTypeExist();if(!i)throw new Error(`Failed to create or find asset type`);let s=await this._queryCategory(e);if(!s)throw new Error(`Failed to find category`);t.roles?.length&&await Se(vm(new _m(m$1(l({},s),{hidden:!0,description:JSON.stringify({roles:t.roles})})),[0,null,void 0,``]));for(let g of t.contacts||[])await Ge$1(this.contactToAsset(g,i.id));return await H2(e.id,{name:`emergency_contacts`,description:`Emergency Contacts (migrated to Assets)`,details:{contacts:[],roles:[],migrated:!0}}),this._change.set(Date.now()),HS(Tr(`APP.CONCIERGE.CONTACTS_MIGRATION_SUCCESS`)||`Successfully migrated emergency contacts.`),!0}catch(t){return tj(Tr(`APP.CONCIERGE.CONTACTS_MIGRATION_ERROR`,{error:t})||`Failed to migrate emergency contacts: ${t}`),!1}}async needsMigration(){let e=this._org.building;if(!e)return!1;let t=await this._queryLegacyMetadata(e);return t&&(t.contacts?.length>0||t.roles?.length>0)?!t.migrated:!1}async saveContact(e){try{let t=this.asset_type();if(t||(t=await this.ensureCategoryAndTypeExist()),!t)throw new Error(`Failed to create or find asset type`);return await Ge$1(this.contactToAsset(e,t.id)),this._change.set(Date.now()),HS(Tr(`APP.CONCIERGE.CONTACTS_SAVE_SUCCESS`)),!0}catch(t){return tj(Tr(`APP.CONCIERGE.CONTACTS_SAVE_ERROR`,{error:t})),!1}}async deleteContact(e){try{return await PLe(e),this._change.set(Date.now()),HS(Tr(`APP.CONCIERGE.CONTACTS_DELETE_SUCCESS`)||`Successfully removed emergency contact.`),!0}catch(t){return tj(Tr(`APP.CONCIERGE.CONTACTS_DELETE_ERROR`,{error:t})||`Failed to remove emergency contact: ${t}`),!1}}async updateRoles(e){try{let t=this.category();if(t||(t=await this.ensureCategoryExists()),!t)throw new Error(`Failed to create or find category`);return await Se(new _m(m$1(l({},t),{description:JSON.stringify({roles:e})}))),this._change.set(Date.now()),!0}catch(t){return tj(`Failed to update roles: ${t}`),!1}}async addRole(e){let t=this.roles();return t.includes(e)?!0:this.updateRoles([...t,e].filter(Boolean).sort((i,s)=>i.localeCompare(s)))}async removeRole(e){try{let t=this.roles(),i=this.contacts(),s=t.filter(g=>g!==e);await this.updateRoles(s);for(let g of i)if(g.roles.includes(e)){let C=m$1(l({},g),{roles:g.roles.filter(ne=>ne!==e)});await this.saveContact(C)}return!0}catch(t){return tj(`Failed to remove role: ${t}`),!1}}async renameRole(e,t){try{let i=this.roles(),s=this.contacts(),g=i.map(C=>C===e?t:C).filter(Boolean).sort((C,ne)=>C.localeCompare(ne));await this.updateRoles(g);for(let C of s)if(C.roles.includes(e)){let ne=m$1(l({},C),{roles:C.roles.map(nt=>nt===e?t:nt)});await this.saveContact(ne)}return!0}catch(i){return tj(`Failed to rename role: ${i}`),!1}}refresh(){this._change.set(Date.now())}assetToContact(e){let t=e.other_data,i=this._org.levelWithID(e.zones);return{id:e.id,name:e.identifier||``,email:t?.email||``,phone:t?.phone||``,roles:t?.roles||[],zone:i?.id||``}}contactToAsset(e,t){let i=e.zone?this._org.levelWithID([e.zone]):null;return{id:e.id?.startsWith(`contact-`)?void 0:e.id,asset_type_id:t,identifier:e.name,other_data:{email:e.email,phone:e.phone,roles:e.roles},zone_id:this._org.building.id,zones:ni([this._org.organisation.id,this._org.region?.id,this._org.building.id,i?.id].filter(s=>s))}}generateContactId(){return`contact-${zS(8)}`}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=L({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();var Ei=()=>({standalone:!0});var xi=(n,l)=>l.id;function Mi(n,l){n&1&&(ke(0,`button`,3)(1,`icon`),bi(2,`close`),Ve()())}function Ti(n,l){if(n&1&&(ke(0,`mat-option`,20),bi(1),Ve()),n&2){let e=l.$implicit;Cn(`value`,e.id),fe(),Vo(` `,e.display_name||e.name,` `)}}function ki(n,l){if(n&1&&(ke(0,`mat-option`,20),bi(1),Ve()),n&2){let e=Tt().$implicit;Cn(`value`,e),fe(),Vo(` `,e,` `)}}function Ri(n,l){if(n&1&&Fe(0,ki,2,2,`mat-option`,20),n&2){let e=l.$implicit;Ue(e?0:-1)}}function Ii(n,l){if(n&1){let e=UC();ke(0,`main`,4)(1,`form`)(2,`a-user-search-field`,7),je(`ngModelChange`,function(i){Ay(e);return Dy(Tt().setUser(i))}),Ve(),z4(),ke(3,`div`,8)(4,`label`,9),bi(5),gp(6,`translate`),Ve(),ke(7,`mat-form-field`,10),Ht(8,`input`,11),z4(),Ve()(),ke(9,`div`,12)(10,`div`,13)(11,`label`,14),bi(12),gp(13,`translate`),Ve(),ke(14,`mat-form-field`,10),Ht(15,`input`,15),gp(16,`translate`),z4(),Ve()(),ke(17,`div`,13)(18,`label`,14),bi(19),gp(20,`translate`),Ve(),ke(21,`mat-form-field`,10),Ht(22,`input`,16),gp(23,`translate`),z4(),Ve()()(),ke(24,`div`,8)(25,`label`,17),bi(26),gp(27,`translate`),Ve(),ke(28,`mat-form-field`,10)(29,`mat-select`,18),gp(30,`translate`),ke(31,`mat-option`,19),bi(32),gp(33,`translate`),Ve(),X6(34,Ti,2,2,`mat-option`,20,xi),Ve(),z4(),Ve()(),ke(36,`div`,8)(37,`label`,21),bi(38),gp(39,`translate`),Ve(),ke(40,`div`,12)(41,`mat-form-field`,22)(42,`mat-select`,23),gp(43,`translate`),X6(44,Ri,1,1,null,null,Z6),Ve(),z4(),Ve(),ke(46,`div`,24),gp(47,`translate`),ke(48,`button`,25)(49,`icon`),bi(50,`add`),Ve()()()()()()()}if(n&2){let e=Tt(),t=DE(9);fe(2),Cn(`ngModelOptions`,W9(40,Ei)),W4(),fe(3),_u(HC(6,18,`FORM.NAME`)),fe(3),Cn(`formField`,e.form.name),W4(),fe(4),_u(HC(13,20,`FORM.EMAIL`)),fe(3),Cn(`formField`,e.form.email)(`placeholder`,HC(16,22,`FORM.EMAIL`)),W4(),fe(4),_u(HC(20,24,`FORM.PHONE`)),fe(3),Cn(`formField`,e.form.phone)(`placeholder`,HC(23,26,`APP.CONCIERGE.CONTACTS_PHONE_PLACEHOLDER`)),W4(),fe(4),_u(HC(27,28,`RESOURCE.LEVEL`)),fe(3),Cn(`formField`,e.form.zone)(`placeholder`,HC(30,30,`COMMON.LEVEL_SELECT`)),W4(),fe(3),_u(HC(33,32,`COMMON.LEVEL_ANY`)),fe(2),J6(e.levels()),fe(4),_u(HC(39,34,`APP.CONCIERGE.CONTACTS_ROLES`)),fe(4),Cn(`formField`,e.form.roles)(`placeholder`,HC(43,36,`APP.CONCIERGE.CONTACTS_ROLES_SELECT`)),W4(),fe(2),J6(e.roles()),fe(2),Cn(`matTooltip`,HC(47,38,`APP.CONCIERGE.CONTACTS_ROLES_ADD`)),fe(2),Cn(`content`,t)}}function Oi(n,l){n&1&&(ke(0,`main`,5),Ht(1,`mat-spinner`,26),ke(2,`p`),bi(3),gp(4,`translate`),Ve()()),n&2&&(fe(),Cn(`diameter`,48),fe(2),_u(HC(4,2,`APP.CONCIERGE.CONTACTS_SAVING`)))}function Ai(n,l){if(n&1){let e=UC();ke(0,`footer`,6)(1,`button`,27),je(`click`,function(){Ay(e);return Dy(Tt().save())}),bi(2),gp(3,`translate`),Ve()()}n&2&&(fe(2),Vo(` `,HC(3,1,`COMMON.SAVE`),` `))}function Pi(n,l){if(n&1){let e=UC();ke(0,`div`,28)(1,`mat-form-field`,10)(2,`input`,29),gp(3,`translate`),WF(`ngModelChange`,function(i){Ay(e);let s=Tt();return V9(s.role_name,i)||(s.role_name=i),Dy(i)}),Ve(),z4(),Ve(),ke(4,`button`,30),je(`click`,function(){Ay(e);return Dy(Tt().addRole())}),bi(5),gp(6,`translate`),Ve()()}if(n&2){let e=Tt();fe(2),YF(`ngModel`,e.role_name),Cn(`placeholder`,HC(3,3,`APP.CONCIERGE.CONTACTS_ROLES_NAME`)),W4(),fe(3),Vo(` `,HC(6,5,`APP.CONCIERGE.CONTACTS_ROLES_SAVE`),` `)}}var pi=(()=>{class n{constructor(){this._data=m(dde),this._dialog_ref=m(YT),this._org=m(HT),this._contacts_service=m(we),this.loading=C(!1),this.role_name=C(``),this.contact=this._data,this.roles=this._contacts_service.roles,this.model=C({id:this._data?.id||this._contacts_service.generateContactId(),name:this._data?.name||``,email:this._data?.email||``,phone:this._data?.phone||``,zone:this._data?.zone||``,roles:this._data?.roles||[]}),this.form=gfe(this.model),this.levels=this._org.active_levels,this._tooltip=al(Kit)}async addRole(){let e=this.role_name().trim();e&&(this._tooltip().close(),this.loading.set(!0),this._dialog_ref.disableClose=!0,await this._contacts_service.addRole(e),this.model.update(t=>m$1(l({},t),{roles:[...t.roles||[],e]})),this.role_name.set(``),this.loading.set(!1),this._dialog_ref.disableClose=!1)}setUser(e){this.model.update(t=>m$1(l({},t),{name:e?.name||``,email:e?.email||``,phone:e?.phone||``}))}async save(){this.loading.set(!0),this._dialog_ref.disableClose=!0;let e=this.model(),t={id:e.id,name:e.name,email:e.email,phone:e.phone,zone:e.zone,roles:e.roles||[]},i=await this._contacts_service.saveContact(t);this._dialog_ref.disableClose=!1,this.loading.set(!1),i&&this._dialog_ref.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=ye({type:n,selectors:[[`emergency-contact-modal`]],viewQuery:function(t,i){t&1&&mu(i._tooltip,Kit,5),t&2&&gu()},decls:10,vars:6,consts:[[`role_form`,``],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[1,`w-xl`,`p-4`],[`loading`,``,1,`flex`,`h-64`,`flex-col`,`items-center`,`justify-center`],[1,`border-base-200`,`flex`,`items-center`,`justify-end`,`border-t`,`px-4`,`py-2`],[`ngModel`,``,1,`mb-4`,3,`ngModelChange`,`ngModelOptions`],[1,`flex`,`flex-col`],[`for`,`name`],[`appearance`,`outline`],[`matInput`,``,`placeholder`,`Full name`,3,`formField`],[1,`flex`,`items-center`,`space-x-4`],[1,`flex`,`flex-1`,`flex-col`],[`for`,`email`],[`matInput`,``,`type`,`email`,3,`formField`,`placeholder`],[`matInput`,``,`type`,`tel`,3,`formField`,`placeholder`],[`for`,`zone`],[3,`formField`,`placeholder`],[`value`,``],[3,`value`],[`for`,`roles`],[`appearance`,`outline`,1,`no-subscript`,`flex-1`],[`multiple`,``,3,`formField`,`placeholder`],[3,`matTooltip`],[`icon`,``,`default`,``,`matRipple`,``,`customTooltip`,``,3,`content`],[1,`mb-4`,3,`diameter`],[`btn`,``,`matRipple`,``,1,`w-48`,3,`click`],[1,`bg-base-100`,`rounded-sm`,`p-4`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`]],template:function(t,i){t&1&&(ke(0,`header`,1)(1,`h2`,2),bi(2),gp(3,`translate`),Ve(),Fe(4,Mi,3,0,`button`,3),Ve(),Fe(5,Ii,51,41,`main`,4)(6,Oi,5,4,`main`,5),Fe(7,Ai,4,3,`footer`,6),qn(8,Pi,7,7,`ng-template`,null,0,_p)),t&2&&(fe(2),Vo(` `,HC(3,4,i.contact?`APP.CONCIERGE.CONTACTS_EDIT`:`APP.CONCIERGE.CONTACTS_NEW`),` `),fe(2),Ue(i.loading()?-1:4),fe(),Ue(i.loading()?6:5),fe(2),Ue(i.loading()?-1:7))},dependencies:[gnt,hJe,fJe,Ax,KW,iit,rit,Zt,Qt,NW,Zl,y0,ike,tke,pH,Xxe,Jxe,kee,lm,Srt,Ct,Xt,Kit,Ft,Nit,Kfe,Pit],encapsulation:2})}}return n})();var Di=(n,l)=>l+n;function Fi(n,l){n&1&&(ke(0,`button`,3)(1,`icon`),bi(2,`close`),Ve()())}function Li(n,l){if(n&1){let e=UC();ke(0,`div`,5)(1,`div`,10),bi(2),Ve(),ke(3,`button`,11),je(`click`,function(){let i=Ay(e).$implicit,s=Tt();return s.active.set(i),Dy(s.role_name.set(i))}),ke(4,`icon`),bi(5,`edit`),Ve()(),ke(6,`button`,12),je(`click`,function(){let i=Ay(e).$implicit;return Dy(Tt().removeRole(i))}),ke(7,`icon`),bi(8,`delete`),Ve()()()}if(n&2){let e=l.$implicit;Tt();let t=DE(16);fe(2),_u(e),fe(),Cn(`content`,t)}}function zi(n,l){if(n&1){let e=UC();ke(0,`div`,13)(1,`mat-form-field`,14)(2,`input`,15),gp(3,`translate`),WF(`ngModelChange`,function(i){Ay(e);let s=Tt();return V9(s.role_name,i)||(s.role_name=i),Dy(i)}),Ve(),z4(),Ve(),ke(4,`button`,16),je(`click`,function(){Ay(e);return Dy(Tt().updateRoles())}),bi(5),gp(6,`translate`),Ve()()}if(n&2){let e=Tt();fe(2),YF(`ngModel`,e.role_name),Cn(`placeholder`,HC(3,3,`APP.CONCIERGE.CONTACTS_ROLES_NAME`)),W4(),fe(3),Vo(` `,HC(6,5,`APP.CONCIERGE.CONTACTS_ROLES_SAVE`),` `)}}var hi=(()=>{class n{constructor(){this._dialog_ref=m(YT),this._contacts_service=m(we),this.active=C(``),this.role_name=C(``),this.loading=C(!1),this.roles=this._contacts_service.roles,this._tooltip=al(Kit)}async removeRole(e){e&&(this.loading.set(!0),this._dialog_ref.disableClose=!0,await this._contacts_service.removeRole(e),this.loading.set(!1),this._dialog_ref.disableClose=!1)}async updateRoles(){let e=this.role_name().trim();e&&(this.loading.set(!0),this._tooltip().close(),this._dialog_ref.disableClose=!0,this.active()?await this._contacts_service.renameRole(this.active(),e):await this._contacts_service.addRole(e),this.role_name.set(``),this.active.set(``),this.loading.set(!1),this._dialog_ref.disableClose=!1)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=ye({type:n,selectors:[[`role-management-modal`]],viewQuery:function(t,i){t&1&&mu(i._tooltip,Kit,5),t&2&&gu()},decls:17,vars:8,consts:[[`role_form`,``],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[1,`h-128`,`max-h-[65vh]`,`min-w-md`,`overflow-y-auto`],[1,`hover:bg-base-200:bg-base-300`,`border-base-200`,`m-2`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`border`,`p-2`],[1,`border-base-200`,`border-t`],[`btn`,``,`matRipple`,``,`customTooltip`,``,1,`m-2`,`flex`,`w-[calc(100%-1rem)]`,`items-center`,`justify-center`,`space-x-2`,3,`click`,`content`],[1,`truncate`,`pl-2`],[1,`text-2xl`],[1,`flex-1`,`truncate`,`px-2`],[`icon`,``,`matRipple`,``,`customTooltip`,``,1,`border-secondary`,`text-secondary`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`,`content`],[`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`],[1,`bg-base-100`,`rounded-sm`,`p-4`],[`appearance`,`outline`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`]],template:function(t,i){if(t&1){let s=UC();ke(0,`header`,1)(1,`h2`,2),bi(2),gp(3,`translate`),Ve(),Fe(4,Fi,3,0,`button`,3),Ve(),ke(5,`main`,4),X6(6,Li,9,2,`div`,5,Di),Ve(),ke(8,`footer`,6)(9,`button`,7),je(`click`,function(){return Ay(s),i.active.set(``),Dy(i.role_name.set(``))}),ke(10,`div`,8),bi(11),gp(12,`translate`),Ve(),ke(13,`icon`,9),bi(14,`add`),Ve()()(),qn(15,zi,7,7,`ng-template`,null,0,_p)}if(t&2){let s=DE(16);fe(2),Vo(` `,HC(3,4,`APP.CONCIERGE.CONTACTS_ROLES_MANAGE`),` `),fe(2),Ue(i.loading()?-1:4),fe(2),J6(i.roles()),fe(3),Cn(`content`,s),fe(2),Vo(` `,HC(12,6,`APP.CONCIERGE.CONTACTS_ROLES_ADD`),` `)}},dependencies:[ike,pH,Xxe,kee,hJe,fJe,Zl,y0,Ax,KW,iit,rit,gnt,Kit,Pit],encapsulation:2})}}return n})();var Vi=(n,l)=>({key:`name`,name:n,content:l});var Bi=(n,l)=>({key:`roles`,name:n,content:l,sortable:!1});var Gi=(n,l)=>({key:`zone`,name:n,content:l,sortable:!1});var qi=n=>({key:`actions`,name:` `,content:n,size:`6rem`,sortable:!1});var ji=(n,l,e,t)=>[n,l,e,t];var Ui=(n,l)=>l+n;function Wi(n,l){if(n&1&&(ke(0,`mat-option`,19),bi(1),Ve()),n&2){let e=l.$implicit;Cn(`value`,e),fe(),Vo(` `,e,` `)}}function $i(n,l){if(n&1){let e=UC();ke(0,`button`,24),je(`click`,function(){let i=Ay(e).row;return Dy(Tt().copyToClipboard(i.email))}),ke(1,`div`,25),bi(2),Ve(),ke(3,`div`,26),bi(4),Ve()()}if(n&2){let e=l.row;fe(2),_u(e.name),fe(2),Vo(` `,e.email,` `)}}function Hi(n,l){if(n&1&&(ke(0,`span`,28),bi(1),Ve()),n&2){let e=l.$implicit;fe(),Vo(` `,e,` `)}}function Yi(n,l){if(n&1&&(ke(0,`div`,27),X6(1,Hi,2,1,`span`,28,Q6),Ve()),n&2){let e=l.data;fe(),J6(e)}}function Qi(n,l){if(n&1&&(ke(0,`div`,29),bi(1),gp(2,`level`),Ve()),n&2){let e=l.data;fe(),Vo(` `,e?HC(2,1,e)?.display_name:`All`,` `)}}function Xi(n,l){if(n&1){let e=UC();ke(0,`div`,30)(1,`button`,20),gp(2,`translate`),je(`click`,function(){let i=Ay(e).row;return Dy(Tt().editContact(i))}),ke(3,`icon`),bi(4,`edit`),Ve()(),ke(5,`button`,31),gp(6,`translate`),je(`click`,function(){let i=Ay(e).row;return Dy(Tt().removeContact(i))}),ke(7,`icon`),bi(8,`delete`),Ve()()()}n&2&&(fe(),Cn(`matTooltip`,HC(2,2,`APP.CONCIERGE.CONTACTS_EDIT`)),fe(4),Cn(`matTooltip`,HC(6,4,`APP.CONCIERGE.CONTACTS_REMOVE`)))}var gi=(()=>{class n{constructor(){this._org=m(HT),this._dialog=m(WT),this._clipboard=m(kj),this._contacts_service=m(we),this.search=C(``),this.role_filter=C(``),this.roles=this._contacts_service.roles,this.contacts=this._contacts_service.contacts,this.filtered_contacts=R(()=>{let e=this.role_filter();return this.contacts().filter(t=>!e||t.roles.includes(e))}),this.copyToClipboard=e=>{this._clipboard.copy(e)&&HS(`User's email copied to clipboard.`)}}ngOnInit(){this.checkMigration()}async checkMigration(){if(await this._contacts_service.needsMigration()){let t=await re$1({title:`Migrate Emergency Contacts`,content:`Emergency contacts data from the old system was found. Would you like to migrate it to the new system?`,icon:{content:`sync`}},this._dialog);t.reason===`done`&&(t.loading(`Migrating contacts...`),await this._contacts_service.migrateFromMetadata()),t.close()}}manageRoles(){this._dialog.open(hi,{}).afterClosed().subscribe(()=>this._contacts_service.refresh())}editContact(e){this._dialog.open(pi,{data:e}).afterClosed().subscribe(()=>this._contacts_service.refresh())}async removeContact(e){let t=await re$1({title:`Remove Emergency Contact`,content:`Are you sure you want to remove ${e.name} from the emergency contacts?`,icon:{content:`delete`}},this._dialog);t.reason===`done`&&(t.loading(`Removing contact...`),await this._contacts_service.deleteContact(e.id),t.close())}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=ye({type:n,selectors:[[``,`app-emergency-contacts`,``]],decls:50,vars:49,consts:[[`person_template`,``],[`roles_template`,``],[`zone_template`,``],[`actions_template`,``],[1,`flex`,`h-px`,`flex-1`],[1,`flex`,`h-full`,`w-1/2`,`flex-1`,`flex-col`],[`topbar`,``,1,`flex`,`flex-col`,`px-8`,`py-4`],[1,`flex`,`items-center`,`justify-between`],[1,`text-2xl`,`font-medium`],[1,`flex`,`items-center`,`space-x-2`],[`appearance`,`outline`,1,`no-subscript`],[`matPrefix`,``,1,`text-2xl`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`space-x-2`,3,`click`],[1,`text-2xl`],[1,`pr-2`],[1,`mt-2`,`flex`,`items-center`,`justify-between`,`py-2`],[3,`ngModelChange`,`ngModel`,`placeholder`],[`value`,``],[3,`value`],[`icon`,``,`default`,``,`matRipple`,``,3,`click`,`matTooltip`],[1,`h-1/2`,`w-full`,`flex-1`,`overflow-auto`,`px-8`],[1,`block`,`min-w-208`,`text-sm`,3,`data`,`filter`,`empty_message`,`columns`,`sortable`],[1,`h-12`,`w-full`],[1,`px-4`,`py-2`,`text-left`,`leading-tight`,3,`click`],[1,``],[1,`font-mono`,`text-[0.625rem]`,`opacity-30`],[1,`flex`,`flex-wrap`,`p-2`],[1,`bg-info`,`text-info-content`,`m-1`,`rounded-2xl`,`px-2`,`py-1`,`font-mono`,`text-xs`],[1,`p-4`],[1,`flex`,`w-full`,`items-center`,`justify-end`,`space-x-2`,`p-2`],[`icon`,``,`default`,``,`matRipple`,``,`error`,``,3,`click`,`matTooltip`]],template:function(t,i){if(t&1){let s=UC();Ht(0,`app-topbar`),ke(1,`div`,4),Ht(2,`app-sidebar`),ke(3,`main`,5)(4,`section`,6)(5,`div`,7)(6,`h2`,8),bi(7),gp(8,`translate`),Ve(),ke(9,`div`,9)(10,`mat-form-field`,10)(11,`icon`,11),bi(12,` search `),Ve(),ke(13,`input`,12),gp(14,`translate`),WF(`ngModelChange`,function(C){return Ay(s),V9(i.search,C)||(i.search=C),Dy(C)}),Ve(),z4(),Ve(),ke(15,`button`,13),je(`click`,function(){return i.editContact()}),ke(16,`icon`,14),bi(17,`add`),Ve(),ke(18,`div`,15),bi(19),gp(20,`translate`),Ve()()()(),ke(21,`div`,16)(22,`mat-form-field`,10)(23,`mat-select`,17),gp(24,`translate`),WF(`ngModelChange`,function(C){return Ay(s),V9(i.role_filter,C)||(i.role_filter=C),Dy(C)}),ke(25,`mat-option`,18),bi(26),gp(27,`translate`),Ve(),X6(28,Wi,2,2,`mat-option`,19,Ui),Ve(),z4(),Ve(),ke(30,`div`,9)(31,`button`,20),gp(32,`translate`),je(`click`,function(){return i.manageRoles()}),ke(33,`icon`),bi(34,`list_alt`),Ve()()()()(),ke(35,`section`,21),Ht(36,`simple-table`,22),gp(37,`translate`),gp(38,`translate`),gp(39,`translate`),gp(40,`translate`),Ht(41,`div`,23),qn(42,$i,5,2,`ng-template`,null,0,_p)(44,Yi,3,0,`ng-template`,null,1,_p)(46,Qi,3,3,`ng-template`,null,2,_p)(48,Xi,9,6,`ng-template`,null,3,_p),Ve()()()}if(t&2){let s=DE(43),g=DE(45),C=DE(47),ne=DE(49);fe(7),Vo(` `,HC(8,13,`APP.CONCIERGE.CONTACTS_HEADER`),` `),fe(6),YF(`ngModel`,i.search),Cn(`placeholder`,HC(14,15,`APP.CONCIERGE.CONTACTS_FILTER`)),W4(),fe(6),Vo(` `,HC(20,17,`APP.CONCIERGE.CONTACTS_ADD`),` `),fe(4),YF(`ngModel`,i.role_filter),Cn(`placeholder`,HC(24,19,`APP.CONCIERGE.CONTACTS_ROLES_ALL`)),W4(),fe(3),_u(HC(27,21,`APP.CONCIERGE.CONTACTS_ROLES_ALL`)),fe(2),J6(i.roles()),fe(3),Cn(`matTooltip`,HC(32,23,`APP.CONCIERGE.CONTACTS_ROLES_MANAGE`)),fe(5),Cn(`data`,i.filtered_contacts())(`filter`,i.search())(`empty_message`,HC(37,25,i.search()?`APP.CONCIERGE.CONTACTS_SEARCH_EMPTY`:`APP.CONCIERGE.CONTACTS_EMPTY`))(`columns`,Q9(44,ji,K9(33,Vi,HC(38,27,`COMMON.PERSON`),s),K9(36,Bi,HC(39,29,`APP.CONCIERGE.CONTACTS_ROLES`),g),K9(39,Gi,HC(40,31,`RESOURCE.LEVEL`),C),q9(42,qi,ne)))(`sortable`,!0)}},dependencies:[Zl,y0,gnt,Nit,Kfe,Ne,Ax,KW,zue,Zt,Qt,NW,iit,rit,Lv,Iv,ike,pH,Xxe,kee,Pit,f],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--%NS%base-100)}
/*# sourceMappingURL=emergency-contacts.component.css.map */`]})}}return n})();var ie=(()=>{class n extends lo{constructor(){super(),this._org=m(HT),this._onsite={},this._events={},this._users=C([]),this._poll=C(0),this.loading=C(!1),this.filters=C({}),this.search=C(``),this.user_events=C({}),this.filtered_users=R(()=>{let e=this.search(),t=this._users(),i=this.filters();return t.filter(s=>(!e||s.name.toLowerCase().includes(e)||s.email.toLowerCase().includes(e))&&(!i.only_onsite||this._onsite[s.email]))}),this.loadUsers(),Je(()=>{this._org.active_building(),this._poll(),this.timeout(`load-events`,()=>this._loadEvents(),300)})}setFilters(e){this.filters.set(l(l({},this.filters()),e))}setSearchString(e){this.search.set(e)}startPolling(e=3*Ed){let t=Math.max(e,3*Ed);this._poll.update(i=>i+1),this.interval(`poll`,()=>this._poll.update(i=>i+1),t)}stopPolling(){this.clearInterval(`poll`)}async checkin(e){let t=await me({booking_start:Math.floor(new Date().valueOf()/1e3),booking_end:Math.floor(Ri$1(new Date).valueOf()/1e3),asset_id:e.email,title:`Checked-in Onsite`,description:this._org.building.display_name||this._org.building.name,zones:[this._org.building.id],booking_type:`staff`});await ee(t.id,!0),this._events[e.email]=t,this._onsite[e.email]=!0}async checkout(e){let t=this._events[e.email];if(t){let i=await me(m$1(l({},t.toJSON()),{booking_end:Math.floor(new Date().valueOf()/1e3)}));await ee(i.id,!1),this._events[e.email]=i,this._onsite[e.email]=!1}}async _loadEvents(){this.loading.set(!0);let e=await j({period_start:Qn(Rn(Date.now())),period_end:Qn(Ri$1(Date.now())),type:`staff`}),t={},i=new Date().valueOf();for(let s of e)A1e(i,i,s.date,s.date+s.duration*60*1e3)&&(t[s.asset_id]=s.checked_in,this._events[s.asset_id]=s);this._onsite=t,this.user_events.set(t),this.loading.set(!1)}async loadUsers(){let e=await R$1(``);e.sort((t,i)=>t.name.localeCompare(i.name)),this._users.set(e)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=L({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();function Ji(n,l){n&1&&(ke(0,`div`,5),bi(1),gp(2,`translate`),Ve()),n&2&&(fe(),Vo(` `,HC(2,1,`APP.CONCIERGE.DIRECTORY_ONSITE`),` `))}function Zi(n,l){if(n&1){let e=UC();ke(0,`div`,0),Ht(1,`a-user-avatar`,1),ke(2,`div`,2)(3,`div`,3),bi(4),Ve(),ke(5,`div`,4),bi(6),Ve()(),Fe(7,Ji,3,3,`div`,5),ke(8,`div`,6)(9,`action-icon`,7),gp(10,`translate`),je(`click`,function(){Ay(e);let i=Tt();return Dy(i.onsite()?i.checkout():i.checkin())}),Ve(),ke(11,`a`,8),gp(12,`translate`),ke(13,`icon`),bi(14,`email`),Ve()(),ke(15,`a`,8),gp(16,`translate`),ke(17,`icon`),bi(18,`call`),Ve()()()()}if(n&2){let e=Tt();fe(),Cn(`user`,e.user()),fe(3),_u(e.user()?.name),fe(2),Vo(` `,e.user()?.email,` `),fe(),Ue(e.onsite()?7:-1),fe(2),Cn(`matTooltip`,HC(10,13,e.onsite()?`COMMON.CHECK_IN`:`COMMON.CHECK_OUT`))(`loading`,e.loading())(`content`,e.onsite()?`event_busy`:`event_available`),fe(2),Cn(`matTooltip`,HC(12,15,`APP.CONCIERGE.DIRECTORY_EMAIL`))(`href`,`mailto:`+e.user()?.email,uE),ze(`disabled`,!e.user()?.email),fe(4),Cn(`matTooltip`,HC(16,17,`APP.CONCIERGE.DIRECTORY_PHONE`))(`href`,`tel:`+e.user()?.phone,uE),ze(`disabled`,!e.user()?.phone)}}var _i=(()=>{class n{constructor(){this._state=m(ie),this.user=en$1(void 0),this.onsite=en$1(void 0),this.loading=C(!1),this.checkin=async()=>{this.loading.set(!0),await this._state.checkin(this.user()).catch(e=>tj(Tr(`APP.CONCIERGE.DIRECTORY_CHECKIN_ERROR`,{error:e}))),this.loading.set(!1)},this.checkout=async()=>{this.loading.set(!0),await this._state.checkout(this.user()).catch(e=>Tr(`APP.CONCIERGE.DIRECTORY_CHECKOUT_ERROR`,{error:e})),this.loading.set(!1)}}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=ye({type:n,selectors:[[`staff-details`]],inputs:{user:[1,`user`],onsite:[1,`onsite`]},decls:1,vars:1,consts:[[`details`,``,1,`border-base-200`,`bg-base-100`,`flex`,`w-full`,`items-center`,`border-b`,`px-4`,`py-2`,`hover:opacity-80`],[3,`user`],[1,`flex`,`flex-1`,`flex-col`],[1,`px-2`],[1,`text-opacity-50`,`px-2`,`text-xs`],[1,`px-4`,`text-xs`,`opacity-50`],[1,`flex`,`items-center`],[3,`click`,`matTooltip`,`loading`,`content`],[`icon`,``,`matRipple`,``,3,`matTooltip`,`href`]],template:function(t,i){t&1&&Fe(0,Zi,19,19,`div`,0),t&2&&Ue(i.user()?0:-1)},dependencies:[Wn,li,gnt,Nit,Kfe,Pit],encapsulation:2})}}return n})();var en=[`container`];function tn(n,l){if(n&1){let e=UC();ke(0,`div`,6),je(`click`,function(){let i=Ay(e).$implicit;return Dy(Tt().scrollTo(i))}),bi(1),Ve()}if(n&2){let e=l.$implicit,t=Tt();Oe(`disabled`,t.user_list()[e].length<=0)(`active`,e===t.active_group()),fe(),Vo(` `,e,` `)}}function nn(n,l){if(n&1&&Ht(0,`staff-details`,8),n&2){let e=l.$implicit,t=l.$index,i=Tt(2).$implicit,s=Tt(2);Cn(`id`,`letter-`+i+`-`+t)(`user`,e)(`onsite`,s.events()?s.events()[e.email]:!1)}}function an(n,l){if(n&1&&(ke(0,`div`,7),bi(1),Ve(),X6(2,nn,1,3,`staff-details`,8,Q6)),n&2){let e=Tt().$implicit,t=Tt(2);Cn(`id`,`letter-`+(e===`#`?`0`:e)),fe(),Vo(` `,e,` `),fe(),J6(t.user_list()[e])}}function on(n,l){if(n&1&&Fe(0,an,4,2),n&2){let e=l.$implicit;Ue(Tt(2).user_list()[e].length?0:-1)}}function rn(n,l){if(n&1&&X6(0,on,1,1,null,null,Q6),n&2)J6(Tt().groups)}function sn(n,l){n&1&&(ke(0,`div`,4)(1,`p`),bi(2),gp(3,`translate`),Ve()()),n&2&&(fe(2),Vo(` `,HC(3,1,`APP.CONCIERGE.DIRECTORY_SEARCH_EMPTY`),` `))}function ln(n,l){n&1&&Ht(0,`mat-progress-bar`,5)}var Ge=`#abcdefghijklmnopqrstuvwxyz`.split(``);var ui=(()=>{class n extends lo{constructor(){super(),this._state=m(ie),this.active_group=C(`#`),this.groups=Ge,this.events=this._state.user_events,this.loading=this._state.loading,this.filtered_users=this._state.filtered_users,this.user_count=R(()=>this.filtered_users().length),this.user_list=R(()=>{let e=this.filtered_users()||[],t={};for(let i of Ge)t[i]=e.filter(s=>s.name.toLowerCase()[0].startsWith(i)||i===`#`&&!Ge.includes(s.name.toLowerCase()[0]));return t}),this._el=al(`container`),Je(e=>{this.user_list(),this.timeout(`scroll`,()=>this.onScroll({}),30),e(()=>this.clearTimeout(`scroll`))})}onScroll(e){let t=this._el();if(!t)return;let i=t.nativeElement.scrollTop;for(let s of Ge){let g=document.querySelector(`#letter-${s===`#`?`0`:s}`);if(g){if(g.offsetTop-i>0)break;this.active_group.set(s)}}}scrollTo(e){let t=document.querySelector(`#letter-${e}-0`);t&&(t.scrollIntoView({behavior:`smooth`,block:`center`}),this.active_group.set(e))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=ye({type:n,selectors:[[`staff-listings`]],viewQuery:function(t,i){t&1&&mu(i._el,en,5),t&2&&gu()},features:[we$1],decls:8,vars:2,consts:[[`container`,``],[1,`flex`,`w-full`,`items-center`,`justify-center`,`p-2`],[`letter`,``,1,`flex`,`h-6`,`w-6`,`cursor-pointer`,`items-center`,`justify-center`,`text-xs`,`capitalize`,3,`disabled`,`active`],[1,`relative`,`w-full`,`flex-1`,`overflow-auto`,2,`height`,`50%`,3,`scroll`],[1,`absolute`,`inset-0`,`flex`,`flex-col`,`items-center`,`justify-center`],[`mode`,`indeterminate`],[`letter`,``,1,`flex`,`h-6`,`w-6`,`cursor-pointer`,`items-center`,`justify-center`,`text-xs`,`capitalize`,3,`click`],[`group`,``,1,`border-base-300`,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`rounded-lg`,`border`,`text-sm`,`font-medium`,`capitalize`,3,`id`],[3,`id`,`user`,`onsite`]],template:function(t,i){t&1&&(ke(0,`div`,1),X6(1,tn,2,5,`div`,2,Q6),Ve(),ke(3,`div`,3,0),je(`scroll`,function(g){return i.onScroll(g)}),Fe(5,rn,2,0)(6,sn,4,3,`div`,4),Ve(),Fe(7,ln,1,0,`mat-progress-bar`,5)),t&2&&(fe(),J6(i.groups),fe(4),Ue(i.user_count()?5:6),fe(2),Ue(i.loading()?7:-1))},dependencies:[Z,L$1,_i,Pit],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:50%}[letter][_ngcontent-%COMP%]{transition:font-size .2s,color .2s}[group][_ngcontent-%COMP%]{border-color:#ccc;padding:.5rem 1.65rem}.disabled[_ngcontent-%COMP%]{opacity:.2;pointer-events:none}.active[_ngcontent-%COMP%]{font-size:1.25rem;opacity:1;color:#d81b60}
/*# sourceMappingURL=staff-listing.component.css.map */`]})}}return n})();var cn=[`switch`];var dn=[`*`];function mn(n,l){n&1&&(ke(0,`span`,11),zA(),ke(1,`svg`,13),Ht(2,`path`,14),Ve(),ke(3,`svg`,15),Ht(4,`path`,16),Ve()())}var pn=new S(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var qe=class{source;checked;constructor(l,e){this.source=l,this.checked=e}};var it=(()=>{class n{_elementRef=m($);_focusMonitor=m(is);_changeDetectorRef=m(Rt);defaults=m(pn);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new qe(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=nn$1();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new re;toggleChange=new re;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){m(vn).load(Kl);let e=m(new ME(`tabindex`),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||`accent`,this.id=this._uniqueId=m(Gt).getId(`mat-mdc-slide-toggle-`),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new qe(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(t){return new(t||n)};static ɵcmp=ye({type:n,selectors:[[`mat-slide-toggle`]],viewQuery:function(t,i){if(t&1&&Pn(cn,5),t&2){let s;Ie(s=Ae())&&(i._switchElement=s.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(t,i){t&2&&(kn(`id`,i.id),ze(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),Gs(i.color?`mat-`+i.color:``),Oe(`mat-mdc-slide-toggle-focused`,i._focused)(`mat-mdc-slide-toggle-checked`,i.checked)(`mat-slide-toggle-full-width`,i.fullWidth)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,Ee],color:`color`,disabled:[2,`disabled`,`disabled`,Ee],fullWidth:[2,`fullWidth`,`fullWidth`,Ee],disableRipple:[2,`disableRipple`,`disableRipple`,Ee],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:yu(e)],checked:[2,`checked`,`checked`,Ee],hideIcon:[2,`hideIcon`,`hideIcon`,Ee],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Ee]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[Ke([{provide:qo,useExisting:an$1(()=>n),multi:!0},{provide:Ko,useExisting:n,multi:!0}]),bt],ngContentSelectors:dn,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(t,i){if(t&1&&(Jt(),ke(0,`div`,1)(1,`button`,2,0),je(`click`,function(){return i._handleClick()}),Ht(3,`div`,3)(4,`span`,4),ke(5,`span`,5)(6,`span`,6)(7,`span`,7),Ht(8,`span`,8),Ve(),ke(9,`span`,9),Ht(10,`span`,10),Ve(),Fe(11,mn,5,0,`span`,11),Ve()()(),ke(12,`label`,12),je(`click`,function(g){return g.stopPropagation()}),Pe(13),Ve()()),t&2){let s=DE(2);Cn(`labelPosition`,i.labelPosition),fe(),Oe(`mdc-switch--selected`,i.checked)(`mdc-switch--unselected`,!i.checked)(`mdc-switch--checked`,i.checked)(`mdc-switch--disabled`,i.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,i.disabledInteractive),Cn(`tabIndex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex)(`disabled`,i.disabled&&!i.disabledInteractive),ze(`id`,i.buttonId)(`name`,i.name)(`aria-label`,i.ariaLabel)(`aria-labelledby`,i._getAriaLabelledBy())(`aria-describedby`,i.ariaDescribedby)(`aria-required`,i.required||null)(`aria-checked`,i.checked)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null),fe(9),Cn(`matRippleTrigger`,s)(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleCentered`,!0),fe(),Ue(i.hideIcon?-1:11),fe(),Cn(`for`,i.buttonId),ze(`id`,i._labelId)}},dependencies:[y0,rnt],styles:[`.mdc-switch {
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
`],encapsulation:2})}return n})();var fi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ae({type:n});static ɵinj=oe({imports:[it,wt]})}return n})();var gn=(n,l)=>l.id;function _n(n,l){if(n&1&&(ke(0,`mat-option`,3),bi(1),Ve()),n&2){let e=l.$implicit;Cn(`value`,e.id),fe(),Vo(` `,e.display_name||e.name,` `)}}var vi=(()=>{class n extends lo{constructor(){super(),this._state=m(ie),this._org=m(HT),this._route=m(Ci),this._router=m(Ln),this.zones=C([]),this.levels=C([]),this.filters=C({}),this.setDate=e=>this._state.setFilters({date:e}),this.setFilters=e=>this._state.setFilters(e),this.setSearch=e=>this._state.setSearchString(e),this.updateZones=e=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:e.join(`,`)},queryParamsHandling:`merge`}),this._state.setFilters({zones:e})},Je(()=>{this.filters.set(this._state.filters()||{})}),Je(()=>{let e=this._org.active_levels()||[];O(()=>{this.levels.set(e);let t=this.zones().filter(i=>e.find(s=>s.id===i));!t.length&&e.length&&t.push(e[0].id),this.zones.set(t),this.updateZones(t)})})}async ngOnInit(){await this._org.waitUntilInitialised(),this.subscription(`route.query`,this._route.queryParamMap.subscribe(e=>{if(e.has(`zone_ids`)){let t=e.get(`zone_ids`).split(`,`);if(t.length){let i=this._org.levelWithID(t);if(!i)return;this._org.building=this._org.buildings.find(s=>s.id===i.parent_id),this.zones.set(t)}}})),this.setSearch(``)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=ye({type:n,selectors:[[`staff-topbar`]],features:[we$1],decls:12,vars:8,consts:[[1,`border-base-200`,`bg-base-100`,`flex`,`items-center`,`space-x-4`,`border-b`,`p-4`],[`appearance`,`outline`,1,`no-subscript`,`w-48`],[`multiple`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[3,`value`],[1,`m-2`,3,`ngModelChange`,`ngModel`],[1,`text-xs`],[1,`w-2`,`flex-1`],[1,`mr-2`,3,`modelChange`]],template:function(t,i){t&1&&(ke(0,`div`,0)(1,`mat-form-field`,1)(2,`mat-select`,2),gp(3,`translate`),WF(`ngModelChange`,function(g){return V9(i.zones,g)||(i.zones=g),g}),je(`ngModelChange`,function(g){return i.updateZones(g)}),X6(4,_n,2,2,`mat-option`,3,gn),Ve(),z4(),Ve(),ke(6,`mat-slide-toggle`,4),je(`ngModelChange`,function(g){return i.setFilters({only_onsite:g})}),ke(7,`div`,5),bi(8),gp(9,`translate`),Ve()(),z4(),Ht(10,`div`,6),ke(11,`searchbar`,7),je(`modelChange`,function(g){return i.setSearch(g)}),Ve()()),t&2&&(fe(2),YF(`ngModel`,i.zones),Cn(`placeholder`,HC(3,4,`COMMON.LEVEL_ALL`)),W4(),fe(2),J6(i.levels()),fe(2),Cn(`ngModel`,i.filters()?.only_onsite),W4(),fe(2),Vo(` `,HC(9,6,`APP.CONCIERGE.DIRECTORY_ONSITE_ONLY`),` `))},dependencies:[fi,it,z,Ax,KW,Zt,Qt,NW,ike,Xxe,kee,Pit],styles:[`mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}
/*# sourceMappingURL=staff-topbar.component.css.map */`]})}}return n})();function un(n,l){n&1&&Ht(0,`mat-progress-bar`,4)}var ko=[{path:``,component:(()=>{class n{constructor(){this._state=m(ie),this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=ye({type:n,selectors:[[``,`app-new-staff`,``]],decls:7,vars:1,consts:[[1,`flex`,`h-px`,`flex-1`],[1,`flex`,`h-full`,`w-1/2`,`flex-1`,`flex-col`],[1,`w-full`],[1,`h-0`,`w-full`,`flex-1`],[`mode`,`indeterminate`,1,`w-full`]],template:function(t,i){t&1&&(Ht(0,`app-topbar`),ke(1,`div`,0),Ht(2,`app-sidebar`),ke(3,`main`,1),Ht(4,`staff-topbar`,2)(5,`staff-listings`,3),Fe(6,un,1,0,`mat-progress-bar`,4),Ve()()),t&2&&(fe(6),Ue(i.loading()?6:-1))},dependencies:[Z,L$1,Lv,Iv,vi,ui],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--%NS%base-100)}
/*# sourceMappingURL=staff.component.css.map */`]})}}return n})(),title:`Staff`},{path:`emergency-contacts`,component:gi,title:`Emergency Contacts`}];export{ko as ROUTES};
//# debugId=34244ac0-ed6e-595f-85b6-932c2b30dc84
//# sourceMappingURL=staff.routes-Bw-fw7tm.js.map