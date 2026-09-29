import{$i as Zk,Br as Sn,Bs as on$1,Co as hk,Cr as Qt,Ct as Gk,Do as iA,Dt as HI,Ec as ro,En as Le,F as D,Fl as xy,Fn as Mi$1,Fr as SU,G as Ds,Gr as TX,Gs as p,Hc as tO,Hr as TE,Ia as ct,Il as yA,Ir as SX,Ji as Z0,Js as pU,K as Dv,Ka as ds,Kl as zC,Kn as Noe,La as cx,Li as YB,Ls as oc,Mn as MJ,Mt as Hce,P as Cr,Pr as SP,Qc as uN,Qr as Tv,Ro as jU,Rs as ok,Sc as rh,Ss as nc,Ti as X0,Ui as Ye,Ul as yn,Wa as dd,Wc as tc,Wl as yoe,Wt as Ie,Xt as J,Y as EP,Yo as kX,Z as EX,Za as ec,Zi as Zce,Zr as Ts,_r as Qe,a as $ce,al as ux,an as Jg,ao as fh,ar as PJ,bc as rc,br as Qk,ca as _ce,ci as VJ,dc as qk,dl as v_,dr as Q0,et as Ece,eu as l,f as Ae,hc as qx,hl as vt,ht as G,io as fe,ir as PI,jc as sA,ji as Xg,jo as ie,ki as Xa,la as _r,nr as Oy,ns as ld,nt as Eoe,oa as _X,oo as fk,pt as Ft,qa as dt,rs as li,rt as Es,sa as _Z,sn as Jk,ta as Zu,tc as q0,tl as ud,tt as Ee,tu as m,ur as Pv,vr as Qg,ws as ni,xc as re,xn as LI,ya as ao,zc as tA,zr as Si$1}from"./chunk-iF8tjqRL.js";import{J as Tu,Kt as np,V as Re,Vt as lt,d as Da,en as qK,in as rT,ln as sl,lt as br,sn as sb,v as Ge$1,wn as yT,wt as ft}from"./chunk-BFnGfCC3.js";import{C as fd,E as qn,T as pd,k as xa,m as Rs,t as $r,v as Wt}from"./chunk-DEmd8LrS.js";import{_ as L,a as Yt,o as mt,t as f,v as Z}from"./main.js";import"./chunk-C2paWSN7.js";import{t as he}from"./chunk-BzJAEABu.js";import"./chunk-D39YQfdX.js";import{E as wn,S as qt,T as ut,d as Vb,s as Kb,t as $t,v as jt}from"./chunk-Beqz1pGa.js";import{t as re$1}from"./chunk-BEioXf3O.js";import{t as f$1}from"./chunk-oo9drp86.js";import{t as Je}from"./chunk-Dt3rLsqS.js";import{g as le,i as S,v as ne$1}from"./chunk-DNz1zG_N.js";import{a as Ge$2,d as Se,f as Ue,g as xe}from"./chunk-Dy9dcGtQ.js";import{t as z}from"./chunk-1_Rs0ufE2.js";import"./chunk-BcXJuwQB2.js";import{n as R}from"./chunk-BrEFMvQZ2.js";import{t as Ft$1}from"./chunk-UlaJzFBv2.js";var wi=[`*`];function Si(n,l){if(n&1&&(ds(0,`div`)(1,`icon`),Xg(2),Xa()()),n&2){let e=dd();Qg(`state center `+e.state()),ni(2),oc(` `,e.state()===`success`?`done`:`close`,` `)}}function Ei(n,l){n&1&&(ds(0,`div`,3),PI(1,`mat-spinner`,4),Xa()),n&2&&(ni(),LI(`diameter`,16))}var ci=(()=>{class n{constructor(){this.icon=v_(void 0),this.className=v_(`material-symbols-rounded`),this.content=v_(void 0),this.loading=v_(void 0),this.disabled=v_(void 0),this.state=v_(``)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`action-icon`]],inputs:{icon:[1,`icon`],className:[1,`className`],content:[1,`content`],loading:[1,`loading`],disabled:[1,`disabled`],state:[1,`state`]},ngContentSelectors:wi,decls:6,vars:8,consts:[[`icon`,``,`matRipple`,``,`title`,``,1,`relative`,3,`disabled`],[`root`,``,3,`className`,`icon`],[3,`class`],[1,`loader`,`center`],[3,`diameter`]],template:function(t,i){t&1&&(ec(),ds(0,`button`,0)(1,`icon`,1),Xg(2),tc(3),Xa(),ld(4,Si,3,3,`div`,2),ld(5,Ei,2,1,`div`,3),Xa()),t&2&&(_r(`success`,i.state()===`success`),LI(`disabled`,i.loading()||i.disabled()),ni(),LI(`className`,i.className())(`icon`,i.icon()),ni(),oc(` `,i.content(),` `),ni(2),ud(!i.loading()&&i.state()?4:-1),ni(),ud(i.loading()?5:-1))},dependencies:[Da,np,ut,qt,Noe],styles:[`.action-icon.fade[_ngcontent-%COMP%] > icon[_ngcontent-%COMP%]{opacity:.35}.success[_ngcontent-%COMP%]{pointer-events:none}.success[_ngcontent-%COMP%]   icon[root][_ngcontent-%COMP%]{opacity:.2}.state.success[_ngcontent-%COMP%]{color:#388e3c}.state.error[_ngcontent-%COMP%]{color:#e53935}
/*# sourceMappingURL=action-icon.component.css.map */`]})}}return n})();var Ge=`_EMERGENCY_CONTACTS_`;var we=(()=>{class n{constructor(){this._org=p(Tu),this._change=Ee(Date.now()),this.category=Ee(null),this.asset_type=Ee(null),this.contacts=Ee([]),this.roles=Ee([]),vt(()=>{let e=this._org.active_building();this._change(),e&&this._load(e)}),this.ensureCategoryAndTypeExist()}async _load(e){let t=await this._queryCategory(e);this.category.set(t),this.roles.set(this._rolesFromCategory(t));let i=await this._queryAssetType(e,t);this.asset_type.set(i);let s=await this._queryContacts(e,i);this.contacts.set(s)}async _queryCategory(e){try{let{data:t}=await VJ({zone_id:e.id});return t.find(i=>i.name===Ge)||null}catch{return null}}async _queryAssetType(e,t){if(!t)return null;try{let{data:i}=await PJ({zone_id:e.id,q:t.name});return i.find(s=>s.name===Ge&&s.category_id===t.id)||null}catch{return null}}async _queryContacts(e,t){if(!t)return[];try{let{data:i}=await xe({zone_id:e.id,type_id:t.id,limit:200});return i.filter(s=>s.asset_type_id===t.id).map(s=>this.assetToContact(s))}catch{return[]}}_rolesFromCategory(e){if(!e?.description)return[];try{return JSON.parse(e.description).roles||[]}catch{return[]}}async _queryLegacyMetadata(e){try{let{details:t}=await tO(e.id,`emergency_contacts`);return t||{contacts:[],roles:[]}}catch{return{contacts:[],roles:[]}}}async ensureCategoryExists(){await this._org.waitUntilInitialised();let e=this._org.building;if(!e)return null;let t=await this._queryCategory(e);if(t)return t;try{let i=await Se(jU(new TE({name:Ge,description:JSON.stringify({roles:[]}),hidden:!0}),[0,void 0,``,null]));return this._change.set(Date.now()),i}catch(i){return console.error(`Failed to create emergency contacts category:`,i),null}}async ensureAssetTypeExists(e){let t=this._org.building;if(!t||!e)return null;let i=await this._queryAssetType(t,e);if(i)return i;try{let s=await Ue({name:Ge,category_id:e.id,zone_id:t.id,brand:`PlaceOS`,description:`Emergency contacts for the building`});return this._change.set(Date.now()),s}catch(s){return console.error(`Failed to create emergency contacts asset type:`,s),null}}async ensureCategoryAndTypeExist(){let e=await this.ensureCategoryExists();return e?this.ensureAssetTypeExists(e):null}async migrateFromMetadata(){let e=this._org.building;if(!e)return!1;try{let t=await this._queryLegacyMetadata(e);if(!t?.contacts?.length&&!t?.roles?.length)return!0;let i=await this.ensureCategoryAndTypeExist();if(!i)throw new Error(`Failed to create or find asset type`);let s=await this._queryCategory(e);if(!s)throw new Error(`Failed to find category`);t.roles?.length&&await Se(jU(new TE(m(l({},s),{hidden:!0,description:JSON.stringify({roles:t.roles})})),[0,null,void 0,``]));for(let _ of t.contacts||[])await Ge$2(this.contactToAsset(_,i.id));return await kX(e.id,{name:`emergency_contacts`,description:`Emergency Contacts (migrated to Assets)`,details:{contacts:[],roles:[],migrated:!0}}),this._change.set(Date.now()),_ce(Mi$1(`APP.CONCIERGE.CONTACTS_MIGRATION_SUCCESS`)||`Successfully migrated emergency contacts.`),!0}catch(t){return Ece(Mi$1(`APP.CONCIERGE.CONTACTS_MIGRATION_ERROR`,{error:t})||`Failed to migrate emergency contacts: ${t}`),!1}}async needsMigration(){let e=this._org.building;if(!e)return!1;let t=await this._queryLegacyMetadata(e);return t&&(t.contacts?.length>0||t.roles?.length>0)?!t.migrated:!1}async saveContact(e){try{let t=this.asset_type();if(t||(t=await this.ensureCategoryAndTypeExist()),!t)throw new Error(`Failed to create or find asset type`);return await Ge$2(this.contactToAsset(e,t.id)),this._change.set(Date.now()),_ce(Mi$1(`APP.CONCIERGE.CONTACTS_SAVE_SUCCESS`)),!0}catch(t){return Ece(Mi$1(`APP.CONCIERGE.CONTACTS_SAVE_ERROR`,{error:t})),!1}}async deleteContact(e){try{return await MJ(e),this._change.set(Date.now()),_ce(Mi$1(`APP.CONCIERGE.CONTACTS_DELETE_SUCCESS`)||`Successfully removed emergency contact.`),!0}catch(t){return Ece(Mi$1(`APP.CONCIERGE.CONTACTS_DELETE_ERROR`,{error:t})||`Failed to remove emergency contact: ${t}`),!1}}async updateRoles(e){try{let t=this.category();if(t||(t=await this.ensureCategoryExists()),!t)throw new Error(`Failed to create or find category`);return await Se(new TE(m(l({},t),{description:JSON.stringify({roles:e})}))),this._change.set(Date.now()),!0}catch(t){return Ece(`Failed to update roles: ${t}`),!1}}async addRole(e){let t=this.roles();return t.includes(e)?!0:this.updateRoles([...t,e].filter(Boolean).sort((i,s)=>i.localeCompare(s)))}async removeRole(e){try{let t=this.roles(),i=this.contacts(),s=t.filter(_=>_!==e);await this.updateRoles(s);for(let _ of i)if(_.roles.includes(e)){let w=m(l({},_),{roles:_.roles.filter(ae=>ae!==e)});await this.saveContact(w)}return!0}catch(t){return Ece(`Failed to remove role: ${t}`),!1}}async renameRole(e,t){try{let i=this.roles(),s=this.contacts(),_=i.map(w=>w===e?t:w).filter(Boolean).sort((w,ae)=>w.localeCompare(ae));await this.updateRoles(_);for(let w of s)if(w.roles.includes(e)){let ae=m(l({},w),{roles:w.roles.map(at=>at===e?t:at)});await this.saveContact(ae)}return!0}catch(i){return Ece(`Failed to rename role: ${i}`),!1}}refresh(){this._change.set(Date.now())}assetToContact(e){let t=e.other_data,i=this._org.levelWithID(e.zones);return{id:e.id,name:e.identifier||``,email:t?.email||``,phone:t?.phone||``,roles:t?.roles||[],zone:i?.id||``}}contactToAsset(e,t){let i=e.zone?this._org.levelWithID([e.zone]):null;return{id:e.id?.startsWith(`contact-`)?void 0:e.id,asset_type_id:t,identifier:e.name,other_data:{email:e.email,phone:e.phone,roles:e.roles},zone_id:this._org.building.id,zones:Hce([this._org.organisation.id,this._org.region?.id,this._org.building.id,i?.id].filter(s=>s))}}generateContactId(){return`contact-${$ce(8)}`}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=G({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();var xi=()=>({standalone:!0});var Mi=(n,l)=>l.id;function Ti(n,l){n&1&&(ds(0,`button`,3)(1,`icon`),Xg(2,`close`),Xa()())}function ki(n,l){if(n&1&&(ds(0,`mat-option`,20),Xg(1),Xa()),n&2){let e=l.$implicit;LI(`value`,e.id),ni(),oc(` `,e.display_name||e.name,` `)}}function Ri(n,l){if(n&1&&(ds(0,`mat-option`,20),Xg(1),Xa()),n&2){let e=dd().$implicit;LI(`value`,e),ni(),oc(` `,e,` `)}}function Ii(n,l){if(n&1&&ld(0,Ri,2,2,`mat-option`,20),n&2){let e=l.$implicit;ud(e?0:-1)}}function Oi(n,l){if(n&1&&(ds(0,`div`,24),Jg(1,`translate`),ds(2,`button`,25)(3,`icon`),Xg(4,`add`),Xa()()()),n&2){dd(2);let e=hk(9);LI(`matTooltip`,cx(1,2,`APP.CONCIERGE.CONTACTS_ROLES_ADD`)),ni(2),LI(`content`,e)}}function Ai(n,l){if(n&1){let e=ok();ds(0,`main`,4)(1,`form`)(2,`a-user-search-field`,7),Qt(`ngModelChange`,function(i){Dv(e);return Tv(dd().setUser(i))}),Xa(),EP(),ds(3,`div`,8)(4,`label`,9),Xg(5),Jg(6,`translate`),Xa(),ds(7,`mat-form-field`,10),PI(8,`input`,11),EP(),Xa()(),ds(9,`div`,12)(10,`div`,13)(11,`label`,14),Xg(12),Jg(13,`translate`),Xa(),ds(14,`mat-form-field`,10),PI(15,`input`,15),Jg(16,`translate`),EP(),Xa()(),ds(17,`div`,13)(18,`label`,14),Xg(19),Jg(20,`translate`),Xa(),ds(21,`mat-form-field`,10),PI(22,`input`,16),Jg(23,`translate`),EP(),Xa()()(),ds(24,`div`,8)(25,`label`,17),Xg(26),Jg(27,`translate`),Xa(),ds(28,`mat-form-field`,10)(29,`mat-select`,18),Jg(30,`translate`),ds(31,`mat-option`,19),Xg(32),Jg(33,`translate`),Xa(),Q0(34,ki,2,2,`mat-option`,20,Mi),Xa(),EP(),Xa()(),ds(36,`div`,8)(37,`label`,21),Xg(38),Jg(39,`translate`),Xa(),ds(40,`div`,12)(41,`mat-form-field`,22)(42,`mat-select`,23),Jg(43,`translate`),Q0(44,Ii,1,1,null,null,q0),Xa(),EP(),Xa(),ld(46,Oi,5,4,`div`,24),Xa()()()()}if(n&2){let e=dd();ni(2),LI(`ngModelOptions`,qk(37,xi)),SP(),ni(3),tA(cx(6,17,`FORM.NAME`)),ni(3),LI(`formField`,e.form.name),SP(),ni(4),tA(cx(13,19,`FORM.EMAIL`)),ni(3),LI(`formField`,e.form.email)(`placeholder`,cx(16,21,`FORM.EMAIL`)),SP(),ni(4),tA(cx(20,23,`FORM.PHONE`)),ni(3),LI(`formField`,e.form.phone)(`placeholder`,cx(23,25,`APP.CONCIERGE.CONTACTS_PHONE_PLACEHOLDER`)),SP(),ni(4),tA(cx(27,27,`RESOURCE.LEVEL`)),ni(3),LI(`formField`,e.form.zone)(`placeholder`,cx(30,29,`COMMON.LEVEL_SELECT`)),SP(),ni(3),tA(cx(33,31,`COMMON.LEVEL_ANY`)),ni(2),X0(e.levels()),ni(4),tA(cx(39,33,`APP.CONCIERGE.CONTACTS_ROLES`)),ni(4),LI(`formField`,e.form.roles)(`placeholder`,cx(43,35,`APP.CONCIERGE.CONTACTS_ROLES_SELECT`)),SP(),ni(2),X0(e.roles()),ni(2),ud(e.can_manage_roles()?46:-1)}}function Pi(n,l){n&1&&(ds(0,`main`,5),PI(1,`mat-spinner`,26),ds(2,`p`),Xg(3),Jg(4,`translate`),Xa()()),n&2&&(ni(),LI(`diameter`,48),ni(2),tA(cx(4,2,`APP.CONCIERGE.CONTACTS_SAVING`)))}function Di(n,l){if(n&1){let e=ok();ds(0,`footer`,6)(1,`button`,27),Qt(`click`,function(){Dv(e);return Tv(dd().save())}),Xg(2),Jg(3,`translate`),Xa()()}n&2&&(ni(2),oc(` `,cx(3,1,`COMMON.SAVE`),` `))}function Fi(n,l){if(n&1){let e=ok();ds(0,`div`,28)(1,`mat-form-field`,10)(2,`input`,29),Jg(3,`translate`),sA(`ngModelChange`,function(i){Dv(e);let s=dd();return Gk(s.role_name,i)||(s.role_name=i),Tv(i)}),Xa(),EP(),Xa(),ds(4,`button`,30),Qt(`click`,function(){Dv(e);return Tv(dd().addRole())}),Xg(5),Jg(6,`translate`),Xa()()}if(n&2){let e=dd();ni(2),iA(`ngModel`,e.role_name),LI(`placeholder`,cx(3,3,`APP.CONCIERGE.CONTACTS_ROLES_NAME`)),SP(),ni(3),oc(` `,cx(6,5,`APP.CONCIERGE.CONTACTS_ROLES_SAVE`),` `)}}var hi=(()=>{class n{constructor(){this._data=p(YB),this._dialog_ref=p(fh),this._org=p(Tu),this._contacts_service=p(we),this.loading=Ee(!1),this.role_name=Ee(``),this.contact=this._data,this._user=yT(),this.can_manage_roles=Le(()=>{let e=this._user().groups||[];return e.includes(`placeos_admin`)||e.includes(`placeos_support`)}),this.roles=this._contacts_service.roles,this.model=Ee({id:this._data?.id||this._contacts_service.generateContactId(),name:this._data?.name||``,email:this._data?.email||``,phone:this._data?.phone||``,zone:this._data?.zone||``,roles:this._data?.roles||[]}),this.form=xa(this.model),this.levels=this._org.active_levels,this._tooltip=_Z(he)}async addRole(){if(!this.can_manage_roles())return;let e=this.role_name().trim();e&&(this._tooltip().close(),this.loading.set(!0),this._dialog_ref.disableClose=!0,await this._contacts_service.addRole(e),this.model.update(t=>m(l({},t),{roles:[...t.roles||[],e]})),this.role_name.set(``),this.loading.set(!1),this._dialog_ref.disableClose=!1)}setUser(e){this.model.update(t=>m(l({},t),{name:e?.name||``,email:e?.email||``,phone:e?.phone||``}))}async save(){this.loading.set(!0),this._dialog_ref.disableClose=!0;let e=this.model(),t={id:e.id,name:e.name,email:e.email,phone:e.phone,zone:e.zone,roles:e.roles||[]},i=await this._contacts_service.saveContact(t);this._dialog_ref.disableClose=!1,this.loading.set(!1),i&&this._dialog_ref.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`emergency-contact-modal`]],viewQuery:function(t,i){t&1&&HI(i._tooltip,he,5),t&2&&fk()},decls:10,vars:6,consts:[[`role_form`,``],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[1,`w-xl`,`p-4`],[`loading`,``,1,`flex`,`h-64`,`flex-col`,`items-center`,`justify-center`],[1,`border-base-200`,`flex`,`items-center`,`justify-end`,`border-t`,`px-4`,`py-2`],[`ngModel`,``,1,`mb-4`,3,`ngModelChange`,`ngModelOptions`],[1,`flex`,`flex-col`],[`for`,`name`],[`appearance`,`outline`],[`matInput`,``,`placeholder`,`Full name`,3,`formField`],[1,`flex`,`items-center`,`space-x-4`],[1,`flex`,`flex-1`,`flex-col`],[`for`,`email`],[`matInput`,``,`type`,`email`,3,`formField`,`placeholder`],[`matInput`,``,`type`,`tel`,3,`formField`,`placeholder`],[`for`,`zone`],[3,`formField`,`placeholder`],[`value`,``],[3,`value`],[`for`,`roles`],[`appearance`,`outline`,1,`no-subscript`,`flex-1`],[`multiple`,``,3,`formField`,`placeholder`],[3,`matTooltip`],[`icon`,``,`default`,``,`matRipple`,``,`customTooltip`,``,3,`content`],[1,`mb-4`,3,`diameter`],[`btn`,``,`matRipple`,``,1,`w-48`,3,`click`],[1,`bg-base-100`,`rounded-sm`,`p-4`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`]],template:function(t,i){t&1&&(ds(0,`header`,1)(1,`h2`,2),Xg(2),Jg(3,`translate`),Xa(),ld(4,Ti,3,0,`button`,3),Xa(),ld(5,Ai,47,38,`main`,4)(6,Pi,5,4,`main`,5),ld(7,Di,4,3,`footer`,6),Es(8,Fi,7,7,`ng-template`,null,0,ux)),t&2&&(ni(2),oc(` `,cx(3,4,i.contact?`APP.CONCIERGE.CONTACTS_EDIT`:`APP.CONCIERGE.CONTACTS_NEW`),` `),ni(2),ud(i.loading()?-1:4),ni(),ud(i.loading()?6:5),ni(2),ud(i.loading()?-1:7))},dependencies:[Noe,yoe,Eoe,Wt,qn,fd,pd,$t,jt,rT,Da,np,TX,SX,zC,_X,EX,SU,pU,Rs,ut,qt,he,Ft$1,Yt,mt,f],encapsulation:2})}}return n})();var Li=(n,l)=>l+n;function zi(n,l){n&1&&(ds(0,`button`,3)(1,`icon`),Xg(2,`close`),Xa()())}function Vi(n,l){if(n&1){let e=ok();ds(0,`div`,5)(1,`div`,10),Xg(2),Xa(),ds(3,`button`,11),Qt(`click`,function(){let i=Dv(e).$implicit,s=dd();return s.active.set(i),Tv(s.role_name.set(i))}),ds(4,`icon`),Xg(5,`edit`),Xa()(),ds(6,`button`,12),Qt(`click`,function(){let i=Dv(e).$implicit;return Tv(dd().removeRole(i))}),ds(7,`icon`),Xg(8,`delete`),Xa()()()}if(n&2){let e=l.$implicit;dd();let t=hk(16);ni(2),tA(e),ni(),LI(`content`,t)}}function Bi(n,l){if(n&1){let e=ok();ds(0,`div`,13)(1,`mat-form-field`,14)(2,`input`,15),Jg(3,`translate`),sA(`ngModelChange`,function(i){Dv(e);let s=dd();return Gk(s.role_name,i)||(s.role_name=i),Tv(i)}),Xa(),EP(),Xa(),ds(4,`button`,16),Qt(`click`,function(){Dv(e);return Tv(dd().updateRoles())}),Xg(5),Jg(6,`translate`),Xa()()}if(n&2){let e=dd();ni(2),iA(`ngModel`,e.role_name),LI(`placeholder`,cx(3,3,`APP.CONCIERGE.CONTACTS_ROLES_NAME`)),SP(),ni(3),oc(` `,cx(6,5,`APP.CONCIERGE.CONTACTS_ROLES_SAVE`),` `)}}var gi=(()=>{class n{constructor(){this._dialog_ref=p(fh),this._contacts_service=p(we),this.active=Ee(``),this.role_name=Ee(``),this.loading=Ee(!1),this.roles=this._contacts_service.roles,this._tooltip=_Z(he)}async removeRole(e){e&&(this.loading.set(!0),this._dialog_ref.disableClose=!0,await this._contacts_service.removeRole(e),this.loading.set(!1),this._dialog_ref.disableClose=!1)}async updateRoles(){let e=this.role_name().trim();e&&(this.loading.set(!0),this._tooltip().close(),this._dialog_ref.disableClose=!0,this.active()?await this._contacts_service.renameRole(this.active(),e):await this._contacts_service.addRole(e),this.role_name.set(``),this.active.set(``),this.loading.set(!1),this._dialog_ref.disableClose=!1)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`role-management-modal`]],viewQuery:function(t,i){t&1&&HI(i._tooltip,he,5),t&2&&fk()},decls:17,vars:8,consts:[[`role_form`,``],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[1,`h-128`,`max-h-[65vh]`,`min-w-md`,`overflow-y-auto`],[1,`hover:bg-base-200:bg-base-300`,`border-base-200`,`m-2`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`border`,`p-2`],[1,`border-base-200`,`border-t`],[`btn`,``,`matRipple`,``,`customTooltip`,``,1,`m-2`,`flex`,`w-[calc(100%-1rem)]`,`items-center`,`justify-center`,`space-x-2`,3,`click`,`content`],[1,`truncate`,`pl-2`],[1,`text-2xl`],[1,`flex-1`,`truncate`,`px-2`],[`icon`,``,`matRipple`,``,`customTooltip`,``,1,`border-secondary`,`text-secondary`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`,`content`],[`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`],[1,`bg-base-100`,`rounded-sm`,`p-4`],[`appearance`,`outline`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`]],template:function(t,i){if(t&1){let s=ok();ds(0,`header`,1)(1,`h2`,2),Xg(2),Jg(3,`translate`),Xa(),ld(4,zi,3,0,`button`,3),Xa(),ds(5,`main`,4),Q0(6,Vi,9,2,`div`,5,Li),Xa(),ds(8,`footer`,6)(9,`button`,7),Qt(`click`,function(){return Dv(s),i.active.set(``),Tv(i.role_name.set(``))}),ds(10,`div`,8),Xg(11),Jg(12,`translate`),Xa(),ds(13,`icon`,9),Xg(14,`add`),Xa()()(),Es(15,Bi,7,7,`ng-template`,null,0,ux)}if(t&2){let s=hk(16);ni(2),oc(` `,cx(3,4,`APP.CONCIERGE.CONTACTS_ROLES_MANAGE`),` `),ni(2),ud(i.loading()?-1:4),ni(2),X0(i.roles()),ni(3),LI(`content`,s),ni(2),oc(` `,cx(12,6,`APP.CONCIERGE.CONTACTS_ROLES_ADD`),` `)}},dependencies:[TX,zC,_X,SU,yoe,Eoe,Da,np,Wt,qn,fd,pd,Noe,he,f],encapsulation:2})}}return n})();var Gi=(n,l)=>({key:`name`,name:n,content:l});var qi=(n,l)=>({key:`roles`,name:n,content:l,sortable:!1});var ji=(n,l)=>({key:`zone`,name:n,content:l,sortable:!1});var Ui=n=>({key:`actions`,name:` `,content:n,size:`6rem`,sortable:!1});var Wi=(n,l,e,t)=>[n,l,e,t];var $i=(n,l)=>l+n;function Hi(n,l){if(n&1&&(ds(0,`mat-option`,19),Xg(1),Xa()),n&2){let e=l.$implicit;LI(`value`,e),ni(),oc(` `,e,` `)}}function Yi(n,l){if(n&1){let e=ok();ds(0,`div`,9)(1,`button`,23),Jg(2,`translate`),Qt(`click`,function(){Dv(e);return Tv(dd().manageRoles())}),ds(3,`icon`),Xg(4,`list_alt`),Xa()()()}n&2&&(ni(),LI(`matTooltip`,cx(2,1,`APP.CONCIERGE.CONTACTS_ROLES_MANAGE`)))}function Qi(n,l){if(n&1){let e=ok();ds(0,`button`,24),Qt(`click`,function(){let i=Dv(e).row;return Tv(dd().copyToClipboard(i.email))}),ds(1,`div`,25),Xg(2),Xa(),ds(3,`div`,26),Xg(4),Xa()()}if(n&2){let e=l.row;ni(2),tA(e.name),ni(2),oc(` `,e.email,` `)}}function Xi(n,l){if(n&1&&(ds(0,`span`,28),Xg(1),Xa()),n&2){let e=l.$implicit;ni(),oc(` `,e,` `)}}function Ji(n,l){if(n&1&&(ds(0,`div`,27),Q0(1,Xi,2,1,`span`,28,Z0),Xa()),n&2){let e=l.data;ni(),X0(e)}}function Zi(n,l){if(n&1&&(ds(0,`div`,29),Xg(1),Jg(2,`level`),Xa()),n&2){let e=l.data;ni(),oc(` `,e?cx(2,1,e)?.display_name:`All`,` `)}}function Ki(n,l){if(n&1){let e=ok();ds(0,`div`,30)(1,`button`,23),Jg(2,`translate`),Qt(`click`,function(){let i=Dv(e).row;return Tv(dd().editContact(i))}),ds(3,`icon`),Xg(4,`edit`),Xa()(),ds(5,`button`,31),Jg(6,`translate`),Qt(`click`,function(){let i=Dv(e).row;return Tv(dd().removeContact(i))}),ds(7,`icon`),Xg(8,`delete`),Xa()()()}n&2&&(ni(),LI(`matTooltip`,cx(2,2,`APP.CONCIERGE.CONTACTS_EDIT`)),ni(4),LI(`matTooltip`,cx(6,4,`APP.CONCIERGE.CONTACTS_REMOVE`)))}var _i=(()=>{class n{constructor(){this._org=p(Tu),this._dialog=p(uN),this._clipboard=p(sb),this._contacts_service=p(we),this.search=Ee(``),this.role_filter=Ee(``),this._user=yT(),this.can_manage_roles=Le(()=>{let e=this._user().groups||[];return e.includes(`placeos_admin`)||e.includes(`placeos_support`)}),this.roles=this._contacts_service.roles,this.contacts=this._contacts_service.contacts,this.filtered_contacts=Le(()=>{let e=this.role_filter();return this.contacts().filter(t=>!e||t.roles.includes(e))}),this.copyToClipboard=e=>{this._clipboard.copy(e)&&_ce(`User's email copied to clipboard.`)}}ngOnInit(){this.checkMigration()}async checkMigration(){if(await this._contacts_service.needsMigration()){let t=await re$1({title:`Migrate Emergency Contacts`,content:`Emergency contacts data from the old system was found. Would you like to migrate it to the new system?`,icon:{content:`sync`}},this._dialog);t.reason===`done`&&(t.loading(`Migrating contacts...`),await this._contacts_service.migrateFromMetadata()),t.close()}}manageRoles(){if(!this.can_manage_roles())return;this._dialog.open(gi,{}).afterClosed().subscribe(()=>this._contacts_service.refresh())}editContact(e){this._dialog.open(hi,{data:e}).afterClosed().subscribe(()=>this._contacts_service.refresh())}async removeContact(e){let t=await re$1({title:`Remove Emergency Contact`,content:`Are you sure you want to remove ${e.name} from the emergency contacts?`,icon:{content:`delete`}},this._dialog);t.reason===`done`&&(t.loading(`Removing contact...`),await this._contacts_service.deleteContact(e.id),t.close())}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[``,`app-emergency-contacts`,``]],decls:46,vars:47,consts:[[`person_template`,``],[`roles_template`,``],[`zone_template`,``],[`actions_template`,``],[1,`flex`,`h-px`,`flex-1`],[1,`flex`,`h-full`,`w-1/2`,`flex-1`,`flex-col`],[`topbar`,``,1,`flex`,`flex-col`,`px-8`,`py-4`],[1,`flex`,`items-center`,`justify-between`],[1,`text-2xl`,`font-medium`],[1,`flex`,`items-center`,`space-x-2`],[`appearance`,`outline`,1,`no-subscript`],[`matPrefix`,``,1,`text-2xl`],[`matInput`,``,`data-shortcut`,`search`,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,`data-shortcut`,`new`,1,`space-x-2`,3,`click`],[1,`text-2xl`],[1,`pr-2`],[1,`mt-2`,`flex`,`items-center`,`justify-between`,`py-2`],[3,`ngModelChange`,`ngModel`,`placeholder`],[`value`,``],[3,`value`],[1,`h-1/2`,`w-full`,`flex-1`,`overflow-auto`,`px-8`],[1,`block`,`min-w-208`,`text-sm`,3,`data`,`filter`,`empty_message`,`columns`,`sortable`],[1,`h-12`,`w-full`],[`icon`,``,`default`,``,`matRipple`,``,3,`click`,`matTooltip`],[1,`px-4`,`py-2`,`text-left`,`leading-tight`,3,`click`],[1,``],[1,`font-mono`,`text-[0.625rem]`,`opacity-30`],[1,`flex`,`flex-wrap`,`p-2`],[1,`bg-info`,`text-info-content`,`m-1`,`rounded-2xl`,`px-2`,`py-1`,`font-mono`,`text-xs`],[1,`p-4`],[1,`flex`,`w-full`,`items-center`,`justify-end`,`space-x-2`,`p-2`],[`icon`,``,`default`,``,`matRipple`,``,`error`,``,3,`click`,`matTooltip`]],template:function(t,i){if(t&1){let s=ok();PI(0,`app-topbar`),ds(1,`div`,4),PI(2,`app-sidebar`),ds(3,`main`,5)(4,`section`,6)(5,`div`,7)(6,`h2`,8),Xg(7),Jg(8,`translate`),Xa(),ds(9,`div`,9)(10,`mat-form-field`,10)(11,`icon`,11),Xg(12,` search `),Xa(),ds(13,`input`,12),Jg(14,`translate`),sA(`ngModelChange`,function(w){return Dv(s),Gk(i.search,w)||(i.search=w),Tv(w)}),Xa(),EP(),Xa(),ds(15,`button`,13),Qt(`click`,function(){return i.editContact()}),ds(16,`icon`,14),Xg(17,`add`),Xa(),ds(18,`div`,15),Xg(19),Jg(20,`translate`),Xa()()()(),ds(21,`div`,16)(22,`mat-form-field`,10)(23,`mat-select`,17),Jg(24,`translate`),sA(`ngModelChange`,function(w){return Dv(s),Gk(i.role_filter,w)||(i.role_filter=w),Tv(w)}),ds(25,`mat-option`,18),Xg(26),Jg(27,`translate`),Xa(),Q0(28,Hi,2,2,`mat-option`,19,$i),Xa(),EP(),Xa(),ld(30,Yi,5,3,`div`,9),Xa()(),ds(31,`section`,20),PI(32,`simple-table`,21),Jg(33,`translate`),Jg(34,`translate`),Jg(35,`translate`),Jg(36,`translate`),PI(37,`div`,22),Es(38,Qi,5,2,`ng-template`,null,0,ux)(40,Ji,3,0,`ng-template`,null,1,ux)(42,Zi,3,3,`ng-template`,null,2,ux)(44,Ki,9,6,`ng-template`,null,3,ux),Xa()()()}if(t&2){let s=hk(39),_=hk(41),w=hk(43),ae=hk(45);ni(7),oc(` `,cx(8,13,`APP.CONCIERGE.CONTACTS_HEADER`),` `),ni(6),iA(`ngModel`,i.search),LI(`placeholder`,cx(14,15,`APP.CONCIERGE.CONTACTS_FILTER`)),SP(),ni(6),oc(` `,cx(20,17,`APP.CONCIERGE.CONTACTS_ADD`),` `),ni(4),iA(`ngModel`,i.role_filter),LI(`placeholder`,cx(24,19,`APP.CONCIERGE.CONTACTS_ROLES_ALL`)),SP(),ni(3),tA(cx(27,21,`APP.CONCIERGE.CONTACTS_ROLES_ALL`)),ni(2),X0(i.roles()),ni(2),ud(i.can_manage_roles()?30:-1),ni(2),LI(`data`,i.filtered_contacts())(`filter`,i.search())(`empty_message`,cx(33,23,i.search()?`APP.CONCIERGE.CONTACTS_SEARCH_EMPTY`:`APP.CONCIERGE.CONTACTS_EMPTY`))(`columns`,Jk(42,Wi,Qk(31,Gi,cx(34,25,`COMMON.PERSON`),s),Qk(34,qi,cx(35,27,`APP.CONCIERGE.CONTACTS_ROLES`),_),Qk(37,ji,cx(36,29,`RESOURCE.LEVEL`),w),Zk(40,Ui,ae)))(`sortable`,!0)}},dependencies:[Da,np,Noe,Yt,mt,Je,Wt,qn,$r,$t,jt,rT,fd,pd,Kb,Vb,TX,zC,_X,SU,f,f$1],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--%NS%base-100)}
/*# sourceMappingURL=emergency-contacts.component.css.map */`]})}}return n})();var ne=(()=>{class n extends Ge$1{constructor(){super(),this._org=p(Tu),this._onsite={},this._events={},this._users=Ee([]),this._poll=Ee(0),this.loading=Ee(!1),this.filters=Ee({}),this.search=Ee(``),this.user_events=Ee({}),this.filtered_users=Le(()=>{let e=this.search().toLowerCase(),t=this._users(),i=this.filters();return t.filter(s=>(!e||s.name.toLowerCase().includes(e)||s.email.toLowerCase().includes(e))&&(!i.only_onsite||this._onsite[s.email]))}),this.loadUsers(),vt(()=>{this._org.active_building(),this._poll(),this.timeout(`load-events`,()=>this._loadEvents(),300)})}setFilters(e){this.filters.set(l(l({},this.filters()),e))}setSearchString(e){this.search.set(e)}startPolling(e=3*br){let t=Math.max(e,3*br);this._poll.update(i=>i+1),this.interval(`poll`,()=>this._poll.update(i=>i+1),t)}stopPolling(){this.clearInterval(`poll`)}async checkin(e){let t=await le({booking_start:Math.floor(new Date().valueOf()/1e3),booking_end:Math.floor(xy(new Date).valueOf()/1e3),asset_id:e.email,title:`Checked-in Onsite`,description:this._org.building.display_name||this._org.building.name,zones:[this._org.building.id],booking_type:`staff`});await ne$1(t.id,!0),this._events[e.email]=t,this._onsite[e.email]=!0}async checkout(e){let t=this._events[e.email];if(t){let i=await le(m(l({},t.toJSON()),{booking_end:Math.floor(new Date().valueOf()/1e3)}));await ne$1(i.id,!1),this._events[e.email]=i,this._onsite[e.email]=!1}}async _loadEvents(){this.loading.set(!0);let e=await S({period_start:lt(on$1(Date.now())),period_end:lt(xy(Date.now())),type:`staff`}),t={},i=new Date().valueOf();for(let s of e)Zce(i,i,s.date,s.date+s.duration*60*1e3)&&(t[s.asset_id]=s.checked_in,this._events[s.asset_id]=s);this._onsite=t,this.user_events.set(t),this.loading.set(!1)}async loadUsers(){let e=await R(``);e.sort((t,i)=>t.name.localeCompare(i.name)),this._users.set(e)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=G({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();function en(n,l){n&1&&(ds(0,`div`,5),Xg(1),Jg(2,`translate`),Xa()),n&2&&(ni(),oc(` `,cx(2,1,`APP.CONCIERGE.DIRECTORY_ONSITE`),` `))}function tn(n,l){if(n&1){let e=ok();ds(0,`div`,0),PI(1,`a-user-avatar`,1),ds(2,`div`,2)(3,`div`,3),Xg(4),Xa(),ds(5,`div`,4),Xg(6),Xa()(),ld(7,en,3,3,`div`,5),ds(8,`div`,6)(9,`action-icon`,7),Jg(10,`translate`),Qt(`click`,function(){Dv(e);let i=dd();return Tv(i.onsite()?i.checkout():i.checkin())}),Xa(),ds(11,`a`,8),Jg(12,`translate`),ds(13,`icon`),Xg(14,`email`),Xa()(),ds(15,`a`,8),Jg(16,`translate`),ds(17,`icon`),Xg(18,`call`),Xa()()()()}if(n&2){let e=dd();ni(),LI(`user`,e.user()),ni(3),tA(e.user()?.name),ni(2),oc(` `,e.user()?.email,` `),ni(),ud(e.onsite()?7:-1),ni(2),LI(`matTooltip`,cx(10,13,e.onsite()?`COMMON.CHECK_IN`:`COMMON.CHECK_OUT`))(`loading`,e.loading())(`content`,e.onsite()?`event_busy`:`event_available`),ni(2),LI(`matTooltip`,cx(12,15,`APP.CONCIERGE.DIRECTORY_EMAIL`))(`href`,`mailto:`+e.user()?.email,Zu),yn(`disabled`,!e.user()?.email),ni(4),LI(`matTooltip`,cx(16,17,`APP.CONCIERGE.DIRECTORY_PHONE`))(`href`,`tel:`+e.user()?.phone,Zu),yn(`disabled`,!e.user()?.phone)}}var ui=(()=>{class n{constructor(){this._state=p(ne),this.user=v_(void 0),this.onsite=v_(void 0),this.loading=Ee(!1),this.checkin=async()=>{this.loading.set(!0),await this._state.checkin(this.user()).catch(e=>Ece(Mi$1(`APP.CONCIERGE.DIRECTORY_CHECKIN_ERROR`,{error:e}))),this.loading.set(!1)},this.checkout=async()=>{this.loading.set(!0),await this._state.checkout(this.user()).catch(e=>Mi$1(`APP.CONCIERGE.DIRECTORY_CHECKOUT_ERROR`,{error:e})),this.loading.set(!1)}}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`staff-details`]],inputs:{user:[1,`user`],onsite:[1,`onsite`]},decls:1,vars:1,consts:[[`details`,``,1,`border-base-200`,`bg-base-100`,`flex`,`w-full`,`items-center`,`border-b`,`px-4`,`py-2`,`hover:opacity-80`],[3,`user`],[1,`flex`,`flex-1`,`flex-col`],[1,`px-2`],[1,`text-opacity-50`,`px-2`,`text-xs`],[1,`px-4`,`text-xs`,`opacity-50`],[1,`flex`,`items-center`],[3,`click`,`matTooltip`,`loading`,`content`],[`icon`,``,`matRipple`,``,3,`matTooltip`,`href`]],template:function(t,i){t&1&&ld(0,tn,19,19,`div`,0),t&2&&ud(i.user()?0:-1)},dependencies:[wn,ci,Noe,Yt,mt,f],encapsulation:2})}}return n})();var an=[`container`];function on(n,l){if(n&1){let e=ok();ds(0,`div`,6),Qt(`click`,function(){let i=Dv(e).$implicit;return Tv(dd().scrollTo(i))}),Xg(1),Xa()}if(n&2){let e=l.$implicit,t=dd();_r(`disabled`,t.user_list()[e].length<=0)(`active`,e===t.active_group()),ni(),oc(` `,e,` `)}}function rn(n,l){if(n&1&&PI(0,`staff-details`,8),n&2){let e=l.$implicit,t=l.$index,i=dd(2).$implicit,s=dd(2);LI(`id`,`letter-`+i+`-`+t)(`user`,e)(`onsite`,s.events()?s.events()[e.email]:!1)}}function sn(n,l){if(n&1&&(ds(0,`div`,7),Xg(1),Xa(),Q0(2,rn,1,3,`staff-details`,8,Z0)),n&2){let e=dd().$implicit,t=dd(2);LI(`id`,`letter-`+(e===`#`?`0`:e)),ni(),oc(` `,e,` `),ni(),X0(t.user_list()[e])}}function ln(n,l){if(n&1&&ld(0,sn,4,2),n&2){let e=l.$implicit;ud(dd(2).user_list()[e].length?0:-1)}}function cn(n,l){if(n&1&&Q0(0,ln,1,1,null,null,Z0),n&2)X0(dd().groups)}function dn(n,l){n&1&&(ds(0,`div`,4)(1,`p`),Xg(2),Jg(3,`translate`),Xa()()),n&2&&(ni(2),oc(` `,cx(3,1,`APP.CONCIERGE.DIRECTORY_SEARCH_EMPTY`),` `))}function mn(n,l){n&1&&PI(0,`mat-progress-bar`,5)}var qe=`#abcdefghijklmnopqrstuvwxyz`.split(``);var fi=(()=>{class n extends Ge$1{constructor(){super(),this._state=p(ne),this.active_group=Ee(`#`),this.groups=qe,this.events=this._state.user_events,this.loading=this._state.loading,this.filtered_users=this._state.filtered_users,this.user_count=Le(()=>this.filtered_users().length),this.user_list=Le(()=>{let e=this.filtered_users()||[],t={};for(let i of qe)t[i]=e.filter(s=>s.name.toLowerCase()[0].startsWith(i)||i===`#`&&!qe.includes(s.name.toLowerCase()[0]));return t}),this._el=_Z(`container`),vt(e=>{this.user_list(),this.timeout(`scroll`,()=>this.onScroll({}),30),e(()=>this.clearTimeout(`scroll`))})}onScroll(e){let t=this._el();if(!t)return;let i=t.nativeElement.scrollTop;for(let s of qe){let _=document.querySelector(`#letter-${s===`#`?`0`:s}`);if(_){if(_.offsetTop-i>0)break;this.active_group.set(s)}}}scrollTo(e){let t=document.querySelector(`#letter-${e}-0`);t&&(t.scrollIntoView({behavior:`smooth`,block:`center`}),this.active_group.set(e))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`staff-listings`]],viewQuery:function(t,i){t&1&&HI(i._el,an,5),t&2&&fk()},features:[fe],decls:8,vars:2,consts:[[`container`,``],[1,`flex`,`w-full`,`items-center`,`justify-center`,`p-2`],[`letter`,``,1,`flex`,`h-6`,`w-6`,`cursor-pointer`,`items-center`,`justify-center`,`text-xs`,`capitalize`,3,`disabled`,`active`],[1,`relative`,`w-full`,`flex-1`,`overflow-auto`,2,`height`,`50%`,3,`scroll`],[1,`absolute`,`inset-0`,`flex`,`flex-col`,`items-center`,`justify-center`],[`mode`,`indeterminate`],[`letter`,``,1,`flex`,`h-6`,`w-6`,`cursor-pointer`,`items-center`,`justify-center`,`text-xs`,`capitalize`,3,`click`],[`group`,``,1,`border-base-300`,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`rounded-lg`,`border`,`text-sm`,`font-medium`,`capitalize`,3,`id`],[3,`id`,`user`,`onsite`]],template:function(t,i){t&1&&(ds(0,`div`,1),Q0(1,on,2,5,`div`,2,Z0),Xa(),ds(3,`div`,3,0),Qt(`scroll`,function(_){return i.onScroll(_)}),ld(5,cn,2,0)(6,dn,4,3,`div`,4),Xa(),ld(7,mn,1,0,`mat-progress-bar`,5)),t&2&&(ni(),X0(i.groups),ni(4),ud(i.user_count()?5:6),ni(2),ud(i.loading()?7:-1))},dependencies:[Z,L,ui,f],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:50%}[letter][_ngcontent-%COMP%]{transition:font-size .2s,color .2s}[group][_ngcontent-%COMP%]{border-color:#ccc;padding:.5rem 1.65rem}.disabled[_ngcontent-%COMP%]{opacity:.2;pointer-events:none}.active[_ngcontent-%COMP%]{font-size:1.25rem;opacity:1;color:#d81b60}
/*# sourceMappingURL=staff-listing.component.css.map */`]})}}return n})();var pn=[`switch`];var hn=[`*`];function gn(n,l){n&1&&(ds(0,`span`,11),Pv(),ds(1,`svg`,13),PI(2,`path`,14),Xa(),ds(3,`svg`,15),PI(4,`path`,16),Xa()())}var _n=new D(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var je=class{source;checked;constructor(l,e){this.source=l,this.checked=e}};var nt=(()=>{class n{_elementRef=p(ie);_focusMonitor=p(rh);_changeDetectorRef=p(Sn);defaults=p(_n);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new je(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Oy();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new re;toggleChange=new re;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){p(ao).load(sl);let e=p(new yA(`tabindex`),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||`accent`,this.id=this._uniqueId=p(Cr).getId(`mat-mdc-slide-toggle-`),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new je(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(t){return new(t||n)};static ɵcmp=Ft({type:n,selectors:[[`mat-slide-toggle`]],viewQuery:function(t,i){if(t&1&&Ts(pn,5),t&2){let s;nc(s=rc())&&(i._switchElement=s.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(t,i){t&2&&(Ds(`id`,i.id),yn(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),Qg(i.color?`mat-`+i.color:``),_r(`mat-mdc-slide-toggle-focused`,i._focused)(`mat-mdc-slide-toggle-checked`,i.checked)(`mat-slide-toggle-full-width`,i.fullWidth)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,ct],color:`color`,disabled:[2,`disabled`,`disabled`,ct],fullWidth:[2,`fullWidth`,`fullWidth`,ct],disableRipple:[2,`disableRipple`,`disableRipple`,ct],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:qx(e)],checked:[2,`checked`,`checked`,ct],hideIcon:[2,`hideIcon`,`hideIcon`,ct],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ct]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[Qe([{provide:li,useExisting:Ye(()=>n),multi:!0},{provide:ro,useExisting:n,multi:!0}]),dt],ngContentSelectors:hn,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(t,i){if(t&1&&(ec(),ds(0,`div`,1)(1,`button`,2,0),Qt(`click`,function(){return i._handleClick()}),PI(3,`div`,3)(4,`span`,4),ds(5,`span`,5)(6,`span`,6)(7,`span`,7),PI(8,`span`,8),Xa(),ds(9,`span`,9),PI(10,`span`,10),Xa(),ld(11,gn,5,0,`span`,11),Xa()()(),ds(12,`label`,12),Qt(`click`,function(_){return _.stopPropagation()}),tc(13),Xa()()),t&2){let s=hk(2);LI(`labelPosition`,i.labelPosition),ni(),_r(`mdc-switch--selected`,i.checked)(`mdc-switch--unselected`,!i.checked)(`mdc-switch--checked`,i.checked)(`mdc-switch--disabled`,i.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,i.disabledInteractive),LI(`tabIndex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex)(`disabled`,i.disabled&&!i.disabledInteractive),yn(`id`,i.buttonId)(`name`,i.name)(`aria-label`,i.ariaLabel)(`aria-labelledby`,i._getAriaLabelledBy())(`aria-describedby`,i.ariaDescribedby)(`aria-required`,i.required||null)(`aria-checked`,i.checked)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null),ni(9),LI(`matRippleTrigger`,s)(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleCentered`,!0),ni(),ud(i.hideIcon?-1:11),ni(),LI(`for`,i.buttonId),yn(`id`,i._labelId)}},dependencies:[np,qK],styles:[`.mdc-switch {
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
`],encapsulation:2})}return n})();var vi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Ae({type:n});static ɵinj=Ie({imports:[nt,Si$1]})}return n})();var fn=(n,l)=>l.id;function vn(n,l){if(n&1&&(ds(0,`mat-option`,3),Xg(1),Xa()),n&2){let e=l.$implicit;LI(`value`,e.id),ni(),oc(` `,e.display_name||e.name,` `)}}var bi=(()=>{class n extends Ge$1{constructor(){super(),this._state=p(ne),this._org=p(Tu),this._route=p(Re),this._router=p(ft),this.zones=Ee([]),this.levels=Ee([]),this.filters=Ee({}),this.setDate=e=>this._state.setFilters({date:e}),this.setFilters=e=>this._state.setFilters(e),this.setSearch=e=>this._state.setSearchString(e),this.updateZones=e=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:e.join(`,`)},queryParamsHandling:`merge`}),this._state.setFilters({zones:e})},vt(()=>{this.filters.set(this._state.filters()||{})}),vt(()=>{let e=this._org.active_levels()||[];J(()=>{this.levels.set(e);let t=this.zones().filter(i=>e.find(s=>s.id===i));!t.length&&e.length&&t.push(e[0].id),this.zones.set(t),this.updateZones(t)})})}async ngOnInit(){await this._org.waitUntilInitialised(),this.subscription(`route.query`,this._route.queryParamMap.subscribe(e=>{if(e.has(`zone_ids`)){let t=e.get(`zone_ids`).split(`,`);if(t.length){let i=this._org.levelWithID(t);if(!i)return;this._org.building=this._org.buildings.find(s=>s.id===i.parent_id),this.zones.set(t)}}})),this.setSearch(``)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`staff-topbar`]],features:[fe],decls:12,vars:8,consts:[[1,`border-base-200`,`bg-base-100`,`flex`,`items-center`,`space-x-4`,`border-b`,`p-4`],[`appearance`,`outline`,1,`no-subscript`,`w-48`],[`multiple`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[3,`value`],[1,`m-2`,3,`ngModelChange`,`ngModel`],[1,`text-xs`],[1,`w-2`,`flex-1`],[1,`mr-2`,3,`modelChange`]],template:function(t,i){t&1&&(ds(0,`div`,0)(1,`mat-form-field`,1)(2,`mat-select`,2),Jg(3,`translate`),sA(`ngModelChange`,function(_){return Gk(i.zones,_)||(i.zones=_),_}),Qt(`ngModelChange`,function(_){return i.updateZones(_)}),Q0(4,vn,2,2,`mat-option`,3,fn),Xa(),EP(),Xa(),ds(6,`mat-slide-toggle`,4),Qt(`ngModelChange`,function(_){return i.setFilters({only_onsite:_})}),ds(7,`div`,5),Xg(8),Jg(9,`translate`),Xa()(),EP(),PI(10,`div`,6),ds(11,`searchbar`,7),Qt(`modelChange`,function(_){return i.setSearch(_)}),Xa()()),t&2&&(ni(2),iA(`ngModel`,i.zones),LI(`placeholder`,cx(3,4,`COMMON.LEVEL_ALL`)),SP(),ni(2),X0(i.levels()),ni(2),LI(`ngModel`,i.filters()?.only_onsite),SP(),ni(2),oc(` `,cx(9,6,`APP.CONCIERGE.DIRECTORY_ONSITE_ONLY`),` `))},dependencies:[vi,nt,z,Wt,qn,$t,jt,rT,TX,_X,SU,f],styles:[`mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}
/*# sourceMappingURL=staff-topbar.component.css.map */`]})}}return n})();function bn(n,l){n&1&&PI(0,`mat-progress-bar`,4)}var Oo=[{path:``,component:(()=>{class n{constructor(){this._state=p(ne),this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[``,`app-new-staff`,``]],decls:7,vars:1,consts:[[1,`flex`,`h-px`,`flex-1`],[1,`flex`,`h-full`,`w-1/2`,`flex-1`,`flex-col`],[1,`w-full`],[1,`h-0`,`w-full`,`flex-1`],[`mode`,`indeterminate`,1,`w-full`]],template:function(t,i){t&1&&(PI(0,`app-topbar`),ds(1,`div`,0),PI(2,`app-sidebar`),ds(3,`main`,1),PI(4,`staff-topbar`,2)(5,`staff-listings`,3),ld(6,bn,1,0,`mat-progress-bar`,4),Xa()()),t&2&&(ni(6),ud(i.loading()?6:-1))},dependencies:[Z,L,Kb,Vb,bi,fi],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--%NS%base-100)}
/*# sourceMappingURL=staff.component.css.map */`]})}}return n})(),title:`Staff`},{path:`emergency-contacts`,component:_i,title:`Emergency Contacts`}];export{Oo as ROUTES};
//# debugId=98e7c3d4-dcfe-53aa-ac36-f29a7eec56fe
//# sourceMappingURL=staff.routes-DHTZxkCc.js.map