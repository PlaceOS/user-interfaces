import{n as m$1,t as l$2}from"./chunk-Da4-SChG.js";import{$ as Ks,$n as jl,$r as we$1,$t as W$1,An as cI,Bt as Tm,C as Db,Cr as os,Ft as SV,Gn as gy,Gt as Ul,Hn as gb,It as Sn,J as Ir,Kn as h_,Kr as vb,Lr as st$2,M as FD,O as Em,Ot as QI,P as Fm,Pr as sf,St as PT,Tr as pb,Tt as Pl,U as Hm,Un as ge$1,Vn as g_,Vr as ue$1,X as Jb,Y as It$1,Yr as wT,Yt as Vb,ar as ko,bn as ae$2,br as oS,cr as lT,d as As,et as Kt,fn as _T,gt as Nm,h as C$1,hn as _h,ht as Nb,in as Yf,ir as kn,jr as rI,jt as RT,kr as qs,ln as Zf,mr as mb,nn as Xt$1,nt as Lb,o as A$2,on as Yr,p as Bb,pt as NC,qr as vm,rr as km,rt as Ll,st as MT,tr as kb,ui as ym,vr as ne$2,w as Dm,wn as bC,wt as Pb,x as D,xn as am,xr as om,y as Cm}from"./chunk-C_VdZe0z.js";import{E as Jd,Hn as wt,Mn as td,Mt as bd,N as Lh,Nt as be$1,O as Kc,On as rl,Pn as tl,Q as Qt,R as Me$1,Tt as Zd,Xt as fn,Y as Qd,an as il,at as Ud,bn as ol,d as Dd,dt as Vd,f as Df,gt as Xd,ht as Xc,i as Ad,jn as sl,jt as al,k as Kd,l as Cd,ln as kd,lt as V,m as Et$1,mt as Wh,nt as Se,o as Bc,on as jc,q as Q$1,qn as yf,qt as el,rn as ht$1,tn as hn,ut as Vc,v as G$1,wn as qd,xt as Yh,z as Nd}from"./chunk-DpVxtbfE.js";import{D as fe$1,E as dt$1,I as ui,L as vt,_ as X$2,i as F,p as R$1,r as Cn,y as _$1}from"./chunk-9cmOl504.js";import{n as Z$1,t as J$3}from"./chunk-Cb9L_a2o.js";import"./chunk-CJlRHX4Q.js";import{n as Bt$1,o as T$1,r as Ht,t as $e,u as ee$2}from"./chunk-Bk2bdagG.js";import{t as f$1}from"./chunk-DADqi7RL.js";import{n as y$2}from"./chunk-DC97wGHV.js";import{n as O}from"./chunk-BhC284WI.js";import{a as et$1,c as yt$2,i as V$1,n as R$2,r as Rt$1,t as Mt$1}from"./chunk-dYuc5Zhg.js";import{a as h$1,i as d,n as P$1,t as L}from"./chunk-Dobn4X4a.js";import{n as c$1}from"./chunk-DrqqyxzM.js";import{c as kt$1,l as os$1,n as Ci,s as is,t as Ar,u as q$3}from"./chunk-BTwHy7Ed.js";import{A as qs$1,C as la,D as oa,E as nr,F as sr,M as rr,O as or,P as sa,R as za,S as kr,T as na,_ as aa,b as ht$2,f as We,h as Ws,j as ra,m as Wo,n as Di,o as H,r as Eo,t as As$1,w as m$2}from"./chunk-BkhZPe0f.js";var s$1=class extends hn{constructor(e={}){super(e),this.background_media=e.background_media?new Me$1(e.background_media):null}};var r=class extends fn{constructor(e={}){super(e),this.template_details=new s$1(l$2({id:e.template_id},e.template_details))}};function B$1(t,c){if(t&1&&(As(0,`main`,2),Dm(1,`icon`,5)(2,`p`,6),Ll()),t&2){let e=kb();QI(),vm(`icon`,e.icon()),QI(),vm(`innerHTML`,e.content(),rI)}}function G(t,c){if(t&1&&(As(0,`main`,3)(1,`div`,7),Dm(2,`mat-spinner`,8),As(3,`p`),lT(4),Ll()()()),t&2){let e=kb();QI(4),Hm(e.loading())}}function q$2(t,c){if(t&1){let e=Nb();As(0,`footer`,4)(1,`button`,9),lT(2),_T(3,`translate`),Ll(),As(4,`button`,10),Tm(`click`,function(){Zf(e);return Yf(kb().onConfirm())}),lT(5),_T(6,`translate`),Ll()()}if(t&2){let e=kb();QI(2),Ul(` `,MT(3,2,e.cancel_text()),` `),QI(3),Ul(` `,MT(6,4,e.confirm_text()),` `)}}var J$2={height:`auto`};async function re$2(t,c){let e=c.open(K$2,m$1(l$2({},J$2),{data:t}));return m$1(l$2({},await Promise.race([e.componentInstance.event.pipe(sf(n=>n.reason===`done`)).toPromise(),e.afterClosed().toPromise()])),{loading:n=>e.componentInstance.loading?.set(n),close:()=>e.close()})}var K$2=(()=>{class t extends y$2{constructor(){super(),this._dialog_ref=D(T$1),this._data=D($e),this.loading=st$2(``),this.event=new It$1,this.title=st$2(this._data.title||`COMMON.CONFIRM`),this.content=st$2(this._data.content||`Are you sure?`),this.confirm_text=st$2(this._data.confirm_text||`COMMON.ACCEPT`),this.cancel_text=st$2(this._data.cancel_text||`COMMON.CANCEL`),this.icon=st$2(this._data.icon||{class:`material-symbols-rounded`,content:`done`}),this.disableClose=()=>this._dialog_ref.disableClose=!0,this.enableClose=()=>this._dialog_ref.disableClose=!1}ngOnInit(){this._data.close_delay&&this.timeout(`close`,()=>this._dialog_ref.close(),this._data.close_delay)}onConfirm(){this.event.emit({reason:`done`})}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=bC({type:t,selectors:[[`confirm-modal`]],features:[om],decls:6,vars:3,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`h-14`,`w-[calc(100%-1rem)]`,`min-w-[20rem]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[1,`flex`,`w-md`,`max-w-[85vw]`,`flex-col`,`items-center`,`space-y-4`,`p-4`,`sm:h-auto`],[`loading`,``],[1,`bg-base-200`,`sticky`,`bottom-0`,`m-2`,`flex`,`items-center`,`justify-center`,`space-x-2`,`rounded-sm`,`border-none`,`p-2`],[1,`text-5xl`,3,`icon`],[`content`,``,1,`text-center`,3,`innerHTML`],[1,`flex`,`h-48`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-4`],[`diameter`,`32`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`bg-base-100`,`flex-1`],[`btn`,``,`matRipple`,``,`name`,`accept`,1,`flex-1`,3,`click`]],template:function(n,l){n&1&&(As(0,`header`,0)(1,`h2`,1),lT(2),Ll()(),vb(3,B$1,3,2,`main`,2)(4,G,5,1,`main`,3),vb(5,q$2,7,6,`footer`,4)),n&2&&(QI(2),Hm(l.title()),QI(),Db(l.loading()?4:3),QI(2),Db(l.loading()?-1:5))},dependencies:[J$3,Z$1,O,Mt$1,yt$2,Ht,Bt$1,f$1],encapsulation:2})}}return t})();var ie$1=[{id:`templates`,label:Et$1(`SIGNAGE_MANAGER.FEATURE_TEMPLATES`)},{id:`template-editing`,label:Et$1(`SIGNAGE_MANAGER.FEATURE_TEMPLATE_EDITING`)},{id:`ai-generation`,label:Et$1(`SIGNAGE_MANAGER.FEATURE_IMAGE_GENERATION`)},{id:`ai-editing`,label:Et$1(`SIGNAGE_MANAGER.FEATURE_IMAGE_EDITING`)},{id:`branding-editing`,label:Et$1(`SIGNAGE_MANAGER.FEATURE_BRANDING_EDITING`)}];var K$1=ie$1.map(({id:t})=>t);var me=[`branding-editing`];function Z(t){return!!t&&typeof t==`object`&&!Array.isArray(t)}function B(t){return Array.isArray(t)?t.filter(r=>typeof r==`string`):void 0}function W(t){if(!Z(t))return{};let r=Z(t.signage)?t.signage:t,e={},s=B(r.features),a=B(r.available_plugins);return s&&(e.features=s),a&&(e.available_plugins=a),e}function X$1(t,r){let e=r.features;return e?t.filter(s=>e.includes(s)):[...t]}function fe(t,r){let e=l$2({},t);for(let s of[`features`,`available_plugins`]){let a=r[s],i=t[s];a&&i&&(e[s]=i.filter(o=>a.includes(o)))}return e}function Ee$1(t){if(c$1(t)===404)return{};throw t}var ne$1=[`id`,`name`,`display_name`,`description`,`tags`].join(`,`);function Me(t){let r=t.trim();return r?{q:r,fields:ne$1}:{}}async function J$1(t,r=50){let e=[],s=await t;for(let a=1;;a++){let i=s.data||[];e.push(...i);let o=i.length&&a<r?s.next?.():null;if(!o)break;s=await o}return e.map(d)}function be(t,r){return(t||[]).map(e=>r[e.id]||e).sort(L)}function $(t){return new Promise(r=>{let e=t.afterClosed().subscribe(s=>{e.unsubscribe(),r(s)})})}var ee$1=st$2(0);var Re=ee$1.asReadonly();function te$1(){ee$1.update(t=>t+1)}function oe$1(t,r,e){switch(t){case`media`:return Dd(r,e);case`playlists`:return Nd(r,e);case`templates`:return Jd(r)}}async function we(t,r,e=``){if(!r)return[];try{return(await oe$1(t,r,e?{group_id:e}:{})).shared_with??[]}catch{return[]}}function Te(t,r,e){switch(t){case`media`:return qd(r,{group_id:e});case`playlists`:return Ud(r,{group_id:e});case`templates`:return Kd(r,{group_id:e})}}var ue={media:{title:`SIGNAGE_MANAGER.SVC_SHARE_MEDIA_TITLE`,success:`SIGNAGE_MANAGER.SVC_MEDIA_SHARED`,request:Ad},playlists:{title:`SIGNAGE_MANAGER.SVC_SHARE_PLAYLIST_TITLE`,success:`SIGNAGE_MANAGER.SVC_PLAYLIST_SHARED`,request:Zd},templates:{title:`SIGNAGE_MANAGER.SVC_SHARE_TEMPLATE_TITLE`,success:`SIGNAGE_MANAGER.SVC_TEMPLATE_SHARED`,request:el}};var M=`PlaceOS.SIGNAGE:selected-group:v1`;var _e=[`id`,`name`,`description`,`subsystems`,`authority_id`,`parent_id`,`features`,`children_count`].join(`,`);var ge=50;var se$1={features:[],available_plugins:[]};var _=(function(t){return t[t.Read=1]=`Read`,t[t.Create=2]=`Create`,t[t.Update=4]=`Update`,t[t.Delete=8]=`Delete`,t[t.Operate=16]=`Operate`,t[t.Approve=32]=`Approve`,t[t.Manage=64]=`Manage`,t[t.Share=128]=`Share`,t})(_||{});function de$1(){if(typeof localStorage>`u`)return``;try{return localStorage.getItem(M)||``}catch{return``}}function pe(t){if(!(typeof localStorage>`u`))try{t?localStorage.setItem(M,t):localStorage.removeItem(M)}catch{}}function Qe(t){return t.map(d).sort(P$1)}function ae$1(t,r=()=>``){return Ks({source:()=>({value:t.hasValue()?t.value():void 0,key:r()}),computation:(e,s)=>e.value??(s?.source.key===e.key?s.value:void 0)})}function re$1(t,r){let e=null;return s=>{let a=r();if(e?.key===s&&e.user===a)return e.promise;let i={key:s,user:a,promise:t()};return i.promise=i.promise.catch(o=>{throw e===i&&(e=null),o}),e=i,i.promise}}function ce$1(t,r){if(!t)return[];let e=new Map(r.map(o=>[o.id,o])),s=[],a=new Set,i=t;for(;i?.id&&!a.has(i.id);)s.unshift(i),a.add(i.id),i=i.parent_id?e.get(i.parent_id):void 0;return s}var Ye=(()=>{class t{reloadSignageGroups(){this._groups_change.set(Date.now())}async queryManageableGroups(e={}){return(await J$1(Vc(l$2({limit:200,fields:_e,subsystem:`signage`},e)),ge)).filter(i=>i.subsystems?.includes(`signage`)).sort(P$1)}hasFeature(e){return this.features().includes(e)}constructor(){this._org=D(We),this._settings=D(H),this._dialog=D(ee$2),this._change=st$2(Date.now()),this._groups_change=st$2(Date.now()),this.show_group_selector=this._settings.signal(`show_group_selector`,!0),this.global_features=this._settings.signal(`features`,K$1),this.current_user=Ws(),this.active_user=we$1(()=>{let e=this.current_user();return e?.email&&e.email!==`<empty>@dev.place.tech`?e:null}),this.signage_groups_loaded=we$1(()=>{if(!this.active_user()?.email)return!1;let e=this._signage_groups.status();return e===`resolved`||e===`local`||e===`error`}),this.selected_group_id=st$2(de$1()),this._group_switch=st$2(0),this.group_switch=this._group_switch.asReadonly(),this.groups_change=this._groups_change.asReadonly(),this._user_loaded=Ks({source:ht$2,computation:(e,s)=>e||!!s?.value}),this._signage_groups=PT({params:()=>this._user_loaded()?{user_email:this.active_user()?.email||``,groups_change:this._groups_change(),sys_admin:this.is_sys_admin()}:void 0,loader:async({params:e})=>{if(!e.user_email)return[];try{let s=e.sys_admin?(await this.allSignageGroups(e.groups_change)).map(a=>({group:a,permissions:_.Manage})):await this.currentSignageGroups(e.groups_change);return this.signage_groups_failed.set(!1),s.map(d).sort((a,i)=>a.group.name.localeCompare(i.group.name))}catch(s){throw this.signage_groups_failed.set(!0),s}}}),this.signage_groups_failed=st$2(!1),this._loaded_signage_groups=ae$1(this._signage_groups,()=>this.active_user()?.email),this.signage_groups=we$1(()=>this._loaded_signage_groups()||[]),this.selected_group=we$1(()=>{let e=this.selected_group_id();return this.signage_groups().find(s=>s.group.id===e)}),this.selected_group_hierarchy=we$1(()=>ce$1(this.selected_group()?.group,this.signage_groups().map(e=>e.group))),this.is_sys_admin=we$1(()=>{let e=this.current_user();return!!e.sys_admin||(e.groups||[]).includes(`placeos_admin`)}),this._is_support=we$1(()=>{let e=this.current_user();return!!e.support||(e.groups||[]).includes(`placeos_support`)}),this.can_manage_all_groups=we$1(()=>this.is_sys_admin()||this._is_support()),this.can_manage_groups=we$1(()=>this.can_manage_all_groups()||this.signage_groups().some(({permissions:e})=>!!(e&_.Manage))),this.currentSignageGroups=re$1(()=>Kc({subsystem:`signage`}),()=>ue$1(this.active_user)?.email),this.allSignageGroups=re$1(()=>this.queryManageableGroups(),()=>ue$1(this.active_user)?.email),this.api_group_id=we$1(()=>this.selected_group()?.group.id||``),this.api_group_id_debounced=SV(this.api_group_id,300),this.can_create=we$1(()=>this._hasGroupPermission(_.Create)),this.can_update=we$1(()=>this._hasGroupPermission(_.Update)),this.can_delete=we$1(()=>this._hasGroupPermission(_.Delete)),this.can_update_media_tags=we$1(()=>this.api_group_id()?this.can_update():this.is_sys_admin()),this.can_delete_tagged_media=we$1(()=>this.api_group_id()?this.can_delete():this.is_sys_admin()),this.can_delete_displays=this.is_sys_admin,this.can_approve=we$1(()=>this._hasGroupPermission(_.Approve)),this.can_share=we$1(()=>this._hasGroupPermission(_.Share)),this.can_manage_zones=we$1(()=>this._hasGroupPermission(_.Manage)),this._group_features=PT({params:()=>({group_id:this.api_group_id_debounced.value(),groups_change:this._groups_change()}),loader:async({params:e})=>({group_id:e.group_id,features:await this.loadGroupFeatures(e.group_id).catch(s=>c$1(s)===404?{}:se$1)})}),this._loaded_group_features=ae$1(this._group_features),this._selected_group_features=we$1(()=>{let e=this._loaded_group_features();return e?.group_id===this.api_group_id()?e.features:void 0}),this.group_features=we$1(()=>this._selected_group_features()??se$1),this.features_ready=we$1(()=>this.signage_groups_loaded()?this.signage_groups_failed()?!0:(!!this.selected_group()||!this.selected_group_id()&&(this.can_manage_all_groups()||!this.signage_groups().length))&&!!this._selected_group_features():!1),this.features=we$1(()=>X$1(this.global_features()||[],this.group_features())),this.templates_enabled=we$1(()=>this.hasFeature(`templates`)),this._can_edit_templates=we$1(()=>this.hasFeature(`template-editing`)),this.can_create_templates=we$1(()=>this.can_create()&&this._can_edit_templates()),this.can_update_templates=we$1(()=>this.can_update()&&this._can_edit_templates()),this.can_delete_templates=we$1(()=>this.can_delete()&&this._can_edit_templates()),this.can_query_group_data=we$1(()=>this.can_manage_all_groups()||!!this.api_group_id_debounced.value()),this.data_change=this._change.asReadonly(),os(()=>{if(!this.signage_groups_loaded()||this.signage_groups_failed())return;let e=this.signage_groups(),s=this.selected_group_id();if(!e.length){this.selected_group_id.set(``);return}e.some(a=>a.group.id===s)||this.selected_group_id.set(this.can_manage_all_groups()?``:e[0].group.id)}),os(()=>pe(this.selected_group_id()))}canQueryLists(){return this._org.initialised()&&this.can_query_group_data()}changed(){this._change.set(Date.now())}canManageSignageGroup(e=``){return this.can_manage_all_groups()?!0:!!(this.signage_groups().find(a=>a.group.id===e)?.permissions&_.Manage)}async loadGroupFeatures(e){if(!e)return{};return W(await td(e,{subsystem:`signage`}))}setSelectedGroup(e){(e?this.signage_groups().some(a=>a.group.id===e):this.can_manage_all_groups())&&(this.selected_group_id.set(e),this._group_switch.update(a=>a+1))}async selectGroup(){let e=await this._pickGroup({title:Et$1(`SIGNAGE_MANAGER.SELECT_SIGNAGE_GROUP`),groups:this.signage_groups(),selected_group_id:this.selected_group_id(),show_all_groups:this.can_manage_all_groups()});e!==void 0&&this.setSelectedGroup(e)}_hasGroupPermission(e){if(this.is_sys_admin())return!0;let s=this.selected_group()?.permissions||0;return!!(s&_.Manage||s&e)}requirePermission(e,s){return e?!0:(Yh(Et$1(s)),!1)}groupQueryParams(e,s=this.api_group_id()){return l$2(l$2({},e),s?{group_id:s}:{})}orgZoneQueryParams(e,s=this.api_group_id()){let a=this._org.organisation?.id,i={};return s?i={group_id:s}:a&&(i={zone_id:a}),l$2(l$2({},e),i)}async shareItems(e,s){if(!this.requirePermission(this.can_share(),`SIGNAGE_MANAGER.SVC_NO_SHARE_ITEMS`))return!1;let a=this.selected_group()?.group.id||``,i=this.signage_groups().filter(f=>f.group.id!==a);if(!i.length)return Yh(Et$1(`SIGNAGE_MANAGER.SVC_NO_GROUPS_TO_SHARE`)),!1;let o=ue[e],g=await this._pickGroup({title:Et$1(o.title),groups:i});if(!g)return!1;let c={items:s.join(`,`),to:g};try{await o.request(c)}catch{return Wh(Et$1(`SIGNAGE_MANAGER.SVC_ERR_SHARE`)),!1}return te$1(),Lh(Et$1(o.success)),!0}async groupsHolding(e,s){let a=this.signage_groups().filter(({group:g})=>g.id),i=a.find(({group:g})=>g.id===this.api_group_id());if(i)return[i];let o=await Promise.all(a.map(({group:g})=>s(g.id).then(c=>(c.data||[]).some(({id:f})=>f===e),()=>!1)));return a.filter((g,c)=>o[c])}async _pickGroup(e){let{GroupSelectModalComponent:s}=await import(`./chunk-CuxT7jDH2.js`);return $(this._dialog.open(s,{data:e,panelClass:`mobile-fullscreen`}))}static{this.ɵfac=function(s){return new(s||t)}}static{this.ɵprov=A$2({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();var it=[`top`,`bottom`,`left`,`right`,`floating`];var et={top:`align_vertical_top`,bottom:`align_vertical_bottom`,left:`align_horizontal_left`,right:`align_horizontal_right`,floating:`picture_in_picture`};var at$1={top:`SIGNAGE_MANAGER.TEMPLATE_POSITION_TOP`,bottom:`SIGNAGE_MANAGER.TEMPLATE_POSITION_BOTTOM`,left:`SIGNAGE_MANAGER.TEMPLATE_POSITION_LEFT`,right:`SIGNAGE_MANAGER.TEMPLATE_POSITION_RIGHT`,floating:`SIGNAGE_MANAGER.TEMPLATE_POSITION_FLOATING`};function st$1(i){return et[i]||`crop_free`}function rt(i){return at$1[i]||i}var R=(i,s,t)=>Math.min(Math.max(i,s),Math.max(s,t));function h(i){return i===void 0?null:R(i,0,1)*100}function P(i){return i===null||!Number.isFinite(i)?void 0:R(i/100,0,1)}function _t$1(i,s){let t=h(i[s]);return t!==null?Math.round(t*100)/100:i.position===`floating`?0:s===`x_pos`?20:15}function nt(i){let s=[];return[`left`,`right`,`floating`].includes(i.position)&&s.push(`x_pos`),[`top`,`bottom`,`floating`].includes(i.position)&&s.push(`y_pos`),s}function ot$1(i,s,t){return i===`Home`?0:i===`End`?t-1:i===`ArrowLeft`?(s-1+t)%t:i===`ArrowRight`?(s+1)%t:null}function y$1(i){switch(i.position){case`top`:case`bottom`:return m$1(l$2({},i),{y_pos:i.y_pos??P(15)});case`left`:case`right`:return m$1(l$2({},i),{x_pos:i.x_pos??P(20)});case`floating`:return m$1(l$2({},i),{x_pos:i.x_pos??P(0),y_pos:i.y_pos??P(0)})}}function lt$1(i){let{position:s,x_pos:t,y_pos:e}=y$1(i);return s===`floating`?t!==void 0&&e!==void 0:[t,e].every(a=>a===void 0||a>0&&a<1)}function pt$1(i){let s={left:0,top:0,width:100,height:100};return i.map(t=>{switch(t.position){case`top`:{let e=Math.min(h(t.y_pos)??15,s.height),a=m$1(l$2({},s),{height:e});return s.top+=e,s.height-=e,a}case`bottom`:{let e=Math.min(h(t.y_pos)??15,s.height),a=m$1(l$2({},s),{top:s.top+s.height-e,height:e});return s.height-=e,a}case`left`:{let e=Math.min(h(t.x_pos)??20,s.width),a=m$1(l$2({},s),{width:e});return s.left+=e,s.width-=e,a}case`right`:{let e=Math.min(h(t.x_pos)??20,s.width),a=m$1(l$2({},s),{left:s.left+s.width-e,width:e});return s.width-=e,a}default:{let e=R(h(t.x_pos)??0,0,100),a=R(h(t.y_pos)??0,0,100);return{left:e,top:a,width:100-e,height:100-a}}}})}function A$1(i,s){return(i.live_template_id||i.id)===(s.live_template_id||s.id)}function tt(i){return i.live_template_id&&i.live_template_id!==i.id?new hn(m$1(l$2({},i),{id:i.live_template_id})):i}var yt$1=(()=>{class i{constructor(){this._org=D(We),this._dialog=D(ee$2),this._context=D(Ye),this.template_search_term=st$2(``),this._template_search_debounced=SV(this.template_search_term,400),this._template_list=new h$1({sort:P$1}),this._held_drafts=st$2({}),this.templates=we$1(()=>{let t=this._held_drafts();return this._template_list.items().map(e=>t[e.id]??e)}),this.templates_loading=this._template_list.loading,this.templates_has_more=this._template_list.has_more,this.templates_error=this._template_list.error,this.templates_total=this._template_list.total,this._templates_retry=st$2(0),this._user_retries=st$2(0),this.templates_retries=this._user_retries.asReadonly(),this._templates_queried=st$2(!1),this.templates_ready=we$1(()=>this._templates_queried()&&!this._template_list.loading()),this._template_query=null,this._reload_templates=os(()=>{let t=this._context.templates_enabled(),e=this._org.initialised(),a=this._context.can_query_group_data(),r=this._context.api_group_id_debounced.value(),o=this._template_search_debounced.value().trim();this._context.data_change(),this._templates_retry(),ue$1(()=>{let p=t&&e&&a;this._template_query?.group_id!==r&&this._held_drafts.set({});let u=p&&this._template_query?.group_id===r&&this._template_query.search===o,N=u?Math.max(200,this._template_list.loaded_rows):200;this._template_query=p?{group_id:r,search:o}:null,this._templates_queried.set(p),this._template_list.reset(p?Xd(this._context.groupQueryParams(l$2({limit:N},Me(o)),r)):null,{keep_items:u})})}),this.template_mappings_revision=st$2(0),this.template_mapping_opening=st$2(!1),this.selected_template=st$2(null),this.selected_template_requires_approval=we$1(()=>{let t=this.selected_template();return!!t?.id&&!t.approved}),this.template_approval_request_loading=st$2(!1),this.selected_template_layout_index=st$2(null),this.template_layout_draft=Ks({source:this.selected_template,computation:(t,e)=>{let a=e?.source;return!!t&&!!a&&A$1(a,t)&&JSON.stringify(e.value)!==JSON.stringify(a.layouts??[])?e.value:structuredClone(t?.layouts??[])}}),this.template_layout_dirty=we$1(()=>JSON.stringify(this.template_layout_draft())!==JSON.stringify(this.selected_template()?.layouts??[]))}loadMoreTemplates(){this._template_list.loadMore()}reloadTemplates(){this._user_retries.update(t=>t+1),this._template_list.retry()||this._templates_retry.update(t=>t+1)}async loadTemplate(t){if(!t)return null;let e=this._context.api_group_id();try{let a=tt(d(await Jd(t)));return this._context.api_group_id()!==e?null:(this._holdDraft(a),this._template_query?.search||this._template_list.update(r=>[...r.filter(o=>!A$1(o,a)),a].sort(P$1)),a)}catch{return null}}async listApprovedTemplates(){return this._context.canQueryLists()?(await V({path:`signage/templates`,query_params:this._context.groupQueryParams({approved:!0,limit:1e4}),fn:e=>new hn(d(e))})).data:[]}async listTemplateMappings(t){return this._context.canQueryLists()?(await V({path:`signage/template_mappings`,query_params:m$1(l$2({},t),{limit:1e4}),fn:a=>new r(m$1(l$2({},a),{template_details:d(a.template_details)}))})).data:[]}async addTemplate(){if(!this._context.requirePermission(this._context.can_create_templates(),`SIGNAGE_MANAGER.SVC_NO_CREATE_TEMPLATES`))return;let{TemplateEditModalComponent:t}=await import(`./chunk-Ce1Mmm03.js`);await $(this._dialog.open(t,{data:{template:new hn({}),onAdd:r=>this._addSignageTemplate(r)},panelClass:`mobile-fullscreen`}))&&this._context.changed()}async editTemplate(t){if(!this._context.requirePermission(this._context.can_update_templates(),`SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES`))return;let{TemplateEditModalComponent:e}=await import(`./chunk-Ce1Mmm03.js`),r=await $(this._dialog.open(e,{data:{template:t,group_id:this._context.api_group_id(),onEdit:(o,p)=>Qd(o,p)},panelClass:`mobile-fullscreen`}));r&&(this.updateCachedTemplate(r),this._context.changed())}async editTemplateMapping(t,e=null){if(!this._context.requirePermission(this._context.can_update(),`SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS`)||this.template_mapping_opening())return!1;let a=[];this.template_mapping_opening.set(!0);try{e||(a=await this.listApprovedTemplates())}catch{return Wh(Et$1(`COMMON.LOAD_ERROR`)),!1}finally{this.template_mapping_opening.set(!1)}let{TemplateMappingModalComponent:r}=await import(`./chunk-D-6LbiUn2.js`),p=!!await $(this._dialog.open(r,{data:{mapping:e,templates:a,save:(u,N)=>e?il(e.id,{schedule:N}):al(m$1(l$2({},t),{template_id:u,schedule:N}))},panelClass:`mobile-fullscreen`}));return p&&this.template_mappings_revision.update(u=>u+1),p}async removeTemplateMapping(t){if(!t?.id||!this._context.requirePermission(this._context.can_update(),`SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS`))return!1;let e=await re$2({title:Et$1(`SIGNAGE_MANAGER.SVC_REMOVE_TEMPLATE_MAPPING_TITLE`),content:Et$1(`SIGNAGE_MANAGER.SVC_REMOVE_TEMPLATE_MAPPING_CONTENT`,{name:t.template_details.name}),icon:{content:`delete`}},this._dialog);if(e.reason!==`done`)return!1;try{return await ol(t.id),this.template_mappings_revision.update(a=>a+1),e.close(),Lh(Et$1(`SIGNAGE_MANAGER.SVC_TEMPLATE_MAPPING_REMOVED`)),!0}catch{return e.close(),Wh(Et$1(`SIGNAGE_MANAGER.SVC_TEMPLATE_MAPPING_REMOVE_ERROR`)),!1}}async approveTemplate(t){if(!t?.id||this._templateLayoutUnsaved(t)||!this._context.requirePermission(this._context.can_approve(),`SIGNAGE_MANAGER.SVC_NO_APPROVE_TEMPLATES`))return;let{TemplateApproveModalComponent:e}=await import(`./chunk-BrIecD9-.js`);this._dialog.open(e,{data:{template:t},panelClass:`mobile-fullscreen`})}async requestTemplateApproval(t){if(!t?.id||this.template_approval_request_loading()||this._templateLayoutUnsaved(t))return;if(this._context.can_approve()){await this.approveTemplate(t);return}let e=[],a=null;this.template_approval_request_loading.set(!0);try{if([a]=await this._context.groupsHolding(t.id,u=>Xd({group_id:u,limit:500})),!a){Yh(Et$1(`SIGNAGE_MANAGER.SVC_NO_GROUPS_FOR_TEMPLATE`));return}e=await rl(a.group.id)||[]}catch{Yh(Et$1(`SIGNAGE_MANAGER.SVC_NO_TEMPLATE_APPROVERS`))}finally{this.template_approval_request_loading.set(!1)}if(!a)return;let{TemplateRequestApprovalModalComponent:r}=await import(`./chunk-DNI1xjz_.js`),p=await $(this._dialog.open(r,{data:{template:t,approvers:e},panelClass:`mobile-fullscreen`}));if(p){try{await sl(t.id,a.group.id,p.message||``,p.approver_id||``)}catch{Wh(Et$1(`SIGNAGE_MANAGER.SVC_TEMPLATE_APPROVAL_REQUEST_ERROR`));return}this.setTemplateApprovalStatus(t.id,!1,!0),Lh(Et$1(`SIGNAGE_MANAGER.SVC_TEMPLATE_APPROVAL_REQUESTED`))}}async removeTemplate(t){if(!t?.id||!this._context.requirePermission(this._context.can_delete_templates(),`SIGNAGE_MANAGER.SVC_NO_DELETE_TEMPLATES`))return!1;let e=await re$2({title:Et$1(`SIGNAGE_MANAGER.SVC_REMOVE_TEMPLATE_TITLE`),content:Et$1(`SIGNAGE_MANAGER.SVC_DELETE_NAMED`,{name:t.name}),icon:{content:`delete`}},this._dialog);if(e.reason!==`done`)return!1;try{await Kd(t.id,this._context.groupQueryParams({}))}catch{return e.close(),Wh(Et$1(`SIGNAGE_MANAGER.SVC_TEMPLATE_REMOVE_ERROR`)),!1}return this._releaseDraft(t.id),this._template_list.update(a=>a.filter(r=>!A$1(r,t))),this._template_list.adjustTotal(-1),this.selected_template()?.id===t.id&&(this.selected_template.set(null),this.selected_template_layout_index.set(null)),this._context.changed(),Lh(Et$1(`SIGNAGE_MANAGER.SVC_TEMPLATE_REMOVED`)),e.close(),!0}async duplicateTemplate(t){if(!t?.id||!this._context.requirePermission(this._context.can_create_templates(),`SIGNAGE_MANAGER.SVC_NO_CREATE_TEMPLATES`))return null;try{let e=await this._addSignageTemplate({name:Et$1(`SIGNAGE_MANAGER.COPY_NAME`,{name:t.name}),description:t.description||void 0,tags:t.tags,background_item_id:t.background_item_id||void 0,full_screen_takeover:t.full_screen_takeover,merge:t.merge,layouts:(t.layouts||[]).map(y$1)});return this._context.changed(),Lh(Et$1(`SIGNAGE_MANAGER.SVC_TEMPLATE_DUPLICATED`)),e}catch{return Wh(Et$1(`SIGNAGE_MANAGER.SVC_TEMPLATE_DUPLICATE_ERROR`)),null}}async shareTemplate(t){t?.id&&await this._context.shareItems(`templates`,[t.id])}async saveTemplateLayouts(){let t=this.selected_template();if(!(!t?.id||!this.template_layout_dirty())&&this._context.requirePermission(this._context.can_update_templates(),`SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES`))try{let e=this.template_layout_draft().map(y$1),r=d(new hn(m$1(l$2({},await Qd(t.id,{layouts:e})),{layouts:e})));this.updateCachedTemplate(r),this.discardTemplateLayoutDraft(),Lh(Et$1(`SIGNAGE_MANAGER.SVC_TEMPLATE_LAYOUTS_SAVED`))}catch{Wh(Et$1(`SIGNAGE_MANAGER.SVC_TEMPLATE_SAVE_ERROR`))}}discardTemplateLayoutDraft(){this.template_layout_draft.set(structuredClone(this.selected_template()?.layouts??[]))}async undoTemplateChanges(t,e){if(!this._context.requirePermission(this._context.can_update_templates(),`SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES`))return!1;let a=await re$2({title:Et$1(`SIGNAGE_MANAGER.UNDO_CHANGES`),content:Et$1(`SIGNAGE_MANAGER.TEMPLATE_REVERT_CONFIRM`,{name:e.name}),confirm_text:Et$1(`SIGNAGE_MANAGER.UNDO_CHANGES`),icon:{content:`undo`}},this._dialog);if(a.reason!==`done`)return!1;a.loading(Et$1(`SIGNAGE_MANAGER.UNDOING_CHANGES`));let r=this._dialog.openDialogs.at(-1);r?.componentInstance instanceof K$2&&(r.disableClose=!0);try{await tl(t)}catch{return Wh(Et$1(`SIGNAGE_MANAGER.TEMPLATE_REVERT_ERROR`)),!1}finally{a.close()}return this.updateCachedTemplate(e),Lh(Et$1(`SIGNAGE_MANAGER.TEMPLATE_REVERTED`)),this._context.changed(),!0}setTemplateApprovalStatus(t,e,a=!1){let r=this.templates().find(o=>o.id===t)||this.selected_template();!r||r.id!==t||this.updateCachedTemplate(new hn(m$1(l$2({},r),{approved:e,approval_requested:a})))}updateCachedTemplate(t){let e=tt(t);this._holdDraft(e),this._template_list.update(r=>r.map(o=>A$1(o,e)?e:o));let a=this.selected_template();a&&A$1(a,e)&&this.selected_template.set(e)}_holdDraft(t){if(t.approved){this._releaseDraft(t.id);return}!t.live_template_id&&!this._held_drafts()[t.id]||this._held_drafts.update(e=>m$1(l$2({},e),{[t.id]:t}))}_releaseDraft(t){this._held_drafts()[t]&&this._held_drafts.update(e=>{let a=l$2({},e);return delete a[t],a})}_templateLayoutUnsaved(t){let e=this.selected_template();return!e||!A$1(e,t)||!this.template_layout_dirty()?!1:(Yh(Et$1(`SIGNAGE_MANAGER.SVC_TEMPLATE_LAYOUTS_UNSAVED`)),!0)}_addSignageTemplate(t){return Vd(t,this._context.groupQueryParams({}))}static{this.ɵfac=function(e){return new(e||i)}}static{this.ɵprov=A$2({token:i,factory:i.ɵfac,providedIn:`root`})}}return i})();var t=`systems`;function n(e){return d(Object.assign(new Se(e),{signage_last_seen:e.signage_last_seen||0}))}function c(e){return V({query_params:e,fn:n,path:t})}function f(e){return Q$1({id:e,query_params:{},fn:n,path:t})}function m(e,a){return wt({id:e,form_data:a,query_params:{},method:`patch`,fn:n,path:t})}function l$1(e){return Qt({form_data:e,query_params:{},fn:n,path:t})}var q$1={displays:[],playlists:[],templates:[],zones:[],media:[]};var z=(()=>{class e{constructor(){this._dialog=D(ee$2),this._context=D(Ye),this._ref=null,this._opening=!1}async toggle(){if(this._ref){this._ref.close();return}if(!(this._opening||this._dialog.openDialogs.length)){this._opening=!0;try{let{CommandPaletteComponent:a}=await import(`./chunk-CQrJTbGe.js`);this._ref=this._dialog.open(a,{position:{top:`12vh`},width:`36rem`,maxWidth:`95vw`,ariaLabel:Et$1(`SIGNAGE_MANAGER.PALETTE_OPEN`)}),this._ref.afterClosed().subscribe(()=>this._ref=null)}finally{this._opening=!1}}}async searchAll(a,r=5){let i=a.trim();if(!i||!this._context.canQueryLists())return q$1;let o=l$2(l$2({},this._context.orgZoneQueryParams({limit:r})),Me(i)),m=this._context.groupQueryParams(l$2({limit:r},Me(i))),s=async A=>{try{return((await A).data||[]).slice(0,r).map(d)}catch{return[]}},[E,x,b,v,w]=await Promise.all([s(c(m$1(l$2({},o),{signage:!0}))),s(Cd(o)),this._context.templates_enabled()?s(Xd(m)):Promise.resolve([]),s(bd(m$1(l$2({},m),{tags:`signage`}))),s(kd(o))]);return{displays:E,playlists:x,templates:b,zones:v,media:w}}static{this.ɵfac=function(r){return new(r||e)}}static{this.ɵprov=A$2({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();var K=(()=>{class t{_animationsDisabled=ui();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(n){return new(n||t)};static ɵcmp=bC({type:t,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(n,i){n&2&&Fm(`mat-pseudo-checkbox-indeterminate`,i.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,i.state===`checked`)(`mat-pseudo-checkbox-disabled`,i.disabled)(`mat-pseudo-checkbox-minimal`,i.appearance===`minimal`)(`mat-pseudo-checkbox-full`,i.appearance===`full`)(`_mat-animation-noopable`,i._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(n,i){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return t})();var ne=[`text`];var ie=[[[`mat-icon`]],`*`];var oe=[`mat-icon`,`*`];function ae(t,o){if(t&1&&Dm(0,`mat-pseudo-checkbox`,1),t&2){let e=kb();vm(`disabled`,e.disabled)(`state`,e.selected?`checked`:`unchecked`)}}function re(t,o){if(t&1&&Dm(0,`mat-pseudo-checkbox`,3),t&2)vm(`disabled`,kb().disabled)}function se(t,o){if(t&1&&(As(0,`span`,4),lT(1),Ll()),t&2){let e=kb();QI(),Ul(`(`,e.group.label,`)`)}}var le=new C$1(`MAT_OPTION_PARENT_COMPONENT`);var ce=new C$1(`MatOptgroup`);var C=class{source;isUserInput;constructor(o,e=!1){this.source=o,this.isUserInput=e}};var X=(()=>{class t{_element=D(Xt$1);_changeDetectorRef=D(gy);_parent=D(le,{optional:!0});group=D(ce,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=D(fe$1).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=st$2(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new It$1;_text;_stateChanges=new ne$2;constructor(){let e=D(R$1);e.load(Rt$1),e.load(X$2),this._signalDisableRipple=!!this._parent&&Sn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,n){let i=this._getHostElement();typeof i.focus==`function`&&i.focus(n)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!dt$1(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new C(this,e))}static ɵfac=function(n){return new(n||t)};static ɵcmp=bC({type:t,selectors:[[`mat-option`]],viewQuery:function(n,i){if(n&1&&Nm(ne,7),n&2){let a;Bb(a=Vb())&&(i._text=a.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(n,i){n&1&&Tm(`click`,function(){return i._selectViaInteraction()})(`keydown`,function(s){return i._handleKeydown(s)}),n&2&&(Cm(`id`,i.id),ym(`aria-selected`,i.selected)(`aria-disabled`,i.disabled.toString()),Fm(`mdc-list-item--selected`,i.selected)(`mat-mdc-option-multiple`,i.multiple)(`mat-mdc-option-active`,i.active)(`mdc-list-item--disabled`,i.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,h_]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:oe,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(n,i){n&1&&(Lb(ie),vb(0,ae,1,2,`mat-pseudo-checkbox`,1),Pb(1),As(2,`span`,2,0),Pb(4,1),Ll(),vb(5,re,1,1,`mat-pseudo-checkbox`,3),vb(6,se,2,1,`span`,4),Dm(7,`div`,5)),n&2&&(Db(i.multiple?0:-1),QI(5),Db(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),QI(),Db(i.group&&i.group._inert?6:-1),QI(),vm(`matRippleTrigger`,i._getHostElement())(`matRippleDisabled`,i.disabled||i.disableRipple))},dependencies:[K,yt$2],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return t})();function Ie(t,o,e){if(e.length){let n=o.toArray(),i=e.toArray(),a=0;for(let s=0;s<t+1;s++)n[s].group&&n[s].group===i[a]&&a++;return a}return 0}function Ee(t,o,e,n){return t<e?t:t+o>e+n?Math.max(0,t-n+o):e}var Oe=(()=>{class t{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}isSignalErrorState(e){if(!e)return!1;let n=e().invalid(),i=e().touched();return n&&i}static ɵfac=function(n){return new(n||t)};static ɵprov=Kt({token:t,factory:t.ɵfac})}return t})();var q=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=qs({type:t});static ɵinj=Yr({imports:[Cn]})}return t})();var He=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=qs({type:t});static ɵinj=Yr({imports:[Mt$1,q,X,Cn]})}return t})();var J=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(o,e,n,i,a){this._defaultMatcher=o,this._parentFormGroup=n,this._parentForm=i,this._stateChanges=a,e?Sn(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let o=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==o&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(o){if(this.formField&&o?.isSignalErrorState)return o.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,n=this.ngControl?this.ngControl.control:null;return o?.isErrorState(n,e)??!1}};var de=[`*`];var Ue=(()=>{class t{labelPosition=`after`;static ɵfac=function(n){return new(n||t)};static ɵcmp=bC({type:t,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(n,i){n&2&&Fm(`mdc-form-field--align-end`,i.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:de,decls:1,vars:0,template:function(n,i){n&1&&(Lb(),Pb(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return t})();var y={capture:!0};var T=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var p=`mat-ripple-loader-uninitialized`;var l=`mat-ripple-loader-class-name`;var A=`mat-ripple-loader-centered`;var s=`mat-ripple-loader-disabled`;var N=(()=>{class r{_document=D(W$1);_animationsDisabled=ui();_globalRippleOptions=D(et$1,{optional:!0});_platform=D(_$1);_ngZone=D(ge$1);_injector=D(ae$2);_eventCleanups;_hosts=new Map;constructor(){let e=D(kn).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>T.map(t=>e.listen(this._document,t,this._onInteraction,y)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(p,this._globalRippleOptions?.namespace??``),(t.className||!e.hasAttribute(l))&&e.setAttribute(l,t.className||``),t.centered&&e.setAttribute(A,``),t.disabled&&e.setAttribute(s,``)}setDisabled(e,t){let i=this._hosts.get(e);i?(i.target.rippleDisabled=t,!t&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):t?e.setAttribute(s,``):e.removeAttribute(s)}_onInteraction=e=>{let t=F(e);if(t instanceof HTMLElement){let i=t.closest(`[${p}="${this._globalRippleOptions?.namespace??``}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(`.mat-ripple`)?.remove();let t=this._document.createElement(`span`);t.classList.add(`mat-ripple`,e.getAttribute(l)),e.append(t);let i=this._globalRippleOptions,E=this._animationsDisabled?0:i?.animation?.enterDuration??V$1.enterDuration,O=this._animationsDisabled?0:i?.animation?.exitDuration??V$1.exitDuration,a={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(s),rippleConfig:{centered:e.hasAttribute(A),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:E,exitDuration:O}}},c=new R$2(a,this._ngZone,t,this._platform,this._injector),m=!a.rippleDisabled;m&&c.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:c,hasSetUpEvents:m}),e.removeAttribute(p)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static ɵfac=function(t){return new(t||r)};static ɵprov=Kt({token:r,factory:r.ɵfac})}return r})();function yt(e,s){if(e&1&&Dm(0,`div`,1)(1,`div`,2),e&2){let t=s;km(`background-color`,t),QI(),km(`background-color`,t)}}function Ct(e,s){if(e&1){let t=Nb();As(0,`div`,3)(1,`div`,4),lT(2),Ll(),As(3,`button`,5),Tm(`click`,function(){Zf(t);return Yf(kb().close())}),As(4,`icon`),lT(5,`close`),Ll()()()}if(e&2){let t=kb();Fm(`bg-info`,t.banner().type===`info`||!t.banner().type)(`text-info-content`,t.banner().type===`info`||!t.banner().type)(`bg-warning`,t.banner().type===`warn`)(`text-warning-content`,t.banner().type===`warn`)(`bg-error`,t.banner().type===`error`)(`text-error-content`,t.banner().type===`error`),QI(2),Ul(` `,t.banner()?.content||t.banner()?.message,` `)}}var ot=(()=>{class e{constructor(){this._org=D(We),this._change=st$2(0),this.is_setup=st$2(!1),this.banner=qs$1(`banner`),this.environment_bar=qs$1(`environment_bar`),this._environment_bar_padding=os(()=>{document.body.classList.toggle(`has-environment-bar`,!!this.environment_bar())}),this.has_been_closed=we$1(()=>this.is_setup()?(this._change(),!this.banner()?.content&&!this.banner()?.message||localStorage.getItem(`PLACE.last_banner`)===this.banner().id):!0)}async ngOnInit(){await this._org.waitUntilInitialised(),setTimeout(()=>this.is_setup.set(!0),500)}async close(){localStorage.setItem(`PLACE.last_banner`,this.banner()?.id||``),this._change.set(Date.now())}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=bC({type:e,selectors:[[`global-banner`]],decls:2,vars:2,consts:[[1,`flex`,`w-full`,`items-center`,`space-x-4`,`p-4`,`print:hidden`,3,`bg-info`,`text-info-content`,`bg-warning`,`text-warning-content`,`bg-error`,`text-error-content`],[`aria-hidden`,`true`,1,`environment-bar`,`top-0`,`print:hidden`],[`aria-hidden`,`true`,1,`environment-bar`,`bottom-0`,`print:hidden`],[1,`flex`,`w-full`,`items-center`,`space-x-4`,`p-4`,`print:hidden`],[1,`flex-1`],[`icon`,``,`matRipple`,``,3,`click`]],template:function(n,r){if(n&1&&(vb(0,yt,2,4),vb(1,Ct,6,13,`div`,0)),n&2){let l;Db((l=r.environment_bar())?0:-1,l),QI(),Db(!r.has_been_closed()&&r.banner()?1:-1)}},dependencies:[O],styles:[`[_nghost-%COMP%]{display:block;width:100%}.environment-bar[_ngcontent-%COMP%]{height:.5rem;left:0;pointer-events:none;position:fixed;width:100%;z-index:10000}`]})}}return e})();function xt(e,s){e&1&&Em(0,`div`,2)}var St=new C$1(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`);var st=(()=>{class e{_elementRef=D(Xt$1);_ngZone=D(ge$1);_changeDetectorRef=D(gy);_renderer=D(Ir);_cleanupTransitionEnd;constructor(){let t=vt(),n=D(St,{optional:!0});this._isNoopAnimation=t===`di-disabled`,t===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),n&&(n.color&&(this.color=this._defaultColor=n.color),this.mode=n.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor=`primary`;get value(){return this._value}set value(t){this._value=at(t||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(t){this._bufferValue=at(t||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new It$1;get mode(){return this._mode}set mode(t){this._mode=t,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=t=>{this.animationEnd.observers.length===0||!t.target||!t.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(n){return new(n||e)};static ɵcmp=bC({type:e,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(n,r){n&2&&(ym(`aria-valuenow`,r._isIndeterminate()?null:r.value)(`mode`,r.mode),Jb(`mat-`+r.color),Fm(`_mat-animation-noopable`,r._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!r._isNoopAnimation)(`mdc-linear-progress--indeterminate`,r._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,g_],bufferValue:[2,`bufferValue`,`bufferValue`,g_],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(n,r){n&1&&(Pl(0,`div`,0),Em(1,`div`,1),vb(2,xt,1,0,`div`,2),jl(),Pl(3,`div`,3),Em(4,`span`,4),jl(),Pl(5,`div`,5),Em(6,`span`,4),jl()),n&2&&(QI(),km(`flex-basis`,r._getBufferBarFlexBasis()),QI(),Db(r.mode===`buffer`?2:-1),QI(),km(`transform`,r._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --%NS%mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --%NS%mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--%NS%mat-progress-bar-track-height, 4px), var(--%NS%mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--%NS%mat-progress-bar-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--%NS%mat-progress-bar-track-height, 4px);
  border-radius: var(--%NS%mat-progress-bar-track-shape, var(--%NS%mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant)) calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--%NS%mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})}return e})();function at(e,s=0,t=100){return Math.max(s,Math.min(t,e))}var ct=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=qs({type:e});static ɵinj=Yr({imports:[Cn]})}return e})();function Et(e,s){if(e&1){let t=Nb();As(0,`aside`,0)(1,`div`,1)(2,`h2`,2),lT(3),Ll(),As(4,`p`,3),lT(5),Ll()(),As(6,`button`,4),Tm(`click`,function(){Zf(t);return Yf(kb().reloadApp())}),As(7,`icon`),lT(8,`refresh`),Ll()()()}if(e&2){let t=s;QI(3),Ul(` `,t.message||`Update available`,` `),QI(2),Ul(` `,t.details||`Refresh the page to get the new version of the application`,` `),QI(),ym(`title`,t.action||`Reload App`)(`aria-label`,t.action||`Reload App`)}}var mt=(()=>{class e{constructor(){this.update=sr()}reloadApp(){location.reload()}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=bC({type:e,selectors:[[`placeos-service-worker-update-card`]],decls:1,vars:1,consts:[[`role`,`status`,`aria-live`,`assertive`,1,`border-base-300`,`bg-base-100`,`text-base-content`,`pointer-events-auto`,`fixed`,`right-4`,`bottom-4`,`z-9999`,`flex`,`w-[20rem]`,`max-w-[calc(100vw-2rem)]`,`items-center`,`gap-3`,`rounded-lg`,`border`,`p-4`,`shadow-xl`],[1,`min-w-0`,`flex-1`],[1,`m-0`,`text-sm`,`leading-tight`,`font-medium`],[1,`m-0`,`mt-1`,`text-xs`,`opacity-70`],[`icon`,``,`default`,``,3,`click`]],template:function(n,r){if(n&1&&vb(0,Et,9,4,`aside`,0),n&2){let l;Db((l=r.update())?0:-1,l)}},dependencies:[O],encapsulation:2})}}return e})();var At=()=>[import(`./chunk-mB_WYv_U.js`).then(e=>e.NativeDomainOverlayComponent)];function kt(e,s){if(e&1){let t=Nb();As(0,`native-domain-overlay`,0),Tm(`domainSet`,function(){Zf(t);return Yf(kb(2).onDomainSet())}),Ll()}if(e&2){let t=kb(2);vm(`serverError`,t.domain_error())(`autoAccept`,t.auto_confirm())}}function Nt(e,s){e&1&&(am(0,kt,1,2),pb(1,0,At),mb())}function Mt(e,s){e&1&&(As(0,`div`,0),lT(1),_T(2,`translate`),Ll()),e&2&&(QI(),Ul(` `,MT(2,1,`COMMON.SERVER_DOWN`),` `))}function Tt(e,s){if(e&1){let t=Nb();As(0,`div`,2)(1,`p`,3),lT(2),Ll(),As(3,`button`,4),Tm(`click`,function(){Zf(t);return Yf(kb(2).retry())}),lT(4,` Try again `),Ll()()}if(e&2){let t=kb(2);QI(2),Ul(` `,t.initialisation_error(),` `)}}function Dt(e,s){if(e&1&&(As(0,`div`,5)(1,`p`,6),lT(2),Ll()(),As(3,`div`,7),Dm(4,`mat-progress-bar`,8),Ll()),e&2){let t=kb(2);QI(2),Hm(t.message())}}function It(e,s){if(e&1&&(As(0,`div`,1),vb(1,Tt,5,1,`div`,2)(2,Dt,5,1),Ll()),e&2){let t=kb();QI(),Db(t.initialisation_error()?1:2)}}var Ot=(()=>{class e{constructor(){this._placeos=D(la),this.show=na(),this.domain_error=oa(),this.auto_confirm=ra()}onDomainSet(){this._placeos.onNativeDomainSet()}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=bC({type:e,selectors:[[`native-domain-overlay-loader`]],decls:1,vars:1,consts:[[3,`domainSet`,`serverError`,`autoAccept`]],template:function(n,r){n&1&&vb(0,Nt,3,0),n&2&&Db(r.show()?0:-1)},encapsulation:2})}}return e})();var lt=(()=>{class e extends y$2{constructor(){super(...arguments),this.online=st$2(!0),this.connection_checked=st$2(!1),this.message=sa(),this.initialisation_error=nr(),this.initialisation_complete=or(),this.loading=we$1(()=>!this.initialisation_complete())}retry(){rr()}ngOnInit(){let t=()=>{this.online.set(Bc()),this.online()&&(this.connection_checked.set(!0),this.clearTimeout(`initial-connection`))};this.timeout(`initial-connection`,()=>{t(),this.connection_checked.set(!0)},5e3),t(),this.interval(`online`,t,1e3)}static{this.ɵfac=(()=>{let t;return function(r){return(t||(t=_h(e)))(r||e)}})()}static{this.ɵcmp=bC({type:e,selectors:[[`global-loading`]],features:[om],decls:4,vars:2,consts:[[1,`bg-error`,`fixed`,`top-2`,`left-1/2`,`z-9999`,`-translate-x-1/2`,`rounded-3xl`,`px-4`,`py-2`,`text-xs`,`text-white`,`shadow-sm`],[`loader`,``,1,`bg-base-300`,`pointer-events-auto`,`fixed`,`inset-0`,`z-9998`,`flex`,`flex-col`,`items-center`,`justify-end`,`space-y-2`,`p-4`],[1,`border-base-300`,`bg-base-100`,`w-[24rem]`,`max-w-[calc(100vw-2rem)]`,`rounded-lg`,`border`,`p-4`,`text-center`,`text-xs`,`shadow-sm`],[`initialisation-error`,``],[`type`,`button`,1,`bg-primary`,`text-primary-content`,`mt-3`,`rounded`,`px-4`,`py-2`,3,`click`],[1,`border-base-300`,`bg-base-100`,`w-[24rem]`,`max-w-[calc(100vw-2rem)]`,`rounded-lg`,`border`,`p-2`,`text-center`,`text-xs`,`shadow-sm`],[1,`text-center`,`font-mono`],[1,`border-base-300`,`w-[24rem]`,`max-w-[calc(100vw-2rem)]`,`overflow-hidden`,`rounded-full`,`border`,`shadow-sm`],[`mode`,`indeterminate`,1,`scale-150`,`rounded-sm`]],template:function(n,r){n&1&&(Dm(0,`native-domain-overlay-loader`),vb(1,Mt,3,3,`div`,0),vb(2,It,3,1,`div`,1),Dm(3,`placeos-service-worker-update-card`)),n&2&&(QI(),Db(r.connection_checked()&&!r.online()?1:-1),QI(),Db(r.loading()||r.initialisation_error()?2:-1))},dependencies:[ct,st,Ot,mt,f$1],styles:[`[_nghost-%COMP%]{pointer-events:none}[loader][_ngcontent-%COMP%]{background-image:linear-gradient(to right,#0d47a1,#2196f3)}`]})}}return e})();var Bt=()=>[`/`];var dt=(()=>{class e{static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=bC({type:e,selectors:[[`app-unauthorised`]],decls:15,vars:11,consts:[[`unauthorised`,``,1,`absolute`,`inset-0`],[1,`border-base-300`,`bg-base-100`,`text-base-content`,`mx-auto`,`my-4`,`flex`,`w-104`,`max-w-[calc(100%-1rem)]`,`flex-col`,`gap-2`,`rounded-xl`,`border`,`p-4`,`text-center`,`shadow-lg`],[1,`text-4xl`],[1,`py-4`],[`btn`,``,3,`routerLink`]],template:function(n,r){n&1&&(As(0,`div`,0)(1,`div`,1)(2,`h1`,2),lT(3,`403`),Ll(),As(4,`h3`),lT(5),_T(6,`translate`),Ll(),As(7,`p`,3),lT(8),_T(9,`translate`),Ll(),As(10,`p`),lT(11),_T(12,`translate`),Ll(),As(13,`a`,4),lT(14,`Try Again`),Ll()()()),n&2&&(QI(5),Hm(MT(6,4,`COMMON.FORBIDDEN`)),QI(3),Ul(` `,MT(9,6,`COMMON.INVALID_PAGE_PERMISSIONS`),` `),QI(3),Ul(` `,MT(12,8,`COMMON.CONTACT_ADMIN`),` `),QI(2),vm(`routerLink`,wT(10,Bt)))},dependencies:[kt$1,f$1],styles:[`[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center}[unauthorised][_ngcontent-%COMP%]{background-image:linear-gradient(to right,#c62828,#ef5350)}`]})}}return e})();var Pt=20*1e3;function Gt(){try{return!!G$1()}catch{return!1}}function Rt(e,s){return new Promise(t=>{let n=setTimeout(()=>t(!1),s);e.then(()=>{clearTimeout(n),t(!0)},()=>{clearTimeout(n),t(!1)})})}var Q=class{};var ee=(()=>{class e{constructor(){this._router=D(q$3),this._settings=D(H),this._org=D(We),this._injector=D(ae$2),this._access=D(Q,{optional:!0})}async canActivate(t,n){return this.checkUser()}async canLoad(t,n){return this.checkUser()}async canActivateChild(t,n){return this.checkUser()}async checkUser(){if(!await this.waitForBackend(Promise.all([this._org.waitUntilInitialised(),As$1(ht$2,Boolean,this._injector)])))return this.offlineAccess();let n=this._access?.group?[this._access.group]:this._settings.get(`app.allow_access_groups`)||[],r=await this.useGroupSubsystemAccess(),l=!1;if(r){let k=await this.waitForUser();if(!k)return this.offlineAccess();l=this.checkSubsystemAccess(k),ht$1(`ACCESS`,`Checking subsystem access`,l)}else if(!n.length)l=!0,ht$1(`ACCESS`,`No access groups`,l);else{let k=await this.waitForUser();if(!k)return this.offlineAccess();l=!!(k&&n.find(vt=>k.groups.includes(vt))),ht$1(`ACCESS`,`Checking access groups`,l)}return l||this._router.navigate([`/unauthorised`]),!!l}async waitForUser(){if(!await this.waitForBackend(jc(Xc(),Boolean)))return null;let n=null;return await this.waitForBackend(yf(Di).then(l=>n=l))?n:null}async waitForBackend(t){return Rt(t,Pt)}offlineAccess(){return Gt()?(ht$1(`ACCESS`,`Backend unreachable. Continuing with cached credentials.`),!0):(ht$1(`ACCESS`,`Backend unreachable and no cached credentials.`,void 0,`warn`),this._router.navigate([`/unauthorised`]),!1)}async useGroupSubsystemAccess(){let t=be$1()?.config?.use_group_subsystem_access;return t===!0||t===`true`}checkSubsystemAccess(t){if(!t)return!1;let r=(`${this._settings.get(`app.access_subsystem`)||``}`.trim()||`${this._settings.app_name||``}`).trim().toLowerCase();return r?Eo(r,m$2.Read):!1}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵprov=A$2({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();function pt(){ht$1(`MOCKS`,`No mocks available in production`)}var Lt=()=>[import(`./chunk-CRESbRHS2.js`).then(e=>e.SettingsDebugPanelLauncherComponent)];function Ft(e,s){if(e&1){let t=Nb();As(0,`div`,1)(1,`icon`,3),lT(2,`error`),Ll(),As(3,`p`,4),lT(4),_T(5,`translate`),Ll(),As(6,`button`,5),Tm(`click`,function(){Zf(t);return Yf(kb().retryGroups())}),lT(7),_T(8,`translate`),Ll()()}e&2&&(QI(4),Ul(` `,MT(5,2,`SIGNAGE_MANAGER.GROUPS_LOAD_ERROR`),` `),QI(3),Ul(` `,MT(8,4,`COMMON.RETRY`),` `))}function Ut(e,s){if(e&1&&Dm(0,`settings-debug-panel-launcher`,6),e&2)vm(`loadSchema`,kb().load_settings_schema)}var ut=(()=>{class e{constructor(){this.load_settings_schema=()=>import(`./chunk-p4bz6ZrD.js`),this._placeos=D(la),this._uploads=D(za),this._injector=D(ae$2),this._palette=D(z),this._context=D(Ye),this._router=D(q$3),this.groups_failed=this._context.signage_groups_failed,os(()=>{this._context.features_ready()&&(this._context.templates_enabled()&&!this._context.signage_groups_failed()||ue$1(()=>{/^\/templates(\/|\?|#|$)/.test(this._router.url)&&this._router.navigate([`/media`])}))})}retryGroups(){this._context.reloadSignageGroups()}onKeydown(t){(t.metaKey||t.ctrlKey)&&(t.altKey||t.shiftKey||t.key.toLowerCase()!==`k`||(t.preventDefault(),this._palette.toggle()))}async ngOnInit(){aa(pt),await this._placeos.init(),this._uploads.init();let{ImageGenService:t}=await import(`./chunk-tRnYZw7I2.js`),n=this._injector.get(t);await n.load(be$1()?.config?.org_zone),n.enabled()&&await n.loadRecent()}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=bC({type:e,selectors:[[`app-root`]],hostBindings:function(n,r){n&1&&Tm(`keydown`,function(k){return r.onKeydown(k)},cI)},decls:11,vars:4,consts:[[`href`,`#main-content`,1,`skip-link`],[`role`,`alert`,1,`bg-error/10`,`border-error/30`,`flex`,`items-center`,`gap-3`,`border-b`,`px-4`,`py-2`,`text-sm`],[`id`,`main-content`,`tabindex`,`-1`,1,`relative`,`h-1/2`,`w-full`,`flex-1`],[1,`text-error`,`text-xl`],[1,`min-w-0`,`flex-1`],[`btn`,``,`matRipple`,``,`type`,`button`,1,`inverse`,3,`click`],[3,`loadSchema`]],template:function(n,r){n&1&&(As(0,`a`,0),lT(1),_T(2,`translate`),Ll(),Dm(3,`global-banner`),vb(4,Ft,9,6,`div`,1),As(5,`main`,2),Dm(6,`router-outlet`),Ll(),Dm(7,`global-loading`),am(8,Ut,1,1),pb(9,8,Lt),gb()),n&2&&(QI(),Hm(MT(2,2,`SIGNAGE_MANAGER.SKIP_TO_CONTENT`)),QI(3),Db(r.groups_failed()?4:-1))},dependencies:[ot,Mt$1,yt$2,O,Ar,lt,f$1],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}`]})}}return e})();var gt={production:!0};function Vt(e,s,t=!1){return e||s>0||t}var ft=async()=>{let e=D(Ye),s=D(q$3),t=D(We),n=D(ae$2);return await Promise.all([t.waitUntilInitialised(),As$1(ht$2,Boolean,n),As$1(e.signage_groups_loaded,Boolean,n)]),Vt(e.can_manage_all_groups(),e.signage_groups().length,e.signage_groups_failed())?!0:s.parseUrl(`/unauthorised`)};var _t=async()=>{let e=D(Ye),s=D(q$3),t=D(We),n=D(ae$2);return await Promise.all([t.waitUntilInitialised(),As$1(ht$2,Boolean,n),As$1(e.signage_groups_loaded,Boolean,n)]),e.can_manage_groups()||e.signage_groups_failed()?!0:s.parseUrl(`/media`)};var te=async()=>{let e=D(Ye),s=D(q$3),t=D(We),n=D(ae$2);return await Promise.all([t.waitUntilInitialised(),As$1(e.features_ready,Boolean,n)]),e.templates_enabled()&&!e.signage_groups_failed()?!0:s.parseUrl(`/media`)};var ht=async()=>{let e=D(yt$1),s=D(ee$2);if(!e.template_layout_dirty())return!0;let t=await re$2({title:Et$1(`SIGNAGE_MANAGER.TEMPLATE_UNSAVED_TITLE`),content:Et$1(`SIGNAGE_MANAGER.TEMPLATE_UNSAVED_CONTENT`),confirm_text:Et$1(`SIGNAGE_MANAGER.TEMPLATE_DISCARD`),icon:{content:`warning`}},s);return t.reason!==`done`?!1:(t.close(),e.discardTemplateLayoutDraft(),!0)};var Xt=[{path:`unauthorised`,component:dt},{path:``,canActivate:[ee],canActivateChild:[ee,ft],children:[{path:`media`,loadComponent:()=>import(`./chunk-G5G0R1nl2.js`).then(e=>e.MediaSectionComponent)},{path:`playlists/:id`,loadComponent:()=>import(`./chunk-De4dw3iw.js`).then(e=>e.PlaylistsSectionComponent)},{path:`playlists`,loadComponent:()=>import(`./chunk-De4dw3iw.js`).then(e=>e.PlaylistsSectionComponent)},{path:`templates/:id`,canActivate:[te],canDeactivate:[ht],loadComponent:()=>import(`./chunk-3R_dyKct2.js`).then(e=>e.TemplatesSectionComponent)},{path:`templates`,canActivate:[te],loadComponent:()=>import(`./chunk-3R_dyKct2.js`).then(e=>e.TemplatesSectionComponent)},{path:`schedules`,loadComponent:()=>import(`./chunk-6MZzGJKt.js`).then(e=>e.SchedulesSectionComponent)},{path:`displays/:id`,loadComponent:()=>import(`./chunk-CtPV5mMX.js`).then(e=>e.DisplaysSectionComponent)},{path:`displays`,loadComponent:()=>import(`./chunk-CtPV5mMX.js`).then(e=>e.DisplaysSectionComponent)},{path:`manage`,loadComponent:()=>import(`./chunk-Cq_EF3n0.js`).then(e=>e.ManageSectionComponent),children:[{path:``,pathMatch:`full`,redirectTo:`report`},{path:`report`,loadComponent:()=>import(`./chunk-CDJPqiMw.js`).then(e=>e.ContentReportComponent)},{path:`branding`,loadComponent:()=>import(`./chunk-CAlFm3PD2.js`).then(e=>e.BrandingComponent)}]},{path:`report`,redirectTo:`manage/report`},{path:`branding`,redirectTo:`manage/branding`},{path:`groups`,canActivate:[_t],loadComponent:()=>import(`./chunk-C3RP6sQl.js`).then(e=>e.GroupsSectionComponent)},{path:`zones/:id`,loadComponent:()=>import(`./chunk-oBaSFvZ_.js`).then(e=>e.ZonesSectionComponent)},{path:`zones`,loadComponent:()=>import(`./chunk-oBaSFvZ_.js`).then(e=>e.ZonesSectionComponent)},{path:`**`,redirectTo:`media`}]}];oS(ut,{providers:[FD(),kr(`ngsw-worker.js`,{enabled:gt.production}),RT(),NC(()=>Wo(D(Df).locale)),is(Xt,os$1(),Ci()),{provide:ko,deps:[Df],useFactory:e=>e.locale}]}).catch(e=>console.error(e));export{Ee$1 as A,ae$1 as B,ot$1 as C,y$1 as D,st$1 as E,Re as F,me as G,ce$1 as H,Te as I,re$2 as J,te$1 as K,W as L,K$1 as M,Me as N,yt$1 as O,Qe as P,Ye as R,nt as S,rt as T,fe as U,be as V,ie$1 as W,s$1 as Y,A$1 as _,Ie as a,it as b,Ue as c,le as d,z as f,m as g,l$1 as h,He as i,J$1 as j,$ as k,X as l,f as m,C as n,J as o,c as p,we as q,Ee as r,Oe as s,N as t,ce as u,P as v,pt$1 as w,lt$1 as x,_t$1 as y,_ as z};