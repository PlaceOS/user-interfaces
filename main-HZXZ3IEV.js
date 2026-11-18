import{n as m$3,t as l$2}from"./chunk-BiC_2twR.js";import{$ as Ln$1,$n as jT,$t as Ym,An as eS,At as Un$1,B as It,Br as st$1,Cn as d_,Ct as Sn$1,Dr as qm,E as Fm,En as ds,F as Hr,Ft as WE,G as Kb,Gr as ty,Gt as Xt,H as J_,Hn as hT,Ht as Xm,I as Hs,It as Wm,Jt as YT,K as Km,Kn as iD,Mn as ed,Mt as VU,Nn as ey,Nr as re$3,Ot as Uh,P as Ho,Pr as ry,Pt as W,Q as Lm,Qt as Yl,R as ID,Rr as s_,Sr as oe$4,St as ST,Tn as de$2,Tr as p_,Tt as TT,U as Jn$1,Un as h_,Vn as gv,Vr as sy,Vt as XV,W as KV,Wt as Xr,X as LI,Xn as ib,Xr as uy,Zn as ie$3,_ as DT,a as A$3,ar as lE,bn as ca,br as oT,c as Ag,ci as ws,d as CS,di as xr,dn as ap,dr as me,en as Zb,et as Lv,f as Ce,fi as y$2,fn as aw,gn as br,gt as Qb,h as D$1,hn as bT,ii as wD,j as Gy,jr as rT,kn as eH,l as Aw,ln as aT,lt as Om,mi as y_,mr as my,n as $s,nn as Zm,nr as jv,o as AI,oi as wT,or as lb,ot as Ns,p as Cr,pn as bC,q as Kt$1,qt as Y,ri as w$2,rn as _T,rt as N$1,s as Ae$1,si as w_,sn as aH,sr as ly,t as $S,ti as vp,tn as Zl,tr as jo,un as a_,ur as m_,vn as cT,vt as Ql,w as FI,wr as oy,wt as TS,xr as oa,yn as c_,z as IT,zr as sp}from"./chunk-fhXyYd6j.js";import{An as tl,B as Nh,Dn as sl,Dt as be$1,E as Id,Fn as vd,Gt as hn$1,Ht as gd,J as Rd,K as Qc,L as Me$1,M as Kd,O as Jc,U as Od,Vn as xf,W as Pd,Wt as hf,Y as Rh,Yt as il,Z as Se,_ as Et,_t as Zc,a as B,b as Gc,ft as Xt$1,gn as pf,gt as Z$2,h as Eh,in as ln$1,it as Vd,k as Jd,l as Cd,ln as nl,ot as Vt,pt as Yc,q as Qd,qt as ht$1,r as Ad,ut as Xd,vt as Zd,wn as rl,wt as al,x as Gd,y as G,zn as wt}from"./chunk-yEGK2d5f.js";import{B as re$4,C as at$2,D as ci$1,E as ce$2,I as ks,L as li$1,M as gt,N as jt,O as er,P as ke$1,R as p$3,T as bi$1,a as Dr,d as Ii,g as O,h as Nt,j as gr,k as fr,l as Gt,m as Me$2,o as E$2,p as Lt$1,q as z,r as De,s as G$1,u as Ie$2}from"./chunk-uP5UKyvG.js";import{t as w$3}from"./chunk-j6ypjm6d.js";import"./chunk-CrSx3GGQ.js";import{E as q$1,S as di$1,_ as Xt$2,a as G$2,b as _t$1,c as It$1,i as Ft,m as Vt$1,p as Ue$1,s as I$2,y as Yt$2}from"./chunk-Dz79E0eU.js";import{n as J$3}from"./chunk-CeSjab8E.js";import{t as f$2}from"./chunk-1XNsNdIs.js";import{t as V}from"./chunk-Jpaj7LUR.js";import{a as O$1,c as as,d as os,f as q$2,g as wi$1,h as ts,i as Mr,n as Ci$1,p as ss,s as _r,t as $t,u as is}from"./chunk-x0uAaud5.js";import{$ as ut,H as g$2,N as _$2,P as ar,R as cr,U as jn,a as Et$1,f as Kn$1,h as Ln$2,l as H$1,z as de$3}from"./chunk-CS-fSLU4.js";import{n as oe$5,t as Me$3}from"./chunk-CDyM1hs5.js";import{a as h$1,i as d,n as P$1}from"./chunk-DPGhJjaz.js";import{i as x$1,n as d$1,r as f$3}from"./chunk-D7MyCzFF.js";import"./chunk-CsddB9d1.js";import{A as mo,I as sr,P as qs,R as we$1,T as er$1,_ as Vs,b as Ys,c as Js,f as Qn$1,l as Kn$2,m as Ti,o as Gn$1,s as Hn$1,u as Ks,v as Wn$1,x as Zs,y as Yo}from"./chunk-C3KL9XeS.js";function U$2(n){n||(n=D$1(me));let e=new N$1(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(jv(e))}function T$2(n,e){let d=!e?.manualCleanup?e?.injector?.get(me)??D$1(me):null,l=p$2(e?.equal),o;e?.requireSync?o=st$1({kind:0},{equal:l}):o=st$1({kind:1,value:e?.initialValue},{equal:l});let i,b=n.subscribe({next:r=>o.set({kind:1,value:r}),error:r=>{o.set({kind:2,error:r}),i?.()},complete:()=>{i?.()}});if(e?.requireSync&&o().kind===0)throw new y$2(601,!1);return i=d?.onDestroy(b.unsubscribe.bind(b)),Ce(()=>{let r=o();switch(r.kind){case 1:return r.value;case 2:throw r.error;case 0:throw new y$2(601,!1)}},{equal:e?.equal})}function p$2(n=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}var D=new WeakSet;function s$2(r){return Array.from(r.dataTransfer?.types||[]).includes(`Files`)}function _$1(r){return D.has(r)}function v$2(r){!s$2(r)||r.defaultPrevented||(r.preventDefault(),r.dataTransfer&&(r.dataTransfer.dropEffect=`none`))}var b=(()=>{class r{constructor(){this.disabled=XV(!1,{alias:`fileDropDisabled`}),this.fileDrop=KV(),this.over=st$1(!1),this._depth=0}_take(e){return this.disabled()||e.defaultPrevented?!1:(e.preventDefault(),D.add(e),!0)}onDragEnter(e){s$2(e)&&(this._depth+=1,this._take(e)&&this.over.set(!0))}onDragOver(e){!s$2(e)||!this._take(e)||(e.dataTransfer&&(e.dataTransfer.dropEffect=`copy`),this.over.set(!0))}onDragLeave(e){s$2(e)&&(this._depth=Math.max(0,this._depth-1),this._depth||this.over.set(!1))}onDrop(e){if(!s$2(e)||(this._depth=0,this.over.set(!1),!this._take(e)))return;let i=Array.from(e.dataTransfer?.files||[]);i.length&&this.fileDrop.emit(i)}static{this.ɵfac=function(i){return new(i||r)}}static{this.ɵdir=jo({type:r,selectors:[[``,`fileDrop`,``]],hostVars:2,hostBindings:function(i,a){i&1&&ey(`dragenter`,function(t){return a.onDragEnter(t)})(`dragover`,function(t){return a.onDragOver(t)})(`dragleave`,function(t){return a.onDragLeave(t)})(`drop`,function(t){return a.onDrop(t)}),i&2&&ly(`file-drop-over`,a.over()&&!a.disabled())},inputs:{disabled:[1,`fileDropDisabled`,`disabled`]},outputs:{fileDrop:`fileDrop`}})}}return r})();var s$1=class extends ln$1{constructor(e={}){super(e),this.background_media=e.background_media?new Me$1(e.background_media):null}};var r=class extends hn$1{constructor(e={}){super(e),this.template_details=new s$1(l$2({id:e.template_id},e.template_details))}};async function m$2(e,c,n){let o=await Me$3(c,e);if(o.reason!==`done`)return!1;o.loading(Et(n.loading_key));let t=e.openDialogs?.at(-1);t?.componentInstance instanceof oe$5&&(t.disableClose=!0);try{return await n.action(),!0}catch{return Eh(Et(n.error_key)),!1}finally{o.close()}}function K$2(t){try{return(t===`session`?sessionStorage:localStorage)??null}catch{return null}}function X$2(t,n,e={}){let s=e.storage||`local`,a=e.serialise||String,r;try{r=n(K$2(s)?.getItem(t)??null)}catch{r=n(null)}let o=st$1(r),_=o.set;return o.set=d=>{_(d);try{let l=a(d),M=K$2(s);l===null?M?.removeItem(t):M?.setItem(t,l)}catch{}},o.update=d=>o.set(d(de$2(o))),o}var oe$3=[{id:`templates`,label:Et(`SIGNAGE_MANAGER.FEATURE_TEMPLATES`)},{id:`template-editing`,label:Et(`SIGNAGE_MANAGER.FEATURE_TEMPLATE_EDITING`)},{id:`ai-generation`,label:Et(`SIGNAGE_MANAGER.FEATURE_IMAGE_GENERATION`)},{id:`ai-editing`,label:Et(`SIGNAGE_MANAGER.FEATURE_IMAGE_EDITING`)},{id:`branding-editing`,label:Et(`SIGNAGE_MANAGER.FEATURE_BRANDING_EDITING`)}];var $$3=oe$3.map(({id:t})=>t);var Ae=[`branding-editing`];function Z$1(t){return!!t&&typeof t==`object`&&!Array.isArray(t)}function J$2(t){return Array.isArray(t)?t.filter(n=>typeof n==`string`):void 0}function ee$2(t){if(!Z$1(t))return{};let n=Z$1(t.signage)?t.signage:t,e={},s=J$2(n.features),a=J$2(n.available_plugins);return s&&(e.features=s),a&&(e.available_plugins=a),e}function te$2(t,n){let e=n.features;return e?t.filter(s=>e.includes(s)):[...t]}function Ee$1(t,n){let e=l$2({},t);for(let s of[`features`,`available_plugins`]){let a=n[s],r=t[s];a&&r&&(e[s]=r.filter(o=>a.includes(o)))}return e}function Ge$2(t){if(mo(t)===404)return{};throw t}var se$2=st$1(0);var Me=se$2.asReadonly();function ae$2(){se$2.update(t=>t+1)}function ue(t,n,e){switch(t){case`media`:return Od(n,e);case`playlists`:return Cd(n,e);case`templates`:return Xd(n)}}async function be(t,n,e=``){if(!n)return[];try{return(await ue(t,n,e?{group_id:e}:{})).shared_with??[]}catch{return[]}}function Re$1(t,n,e){switch(t){case`media`:return Id(n,{group_id:e});case`playlists`:return Rd(n,{group_id:e});case`templates`:return Vd(n,{group_id:e})}}var _e$1={media:{title:`SIGNAGE_MANAGER.SVC_SHARE_MEDIA_TITLE`,success:`SIGNAGE_MANAGER.SVC_MEDIA_SHARED`,request:Pd},playlists:{title:`SIGNAGE_MANAGER.SVC_SHARE_PLAYLIST_TITLE`,success:`SIGNAGE_MANAGER.SVC_PLAYLIST_SHARED`,request:Zd},templates:{title:`SIGNAGE_MANAGER.SVC_SHARE_TEMPLATE_TITLE`,success:`SIGNAGE_MANAGER.SVC_TEMPLATE_SHARED`,request:tl}};var ge=`PlaceOS.SIGNAGE:selected-group:v1`;var de$1=[`id`,`name`,`description`,`subsystems`,`authority_id`,`parent_id`,`features`,`children_count`].join(`,`);var pe$1=50;var ce$1=4;var re$2={features:[],available_plugins:[]};var g$1=(function(t){return t[t.Read=1]=`Read`,t[t.Create=2]=`Create`,t[t.Update=4]=`Update`,t[t.Delete=8]=`Delete`,t[t.Operate=16]=`Operate`,t[t.Approve=32]=`Approve`,t[t.Manage=64]=`Manage`,t[t.Share=128]=`Share`,t})(g$1||{});function He$1(t){return t.map(d).sort(P$1)}function ie$2(t,n=()=>``){return ca({source:()=>({value:t.hasValue()?t.value():void 0,key:n()}),computation:(e,s)=>e.value??(s?.source.key===e.key?s.value:void 0)})}function ne$3(t,n){let e=null;return s=>{let a=n();if(e?.key===s&&e.user===a)return e.promise;let r={key:s,user:a,promise:t()};return r.promise=r.promise.catch(o=>{throw e===r&&(e=null),o}),e=r,r.promise}}function le$2(t,n){if(!t)return[];let e=new Map(n.map(o=>[o.id,o])),s=[],a=new Set,r=t;for(;r?.id&&!a.has(r.id);)s.unshift(r),a.add(r.id),r=r.parent_id?e.get(r.parent_id):void 0;return s}var Ve=(()=>{class t{reloadSignageGroups(){this._groups_change.update(e=>e+1)}async queryManageableGroups(e={}){return(await f$3(Gc(l$2({limit:200,fields:de$1,subsystem:`signage`},e)),pe$1)).filter(r=>r.subsystems?.includes(`signage`)).sort(P$1)}hasFeature(e){return this.features().includes(e)}constructor(){this._org=D$1(we$1),this._settings=D$1(cr),this._dialog=D$1(J$3),this._change=st$1(0),this._groups_change=st$1(0),this.show_group_selector=this._settings.signal(`show_group_selector`,!0),this.global_features=this._settings.signal(`features`,$$3),this.current_user=Kn$1(),this.active_user=Ce(()=>{let e=this.current_user();return e?.email&&e.email!==`<empty>@dev.place.tech`?e:null}),this.signage_groups_loaded=Ce(()=>{if(!this.active_user()?.email)return!1;let e=this._signage_groups.status();return e===`resolved`||e===`local`||e===`error`}),this.selected_group_id=X$2(ge,e=>e||``,{serialise:e=>e||null}),this._group_switch=st$1(0),this.group_switch=this._group_switch.asReadonly(),this.groups_change=this._groups_change.asReadonly(),this._user_loaded=ca({source:de$3,computation:(e,s)=>e||!!s?.value}),this._signage_groups=w_({params:()=>this._user_loaded()?{user_email:this.active_user()?.email||``,groups_change:this._groups_change(),sys_admin:this.is_sys_admin()}:void 0,loader:async({params:e})=>{if(!e.user_email)return[];try{let s=e.sys_admin?(await this.allSignageGroups(e.groups_change)).map(a=>({group:a,permissions:g$1.Manage})):await this.currentSignageGroups(e.groups_change);return this.signage_groups_failed.set(!1),s.map(d).sort((a,r)=>a.group.name.localeCompare(r.group.name))}catch(s){throw this.signage_groups_failed.set(!0),s}}}),this.signage_groups_failed=st$1(!1),this._loaded_signage_groups=ie$2(this._signage_groups,()=>this.active_user()?.email),this.signage_groups=Ce(()=>this._loaded_signage_groups()||[]),this.selected_group=Ce(()=>{let e=this.selected_group_id();return this.signage_groups().find(s=>s.group.id===e)}),this.selected_group_hierarchy=Ce(()=>le$2(this.selected_group()?.group,this.signage_groups().map(e=>e.group))),this.is_sys_admin=Ce(()=>{let e=this.current_user();return!!e.sys_admin||(e.groups||[]).includes(`placeos_admin`)}),this._is_support=Ce(()=>{let e=this.current_user();return!!e.support||(e.groups||[]).includes(`placeos_support`)}),this.can_manage_all_groups=Ce(()=>this.is_sys_admin()||this._is_support()),this.can_manage_groups=Ce(()=>this.can_manage_all_groups()||this.signage_groups().some(({permissions:e})=>!!(e&g$1.Manage))),this.currentSignageGroups=ne$3(()=>Jc({subsystem:`signage`}),()=>de$2(this.active_user)?.email),this.allSignageGroups=ne$3(()=>this.queryManageableGroups(),()=>de$2(this.active_user)?.email),this.api_group_id=Ce(()=>this.selected_group()?.group.id||``),this.api_group_id_debounced=aH(this.api_group_id,()=>de$2(this._group_switch)?new Promise(e=>setTimeout(e,300)):void 0),this.can_create=Ce(()=>this._hasGroupPermission(g$1.Create)),this.can_update=Ce(()=>this._hasGroupPermission(g$1.Update)),this.can_upload_to_playlist=Ce(()=>this.can_create()&&this.can_update()),this.can_delete=Ce(()=>this._hasGroupPermission(g$1.Delete)),this.can_update_media_tags=Ce(()=>this.api_group_id()?this.can_update():this.is_sys_admin()),this.can_delete_tagged_media=Ce(()=>this.api_group_id()?this.can_delete():this.is_sys_admin()),this.can_delete_displays=this.is_sys_admin,this.can_approve=Ce(()=>this._hasGroupPermission(g$1.Approve)),this.can_share=Ce(()=>this._hasGroupPermission(g$1.Share)),this.can_manage_zones=Ce(()=>this._hasGroupPermission(g$1.Manage)),this._group_features=w_({params:()=>({group_id:this.api_group_id_debounced.value(),groups_change:this._groups_change()}),loader:async({params:e})=>({group_id:e.group_id,features:await this.loadGroupFeatures(e.group_id).catch(s=>mo(s)===404?{}:re$2)})}),this._loaded_group_features=ie$2(this._group_features),this._selected_group_features=Ce(()=>{let e=this._loaded_group_features();return e?.group_id===this.api_group_id()?e.features:void 0}),this.group_features=Ce(()=>this._selected_group_features()??re$2),this.features_ready=Ce(()=>this.signage_groups_loaded()?this.signage_groups_failed()?!0:(!!this.selected_group()||!this.selected_group_id()&&(this.can_manage_all_groups()||!this.signage_groups().length))&&!!this._selected_group_features():!1),this.features=Ce(()=>te$2(this.global_features()||[],this.group_features())),this.templates_enabled=Ce(()=>this.hasFeature(`templates`)),this._can_edit_templates=Ce(()=>this.hasFeature(`template-editing`)),this.can_create_templates=Ce(()=>this.can_create()&&this._can_edit_templates()),this.can_update_templates=Ce(()=>this.can_update()&&this._can_edit_templates()),this.can_delete_templates=Ce(()=>this.can_delete()&&this._can_edit_templates()),this.can_query_group_data=Ce(()=>this.can_manage_all_groups()||!!this.api_group_id_debounced.value()),this.data_change=this._change.asReadonly(),ds(()=>{if(!this.signage_groups_loaded()||this.signage_groups_failed())return;let e=this.signage_groups(),s=this.selected_group_id();if(!e.length){this.selected_group_id.set(``);return}e.some(a=>a.group.id===s)||this.selected_group_id.set(this.can_manage_all_groups()?``:e[0].group.id)})}canQueryLists(){return this._org.initialised()&&this.can_query_group_data()}changed(){this._change.update(e=>e+1)}canManageSignageGroup(e=``){return this.can_manage_all_groups()?!0:!!(this.signage_groups().find(a=>a.group.id===e)?.permissions&g$1.Manage)}async loadGroupFeatures(e){if(!e)return{};return ee$2(await Qc(e,{subsystem:`signage`}))}setSelectedGroup(e){(e?this.signage_groups().some(a=>a.group.id===e):this.can_manage_all_groups())&&(this.selected_group_id.set(e),this._group_switch.update(a=>a+1))}async selectGroup(){let e=await this._pickGroup({title:Et(`SIGNAGE_MANAGER.SELECT_SIGNAGE_GROUP`),groups:this.signage_groups(),selected_group_id:this.selected_group_id(),show_all_groups:this.can_manage_all_groups()});e!==void 0&&this.setSelectedGroup(e)}_hasGroupPermission(e){if(this.is_sys_admin())return!0;let s=this.selected_group()?.permissions||0;return!!(s&g$1.Manage||s&e)}requirePermission(e,s){return e?!0:(Rh(Et(s)),!1)}groupQueryParams(e,s=this.api_group_id()){return l$2(l$2({},e),s?{group_id:s}:{})}orgZoneQueryParams(e,s=this.api_group_id()){let a=this._org.organisation?.id,r={};return s?r={group_id:s}:a&&(r={zone_id:a}),l$2(l$2({},e),r)}async shareItems(e,s){if(!this.requirePermission(this.can_share(),`SIGNAGE_MANAGER.SVC_NO_SHARE_ITEMS`))return!1;let a=this.selected_group()?.group.id||``,r=this.signage_groups().filter(l=>l.group.id!==a);if(!r.length)return Rh(Et(`SIGNAGE_MANAGER.SVC_NO_GROUPS_TO_SHARE`)),!1;let o=_e$1[e],_=await this._pickGroup({title:Et(o.title),groups:r});if(!_)return!1;let d={items:s.join(`,`),to:_};try{await o.request(d)}catch{return Eh(Et(`SIGNAGE_MANAGER.SVC_ERR_SHARE`)),!1}return ae$2(),Nh(Et(o.success)),!0}async groupsHolding(e,s){let a=this.signage_groups().filter(({group:_})=>_.id),r=a.find(({group:_})=>_.id===this.api_group_id());if(r)return[r];let o=await pf(a,ce$1,({group:_})=>s(_.id).then(d=>(d.data||[]).some(({id:l})=>l===e),()=>!1));return a.filter((_,d)=>o[d])}async requestApproval(e){if(e.loading())return;if(this.can_approve()){await e.approve();return}let s=[],a;e.loading.set(!0);try{if([a]=await this.groupsHolding(e.item_id,e.query),!a){Rh(Et(e.no_groups_key));return}s=await e.list_approvers(a.group.id)||[]}catch{Rh(Et(e.no_approvers_key))}finally{e.loading.set(!1)}if(!a)return;let r=await e.pick(s);if(r){try{await e.request(a.group.id,r.message||``,r.approver_id||``)}catch{Eh(Et(e.error_key));return}e.requested(),Nh(Et(e.success_key))}}async _pickGroup(e){let{GroupSelectModalComponent:s}=await import(`./chunk-B-KTIcfD.js`);return x$1(this._dialog.open(s,{data:e,panelClass:`mobile-fullscreen`}))}static{this.ɵfac=function(s){return new(s||t)}}static{this.ɵprov=A$3({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();var _e=[`top`,`bottom`,`left`,`right`,`floating`];var ae$1={top:`align_vertical_top`,bottom:`align_vertical_bottom`,left:`align_horizontal_left`,right:`align_horizontal_right`,floating:`picture_in_picture`};var ie$1={top:`SIGNAGE_MANAGER.TEMPLATE_POSITION_TOP`,bottom:`SIGNAGE_MANAGER.TEMPLATE_POSITION_BOTTOM`,left:`SIGNAGE_MANAGER.TEMPLATE_POSITION_LEFT`,right:`SIGNAGE_MANAGER.TEMPLATE_POSITION_RIGHT`,floating:`SIGNAGE_MANAGER.TEMPLATE_POSITION_FLOATING`};function re$1(a){return ae$1[a]||`crop_free`}function ne$2(a){return ie$1[a]||a}var X$1=(a,r,e)=>Math.min(Math.max(a,r),Math.max(r,e));function se$1(a){return a===void 0?null:X$1(a,0,1)*100}function S(a){return a===null||!Number.isFinite(a)?void 0:X$1(a/100,0,1)}function oe$2(a,r){let e=se$1(a[r]);return e!==null?Math.round(e*100)/100:a.position===`floating`?0:r===`x_pos`?20:15}function le$1(a){let r=[];return[`left`,`right`,`floating`].includes(a.position)&&r.push(`x_pos`),[`top`,`bottom`,`floating`].includes(a.position)&&r.push(`y_pos`),r}function M(a){switch(a.position){case`top`:case`bottom`:return m$3(l$2({},a),{y_pos:a.y_pos??S(15)});case`left`:case`right`:return m$3(l$2({},a),{x_pos:a.x_pos??S(20)});case`floating`:return m$3(l$2({},a),{x_pos:a.x_pos??S(0),y_pos:a.y_pos??S(0)})}}function pe(a){let{position:r,x_pos:e,y_pos:t}=M(a);return r===`floating`?e!==void 0&&t!==void 0:[e,t].every(i=>i===void 0||i>0&&i<1)}function E$1(a,r){return(a.live_template_id||a.id)===(r.live_template_id||r.id)}function $$2(a){return a.live_template_id&&a.live_template_id!==a.id?new ln$1(m$3(l$2({},a),{id:a.live_template_id})):a}var Re=(()=>{class a{constructor(){this._org=D$1(we$1),this._dialog=D$1(J$3),this._context=D$1(Ve),this.template_search_term=st$1(``),this._template_search_debounced=aH(this.template_search_term,400),this._template_list=new h$1({sort:P$1}),this._held_drafts=st$1({}),this.templates=Ce(()=>{let e=this._held_drafts();return this._template_list.items().map(t=>e[t.id]??t)}),this.templates_loading=this._template_list.loading,this.templates_has_more=this._template_list.has_more,this.templates_error=this._template_list.error,this.templates_total=this._template_list.total,this._templates_retry=st$1(0),this._user_retries=st$1(0),this.templates_retries=this._user_retries.asReadonly(),this._templates_queried=st$1(!1),this.templates_ready=Ce(()=>this._templates_queried()&&!this._template_list.loading()),this._template_query=null,this._reload_templates=ds(()=>{let e=this._context.templates_enabled(),t=this._org.initialised(),i=this._context.can_query_group_data(),s=this._context.api_group_id_debounced.value(),n=this._template_search_debounced.value().trim();this._context.data_change(),this._templates_retry(),de$2(()=>{let d=e&&t&&i;this._template_query?.group_id!==s&&this._held_drafts.set({});let u=d&&this._template_query?.group_id===s&&this._template_query.search===n,T=u?Math.max(200,this._template_list.loaded_rows):200;this._template_query=d?{group_id:s,search:n}:null,this._templates_queried.set(d),this._template_list.reset(d?Gd(this._context.groupQueryParams(l$2({limit:T},d$1(n)),s)):null,{keep_items:u})})}),this.template_mappings_revision=st$1(0),this.template_mapping_opening=st$1(!1),this.selected_template=st$1(null),this.selected_template_requires_approval=Ce(()=>{let e=this.selected_template();return!!e?.id&&!e.approved}),this.template_approval_request_loading=st$1(!1),this.selected_template_layout_index=st$1(null),this.template_layout_draft=ca({source:this.selected_template,computation:(e,t)=>{let i=t?.source;return!!e&&!!i&&E$1(i,e)&&JSON.stringify(t.value)!==JSON.stringify(i.layouts??[])?t.value:structuredClone(e?.layouts??[])}}),this.template_layout_dirty=Ce(()=>JSON.stringify(this.template_layout_draft())!==JSON.stringify(this.selected_template()?.layouts??[]))}loadMoreTemplates(){this._template_list.loadMore()}reloadTemplates(){this._user_retries.update(e=>e+1),this._template_list.retry()||this._templates_retry.update(e=>e+1)}async loadTemplate(e){if(!e)return null;let t=this._context.api_group_id();try{let i=$$2(d(await Xd(e)));return this._context.api_group_id()!==t?null:(this._holdDraft(i),this._template_query?.search||this._template_list.update(s=>[...s.filter(n=>!E$1(n,i)),i].sort(P$1)),i)}catch{return null}}async listApprovedTemplates(){return this._context.canQueryLists()?(await B({path:`signage/templates`,query_params:this._context.groupQueryParams({approved:!0,limit:1e4}),fn:t=>new ln$1(d(t))})).data:[]}async listTemplateMappings(e){return this._context.canQueryLists()?(await B({path:`signage/template_mappings`,query_params:m$3(l$2({},e),{limit:1e4}),fn:i=>new r(m$3(l$2({},i),{template_details:d(i.template_details)}))})).data:[]}async addTemplate(){if(!this._context.requirePermission(this._context.can_create_templates(),`SIGNAGE_MANAGER.SVC_NO_CREATE_TEMPLATES`))return;let{TemplateEditModalComponent:e}=await import(`./chunk-Ds1bkNir2.js`);await x$1(this._dialog.open(e,{data:{template:new ln$1({}),onAdd:s=>this._addSignageTemplate(s)},panelClass:`mobile-fullscreen`}))&&this._context.changed()}async editTemplate(e){if(!this._context.requirePermission(this._context.can_update_templates(),`SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES`))return;let{TemplateEditModalComponent:t}=await import(`./chunk-Ds1bkNir2.js`),s=await x$1(this._dialog.open(t,{data:{template:e,group_id:this._context.api_group_id(),onEdit:(n,d)=>Qd(n,d)},panelClass:`mobile-fullscreen`}));s&&(this.updateCachedTemplate(s),this._context.changed())}async editTemplateMapping(e,t=null){if(!this._context.requirePermission(this._context.can_update(),`SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS`)||this.template_mapping_opening())return!1;let i=[];this.template_mapping_opening.set(!0);try{t||(i=await this.listApprovedTemplates())}catch{return Eh(Et(`COMMON.LOAD_ERROR`)),!1}finally{this.template_mapping_opening.set(!1)}let{TemplateMappingModalComponent:s}=await import(`./chunk-D49WKUHw.js`),d=!!await x$1(this._dialog.open(s,{data:{mapping:t,templates:i,save:(u,T)=>t?al(t.id,{schedule:T}):sl(m$3(l$2({},e),{template_id:u,schedule:T}))},panelClass:`mobile-fullscreen`}));return d&&this.template_mappings_revision.update(u=>u+1),d}async removeTemplateMapping(e){return!e?.id||!this._context.requirePermission(this._context.can_update(),`SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS`)||!await m$2(this._dialog,{title:Et(`SIGNAGE_MANAGER.SVC_REMOVE_TEMPLATE_MAPPING_TITLE`),content:Et(`SIGNAGE_MANAGER.SVC_REMOVE_TEMPLATE_MAPPING_CONTENT`,{name:e.template_details.name}),icon:{content:`delete`}},{loading_key:`SIGNAGE_MANAGER.SVC_REMOVING`,error_key:`SIGNAGE_MANAGER.SVC_TEMPLATE_MAPPING_REMOVE_ERROR`,action:()=>il(e.id)})?!1:(this.template_mappings_revision.update(i=>i+1),Nh(Et(`SIGNAGE_MANAGER.SVC_TEMPLATE_MAPPING_REMOVED`)),!0)}async approveTemplate(e){if(!e?.id||this._templateLayoutUnsaved(e)||!this._context.requirePermission(this._context.can_approve(),`SIGNAGE_MANAGER.SVC_NO_APPROVE_TEMPLATES`))return;let{TemplateApproveModalComponent:t}=await import(`./chunk-BYDtBabB2.js`);this._dialog.open(t,{data:{template:e},panelClass:`mobile-fullscreen`})}async requestTemplateApproval(e){!e?.id||this.template_approval_request_loading()||this._templateLayoutUnsaved(e)||await this._context.requestApproval({item_id:e.id,loading:this.template_approval_request_loading,approve:()=>this.approveTemplate(e),query:t=>Gd({group_id:t,limit:500}),list_approvers:t=>nl(t),pick:async t=>{let{TemplateRequestApprovalModalComponent:i}=await import(`./chunk-CTtCd8xm2.js`);return x$1(this._dialog.open(i,{data:{template:e,approvers:t},panelClass:`mobile-fullscreen`}))},request:(t,i,s)=>rl(e.id,t,i,s),requested:()=>this.setTemplateApprovalStatus(e.id,!1,!0),no_groups_key:`SIGNAGE_MANAGER.SVC_NO_GROUPS_FOR_TEMPLATE`,no_approvers_key:`SIGNAGE_MANAGER.SVC_NO_TEMPLATE_APPROVERS`,error_key:`SIGNAGE_MANAGER.SVC_TEMPLATE_APPROVAL_REQUEST_ERROR`,success_key:`SIGNAGE_MANAGER.SVC_TEMPLATE_APPROVAL_REQUESTED`})}async removeTemplate(e){return!e?.id||!this._context.requirePermission(this._context.can_delete_templates(),`SIGNAGE_MANAGER.SVC_NO_DELETE_TEMPLATES`)||!await m$2(this._dialog,{title:Et(`SIGNAGE_MANAGER.SVC_REMOVE_TEMPLATE_TITLE`),content:Et(`SIGNAGE_MANAGER.SVC_DELETE_NAMED`,{name:e.name}),icon:{content:`delete`}},{loading_key:`SIGNAGE_MANAGER.SVC_REMOVING`,error_key:`SIGNAGE_MANAGER.SVC_TEMPLATE_REMOVE_ERROR`,action:()=>Vd(e.id,this._context.groupQueryParams({}))})?!1:(this._releaseDraft(e.id),this._template_list.update(i=>i.filter(s=>!E$1(s,e))),this._template_list.adjustTotal(-1),this.selected_template()?.id===e.id&&(this.selected_template.set(null),this.selected_template_layout_index.set(null)),this._context.changed(),Nh(Et(`SIGNAGE_MANAGER.SVC_TEMPLATE_REMOVED`)),!0)}async duplicateTemplate(e){if(!e?.id||!this._context.requirePermission(this._context.can_create_templates(),`SIGNAGE_MANAGER.SVC_NO_CREATE_TEMPLATES`))return null;try{let t=await this._addSignageTemplate({name:Et(`SIGNAGE_MANAGER.COPY_NAME`,{name:e.name}),description:e.description||void 0,tags:e.tags,background_item_id:e.background_item_id||void 0,full_screen_takeover:e.full_screen_takeover,merge:e.merge,layouts:(e.layouts||[]).map(M)});return this._context.changed(),Nh(Et(`SIGNAGE_MANAGER.SVC_TEMPLATE_DUPLICATED`)),t}catch{return Eh(Et(`SIGNAGE_MANAGER.SVC_TEMPLATE_DUPLICATE_ERROR`)),null}}async shareTemplate(e){e?.id&&await this._context.shareItems(`templates`,[e.id])}async saveTemplateLayouts(){let e=this.selected_template();if(!(!e?.id||!this.template_layout_dirty())&&this._context.requirePermission(this._context.can_update_templates(),`SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES`))try{let t=this.template_layout_draft().map(M),s=d(new ln$1(m$3(l$2({},await Qd(e.id,{layouts:t})),{layouts:t})));this.updateCachedTemplate(s),this.discardTemplateLayoutDraft(),Nh(Et(`SIGNAGE_MANAGER.SVC_TEMPLATE_LAYOUTS_SAVED`))}catch{Eh(Et(`SIGNAGE_MANAGER.SVC_TEMPLATE_SAVE_ERROR`))}}discardTemplateLayoutDraft(){this.template_layout_draft.set(structuredClone(this.selected_template()?.layouts??[]))}async undoTemplateChanges(e,t){return!this._context.requirePermission(this._context.can_update_templates(),`SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES`)||!await m$2(this._dialog,{title:Et(`SIGNAGE_MANAGER.UNDO_CHANGES`),content:Et(`SIGNAGE_MANAGER.TEMPLATE_REVERT_CONFIRM`,{name:t.name}),confirm_text:Et(`SIGNAGE_MANAGER.UNDO_CHANGES`),icon:{content:`undo`}},{loading_key:`SIGNAGE_MANAGER.UNDOING_CHANGES`,error_key:`SIGNAGE_MANAGER.TEMPLATE_REVERT_ERROR`,action:()=>Kd(e)})?!1:(this.updateCachedTemplate(t),Nh(Et(`SIGNAGE_MANAGER.TEMPLATE_REVERTED`)),this._context.changed(),!0)}setTemplateApprovalStatus(e,t,i=!1){let s=this.templates().find(n=>n.id===e)||this.selected_template();!s||s.id!==e||this.updateCachedTemplate(new ln$1(m$3(l$2({},s),{approved:t,approval_requested:i})))}updateCachedTemplate(e){let t=$$2(e);this._holdDraft(t),this._template_list.update(s=>s.map(n=>E$1(n,t)?t:n));let i=this.selected_template();i&&E$1(i,t)&&this.selected_template.set(t)}_holdDraft(e){if(e.approved){this._releaseDraft(e.id);return}!e.live_template_id&&!this._held_drafts()[e.id]||this._held_drafts.update(t=>m$3(l$2({},t),{[e.id]:e}))}_releaseDraft(e){this._held_drafts()[e]&&this._held_drafts.update(t=>{let i=l$2({},t);return delete i[e],i})}_templateLayoutUnsaved(e){let t=this.selected_template();return!t||!E$1(t,e)||!this.template_layout_dirty()?!1:(Rh(Et(`SIGNAGE_MANAGER.SVC_TEMPLATE_LAYOUTS_UNSAVED`)),!0)}_addSignageTemplate(e){return Jd(e,this._context.groupQueryParams({}))}static{this.ɵfac=function(t){return new(t||a)}}static{this.ɵprov=A$3({token:a,factory:a.ɵfac,providedIn:`root`})}}return a})();var t=`systems`;function n$1(e){return d(Object.assign(new Se(e),{signage_last_seen:e.signage_last_seen||0}))}function c(e){return B({query_params:e,fn:n$1,path:t})}function f$1(e){return G({id:e,query_params:{},fn:n$1,path:t})}function m$1(e,a){return wt({id:e,form_data:a,query_params:{},method:`patch`,fn:n$1,path:t})}function l$1(e){return Vt({form_data:e,query_params:{},fn:n$1,path:t})}var R=[{route:`/media`,icon:`stock_media`,label:`SIGNAGE_MANAGER.NAV_MEDIA`},{route:`/playlists`,icon:`playlist_play`,label:`SIGNAGE_MANAGER.NAV_PLAYLISTS`},{route:`/templates`,icon:`dashboard_customize`,label:`SIGNAGE_MANAGER.NAV_TEMPLATES`},{route:`/zones`,icon:`layers`,label:`SIGNAGE_MANAGER.NAV_ZONES`},{route:`/schedules`,icon:`calendar_view_day`,label:`SIGNAGE_MANAGER.NAV_SCHEDULES`},{route:`/displays`,icon:`display_settings`,label:`SIGNAGE_MANAGER.NAV_DISPLAYS`},{route:`/manage`,icon:`tune`,label:`SIGNAGE_MANAGER.NAV_MANAGE`},{route:`/groups`,icon:`groups`,label:`COMMON.GROUPS`}];function v$1(e,S=!1){return R.filter(t=>t.route===`/groups`?e:t.route===`/templates`?S:!0)}function w$1(){let e=D$1(Ve);return Ce(()=>v$1(e.can_manage_groups(),e.templates_enabled()))}var L$2={displays:[],playlists:[],templates:[],zones:[],media:[]};var F=(()=>{class e{constructor(){this._dialog=D$1(J$3),this._context=D$1(Ve),this._ref=null,this._opening=!1}async toggle(){if(this._ref){this._ref.close();return}if(!(this._opening||this._dialog.openDialogs.length)){this._opening=!0;try{let{CommandPaletteComponent:t}=await import(`./chunk-DyREDC-u.js`);this._ref=this._dialog.open(t,{position:{top:`12vh`},width:`36rem`,maxWidth:`95vw`,ariaLabel:Et(`SIGNAGE_MANAGER.PALETTE_OPEN`)}),this._ref.afterClosed().subscribe(()=>this._ref=null)}finally{this._opening=!1}}}async searchAll(t,a=5){let n=t.trim();if(!n||!this._context.canQueryLists())return L$2;let l=l$2(l$2({},this._context.orgZoneQueryParams({limit:a})),d$1(n)),p=this._context.groupQueryParams(l$2({limit:a},d$1(n))),o=async x=>{try{return((await x).data||[]).slice(0,a).map(d)}catch{return[]}},[G,M,I,b,P]=await Promise.all([o(c(m$3(l$2({},l),{signage:!0}))),o(Ad(l)),this._context.templates_enabled()?o(Gd(p)):Promise.resolve([]),o(gd(m$3(l$2({},p),{tags:`signage`}))),o(vd(l))]);return{displays:G,playlists:M,templates:I,zones:b,media:P}}static{this.ɵfac=function(a){return new(a||e)}}static{this.ɵprov=A$3({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();var y$1=64;var x=64;var g=30*1e3;var m=`PlaceOS.image-cache-v1`;var A$2=`PlaceOS.image-cache-keys-v1`;var n=new Map;var f=new Map;var a=new Map;var h=!1;function _(){if(!h&&(h=!0,typeof caches<`u`&&caches.delete(m).catch(()=>!1),typeof sessionStorage<`u`))try{sessionStorage.removeItem(A$2)}catch{}}function L$1(e){let t=n.get(e);if(t)return n.delete(e),n.set(e,t),t}function w(e,t){let o=n.get(e);for(o&&o!==t&&URL.revokeObjectURL(o),n.delete(e),n.set(e,t);n.size>y$1;){let i=n.keys().next().value;if(!i)break;let c=n.get(i);n.delete(i),c&&URL.revokeObjectURL(c)}return t}function E(e){for(a.delete(e),a.set(e,Date.now()+g);a.size>x;){let t=a.keys().next().value;if(!t)break;a.delete(t)}}function k(e){let t=Z$2();document.cookie=`${t===`x-api-key`?`api-key=`+encodeURIComponent(Xt$1()):`bearer_token=`+encodeURIComponent(t)};max-age=30;path=${e};samesite=strict;${location.protocol===`https:`?`secure;`:``}`}function I$1(){let e=Z$2();return e===`x-api-key`?{headers:{"X-API-Key":Xt$1()},redirect:`error`}:{headers:{Authorization:`Bearer ${e}`}}}function v(e,t){return p$1(e,()=>(k(t),fetch(e)))}function U$1(e){return p$1(e,()=>fetch(e,I$1()))}async function p$1(e,t){_();let o=L$1(e);if(o)return o;if((a.get(e)||0)>Date.now())throw new Error(`Image load is in retry cooldown`);a.delete(e);let c=f.get(e);if(c)return c;let l=t().then(async r=>{if(!r?.ok)throw new Error(`Failed to fetch image: ${r?.status}`);return w(e,URL.createObjectURL(await r.blob()))}).catch(r=>{throw E(e),r}).finally(()=>f.delete(e));return f.set(e,l),l}var A$1=20*1e3;var L=300;var T$1=200;var H=(()=>{class s extends H$1{constructor(){super(...arguments),this._element=D$1(Xt),this._observer=null,this._source_version=0,this.source=XV(void 0)}ngOnChanges(e){if(!e.source)return;this._source_version+=1,this.clearTimeout(`load`),this.clearInterval(`auth_cookie`),this.unsub(`media_events`),this._observer?.disconnect(),this._observer=null;let t=this.source();if(!t){this._clearMedia();return}if(!this._isLocalUrl(t)){this._element.nativeElement.src=t;return}this._loadWhenVisible(t,this._source_version)}ngOnDestroy(){this._observer?.disconnect(),this._observer=null,super.ngOnDestroy()}_loadWhenVisible(e,t){if(typeof IntersectionObserver>`u`){this._loadImage(e,t);return}this._observer=new IntersectionObserver(r=>{r.some(({isIntersecting:i})=>i)&&(this._observer?.disconnect(),this._observer=null,this._loadImage(e,t))},{rootMargin:`300px`}),this._observer.observe(this._element.nativeElement)}async _loadImage(e,t,r=0){if(t!==this._source_version||e!==this.source())return;if(!be$1()){if(r>=T$1){this._dispatchError(new Error(`Auth client is not ready`));return}this.timeout(`load`,()=>{this._loadImage(e,t,r+1)},L);return}let i=e.includes(`/api/engine/v2/signage`),o=i||e.includes(`/api/engine/v2/uploads`),a=this._element.nativeElement;if(o&&!(a instanceof HTMLImageElement)){this._streamMedia(e);return}if(i){k(this._cookiePath(e)),a.src=e;return}let c=L$1(e);if(c){this._element.nativeElement.src=c;return}try{let n=o?await v(e,this._cookiePath(e)):await U$1(e);t===this._source_version&&e===this.source()&&(this._element.nativeElement.src=n)}catch(n){t===this._source_version&&this._dispatchError(n)}}_dispatchError(e){this._element.nativeElement.dispatchEvent(new ErrorEvent(`error`,{error:e}))}_clearMedia(){let e=this._element.nativeElement;e.hasAttribute(`src`)&&(e.removeAttribute(`src`),e instanceof HTMLImageElement||e.load())}_streamMedia(e){let t=this._element.nativeElement,r=this._cookiePath(e),i=()=>k(r),o=!1,a=()=>{if(o)return;o=!0,i();let n=t.currentTime,y=!t.paused;t.load(),t.currentTime=n,y&&t.play().catch(()=>{})},c=[`play`,`seeking`,`waiting`];for(let n of c)t.addEventListener(n,i);t.addEventListener(`error`,a),document.addEventListener(`visibilitychange`,i),this.subscription(`media_events`,()=>{for(let n of c)t.removeEventListener(n,i);t.removeEventListener(`error`,a),document.removeEventListener(`visibilitychange`,i)}),i(),this.interval(`auth_cookie`,i,A$1),t.src=e}_isLocalUrl(e){try{return new URL(e,location.href).origin===location.origin}catch{return!1}}_cookiePath(e){return e.includes(`/api/engine/v2/uploads`)?`/api/engine/v2/uploads`:`/api/engine/v2/signage`}static{this.ɵfac=(()=>{let e;return function(r){return(e||(e=Uh(s)))(r||s)}})()}static{this.ɵdir=jo({type:s,selectors:[[`img`,`auth`,``],[`video`,`auth`,``],[`audio`,`auth`,``]],inputs:{source:[1,`source`]},features:[Om,$s]})}}return s})();var nt$1=[`tooltip`];var at$1=20;var rt$1=new w$2(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=D$1(oe$4);return()=>It$1(n,{scrollThrottle:at$1})}});var lt$1=new w$2(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var et=`tooltip-panel`;var ht={passive:!0};var dt=8;var ct=8;var pt=24;var _t=200;var mt$1=(()=>{class n{_elementRef=D$1(Xt);_ngZone=D$1(ie$3);_platform=D$1(p$3);_ariaDescriber=D$1(ks);_focusMonitor=D$1(gt);_dir=D$1(Ii);_injector=D$1(oe$4);_viewContainerRef=D$1(Un$1);_mediaMatcher=D$1(re$4);_document=D$1(W);_renderer=D$1(br);_animationsDisabled=at$2();_defaultOptions=D$1(lt$1,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=it$1;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=er(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let e=er(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=Ie$2(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=Ie$2(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new re$3;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=dt}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(jv(this._destroyed)).subscribe(t=>{t?t===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,`tooltip`),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(e);this._detach(),this._portal=this._portal||new Ft(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=i.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(jv(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(t)}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&s._origin instanceof Xt)return this._overlayRef;this._detach()}let e=this._injector.get(G$2).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${et}`,o=Yt$2(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e).withPopoverLocation(`global`);return o.positionChanges.pipe(jv(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Xt$2(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(rt$1)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(jv(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(jv(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(jv(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(jv(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let e=t.getConfig().positionStrategy,i=this._getOrigin(),o=this._getOverlayPosition();e.withPositions([this._addOffset(l$2(l$2({},i.main),o.main)),this._addOffset(l$2(l$2({},i.fallback),o.fallback))])}_addOffset(t){let e=ct,i=!this._dir||this._dir.value==`ltr`;return t.originY===`top`?t.offsetY=-e:t.originY===`bottom`?t.offsetY=e:t.originX===`start`?t.offsetX=i?-e:e:t.originX===`end`&&(t.offsetX=i?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,i;e==`above`||e==`below`?i={originX:`center`,originY:e==`above`?`top`:`bottom`}:e==`before`||e==`left`&&t||e==`right`&&!t?i={originX:`start`,originY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(i={originX:`end`,originY:`center`});let{x:o,y:s}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:o,originY:s}}}_getOverlayPosition(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,i;e==`above`?i={overlayX:`center`,overlayY:`bottom`}:e==`below`?i={overlayX:`center`,overlayY:`top`}:e==`before`||e==`left`&&t||e==`right`&&!t?i={overlayX:`end`,overlayY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(i={overlayX:`start`,overlayY:`center`});let{x:o,y:s}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:o,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Ag(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return this.position===`above`||this.position===`below`?e===`top`?e=`bottom`:e===`bottom`&&(e=`top`):t===`end`?t=`start`:t===`start`&&(t=`end`),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:i,originY:o}=t,s;if(e===`center`?this._dir&&this._dir.value===`rtl`?s=i===`end`?`left`:`right`:s=i===`start`?`left`:`right`:s=e===`bottom`&&o===`top`?`above`:`below`,s!==this._currentPosition){let d=this._overlayRef;if(d){let b=`${this._cssClassPrefix}-${et}-`;d.removePanelClass(b+this._currentPosition),d.addPanelClass(b+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,t=>{let e=t.targetTouches?.[0],i=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener(`mouseenter`,t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,t=>{let e=t.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide()}),this._addListener(`wheel`,t=>{if(this._isTooltipVisible()){let e=this._document.elementFromPoint(t.clientX,t.clientY),i=this._elementRef.nativeElement;e!==i&&!i.contains(e)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,t),this._addListener(`touchcancel`,t)}}}_addListener(t,e){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,e,ht))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t==`function`?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!==`off`){let e=this._elementRef.nativeElement,i=e.style;(t===`on`||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`)&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect=`none`),(t===`on`||!e.draggable)&&(i.webkitUserDrag=`none`),i.touchAction=`none`,i.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,`tooltip`),this._isDestroyed||Ag({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type===`keydown`?this._isTooltipVisible()&&t.keyCode===27&&!Nt(t):!0;static ɵfac=function(e){return new(e||n)};static ɵdir=jo({type:n,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(e,i){e&2&&ly(`mat-mdc-tooltip-disabled`,i.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return n})();var it$1=(()=>{class n{_changeDetectorRef=D$1(Gy);_elementRef=D$1(Xt);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=at$2();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new re$3;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>pt&&t.width>=_t}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let e=this._tooltip.nativeElement,i=this._showAnimation,o=this._hideAnimation;if(e.classList.remove(t?o:i),e.classList.add(t?i:o),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let s=getComputedStyle(e);(s.getPropertyValue(`animation-duration`)===`0s`||s.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(t))}static ɵfac=function(e){return new(e||n)};static ɵcmp=ib({type:n,selectors:[[`mat-tooltip-component`]],viewQuery:function(e,i){if(e&1&&oy(nt$1,7),e&2){let o;bT(o=TT())&&(i._tooltip=o.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(e,i){e&1&&ey(`mouseleave`,function(s){return i._handleMouseLeave(s)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(e,i){e&1&&(Yl(0,`div`,1,0),ty(`animationend`,function(s){return i._handleAnimationEnd(s)}),Yl(2,`div`,2),YT(3),Ql()()),e&2&&(jT(i.tooltipClass),ly(`mdc-tooltip--multiline`,i._isMultiline),Aw(3),my(i.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})}return n})();var Yt$1=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=oa({type:n});static ɵinj=Xr({imports:[li$1,di$1,jt,Vt$1]})}return n})();var J$1=[`portal_content`];var K$1=[`*`];function U(t,a){t&1&&Km(0)}function Z(t,a){if(t&1&&Fm(0,U,1,0,`ng-container`,3),t&2){let e=DT(2);qm(`ngComponentOutlet`,e.component())(`ngComponentOutletInjector`,e.injector)}}function $$1(t,a){if(t&1&&Zm(0,`div`,2),t&2)qm(`innerHTML`,DT(2).html(),AI)}function ee$1(t,a){t&1&&Km(0)}function te$1(t,a){if(t&1&&Fm(0,ee$1,1,0,`ng-container`,4),t&2){let e=DT(2);qm(`ngTemplateOutlet`,e.template())(`ngTemplateOutletContext`,e.data())}}function ne$1(t,a){if(t&1&&(Hs(0,`div`,1),ws(`motion-fade-in`),rT(1,Z,1,2,`ng-container`)(2,$$1,1,1,`div`,2)(3,te$1,1,2,`ng-container`),Zl()),t&2){let e,n=DT();Aw(),oT((e=n.type())===`component`?1:e===`html`?2:3)}}var oe$1=(()=>{class t{static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵprov=A$3({token:t,factory:t.ɵfac})}}return t})();var fe=(()=>{class t extends H$1{constructor(){super(...arguments),this._element=D$1(Xt),this._overlay=D$1(Ue$1),this._injector=D$1(oe$4),this._view_container_ref=D$1(Un$1),this._focus_trap_factory=D$1(ci$1),this._focus_trap=null,this._return_focus=null,this.x_pos=XV(`end`,{alias:`xPosition`}),this.y_pos=XV(`top`,{alias:`yPosition`}),this.content=XV(void 0),this.data=XV(void 0),this.backdrop=XV(!0),this.hover=XV(!1),this.delay=XV(0),this.x_offset=XV(0,{alias:`xOffset`}),this.y_offset=XV(0,{alias:`yOffset`}),this.type=Ce(()=>this.content()instanceof Cr?`template`:this.content()instanceof WE?`component`:`html`),this.template=Ce(()=>this.content()),this.html=Ce(()=>this.content()),this.component=Ce(()=>this.content()),this._overlay_ref=null,this._portal_content=eH.required(`portal_content`,{read:Cr}),this._update_injector=ds(()=>{this.injector=oe$4.create({providers:[{provide:oe$1,useValue:{data:this.data(),close:()=>this.close()}}],parent:this._injector})})}ngOnInit(){let e=()=>this.hover()?``:this.open(),n=s=>this._canOpenHoverTooltip(s)?this.open():``,i=s=>this._canOpenHoverTooltip(s)?this.close():``;this._element.nativeElement.addEventListener(`click`,e),this._element.nativeElement.addEventListener(`touchend`,e),this._element.nativeElement.addEventListener(`pointerenter`,n),this._element.nativeElement.addEventListener(`pointerleave`,i);let l=s=>this.hover()&&s.target.matches(`:focus-visible`)?this.open():``,c=()=>this.hover()?this.close():``;this._element.nativeElement.addEventListener(`focusin`,l),this._element.nativeElement.addEventListener(`focusout`,c),this.subscription(`focus`,()=>{this._element.nativeElement.removeEventListener(`focusin`,l),this._element.nativeElement.removeEventListener(`focusout`,c)}),this.subscription(`click`,()=>this._element.nativeElement.removeEventListener(`click`,e)),this.subscription(`touchend`,()=>this._element.nativeElement.removeEventListener(`touchend`,e)),this.subscription(`pointerenter`,()=>this._element.nativeElement.removeEventListener(`pointerenter`,n)),this.subscription(`pointerleave`,()=>this._element.nativeElement.removeEventListener(`pointerleave`,i))}ngAfterContentInit(){this.hover()||(this._trigger().setAttribute(`aria-haspopup`,`dialog`),this._trigger().setAttribute(`aria-expanded`,`false`))}ngOnChanges(e){this._overlay_ref&&(e.x_pos||e.y_pos||e.x_offset||e.y_offset||e.content)&&this.open()}ngOnDestroy(){super.ngOnDestroy(),this.close()}open(){this.content()&&this.timeout(`open`,()=>{let e=this.hover(),n=this.delay();e&&n&&this.timeout(`onclose`,()=>this.close(),n),this._overlay_ref&&this.close();let i=new I$2(this._portal_content(),this._view_container_ref),l=`end`,c=`top`,s=this.y_pos();this._overlay_ref=this._overlay.create({hasBackdrop:!!this.backdrop()&&!e,positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withDefaultOffsetX(this.x_offset()).withDefaultOffsetY(this.y_offset()).withPositions([{originX:this.x_pos()||l,originY:(s===`top`?`bottom`:s==`bottom`?`top`:s)||c,overlayX:this.x_pos()||l,overlayY:this.y_pos()||c}])}),this._overlay_ref.attach(i),e||this._trapFocus(),this.subscription(`escape`,this._overlay_ref.keydownEvents().pipe(Hr(f=>f.key===`Escape`)).subscribe(f=>{f.preventDefault(),this.close()})),this.backdrop()&&this.subscription(`backdrop`,this._overlay_ref.backdropClick().subscribe(()=>this.close()))},50)}close(){this.clearTimeout(`open`),this._overlay_ref&&(this._overlay_ref.dispose(),this._overlay_ref=null),this._focus_trap&&(this._focus_trap.destroy(),this._focus_trap=null,this._trigger().setAttribute(`aria-expanded`,`false`),this._return_focus?.focus(),this._return_focus=null)}_trigger(){let e=this._element.nativeElement,n=`button, a[href], input, select, textarea, [tabindex]`;return e.matches(n)?e:e.querySelector(n)||e}_trapFocus(){this._return_focus=document.activeElement||this._element.nativeElement,this._focus_trap=this._focus_trap_factory.create(this._overlay_ref.overlayElement);let e=this._overlay_ref.overlayElement;e.setAttribute(`role`,`dialog`),this._focus_trap.focusInitialElementWhenReady().then(n=>{n||this._overlay_ref?.overlayElement!==e||(e.setAttribute(`tabindex`,`-1`),e.focus())}),this._trigger().setAttribute(`aria-expanded`,`true`)}_canOpenHoverTooltip(e){return this.hover()?!(`pointerType`in e)||e.pointerType!==`touch`:!1}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Uh(t)))(i||t)}})()}static{this.ɵcmp=ib({type:t,selectors:[[``,`customTooltip`,``]],viewQuery:function(n,i){n&1&&sy(i._portal_content,J$1,5,Cr),n&2&&_T()},inputs:{x_pos:[1,`xPosition`,`x_pos`],y_pos:[1,`yPosition`,`y_pos`],content:[1,`content`],data:[1,`data`],backdrop:[1,`backdrop`],hover:[1,`hover`],delay:[1,`delay`],x_offset:[1,`xOffset`,`x_offset`],y_offset:[1,`yOffset`,`y_offset`]},features:[Om,$s],ngContentSelectors:K$1,decls:3,vars:0,consts:[[`portal_content`,``],[`custom-tooltip`,``,1,`relative`,`print:hidden`],[3,`innerHTML`],[4,`ngComponentOutlet`,`ngComponentOutletInjector`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(n,i){n&1&&(IT(),wT(0),Fm(1,ne$1,4,1,`ng-template`,null,0,m_))},dependencies:[gv,CS,TS],styles:[`[_nghost-%COMP%]{pointer-events:auto!important}`]})}}return t})();var K=(()=>{class t{_animationsDisabled=at$2();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(n){return new(n||t)};static ɵcmp=ib({type:t,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(n,i){n&2&&ly(`mat-pseudo-checkbox-indeterminate`,i.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,i.state===`checked`)(`mat-pseudo-checkbox-disabled`,i.disabled)(`mat-pseudo-checkbox-minimal`,i.appearance===`minimal`)(`mat-pseudo-checkbox-full`,i.appearance===`full`)(`_mat-animation-noopable`,i._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(n,i){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2})}return t})();var ne=[`text`];var ie=[[[`mat-icon`]],`*`];var oe=[`mat-icon`,`*`];function ae(t,o){if(t&1&&Zm(0,`mat-pseudo-checkbox`,1),t&2){let e=DT();qm(`disabled`,e.disabled)(`state`,e.selected?`checked`:`unchecked`)}}function re(t,o){if(t&1&&Zm(0,`mat-pseudo-checkbox`,3),t&2)qm(`disabled`,DT().disabled)}function se(t,o){if(t&1&&(Hs(0,`span`,4),YT(1),Zl()),t&2){let e=DT();Aw(),ed(`(`,e.group.label,`)`)}}var le=new w$2(`MAT_OPTION_PARENT_COMPONENT`);var ce=new w$2(`MatOptgroup`);var C=class{source;isUserInput;constructor(o,e=!1){this.source=o,this.isUserInput=e}};var X=(()=>{class t{_element=D$1(Xt);_changeDetectorRef=D$1(Gy);_parent=D$1(le,{optional:!0});group=D$1(ce,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=D$1(Me$2).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=st$1(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new It;_text;_stateChanges=new re$3;constructor(){let e=D$1(O);e.load(gr),e.load(ce$2),this._signalDisableRipple=!!this._parent&&Sn$1(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,n){let i=this._getHostElement();typeof i.focus==`function`&&i.focus(n)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Nt(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new C(this,e))}static ɵfac=function(n){return new(n||t)};static ɵcmp=ib({type:t,selectors:[[`mat-option`]],viewQuery:function(n,i){if(n&1&&oy(ne,7),n&2){let a;bT(a=TT())&&(i._text=a.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(n,i){n&1&&ey(`click`,function(){return i._selectViaInteraction()})(`keydown`,function(s){return i._handleKeydown(s)}),n&2&&(Xm(`id`,i.id),Wm(`aria-selected`,i.selected)(`aria-disabled`,i.disabled.toString()),ly(`mdc-list-item--selected`,i.selected)(`mat-mdc-option-multiple`,i.multiple)(`mat-mdc-option-active`,i.active)(`mdc-list-item--disabled`,i.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,J_]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:oe,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(n,i){n&1&&(IT(ie),rT(0,ae,1,2,`mat-pseudo-checkbox`,1),wT(1),Hs(2,`span`,2,0),wT(4,1),Zl(),rT(5,re,1,1,`mat-pseudo-checkbox`,3),rT(6,se,2,1,`span`,4),Zm(7,`div`,5)),n&2&&(oT(i.multiple?0:-1),Aw(5),oT(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),Aw(),oT(i.group&&i.group._inert?6:-1),Aw(),qm(`matRippleTrigger`,i._getHostElement())(`matRippleDisabled`,i.disabled||i.disableRipple))},dependencies:[K,fr],styles:[`.mat-mdc-option {
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
`],encapsulation:2})}return t})();function Ie$1(t,o,e){if(e.length){let n=o.toArray(),i=e.toArray(),a=0;for(let s=0;s<t+1;s++)n[s].group&&n[s].group===i[a]&&a++;return a}return 0}function Ee(t,o,e,n){return t<e?t:t+o>e+n?Math.max(0,t-n+o):e}var Oe=(()=>{class t{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}isSignalErrorState(e){if(!e)return!1;let n=e().invalid(),i=e().touched();return n&&i}static ɵfac=function(n){return new(n||t)};static ɵprov=Kt$1({token:t,factory:t.ɵfac})}return t})();var q=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=oa({type:t});static ɵinj=Xr({imports:[jt]})}return t})();var He=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=oa({type:t});static ɵinj=Xr({imports:[Dr,q,X,jt]})}return t})();var J=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(o,e,n,i,a){this._defaultMatcher=o,this._parentFormGroup=n,this._parentForm=i,this._stateChanges=a,e?Sn$1(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let o=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==o&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(o){if(this.formField&&o?.isSignalErrorState)return o.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,n=this.ngControl?this.ngControl.control:null;return o?.isErrorState(n,e)??!1}};var de=[`*`];var Ue=(()=>{class t{labelPosition=`after`;static ɵfac=function(n){return new(n||t)};static ɵcmp=ib({type:t,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(n,i){n&2&&ly(`mdc-form-field--align-end`,i.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:de,decls:1,vars:0,template:function(n,i){n&1&&(IT(),wT(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2})}return t})();var nt=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`];var it=[`mat-icon, [matMenuItemIcon]`,`*`];function at(a,qe){a&1&&(vp(),Hs(0,`svg`,2),Zm(1,`polygon`,3),Zl())}var st=[`*`];function ot(a,qe){if(a&1){let e=hT();Yl(0,`div`,0),ty(`click`,function(){sp(e);return ap(DT().closed.emit(`click`))})(`animationstart`,function(n){sp(e);return ap(DT()._onAnimationStart(n.animationName))})(`animationend`,function(n){sp(e);return ap(DT()._onAnimationDone(n.animationName))})(`animationcancel`,function(n){sp(e);return ap(DT()._onAnimationDone(n.animationName))}),Yl(1,`div`,1),wT(2),Ql()()}if(a&2){let e=DT();jT(e._classList),ly(`mat-menu-panel-animations-disabled`,e._animationsDisabled)(`mat-menu-panel-exit-animation`,e._panelAnimationState===`void`)(`mat-menu-panel-animating`,e._isAnimating()),Xm(`id`,e.panelId),Wm(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e.ariaLabelledby||null)(`aria-describedby`,e.ariaDescribedby||null)}}var te=new w$2(`MAT_MENU_PANEL`);var ee=(()=>{class a{_elementRef=D$1(Xt);_document=D$1(W);_focusMonitor=D$1(gt);_parentMenu=D$1(te,{optional:!0});_changeDetectorRef=D$1(Gy);role=`menuitem`;disabled=!1;disableRipple=!1;_hovered=new re$3;_focused=new re$3;_highlighted=!1;_triggersSubmenu=!1;constructor(){D$1(O).load(gr),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||a)};static ɵcmp=ib({type:a,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:8,hostBindings:function(t,n){t&1&&ey(`click`,function(o){return n._checkDisabled(o)})(`mouseenter`,function(){return n._handleMouseEnter()}),t&2&&(Wm(`role`,n.role)(`tabindex`,n._getTabIndex())(`aria-disabled`,n.disabled)(`disabled`,n.disabled||null),ly(`mat-mdc-menu-item-highlighted`,n._highlighted)(`mat-mdc-menu-item-submenu-trigger`,n._triggersSubmenu))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,J_],disableRipple:[2,`disableRipple`,`disableRipple`,J_]},exportAs:[`matMenuItem`],ngContentSelectors:it,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(t,n){t&1&&(IT(nt),wT(0),Hs(1,`span`,0),wT(2,1),Zl(),Zm(3,`div`,1),rT(4,at,2,0,`:svg:svg`,2)),t&2&&(Aw(3),qm(`matRippleDisabled`,n.disableRipple||n.disabled)(`matRippleTrigger`,n._getHostElement()),Aw(),oT(n._triggersSubmenu?4:-1))},dependencies:[fr],encapsulation:2})}return a})();var Ge$1=new w$2(`MatMenuContent`);var Bt=(()=>{class a{_template=D$1(Cr);_appRef=D$1(xr);_injector=D$1(oe$4);_viewContainerRef=D$1(Un$1);_document=D$1(W);_changeDetectorRef=D$1(Gy);_portal;_outlet;_attached=new re$3;attach(e={}){this._portal||(this._portal=new I$2(this._template,this._viewContainerRef)),this.detach(),this._outlet||(this._outlet=new _t$1(this._document.createElement(`div`),this._appRef,this._injector));let t=this._template.elementRef.nativeElement;t.parentNode.insertBefore(this._outlet.outletElement,t),this._changeDetectorRef.markForCheck(),this._portal.attach(this._outlet,e),this._attached.next()}detach(){this._portal?.isAttached&&this._portal.detach()}ngOnDestroy(){this.detach(),this._outlet?.dispose()}static ɵfac=function(t){return new(t||a)};static ɵdir=jo({type:a,selectors:[[`ng-template`,`matMenuContent`,``]],features:[s_([{provide:Ge$1,useExisting:a}])]})}return a})();var rt=new w$2(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var $=`_mat-menu-enter`;var I=`_mat-menu-exit`;var P=(()=>{class a{_elementRef=D$1(Xt);_changeDetectorRef=D$1(Gy);_injector=D$1(oe$4);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=at$2();_allItems;_directDescendantItems=new Ns;_classList={};_panelAnimationState=`void`;_animationDone=new re$3;_isAnimating=st$1(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=l$2({},this._classList);t&&t.length&&t.split(` `).forEach(i=>{n[i]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(i=>{n[i]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new It;close=this.closed;panelId=D$1(Me$2).getId(`mat-menu-panel-`);constructor(){let e=D$1(rt);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new De(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(ID(this._directDescendantItems),wD(e=>iD(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),i=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[i]&&!n[i].disabled?t.setActiveItem(i):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(ID(this._directDescendantItems),wD(t=>iD(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Nt(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Ag(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=m$3(l$2({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===I;(t||e===$)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===$||e===I)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(I),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?$:I)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(ID(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||a)};static ɵcmp=ib({type:a,selectors:[[`mat-menu`]],contentQueries:function(t,n,i){if(t&1&&ry(i,Ge$1,5)(i,ee,5)(i,ee,4),t&2){let o;bT(o=TT())&&(n.lazyContent=o.first),bT(o=TT())&&(n._allItems=o),bT(o=TT())&&(n.items=o)}},viewQuery:function(t,n){if(t&1&&oy(Cr,5),t&2){let i;bT(i=TT())&&(n.templateRef=i.first)}},hostVars:3,hostBindings:function(t,n){t&2&&Wm(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,J_],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,e=>e==null?null:J_(e)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[s_([{provide:te,useExisting:a}])],ngContentSelectors:st,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(t,n){t&1&&(IT(),Lm(0,ot,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})}return a})();var lt=new w$2(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=D$1(oe$4);return()=>It$1(a)}});var u=new WeakMap;var mt=(()=>{class a{_canHaveBackdrop;_element=D$1(Xt);_viewContainerRef=D$1(Un$1);_menuItemInstance=D$1(ee,{optional:!0,self:!0});_dir=D$1(Ii,{optional:!0});_focusMonitor=D$1(gt);_ngZone=D$1(ie$3);_injector=D$1(oe$4);_scrollStrategy=D$1(lt);_changeDetectorRef=D$1(Gy);_animationsDisabled=at$2();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Y.EMPTY;_menuCloseSubscription=Y.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=D$1(te,{optional:!0});this._parentMaterialMenu=t instanceof P?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&u.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=u.get(t);u.set(t,this),n&&n!==this&&n._closeMenu();let i=this._createOverlay(t),o=i.getConfig(),r=o.positionStrategy;this._setPosition(t,r),this._canHaveBackdrop?o.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:o.hasBackdrop=t.hasBackdrop??!1,i.hasAttached()||(i.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof P&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(jv(t.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof P&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(Jn$1(1)).subscribe(()=>{t.detach(),u.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&u.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Xt$2(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof P&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new q$1({positionStrategy:Yt$2(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let i=n.connectionPair.overlayX===`start`?`after`:`before`,o=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(i,o)})})}_setPosition(e,t){let[n,i]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[o,r]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[R,T]=[o,r],[N,O]=[n,i],c=0;if(this._triggersSubmenu()){if(O=n=e.xPosition===`before`?`start`:`end`,i=N=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let ne=this._parentMaterialMenu.items.first;this._parentInnerPadding=ne?ne._getHostElement().offsetTop:0}c=o===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(R=o===`top`?`bottom`:`top`,T=r===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:R,overlayX:N,overlayY:o,offsetY:c},{originX:i,originY:R,overlayX:O,overlayY:o,offsetY:c},{originX:n,originY:T,overlayX:N,overlayY:r,offsetY:-c},{originX:i,originY:T,overlayX:O,overlayY:r,offsetY:-c}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments();return iD(e,this._parentMaterialMenu?this._parentMaterialMenu.closed:Lv(),this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Hr(o=>this._menuOpen&&o!==this._menuItemInstance)):Lv(),t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new I$2(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return u.get(e)===this}_triggerIsAriaDisabled(){return J_(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){bC()};static ɵdir=jo({type:a})}return a})();var Lt=(()=>{class a extends mt{_cleanupTouchstart;_hoverSubscription=Y.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new It;onMenuOpen=this.menuOpened;menuClosed=new It;onMenuClose=this.menuClosed;constructor(){super(!0);let e=D$1(br);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{z(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){G$1(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||a)};static ɵdir=jo({type:a,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&ey(`click`,function(o){return n._handleClick(o)})(`mousedown`,function(o){return n._handleMousedown(o)})(`keydown`,function(o){return n._handleKeydown(o)}),t&2&&Wm(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Om]})}return a})();var Ht=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=oa({type:a});static ɵinj=Xr({imports:[Dr,di$1,jt,Vt$1]})}return a})();var y={capture:!0};var T=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var p=`mat-ripple-loader-uninitialized`;var l=`mat-ripple-loader-class-name`;var A=`mat-ripple-loader-centered`;var s=`mat-ripple-loader-disabled`;var N=(()=>{class r{_document=D$1(W);_animationsDisabled=at$2();_globalRippleOptions=D$1(bi$1,{optional:!0});_platform=D$1(p$3);_ngZone=D$1(ie$3);_injector=D$1(oe$4);_eventCleanups;_hosts=new Map;constructor(){let e=D$1(Ln$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>T.map(t=>e.listen(this._document,t,this._onInteraction,y)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(p,this._globalRippleOptions?.namespace??``),(t.className||!e.hasAttribute(l))&&e.setAttribute(l,t.className||``),t.centered&&e.setAttribute(A,``),t.disabled&&e.setAttribute(s,``)}setDisabled(e,t){let i=this._hosts.get(e);i?(i.target.rippleDisabled=t,!t&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):t?e.setAttribute(s,``):e.removeAttribute(s)}_onInteraction=e=>{let t=E$2(e);if(t instanceof HTMLElement){let i=t.closest(`[${p}="${this._globalRippleOptions?.namespace??``}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(`.mat-ripple`)?.remove();let t=this._document.createElement(`span`);t.classList.add(`mat-ripple`,e.getAttribute(l)),e.append(t);let i=this._globalRippleOptions,E=this._animationsDisabled?0:i?.animation?.enterDuration??Lt$1.enterDuration,O=this._animationsDisabled?0:i?.animation?.exitDuration??Lt$1.exitDuration,a={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(s),rippleConfig:{centered:e.hasAttribute(A),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:E,exitDuration:O}}},c=new ke$1(a,this._ngZone,t,this._platform,this._injector),m=!a.rippleDisabled;m&&c.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:c,hasSetUpEvents:m}),e.removeAttribute(p)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static ɵfac=function(t){return new(t||r)};static ɵprov=Kt$1({token:r,factory:r.ɵfac})}return r})();function vn(e,o){if(e&1&&Zm(0,`div`,1)(1,`div`,2),e&2){let t=o;uy(`background-color`,t),Aw(),uy(`background-color`,t)}}function xn(e,o){if(e&1&&(Hs(0,`div`,5),YT(1),Zl()),e&2){let t=DT(2);Aw(),ed(` `,t.banner()?.content||t.banner()?.message,` `)}}function Cn(e,o){if(e&1&&(Hs(0,`div`,6),YT(1),Zl()),e&2){let t=DT(2);Aw(),ed(` `,t.banner()?.content||t.banner()?.message,` `)}}function yn(e,o){if(e&1){let t=hT();Hs(0,`div`,3)(1,`icon`,4),YT(2),Zl(),rT(3,xn,2,1,`div`,5)(4,Cn,2,1,`div`,6),Hs(5,`button`,7),d_(6,`translate`),ey(`click`,function(){sp(t);return ap(DT().close())}),Hs(7,`icon`),YT(8,`close`),Zl()()()}if(e&2){let t=DT();ly(`bg-info`,t.banner().type===`info`||!t.banner().type)(`text-info-content`,t.banner().type===`info`||!t.banner().type)(`bg-warning`,t.banner().type===`warn`)(`text-warning-content`,t.banner().type===`warn`)(`bg-error`,t.banner().type===`error`)(`text-error-content`,t.banner().type===`error`),Aw(2),my(t.type_icon()),Aw(),oT(t.banner().type===`error`?3:4),Aw(2),Wm(`aria-label`,p_(6,15,`COMMON.CLOSE`))}}var Kt={info:`info`,warn:`warning`,error:`error`};var Yt=(()=>{class e{constructor(){this._org=D$1(we$1),this._change=st$1(0),this.is_setup=st$1(!1),this.banner=g$2(`banner`),this.environment_bar=g$2(`environment_bar`),this.type_icon=Ce(()=>Kt[this.banner()?.type??`info`]??Kt.info),this._environment_bar_padding=ds(()=>{document.body.classList.toggle(`has-environment-bar`,!!this.environment_bar())}),this._banner_key=Ce(()=>{let t=this.banner();return t?.id||t?.content||t?.message||``}),this.has_been_closed=Ce(()=>this.is_setup()?(this._change(),!this.banner()?.content&&!this.banner()?.message||localStorage.getItem(`PLACE.last_banner`)===this._banner_key()):!0)}async ngOnInit(){await this._org.waitUntilInitialised(),setTimeout(()=>this.is_setup.set(!0),500)}async close(){localStorage.setItem(`PLACE.last_banner`,this._banner_key()),this._change.set(Date.now())}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=ib({type:e,selectors:[[`global-banner`]],decls:2,vars:2,consts:[[1,`flex`,`w-full`,`items-center`,`space-x-4`,`p-4`,`print:hidden`,3,`bg-info`,`text-info-content`,`bg-warning`,`text-warning-content`,`bg-error`,`text-error-content`],[`aria-hidden`,`true`,1,`environment-bar`,`top-0`,`print:hidden`],[`aria-hidden`,`true`,1,`environment-bar`,`bottom-0`,`print:hidden`],[1,`flex`,`w-full`,`items-center`,`space-x-4`,`p-4`,`print:hidden`],[`aria-hidden`,`true`,1,`text-2xl`],[`role`,`alert`,1,`flex-1`],[`announce`,``,1,`flex-1`],[`icon`,``,`matRipple`,``,3,`click`]],template:function(n,i){if(n&1&&(rT(0,vn,2,4),rT(1,yn,9,17,`div`,0)),n&2){let l;oT((l=i.environment_bar())?0:-1,l),Aw(),oT(!i.has_been_closed()&&i.banner()?1:-1)}},dependencies:[V,w$3,f$2],styles:[`[_nghost-%COMP%]{display:block;width:100%}.environment-bar[_ngcontent-%COMP%]{height:.5rem;left:0;pointer-events:none;position:fixed;width:100%;z-index:10000}`]})}}return e})();function Sn(e,o){e&1&&Ym(0,`div`,2)}var En=new w$2(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`);var qt=(()=>{class e{_elementRef=D$1(Xt);_ngZone=D$1(ie$3);_changeDetectorRef=D$1(Gy);_renderer=D$1(br);_cleanupTransitionEnd;constructor(){let t=Gt(),n=D$1(En,{optional:!0});this._isNoopAnimation=t===`di-disabled`,t===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),n&&(n.color&&(this.color=this._defaultColor=n.color),this.mode=n.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor=`primary`;get value(){return this._value}set value(t){this._value=Zt(t||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(t){this._bufferValue=Zt(t||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new It;get mode(){return this._mode}set mode(t){this._mode=t,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=t=>{this.animationEnd.observers.length===0||!t.target||!t.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(n){return new(n||e)};static ɵcmp=ib({type:e,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(n,i){n&2&&(Wm(`aria-valuenow`,i._isIndeterminate()?null:i.value)(`mode`,i.mode),jT(`mat-`+i.color),ly(`_mat-animation-noopable`,i._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!i._isNoopAnimation)(`mdc-linear-progress--indeterminate`,i._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,eS],bufferValue:[2,`bufferValue`,`bufferValue`,eS],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(n,i){n&1&&(Yl(0,`div`,0),Ym(1,`div`,1),rT(2,Sn,1,0,`div`,2),Ql(),Yl(3,`div`,3),Ym(4,`span`,4),Ql(),Yl(5,`div`,5),Ym(6,`span`,4),Ql()),n&2&&(Aw(),uy(`flex-basis`,i._getBufferBarFlexBasis()),Aw(),oT(i.mode===`buffer`?2:-1),Aw(),uy(`transform`,i._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
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
`],encapsulation:2})}return e})();function Zt(e,o=0,t=100){return Math.max(o,Math.min(t,e))}var Qt=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=oa({type:e});static ɵinj=Xr({imports:[jt]})}return e})();function wn(e,o){if(e&1){let t=hT();Hs(0,`aside`,0)(1,`div`,1)(2,`h2`,2),YT(3),Zl(),Hs(4,`p`,3),YT(5),Zl()(),Hs(6,`button`,4),ey(`click`,function(){sp(t);return ap(DT().reloadApp())}),Hs(7,`icon`),YT(8,`refresh`),Zl()(),Hs(9,`button`,5),ey(`click`,function(){sp(t);return ap(DT().dismissed.set(!0))}),Hs(10,`icon`),YT(11,`close`),Zl()()()}if(e&2){let t=o;Aw(3),ed(` `,t.message||`Update available`,` `),Aw(2),ed(` `,t.details||`Refresh the page to get the new version of the application`,` `),Aw(),Wm(`title`,t.action||`Reload App`)(`aria-label`,t.action||`Reload App`)}}var Jt=(()=>{class e{constructor(){this.update=Hn$1(),this.dismissed=st$1(!1)}reloadApp(){location.reload()}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=ib({type:e,selectors:[[`placeos-service-worker-update-card`]],decls:1,vars:1,consts:[[`role`,`status`,1,`border-base-300`,`bg-base-100`,`text-base-content`,`pointer-events-auto`,`fixed`,`right-4`,`bottom-4`,`z-999`,`flex`,`w-[20rem]`,`max-w-[calc(100vw-2rem)]`,`items-center`,`gap-3`,`rounded-lg`,`border`,`p-4`,`shadow-xl`],[1,`min-w-0`,`flex-1`],[1,`m-0`,`text-sm`,`leading-tight`,`font-medium`],[1,`m-0`,`mt-1`,`text-xs`,`opacity-70`],[`icon`,``,`default`,``,3,`click`],[`icon`,``,`dismiss`,``,`title`,`Dismiss`,`aria-label`,`Dismiss`,3,`click`]],template:function(n,i){if(n&1&&rT(0,wn,12,4,`aside`,0),n&2){let l;oT((l=!i.dismissed()&&i.update())?0:-1,l)}},dependencies:[V],encapsulation:2})}}return e})();var Nn=()=>[import(`./chunk-B1J0donU2.js`).then(e=>e.NativeDomainOverlayComponent)];function Mn(e,o){if(e&1){let t=hT();Hs(0,`native-domain-overlay`,0),ey(`domainSet`,function(){sp(t);return ap(DT(2).onDomainSet())}),Zl()}if(e&2){let t=DT(2);qm(`serverError`,t.domain_error())(`autoAccept`,t.auto_confirm())}}function kn(e,o){e&1&&(Lm(0,Mn,1,2),Zb(1,0,Nn),Kb())}function Tn(e,o){e&1&&(Hs(0,`div`,0),YT(1),d_(2,`translate`),Zl()),e&2&&(Aw(),ed(` `,p_(2,1,`COMMON.SERVER_DOWN`),` `))}function Gn(e,o){if(e&1){let t=hT();Hs(0,`div`,3)(1,`p`,4),YT(2),Zl(),Hs(3,`button`,5),ey(`click`,function(){sp(t);return ap(DT(2).retry())}),YT(4,` Try again `),Zl()()}if(e&2){let t=DT(2);Aw(2),ed(` `,t.initialisation_error(),` `)}}function In(e,o){if(e&1&&(Hs(0,`div`,6)(1,`p`,7),YT(2),Zl()(),Hs(3,`div`,8),Zm(4,`mat-progress-bar`,9),d_(5,`translate`),Zl()),e&2){let t=DT(2);Aw(2),ed(` `,t.message(),` `),Aw(2),Wm(`aria-label`,p_(5,2,`COMMON.LOADING`))}}function On(e,o){if(e&1&&(Hs(0,`div`,2),rT(1,Gn,5,1,`div`,3)(2,In,6,4),Zl()),e&2){let t=DT();uy(`background-image`,t.gradient()||null),Aw(),oT(t.initialisation_error()?1:2)}}var en=`background-settled`;var Rn=3e3;var tn=`PLACEOS.loading_gradient`;var Dn=/^(#[0-9a-f]{3,8}|[a-z]+|(rgba?|hsla?|oklch|oklab)\([\w\s.,%/-]+\))$/i;function Pn(e){return!Array.isArray(e)||e.length<2?``:e.every(t=>typeof t==`string`&&Dn.test(t.trim()))?`linear-gradient(to right, ${e.join(`, `)})`:``}var Ln=(()=>{class e{constructor(){this._placeos=D$1(Js),this.show=Vs(),this.domain_error=Ys(),this.auto_confirm=Zs()}onDomainSet(){this._placeos.onNativeDomainSet()}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=ib({type:e,selectors:[[`native-domain-overlay-loader`]],decls:1,vars:1,consts:[[3,`domainSet`,`serverError`,`autoAccept`]],template:function(n,i){n&1&&rT(0,kn,3,0),n&2&&oT(i.show()?0:-1)},encapsulation:2})}}return e})();var nn=(()=>{class e extends H$1{constructor(){super(...arguments),this.online=st$1(!0),this.connection_checked=st$1(!1),this.message=Ks(),this.initialisation_error=Wn$1(),this.initialisation_complete=Gn$1(),this.loading=Ce(()=>!this.initialisation_complete()),this.visible=Ce(()=>this.loading()||!!this.initialisation_error()),this.gradient=st$1(localStorage.getItem(tn)||``),this._settle_background=ds(()=>{let t=document.documentElement;if(this.visible()){this.clearTimeout(`settle-background`),t.classList.remove(en);return}this.timeout(`settle-background`,()=>t.classList.add(en),Rn)})}retry(){Kn$2()}ngOnInit(){let t=Zc();this.timeout(`initial-connection`,()=>{this.online.set(t()),this.connection_checked.set(!0)},5e3);let n=()=>{let i=be$1();if(!i)return;let l=Pn(i.config?.loading_gradient);l!==this.gradient()&&(this.gradient.set(l),localStorage.setItem(tn,l))};this.subscription(`online`,t.subscribe(i=>{this.online.set(i),i&&(this.connection_checked.set(!0),this.clearTimeout(`initial-connection`)),n()}))}static{this.ɵfac=(()=>{let t;return function(i){return(t||(t=Uh(e)))(i||e)}})()}static{this.ɵcmp=ib({type:e,selectors:[[`global-loading`]],features:[Om],decls:4,vars:2,consts:[[`role`,`alert`,1,`bg-error`,`fixed`,`top-2`,`left-1/2`,`z-9999`,`-translate-x-1/2`,`rounded-3xl`,`px-4`,`py-2`,`text-xs`,`text-white`,`shadow-sm`],[`loader`,``,1,`bg-base-300`,`pointer-events-auto`,`fixed`,`inset-0`,`z-9998`,`flex`,`flex-col`,`items-center`,`justify-end`,`space-y-2`,`p-4`,3,`background-image`],[`loader`,``,1,`bg-base-300`,`pointer-events-auto`,`fixed`,`inset-0`,`z-9998`,`flex`,`flex-col`,`items-center`,`justify-end`,`space-y-2`,`p-4`],[1,`border-base-300`,`bg-base-100`,`w-[24rem]`,`max-w-[calc(100vw-2rem)]`,`rounded-lg`,`border`,`p-4`,`text-center`,`text-xs`,`shadow-sm`],[`initialisation-error`,``,`role`,`alert`],[`type`,`button`,1,`bg-primary`,`text-primary-content`,`mt-3`,`rounded`,`px-4`,`py-2`,3,`click`],[1,`border-base-300`,`bg-base-100`,`w-[24rem]`,`max-w-[calc(100vw-2rem)]`,`rounded-lg`,`border`,`p-2`,`text-center`,`text-xs`,`shadow-sm`],[`role`,`status`,1,`text-center`,`font-mono`],[1,`border-base-300`,`w-[24rem]`,`max-w-[calc(100vw-2rem)]`,`overflow-hidden`,`rounded-full`,`border`,`shadow-sm`],[`mode`,`indeterminate`,1,`scale-150`,`rounded-sm`]],template:function(n,i){n&1&&(Zm(0,`native-domain-overlay-loader`),rT(1,Tn,3,3,`div`,0),rT(2,On,3,3,`div`,1),Zm(3,`placeos-service-worker-update-card`)),n&2&&(Aw(),oT(i.connection_checked()&&!i.online()?1:-1),Aw(),oT(i.visible()?2:-1))},dependencies:[Qt,qt,Ln,Jt,f$2],styles:[`[_nghost-%COMP%]{pointer-events:none}[loader][_ngcontent-%COMP%]{background-image:linear-gradient(to right,#0d47a1,#2196f3)}`]})}}return e})();var Bn=()=>[`/`];var rn=(()=>{class e{static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=ib({type:e,selectors:[[`app-unauthorised`]],decls:15,vars:11,consts:[[`unauthorised`,``,1,`absolute`,`inset-0`],[1,`border-base-300`,`bg-base-100`,`text-base-content`,`mx-auto`,`my-4`,`flex`,`w-104`,`max-w-[calc(100%-1rem)]`,`flex-col`,`gap-2`,`rounded-xl`,`border`,`p-4`,`text-center`,`shadow-lg`],[1,`text-4xl`],[1,`py-4`],[`btn`,``,3,`routerLink`]],template:function(n,i){n&1&&(Hs(0,`div`,0)(1,`div`,1)(2,`h1`,2),YT(3,`403`),Zl(),Hs(4,`h3`),YT(5),d_(6,`translate`),Zl(),Hs(7,`p`,3),YT(8),d_(9,`translate`),Zl(),Hs(10,`p`),YT(11),d_(12,`translate`),Zl(),Hs(13,`a`,4),YT(14,`Try Again`),Zl()()()),n&2&&(Aw(5),my(p_(6,4,`COMMON.FORBIDDEN`)),Aw(3),ed(` `,p_(9,6,`COMMON.INVALID_PAGE_PERMISSIONS`),` `),Aw(3),ed(` `,p_(12,8,`COMMON.CONTACT_ADMIN`),` `),Aw(2),qm(`routerLink`,a_(10,Bn)))},dependencies:[$t,f$2],styles:[`[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center}[unauthorised][_ngcontent-%COMP%]{background-image:linear-gradient(to right,#c62828,#ef5350)}`]})}}return e})();var Fn=20*1e3;function Vn(){try{return!!Z$2()}catch{return!1}}function Un(e,o){return new Promise(t=>{let n=setTimeout(()=>t(!1),o);e.then(()=>{clearTimeout(n),t(!0)},()=>{clearTimeout(n),t(!1)})})}var we=class{};var Ne=(()=>{class e{constructor(){this._router=D$1(q$2),this._settings=D$1(cr),this._org=D$1(we$1),this._injector=D$1(oe$4),this._access=D$1(we,{optional:!0})}async canActivate(t,n){return this.checkUser()}async canLoad(t,n){return this.checkUser()}async canActivateChild(t,n){return this.checkUser()}async checkUser(){if(!await this.waitForBackend(Promise.all([this._org.waitUntilInitialised(),Ti(de$3,Boolean,this._injector)])))return this.offlineAccess();let n=this._access?.group?[this._access.group]:this._settings.get(`app.allow_access_groups`)||[],i=await this.useGroupSubsystemAccess(),l=!1;if(i){let h=await this.waitForUser();if(!h)return this.offlineAccess();if(ut())return this.offlineAccess();l=this.checkSubsystemAccess(h),ht$1(`ACCESS`,`Checking subsystem access`,l)}else if(!n.length)l=!0,ht$1(`ACCESS`,`No access groups`,l);else{let h=await this.waitForUser();if(!h)return this.offlineAccess();l=!!(h&&n.find(ee=>h.groups.includes(ee))),ht$1(`ACCESS`,`Checking access groups`,l)}return this.storeDecision(!!l),l||this._router.navigate([`/unauthorised`]),!!l}get _decision_key(){return`PLACEOS.access_allowed.${this._settings.app_name||``}`}storeDecision(t){try{localStorage.setItem(this._decision_key,t?`1`:`0`)}catch{}}wasDenied(){try{return localStorage.getItem(this._decision_key)===`0`}catch{return!1}}async waitForUser(){if(!await this.waitForBackend(Yc(Zc(),Boolean)))return null;let n=null;return await this.waitForBackend(hf(Ln$2).then(l=>n=l))?n:null}async waitForBackend(t){return Un(t,Fn)}offlineAccess(){return Vn()&&!this.wasDenied()?(ht$1(`ACCESS`,`Backend unreachable. Continuing with cached credentials.`),!0):(ht$1(`ACCESS`,`Backend unreachable and no cached credentials.`,void 0,`warn`),this._router.navigate([`/unauthorised`]),!1)}async useGroupSubsystemAccess(){let t=be$1()?.config?.use_group_subsystem_access;return t===!0||t===`true`}checkSubsystemAccess(t){if(!t)return!1;let i=(`${this._settings.get(`app.access_subsystem`)||``}`.trim()||`${this._settings.app_name||``}`).trim().toLowerCase();return i?jn(i,_$2.Read):!1}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵprov=A$3({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();function on(){ht$1(`MOCKS`,`No mocks available in production`)}var an=(e,o)=>o.route;function $n(e,o){if(e&1&&(Hs(0,`a`,3),d_(1,`translate`),Hs(2,`icon`,5),YT(3),Zl(),Hs(4,`div`,6),YT(5),d_(6,`translate`),Zl(),Zm(7,`div`,8),Zl()),e&2){let t=o.$implicit;qm(`routerLink`,t.route),Wm(`aria-label`,p_(1,4,t.label)),Aw(3),my(t.icon),Aw(2),ed(` `,p_(6,6,t.label),` `)}}function Xn(e,o){if(e&1&&(Hs(0,`a`,7)(1,`div`,9)(2,`icon`,10),YT(3),Zl(),Hs(4,`span`),YT(5),d_(6,`translate`),Zl()()()),e&2){let t=o.$implicit;qm(`routerLink`,t.route),Aw(3),my(t.icon),Aw(2),my(p_(6,3,t.label))}}function Hn(e,o){if(e&1){let t=hT();Zm(0,`div`,11),Hs(1,`button`,12),d_(2,`translate`),ey(`click`,function(){sp(t);return ap(DT().selectGroup())}),Hs(3,`div`,13)(4,`icon`,10),YT(5,`group`),Zl(),Hs(6,`div`,14)(7,`div`,15),YT(8),d_(9,`translate`),Zl(),Hs(10,`div`,16),YT(11),d_(12,`translate`),Zl()()()()}if(e&2){let t=DT();Aw(),Wm(`aria-label`,p_(2,3,`SIGNAGE_MANAGER.SELECT_SIGNAGE_GROUP`)),Aw(7),ed(` `,p_(9,5,`SIGNAGE_MANAGER.SELECT_GROUP`),` `),Aw(3),ed(` `,p_(12,7,t.selected_label()),` `)}}var sn=(()=>{class e{constructor(){this._context=D$1(Ve),this._nav_items=w$1(),this.MORE_MENU_ROUTES=[`/templates`,`/schedules`,`/manage`,`/groups`],this.primary_nav_items=Ce(()=>this._nav_items().filter(t=>!this.MORE_MENU_ROUTES.includes(t.route))),this.more_nav_items=Ce(()=>this._nav_items().filter(t=>this.MORE_MENU_ROUTES.includes(t.route))),this.groups=this._context.signage_groups,this.selected_group=this._context.selected_group,this.can_manage_all_groups=this._context.can_manage_all_groups,this.show_selector=this._context.show_group_selector,this.selected_label=Ce(()=>this.selected_group()?.group.name||`SIGNAGE_MANAGER.ALL_GROUPS`)}selectGroup(){return this._context.selectGroup()}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=ib({type:e,selectors:[[`nav-footer`]],decls:17,vars:11,consts:[[`more_menu`,`matMenu`],[1,`bg-secondary`,`text-secondary-content`,`border-base-100`,`border-t`,`px-2`,`py-2`,`shadow-[0_-8px_24px_rgba(0,0,0,0.18)]`,`sm:hidden`],[1,`mx-auto`,`flex`,`max-w-screen-sm`,`items-center`,`justify-around`,`gap-1`],[`routerLinkActive`,`active bg-primary/30`,`ariaCurrentWhenActive`,`page`,1,`hover:bg-base-100/30`,`focus-visible:bg-base-100/30`,`relative`,`flex`,`h-14`,`min-w-0`,`flex-1`,`flex-col`,`items-center`,`justify-center`,`rounded-lg`,`px-1`,`text-xs`,3,`routerLink`],[`icon`,``,`type`,`button`,`matRipple`,``,1,`hover:bg-base-100/30`,`focus-visible:bg-base-100/30`,`relative`,`flex`,`h-14`,`min-w-0`,`flex-1`,`flex-col`,`items-center`,`justify-center`,`rounded-lg`,`px-1`,`text-xs`,3,`matMenuTriggerFor`],[1,`text-2xl`],[1,`truncate`,`font-medium`],[`mat-menu-item`,``,3,`routerLink`],[`active`,``,1,`bg-base-100`,`absolute`,`inset-x-2`,`-top-2`,`left-1`,`h-1`,`rounded-b`],[1,`flex`,`items-center`,`gap-2`],[1,`mr-2`,`text-2xl`],[`role`,`separator`,1,`border-base-300`,`my-1`,`border-t`],[`type`,`button`,`mat-menu-item`,``,3,`click`],[1,`flex`,`items-center`,`gap-2`,`py-1`],[1,`min-w-0`,`leading-tight`],[1,`font-medium`],[1,`text-base-content/70`,`truncate`,`text-xs`]],template:function(n,i){if(n&1&&(Hs(0,`nav`,1),d_(1,`translate`),Hs(2,`div`,2),aT(3,$n,8,8,`a`,3,an),Hs(5,`button`,4),d_(6,`translate`),Hs(7,`icon`,5),YT(8,`more_horiz`),Zl(),Hs(9,`div`,6),YT(10),d_(11,`translate`),Zl()(),Hs(12,`mat-menu`,null,0),aT(14,Xn,7,5,`a`,7,an),rT(16,Hn,13,9),Zl()()()),n&2){let l=ST(13);Wm(`aria-label`,p_(1,5,`SIGNAGE_MANAGER.PRIMARY_NAV`)),Aw(3),cT(i.primary_nav_items()),Aw(2),qm(`matMenuTriggerFor`,l),Wm(`aria-label`,p_(6,7,`SIGNAGE_MANAGER.MORE_NAV_OPTIONS`)),Aw(5),ed(` `,p_(11,9,`SIGNAGE_MANAGER.MORE`),` `),Aw(4),cT(i.more_nav_items()),Aw(2),oT(i.show_selector()&&(i.can_manage_all_groups()||i.groups().length)?16:-1)}},dependencies:[as,$t,ts,Ht,P,ee,Lt,Dr,fr,V,f$2],styles:[`a[_ngcontent-%COMP%]   [active][_ngcontent-%COMP%]{transition:opacity .3s}a[_ngcontent-%COMP%]:not(.active)   [active][_ngcontent-%COMP%]{opacity:0}nav[_ngcontent-%COMP%]{view-transition-name:nav-footer}a.active[_ngcontent-%COMP%]   [active][_ngcontent-%COMP%]{opacity:1;view-transition-name:nav-marker}`]})}}return e})();var Wn=e=>({name:e});var Kn=(e,o)=>o.id;function Yn(e,o){e&1&&Zm(0,`div`,10)}function Zn(e,o){e&1&&(Hs(0,`div`,13),YT(1),d_(2,`translate`),Zl()),e&2&&(Aw(),ed(` `,p_(2,1,`COMMON.STATE_ACTIVE`),` `))}function qn(e,o){if(e&1&&(Hs(0,`li`,8)(1,`div`,9),rT(2,Yn,1,0,`div`,10),Zl(),Hs(3,`div`,11)(4,`div`,12),YT(5),Zl(),rT(6,Zn,3,3,`div`,13),Zl()()),e&2){let t=o.$implicit,n=o.$index,i=o.$count;Aw(),ly(`border-primary`,n===i-1)(`bg-primary`,n===i-1)(`border-base-300`,n!==i-1)(`bg-base-100`,n!==i-1),Aw(),oT(n!==i-1?2:-1),Aw(2),ly(`font-semibold`,n===i-1),Aw(),ed(` `,t.name,` `),Aw(),oT(n===i-1?6:-1)}}function Qn(e,o){if(e&1&&(Hs(0,`ol`,6),aT(1,qn,7,13,`li`,8,Kn),Zl()),e&2){let t=DT(3);Aw(),cT(t.selected_hierarchy())}}function Jn(e,o){e&1&&(Hs(0,`div`,7),YT(1),d_(2,`translate`),Zl()),e&2&&(Aw(),ed(` `,p_(2,1,`SIGNAGE_MANAGER.ALL_GROUPS_ACTIVE`),` `))}function ei(e,o){if(e&1&&(Hs(0,`div`,5),rT(1,Qn,3,0,`ol`,6)(2,Jn,3,3,`div`,7),Zl()),e&2){let t=DT(2);Aw(),oT(t.selected_hierarchy().length?1:2)}}function ti(e,o){if(e&1){let t=hT();Hs(0,`div`,1)(1,`button`,2),d_(2,`translate`),d_(3,`translate`),ey(`click`,function(){sp(t);return ap(DT().selectGroup())}),Hs(4,`icon`,3),YT(5,`group`),Zl(),Hs(6,`div`,4),YT(7),d_(8,`translate`),Zl()()(),Fm(9,ei,3,1,`ng-template`,null,0,m_)}if(e&2){let t=ST(10),n=DT();qm(`content`,t)(`hover`,!0)(`backdrop`,!1)(`xOffset`,96),Aw(),Wm(`aria-label`,h_(3,8,`SIGNAGE_MANAGER.SIGNAGE_GROUP_LABEL`,c_(13,Wn,p_(2,6,n.selected_label())))),Aw(6),ed(` `,p_(8,11,n.selected_label()),` `)}}var ln=(()=>{class e{constructor(){this._context=D$1(Ve),this.groups=this._context.signage_groups,this.selected_group=this._context.selected_group,this.can_manage_all_groups=this._context.can_manage_all_groups,this.show_selector=this._context.show_group_selector,this.selected_label=Ce(()=>this.selected_group()?.group.name||`SIGNAGE_MANAGER.ALL_GROUPS`),this.selected_hierarchy=this._context.selected_group_hierarchy}selectGroup(){return this._context.selectGroup()}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=ib({type:e,selectors:[[`signage-group-selector`]],decls:1,vars:1,consts:[[`group_hierarchy_tooltip`,``],[`customTooltip`,``,`xPosition`,`start`,`yPosition`,`center`,3,`content`,`hover`,`backdrop`,`xOffset`],[`icon`,``,`type`,`button`,`matRipple`,``,1,`hover:bg-base-100/30`,`focus-visible:bg-base-100/30`,`relative`,`flex`,`h-18`,`w-18`,`flex-col`,`items-center`,`justify-center`,`rounded-xl`,3,`click`],[1,`text-3xl`],[1,`line-clamp-3`,`max-w-14`,`text-xs`,`font-medium`],[1,`border-base-300`,`bg-base-100`,`text-base-content`,`my-2`,`w-72`,`rounded-xl`,`border`,`p-3`,`text-left`,`shadow-xl`],[1,`m-0`,`space-y-1`,`p-0`],[1,`bg-base-200`,`rounded-lg`,`px-3`,`py-2`,`text-sm`],[1,`relative`,`flex`,`w-full`,`items-center`,`gap-2`],[1,`relative`,`z-10`,`h-3`,`w-3`,`shrink-0`,`rounded-full`,`border`],[1,`bg-base-300`,`absolute`,`top-3.5`,`left-1/2`,`h-1.5`,`w-0.5`,`-translate-x-1/2`,`rounded`],[1,`flex`,`min-w-0`,`flex-1`,`items-center`,`justify-between`,`gap-2`,`rounded-md`,`px-1`],[1,`flex-1`,`truncate`,`text-sm`],[1,`text-base-content/60`,`text-xs`]],template:function(n,i){n&1&&rT(0,ti,11,15),n&2&&oT(i.show_selector()&&(i.can_manage_all_groups()||i.groups().length)?0:-1)},dependencies:[Dr,fr,fe,V,f$2],encapsulation:2})}}return e})();var ni=[`scroller`];var ii=[`scroll_content`];var ri=()=>[`/`];var oi=(e,o)=>o.route;var ai=(e,o)=>o.id;function si(e,o){e&1&&(Zm(0,`img`,6),d_(1,`translate`)),e&2&&qm(`alt`,p_(1,2,`SIGNAGE_MANAGER.LOGO_ALT`))(`source`,o)}function li(e,o){e&1&&(Hs(0,`div`,7),YT(1),d_(2,`translate`),Zl()),e&2&&(Aw(),ed(` `,p_(2,1,`SIGNAGE_MANAGER.LOGO_ALT`),` `))}function ci(e,o){if(e&1){let t=hT();Hs(0,`button`,16),ey(`click`,function(){sp(t);return ap(DT().scrollNav(-1))}),Hs(1,`icon`,9),YT(2,`keyboard_arrow_up`),Zl()()}if(e&2)qm(`disabled`,!DT().can_scroll_up())}function mi(e,o){if(e&1){let t=hT();Hs(0,`a`,17,2),d_(2,`translate`),ey(`isActiveChange`,function(i){sp(t);let l=ST(1);return ap(DT().onActiveChange(i,l))}),Hs(3,`icon`,18),YT(4),Zl(),Hs(5,`div`,19),YT(6),d_(7,`translate`),Zl(),Zm(8,`div`,20),Zl()}if(e&2){let t=o.$implicit;qm(`routerLink`,t.route),Wm(`aria-label`,p_(2,4,t.label)),Aw(4),my(t.icon),Aw(2),ed(` `,p_(7,6,t.label),` `)}}function di(e,o){if(e&1){let t=hT();Hs(0,`button`,21),ey(`click`,function(){sp(t);return ap(DT().scrollNav(1))}),Hs(1,`icon`,9),YT(2,`keyboard_arrow_down`),Zl()()}if(e&2)qm(`disabled`,!DT().can_scroll_down())}function pi(e,o){if(e&1&&(Hs(0,`div`,30),YT(1),Zl()),e&2){let t=DT().$implicit;Aw(),ed(` `,t.local,` `)}}function _i(e,o){if(e&1){let t=hT();Hs(0,`button`,26),ey(`click`,function(){let i=sp(t).$implicit;return ap(DT(2).setLocale(i.id))}),Hs(1,`div`,27)(2,`icon`,28),YT(3),Zl(),Hs(4,`div`,29)(5,`div`),YT(6),d_(7,`translate`),Zl(),rT(8,pi,2,1,`div`,30),d_(9,`translate`),Zl()()()}if(e&2){let t=o.$implicit,n=DT(2);ly(`font-semibold`,n.active_locale()===t.id),qm(`matTooltip`,n.localeDetails(t)),Wm(`aria-checked`,n.active_locale()===t.id),Aw(3),ed(` `,n.active_locale()===t.id?`check`:`language`,` `),Aw(3),my(p_(7,7,t.name)),Aw(2),oT(t.local&&p_(9,9,t.name)!==t.local?8:-1)}}function ui(e,o){if(e&1&&(Hs(0,`button`,22),d_(1,`translate`),d_(2,`translate`),Hs(3,`icon`,18),YT(4,`language`),Zl(),Hs(5,`div`,23),YT(6),d_(7,`translate`),Zl()(),Hs(8,`mat-menu`,24,3),aT(10,_i,10,11,`button`,25,ai),Zl()),e&2){let t=ST(9),n=DT();qm(`matMenuTriggerFor`,t)(`matTooltip`,n.active_locale_details()),Wm(`aria-label`,p_(1,4,`COMMON.LANGUAGE`)+`: `+p_(2,6,n.active_locale_label())),Aw(6),ed(` `,p_(7,8,n.active_locale_label()),` `),Aw(4),cT(n.locales())}}var gi=(()=>{class e{constructor(){this.top=0,this.can_scroll_up=st$1(!1),this.can_scroll_down=st$1(!1)}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵprov=A$3({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();var cn=(()=>{class e{constructor(){this._settings=D$1(cr),this._locale=D$1(xf),this.locales=this._settings.signal(`locales`,[]),this.show_locale_selector=this._settings.signal(`show_locale_selector`,!1),this.nav_items=w$1(),this.logo_src=ar(),this._scroller=eH(`scroller`),this._scroll_content=eH(`scroll_content`),this._scroll_state=D$1(gi),this.can_scroll_up=this._scroll_state.can_scroll_up,this.can_scroll_down=this._scroll_state.can_scroll_down,this.overflowing=Ce(()=>this.can_scroll_up()||this.can_scroll_down()),this._palette=D$1(F),this._is_apple=/Mac|iPhone|iPad/.test(navigator.userAgent),this.palette_shortcut=this._is_apple?`⌘K`:`Ctrl+K`,this.palette_aria_shortcut=this._is_apple?`Meta+K`:`Control+K`,this.active_locale=Ce(()=>this._locale.locale),this.active_locale_label=Ce(()=>{let n=this.active_locale();return this.locales().find(l=>l.id===n)?.name||`LANGUAGE.ENGLISH`}),this.active_locale_details=Ce(()=>{let n=this.active_locale(),i=this.locales().find(l=>l.id===n);return i?this.localeDetails(i):`${Et(`COMMON.LANGUAGE`)}: ${n}`});let t=D$1(me);Ag(()=>{let n=this._scroller()?.nativeElement,i=this._scroll_content()?.nativeElement;if(!n||!i)return;n.scrollTop=this._scroll_state.top,this.updateScrollState(),this.revealActiveLink();let l=new ResizeObserver(()=>{this.updateScrollState(),this.revealActiveLink()});l.observe(n),l.observe(i),t.onDestroy(()=>l.disconnect())})}updateScrollState(){let t=this._scroller()?.nativeElement;t&&(this._scroll_state.top=t.scrollTop,this.can_scroll_up.set(t.scrollTop>1),this.can_scroll_down.set(t.scrollTop+t.clientHeight<t.scrollHeight-1))}scrollNav(t){let n=this._scroller()?.nativeElement;n&&n.scrollBy({top:t*n.clientHeight/3,behavior:`smooth`})}onActiveChange(t,n){t?this._active_link=n:this._active_link===n&&(this._active_link=void 0),this.revealActiveLink()}revealActiveLink(){let t=this._scroller()?.nativeElement,n=this._active_link;if(!t||!n)return;let i=t.getBoundingClientRect(),l=n.getBoundingClientRect(),h=8;l.top<i.top+h?t.scrollTop-=i.top+h-l.top:l.bottom>i.bottom-h&&(t.scrollTop+=l.bottom-i.bottom+h)}localeDetails(t){let n=Et(t.name);return t.local&&t.local!==n?`${n} (${t.local}) \xB7 ${t.id}`:`${n} \xB7 ${t.id}`}openPalette(){this._palette.toggle()}setLocale(t){t!==this.active_locale()&&(this._locale.setLocale(t),localStorage.setItem(`PLACEOS.locale`,t),setTimeout(()=>location.reload(),300))}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=ib({type:e,selectors:[[`nav-sidebar`]],viewQuery:function(n,i){n&1&&sy(i._scroller,ni,5)(i._scroll_content,ii,5),n&2&&_T(2)},decls:22,vars:19,consts:[[`scroller`,``],[`scroll_content`,``],[`nav_link`,``],[`language_menu`,`matMenu`],[1,`bg-secondary`,`text-secondary-content`,`border-base-100`,`relative`,`z-30`,`hidden`,`h-full`,`flex-col`,`border-r`,`p-2`,`shadow-lg`,`sm:flex`],[`logo`,``,1,`bg-base-100/80`,`mx-auto`,`flex`,`h-20`,`w-20`,`shrink-0`,`items-center`,`justify-center`,`rounded-2xl`,`shadow-xl`,3,`routerLink`],[`auth`,``,1,`max-h-18`,`max-w-18`,`object-contain`,3,`alt`,`source`],[1,`opacity-20`],[`type`,`button`,`matRipple`,``,`matTooltipPosition`,`right`,1,`hover:bg-base-100/30`,`focus-visible:bg-base-100/30`,`mx-auto`,`mt-2`,`flex`,`h-10`,`w-18`,`shrink-0`,`items-center`,`justify-center`,`gap-1`,`rounded-xl`,3,`click`,`matTooltip`],[1,`text-2xl`],[`type`,`button`,`matRipple`,``,`scroll-up`,``,`aria-hidden`,`true`,`tabindex`,`-1`,1,`hover:bg-base-100/30`,`mx-auto`,`mt-2`,`flex`,`h-6`,`w-18`,`shrink-0`,`items-center`,`justify-center`,`rounded-lg`,`disabled:opacity-30`,3,`disabled`],[1,`no-scrollbar`,`min-h-0`,`w-[calc(100%+0.5rem)]`,`flex-1`,`overflow-x-hidden`,`overflow-y-auto`,`p-2`,3,`scroll`],[1,`flex`,`flex-col`,`gap-4`],[`routerLinkActive`,`active bg-primary/30`,`ariaCurrentWhenActive`,`page`,1,`hover:bg-base-100/30`,`focus-visible:bg-base-100/30`,`relative`,`flex`,`h-18`,`w-18`,`shrink-0`,`flex-col`,`items-center`,`justify-center`,`rounded-xl`,3,`routerLink`],[`type`,`button`,`matRipple`,``,`scroll-down`,``,`aria-hidden`,`true`,`tabindex`,`-1`,1,`hover:bg-base-100/30`,`mx-auto`,`mb-2`,`flex`,`h-6`,`w-18`,`shrink-0`,`items-center`,`justify-center`,`rounded-lg`,`disabled:opacity-30`,3,`disabled`],[1,`shrink-0`,`p-2`],[`type`,`button`,`matRipple`,``,`scroll-up`,``,`aria-hidden`,`true`,`tabindex`,`-1`,1,`hover:bg-base-100/30`,`mx-auto`,`mt-2`,`flex`,`h-6`,`w-18`,`shrink-0`,`items-center`,`justify-center`,`rounded-lg`,`disabled:opacity-30`,3,`click`,`disabled`],[`routerLinkActive`,`active bg-primary/30`,`ariaCurrentWhenActive`,`page`,1,`hover:bg-base-100/30`,`focus-visible:bg-base-100/30`,`relative`,`flex`,`h-18`,`w-18`,`shrink-0`,`flex-col`,`items-center`,`justify-center`,`rounded-xl`,3,`isActiveChange`,`routerLink`],[1,`text-3xl`],[1,`text-center`,`text-xs`,`font-medium`],[`active`,``,1,`bg-base-100`,`absolute`,`inset-y-0`,`top-0`,`-right-4`,`w-2`,`rounded-l-lg`],[`type`,`button`,`matRipple`,``,`scroll-down`,``,`aria-hidden`,`true`,`tabindex`,`-1`,1,`hover:bg-base-100/30`,`mx-auto`,`mb-2`,`flex`,`h-6`,`w-18`,`shrink-0`,`items-center`,`justify-center`,`rounded-lg`,`disabled:opacity-30`,3,`click`,`disabled`],[`type`,`button`,`matRipple`,``,`matTooltipPosition`,`right`,1,`hover:bg-base-100/30`,`focus-visible:bg-base-100/30`,`mb-2`,`flex`,`h-18`,`w-18`,`flex-col`,`items-center`,`justify-center`,`rounded-xl`,`text-center`,3,`matMenuTriggerFor`,`matTooltip`],[1,`mt-1`,`line-clamp-2`,`w-full`,`px-1`,`text-xs`,`leading-tight`,`font-medium`],[`xPosition`,`after`],[`type`,`button`,`mat-menu-item`,``,`role`,`menuitemradio`,`matTooltipPosition`,`right`,3,`matTooltip`,`font-semibold`],[`type`,`button`,`mat-menu-item`,``,`role`,`menuitemradio`,`matTooltipPosition`,`right`,3,`click`,`matTooltip`],[1,`flex`,`max-w-64`,`min-w-44`,`items-center`,`gap-3`],[1,`text-xl`],[1,`min-w-0`,`leading-tight`],[1,`text-base-content/60`,`truncate`,`text-xs`]],template:function(n,i){if(n&1&&(Hs(0,`nav`,4),d_(1,`translate`),Hs(2,`a`,5),d_(3,`translate`),rT(4,si,2,4,`img`,6)(5,li,3,3,`div`,7),Zl(),Hs(6,`button`,8),d_(7,`translate`),d_(8,`translate`),ey(`click`,function(){return i.openPalette()}),Hs(9,`icon`,9),YT(10,`search`),Zl()(),rT(11,ci,3,1,`button`,10),Hs(12,`div`,11,0),ey(`scroll`,function(){return i.updateScrollState()}),Hs(14,`div`,12,1),aT(16,mi,9,8,`a`,13,oi),Zl()(),rT(18,di,3,1,`button`,14),Hs(19,`div`,15),rT(20,ui,12,10),Zm(21,`signage-group-selector`),Zl()()),n&2){let l;Wm(`aria-label`,p_(1,10,`SIGNAGE_MANAGER.PRIMARY_NAV`)),Aw(2),qm(`routerLink`,a_(18,ri)),Wm(`aria-label`,p_(3,12,`COMMON.HOME`)),Aw(2),oT((l=i.logo_src())?4:5,l),Aw(2),qm(`matTooltip`,p_(7,14,`SIGNAGE_MANAGER.PALETTE_OPEN`)+` (`+i.palette_shortcut+`)`),Wm(`aria-label`,p_(8,16,`SIGNAGE_MANAGER.PALETTE_OPEN`))(`aria-keyshortcuts`,i.palette_aria_shortcut),Aw(5),oT(i.overflowing()?11:-1),Aw(5),cT(i.nav_items()),Aw(2),oT(i.overflowing()?18:-1),Aw(2),oT(i.show_locale_selector()&&i.locales().length>1?20:-1)}},dependencies:[as,$t,ts,Ht,P,ee,Lt,Dr,fr,Yt$1,mt$1,V,H,ln,f$2],styles:[`a[_ngcontent-%COMP%]   [active][_ngcontent-%COMP%]{transition:opacity .3s}a[_ngcontent-%COMP%]:not(.active)   [active][_ngcontent-%COMP%]{opacity:0}a.active[_ngcontent-%COMP%]   [active][_ngcontent-%COMP%]{opacity:1;view-transition-name:nav-marker}.no-scrollbar[_ngcontent-%COMP%]{scrollbar-width:none}.no-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}`]})}}return e})();var fi=[`main`];var hi=()=>[import(`./chunk-CJwgIWJt.js`).then(e=>e.SettingsDebugPanelLauncherComponent)];function bi(e,o){if(e&1){let t=hT();Hs(0,`div`,2)(1,`icon`,6),YT(2,`error`),Zl(),Hs(3,`p`,7),YT(4),d_(5,`translate`),Zl(),Hs(6,`button`,8),ey(`click`,function(){sp(t);return ap(DT().retryGroups())}),YT(7),d_(8,`translate`),Zl()()}e&2&&(Aw(4),ed(` `,p_(5,2,`SIGNAGE_MANAGER.GROUPS_LOAD_ERROR`),` `),Aw(3),ed(` `,p_(8,4,`COMMON.RETRY`),` `))}function vi(e,o){e&1&&Zm(0,`nav-sidebar`,4)}function xi(e,o){e&1&&Zm(0,`nav-footer`)}function Ci(e,o){if(e&1&&Zm(0,`settings-debug-panel-launcher`,9),e&2)qm(`loadSchema`,DT().load_settings_schema)}var mn=(()=>{class e{constructor(){this.load_settings_schema=()=>import(`./chunk-BDzPsvyF.js`),this._placeos=D$1(Js),this._uploads=D$1(Yo),this._injector=D$1(oe$4),this._palette=D$1(F),this._context=D$1(Ve),this._router=D$1(q$2),this.groups_failed=this._context.signage_groups_failed,this.show_nav=st$1(!1),this._main=eH.required(`main`),this._last_focus=null,this.blockMissedFileDrop=v$2,this._router.events.pipe(U$2()).subscribe(t=>{t instanceof O$1&&this.show_nav.set(yi(this._router.routerState.snapshot.root))}),aw({read:()=>this._recoverFocus()}),ds(()=>{this._context.features_ready()&&(this._context.templates_enabled()&&!this._context.signage_groups_failed()||de$2(()=>{/^\/templates(\/|\?|#|$)/.test(this._router.url)&&this._router.navigate([`/media`])}))})}skipToContent(t){t.preventDefault(),this._main().nativeElement.focus()}onFocusIn(t){this._last_focus=t.target instanceof HTMLElement?t.target:null}_recoverFocus(){let t=this._last_focus,n=t?.checkVisibility?.()??!0;!t||t.isConnected&&n||(this._last_focus=null,setTimeout(()=>{let i=document.activeElement;if(i&&i!==document.body&&i!==t)return;let l=document.querySelectorAll(`mat-dialog-container`);(l[l.length-1]??this._main().nativeElement).focus({preventScroll:!0})}))}retryGroups(){this._context.reloadSignageGroups()}onKeydown(t){(t.metaKey||t.ctrlKey)&&(t.altKey||t.shiftKey||t.key.toLowerCase()!==`k`||(t.preventDefault(),this._palette.toggle()))}async ngOnInit(){qs(on),await this._placeos.init(),this._uploads.init();let{ImageGenService:t}=await import(`./chunk-DfO0vekg2.js`),n=this._injector.get(t);await n.load(be$1()?.config?.org_zone),n.enabled()&&await n.loadRecent()}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=ib({type:e,selectors:[[`app-root`]],viewQuery:function(n,i){n&1&&sy(i._main,fi,5),n&2&&_T()},hostBindings:function(n,i){n&1&&ey(`keydown`,function(h){return i.onKeydown(h)},LI)(`focusin`,function(h){return i.onFocusIn(h)},LI)(`dragover`,function(h){return i.blockMissedFileDrop(h)},FI)(`drop`,function(h){return i.blockMissedFileDrop(h)},FI)},decls:15,vars:6,consts:[[`main`,``],[`href`,`#main-content`,1,`skip-link`,3,`click`],[`role`,`alert`,1,`bg-error/10`,`border-error/30`,`flex`,`items-center`,`gap-3`,`border-b`,`px-4`,`py-2`,`text-sm`],[1,`flex`,`h-1/2`,`w-full`,`flex-1`,`flex-col`,`sm:flex-row`],[1,`sm:h-full`],[`id`,`main-content`,`tabindex`,`-1`,1,`relative`,`min-h-0`,`min-w-0`,`flex-1`],[1,`text-error`,`text-xl`],[1,`min-w-0`,`flex-1`],[`btn`,``,`matRipple`,``,`type`,`button`,1,`inverse`,3,`click`],[3,`loadSchema`]],template:function(n,i){n&1&&(Hs(0,`a`,1),ey(`click`,function(h){return i.skipToContent(h)}),YT(1),d_(2,`translate`),Zl(),Zm(3,`global-banner`),rT(4,bi,9,6,`div`,2),Hs(5,`div`,3),rT(6,vi,1,0,`nav-sidebar`,4),Hs(7,`main`,5,0),Zm(9,`router-outlet`),Zl(),rT(10,xi,1,0,`nav-footer`),Zl(),Zm(11,`global-loading`),Lm(12,Ci,1,1),Zb(13,12,hi),Qb()),n&2&&(Aw(),my(p_(2,4,`SIGNAGE_MANAGER.SKIP_TO_CONTENT`)),Aw(3),oT(i.groups_failed()?4:-1),Aw(2),oT(i.show_nav()?6:-1),Aw(4),oT(i.show_nav()?10:-1))},dependencies:[Yt,Dr,fr,V,Mr,nn,sn,cn,f$2],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}`]})}}return e})();function yi(e){for(let o=0;e&&o<32;o++){if(e.data.nav===!1)return!1;e=e.firstChild}return!0}var dn={production:!0};var Si=16;var ke=`data-nav-direction`;function pn(e){let o=[],t=e;for(let n=0;t&&n<Si;n++)o.push(...t.url.map(({path:i})=>i)),t=t.firstChild;return o}function Ei(e,o){return!e.length||e[0]!==o[0]||e.length===o.length?null:o.length>e.length?`forward`:`back`}var Te=null;function _n({transition:e,from:o,to:t}){let n=pn(o),i=pn(t);if(n.join(`/`)===i.join(`/`)){e.skipTransition();return}let l=D$1(W).documentElement,h=Ei(n,i);Te=e,h?l.setAttribute(ke,h):l.removeAttribute(ke);let ee=()=>{Te===e&&(Te=null,l.removeAttribute(ke))};e.finished.then(ee,ee)}function Ai(e,o,t=!1){return e||o>0||t}var un=async()=>{let e=D$1(Ve),o=D$1(q$2),t=D$1(we$1),n=D$1(oe$4);return await Promise.all([t.waitUntilInitialised(),Ti(de$3,Boolean,n),Ti(e.signage_groups_loaded,Boolean,n)]),Ai(e.can_manage_all_groups(),e.signage_groups().length,e.signage_groups_failed())?!0:o.parseUrl(`/unauthorised`)};var gn=async()=>{let e=D$1(Ve),o=D$1(q$2),t=D$1(we$1),n=D$1(oe$4);return await Promise.all([t.waitUntilInitialised(),Ti(de$3,Boolean,n),Ti(e.signage_groups_loaded,Boolean,n)]),e.can_manage_groups()||e.signage_groups_failed()?!0:o.parseUrl(`/media`)};var Ge=async()=>{let e=D$1(Ve),o=D$1(q$2),t=D$1(we$1),n=D$1(oe$4);return await Promise.all([t.waitUntilInitialised(),Ti(e.features_ready,Boolean,n)]),e.templates_enabled()&&!e.signage_groups_failed()?!0:o.parseUrl(`/media`)};var fn=async()=>{let e=D$1(Re),o=D$1(J$3);if(!e.template_layout_dirty())return!0;let t=await Me$3({title:Et(`SIGNAGE_MANAGER.TEMPLATE_UNSAVED_TITLE`),content:Et(`SIGNAGE_MANAGER.TEMPLATE_UNSAVED_CONTENT`),confirm_text:Et(`SIGNAGE_MANAGER.TEMPLATE_DISCARD`),icon:{content:`warning`}},o);return t.reason!==`done`?!1:(t.close(),e.discardTemplateLayoutDraft(),!0)};var hn=`Signage Manager`;var wi=(()=>{class e extends _r{constructor(){super(...arguments),this._title=D$1(VU),this._locale=D$1(xf)}async updateTitle(t){let n=this.buildTitle(t);if(!n){this._title.setTitle(hn);return}await this._locale.loaded(),this._title.setTitle(`${Et(n)} - ${hn}`)}static{this.ɵfac=(()=>{let t;return function(i){return(t||(t=Uh(e)))(i||e)}})()}static{this.ɵprov=A$3({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();function Ie(e){return o=>{if(o[0]?.path!==e||o.length>2)return null;let t=o[1];return{consumed:o,posParams:t?{id:t}:{}}}}var Ni=[{path:`unauthorised`,component:rn,data:{nav:!1}},{path:``,canActivate:[Ne],canActivateChild:[Ne,un],children:[{path:`media`,title:`SIGNAGE_MANAGER.NAV_MEDIA`,loadComponent:()=>import(`./chunk-CkDZtEQd.js`).then(e=>e.MediaSectionComponent)},{matcher:Ie(`playlists`),title:`SIGNAGE_MANAGER.NAV_PLAYLISTS`,loadComponent:()=>import(`./chunk-ByTNvG0-.js`).then(e=>e.PlaylistsSectionComponent)},{path:`templates/:id`,canActivate:[Ge],canDeactivate:[fn],title:`SIGNAGE_MANAGER.NAV_TEMPLATES`,loadComponent:()=>import(`./chunk-DnwRXReJ.js`).then(e=>e.TemplatesSectionComponent)},{path:`templates`,canActivate:[Ge],title:`SIGNAGE_MANAGER.NAV_TEMPLATES`,loadComponent:()=>import(`./chunk-DnwRXReJ.js`).then(e=>e.TemplatesSectionComponent)},{path:`schedules`,title:`SIGNAGE_MANAGER.NAV_SCHEDULES`,loadComponent:()=>import(`./chunk-D5VNUr5x2.js`).then(e=>e.SchedulesSectionComponent)},{matcher:Ie(`displays`),title:`SIGNAGE_MANAGER.NAV_DISPLAYS`,loadComponent:()=>import(`./chunk-DsVgCKeF2.js`).then(e=>e.DisplaysSectionComponent)},{path:`manage`,title:`SIGNAGE_MANAGER.NAV_MANAGE`,loadComponent:()=>import(`./chunk-DnMGvLjx2.js`).then(e=>e.ManageSectionComponent),children:[{path:``,pathMatch:`full`,redirectTo:`report`},{path:`report`,title:`SIGNAGE_MANAGER.NAV_REPORT`,loadComponent:()=>import(`./chunk-DdtBBtFw2.js`).then(e=>e.ContentReportComponent)},{path:`branding`,title:`SIGNAGE_MANAGER.NAV_BRANDING`,loadComponent:()=>import(`./chunk-BMr0LOT72.js`).then(e=>e.BrandingComponent)}]},{path:`remote-setup`,data:{nav:!1},loadComponent:()=>import(`./chunk-CNAdJIxo2.js`).then(e=>e.RemoteSetupComponent)},{path:`report`,redirectTo:`manage/report`},{path:`branding`,redirectTo:`manage/branding`},{path:`groups`,canActivate:[gn],title:`COMMON.GROUPS`,loadComponent:()=>import(`./chunk-CXN2ZpjB2.js`).then(e=>e.GroupsSectionComponent)},{matcher:Ie(`zones`),title:`SIGNAGE_MANAGER.NAV_ZONES`,loadComponent:()=>import(`./chunk-CIb4y47A.js`).then(e=>e.ZonesSectionComponent)},{path:`**`,redirectTo:`media`}]}];$S(mn,{providers:[lE(),Qn$1(`service-worker.js`,{enabled:dn.production}),y_(),lb(()=>sr(D$1(xf).locale)),is(Ni,os(),Ci$1(),ss(e=>er$1(e.error)),wi$1({skipInitialTransition:!0,onViewTransitionCreated:_n})),{provide:_r,useClass:wi},{provide:Ae$1,useClass:Et$1},{provide:Ho,deps:[xf],useFactory:e=>e.locale}]}).catch(e=>console.error(e));export{le$2 as $,M as A,Ae as B,F as C,l$1 as D,f$1 as E,ne$2 as F,Re$1 as G,Ge$2 as H,oe$2 as I,ae$2 as J,Ve as K,pe as L,S as M,_e as N,m$1 as O,le$1 as P,ie$2 as Q,re$1 as R,v as S,c as T,He$1 as U,Ee$1 as V,Me as W,ee$2 as X,be as Y,g$1 as Z,fe as _,P as a,s$2 as at,mt$1 as b,Ee as c,J as d,oe$3 as et,Oe as f,le as g,ce as h,Lt as i,b as it,Re as j,E$1 as k,He as l,X as m,Bt as n,s$1 as nt,ee as o,T$2 as ot,Ue as p,X$2 as q,Ht as r,_$1 as rt,C as s,N as t,m$2 as tt,Ie$1 as u,oe$1 as v,w$1 as w,H as x,Yt$1 as y,$$3 as z};
;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1075d304-ab4f-5c9d-845e-6439a83f700f")}catch(e){}}();
//# debugId=1075d304-ab4f-5c9d-845e-6439a83f700f
