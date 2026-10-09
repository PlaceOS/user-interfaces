import{n as m,t as l}from"./chunk-Da4-SChG.js";import{$n as g_,$r as ri,Ar as nr$1,Bi as z$1,Bn as ef,Br as pe,D as F2,Di as wy,Dn as cD,Dt as Sd,E as E_,Ei as wc$1,En as by,Fr as oT,In as eN,Ir as oe,J as J_,Jt as XD,K as JT,Kn as fh,Li as y_,Lt as Uw,M as G2,Ni as xy,Nn as dh,Nt as TS,O as Fe,On as cM,Or as n_,Ot as Sn$1,Pi as y,Pn as dy,Pt as Td,Q as KD,Qr as r_,R as Ht,Ri as yb,Rn as e_,Rt as Uy,T as ES,Ti as w_,U as It,V as I_,Vn as eh,Wr as qM,Xt as XT,Y as Jp,Yn as fs$1,_i as ve,_r as ky,_t as P2,ai as t_,an as Yt$1,at as Ly,bn as am,br as le,ci as uM,cn as Z_,cr as it,ct as Mn$1,di as u_,dr as j2,ei as sC,er as gb,f as Be,fi as ua,fr as j_,ft as Nd,gi as v_,h as C_,ht as Oy,i as AC,ir as gv,ji as xe,jn as dS,jr as nv,jt as Sy,kn as cS,kt as Sr$1,l as B2,lt as My,m as CS,mr as ks$1,nn as Y,o as Ad,on as ZN,pi as uy,pn as _d$1,pr as jw,pt as Og,r as $w,rn as YD,si as tv,st as Md,tn as Xy,tt as Ky,ut as N,v as Cy,vn as aS,vt as QD,wi as wS,wn as bS,xi as w,xt as Qs$1,yn as aa,z as Hy,zt as V2}from"./chunk-BQGEwb__.js";import{An as hn$1,Dr as uc$1,En as gt,Et as Vs$1,Hn as ka,Ir as wp,Jr as zu,Lr as x,Mr as ve$1,Nr as vt,Or as up,Qt as _p,R as K,Rr as xa,Rt as Ya$1,Tt as Vp,Ur as yt,Wr as za,Wt as Yt$2,Y as Mr,Yt as _a,Zn as na,Zt as _d$2,bt as Ue,ct as R$1,f as Cp,fr as qp,g as Eh,ir as op,kn as hf,kr as va,lr as pm,mt as Rt$1,nr as nt$1,on as bd$1,or as pa,pn as de,pt as Rr$1,r as $u,rr as oc$1,sn as bp,t as $a,tt as Or$1,un as cp,v as Er$1,vn as et,wn as gn$1,xr as ta}from"./chunk-DHOvAiSJ.js";import{n as y$1}from"./chunk-ysSrOaIt.js";import{m as ts$1,s as as$1,t as $t$1}from"./chunk-C8t1jzqf.js";import{$ as Xr$1,F as Ne,M as L,Nt as ke,Pt as ko$1,Qt as qr$1,V as Rn$1,Wt as ng,_t as er$1,a as $n$1,bn as z_,d as Ce,f as Dl$1,fn as we,k as Jp$1,l as Ca,m as Ea,nn as se,o as Ac$1,t as $,tn as rr$1,u as Cc$1,vn as yc$1,x as Gu,xt as gi$1,zt as me}from"./chunk-CFIlPywQ.js";import{i as Rt$2,n as Jr$1,o as Xt$1,r as Qr$1}from"./chunk-B0REMmih.js";import{_ as De,b as be,g as C$1,h as $$1,n as S,t as f,y as V}from"./main.js";import{D as y$2,E as se$1,S as ne,b as ke$1,f as Ze,s as P,u as T,v as ie,x as mt}from"./chunk-Cr-eEbza.js";import{D as zt,b as di,c as It$1,n as B,o as Ht$1,p as Vt,t as At,y as ci}from"./chunk-CF8dG8ub.js";import{a as et$1,c as yt$1,o as l$1,r as Rt$3,t as Mt}from"./chunk-DNFAe0LE.js";import{i as Lt,n as G,r as I,t as Bt}from"./chunk-wPJ20APt.js";import{d as ee,n as Bt$1,o as T$1,r as Ht$2,t as $e}from"./chunk-Du6Tjnz6.js";import{n as f$1}from"./chunk-Dw4pc9YM.js";import{a as Te,c as ce,i as Oe,l as le$1,n as He,o as Ue$1,r as J,s as X$1,u as me$1}from"./chunk-Cc1OEnxA.js";import{a as ae,d as rn$1,f as rt,l as on$1,n as Ot,o as de$1,s as le$2}from"./chunk-D5RPhAYY.js";import{n as mt$1,t as Yt$3}from"./chunk-CuYkwi_m.js";import{t as E}from"./chunk-CK_RoZpm.js";import{n as ue,t as ie$1}from"./chunk-D8sqTHjW.js";import{t as N$1}from"./chunk-DuQzsW-Z.js";function Xa(n,o){let e=$r(o)?new o(0):R$1(o,0);return e.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),e.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e}function $r(n){return typeof n==`function`&&n.prototype?.constructor===n}var Xr=10;var nn=class{subPriority=0;validate(o,e){return!0}};var on=class extends nn{constructor(o,e,t,i,a){super(),this.value=o,this.validateValue=e,this.setValue=t,this.priority=i,a&&(this.subPriority=a)}validate(o,e){return this.validateValue(o,this.value,e)}set(o,e,t){return this.setValue(o,e,this.value,t)}};var an=class extends nn{priority=Xr;subPriority=-1;constructor(o,e){super(),this.context=o||(t=>R$1(e,t))}set(o,e){return e.timestampIsSet?o:R$1(o,Xa(o,this.context))}};var C=class{run(o,e,t,i){let a=this.parse(o,e,t,i);return a?{setter:new on(a.value,this.validate,this.set,this.priority,this.subPriority),rest:a.rest}:null}validate(o,e,t){return!0}};var rn=class extends C{priority=140;parse(o,e,t){switch(e){case`G`:case`GG`:case`GGG`:return t.era(o,{width:`abbreviated`})||t.era(o,{width:`narrow`});case`GGGGG`:return t.era(o,{width:`narrow`});default:return t.era(o,{width:`wide`})||t.era(o,{width:`abbreviated`})||t.era(o,{width:`narrow`})}}set(o,e,t){return e.era=t,o.setFullYear(t,0,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`R`,`u`,`t`,`T`]};var H={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/};var We={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function X(n,o){return n&&{value:o(n.value),rest:n.rest}}function z(n,o){let e=o.match(n);return e?{value:parseInt(e[0],10),rest:o.slice(e[0].length)}:null}function qe(n,o){let e=o.match(n);if(!e)return null;if(e[0]===`Z`)return{value:0,rest:o.slice(1)};let t=e[1]===`+`?1:-1,i=e[2]?parseInt(e[2],10):0,a=e[3]?parseInt(e[3],10):0,d=e[5]?parseInt(e[5],10):0;return{value:t*(i*ta+a*hn$1+d*bd$1),rest:o.slice(e[0].length)}}function sn(n){return z(H.anyDigitsSigned,n)}function O(n,o){switch(n){case 1:return z(H.singleDigit,o);case 2:return z(H.twoDigits,o);case 3:return z(H.threeDigits,o);case 4:return z(H.fourDigits,o);default:return z(new RegExp(`^\\d{1,`+n+`}`),o)}}function Qt(n,o){switch(n){case 1:return z(H.singleDigitSigned,o);case 2:return z(H.twoDigitsSigned,o);case 3:return z(H.threeDigitsSigned,o);case 4:return z(H.fourDigitsSigned,o);default:return z(new RegExp(`^-?\\d{1,`+n+`}`),o)}}function $t(n){switch(n){case`morning`:return 4;case`evening`:return 17;case`pm`:case`noon`:case`afternoon`:return 12;default:return 0}}function cn(n,o){let e=o>0,t=e?o:1-o,i;if(t<=50)i=n||100;else{let a=t+50,d=Math.trunc(a/100)*100,y=n>=a%100;i=n+d-(y?100:0)}return e?i:1-i}function ln(n){return n%400===0||n%4===0&&n%100!==0}var dn=class extends C{priority=130;incompatibleTokens=[`Y`,`R`,`u`,`w`,`I`,`i`,`e`,`c`,`t`,`T`];parse(o,e,t){let i=a=>({year:a,isTwoDigitYear:e===`yy`});switch(e){case`y`:return X(O(4,o),i);case`yo`:return X(t.ordinalNumber(o,{unit:`year`}),i);default:return X(O(e.length,o),i)}}validate(o,e){return e.isTwoDigitYear||e.year>0}set(o,e,t){let i=o.getFullYear();if(t.isTwoDigitYear){let d=cn(t.year,i);return o.setFullYear(d,0,1),o.setHours(0,0,0,0),o}let a=!(`era`in e)||e.era===1?t.year:1-t.year;return o.setFullYear(a,0,1),o.setHours(0,0,0,0),o}};var mn=class extends C{priority=130;parse(o,e,t){let i=a=>({year:a,isTwoDigitYear:e===`YY`});switch(e){case`Y`:return X(O(4,o),i);case`Yo`:return X(t.ordinalNumber(o,{unit:`year`}),i);default:return X(O(e.length,o),i)}}validate(o,e){return e.isTwoDigitYear||e.year>0}set(o,e,t,i){let a=gn$1(o,i);if(t.isTwoDigitYear){let y=cn(t.year,a);return o.setFullYear(y,0,i.firstWeekContainsDate),o.setHours(0,0,0,0),gt(o,i)}let d=!(`era`in e)||e.era===1?t.year:1-t.year;return o.setFullYear(d,0,i.firstWeekContainsDate),o.setHours(0,0,0,0),gt(o,i)}incompatibleTokens=[`y`,`R`,`u`,`Q`,`q`,`M`,`L`,`I`,`d`,`D`,`i`,`t`,`T`]};var pn=class extends C{priority=130;parse(o,e){return e===`R`?Qt(4,o):Qt(e.length,o)}set(o,e,t){let i=R$1(o,0);return i.setFullYear(t,0,4),i.setHours(0,0,0,0),Rt$1(i)}incompatibleTokens=[`G`,`y`,`Y`,`u`,`Q`,`q`,`M`,`L`,`w`,`d`,`D`,`e`,`c`,`t`,`T`]};var hn=class extends C{priority=130;parse(o,e){return e===`u`?Qt(4,o):Qt(e.length,o)}set(o,e,t){return o.setFullYear(t,0,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`G`,`y`,`Y`,`R`,`w`,`I`,`i`,`e`,`c`,`t`,`T`]};var un=class extends C{priority=120;parse(o,e,t){switch(e){case`Q`:case`QQ`:return O(e.length,o);case`Qo`:return t.ordinalNumber(o,{unit:`quarter`});case`QQQ`:return t.quarter(o,{width:`abbreviated`,context:`formatting`})||t.quarter(o,{width:`narrow`,context:`formatting`});case`QQQQQ`:return t.quarter(o,{width:`narrow`,context:`formatting`});default:return t.quarter(o,{width:`wide`,context:`formatting`})||t.quarter(o,{width:`abbreviated`,context:`formatting`})||t.quarter(o,{width:`narrow`,context:`formatting`})}}validate(o,e){return e>=1&&e<=4}set(o,e,t){return o.setMonth((t-1)*3,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`q`,`M`,`L`,`w`,`I`,`d`,`D`,`i`,`e`,`c`,`t`,`T`]};var _n=class extends C{priority=120;parse(o,e,t){switch(e){case`q`:case`qq`:return O(e.length,o);case`qo`:return t.ordinalNumber(o,{unit:`quarter`});case`qqq`:return t.quarter(o,{width:`abbreviated`,context:`standalone`})||t.quarter(o,{width:`narrow`,context:`standalone`});case`qqqqq`:return t.quarter(o,{width:`narrow`,context:`standalone`});default:return t.quarter(o,{width:`wide`,context:`standalone`})||t.quarter(o,{width:`abbreviated`,context:`standalone`})||t.quarter(o,{width:`narrow`,context:`standalone`})}}validate(o,e){return e>=1&&e<=4}set(o,e,t){return o.setMonth((t-1)*3,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`Q`,`M`,`L`,`w`,`I`,`d`,`D`,`i`,`e`,`c`,`t`,`T`]};var fn=class extends C{incompatibleTokens=[`Y`,`R`,`q`,`Q`,`L`,`w`,`I`,`D`,`i`,`e`,`c`,`t`,`T`];priority=110;parse(o,e,t){let i=a=>a-1;switch(e){case`M`:return X(z(H.month,o),i);case`MM`:return X(O(2,o),i);case`Mo`:return X(t.ordinalNumber(o,{unit:`month`}),i);case`MMM`:return t.month(o,{width:`abbreviated`,context:`formatting`})||t.month(o,{width:`narrow`,context:`formatting`});case`MMMMM`:return t.month(o,{width:`narrow`,context:`formatting`});default:return t.month(o,{width:`wide`,context:`formatting`})||t.month(o,{width:`abbreviated`,context:`formatting`})||t.month(o,{width:`narrow`,context:`formatting`})}}validate(o,e){return e>=0&&e<=11}set(o,e,t){return o.setMonth(t,1),o.setHours(0,0,0,0),o}};var gn=class extends C{priority=110;parse(o,e,t){let i=a=>a-1;switch(e){case`L`:return X(z(H.month,o),i);case`LL`:return X(O(2,o),i);case`Lo`:return X(t.ordinalNumber(o,{unit:`month`}),i);case`LLL`:return t.month(o,{width:`abbreviated`,context:`standalone`})||t.month(o,{width:`narrow`,context:`standalone`});case`LLLLL`:return t.month(o,{width:`narrow`,context:`standalone`});default:return t.month(o,{width:`wide`,context:`standalone`})||t.month(o,{width:`abbreviated`,context:`standalone`})||t.month(o,{width:`narrow`,context:`standalone`})}}validate(o,e){return e>=0&&e<=11}set(o,e,t){return o.setMonth(t,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`q`,`Q`,`M`,`w`,`I`,`D`,`i`,`e`,`c`,`t`,`T`]};function Ya(n,o,e){let t=x(n,e?.in),i=_a(t,e)-o;return t.setDate(t.getDate()-i*7),x(t,e?.in)}var bn=class extends C{priority=100;parse(o,e,t){switch(e){case`w`:return z(H.week,o);case`wo`:return t.ordinalNumber(o,{unit:`week`});default:return O(e.length,o)}}validate(o,e){return e>=1&&e<=53}set(o,e,t,i){return gt(Ya(o,t,i),i)}incompatibleTokens=[`y`,`R`,`u`,`q`,`Q`,`M`,`L`,`I`,`d`,`D`,`i`,`t`,`T`]};function Za(n,o,e){let t=x(n,e?.in),i=pa(t,e)-o;return t.setDate(t.getDate()-i*7),t}var vn=class extends C{priority=100;parse(o,e,t){switch(e){case`I`:return z(H.week,o);case`Io`:return t.ordinalNumber(o,{unit:`week`});default:return O(e.length,o)}}validate(o,e){return e>=1&&e<=53}set(o,e,t){return Rt$1(Za(o,t))}incompatibleTokens=[`y`,`Y`,`u`,`q`,`Q`,`M`,`L`,`w`,`d`,`D`,`e`,`c`,`t`,`T`]};var Yr=[31,28,31,30,31,30,31,31,30,31,30,31];var Zr=[31,29,31,30,31,30,31,31,30,31,30,31];var yn=class extends C{priority=90;subPriority=1;parse(o,e,t){switch(e){case`d`:return z(H.date,o);case`do`:return t.ordinalNumber(o,{unit:`date`});default:return O(e.length,o)}}validate(o,e){let i=ln(o.getFullYear()),a=o.getMonth();return i?e>=1&&e<=Zr[a]:e>=1&&e<=Yr[a]}set(o,e,t){return o.setDate(t),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`q`,`Q`,`w`,`I`,`D`,`i`,`e`,`c`,`t`,`T`]};var xn=class extends C{priority=90;subpriority=1;parse(o,e,t){switch(e){case`D`:case`DD`:return z(H.dayOfYear,o);case`Do`:return t.ordinalNumber(o,{unit:`date`});default:return O(e.length,o)}}validate(o,e){return ln(o.getFullYear())?e>=1&&e<=366:e>=1&&e<=365}set(o,e,t){return o.setMonth(0,t),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`q`,`Q`,`M`,`L`,`w`,`I`,`d`,`E`,`i`,`e`,`c`,`t`,`T`]};function Xt(n,o,e){let t=et(),i=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,a=x(n,e?.in),d=a.getDay(),N=(o%7+7)%7,ee=7-i;return na(a,o<0||o>6?o-(d+ee)%7:(N+ee)%7-(d+ee)%7,e)}var kn=class extends C{priority=90;parse(o,e,t){switch(e){case`E`:case`EE`:case`EEE`:return t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`});case`EEEEE`:return t.day(o,{width:`narrow`,context:`formatting`});case`EEEEEE`:return t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`});default:return t.day(o,{width:`wide`,context:`formatting`})||t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`})}}validate(o,e){return e>=0&&e<=6}set(o,e,t,i){return o=Xt(o,t,i),o.setHours(0,0,0,0),o}incompatibleTokens=[`D`,`i`,`e`,`c`,`t`,`T`]};var Cn=class extends C{priority=90;parse(o,e,t,i){let a=d=>{let y=Math.floor((d-1)/7)*7;return(d+i.weekStartsOn+6)%7+y};switch(e){case`e`:case`ee`:return X(O(e.length,o),a);case`eo`:return X(t.ordinalNumber(o,{unit:`day`}),a);case`eee`:return t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`});case`eeeee`:return t.day(o,{width:`narrow`,context:`formatting`});case`eeeeee`:return t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`});default:return t.day(o,{width:`wide`,context:`formatting`})||t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`})}}validate(o,e){return e>=0&&e<=6}set(o,e,t,i){return o=Xt(o,t,i),o.setHours(0,0,0,0),o}incompatibleTokens=[`y`,`R`,`u`,`q`,`Q`,`M`,`L`,`I`,`d`,`D`,`E`,`i`,`c`,`t`,`T`]};var Sn=class extends C{priority=90;parse(o,e,t,i){let a=d=>{let y=Math.floor((d-1)/7)*7;return(d+i.weekStartsOn+6)%7+y};switch(e){case`c`:case`cc`:return X(O(e.length,o),a);case`co`:return X(t.ordinalNumber(o,{unit:`day`}),a);case`ccc`:return t.day(o,{width:`abbreviated`,context:`standalone`})||t.day(o,{width:`short`,context:`standalone`})||t.day(o,{width:`narrow`,context:`standalone`});case`ccccc`:return t.day(o,{width:`narrow`,context:`standalone`});case`cccccc`:return t.day(o,{width:`short`,context:`standalone`})||t.day(o,{width:`narrow`,context:`standalone`});default:return t.day(o,{width:`wide`,context:`standalone`})||t.day(o,{width:`abbreviated`,context:`standalone`})||t.day(o,{width:`short`,context:`standalone`})||t.day(o,{width:`narrow`,context:`standalone`})}}validate(o,e){return e>=0&&e<=6}set(o,e,t,i){return o=Xt(o,t,i),o.setHours(0,0,0,0),o}incompatibleTokens=[`y`,`R`,`u`,`q`,`Q`,`M`,`L`,`I`,`d`,`D`,`E`,`i`,`e`,`t`,`T`]};function Ja(n,o){let e=x(n,o?.in).getDay();return e===0?7:e}function er(n,o,e){let t=x(n,e?.in);return na(t,o-Ja(t,e),e)}var wn=class extends C{priority=90;parse(o,e,t){let i=a=>a===0?7:a;switch(e){case`i`:case`ii`:return O(e.length,o);case`io`:return t.ordinalNumber(o,{unit:`day`});case`iii`:return X(t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`}),i);case`iiiii`:return X(t.day(o,{width:`narrow`,context:`formatting`}),i);case`iiiiii`:return X(t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`}),i);default:return X(t.day(o,{width:`wide`,context:`formatting`})||t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`}),i)}}validate(o,e){return e>=1&&e<=7}set(o,e,t){return o=er(o,t),o.setHours(0,0,0,0),o}incompatibleTokens=[`y`,`Y`,`u`,`q`,`Q`,`M`,`L`,`w`,`d`,`D`,`E`,`e`,`c`,`t`,`T`]};var Mn=class extends C{priority=80;parse(o,e,t){switch(e){case`a`:case`aa`:case`aaa`:return t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`});case`aaaaa`:return t.dayPeriod(o,{width:`narrow`,context:`formatting`});default:return t.dayPeriod(o,{width:`wide`,context:`formatting`})||t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`})}}set(o,e,t){return o.setHours($t(t),0,0,0),o}incompatibleTokens=[`b`,`B`,`H`,`k`,`t`,`T`]};var In=class extends C{priority=80;parse(o,e,t){switch(e){case`b`:case`bb`:case`bbb`:return t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`});case`bbbbb`:return t.dayPeriod(o,{width:`narrow`,context:`formatting`});default:return t.dayPeriod(o,{width:`wide`,context:`formatting`})||t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`})}}set(o,e,t){return o.setHours($t(t),0,0,0),o}incompatibleTokens=[`a`,`B`,`H`,`k`,`t`,`T`]};var En=class extends C{priority=80;parse(o,e,t){switch(e){case`B`:case`BB`:case`BBB`:return t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`});case`BBBBB`:return t.dayPeriod(o,{width:`narrow`,context:`formatting`});default:return t.dayPeriod(o,{width:`wide`,context:`formatting`})||t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`})}}set(o,e,t){return o.setHours($t(t),0,0,0),o}incompatibleTokens=[`a`,`b`,`t`,`T`]};var Tn=class extends C{priority=70;parse(o,e,t){switch(e){case`h`:return z(H.hour12h,o);case`ho`:return t.ordinalNumber(o,{unit:`hour`});default:return O(e.length,o)}}validate(o,e){return e>=1&&e<=12}set(o,e,t){let i=o.getHours()>=12;return i&&t<12?o.setHours(t+12,0,0,0):!i&&t===12?o.setHours(0,0,0,0):o.setHours(t,0,0,0),o}incompatibleTokens=[`H`,`K`,`k`,`t`,`T`]};var Nn=class extends C{priority=70;parse(o,e,t){switch(e){case`H`:return z(H.hour23h,o);case`Ho`:return t.ordinalNumber(o,{unit:`hour`});default:return O(e.length,o)}}validate(o,e){return e>=0&&e<=23}set(o,e,t){return o.setHours(t,0,0,0),o}incompatibleTokens=[`a`,`b`,`h`,`K`,`k`,`t`,`T`]};var Rn=class extends C{priority=70;parse(o,e,t){switch(e){case`K`:return z(H.hour11h,o);case`Ko`:return t.ordinalNumber(o,{unit:`hour`});default:return O(e.length,o)}}validate(o,e){return e>=0&&e<=11}set(o,e,t){return o.getHours()>=12&&t<12?o.setHours(t+12,0,0,0):o.setHours(t,0,0,0),o}incompatibleTokens=[`h`,`H`,`k`,`t`,`T`]};var Dn=class extends C{priority=70;parse(o,e,t){switch(e){case`k`:return z(H.hour24h,o);case`ko`:return t.ordinalNumber(o,{unit:`hour`});default:return O(e.length,o)}}validate(o,e){return e>=1&&e<=24}set(o,e,t){let i=t<=24?t%24:t;return o.setHours(i,0,0,0),o}incompatibleTokens=[`a`,`b`,`h`,`H`,`K`,`t`,`T`]};var On=class extends C{priority=60;parse(o,e,t){switch(e){case`m`:return z(H.minute,o);case`mo`:return t.ordinalNumber(o,{unit:`minute`});default:return O(e.length,o)}}validate(o,e){return e>=0&&e<=59}set(o,e,t){return o.setMinutes(t,0,0),o}incompatibleTokens=[`t`,`T`]};var An=class extends C{priority=50;parse(o,e,t){switch(e){case`s`:return z(H.second,o);case`so`:return t.ordinalNumber(o,{unit:`second`});default:return O(e.length,o)}}validate(o,e){return e>=0&&e<=59}set(o,e,t){return o.setSeconds(t,0),o}incompatibleTokens=[`t`,`T`]};var Fn=class extends C{priority=30;parse(o,e){let t=i=>Math.trunc(i*Math.pow(10,-e.length+3));return X(O(e.length,o),t)}set(o,e,t){return o.setMilliseconds(t),o}incompatibleTokens=[`t`,`T`]};var Pn=class extends C{priority=10;parse(o,e){switch(e){case`X`:return qe(We.basicOptionalMinutes,o);case`XX`:return qe(We.basic,o);case`XXXX`:return qe(We.basicOptionalSeconds,o);case`XXXXX`:return qe(We.extendedOptionalSeconds,o);default:return qe(We.extended,o)}}set(o,e,t){return e.timestampIsSet?o:R$1(o,o.getTime()-Or$1(o)-t)}incompatibleTokens=[`t`,`T`,`x`]};var Vn=class extends C{priority=10;parse(o,e){switch(e){case`x`:return qe(We.basicOptionalMinutes,o);case`xx`:return qe(We.basic,o);case`xxxx`:return qe(We.basicOptionalSeconds,o);case`xxxxx`:return qe(We.extendedOptionalSeconds,o);default:return qe(We.extended,o)}}set(o,e,t){return e.timestampIsSet?o:R$1(o,o.getTime()-Or$1(o)-t)}incompatibleTokens=[`t`,`T`,`X`]};var Ln=class extends C{priority=40;parse(o){return sn(o)}set(o,e,t){return[R$1(o,t*1e3),{timestampIsSet:!0}]}incompatibleTokens=`*`};var Bn=class extends C{priority=20;parse(o){return sn(o)}set(o,e,t){return[R$1(o,t),{timestampIsSet:!0}]}incompatibleTokens=`*`};var tr={G:new rn,y:new dn,Y:new mn,R:new pn,u:new hn,Q:new un,q:new _n,M:new fn,L:new gn,w:new bn,I:new vn,d:new yn,D:new xn,E:new kn,e:new Cn,c:new Sn,i:new wn,a:new Mn,b:new In,B:new En,h:new Tn,H:new Nn,K:new Rn,k:new Dn,m:new On,s:new An,S:new Fn,X:new Pn,x:new Vn,t:new Ln,T:new Bn};var Jr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;var es=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;var ts=/^'([^]*?)'?$/;var is=/''/g;var ns=/\S/;var os=/[a-zA-Z]/;function ir(n,o,e,t){let i=()=>R$1(t?.in||e,NaN),a=hf(),d=t?.locale??a.locale??ve$1,y=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,N=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0;if(!o)return n?i():x(e,t?.in);let ee={firstWeekContainsDate:y,weekStartsOn:N,locale:d},le=[new an(t?.in,e)],Re=o.match(es).map(B=>{let Y=B[0];if(Y in va){let Pe=va[Y];return Pe(B,d.formatLong)}return B}).join(``).match(Jr),ot=[];for(let B of Re){!t?.useAdditionalWeekYearTokens&&xa(B)&&ka(B,o,n),!t?.useAdditionalDayOfYearTokens&&$a(B)&&ka(B,o,n);let Y=B[0],Pe=tr[Y];if(Pe){let{incompatibleTokens:No}=Pe;if(Array.isArray(No)){let Ro=ot.find(Do=>No.includes(Do.token)||Do.token===Y);if(Ro)throw new RangeError(`The format string mustn't contain \`${Ro.fullToken}\` and \`${B}\` at the same time`)}else if(Pe.incompatibleTokens===`*`&&ot.length>0)throw new RangeError(`The format string mustn't contain \`${B}\` and any other token at the same time`);ot.push({token:Y,fullToken:B});let Xn=Pe.run(n,B,d.match,ee);if(!Xn)return i();le.push(Xn.setter),n=Xn.rest}else{if(Y.match(os))throw new RangeError("Format string contains an unescaped latin alphabet character `"+Y+"`");if(B===`''`?B=`'`:Y===`'`&&(B=as(B)),n.indexOf(B)===0)n=n.slice(B.length);else return i()}}if(n.length>0&&ns.test(n))return i();let ii=le.map(B=>B.priority).sort((B,Y)=>Y-B).filter((B,Y,Pe)=>Pe.indexOf(B)===Y).map(B=>le.filter(Y=>Y.priority===B).sort((Y,Pe)=>Pe.subPriority-Y.subPriority)).map(B=>B[0]),at=x(e,t?.in);if(isNaN(+at))return i();let ni={};for(let B of ii){if(!B.validate(at,ee))return i();let Y=B.set(at,ni,ee);Array.isArray(Y)?(at=Y[0],Object.assign(ni,Y[1])):at=Y}return at}function as(n){return n.match(ts)[1].replace(is,`'`)}var rs=[`determinateSpinner`];function ss(n,o){if(n&1&&(dh(),aa(0,`svg`,11),by(1,`circle`,12),Td()),n&2){let e=g_();wy(`viewBox`,e._viewBox()),AC(),Hy(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),wy(`r`,e._circleRadius())}}var cs=new w(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:nr})});var nr=100;var ls=10;var Yt=(()=>{class n{_elementRef=y(Yt$1);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=y(cs),t=$$1(),i=this._elementRef.nativeElement;this._noopAnimations=t===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=i.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&t===`reduced-motion`&&i.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=nr;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-ls)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(t){return new(t||n)};static ɵcmp=oT({type:n,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(t,i){if(t&1&&ky(rs,5),t&2){let a;E_(a=I_())&&(i._determinateCircle=a.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(t,i){t&2&&(wy(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,i.mode===`determinate`?i.value:null)(`mode`,i.mode),j_(`mat-`+i.color),Hy(`width`,i.diameter,`px`)(`height`,i.diameter,`px`)(`--%NS%mat-progress-spinner-size`,i.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,i.diameter+`px`),Uy(`_mat-animation-noopable`,i._noopAnimations)(`mdc-circular-progress--indeterminate`,i.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,uM],diameter:[2,`diameter`,`diameter`,uM],strokeWidth:[2,`strokeWidth`,`strokeWidth`,uM]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(t,i){if(t&1&&(dy(0,ss,2,8,`ng-template`,null,0,TS),aa(2,`div`,2,1),dh(),aa(4,`svg`,3),by(5,`circle`,4),Td()(),fh(),aa(6,`div`,5)(7,`div`,6)(8,`div`,7),Sy(9,8),Td(),aa(10,`div`,9),Sy(11,8),Td(),aa(12,`div`,10),Sy(13,8),Td()()()),t&2){let a=C_(1);AC(4),wy(`viewBox`,i._viewBox()),AC(),Hy(`stroke-dasharray`,i._strokeCircumference(),`px`)(`stroke-dashoffset`,i._strokeDashOffset(),`px`)(`stroke-width`,i._circleStrokeWidth(),`%`),wy(`r`,i._circleRadius()),AC(4),Cy(`ngTemplateOutlet`,a),AC(2),Cy(`ngTemplateOutlet`,a),AC(2),Cy(`ngTemplateOutlet`,a)}},dependencies:[qM],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})}return n})();var St=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ri({type:n});static ɵinj=Sr$1({imports:[be]})}return n})();var hi=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new le;bulk={select:o=>this._select(o),deselect:o=>this._deselect(o),setSelection:o=>this._setSelection(o)};constructor(o=!1,e,t=!0,i){this._multiple=o,this._emitChanges=t,this.compareWith=i,e&&e.length&&(o?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...o){return this._select(o)}deselect(...o){return this._deselect(o)}setSelection(...o){return this._setSelection(o)}toggle(o){return this.isSelected(o)?this.deselect(o):this.select(o)}clear(o=!0){this._unmarkAll();let e=this._hasQueuedChanges();return o&&this._emitChangeEvent(),e}isSelected(o){return this._selection.has(this._getConcreteValue(o))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(o){this._multiple&&this.selected&&this._selected.sort(o)}isMultipleSelection(){return this._multiple}_select(o){this._verifyValueAssignment(o),o.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(o){this._verifyValueAssignment(o),o.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(o){this._verifyValueAssignment(o);let e=this.selected,t=new Set(o.map(a=>this._getConcreteValue(a)));o.forEach(a=>this._markSelected(a)),e.filter(a=>!t.has(this._getConcreteValue(a,t))).forEach(a=>this._unmarkSelected(a));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(o){o=this._getConcreteValue(o),this.isSelected(o)||(this._multiple||this._unmarkAll(),this.isSelected(o)||this._selection.add(o),this._emitChanges&&this._selectedToEmit.push(o))}_unmarkSelected(o){o=this._getConcreteValue(o),this.isSelected(o)&&(this._selection.delete(o),this._emitChanges&&this._deselectedToEmit.push(o))}_unmarkAll(){this.isEmpty()||this._selection.forEach(o=>this._unmarkSelected(o))}_verifyValueAssignment(o){o.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(o,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(o,t))return t;return o}else return o}};var ho=(()=>{class n{_listeners=[];notify(e,t){for(let i of this._listeners)i(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(t){return new(t||n)};static ɵprov=Be({token:n,factory:n.ɵfac})}return n})();var us=[`trigger`];var _s=[`panel`];var fs=[[[`mat-select-trigger`]],`*`];var gs=[`mat-select-trigger`,`*`];function bs(n,o){if(n&1&&(aa(0,`span`,4),Z_(1),Td()),n&2){let e=g_();AC(),Ky(e.placeholder)}}function vs(n,o){n&1&&v_(0)}function ys(n,o){if(n&1&&(aa(0,`span`,11),Z_(1),Td()),n&2){let e=g_(2);AC(),Ky(e.triggerValue)}}function xs(n,o){if(n&1&&(aa(0,`span`,5),XT(1,vs,1,0)(2,ys,2,1,`span`,11),Td()),n&2){let e=g_();AC(),JT(e.customTrigger?1:2)}}function ks(n,o){if(n&1){let e=u_();aa(0,`div`,12,1),xy(`keydown`,function(i){Jp(e);return eh(g_()._handleKeydown(i))}),v_(2,1),Td()}if(n&2){let e=g_();j_(e.panelClass),Uy(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),wy(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var Cs=new w(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=y(ve);return()=>It$1(n)}});var Ss=new w(`MAT_SELECT_CONFIG`);var or=new w(`MatSelectTrigger`);var uo=class{source;value;constructor(o,e){this.source=o,this.value=e}};var Zt=(()=>{class n{_viewportRuler=y(B);_changeDetectorRef=y(ef);_elementRef=y(Yt$1);_dir=y(V,{optional:!0});_idGenerator=y(ie);_renderer=y(nr$1);_parentFormField=y(le$2,{optional:!0});ngControl=y(we,{self:!0,optional:!0});_liveAnnouncer=y(mt);_defaultOptions=y(Ss,{optional:!0});_animationsDisabled=De();_popoverLocation;_initialized=new le;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,a=Te(e,this.options,this.optionGroups),d=t._getHostElement();e===0&&a===1?i.scrollTop=0:i.scrollTop=Oe(d.offsetTop,d.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new uo(this,e)}_scrollStrategyFactory=y(Cs);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new le;_errorStateTracker;stateChanges=new le;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=It(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator($n$1.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=YD(()=>{let e=this.options;return e?e.changes.pipe(KD(e),wc$1(()=>QD(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(wc$1(()=>this.optionSelectionChanges))});openedChange=new Ht;_openedStream=this.openedChange.pipe(Sn$1(e=>e),xe(()=>{}));_closedStream=this.openedChange.pipe(Sn$1(e=>!e),xe(()=>{}));selectionChange=new Ht;valueChange=new Ht;constructor(){let e=y(me$1),t=y(yc$1,{optional:!0}),i=y(Cc$1,{optional:!0}),a=y(new gv(`tabindex`),{optional:!0}),d=y(Ht$1,{optional:!0}),y$3=y(Rt$2,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new J(e,y$3||this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=d?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new hi(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(XD(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(XD(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(KD(null),XD(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute(`aria-labelledby`,e):i.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Mn$1(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,a=>{a.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,a=t===13||t===32,d=this._keyManager;if(!d.isTyping()&&a&&!Ze(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let y=this.selected;d.onKeydown(e);let N=this.selected;N&&y!==N&&this._liveAnnouncer.announce(N.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,a=i===40||i===38,d=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!d&&(i===13||i===32)&&t.activeItem&&!Ze(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!d&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let y=this.options.some(N=>!N.disabled&&!N.selected);this.options.forEach(N=>{N.disabled||(y?N.select():N.deselect())})}else{let y=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==y&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Ze(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof zt?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new se$1(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=QD(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(XD(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),QD(...this.options.map(t=>t._stateChanges)).pipe(XD(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=y$2(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||n)};static ɵcmp=oT({type:n,selectors:[[`mat-select`]],contentQueries:function(t,i,a){if(t&1&&Oy(a,or,5)(a,X$1,5)(a,ce,5),t&2){let d;E_(d=I_())&&(i.customTrigger=d.first),E_(d=I_())&&(i.options=d),E_(d=I_())&&(i.optionGroups=d)}},viewQuery:function(t,i){if(t&1&&ky(us,5)(_s,5)(ci,5),t&2){let a;E_(a=I_())&&(i.trigger=a.first),E_(a=I_())&&(i.panel=a.first),E_(a=I_())&&(i._overlayDir=a.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(t,i){t&1&&xy(`keydown`,function(d){return i._handleKeydown(d)})(`focus`,function(){return i._onFocus()})(`blur`,function(){return i._onBlur()}),t&2&&(wy(`id`,i.id)(`tabindex`,i.disabled?-1:i.tabIndex)(`aria-controls`,i.panelOpen?i.id+`-panel`:null)(`aria-expanded`,i.panelOpen)(`aria-label`,i.ariaLabel||null)(`aria-required`,i.required.toString())(`aria-disabled`,i.disabled.toString())(`aria-invalid`,i.errorState)(`aria-activedescendant`,i._getAriaActiveDescendant()),Uy(`mat-mdc-select-disabled`,i.disabled)(`mat-mdc-select-invalid`,i.errorState)(`mat-mdc-select-required`,i.required)(`mat-mdc-select-empty`,i.empty)(`mat-mdc-select-multiple`,i.multiple)(`mat-select-open`,i.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,cM],disableRipple:[2,`disableRipple`,`disableRipple`,cM],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:uM(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,cM],placeholder:`placeholder`,required:[2,`required`,`required`,cM],multiple:[2,`multiple`,`multiple`,cM],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,cM],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,uM],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,cM]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[aS([{provide:ae,useExisting:n},{provide:le$1,useExisting:n}]),ua],ngContentSelectors:gs,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(t,i){if(t&1&&(y_(fs),aa(0,`div`,2,0),xy(`click`,function(){return i.open()}),aa(3,`div`,3),XT(4,bs,2,1,`span`,4)(5,xs,3,1,`span`,5),Td(),aa(6,`div`,6)(7,`div`,7),dh(),aa(8,`svg`,8),by(9,`path`,9),Td()()()(),dy(10,ks,3,16,`ng-template`,10),xy(`detach`,function(){return i.close()})(`backdropClick`,function(){return i.close()})(`overlayKeydown`,function(d){return i._handleOverlayKeydown(d)})),t&2){let a=C_(1);AC(3),wy(`id`,i._valueId),AC(),JT(i.empty?4:5),AC(6),Cy(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,i._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,i._scrollStrategy)(`cdkConnectedOverlayOrigin`,i._preferredOverlayOrigin||a)(`cdkConnectedOverlayPositions`,i._positions)(`cdkConnectedOverlayWidth`,i._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,i._popoverLocation)}},dependencies:[zt,ci],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return n})();var Uu=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=it({type:n,selectors:[[`mat-select-trigger`]],features:[aS([{provide:or,useExisting:n}])]})}return n})();var Jt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ri({type:n});static ɵinj=Sr$1({imports:[di,He,be,Vt,de$1,He]})}return n})();var ws=[`input`];var Ms=[`*`];var fo={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var Is=new w(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>fo});var ye=(function(n){return n[n.Init=0]=`Init`,n[n.Checked=1]=`Checked`,n[n.Unchecked=2]=`Unchecked`,n[n.Indeterminate=3]=`Indeterminate`,n})(ye||{});var go=class{source;checked};var fi=(()=>{class n{_elementRef=y(Yt$1);_changeDetectorRef=y(ef);_ngZone=y(pe);_animationsDisabled=De();_options=y(Is,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new go;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new Ht;indeterminateChange=new Ht;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=ye.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){y(T).load(Rt$3);let e=y(new gv(`tabindex`),{optional:!0});this._options=this._options||fo,this.color=this._options.color||fo.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=y(ie).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(ye.Indeterminate):this._transitionCheckState(this.checked?ye.Checked:ye.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=It(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,i=this._getAnimationTargetElement();if(!(t===e||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let a=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(a)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?ye.Checked:ye.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return``;switch(e){case ye.Init:if(t===ye.Checked)return this._animationClasses.uncheckedToChecked;if(t==ye.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case ye.Unchecked:return t===ye.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case ye.Checked:return t===ye.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case ye.Indeterminate:return t===ye.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(t){return new(t||n)};static ɵcmp=oT({type:n,selectors:[[`mat-checkbox`]],viewQuery:function(t,i){if(t&1&&ky(ws,5),t&2){let a;E_(a=I_())&&(i._inputElement=a.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(t,i){t&2&&(My(`id`,i.id),wy(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),j_(i.color?`mat-`+i.color:`mat-accent`),Uy(`_mat-animation-noopable`,i._animationsDisabled)(`mdc-checkbox--disabled`,i.disabled)(`mat-mdc-checkbox-disabled`,i.disabled)(`mat-mdc-checkbox-checked`,i.checked)(`mat-mdc-checkbox-disabled-interactive`,i.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,cM],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,cM],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,cM],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?void 0:uM(e)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,cM],checked:[2,`checked`,`checked`,cM],disabled:[2,`disabled`,`disabled`,cM],indeterminate:[2,`indeterminate`,`indeterminate`,cM]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[aS([{provide:Ne,useExisting:fs$1(()=>n),multi:!0},{provide:Ce,useExisting:n,multi:!0}]),ua],ngContentSelectors:Ms,decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,i){if(t&1&&(y_(),aa(0,`label`,3),xy(`click`,function(d){return i._preventBubblingFromLabel(d)}),aa(1,`span`,4,0),by(3,`span`,5),aa(4,`input`,6,1),xy(`blur`,function(){return i._onBlur()})(`click`,function(){return i._onInputClick()})(`change`,function(d){return i._onInteractionEvent(d)}),Td(),by(6,`span`,7),aa(7,`span`,8),dh(),aa(8,`svg`,9),by(9,`path`,10),Td(),fh(),by(10,`span`,11),Td(),by(11,`span`,12),Td(),aa(12,`span`,13,2),v_(14),Td()()),t&2){let a=C_(2);Cy(`labelPosition`,i.labelPosition)(`for`,i.inputId),AC(4),Uy(`mdc-checkbox--selected`,i.checked),Cy(`checked`,i.checked)(`indeterminate`,i.indeterminate)(`disabled`,i.disabled&&!i.disabledInteractive)(`id`,i.inputId)(`required`,i.required)(`tabIndex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex),wy(`aria-label`,i.ariaLabel||null)(`aria-labelledby`,i.ariaLabelledby)(`aria-describedby`,i.ariaDescribedby)(`aria-checked`,i.indeterminate?`mixed`:null)(`aria-controls`,i.ariaControls)(`aria-disabled`,i.disabled&&i.disabledInteractive?!0:null)(`aria-expanded`,i.ariaExpanded)(`aria-owns`,i.ariaOwns)(`name`,i.name)(`value`,i.value),AC(7),Cy(`matRippleTrigger`,a)(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleCentered`,!0)}},dependencies:[yt$1,Ue$1],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})();var zn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ri({type:n});static ɵinj=Sr$1({imports:[fi,be]})}return n})();var Es=[`*`];function Ts(n,o){if(n&1&&(aa(0,`div`,3),Z_(1),Td()),n&2){let e=g_();AC(),Ky(e.info())}}function Ns(n,o){if(n&1&&(aa(0,`icon`,4),Z_(1,`info`),Td()),n&2)Cy(`matTooltip`,g_().info())}function Rs(n,o){n&1&&by(0,`div`,5)}function Ds(n,o){if(n&1&&(aa(0,`div`,6)(1,`div`,8)(2,`div`,9)(3,`icon`),Z_(4),Td()()()()),n&2){let e=g_();AC(),Uy(`bg-base-200`,!e.value())(`bg-info`,e.value())(`border-info!`,e.value()),AC(),Uy(`left-1`,!e.value())(`left-5`,e.value())(`bg-base-400`,!e.value())(`bg-info-light`,e.value()),AC(2),Ky(e.value()?`done`:`remove`)}}function Os(n,o){if(n&1){let e=u_();aa(0,`mat-checkbox`,10),xy(`ngModelChange`,function(i){Jp(e);return eh(g_().setValue(i))}),Td(),gb()}if(n&2)Cy(`ngModel`,g_().value()),yb()}var rr=(()=>{class n{constructor(){this.toggle=j2(void 0),this.label=j2(void 0),this.info=j2(void 0),this.inline=j2(!0),this.value=It(void 0),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e}setValue(e){this.value.set(e),this._onChange&&this._onChange(e)}writeValue(e){this.value.set(e)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=oT({type:n,selectors:[[`settings-toggle`]],inputs:{toggle:[1,`toggle`],label:[1,`label`],info:[1,`info`],inline:[1,`inline`]},features:[aS([{provide:Ne,useExisting:fs$1(()=>n),multi:!0}])],ngContentSelectors:Es,decls:11,vars:13,consts:[[`type`,`button`,`matRipple`,``,1,`hover:bg-base-200`,`relative`,`flex`,`flex-1`,`items-center`,`space-x-2`,`overflow-hidden`,`rounded-sm`,`border`,`py-1`,`pr-1`,`pl-2`,3,`click`],[1,`z-10`,`flex`,`flex-1`,`items-center`,`space-x-2`,`px-2`,`text-left`],[1,`flex`,`flex-col`,`justify-center`,`w-full`,`leading-none`,`h-full`],[1,`text-xs`,`opacity-30`],[3,`matTooltip`],[1,`bg-info`,`absolute`,`inset-0`,`z-0`,`m-0!`,`opacity-10`],[1,`px-2`],[1,`pointer-events-none`,3,`ngModel`],[`toggle`,``,1,`border-base-400`,`relative`,`h-8`,`w-12`,`rounded-full`,`border-2`],[1,`absolute`,`top-1/2`,`flex`,`h-6`,`w-6`,`-translate-x-0.5`,`-translate-y-1/2`,`items-center`,`justify-center`,`rounded-full`,`text-black`,`shadow-sm`],[1,`pointer-events-none`,3,`ngModelChange`,`ngModel`]],template:function(t,i){t&1&&(y_(),aa(0,`button`,0),xy(`click`,function(){return i.setValue(!i.value())}),aa(1,`div`,1)(2,`div`,2)(3,`div`),Z_(4),v_(5),Td(),XT(6,Ts,2,1,`div`,3),Td(),XT(7,Ns,2,1,`icon`,4),Td(),XT(8,Rs,1,0,`div`,5),XT(9,Ds,5,15,`div`,6)(10,Os,1,1,`mat-checkbox`,7),Td()),t&2&&(Uy(`border-base-300`,!i.value())(`border-info`,i.value()),AC(),Uy(`py-2`,!i.inline())(`py-1`,!i.inline()),AC(3),Ky(i.label()),AC(2),JT(i.info()&&i.inline()?6:-1),AC(),JT(i.info()&&!i.inline()?7:-1),AC(),JT(i.value()?8:-1),AC(),JT(i.toggle()?9:10))},dependencies:[zn,fi,ng,Jp$1,Ac$1,_d$2,Yt$3,mt$1],styles:[`[_nghost-%COMP%]{display:flex}[toggle][_ngcontent-%COMP%]{transition:background .2s,left .2s}
/*# sourceMappingURL=settings-toggle.component.css.map */`]})}}return n})();var As=64;var Fs=64;var Ps=30*1e3;var Vs=`PlaceOS.image-cache-v1`;var Ls=`PlaceOS.image-cache-keys-v1`;var nt=new Map;var bo=new Map;var Rt=new Map;var sr=!1;function Bs(){if(!sr&&(sr=!0,typeof caches<`u`&&caches.delete(Vs).catch(()=>!1),typeof sessionStorage<`u`))try{sessionStorage.removeItem(Ls)}catch{}}function vo(n){let o=nt.get(n);if(o)return nt.delete(n),nt.set(n,o),o}function Us(n,o){let e=nt.get(n);for(e&&e!==o&&URL.revokeObjectURL(e),nt.delete(n),nt.set(n,o);nt.size>As;){let t=nt.keys().next().value;if(!t)break;let i=nt.get(t);nt.delete(t),i&&URL.revokeObjectURL(i)}return o}function zs(n){for(Rt.delete(n),Rt.set(n,Date.now()+Ps);Rt.size>Fs;){let o=Rt.keys().next().value;if(!o)break;Rt.delete(o)}}function Gs(n){let o=K();document.cookie=`${o===`x-api-key`?`api-key=`+encodeURIComponent(de()):`bearer_token=`+encodeURIComponent(o)};max-age=30;path=${n};samesite=strict;${location.protocol===`https:`?`secure;`:``}`}function Hs(){let n=K();return n===`x-api-key`?{"X-API-Key":de()}:{Authorization:`Bearer ${n}`}}function cr(n,o){return dr(n,()=>(Gs(o),fetch(n)))}function lr(n){return dr(n,()=>fetch(n,{headers:Hs()}))}async function dr(n,o){Bs();let e=vo(n);if(e)return e;if((Rt.get(n)||0)>Date.now())throw new Error(`Image load is in retry cooldown`);Rt.delete(n);let i=bo.get(n);if(i)return i;let a=o().then(async d=>{if(!d?.ok)throw new Error(`Failed to fetch image: ${d?.status}`);return Us(n,URL.createObjectURL(await d.blob()))}).catch(d=>{throw zs(n),d}).finally(()=>bo.delete(n));return bo.set(n,a),a}var wt=(()=>{class n extends y$1{constructor(){super(...arguments),this._element=y(Yt$1),this._observer=null,this._source_version=0,this.source=j2(void 0)}ngOnChanges(e){if(!e.source)return;this._source_version+=1,this.clearTimeout(`load`),this._observer?.disconnect(),this._observer=null;let t=this.source();if(t){if(!this._isLocalUrl(t)){this._element.nativeElement.src=t;return}this._loadWhenVisible(t,this._source_version)}}ngOnDestroy(){this._observer?.disconnect(),this._observer=null,super.ngOnDestroy()}_loadWhenVisible(e,t){if(typeof IntersectionObserver>`u`){this._loadImage(e,t);return}this._observer=new IntersectionObserver(i=>{i.some(({isIntersecting:a})=>a)&&(this._observer?.disconnect(),this._observer=null,this._loadImage(e,t))},{rootMargin:`300px`}),this._observer.observe(this._element.nativeElement)}async _loadImage(e,t){if(t!==this._source_version||e!==this.source())return;if(!Ue()){this.timeout(`load`,()=>{this._loadImage(e,t)},300);return}let i=vo(e);if(i){this._element.nativeElement.src=i;return}let a=e.includes(`/api/engine/v2/uploads`)||e.includes(`/api/engine/v2/signage`);try{let d=a?await cr(e,this._cookiePath(e)):await lr(e);t===this._source_version&&e===this.source()&&(this._element.nativeElement.src=d)}catch(d){t===this._source_version&&this._element.nativeElement.dispatchEvent(new ErrorEvent(`error`,{error:d}))}}_isLocalUrl(e){try{return new URL(e,location.href).origin===location.origin}catch{return!1}}_cookiePath(e){return e.includes(`/api/engine/v2/uploads`)?`/api/engine/v2/uploads`:`/api/engine/v2/signage`}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Og(n)))(i||n)}})()}static{this.ɵdir=it({type:n,selectors:[[`img`,`auth`,``],[`video`,`auth`,``],[`audio`,`auth`,``]],inputs:{source:[1,`source`]},features:[uy,ua]})}}return n})();var Ws=[`*`];function qs(n,o){n&1&&(aa(0,`button`,7)(1,`icon`),Z_(2,`close`),Td()())}function js(n,o){if(n&1&&XT(0,qs,3,0,`button`,7),n&2)JT(g_(2).loading()?-1:0)}function Ks(n,o){if(n&1&&(aa(0,`a`,8)(1,`icon`),Z_(2,`close`),Td()()),n&2)Cy(`routerLink`,g_(3).close())}function Qs(n,o){if(n&1&&XT(0,Ks,3,1,`a`,8),n&2)JT(g_(2).loading()?-1:0)}function $s(n,o){if(n&1&&XT(0,js,1,1)(1,Qs,1,1),n&2)JT(g_().close()?.length?1:0)}function Xs(n,o){n&1&&(v_(0),by(1,`div`,9))}function Ys(n,o){if(n&1&&(aa(0,`div`,5),by(1,`mat-spinner`,10),aa(2,`p`,11),Z_(3),Td()()),n&2){let e=g_();AC(),Cy(`diameter`,32),AC(2),Ky(e.loading())}}function Zs(n,o){if(n&1&&(aa(0,`kbd`,14),Z_(1),Td()),n&2){let e=g_(2);AC(),Ky(e.confirm_hotkey())}}function Js(n,o){if(n&1){let e=u_();aa(0,`footer`,12)(1,`button`,13),xy(`click`,function(){Jp(e);return eh(g_().confirm.emit())}),Z_(2),ES(3,`translate`),XT(4,Zs,2,1,`kbd`,14),Td()()}if(n&2){let e=g_();Uy(`max-w-156`,!e.full_width()),AC(),Cy(`disabled`,e.confirm_disabled()),AC(),Ad(` `,e.confirm_text()||wS(3,5,`COMMON.SAVE`),` `),AC(2),JT(e.confirm_hotkey()?4:-1)}}var Hn=(()=>{class n{constructor(){this.loading=j2(``),this.heading=j2(`Fullscreen Modal`),this.confirm_text=j2(``),this.confirm_hotkey=j2(``),this.confirm_disabled=j2(!1),this.close=j2([]),this.hide_confirm=j2(!1),this.hide_close=j2(!1),this.full_width=j2(!1),this.confirm=P2()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=oT({type:n,selectors:[[`fullscreen-modal-shell`],[``,`fs-modal-shell`,``]],inputs:{loading:[1,`loading`],heading:[1,`heading`],confirm_text:[1,`confirm_text`],confirm_hotkey:[1,`confirm_hotkey`],confirm_disabled:[1,`confirm_disabled`],close:[1,`close`],hide_confirm:[1,`hide_confirm`],hide_close:[1,`hide_close`],full_width:[1,`full_width`]},outputs:{confirm:`confirm`},ngContentSelectors:Ws,decls:10,vars:14,consts:[[`cdkScrollable`,``,1,`bg-base-200`,`fixed`,`inset-0`,`flex`,`flex-col`,`items-center`,`overflow-auto`,`px-2`],[1,`border-base-300`,`bg-base-100`,`fixed`,`top-0`,`mx-auto`,`h-screen`,`max-w-full`,`border-x`],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`mx-auto`,`my-2`,`flex`,`h-14`,`w-full`,`items-center`,`justify-between`,`rounded-sm`,`border-none`,`px-4`,`py-2`],[1,`flex`,`items-center`,`text-xl`,`font-medium`,`capitalize`,3,`innerHTML`],[1,`z-0`,`mx-auto`,`h-1/2`,`w-full`,`flex-1`,`space-y-8`,`p-2`],[1,`flex`,`h-1/2`,`w-full`,`flex-1`,`flex-col`,`items-center`,`justify-center`,`space-y-4`,`p-12`],[1,`bg-base-200`,`fixed`,`bottom-0`,`left-1/2`,`z-10`,`mx-auto`,`my-2`,`flex`,`w-full`,`-translate-x-1/2`,`items-center`,`justify-end`,`rounded-sm`,`border-none`,`px-4`,`py-2`,3,`max-w-156`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[`icon`,``,`matRipple`,``,3,`routerLink`],[1,`h-24`,`w-full`],[3,`diameter`],[1,`text-center`,`opacity-50`],[1,`bg-base-200`,`fixed`,`bottom-0`,`left-1/2`,`z-10`,`mx-auto`,`my-2`,`flex`,`w-full`,`-translate-x-1/2`,`items-center`,`justify-end`,`rounded-sm`,`border-none`,`px-4`,`py-2`],[`btn`,``,`matRipple`,``,1,`flex`,`min-w-32`,`items-center`,`justify-center`,`gap-2`,3,`click`,`disabled`],[1,`border-base-300`,`bg-base-100`,`text-base-content`,`rounded`,`border`,`px-2`,`py-1`,`text-xs`,`leading-none`,`shadow-sm`]],template:function(t,i){t&1&&(y_(),aa(0,`div`,0),by(1,`div`,1),aa(2,`header`,2),by(3,`h2`,3),ES(4,`sanitize`),XT(5,$s,2,1),Td(),aa(6,`main`,4),XT(7,Xs,2,0)(8,Ys,4,2,`div`,5),Td(),XT(9,Js,5,7,`footer`,6),Td()),t&2&&(AC(),Uy(`w-160`,!i.full_width())(`w-full`,i.full_width()),AC(),Uy(`max-w-156`,!i.full_width()),AC(),Cy(`innerHTML`,wS(4,12,i.heading()),jw),AC(2),JT(i.hide_close()?-1:5),AC(),Uy(`max-w-156`,!i.full_width()),AC(),JT(i.loading()?8:7),AC(2),JT(!i.loading()&&!i.hide_confirm()?9:-1))},dependencies:[At,St,Yt,_d$2,Ht$2,Bt$1,Mt,yt$1,as$1,$t$1,f,E],styles:[`main[_ngcontent-%COMP%]{scroll-margin-top:60px}
/*# sourceMappingURL=fullscreen-modal-shell.component.css.map */`]})}}return n})();var ec=[`input`];var tc=[`formField`];var ic=[`*`];var Wn=class{source;value;constructor(o,e){this.source=o,this.value=e}};var nc={provide:Ne,useExisting:fs$1(()=>gi),multi:!0};var pr=new w(`MatRadioGroup`);var oc=new w(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var gi=(()=>{class n{_changeDetector=y(ef);_value=null;_name=y(ie).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new Ht;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Wn(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(t){return new(t||n)};static ɵdir=it({type:n,selectors:[[`mat-radio-group`]],contentQueries:function(t,i,a){if(t&1&&Oy(a,ei,5),t&2){let d;E_(d=I_())&&(i._radios=d)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,cM],required:[2,`required`,`required`,cM],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,cM]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[aS([nc,{provide:pr,useExisting:n}])]})}return n})();var ei=(()=>{class n{_elementRef=y(Yt$1);_changeDetector=y(ef);_focusMonitor=y(ke$1);_radioDispatcher=y(ho);_defaultOptions=y(oc,{optional:!0});_ngZone=y(pe);_renderer=y(nr$1);_uniqueId=y(ie).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new Ht;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=De();_injector=y(ve);constructor(){y(T).load(Rt$3);let e=y(pr,{optional:!0}),t=y(new gv(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=uM(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new Wn(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let i=this._inputElement?.nativeElement;i&&(i.setAttribute(`tabindex`,t+``),this._previousTabIndex=t,sC(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===i&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===i&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(t){return new(t||n)};static ɵcmp=oT({type:n,selectors:[[`mat-radio-button`]],viewQuery:function(t,i){if(t&1&&ky(ec,5)(tc,7,Yt$1),t&2){let a;E_(a=I_())&&(i._inputElement=a.first),E_(a=I_())&&(i._rippleTrigger=a.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(t,i){t&1&&xy(`focus`,function(){return i._inputElement.nativeElement.focus()}),t&2&&(wy(`id`,i.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),Uy(`mat-primary`,i.color===`primary`)(`mat-accent`,i.color===`accent`)(`mat-warn`,i.color===`warn`)(`mat-mdc-radio-checked`,i.checked)(`mat-mdc-radio-disabled`,i.disabled)(`mat-mdc-radio-disabled-interactive`,i.disabledInteractive)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,cM],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:uM(e)],checked:[2,`checked`,`checked`,cM],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,cM],required:[2,`required`,`required`,cM],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,cM]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:ic,decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,i){t&1&&(y_(),aa(0,`label`,2,0)(2,`span`,3),by(3,`span`,4),aa(4,`input`,5,1),xy(`change`,function(d){return i._onInputInteraction(d)}),Td(),aa(6,`span`,6),by(7,`span`,7)(8,`span`,8),Td(),aa(9,`span`,9),by(10,`span`,10),Td()(),aa(11,`span`,11),v_(12),Td()()),t&2&&(Cy(`labelPosition`,i.labelPosition)(`for`,i.inputId),AC(2),Uy(`mdc-radio--disabled`,i.disabled),AC(2),Cy(`id`,i.inputId)(`checked`,i.checked)(`disabled`,i.disabled&&!i.disabledInteractive)(`required`,i.required),wy(`name`,i.name)(`value`,i.value)(`aria-label`,i.ariaLabel)(`aria-labelledby`,i.ariaLabelledby)(`aria-describedby`,i.ariaDescribedby)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null),AC(5),Cy(`matRippleTrigger`,i._rippleTrigger.nativeElement)(`matRippleDisabled`,i._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[yt$1,Ue$1],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})}return n})();var qn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ri({type:n});static ɵinj=Sr$1({imports:[Mt,ei,be]})}return n})();var sc=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]];var cc=[`*`,`mat-chip-avatar, [matChipAvatar]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function lc(n,o){n&1&&(aa(0,`span`,3),v_(1,1),Td())}function dc(n,o){n&1&&(aa(0,`span`,6),v_(1,2),Td())}var mc=`.mdc-evolution-chip,
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
`;var pc=[[[``,`matChipEdit`,``]],[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[``,`matChipEditInput`,``]],`*`,[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]];var hc=[`[matChipEdit]`,`mat-chip-avatar, [matChipAvatar]`,`[matChipEditInput]`,`*`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function uc(n,o){n&1&&by(0,`span`,0)}function _c(n,o){n&1&&(aa(0,`span`,1),v_(1),Td())}function fc(n,o){n&1&&(aa(0,`span`,3),v_(1,1),Td())}function gc(n,o){n&1&&v_(0,2)}function bc(n,o){n&1&&by(0,`span`,7)}function vc(n,o){if(n&1&&XT(0,gc,1,0)(1,bc,1,0,`span`,7),n&2)JT(g_().contentEditInput?0:1)}function yc(n,o){n&1&&v_(0,3)}function xc(n,o){n&1&&(aa(0,`span`,6),v_(1,4),Td())}var br=[`*`];var kc=`.mat-mdc-chip-set {
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
`;var vr=new w(`mat-chips-default-options`,{providedIn:`root`,factory:()=>({separatorKeyCodes:[13]})});var ur=new w(`MatChipAvatar`);var _r=new w(`MatChipTrailingIcon`);var fr=new w(`MatChipEdit`);var ko=new w(`MatChipRemove`);var wo=new w(`MatChip`);var yr=(()=>{class n{_elementRef=y(Yt$1);_parentChip=y(wo);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?``:null}constructor(){y(T).load(Rt$3),this._elementRef.nativeElement.nodeName===`BUTTON`&&this._elementRef.nativeElement.setAttribute(`type`,`button`)}focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(t){return new(t||n)};static ɵdir=it({type:n,selectors:[[``,`matChipContent`,``]],hostAttrs:[1,`mat-mdc-chip-action`,`mdc-evolution-chip__action`,`mdc-evolution-chip__action--presentational`],hostVars:8,hostBindings:function(t,i){t&2&&(wy(`disabled`,i._getDisabledAttribute())(`aria-disabled`,i.disabled),Uy(`mdc-evolution-chip__action--primary`,i._isPrimary)(`mdc-evolution-chip__action--secondary`,!i._isPrimary)(`mdc-evolution-chip__action--trailing`,!i._isPrimary&&!i._isLeading))},inputs:{disabled:[2,`disabled`,`disabled`,cM],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?-1:uM(e)],_allowFocusWhenDisabled:`_allowFocusWhenDisabled`}})}return n})();var Mo=(()=>{class n extends yr{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static ɵfac=(()=>{let e;return function(i){return(e||(e=Og(n)))(i||n)}})();static ɵdir=it({type:n,selectors:[[``,`matChipAction`,``]],hostVars:3,hostBindings:function(t,i){t&1&&xy(`click`,function(d){return i._handleClick(d)})(`keydown`,function(d){return i._handleKeydown(d)}),t&2&&(wy(`tabindex`,i._getTabindex()),Uy(`mdc-evolution-chip__action--presentational`,!1))},features:[uy]})}return n})();var xr=(()=>{class n extends Mo{_isPrimary=!1;_handleClick(e){this.disabled||(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}static ɵfac=(()=>{let e;return function(i){return(e||(e=Og(n)))(i||n)}})();static ɵdir=it({type:n,selectors:[[``,`matChipRemove`,``]],hostAttrs:[`role`,`button`,1,`mat-mdc-chip-remove`,`mat-mdc-chip-trailing-icon`,`mat-focus-indicator`,`mdc-evolution-chip__icon`,`mdc-evolution-chip__icon--trailing`],hostVars:1,hostBindings:function(t,i){t&2&&wy(`aria-hidden`,null)},features:[aS([{provide:ko,useExisting:n}]),uy]})}return n})();var Co=(()=>{class n{_changeDetectorRef=y(ef);_elementRef=y(Yt$1);_tagName=y(F2);_ngZone=y(pe);_focusMonitor=y(ke$1);_globalRippleOptions=y(et$1,{optional:!0});_document=y(Y);_onFocus=new le;_onBlur=new le;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=De();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=y(ie).getId(`mat-mdc-chip-`);ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new Ht;destroyed=new Ht;basicChipAttrName=`mat-basic-chip`;leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=y(N$1);_injector=y(ve);constructor(){let e=y(T);e.load(Rt$3),e.load(P),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:`mat-mdc-chip-ripple`,disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(`.mat-mdc-chip-action-label`),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=QD(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let i=t._elementRef.nativeElement;return i===e||i.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static ɵfac=function(t){return new(t||n)};static ɵcmp=oT({type:n,selectors:[[`mat-basic-chip`],[``,`mat-basic-chip`,``],[`mat-chip`],[``,`mat-chip`,``]],contentQueries:function(t,i,a){if(t&1&&Oy(a,ur,5)(a,fr,5)(a,_r,5)(a,ko,5)(a,ur,5)(a,_r,5)(a,fr,5)(a,ko,5),t&2){let d;E_(d=I_())&&(i.leadingIcon=d.first),E_(d=I_())&&(i.editIcon=d.first),E_(d=I_())&&(i.trailingIcon=d.first),E_(d=I_())&&(i.removeIcon=d.first),E_(d=I_())&&(i._allLeadingIcons=d),E_(d=I_())&&(i._allTrailingIcons=d),E_(d=I_())&&(i._allEditIcons=d),E_(d=I_())&&(i._allRemoveIcons=d)}},viewQuery:function(t,i){if(t&1&&ky(Mo,5),t&2){let a;E_(a=I_())&&(i.primaryAction=a.first)}},hostAttrs:[1,`mat-mdc-chip`],hostVars:31,hostBindings:function(t,i){t&1&&xy(`keydown`,function(d){return i._handleKeydown(d)}),t&2&&(My(`id`,i.id),wy(`role`,i.role)(`aria-label`,i.ariaLabel),j_(`mat-`+(i.color||`primary`)),Uy(`mdc-evolution-chip`,!i._isBasicChip)(`mdc-evolution-chip--disabled`,i.disabled)(`mdc-evolution-chip--with-trailing-action`,i._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,i.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,i.leadingIcon)(`mdc-evolution-chip--with-avatar`,i.leadingIcon)(`mat-mdc-chip-with-avatar`,i.leadingIcon)(`mat-mdc-chip-highlighted`,i.highlighted)(`mat-mdc-chip-disabled`,i.disabled)(`mat-mdc-basic-chip`,i._isBasicChip)(`mat-mdc-standard-chip`,!i._isBasicChip)(`mat-mdc-chip-with-trailing-icon`,i._hasTrailingIcon())(`_mat-animation-noopable`,i._animationsDisabled))},inputs:{role:`role`,id:`id`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaDescription:[0,`aria-description`,`ariaDescription`],value:`value`,color:`color`,removable:[2,`removable`,`removable`,cM],highlighted:[2,`highlighted`,`highlighted`,cM],disableRipple:[2,`disableRipple`,`disableRipple`,cM],disabled:[2,`disabled`,`disabled`,cM]},outputs:{removed:`removed`,destroyed:`destroyed`},exportAs:[`matChip`],features:[aS([{provide:wo,useExisting:n}])],ngContentSelectors:cc,decls:8,vars:2,consts:[[1,`mat-mdc-chip-focus-overlay`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipContent`,``],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`]],template:function(t,i){t&1&&(y_(sc),by(0,`span`,0),aa(1,`span`,1)(2,`span`,2),XT(3,lc,2,0,`span`,3),aa(4,`span`,4),v_(5),by(6,`span`,5),Td()()(),XT(7,dc,2,0,`span`,6)),t&2&&(AC(3),JT(i.leadingIcon?3:-1),AC(4),JT(i._hasTrailingIcon()?7:-1))},dependencies:[yr],styles:[`.mdc-evolution-chip,
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
`],encapsulation:2})}return n})();var xo=(()=>{class n{_elementRef=y(Yt$1);_document=y(Y);initialize(e){this.getNativeElement().focus(),this.setValue(e)}getNativeElement(){return this._elementRef.nativeElement}setValue(e){this.getNativeElement().textContent=e,this._moveCursorToEndOfInput()}getValue(){return this.getNativeElement().textContent||``}_moveCursorToEndOfInput(){let e=this._document.createRange();e.selectNodeContents(this.getNativeElement()),e.collapse(!1);let t=window.getSelection();t.removeAllRanges(),t.addRange(e)}static ɵfac=function(t){return new(t||n)};static ɵdir=it({type:n,selectors:[[`span`,`matChipEditInput`,``]],hostAttrs:[`role`,`textbox`,`tabindex`,`-1`,`contenteditable`,`true`,1,`mat-chip-edit-input`]})}return n})();var Io=(()=>{class n extends Co{basicChipAttrName=`mat-basic-chip-row`;_renderer=y(nr$1);_cleanupMousedown;_editStartPending=!1;editable=!1;edited=new Ht;defaultEditInput;contentEditInput;_alreadyFocused=!1;_isEditing=!1;constructor(){super(),this.role=`row`,this._onBlur.pipe(XD(this.destroyed)).subscribe(()=>{this._isEditing&&!this._editStartPending&&this._onEditFinish(),this._alreadyFocused=!1})}ngAfterViewInit(){super.ngAfterViewInit(),this._cleanupMousedown=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`mousedown`,()=>{this._alreadyFocused=this._hasFocus()}))}ngOnDestroy(){super.ngOnDestroy(),this._cleanupMousedown?.()}_hasLeadingActionIcon(){return!this._isEditing&&!!this.editIcon}_hasTrailingIcon(){return!this._isEditing&&super._hasTrailingIcon()}_handleFocus(){!this._isEditing&&!this.disabled&&this.focus()}_handleKeydown(e){e.keyCode===13&&!this.disabled?this._isEditing?(e.preventDefault(),this._onEditFinish()):this.editable&&this._startEditing(e):this._isEditing?e.stopPropagation():super._handleKeydown(e)}_handleClick(e){!this.disabled&&this.editable&&!this._isEditing&&this._alreadyFocused&&(e.preventDefault(),e.stopPropagation(),this._startEditing(e))}_handleDoubleclick(e){!this.disabled&&this.editable&&this._startEditing(e)}_edit(){this._changeDetectorRef.markForCheck(),this._startEditing()}_startEditing(e){if(!this.primaryAction||this.removeIcon&&e&&this._getSourceAction(e.target)===this.removeIcon)return;let t=this.value;this._isEditing=this._editStartPending=!0,sC(()=>{this._getEditInput().initialize(t),setTimeout(()=>this._ngZone.run(()=>this._editStartPending=!1))},{injector:this._injector})}_onEditFinish(){this._isEditing=this._editStartPending=!1,this.edited.emit({chip:this,value:this._getEditInput().getValue()}),(this._document.activeElement===this._getEditInput().getNativeElement()||this._document.activeElement===this._document.body)&&this.primaryAction.focus()}_isRippleDisabled(){return super._isRippleDisabled()||this._isEditing}_getEditInput(){return this.contentEditInput||this.defaultEditInput}static ɵfac=function(t){return new(t||n)};static ɵcmp=oT({type:n,selectors:[[`mat-chip-row`],[``,`mat-chip-row`,``],[`mat-basic-chip-row`],[``,`mat-basic-chip-row`,``]],contentQueries:function(t,i,a){if(t&1&&Oy(a,xo,5),t&2){let d;E_(d=I_())&&(i.contentEditInput=d.first)}},viewQuery:function(t,i){if(t&1&&ky(xo,5),t&2){let a;E_(a=I_())&&(i.defaultEditInput=a.first)}},hostAttrs:[1,`mat-mdc-chip`,`mat-mdc-chip-row`,`mdc-evolution-chip`],hostVars:29,hostBindings:function(t,i){t&1&&xy(`focus`,function(){return i._handleFocus()})(`click`,function(d){return i._hasInteractiveActions()?i._handleClick(d):null})(`dblclick`,function(d){return i._handleDoubleclick(d)}),t&2&&(My(`id`,i.id),wy(`tabindex`,i.disabled?null:-1)(`aria-label`,null)(`aria-description`,null)(`role`,i.role),Uy(`mat-mdc-chip-with-avatar`,i.leadingIcon)(`mat-mdc-chip-disabled`,i.disabled)(`mat-mdc-chip-editing`,i._isEditing)(`mat-mdc-chip-editable`,i.editable)(`mdc-evolution-chip--disabled`,i.disabled)(`mdc-evolution-chip--with-leading-action`,i._hasLeadingActionIcon())(`mdc-evolution-chip--with-trailing-action`,i._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,i.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,i.leadingIcon)(`mdc-evolution-chip--with-avatar`,i.leadingIcon)(`mat-mdc-chip-highlighted`,i.highlighted)(`mat-mdc-chip-with-trailing-icon`,i._hasTrailingIcon()))},inputs:{editable:`editable`},outputs:{edited:`edited`},features:[aS([{provide:Co,useExisting:n},{provide:wo,useExisting:n}]),uy],ngContentSelectors:hc,decls:9,vars:8,consts:[[1,`mat-mdc-chip-focus-overlay`],[`role`,`gridcell`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--leading`],[`role`,`gridcell`,`matChipAction`,``,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`,3,`disabled`],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[`aria-hidden`,`true`,1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[`role`,`gridcell`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`],[`matChipEditInput`,``]],template:function(t,i){t&1&&(y_(pc),XT(0,uc,1,0,`span`,0),XT(1,_c,2,0,`span`,1),aa(2,`span`,2),XT(3,fc,2,0,`span`,3),aa(4,`span`,4),XT(5,vc,2,1)(6,yc,1,0),by(7,`span`,5),Td()(),XT(8,xc,2,0,`span`,6)),t&2&&(JT(i._isEditing?-1:0),AC(),JT(i._hasLeadingActionIcon()?1:-1),AC(),Cy(`disabled`,i.disabled),wy(`aria-description`,i.ariaDescription)(`aria-label`,i.ariaLabel),AC(),JT(i.leadingIcon?3:-1),AC(2),JT(i._isEditing?5:6),AC(3),JT(i._hasTrailingIcon()?8:-1))},dependencies:[Mo,xo],styles:[mc],encapsulation:2})}return n})();var Cc=(()=>{class n{_elementRef=y(Yt$1);_changeDetectorRef=y(ef);_dir=y(V,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new le;_defaultRole=`presentation`;get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Qs$1;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(KD(null),wc$1(()=>QD(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains(`mat-mdc-chip`))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(KD(this._chips)).subscribe(e=>{let t=[];e.forEach(i=>i._getActions().forEach(a=>t.push(a))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new ne(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:`ltr`).withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(XD(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(XD(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(KD(null),XD(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(XD(this._destroyed)).subscribe(e=>{let i=this._chips.toArray().indexOf(e.chip),a=e.chip._hasFocus(),d=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),y=a||d;this._isValidIndex(i)&&y&&(this._lastDestroyedFocusedChipIndex=i)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static ɵfac=function(t){return new(t||n)};static ɵcmp=oT({type:n,selectors:[[`mat-chip-set`]],contentQueries:function(t,i,a){if(t&1&&Oy(a,Co,5),t&2){let d;E_(d=I_())&&(i._chips=d)}},hostAttrs:[1,`mat-mdc-chip-set`,`mdc-evolution-chip-set`],hostVars:1,hostBindings:function(t,i){t&1&&xy(`keydown`,function(d){return i._handleKeydown(d)}),t&2&&wy(`role`,i.role)},inputs:{disabled:[2,`disabled`,`disabled`,cM],role:`role`,tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:uM(e)]},ngContentSelectors:br,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(t,i){t&1&&(y_(),_d$1(0,`div`,0),v_(1),Sd())},styles:[`.mat-mdc-chip-set {
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
`],encapsulation:2})}return n})();var So=class{source;value;constructor(o,e){this.source=o,this.value=e}};var kr=(()=>{class n extends Cc{ngControl=y(we,{optional:!0,self:!0});controlType=`mat-chip-grid`;_chipInput;_defaultRole=`grid`;_errorStateTracker;_uid=y(ie).getId(`mat-chip-grid-`);_ariaDescribedbyIds=[];_onTouched=()=>{};_onChange=()=>{};get disabled(){return this.ngControl?!!this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=e,this._syncChipsState(),this.stateChanges.next()}get id(){return this._chipInput?this._chipInput.id:this._uid}get empty(){return(!this._chipInput||this._chipInput.empty)&&(!this._chips||this._chips.length===0)}get placeholder(){return this._chipInput?this._chipInput.placeholder:this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder=``;get focused(){return this._chipInput?.focused||this._hasFocusedChip()}get required(){return this._required??this.ngControl?.control?.hasValidator($n$1.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get shouldLabelFloat(){return!this.empty||this.focused}get value(){return this._value}set value(e){this._value=e}_value=[];get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}change=new Ht;valueChange=new Ht;_chips=void 0;stateChanges=new le;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(){super();let e=y(yc$1,{optional:!0}),t=y(Cc$1,{optional:!0}),i=y(me$1),a=y(Rt$2,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._errorStateTracker=new J(i,a||this.ngControl,t,e,this.stateChanges)}ngAfterContentInit(){this.chipBlurChanges.pipe(XD(this._destroyed)).subscribe(()=>{this._blur(),this.stateChanges.next()}),QD(this.chipFocusChanges,this._chips.changes).pipe(XD(this._destroyed)).subscribe(()=>this.stateChanges.next())}ngDoCheck(){this.ngControl&&this.updateErrorState()}ngOnDestroy(){super.ngOnDestroy(),this.stateChanges.complete()}registerInput(e){this._chipInput=e,this._chipInput.setDescribedByIds(this._ariaDescribedbyIds),this._elementRef.nativeElement.removeAttribute(`aria-describedby`)}onContainerClick(e){!this.disabled&&!this._originatesFromChip(e)&&this.focus()}focus(){if(!(this.disabled||this._chipInput?.focused)){if(!this._chips.length||this._chips.first.disabled){if(!this._chipInput)return;Promise.resolve().then(()=>this._chipInput.focus())}else{let e=this._keyManager.activeItem;e?e.focus():this._keyManager.setFirstItemActive()}this.stateChanges.next()}}get describedByIds(){if(this._chipInput)return this._chipInput.describedByIds||[];let e=this._elementRef.nativeElement.getAttribute(`aria-describedby`);return e?e.split(` `):[]}setDescribedByIds(e){this._ariaDescribedbyIds=e,this._chipInput?this._chipInput.setDescribedByIds(e):e.length?this._elementRef.nativeElement.setAttribute(`aria-describedby`,e.join(` `)):this._elementRef.nativeElement.removeAttribute(`aria-describedby`)}writeValue(e){this._value=e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this.stateChanges.next()}updateErrorState(){this._errorStateTracker.updateErrorState()}_blur(){this.disabled||setTimeout(()=>{this.focused||(this._propagateChanges(),this._markAsTouched())})}_allowFocusEscape(){this._chipInput?.focused||super._allowFocusEscape()}_handleKeydown(e){let t=e.keyCode,i=this._keyManager.activeItem;if(t===9)this._chipInput?.focused&&Ze(e,`shiftKey`)&&this._chips.length&&!this._chips.last.disabled?(e.preventDefault(),i?this._keyManager.setActiveItem(i):this._focusLastChip()):super._allowFocusEscape();else if(!this._chipInput?.focused)if((t===38||t===40)&&i){let a=this._chipActions.filter(N=>N._isPrimary===i._isPrimary&&!this._skipPredicate(N)),d=a.indexOf(i),y=e.keyCode===38?-1:1;e.preventDefault(),d>-1&&this._isValidIndex(d+y)&&this._keyManager.setActiveItem(a[d+y])}else super._handleKeydown(e);this.stateChanges.next()}_redirectDestroyedChipFocus(){this._lastDestroyedFocusedChipIndex!==null&&(super._redirectDestroyedChipFocus(),(!this._chips.length||this._chips.length===1&&this._chips.first.disabled)&&this._keyManager.updateActiveItem(-1))}_focusLastChip(){this._chips.length&&this._chips.last.focus()}_propagateChanges(){let e=this._chips.length?this._chips.toArray().map(t=>t.value):[];this._value=e,this.change.emit(new So(this,e)),this.valueChange.emit(e),this._onChange(e),this._changeDetectorRef.markForCheck()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next()}static ɵfac=function(t){return new(t||n)};static ɵcmp=oT({type:n,selectors:[[`mat-chip-grid`]],contentQueries:function(t,i,a){if(t&1&&Oy(a,Io,5),t&2){let d;E_(d=I_())&&(i._chips=d)}},hostAttrs:[1,`mat-mdc-chip-set`,`mat-mdc-chip-grid`,`mdc-evolution-chip-set`],hostVars:10,hostBindings:function(t,i){t&1&&xy(`focus`,function(){return i.focus()})(`blur`,function(){return i._blur()}),t&2&&(wy(`role`,i.role)(`tabindex`,i.disabled||i._chips&&i._chips.length===0?-1:i.tabIndex)(`aria-disabled`,i.disabled.toString())(`aria-invalid`,i.errorState),Uy(`mat-mdc-chip-list-disabled`,i.disabled)(`mat-mdc-chip-list-invalid`,i.errorState)(`mat-mdc-chip-list-required`,i.required))},inputs:{disabled:[2,`disabled`,`disabled`,cM],placeholder:`placeholder`,required:[2,`required`,`required`,cM],value:`value`,errorStateMatcher:`errorStateMatcher`},outputs:{change:`change`,valueChange:`valueChange`},features:[aS([{provide:ae,useExisting:n}]),uy],ngContentSelectors:br,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(t,i){t&1&&(y_(),_d$1(0,`div`,0),v_(1),Sd())},styles:[kc],encapsulation:2})}return n})();var Cr=(()=>{class n{_elementRef=y(Yt$1);focused=!1;get chipGrid(){return this._chipGrid}set chipGrid(e){e&&(this._chipGrid=e,this._chipGrid.registerInput(this))}_chipGrid;addOnBlur=!1;separatorKeyCodes;chipEnd=new Ht;placeholder=``;id=y(ie).getId(`mat-mdc-chip-list-input-`);get disabled(){return this._disabled||this._chipGrid&&this._chipGrid.disabled}set disabled(e){this._disabled=e}_disabled=!1;readonly=!1;disabledInteractive;get empty(){return!this.inputElement.value}inputElement;constructor(){let e=y(vr),t=y(le$2,{optional:!0});this.inputElement=this._elementRef.nativeElement,this.separatorKeyCodes=e.separatorKeyCodes,this.disabledInteractive=e.inputDisabledInteractive??!1,t&&this.inputElement.classList.add(`mat-mdc-form-field-input-control`)}ngOnChanges(){this._chipGrid.stateChanges.next()}ngOnDestroy(){this.chipEnd.complete()}_keydown(e){this.empty&&e.keyCode===8?(e.repeat||this._chipGrid._focusLastChip(),e.preventDefault()):this._emitChipEnd(e)}_blur(){this.addOnBlur&&this._emitChipEnd(),this.focused=!1,this._chipGrid.focused||this._chipGrid._blur(),this._chipGrid.stateChanges.next()}_focus(){this.focused=!0,this._chipGrid.stateChanges.next()}_emitChipEnd(e){(!e||this._isSeparatorKey(e)&&!e.repeat)&&(this.chipEnd.emit({input:this.inputElement,value:this.inputElement.value,chipInput:this}),e?.preventDefault())}_onInput(){this._chipGrid.stateChanges.next()}focus(){this.inputElement.focus()}clear(){this.inputElement.value=``}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}_isSeparatorKey(e){if(!this.separatorKeyCodes)return!1;for(let t of this.separatorKeyCodes){let i,a;typeof t==`number`?(i=t,a=null):(i=t.keyCode,a=t.modifiers);let d=a?.length?Ze(e,...a):!Ze(e);if(i===e.keyCode&&d)return!0}return!1}_getReadonlyAttribute(){return this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(t){return new(t||n)};static ɵdir=it({type:n,selectors:[[`input`,`matChipInputFor`,``]],hostAttrs:[1,`mat-mdc-chip-input`,`mat-mdc-input-element`,`mdc-text-field__input`,`mat-input-element`],hostVars:8,hostBindings:function(t,i){t&1&&xy(`keydown`,function(d){return i._keydown(d)})(`blur`,function(){return i._blur()})(`focus`,function(){return i._focus()})(`input`,function(){return i._onInput()}),t&2&&(My(`id`,i.id),wy(`disabled`,i.disabled&&!i.disabledInteractive?``:null)(`placeholder`,i.placeholder||null)(`aria-invalid`,i._chipGrid&&i._chipGrid.ngControl?i._chipGrid.ngControl.invalid:null)(`aria-required`,i._chipGrid&&i._chipGrid.required||null)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null)(`readonly`,i._getReadonlyAttribute())(`required`,i._chipGrid&&i._chipGrid.required||null))},inputs:{chipGrid:[0,`matChipInputFor`,`chipGrid`],addOnBlur:[2,`matChipInputAddOnBlur`,`addOnBlur`,cM],separatorKeyCodes:[0,`matChipInputSeparatorKeyCodes`,`separatorKeyCodes`],placeholder:`placeholder`,id:`id`,disabled:[2,`disabled`,`disabled`,cM],readonly:[2,`readonly`,`readonly`,cM],disabledInteractive:[2,`matChipInputDisabledInteractive`,`disabledInteractive`,cM]},outputs:{chipEnd:`matChipInputTokenEnd`},exportAs:[`matChipInput`,`matChipInputFor`],features:[ua]})}return n})();var Sr=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ri({type:n});static ɵinj=Sr$1({providers:[me$1,{provide:vr,useValue:{separatorKeyCodes:[13]}}],imports:[Mt,be]})}return n})();var wr=(()=>{class n{constructor(){this.url=y($e)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=oT({type:n,selectors:[[`image-viewer`]],decls:5,vars:1,consts:[[1,`bg-base-200`,`h-screen`,`w-screen`],[`auth`,``,1,`h-full`,`w-full`,`object-contain`,`object-center`,3,`source`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``,1,`bg-base-100`,`absolute`,`top-1`,`right-1`]],template:function(t,i){t&1&&(aa(0,`div`,0),by(1,`img`,1),aa(2,`button`,2)(3,`icon`),Z_(4,`close`),Td()()()),t&2&&(AC(),Cy(`source`,i.url))},dependencies:[_d$2,wt,Ht$2,Bt$1],encapsulation:2})}}return n})();var wc=(n,o,e)=>({file:n,is_public:o,permissions:e});function Mc(n,o){if(n&1){let e=u_();aa(0,`div`,7)(1,`label`),Z_(2,`Permissions`),Td(),aa(3,`mat-form-field`,11)(4,`mat-select`,12),xy(`ngModelChange`,function(i){Jp(e);return eh(g_().permissions.set(i))}),aa(5,`mat-option`,13),Z_(6,`None`),Td(),aa(7,`mat-option`,14),Z_(8,`Support`),Td(),aa(9,`mat-option`,15),Z_(10,`Admin`),Td()(),gb(),Td()()}if(n&2){let e=g_();AC(4),Cy(`ngModel`,e.permissions()),yb()}}var Ir=(()=>{class n{constructor(){this._dialog_ref=y(T$1),this._data=y($e),this.file=this._data.file,this.is_public=It(!!this._data.is_public),this.permissions=It(`none`),this.file=this._data.file}close(){this._dialog_ref.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=oT({type:n,selectors:[[`upload-permissions-modal`]],decls:18,vars:7,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[1,`min-w-[20rem]`,`space-y-2`,`px-4`,`py-2`],[1,`flex`,`flex-col`],[`appearance`,`outline`,1,`no-subscript`],[`matInput`,``,`disabled`,`true`,`placeholder`,`File Name`,3,`ngModel`],[1,`flex`,`flex-col`,`space-y-2`],[1,`border-base-200`,`flex`,`items-center`,`justify-end`,`space-x-2`,`border-t`,`px-4`,`py-2`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`w-32`],[`btn`,``,`matRipple`,``,1,`w-32`,3,`mat-dialog-close`],[`appearance`,`outline`],[3,`ngModelChange`,`ngModel`],[`value`,`none`],[`value`,`support`],[`value`,`admin`]],template:function(t,i){t&1&&(aa(0,`header`,0)(1,`h2`,1),Z_(2,`Upload File`),Td(),aa(3,`button`,2)(4,`icon`),Z_(5,`close`),Td()()(),aa(6,`main`,3)(7,`div`,4)(8,`label`),Z_(9,`File Name`),Td(),aa(10,`mat-form-field`,5),by(11,`input`,6),gb(),Td()(),XT(12,Mc,11,1,`div`,7),Td(),aa(13,`footer`,8)(14,`button`,9),Z_(15,` Cancel `),Td(),aa(16,`button`,10),Z_(17,` Upload `),Td()()),t&2&&(AC(11),Cy(`ngModel`,i.file.name),yb(),AC(),JT(i.is_public()?-1:12),AC(4),Cy(`mat-dialog-close`,dS(3,wc,i.file,i.is_public(),i.permissions())))},dependencies:[Ht$2,Bt$1,de$1,rt,ng,ko$1,Jp$1,Ac$1,Jt,Zt,X$1,_d$2,rn$1,on$1,Mt,yt$1],encapsulation:2})}}return n})();var Ic=[`image_list`];var Ec=[`file_input`];function Tc(n,o){if(n&1){let e=u_();aa(0,`div`,15),by(1,`img`,16),aa(2,`div`,17),by(3,`div`,18),aa(4,`div`,19)(5,`button`,20),xy(`click`,function(){let i=Jp(e).$implicit;return eh(g_().copyLink(i))}),aa(6,`icon`),Z_(7,`link`),Td()(),aa(8,`button`,20),xy(`click`,function(){let i=Jp(e).$implicit;return eh(g_().viewImage(i))}),aa(9,`icon`),Z_(10,`visibility`),Td()(),aa(11,`button`,20),xy(`click`,function(){let i=Jp(e).$implicit;return eh(g_().removeImage(i))}),aa(12,`icon`),Z_(13,`close`),Td()()()()()}if(n&2){let e=o.$implicit;Hy(`transform`,`translate(-`+g_().offset()+`00%)`),AC(),Cy(`source`,e)}}function Nc(n,o){if(n&1&&by(0,`mat-progress-spinner`,22),n&2){let e=g_().$implicit;Cy(`value`,e.progress)(`diameter`,64)}}function Rc(n,o){n&1&&(aa(0,`icon`,23),Z_(1,`warning`),Td())}function Dc(n,o){n&1&&(aa(0,`div`,24)(1,`icon`,25),Z_(2,`refresh`),Td()())}function Oc(n,o){if(n&1){let e=u_();aa(0,`div`,21),xy(`click`,function(){let i=Jp(e).$implicit;return eh(g_().retryUpload(i))}),XT(1,Nc,1,2,`mat-progress-spinner`,22),XT(2,Rc,2,0,`icon`,23),XT(3,Dc,3,0,`div`,24),Td()}if(n&2){let e=o.$implicit;Hy(`transform`,`translate(-`+g_().offset()+`00%)`),Cy(`matTooltip`,e.error),AC(),JT(e.error?-1:1),AC(),JT(e.error?2:-1),AC(),JT(e.error?3:-1)}}function Ac(n,o){if(n&1){let e=u_();aa(0,`button`,26),xy(`click`,function(){Jp(e);return eh(g_().previousOffset())}),aa(1,`icon`),Z_(2,`chevron_left`),Td()()}if(n&2)Cy(`disabled`,g_().offset()===0)}function Fc(n,o){if(n&1){let e=u_();aa(0,`button`,27),xy(`click`,function(){Jp(e);return eh(g_().nextOffset())}),aa(1,`icon`),Z_(2,`chevron_right`),Td()()}if(n&2){let e=g_();Cy(`disabled`,e.offset()>=e.length()-e.view_space())}}function Pc(n,o){if(n&1){let e=u_();aa(0,`mat-chip-row`,28),xy(`removed`,function(){let i=Jp(e).$implicit;return eh(g_().removeImage(i))}),aa(1,`div`,29),Z_(2),Td(),aa(3,`button`,30)(4,`icon`),Z_(5,`cancel`),Td()()()}if(n&2){let e=o.$implicit;AC(2),Ky(e),AC(),wy(`aria-label`,`Remove `+e)}}var Er=(()=>{class n extends y$1{constructor(){super(...arguments),this._clipboard=y(Xr$1),this._uploads=y(z_),this._dialog=y(ee),this._injector=y(ve),this._upload_completion_effect=ks$1(()=>{let e=this.upload_list(),t=this.upload_ids();for(let i of t){let a=e.find(d=>d?.id===i);a&&a.progress>=100&&(this.addImageUrl(a.link),this.upload_ids.set(this.upload_ids().filter(d=>d!==i)))}},{injector:this._injector}),this.list=It([]),this.upload_map={},this.upload_ids=It([]),this.upload_list=It([]),this.offset=It(0),this.view_space=It(0),this.separators=[188,13],this.uploads=Fe(()=>{let e=this.upload_ids();return this.upload_list().filter(t=>e.includes(t?.id))}),this.length=Fe(()=>this.list().length+this.uploads().length+1),this._list_el=V2(`image_list`),this._file_input=V2(`file_input`),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e}ngAfterViewInit(){this.updateViewSpace()}updateViewSpace(){this.timeout(`init_view_space`,()=>{let e=this._list_el()?.nativeElement?.getBoundingClientRect();e&&this.view_space.set(Math.floor(e.width/152))},100)}copyLink(e){this._clipboard.copy(e),cp(`Copied image URL to clipboard`)}viewImage(e){this._dialog.open(wr,{data:e})}removeImage(e){this.setValue(this.list().filter(t=>t!==e))}addImage(e){e.value&&(this.setValue(Cp([...this.list(),e.value])),e.chipInput.inputElement.value=``)}addImageUrl(e){this.setValue(Cp([...this.list(),e]))}retryUpload(e){e.error&&(e.error=null,e.upload.resume())}previousOffset(){this.offset.update(e=>e-1)}nextOffset(){this.offset.update(e=>e+1)}async uploadImages(e){let t=e.target;if(t?.files){let i=t.files;if(i.length){this.interval(`update_status`,()=>this._updateUploadHistory());for(let a=0;a<i.length;a++)try{let d=await this._uploads.uploadFileWithPermissions(i[a]);this.upload_ids.set([...this.upload_ids(),d])}catch(d){if(d instanceof Rn$1)continue;up(`Failed to upload ${i[a].name}: ${d?.message||`Unknown error`}`)}this._file_input().nativeElement.value=``}}}setValue(e){let t=e||[];this.list.set(t),this._onChange&&this._onChange(t)}writeValue(e){this.list.set(e||[])}async _updateUploadHistory(){let e=this.upload_ids();if(e.length===0)return;let i=this._uploads.upload_list().filter(d=>e.find(y=>y===d?.id)),a=i.filter(d=>d.progress>=100);this.upload_list.set(i),a.forEach(d=>{this.upload_map[d?.id]=d.upload?.id||d?.id,delete d.upload}),a.length>=e.length&&this.clearInterval(`update_status`)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Og(n)))(i||n)}})()}static{this.ɵcmp=oT({type:n,selectors:[[`image-list-field`]],viewQuery:function(t,i){t&1&&Ly(i._list_el,Ic,5)(i._file_input,Ec,5),t&2&&w_(2)},features:[aS([{provide:Ne,useExisting:fs$1(()=>n),multi:!0},{provide:Dl$1,useValue:Ir}]),uy],decls:23,vars:13,consts:[[`image_list`,``],[`file_input`,``],[`chipList`,``],[`images`,``,1,`relative`,`mb-2`,`flex`,`w-full`,`items-center`,`space-x-2`,`overflow-hidden`,`py-2`,3,`resize`],[`image`,``,1,`border-base-200`,`hover:border-base-300`,`hover:bg-base-200`,`relative`,`flex`,`h-32`,`w-36`,`shrink-0`,`cursor-pointer`,`flex-col`,`items-center`,`justify-center`,`rounded-xl`,`border-2`,`border-dashed`],[1,`text-4xl`,`opacity-60`],[1,`px-4`,`text-center`,`opacity-60`],[`type`,`file`,1,`absolute`,`inset-0`,`h-32`,`w-32`,`cursor-pointer`,`opacity-0`,3,`change`],[`image`,``,1,`bg-base-200`,`relative`,`h-32`,`w-36`,`shrink-0`,`overflow-hidden`,`rounded-sm`,`bg-cover`,`bg-center`,3,`transform`],[`upload`,``,1,`border-base-content/10`,`/5`,`bg-base-200`,`flex`,`h-32`,`w-36`,`shrink-0`,`items-center`,`justify-center`,`rounded-sm`,`border`,`bg-cover`,`bg-center`,3,`transform`,`matTooltip`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`left-0`,`-translate-y-1/2`,`transform`,3,`disabled`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`right-0`,`-translate-y-1/2`,`transform`,3,`disabled`],[`appearance`,`outline`,1,`w-full`],[`aria-label`,`Image List`],[3,`matChipInputTokenEnd`,`placeholder`,`matChipInputFor`,`matChipInputSeparatorKeyCodes`,`matChipInputAddOnBlur`],[`image`,``,1,`bg-base-200`,`relative`,`h-32`,`w-36`,`shrink-0`,`overflow-hidden`,`rounded-sm`,`bg-cover`,`bg-center`],[`auth`,``,1,`pointer-events-none`,`absolute`,`top-1/2`,`left-1/2`,`z-10`,`-translate-x-1/2`,`-translate-y-1/2`,`object-contain`,3,`source`],[`overlay`,``,1,`text-base-100`,`absolute`,`inset-0`,`z-20`],[`bg`,``,1,`absolute`,`inset-0`,`bg-black`,`opacity-0`],[`actions`,``,1,`absolute`,`top-0`,`right-0`,`left-0`,`flex`,`items-center`,`justify-center`,`space-x-2`,`opacity-0`],[`icon`,``,3,`click`],[`upload`,``,1,`border-base-content/10`,`/5`,`bg-base-200`,`flex`,`h-32`,`w-36`,`shrink-0`,`items-center`,`justify-center`,`rounded-sm`,`border`,`bg-cover`,`bg-center`,3,`click`,`matTooltip`],[`mode`,`determinate`,3,`value`,`diameter`],[1,`text-error`,`text-6xl`],[`overlay`,``,1,`text-base-100`,`hover:bg-base-content`,`hover:bg-opacity-50`,`absolute`,`inset-0`,`flex`,`items-center`,`justify-center`],[1,`text-3xl`,`opacity-0`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`left-0`,`-translate-y-1/2`,`transform`,3,`click`,`disabled`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`right-0`,`-translate-y-1/2`,`transform`,3,`click`,`disabled`],[3,`removed`],[1,`max-w-md`,`truncate`],[`matChipRemove`,``]],template:function(t,i){if(t&1&&(aa(0,`div`,3,0),xy(`resize`,function(){return i.updateViewSpace()},Uw),aa(2,`div`,4)(3,`icon`,5),Z_(4,`add`),Td(),aa(5,`p`,6),Z_(6),ES(7,`translate`),Td(),aa(8,`input`,7,1),xy(`change`,function(d){return i.uploadImages(d)}),Td()(),n_(10,Tc,14,3,`div`,8,t_),n_(12,Oc,4,6,`div`,9,t_),XT(14,Ac,3,1,`button`,10),XT(15,Fc,3,1,`button`,11),Td(),aa(16,`mat-form-field`,12)(17,`mat-chip-grid`,13,2),n_(19,Pc,6,2,`mat-chip-row`,null,t_),Td(),aa(21,`input`,14),ES(22,`translate`),xy(`matChipInputTokenEnd`,function(d){return i.addImage(d)}),Td()()),t&2){let a=C_(18);AC(2),Hy(`transform`,`translate(-`+i.offset()+`00%)`),AC(4),Ad(` `,wS(7,9,`COMMON.IMAGE_UPLOADS`),` `),AC(4),r_(i.list()),AC(2),r_(i.uploads()),AC(2),JT(i.length()>i.view_space()?14:-1),AC(),JT(i.length()>i.view_space()?15:-1),AC(4),r_(i.list()),AC(2),Cy(`placeholder`,wS(22,11,`COMMON.IMAGE_ADD_URL`))(`matChipInputFor`,a)(`matChipInputSeparatorKeyCodes`,i.separators)(`matChipInputAddOnBlur`,!0)}},dependencies:[de$1,rt,Sr,kr,Cr,xr,Io,St,Yt,Yt$3,mt$1,_d$2,wt,f],styles:[`[_nghost-%COMP%]{width:100%}[overlay][_ngcontent-%COMP%]{transition:background .2s}[image][_ngcontent-%COMP%]:hover   [actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%]:hover > icon[_ngcontent-%COMP%]{opacity:1!important}[image][_ngcontent-%COMP%]:hover   [bg][_ngcontent-%COMP%]{opacity:.4!important}[actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%] > icon[_ngcontent-%COMP%]{transition:opacity .2s}[image][_ngcontent-%COMP%]{transition:transform .2s}
/*# sourceMappingURL=image-list-field.component.css.map */`]})}}return n})();function Vc(n,o){if(n&1&&(by(0,`div`,1),ES(1,`safe`)),n&2)Cy(`innerHTML`,CS(1,1,g_().changelog(),`html`),jw)}function Lc(n,o){n&1&&(aa(0,`div`,2)(1,`icon`,3),Z_(2,`close`),Td(),aa(3,`div`,4),Z_(4,`No changelog`),Td()())}var Tr=(()=>{class n{constructor(){this._data=y($e),this.loading=It(!1),this.changelog=Fe(()=>f$1(this._data.changelog||``,{async:!1}))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=oT({type:n,selectors:[[`changelog-modal`]],decls:3,vars:3,consts:[[3,`heading`,`hide_confirm`],[1,`markdown`,3,`innerHTML`],[1,`flex`,`flex-col`,`items-center`,`justify-center`,`space-y-2`],[1,`text-3xl`],[1,`text`]],template:function(t,i){t&1&&(aa(0,`fullscreen-modal-shell`,0),XT(1,Vc,2,4,`div`,1)(2,Lc,5,0,`div`,2),Td()),t&2&&(Cy(`heading`,`Changelog`)(`hide_confirm`,!0),AC(),JT(i.changelog()?1:2))},dependencies:[Hn,_d$2,Vs$1],encapsulation:2})}}return n})();var Nr=(()=>{class n{constructor(){this._document=y(Y),this._dialog=y(ee),this._changelog=It(null),this.available=Fe(()=>this._changelog()!==null),this._load()}view(){let e=this._changelog();e!==null&&this._dialog.open(Tr,{data:{changelog:e}})}async _load(){try{let e=new URL(`CHANGELOG.md`,this._document.baseURI),t=await fetch(e);if(!t.ok)return;this._changelog.set(await t.text())}catch{}}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=N({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();function Bc(n,o){if(n&1&&(aa(0,`div`,1),Z_(1),Td()),n&2){let e=g_(2);AC(),Ad(` `,e.initials,` `)}}function Uc(n,o){if(n&1&&by(0,`img`,2),n&2){let e=g_(2);Cy(`alt`,e.initials)(`source`,e.user().photo)}}function zc(n,o){if(n&1&&(aa(0,`div`,0),XT(1,Bc,2,1,`div`,1)(2,Uc,1,2,`img`,2),Td()),n&2){let e=g_();wy(`user-id`,e.user().id),AC(),JT(e.user().photo?2:1)}}var jn=(()=>{class n{constructor(){this.user=j2(void 0),this.is_valid=Fe(()=>{let e=this.user();if(!e)return!1;let t=(e.name||``).trim(),i=(e.email||``).trim();return t.startsWith(`<empty>`)||i.startsWith(`<empty>`)?!1:!!(t||i||e.first_name||e.last_name)})}get initials(){let e=this.user();if(!e)return`NA`;if(e.first_name&&e.last_name)return`${e.first_name[0]}${e.last_name[0]}`;let t=(e.name||``).replace(/<[^>]*>/g,` `).trim();t||(t=(e.email||e.name||``).split(`@`)[0]);let i=t.replace(/[()[\]\-+=\\/@<>]+/gi,` `).split(/\s+/).filter(Boolean);return i.length===0?`NA`:i.length>1?`${i[0][0]}${i[i.length-1][0]}`:i[0].slice(0,2)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=oT({type:n,selectors:[[`a-user-avatar`]],inputs:{user:[1,`user`]},decls:1,vars:1,consts:[[1,`border-base-100`,`bg-base-200`,`flex`,`h-[2.5em]`,`w-[2.5em]`,`items-center`,`justify-center`,`overflow-hidden`,`rounded-full`,`border-2`],[`initials`,``,1,`text-base-content`,`uppercase`,`opacity-60`],[`auth`,``,1,`flex`,`h-full`,`w-full`,`items-center`,`justify-center`,`object-cover`,`object-center`,3,`alt`,`source`]],template:function(t,i){t&1&&XT(0,zc,3,2,`div`,0),t&2&&JT(i.is_valid()?0:-1)},dependencies:[wt],encapsulation:2})}}return n})();function Gc(n,o){if(n&1&&(aa(0,`mat-option`,8),Z_(1),Td()),n&2){let e=o.$implicit;Cy(`value`,e.display_name||e.name),AC(),Ad(` `,e.display_name||e.name,` `)}}function Hc(n,o){if(n&1&&(aa(0,`mat-option`,8),Z_(1),Td()),n&2){let e=o.$implicit;Cy(`value`,e?.name||e),AC(),Ad(` `,e.name||e,` `)}}function Wc(n,o){if(n&1&&(aa(0,`div`,5)(1,`label`),Z_(2),ES(3,`translate`),Td(),aa(4,`mat-form-field`,6)(5,`mat-select`,7),ES(6,`translate`),n_(7,Hc,2,2,`mat-option`,8,t_),Td(),gb(),Td()()),n&2){let e=g_();AC(2),Ky(wS(3,3,`COMMON.SUPPORT_TYPE`)),AC(3),Cy(`placeholder`,wS(6,5,`COMMON.SUPPORT_TYPE`))(`formField`,e.form.issue_type),yb(),AC(2),r_(e.support_request_types())}}function qc(n,o){n&1&&(aa(0,`mat-error`,11),Z_(1),ES(2,`translate`),Td()),n&2&&(AC(),Ad(` `,wS(2,1,`COMMON.DESCRIPTION_REQUIRED`),` `))}function jc(n,o){if(n&1&&(aa(0,`div`,12)(1,`label`,10),Z_(2),ES(3,`translate`),Td(),by(4,`image-list-field`,14),gb(),Td()),n&2){let e=g_();AC(2),Ky(wS(3,2,`COMMON.IMAGES`)),AC(2),Cy(`formField`,e.form.images),yb()}}var Dr=(()=>{class n{constructor(){this._dialog_ref=y(T$1),this._org=y(gi$1),this._settings=y(se),this._support_email=this._settings.signal(`support_email`,`support@place.tech`),this._support_issue_types=this._settings.signal(`support_issue_types`,[]),this._allow_images=this._settings.signal(`allow_support_ticket_images`,!1),this.loading=It(!1),this.model=It({name:``,email:``,location:``,description:``,issue_type:``,images:[]}),this.form=Xt$1(this.model,e=>{Qr$1(e.name),Qr$1(e.email),Qr$1(e.description)}),this.desc_error=It(!1),this.support_email=this._support_email,this.support_request_types=this._support_issue_types,this.allow_images=this._allow_images,this.buildings=this._org.building_list}ngOnInit(){let e=$();e&&this.model.update(t=>m(l({},t),{name:e.name,email:e.email})),this._org.building&&this.model.update(t=>m(l({},t),{location:this._org.building.display_name||this._org.building.name}))}async submit(){if(this.loading.set(!0),this.form().markAsTouched(),this._updateDescError(),this.form().valid()){let e=this._org.module(`smtp`,`Mailer`);if(!e)return up(Yt$2(`COMMON.SUPPORT_NO_MAILER`));let{name:t,email:i,location:a,description:d,images:y,issue_type:N}=this.model(),ee=this.support_request_types().find(Re=>Re.name===N)?.email||this.support_email(),le=Yt$2(`COMMON.SUPPORT_MAIL_HEADER`,{issue_type:N?` - `+N:``});await e.execute(`send_mail`,[ee,le,`${t}
${i}

${a}

${d.replace(/<[^>]+>/g,``)}

${y.join(`
`)}`,`<p>${t}</p><p>${i}</p><p>${a}</p><p>${d}</p>${y.join(`<br>`)}`,[],[],[],[],null,`${i}`]),this._dialog_ref.close(),this.loading.set(!1),op(Yt$2(`COMMON.SUPPORT_SUCCESS`))}}_updateDescError(){this.desc_error.set(this.form.description().invalid()&&this.form.description().touched())}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=oT({type:n,selectors:[[`support-ticket-modal`]],decls:51,vars:45,consts:[[3,`confirm`,`heading`,`loading`,`confirm_text`],[1,`flex`,`flex-wrap`,`items-center`,`sm:space-x-2`],[1,`flex`,`flex-1`,`flex-col`],[`appearance`,`outline`],[`matInput`,``,3,`placeholder`,`formField`],[1,`flex`,`flex-col`],[`appearance`,`outline`,1,`w-full`],[3,`placeholder`,`formField`],[3,`value`],[1,``],[1,`mb-4`],[1,`my-2`,`text-xs`],[1,`pt-4`],[1,`mb-2`,`text-center`,`text-xs`,`italic`],[3,`formField`]],template:function(t,i){t&1&&(aa(0,`fullscreen-modal-shell`,0),ES(1,`translate`),xy(`confirm`,function(){return i.submit()}),aa(2,`form`)(3,`div`,1)(4,`div`,2)(5,`label`),Z_(6),ES(7,`translate`),aa(8,`span`),Z_(9,`*`),Td()(),aa(10,`mat-form-field`,3),by(11,`input`,4),ES(12,`translate`),gb(),aa(13,`mat-error`),Z_(14),ES(15,`translate`),Td()()(),aa(16,`div`,2)(17,`label`),Z_(18),ES(19,`translate`),aa(20,`span`),Z_(21,`*`),Td()(),aa(22,`mat-form-field`,3),by(23,`input`,4),ES(24,`translate`),gb(),aa(25,`mat-error`),Z_(26),ES(27,`translate`),Td()()()(),aa(28,`div`,5)(29,`label`),Z_(30),ES(31,`translate`),Td(),aa(32,`mat-form-field`,6)(33,`mat-select`,7),ES(34,`translate`),n_(35,Gc,2,2,`mat-option`,8,t_),Td(),gb(),Td()(),XT(37,Wc,9,7,`div`,5),aa(38,`div`,9)(39,`label`,10),Z_(40),ES(41,`translate`),aa(42,`span`),Z_(43,`*`),Td()(),by(44,`rich-text-input`,7),ES(45,`translate`),gb(),XT(46,qc,3,3,`mat-error`,11),Td(),XT(47,jc,5,4,`div`,12),Td(),aa(48,`div`,13),Z_(49),ES(50,`translate`),Td()()),t&2&&(Cy(`heading`,`Raise a support ticket`)(`loading`,i.loading()?`true`:``)(`confirm_text`,wS(1,21,`COMMON.SUBMIT`)),AC(6),Ky(wS(7,23,`FORM.NAME`)),AC(5),Cy(`placeholder`,wS(12,25,`FORM.NAME`))(`formField`,i.form.name),yb(),AC(3),Ky(wS(15,27,`FORM.NAME_REQUIRED`)),AC(4),Ky(wS(19,29,`FORM.EMAIL`)),AC(5),Cy(`placeholder`,wS(24,31,`FORM.EMAIL`))(`formField`,i.form.email),yb(),AC(3),Ky(wS(27,33,`FORM.EMAIL_REQUIRED`)),AC(4),Ky(wS(31,35,`COMMON.LOCATION`)),AC(3),Cy(`placeholder`,wS(34,37,`COMMON.LOCATION`))(`formField`,i.form.location),yb(),AC(2),r_(i.buildings()),AC(2),JT(i.support_request_types().length?37:-1),AC(3),Ad(` `,wS(41,39,`COMMON.SUPPORT_DESCRIPTION`),` `),AC(4),Cy(`placeholder`,wS(45,41,`COMMON.SUPPORT_DESCRIPTION`))(`formField`,i.form.description),yb(),AC(2),JT(i.desc_error()?46:-1),AC(),JT(i.allow_images()?47:-1),AC(2),Ad(` `,wS(50,43,`COMMON.SUPPORT_MSG`),` `))},dependencies:[cD,de$1,rt,Ot,rn$1,on$1,Jr$1,St,Mt,Rr,Er,Jt,Zt,X$1,Ht$2,Hn,f],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%}
/*# sourceMappingURL=support-ticket-modal.component.css.map */`]})}}return n})();var Kc=[`*`];var Qc=(n,o)=>o.id;function $c(n,o){if(n&1&&(aa(0,`div`,4),Z_(1),ES(2,`date`),Td()),n&2){let e=g_();AC(),Ad(` `,bS(2,1,e.active_time(),e.time_format()+` (z)`,e.tz()),` `)}}function Xc(n,o){if(n&1&&(aa(0,`div`,13),Z_(1),ES(2,`date`),Td()),n&2){let e=g_(2);AC(),Ad(` `,bS(2,1,e.force_time(),e.time_format()+` (z)`,e.tz()),` `)}}function Yc(n,o){n&1&&(aa(0,`icon`,14),Z_(1,` done `),Td())}function Zc(n,o){if(n&1){let e=u_();aa(0,`button`,9),xy(`click`,function(){Jp(e);let i=g_();return eh(i.setValue(i.force_time().toString()))}),aa(1,`div`,10)(2,`div`,11)(3,`div`,12),Z_(4),ES(5,`date`),Td(),XT(6,Xc,3,5,`div`,13),Td(),XT(7,Yc,2,0,`icon`,14),Td()()}if(n&2){let e=g_();Cy(`value`,e.force_time()),AC(4),Ad(` `,CS(5,4,e.force_time(),e.time_format()),` `),AC(2),JT(e.timezone()&&e.tz()?6:-1),AC(),JT(e.active_time()===e.force_time()?7:-1)}}function Jc(n,o){if(n&1&&(aa(0,`div`,13),Z_(1),ES(2,`date`),Td()),n&2){let e=g_().$implicit,t=g_();AC(),Ad(` `,bS(2,1,e.date,t.time_format()+` (z)`,t.tz()),` `)}}function el(n,o){n&1&&(aa(0,`icon`,14),Z_(1,` done `),Td())}function tl(n,o){if(n&1){let e=u_();aa(0,`button`,9),xy(`click`,function(){let i=Jp(e).$implicit;return eh(g_().setValue(i.id))}),aa(1,`div`,10)(2,`div`,11)(3,`div`,12),Z_(4),ES(5,`date`),Td(),XT(6,Jc,3,5,`div`,13),Td(),XT(7,el,2,0,`icon`,14),Td()()}if(n&2){let e=o.$implicit,t=g_();Cy(`value`,e.id),wy(`data-time`,e.id),AC(4),Xy(` `,CS(5,6,e.date,t.time_format()),` `,t.extra_info_fn()(e.date),` `),AC(2),JT(t.timezone()&&t.tz()?6:-1),AC(),JT(t.active_time()===e.date?7:-1)}}function il(n,o){n&1&&(aa(0,`div`,8),Z_(1,`No time options to select`),Td())}function nl(n,o){n&1&&(aa(0,`mat-error`),v_(1),Td())}function Or(n){if(n==null||n===``)return null;let o=Number(n);return Number.isFinite(o)?o:null}var Fr=(()=>{class n extends y$1{constructor(){super(...arguments),this.step=j2(15),this.disabled=B2(void 0),this.no_past_times=j2(!0),this.use_24hr=j2(!1),this.force_time=j2(void 0),this.no_error=j2(void 0),this.extra_info_fn=j2(e=>``),this.from=j2(nt$1(Date.now()).valueOf()),this.range=j2(void 0),this._range=Fe(()=>{let e=this.range();if(!e)return;let t=Or(e.start),i=Or(e.end);if(!(t===null||i===null||i<=t))return{start:t,end:i}}),this.min_duration=j2(0),this.timezone=j2(``),this.date=It(new Date().valueOf()),this.time=It(Eh(new Date,`HH:mm`)),this._time_options=It([]),this.show_select=It(!1),this.active_time=It(Date.now()),this.no_options=It(!1),this._menu_trigger=V2(Bt),this.time_format=Fe(()=>this.use_24hr()?`HH : mm`:`h : mm a`),this._local_tz=_p(Intl.DateTimeFormat().resolvedOptions().timeZone),this.tz=Fe(()=>{let e=this.timezone();if(!e)return``;let t=_p(e);return t===this._local_tz?``:t})}ngOnInit(){this.show_select.set(!0),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions(),this.timeout(`hide`,()=>this.show_select.set(!1));let e=this.timezone()||void 0;this.active_time.set(this._time_options().find(t=>t.id===bp(this.date(),e))?.date||this.active_time())}ngOnChanges(e){(e.no_past_times||e.step||e.from||e.range||e.min_duration)&&(this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions())}ngAfterViewInit(){let e=this._menu_trigger();e&&this.subscription(`menu_opened`,e.menuOpened.subscribe(()=>{this._scrollToSelectedTime()}))}_scrollToSelectedTime(){requestAnimationFrame(()=>{if(!this._menu_trigger()?.menu)return;let t=document.querySelector(`.mat-mdc-menu-panel`);if(!t)return;let i=this.timezone()||void 0,a=this.time()||bp(new Date,i),d=t.querySelector(`[data-time="${a}"]`);if(!d&&this._time_options().length){let y=this._timeToMinutes(a),N=this._time_options()[0],ee=Infinity;for(let le of this._time_options()){let Re=this._timeToMinutes(le.id),ot=Math.abs(Re-y);ot<ee&&(ee=ot,N=le)}d=t.querySelector(`[data-time="${N.id}"]`)}if(d){if(typeof d.scrollIntoView!=`function`)return;d.scrollIntoView({block:`center`,behavior:`instant`})}})}_timeToMinutes(e){let[t,i]=e.split(`:`).map(Number);return t*60+i}time_options(){let e=this.timezone()||void 0,t=(this.time()||`00:00`).split(`:`),i=wp(this.date(),+t[0],+t[1],e),{minutes:a}=$u(i,e),d=bp(i,e),y=[...this._time_options()];return a%this.step()!==0&&this._isWithinRange(i)&&!y.find(N=>N.id===d)&&(y.push({date:i,id:d}),y.sort((N,ee)=>`${N.id}`.localeCompare(`${ee.id}`))),y}setValue(e){this.time.set(e);let t=this.timezone()||void 0;if(this._onChange){let y=(this.time()||`00:00`).split(`:`),N=wp(this.date(),+y[0],+y[1],t);qp(),this._onChange(N)}let i=this.force_time()||this.time(),a=(typeof i==`string`?i:bp(i,t)).split(`:`),d=wp(this.date(),+a[0],+a[1],t);this.active_time.set(this._time_options().find(y=>y.id===(typeof i==`string`?i:bp(i,t)))?.date||d)}writeValue(e){this.date.set(e||this.date());let t=this.timezone()||void 0,i=Er$1(this.date());i=Rr$1(i,{nearestTo:5}),this.time.set(bp(i,t)),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions();let a=this.force_time(),d=a?bp(a,t):this.time();this.active_time.set(this._time_options().find(y=>y.id===d)?.date||i.valueOf())}setDisabledState(e){this.disabled.set(e),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times()||e,this.step())),this._updateNoOptions()}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouch=e}_updateNoOptions(){this.no_options.set(!this.disabled()&&(!this._time_options()||this._time_options().length===0)&&!this.force_time())}generateAvailableTimes(e,t,i=15){let a=t?this.from():Math.max(this.from(),Date.now()),d=[],y=this._range(),N=this.timezone()||void 0,ee=N?Ya$1(e,N):nt$1(e).valueOf(),le=N?za(e,N):Mr(e).valueOf(),Re=this.min_duration()||0,ot=y?y.start*60:void 0,ii=y?y.end*60:void 0,at=ii!=null&&Re>0?ii-Re:ii,ni=Math.max(ee,a,ot!=null?ee+ot*60*1e3:ee),B=Math.min(le,at!=null?ee+at*60*1e3:le);if(ni>B)return d;let Y=this._roundUpToStep(ni,i),Pe=this._roundDownToStep(B,i);for(;!ke(Y,Pe);)d.push({date:Y.valueOf(),id:bp(Y,N)}),Y=yt(Y,i);return d}_isWithinRange(e){if(L(e,this.from()))return!1;let t=this._range();if(!t)return!0;let i=t.start*60,a=t.end*60,d=this.min_duration()||0,y=d>0?a-d:a,{hours:ee,minutes:le}=$u(e,this.timezone()||void 0),Re=ee*60+le;return!(Re<i||Re>y)}_roundUpToStep(e,t){let i=Rr$1(e,{nearestTo:t});return L(i,e)&&(i=yt(i,t)),Er$1(i)}_roundDownToStep(e,t){let i=Rr$1(e,{nearestTo:t});return ke(i,e)&&(i=yt(i,-t)),Er$1(i)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Og(n)))(i||n)}})()}static{this.ɵcmp=oT({type:n,selectors:[[`a-time-field`],[`time-field`]],viewQuery:function(t,i){t&1&&Ly(i._menu_trigger,Bt,5),t&2&&w_()},inputs:{step:[1,`step`],disabled:[1,`disabled`],no_past_times:[1,`no_past_times`],use_24hr:[1,`use_24hr`],force_time:[1,`force_time`],no_error:[1,`no_error`],extra_info_fn:[1,`extra_info_fn`],from:[1,`from`],range:[1,`range`],min_duration:[1,`min_duration`],timezone:[1,`timezone`]},outputs:{disabled:`disabledChange`},features:[aS([{provide:Ne,useExisting:fs$1(()=>n),multi:!0}]),uy,ua],ngContentSelectors:Kc,decls:15,vars:12,consts:[[`menu`,`matMenu`],[`type`,`button`,`time-field`,``,`matRipple`,``,1,`border-neutral`,`flex`,`h-12`,`w-full`,`items-center`,`justify-between`,`rounded-sm`,`border`,`px-2`,3,`disabled`,`matMenuTriggerFor`],[1,`flex`,`w-1/2`,`flex-1`,`flex-col`,`px-2`,`text-left`,`leading-tight`],[1,`truncate`],[1,`truncate`,`text-xs`,`opacity-30`],[1,`text-2xl`],[1,`max-h-60`,`min-w-[18rem]`],[`type`,`button`,`mat-menu-item`,``,1,`text-left`,3,`value`],[`mat-menu-item`,``,`disabled`,``],[`type`,`button`,`mat-menu-item`,``,1,`text-left`,3,`click`,`value`],[1,`flex`,`items-center`,`justify-between`],[1,`flex`,`flex-col`,`leading-tight`],[1,``],[1,`text-xs`,`opacity-30`],[1,`ml-2`,`text-2xl`]],template:function(t,i){if(t&1&&(y_(),aa(0,`button`,1)(1,`div`,2)(2,`div`,3),Z_(3),ES(4,`date`),Td(),XT(5,$c,3,5,`div`,4),Td(),aa(6,`icon`,5),Z_(7,`arrow_drop_down`),Td()(),aa(8,`mat-menu`,6,0),XT(10,Zc,8,7,`button`,7),n_(11,tl,8,9,`button`,7,Qc,!1,il,2,0,`div`,8),Td(),XT(14,nl,2,0,`mat-error`)),t&2){let a=C_(9);Uy(`opacity-30`,i.disabled()||i.no_options()),Cy(`disabled`,i.disabled()||i.no_options())(`matMenuTriggerFor`,a),AC(3),Ad(` `,CS(4,9,i.active_time(),i.time_format()),` `),AC(2),JT(i.timezone()&&i.tz()?5:-1),AC(5),JT(i.force_time()?10:-1),AC(),r_(i.time_options()),AC(3),JT(i.no_error()?-1:14)}},dependencies:[cD,Lt,I,G,Bt,de$1,Ot,_d$2,eN],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%}
/*# sourceMappingURL=time-field.component.css.map */`]})}}return n})();function ol(n,o){n&1&&(aa(0,`button`,2)(1,`icon`),Z_(2,`close`),Td()())}function al(n,o){if(n&1){let e=u_();aa(0,`div`,7)(1,`div`,11),Z_(2),ES(3,`date`),Td(),aa(4,`mat-checkbox`,12),xy(`ngModelChange`,function(i){let a=Jp(e).$implicit,d=g_(2);return d.setWeekdayEnabled(a.getDay(),i),eh(i&&d.initialiseDay(a.getDay()))}),Td(),gb(),Td()}if(n&2){let e=o.$implicit,t=g_(2);AC(2),Ad(` `,CS(3,2,e,`EEE`),` `),AC(2),Cy(`ngModel`,t.weekdays_enabled()[e.getDay()]),yb()}}function rl(n,o){if(n&1&&(aa(0,`mat-option`,20),Z_(1),Td()),n&2){let e=o.$implicit;Cy(`value`,e.id),AC(),Ad(` `,e.name,` `)}}function sl(n,o){if(n&1){let e=u_();aa(0,`button`,23),xy(`click`,function(){Jp(e);let i=g_().$index,a=g_(2).$implicit,d=g_(3);return eh(d.addBlock(d.settings()[a.getDay()],i))}),aa(1,`icon`),Z_(2,`add`),Td()()}}function cl(n,o){if(n&1){let e=u_();aa(0,`button`,24),xy(`click`,function(){Jp(e);let i=g_().$index,a=g_(2).$implicit,d=g_(3);return eh(d.removeBlock(d.settings()[a.getDay()],i))}),aa(1,`icon`),Z_(2,`delete`),Td()()}}function ll(n,o){if(n&1){let e=u_();aa(0,`div`,16)(1,`a-time-field`,18),xy(`ngModelChange`,function(i){let a=Jp(e).$implicit,d=g_(2).$implicit;return eh(g_(3).setStartTime(a,d.getDay(),i))}),Td(),gb(),aa(2,`a-time-field`,18),xy(`ngModelChange`,function(i){let a=Jp(e).$implicit,d=g_(2).$implicit;return eh(g_(3).setEndTime(a,d.getDay(),i))}),Td(),gb(),aa(3,`mat-form-field`,19)(4,`mat-select`,12),nv(`ngModelChange`,function(i){let a=Jp(e).$implicit;return J_(a.location,i)||(a.location=i),eh(i)}),n_(5,rl,2,2,`mat-option`,20,t_),Td(),gb(),Td(),XT(7,sl,3,0,`button`,21),XT(8,cl,3,0,`button`,22),Td()}if(n&2){let e=o.$implicit,t=o.$index,i=g_(2).$implicit,a=g_(3);AC(),Cy(`ngModel`,a.timeFrom(e.start_time))(`from`,a.timeFrom((t>0?a.settings()[i.getDay()].blocks[t-1]?.end_time:0)||0))(`no_error`,!0),yb(),AC(),Cy(`ngModel`,a.timeFrom(e.end_time))(`from`,a.timeFrom(e.start_time+.25))(`no_error`,!0),yb(),AC(2),tv(`ngModel`,e.location),yb(),AC(),r_(a.options()),AC(2),JT(t===0?7:-1),AC(),JT(t!==0?8:-1)}}function dl(n,o){if(n&1&&(aa(0,`div`,14)(1,`div`,15),n_(2,ll,9,9,`div`,16,t_),Td(),aa(4,`h3`,17),Z_(5),ES(6,`date`),Td()()),n&2){let e=g_().$implicit,t=g_(3);AC(2),r_(t.settings()[e.getDay()].blocks),AC(3),Ad(` `,CS(6,1,e,`EEEE`),` `)}}function ml(n,o){if(n&1&&XT(0,dl,7,4,`div`,14),n&2){let e=o.$implicit;JT(g_(3).weekdays_enabled()[e.getDay()]?0:-1)}}function pl(n,o){if(n&1&&(aa(0,`div`,9),n_(1,ml,1,1,null,null,t_),aa(3,`h3`,13),Z_(4),ES(5,`translate`),Td()()),n&2){let e=g_(2);AC(),r_(e.days),AC(3),Ad(` `,wS(5,1,`COMMON.WORK_HOURS`),` `)}}function hl(n,o){n&1&&(aa(0,`div`,10),by(1,`img`,25),aa(2,`p`,26),Z_(3),ES(4,`translate`),Td()()),n&2&&(AC(3),Ad(` `,wS(4,1,`COMMON.WORK_SETTINGS_EMPTY`),` `))}function ul(n,o){if(n&1&&(aa(0,`main`,3)(1,`div`,6),n_(2,al,5,5,`div`,7,t_),aa(4,`h3`,8),Z_(5),ES(6,`translate`),Td()(),XT(7,pl,6,3,`div`,9)(8,hl,5,3,`div`,10),Td()),n&2){let e=g_();AC(2),r_(e.days),AC(3),Ad(` `,wS(6,2,`COMMON.WORK_DAYS`),` `),AC(2),JT(e.has_working_days()?7:8)}}function _l(n,o){n&1&&(aa(0,`div`,4),by(1,`mat-spinner`,27),aa(2,`p`,26),Z_(3),ES(4,`translate`),Td()()),n&2&&(AC(),Cy(`diameter`,32),AC(2),Ad(` `,wS(4,2,`COMMON.WORK_SETTINGS_SAVE`),` `))}function fl(n,o){if(n&1){let e=u_();aa(0,`footer`,5)(1,`button`,28),xy(`click`,function(){Jp(e);return eh(g_().saveChanges())}),Z_(2),ES(3,`translate`),Td()()}n&2&&(AC(2),Ad(` `,wS(3,1,`COMMON.SAVE`),` `))}var Kn=(()=>{class n{constructor(){this._data=y($e),this._dialog_ref=y(T$1),this.options=It([]),this.option=It(``),this.settings=It([]),this.weekdays_enabled=It({}),this.changed=It(!1),this.loading=It(!1),this.available_weekdays=It([]),this.days=new Array(7).fill(0).map((e,t)=>na(gt(na(Date.now(),30)),t)),this.has_working_days=Fe(()=>{let e=this.weekdays_enabled();return Object.keys(e).some(t=>e[t])}),this.option_name=Fe(()=>this.options().find(e=>e.id===this.option())?.name||``),this.now=Fe(()=>Er$1(Date.now()).getTime())}ngOnInit(){let e=$(),i=[...((this._data?.local?this._data.preferences:e.work_preferences)||[]).map(y=>m(l({},y),{blocks:[...y?.blocks||[]]}))],a={};for(let y of i)y.blocks.length&&(a[y.day_of_week]=!0);this.settings.set(i),this.weekdays_enabled.set(a);let d=[{id:`wfo`,name:Yt$2(`COMMON.WORK_OFFICE`),icon:`business`},{id:`wfh`,name:Yt$2(`COMMON.WORK_HOME`),icon:`home`},{id:`aol`,name:Yt$2(`COMMON.WORK_LEAVE`),icon:`event_busy`}];this.options.set(d),this.option.set(d[0].id)}timeFrom(e){return Er$1(vt(na(new Date,1),{hours:Math.floor(e),minutes:e*60%60})).getTime()}fromTime(e){let t=new Date(e);return t.getHours()+t.getMinutes()/60}initialiseDay(e){let t=this.settings();t[e]||(t[e]={day_of_week:e,blocks:[]}),t[e].blocks||(t[e].blocks=[]),t[e].blocks.length===0&&this.addBlock(t[e],0),this.settings.set([...t])}addBlock(e,t){e.blocks.splice(t+1,0,{start_time:9,end_time:17,location:`wfo`}),this.cleanupBlocks(e),this.settings.update(i=>[...i])}removeBlock(e,t){e.blocks.length<=1||(e.blocks.splice(t,1),this.settings.update(i=>[...i]))}setEndTime(e,t,i){setTimeout(()=>{e.end_time=this.fromTime(i),this.cleanupBlocks(this.settings()[t]),this.settings.update(a=>[...a])},50)}setStartTime(e,t,i){setTimeout(()=>{e.start_time=this.fromTime(i),this.cleanupBlocks(this.settings()[t]),this.settings.update(a=>[...a])},50)}cleanupBlocks(e){if(e?.blocks?.length)for(let t=0;t<e.blocks.length;t++){let i=e.blocks[t];t>0&&i.start_time<e.blocks[t-1].end_time&&(i.start_time=e.blocks[t-1].end_time),i.end_time<=i.start_time&&(i.end_time=i.start_time+1)}}async saveChanges(e=!0){this.loading.set(!0),this._dialog_ref.disableClose=!0;let t=new Array(7).fill(0).map((i,a)=>({day_of_week:a,blocks:[]}));for(let i of this.days){let a=i.getDay();this.weekdays_enabled()[a]&&(t[a]={day_of_week:a,blocks:this.settings()[a].blocks})}if(this._data?.local)this.loading.set(!1),this._dialog_ref.disableClose=!1;else try{let i=await oc$1(`current`);await uc$1(i.id,m(l({},i),{groups:i.groups.filter(a=>!a.startsWith(`placeos_`)),work_preferences:t}))}catch(i){throw up(`Unable to save user work preferences.`),i}finally{this.loading.set(!1),this._dialog_ref.disableClose=!1}e&&(this._data?.local||rr$1(),this._dialog_ref.close(t))}setWeekdayEnabled(e,t){this.weekdays_enabled.update(i=>m(l({},i),{[e]:t}))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=oT({type:n,selectors:[[`wfh-settings-modal`]],decls:8,vars:6,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``,1,`bg-base-200`],[1,`relative`,`flex`,`max-h-[calc(100vh-9rem)]`,`w-160`,`max-w-full`,`flex-col`,`space-y-2`,`overflow-x-hidden`,`overflow-y-auto`,`rounded-sm`,`px-2`,`py-4`,`sm:max-h-[65vh]`,`sm:p-4`],[`loading`,``,1,`bg-base-100`,`relative`,`flex`,`h-72`,`w-[24rem]`,`flex-col`,`items-center`,`justify-center`,`space-y-2`,`overflow-hidden`,`rounded-sm`,`text-center`],[1,`border-base-200`,`flex`,`justify-end`,`border-t`,`px-4`,`py-2`],[1,`border-base-300`,`relative`,`mb-4`,`flex`,`w-full`,`items-center`,`justify-between`,`space-x-2`,`rounded-sm`,`border`,`p-2`],[1,`flex`,`flex-1`,`flex-col`,`items-center`,`pt-2`],[1,`bg-base-100`,`absolute`,`top-0`,`left-2`,`-translate-y-1/2`,`px-2`],[1,`border-base-300`,`relative`,`flex`,`w-full`,`flex-col`,`items-center`,`justify-between`,`space-y-4`,`rounded-sm`,`border`,`px-2`,`pt-6`,`pb-4`,`sm:px-4`],[1,`flex`,`flex-col`,`items-center`,`justify-center`,`space-y-4`,`px-8`,`py-16`],[1,`text-xs`,`font-bold`,`uppercase`],[3,`ngModelChange`,`ngModel`],[1,`bg-base-100`,`absolute`,`top-0`,`left-2`,`m-0!`,`-translate-y-1/2`,`px-2`],[1,`border-base-200`,`relative`,`flex`,`w-full`,`items-center`,`justify-between`,`space-x-2`,`rounded-sm`,`border`,`p-2`],[1,`w-1/2`,`flex-1`,`space-y-2`,`pt-2`],[1,`flex`,`items-center`,`space-x-2`],[1,`border-base-200`,`bg-base-100`,`bg-opacity-50`,`absolute`,`top-0`,`left-2`,`-translate-y-1/2`,`rounded-sm`,`border`,`px-2`,`text-sm`,`font-medium`],[1,`w-1/4`,`flex-1`,3,`ngModelChange`,`ngModel`,`from`,`no_error`],[`appearance`,`outline`,1,`no-subscript`,`w-1/4`,`flex-1`],[3,`value`],[`icon`,``,`matRipple`,``,1,`border-base-400`,`h-12`,`w-12`,`rounded-sm`,`border`],[`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`],[`icon`,``,`matRipple`,``,1,`border-base-400`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`],[`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`],[`src`,`assets/icons/no-results.svg`,1,`m-auto`],[1,`opacity-30`],[3,`diameter`],[`btn`,``,`matRipple`,``,1,`w-48`,3,`click`]],template:function(t,i){t&1&&(aa(0,`header`,0)(1,`h2`,1),Z_(2),ES(3,`translate`),Td(),XT(4,ol,3,0,`button`,2),Td(),XT(5,ul,9,4,`main`,3)(6,_l,5,4,`div`,4),XT(7,fl,4,3,`footer`,5)),t&2&&(AC(2),Ad(` `,wS(3,4,`COMMON.WORK_LOCATION_SETTINGS`),` `),AC(2),JT(i.loading()?-1:4),AC(),JT(i.loading()?6:5),AC(2),JT(i.loading()?-1:7))},dependencies:[cD,Ht$2,Bt$1,Mt,yt$1,de$1,rt,Jt,Zt,X$1,Fr,zn,fi,ng,Jp$1,Ac$1,_d$2,St,Yt,eN,f],encapsulation:2})}}return n})();var gl=[`knob`];var bl=[`valueIndicatorContainer`];function vl(n,o){if(n&1&&(aa(0,`div`,2,1)(2,`div`,5)(3,`span`,6),Z_(4),Td()()()),n&2){let e=g_();AC(4),Ky(e.valueIndicatorText)}}var yl=[`trackActive`];var xl=[`*`];function kl(n,o){if(n&1&&by(0,`div`),n&2){let e=o.$implicit,t=o.$index,i=g_(3);j_(e===0?`mdc-slider__tick-mark--active`:`mdc-slider__tick-mark--inactive`),Hy(`transform`,i._calcTickMarkTransform(t))}}function Cl(n,o){if(n&1&&n_(0,kl,1,4,`div`,8,e_),n&2)r_(g_(2)._tickMarks)}function Sl(n,o){if(n&1&&(aa(0,`div`,6,1),XT(2,Cl,2,0),Td()),n&2){let e=g_();AC(2),JT(e._cachedWidth?2:-1)}}function wl(n,o){if(n&1&&by(0,`mat-slider-visual-thumb`,7),n&2){let e=g_();Cy(`discrete`,e.discrete)(`thumbPosition`,1)(`valueIndicatorText`,e.startValueIndicatorText)}}var R=(function(n){return n[n.START=1]=`START`,n[n.END=2]=`END`,n})(R||{});var ti=(function(n){return n[n.ACTIVE=0]=`ACTIVE`,n[n.INACTIVE=1]=`INACTIVE`,n})(ti||{});var To=new w(`_MatSlider`);var Pr=new w(`_MatSliderThumb`);var Ml=new w(`_MatSliderRangeThumb`);var Vr=new w(`_MatSliderVisualThumb`);var Il=(()=>{class n{_cdr=y(ef);_ngZone=y(pe);_slider=y(To);_renderer=y(nr$1);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=y(Yt$1).nativeElement;_platform=y(C$1);ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let t=this._sliderInputEl,i=this._renderer;this._listenerCleanups=[i.listen(t,`pointermove`,this._onPointerMove),i.listen(t,`pointerdown`,this._onDragStart),i.listen(t,`pointerup`,this._onDragEnd),i.listen(t,`pointerleave`,this._onMouseLeave),i.listen(t,`focus`,this._onFocus),i.listen(t,`blur`,this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e())}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let t=this._hostElement.getBoundingClientRect(),i=this._slider._isCursorOnSliderThumb(e,t);this._isHovered=i,i?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add(`mdc-slider__thumb--focused`)};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove(`mdc-slider__thumb--focused`)};_onDragStart=e=>{e.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add(`mat-mdc-slider-hover-ripple`))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add(`mat-mdc-slider-focus-ripple`))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add(`mat-mdc-slider-active-ripple`))}_isShowingRipple(e){return e?.state===l$1.FADING_IN||e?.state===l$1.VISIBLE}_showRipple(e,t){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===R.START?R.END:R.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!t)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:!0,persistent:!0})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let t=this._getSibling();t._isShowingAnyRipple()||(this._hideValueIndicator(),t._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add(`mdc-slider__thumb--with-indicator`)}_hideValueIndicator(){this._hostElement.classList.remove(`mdc-slider__thumb--with-indicator`)}_getSibling(){return this._slider._getThumb(this.thumbPosition===R.START?R.END:R.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static ɵfac=function(t){return new(t||n)};static ɵcmp=oT({type:n,selectors:[[`mat-slider-visual-thumb`]],viewQuery:function(t,i){if(t&1&&ky(yt$1,5)(gl,5)(bl,5),t&2){let a;E_(a=I_())&&(i._ripple=a.first),E_(a=I_())&&(i._knob=a.first),E_(a=I_())&&(i._valueIndicatorContainer=a.first)}},hostAttrs:[1,`mdc-slider__thumb`,`mat-mdc-slider-visual-thumb`],inputs:{discrete:`discrete`,thumbPosition:`thumbPosition`,valueIndicatorText:`valueIndicatorText`},features:[aS([{provide:Vr,useExisting:n}])],decls:4,vars:2,consts:[[`knob`,``],[`valueIndicatorContainer`,``],[1,`mdc-slider__value-indicator-container`],[1,`mdc-slider__thumb-knob`],[`matRipple`,``,1,`mat-focus-indicator`,3,`matRippleDisabled`],[1,`mdc-slider__value-indicator`],[1,`mdc-slider__value-indicator-text`]],template:function(t,i){t&1&&(XT(0,vl,5,1,`div`,2),by(1,`div`,3,0)(3,`div`,4)),t&2&&(JT(i.discrete?0:-1),AC(3),Cy(`matRippleDisabled`,!0))},dependencies:[yt$1],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
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
`],encapsulation:2})}return n})();var Qn=(()=>{class n{_ngZone=y(pe);_cdr=y(ef);_elementRef=y(Yt$1);_dir=y(V,{optional:!0});_globalRippleOptions=y(et$1,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let t=this._getInput(R.END),i=this._getInput(R.START);t&&(t.disabled=this._disabled),i&&(i.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(e){let t=e==null||isNaN(e)?this._min:e;this._min!==t&&this._updateMin(t)}_min=0;color;disableRipple=!1;_updateMin(e){let t=this._min;this._min=e,this._isRange?this._updateMinRange({old:t,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange()}_updateMinRange(e){let t=this._getInput(R.END),i=this._getInput(R.START),a=t.value,d=i.value;i.min=e.new,t.min=Math.max(e.new,i.value),i.max=Math.min(t.max,t.value),i._updateWidthInactive(),t._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(t,i):this._onTranslateXChangeBySideEffect(i,t),a!==t.value&&this._onValueChange(t),d!==i.value&&this._onValueChange(i)}_updateMinNonRange(e){let t=this._getInput(R.END);if(t){let i=t.value;t.min=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t)}}get max(){return this._max}set max(e){let t=e==null||isNaN(e)?this._max:e;this._max!==t&&this._updateMax(t)}_max=100;_updateMax(e){let t=this._max;this._max=e,this._isRange?this._updateMaxRange({old:t,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange()}_updateMaxRange(e){let t=this._getInput(R.END),i=this._getInput(R.START),a=t.value,d=i.value;t.max=e.new,i.max=Math.min(e.new,t.value),t.min=i.value,t._updateWidthInactive(),i._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(i,t):this._onTranslateXChangeBySideEffect(t,i),a!==t.value&&this._onValueChange(t),d!==i.value&&this._onValueChange(i)}_updateMaxNonRange(e){let t=this._getInput(R.END);if(t){let i=t.value;t.max=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t)}}get step(){return this._step}set step(e){let t=isNaN(e)?this._step:e;this._step!==t&&this._updateStep(t)}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let e=this._getInput(R.END),t=this._getInput(R.START),i=e.value,a=t.value,d=t.value;e.min=this._min,t.max=this._max,e.step=this._step,t.step=this._step,this._platform.SAFARI&&(e.value=e.value,t.value=t.value),e.min=Math.max(this._min,t.value),t.max=Math.min(this._max,e.value),t._updateWidthInactive(),e._updateWidthInactive(),e.value<d?this._onTranslateXChangeBySideEffect(t,e):this._onTranslateXChangeBySideEffect(e,t),i!==e.value&&this._onValueChange(e),a!==t.value&&this._onValueChange(t)}_updateStepNonRange(){let e=this._getInput(R.END);if(e){let t=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),t!==e.value&&this._onValueChange(e)}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=De();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText=``;endValueIndicatorText=``;_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=Fe(()=>this._dir?.valueSignal()===`rtl`);_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=y(C$1);constructor(){y(T).load(Rt$3);let e=this._isRtl();G2(()=>{let t=this._isRtl();t!==e&&(e=t,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(R.END),t=this._getInput(R.START);this._isRange=!!e&&!!t,this._cdr.detectChanges();let i=this._getThumb(R.END);this._rippleRadius=i._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,t):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=!0,e._updateThumbUIByValue()}_initUIRange(e,t){e.initProps(),e.initUI(),t.initProps(),t.initUI(),e._updateMinMax(),t._updateMinMax(),e._updateStaticStyles(),t._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,e._updateThumbUIByValue(),t._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let e=this._getInput(R.END),t=this._getInput(R.START);e._setIsLeftThumb(),t._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),t.translateX=t._calcTranslateXByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateWidthInactive(),t._updateWidthInactive(),e._updateThumbUIByValue(),t._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(R.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>`u`||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(R.START)._isActive||this._getThumb(R.END)._isActive}_getValue(e=R.END){let t=this._getInput(e);return t?t.value:this.min}_skipUpdate(){return!!(this._getInput(R.START)?._skipUIUpdate||this._getInput(R.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(e){let t=this._trackActive.nativeElement.style;t.left=e.left,t.right=e.right,t.transformOrigin=e.transformOrigin,t.transform=e.transform}_calcTickMarkTransform(e){let t=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-t:t}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e))}_onTranslateXChangeBySideEffect(e,t){this._hasViewInitialized&&(e._updateThumbUIByValue(),t._updateThumbUIByValue())}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(R.END),t=this._getInput(R.START);e._updateThumbUIByValue(),t._updateThumbUIByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateMinMax(),t._updateMinMax(),e._updateWidthInactive(),t._updateWidthInactive()}else{let e=this._getInput(R.END);e&&e._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let e=this._getInput(R.START),t=this._getInput(R.END);return!e||!t?!1:t.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let t=e.getSibling(),i=this._getThumb(e.thumbPosition);this._getThumb(t.thumbPosition)._hostElement.classList.remove(`mdc-slider__thumb--top`),i._hostElement.classList.toggle(`mdc-slider__thumb--top`,this._thumbsOverlap)}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e))}_updateThumbUI(e){if(this._skipUpdate())return;let t=this._getThumb(e.thumbPosition===R.END?R.END:R.START);t._hostElement.style.transform=`translateX(${e.translateX}px)`}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let t=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(t):e._hostElement.setAttribute(`aria-valuetext`,t),this.discrete){e.thumbPosition===R.START?this.startValueIndicatorText=t:this.endValueIndicatorText=t;let i=this._getThumb(e.thumbPosition);t.length<3?i._hostElement.classList.add(`mdc-slider__thumb--short-value`):i._hostElement.classList.remove(`mdc-slider__thumb--short-value`)}}_updateValueIndicatorUIs(){let e=this._getInput(R.END),t=this._getInput(R.START);e&&this._updateValueIndicatorUI(e),t&&this._updateValueIndicatorUI(t)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,i=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*i}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e))}_updateTrackUIRange(e){let t=e.getSibling();if(!t||!this._cachedWidth)return;let i=Math.abs(t.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:`auto`,right:`${this._cachedWidth-t.translateX}px`,transformOrigin:`right`,transform:`scaleX(${i})`}):this._setTrackActiveStyles({left:`${t.translateX}px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${i})`})}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:`auto`,right:`0px`,transformOrigin:`right`,transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:`0px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${e.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e)}_updateTickMarkUINonRange(e){let t=this._getValue(),i=Math.max(Math.round((t-this.min)/e),0)+1,a=Math.max(Math.round((this.max-t)/e),0)-1;this._isRtl()?i++:a++,this._tickMarks=Array(i).fill(ti.ACTIVE).concat(Array(a).fill(ti.INACTIVE))}_updateTickMarkUIRange(e){let t=this._getValue(),i=this._getValue(R.START),a=Math.max(Math.round((i-this.min)/e),0),d=Math.max(Math.round((t-i)/e)+1,0),y=Math.max(Math.round((this.max-t)/e),0);this._tickMarks=Array(a).fill(ti.INACTIVE).concat(Array(d).fill(ti.ACTIVE),Array(y).fill(ti.INACTIVE))}_getInput(e){if(e===R.END&&this._input)return this._input;if(this._inputs?.length)return e===R.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===R.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle(`mat-mdc-slider-with-animation`,this._hasAnimation)}_isCursorOnSliderThumb(e,t){let i=t.width/2,a=t.x+i,d=t.y+i,y=e.clientX-a,N=e.clientY-d;return Math.pow(y,2)+Math.pow(N,2)<Math.pow(i,2)}static ɵfac=function(t){return new(t||n)};static ɵcmp=oT({type:n,selectors:[[`mat-slider`]],contentQueries:function(t,i,a){if(t&1&&Oy(a,Pr,5)(a,Ml,4),t&2){let d;E_(d=I_())&&(i._input=d.first),E_(d=I_())&&(i._inputs=d)}},viewQuery:function(t,i){if(t&1&&ky(yl,5)(Vr,5),t&2){let a;E_(a=I_())&&(i._trackActive=a.first),E_(a=I_())&&(i._thumbs=a)}},hostAttrs:[1,`mat-mdc-slider`,`mdc-slider`],hostVars:12,hostBindings:function(t,i){t&2&&(j_(`mat-`+(i.color||`primary`)),Uy(`mdc-slider--range`,i._isRange)(`mdc-slider--disabled`,i.disabled)(`mdc-slider--discrete`,i.discrete)(`mdc-slider--tick-marks`,i.showTickMarks)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{disabled:[2,`disabled`,`disabled`,cM],discrete:[2,`discrete`,`discrete`,cM],showTickMarks:[2,`showTickMarks`,`showTickMarks`,cM],min:[2,`min`,`min`,uM],color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,cM],max:[2,`max`,`max`,uM],step:[2,`step`,`step`,uM],displayWith:`displayWith`},exportAs:[`matSlider`],features:[aS([{provide:To,useExisting:n}])],ngContentSelectors:xl,decls:9,vars:5,consts:[[`trackActive`,``],[`tickMarkContainer`,``],[1,`mdc-slider__track`],[1,`mdc-slider__track--inactive`],[1,`mdc-slider__track--active`],[1,`mdc-slider__track--active_fill`],[1,`mdc-slider__tick-marks`],[3,`discrete`,`thumbPosition`,`valueIndicatorText`],[3,`class`,`transform`]],template:function(t,i){t&1&&(y_(),v_(0),aa(1,`div`,2),by(2,`div`,3),aa(3,`div`,4),by(4,`div`,5,0),Td(),XT(6,Sl,3,1,`div`,6),Td(),XT(7,wl,1,3,`mat-slider-visual-thumb`,7),by(8,`mat-slider-visual-thumb`,7)),t&2&&(AC(6),JT(i.showTickMarks?6:-1),AC(),JT(i._isRange?7:-1),AC(),Cy(`discrete`,i.discrete)(`thumbPosition`,2)(`valueIndicatorText`,i.endValueIndicatorText))},dependencies:[Il],styles:[`.mdc-slider__track {
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
`],encapsulation:2})}return n})();var El={provide:Ne,useExisting:fs$1(()=>vi),multi:!0};var vi=(()=>{class n{_ngZone=y(pe);_elementRef=y(Yt$1);_cdr=y(ef);_slider=y(To);_platform=y(C$1);_listenerCleanups;get value(){return uM(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let t=e+``;if(!this._hasSetInitialValue){this._initialValue=t;return}this._isActive||this._setValue(t)}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new Ht;dragStart=new Ht;dragEnd=new Ht;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e}_translateX;thumbPosition=R.END;get min(){return uM(this._hostElement.min,0)}set min(e){this._hostElement.min=e+``,this._cdr.detectChanges()}get max(){return uM(this._hostElement.max,0)}set max(e){this._hostElement.max=e+``,this._cdr.detectChanges()}get step(){return uM(this._hostElement.step,0)}set step(e){this._hostElement.step=e+``,this._cdr.detectChanges()}get disabled(){return cM(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=It(``);_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(e){this._isFocused=e}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new le;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let e=y(nr$1);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,`pointerdown`,this._onPointerDown.bind(this)),e.listen(this._hostElement,`pointermove`,this._onPointerMove.bind(this)),e.listen(this._hostElement,`pointerup`,this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!this._isActive}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let t=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=t,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(e){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(e)},0)}_fixValue(e){let t=e.clientX-this._slider._cachedLeft,i=this._slider._cachedWidth,a=this._slider.step===0?1:this._slider.step,d=Math.floor((this._slider.max-this._slider.min)/a),y=this._slider._isRtl()?1-t/i:t/i,ee=Math.round(y*d)/d*(this._slider.max-this._slider.min)+this._slider.min,le=Math.round(ee/a)*a;if(le===this.value){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=le,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation})}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(e){let t=this._tickMarkOffset,i=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,i),t)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e)}_updateThumbUIByPointerEvent(e,t){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(t)}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e)}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=!0}registerOnTouched(e){this._onTouchedFn=e}setDisabledState(e){this.disabled=e}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static ɵfac=function(t){return new(t||n)};static ɵdir=it({type:n,selectors:[[`input`,`matSliderThumb`,``]],hostAttrs:[`type`,`range`,1,`mdc-slider__input`],hostVars:1,hostBindings:function(t,i){t&1&&xy(`change`,function(){return i._onChange()})(`input`,function(){return i._onInput()})(`blur`,function(){return i._onBlur()})(`focus`,function(){return i._onFocus()}),t&2&&wy(`aria-valuetext`,i._valuetext())},inputs:{value:[2,`value`,`value`,uM]},outputs:{valueChange:`valueChange`,dragStart:`dragStart`,dragEnd:`dragEnd`},exportAs:[`matSliderThumb`],features:[aS([El,{provide:Pr,useExisting:n}])]})}return n})();var $n=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ri({type:n});static ɵinj=Sr$1({imports:[Mt,be]})}return n})();function Tl(n,o){if(n&1){let e=u_();aa(0,`settings-toggle`,6),xy(`ngModelChange`,function(i){Jp(e);return eh(g_().setDarkMode(i))}),aa(1,`div`,7)(2,`icon`,8),Z_(3,`mode_night`),Td(),aa(4,`div`),Z_(5),ES(6,`translate`),Td()()(),gb()}if(n&2)Cy(`ngModel`,g_().dark_mode())(`toggle`,!0),yb(),AC(5),Ky(wS(6,3,`COMMON.DARK_MODE`))}function Nl(n,o){if(n&1){let e=u_();aa(0,`settings-toggle`,6),xy(`ngModelChange`,function(i){Jp(e);return eh(g_().setLocatable(i))}),aa(1,`div`,7)(2,`icon`,8),Z_(3,`emergency_share`),Td(),aa(4,`div`),Z_(5),ES(6,`translate`),Td()()(),gb()}if(n&2)Cy(`ngModel`,g_().locatable())(`toggle`,!0),yb(),AC(5),Ky(wS(6,3,`COMMON.LOCATABLE`))}function Rl(n,o){if(n&1){let e=u_();aa(0,`div`,9),Z_(1),ES(2,`translate`),Td(),aa(3,`div`,10)(4,`span`,11),Z_(5,`A`),Td(),aa(6,`mat-slider`,12)(7,`input`,13),xy(`ngModelChange`,function(i){Jp(e);return eh(g_().applySetting(`font_size`,i))}),Td(),gb(),Td(),aa(8,`span`,2),Z_(9,`A`),Td(),aa(10,`span`,14),Z_(11),Td()()}if(n&2){let e=g_();AC(),Ad(` `,wS(2,6,`COMMON.TEXT_SIZE_MSG`),` `),AC(5),Cy(`min`,10)(`max`,24)(`step`,2),AC(),Cy(`ngModel`,e.font_size()),yb(),AC(4),Ad(` `,e.font_size(),`px `)}}var Br=(()=>{class n extends y$1{constructor(){super(...arguments),this._data=y(ie$1),this._settings=y(se),this.accessible=It(!1),this.locatable=It(!1),this.can_locate=Ea(`allow_locatability_option`,!0),this._allow_dark_mode=this._settings.signal(`allow_dark_mode`,!1),this._font_size=this._settings.signal(`font_size`,16,!0),this._accessible=this._settings.signal(`accessible`,!1,!0),this._theme=this._settings.theme_signal,this.dark_mode=Fe(()=>this._theme()===`dark`),this.can_change_dark_mode=Fe(()=>!!this._allow_dark_mode()),this.font_size=this._font_size,this.applySetting=(e,t)=>this.timeout(`apply_setting`,()=>{this._settings.saveUserSetting(e,t),e===`accessible`&&this.accessible.set(t)},500),this.close=()=>this._data?.close(),this.setLocatable=e=>{this._settings.updateLocatable(e),this.locatable.set(e)}}async ngOnInit(){this.accessible.set(!!this._accessible()),this.subscription(`user`,er$1.subscribe(e=>{this.locatable.set(e.locatable)}))}setDarkMode(e){let t=this._theme();e&&t!==`dark`?this._settings.setTheme(`dark`):!e&&t===`dark`&&this._settings.setTheme(`light`)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Og(n)))(i||n)}})()}static{this.ɵcmp=oT({type:n,selectors:[[`accessibility-tooltip`]],features:[uy],decls:18,vars:11,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-[20rem]`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`,3,`click`],[1,`text-2xl`],[1,``],[1,`space-y-2`,`p-2`],[3,`ngModel`,`toggle`],[3,`ngModelChange`,`ngModel`,`toggle`],[1,`flex`,`items-center`,`space-x-2`],[1,`-ml-2`,`text-xl`],[1,`bg-base-200`,`px-8`,`py-4`,`text-center`],[1,`flex`,`items-center`,`space-x-4`,`px-4`],[1,`text-sm`],[1,`w-1/2`,`flex-1`,`text-[16px]`,3,`min`,`max`,`step`],[`matSliderThumb`,``,1,`text-[16px]`,3,`ngModelChange`,`ngModel`],[1,`bg-base-300`,`my-2`,`rounded-sm`,`px-2`,`py-1`,`text-base`,`text-white`]],template:function(t,i){t&1&&(aa(0,`div`,0)(1,`div`,1),xy(`click`,function(){return i.close()}),aa(2,`icon`,2),Z_(3,`arrow_back`),Td(),aa(4,`div`,3),Z_(5),ES(6,`translate`),Td()(),aa(7,`div`,4),XT(8,Tl,7,5,`settings-toggle`,5),XT(9,Nl,7,5,`settings-toggle`,5),aa(10,`settings-toggle`,6),xy(`ngModelChange`,function(d){return i.applySetting(`accessible`,d)}),aa(11,`div`,7)(12,`icon`,8),Z_(13,`playlist_add`),Td(),aa(14,`div`),Z_(15),ES(16,`translate`),Td()()(),gb(),Td(),XT(17,Rl,12,8),Td()),t&2&&(AC(5),Ad(` `,wS(6,7,`COMMON.CONTROLS_ACCESSIBILITY`),` `),AC(3),JT(i.can_change_dark_mode()?8:-1),AC(),JT(i.can_locate()?9:-1),AC(),Cy(`ngModel`,i.accessible())(`toggle`,!0),yb(),AC(5),Ky(wS(16,9,`COMMON.TEXT_SIZE`)),AC(2),JT(i.accessible()?17:-1))},dependencies:[Mt,yt$1,$n,Qn,vi,rr,_d$2,ng,ko$1,Jp$1,Ac$1,f],encapsulation:2})}}return n})();function Dl(n,o){if(n&1){let e=u_();aa(0,`mat-radio-button`,8),xy(`click`,function(){let i=Jp(e).$implicit;return eh(g_().setBuilding(i))}),Z_(1),Td()}if(n&2){let e=o.$implicit;Cy(`value`,e.id),AC(),Ad(` `,e.display_name||e.name,` `)}}var Ur=(()=>{class n{constructor(){this._data=y(ie$1),this._org=y(gi$1),this.buildings=this._org.active_buildings,this.building=this._org.active_building,this.setBuilding=e=>{this._org.setBuilding(e,!0),this._data?.close()},this.close=()=>this._data?.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=oT({type:n,selectors:[[`building-select`]],decls:16,vars:8,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-74`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`,3,`click`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`],[1,`text-2xl`],[1,`leading-tight`],[1,`text-xs`,`opacity-30`],[1,`px-4`,`py-2`,`text-xs`,`opacity-60`],[1,`flex`,`flex-col`,`space-y-2`,`px-2`,3,`ngModel`],[3,`value`],[3,`click`,`value`]],template:function(t,i){t&1&&(aa(0,`div`,0),xy(`click`,function(){return i.close()}),aa(1,`div`,1)(2,`icon`,2),Z_(3,`arrow_back`),Td(),aa(4,`div`,3)(5,`div`),Z_(6),Td(),aa(7,`div`,4),Z_(8),ES(9,`translate`),Td()()(),aa(10,`div`,5),Z_(11),ES(12,`translate`),Td(),aa(13,`mat-radio-group`,6),n_(14,Dl,2,2,`mat-radio-button`,7,t_),Td(),gb(),Td()),t&2&&(AC(6),Ad(` `,i.building()?.display_name||i.building()?.name,` `),AC(2),Ad(` `,wS(9,4,`RESOURCE.BUILDING`),` `),AC(3),Ad(` `,wS(12,6,`COMMON.BUILDING_SELECT`),` `),AC(2),Cy(`ngModel`,i.building()?.id),yb(),AC(),r_(i.buildings()))},dependencies:[qn,gi,ei,_d$2,Mt,yt$1,ng,Jp$1,Ac$1,f],encapsulation:2})}}return n})();function Ol(n,o){n&1&&(aa(0,`div`,3),Z_(1),ES(2,`translate`),Td()),n&2&&(AC(),Ad(` `,wS(2,1,`COMMON.DESK_HEIGHT_NOT_SET`),` `))}function Al(n,o){if(n&1){let e=u_();aa(0,`button`,13),xy(`click`,function(){Jp(e);return eh(g_().onClose())}),Z_(1),ES(2,`translate`),Td()}n&2&&(AC(),Ad(` `,wS(2,1,`COMMON.SAVE`),` `))}var zr=(()=>{class n{constructor(){this._settings=y(se),this.show_close=B2(!1),this.close=P2(),this.not_set=It(!1),this.desk_sitting_height=It(71),this.desk_standing_height=It(101)}ngOnInit(){this.not_set.set(!this._settings.get(`desk_sitting_height`)&&!this._settings.get(`desk_standing_height`)),this.desk_sitting_height.set(this._settings.get(`desk_sitting_height`)||71),this.desk_standing_height.set(this._settings.get(`desk_standing_height`)||101)}onClose(){this.saveSetting(`desk_sitting_height`,this.desk_sitting_height()),this.saveSetting(`desk_standing_height`,this.desk_standing_height()),this.close.emit()}formatLabel(e){return`${e.toFixed(1)}cm`}saveSetting(e,t){this._settings.saveUserSetting(e,t)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=oT({type:n,selectors:[[`desk-height-presets`]],inputs:{show_close:[1,`show_close`]},outputs:{show_close:`show_closeChange`,close:`close`},decls:29,vars:23,consts:[[1,`bg-base-100`,`relative`,`w-[20rem]`,`rounded-sm`,`p-4`,`shadow-sm`],[1,`mb-2`,`text-lg`],[1,`mb-4`,`text-xs`,`opacity-60`],[1,`bg-warning`,`text-warning-content`,`-mx-2`,`mb-4`,`rounded-sm`,`p-2`,`text-xs`],[1,`mt-2`,`flex`,`flex-col`],[1,`flex`,`items-center`,`space-x-2`],[`min`,`60`,`max`,`80`,`step`,`0.5`,`discrete`,``,1,`flex-1`,3,`displayWith`],[`matSliderThumb`,``,3,`ngModelChange`,`ngModel`],[1,`w-12`,`text-right`,`text-sm`],[1,`mr-2`,`flex`,`items-center`,`space-x-2`],[`min`,`90`,`max`,`120`,`step`,`0.5`,`discrete`,``,1,`flex-1`,3,`displayWith`],[1,`mr-2`,`w-12`,`text-right`,`text-sm`],[`btn`,``,`matRipple`,``,1,`mt-2`,`w-full`],[`btn`,``,`matRipple`,``,1,`mt-2`,`w-full`,3,`click`]],template:function(t,i){t&1&&(aa(0,`div`,0)(1,`div`,1),Z_(2),ES(3,`translate`),Td(),aa(4,`div`,2),Z_(5),ES(6,`translate`),Td(),XT(7,Ol,3,3,`div`,3),aa(8,`div`,2),Z_(9),ES(10,`translate`),Td(),aa(11,`div`,4)(12,`label`),Z_(13),ES(14,`translate`),Td(),aa(15,`div`,5)(16,`mat-slider`,6)(17,`input`,7),xy(`ngModelChange`,function(d){return i.desk_sitting_height.set(d),i.saveSetting(`desk_sitting_height`,d)}),Td(),gb(),Td(),aa(18,`div`,8),Z_(19),Td()(),aa(20,`label`),Z_(21),ES(22,`translate`),Td(),aa(23,`div`,9)(24,`mat-slider`,10)(25,`input`,7),xy(`ngModelChange`,function(d){return i.desk_standing_height.set(d),i.saveSetting(`desk_standing_height`,d)}),Td(),gb(),Td(),aa(26,`div`,11),Z_(27),Td()()(),XT(28,Al,3,3,`button`,12),Td()),t&2&&(AC(2),Ad(` `,wS(3,13,`COMMON.DESK_HEIGHT_TITLE`),` `),AC(3),Ad(` `,wS(6,15,`COMMON.DESK_HEIGHT_MSG`),` `),AC(2),JT(i.not_set()&&i.show_close()?7:-1),AC(2),Ad(` `,wS(10,17,`COMMON.DESK_HEIGHT_INFO`),` `),AC(4),Ky(wS(14,19,`COMMON.DESK_HEIGHT_SITTING`)),AC(3),Cy(`displayWith`,i.formatLabel),AC(),Cy(`ngModel`,i.desk_sitting_height()),yb(),AC(2),Ad(` `,i.desk_sitting_height().toFixed(1),`cm `),AC(2),Ky(wS(22,21,`COMMON.DESK_HEIGHT_STANDING`)),AC(3),Cy(`displayWith`,i.formatLabel),AC(),Cy(`ngModel`,i.desk_standing_height()),yb(),AC(2),Ad(` `,i.desk_standing_height().toFixed(1),`cm `),AC(),JT(i.show_close()?28:-1))},dependencies:[Mt,yt$1,$n,Qn,vi,ng,ko$1,Jp$1,Ac$1,f],encapsulation:2})}}return n})();function Fl(n,o){if(n&1&&(aa(0,`a`,4)(1,`div`,5),by(2,`icon`,6),aa(3,`div`),Z_(4),Td()()()),n&2){let e=o.$implicit;Cy(`href`,e.link,am),AC(2),Cy(`icon`,e.icon),AC(2),Ky(e.name)}}var Gr=(()=>{class n{constructor(){this._data=y(ie$1),this._settings=y(se),this._tiles=this._settings.signal(`help`,[]),this.close=()=>{this._data?.close()}}get tiles(){return this._tiles()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=oT({type:n,selectors:[[`help-tooltip`]],decls:9,vars:3,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`w-74`,`flex-col`,`rounded-sm`,`shadow-sm`,3,`click`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-4`],[1,`text-2xl`],[1,``],[`matRipple`,``,`target`,`_blank`,`ref`,`noreferer noopener`,1,`w-full`,`p-2`,`text-left`,3,`href`],[1,`hover:bg-base-200`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-sm`,`p-2`],[1,`text-xl`,3,`icon`]],template:function(t,i){t&1&&(aa(0,`div`,0),xy(`click`,function(){return i.close()}),aa(1,`div`,1)(2,`icon`,2),Z_(3,`arrow_back`),Td(),aa(4,`div`,3),Z_(5),ES(6,`translate`),Td()(),n_(7,Fl,5,3,`a`,4,t_),Td()),t&2&&(AC(5),Ky(wS(6,1,`COMMON.CONTROLS_HELP`)),AC(2),r_(i.tiles))},dependencies:[Mt,yt$1,_d$2,f],encapsulation:2})}}return n})();var Pl=(n,o)=>o.id;function Vl(n,o){if(n&1&&(aa(0,`div`,8),Z_(1),Td()),n&2){let e=g_().$implicit;AC(),Ad(` `,e.local,` `)}}function Ll(n,o){if(n&1){let e=u_();aa(0,`button`,6),xy(`click`,function(){let i=Jp(e).$implicit;return eh(g_().setLocale(i.id))}),aa(1,`div`,7),ES(2,`translate`),aa(3,`div`),Z_(4),ES(5,`translate`),Td(),XT(6,Vl,2,1,`div`,8),ES(7,`translate`),Td()()}if(n&2){let e=o.$implicit,t=g_();AC(),Uy(`mt-2`,wS(2,8,e.name)!==e.local)(`border`,t.active_locale===e.id)(`border-info`,t.active_locale===e.id),AC(3),Ky(wS(5,10,e.name)),AC(2),JT(wS(7,12,e.name)!==e.local?6:-1)}}var Hr=(()=>{class n{constructor(){this._data=y(ie$1),this._settings=y(se),this._locale=y(pm),this._locales=this._settings.signal(`locales`,[]),this.setLocale=e=>{this._locale.setLocale(e),localStorage.setItem(`PLACEOS.locale`,e),setTimeout(()=>location.reload(),300)},this.close=()=>this._data?.close()}get active_locale(){return this._locale.locale}get locales(){return this._locales()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=oT({type:n,selectors:[[`language-select`]],decls:12,vars:6,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-74`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`,3,`click`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`],[1,`text-2xl`],[1,``],[1,`px-4`,`py-2`,`text-xs`,`opacity-60`],[`matRipple`,``,1,`flex`,`h-14`,`items-center`,`justify-between`,`space-x-8`,`px-2`,`text-left`],[`matRipple`,``,1,`flex`,`h-14`,`items-center`,`justify-between`,`space-x-8`,`px-2`,`text-left`,3,`click`],[1,`hover:bg-base-200`,`flex`,`flex-1`,`items-center`,`justify-between`,`rounded-sm`,`p-2`,`leading-tight`],[1,`bg-base-300`,`rounded-sm`,`px-2`,`py-1`,`text-xs`,`opacity-60`]],template:function(t,i){t&1&&(aa(0,`div`,0),xy(`click`,function(){return i.close()}),aa(1,`div`,1)(2,`icon`,2),Z_(3,`arrow_back`),Td(),aa(4,`div`,3),Z_(5),ES(6,`translate`),Td()(),aa(7,`div`,4),Z_(8),ES(9,`translate`),Td(),n_(10,Ll,8,14,`button`,5,Pl),Td()),t&2&&(AC(5),Ky(wS(6,2,`COMMON.LANGUAGE`)),AC(3),Ad(` `,wS(9,4,`COMMON.LANGUAGE_SELECT`),` `),AC(2),r_(i.locales))},dependencies:[Mt,yt$1,_d$2,f],encapsulation:2})}}return n})();function Bl(n,o){if(n&1){let e=u_();aa(0,`mat-radio-button`,8),xy(`click`,function(){let i=Jp(e).$implicit;return eh(g_().setRegion(i))}),Z_(1),Td()}if(n&2){let e=o.$implicit;Cy(`value`,e.id),AC(),Ad(` `,e.display_name||e.name,` `)}}var Wr=(()=>{class n{constructor(){this._data=y(ie$1),this._org=y(gi$1),this.regions=this._org.region_list,this.region=this._org.active_region,this.setRegion=async e=>{await this._org.setRegion(e),this._org.setBuilding(this._org.building,!0),this._data?.close()},this.close=()=>this._data?.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=oT({type:n,selectors:[[`region-select`]],decls:16,vars:8,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-74`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`,3,`click`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`],[1,`text-2xl`],[1,`leading-tight`],[1,`text-xs`,`opacity-30`],[1,`px-4`,`py-2`,`text-xs`,`opacity-60`],[1,`flex`,`flex-col`,`space-y-2`,`px-2`,3,`ngModel`],[3,`value`],[3,`click`,`value`]],template:function(t,i){t&1&&(aa(0,`div`,0),xy(`click`,function(){return i.close()}),aa(1,`div`,1)(2,`icon`,2),Z_(3,`arrow_back`),Td(),aa(4,`div`,3)(5,`div`),Z_(6),Td(),aa(7,`div`,4),Z_(8),ES(9,`translate`),Td()()(),aa(10,`div`,5),Z_(11),ES(12,`translate`),Td(),aa(13,`mat-radio-group`,6),n_(14,Bl,2,2,`mat-radio-button`,7,t_),Td(),gb(),Td()),t&2&&(AC(6),Ad(` `,i.region()?.display_name||i.region()?.name,` `),AC(2),Ad(` `,wS(9,4,`RESOURCE.REGION`),` `),AC(3),Ad(` `,wS(12,6,`COMMON.REGION_SELECT`),` `),AC(2),Cy(`ngModel`,i.region()?.id),yb(),AC(),r_(i.regions()))},dependencies:[qn,gi,ei,_d$2,Mt,yt$1,ng,Jp$1,Ac$1,f],encapsulation:2})}}return n})();var qr=(()=>{class n{constructor(){this._settings=y(se),this._tooltip=y(ie$1,{optional:!0}),this.plate_number=It(``)}async ngOnInit(){await Vp(this._settings.initialised),this.plate_number.set(this._settings.get(`plate_number`)||``)}save(){this.plate_number()&&this._settings.saveUserSetting(`plate_number`,this.plate_number()),op(Yt$2(`COMMON.PARKING_SETTINGS_SAVE`)),this._tooltip?.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=oT({type:n,selectors:[[`user-parking-tooltip`]],decls:14,vars:13,consts:[[1,`border-base-300`,`bg-base-100`,`min-w-[20rem]`,`space-y-2`,`rounded-md`,`border`,`p-2`],[1,`border-base-300`,`border-b`,`text-lg`,`font-medium`],[1,`flex`,`flex-col`],[`for`,`plate-number`],[`appearance`,`outline`,1,`no-subscript`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`]],template:function(t,i){t&1&&(aa(0,`div`,0)(1,`h3`,1),Z_(2),ES(3,`translate`),Td(),aa(4,`div`,2)(5,`label`,3),Z_(6),ES(7,`translate`),Td(),aa(8,`mat-form-field`,4)(9,`input`,5),ES(10,`translate`),nv(`ngModelChange`,function(d){return J_(i.plate_number,d)||(i.plate_number=d),d}),Td(),gb(),Td()(),aa(11,`button`,6),xy(`click`,function(){return i.save()}),Z_(12),ES(13,`translate`),Td()()),t&2&&(AC(2),Ad(` `,wS(3,5,`COMMON.CONTROLS_PARKING`),` `),AC(4),Ky(wS(7,7,`BOOKINGS.PARKING_PLATE_NUMBER`)),AC(3),tv(`ngModel`,i.plate_number),Cy(`placeholder`,wS(10,9,`BOOKINGS.PARKING_PLATE_NUMBER`)),yb(),AC(3),Ad(` `,wS(13,11,`COMMON.SAVE`),` `))},dependencies:[de$1,rt,rn$1,on$1,ng,ko$1,Jp$1,Ac$1,f],encapsulation:2})}}return n})();function Ul(n,o){if(n&1){let e=u_();aa(0,`button`,17),xy(`click`,function(){let i=Jp(e).$implicit,a=g_().$index;return eh(g_(2).setLocation(a,i.id))}),aa(1,`div`,18)(2,`icon`,11),Z_(3),Td(),aa(4,`div`,19),Z_(5),ES(6,`translate`),Td()()()}if(n&2){let e=o.$implicit;AC(3),Ky(e.icon),AC(2),Ad(` `,wS(6,2,e.name),` `)}}function zl(n,o){n&1&&by(0,`div`,16)}function Gl(n,o){if(n&1&&(aa(0,`div`,9)(1,`div`,10)(2,`icon`,11),Z_(3),Td()(),aa(4,`div`,12)(5,`button`,13)(6,`div`),Z_(7),Td(),aa(8,`icon`),Z_(9,`expand_more`),Td()(),aa(10,`mat-menu`,null,0),n_(12,Ul,7,4,`button`,14,t_),Td(),aa(14,`div`,15),Z_(15),ES(16,`date`),ES(17,`date`),Td()(),XT(18,zl,1,0,`div`,16),Td()),n&2){let e=o.$implicit,t=o.$index,i=C_(11),a=g_(2);Uy(`opacity-30`,a.now>a.timeFrom(e.end_time)),AC(),Uy(`bg-base-200`,a.now<a.timeFrom(e.start_time)||a.now>a.timeFrom(e.end_time))(`bg-info`,a.now>=a.timeFrom(e.start_time)&&a.now<=a.timeFrom(e.end_time))(`text-info-content`,a.now>=a.timeFrom(e.start_time)&&a.now<=a.timeFrom(e.end_time)),AC(2),Ky(a.location_icon(a.timeFrom(e.start_time))),AC(2),Cy(`matMenuTriggerFor`,i),AC(2),Ad(` `,a.location(a.timeFrom(e.start_time)),` `),AC(5),r_(a.locations()),AC(3),Xy(` `,CS(16,14,a.timeFrom(e.start_time),`shortTime`),` – `,CS(17,17,a.timeFrom(e.end_time),`shortTime`),` `),AC(3),JT(t>0?18:-1)}}function Hl(n,o){if(n&1&&(aa(0,`div`,6),n_(1,Gl,19,20,`div`,8,t_),Td()),n&2){let e=g_();AC(),r_(e.active_preference?.blocks)}}function Wl(n,o){n&1&&(aa(0,`div`,7)(1,`icon`,20),Z_(2,`event_busy`),Td(),aa(3,`p`,21),Z_(4),ES(5,`translate`),Td(),aa(6,`p`,21),Z_(7),ES(8,`translate`),Td()()),n&2&&(AC(4),Ad(` `,wS(5,2,`COMMON.WORK_LOCATION_EMPTY`),` `),AC(3),Ad(` `,wS(8,4,`COMMON.WORK_LOCATION_EDIT_INFO`),` `))}var jr=(()=>{class n{constructor(){this._dialog=y(ee),this.locations=It([]),this.settings=It(void 0),this.overrides=It({})}get active_preference(){let e=Eh(new Date,`yyyy-MM-dd`);return this.overrides()[e]?this.overrides()[e]:this.settings()?.find(t=>t.day_of_week===new Date().getDay())}get now(){return Er$1(Date.now()).getTime()}ngOnInit(){let e=$();this.settings.set(e.work_preferences),this.overrides.set(e.work_overrides),this.locations.set([{id:`wfo`,name:Yt$2(`COMMON.WORK_OFFICE`),icon:`business`},{id:`wfh`,name:Yt$2(`COMMON.WORK_HOME`),icon:`home`},{id:`aol`,name:Yt$2(`COMMON.WORK_LEAVE`),icon:`event_busy`},{id:`sick`,name:Yt$2(`COMMON.WORK_SICK`),icon:`sick`}])}location_icon(e){return $().location_icon(e+60*1e3)}location(e){return $().location_name_time(e+60*1e3)}timeFrom(e){return Er$1(vt(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}editSettings(){this._dialog.open(Kn)}async setLocation(e,t){let i=$(),a=this.active_preference,d=Eh(Date.now(),`yyyy-MM-dd`),y=m(l({},i.work_overrides),{[d]:m(l({},a),{blocks:[...a.blocks.slice(0,e),m(l({},a.blocks[e]),{location:t}),...a.blocks.slice(e+1)]})});for(let N in y){let ee=ir(N,`yyyy-MM-dd`,new Date);(!y[N].blocks.length||L(ee,na(nt$1(Date.now()),-1)))&&delete y[N]}this.overrides.set(y),await uc$1(i.id,m(l({},i),{work_overrides:y})),rr$1()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=oT({type:n,selectors:[[`work-location-tooltip`]],decls:14,vars:11,consts:[[`work_menu`,`matMenu`],[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`w-74`,`flex-col`,`overflow-hidden`,`rounded-sm`,`shadow-sm`],[1,`flex`,`items-center`,`justify-between`,`px-2`],[1,`px-2`,`py-4`,`font-medium`],[`icon`,``,`matRipple`,``,`matTooltipPosition`,`left`,1,`hover:bg-base-200`,3,`click`,`matTooltip`],[1,`px-4`,`text-sm`,`font-medium`],[1,`pb-2`],[1,`flex`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-2`,`p-8`,`opacity-30`],[1,`relative`,`flex`,`items-center`,`px-4`,`py-2`,3,`opacity-30`],[1,`relative`,`flex`,`items-center`,`px-4`,`py-2`],[1,`bg-base-200`,`z-20`,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`rounded-full`],[1,`text-2xl`],[1,`ml-2`,`flex-1`],[`matRipple`,``,1,`hover:bg-base-200`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`px-2`,`py-1`,`font-medium`,3,`matMenuTriggerFor`],[`mat-menu-item`,``],[1,`px-2`,`text-xs`,`opacity-60`],[1,`border-base-200`,`absolute`,`-top-2`,`left-7`,`h-4`,`w-0`,`-translate-x-px`,`border-l-2`,`border-dashed`],[`mat-menu-item`,``,3,`click`],[1,`flex`,`items-center`,`space-x-2`],[1,`pr-8`],[1,`text-6xl`],[1,`text-center`,`text-sm`]],template:function(t,i){t&1&&(aa(0,`div`,1)(1,`div`,2)(2,`h3`,3),Z_(3),ES(4,`translate`),Td(),aa(5,`button`,4),ES(6,`translate`),xy(`click`,function(){return i.editSettings()}),aa(7,`icon`),Z_(8,`edit_note`),Td()()(),aa(9,`h3`,5),Z_(10),ES(11,`date`),Td(),XT(12,Hl,3,0,`div`,6)(13,Wl,9,6,`div`,7),Td()),t&2&&(AC(3),Ad(` `,wS(4,4,`COMMON.WORK_LOCATION`),` `),AC(2),Cy(`matTooltip`,wS(6,6,`COMMON.WORK_LOCATION_EDIT`)),AC(5),Ad(` `,CS(11,8,i.now,`fullDate`),` `),AC(2),JT(i.active_preference?.blocks?.length?12:13))},dependencies:[cD,Ht$2,Lt,I,G,Bt,Mt,yt$1,Yt$3,mt$1,_d$2,eN,f],encapsulation:2})}}return n})();function ql(n,o){if(n&1){let e=u_();aa(0,`button`,28),xy(`click`,function(){let i=Jp(e).$implicit;return eh(g_(2).saveSetting(`work_location`,i.id))}),aa(1,`div`,29)(2,`icon`,23),Z_(3),Td(),aa(4,`div`,30),Z_(5),ES(6,`translate`),Td()()()}if(n&2){let e=o.$implicit;AC(3),Ky(e.icon),AC(2),Ad(` `,wS(6,2,e.name),` `)}}function jl(n,o){if(n&1&&(aa(0,`div`,7)(1,`h3`,19),Z_(2,` Today's Work Location `),Td(),aa(3,`div`,20)(4,`div`,21)(5,`div`,22)(6,`icon`,23),Z_(7),Td()(),aa(8,`div`,24)(9,`button`,25)(10,`div`),Z_(11),Td(),aa(12,`icon`),Z_(13,`expand_more`),Td()(),aa(14,`mat-menu`,null,1),n_(16,ql,7,4,`button`,26,t_),Td(),aa(18,`div`,27),Z_(19),ES(20,`date`),ES(21,`date`),Td()()()()()),n&2){let e=C_(15),t=g_();AC(7),Ky(t.location_icon(t.timeFrom(t.active_block().start_time))),AC(2),Cy(`matMenuTriggerFor`,e),AC(2),Ad(` `,t.location(t.timeFrom(t.active_block().start_time)),` `),AC(5),r_(t.pref_locations()),AC(3),Xy(` `,CS(20,5,t.timeFrom(t.active_block().start_time),`shortTime`),` – `,CS(21,8,t.timeFrom(t.active_block().end_time),`shortTime`),` `)}}function Kl(n,o){if(n&1&&(aa(0,`div`,8)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Z_(5,`layers`),Td()(),aa(6,`div`,33),Z_(7),Td(),aa(8,`icon`,34),Z_(9,` chevron_right `),Td()()()()),n&2){let e=g_();Cy(`content`,e.region_select),AC(7),Ad(` `,e.region()?.display_name||e.region()?.name,` `)}}function Ql(n,o){if(n&1&&(aa(0,`div`,8)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Z_(5,`business`),Td()(),aa(6,`div`,33),Z_(7),Td(),aa(8,`icon`,34),Z_(9,` chevron_right `),Td()()()()),n&2){let e=g_();Cy(`content`,e.building_select),AC(7),Ad(` `,e.building()?.display_name||e.building()?.name,` `)}}function $l(n,o){if(n&1&&(aa(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Z_(5,`help`),Td()(),aa(6,`div`,35),Z_(7),ES(8,`translate`),Td(),aa(9,`icon`,34),Z_(10,` chevron_right `),Td()()()()),n&2)Cy(`content`,g_().help_tooltip),AC(7),Ad(` `,wS(8,2,`COMMON.CONTROLS_HELP`),` `)}function Xl(n,o){if(n&1&&(aa(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Z_(5,`share_location`),Td()(),aa(6,`div`,35),Z_(7),ES(8,`translate`),Td(),aa(9,`icon`,34),Z_(10,`chevron_right`),Td()()()()),n&2)Cy(`content`,g_().work_location_tooltip),AC(7),Ad(` `,wS(8,2,`COMMON.WORK_LOCATION`),` `)}function Yl(n,o){if(n&1&&(aa(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Z_(5,`mode_night`),Td()(),aa(6,`div`,35),Z_(7),ES(8,`translate`),Td(),aa(9,`icon`,34),Z_(10,`chevron_right`),Td()()()()),n&2){let e=g_();Uy(`border-b!`,!e.locales().length||!e.desk_height()),Cy(`content`,e.accessibility_tooltip),AC(7),Ad(` `,wS(8,4,`COMMON.CONTROLS_ACCESSIBILITY`),` `)}}function Zl(n,o){if(n&1&&(aa(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Z_(5,`desk`),Td()(),aa(6,`div`,35),Z_(7),ES(8,`translate`),Td(),aa(9,`icon`,34),Z_(10,` chevron_right `),Td()()()()),n&2){let e=g_(),t=C_(15);Uy(`border-b!`,!e.locales().length),Cy(`content`,t),AC(7),Ad(` `,wS(8,4,`COMMON.CONTROLS_DESKS`),` `)}}function Jl(n,o){n&1&&by(0,`desk-height-presets`)}function ed(n,o){if(n&1&&(aa(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Z_(5,`parking_sign`),Td()(),aa(6,`div`,35),Z_(7),ES(8,`translate`),Td(),aa(9,`icon`,34),Z_(10,` chevron_right `),Td()()()()),n&2){let e=g_();Uy(`border-b!`,!e.locales().length),Cy(`content`,e.parking_tooltip),AC(7),Ad(` `,wS(8,4,`COMMON.CONTROLS_PARKING`),` `)}}function td(n,o){n&1&&(aa(0,`div`,37),Z_(1,` Language `),Td())}function id(n,o){if(n&1&&(aa(0,`div`,11)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Z_(5,`language`),Td()(),aa(6,`div`,36)(7,`div`)(8,`div`),Z_(9),ES(10,`translate`),Td(),XT(11,td,2,0,`div`,37),ES(12,`translate`),Td(),aa(13,`div`,38),ES(14,`translate`),Z_(15),ES(16,`translate`),Td()(),aa(17,`icon`,34),Z_(18,` chevron_right `),Td()()()()),n&2){let e=g_();Cy(`content`,e.language_tooltip),AC(9),Ad(` `,wS(10,5,`COMMON.LANGUAGE`),` `),AC(2),JT(wS(12,7,`COMMON.LANGUAGE`)!==`Language`?11:-1),AC(2),Cy(`matTooltip`,wS(14,9,e.active_locale)),AC(2),Ad(` `,wS(16,11,e.active_locale),` `)}}function nd(n,o){if(n&1){let e=u_();aa(0,`button`,39),xy(`click`,function(){Jp(e);return eh(g_().newSupportTicket())}),aa(1,`div`,31)(2,`div`,32)(3,`icon`),Z_(4,`support_agent`),Td()(),aa(5,`div`,35),Z_(6),ES(7,`translate`),Td()()()}n&2&&(AC(6),Ad(` `,wS(7,1,`COMMON.CONTROLS_SUPPORT`),` `))}function od(n,o){if(n&1){let e=u_();aa(0,`button`,40),xy(`click`,function(){Jp(e);return eh(g_().reloadPage())}),Z_(1),ES(2,`translate`),Td()}n&2&&(AC(),Ad(` `,wS(2,1,`COMMON.CONTROLS_NEW_VERSION`),` `))}function ad(n,o){if(n&1){let e=u_();aa(0,`button`,41),xy(`click`,function(){Jp(e);return eh(g_().viewChangelog())}),Z_(1),Td()}if(n&2){let e=g_();Cy(`disabled`,!e.changelog_available()),AC(),Ad(` `,e.version.hash,` `)}}function rd(n,o){if(n&1&&(aa(0,`span`),Z_(1),Td()),n&2){let e=g_();AC(),Ky(e.version.hash)}}var Kr=(()=>{class n{constructor(){this._settings=y(se),this._org=y(gi$1),this._dialog=y(ee),this._changelog=y(Nr),this._locale=y(pm),this.building=this._org.active_building,this.region=this._org.active_region,this.regions=this._org.region_list,this.sidebar=j2(!1),this.accessibility=Ea(`allow_accessibility_changes`,!0),this.show_changelog=Ea(`show_changelog`,!0),this.changelog_available=this._changelog.available,this.viewChangelog=()=>this._changelog.view(),this.region_select=Wr,this.building_select=Ur,this.help_tooltip=Gr,this.accessibility_tooltip=Br,this.language_tooltip=Hr,this.work_location_tooltip=jr,this.parking_tooltip=qr,this.features=Ea(`features`,[]),this._locales=this._settings.signal(`locales`,[]),this._desk_height=this._settings.signal(`desks.height_enabled`,!1),this._use_region=this._settings.signal(`use_region`,!1),this._disable_building_select=this._settings.signal(`disable_building_select`,!1),this.pref_locations=It([]),this.work_prefs=It([]),this.overrides=It({}),this.active_block=Fe(()=>{let e=Eh(new Date,`yyyy-MM-dd`),t=new Date().getDay();return(this.overrides()[e]?this.overrides()[e]:this.work_prefs().find(a=>a.day_of_week===t))?.blocks?.find(a=>this.now>=this.timeFrom(a.start_time)&&this.now<this.timeFrom(a.end_time))}),this.active_index=Fe(()=>{let e=Eh(new Date,`yyyy-MM-dd`),t=new Date().getDay();return(this.overrides()[e]?this.overrides()[e]:this.work_prefs().find(a=>a.day_of_week===t))?.blocks?.findIndex(a=>this.now>=this.timeFrom(a.start_time)&&this.now<this.timeFrom(a.end_time))}),this.locales=this._locales,this.desk_height=this._desk_height,this.use_region=this._use_region,this.disable_building_select=this._disable_building_select}location_icon(e){return $().location_icon(e+60*1e3)}location(e){return $().location_name_time(e+60*1e3)}timeFrom(e){return Er$1(vt(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}get user(){return $()}get groups(){return this.user?.groups?.join(`
`)||``}get version(){return me}get active_locale(){let e=this.locales(),t=this._locale.locale;for(let i of e)if(i.id===t)return i.name;return`LANGUAGE.ENGLISH`}get now(){return Er$1(Date.now()).getTime()}get has_new_version(){return qr$1()}ngOnInit(){let e=$();this.work_prefs.set(e?.work_preferences||[]),this.overrides.set(e?.work_overrides||{}),this.pref_locations.set([{id:`wfo`,name:Yt$2(`COMMON.WORK_OFFICE`),icon:`business`},{id:`wfh`,name:Yt$2(`COMMON.WORK_HOME`),icon:`home`},{id:`aol`,name:Yt$2(`COMMON.WORK_LEAVE`),icon:`event_busy`},{id:`sick`,name:Yt$2(`COMMON.WORK_SICK`),icon:`sick`}])}logout(){zu()}reloadPage(){location.reload()}newSupportTicket(){this._settings.get(`app.external_support_url`)?window.open(this._settings.get(`app.external_support_url`),`_blank`):this._dialog.open(Dr)}openWfhModal(){this._dialog.open(Kn)}saveSetting(e,t){this._settings.saveUserSetting(e,t)}formatLabel(e){return`${e.toFixed(1)}cm`}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=oT({type:n,selectors:[[`user-controls`]],inputs:{sidebar:[1,`sidebar`]},decls:35,vars:32,consts:[[`desk_height_tooltip`,``],[`work_menu`,`matMenu`],[1,`divide-base-200`,`border-base-300`,`bg-base-100`,`relative`,`mt-1`,`flex`,`flex-col`,`divide-y`,`overflow-auto`,`rounded-sm`,`border`,`shadow-sm`],[`avatar`,``,1,`flex`,`w-full`,`min-w-72`,`flex-col`,`items-center`,`p-2`],[1,`text-2xl`,3,`user`,`matTooltip`],[1,``],[1,`truncate`,`text-xs`,`opacity-60`],[1,`border-base-200`,`w-full`,`rounded-sm`,`border-y`,`py-2`],[`customTooltip`,``,1,`relative`,3,`content`],[`customTooltip`,``,3,`content`],[`customTooltip`,``,3,`content`,`border-b!`],[`customTooltip`,``,1,`border-b!`,3,`content`],[`btn`,``,`matRipple`,``,1,`clear`,`h-14`,`w-full`,`text-left`],[1,`flex`,`flex-col`,`items-center`,`p-4`],[1,`mb-4`,`flex`,`items-center`,`justify-center`,`space-x-2`],[`btn`,``,`matRipple`,``,1,`inverse`,3,`click`],[`btn`,``,`matRipple`,``],[1,`w-full`,`text-xs`,`opacity-60`],[1,`m-0`,`border-none`,`bg-none`,`p-0`,`text-xs`,`underline`,3,`disabled`],[1,`w-full`,`px-4`,`pb-2`,`text-sm`,`font-medium`],[1,`w-full`],[1,`relative`,`flex`,`items-center`,`px-4`,`py-2`],[1,`bg-info`,`text-info-content`,`z-20`,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`rounded-full`],[1,`text-2xl`],[1,`ml-2`,`flex-1`],[`matRipple`,``,1,`hover:bg-base-200`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`px-2`,`py-1`,`font-medium`,3,`matMenuTriggerFor`],[`mat-menu-item`,``],[1,`px-2`,`text-xs`,`opacity-60`],[`mat-menu-item`,``,3,`click`],[1,`flex`,`items-center`,`space-x-2`],[1,`pr-8`],[1,`flex`,`w-full`,`items-center`,`space-x-2`],[1,`bg-base-200`,`flex`,`h-8`,`w-8`,`items-center`,`justify-center`,`rounded-full`],[1,`w-px`,`flex-1`,`truncate`],[1,`text-2xl`,`opacity-60`],[1,`flex-1`],[1,`flex`,`flex-1`,`items-center`,`justify-between`,`space-x-4`],[1,`text-xs`,`opacity-30`],[1,`bg-base-200`,`max-w-24`,`truncate`,`rounded-sm`,`px-2`,`py-1`,`text-sm`,3,`matTooltip`],[`btn`,``,`matRipple`,``,1,`clear`,`h-14`,`w-full`,`text-left`,3,`click`],[`btn`,``,`matRipple`,``,3,`click`],[1,`m-0`,`border-none`,`bg-none`,`p-0`,`text-xs`,`underline`,3,`click`,`disabled`]],template:function(t,i){t&1&&(aa(0,`div`,2)(1,`div`,3),by(2,`a-user-avatar`,4),aa(3,`div`,5),Z_(4),Td(),aa(5,`div`,6),Z_(6),Td()(),XT(7,jl,22,11,`div`,7),XT(8,Kl,10,2,`div`,8),XT(9,Ql,10,2,`div`,8),XT(10,$l,11,4,`div`,9),XT(11,Xl,11,4,`div`,9),XT(12,Yl,11,6,`div`,10),XT(13,Zl,11,6,`div`,10),dy(14,Jl,1,0,`ng-template`,null,0,TS),XT(16,ed,11,6,`div`,10),XT(17,id,19,13,`div`,11),XT(18,nd,8,3,`button`,12),aa(19,`div`,13)(20,`div`,14)(21,`button`,15),xy(`click`,function(){return i.logout()}),Z_(22),ES(23,`translate`),Td(),XT(24,od,3,3,`button`,16),Td(),aa(25,`div`,17),Md(26),Z_(27),ES(28,`translate`),Nd(),XT(29,ad,2,2,`button`,18)(30,rd,2,1,`span`),Td(),aa(31,`div`,17),Z_(32),ES(33,`date`),ES(34,`date`),Td()()()),t&2&&(Uy(`border`,!i.sidebar()),AC(2),Cy(`user`,i.user)(`matTooltip`,i.groups),AC(2),Ky(i.user?.name),AC(2),Ad(` `,i.user?.email,` `),AC(),JT(i.features().includes(`wfh`)&&i.active_block()?7:-1),AC(),JT(i.regions()?.length?8:-1),AC(),JT(!i.disable_building_select()&&!i.use_region()?9:-1),AC(),JT(i.features().includes(`help`)?10:-1),AC(),JT(i.features().includes(`wfh`)?11:-1),AC(),JT(i.accessibility()?12:-1),AC(),JT(i.desk_height()?13:-1),AC(3),JT(i.features().includes(`parking-controls`)?16:-1),AC(),JT(i.locales().length>1?17:-1),AC(),JT(i.features().includes(`support-ticket`)?18:-1),AC(4),Ad(` `,wS(23,22,`COMMON.CONTROLS_SIGN_OUT`),` `),AC(2),JT(i.has_new_version?24:-1),AC(3),Ad(` `,wS(28,24,`COMMON.CONTROLS_VERSION`),`: `),AC(2),JT(i.show_changelog()?29:30),AC(3),Xy(` `,CS(33,26,i.version.time,`longDate`),` (`,CS(34,29,i.version.time,`shortTime`),`) `))},dependencies:[cD,Ht$2,Mt,yt$1,_d$2,ue,Yt$3,mt$1,jn,Lt,I,G,Bt,zr,eN,f],encapsulation:2})}}return n})();var sd=[`*`];function cd(n,o){n&1&&(aa(0,`icon`,2),Z_(1,`person`),Td())}function ld(n,o){if(n&1){let e=u_();aa(0,`div`,1)(1,`button`,3),xy(`click`,function(){Jp(e);return eh(g_().close())}),Td(),aa(2,`div`,4)(3,`div`,5),by(4,`user-controls`,6),aa(5,`button`,7),xy(`click`,function(){Jp(e);return eh(g_().close())}),aa(6,`icon`,2),Z_(7,`close`),Td()()()()()}if(n&2){let e=g_();AC(),Uy(`opacity-50`,e.is_open())(`opacity-0`,!e.is_open()),AC(2),Uy(`translate-x-0`,e.is_open())(`translate-x-full`,!e.is_open()),AC(),Cy(`sidebar`,!0)}}var Qr=(()=>{class n{constructor(){this._close_timeout=null,this.is_open=It(!1),this.is_rendered=It(!1)}open(){this._close_timeout&&(clearTimeout(this._close_timeout),this._close_timeout=null),this.is_rendered.set(!0),requestAnimationFrame(()=>this.is_open.set(!0))}close(){this.is_open.set(!1),this._close_timeout=setTimeout(()=>{this.is_rendered.set(!1),this._close_timeout=null},200)}onEscape(){this.is_open()&&this.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=oT({type:n,selectors:[[`user-controls-sidebar`]],hostBindings:function(t,i){t&1&&xy(`keydown.escape`,function(){return i.onEscape()},$w)},ngContentSelectors:sd,decls:4,vars:1,consts:[[`icon`,``,`matRipple`,``,`avatar`,``,`type`,`button`,`name`,`user-controls`,1,`bg-base-200`,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`rounded-full`,3,`click`],[1,`fixed`,`inset-0`,`z-9999`,`overflow-hidden`],[1,`text-2xl`],[`type`,`button`,`aria-label`,`Close user controls`,1,`absolute`,`inset-0`,`bg-black`,`transition-opacity`,`duration-200`,3,`click`],[1,`absolute`,`inset-y-0`,`right-0`,`flex`,`max-w-full`],[1,`bg-base-100`,`relative`,`h-full`,`w-80`,`max-w-[100vw]`,`overflow-auto`,`pt-[calc(env(safe-area-inset-top)+1rem)]`,`pb-[env(safe-area-inset-bottom)]`,`pr-[env(safe-area-inset-right)]`,`shadow-xl`,`transition-transform`,`duration-200`,`ease-out`],[3,`sidebar`],[`icon`,``,`default`,``,`matRipple`,``,`type`,`button`,1,`absolute`,`top-[calc(env(safe-area-inset-top)+0.5rem)]`,`right-[calc(env(safe-area-inset-right)+0.5rem)]`,3,`click`]],template:function(t,i){t&1&&(y_(),aa(0,`button`,0),xy(`click`,function(){return i.open()}),v_(1,0,null,cd,2,0),Td(),XT(3,ld,8,9,`div`,1)),t&2&&(AC(3),JT(i.is_rendered()?3:-1))},dependencies:[Mt,yt$1,_d$2,Kr],encapsulation:2})}}return n})();var dd=[`editor`];function md(n,o){if(n&1){let e=u_();aa(0,`button`,20),xy(`click`,function(){Jp(e);return eh(g_(2).insertImage())}),aa(1,`icon`),Z_(2,`image`),Td()(),aa(3,`button`,20),xy(`click`,function(){Jp(e);return eh(g_(2).insertAttachment())}),aa(4,`icon`),Z_(5,`attachment`),Td()()}}function pd(n,o){if(n&1){let e=u_();aa(0,`div`,3)(1,`select`,5),xy(`change`,function(i){Jp(e);return eh(g_().setFontFace(i))}),aa(2,`option`,6),Z_(3,`Font`),Td(),aa(4,`option`,7),Z_(5,`Arial`),Td(),aa(6,`option`,8),Z_(7,`Helvetica`),Td(),aa(8,`option`,9),Z_(9,`Georgia`),Td(),aa(10,`option`,10),Z_(11,`Times New Roman`),Td()(),aa(12,`select`,11),xy(`change`,function(i){Jp(e);return eh(g_().setFontSize(i))}),aa(13,`option`,12),Z_(14,`Size`),Td(),aa(15,`option`,13),Z_(16,`12`),Td(),aa(17,`option`,14),Z_(18,`14`),Td(),aa(19,`option`,15),Z_(20,`16`),Td(),aa(21,`option`,16),Z_(22,`18`),Td(),aa(23,`option`,17),Z_(24,`24`),Td(),aa(25,`option`,18),Z_(26,`32`),Td(),aa(27,`option`,19),Z_(28,`48`),Td()(),aa(29,`button`,20),xy(`click`,function(){Jp(e);return eh(g_().toggleBold())}),aa(30,`icon`),Z_(31,`format_bold`),Td()(),aa(32,`button`,20),xy(`click`,function(){Jp(e);return eh(g_().toggleItalic())}),aa(33,`icon`),Z_(34,`format_italic`),Td()(),aa(35,`button`,20),xy(`click`,function(){Jp(e);return eh(g_().toggleUnderline())}),aa(36,`icon`),Z_(37,`format_underlined`),Td()(),aa(38,`button`,20),xy(`click`,function(){Jp(e);return eh(g_().makeUnorderedList())}),aa(39,`icon`),Z_(40,`format_list_bulleted`),Td()(),aa(41,`button`,20),xy(`click`,function(){Jp(e);return eh(g_().makeOrderedList())}),aa(42,`icon`),Z_(43,`format_list_numbered`),Td()(),aa(44,`button`,20),xy(`click`,function(){Jp(e);return eh(g_().insertLink())}),aa(45,`icon`),Z_(46,`link`),Td()(),XT(47,md,6,0),Td()}if(n&2){let e=g_();AC(29),Uy(`border-info`,e.toolbar_state().bold)(`text-info`,e.toolbar_state().bold),AC(3),Uy(`border-info`,e.toolbar_state().italic)(`text-info`,e.toolbar_state().italic),AC(3),Uy(`border-info`,e.toolbar_state().underline)(`text-info`,e.toolbar_state().underline),AC(3),Uy(`border-info`,e.toolbar_state().unordered_list)(`text-info`,e.toolbar_state().unordered_list),AC(3),Uy(`border-info`,e.toolbar_state().ordered_list)(`text-info`,e.toolbar_state().ordered_list),AC(3),Uy(`border-info`,e.toolbar_state().link)(`text-info`,e.toolbar_state().link),AC(3),JT(e.images_allowed()?47:-1)}}var Rr=(()=>{class n extends y$1{constructor(){super(...arguments),this._uploads=y(z_),this._dom_sanitizer=y(ZN),this._ng_zone=y(pe),this.placeholder=j2(``),this.readonly=j2(!1),this.images_allowed=j2(!1),this._editor_el=V2(`editor`),this._onChange=()=>{},this._onTouch=()=>{},this.toolbar_state=It({bold:!1,italic:!1,underline:!1,unordered_list:!1,ordered_list:!1,link:!1}),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e,this._syncValue=()=>{this._editor&&this.setValue(this._editor.getHTML())},this._handleTouched=()=>{this._editor&&this._onTouch()},this._refreshToolbarState=()=>{this._editor&&this._ng_zone.run(()=>{this.toolbar_state.set({bold:this._editor.hasFormat(`B`),italic:this._editor.hasFormat(`I`),underline:this._editor.hasFormat(`U`),unordered_list:this._editor.hasFormat(`UL`),ordered_list:this._editor.hasFormat(`OL`),link:this._editor.hasFormat(`A`)})})}}ngOnChanges(e){e.placeholder&&this.timeout(`init`,()=>this._initialiseEditor()),e.readonly&&this._editor&&this._setReadonlyState()}ngAfterViewInit(){this.timeout(`init`,()=>this._initialiseEditor())}setValue(e){this._onChange(e)}writeValue(e){this.timeout(`write`,()=>{this._editor?(this._editor.setHTML(e||``),this._setPlaceholder()):this.timeout(`write`,()=>this.writeValue(e))})}toggleBold(){this._toggleFormat(`B`,()=>this._editor.removeBold(),()=>this._editor.bold())}toggleItalic(){this._toggleFormat(`I`,()=>this._editor.removeItalic(),()=>this._editor.italic())}toggleUnderline(){this._toggleFormat(`U`,()=>this._editor.removeUnderline(),()=>this._editor.underline())}makeUnorderedList(){this._toggleFormat(`UL`,()=>this._editor.removeList(),()=>this._editor.makeUnorderedList())}makeOrderedList(){this._toggleFormat(`OL`,()=>this._editor.removeList(),()=>this._editor.makeOrderedList())}insertLink(){if(!this._editor)return;if(this._editor.hasFormat(`A`)){this._editor.removeLink(),this._syncValue(),this._refreshToolbarState();return}let e=prompt(`Enter URL`);e&&(this._editor.makeLink(e),this._syncValue(),this._refreshToolbarState())}setFontFace(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontFace(t==="default"?`inherit`:t),this._syncValue())}setFontSize(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontSize(t),this._syncValue())}insertImage(){this._embedFile(!0)}insertAttachment(){this._embedFile(!1)}async _initialiseEditor(){let e=this._editor_el()?.nativeElement;if(!e)return this.timeout(`init`,()=>this._initialiseEditor());let{default:t}=await import(`./squire-B0gBI6PO.js`);this._editor&&this._editor.destroy(),e.innerHTML=``,this._editor=new t(e,{blockTag:`div`,sanitizeToDOMFragment:i=>{let a=this._dom_sanitizer.sanitize(z$1.HTML,i||``)||``,d=document.createElement(`template`);return d.innerHTML=a,d.content.cloneNode(!0)}}),this._editor.addEventListener(`input`,this._syncValue),this._editor.addEventListener(`blur`,this._handleTouched),this._editor.addEventListener(`cursor`,this._refreshToolbarState),this._editor.addEventListener(`select`,this._refreshToolbarState),this._editor.addEventListener(`pathChange`,this._refreshToolbarState),this._setReadonlyState(),this._setPlaceholder(),this._refreshToolbarState()}_embedFile(e){if(!this._editor)return;let t=document.createElement(`input`);t.setAttribute(`type`,`file`),e&&t.setAttribute(`accept`,`image/*`),t.click(),t.onchange=()=>{let i=t.files?.[0];i&&this._uploads.uploadFile(i,!0).then(a=>{if(!a)return;let d=`${location.origin}/api/engine/v2/uploads/${encodeURIComponent(a)}/url`;this._setAuth(),setTimeout(()=>{this._insertUploadedFile(d,i,e),this._syncValue()},100)}).catch(a=>{a instanceof Rn$1||up(`Failed to upload ${i.name}: ${a?.message||`Unknown error`}`)})}}_setReadonlyState(){let e=this._editor_el()?.nativeElement;e&&e.setAttribute(`contenteditable`,`${!this.readonly()}`)}_setPlaceholder(){let e=this._editor_el()?.nativeElement;e&&e.setAttribute(`data-placeholder`,this.placeholder()||``)}_toggleFormat(e,t,i){this._editor&&(this._editor.hasFormat(e)?t():i(),this._syncValue(),this._refreshToolbarState())}_insertUploadedFile(e,t,i){let a=t.type.startsWith(`image/`);if(i||a){this._editor.insertHTML(`<img src="${e}" alt="${t.name}" />`);return}this._editor.insertHTML(`<a href="${e}" target="_blank">${t.name}</a>`)}_setAuth(){let e=K();document.cookie=`${e===`x-api-key`?`api-key=`+encodeURIComponent(de()):`bearer_token=`+encodeURIComponent(e)};max-age=30;path=/api/engine/v2/uploads;samesite=strict;${location.protocol===`https:`?`secure;`:``}`}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Og(n)))(i||n)}})()}static{this.ɵcmp=oT({type:n,selectors:[[`rich-text-input`]],viewQuery:function(t,i){t&1&&Ly(i._editor_el,dd,5),t&2&&w_()},inputs:{placeholder:[1,`placeholder`],readonly:[1,`readonly`],images_allowed:[1,`images_allowed`]},features:[aS([{provide:Ne,useExisting:fs$1(()=>n),multi:!0}]),uy,ua],decls:5,vars:1,consts:[[`container`,``],[`editor`,``],[1,`w-full`],[1,`border-base-300`,`bg-base-100`,`flex`,`flex-wrap`,`items-center`,`gap-1`,`rounded-t`,`border`,`p-2`],[1,`squire-editor`],[1,`border-base-300`,`bg-base-100`,`rounded`,`border`,`p-2`,`text-sm`,3,`change`],[`value`,`default`],[`value`,`Arial`],[`value`,`Helvetica`],[`value`,`Georgia`],[`value`,`Times New Roman`],[1,`border-base-300`,`bg-base-100`,`min-w-24`,`rounded`,`border`,`p-2`,`text-sm`,3,`change`],[`value`,``],[`value`,`12px`],[`value`,`14px`],[`value`,`16px`],[`value`,`18px`],[`value`,`24px`],[`value`,`32px`],[`value`,`48px`],[`icon`,``,`type`,`button`,1,`border-base-300`,`rounded`,`border`,`px-2`,`py-1`,`text-sm`,3,`click`]],template:function(t,i){t&1&&(aa(0,`div`,2,0),XT(2,pd,48,25,`div`,3),by(3,`div`,4,1),Td()),t&2&&(AC(2),JT(i.readonly()?-1:2))},dependencies:[_d$2],styles:[`[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]     .squire-editor{border-radius:.25rem;border:1px solid var(--%NS%base-300);padding:.5rem;min-height:8rem;width:100%;outline:none}[_nghost-%COMP%]     .squire-editor:empty:before{content:attr(data-placeholder);color:var(--%NS%base-content);opacity:.5}[_nghost-%COMP%]     .squire-editor ul{list-style-type:disc;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor ol{list-style-type:decimal;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor li{margin:.125rem 0}
/*# sourceMappingURL=rich-text-input.component.css.map */`]})}}return n})();var hd=(n,o)=>o.id+``+n;function ud(n,o){if(n&1&&(aa(0,`a`,1)(1,`icon`,2),Z_(2),Td(),aa(3,`span`,3),Z_(4),ES(5,`translate`),Td()()),n&2){let e=g_().$implicit;Cy(`routerLink`,e.route),AC(2),Ky(e.icon),AC(2),Ky(wS(5,3,e.name))}}function _d(n,o){if(n&1){let e=u_();aa(0,`button`,6),xy(`click`,function(){Jp(e);let i=g_(2).$implicit;return eh(g_().toggleBlock(i.id||i._id))}),aa(1,`icon`,2),Z_(2),Td(),aa(3,`div`,7),Z_(4),ES(5,`translate`),Td(),aa(6,`icon`,8),Z_(7,`arrow_drop_down`),Td()()}if(n&2){let e=g_(2).$implicit;AC(2),Ad(` `,e.icon,` `),AC(2),Ad(` `,wS(5,2,e.name),` `)}}function fd(n,o){if(n&1&&(aa(0,`a`,10),by(1,`icon`,8),aa(2,`span`),Z_(3),ES(4,`translate`),Td()()),n&2){let e=o.$implicit;Cy(`routerLink`,e.route),AC(3),Ky(wS(4,2,e.name))}}function gd(n,o){if(n&1&&(aa(0,`section`,9),n_(1,fd,5,4,`a`,10,t_),Td()),n&2){let e=g_(2).$implicit;Uy(`contract-collapsed`,g_().isBlockCollapsed(e.id||e._id)),AC(),r_(e.children)}}function bd(n,o){if(n&1&&(XT(0,_d,8,4,`button`,4),XT(1,gd,3,2,`section`,5)),n&2){let e=g_().$implicit;JT(e.children?.length?0:-1),AC(),JT(e.children?.length?1:-1)}}function vd(n,o){if(n&1&&XT(0,ud,6,5,`a`,1)(1,bd,2,2),n&2){let e=o.$implicit;JT(e.children?1:0)}}var Qv=(()=>{class n extends y$1{constructor(){super(),this._settings=y(se),this._org=y(gi$1),this._element_ref=y(Yt$1),this.show_block=It({}),this.links=[],this.filtered_links=It([]),ks$1(()=>{this._org.active_building()&&this.timeout(`update_links`,()=>this.updateFilteredLinks(),500)}),ks$1(()=>{Gu(),this.links.length&&oe(()=>this.updateFilteredLinks())})}get feature_list(){return this._settings.get(`app.features`)||[]}get feature_groups(){return this._settings.get(`app.feature_groups`)||{}}get is_admin(){let e=$().groups||[],t=this._settings.get(`app.admin_group`)||`admin`;return e.includes(t)||e.includes(`placeos_admin`)||e.includes(`placeos_support`)}async ngOnInit(){await this._org.waitUntilInitialised(),this.links=[{name:`APP.CONCIERGE.MENU_BOOKINGS`,icon:`add_circle`,children:[{id:`spaces`,name:`APP.CONCIERGE.MENU_ROOM_BOOKINGS`,route:[`/book/rooms`]},{id:`desks`,name:`APP.CONCIERGE.MENU_DESK_BOOKINGS`,route:[`/book/desks/events`]},{id:`parking`,name:`APP.CONCIERGE.MENU_PARKING_BOOKINGS`,route:[`/book/parking/events`]},{id:`parking-bookings`,name:`APP.CONCIERGE.MENU_PARKING_BOOKINGS`,route:[`/book/parking/events`]},{id:`lockers`,name:`APP.CONCIERGE.MENU_LOCKER_BOOKINGS`,route:[`/book/lockers/events`]},{id:`assets`,name:`APP.CONCIERGE.MENU_ASSET_BOOKINGS`,route:[`/book/assets/list/requests`]},{id:`catering`,name:`APP.CONCIERGE.MENU_CATERING_BOOKINGS`,route:[`/book/catering/orders`]},{id:`visitors`,name:`APP.CONCIERGE.MENU_VISITOR_BOOKINGS`,route:[`/book/visitors`]},{id:`visitor-rules`,name:`APP.CONCIERGE.MENU_VISITOR_RULES`,route:[`/book/visitors/rules`]}]},{id:`facilities`,name:`APP.CONCIERGE.MENU_MANAGEMENT`,icon:`place`,children:[{id:`zones`,name:`APP.CONCIERGE.MENU_MANAGE_ZONES`,route:[`/zone-management`]},{id:`spaces`,name:`APP.CONCIERGE.MENU_MANAGE_ROOMS`,route:[`/room-management`]},{id:`desks`,name:`APP.CONCIERGE.MENU_MANAGE_DESKS`,route:[`/book/desks/manage`]},{id:`parking`,name:`APP.CONCIERGE.MENU_MANAGE_PARKING`,route:[`/book/parking/manage`]},{id:`parking-manage`,name:`APP.CONCIERGE.MENU_MANAGE_PARKING`,route:[`/book/parking/manage`]},{id:`lockers`,name:`APP.CONCIERGE.MENU_MANAGE_LOCKERS`,route:[`/book/lockers/manage`]},{id:`catering`,name:`APP.CONCIERGE.MENU_MANAGE_CATERING`,route:[`/book/catering/menu`]},{id:`points`,name:`APP.CONCIERGE.MENU_MANAGE_POINTS`,route:[`/points-management`]},{id:`emergency-contacts`,name:`APP.CONCIERGE.MENU_MANAGE_CONTACTS`,icon:`assignment_ind`,route:[`/users/staff/emergency-contacts`]},{id:`signage`,name:`APP.CONCIERGE.MENU_MANAGE_SIGNAGE`,route:[`/signage`]},{id:`points-of-interest`,name:`APP.CONCIERGE.MENU_MANAGE_MAP_FEATURES`,route:[`/points-of-interest`]},{id:`url-management`,name:`APP.CONCIERGE.MENU_MANAGE_URLS`,route:[`/url-management`]},{id:`email-templates`,name:`APP.CONCIERGE.MENU_MANAGE_EMAILS`,route:[`/email-templates`]},{id:`deals-n-offers`,name:`APP.CONCIERGE.MENU_MANAGE_DEALS`,route:[`/deals-n-offers`]}]},{id:`assets`,name:`APP.CONCIERGE.MENU_ASSETS`,route:[`/book/assets/list/items`],icon:`vibration`},{id:`internal-users`,name:`APP.CONCIERGE.MENU_USER_LIST`,icon:`assignment_ind`,route:[`/users/staff`]},{id:`events`,name:`APP.CONCIERGE.MENU_EVENTS`,route:[`/entertainment/events`],icon:`confirmation_number`},{id:`surveys`,name:`APP.CONCIERGE.MENU_SURVEYS`,route:[`/surveys`],icon:`add_reaction`},{_id:`reports`,name:`APP.CONCIERGE.MENU_REPORTS`,icon:`analytics`,children:[{id:`attendance-report`,name:`APP.CONCIERGE.MENU_REPORT_SITE_ATTENDANCE`,route:[`/reports/attendance`]},{id:`booking-report`,name:`APP.CONCIERGE.MENU_REPORT_ROOMS`,route:[`/reports/bookings`]},{id:`desk-report`,name:`APP.CONCIERGE.MENU_REPORT_DESKS`,route:[`/reports/desks`]},{id:`parking-report`,name:`APP.CONCIERGE.MENU_REPORT_PARKING`,route:[`/reports/parking`]},{id:`lockers-report`,name:`APP.CONCIERGE.MENU_REPORT_LOCKERS`,route:[`/reports/lockers`]},{id:`catering-report`,name:`APP.CONCIERGE.MENU_REPORT_CATERING`,route:[`/reports/catering`]},{id:`contact-tracing-report`,name:`APP.CONCIERGE.MENU_REPORT_CONTACT_TRACING`,route:[`/reports/contact-tracing`]},{id:`assets-report`,name:`APP.CONCIERGE.MENU_REPORT_ASSETS`,route:[`/reports/assets`]},{id:`visitors-report`,name:`APP.CONCIERGE.MENU_REPORT_VISITORS`,route:[`/reports/visitors`]}]}],this.updateFilteredLinks(),this.timeout(`update_inview`,()=>this._moveActiveLinkIntoView(),50),this.timeout(`update_links`,()=>this.updateFilteredLinks(),500)}_isFeatureAvailable(e){if(e.startsWith(`*`))return!0;let t=this.feature_list.includes(e),i=this.feature_groups[e]||[],a=$().groups;return!!(t&&(this.is_admin||!i.length||a.find(d=>i.includes(d))))}updateFilteredLinks(){let e=this._settings.get(`app.custom_reports`)||[];if(e.length&&this.links.find(t=>t._id===`reports`)){let t=this.links.find(i=>i._id===`reports`);t.children=Cp(t.children.concat(e.map(i=>m(l({},i),{id:`*${i.id}`,route:[`/reports`,i.id]}))),`id`)}if(this.filtered_links.set(this.links.map(t=>m(l({},t),{children:t.children?t.children.filter(i=>this._isFeatureAvailable(i.id)):null})).filter(t=>(!t.id||t.id===`home`||this._isFeatureAvailable(t.id))&&t.route||t.children?.length)),this.filtered_links().find(t=>t.id===`home`)){let t=this.filtered_links().find(i=>i.id===`home`);t.route=this._settings.get(`app.default_route`)||[`/`]}this.is_admin||this.filtered_links.update(t=>t.filter(i=>i.id!==`facilities`))}toggleBlock(e){this.show_block.update(t=>m(l({},t),{[e]:!t[e]}))}isBlockCollapsed(e){return!!this.show_block()[e]}_moveActiveLinkIntoView(){let e=this._element_ref.nativeElement.querySelector(`a.active`);e&&e.scrollIntoView({block:`center`,behavior:`instant`})}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=oT({type:n,selectors:[[`app-sidebar`]],features:[uy],decls:3,vars:0,consts:[[1,`border-base-200`,`h-full`,`w-64`,`overflow-auto`,`border-r`,`py-2`,`pr-3`],[`matRipple`,``,`routerLinkActive`,`active`,1,`hover:bg-base-200`,`my-1`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-r-full`,`p-1`,3,`routerLink`],[1,`text-2xl`,`opacity-60`],[1,`font-medium`],[`matRipple`,``,1,`hover:bg-base-200`,`my-1`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-r-full`,`p-1`],[1,`contract-expand`,`w-full`,3,`contract-collapsed`],[`matRipple`,``,1,`hover:bg-base-200`,`my-1`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-r-full`,`p-1`,3,`click`],[1,`flex-1`,`text-left`,`font-medium`],[1,`text-2xl`],[1,`contract-expand`,`w-full`],[`routerLinkActive`,`active`,1,`hover:bg-base-200`,`my-1`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-r-full`,`p-1`,3,`routerLink`]],template:function(t,i){t&1&&(aa(0,`div`,0),n_(1,vd,2,1,null,null,hd),Td()),t&2&&(AC(),r_(i.filtered_links()))},dependencies:[as$1,$t$1,ts$1,Mt,yt$1,_d$2,f],styles:[`[_nghost-%COMP%]{height:100%}a.active[_ngcontent-%COMP%]{background-color:var(--%NS%secondary);color:var(--%NS%secondary-content)}a.active[_ngcontent-%COMP%]:hover{color:var(--%NS%base-content);opacity:.75}
/*# sourceMappingURL=app-sidebar.component.css.map */`]})}}return n})();var yd=()=>[`/`];var ay=(()=>{class n{constructor(){this._settings=y(se),this._shortcuts=y(S),this._theme=this._settings.theme_signal,this._logo_dark=this._settings.signal(`app.logo_dark`,{},!0),this._logo_light=this._settings.signal(`app.logo_light`,{},!0),this.logo_src=Fe(()=>{let e=this.logo();return typeof e==`string`?e:e?.src||``}),this.logo=Fe(()=>(this._theme()===`dark`?this._logo_dark():this._logo_light())||{}),this.user=Ca(),this.openShortcuts=()=>this._shortcuts.openHelp()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=oT({type:n,selectors:[[`app-topbar`]],decls:14,vars:7,consts:[[1,`border-base-200`,`flex`,`items-center`,`border-b`,`p-2`],[1,`w-64`],[3,`routerLink`],[`auth`,``,1,`h-12`,3,`source`],[1,`flex`,`flex-1`,`items-center`,`justify-end`,`space-x-2`],[`btn`,``,`icon`,``,`matRipple`,``,3,`click`,`matTooltip`],[1,`text-2xl`],[`btn`,``,`icon`,``,`matRipple`,``],[1,`mr-2`],[3,`user`]],template:function(t,i){t&1&&(aa(0,`div`,0)(1,`div`,1)(2,`a`,2),by(3,`img`,3),Td()(),aa(4,`div`,4)(5,`button`,5),ES(6,`translate`),xy(`click`,function(){return i.openShortcuts()}),aa(7,`icon`,6),Z_(8,`keyboard`),Td()(),aa(9,`button`,7)(10,`icon`,6),Z_(11,`notifications`),Td()(),aa(12,`user-controls-sidebar`,8),by(13,`a-user-avatar`,9),Td()()()),t&2&&(AC(2),Cy(`routerLink`,cS(6,yd)),AC(),Cy(`source`,i.logo_src()),AC(2),Cy(`matTooltip`,wS(6,4,`APP.CONCIERGE.SHORTCUTS_TITLE`)),AC(8),Cy(`user`,i.user()))},dependencies:[as$1,$t$1,jn,Mt,yt$1,wt,_d$2,Qr,Yt$3,mt$1,f],styles:[`[_nghost-%COMP%]{width:100%}
/*# sourceMappingURL=app-topbar.component.css.map */`]})}}return n})();export{wt as A,gi as C,qn as D,kr as E,zn as M,rr as O,fi as S,jn as T,Xt as _,Gs as a,ay as b,Ir as c,Qn as d,Qv as f,Uu as g,St as h,Fr as i,xr as j,vi as k,Jt as l,Sr as m,Cr as n,Hn as o,Rr as p,Er as r,Io as s,$n as t,Kn as u,Yt as v,ir as w,ei as x,Zt as y};
//# debugId=1a741b0a-0f7e-58b9-a31e-74b69c1e6a4c
//# sourceMappingURL=chunk-BiBdSZdK.js.map