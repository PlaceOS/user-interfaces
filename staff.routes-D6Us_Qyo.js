import{$ as DE,$a as Zn,$r as Pn,Ai as Tke,At as GC,Au as vH,Br as Ox,Ca as XF,Cc as ke,Cd as l,D as Ay,Da as Xe,Di as St,Ea as XT,Ec as kn,Ei as Sr,Fa as YC,Fc as lm,G as Cit,Gl as rq,Gn as LJe,Go as d1e,Gs as hfe,Hc as m,Hl as re,I as Bt,Ii as UW,Is as gp,J as Ct,Jt as He,Ka as ZA,Kt as HS,Ll as r1e,Ln as Kl,Lu as w,Ma as Xt,Mu as vke,Nl as qj,No as bt,Nr as Oe,Pt as Gl,Pu as vm,R as C0,Ri as Ue,Rl as r7,Rs as gu,Rt as Gs,Sl as pu,Tn as Jt,Ts as fe,Ur as PJe,Wn as L,Xl as s9,Xr as Pe,Xs as i9,Yc as mu,Yn as Le,Za as Zl,Zc as n7,Zi as Vnt,Zn as Lo,_n as JF,al as o9,at as Dn,b as Ae,bd as zo,bn as Jit,br as Ne,c as $e,ci as QT,cn as Ii$1,co as _p,fc as jee,fd as ye,fo as a9,gn as J4,gu as tn$1,hs as ei,ia as W9,il as o7,io as _he,it as Dke,iu as so,jl as qe$1,lc as jT,ll as oe,lo as _u,lt as Dy,m as $rt,md as yot,na as W1e,nu as sl,od as xn,ot as Dnt,ou as t6,pa as Wn,pd as yi$1,pr as N,ps as ef,pt as Ee,q as Cn,ra as W2,rl as o1e,rr as ME,rt as Dit,ru as sn$1,sn as Ie,so as _m,sr as Mde,su as t7,t as $,tc as iot,tr as M,vd as zS,vt as En,vu as ts,wd as m$1,wi as Ske,wo as b,wt as Fe,x as Ai$1,xo as aj,xu as uE,yi as Rt,yo as ae,za as Yo,zi as Ufe,zt as Gt}from"./chunk-CofJBFg5.js";import{c as L$1,l as Z}from"./main.js";import{_ as Xt$1,g as Wn$1,l as Lv,m as Qt,r as Ct$1,s as Iv,y as Zt}from"./chunk-U_Vppkd0.js";import{t as f}from"./chunk-7xuwjhPe.js";import{t as re$1}from"./chunk-DqDZMoU4.js";import{t as Ne$1}from"./chunk-BmODWKlo.js";import{g as me,m as j,u as ee}from"./chunk-DaRgTBfD.js";import{a as Ge$1,d as Se,f as Ue$1,g as xe}from"./chunk-HwRFxb3v.js";import{t as z}from"./chunk-BtuHJCo4.js";import"./chunk-AUowNksZ.js";import{n as R}from"./chunk-U8uWosx12.js";import{t as Ft}from"./chunk-BfSfDsu42.js";var yi=[`*`];function wi(n,l){if(n&1&&(ke(0,`div`)(1,`icon`),yi$1(2),Ue()()),n&2){let e=bt();Gs(`state center `+e.state()),fe(2),Lo(` `,e.state()===`success`?`done`:`close`,` `)}}function Si(n,l){n&1&&(ke(0,`div`,3),Bt(1,`mat-spinner`,4),Ue()),n&2&&(fe(),Dn(`diameter`,16))}var li=(()=>{class n{constructor(){this.icon=Jt(void 0),this.className=Jt(`material-symbols-rounded`),this.content=Jt(void 0),this.loading=Jt(void 0),this.disabled=Jt(void 0),this.state=Jt(``)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=ye({type:n,selectors:[[`action-icon`]],inputs:{icon:[1,`icon`],className:[1,`className`],content:[1,`content`],loading:[1,`loading`],disabled:[1,`disabled`],state:[1,`state`]},ngContentSelectors:yi,decls:6,vars:8,consts:[[`icon`,``,`matRipple`,``,`title`,``,1,`relative`,3,`disabled`],[`root`,``,3,`className`,`icon`],[3,`class`],[1,`loader`,`center`],[3,`diameter`]],template:function(t,i){t&1&&(Xt(),ke(0,`button`,0)(1,`icon`,1),yi$1(2),Pe(3),Ue(),Le(4,wi,3,3,`div`,2),Le(5,Si,2,1,`div`,3),Ue()),t&2&&(Oe(`success`,i.state()===`success`),Dn(`disabled`,i.loading()||i.disabled()),fe(),Dn(`className`,i.className())(`icon`,i.icon()),fe(),Lo(` `,i.content(),` `),fe(2),Fe(!i.loading()&&i.state()?4:-1),fe(),Fe(i.loading()?5:-1))},dependencies:[Zl,C0,Ct$1,Xt$1,Vnt],styles:[`.action-icon.fade[_ngcontent-%COMP%] > icon[_ngcontent-%COMP%]{opacity:.35}.success[_ngcontent-%COMP%]{pointer-events:none}.success[_ngcontent-%COMP%]   icon[root][_ngcontent-%COMP%]{opacity:.2}.state.success[_ngcontent-%COMP%]{color:#388e3c}.state.error[_ngcontent-%COMP%]{color:#e53935}
/*# sourceMappingURL=action-icon.component.css.map */`]})}}return n})();var Be=`_EMERGENCY_CONTACTS_`;var we=(()=>{class n{constructor(){this._org=m(jT),this._change=N(Date.now()),this.category=N(null),this.asset_type=N(null),this.contacts=N([]),this.roles=N([]),Xe(()=>{let e=this._org.active_building();this._change(),e&&this._load(e)}),this.ensureCategoryAndTypeExist()}async _load(e){let t=await this._queryCategory(e);this.category.set(t),this.roles.set(this._rolesFromCategory(t));let i=await this._queryAssetType(e,t);this.asset_type.set(i);let s=await this._queryContacts(e,i);this.contacts.set(s)}async _queryCategory(e){try{let{data:t}=await d1e({zone_id:e.id});return t.find(i=>i.name===Be)||null}catch{return null}}async _queryAssetType(e,t){if(!t)return null;try{let{data:i}=await o1e({zone_id:e.id,q:t.name});return i.find(s=>s.name===Be&&s.category_id===t.id)||null}catch{return null}}async _queryContacts(e,t){if(!t)return[];try{let{data:i}=await xe({zone_id:e.id,type_id:t.id,limit:200});return i.filter(s=>s.asset_type_id===t.id).map(s=>this.assetToContact(s))}catch{return[]}}_rolesFromCategory(e){if(!e?.description)return[];try{return JSON.parse(e.description).roles||[]}catch{return[]}}async _queryLegacyMetadata(e){try{let{details:t}=await ef(e.id,`emergency_contacts`);return t||{contacts:[],roles:[]}}catch{return{contacts:[],roles:[]}}}async ensureCategoryExists(){await this._org.waitUntilInitialised();let e=this._org.building;if(!e)return null;let t=await this._queryCategory(e);if(t)return t;try{let i=await Se(vm(new _m({name:Be,description:JSON.stringify({roles:[]}),hidden:!0}),[0,void 0,``,null]));return this._change.set(Date.now()),i}catch(i){return console.error(`Failed to create emergency contacts category:`,i),null}}async ensureAssetTypeExists(e){let t=this._org.building;if(!t||!e)return null;let i=await this._queryAssetType(t,e);if(i)return i;try{let s=await Ue$1({name:Be,category_id:e.id,zone_id:t.id,brand:`PlaceOS`,description:`Emergency contacts for the building`});return this._change.set(Date.now()),s}catch(s){return console.error(`Failed to create emergency contacts asset type:`,s),null}}async ensureCategoryAndTypeExist(){let e=await this.ensureCategoryExists();return e?this.ensureAssetTypeExists(e):null}async migrateFromMetadata(){let e=this._org.building;if(!e)return!1;try{let t=await this._queryLegacyMetadata(e);if(!t?.contacts?.length&&!t?.roles?.length)return!0;let i=await this.ensureCategoryAndTypeExist();if(!i)throw new Error(`Failed to create or find asset type`);let s=await this._queryCategory(e);if(!s)throw new Error(`Failed to find category`);t.roles?.length&&await Se(vm(new _m(m$1(l({},s),{hidden:!0,description:JSON.stringify({roles:t.roles})})),[0,null,void 0,``]));for(let g of t.contacts||[])await Ge$1(this.contactToAsset(g,i.id));return await W2(e.id,{name:`emergency_contacts`,description:`Emergency Contacts (migrated to Assets)`,details:{contacts:[],roles:[],migrated:!0}}),this._change.set(Date.now()),HS(Sr(`APP.CONCIERGE.CONTACTS_MIGRATION_SUCCESS`)||`Successfully migrated emergency contacts.`),!0}catch(t){return aj(Sr(`APP.CONCIERGE.CONTACTS_MIGRATION_ERROR`,{error:t})||`Failed to migrate emergency contacts: ${t}`),!1}}async needsMigration(){let e=this._org.building;if(!e)return!1;let t=await this._queryLegacyMetadata(e);return t&&(t.contacts?.length>0||t.roles?.length>0)?!t.migrated:!1}async saveContact(e){try{let t=this.asset_type();if(t||(t=await this.ensureCategoryAndTypeExist()),!t)throw new Error(`Failed to create or find asset type`);return await Ge$1(this.contactToAsset(e,t.id)),this._change.set(Date.now()),HS(Sr(`APP.CONCIERGE.CONTACTS_SAVE_SUCCESS`)),!0}catch(t){return aj(Sr(`APP.CONCIERGE.CONTACTS_SAVE_ERROR`,{error:t})),!1}}async deleteContact(e){try{return await r1e(e),this._change.set(Date.now()),HS(Sr(`APP.CONCIERGE.CONTACTS_DELETE_SUCCESS`)||`Successfully removed emergency contact.`),!0}catch(t){return aj(Sr(`APP.CONCIERGE.CONTACTS_DELETE_ERROR`,{error:t})||`Failed to remove emergency contact: ${t}`),!1}}async updateRoles(e){try{let t=this.category();if(t||(t=await this.ensureCategoryExists()),!t)throw new Error(`Failed to create or find category`);return await Se(new _m(m$1(l({},t),{description:JSON.stringify({roles:e})}))),this._change.set(Date.now()),!0}catch(t){return aj(`Failed to update roles: ${t}`),!1}}async addRole(e){let t=this.roles();return t.includes(e)?!0:this.updateRoles([...t,e].filter(Boolean).sort((i,s)=>i.localeCompare(s)))}async removeRole(e){try{let t=this.roles(),i=this.contacts(),s=t.filter(g=>g!==e);await this.updateRoles(s);for(let g of i)if(g.roles.includes(e)){let C=m$1(l({},g),{roles:g.roles.filter(ne=>ne!==e)});await this.saveContact(C)}return!0}catch(t){return aj(`Failed to remove role: ${t}`),!1}}async renameRole(e,t){try{let i=this.roles(),s=this.contacts(),g=i.map(C=>C===e?t:C).filter(Boolean).sort((C,ne)=>C.localeCompare(ne));await this.updateRoles(g);for(let C of s)if(C.roles.includes(e)){let ne=m$1(l({},C),{roles:C.roles.map(nt=>nt===e?t:nt)});await this.saveContact(ne)}return!0}catch(i){return aj(`Failed to rename role: ${i}`),!1}}refresh(){this._change.set(Date.now())}assetToContact(e){let t=e.other_data,i=this._org.levelWithID(e.zones);return{id:e.id,name:e.identifier||``,email:t?.email||``,phone:t?.phone||``,roles:t?.roles||[],zone:i?.id||``}}contactToAsset(e,t){let i=e.zone?this._org.levelWithID([e.zone]):null;return{id:e.id?.startsWith(`contact-`)?void 0:e.id,asset_type_id:t,identifier:e.name,other_data:{email:e.email,phone:e.phone,roles:e.roles},zone_id:this._org.building.id,zones:ei([this._org.organisation.id,this._org.region?.id,this._org.building.id,i?.id].filter(s=>s))}}generateContactId(){return`contact-${zS(8)}`}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=L({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();var Ei=()=>({standalone:!0});var xi=(n,l)=>l.id;function Mi(n,l){n&1&&(ke(0,`button`,3)(1,`icon`),yi$1(2,`close`),Ue()())}function Ti(n,l){if(n&1&&(ke(0,`mat-option`,20),yi$1(1),Ue()),n&2){let e=l.$implicit;Dn(`value`,e.id),fe(),Lo(` `,e.display_name||e.name,` `)}}function ki(n,l){if(n&1&&(ke(0,`mat-option`,20),yi$1(1),Ue()),n&2){let e=bt().$implicit;Dn(`value`,e),fe(),Lo(` `,e,` `)}}function Ri(n,l){if(n&1&&Le(0,ki,2,2,`mat-option`,20),n&2){let e=l.$implicit;Fe(e?0:-1)}}function Ii(n,l){if(n&1){let e=GC();ke(0,`main`,4)(1,`form`)(2,`a-user-search-field`,7),He(`ngModelChange`,function(i){Ay(e);return Dy(bt().setUser(i))}),Ue(),J4(),ke(3,`div`,8)(4,`label`,9),yi$1(5),gp(6,`translate`),Ue(),ke(7,`mat-form-field`,10),Bt(8,`input`,11),J4(),Ue()(),ke(9,`div`,12)(10,`div`,13)(11,`label`,14),yi$1(12),gp(13,`translate`),Ue(),ke(14,`mat-form-field`,10),Bt(15,`input`,15),gp(16,`translate`),J4(),Ue()(),ke(17,`div`,13)(18,`label`,14),yi$1(19),gp(20,`translate`),Ue(),ke(21,`mat-form-field`,10),Bt(22,`input`,16),gp(23,`translate`),J4(),Ue()()(),ke(24,`div`,8)(25,`label`,17),yi$1(26),gp(27,`translate`),Ue(),ke(28,`mat-form-field`,10)(29,`mat-select`,18),gp(30,`translate`),ke(31,`mat-option`,19),yi$1(32),gp(33,`translate`),Ue(),s9(34,Ti,2,2,`mat-option`,20,xi),Ue(),J4(),Ue()(),ke(36,`div`,8)(37,`label`,21),yi$1(38),gp(39,`translate`),Ue(),ke(40,`div`,12)(41,`mat-form-field`,22)(42,`mat-select`,23),gp(43,`translate`),s9(44,Ri,1,1,null,null,i9),Ue(),J4(),Ue(),ke(46,`div`,24),gp(47,`translate`),ke(48,`button`,25)(49,`icon`),yi$1(50,`add`),Ue()()()()()()()}if(n&2){let e=bt(),t=DE(9);fe(2),Dn(`ngModelOptions`,t7(40,Ei)),t6(),fe(3),gu(YC(6,18,`FORM.NAME`)),fe(3),Dn(`formField`,e.form.name),t6(),fe(4),gu(YC(13,20,`FORM.EMAIL`)),fe(3),Dn(`formField`,e.form.email)(`placeholder`,YC(16,22,`FORM.EMAIL`)),t6(),fe(4),gu(YC(20,24,`FORM.PHONE`)),fe(3),Dn(`formField`,e.form.phone)(`placeholder`,YC(23,26,`APP.CONCIERGE.CONTACTS_PHONE_PLACEHOLDER`)),t6(),fe(4),gu(YC(27,28,`RESOURCE.LEVEL`)),fe(3),Dn(`formField`,e.form.zone)(`placeholder`,YC(30,30,`COMMON.LEVEL_SELECT`)),t6(),fe(3),gu(YC(33,32,`COMMON.LEVEL_ANY`)),fe(2),a9(e.levels()),fe(4),gu(YC(39,34,`APP.CONCIERGE.CONTACTS_ROLES`)),fe(4),Dn(`formField`,e.form.roles)(`placeholder`,YC(43,36,`APP.CONCIERGE.CONTACTS_ROLES_SELECT`)),t6(),fe(2),a9(e.roles()),fe(2),Dn(`matTooltip`,YC(47,38,`APP.CONCIERGE.CONTACTS_ROLES_ADD`)),fe(2),Dn(`content`,t)}}function Oi(n,l){n&1&&(ke(0,`main`,5),Bt(1,`mat-spinner`,26),ke(2,`p`),yi$1(3),gp(4,`translate`),Ue()()),n&2&&(fe(),Dn(`diameter`,48),fe(2),gu(YC(4,2,`APP.CONCIERGE.CONTACTS_SAVING`)))}function Ai(n,l){if(n&1){let e=GC();ke(0,`footer`,6)(1,`button`,27),He(`click`,function(){Ay(e);return Dy(bt().save())}),yi$1(2),gp(3,`translate`),Ue()()}n&2&&(fe(2),Lo(` `,YC(3,1,`COMMON.SAVE`),` `))}function Pi(n,l){if(n&1){let e=GC();ke(0,`div`,28)(1,`mat-form-field`,10)(2,`input`,29),gp(3,`translate`),JF(`ngModelChange`,function(i){Ay(e);let s=bt();return W9(s.role_name,i)||(s.role_name=i),Dy(i)}),Ue(),J4(),Ue(),ke(4,`button`,30),He(`click`,function(){Ay(e);return Dy(bt().addRole())}),yi$1(5),gp(6,`translate`),Ue()()}if(n&2){let e=bt();fe(2),XF(`ngModel`,e.role_name),Dn(`placeholder`,YC(3,3,`APP.CONCIERGE.CONTACTS_ROLES_NAME`)),t6(),fe(3),Lo(` `,YC(6,5,`APP.CONCIERGE.CONTACTS_ROLES_SAVE`),` `)}}var pi=(()=>{class n{constructor(){this._data=m(Mde),this._dialog_ref=m(QT),this._org=m(jT),this._contacts_service=m(we),this.loading=N(!1),this.role_name=N(``),this.contact=this._data,this.roles=this._contacts_service.roles,this.model=N({id:this._data?.id||this._contacts_service.generateContactId(),name:this._data?.name||``,email:this._data?.email||``,phone:this._data?.phone||``,zone:this._data?.zone||``,roles:this._data?.roles||[]}),this.form=Ufe(this.model),this.levels=this._org.active_levels,this._tooltip=sl(yot)}async addRole(){let e=this.role_name().trim();e&&(this._tooltip().close(),this.loading.set(!0),this._dialog_ref.disableClose=!0,await this._contacts_service.addRole(e),this.model.update(t=>m$1(l({},t),{roles:[...t.roles||[],e]})),this.role_name.set(``),this.loading.set(!1),this._dialog_ref.disableClose=!1)}setUser(e){this.model.update(t=>m$1(l({},t),{name:e?.name||``,email:e?.email||``,phone:e?.phone||``}))}async save(){this.loading.set(!0),this._dialog_ref.disableClose=!0;let e=this.model(),t={id:e.id,name:e.name,email:e.email,phone:e.phone,zone:e.zone,roles:e.roles||[]},i=await this._contacts_service.saveContact(t);this._dialog_ref.disableClose=!1,this.loading.set(!1),i&&this._dialog_ref.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=ye({type:n,selectors:[[`emergency-contact-modal`]],viewQuery:function(t,i){t&1&&pu(i._tooltip,yot,5),t&2&&mu()},decls:10,vars:6,consts:[[`role_form`,``],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[1,`w-xl`,`p-4`],[`loading`,``,1,`flex`,`h-64`,`flex-col`,`items-center`,`justify-center`],[1,`border-base-200`,`flex`,`items-center`,`justify-end`,`border-t`,`px-4`,`py-2`],[`ngModel`,``,1,`mb-4`,3,`ngModelChange`,`ngModelOptions`],[1,`flex`,`flex-col`],[`for`,`name`],[`appearance`,`outline`],[`matInput`,``,`placeholder`,`Full name`,3,`formField`],[1,`flex`,`items-center`,`space-x-4`],[1,`flex`,`flex-1`,`flex-col`],[`for`,`email`],[`matInput`,``,`type`,`email`,3,`formField`,`placeholder`],[`matInput`,``,`type`,`tel`,3,`formField`,`placeholder`],[`for`,`zone`],[3,`formField`,`placeholder`],[`value`,``],[3,`value`],[`for`,`roles`],[`appearance`,`outline`,1,`no-subscript`,`flex-1`],[`multiple`,``,3,`formField`,`placeholder`],[3,`matTooltip`],[`icon`,``,`default`,``,`matRipple`,``,`customTooltip`,``,3,`content`],[1,`mb-4`,3,`diameter`],[`btn`,``,`matRipple`,``,1,`w-48`,3,`click`],[1,`bg-base-100`,`rounded-sm`,`p-4`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`]],template:function(t,i){t&1&&(ke(0,`header`,1)(1,`h2`,2),yi$1(2),gp(3,`translate`),Ue(),Le(4,Mi,3,0,`button`,3),Ue(),Le(5,Ii,51,41,`main`,4)(6,Oi,5,4,`main`,5),Le(7,Ai,4,3,`footer`,6),Wn(8,Pi,7,7,`ng-template`,null,0,_p)),t&2&&(fe(2),Lo(` `,YC(3,4,i.contact?`APP.CONCIERGE.CONTACTS_EDIT`:`APP.CONCIERGE.CONTACTS_NEW`),` `),fe(2),Fe(i.loading()?-1:4),fe(),Fe(i.loading()?6:5),fe(2),Fe(i.loading()?-1:7))},dependencies:[Vnt,LJe,PJe,Ox,rq,Cit,Dit,Zt,Qt,UW,Zl,C0,Dke,Tke,vH,vke,Ske,jee,lm,$rt,Ct$1,Xt$1,yot,Ft,Jit,_he,iot],encapsulation:2})}}return n})();var Di=(n,l)=>l+n;function Fi(n,l){n&1&&(ke(0,`button`,3)(1,`icon`),yi$1(2,`close`),Ue()())}function Li(n,l){if(n&1){let e=GC();ke(0,`div`,5)(1,`div`,10),yi$1(2),Ue(),ke(3,`button`,11),He(`click`,function(){let i=Ay(e).$implicit,s=bt();return s.active.set(i),Dy(s.role_name.set(i))}),ke(4,`icon`),yi$1(5,`edit`),Ue()(),ke(6,`button`,12),He(`click`,function(){let i=Ay(e).$implicit;return Dy(bt().removeRole(i))}),ke(7,`icon`),yi$1(8,`delete`),Ue()()()}if(n&2){let e=l.$implicit;bt();let t=DE(16);fe(2),gu(e),fe(),Dn(`content`,t)}}function zi(n,l){if(n&1){let e=GC();ke(0,`div`,13)(1,`mat-form-field`,14)(2,`input`,15),gp(3,`translate`),JF(`ngModelChange`,function(i){Ay(e);let s=bt();return W9(s.role_name,i)||(s.role_name=i),Dy(i)}),Ue(),J4(),Ue(),ke(4,`button`,16),He(`click`,function(){Ay(e);return Dy(bt().updateRoles())}),yi$1(5),gp(6,`translate`),Ue()()}if(n&2){let e=bt();fe(2),XF(`ngModel`,e.role_name),Dn(`placeholder`,YC(3,3,`APP.CONCIERGE.CONTACTS_ROLES_NAME`)),t6(),fe(3),Lo(` `,YC(6,5,`APP.CONCIERGE.CONTACTS_ROLES_SAVE`),` `)}}var hi=(()=>{class n{constructor(){this._dialog_ref=m(QT),this._contacts_service=m(we),this.active=N(``),this.role_name=N(``),this.loading=N(!1),this.roles=this._contacts_service.roles,this._tooltip=sl(yot)}async removeRole(e){e&&(this.loading.set(!0),this._dialog_ref.disableClose=!0,await this._contacts_service.removeRole(e),this.loading.set(!1),this._dialog_ref.disableClose=!1)}async updateRoles(){let e=this.role_name().trim();e&&(this.loading.set(!0),this._tooltip().close(),this._dialog_ref.disableClose=!0,this.active()?await this._contacts_service.renameRole(this.active(),e):await this._contacts_service.addRole(e),this.role_name.set(``),this.active.set(``),this.loading.set(!1),this._dialog_ref.disableClose=!1)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=ye({type:n,selectors:[[`role-management-modal`]],viewQuery:function(t,i){t&1&&pu(i._tooltip,yot,5),t&2&&mu()},decls:17,vars:8,consts:[[`role_form`,``],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[1,`h-128`,`max-h-[65vh]`,`min-w-md`,`overflow-y-auto`],[1,`hover:bg-base-200:bg-base-300`,`border-base-200`,`m-2`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`border`,`p-2`],[1,`border-base-200`,`border-t`],[`btn`,``,`matRipple`,``,`customTooltip`,``,1,`m-2`,`flex`,`w-[calc(100%-1rem)]`,`items-center`,`justify-center`,`space-x-2`,3,`click`,`content`],[1,`truncate`,`pl-2`],[1,`text-2xl`],[1,`flex-1`,`truncate`,`px-2`],[`icon`,``,`matRipple`,``,`customTooltip`,``,1,`border-secondary`,`text-secondary`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`,`content`],[`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`],[1,`bg-base-100`,`rounded-sm`,`p-4`],[`appearance`,`outline`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`]],template:function(t,i){if(t&1){let s=GC();ke(0,`header`,1)(1,`h2`,2),yi$1(2),gp(3,`translate`),Ue(),Le(4,Fi,3,0,`button`,3),Ue(),ke(5,`main`,4),s9(6,Li,9,2,`div`,5,Di),Ue(),ke(8,`footer`,6)(9,`button`,7),He(`click`,function(){return Ay(s),i.active.set(``),Dy(i.role_name.set(``))}),ke(10,`div`,8),yi$1(11),gp(12,`translate`),Ue(),ke(13,`icon`,9),yi$1(14,`add`),Ue()()(),Wn(15,zi,7,7,`ng-template`,null,0,_p)}if(t&2){let s=DE(16);fe(2),Lo(` `,YC(3,4,`APP.CONCIERGE.CONTACTS_ROLES_MANAGE`),` `),fe(2),Fe(i.loading()?-1:4),fe(2),a9(i.roles()),fe(3),Dn(`content`,s),fe(2),Lo(` `,YC(12,6,`APP.CONCIERGE.CONTACTS_ROLES_ADD`),` `)}},dependencies:[Dke,vH,vke,jee,LJe,PJe,Zl,C0,Ox,rq,Cit,Dit,Vnt,yot,iot],encapsulation:2})}}return n})();var Vi=(n,l)=>({key:`name`,name:n,content:l});var Bi=(n,l)=>({key:`roles`,name:n,content:l,sortable:!1});var Gi=(n,l)=>({key:`zone`,name:n,content:l,sortable:!1});var qi=n=>({key:`actions`,name:` `,content:n,size:`6rem`,sortable:!1});var ji=(n,l,e,t)=>[n,l,e,t];var Ui=(n,l)=>l+n;function Wi(n,l){if(n&1&&(ke(0,`mat-option`,19),yi$1(1),Ue()),n&2){let e=l.$implicit;Dn(`value`,e),fe(),Lo(` `,e,` `)}}function $i(n,l){if(n&1){let e=GC();ke(0,`button`,24),He(`click`,function(){let i=Ay(e).row;return Dy(bt().copyToClipboard(i.email))}),ke(1,`div`,25),yi$1(2),Ue(),ke(3,`div`,26),yi$1(4),Ue()()}if(n&2){let e=l.row;fe(2),gu(e.name),fe(2),Lo(` `,e.email,` `)}}function Hi(n,l){if(n&1&&(ke(0,`span`,28),yi$1(1),Ue()),n&2){let e=l.$implicit;fe(),Lo(` `,e,` `)}}function Yi(n,l){if(n&1&&(ke(0,`div`,27),s9(1,Hi,2,1,`span`,28,o9),Ue()),n&2){let e=l.data;fe(),a9(e)}}function Qi(n,l){if(n&1&&(ke(0,`div`,29),yi$1(1),gp(2,`level`),Ue()),n&2){let e=l.data;fe(),Lo(` `,e?YC(2,1,e)?.display_name:`All`,` `)}}function Xi(n,l){if(n&1){let e=GC();ke(0,`div`,30)(1,`button`,20),gp(2,`translate`),He(`click`,function(){let i=Ay(e).row;return Dy(bt().editContact(i))}),ke(3,`icon`),yi$1(4,`edit`),Ue()(),ke(5,`button`,31),gp(6,`translate`),He(`click`,function(){let i=Ay(e).row;return Dy(bt().removeContact(i))}),ke(7,`icon`),yi$1(8,`delete`),Ue()()()}n&2&&(fe(),Dn(`matTooltip`,YC(2,2,`APP.CONCIERGE.CONTACTS_EDIT`)),fe(4),Dn(`matTooltip`,YC(6,4,`APP.CONCIERGE.CONTACTS_REMOVE`)))}var gi=(()=>{class n{constructor(){this._org=m(jT),this._dialog=m(XT),this._clipboard=m(qj),this._contacts_service=m(we),this.search=N(``),this.role_filter=N(``),this.roles=this._contacts_service.roles,this.contacts=this._contacts_service.contacts,this.filtered_contacts=w(()=>{let e=this.role_filter();return this.contacts().filter(t=>!e||t.roles.includes(e))}),this.copyToClipboard=e=>{this._clipboard.copy(e)&&HS(`User's email copied to clipboard.`)}}ngOnInit(){this.checkMigration()}async checkMigration(){if(await this._contacts_service.needsMigration()){let t=await re$1({title:`Migrate Emergency Contacts`,content:`Emergency contacts data from the old system was found. Would you like to migrate it to the new system?`,icon:{content:`sync`}},this._dialog);t.reason===`done`&&(t.loading(`Migrating contacts...`),await this._contacts_service.migrateFromMetadata()),t.close()}}manageRoles(){this._dialog.open(hi,{}).afterClosed().subscribe(()=>this._contacts_service.refresh())}editContact(e){this._dialog.open(pi,{data:e}).afterClosed().subscribe(()=>this._contacts_service.refresh())}async removeContact(e){let t=await re$1({title:`Remove Emergency Contact`,content:`Are you sure you want to remove ${e.name} from the emergency contacts?`,icon:{content:`delete`}},this._dialog);t.reason===`done`&&(t.loading(`Removing contact...`),await this._contacts_service.deleteContact(e.id),t.close())}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=ye({type:n,selectors:[[``,`app-emergency-contacts`,``]],decls:50,vars:49,consts:[[`person_template`,``],[`roles_template`,``],[`zone_template`,``],[`actions_template`,``],[1,`flex`,`h-px`,`flex-1`],[1,`flex`,`h-full`,`w-1/2`,`flex-1`,`flex-col`],[`topbar`,``,1,`flex`,`flex-col`,`px-8`,`py-4`],[1,`flex`,`items-center`,`justify-between`],[1,`text-2xl`,`font-medium`],[1,`flex`,`items-center`,`space-x-2`],[`appearance`,`outline`,1,`no-subscript`],[`matPrefix`,``,1,`text-2xl`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`space-x-2`,3,`click`],[1,`text-2xl`],[1,`pr-2`],[1,`mt-2`,`flex`,`items-center`,`justify-between`,`py-2`],[3,`ngModelChange`,`ngModel`,`placeholder`],[`value`,``],[3,`value`],[`icon`,``,`default`,``,`matRipple`,``,3,`click`,`matTooltip`],[1,`h-1/2`,`w-full`,`flex-1`,`overflow-auto`,`px-8`],[1,`block`,`min-w-208`,`text-sm`,3,`data`,`filter`,`empty_message`,`columns`,`sortable`],[1,`h-12`,`w-full`],[1,`px-4`,`py-2`,`text-left`,`leading-tight`,3,`click`],[1,``],[1,`font-mono`,`text-[0.625rem]`,`opacity-30`],[1,`flex`,`flex-wrap`,`p-2`],[1,`bg-info`,`text-info-content`,`m-1`,`rounded-2xl`,`px-2`,`py-1`,`font-mono`,`text-xs`],[1,`p-4`],[1,`flex`,`w-full`,`items-center`,`justify-end`,`space-x-2`,`p-2`],[`icon`,``,`default`,``,`matRipple`,``,`error`,``,3,`click`,`matTooltip`]],template:function(t,i){if(t&1){let s=GC();Bt(0,`app-topbar`),ke(1,`div`,4),Bt(2,`app-sidebar`),ke(3,`main`,5)(4,`section`,6)(5,`div`,7)(6,`h2`,8),yi$1(7),gp(8,`translate`),Ue(),ke(9,`div`,9)(10,`mat-form-field`,10)(11,`icon`,11),yi$1(12,` search `),Ue(),ke(13,`input`,12),gp(14,`translate`),JF(`ngModelChange`,function(C){return Ay(s),W9(i.search,C)||(i.search=C),Dy(C)}),Ue(),J4(),Ue(),ke(15,`button`,13),He(`click`,function(){return i.editContact()}),ke(16,`icon`,14),yi$1(17,`add`),Ue(),ke(18,`div`,15),yi$1(19),gp(20,`translate`),Ue()()()(),ke(21,`div`,16)(22,`mat-form-field`,10)(23,`mat-select`,17),gp(24,`translate`),JF(`ngModelChange`,function(C){return Ay(s),W9(i.role_filter,C)||(i.role_filter=C),Dy(C)}),ke(25,`mat-option`,18),yi$1(26),gp(27,`translate`),Ue(),s9(28,Wi,2,2,`mat-option`,19,Ui),Ue(),J4(),Ue(),ke(30,`div`,9)(31,`button`,20),gp(32,`translate`),He(`click`,function(){return i.manageRoles()}),ke(33,`icon`),yi$1(34,`list_alt`),Ue()()()()(),ke(35,`section`,21),Bt(36,`simple-table`,22),gp(37,`translate`),gp(38,`translate`),gp(39,`translate`),gp(40,`translate`),Bt(41,`div`,23),Wn(42,$i,5,2,`ng-template`,null,0,_p)(44,Yi,3,0,`ng-template`,null,1,_p)(46,Qi,3,3,`ng-template`,null,2,_p)(48,Xi,9,6,`ng-template`,null,3,_p),Ue()()()}if(t&2){let s=DE(43),g=DE(45),C=DE(47),ne=DE(49);fe(7),Lo(` `,YC(8,13,`APP.CONCIERGE.CONTACTS_HEADER`),` `),fe(6),XF(`ngModel`,i.search),Dn(`placeholder`,YC(14,15,`APP.CONCIERGE.CONTACTS_FILTER`)),t6(),fe(6),Lo(` `,YC(20,17,`APP.CONCIERGE.CONTACTS_ADD`),` `),fe(4),XF(`ngModel`,i.role_filter),Dn(`placeholder`,YC(24,19,`APP.CONCIERGE.CONTACTS_ROLES_ALL`)),t6(),fe(3),gu(YC(27,21,`APP.CONCIERGE.CONTACTS_ROLES_ALL`)),fe(2),a9(i.roles()),fe(3),Dn(`matTooltip`,YC(32,23,`APP.CONCIERGE.CONTACTS_ROLES_MANAGE`)),fe(5),Dn(`data`,i.filtered_contacts())(`filter`,i.search())(`empty_message`,YC(37,25,i.search()?`APP.CONCIERGE.CONTACTS_SEARCH_EMPTY`:`APP.CONCIERGE.CONTACTS_EMPTY`))(`columns`,o7(44,ji,r7(33,Vi,YC(38,27,`COMMON.PERSON`),s),r7(36,Bi,YC(39,29,`APP.CONCIERGE.CONTACTS_ROLES`),g),r7(39,Gi,YC(40,31,`RESOURCE.LEVEL`),C),n7(42,qi,ne)))(`sortable`,!0)}},dependencies:[Zl,C0,Vnt,Jit,_he,Ne$1,Ox,rq,hfe,Zt,Qt,UW,Cit,Dit,Lv,Iv,Dke,vH,vke,jee,iot,f],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--%NS%base-100)}
/*# sourceMappingURL=emergency-contacts.component.css.map */`]})}}return n})();var ie=(()=>{class n extends so{constructor(){super(),this._org=m(jT),this._onsite={},this._events={},this._users=N([]),this._poll=N(0),this.loading=N(!1),this.filters=N({}),this.search=N(``),this.user_events=N({}),this.filtered_users=w(()=>{let e=this.search(),t=this._users(),i=this.filters();return t.filter(s=>(!e||s.name.toLowerCase().includes(e)||s.email.toLowerCase().includes(e))&&(!i.only_onsite||this._onsite[s.email]))}),this.loadUsers(),Xe(()=>{this._org.active_building(),this._poll(),this.timeout(`load-events`,()=>this._loadEvents(),300)})}setFilters(e){this.filters.set(l(l({},this.filters()),e))}setSearchString(e){this.search.set(e)}startPolling(e=3*Gl){let t=Math.max(e,3*Gl);this._poll.update(i=>i+1),this.interval(`poll`,()=>this._poll.update(i=>i+1),t)}stopPolling(){this.clearInterval(`poll`)}async checkin(e){let t=await me({booking_start:Math.floor(new Date().valueOf()/1e3),booking_end:Math.floor(Ai$1(new Date).valueOf()/1e3),asset_id:e.email,title:`Checked-in Onsite`,description:this._org.building.display_name||this._org.building.name,zones:[this._org.building.id],booking_type:`staff`});await ee(t.id,!0),this._events[e.email]=t,this._onsite[e.email]=!0}async checkout(e){let t=this._events[e.email];if(t){let i=await me(m$1(l({},t.toJSON()),{booking_end:Math.floor(new Date().valueOf()/1e3)}));await ee(i.id,!1),this._events[e.email]=i,this._onsite[e.email]=!1}}async _loadEvents(){this.loading.set(!0);let e=await j({period_start:Zn(Cn(Date.now())),period_end:Zn(Ai$1(Date.now())),type:`staff`}),t={},i=new Date().valueOf();for(let s of e)W1e(i,i,s.date,s.date+s.duration*60*1e3)&&(t[s.asset_id]=s.checked_in,this._events[s.asset_id]=s);this._onsite=t,this.user_events.set(t),this.loading.set(!1)}async loadUsers(){let e=await R(``);e.sort((t,i)=>t.name.localeCompare(i.name)),this._users.set(e)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=L({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();function Ji(n,l){n&1&&(ke(0,`div`,5),yi$1(1),gp(2,`translate`),Ue()),n&2&&(fe(),Lo(` `,YC(2,1,`APP.CONCIERGE.DIRECTORY_ONSITE`),` `))}function Zi(n,l){if(n&1){let e=GC();ke(0,`div`,0),Bt(1,`a-user-avatar`,1),ke(2,`div`,2)(3,`div`,3),yi$1(4),Ue(),ke(5,`div`,4),yi$1(6),Ue()(),Le(7,Ji,3,3,`div`,5),ke(8,`div`,6)(9,`action-icon`,7),gp(10,`translate`),He(`click`,function(){Ay(e);let i=bt();return Dy(i.onsite()?i.checkout():i.checkin())}),Ue(),ke(11,`a`,8),gp(12,`translate`),ke(13,`icon`),yi$1(14,`email`),Ue()(),ke(15,`a`,8),gp(16,`translate`),ke(17,`icon`),yi$1(18,`call`),Ue()()()()}if(n&2){let e=bt();fe(),Dn(`user`,e.user()),fe(3),gu(e.user()?.name),fe(2),Lo(` `,e.user()?.email,` `),fe(),Fe(e.onsite()?7:-1),fe(2),Dn(`matTooltip`,YC(10,13,e.onsite()?`COMMON.CHECK_IN`:`COMMON.CHECK_OUT`))(`loading`,e.loading())(`content`,e.onsite()?`event_busy`:`event_available`),fe(2),Dn(`matTooltip`,YC(12,15,`APP.CONCIERGE.DIRECTORY_EMAIL`))(`href`,`mailto:`+e.user()?.email,uE),$e(`disabled`,!e.user()?.email),fe(4),Dn(`matTooltip`,YC(16,17,`APP.CONCIERGE.DIRECTORY_PHONE`))(`href`,`tel:`+e.user()?.phone,uE),$e(`disabled`,!e.user()?.phone)}}var _i=(()=>{class n{constructor(){this._state=m(ie),this.user=Jt(void 0),this.onsite=Jt(void 0),this.loading=N(!1),this.checkin=async()=>{this.loading.set(!0),await this._state.checkin(this.user()).catch(e=>aj(Sr(`APP.CONCIERGE.DIRECTORY_CHECKIN_ERROR`,{error:e}))),this.loading.set(!1)},this.checkout=async()=>{this.loading.set(!0),await this._state.checkout(this.user()).catch(e=>Sr(`APP.CONCIERGE.DIRECTORY_CHECKOUT_ERROR`,{error:e})),this.loading.set(!1)}}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=ye({type:n,selectors:[[`staff-details`]],inputs:{user:[1,`user`],onsite:[1,`onsite`]},decls:1,vars:1,consts:[[`details`,``,1,`border-base-200`,`bg-base-100`,`flex`,`w-full`,`items-center`,`border-b`,`px-4`,`py-2`,`hover:opacity-80`],[3,`user`],[1,`flex`,`flex-1`,`flex-col`],[1,`px-2`],[1,`text-opacity-50`,`px-2`,`text-xs`],[1,`px-4`,`text-xs`,`opacity-50`],[1,`flex`,`items-center`],[3,`click`,`matTooltip`,`loading`,`content`],[`icon`,``,`matRipple`,``,3,`matTooltip`,`href`]],template:function(t,i){t&1&&Le(0,Zi,19,19,`div`,0),t&2&&Fe(i.user()?0:-1)},dependencies:[Wn$1,li,Vnt,Jit,_he,iot],encapsulation:2})}}return n})();var en=[`container`];function tn(n,l){if(n&1){let e=GC();ke(0,`div`,6),He(`click`,function(){let i=Ay(e).$implicit;return Dy(bt().scrollTo(i))}),yi$1(1),Ue()}if(n&2){let e=l.$implicit,t=bt();Oe(`disabled`,t.user_list()[e].length<=0)(`active`,e===t.active_group()),fe(),Lo(` `,e,` `)}}function nn(n,l){if(n&1&&Bt(0,`staff-details`,8),n&2){let e=l.$implicit,t=l.$index,i=bt(2).$implicit,s=bt(2);Dn(`id`,`letter-`+i+`-`+t)(`user`,e)(`onsite`,s.events()?s.events()[e.email]:!1)}}function an(n,l){if(n&1&&(ke(0,`div`,7),yi$1(1),Ue(),s9(2,nn,1,3,`staff-details`,8,o9)),n&2){let e=bt().$implicit,t=bt(2);Dn(`id`,`letter-`+(e===`#`?`0`:e)),fe(),Lo(` `,e,` `),fe(),a9(t.user_list()[e])}}function on(n,l){if(n&1&&Le(0,an,4,2),n&2){let e=l.$implicit;Fe(bt(2).user_list()[e].length?0:-1)}}function rn(n,l){if(n&1&&s9(0,on,1,1,null,null,o9),n&2)a9(bt().groups)}function sn(n,l){n&1&&(ke(0,`div`,4)(1,`p`),yi$1(2),gp(3,`translate`),Ue()()),n&2&&(fe(2),Lo(` `,YC(3,1,`APP.CONCIERGE.DIRECTORY_SEARCH_EMPTY`),` `))}function ln(n,l){n&1&&Bt(0,`mat-progress-bar`,5)}var Ge=`#abcdefghijklmnopqrstuvwxyz`.split(``);var ui=(()=>{class n extends so{constructor(){super(),this._state=m(ie),this.active_group=N(`#`),this.groups=Ge,this.events=this._state.user_events,this.loading=this._state.loading,this.filtered_users=this._state.filtered_users,this.user_count=w(()=>this.filtered_users().length),this.user_list=w(()=>{let e=this.filtered_users()||[],t={};for(let i of Ge)t[i]=e.filter(s=>s.name.toLowerCase()[0].startsWith(i)||i===`#`&&!Ge.includes(s.name.toLowerCase()[0]));return t}),this._el=sl(`container`),Xe(e=>{this.user_list(),this.timeout(`scroll`,()=>this.onScroll({}),30),e(()=>this.clearTimeout(`scroll`))})}onScroll(e){let t=this._el();if(!t)return;let i=t.nativeElement.scrollTop;for(let s of Ge){let g=document.querySelector(`#letter-${s===`#`?`0`:s}`);if(g){if(g.offsetTop-i>0)break;this.active_group.set(s)}}}scrollTo(e){let t=document.querySelector(`#letter-${e}-0`);t&&(t.scrollIntoView({behavior:`smooth`,block:`center`}),this.active_group.set(e))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=ye({type:n,selectors:[[`staff-listings`]],viewQuery:function(t,i){t&1&&pu(i._el,en,5),t&2&&mu()},features:[Ne],decls:8,vars:2,consts:[[`container`,``],[1,`flex`,`w-full`,`items-center`,`justify-center`,`p-2`],[`letter`,``,1,`flex`,`h-6`,`w-6`,`cursor-pointer`,`items-center`,`justify-center`,`text-xs`,`capitalize`,3,`disabled`,`active`],[1,`relative`,`w-full`,`flex-1`,`overflow-auto`,2,`height`,`50%`,3,`scroll`],[1,`absolute`,`inset-0`,`flex`,`flex-col`,`items-center`,`justify-center`],[`mode`,`indeterminate`],[`letter`,``,1,`flex`,`h-6`,`w-6`,`cursor-pointer`,`items-center`,`justify-center`,`text-xs`,`capitalize`,3,`click`],[`group`,``,1,`border-base-300`,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`rounded-lg`,`border`,`text-sm`,`font-medium`,`capitalize`,3,`id`],[3,`id`,`user`,`onsite`]],template:function(t,i){t&1&&(ke(0,`div`,1),s9(1,tn,2,5,`div`,2,o9),Ue(),ke(3,`div`,3,0),He(`scroll`,function(g){return i.onScroll(g)}),Le(5,rn,2,0)(6,sn,4,3,`div`,4),Ue(),Le(7,ln,1,0,`mat-progress-bar`,5)),t&2&&(fe(),a9(i.groups),fe(4),Fe(i.user_count()?5:6),fe(2),Fe(i.loading()?7:-1))},dependencies:[Z,L$1,_i,iot],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:50%}[letter][_ngcontent-%COMP%]{transition:font-size .2s,color .2s}[group][_ngcontent-%COMP%]{border-color:#ccc;padding:.5rem 1.65rem}.disabled[_ngcontent-%COMP%]{opacity:.2;pointer-events:none}.active[_ngcontent-%COMP%]{font-size:1.25rem;opacity:1;color:#d81b60}
/*# sourceMappingURL=staff-listing.component.css.map */`]})}}return n})();var cn=[`switch`];var dn=[`*`];function mn(n,l){n&1&&(ke(0,`span`,11),ZA(),ke(1,`svg`,13),Bt(2,`path`,14),Ue(),ke(3,`svg`,15),Bt(4,`path`,16),Ue()())}var pn=new b(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var qe=class{source;checked;constructor(l,e){this.source=l,this.checked=e}};var it=(()=>{class n{_elementRef=m($);_focusMonitor=m(ts);_changeDetectorRef=m(Ct);defaults=m(pn);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new qe(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=tn$1();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new re;toggleChange=new re;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){m(En).load(Kl);let e=m(new ME(`tabindex`),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||`accent`,this.id=this._uniqueId=m(Gt).getId(`mat-mdc-slide-toggle-`),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new qe(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(t){return new(t||n)};static ɵcmp=ye({type:n,selectors:[[`mat-slide-toggle`]],viewQuery:function(t,i){if(t&1&&kn(cn,5),t&2){let s;Ie(s=Ae())&&(i._switchElement=s.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(t,i){t&2&&(xn(`id`,i.id),$e(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),Gs(i.color?`mat-`+i.color:``),Oe(`mat-mdc-slide-toggle-focused`,i._focused)(`mat-mdc-slide-toggle-checked`,i.checked)(`mat-slide-toggle-full-width`,i.fullWidth)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,Ee],color:`color`,disabled:[2,`disabled`,`disabled`,Ee],fullWidth:[2,`fullWidth`,`fullWidth`,Ee],disableRipple:[2,`disableRipple`,`disableRipple`,Ee],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:_u(e)],checked:[2,`checked`,`checked`,Ee],hideIcon:[2,`hideIcon`,`hideIcon`,Ee],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Ee]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[qe$1([{provide:zo,useExisting:sn$1(()=>n),multi:!0},{provide:Yo,useExisting:n,multi:!0}]),St],ngContentSelectors:dn,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(t,i){if(t&1&&(Xt(),ke(0,`div`,1)(1,`button`,2,0),He(`click`,function(){return i._handleClick()}),Bt(3,`div`,3)(4,`span`,4),ke(5,`span`,5)(6,`span`,6)(7,`span`,7),Bt(8,`span`,8),Ue(),ke(9,`span`,9),Bt(10,`span`,10),Ue(),Le(11,mn,5,0,`span`,11),Ue()()(),ke(12,`label`,12),He(`click`,function(g){return g.stopPropagation()}),Pe(13),Ue()()),t&2){let s=DE(2);Dn(`labelPosition`,i.labelPosition),fe(),Oe(`mdc-switch--selected`,i.checked)(`mdc-switch--unselected`,!i.checked)(`mdc-switch--checked`,i.checked)(`mdc-switch--disabled`,i.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,i.disabledInteractive),Dn(`tabIndex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex)(`disabled`,i.disabled&&!i.disabledInteractive),$e(`id`,i.buttonId)(`name`,i.name)(`aria-label`,i.ariaLabel)(`aria-labelledby`,i._getAriaLabelledBy())(`aria-describedby`,i.ariaDescribedby)(`aria-required`,i.required||null)(`aria-checked`,i.checked)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null),fe(9),Dn(`matRippleTrigger`,s)(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleCentered`,!0),fe(),Fe(i.hideIcon?-1:11),fe(),Dn(`for`,i.buttonId),$e(`id`,i._labelId)}},dependencies:[C0,Dnt],styles:[`.mdc-switch {
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
`],encapsulation:2})}return n})();var fi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ae({type:n});static ɵinj=oe({imports:[it,Rt]})}return n})();var gn=(n,l)=>l.id;function _n(n,l){if(n&1&&(ke(0,`mat-option`,3),yi$1(1),Ue()),n&2){let e=l.$implicit;Dn(`value`,e.id),fe(),Lo(` `,e.display_name||e.name,` `)}}var vi=(()=>{class n extends so{constructor(){super(),this._state=m(ie),this._org=m(jT),this._route=m(Ii$1),this._router=m(Pn),this.zones=N([]),this.levels=N([]),this.filters=N({}),this.setDate=e=>this._state.setFilters({date:e}),this.setFilters=e=>this._state.setFilters(e),this.setSearch=e=>this._state.setSearchString(e),this.updateZones=e=>{this._router.navigate([],{relativeTo:this._route,queryParams:{zone_ids:e.join(`,`)},queryParamsHandling:`merge`}),this._state.setFilters({zones:e})},Xe(()=>{this.filters.set(this._state.filters()||{})}),Xe(()=>{let e=this._org.active_levels()||[];M(()=>{this.levels.set(e);let t=this.zones().filter(i=>e.find(s=>s.id===i));!t.length&&e.length&&t.push(e[0].id),this.zones.set(t),this.updateZones(t)})})}async ngOnInit(){await this._org.waitUntilInitialised(),this.subscription(`route.query`,this._route.queryParamMap.subscribe(e=>{if(e.has(`zone_ids`)){let t=e.get(`zone_ids`).split(`,`);if(t.length){let i=this._org.levelWithID(t);if(!i)return;this._org.building=this._org.buildings.find(s=>s.id===i.parent_id),this.zones.set(t)}}})),this.setSearch(``)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=ye({type:n,selectors:[[`staff-topbar`]],features:[Ne],decls:12,vars:8,consts:[[1,`border-base-200`,`bg-base-100`,`flex`,`items-center`,`space-x-4`,`border-b`,`p-4`],[`appearance`,`outline`,1,`no-subscript`,`w-48`],[`multiple`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[3,`value`],[1,`m-2`,3,`ngModelChange`,`ngModel`],[1,`text-xs`],[1,`w-2`,`flex-1`],[1,`mr-2`,3,`modelChange`]],template:function(t,i){t&1&&(ke(0,`div`,0)(1,`mat-form-field`,1)(2,`mat-select`,2),gp(3,`translate`),JF(`ngModelChange`,function(g){return W9(i.zones,g)||(i.zones=g),g}),He(`ngModelChange`,function(g){return i.updateZones(g)}),s9(4,_n,2,2,`mat-option`,3,gn),Ue(),J4(),Ue(),ke(6,`mat-slide-toggle`,4),He(`ngModelChange`,function(g){return i.setFilters({only_onsite:g})}),ke(7,`div`,5),yi$1(8),gp(9,`translate`),Ue()(),J4(),Bt(10,`div`,6),ke(11,`searchbar`,7),He(`modelChange`,function(g){return i.setSearch(g)}),Ue()()),t&2&&(fe(2),XF(`ngModel`,i.zones),Dn(`placeholder`,YC(3,4,`COMMON.LEVEL_ALL`)),t6(),fe(2),a9(i.levels()),fe(2),Dn(`ngModel`,i.filters()?.only_onsite),t6(),fe(2),Lo(` `,YC(9,6,`APP.CONCIERGE.DIRECTORY_ONSITE_ONLY`),` `))},dependencies:[fi,it,z,Ox,rq,Zt,Qt,UW,Dke,vke,jee,iot],styles:[`mat-form-field[_ngcontent-%COMP%]{height:3.25em;width:8em}
/*# sourceMappingURL=staff-topbar.component.css.map */`]})}}return n})();function un(n,l){n&1&&Bt(0,`mat-progress-bar`,4)}var ko=[{path:``,component:(()=>{class n{constructor(){this._state=m(ie),this.loading=this._state.loading}ngOnInit(){this._state.startPolling()}ngOnDestroy(){this._state.stopPolling()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=ye({type:n,selectors:[[``,`app-new-staff`,``]],decls:7,vars:1,consts:[[1,`flex`,`h-px`,`flex-1`],[1,`flex`,`h-full`,`w-1/2`,`flex-1`,`flex-col`],[1,`w-full`],[1,`h-0`,`w-full`,`flex-1`],[`mode`,`indeterminate`,1,`w-full`]],template:function(t,i){t&1&&(Bt(0,`app-topbar`),ke(1,`div`,0),Bt(2,`app-sidebar`),ke(3,`main`,1),Bt(4,`staff-topbar`,2)(5,`staff-listings`,3),Le(6,un,1,0,`mat-progress-bar`,4),Ue()()),t&2&&(fe(6),Fe(i.loading()?6:-1))},dependencies:[Z,L$1,Lv,Iv,vi,ui],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background-color:var(--%NS%base-100)}
/*# sourceMappingURL=staff.component.css.map */`]})}}return n})(),title:`Staff`},{path:`emergency-contacts`,component:gi,title:`Emergency Contacts`}];export{ko as ROUTES};
//# debugId=234e5696-42d5-5338-830f-6c459ff74c71
//# sourceMappingURL=staff.routes-D6Us_Qyo.js.map