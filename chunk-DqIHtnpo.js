import{n as m,t as l}from"./chunk-DzscigDP.js";import{An as YS,At as Pa$1,Cn as Xb,Cr as gv,D as Ee$1,Dn as Y$2,Dr as iS,Dt as PD,E as Ea$1,En as Xy,F as Fx,Fi as w$1,Gi as yC,Gn as aS,H as H_,Hr as lv,Ii as wU,In as ZM,It as Qb,J as Is,Jn as at,Jr as mv,K as IU,Ki as yU,Kn as ae,Kt as SE,Ln as ZS,Mr as j_,Ni as va$1,Nn as Yy,Nr as jd,Nt as Py,Oi as uM,Pr as jm,Qr as nS,Ri as wt$1,Rn as Z_,Rt as Qt,Sr as fh,T as EU,U as Hd,Ui as xv,Un as _v,Vn as _U,W as Ht$1,Wi as y,Wr as mC,X as Js,Yn as av,_ as CS,ai as pe,at as Le,b as Cm,bi as sa$1,bt as OS,c as Ar$1,d as BT,dr as de,ei as nv,f as B_,fn as V_,g as By,gr as eS,hi as rS,ir as cS,jn as Yg,jt as Pd,kn as YM,kt as P_,l as Av,ln as Us,lr as cv,m as Bd,mr as di,oi as pf,on as U_,pn as Vd,pr as dh,qi as z$1,r as $d,ri as ov,rn as Tv,rr as cM,tn as TE,tt as Ky,u as BS,ui as qS,un as VN,ur as dM,ut as N,vi as sM,x as DU,xi as sr$2,xr as fb,xt as Oc,yi as sS,yr as fC,z as Gv,zn as _E,zr as lM,zt as Qy}from"./chunk-B1UtBMFU.js";import{$a as xt$1,$r as _0,Ai as fo$1,Ba as v$1,Bn as It$1,Bo as ns,Bt as yn$1,Cn as Ee$2,D as Qs,Da as se,Di as f0,Dn as Fo$1,Ea as rt,Ei as et,Fi as h_,Ga as w_,Hn as J_,Ht as z$2,Io as jt$1,Ja as wt$2,Ka as wi$1,Ki as k_,Kt as O$1,Lr as Wt$1,Mn as Go$1,Mo as as$1,Mt as wp,No as ce,P as Xr$1,Pa as tl,Pn as Gy,Q as ge,Qn as Mi,R as bc,Ri as ie,To as Lt,Uo as st,Ur as Ye,Vi as it,Vo as oe,Wa as vp,Wn as K$2,Wt as f,X as gc,Xa as xe,Y as fe,Yr as Yy$1,Yt as $t$1,_ as Kt$1,_a as pr$1,cn as $_,d as H_$1,da as oi$1,do as zt$2,dr as Pi,en as as,fo as zy,gt as ns$1,ha as p_,ho as $e,ii as _r$1,in as ts,jn as Gn$1,kn as Ft$1,kt as wc,la as oe$1,ma as ot$1,na as mn,nr as Ne,qi as ka,ro as yn,si as af,sr as Oi,ti as _g,to as yi,tr as N_,tt as gp,un as A$1,ut as me,wo as L$1,xi as ed,xn as Di,xr as Ti,yo as H$1,zo as m$1}from"./main.js";import{t as m$2}from"./chunk-CIH8gvVj.js";import{i as Tt$1,o as l$1,r as Q$2,s as vt$1}from"./chunk-gsVz6NNj.js";import{n as pe$1,t as ce$1}from"./chunk-BRI_QG3w.js";import{t as f$1}from"./chunk-BD4yRwat.js";import{i as je,o as J$2,r as Qt$1,s as Z$2,t as Gt$1}from"./chunk-B4mpwSnx.js";import{a as Xr$2,i as Rt$1,n as Jr,o as Xt$1,r as Qr$1}from"./chunk-B2TG0W6r.js";import{h as Wt$2,t as At$1}from"./chunk-DH2Vbjho.js";import{d as ee,f as jt$2,n as Bt$2,o as T$1,r as Ht$2,t as $e$1}from"./chunk-Cy0XDq3q.js";import{c as gt,d as vt$2,i as Kt$2,l as ht,n as Pe,t as Be,u as qe}from"./chunk-BbrmG4R6.js";import{n as mt,t as Yt$1}from"./chunk-LzUPfcA_.js";import{t as H$2}from"./chunk-DmKQu3Eg.js";import{t as k}from"./chunk-BeLvVktK.js";import{n as oe$2,t as fe$1}from"./chunk-BI6HB95G2.js";import{a as X$2,i as Te,r as J$3}from"./chunk-tRn7ObXz2.js";import{a as ee$1,i as P$1,n as Ht$3,r as Lt$1,t as Bt$3}from"./chunk-Dm5pla-_2.js";import{t as ie$1}from"./chunk-DCg9sMWr2.js";import{r as g}from"./chunk-CwIuzRKs2.js";import{t as N$1}from"./chunk-CeuuTEun2.js";function Hr(o,r){let t=Fr(r)?new r(0):A$1(r,0);return t.setFullYear(o.getFullYear(),o.getMonth(),o.getDate()),t.setHours(o.getHours(),o.getMinutes(),o.getSeconds(),o.getMilliseconds()),t}function Fr(o){return typeof o==`function`&&o.prototype?.constructor===o}var Br=10;var M=class{subPriority=0;validate(r,t){return!0}};var Y$1=class extends M{constructor(r,t,e,s,i){super(),this.value=r,this.validateValue=t,this.setValue=e,this.priority=s,i&&(this.subPriority=i)}validate(r,t){return this.validateValue(r,this.value,t)}set(r,t,e){return this.setValue(r,t,this.value,e)}};var E=class extends M{priority=Br;subPriority=-1;constructor(r,t){super(),this.context=r||(e=>A$1(t,e))}set(r,t){return t.timestampIsSet?r:A$1(r,Hr(r,this.context))}};var n=class{run(r,t,e,s){let i=this.parse(r,t,e,s);return i?{setter:new Y$1(i.value,this.validate,this.set,this.priority,this.subPriority),rest:i.rest}:null}validate(r,t,e){return!0}};var I=class extends n{priority=140;parse(r,t,e){switch(t){case`G`:case`GG`:case`GGG`:return e.era(r,{width:`abbreviated`})||e.era(r,{width:`narrow`});case`GGGGG`:return e.era(r,{width:`narrow`});default:return e.era(r,{width:`wide`})||e.era(r,{width:`abbreviated`})||e.era(r,{width:`narrow`})}}set(r,t,e){return t.era=e,r.setFullYear(e,0,1),r.setHours(0,0,0,0),r}incompatibleTokens=[`R`,`u`,`t`,`T`]};var c={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/};var x={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function p(o,r){return o&&{value:r(o.value),rest:o.rest}}function u(o,r){let t=r.match(o);return t?{value:parseInt(t[0],10),rest:r.slice(t[0].length)}:null}function h(o,r){let t=r.match(o);if(!t)return null;if(t[0]===`Z`)return{value:0,rest:r.slice(1)};let e=t[1]===`+`?1:-1,s=t[2]?parseInt(t[2],10):0,i=t[3]?parseInt(t[3],10):0,l=t[5]?parseInt(t[5],10):0;return{value:e*(s*oi$1+i*mn+l*tl),rest:r.slice(t[0].length)}}function H(o){return u(c.anyDigitsSigned,o)}function a(o,r){switch(o){case 1:return u(c.singleDigit,r);case 2:return u(c.twoDigits,r);case 3:return u(c.threeDigits,r);case 4:return u(c.fourDigits,r);default:return u(new RegExp(`^\\d{1,`+o+`}`),r)}}function P(o,r){switch(o){case 1:return u(c.singleDigitSigned,r);case 2:return u(c.twoDigitsSigned,r);case 3:return u(c.threeDigitsSigned,r);case 4:return u(c.fourDigitsSigned,r);default:return u(new RegExp(`^-?\\d{1,`+o+`}`),r)}}function T(o){switch(o){case`morning`:return 4;case`evening`:return 17;case`pm`:case`noon`:case`afternoon`:return 12;default:return 0}}function O(o,r){let t=r>0,e=t?r:1-r,s;if(e<=50)s=o||100;else{let i=e+50,l=Math.trunc(i/100)*100,b=o>=i%100;s=o+l-(b?100:0)}return t?s:1-s}function q$1(o){return o%400===0||o%4===0&&o%100!==0}var L=class extends n{priority=130;incompatibleTokens=[`Y`,`R`,`u`,`w`,`I`,`i`,`e`,`c`,`t`,`T`];parse(r,t,e){let s=i=>({year:i,isTwoDigitYear:t===`yy`});switch(t){case`y`:return p(a(4,r),s);case`yo`:return p(e.ordinalNumber(r,{unit:`year`}),s);default:return p(a(t.length,r),s)}}validate(r,t){return t.isTwoDigitYear||t.year>0}set(r,t,e){let s=r.getFullYear();if(e.isTwoDigitYear){let l=O(e.year,s);return r.setFullYear(l,0,1),r.setHours(0,0,0,0),r}let i=!(`era`in t)||t.era===1?e.year:1-e.year;return r.setFullYear(i,0,1),r.setHours(0,0,0,0),r}};var v=class extends n{priority=130;parse(r,t,e){let s=i=>({year:i,isTwoDigitYear:t===`YY`});switch(t){case`Y`:return p(a(4,r),s);case`Yo`:return p(e.ordinalNumber(r,{unit:`year`}),s);default:return p(a(t.length,r),s)}}validate(r,t){return t.isTwoDigitYear||t.year>0}set(r,t,e,s){let i=yn(r,s);if(e.isTwoDigitYear){let b=O(e.year,i);return r.setFullYear(b,0,s.firstWeekContainsDate),r.setHours(0,0,0,0),xt$1(r,s)}let l=!(`era`in t)||t.era===1?e.year:1-e.year;return r.setFullYear(l,0,s.firstWeekContainsDate),r.setHours(0,0,0,0),xt$1(r,s)}incompatibleTokens=[`y`,`R`,`u`,`Q`,`q`,`M`,`L`,`I`,`d`,`D`,`i`,`t`,`T`]};var Q$1=class extends n{priority=130;parse(r,t){return t===`R`?P(4,r):P(t.length,r)}set(r,t,e){let s=A$1(r,0);return s.setFullYear(e,0,4),s.setHours(0,0,0,0),Ft$1(s)}incompatibleTokens=[`G`,`y`,`Y`,`u`,`Q`,`q`,`M`,`L`,`w`,`d`,`D`,`e`,`c`,`t`,`T`]};var R=class extends n{priority=130;parse(r,t){return t===`u`?P(4,r):P(t.length,r)}set(r,t,e){return r.setFullYear(e,0,1),r.setHours(0,0,0,0),r}incompatibleTokens=[`G`,`y`,`Y`,`R`,`w`,`I`,`i`,`e`,`c`,`t`,`T`]};var W$1=class extends n{priority=120;parse(r,t,e){switch(t){case`Q`:case`QQ`:return a(t.length,r);case`Qo`:return e.ordinalNumber(r,{unit:`quarter`});case`QQQ`:return e.quarter(r,{width:`abbreviated`,context:`formatting`})||e.quarter(r,{width:`narrow`,context:`formatting`});case`QQQQQ`:return e.quarter(r,{width:`narrow`,context:`formatting`});default:return e.quarter(r,{width:`wide`,context:`formatting`})||e.quarter(r,{width:`abbreviated`,context:`formatting`})||e.quarter(r,{width:`narrow`,context:`formatting`})}}validate(r,t){return t>=1&&t<=4}set(r,t,e){return r.setMonth((e-1)*3,1),r.setHours(0,0,0,0),r}incompatibleTokens=[`Y`,`R`,`q`,`M`,`L`,`w`,`I`,`d`,`D`,`i`,`e`,`c`,`t`,`T`]};var C=class extends n{priority=120;parse(r,t,e){switch(t){case`q`:case`qq`:return a(t.length,r);case`qo`:return e.ordinalNumber(r,{unit:`quarter`});case`qqq`:return e.quarter(r,{width:`abbreviated`,context:`standalone`})||e.quarter(r,{width:`narrow`,context:`standalone`});case`qqqqq`:return e.quarter(r,{width:`narrow`,context:`standalone`});default:return e.quarter(r,{width:`wide`,context:`standalone`})||e.quarter(r,{width:`abbreviated`,context:`standalone`})||e.quarter(r,{width:`narrow`,context:`standalone`})}}validate(r,t){return t>=1&&t<=4}set(r,t,e){return r.setMonth((e-1)*3,1),r.setHours(0,0,0,0),r}incompatibleTokens=[`Y`,`R`,`Q`,`M`,`L`,`w`,`I`,`d`,`D`,`i`,`e`,`c`,`t`,`T`]};var F=class extends n{incompatibleTokens=[`Y`,`R`,`q`,`Q`,`L`,`w`,`I`,`D`,`i`,`e`,`c`,`t`,`T`];priority=110;parse(r,t,e){let s=i=>i-1;switch(t){case`M`:return p(u(c.month,r),s);case`MM`:return p(a(2,r),s);case`Mo`:return p(e.ordinalNumber(r,{unit:`month`}),s);case`MMM`:return e.month(r,{width:`abbreviated`,context:`formatting`})||e.month(r,{width:`narrow`,context:`formatting`});case`MMMMM`:return e.month(r,{width:`narrow`,context:`formatting`});default:return e.month(r,{width:`wide`,context:`formatting`})||e.month(r,{width:`abbreviated`,context:`formatting`})||e.month(r,{width:`narrow`,context:`formatting`})}}validate(r,t){return t>=0&&t<=11}set(r,t,e){return r.setMonth(e,1),r.setHours(0,0,0,0),r}};var B=class extends n{priority=110;parse(r,t,e){let s=i=>i-1;switch(t){case`L`:return p(u(c.month,r),s);case`LL`:return p(a(2,r),s);case`Lo`:return p(e.ordinalNumber(r,{unit:`month`}),s);case`LLL`:return e.month(r,{width:`abbreviated`,context:`standalone`})||e.month(r,{width:`narrow`,context:`standalone`});case`LLLLL`:return e.month(r,{width:`narrow`,context:`standalone`});default:return e.month(r,{width:`wide`,context:`standalone`})||e.month(r,{width:`abbreviated`,context:`standalone`})||e.month(r,{width:`narrow`,context:`standalone`})}}validate(r,t){return t>=0&&t<=11}set(r,t,e){return r.setMonth(e,1),r.setHours(0,0,0,0),r}incompatibleTokens=[`Y`,`R`,`q`,`Q`,`M`,`w`,`I`,`D`,`i`,`e`,`c`,`t`,`T`]};function Or(o,r,t){let e=v$1(o,t?.in),s=wi$1(e,t)-r;return e.setDate(e.getDate()-s*7),v$1(e,t?.in)}var G$1=class extends n{priority=100;parse(r,t,e){switch(t){case`w`:return u(c.week,r);case`wo`:return e.ordinalNumber(r,{unit:`week`});default:return a(t.length,r)}}validate(r,t){return t>=1&&t<=53}set(r,t,e,s){return xt$1(Or(r,e,s),s)}incompatibleTokens=[`y`,`R`,`u`,`q`,`Q`,`M`,`L`,`I`,`d`,`D`,`i`,`t`,`T`]};function qr(o,r,t){let e=v$1(o,t?.in),s=yi(e,t)-r;return e.setDate(e.getDate()-s*7),e}var X$1=class extends n{priority=100;parse(r,t,e){switch(t){case`I`:return u(c.week,r);case`Io`:return e.ordinalNumber(r,{unit:`week`});default:return a(t.length,r)}}validate(r,t){return t>=1&&t<=53}set(r,t,e){return Ft$1(qr(r,e))}incompatibleTokens=[`y`,`Y`,`u`,`q`,`Q`,`M`,`L`,`w`,`d`,`D`,`e`,`c`,`t`,`T`]};var Gr=[31,28,31,30,31,30,31,31,30,31,30,31];var Xr=[31,29,31,30,31,30,31,31,30,31,30,31];var z=class extends n{priority=90;subPriority=1;parse(r,t,e){switch(t){case`d`:return u(c.date,r);case`do`:return e.ordinalNumber(r,{unit:`date`});default:return a(t.length,r)}}validate(r,t){let s=q$1(r.getFullYear()),i=r.getMonth();return s?t>=1&&t<=Xr[i]:t>=1&&t<=Gr[i]}set(r,t,e){return r.setDate(e),r.setHours(0,0,0,0),r}incompatibleTokens=[`Y`,`R`,`q`,`Q`,`w`,`I`,`D`,`i`,`e`,`c`,`t`,`T`]};var A=class extends n{priority=90;subpriority=1;parse(r,t,e){switch(t){case`D`:case`DD`:return u(c.dayOfYear,r);case`Do`:return e.ordinalNumber(r,{unit:`date`});default:return a(t.length,r)}}validate(r,t){return q$1(r.getFullYear())?t>=1&&t<=366:t>=1&&t<=365}set(r,t,e){return r.setMonth(0,e),r.setHours(0,0,0,0),r}incompatibleTokens=[`Y`,`R`,`q`,`Q`,`M`,`L`,`w`,`I`,`d`,`E`,`i`,`e`,`c`,`t`,`T`]};var V=class extends n{priority=90;parse(r,t,e){switch(t){case`E`:case`EE`:case`EEE`:return e.day(r,{width:`abbreviated`,context:`formatting`})||e.day(r,{width:`short`,context:`formatting`})||e.day(r,{width:`narrow`,context:`formatting`});case`EEEEE`:return e.day(r,{width:`narrow`,context:`formatting`});case`EEEEEE`:return e.day(r,{width:`short`,context:`formatting`})||e.day(r,{width:`narrow`,context:`formatting`});default:return e.day(r,{width:`wide`,context:`formatting`})||e.day(r,{width:`abbreviated`,context:`formatting`})||e.day(r,{width:`short`,context:`formatting`})||e.day(r,{width:`narrow`,context:`formatting`})}}validate(r,t){return t>=0&&t<=6}set(r,t,e,s){return r=k(r,e,s),r.setHours(0,0,0,0),r}incompatibleTokens=[`D`,`i`,`e`,`c`,`t`,`T`]};var Z$1=class extends n{priority=90;parse(r,t,e,s){let i=l=>{let b=Math.floor((l-1)/7)*7;return(l+s.weekStartsOn+6)%7+b};switch(t){case`e`:case`ee`:return p(a(t.length,r),i);case`eo`:return p(e.ordinalNumber(r,{unit:`day`}),i);case`eee`:return e.day(r,{width:`abbreviated`,context:`formatting`})||e.day(r,{width:`short`,context:`formatting`})||e.day(r,{width:`narrow`,context:`formatting`});case`eeeee`:return e.day(r,{width:`narrow`,context:`formatting`});case`eeeeee`:return e.day(r,{width:`short`,context:`formatting`})||e.day(r,{width:`narrow`,context:`formatting`});default:return e.day(r,{width:`wide`,context:`formatting`})||e.day(r,{width:`abbreviated`,context:`formatting`})||e.day(r,{width:`short`,context:`formatting`})||e.day(r,{width:`narrow`,context:`formatting`})}}validate(r,t){return t>=0&&t<=6}set(r,t,e,s){return r=k(r,e,s),r.setHours(0,0,0,0),r}incompatibleTokens=[`y`,`R`,`u`,`q`,`Q`,`M`,`L`,`I`,`d`,`D`,`E`,`i`,`c`,`t`,`T`]};var K$1=class extends n{priority=90;parse(r,t,e,s){let i=l=>{let b=Math.floor((l-1)/7)*7;return(l+s.weekStartsOn+6)%7+b};switch(t){case`c`:case`cc`:return p(a(t.length,r),i);case`co`:return p(e.ordinalNumber(r,{unit:`day`}),i);case`ccc`:return e.day(r,{width:`abbreviated`,context:`standalone`})||e.day(r,{width:`short`,context:`standalone`})||e.day(r,{width:`narrow`,context:`standalone`});case`ccccc`:return e.day(r,{width:`narrow`,context:`standalone`});case`cccccc`:return e.day(r,{width:`short`,context:`standalone`})||e.day(r,{width:`narrow`,context:`standalone`});default:return e.day(r,{width:`wide`,context:`standalone`})||e.day(r,{width:`abbreviated`,context:`standalone`})||e.day(r,{width:`short`,context:`standalone`})||e.day(r,{width:`narrow`,context:`standalone`})}}validate(r,t){return t>=0&&t<=6}set(r,t,e,s){return r=k(r,e,s),r.setHours(0,0,0,0),r}incompatibleTokens=[`y`,`R`,`u`,`q`,`Q`,`M`,`L`,`I`,`d`,`D`,`E`,`i`,`e`,`t`,`T`]};function Lr(o,r){let t=v$1(o,r?.in).getDay();return t===0?7:t}function vr$1(o,r,t){let e=v$1(o,t?.in);return ot$1(e,r-Lr(e,t),t)}var $$1=class extends n{priority=90;parse(r,t,e){let s=i=>i===0?7:i;switch(t){case`i`:case`ii`:return a(t.length,r);case`io`:return e.ordinalNumber(r,{unit:`day`});case`iii`:return p(e.day(r,{width:`abbreviated`,context:`formatting`})||e.day(r,{width:`short`,context:`formatting`})||e.day(r,{width:`narrow`,context:`formatting`}),s);case`iiiii`:return p(e.day(r,{width:`narrow`,context:`formatting`}),s);case`iiiiii`:return p(e.day(r,{width:`short`,context:`formatting`})||e.day(r,{width:`narrow`,context:`formatting`}),s);default:return p(e.day(r,{width:`wide`,context:`formatting`})||e.day(r,{width:`abbreviated`,context:`formatting`})||e.day(r,{width:`short`,context:`formatting`})||e.day(r,{width:`narrow`,context:`formatting`}),s)}}validate(r,t){return t>=1&&t<=7}set(r,t,e){return r=vr$1(r,e),r.setHours(0,0,0,0),r}incompatibleTokens=[`y`,`Y`,`u`,`q`,`Q`,`M`,`L`,`w`,`d`,`D`,`E`,`e`,`c`,`t`,`T`]};var j$1=class extends n{priority=80;parse(r,t,e){switch(t){case`a`:case`aa`:case`aaa`:return e.dayPeriod(r,{width:`abbreviated`,context:`formatting`})||e.dayPeriod(r,{width:`narrow`,context:`formatting`});case`aaaaa`:return e.dayPeriod(r,{width:`narrow`,context:`formatting`});default:return e.dayPeriod(r,{width:`wide`,context:`formatting`})||e.dayPeriod(r,{width:`abbreviated`,context:`formatting`})||e.dayPeriod(r,{width:`narrow`,context:`formatting`})}}set(r,t,e){return r.setHours(T(e),0,0,0),r}incompatibleTokens=[`b`,`B`,`H`,`k`,`t`,`T`]};var U=class extends n{priority=80;parse(r,t,e){switch(t){case`b`:case`bb`:case`bbb`:return e.dayPeriod(r,{width:`abbreviated`,context:`formatting`})||e.dayPeriod(r,{width:`narrow`,context:`formatting`});case`bbbbb`:return e.dayPeriod(r,{width:`narrow`,context:`formatting`});default:return e.dayPeriod(r,{width:`wide`,context:`formatting`})||e.dayPeriod(r,{width:`abbreviated`,context:`formatting`})||e.dayPeriod(r,{width:`narrow`,context:`formatting`})}}set(r,t,e){return r.setHours(T(e),0,0,0),r}incompatibleTokens=[`a`,`B`,`H`,`k`,`t`,`T`]};var J$1=class extends n{priority=80;parse(r,t,e){switch(t){case`B`:case`BB`:case`BBB`:return e.dayPeriod(r,{width:`abbreviated`,context:`formatting`})||e.dayPeriod(r,{width:`narrow`,context:`formatting`});case`BBBBB`:return e.dayPeriod(r,{width:`narrow`,context:`formatting`});default:return e.dayPeriod(r,{width:`wide`,context:`formatting`})||e.dayPeriod(r,{width:`abbreviated`,context:`formatting`})||e.dayPeriod(r,{width:`narrow`,context:`formatting`})}}set(r,t,e){return r.setHours(T(e),0,0,0),r}incompatibleTokens=[`a`,`b`,`t`,`T`]};var S$2=class extends n{priority=70;parse(r,t,e){switch(t){case`h`:return u(c.hour12h,r);case`ho`:return e.ordinalNumber(r,{unit:`hour`});default:return a(t.length,r)}}validate(r,t){return t>=1&&t<=12}set(r,t,e){let s=r.getHours()>=12;return s&&e<12?r.setHours(e+12,0,0,0):!s&&e===12?r.setHours(0,0,0,0):r.setHours(e,0,0,0),r}incompatibleTokens=[`H`,`K`,`k`,`t`,`T`]};var rr$1=class extends n{priority=70;parse(r,t,e){switch(t){case`H`:return u(c.hour23h,r);case`Ho`:return e.ordinalNumber(r,{unit:`hour`});default:return a(t.length,r)}}validate(r,t){return t>=0&&t<=23}set(r,t,e){return r.setHours(e,0,0,0),r}incompatibleTokens=[`a`,`b`,`h`,`K`,`k`,`t`,`T`]};var er$1=class extends n{priority=70;parse(r,t,e){switch(t){case`K`:return u(c.hour11h,r);case`Ko`:return e.ordinalNumber(r,{unit:`hour`});default:return a(t.length,r)}}validate(r,t){return t>=0&&t<=11}set(r,t,e){return r.getHours()>=12&&e<12?r.setHours(e+12,0,0,0):r.setHours(e,0,0,0),r}incompatibleTokens=[`h`,`H`,`k`,`t`,`T`]};var tr$1=class extends n{priority=70;parse(r,t,e){switch(t){case`k`:return u(c.hour24h,r);case`ko`:return e.ordinalNumber(r,{unit:`hour`});default:return a(t.length,r)}}validate(r,t){return t>=1&&t<=24}set(r,t,e){let s=e<=24?e%24:e;return r.setHours(s,0,0,0),r}incompatibleTokens=[`a`,`b`,`h`,`H`,`K`,`t`,`T`]};var or$1=class extends n{priority=60;parse(r,t,e){switch(t){case`m`:return u(c.minute,r);case`mo`:return e.ordinalNumber(r,{unit:`minute`});default:return a(t.length,r)}}validate(r,t){return t>=0&&t<=59}set(r,t,e){return r.setMinutes(e,0,0),r}incompatibleTokens=[`t`,`T`]};var sr$1=class extends n{priority=50;parse(r,t,e){switch(t){case`s`:return u(c.second,r);case`so`:return e.ordinalNumber(r,{unit:`second`});default:return a(t.length,r)}}validate(r,t){return t>=0&&t<=59}set(r,t,e){return r.setSeconds(e,0),r}incompatibleTokens=[`t`,`T`]};var nr$1=class extends n{priority=30;parse(r,t){let e=s=>Math.trunc(s*Math.pow(10,-t.length+3));return p(a(t.length,r),e)}set(r,t,e){return r.setMilliseconds(e),r}incompatibleTokens=[`t`,`T`]};var ir$1=class extends n{priority=10;parse(r,t){switch(t){case`X`:return h(x.basicOptionalMinutes,r);case`XX`:return h(x.basic,r);case`XXXX`:return h(x.basicOptionalSeconds,r);case`XXXXX`:return h(x.extendedOptionalSeconds,r);default:return h(x.extended,r)}}set(r,t,e){return t.timestampIsSet?r:A$1(r,r.getTime()-_r$1(r)-e)}incompatibleTokens=[`t`,`T`,`x`]};var ar$1=class extends n{priority=10;parse(r,t){switch(t){case`x`:return h(x.basicOptionalMinutes,r);case`xx`:return h(x.basic,r);case`xxxx`:return h(x.basicOptionalSeconds,r);case`xxxxx`:return h(x.extendedOptionalSeconds,r);default:return h(x.extended,r)}}set(r,t,e){return t.timestampIsSet?r:A$1(r,r.getTime()-_r$1(r)-e)}incompatibleTokens=[`t`,`T`,`X`]};var ur$1=class extends n{priority=40;parse(r){return H(r)}set(r,t,e){return[A$1(r,e*1e3),{timestampIsSet:!0}]}incompatibleTokens=`*`};var cr$1=class extends n{priority=20;parse(r){return H(r)}set(r,t,e){return[A$1(r,e),{timestampIsSet:!0}]}incompatibleTokens=`*`};var Qr={G:new I,y:new L,Y:new v,R:new Q$1,u:new R,Q:new W$1,q:new C,M:new F,L:new B,w:new G$1,I:new X$1,d:new z,D:new A,E:new V,e:new Z$1,c:new K$1,i:new $$1,a:new j$1,b:new U,B:new J$1,h:new S$2,H:new rr$1,K:new er$1,k:new tr$1,m:new or$1,s:new sr$1,S:new nr$1,X:new ir$1,x:new ar$1,t:new ur$1,T:new cr$1};var zr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;var Ar=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;var Vr=/^'([^]*?)'?$/;var Zr=/''/g;var Kr=/\S/;var $r=/[a-zA-Z]/;function Ps(o,r,t,e){let s=()=>A$1(e?.in||t,NaN),i=af(),l=e?.locale??i.locale??Ne,b=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,Rr=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??i.weekStartsOn??i.locale?.options?.weekStartsOn??0;if(!r)return o?s():v$1(t,e?.in);let mr={firstWeekContainsDate:b,weekStartsOn:Rr,locale:l},pr=[new E(e?.in,t)],Wr=r.match(Ar).map(m=>{let f=m[0];if(f in Oi){let y=Oi[f];return y(m,l.formatLong)}return m}).join(``).match(zr),fr=[];for(let m of Wr){!e?.useAdditionalWeekYearTokens&&Di(m)&&Ti(m,r,o),!e?.useAdditionalDayOfYearTokens&&Mi(m)&&Ti(m,r,o);let f=m[0],y=Qr[f];if(y){let{incompatibleTokens:hr}=y;if(Array.isArray(hr)){let yr=fr.find(br=>hr.includes(br.token)||br.token===f);if(yr)throw new RangeError(`The format string mustn't contain \`${yr.fullToken}\` and \`${m}\` at the same time`)}else if(y.incompatibleTokens===`*`&&fr.length>0)throw new RangeError(`The format string mustn't contain \`${m}\` and any other token at the same time`);fr.push({token:f,fullToken:m});let lr=y.run(o,m,l.match,mr);if(!lr)return s();pr.push(lr.setter),o=lr.rest}else{if(f.match($r))throw new RangeError("Format string contains an unescaped latin alphabet character `"+f+"`");if(m===`''`?m=`'`:f===`'`&&(m=jr(m)),o.indexOf(m)===0)o=o.slice(m.length);else return s()}}if(o.length>0&&Kr.test(o))return s();let Cr=pr.map(m=>m.priority).sort((m,f)=>f-m).filter((m,f,y)=>y.indexOf(m)===f).map(m=>pr.filter(f=>f.priority===m).sort((f,y)=>y.subPriority-f.subPriority)).map(m=>m[0]),D=v$1(t,e?.in);if(isNaN(+D))return s();let xr={};for(let m of Cr){if(!m.validate(D,mr))return s();let f=m.set(D,xr,mr);Array.isArray(f)?(D=f[0],Object.assign(xr,f[1])):D=f}return D}function jr(o){return o.match(Vr)[1].replace(Zr,`'`)}var xt=[`time_input`];var Ct=[`*`];var bt=(n,d)=>d.id;function Mt(n,d){n&1&&(va$1(0,`div`,9),OS(1),sM(2,`translate`),Pd()),n&2&&(fb(),$d(` `,cM(2,1,`FORM.TIME_ENTRY_ERROR`),` `))}function vt(n,d){if(n&1){let e=Z_();va$1(0,`div`,5)(1,`input`,6,1),sM(3,`translate`),ov(`change`,function(){dh(e);let i=cS(2);return fh(eS().setTypedTime(i.value))}),Pd(),va$1(4,`button`,7),sM(5,`translate`),va$1(6,`icon`,8),OS(7,`arrow_drop_down`),Pd()()(),P_(8,Mt,3,3,`div`,9)}if(n&2){let e=eS(),t=cS(3);mv(`opacity-30`,e.disabled()||e.no_options()),fb(),Ky(`value`,e.time())(`disabled`,e.disabled()||e.no_options()),Qy(`aria-label`,cM(3,10,`COMMON.TIME`))(`aria-invalid`,!!e.time_entry_error()),fb(3),Ky(`disabled`,e.disabled()||e.no_options())(`matMenuTriggerFor`,t),Qy(`aria-label`,cM(5,12,`FORM.TIME_CHOOSE`)),fb(4),j_(e.time_entry_error()?8:-1)}}function yt(n,d){if(n&1&&(va$1(0,`div`,13),OS(1),sM(2,`date`),Pd()),n&2){let e=eS(2);fb(),$d(` `,lM(2,1,e.active_time(),e.time_format()+` (z)`,e.tz()),` `)}}function wt(n,d){if(n&1&&(va$1(0,`button`,10)(1,`div`,11)(2,`div`,12),OS(3),sM(4,`date`),Pd(),P_(5,yt,3,5,`div`,13),Pd(),va$1(6,`icon`,8),OS(7,`arrow_drop_down`),Pd()()),n&2){let e=eS(),t=cS(3);mv(`opacity-30`,e.disabled()||e.no_options()),Ky(`disabled`,e.disabled()||e.no_options())(`matMenuTriggerFor`,t),fb(3),$d(` `,uM(4,6,e.active_time(),e.time_format()),` `),fb(2),j_(e.timezone()&&e.tz()?5:-1)}}function Tt(n,d){if(n&1&&(va$1(0,`div`,20),OS(1),sM(2,`date`),Pd()),n&2){let e=eS().$implicit,t=eS(2);fb(),$d(` `,lM(2,1,e.date,t.time_format()+` (z)`,t.tz()),` `)}}function Ft(n,d){n&1&&(va$1(0,`icon`,21),sM(1,`translate`),OS(2,` done `),Pd()),n&2&&Ky(`label`,cM(1,1,`COMMON.SELECTED`))}function St(n,d){if(n&1){let e=Z_();va$1(0,`button`,16),ov(`click`,function(){let i=dh(e).$implicit;return fh(eS(2).setValue(i.id))}),va$1(1,`div`,17)(2,`div`,18)(3,`div`,19),OS(4),sM(5,`date`),Pd(),P_(6,Tt,3,5,`div`,20),Pd(),P_(7,Ft,3,3,`icon`,21),Pd()()}if(n&2){let e=d.$implicit,t=eS(2);Ky(`value`,e.id),Qy(`data-time`,e.id),fb(4),_v(` `,uM(5,6,e.date,t.time_format()),` `,t.extra_info_fn()(e.date),` `),fb(2),j_(t.timezone()&&t.tz()?6:-1),fb(),j_(t.active_time()===e.date?7:-1)}}function Ot(n,d){n&1&&(va$1(0,`div`,15),OS(1),sM(2,`translate`),Pd()),n&2&&(fb(),$d(` `,cM(2,1,`FORM.TIME_EMPTY`),` `))}function kt(n,d){if(n&1&&H_(0,St,8,9,`button`,14,bt,!1,Ot,3,3,`div`,15),n&2)U_(eS().time_options())}function Dt(n,d){n&1&&(va$1(0,`mat-error`),rS(1),Pd())}var Et=1501;function _t(n){if(n==null||n===``)return null;let d=Number(n);return Number.isFinite(d)?d:null}var ct=(()=>{class n extends Pi{constructor(){super(...arguments),this.step=EU(15),this.disabled=IU(void 0),this.no_past_times=EU(!0),this.use_24hr=EU(!1),this.no_error=EU(void 0),this.extra_info_fn=EU(e=>``),this.from=EU(K$2(Date.now()).valueOf()),this.range=EU(void 0),this._range=Le(()=>{let e=this.range();if(!e)return;let t=_t(e.start),i=_t(e.end);if(!(t===null||i===null||i<=t))return{start:t,end:i}}),this.min_duration=EU(0),this.timezone=EU(``),this.allow_time_entry=EU(!1),this.time_entry_error=wt$1(!1),this.date=wt$1(new Date().valueOf()),this.time=wt$1(zt$2(new Date,`HH:mm`)),this._time_options=wt$1([]),this.show_select=wt$1(!1),this.active_time=wt$1(Date.now()),this.no_options=wt$1(!1),this._menu_trigger=wU(Lt$1),this._time_input=wU(`time_input`),this.time_format=Le(()=>this.use_24hr()?`HH : mm`:`h : mm a`),this._local_tz=w_(Intl.DateTimeFormat().resolvedOptions().timeZone),this.tz=Le(()=>{let e=this.timezone();if(!e)return``;let t=w_(e);return t===this._local_tz?``:t}),this.time_options=Le(()=>{let e=this.timezone()||void 0,t=(this.time()||`00:00`).split(`:`),i=$_(this.date(),+t[0],+t[1],e),{minutes:o}=ed(i,e),l=k_(i,e),_=[...this._time_options()];return o%this.step()!==0&&this._isWithinRange(i)&&!_.find(p=>p.id===l)&&(_.push({date:i,id:l}),_.sort((p,f)=>`${p.id}`.localeCompare(`${f.id}`))),_})}ngOnInit(){this.show_select.set(!0),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions(),this.timeout(`hide`,()=>this.show_select.set(!1));let e=this.timezone()||void 0;this.active_time.set(this._time_options().find(t=>t.id===k_(this.date(),e))?.date||this.active_time())}ngOnChanges(e){(e.no_past_times||e.step||e.from||e.range||e.min_duration)&&(this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions())}ngAfterViewInit(){let e=this._menu_trigger();e&&this.subscription(`menu_opened`,e.menuOpened.subscribe(()=>{this._scrollToSelectedTime()}))}_scrollToSelectedTime(){requestAnimationFrame(()=>{if(!this._menu_trigger()?.menu)return;let t=document.querySelector(`.mat-mdc-menu-panel`);if(!t)return;let i=this.timezone()||void 0,o=this.time()||k_(new Date,i),l=t.querySelector(`[data-time="${o}"]`);if(!l&&this._time_options().length){let _=this._timeToMinutes(o),p=this._time_options()[0],f=Infinity;for(let k of this._time_options()){let D=this._timeToMinutes(k.id),B=Math.abs(D-_);B<f&&(f=B,p=k)}l=t.querySelector(`[data-time="${p.id}"]`)}if(l){if(typeof l.scrollIntoView!=`function`)return;l.scrollIntoView({block:`center`,behavior:`instant`})}})}_timeToMinutes(e){let[t,i]=e.split(`:`).map(Number);return t*60+i}setTypedTime(e){let t=/^([01]\d|2[0-3]):([0-5]\d)$/.exec(e),i=this.timezone()||void 0,o=t?$_(this.date(),+t[1],+t[2],i):NaN,l=this.no_past_times()&&o<Wt$1(Date.now()).valueOf();if(!t||l||!this._isWithinRange(o)){this.time_entry_error.set(!0);return}this.setValue(e)}setValue(e){this.time_entry_error.set(!1),this.time.set(e);let t=this._time_input()?.nativeElement;t&&(t.value=e);let i=this.timezone()||void 0;if(this._onChange){let p=(this.time()||`00:00`).split(`:`),f=$_(this.date(),+p[0],+p[1],i);N_(),this._onChange(f)}let o=this.time()||`00:00`,l=o.split(`:`),_=$_(this.date(),+l[0],+l[1],i);this.active_time.set(this._time_options().find(p=>p.id===o)?.date||_)}writeValue(e){this.date.set(e||this.date());let t=this.timezone()||void 0,i=Wt$1(this.date());this.time.set(k_(i,t)),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions(),this.active_time.set(this._time_options().find(o=>o.id===this.time())?.date||i.valueOf())}setDisabledState(e){this.disabled.set(e),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times()||e,this.step())),this._updateNoOptions()}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouch=e}_updateNoOptions(){this.no_options.set(!this.disabled()&&(!this._time_options()||this._time_options().length===0))}generateAvailableTimes(e,t,i=15){let o=t?this.from():Math.max(this.from(),Date.now()),l=[],_=this._range(),p=this.timezone()||void 0,f=p?se(e,p):K$2(e).valueOf(),k=p?ie(e,p):Ee$2(e).valueOf(),D=this.min_duration()||0,B=_?_.start*60:void 0,J=_?_.end*60:void 0,me=J!=null&&D>0?J-D:J,_e=Math.max(f,o,B!=null?f+B*60*1e3:f),ce=Math.min(k,me!=null?f+me*60*1e3:k);if(_e>ce)return l;let ee=i*60*1e3,pt=Math.ceil((_e-f)/ee),ut=Math.floor((ce-f)/ee);for(let te=pt;te<=ut&&l.length<Et;te++){let pe=f+te*ee;l.push({date:pe,id:k_(pe,p)})}return l}_isWithinRange(e){if(xe(e,this.from()))return!1;let t=this._range();if(!t)return!0;let i=t.start*60,o=t.end*60,l=this.min_duration()||0,_=l>0?o-l:o,{hours:f,minutes:k}=ed(e,this.timezone()||void 0),D=f*60+k;return!(D<i||D>_)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Yg(n)))(i||n)}})()}static{this.ɵcmp=BT({type:n,selectors:[[`a-time-field`],[`time-field`]],viewQuery:function(t,i){t&1&&lv(i._menu_trigger,Lt$1,5)(i._time_input,xt,5),t&2&&aS(2)},inputs:{step:[1,`step`],disabled:[1,`disabled`],no_past_times:[1,`no_past_times`],use_24hr:[1,`use_24hr`],no_error:[1,`no_error`],extra_info_fn:[1,`extra_info_fn`],from:[1,`from`],range:[1,`range`],min_duration:[1,`min_duration`],timezone:[1,`timezone`],allow_time_entry:[1,`allow_time_entry`]},outputs:{disabled:`disabledChange`},features:[qS([H_$1(()=>n)]),Py,Ea$1],ngContentSelectors:Ct,decls:6,vars:2,consts:[[`menu`,`matMenu`],[`time_input`,``],[`type`,`button`,`time-field`,``,`matRipple`,``,1,`border-neutral`,`flex`,`h-12`,`w-full`,`items-center`,`justify-between`,`rounded-sm`,`border`,`px-2`,3,`disabled`,`opacity-30`,`matMenuTriggerFor`],[1,`max-h-60`,`min-w-[18rem]`],[`matMenuContent`,``],[1,`border-neutral`,`flex`,`h-12`,`w-full`,`items-center`,`rounded-sm`,`border`],[`type`,`time`,1,`h-full`,`min-w-0`,`flex-1`,`border-0`,`bg-transparent`,`px-4`,3,`change`,`value`,`disabled`],[`type`,`button`,`time-options`,``,1,`flex`,`h-full`,`w-12`,`shrink-0`,`items-center`,`justify-center`,3,`disabled`,`matMenuTriggerFor`],[1,`text-2xl`],[`role`,`alert`,1,`text-error`,`text-sm`],[`type`,`button`,`time-field`,``,`matRipple`,``,1,`border-neutral`,`flex`,`h-12`,`w-full`,`items-center`,`justify-between`,`rounded-sm`,`border`,`px-2`,3,`disabled`,`matMenuTriggerFor`],[1,`flex`,`w-1/2`,`flex-1`,`flex-col`,`px-2`,`text-left`,`leading-tight`],[1,`truncate`],[1,`truncate`,`text-xs`,`opacity-30`],[`type`,`button`,`mat-menu-item`,``,1,`text-left`,3,`value`],[`mat-menu-item`,``,`disabled`,``],[`type`,`button`,`mat-menu-item`,``,1,`text-left`,3,`click`,`value`],[1,`flex`,`items-center`,`justify-between`],[1,`flex`,`flex-col`,`leading-tight`],[1,``],[1,`text-xs`,`opacity-30`],[1,`ml-2`,`text-2xl`,3,`label`]],template:function(t,i){t&1&&(nS(),P_(0,vt,9,14)(1,wt,8,9,`button`,2),va$1(2,`mat-menu`,3,0),By(4,kt,3,1,`ng-template`,4),Pd(),P_(5,Dt,2,0,`mat-error`)),t&2&&(j_(i.allow_time_entry()?0:1),fb(5),j_(i.no_error()?-1:5))},dependencies:[PD,Ht$3,P$1,ee$1,Bt$3,Lt$1,Kt$2,ht,z$2,VN,f],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%}
/*# sourceMappingURL=time-field.component.css.map */`]})}}return n})();function Nt(n,d){n&1&&(va$1(0,`button`,2),sM(1,`translate`),va$1(2,`icon`),OS(3,`close`),Pd()()),n&2&&Qy(`aria-label`,cM(1,1,`COMMON.CLOSE`))}function It(n,d){if(n&1){let e=Z_();va$1(0,`div`,7)(1,`div`,11),OS(2),sM(3,`date`),Pd(),va$1(4,`mat-checkbox`,12),ov(`ngModelChange`,function(i){let o=dh(e).$implicit,l=eS(2);return l.setWeekdayEnabled(o.getDay(),i),fh(i&&l.initialiseDay(o.getDay()))}),Pd(),Qb(),Pd()}if(n&2){let e=d.$implicit,t=eS(2);fb(2),$d(` `,uM(3,2,e,`EEE`),` `),fb(2),Ky(`ngModel`,t.weekdays_enabled()[e.getDay()]),Xb()}}function zt$1(n,d){if(n&1&&(va$1(0,`mat-option`,20),OS(1),Pd()),n&2){let e=d.$implicit;Ky(`value`,e.id),fb(),$d(` `,e.name,` `)}}function Wt(n,d){if(n&1){let e=Z_();va$1(0,`button`,23),sM(1,`translate`),ov(`click`,function(){dh(e);let i=eS().$index,o=eS(2).$implicit,l=eS(3);return fh(l.addBlock(l.settings()[o.getDay()],i))}),va$1(2,`icon`),OS(3,`add`),Pd()()}n&2&&Qy(`aria-label`,cM(1,1,`COMMON.WORK_BLOCK_ADD`))}function Bt$1(n,d){if(n&1){let e=Z_();va$1(0,`button`,24),sM(1,`translate`),ov(`click`,function(){dh(e);let i=eS().$index,o=eS(2).$implicit,l=eS(3);return fh(l.removeBlock(l.settings()[o.getDay()],i))}),va$1(2,`icon`),OS(3,`delete`),Pd()()}n&2&&Qy(`aria-label`,cM(1,1,`COMMON.WORK_BLOCK_REMOVE`))}function Vt(n,d){if(n&1){let e=Z_();va$1(0,`div`,16)(1,`a-time-field`,18),ov(`ngModelChange`,function(i){let o=dh(e).$implicit,l=eS(2).$implicit;return fh(eS(3).setStartTime(o,l.getDay(),i))}),Pd(),Qb(),va$1(2,`a-time-field`,18),ov(`ngModelChange`,function(i){let o=dh(e).$implicit,l=eS(2).$implicit;return fh(eS(3).setEndTime(o,l.getDay(),i))}),Pd(),Qb(),va$1(3,`mat-form-field`,19)(4,`mat-select`,12),Av(`ngModelChange`,function(i){let o=dh(e).$implicit;return BS(o.location,i)||(o.location=i),fh(i)}),H_(5,zt$1,2,2,`mat-option`,20,V_),Pd(),Qb(),Pd(),P_(7,Wt,4,3,`button`,21),P_(8,Bt$1,4,3,`button`,22),Pd()}if(n&2){let e=d.$implicit,t=d.$index,i=eS(2).$implicit,o=eS(3);fb(),Ky(`ngModel`,o.timeFrom(e.start_time))(`from`,o.timeFrom((t>0?o.settings()[i.getDay()].blocks[t-1]?.end_time:0)||0))(`no_error`,!0),Xb(),fb(),Ky(`ngModel`,o.timeFrom(e.end_time))(`from`,o.timeFrom(e.start_time+.25))(`no_error`,!0),Xb(),fb(2),xv(`ngModel`,e.location),Xb(),fb(),U_(o.options()),fb(2),j_(t===0?7:-1),fb(),j_(t!==0?8:-1)}}function Rt(n,d){if(n&1&&(va$1(0,`div`,14)(1,`div`,15),H_(2,Vt,9,9,`div`,16,V_),Pd(),va$1(4,`h3`,17),OS(5),sM(6,`date`),Pd()()),n&2){let e=eS().$implicit,t=eS(3);fb(2),U_(t.settings()[e.getDay()].blocks),fb(3),$d(` `,uM(6,1,e,`EEEE`),` `)}}function Ht(n,d){if(n&1&&P_(0,Rt,7,4,`div`,14),n&2){let e=d.$implicit;j_(eS(3).weekdays_enabled()[e.getDay()]?0:-1)}}function $t(n,d){if(n&1&&(va$1(0,`div`,9),H_(1,Ht,1,1,null,null,V_),va$1(3,`h3`,13),OS(4),sM(5,`translate`),Pd()()),n&2){let e=eS(2);fb(),U_(e.days),fb(3),$d(` `,cM(5,1,`COMMON.WORK_HOURS`),` `)}}function At(n,d){n&1&&(va$1(0,`div`,10),Xy(1,`img`,25),va$1(2,`p`,26),OS(3),sM(4,`translate`),Pd()()),n&2&&(fb(3),$d(` `,cM(4,1,`COMMON.WORK_SETTINGS_EMPTY`),` `))}function jt(n,d){if(n&1&&(va$1(0,`main`,3)(1,`div`,6),H_(2,It,5,5,`div`,7,V_),va$1(4,`h3`,8),OS(5),sM(6,`translate`),Pd()(),P_(7,$t,6,3,`div`,9)(8,At,5,3,`div`,10),Pd()),n&2){let e=eS();fb(2),U_(e.days),fb(3),$d(` `,cM(6,2,`COMMON.WORK_DAYS`),` `),fb(2),j_(e.has_working_days()?7:8)}}function Pt(n,d){n&1&&(va$1(0,`div`,4),Xy(1,`mat-spinner`,27),va$1(2,`p`,26),OS(3),sM(4,`translate`),Pd()()),n&2&&(fb(),Ky(`diameter`,32),fb(2),$d(` `,cM(4,2,`COMMON.WORK_SETTINGS_SAVE`),` `))}function Kt(n,d){if(n&1){let e=Z_();va$1(0,`footer`,5)(1,`button`,28),ov(`click`,function(){dh(e);return fh(eS().saveChanges())}),OS(2),sM(3,`translate`),Pd()()}n&2&&(fb(2),$d(` `,cM(3,1,`COMMON.SAVE`),` `))}var wi=(()=>{class n{constructor(){this._data=y($e$1),this._dialog_ref=y(T$1),this.options=wt$1([]),this.option=wt$1(``),this.settings=wt$1([]),this.weekdays_enabled=wt$1({}),this.loading=wt$1(!1),this.days=new Array(7).fill(0).map((e,t)=>ot$1(xt$1(ot$1(Date.now(),30)),t)),this.has_working_days=Le(()=>{let e=this.weekdays_enabled();return Object.keys(e).some(t=>e[t])}),this.now=Le(()=>Wt$1(Date.now()).getTime())}ngOnInit(){let e=It$1(),t=this._data?.local?this._data.preferences:e.work_preferences,i=[],o={};for(let _ of t||[]){if(!_)continue;let p=(_.blocks||[]).map(f=>l({},f));i[_.day_of_week]=m(l({},_),{blocks:p}),p.length&&(o[_.day_of_week]=!0)}this.settings.set(i),this.weekdays_enabled.set(o);let l$3=[{id:`wfo`,name:et(`COMMON.WORK_OFFICE`),icon:`business`},{id:`wfh`,name:et(`COMMON.WORK_HOME`),icon:`home`},{id:`aol`,name:et(`COMMON.WORK_LEAVE`),icon:`event_busy`}];this.options.set(l$3),this.option.set(l$3[0].id)}timeFrom(e){return Wt$1(it(ot$1(new Date,1),{hours:Math.floor(e),minutes:e*60%60})).getTime()}fromTime(e){let t=new Date(e);return t.getHours()+t.getMinutes()/60}initialiseDay(e){let t=this.settings();t[e]||(t[e]={day_of_week:e,blocks:[]}),t[e].blocks||(t[e].blocks=[]),t[e].blocks.length===0&&this.addBlock(t[e],0),this.settings.set([...t])}addBlock(e,t){e.blocks.splice(t+1,0,{start_time:9,end_time:17,location:`wfo`}),this.cleanupBlocks(e),this.settings.update(i=>[...i])}removeBlock(e,t){e.blocks.length<=1||(e.blocks.splice(t,1),this.settings.update(i=>[...i]))}setEndTime(e,t,i){setTimeout(()=>{e.end_time=this.fromTime(i),this.cleanupBlocks(this.settings()[t]),this.settings.update(o=>[...o])},50)}setStartTime(e,t,i){setTimeout(()=>{e.start_time=this.fromTime(i),this.cleanupBlocks(this.settings()[t]),this.settings.update(o=>[...o])},50)}cleanupBlocks(e){if(e?.blocks?.length)for(let t=0;t<e.blocks.length;t++){let i=e.blocks[t];t>0&&i.start_time<e.blocks[t-1].end_time&&(i.start_time=e.blocks[t-1].end_time),i.end_time<=i.start_time&&(i.end_time=i.start_time+1)}}async saveChanges(e=!0){this.loading.set(!0),this._dialog_ref.disableClose=!0;let t=new Array(7).fill(0).map((i,o)=>({day_of_week:o,blocks:[]}));for(let i of this.days){let o=i.getDay();this.weekdays_enabled()[o]&&(t[o]={day_of_week:o,blocks:this.settings()[o].blocks})}if(this._data?.local)this.loading.set(!1),this._dialog_ref.disableClose=!1;else try{let i=await Gn$1(`current`);await fo$1(i.id,m(l({},i),{groups:i.groups.filter(o=>!o.startsWith(`placeos_`)),work_preferences:t}))}catch(i){throw p_(`Unable to save user work preferences.`),i}finally{this.loading.set(!1),this._dialog_ref.disableClose=!1}e&&(this._data?.local||ka(),this._dialog_ref.close(t))}setWeekdayEnabled(e,t){this.weekdays_enabled.update(i=>m(l({},i),{[e]:t}))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=BT({type:n,selectors:[[`wfh-settings-modal`]],decls:8,vars:6,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``,1,`bg-base-200`],[1,`relative`,`flex`,`max-h-[calc(100vh-9rem)]`,`w-160`,`max-w-full`,`flex-col`,`space-y-2`,`overflow-x-hidden`,`overflow-y-auto`,`rounded-sm`,`px-2`,`py-4`,`sm:max-h-[65vh]`,`sm:p-4`],[`loading`,``,1,`bg-base-100`,`relative`,`flex`,`h-72`,`w-[24rem]`,`flex-col`,`items-center`,`justify-center`,`space-y-2`,`overflow-hidden`,`rounded-sm`,`text-center`],[1,`border-base-200`,`flex`,`justify-end`,`border-t`,`px-4`,`py-2`],[1,`border-base-300`,`relative`,`mb-4`,`flex`,`w-full`,`items-center`,`justify-between`,`space-x-2`,`rounded-sm`,`border`,`p-2`],[1,`flex`,`flex-1`,`flex-col`,`items-center`,`pt-2`],[1,`bg-base-100`,`absolute`,`top-0`,`left-2`,`-translate-y-1/2`,`px-2`],[1,`border-base-300`,`relative`,`flex`,`w-full`,`flex-col`,`items-center`,`justify-between`,`space-y-4`,`rounded-sm`,`border`,`px-2`,`pt-6`,`pb-4`,`sm:px-4`],[1,`flex`,`flex-col`,`items-center`,`justify-center`,`space-y-4`,`px-8`,`py-16`],[1,`text-xs`,`font-bold`,`uppercase`],[3,`ngModelChange`,`ngModel`],[1,`bg-base-100`,`absolute`,`top-0`,`left-2`,`m-0!`,`-translate-y-1/2`,`px-2`],[1,`border-base-200`,`relative`,`flex`,`w-full`,`items-center`,`justify-between`,`space-x-2`,`rounded-sm`,`border`,`p-2`],[1,`w-1/2`,`flex-1`,`space-y-2`,`pt-2`],[1,`flex`,`items-center`,`space-x-2`],[1,`border-base-200`,`bg-base-100`,`bg-opacity-50`,`absolute`,`top-0`,`left-2`,`-translate-y-1/2`,`rounded-sm`,`border`,`px-2`,`text-sm`,`font-medium`],[1,`w-1/4`,`flex-1`,3,`ngModelChange`,`ngModel`,`from`,`no_error`],[`appearance`,`outline`,1,`no-subscript`,`w-1/4`,`flex-1`],[3,`value`],[`icon`,``,`matRipple`,``,1,`border-base-400`,`h-12`,`w-12`,`rounded-sm`,`border`],[`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`],[`icon`,``,`matRipple`,``,1,`border-base-400`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`],[`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`],[`src`,`assets/icons/no-results.svg`,1,`m-auto`],[1,`opacity-30`],[3,`diameter`],[`btn`,``,`matRipple`,``,1,`w-48`,3,`click`]],template:function(t,i){t&1&&(va$1(0,`header`,0)(1,`h2`,1),OS(2),sM(3,`translate`),Pd(),P_(4,Nt,4,3,`button`,2),Pd(),P_(5,jt,9,4,`main`,3)(6,Pt,5,4,`div`,4),P_(7,Kt,4,3,`footer`,5)),t&2&&(fb(2),$d(` `,cM(3,4,`COMMON.WORK_LOCATION_SETTINGS`),` `),fb(2),j_(i.loading()?-1:4),fb(),j_(i.loading()?6:5),fb(2),j_(i.loading()?-1:7))},dependencies:[PD,Ht$2,Bt$2,f$1,vt$1,Kt$2,qe,Qt$1,Gt$1,X$2,ct,pe$1,ce$1,wp,gp,wc,z$2,J$2,Z$2,VN,f],encapsulation:2})}}return n})();function w(t,u){if(t&1&&(va$1(0,`div`,1),OS(1),Pd()),t&2){let e=eS(2);fb(),$d(` `,e.initials,` `)}}function j(t,u){if(t&1){let e=Z_();va$1(0,`img`,3),ov(`error`,function(){dh(e);return fh(eS(2).photo_failed.set(!0))}),Pd()}if(t&2){let e=eS(2);Ky(`alt`,e.initials)(`source`,e.user().photo)}}function D(t,u){if(t&1&&(va$1(0,`div`,0),P_(1,w,2,1,`div`,1)(2,j,1,2,`img`,2),Pd()),t&2){let e=eS();Qy(`user-id`,e.user().id),fb(),j_(!e.user().photo||e.photo_failed()?1:2)}}var S$1=(()=>{class t{constructor(){this.user=EU(void 0),this.photo_failed=Pa$1({source:()=>this.user()?.photo,computation:()=>!1}),this.is_valid=Le(()=>{let e=this.user();if(!e)return!1;let n=(e.name||``).trim(),i=(e.email||``).trim();return n.startsWith(`<empty>`)||i.startsWith(`<empty>`)?!1:!!(n||i||e.first_name||e.last_name)})}get initials(){let e=this.user();if(!e)return`NA`;if(e.first_name&&e.last_name)return`${e.first_name[0]}${e.last_name[0]}`;let n=(e.name||``).replace(/<[^>]*>/g,` `).trim();n||(n=(e.email||e.name||``).split(`@`)[0]);let i=n.replace(/[()[\]\-+=\\/@<>]+/gi,` `).split(/\s+/).filter(Boolean);return i.length===0?`NA`:i.length>1?`${i[0][0]}${i[i.length-1][0]}`:i[0].slice(0,2)}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=BT({type:t,selectors:[[`a-user-avatar`]],inputs:{user:[1,`user`]},decls:1,vars:1,consts:[[1,`border-base-100`,`bg-base-200`,`flex`,`h-[2.5em]`,`w-[2.5em]`,`items-center`,`justify-center`,`overflow-hidden`,`rounded-full`,`border-2`],[`initials`,``,1,`text-base-content`,`uppercase`,`opacity-60`],[`auth`,``,1,`flex`,`h-full`,`w-full`,`items-center`,`justify-center`,`object-cover`,`object-center`,3,`alt`,`source`],[`auth`,``,1,`flex`,`h-full`,`w-full`,`items-center`,`justify-center`,`object-cover`,`object-center`,3,`error`,`alt`,`source`]],template:function(n,i){n&1&&P_(0,D,3,2,`div`,0),n&2&&j_(i.is_valid()?0:-1)},dependencies:[H$2],encapsulation:2})}}return t})();var G=[`*`];function Y(e,d){e&1&&(va$1(0,`button`,7),sM(1,`translate`),va$1(2,`icon`),OS(3,`close`),Pd()()),e&2&&Yy(`aria-label`,cM(1,1,`COMMON.CLOSE`))}function q(e,d){if(e&1&&P_(0,Y,4,3,`button`,7),e&2)j_(eS(2).loading()?-1:0)}function J(e,d){if(e&1&&(va$1(0,`a`,8),sM(1,`translate`),va$1(2,`icon`),OS(3,`close`),Pd()()),e&2)Ky(`routerLink`,eS(3).close()),Qy(`aria-label`,cM(1,2,`COMMON.CLOSE`))}function K(e,d){if(e&1&&P_(0,J,4,4,`a`,8),e&2)j_(eS(2).loading()?-1:0)}function Q(e,d){if(e&1&&P_(0,q,1,1)(1,K,1,1),e&2)j_(eS().close()?.length?1:0)}function W(e,d){e&1&&(rS(0),Xy(1,`div`,9))}function X(e,d){if(e&1&&(va$1(0,`div`,5),Js(`motion-fade-in`),Xy(1,`mat-spinner`,10),va$1(2,`p`,11),OS(3),Pd()()),e&2){let t=eS();fb(),Ky(`diameter`,32),fb(2),Tv(t.loading())}}function Z(e,d){if(e&1&&(va$1(0,`kbd`,14),OS(1),Pd()),e&2){let t=eS(2);fb(),Tv(t.confirm_hotkey())}}function $(e,d){if(e&1){let t=Z_();va$1(0,`footer`,12)(1,`button`,13),ov(`click`,function(){dh(t);return fh(eS().confirm.emit())}),OS(2),sM(3,`translate`),P_(4,Z,2,1,`kbd`,14),Pd()()}if(e&2){let t=eS();mv(`max-w-156`,!t.full_width()),fb(),Ky(`disabled`,t.confirm_disabled()),fb(),$d(` `,t.confirm_text()||cM(3,5,`COMMON.SAVE`),` `),fb(2),j_(t.confirm_hotkey()?4:-1)}}var _e=(()=>{class e{constructor(){this.loading=EU(``),this.heading=EU(`Fullscreen Modal`),this.confirm_text=EU(``),this.confirm_hotkey=EU(``),this.confirm_disabled=EU(!1),this.close=EU([]),this.hide_confirm=EU(!1),this.hide_close=EU(!1),this.full_width=EU(!1),this.confirm=DU()}static{this.ɵfac=function(p){return new(p||e)}}static{this.ɵcmp=BT({type:e,selectors:[[`fullscreen-modal-shell`],[``,`fs-modal-shell`,``]],inputs:{loading:[1,`loading`],heading:[1,`heading`],confirm_text:[1,`confirm_text`],confirm_hotkey:[1,`confirm_hotkey`],confirm_disabled:[1,`confirm_disabled`],close:[1,`close`],hide_confirm:[1,`hide_confirm`],hide_close:[1,`hide_close`],full_width:[1,`full_width`]},outputs:{confirm:`confirm`},ngContentSelectors:G,decls:9,vars:12,consts:[[`cdkScrollable`,``,1,`bg-base-200`,`fixed`,`inset-0`,`flex`,`flex-col`,`items-center`,`overflow-auto`,`px-2`],[1,`border-base-300`,`bg-base-100`,`fixed`,`top-0`,`mx-auto`,`h-screen`,`max-w-full`,`border-x`],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`mx-auto`,`my-2`,`flex`,`h-14`,`w-full`,`items-center`,`justify-between`,`rounded-sm`,`border-none`,`px-4`,`py-2`],[`mat-dialog-title`,``,1,`flex`,`items-center`,`text-xl`,`font-medium`,`capitalize`,3,`innerHTML`],[1,`z-0`,`mx-auto`,`h-1/2`,`w-full`,`flex-1`,`space-y-8`,`p-2`],[1,`flex`,`h-1/2`,`w-full`,`flex-1`,`flex-col`,`items-center`,`justify-center`,`space-y-4`,`p-12`],[1,`bg-base-200`,`fixed`,`bottom-0`,`left-1/2`,`z-10`,`mx-auto`,`my-2`,`flex`,`w-full`,`-translate-x-1/2`,`items-center`,`justify-end`,`rounded-sm`,`border-none`,`px-4`,`py-2`,3,`max-w-156`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``,3,`aria-label`],[`icon`,``,`matRipple`,``,3,`routerLink`],[1,`h-24`,`w-full`],[3,`diameter`],[1,`text-center`,`opacity-70`],[1,`bg-base-200`,`fixed`,`bottom-0`,`left-1/2`,`z-10`,`mx-auto`,`my-2`,`flex`,`w-full`,`-translate-x-1/2`,`items-center`,`justify-end`,`rounded-sm`,`border-none`,`px-4`,`py-2`],[`btn`,``,`matRipple`,``,1,`flex`,`min-w-32`,`items-center`,`justify-center`,`gap-2`,3,`click`,`disabled`],[1,`border-base-300`,`bg-base-100`,`text-base-content`,`rounded`,`border`,`px-2`,`py-1`,`text-xs`,`leading-none`,`shadow-sm`]],template:function(p,o){p&1&&(nS(),va$1(0,`div`,0),Xy(1,`div`,1),va$1(2,`header`,2),Xy(3,`h2`,3),P_(4,Q,2,1),Pd(),va$1(5,`main`,4),P_(6,W,2,0)(7,X,4,2,`div`,5),Pd(),P_(8,$,5,7,`footer`,6),Pd()),p&2&&(fb(),mv(`w-160`,!o.full_width())(`w-full`,o.full_width()),fb(),mv(`max-w-156`,!o.full_width()),fb(),Ky(`innerHTML`,o.heading(),fC),fb(),j_(o.hide_close()?-1:4),fb(),mv(`max-w-156`,!o.full_width()),fb(),j_(o.loading()?7:6),fb(2),j_(!o.loading()&&!o.hide_confirm()?8:-1))},dependencies:[At$1,J$2,Z$2,z$2,Ht$2,Bt$2,jt$2,f$1,vt$1,as,$t$1,f],styles:[`h2[mat-dialog-title][_ngcontent-%COMP%]{color:inherit;font-family:inherit;letter-spacing:inherit;margin:0;padding:0}h2[mat-dialog-title][_ngcontent-%COMP%]:before{display:none}
/*# sourceMappingURL=fullscreen-modal-shell.component.css.map */`,`main[_ngcontent-%COMP%]{scroll-margin-top:60px}
/*# sourceMappingURL=fullscreen-modal-shell.component.css.map */`]})}}return e})();function ga(n,p){if(n&1&&Xy(0,`div`,1),n&2)Ky(`innerHTML`,eS().changelog(),fC)}function fa(n,p){n&1&&(va$1(0,`div`,2)(1,`icon`,3),OS(2,`close`),Pd(),va$1(3,`div`,4),OS(4,`No changelog`),Pd()())}var Nn=(()=>{class n{constructor(){this._data=y($e$1),this.loading=wt$1(!1),this.changelog=Le(()=>g(this._data.changelog||``,{async:!1}))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=BT({type:n,selectors:[[`changelog-modal`]],decls:3,vars:3,consts:[[3,`heading`,`hide_confirm`],[1,`markdown`,3,`innerHTML`],[1,`flex`,`flex-col`,`items-center`,`justify-center`,`space-y-2`],[1,`text-3xl`],[1,`text`]],template:function(t,i){t&1&&(va$1(0,`fullscreen-modal-shell`,0),P_(1,ga,1,1,`div`,1)(2,fa,5,0,`div`,2),Pd()),t&2&&(Ky(`heading`,`Changelog`)(`hide_confirm`,!0),fb(),j_(i.changelog()?1:2))},dependencies:[_e,z$2],encapsulation:2})}}return n})();var Tn=(()=>{class n{constructor(){this._document=y(Y$2),this._dialog=y(ee),this._changelog=wt$1(null),this.available=Le(()=>this._changelog()!==null),this._load()}view(){let e=this._changelog();e!==null&&this._dialog.open(Nn,{data:{changelog:e}})}async _load(){try{let e=new URL(`CHANGELOG.md`,this._document.baseURI),t=await fetch(e);if(!t.ok)return;this._changelog.set(await t.text())}catch{}}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=N({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();var va=[`input`];var ba=[`formField`];var ya=[`*`];var Bt=class{source;value;constructor(p,e){this.source=p,this.value=e}};var Ca={provide:me,useExisting:Is(()=>Xt),multi:!0};var Rn=new w$1(`MatRadioGroup`);var Sa=new w$1(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var Xt=(()=>{class n{_changeDetector=y(pf);_value=null;_name=y(oe).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new Ht$1;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Bt(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(t){return new(t||n)};static ɵdir=at({type:n,selectors:[[`mat-radio-group`]],contentQueries:function(t,i,s){if(t&1&&av(s,Ut,5),t&2){let l;iS(l=sS())&&(i._radios=l)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,ZM],required:[2,`required`,`required`,ZM],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ZM]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[qS([Ca,{provide:Rn,useExisting:n}])]})}return n})();var Ut=(()=>{class n{_elementRef=y(Qt);_changeDetector=y(pf);_focusMonitor=y($e);_radioDispatcher=y(je);_defaultOptions=y(Sa,{optional:!0});_ngZone=y(de);_renderer=y(sr$2);_uniqueId=y(oe).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new Ht$1;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=as$1();_injector=y(Ee$1);constructor(){y(L$1).load(Tt$1);let e=y(Rn,{optional:!0}),t=y(new Gv(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=YM(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new Bt(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let i=this._inputElement?.nativeElement;i&&(i.setAttribute(`tabindex`,t+``),this._previousTabIndex=t,jm(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===i&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===i&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(t){return new(t||n)};static ɵcmp=BT({type:n,selectors:[[`mat-radio-button`]],viewQuery:function(t,i){if(t&1&&cv(va,5)(ba,7,Qt),t&2){let s;iS(s=sS())&&(i._inputElement=s.first),iS(s=sS())&&(i._rippleTrigger=s.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(t,i){t&1&&ov(`focus`,function(){return i._inputElement.nativeElement.focus()}),t&2&&(Qy(`id`,i.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),mv(`mat-primary`,i.color===`primary`)(`mat-accent`,i.color===`accent`)(`mat-warn`,i.color===`warn`)(`mat-mdc-radio-checked`,i.checked)(`mat-mdc-radio-disabled`,i.disabled)(`mat-mdc-radio-disabled-interactive`,i.disabledInteractive)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,ZM],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:YM(e)],checked:[2,`checked`,`checked`,ZM],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,ZM],required:[2,`required`,`required`,ZM],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ZM]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:ya,decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,i){t&1&&(nS(),va$1(0,`label`,2,0)(2,`span`,3),Xy(3,`span`,4),va$1(4,`input`,5,1),ov(`change`,function(l){return i._onInputInteraction(l)}),Pd(),va$1(6,`span`,6),Xy(7,`span`,7)(8,`span`,8),Pd(),va$1(9,`span`,9),Xy(10,`span`,10),Pd()(),va$1(11,`span`,11),rS(12),Pd()()),t&2&&(Ky(`labelPosition`,i.labelPosition)(`for`,i.inputId),fb(2),mv(`mdc-radio--disabled`,i.disabled),fb(2),Ky(`id`,i.inputId)(`checked`,i.checked)(`disabled`,i.disabled&&!i.disabledInteractive)(`required`,i.required),Qy(`name`,i.name)(`value`,i.value)(`aria-label`,i.ariaLabel)(`aria-labelledby`,i.ariaLabelledby)(`aria-describedby`,i.ariaDescribedby)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null),fb(5),Ky(`matRippleTrigger`,i._rippleTrigger.nativeElement)(`matRippleDisabled`,i._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[vt$1,m$2],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})}return n})();var On=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=di({type:n});static ɵinj=Ar$1({imports:[f$1,Ut,ns]})}return n})();function Ee(n){return`${n??``}`.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}var Ea=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]];var wa=[`*`,`mat-chip-avatar, [matChipAvatar]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function Na(n,p){n&1&&(va$1(0,`span`,3),rS(1,1),Pd())}function Ta(n,p){n&1&&(va$1(0,`span`,6),rS(1,2),Pd())}var Ra=`.mdc-evolution-chip,
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
`;var Oa=[[[``,`matChipEdit`,``]],[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[``,`matChipEditInput`,``]],`*`,[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]];var Aa=[`[matChipEdit]`,`mat-chip-avatar, [matChipAvatar]`,`[matChipEditInput]`,`*`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function Da(n,p){n&1&&Xy(0,`span`,0)}function Pa(n,p){n&1&&(va$1(0,`span`,1),rS(1),Pd())}function Fa(n,p){n&1&&(va$1(0,`span`,3),rS(1,1),Pd())}function La(n,p){n&1&&rS(0,2)}function Va(n,p){n&1&&Xy(0,`span`,7)}function Ba(n,p){if(n&1&&P_(0,La,1,0)(1,Va,1,0,`span`,7),n&2)j_(eS().contentEditInput?0:1)}function Ua(n,p){n&1&&rS(0,3)}function Ga(n,p){n&1&&(va$1(0,`span`,6),rS(1,4),Pd())}var Bn=[`*`];var za=`.mat-mdc-chip-set {
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
`;var Un=new w$1(`mat-chips-default-options`,{providedIn:`root`,factory:()=>({separatorKeyCodes:[13]})});var Dn=new w$1(`MatChipAvatar`);var Pn=new w$1(`MatChipTrailingIcon`);var Fn=new w$1(`MatChipEdit`);var Yt=new w$1(`MatChipRemove`);var ti=new w$1(`MatChip`);var Gn=(()=>{class n{_elementRef=y(Qt);_parentChip=y(ti);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?``:null}constructor(){y(L$1).load(Tt$1),this._elementRef.nativeElement.nodeName===`BUTTON`&&this._elementRef.nativeElement.setAttribute(`type`,`button`)}focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(t){return new(t||n)};static ɵdir=at({type:n,selectors:[[``,`matChipContent`,``]],hostAttrs:[1,`mat-mdc-chip-action`,`mdc-evolution-chip__action`,`mdc-evolution-chip__action--presentational`],hostVars:8,hostBindings:function(t,i){t&2&&(Qy(`disabled`,i._getDisabledAttribute())(`aria-disabled`,i.disabled),mv(`mdc-evolution-chip__action--primary`,i._isPrimary)(`mdc-evolution-chip__action--secondary`,!i._isPrimary)(`mdc-evolution-chip__action--trailing`,!i._isPrimary&&!i._isLeading))},inputs:{disabled:[2,`disabled`,`disabled`,ZM],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?-1:YM(e)],_allowFocusWhenDisabled:`_allowFocusWhenDisabled`}})}return n})();var ii=(()=>{class n extends Gn{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static ɵfac=(()=>{let e;return function(i){return(e||(e=Yg(n)))(i||n)}})();static ɵdir=at({type:n,selectors:[[``,`matChipAction`,``]],hostVars:3,hostBindings:function(t,i){t&1&&ov(`click`,function(l){return i._handleClick(l)})(`keydown`,function(l){return i._handleKeydown(l)}),t&2&&(Qy(`tabindex`,i._getTabindex()),mv(`mdc-evolution-chip__action--presentational`,!1))},features:[Py]})}return n})();var zn=(()=>{class n extends ii{_isPrimary=!1;_handleClick(e){this.disabled||(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}static ɵfac=(()=>{let e;return function(i){return(e||(e=Yg(n)))(i||n)}})();static ɵdir=at({type:n,selectors:[[``,`matChipRemove`,``]],hostAttrs:[`role`,`button`,1,`mat-mdc-chip-remove`,`mat-mdc-chip-trailing-icon`,`mat-focus-indicator`,`mdc-evolution-chip__icon`,`mdc-evolution-chip__icon--trailing`],hostVars:1,hostBindings:function(t,i){t&2&&Qy(`aria-hidden`,null)},features:[qS([{provide:Yt,useExisting:n}]),Py]})}return n})();var Jt=(()=>{class n{_changeDetectorRef=y(pf);_elementRef=y(Qt);_tagName=y(yU);_ngZone=y(de);_focusMonitor=y($e);_globalRippleOptions=y(Q$2,{optional:!0});_document=y(Y$2);_onFocus=new pe;_onBlur=new pe;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=as$1();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=y(oe).getId(`mat-mdc-chip-`);ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new Ht$1;destroyed=new Ht$1;basicChipAttrName=`mat-basic-chip`;leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=y(N$1);_injector=y(Ee$1);constructor(){let e=y(L$1);e.load(Tt$1),e.load(H$1),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:`mat-mdc-chip-ripple`,disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(`.mat-mdc-chip-action-label`),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=TE(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let i=t._elementRef.nativeElement;return i===e||i.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static ɵfac=function(t){return new(t||n)};static ɵcmp=BT({type:n,selectors:[[`mat-basic-chip`],[``,`mat-basic-chip`,``],[`mat-chip`],[``,`mat-chip`,``]],contentQueries:function(t,i,s){if(t&1&&av(s,Dn,5)(s,Fn,5)(s,Pn,5)(s,Yt,5)(s,Dn,5)(s,Pn,5)(s,Fn,5)(s,Yt,5),t&2){let l;iS(l=sS())&&(i.leadingIcon=l.first),iS(l=sS())&&(i.editIcon=l.first),iS(l=sS())&&(i.trailingIcon=l.first),iS(l=sS())&&(i.removeIcon=l.first),iS(l=sS())&&(i._allLeadingIcons=l),iS(l=sS())&&(i._allTrailingIcons=l),iS(l=sS())&&(i._allEditIcons=l),iS(l=sS())&&(i._allRemoveIcons=l)}},viewQuery:function(t,i){if(t&1&&cv(ii,5),t&2){let s;iS(s=sS())&&(i.primaryAction=s.first)}},hostAttrs:[1,`mat-mdc-chip`],hostVars:31,hostBindings:function(t,i){t&1&&ov(`keydown`,function(l){return i._handleKeydown(l)}),t&2&&(nv(`id`,i.id),Qy(`role`,i.role)(`aria-label`,i.ariaLabel),CS(`mat-`+(i.color||`primary`)),mv(`mdc-evolution-chip`,!i._isBasicChip)(`mdc-evolution-chip--disabled`,i.disabled)(`mdc-evolution-chip--with-trailing-action`,i._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,i.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,i.leadingIcon)(`mdc-evolution-chip--with-avatar`,i.leadingIcon)(`mat-mdc-chip-with-avatar`,i.leadingIcon)(`mat-mdc-chip-highlighted`,i.highlighted)(`mat-mdc-chip-disabled`,i.disabled)(`mat-mdc-basic-chip`,i._isBasicChip)(`mat-mdc-standard-chip`,!i._isBasicChip)(`mat-mdc-chip-with-trailing-icon`,i._hasTrailingIcon())(`_mat-animation-noopable`,i._animationsDisabled))},inputs:{role:`role`,id:`id`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaDescription:[0,`aria-description`,`ariaDescription`],value:`value`,color:`color`,removable:[2,`removable`,`removable`,ZM],highlighted:[2,`highlighted`,`highlighted`,ZM],disableRipple:[2,`disableRipple`,`disableRipple`,ZM],disabled:[2,`disabled`,`disabled`,ZM]},outputs:{removed:`removed`,destroyed:`destroyed`},exportAs:[`matChip`],features:[qS([{provide:ti,useExisting:n}])],ngContentSelectors:wa,decls:8,vars:2,consts:[[1,`mat-mdc-chip-focus-overlay`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipContent`,``],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`]],template:function(t,i){t&1&&(nS(Ea),Xy(0,`span`,0),va$1(1,`span`,1)(2,`span`,2),P_(3,Na,2,0,`span`,3),va$1(4,`span`,4),rS(5),Xy(6,`span`,5),Pd()()(),P_(7,Ta,2,0,`span`,6)),t&2&&(fb(3),j_(i.leadingIcon?3:-1),fb(4),j_(i._hasTrailingIcon()?7:-1))},dependencies:[Gn],styles:[`.mdc-evolution-chip,
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
`],encapsulation:2})}return n})();var Zt=(()=>{class n{_elementRef=y(Qt);_document=y(Y$2);initialize(e){this.getNativeElement().focus(),this.setValue(e)}getNativeElement(){return this._elementRef.nativeElement}setValue(e){this.getNativeElement().textContent=e,this._moveCursorToEndOfInput()}getValue(){return this.getNativeElement().textContent||``}_moveCursorToEndOfInput(){let e=this._document.createRange();e.selectNodeContents(this.getNativeElement()),e.collapse(!1);let t=window.getSelection();t.removeAllRanges(),t.addRange(e)}static ɵfac=function(t){return new(t||n)};static ɵdir=at({type:n,selectors:[[`span`,`matChipEditInput`,``]],hostAttrs:[`role`,`textbox`,`tabindex`,`-1`,`contenteditable`,`true`,1,`mat-chip-edit-input`]})}return n})();var ni=(()=>{class n extends Jt{basicChipAttrName=`mat-basic-chip-row`;_renderer=y(sr$2);_cleanupMousedown;_editStartPending=!1;editable=!1;edited=new Ht$1;defaultEditInput;contentEditInput;_alreadyFocused=!1;_isEditing=!1;constructor(){super(),this.role=`row`,this._onBlur.pipe(SE(this.destroyed)).subscribe(()=>{this._isEditing&&!this._editStartPending&&this._onEditFinish(),this._alreadyFocused=!1})}ngAfterViewInit(){super.ngAfterViewInit(),this._cleanupMousedown=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`mousedown`,()=>{this._alreadyFocused=this._hasFocus()}))}ngOnDestroy(){super.ngOnDestroy(),this._cleanupMousedown?.()}_hasLeadingActionIcon(){return!this._isEditing&&!!this.editIcon}_hasTrailingIcon(){return!this._isEditing&&super._hasTrailingIcon()}_handleFocus(){!this._isEditing&&!this.disabled&&this.focus()}_handleKeydown(e){e.keyCode===13&&!this.disabled?this._isEditing?(e.preventDefault(),this._onEditFinish()):this.editable&&this._startEditing(e):this._isEditing?e.stopPropagation():super._handleKeydown(e)}_handleClick(e){!this.disabled&&this.editable&&!this._isEditing&&this._alreadyFocused&&(e.preventDefault(),e.stopPropagation(),this._startEditing(e))}_handleDoubleclick(e){!this.disabled&&this.editable&&this._startEditing(e)}_edit(){this._changeDetectorRef.markForCheck(),this._startEditing()}_startEditing(e){if(!this.primaryAction||this.removeIcon&&e&&this._getSourceAction(e.target)===this.removeIcon)return;let t=this.value;this._isEditing=this._editStartPending=!0,jm(()=>{this._getEditInput().initialize(t),setTimeout(()=>this._ngZone.run(()=>this._editStartPending=!1))},{injector:this._injector})}_onEditFinish(){this._isEditing=this._editStartPending=!1,this.edited.emit({chip:this,value:this._getEditInput().getValue()}),(this._document.activeElement===this._getEditInput().getNativeElement()||this._document.activeElement===this._document.body)&&this.primaryAction.focus()}_isRippleDisabled(){return super._isRippleDisabled()||this._isEditing}_getEditInput(){return this.contentEditInput||this.defaultEditInput}static ɵfac=function(t){return new(t||n)};static ɵcmp=BT({type:n,selectors:[[`mat-chip-row`],[``,`mat-chip-row`,``],[`mat-basic-chip-row`],[``,`mat-basic-chip-row`,``]],contentQueries:function(t,i,s){if(t&1&&av(s,Zt,5),t&2){let l;iS(l=sS())&&(i.contentEditInput=l.first)}},viewQuery:function(t,i){if(t&1&&cv(Zt,5),t&2){let s;iS(s=sS())&&(i.defaultEditInput=s.first)}},hostAttrs:[1,`mat-mdc-chip`,`mat-mdc-chip-row`,`mdc-evolution-chip`],hostVars:29,hostBindings:function(t,i){t&1&&ov(`focus`,function(){return i._handleFocus()})(`click`,function(l){return i._hasInteractiveActions()?i._handleClick(l):null})(`dblclick`,function(l){return i._handleDoubleclick(l)}),t&2&&(nv(`id`,i.id),Qy(`tabindex`,i.disabled?null:-1)(`aria-label`,null)(`aria-description`,null)(`role`,i.role),mv(`mat-mdc-chip-with-avatar`,i.leadingIcon)(`mat-mdc-chip-disabled`,i.disabled)(`mat-mdc-chip-editing`,i._isEditing)(`mat-mdc-chip-editable`,i.editable)(`mdc-evolution-chip--disabled`,i.disabled)(`mdc-evolution-chip--with-leading-action`,i._hasLeadingActionIcon())(`mdc-evolution-chip--with-trailing-action`,i._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,i.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,i.leadingIcon)(`mdc-evolution-chip--with-avatar`,i.leadingIcon)(`mat-mdc-chip-highlighted`,i.highlighted)(`mat-mdc-chip-with-trailing-icon`,i._hasTrailingIcon()))},inputs:{editable:`editable`},outputs:{edited:`edited`},features:[qS([{provide:Jt,useExisting:n},{provide:ti,useExisting:n}]),Py],ngContentSelectors:Aa,decls:9,vars:8,consts:[[1,`mat-mdc-chip-focus-overlay`],[`role`,`gridcell`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--leading`],[`role`,`gridcell`,`matChipAction`,``,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`,3,`disabled`],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[`aria-hidden`,`true`,1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[`role`,`gridcell`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`],[`matChipEditInput`,``]],template:function(t,i){t&1&&(nS(Oa),P_(0,Da,1,0,`span`,0),P_(1,Pa,2,0,`span`,1),va$1(2,`span`,2),P_(3,Fa,2,0,`span`,3),va$1(4,`span`,4),P_(5,Ba,2,1)(6,Ua,1,0),Xy(7,`span`,5),Pd()(),P_(8,Ga,2,0,`span`,6)),t&2&&(j_(i._isEditing?-1:0),fb(),j_(i._hasLeadingActionIcon()?1:-1),fb(),Ky(`disabled`,i.disabled),Qy(`aria-description`,i.ariaDescription)(`aria-label`,i.ariaLabel),fb(),j_(i.leadingIcon?3:-1),fb(2),j_(i._isEditing?5:6),fb(3),j_(i._hasTrailingIcon()?8:-1))},dependencies:[ii,Zt],styles:[Ra],encapsulation:2})}return n})();var Ha=(()=>{class n{_elementRef=y(Qt);_changeDetectorRef=y(pf);_dir=y(jt$1,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new pe;_defaultRole=`presentation`;get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new sa$1;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(_E(null),Oc(()=>TE(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains(`mat-mdc-chip`))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(_E(this._chips)).subscribe(e=>{let t=[];e.forEach(i=>i._getActions().forEach(s=>t.push(s))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new ce(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:`ltr`).withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(SE(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(SE(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(_E(null),SE(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(SE(this._destroyed)).subscribe(e=>{let i=this._chips.toArray().indexOf(e.chip),s=e.chip._hasFocus(),l=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),L=s||l;this._isValidIndex(i)&&L&&(this._lastDestroyedFocusedChipIndex=i)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static ɵfac=function(t){return new(t||n)};static ɵcmp=BT({type:n,selectors:[[`mat-chip-set`]],contentQueries:function(t,i,s){if(t&1&&av(s,Jt,5),t&2){let l;iS(l=sS())&&(i._chips=l)}},hostAttrs:[1,`mat-mdc-chip-set`,`mdc-evolution-chip-set`],hostVars:1,hostBindings:function(t,i){t&1&&ov(`keydown`,function(l){return i._handleKeydown(l)}),t&2&&Qy(`role`,i.role)},inputs:{disabled:[2,`disabled`,`disabled`,ZM],role:`role`,tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:YM(e)]},ngContentSelectors:Bn,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(t,i){t&1&&(nS(),jd(0,`div`,0),rS(1),Bd())},styles:[`.mat-mdc-chip-set {
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
`],encapsulation:2})}return n})();var ei=class{source;value;constructor(p,e){this.source=p,this.value=e}};var Hn=(()=>{class n extends Ha{ngControl=y(ge,{optional:!0,self:!0});controlType=`mat-chip-grid`;_chipInput;_defaultRole=`grid`;_errorStateTracker;_uid=y(oe).getId(`mat-chip-grid-`);_ariaDescribedbyIds=[];_onTouched=()=>{};_onChange=()=>{};get disabled(){return this.ngControl?!!this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=e,this._syncChipsState(),this.stateChanges.next()}get id(){return this._chipInput?this._chipInput.id:this._uid}get empty(){return(!this._chipInput||this._chipInput.empty)&&(!this._chips||this._chips.length===0)}get placeholder(){return this._chipInput?this._chipInput.placeholder:this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder=``;get focused(){return this._chipInput?.focused||this._hasFocusedChip()}get required(){return this._required??this.ngControl?.control?.hasValidator(yn$1.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get shouldLabelFloat(){return!this.empty||this.focused}get value(){return this._value}set value(e){this._value=e}_value=[];get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}change=new Ht$1;valueChange=new Ht$1;_chips=void 0;stateChanges=new pe;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(){super();let e=y(gc,{optional:!0}),t=y(bc,{optional:!0}),i=y(Te),s=y(Rt$1,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._errorStateTracker=new J$3(i,s||this.ngControl,t,e,this.stateChanges)}ngAfterContentInit(){this.chipBlurChanges.pipe(SE(this._destroyed)).subscribe(()=>{this._blur(),this.stateChanges.next()}),TE(this.chipFocusChanges,this._chips.changes).pipe(SE(this._destroyed)).subscribe(()=>this.stateChanges.next())}ngDoCheck(){this.ngControl&&this.updateErrorState()}ngOnDestroy(){super.ngOnDestroy(),this.stateChanges.complete()}registerInput(e){this._chipInput=e,this._chipInput.setDescribedByIds(this._ariaDescribedbyIds),this._elementRef.nativeElement.removeAttribute(`aria-describedby`)}onContainerClick(e){!this.disabled&&!this._originatesFromChip(e)&&this.focus()}focus(){if(!(this.disabled||this._chipInput?.focused)){if(!this._chips.length||this._chips.first.disabled){if(!this._chipInput)return;Promise.resolve().then(()=>this._chipInput.focus())}else{let e=this._keyManager.activeItem;e?e.focus():this._keyManager.setFirstItemActive()}this.stateChanges.next()}}get describedByIds(){if(this._chipInput)return this._chipInput.describedByIds||[];let e=this._elementRef.nativeElement.getAttribute(`aria-describedby`);return e?e.split(` `):[]}setDescribedByIds(e){this._ariaDescribedbyIds=e,this._chipInput?this._chipInput.setDescribedByIds(e):e.length?this._elementRef.nativeElement.setAttribute(`aria-describedby`,e.join(` `)):this._elementRef.nativeElement.removeAttribute(`aria-describedby`)}writeValue(e){this._value=e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this.stateChanges.next()}updateErrorState(){this._errorStateTracker.updateErrorState()}_blur(){this.disabled||setTimeout(()=>{this.focused||(this._propagateChanges(),this._markAsTouched())})}_allowFocusEscape(){this._chipInput?.focused||super._allowFocusEscape()}_handleKeydown(e){let t=e.keyCode,i=this._keyManager.activeItem;if(t===9)this._chipInput?.focused&&st(e,`shiftKey`)&&this._chips.length&&!this._chips.last.disabled?(e.preventDefault(),i?this._keyManager.setActiveItem(i):this._focusLastChip()):super._allowFocusEscape();else if(!this._chipInput?.focused)if((t===38||t===40)&&i){let s=this._chipActions.filter(le=>le._isPrimary===i._isPrimary&&!this._skipPredicate(le)),l=s.indexOf(i),L=e.keyCode===38?-1:1;e.preventDefault(),l>-1&&this._isValidIndex(l+L)&&this._keyManager.setActiveItem(s[l+L])}else super._handleKeydown(e);this.stateChanges.next()}_redirectDestroyedChipFocus(){this._lastDestroyedFocusedChipIndex!==null&&(super._redirectDestroyedChipFocus(),(!this._chips.length||this._chips.length===1&&this._chips.first.disabled)&&this._keyManager.updateActiveItem(-1))}_focusLastChip(){this._chips.length&&this._chips.last.focus()}_propagateChanges(){let e=this._chips.length?this._chips.toArray().map(t=>t.value):[];this._value=e,this.change.emit(new ei(this,e)),this.valueChange.emit(e),this._onChange(e),this._changeDetectorRef.markForCheck()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next()}static ɵfac=function(t){return new(t||n)};static ɵcmp=BT({type:n,selectors:[[`mat-chip-grid`]],contentQueries:function(t,i,s){if(t&1&&av(s,ni,5),t&2){let l;iS(l=sS())&&(i._chips=l)}},hostAttrs:[1,`mat-mdc-chip-set`,`mat-mdc-chip-grid`,`mdc-evolution-chip-set`],hostVars:10,hostBindings:function(t,i){t&1&&ov(`focus`,function(){return i.focus()})(`blur`,function(){return i._blur()}),t&2&&(Qy(`role`,i.role)(`tabindex`,i.disabled||i._chips&&i._chips.length===0?-1:i.tabIndex)(`aria-disabled`,i.disabled.toString())(`aria-invalid`,i.errorState),mv(`mat-mdc-chip-list-disabled`,i.disabled)(`mat-mdc-chip-list-invalid`,i.errorState)(`mat-mdc-chip-list-required`,i.required))},inputs:{disabled:[2,`disabled`,`disabled`,ZM],placeholder:`placeholder`,required:[2,`required`,`required`,ZM],value:`value`,errorStateMatcher:`errorStateMatcher`},outputs:{change:`change`,valueChange:`valueChange`},features:[qS([{provide:gt,useExisting:n}]),Py],ngContentSelectors:Bn,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(t,i){t&1&&(nS(),jd(0,`div`,0),rS(1),Bd())},styles:[za],encapsulation:2})}return n})();var Wn=(()=>{class n{_elementRef=y(Qt);focused=!1;get chipGrid(){return this._chipGrid}set chipGrid(e){e&&(this._chipGrid=e,this._chipGrid.registerInput(this))}_chipGrid;addOnBlur=!1;separatorKeyCodes;chipEnd=new Ht$1;placeholder=``;id=y(oe).getId(`mat-mdc-chip-list-input-`);get disabled(){return this._disabled||this._chipGrid&&this._chipGrid.disabled}set disabled(e){this._disabled=e}_disabled=!1;readonly=!1;disabledInteractive;get empty(){return!this.inputElement.value}inputElement;constructor(){let e=y(Un),t=y(vt$2,{optional:!0});this.inputElement=this._elementRef.nativeElement,this.separatorKeyCodes=e.separatorKeyCodes,this.disabledInteractive=e.inputDisabledInteractive??!1,t&&this.inputElement.classList.add(`mat-mdc-form-field-input-control`)}ngOnChanges(){this._chipGrid.stateChanges.next()}ngOnDestroy(){this.chipEnd.complete()}_keydown(e){this.empty&&e.keyCode===8?(e.repeat||this._chipGrid._focusLastChip(),e.preventDefault()):this._emitChipEnd(e)}_blur(){this.addOnBlur&&this._emitChipEnd(),this.focused=!1,this._chipGrid.focused||this._chipGrid._blur(),this._chipGrid.stateChanges.next()}_focus(){this.focused=!0,this._chipGrid.stateChanges.next()}_emitChipEnd(e){(!e||this._isSeparatorKey(e)&&!e.repeat)&&(this.chipEnd.emit({input:this.inputElement,value:this.inputElement.value,chipInput:this}),e?.preventDefault())}_onInput(){this._chipGrid.stateChanges.next()}focus(){this.inputElement.focus()}clear(){this.inputElement.value=``}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}_isSeparatorKey(e){if(!this.separatorKeyCodes)return!1;for(let t of this.separatorKeyCodes){let i,s;typeof t==`number`?(i=t,s=null):(i=t.keyCode,s=t.modifiers);let l=s?.length?st(e,...s):!st(e);if(i===e.keyCode&&l)return!0}return!1}_getReadonlyAttribute(){return this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(t){return new(t||n)};static ɵdir=at({type:n,selectors:[[`input`,`matChipInputFor`,``]],hostAttrs:[1,`mat-mdc-chip-input`,`mat-mdc-input-element`,`mdc-text-field__input`,`mat-input-element`],hostVars:8,hostBindings:function(t,i){t&1&&ov(`keydown`,function(l){return i._keydown(l)})(`blur`,function(){return i._blur()})(`focus`,function(){return i._focus()})(`input`,function(){return i._onInput()}),t&2&&(nv(`id`,i.id),Qy(`disabled`,i.disabled&&!i.disabledInteractive?``:null)(`placeholder`,i.placeholder||null)(`aria-invalid`,i._chipGrid&&i._chipGrid.ngControl?i._chipGrid.ngControl.invalid:null)(`aria-required`,i._chipGrid&&i._chipGrid.required||null)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null)(`readonly`,i._getReadonlyAttribute())(`required`,i._chipGrid&&i._chipGrid.required||null))},inputs:{chipGrid:[0,`matChipInputFor`,`chipGrid`],addOnBlur:[2,`matChipInputAddOnBlur`,`addOnBlur`,ZM],separatorKeyCodes:[0,`matChipInputSeparatorKeyCodes`,`separatorKeyCodes`],placeholder:`placeholder`,id:`id`,disabled:[2,`disabled`,`disabled`,ZM],readonly:[2,`readonly`,`readonly`,ZM],disabledInteractive:[2,`matChipInputDisabledInteractive`,`disabledInteractive`,ZM]},outputs:{chipEnd:`matChipInputTokenEnd`},exportAs:[`matChipInput`,`matChipInputFor`],features:[Ea$1]})}return n})();var jn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=di({type:n});static ɵinj=Ar$1({providers:[Te,{provide:Un,useValue:{separatorKeyCodes:[13]}}],imports:[f$1,ns]})}return n})();var qn=(()=>{class n{constructor(){this.url=y($e$1)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=BT({type:n,selectors:[[`image-viewer`]],decls:6,vars:4,consts:[[1,`bg-base-200`,`h-screen`,`w-screen`],[`auth`,``,`alt`,``,1,`h-full`,`w-full`,`object-contain`,`object-center`,3,`source`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``,1,`bg-base-100`,`absolute`,`top-1`,`right-1`]],template:function(t,i){t&1&&(va$1(0,`div`,0),Xy(1,`img`,1),va$1(2,`button`,2),sM(3,`translate`),va$1(4,`icon`),OS(5,`close`),Pd()()()),t&2&&(fb(),Ky(`source`,i.url),fb(),Qy(`aria-label`,cM(3,2,`COMMON.CLOSE`)))},dependencies:[z$2,H$2,Ht$2,Bt$2,f],encapsulation:2})}}return n})();function ja(n,p=``){let e=p.split(`,`).map(s=>s.trim().toLowerCase()).filter(s=>!!s);if(!e.length)return!0;let t=n.name.toLowerCase(),i=(n.type||``).toLowerCase();return e.some(s=>s.startsWith(`.`)?t.endsWith(s):s.endsWith(`/*`)?i.startsWith(s.slice(0,-1)):i===s)}function Kn(n,{accept:p,max_size:e}){if(!ja(n,p))return p_(et(`FORM.FILE_TYPE_NOT_ALLOWED`,{name:n.name})),!1;if(e>0&&n.size>e){let t=`${Math.round(e/1024/1024*10)/10} MB`;return p_(et(`FORM.FILE_TOO_LARGE`,{name:n.name,size:t})),!1}return!0}function $n(n,p,e,t){let i=n.uploadFileWithProgress(p),s=Us(()=>{let l=i();if(!l)return;let L=l instanceof Error?{id:``,name:p.name,progress:0,link:``,formatted_size:``,size:p.size,upload:null,error:l.message||`Upload failed`}:l;ae(()=>t(L)),(L.error||L.progress>=100)&&s.destroy()},{injector:e})}var qa=[`image_list`];var Ka=[`file_input`];var $a=n=>({item:n});var Qa=(n,p)=>p.key;function Xa(n,p){if(n&1){let e=Z_();va$1(0,`div`,15),Xy(1,`img`,16),va$1(2,`div`,17),Xy(3,`div`,18),va$1(4,`div`,19)(5,`button`,20),sM(6,`translate`),ov(`click`,function(){let i=dh(e).$implicit;return fh(eS().copyLink(i))}),va$1(7,`icon`),OS(8,`link`),Pd()(),va$1(9,`button`,20),sM(10,`translate`),ov(`click`,function(){let i=dh(e).$implicit;return fh(eS().viewImage(i))}),va$1(11,`icon`),OS(12,`visibility`),Pd()(),va$1(13,`button`,21),sM(14,`translate`),ov(`click`,function(){let i=dh(e).$implicit;return fh(eS().removeImage(i))}),va$1(15,`icon`),OS(16,`close`),Pd()()()()()}if(n&2){let e=p.$implicit,t=eS();gv(`transform`,`translate(-`+t.offset()+`00%)`),fb(),Ky(`source`,e),fb(4),Qy(`aria-label`,cM(6,7,`COMMON.COPY_LINK`)),fb(4),Qy(`aria-label`,cM(10,9,`COMMON.VIEW`)),fb(4),Ky(`disabled`,t.disabled()),Qy(`aria-label`,cM(14,11,`COMMON.REMOVE`))}}function Za(n,p){if(n&1&&Xy(0,`mat-progress-spinner`,23),n&2){let e=eS().$implicit;Ky(`value`,e.progress)(`diameter`,64)}}function Ya(n,p){if(n&1&&(va$1(0,`icon`,24),OS(1,`warning`),Pd()),n&2){let e=eS().$implicit;Ky(`label`,e.error)}}function Ja(n,p){n&1&&(va$1(0,`div`,25)(1,`icon`,26),OS(2,`refresh`),Pd()())}function eo(n,p){if(n&1){let e=Z_();va$1(0,`div`,22),ov(`click`,function(){let i=dh(e).$implicit;return fh(eS().retryUpload(i))}),P_(1,Za,1,2,`mat-progress-spinner`,23),P_(2,Ya,2,1,`icon`,24),P_(3,Ja,3,0,`div`,25),Pd()}if(n&2){let e=p.$implicit;gv(`transform`,`translate(-`+eS().offset()+`00%)`),Ky(`matTooltip`,e.error),fb(),j_(e.error?-1:1),fb(),j_(e.error?2:-1),fb(),j_(e.error?3:-1)}}function to(n,p){if(n&1){let e=Z_();va$1(0,`button`,27),sM(1,`translate`),ov(`click`,function(){dh(e);return fh(eS().previousOffset())}),va$1(2,`icon`),OS(3,`chevron_left`),Pd()()}if(n&2)Ky(`disabled`,eS().offset()===0),Qy(`aria-label`,cM(1,2,`COMMON.PREVIOUS`))}function io(n,p){if(n&1){let e=Z_();va$1(0,`button`,28),sM(1,`translate`),ov(`click`,function(){dh(e);return fh(eS().nextOffset())}),va$1(2,`icon`),OS(3,`chevron_right`),Pd()()}if(n&2){let e=eS();Ky(`disabled`,e.offset()>=e.length()-e.view_space()),Qy(`aria-label`,cM(1,2,`COMMON.NEXT`))}}function no(n,p){if(n&1){let e=Z_();va$1(0,`mat-chip-row`,29),ov(`removed`,function(){let i=dh(e).$implicit;return fh(eS().removeImage(i))}),va$1(1,`div`,30),OS(2),Pd(),va$1(3,`button`,31),sM(4,`translate`),va$1(5,`icon`),OS(6,`cancel`),Pd()()()}if(n&2){let e=p.$implicit;fb(2),Tv(e),fb(),Qy(`aria-label`,uM(4,2,`COMMON.REMOVE_ITEM`,YS(5,$a,e)))}}var Xn=(()=>{class n extends Pi{constructor(){super(...arguments),this._clipboard=y(Xr$1),this._uploads=y(ns$1),this._dialog=y(ee),this._injector=y(Ee$1),this.list=wt$1([]),this.uploads=wt$1([]),this.offset=wt$1(0),this.disabled=wt$1(!1),this.max_size=EU(0),this.dragging=wt$1(!1),this.view_space=wt$1(0),this.separators=[188,13],this.length=Le(()=>this.list().length+this.uploads().length+1),this._list_el=wU(`image_list`),this._file_input=wU(`file_input`),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e,this.setDisabledState=e=>this.disabled.set(e)}ngAfterViewInit(){this.updateViewSpace()}updateViewSpace(){this.timeout(`init_view_space`,()=>{let e=this._list_el()?.nativeElement?.getBoundingClientRect();e&&this.view_space.set(Math.floor(e.width/152))},100)}copyLink(e){this._clipboard.copy(e),Fo$1(et(`COMMON.LINK_COPIED`))}viewImage(e){this._dialog.open(qn,{data:e})}removeImage(e){this.setValue(this.list().filter(t=>t!==e))}addImage(e){e.value&&(this.setValue(oe$1([...this.list(),e.value])),e.chipInput.inputElement.value=``)}addImageUrl(e){this.setValue(oe$1([...this.list(),e]))}retryUpload(e){this.disabled()||!e.error||(this._removeUpload(e.key),this._uploadFile(e.file))}previousOffset(){this.offset.update(e=>e-1)}nextOffset(){this.offset.update(e=>e+1)}uploadImages(e){let t=e.target;if(!t?.files?.length)return;let i={accept:`image/*`,max_size:this.max_size()};for(let l=0;l<t.files.length;l++)Kn(t.files[l],i)&&this._uploadFile(t.files[l]);let s=this._file_input()?.nativeElement;s&&(s.value=``)}setValue(e){let t=e||[];this.list.set(t),this._onChange&&this._onChange(t)}writeValue(e){this.list.set(e||[])}_uploadFile(e){let t=Go$1(8);this.uploads.update(i=>[...i,{key:t,file:e,progress:0}]),$n(this._uploads,e,this._injector,i=>{if(i.error)p_(et(`FORM.UPLOAD_FAILED`,{name:e.name,error:i.error}));else if(i.progress>=100){this._removeUpload(t),this.addImageUrl(i.link);return}this.uploads.update(s=>s.map(l$2=>l$2.key===t?m(l({},l$2),{progress:i.progress,error:i.error}):l$2))})}_removeUpload(e){this.uploads.update(t=>t.filter(i=>i.key!==e))}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Yg(n)))(i||n)}})()}static{this.ɵcmp=BT({type:n,selectors:[[`image-list-field`]],viewQuery:function(t,i){t&1&&lv(i._list_el,qa,5)(i._file_input,Ka,5),t&2&&aS(2)},inputs:{max_size:[1,`max_size`]},features:[qS([H_$1(()=>n)]),Py],decls:24,vars:22,consts:[[`image_list`,``],[`file_input`,``],[`chipList`,``],[`images`,``,1,`relative`,`mb-2`,`flex`,`w-full`,`items-center`,`space-x-2`,`overflow-hidden`,`py-2`,3,`resize`],[`image`,``,1,`border-base-200`,`hover:border-base-300`,`hover:bg-base-200`,`relative`,`flex`,`h-32`,`w-36`,`shrink-0`,`cursor-pointer`,`flex-col`,`items-center`,`justify-center`,`rounded-xl`,`border-2`,`border-dashed`],[1,`text-4xl`,`opacity-60`],[1,`px-4`,`text-center`,`opacity-60`],[`type`,`file`,`accept`,`image/*`,`multiple`,``,1,`absolute`,`inset-0`,`h-32`,`w-32`,`cursor-pointer`,`opacity-0`,3,`dragenter`,`dragleave`,`drop`,`change`,`disabled`],[`image`,``,1,`bg-base-200`,`relative`,`h-32`,`w-36`,`shrink-0`,`overflow-hidden`,`rounded-sm`,`bg-cover`,`bg-center`,3,`transform`],[`upload`,``,1,`border-base-content/10`,`bg-base-200`,`flex`,`h-32`,`w-36`,`shrink-0`,`items-center`,`justify-center`,`rounded-sm`,`border`,`bg-cover`,`bg-center`,3,`transform`,`matTooltip`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`left-0`,`-translate-y-1/2`,`transform`,3,`disabled`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`right-0`,`-translate-y-1/2`,`transform`,3,`disabled`],[`appearance`,`outline`,1,`w-full`],[3,`disabled`],[3,`matChipInputTokenEnd`,`placeholder`,`matChipInputFor`,`matChipInputSeparatorKeyCodes`,`matChipInputAddOnBlur`],[`image`,``,1,`bg-base-200`,`relative`,`h-32`,`w-36`,`shrink-0`,`overflow-hidden`,`rounded-sm`,`bg-cover`,`bg-center`],[`auth`,``,`alt`,``,1,`pointer-events-none`,`absolute`,`top-1/2`,`left-1/2`,`z-10`,`-translate-x-1/2`,`-translate-y-1/2`,`object-contain`,3,`source`],[`overlay`,``,1,`text-base-100`,`absolute`,`inset-0`,`z-20`],[`bg`,``,1,`absolute`,`inset-0`,`bg-black`,`opacity-0`],[`actions`,``,1,`absolute`,`top-0`,`right-0`,`left-0`,`flex`,`items-center`,`justify-center`,`space-x-2`,`opacity-0`],[`icon`,``,3,`click`],[`icon`,``,`type`,`button`,3,`click`,`disabled`],[`upload`,``,1,`border-base-content/10`,`bg-base-200`,`flex`,`h-32`,`w-36`,`shrink-0`,`items-center`,`justify-center`,`rounded-sm`,`border`,`bg-cover`,`bg-center`,3,`click`,`matTooltip`],[`mode`,`determinate`,3,`value`,`diameter`],[1,`text-error`,`text-6xl`,3,`label`],[`overlay`,``,1,`text-base-100`,`hover:bg-base-content/50`,`absolute`,`inset-0`,`flex`,`items-center`,`justify-center`],[1,`text-3xl`,`opacity-0`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`left-0`,`-translate-y-1/2`,`transform`,3,`click`,`disabled`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`right-0`,`-translate-y-1/2`,`transform`,3,`click`,`disabled`],[3,`removed`],[1,`max-w-md`,`truncate`],[`matChipRemove`,``]],template:function(t,i){if(t&1&&(va$1(0,`div`,3,0),ov(`resize`,function(){return i.updateViewSpace()},mC),va$1(2,`div`,4)(3,`icon`,5),OS(4,`add`),Pd(),va$1(5,`p`,6),OS(6),sM(7,`translate`),Pd(),va$1(8,`input`,7,1),ov(`dragenter`,function(){return i.dragging.set(!0)})(`dragleave`,function(){return i.dragging.set(!1)})(`drop`,function(){return i.dragging.set(!1)})(`change`,function(l){return i.uploadImages(l)}),Pd()(),H_(10,Xa,17,13,`div`,8,V_),H_(12,eo,4,6,`div`,9,Qa),P_(14,to,4,4,`button`,10),P_(15,io,4,4,`button`,11),Pd(),va$1(16,`mat-form-field`,12)(17,`mat-chip-grid`,13,2),sM(19,`translate`),H_(20,no,7,7,`mat-chip-row`,null,V_),Pd(),va$1(22,`input`,14),sM(23,`translate`),ov(`matChipInputTokenEnd`,function(l){return i.addImage(l)}),Pd()()),t&2){let s=cS(18);fb(2),gv(`transform`,`translate(-`+i.offset()+`00%)`),mv(`border-primary`,i.dragging())(`bg-base-200`,i.dragging()),fb(4),$d(` `,cM(7,16,`COMMON.IMAGE_UPLOADS`),` `),fb(2),Ky(`disabled`,i.disabled()),fb(2),U_(i.list()),fb(2),U_(i.uploads()),fb(2),j_(i.length()>i.view_space()?14:-1),fb(),j_(i.length()>i.view_space()?15:-1),fb(2),Ky(`disabled`,i.disabled()),Qy(`aria-label`,cM(19,18,`COMMON.IMAGES`)),fb(3),U_(i.list()),fb(2),Ky(`placeholder`,cM(23,20,`COMMON.IMAGE_ADD_URL`))(`matChipInputFor`,s)(`matChipInputSeparatorKeyCodes`,i.separators)(`matChipInputAddOnBlur`,!0)}},dependencies:[Kt$2,qe,jn,Hn,Wn,zn,ni,J$2,Z$2,Yt$1,mt,z$2,H$2,f],styles:[`[_nghost-%COMP%]{width:100%}[overlay][_ngcontent-%COMP%]{transition:background .2s}[image][_ngcontent-%COMP%]:hover   [actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%]:focus-within   [actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%]:hover > icon[_ngcontent-%COMP%]{opacity:1!important}[image][_ngcontent-%COMP%]:hover   [bg][_ngcontent-%COMP%], [image][_ngcontent-%COMP%]:focus-within   [bg][_ngcontent-%COMP%]{opacity:.4!important}[actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%] > icon[_ngcontent-%COMP%]{transition:opacity .2s}[image][_ngcontent-%COMP%]{transition:transform .2s}
/*# sourceMappingURL=image-list-field.component.css.map */`]})}}return n})();var ao=[`editor`];function oo(n,p){if(n&1){let e=Z_();va$1(0,`button`,20),sM(1,`translate`),ov(`click`,function(){dh(e);return fh(eS(2).insertImage())}),va$1(2,`icon`),OS(3,`image`),Pd()(),va$1(4,`button`,20),sM(5,`translate`),ov(`click`,function(){dh(e);return fh(eS(2).insertAttachment())}),va$1(6,`icon`),OS(7,`attachment`),Pd()()}n&2&&(Qy(`aria-label`,cM(1,2,`COMMON.INSERT_IMAGE`)),fb(4),Qy(`aria-label`,cM(5,4,`COMMON.ATTACH_FILE`)))}function ro(n,p){if(n&1){let e=Z_();va$1(0,`div`,3)(1,`select`,5),ov(`change`,function(i){dh(e);return fh(eS().setFontFace(i))}),va$1(2,`option`,6),OS(3),sM(4,`translate`),Pd(),va$1(5,`option`,7),OS(6,`Arial`),Pd(),va$1(7,`option`,8),OS(8,`Helvetica`),Pd(),va$1(9,`option`,9),OS(10,`Georgia`),Pd(),va$1(11,`option`,10),OS(12,`Times New Roman`),Pd()(),va$1(13,`select`,11),ov(`change`,function(i){dh(e);return fh(eS().setFontSize(i))}),va$1(14,`option`,12),OS(15),sM(16,`translate`),Pd(),va$1(17,`option`,13),OS(18,`12`),Pd(),va$1(19,`option`,14),OS(20,`14`),Pd(),va$1(21,`option`,15),OS(22,`16`),Pd(),va$1(23,`option`,16),OS(24,`18`),Pd(),va$1(25,`option`,17),OS(26,`24`),Pd(),va$1(27,`option`,18),OS(28,`32`),Pd(),va$1(29,`option`,19),OS(30,`48`),Pd()(),va$1(31,`button`,20),sM(32,`translate`),ov(`click`,function(){dh(e);return fh(eS().toggleBold())}),va$1(33,`icon`),OS(34,`format_bold`),Pd()(),va$1(35,`button`,20),sM(36,`translate`),ov(`click`,function(){dh(e);return fh(eS().toggleItalic())}),va$1(37,`icon`),OS(38,`format_italic`),Pd()(),va$1(39,`button`,20),sM(40,`translate`),ov(`click`,function(){dh(e);return fh(eS().toggleUnderline())}),va$1(41,`icon`),OS(42,`format_underlined`),Pd()(),va$1(43,`button`,20),sM(44,`translate`),ov(`click`,function(){dh(e);return fh(eS().makeUnorderedList())}),va$1(45,`icon`),OS(46,`format_list_bulleted`),Pd()(),va$1(47,`button`,20),sM(48,`translate`),ov(`click`,function(){dh(e);return fh(eS().makeOrderedList())}),va$1(49,`icon`),OS(50,`format_list_numbered`),Pd()(),va$1(51,`button`,20),sM(52,`translate`),ov(`click`,function(){dh(e);return fh(eS().insertLink())}),va$1(53,`icon`),OS(54,`link`),Pd()(),P_(55,oo,8,6),Pd()}if(n&2){let e=eS();fb(3),$d(` `,cM(4,39,`FORM.FONT`),` `),fb(12),$d(` `,cM(16,41,`FORM.FONT_SIZE`),` `),fb(16),mv(`border-info`,e.toolbar_state().bold)(`text-info`,e.toolbar_state().bold),Qy(`aria-label`,cM(32,43,`COMMON.BOLD`))(`aria-pressed`,!!e.toolbar_state().bold),fb(4),mv(`border-info`,e.toolbar_state().italic)(`text-info`,e.toolbar_state().italic),Qy(`aria-label`,cM(36,45,`COMMON.ITALIC`))(`aria-pressed`,!!e.toolbar_state().italic),fb(4),mv(`border-info`,e.toolbar_state().underline)(`text-info`,e.toolbar_state().underline),Qy(`aria-label`,cM(40,47,`COMMON.UNDERLINE`))(`aria-pressed`,!!e.toolbar_state().underline),fb(4),mv(`border-info`,e.toolbar_state().unordered_list)(`text-info`,e.toolbar_state().unordered_list),Qy(`aria-label`,cM(44,49,`COMMON.BULLETED_LIST`))(`aria-pressed`,!!e.toolbar_state().unordered_list),fb(4),mv(`border-info`,e.toolbar_state().ordered_list)(`text-info`,e.toolbar_state().ordered_list),Qy(`aria-label`,cM(48,51,`COMMON.NUMBERED_LIST`))(`aria-pressed`,!!e.toolbar_state().ordered_list),fb(4),mv(`border-info`,e.toolbar_state().link)(`text-info`,e.toolbar_state().link),Qy(`aria-label`,cM(52,53,`COMMON.INSERT_LINK`))(`aria-pressed`,!!e.toolbar_state().link),fb(4),j_(e.images_allowed()?55:-1)}}var so=[`http:`,`https:`,`mailto:`];function Zn(n){let p=document.createElement(`template`);return p.innerHTML=n||``,!p.content.textContent?.trim()&&!p.content.querySelector(`img`)}function co(n){let p=n.trim();if(!p)return null;let e=p.includes(`://`)||/^mailto:/i.test(p)?p:`https://${p}`;try{let t=new URL(e);return so.includes(t.protocol)?t.href:null}catch{return null}}var Yn=(()=>{class n extends Pi{constructor(){super(...arguments),this._uploads=y(ns$1),this._dom_sanitizer=y(Fx),this.placeholder=EU(``),this.readonly=EU(!1),this.images_allowed=EU(!1),this.disabled=wt$1(!1),this.is_empty=wt$1(!0),this.is_readonly=Le(()=>this.readonly()||this.disabled()),this._editor_el=wU(`editor`),this._onChange=()=>{},this._onTouch=()=>{},this.toolbar_state=wt$1({bold:!1,italic:!1,underline:!1,unordered_list:!1,ordered_list:!1,link:!1}),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e,this._syncValue=()=>{if(!this._editor)return;let e=this._editor.getHTML();this._updateEmptyState(e),this.setValue(Zn(e)?``:e)},this._handleTouched=()=>{this._editor&&this._onTouch()},this._refreshToolbarState=()=>{this._editor&&this.toolbar_state.set({bold:this._editor.hasFormat(`B`),italic:this._editor.hasFormat(`I`),underline:this._editor.hasFormat(`U`),unordered_list:this._editor.hasFormat(`UL`),ordered_list:this._editor.hasFormat(`OL`),link:this._editor.hasFormat(`A`)})},this._blockImageClick=e=>{this.is_readonly()&&e.target?.nodeName===`IMG`&&e.stopPropagation()}}setDisabledState(e){this.disabled.set(e),this._setReadonlyState()}ngOnChanges(e){e.placeholder&&this._setPlaceholder(),e.readonly&&this._editor&&this._setReadonlyState()}ngAfterViewInit(){this.timeout(`init`,()=>this._initialiseEditor())}setValue(e){this._onChange(e)}writeValue(e){this.timeout(`write`,()=>{this._editor?(this._editor.setHTML(e||``),this._setPlaceholder(),this._updateEmptyState()):this.timeout(`write`,()=>this.writeValue(e))})}toggleBold(){this._toggleFormat(`B`,()=>this._editor.removeBold(),()=>this._editor.bold())}toggleItalic(){this._toggleFormat(`I`,()=>this._editor.removeItalic(),()=>this._editor.italic())}toggleUnderline(){this._toggleFormat(`U`,()=>this._editor.removeUnderline(),()=>this._editor.underline())}makeUnorderedList(){this._toggleFormat(`UL`,()=>this._editor.removeList(),()=>this._editor.makeUnorderedList())}makeOrderedList(){this._toggleFormat(`OL`,()=>this._editor.removeList(),()=>this._editor.makeOrderedList())}insertLink(){if(!this._editor)return;if(this._editor.hasFormat(`A`)){this._editor.removeLink(),this._syncValue(),this._refreshToolbarState();return}let e=prompt(et(`FORM.LINK_URL_PROMPT`));if(!e)return;let t=co(e);if(!t){p_(et(`FORM.LINK_PROTOCOL_ERROR`));return}this._editor.makeLink(t),this._syncValue(),this._refreshToolbarState()}setFontFace(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontFace(t==="default"?`inherit`:t),this._syncValue())}setFontSize(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontSize(t),this._syncValue())}insertImage(){this._embedFile(!0)}insertAttachment(){this._embedFile(!1)}async _initialiseEditor(){let e=this._editor_el()?.nativeElement;if(!e)return this.timeout(`init`,()=>this._initialiseEditor());let{default:t}=await import(`./squire-B0gBI6PO.js`);this._editor&&this._editor.destroy(),e.innerHTML=``,e.removeEventListener(`click`,this._blockImageClick,!0),e.addEventListener(`click`,this._blockImageClick,!0),this._editor=new t(e,{blockTag:`div`,sanitizeToDOMFragment:i=>{let s=this._dom_sanitizer.sanitize(z$1.HTML,i||``)||``,l=document.createElement(`template`);return l.innerHTML=s,l.content.cloneNode(!0)}}),this._editor.addEventListener(`input`,this._syncValue),this._editor.addEventListener(`blur`,this._handleTouched),this._editor.addEventListener(`cursor`,this._refreshToolbarState),this._editor.addEventListener(`select`,this._refreshToolbarState),this._editor.addEventListener(`pathChange`,this._refreshToolbarState),this._setReadonlyState(),this._setPlaceholder(),this._updateEmptyState(),this._refreshToolbarState()}_embedFile(e){if(!this._editor)return;let t=document.createElement(`input`);t.setAttribute(`type`,`file`),e&&t.setAttribute(`accept`,`image/*`),t.click(),t.onchange=()=>{let i=t.files?.[0];i&&this._uploads.uploadFileToCompletion(i,!0).then(s=>{if(!s)return;let l=`${location.origin}/api/engine/v2/uploads/${encodeURIComponent(s)}/url`;this._setAuth(),this._insertUploadedFile(l,i,e),this._syncValue()}).catch(s=>{p_(et(`FORM.UPLOAD_FAILED`,{name:i.name,error:s?.message||et(`FORM.ERROR_UNKNOWN`)}))})}}_setReadonlyState(){this._setRootAttribute(`contenteditable`,`${!this.is_readonly()}`)}_updateEmptyState(e=this._editor?.getHTML()||``){this.is_empty.set(Zn(e))}_setPlaceholder(){this._setRootAttribute(`data-placeholder`,this.placeholder()||``)}_setRootAttribute(e,t){let i=this._editor_el()?.nativeElement;if(!i)return;let s=()=>i.setAttribute(e,t);this._editor?this._editor.modifyDocument(s):s()}_toggleFormat(e,t,i){this._editor&&(this._editor.hasFormat(e)?t():i(),this._syncValue(),this._refreshToolbarState())}_insertUploadedFile(e,t,i){let s=t.type.startsWith(`image/`),l=Ee(t.name),L=Ee(e);if(i||s){this._editor.insertHTML(`<img src="${L}" alt="${l}" />`);return}this._editor.insertHTML(`<a href="${L}" target="_blank" rel="noopener noreferrer">${l}</a>`)}_setAuth(){let e=rt();document.cookie=`${e===`x-api-key`?`api-key=`+encodeURIComponent(Ye()):`bearer_token=`+encodeURIComponent(e)};max-age=30;path=/api/engine/v2/uploads;samesite=strict;${location.protocol===`https:`?`secure;`:``}`}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Yg(n)))(i||n)}})()}static{this.ɵcmp=BT({type:n,selectors:[[`rich-text-input`]],viewQuery:function(t,i){t&1&&lv(i._editor_el,ao,5),t&2&&aS()},inputs:{placeholder:[1,`placeholder`],readonly:[1,`readonly`],images_allowed:[1,`images_allowed`]},features:[qS([H_$1(()=>n)]),Py,Ea$1],decls:5,vars:3,consts:[[`container`,``],[`editor`,``],[1,`w-full`],[1,`border-base-300`,`bg-base-100`,`flex`,`flex-wrap`,`items-center`,`gap-1`,`rounded-t`,`border`,`p-2`],[1,`squire-editor`],[1,`border-base-300`,`bg-base-100`,`rounded`,`border`,`p-2`,`text-sm`,3,`change`],[`value`,`default`],[`value`,`Arial`],[`value`,`Helvetica`],[`value`,`Georgia`],[`value`,`Times New Roman`],[1,`border-base-300`,`bg-base-100`,`min-w-24`,`rounded`,`border`,`p-2`,`text-sm`,3,`change`],[`value`,``],[`value`,`12px`],[`value`,`14px`],[`value`,`16px`],[`value`,`18px`],[`value`,`24px`],[`value`,`32px`],[`value`,`48px`],[`icon`,``,`type`,`button`,1,`border-base-300`,`rounded`,`border`,`px-2`,`py-1`,`text-sm`,3,`click`]],template:function(t,i){t&1&&(va$1(0,`div`,2,0),P_(2,ro,56,55,`div`,3),Xy(3,`div`,4,1),Pd()),t&2&&(mv(`is-empty`,i.is_empty()),fb(2),j_(i.is_readonly()?-1:2))},dependencies:[z$2,f],styles:[`[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]     .squire-editor{position:relative;border-radius:.25rem;border:1px solid var(--%NS%base-300);padding:.5rem;min-height:8rem;width:100%;outline:none}[_nghost-%COMP%]     .is-empty>.squire-editor:before{content:attr(data-placeholder);position:absolute;top:.5rem;left:.5rem;pointer-events:none;color:var(--%NS%base-content);opacity:.5}[_nghost-%COMP%]     .squire-editor ul{list-style-type:disc;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor ol{list-style-type:decimal;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor li{margin:.125rem 0}
/*# sourceMappingURL=rich-text-input.component.css.map */`]})}}return n})();function po(n,p){if(n&1&&(va$1(0,`mat-option`,9),OS(1),Pd()),n&2){let e=p.$implicit;Ky(`value`,e.display_name||e.name),fb(),$d(` `,e.display_name||e.name,` `)}}function mo(n,p){if(n&1&&(va$1(0,`mat-option`,9),OS(1),Pd()),n&2){let e=p.$implicit;Ky(`value`,e?.name||e),fb(),$d(` `,e.name||e,` `)}}function ho(n,p){if(n&1&&(va$1(0,`div`,6)(1,`label`),OS(2),sM(3,`translate`),Pd(),va$1(4,`mat-form-field`,7)(5,`mat-select`,8),sM(6,`translate`),H_(7,mo,2,2,`mat-option`,9,V_),Pd(),Qb(),Pd()()),n&2){let e=eS();fb(2),Tv(cM(3,3,`COMMON.SUPPORT_TYPE`)),fb(3),Ky(`placeholder`,cM(6,5,`COMMON.SUPPORT_TYPE`))(`formField`,e.form.issue_type),Xb(),fb(2),U_(e.support_request_types())}}function uo(n,p){n&1&&(va$1(0,`mat-error`,12),OS(1),sM(2,`translate`),Pd()),n&2&&(fb(),$d(` `,cM(2,1,`COMMON.DESCRIPTION_REQUIRED`),` `))}function _o(n,p){if(n&1&&(va$1(0,`div`,13)(1,`label`,11),OS(2),sM(3,`translate`),Pd(),Xy(4,`image-list-field`,15),Qb(),Pd()),n&2){let e=eS();fb(2),Tv(cM(3,2,`COMMON.IMAGES`)),fb(2),Ky(`formField`,e.form.images),Xb()}}var Jn=(()=>{class n{constructor(){this._dialog_ref=y(T$1),this._org=y(fe),this._settings=y(_0),this._sanitizer=y(Fx),this._support_email=this._settings.signal(`support_email`,`support@place.tech`),this._support_issue_types=this._settings.signal(`support_issue_types`,[]),this._allow_images=this._settings.signal(`allow_support_ticket_images`,!1),this.loading=wt$1(!1),this.model=wt$1({name:``,email:``,location:``,description:``,issue_type:``,images:[]}),this.form=Xt$1(this.model,e=>{Qr$1(e.name),Qr$1(e.email),Xr$2(e.email),Qr$1(e.description)}),this.desc_error=wt$1(!1),this.support_email=this._support_email,this.support_request_types=this._support_issue_types,this.allow_images=this._allow_images,this.buildings=this._org.building_list}ngOnInit(){let e=It$1();e&&this.model.update(t=>m(l({},t),{name:e.name,email:e.email})),this._org.building&&this.model.update(t=>m(l({},t),{location:this._org.building.display_name||this._org.building.name}))}async submit(){if(this.form().markAsTouched(),this._updateDescError(),!this.form().valid())return;let e=this._org.module(`smtp`,`Mailer`);if(!e)return p_(et(`COMMON.SUPPORT_NO_MAILER`));this.loading.set(!0);try{let{name:t,email:i,location:s,description:l,images:L,issue_type:le}=this.model(),rt=L.map(Wt=>new URL(Wt,globalThis.location.origin).href),st=this._sanitizer.sanitize(z$1.HTML,l)||``,Ht=this.support_request_types().find(Wt=>Wt.name===le)?.email||this.support_email(),_a=et(`COMMON.SUPPORT_MAIL_HEADER`,{issue_type:le?` - `+le:``});await e.execute(`send_mail`,[Ht,_a,`${t}
${i}

${s}

${l.replace(/<[^>]+>/g,``)}

${rt.join(`
`)}`,`<p>${Ee(t)}</p><p>${Ee(i)}</p><p>${Ee(s)}</p><p>${st}</p>${rt.map(Ee).join(`<br>`)}`,[],[],[],[],null,`${i}`]),this._dialog_ref.close(),h_(et(`COMMON.SUPPORT_SUCCESS`))}catch(t){p_(et(`COMMON.SUPPORT_FAILED`,{error:t?.message||et(`FORM.ERROR_UNKNOWN`)}))}finally{this.loading.set(!1)}}_updateDescError(){this.desc_error.set(this.form.description().invalid()&&this.form.description().touched())}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=BT({type:n,selectors:[[`support-ticket-modal`]],decls:52,vars:47,consts:[[3,`confirm`,`heading`,`loading`,`confirm_text`],[1,`flex`,`flex-wrap`,`items-center`,`sm:space-x-2`],[1,`flex`,`flex-1`,`flex-col`],[`appearance`,`outline`],[`matInput`,``,3,`placeholder`,`formField`],[`matInput`,``,`type`,`email`,3,`placeholder`,`formField`],[1,`flex`,`flex-col`],[`appearance`,`outline`,1,`w-full`],[3,`placeholder`,`formField`],[3,`value`],[1,``],[1,`mb-4`],[1,`my-2`,`text-xs`],[1,`pt-4`],[1,`mb-2`,`text-center`,`text-xs`,`italic`],[3,`formField`]],template:function(t,i){t&1&&(va$1(0,`fullscreen-modal-shell`,0),sM(1,`translate`),sM(2,`translate`),ov(`confirm`,function(){return i.submit()}),va$1(3,`form`)(4,`div`,1)(5,`div`,2)(6,`label`),OS(7),sM(8,`translate`),va$1(9,`span`),OS(10,`*`),Pd()(),va$1(11,`mat-form-field`,3),Xy(12,`input`,4),sM(13,`translate`),Qb(),va$1(14,`mat-error`),OS(15),sM(16,`translate`),Pd()()(),va$1(17,`div`,2)(18,`label`),OS(19),sM(20,`translate`),va$1(21,`span`),OS(22,`*`),Pd()(),va$1(23,`mat-form-field`,3),Xy(24,`input`,5),sM(25,`translate`),Qb(),va$1(26,`mat-error`),OS(27),sM(28,`translate`),Pd()()()(),va$1(29,`div`,6)(30,`label`),OS(31),sM(32,`translate`),Pd(),va$1(33,`mat-form-field`,7)(34,`mat-select`,8),sM(35,`translate`),H_(36,po,2,2,`mat-option`,9,V_),Pd(),Qb(),Pd()(),P_(38,ho,9,7,`div`,6),va$1(39,`div`,10)(40,`label`,11),OS(41),sM(42,`translate`),va$1(43,`span`),OS(44,`*`),Pd()(),Xy(45,`rich-text-input`,8),sM(46,`translate`),Qb(),P_(47,uo,3,3,`mat-error`,12),Pd(),P_(48,_o,5,4,`div`,13),Pd(),va$1(49,`div`,14),OS(50),sM(51,`translate`),Pd()()),t&2&&(Ky(`heading`,cM(1,21,`COMMON.CONTROLS_SUPPORT`))(`loading`,i.loading()?`true`:``)(`confirm_text`,cM(2,23,`COMMON.SUBMIT`)),fb(7),Tv(cM(8,25,`FORM.NAME`)),fb(5),Ky(`placeholder`,cM(13,27,`FORM.NAME`))(`formField`,i.form.name),Xb(),fb(3),Tv(cM(16,29,`FORM.NAME_REQUIRED`)),fb(4),Tv(cM(20,31,`FORM.EMAIL`)),fb(5),Ky(`placeholder`,cM(25,33,`FORM.EMAIL`))(`formField`,i.form.email),Xb(),fb(3),Tv(cM(28,35,`FORM.EMAIL_REQUIRED`)),fb(4),Tv(cM(32,37,`COMMON.LOCATION`)),fb(3),Ky(`placeholder`,cM(35,39,`COMMON.LOCATION`))(`formField`,i.form.location),Xb(),fb(2),U_(i.buildings()),fb(2),j_(i.support_request_types().length?38:-1),fb(3),$d(` `,cM(42,41,`COMMON.SUPPORT_DESCRIPTION`),` `),fb(4),Ky(`placeholder`,cM(46,43,`COMMON.SUPPORT_DESCRIPTION`))(`formField`,i.form.description),Xb(),fb(2),j_(i.desc_error()?47:-1),fb(),j_(i.allow_images()?48:-1),fb(2),$d(` `,cM(51,45,`COMMON.SUPPORT_MSG`),` `))},dependencies:[PD,Kt$2,qe,ht,Be,Pe,Jr,J$2,f$1,Yn,Xn,Qt$1,Gt$1,X$2,Ht$2,_e,f],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%}
/*# sourceMappingURL=support-ticket-modal.component.css.map */`]})}}return n})();var go=[`knob`];var fo=[`valueIndicatorContainer`];function vo(n,p){if(n&1&&(va$1(0,`div`,2,1)(2,`div`,5)(3,`span`,6),OS(4),Pd()()()),n&2){let e=eS();fb(4),Tv(e.valueIndicatorText)}}var bo=[`trackActive`];var yo=[`*`];function Co(n,p){if(n&1&&Xy(0,`div`),n&2){let e=p.$implicit,t=p.$index,i=eS(3);CS(e===0?`mdc-slider__tick-mark--active`:`mdc-slider__tick-mark--inactive`),gv(`transform`,i._calcTickMarkTransform(t))}}function So(n,p){if(n&1&&H_(0,Co,1,4,`div`,8,B_),n&2)U_(eS(2)._tickMarks)}function xo(n,p){if(n&1&&(va$1(0,`div`,6,1),P_(2,So,2,0),Pd()),n&2){let e=eS();fb(2),j_(e._cachedWidth?2:-1)}}function ko(n,p){if(n&1&&Xy(0,`mat-slider-visual-thumb`,7),n&2){let e=eS();Ky(`discrete`,e.discrete)(`thumbPosition`,1)(`valueIndicatorText`,e.startValueIndicatorText)}}var S=(function(n){return n[n.START=1]=`START`,n[n.END=2]=`END`,n})(S||{});var Ze=(function(n){return n[n.ACTIVE=0]=`ACTIVE`,n[n.INACTIVE=1]=`INACTIVE`,n})(Ze||{});var oi=new w$1(`_MatSlider`);var ea=new w$1(`_MatSliderThumb`);var Io=new w$1(`_MatSliderRangeThumb`);var ta=new w$1(`_MatSliderVisualThumb`);var Mo=(()=>{class n{_cdr=y(pf);_ngZone=y(de);_slider=y(oi);_renderer=y(sr$2);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=y(Qt).nativeElement;_platform=y(m$1);ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let t=this._sliderInputEl,i=this._renderer;this._listenerCleanups=[i.listen(t,`pointermove`,this._onPointerMove),i.listen(t,`pointerdown`,this._onDragStart),i.listen(t,`pointerup`,this._onDragEnd),i.listen(t,`pointerleave`,this._onMouseLeave),i.listen(t,`focus`,this._onFocus),i.listen(t,`blur`,this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e())}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let t=this._hostElement.getBoundingClientRect(),i=this._slider._isCursorOnSliderThumb(e,t);this._isHovered=i,i?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add(`mdc-slider__thumb--focused`)};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove(`mdc-slider__thumb--focused`)};_onDragStart=e=>{e.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add(`mat-mdc-slider-hover-ripple`))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add(`mat-mdc-slider-focus-ripple`))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add(`mat-mdc-slider-active-ripple`))}_isShowingRipple(e){return e?.state===l$1.FADING_IN||e?.state===l$1.VISIBLE}_showRipple(e,t){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===S.START?S.END:S.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!t)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:!0,persistent:!0})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let t=this._getSibling();t._isShowingAnyRipple()||(this._hideValueIndicator(),t._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add(`mdc-slider__thumb--with-indicator`)}_hideValueIndicator(){this._hostElement.classList.remove(`mdc-slider__thumb--with-indicator`)}_getSibling(){return this._slider._getThumb(this.thumbPosition===S.START?S.END:S.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static ɵfac=function(t){return new(t||n)};static ɵcmp=BT({type:n,selectors:[[`mat-slider-visual-thumb`]],viewQuery:function(t,i){if(t&1&&cv(vt$1,5)(go,5)(fo,5),t&2){let s;iS(s=sS())&&(i._ripple=s.first),iS(s=sS())&&(i._knob=s.first),iS(s=sS())&&(i._valueIndicatorContainer=s.first)}},hostAttrs:[1,`mdc-slider__thumb`,`mat-mdc-slider-visual-thumb`],inputs:{discrete:`discrete`,thumbPosition:`thumbPosition`,valueIndicatorText:`valueIndicatorText`},features:[qS([{provide:ta,useExisting:n}])],decls:4,vars:2,consts:[[`knob`,``],[`valueIndicatorContainer`,``],[1,`mdc-slider__value-indicator-container`],[1,`mdc-slider__thumb-knob`],[`matRipple`,``,1,`mat-focus-indicator`,3,`matRippleDisabled`],[1,`mdc-slider__value-indicator`],[1,`mdc-slider__value-indicator-text`]],template:function(t,i){t&1&&(P_(0,vo,5,1,`div`,2),Xy(1,`div`,3,0)(3,`div`,4)),t&2&&(j_(i.discrete?0:-1),fb(3),Ky(`matRippleDisabled`,!0))},dependencies:[vt$1],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
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
`],encapsulation:2})}return n})();var Gt=(()=>{class n{_ngZone=y(de);_cdr=y(pf);_elementRef=y(Qt);_dir=y(jt$1,{optional:!0});_globalRippleOptions=y(Q$2,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let t=this._getInput(S.END),i=this._getInput(S.START);t&&(t.disabled=this._disabled),i&&(i.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(e){let t=e==null||isNaN(e)?this._min:e;this._min!==t&&this._updateMin(t)}_min=0;color;disableRipple=!1;_updateMin(e){let t=this._min;this._min=e,this._isRange?this._updateMinRange({old:t,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange()}_updateMinRange(e){let t=this._getInput(S.END),i=this._getInput(S.START),s=t.value,l=i.value;i.min=e.new,t.min=Math.max(e.new,i.value),i.max=Math.min(t.max,t.value),i._updateWidthInactive(),t._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(t,i):this._onTranslateXChangeBySideEffect(i,t),s!==t.value&&this._onValueChange(t),l!==i.value&&this._onValueChange(i)}_updateMinNonRange(e){let t=this._getInput(S.END);if(t){let i=t.value;t.min=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t)}}get max(){return this._max}set max(e){let t=e==null||isNaN(e)?this._max:e;this._max!==t&&this._updateMax(t)}_max=100;_updateMax(e){let t=this._max;this._max=e,this._isRange?this._updateMaxRange({old:t,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange()}_updateMaxRange(e){let t=this._getInput(S.END),i=this._getInput(S.START),s=t.value,l=i.value;t.max=e.new,i.max=Math.min(e.new,t.value),t.min=i.value,t._updateWidthInactive(),i._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(i,t):this._onTranslateXChangeBySideEffect(t,i),s!==t.value&&this._onValueChange(t),l!==i.value&&this._onValueChange(i)}_updateMaxNonRange(e){let t=this._getInput(S.END);if(t){let i=t.value;t.max=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t)}}get step(){return this._step}set step(e){let t=isNaN(e)?this._step:e;this._step!==t&&this._updateStep(t)}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let e=this._getInput(S.END),t=this._getInput(S.START),i=e.value,s=t.value,l=t.value;e.min=this._min,t.max=this._max,e.step=this._step,t.step=this._step,this._platform.SAFARI&&(e.value=e.value,t.value=t.value),e.min=Math.max(this._min,t.value),t.max=Math.min(this._max,e.value),t._updateWidthInactive(),e._updateWidthInactive(),e.value<l?this._onTranslateXChangeBySideEffect(t,e):this._onTranslateXChangeBySideEffect(e,t),i!==e.value&&this._onValueChange(e),s!==t.value&&this._onValueChange(t)}_updateStepNonRange(){let e=this._getInput(S.END);if(e){let t=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),t!==e.value&&this._onValueChange(e)}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=as$1();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText=``;endValueIndicatorText=``;_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=Le(()=>this._dir?.valueSignal()===`rtl`);_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=y(m$1);constructor(){y(L$1).load(Tt$1);let e=this._isRtl();_U(()=>{let t=this._isRtl();t!==e&&(e=t,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(S.END),t=this._getInput(S.START);this._isRange=!!e&&!!t,this._cdr.detectChanges();let i=this._getThumb(S.END);this._rippleRadius=i._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,t):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=!0,e._updateThumbUIByValue()}_initUIRange(e,t){e.initProps(),e.initUI(),t.initProps(),t.initUI(),e._updateMinMax(),t._updateMinMax(),e._updateStaticStyles(),t._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,e._updateThumbUIByValue(),t._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let e=this._getInput(S.END),t=this._getInput(S.START);e._setIsLeftThumb(),t._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),t.translateX=t._calcTranslateXByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateWidthInactive(),t._updateWidthInactive(),e._updateThumbUIByValue(),t._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(S.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>`u`||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(S.START)._isActive||this._getThumb(S.END)._isActive}_getValue(e=S.END){let t=this._getInput(e);return t?t.value:this.min}_skipUpdate(){return!!(this._getInput(S.START)?._skipUIUpdate||this._getInput(S.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(e){let t=this._trackActive.nativeElement.style;t.left=e.left,t.right=e.right,t.transformOrigin=e.transformOrigin,t.transform=e.transform}_calcTickMarkTransform(e){let t=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-t:t}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e))}_onTranslateXChangeBySideEffect(e,t){this._hasViewInitialized&&(e._updateThumbUIByValue(),t._updateThumbUIByValue())}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(S.END),t=this._getInput(S.START);e._updateThumbUIByValue(),t._updateThumbUIByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateMinMax(),t._updateMinMax(),e._updateWidthInactive(),t._updateWidthInactive()}else{let e=this._getInput(S.END);e&&e._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let e=this._getInput(S.START),t=this._getInput(S.END);return!e||!t?!1:t.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let t=e.getSibling(),i=this._getThumb(e.thumbPosition);this._getThumb(t.thumbPosition)._hostElement.classList.remove(`mdc-slider__thumb--top`),i._hostElement.classList.toggle(`mdc-slider__thumb--top`,this._thumbsOverlap)}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e))}_updateThumbUI(e){if(this._skipUpdate())return;let t=this._getThumb(e.thumbPosition===S.END?S.END:S.START);t._hostElement.style.transform=`translateX(${e.translateX}px)`}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let t=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(t):e._hostElement.setAttribute(`aria-valuetext`,t),this.discrete){e.thumbPosition===S.START?this.startValueIndicatorText=t:this.endValueIndicatorText=t;let i=this._getThumb(e.thumbPosition);t.length<3?i._hostElement.classList.add(`mdc-slider__thumb--short-value`):i._hostElement.classList.remove(`mdc-slider__thumb--short-value`)}}_updateValueIndicatorUIs(){let e=this._getInput(S.END),t=this._getInput(S.START);e&&this._updateValueIndicatorUI(e),t&&this._updateValueIndicatorUI(t)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,i=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*i}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e))}_updateTrackUIRange(e){let t=e.getSibling();if(!t||!this._cachedWidth)return;let i=Math.abs(t.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:`auto`,right:`${this._cachedWidth-t.translateX}px`,transformOrigin:`right`,transform:`scaleX(${i})`}):this._setTrackActiveStyles({left:`${t.translateX}px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${i})`})}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:`auto`,right:`0px`,transformOrigin:`right`,transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:`0px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${e.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e)}_updateTickMarkUINonRange(e){let t=this._getValue(),i=Math.max(Math.round((t-this.min)/e),0)+1,s=Math.max(Math.round((this.max-t)/e),0)-1;this._isRtl()?i++:s++,this._tickMarks=Array(i).fill(Ze.ACTIVE).concat(Array(s).fill(Ze.INACTIVE))}_updateTickMarkUIRange(e){let t=this._getValue(),i=this._getValue(S.START),s=Math.max(Math.round((i-this.min)/e),0),l=Math.max(Math.round((t-i)/e)+1,0),L=Math.max(Math.round((this.max-t)/e),0);this._tickMarks=Array(s).fill(Ze.INACTIVE).concat(Array(l).fill(Ze.ACTIVE),Array(L).fill(Ze.INACTIVE))}_getInput(e){if(e===S.END&&this._input)return this._input;if(this._inputs?.length)return e===S.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===S.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle(`mat-mdc-slider-with-animation`,this._hasAnimation)}_isCursorOnSliderThumb(e,t){let i=t.width/2,s=t.x+i,l=t.y+i,L=e.clientX-s,le=e.clientY-l;return Math.pow(L,2)+Math.pow(le,2)<Math.pow(i,2)}static ɵfac=function(t){return new(t||n)};static ɵcmp=BT({type:n,selectors:[[`mat-slider`]],contentQueries:function(t,i,s){if(t&1&&av(s,ea,5)(s,Io,4),t&2){let l;iS(l=sS())&&(i._input=l.first),iS(l=sS())&&(i._inputs=l)}},viewQuery:function(t,i){if(t&1&&cv(bo,5)(ta,5),t&2){let s;iS(s=sS())&&(i._trackActive=s.first),iS(s=sS())&&(i._thumbs=s)}},hostAttrs:[1,`mat-mdc-slider`,`mdc-slider`],hostVars:12,hostBindings:function(t,i){t&2&&(CS(`mat-`+(i.color||`primary`)),mv(`mdc-slider--range`,i._isRange)(`mdc-slider--disabled`,i.disabled)(`mdc-slider--discrete`,i.discrete)(`mdc-slider--tick-marks`,i.showTickMarks)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{disabled:[2,`disabled`,`disabled`,ZM],discrete:[2,`discrete`,`discrete`,ZM],showTickMarks:[2,`showTickMarks`,`showTickMarks`,ZM],min:[2,`min`,`min`,YM],color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,ZM],max:[2,`max`,`max`,YM],step:[2,`step`,`step`,YM],displayWith:`displayWith`},exportAs:[`matSlider`],features:[qS([{provide:oi,useExisting:n}])],ngContentSelectors:yo,decls:9,vars:5,consts:[[`trackActive`,``],[`tickMarkContainer`,``],[1,`mdc-slider__track`],[1,`mdc-slider__track--inactive`],[1,`mdc-slider__track--active`],[1,`mdc-slider__track--active_fill`],[1,`mdc-slider__tick-marks`],[3,`discrete`,`thumbPosition`,`valueIndicatorText`],[3,`class`,`transform`]],template:function(t,i){t&1&&(nS(),rS(0),va$1(1,`div`,2),Xy(2,`div`,3),va$1(3,`div`,4),Xy(4,`div`,5,0),Pd(),P_(6,xo,3,1,`div`,6),Pd(),P_(7,ko,1,3,`mat-slider-visual-thumb`,7),Xy(8,`mat-slider-visual-thumb`,7)),t&2&&(fb(6),j_(i.showTickMarks?6:-1),fb(),j_(i._isRange?7:-1),fb(),Ky(`discrete`,i.discrete)(`thumbPosition`,2)(`valueIndicatorText`,i.endValueIndicatorText))},dependencies:[Mo],styles:[`.mdc-slider__track {
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
`],encapsulation:2})}return n})();var Eo={provide:me,useExisting:Is(()=>ot),multi:!0};var ot=(()=>{class n{_ngZone=y(de);_elementRef=y(Qt);_cdr=y(pf);_slider=y(oi);_platform=y(m$1);_listenerCleanups;get value(){return YM(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let t=e+``;if(!this._hasSetInitialValue){this._initialValue=t;return}this._isActive||this._setValue(t)}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new Ht$1;dragStart=new Ht$1;dragEnd=new Ht$1;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e}_translateX;thumbPosition=S.END;get min(){return YM(this._hostElement.min,0)}set min(e){this._hostElement.min=e+``,this._cdr.detectChanges()}get max(){return YM(this._hostElement.max,0)}set max(e){this._hostElement.max=e+``,this._cdr.detectChanges()}get step(){return YM(this._hostElement.step,0)}set step(e){this._hostElement.step=e+``,this._cdr.detectChanges()}get disabled(){return ZM(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=wt$1(``);_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(e){this._isFocused=e}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new pe;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let e=y(sr$2);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,`pointerdown`,this._onPointerDown.bind(this)),e.listen(this._hostElement,`pointermove`,this._onPointerMove.bind(this)),e.listen(this._hostElement,`pointerup`,this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!this._isActive}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let t=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=t,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(e){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(e)},0)}_fixValue(e){let t=e.clientX-this._slider._cachedLeft,i=this._slider._cachedWidth,s=this._slider.step===0?1:this._slider.step,l=Math.floor((this._slider.max-this._slider.min)/s),L=this._slider._isRtl()?1-t/i:t/i,rt=Math.round(L*l)/l*(this._slider.max-this._slider.min)+this._slider.min,st=Math.round(rt/s)*s;if(st===this.value){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=st,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation})}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(e){let t=this._tickMarkOffset,i=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,i),t)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e)}_updateThumbUIByPointerEvent(e,t){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(t)}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e)}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=!0}registerOnTouched(e){this._onTouchedFn=e}setDisabledState(e){this.disabled=e}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static ɵfac=function(t){return new(t||n)};static ɵdir=at({type:n,selectors:[[`input`,`matSliderThumb`,``]],hostAttrs:[`type`,`range`,1,`mdc-slider__input`],hostVars:1,hostBindings:function(t,i){t&1&&ov(`change`,function(){return i._onChange()})(`input`,function(){return i._onInput()})(`blur`,function(){return i._onBlur()})(`focus`,function(){return i._onFocus()}),t&2&&Qy(`aria-valuetext`,i._valuetext())},inputs:{value:[2,`value`,`value`,YM]},outputs:{valueChange:`valueChange`,dragStart:`dragStart`,dragEnd:`dragEnd`},exportAs:[`matSliderThumb`],features:[qS([Eo,{provide:ea,useExisting:n}])]})}return n})();var zt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=di({type:n});static ɵinj=Ar$1({imports:[f$1,ns]})}return n})();function wo(n,p){if(n&1){let e=Z_();va$1(0,`settings-toggle`,6),ov(`ngModelChange`,function(i){dh(e);return fh(eS().setDarkMode(i))}),va$1(1,`div`,7)(2,`icon`,8),OS(3,`mode_night`),Pd(),va$1(4,`div`),OS(5),sM(6,`translate`),Pd()()(),Qb()}if(n&2)Ky(`ngModel`,eS().dark_mode())(`toggle`,!0),Xb(),fb(5),Tv(cM(6,3,`COMMON.DARK_MODE`))}function No(n,p){if(n&1){let e=Z_();va$1(0,`settings-toggle`,6),ov(`ngModelChange`,function(i){dh(e);return fh(eS().setLocatable(i))}),va$1(1,`div`,7)(2,`icon`,8),OS(3,`emergency_share`),Pd(),va$1(4,`div`),OS(5),sM(6,`translate`),Pd()()(),Qb()}if(n&2)Ky(`ngModel`,eS().locatable())(`toggle`,!0),Xb(),fb(5),Tv(cM(6,3,`COMMON.LOCATABLE`))}function To(n,p){if(n&1){let e=Z_();va$1(0,`div`,9),OS(1),sM(2,`translate`),Pd(),va$1(3,`div`,10)(4,`span`,11),OS(5,`A`),Pd(),va$1(6,`mat-slider`,12)(7,`input`,13),sM(8,`translate`),ov(`ngModelChange`,function(i){dh(e);return fh(eS().applySetting(`font_size`,i))}),Pd(),Qb(),Pd(),va$1(9,`span`,2),OS(10,`A`),Pd(),va$1(11,`span`,14),OS(12),Pd()()}if(n&2){let e=eS();fb(),$d(` `,cM(2,7,`COMMON.TEXT_SIZE_MSG`),` `),fb(5),Ky(`min`,10)(`max`,24)(`step`,2),fb(),Ky(`ngModel`,e.font_size()),Qy(`aria-label`,cM(8,9,`COMMON.TEXT_SIZE`)),Xb(),fb(5),$d(` `,e.font_size(),`px `)}}var na=(()=>{class n extends Pi{constructor(){super(...arguments),this._data=y(oe$2),this._settings=y(_0),this.accessible=wt$1(!1),this.locatable=wt$1(!1),this.can_locate=pr$1(`allow_locatability_option`,!0),this._allow_dark_mode=this._settings.signal(`allow_dark_mode`,!1),this._font_size=this._settings.signal(`font_size`,16,!0),this._accessible=this._settings.signal(`accessible`,!1,!0),this._theme=this._settings.theme_signal,this.dark_mode=Le(()=>this._theme()===`dark`),this.can_change_dark_mode=Le(()=>!!this._allow_dark_mode()),this.font_size=this._font_size,this.applySetting=(e,t)=>this.timeout(`apply_setting`,()=>{this._settings.saveUserSetting(e,t),e===`accessible`&&this.accessible.set(t)},500),this.close=()=>this._data?.close(),this.setLocatable=e=>{this._settings.updateLocatable(e),this.locatable.set(e)}}async ngOnInit(){this.accessible.set(!!this._accessible()),this.subscription(`user`,Yy$1.subscribe(e=>{this.locatable.set(e.locatable)}))}setDarkMode(e){let t=this._theme();e&&t!==`dark`?this._settings.setTheme(`dark`):!e&&t===`dark`&&this._settings.setTheme(`light`)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Yg(n)))(i||n)}})()}static{this.ɵcmp=BT({type:n,selectors:[[`accessibility-tooltip`]],features:[Py],decls:18,vars:11,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-[20rem]`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`],[`back`,``,`type`,`button`,`matRipple`,``,1,`border-base-300`,`flex`,`w-full`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`,`text-left`,3,`click`],[1,`text-2xl`],[1,``],[1,`space-y-2`,`p-2`],[3,`ngModel`,`toggle`],[3,`ngModelChange`,`ngModel`,`toggle`],[1,`flex`,`items-center`,`space-x-2`],[1,`-ml-2`,`text-xl`],[1,`bg-base-200`,`px-8`,`py-4`,`text-center`],[1,`flex`,`items-center`,`space-x-4`,`px-4`],[1,`text-sm`],[1,`w-1/2`,`flex-1`,`text-[16px]`,3,`min`,`max`,`step`],[`matSliderThumb`,``,1,`text-[16px]`,3,`ngModelChange`,`ngModel`],[1,`bg-base-300`,`text-base-content`,`my-2`,`rounded-sm`,`px-2`,`py-1`,`text-base`]],template:function(t,i){t&1&&(va$1(0,`div`,0)(1,`button`,1),ov(`click`,function(){return i.close()}),va$1(2,`icon`,2),OS(3,`arrow_back`),Pd(),va$1(4,`div`,3),OS(5),sM(6,`translate`),Pd()(),va$1(7,`div`,4),P_(8,wo,7,5,`settings-toggle`,5),P_(9,No,7,5,`settings-toggle`,5),va$1(10,`settings-toggle`,6),ov(`ngModelChange`,function(l){return i.applySetting(`accessible`,l)}),va$1(11,`div`,7)(12,`icon`,8),OS(13,`playlist_add`),Pd(),va$1(14,`div`),OS(15),sM(16,`translate`),Pd()()(),Qb(),Pd(),P_(17,To,13,11),Pd()),t&2&&(fb(5),$d(` `,cM(6,7,`COMMON.CONTROLS_ACCESSIBILITY`),` `),fb(3),j_(i.can_change_dark_mode()?8:-1),fb(),j_(i.can_locate()?9:-1),fb(),Ky(`ngModel`,i.accessible())(`toggle`,!0),Xb(),fb(5),Tv(cM(16,9,`COMMON.TEXT_SIZE`)),fb(2),j_(i.accessible()?17:-1))},dependencies:[f$1,vt$1,zt,Gt,ot,ie$1,z$2,wp,Qs,gp,wc,f],encapsulation:2})}}return n})();function Ro(n,p){if(n&1){let e=Z_();va$1(0,`mat-radio-button`,8),ov(`click`,function(){let i=dh(e).$implicit;return fh(eS().pick(i.id))})(`keydown.enter`,function(){let i=dh(e).$implicit;return fh(eS().pick(i.id))}),OS(1),Pd()}if(n&2){let e=p.$implicit;Ky(`value`,e.id),fb(),$d(` `,e.display_name||e.name,` `)}}var aa=(()=>{class n{constructor(){this._data=y(oe$2),this._org=y(fe),this.is_region=this._data?.data===`region`,this.label=this.is_region?`COMMON.REGION_SELECT`:`COMMON.BUILDING_SELECT`,this.items=this.is_region?this._org.region_list:this._org.active_buildings,this.active=this.is_region?this._org.active_region:this._org.active_building,this.arrow_key=!1,this.close=()=>this._data?.close()}async pick(e){if(!this.arrow_key){if(this.is_region){let t=this._org.region_list().find(i=>i.id===e);await this._org.setRegion(t),this._org.setBuilding(this._org.building,!0)}else{let t=this._org.active_buildings().find(i=>i.id===e);this._org.setBuilding(t,!0)}this.close()}}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=BT({type:n,selectors:[[`building-select`]],decls:17,vars:11,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-74`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`],[`back`,``,`type`,`button`,`matRipple`,``,1,`border-base-300`,`flex`,`w-full`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`,`text-left`,3,`click`],[1,`text-2xl`],[1,`leading-tight`],[1,`text-xs`,`opacity-30`],[1,`px-4`,`py-2`,`text-xs`,`opacity-60`],[1,`flex`,`flex-col`,`space-y-2`,`px-2`,3,`keydown`,`keyup`,`ngModel`],[3,`value`],[3,`click`,`keydown.enter`,`value`]],template:function(t,i){t&1&&(va$1(0,`div`,0)(1,`button`,1),ov(`click`,function(){return i.close()}),va$1(2,`icon`,2),OS(3,`arrow_back`),Pd(),va$1(4,`div`,3)(5,`div`),OS(6),Pd(),va$1(7,`div`,4),OS(8),sM(9,`translate`),Pd()()(),va$1(10,`div`,5),OS(11),sM(12,`translate`),Pd(),va$1(13,`mat-radio-group`,6),sM(14,`translate`),ov(`keydown`,function(l){return i.arrow_key=l.key.startsWith(`Arrow`)})(`keyup`,function(){return i.arrow_key=!1}),H_(15,Ro,2,2,`mat-radio-button`,7,V_),Pd(),Qb(),Pd()),t&2&&(fb(6),$d(` `,i.active()?.display_name||i.active()?.name,` `),fb(2),$d(` `,cM(9,5,i.is_region?`RESOURCE.REGION`:`RESOURCE.BUILDING`),` `),fb(3),$d(` `,cM(12,7,i.label),` `),fb(2),Ky(`ngModel`,i.active()?.id),Qy(`aria-label`,cM(14,9,i.label)),Xb(),fb(2),U_(i.items()))},dependencies:[On,Xt,Ut,z$2,f$1,vt$1,wp,gp,wc,f],encapsulation:2})}}return n})();function Oo(n,p){n&1&&(va$1(0,`div`,3),OS(1),sM(2,`translate`),Pd()),n&2&&(fb(),$d(` `,cM(2,1,`COMMON.DESK_HEIGHT_NOT_SET`),` `))}function Ao(n,p){if(n&1){let e=Z_();va$1(0,`button`,16),ov(`click`,function(){dh(e);return fh(eS().onClose())}),OS(1),sM(2,`translate`),Pd()}n&2&&(fb(),$d(` `,cM(2,1,`COMMON.SAVE`),` `))}var oa=(()=>{class n{constructor(){this._settings=y(_0),this.show_close=IU(!1),this.close=DU(),this.not_set=wt$1(!1),this.desk_sitting_height=wt$1(71),this.desk_standing_height=wt$1(101)}ngOnInit(){this.not_set.set(!this._settings.get(`desk_sitting_height`)&&!this._settings.get(`desk_standing_height`)),this.desk_sitting_height.set(this._settings.get(`desk_sitting_height`)||71),this.desk_standing_height.set(this._settings.get(`desk_standing_height`)||101)}onClose(){this.saveSetting(`desk_sitting_height`,this.desk_sitting_height()),this.saveSetting(`desk_standing_height`,this.desk_standing_height()),this.close.emit()}formatLabel(e){return`${e.toFixed(1)}cm`}saveSetting(e,t){this._settings.saveUserSetting(e,t)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=BT({type:n,selectors:[[`desk-height-presets`]],inputs:{show_close:[1,`show_close`]},outputs:{show_close:`show_closeChange`,close:`close`},decls:29,vars:23,consts:[[1,`bg-base-100`,`relative`,`w-[20rem]`,`rounded-sm`,`p-4`,`shadow-sm`],[1,`mb-2`,`text-lg`],[1,`mb-4`,`text-xs`,`opacity-60`],[1,`bg-warning`,`text-warning-content`,`-mx-2`,`mb-4`,`rounded-sm`,`p-2`,`text-xs`],[1,`mt-2`,`flex`,`flex-col`],[`for`,`desk-sitting-height`],[1,`flex`,`items-center`,`space-x-2`],[`min`,`60`,`max`,`80`,`step`,`0.5`,`discrete`,``,1,`flex-1`,3,`displayWith`],[`matSliderThumb`,``,`id`,`desk-sitting-height`,3,`ngModelChange`,`ngModel`],[1,`w-12`,`text-right`,`text-sm`],[`for`,`desk-standing-height`],[1,`mr-2`,`flex`,`items-center`,`space-x-2`],[`min`,`90`,`max`,`120`,`step`,`0.5`,`discrete`,``,1,`flex-1`,3,`displayWith`],[`matSliderThumb`,``,`id`,`desk-standing-height`,3,`ngModelChange`,`ngModel`],[1,`mr-2`,`w-12`,`text-right`,`text-sm`],[`btn`,``,`matRipple`,``,1,`mt-2`,`w-full`],[`btn`,``,`matRipple`,``,1,`mt-2`,`w-full`,3,`click`]],template:function(t,i){t&1&&(va$1(0,`div`,0)(1,`div`,1),OS(2),sM(3,`translate`),Pd(),va$1(4,`div`,2),OS(5),sM(6,`translate`),Pd(),P_(7,Oo,3,3,`div`,3),va$1(8,`div`,2),OS(9),sM(10,`translate`),Pd(),va$1(11,`div`,4)(12,`label`,5),OS(13),sM(14,`translate`),Pd(),va$1(15,`div`,6)(16,`mat-slider`,7)(17,`input`,8),ov(`ngModelChange`,function(l){return i.desk_sitting_height.set(l),i.saveSetting(`desk_sitting_height`,l)}),Pd(),Qb(),Pd(),va$1(18,`div`,9),OS(19),Pd()(),va$1(20,`label`,10),OS(21),sM(22,`translate`),Pd(),va$1(23,`div`,11)(24,`mat-slider`,12)(25,`input`,13),ov(`ngModelChange`,function(l){return i.desk_standing_height.set(l),i.saveSetting(`desk_standing_height`,l)}),Pd(),Qb(),Pd(),va$1(26,`div`,14),OS(27),Pd()()(),P_(28,Ao,3,3,`button`,15),Pd()),t&2&&(fb(2),$d(` `,cM(3,13,`COMMON.DESK_HEIGHT_TITLE`),` `),fb(3),$d(` `,cM(6,15,`COMMON.DESK_HEIGHT_MSG`),` `),fb(2),j_(i.not_set()&&i.show_close()?7:-1),fb(2),$d(` `,cM(10,17,`COMMON.DESK_HEIGHT_INFO`),` `),fb(4),Tv(cM(14,19,`COMMON.DESK_HEIGHT_SITTING`)),fb(3),Ky(`displayWith`,i.formatLabel),fb(),Ky(`ngModel`,i.desk_sitting_height()),Xb(),fb(2),$d(` `,i.desk_sitting_height().toFixed(1),`cm `),fb(2),Tv(cM(22,21,`COMMON.DESK_HEIGHT_STANDING`)),fb(3),Ky(`displayWith`,i.formatLabel),fb(),Ky(`ngModel`,i.desk_standing_height()),Xb(),fb(2),$d(` `,i.desk_standing_height().toFixed(1),`cm `),fb(),j_(i.show_close()?28:-1))},dependencies:[f$1,vt$1,zt,Gt,ot,wp,Qs,gp,wc,f],encapsulation:2})}}return n})();function Do(n,p){if(n&1&&(va$1(0,`a`,4)(1,`div`,5),Xy(2,`icon`,6),va$1(3,`div`),OS(4),Pd()()()),n&2){let e=p.$implicit;Ky(`href`,e.link,Cm),fb(2),Ky(`icon`,e.icon),fb(2),Tv(e.name)}}var ra=(()=>{class n{constructor(){this._data=y(oe$2),this._settings=y(_0),this._tiles=this._settings.signal(`help`,[]),this.close=()=>{this._data?.close()}}get tiles(){return this._tiles()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=BT({type:n,selectors:[[`help-tooltip`]],decls:9,vars:3,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`w-74`,`flex-col`,`rounded-sm`,`shadow-sm`,3,`click`],[`back`,``,`type`,`button`,`matRipple`,``,1,`border-base-300`,`flex`,`w-full`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-4`,`text-left`],[1,`text-2xl`],[1,``],[`matRipple`,``,`target`,`_blank`,`rel`,`noopener noreferrer`,1,`w-full`,`p-2`,`text-left`,3,`href`],[1,`hover:bg-base-200`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-sm`,`p-2`],[1,`text-xl`,3,`icon`]],template:function(t,i){t&1&&(va$1(0,`div`,0),ov(`click`,function(){return i.close()}),va$1(1,`button`,1)(2,`icon`,2),OS(3,`arrow_back`),Pd(),va$1(4,`div`,3),OS(5),sM(6,`translate`),Pd()(),H_(7,Do,5,3,`a`,4,V_),Pd()),t&2&&(fb(5),Tv(cM(6,1,`COMMON.CONTROLS_HELP`)),fb(2),U_(i.tiles))},dependencies:[f$1,vt$1,z$2,f],encapsulation:2})}}return n})();var Po=(n,p)=>p.id;function Fo(n,p){if(n&1&&(va$1(0,`div`,8),OS(1),Pd()),n&2){let e=eS().$implicit;fb(),$d(` `,e.local,` `)}}function Lo(n,p){if(n&1){let e=Z_();va$1(0,`button`,6),ov(`click`,function(){let i=dh(e).$implicit;return fh(eS().setLocale(i.id))}),va$1(1,`div`,7),sM(2,`translate`),va$1(3,`div`),OS(4),sM(5,`translate`),Pd(),P_(6,Fo,2,1,`div`,8),sM(7,`translate`),Pd()()}if(n&2){let e=p.$implicit,t=eS();fb(),mv(`mt-2`,cM(2,8,e.name)!==e.local)(`border`,t.active_locale===e.id)(`border-info`,t.active_locale===e.id),fb(3),Tv(cM(5,10,e.name)),fb(2),j_(cM(7,12,e.name)!==e.local?6:-1)}}var sa=(()=>{class n{constructor(){this._data=y(oe$2),this._settings=y(_0),this._locale=y(_g),this._locales=this._settings.signal(`locales`,[]),this.setLocale=e=>{this._locale.setLocale(e),localStorage.setItem(`PLACEOS.locale`,e),setTimeout(()=>location.reload(),300)},this.close=()=>this._data?.close()}get active_locale(){return this._locale.locale}get locales(){return this._locales()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=BT({type:n,selectors:[[`language-select`]],decls:12,vars:6,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-74`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`,3,`click`],[`back`,``,`type`,`button`,`matRipple`,``,1,`border-base-300`,`flex`,`w-full`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`,`text-left`],[1,`text-2xl`],[1,``],[1,`px-4`,`py-2`,`text-xs`,`opacity-60`],[`matRipple`,``,1,`flex`,`h-14`,`items-center`,`justify-between`,`space-x-8`,`px-2`,`text-left`],[`matRipple`,``,1,`flex`,`h-14`,`items-center`,`justify-between`,`space-x-8`,`px-2`,`text-left`,3,`click`],[1,`hover:bg-base-200`,`flex`,`flex-1`,`items-center`,`justify-between`,`rounded-sm`,`p-2`,`leading-tight`],[1,`bg-base-300`,`rounded-sm`,`px-2`,`py-1`,`text-xs`,`opacity-60`]],template:function(t,i){t&1&&(va$1(0,`div`,0),ov(`click`,function(){return i.close()}),va$1(1,`button`,1)(2,`icon`,2),OS(3,`arrow_back`),Pd(),va$1(4,`div`,3),OS(5),sM(6,`translate`),Pd()(),va$1(7,`div`,4),OS(8),sM(9,`translate`),Pd(),H_(10,Lo,8,14,`button`,5,Po),Pd()),t&2&&(fb(5),Tv(cM(6,2,`COMMON.LANGUAGE`)),fb(3),$d(` `,cM(9,4,`COMMON.LANGUAGE_SELECT`),` `),fb(2),U_(i.locales))},dependencies:[f$1,vt$1,z$2,f],encapsulation:2})}}return n})();var ca=(()=>{class n{constructor(){this._settings=y(_0),this._tooltip=y(oe$2,{optional:!0}),this.plate_number=wt$1(``)}async ngOnInit(){await J_(this._settings.initialised),this.plate_number.set(this._settings.get(`plate_number`)||``)}save(){this._settings.saveUserSetting(`plate_number`,this.plate_number()),h_(et(`COMMON.PARKING_SETTINGS_SAVE`)),this._tooltip?.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=BT({type:n,selectors:[[`user-parking-tooltip`]],decls:14,vars:13,consts:[[1,`border-base-300`,`bg-base-100`,`min-w-[20rem]`,`space-y-2`,`rounded-md`,`border`,`p-2`],[1,`border-base-300`,`border-b`,`text-lg`,`font-medium`],[1,`flex`,`flex-col`],[`for`,`user-parking-plate-number`],[`appearance`,`outline`,1,`no-subscript`],[`matInput`,``,`id`,`user-parking-plate-number`,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`]],template:function(t,i){t&1&&(va$1(0,`div`,0)(1,`h3`,1),OS(2),sM(3,`translate`),Pd(),va$1(4,`div`,2)(5,`label`,3),OS(6),sM(7,`translate`),Pd(),va$1(8,`mat-form-field`,4)(9,`input`,5),sM(10,`translate`),Av(`ngModelChange`,function(l){return BS(i.plate_number,l)||(i.plate_number=l),l}),Pd(),Qb(),Pd()(),va$1(11,`button`,6),ov(`click`,function(){return i.save()}),OS(12),sM(13,`translate`),Pd()()),t&2&&(fb(2),$d(` `,cM(3,5,`COMMON.CONTROLS_PARKING`),` `),fb(4),Tv(cM(7,7,`BOOKINGS.PARKING_PLATE_NUMBER`)),fb(3),xv(`ngModel`,i.plate_number),Ky(`placeholder`,cM(10,9,`BOOKINGS.PARKING_PLATE_NUMBER`)),Xb(),fb(3),$d(` `,cM(13,11,`COMMON.SAVE`),` `))},dependencies:[Kt$2,qe,Be,Pe,wp,Qs,gp,wc,f],encapsulation:2})}}return n})();function Uo(n,p){if(n&1){let e=Z_();va$1(0,`button`,17),ov(`click`,function(){let i=dh(e).$implicit,s=eS().$index;return fh(eS(2).setLocation(s,i.id))}),va$1(1,`div`,18)(2,`icon`,11),OS(3),Pd(),va$1(4,`div`,19),OS(5),sM(6,`translate`),Pd()()()}if(n&2){let e=p.$implicit;fb(3),Tv(e.icon),fb(2),$d(` `,cM(6,2,e.name),` `)}}function Go(n,p){n&1&&Xy(0,`div`,16)}function zo(n,p){if(n&1&&(va$1(0,`div`,9)(1,`div`,10)(2,`icon`,11),OS(3),Pd()(),va$1(4,`div`,12)(5,`button`,13)(6,`div`),OS(7),Pd(),va$1(8,`icon`),OS(9,`expand_more`),Pd()(),va$1(10,`mat-menu`,null,0),H_(12,Uo,7,4,`button`,14,V_),Pd(),va$1(14,`div`,15),OS(15),sM(16,`date`),sM(17,`date`),Pd()(),P_(18,Go,1,0,`div`,16),Pd()),n&2){let e=p.$implicit,t=p.$index,i=cS(11),s=eS(2);mv(`opacity-30`,s.now>s.timeFrom(e.end_time)),fb(),mv(`bg-base-200`,s.now<s.timeFrom(e.start_time)||s.now>s.timeFrom(e.end_time))(`bg-info`,s.now>=s.timeFrom(e.start_time)&&s.now<=s.timeFrom(e.end_time))(`text-info-content`,s.now>=s.timeFrom(e.start_time)&&s.now<=s.timeFrom(e.end_time)),fb(2),Tv(s.location_icon(s.timeFrom(e.start_time))),fb(2),Ky(`matMenuTriggerFor`,i),fb(2),$d(` `,s.location(s.timeFrom(e.start_time)),` `),fb(5),U_(s.locations()),fb(3),_v(` `,uM(16,14,s.timeFrom(e.start_time),`shortTime`),` – `,uM(17,17,s.timeFrom(e.end_time),`shortTime`),` `),fb(3),j_(t>0?18:-1)}}function Ho(n,p){if(n&1&&(va$1(0,`div`,6),H_(1,zo,19,20,`div`,8,V_),Pd()),n&2){let e=eS();fb(),U_(e.active_preference?.blocks)}}function Wo(n,p){n&1&&(va$1(0,`div`,7)(1,`icon`,20),OS(2,`event_busy`),Pd(),va$1(3,`p`,21),OS(4),sM(5,`translate`),Pd(),va$1(6,`p`,21),OS(7),sM(8,`translate`),Pd()()),n&2&&(fb(4),$d(` `,cM(5,2,`COMMON.WORK_LOCATION_EMPTY`),` `),fb(3),$d(` `,cM(8,4,`COMMON.WORK_LOCATION_EDIT_INFO`),` `))}async function si(n,p,e){let t=It$1(),i=zt$2(Date.now(),`yyyy-MM-dd`),s=m(l({},t.work_overrides),{[i]:m(l({},n),{blocks:[...n.blocks.slice(0,p),m(l({},n.blocks[p]),{location:e}),...n.blocks.slice(p+1)]})});for(let l in s){let L=Ps(l,`yyyy-MM-dd`,new Date);(!s[l].blocks.length||xe(L,ot$1(K$2(Date.now()),-1)))&&delete s[l]}try{await fo$1(t.id,m(l({},t),{work_overrides:s}))}catch{return p_(`Unable to save your work location.`),t.work_overrides}return ka(),s}var la=(()=>{class n{constructor(){this._dialog=y(ee),this._user=Gy(),this.locations=wt$1([]),this.settings=wt$1(void 0),this.overrides=wt$1({})}get active_preference(){let e=zt$2(new Date,`yyyy-MM-dd`);return this.overrides()[e]?this.overrides()[e]:this.settings()?.find(t=>t.day_of_week===new Date().getDay())}get now(){return Wt$1(Date.now()).getTime()}ngOnInit(){let e=It$1();this.settings.set(e.work_preferences),this.overrides.set(e.work_overrides),this.locations.set([{id:`wfo`,name:et(`COMMON.WORK_OFFICE`),icon:`business`},{id:`wfh`,name:et(`COMMON.WORK_HOME`),icon:`home`},{id:`aol`,name:et(`COMMON.WORK_LEAVE`),icon:`event_busy`},{id:`sick`,name:et(`COMMON.WORK_SICK`),icon:`sick`}])}location_icon(e){return this._user().location_icon(e+60*1e3)}location(e){return this._user().location_name_time(e+60*1e3)}timeFrom(e){return Wt$1(it(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}editSettings(){this._dialog.open(wi)}async setLocation(e,t){this.overrides.set(await si(this.active_preference,e,t))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=BT({type:n,selectors:[[`work-location-tooltip`]],decls:15,vars:14,consts:[[`work_menu`,`matMenu`],[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`w-74`,`flex-col`,`overflow-hidden`,`rounded-sm`,`shadow-sm`],[1,`flex`,`items-center`,`justify-between`,`px-2`],[1,`px-2`,`py-4`,`font-medium`],[`icon`,``,`matRipple`,``,`matTooltipPosition`,`left`,1,`hover:bg-base-200`,3,`click`,`matTooltip`],[1,`px-4`,`text-sm`,`font-medium`],[1,`pb-2`],[1,`flex`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-2`,`p-8`,`opacity-30`],[1,`relative`,`flex`,`items-center`,`px-4`,`py-2`,3,`opacity-30`],[1,`relative`,`flex`,`items-center`,`px-4`,`py-2`],[1,`bg-base-200`,`z-20`,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`rounded-full`],[1,`text-2xl`],[1,`ml-2`,`flex-1`],[`matRipple`,``,1,`hover:bg-base-200`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`px-2`,`py-1`,`font-medium`,3,`matMenuTriggerFor`],[`mat-menu-item`,``],[1,`px-2`,`text-xs`,`opacity-60`],[1,`border-base-200`,`absolute`,`-top-2`,`left-7`,`h-4`,`w-0`,`-translate-x-px`,`border-l-2`,`border-dashed`],[`mat-menu-item`,``,3,`click`],[1,`flex`,`items-center`,`space-x-2`],[1,`pr-8`],[1,`text-6xl`],[1,`text-center`,`text-sm`]],template:function(t,i){t&1&&(va$1(0,`div`,1)(1,`div`,2)(2,`h3`,3),OS(3),sM(4,`translate`),Pd(),va$1(5,`button`,4),sM(6,`translate`),sM(7,`translate`),ov(`click`,function(){return i.editSettings()}),va$1(8,`icon`),OS(9,`edit_note`),Pd()()(),va$1(10,`h3`,5),OS(11),sM(12,`date`),Pd(),P_(13,Ho,3,0,`div`,6)(14,Wo,9,6,`div`,7),Pd()),t&2&&(fb(3),$d(` `,cM(4,5,`COMMON.WORK_LOCATION`),` `),fb(2),Ky(`matTooltip`,cM(6,7,`COMMON.WORK_LOCATION_EDIT`)),Qy(`aria-label`,cM(7,9,`COMMON.WORK_LOCATION_EDIT`)),fb(6),$d(` `,uM(12,11,i.now,`fullDate`),` `),fb(2),j_(i.active_preference?.blocks?.length?13:14))},dependencies:[PD,Ht$2,Ht$3,P$1,ee$1,Lt$1,f$1,vt$1,Yt$1,mt,z$2,VN,f],encapsulation:2})}}return n})();function jo(n,p){if(n&1){let e=Z_();va$1(0,`button`,29),ov(`click`,function(){let i=dh(e).$implicit;return fh(eS(2).setLocation(i.id))}),va$1(1,`div`,30)(2,`icon`,24),OS(3),Pd(),va$1(4,`div`,31),OS(5),sM(6,`translate`),Pd()()()}if(n&2){let e=p.$implicit;fb(3),Tv(e.icon),fb(2),$d(` `,cM(6,2,e.name),` `)}}function qo(n,p){if(n&1&&(va$1(0,`div`,7)(1,`h3`,20),OS(2,` Today's Work Location `),Pd(),va$1(3,`div`,21)(4,`div`,22)(5,`div`,23)(6,`icon`,24),OS(7),Pd()(),va$1(8,`div`,25)(9,`button`,26)(10,`div`),OS(11),Pd(),va$1(12,`icon`),OS(13,`expand_more`),Pd()(),va$1(14,`mat-menu`,null,1),H_(16,jo,7,4,`button`,27,V_),Pd(),va$1(18,`div`,28),OS(19),sM(20,`date`),sM(21,`date`),Pd()()()()()),n&2){let e=cS(15),t=eS();fb(7),Tv(t.location_icon(t.timeFrom(t.active_block().start_time))),fb(2),Ky(`matMenuTriggerFor`,e),fb(2),$d(` `,t.location(t.timeFrom(t.active_block().start_time)),` `),fb(5),U_(t.pref_locations()),fb(3),_v(` `,uM(20,5,t.timeFrom(t.active_block().start_time),`shortTime`),` – `,uM(21,8,t.timeFrom(t.active_block().end_time),`shortTime`),` `)}}function Ko(n,p){if(n&1&&(va$1(0,`div`,8)(1,`button`,13)(2,`div`,32)(3,`div`,33)(4,`icon`),OS(5,`layers`),Pd()(),va$1(6,`div`,34),OS(7),Pd(),va$1(8,`icon`,35),OS(9,` chevron_right `),Pd()()()()),n&2){let e=eS();Ky(`content`,e.building_select),fb(7),$d(` `,e.region()?.display_name||e.region()?.name,` `)}}function $o(n,p){if(n&1&&(va$1(0,`div`,9)(1,`button`,13)(2,`div`,32)(3,`div`,33)(4,`icon`),OS(5,`business`),Pd()(),va$1(6,`div`,34),OS(7),Pd(),va$1(8,`icon`,35),OS(9,` chevron_right `),Pd()()()()),n&2){let e=eS();Ky(`content`,e.building_select),fb(7),$d(` `,e.building()?.display_name||e.building()?.name,` `)}}function Qo(n,p){if(n&1&&(va$1(0,`div`,10)(1,`button`,13)(2,`div`,32)(3,`div`,33)(4,`icon`),OS(5,`help`),Pd()(),va$1(6,`div`,36),OS(7),sM(8,`translate`),Pd(),va$1(9,`icon`,35),OS(10,` chevron_right `),Pd()()()()),n&2)Ky(`content`,eS().help_tooltip),fb(7),$d(` `,cM(8,2,`COMMON.CONTROLS_HELP`),` `)}function Xo(n,p){if(n&1&&(va$1(0,`div`,10)(1,`button`,13)(2,`div`,32)(3,`div`,33)(4,`icon`),OS(5,`share_location`),Pd()(),va$1(6,`div`,36),OS(7),sM(8,`translate`),Pd(),va$1(9,`icon`,35),OS(10,`chevron_right`),Pd()()()()),n&2)Ky(`content`,eS().work_location_tooltip),fb(7),$d(` `,cM(8,2,`COMMON.WORK_LOCATION`),` `)}function Zo(n,p){if(n&1&&(va$1(0,`div`,10)(1,`button`,13)(2,`div`,32)(3,`div`,33)(4,`icon`),OS(5,`mode_night`),Pd()(),va$1(6,`div`,36),OS(7),sM(8,`translate`),Pd(),va$1(9,`icon`,35),OS(10,`chevron_right`),Pd()()()()),n&2){let e=eS();mv(`border-b!`,!e.locales().length||!e.desk_height()),Ky(`content`,e.accessibility_tooltip),fb(7),$d(` `,cM(8,4,`COMMON.CONTROLS_ACCESSIBILITY`),` `)}}function Yo(n,p){if(n&1&&(va$1(0,`div`,10)(1,`button`,13)(2,`div`,32)(3,`div`,33)(4,`icon`),OS(5,`desk`),Pd()(),va$1(6,`div`,36),OS(7),sM(8,`translate`),Pd(),va$1(9,`icon`,35),OS(10,` chevron_right `),Pd()()()()),n&2){let e=eS(),t=cS(15);mv(`border-b!`,!e.locales().length),Ky(`content`,t),fb(7),$d(` `,cM(8,4,`COMMON.CONTROLS_DESKS`),` `)}}function Jo(n,p){n&1&&Xy(0,`desk-height-presets`)}function er(n,p){if(n&1&&(va$1(0,`div`,10)(1,`button`,13)(2,`div`,32)(3,`div`,33)(4,`icon`),OS(5,`parking_sign`),Pd()(),va$1(6,`div`,36),OS(7),sM(8,`translate`),Pd(),va$1(9,`icon`,35),OS(10,` chevron_right `),Pd()()()()),n&2){let e=eS();mv(`border-b!`,!e.locales().length),Ky(`content`,e.parking_tooltip),fb(7),$d(` `,cM(8,4,`COMMON.CONTROLS_PARKING`),` `)}}function tr(n,p){n&1&&(va$1(0,`div`,38),OS(1,` Language `),Pd())}function ir(n,p){if(n&1&&(va$1(0,`div`,12)(1,`button`,13)(2,`div`,32)(3,`div`,33)(4,`icon`),OS(5,`language`),Pd()(),va$1(6,`div`,37)(7,`div`)(8,`div`),OS(9),sM(10,`translate`),Pd(),P_(11,tr,2,0,`div`,38),sM(12,`translate`),Pd(),va$1(13,`div`,39),sM(14,`translate`),OS(15),sM(16,`translate`),Pd()(),va$1(17,`icon`,35),OS(18,` chevron_right `),Pd()()()()),n&2){let e=eS();Ky(`content`,e.language_tooltip),fb(9),$d(` `,cM(10,5,`COMMON.LANGUAGE`),` `),fb(2),j_(cM(12,7,`COMMON.LANGUAGE`)!==`Language`?11:-1),fb(2),Ky(`matTooltip`,cM(14,9,e.active_locale)),fb(2),$d(` `,cM(16,11,e.active_locale),` `)}}function nr(n,p){if(n&1){let e=Z_();va$1(0,`button`,40),ov(`click`,function(){dh(e);return fh(eS().newSupportTicket())}),va$1(1,`div`,32)(2,`div`,33)(3,`icon`),OS(4,`support_agent`),Pd()(),va$1(5,`div`,36),OS(6),sM(7,`translate`),Pd()()()}n&2&&(fb(6),$d(` `,cM(7,1,`COMMON.CONTROLS_SUPPORT`),` `))}function ar(n,p){if(n&1){let e=Z_();va$1(0,`button`,41),ov(`click`,function(){dh(e);return fh(eS().reloadPage())}),OS(1),sM(2,`translate`),Pd()}n&2&&(fb(),$d(` `,cM(2,1,`COMMON.CONTROLS_NEW_VERSION`),` `))}function or(n,p){if(n&1){let e=Z_();va$1(0,`button`,42),ov(`click`,function(){dh(e);return fh(eS().viewChangelog())}),OS(1),Pd()}if(n&2){let e=eS();Ky(`disabled`,!e.changelog_available()),fb(),$d(` `,e.version.hash,` `)}}function rr(n,p){if(n&1&&(va$1(0,`span`),OS(1),Pd()),n&2){let e=eS();fb(),Tv(e.version.hash)}}var da=(()=>{class n{constructor(){this._settings=y(_0),this._org=y(fe),this._dialog=y(ee),this._changelog=y(Tn),this._locale=y(_g),this._user=Gy(),this.building=this._org.active_building,this.region=this._org.active_region,this.regions=this._org.region_list,this.sidebar=EU(!1),this.accessibility=pr$1(`allow_accessibility_changes`,!0),this.show_changelog=pr$1(`show_changelog`,!0),this.changelog_available=this._changelog.available,this.viewChangelog=()=>this._changelog.view(),this.building_select=aa,this.help_tooltip=ra,this.accessibility_tooltip=na,this.language_tooltip=sa,this.work_location_tooltip=la,this.parking_tooltip=ca,this.features=pr$1(`features`,[]),this._locales=this._settings.signal(`locales`,[]),this._desk_height=this._settings.signal(`desks.height_enabled`,!1),this._use_region=this._settings.signal(`use_region`,!1),this._disable_building_select=this._settings.signal(`disable_building_select`,!1),this.pref_locations=wt$1([]),this.work_prefs=wt$1([]),this.overrides=wt$1({}),this._active_preference=Le(()=>{let e=zt$2(new Date,`yyyy-MM-dd`),t=new Date().getDay();return this.overrides()[e]||this.work_prefs().find(i=>i.day_of_week===t)}),this.active_index=Le(()=>this._active_preference()?.blocks?.findIndex(e=>this.now>=this.timeFrom(e.start_time)&&this.now<this.timeFrom(e.end_time))),this.active_block=Le(()=>this._active_preference()?.blocks?.[this.active_index()]),this.locales=this._locales,this.desk_height=this._desk_height,this.use_region=this._use_region,this.disable_building_select=this._disable_building_select}location_icon(e){return this.user.location_icon(e+60*1e3)}location(e){return this.user.location_name_time(e+60*1e3)}timeFrom(e){return Wt$1(it(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}get user(){return this._user()}get groups(){return this.user?.groups?.join(`
`)||``}get version(){return wt$2}get active_locale(){let e=this.locales(),t=this._locale.locale;for(let i of e)if(i.id===t)return i.name;return`LANGUAGE.ENGLISH`}get now(){return Wt$1(Date.now()).getTime()}get has_new_version(){return Kt$1()}ngOnInit(){let e=It$1();this.work_prefs.set(e?.work_preferences||[]),this.overrides.set(e?.work_overrides||{}),this.pref_locations.set([{id:`wfo`,name:et(`COMMON.WORK_OFFICE`),icon:`business`},{id:`wfh`,name:et(`COMMON.WORK_HOME`),icon:`home`},{id:`aol`,name:et(`COMMON.WORK_LEAVE`),icon:`event_busy`},{id:`sick`,name:et(`COMMON.WORK_SICK`),icon:`sick`}])}logout(){vp()}reloadPage(){location.reload()}newSupportTicket(){this._settings.get(`app.external_support_url`)?window.open(this._settings.get(`app.external_support_url`),`_blank`,`noopener,noreferrer`):this._dialog.open(Jn)}openWfhModal(){this._dialog.open(wi)}async setLocation(e){this.overrides.set(await si(this._active_preference(),this.active_index(),e))}formatLabel(e){return`${e.toFixed(1)}cm`}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=BT({type:n,selectors:[[`user-controls`]],inputs:{sidebar:[1,`sidebar`]},decls:35,vars:32,consts:[[`desk_height_tooltip`,``],[`work_menu`,`matMenu`],[1,`divide-base-200`,`border-base-300`,`bg-base-100`,`relative`,`mt-1`,`flex`,`flex-col`,`divide-y`,`overflow-auto`,`rounded-sm`,`border`,`shadow-sm`],[`avatar`,``,1,`flex`,`w-full`,`min-w-72`,`flex-col`,`items-center`,`p-2`],[1,`text-2xl`,3,`user`,`matTooltip`],[1,``],[1,`truncate`,`text-xs`,`opacity-60`],[1,`border-base-200`,`w-full`,`rounded-sm`,`border-y`,`py-2`],[`customTooltip`,``,`data`,`region`,1,`relative`,3,`content`],[`customTooltip`,``,1,`relative`,3,`content`],[`customTooltip`,``,3,`content`],[`customTooltip`,``,3,`content`,`border-b!`],[`customTooltip`,``,1,`border-b!`,3,`content`],[`btn`,``,`matRipple`,``,1,`clear`,`h-14`,`w-full`,`text-left`],[1,`flex`,`flex-col`,`items-center`,`p-4`],[1,`mb-4`,`flex`,`items-center`,`justify-center`,`space-x-2`],[`btn`,``,`matRipple`,``,1,`inverse`,3,`click`],[`btn`,``,`matRipple`,``],[1,`w-full`,`text-xs`,`opacity-60`],[1,`m-0`,`border-none`,`bg-none`,`p-0`,`text-xs`,`underline`,3,`disabled`],[1,`w-full`,`px-4`,`pb-2`,`text-sm`,`font-medium`],[1,`w-full`],[1,`relative`,`flex`,`items-center`,`px-4`,`py-2`],[1,`bg-info`,`text-info-content`,`z-20`,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`rounded-full`],[1,`text-2xl`],[1,`ml-2`,`flex-1`],[`matRipple`,``,1,`hover:bg-base-200`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`px-2`,`py-1`,`font-medium`,3,`matMenuTriggerFor`],[`mat-menu-item`,``],[1,`px-2`,`text-xs`,`opacity-60`],[`mat-menu-item`,``,3,`click`],[1,`flex`,`items-center`,`space-x-2`],[1,`pr-8`],[1,`flex`,`w-full`,`items-center`,`space-x-2`],[1,`bg-base-200`,`flex`,`h-8`,`w-8`,`items-center`,`justify-center`,`rounded-full`],[1,`w-px`,`flex-1`,`truncate`],[1,`text-2xl`,`opacity-60`],[1,`flex-1`],[1,`flex`,`flex-1`,`items-center`,`justify-between`,`space-x-4`],[1,`text-xs`,`opacity-30`],[1,`bg-base-200`,`max-w-24`,`truncate`,`rounded-sm`,`px-2`,`py-1`,`text-sm`,3,`matTooltip`],[`btn`,``,`matRipple`,``,1,`clear`,`h-14`,`w-full`,`text-left`,3,`click`],[`btn`,``,`matRipple`,``,3,`click`],[1,`m-0`,`border-none`,`bg-none`,`p-0`,`text-xs`,`underline`,3,`click`,`disabled`]],template:function(t,i){t&1&&(va$1(0,`div`,2)(1,`div`,3),Xy(2,`a-user-avatar`,4),va$1(3,`div`,5),OS(4),Pd(),va$1(5,`div`,6),OS(6),Pd()(),P_(7,qo,22,11,`div`,7),P_(8,Ko,10,2,`div`,8),P_(9,$o,10,2,`div`,9),P_(10,Qo,11,4,`div`,10),P_(11,Xo,11,4,`div`,10),P_(12,Zo,11,6,`div`,11),P_(13,Yo,11,6,`div`,11),By(14,Jo,1,0,`ng-template`,null,0,dM),P_(16,er,11,6,`div`,11),P_(17,ir,19,13,`div`,12),P_(18,nr,8,3,`button`,13),va$1(19,`div`,14)(20,`div`,15)(21,`button`,16),ov(`click`,function(){return i.logout()}),OS(22),sM(23,`translate`),Pd(),P_(24,ar,3,3,`button`,17),Pd(),va$1(25,`div`,18),Vd(26),OS(27),sM(28,`translate`),Hd(),P_(29,or,2,2,`button`,19)(30,rr,2,1,`span`),Pd(),va$1(31,`div`,18),OS(32),sM(33,`date`),sM(34,`date`),Pd()()()),t&2&&(mv(`border`,!i.sidebar()),fb(2),Ky(`user`,i.user)(`matTooltip`,i.groups),fb(2),Tv(i.user?.name),fb(2),$d(` `,i.user?.email,` `),fb(),j_(i.features().includes(`wfh`)&&i.active_block()?7:-1),fb(),j_(i.regions()?.length?8:-1),fb(),j_(!i.disable_building_select()&&!i.use_region()?9:-1),fb(),j_(i.features().includes(`help`)?10:-1),fb(),j_(i.features().includes(`wfh`)?11:-1),fb(),j_(i.accessibility()?12:-1),fb(),j_(i.desk_height()?13:-1),fb(3),j_(i.features().includes(`parking-controls`)?16:-1),fb(),j_(i.locales().length>1?17:-1),fb(),j_(i.features().includes(`support-ticket`)?18:-1),fb(4),$d(` `,cM(23,22,`COMMON.CONTROLS_SIGN_OUT`),` `),fb(2),j_(i.has_new_version?24:-1),fb(3),$d(` `,cM(28,24,`COMMON.CONTROLS_VERSION`),`: `),fb(2),j_(i.show_changelog()?29:30),fb(3),_v(` `,uM(33,26,i.version.time,`longDate`),` (`,uM(34,29,i.version.time,`shortTime`),`) `))},dependencies:[PD,Ht$2,f$1,vt$1,z$2,fe$1,Yt$1,mt,S$1,Ht$3,P$1,ee$1,Lt$1,oa,VN,f],encapsulation:2})}}return n})();var sr=[`panel`];var cr=[`layer`];var lr=[`*`];function dr(n,p){n&1&&(va$1(0,`icon`,4),OS(1,`person`),Pd())}function pr(n,p){if(n&1){let e=Z_();va$1(0,`div`,3,0)(2,`button`,5),ov(`click`,function(){dh(e);return fh(eS().close())}),Pd(),va$1(3,`div`,6)(4,`div`,7,1),sM(6,`translate`),Xy(7,`user-controls`,8),va$1(8,`button`,9),sM(9,`translate`),ov(`click`,function(){dh(e);return fh(eS().close())}),va$1(10,`icon`,4),OS(11,`close`),Pd()()()()()}if(n&2){let e=eS();fb(2),mv(`opacity-50`,e.is_open())(`opacity-0`,!e.is_open()),fb(2),mv(`translate-x-0`,e.is_open())(`translate-x-full`,!e.is_open()),Qy(`aria-label`,cM(6,11,`COMMON.USER_CONTROLS`)),fb(3),Ky(`sidebar`,!0),fb(),Qy(`aria-label`,cM(9,13,`COMMON.CLOSE`))}}var pa=(()=>{class n{constructor(){this._overlay_container=y(Wt$2),this._close_timeout=null,this._return_focus=null,this._panel=wU(`panel`),this._layer=wU(`layer`),this.is_open=wt$1(!1),this.is_rendered=wt$1(!1)}open(){this.is_open()||(this._close_timeout&&(clearTimeout(this._close_timeout),this._close_timeout=null),this._return_focus=document.activeElement,this.is_rendered.set(!0),requestAnimationFrame(()=>{this._layer()?.nativeElement.togglePopover?.(!0),this.is_open.set(!0),this._panel()?.nativeElement.focus({preventScroll:!0})}))}close(){this.is_open.set(!1),this._return_focus?.focus(),this._return_focus=null,this._close_timeout=setTimeout(()=>{this.is_rendered.set(!1),this._close_timeout=null},200)}onEscape(e){!this.is_open()||e.defaultPrevented||this._overlay_container.getContainerElement().contains(e.target)||this.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=BT({type:n,selectors:[[`user-controls-sidebar`]],viewQuery:function(t,i){t&1&&lv(i._panel,sr,5)(i._layer,cr,5),t&2&&aS(2)},hostBindings:function(t,i){t&1&&ov(`keydown.escape`,function(l){return i.onEscape(l)},yC)},ngContentSelectors:lr,decls:5,vars:5,consts:[[`layer`,``],[`panel`,``],[`icon`,``,`matRipple`,``,`avatar`,``,`type`,`button`,`name`,`user-controls`,`aria-haspopup`,`dialog`,1,`bg-base-200`,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`rounded-full`,3,`click`],[`popover`,`manual`,1,`fixed`,`inset-0`,`m-0`,`h-full`,`max-h-none`,`w-full`,`max-w-none`,`overflow-hidden`,`border-0`,`bg-transparent`,`p-0`,`text-inherit`],[1,`text-2xl`],[`type`,`button`,`aria-label`,`Close user controls`,1,`absolute`,`inset-0`,`bg-black`,`transition-opacity`,`duration-200`,`starting:opacity-0`,3,`click`],[1,`absolute`,`inset-y-0`,`right-0`,`flex`,`max-w-full`],[`role`,`dialog`,`aria-modal`,`true`,`tabindex`,`-1`,`cdkTrapFocus`,``,1,`bg-base-100`,`relative`,`h-full`,`w-80`,`max-w-[100vw]`,`overflow-auto`,`pt-[calc(env(safe-area-inset-top)+1rem)]`,`pr-[env(safe-area-inset-right)]`,`pb-[env(safe-area-inset-bottom)]`,`shadow-xl`,`transition-transform`,`duration-200`,`ease-out`,`focus:outline-hidden`,`starting:translate-x-full`],[3,`sidebar`],[`icon`,``,`default`,``,`matRipple`,``,`type`,`button`,1,`absolute`,`top-[calc(env(safe-area-inset-top)+0.5rem)]`,`right-[calc(env(safe-area-inset-right)+0.5rem)]`,3,`click`]],template:function(t,i){t&1&&(nS(),va$1(0,`button`,2),sM(1,`translate`),ov(`click`,function(){return i.open()}),rS(2,0,null,dr,2,0),Pd(),P_(4,pr,12,15,`div`,3)),t&2&&(Qy(`aria-label`,cM(1,3,`COMMON.USER_CONTROLS`))(`aria-expanded`,i.is_open()),fb(4),j_(i.is_rendered()?4:-1))},dependencies:[Lt,f$1,vt$1,z$2,da,f],encapsulation:2})}}return n})();var mr=n=>({count:n});var hr=()=>[`/`];var ur=n=>({paths:n,queryParams:`subset`,matrixParams:`ignored`,fragment:`ignored`});var ma=(n,p)=>p.id;function _r(n,p){if(n&1&&(va$1(0,`a`,1),Xy(1,`img`,10),sM(2,`translate`),Pd()),n&2){let e=eS();Ky(`routerLink`,ZS(5,hr)),fb(),Ky(`source`,e.logo())(`alt`,cM(2,3,`COMMON.HOME`))}}function gr(n,p){n&1&&Xy(0,`hr`,11)}function fr(n,p){if(n&1){let e=Z_();va$1(0,`button`,15),ov(`click`,function(){dh(e);let i=eS().$implicit;return fh(eS().toggleGroup(i.id))}),va$1(1,`div`,16),OS(2),sM(3,`translate`),Pd(),va$1(4,`icon`,17),OS(5,` arrow_drop_down `),Pd()()}if(n&2){let e=eS().$implicit,t=eS();Qy(`aria-expanded`,!t.collapsed()[e.id])(`aria-controls`,`nav-group-`+e.id),fb(),gv(`letter-spacing`,`0.125rem`),fb(),$d(` `,cM(3,7,e.name),` `),fb(2),mv(`-rotate-90`,t.collapsed()[e.id])}}function vr(n,p){if(n&1&&(va$1(0,`span`),OS(1),sM(2,`translate`),Pd()),n&2){let e=eS().$implicit;fb(),Tv(cM(2,1,e.name))}}function br(n,p){if(n&1&&(va$1(0,`a`,18),sM(1,`translate`),sM(2,`translate`),va$1(3,`icon`,19),OS(4),Pd(),P_(5,vr,3,3,`span`),Pd()),n&2){let e=p.$implicit,t=eS(2);mv(`rounded-r-full`,!t.rail())(`pr-2`,!t.rail())(`pl-3`,!t.rail())(`justify-center`,t.rail()),Ky(`routerLink`,e.route)(`routerLinkActiveOptions`,YS(18,ur,e.exact?`exact`:`subset`))(`matTooltip`,t.rail()?cM(1,14,e.name):``),Qy(`aria-label`,t.rail()?cM(2,16,e.name):null),fb(4),Tv(e.icon),fb(),j_(t.rail()?-1:5)}}function yr(n,p){if(n&1&&(P_(0,gr,1,0,`hr`,11)(1,fr,6,9,`button`,12),va$1(2,`section`,13),H_(3,br,6,20,`a`,14,ma),Pd()),n&2){let e=p.$implicit,t=eS();j_(t.rail()?0:1),fb(2),mv(`contract-collapsed`,!t.rail()&&t.collapsed()[e.id]),Ky(`id`,`nav-group-`+e.id)(`inert`,!t.rail()&&t.collapsed()[e.id]),fb(),U_(e.children)}}var ha=`reports`;var Cr=[`placeos_admin`,`placeos_support`];var Sr=wt$1({});var ua=`PLACEOS.concierge.sidebar_rail`;var ci=wt$1(xr());function xr(){try{return localStorage.getItem(ua)===`true`}catch{return!1}}var kr=[{id:`bookings`,name:`APP.CONCIERGE.MENU_BOOKINGS`,children:[{id:`spaces`,name:`APP.CONCIERGE.MENU_ROOM_BOOKINGS`,route:[`/book/rooms`],icon:`meeting_room`},{id:`desks`,name:`APP.CONCIERGE.MENU_DESK_BOOKINGS`,route:[`/book/desks/events`],icon:`desk`},{id:`parking`,alt_features:[`parking-bookings`],name:`APP.CONCIERGE.MENU_PARKING_BOOKINGS`,route:[`/book/parking/events`],icon:`local_parking`},{id:`lockers`,name:`APP.CONCIERGE.MENU_LOCKER_BOOKINGS`,route:[`/book/lockers/events`],icon:`lock`},{id:`assets`,name:`APP.CONCIERGE.MENU_ASSET_BOOKINGS`,route:[`/book/assets/list/requests`],icon:`inventory_2`},{id:`catering`,name:`APP.CONCIERGE.MENU_CATERING_BOOKINGS`,route:[`/book/catering/orders`],icon:`restaurant`},{id:`visitors`,name:`APP.CONCIERGE.MENU_VISITOR_BOOKINGS`,route:[`/book/visitors`],icon:`badge`},{id:`visitor-rules`,name:`APP.CONCIERGE.MENU_VISITOR_RULES`,route:[`/book/visitors/rules`],icon:`rule`}]},{id:`facilities`,name:`APP.CONCIERGE.MENU_MANAGEMENT`,admin_only:!0,children:[{id:`zones`,name:`APP.CONCIERGE.MENU_MANAGE_ZONES`,route:[`/zone-management`],icon:`business`},{id:`maps`,name:`APP.CONCIERGE.MENU_MANAGE_MAPS`,route:[`/map-management`],icon:`map`},{id:`spaces`,name:`APP.CONCIERGE.MENU_MANAGE_ROOMS`,route:[`/room-management`],icon:`meeting_room`},{id:`desks`,name:`APP.CONCIERGE.MENU_MANAGE_DESKS`,route:[`/book/desks/manage`],icon:`desk`},{id:`parking`,alt_features:[`parking-manage`],name:`APP.CONCIERGE.MENU_MANAGE_PARKING`,route:[`/book/parking/manage`],icon:`local_parking`},{id:`lockers`,name:`APP.CONCIERGE.MENU_MANAGE_LOCKERS`,route:[`/book/lockers/manage`],icon:`lock`},{id:`catering`,name:`APP.CONCIERGE.MENU_MANAGE_CATERING`,route:[`/book/catering/menu`],icon:`menu_book`},{id:`points`,name:`APP.CONCIERGE.MENU_MANAGE_POINTS`,route:[`/points-management`],icon:`stars`},{id:`emergency-contacts`,name:`APP.CONCIERGE.MENU_MANAGE_CONTACTS`,route:[`/users/staff/emergency-contacts`],icon:`contact_emergency`},{id:`points-of-interest`,name:`APP.CONCIERGE.MENU_MANAGE_MAP_FEATURES`,route:[`/points-of-interest`],icon:`pin_drop`},{id:`url-management`,name:`APP.CONCIERGE.MENU_MANAGE_URLS`,route:[`/url-management`],icon:`link`},{id:`email-templates`,name:`APP.CONCIERGE.MENU_MANAGE_EMAILS`,route:[`/email-templates`],icon:`mail`},{id:`deals-n-offers`,name:`APP.CONCIERGE.MENU_MANAGE_DEALS`,route:[`/deals-n-offers`],icon:`local_offer`}]},{id:`devices`,name:`APP.CONCIERGE.MENU_DEVICES`,admin_only:!0,children:[{id:`remote-setup`,name:`APP.CONCIERGE.MENU_MANAGE_REMOTE_SETUP`,route:[`/remote-setup`],icon:`qr_code_scanner`},{id:`remote-debug`,name:`APP.CONCIERGE.MENU_MANAGE_REMOTE_DEBUG`,route:[`/remote-debug`],icon:`bug_report`,groups:[`placeos_admin`,`placeos_support`]}]},{id:`other`,name:`APP.CONCIERGE.MENU_OTHER`,children:[{id:`assets`,name:`APP.CONCIERGE.MENU_ASSETS`,route:[`/book/assets/list/items`],icon:`vibration`},{id:`internal-users`,name:`APP.CONCIERGE.MENU_USER_LIST`,route:[`/users/staff`],icon:`assignment_ind`,exact:!0},{id:`events`,name:`APP.CONCIERGE.MENU_EVENTS`,route:[`/entertainment/events`],icon:`confirmation_number`},{id:`surveys`,name:`APP.CONCIERGE.MENU_SURVEYS`,route:[`/surveys`],icon:`add_reaction`}]},{id:ha,name:`APP.CONCIERGE.MENU_REPORTS`,children:[{id:`attendance-report`,name:`APP.CONCIERGE.MENU_REPORT_SITE_ATTENDANCE`,route:[`/reports/attendance`],icon:`groups`},{id:`booking-report`,name:`APP.CONCIERGE.MENU_REPORT_ROOMS`,route:[`/reports/bookings`],icon:`meeting_room`},{id:`desk-report`,name:`APP.CONCIERGE.MENU_REPORT_DESKS`,route:[`/reports/desks`],icon:`desk`},{id:`parking-report`,name:`APP.CONCIERGE.MENU_REPORT_PARKING`,route:[`/reports/parking`],icon:`local_parking`},{id:`lockers-report`,name:`APP.CONCIERGE.MENU_REPORT_LOCKERS`,route:[`/reports/lockers`],icon:`lock`},{id:`catering-report`,name:`APP.CONCIERGE.MENU_REPORT_CATERING`,route:[`/reports/catering`],icon:`room_service`},{id:`contact-tracing-report`,name:`APP.CONCIERGE.MENU_REPORT_CONTACT_TRACING`,route:[`/reports/contact-tracing`],icon:`connect_without_contact`},{id:`assets-report`,name:`APP.CONCIERGE.MENU_REPORT_ASSETS`,route:[`/reports/assets`],icon:`inventory_2`},{id:`visitors-report`,name:`APP.CONCIERGE.MENU_REPORT_VISITORS`,route:[`/reports/visitors`],icon:`badge`},{id:`user-report`,name:`APP.CONCIERGE.MENU_REPORT_USER`,route:[`/reports/user`],icon:`person_search`}]}];var lp=(()=>{class n extends Pi{constructor(){super(...arguments),this._settings=y(_0),this._org=y(fe),this._element_ref=y(Qt),this._shortcuts=y(O$1),this.collapsed=Sr,this.rail=ci.asReadonly(),this.user=Gy(),this.group_count=Le(()=>this.user().groups?.length||0),this.logo=f0(),this._is_admin=Le(()=>{let e=zy();return[this._settings.get(`app.admin_group`)||`admin`,...Cr].some(i=>e.includes(i))}),this._custom_reports=Le(()=>(this._settings.get(`app.custom_reports`)||[]).map(({id:t,name:i,icon:s})=>({id:`custom-${t}`,name:i,route:[`/reports`,t],icon:s||`insert_chart`}))),this.groups=Le(()=>this._org.initialised()?kr.flatMap(e=>{if(e.admin_only&&!this._is_admin())return[];let t=e.children.filter(i=>this._canView(i));return e.id===ha&&t.push(...this._custom_reports()),t.length?[m(l({},e),{children:t})]:[]}):[])}async ngOnInit(){await this._org.waitUntilInitialised(),this.timeout(`scroll`,()=>this._scrollToActiveLink(),50)}openShortcuts(){this._shortcuts.openHelp()}toggleRail(){ci.update(e=>!e);try{localStorage.setItem(ua,`${ci()}`)}catch{}}toggleGroup(e){this.collapsed.update(t=>m(l({},t),{[e]:!t[e]}))}_canView(e){let t=e.groups;return t&&!zy().some(i=>t.includes(i))?!1:[e.id,...e.alt_features||[]].some(i=>this._hasFeature(i))}_hasFeature(e){if(!(this._settings.get(`app.features`)||[]).includes(e))return!1;let s=(this._settings.get(`app.feature_groups`)||{})[e]||[];return!s.length||this._is_admin()||zy().some(l=>s.includes(l))}_scrollToActiveLink(){this._element_ref.nativeElement.querySelector(`a.active`)?.scrollIntoView({block:`center`,behavior:`instant`})}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Yg(n)))(i||n)}})()}static{this.ɵcmp=BT({type:n,selectors:[[`app-sidebar`]],hostVars:2,hostBindings:function(t,i){t&2&&mv(`rail`,i.rail())},features:[Py],decls:24,vars:29,consts:[[`user_controls`,``],[1,`block`,`px-4`,`pt-3`,`pb-2`,3,`routerLink`],[1,`flex-1`,`overflow-auto`,`py-2`],[1,`border-base-200`,`flex`,`items-center`,`gap-1`,`border-t`,`p-2`],[3,`user`],[`matRipple`,``,`type`,`button`,`tabindex`,`-1`,1,`hover:bg-base-200`,`min-w-0`,`flex-1`,`rounded-lg`,`px-2`,`py-1`,`text-left`,3,`click`],[1,`truncate`,`text-sm`,`font-medium`],[1,`truncate`,`text-xs`,`opacity-70`],[`btn`,``,`icon`,``,`matRipple`,``,3,`click`,`matTooltip`],[1,`text-2xl`],[`auth`,``,1,`h-10`,3,`source`,`alt`],[1,`border-base-200`,`mx-3`,`not-first:my-2`],[`matRipple`,``,1,`hover:bg-base-200`,`flex`,`w-full`,`items-center`,`rounded-r-full`,`py-1`,`pr-1`,`pl-3`,`text-xs`,`font-medium`,`uppercase`,`opacity-70`,`not-first:mt-3`],[1,`contract-expand`,`w-full`,3,`id`,`inert`],[`matRipple`,``,`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`,`matTooltipPosition`,`right`,1,`hover:bg-base-200`,`my-0.5`,`flex`,`w-full`,`items-center`,`gap-2`,`py-1`,`text-sm`,3,`rounded-r-full`,`pr-2`,`pl-3`,`justify-center`,`routerLink`,`routerLinkActiveOptions`,`matTooltip`],[`matRipple`,``,1,`hover:bg-base-200`,`flex`,`w-full`,`items-center`,`rounded-r-full`,`py-1`,`pr-1`,`pl-3`,`text-xs`,`font-medium`,`uppercase`,`opacity-70`,`not-first:mt-3`,3,`click`],[1,`flex-1`,`text-left`,`uppercase`],[`aria-hidden`,`true`,1,`text-xl`,`transition-transform`],[`matRipple`,``,`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`,`matTooltipPosition`,`right`,1,`hover:bg-base-200`,`my-0.5`,`flex`,`w-full`,`items-center`,`gap-2`,`py-1`,`text-sm`,3,`routerLink`,`routerLinkActiveOptions`,`matTooltip`],[`aria-hidden`,`true`,1,`text-xl`,`opacity-60`]],template:function(t,i){if(t&1){let s=Z_();P_(0,_r,3,6,`a`,1),va$1(1,`nav`,2),H_(2,yr,5,5,null,null,ma),Pd(),va$1(4,`div`,3)(5,`user-controls-sidebar`,null,0),Xy(7,`a-user-avatar`,4),Pd(),va$1(8,`button`,5),ov(`click`,function(){dh(s);return fh(cS(6).open())}),va$1(9,`div`,6),OS(10),Pd(),va$1(11,`div`,7),OS(12),sM(13,`translate`),Pd()(),va$1(14,`button`,8),sM(15,`translate`),sM(16,`translate`),ov(`click`,function(){return i.openShortcuts()}),va$1(17,`icon`,9),OS(18,`keyboard`),Pd()(),va$1(19,`button`,8),sM(20,`translate`),sM(21,`translate`),ov(`click`,function(){return i.toggleRail()}),va$1(22,`icon`,9),OS(23),Pd()()()}t&2&&(j_(i.rail()?-1:0),fb(),mv(`pr-3`,!i.rail()),fb(),U_(i.groups()),fb(2),mv(`flex-col`,i.rail()),fb(3),Ky(`user`,i.user()),fb(),mv(`hidden`,i.rail()),fb(2),$d(` `,i.user().name,` `),fb(2),$d(` `,lM(13,15,`APP.CONCIERGE.USER_GROUP_COUNT`,YS(27,mr,i.group_count()),i.group_count()),` `),fb(2),Ky(`matTooltip`,cM(15,19,`APP.CONCIERGE.SHORTCUTS_TITLE`)),Qy(`aria-label`,cM(16,21,`APP.CONCIERGE.SHORTCUTS_TITLE`)),fb(5),Ky(`matTooltip`,cM(20,23,i.rail()?`APP.CONCIERGE.SIDEBAR_EXPAND`:`APP.CONCIERGE.SIDEBAR_COLLAPSE`)),Qy(`aria-label`,cM(21,25,i.rail()?`APP.CONCIERGE.SIDEBAR_EXPAND`:`APP.CONCIERGE.SIDEBAR_COLLAPSE`)),fb(4),Tv(i.rail()?`left_panel_open`:`left_panel_close`))},dependencies:[as,$t$1,ts,f$1,vt$1,Yt$1,mt,H$2,z$2,S$1,pa,f],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:16rem;background-color:var(--%NS%base-100);border-right:1px solid var(--%NS%base-200);view-transition-name:concierge-sidebar}.rail[_nghost-%COMP%]{width:4rem}a.active[_ngcontent-%COMP%]{background-color:var(--%NS%secondary);color:var(--%NS%secondary-content)}a.active[_ngcontent-%COMP%]:hover{color:var(--%NS%base-content);opacity:.75}
/*# sourceMappingURL=app-sidebar.component.css.map */`]})}}return n})();export{ct as _,On as a,Xn as c,jn as d,lp as f,S$1 as g,_e as h,Kn as i,Xt as l,zn as m,Ee as n,Ut as o,ni as p,Hn as r,Wn as s,$n as t,Yn as u,wi as v,Ps as y};
;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="710ebe92-8392-5b33-997d-54ec3bed29da")}catch(e){}}();
//# debugId=710ebe92-8392-5b33-997d-54ec3bed29da
//# sourceMappingURL=chunk-DqIHtnpo.js.map