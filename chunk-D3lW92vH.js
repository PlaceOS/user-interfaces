import{n as m,t as l}from"./chunk-BwCtja5l.js";import{$ as LD,$n as dC,$r as or$2,Ai as w$1,At as Qt,B as Hs,Bi as y,Bn as av,Ci as uM,Cn as Yy,Ct as Pd,D as EU,Di as vU,Dr as j_,Er as jT,Ft as RS,G as J_,Hi as ya$1,Ir as le,Jn as cM,Jt as TE,Ki as zS,Ln as aM,Lr as li,Or as jd,Pn as _v,Q as Ky,Qn as cv,Qr as oS,Qt as Tv,R as H_,Ri as xv,Rn as aS,S as De,Sn as Yg,St as Pa$1,T as Ds,Tt as Py,U as It$1,Un as bU,V as Ht$1,Vi as yU,Vn as bE,Vr as mC,Wi as z$1,Wr as mv,X as Kb,Yr as nv,Zr as oM,_i as sS,_n as Xy,ai as qM,an as V_,b as DU,br as ie,bt as PS,cr as fe,ct as N,d as B_,dn as WM,dr as gC,dt as Nr,ei as ov,fn as WS,ft as Nv,gi as sM,gt as Oc,h as By,hn as Xs,i as $v,ji as wS,jt as Qy,kn as _E,kr as jm,lr as fh,mr as gv,oi as qS,on as Vd,p as Bd,pr as gU,qr as nS,r as $d,ri as pf,rr as dh,rt as Le,si as q_,tr as db,tt as L_,v as Cm,vn as Y$2,vr as iS,wr as jN,x as Da$1,xi as tS,xn as Yb,xt as P_,yr as ia,z as Hd,zn as at,zr as lv,zt as Rx}from"./chunk-B9HQ5Rvv.js";import{m as ts,s as as,t as $t$1}from"./chunk-L1xn0QWz.js";import{A as Pr,Ca as xn,Ct as zi,Ea as yo$1,En as K$2,Et as f,Fr as ae,Gt as Ce,Ha as L$1,Hn as Oa$1,Hr as bf,It as A_,Jr as ci$1,K as _d,La as H$1,Li as n0,N as Sr$1,Na as $e,Nt as $_,O as Pd$1,On as Kn,Ot as O$1,Pi as lt,Pr as ad,Pt as $i,Q as cs,Qi as rt,Si as it,Sn as It$2,Tn as Jy,Tr as Xy$1,Ua as Lt,Ui as ot$1,Un as Oe,Ut as Bt$2,Vn as O0,Wn as Og,Wt as C_,Xa as as$1,Xt as Di,Yn as Pe,Za as ce,ai as et,ao as oe,ar as S_,br as Wo$1,bt as xa,ca as ug,ct as ka,da as v$1,dn as H_$1,dt as le$1,en as E$1,eo as jt$2,fr as Up,h as Hd$1,ha as vt$1,hi as gn,in as Et$1,io as ns,ir as S0,k as Pe$1,ki as jt$1,kn as Ko$1,ln as Gt$1,n as Aa$1,nn as Ei,pa as vn,q as ae$1,qr as ce$1,ro as m$1,rt as hf,sa as ue,si as fl,so as st,ur as U_,va as wr,vn as Ii,wi as je,wt as z$2,xa as xi,zt as Ai}from"./main-W665ZVD7.js";import{t as m$2}from"./chunk-YviMEBIZ.js";import{i as Tt$1,o as l$1,r as Q$2,s as vt$2}from"./chunk-CrP_x-dw.js";import{n as pe,t as ce$2}from"./chunk-bY4UG1SF.js";import{t as f$1}from"./chunk-KSeM0C18.js";import{_ as qr$1,a as Eo$1,c as Fo$1,d as Mo$1,f as Ni,h as Xi,i as Ei$1,n as Pe$2,o as Fi,p as Qn$1,s as Fn,t as Be}from"./chunk-B9jOmwqp.js";import{i as je$1,o as J$2,r as Qt$1,s as Z$2,t as Gt$2}from"./chunk-DHjVPOO8.js";import{h as Wt$1,t as At$1}from"./chunk-DndUmhyi.js";import{d as ee,f as jt$3,n as Bt$3,o as T$1,r as Ht$2,t as $e$1}from"./chunk-C0l8a0QJ.js";import{n as mt,t as Yt$1}from"./chunk-CNpfOuc4.js";import{t as k}from"./chunk-KJls8vcI.js";import{n as oe$1,t as fe$1}from"./chunk-CherXio7.js";import{t as H$2}from"./chunk-Cq-nPOpW2.js";import{a as X$2,i as Te,r as J$3}from"./chunk-BVEscx5u2.js";import{a as ee$1,i as P$1,n as Ht$3,r as Lt$1,t as Bt$4}from"./chunk-D6D1RV7F2.js";import{t as ie$1}from"./chunk-DMqkMsup2.js";import{r as g}from"./chunk-DohKWI4g2.js";import{t as N$1}from"./chunk-pcocpUcJ2.js";function Hr(o,r){let t=Fr(r)?new r(0):E$1(r,0);return t.setFullYear(o.getFullYear(),o.getMonth(),o.getDate()),t.setHours(o.getHours(),o.getMinutes(),o.getSeconds(),o.getMilliseconds()),t}function Fr(o){return typeof o==`function`&&o.prototype?.constructor===o}var Br=10;var M=class{subPriority=0;validate(r,t){return!0}};var Y$1=class extends M{constructor(r,t,e,s,i){super(),this.value=r,this.validateValue=t,this.setValue=e,this.priority=s,i&&(this.subPriority=i)}validate(r,t){return this.validateValue(r,this.value,t)}set(r,t,e){return this.setValue(r,t,this.value,e)}};var E=class extends M{priority=Br;subPriority=-1;constructor(r,t){super(),this.context=r||(e=>E$1(t,e))}set(r,t){return t.timestampIsSet?r:E$1(r,Hr(r,this.context))}};var n=class{run(r,t,e,s){let i=this.parse(r,t,e,s);return i?{setter:new Y$1(i.value,this.validate,this.set,this.priority,this.subPriority),rest:i.rest}:null}validate(r,t,e){return!0}};var I=class extends n{priority=140;parse(r,t,e){switch(t){case`G`:case`GG`:case`GGG`:return e.era(r,{width:`abbreviated`})||e.era(r,{width:`narrow`});case`GGGGG`:return e.era(r,{width:`narrow`});default:return e.era(r,{width:`wide`})||e.era(r,{width:`abbreviated`})||e.era(r,{width:`narrow`})}}set(r,t,e){return t.era=e,r.setFullYear(e,0,1),r.setHours(0,0,0,0),r}incompatibleTokens=[`R`,`u`,`t`,`T`]};var c={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/};var x={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function p(o,r){return o&&{value:r(o.value),rest:o.rest}}function u(o,r){let t=r.match(o);return t?{value:parseInt(t[0],10),rest:r.slice(t[0].length)}:null}function h(o,r){let t=r.match(o);if(!t)return null;if(t[0]===`Z`)return{value:0,rest:r.slice(1)};let e=t[1]===`+`?1:-1,s=t[2]?parseInt(t[2],10):0,i=t[3]?parseInt(t[3],10):0,l=t[5]?parseInt(t[5],10):0;return{value:e*(s*ci$1+i*gn+l*fl),rest:r.slice(t[0].length)}}function H(o){return u(c.anyDigitsSigned,o)}function a(o,r){switch(o){case 1:return u(c.singleDigit,r);case 2:return u(c.twoDigits,r);case 3:return u(c.threeDigits,r);case 4:return u(c.fourDigits,r);default:return u(new RegExp(`^\\d{1,`+o+`}`),r)}}function P(o,r){switch(o){case 1:return u(c.singleDigitSigned,r);case 2:return u(c.twoDigitsSigned,r);case 3:return u(c.threeDigitsSigned,r);case 4:return u(c.fourDigitsSigned,r);default:return u(new RegExp(`^-?\\d{1,`+o+`}`),r)}}function T(o){switch(o){case`morning`:return 4;case`evening`:return 17;case`pm`:case`noon`:case`afternoon`:return 12;default:return 0}}function O(o,r){let t=r>0,e=t?r:1-r,s;if(e<=50)s=o||100;else{let i=e+50,l=Math.trunc(i/100)*100,b=o>=i%100;s=o+l-(b?100:0)}return t?s:1-s}function q$1(o){return o%400===0||o%4===0&&o%100!==0}var L=class extends n{priority=130;incompatibleTokens=[`Y`,`R`,`u`,`w`,`I`,`i`,`e`,`c`,`t`,`T`];parse(r,t,e){let s=i=>({year:i,isTwoDigitYear:t===`yy`});switch(t){case`y`:return p(a(4,r),s);case`yo`:return p(e.ordinalNumber(r,{unit:`year`}),s);default:return p(a(t.length,r),s)}}validate(r,t){return t.isTwoDigitYear||t.year>0}set(r,t,e){let s=r.getFullYear();if(e.isTwoDigitYear){let l=O(e.year,s);return r.setFullYear(l,0,1),r.setHours(0,0,0,0),r}let i=!(`era`in t)||t.era===1?e.year:1-e.year;return r.setFullYear(i,0,1),r.setHours(0,0,0,0),r}};var v=class extends n{priority=130;parse(r,t,e){let s=i=>({year:i,isTwoDigitYear:t===`YY`});switch(t){case`Y`:return p(a(4,r),s);case`Yo`:return p(e.ordinalNumber(r,{unit:`year`}),s);default:return p(a(t.length,r),s)}}validate(r,t){return t.isTwoDigitYear||t.year>0}set(r,t,e,s){let i=vn(r,s);if(e.isTwoDigitYear){let b=O(e.year,i);return r.setFullYear(b,0,s.firstWeekContainsDate),r.setHours(0,0,0,0),vt$1(r,s)}let l=!(`era`in t)||t.era===1?e.year:1-e.year;return r.setFullYear(l,0,s.firstWeekContainsDate),r.setHours(0,0,0,0),vt$1(r,s)}incompatibleTokens=[`y`,`R`,`u`,`Q`,`q`,`M`,`L`,`I`,`d`,`D`,`i`,`t`,`T`]};var Q$1=class extends n{priority=130;parse(r,t){return t===`R`?P(4,r):P(t.length,r)}set(r,t,e){let s=E$1(r,0);return s.setFullYear(e,0,4),s.setHours(0,0,0,0),jt$1(s)}incompatibleTokens=[`G`,`y`,`Y`,`u`,`Q`,`q`,`M`,`L`,`w`,`d`,`D`,`e`,`c`,`t`,`T`]};var R=class extends n{priority=130;parse(r,t){return t===`u`?P(4,r):P(t.length,r)}set(r,t,e){return r.setFullYear(e,0,1),r.setHours(0,0,0,0),r}incompatibleTokens=[`G`,`y`,`Y`,`R`,`w`,`I`,`i`,`e`,`c`,`t`,`T`]};var W$1=class extends n{priority=120;parse(r,t,e){switch(t){case`Q`:case`QQ`:return a(t.length,r);case`Qo`:return e.ordinalNumber(r,{unit:`quarter`});case`QQQ`:return e.quarter(r,{width:`abbreviated`,context:`formatting`})||e.quarter(r,{width:`narrow`,context:`formatting`});case`QQQQQ`:return e.quarter(r,{width:`narrow`,context:`formatting`});default:return e.quarter(r,{width:`wide`,context:`formatting`})||e.quarter(r,{width:`abbreviated`,context:`formatting`})||e.quarter(r,{width:`narrow`,context:`formatting`})}}validate(r,t){return t>=1&&t<=4}set(r,t,e){return r.setMonth((e-1)*3,1),r.setHours(0,0,0,0),r}incompatibleTokens=[`Y`,`R`,`q`,`M`,`L`,`w`,`I`,`d`,`D`,`i`,`e`,`c`,`t`,`T`]};var C=class extends n{priority=120;parse(r,t,e){switch(t){case`q`:case`qq`:return a(t.length,r);case`qo`:return e.ordinalNumber(r,{unit:`quarter`});case`qqq`:return e.quarter(r,{width:`abbreviated`,context:`standalone`})||e.quarter(r,{width:`narrow`,context:`standalone`});case`qqqqq`:return e.quarter(r,{width:`narrow`,context:`standalone`});default:return e.quarter(r,{width:`wide`,context:`standalone`})||e.quarter(r,{width:`abbreviated`,context:`standalone`})||e.quarter(r,{width:`narrow`,context:`standalone`})}}validate(r,t){return t>=1&&t<=4}set(r,t,e){return r.setMonth((e-1)*3,1),r.setHours(0,0,0,0),r}incompatibleTokens=[`Y`,`R`,`Q`,`M`,`L`,`w`,`I`,`d`,`D`,`i`,`e`,`c`,`t`,`T`]};var F=class extends n{incompatibleTokens=[`Y`,`R`,`q`,`Q`,`L`,`w`,`I`,`D`,`i`,`e`,`c`,`t`,`T`];priority=110;parse(r,t,e){let s=i=>i-1;switch(t){case`M`:return p(u(c.month,r),s);case`MM`:return p(a(2,r),s);case`Mo`:return p(e.ordinalNumber(r,{unit:`month`}),s);case`MMM`:return e.month(r,{width:`abbreviated`,context:`formatting`})||e.month(r,{width:`narrow`,context:`formatting`});case`MMMMM`:return e.month(r,{width:`narrow`,context:`formatting`});default:return e.month(r,{width:`wide`,context:`formatting`})||e.month(r,{width:`abbreviated`,context:`formatting`})||e.month(r,{width:`narrow`,context:`formatting`})}}validate(r,t){return t>=0&&t<=11}set(r,t,e){return r.setMonth(e,1),r.setHours(0,0,0,0),r}};var B=class extends n{priority=110;parse(r,t,e){let s=i=>i-1;switch(t){case`L`:return p(u(c.month,r),s);case`LL`:return p(a(2,r),s);case`Lo`:return p(e.ordinalNumber(r,{unit:`month`}),s);case`LLL`:return e.month(r,{width:`abbreviated`,context:`standalone`})||e.month(r,{width:`narrow`,context:`standalone`});case`LLLLL`:return e.month(r,{width:`narrow`,context:`standalone`});default:return e.month(r,{width:`wide`,context:`standalone`})||e.month(r,{width:`abbreviated`,context:`standalone`})||e.month(r,{width:`narrow`,context:`standalone`})}}validate(r,t){return t>=0&&t<=11}set(r,t,e){return r.setMonth(e,1),r.setHours(0,0,0,0),r}incompatibleTokens=[`Y`,`R`,`q`,`Q`,`M`,`w`,`I`,`D`,`i`,`e`,`c`,`t`,`T`]};function Or(o,r,t){let e=v$1(o,t?.in),s=$i(e,t)-r;return e.setDate(e.getDate()-s*7),v$1(e,t?.in)}var G=class extends n{priority=100;parse(r,t,e){switch(t){case`w`:return u(c.week,r);case`wo`:return e.ordinalNumber(r,{unit:`week`});default:return a(t.length,r)}}validate(r,t){return t>=1&&t<=53}set(r,t,e,s){return vt$1(Or(r,e,s),s)}incompatibleTokens=[`y`,`R`,`u`,`q`,`Q`,`M`,`L`,`I`,`d`,`D`,`i`,`t`,`T`]};function qr(o,r,t){let e=v$1(o,t?.in),s=xi(e,t)-r;return e.setDate(e.getDate()-s*7),e}var X$1=class extends n{priority=100;parse(r,t,e){switch(t){case`I`:return u(c.week,r);case`Io`:return e.ordinalNumber(r,{unit:`week`});default:return a(t.length,r)}}validate(r,t){return t>=1&&t<=53}set(r,t,e){return jt$1(qr(r,e))}incompatibleTokens=[`y`,`Y`,`u`,`q`,`Q`,`M`,`L`,`w`,`d`,`D`,`e`,`c`,`t`,`T`]};var Gr=[31,28,31,30,31,30,31,31,30,31,30,31];var Xr=[31,29,31,30,31,30,31,31,30,31,30,31];var z=class extends n{priority=90;subPriority=1;parse(r,t,e){switch(t){case`d`:return u(c.date,r);case`do`:return e.ordinalNumber(r,{unit:`date`});default:return a(t.length,r)}}validate(r,t){let s=q$1(r.getFullYear()),i=r.getMonth();return s?t>=1&&t<=Xr[i]:t>=1&&t<=Gr[i]}set(r,t,e){return r.setDate(e),r.setHours(0,0,0,0),r}incompatibleTokens=[`Y`,`R`,`q`,`Q`,`w`,`I`,`D`,`i`,`e`,`c`,`t`,`T`]};var A=class extends n{priority=90;subpriority=1;parse(r,t,e){switch(t){case`D`:case`DD`:return u(c.dayOfYear,r);case`Do`:return e.ordinalNumber(r,{unit:`date`});default:return a(t.length,r)}}validate(r,t){return q$1(r.getFullYear())?t>=1&&t<=366:t>=1&&t<=365}set(r,t,e){return r.setMonth(0,e),r.setHours(0,0,0,0),r}incompatibleTokens=[`Y`,`R`,`q`,`Q`,`M`,`L`,`w`,`I`,`d`,`E`,`i`,`e`,`c`,`t`,`T`]};var V=class extends n{priority=90;parse(r,t,e){switch(t){case`E`:case`EE`:case`EEE`:return e.day(r,{width:`abbreviated`,context:`formatting`})||e.day(r,{width:`short`,context:`formatting`})||e.day(r,{width:`narrow`,context:`formatting`});case`EEEEE`:return e.day(r,{width:`narrow`,context:`formatting`});case`EEEEEE`:return e.day(r,{width:`short`,context:`formatting`})||e.day(r,{width:`narrow`,context:`formatting`});default:return e.day(r,{width:`wide`,context:`formatting`})||e.day(r,{width:`abbreviated`,context:`formatting`})||e.day(r,{width:`short`,context:`formatting`})||e.day(r,{width:`narrow`,context:`formatting`})}}validate(r,t){return t>=0&&t<=6}set(r,t,e,s){return r=k(r,e,s),r.setHours(0,0,0,0),r}incompatibleTokens=[`D`,`i`,`e`,`c`,`t`,`T`]};var Z$1=class extends n{priority=90;parse(r,t,e,s){let i=l=>{let b=Math.floor((l-1)/7)*7;return(l+s.weekStartsOn+6)%7+b};switch(t){case`e`:case`ee`:return p(a(t.length,r),i);case`eo`:return p(e.ordinalNumber(r,{unit:`day`}),i);case`eee`:return e.day(r,{width:`abbreviated`,context:`formatting`})||e.day(r,{width:`short`,context:`formatting`})||e.day(r,{width:`narrow`,context:`formatting`});case`eeeee`:return e.day(r,{width:`narrow`,context:`formatting`});case`eeeeee`:return e.day(r,{width:`short`,context:`formatting`})||e.day(r,{width:`narrow`,context:`formatting`});default:return e.day(r,{width:`wide`,context:`formatting`})||e.day(r,{width:`abbreviated`,context:`formatting`})||e.day(r,{width:`short`,context:`formatting`})||e.day(r,{width:`narrow`,context:`formatting`})}}validate(r,t){return t>=0&&t<=6}set(r,t,e,s){return r=k(r,e,s),r.setHours(0,0,0,0),r}incompatibleTokens=[`y`,`R`,`u`,`q`,`Q`,`M`,`L`,`I`,`d`,`D`,`E`,`i`,`c`,`t`,`T`]};var K$1=class extends n{priority=90;parse(r,t,e,s){let i=l=>{let b=Math.floor((l-1)/7)*7;return(l+s.weekStartsOn+6)%7+b};switch(t){case`c`:case`cc`:return p(a(t.length,r),i);case`co`:return p(e.ordinalNumber(r,{unit:`day`}),i);case`ccc`:return e.day(r,{width:`abbreviated`,context:`standalone`})||e.day(r,{width:`short`,context:`standalone`})||e.day(r,{width:`narrow`,context:`standalone`});case`ccccc`:return e.day(r,{width:`narrow`,context:`standalone`});case`cccccc`:return e.day(r,{width:`short`,context:`standalone`})||e.day(r,{width:`narrow`,context:`standalone`});default:return e.day(r,{width:`wide`,context:`standalone`})||e.day(r,{width:`abbreviated`,context:`standalone`})||e.day(r,{width:`short`,context:`standalone`})||e.day(r,{width:`narrow`,context:`standalone`})}}validate(r,t){return t>=0&&t<=6}set(r,t,e,s){return r=k(r,e,s),r.setHours(0,0,0,0),r}incompatibleTokens=[`y`,`R`,`u`,`q`,`Q`,`M`,`L`,`I`,`d`,`D`,`E`,`i`,`e`,`t`,`T`]};function Lr(o,r){let t=v$1(o,r?.in).getDay();return t===0?7:t}function vr$1(o,r,t){let e=v$1(o,t?.in);return ot$1(e,r-Lr(e,t),t)}var $$1=class extends n{priority=90;parse(r,t,e){let s=i=>i===0?7:i;switch(t){case`i`:case`ii`:return a(t.length,r);case`io`:return e.ordinalNumber(r,{unit:`day`});case`iii`:return p(e.day(r,{width:`abbreviated`,context:`formatting`})||e.day(r,{width:`short`,context:`formatting`})||e.day(r,{width:`narrow`,context:`formatting`}),s);case`iiiii`:return p(e.day(r,{width:`narrow`,context:`formatting`}),s);case`iiiiii`:return p(e.day(r,{width:`short`,context:`formatting`})||e.day(r,{width:`narrow`,context:`formatting`}),s);default:return p(e.day(r,{width:`wide`,context:`formatting`})||e.day(r,{width:`abbreviated`,context:`formatting`})||e.day(r,{width:`short`,context:`formatting`})||e.day(r,{width:`narrow`,context:`formatting`}),s)}}validate(r,t){return t>=1&&t<=7}set(r,t,e){return r=vr$1(r,e),r.setHours(0,0,0,0),r}incompatibleTokens=[`y`,`Y`,`u`,`q`,`Q`,`M`,`L`,`w`,`d`,`D`,`E`,`e`,`c`,`t`,`T`]};var j$1=class extends n{priority=80;parse(r,t,e){switch(t){case`a`:case`aa`:case`aaa`:return e.dayPeriod(r,{width:`abbreviated`,context:`formatting`})||e.dayPeriod(r,{width:`narrow`,context:`formatting`});case`aaaaa`:return e.dayPeriod(r,{width:`narrow`,context:`formatting`});default:return e.dayPeriod(r,{width:`wide`,context:`formatting`})||e.dayPeriod(r,{width:`abbreviated`,context:`formatting`})||e.dayPeriod(r,{width:`narrow`,context:`formatting`})}}set(r,t,e){return r.setHours(T(e),0,0,0),r}incompatibleTokens=[`b`,`B`,`H`,`k`,`t`,`T`]};var U$1=class extends n{priority=80;parse(r,t,e){switch(t){case`b`:case`bb`:case`bbb`:return e.dayPeriod(r,{width:`abbreviated`,context:`formatting`})||e.dayPeriod(r,{width:`narrow`,context:`formatting`});case`bbbbb`:return e.dayPeriod(r,{width:`narrow`,context:`formatting`});default:return e.dayPeriod(r,{width:`wide`,context:`formatting`})||e.dayPeriod(r,{width:`abbreviated`,context:`formatting`})||e.dayPeriod(r,{width:`narrow`,context:`formatting`})}}set(r,t,e){return r.setHours(T(e),0,0,0),r}incompatibleTokens=[`a`,`B`,`H`,`k`,`t`,`T`]};var J$1=class extends n{priority=80;parse(r,t,e){switch(t){case`B`:case`BB`:case`BBB`:return e.dayPeriod(r,{width:`abbreviated`,context:`formatting`})||e.dayPeriod(r,{width:`narrow`,context:`formatting`});case`BBBBB`:return e.dayPeriod(r,{width:`narrow`,context:`formatting`});default:return e.dayPeriod(r,{width:`wide`,context:`formatting`})||e.dayPeriod(r,{width:`abbreviated`,context:`formatting`})||e.dayPeriod(r,{width:`narrow`,context:`formatting`})}}set(r,t,e){return r.setHours(T(e),0,0,0),r}incompatibleTokens=[`a`,`b`,`t`,`T`]};var S$2=class extends n{priority=70;parse(r,t,e){switch(t){case`h`:return u(c.hour12h,r);case`ho`:return e.ordinalNumber(r,{unit:`hour`});default:return a(t.length,r)}}validate(r,t){return t>=1&&t<=12}set(r,t,e){let s=r.getHours()>=12;return s&&e<12?r.setHours(e+12,0,0,0):!s&&e===12?r.setHours(0,0,0,0):r.setHours(e,0,0,0),r}incompatibleTokens=[`H`,`K`,`k`,`t`,`T`]};var rr$1=class extends n{priority=70;parse(r,t,e){switch(t){case`H`:return u(c.hour23h,r);case`Ho`:return e.ordinalNumber(r,{unit:`hour`});default:return a(t.length,r)}}validate(r,t){return t>=0&&t<=23}set(r,t,e){return r.setHours(e,0,0,0),r}incompatibleTokens=[`a`,`b`,`h`,`K`,`k`,`t`,`T`]};var er$1=class extends n{priority=70;parse(r,t,e){switch(t){case`K`:return u(c.hour11h,r);case`Ko`:return e.ordinalNumber(r,{unit:`hour`});default:return a(t.length,r)}}validate(r,t){return t>=0&&t<=11}set(r,t,e){return r.getHours()>=12&&e<12?r.setHours(e+12,0,0,0):r.setHours(e,0,0,0),r}incompatibleTokens=[`h`,`H`,`k`,`t`,`T`]};var tr$1=class extends n{priority=70;parse(r,t,e){switch(t){case`k`:return u(c.hour24h,r);case`ko`:return e.ordinalNumber(r,{unit:`hour`});default:return a(t.length,r)}}validate(r,t){return t>=1&&t<=24}set(r,t,e){let s=e<=24?e%24:e;return r.setHours(s,0,0,0),r}incompatibleTokens=[`a`,`b`,`h`,`H`,`K`,`t`,`T`]};var or$1=class extends n{priority=60;parse(r,t,e){switch(t){case`m`:return u(c.minute,r);case`mo`:return e.ordinalNumber(r,{unit:`minute`});default:return a(t.length,r)}}validate(r,t){return t>=0&&t<=59}set(r,t,e){return r.setMinutes(e,0,0),r}incompatibleTokens=[`t`,`T`]};var sr$1=class extends n{priority=50;parse(r,t,e){switch(t){case`s`:return u(c.second,r);case`so`:return e.ordinalNumber(r,{unit:`second`});default:return a(t.length,r)}}validate(r,t){return t>=0&&t<=59}set(r,t,e){return r.setSeconds(e,0),r}incompatibleTokens=[`t`,`T`]};var nr$1=class extends n{priority=30;parse(r,t){let e=s=>Math.trunc(s*Math.pow(10,-t.length+3));return p(a(t.length,r),e)}set(r,t,e){return r.setMilliseconds(e),r}incompatibleTokens=[`t`,`T`]};var ir$1=class extends n{priority=10;parse(r,t){switch(t){case`X`:return h(x.basicOptionalMinutes,r);case`XX`:return h(x.basic,r);case`XXXX`:return h(x.basicOptionalSeconds,r);case`XXXXX`:return h(x.extendedOptionalSeconds,r);default:return h(x.extended,r)}}set(r,t,e){return t.timestampIsSet?r:E$1(r,r.getTime()-wr(r)-e)}incompatibleTokens=[`t`,`T`,`x`]};var ar$1=class extends n{priority=10;parse(r,t){switch(t){case`x`:return h(x.basicOptionalMinutes,r);case`xx`:return h(x.basic,r);case`xxxx`:return h(x.basicOptionalSeconds,r);case`xxxxx`:return h(x.extendedOptionalSeconds,r);default:return h(x.extended,r)}}set(r,t,e){return t.timestampIsSet?r:E$1(r,r.getTime()-wr(r)-e)}incompatibleTokens=[`t`,`T`,`X`]};var ur$1=class extends n{priority=40;parse(r){return H(r)}set(r,t,e){return[E$1(r,e*1e3),{timestampIsSet:!0}]}incompatibleTokens=`*`};var cr$1=class extends n{priority=20;parse(r){return H(r)}set(r,t,e){return[E$1(r,e),{timestampIsSet:!0}]}incompatibleTokens=`*`};var Qr={G:new I,y:new L,Y:new v,R:new Q$1,u:new R,Q:new W$1,q:new C,M:new F,L:new B,w:new G,I:new X$1,d:new z,D:new A,E:new V,e:new Z$1,c:new K$1,i:new $$1,a:new j$1,b:new U$1,B:new J$1,h:new S$2,H:new rr$1,K:new er$1,k:new tr$1,m:new or$1,s:new sr$1,S:new nr$1,X:new ir$1,x:new ar$1,t:new ur$1,T:new cr$1};var zr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;var Ar=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;var Vr=/^'([^]*?)'?$/;var Zr=/''/g;var Kr=/\S/;var $r=/[a-zA-Z]/;function Ps(o,r,t,e){let s=()=>E$1(e?.in||t,NaN),i=bf(),l=e?.locale??i.locale??Ce,b=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,Rr=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??i.weekStartsOn??i.locale?.options?.weekStartsOn??0;if(!r)return o?s():v$1(t,e?.in);let mr={firstWeekContainsDate:b,weekStartsOn:Rr,locale:l},pr=[new E(e?.in,t)],Wr=r.match(Ar).map(m=>{let f=m[0];if(f in Di){let y=Di[f];return y(m,l.formatLong)}return m}).join(``).match(zr),fr=[];for(let m of Wr){!e?.useAdditionalWeekYearTokens&&Ei(m)&&Ai(m,r,o),!e?.useAdditionalDayOfYearTokens&&Ii(m)&&Ai(m,r,o);let f=m[0],y=Qr[f];if(y){let{incompatibleTokens:hr}=y;if(Array.isArray(hr)){let yr=fr.find(br=>hr.includes(br.token)||br.token===f);if(yr)throw new RangeError(`The format string mustn't contain \`${yr.fullToken}\` and \`${m}\` at the same time`)}else if(y.incompatibleTokens===`*`&&fr.length>0)throw new RangeError(`The format string mustn't contain \`${m}\` and any other token at the same time`);fr.push({token:f,fullToken:m});let lr=y.run(o,m,l.match,mr);if(!lr)return s();pr.push(lr.setter),o=lr.rest}else{if(f.match($r))throw new RangeError("Format string contains an unescaped latin alphabet character `"+f+"`");if(m===`''`?m=`'`:f===`'`&&(m=jr(m)),o.indexOf(m)===0)o=o.slice(m.length);else return s()}}if(o.length>0&&Kr.test(o))return s();let Cr=pr.map(m=>m.priority).sort((m,f)=>f-m).filter((m,f,y)=>y.indexOf(m)===f).map(m=>pr.filter(f=>f.priority===m).sort((f,y)=>y.subPriority-f.subPriority)).map(m=>m[0]),D=v$1(t,e?.in);if(isNaN(+D))return s();let xr={};for(let m of Cr){if(!m.validate(D,mr))return s();let f=m.set(D,xr,mr);Array.isArray(f)?(D=f[0],Object.assign(xr,f[1])):D=f}return D}function jr(o){return o.match(Vr)[1].replace(Zr,`'`)}var xt=[`time_input`];var Ct=[`*`];var bt=(n,d)=>d.id;function Mt(n,d){n&1&&(ya$1(0,`div`,9),RS(1),oM(2,`translate`),Pd()),n&2&&(db(),$d(` `,sM(2,1,`FORM.TIME_ENTRY_ERROR`),` `))}function vt(n,d){if(n&1){let e=q_();ya$1(0,`div`,5)(1,`input`,6,1),oM(3,`translate`),ov(`change`,function(){dh(e);let i=aS(2);return fh(J_().setTypedTime(i.value))}),Pd(),ya$1(4,`button`,7),oM(5,`translate`),ya$1(6,`icon`,8),RS(7,`arrow_drop_down`),Pd()()(),L_(8,Mt,3,3,`div`,9)}if(n&2){let e=J_(),t=aS(3);mv(`opacity-30`,e.disabled()||e.no_options()),db(),Ky(`value`,e.time())(`disabled`,e.disabled()||e.no_options()),Qy(`aria-label`,sM(3,10,`FORM.TIME`))(`aria-invalid`,!!e.time_entry_error()),db(3),Ky(`disabled`,e.disabled()||e.no_options())(`matMenuTriggerFor`,t),Qy(`aria-label`,sM(5,12,`FORM.TIME_CHOOSE`)),db(4),P_(e.time_entry_error()?8:-1)}}function yt(n,d){if(n&1&&(ya$1(0,`div`,13),RS(1),oM(2,`date`),Pd()),n&2){let e=J_(2);db(),$d(` `,cM(2,1,e.active_time(),e.time_format()+` (z)`,e.tz()),` `)}}function wt(n,d){if(n&1&&(ya$1(0,`button`,10)(1,`div`,11)(2,`div`,12),RS(3),oM(4,`date`),Pd(),L_(5,yt,3,5,`div`,13),Pd(),ya$1(6,`icon`,8),RS(7,`arrow_drop_down`),Pd()()),n&2){let e=J_(),t=aS(3);mv(`opacity-30`,e.disabled()||e.no_options()),Ky(`disabled`,e.disabled()||e.no_options())(`matMenuTriggerFor`,t),db(3),$d(` `,aM(4,6,e.active_time(),e.time_format()),` `),db(2),P_(e.timezone()&&e.tz()?5:-1)}}function Tt(n,d){if(n&1&&(ya$1(0,`div`,20),RS(1),oM(2,`date`),Pd()),n&2){let e=J_().$implicit,t=J_(2);db(),$d(` `,cM(2,1,e.date,t.time_format()+` (z)`,t.tz()),` `)}}function Ft(n,d){n&1&&(ya$1(0,`icon`,21),oM(1,`translate`),RS(2,` done `),Pd()),n&2&&Ky(`label`,sM(1,1,`COMMON.SELECTED`))}function St(n,d){if(n&1){let e=q_();ya$1(0,`button`,16),ov(`click`,function(){let i=dh(e).$implicit;return fh(J_(2).setValue(i.id))}),ya$1(1,`div`,17)(2,`div`,18)(3,`div`,19),RS(4),oM(5,`date`),Pd(),L_(6,Tt,3,5,`div`,20),Pd(),L_(7,Ft,3,3,`icon`,21),Pd()()}if(n&2){let e=d.$implicit,t=J_(2);Ky(`value`,e.id),Qy(`data-time`,e.id),db(4),_v(` `,aM(5,6,e.date,t.time_format()),` `,t.extra_info_fn()(e.date),` `),db(2),P_(t.timezone()&&t.tz()?6:-1),db(),P_(t.active_time()===e.date?7:-1)}}function Ot(n,d){n&1&&(ya$1(0,`div`,15),RS(1),oM(2,`translate`),Pd()),n&2&&(db(),$d(` `,sM(2,1,`FORM.TIME_EMPTY`),` `))}function kt(n,d){if(n&1&&V_(0,St,8,9,`button`,14,bt,!1,Ot,3,3,`div`,15),n&2)H_(J_().time_options())}function Dt(n,d){n&1&&(ya$1(0,`mat-error`),nS(1),Pd())}var Et=1501;function _t(n){if(n==null||n===``)return null;let d=Number(n);return Number.isFinite(d)?d:null}var ct=(()=>{class n extends xn{constructor(){super(...arguments),this.step=vU(15),this.disabled=DU(void 0),this.no_past_times=vU(!0),this.use_24hr=vU(!1),this.no_error=vU(void 0),this.extra_info_fn=vU(e=>``),this.from=vU(K$2(Date.now()).valueOf()),this.range=vU(void 0),this._range=Le(()=>{let e=this.range();if(!e)return;let t=_t(e.start),i=_t(e.end);if(!(t===null||i===null||i<=t))return{start:t,end:i}}),this.min_duration=vU(0),this.timezone=vU(``),this.allow_time_entry=vU(!1),this.time_entry_error=It$1(!1),this.date=It$1(new Date().valueOf()),this.time=It$1(Gt$1(new Date,`HH:mm`)),this._time_options=It$1([]),this.show_select=It$1(!1),this.active_time=It$1(Date.now()),this.no_options=It$1(!1),this._menu_trigger=EU(Lt$1),this._time_input=EU(`time_input`),this.time_format=Le(()=>this.use_24hr()?`HH : mm`:`h : mm a`),this._local_tz=A_(Intl.DateTimeFormat().resolvedOptions().timeZone),this.tz=Le(()=>{let e=this.timezone();if(!e)return``;let t=A_(e);return t===this._local_tz?``:t}),this.time_options=Le(()=>{let e=this.timezone()||void 0,t=(this.time()||`00:00`).split(`:`),i=U_(this.date(),+t[0],+t[1],e),{minutes:o}=ad(i,e),l=C_(i,e),_=[...this._time_options()];return o%this.step()!==0&&this._isWithinRange(i)&&!_.find(p=>p.id===l)&&(_.push({date:i,id:l}),_.sort((p,f)=>`${p.id}`.localeCompare(`${f.id}`))),_})}ngOnInit(){this.show_select.set(!0),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions(),this.timeout(`hide`,()=>this.show_select.set(!1));let e=this.timezone()||void 0;this.active_time.set(this._time_options().find(t=>t.id===C_(this.date(),e))?.date||this.active_time())}ngOnChanges(e){(e.no_past_times||e.step||e.from||e.range||e.min_duration)&&(this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions())}ngAfterViewInit(){let e=this._menu_trigger();e&&this.subscription(`menu_opened`,e.menuOpened.subscribe(()=>{this._scrollToSelectedTime()}))}_scrollToSelectedTime(){requestAnimationFrame(()=>{if(!this._menu_trigger()?.menu)return;let t=document.querySelector(`.mat-mdc-menu-panel`);if(!t)return;let i=this.timezone()||void 0,o=this.time()||C_(new Date,i),l=t.querySelector(`[data-time="${o}"]`);if(!l&&this._time_options().length){let _=this._timeToMinutes(o),p=this._time_options()[0],f=Infinity;for(let k of this._time_options()){let D=this._timeToMinutes(k.id),B=Math.abs(D-_);B<f&&(f=B,p=k)}l=t.querySelector(`[data-time="${p.id}"]`)}if(l){if(typeof l.scrollIntoView!=`function`)return;l.scrollIntoView({block:`center`,behavior:`instant`})}})}_timeToMinutes(e){let[t,i]=e.split(`:`).map(Number);return t*60+i}setTypedTime(e){let t=/^([01]\d|2[0-3]):([0-5]\d)$/.exec(e),i=this.timezone()||void 0,o=t?U_(this.date(),+t[1],+t[2],i):NaN,l=this.no_past_times()&&o<Bt$2(Date.now()).valueOf();if(!t||l||!this._isWithinRange(o)){this.time_entry_error.set(!0);return}this.setValue(e)}setValue(e){this.time_entry_error.set(!1),this.time.set(e);let t=this._time_input()?.nativeElement;t&&(t.value=e);let i=this.timezone()||void 0;if(this._onChange){let p=(this.time()||`00:00`).split(`:`),f=U_(this.date(),+p[0],+p[1],i);H_$1(),this._onChange(f)}let o=this.time()||`00:00`,l=o.split(`:`),_=U_(this.date(),+l[0],+l[1],i);this.active_time.set(this._time_options().find(p=>p.id===o)?.date||_)}writeValue(e){this.date.set(e||this.date());let t=this.timezone()||void 0,i=Bt$2(this.date());this.time.set(C_(i,t)),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions(),this.active_time.set(this._time_options().find(o=>o.id===this.time())?.date||i.valueOf())}setDisabledState(e){this.disabled.set(e),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times()||e,this.step())),this._updateNoOptions()}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouch=e}_updateNoOptions(){this.no_options.set(!this.disabled()&&(!this._time_options()||this._time_options().length===0))}generateAvailableTimes(e,t,i=15){let o=t?this.from():Math.max(this.from(),Date.now()),l=[],_=this._range(),p=this.timezone()||void 0,f=p?ae(e,p):K$2(e).valueOf(),k=p?ue(e,p):Pe(e).valueOf(),D=this.min_duration()||0,B=_?_.start*60:void 0,J=_?_.end*60:void 0,me=J!=null&&D>0?J-D:J,_e=Math.max(f,o,B!=null?f+B*60*1e3:f),ce=Math.min(k,me!=null?f+me*60*1e3:k);if(_e>ce)return l;let ee=i*60*1e3,pt=Math.ceil((_e-f)/ee),ut=Math.floor((ce-f)/ee);for(let te=pt;te<=ut&&l.length<Et;te++){let pe=f+te*ee;l.push({date:pe,id:C_(pe,p)})}return l}_isWithinRange(e){if(Oe(e,this.from()))return!1;let t=this._range();if(!t)return!0;let i=t.start*60,o=t.end*60,l=this.min_duration()||0,_=l>0?o-l:o,{hours:f,minutes:k}=ad(e,this.timezone()||void 0),D=f*60+k;return!(D<i||D>_)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Yg(n)))(i||n)}})()}static{this.ɵcmp=jT({type:n,selectors:[[`a-time-field`],[`time-field`]],viewQuery:function(t,i){t&1&&lv(i._menu_trigger,Lt$1,5)(i._time_input,xt,5),t&2&&sS(2)},inputs:{step:[1,`step`],disabled:[1,`disabled`],no_past_times:[1,`no_past_times`],use_24hr:[1,`use_24hr`],no_error:[1,`no_error`],extra_info_fn:[1,`extra_info_fn`],from:[1,`from`],range:[1,`range`],min_duration:[1,`min_duration`],timezone:[1,`timezone`],allow_time_entry:[1,`allow_time_entry`]},outputs:{disabled:`disabledChange`},features:[zS([hf(()=>n)]),Py,Da$1],ngContentSelectors:Ct,decls:6,vars:2,consts:[[`menu`,`matMenu`],[`time_input`,``],[`type`,`button`,`time-field`,``,`matRipple`,``,1,`border-neutral`,`flex`,`h-12`,`w-full`,`items-center`,`justify-between`,`rounded-sm`,`border`,`px-2`,3,`disabled`,`opacity-30`,`matMenuTriggerFor`],[1,`max-h-60`,`min-w-[18rem]`],[`matMenuContent`,``],[1,`border-neutral`,`flex`,`h-12`,`w-full`,`items-center`,`rounded-sm`,`border`],[`type`,`time`,1,`h-full`,`min-w-0`,`flex-1`,`border-0`,`bg-transparent`,`px-4`,3,`change`,`value`,`disabled`],[`type`,`button`,`time-options`,``,1,`flex`,`h-full`,`w-12`,`shrink-0`,`items-center`,`justify-center`,3,`disabled`,`matMenuTriggerFor`],[1,`text-2xl`],[`role`,`alert`,1,`text-error`,`text-sm`],[`type`,`button`,`time-field`,``,`matRipple`,``,1,`border-neutral`,`flex`,`h-12`,`w-full`,`items-center`,`justify-between`,`rounded-sm`,`border`,`px-2`,3,`disabled`,`matMenuTriggerFor`],[1,`flex`,`w-1/2`,`flex-1`,`flex-col`,`px-2`,`text-left`,`leading-tight`],[1,`truncate`],[1,`truncate`,`text-xs`,`opacity-30`],[`type`,`button`,`mat-menu-item`,``,1,`text-left`,3,`value`],[`mat-menu-item`,``,`disabled`,``],[`type`,`button`,`mat-menu-item`,``,1,`text-left`,3,`click`,`value`],[1,`flex`,`items-center`,`justify-between`],[1,`flex`,`flex-col`,`leading-tight`],[1,``],[1,`text-xs`,`opacity-30`],[1,`ml-2`,`text-2xl`,3,`label`]],template:function(t,i){t&1&&(tS(),L_(0,vt,9,14)(1,wt,8,9,`button`,2),ya$1(2,`mat-menu`,3,0),By(4,kt,3,1,`ng-template`,4),Pd(),L_(5,Dt,2,0,`mat-error`)),t&2&&(P_(i.allow_time_entry()?0:1),db(5),P_(i.no_error()?-1:5))},dependencies:[LD,Ht$3,P$1,ee$1,Bt$4,Lt$1,qr$1,Ni,z$2,jN,f],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%}`]})}}return n})();function Nt(n,d){n&1&&(ya$1(0,`button`,2),oM(1,`translate`),ya$1(2,`icon`),RS(3,`close`),Pd()()),n&2&&Qy(`aria-label`,sM(1,1,`COMMON.CLOSE`))}function It(n,d){if(n&1){let e=q_();ya$1(0,`div`,7)(1,`div`,11),RS(2),oM(3,`date`),Pd(),ya$1(4,`mat-checkbox`,12),ov(`ngModelChange`,function(i){let o=dh(e).$implicit,l=J_(2);return l.setWeekdayEnabled(o.getDay(),i),fh(i&&l.initialiseDay(o.getDay()))}),Pd(),Yb(),Pd()}if(n&2){let e=d.$implicit,t=J_(2);db(2),$d(` `,aM(3,2,e,`EEE`),` `),db(2),Ky(`ngModel`,t.weekdays_enabled()[e.getDay()]),Kb()}}function zt(n,d){if(n&1&&(ya$1(0,`mat-option`,20),RS(1),Pd()),n&2){let e=d.$implicit;Ky(`value`,e.id),db(),$d(` `,e.name,` `)}}function Wt(n,d){if(n&1){let e=q_();ya$1(0,`button`,23),oM(1,`translate`),ov(`click`,function(){dh(e);let i=J_().$index,o=J_(2).$implicit,l=J_(3);return fh(l.addBlock(l.settings()[o.getDay()],i))}),ya$1(2,`icon`),RS(3,`add`),Pd()()}n&2&&Qy(`aria-label`,sM(1,1,`COMMON.WORK_BLOCK_ADD`))}function Bt$1(n,d){if(n&1){let e=q_();ya$1(0,`button`,24),oM(1,`translate`),ov(`click`,function(){dh(e);let i=J_().$index,o=J_(2).$implicit,l=J_(3);return fh(l.removeBlock(l.settings()[o.getDay()],i))}),ya$1(2,`icon`),RS(3,`delete`),Pd()()}n&2&&Qy(`aria-label`,sM(1,1,`COMMON.WORK_BLOCK_REMOVE`))}function Vt$1(n,d){if(n&1){let e=q_();ya$1(0,`div`,16)(1,`a-time-field`,18),ov(`ngModelChange`,function(i){let o=dh(e).$implicit,l=J_(2).$implicit;return fh(J_(3).setStartTime(o,l.getDay(),i))}),Pd(),Yb(),ya$1(2,`a-time-field`,18),ov(`ngModelChange`,function(i){let o=dh(e).$implicit,l=J_(2).$implicit;return fh(J_(3).setEndTime(o,l.getDay(),i))}),Pd(),Yb(),ya$1(3,`mat-form-field`,19)(4,`mat-select`,12),xv(`ngModelChange`,function(i){let o=dh(e).$implicit;return PS(o.location,i)||(o.location=i),fh(i)}),V_(5,zt,2,2,`mat-option`,20,B_),Pd(),Yb(),Pd(),L_(7,Wt,4,3,`button`,21),L_(8,Bt$1,4,3,`button`,22),Pd()}if(n&2){let e=d.$implicit,t=d.$index,i=J_(2).$implicit,o=J_(3);db(),Ky(`ngModel`,o.timeFrom(e.start_time))(`from`,o.timeFrom((t>0?o.settings()[i.getDay()].blocks[t-1]?.end_time:0)||0))(`no_error`,!0),Kb(),db(),Ky(`ngModel`,o.timeFrom(e.end_time))(`from`,o.timeFrom(e.start_time+.25))(`no_error`,!0),Kb(),db(2),Nv(`ngModel`,e.location),Kb(),db(),H_(o.options()),db(2),P_(t===0?7:-1),db(),P_(t!==0?8:-1)}}function Rt(n,d){if(n&1&&(ya$1(0,`div`,14)(1,`div`,15),V_(2,Vt$1,9,9,`div`,16,B_),Pd(),ya$1(4,`h3`,17),RS(5),oM(6,`date`),Pd()()),n&2){let e=J_().$implicit,t=J_(3);db(2),H_(t.settings()[e.getDay()].blocks),db(3),$d(` `,aM(6,1,e,`EEEE`),` `)}}function Ht(n,d){if(n&1&&L_(0,Rt,7,4,`div`,14),n&2){let e=d.$implicit;P_(J_(3).weekdays_enabled()[e.getDay()]?0:-1)}}function $t(n,d){if(n&1&&(ya$1(0,`div`,9),V_(1,Ht,1,1,null,null,B_),ya$1(3,`h3`,13),RS(4),oM(5,`translate`),Pd()()),n&2){let e=J_(2);db(),H_(e.days),db(3),$d(` `,sM(5,1,`COMMON.WORK_HOURS`),` `)}}function At(n,d){n&1&&(ya$1(0,`div`,10),Xy(1,`img`,25),ya$1(2,`p`,26),RS(3),oM(4,`translate`),Pd()()),n&2&&(db(3),$d(` `,sM(4,1,`COMMON.WORK_SETTINGS_EMPTY`),` `))}function jt(n,d){if(n&1&&(ya$1(0,`main`,3)(1,`div`,6),V_(2,It,5,5,`div`,7,B_),ya$1(4,`h3`,8),RS(5),oM(6,`translate`),Pd()(),L_(7,$t,6,3,`div`,9)(8,At,5,3,`div`,10),Pd()),n&2){let e=J_();db(2),H_(e.days),db(3),$d(` `,sM(6,2,`COMMON.WORK_DAYS`),` `),db(2),P_(e.has_working_days()?7:8)}}function Pt(n,d){n&1&&(ya$1(0,`div`,4),Xy(1,`mat-spinner`,27),ya$1(2,`p`,26),RS(3),oM(4,`translate`),Pd()()),n&2&&(db(),Ky(`diameter`,32),db(2),$d(` `,sM(4,2,`COMMON.WORK_SETTINGS_SAVE`),` `))}function Kt(n,d){if(n&1){let e=q_();ya$1(0,`footer`,5)(1,`button`,28),ov(`click`,function(){dh(e);return fh(J_().saveChanges())}),RS(2),oM(3,`translate`),Pd()()}n&2&&(db(2),$d(` `,sM(3,1,`COMMON.SAVE`),` `))}var wi=(()=>{class n{constructor(){this._data=y($e$1),this._dialog_ref=y(T$1),this.options=It$1([]),this.option=It$1(``),this.settings=It$1([]),this.weekdays_enabled=It$1({}),this.loading=It$1(!1),this.days=new Array(7).fill(0).map((e,t)=>ot$1(vt$1(ot$1(Date.now(),30)),t)),this.has_working_days=Le(()=>{let e=this.weekdays_enabled();return Object.keys(e).some(t=>e[t])}),this.now=Le(()=>Bt$2(Date.now()).getTime())}ngOnInit(){let e=It$2(),t=this._data?.local?this._data.preferences:e.work_preferences,i=[],o={};for(let _ of t||[]){if(!_)continue;let p=(_.blocks||[]).map(f=>l({},f));i[_.day_of_week]=m(l({},_),{blocks:p}),p.length&&(o[_.day_of_week]=!0)}this.settings.set(i),this.weekdays_enabled.set(o);let l$3=[{id:`wfo`,name:et(`COMMON.WORK_OFFICE`),icon:`business`},{id:`wfh`,name:et(`COMMON.WORK_HOME`),icon:`home`},{id:`aol`,name:et(`COMMON.WORK_LEAVE`),icon:`event_busy`}];this.options.set(l$3),this.option.set(l$3[0].id)}timeFrom(e){return Bt$2(it(ot$1(new Date,1),{hours:Math.floor(e),minutes:e*60%60})).getTime()}fromTime(e){let t=new Date(e);return t.getHours()+t.getMinutes()/60}initialiseDay(e){let t=this.settings();t[e]||(t[e]={day_of_week:e,blocks:[]}),t[e].blocks||(t[e].blocks=[]),t[e].blocks.length===0&&this.addBlock(t[e],0),this.settings.set([...t])}addBlock(e,t){e.blocks.splice(t+1,0,{start_time:9,end_time:17,location:`wfo`}),this.cleanupBlocks(e),this.settings.update(i=>[...i])}removeBlock(e,t){e.blocks.length<=1||(e.blocks.splice(t,1),this.settings.update(i=>[...i]))}setEndTime(e,t,i){setTimeout(()=>{e.end_time=this.fromTime(i),this.cleanupBlocks(this.settings()[t]),this.settings.update(o=>[...o])},50)}setStartTime(e,t,i){setTimeout(()=>{e.start_time=this.fromTime(i),this.cleanupBlocks(this.settings()[t]),this.settings.update(o=>[...o])},50)}cleanupBlocks(e){if(e?.blocks?.length)for(let t=0;t<e.blocks.length;t++){let i=e.blocks[t];t>0&&i.start_time<e.blocks[t-1].end_time&&(i.start_time=e.blocks[t-1].end_time),i.end_time<=i.start_time&&(i.end_time=i.start_time+1)}}async saveChanges(e=!0){this.loading.set(!0),this._dialog_ref.disableClose=!0;let t=new Array(7).fill(0).map((i,o)=>({day_of_week:o,blocks:[]}));for(let i of this.days){let o=i.getDay();this.weekdays_enabled()[o]&&(t[o]={day_of_week:o,blocks:this.settings()[o].blocks})}if(this._data?.local)this.loading.set(!1),this._dialog_ref.disableClose=!1;else try{let i=await Kn(`current`);await yo$1(i.id,m(l({},i),{groups:i.groups.filter(o=>!o.startsWith(`placeos_`)),work_preferences:t}))}catch(i){throw S_(`Unable to save user work preferences.`),i}finally{this.loading.set(!1),this._dialog_ref.disableClose=!1}e&&(this._data?.local||Oa$1(),this._dialog_ref.close(t))}setWeekdayEnabled(e,t){this.weekdays_enabled.update(i=>m(l({},i),{[e]:t}))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=jT({type:n,selectors:[[`wfh-settings-modal`]],decls:8,vars:6,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``,1,`bg-base-200`],[1,`relative`,`flex`,`max-h-[calc(100vh-9rem)]`,`w-160`,`max-w-full`,`flex-col`,`space-y-2`,`overflow-x-hidden`,`overflow-y-auto`,`rounded-sm`,`px-2`,`py-4`,`sm:max-h-[65vh]`,`sm:p-4`],[`loading`,``,1,`bg-base-100`,`relative`,`flex`,`h-72`,`w-[24rem]`,`flex-col`,`items-center`,`justify-center`,`space-y-2`,`overflow-hidden`,`rounded-sm`,`text-center`],[1,`border-base-200`,`flex`,`justify-end`,`border-t`,`px-4`,`py-2`],[1,`border-base-300`,`relative`,`mb-4`,`flex`,`w-full`,`items-center`,`justify-between`,`space-x-2`,`rounded-sm`,`border`,`p-2`],[1,`flex`,`flex-1`,`flex-col`,`items-center`,`pt-2`],[1,`bg-base-100`,`absolute`,`top-0`,`left-2`,`-translate-y-1/2`,`px-2`],[1,`border-base-300`,`relative`,`flex`,`w-full`,`flex-col`,`items-center`,`justify-between`,`space-y-4`,`rounded-sm`,`border`,`px-2`,`pt-6`,`pb-4`,`sm:px-4`],[1,`flex`,`flex-col`,`items-center`,`justify-center`,`space-y-4`,`px-8`,`py-16`],[1,`text-xs`,`font-bold`,`uppercase`],[3,`ngModelChange`,`ngModel`],[1,`bg-base-100`,`absolute`,`top-0`,`left-2`,`m-0!`,`-translate-y-1/2`,`px-2`],[1,`border-base-200`,`relative`,`flex`,`w-full`,`items-center`,`justify-between`,`space-x-2`,`rounded-sm`,`border`,`p-2`],[1,`w-1/2`,`flex-1`,`space-y-2`,`pt-2`],[1,`flex`,`items-center`,`space-x-2`],[1,`border-base-200`,`bg-base-100`,`bg-opacity-50`,`absolute`,`top-0`,`left-2`,`-translate-y-1/2`,`rounded-sm`,`border`,`px-2`,`text-sm`,`font-medium`],[1,`w-1/4`,`flex-1`,3,`ngModelChange`,`ngModel`,`from`,`no_error`],[`appearance`,`outline`,1,`no-subscript`,`w-1/4`,`flex-1`],[3,`value`],[`icon`,``,`matRipple`,``,1,`border-base-400`,`h-12`,`w-12`,`rounded-sm`,`border`],[`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`],[`icon`,``,`matRipple`,``,1,`border-base-400`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`],[`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`],[`src`,`assets/icons/no-results.svg`,1,`m-auto`],[1,`opacity-30`],[3,`diameter`],[`btn`,``,`matRipple`,``,1,`w-48`,3,`click`]],template:function(t,i){t&1&&(ya$1(0,`header`,0)(1,`h2`,1),RS(2),oM(3,`translate`),Pd(),L_(4,Nt,4,3,`button`,2),Pd(),L_(5,jt,9,4,`main`,3)(6,Pt,5,4,`div`,4),L_(7,Kt,4,3,`footer`,5)),t&2&&(db(2),$d(` `,sM(3,4,`COMMON.WORK_LOCATION_SETTINGS`),` `),db(2),P_(i.loading()?-1:4),db(),P_(i.loading()?6:5),db(2),P_(i.loading()?-1:7))},dependencies:[LD,Ht$2,Bt$3,f$1,vt$2,qr$1,Fn,Qt$1,Gt$2,X$2,ct,pe,ce$2,Hd$1,Pd$1,ka,z$2,J$2,Z$2,jN,f],encapsulation:2})}}return n})();function w(t,u){if(t&1&&(ya$1(0,`div`,1),RS(1),Pd()),t&2){let e=J_(2);db(),$d(` `,e.initials,` `)}}function j(t,u){if(t&1){let e=q_();ya$1(0,`img`,3),ov(`error`,function(){dh(e);return fh(J_(2).photo_failed.set(!0))}),Pd()}if(t&2){let e=J_(2);Ky(`alt`,e.initials)(`source`,e.user().photo)}}function D(t,u){if(t&1&&(ya$1(0,`div`,0),L_(1,w,2,1,`div`,1)(2,j,1,2,`img`,2),Pd()),t&2){let e=J_();Qy(`user-id`,e.user().id),db(),P_(!e.user().photo||e.photo_failed()?1:2)}}var S$1=(()=>{class t{constructor(){this.user=vU(void 0),this.photo_failed=Pa$1({source:()=>this.user()?.photo,computation:()=>!1}),this.is_valid=Le(()=>{let e=this.user();if(!e)return!1;let n=(e.name||``).trim(),i=(e.email||``).trim();return n.startsWith(`<empty>`)||i.startsWith(`<empty>`)?!1:!!(n||i||e.first_name||e.last_name)})}get initials(){let e=this.user();if(!e)return`NA`;if(e.first_name&&e.last_name)return`${e.first_name[0]}${e.last_name[0]}`;let n=(e.name||``).replace(/<[^>]*>/g,` `).trim();n||(n=(e.email||e.name||``).split(`@`)[0]);let i=n.replace(/[()[\]\-+=\\/@<>]+/gi,` `).split(/\s+/).filter(Boolean);return i.length===0?`NA`:i.length>1?`${i[0][0]}${i[i.length-1][0]}`:i[0].slice(0,2)}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=jT({type:t,selectors:[[`a-user-avatar`]],inputs:{user:[1,`user`]},decls:1,vars:1,consts:[[1,`border-base-100`,`bg-base-200`,`flex`,`h-[2.5em]`,`w-[2.5em]`,`items-center`,`justify-center`,`overflow-hidden`,`rounded-full`,`border-2`],[`initials`,``,1,`text-base-content`,`uppercase`,`opacity-60`],[`auth`,``,1,`flex`,`h-full`,`w-full`,`items-center`,`justify-center`,`object-cover`,`object-center`,3,`alt`,`source`],[`auth`,``,1,`flex`,`h-full`,`w-full`,`items-center`,`justify-center`,`object-cover`,`object-center`,3,`error`,`alt`,`source`]],template:function(n,i){n&1&&L_(0,D,3,2,`div`,0),n&2&&P_(i.is_valid()?0:-1)},dependencies:[H$2],encapsulation:2})}}return t})();var Y=[`*`];function q(e,d){e&1&&(ya$1(0,`button`,7),oM(1,`translate`),ya$1(2,`icon`),RS(3,`close`),Pd()()),e&2&&Yy(`aria-label`,sM(1,1,`COMMON.CLOSE`))}function J(e,d){if(e&1&&L_(0,q,4,3,`button`,7),e&2)P_(J_(2).loading()?-1:0)}function K(e,d){if(e&1&&(ya$1(0,`a`,8),oM(1,`translate`),ya$1(2,`icon`),RS(3,`close`),Pd()()),e&2)Ky(`routerLink`,J_(3).close()),Qy(`aria-label`,sM(1,2,`COMMON.CLOSE`))}function Q(e,d){if(e&1&&L_(0,K,4,4,`a`,8),e&2)P_(J_(2).loading()?-1:0)}function U(e,d){if(e&1&&L_(0,J,1,1)(1,Q,1,1),e&2)P_(J_().close()?.length?1:0)}function W(e,d){e&1&&(nS(0),Xy(1,`div`,9))}function X(e,d){if(e&1&&(ya$1(0,`div`,5),Xs(`motion-fade-in`),Xy(1,`mat-spinner`,10),ya$1(2,`p`,11),RS(3),Pd()()),e&2){let t=J_();db(),Ky(`diameter`,32),db(2),Tv(t.loading())}}function Z(e,d){if(e&1&&(ya$1(0,`kbd`,14),RS(1),Pd()),e&2){let t=J_(2);db(),Tv(t.confirm_hotkey())}}function $(e,d){if(e&1){let t=q_();ya$1(0,`footer`,12)(1,`button`,13),ov(`click`,function(){dh(t);return fh(J_().confirm.emit())}),RS(2),oM(3,`translate`),L_(4,Z,2,1,`kbd`,14),Pd()()}if(e&2){let t=J_();mv(`max-w-156`,!t.full_width()),db(),Ky(`disabled`,t.confirm_disabled()),db(),$d(` `,t.confirm_text()||sM(3,5,`COMMON.SAVE`),` `),db(2),P_(t.confirm_hotkey()?4:-1)}}var _e=(()=>{class e{constructor(){this.loading=vU(``),this.heading=vU(`Fullscreen Modal`),this.confirm_text=vU(``),this.confirm_hotkey=vU(``),this.confirm_disabled=vU(!1),this.close=vU([]),this.hide_confirm=vU(!1),this.hide_close=vU(!1),this.full_width=vU(!1),this.confirm=yU()}static{this.ɵfac=function(f){return new(f||e)}}static{this.ɵcmp=jT({type:e,selectors:[[`fullscreen-modal-shell`],[``,`fs-modal-shell`,``]],inputs:{loading:[1,`loading`],heading:[1,`heading`],confirm_text:[1,`confirm_text`],confirm_hotkey:[1,`confirm_hotkey`],confirm_disabled:[1,`confirm_disabled`],close:[1,`close`],hide_confirm:[1,`hide_confirm`],hide_close:[1,`hide_close`],full_width:[1,`full_width`]},outputs:{confirm:`confirm`},ngContentSelectors:Y,decls:9,vars:12,consts:[[`cdkScrollable`,``,1,`bg-base-200`,`fixed`,`inset-0`,`flex`,`flex-col`,`items-center`,`overflow-auto`,`px-2`],[1,`border-base-300`,`bg-base-100`,`fixed`,`top-0`,`mx-auto`,`h-screen`,`max-w-full`,`border-x`],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`mx-auto`,`my-2`,`flex`,`h-14`,`w-full`,`items-center`,`justify-between`,`rounded-sm`,`border-none`,`px-4`,`py-2`],[`mat-dialog-title`,``,1,`flex`,`items-center`,`text-xl`,`font-medium`,`capitalize`,3,`innerHTML`],[1,`z-0`,`mx-auto`,`h-1/2`,`w-full`,`flex-1`,`space-y-8`,`p-2`],[1,`flex`,`h-1/2`,`w-full`,`flex-1`,`flex-col`,`items-center`,`justify-center`,`space-y-4`,`p-12`],[1,`bg-base-200`,`fixed`,`bottom-0`,`left-1/2`,`z-10`,`mx-auto`,`my-2`,`flex`,`w-full`,`-translate-x-1/2`,`items-center`,`justify-end`,`rounded-sm`,`border-none`,`px-4`,`py-2`,3,`max-w-156`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``,3,`aria-label`],[`icon`,``,`matRipple`,``,3,`routerLink`],[1,`h-24`,`w-full`],[3,`diameter`],[1,`text-center`,`opacity-70`],[1,`bg-base-200`,`fixed`,`bottom-0`,`left-1/2`,`z-10`,`mx-auto`,`my-2`,`flex`,`w-full`,`-translate-x-1/2`,`items-center`,`justify-end`,`rounded-sm`,`border-none`,`px-4`,`py-2`],[`btn`,``,`matRipple`,``,1,`flex`,`min-w-32`,`items-center`,`justify-center`,`gap-2`,3,`click`,`disabled`],[1,`border-base-300`,`bg-base-100`,`text-base-content`,`rounded`,`border`,`px-2`,`py-1`,`text-xs`,`leading-none`,`shadow-sm`]],template:function(f,o){f&1&&(tS(),ya$1(0,`div`,0),Xy(1,`div`,1),ya$1(2,`header`,2),Xy(3,`h2`,3),L_(4,U,2,1),Pd(),ya$1(5,`main`,4),L_(6,W,2,0)(7,X,4,2,`div`,5),Pd(),L_(8,$,5,7,`footer`,6),Pd()),f&2&&(db(),mv(`w-160`,!o.full_width())(`w-full`,o.full_width()),db(),mv(`max-w-156`,!o.full_width()),db(),Ky(`innerHTML`,o.heading(),dC),db(),P_(o.hide_close()?-1:4),db(),mv(`max-w-156`,!o.full_width()),db(),P_(o.loading()?7:6),db(2),P_(!o.loading()&&!o.hide_confirm()?8:-1))},dependencies:[At$1,J$2,Z$2,z$2,Ht$2,Bt$3,jt$3,f$1,vt$2,as,$t$1,f],styles:[`h2[mat-dialog-title][_ngcontent-%COMP%]{color:inherit;font-family:inherit;letter-spacing:inherit;margin:0;padding:0}h2[mat-dialog-title][_ngcontent-%COMP%]:before{display:none}`,`main[_ngcontent-%COMP%]{scroll-margin-top:60px}`]})}}return e})();var ga=[`input`];var fa=[`formField`];var va=[`*`];var Vt=class{source;value;constructor(p,e){this.source=p,this.value=e}};var ba={provide:le$1,useExisting:Ds(()=>Xt),multi:!0};var Nn=new w$1(`MatRadioGroup`);var ya=new w$1(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var Xt=(()=>{class n{_changeDetector=y(pf);_value=null;_name=y(oe).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new Ht$1;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Vt(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(t){return new(t||n)};static ɵdir=at({type:n,selectors:[[`mat-radio-group`]],contentQueries:function(t,i,s){if(t&1&&av(s,Bt,5),t&2){let l;oS(l=iS())&&(i._radios=l)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,WM],required:[2,`required`,`required`,WM],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,WM]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[zS([ba,{provide:Nn,useExisting:n}])]})}return n})();var Bt=(()=>{class n{_elementRef=y(Qt);_changeDetector=y(pf);_focusMonitor=y($e);_radioDispatcher=y(je$1);_defaultOptions=y(ya,{optional:!0});_ngZone=y(le);_renderer=y(or$2);_uniqueId=y(oe).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new Ht$1;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=as$1();_injector=y(De);constructor(){y(L$1).load(Tt$1);let e=y(Nn,{optional:!0}),t=y(new $v(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=qM(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new Vt(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let i=this._inputElement?.nativeElement;i&&(i.setAttribute(`tabindex`,t+``),this._previousTabIndex=t,jm(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===i&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===i&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(t){return new(t||n)};static ɵcmp=jT({type:n,selectors:[[`mat-radio-button`]],viewQuery:function(t,i){if(t&1&&cv(ga,5)(fa,7,Qt),t&2){let s;oS(s=iS())&&(i._inputElement=s.first),oS(s=iS())&&(i._rippleTrigger=s.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(t,i){t&1&&ov(`focus`,function(){return i._inputElement.nativeElement.focus()}),t&2&&(Qy(`id`,i.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),mv(`mat-primary`,i.color===`primary`)(`mat-accent`,i.color===`accent`)(`mat-warn`,i.color===`warn`)(`mat-mdc-radio-checked`,i.checked)(`mat-mdc-radio-disabled`,i.disabled)(`mat-mdc-radio-disabled-interactive`,i.disabledInteractive)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,WM],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:qM(e)],checked:[2,`checked`,`checked`,WM],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,WM],required:[2,`required`,`required`,WM],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,WM]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:va,decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,i){t&1&&(tS(),ya$1(0,`label`,2,0)(2,`span`,3),Xy(3,`span`,4),ya$1(4,`input`,5,1),ov(`change`,function(l){return i._onInputInteraction(l)}),Pd(),ya$1(6,`span`,6),Xy(7,`span`,7)(8,`span`,8),Pd(),ya$1(9,`span`,9),Xy(10,`span`,10),Pd()(),ya$1(11,`span`,11),nS(12),Pd()()),t&2&&(Ky(`labelPosition`,i.labelPosition)(`for`,i.inputId),db(2),mv(`mdc-radio--disabled`,i.disabled),db(2),Ky(`id`,i.inputId)(`checked`,i.checked)(`disabled`,i.disabled&&!i.disabledInteractive)(`required`,i.required),Qy(`name`,i.name)(`value`,i.value)(`aria-label`,i.ariaLabel)(`aria-labelledby`,i.ariaLabelledby)(`aria-describedby`,i.ariaDescribedby)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null),db(5),Ky(`matRippleTrigger`,i._rippleTrigger.nativeElement)(`matRippleDisabled`,i._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[vt$2,m$2],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-pressed-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-checked-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--%NS%mat-radio-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-radio-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-radio-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-radio-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-radio-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-radio-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio--disabled + .mat-internal-form-field-label {
  color: var(--%NS%mat-radio-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-radio-touch-target-size, 48px);
  width: var(--%NS%mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return n})();var Tn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=li({type:n});static ɵinj=Nr({imports:[f$1,Bt,ns]})}return n})();var Ia=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]];var Ma=[`*`,`mat-chip-avatar, [matChipAvatar]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function Ea(n,p){n&1&&(ya$1(0,`span`,3),nS(1,1),Pd())}function wa(n,p){n&1&&(ya$1(0,`span`,6),nS(1,2),Pd())}var Na=`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`;var Ta=[[[``,`matChipEdit`,``]],[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[``,`matChipEditInput`,``]],`*`,[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]];var Ra=[`[matChipEdit]`,`mat-chip-avatar, [matChipAvatar]`,`[matChipEditInput]`,`*`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function Oa(n,p){n&1&&Xy(0,`span`,0)}function Aa(n,p){n&1&&(ya$1(0,`span`,1),nS(1),Pd())}function Da(n,p){n&1&&(ya$1(0,`span`,3),nS(1,1),Pd())}function Pa(n,p){n&1&&nS(0,2)}function Fa(n,p){n&1&&Xy(0,`span`,7)}function La(n,p){if(n&1&&L_(0,Pa,1,0)(1,Fa,1,0,`span`,7),n&2)P_(J_().contentEditInput?0:1)}function Va(n,p){n&1&&nS(0,3)}function Ba(n,p){n&1&&(ya$1(0,`span`,6),nS(1,4),Pd())}var Ln=[`*`];var Ua=`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`;var Vn=new w$1(`mat-chips-default-options`,{providedIn:`root`,factory:()=>({separatorKeyCodes:[13]})});var On=new w$1(`MatChipAvatar`);var An=new w$1(`MatChipTrailingIcon`);var Dn=new w$1(`MatChipEdit`);var Yt=new w$1(`MatChipRemove`);var ti=new w$1(`MatChip`);var Bn=(()=>{class n{_elementRef=y(Qt);_parentChip=y(ti);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?``:null}constructor(){y(L$1).load(Tt$1),this._elementRef.nativeElement.nodeName===`BUTTON`&&this._elementRef.nativeElement.setAttribute(`type`,`button`)}focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(t){return new(t||n)};static ɵdir=at({type:n,selectors:[[``,`matChipContent`,``]],hostAttrs:[1,`mat-mdc-chip-action`,`mdc-evolution-chip__action`,`mdc-evolution-chip__action--presentational`],hostVars:8,hostBindings:function(t,i){t&2&&(Qy(`disabled`,i._getDisabledAttribute())(`aria-disabled`,i.disabled),mv(`mdc-evolution-chip__action--primary`,i._isPrimary)(`mdc-evolution-chip__action--secondary`,!i._isPrimary)(`mdc-evolution-chip__action--trailing`,!i._isPrimary&&!i._isLeading))},inputs:{disabled:[2,`disabled`,`disabled`,WM],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?-1:qM(e)],_allowFocusWhenDisabled:`_allowFocusWhenDisabled`}})}return n})();var ii=(()=>{class n extends Bn{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static ɵfac=(()=>{let e;return function(i){return(e||(e=Yg(n)))(i||n)}})();static ɵdir=at({type:n,selectors:[[``,`matChipAction`,``]],hostVars:3,hostBindings:function(t,i){t&1&&ov(`click`,function(l){return i._handleClick(l)})(`keydown`,function(l){return i._handleKeydown(l)}),t&2&&(Qy(`tabindex`,i._getTabindex()),mv(`mdc-evolution-chip__action--presentational`,!1))},features:[Py]})}return n})();var Un=(()=>{class n extends ii{_isPrimary=!1;_handleClick(e){this.disabled||(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}static ɵfac=(()=>{let e;return function(i){return(e||(e=Yg(n)))(i||n)}})();static ɵdir=at({type:n,selectors:[[``,`matChipRemove`,``]],hostAttrs:[`role`,`button`,1,`mat-mdc-chip-remove`,`mat-mdc-chip-trailing-icon`,`mat-focus-indicator`,`mdc-evolution-chip__icon`,`mdc-evolution-chip__icon--trailing`],hostVars:1,hostBindings:function(t,i){t&2&&Qy(`aria-hidden`,null)},features:[zS([{provide:Yt,useExisting:n}]),Py]})}return n})();var Jt=(()=>{class n{_changeDetectorRef=y(pf);_elementRef=y(Qt);_tagName=y(gU);_ngZone=y(le);_focusMonitor=y($e);_globalRippleOptions=y(Q$2,{optional:!0});_document=y(Y$2);_onFocus=new fe;_onBlur=new fe;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=as$1();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=y(oe).getId(`mat-mdc-chip-`);ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new Ht$1;destroyed=new Ht$1;basicChipAttrName=`mat-basic-chip`;leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=y(N$1);_injector=y(De);constructor(){let e=y(L$1);e.load(Tt$1),e.load(H$1),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:`mat-mdc-chip-ripple`,disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(`.mat-mdc-chip-action-label`),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=bE(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let i=t._elementRef.nativeElement;return i===e||i.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static ɵfac=function(t){return new(t||n)};static ɵcmp=jT({type:n,selectors:[[`mat-basic-chip`],[``,`mat-basic-chip`,``],[`mat-chip`],[``,`mat-chip`,``]],contentQueries:function(t,i,s){if(t&1&&av(s,On,5)(s,Dn,5)(s,An,5)(s,Yt,5)(s,On,5)(s,An,5)(s,Dn,5)(s,Yt,5),t&2){let l;oS(l=iS())&&(i.leadingIcon=l.first),oS(l=iS())&&(i.editIcon=l.first),oS(l=iS())&&(i.trailingIcon=l.first),oS(l=iS())&&(i.removeIcon=l.first),oS(l=iS())&&(i._allLeadingIcons=l),oS(l=iS())&&(i._allTrailingIcons=l),oS(l=iS())&&(i._allEditIcons=l),oS(l=iS())&&(i._allRemoveIcons=l)}},viewQuery:function(t,i){if(t&1&&cv(ii,5),t&2){let s;oS(s=iS())&&(i.primaryAction=s.first)}},hostAttrs:[1,`mat-mdc-chip`],hostVars:31,hostBindings:function(t,i){t&1&&ov(`keydown`,function(l){return i._handleKeydown(l)}),t&2&&(nv(`id`,i.id),Qy(`role`,i.role)(`aria-label`,i.ariaLabel),wS(`mat-`+(i.color||`primary`)),mv(`mdc-evolution-chip`,!i._isBasicChip)(`mdc-evolution-chip--disabled`,i.disabled)(`mdc-evolution-chip--with-trailing-action`,i._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,i.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,i.leadingIcon)(`mdc-evolution-chip--with-avatar`,i.leadingIcon)(`mat-mdc-chip-with-avatar`,i.leadingIcon)(`mat-mdc-chip-highlighted`,i.highlighted)(`mat-mdc-chip-disabled`,i.disabled)(`mat-mdc-basic-chip`,i._isBasicChip)(`mat-mdc-standard-chip`,!i._isBasicChip)(`mat-mdc-chip-with-trailing-icon`,i._hasTrailingIcon())(`_mat-animation-noopable`,i._animationsDisabled))},inputs:{role:`role`,id:`id`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaDescription:[0,`aria-description`,`ariaDescription`],value:`value`,color:`color`,removable:[2,`removable`,`removable`,WM],highlighted:[2,`highlighted`,`highlighted`,WM],disableRipple:[2,`disableRipple`,`disableRipple`,WM],disabled:[2,`disabled`,`disabled`,WM]},outputs:{removed:`removed`,destroyed:`destroyed`},exportAs:[`matChip`],features:[zS([{provide:ti,useExisting:n}])],ngContentSelectors:Ma,decls:8,vars:2,consts:[[1,`mat-mdc-chip-focus-overlay`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipContent`,``],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`]],template:function(t,i){t&1&&(tS(Ia),Xy(0,`span`,0),ya$1(1,`span`,1)(2,`span`,2),L_(3,Ea,2,0,`span`,3),ya$1(4,`span`,4),nS(5),Xy(6,`span`,5),Pd()()(),L_(7,wa,2,0,`span`,6)),t&2&&(db(3),P_(i.leadingIcon?3:-1),db(4),P_(i._hasTrailingIcon()?7:-1))},dependencies:[Bn],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})}return n})();var Zt=(()=>{class n{_elementRef=y(Qt);_document=y(Y$2);initialize(e){this.getNativeElement().focus(),this.setValue(e)}getNativeElement(){return this._elementRef.nativeElement}setValue(e){this.getNativeElement().textContent=e,this._moveCursorToEndOfInput()}getValue(){return this.getNativeElement().textContent||``}_moveCursorToEndOfInput(){let e=this._document.createRange();e.selectNodeContents(this.getNativeElement()),e.collapse(!1);let t=window.getSelection();t.removeAllRanges(),t.addRange(e)}static ɵfac=function(t){return new(t||n)};static ɵdir=at({type:n,selectors:[[`span`,`matChipEditInput`,``]],hostAttrs:[`role`,`textbox`,`tabindex`,`-1`,`contenteditable`,`true`,1,`mat-chip-edit-input`]})}return n})();var ni=(()=>{class n extends Jt{basicChipAttrName=`mat-basic-chip-row`;_renderer=y(or$2);_cleanupMousedown;_editStartPending=!1;editable=!1;edited=new Ht$1;defaultEditInput;contentEditInput;_alreadyFocused=!1;_isEditing=!1;constructor(){super(),this.role=`row`,this._onBlur.pipe(_E(this.destroyed)).subscribe(()=>{this._isEditing&&!this._editStartPending&&this._onEditFinish(),this._alreadyFocused=!1})}ngAfterViewInit(){super.ngAfterViewInit(),this._cleanupMousedown=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`mousedown`,()=>{this._alreadyFocused=this._hasFocus()}))}ngOnDestroy(){super.ngOnDestroy(),this._cleanupMousedown?.()}_hasLeadingActionIcon(){return!this._isEditing&&!!this.editIcon}_hasTrailingIcon(){return!this._isEditing&&super._hasTrailingIcon()}_handleFocus(){!this._isEditing&&!this.disabled&&this.focus()}_handleKeydown(e){e.keyCode===13&&!this.disabled?this._isEditing?(e.preventDefault(),this._onEditFinish()):this.editable&&this._startEditing(e):this._isEditing?e.stopPropagation():super._handleKeydown(e)}_handleClick(e){!this.disabled&&this.editable&&!this._isEditing&&this._alreadyFocused&&(e.preventDefault(),e.stopPropagation(),this._startEditing(e))}_handleDoubleclick(e){!this.disabled&&this.editable&&this._startEditing(e)}_edit(){this._changeDetectorRef.markForCheck(),this._startEditing()}_startEditing(e){if(!this.primaryAction||this.removeIcon&&e&&this._getSourceAction(e.target)===this.removeIcon)return;let t=this.value;this._isEditing=this._editStartPending=!0,jm(()=>{this._getEditInput().initialize(t),setTimeout(()=>this._ngZone.run(()=>this._editStartPending=!1))},{injector:this._injector})}_onEditFinish(){this._isEditing=this._editStartPending=!1,this.edited.emit({chip:this,value:this._getEditInput().getValue()}),(this._document.activeElement===this._getEditInput().getNativeElement()||this._document.activeElement===this._document.body)&&this.primaryAction.focus()}_isRippleDisabled(){return super._isRippleDisabled()||this._isEditing}_getEditInput(){return this.contentEditInput||this.defaultEditInput}static ɵfac=function(t){return new(t||n)};static ɵcmp=jT({type:n,selectors:[[`mat-chip-row`],[``,`mat-chip-row`,``],[`mat-basic-chip-row`],[``,`mat-basic-chip-row`,``]],contentQueries:function(t,i,s){if(t&1&&av(s,Zt,5),t&2){let l;oS(l=iS())&&(i.contentEditInput=l.first)}},viewQuery:function(t,i){if(t&1&&cv(Zt,5),t&2){let s;oS(s=iS())&&(i.defaultEditInput=s.first)}},hostAttrs:[1,`mat-mdc-chip`,`mat-mdc-chip-row`,`mdc-evolution-chip`],hostVars:29,hostBindings:function(t,i){t&1&&ov(`focus`,function(){return i._handleFocus()})(`click`,function(l){return i._hasInteractiveActions()?i._handleClick(l):null})(`dblclick`,function(l){return i._handleDoubleclick(l)}),t&2&&(nv(`id`,i.id),Qy(`tabindex`,i.disabled?null:-1)(`aria-label`,null)(`aria-description`,null)(`role`,i.role),mv(`mat-mdc-chip-with-avatar`,i.leadingIcon)(`mat-mdc-chip-disabled`,i.disabled)(`mat-mdc-chip-editing`,i._isEditing)(`mat-mdc-chip-editable`,i.editable)(`mdc-evolution-chip--disabled`,i.disabled)(`mdc-evolution-chip--with-leading-action`,i._hasLeadingActionIcon())(`mdc-evolution-chip--with-trailing-action`,i._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,i.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,i.leadingIcon)(`mdc-evolution-chip--with-avatar`,i.leadingIcon)(`mat-mdc-chip-highlighted`,i.highlighted)(`mat-mdc-chip-with-trailing-icon`,i._hasTrailingIcon()))},inputs:{editable:`editable`},outputs:{edited:`edited`},features:[zS([{provide:Jt,useExisting:n},{provide:ti,useExisting:n}]),Py],ngContentSelectors:Ra,decls:9,vars:8,consts:[[1,`mat-mdc-chip-focus-overlay`],[`role`,`gridcell`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--leading`],[`role`,`gridcell`,`matChipAction`,``,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`,3,`disabled`],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[`aria-hidden`,`true`,1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[`role`,`gridcell`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`],[`matChipEditInput`,``]],template:function(t,i){t&1&&(tS(Ta),L_(0,Oa,1,0,`span`,0),L_(1,Aa,2,0,`span`,1),ya$1(2,`span`,2),L_(3,Da,2,0,`span`,3),ya$1(4,`span`,4),L_(5,La,2,1)(6,Va,1,0),Xy(7,`span`,5),Pd()(),L_(8,Ba,2,0,`span`,6)),t&2&&(P_(i._isEditing?-1:0),db(),P_(i._hasLeadingActionIcon()?1:-1),db(),Ky(`disabled`,i.disabled),Qy(`aria-description`,i.ariaDescription)(`aria-label`,i.ariaLabel),db(),P_(i.leadingIcon?3:-1),db(2),P_(i._isEditing?5:6),db(3),P_(i._hasTrailingIcon()?8:-1))},dependencies:[ii,Zt],styles:[Na],encapsulation:2})}return n})();var Ga=(()=>{class n{_elementRef=y(Qt);_changeDetectorRef=y(pf);_dir=y(jt$2,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new fe;_defaultRole=`presentation`;get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new ia;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(TE(null),Oc(()=>bE(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains(`mat-mdc-chip`))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(TE(this._chips)).subscribe(e=>{let t=[];e.forEach(i=>i._getActions().forEach(s=>t.push(s))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new ce(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:`ltr`).withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(_E(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(_E(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(TE(null),_E(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(_E(this._destroyed)).subscribe(e=>{let i=this._chips.toArray().indexOf(e.chip),s=e.chip._hasFocus(),l=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),L=s||l;this._isValidIndex(i)&&L&&(this._lastDestroyedFocusedChipIndex=i)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static ɵfac=function(t){return new(t||n)};static ɵcmp=jT({type:n,selectors:[[`mat-chip-set`]],contentQueries:function(t,i,s){if(t&1&&av(s,Jt,5),t&2){let l;oS(l=iS())&&(i._chips=l)}},hostAttrs:[1,`mat-mdc-chip-set`,`mdc-evolution-chip-set`],hostVars:1,hostBindings:function(t,i){t&1&&ov(`keydown`,function(l){return i._handleKeydown(l)}),t&2&&Qy(`role`,i.role)},inputs:{disabled:[2,`disabled`,`disabled`,WM],role:`role`,tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:qM(e)]},ngContentSelectors:Ln,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(t,i){t&1&&(tS(),jd(0,`div`,0),nS(1),Bd())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})}return n})();var ei=class{source;value;constructor(p,e){this.source=p,this.value=e}};var Gn=(()=>{class n extends Ga{ngControl=y(ae$1,{optional:!0,self:!0});controlType=`mat-chip-grid`;_chipInput;_defaultRole=`grid`;_errorStateTracker;_uid=y(oe).getId(`mat-chip-grid-`);_ariaDescribedbyIds=[];_onTouched=()=>{};_onChange=()=>{};get disabled(){return this.ngControl?!!this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=e,this._syncChipsState(),this.stateChanges.next()}get id(){return this._chipInput?this._chipInput.id:this._uid}get empty(){return(!this._chipInput||this._chipInput.empty)&&(!this._chips||this._chips.length===0)}get placeholder(){return this._chipInput?this._chipInput.placeholder:this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder=``;get focused(){return this._chipInput?.focused||this._hasFocusedChip()}get required(){return this._required??this.ngControl?.control?.hasValidator(zi.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get shouldLabelFloat(){return!this.empty||this.focused}get value(){return this._value}set value(e){this._value=e}_value=[];get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}change=new Ht$1;valueChange=new Ht$1;_chips=void 0;stateChanges=new fe;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(){super();let e=y(Aa$1,{optional:!0}),t=y(xa,{optional:!0}),i=y(Te),s=y(Qn$1,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._errorStateTracker=new J$3(i,s||this.ngControl,t,e,this.stateChanges)}ngAfterContentInit(){this.chipBlurChanges.pipe(_E(this._destroyed)).subscribe(()=>{this._blur(),this.stateChanges.next()}),bE(this.chipFocusChanges,this._chips.changes).pipe(_E(this._destroyed)).subscribe(()=>this.stateChanges.next())}ngDoCheck(){this.ngControl&&this.updateErrorState()}ngOnDestroy(){super.ngOnDestroy(),this.stateChanges.complete()}registerInput(e){this._chipInput=e,this._chipInput.setDescribedByIds(this._ariaDescribedbyIds),this._elementRef.nativeElement.removeAttribute(`aria-describedby`)}onContainerClick(e){!this.disabled&&!this._originatesFromChip(e)&&this.focus()}focus(){if(!(this.disabled||this._chipInput?.focused)){if(!this._chips.length||this._chips.first.disabled){if(!this._chipInput)return;Promise.resolve().then(()=>this._chipInput.focus())}else{let e=this._keyManager.activeItem;e?e.focus():this._keyManager.setFirstItemActive()}this.stateChanges.next()}}get describedByIds(){if(this._chipInput)return this._chipInput.describedByIds||[];let e=this._elementRef.nativeElement.getAttribute(`aria-describedby`);return e?e.split(` `):[]}setDescribedByIds(e){this._ariaDescribedbyIds=e,this._chipInput?this._chipInput.setDescribedByIds(e):e.length?this._elementRef.nativeElement.setAttribute(`aria-describedby`,e.join(` `)):this._elementRef.nativeElement.removeAttribute(`aria-describedby`)}writeValue(e){this._value=e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this.stateChanges.next()}updateErrorState(){this._errorStateTracker.updateErrorState()}_blur(){this.disabled||setTimeout(()=>{this.focused||(this._propagateChanges(),this._markAsTouched())})}_allowFocusEscape(){this._chipInput?.focused||super._allowFocusEscape()}_handleKeydown(e){let t=e.keyCode,i=this._keyManager.activeItem;if(t===9)this._chipInput?.focused&&st(e,`shiftKey`)&&this._chips.length&&!this._chips.last.disabled?(e.preventDefault(),i?this._keyManager.setActiveItem(i):this._focusLastChip()):super._allowFocusEscape();else if(!this._chipInput?.focused)if((t===38||t===40)&&i){let s=this._chipActions.filter(le=>le._isPrimary===i._isPrimary&&!this._skipPredicate(le)),l=s.indexOf(i),L=e.keyCode===38?-1:1;e.preventDefault(),l>-1&&this._isValidIndex(l+L)&&this._keyManager.setActiveItem(s[l+L])}else super._handleKeydown(e);this.stateChanges.next()}_redirectDestroyedChipFocus(){this._lastDestroyedFocusedChipIndex!==null&&(super._redirectDestroyedChipFocus(),(!this._chips.length||this._chips.length===1&&this._chips.first.disabled)&&this._keyManager.updateActiveItem(-1))}_focusLastChip(){this._chips.length&&this._chips.last.focus()}_propagateChanges(){let e=this._chips.length?this._chips.toArray().map(t=>t.value):[];this._value=e,this.change.emit(new ei(this,e)),this.valueChange.emit(e),this._onChange(e),this._changeDetectorRef.markForCheck()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next()}static ɵfac=function(t){return new(t||n)};static ɵcmp=jT({type:n,selectors:[[`mat-chip-grid`]],contentQueries:function(t,i,s){if(t&1&&av(s,ni,5),t&2){let l;oS(l=iS())&&(i._chips=l)}},hostAttrs:[1,`mat-mdc-chip-set`,`mat-mdc-chip-grid`,`mdc-evolution-chip-set`],hostVars:10,hostBindings:function(t,i){t&1&&ov(`focus`,function(){return i.focus()})(`blur`,function(){return i._blur()}),t&2&&(Qy(`role`,i.role)(`tabindex`,i.disabled||i._chips&&i._chips.length===0?-1:i.tabIndex)(`aria-disabled`,i.disabled.toString())(`aria-invalid`,i.errorState),mv(`mat-mdc-chip-list-disabled`,i.disabled)(`mat-mdc-chip-list-invalid`,i.errorState)(`mat-mdc-chip-list-required`,i.required))},inputs:{disabled:[2,`disabled`,`disabled`,WM],placeholder:`placeholder`,required:[2,`required`,`required`,WM],value:`value`,errorStateMatcher:`errorStateMatcher`},outputs:{change:`change`,valueChange:`valueChange`},features:[zS([{provide:Ei$1,useExisting:n}]),Py],ngContentSelectors:Ln,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(t,i){t&1&&(tS(),jd(0,`div`,0),nS(1),Bd())},styles:[Ua],encapsulation:2})}return n})();var zn=(()=>{class n{_elementRef=y(Qt);focused=!1;get chipGrid(){return this._chipGrid}set chipGrid(e){e&&(this._chipGrid=e,this._chipGrid.registerInput(this))}_chipGrid;addOnBlur=!1;separatorKeyCodes;chipEnd=new Ht$1;placeholder=``;id=y(oe).getId(`mat-mdc-chip-list-input-`);get disabled(){return this._disabled||this._chipGrid&&this._chipGrid.disabled}set disabled(e){this._disabled=e}_disabled=!1;readonly=!1;disabledInteractive;get empty(){return!this.inputElement.value}inputElement;constructor(){let e=y(Vn),t=y(Fi,{optional:!0});this.inputElement=this._elementRef.nativeElement,this.separatorKeyCodes=e.separatorKeyCodes,this.disabledInteractive=e.inputDisabledInteractive??!1,t&&this.inputElement.classList.add(`mat-mdc-form-field-input-control`)}ngOnChanges(){this._chipGrid.stateChanges.next()}ngOnDestroy(){this.chipEnd.complete()}_keydown(e){this.empty&&e.keyCode===8?(e.repeat||this._chipGrid._focusLastChip(),e.preventDefault()):this._emitChipEnd(e)}_blur(){this.addOnBlur&&this._emitChipEnd(),this.focused=!1,this._chipGrid.focused||this._chipGrid._blur(),this._chipGrid.stateChanges.next()}_focus(){this.focused=!0,this._chipGrid.stateChanges.next()}_emitChipEnd(e){(!e||this._isSeparatorKey(e)&&!e.repeat)&&(this.chipEnd.emit({input:this.inputElement,value:this.inputElement.value,chipInput:this}),e?.preventDefault())}_onInput(){this._chipGrid.stateChanges.next()}focus(){this.inputElement.focus()}clear(){this.inputElement.value=``}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}_isSeparatorKey(e){if(!this.separatorKeyCodes)return!1;for(let t of this.separatorKeyCodes){let i,s;typeof t==`number`?(i=t,s=null):(i=t.keyCode,s=t.modifiers);let l=s?.length?st(e,...s):!st(e);if(i===e.keyCode&&l)return!0}return!1}_getReadonlyAttribute(){return this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(t){return new(t||n)};static ɵdir=at({type:n,selectors:[[`input`,`matChipInputFor`,``]],hostAttrs:[1,`mat-mdc-chip-input`,`mat-mdc-input-element`,`mdc-text-field__input`,`mat-input-element`],hostVars:8,hostBindings:function(t,i){t&1&&ov(`keydown`,function(l){return i._keydown(l)})(`blur`,function(){return i._blur()})(`focus`,function(){return i._focus()})(`input`,function(){return i._onInput()}),t&2&&(nv(`id`,i.id),Qy(`disabled`,i.disabled&&!i.disabledInteractive?``:null)(`placeholder`,i.placeholder||null)(`aria-invalid`,i._chipGrid&&i._chipGrid.ngControl?i._chipGrid.ngControl.invalid:null)(`aria-required`,i._chipGrid&&i._chipGrid.required||null)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null)(`readonly`,i._getReadonlyAttribute())(`required`,i._chipGrid&&i._chipGrid.required||null))},inputs:{chipGrid:[0,`matChipInputFor`,`chipGrid`],addOnBlur:[2,`matChipInputAddOnBlur`,`addOnBlur`,WM],separatorKeyCodes:[0,`matChipInputSeparatorKeyCodes`,`separatorKeyCodes`],placeholder:`placeholder`,id:`id`,disabled:[2,`disabled`,`disabled`,WM],readonly:[2,`readonly`,`readonly`,WM],disabledInteractive:[2,`matChipInputDisabledInteractive`,`disabledInteractive`,WM]},outputs:{chipEnd:`matChipInputTokenEnd`},exportAs:[`matChipInput`,`matChipInputFor`],features:[Da$1]})}return n})();var Hn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=li({type:n});static ɵinj=Nr({providers:[Te,{provide:Vn,useValue:{separatorKeyCodes:[13]}}],imports:[f$1,ns]})}return n})();var Wn=(()=>{class n{constructor(){this.url=y($e$1)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=jT({type:n,selectors:[[`image-viewer`]],decls:6,vars:4,consts:[[1,`bg-base-200`,`h-screen`,`w-screen`],[`auth`,``,`alt`,``,1,`h-full`,`w-full`,`object-contain`,`object-center`,3,`source`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``,1,`bg-base-100`,`absolute`,`top-1`,`right-1`]],template:function(t,i){t&1&&(ya$1(0,`div`,0),Xy(1,`img`,1),ya$1(2,`button`,2),oM(3,`translate`),ya$1(4,`icon`),RS(5,`close`),Pd()()()),t&2&&(db(),Ky(`source`,i.url),db(),Qy(`aria-label`,sM(3,2,`COMMON.CLOSE`)))},dependencies:[z$2,H$2,Ht$2,Bt$3,f],encapsulation:2})}}return n})();function Ha(n,p=``){let e=p.split(`,`).map(s=>s.trim().toLowerCase()).filter(s=>!!s);if(!e.length)return!0;let t=n.name.toLowerCase(),i=(n.type||``).toLowerCase();return e.some(s=>s.startsWith(`.`)?t.endsWith(s):s.endsWith(`/*`)?i.startsWith(s.slice(0,-1)):i===s)}function jn(n,{accept:p,max_size:e}){if(!Ha(n,p))return S_(et(`FORM.FILE_TYPE_NOT_ALLOWED`,{name:n.name})),!1;if(e>0&&n.size>e){let t=`${Math.round(e/1024/1024*10)/10} MB`;return S_(et(`FORM.FILE_TOO_LARGE`,{name:n.name,size:t})),!1}return!0}function qn(n,p,e,t){let i=n.uploadFileWithProgress(p),s=Hs(()=>{let l=i();if(!l)return;let L=l instanceof Error?{id:``,name:p.name,progress:0,link:``,formatted_size:``,size:p.size,upload:null,error:l.message||`Upload failed`}:l;ie(()=>t(L)),(L.error||L.progress>=100)&&s.destroy()},{injector:e})}var Wa=[`image_list`];var ja=[`file_input`];var qa=n=>({item:n});var Ka=(n,p)=>p.key;function $a(n,p){if(n&1){let e=q_();ya$1(0,`div`,15),Xy(1,`img`,16),ya$1(2,`div`,17),Xy(3,`div`,18),ya$1(4,`div`,19)(5,`button`,20),oM(6,`translate`),ov(`click`,function(){let i=dh(e).$implicit;return fh(J_().copyLink(i))}),ya$1(7,`icon`),RS(8,`link`),Pd()(),ya$1(9,`button`,20),oM(10,`translate`),ov(`click`,function(){let i=dh(e).$implicit;return fh(J_().viewImage(i))}),ya$1(11,`icon`),RS(12,`visibility`),Pd()(),ya$1(13,`button`,21),oM(14,`translate`),ov(`click`,function(){let i=dh(e).$implicit;return fh(J_().removeImage(i))}),ya$1(15,`icon`),RS(16,`close`),Pd()()()()()}if(n&2){let e=p.$implicit,t=J_();gv(`transform`,`translate(-`+t.offset()+`00%)`),db(),Ky(`source`,e),db(4),Qy(`aria-label`,sM(6,7,`COMMON.COPY_LINK`)),db(4),Qy(`aria-label`,sM(10,9,`COMMON.VIEW`)),db(4),Ky(`disabled`,t.disabled()),Qy(`aria-label`,sM(14,11,`COMMON.REMOVE`))}}function Qa(n,p){if(n&1&&Xy(0,`mat-progress-spinner`,23),n&2){let e=J_().$implicit;Ky(`value`,e.progress)(`diameter`,64)}}function Xa(n,p){if(n&1&&(ya$1(0,`icon`,24),RS(1,`warning`),Pd()),n&2){let e=J_().$implicit;Ky(`label`,e.error)}}function Za(n,p){n&1&&(ya$1(0,`div`,25)(1,`icon`,26),RS(2,`refresh`),Pd()())}function Ya(n,p){if(n&1){let e=q_();ya$1(0,`div`,22),ov(`click`,function(){let i=dh(e).$implicit;return fh(J_().retryUpload(i))}),L_(1,Qa,1,2,`mat-progress-spinner`,23),L_(2,Xa,2,1,`icon`,24),L_(3,Za,3,0,`div`,25),Pd()}if(n&2){let e=p.$implicit;gv(`transform`,`translate(-`+J_().offset()+`00%)`),Ky(`matTooltip`,e.error),db(),P_(e.error?-1:1),db(),P_(e.error?2:-1),db(),P_(e.error?3:-1)}}function Ja(n,p){if(n&1){let e=q_();ya$1(0,`button`,27),oM(1,`translate`),ov(`click`,function(){dh(e);return fh(J_().previousOffset())}),ya$1(2,`icon`),RS(3,`chevron_left`),Pd()()}if(n&2)Ky(`disabled`,J_().offset()===0),Qy(`aria-label`,sM(1,2,`COMMON.PREVIOUS`))}function eo(n,p){if(n&1){let e=q_();ya$1(0,`button`,28),oM(1,`translate`),ov(`click`,function(){dh(e);return fh(J_().nextOffset())}),ya$1(2,`icon`),RS(3,`chevron_right`),Pd()()}if(n&2){let e=J_();Ky(`disabled`,e.offset()>=e.length()-e.view_space()),Qy(`aria-label`,sM(1,2,`COMMON.NEXT`))}}function to(n,p){if(n&1){let e=q_();ya$1(0,`mat-chip-row`,29),ov(`removed`,function(){let i=dh(e).$implicit;return fh(J_().removeImage(i))}),ya$1(1,`div`,30),RS(2),Pd(),ya$1(3,`button`,31),oM(4,`translate`),ya$1(5,`icon`),RS(6,`cancel`),Pd()()()}if(n&2){let e=p.$implicit;db(2),Tv(e),db(),Qy(`aria-label`,aM(4,2,`COMMON.REMOVE_ITEM`,qS(5,qa,e)))}}var $n=(()=>{class n extends xn{constructor(){super(...arguments),this._clipboard=y(Sr$1),this._uploads=y(_d),this._dialog=y(ee),this._injector=y(De),this.list=It$1([]),this.uploads=It$1([]),this.offset=It$1(0),this.disabled=It$1(!1),this.max_size=vU(0),this.dragging=It$1(!1),this.view_space=It$1(0),this.separators=[188,13],this.length=Le(()=>this.list().length+this.uploads().length+1),this._list_el=EU(`image_list`),this._file_input=EU(`file_input`),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e,this.setDisabledState=e=>this.disabled.set(e)}ngAfterViewInit(){this.updateViewSpace()}updateViewSpace(){this.timeout(`init_view_space`,()=>{let e=this._list_el()?.nativeElement?.getBoundingClientRect();e&&this.view_space.set(Math.floor(e.width/152))},100)}copyLink(e){this._clipboard.copy(e),Wo$1(et(`COMMON.LINK_COPIED`))}viewImage(e){this._dialog.open(Wn,{data:e})}removeImage(e){this.setValue(this.list().filter(t=>t!==e))}addImage(e){e.value&&(this.setValue(ce$1([...this.list(),e.value])),e.chipInput.inputElement.value=``)}addImageUrl(e){this.setValue(ce$1([...this.list(),e]))}retryUpload(e){this.disabled()||!e.error||(this._removeUpload(e.key),this._uploadFile(e.file))}previousOffset(){this.offset.update(e=>e-1)}nextOffset(){this.offset.update(e=>e+1)}uploadImages(e){let t=e.target;if(!t?.files?.length)return;let i={accept:`image/*`,max_size:this.max_size()};for(let l=0;l<t.files.length;l++)jn(t.files[l],i)&&this._uploadFile(t.files[l]);let s=this._file_input()?.nativeElement;s&&(s.value=``)}setValue(e){let t=e||[];this.list.set(t),this._onChange&&this._onChange(t)}writeValue(e){this.list.set(e||[])}_uploadFile(e){let t=Ko$1(8);this.uploads.update(i=>[...i,{key:t,file:e,progress:0}]),qn(this._uploads,e,this._injector,i=>{if(i.error)S_(et(`FORM.UPLOAD_FAILED`,{name:e.name,error:i.error}));else if(i.progress>=100){this._removeUpload(t),this.addImageUrl(i.link);return}this.uploads.update(s=>s.map(l$2=>l$2.key===t?m(l({},l$2),{progress:i.progress,error:i.error}):l$2))})}_removeUpload(e){this.uploads.update(t=>t.filter(i=>i.key!==e))}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Yg(n)))(i||n)}})()}static{this.ɵcmp=jT({type:n,selectors:[[`image-list-field`]],viewQuery:function(t,i){t&1&&lv(i._list_el,Wa,5)(i._file_input,ja,5),t&2&&sS(2)},inputs:{max_size:[1,`max_size`]},features:[zS([hf(()=>n)]),Py],decls:24,vars:22,consts:[[`image_list`,``],[`file_input`,``],[`chipList`,``],[`images`,``,1,`relative`,`mb-2`,`flex`,`w-full`,`items-center`,`space-x-2`,`overflow-hidden`,`py-2`,3,`resize`],[`image`,``,1,`border-base-200`,`hover:border-base-300`,`hover:bg-base-200`,`relative`,`flex`,`h-32`,`w-36`,`shrink-0`,`cursor-pointer`,`flex-col`,`items-center`,`justify-center`,`rounded-xl`,`border-2`,`border-dashed`],[1,`text-4xl`,`opacity-60`],[1,`px-4`,`text-center`,`opacity-60`],[`type`,`file`,`accept`,`image/*`,`multiple`,``,1,`absolute`,`inset-0`,`h-32`,`w-32`,`cursor-pointer`,`opacity-0`,3,`dragenter`,`dragleave`,`drop`,`change`,`disabled`],[`image`,``,1,`bg-base-200`,`relative`,`h-32`,`w-36`,`shrink-0`,`overflow-hidden`,`rounded-sm`,`bg-cover`,`bg-center`,3,`transform`],[`upload`,``,1,`border-base-content/10`,`bg-base-200`,`flex`,`h-32`,`w-36`,`shrink-0`,`items-center`,`justify-center`,`rounded-sm`,`border`,`bg-cover`,`bg-center`,3,`transform`,`matTooltip`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`left-0`,`-translate-y-1/2`,`transform`,3,`disabled`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`right-0`,`-translate-y-1/2`,`transform`,3,`disabled`],[`appearance`,`outline`,1,`w-full`],[3,`disabled`],[3,`matChipInputTokenEnd`,`placeholder`,`matChipInputFor`,`matChipInputSeparatorKeyCodes`,`matChipInputAddOnBlur`],[`image`,``,1,`bg-base-200`,`relative`,`h-32`,`w-36`,`shrink-0`,`overflow-hidden`,`rounded-sm`,`bg-cover`,`bg-center`],[`auth`,``,`alt`,``,1,`pointer-events-none`,`absolute`,`top-1/2`,`left-1/2`,`z-10`,`-translate-x-1/2`,`-translate-y-1/2`,`object-contain`,3,`source`],[`overlay`,``,1,`text-base-100`,`absolute`,`inset-0`,`z-20`],[`bg`,``,1,`absolute`,`inset-0`,`bg-black`,`opacity-0`],[`actions`,``,1,`absolute`,`top-0`,`right-0`,`left-0`,`flex`,`items-center`,`justify-center`,`space-x-2`,`opacity-0`],[`icon`,``,3,`click`],[`icon`,``,`type`,`button`,3,`click`,`disabled`],[`upload`,``,1,`border-base-content/10`,`bg-base-200`,`flex`,`h-32`,`w-36`,`shrink-0`,`items-center`,`justify-center`,`rounded-sm`,`border`,`bg-cover`,`bg-center`,3,`click`,`matTooltip`],[`mode`,`determinate`,3,`value`,`diameter`],[1,`text-error`,`text-6xl`,3,`label`],[`overlay`,``,1,`text-base-100`,`hover:bg-base-content/50`,`absolute`,`inset-0`,`flex`,`items-center`,`justify-center`],[1,`text-3xl`,`opacity-0`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`left-0`,`-translate-y-1/2`,`transform`,3,`click`,`disabled`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`right-0`,`-translate-y-1/2`,`transform`,3,`click`,`disabled`],[3,`removed`],[1,`max-w-md`,`truncate`],[`matChipRemove`,``]],template:function(t,i){if(t&1&&(ya$1(0,`div`,3,0),ov(`resize`,function(){return i.updateViewSpace()},gC),ya$1(2,`div`,4)(3,`icon`,5),RS(4,`add`),Pd(),ya$1(5,`p`,6),RS(6),oM(7,`translate`),Pd(),ya$1(8,`input`,7,1),ov(`dragenter`,function(){return i.dragging.set(!0)})(`dragleave`,function(){return i.dragging.set(!1)})(`drop`,function(){return i.dragging.set(!1)})(`change`,function(l){return i.uploadImages(l)}),Pd()(),V_(10,$a,17,13,`div`,8,B_),V_(12,Ya,4,6,`div`,9,Ka),L_(14,Ja,4,4,`button`,10),L_(15,eo,4,4,`button`,11),Pd(),ya$1(16,`mat-form-field`,12)(17,`mat-chip-grid`,13,2),oM(19,`translate`),V_(20,to,7,7,`mat-chip-row`,null,B_),Pd(),ya$1(22,`input`,14),oM(23,`translate`),ov(`matChipInputTokenEnd`,function(l){return i.addImage(l)}),Pd()()),t&2){let s=aS(18);db(2),gv(`transform`,`translate(-`+i.offset()+`00%)`),mv(`border-primary`,i.dragging())(`bg-base-200`,i.dragging()),db(4),$d(` `,sM(7,16,`COMMON.IMAGE_UPLOADS`),` `),db(2),Ky(`disabled`,i.disabled()),db(2),H_(i.list()),db(2),H_(i.uploads()),db(2),P_(i.length()>i.view_space()?14:-1),db(),P_(i.length()>i.view_space()?15:-1),db(2),Ky(`disabled`,i.disabled()),Qy(`aria-label`,sM(19,18,`COMMON.IMAGES`)),db(3),H_(i.list()),db(2),Ky(`placeholder`,sM(23,20,`COMMON.IMAGE_ADD_URL`))(`matChipInputFor`,s)(`matChipInputSeparatorKeyCodes`,i.separators)(`matChipInputAddOnBlur`,!0)}},dependencies:[qr$1,Fn,Hn,Gn,zn,Un,ni,J$2,Z$2,Yt$1,mt,z$2,H$2,f],styles:[`[_nghost-%COMP%]{width:100%}[overlay][_ngcontent-%COMP%]{transition:background .2s}[image][_ngcontent-%COMP%]:hover   [actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%]:focus-within   [actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%]:hover > icon[_ngcontent-%COMP%]{opacity:1!important}[image][_ngcontent-%COMP%]:hover   [bg][_ngcontent-%COMP%], [image][_ngcontent-%COMP%]:focus-within   [bg][_ngcontent-%COMP%]{opacity:.4!important}[actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%] > icon[_ngcontent-%COMP%]{transition:opacity .2s}[image][_ngcontent-%COMP%]{transition:transform .2s}`]})}}return n})();function Ee(n){return`${n??``}`.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}var io=[`editor`];function no(n,p){if(n&1){let e=q_();ya$1(0,`button`,20),oM(1,`translate`),ov(`click`,function(){dh(e);return fh(J_(2).insertImage())}),ya$1(2,`icon`),RS(3,`image`),Pd()(),ya$1(4,`button`,20),oM(5,`translate`),ov(`click`,function(){dh(e);return fh(J_(2).insertAttachment())}),ya$1(6,`icon`),RS(7,`attachment`),Pd()()}n&2&&(Qy(`aria-label`,sM(1,2,`COMMON.INSERT_IMAGE`)),db(4),Qy(`aria-label`,sM(5,4,`COMMON.ATTACH_FILE`)))}function ao(n,p){if(n&1){let e=q_();ya$1(0,`div`,3)(1,`select`,5),ov(`change`,function(i){dh(e);return fh(J_().setFontFace(i))}),ya$1(2,`option`,6),RS(3),oM(4,`translate`),Pd(),ya$1(5,`option`,7),RS(6,`Arial`),Pd(),ya$1(7,`option`,8),RS(8,`Helvetica`),Pd(),ya$1(9,`option`,9),RS(10,`Georgia`),Pd(),ya$1(11,`option`,10),RS(12,`Times New Roman`),Pd()(),ya$1(13,`select`,11),ov(`change`,function(i){dh(e);return fh(J_().setFontSize(i))}),ya$1(14,`option`,12),RS(15),oM(16,`translate`),Pd(),ya$1(17,`option`,13),RS(18,`12`),Pd(),ya$1(19,`option`,14),RS(20,`14`),Pd(),ya$1(21,`option`,15),RS(22,`16`),Pd(),ya$1(23,`option`,16),RS(24,`18`),Pd(),ya$1(25,`option`,17),RS(26,`24`),Pd(),ya$1(27,`option`,18),RS(28,`32`),Pd(),ya$1(29,`option`,19),RS(30,`48`),Pd()(),ya$1(31,`button`,20),oM(32,`translate`),ov(`click`,function(){dh(e);return fh(J_().toggleBold())}),ya$1(33,`icon`),RS(34,`format_bold`),Pd()(),ya$1(35,`button`,20),oM(36,`translate`),ov(`click`,function(){dh(e);return fh(J_().toggleItalic())}),ya$1(37,`icon`),RS(38,`format_italic`),Pd()(),ya$1(39,`button`,20),oM(40,`translate`),ov(`click`,function(){dh(e);return fh(J_().toggleUnderline())}),ya$1(41,`icon`),RS(42,`format_underlined`),Pd()(),ya$1(43,`button`,20),oM(44,`translate`),ov(`click`,function(){dh(e);return fh(J_().makeUnorderedList())}),ya$1(45,`icon`),RS(46,`format_list_bulleted`),Pd()(),ya$1(47,`button`,20),oM(48,`translate`),ov(`click`,function(){dh(e);return fh(J_().makeOrderedList())}),ya$1(49,`icon`),RS(50,`format_list_numbered`),Pd()(),ya$1(51,`button`,20),oM(52,`translate`),ov(`click`,function(){dh(e);return fh(J_().insertLink())}),ya$1(53,`icon`),RS(54,`link`),Pd()(),L_(55,no,8,6),Pd()}if(n&2){let e=J_();db(3),$d(` `,sM(4,39,`FORM.FONT`),` `),db(12),$d(` `,sM(16,41,`FORM.FONT_SIZE`),` `),db(16),mv(`border-info`,e.toolbar_state().bold)(`text-info`,e.toolbar_state().bold),Qy(`aria-label`,sM(32,43,`COMMON.BOLD`))(`aria-pressed`,!!e.toolbar_state().bold),db(4),mv(`border-info`,e.toolbar_state().italic)(`text-info`,e.toolbar_state().italic),Qy(`aria-label`,sM(36,45,`COMMON.ITALIC`))(`aria-pressed`,!!e.toolbar_state().italic),db(4),mv(`border-info`,e.toolbar_state().underline)(`text-info`,e.toolbar_state().underline),Qy(`aria-label`,sM(40,47,`COMMON.UNDERLINE`))(`aria-pressed`,!!e.toolbar_state().underline),db(4),mv(`border-info`,e.toolbar_state().unordered_list)(`text-info`,e.toolbar_state().unordered_list),Qy(`aria-label`,sM(44,49,`COMMON.BULLETED_LIST`))(`aria-pressed`,!!e.toolbar_state().unordered_list),db(4),mv(`border-info`,e.toolbar_state().ordered_list)(`text-info`,e.toolbar_state().ordered_list),Qy(`aria-label`,sM(48,51,`COMMON.NUMBERED_LIST`))(`aria-pressed`,!!e.toolbar_state().ordered_list),db(4),mv(`border-info`,e.toolbar_state().link)(`text-info`,e.toolbar_state().link),Qy(`aria-label`,sM(52,53,`COMMON.INSERT_LINK`))(`aria-pressed`,!!e.toolbar_state().link),db(4),P_(e.images_allowed()?55:-1)}}var oo=[`http:`,`https:`,`mailto:`];function Qn(n){let p=document.createElement(`template`);return p.innerHTML=n||``,!p.content.textContent?.trim()&&!p.content.querySelector(`img`)}function ro(n){let p=n.trim();if(!p)return null;let e=p.includes(`://`)||/^mailto:/i.test(p)?p:`https://${p}`;try{let t=new URL(e);return oo.includes(t.protocol)?t.href:null}catch{return null}}var Xn=(()=>{class n extends xn{constructor(){super(...arguments),this._uploads=y(_d),this._dom_sanitizer=y(Rx),this.placeholder=vU(``),this.readonly=vU(!1),this.images_allowed=vU(!1),this.disabled=It$1(!1),this.is_empty=It$1(!0),this.is_readonly=Le(()=>this.readonly()||this.disabled()),this._editor_el=EU(`editor`),this._onChange=()=>{},this._onTouch=()=>{},this.toolbar_state=It$1({bold:!1,italic:!1,underline:!1,unordered_list:!1,ordered_list:!1,link:!1}),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e,this._syncValue=()=>{if(!this._editor)return;let e=this._editor.getHTML();this._updateEmptyState(e),this.setValue(Qn(e)?``:e)},this._handleTouched=()=>{this._editor&&this._onTouch()},this._refreshToolbarState=()=>{this._editor&&this.toolbar_state.set({bold:this._editor.hasFormat(`B`),italic:this._editor.hasFormat(`I`),underline:this._editor.hasFormat(`U`),unordered_list:this._editor.hasFormat(`UL`),ordered_list:this._editor.hasFormat(`OL`),link:this._editor.hasFormat(`A`)})},this._blockImageClick=e=>{this.is_readonly()&&e.target?.nodeName===`IMG`&&e.stopPropagation()}}setDisabledState(e){this.disabled.set(e),this._setReadonlyState()}ngOnChanges(e){e.placeholder&&this._setPlaceholder(),e.readonly&&this._editor&&this._setReadonlyState()}ngAfterViewInit(){this.timeout(`init`,()=>this._initialiseEditor())}setValue(e){this._onChange(e)}writeValue(e){this.timeout(`write`,()=>{this._editor?(this._editor.setHTML(e||``),this._setPlaceholder(),this._updateEmptyState()):this.timeout(`write`,()=>this.writeValue(e))})}toggleBold(){this._toggleFormat(`B`,()=>this._editor.removeBold(),()=>this._editor.bold())}toggleItalic(){this._toggleFormat(`I`,()=>this._editor.removeItalic(),()=>this._editor.italic())}toggleUnderline(){this._toggleFormat(`U`,()=>this._editor.removeUnderline(),()=>this._editor.underline())}makeUnorderedList(){this._toggleFormat(`UL`,()=>this._editor.removeList(),()=>this._editor.makeUnorderedList())}makeOrderedList(){this._toggleFormat(`OL`,()=>this._editor.removeList(),()=>this._editor.makeOrderedList())}insertLink(){if(!this._editor)return;if(this._editor.hasFormat(`A`)){this._editor.removeLink(),this._syncValue(),this._refreshToolbarState();return}let e=prompt(et(`FORM.LINK_URL_PROMPT`));if(!e)return;let t=ro(e);if(!t){S_(et(`FORM.LINK_PROTOCOL_ERROR`));return}this._editor.makeLink(t),this._syncValue(),this._refreshToolbarState()}setFontFace(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontFace(t==="default"?`inherit`:t),this._syncValue())}setFontSize(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontSize(t),this._syncValue())}insertImage(){this._embedFile(!0)}insertAttachment(){this._embedFile(!1)}async _initialiseEditor(){let e=this._editor_el()?.nativeElement;if(!e)return this.timeout(`init`,()=>this._initialiseEditor());let{default:t}=await import(`./chunk-B0gBI6PO2.js`);this._editor&&this._editor.destroy(),e.innerHTML=``,e.removeEventListener(`click`,this._blockImageClick,!0),e.addEventListener(`click`,this._blockImageClick,!0),this._editor=new t(e,{blockTag:`div`,sanitizeToDOMFragment:i=>{let s=this._dom_sanitizer.sanitize(z$1.HTML,i||``)||``,l=document.createElement(`template`);return l.innerHTML=s,l.content.cloneNode(!0)}}),this._editor.addEventListener(`input`,this._syncValue),this._editor.addEventListener(`blur`,this._handleTouched),this._editor.addEventListener(`cursor`,this._refreshToolbarState),this._editor.addEventListener(`select`,this._refreshToolbarState),this._editor.addEventListener(`pathChange`,this._refreshToolbarState),this._setReadonlyState(),this._setPlaceholder(),this._updateEmptyState(),this._refreshToolbarState()}_embedFile(e){if(!this._editor)return;let t=document.createElement(`input`);t.setAttribute(`type`,`file`),e&&t.setAttribute(`accept`,`image/*`),t.click(),t.onchange=()=>{let i=t.files?.[0];i&&this._uploads.uploadFileToCompletion(i,!0).then(s=>{if(!s)return;let l=`${location.origin}/api/engine/v2/uploads/${encodeURIComponent(s)}/url`;this._setAuth(),this._insertUploadedFile(l,i,e),this._syncValue()}).catch(s=>{S_(et(`FORM.UPLOAD_FAILED`,{name:i.name,error:s?.message||et(`FORM.ERROR_UNKNOWN`)}))})}}_setReadonlyState(){this._setRootAttribute(`contenteditable`,`${!this.is_readonly()}`)}_updateEmptyState(e=this._editor?.getHTML()||``){this.is_empty.set(Qn(e))}_setPlaceholder(){this._setRootAttribute(`data-placeholder`,this.placeholder()||``)}_setRootAttribute(e,t){let i=this._editor_el()?.nativeElement;if(!i)return;let s=()=>i.setAttribute(e,t);this._editor?this._editor.modifyDocument(s):s()}_toggleFormat(e,t,i){this._editor&&(this._editor.hasFormat(e)?t():i(),this._syncValue(),this._refreshToolbarState())}_insertUploadedFile(e,t,i){let s=t.type.startsWith(`image/`),l=Ee(t.name),L=Ee(e);if(i||s){this._editor.insertHTML(`<img src="${L}" alt="${l}" />`);return}this._editor.insertHTML(`<a href="${L}" target="_blank" rel="noopener noreferrer">${l}</a>`)}_setAuth(){let e=rt();document.cookie=`${e===`x-api-key`?`api-key=`+encodeURIComponent(je()):`bearer_token=`+encodeURIComponent(e)};max-age=30;path=/api/engine/v2/uploads;samesite=strict;${location.protocol===`https:`?`secure;`:``}`}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Yg(n)))(i||n)}})()}static{this.ɵcmp=jT({type:n,selectors:[[`rich-text-input`]],viewQuery:function(t,i){t&1&&lv(i._editor_el,io,5),t&2&&sS()},inputs:{placeholder:[1,`placeholder`],readonly:[1,`readonly`],images_allowed:[1,`images_allowed`]},features:[zS([hf(()=>n)]),Py,Da$1],decls:5,vars:3,consts:[[`container`,``],[`editor`,``],[1,`w-full`],[1,`border-base-300`,`bg-base-100`,`flex`,`flex-wrap`,`items-center`,`gap-1`,`rounded-t`,`border`,`p-2`],[1,`squire-editor`],[1,`border-base-300`,`bg-base-100`,`rounded`,`border`,`p-2`,`text-sm`,3,`change`],[`value`,`default`],[`value`,`Arial`],[`value`,`Helvetica`],[`value`,`Georgia`],[`value`,`Times New Roman`],[1,`border-base-300`,`bg-base-100`,`min-w-24`,`rounded`,`border`,`p-2`,`text-sm`,3,`change`],[`value`,``],[`value`,`12px`],[`value`,`14px`],[`value`,`16px`],[`value`,`18px`],[`value`,`24px`],[`value`,`32px`],[`value`,`48px`],[`icon`,``,`type`,`button`,1,`border-base-300`,`rounded`,`border`,`px-2`,`py-1`,`text-sm`,3,`click`]],template:function(t,i){t&1&&(ya$1(0,`div`,2,0),L_(2,ao,56,55,`div`,3),Xy(3,`div`,4,1),Pd()),t&2&&(mv(`is-empty`,i.is_empty()),db(2),P_(i.is_readonly()?-1:2))},dependencies:[z$2,f],styles:[`[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]     .squire-editor{position:relative;border-radius:.25rem;border:1px solid var(--%NS%base-300);padding:.5rem;min-height:8rem;width:100%;outline:none}[_nghost-%COMP%]     .is-empty>.squire-editor:before{content:attr(data-placeholder);position:absolute;top:.5rem;left:.5rem;pointer-events:none;color:var(--%NS%base-content);opacity:.5}[_nghost-%COMP%]     .squire-editor ul{list-style-type:disc;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor ol{list-style-type:decimal;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor li{margin:.125rem 0}`]})}}return n})();function so(n,p){if(n&1&&Xy(0,`div`,1),n&2)Ky(`innerHTML`,J_().changelog(),dC)}function co(n,p){n&1&&(ya$1(0,`div`,2)(1,`icon`,3),RS(2,`close`),Pd(),ya$1(3,`div`,4),RS(4,`No changelog`),Pd()())}var Zn=(()=>{class n{constructor(){this._data=y($e$1),this.loading=It$1(!1),this.changelog=Le(()=>g(this._data.changelog||``,{async:!1}))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=jT({type:n,selectors:[[`changelog-modal`]],decls:3,vars:3,consts:[[3,`heading`,`hide_confirm`],[1,`markdown`,3,`innerHTML`],[1,`flex`,`flex-col`,`items-center`,`justify-center`,`space-y-2`],[1,`text-3xl`],[1,`text`]],template:function(t,i){t&1&&(ya$1(0,`fullscreen-modal-shell`,0),L_(1,so,1,1,`div`,1)(2,co,5,0,`div`,2),Pd()),t&2&&(Ky(`heading`,`Changelog`)(`hide_confirm`,!0),db(),P_(i.changelog()?1:2))},dependencies:[_e,z$2],encapsulation:2})}}return n})();var Yn=(()=>{class n{constructor(){this._document=y(Y$2),this._dialog=y(ee),this._changelog=It$1(null),this.available=Le(()=>this._changelog()!==null),this._load()}view(){let e=this._changelog();e!==null&&this._dialog.open(Zn,{data:{changelog:e}})}async _load(){try{let e=new URL(`CHANGELOG.md`,this._document.baseURI),t=await fetch(e);if(!t.ok)return;this._changelog.set(await t.text())}catch{}}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=N({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();function po(n,p){if(n&1&&(ya$1(0,`mat-option`,9),RS(1),Pd()),n&2){let e=p.$implicit;Ky(`value`,e.display_name||e.name),db(),$d(` `,e.display_name||e.name,` `)}}function mo(n,p){if(n&1&&(ya$1(0,`mat-option`,9),RS(1),Pd()),n&2){let e=p.$implicit;Ky(`value`,e?.name||e),db(),$d(` `,e.name||e,` `)}}function ho(n,p){if(n&1&&(ya$1(0,`div`,6)(1,`label`),RS(2),oM(3,`translate`),Pd(),ya$1(4,`mat-form-field`,7)(5,`mat-select`,8),oM(6,`translate`),V_(7,mo,2,2,`mat-option`,9,B_),Pd(),Yb(),Pd()()),n&2){let e=J_();db(2),Tv(sM(3,3,`COMMON.SUPPORT_TYPE`)),db(3),Ky(`placeholder`,sM(6,5,`COMMON.SUPPORT_TYPE`))(`formField`,e.form.issue_type),Kb(),db(2),H_(e.support_request_types())}}function uo(n,p){n&1&&(ya$1(0,`mat-error`,12),RS(1),oM(2,`translate`),Pd()),n&2&&(db(),$d(` `,sM(2,1,`COMMON.DESCRIPTION_REQUIRED`),` `))}function _o(n,p){if(n&1&&(ya$1(0,`div`,13)(1,`label`,11),RS(2),oM(3,`translate`),Pd(),Xy(4,`image-list-field`,15),Yb(),Pd()),n&2){let e=J_();db(2),Tv(sM(3,2,`COMMON.IMAGES`)),db(2),Ky(`formField`,e.form.images),Kb()}}var Jn=(()=>{class n{constructor(){this._dialog_ref=y(T$1),this._org=y(Pe$1),this._settings=y(O0),this._sanitizer=y(Rx),this._support_email=this._settings.signal(`support_email`,`support@place.tech`),this._support_issue_types=this._settings.signal(`support_issue_types`,[]),this._allow_images=this._settings.signal(`allow_support_ticket_images`,!1),this.loading=It$1(!1),this.model=It$1({name:``,email:``,location:``,description:``,issue_type:``,images:[]}),this.form=Xi(this.model,e=>{Eo$1(e.name),Eo$1(e.email),Mo$1(e.email),Eo$1(e.description)}),this.desc_error=It$1(!1),this.support_email=this._support_email,this.support_request_types=this._support_issue_types,this.allow_images=this._allow_images,this.buildings=this._org.building_list}ngOnInit(){let e=It$2();e&&this.model.update(t=>m(l({},t),{name:e.name,email:e.email})),this._org.building&&this.model.update(t=>m(l({},t),{location:this._org.building.display_name||this._org.building.name}))}async submit(){if(this.form().markAsTouched(),this._updateDescError(),!this.form().valid())return;let e=this._org.module(`smtp`,`Mailer`);if(!e)return S_(et(`COMMON.SUPPORT_NO_MAILER`));this.loading.set(!0);try{let{name:t,email:i,location:s,description:l,images:L,issue_type:le}=this.model(),rt=L.map(Ht=>new URL(Ht,globalThis.location.origin).href),st=this._sanitizer.sanitize(z$1.HTML,l)||``,zt=this.support_request_types().find(Ht=>Ht.name===le)?.email||this.support_email(),_a=et(`COMMON.SUPPORT_MAIL_HEADER`,{issue_type:le?` - `+le:``});await e.execute(`send_mail`,[zt,_a,`${t}
${i}

${s}

${l.replace(/<[^>]+>/g,``)}

${rt.join(`
`)}`,`<p>${Ee(t)}</p><p>${Ee(i)}</p><p>${Ee(s)}</p><p>${st}</p>${rt.map(Ee).join(`<br>`)}`,[],[],[],[],null,`${i}`]),this._dialog_ref.close(),$_(et(`COMMON.SUPPORT_SUCCESS`))}catch(t){S_(et(`COMMON.SUPPORT_FAILED`,{error:t?.message||et(`FORM.ERROR_UNKNOWN`)}))}finally{this.loading.set(!1)}}_updateDescError(){this.desc_error.set(this.form.description().invalid()&&this.form.description().touched())}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=jT({type:n,selectors:[[`support-ticket-modal`]],decls:52,vars:47,consts:[[3,`confirm`,`heading`,`loading`,`confirm_text`],[1,`flex`,`flex-wrap`,`items-center`,`sm:space-x-2`],[1,`flex`,`flex-1`,`flex-col`],[`appearance`,`outline`],[`matInput`,``,3,`placeholder`,`formField`],[`matInput`,``,`type`,`email`,3,`placeholder`,`formField`],[1,`flex`,`flex-col`],[`appearance`,`outline`,1,`w-full`],[3,`placeholder`,`formField`],[3,`value`],[1,``],[1,`mb-4`],[1,`my-2`,`text-xs`],[1,`pt-4`],[1,`mb-2`,`text-center`,`text-xs`,`italic`],[3,`formField`]],template:function(t,i){t&1&&(ya$1(0,`fullscreen-modal-shell`,0),oM(1,`translate`),oM(2,`translate`),ov(`confirm`,function(){return i.submit()}),ya$1(3,`form`)(4,`div`,1)(5,`div`,2)(6,`label`),RS(7),oM(8,`translate`),ya$1(9,`span`),RS(10,`*`),Pd()(),ya$1(11,`mat-form-field`,3),Xy(12,`input`,4),oM(13,`translate`),Yb(),ya$1(14,`mat-error`),RS(15),oM(16,`translate`),Pd()()(),ya$1(17,`div`,2)(18,`label`),RS(19),oM(20,`translate`),ya$1(21,`span`),RS(22,`*`),Pd()(),ya$1(23,`mat-form-field`,3),Xy(24,`input`,5),oM(25,`translate`),Yb(),ya$1(26,`mat-error`),RS(27),oM(28,`translate`),Pd()()()(),ya$1(29,`div`,6)(30,`label`),RS(31),oM(32,`translate`),Pd(),ya$1(33,`mat-form-field`,7)(34,`mat-select`,8),oM(35,`translate`),V_(36,po,2,2,`mat-option`,9,B_),Pd(),Yb(),Pd()(),L_(38,ho,9,7,`div`,6),ya$1(39,`div`,10)(40,`label`,11),RS(41),oM(42,`translate`),ya$1(43,`span`),RS(44,`*`),Pd()(),Xy(45,`rich-text-input`,8),oM(46,`translate`),Yb(),L_(47,uo,3,3,`mat-error`,12),Pd(),L_(48,_o,5,4,`div`,13),Pd(),ya$1(49,`div`,14),RS(50),oM(51,`translate`),Pd()()),t&2&&(Ky(`heading`,sM(1,21,`COMMON.CONTROLS_SUPPORT`))(`loading`,i.loading()?`true`:``)(`confirm_text`,sM(2,23,`COMMON.SUBMIT`)),db(7),Tv(sM(8,25,`FORM.NAME`)),db(5),Ky(`placeholder`,sM(13,27,`FORM.NAME`))(`formField`,i.form.name),Kb(),db(3),Tv(sM(16,29,`FORM.NAME_REQUIRED`)),db(4),Tv(sM(20,31,`FORM.EMAIL`)),db(5),Ky(`placeholder`,sM(25,33,`FORM.EMAIL`))(`formField`,i.form.email),Kb(),db(3),Tv(sM(28,35,`FORM.EMAIL_REQUIRED`)),db(4),Tv(sM(32,37,`COMMON.LOCATION`)),db(3),Ky(`placeholder`,sM(35,39,`COMMON.LOCATION`))(`formField`,i.form.location),Kb(),db(2),H_(i.buildings()),db(2),P_(i.support_request_types().length?38:-1),db(3),$d(` `,sM(42,41,`COMMON.SUPPORT_DESCRIPTION`),` `),db(4),Ky(`placeholder`,sM(46,43,`COMMON.SUPPORT_DESCRIPTION`))(`formField`,i.form.description),Kb(),db(2),P_(i.desc_error()?47:-1),db(),P_(i.allow_images()?48:-1),db(2),$d(` `,sM(51,45,`COMMON.SUPPORT_MSG`),` `))},dependencies:[LD,qr$1,Fn,Ni,Be,Pe$2,Fo$1,J$2,f$1,Xn,$n,Qt$1,Gt$2,X$2,Ht$2,_e,f],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%}`]})}}return n})();var go=[`knob`];var fo=[`valueIndicatorContainer`];function vo(n,p){if(n&1&&(ya$1(0,`div`,2,1)(2,`div`,5)(3,`span`,6),RS(4),Pd()()()),n&2){let e=J_();db(4),Tv(e.valueIndicatorText)}}var bo=[`trackActive`];var yo=[`*`];function Co(n,p){if(n&1&&Xy(0,`div`),n&2){let e=p.$implicit,t=p.$index,i=J_(3);wS(e===0?`mdc-slider__tick-mark--active`:`mdc-slider__tick-mark--inactive`),gv(`transform`,i._calcTickMarkTransform(t))}}function So(n,p){if(n&1&&V_(0,Co,1,4,`div`,8,j_),n&2)H_(J_(2)._tickMarks)}function xo(n,p){if(n&1&&(ya$1(0,`div`,6,1),L_(2,So,2,0),Pd()),n&2){let e=J_();db(2),P_(e._cachedWidth?2:-1)}}function ko(n,p){if(n&1&&Xy(0,`mat-slider-visual-thumb`,7),n&2){let e=J_();Ky(`discrete`,e.discrete)(`thumbPosition`,1)(`valueIndicatorText`,e.startValueIndicatorText)}}var S=(function(n){return n[n.START=1]=`START`,n[n.END=2]=`END`,n})(S||{});var Ze=(function(n){return n[n.ACTIVE=0]=`ACTIVE`,n[n.INACTIVE=1]=`INACTIVE`,n})(Ze||{});var oi=new w$1(`_MatSlider`);var ea=new w$1(`_MatSliderThumb`);var Io=new w$1(`_MatSliderRangeThumb`);var ta=new w$1(`_MatSliderVisualThumb`);var Mo=(()=>{class n{_cdr=y(pf);_ngZone=y(le);_slider=y(oi);_renderer=y(or$2);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=y(Qt).nativeElement;_platform=y(m$1);ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let t=this._sliderInputEl,i=this._renderer;this._listenerCleanups=[i.listen(t,`pointermove`,this._onPointerMove),i.listen(t,`pointerdown`,this._onDragStart),i.listen(t,`pointerup`,this._onDragEnd),i.listen(t,`pointerleave`,this._onMouseLeave),i.listen(t,`focus`,this._onFocus),i.listen(t,`blur`,this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e())}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let t=this._hostElement.getBoundingClientRect(),i=this._slider._isCursorOnSliderThumb(e,t);this._isHovered=i,i?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add(`mdc-slider__thumb--focused`)};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove(`mdc-slider__thumb--focused`)};_onDragStart=e=>{e.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add(`mat-mdc-slider-hover-ripple`))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add(`mat-mdc-slider-focus-ripple`))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add(`mat-mdc-slider-active-ripple`))}_isShowingRipple(e){return e?.state===l$1.FADING_IN||e?.state===l$1.VISIBLE}_showRipple(e,t){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===S.START?S.END:S.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!t)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:!0,persistent:!0})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let t=this._getSibling();t._isShowingAnyRipple()||(this._hideValueIndicator(),t._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add(`mdc-slider__thumb--with-indicator`)}_hideValueIndicator(){this._hostElement.classList.remove(`mdc-slider__thumb--with-indicator`)}_getSibling(){return this._slider._getThumb(this.thumbPosition===S.START?S.END:S.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static ɵfac=function(t){return new(t||n)};static ɵcmp=jT({type:n,selectors:[[`mat-slider-visual-thumb`]],viewQuery:function(t,i){if(t&1&&cv(vt$2,5)(go,5)(fo,5),t&2){let s;oS(s=iS())&&(i._ripple=s.first),oS(s=iS())&&(i._knob=s.first),oS(s=iS())&&(i._valueIndicatorContainer=s.first)}},hostAttrs:[1,`mdc-slider__thumb`,`mat-mdc-slider-visual-thumb`],inputs:{discrete:`discrete`,thumbPosition:`thumbPosition`,valueIndicatorText:`valueIndicatorText`},features:[zS([{provide:ta,useExisting:n}])],decls:4,vars:2,consts:[[`knob`,``],[`valueIndicatorContainer`,``],[1,`mdc-slider__value-indicator-container`],[1,`mdc-slider__thumb-knob`],[`matRipple`,``,1,`mat-focus-indicator`,3,`matRippleDisabled`],[1,`mdc-slider__value-indicator`],[1,`mdc-slider__value-indicator-text`]],template:function(t,i){t&1&&(L_(0,vo,5,1,`div`,2),Xy(1,`div`,3,0)(3,`div`,4)),t&2&&(P_(i.discrete?0:-1),db(3),Ky(`matRippleDisabled`,!0))},dependencies:[vt$2],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
  height: 100%;
  width: 100%;
}

.mat-mdc-slider .mdc-slider__tick-marks {
  justify-content: start;
}
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive {
  position: absolute;
  left: 2px;
}
`],encapsulation:2})}return n})();var Ut=(()=>{class n{_ngZone=y(le);_cdr=y(pf);_elementRef=y(Qt);_dir=y(jt$2,{optional:!0});_globalRippleOptions=y(Q$2,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let t=this._getInput(S.END),i=this._getInput(S.START);t&&(t.disabled=this._disabled),i&&(i.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(e){let t=e==null||isNaN(e)?this._min:e;this._min!==t&&this._updateMin(t)}_min=0;color;disableRipple=!1;_updateMin(e){let t=this._min;this._min=e,this._isRange?this._updateMinRange({old:t,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange()}_updateMinRange(e){let t=this._getInput(S.END),i=this._getInput(S.START),s=t.value,l=i.value;i.min=e.new,t.min=Math.max(e.new,i.value),i.max=Math.min(t.max,t.value),i._updateWidthInactive(),t._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(t,i):this._onTranslateXChangeBySideEffect(i,t),s!==t.value&&this._onValueChange(t),l!==i.value&&this._onValueChange(i)}_updateMinNonRange(e){let t=this._getInput(S.END);if(t){let i=t.value;t.min=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t)}}get max(){return this._max}set max(e){let t=e==null||isNaN(e)?this._max:e;this._max!==t&&this._updateMax(t)}_max=100;_updateMax(e){let t=this._max;this._max=e,this._isRange?this._updateMaxRange({old:t,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange()}_updateMaxRange(e){let t=this._getInput(S.END),i=this._getInput(S.START),s=t.value,l=i.value;t.max=e.new,i.max=Math.min(e.new,t.value),t.min=i.value,t._updateWidthInactive(),i._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(i,t):this._onTranslateXChangeBySideEffect(t,i),s!==t.value&&this._onValueChange(t),l!==i.value&&this._onValueChange(i)}_updateMaxNonRange(e){let t=this._getInput(S.END);if(t){let i=t.value;t.max=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t)}}get step(){return this._step}set step(e){let t=isNaN(e)?this._step:e;this._step!==t&&this._updateStep(t)}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let e=this._getInput(S.END),t=this._getInput(S.START),i=e.value,s=t.value,l=t.value;e.min=this._min,t.max=this._max,e.step=this._step,t.step=this._step,this._platform.SAFARI&&(e.value=e.value,t.value=t.value),e.min=Math.max(this._min,t.value),t.max=Math.min(this._max,e.value),t._updateWidthInactive(),e._updateWidthInactive(),e.value<l?this._onTranslateXChangeBySideEffect(t,e):this._onTranslateXChangeBySideEffect(e,t),i!==e.value&&this._onValueChange(e),s!==t.value&&this._onValueChange(t)}_updateStepNonRange(){let e=this._getInput(S.END);if(e){let t=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),t!==e.value&&this._onValueChange(e)}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=as$1();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText=``;endValueIndicatorText=``;_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=Le(()=>this._dir?.valueSignal()===`rtl`);_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=y(m$1);constructor(){y(L$1).load(Tt$1);let e=this._isRtl();bU(()=>{let t=this._isRtl();t!==e&&(e=t,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(S.END),t=this._getInput(S.START);this._isRange=!!e&&!!t,this._cdr.detectChanges();let i=this._getThumb(S.END);this._rippleRadius=i._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,t):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=!0,e._updateThumbUIByValue()}_initUIRange(e,t){e.initProps(),e.initUI(),t.initProps(),t.initUI(),e._updateMinMax(),t._updateMinMax(),e._updateStaticStyles(),t._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,e._updateThumbUIByValue(),t._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let e=this._getInput(S.END),t=this._getInput(S.START);e._setIsLeftThumb(),t._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),t.translateX=t._calcTranslateXByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateWidthInactive(),t._updateWidthInactive(),e._updateThumbUIByValue(),t._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(S.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>`u`||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(S.START)._isActive||this._getThumb(S.END)._isActive}_getValue(e=S.END){let t=this._getInput(e);return t?t.value:this.min}_skipUpdate(){return!!(this._getInput(S.START)?._skipUIUpdate||this._getInput(S.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(e){let t=this._trackActive.nativeElement.style;t.left=e.left,t.right=e.right,t.transformOrigin=e.transformOrigin,t.transform=e.transform}_calcTickMarkTransform(e){let t=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-t:t}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e))}_onTranslateXChangeBySideEffect(e,t){this._hasViewInitialized&&(e._updateThumbUIByValue(),t._updateThumbUIByValue())}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(S.END),t=this._getInput(S.START);e._updateThumbUIByValue(),t._updateThumbUIByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateMinMax(),t._updateMinMax(),e._updateWidthInactive(),t._updateWidthInactive()}else{let e=this._getInput(S.END);e&&e._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let e=this._getInput(S.START),t=this._getInput(S.END);return!e||!t?!1:t.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let t=e.getSibling(),i=this._getThumb(e.thumbPosition);this._getThumb(t.thumbPosition)._hostElement.classList.remove(`mdc-slider__thumb--top`),i._hostElement.classList.toggle(`mdc-slider__thumb--top`,this._thumbsOverlap)}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e))}_updateThumbUI(e){if(this._skipUpdate())return;let t=this._getThumb(e.thumbPosition===S.END?S.END:S.START);t._hostElement.style.transform=`translateX(${e.translateX}px)`}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let t=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(t):e._hostElement.setAttribute(`aria-valuetext`,t),this.discrete){e.thumbPosition===S.START?this.startValueIndicatorText=t:this.endValueIndicatorText=t;let i=this._getThumb(e.thumbPosition);t.length<3?i._hostElement.classList.add(`mdc-slider__thumb--short-value`):i._hostElement.classList.remove(`mdc-slider__thumb--short-value`)}}_updateValueIndicatorUIs(){let e=this._getInput(S.END),t=this._getInput(S.START);e&&this._updateValueIndicatorUI(e),t&&this._updateValueIndicatorUI(t)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,i=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*i}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e))}_updateTrackUIRange(e){let t=e.getSibling();if(!t||!this._cachedWidth)return;let i=Math.abs(t.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:`auto`,right:`${this._cachedWidth-t.translateX}px`,transformOrigin:`right`,transform:`scaleX(${i})`}):this._setTrackActiveStyles({left:`${t.translateX}px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${i})`})}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:`auto`,right:`0px`,transformOrigin:`right`,transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:`0px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${e.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e)}_updateTickMarkUINonRange(e){let t=this._getValue(),i=Math.max(Math.round((t-this.min)/e),0)+1,s=Math.max(Math.round((this.max-t)/e),0)-1;this._isRtl()?i++:s++,this._tickMarks=Array(i).fill(Ze.ACTIVE).concat(Array(s).fill(Ze.INACTIVE))}_updateTickMarkUIRange(e){let t=this._getValue(),i=this._getValue(S.START),s=Math.max(Math.round((i-this.min)/e),0),l=Math.max(Math.round((t-i)/e)+1,0),L=Math.max(Math.round((this.max-t)/e),0);this._tickMarks=Array(s).fill(Ze.INACTIVE).concat(Array(l).fill(Ze.ACTIVE),Array(L).fill(Ze.INACTIVE))}_getInput(e){if(e===S.END&&this._input)return this._input;if(this._inputs?.length)return e===S.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===S.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle(`mat-mdc-slider-with-animation`,this._hasAnimation)}_isCursorOnSliderThumb(e,t){let i=t.width/2,s=t.x+i,l=t.y+i,L=e.clientX-s,le=e.clientY-l;return Math.pow(L,2)+Math.pow(le,2)<Math.pow(i,2)}static ɵfac=function(t){return new(t||n)};static ɵcmp=jT({type:n,selectors:[[`mat-slider`]],contentQueries:function(t,i,s){if(t&1&&av(s,ea,5)(s,Io,4),t&2){let l;oS(l=iS())&&(i._input=l.first),oS(l=iS())&&(i._inputs=l)}},viewQuery:function(t,i){if(t&1&&cv(bo,5)(ta,5),t&2){let s;oS(s=iS())&&(i._trackActive=s.first),oS(s=iS())&&(i._thumbs=s)}},hostAttrs:[1,`mat-mdc-slider`,`mdc-slider`],hostVars:12,hostBindings:function(t,i){t&2&&(wS(`mat-`+(i.color||`primary`)),mv(`mdc-slider--range`,i._isRange)(`mdc-slider--disabled`,i.disabled)(`mdc-slider--discrete`,i.discrete)(`mdc-slider--tick-marks`,i.showTickMarks)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{disabled:[2,`disabled`,`disabled`,WM],discrete:[2,`discrete`,`discrete`,WM],showTickMarks:[2,`showTickMarks`,`showTickMarks`,WM],min:[2,`min`,`min`,qM],color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,WM],max:[2,`max`,`max`,qM],step:[2,`step`,`step`,qM],displayWith:`displayWith`},exportAs:[`matSlider`],features:[zS([{provide:oi,useExisting:n}])],ngContentSelectors:yo,decls:9,vars:5,consts:[[`trackActive`,``],[`tickMarkContainer`,``],[1,`mdc-slider__track`],[1,`mdc-slider__track--inactive`],[1,`mdc-slider__track--active`],[1,`mdc-slider__track--active_fill`],[1,`mdc-slider__tick-marks`],[3,`discrete`,`thumbPosition`,`valueIndicatorText`],[3,`class`,`transform`]],template:function(t,i){t&1&&(tS(),nS(0),ya$1(1,`div`,2),Xy(2,`div`,3),ya$1(3,`div`,4),Xy(4,`div`,5,0),Pd(),L_(6,xo,3,1,`div`,6),Pd(),L_(7,ko,1,3,`mat-slider-visual-thumb`,7),Xy(8,`mat-slider-visual-thumb`,7)),t&2&&(db(6),P_(i.showTickMarks?6:-1),db(),P_(i._isRange?7:-1),db(),Ky(`discrete`,i.discrete)(`thumbPosition`,2)(`valueIndicatorText`,i.endValueIndicatorText))},dependencies:[Mo],styles:[`.mdc-slider__track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  pointer-events: none;
  height: var(--%NS%mat-slider-inactive-track-height, 4px);
}

.mdc-slider__track--active,
.mdc-slider__track--inactive {
  display: flex;
  height: 100%;
  position: absolute;
  width: 100%;
}

.mdc-slider__track--active {
  overflow: hidden;
  border-radius: var(--%NS%mat-slider-active-track-shape, var(--%NS%mat-sys-corner-full));
  height: var(--%NS%mat-slider-active-track-height, 4px);
  top: calc((var(--%NS%mat-slider-inactive-track-height, 4px) - var(--%NS%mat-slider-active-track-height, 4px)) / 2);
}

.mdc-slider__track--active_fill {
  border-top-style: solid;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  transform-origin: left;
  transition: transform 80ms ease;
  border-color: var(--%NS%mat-slider-active-track-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-slider-active-track-height, 4px);
}
.mdc-slider--disabled .mdc-slider__track--active_fill {
  border-color: var(--%NS%mat-slider-disabled-active-track-color, var(--%NS%mat-sys-on-surface));
}
[dir=rtl] .mdc-slider__track--active_fill {
  -webkit-transform-origin: right;
  transform-origin: right;
}

.mdc-slider__track--inactive {
  left: 0;
  top: 0;
  opacity: 0.24;
  background-color: var(--%NS%mat-slider-inactive-track-color, var(--%NS%mat-sys-surface-variant));
  height: var(--%NS%mat-slider-inactive-track-height, 4px);
  border-radius: var(--%NS%mat-slider-inactive-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-slider--disabled .mdc-slider__track--inactive {
  background-color: var(--%NS%mat-slider-disabled-inactive-track-color, var(--%NS%mat-sys-on-surface));
  opacity: 0.24;
}
.mdc-slider__track--%NS%inactive::before {
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
@media (forced-colors: active) {
  .mdc-slider__track--%NS%inactive::before {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-container {
  bottom: 44px;
  left: 50%;
  pointer-events: none;
  position: absolute;
  transform: var(--%NS%mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {
  pointer-events: auto;
}

.mdc-slider__value-indicator {
  display: flex;
  align-items: center;
  transform: scale(0);
  transform-origin: var(--%NS%mat-slider-value-indicator-transform-origin, 0 28px);
  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);
  word-break: normal;
  background-color: var(--%NS%mat-slider-label-container-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-slider-label-label-text-color, var(--%NS%mat-sys-on-primary));
  width: var(--%NS%mat-slider-value-indicator-width, 28px);
  height: var(--%NS%mat-slider-value-indicator-height, 28px);
  padding: var(--%NS%mat-slider-value-indicator-padding, 0);
  opacity: var(--%NS%mat-slider-value-indicator-opacity, 1);
  border-radius: var(--%NS%mat-slider-value-indicator-border-radius, 50% 50% 50% 0);
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {
  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale(1);
}
.mdc-slider__value-indicator::before {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid;
  bottom: -5px;
  content: "";
  height: 0;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 0;
  display: var(--%NS%mat-slider-value-indicator-caret-display, none);
  border-top-color: var(--%NS%mat-slider-label-container-color, var(--%NS%mat-sys-primary));
}
.mdc-slider__value-indicator::after {
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
@media (forced-colors: active) {
  .mdc-slider__value-indicator::after {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-text {
  text-align: center;
  width: var(--%NS%mat-slider-value-indicator-width, 28px);
  transform: var(--%NS%mat-slider-value-indicator-text-transform, rotate(45deg));
  font-family: var(--%NS%mat-slider-label-label-text-font, var(--%NS%mat-sys-label-medium-font));
  font-size: var(--%NS%mat-slider-label-label-text-size, var(--%NS%mat-sys-label-medium-size));
  font-weight: var(--%NS%mat-slider-label-label-text-weight, var(--%NS%mat-sys-label-medium-weight));
  line-height: var(--%NS%mat-slider-label-label-text-line-height, var(--%NS%mat-sys-label-medium-line-height));
  letter-spacing: var(--%NS%mat-slider-label-label-text-tracking, var(--%NS%mat-sys-label-medium-tracking));
}

.mdc-slider__thumb {
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  left: -24px;
  outline: none;
  position: absolute;
  height: 48px;
  width: 48px;
  pointer-events: none;
}
.mdc-slider--discrete .mdc-slider__thumb {
  transition: transform 80ms ease;
}
.mdc-slider--disabled .mdc-slider__thumb {
  pointer-events: none;
}

.mdc-slider__thumb--top {
  z-index: 1;
}

.mdc-slider__thumb-knob {
  position: absolute;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  width: var(--%NS%mat-slider-handle-width, 20px);
  height: var(--%NS%mat-slider-handle-height, 20px);
  border-width: calc(var(--%NS%mat-slider-handle-height, 20px) / 2) calc(var(--%NS%mat-slider-handle-width, 20px) / 2);
  box-shadow: var(--%NS%mat-slider-handle-elevation, var(--%NS%mat-sys-level1));
  background-color: var(--%NS%mat-slider-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-handle-color, var(--%NS%mat-sys-primary));
  border-radius: var(--%NS%mat-slider-handle-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-slider__thumb:hover .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-hover-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-hover-handle-color, var(--%NS%mat-sys-primary));
}
.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-focus-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-focus-handle-color, var(--%NS%mat-sys-primary));
}
.mdc-slider--disabled .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-disabled-handle-color, var(--%NS%mat-sys-on-surface));
  border-color: var(--%NS%mat-slider-disabled-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  border: solid 1px #fff;
  box-sizing: content-box;
  border-color: var(--%NS%mat-slider-with-overlap-handle-outline-color, var(--%NS%mat-sys-on-primary));
  border-width: var(--%NS%mat-slider-with-overlap-handle-outline-width, 1px);
}

.mdc-slider__tick-marks {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 1px;
  position: absolute;
  width: 100%;
}

.mdc-slider__tick-mark--active,
.mdc-slider__tick-mark--inactive {
  width: var(--%NS%mat-slider-with-tick-marks-container-size, 2px);
  height: var(--%NS%mat-slider-with-tick-marks-container-size, 2px);
  border-radius: var(--%NS%mat-slider-with-tick-marks-container-shape, var(--%NS%mat-sys-corner-full));
}

.mdc-slider__tick-mark--inactive {
  opacity: var(--%NS%mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-inactive-container-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-slider--disabled .mdc-slider__tick-mark--inactive {
  opacity: var(--%NS%mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-disabled-container-color, var(--%NS%mat-sys-on-surface));
}

.mdc-slider__tick-mark--active {
  opacity: var(--%NS%mat-slider-with-tick-marks-active-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-active-container-color, var(--%NS%mat-sys-on-primary));
}

.mdc-slider__input {
  cursor: pointer;
  left: 2px;
  margin: 0;
  height: 44px;
  opacity: 0;
  position: absolute;
  top: 2px;
  width: 44px;
  box-sizing: content-box;
}
.mdc-slider__input.mat-mdc-slider-input-no-pointer-events {
  pointer-events: none;
}
.mdc-slider__input.mat-slider__right-input {
  left: auto;
  right: 0;
}

.mat-mdc-slider {
  display: inline-block;
  box-sizing: border-box;
  outline: none;
  vertical-align: middle;
  cursor: pointer;
  height: 48px;
  margin: 0 8px;
  position: relative;
  touch-action: pan-y;
  width: auto;
  min-width: 112px;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-slider.mdc-slider--disabled {
  cursor: auto;
  opacity: 0.38;
}
.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input {
  cursor: auto;
}
.mat-mdc-slider .mdc-slider__thumb,
.mat-mdc-slider .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider .mat-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-slider-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {
  background-color: var(--%NS%mat-slider-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 5%, transparent));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,
.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {
  background-color: var(--%NS%mat-slider-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 20%, transparent));
}
.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb, .mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,
.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator {
  transition: none;
}
.mat-mdc-slider .mat-focus-indicator::before {
  border-radius: 50%;
}

.mdc-slider__thumb--focused .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})();var Eo={provide:le$1,useExisting:Ds(()=>ot),multi:!0};var ot=(()=>{class n{_ngZone=y(le);_elementRef=y(Qt);_cdr=y(pf);_slider=y(oi);_platform=y(m$1);_listenerCleanups;get value(){return qM(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let t=e+``;if(!this._hasSetInitialValue){this._initialValue=t;return}this._isActive||this._setValue(t)}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new Ht$1;dragStart=new Ht$1;dragEnd=new Ht$1;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e}_translateX;thumbPosition=S.END;get min(){return qM(this._hostElement.min,0)}set min(e){this._hostElement.min=e+``,this._cdr.detectChanges()}get max(){return qM(this._hostElement.max,0)}set max(e){this._hostElement.max=e+``,this._cdr.detectChanges()}get step(){return qM(this._hostElement.step,0)}set step(e){this._hostElement.step=e+``,this._cdr.detectChanges()}get disabled(){return WM(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=It$1(``);_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(e){this._isFocused=e}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new fe;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let e=y(or$2);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,`pointerdown`,this._onPointerDown.bind(this)),e.listen(this._hostElement,`pointermove`,this._onPointerMove.bind(this)),e.listen(this._hostElement,`pointerup`,this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!this._isActive}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let t=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=t,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(e){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(e)},0)}_fixValue(e){let t=e.clientX-this._slider._cachedLeft,i=this._slider._cachedWidth,s=this._slider.step===0?1:this._slider.step,l=Math.floor((this._slider.max-this._slider.min)/s),L=this._slider._isRtl()?1-t/i:t/i,rt=Math.round(L*l)/l*(this._slider.max-this._slider.min)+this._slider.min,st=Math.round(rt/s)*s;if(st===this.value){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=st,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation})}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(e){let t=this._tickMarkOffset,i=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,i),t)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e)}_updateThumbUIByPointerEvent(e,t){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(t)}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e)}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=!0}registerOnTouched(e){this._onTouchedFn=e}setDisabledState(e){this.disabled=e}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static ɵfac=function(t){return new(t||n)};static ɵdir=at({type:n,selectors:[[`input`,`matSliderThumb`,``]],hostAttrs:[`type`,`range`,1,`mdc-slider__input`],hostVars:1,hostBindings:function(t,i){t&1&&ov(`change`,function(){return i._onChange()})(`input`,function(){return i._onInput()})(`blur`,function(){return i._onBlur()})(`focus`,function(){return i._onFocus()}),t&2&&Qy(`aria-valuetext`,i._valuetext())},inputs:{value:[2,`value`,`value`,qM]},outputs:{valueChange:`valueChange`,dragStart:`dragStart`,dragEnd:`dragEnd`},exportAs:[`matSliderThumb`],features:[zS([Eo,{provide:ea,useExisting:n}])]})}return n})();var Gt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=li({type:n});static ɵinj=Nr({imports:[f$1,ns]})}return n})();function wo(n,p){if(n&1){let e=q_();ya$1(0,`settings-toggle`,6),ov(`ngModelChange`,function(i){dh(e);return fh(J_().setDarkMode(i))}),ya$1(1,`div`,7)(2,`icon`,8),RS(3,`mode_night`),Pd(),ya$1(4,`div`),RS(5),oM(6,`translate`),Pd()()(),Yb()}if(n&2)Ky(`ngModel`,J_().dark_mode())(`toggle`,!0),Kb(),db(5),Tv(sM(6,3,`COMMON.DARK_MODE`))}function No(n,p){if(n&1){let e=q_();ya$1(0,`settings-toggle`,6),ov(`ngModelChange`,function(i){dh(e);return fh(J_().setLocatable(i))}),ya$1(1,`div`,7)(2,`icon`,8),RS(3,`emergency_share`),Pd(),ya$1(4,`div`),RS(5),oM(6,`translate`),Pd()()(),Yb()}if(n&2)Ky(`ngModel`,J_().locatable())(`toggle`,!0),Kb(),db(5),Tv(sM(6,3,`COMMON.LOCATABLE`))}function To(n,p){if(n&1){let e=q_();ya$1(0,`div`,9),RS(1),oM(2,`translate`),Pd(),ya$1(3,`div`,10)(4,`span`,11),RS(5,`A`),Pd(),ya$1(6,`mat-slider`,12)(7,`input`,13),oM(8,`translate`),ov(`ngModelChange`,function(i){dh(e);return fh(J_().applySetting(`font_size`,i))}),Pd(),Yb(),Pd(),ya$1(9,`span`,2),RS(10,`A`),Pd(),ya$1(11,`span`,14),RS(12),Pd()()}if(n&2){let e=J_();db(),$d(` `,sM(2,7,`COMMON.TEXT_SIZE_MSG`),` `),db(5),Ky(`min`,10)(`max`,24)(`step`,2),db(),Ky(`ngModel`,e.font_size()),Qy(`aria-label`,sM(8,9,`COMMON.TEXT_SIZE`)),Kb(),db(5),$d(` `,e.font_size(),`px `)}}var na=(()=>{class n extends xn{constructor(){super(...arguments),this._data=y(oe$1),this._settings=y(O0),this.accessible=It$1(!1),this.locatable=It$1(!1),this.can_locate=Et$1(`allow_locatability_option`,!0),this._allow_dark_mode=this._settings.signal(`allow_dark_mode`,!1),this._font_size=this._settings.signal(`font_size`,16,!0),this._accessible=this._settings.signal(`accessible`,!1,!0),this._theme=this._settings.theme_signal,this.dark_mode=Le(()=>this._theme()===`dark`),this.can_change_dark_mode=Le(()=>!!this._allow_dark_mode()),this.font_size=this._font_size,this.applySetting=(e,t)=>this.timeout(`apply_setting`,()=>{this._settings.saveUserSetting(e,t),e===`accessible`&&this.accessible.set(t)},500),this.close=()=>this._data?.close(),this.setLocatable=e=>{this._settings.updateLocatable(e),this.locatable.set(e)}}async ngOnInit(){this.accessible.set(!!this._accessible()),this.subscription(`user`,Jy.subscribe(e=>{this.locatable.set(e.locatable)}))}setDarkMode(e){let t=this._theme();e&&t!==`dark`?this._settings.setTheme(`dark`):!e&&t===`dark`&&this._settings.setTheme(`light`)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Yg(n)))(i||n)}})()}static{this.ɵcmp=jT({type:n,selectors:[[`accessibility-tooltip`]],features:[Py],decls:18,vars:11,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-[20rem]`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`],[`back`,``,`type`,`button`,`matRipple`,``,1,`border-base-300`,`flex`,`w-full`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`,`text-left`,3,`click`],[1,`text-2xl`],[1,``],[1,`space-y-2`,`p-2`],[3,`ngModel`,`toggle`],[3,`ngModelChange`,`ngModel`,`toggle`],[1,`flex`,`items-center`,`space-x-2`],[1,`-ml-2`,`text-xl`],[1,`bg-base-200`,`px-8`,`py-4`,`text-center`],[1,`flex`,`items-center`,`space-x-4`,`px-4`],[1,`text-sm`],[1,`w-1/2`,`flex-1`,`text-[16px]`,3,`min`,`max`,`step`],[`matSliderThumb`,``,1,`text-[16px]`,3,`ngModelChange`,`ngModel`],[1,`bg-base-300`,`text-base-content`,`my-2`,`rounded-sm`,`px-2`,`py-1`,`text-base`]],template:function(t,i){t&1&&(ya$1(0,`div`,0)(1,`button`,1),ov(`click`,function(){return i.close()}),ya$1(2,`icon`,2),RS(3,`arrow_back`),Pd(),ya$1(4,`div`,3),RS(5),oM(6,`translate`),Pd()(),ya$1(7,`div`,4),L_(8,wo,7,5,`settings-toggle`,5),L_(9,No,7,5,`settings-toggle`,5),ya$1(10,`settings-toggle`,6),ov(`ngModelChange`,function(l){return i.applySetting(`accessible`,l)}),ya$1(11,`div`,7)(12,`icon`,8),RS(13,`playlist_add`),Pd(),ya$1(14,`div`),RS(15),oM(16,`translate`),Pd()()(),Yb(),Pd(),L_(17,To,13,11),Pd()),t&2&&(db(5),$d(` `,sM(6,7,`COMMON.CONTROLS_ACCESSIBILITY`),` `),db(3),P_(i.can_change_dark_mode()?8:-1),db(),P_(i.can_locate()?9:-1),db(),Ky(`ngModel`,i.accessible())(`toggle`,!0),Kb(),db(5),Tv(sM(16,9,`COMMON.TEXT_SIZE`)),db(2),P_(i.accessible()?17:-1))},dependencies:[f$1,vt$2,Gt,Ut,ot,ie$1,z$2,Hd$1,cs,Pd$1,ka,f],encapsulation:2})}}return n})();function Ro(n,p){if(n&1){let e=q_();ya$1(0,`mat-radio-button`,8),ov(`click`,function(){let i=dh(e).$implicit;return fh(J_().pick(i.id))})(`keydown.enter`,function(){let i=dh(e).$implicit;return fh(J_().pick(i.id))}),RS(1),Pd()}if(n&2){let e=p.$implicit;Ky(`value`,e.id),db(),$d(` `,e.display_name||e.name,` `)}}var aa=(()=>{class n{constructor(){this._data=y(oe$1),this._org=y(Pe$1),this.is_region=this._data?.data===`region`,this.label=this.is_region?`COMMON.REGION_SELECT`:`COMMON.BUILDING_SELECT`,this.items=this.is_region?this._org.region_list:this._org.active_buildings,this.active=this.is_region?this._org.active_region:this._org.active_building,this.arrow_key=!1,this.close=()=>this._data?.close()}async pick(e){if(!this.arrow_key){if(this.is_region){let t=this._org.region_list().find(i=>i.id===e);await this._org.setRegion(t),this._org.setBuilding(this._org.building,!0)}else{let t=this._org.active_buildings().find(i=>i.id===e);this._org.setBuilding(t,!0)}this.close()}}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=jT({type:n,selectors:[[`building-select`]],decls:17,vars:11,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-74`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`],[`back`,``,`type`,`button`,`matRipple`,``,1,`border-base-300`,`flex`,`w-full`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`,`text-left`,3,`click`],[1,`text-2xl`],[1,`leading-tight`],[1,`text-xs`,`opacity-30`],[1,`px-4`,`py-2`,`text-xs`,`opacity-60`],[1,`flex`,`flex-col`,`space-y-2`,`px-2`,3,`keydown`,`keyup`,`ngModel`],[3,`value`],[3,`click`,`keydown.enter`,`value`]],template:function(t,i){t&1&&(ya$1(0,`div`,0)(1,`button`,1),ov(`click`,function(){return i.close()}),ya$1(2,`icon`,2),RS(3,`arrow_back`),Pd(),ya$1(4,`div`,3)(5,`div`),RS(6),Pd(),ya$1(7,`div`,4),RS(8),oM(9,`translate`),Pd()()(),ya$1(10,`div`,5),RS(11),oM(12,`translate`),Pd(),ya$1(13,`mat-radio-group`,6),oM(14,`translate`),ov(`keydown`,function(l){return i.arrow_key=l.key.startsWith(`Arrow`)})(`keyup`,function(){return i.arrow_key=!1}),V_(15,Ro,2,2,`mat-radio-button`,7,B_),Pd(),Yb(),Pd()),t&2&&(db(6),$d(` `,i.active()?.display_name||i.active()?.name,` `),db(2),$d(` `,sM(9,5,i.is_region?`RESOURCE.REGION`:`RESOURCE.BUILDING`),` `),db(3),$d(` `,sM(12,7,i.label),` `),db(2),Ky(`ngModel`,i.active()?.id),Qy(`aria-label`,sM(14,9,i.label)),Kb(),db(2),H_(i.items()))},dependencies:[Tn,Xt,Bt,z$2,f$1,vt$2,Hd$1,Pd$1,ka,f],encapsulation:2})}}return n})();function Oo(n,p){n&1&&(ya$1(0,`div`,3),RS(1),oM(2,`translate`),Pd()),n&2&&(db(),$d(` `,sM(2,1,`COMMON.DESK_HEIGHT_NOT_SET`),` `))}function Ao(n,p){if(n&1){let e=q_();ya$1(0,`button`,16),ov(`click`,function(){dh(e);return fh(J_().onClose())}),RS(1),oM(2,`translate`),Pd()}n&2&&(db(),$d(` `,sM(2,1,`COMMON.SAVE`),` `))}var oa=(()=>{class n{constructor(){this._settings=y(O0),this.show_close=DU(!1),this.close=yU(),this.not_set=It$1(!1),this.desk_sitting_height=It$1(71),this.desk_standing_height=It$1(101)}ngOnInit(){this.not_set.set(!this._settings.get(`desk_sitting_height`)&&!this._settings.get(`desk_standing_height`)),this.desk_sitting_height.set(this._settings.get(`desk_sitting_height`)||71),this.desk_standing_height.set(this._settings.get(`desk_standing_height`)||101)}onClose(){this.saveSetting(`desk_sitting_height`,this.desk_sitting_height()),this.saveSetting(`desk_standing_height`,this.desk_standing_height()),this.close.emit()}formatLabel(e){return`${e.toFixed(1)}cm`}saveSetting(e,t){this._settings.saveUserSetting(e,t)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=jT({type:n,selectors:[[`desk-height-presets`]],inputs:{show_close:[1,`show_close`]},outputs:{show_close:`show_closeChange`,close:`close`},decls:29,vars:23,consts:[[1,`bg-base-100`,`relative`,`w-[20rem]`,`rounded-sm`,`p-4`,`shadow-sm`],[1,`mb-2`,`text-lg`],[1,`mb-4`,`text-xs`,`opacity-60`],[1,`bg-warning`,`text-warning-content`,`-mx-2`,`mb-4`,`rounded-sm`,`p-2`,`text-xs`],[1,`mt-2`,`flex`,`flex-col`],[`for`,`desk-sitting-height`],[1,`flex`,`items-center`,`space-x-2`],[`min`,`60`,`max`,`80`,`step`,`0.5`,`discrete`,``,1,`flex-1`,3,`displayWith`],[`matSliderThumb`,``,`id`,`desk-sitting-height`,3,`ngModelChange`,`ngModel`],[1,`w-12`,`text-right`,`text-sm`],[`for`,`desk-standing-height`],[1,`mr-2`,`flex`,`items-center`,`space-x-2`],[`min`,`90`,`max`,`120`,`step`,`0.5`,`discrete`,``,1,`flex-1`,3,`displayWith`],[`matSliderThumb`,``,`id`,`desk-standing-height`,3,`ngModelChange`,`ngModel`],[1,`mr-2`,`w-12`,`text-right`,`text-sm`],[`btn`,``,`matRipple`,``,1,`mt-2`,`w-full`],[`btn`,``,`matRipple`,``,1,`mt-2`,`w-full`,3,`click`]],template:function(t,i){t&1&&(ya$1(0,`div`,0)(1,`div`,1),RS(2),oM(3,`translate`),Pd(),ya$1(4,`div`,2),RS(5),oM(6,`translate`),Pd(),L_(7,Oo,3,3,`div`,3),ya$1(8,`div`,2),RS(9),oM(10,`translate`),Pd(),ya$1(11,`div`,4)(12,`label`,5),RS(13),oM(14,`translate`),Pd(),ya$1(15,`div`,6)(16,`mat-slider`,7)(17,`input`,8),ov(`ngModelChange`,function(l){return i.desk_sitting_height.set(l),i.saveSetting(`desk_sitting_height`,l)}),Pd(),Yb(),Pd(),ya$1(18,`div`,9),RS(19),Pd()(),ya$1(20,`label`,10),RS(21),oM(22,`translate`),Pd(),ya$1(23,`div`,11)(24,`mat-slider`,12)(25,`input`,13),ov(`ngModelChange`,function(l){return i.desk_standing_height.set(l),i.saveSetting(`desk_standing_height`,l)}),Pd(),Yb(),Pd(),ya$1(26,`div`,14),RS(27),Pd()()(),L_(28,Ao,3,3,`button`,15),Pd()),t&2&&(db(2),$d(` `,sM(3,13,`COMMON.DESK_HEIGHT_TITLE`),` `),db(3),$d(` `,sM(6,15,`COMMON.DESK_HEIGHT_MSG`),` `),db(2),P_(i.not_set()&&i.show_close()?7:-1),db(2),$d(` `,sM(10,17,`COMMON.DESK_HEIGHT_INFO`),` `),db(4),Tv(sM(14,19,`COMMON.DESK_HEIGHT_SITTING`)),db(3),Ky(`displayWith`,i.formatLabel),db(),Ky(`ngModel`,i.desk_sitting_height()),Kb(),db(2),$d(` `,i.desk_sitting_height().toFixed(1),`cm `),db(2),Tv(sM(22,21,`COMMON.DESK_HEIGHT_STANDING`)),db(3),Ky(`displayWith`,i.formatLabel),db(),Ky(`ngModel`,i.desk_standing_height()),Kb(),db(2),$d(` `,i.desk_standing_height().toFixed(1),`cm `),db(),P_(i.show_close()?28:-1))},dependencies:[f$1,vt$2,Gt,Ut,ot,Hd$1,cs,Pd$1,ka,f],encapsulation:2})}}return n})();function Do(n,p){if(n&1&&(ya$1(0,`a`,4)(1,`div`,5),Xy(2,`icon`,6),ya$1(3,`div`),RS(4),Pd()()()),n&2){let e=p.$implicit;Ky(`href`,e.link,Cm),db(2),Ky(`icon`,e.icon),db(2),Tv(e.name)}}var ra=(()=>{class n{constructor(){this._data=y(oe$1),this._settings=y(O0),this._tiles=this._settings.signal(`help`,[]),this.close=()=>{this._data?.close()}}get tiles(){return this._tiles()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=jT({type:n,selectors:[[`help-tooltip`]],decls:9,vars:3,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`w-74`,`flex-col`,`rounded-sm`,`shadow-sm`,3,`click`],[`back`,``,`type`,`button`,`matRipple`,``,1,`border-base-300`,`flex`,`w-full`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-4`,`text-left`],[1,`text-2xl`],[1,``],[`matRipple`,``,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`w-full`,`p-2`,`text-left`,3,`href`],[1,`hover:bg-base-200`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-sm`,`p-2`],[1,`text-xl`,3,`icon`]],template:function(t,i){t&1&&(ya$1(0,`div`,0),ov(`click`,function(){return i.close()}),ya$1(1,`button`,1)(2,`icon`,2),RS(3,`arrow_back`),Pd(),ya$1(4,`div`,3),RS(5),oM(6,`translate`),Pd()(),V_(7,Do,5,3,`a`,4,B_),Pd()),t&2&&(db(5),Tv(sM(6,1,`COMMON.CONTROLS_HELP`)),db(2),H_(i.tiles))},dependencies:[f$1,vt$2,z$2,f],encapsulation:2})}}return n})();var Po=(n,p)=>p.id;function Fo(n,p){if(n&1&&(ya$1(0,`div`,8),RS(1),Pd()),n&2){let e=J_().$implicit;db(),$d(` `,e.local,` `)}}function Lo(n,p){if(n&1){let e=q_();ya$1(0,`button`,6),ov(`click`,function(){let i=dh(e).$implicit;return fh(J_().setLocale(i.id))}),ya$1(1,`div`,7),oM(2,`translate`),ya$1(3,`div`),RS(4),oM(5,`translate`),Pd(),L_(6,Fo,2,1,`div`,8),oM(7,`translate`),Pd()()}if(n&2){let e=p.$implicit,t=J_();db(),mv(`mt-2`,sM(2,8,e.name)!==e.local)(`border`,t.active_locale===e.id)(`border-info`,t.active_locale===e.id),db(3),Tv(sM(5,10,e.name)),db(2),P_(sM(7,12,e.name)!==e.local?6:-1)}}var sa=(()=>{class n{constructor(){this._data=y(oe$1),this._settings=y(O0),this._locale=y(Og),this._locales=this._settings.signal(`locales`,[]),this.setLocale=e=>{this._locale.setLocale(e),localStorage.setItem(`PLACEOS.locale`,e),setTimeout(()=>location.reload(),300)},this.close=()=>this._data?.close()}get active_locale(){return this._locale.locale}get locales(){return this._locales()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=jT({type:n,selectors:[[`language-select`]],decls:12,vars:6,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-74`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`,3,`click`],[`back`,``,`type`,`button`,`matRipple`,``,1,`border-base-300`,`flex`,`w-full`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`,`text-left`],[1,`text-2xl`],[1,``],[1,`px-4`,`py-2`,`text-xs`,`opacity-60`],[`matRipple`,``,1,`flex`,`h-14`,`items-center`,`justify-between`,`space-x-8`,`px-2`,`text-left`],[`matRipple`,``,1,`flex`,`h-14`,`items-center`,`justify-between`,`space-x-8`,`px-2`,`text-left`,3,`click`],[1,`hover:bg-base-200`,`flex`,`flex-1`,`items-center`,`justify-between`,`rounded-sm`,`p-2`,`leading-tight`],[1,`bg-base-300`,`rounded-sm`,`px-2`,`py-1`,`text-xs`,`opacity-60`]],template:function(t,i){t&1&&(ya$1(0,`div`,0),ov(`click`,function(){return i.close()}),ya$1(1,`button`,1)(2,`icon`,2),RS(3,`arrow_back`),Pd(),ya$1(4,`div`,3),RS(5),oM(6,`translate`),Pd()(),ya$1(7,`div`,4),RS(8),oM(9,`translate`),Pd(),V_(10,Lo,8,14,`button`,5,Po),Pd()),t&2&&(db(5),Tv(sM(6,2,`COMMON.LANGUAGE`)),db(3),$d(` `,sM(9,4,`COMMON.LANGUAGE_SELECT`),` `),db(2),H_(i.locales))},dependencies:[f$1,vt$2,z$2,f],encapsulation:2})}}return n})();var ca=(()=>{class n{constructor(){this._settings=y(O0),this._tooltip=y(oe$1,{optional:!0}),this.plate_number=It$1(``)}async ngOnInit(){await ug(this._settings.initialised),this.plate_number.set(this._settings.get(`plate_number`)||``)}save(){this._settings.saveUserSetting(`plate_number`,this.plate_number()),$_(et(`COMMON.PARKING_SETTINGS_SAVE`)),this._tooltip?.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=jT({type:n,selectors:[[`user-parking-tooltip`]],decls:14,vars:13,consts:[[1,`border-base-300`,`bg-base-100`,`min-w-[20rem]`,`space-y-2`,`rounded-md`,`border`,`p-2`],[1,`border-base-300`,`border-b`,`text-lg`,`font-medium`],[1,`flex`,`flex-col`],[`for`,`user-parking-plate-number`],[`appearance`,`outline`,1,`no-subscript`],[`matInput`,``,`id`,`user-parking-plate-number`,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`]],template:function(t,i){t&1&&(ya$1(0,`div`,0)(1,`h3`,1),RS(2),oM(3,`translate`),Pd(),ya$1(4,`div`,2)(5,`label`,3),RS(6),oM(7,`translate`),Pd(),ya$1(8,`mat-form-field`,4)(9,`input`,5),oM(10,`translate`),xv(`ngModelChange`,function(l){return PS(i.plate_number,l)||(i.plate_number=l),l}),Pd(),Yb(),Pd()(),ya$1(11,`button`,6),ov(`click`,function(){return i.save()}),RS(12),oM(13,`translate`),Pd()()),t&2&&(db(2),$d(` `,sM(3,5,`COMMON.CONTROLS_PARKING`),` `),db(4),Tv(sM(7,7,`BOOKINGS.PARKING_PLATE_NUMBER`)),db(3),Nv(`ngModel`,i.plate_number),Ky(`placeholder`,sM(10,9,`BOOKINGS.PARKING_PLATE_NUMBER`)),Kb(),db(3),$d(` `,sM(13,11,`COMMON.SAVE`),` `))},dependencies:[qr$1,Fn,Be,Pe$2,Hd$1,cs,Pd$1,ka,f],encapsulation:2})}}return n})();function Uo(n,p){if(n&1){let e=q_();ya$1(0,`button`,17),ov(`click`,function(){let i=dh(e).$implicit,s=J_().$index;return fh(J_(2).setLocation(s,i.id))}),ya$1(1,`div`,18)(2,`icon`,11),RS(3),Pd(),ya$1(4,`div`,19),RS(5),oM(6,`translate`),Pd()()()}if(n&2){let e=p.$implicit;db(3),Tv(e.icon),db(2),$d(` `,sM(6,2,e.name),` `)}}function Go(n,p){n&1&&Xy(0,`div`,16)}function zo(n,p){if(n&1&&(ya$1(0,`div`,9)(1,`div`,10)(2,`icon`,11),RS(3),Pd()(),ya$1(4,`div`,12)(5,`button`,13)(6,`div`),RS(7),Pd(),ya$1(8,`icon`),RS(9,`expand_more`),Pd()(),ya$1(10,`mat-menu`,null,0),V_(12,Uo,7,4,`button`,14,B_),Pd(),ya$1(14,`div`,15),RS(15),oM(16,`date`),oM(17,`date`),Pd()(),L_(18,Go,1,0,`div`,16),Pd()),n&2){let e=p.$implicit,t=p.$index,i=aS(11),s=J_(2);mv(`opacity-30`,s.now>s.timeFrom(e.end_time)),db(),mv(`bg-base-200`,s.now<s.timeFrom(e.start_time)||s.now>s.timeFrom(e.end_time))(`bg-info`,s.now>=s.timeFrom(e.start_time)&&s.now<=s.timeFrom(e.end_time))(`text-info-content`,s.now>=s.timeFrom(e.start_time)&&s.now<=s.timeFrom(e.end_time)),db(2),Tv(s.location_icon(s.timeFrom(e.start_time))),db(2),Ky(`matMenuTriggerFor`,i),db(2),$d(` `,s.location(s.timeFrom(e.start_time)),` `),db(5),H_(s.locations()),db(3),_v(` `,aM(16,14,s.timeFrom(e.start_time),`shortTime`),` – `,aM(17,17,s.timeFrom(e.end_time),`shortTime`),` `),db(3),P_(t>0?18:-1)}}function Ho(n,p){if(n&1&&(ya$1(0,`div`,6),V_(1,zo,19,20,`div`,8,B_),Pd()),n&2){let e=J_();db(),H_(e.active_preference?.blocks)}}function Wo(n,p){n&1&&(ya$1(0,`div`,7)(1,`icon`,20),RS(2,`event_busy`),Pd(),ya$1(3,`p`,21),RS(4),oM(5,`translate`),Pd(),ya$1(6,`p`,21),RS(7),oM(8,`translate`),Pd()()),n&2&&(db(4),$d(` `,sM(5,2,`COMMON.WORK_LOCATION_EMPTY`),` `),db(3),$d(` `,sM(8,4,`COMMON.WORK_LOCATION_EDIT_INFO`),` `))}async function si(n,p,e){let t=It$2(),i=Gt$1(Date.now(),`yyyy-MM-dd`),s=m(l({},t.work_overrides),{[i]:m(l({},n),{blocks:[...n.blocks.slice(0,p),m(l({},n.blocks[p]),{location:e}),...n.blocks.slice(p+1)]})});for(let l in s){let L=Ps(l,`yyyy-MM-dd`,new Date);(!s[l].blocks.length||Oe(L,ot$1(K$2(Date.now()),-1)))&&delete s[l]}try{await yo$1(t.id,m(l({},t),{work_overrides:s}))}catch{return S_(`Unable to save your work location.`),t.work_overrides}return Oa$1(),s}var la=(()=>{class n{constructor(){this._dialog=y(ee),this._user=n0(),this.locations=It$1([]),this.settings=It$1(void 0),this.overrides=It$1({})}get active_preference(){let e=Gt$1(new Date,`yyyy-MM-dd`);return this.overrides()[e]?this.overrides()[e]:this.settings()?.find(t=>t.day_of_week===new Date().getDay())}get now(){return Bt$2(Date.now()).getTime()}ngOnInit(){let e=It$2();this.settings.set(e.work_preferences),this.overrides.set(e.work_overrides),this.locations.set([{id:`wfo`,name:et(`COMMON.WORK_OFFICE`),icon:`business`},{id:`wfh`,name:et(`COMMON.WORK_HOME`),icon:`home`},{id:`aol`,name:et(`COMMON.WORK_LEAVE`),icon:`event_busy`},{id:`sick`,name:et(`COMMON.WORK_SICK`),icon:`sick`}])}location_icon(e){return this._user().location_icon(e+60*1e3)}location(e){return this._user().location_name_time(e+60*1e3)}timeFrom(e){return Bt$2(it(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}editSettings(){this._dialog.open(wi)}async setLocation(e,t){this.overrides.set(await si(this.active_preference,e,t))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=jT({type:n,selectors:[[`work-location-tooltip`]],decls:15,vars:14,consts:[[`work_menu`,`matMenu`],[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`w-74`,`flex-col`,`overflow-hidden`,`rounded-sm`,`shadow-sm`],[1,`flex`,`items-center`,`justify-between`,`px-2`],[1,`px-2`,`py-4`,`font-medium`],[`icon`,``,`matRipple`,``,`matTooltipPosition`,`left`,1,`hover:bg-base-200`,3,`click`,`matTooltip`],[1,`px-4`,`text-sm`,`font-medium`],[1,`pb-2`],[1,`flex`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-2`,`p-8`,`opacity-30`],[1,`relative`,`flex`,`items-center`,`px-4`,`py-2`,3,`opacity-30`],[1,`relative`,`flex`,`items-center`,`px-4`,`py-2`],[1,`bg-base-200`,`z-20`,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`rounded-full`],[1,`text-2xl`],[1,`ml-2`,`flex-1`],[`matRipple`,``,1,`hover:bg-base-200`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`px-2`,`py-1`,`font-medium`,3,`matMenuTriggerFor`],[`mat-menu-item`,``],[1,`px-2`,`text-xs`,`opacity-60`],[1,`border-base-200`,`absolute`,`-top-2`,`left-7`,`h-4`,`w-0`,`-translate-x-px`,`border-l-2`,`border-dashed`],[`mat-menu-item`,``,3,`click`],[1,`flex`,`items-center`,`space-x-2`],[1,`pr-8`],[1,`text-6xl`],[1,`text-center`,`text-sm`]],template:function(t,i){t&1&&(ya$1(0,`div`,1)(1,`div`,2)(2,`h3`,3),RS(3),oM(4,`translate`),Pd(),ya$1(5,`button`,4),oM(6,`translate`),oM(7,`translate`),ov(`click`,function(){return i.editSettings()}),ya$1(8,`icon`),RS(9,`edit_note`),Pd()()(),ya$1(10,`h3`,5),RS(11),oM(12,`date`),Pd(),L_(13,Ho,3,0,`div`,6)(14,Wo,9,6,`div`,7),Pd()),t&2&&(db(3),$d(` `,sM(4,5,`COMMON.WORK_LOCATION`),` `),db(2),Ky(`matTooltip`,sM(6,7,`COMMON.WORK_LOCATION_EDIT`)),Qy(`aria-label`,sM(7,9,`COMMON.WORK_LOCATION_EDIT`)),db(6),$d(` `,aM(12,11,i.now,`fullDate`),` `),db(2),P_(i.active_preference?.blocks?.length?13:14))},dependencies:[LD,Ht$2,Ht$3,P$1,ee$1,Lt$1,f$1,vt$2,Yt$1,mt,z$2,jN,f],encapsulation:2})}}return n})();function jo(n,p){if(n&1){let e=q_();ya$1(0,`button`,29),ov(`click`,function(){let i=dh(e).$implicit;return fh(J_(2).setLocation(i.id))}),ya$1(1,`div`,30)(2,`icon`,24),RS(3),Pd(),ya$1(4,`div`,31),RS(5),oM(6,`translate`),Pd()()()}if(n&2){let e=p.$implicit;db(3),Tv(e.icon),db(2),$d(` `,sM(6,2,e.name),` `)}}function qo(n,p){if(n&1&&(ya$1(0,`div`,7)(1,`h3`,20),RS(2,` Today's Work Location `),Pd(),ya$1(3,`div`,21)(4,`div`,22)(5,`div`,23)(6,`icon`,24),RS(7),Pd()(),ya$1(8,`div`,25)(9,`button`,26)(10,`div`),RS(11),Pd(),ya$1(12,`icon`),RS(13,`expand_more`),Pd()(),ya$1(14,`mat-menu`,null,1),V_(16,jo,7,4,`button`,27,B_),Pd(),ya$1(18,`div`,28),RS(19),oM(20,`date`),oM(21,`date`),Pd()()()()()),n&2){let e=aS(15),t=J_();db(7),Tv(t.location_icon(t.timeFrom(t.active_block().start_time))),db(2),Ky(`matMenuTriggerFor`,e),db(2),$d(` `,t.location(t.timeFrom(t.active_block().start_time)),` `),db(5),H_(t.pref_locations()),db(3),_v(` `,aM(20,5,t.timeFrom(t.active_block().start_time),`shortTime`),` – `,aM(21,8,t.timeFrom(t.active_block().end_time),`shortTime`),` `)}}function Ko(n,p){if(n&1&&(ya$1(0,`div`,8)(1,`button`,13)(2,`div`,32)(3,`div`,33)(4,`icon`),RS(5,`layers`),Pd()(),ya$1(6,`div`,34),RS(7),Pd(),ya$1(8,`icon`,35),RS(9,` chevron_right `),Pd()()()()),n&2){let e=J_();Ky(`content`,e.building_select),db(7),$d(` `,e.region()?.display_name||e.region()?.name,` `)}}function $o(n,p){if(n&1&&(ya$1(0,`div`,9)(1,`button`,13)(2,`div`,32)(3,`div`,33)(4,`icon`),RS(5,`business`),Pd()(),ya$1(6,`div`,34),RS(7),Pd(),ya$1(8,`icon`,35),RS(9,` chevron_right `),Pd()()()()),n&2){let e=J_();Ky(`content`,e.building_select),db(7),$d(` `,e.building()?.display_name||e.building()?.name,` `)}}function Qo(n,p){if(n&1&&(ya$1(0,`div`,10)(1,`button`,13)(2,`div`,32)(3,`div`,33)(4,`icon`),RS(5,`help`),Pd()(),ya$1(6,`div`,36),RS(7),oM(8,`translate`),Pd(),ya$1(9,`icon`,35),RS(10,` chevron_right `),Pd()()()()),n&2)Ky(`content`,J_().help_tooltip),db(7),$d(` `,sM(8,2,`COMMON.CONTROLS_HELP`),` `)}function Xo(n,p){if(n&1&&(ya$1(0,`div`,10)(1,`button`,13)(2,`div`,32)(3,`div`,33)(4,`icon`),RS(5,`share_location`),Pd()(),ya$1(6,`div`,36),RS(7),oM(8,`translate`),Pd(),ya$1(9,`icon`,35),RS(10,`chevron_right`),Pd()()()()),n&2)Ky(`content`,J_().work_location_tooltip),db(7),$d(` `,sM(8,2,`COMMON.WORK_LOCATION`),` `)}function Zo(n,p){if(n&1&&(ya$1(0,`div`,10)(1,`button`,13)(2,`div`,32)(3,`div`,33)(4,`icon`),RS(5,`mode_night`),Pd()(),ya$1(6,`div`,36),RS(7),oM(8,`translate`),Pd(),ya$1(9,`icon`,35),RS(10,`chevron_right`),Pd()()()()),n&2){let e=J_();mv(`border-b!`,!e.locales().length||!e.desk_height()),Ky(`content`,e.accessibility_tooltip),db(7),$d(` `,sM(8,4,`COMMON.CONTROLS_ACCESSIBILITY`),` `)}}function Yo(n,p){if(n&1&&(ya$1(0,`div`,10)(1,`button`,13)(2,`div`,32)(3,`div`,33)(4,`icon`),RS(5,`desk`),Pd()(),ya$1(6,`div`,36),RS(7),oM(8,`translate`),Pd(),ya$1(9,`icon`,35),RS(10,` chevron_right `),Pd()()()()),n&2){let e=J_(),t=aS(15);mv(`border-b!`,!e.locales().length),Ky(`content`,t),db(7),$d(` `,sM(8,4,`COMMON.CONTROLS_DESKS`),` `)}}function Jo(n,p){n&1&&Xy(0,`desk-height-presets`)}function er(n,p){if(n&1&&(ya$1(0,`div`,10)(1,`button`,13)(2,`div`,32)(3,`div`,33)(4,`icon`),RS(5,`parking_sign`),Pd()(),ya$1(6,`div`,36),RS(7),oM(8,`translate`),Pd(),ya$1(9,`icon`,35),RS(10,` chevron_right `),Pd()()()()),n&2){let e=J_();mv(`border-b!`,!e.locales().length),Ky(`content`,e.parking_tooltip),db(7),$d(` `,sM(8,4,`COMMON.CONTROLS_PARKING`),` `)}}function tr(n,p){n&1&&(ya$1(0,`div`,38),RS(1,` Language `),Pd())}function ir(n,p){if(n&1&&(ya$1(0,`div`,12)(1,`button`,13)(2,`div`,32)(3,`div`,33)(4,`icon`),RS(5,`language`),Pd()(),ya$1(6,`div`,37)(7,`div`)(8,`div`),RS(9),oM(10,`translate`),Pd(),L_(11,tr,2,0,`div`,38),oM(12,`translate`),Pd(),ya$1(13,`div`,39),oM(14,`translate`),RS(15),oM(16,`translate`),Pd()(),ya$1(17,`icon`,35),RS(18,` chevron_right `),Pd()()()()),n&2){let e=J_();Ky(`content`,e.language_tooltip),db(9),$d(` `,sM(10,5,`COMMON.LANGUAGE`),` `),db(2),P_(sM(12,7,`COMMON.LANGUAGE`)!==`Language`?11:-1),db(2),Ky(`matTooltip`,sM(14,9,e.active_locale)),db(2),$d(` `,sM(16,11,e.active_locale),` `)}}function nr(n,p){if(n&1){let e=q_();ya$1(0,`button`,40),ov(`click`,function(){dh(e);return fh(J_().newSupportTicket())}),ya$1(1,`div`,32)(2,`div`,33)(3,`icon`),RS(4,`support_agent`),Pd()(),ya$1(5,`div`,36),RS(6),oM(7,`translate`),Pd()()()}n&2&&(db(6),$d(` `,sM(7,1,`COMMON.CONTROLS_SUPPORT`),` `))}function ar(n,p){if(n&1){let e=q_();ya$1(0,`button`,41),ov(`click`,function(){dh(e);return fh(J_().reloadPage())}),RS(1),oM(2,`translate`),Pd()}n&2&&(db(),$d(` `,sM(2,1,`COMMON.CONTROLS_NEW_VERSION`),` `))}function or(n,p){if(n&1){let e=q_();ya$1(0,`button`,42),ov(`click`,function(){dh(e);return fh(J_().viewChangelog())}),RS(1),Pd()}if(n&2){let e=J_();Ky(`disabled`,!e.changelog_available()),db(),$d(` `,e.version.hash,` `)}}function rr(n,p){if(n&1&&(ya$1(0,`span`),RS(1),Pd()),n&2){let e=J_();db(),Tv(e.version.hash)}}var da=(()=>{class n{constructor(){this._settings=y(O0),this._org=y(Pe$1),this._dialog=y(ee),this._changelog=y(Yn),this._locale=y(Og),this._user=n0(),this.building=this._org.active_building,this.region=this._org.active_region,this.regions=this._org.region_list,this.sidebar=vU(!1),this.accessibility=Et$1(`allow_accessibility_changes`,!0),this.show_changelog=Et$1(`show_changelog`,!0),this.changelog_available=this._changelog.available,this.viewChangelog=()=>this._changelog.view(),this.building_select=aa,this.help_tooltip=ra,this.accessibility_tooltip=na,this.language_tooltip=sa,this.work_location_tooltip=la,this.parking_tooltip=ca,this.features=Et$1(`features`,[]),this._locales=this._settings.signal(`locales`,[]),this._desk_height=this._settings.signal(`desks.height_enabled`,!1),this._use_region=this._settings.signal(`use_region`,!1),this._disable_building_select=this._settings.signal(`disable_building_select`,!1),this.pref_locations=It$1([]),this.work_prefs=It$1([]),this.overrides=It$1({}),this._active_preference=Le(()=>{let e=Gt$1(new Date,`yyyy-MM-dd`),t=new Date().getDay();return this.overrides()[e]||this.work_prefs().find(i=>i.day_of_week===t)}),this.active_index=Le(()=>this._active_preference()?.blocks?.findIndex(e=>this.now>=this.timeFrom(e.start_time)&&this.now<this.timeFrom(e.end_time))),this.active_block=Le(()=>this._active_preference()?.blocks?.[this.active_index()]),this.locales=this._locales,this.desk_height=this._desk_height,this.use_region=this._use_region,this.disable_building_select=this._disable_building_select}location_icon(e){return this.user.location_icon(e+60*1e3)}location(e){return this.user.location_name_time(e+60*1e3)}timeFrom(e){return Bt$2(it(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}get user(){return this._user()}get groups(){return this.user?.groups?.join(`
`)||``}get version(){return lt}get active_locale(){let e=this.locales(),t=this._locale.locale;for(let i of e)if(i.id===t)return i.name;return`LANGUAGE.ENGLISH`}get now(){return Bt$2(Date.now()).getTime()}get has_new_version(){return Pr()}ngOnInit(){let e=It$2();this.work_prefs.set(e?.work_preferences||[]),this.overrides.set(e?.work_overrides||{}),this.pref_locations.set([{id:`wfo`,name:et(`COMMON.WORK_OFFICE`),icon:`business`},{id:`wfh`,name:et(`COMMON.WORK_HOME`),icon:`home`},{id:`aol`,name:et(`COMMON.WORK_LEAVE`),icon:`event_busy`},{id:`sick`,name:et(`COMMON.WORK_SICK`),icon:`sick`}])}logout(){Up()}reloadPage(){location.reload()}newSupportTicket(){this._settings.get(`app.external_support_url`)?window.open(this._settings.get(`app.external_support_url`),`_blank`,`noopener,noreferrer`):this._dialog.open(Jn)}openWfhModal(){this._dialog.open(wi)}async setLocation(e){this.overrides.set(await si(this._active_preference(),this.active_index(),e))}formatLabel(e){return`${e.toFixed(1)}cm`}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=jT({type:n,selectors:[[`user-controls`]],inputs:{sidebar:[1,`sidebar`]},decls:35,vars:32,consts:[[`desk_height_tooltip`,``],[`work_menu`,`matMenu`],[1,`divide-base-200`,`border-base-300`,`bg-base-100`,`relative`,`mt-1`,`flex`,`flex-col`,`divide-y`,`overflow-auto`,`rounded-sm`,`border`,`shadow-sm`],[`avatar`,``,1,`flex`,`w-full`,`min-w-72`,`flex-col`,`items-center`,`p-2`],[1,`text-2xl`,3,`user`,`matTooltip`],[1,``],[1,`truncate`,`text-xs`,`opacity-60`],[1,`border-base-200`,`w-full`,`rounded-sm`,`border-y`,`py-2`],[`customTooltip`,``,`data`,`region`,1,`relative`,3,`content`],[`customTooltip`,``,1,`relative`,3,`content`],[`customTooltip`,``,3,`content`],[`customTooltip`,``,3,`content`,`border-b!`],[`customTooltip`,``,1,`border-b!`,3,`content`],[`btn`,``,`matRipple`,``,1,`clear`,`h-14`,`w-full`,`text-left`],[1,`flex`,`flex-col`,`items-center`,`p-4`],[1,`mb-4`,`flex`,`items-center`,`justify-center`,`space-x-2`],[`btn`,``,`matRipple`,``,1,`inverse`,3,`click`],[`btn`,``,`matRipple`,``],[1,`w-full`,`text-xs`,`opacity-60`],[1,`m-0`,`border-none`,`bg-none`,`p-0`,`text-xs`,`underline`,3,`disabled`],[1,`w-full`,`px-4`,`pb-2`,`text-sm`,`font-medium`],[1,`w-full`],[1,`relative`,`flex`,`items-center`,`px-4`,`py-2`],[1,`bg-info`,`text-info-content`,`z-20`,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`rounded-full`],[1,`text-2xl`],[1,`ml-2`,`flex-1`],[`matRipple`,``,1,`hover:bg-base-200`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`px-2`,`py-1`,`font-medium`,3,`matMenuTriggerFor`],[`mat-menu-item`,``],[1,`px-2`,`text-xs`,`opacity-60`],[`mat-menu-item`,``,3,`click`],[1,`flex`,`items-center`,`space-x-2`],[1,`pr-8`],[1,`flex`,`w-full`,`items-center`,`space-x-2`],[1,`bg-base-200`,`flex`,`h-8`,`w-8`,`items-center`,`justify-center`,`rounded-full`],[1,`w-px`,`flex-1`,`truncate`],[1,`text-2xl`,`opacity-60`],[1,`flex-1`],[1,`flex`,`flex-1`,`items-center`,`justify-between`,`space-x-4`],[1,`text-xs`,`opacity-30`],[1,`bg-base-200`,`max-w-24`,`truncate`,`rounded-sm`,`px-2`,`py-1`,`text-sm`,3,`matTooltip`],[`btn`,``,`matRipple`,``,1,`clear`,`h-14`,`w-full`,`text-left`,3,`click`],[`btn`,``,`matRipple`,``,3,`click`],[1,`m-0`,`border-none`,`bg-none`,`p-0`,`text-xs`,`underline`,3,`click`,`disabled`]],template:function(t,i){t&1&&(ya$1(0,`div`,2)(1,`div`,3),Xy(2,`a-user-avatar`,4),ya$1(3,`div`,5),RS(4),Pd(),ya$1(5,`div`,6),RS(6),Pd()(),L_(7,qo,22,11,`div`,7),L_(8,Ko,10,2,`div`,8),L_(9,$o,10,2,`div`,9),L_(10,Qo,11,4,`div`,10),L_(11,Xo,11,4,`div`,10),L_(12,Zo,11,6,`div`,11),L_(13,Yo,11,6,`div`,11),By(14,Jo,1,0,`ng-template`,null,0,uM),L_(16,er,11,6,`div`,11),L_(17,ir,19,13,`div`,12),L_(18,nr,8,3,`button`,13),ya$1(19,`div`,14)(20,`div`,15)(21,`button`,16),ov(`click`,function(){return i.logout()}),RS(22),oM(23,`translate`),Pd(),L_(24,ar,3,3,`button`,17),Pd(),ya$1(25,`div`,18),Vd(26),RS(27),oM(28,`translate`),Hd(),L_(29,or,2,2,`button`,19)(30,rr,2,1,`span`),Pd(),ya$1(31,`div`,18),RS(32),oM(33,`date`),oM(34,`date`),Pd()()()),t&2&&(mv(`border`,!i.sidebar()),db(2),Ky(`user`,i.user)(`matTooltip`,i.groups),db(2),Tv(i.user?.name),db(2),$d(` `,i.user?.email,` `),db(),P_(i.features().includes(`wfh`)&&i.active_block()?7:-1),db(),P_(i.regions()?.length?8:-1),db(),P_(!i.disable_building_select()&&!i.use_region()?9:-1),db(),P_(i.features().includes(`help`)?10:-1),db(),P_(i.features().includes(`wfh`)?11:-1),db(),P_(i.accessibility()?12:-1),db(),P_(i.desk_height()?13:-1),db(3),P_(i.features().includes(`parking-controls`)?16:-1),db(),P_(i.locales().length>1?17:-1),db(),P_(i.features().includes(`support-ticket`)?18:-1),db(4),$d(` `,sM(23,22,`COMMON.CONTROLS_SIGN_OUT`),` `),db(2),P_(i.has_new_version?24:-1),db(3),$d(` `,sM(28,24,`COMMON.CONTROLS_VERSION`),`: `),db(2),P_(i.show_changelog()?29:30),db(3),_v(` `,aM(33,26,i.version.time,`longDate`),` (`,aM(34,29,i.version.time,`shortTime`),`) `))},dependencies:[LD,Ht$2,f$1,vt$2,z$2,fe$1,Yt$1,mt,S$1,Ht$3,P$1,ee$1,Lt$1,oa,jN,f],encapsulation:2})}}return n})();var sr=[`panel`];var cr=[`layer`];var lr=[`*`];function dr(n,p){n&1&&(ya$1(0,`icon`,4),RS(1,`person`),Pd())}function pr(n,p){if(n&1){let e=q_();ya$1(0,`div`,3,0)(2,`button`,5),ov(`click`,function(){dh(e);return fh(J_().close())}),Pd(),ya$1(3,`div`,6)(4,`div`,7,1),oM(6,`translate`),Xy(7,`user-controls`,8),ya$1(8,`button`,9),oM(9,`translate`),ov(`click`,function(){dh(e);return fh(J_().close())}),ya$1(10,`icon`,4),RS(11,`close`),Pd()()()()()}if(n&2){let e=J_();db(2),mv(`opacity-50`,e.is_open())(`opacity-0`,!e.is_open()),db(2),mv(`translate-x-0`,e.is_open())(`translate-x-full`,!e.is_open()),Qy(`aria-label`,sM(6,11,`COMMON.USER_CONTROLS`)),db(3),Ky(`sidebar`,!0),db(),Qy(`aria-label`,sM(9,13,`COMMON.CLOSE`))}}var pa=(()=>{class n{constructor(){this._overlay_container=y(Wt$1),this._close_timeout=null,this._return_focus=null,this._panel=EU(`panel`),this._layer=EU(`layer`),this.is_open=It$1(!1),this.is_rendered=It$1(!1)}open(){this.is_open()||(this._close_timeout&&(clearTimeout(this._close_timeout),this._close_timeout=null),this._return_focus=document.activeElement,this.is_rendered.set(!0),requestAnimationFrame(()=>{this._layer()?.nativeElement.togglePopover?.(!0),this.is_open.set(!0),this._panel()?.nativeElement.focus({preventScroll:!0})}))}close(){this.is_open.set(!1),this._return_focus?.focus(),this._return_focus=null,this._close_timeout=setTimeout(()=>{this.is_rendered.set(!1),this._close_timeout=null},200)}onEscape(e){!this.is_open()||e.defaultPrevented||this._overlay_container.getContainerElement().contains(e.target)||this.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=jT({type:n,selectors:[[`user-controls-sidebar`]],viewQuery:function(t,i){t&1&&lv(i._panel,sr,5)(i._layer,cr,5),t&2&&sS(2)},hostBindings:function(t,i){t&1&&ov(`keydown.escape`,function(l){return i.onEscape(l)},mC)},ngContentSelectors:lr,decls:5,vars:5,consts:[[`layer`,``],[`panel`,``],[`icon`,``,`matRipple`,``,`avatar`,``,`type`,`button`,`name`,`user-controls`,`aria-haspopup`,`dialog`,1,`bg-base-200`,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`rounded-full`,3,`click`],[`popover`,`manual`,1,`fixed`,`inset-0`,`m-0`,`h-full`,`max-h-none`,`w-full`,`max-w-none`,`overflow-hidden`,`border-0`,`bg-transparent`,`p-0`,`text-inherit`],[1,`text-2xl`],[`type`,`button`,`aria-label`,`Close user controls`,1,`absolute`,`inset-0`,`bg-black`,`transition-opacity`,`duration-200`,`starting:opacity-0`,3,`click`],[1,`absolute`,`inset-y-0`,`right-0`,`flex`,`max-w-full`],[`role`,`dialog`,`aria-modal`,`true`,`tabindex`,`-1`,`cdkTrapFocus`,``,1,`bg-base-100`,`relative`,`h-full`,`w-80`,`max-w-[100vw]`,`overflow-auto`,`pt-[calc(env(safe-area-inset-top)+1rem)]`,`pr-[env(safe-area-inset-right)]`,`pb-[env(safe-area-inset-bottom)]`,`shadow-xl`,`transition-transform`,`duration-200`,`ease-out`,`focus:outline-hidden`,`starting:translate-x-full`],[3,`sidebar`],[`icon`,``,`default`,``,`matRipple`,``,`type`,`button`,1,`absolute`,`top-[calc(env(safe-area-inset-top)+0.5rem)]`,`right-[calc(env(safe-area-inset-right)+0.5rem)]`,3,`click`]],template:function(t,i){t&1&&(tS(),ya$1(0,`button`,2),oM(1,`translate`),ov(`click`,function(){return i.open()}),nS(2,0,null,dr,2,0),Pd(),L_(4,pr,12,15,`div`,3)),t&2&&(Qy(`aria-label`,sM(1,3,`COMMON.USER_CONTROLS`))(`aria-expanded`,i.is_open()),db(4),P_(i.is_rendered()?4:-1))},dependencies:[Lt,f$1,vt$2,z$2,da,f],encapsulation:2})}}return n})();var mr=n=>({count:n});var hr=()=>[`/`];var ur=n=>({paths:n,queryParams:`subset`,matrixParams:`ignored`,fragment:`ignored`});var ma=(n,p)=>p.id;function _r(n,p){if(n&1&&(ya$1(0,`a`,1),Xy(1,`img`,10),oM(2,`translate`),Pd()),n&2){let e=J_();Ky(`routerLink`,WS(5,hr)),db(),Ky(`source`,e.logo())(`alt`,sM(2,3,`COMMON.HOME`))}}function gr(n,p){n&1&&Xy(0,`hr`,11)}function fr(n,p){if(n&1){let e=q_();ya$1(0,`button`,15),ov(`click`,function(){dh(e);let i=J_().$implicit;return fh(J_().toggleGroup(i.id))}),ya$1(1,`div`,16),RS(2),oM(3,`translate`),Pd(),ya$1(4,`icon`,17),RS(5,` arrow_drop_down `),Pd()()}if(n&2){let e=J_().$implicit,t=J_();Qy(`aria-expanded`,!t.collapsed()[e.id])(`aria-controls`,`nav-group-`+e.id),db(),gv(`letter-spacing`,`0.125rem`),db(),$d(` `,sM(3,7,e.name),` `),db(2),mv(`-rotate-90`,t.collapsed()[e.id])}}function vr(n,p){if(n&1&&(ya$1(0,`span`),RS(1),oM(2,`translate`),Pd()),n&2){let e=J_().$implicit;db(),Tv(sM(2,1,e.name))}}function br(n,p){if(n&1&&(ya$1(0,`a`,18),oM(1,`translate`),oM(2,`translate`),ya$1(3,`icon`,19),RS(4),Pd(),L_(5,vr,3,3,`span`),Pd()),n&2){let e=p.$implicit,t=J_(2);mv(`rounded-r-full`,!t.rail())(`pr-2`,!t.rail())(`pl-3`,!t.rail())(`justify-center`,t.rail()),Ky(`routerLink`,e.route)(`routerLinkActiveOptions`,qS(18,ur,e.exact?`exact`:`subset`))(`matTooltip`,t.rail()?sM(1,14,e.name):``),Qy(`aria-label`,t.rail()?sM(2,16,e.name):null),db(4),Tv(e.icon),db(),P_(t.rail()?-1:5)}}function yr(n,p){if(n&1&&(L_(0,gr,1,0,`hr`,11)(1,fr,6,9,`button`,12),ya$1(2,`section`,13),V_(3,br,6,20,`a`,14,ma),Pd()),n&2){let e=p.$implicit,t=J_();P_(t.rail()?0:1),db(2),mv(`contract-collapsed`,!t.rail()&&t.collapsed()[e.id]),Ky(`id`,`nav-group-`+e.id)(`inert`,!t.rail()&&t.collapsed()[e.id]),db(),H_(e.children)}}var ha=`reports`;var Cr=[`placeos_admin`,`placeos_support`];var Sr=It$1({});var ua=`PLACEOS.concierge.sidebar_rail`;var ci=It$1(xr());function xr(){try{return localStorage.getItem(ua)===`true`}catch{return!1}}var kr=[{id:`bookings`,name:`APP.CONCIERGE.MENU_BOOKINGS`,children:[{id:`spaces`,name:`APP.CONCIERGE.MENU_ROOM_BOOKINGS`,route:[`/book/rooms`],icon:`meeting_room`},{id:`desks`,name:`APP.CONCIERGE.MENU_DESK_BOOKINGS`,route:[`/book/desks/events`],icon:`desk`},{id:`parking`,alt_features:[`parking-bookings`],name:`APP.CONCIERGE.MENU_PARKING_BOOKINGS`,route:[`/book/parking/events`],icon:`local_parking`},{id:`lockers`,name:`APP.CONCIERGE.MENU_LOCKER_BOOKINGS`,route:[`/book/lockers/events`],icon:`lock`},{id:`assets`,name:`APP.CONCIERGE.MENU_ASSET_BOOKINGS`,route:[`/book/assets/list/requests`],icon:`inventory_2`},{id:`catering`,name:`APP.CONCIERGE.MENU_CATERING_BOOKINGS`,route:[`/book/catering/orders`],icon:`restaurant`},{id:`visitors`,name:`APP.CONCIERGE.MENU_VISITOR_BOOKINGS`,route:[`/book/visitors`],icon:`badge`},{id:`visitor-rules`,name:`APP.CONCIERGE.MENU_VISITOR_RULES`,route:[`/book/visitors/rules`],icon:`rule`}]},{id:`facilities`,name:`APP.CONCIERGE.MENU_MANAGEMENT`,admin_only:!0,children:[{id:`zones`,name:`APP.CONCIERGE.MENU_MANAGE_ZONES`,route:[`/zone-management`],icon:`business`},{id:`maps`,name:`APP.CONCIERGE.MENU_MANAGE_MAPS`,route:[`/map-management`],icon:`map`},{id:`spaces`,name:`APP.CONCIERGE.MENU_MANAGE_ROOMS`,route:[`/room-management`],icon:`meeting_room`},{id:`desks`,name:`APP.CONCIERGE.MENU_MANAGE_DESKS`,route:[`/book/desks/manage`],icon:`desk`},{id:`parking`,alt_features:[`parking-manage`],name:`APP.CONCIERGE.MENU_MANAGE_PARKING`,route:[`/book/parking/manage`],icon:`local_parking`},{id:`lockers`,name:`APP.CONCIERGE.MENU_MANAGE_LOCKERS`,route:[`/book/lockers/manage`],icon:`lock`},{id:`catering`,name:`APP.CONCIERGE.MENU_MANAGE_CATERING`,route:[`/book/catering/menu`],icon:`menu_book`},{id:`points`,name:`APP.CONCIERGE.MENU_MANAGE_POINTS`,route:[`/points-management`],icon:`stars`},{id:`emergency-contacts`,name:`APP.CONCIERGE.MENU_MANAGE_CONTACTS`,route:[`/users/staff/emergency-contacts`],icon:`contact_emergency`},{id:`points-of-interest`,name:`APP.CONCIERGE.MENU_MANAGE_MAP_FEATURES`,route:[`/points-of-interest`],icon:`pin_drop`},{id:`url-management`,name:`APP.CONCIERGE.MENU_MANAGE_URLS`,route:[`/url-management`],icon:`link`},{id:`remote-setup`,name:`APP.CONCIERGE.MENU_MANAGE_REMOTE_SETUP`,route:[`/remote-setup`],icon:`qr_code_scanner`},{id:`email-templates`,name:`APP.CONCIERGE.MENU_MANAGE_EMAILS`,route:[`/email-templates`],icon:`mail`},{id:`deals-n-offers`,name:`APP.CONCIERGE.MENU_MANAGE_DEALS`,route:[`/deals-n-offers`],icon:`local_offer`}]},{id:`other`,name:`APP.CONCIERGE.MENU_OTHER`,children:[{id:`assets`,name:`APP.CONCIERGE.MENU_ASSETS`,route:[`/book/assets/list/items`],icon:`vibration`},{id:`internal-users`,name:`APP.CONCIERGE.MENU_USER_LIST`,route:[`/users/staff`],icon:`assignment_ind`,exact:!0},{id:`events`,name:`APP.CONCIERGE.MENU_EVENTS`,route:[`/entertainment/events`],icon:`confirmation_number`},{id:`surveys`,name:`APP.CONCIERGE.MENU_SURVEYS`,route:[`/surveys`],icon:`add_reaction`}]},{id:ha,name:`APP.CONCIERGE.MENU_REPORTS`,children:[{id:`attendance-report`,name:`APP.CONCIERGE.MENU_REPORT_SITE_ATTENDANCE`,route:[`/reports/attendance`],icon:`groups`},{id:`booking-report`,name:`APP.CONCIERGE.MENU_REPORT_ROOMS`,route:[`/reports/bookings`],icon:`meeting_room`},{id:`desk-report`,name:`APP.CONCIERGE.MENU_REPORT_DESKS`,route:[`/reports/desks`],icon:`desk`},{id:`parking-report`,name:`APP.CONCIERGE.MENU_REPORT_PARKING`,route:[`/reports/parking`],icon:`local_parking`},{id:`lockers-report`,name:`APP.CONCIERGE.MENU_REPORT_LOCKERS`,route:[`/reports/lockers`],icon:`lock`},{id:`catering-report`,name:`APP.CONCIERGE.MENU_REPORT_CATERING`,route:[`/reports/catering`],icon:`room_service`},{id:`contact-tracing-report`,name:`APP.CONCIERGE.MENU_REPORT_CONTACT_TRACING`,route:[`/reports/contact-tracing`],icon:`connect_without_contact`},{id:`assets-report`,name:`APP.CONCIERGE.MENU_REPORT_ASSETS`,route:[`/reports/assets`],icon:`inventory_2`},{id:`visitors-report`,name:`APP.CONCIERGE.MENU_REPORT_VISITORS`,route:[`/reports/visitors`],icon:`badge`},{id:`user-report`,name:`APP.CONCIERGE.MENU_REPORT_USER`,route:[`/reports/user`],icon:`person_search`}]}];var lp=(()=>{class n extends xn{constructor(){super(...arguments),this._settings=y(O0),this._org=y(Pe$1),this._element_ref=y(Qt),this._shortcuts=y(O$1),this.collapsed=Sr,this.rail=ci.asReadonly(),this.user=n0(),this.group_count=Le(()=>this.user().groups?.length||0),this.logo=S0(),this._is_admin=Le(()=>{let e=Xy$1();return[this._settings.get(`app.admin_group`)||`admin`,...Cr].some(i=>e.includes(i))}),this._custom_reports=Le(()=>(this._settings.get(`app.custom_reports`)||[]).map(({id:t,name:i,icon:s})=>({id:`custom-${t}`,name:i,route:[`/reports`,t],icon:s||`insert_chart`}))),this.groups=Le(()=>this._org.initialised()?kr.flatMap(e=>{if(e.admin_only&&!this._is_admin())return[];let t=e.children.filter(i=>this._canView(i));return e.id===ha&&t.push(...this._custom_reports()),t.length?[m(l({},e),{children:t})]:[]}):[])}async ngOnInit(){await this._org.waitUntilInitialised(),this.timeout(`scroll`,()=>this._scrollToActiveLink(),50)}openShortcuts(){this._shortcuts.openHelp()}toggleRail(){ci.update(e=>!e);try{localStorage.setItem(ua,`${ci()}`)}catch{}}toggleGroup(e){this.collapsed.update(t=>m(l({},t),{[e]:!t[e]}))}_canView(e){return[e.id,...e.alt_features||[]].some(t=>this._hasFeature(t))}_hasFeature(e){if(!(this._settings.get(`app.features`)||[]).includes(e))return!1;let s=(this._settings.get(`app.feature_groups`)||{})[e]||[];return!s.length||this._is_admin()||Xy$1().some(l=>s.includes(l))}_scrollToActiveLink(){this._element_ref.nativeElement.querySelector(`a.active`)?.scrollIntoView({block:`center`,behavior:`instant`})}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Yg(n)))(i||n)}})()}static{this.ɵcmp=jT({type:n,selectors:[[`app-sidebar`]],hostVars:2,hostBindings:function(t,i){t&2&&mv(`rail`,i.rail())},features:[Py],decls:24,vars:29,consts:[[`user_controls`,``],[1,`block`,`px-4`,`pt-3`,`pb-2`,3,`routerLink`],[1,`flex-1`,`overflow-auto`,`py-2`],[1,`border-base-200`,`flex`,`items-center`,`gap-1`,`border-t`,`p-2`],[3,`user`],[`matRipple`,``,`type`,`button`,`tabindex`,`-1`,1,`hover:bg-base-200`,`min-w-0`,`flex-1`,`rounded-lg`,`px-2`,`py-1`,`text-left`,3,`click`],[1,`truncate`,`text-sm`,`font-medium`],[1,`truncate`,`text-xs`,`opacity-70`],[`btn`,``,`icon`,``,`matRipple`,``,3,`click`,`matTooltip`],[1,`text-2xl`],[`auth`,``,1,`h-10`,3,`source`,`alt`],[1,`border-base-200`,`mx-3`,`not-first:my-2`],[`matRipple`,``,1,`hover:bg-base-200`,`flex`,`w-full`,`items-center`,`rounded-r-full`,`py-1`,`pr-1`,`pl-3`,`text-xs`,`font-medium`,`uppercase`,`opacity-70`,`not-first:mt-3`],[1,`contract-expand`,`w-full`,3,`id`,`inert`],[`matRipple`,``,`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`,`matTooltipPosition`,`right`,1,`hover:bg-base-200`,`my-0.5`,`flex`,`w-full`,`items-center`,`gap-2`,`py-1`,`text-sm`,3,`rounded-r-full`,`pr-2`,`pl-3`,`justify-center`,`routerLink`,`routerLinkActiveOptions`,`matTooltip`],[`matRipple`,``,1,`hover:bg-base-200`,`flex`,`w-full`,`items-center`,`rounded-r-full`,`py-1`,`pr-1`,`pl-3`,`text-xs`,`font-medium`,`uppercase`,`opacity-70`,`not-first:mt-3`,3,`click`],[1,`flex-1`,`text-left`,`uppercase`],[`aria-hidden`,`true`,1,`text-xl`,`transition-transform`],[`matRipple`,``,`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`,`matTooltipPosition`,`right`,1,`hover:bg-base-200`,`my-0.5`,`flex`,`w-full`,`items-center`,`gap-2`,`py-1`,`text-sm`,3,`routerLink`,`routerLinkActiveOptions`,`matTooltip`],[`aria-hidden`,`true`,1,`text-xl`,`opacity-60`]],template:function(t,i){if(t&1){let s=q_();L_(0,_r,3,6,`a`,1),ya$1(1,`nav`,2),V_(2,yr,5,5,null,null,ma),Pd(),ya$1(4,`div`,3)(5,`user-controls-sidebar`,null,0),Xy(7,`a-user-avatar`,4),Pd(),ya$1(8,`button`,5),ov(`click`,function(){dh(s);return fh(aS(6).open())}),ya$1(9,`div`,6),RS(10),Pd(),ya$1(11,`div`,7),RS(12),oM(13,`translate`),Pd()(),ya$1(14,`button`,8),oM(15,`translate`),oM(16,`translate`),ov(`click`,function(){return i.openShortcuts()}),ya$1(17,`icon`,9),RS(18,`keyboard`),Pd()(),ya$1(19,`button`,8),oM(20,`translate`),oM(21,`translate`),ov(`click`,function(){return i.toggleRail()}),ya$1(22,`icon`,9),RS(23),Pd()()()}t&2&&(P_(i.rail()?-1:0),db(),mv(`pr-3`,!i.rail()),db(),H_(i.groups()),db(2),mv(`flex-col`,i.rail()),db(3),Ky(`user`,i.user()),db(),mv(`hidden`,i.rail()),db(2),$d(` `,i.user().name,` `),db(2),$d(` `,cM(13,15,`APP.CONCIERGE.USER_GROUP_COUNT`,qS(27,mr,i.group_count()),i.group_count()),` `),db(2),Ky(`matTooltip`,sM(15,19,`APP.CONCIERGE.SHORTCUTS_TITLE`)),Qy(`aria-label`,sM(16,21,`APP.CONCIERGE.SHORTCUTS_TITLE`)),db(5),Ky(`matTooltip`,sM(20,23,i.rail()?`APP.CONCIERGE.SIDEBAR_EXPAND`:`APP.CONCIERGE.SIDEBAR_COLLAPSE`)),Qy(`aria-label`,sM(21,25,i.rail()?`APP.CONCIERGE.SIDEBAR_EXPAND`:`APP.CONCIERGE.SIDEBAR_COLLAPSE`)),db(4),Tv(i.rail()?`left_panel_open`:`left_panel_close`))},dependencies:[as,$t$1,ts,f$1,vt$2,Yt$1,mt,H$2,z$2,S$1,pa,f],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:16rem;border-right:1px solid var(--%NS%base-200);view-transition-name:concierge-sidebar}.rail[_nghost-%COMP%]{width:4rem}a.active[_ngcontent-%COMP%]{background-color:var(--%NS%secondary);color:var(--%NS%secondary-content)}a.active[_ngcontent-%COMP%]:hover{color:var(--%NS%base-content);opacity:.75}`]})}}return n})();export{ct as _,Hn as a,Xn as c,lp as d,ni as f,S$1 as g,_e as h,Gn as i,Xt as l,zn as m,Bt as n,Tn as o,qn as p,Ee as r,Un as s,$n as t,jn as u,wi as v,Ps as y};
;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6652df69-0bc0-5d79-9e84-4ec0c6ddd48a")}catch(e){}}();
//# debugId=6652df69-0bc0-5d79-9e84-4ec0c6ddd48a
