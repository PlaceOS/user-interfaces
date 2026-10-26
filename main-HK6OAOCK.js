import{$ as E$2,$i as bN,$n as Qg,$o as pc,$r as WS,$s as ve$2,$t as Kee,An as O7,Ar as Ue$1,As as ss,At as He$1,Ba as hee,Bn as PP,C as Au,Ca as fE,Ci as Yi$1,Co as m7,Cr as Ts,Ct as Gt$2,Da as ft$2,Di as ZA,Do as mr$1,Dt as H9,E as B9,En as Na,Er as U9,Es as sc,Fa as gre,Fc as l$1,Fi as Zm,Fr as Ur,Ft as I7,G as DI,Ga as i7,Go as ote,Ho as on$1,Hr as VZ,Hs as ub,Ia as gt$1,Ic as m$3,Ir as V$2,J as Dc,Jn as QL,Jr as W$6,Js as v0,Jt,Ka as iE,Ko as ow,L as CV,Lc as n$1,Li as _7,Lo as oE,Lr as V7,Ls as tr$1,Lt as IP,Ma as ge$2,Mc as z_,Mo as nd,Mr as Um,Ms as sx,Mt as Hm,N as Bo,Na as gf,Nc as zg,Ni as Ze$1,No as nl,Ns as t7,Nt as Ho,O as Bd,Oc as z9,Oi as ZC,On as O$3,Oo as mt$2,Or as UT,Ot as HP,P as Br,Pa as gr$1,Pc as zu,Pn as Oa,Po as no,Pr as Uo,Pt as Ht$1,Qi as b7,Qn as Qd,Qo as pE,Qt as KS,R as C_,Ra as h7,Rn as P7,Rr as V9,Rs as u4,Rt as Id,Sa as f7,Sn as Mf,Sr as Tg,Ss as sI,St as Gr,Ti as Yr,Tr as U7,U as D7,Ua as hse,Un as Pn$1,Ur as Vee,Ut as It$2,Va as hi$1,Vi as _e$1,Vs as uI,Vt as In$1,W as D9,Wi as a7,Wn as Pr,Wo as or$1,Wr as Vm,Ws as uk,Wt as J9,Xa as j7,Xi as are,Xo as p4,Xr as W7,Xs as v9,Xt as K7,Yi as an$1,Yo as p$1,Yr as W0,Ys as v7,Yt as K$2,Za as j9,Zi as at$3,Zn as Qa,Zo as p7,Zr as W9,Zs as vI,Zt as K9,_ as Ad,_i as Y$4,_n as M9,_t as G9,ai as X$2,an as LL,ar as R9,b as Ag,ba as ex,bc as y7,bn as Ma,bo as lI,bs as s4,c as $k,ca as cI,cr as Rt$2,cs as qg,d as A7,dc as xA,dr as S9,ds as qr$1,ea as bP,en as Ki$1,er as Qk,es as pee,et as E7,f as A9,fa as d7,ft as Fr,gc as xr,gi as Xt$2,gn as M7,gr as Sr,gs as re$1,gt as G7,ha as e7,hc as xe$1,hi as Xo,hr as Se$1,i as $L,in as L9,io as k7,is as q$5,it as Ee$1,j as Bk,jc as zV,jo as nS,js as sw,jt as Hi$1,ka as g7,kc as zD,ko as n7,ks as sg,kt as HR,l as A$3,lc as x7,li as XL,lo as ke,lr as Ru,ls as qi$1,lt as FP,mc as xR,mi as Xn$1,mt as G$3,n as $7,nc as w7,nn as L$2,no as jr,nr as Qt$2,ns as ps,oa as c4,oc as wL,on as LN,or as Rc,ot as F7,pa as dee,pc as xP,pi as Xg,pn as Ln$1,po as kr,ps as rE,qi as ac,qn as Q9,qo as ox,qr as Vr,qs as v$4,r as $9,ra as bi$1,ri as Wse,rn as L7,ro as k$4,rr as Qw,rt as Ed,s as $ie,sa as c7,si as X9,ss as q9,st as F9,tc as w$4,ti as Wi$1,tt as EI,ua as ce$1,uc as x9,ui as XT,un as Le,ur as S7,ut as FZ,v as Ae,va as ef,vc as xt$1,vi as Y7,vr as T7,vs as rn$1,w as B$4,wa as fee,wi as Yie,wn as N7,wr as Tt$2,x as Al,xa as f4,xc as y9,xo as le,xr as Td,xs as s7,xt as Gk,ya as es,yi as Y9,yo as l7,yt as Ge$1,z as Cc,zn as P9,zo as oS,zs as u7}from"./chunk-BMrmXrUb.js";import{c as kt$1,l as os,n as Ci$1,s as is,t as Ar,u as q$6}from"./chunk-C4kTJ9A5.js";import{A as hF,B as qI,C as Wu,E as _E,F as ln$1,I as mI,M as ju,N as ks,O as be$2,R as nt$3,S as Wh,T as YF,U as w$,W as ws,a as GA,b as WI,d as KF,f as MI,i as D_,j as jI,k as hE,l as JF,n as B_,o as GI,s as Ha,t as $h,u as Jh,v as Ul,w as XF,x as Wa,y as VF,z as qF}from"./chunk-I6VGD85i.js";import{n as Z$2,t as J$3}from"./chunk-BickP1QN.js";import{t as f$2}from"./chunk-DyUuiLt_.js";var g$2=64;var m$2=64;var _$3=30*1e3;var A$2=`PlaceOS.image-cache-v1`;var y$1=`PlaceOS.image-cache-keys-v1`;var n=new Map;var s$2=new Map;var a=new Map;var h$2=!1;function L$1(){if(!h$2&&(h$2=!0,typeof caches<`u`&&caches.delete(A$2).catch(()=>!1),typeof sessionStorage<`u`))try{sessionStorage.removeItem(y$1)}catch{}}function k$3(e){let t=n.get(e);if(t)return n.delete(e),n.set(e,t),t}function I$3(e,t){let o=n.get(e);for(o&&o!==t&&URL.revokeObjectURL(o),n.delete(e),n.set(e,t);n.size>g$2;){let c=n.keys().next().value;if(!c)break;let i=n.get(c);n.delete(c),i&&URL.revokeObjectURL(i)}return t}function w$3(e){for(a.delete(e),a.set(e,Date.now()+_$3);a.size>m$2;){let t=a.keys().next().value;if(!t)break;a.delete(t)}}function v$3(e){let t=rn$1();document.cookie=`${t===`x-api-key`?`api-key=`+encodeURIComponent(sc()):`bearer_token=`+encodeURIComponent(t)};max-age=30;path=${e};samesite=strict;${location.protocol===`https:`?`secure;`:``}`}function C$2(){let e=rn$1();return e===`x-api-key`?{"X-API-Key":sc()}:{Authorization:`Bearer ${e}`}}function D$2(e,t){return u$1(e,()=>(v$3(t),fetch(e)))}function O$2(e){return u$1(e,()=>fetch(e,{headers:C$2()}))}async function u$1(e,t){L$1();let o=k$3(e);if(o)return o;if((a.get(e)||0)>Date.now())throw new Error(`Image load is in retry cooldown`);a.delete(e);let i=s$2.get(e);if(i)return i;let f=t().then(async r=>{if(!r?.ok)throw new Error(`Failed to fetch image: ${r?.status}`);return I$3(e,URL.createObjectURL(await r.blob()))}).catch(r=>{throw w$3(e),r}).finally(()=>s$2.delete(e));return s$2.set(e,f),f}function ct$2(n,o){if(typeof n==`string`)return n;if(!I$2(n))return o;let t=n.error;if(typeof t==`string`)return t;if(I$2(t)){let i=t.error;if(typeof i==`string`)return i;let a=t.message;if(typeof a==`string`)return a}let e=n.message;return typeof e==`string`?e:o}function I$2(n){return typeof n==`object`&&n!==null}function U$3(n){if(!I$2(n))return;let o=n.status;if(typeof o==`number`)return o;let t=n.error;if(!I$2(t))return;let e=t.status;return typeof e==`number`?e:void 0}function B$3(n,o,t){return(n*299+o*587+t*114)/1e3}var tt$1=.55;var et$2=1024;async function C$1(n){let o=typeof n==`string`?n:URL.createObjectURL(n);try{let t=new Image;return t.crossOrigin=`anonymous`,await new Promise((e,i)=>{t.onload=()=>e(),t.onerror=()=>i(new Error(`logo could not be read`)),t.src=o}),t}finally{typeof n!=`string`&&setTimeout(()=>URL.revokeObjectURL(o),0)}}function T$1(n){let o=n.naturalWidth||512,t=n.naturalHeight||512,e=Math.min(1,et$2/Math.max(o,t)),i=document.createElement(`canvas`);i.width=Math.max(1,Math.round(o*e)),i.height=Math.max(1,Math.round(t*e));let a=i.getContext(`2d`);if(!a)throw new Error(`logo could not be read`);return a.drawImage(n,0,0,i.width,i.height),{canvas:i,context:a}}async function J$2(n){let{canvas:t,context:e}=T$1(await C$1(n)),{data:i}=e.getImageData(0,0,t.width,t.height),a=0,r=0;for(let s=0;s<i.length;s+=4){let c=i[s+3]/255;if(c<.1)continue;let d=B$3(i[s],i[s+1],i[s+2])/255;r+=d*c,a+=c}return a?r/a>tt$1:!1}async function F$3(n,o){let{canvas:e,context:i}=T$1(await C$1(n)),a=i.getImageData(0,0,e.width,e.height),{data:r}=a;for(let c=0;c<r.length;c+=4){if(r[c+3]===0)continue;let[d,p,l]=nt$2(r[c],r[c+1],r[c+2]),[X,Z,V]=it$2(d,p,1-l);r[c]=X,r[c+1]=Z,r[c+2]=V}i.putImageData(a,0,0);let s=await new Promise(c=>e.toBlob(d=>c(d),`image/png`));if(!s)throw new Error(`logo could not be converted`);return new File([s],o,{type:`image/png`})}function nt$2(n,o,t){let e=n/255,i=o/255,a=t/255,r=Math.max(e,i,a),s=Math.min(e,i,a),c=(r+s)/2;if(r===s)return[0,0,c];let d=r-s,p=c>.5?d/(2-r-s):d/(r+s),l=0;return r===e?l=(i-a)/d+(i<a?6:0):r===i?l=(a-e)/d+2:l=(e-i)/d+4,[l/6,p,c]}function it$2(n,o,t){if(!o){let a=Math.round(t*255);return[a,a,a]}let e=t<.5?t*(1+o):t+o-t*o,i=2*t-e;return[Math.round(k$2(i,e,n+1/3)*255),Math.round(k$2(i,e,n)*255),Math.round(k$2(i,e,n-1/3)*255)]}function k$2(n,o,t){let e=t;return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(o-n)*6*e:e<1/2?o:e<2/3?n+(o-n)*(2/3-e)*6:n}var _$2=()=>`${ge$2()}/signage/ai`;function K$1(n){let o=Object.entries(n).filter(([,t])=>t!=null).map(([t,e])=>`${encodeURIComponent(t)}=${encodeURIComponent(e)}`);return o.length?`?${o.join(`&`)}`:``}function P$2(n){return ss(`${ge$2()}/uploads/${encodeURIComponent(n)}`,{response_type:`void`})}function M$2(){return ac(`${_$2()}/capabilities`)}function z$1(n){return Yr(`${_$2()}/generate`,n)}function H$3(n){return Yr(`${_$2()}/edit`,n)}function q$4(n,o={}){return ac(`${_$2()}/jobs/${encodeURIComponent(n)}${K$1(o)}`)}function Q$2(n={}){return ac(`${_$2()}/jobs${K$1(n)}`)}function W$5(n){return Yr(`${_$2()}/jobs/${encodeURIComponent(n)}/cancel`,{})}function Y$3(n,o){return Yr(`${_$2()}/jobs/${encodeURIComponent(n)}/claim`,o)}var at$2=[`done`,`failed`,`cancelled`];function w$2(n){return n===`on_light`?`logo_upload_id`:`logo_dark_upload_id`}var ot$1=25;var rt$2=10;var st$1=[0,500,1500];function v$2(n){return!!n&&at$2.includes(n.state)}var At$1=(()=>{class n extends be$2{constructor(){super(...arguments),this.capabilities=ce$1(null),this.brand_kit=ce$1(null),this.brand_kit_read=ce$1(`pending`),this.jobs=ce$1({}),this.enabled=ve$2(()=>!!this.capabilities()?.enabled),this.default_provider=ve$2(()=>{let t=this.capabilities();return t?.enabled&&(t.providers.find(e=>e.id===t.default_provider_id)||t.providers[0])||null}),this.default_model=ve$2(()=>{let t=this.default_provider();return t&&(t.models.find(e=>e.id===t.default_model)||t.models[0])||null}),this.can_generate=ve$2(()=>!!this.default_model()?.generate),this.can_edit=ve$2(()=>!!this.default_model()?.edit),this.running_count=ve$2(()=>Object.values(this.jobs()).filter(t=>!v$2(t)).length),this.recent=ve$2(()=>Object.values(this.jobs()).sort((t,e)=>(e.created_at||0)-(t.created_at||0))),this._uploads=p$1(w$),this._loaded=!1,this._org_zone=``,this._intents=new Map,this._watching=new Set,this._attempts=new Map}async load(t){if(this._loaded)return this.capabilities();this._loaded=!0,this._org_zone=t||``;let e=await M$2().catch(()=>null);return this.capabilities.set(e||{enabled:!1,providers:[],aspect_ratios:[],qualities:[],max_candidates:1,logo_layer:!1,quota:{user_remaining_today:null,domain_remaining_month:null}}),e?.enabled&&t&&await this.reloadBrandKit(),this.capabilities()}async uploadBrandLogo(t){let e=await J$2(t).catch(()=>!1)?`on_dark`:`on_light`;return this.replaceBrandLogo(e,t,!0)}async replaceBrandLogo(t,e,i=!1){let a=await this._uploads.uploadFileToCompletion(e),r={[w$2(t)]:a},s=t===`on_light`?`on_dark`:`on_light`,c=this.brand_kit()?.[w$2(s)],d=this.brand_kit()?.logo_derived;if(i&&(!c||d===s)){let l=await this._flip(e,s).catch(()=>null);l&&(r[w$2(s)]=l,r.logo_derived=s)}else d===t&&(r.logo_derived=void 0);let p=await this.saveBrandKit(r);return this.capabilities.update(l=>l&&m$3(l$1({},l),{logo_layer:!0})),p}async deriveBrandLogo(t){let e=this.brand_kit()?.[w$2(t===`on_light`?`on_dark`:`on_light`)];if(!e)throw new Error(ps(`SIGNAGE_MANAGER.AI_NO_LOGO_YET`));let i=await this.loadImage(`/api/engine/v2/uploads/${encodeURIComponent(e)}/url`),a=await this._flip(i,t);return this.saveBrandKit({[w$2(t)]:a,logo_derived:t})}async _flip(t,e){let a=await F$3(t,`${typeof t==`string`?`logo`:t.name.replace(/\.[^.]+$/,``)}-${e.replace(`_`,`-`)}.png`);return this._uploads.uploadFileToCompletion(a)}uploadReference(t){return this._uploads.uploadFileToCompletion(t)}removeReference(t){return P$2(t).catch(()=>null)}async saveBrandKit(t){if(!this._org_zone)throw new Error(ps(`SIGNAGE_MANAGER.AI_NO_ORG_ZONE`));if(this.brand_kit_read()!==`ok`)throw new Error(ps(`SIGNAGE_MANAGER.BRAND_NOT_LOADED`));let e=l$1(l$1({},this.brand_kit()||{}),t);for(let i of Object.keys(e))e[i]===void 0&&delete e[i];return await z9(this._org_zone,{name:`signage_ai`,description:`Brand kit used when generating signage artwork`,details:e},`put`),this.brand_kit.set(e),e}async reloadBrandKit(){if(!this._org_zone)return null;let t=await UT(this._org_zone,`signage_ai`).catch(()=>null);if(!t)return this.brand_kit_read.set(`failed`),this.brand_kit();let e=t.details;return e&&!Array.isArray(e)&&Object.keys(e).length&&this.brand_kit.set(e),this.brand_kit_read.set(`ok`),this.brand_kit()}intentKey(t,e){let i=`${t}:${JSON.stringify(e)}`,a=this._intents.get(i);return a||(a=crypto.randomUUID(),this._intents.set(i,a)),a}async loadRecent(){let t=await Q$2({mine:!0,limit:20}).catch(()=>[]);return this._merge(t),t.filter(e=>!v$2(e)).forEach(e=>this.watch(e.id)),t}async generate(t){let e=await z$1(m$3(l$1({},t),{idempotency_key:t.idempotency_key||crypto.randomUUID()}));return this._merge([e]),this.watch(e.id),e}async edit(t){let e=await H$3(m$3(l$1({},t),{idempotency_key:t.idempotency_key||crypto.randomUUID()}));return this._merge([e]),this.watch(e.id),e}async cancel(t){let e=await W$5(t).catch(()=>null);return e&&this._merge([e]),e}async claim(t,e,i){let a;for(let r of st$1){r&&await new Promise(s=>setTimeout(s,r));try{return await Y$3(t,{upload_id:e,item_id:i})}catch(s){a=s}}throw a}job(t){return this.jobs()[t]}watch(t){this._watching.has(t)||(this._watching.add(t),this._attempts.delete(t),this.timeout(`watch-${t}`,()=>this._poll(t),1))}unwatch(t){this._watching.delete(t),this._attempts.delete(t),this.clearTimeout(`watch-${t}`)}async _poll(t){if(!this._watching.has(t))return;let i=await q$4(t,{wait:ot$1,since:this.jobs()[t]?.version??0}).catch(r=>({error:r}));if(`error`in i){let r=U$3(i.error),s=(this._attempts.get(t)||0)+1;if(this._attempts.set(t,s),r===404||r===403||s>=rt$2){this._failJob(t),this.unwatch(t);return}this.timeout(`watch-${t}`,()=>this._poll(t),2e3);return}let a=i;if(this._attempts.delete(t),this._merge([a]),v$2(a)){this.unwatch(t),this._announce(a),this.refreshQuota();return}this.timeout(`watch-${t}`,()=>this._poll(t),1)}async refreshQuota(){let t=await M$2().catch(()=>null);t?.quota&&this.capabilities.update(e=>e&&m$3(l$1({},e),{quota:t.quota}))}_announce(t){t.state===`failed`?fee(t.error_message||ps(`SIGNAGE_MANAGER.AI_JOB_FAILED`)):t.state===`done`&&t.images_produced>0&&pee(ps(`SIGNAGE_MANAGER.AI_JOB_DONE`))}_failJob(t){let e=this.jobs()[t];if(!e||v$2(e))return;let i=m$3(l$1({},e),{state:`failed`,version:e.version+1,error_message:ps(`SIGNAGE_MANAGER.AI_JOB_FAILED`)});this._merge([i]),this._announce(i)}_merge(t){t?.length&&this.jobs.update(e=>{let i=l$1({},e);for(let a of t)i[a.id]=a;return i})}loadImage(t){return D$2(t.startsWith(`http`)?t:`${location.origin}${t}`,`/api/engine/v2/uploads`)}static{this.ɵfac=(()=>{let t;return function(i){return(t||(t=mt$2(n)))(i||n)}})()}static{this.ɵprov=Y$4({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();var o=null;function f$1(e){return!e||e.indexOf(`&`)===-1?e:(o??=document.createElement(`textarea`),o.innerHTML=e,o.value)}var c=[`name`,`display_name`];var i=[`group`,`user`,`zone`];function d$1(e){if(!e||typeof e!=`object`)return e;let t=l$1({},e);for(let n of c)typeof t[n]==`string`&&(t[n]=f$1(t[n]));for(let n of i)t[n]&&typeof t[n]==`object`&&(t[n]=d$1(t[n]));return t}[`.png`,`.jpg`,`.jpeg`,`.webp`,`.svg`,`image/png`,`image/jpeg`,`image/webp`,`image/svg+xml`,`.webm`,`video/webm`,`.mp4`,`video/mp4`,`.mov`,`video/quicktime`].join(`,`);var W$4=[`image/*`,`.heic`,`.heif`,`.webm`,`video/webm`,`.mp4`,`video/mp4`,`.mov`,`video/quicktime`].join(`,`);var p=3840;var m$1=2160;var f=new Set([`image/png`,`image/jpeg`,`image/jpg`,`image/webp`,`image/svg+xml`]);var l=new Set([`png`,`jpg`,`jpeg`,`webp`,`svg`]);var w$1=new Set([...l,`avif`,`bmp`,`gif`,`heic`,`heif`,`tif`,`tiff`]);var d=new Set([`avc1`,`avc3`]);var g$1=new Set([`mp4a`]);var A$1=new Set([`avc1`,`avc3`,`hev1`,`hvc1`,`av01`,`vp09`,`mp4v`,`encv`]);var O$1=new Set([`mp4a`,`ac-3`,`ec-3`,`Opus`,`fLaC`,`alac`,`.mp3`,`enca`]);var _$1=new Set([`V_VP8`,`V_VP9`]);var M$1=new Set([`A_VORBIS`,`A_OPUS`]);var h$1=new Set([`V_VP8`,`V_VP9`,`V_AV1`]);var C=new Set([`A_VORBIS`,`A_OPUS`,`A_AAC`,`A_FLAC`,`A_MPEG/L3`]);var I$1=new Set([`dinf`,`edts`,`mdia`,`meta`,`minf`,`moof`,`moov`,`mvex`,`stbl`,`traf`,`trak`,`udta`]);var D$1=`Supported image formats: PNG, JPEG, WEBP, SVG. Supported video formats: WEBM, MP4, and MOV.`;var V$1=`Unsupported video codec. Use MP4 or MOV with H.264 video and AAC audio, or WEBM with VP8/VP9 video and Vorbis/Opus audio for broad browser support.`;var y=`Maximum supported resolution is ${p}x${m$1} (4K).`;async function j$2(e,t={}){if(b(e))return{valid:!0,media_type:`image`};let o=P$1(e);return o?await x(e,o,t)?{valid:!0,media_type:`video`}:{valid:!1,error:V$1}:{valid:!1,error:D$1}}function b(e){return s$1(e,f,l)}function F$2(e){return e.type.toLowerCase().startsWith(`image/`)||w$1.has(E$1(e.name))}function k$1(e){return e.width<=p&&e.height<=m$1?{valid:!0}:{valid:!1,error:y}}function P$1(e){return s$1(e,new Set([`video/mp4`]),new Set([`mp4`]))?`mp4`:s$1(e,new Set([`video/quicktime`]),new Set([`mov`]))?`mov`:s$1(e,new Set([`video/webm`]),new Set([`webm`]))?`webm`:null}async function x(e,t,o){let n=await U$2(e);return t===`webm`?R$1(n,o):B$2(n,o)}function s$1(e,t,o){let n=e.type.toLowerCase(),r=E$1(e.name);return t.has(n)||o.has(r)}function E$1(e=``){let t=e.toLowerCase().split(`.`);return t.length>1&&t.pop()||``}function B$2(e,t){let o=G$2(e),n=t.allow_extended_video_codecs?new Set([...d,`av01`,`hev1`,`hvc1`]):d,r=o.filter(a=>A$1.has(a)),i=o.filter(a=>O$1.has(a));return r.length>0&&r.every(a=>n.has(a))&&i.every(a=>g$1.has(a))}function R$1(e,t){let o=new Uint8Array(e),n=t.allow_extended_video_codecs?new Set([..._$1,`V_AV1`]):_$1,r=[...h$1].filter(a=>u(o,a)),i=[...C].filter(a=>u(o,a));return r.length>0&&r.every(a=>n.has(a))&&i.every(a=>M$1.has(a))}function G$2(e){let t=new DataView(e),o=[];return S$1(t,0,t.byteLength,o),[...new Set(o)]}function S$1(e,t,o,n){let r=t;for(;r+8<=o;){let i=v$1(e,r,o);if(!i)break;if(i.type===`stsd`)L(e,i.content_start,i.end,n);else if(I$1.has(i.type)){let a=i.type===`meta`?i.content_start+4:i.content_start;a<i.end&&S$1(e,a,i.end,n)}r=i.end}}function L(e,t,o,n){if(t+8>o)return;let r=e.getUint32(t+4),i=t+8;for(let a=0;a<r&&i+8<=o;a++){let c=v$1(e,i,o);if(!c)break;n.push(c.type),i=c.end}}function v$1(e,t,o){if(t+8>o)return null;let n=e.getUint32(t),r=8;if(n===1){if(t+16>o)return null;n=Number(e.getBigUint64(t+8)),r=16}else n===0&&(n=o-t);return n<r||t+n>o?null:{type:N$1(e,t+4,4),content_start:t+r,end:t+n}}function N$1(e,t,o){let n=``;for(let r=0;r<o;r++)n+=String.fromCharCode(e.getUint8(t+r));return n}function u(e,t){let o=Array.from(t).map(n=>n.charCodeAt(0));for(let n=0;n<=e.length-o.length;n++){let r=!0;for(let i=0;i<o.length;i++)if(e[n+i]!==o[i]){r=!1;break}if(r)return!0}return!1}function U$2(e){return typeof e.arrayBuffer==`function`?e.arrayBuffer():new Promise((t,o)=>{let n=new FileReader;n.onload=()=>t(n.result),n.onerror=()=>o(n.error||new Error(`Failed to read upload`)),n.readAsArrayBuffer(e)})}function X$1(t,n){if(t&1&&(tr$1(0,`main`,2),Wi$1(1,`icon`,5)(2,`p`,6),xr()),t&2){let e=Br();Xt$2(),Yi$1(`icon`,e.icon()),Xt$2(),Yi$1(`innerHTML`,e.content(),bN)}}function Y$2(t,n){if(t&1&&(tr$1(0,`main`,3)(1,`div`,7),Wi$1(2,`mat-spinner`,8),tr$1(3,`p`),Na(4),xr()()()),t&2){let e=Br();Xt$2(4),EI(e.loading())}}function Z$1(t,n){if(t&1){let e=$L();tr$1(0,`footer`,4)(1,`button`,9),Na(2),Hm(3,`translate`),xr(),tr$1(4,`button`,10),Tt$2(`click`,function(){WS(e);return KS(Br().onConfirm())}),Na(5),Hm(6,`translate`),xr()()}if(t&2){let e=Br();Xt$2(2),Bo(` `,PP(3,2,e.cancel_text()),` `),Xt$2(3),Bo(` `,PP(6,4,e.confirm_text()),` `)}}var $$1={height:`auto`};async function ge$1(t,n){let e=n.open(q$3,m$3(l$1({},$$1),{data:t}));return m$3(l$1({},await Promise.race([e.componentInstance.event.pipe(nl(i=>i.reason===`done`)).toPromise(),e.afterClosed().toPromise()])),{loading:i=>e.componentInstance.loading?.set(i),close:()=>e.close()})}var q$3=(()=>{class t extends be$2{constructor(){super(),this._dialog_ref=p$1(gf),this._data=p$1(zV),this.loading=ce$1(``),this.event=new W$6,this.title=ce$1(this._data.title||`COMMON.CONFIRM`),this.content=ce$1(this._data.content||`Are you sure?`),this.confirm_text=ce$1(this._data.confirm_text||`COMMON.ACCEPT`),this.cancel_text=ce$1(this._data.cancel_text||`COMMON.CANCEL`),this.icon=ce$1(this._data.icon||{class:`material-symbols-rounded`,content:`done`}),this.disableClose=()=>this._dialog_ref.disableClose=!0,this.enableClose=()=>this._dialog_ref.disableClose=!1}ngOnInit(){this._data.close_delay&&this.timeout(`close`,()=>this._dialog_ref.close(),this._data.close_delay)}onConfirm(){this.event.emit({reason:`done`})}static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵcmp=Ae({type:t,selectors:[[`confirm-modal`]],features:[Ee$1],decls:6,vars:3,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`h-14`,`w-[calc(100%-1rem)]`,`min-w-[20rem]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[1,`flex`,`w-md`,`max-w-[85vw]`,`flex-col`,`items-center`,`space-y-4`,`p-4`,`sm:h-auto`],[`loading`,``],[1,`bg-base-200`,`sticky`,`bottom-0`,`m-2`,`flex`,`items-center`,`justify-center`,`space-x-2`,`rounded-sm`,`border-none`,`p-2`],[1,`text-5xl`,3,`icon`],[`content`,``,1,`text-center`,3,`innerHTML`],[1,`flex`,`h-48`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-4`],[`diameter`,`32`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`bg-base-100`,`flex-1`],[`btn`,``,`matRipple`,``,`name`,`accept`,1,`flex-1`,3,`click`]],template:function(i,l){i&1&&(tr$1(0,`header`,0)(1,`h2`,1),Na(2),xr()(),Pr(3,X$1,3,2,`main`,2)(4,Y$2,5,1,`main`,3),Pr(5,Z$1,7,6,`footer`,4)),i&2&&(Xt$2(2),EI(l.title()),Xt$2(),kr(l.loading()?4:3),Xt$2(2),kr(l.loading()?-1:5))},dependencies:[J$3,Z$2,Wse,oE,rE,Yie,$ie,f$2],encapsulation:2})}}return t})();var W$3=ce$1(0);var Ce$1=W$3.asReadonly();function Me$1(){W$3.update(t=>t+1)}function ee$1(t,n,e){switch(t){case`media`:return p7(n,e);case`playlists`:return v7(n,e);case`templates`:return x7(n)}}async function ve$1(t,n,e=``){if(!n)return[];try{return(await ee$1(t,n,e?{group_id:e}:{})).shared_with??[]}catch{return[]}}function be$1(t,n,e){switch(t){case`media`:return _7(n,{group_id:e});case`playlists`:return A7(n,{group_id:e});case`templates`:return U7(n,{group_id:e})}}var s=class extends Qg{constructor(e={}){super(e),this.background_media=e.background_media?new Td(e.background_media):null}};var r=class extends Xg{constructor(e={}){super(e),this.template_details=new s(l$1({id:e.template_id},e.template_details))}};function g(t,r){let e=+V$2(t)-+V$2(r);return e<0?-1:e>0?1:e}function E(t,r,e){let[i,n]=zu(e?.in,t,r),s=i.getFullYear()-n.getFullYear(),u=i.getMonth()-n.getMonth();return s*12+u}function k(t,r){let e=V$2(t,r?.in),i=e.getMonth();return e.setFullYear(e.getFullYear(),i+1,0),e.setHours(23,59,59,999),e}function N(t,r){let e=V$2(t,r?.in);return+Ag(e,r)==+k(e,r)}function Y$1(t,r,e){let[i,n,s]=zu(e?.in,t,t,r),u=g(n,s),o=Math.abs(E(n,s));if(o<1)return 0;n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-u*o);let l=g(n,s)===-u;N(i)&&o===1&&g(i,s)===1&&(l=!1);let a=u*(o-+l);return a===0?0:a}function X(t,r,e){let i=XT(t,r)/1e3;return Bd(e?.roundingMethod)(i)}function F$1(t,r,e){let i=Ln$1(),n=e?.locale??i.locale??pc,s=2520,u=g(t,r);if(isNaN(u))throw new RangeError(`Invalid time value`);let o=Object.assign({},e,{addSuffix:e?.addSuffix,comparison:u}),[l,a]=zu(e?.in,...u>0?[r,t]:[t,r]),m=X(a,l),x=(C_(a)-C_(l))/1e3,f=Math.round((m-x)/60),c;if(f<2)return e?.includeSeconds?m<5?n.formatDistance(`lessThanXSeconds`,5,o):m<10?n.formatDistance(`lessThanXSeconds`,10,o):m<20?n.formatDistance(`lessThanXSeconds`,20,o):m<40?n.formatDistance(`halfAMinute`,0,o):m<60?n.formatDistance(`lessThanXMinutes`,1,o):n.formatDistance(`xMinutes`,1,o):f===0?n.formatDistance(`lessThanXMinutes`,1,o):n.formatDistance(`xMinutes`,f,o);if(f<45)return n.formatDistance(`xMinutes`,f,o);if(f<90)return n.formatDistance(`aboutXHours`,1,o);if(f<1440){let d=Math.round(f/60);return n.formatDistance(`aboutXHours`,d,o)}else{if(f<s)return n.formatDistance(`xDays`,1,o);if(f<43200){let d=Math.round(f/VZ);return n.formatDistance(`xDays`,d,o)}else if(f<43200*2)return c=Math.round(f/FZ),n.formatDistance(`aboutXMonths`,c,o)}if(c=Y$1(a,l),c<12){let d=Math.round(f/FZ);return n.formatDistance(`xMonths`,d,o)}else{let d=c%12,$=Math.trunc(c/12);return d<3?n.formatDistance(`aboutXYears`,$,o):d<9?n.formatDistance(`overXYears`,$,o):n.formatDistance(`almostXYears`,$+1,o)}}function M(t,r){return V$2(t*1e3,r?.in)}var R=1440;var P=[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`];function Ot$2(t){return t?.thumbnail_id?t.id?`/api/engine/v2/signage/media/${t.id}/thumbnail`:t.thumbnail_url||``:``}function Et$1(t){return t?.media_id?`/api/engine/v2/uploads/${t.media_id}/url`:t?.media_uri||``}function kt(t){return t?.media_type===`video`?`video_library`:t?.media_type===`webpage`?`http`:t?.media_type===`plugin`?`extension`:`image`}function W$2(t){let r=(t.schedules||[]).map(n=>n.media).filter(n=>!!n?.id);if(!t.media?.length&&r.length)return r;let e=t.media?.length?t.media:r,i=new Map(e.map(n=>[n.id,n]));for(let n of t.schedules||[])n.media?.id&&(n.id&&i.set(n.id,n.media),n.item_id&&i.set(n.item_id,n.media));return t.items?.length?t.items.map(n=>i.get(n)).filter(n=>!!n):e}function Nt$1(t){return W$2(t).map(r=>r.id)}function Yt$2(t){let r=new Map;for(let e of t.schedules||[])e.id&&r.set(e.id,e),e.item_id&&r.set(e.item_id,e),e.media?.id&&r.set(e.media.id,e);return r}function j$1(t){if(t>=11&&t<=13)return`${t}th`;switch(t%10){case 1:return`${t}st`;case 2:return`${t}nd`;case 3:return`${t}rd`;default:return`${t}th`}}function K(t,r){let e=new Date;return e.setHours(+t||0,+r||0,0,0),e.toLocaleTimeString(void 0,{hour:`numeric`,minute:`2-digit`})}function z(t){if(!t)return`one playlist pass`;if(t<60)return`${t} minute${t===1?``:`s`}`;if(t%60===0){let i=t/60;return`${i} hour${i===1?``:`s`}`}return`${Math.floor(t/60)} hr ${t%60} min`}function w(t,r,e){let i=new Set;if(!t||t===`*`)return[];for(let n of t.split(`,`))if(n.includes(`-`)){let[s,u]=n.split(`-`).map(Number);if(s<r||u>e||s>u)return[];for(let o=s;o<=u;o++)i.add(o)}else{let s=Number(n);if(s<r||s>e)return[];i.add(s)}return[...i].sort((n,s)=>n-s)}function _(t){return t.length<=1?t[0]||``:t.length===2?`${t[0]} and ${t[1]}`:`${t.slice(0,-1).join(`, `)} and ${t.at(-1)}`}function q$2(t){let[r,e]=t.split(`-`).map(Number);return r===1&&e===7?`1st`:r===8&&e===14?`2nd`:r===15&&e===21?`3rd`:r===22&&e===28?`4th`:r===29&&e===31?`5th`:``}function B$1(t){let r=t.split(`,`).map(e=>q$2(e));return r.every(e=>e)?r:[]}function U$1(t,r){return/^\d+-\d+(,\d+-\d+)*$/.test(t||``)&&r!==`*`}function G$1(t,r){let e=(t||`0 0 * * *`).trim().split(/\s+/);if(e.length!==5)return`Custom schedule (${t})`;let[i,n,s,u,o]=e,a=` for ${z(r)}`;if(u!==`*`)return`Custom schedule (${t})`;let m=/^\*\/(\d+)$/.exec(i)?.[1];if(i===`*`&&n===`*`&&s===`*`&&o===`*`)return`Every minute${a}`;if(m&&n===`*`&&s===`*`&&o===`*`)return`Every ${m} minutes${a}`;let x=/^\*\/(\d+)$/.exec(n)?.[1];if(i===`0`&&n===`*`&&s===`*`&&o===`*`)return`Every hour${a}`;if(i===`0`&&x&&s===`*`&&o===`*`)return`Every ${x} hours${a}`;if(!/^\d+$/.test(i)||!/^\d+$/.test(n))return`Custom schedule (${t})`;let f=K(n,i);if(s===`*`&&o===`*`)return`Every day at ${f}${a}`;if(s===`*`&&o===`1-5`)return`Weekdays at ${f}${a}`;if(s===`*`&&o!==`*`){let c=w(o,0,6).map(d=>P[d]);return c.length?`Every ${_(c)} at ${f}${a}`:`Custom schedule (${t})`}if(s!==`*`&&o===`*`){let c=w(s,1,31).map(d=>j$1(d));return c.length?`On the ${_(c)} of each month at ${f}${a}`:`Custom schedule (${t})`}if(U$1(s,o)){let c=B$1(s),d=w(o,0,6).map($=>P[$]);return c.length&&d.length?`On the ${_(c)} ${_(d)} of each month at ${f}${a}`:`Custom schedule (${t})`}return`Custom schedule (${t})`}function H$2(t){return Number.isFinite(t.play_period)?t.play_period||0:R}function J$1(t,r=Date.now()){if(!t.valid_until)return``;let e=M(t.valid_until),i=F$1(e,new Date(r));return`until ${e.getTime()>=r?`${i} from now`:`${i} ago`}`}function Xt$1(t){return t.valid_until?M(t.valid_until).toLocaleString():``}function Ft$1(t){let r=H$2(t),e=J$1(t),i=[t.play_takeover?`takeover`:``,e].filter(n=>n).join(` · `);return t.play_at?`Plays once on ${M(t.play_at).toLocaleString()} for ${z(r)}${i?` \xB7 ${i}`:``}`:`${G$1(t.play_cron||`0 0 * * *`,r)}${i?` \xB7 ${i}`:``}`}function h(t,r){if(r===`*`)return!0;if(r.includes(`,`))return r.split(`,`).some(e=>h(t,e));if(r.includes(`/`)){let[e,i]=r.split(`/`);return!!+i&&t%+i===0&&h(t,e)}if(r.includes(`-`)){let[e,i]=r.split(`-`).map(Number);return t>=e&&t<=i}return Number(r)===t}function Q$1(t,r){let e=t.trim().split(/\s+/);if(e.length!==5)return!1;let[i,n,s,u,o]=e;if(!h(r.getMinutes(),i)||!h(r.getHours(),n)||!h(r.getMonth()+1,u))return!1;let l=h(r.getDate(),s),a=h(r.getDay(),o);return s===`*`&&o===`*`?!0:s!==`*`&&o===`*`?l:s===`*`&&o!==`*`?a:U$1(s,o)?l&&a:l||a}function A(t){return t.toLocaleString(void 0,{weekday:`short`,month:`short`,day:`numeric`,hour:`numeric`,minute:`2-digit`})}function V(t){return t.toLocaleTimeString(void 0,{hour:`numeric`,minute:`2-digit`})}function v(t,r){let e=new Date(t);e.setMinutes(e.getMinutes()+Math.max(0,r||0)),r>0&&e.setSeconds(e.getSeconds()-1);let i=t.toDateString()===e.toDateString()?V(e):A(e);return`${A(t)} \u2013 ${i}`}function Z(t,r,e=0){let i=[];if(!t?.trim())return i;let n=new Date;n.setSeconds(0,0),n.setMinutes(n.getMinutes()+1);let s=new Date(n);s.setFullYear(s.getFullYear()+2);let u=e?M(e):s;for(;n<=s&&n<=u&&i.length<r;)Q$1(t,n)&&i.push(new Date(n)),n.setMinutes(n.getMinutes()+1);return i}function Pt$2(t,r=5){let e=H$2(t);if(t.play_at){let i=M(t.play_at),n=new Date(i);n.setMinutes(n.getMinutes()+Math.max(0,e||0)),e>0&&n.setSeconds(n.getSeconds()-1);let s=!!t.valid_until&&t.play_at>t.valid_until;return n>=new Date&&!s?[v(i,e)]:[]}return Z(t.play_cron||`0 0 * * *`,r,t.valid_until).map(i=>v(i,e))}async function Et(l,p,e){let t=new Map(p.map(s=>[s.id,s]));for(let s of l)t.set(s.id,s);let i=[],a=new Set;for(let s of l){let n=[],r=new Set,o=s;for(;o?.id&&!r.has(o.id)&&(n.unshift(o.id),r.add(o.id),!!o.parent_id);){let d=t.get(o.parent_id)||null;if(d||(d=await e(o.parent_id).catch(()=>null),d&&t.set(d.id,d)),!d){n.unshift(o.parent_id);break}o=d}for(let d of n)a.has(d)||(a.add(d),i.push(d))}return i}function At(l){return[...l].sort((p,e)=>p.localeCompare(e))}async function yt$1(l={}){let p=Object.entries(l).filter(t=>!!t[1]),e=new URLSearchParams(p).toString();try{let t=await ac(`${ge$2()}/signage/media/tag_counts${e?`?${e}`:``}`),i={};for(let[a,s]of Object.entries(t||{}))i[a]=Number(s)||0;return{tags:At(Object.keys(i)),counts:i}}catch{return{tags:At(await d7(l)),counts:{}}}}var Ht=[`top`,`bottom`,`left`,`right`,`floating`];var Pt$1={top:`align_vertical_top`,bottom:`align_vertical_bottom`,left:`align_horizontal_left`,right:`align_horizontal_right`,floating:`picture_in_picture`};var wt={top:`SIGNAGE_MANAGER.TEMPLATE_POSITION_TOP`,bottom:`SIGNAGE_MANAGER.TEMPLATE_POSITION_BOTTOM`,left:`SIGNAGE_MANAGER.TEMPLATE_POSITION_LEFT`,right:`SIGNAGE_MANAGER.TEMPLATE_POSITION_RIGHT`,floating:`SIGNAGE_MANAGER.TEMPLATE_POSITION_FLOATING`};function jt(l){return Pt$1[l]||`crop_free`}function Bt$1(l){return wt[l]||l}var j=(l,p,e)=>Math.min(Math.max(l,p),Math.max(p,e));function q$1(l){return l===void 0?null:j(l,0,1)*100}function H$1(l){return l===null||!Number.isFinite(l)?void 0:j(l/100,0,1)}function ft$1(l){switch(l.position){case`top`:case`bottom`:return m$3(l$1({},l),{y_pos:l.y_pos??H$1(15)});case`left`:case`right`:return m$3(l$1({},l),{x_pos:l.x_pos??H$1(20)});case`floating`:return m$3(l$1({},l),{x_pos:l.x_pos??H$1(50),y_pos:l.y_pos??H$1(50)})}}function Qt$1(l){let p={left:0,top:0,width:100,height:100};return l.map(e=>{switch(e.position){case`top`:{let t=Math.min(q$1(e.y_pos)??15,p.height),i=m$3(l$1({},p),{height:t});return p.top+=t,p.height-=t,i}case`bottom`:{let t=Math.min(q$1(e.y_pos)??15,p.height),i=m$3(l$1({},p),{top:p.top+p.height-t,height:t});return p.height-=t,i}case`left`:{let t=Math.min(q$1(e.x_pos)??20,p.width),i=m$3(l$1({},p),{width:t});return p.left+=t,p.width-=t,i}case`right`:{let t=Math.min(q$1(e.x_pos)??20,p.width),i=m$3(l$1({},p),{left:p.left+p.width-t,width:t});return p.width-=t,i}default:{let t=j(q$1(e.x_pos)??50,0,100),i=j(q$1(e.y_pos)??50,0,100);return{left:t,top:i,width:100-t,height:100-i}}}})}function vt$1(l,p){let[e,t]=l.split(`,`),i=e.split(`:`)[1].split(`;`)[0],a=atob(t),s=new ArrayBuffer(a.length),n=new Uint8Array(s);for(let r=0;r<a.length;r++)n[r]=a.charCodeAt(r);return new File([n],p,{type:i})}var St=[500,1500,4500];var Gt$1=.1;var Dt=15*1e3;var Rt$1={media:{title:`SIGNAGE_MANAGER.SVC_SHARE_MEDIA_TITLE`,success:`SIGNAGE_MANAGER.SVC_MEDIA_SHARED`,request:S7},playlists:{title:`SIGNAGE_MANAGER.SVC_SHARE_PLAYLIST_TITLE`,success:`SIGNAGE_MANAGER.SVC_PLAYLIST_SHARED`,request:L7},templates:{title:`SIGNAGE_MANAGER.SVC_SHARE_TEMPLATE_TITLE`,success:`SIGNAGE_MANAGER.SVC_TEMPLATE_SHARED`,request:G7}};function Tt$1(l){let p=l?.status;return typeof p!=`number`?!0:p===408||p===429||p>=500}async function bt$1(l){let p;for(let e=0;;e++)try{return await l()}catch(t){if(p=t,!Tt$1(t)||e>=St.length)break;await new Promise(i=>setTimeout(i,St[e]))}throw p}var Nt=`PlaceOS.SIGNAGE:playlist-meta-cache:v1`;var oe$1=`PlaceOS.SIGNAGE:selected-group:v1`;var It$1=`PlaceOS.SIGNAGE:media-view-mode:v1`;var Ct=[`id`,`name`,`display_name`,`description`,`tags`].join(`,`);var Ot$1=[`id`,`name`,`description`,`subsystems`,`authority_id`,`parent_id`,`children_count`].join(`,`);function Lt$1(){if(typeof sessionStorage>`u`)return{};try{let l=sessionStorage.getItem(Nt);return l?JSON.parse(l):{}}catch{return{}}}function Vt$1(l){if(!(typeof sessionStorage>`u`))try{sessionStorage.setItem(Nt,JSON.stringify(l))}catch{}}function qt$1(){if(typeof localStorage>`u`)return``;try{return localStorage.getItem(oe$1)||``}catch{return``}}function Ut$1(){if(typeof localStorage>`u`)return`grid`;try{let l=localStorage.getItem(It$1);return l===`list`||l===`folder`?l:`grid`}catch{return`grid`}}function zt$1(l){if(!(typeof localStorage>`u`))try{localStorage.setItem(It$1,l)}catch{}}function xt(l){if(!(typeof localStorage>`u`))try{l?localStorage.setItem(oe$1,l):localStorage.removeItem(oe$1)}catch{}}function Mt(l,p){return(l.live_template_id||l.id)===(p.live_template_id||p.id)}function Zt$1(l,p){if(!l)return[];let e=new Map(p.map(s=>[s.id,s])),t=[],i=new Set,a=l;for(;a?.id&&!i.has(a.id);)t.unshift(a),i.add(a.id),a=a.parent_id?e.get(a.parent_id):void 0;return t}function m(l){return new Promise(p=>{let e=l.afterClosed().subscribe(t=>{e.unsubscribe(),p(t)})})}var ci$1=(()=>{class l{async groupChildren(e){return this.can_manage_all_groups()?this._queryManageableGroups({parent_id:e,include_children_count:!0}):this._sortGroups(this.manageable_signage_groups().filter(t=>t.parent_id===e))}async _queryManageableGroups(e={}){let{data:t}=await x9(l$1({limit:200,fields:Ot$1,subsystem:`signage`},e));return this._sortGroups((t||[]).filter(i=>i.subsystems?.includes(`signage`)))}_currentSignageGroups(e){if(this._current_groups_request?.key===e)return this._current_groups_request.promise;let t=F9({subsystem:`signage`}).catch(i=>{throw this._current_groups_request?.key===e&&(this._current_groups_request=null),i});return this._current_groups_request={key:e,promise:t},t}async _currentManageableGroups(e){return(await this._currentSignageGroups(e)).filter(i=>!!(i.permissions&64)).map(i=>d$1(i.group))}_sortGroups(e){return e.map(d$1).sort((t,i)=>t.name.localeCompare(i.name))}static{this.PAGE_SIZE=200}loadMoreMedia(){if(this._media_loading()||!this._media_has_more())return;let e=this._media_next?.();if(!e){this._media_has_more.set(!1);return}this._fetchMediaPage(e,this._media_token)}async _fetchMediaPage(e,t){this._media_loading.set(!0);try{let i=await e;if(t!==this._media_token)return;let a=(i.data||[]).map(d$1);this._media_items.update(s=>{let n=new Map(s.map(r=>[r.id,r]));for(let r of a)n.set(r.id,r);return[...n.values()].sort((r,o)=>o.created_at-r.created_at)}),this._media_next=i.next,this._media_has_more.set(this._media_items().length<i.total)}catch{t===this._media_token&&this._media_has_more.set(!1)}finally{t===this._media_token&&this._media_loading.set(!1)}}loadMorePlaylists(){if(this._playlists_loading()||!this._playlists_has_more())return;let e=this._playlists_next?.();if(!e){this._playlists_has_more.set(!1);return}this._fetchPlaylistPage(e,this._playlists_token)}async _fetchPlaylistPage(e,t){this._playlists_loading.set(!0);try{let i=await e;if(t!==this._playlists_token)return;let a=(i.data||[]).map(d$1);this._playlist_items.update(s=>{let n=new Map(s.map(r=>[r.id,r]));for(let r of a)n.set(r.id,r);return[...n.values()].sort((r,o)=>r.name.localeCompare(o.name))}),this._playlist_cache.update(s=>{let n=l$1({},s);for(let r of a)n[r.id]=r;return n}),this._playlists_next=i.next,this._playlists_has_more.set(this._playlist_items().length<i.total)}catch{t===this._playlists_token&&this._playlists_has_more.set(!1)}finally{t===this._playlists_token&&this._playlists_loading.set(!1)}}loadMoreTemplates(){if(this._templates_loading()||!this._templates_has_more())return;let e=this._templates_next?.();if(!e){this._templates_has_more.set(!1);return}this._fetchTemplatePage(e,this._templates_token)}async _fetchTemplatePage(e,t){this._templates_loading.set(!0);try{let i=await e;if(t!==this._templates_token)return;let a=(i.data||[]).map(d$1);this._template_items.update(s=>{let n=new Map(s.map(r=>[r.id,r]));for(let r of a)n.set(r.id,r);return[...n.values()].sort((r,o)=>r.name.localeCompare(o.name))}),this._templates_next=i.next,this._templates_has_more.set(this._template_items().length<i.total)}catch{t===this._templates_token&&this._templates_has_more.set(!1)}finally{t===this._templates_token&&this._templates_loading.set(!1)}}queryDisplays(e=``){return this._canQueryLists()?Q9(l$1(m$3(l$1({},this._orgZoneQueryParams({})),{limit:l.PAGE_SIZE,signage:!0}),this._searchParam(e))):null}queryPlaylists(e=``){return this._canQueryLists()?y7(l$1(l$1({},this._orgZoneQueryParams({limit:l.PAGE_SIZE})),this._searchParam(e))):null}queryMedia(e=``){return this._canQueryLists()?u7(l$1(l$1({},this._orgZoneQueryParams({limit:l.PAGE_SIZE})),this._searchParam(e))):null}async listApprovedTemplates(){return this._canQueryLists()?(await on$1({path:`signage/templates`,query_params:this._groupQueryParams({approved:!0,limit:1e4}),fn:t=>new Qg(t)})).data:[]}async listTemplateMappings(e){return this._canQueryLists()?(await on$1({path:`signage/template_mappings`,query_params:m$3(l$1({},e),{limit:1e4}),fn:i=>new r(i)})).data:[]}querySelectableZones(e,t){return!this._canQueryLists()||!t||!e.trim()?null:i7({q:e.trim(),parent_id:t,limit:2500,include_children_count:!0})}queryGroupZones(e=``){let t=this.managed_group();return i7(l$1(l$1({limit:l.PAGE_SIZE},t?.authority_id?{authority_id:t.authority_id}:{}),this._searchParam(e)))}_canQueryLists(){return this._org.initialised()&&this._can_query_group_data()}_searchParam(e){let t=e.trim();return t?{q:t,fields:Ct}:{}}loadMoreDisplays(){if(this._displays_loading()||!this._displays_has_more())return;let e=this._displays_next?.();if(!e){this._displays_has_more.set(!1);return}this._fetchDisplayPage(e,this._displays_token)}async _fetchDisplayPage(e,t){this._displays_loading.set(!0);try{let i=await e;if(t!==this._displays_token)return;let a=(i.data||[]).filter(s=>s.signage).map(d$1);this._display_items.update(s=>[...s,...a]),this._display_cache.update(s=>{let n=l$1({},s);for(let r of a)n[r.id]=r;return n}),this._displays_next=i.next,this._displays_has_more.set(this._display_items().length<i.total)}catch{t===this._displays_token&&this._displays_has_more.set(!1)}finally{t===this._displays_token&&this._displays_loading.set(!1)}}async zoneChildren(e){let{data:t}=await i7({parent_id:e,limit:2500,include_children_count:!0});return(t||[]).map(d$1)}_pluginResource(e){return HP({params:()=>({initialised:this._org.initialised(),change:this._change()}),loader:async({params:t})=>{if(!t.initialised)return[];try{return((await P7(this._orgZoneQueryParams({limit:500,plugin_type:e}))).data||[]).filter(a=>a.enabled).map(d$1).sort((a,s)=>a.name.localeCompare(s.name))}catch{return[]}}})}constructor(){this._org=p$1(Wa),this._settings=p$1(ln$1),this._uploads=p$1(w$),this._dialog=p$1(xR),this._change=ce$1(Date.now()),this._groups_change=ce$1(Date.now()),this._display_overrides=ce$1({}),this._zone_overrides=ce$1({}),this.media_upload_accept=W$4,this.show_group_selector=this._settings.signal(`show_group_selector`,!0),this.show_media_group_tabs=this._settings.signal(`show_media_group_tabs`,!0),this.templates_enabled=this._settings.signal(`templates_enabled`,!1),this.search_term=ce$1(``),this.media_view_mode=ce$1(Ut$1()),this.managed_group_id=ce$1(``),this._managed_group_id_debounced=p4(this.managed_group_id,300),this.managed_group_tab=ce$1(`users`),this._current_user=D_(),this._active_user=ve$2(()=>{let e=this._current_user();return e?.email&&e.email!==`<empty>@dev.place.tech`?e:null}),this.signage_groups_loaded=ve$2(()=>{if(!this._active_user()?.email)return!1;let e=this._signage_groups.status();return e===`resolved`||e===`local`||e===`error`}),this.selected_group_id=ce$1(qt$1()),this.signage_group_tree_expanded=ce$1({}),this._signage_groups=HP({params:()=>({user_email:this._active_user()?.email||``,groups_change:this._groups_change(),sys_admin:this.is_sys_admin()}),loader:async({params:e})=>{if(!e.user_email)return[];try{let t=e.sys_admin?(await this._queryManageableGroups()).map(i=>({group:i,permissions:64})):await this._currentSignageGroups(e.groups_change);return this.signage_groups_failed.set(!1),t.map(d$1).sort((i,a)=>i.group.name.localeCompare(a.group.name))}catch{return this.signage_groups_failed.set(!0),[]}}}),this.signage_groups_failed=ce$1(!1),this.signage_groups=ve$2(()=>this._signage_groups.value()||[]),this.selected_group=ve$2(()=>{let e=this.selected_group_id();return this.signage_groups().find(t=>t.group.id===e)}),this.selected_group_hierarchy=ve$2(()=>Zt$1(this.selected_group()?.group,this.signage_groups().map(e=>e.group))),this.is_sys_admin=ve$2(()=>{let e=this._current_user();return!!e.sys_admin||(e.groups||[]).includes(`placeos_admin`)}),this.is_support=ve$2(()=>{let e=this._current_user();return!!e.support||(e.groups||[]).includes(`placeos_support`)}),this.can_manage_all_groups=ve$2(()=>this.is_sys_admin()||this.is_support()),this._manageable_signage_groups=HP({params:()=>({user_email:this._active_user()?.email||``,groups_change:this._groups_change(),can_manage_all:this.can_manage_all_groups()}),loader:async({params:e})=>{if(!e.user_email)return[];try{let t=e.can_manage_all?await this._queryManageableGroups():await this._currentManageableGroups(e.groups_change);return this._sortGroups(t)}catch{return[]}}}),this.manageable_signage_groups=ve$2(()=>this._manageable_signage_groups.value()||[]),this._root_manageable_signage_groups=HP({params:()=>({user_email:this._active_user()?.email||``,groups_change:this._groups_change(),can_manage_all:this.can_manage_all_groups()}),loader:async({params:e})=>{if(!e.user_email)return[];try{if(e.can_manage_all)return this._queryManageableGroups({parent_id:`root`,include_children_count:!0});let t=await this._currentManageableGroups(e.groups_change),i=new Set(t.map(a=>a.id));return this._sortGroups(t.filter(a=>!a.parent_id||!i.has(a.parent_id)))}catch{return[]}}}),this.root_manageable_signage_groups=ve$2(()=>this._root_manageable_signage_groups.value()||[]),this.managed_group=ve$2(()=>{let e=this.managed_group_id();return this.manageable_signage_groups().find(t=>t.id===e)}),this._current_groups_request=null,this._managed_group_users=HP({params:()=>({group_id:this._managed_group_id_debounced.value(),groups_change:this._groups_change()}),loader:async({params:e})=>{if(!e.group_id)return[];try{let{data:t}=await G9({group_id:e.group_id,limit:1e3});return t.map(d$1).sort((i,a)=>(i.user?.name||i.user_id).localeCompare(a.user?.name||a.user_id))}catch{return[]}}}),this.managed_group_users=ve$2(()=>this._managed_group_users.value()||[]),this._managed_group_zones=HP({params:()=>({group_id:this._managed_group_id_debounced.value(),groups_change:this._groups_change()}),loader:async({params:e})=>{if(!e.group_id)return[];try{let{data:t}=await Y9({group_id:e.group_id,limit:200});return t.map(d$1).sort((i,a)=>(i.zone?.name||i.zone_id).localeCompare(a.zone?.name||a.zone_id))}catch{return[]}}}),this.managed_group_zones=ve$2(()=>this._managed_group_zones.value()||[]),this._api_group_id=ve$2(()=>this.selected_group()?.group.id||``),this._api_group_id_debounced=p4(this._api_group_id,300),this.can_read=ve$2(()=>this._hasGroupPermission(1)),this.can_create=ve$2(()=>this._hasGroupPermission(2)),this.can_update=ve$2(()=>this._hasGroupPermission(4)),this.can_delete=ve$2(()=>this._hasGroupPermission(8)),this.can_update_media_tags=ve$2(()=>this._api_group_id()?this.can_update():this.can_manage_all_groups()),this.can_delete_tagged_media=ve$2(()=>this._api_group_id()?this.can_delete():this.can_manage_all_groups()),this.can_delete_displays=this.is_sys_admin,this.can_approve=ve$2(()=>this._hasGroupPermission(32)),this.can_share=ve$2(()=>this._hasGroupPermission(128)),this.is_admin=ve$2(()=>this._hasGroupPermission(64)),this.can_manage_zones=this.is_admin,this._can_query_group_data=ve$2(()=>{let e=this._api_group_id();return this.can_manage_all_groups()||!!e}),this._media_items=ce$1([]),this._media_loading=ce$1(!1),this._media_has_more=ce$1(!1),this._media_next=null,this._media_token=0,this.media=this._media_items.asReadonly(),this.media_loading=this._media_loading.asReadonly(),this.media_has_more=this._media_has_more.asReadonly(),this._reload_media=Xn$1(()=>{let e=this._org.initialised(),t=this._can_query_group_data(),i=this._api_group_id_debounced.value();this._change(),le(()=>{let a=++this._media_token;this._media_items.set([]),this._media_next=null,this._media_has_more.set(!1),!(!e||!t)&&this._fetchMediaPage(u7(this._orgZoneQueryParams({limit:l.PAGE_SIZE},i)),a)})}),this.filtered_media=ve$2(()=>{let e=this.search_term().trim().toLowerCase(),t=this.media();return e?t.filter(i=>i.name.toLowerCase().includes(e)||(i.tags||[]).some(a=>a.toLowerCase().includes(e))):t}),this._media_tags=HP({params:()=>({initialised:this._org.initialised(),can_query:this._can_query_group_data(),group_id:this._api_group_id_debounced.value(),change:this._change()}),loader:async({params:e})=>{let t={tags:[],counts:{}};if(!e.initialised||!e.can_query)return t;try{return await yt$1(this._orgZoneQueryParams({},e.group_id))}catch{return t}}}),this.media_tags=ve$2(()=>this._media_tags.value()?.tags||[]),this.media_tag_counts=ve$2(()=>this._media_tags.value()?.counts||{}),this.playlist_search_term=ce$1(``),this._playlist_search_debounced=p4(this.playlist_search_term,400),this._playlist_items=ce$1([]),this._playlist_cache=ce$1({}),this._playlist_cache_group=null,this._playlist_cache_change=null,this._playlists_loading=ce$1(!1),this._playlists_has_more=ce$1(!1),this._playlists_next=null,this._playlists_token=0,this.playlists=ve$2(()=>Object.values(this._playlist_cache()).sort((e,t)=>e.name.localeCompare(t.name))),this.playlists_loading=this._playlists_loading.asReadonly(),this.playlists_has_more=this._playlists_has_more.asReadonly(),this._reload_playlists=Xn$1(()=>{let e=this._org.initialised(),t=this._can_query_group_data(),i=this._api_group_id_debounced.value(),a=this._playlist_search_debounced.value().trim(),s=this._change();le(()=>{let n=++this._playlists_token;this._playlist_items.set([]),this._playlists_next=null,this._playlists_has_more.set(!1),(i!==this._playlist_cache_group||s!==this._playlist_cache_change)&&(this._playlist_cache_group=i,this._playlist_cache_change=s,this._playlist_cache.set({})),!(!e||!t)&&this._fetchPlaylistPage(y7(this._orgZoneQueryParams(l$1({limit:l.PAGE_SIZE},this._searchParam(a)),i)),n)})}),this.template_search_term=ce$1(``),this._template_search_debounced=p4(this.template_search_term,400),this._template_items=ce$1([]),this._templates_loading=ce$1(!1),this._templates_has_more=ce$1(!1),this._templates_next=null,this._templates_token=0,this.templates=this._template_items.asReadonly(),this.templates_loading=this._templates_loading.asReadonly(),this.templates_has_more=this._templates_has_more.asReadonly(),this._reload_templates=Xn$1(()=>{let e=this.templates_enabled(),t=this._org.initialised(),i=this._can_query_group_data(),a=this._api_group_id_debounced.value(),s=this._template_search_debounced.value().trim();this._change(),le(()=>{let n=++this._templates_token;this._template_items.set([]),this._templates_next=null,this._templates_has_more.set(!1),!(!e||!t||!i)&&this._fetchTemplatePage(k7(this._groupQueryParams(l$1({limit:l.PAGE_SIZE},this._searchParam(s)),a)),n)})}),this.display_search_term=ce$1(``),this._display_search_debounced=p4(this.display_search_term,400),this._display_items=ce$1([]),this._display_cache=ce$1({}),this._display_cache_group=null,this._displays_loading=ce$1(!1),this._displays_has_more=ce$1(!1),this._displays_next=null,this._displays_token=0,this.displays=ve$2(()=>this._mergeItems(Object.values(this._display_cache()),this._display_overrides())),this.displays_loading=this._displays_loading.asReadonly(),this.displays_has_more=this._displays_has_more.asReadonly(),this._reload_displays=Xn$1(()=>{let e=this._org.initialised(),t=this._can_query_group_data(),i=this._api_group_id_debounced.value(),a=this._display_search_debounced.value().trim();this._change(),le(()=>{let s=++this._displays_token;this._display_items.set([]),this._displays_next=null,this._displays_has_more.set(!1),i!==this._display_cache_group&&(this._display_cache_group=i,this._display_cache.set({})),!(!e||!t)&&this._fetchDisplayPage(Q9(l$1(m$3(l$1({},this._orgZoneQueryParams({},i)),{limit:l.PAGE_SIZE,signage:!0}),this._searchParam(a))),s)})}),this.template_mappings_revision=ce$1(0),this._zone_list=HP({params:()=>({initialised:this._org.initialised(),change:this._change(),group_id:this._api_group_id_debounced.value(),can_query:this._can_query_group_data()}),loader:async({params:e})=>{if(!e.initialised||!e.can_query)return[];try{return((await i7(l$1({limit:250,tags:`signage`},e.group_id?{group_id:e.group_id}:{}))).data||[]).map(d$1)}catch{return[]}}}),this.zones=ve$2(()=>this._mergeItems(this._zone_list.value()||[],this._zone_overrides())),this._all_zone_list=HP({params:()=>({initialised:this._org.initialised(),change:this._change(),group_id:this._api_group_id_debounced.value(),can_query:this._can_query_group_data()}),loader:async({params:e})=>{if(!e.initialised||!e.can_query)return[];try{return((await i7(this._groupQueryParams({limit:500,include_children_count:!0},e.group_id))).data||[]).map(d$1)}catch{return[]}}}),this.all_zones_loading=this._all_zone_list.isLoading,this.all_zones=ve$2(()=>this._mergeItems(this._all_zone_list.value()||[],this._zone_overrides())),this._root_zone_list=HP({params:()=>({initialised:this._org.initialised(),change:this._change(),group_id:this._api_group_id_debounced.value(),can_query:this._can_query_group_data()}),loader:async({params:e})=>{if(!e.initialised||!e.can_query)return[];try{let i=((await i7(l$1({limit:500,include_children_count:!0},e.group_id?{group_id:e.group_id}:{parent_id:`root`}))).data||[]).map(d$1),a=this._org.organisation?.id;return a&&!e.group_id?i.filter(s=>s.id===a):i}catch{return[]}}}),this.root_zones=ve$2(()=>{let e=this._root_zone_list.value()||[],t=new Set(e.map(({id:i})=>i));return this._mergeItems(e,this._zone_overrides()).filter(({id:i})=>t.has(i))}),this._plugins=this._pluginResource(`plugin`),this._widgets=this._pluginResource(`widget`),this.plugins=ve$2(()=>this._plugins.value()||[]),this.widgets=ve$2(()=>this._widgets.value()||[]),this.selected_template=ce$1(null),this.selected_template_requires_approval=ve$2(()=>{let e=this.selected_template();return!!e?.id&&!e.approved}),this.template_approval_request_loading=ce$1(!1),this.selected_template_layout_index=ce$1(null),this.template_layout_draft=Ru(()=>structuredClone(this.selected_template()?.layouts??[])),this.template_layout_dirty=ve$2(()=>JSON.stringify(this.template_layout_draft())!==JSON.stringify(this.selected_template()?.layouts??[])),this.selected_playlist=ce$1(null),this._selected_playlist_debounced=p4(this.selected_playlist,300),this.selected_playlist_item=ce$1(null),this.selected_playlist_item_index=ce$1(null),this.selected_zone=ce$1(null),this.zone_search_term=ce$1(``),this.zone_tree_expanded=ce$1({}),this.zone_tree_children_cache=ce$1({}),this._zone_search_debounced=p4(this.zone_search_term,400),this._zone_search_results=HP({params:()=>({initialised:this._org.initialised(),can_query:this._can_query_group_data(),parent_id:this.selected_zone()?.id||``,search:this._zone_search_debounced.value().trim()}),loader:async({params:e})=>{if(!e.initialised||!e.can_query||!e.parent_id||!e.search)return[];try{return((await i7({q:e.search,parent_id:e.parent_id,limit:2500,include_children_count:!0})).data||[]).map(d$1)}catch{return[]}}}),this.selected_display=ce$1(null),this._playlist_meta_state=ce$1(Lt$1()),this._playlist_meta_loading=ce$1({}),this._playlist_meta_queue={},this._playlist_meta_processing=!1,this.filtered_playlists=ve$2(()=>this._playlist_items()),this.selected_playlist_requires_approval=ve$2(()=>{let e=this.selected_playlist();if(!e?.id)return!1;let t=this.playlist_approval_status();return e.id in t&&!t[e.id]}),this.playlist_approval_status=ve$2(()=>{let e={};for(let[t,i]of Object.entries(this._playlist_meta_state()))typeof i.approved==`boolean`&&(e[t]=i.approved);return e}),this.playlist_approval_requested_status=ve$2(()=>{let e={};for(let[t,i]of Object.entries(this._playlist_meta_state()))typeof i.approval_requested==`boolean`&&(e[t]=i.approval_requested);return e}),this.playlist_approval_request_loading=ce$1(!1),this.playlist_thumbnail_media=ve$2(()=>{let e={};for(let[t,i]of Object.entries(this._playlist_meta_state()))e[t]=(i.media_ids||[]).map(a=>E7(a));return e}),this.filtered_zones=ve$2(()=>{if(!this.selected_zone()?.id||!this.zone_search_term().trim())return this.all_zones();let e=this._zone_overrides();return(this._zone_search_results.value()||[]).map(t=>e[t.id]||t)}),this.filtered_displays=ve$2(()=>{let e=this._display_overrides();return this._display_items().map(t=>e[t.id]||t).sort((t,i)=>(t.display_name||t.name).localeCompare(i.display_name||i.name))}),this._playlist_change=ce$1(Date.now()),this.playlist_media_loading=ce$1(!1),this._playlist_media_items=HP({params:()=>({playlist:this._selected_playlist_debounced.value(),playlist_change:this._playlist_change()}),loader:async({params:e})=>{let t=e.playlist;if(!t?.id)return this.playlist_media_loading.set(!1),null;this.playlist_media_loading.set(!0);try{let i=await T7(t.id);return this._setPlaylistMediaState(t.id,i.items||[],i.approved,i.schedules),i}catch{return null}finally{this.playlist_media_loading.set(!1)}}}),this.playlist_media_items=ve$2(()=>W$2(this._playlist_media_items.value()||{})),this.playlist_item_schedules=ve$2(()=>Yt$2(this._playlist_media_items.value()||{})),this.playlist_item_schedule_list=ve$2(()=>this._playlist_media_items.value()?.schedules||[]),this._ai_modal_ref=null,Xn$1(()=>{if(!this.signage_groups_loaded())return;let e=this.signage_groups(),t=this.selected_group_id();if(!e.length){this.selected_group_id.set(``);return}e.some(i=>i.group.id===t)||this.selected_group_id.set(this.can_manage_all_groups()?``:e[0].group.id)}),Xn$1(()=>{let e=this.manageable_signage_groups(),t=this.managed_group_id();e.length?(!t||!e.some(i=>i.id===t))&&this.managed_group_id.set(e[0].id):this.managed_group_id.set(``)}),Xn$1(()=>xt(this.selected_group_id())),Xn$1(()=>zt$1(this.media_view_mode()))}async addPlaylist(){if(!this._requirePermission(this.can_create(),ps(`SIGNAGE_MANAGER.SVC_NO_CREATE_PLAYLISTS`)))return;let{PlaylistEditModalComponent:e}=await import(`./chunk-BADU-jtm.js`);await m(this._dialog.open(e,{data:{playlist:new zg({}),onAdd:a=>this._addSignagePlaylist(a)},panelClass:`mobile-fullscreen`}))&&this.changed()}queuePlaylistMeta(e){let t=Array.isArray(e)?e:[e];for(let i of t)!i?.id||!this._needsPlaylistMetaRefresh(i)||(this._playlist_meta_queue[i.id]=i);this._processPlaylistMetaQueue()}async editPlaylist(e){if(!this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS`)))return;let{PlaylistEditModalComponent:t}=await import(`./chunk-BADU-jtm.js`),a=await m(this._dialog.open(t,{data:{playlist:e,group_id:this._api_group_id(),onEdit:(s,n)=>D7(s,n)},panelClass:`mobile-fullscreen`}));a&&(this.selected_playlist()?.id===e.id&&this.selected_playlist.set(a),this.changed())}async removePlaylist(e){if(!e?.id||!this._requirePermission(this.can_delete(),ps(`SIGNAGE_MANAGER.SVC_NO_DELETE_PLAYLISTS`)))return;let t=await ge$1({title:ps(`SIGNAGE_MANAGER.SVC_REMOVE_PLAYLIST_TITLE`),content:ps(`SIGNAGE_MANAGER.SVC_DELETE_NAMED`,{name:e.name}),icon:{content:`delete`}},this._dialog);t.reason===`done`&&(await A7(e.id),this.selected_playlist()?.id===e.id&&(this.selected_playlist.set(null),this.selected_playlist_item.set(null),this.selected_playlist_item_index.set(null)),this._removePlaylistMediaState(e.id),this.changed(),dee(ps(`SIGNAGE_MANAGER.SVC_PLAYLIST_REMOVED`)),t.close())}async sharePlaylist(e){e?.id&&await this._shareSignageItems(`playlists`,[e.id])}async approvePlaylist(e){if(!e?.id||!this._requirePermission(this.can_approve(),ps(`SIGNAGE_MANAGER.SVC_NO_APPROVE_PLAYLISTS`)))return;let{PlaylistApproveModalComponent:t}=await import(`./chunk-C3TEf4KX.js`);this._dialog.open(t,{data:{playlist:e},panelClass:`mobile-fullscreen`})}async requestPlaylistApproval(e){if(!e?.id||this.playlist_approval_request_loading())return;if(this.can_approve()){await this.approvePlaylist(e);return}let t=[],i=null;this.playlist_approval_request_loading.set(!0);try{let r=await this._playlistApprovalGroups(e);if(!r.length){hee(ps(`SIGNAGE_MANAGER.SVC_NO_GROUPS_FOR_PLAYLIST`));return}let o=this._api_group_id();i=r.find(d=>d.group.id===o)||r[0],t=await b7(i.group.id)||[]}catch{hee(ps(`SIGNAGE_MANAGER.SVC_NO_APPROVERS`))}finally{this.playlist_approval_request_loading.set(!1)}if(!i)return;let{PlaylistRequestApprovalModalComponent:a}=await import(`./chunk-BcPnPX9N.js`),n=await m(this._dialog.open(a,{data:{playlist:e,approvers:t},panelClass:`mobile-fullscreen`}));n&&(await O7(e.id,i.group.id,n.message||``,n.approver_id||``),this.setPlaylistApprovalStatus(e.id,!1,!0),dee(ps(`SIGNAGE_MANAGER.SVC_APPROVAL_REQUESTED`)))}async removeMediaFromPlaylist(e,t,i){if(!this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS`)))return;let a=await T7(e),s=[...a.items||[]];if(typeof i==`number`&&s[i]===t)s.splice(i,1);else{let n=s.indexOf(t);if(n<0)return;s.splice(n,1)}await N7(e,s),this._setPlaylistMediaState(e,s,!1,a.schedules),dee(ps(`SIGNAGE_MANAGER.SVC_ITEM_REMOVED`)),this._playlist_change.set(Date.now()),this.changed()}async removeMediaItemsFromPlaylist(e,t){let i=t.filter(d=>!!d.id&&d.index>=0);if(!e||!i.length||!this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS`)))return!1;let a=await ge$1({title:ps(`SIGNAGE_MANAGER.SVC_REMOVE_PLAYLIST_ITEMS_TITLE`),content:ps(`SIGNAGE_MANAGER.SVC_REMOVE_SELECTED_PLAYLIST_ITEMS`,{count:i.length},i.length),icon:{content:`delete`}},this._dialog);if(a.reason!==`done`)return!1;let s=await T7(e),n=[...s.items||[]],r=0;for(let d of[...i].sort((E,G)=>G.index-E.index)){let E=n[d.index]===d.id?d.index:n.indexOf(d.id);E<0||(n.splice(E,1),r++)}if(!r)return a.close(),!1;await N7(e,n),this._setPlaylistMediaState(e,n,!1,s.schedules);let o=this.selected_playlist_item_index();return o!==null&&i.some(d=>d.index===o)&&(this.selected_playlist_item.set(null),this.selected_playlist_item_index.set(null)),dee(ps(`SIGNAGE_MANAGER.SVC_ITEMS_REMOVED`,{count:r},r)),this._playlist_change.set(Date.now()),this.changed(),a.close(),!0}async reorderPlaylistMedia(e,t){this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS`))&&(await N7(e,t),this._setPlaylistMediaState(e,t,!1),this._playlist_change.set(Date.now()))}async editPlaylistItemSchedule(e){return this.editPlaylistItemSchedules([e])}async editPlaylistItemSchedules(e){let t=this.selected_playlist(),i=e.filter(r=>!!r?.item_id&&!!(r.id||r.item_id));if(!t?.id||!i.length||!this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS`)))return!1;let{PlaylistItemScheduleModalComponent:a}=await import(`./chunk-qKsKcmok.js`),n=await m(this._dialog.open(a,{data:{item:i[0],save:(r,o)=>Promise.all(i.map(d=>w7(t.id,d.id||d.item_id,{item_id:d.item_id,schedules:o})))},panelClass:`mobile-fullscreen`}));return n&&(this._playlist_change.set(Date.now()),this.changed()),!!n}refreshPlaylist(e){e&&(this._removePlaylistMediaState(e),this.selected_playlist()?.id===e&&this._playlist_change.set(Date.now()),this.changed())}async _scheduleMediaForDistributionPlaylist(e,t){let i=this.media().find(r=>r.id===t),{PlaylistItemScheduleModalComponent:a}=await import(`./chunk-qKsKcmok.js`);return await m(this._dialog.open(a,{data:{item:new qg({item_id:t,media:i}),save:async(r,o)=>{let d=await M7(e,{item_id:r,schedules:o});return this._setPlaylistMediaState(e,d.items||[],!1,d.schedules),d}},panelClass:`mobile-fullscreen`}))?(this._playlist_change.set(Date.now()),!0):!1}async addTemplate(){if(!this._requirePermission(this.can_create(),ps(`SIGNAGE_MANAGER.SVC_NO_CREATE_TEMPLATES`)))return;let{TemplateEditModalComponent:e}=await import(`./chunk-D-UFreAV.js`);await m(this._dialog.open(e,{data:{template:new Qg({}),onAdd:a=>this._addSignageTemplate(a)},panelClass:`mobile-fullscreen`}))&&this.changed()}async editTemplate(e){if(!this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES`)))return;let{TemplateEditModalComponent:t}=await import(`./chunk-D-UFreAV.js`),a=await m(this._dialog.open(t,{data:{template:e,group_id:this._api_group_id(),onEdit:(s,n)=>V7(s,n)},panelClass:`mobile-fullscreen`}));a&&(this.updateCachedTemplate(a),this.changed())}async editTemplateMapping(e,t=null){if(!this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS`)))return!1;let i=t?[]:await this.listApprovedTemplates(),{TemplateMappingModalComponent:a}=await import(`./chunk-DCeYCkxm.js`),n=!!await m(this._dialog.open(a,{data:{mapping:t,templates:i,save:(r,o)=>t?W7(t.id,{schedule:o}):Y7(m$3(l$1({},e),{template_id:r,schedule:o}))},panelClass:`mobile-fullscreen`}));return n&&this.template_mappings_revision.update(r=>r+1),n}async removeTemplateMapping(e){if(!e?.id||!this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS`)))return!1;let t=await ge$1({title:ps(`SIGNAGE_MANAGER.SVC_REMOVE_TEMPLATE_MAPPING_TITLE`),content:ps(`SIGNAGE_MANAGER.SVC_REMOVE_TEMPLATE_MAPPING_CONTENT`,{name:e.template_details.name}),icon:{content:`delete`}},this._dialog);if(t.reason!==`done`)return!1;try{return await K7(e.id),this.template_mappings_revision.update(i=>i+1),t.close(),dee(ps(`SIGNAGE_MANAGER.SVC_TEMPLATE_MAPPING_REMOVED`)),!0}catch(i){throw t.close(),fee(ps(`SIGNAGE_MANAGER.SVC_TEMPLATE_MAPPING_REMOVE_ERROR`)),i}}async approveTemplate(e){if(!e?.id||!this._requirePermission(this.can_approve(),ps(`SIGNAGE_MANAGER.SVC_NO_APPROVE_TEMPLATES`)))return;let{TemplateApproveModalComponent:t}=await import(`./chunk-CiFvLens.js`);this._dialog.open(t,{data:{template:e},panelClass:`mobile-fullscreen`})}async requestTemplateApproval(e){if(!e?.id||this.template_approval_request_loading())return;if(this.can_approve()){await this.approveTemplate(e);return}let t=[],i=null;this.template_approval_request_loading.set(!0);try{let r=await this._templateApprovalGroups(e);if(!r.length){hee(ps(`SIGNAGE_MANAGER.SVC_NO_GROUPS_FOR_TEMPLATE`));return}let o=this._api_group_id();i=r.find(d=>d.group.id===o)||r[0],t=await j7(i.group.id)||[]}catch{hee(ps(`SIGNAGE_MANAGER.SVC_NO_TEMPLATE_APPROVERS`))}finally{this.template_approval_request_loading.set(!1)}if(!i)return;let{TemplateRequestApprovalModalComponent:a}=await import(`./chunk-q9e9F3hN.js`),n=await m(this._dialog.open(a,{data:{template:e,approvers:t},panelClass:`mobile-fullscreen`}));n&&(await $7(e.id,i.group.id,n.message||``,n.approver_id||``),this.setTemplateApprovalStatus(e.id,!1,!0),dee(ps(`SIGNAGE_MANAGER.SVC_TEMPLATE_APPROVAL_REQUESTED`)))}async removeTemplate(e){if(!e?.id||!this._requirePermission(this.can_delete(),ps(`SIGNAGE_MANAGER.SVC_NO_DELETE_TEMPLATES`)))return;let t=await ge$1({title:ps(`SIGNAGE_MANAGER.SVC_REMOVE_TEMPLATE_TITLE`),content:ps(`SIGNAGE_MANAGER.SVC_DELETE_NAMED`,{name:e.name}),icon:{content:`delete`}},this._dialog);if(t.reason!==`done`)return;let i=this._api_group_id();await(i?ss(`${ge$2()}/signage/templates/${encodeURIComponent(e.id)}?group_id=${encodeURIComponent(i)}`):U7(e.id)),this.selected_template()?.id===e.id&&(this.selected_template.set(null),this.selected_template_layout_index.set(null)),this.changed(),dee(ps(`SIGNAGE_MANAGER.SVC_TEMPLATE_REMOVED`)),t.close()}async shareTemplate(e){e?.id&&await this._shareSignageItems(`templates`,[e.id])}async saveTemplateLayouts(){let e=this.selected_template();if(!(!e?.id||!this.template_layout_dirty())&&this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES`)))try{let t=this.template_layout_draft().map(ft$1),a=d$1(new Qg(m$3(l$1({},await V7(e.id,{layouts:t})),{layouts:t})));this.updateCachedTemplate(a),dee(ps(`SIGNAGE_MANAGER.SVC_TEMPLATE_LAYOUTS_SAVED`))}catch{fee(ps(`SIGNAGE_MANAGER.SVC_TEMPLATE_SAVE_ERROR`))}}discardTemplateLayoutDraft(){this.template_layout_draft.set(structuredClone(this.selected_template()?.layouts??[]))}setTemplateApprovalStatus(e,t,i=!1){let a=this.templates().find(s=>s.id===e)||this.selected_template();!a||a.id!==e||this.updateCachedTemplate(new Qg(m$3(l$1({},a),{approved:t,approval_requested:i})))}updateCachedTemplate(e){this._template_items.update(i=>i.map(a=>Mt(a,e)?e:a));let t=this.selected_template();t&&Mt(t,e)&&this.selected_template.set(e)}_addSignageTemplate(e){let t=this._api_group_id();return F7(e,t?{group_id:t}:void 0)}changed(){this._change.set(Date.now())}canManageSignageGroup(e=``){return this.can_manage_all_groups()?!0:!!(this.signage_groups().find(i=>i.group.id===e)?.permissions&64)}async saveSignageGroup(e,t){let i=e.id||t.parent_id||``;if(!this.canManageSignageGroup(i))return hee(ps(`SIGNAGE_MANAGER.SVC_NO_MANAGE_GROUP`)),null;let a=m$3(l$1(l$1({},e),t),{subsystems:Array.from(new Set([...e.subsystems||[],`signage`]))}),s=await(e.id?U9(e.id,a):V9(a)).catch(n=>{throw fee(ps(`SIGNAGE_MANAGER.SVC_ERR_SAVE_GROUP`)),n});return this._groups_change.set(Date.now()),dee(ps(`SIGNAGE_MANAGER.SVC_GROUP_SAVED`)),s}async removeSignageGroup(e){if(!e?.id)return;if(!this.canManageSignageGroup(e.id)){hee(ps(`SIGNAGE_MANAGER.SVC_NO_MANAGE_GROUP`));return}let t=await ge$1({title:ps(`SIGNAGE_MANAGER.SVC_REMOVE_GROUP_TITLE`),content:ps(`SIGNAGE_MANAGER.SVC_DELETE_NAMED`,{name:e.name}),icon:{content:`delete`}},this._dialog);t.reason===`done`&&(await B9(e.id).catch(i=>{throw t.close(),fee(ps(`SIGNAGE_MANAGER.SVC_ERR_REMOVE_GROUP`)),i}),t.close(),this.selected_group_id()===e.id&&this.selected_group_id.set(``),this._groups_change.set(Date.now()),dee(ps(`SIGNAGE_MANAGER.SVC_GROUP_REMOVED`)))}async searchGroupUsers(e=``){let t=this.managed_group(),{data:i}=await n7(l$1({q:e,limit:20},t?.authority_id?{authority_id:t.authority_id}:{}));return i}async addManagedGroupUser(e){let t=this.managed_group_id();!e?.id||!this.canManageSignageGroup(t)||(await H9({group_id:t,user_id:e.id,permissions:0}).catch(i=>{throw fee(ps(`SIGNAGE_MANAGER.SVC_ERR_ADD_USER`)),i}),this._groups_change.set(Date.now()),dee(ps(`SIGNAGE_MANAGER.SVC_USER_ADDED`)))}async updateManagedGroupUser(e,t){this.canManageSignageGroup(e.group_id)&&(await j9(e.user_id,e.group_id,{permissions:t}).catch(i=>{throw fee(ps(`SIGNAGE_MANAGER.SVC_ERR_UPDATE_USER`)),i}),this._groups_change.set(Date.now()),dee(ps(`SIGNAGE_MANAGER.SVC_USER_UPDATED`)))}async removeManagedGroupUser(e){if(!this.canManageSignageGroup(e.group_id))return;let t=await ge$1({title:ps(`SIGNAGE_MANAGER.SVC_REMOVE_USER_TITLE`),content:ps(`SIGNAGE_MANAGER.SVC_REMOVE_NAMED_FROM_GROUP`,{name:e.user?.name||e.user_id}),icon:{content:`delete`}},this._dialog);t.reason===`done`&&(await $9(e.user_id,e.group_id).catch(i=>{throw t.close(),fee(ps(`SIGNAGE_MANAGER.SVC_ERR_REMOVE_USER`)),i}),t.close(),this._groups_change.set(Date.now()),dee(ps(`SIGNAGE_MANAGER.SVC_USER_REMOVED`)))}async addManagedGroupZone(e){let t=this.managed_group_id();!e?.id||!this.canManageSignageGroup(t)||(await W9({group_id:t,zone_id:e.id,permissions:0}).catch(i=>{throw fee(ps(`SIGNAGE_MANAGER.SVC_ERR_ADD_ZONE`)),i}),this._groups_change.set(Date.now()),dee(ps(`SIGNAGE_MANAGER.SVC_ZONE_ADDED`)))}async updateManagedGroupZone(e,t,i){this.canManageSignageGroup(e.group_id)&&(await K9(e.group_id,e.zone_id,{permissions:t,deny:i}).catch(a=>{throw fee(ps(`SIGNAGE_MANAGER.SVC_ERR_UPDATE_ZONE`)),a}),this._groups_change.set(Date.now()),dee(ps(`SIGNAGE_MANAGER.SVC_ZONE_UPDATED`)))}async removeManagedGroupZone(e){if(!this.canManageSignageGroup(e.group_id))return;let t=await ge$1({title:ps(`SIGNAGE_MANAGER.SVC_REMOVE_ZONE_TITLE`),content:ps(`SIGNAGE_MANAGER.SVC_REMOVE_NAMED_FROM_GROUP`,{name:e.zone?.name||e.zone_id}),icon:{content:`delete`}},this._dialog);t.reason===`done`&&(await q9(e.group_id,e.zone_id).catch(i=>{throw t.close(),fee(ps(`SIGNAGE_MANAGER.SVC_ERR_REMOVE_ZONE`)),i}),t.close(),this._groups_change.set(Date.now()),dee(ps(`SIGNAGE_MANAGER.SVC_ZONE_REMOVED`)))}setSelectedGroup(e){if(this.is_sys_admin()&&!e){this.selected_group_id.set(``),this.selected_playlist.set(null),this.selected_playlist_item.set(null),this.selected_playlist_item_index.set(null),this.selected_zone.set(null),this.selected_display.set(null),this.changed();return}this.signage_groups().some(t=>t.group.id===e)&&(this.selected_group_id.set(e),this.selected_playlist.set(null),this.selected_playlist_item.set(null),this.selected_playlist_item_index.set(null),this.selected_zone.set(null),this.selected_display.set(null),this.changed())}_hasGroupPermission(e){if(this.is_sys_admin())return!0;let t=this.selected_group()?.permissions||0;return!!(t&64||t&e)}_requirePermission(e,t){return e?!0:(hee(t),!1)}_groupQueryParams(e,t=this._api_group_id()){return l$1(l$1({},e),t?{group_id:t}:{})}_orgZoneQueryParams(e,t=this._api_group_id()){let i=this._org.organisation?.id,a={};return t?a={group_id:t}:i&&(a={zone_id:i}),l$1(l$1({},e),a)}async _addSignageMedia(e){let t=this._api_group_id(),i=await bt$1(()=>t?Yr(`${ge$2()}/signage/media?group_id=${encodeURIComponent(t)}`,e).then(a=>new Td(a)):g7(e));return this._addMediaToList(i),i}_addMediaToList(e){if(!e?.id)return;let t=d$1(e);this._media_items.update(i=>[t,...i.filter(a=>a.id!==t.id)].sort((a,s)=>s.created_at-a.created_at)),this._media_tags.reload()}_addSignagePlaylist(e){let t=this._api_group_id();return t?Yr(`${ge$2()}/signage/playlists?group_id=${encodeURIComponent(t)}`,e).then(i=>new zg(i)):I7(e)}async _shareSignageItems(e,t){if(!this._requirePermission(this.can_share(),ps(`SIGNAGE_MANAGER.SVC_NO_SHARE_ITEMS`)))return!1;let i=this.selected_group()?.group.id||``,a=this.signage_groups().filter(E=>E.group.id!==i);if(!a.length)return hee(ps(`SIGNAGE_MANAGER.SVC_NO_GROUPS_TO_SHARE`)),!1;let s=Rt$1[e],{GroupSelectModalComponent:n}=await import(`./chunk-80D0-k9q.js`),o=await m(this._dialog.open(n,{data:{title:ps(s.title),groups:a},panelClass:`mobile-fullscreen`}));if(!o)return!1;let d={items:t.join(`,`),to:o};return await s.request(d),Me$1(),dee(ps(s.success)),!0}async _playlistApprovalGroups(e){let t=this.signage_groups(),i=this._api_group_id(),a=[];for(let s of t)if(s.group.id){if(s.group.id===i){a.push(s);continue}try{((await y7({group_id:s.group.id,limit:500})).data||[]).some(r=>r.id===e.id)&&a.push(s)}catch{}}return a}async _templateApprovalGroups(e){let t=this.signage_groups(),i=this._api_group_id(),a=[];for(let s of t)if(s.group.id){if(s.group.id===i){a.push(s);continue}try{((await k7({group_id:s.group.id,limit:500})).data||[]).some(r=>r.id===e.id)&&a.push(s)}catch{}}return a}_cacheDisplay(e){e?.id&&this._display_overrides.update(t=>m$3(l$1({},t),{[e.id]:e}))}_addDisplayToList(e){if(!e?.id)return;let t=d$1(e);this._display_items.update(i=>[t,...i.filter(a=>a.id!==t.id)]),this._display_cache.update(i=>m$3(l$1({},i),{[t.id]:t})),this._cacheDisplay(t)}_removeDisplayFromList(e){this._display_items.update(t=>t.filter(i=>i.id!==e)),this._display_cache.update(t=>{let i=l$1({},t);return delete i[e],i}),this._display_overrides.update(t=>{let i=l$1({},t);return delete i[e],i})}_cacheZone(e){e?.id&&this._zone_overrides.update(t=>m$3(l$1({},t),{[e.id]:e}))}_mergeItems(e,t){let i=new Map((e||[]).map(a=>[a.id,a]));for(let a of Object.values(t))a?.id&&i.set(a.id,a);return[...i.values()].sort((a,s)=>(a.display_name||a.name).localeCompare(s.display_name||s.name))}async updatePlaylistMedia(e,t){this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS`))&&(await N7(e,t),this._setPlaylistMediaState(e,t,!1),dee(ps(`SIGNAGE_MANAGER.SVC_PLAYLIST_UPDATED`)),this._playlist_change.set(Date.now()))}async addMediaToPlaylist(e,t){if(!this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS`)))return;let i=await T7(e);if(i.items?.includes(t)){let n=await ge$1({title:ps(`SIGNAGE_MANAGER.SVC_ADD_DUPLICATE_TITLE`),content:ps(`SIGNAGE_MANAGER.SVC_ADD_DUPLICATE_CONTENT`),icon:{content:`playlist_add`}},this._dialog);if(n.reason!==`done`)return;n.close()}let a=this.playlists().find(n=>n.id===e),s=[...i.items||[],t];if(a?.distribution){await this._scheduleMediaForDistributionPlaylist(e,t);return}await this.updatePlaylistMedia(e,s)}async addMediaItemsToPlaylist(e,t){if(!this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_PLAYLISTS`)))return!1;let i=[...new Set(t)].filter(Boolean);if(!e||!i.length)return!1;let a=this.playlists().find(o=>o.id===e),n=(await T7(e)).items||[],r=i.filter(o=>!n.includes(o));if(!r.length)return hee(ps(`SIGNAGE_MANAGER.SVC_MEDIA_ALREADY_IN`)),!1;if(a?.distribution){for(let o of r)if(!await this._scheduleMediaForDistributionPlaylist(e,o))return!1;return!0}return await this.updatePlaylistMedia(e,[...n,...r]),!0}_needsPlaylistMetaRefresh(e){let t=this._playlist_meta_state()[e.id],i=this._playlist_meta_loading()[e.id],a=!!this._playlist_meta_queue[e.id],s=e.updated_at||0;return!i&&!a&&(t?.updated_at!==s||!Array.isArray(t?.item_ids)||typeof t?.approved!=`boolean`||typeof t?.approval_requested!=`boolean`)}async _processPlaylistMetaQueue(){if(!this._playlist_meta_processing){this._playlist_meta_processing=!0;try{for(;Object.keys(this._playlist_meta_queue).length;){let e=Object.values(this._playlist_meta_queue)[0];delete this._playlist_meta_queue[e.id];let t=e.updated_at||0;this._playlist_meta_loading.update(i=>m$3(l$1({},i),{[e.id]:!0}));try{let i=await T7(e.id),a=Nt$1(i);this._setPlaylistMeta(e.id,{media_ids:a.slice(0,3),item_ids:i.items||a,updated_at:t,approved:i.approved,approval_requested:i.approval_requested})}catch{this._setPlaylistMeta(e.id,{media_ids:[],updated_at:t})}finally{this._playlist_meta_loading.update(i=>m$3(l$1({},i),{[e.id]:!1}))}}}finally{this._playlist_meta_processing=!1}}}_setPlaylistMeta(e,t){this._updatePlaylistMetaState(i=>m$3(l$1({},i),{[e]:t}))}setPlaylistApprovalStatus(e,t,i=!1){let a=this.playlists().find(n=>n.id===e)||this.selected_playlist(),s=this._playlist_meta_state()[e];this._setPlaylistMeta(e,{media_ids:s?.media_ids||[],item_ids:s?.item_ids,updated_at:s?.updated_at||a?.updated_at||Date.now(),approved:t,approval_requested:i})}_setPlaylistMediaState(e,t,i,a){let s=Yt$2({schedules:a||this._playlist_media_items.value()?.schedules}),n=t.map(d=>s.get(d)?.media?.id||d),r=this.playlists().find(d=>d.id===e)||this.selected_playlist(),o=this._playlist_meta_state()[e];this._setPlaylistMeta(e,{media_ids:n.slice(0,3),item_ids:t,updated_at:o?.updated_at||r?.updated_at||Date.now(),approved:i??o?.approved,approval_requested:i===!1?!1:o?.approval_requested??!1})}_removePlaylistMediaState(e){this._updatePlaylistMetaState(t=>{let i=l$1({},t);return delete i[e],i})}async _removeMediaFromCachedPlaylists(e){let t=new Set(e.filter(Boolean));if(!t.size)return;let i=this._playlist_meta_state(),a=Object.entries(i).filter(([,n])=>(n.item_ids||n.media_ids||[]).some(r=>t.has(r))).map(([n])=>n);if(!a.length)return;for(let n of a){let o=i[n]?.item_ids||(await T7(n)).items||[],d=o.filter(E=>!t.has(E));d.length!==o.length&&(await N7(n,d),this._setPlaylistMediaState(n,d,!1))}let s=this.selected_playlist_item();s?.id&&t.has(s.id)&&(this.selected_playlist_item.set(null),this.selected_playlist_item_index.set(null)),this._playlist_change.set(Date.now())}_updatePlaylistMetaState(e){let t={};this._playlist_meta_state.update(i=>(t=e(i),t)),Vt$1(t)}async previewMedia(e){let t=e.media_type===`plugin`&&e.plugin_id?await this._resolvePlugin(e.plugin_id):void 0,{MediaPreviewModalComponent:i}=await import(`./chunk-U205bvmP2.js`);this._dialog.open(i,{data:{media:e,plugin:t,group_id:this._api_group_id()},panelClass:`fullscreen-dialog`})}async previewFileFromInput(e,t=``){let i=e.target;if(i?.files?.length)try{await this.previewFiles(i.files,t)}finally{i.value=``}}async previewFiles(e,t=``){if(!this._requirePermission(this.can_create(),ps(`SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA`))||!e)return;let i=Array.from(e);if(i.length>1)return this.bulkUploadMedia(i,t);for(let a of i){let s=await this._prepareUploadMedia(a);s&&await this.editMedia(new Td({}),s.file,t,s.metadata)}}async bulkUploadMedia(e,t=``){if(!this._requirePermission(this.can_create(),ps(`SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA`)))return;let i=[];for(let r of e){let o=await this._prepareUploadMedia(r);o&&i.push(o)}if(!i.length)return;let a={items:i,onUpload:(r,o,d)=>this._addMedia(r.file,new Td({}),t,r.metadata,void 0,{permissions:o,on_progress:d})},{BulkMediaUploadModalComponent:s}=await import(`./chunk-CEIjhX3w2.js`);await m(this._dialog.open(s,{data:a,panelClass:`mobile-fullscreen`})),this.changed()}async addMediaFromLink(e){if(!this._requirePermission(this.can_create(),ps(`SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA`)))return;let i=new Td({name:new URL(e).hostname,media_uri:e,media_type:`webpage`,orientation:`landscape`});await this.editMedia(i)}async addMediaFromUpload(e,t={},i=``){if(!this._requirePermission(this.can_create(),ps(`SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA`)))throw new Error(ps(`SIGNAGE_MANAGER.SVC_PERMISSION_DENIED`));let a=`${location.origin}/api/engine/v2/uploads/${encodeURIComponent(e)}/url`,s=``;try{let o=await D$2(a,`/api/engine/v2/uploads`),E=await(await fetch(o)).blob(),G=new File([E],`${t.name||`image`}.${E.type.includes(`png`)?`png`:`jpg`}`,{type:E.type||`image/jpeg`}),S=await this.generateThumbnailImage(G);S&&(s=await this._uploadThumbnailImage(S,t.name||`image`))}catch{hee(ps(`SIGNAGE_MANAGER.SVC_THUMBNAIL_FAILED`))}let n=l$1({},new Td(m$3(l$1({orientation:`landscape`},t),{media_id:e,media_uri:a,media_type:`image`,thumbnail_id:s})));for(let o in n)n[o]||delete n[o];let r=await this._addSignageMedia(n);return i&&r?.id&&await this.addMediaToPlaylist(i,r.id),r}async discardCreatedMedia(e){await _7(e),this._media_items.update(t=>t.filter(i=>i.id!==e)),this._media_tags.reload()}async generateMediaWithAI(e={}){if(!this._requirePermission(this.can_create(),ps(`SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA`))||this._ai_modal_ref)return;let{AiImageModalComponent:t}=await import(`./chunk-gQ1aljIn2.js`),i=this._dialog.open(t,{data:e,panelClass:`fullscreen-dialog`,autoFocus:!1});this._ai_modal_ref=i;try{let a=await m(i);return this.changed(),a}finally{this._ai_modal_ref=null}}async editMediaWithAI(e){if(e?.media_id)return this.generateMediaWithAI({source_upload_id:e.media_id,source_item_id:e.id,source_name:e.name,aspect_ratio:e.orientation===`portrait`?`9:16`:`16:9`})}async addMediaFromPlugin(e){if(e.plugin_type!==`plugin`||!this._requirePermission(this.can_create(),ps(`SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA`)))return;let t=new Td({name:``,media_uri:e.uri,media_type:`plugin`,plugin_id:e.id,orientation:`landscape`});await this.editMedia(t,void 0,``,void 0,e)}async editMedia(e=new Td({}),t,i=``,a,s){if(e.id){if(!this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA`)))return}else if(!this._requirePermission(this.can_create(),ps(`SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA`)))return;let n=t?a||await this._getMediaMetadata(t):{is_landscape:e.orientation===`landscape`,duration:0,width:0,height:0},r=k$1(n);r.valid||hee(r.error);let o=e.plugin_id?()=>this._resolvePlugin(e.plugin_id):void 0,d=``;t&&(d=await this._generateThumbnail(t,1024,720));let{MediaEditModalComponent:E}=await import(`./chunk-BuJYHDxi.js`);await m(this._dialog.open(E,{data:{media:e,file:t,file_metadata:n,file_thumbnail:d,playlist_id:i,group_id:this._api_group_id(),plugin:s,tag_options:this.media_tags(),loadPlugin:o,generateThumbnail:S=>this.generateThumbnailImage(S),onAdd:(S,M,w,le)=>this._addMedia(S,M,i,w,le||d),onEdit:async(S,M)=>{let w=await this._editMedia(S,M);Object.assign(e,w)},preview:S=>this.previewMedia(S)}}))}async _editMedia(e,t){if(!this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA`)))return;let n=t,{thumbnail_image:i}=n,a=n$1(n,[`thumbnail_image`]);if(i){let r=await this._uploadThumbnailImage(i,a.name);r&&(a.thumbnail_id=r)}let s=d$1(await m7(e,a));return this._media_items.update(r=>r.map(o=>o.id===e?s:o)),this._media_tags.reload(),s}async _resolvePlugin(e){if(e)try{return((await P7({limit:500,plugin_type:`plugin`}).catch(()=>({data:[]}))).data||[]).find(a=>a.id===e)}catch{return}}async _addMedia(e,t,i=``,a,s,n){let r;if(e)r=await this.addMedia(e,t,a,n);else{let o=``;s&&(o=await this._uploadThumbnailImage(s,t.name));let d=l$1({},new Td(m$3(l$1({},t),{thumbnail_id:o||void 0})));for(let E in d)d[E]||delete d[E];r=await this._addSignageMedia(d)}if(i&&r?.id){let d=[...(await T7(i)).items,r.id];await this.updatePlaylistMedia(i,d),this.changed()}return r}async addMedia(e,t=new Td({}),i,a){if(!this._requirePermission(this.can_create(),ps(`SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA`)))throw new Error(ps(`SIGNAGE_MANAGER.SVC_PERMISSION_DENIED`));let s=i&&await this._prepareUploadMedia(e,i)||await this._prepareUploadMedia(e);if(!s)throw new Error(ps(`SIGNAGE_MANAGER.SVC_SELECT_MEDIA_FILE`));let{file:n,media_type:r,metadata:o}=s,{is_landscape:d}=o,E=await this._generateThumbnail(n,1280,720).catch(()=>null),G;a?G=await this._uploads.uploadFileToCompletion(n,!1,a.permissions,a.on_progress):G=await this._uploads.uploadFileWithPermissionsToCompletion(n);let S=`${location.origin}/api/engine/v2/uploads/${encodeURIComponent(G)}/url`,M=``;if(E){let U=n.name.split(`.`);U.pop(),M=await this._uploadThumbnailImage(E,U.join(`.`))}let w=l$1({},new Td(m$3(l$1({},t),{name:t.name||n.name,media_id:G,media_uri:S,media_type:r,orientation:d?`landscape`:`portrait`,thumbnail_id:M})));for(let U in w)w[U]||delete w[U];return await this._addSignageMedia(w)}async _prepareUploadMedia(e,t){if(!e)return fee(ps(`SIGNAGE_MANAGER.SVC_SELECT_MEDIA_FILE`)),null;let i=await this._normalizeImageUpload(e),a=await j$2(i,this._mediaValidationOptions());return a.valid?{file:i,media_type:a.media_type,metadata:t||await this._getMediaMetadata(i)}:(fee(a.error),null)}async _normalizeImageUpload(e){if(b(e)||P$1(e)||!F$2(e))return e;try{let t=await this._convertImageToWebp(e);return pee(ps(`SIGNAGE_MANAGER.SVC_CONVERTED_MEDIA`,{from:e.name,to:t.name})),t}catch{return e}}async removeMedia(e){if(!e?.id||!this._requirePermission(this.can_delete(),ps(`SIGNAGE_MANAGER.SVC_NO_DELETE_MEDIA`)))return;let t=await ge$1({title:ps(`SIGNAGE_MANAGER.SVC_REMOVE_MEDIA_TITLE`),content:ps(`SIGNAGE_MANAGER.SVC_DELETE_NAMED_PLAIN`,{name:e.name}),icon:{content:`delete`}},this._dialog);t.reason===`done`&&(await this._removeMediaFromCachedPlaylists([e.id]),await _7(e.id,this._groupQueryParams({})),this.changed(),dee(ps(`SIGNAGE_MANAGER.SVC_MEDIA_REMOVED`)),t.close())}async removeMediaItems(e){let t=e.filter(a=>!!a?.id);if(!t.length||!this._requirePermission(this.can_delete(),ps(`SIGNAGE_MANAGER.SVC_NO_DELETE_MEDIA`)))return!1;let i=await ge$1({title:ps(`SIGNAGE_MANAGER.SVC_REMOVE_MEDIA_TITLE`),content:ps(`SIGNAGE_MANAGER.SVC_DELETE_SELECTED_MEDIA`,{count:t.length},t.length),icon:{content:`delete`}},this._dialog);return i.reason!==`done`?!1:(await this._removeMediaFromCachedPlaylists(t.map(a=>a.id)),await Promise.all(t.map(a=>_7(a.id,this._groupQueryParams({})))),this.changed(),dee(ps(`SIGNAGE_MANAGER.SVC_MEDIA_REMOVED`)),i.close(),!0)}async shareMedia(e){e?.id&&await this._shareSignageItems(`media`,[e.id])}async shareMediaItems(e){let t=e.map(i=>i.id).filter(Boolean);return t.length?this._shareSignageItems(`media`,t):!1}async addMediaTags(e){let t=e.filter(n=>!!n?.id);if(!t.length||!this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA`)))return!1;let{MediaTagsModalComponent:i}=await import(`./chunk-CFEXxEKn.js`),s=await m(this._dialog.open(i,{data:{tags:this.media_tags()},width:`min(28rem, calc(100vw - 2rem))`}));if(!s?.length)return!1;try{await Promise.all(t.map(n=>m7(n.id,{tags:[...new Set([...n.tags||[],...s])]})))}catch(n){return fee(ps(`SIGNAGE_MANAGER.MEDIA_SAVE_ERROR`,{error:n instanceof Error?n.message:`${n}`})),!1}return this.changed(),dee(ps(`SIGNAGE_MANAGER.MEDIA_SAVE_SUCCESS`)),!0}async renameMediaTag(e,t){if(!e||!this._requirePermission(this.can_update_media_tags(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA`)))return!1;let{MediaTagModalComponent:i}=await import(`./chunk-BmML_CyW2.js`),s=await m(this._dialog.open(i,{data:{action:`rename`,tag:e,count:t,can_delete_media:!1},width:`min(28rem, calc(100vw - 2rem))`}));if(s?.action!==`rename`)return!1;try{let n=this._api_group_id();await f7(l$1({current_tag:e,new_tag:s.new_tag},n?{group_id:n}:{}))}catch(n){return fee(ps(`SIGNAGE_MANAGER.SVC_MEDIA_TAG_ERROR`,{error:n instanceof Error?n.message:`${n}`})),!1}return this.changed(),dee(ps(`SIGNAGE_MANAGER.SVC_MEDIA_TAG_RENAMED`)),!0}async removeMediaTag(e,t){if(!e||!this._requirePermission(this.can_update_media_tags(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA`)))return!1;let{MediaTagModalComponent:i}=await import(`./chunk-BmML_CyW2.js`),s=await m(this._dialog.open(i,{data:{action:`remove`,tag:e,count:t,can_delete_media:this.can_delete_tagged_media()},width:`min(28rem, calc(100vw - 2rem))`}));if(s?.action!==`remove`||s.remove_media&&!this._requirePermission(this.can_delete_tagged_media(),ps(`SIGNAGE_MANAGER.SVC_NO_DELETE_MEDIA`)))return!1;try{let n=this._api_group_id();await h7(l$1(l$1({tag:e},s.remove_media?{remove_media:!0}:{}),n?{group_id:n}:{}))}catch(n){return fee(ps(`SIGNAGE_MANAGER.SVC_MEDIA_TAG_ERROR`,{error:n instanceof Error?n.message:`${n}`})),!1}return this.changed(),dee(ps(`SIGNAGE_MANAGER.SVC_MEDIA_TAG_REMOVED`)),!0}async openPlaylistSelectModal(e){let{PlaylistSelectModalComponent:t}=await import(`./chunk-Bp9kMGzF.js`),a=await m(this._dialog.open(t,{data:{media_id:e},panelClass:`mobile-fullscreen`}));a&&await this.addMediaToPlaylist(a,e)}async openBulkPlaylistSelectModal(e){let{PlaylistSelectModalComponent:t}=await import(`./chunk-Bp9kMGzF.js`),a=await m(this._dialog.open(t,{data:{media_ids:e},panelClass:`mobile-fullscreen`}));return a?this.addMediaItemsToPlaylist(a,e):!1}async addPlaylistToZone(e){if(!this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS`)))return;let{PlaylistSelectModalComponent:t}=await import(`./chunk-Bp9kMGzF.js`),a=await m(this._dialog.open(t,{data:{zone_id:e.id},panelClass:`mobile-fullscreen`}));if(!a)return;if(e.playlists?.includes(a)){fee(ps(`SIGNAGE_MANAGER.SVC_PLAYLIST_IN_ZONE`));return}let s=[...e.playlists||[],a],n=await a7(e.id,{playlists:s,version:e.version},`patch`);this._cacheZone(n),this.selected_zone.set(n),this.changed(),dee(ps(`SIGNAGE_MANAGER.SVC_PLAYLIST_ADDED_ZONE`))}async removePlaylistFromZone(e,t){if(!this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS`)))return;let i=(e.playlists||[]).filter(s=>s!==t),a=await a7(e.id,{playlists:i,version:e.version},`patch`);this._cacheZone(a),this.selected_zone.set(a),this.changed(),dee(ps(`SIGNAGE_MANAGER.SVC_PLAYLIST_REMOVED_ZONE`))}async addZone(){if(!this._requirePermission(this.can_manage_zones(),ps(`SIGNAGE_MANAGER.SVC_NO_MANAGE_ZONES`)))return null;let{ZoneEditModalComponent:e}=await import(`./chunk-Dwfo31PZ.js`),i=await m(this._dialog.open(e,{data:{zone:new Id({}),default_parent_id:this.selected_zone()?.id||this.root_zones()[0]?.id||``,roots:this.root_zones,zones:this.all_zones,load_children:a=>this.zoneChildren(a),query_zones:(a,s)=>this.querySelectableZones(a,s),onSave:(a,s)=>this.saveZone(a,s)},panelClass:`mobile-fullscreen`}));return i?(this.selected_zone.set(i),i):null}async editZone(e){if(!e.tags?.includes(`signage`)||!this._requirePermission(this.can_manage_zones(),ps(`SIGNAGE_MANAGER.SVC_NO_MANAGE_ZONES`)))return null;let{ZoneEditModalComponent:t}=await import(`./chunk-Dwfo31PZ.js`);return await m(this._dialog.open(t,{data:{zone:e,roots:this.root_zones,zones:this.all_zones,load_children:a=>this.zoneChildren(a),query_zones:(a,s)=>this.querySelectableZones(a,s),onSave:(a,s)=>this.saveZone(a,s)},panelClass:`mobile-fullscreen`}))}async saveZone(e,t){if(!this._requirePermission(this.can_manage_zones(),ps(`SIGNAGE_MANAGER.SVC_NO_MANAGE_ZONES`))||!t.parent_id||t.parent_id===e.id||e.id&&!e.tags?.includes(`signage`))return null;let i=l$1({display_name:t.display_name,name:`SIGNAGE ${t.display_name}`,description:t.description,parent_id:t.parent_id,tags:[...new Set([...e.tags||[],`signage`])]},e.id?{version:e.version}:{}),a=e.id?await a7(e.id,i):await c7(i);return this._cacheZone(a),this.zone_tree_children_cache.set({}),this.selected_zone.set(a),this.changed(),dee(ps(`SIGNAGE_MANAGER.SVC_SIGNAGE_ZONE_SAVED`)),a}async removeZone(e){if(!e?.id||!e.tags?.includes(`signage`)||!this._requirePermission(this.can_manage_zones(),ps(`SIGNAGE_MANAGER.SVC_NO_MANAGE_ZONES`)))return!1;let t=await ge$1({title:ps(`SIGNAGE_MANAGER.SVC_REMOVE_SIGNAGE_ZONE_TITLE`),content:ps(`SIGNAGE_MANAGER.SVC_DELETE_NAMED`,{name:e.display_name||e.name}),icon:{content:`delete`}},this._dialog);return t.reason!==`done`?!1:(await l7(e.id),t.close(),this._zone_overrides.update(i=>{let a=l$1({},i);return delete a[e.id],a}),this.zone_tree_children_cache.set({}),this.zone_tree_expanded.update(i=>{let a=l$1({},i);return delete a[e.id],a}),this.selected_zone()?.id===e.id&&this.selected_zone.set(null),this.changed(),dee(ps(`SIGNAGE_MANAGER.SVC_SIGNAGE_ZONE_REMOVED`)),!0)}async addDisplay(){if(!this._requirePermission(this.can_create(),ps(`SIGNAGE_MANAGER.SVC_NO_CREATE_DISPLAYS`)))return null;let e=await this._defaultDisplayZoneIds(),{DisplayEditModalComponent:t}=await import(`./chunk-25hXtClg2.js`),a=await m(this._dialog.open(t,{data:{display:new Ad({}),default_zone_ids:e,roots:this.root_zones,zones:this.all_zones,load_children:s=>this.zoneChildren(s),query_zones:(s,n)=>this.querySelectableZones(s,n),onAdd:s=>e7(s),onEdit:(s,n)=>J9(s,n)},panelClass:`mobile-fullscreen`}));return a?(this._addDisplayToList(a),this.selected_display.set(a),dee(ps(`SIGNAGE_MANAGER.SVC_DISPLAY_SAVED`)),a):null}async editDisplay(e){if(!this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_DISPLAYS`)))return null;let{DisplayEditModalComponent:t}=await import(`./chunk-25hXtClg2.js`),a=await m(this._dialog.open(t,{data:{display:e,default_zone_ids:[],roots:this.root_zones,zones:this.all_zones,load_children:s=>this.zoneChildren(s),query_zones:(s,n)=>this.querySelectableZones(s,n),onAdd:s=>e7(s),onEdit:(s,n)=>J9(s,n)},panelClass:`mobile-fullscreen`}));return a?(this._addDisplayToList(a),this.selected_display.set(a),dee(ps(`SIGNAGE_MANAGER.SVC_DISPLAY_SAVED`)),a):null}async removeDisplay(e){if(!e?.id||!this._requirePermission(this.can_delete_displays(),ps(`SIGNAGE_MANAGER.SVC_NO_DELETE_DISPLAYS`)))return!1;let t=await ge$1({title:ps(`SIGNAGE_MANAGER.SVC_REMOVE_DISPLAY_TITLE`),content:ps(`SIGNAGE_MANAGER.SVC_DELETE_NAMED`,{name:e.display_name||e.name}),icon:{content:`delete`}},this._dialog);return t.reason!==`done`?!1:(!!(e.map_id||e.email||e.modules.length||e.module_list.length)?await J9(e.id,{signage:!1}):await t7(e.id),t.close(),this._removeDisplayFromList(e.id),this.selected_display()?.id===e.id&&this.selected_display.set(null),dee(ps(`SIGNAGE_MANAGER.SVC_DISPLAY_REMOVED`)),!0)}async _defaultDisplayZoneIds(){let e=this._api_group_id(),t=this._org.building||this._org.region||this._org.organisation,i=e?this.root_zones():t?[t]:[];e&&!i.length&&(i=((await i7({group_id:e,limit:500,include_children_count:!0}).catch(()=>null))?.data||[]).map(d$1));let a=[...this.all_zones(),this._org.organisation,this._org.region,this._org.building].filter(s=>!!s?.id);return Et(i,a,async s=>s7(s).catch(()=>null))}async addDisplayToZone(e){if(!this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS`)))return;let{DisplaySelectModalComponent:t}=await import(`./chunk-ba6jG22O2.js`),a=await m(this._dialog.open(t,{data:{zone_id:e.id},panelClass:`mobile-fullscreen`}));if(!a)return;let s=this.displays().find(o=>o.id===a)||await X9(a).catch(()=>null);if(!s)return;if(s.zones?.includes(e.id)){fee(ps(`SIGNAGE_MANAGER.SVC_DISPLAY_IN_ZONE`));return}let n=[...s.zones||[],e.id],r=await J9(s.id,{zones:n,version:s.version},`patch`);this._cacheDisplay(r),this.changed(),dee(ps(`SIGNAGE_MANAGER.SVC_DISPLAY_ADDED_ZONE`))}async removeDisplayFromZone(e,t){if(!this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS`)))return;let a=this.displays().find(r=>r.id===t);if(!a)return;let s=(a.zones||[]).filter(r=>r!==e.id),n=await J9(a.id,{zones:s,version:a.version},`patch`);this._cacheDisplay(n),this.changed(),dee(ps(`SIGNAGE_MANAGER.SVC_DISPLAY_REMOVED_ZONE`))}async addPlaylistToDisplay(e){if(!this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS`)))return;let{PlaylistSelectModalComponent:t}=await import(`./chunk-Bp9kMGzF.js`),a=await m(this._dialog.open(t,{data:{display_id:e.id},panelClass:`mobile-fullscreen`}));if(!a)return;if(e.playlists?.includes(a)){fee(ps(`SIGNAGE_MANAGER.SVC_PLAYLIST_IN_DISPLAY`));return}let s=[...e.playlists||[],a],n=await J9(e.id,{playlists:s,version:e.version},`patch`);this._cacheDisplay(n),this.selected_display.set(n),this.changed(),dee(ps(`SIGNAGE_MANAGER.SVC_PLAYLIST_ADDED_DISPLAY`))}async addDisplayToPlaylist(e){if(!this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS`)))return;let{DisplaySelectModalComponent:t}=await import(`./chunk-ba6jG22O2.js`),a=await m(this._dialog.open(t,{data:{playlist_id:e.id},panelClass:`mobile-fullscreen`}));if(!a)return;let s=this.displays().find(o=>o.id===a)||await X9(a).catch(()=>null);if(!s)return;if(s.playlists?.includes(e.id)){fee(ps(`SIGNAGE_MANAGER.SVC_PLAYLIST_IN_DISPLAY`));return}let n=[...s.playlists||[],e.id],r=await J9(s.id,{playlists:n,version:s.version},`patch`);this._cacheDisplay(r),this.selected_display()?.id===s.id&&this.selected_display.set(r),this.changed(),dee(ps(`SIGNAGE_MANAGER.SVC_DISPLAY_ADDED_PLAYLIST`))}async addZoneToPlaylist(e){if(!this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS`)))return;let{ZoneSelectModalComponent:t}=await import(`./chunk-CXUOLi362.js`),a=await m(this._dialog.open(t,{data:{playlist_id:e.id},panelClass:`mobile-fullscreen`}));if(!a)return;let s=this.zones().find(o=>o.id===a)||await s7(a).catch(()=>null);if(!s)return;if(s.playlists?.includes(e.id)){fee(ps(`SIGNAGE_MANAGER.SVC_PLAYLIST_IN_ZONE`));return}let n=[...s.playlists||[],e.id],r=await a7(s.id,{playlists:n,version:s.version},`patch`);this._cacheZone(r),this.selected_zone()?.id===s.id&&this.selected_zone.set(r),this.changed(),dee(ps(`SIGNAGE_MANAGER.SVC_ZONE_ADDED_PLAYLIST`))}async removeDisplayFromPlaylist(e,t){if(!this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS`)))return;let i=(t.playlists||[]).filter(s=>s!==e.id),a=await J9(t.id,{playlists:i,version:t.version},`patch`);this._cacheDisplay(a),this.selected_display()?.id===t.id&&this.selected_display.set(a),this.changed(),dee(ps(`SIGNAGE_MANAGER.SVC_DISPLAY_REMOVED_PLAYLIST`))}async removeZoneFromPlaylist(e,t){if(!this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS`)))return;let i=(t.playlists||[]).filter(s=>s!==e.id),a=await a7(t.id,{playlists:i,version:t.version},`patch`);this._cacheZone(a),this.selected_zone()?.id===t.id&&this.selected_zone.set(a),this.changed(),dee(ps(`SIGNAGE_MANAGER.SVC_ZONE_REMOVED_PLAYLIST`))}async removePlaylistFromDisplay(e,t){if(!this._requirePermission(this.can_update(),ps(`SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS`)))return;let i=(e.playlists||[]).filter(s=>s!==t),a=await J9(e.id,{playlists:i,version:e.version},`patch`);this._cacheDisplay(a),this.selected_display.set(a),this.changed(),dee(ps(`SIGNAGE_MANAGER.SVC_PLAYLIST_REMOVED_DISPLAY`))}_getMediaMetadata(e){return new Promise(t=>{let i=URL.createObjectURL(e);if(P$1(e)){let a=document.createElement(`video`);a.src=i,a.addEventListener(`loadedmetadata`,()=>{t({is_landscape:a.videoWidth>a.videoHeight,duration:a.duration,width:a.videoWidth,height:a.videoHeight}),URL.revokeObjectURL(i)}),a.load()}else{let a=new Image;a.onload=()=>{t({is_landscape:a.width>a.height,duration:0,width:a.width,height:a.height}),URL.revokeObjectURL(i)},a.src=i}})}_uploadThumbnailImage(e,t){let i=`thumb+${(t||`media`).replace(/[^a-zA-Z0-9_-]/g,`_`)}.jpg`;return this._uploads.uploadFileToCompletion(vt$1(e,i)).catch(()=>(hee(ps(`SIGNAGE_MANAGER.SVC_THUMBNAIL_UPLOAD_FAILED`)),``))}async generateThumbnailImage(e){if(!e||!F$2(e))return fee(ps(`SIGNAGE_MANAGER.SVC_THUMBNAIL_NOT_IMAGE`)),``;let t=await this._normalizeImageUpload(e),i=await this._generateThumbnail(t,1280,720).catch(()=>``);return i||fee(ps(`SIGNAGE_MANAGER.SVC_THUMBNAIL_FAILED`)),i}async _generateThumbnail(e,t,i){return P$1(e)?this._generateVideoThumbnail(e,t,i):b(e)?this._generateImageThumbnail(e,t,i):``}async _generateImageThumbnail(e,t,i){let a=await this._decodeImageSource(e),{width:s,height:n}=this._imageSourceSize(a,t,i);try{return this._generateThumbnailFromResource(a,s,n,t,i)}finally{a instanceof ImageBitmap&&a.close()}}async _decodeImageSource(e){if(typeof createImageBitmap==`function`)try{let i=await createImageBitmap(e);if(i.width>0&&i.height>0)return i;i.close()}catch{}let t=await this._loadImage(e);return typeof t.decode==`function`&&await t.decode().catch(()=>{}),t}_imageSourceSize(e,t,i){let a=e.naturalWidth||e.width||0,s=e.naturalHeight||e.height||0;return a>0&&s>0?{width:a,height:s}:{width:t,height:i}}async _convertImageToWebp(e){let t=await this._loadImage(e),i=document.createElement(`canvas`);i.width=t.width,i.height=t.height;let a=i.getContext(`2d`);if(!a)throw new Error(ps(`SIGNAGE_MANAGER.SVC_ERR_CONVERT_IMAGE`));a.drawImage(t,0,0);let s=await new Promise(n=>i.toBlob(n,`image/webp`,.92));if(!s)throw new Error(ps(`SIGNAGE_MANAGER.SVC_ERR_CONVERT_IMAGE`));return new File([s],this._replaceFileExtension(e.name,`webp`),{type:`image/webp`,lastModified:e.lastModified})}_loadImage(e){return new Promise((t,i)=>{let a=new Image,s=URL.createObjectURL(e);a.onload=()=>{URL.revokeObjectURL(s),t(a)},a.onerror=()=>{URL.revokeObjectURL(s),i(new Error(ps(`SIGNAGE_MANAGER.SVC_ERR_LOAD_IMAGE`)))},a.src=s})}_replaceFileExtension(e,t){return e.replace(/\.[^.]+$/,``)+`.${t}`}_mediaValidationOptions(){return{allow_extended_video_codecs:!!this._settings.get(`app.media_allow_extended_video_codecs`)}}_generateVideoThumbnail(e,t,i){return new Promise((a,s)=>{let n=document.createElement(`video`),r=URL.createObjectURL(e);n.muted=!0,n.playsInline=!0,n.preload=`auto`;let o=!1,d=()=>{clearTimeout(S),URL.revokeObjectURL(r),n.removeAttribute(`src`),n.load()},E=()=>{if(o)return;o=!0;let M=this._generateThumbnailFromResource(n,n.videoWidth,n.videoHeight,t,i);d(),a(M)},G=M=>{o||(o=!0,d(),s(M))},S=setTimeout(()=>G(new Error(`Timed out generating video thumbnail`)),Dt);n.onseeked=E,n.onloadeddata=()=>{let M=Number.isFinite(n.duration)?n.duration:0,w=M?Math.min(Gt$1,M/2):Gt$1;if(n.currentTime===w){E();return}n.currentTime=w},n.onerror=()=>G(new Error(ps(`SIGNAGE_MANAGER.SVC_ERR_LOAD_IMAGE`))),n.src=r})}_generateThumbnailFromResource(e,t,i,a,s){let n=document.createElement(`canvas`),r=n.getContext(`2d`),o=t,d=i,E=o/d;o>a&&(o=a,d=o/E),d>s&&(d=s,o=d*E);let G=Math.max(1,Math.round(o)),S=Math.max(1,Math.round(d));return n.width=G,n.height=S,r.fillStyle=`#ffffff`,r.fillRect(0,0,G,S),r.drawImage(e,0,0,G,S),n.toDataURL(`image/jpeg`)}static{this.ɵfac=function(t){return new(t||l)}}static{this.ɵprov=Y$4({token:l,factory:l.ɵfac,providedIn:`root`})}}return l})();var He=class{_box;_destroyed=new A$3;_resizeSubject=new A$3;_resizeObserver;_elementObservables=new Map;constructor(e){this._box=e,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(e){return this._elementObservables.has(e)||this._elementObservables.set(e,new w$4(t=>{let i=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(e,{box:this._box}),()=>{this._resizeObserver?.unobserve(e),i.unsubscribe(),this._elementObservables.delete(e)}}).pipe(Ue$1(t=>t.some(i=>i.target===e)),oS({bufferSize:1,refCount:!0}),hi$1(this._destroyed))),this._elementObservables.get(e)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var fn$1=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=p$1(B$4);constructor(){}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,i){let r=i?.box||`content-box`;return this._observers.has(r)||this._observers.set(r,new He(r)),this._observers.get(r).observe(t)}static ɵfac=function(i){return new(i||n)};static ɵprov=O$3({token:n,factory:n.ɵfac})}return n})();var Jn=[`notch`];var ei=[`*`];var un$1=[`iconPrefixContainer`];var mn$1=[`textPrefixContainer`];var hn$1=[`iconSuffixContainer`];var pn$1=[`textSuffixContainer`];var ti=[`textField`];var ni=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var ii=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function ri(n,e){n&1&&Wi$1(0,`span`,21)}function oi(n,e){if(n&1&&(tr$1(0,`label`,20),or$1(1,1),Pr(2,ri,1,0,`span`,21),xr()),n&2){let t=Br(2);Yi$1(`floating`,t._shouldLabelFloat())(`monitorResize`,t._hasOutline())(`id`,t._labelId),xt$1(`for`,t._control.disableAutomaticLabeling?null:t._control.id),Xt$2(2),kr(!t.hideRequiredMarker&&t._control.required?2:-1)}}function ai(n,e){if(n&1&&Pr(0,oi,3,5,`label`,20),n&2)kr(Br()._hasFloatingLabel()?0:-1)}function di(n,e){n&1&&Wi$1(0,`div`,7)}function li(n,e){}function si(n,e){if(n&1&&Hi$1(0,li,0,0,`ng-template`,13),n&2){Br(2);Yi$1(`ngTemplateOutlet`,XL(1))}}function ci(n,e){if(n&1&&(tr$1(0,`div`,9),Pr(1,si,1,1,null,13),xr()),n&2){let t=Br();Yi$1(`matFormFieldNotchedOutlineOpen`,t._shouldLabelFloat()),Xt$2(),kr(t._forceDisplayInfixLabel()?-1:1)}}function fi(n,e){n&1&&(tr$1(0,`div`,10,2),or$1(2,2),xr())}function ui(n,e){n&1&&(tr$1(0,`div`,11,3),or$1(2,3),xr())}function mi(n,e){}function hi(n,e){if(n&1&&Hi$1(0,mi,0,0,`ng-template`,13),n&2){Br();Yi$1(`ngTemplateOutlet`,XL(1))}}function pi(n,e){n&1&&(tr$1(0,`div`,14,4),or$1(2,4),xr())}function gi(n,e){n&1&&(tr$1(0,`div`,15,5),or$1(2,5),xr())}function bi(n,e){n&1&&Wi$1(0,`div`,16)}function vi(n,e){n&1&&(tr$1(0,`div`,18),or$1(1,6),xr())}function yi(n,e){if(n&1&&(tr$1(0,`mat-hint`,22),Na(1),xr()),n&2){let t=Br(2);Yi$1(`id`,t._hintLabelId),Xt$2(),EI(t.hintLabel)}}function _i(n,e){if(n&1&&(tr$1(0,`div`,19),Pr(1,yi,2,2,`mat-hint`,22),or$1(2,7),Wi$1(3,`div`,23),or$1(4,8),xr()),n&2){let t=Br();Xt$2(),kr(t.hintLabel?1:-1)}}var Ue=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=G$3({type:n,selectors:[[`mat-label`]]})}return n})();var Sn=new E$2(`MatError`);var xi=(()=>{class n{id=p$1(an$1).getId(`mat-mdc-error-`);static ɵfac=function(i){return new(i||n)};static ɵdir=G$3({type:n,selectors:[[`mat-error`],[``,`matError`,``]],hostAttrs:[1,`mat-mdc-form-field-error`,`mat-mdc-form-field-bottom-align`],hostVars:1,hostBindings:function(i,r){i&2&&Ur(`id`,r.id)},inputs:{id:`id`},features:[gt$1([{provide:Sn,useExisting:n}])]})}return n})();var We=(()=>{class n{align=`start`;id=p$1(an$1).getId(`mat-mdc-hint-`);static ɵfac=function(i){return new(i||n)};static ɵdir=G$3({type:n,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(i,r){i&2&&(Ur(`id`,r.id),xt$1(`align`,null),Ze$1(`mat-mdc-form-field-hint-end`,r.align===`end`))},inputs:{align:`align`,id:`id`}})}return n})();var Nn=new E$2(`MatPrefix`);var Si=(()=>{class n{set _isTextSelector(t){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||n)};static ɵdir=G$3({type:n,selectors:[[``,`matPrefix`,``],[``,`matIconPrefix`,``],[``,`matTextPrefix`,``]],inputs:{_isTextSelector:[0,`matTextPrefix`,`_isTextSelector`]},features:[gt$1([{provide:Nn,useExisting:n}])]})}return n})();var wn=new E$2(`MatSuffix`);var Ni=(()=>{class n{set _isTextSelector(t){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||n)};static ɵdir=G$3({type:n,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[gt$1([{provide:wn,useExisting:n}])]})}return n})();var Mn=new E$2(`FloatingLabelParent`);var gn$1=(()=>{class n{_elementRef=p$1(K$2);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=p$1(fn$1);_ngZone=p$1(B$4);_parent=p$1(Mn);_resizeSubscription=new q$5;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return wi(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(i){return new(i||n)};static ɵdir=G$3({type:n,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(i,r){i&2&&Ze$1(`mdc-floating-label--float-above`,r.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return n})();function wi(n){let e=n;if(e.offsetParent!==null)return e.scrollWidth;let t=e.cloneNode(!0);t.style.setProperty(`position`,`absolute`),t.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(t);let i=t.scrollWidth;return t.remove(),i}var bn$1=`mdc-line-ripple--active`;var pe=`mdc-line-ripple--deactivating`;var vn$1=(()=>{class n{_elementRef=p$1(K$2);_cleanupTransitionEnd;constructor(){let t=p$1(B$4),i=p$1(xe$1);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(pe),t.add(bn$1)}deactivate(){this._elementRef.nativeElement.classList.add(pe)}_handleTransitionEnd=t=>{let i=this._elementRef.nativeElement.classList,r=i.contains(pe);t.propertyName===`opacity`&&r&&i.remove(bn$1,pe)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(i){return new(i||n)};static ɵdir=G$3({type:n,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return n})();var yn$1=(()=>{class n{_elementRef=p$1(K$2);_ngZone=p$1(B$4);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,i=t.querySelector(`.mdc-floating-label`);i?(t.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(i.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration=``)}))):t.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(t){let i=this._notch.nativeElement;!this.open||!t?i.style.width=``:i.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${t}px)`)}static ɵfac=function(i){return new(i||n)};static ɵcmp=Ae({type:n,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(i,r){if(i&1&&Uo(Jn,5),i&2){let o;Ki$1(o=qi$1())&&(r._notch=o.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(i,r){i&2&&Ze$1(`mdc-notched-outline--notched`,r.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:ei,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(i,r){i&1&&(Gr(),Oa(0,`div`,1),Fr(1,`div`,2,0),or$1(3),Vr(),Oa(4,`div`,3))},encapsulation:2})}return n})();var Mi=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(i){return new(i||n)};static ɵdir=G$3({type:n})}return n})();var Ci=new E$2(`MatFormField`);var Ei=new E$2(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var _n$1=`fill`;var Fi=`auto`;var xn=`fixed`;var Ri=`translateY(-50%)`;var Cn=(()=>{class n{_elementRef=p$1(K$2);_changeDetectorRef=p$1(Jt);_platform=p$1(Se$1);_idGenerator=p$1(an$1);_ngZone=p$1(B$4);_defaults=p$1(Ei,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=c4(`iconPrefixContainer`);_textPrefixContainerSignal=c4(`textPrefixContainer`);_iconSuffixContainerSignal=c4(`iconSuffixContainer`);_textSuffixContainerSignal=c4(`textSuffixContainer`);_prefixSuffixContainers=ve$2(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=u4(Ue);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=gre(t)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Fi}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let i=t||this._defaults?.appearance||_n$1;this._appearanceSignal.set(i)}_appearanceSignal=ce$1(_n$1);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||xn}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||xn}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new A$3;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=mr$1();constructor(){let t=this._defaults,i=p$1(gr$1);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),Xn$1(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ve$2(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(t){let i=this._control,r=`mat-mdc-form-field-type-`;t&&this._elementRef.nativeElement.classList.remove(r+t.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Sr([void 0,void 0]),Le(()=>[i.errorState,i.userAriaDescribedBy]),nS(),Ue$1(([[o,a],[d,s]])=>o!==d||a!==s)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(hi$1(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Mf(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._control.focused;t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,t),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,t)}_syncOutlineLabelOffset(){f4({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ve$2(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(t){let i=this._control?this._control.ngControl:null;return i&&i[t]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&t.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let o=this._hintChildren?this._hintChildren.find(d=>d.align===`start`):null,a=this._hintChildren?this._hintChildren.find(d=>d.align===`end`):null;o?t.push(o.id):this._hintLabel&&t.push(this._hintLabelId),a&&t.push(a.id)}else this._errorChildren&&t.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||t;r=t.concat(i.filter(a=>a&&!o.includes(a)))}else r=t;this._control.setDescribedByIds(r),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=t?.getBoundingClientRect().width??0,d=i?.getBoundingClientRect().width??0,s=r?.getBoundingClientRect().width??0,u=o?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${Ri} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${a+d}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,a+d+s+u]}_writeOutlinedLabelStyles(t){if(t!==null){let[i,r]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let i=t.getRootNode();return i&&i!==t}return document.documentElement.contains(t)}static ɵfac=function(i){return new(i||n)};static ɵcmp=Ae({type:n,selectors:[[`mat-form-field`]],contentQueries:function(i,r,o){if(i&1&&(lI(o,r._labelChild,Ue,5),cI(o,Mi,5)(o,Nn,5)(o,wn,5)(o,Sn,5)(o,We,5)),i&2){QL();let a;Ki$1(a=qi$1())&&(r._formFieldControl=a.first),Ki$1(a=qi$1())&&(r._prefixChildren=a),Ki$1(a=qi$1())&&(r._suffixChildren=a),Ki$1(a=qi$1())&&(r._errorChildren=a),Ki$1(a=qi$1())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(uI(r._iconPrefixContainerSignal,un$1,5)(r._textPrefixContainerSignal,mn$1,5)(r._iconSuffixContainerSignal,hn$1,5)(r._textSuffixContainerSignal,pn$1,5),Uo(ti,5)(un$1,5)(mn$1,5)(hn$1,5)(pn$1,5)(gn$1,5)(yn$1,5)(vn$1,5)),i&2){QL(4);let o;Ki$1(o=qi$1())&&(r._textField=o.first),Ki$1(o=qi$1())&&(r._iconPrefixContainer=o.first),Ki$1(o=qi$1())&&(r._textPrefixContainer=o.first),Ki$1(o=qi$1())&&(r._iconSuffixContainer=o.first),Ki$1(o=qi$1())&&(r._textSuffixContainer=o.first),Ki$1(o=qi$1())&&(r._floatingLabel=o.first),Ki$1(o=qi$1())&&(r._notchedOutline=o.first),Ki$1(o=qi$1())&&(r._lineRipple=o.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(i,r){i&2&&Ze$1(`mat-mdc-form-field-label-always-float`,r._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,r._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,r._hasIconSuffix)(`mat-form-field-invalid`,r._control.errorState)(`mat-form-field-disabled`,r._control.disabled)(`mat-form-field-autofilled`,r._control.autofilled)(`mat-form-field-appearance-fill`,r.appearance==`fill`)(`mat-form-field-appearance-outline`,r.appearance==`outline`)(`mat-form-field-hide-placeholder`,r._hasFloatingLabel()&&!r._shouldLabelFloat())(`mat-primary`,r.color!==`accent`&&r.color!==`warn`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`ng-untouched`,r._shouldForward(`untouched`))(`ng-touched`,r._shouldForward(`touched`))(`ng-pristine`,r._shouldForward(`pristine`))(`ng-dirty`,r._shouldForward(`dirty`))(`ng-valid`,r._shouldForward(`valid`))(`ng-invalid`,r._shouldForward(`invalid`))(`ng-pending`,r._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[gt$1([{provide:Ci,useExisting:n},{provide:Mn,useExisting:n}])],ngContentSelectors:ii,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(i,r){if(i&1&&(Gr(ni),Hi$1(0,ai,1,1,`ng-template`,null,0,xP),tr$1(2,`div`,6,1),Tt$2(`click`,function(a){return r._control.onContainerClick(a)}),Pr(4,di,1,0,`div`,7),tr$1(5,`div`,8),Pr(6,ci,2,2,`div`,9),Pr(7,fi,3,0,`div`,10),Pr(8,ui,3,0,`div`,11),tr$1(9,`div`,12),Pr(10,hi,1,1,null,13),or$1(11),xr(),Pr(12,pi,3,0,`div`,14),Pr(13,gi,3,0,`div`,15),xr(),Pr(14,bi,1,0,`div`,16),xr(),tr$1(15,`div`,17),Pr(16,vi,2,0,`div`,18)(17,_i,5,1,`div`,19),xr()),i&2){let o;Xt$2(2),Ze$1(`mdc-text-field--filled`,!r._hasOutline())(`mdc-text-field--outlined`,r._hasOutline())(`mdc-text-field--no-label`,!r._hasFloatingLabel())(`mdc-text-field--disabled`,r._control.disabled)(`mdc-text-field--invalid`,r._control.errorState),Xt$2(2),kr(!r._hasOutline()&&!r._control.disabled?4:-1),Xt$2(2),kr(r._hasOutline()?6:-1),Xt$2(),kr(r._hasIconPrefix?7:-1),Xt$2(),kr(r._hasTextPrefix?8:-1),Xt$2(2),kr(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),Xt$2(2),kr(r._hasTextSuffix?12:-1),Xt$2(),kr(r._hasIconSuffix?13:-1),Xt$2(),kr(r._hasOutline()?-1:14),Xt$2(),Ze$1(`mat-mdc-form-field-subscript-dynamic-size`,r.subscriptSizing===`dynamic`);let a=r._getSubscriptMessageType();Xt$2(),kr((o=a)===`error`?16:o===`hint`?17:-1)}},dependencies:[gn$1,yn$1,W0,vn$1,We],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return n})();var qr=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=re$1({type:n});static ɵinj=X$2({imports:[ZC,Cn,Rt$2]})}return n})();var Dn=Symbol(`FIELD_TREE`);var Ge=0;function Ti(){return Ge}function O(n,e){return(...t)=>{try{return Ge=e,n(...t)}finally{Ge=0}}}function Di(n){return!n}function En(n){return n}function F(n){return Array.isArray(n)}function be(n){return(typeof n==`object`||typeof n==`function`)&&n!=null}var B=Symbol();var Me=Symbol();var ie=class{predicates;fns=[];constructor(e){this.predicates=e}push(e){this.fns.push(Fn(this.predicates,e))}mergeIn(e){let t=this.predicates?e.fns.map(i=>Fn(this.predicates,i)):e.fns;this.fns.push(...t)}hasRules(){return this.fns.length>0}};var ve=class extends ie{get defaultValue(){return!1}compute(e){return this.fns.some(t=>{let i=t(e);return i&&i!==Me})}};var q=class n extends ie{ignore;static ignoreNull(e){return new n(e,t=>t===null)}constructor(e,t){super(e),this.ignore=t}get defaultValue(){return[]}compute(e){return this.fns.reduce((t,i)=>{let r=i(e);return r===void 0||r===Me?t:F(r)?[...t,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?t:[...t,r]},[])}};var $e=class extends q{constructor(e){super(e,void 0)}};var Qe=class extends ie{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(e,t){super(e),this.key=t}compute(e){if(this.fns.length===0)return this.key.reducer.getInitial();let t=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let r=this.fns[i](e);r!==Me&&(t=this.key.reducer.reduce(t,r))}return t}};function Fn(n,e){return n.length===0?e:t=>{for(let i of n){let r=t.stateOf(i.path),o=le(r.structure.pathKeys).length-i.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!i.fn(r.context))return Me}return e(t)}}var U=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(e){this.predicates=e,this.hidden=new ve(e),this.disabledReasons=new $e(e),this.readonly=new ve(e),this.syncErrors=q.ignoreNull(e),this.syncTreeErrors=q.ignoreNull(e),this.asyncErrors=q.ignoreNull(e)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(e){return this.metadata.has(e)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(e){return this.metadata.has(e)||this.metadata.set(e,new Qe(this.predicates,e)),this.metadata.get(e)}mergeIn(e){this.hidden.mergeIn(e.hidden),this.disabledReasons.mergeIn(e.disabledReasons),this.readonly.mergeIn(e.readonly),this.syncErrors.mergeIn(e.syncErrors),this.syncTreeErrors.mergeIn(e.syncTreeErrors),this.asyncErrors.mergeIn(e.asyncErrors);for(let t of e.getMetadataKeys()){let i=e.metadata.get(t);this.getMetadata(t).mergeIn(i)}}};var ye=class{depth;constructor(e){this.depth=e}build(){return new _e(this,[],0)}};var W$1=class n extends ye{constructor(e){super(e)}current;all=[];addHiddenRule(e){this.getCurrent().addHiddenRule(e)}addDisabledReasonRule(e){this.getCurrent().addDisabledReasonRule(e)}addReadonlyRule(e){this.getCurrent().addReadonlyRule(e)}addSyncErrorRule(e){this.getCurrent().addSyncErrorRule(e)}addSyncTreeErrorRule(e){this.getCurrent().addSyncTreeErrorRule(e)}addAsyncErrorRule(e){this.getCurrent().addAsyncErrorRule(e)}addMetadataRule(e,t){this.getCurrent().addMetadataRule(e,t)}getChild(e){if(e===B){let t=this.getCurrent().children;t.size>(t.has(B)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(e)}hasLogic(e){return this===e?!0:this.all.some(({builder:t})=>t.hasLogic(e))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:e})=>e.anyChildHasLogic())}mergeIn(e,t){t?this.all.push({builder:e,predicate:{fn:O(t.fn,this.depth),path:t.path}}):this.all.push({builder:e}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new re(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new n(0)}};var re=class extends ye{logic=new U([]);children=new Map;constructor(e){super(e)}addHiddenRule(e){this.logic.hidden.push(O(e,this.depth))}addDisabledReasonRule(e){this.logic.disabledReasons.push(O(e,this.depth))}addReadonlyRule(e){this.logic.readonly.push(O(e,this.depth))}addSyncErrorRule(e){this.logic.syncErrors.push(O(e,this.depth))}addSyncTreeErrorRule(e){this.logic.syncTreeErrors.push(O(e,this.depth))}addAsyncErrorRule(e){this.logic.asyncErrors.push(O(e,this.depth))}addMetadataRule(e,t){this.logic.getMetadata(e).push(O(t,this.depth))}getChild(e){return this.children.has(e)||this.children.set(e,new W$1(this.depth+1)),this.children.get(e)}hasLogic(e){return this===e}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let e of this.children.values())if(e.hasRules())return!0;return!1}};var _e=class n{builder;predicates;depth;logic;constructor(e,t,i){this.builder=e,this.predicates=t,this.depth=i,this.logic=e?Ai(e,t,i):new U([])}getChild(e){let t=this.builder?An(this.builder,e):[];if(t.length===0)return new n(void 0,[],this.depth+1);if(t.length===1){let{builder:i,predicates:r}=t[0];return new n(i,[...this.predicates,...r.map(o=>Xe(o,this.depth))],this.depth+1)}else return new Ye(t.map(({builder:r,predicates:o})=>new n(r,[...this.predicates,...o.map(a=>Xe(a,this.depth))],this.depth+1)))}hasLogic(e){return this.builder?this.builder.hasLogic(e):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}};var Ye=class n{all;logic;constructor(e){this.all=e,this.logic=new U([]);for(let t of e)this.logic.mergeIn(t.logic)}getChild(e){return new n(this.all.flatMap(t=>t.getChild(e)))}hasLogic(e){return this.all.some(t=>t.hasLogic(e))}hasRules(){return this.all.some(e=>e.hasRules())}anyChildHasLogic(){return this.all.some(e=>e.anyChildHasLogic())}};function An(n,e){if(n instanceof W$1)return n.all.flatMap(({builder:t,predicate:i})=>{let r=An(t,e);return i?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,i]})):r});if(n instanceof re)return[...e!==B&&n.children.has(B)?[{builder:n.getChild(B),predicates:[]}]:[],...n.children.has(e)?[{builder:n.getChild(e),predicates:[]}]:[]];throw new v$4(1909,!1)}function Ai(n,e,t){let i=new U(e);if(n instanceof W$1){let r=n.all.map(({builder:o,predicate:a})=>new _e(o,a?[...e,Xe(a,t)]:e,t));for(let o of r)i.mergeIn(o.logic)}else if(n instanceof re)i.mergeIn(n.logic);else throw new v$4(1909,!1);return i}function Xe(n,e){return m$3(l$1({},n),{depth:e})}var On=Symbol(`PATH`);var T=class n{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,Oi);logicBuilder;constructor(e,t,i,r){this.keys=e,this.parent=i,this.keyInParent=r,this.root=t??this,i||(this.logicBuilder=W$1.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(e){return this.children.has(e)||this.children.set(e,new n([...this.keys,e],this.root,this,e)),this.children.get(e)}mergeIn(e,t){let i=e.compile();this.builder.mergeIn(i.builder,t)}static unwrapFieldPath(e){return e[On]}static newRoot(){return new n([],void 0,void 0,void 0)}};var Oi={get(n,e){return e===On?n:n.getChild(e).fieldPathProxy}};var ge;var ne=new Map;var xe=class n{schemaFn;constructor(e){this.schemaFn=e}compile(){if(ne.has(this))return ne.get(this);let e=T.newRoot();ne.set(this,e);let t=ge;try{ge=e,this.schemaFn(e.fieldPathProxy)}finally{ge=t}return e}static create(e){return e instanceof n?e:new n(e)}static rootCompile(e){try{return ne.clear(),e===void 0?T.newRoot():e instanceof n?e.compile():new n(e).compile()}finally{ne.clear()}}};function Ii(n){return n instanceof xe||typeof n==`function`}function lt$1(n){if(ge!==T.unwrapFieldPath(n).root)throw new v$4(1908,!1)}function ae(n,e,t){return lt$1(n),T.unwrapFieldPath(n).builder.addMetadataRule(e,t),e}var G={list(){return{reduce:(n,e)=>e===void 0?n:[...n,e],getInitial:()=>[]}},min(){return{reduce:(n,e)=>n===void 0||e===void 0?n??e:e<n?e:n,getInitial:()=>{}}},max(){return{reduce:(n,e)=>n===void 0||e===void 0?n??e:e>n?e:n,getInitial:()=>{}}},or(){return{reduce:(n,e)=>n||e,getInitial:()=>!1}},and(){return{reduce:(n,e)=>n&&e,getInitial:()=>!0}},override:Pi};function Pi(n){return{reduce:(e,t)=>t,getInitial:()=>n?.()}}var st=Symbol(`IS_ASYNC_VALIDATION_RESOURCE`);var Se=class{reducer;create;brand;[st];constructor(e,t){this.reducer=e,this.create=t}};function D(n){return new Se(n??G.override())}function ct$1(){return D()}var ft=D(G.or());var In=ct$1();var Pn=ct$1();var ut=D(G.max());var kn=D(G.min());var Ln=D(G.list());function S(n,e){if(n===e)return!0;if(!n||!e||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(!Object.is(n[t],e[t]))return!1;return!0}function ki(n){return n.errors().length>0?`invalid`:n.pending()?`unknown`:`valid`}var Ze=class{node;constructor(e){this.node=e}rawSyncTreeErrors=ve$2(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:S});syncErrors=ve$2(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...Li(this.node.submitState.submissionErrors())],{equal:S});syncValid=ve$2(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(e,t)=>t&&e.validationState.syncValid(),Di));syncTreeErrors=ve$2(()=>this.rawSyncTreeErrors().filter(e=>e.fieldTree===this.node.fieldTree),{equal:S});rawAsyncErrors=ve$2(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:S});asyncErrors=ve$2(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(e=>e===`pending`||e.fieldTree===this.node.fieldTree),{equal:S});parseErrors=ve$2(()=>this.node.formFieldBindings().flatMap(e=>e.parseErrors()),{equal:S});errors=ve$2(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(e=>e!==`pending`)],{equal:S});errorSummary=ve$2(()=>{let e=this.node.structure.reduceChildren(this.errors(),(t,i)=>[...i,...t.errorSummary()]);return le(()=>e.sort(zi)),e},{equal:S});pending=ve$2(()=>this.node.structure.reduceChildren(this.asyncErrors().includes(`pending`),(e,t)=>t||e.validationState.pending()));status=ve$2(()=>{if(this.shouldSkipValidation())return`valid`;let e=ki(this);return this.node.structure.reduceChildren(e,(t,i)=>i===`invalid`||t.validationState.status()===`invalid`?`invalid`:i===`unknown`||t.validationState.status()===`unknown`?`unknown`:`valid`,t=>t===`invalid`)});valid=ve$2(()=>this.status()===`valid`);invalid=ve$2(()=>this.status()===`invalid`);shouldSkipValidation=ve$2(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function Li(n){return n===void 0?[]:F(n)?n:[n]}function mt$1(n,e){if(F(n))for(let t of n)t.fieldTree??=e;else n&&(n.fieldTree??=e);return n}function Rn(n){return n.formField?n.formField.element:n.fieldTree().formFieldBindings().reduce((e,t)=>!e||!t.element?e??t.element:e.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t.element:e,void 0)}function zi(n,e){let t=Rn(n),i=Rn(e);return t===i?0:t===void 0||i===void 0?t===void 0?1:-1:t.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var Je=D();var et$1=class{node;cache=new WeakMap;constructor(e){this.node=e,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(e){if(!this.cache.has(e)){let t=ve$2(()=>{let i=T.unwrapFieldPath(e),r=this.node,o=Ti();for(;o>0||!r.structure.logic.hasLogic(i.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new v$4(1900,!1);for(let a of i.keys)if(r=r.structure.getChild(a),r===void 0)throw new v$4(1901,!1);return r.fieldTree});this.cache.set(e,t)}return this.cache.get(e)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=ve$2(()=>{let e=this.key();if(!F(le(this.node.structure.parent.value)))throw new v$4(1906,!1);return Number(e)});fieldTreeOf(e){return this.resolve(e)}stateOf(e){return this.resolve(e)()}valueOf=e=>{let t=this.resolve(e)().value();if(t instanceof nd)throw new v$4(1907,!1);return t}};var tt=class{node;metadata=new Map;constructor(e){this.node=e}runMetadataCreateLifecycle(){if(!this.node.logicNode.logic.hasMetadataKeys())return;let e=Zm();e&&Ho(!1);try{le(()=>Al(this.node.structure.injector,()=>{for(let t of this.node.logicNode.logic.getMetadataKeys())if(t.create){let i=this.node.logicNode.logic.getMetadata(t),r=t.create(this.node,ve$2(()=>i.compute(this.node.context)));this.metadata.set(t,r)}}))}finally{e&&Ho(!0)}}get(e){if(this.has(e)&&!this.metadata.has(e)){if(e.create)throw new v$4(1912,!1);let t=this.node.logicNode.logic.getMetadata(e);this.metadata.set(e,ve$2(()=>t.compute(this.node.context)))}return this.metadata.get(e)}has(e){return this.node.logicNode.logic.hasMetadata(e)}};var Vi={get(n,e,t){if(e===Dn)return!0;let i=n(),r=i.structure.getChild(e);if(r!==void 0)return r.fieldTree;let o=le(i.value);if(F(o)){if(e===`length`)return i.value().length;if(e===Symbol.iterator)return()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(be(o)&&e===Symbol.iterator)return function*(){for(let a in t)yield[a,t[a]]}},getOwnPropertyDescriptor(n,e){let t=le(n().value),i=Reflect.getOwnPropertyDescriptor(t,e);return i&&!i.configurable&&(i.configurable=!0),i},ownKeys(n){let e=le(n().value);return typeof e==`object`&&e!==null?Reflect.ownKeys(e):[]}};function Bi(n,e){let t=ve$2(()=>n()[e()]);return t[_e$1]=n[_e$1],t.set=i=>{Object.is(le(t),i)||n.update(r=>ji(r,i,e()))},t.update=i=>{t.set(i(le(t)))},t.asReadonly=()=>t,t}function ji(n,e,t){if(F(n)){let i=[...n];return i[t]=e,i}else return m$3(l$1({},n),{[t]:e})}var H=Symbol(``);var zn=ve$2(()=>!1);var Ne=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=k$4.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(e,t,i){this.logic=e,this.node=t,this.createChildNode=i}children(){this.ensureChildrenMap();let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>le(t.reader))}materializedChildren(){let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>t.node)}_areChildrenMaterialized(){return le(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||le(()=>{this.childrenMap.update(e=>this.computeChildrenMap(this.value(),e,!0))})}getChild(e){this.ensureChildrenMap();let t=e.toString(),i=le(this.childrenMap)?.byPropertyKey.get(t)?.reader;return i||(i=this.createReader(t)),i()}reduceChildren(e,t,i){let r=this.childrenMap();if(!r)return e;let o=e;for(let a of r.byPropertyKey.values()){if(i?.(o))break;o=t(le(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(e,t,i){if(e===`root`)return{keyInParent:Vn,isOrphaned:zn};let r=this.parent,o=i,a=ve$2(()=>{if(r.structure.isOrphaned())return H;let u=r.structure.childrenMap();if(!u)return H;let x=u.byPropertyKey.get(o);if(x&&x.node===this.node)return o;if(t===void 0)return H;for(let[$,R]of u.byPropertyKey)if(R.node===this.node)return o=$;return H}),d=ve$2(()=>a()===H);return{keyInParent:ve$2(()=>{let u=a();if(u===H)throw t===void 0?new v$4(-1902,!1):new v$4(1904,!1);return u}),isOrphaned:d}}createChildrenMap(){return Ru({source:this.value,computation:(e,t)=>this.computeChildrenMap(e,t?.value,!1)})}computeChildrenMap(e,t,i){if(!be(e)||!i&&t===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;t??={byPropertyKey:new Map};let r,o=F(e);t!==void 0&&(o?r=Hi(t,e,this.identitySymbol):r=qi(t,e));for(let a of Object.keys(e)){let d,s=e[a];if(s===void 0){t.byPropertyKey.has(a)&&(r??=l$1({},t),r.byPropertyKey.delete(a));continue}o&&be(s)&&!F(s)&&(d=s[this.identitySymbol]??=Symbol(``));let u;d&&(t.byTrackingKey?.has(d)||(r??=l$1({},t),r.byTrackingKey??=new Map,r.byTrackingKey.set(d,this.createChildNode(a,d,o))),u=(r??t).byTrackingKey.get(d));let x=t.byPropertyKey.get(a);x===void 0?(r??=l$1({},t),r.byPropertyKey.set(a,{reader:this.createReader(a),node:u??this.createChildNode(a,d,o)})):u&&u!==x.node&&(r??=l$1({},t),x.node=u)}return r??t}createReader(e){return ve$2(()=>this.childrenMap()?.byPropertyKey.get(e)?.node)}};var nt$1=class extends Ne{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return Ki}get keyInParent(){return Vn}isOrphaned=zn;childrenMap;constructor(e,t,i,r,o){super(t,e,o),this.fieldManager=i,this.value=r,this.childrenMap=this.createChildrenMap()}};var it$1=class extends Ne{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(e,t,i,r,o,a){super(t,e,a),this.logic=t,this.parent=i,this.root=this.parent.structure.root;let d=this.createKeyOrOrphanSignals(`child`,r,o);this.isOrphaned=d.isOrphaned,this.keyInParent=d.keyInParent,this.pathKeys=ve$2(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=Bi(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var Ki=ve$2(()=>[]);var Vn=ve$2(()=>{throw new v$4(1905,!1)});function Hi(n,e,t){let i,r=new Set(n.byPropertyKey.keys()),o=n.byTrackingKey&&new Set(n.byTrackingKey.keys());for(let a=0;a<e.length;a++){let d=e[a];r.delete(a.toString()),o&&be(d)&&Object.hasOwn(d,t)&&o.delete(d[t])}if(r.size>0){i??=l$1({},n);for(let a of r)i.byPropertyKey.delete(a)}if(o&&o.size>0){i??=l$1({},n);for(let a of o)i.byTrackingKey.delete(a)}return i}function qi(n,e){let t;for(let i of n.byPropertyKey.keys())Object.hasOwn(e,i)||(t??=l$1({},n),t.byPropertyKey.delete(i));return t}var rt$1=class{node;selfSubmitting=ce$1(!1);submissionErrors;constructor(e){this.node=e,this.submissionErrors=Ru({source:this.node.structure.value,computation:()=>[]})}submitting=ve$2(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))};var oe=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new et$1(this)}fieldProxy=new Proxy(()=>this,Vi);pathNode;constructor(e){this.pathNode=e.pathNode,this.fieldAdapter=e.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,e),this.validationState=this.fieldAdapter.createValidationState(this,e),this.nodeState=this.fieldAdapter.createNodeState(this,e),this.metadataState=new tt(this),this.submitState=new rt$1(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(e){this.getBindingForFocus()?.focus(e)}getBindingForFocus(){return this.formFieldBindings().filter(t=>t.focus!==void 0).reduce(Tn,void 0)||this.structure.children().map(t=>t.getBindingForFocus()).reduce(Tn,void 0)}pendingSync=Ru({source:()=>this.value(),computation:(e,t)=>{t?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let e=this.metadata(Pn)?.();return e?this.metadata(e):void 0}get maxLength(){return this.metadata(kn)}get min(){let e=this.metadata(In)?.();return e?this.metadata(e):void 0}get minLength(){return this.metadata(ut)}get pattern(){return this.metadata(Ln)??Ui}get required(){return this.metadata(ft)??Wi}metadata(e){return this.metadataState.get(e)}getError(e){return this.errors().find(t=>t.kind===e)}hasMetadata(e){return this.metadataState.has(e)}markAsTouched(e){this.structure.isOrphaned()||le(()=>{this.markAsTouchedInternal(e),this.flushSync()})}markAsTouchedInternal(e){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!e?.skipDescendants))for(let t of this.structure.children())t.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(e){le(()=>this._reset(e))}_reset(e){this.pendingSync()?.abort(),e!==void 0&&this.value.set(e),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let t of this.formFieldBindings())t.reset();for(let t of this.structure.materializedChildren())t._reset()}reloadValidation(){le(()=>this._reloadValidation())}_reloadValidation(){let e=this.logicNode.logic.getMetadataKeys();for(let t of e)t[st]&&this.metadata(t).reload?.();for(let t of this.structure.children())t._reloadValidation()}controlValueSignal(){let e=Ru(this.value);e.rawSet=e.set,e.set=i=>{e.rawSet(i),this.markAsDirty(),this.debounceSync()};let t=e.update;return e.update=i=>{t(i),this.markAsDirty(),this.debounceSync()},e}sync(){this.value.set(this.controlValue())}flushSync(){let e=this.pendingSync();e&&!e.signal.aborted&&(e.abort(),this.sync())}async debounceSync(){let e=le(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(e){let t=new AbortController,i=e(t.signal);if(i&&(this.pendingSync.set(t),await i,t.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(e,t,i,r){return r.newRoot(e,t,i,r)}createStructure(e){return e.kind===`root`?new nt$1(this,e.logic,e.fieldManager,e.value,this.newChild.bind(this)):new it$1(this,e.logic,e.parent,e.identityInParent,e.initialKeyInParent,this.newChild.bind(this))}newChild(e,t,i){let r,o;return i?(r=this.pathNode.getChild(B),o=this.structure.logic.getChild(B)):(r=this.pathNode.getChild(e),o=this.structure.logic.getChild(e)),this.fieldAdapter.newChild({kind:`child`,parent:this,pathNode:r,logic:o,initialKeyInParent:e,identityInParent:t,fieldAdapter:this.fieldAdapter})}};var Ui=ve$2(()=>[]);var Wi=ve$2(()=>!1);function Tn(n,e){return n?e&&n.element.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e:n:e}var ot=class{node;selfTouched=ce$1(!1);selfDirty=ce$1(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=ce$1([]);constructor(e){this.node=e}dirty=ve$2(()=>{let e=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,i)=>i||t.nodeState.dirty(),En)});touched=ve$2(()=>{let e=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,i)=>i||t.nodeState.touched(),En)});disabledReasons=ve$2(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:S});disabled=ve$2(()=>!!this.disabledReasons().length);readonly=ve$2(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=ve$2(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=ve$2(()=>{let e=this.node.structure.parent;return e?`${e.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=ve$2(()=>{if(this.node.logicNode.logic.hasMetadata(Je)){let t=this.node.logicNode.logic.getMetadata(Je).compute(this.node.context);if(t)return i=>t(this.node.context,i)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=ve$2(()=>this.hidden()||this.disabled()||this.readonly())};var at$1=class{newRoot(e,t,i,r){return new oe({kind:`root`,fieldManager:e,value:t,pathNode:i,logic:i.builder.build(),fieldAdapter:r})}newChild(e){return new oe(e)}createNodeState(e){return new ot(e)}createValidationState(e){return new Ze(e)}createStructure(e,t){return e.createStructure(t)}};var dt$1=class{injector;rootName;submitOptions;constructor(e,t,i){this.injector=e,this.rootName=t??`${this.injector.get(In$1)}.form${Gi++}`,this.submitOptions=i}structures=new Set;createFieldManagementEffect(e){Xn$1(()=>{let t=new Set;this.markStructuresLive(e,t);for(let i of this.structures)t.has(i)||(this.structures.delete(i),le(()=>i.destroy()))},{injector:this.injector})}markStructuresLive(e,t){t.add(e);for(let i of e.children())this.markStructuresLive(i.structure,t)}};var Gi=0;var Bn=new E$2(``);function $i(n){let e,t,i;return n.length===3?[e,t,i]=n:n.length===2?Ii(n[1])?[e,t]=n:[e,i]=n:[e]=n,[e,t,i]}function Qi(...n){let[e,t,i]=$i(n),r=i?.injector??p$1(k$4),o=Al(r,()=>xe.rootCompile(t)),a=new dt$1(r,i?.name,i?.submission),d=i?.adapter??new at$1,s=oe.newRoot(a,e,o,d);a.createFieldManagementEffect(s.structure);let{experimentalWebMcpTool:u}=i??{};if(u){let x=Al(r,()=>p$1(Bn,{optional:!0}));x&&Al(r,()=>x(s.fieldTree,{name:u.name,description:u.description}))}return s.fieldTree}async function Yi(n,e){let t=le(n);if(le(t.submitState.submitting))return!1;let i=e===void 0?t.structure.root.fieldProxy:n,r={root:t.structure.root.fieldProxy,submitted:n};e=typeof e==`function`?{action:e}:e??t.structure.fieldManager.submitOptions;let o=e?.action;if(!o)throw new v$4(1915,!1);t.markAsTouched();let a=e?.onInvalid,d=Xi(t,e?.ignoreValidators);try{if(d){t.submitState.selfSubmitting.set(!0);let s=await le(()=>o?.(i,r));return s&&Zi(t,s),!s||F(s)&&s.length===0}else le(()=>a?.(i,r));return!1}finally{t.submitState.selfSubmitting.set(!1)}}function Xi(n,e){switch(e){case`all`:return!0;case`none`:return le(n.valid);default:return!le(n.invalid)}}function Zi(n,e){F(e)||(e=[e]);let t=new Map;for(let i of e){let r=mt$1(i,n.fieldTree),o=r.fieldTree(),a=t.get(o);a||(a=[],t.set(o,a)),a.push(r)}for(let[i,r]of t)i.submitState.submissionErrors.set(r)}var we=class{kind=`compat`;control;fieldTree;context;message;constructor({context:e,kind:t,control:i}){this.context=e,this.kind=t,this.control=i}};function jn(n){if(n.length===0)return null;let e={};for(let t of n)e[t.kind]=t instanceof we?t.context:t;return e}function Kn(n,e){return n===null?[]:Object.entries(n).map(([t,i])=>new we({context:i,kind:t,control:e}))}var Ji=new E$2(``);function er(n){let e=n;return typeof e.length==`number`?e.length:e.size}function Ce(n,e){return n instanceof Function?n(e):n}function Gn(n){return typeof n==`number`?isNaN(n):n===``||n===!1||n==null}function Hn(n){return n===void 0?[]:Array.isArray(n)?n:[n]}function $n(n,e){lt$1(n),T.unwrapFieldPath(n).builder.addSyncErrorRule(i=>mt$1(e(i),i.fieldTree))}function tr(n){return new ht$1(n)}function nr(n,e){return new pt$1(n,e)}var de$1=class{__brand=void 0;kind=``;fieldTree;message;constructor(e){e&&Object.assign(this,e)}};var ht$1=class extends de$1{kind=`required`};var pt$1=class extends de$1{minLength;kind=`minLength`;constructor(e,t){super(t),this.minLength=e}};var Ee=class extends de$1{kind=`parse`};function wo(n,e,t){let i=ae(n,D(),r=>{if(!(t?.when&&!t.when(r)))return typeof e==`number`?e:e(r)});ae(n,ut,({state:r})=>r.metadata(i)()),$n(n,r=>{if(Gn(r.value()))return;let o=r.state.metadata(i)();if(o!==void 0&&er(r.value())<o)return t?.error?Ce(t.error,r):nr(o,{message:Ce(t?.message,r)})})}function Mo(n,e){let t=ae(n,D(),i=>e?.when?e.when(i):!0);ae(n,ft,({state:i})=>i.metadata(t)()),$n(n,i=>{if(i.state.metadata(t)()&&Gn(i.value()))return e?.error?Ce(e.error,i):tr({message:Ce(e?.message,i)})})}function ir(n,e,t){let i=Ru({source:n,computation:()=>[],equal:S}),r=a=>{let d=t(a);i.set(Hn(d.error)),d.value!==void 0&&e(d.value),i.set(Hn(d.error))},o=()=>{i.set([])};return{errors:i.asReadonly(),setRawValue:r,reset:o}}var gt=class{field;constructor(e){this.field=e}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return jn(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return`DISABLED`;if(this.field().valid())return`VALID`;if(this.field().invalid())return`INVALID`;if(this.field().pending())return`PENDING`;throw new v$4(1910,!1)}valueAccessor=null;hasValidator(e){return e===Tg.required?this.field().required():!1}updateValueAndValidity(){}};var bt={disabled:`disabled`,disabledReasons:`disabledReasons`,dirty:`dirty`,errors:`errors`,hidden:`hidden`,invalid:`invalid`,max:`max`,maxLength:`maxLength`,min:`min`,minLength:`minLength`,name:`name`,pattern:`pattern`,pending:`pending`,readonly:`readonly`,required:`required`,touched:`touched`};var rr=(()=>{let n={};for(let e of Object.keys(bt))n[bt[e]]=e;return n})();function vt(n,e){return n[rr[e]]?.()}var yt=Object.values(bt);function Fe(){return{}}function I(n,e,t){return n[e]!==t?(n[e]=t,!0):!1}function or(n,e,t){let i;if(Qn(n)&&t.isBadInput(n))return{error:new Ee};switch(n.type){case`checkbox`:return{value:n.checked};case`number`:case`range`:case`datetime-local`:if(i=le(e),typeof i==`number`||i===null)return{value:n.value===``?null:n.valueAsNumber};break;case`date`:case`month`:case`time`:case`week`:if(i=le(e),i===null||i instanceof Date)return{value:n.valueAsDate};if(typeof i==`number`)return{value:n.valueAsNumber};break}if(n.tagName===`INPUT`&&n.type===`text`&&(i??=le(e),typeof i==`number`||i===null)){if(n.value===``)return{value:null};let r=Number(n.value);return Number.isNaN(r)?{error:new Ee}:{value:r}}return{value:n.value}}function qn(n,e){switch(n.type){case`checkbox`:n.checked=e;return;case`radio`:n.checked=e===n.value;return;case`number`:case`range`:case`datetime-local`:if(typeof e==`number`){Un(n,e);return}else if(e===null){n.value=``;return}break;case`date`:case`month`:case`time`:case`week`:if(e===null||e instanceof Date){n.valueAsDate=e;return}else if(typeof e==`number`){Un(n,e);return}}if(n.tagName===`INPUT`&&n.type===`text`){if(typeof e==`number`){n.value=isNaN(e)?``:String(e);return}if(e===null){n.value=``;return}}n.value=e}function Un(n,e){isNaN(e)?n.value=``:n.valueAsNumber=e}function Qn(n){return n.tagName===`INPUT`}function ar(n){return n.type===`date`||n.type===`datetime-local`||n.type===`month`||n.type===`time`||n.type===`week`}function dr(n,e){let t=n.getUTCFullYear(),i=String(n.getUTCMonth()+1).padStart(2,`0`);if(e===`month`)return`${t}-${i}`;return`${t}-${i}-${String(n.getUTCDate()).padStart(2,`0`)}`}function Yn(n,e,t){return e instanceof Date&&(n===`min`||n===`max`)&&(t===`date`||t===`month`)?dr(e,t):e}function lr(n,e){n.listenToCustomControlModel(i=>e.state().controlValue.set(i)),n.listenToCustomControlOutput(`touch`,()=>e.state().markAsTouched()),e.registerAsBinding(n.customControl);let t=Fe();return()=>{let i=e.state(),r=i.controlValue();I(t,`controlValue`,r)&&n.setCustomControlModelInput(r);for(let o of yt){let a;if(o===`errors`?a=e.errors():a=vt(i,o),I(t,o,a)&&(n.setInputOnDirectives(o,a),e.elementAcceptsNativeProperty(o)&&!n.customControlHasInput(o))){let d=Yn(o,a,e.nativeFormElement.type);Gk(e.renderer,e.nativeFormElement,o,d)}}}}function sr(n){return typeof n==`object`&&n!==null}function cr(n,e){let t=Fe();e.controlValueAccessor.registerOnChange(r=>{t.controlValue=r,e.state().controlValue.set(r)}),e.controlValueAccessor.registerOnTouched(()=>e.state().markAsTouched());let i=e.injector.get(Qa,null,{optional:!0,self:!0});if(i){let r;for(let s of i)sr(s)&&s.registerOnValidatorChange&&(r??=ce$1(0),s.registerOnValidatorChange(()=>{r.update(u=>u+1)}));let o=i.map(s=>typeof s==`function`?s:s.validate.bind(s)),a=Tg.compose(o),d=ve$2(()=>{r?.();return Kn(a?a(e.interopNgControl.control):null,e.interopNgControl.control)});e.parseErrorsSource.set(d)}return e.registerAsBinding({reset:()=>{let r=e.state().value();t.controlValue=r,le(()=>e.controlValueAccessor.writeValue(r))}}),()=>{let r=e.state(),o=r.controlValue();I(t,`controlValue`,o)&&le(()=>e.controlValueAccessor.writeValue(o));for(let a of yt){let d=vt(r,a);if(I(t,a,d)){let s=n.setInputOnDirectives(a,d,a===`name`?fr:void 0);a===`disabled`&&e.controlValueAccessor.setDisabledState?le(()=>e.controlValueAccessor.setDisabledState(d)):!s&&e.elementAcceptsNativeProperty(a)&&Gk(e.renderer,e.nativeFormElement,a,d)}}}}function fr(n){return n==null}function ur(n,e,t){if(typeof MutationObserver!=`function`)return;let i=new MutationObserver(r=>{r.some(o=>mr(o))&&e()});i.observe(n,{attributes:!0,attributeFilter:[`value`],characterData:!0,childList:!0,subtree:!0}),t.onDestroy(()=>i.disconnect())}function mr(n){if(n.type===`childList`||n.type===`characterData`){if(n.target instanceof Comment)return!1;for(let e of n.addedNodes)if(!(e instanceof Comment))return!0;for(let e of n.removedNodes)if(!(e instanceof Comment))return!0;return!1}return n.type===`attributes`&&n.target instanceof HTMLOptionElement}function hr(n,e,t,i){let r=!1,o=e.nativeFormElement,a=ir(()=>e.state().value(),s=>e.state().controlValue.set(s),s=>or(o,e.state().value,i));t.set(a.errors),e.onReset=()=>{a.reset();let s=e.state().value();d.controlValue=s,qn(o,s)},n.listenToDom(`input`,()=>a.setRawValue(void 0)),n.listenToDom(`blur`,()=>e.state().markAsTouched()),Qn(o)&&ar(o)&&i.watchValidity(e.destroyRef,o,()=>a.setRawValue(void 0)),e.registerAsBinding(),o.tagName===`SELECT`&&ur(o,()=>{r&&(o.value=e.state().controlValue())},e.destroyRef);let d=Fe();return()=>{let s=e.state();for(let R of yt){let Q=vt(s,R);if(I(d,R,Q)&&(n.setInputOnDirectives(R,Q),e.elementAcceptsNativeProperty(R))){let Re=Yn(R,Q,o.type);Gk(e.renderer,o,R,Re)}}let u=s.controlValue(),x=I(d,`controlValue`,u),$=o.type===`radio`&&I(d,`radioValue`,o.value);(x||$)&&qn(o,u),r=!0}}var Xn=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵprov=Y$4({token:n,factory:t=>pr.ɵfac(t),providedIn:`root`})}return n})();var pr=(()=>{class n extends Xn{document=p$1(L$2);cspNonce=p$1(bi$1,{optional:!0});injectedStyles=new WeakMap;watchValidity(t,i,r){let o=i.getRootNode();this.injectedStyles.has(o)||this.injectedStyles.set(o,this.createTransitionStyle(o));let a=d=>{let s=d;(s.animationName===`ng-valid`||s.animationName===`ng-invalid`)&&r()};i.addEventListener(`animationstart`,a),t.onDestroy(()=>{i.removeEventListener(`animationstart`,a)})}isBadInput(t){return t.validity?.badInput??!1}createTransitionStyle(t){let i=this.document.createElement(`style`);return this.cspNonce&&(i.nonce=this.cspNonce),i.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,t.nodeType===9?t.head?.appendChild(i):t.appendChild(i),i}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static ɵfac=(()=>{let t;return function(r){return(t||(t=mt$2(n)))(r||n)}})();static ɵprov=Y$4({token:n,factory:n.ɵfac})}return n})();var gr=Symbol();var Wn=new E$2(``);var Co=(()=>{class n{field=sg.required({alias:`formField`});state=ve$2(()=>this.field()());renderer=p$1(xe$1);destroyRef=p$1(ke);injector=p$1(k$4);element=p$1(K$2).nativeElement;elementIsNativeFormElement=Bk(this.element);elementAcceptsTextualValues=y9(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=t=>this.element.focus(t);controlValueAccessors=p$1(es,{optional:!0,self:!0});config=p$1(Ji,{optional:!0});validityMonitor=p$1(Xn);parseErrorsSource=ce$1(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new gt(this.state)}parseErrors=ve$2(()=>this.parseErrorsSource()?.().map(t=>m$3(l$1({},t),{fieldTree:le(this.state).fieldTree,formField:this}))??[],{equal:S});errors=ve$2(()=>this.state().errors().filter(t=>!t.formField||t.formField===this),{equal:S});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(t){this.parseErrorsSource.set(t)}set onReset(t){this.parseErrorsResetCallback=t}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:Qk(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let t=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,ve$2(()=>o(this))]);if(t.length===0)return;let i=Fe();f4({write:()=>{for(let[r,o]of t){let a=o();I(i,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(t){this.focuser(t)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(t){if(this.isFieldBinding)throw new v$4(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),t?.focus&&(this.focuser=i=>t.focus(i)),t?.reset&&(this.resetter=()=>t.reset()),Xn$1(i=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),i(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this))})},{injector:this.injector})}[gr];ɵngControlCreate(t){if(!t.hasPassThrough)if(this.controlValueAccessor)this.ɵngControlUpdate=cr(t,this);else if(t.customControl)this.ɵngControlUpdate=lr(t,this);else if(this.elementIsNativeFormElement)this.ɵngControlUpdate=hr(t,this,this.parseErrorsSource,this.validityMonitor);else throw new v$4(1914,!1)}ɵngControlUpdate;elementAcceptsNativeProperty(t){if(!this.elementIsNativeFormElement)return!1;switch(t){case`min`:case`max`:return this._elementAcceptsMinMax??=S9(this.element);case`minLength`:case`maxLength`:return this.elementAcceptsTextualValues;case`disabled`:case`required`:case`readonly`:case`name`:return!0;default:return!1}}static ɵfac=function(i){return new(i||n)};static ɵdir=G$3({type:n,selectors:[[``,`formField`,``]],inputs:{field:[1,`formField`,`field`]},exportAs:[`formField`],features:[gt$1([{provide:Wn,useExisting:n},{provide:jr,useFactory:()=>p$1(n).interopNgControl},{provide:$k,useFactory:()=>p$1(Wn,{self:!0})}]),Au(`formField`)]})}return n})();var J=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵcmp=Ae({type:s,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(t,i){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return s})();var Q={passive:!0};var $=(()=>{class s{_platform=p$1(Se$1);_ngZone=p$1(B$4);_renderer=p$1(Ge$1).createRenderer(null,null);_styleLoader=p$1(Ht$1);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return no;this._styleLoader.load(J);let t=Gt$2(e),i=this._monitoredElements.get(t);if(i)return i.subject;let r=new A$3,o=`cdk-text-field-autofilled`,a=d=>{d.animationName===`cdk-text-field-autofill-start`&&!t.classList.contains(o)?(t.classList.add(o),this._ngZone.run(()=>r.next({target:d.target,isAutofilled:!0}))):d.animationName===`cdk-text-field-autofill-end`&&t.classList.contains(o)&&(t.classList.remove(o),this._ngZone.run(()=>r.next({target:d.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(t.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(t,`animationstart`,a,Q)));return this._monitoredElements.set(t,{subject:r,unlisten:l}),r}stopMonitoring(e){let t=Gt$2(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove(`cdk-text-field-autofill-monitored`),t.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static ɵfac=function(t){return new(t||s)};static ɵprov=O$3({token:s,factory:s.ɵfac})}return s})();var W=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵmod=re$1({type:s});static ɵinj=X$2({})}return s})();var Y=new E$2(`MAT_INPUT_VALUE_ACCESSOR`);var ee=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var te=new E$2(`MAT_INPUT_CONFIG`);var Pe=(()=>{class s{_elementRef=p$1(K$2);_platform=p$1(Se$1);ngControl=p$1(jr,{optional:!0,self:!0});_autofillMonitor=p$1($);_ngZone=p$1(B$4);_formField=p$1(Ci,{optional:!0});_renderer=p$1(xe$1);_uid=p$1(an$1).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=p$1(te,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new A$3;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=gre(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Tg.required)??!1}set required(e){this._required=gre(e)}_required;get type(){return this._type}set type(e){this._type=e||`text`,this._validateType(),!this._isTextarea&&ote().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=gre(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(e=>ote().has(e));constructor(){let e=p$1(ex,{optional:!0}),t=p$1(ox,{optional:!0}),i=p$1(hse),r=p$1(Y,{optional:!0,self:!0}),o=p$1(Wn,{optional:!0,self:!0}),a=this._elementRef.nativeElement,l=a.nodeName.toLowerCase();r?ft$2(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new HR(i,o||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l===`select`,this._isTextarea=l===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&Xn$1(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type===`number`?(t.type=`text`,t.setSelectionRange(0,0),t.type=`number`):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute(`placeholder`,e):t.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){ee.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(t){return new(t||s)};static ɵdir=G$3({type:s,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(t,i){t&1&&Tt$2(`focus`,function(){return i._focusChanged(!0)})(`blur`,function(){return i._focusChanged(!1)})(`input`,function(){return i._onInput()}),t&2&&(Ur(`id`,i.id)(`disabled`,i.disabled&&!i.disabledInteractive)(`required`,i.required),xt$1(`name`,i.name||null)(`readonly`,i._getReadonlyAttribute())(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null)(`aria-invalid`,i.empty&&i.required?null:i.errorState)(`aria-required`,i.required)(`id`,i.id),Ze$1(`mat-input-server`,i._isServer)(`mat-mdc-form-field-textarea-control`,i._isInFormField&&i._isTextarea)(`mat-mdc-form-field-input-control`,i._isInFormField)(`mat-mdc-input-disabled-interactive`,i.disabledInteractive)(`mdc-text-field__input`,i._isInFormField)(`mat-mdc-native-select-inline`,i._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,He$1]},exportAs:[`matInput`],features:[gt$1([{provide:Mi,useExisting:s}]),at$3]})}return s})();var Be=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵmod=re$1({type:s});static ɵinj=X$2({imports:[qr,qr,W,Rt$2]})}return s})();var nt=[`tooltip`];var at=20;var rt=new E$2(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=p$1(k$4);return()=>fE(n,{scrollThrottle:at})}});var lt=new E$2(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var et=`tooltip-panel`;var ht={passive:!0};var dt=8;var ct=8;var pt=24;var _t=200;var mt=(()=>{class n{_elementRef=p$1(K$2);_ngZone=p$1(B$4);_platform=p$1(Se$1);_ariaDescriber=p$1(are);_focusMonitor=p$1(Qd);_dir=p$1(gr$1);_injector=p$1(k$4);_viewContainerRef=p$1(It$2);_mediaMatcher=p$1(ef);_document=p$1(L$2);_renderer=p$1(xe$1);_animationsDisabled=mr$1();_defaultOptions=p$1(lt,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=it;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=gre(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let e=gre(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=Xo(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=Xo(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new A$3;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=dt}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(hi$1(this._destroyed)).subscribe(t=>{t?t===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,`tooltip`),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(e);this._detach(),this._portal=this._portal||new Ts(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=i.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(hi$1(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(t)}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&s._origin instanceof K$2)return this._overlayRef;this._detach()}let e=this._injector.get(Dc).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${et}`,o=pE(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e).withPopoverLocation(`global`);return o.positionChanges.pipe(hi$1(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Cc(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(rt)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(hi$1(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(hi$1(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(hi$1(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(hi$1(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let e=t.getConfig().positionStrategy,i=this._getOrigin(),o=this._getOverlayPosition();e.withPositions([this._addOffset(l$1(l$1({},i.main),o.main)),this._addOffset(l$1(l$1({},i.fallback),o.fallback))])}_addOffset(t){let e=ct,i=!this._dir||this._dir.value==`ltr`;return t.originY===`top`?t.offsetY=-e:t.originY===`bottom`?t.offsetY=e:t.originX===`start`?t.offsetX=i?-e:e:t.originX===`end`&&(t.offsetX=i?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,i;e==`above`||e==`below`?i={originX:`center`,originY:e==`above`?`top`:`bottom`}:e==`before`||e==`left`&&t||e==`right`&&!t?i={originX:`start`,originY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(i={originX:`end`,originY:`center`});let{x:o,y:s}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:o,originY:s}}}_getOverlayPosition(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,i;e==`above`?i={overlayX:`center`,overlayY:`bottom`}:e==`below`?i={overlayX:`center`,overlayY:`top`}:e==`before`||e==`left`&&t||e==`right`&&!t?i={overlayX:`end`,overlayY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(i={overlayX:`start`,overlayY:`center`});let{x:o,y:s}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:o,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Qt$2(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return this.position===`above`||this.position===`below`?e===`top`?e=`bottom`:e===`bottom`&&(e=`top`):t===`end`?t=`start`:t===`start`&&(t=`end`),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:i,originY:o}=t,s;if(e===`center`?this._dir&&this._dir.value===`rtl`?s=i===`end`?`left`:`right`:s=i===`start`?`left`:`right`:s=e===`bottom`&&o===`top`?`above`:`below`,s!==this._currentPosition){let d=this._overlayRef;if(d){let b=`${this._cssClassPrefix}-${et}-`;d.removePanelClass(b+this._currentPosition),d.addPanelClass(b+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,t=>{let e=t.targetTouches?.[0],i=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener(`mouseenter`,t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,t=>{let e=t.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide()}),this._addListener(`wheel`,t=>{if(this._isTooltipVisible()){let e=this._document.elementFromPoint(t.clientX,t.clientY),i=this._elementRef.nativeElement;e!==i&&!i.contains(e)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,t),this._addListener(`touchcancel`,t)}}}_addListener(t,e){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,e,ht))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t==`function`?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!==`off`){let e=this._elementRef.nativeElement,i=e.style;(t===`on`||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`)&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect=`none`),(t===`on`||!e.draggable)&&(i.webkitUserDrag=`none`),i.touchAction=`none`,i.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,`tooltip`),this._isDestroyed||Qt$2({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type===`keydown`?this._isTooltipVisible()&&t.keyCode===27&&!Pn$1(t):!0;static ɵfac=function(e){return new(e||n)};static ɵdir=G$3({type:n,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(e,i){e&2&&Ze$1(`mat-mdc-tooltip-disabled`,i.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return n})();var it=(()=>{class n{_changeDetectorRef=p$1(Jt);_elementRef=p$1(K$2);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=mr$1();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new A$3;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>pt&&t.width>=_t}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let e=this._tooltip.nativeElement,i=this._showAnimation,o=this._hideAnimation;if(e.classList.remove(t?o:i),e.classList.add(t?i:o),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let s=getComputedStyle(e);(s.getPropertyValue(`animation-duration`)===`0s`||s.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(t))}static ɵfac=function(e){return new(e||n)};static ɵcmp=Ae({type:n,selectors:[[`mat-tooltip-component`]],viewQuery:function(e,i){if(e&1&&Uo(nt,7),e&2){let o;Ki$1(o=qi$1())&&(i._tooltip=o.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(e,i){e&1&&Tt$2(`mouseleave`,function(s){return i._handleMouseLeave(s)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(e,i){e&1&&(Fr(0,`div`,1,0),sI(`animationend`,function(s){return i._handleAnimationEnd(s)}),Fr(2,`div`,2),Na(3),Vr()()),e&2&&(Um(i.tooltipClass),Ze$1(`mdc-tooltip--multiline`,i._isMultiline),Xt$2(3),EI(i.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2})}return n})();var Yt$1=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=re$1({type:n});static ɵinj=X$2({imports:[z_,Rc,Rt$2,iE]})}return n})();function qt(e,c){if(e&1&&Wi$1(0,`div`,1)(1,`div`,2),e&2){let t=c;Vm(`background-color`,t),Xt$2(),Vm(`background-color`,t)}}function Zt(e,c){if(e&1){let t=$L();tr$1(0,`div`,3)(1,`div`,4),Na(2),xr(),tr$1(3,`button`,5),Tt$2(`click`,function(){WS(t);return KS(Br().close())}),tr$1(4,`icon`),Na(5,`close`),xr()()()}if(e&2){let t=Br();Ze$1(`bg-info`,t.banner().type===`info`||!t.banner().type)(`text-info-content`,t.banner().type===`info`||!t.banner().type)(`bg-warning`,t.banner().type===`warn`)(`text-warning-content`,t.banner().type===`warn`)(`bg-error`,t.banner().type===`error`)(`text-error-content`,t.banner().type===`error`),Xt$2(2),Bo(` `,t.banner()?.content||t.banner()?.message,` `)}}var Tt=(()=>{class e{constructor(){this._org=p$1(Wa),this._change=ce$1(0),this.is_setup=ce$1(!1),this.banner=B_(`banner`),this.environment_bar=B_(`environment_bar`),this._environment_bar_padding=Xn$1(()=>{document.body.classList.toggle(`has-environment-bar`,!!this.environment_bar())}),this.has_been_closed=ve$2(()=>this.is_setup()?(this._change(),!this.banner()?.content&&!this.banner()?.message||localStorage.getItem(`PLACE.last_banner`)===this.banner().id):!0)}async ngOnInit(){await this._org.waitUntilInitialised(),setTimeout(()=>this.is_setup.set(!0),500)}async close(){localStorage.setItem(`PLACE.last_banner`,this.banner()?.id||``),this._change.set(Date.now())}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Ae({type:e,selectors:[[`global-banner`]],decls:2,vars:2,consts:[[1,`flex`,`w-full`,`items-center`,`space-x-4`,`p-4`,`print:hidden`,3,`bg-info`,`text-info-content`,`bg-warning`,`text-warning-content`,`bg-error`,`text-error-content`],[`aria-hidden`,`true`,1,`environment-bar`,`top-0`,`print:hidden`],[`aria-hidden`,`true`,1,`environment-bar`,`bottom-0`,`print:hidden`],[1,`flex`,`w-full`,`items-center`,`space-x-4`,`p-4`,`print:hidden`],[1,`flex-1`],[`icon`,``,`matRipple`,``,3,`click`]],template:function(n,i){if(n&1&&(Pr(0,qt,2,4),Pr(1,Zt,6,13,`div`,0)),n&2){let m;kr((m=i.environment_bar())?0:-1,m),Xt$2(),kr(!i.has_been_closed()&&i.banner()?1:-1)}},dependencies:[Wse],styles:[`[_nghost-%COMP%]{display:block;width:100%}.environment-bar[_ngcontent-%COMP%]{height:.5rem;left:0;pointer-events:none;position:fixed;width:100%;z-index:10000}`]})}}return e})();function Kt(e,c){e&1&&Oa(0,`div`,2)}var Yt=new E$2(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`);var It=(()=>{class e{_elementRef=p$1(K$2);_ngZone=p$1(B$4);_changeDetectorRef=p$1(Jt);_renderer=p$1(xe$1);_cleanupTransitionEnd;constructor(){let t=CV(),n=p$1(Yt,{optional:!0});this._isNoopAnimation=t===`di-disabled`,t===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),n&&(n.color&&(this.color=this._defaultColor=n.color),this.mode=n.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor=`primary`;get value(){return this._value}set value(t){this._value=Ot(t||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(t){this._bufferValue=Ot(t||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new W$6;get mode(){return this._mode}set mode(t){this._mode=t,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=t=>{this.animationEnd.observers.length===0||!t.target||!t.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(n){return new(n||e)};static ɵcmp=Ae({type:e,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(n,i){n&2&&(xt$1(`aria-valuenow`,i._isIndeterminate()?null:i.value)(`mode`,i.mode),Um(`mat-`+i.color),Ze$1(`_mat-animation-noopable`,i._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!i._isNoopAnimation)(`mdc-linear-progress--indeterminate`,i._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,v0],bufferValue:[2,`bufferValue`,`bufferValue`,v0],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(n,i){n&1&&(Fr(0,`div`,0),Oa(1,`div`,1),Pr(2,Kt,1,0,`div`,2),Vr(),Fr(3,`div`,3),Oa(4,`span`,4),Vr(),Fr(5,`div`,5),Oa(6,`span`,4),Vr()),n&2&&(Xt$2(),Vm(`flex-basis`,i._getBufferBarFlexBasis()),Xt$2(),kr(i.mode===`buffer`?2:-1),Xt$2(),Vm(`transform`,i._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
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
`],encapsulation:2})}return e})();function Ot(e,c=0,t=100){return Math.max(c,Math.min(t,e))}var Pt=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=re$1({type:e});static ɵinj=X$2({imports:[Rt$2]})}return e})();function Qt(e,c){e&1&&Na(0,` Enter the address of your PlaceOS server to connect this app. `)}function $t(e,c){e&1&&Na(0,` Enter your work email to find your PlaceOS server and connect this app. `)}function en(e,c){if(e&1&&(tr$1(0,`p`,6),Na(1),xr()),e&2){let t=Br();Xt$2(),Bo(` `,t.error(),` `)}}function tn(e,c){if(e&1&&(tr$1(0,`p`,7),Na(1),xr()),e&2){let t=Br();Xt$2(),Bo(` Settings provided by your administrator will be applied automatically in `,t.auto_accept_in(),`s. `)}}function nn(e,c){if(e&1){let t=$L();tr$1(0,`div`,8)(1,`label`,12),Na(2,`Server Address`),xr(),tr$1(3,`mat-form-field`,13)(4,`icon`,14),Na(5,`dns`),xr(),tr$1(6,`input`,15),DI(`ngModelChange`,function(i){WS(t);let m=Br();return IP(m.server_address,i)||(m.server_address=i),KS(i)}),xr(),ow(),xr()(),tr$1(7,`div`,8)(8,`label`,16),Na(9,`API Key (optional)`),xr(),tr$1(10,`mat-form-field`,13)(11,`icon`,14),Na(12,`key`),xr(),tr$1(13,`input`,17),DI(`ngModelChange`,function(i){WS(t);let m=Br();return IP(m.api_key,i)||(m.api_key=i),KS(i)}),xr(),ow(),xr(),tr$1(14,`p`,18),Na(15,` When set, the app authenticates with this key instead of asking you to sign in. `),xr()()}if(e&2){let t=Br();Xt$2(6),vI(`ngModel`,t.server_address),Yi$1(`disabled`,t.loading()),sw(),Xt$2(7),vI(`ngModel`,t.api_key),Yi$1(`disabled`,t.loading()),sw()}}function rn(e,c){if(e&1){let t=$L();tr$1(0,`div`,8)(1,`label`,19),Na(2,`Work Email`),xr(),tr$1(3,`mat-form-field`,13)(4,`icon`,14),Na(5,`mail`),xr(),tr$1(6,`input`,20),DI(`ngModelChange`,function(i){WS(t);let m=Br();return IP(m.email,i)||(m.email=i),KS(i)}),xr(),ow(),xr()()}if(e&2){let t=Br();Xt$2(6),vI(`ngModel`,t.email),Yi$1(`disabled`,t.loading()),sw()}}function an(e,c){e&1&&Na(0,` Find my server using my work email `)}function on(e,c){e&1&&Na(0,` Enter a server address manually `)}var Bt=15;var Ft=(()=>{class e{constructor(){this.serverError=sg(``),this.autoAccept=sg(!1),this.domainSet=s4(),this.email=ce$1(hF()??``),this.server_address=ce$1(Ha()??``),this.api_key=ce$1(Wu()??``),this.manual_entry=ce$1(!!Ha()),this.error=ce$1(``),this.loading=ce$1(!1),this.auto_accept_in=ce$1(0),this._auto_accept_timer=null,Xn$1(()=>{let t=this.serverError();t&&(this.error.set(t),le(()=>this.stopAutoAccept()))}),Xn$1(()=>{this.autoAccept()&&le(this.server_address)&&le(()=>this.startAutoAccept())})}ngOnDestroy(){this.stopAutoAccept()}resetAutoAccept(){this._auto_accept_timer&&this.auto_accept_in.set(Bt)}startAutoAccept(){this.auto_accept_in.set(Bt),!this._auto_accept_timer&&(this._auto_accept_timer=setInterval(()=>{let t=this.auto_accept_in()-1;this.auto_accept_in.set(t),!(t>0)&&(this.stopAutoAccept(),this.submit())},1e3))}stopAutoAccept(){this._auto_accept_timer&&clearInterval(this._auto_accept_timer),this._auto_accept_timer=null,this.auto_accept_in.set(0)}toggleManualEntry(){this.loading()||(this.manual_entry.update(t=>!t),this.error.set(``))}async submit(){if(this.loading())return;if(this.stopAutoAccept(),this.manual_entry())return this.submitManual();let t=this.email().trim();if(!t){this.error.set(`A work email is required.`);return}this.loading.set(!0),this.error.set(``);try{let n=await Wh(t);$h(t),ju(n),hE(``),this.domainSet.emit(n)}catch{this.error.set(`Unable to find a server for this email address.`)}finally{this.loading.set(!1)}}submitManual(){let t=_E(this.server_address());if(!t){this.error.set(`A valid server address is required.`);return}this.error.set(``),ju(t),hE(this.api_key()),this.domainSet.emit(t)}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Ae({type:e,selectors:[[`native-domain-overlay`]],hostBindings:function(n,i){n&1&&Tt$2(`pointerdown`,function(){return i.resetAutoAccept()},LN)(`keydown`,function(){return i.resetAutoAccept()},LN)},inputs:{serverError:[1,`serverError`],autoAccept:[1,`autoAccept`]},outputs:{domainSet:`domainSet`},decls:19,vars:8,consts:[[1,`bg-base-200`,`pointer-events-auto`,`fixed`,`inset-0`,`z-9999`,`flex`,`items-center`,`justify-center`,`p-4`],[1,`border-base-300`,`bg-base-100`,`flex`,`w-full`,`max-w-md`,`flex-col`,`rounded-sm`,`border`,`shadow-sm`,3,`ngSubmit`],[1,`bg-base-200`,`m-2`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[1,`flex`,`flex-col`,`space-y-4`,`p-4`],[1,`text-sm`,`opacity-60`],[1,`bg-error/10`,`text-error`,`rounded-sm`,`px-3`,`py-2`,`text-xs`],[1,`bg-info/10`,`text-info`,`rounded-sm`,`px-3`,`py-2`,`text-xs`],[1,`flex`,`w-full`,`flex-col`],[`type`,`button`,1,`self-start`,`text-sm`,`underline`,`opacity-60`,3,`click`,`disabled`],[1,`bg-base-200`,`m-2`,`flex`,`items-center`,`justify-center`,`space-x-2`,`rounded-sm`,`border-none`,`p-2`],[`btn`,``,`matRipple`,``,`type`,`submit`,1,`flex-1`,3,`disabled`],[`for`,`server-address`],[`appearance`,`outline`,1,`w-full`],[`matPrefix`,``],[`matInput`,``,`name`,`server-address`,`placeholder`,`placeos.company.com`,`type`,`text`,`autocapitalize`,`off`,`autocomplete`,`url`,`spellcheck`,`false`,`required`,``,3,`ngModelChange`,`ngModel`,`disabled`],[`for`,`api-key`],[`matInput`,``,`name`,`api-key`,`placeholder`,`Leave empty to sign in`,`type`,`password`,`autocapitalize`,`off`,`autocomplete`,`off`,`spellcheck`,`false`,3,`ngModelChange`,`ngModel`,`disabled`],[1,`text-xs`,`opacity-60`],[`for`,`email`],[`matInput`,``,`name`,`email`,`placeholder`,`name@company.com`,`type`,`email`,`autocapitalize`,`off`,`autocomplete`,`email`,`spellcheck`,`false`,`required`,``,3,`ngModelChange`,`ngModel`,`disabled`]],template:function(n,i){n&1&&(tr$1(0,`div`,0)(1,`form`,1),Tt$2(`ngSubmit`,function(){return i.submit()}),tr$1(2,`header`,2)(3,`h2`,3),Na(4,`Connect to Server`),xr()(),tr$1(5,`main`,4)(6,`p`,5),Pr(7,Qt,1,0)(8,$t,1,0),xr(),Pr(9,en,2,1,`p`,6),Pr(10,tn,2,1,`p`,7),Pr(11,nn,16,4)(12,rn,7,2,`div`,8),tr$1(13,`button`,9),Tt$2(`click`,function(){return i.toggleManualEntry()}),Pr(14,an,1,0)(15,on,1,0),xr()(),tr$1(16,`footer`,10)(17,`button`,11),Na(18),xr()()()()),n&2&&(Xt$2(7),kr(i.manual_entry()?7:8),Xt$2(2),kr(i.error()?9:-1),Xt$2(),kr(i.auto_accept_in()>0?10:-1),Xt$2(),kr(i.manual_entry()?11:12),Xt$2(2),Yi$1(`disabled`,i.loading()),Xt$2(),kr(i.manual_entry()?14:15),Xt$2(3),Yi$1(`disabled`,i.loading()),Xt$2(),Bo(` `,i.loading()?`Looking up...`:`Connect`,` `))},dependencies:[R9,A9,xA,v9,D9,ZA,sx,ex,Wse,qr,Cn,Si,Be,Pe,oE,rE],encapsulation:2})}}return e})();function sn(e,c){if(e&1){let t=$L();tr$1(0,`aside`,0)(1,`div`,1)(2,`h2`,2),Na(3),xr(),tr$1(4,`p`,3),Na(5),xr()(),tr$1(6,`button`,4),Tt$2(`click`,function(){WS(t);return KS(Br().reloadApp())}),tr$1(7,`icon`),Na(8,`refresh`),xr()()()}if(e&2){let t=c;Xt$2(3),Bo(` `,t.message||`Update available`,` `),Xt$2(2),Bo(` `,t.details||`Refresh the page to get the new version of the application`,` `),Xt$2(),Yi$1(`matTooltip`,t.action||`Reload App`)}}var Lt=(()=>{class e{constructor(){this.update=jI()}reloadApp(){location.reload()}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Ae({type:e,selectors:[[`placeos-service-worker-update-card`]],decls:1,vars:1,consts:[[`role`,`status`,`aria-live`,`assertive`,1,`border-base-300`,`bg-base-100`,`text-base-content`,`pointer-events-auto`,`fixed`,`right-4`,`bottom-4`,`z-9999`,`flex`,`w-[20rem]`,`max-w-[calc(100vw-2rem)]`,`items-center`,`gap-3`,`rounded-lg`,`border`,`p-4`,`shadow-xl`],[1,`min-w-0`,`flex-1`],[1,`m-0`,`text-sm`,`leading-tight`,`font-medium`],[1,`m-0`,`mt-1`,`text-xs`,`opacity-70`],[`icon`,``,`default`,``,3,`click`,`matTooltip`]],template:function(n,i){if(n&1&&Pr(0,sn,9,3,`aside`,0),n&2){let m;kr((m=i.update())?0:-1,m)}},dependencies:[Wse,Yt$1,mt],encapsulation:2})}}return e})();function ln(e,c){if(e&1){let t=$L();tr$1(0,`native-domain-overlay`,3),Tt$2(`domainSet`,function(){WS(t);return KS(Br().onDomainSet())}),xr()}if(e&2){let t=Br();Yi$1(`serverError`,t.domain_error())(`autoAccept`,t.auto_confirm())}}function mn(e,c){e&1&&(tr$1(0,`div`,1),Na(1),Hm(2,`translate`),xr()),e&2&&(Xt$2(),Bo(` `,PP(2,1,`COMMON.SERVER_DOWN`),` `))}function cn(e,c){if(e&1){let t=$L();tr$1(0,`div`,4)(1,`p`,5),Na(2),xr(),tr$1(3,`button`,6),Tt$2(`click`,function(){WS(t);return KS(Br(2).retry())}),Na(4,` Try again `),xr()()}if(e&2){let t=Br(2);Xt$2(2),Bo(` `,t.initialisation_error(),` `)}}function dn(e,c){if(e&1&&(tr$1(0,`div`,7)(1,`p`,8),Na(2),xr()(),tr$1(3,`div`,9),Wi$1(4,`mat-progress-bar`,10),xr()),e&2){let t=Br(2);Xt$2(2),EI(t.message())}}function pn(e,c){if(e&1&&(tr$1(0,`div`,2),Pr(1,cn,5,1,`div`,4)(2,dn,5,1),xr()),e&2){let t=Br();Xt$2(),kr(t.initialisation_error()?1:2)}}var Vt=(()=>{class e extends be$2{constructor(){super(...arguments),this._placeos=p$1(XF),this.online=ce$1(!0),this.connection_checked=ce$1(!1),this.message=qF(),this.show_domain_overlay=VF(),this.domain_error=YF(),this.auto_confirm=KF(),this.initialisation_error=GI(),this.initialisation_complete=WI(),this.loading=ve$2(()=>!this.initialisation_complete())}retry(){qI()}onDomainSet(){this._placeos.onNativeDomainSet()}ngOnInit(){let t=()=>{this.online.set(L9()),this.online()&&(this.connection_checked.set(!0),this.clearTimeout(`initial-connection`))};this.timeout(`initial-connection`,()=>{t(),this.connection_checked.set(!0)},5e3),t(),this.interval(`online`,t,1e3)}static{this.ɵfac=(()=>{let t;return function(i){return(t||(t=mt$2(e)))(i||e)}})()}static{this.ɵcmp=Ae({type:e,selectors:[[`global-loading`]],features:[Ee$1],decls:4,vars:3,consts:[[3,`serverError`,`autoAccept`],[1,`bg-error`,`fixed`,`top-2`,`left-1/2`,`z-9999`,`-translate-x-1/2`,`rounded-3xl`,`px-4`,`py-2`,`text-xs`,`text-white`,`shadow-sm`],[`loader`,``,1,`bg-base-300`,`pointer-events-auto`,`fixed`,`inset-0`,`z-9998`,`flex`,`flex-col`,`items-center`,`justify-end`,`space-y-2`,`p-4`],[3,`domainSet`,`serverError`,`autoAccept`],[1,`border-base-300`,`bg-base-100`,`w-[24rem]`,`max-w-[calc(100vw-2rem)]`,`rounded-lg`,`border`,`p-4`,`text-center`,`text-xs`,`shadow-sm`],[`initialisation-error`,``],[`type`,`button`,1,`bg-primary`,`text-primary-content`,`mt-3`,`rounded`,`px-4`,`py-2`,3,`click`],[1,`border-base-300`,`bg-base-100`,`w-[24rem]`,`max-w-[calc(100vw-2rem)]`,`rounded-lg`,`border`,`p-2`,`text-center`,`text-xs`,`shadow-sm`],[1,`text-center`,`font-mono`],[1,`border-base-300`,`w-[24rem]`,`max-w-[calc(100vw-2rem)]`,`overflow-hidden`,`rounded-full`,`border`,`shadow-sm`],[`mode`,`indeterminate`,1,`scale-150`,`rounded-sm`]],template:function(n,i){n&1&&(Pr(0,ln,1,2,`native-domain-overlay`,0),Pr(1,mn,3,3,`div`,1),Pr(2,pn,3,1,`div`,2),Wi$1(3,`placeos-service-worker-update-card`)),n&2&&(kr(i.show_domain_overlay()?0:-1),Xt$2(),kr(i.connection_checked()&&!i.online()?1:-1),Xt$2(),kr(i.loading()||i.initialisation_error()?2:-1))},dependencies:[Pt,It,Ft,Lt,f$2],styles:[`[_nghost-%COMP%]{pointer-events:none}[loader][_ngcontent-%COMP%]{background-image:linear-gradient(to right,#f15b55,#f68c50)}`]})}}return e})();var un=()=>[import(`./chunk-BJauD_pL.js`).then(e=>e.SettingsDebugPanelComponent)];function gn(e,c){if(e&1){let t=$L();tr$1(0,`settings-debug-panel`,0),DI(`showChange`,function(i){WS(t);let m=Br();return IP(m.show,i)||(m.show=i),KS(i)}),xr()}if(e&2){let t=Br();vI(`show`,t.show),Yi$1(`schema`,t.schema())}}var Rt=(()=>{class e extends be$2{constructor(){super(...arguments),this._hotkey=p$1(ws),this._loaded=ce$1(!1),this.loadSchema=sg.required(),this.schema=ce$1(null),this.show=ce$1(!1)}ngOnInit(){this.subscription(`toggle`,this._hotkey.listen([`Control`,`Alt`,`Shift`,`KeyS`],()=>{this.toggle()}))}async toggle(){if(this.show()){this.show.set(!1);return}if(!this._loaded()){try{this.schema.set(await this.loadSchema()())}catch{this.schema.set(null)}this._loaded.set(!0)}this.show.set(!0)}static{this.ɵfac=(()=>{let t;return function(i){return(t||(t=mt$2(e)))(i||e)}})()}static{this.ɵcmp=Ae({type:e,selectors:[[`settings-debug-panel-launcher`]],inputs:{loadSchema:[1,`loadSchema`]},features:[Ee$1],decls:3,vars:1,consts:[[3,`showChange`,`show`,`schema`]],template:function(n,i){n&1&&(zD(0,gn,1,2),wL(1,0,un)),n&2&&(Xt$2(),LL(i.show()))},encapsulation:2})}}return e})();var fn=()=>[`/`];var Gt=(()=>{class e{static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Ae({type:e,selectors:[[`app-unauthorised`]],decls:15,vars:11,consts:[[`unauthorised`,``,1,`absolute`,`inset-0`],[1,`border-base-300`,`bg-base-100`,`text-base-content`,`mx-auto`,`my-4`,`flex`,`w-104`,`max-w-[calc(100%-1rem)]`,`flex-col`,`gap-2`,`rounded-xl`,`border`,`p-4`,`text-center`,`shadow-lg`],[1,`text-4xl`],[1,`py-4`],[`btn`,``,3,`routerLink`]],template:function(n,i){n&1&&(tr$1(0,`div`,0)(1,`div`,1)(2,`h1`,2),Na(3,`403`),xr(),tr$1(4,`h3`),Na(5),Hm(6,`translate`),xr(),tr$1(7,`p`,3),Na(8),Hm(9,`translate`),xr(),tr$1(10,`p`),Na(11),Hm(12,`translate`),xr(),tr$1(13,`a`,4),Na(14,`Try Again`),xr()()()),n&2&&(Xt$2(5),EI(PP(6,4,`COMMON.FORBIDDEN`)),Xt$2(3),Bo(` `,PP(9,6,`COMMON.INVALID_PAGE_PERMISSIONS`),` `),Xt$2(3),Bo(` `,PP(12,8,`COMMON.CONTACT_ADMIN`),` `),Xt$2(2),Yi$1(`routerLink`,bP(10,fn)))},dependencies:[kt$1,f$2],styles:[`[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center}[unauthorised][_ngcontent-%COMP%]{background-image:linear-gradient(to right,#c62828,#ef5350)}`]})}}return e})();var _n=20*1e3;function hn(){try{return!!rn$1()}catch{return!1}}function bn(e,c){return new Promise(t=>{let n=setTimeout(()=>t(!1),c);e.then(()=>{clearTimeout(n),t(!0)},()=>{clearTimeout(n),t(!1)})})}var me=class{};var ce=(()=>{class e{constructor(){this._router=p$1(q$6),this._settings=p$1(ln$1),this._org=p$1(Wa),this._injector=p$1(k$4),this._access=p$1(me,{optional:!0})}async canActivate(t,n){return this.checkUser()}async canLoad(t,n){return this.checkUser()}async canActivateChild(t,n){return this.checkUser()}async checkUser(){if(!await this.waitForBackend(Promise.all([this._org.waitUntilInitialised(),Jh(ks,Boolean,this._injector)])))return this.offlineAccess();let n=this._access?.group?[this._access.group]:this._settings.get(`app.allow_access_groups`)||[],i=await this.useGroupSubsystemAccess(),m=!1;if(i){let N=await this.waitForUser();if(!N)return this.offlineAccess();m=this.checkSubsystemAccess(N),qr$1(`ACCESS`,`Checking subsystem access`,m)}else if(!n.length)m=!0,qr$1(`ACCESS`,`No access groups`,m);else{let N=await this.waitForUser();if(!N)return this.offlineAccess();m=!!(N&&n.find(Ht=>N.groups.includes(Ht))),qr$1(`ACCESS`,`Checking access groups`,m)}return m||this._router.navigate([`/unauthorised`]),!!m}async waitForUser(){if(!await this.waitForBackend(M9(P9(),Boolean)))return null;let n=null;return await this.waitForBackend(Vee(Ul).then(m=>n=m))?n:null}async waitForBackend(t){return bn(t,_n)}offlineAccess(){return hn()?(qr$1(`ACCESS`,`Backend unreachable. Continuing with cached credentials.`),!0):(qr$1(`ACCESS`,`Backend unreachable and no cached credentials.`,void 0,`warn`),this._router.navigate([`/unauthorised`]),!1)}async useGroupSubsystemAccess(){let t=Ed()?.config?.use_group_subsystem_access;return t===!0||t===`true`}checkSubsystemAccess(t){if(!t)return!1;let i=(`${this._settings.get(`app.access_subsystem`)||``}`.trim()||`${this._settings.app_name||``}`).trim().toLowerCase();return i?mI(i,nt$3.Read):!1}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵprov=Y$4({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();function zt(){qr$1(`MOCKS`,`No mocks available in production`)}var Ut=(()=>{class e{constructor(){this.load_settings_schema=()=>import(`./chunk-DAllpIr12.js`),this._placeos=p$1(XF),this._uploads=p$1(w$),this._ai=p$1(At$1)}async ngOnInit(){JF(zt),await this._placeos.init(),this._uploads.init(),await this._ai.load(Ed()?.config?.org_zone),this._ai.enabled()&&await this._ai.loadRecent()}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵcmp=Ae({type:e,selectors:[[`app-root`]],decls:8,vars:4,consts:[[`href`,`#main-content`,1,`skip-link`],[`id`,`main-content`,`tabindex`,`-1`,1,`relative`,`h-1/2`,`w-full`,`flex-1`],[3,`loadSchema`]],template:function(n,i){n&1&&(tr$1(0,`a`,0),Na(1),Hm(2,`translate`),xr(),Wi$1(3,`global-banner`),tr$1(4,`main`,1),Wi$1(5,`router-outlet`),xr(),Wi$1(6,`global-loading`)(7,`settings-debug-panel-launcher`,2)),n&2&&(Xt$2(),EI(PP(2,2,`SIGNAGE_MANAGER.SKIP_TO_CONTENT`)),Xt$2(6),Yi$1(`loadSchema`,i.load_settings_schema))},dependencies:[Tt,Ar,Vt,Rt,f$2],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}`]})}}return e})();var Xt={production:!0};function vn(e,c,t=!1){return e||c>0||t}var Wt=async()=>{let e=p$1(ci$1),c=p$1(q$6),t=p$1(Wa),n=p$1(k$4);return await Promise.all([t.waitUntilInitialised(),Jh(ks,Boolean,n),Jh(e.signage_groups_loaded,Boolean,n)]),vn(e.can_manage_all_groups(),e.signage_groups().length,e.signage_groups_failed())?!0:c.parseUrl(`/unauthorised`)};var de=async()=>{let e=p$1(ln$1),c=p$1(q$6);return await p$1(Wa).waitUntilInitialised(),e.get(`app.templates_enabled`)?!0:c.parseUrl(`/media`)};var yn=[{path:`unauthorised`,component:Gt},{path:``,canActivate:[ce],canActivateChild:[ce,Wt],children:[{path:`media`,loadComponent:()=>import(`./chunk-BChIuQ8l2.js`).then(e=>e.MediaSectionComponent)},{path:`playlists/:id`,loadComponent:()=>import(`./chunk-CbESy4mc.js`).then(e=>e.PlaylistsSectionComponent)},{path:`playlists`,loadComponent:()=>import(`./chunk-CbESy4mc.js`).then(e=>e.PlaylistsSectionComponent)},{path:`templates/:id`,canActivate:[de],loadComponent:()=>import(`./chunk-CRHRBpUP2.js`).then(e=>e.TemplatesSectionComponent)},{path:`templates`,canActivate:[de],loadComponent:()=>import(`./chunk-CRHRBpUP2.js`).then(e=>e.TemplatesSectionComponent)},{path:`schedules`,loadComponent:()=>import(`./chunk-C5T_LtWk2.js`).then(e=>e.SchedulesSectionComponent)},{path:`displays/:id`,loadComponent:()=>import(`./chunk-DCXVBMoK2.js`).then(e=>e.DisplaysSectionComponent)},{path:`displays`,loadComponent:()=>import(`./chunk-DCXVBMoK2.js`).then(e=>e.DisplaysSectionComponent)},{path:`branding`,loadComponent:()=>import(`./chunk-PXn8nGqz2.js`).then(e=>e.BrandingComponent)},{path:`groups`,loadComponent:()=>import(`./chunk-upO69bPc.js`).then(e=>e.GroupsSectionComponent)},{path:`zones/:id`,loadComponent:()=>import(`./chunk-JLg54CK42.js`).then(e=>e.ZonesSectionComponent)},{path:`zones`,loadComponent:()=>import(`./chunk-JLg54CK42.js`).then(e=>e.ZonesSectionComponent)},{path:`**`,redirectTo:`media`}]}];uk(Ut,{providers:[ub(),GA(`ngsw-worker.js`,{enabled:Xt.production}),FP(),Qw(()=>MI(p$1(Kee).locale)),is(yn,os(),Ci$1()),{provide:Ma,deps:[Kee],useFactory:e=>e.locale}]}).catch(e=>console.error(e));export{J$1 as A,be$1 as B,Qt$1 as C,q$1 as D,m as E,Xt$1 as F,d$1 as G,ve$1 as H,Y$1 as I,ct$2 as J,At$1 as K,kt as L,Ot$2 as M,Pt$2 as N,Et$1 as O,W$2 as P,k$3 as Q,s as R,Ht as S,jt as T,P$1 as U,ge$1 as V,b as W,D$2 as X,v$2 as Y,O$2 as Z,qr as _,Ci as a,Bt$1 as b,Mi as c,Qi as d,Si as f,fn$1 as g,Yi as h,Pe as i,M as j,Ft$1 as k,Mo as l,Wn as m,mt as n,Cn as o,Ue as p,B$3 as q,Be as r,Co as s,Yt$1 as t,Ni as u,wo as v,ci$1 as w,H$1 as x,xi as y,Ce$1 as z};