import{$c as on$1,Ac as mr,Ai as Ta,Br as Pb,Bs as j,Bu as y4,Ct as Eo,Ds as hr,Dt as Ev,Ei as TE,El as rMe,Et,Fn as KH,Fr as P,Gc as oB,Gi as V7,Gr as Px,Gs as jK,Hi as Uk,Hn as Kn,Hu as y8,It as Fd,Kl as t1,La as ZOe,Lr as P8,Mc as n1,Ml as ri,Mr as Or,Mu as x7,N as At,Pc as nE,Ri as Ua,Tc as m_,Tr as O9e,Ts as hd,Ur as Pr,Ut as GDe,Uu as yD,V as BY,Va as _4,Vi as Ui$1,Wl as sn$1,Wn as L8,Wr as Pt,Xa as _o,Xn as Li$1,Xt as GV,Ya as _n$1,Yu as ys,Zr as Qk,Zs as jb,_ as $n,_c as le,_i as SQe,_o as bD,ao as aS,au as uce,b as $u,bn as Ir,bo as ba,cc as ki$1,cd as zt,co as am,cu as ui$1,dc as l4,dd as m,ds as g,du as v4,ed as zK,fn as I,fo as aw,fu as v8,gs as gn$1,gt as E4,gu as va,h as $e,hs as g_,ht as Dr,il as ph,j as Ar,ji as Te,jt as FDe,kl as rS,kr as Oe,la as Wt,lc as kt,lo as an$1,lr as N,m as $c,na as WD,nr as M4,oi as Ra,p as $b,pa as XOe,pi as S8,qi as VDe,r as $F,ro as aQe,ss as fe,su as uh,tc as kDe,tn as Gt,ud as l,ui as Rr,vn as In,vt as E8,vu as w4,wa as YMe,xn as Is,xo as be,xt as Ee,xu as w9e,yi as Ss,yr as Np,z as BTe,za as Ze,zt as Fi$1}from"./chunk-D8q6ewat.js";import{E as yr,a as Is$1,d as Uo,i as Gr,v as ks,w as un$1,y as kt$1}from"./chunk-1CpbWa39.js";import{f as L,n as Yt,p as Z,r as mt,t as f}from"./main.js";import"./chunk-DmNfOnx9.js";import{t as he}from"./chunk-VOJ6_Rj3.js";import"./chunk-DYGpqCLf.js";import{C as jn,f as St,h as Yt$1,n as $v,s as Jt,u as Lv,v as ei}from"./chunk-BK13bSwr.js";import{t as f$1}from"./chunk-cgCJIXEy.js";import{t as Ne}from"./chunk-BL7B19kM.js";import{g as me,m as j$1,u as ee}from"./chunk-CDPPKMqM.js";import{a as Ge$1,d as Se,f as Ue,g as xe}from"./chunk-CjOvR-nv.js";import{t as re}from"./chunk-D5QW6NPW.js";import{t as z}from"./chunk-B7zWzB5L.js";import"./chunk-B8nzotQB.js";import{n as R}from"./chunk-ClFXjORO2.js";import{t as Ft}from"./chunk-LNLRawvW2.js";var yi=[`*`];function wi(n,l){if(n&1&&(Ir(0,`div`)(1,`icon`),Ta(2),Rr()()),n&2){let e=Li$1();Np(`state center `+e.state()),zt(2),Eo(` `,e.state()===`success`?`done`:`close`,` `)}}function Si(n,l){n&1&&(Ir(0,`div`,3),_o(1,`mat-spinner`,4),Rr()),n&2&&(zt(),$u(`diameter`,16))}var li=(()=>{class n{constructor(){this.icon=Ss(void 0),this.className=Ss(`material-symbols-rounded`),this.content=Ss(void 0),this.loading=Ss(void 0),this.disabled=Ss(void 0),this.state=Ss(``)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=$e({type:n,selectors:[[`action-icon`]],inputs:{icon:[1,`icon`],className:[1,`className`],content:[1,`content`],loading:[1,`loading`],disabled:[1,`disabled`],state:[1,`state`]},ngContentSelectors:yi,decls:6,vars:8,consts:[[`icon`,``,`matRipple`,``,`title`,``,1,`relative`,3,`disabled`],[`root`,``,3,`className`,`icon`],[3,`class`],[1,`loader`,`center`],[3,`diameter`]],template:function(t,i){t&1&&(ki$1(),Ir(0,`button`,0)(1,`icon`,1),Ta(2),$n(3),Rr(),Ar(4,wi,3,3,`div`,2),Ar(5,Si,2,1,`div`,3),Rr()),t&2&&(Et(`success`,i.state()===`success`),$u(`disabled`,i.loading()||i.disabled()),zt(),$u(`className`,i.className())(`icon`,i.icon()),zt(),Eo(` `,i.content(),` `),zt(2),Dr(!i.loading()&&i.state()?4:-1),zt(),Dr(i.loading()?5:-1))},dependencies:[am,aw,St,Yt$1,SQe],styles:[`.action-icon.fade[_ngcontent-%COMP%] > icon[_ngcontent-%COMP%]{opacity:.35}.success[_ngcontent-%COMP%]{pointer-events:none}.success[_ngcontent-%COMP%]   icon[root][_ngcontent-%COMP%]{opacity:.2}.state.success[_ngcontent-%COMP%]{color:#388e3c}.state.error[_ngcontent-%COMP%]{color:#e53935}
/*# sourceMappingURL=action-icon.component.css.map */`]})}}return n})();var Be=`_EMERGENCY_CONTACTS_`;var we=(()=>{class n{constructor(){this._org=g(Pb),this._change=N(Date.now()),this.category=N(null),this.asset_type=N(null),this.contacts=N([]),this.roles=N([]),At(()=>{let e=this._org.active_building();this._change(),e&&this._load(e)}),this.ensureCategoryAndTypeExist()}async _load(e){let t=await this._queryCategory(e);this.category.set(t),this.roles.set(this._rolesFromCategory(t));let i=await this._queryAssetType(e,t);this.asset_type.set(i);let s=await this._queryContacts(e,i);this.contacts.set(s)}async _queryCategory(e){try{let{data:t}=await rMe({zone_id:e.id});return t.find(i=>i.name===Be)||null}catch{return null}}async _queryAssetType(e,t){if(!t)return null;try{let{data:i}=await XOe({zone_id:e.id,q:t.name});return i.find(s=>s.name===Be&&s.category_id===t.id)||null}catch{return null}}async _queryContacts(e,t){if(!t)return[];try{let{data:i}=await xe({zone_id:e.id,type_id:t.id,limit:200});return i.filter(s=>s.asset_type_id===t.id).map(s=>this.assetToContact(s))}catch{return[]}}_rolesFromCategory(e){if(!e?.description)return[];try{return JSON.parse(e.description).roles||[]}catch{return[]}}async _queryLegacyMetadata(e){try{let{details:t}=await hd(e.id,`emergency_contacts`);return t||{contacts:[],roles:[]}}catch{return{contacts:[],roles:[]}}}async ensureCategoryExists(){await this._org.waitUntilInitialised();let e=this._org.building;if(!e)return null;let t=await this._queryCategory(e);if(t)return t;try{let i=await Se(ph(new uh({name:Be,description:JSON.stringify({roles:[]}),hidden:!0}),[0,void 0,``,null]));return this._change.set(Date.now()),i}catch(i){return console.error(`Failed to create emergency contacts category:`,i),null}}async ensureAssetTypeExists(e){let t=this._org.building;if(!t||!e)return null;let i=await this._queryAssetType(t,e);if(i)return i;try{let s=await Ue({name:Be,category_id:e.id,zone_id:t.id,brand:`PlaceOS`,description:`Emergency contacts for the building`});return this._change.set(Date.now()),s}catch(s){return console.error(`Failed to create emergency contacts asset type:`,s),null}}async ensureCategoryAndTypeExist(){let e=await this.ensureCategoryExists();return e?this.ensureAssetTypeExists(e):null}async migrateFromMetadata(){let e=this._org.building;if(!e)return!1;try{let t=await this._queryLegacyMetadata(e);if(!t?.contacts?.length&&!t?.roles?.length)return!0;let i=await this.ensureCategoryAndTypeExist();if(!i)throw new Error(`Failed to create or find asset type`);let s=await this._queryCategory(e);if(!s)throw new Error(`Failed to find category`);t.roles?.length&&await Se(ph(new uh(m(l({},s),{hidden:!0,description:JSON.stringify({roles:t.roles})})),[0,null,void 0,``]));for(let g of t.contacts||[])await Ge$1(this.contactToAsset(g,i.id));return await GV(e.id,{name:`emergency_contacts`,description:`Emergency Contacts (migrated to Assets)`,details:{contacts:[],roles:[],migrated:!0}}),this._change.set(Date.now()),rS(Kn(`APP.CONCIERGE.CONTACTS_MIGRATION_SUCCESS`)||`Successfully migrated emergency contacts.`),!0}catch(t){return oB(Kn(`APP.CONCIERGE.CONTACTS_MIGRATION_ERROR`,{error:t})||`Failed to migrate emergency contacts: ${t}`),!1}}async needsMigration(){let e=this._org.building;if(!e)return!1;let t=await this._queryLegacyMetadata(e);return t&&(t.contacts?.length>0||t.roles?.length>0)?!t.migrated:!1}async saveContact(e){try{let t=this.asset_type();if(t||(t=await this.ensureCategoryAndTypeExist()),!t)throw new Error(`Failed to create or find asset type`);return await Ge$1(this.contactToAsset(e,t.id)),this._change.set(Date.now()),rS(Kn(`APP.CONCIERGE.CONTACTS_SAVE_SUCCESS`)),!0}catch(t){return oB(Kn(`APP.CONCIERGE.CONTACTS_SAVE_ERROR`,{error:t})),!1}}async deleteContact(e){try{return await ZOe(e),this._change.set(Date.now()),rS(Kn(`APP.CONCIERGE.CONTACTS_DELETE_SUCCESS`)||`Successfully removed emergency contact.`),!0}catch(t){return oB(Kn(`APP.CONCIERGE.CONTACTS_DELETE_ERROR`,{error:t})||`Failed to remove emergency contact: ${t}`),!1}}async updateRoles(e){try{let t=this.category();if(t||(t=await this.ensureCategoryExists()),!t)throw new Error(`Failed to create or find category`);return await Se(new uh(m(l({},t),{description:JSON.stringify({roles:e})}))),this._change.set(Date.now()),!0}catch(t){return oB(`Failed to update roles: ${t}`),!1}}async addRole(e){let t=this.roles();return t.includes(e)?!0:this.updateRoles([...t,e].filter(Boolean).sort((i,s)=>i.localeCompare(s)))}async removeRole(e){try{let t=this.roles(),i=this.contacts(),s=t.filter(g=>g!==e);await this.updateRoles(s);for(let g of i)if(g.roles.includes(e)){let C=m(l({},g),{roles:g.roles.filter(ne=>ne!==e)});await this.saveContact(C)}return!0}catch(t){return oB(`Failed to remove role: ${t}`),!1}}async renameRole(e,t){try{let i=this.roles(),s=this.contacts(),g=i.map(C=>C===e?t:C).filter(Boolean).sort((C,ne)=>C.localeCompare(ne));await this.updateRoles(g);for(let C of s)if(C.roles.includes(e)){let ne=m(l({},C),{roles:C.roles.map(nt=>nt===e?t:nt)});await this.saveContact(ne)}return!0}catch(i){return oB(`Failed to rename role: ${i}`),!1}}refresh(){this._change.set(Date.now())}assetToContact(e){let t=e.other_data,i=this._org.levelWithID(e.zones);return{id:e.id,name:e.identifier||``,email:t?.email||``,phone:t?.phone||``,roles:t?.roles||[],zone:i?.id||``}}contactToAsset(e,t){let i=e.zone?this._org.levelWithID([e.zone]):null;return{id:e.id?.startsWith(`contact-`)?void 0:e.id,asset_type_id:t,identifier:e.name,other_data:{email:e.email,phone:e.phone,roles:e.roles},zone_id:this._org.building.id,zones:Or([this._org.organisation.id,this._org.region?.id,this._org.building.id,i?.id].filter(s=>s))}}generateContactId(){return`contact-${aS(8)}`}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=P({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();var Ei=()=>({standalone:!0});var xi=(n,l)=>l.id;function Mi(n,l){n&1&&(Ir(0,`button`,3)(1,`icon`),Ta(2,`close`),Rr()())}function Ti(n,l){if(n&1&&(Ir(0,`mat-option`,20),Ta(1),Rr()),n&2){let e=l.$implicit;$u(`value`,e.id),zt(),Eo(` `,e.display_name||e.name,` `)}}function ki(n,l){if(n&1&&(Ir(0,`mat-option`,20),Ta(1),Rr()),n&2){let e=Li$1().$implicit;$u(`value`,e),zt(),Eo(` `,e,` `)}}function Ri(n,l){if(n&1&&Ar(0,ki,2,2,`mat-option`,20),n&2){let e=l.$implicit;Dr(e?0:-1)}}function Ii(n,l){if(n&1){let e=yD();Ir(0,`main`,4)(1,`form`)(2,`a-user-search-field`,7),kt(`ngModelChange`,function(i){m_(e);return g_(Li$1().setUser(i))}),Rr(),jK(),Ir(3,`div`,8)(4,`label`,9),Ta(5),bD(6,`translate`),Rr(),Ir(7,`mat-form-field`,10),_o(8,`input`,11),jK(),Rr()(),Ir(9,`div`,12)(10,`div`,13)(11,`label`,14),Ta(12),bD(13,`translate`),Rr(),Ir(14,`mat-form-field`,10),_o(15,`input`,15),bD(16,`translate`),jK(),Rr()(),Ir(17,`div`,13)(18,`label`,14),Ta(19),bD(20,`translate`),Rr(),Ir(21,`mat-form-field`,10),_o(22,`input`,16),bD(23,`translate`),jK(),Rr()()(),Ir(24,`div`,8)(25,`label`,17),Ta(26),bD(27,`translate`),Rr(),Ir(28,`mat-form-field`,10)(29,`mat-select`,18),bD(30,`translate`),Ir(31,`mat-option`,19),Ta(32),bD(33,`translate`),Rr(),S8(34,Ti,2,2,`mat-option`,20,xi),Rr(),jK(),Rr()(),Ir(36,`div`,8)(37,`label`,21),Ta(38),bD(39,`translate`),Rr(),Ir(40,`div`,12)(41,`mat-form-field`,22)(42,`mat-select`,23),bD(43,`translate`),S8(44,Ri,1,1,null,null,E8),Rr(),jK(),Rr(),Ir(46,`div`,24),bD(47,`translate`),Ir(48,`button`,25)(49,`icon`),Ta(50,`add`),Rr()()()()()()()}if(n&2){let e=Li$1(),t=L8(9);zt(2),$u(`ngModelOptions`,_4(40,Ei)),zK(),zt(3),Qk(w4(6,18,`FORM.NAME`)),zt(3),$u(`formField`,e.form.name),zK(),zt(4),Qk(w4(13,20,`FORM.EMAIL`)),zt(3),$u(`formField`,e.form.email)(`placeholder`,w4(16,22,`FORM.EMAIL`)),zK(),zt(4),Qk(w4(20,24,`FORM.PHONE`)),zt(3),$u(`formField`,e.form.phone)(`placeholder`,w4(23,26,`APP.CONCIERGE.CONTACTS_PHONE_PLACEHOLDER`)),zK(),zt(4),Qk(w4(27,28,`RESOURCE.LEVEL`)),zt(3),$u(`formField`,e.form.zone)(`placeholder`,w4(30,30,`COMMON.LEVEL_SELECT`)),zK(),zt(3),Qk(w4(33,32,`COMMON.LEVEL_ANY`)),zt(2),v8(e.levels()),zt(4),Qk(w4(39,34,`APP.CONCIERGE.CONTACTS_ROLES`)),zt(4),$u(`formField`,e.form.roles)(`placeholder`,w4(43,36,`APP.CONCIERGE.CONTACTS_ROLES_SELECT`)),zK(),zt(2),v8(e.roles()),zt(2),$u(`matTooltip`,w4(47,38,`APP.CONCIERGE.CONTACTS_ROLES_ADD`)),zt(2),$u(`content`,t)}}function Oi(n,l){n&1&&(Ir(0,`main`,5),_o(1,`mat-spinner`,26),Ir(2,`p`),Ta(3),bD(4,`translate`),Rr()()),n&2&&(zt(),$u(`diameter`,48),zt(2),Qk(w4(4,2,`APP.CONCIERGE.CONTACTS_SAVING`)))}function Ai(n,l){if(n&1){let e=yD();Ir(0,`footer`,6)(1,`button`,27),kt(`click`,function(){m_(e);return g_(Li$1().save())}),Ta(2),bD(3,`translate`),Rr()()}n&2&&(zt(2),Eo(` `,w4(3,1,`COMMON.SAVE`),` `))}function Pi(n,l){if(n&1){let e=yD();Ir(0,`div`,28)(1,`mat-form-field`,10)(2,`input`,29),bD(3,`translate`),n1(`ngModelChange`,function(i){m_(e);let s=Li$1();return l4(s.role_name,i)||(s.role_name=i),g_(i)}),Rr(),jK(),Rr(),Ir(4,`button`,30),kt(`click`,function(){m_(e);return g_(Li$1().addRole())}),Ta(5),bD(6,`translate`),Rr()()}if(n&2){let e=Li$1();zt(2),t1(`ngModel`,e.role_name),$u(`placeholder`,w4(3,3,`APP.CONCIERGE.CONTACTS_ROLES_NAME`)),zK(),zt(3),Eo(` `,w4(6,5,`APP.CONCIERGE.CONTACTS_ROLES_SAVE`),` `)}}var pi=(()=>{class n{constructor(){this._data=g(uce),this._dialog_ref=g(jb),this._org=g(Pb),this._contacts_service=g(we),this.loading=N(!1),this.role_name=N(``),this.contact=this._data,this.roles=this._contacts_service.roles,this.model=N({id:this._data?.id||this._contacts_service.generateContactId(),name:this._data?.name||``,email:this._data?.email||``,phone:this._data?.phone||``,zone:this._data?.zone||``,roles:this._data?.roles||[]}),this.form=Gr(this.model),this.levels=this._org.active_levels,this._tooltip=BTe(he)}async addRole(){let e=this.role_name().trim();e&&(this._tooltip().close(),this.loading.set(!0),this._dialog_ref.disableClose=!0,await this._contacts_service.addRole(e),this.model.update(t=>m(l({},t),{roles:[...t.roles||[],e]})),this.role_name.set(``),this.loading.set(!1),this._dialog_ref.disableClose=!1)}setUser(e){this.model.update(t=>m(l({},t),{name:e?.name||``,email:e?.email||``,phone:e?.phone||``}))}async save(){this.loading.set(!0),this._dialog_ref.disableClose=!0;let e=this.model(),t={id:e.id,name:e.name,email:e.email,phone:e.phone,zone:e.zone,roles:e.roles||[]},i=await this._contacts_service.saveContact(t);this._dialog_ref.disableClose=!1,this.loading.set(!1),i&&this._dialog_ref.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=$e({type:n,selectors:[[`emergency-contact-modal`]],viewQuery:function(t,i){t&1&&Uk(i._tooltip,he,5),t&2&&P8()},decls:10,vars:6,consts:[[`role_form`,``],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[1,`w-xl`,`p-4`],[`loading`,``,1,`flex`,`h-64`,`flex-col`,`items-center`,`justify-center`],[1,`border-base-200`,`flex`,`items-center`,`justify-end`,`border-t`,`px-4`,`py-2`],[`ngModel`,``,1,`mb-4`,3,`ngModelChange`,`ngModelOptions`],[1,`flex`,`flex-col`],[`for`,`name`],[`appearance`,`outline`],[`matInput`,``,`placeholder`,`Full name`,3,`formField`],[1,`flex`,`items-center`,`space-x-4`],[1,`flex`,`flex-1`,`flex-col`],[`for`,`email`],[`matInput`,``,`type`,`email`,3,`formField`,`placeholder`],[`matInput`,``,`type`,`tel`,3,`formField`,`placeholder`],[`for`,`zone`],[3,`formField`,`placeholder`],[`value`,``],[3,`value`],[`for`,`roles`],[`appearance`,`outline`,1,`no-subscript`,`flex-1`],[`multiple`,``,3,`formField`,`placeholder`],[3,`matTooltip`],[`icon`,``,`default`,``,`matRipple`,``,`customTooltip`,``,3,`content`],[1,`mb-4`,3,`diameter`],[`btn`,``,`matRipple`,``,1,`w-48`,3,`click`],[1,`bg-base-100`,`rounded-sm`,`p-4`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`]],template:function(t,i){t&1&&(Ir(0,`header`,1)(1,`h2`,2),Ta(2),bD(3,`translate`),Rr(),Ar(4,Mi,3,0,`button`,3),Rr(),Ar(5,Ii,51,41,`main`,4)(6,Oi,5,4,`main`,5),Ar(7,Ai,4,3,`footer`,6),va(8,Pi,7,7,`ng-template`,null,0,M4)),t&2&&(zt(2),Eo(` `,w4(3,4,i.contact?`APP.CONCIERGE.CONTACTS_EDIT`:`APP.CONCIERGE.CONTACTS_NEW`),` `),zt(2),Dr(i.loading()?-1:4),zt(),Dr(i.loading()?6:5),zt(2),Dr(i.loading()?-1:7))},dependencies:[SQe,O9e,w9e,kt$1,un$1,ks,Is$1,ei,Jt,BY,am,aw,GDe,VDe,$F,kDe,FDe,V7,x7,Uo,St,Yt$1,he,Ft,Yt,mt,f],encapsulation:2})}}return n})();var Di=(n,l)=>l+n;function Fi(n,l){n&1&&(Ir(0,`button`,3)(1,`icon`),Ta(2,`close`),Rr()())}function Li(n,l){if(n&1){let e=yD();Ir(0,`div`,5)(1,`div`,10),Ta(2),Rr(),Ir(3,`button`,11),kt(`click`,function(){let i=m_(e).$implicit,s=Li$1();return s.active.set(i),g_(s.role_name.set(i))}),Ir(4,`icon`),Ta(5,`edit`),Rr()(),Ir(6,`button`,12),kt(`click`,function(){let i=m_(e).$implicit;return g_(Li$1().removeRole(i))}),Ir(7,`icon`),Ta(8,`delete`),Rr()()()}if(n&2){let e=l.$implicit;Li$1();let t=L8(16);zt(2),Qk(e),zt(),$u(`content`,t)}}function zi(n,l){if(n&1){let e=yD();Ir(0,`div`,13)(1,`mat-form-field`,14)(2,`input`,15),bD(3,`translate`),n1(`ngModelChange`,function(i){m_(e);let s=Li$1();return l4(s.role_name,i)||(s.role_name=i),g_(i)}),Rr(),jK(),Rr(),Ir(4,`button`,16),kt(`click`,function(){m_(e);return g_(Li$1().updateRoles())}),Ta(5),bD(6,`translate`),Rr()()}if(n&2){let e=Li$1();zt(2),t1(`ngModel`,e.role_name),$u(`placeholder`,w4(3,3,`APP.CONCIERGE.CONTACTS_ROLES_NAME`)),zK(),zt(3),Eo(` `,w4(6,5,`APP.CONCIERGE.CONTACTS_ROLES_SAVE`),` `)}}var hi=(()=>{class n{constructor(){this._dialog_ref=g(jb),this._contacts_service=g(we),this.active=N(``),this.role_name=N(``),this.loading=N(!1),this.roles=this._contacts_service.roles,this._tooltip=BTe(he)}async removeRole(e){e&&(this.loading.set(!0),this._dialog_ref.disableClose=!0,await this._contacts_service.removeRole(e),this.loading.set(!1),this._dialog_ref.disableClose=!1)}async updateRoles(){let e=this.role_name().trim();e&&(this.loading.set(!0),this._tooltip().close(),this._dialog_ref.disableClose=!0,this.active()?await this._contacts_service.renameRole(this.active(),e):await this._contacts_service.addRole(e),this.role_name.set(``),this.active.set(``),this.loading.set(!1),this._dialog_ref.disableClose=!1)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=$e({type:n,selectors:[[`role-management-modal`]],viewQuery:function(t,i){t&1&&Uk(i._tooltip,he,5),t&2&&P8()},decls:17,vars:8,consts:[[`role_form`,``],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[1,`h-128`,`max-h-[65vh]`,`min-w-md`,`overflow-y-auto`],[1,`hover:bg-base-200:bg-base-300`,`border-base-200`,`m-2`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`border`,`p-2`],[1,`border-base-200`,`border-t`],[`btn`,``,`matRipple`,``,`customTooltip`,``,1,`m-2`,`flex`,`w-[calc(100%-1rem)]`,`items-center`,`justify-center`,`space-x-2`,3,`click`,`content`],[1,`truncate`,`pl-2`],[1,`text-2xl`],[1,`flex-1`,`truncate`,`px-2`],[`icon`,``,`matRipple`,``,`customTooltip`,``,1,`border-secondary`,`text-secondary`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`,`content`],[`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`],[1,`bg-base-100`,`rounded-sm`,`p-4`],[`appearance`,`outline`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`]],template:function(t,i){if(t&1){let s=yD();Ir(0,`header`,1)(1,`h2`,2),Ta(2),bD(3,`translate`),Rr(),Ar(4,Fi,3,0,`button`,3),Rr(),Ir(5,`main`,4),S8(6,Li,9,2,`div`,5,Di),Rr(),Ir(8,`footer`,6)(9,`button`,7),kt(`click`,function(){return m_(s),i.active.set(``),g_(i.role_name.set(``))}),Ir(10,`div`,8),Ta(11),bD(12,`translate`),Rr(),Ir(13,`icon`,9),Ta(14,`add`),Rr()()(),va(15,zi,7,7,`ng-template`,null,0,M4)}if(t&2){let s=L8(16);zt(2),Eo(` `,w4(3,4,`APP.CONCIERGE.CONTACTS_ROLES_MANAGE`),` `),zt(2),Dr(i.loading()?-1:4),zt(2),v8(i.roles()),zt(3),$u(`content`,s),zt(2),Eo(` `,w4(12,6,`APP.CONCIERGE.CONTACTS_ROLES_ADD`),` `)}},dependencies:[GDe,$F,kDe,V7,O9e,w9e,am,aw,kt$1,un$1,ks,Is$1,SQe,he,f],encapsulation:2})}}return n})();var Vi=(n,l)=>({key:`name`,name:n,content:l});var Bi=(n,l)=>({key:`roles`,name:n,content:l,sortable:!1});var Gi=(n,l)=>({key:`zone`,name:n,content:l,sortable:!1});var qi=n=>({key:`actions`,name:` `,content:n,size:`6rem`,sortable:!1});var ji=(n,l,e,t)=>[n,l,e,t];var Ui=(n,l)=>l+n;function Wi(n,l){if(n&1&&(Ir(0,`mat-option`,19),Ta(1),Rr()),n&2){let e=l.$implicit;$u(`value`,e),zt(),Eo(` `,e,` `)}}function $i(n,l){if(n&1){let e=yD();Ir(0,`button`,24),kt(`click`,function(){let i=m_(e).row;return g_(Li$1().copyToClipboard(i.email))}),Ir(1,`div`,25),Ta(2),Rr(),Ir(3,`div`,26),Ta(4),Rr()()}if(n&2){let e=l.row;zt(2),Qk(e.name),zt(2),Eo(` `,e.email,` `)}}function Hi(n,l){if(n&1&&(Ir(0,`span`,28),Ta(1),Rr()),n&2){let e=l.$implicit;zt(),Eo(` `,e,` `)}}function Yi(n,l){if(n&1&&(Ir(0,`div`,27),S8(1,Hi,2,1,`span`,28,y8),Rr()),n&2){let e=l.data;zt(),v8(e)}}function Qi(n,l){if(n&1&&(Ir(0,`div`,29),Ta(1),bD(2,`level`),Rr()),n&2){let e=l.data;zt(),Eo(` `,e?w4(2,1,e)?.display_name:`All`,` `)}}function Xi(n,l){if(n&1){let e=yD();Ir(0,`div`,30)(1,`button`,20),bD(2,`translate`),kt(`click`,function(){let i=m_(e).row;return g_(Li$1().editContact(i))}),Ir(3,`icon`),Ta(4,`edit`),Rr()(),Ir(5,`button`,31),bD(6,`translate`),kt(`click`,function(){let i=m_(e).row;return g_(Li$1().removeContact(i))}),Ir(7,`icon`),Ta(8,`delete`),Rr()()()}n&2&&(zt(),$u(`matTooltip`,w4(2,2,`APP.CONCIERGE.CONTACTS_EDIT`)),zt(4),$u(`matTooltip`,w4(6,4,`APP.CONCIERGE.CONTACTS_REMOVE`)))}var gi=(()=>{class n{constructor(){this._org=g(Pb),this._dialog=g($b),this._clipboard=g(KH),this._contacts_service=g(we),this.search=N(``),this.role_filter=N(``),this.roles=this._contacts_service.roles,this.contacts=this._contacts_service.contacts,this.filtered_contacts=Te(()=>{let e=this.role_filter();return this.contacts().filter(t=>!e||t.roles.includes(e))}),this.copyToClipboard=e=>{this._clipboard.copy(e)&&rS(`User's email copied to clipboard.`)}}ngOnInit(){this.checkMigration()}async checkMigration(){if(await this._contacts_service.needsMigration()){let t=await re({title:`Migrate Emergency Contacts`,content:`Emergency contacts data from the old system was found. Would you like to migrate it to the new system?`,icon:{content:`sync`}},this._dialog);t.reason===`done`&&(t.loading(`Migrating contacts...`),await this._contacts_service.migrateFromMetadata()),t.close()}}manageRoles(){this._dialog.open(hi,{}).afterClosed().subscribe(()=>this._contacts_service.refresh())}editContact(e){this._dialog.open(pi,{data:e}).afterClosed().subscribe(()=>this._contacts_service.refresh())}async removeContact(e){let t=await re({title:`Remove Emergency Contact`,content:`Are you sure you want to remove ${e.name} from the emergency contacts?`,icon:{content:`delete`}},this._dialog);t.reason===`done`&&(t.loading(`Removing contact...`),await this._contacts_service.deleteContact(e.id),t.close())}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=$e({type:n,selectors:[[``,`app-emergency-contacts`,``]],decls:50,vars:49,consts:[[`person_template`,``],[`roles_template`,``],[`zone_template`,``],[`actions_template`,``],[1,`flex`,`h-px`,`flex-1`],[1,`flex`,`h-full`,`w-1/2`,`flex-1`,`flex-col`],[`topbar`,``,1,`flex`,`flex-col`,`px-8`,`py-4`],[1,`flex`,`items-center`,`justify-between`],[1,`text-2xl`,`font-medium`],[1,`flex`,`items-center`,`space-x-2`],[`appearance`,`outline`,1,`no-subscript`],[`matPrefix`,``,1,`text-2xl`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`space-x-2`,3,`click`],[1,`text-2xl`],[1,`pr-2`],[1,`mt-2`,`flex`,`items-center`,`justify-between`,`py-2`],[3,`ngModelChange`,`ngModel`,`placeholder`],[`value`,``],[3,`value`],[`icon`,``,`default`,``,`matRipple`,``,3,`click`,`matTooltip`],[1,`h-1/2`,`w-full`,`flex-1`,`overflow-auto`,`px-8`],[1,`block`,`min-w-208`,`text-sm`,3,`data`,`filter`,`empty_message`,`columns`,`sortable`],[1,`h-12`,`w-full`],[1,`px-4`,`py-2`,`text-left`,`leading-tight`,3,`click`],[1,``],[1,`font-mono`,`text-[0.625rem]`,`opacity-30`],[1,`flex`,`flex-wrap`,`p-2`],[1,`bg-info`,`text-info-content`,`m-1`,`rounded-2xl`,`px-2`,`py-1`,`font-mono`,`text-xs`],[1,`p-4`],[1,`flex`,`w-full`,`items-center`,`justify-end`,`space-x-2`,`p-2`],[`icon`,``,`default`,``,`matRipple`,``,`error`,``,3,`click`,`matTooltip`]],template:function(t,i){if(t&1){let s=yD();_o(0,`app-topbar`),Ir(1,`div`,4),_o(2,`app-sidebar`),Ir(3,`main`,5)(4,`section`,6)(5,`div`,7)(6,`h2`,8),Ta(7),bD(8,`translate`),Rr(),Ir(9,`div`,9)(10,`mat-form-field`,10)(11,`icon`,11),Ta(12,` search `),Rr(),Ir(13,`input`,12),bD(14,`translate`),n1(`ngModelChange`,function(C){return m_(s),l4(i.search,C)||(i.search=C),g_(C)}),Rr(),jK(),Rr(),Ir(15,`button`,13),kt(`click`,function(){return i.editContact()}),Ir(16,`icon`,14),Ta(17,`add`),Rr(),Ir(18,`div`,15),Ta(19),bD(20,`translate`),Rr()()()(),Ir(21,`div`,16)(22,`mat-form-field`,10)(23,`mat-select`,17),bD(24,`translate`),n1(`ngModelChange`,function(C){return m_(s),l4(i.role_filter,C)||(i.role_filter=C),g_(C)}),Ir(25,`mat-option`,18),Ta(26),bD(27,`translate`),Rr(),S8(28,Wi,2,2,`mat-option`,19,Ui),Rr(),jK(),Rr(),Ir(30,`div`,9)(31,`button`,20),bD(32,`translate`),kt(`click`,function(){return i.manageRoles()}),Ir(33,`icon`),Ta(34,`list_alt`),Rr()()()()(),Ir(35,`section`,21),_o(36,`simple-table`,22),bD(37,`translate`),bD(38,`translate`),bD(39,`translate`),bD(40,`translate`),_o(41,`div`,23),va(42,$i,5,2,`ng-template`,null,0,M4)(44,Yi,3,0,`ng-template`,null,1,M4)(46,Qi,3,3,`ng-template`,null,2,M4)(48,Xi,9,6,`ng-template`,null,3,M4),Rr()()()}if(t&2){let s=L8(43),g=L8(45),C=L8(47),ne=L8(49);zt(7),Eo(` `,w4(8,13,`APP.CONCIERGE.CONTACTS_HEADER`),` `),zt(6),t1(`ngModel`,i.search),$u(`placeholder`,w4(14,15,`APP.CONCIERGE.CONTACTS_FILTER`)),zK(),zt(6),Eo(` `,w4(20,17,`APP.CONCIERGE.CONTACTS_ADD`),` `),zt(4),t1(`ngModel`,i.role_filter),$u(`placeholder`,w4(24,19,`APP.CONCIERGE.CONTACTS_ROLES_ALL`)),zK(),zt(3),Qk(w4(27,21,`APP.CONCIERGE.CONTACTS_ROLES_ALL`)),zt(2),v8(i.roles()),zt(3),$u(`matTooltip`,w4(32,23,`APP.CONCIERGE.CONTACTS_ROLES_MANAGE`)),zt(5),$u(`data`,i.filtered_contacts())(`filter`,i.search())(`empty_message`,w4(37,25,i.search()?`APP.CONCIERGE.CONTACTS_SEARCH_EMPTY`:`APP.CONCIERGE.CONTACTS_EMPTY`))(`columns`,v4(44,ji,y4(33,Vi,w4(38,27,`COMMON.PERSON`),s),y4(36,Bi,w4(39,29,`APP.CONCIERGE.CONTACTS_ROLES`),g),y4(39,Gi,w4(40,31,`RESOURCE.LEVEL`),C),E4(42,qi,ne)))(`sortable`,!0)}},dependencies:[am,aw,SQe,Yt,mt,Ne,kt$1,un$1,yr,ei,Jt,BY,ks,Is$1,$v,Lv,GDe,$F,kDe,V7,f,f$1],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--%NS%base-100)}
/*# sourceMappingURL=emergency-contacts.component.css.map */`]})}}return n})();var ie=(()=>{class n extends Is{constructor(){super(),this._org=g(Pb),this._onsite={},this._events={},this._users=N([]),this._poll=N(0),this.loading=N(!1),this.filters=N({}),this.search=N(``),this.user_events=N({}),this.filtered_users=Te(()=>{let e=this.search(),t=this._users(),i=this.filters();return t.filter(s=>(!e||s.name.toLowerCase().includes(e)||s.email.toLowerCase().includes(e))&&(!i.only_onsite||this._onsite[s.email]))}),this.loadUsers(),At(()=>{this._org.active_building(),this._poll(),this.timeout(`load-events`,()=>this._loadEvents(),300)})}setFilters(e){this.filters.set(l(l({},this.filters()),e))}setSearchString(e){this.search.set(e)}startPolling(e=3*Ua){let t=Math.max(e,3*Ua);this._poll.update(i=>i+1),this.interval(`poll`,()=>this._poll.update(i=>i+1),t)}stopPolling(){this.clearInterval(`poll`)}async checkin(e){let t=await me({booking_start:Math.floor(new Date().valueOf()/1e3),booking_end:Math.floor(ri(new Date).valueOf()/1e3),asset_id:e.email,title:`Checked-in Onsite`,description:this._org.building.display_name||this._org.building.name,zones:[this._org.building.id],booking_type:`staff`});await ee(t.id,!0),this._events[e.email]=t,this._onsite[e.email]=!0}async checkout(e){let t=this._events[e.email];if(t){let i=await me(m(l({},t.toJSON()),{booking_end:Math.floor(new Date().valueOf()/1e3)}));await ee(i.id,!1),this._events[e.email]=i,this._onsite[e.email]=!1}}async _loadEvents(){this.loading.set(!0);let e=await j$1({period_start:In(an$1(Date.now())),period_end:In(ri(Date.now())),type:`staff`}),t={},i=new Date().valueOf();for(let s of e)YMe(i,i,s.date,s.date+s.duration*60*1e3)&&(t[s.asset_id]=s.checked_in,this._events[s.asset_id]=s);this._onsite=t,this.user_events.set(t),this.loading.set(!1)}async loadUsers(){let e=await R(``);e.sort((t,i)=>t.name.localeCompare(i.name)),this._users.set(e)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=P({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();function Ji(n,l){n&1&&(Ir(0,`div`,5),Ta(1),bD(2,`translate`),Rr()),n&2&&(zt(),Eo(` `,w4(2,1,`APP.CONCIERGE.DIRECTORY_ONSITE`),` `))}function Zi(n,l){if(n&1){let e=yD();Ir(0,`div`,0),_o(1,`a-user-avatar`,1),Ir(2,`div`,2)(3,`div`,3),Ta(4),Rr(),Ir(5,`div`,4),Ta(6),Rr()(),Ar(7,Ji,3,3,`div`,5),Ir(8,`div`,6)(9,`action-icon`,7),bD(10,`translate`),kt(`click`,function(){m_(e);let i=Li$1();return g_(i.onsite()?i.checkout():i.checkin())}),Rr(),Ir(11,`a`,8),bD(12,`translate`),Ir(13,`icon`),Ta(14,`email`),Rr()(),Ir(15,`a`,8),bD(16,`translate`),Ir(17,`icon`),Ta(18,`call`),Rr()()()()}if(n&2){let e=Li$1();zt(),$u(`user`,e.user()),zt(3),Qk(e.user()?.name),zt(2),Eo(` `,e.user()?.email,` `),zt(),Dr(e.onsite()?7:-1),zt(2),$u(`matTooltip`,w4(10,13,e.onsite()?`COMMON.CHECK_IN`:`COMMON.CHECK_OUT`))(`loading`,e.loading())(`content`,e.onsite()?`event_busy`:`event_available`),zt(2),$u(`matTooltip`,w4(12,15,`APP.CONCIERGE.DIRECTORY_EMAIL`))(`href`,`mailto:`+e.user()?.email,nE),Wt(`disabled`,!e.user()?.email),zt(4),$u(`matTooltip`,w4(16,17,`APP.CONCIERGE.DIRECTORY_PHONE`))(`href`,`tel:`+e.user()?.phone,nE),Wt(`disabled`,!e.user()?.phone)}}var _i=(()=>{class n{constructor(){this._state=g(ie),this.user=Ss(void 0),this.onsite=Ss(void 0),this.loading=N(!1),this.checkin=async()=>{this.loading.set(!0),await this._state.checkin(this.user()).catch(e=>oB(Kn(`APP.CONCIERGE.DIRECTORY_CHECKIN_ERROR`,{error:e}))),this.loading.set(!1)},this.checkout=async()=>{this.loading.set(!0),await this._state.checkout(this.user()).catch(e=>Kn(`APP.CONCIERGE.DIRECTORY_CHECKOUT_ERROR`,{error:e})),this.loading.set(!1)}}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=$e({type:n,selectors:[[`staff-details`]],inputs:{user:[1,`user`],onsite:[1,`onsite`]},decls:1,vars:1,consts:[[`details`,``,1,`border-base-200`,`bg-base-100`,`flex`,`w-full`,`items-center`,`border-b`,`px-4`,`py-2`,`hover:opacity-80`],[3,`user`],[1,`flex`,`flex-1`,`flex-col`],[1,`px-2`],[1,`text-opacity-50`,`px-2`,`text-xs`],[1,`px-4`,`text-xs`,`opacity-50`],[1,`flex`,`items-center`],[3,`click`,`matTooltip`,`loading`,`content`],[`icon`,``,`matRipple`,``,3,`matTooltip`,`href`]],template:function(t,i){t&1&&Ar(0,Zi,19,19,`div`,0),t&2&&Dr(i.user()?0:-1)},dependencies:[jn,li,SQe,Yt,mt,f],encapsulation:2})}}return n})();var en=[`container`];function tn(n,l){if(n&1){let e=yD();Ir(0,`div`,6),kt(`click`,function(){let i=m_(e).$implicit;return g_(Li$1().scrollTo(i))}),Ta(1),Rr()}if(n&2){let e=l.$implicit,t=Li$1();Et(`disabled`,t.user_list()[e].length<=0)(`active`,e===t.active_group()),zt(),Eo(` `,e,` `)}}function nn(n,l){if(n&1&&_o(0,`staff-details`,8),n&2){let e=l.$implicit,t=l.$index,i=Li$1(2).$implicit,s=Li$1(2);$u(`id`,`letter-`+i+`-`+t)(`user`,e)(`onsite`,s.events()?s.events()[e.email]:!1)}}function an(n,l){if(n&1&&(Ir(0,`div`,7),Ta(1),Rr(),S8(2,nn,1,3,`staff-details`,8,y8)),n&2){let e=Li$1().$implicit,t=Li$1(2);$u(`id`,`letter-`+(e===`#`?`0`:e)),zt(),Eo(` `,e,` `),zt(),v8(t.user_list()[e])}}function on(n,l){if(n&1&&Ar(0,an,4,2),n&2){let e=l.$implicit;Dr(Li$1(2).user_list()[e].length?0:-1)}}function rn(n,l){if(n&1&&S8(0,on,1,1,null,null,y8),n&2)v8(Li$1().groups)}function sn(n,l){n&1&&(Ir(0,`div`,4)(1,`p`),Ta(2),bD(3,`translate`),Rr()()),n&2&&(zt(2),Eo(` `,w4(3,1,`APP.CONCIERGE.DIRECTORY_SEARCH_EMPTY`),` `))}function ln(n,l){n&1&&_o(0,`mat-progress-bar`,5)}var Ge=`#abcdefghijklmnopqrstuvwxyz`.split(``);var ui=(()=>{class n extends Is{constructor(){super(),this._state=g(ie),this.active_group=N(`#`),this.groups=Ge,this.events=this._state.user_events,this.loading=this._state.loading,this.filtered_users=this._state.filtered_users,this.user_count=Te(()=>this.filtered_users().length),this.user_list=Te(()=>{let e=this.filtered_users()||[],t={};for(let i of Ge)t[i]=e.filter(s=>s.name.toLowerCase()[0].startsWith(i)||i===`#`&&!Ge.includes(s.name.toLowerCase()[0]));return t}),this._el=BTe(`container`),At(e=>{this.user_list(),this.timeout(`scroll`,()=>this.onScroll({}),30),e(()=>this.clearTimeout(`scroll`))})}onScroll(e){let t=this._el();if(!t)return;let i=t.nativeElement.scrollTop;for(let s of Ge){let g=document.querySelector(`#letter-${s===`#`?`0`:s}`);if(g){if(g.offsetTop-i>0)break;this.active_group.set(s)}}}scrollTo(e){let t=document.querySelector(`#letter-${e}-0`);t&&(t.scrollIntoView({behavior:`smooth`,block:`center`}),this.active_group.set(e))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=$e({type:n,selectors:[[`staff-listings`]],viewQuery:function(t,i){t&1&&Uk(i._el,en,5),t&2&&P8()},features:[Oe],decls:8,vars:2,consts:[[`container`,``],[1,`flex`,`w-full`,`items-center`,`justify-center`,`p-2`],[`letter`,``,1,`flex`,`h-6`,`w-6`,`cursor-pointer`,`items-center`,`justify-center`,`text-xs`,`capitalize`,3,`disabled`,`active`],[1,`relative`,`w-full`,`flex-1`,`overflow-auto`,2,`height`,`50%`,3,`scroll`],[1,`absolute`,`inset-0`,`flex`,`flex-col`,`items-center`,`justify-center`],[`mode`,`indeterminate`],[`letter`,``,1,`flex`,`h-6`,`w-6`,`cursor-pointer`,`items-center`,`justify-center`,`text-xs`,`capitalize`,3,`click`],[`group`,``,1,`border-base-300`,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`rounded-lg`,`border`,`text-sm`,`font-medium`,`capitalize`,3,`id`],[3,`id`,`user`,`onsite`]],template:function(t,i){t&1&&(Ir(0,`div`,1),S8(1,tn,2,5,`div`,2,y8),Rr(),Ir(3,`div`,3,0),kt(`scroll`,function(g){return i.onScroll(g)}),Ar(5,rn,2,0)(6,sn,4,3,`div`,4),Rr(),Ar(7,ln,1,0,`mat-progress-bar`,5)),t&2&&(zt(),v8(i.groups),zt(4),Dr(i.user_count()?5:6),zt(2),Dr(i.loading()?7:-1))},dependencies:[Z,L,_i,f],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:50%}[letter][_ngcontent-%COMP%]{transition:font-size .2s,color .2s}[group][_ngcontent-%COMP%]{border-color:#ccc;padding:.5rem 1.65rem}.disabled[_ngcontent-%COMP%]{opacity:.2;pointer-events:none}.active[_ngcontent-%COMP%]{font-size:1.25rem;opacity:1;color:#d81b60}
/*# sourceMappingURL=staff-listing.component.css.map */`]})}}return n})();var cn=[`switch`];var dn=[`*`];function mn(n,l){n&1&&(Ir(0,`span`,11),Px(),Ir(1,`svg`,13),_o(2,`path`,14),Rr(),Ir(3,`svg`,15),_o(4,`path`,16),Rr()())}var pn=new I(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var qe=class{source;checked;constructor(l,e){this.source=l,this.checked=e}};var it=(()=>{class n{_elementRef=g(le);_focusMonitor=g(Fd);_changeDetectorRef=g(sn$1);defaults=g(pn);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new qe(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=mr();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new fe;toggleChange=new fe;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){g(hr).load(Ev);let e=g(new TE(`tabindex`),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||`accent`,this.id=this._uniqueId=g(Pr).getId(`mat-mdc-slide-toggle-`),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new qe(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(t){return new(t||n)};static ɵcmp=$e({type:n,selectors:[[`mat-slide-toggle`]],viewQuery:function(t,i){if(t&1&&ys(cn,5),t&2){let s;Fi$1(s=Ui$1())&&(i._switchElement=s.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(t,i){t&2&&(ba(`id`,i.id),Wt(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),Np(i.color?`mat-`+i.color:``),Et(`mat-mdc-slide-toggle-focused`,i._focused)(`mat-mdc-slide-toggle-checked`,i.checked)(`mat-slide-toggle-full-width`,i.fullWidth)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,Ze],color:`color`,disabled:[2,`disabled`,`disabled`,Ze],fullWidth:[2,`fullWidth`,`fullWidth`,Ze],disableRipple:[2,`disableRipple`,`disableRipple`,Ze],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:WD(e)],checked:[2,`checked`,`checked`,Ze],hideIcon:[2,`hideIcon`,`hideIcon`,Ze],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Ze]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[on$1([{provide:$c,useExisting:Gt(()=>n),multi:!0},{provide:Ra,useExisting:n,multi:!0}]),Pt],ngContentSelectors:dn,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(t,i){if(t&1&&(ki$1(),Ir(0,`div`,1)(1,`button`,2,0),kt(`click`,function(){return i._handleClick()}),_o(3,`div`,3)(4,`span`,4),Ir(5,`span`,5)(6,`span`,6)(7,`span`,7),_o(8,`span`,8),Rr(),Ir(9,`span`,9),_o(10,`span`,10),Rr(),Ar(11,mn,5,0,`span`,11),Rr()()(),Ir(12,`label`,12),kt(`click`,function(g){return g.stopPropagation()}),$n(13),Rr()()),t&2){let s=L8(2);$u(`labelPosition`,i.labelPosition),zt(),Et(`mdc-switch--selected`,i.checked)(`mdc-switch--unselected`,!i.checked)(`mdc-switch--checked`,i.checked)(`mdc-switch--disabled`,i.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,i.disabledInteractive),$u(`tabIndex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex)(`disabled`,i.disabled&&!i.disabledInteractive),Wt(`id`,i.buttonId)(`name`,i.name)(`aria-label`,i.ariaLabel)(`aria-labelledby`,i._getAriaLabelledBy())(`aria-describedby`,i.ariaDescribedby)(`aria-required`,i.required||null)(`aria-checked`,i.checked)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null),zt(9),$u(`matRippleTrigger`,s)(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleCentered`,!0),zt(),Dr(i.hideIcon?-1:11),zt(),$u(`for`,i.buttonId),Wt(`id`,i._labelId)}},dependencies:[aw,aQe],styles:[`.mdc-switch {
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
`],encapsulation:2})}return n})();var fi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=be({type:n});static ɵinj=Ee({imports:[it,_n$1]})}return n})();var gn=(n,l)=>l.id;function _n(n,l){if(n&1&&(Ir(0,`mat-option`,3),Ta(1),Rr()),n&2){let e=l.$implicit;$u(`value`,e.id),zt(),Eo(` `,e.display_name||e.name,` `)}}var vi=(()=>{class n extends Is{constructor(){super(),this._state=g(ie),this._org=g(Pb),this._route=g(ui$1),this._router=g(gn$1),this.zones=N([]),this.levels=N([]),this.filters=N({}),this.setDate=e=>this._state.setFilters({date:e}),this.setFilters=e=>this._state.setFilters(e),this.setSearch=e=>this._state.setSearchString(e),this.updateZones=e=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:e.join(`,`)},queryParamsHandling:`merge`}),this._state.setFilters({zones:e})},At(()=>{this.filters.set(this._state.filters()||{})}),At(()=>{let e=this._org.active_levels()||[];j(()=>{this.levels.set(e);let t=this.zones().filter(i=>e.find(s=>s.id===i));!t.length&&e.length&&t.push(e[0].id),this.zones.set(t),this.updateZones(t)})})}async ngOnInit(){await this._org.waitUntilInitialised(),this.subscription(`route.query`,this._route.queryParamMap.subscribe(e=>{if(e.has(`zone_ids`)){let t=e.get(`zone_ids`).split(`,`);if(t.length){let i=this._org.levelWithID(t);if(!i)return;this._org.building=this._org.buildings.find(s=>s.id===i.parent_id),this.zones.set(t)}}})),this.setSearch(``)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=$e({type:n,selectors:[[`staff-topbar`]],features:[Oe],decls:12,vars:8,consts:[[1,`border-base-200`,`bg-base-100`,`flex`,`items-center`,`space-x-4`,`border-b`,`p-4`],[`appearance`,`outline`,1,`no-subscript`,`w-48`],[`multiple`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[3,`value`],[1,`m-2`,3,`ngModelChange`,`ngModel`],[1,`text-xs`],[1,`w-2`,`flex-1`],[1,`mr-2`,3,`modelChange`]],template:function(t,i){t&1&&(Ir(0,`div`,0)(1,`mat-form-field`,1)(2,`mat-select`,2),bD(3,`translate`),n1(`ngModelChange`,function(g){return l4(i.zones,g)||(i.zones=g),g}),kt(`ngModelChange`,function(g){return i.updateZones(g)}),S8(4,_n,2,2,`mat-option`,3,gn),Rr(),jK(),Rr(),Ir(6,`mat-slide-toggle`,4),kt(`ngModelChange`,function(g){return i.setFilters({only_onsite:g})}),Ir(7,`div`,5),Ta(8),bD(9,`translate`),Rr()(),jK(),_o(10,`div`,6),Ir(11,`searchbar`,7),kt(`modelChange`,function(g){return i.setSearch(g)}),Rr()()),t&2&&(zt(2),t1(`ngModel`,i.zones),$u(`placeholder`,w4(3,4,`COMMON.LEVEL_ALL`)),zK(),zt(2),v8(i.levels()),zt(2),$u(`ngModel`,i.filters()?.only_onsite),zK(),zt(2),Eo(` `,w4(9,6,`APP.CONCIERGE.DIRECTORY_ONSITE_ONLY`),` `))},dependencies:[fi,it,z,kt$1,un$1,ei,Jt,BY,GDe,kDe,V7,f],styles:[`mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}
/*# sourceMappingURL=staff-topbar.component.css.map */`]})}}return n})();function un(n,l){n&1&&_o(0,`mat-progress-bar`,4)}var ko=[{path:``,component:(()=>{class n{constructor(){this._state=g(ie),this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=$e({type:n,selectors:[[``,`app-new-staff`,``]],decls:7,vars:1,consts:[[1,`flex`,`h-px`,`flex-1`],[1,`flex`,`h-full`,`w-1/2`,`flex-1`,`flex-col`],[1,`w-full`],[1,`h-0`,`w-full`,`flex-1`],[`mode`,`indeterminate`,1,`w-full`]],template:function(t,i){t&1&&(_o(0,`app-topbar`),Ir(1,`div`,0),_o(2,`app-sidebar`),Ir(3,`main`,1),_o(4,`staff-topbar`,2)(5,`staff-listings`,3),Ar(6,un,1,0,`mat-progress-bar`,4),Rr()()),t&2&&(zt(6),Dr(i.loading()?6:-1))},dependencies:[Z,L,$v,Lv,vi,ui],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--%NS%base-100)}
/*# sourceMappingURL=staff.component.css.map */`]})}}return n})(),title:`Staff`},{path:`emergency-contacts`,component:gi,title:`Emergency Contacts`}];export{ko as ROUTES};
//# debugId=f4fd8bc3-3f19-5cc3-8905-5135d55cb52e
//# sourceMappingURL=staff.routes-qw2raSLD.js.map