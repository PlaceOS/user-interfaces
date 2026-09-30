import{$n as Oe,Ac as ry,Al as xN,As as ny,Ba as dC,Br as Sn$1,Bs as on$1,Cc as rl$1,Co as hk,Cr as Qt$1,Ct as Gk,Do as iA,Dt as HI,Ec as ro,En as Le,Es as no,F as D$1,Fa as cr,Fl as xy,Fn as Mi,Fr as SU,G as Ds$1,Gr as TX,Gs as p,Ha as dN,Hl as yh,Hs as ot,Ht as Iae,Ia as ct,Ii as Y,Il as yA,In as Mn$1,Jc as tt,Ji as Z0,Jl as zM,Js as pU,K as Dv,Ka as ds$1,Kl as zC,Kn as Noe,La as cx,Li as YB,Ln as Moe,Lo as jM,Lr as Se,Ls as oc$1,Mi as Xk,Mt as Hce,Nn as MX,Oa as be$1,Ol as xI,P as Cr,Po as ile,Pr as SP,Qa as el$1,Qc as uN,Ql as zg,Qn as Oce,Qr as Tv,Rn as N,Rs as ok,Sa as bB,Sc as rh,Ss as nc$1,Ta as bN,Tc as rn$1,Ti as X0,To as ho,Tt as H,U as Dle,Ui as Ye,Ul as yn,Ut as Ic$1,Vl as yce,Wa as dd,Wc as tc$1,Wl as yoe,Wn as Nce,Wt as Ie,X as EU,Xa as e_$1,Xi as ZX,Xn as ON,Xs as ph,Xt as J,Y as EP,Za as ec$1,Zo as kv,Zr as Ts$1,_ as BI,_n as L$1,_r as Qe,_s as nA,ai as Ue,al as ux,an as Jg,ao as fh,bc as rc$1,bn as LF,ca as _ce,cs as lx,dc as qk,di as Vce,dl as v_,do as gN,dr as Q0,ds as mZ,el as ua$1,er as Oi,et as Ece,eu as l,f as Ae$1,fl as vi,fn as KM,ft as Fc,g as BF,gn as Ky,go as gf,gs as my,h as Ar,hc as qx,hl as vt,ht as G,io as fe,ir as PI,j as Cce,jc as sA,ji as Xg,jo as ie,jr as Rr,ki as Xa$1,la as _r,lc as qg,lo as fy,ma as aa,mc as qt$1,mo as gZ,mr as QX,mt as Fy,na as _H,ni as UN,nr as Oy,ns as ld,nt as Eoe,oa as _X,ol as uy,on as Jh,oo as fk,os as lo,ot as FB,pc as qse,pt as Ft,qa as dt,qc as tn$1,qi as Z,qn as Ny,qo as kN,qs as pN,ro as fd,rr as P,rs as li,rt as Es$1,sa as _Z,sc as qe,t as $$1,ta as Zu,tc as q0,tl as ud,tn as J_,tr as Or,tt as Ee,tu as m,ul as vZ,ur as Pv,ut as FN,vr as Qg,wi as Wy,ws as ni,xc as re,xn as LI,xr as Qn,xs as nb,ya as ao,yc as rb,yi as We,za as dB,zc as tA,zr as Si}from"./chunk-DcAMRgbl.js";import{$t as pa$1,At as jk,Bt as lr,Ct as fe$1,Ft as kK,G as TD,Gt as nb$1,Ht as mK,It as kg,J as Tu,Jt as oM,Kt as np,N as Ne,Nt as ju,Ot as jK,Qt as pA,T as Jc,X as Ug,Yt as oT,Zt as ol$1,_t as de,at as aM,d as Da$1,en as qK,f as Dn,i as AT,in as rT,it as aA,k as MK,ln as sl$1,p as E6,sn as sb,v as Ge,wn as yT}from"./chunk-hMB2gPRQ.js";import{A as yo,C as fd$1,D as wl$1,E as qn,T as pd,a as Gd,b as Ye$1,d as Ni,f as Nl$1,g as Ud,h as Sl$1,i as Fs$1,k as xa$1,l as It,m as Rs$1,n as Cl$1,p as Qe$1,u as Le$1,v as Wt$1,x as Yr$1}from"./chunk-oBVIsTxs.js";import{a as Yt,n as O$1,o as mt,t as f}from"./main.js";import{t as E}from"./chunk-DHuPsS_a.js";import{n as oe,t as he}from"./chunk-BDdLLaTQ.js";import{n as f$1}from"./chunk-BMl07-1c.js";function Lr(n,o){let e=Ia(o)?new o(0):Oe(o,0);return e.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),e.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e}function Ia(n){return typeof n==`function`&&n.prototype?.constructor===n}var Na=10;var Vi=class{subPriority=0;validate(o,e){return!0}};var Li=class extends Vi{constructor(o,e,t,i,a){super(),this.value=o,this.validateValue=e,this.setValue=t,this.priority=i,a&&(this.subPriority=a)}validate(o,e){return this.validateValue(o,this.value,e)}set(o,e,t){return this.setValue(o,e,this.value,t)}};var Ui=class extends Vi{priority=Na;subPriority=-1;constructor(o,e){super(),this.context=o||(t=>Oe(e,t))}set(o,e){return e.timestampIsSet?o:Oe(o,Lr(o,this.context))}};var C=class{run(o,e,t,i){let a=this.parse(o,e,t,i);return a?{setter:new Li(a.value,this.validate,this.set,this.priority,this.subPriority),rest:a.rest}:null}validate(o,e,t){return!0}};var Bi=class extends C{priority=140;parse(o,e,t){switch(e){case`G`:case`GG`:case`GGG`:return t.era(o,{width:`abbreviated`})||t.era(o,{width:`narrow`});case`GGGGG`:return t.era(o,{width:`narrow`});default:return t.era(o,{width:`wide`})||t.era(o,{width:`abbreviated`})||t.era(o,{width:`narrow`})}}set(o,e,t){return e.era=t,o.setFullYear(t,0,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`R`,`u`,`t`,`T`]};var B={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/};var De={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function $(n,o){return n&&{value:o(n.value),rest:n.rest}}function L(n,o){let e=o.match(n);return e?{value:parseInt(e[0],10),rest:o.slice(e[0].length)}:null}function Ae(n,o){let e=o.match(n);if(!e)return null;if(e[0]===`Z`)return{value:0,rest:o.slice(1)};let t=e[1]===`+`?1:-1,i=e[2]?parseInt(e[2],10):0,a=e[3]?parseInt(e[3],10):0,d=e[5]?parseInt(e[5],10):0;return{value:t*(i*pN+a*ph+d*Moe),rest:o.slice(e[0].length)}}function zi(n){return L(B.anyDigitsSigned,n)}function D(n,o){switch(n){case 1:return L(B.singleDigit,o);case 2:return L(B.twoDigits,o);case 3:return L(B.threeDigits,o);case 4:return L(B.fourDigits,o);default:return L(new RegExp(`^\\d{1,`+n+`}`),o)}}function Gt(n,o){switch(n){case 1:return L(B.singleDigitSigned,o);case 2:return L(B.twoDigitsSigned,o);case 3:return L(B.threeDigitsSigned,o);case 4:return L(B.fourDigitsSigned,o);default:return L(new RegExp(`^-?\\d{1,`+n+`}`),o)}}function Wt(n){switch(n){case`morning`:return 4;case`evening`:return 17;case`pm`:case`noon`:case`afternoon`:return 12;default:return 0}}function Gi(n,o){let e=o>0,t=e?o:1-o,i;if(t<=50)i=n||100;else{let a=t+50,d=Math.trunc(a/100)*100,x=n>=a%100;i=n+d-(x?100:0)}return e?i:1-i}function Wi(n){return n%400===0||n%4===0&&n%100!==0}var Hi=class extends C{priority=130;incompatibleTokens=[`Y`,`R`,`u`,`w`,`I`,`i`,`e`,`c`,`t`,`T`];parse(o,e,t){let i=a=>({year:a,isTwoDigitYear:e===`yy`});switch(e){case`y`:return $(D(4,o),i);case`yo`:return $(t.ordinalNumber(o,{unit:`year`}),i);default:return $(D(e.length,o),i)}}validate(o,e){return e.isTwoDigitYear||e.year>0}set(o,e,t){let i=o.getFullYear();if(t.isTwoDigitYear){let d=Gi(t.year,i);return o.setFullYear(d,0,1),o.setHours(0,0,0,0),o}let a=!(`era`in e)||e.era===1?t.year:1-t.year;return o.setFullYear(a,0,1),o.setHours(0,0,0,0),o}};var qi=class extends C{priority=130;parse(o,e,t){let i=a=>({year:a,isTwoDigitYear:e===`YY`});switch(e){case`Y`:return $(D(4,o),i);case`Yo`:return $(t.ordinalNumber(o,{unit:`year`}),i);default:return $(D(e.length,o),i)}}validate(o,e){return e.isTwoDigitYear||e.year>0}set(o,e,t,i){let a=yh(o,i);if(t.isTwoDigitYear){let x=Gi(t.year,a);return o.setFullYear(x,0,i.firstWeekContainsDate),o.setHours(0,0,0,0),Rr(o,i)}let d=!(`era`in e)||e.era===1?t.year:1-t.year;return o.setFullYear(d,0,i.firstWeekContainsDate),o.setHours(0,0,0,0),Rr(o,i)}incompatibleTokens=[`y`,`R`,`u`,`Q`,`q`,`M`,`L`,`I`,`d`,`D`,`i`,`t`,`T`]};var ji=class extends C{priority=130;parse(o,e){return e===`R`?Gt(4,o):Gt(e.length,o)}set(o,e,t){let i=Oe(o,0);return i.setFullYear(t,0,4),i.setHours(0,0,0,0),Oi(i)}incompatibleTokens=[`G`,`y`,`Y`,`u`,`Q`,`q`,`M`,`L`,`w`,`d`,`D`,`e`,`c`,`t`,`T`]};var $i=class extends C{priority=130;parse(o,e){return e===`u`?Gt(4,o):Gt(e.length,o)}set(o,e,t){return o.setFullYear(t,0,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`G`,`y`,`Y`,`R`,`w`,`I`,`i`,`e`,`c`,`t`,`T`]};var Ki=class extends C{priority=120;parse(o,e,t){switch(e){case`Q`:case`QQ`:return D(e.length,o);case`Qo`:return t.ordinalNumber(o,{unit:`quarter`});case`QQQ`:return t.quarter(o,{width:`abbreviated`,context:`formatting`})||t.quarter(o,{width:`narrow`,context:`formatting`});case`QQQQQ`:return t.quarter(o,{width:`narrow`,context:`formatting`});default:return t.quarter(o,{width:`wide`,context:`formatting`})||t.quarter(o,{width:`abbreviated`,context:`formatting`})||t.quarter(o,{width:`narrow`,context:`formatting`})}}validate(o,e){return e>=1&&e<=4}set(o,e,t){return o.setMonth((t-1)*3,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`q`,`M`,`L`,`w`,`I`,`d`,`D`,`i`,`e`,`c`,`t`,`T`]};var Qi=class extends C{priority=120;parse(o,e,t){switch(e){case`q`:case`qq`:return D(e.length,o);case`qo`:return t.ordinalNumber(o,{unit:`quarter`});case`qqq`:return t.quarter(o,{width:`abbreviated`,context:`standalone`})||t.quarter(o,{width:`narrow`,context:`standalone`});case`qqqqq`:return t.quarter(o,{width:`narrow`,context:`standalone`});default:return t.quarter(o,{width:`wide`,context:`standalone`})||t.quarter(o,{width:`abbreviated`,context:`standalone`})||t.quarter(o,{width:`narrow`,context:`standalone`})}}validate(o,e){return e>=1&&e<=4}set(o,e,t){return o.setMonth((t-1)*3,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`Q`,`M`,`L`,`w`,`I`,`d`,`D`,`i`,`e`,`c`,`t`,`T`]};var Xi=class extends C{incompatibleTokens=[`Y`,`R`,`q`,`Q`,`L`,`w`,`I`,`D`,`i`,`e`,`c`,`t`,`T`];priority=110;parse(o,e,t){let i=a=>a-1;switch(e){case`M`:return $(L(B.month,o),i);case`MM`:return $(D(2,o),i);case`Mo`:return $(t.ordinalNumber(o,{unit:`month`}),i);case`MMM`:return t.month(o,{width:`abbreviated`,context:`formatting`})||t.month(o,{width:`narrow`,context:`formatting`});case`MMMMM`:return t.month(o,{width:`narrow`,context:`formatting`});default:return t.month(o,{width:`wide`,context:`formatting`})||t.month(o,{width:`abbreviated`,context:`formatting`})||t.month(o,{width:`narrow`,context:`formatting`})}}validate(o,e){return e>=0&&e<=11}set(o,e,t){return o.setMonth(t,1),o.setHours(0,0,0,0),o}};var Yi=class extends C{priority=110;parse(o,e,t){let i=a=>a-1;switch(e){case`L`:return $(L(B.month,o),i);case`LL`:return $(D(2,o),i);case`Lo`:return $(t.ordinalNumber(o,{unit:`month`}),i);case`LLL`:return t.month(o,{width:`abbreviated`,context:`standalone`})||t.month(o,{width:`narrow`,context:`standalone`});case`LLLLL`:return t.month(o,{width:`narrow`,context:`standalone`});default:return t.month(o,{width:`wide`,context:`standalone`})||t.month(o,{width:`abbreviated`,context:`standalone`})||t.month(o,{width:`narrow`,context:`standalone`})}}validate(o,e){return e>=0&&e<=11}set(o,e,t){return o.setMonth(t,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`q`,`Q`,`M`,`w`,`I`,`D`,`i`,`e`,`c`,`t`,`T`]};function Ur(n,o,e){let t=Y(n,e?.in),i=bN(t,e)-o;return t.setDate(t.getDate()-i*7),Y(t,e?.in)}var Zi=class extends C{priority=100;parse(o,e,t){switch(e){case`w`:return L(B.week,o);case`wo`:return t.ordinalNumber(o,{unit:`week`});default:return D(e.length,o)}}validate(o,e){return e>=1&&e<=53}set(o,e,t,i){return Rr(Ur(o,t,i),i)}incompatibleTokens=[`y`,`R`,`u`,`q`,`Q`,`M`,`L`,`I`,`d`,`D`,`i`,`t`,`T`]};function Br(n,o,e){let t=Y(n,e?.in),i=ON(t,e)-o;return t.setDate(t.getDate()-i*7),t}var Ji=class extends C{priority=100;parse(o,e,t){switch(e){case`I`:return L(B.week,o);case`Io`:return t.ordinalNumber(o,{unit:`week`});default:return D(e.length,o)}}validate(o,e){return e>=1&&e<=53}set(o,e,t){return Oi(Br(o,t))}incompatibleTokens=[`y`,`Y`,`u`,`q`,`Q`,`M`,`L`,`w`,`d`,`D`,`e`,`c`,`t`,`T`]};var Oa=[31,28,31,30,31,30,31,31,30,31,30,31];var Ra=[31,29,31,30,31,30,31,31,30,31,30,31];var en=class extends C{priority=90;subPriority=1;parse(o,e,t){switch(e){case`d`:return L(B.date,o);case`do`:return t.ordinalNumber(o,{unit:`date`});default:return D(e.length,o)}}validate(o,e){let i=Wi(o.getFullYear()),a=o.getMonth();return i?e>=1&&e<=Ra[a]:e>=1&&e<=Oa[a]}set(o,e,t){return o.setDate(t),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`q`,`Q`,`w`,`I`,`D`,`i`,`e`,`c`,`t`,`T`]};var tn=class extends C{priority=90;subpriority=1;parse(o,e,t){switch(e){case`D`:case`DD`:return L(B.dayOfYear,o);case`Do`:return t.ordinalNumber(o,{unit:`date`});default:return D(e.length,o)}}validate(o,e){return Wi(o.getFullYear())?e>=1&&e<=366:e>=1&&e<=365}set(o,e,t){return o.setMonth(0,t),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`q`,`Q`,`M`,`L`,`w`,`I`,`d`,`E`,`i`,`e`,`c`,`t`,`T`]};function Ht(n,o,e){let t=rn$1(),i=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,a=Y(n,e?.in),d=a.getDay(),R=(o%7+7)%7,Y$1=7-i;return gN(a,o<0||o>6?o-(d+Y$1)%7:(R+Y$1)%7-(d+Y$1)%7,e)}var nn=class extends C{priority=90;parse(o,e,t){switch(e){case`E`:case`EE`:case`EEE`:return t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`});case`EEEEE`:return t.day(o,{width:`narrow`,context:`formatting`});case`EEEEEE`:return t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`});default:return t.day(o,{width:`wide`,context:`formatting`})||t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`})}}validate(o,e){return e>=0&&e<=6}set(o,e,t,i){return o=Ht(o,t,i),o.setHours(0,0,0,0),o}incompatibleTokens=[`D`,`i`,`e`,`c`,`t`,`T`]};var on=class extends C{priority=90;parse(o,e,t,i){let a=d=>{let x=Math.floor((d-1)/7)*7;return(d+i.weekStartsOn+6)%7+x};switch(e){case`e`:case`ee`:return $(D(e.length,o),a);case`eo`:return $(t.ordinalNumber(o,{unit:`day`}),a);case`eee`:return t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`});case`eeeee`:return t.day(o,{width:`narrow`,context:`formatting`});case`eeeeee`:return t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`});default:return t.day(o,{width:`wide`,context:`formatting`})||t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`})}}validate(o,e){return e>=0&&e<=6}set(o,e,t,i){return o=Ht(o,t,i),o.setHours(0,0,0,0),o}incompatibleTokens=[`y`,`R`,`u`,`q`,`Q`,`M`,`L`,`I`,`d`,`D`,`E`,`i`,`c`,`t`,`T`]};var rn=class extends C{priority=90;parse(o,e,t,i){let a=d=>{let x=Math.floor((d-1)/7)*7;return(d+i.weekStartsOn+6)%7+x};switch(e){case`c`:case`cc`:return $(D(e.length,o),a);case`co`:return $(t.ordinalNumber(o,{unit:`day`}),a);case`ccc`:return t.day(o,{width:`abbreviated`,context:`standalone`})||t.day(o,{width:`short`,context:`standalone`})||t.day(o,{width:`narrow`,context:`standalone`});case`ccccc`:return t.day(o,{width:`narrow`,context:`standalone`});case`cccccc`:return t.day(o,{width:`short`,context:`standalone`})||t.day(o,{width:`narrow`,context:`standalone`});default:return t.day(o,{width:`wide`,context:`standalone`})||t.day(o,{width:`abbreviated`,context:`standalone`})||t.day(o,{width:`short`,context:`standalone`})||t.day(o,{width:`narrow`,context:`standalone`})}}validate(o,e){return e>=0&&e<=6}set(o,e,t,i){return o=Ht(o,t,i),o.setHours(0,0,0,0),o}incompatibleTokens=[`y`,`R`,`u`,`q`,`Q`,`M`,`L`,`I`,`d`,`D`,`E`,`i`,`e`,`t`,`T`]};function zr(n,o){let e=Y(n,o?.in).getDay();return e===0?7:e}function Gr(n,o,e){let t=Y(n,e?.in);return gN(t,o-zr(t,e),e)}var an=class extends C{priority=90;parse(o,e,t){let i=a=>a===0?7:a;switch(e){case`i`:case`ii`:return D(e.length,o);case`io`:return t.ordinalNumber(o,{unit:`day`});case`iii`:return $(t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`}),i);case`iiiii`:return $(t.day(o,{width:`narrow`,context:`formatting`}),i);case`iiiiii`:return $(t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`}),i);default:return $(t.day(o,{width:`wide`,context:`formatting`})||t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`}),i)}}validate(o,e){return e>=1&&e<=7}set(o,e,t){return o=Gr(o,t),o.setHours(0,0,0,0),o}incompatibleTokens=[`y`,`Y`,`u`,`q`,`Q`,`M`,`L`,`w`,`d`,`D`,`E`,`e`,`c`,`t`,`T`]};var sn=class extends C{priority=80;parse(o,e,t){switch(e){case`a`:case`aa`:case`aaa`:return t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`});case`aaaaa`:return t.dayPeriod(o,{width:`narrow`,context:`formatting`});default:return t.dayPeriod(o,{width:`wide`,context:`formatting`})||t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`})}}set(o,e,t){return o.setHours(Wt(t),0,0,0),o}incompatibleTokens=[`b`,`B`,`H`,`k`,`t`,`T`]};var ln=class extends C{priority=80;parse(o,e,t){switch(e){case`b`:case`bb`:case`bbb`:return t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`});case`bbbbb`:return t.dayPeriod(o,{width:`narrow`,context:`formatting`});default:return t.dayPeriod(o,{width:`wide`,context:`formatting`})||t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`})}}set(o,e,t){return o.setHours(Wt(t),0,0,0),o}incompatibleTokens=[`a`,`B`,`H`,`k`,`t`,`T`]};var cn=class extends C{priority=80;parse(o,e,t){switch(e){case`B`:case`BB`:case`BBB`:return t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`});case`BBBBB`:return t.dayPeriod(o,{width:`narrow`,context:`formatting`});default:return t.dayPeriod(o,{width:`wide`,context:`formatting`})||t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`})}}set(o,e,t){return o.setHours(Wt(t),0,0,0),o}incompatibleTokens=[`a`,`b`,`t`,`T`]};var dn=class extends C{priority=70;parse(o,e,t){switch(e){case`h`:return L(B.hour12h,o);case`ho`:return t.ordinalNumber(o,{unit:`hour`});default:return D(e.length,o)}}validate(o,e){return e>=1&&e<=12}set(o,e,t){let i=o.getHours()>=12;return i&&t<12?o.setHours(t+12,0,0,0):!i&&t===12?o.setHours(0,0,0,0):o.setHours(t,0,0,0),o}incompatibleTokens=[`H`,`K`,`k`,`t`,`T`]};var mn=class extends C{priority=70;parse(o,e,t){switch(e){case`H`:return L(B.hour23h,o);case`Ho`:return t.ordinalNumber(o,{unit:`hour`});default:return D(e.length,o)}}validate(o,e){return e>=0&&e<=23}set(o,e,t){return o.setHours(t,0,0,0),o}incompatibleTokens=[`a`,`b`,`h`,`K`,`k`,`t`,`T`]};var pn=class extends C{priority=70;parse(o,e,t){switch(e){case`K`:return L(B.hour11h,o);case`Ko`:return t.ordinalNumber(o,{unit:`hour`});default:return D(e.length,o)}}validate(o,e){return e>=0&&e<=11}set(o,e,t){return o.getHours()>=12&&t<12?o.setHours(t+12,0,0,0):o.setHours(t,0,0,0),o}incompatibleTokens=[`h`,`H`,`k`,`t`,`T`]};var un=class extends C{priority=70;parse(o,e,t){switch(e){case`k`:return L(B.hour24h,o);case`ko`:return t.ordinalNumber(o,{unit:`hour`});default:return D(e.length,o)}}validate(o,e){return e>=1&&e<=24}set(o,e,t){let i=t<=24?t%24:t;return o.setHours(i,0,0,0),o}incompatibleTokens=[`a`,`b`,`h`,`H`,`K`,`t`,`T`]};var _n=class extends C{priority=60;parse(o,e,t){switch(e){case`m`:return L(B.minute,o);case`mo`:return t.ordinalNumber(o,{unit:`minute`});default:return D(e.length,o)}}validate(o,e){return e>=0&&e<=59}set(o,e,t){return o.setMinutes(t,0,0),o}incompatibleTokens=[`t`,`T`]};var hn=class extends C{priority=50;parse(o,e,t){switch(e){case`s`:return L(B.second,o);case`so`:return t.ordinalNumber(o,{unit:`second`});default:return D(e.length,o)}}validate(o,e){return e>=0&&e<=59}set(o,e,t){return o.setSeconds(t,0),o}incompatibleTokens=[`t`,`T`]};var fn=class extends C{priority=30;parse(o,e){let t=i=>Math.trunc(i*Math.pow(10,-e.length+3));return $(D(e.length,o),t)}set(o,e,t){return o.setMilliseconds(t),o}incompatibleTokens=[`t`,`T`]};var gn=class extends C{priority=10;parse(o,e){switch(e){case`X`:return Ae(De.basicOptionalMinutes,o);case`XX`:return Ae(De.basic,o);case`XXXX`:return Ae(De.basicOptionalSeconds,o);case`XXXXX`:return Ae(De.extendedOptionalSeconds,o);default:return Ae(De.extended,o)}}set(o,e,t){return e.timestampIsSet?o:Oe(o,o.getTime()-Fy(o)-t)}incompatibleTokens=[`t`,`T`,`x`]};var bn=class extends C{priority=10;parse(o,e){switch(e){case`x`:return Ae(De.basicOptionalMinutes,o);case`xx`:return Ae(De.basic,o);case`xxxx`:return Ae(De.basicOptionalSeconds,o);case`xxxxx`:return Ae(De.extendedOptionalSeconds,o);default:return Ae(De.extended,o)}}set(o,e,t){return e.timestampIsSet?o:Oe(o,o.getTime()-Fy(o)-t)}incompatibleTokens=[`t`,`T`,`X`]};var vn=class extends C{priority=40;parse(o){return zi(o)}set(o,e,t){return[Oe(o,t*1e3),{timestampIsSet:!0}]}incompatibleTokens=`*`};var xn=class extends C{priority=20;parse(o){return zi(o)}set(o,e,t){return[Oe(o,t),{timestampIsSet:!0}]}incompatibleTokens=`*`};var Wr={G:new Bi,y:new Hi,Y:new qi,R:new ji,u:new $i,Q:new Ki,q:new Qi,M:new Xi,L:new Yi,w:new Zi,I:new Ji,d:new en,D:new tn,E:new nn,e:new on,c:new rn,i:new an,a:new sn,b:new ln,B:new cn,h:new dn,H:new mn,K:new pn,k:new un,m:new _n,s:new hn,S:new fn,X:new gn,x:new bn,t:new vn,T:new xn};var Da=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;var Aa=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;var Pa=/^'([^]*?)'?$/;var Fa=/''/g;var Va=/\S/;var La=/[a-zA-Z]/;function Hr(n,o,e,t){let i=()=>Oe(t?.in||e,NaN),a=Iae(),d=t?.locale??a.locale??rl$1,x=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,R=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0;if(!o)return n?i():Y(e,t?.in);let Y$2={firstWeekContainsDate:x,weekStartsOn:R,locale:d},oe=[new Ui(t?.in,e)],we=o.match(Aa).map(F=>{let K=F[0];if(K in kN){let Ne=kN[K];return Ne(F,d.formatLong)}return F}).join(``).match(Da),Ye=[];for(let F of we){!t?.useAdditionalWeekYearTokens&&FN(F)&&UN(F,o,n),!t?.useAdditionalDayOfYearTokens&&xN(F)&&UN(F,o,n);let K=F[0],Ne=Wr[K];if(Ne){let{incompatibleTokens:no}=Ne;if(Array.isArray(no)){let oo=Ye.find(ro=>no.includes(ro.token)||ro.token===K);if(oo)throw new RangeError(`The format string mustn't contain \`${oo.fullToken}\` and \`${F}\` at the same time`)}else if(Ne.incompatibleTokens===`*`&&Ye.length>0)throw new RangeError(`The format string mustn't contain \`${F}\` and any other token at the same time`);Ye.push({token:K,fullToken:F});let Nn=Ne.run(n,F,d.match,Y$2);if(!Nn)return i();oe.push(Nn.setter),n=Nn.rest}else{if(K.match(La))throw new RangeError("Format string contains an unescaped latin alphabet character `"+K+"`");if(F===`''`?F=`'`:K===`'`&&(F=Ua(F)),n.indexOf(F)===0)n=n.slice(F.length);else return i()}}if(n.length>0&&Va.test(n))return i();let Xt=oe.map(F=>F.priority).sort((F,K)=>K-F).filter((F,K,Ne)=>Ne.indexOf(F)===K).map(F=>oe.filter(K=>K.priority===F).sort((K,Ne)=>Ne.subPriority-K.subPriority)).map(F=>F[0]),Ze=Y(e,t?.in);if(isNaN(+Ze))return i();let Yt={};for(let F of Xt){if(!F.validate(Ze,Y$2))return i();let K=F.set(Ze,Yt,Y$2);Array.isArray(K)?(Ze=K[0],Object.assign(Yt,K[1])):Ze=K}return Ze}function Ua(n){return n.match(Pa)[1].replace(Fa,`'`)}var Ba=[`determinateSpinner`];function za(n,o){if(n&1&&(Pv(),ds$1(0,`svg`,11),PI(1,`circle`,12),Xa$1()),n&2){let e=dd();yn(`viewBox`,e._viewBox()),ni(),fd(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),yn(`r`,e._circleRadius())}}var Ga=new D$1(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:qr})});var qr=100;var Wa=10;var qt=(()=>{class n{_elementRef=p(ie);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=p(Ga),t=FB(),i=this._elementRef.nativeElement;this._noopAnimations=t===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=i.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&t===`reduced-motion`&&i.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=qr;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Wa)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(t){return new(t||n)};static ɵcmp=Ft({type:n,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(t,i){if(t&1&&Ts$1(Ba,5),t&2){let a;nc$1(a=rc$1())&&(i._determinateCircle=a.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(t,i){t&2&&(yn(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,i.mode===`determinate`?i.value:null)(`mode`,i.mode),Qg(`mat-`+i.color),fd(`width`,i.diameter,`px`)(`height`,i.diameter,`px`)(`--%NS%mat-progress-spinner-size`,i.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,i.diameter+`px`),_r(`_mat-animation-noopable`,i._noopAnimations)(`mdc-circular-progress--indeterminate`,i.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,qx],diameter:[2,`diameter`,`diameter`,qx],strokeWidth:[2,`strokeWidth`,`strokeWidth`,qx]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(t,i){if(t&1&&(Es$1(0,za,2,8,`ng-template`,null,0,ux),ds$1(2,`div`,2,1),Pv(),ds$1(4,`svg`,3),PI(5,`circle`,4),Xa$1()(),kv(),ds$1(6,`div`,5)(7,`div`,6)(8,`div`,7),xI(9,8),Xa$1(),ds$1(10,`div`,9),xI(11,8),Xa$1(),ds$1(12,`div`,10),xI(13,8),Xa$1()()()),t&2){let a=hk(1);ni(4),yn(`viewBox`,i._viewBox()),ni(),fd(`stroke-dasharray`,i._strokeCircumference(),`px`)(`stroke-dashoffset`,i._strokeDashOffset(),`px`)(`stroke-width`,i._circleStrokeWidth(),`%`),yn(`r`,i._circleRadius()),ni(4),LI(`ngTemplateOutlet`,a),ni(2),LI(`ngTemplateOutlet`,a),ni(2),LI(`ngTemplateOutlet`,a)}},dependencies:[LF],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return n})();var ut=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Ae$1({type:n});static ɵinj=Ie({imports:[Si]})}return n})();var ri=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new N;bulk={select:o=>this._select(o),deselect:o=>this._deselect(o),setSelection:o=>this._setSelection(o)};constructor(o=!1,e,t=!0,i){this._multiple=o,this._emitChanges=t,this.compareWith=i,e&&e.length&&(o?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...o){return this._select(o)}deselect(...o){return this._deselect(o)}setSelection(...o){return this._setSelection(o)}toggle(o){return this.isSelected(o)?this.deselect(o):this.select(o)}clear(o=!0){this._unmarkAll();let e=this._hasQueuedChanges();return o&&this._emitChangeEvent(),e}isSelected(o){return this._selection.has(this._getConcreteValue(o))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(o){this._multiple&&this.selected&&this._selected.sort(o)}isMultipleSelection(){return this._multiple}_select(o){this._verifyValueAssignment(o),o.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(o){this._verifyValueAssignment(o),o.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(o){this._verifyValueAssignment(o);let e=this.selected,t=new Set(o.map(a=>this._getConcreteValue(a)));o.forEach(a=>this._markSelected(a)),e.filter(a=>!t.has(this._getConcreteValue(a,t))).forEach(a=>this._unmarkSelected(a));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(o){o=this._getConcreteValue(o),this.isSelected(o)||(this._multiple||this._unmarkAll(),this.isSelected(o)||this._selection.add(o),this._emitChanges&&this._selectedToEmit.push(o))}_unmarkSelected(o){o=this._getConcreteValue(o),this.isSelected(o)&&(this._selection.delete(o),this._emitChanges&&this._deselectedToEmit.push(o))}_unmarkAll(){this.isEmpty()||this._selection.forEach(o=>this._unmarkSelected(o))}_verifyValueAssignment(o){o.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(o,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(o,t))return t;return o}else return o}};var jn=(()=>{class n{_listeners=[];notify(e,t){for(let i of this._listeners)i(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(t){return new(t||n)};static ɵprov=P({token:n,factory:n.ɵfac})}return n})();var Ka=[`trigger`];var Qa=[`panel`];var Xa=[[[`mat-select-trigger`]],`*`];var Ya=[`mat-select-trigger`,`*`];function Za(n,o){if(n&1&&(ds$1(0,`span`,4),Xg(1),Xa$1()),n&2){let e=dd();ni(),tA(e.placeholder)}}function Ja(n,o){n&1&&tc$1(0)}function es(n,o){if(n&1&&(ds$1(0,`span`,11),Xg(1),Xa$1()),n&2){let e=dd(2);ni(),tA(e.triggerValue)}}function ts(n,o){if(n&1&&(ds$1(0,`span`,5),ld(1,Ja,1,0)(2,es,2,1,`span`,11),Xa$1()),n&2){let e=dd();ni(),ud(e.customTrigger?1:2)}}function is(n,o){if(n&1){let e=ok();ds$1(0,`div`,12,1),Qt$1(`keydown`,function(i){Dv(e);return Tv(dd()._handleKeydown(i))}),tc$1(2,1),Xa$1()}if(n&2){let e=dd();Qg(e.panelClass),_r(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),yn(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var ns=new D$1(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=p($$1);return()=>fy(n)}});var os=new D$1(`MAT_SELECT_CONFIG`);var Qr=new D$1(`MatSelectTrigger`);var Kn=class{source;value;constructor(o,e){this.source=o,this.value=e}};var jt=(()=>{class n{_viewportRuler=p(vi);_changeDetectorRef=p(Sn$1);_elementRef=p(ie);_dir=p(Ar,{optional:!0});_idGenerator=p(Cr);_renderer=p(We);_parentFormField=p(Ye$1,{optional:!0});ngControl=p(no,{self:!0,optional:!0});_liveAnnouncer=p(bB);_defaultOptions=p(os,{optional:!0});_animationsDisabled=Oy();_popoverLocation;_initialized=new N;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,a=kK(e,this.options,this.optionGroups),d=t._getHostElement();e===0&&a===1?i.scrollTop=0:i.scrollTop=MK(d.offsetTop,d.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Kn(this,e)}_scrollStrategyFactory=p(ns);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new N;_errorStateTracker;stateChanges=new N;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Ee(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(J_.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=aa(()=>{let e=this.options;return e?e.changes.pipe(Mn$1(e),ua$1(()=>Jh(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(ua$1(()=>this.optionSelectionChanges))});openedChange=new re;_openedStream=this.openedChange.pipe(Ue(e=>e),be$1(()=>{}));_closedStream=this.openedChange.pipe(Ue(e=>!e),be$1(()=>{}));selectionChange=new re;valueChange=new re;constructor(){let e=p(mK),t=p(pU,{optional:!0}),i=p(EU,{optional:!0}),a=p(new yA(`tabindex`),{optional:!0}),d=p(my,{optional:!0}),x=p(Le$1,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new oT(e,x||this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=d?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new ri(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(cr(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(cr(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Mn$1(null),cr(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute(`aria-labelledby`,e):i.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(ot(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,a=>{a.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,a=t===13||t===32,d=this._keyManager;if(!d.isTyping()&&a&&!lo(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let x=this.selected;d.onKeydown(e);let R=this.selected;R&&x!==R&&this._liveAnnouncer.announce(R.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,a=i===40||i===38,d=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!d&&(i===13||i===32)&&t.activeItem&&!lo(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!d&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let x=this.options.some(R=>!R.disabled&&!R.selected);this.options.forEach(R=>{R.disabled||(x?R.select():R.deselect())})}else{let x=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==x&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!lo(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof uy?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Ny(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Jh(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(cr(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Jh(...this.options.map(t=>t._stateChanges)).pipe(cr(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=Qn(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||n)};static ɵcmp=Ft({type:n,selectors:[[`mat-select`]],contentQueries:function(t,i,a){if(t&1&&BI(a,Qr,5)(a,rT,5)(a,aM,5),t&2){let d;nc$1(d=rc$1())&&(i.customTrigger=d.first),nc$1(d=rc$1())&&(i.options=d),nc$1(d=rc$1())&&(i.optionGroups=d)}},viewQuery:function(t,i){if(t&1&&Ts$1(Ka,5)(Qa,5)(dB,5),t&2){let a;nc$1(a=rc$1())&&(i.trigger=a.first),nc$1(a=rc$1())&&(i.panel=a.first),nc$1(a=rc$1())&&(i._overlayDir=a.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(t,i){t&1&&Qt$1(`keydown`,function(d){return i._handleKeydown(d)})(`focus`,function(){return i._onFocus()})(`blur`,function(){return i._onBlur()}),t&2&&(yn(`id`,i.id)(`tabindex`,i.disabled?-1:i.tabIndex)(`aria-controls`,i.panelOpen?i.id+`-panel`:null)(`aria-expanded`,i.panelOpen)(`aria-label`,i.ariaLabel||null)(`aria-required`,i.required.toString())(`aria-disabled`,i.disabled.toString())(`aria-invalid`,i.errorState)(`aria-activedescendant`,i._getAriaActiveDescendant()),_r(`mat-mdc-select-disabled`,i.disabled)(`mat-mdc-select-invalid`,i.errorState)(`mat-mdc-select-required`,i.required)(`mat-mdc-select-empty`,i.empty)(`mat-mdc-select-multiple`,i.multiple)(`mat-select-open`,i.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,ct],disableRipple:[2,`disableRipple`,`disableRipple`,ct],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:qx(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,ct],placeholder:`placeholder`,required:[2,`required`,`required`,ct],multiple:[2,`multiple`,`multiple`,ct],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,ct],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,qx],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,ct]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[Qe([{provide:Qe$1,useExisting:n},{provide:oM,useExisting:n}]),dt],ngContentSelectors:Ya,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(t,i){if(t&1&&(ec$1(Xa),ds$1(0,`div`,2,0),Qt$1(`click`,function(){return i.open()}),ds$1(3,`div`,3),ld(4,Za,2,1,`span`,4)(5,ts,3,1,`span`,5),Xa$1(),ds$1(6,`div`,6)(7,`div`,7),Pv(),ds$1(8,`svg`,8),PI(9,`path`,9),Xa$1()()()(),Es$1(10,is,3,16,`ng-template`,10),Qt$1(`detach`,function(){return i.close()})(`backdropClick`,function(){return i.close()})(`overlayKeydown`,function(d){return i._handleOverlayKeydown(d)})),t&2){let a=hk(1);ni(3),yn(`id`,i._valueId),ni(),ud(i.empty?4:5),ni(6),LI(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,i._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,i._scrollStrategy)(`cdkConnectedOverlayOrigin`,i._preferredOverlayOrigin||a)(`cdkConnectedOverlayPositions`,i._positions)(`cdkConnectedOverlayWidth`,i._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,i._popoverLocation)}},dependencies:[uy,dB],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return n})();var e_=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=L$1({type:n,selectors:[[`mat-select-trigger`]],features:[Qe([{provide:Qr,useExisting:n}])]})}return n})();var $t=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Ae$1({type:n});static ɵinj=Ie({imports:[el$1,jK,Si,ny,Wt$1,jK]})}return n})();var rs=[`input`];var as=[`*`];var Xn={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var ss=new D$1(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>Xn});var be=(function(n){return n[n.Init=0]=`Init`,n[n.Checked=1]=`Checked`,n[n.Unchecked=2]=`Unchecked`,n[n.Indeterminate=3]=`Indeterminate`,n})(be||{});var Yn=class{source;checked};var ai=(()=>{class n{_elementRef=p(ie);_changeDetectorRef=p(Sn$1);_ngZone=p(Z);_animationsDisabled=Oy();_options=p(ss,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new Yn;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new re;indeterminateChange=new re;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=be.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){p(ao).load(sl$1);let e=p(new yA(`tabindex`),{optional:!0});this._options=this._options||Xn,this.color=this._options.color||Xn.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=p(Cr).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(be.Indeterminate):this._transitionCheckState(this.checked?be.Checked:be.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=Ee(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,i=this._getAnimationTargetElement();if(!(t===e||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let a=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(a)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?be.Checked:be.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return``;switch(e){case be.Init:if(t===be.Checked)return this._animationClasses.uncheckedToChecked;if(t==be.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case be.Unchecked:return t===be.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case be.Checked:return t===be.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case be.Indeterminate:return t===be.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(t){return new(t||n)};static ɵcmp=Ft({type:n,selectors:[[`mat-checkbox`]],viewQuery:function(t,i){if(t&1&&Ts$1(rs,5),t&2){let a;nc$1(a=rc$1())&&(i._inputElement=a.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(t,i){t&2&&(Ds$1(`id`,i.id),yn(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),Qg(i.color?`mat-`+i.color:`mat-accent`),_r(`_mat-animation-noopable`,i._animationsDisabled)(`mdc-checkbox--disabled`,i.disabled)(`mat-mdc-checkbox-disabled`,i.disabled)(`mat-mdc-checkbox-checked`,i.checked)(`mat-mdc-checkbox-disabled-interactive`,i.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,ct],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,ct],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,ct],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?void 0:qx(e)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ct],checked:[2,`checked`,`checked`,ct],disabled:[2,`disabled`,`disabled`,ct],indeterminate:[2,`indeterminate`,`indeterminate`,ct]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[Qe([{provide:li,useExisting:Ye(()=>n),multi:!0},{provide:ro,useExisting:n,multi:!0}]),dt],ngContentSelectors:as,decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,i){if(t&1&&(ec$1(),ds$1(0,`label`,3),Qt$1(`click`,function(d){return i._preventBubblingFromLabel(d)}),ds$1(1,`span`,4,0),PI(3,`span`,5),ds$1(4,`input`,6,1),Qt$1(`blur`,function(){return i._onBlur()})(`click`,function(){return i._onInputClick()})(`change`,function(d){return i._onInteractionEvent(d)}),Xa$1(),PI(6,`span`,7),ds$1(7,`span`,8),Pv(),ds$1(8,`svg`,9),PI(9,`path`,10),Xa$1(),kv(),PI(10,`span`,11),Xa$1(),PI(11,`span`,12),Xa$1(),ds$1(12,`span`,13,2),tc$1(14),Xa$1()()),t&2){let a=hk(2);LI(`labelPosition`,i.labelPosition)(`for`,i.inputId),ni(4),_r(`mdc-checkbox--selected`,i.checked),LI(`checked`,i.checked)(`indeterminate`,i.indeterminate)(`disabled`,i.disabled&&!i.disabledInteractive)(`id`,i.inputId)(`required`,i.required)(`tabIndex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex),yn(`aria-label`,i.ariaLabel||null)(`aria-labelledby`,i.ariaLabelledby)(`aria-describedby`,i.ariaDescribedby)(`aria-checked`,i.indeterminate?`mixed`:null)(`aria-controls`,i.ariaControls)(`aria-disabled`,i.disabled&&i.disabledInteractive?!0:null)(`aria-expanded`,i.ariaExpanded)(`aria-owns`,i.ariaOwns)(`name`,i.name)(`value`,i.value),ni(7),LI(`matRippleTrigger`,a)(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleCentered`,!0)}},dependencies:[np,qK],styles:[`.mdc-checkbox {
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
`],encapsulation:2})}return n})();var kn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Ae$1({type:n});static ɵinj=Ie({imports:[ai,Si]})}return n})();var ls=[`*`];function cs(n,o){if(n&1&&(ds$1(0,`div`,3),Xg(1),Xa$1()),n&2){let e=dd();ni(),tA(e.info())}}function ds(n,o){if(n&1&&(ds$1(0,`icon`,4),Xg(1,`info`),Xa$1()),n&2)LI(`matTooltip`,dd().info())}function ms(n,o){n&1&&PI(0,`div`,5)}function ps(n,o){if(n&1&&(ds$1(0,`div`,6)(1,`div`,8)(2,`div`,9)(3,`icon`),Xg(4),Xa$1()()()()),n&2){let e=dd();ni(),_r(`bg-base-200`,!e.value())(`bg-info`,e.value())(`border-info!`,e.value()),ni(),_r(`left-1`,!e.value())(`left-5`,e.value())(`bg-base-400`,!e.value())(`bg-info-light`,e.value()),ni(2),tA(e.value()?`done`:`remove`)}}function us(n,o){if(n&1){let e=ok();ds$1(0,`mat-checkbox`,10),Qt$1(`ngModelChange`,function(i){Dv(e);return Tv(dd().setValue(i))}),Xa$1(),EP()}if(n&2)LI(`ngModel`,dd().value()),SP()}var Yr=(()=>{class n{constructor(){this.toggle=v_(void 0),this.label=v_(void 0),this.info=v_(void 0),this.inline=v_(!0),this.value=Ee(void 0),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e}setValue(e){this.value.set(e),this._onChange&&this._onChange(e)}writeValue(e){this.value.set(e)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`settings-toggle`]],inputs:{toggle:[1,`toggle`],label:[1,`label`],info:[1,`info`],inline:[1,`inline`]},features:[Qe([{provide:li,useExisting:Ye(()=>n),multi:!0}])],ngContentSelectors:ls,decls:11,vars:13,consts:[[`type`,`button`,`matRipple`,``,1,`hover:bg-base-200`,`relative`,`flex`,`flex-1`,`items-center`,`space-x-2`,`overflow-hidden`,`rounded-sm`,`border`,`py-1`,`pr-1`,`pl-2`,3,`click`],[1,`z-10`,`flex`,`flex-1`,`items-center`,`space-x-2`,`px-2`,`text-left`],[1,`flex`,`flex-col`,`justify-center`,`w-full`,`leading-none`,`h-full`],[1,`text-xs`,`opacity-30`],[3,`matTooltip`],[1,`bg-info`,`absolute`,`inset-0`,`z-0`,`m-0!`,`opacity-10`],[1,`px-2`],[1,`pointer-events-none`,3,`ngModel`],[`toggle`,``,1,`border-base-400`,`relative`,`h-8`,`w-12`,`rounded-full`,`border-2`],[1,`absolute`,`top-1/2`,`flex`,`h-6`,`w-6`,`-translate-x-0.5`,`-translate-y-1/2`,`items-center`,`justify-center`,`rounded-full`,`text-black`,`shadow-sm`],[1,`pointer-events-none`,3,`ngModelChange`,`ngModel`]],template:function(t,i){t&1&&(ec$1(),ds$1(0,`button`,0),Qt$1(`click`,function(){return i.setValue(!i.value())}),ds$1(1,`div`,1)(2,`div`,2)(3,`div`),Xg(4),tc$1(5),Xa$1(),ld(6,cs,2,1,`div`,3),Xa$1(),ld(7,ds,2,1,`icon`,4),Xa$1(),ld(8,ms,1,0,`div`,5),ld(9,ps,5,15,`div`,6)(10,us,1,1,`mat-checkbox`,7),Xa$1()),t&2&&(_r(`border-base-300`,!i.value())(`border-info`,i.value()),ni(),_r(`py-2`,!i.inline())(`py-1`,!i.inline()),ni(3),tA(i.label()),ni(2),ud(i.info()&&i.inline()?6:-1),ni(),ud(i.info()&&!i.inline()?7:-1),ni(),ud(i.value()?8:-1),ni(),ud(i.toggle()?9:10))},dependencies:[kn,ai,TX,_X,SU,Noe,Yt,mt],styles:[`[_nghost-%COMP%]{display:flex}[toggle][_ngcontent-%COMP%]{transition:background .2s,left .2s}
/*# sourceMappingURL=settings-toggle.component.css.map */`]})}}return n})();var _s=64;var hs=64;var fs=30*1e3;var gs=`PlaceOS.image-cache-v1`;var bs=`PlaceOS.image-cache-keys-v1`;var Xe=new Map;var Zn=new Map;var yt=new Map;var Zr=!1;function vs(){if(!Zr&&(Zr=!0,typeof caches<`u`&&caches.delete(gs).catch(()=>!1),typeof sessionStorage<`u`))try{sessionStorage.removeItem(bs)}catch{}}function Jn(n){let o=Xe.get(n);if(o)return Xe.delete(n),Xe.set(n,o),o}function xs(n,o){let e=Xe.get(n);for(e&&e!==o&&URL.revokeObjectURL(e),Xe.delete(n),Xe.set(n,o);Xe.size>_s;){let t=Xe.keys().next().value;if(!t)break;let i=Xe.get(t);Xe.delete(t),i&&URL.revokeObjectURL(i)}return o}function ks(n){for(yt.delete(n),yt.set(n,Date.now()+fs);yt.size>hs;){let o=yt.keys().next().value;if(!o)break;yt.delete(o)}}function ys(n){let o=tn$1();document.cookie=`${o===`x-api-key`?`api-key=`+encodeURIComponent(Fc()):`bearer_token=`+encodeURIComponent(o)};max-age=30;path=${n};samesite=strict;${location.protocol===`https:`?`secure;`:``}`}function Cs(){let n=tn$1();return n===`x-api-key`?{"X-API-Key":Fc()}:{Authorization:`Bearer ${n}`}}function Jr(n,o){return ta(n,()=>(ys(o),fetch(n)))}function ea(n){return ta(n,()=>fetch(n,{headers:Cs()}))}async function ta(n,o){vs();let e=Jn(n);if(e)return e;if((yt.get(n)||0)>Date.now())throw new Error(`Image load is in retry cooldown`);yt.delete(n);let i=Zn.get(n);if(i)return i;let a=o().then(async d=>{if(!d?.ok)throw new Error(`Failed to fetch image: ${d?.status}`);return xs(n,URL.createObjectURL(await d.blob()))}).catch(d=>{throw ks(n),d}).finally(()=>Zn.delete(n));return Zn.set(n,a),a}var _t=(()=>{class n extends Ge{constructor(){super(...arguments),this._element=p(ie),this._observer=null,this._source_version=0,this.source=v_(void 0)}ngOnChanges(e){if(!e.source)return;this._source_version+=1,this.clearTimeout(`load`),this._observer?.disconnect(),this._observer=null;let t=this.source();if(t){if(!this._isLocalUrl(t)){this._element.nativeElement.src=t;return}this._loadWhenVisible(t,this._source_version)}}ngOnDestroy(){this._observer?.disconnect(),this._observer=null,super.ngOnDestroy()}_loadWhenVisible(e,t){if(typeof IntersectionObserver>`u`){this._loadImage(e,t);return}this._observer=new IntersectionObserver(i=>{i.some(({isIntersecting:a})=>a)&&(this._observer?.disconnect(),this._observer=null,this._loadImage(e,t))},{rootMargin:`300px`}),this._observer.observe(this._element.nativeElement)}async _loadImage(e,t){if(t!==this._source_version||e!==this.source())return;if(!gf()){this.timeout(`load`,()=>{this._loadImage(e,t)},300);return}let i=Jn(e);if(i){this._element.nativeElement.src=i;return}let a=e.includes(`/api/engine/v2/uploads`)||e.includes(`/api/engine/v2/signage`);try{let d=a?await Jr(e,this._cookiePath(e)):await ea(e);t===this._source_version&&e===this.source()&&(this._element.nativeElement.src=d)}catch(d){t===this._source_version&&this._element.nativeElement.dispatchEvent(new ErrorEvent(`error`,{error:d}))}}_isLocalUrl(e){try{return new URL(e,location.href).origin===location.origin}catch{return!1}}_cookiePath(e){return e.includes(`/api/engine/v2/uploads`)?`/api/engine/v2/uploads`:`/api/engine/v2/signage`}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=tt(n)))(i||n)}})()}static{this.ɵdir=L$1({type:n,selectors:[[`img`,`auth`,``],[`video`,`auth`,``],[`audio`,`auth`,``]],inputs:{source:[1,`source`]},features:[fe,dt]})}}return n})();var Ss=[`*`];function Ms(n,o){n&1&&(ds$1(0,`button`,7)(1,`icon`),Xg(2,`close`),Xa$1()())}function ws(n,o){if(n&1&&ld(0,Ms,3,0,`button`,7),n&2)ud(dd(2).loading()?-1:0)}function Ts(n,o){if(n&1&&(ds$1(0,`a`,8)(1,`icon`),Xg(2,`close`),Xa$1()()),n&2)LI(`routerLink`,dd(3).close())}function Es(n,o){if(n&1&&ld(0,Ts,3,1,`a`,8),n&2)ud(dd(2).loading()?-1:0)}function Is(n,o){if(n&1&&ld(0,ws,1,1)(1,Es,1,1),n&2)ud(dd().close()?.length?1:0)}function Ns(n,o){n&1&&(tc$1(0),PI(1,`div`,9))}function Os(n,o){if(n&1&&(ds$1(0,`div`,5),PI(1,`mat-spinner`,10),ds$1(2,`p`,11),Xg(3),Xa$1()()),n&2){let e=dd();ni(),LI(`diameter`,32),ni(2),tA(e.loading())}}function Rs(n,o){if(n&1&&(ds$1(0,`kbd`,14),Xg(1),Xa$1()),n&2){let e=dd(2);ni(),tA(e.confirm_hotkey())}}function Ds(n,o){if(n&1){let e=ok();ds$1(0,`footer`,12)(1,`button`,13),Qt$1(`click`,function(){Dv(e);return Tv(dd().confirm.emit())}),Xg(2),Jg(3,`translate`),ld(4,Rs,2,1,`kbd`,14),Xa$1()()}if(n&2){let e=dd();_r(`max-w-156`,!e.full_width()),ni(),LI(`disabled`,e.confirm_disabled()),ni(),oc$1(` `,e.confirm_text()||cx(3,5,`COMMON.SAVE`),` `),ni(2),ud(e.confirm_hotkey()?4:-1)}}var Cn=(()=>{class n{constructor(){this.loading=v_(``),this.heading=v_(`Fullscreen Modal`),this.confirm_text=v_(``),this.confirm_hotkey=v_(``),this.confirm_disabled=v_(!1),this.close=v_([]),this.hide_confirm=v_(!1),this.hide_close=v_(!1),this.full_width=v_(!1),this.confirm=mZ(),this.closed=mZ()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`fullscreen-modal-shell`],[``,`fs-modal-shell`,``]],inputs:{loading:[1,`loading`],heading:[1,`heading`],confirm_text:[1,`confirm_text`],confirm_hotkey:[1,`confirm_hotkey`],confirm_disabled:[1,`confirm_disabled`],close:[1,`close`],hide_confirm:[1,`hide_confirm`],hide_close:[1,`hide_close`],full_width:[1,`full_width`]},outputs:{confirm:`confirm`,closed:`closed`},ngContentSelectors:Ss,decls:10,vars:14,consts:[[`cdkScrollable`,``,1,`bg-base-200`,`fixed`,`inset-0`,`flex`,`flex-col`,`items-center`,`overflow-auto`,`px-2`],[1,`border-base-300`,`bg-base-100`,`fixed`,`top-0`,`mx-auto`,`h-screen`,`max-w-full`,`border-x`],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`mx-auto`,`my-2`,`flex`,`h-14`,`w-full`,`items-center`,`justify-between`,`rounded-sm`,`border-none`,`px-4`,`py-2`],[1,`flex`,`items-center`,`text-xl`,`font-medium`,`capitalize`,3,`innerHTML`],[1,`z-0`,`mx-auto`,`h-1/2`,`w-full`,`flex-1`,`space-y-8`,`p-2`],[1,`flex`,`h-1/2`,`w-full`,`flex-1`,`flex-col`,`items-center`,`justify-center`,`space-y-4`,`p-12`],[1,`bg-base-200`,`fixed`,`bottom-0`,`left-1/2`,`z-10`,`mx-auto`,`my-2`,`flex`,`w-full`,`-translate-x-1/2`,`items-center`,`justify-end`,`rounded-sm`,`border-none`,`px-4`,`py-2`,3,`max-w-156`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[`icon`,``,`matRipple`,``,3,`routerLink`],[1,`h-24`,`w-full`],[3,`diameter`],[1,`text-center`,`opacity-50`],[1,`bg-base-200`,`fixed`,`bottom-0`,`left-1/2`,`z-10`,`mx-auto`,`my-2`,`flex`,`w-full`,`-translate-x-1/2`,`items-center`,`justify-end`,`rounded-sm`,`border-none`,`px-4`,`py-2`],[`btn`,``,`matRipple`,``,1,`flex`,`min-w-32`,`items-center`,`justify-center`,`gap-2`,3,`click`,`disabled`],[1,`border-base-300`,`bg-base-100`,`text-base-content`,`rounded`,`border`,`px-2`,`py-1`,`text-xs`,`leading-none`,`shadow-sm`]],template:function(t,i){t&1&&(ec$1(),ds$1(0,`div`,0),PI(1,`div`,1),ds$1(2,`header`,2),PI(3,`h2`,3),Jg(4,`sanitize`),ld(5,Is,2,1),Xa$1(),ds$1(6,`main`,4),ld(7,Ns,2,0)(8,Os,4,2,`div`,5),Xa$1(),ld(9,Ds,5,7,`footer`,6),Xa$1()),t&2&&(ni(),_r(`w-160`,!i.full_width())(`w-full`,i.full_width()),ni(),_r(`max-w-156`,!i.full_width()),ni(),LI(`innerHTML`,cx(4,12,i.heading()),jM),ni(2),ud(i.hide_close()?-1:5),ni(),_r(`max-w-156`,!i.full_width()),ni(),ud(i.loading()?8:7),ni(2),ud(!i.loading()&&!i.hide_confirm()?9:-1))},dependencies:[ry,ut,qt,Noe,yoe,Eoe,Da$1,np,pA,Jc,f,E],styles:[`main[_ngcontent-%COMP%]{scroll-margin-top:60px}
/*# sourceMappingURL=fullscreen-modal-shell.component.css.map */`]})}}return n})();var As=[`input`];var Ps=[`formField`];var Fs=[`*`];var Sn=class{source;value;constructor(o,e){this.source=o,this.value=e}};var Vs={provide:li,useExisting:Ye(()=>si),multi:!0};var na=new D$1(`MatRadioGroup`);var Ls=new D$1(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var si=(()=>{class n{_changeDetector=p(Sn$1);_value=null;_name=p(Cr).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new re;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Sn(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(t){return new(t||n)};static ɵdir=L$1({type:n,selectors:[[`mat-radio-group`]],contentQueries:function(t,i,a){if(t&1&&BI(a,Kt,5),t&2){let d;nc$1(d=rc$1())&&(i._radios=d)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,ct],required:[2,`required`,`required`,ct],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ct]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[Qe([Vs,{provide:na,useExisting:n}])]})}return n})();var Kt=(()=>{class n{_elementRef=p(ie);_changeDetector=p(Sn$1);_focusMonitor=p(rh);_radioDispatcher=p(jn);_defaultOptions=p(Ls,{optional:!0});_ngZone=p(Z);_renderer=p(We);_uniqueId=p(Cr).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new re;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=Oy();_injector=p($$1);constructor(){p(ao).load(sl$1);let e=p(na,{optional:!0}),t=p(new yA(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=qx(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new Sn(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let i=this._inputElement?.nativeElement;i&&(i.setAttribute(`tabindex`,t+``),this._previousTabIndex=t,qt$1(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===i&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===i&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(t){return new(t||n)};static ɵcmp=Ft({type:n,selectors:[[`mat-radio-button`]],viewQuery:function(t,i){if(t&1&&Ts$1(As,5)(Ps,7,ie),t&2){let a;nc$1(a=rc$1())&&(i._inputElement=a.first),nc$1(a=rc$1())&&(i._rippleTrigger=a.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(t,i){t&1&&Qt$1(`focus`,function(){return i._inputElement.nativeElement.focus()}),t&2&&(yn(`id`,i.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),_r(`mat-primary`,i.color===`primary`)(`mat-accent`,i.color===`accent`)(`mat-warn`,i.color===`warn`)(`mat-mdc-radio-checked`,i.checked)(`mat-mdc-radio-disabled`,i.disabled)(`mat-mdc-radio-disabled-interactive`,i.disabledInteractive)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,ct],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:qx(e)],checked:[2,`checked`,`checked`,ct],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,ct],required:[2,`required`,`required`,ct],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ct]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:Fs,decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,i){t&1&&(ec$1(),ds$1(0,`label`,2,0)(2,`span`,3),PI(3,`span`,4),ds$1(4,`input`,5,1),Qt$1(`change`,function(d){return i._onInputInteraction(d)}),Xa$1(),ds$1(6,`span`,6),PI(7,`span`,7)(8,`span`,8),Xa$1(),ds$1(9,`span`,9),PI(10,`span`,10),Xa$1()(),ds$1(11,`span`,11),tc$1(12),Xa$1()()),t&2&&(LI(`labelPosition`,i.labelPosition)(`for`,i.inputId),ni(2),_r(`mdc-radio--disabled`,i.disabled),ni(2),LI(`id`,i.inputId)(`checked`,i.checked)(`disabled`,i.disabled&&!i.disabledInteractive)(`required`,i.required),yn(`name`,i.name)(`value`,i.value)(`aria-label`,i.ariaLabel)(`aria-labelledby`,i.ariaLabelledby)(`aria-describedby`,i.ariaDescribedby)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null),ni(5),LI(`matRippleTrigger`,i._rippleTrigger.nativeElement)(`matRippleDisabled`,i._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[np,qK],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})}return n})();var Mn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Ae$1({type:n});static ɵinj=Ie({imports:[Da$1,Kt,Si]})}return n})();var ra=(()=>{class n{constructor(){this.url=p(YB)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`image-viewer`]],decls:5,vars:1,consts:[[1,`bg-base-200`,`h-screen`,`w-screen`],[`auth`,``,1,`h-full`,`w-full`,`object-contain`,`object-center`,3,`source`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``,1,`bg-base-100`,`absolute`,`top-1`,`right-1`]],template:function(t,i){t&1&&(ds$1(0,`div`,0),PI(1,`img`,1),ds$1(2,`button`,2)(3,`icon`),Xg(4,`close`),Xa$1()()()),t&2&&(ni(),LI(`source`,i.url))},dependencies:[Noe,_t,yoe,Eoe],encapsulation:2})}}return n})();var Us=(n,o,e)=>({file:n,is_public:o,permissions:e});function Bs(n,o){if(n&1){let e=ok();ds$1(0,`div`,7)(1,`label`),Xg(2,`Permissions`),Xa$1(),ds$1(3,`mat-form-field`,11)(4,`mat-select`,12),Qt$1(`ngModelChange`,function(i){Dv(e);return Tv(dd().permissions.set(i))}),ds$1(5,`mat-option`,13),Xg(6,`None`),Xa$1(),ds$1(7,`mat-option`,14),Xg(8,`Support`),Xa$1(),ds$1(9,`mat-option`,15),Xg(10,`Admin`),Xa$1()(),EP(),Xa$1()()}if(n&2){let e=dd();ni(4),LI(`ngModel`,e.permissions()),SP()}}var sa=(()=>{class n{constructor(){this._dialog_ref=p(fh),this._data=p(YB),this.file=this._data.file,this.is_public=Ee(!!this._data.is_public),this.permissions=Ee(`none`),this.file=this._data.file}close(){this._dialog_ref.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`upload-permissions-modal`]],decls:18,vars:7,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[1,`min-w-[20rem]`,`space-y-2`,`px-4`,`py-2`],[1,`flex`,`flex-col`],[`appearance`,`outline`,1,`no-subscript`],[`matInput`,``,`disabled`,`true`,`placeholder`,`File Name`,3,`ngModel`],[1,`flex`,`flex-col`,`space-y-2`],[1,`border-base-200`,`flex`,`items-center`,`justify-end`,`space-x-2`,`border-t`,`px-4`,`py-2`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`w-32`],[`btn`,``,`matRipple`,``,1,`w-32`,3,`mat-dialog-close`],[`appearance`,`outline`],[3,`ngModelChange`,`ngModel`],[`value`,`none`],[`value`,`support`],[`value`,`admin`]],template:function(t,i){t&1&&(ds$1(0,`header`,0)(1,`h2`,1),Xg(2,`Upload File`),Xa$1(),ds$1(3,`button`,2)(4,`icon`),Xg(5,`close`),Xa$1()()(),ds$1(6,`main`,3)(7,`div`,4)(8,`label`),Xg(9,`File Name`),Xa$1(),ds$1(10,`mat-form-field`,5),PI(11,`input`,6),EP(),Xa$1()(),ld(12,Bs,11,1,`div`,7),Xa$1(),ds$1(13,`footer`,8)(14,`button`,9),Xg(15,` Cancel `),Xa$1(),ds$1(16,`button`,10),Xg(17,` Upload `),Xa$1()()),t&2&&(ni(11),LI(`ngModel`,i.file.name),SP(),ni(),ud(i.is_public()?-1:12),ni(4),LI(`mat-dialog-close`,Xk(3,Us,i.file,i.is_public(),i.permissions())))},dependencies:[yoe,Eoe,Wt$1,qn,TX,zC,_X,SU,$t,jt,rT,Noe,fd$1,pd,Da$1,np],encapsulation:2})}}return n})();var zs=[`image_list`];var Gs=[`file_input`];function Ws(n,o){if(n&1){let e=ok();ds$1(0,`div`,15),PI(1,`img`,16),ds$1(2,`div`,17),PI(3,`div`,18),ds$1(4,`div`,19)(5,`button`,20),Qt$1(`click`,function(){let i=Dv(e).$implicit;return Tv(dd().copyLink(i))}),ds$1(6,`icon`),Xg(7,`link`),Xa$1()(),ds$1(8,`button`,20),Qt$1(`click`,function(){let i=Dv(e).$implicit;return Tv(dd().viewImage(i))}),ds$1(9,`icon`),Xg(10,`visibility`),Xa$1()(),ds$1(11,`button`,20),Qt$1(`click`,function(){let i=Dv(e).$implicit;return Tv(dd().removeImage(i))}),ds$1(12,`icon`),Xg(13,`close`),Xa$1()()()()()}if(n&2){let e=o.$implicit;fd(`transform`,`translate(-`+dd().offset()+`00%)`),ni(),LI(`source`,e)}}function Hs(n,o){if(n&1&&PI(0,`mat-progress-spinner`,22),n&2){let e=dd().$implicit;LI(`value`,e.progress)(`diameter`,64)}}function qs(n,o){n&1&&(ds$1(0,`icon`,23),Xg(1,`warning`),Xa$1())}function js(n,o){n&1&&(ds$1(0,`div`,24)(1,`icon`,25),Xg(2,`refresh`),Xa$1()())}function $s(n,o){if(n&1){let e=ok();ds$1(0,`div`,21),Qt$1(`click`,function(){let i=Dv(e).$implicit;return Tv(dd().retryUpload(i))}),ld(1,Hs,1,2,`mat-progress-spinner`,22),ld(2,qs,2,0,`icon`,23),ld(3,js,3,0,`div`,24),Xa$1()}if(n&2){let e=o.$implicit;fd(`transform`,`translate(-`+dd().offset()+`00%)`),LI(`matTooltip`,e.error),ni(),ud(e.error?-1:1),ni(),ud(e.error?2:-1),ni(),ud(e.error?3:-1)}}function Ks(n,o){if(n&1){let e=ok();ds$1(0,`button`,26),Qt$1(`click`,function(){Dv(e);return Tv(dd().previousOffset())}),ds$1(1,`icon`),Xg(2,`chevron_left`),Xa$1()()}if(n&2)LI(`disabled`,dd().offset()===0)}function Qs(n,o){if(n&1){let e=ok();ds$1(0,`button`,27),Qt$1(`click`,function(){Dv(e);return Tv(dd().nextOffset())}),ds$1(1,`icon`),Xg(2,`chevron_right`),Xa$1()()}if(n&2){let e=dd();LI(`disabled`,e.offset()>=e.length()-e.view_space())}}function Xs(n,o){if(n&1){let e=ok();ds$1(0,`mat-chip-row`,28),Qt$1(`removed`,function(){let i=Dv(e).$implicit;return Tv(dd().removeImage(i))}),ds$1(1,`div`,29),Xg(2),Xa$1(),ds$1(3,`button`,30)(4,`icon`),Xg(5,`cancel`),Xa$1()()()}if(n&2){let e=o.$implicit;ni(2),tA(e),ni(),yn(`aria-label`,`Remove `+e)}}var la=(()=>{class n extends Ge{constructor(){super(...arguments),this._clipboard=p(sb),this._uploads=p(E6),this._dialog=p(uN),this._injector=p($$1),this._upload_completion_effect=vt(()=>{let e=this.upload_list(),t=this.upload_ids();for(let i of t){let a=e.find(d=>d?.id===i);a&&a.progress>=100&&(this.addImageUrl(a.link),this.upload_ids.set(this.upload_ids().filter(d=>d!==i)))}},{injector:this._injector}),this.list=Ee([]),this.upload_map={},this.upload_ids=Ee([]),this.upload_list=Ee([]),this.offset=Ee(0),this.view_space=Ee(0),this.separators=[188,13],this.uploads=Le(()=>{let e=this.upload_ids();return this.upload_list().filter(t=>e.includes(t?.id))}),this.length=Le(()=>this.list().length+this.uploads().length+1),this._list_el=_Z(`image_list`),this._file_input=_Z(`file_input`),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e}ngAfterViewInit(){this.updateViewSpace()}updateViewSpace(){this.timeout(`init_view_space`,()=>{let e=this._list_el()?.nativeElement?.getBoundingClientRect();e&&this.view_space.set(Math.floor(e.width/152))},100)}copyLink(e){this._clipboard.copy(e),yce(`Copied image URL to clipboard`)}viewImage(e){this._dialog.open(ra,{data:e})}removeImage(e){this.setValue(this.list().filter(t=>t!==e))}addImage(e){e.value&&(this.setValue(Hce([...this.list(),e.value])),e.chipInput.inputElement.value=``)}addImageUrl(e){this.setValue(Hce([...this.list(),e]))}retryUpload(e){e.error&&(e.error=null,e.upload.resume())}previousOffset(){this.offset.update(e=>e-1)}nextOffset(){this.offset.update(e=>e+1)}async uploadImages(e){let t=e.target;if(t?.files){let i=t.files;if(i.length){this.interval(`update_status`,()=>this._updateUploadHistory());for(let a=0;a<i.length;a++)try{let d=await this._uploads.uploadFileWithPermissions(i[a]);this.upload_ids.set([...this.upload_ids(),d])}catch(d){if(d instanceof ju)continue;Ece(`Failed to upload ${i[a].name}: ${d?.message||`Unknown error`}`)}this._file_input().nativeElement.value=``}}}setValue(e){let t=e||[];this.list.set(t),this._onChange&&this._onChange(t)}writeValue(e){this.list.set(e||[])}async _updateUploadHistory(){let e=this.upload_ids();if(e.length===0)return;let i=this._uploads.upload_list().filter(d=>e.find(x=>x===d?.id)),a=i.filter(d=>d.progress>=100);this.upload_list.set(i),a.forEach(d=>{this.upload_map[d?.id]=d.upload?.id||d?.id,delete d.upload}),a.length>=e.length&&this.clearInterval(`update_status`)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=tt(n)))(i||n)}})()}static{this.ɵcmp=Ft({type:n,selectors:[[`image-list-field`]],viewQuery:function(t,i){t&1&&HI(i._list_el,zs,5)(i._file_input,Gs,5),t&2&&fk(2)},features:[Qe([{provide:li,useExisting:Ye(()=>n),multi:!0},{provide:jk,useValue:sa}]),fe],decls:23,vars:13,consts:[[`image_list`,``],[`file_input`,``],[`chipList`,``],[`images`,``,1,`relative`,`mb-2`,`flex`,`w-full`,`items-center`,`space-x-2`,`overflow-hidden`,`py-2`,3,`resize`],[`image`,``,1,`border-base-200`,`hover:border-base-300`,`hover:bg-base-200`,`relative`,`flex`,`h-32`,`w-36`,`shrink-0`,`cursor-pointer`,`flex-col`,`items-center`,`justify-center`,`rounded-xl`,`border-2`,`border-dashed`],[1,`text-4xl`,`opacity-60`],[1,`px-4`,`text-center`,`opacity-60`],[`type`,`file`,1,`absolute`,`inset-0`,`h-32`,`w-32`,`cursor-pointer`,`opacity-0`,3,`change`],[`image`,``,1,`bg-base-200`,`relative`,`h-32`,`w-36`,`shrink-0`,`overflow-hidden`,`rounded-sm`,`bg-cover`,`bg-center`,3,`transform`],[`upload`,``,1,`border-base-content/10`,`/5`,`bg-base-200`,`flex`,`h-32`,`w-36`,`shrink-0`,`items-center`,`justify-center`,`rounded-sm`,`border`,`bg-cover`,`bg-center`,3,`transform`,`matTooltip`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`left-0`,`-translate-y-1/2`,`transform`,3,`disabled`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`right-0`,`-translate-y-1/2`,`transform`,3,`disabled`],[`appearance`,`outline`,1,`w-full`],[`aria-label`,`Image List`],[3,`matChipInputTokenEnd`,`placeholder`,`matChipInputFor`,`matChipInputSeparatorKeyCodes`,`matChipInputAddOnBlur`],[`image`,``,1,`bg-base-200`,`relative`,`h-32`,`w-36`,`shrink-0`,`overflow-hidden`,`rounded-sm`,`bg-cover`,`bg-center`],[`auth`,``,1,`pointer-events-none`,`absolute`,`top-1/2`,`left-1/2`,`z-10`,`-translate-x-1/2`,`-translate-y-1/2`,`object-contain`,3,`source`],[`overlay`,``,1,`text-base-100`,`absolute`,`inset-0`,`z-20`],[`bg`,``,1,`absolute`,`inset-0`,`bg-black`,`opacity-0`],[`actions`,``,1,`absolute`,`top-0`,`right-0`,`left-0`,`flex`,`items-center`,`justify-center`,`space-x-2`,`opacity-0`],[`icon`,``,3,`click`],[`upload`,``,1,`border-base-content/10`,`/5`,`bg-base-200`,`flex`,`h-32`,`w-36`,`shrink-0`,`items-center`,`justify-center`,`rounded-sm`,`border`,`bg-cover`,`bg-center`,3,`click`,`matTooltip`],[`mode`,`determinate`,3,`value`,`diameter`],[1,`text-error`,`text-6xl`],[`overlay`,``,1,`text-base-100`,`hover:bg-base-content`,`hover:bg-opacity-50`,`absolute`,`inset-0`,`flex`,`items-center`,`justify-center`],[1,`text-3xl`,`opacity-0`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`left-0`,`-translate-y-1/2`,`transform`,3,`click`,`disabled`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`right-0`,`-translate-y-1/2`,`transform`,3,`click`,`disabled`],[3,`removed`],[1,`max-w-md`,`truncate`],[`matChipRemove`,``]],template:function(t,i){if(t&1&&(ds$1(0,`div`,3,0),Qt$1(`resize`,function(){return i.updateViewSpace()},KM),ds$1(2,`div`,4)(3,`icon`,5),Xg(4,`add`),Xa$1(),ds$1(5,`p`,6),Xg(6),Jg(7,`translate`),Xa$1(),ds$1(8,`input`,7,1),Qt$1(`change`,function(d){return i.uploadImages(d)}),Xa$1()(),Q0(10,Ws,14,3,`div`,8,Z0),Q0(12,$s,4,6,`div`,9,Z0),ld(14,Ks,3,1,`button`,10),ld(15,Qs,3,1,`button`,11),Xa$1(),ds$1(16,`mat-form-field`,12)(17,`mat-chip-grid`,13,2),Q0(19,Xs,6,2,`mat-chip-row`,null,Z0),Xa$1(),ds$1(21,`input`,14),Jg(22,`translate`),Qt$1(`matChipInputTokenEnd`,function(d){return i.addImage(d)}),Xa$1()()),t&2){let a=hk(18);ni(2),fd(`transform`,`translate(-`+i.offset()+`00%)`),ni(4),oc$1(` `,cx(7,9,`COMMON.IMAGE_UPLOADS`),` `),ni(4),X0(i.list()),ni(2),X0(i.uploads()),ni(2),ud(i.length()>i.view_space()?14:-1),ni(),ud(i.length()>i.view_space()?15:-1),ni(4),X0(i.list()),ni(2),LI(`placeholder`,cx(22,11,`COMMON.IMAGE_ADD_URL`))(`matChipInputFor`,a)(`matChipInputSeparatorKeyCodes`,i.separators)(`matChipInputAddOnBlur`,!0)}},dependencies:[Wt$1,qn,Cl$1,Nl$1,wl$1,Sl$1,yo,ut,qt,Yt,mt,Noe,_t,f],styles:[`[_nghost-%COMP%]{width:100%}[overlay][_ngcontent-%COMP%]{transition:background .2s}[image][_ngcontent-%COMP%]:hover   [actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%]:hover > icon[_ngcontent-%COMP%]{opacity:1!important}[image][_ngcontent-%COMP%]:hover   [bg][_ngcontent-%COMP%]{opacity:.4!important}[actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%] > icon[_ngcontent-%COMP%]{transition:opacity .2s}[image][_ngcontent-%COMP%]{transition:transform .2s}
/*# sourceMappingURL=image-list-field.component.css.map */`]})}}return n})();function Ys(n,o){if(n&1&&(PI(0,`div`,1),Jg(1,`safe`)),n&2)LI(`innerHTML`,e_$1(1,1,dd().changelog(),`html`),jM)}function Zs(n,o){n&1&&(ds$1(0,`div`,2)(1,`icon`,3),Xg(2,`close`),Xa$1(),ds$1(3,`div`,4),Xg(4,`No changelog`),Xa$1()())}var ca=(()=>{class n{constructor(){this._data=p(YB),this.loading=Ee(!1),this.changelog=Le(()=>f$1(this._data.changelog||``,{async:!1}))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`changelog-modal`]],decls:3,vars:3,consts:[[3,`heading`,`hide_confirm`],[1,`markdown`,3,`innerHTML`],[1,`flex`,`flex-col`,`items-center`,`justify-center`,`space-y-2`],[1,`text-3xl`],[1,`text`]],template:function(t,i){t&1&&(ds$1(0,`fullscreen-modal-shell`,0),ld(1,Ys,2,4,`div`,1)(2,Zs,5,0,`div`,2),Xa$1()),t&2&&(LI(`heading`,`Changelog`)(`hide_confirm`,!0),ni(),ud(i.changelog()?1:2))},dependencies:[Cn,Noe,dN],encapsulation:2})}}return n})();var da=(()=>{class n{constructor(){this._document=p(H),this._dialog=p(uN),this._changelog=Ee(null),this.available=Le(()=>this._changelog()!==null),this._load()}view(){let e=this._changelog();e!==null&&this._dialog.open(ca,{data:{changelog:e}})}async _load(){try{let e=new URL(`CHANGELOG.md`,this._document.baseURI),t=await fetch(e);if(!t.ok)return;this._changelog.set(await t.text())}catch{}}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=G({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();function Js(n,o){if(n&1&&(ds$1(0,`div`,1),Xg(1),Xa$1()),n&2){let e=dd(2);ni(),oc$1(` `,e.initials,` `)}}function el(n,o){if(n&1&&PI(0,`img`,2),n&2){let e=dd(2);LI(`alt`,e.initials)(`source`,e.user().photo)}}function tl(n,o){if(n&1&&(ds$1(0,`div`,0),ld(1,Js,2,1,`div`,1)(2,el,1,2,`img`,2),Xa$1()),n&2){let e=dd();yn(`user-id`,e.user().id),ni(),ud(e.user().photo?2:1)}}var wn=(()=>{class n{constructor(){this.user=v_(void 0),this.is_valid=Le(()=>{let e=this.user();if(!e)return!1;let t=(e.name||``).trim(),i=(e.email||``).trim();return t.startsWith(`<empty>`)||i.startsWith(`<empty>`)?!1:!!(t||i||e.first_name||e.last_name)})}get initials(){let e=this.user();if(!e)return`NA`;if(e.first_name&&e.last_name)return`${e.first_name[0]}${e.last_name[0]}`;let t=(e.name||``).replace(/<[^>]*>/g,` `).trim();t||(t=(e.email||e.name||``).split(`@`)[0]);let i=t.replace(/[()[\]\-+=\\/@<>]+/gi,` `).split(/\s+/).filter(Boolean);return i.length===0?`NA`:i.length>1?`${i[0][0]}${i[i.length-1][0]}`:i[0].slice(0,2)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`a-user-avatar`]],inputs:{user:[1,`user`]},decls:1,vars:1,consts:[[1,`border-base-100`,`bg-base-200`,`flex`,`h-[2.5em]`,`w-[2.5em]`,`items-center`,`justify-center`,`overflow-hidden`,`rounded-full`,`border-2`],[`initials`,``,1,`text-base-content`,`uppercase`,`opacity-60`],[`auth`,``,1,`flex`,`h-full`,`w-full`,`items-center`,`justify-center`,`object-cover`,`object-center`,3,`alt`,`source`]],template:function(t,i){t&1&&ld(0,tl,3,2,`div`,0),t&2&&ud(i.is_valid()?0:-1)},dependencies:[_t],encapsulation:2})}}return n})();function il(n,o){if(n&1&&(ds$1(0,`mat-option`,8),Xg(1),Xa$1()),n&2){let e=o.$implicit;LI(`value`,e.display_name||e.name),ni(),oc$1(` `,e.display_name||e.name,` `)}}function nl(n,o){if(n&1&&(ds$1(0,`mat-option`,8),Xg(1),Xa$1()),n&2){let e=o.$implicit;LI(`value`,e?.name||e),ni(),oc$1(` `,e.name||e,` `)}}function ol(n,o){if(n&1&&(ds$1(0,`div`,5)(1,`label`),Xg(2),Jg(3,`translate`),Xa$1(),ds$1(4,`mat-form-field`,6)(5,`mat-select`,7),Jg(6,`translate`),Q0(7,nl,2,2,`mat-option`,8,Z0),Xa$1(),EP(),Xa$1()()),n&2){let e=dd();ni(2),tA(cx(3,3,`COMMON.SUPPORT_TYPE`)),ni(3),LI(`placeholder`,cx(6,5,`COMMON.SUPPORT_TYPE`))(`formField`,e.form.issue_type),SP(),ni(2),X0(e.support_request_types())}}function rl(n,o){n&1&&(ds$1(0,`mat-error`,11),Xg(1),Jg(2,`translate`),Xa$1()),n&2&&(ni(),oc$1(` `,cx(2,1,`COMMON.DESCRIPTION_REQUIRED`),` `))}function al(n,o){if(n&1&&(ds$1(0,`div`,12)(1,`label`,10),Xg(2),Jg(3,`translate`),Xa$1(),PI(4,`image-list-field`,14),EP(),Xa$1()),n&2){let e=dd();ni(2),tA(cx(3,2,`COMMON.IMAGES`)),ni(2),LI(`formField`,e.form.images),SP()}}var pa=(()=>{class n{constructor(){this._dialog_ref=p(fh),this._org=p(Tu),this._settings=p(Dn),this._support_email=this._settings.signal(`support_email`,`support@place.tech`),this._support_issue_types=this._settings.signal(`support_issue_types`,[]),this._allow_images=this._settings.signal(`allow_support_ticket_images`,!1),this.loading=Ee(!1),this.model=Ee({name:``,email:``,location:``,description:``,issue_type:``,images:[]}),this.form=xa$1(this.model,e=>{Fs$1(e.name),Fs$1(e.email),Fs$1(e.description)}),this.desc_error=Ee(!1),this.support_email=this._support_email,this.support_request_types=this._support_issue_types,this.allow_images=this._allow_images,this.buildings=this._org.building_list}ngOnInit(){let e=Ne();e&&this.model.update(t=>m(l({},t),{name:e.name,email:e.email})),this._org.building&&this.model.update(t=>m(l({},t),{location:this._org.building.display_name||this._org.building.name}))}async submit(){if(this.loading.set(!0),this.form().markAsTouched(),this._updateDescError(),this.form().valid()){let e=this._org.module(`smtp`,`Mailer`);if(!e)return Ece(Mi(`COMMON.SUPPORT_NO_MAILER`));let{name:t,email:i,location:a,description:d,images:x,issue_type:R}=this.model(),Y=this.support_request_types().find(we=>we.name===R)?.email||this.support_email(),oe=Mi(`COMMON.SUPPORT_MAIL_HEADER`,{issue_type:R?` - `+R:``});await e.execute(`send_mail`,[Y,oe,`${t}
${i}

${a}

${d.replace(/<[^>]+>/g,``)}

${x.join(`
`)}`,`<p>${t}</p><p>${i}</p><p>${a}</p><p>${d}</p>${x.join(`<br>`)}`,[],[],[],[],null,`${i}`]),this._dialog_ref.close(),this.loading.set(!1),_ce(Mi(`COMMON.SUPPORT_SUCCESS`))}}_updateDescError(){this.desc_error.set(this.form.description().invalid()&&this.form.description().touched())}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`support-ticket-modal`]],decls:51,vars:45,consts:[[3,`confirm`,`heading`,`loading`,`confirm_text`],[1,`flex`,`flex-wrap`,`items-center`,`sm:space-x-2`],[1,`flex`,`flex-1`,`flex-col`],[`appearance`,`outline`],[`matInput`,``,3,`placeholder`,`formField`],[1,`flex`,`flex-col`],[`appearance`,`outline`,1,`w-full`],[3,`placeholder`,`formField`],[3,`value`],[1,``],[1,`mb-4`],[1,`my-2`,`text-xs`],[1,`pt-4`],[1,`mb-2`,`text-center`,`text-xs`,`italic`],[3,`formField`]],template:function(t,i){t&1&&(ds$1(0,`fullscreen-modal-shell`,0),Jg(1,`translate`),Qt$1(`confirm`,function(){return i.submit()}),ds$1(2,`form`)(3,`div`,1)(4,`div`,2)(5,`label`),Xg(6),Jg(7,`translate`),ds$1(8,`span`),Xg(9,`*`),Xa$1()(),ds$1(10,`mat-form-field`,3),PI(11,`input`,4),Jg(12,`translate`),EP(),ds$1(13,`mat-error`),Xg(14),Jg(15,`translate`),Xa$1()()(),ds$1(16,`div`,2)(17,`label`),Xg(18),Jg(19,`translate`),ds$1(20,`span`),Xg(21,`*`),Xa$1()(),ds$1(22,`mat-form-field`,3),PI(23,`input`,4),Jg(24,`translate`),EP(),ds$1(25,`mat-error`),Xg(26),Jg(27,`translate`),Xa$1()()()(),ds$1(28,`div`,5)(29,`label`),Xg(30),Jg(31,`translate`),Xa$1(),ds$1(32,`mat-form-field`,6)(33,`mat-select`,7),Jg(34,`translate`),Q0(35,il,2,2,`mat-option`,8,Z0),Xa$1(),EP(),Xa$1()(),ld(37,ol,9,7,`div`,5),ds$1(38,`div`,9)(39,`label`,10),Xg(40),Jg(41,`translate`),ds$1(42,`span`),Xg(43,`*`),Xa$1()(),PI(44,`rich-text-input`,7),Jg(45,`translate`),EP(),ld(46,rl,3,3,`mat-error`,11),Xa$1(),ld(47,al,5,4,`div`,12),Xa$1(),ds$1(48,`div`,13),Xg(49),Jg(50,`translate`),Xa$1()()),t&2&&(LI(`heading`,`Raise a support ticket`)(`loading`,i.loading()?`true`:``)(`confirm_text`,cx(1,21,`COMMON.SUBMIT`)),ni(6),tA(cx(7,23,`FORM.NAME`)),ni(5),LI(`placeholder`,cx(12,25,`FORM.NAME`))(`formField`,i.form.name),SP(),ni(3),tA(cx(15,27,`FORM.NAME_REQUIRED`)),ni(4),tA(cx(19,29,`FORM.EMAIL`)),ni(5),LI(`placeholder`,cx(24,31,`FORM.EMAIL`))(`formField`,i.form.email),SP(),ni(3),tA(cx(27,33,`FORM.EMAIL_REQUIRED`)),ni(4),tA(cx(31,35,`COMMON.LOCATION`)),ni(3),LI(`placeholder`,cx(34,37,`COMMON.LOCATION`))(`formField`,i.form.location),SP(),ni(2),X0(i.buildings()),ni(2),ud(i.support_request_types().length?37:-1),ni(3),oc$1(` `,cx(41,39,`COMMON.SUPPORT_DESCRIPTION`),` `),ni(4),LI(`placeholder`,cx(45,41,`COMMON.SUPPORT_DESCRIPTION`))(`formField`,i.form.description),SP(),ni(2),ud(i.desc_error()?46:-1),ni(),ud(i.allow_images()?47:-1),ni(2),oc$1(` `,cx(50,43,`COMMON.SUPPORT_MSG`),` `))},dependencies:[dC,Wt$1,qn,Yr$1,fd$1,pd,Rs$1,ut,Da$1,ma,la,$t,jt,rT,yoe,Cn,f],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%}
/*# sourceMappingURL=support-ticket-modal.component.css.map */`]})}}return n})();var sl=[`*`];var ll=(n,o)=>o.id;function cl(n,o){if(n&1&&(ds$1(0,`div`,4),Xg(1),Jg(2,`date`),Xa$1()),n&2){let e=dd();ni(),oc$1(` `,lx(2,1,e.active_time(),e.time_format()+` (z)`,e.tz()),` `)}}function dl(n,o){if(n&1&&(ds$1(0,`div`,13),Xg(1),Jg(2,`date`),Xa$1()),n&2){let e=dd(2);ni(),oc$1(` `,lx(2,1,e.force_time(),e.time_format()+` (z)`,e.tz()),` `)}}function ml(n,o){n&1&&(ds$1(0,`icon`,14),Xg(1,` done `),Xa$1())}function pl(n,o){if(n&1){let e=ok();ds$1(0,`button`,9),Qt$1(`click`,function(){Dv(e);let i=dd();return Tv(i.setValue(i.force_time().toString()))}),ds$1(1,`div`,10)(2,`div`,11)(3,`div`,12),Xg(4),Jg(5,`date`),Xa$1(),ld(6,dl,3,5,`div`,13),Xa$1(),ld(7,ml,2,0,`icon`,14),Xa$1()()}if(n&2){let e=dd();LI(`value`,e.force_time()),ni(4),oc$1(` `,e_$1(5,4,e.force_time(),e.time_format()),` `),ni(2),ud(e.timezone()&&e.tz()?6:-1),ni(),ud(e.active_time()===e.force_time()?7:-1)}}function ul(n,o){if(n&1&&(ds$1(0,`div`,13),Xg(1),Jg(2,`date`),Xa$1()),n&2){let e=dd().$implicit,t=dd();ni(),oc$1(` `,lx(2,1,e.date,t.time_format()+` (z)`,t.tz()),` `)}}function _l(n,o){n&1&&(ds$1(0,`icon`,14),Xg(1,` done `),Xa$1())}function hl(n,o){if(n&1){let e=ok();ds$1(0,`button`,9),Qt$1(`click`,function(){let i=Dv(e).$implicit;return Tv(dd().setValue(i.id))}),ds$1(1,`div`,10)(2,`div`,11)(3,`div`,12),Xg(4),Jg(5,`date`),Xa$1(),ld(6,ul,3,5,`div`,13),Xa$1(),ld(7,_l,2,0,`icon`,14),Xa$1()()}if(n&2){let e=o.$implicit,t=dd();LI(`value`,e.id),yn(`data-time`,e.id),ni(4),nA(` `,e_$1(5,6,e.date,t.time_format()),` `,t.extra_info_fn()(e.date),` `),ni(2),ud(t.timezone()&&t.tz()?6:-1),ni(),ud(t.active_time()===e.date?7:-1)}}function fl(n,o){n&1&&(ds$1(0,`div`,8),Xg(1,`No time options to select`),Xa$1())}function gl(n,o){n&1&&(ds$1(0,`mat-error`),tc$1(1),Xa$1())}function ua(n){if(n==null||n===``)return null;let o=Number(n);return Number.isFinite(o)?o:null}var ha=(()=>{class n extends Ge{constructor(){super(...arguments),this.step=v_(15),this.disabled=gZ(void 0),this.no_past_times=v_(!0),this.use_24hr=v_(!1),this.force_time=v_(void 0),this.no_error=v_(void 0),this.extra_info_fn=v_(e=>``),this.from=v_(on$1(Date.now()).valueOf()),this.range=v_(void 0),this._range=Le(()=>{let e=this.range();if(!e)return;let t=ua(e.start),i=ua(e.end);if(!(t===null||i===null||i<=t))return{start:t,end:i}}),this.min_duration=v_(0),this.timezone=v_(``),this.date=Ee(new Date().valueOf()),this.time=Ee(qse(new Date,`HH:mm`)),this._time_options=Ee([]),this.show_select=Ee(!1),this.active_time=Ee(Date.now()),this.no_options=Ee(!1),this._menu_trigger=_Z(Gd),this.time_format=Le(()=>this.use_24hr()?`HH : mm`:`h : mm a`),this._local_tz=Cce(Intl.DateTimeFormat().resolvedOptions().timeZone),this.tz=Le(()=>{let e=this.timezone();if(!e)return``;let t=Cce(e);return t===this._local_tz?``:t})}ngOnInit(){this.show_select.set(!0),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions(),this.timeout(`hide`,()=>this.show_select.set(!1));let e=this.timezone()||void 0;this.active_time.set(this._time_options().find(t=>t.id===Oce(this.date(),e))?.date||this.active_time())}ngOnChanges(e){(e.no_past_times||e.step||e.from||e.range||e.min_duration)&&(this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions())}ngAfterViewInit(){let e=this._menu_trigger();e&&this.subscription(`menu_opened`,e.menuOpened.subscribe(()=>{this._scrollToSelectedTime()}))}_scrollToSelectedTime(){requestAnimationFrame(()=>{if(!this._menu_trigger()?.menu)return;let t=document.querySelector(`.mat-mdc-menu-panel`);if(!t)return;let i=this.timezone()||void 0,a=this.time()||Oce(new Date,i),d=t.querySelector(`[data-time="${a}"]`);if(!d&&this._time_options().length){let x=this._timeToMinutes(a),R=this._time_options()[0],Y=Infinity;for(let oe of this._time_options()){let we=this._timeToMinutes(oe.id),Ye=Math.abs(we-x);Ye<Y&&(Y=Ye,R=oe)}d=t.querySelector(`[data-time="${R.id}"]`)}if(d){if(typeof d.scrollIntoView!=`function`)return;d.scrollIntoView({block:`center`,behavior:`instant`})}})}_timeToMinutes(e){let[t,i]=e.split(`:`).map(Number);return t*60+i}time_options(){let e=this.timezone()||void 0,t=(this.time()||`00:00`).split(`:`),i=Nce(this.date(),+t[0],+t[1],e),{minutes:a}=_H(i,e),d=Oce(i,e),x=[...this._time_options()];return a%this.step()!==0&&this._isWithinRange(i)&&!x.find(R=>R.id===d)&&(x.push({date:i,id:d}),x.sort((R,Y)=>`${R.id}`.localeCompare(`${Y.id}`))),x}setValue(e){this.time.set(e);let t=this.timezone()||void 0;if(this._onChange){let x=(this.time()||`00:00`).split(`:`),R=Nce(this.date(),+x[0],+x[1],t);Vce(),this._onChange(R)}let i=this.force_time()||this.time(),a=(typeof i==`string`?i:Oce(i,t)).split(`:`),d=Nce(this.date(),+a[0],+a[1],t);this.active_time.set(this._time_options().find(x=>x.id===(typeof i==`string`?i:Oce(i,t)))?.date||d)}writeValue(e){this.date.set(e||this.date());let t=this.timezone()||void 0,i=Wy(this.date());i=Ky(i,{nearestTo:5}),this.time.set(Oce(i,t)),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions();let a=this.force_time(),d=a?Oce(a,t):this.time();this.active_time.set(this._time_options().find(x=>x.id===d)?.date||i.valueOf())}setDisabledState(e){this.disabled.set(e),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times()||e,this.step())),this._updateNoOptions()}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouch=e}_updateNoOptions(){this.no_options.set(!this.disabled()&&(!this._time_options()||this._time_options().length===0)&&!this.force_time())}generateAvailableTimes(e,t,i=15){let a=t?this.from():Math.max(this.from(),Date.now()),d=[],x=this._range(),R=this.timezone()||void 0,Y=R?nb(e,R):on$1(e).valueOf(),oe=R?rb(e,R):xy(e).valueOf(),we=this.min_duration()||0,Ye=x?x.start*60:void 0,Xt=x?x.end*60:void 0,Ze=Xt!=null&&we>0?Xt-we:Xt,Yt=Math.max(Y,a,Ye!=null?Y+Ye*60*1e3:Y),F=Math.min(oe,Ze!=null?Y+Ze*60*1e3:oe);if(Yt>F)return d;let K=this._roundUpToStep(Yt,i),Ne=this._roundDownToStep(F,i);for(;!lr(K,Ne);)d.push({date:K.valueOf(),id:Oce(K,R)}),K=Or(K,i);return d}_isWithinRange(e){if(de(e,this.from()))return!1;let t=this._range();if(!t)return!0;let i=t.start*60,a=t.end*60,d=this.min_duration()||0,x=d>0?a-d:a,{hours:Y,minutes:oe}=_H(e,this.timezone()||void 0),we=Y*60+oe;return!(we<i||we>x)}_roundUpToStep(e,t){let i=Ky(e,{nearestTo:t});return de(i,e)&&(i=Or(i,t)),Wy(i)}_roundDownToStep(e,t){let i=Ky(e,{nearestTo:t});return lr(i,e)&&(i=Or(i,-t)),Wy(i)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=tt(n)))(i||n)}})()}static{this.ɵcmp=Ft({type:n,selectors:[[`a-time-field`],[`time-field`]],viewQuery:function(t,i){t&1&&HI(i._menu_trigger,Gd,5),t&2&&fk()},inputs:{step:[1,`step`],disabled:[1,`disabled`],no_past_times:[1,`no_past_times`],use_24hr:[1,`use_24hr`],force_time:[1,`force_time`],no_error:[1,`no_error`],extra_info_fn:[1,`extra_info_fn`],from:[1,`from`],range:[1,`range`],min_duration:[1,`min_duration`],timezone:[1,`timezone`]},outputs:{disabled:`disabledChange`},features:[Qe([{provide:li,useExisting:Ye(()=>n),multi:!0}]),fe,dt],ngContentSelectors:sl,decls:15,vars:12,consts:[[`menu`,`matMenu`],[`type`,`button`,`time-field`,``,`matRipple`,``,1,`border-neutral`,`flex`,`h-12`,`w-full`,`items-center`,`justify-between`,`rounded-sm`,`border`,`px-2`,3,`disabled`,`matMenuTriggerFor`],[1,`flex`,`w-1/2`,`flex-1`,`flex-col`,`px-2`,`text-left`,`leading-tight`],[1,`truncate`],[1,`truncate`,`text-xs`,`opacity-30`],[1,`text-2xl`],[1,`max-h-60`,`min-w-[18rem]`],[`type`,`button`,`mat-menu-item`,``,1,`text-left`,3,`value`],[`mat-menu-item`,``,`disabled`,``],[`type`,`button`,`mat-menu-item`,``,1,`text-left`,3,`click`,`value`],[1,`flex`,`items-center`,`justify-between`],[1,`flex`,`flex-col`,`leading-tight`],[1,``],[1,`text-xs`,`opacity-30`],[1,`ml-2`,`text-2xl`]],template:function(t,i){if(t&1&&(ec$1(),ds$1(0,`button`,1)(1,`div`,2)(2,`div`,3),Xg(3),Jg(4,`date`),Xa$1(),ld(5,cl,3,5,`div`,4),Xa$1(),ds$1(6,`icon`,5),Xg(7,`arrow_drop_down`),Xa$1()(),ds$1(8,`mat-menu`,6,0),ld(10,pl,8,7,`button`,7),Q0(11,hl,8,9,`button`,7,ll,!1,fl,2,0,`div`,8),Xa$1(),ld(14,gl,2,0,`mat-error`)),t&2){let a=hk(9);_r(`opacity-30`,i.disabled()||i.no_options()),LI(`disabled`,i.disabled()||i.no_options())(`matMenuTriggerFor`,a),ni(3),oc$1(` `,e_$1(4,9,i.active_time(),i.time_format()),` `),ni(2),ud(i.timezone()&&i.tz()?5:-1),ni(5),ud(i.force_time()?10:-1),ni(),X0(i.time_options()),ni(3),ud(i.no_error()?-1:14)}},dependencies:[dC,Ud,It,Ni,Gd,Wt$1,Yr$1,Noe,BF],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%}
/*# sourceMappingURL=time-field.component.css.map */`]})}}return n})();function bl(n,o){n&1&&(ds$1(0,`button`,2)(1,`icon`),Xg(2,`close`),Xa$1()())}function vl(n,o){if(n&1){let e=ok();ds$1(0,`div`,7)(1,`div`,11),Xg(2),Jg(3,`date`),Xa$1(),ds$1(4,`mat-checkbox`,12),Qt$1(`ngModelChange`,function(i){let a=Dv(e).$implicit,d=dd(2);return d.setWeekdayEnabled(a.getDay(),i),Tv(i&&d.initialiseDay(a.getDay()))}),Xa$1(),EP(),Xa$1()}if(n&2){let e=o.$implicit,t=dd(2);ni(2),oc$1(` `,e_$1(3,2,e,`EEE`),` `),ni(2),LI(`ngModel`,t.weekdays_enabled()[e.getDay()]),SP()}}function xl(n,o){if(n&1&&(ds$1(0,`mat-option`,20),Xg(1),Xa$1()),n&2){let e=o.$implicit;LI(`value`,e.id),ni(),oc$1(` `,e.name,` `)}}function kl(n,o){if(n&1){let e=ok();ds$1(0,`button`,23),Qt$1(`click`,function(){Dv(e);let i=dd().$index,a=dd(2).$implicit,d=dd(3);return Tv(d.addBlock(d.settings()[a.getDay()],i))}),ds$1(1,`icon`),Xg(2,`add`),Xa$1()()}}function yl(n,o){if(n&1){let e=ok();ds$1(0,`button`,24),Qt$1(`click`,function(){Dv(e);let i=dd().$index,a=dd(2).$implicit,d=dd(3);return Tv(d.removeBlock(d.settings()[a.getDay()],i))}),ds$1(1,`icon`),Xg(2,`delete`),Xa$1()()}}function Cl(n,o){if(n&1){let e=ok();ds$1(0,`div`,16)(1,`a-time-field`,18),Qt$1(`ngModelChange`,function(i){let a=Dv(e).$implicit,d=dd(2).$implicit;return Tv(dd(3).setStartTime(a,d.getDay(),i))}),Xa$1(),EP(),ds$1(2,`a-time-field`,18),Qt$1(`ngModelChange`,function(i){let a=Dv(e).$implicit,d=dd(2).$implicit;return Tv(dd(3).setEndTime(a,d.getDay(),i))}),Xa$1(),EP(),ds$1(3,`mat-form-field`,19)(4,`mat-select`,12),sA(`ngModelChange`,function(i){let a=Dv(e).$implicit;return Gk(a.location,i)||(a.location=i),Tv(i)}),Q0(5,xl,2,2,`mat-option`,20,Z0),Xa$1(),EP(),Xa$1(),ld(7,kl,3,0,`button`,21),ld(8,yl,3,0,`button`,22),Xa$1()}if(n&2){let e=o.$implicit,t=o.$index,i=dd(2).$implicit,a=dd(3);ni(),LI(`ngModel`,a.timeFrom(e.start_time))(`from`,a.timeFrom((t>0?a.settings()[i.getDay()].blocks[t-1]?.end_time:0)||0))(`no_error`,!0),SP(),ni(),LI(`ngModel`,a.timeFrom(e.end_time))(`from`,a.timeFrom(e.start_time+.25))(`no_error`,!0),SP(),ni(2),iA(`ngModel`,e.location),SP(),ni(),X0(a.options()),ni(2),ud(t===0?7:-1),ni(),ud(t!==0?8:-1)}}function Sl(n,o){if(n&1&&(ds$1(0,`div`,14)(1,`div`,15),Q0(2,Cl,9,9,`div`,16,Z0),Xa$1(),ds$1(4,`h3`,17),Xg(5),Jg(6,`date`),Xa$1()()),n&2){let e=dd().$implicit,t=dd(3);ni(2),X0(t.settings()[e.getDay()].blocks),ni(3),oc$1(` `,e_$1(6,1,e,`EEEE`),` `)}}function Ml(n,o){if(n&1&&ld(0,Sl,7,4,`div`,14),n&2){let e=o.$implicit;ud(dd(3).weekdays_enabled()[e.getDay()]?0:-1)}}function wl(n,o){if(n&1&&(ds$1(0,`div`,9),Q0(1,Ml,1,1,null,null,Z0),ds$1(3,`h3`,13),Xg(4),Jg(5,`translate`),Xa$1()()),n&2){let e=dd(2);ni(),X0(e.days),ni(3),oc$1(` `,cx(5,1,`COMMON.WORK_HOURS`),` `)}}function Tl(n,o){n&1&&(ds$1(0,`div`,10),PI(1,`img`,25),ds$1(2,`p`,26),Xg(3),Jg(4,`translate`),Xa$1()()),n&2&&(ni(3),oc$1(` `,cx(4,1,`COMMON.WORK_SETTINGS_EMPTY`),` `))}function El(n,o){if(n&1&&(ds$1(0,`main`,3)(1,`div`,6),Q0(2,vl,5,5,`div`,7,Z0),ds$1(4,`h3`,8),Xg(5),Jg(6,`translate`),Xa$1()(),ld(7,wl,6,3,`div`,9)(8,Tl,5,3,`div`,10),Xa$1()),n&2){let e=dd();ni(2),X0(e.days),ni(3),oc$1(` `,cx(6,2,`COMMON.WORK_DAYS`),` `),ni(2),ud(e.has_working_days()?7:8)}}function Il(n,o){n&1&&(ds$1(0,`div`,4),PI(1,`mat-spinner`,27),ds$1(2,`p`,26),Xg(3),Jg(4,`translate`),Xa$1()()),n&2&&(ni(),LI(`diameter`,32),ni(2),oc$1(` `,cx(4,2,`COMMON.WORK_SETTINGS_SAVE`),` `))}function Nl(n,o){if(n&1){let e=ok();ds$1(0,`footer`,5)(1,`button`,28),Qt$1(`click`,function(){Dv(e);return Tv(dd().saveChanges())}),Xg(2),Jg(3,`translate`),Xa$1()()}n&2&&(ni(2),oc$1(` `,cx(3,1,`COMMON.SAVE`),` `))}var Tn=(()=>{class n{constructor(){this._data=p(YB),this._dialog_ref=p(fh),this.options=Ee([]),this.option=Ee(``),this.settings=Ee([]),this.weekdays_enabled=Ee({}),this.changed=Ee(!1),this.loading=Ee(!1),this.available_weekdays=Ee([]),this.days=new Array(7).fill(0).map((e,t)=>gN(Rr(gN(Date.now(),30)),t)),this.has_working_days=Le(()=>{let e=this.weekdays_enabled();return Object.keys(e).some(t=>e[t])}),this.option_name=Le(()=>this.options().find(e=>e.id===this.option())?.name||``),this.now=Le(()=>Wy(Date.now()).getTime())}ngOnInit(){let e=Ne(),i=[...((this._data?.local?this._data.preferences:e.work_preferences)||[]).map(x=>m(l({},x),{blocks:[...x?.blocks||[]]}))],a={};for(let x of i)x.blocks.length&&(a[x.day_of_week]=!0);this.settings.set(i),this.weekdays_enabled.set(a);let d=[{id:`wfo`,name:Mi(`COMMON.WORK_OFFICE`),icon:`business`},{id:`wfh`,name:Mi(`COMMON.WORK_HOME`),icon:`home`},{id:`aol`,name:Mi(`COMMON.WORK_LEAVE`),icon:`event_busy`}];this.options.set(d),this.option.set(d[0].id)}timeFrom(e){return Wy(ho(gN(new Date,1),{hours:Math.floor(e),minutes:e*60%60})).getTime()}fromTime(e){let t=new Date(e);return t.getHours()+t.getMinutes()/60}initialiseDay(e){let t=this.settings();t[e]||(t[e]={day_of_week:e,blocks:[]}),t[e].blocks||(t[e].blocks=[]),t[e].blocks.length===0&&this.addBlock(t[e],0),this.settings.set([...t])}addBlock(e,t){e.blocks.splice(t+1,0,{start_time:9,end_time:17,location:`wfo`}),this.cleanupBlocks(e),this.settings.update(i=>[...i])}removeBlock(e,t){e.blocks.length<=1||(e.blocks.splice(t,1),this.settings.update(i=>[...i]))}setEndTime(e,t,i){setTimeout(()=>{e.end_time=this.fromTime(i),this.cleanupBlocks(this.settings()[t]),this.settings.update(a=>[...a])},50)}setStartTime(e,t,i){setTimeout(()=>{e.start_time=this.fromTime(i),this.cleanupBlocks(this.settings()[t]),this.settings.update(a=>[...a])},50)}cleanupBlocks(e){if(e?.blocks?.length)for(let t=0;t<e.blocks.length;t++){let i=e.blocks[t];t>0&&i.start_time<e.blocks[t-1].end_time&&(i.start_time=e.blocks[t-1].end_time),i.end_time<=i.start_time&&(i.end_time=i.start_time+1)}}async saveChanges(e=!0){this.loading.set(!0),this._dialog_ref.disableClose=!0;let t=new Array(7).fill(0).map((i,a)=>({day_of_week:a,blocks:[]}));for(let i of this.days){let a=i.getDay();this.weekdays_enabled()[a]&&(t[a]={day_of_week:a,blocks:this.settings()[a].blocks})}if(this._data?.local)this.loading.set(!1),this._dialog_ref.disableClose=!1;else try{let i=await ZX(`current`);await QX(i.id,m(l({},i),{groups:i.groups.filter(a=>!a.startsWith(`placeos_`)),work_preferences:t}))}catch(i){throw Ece(`Unable to save user work preferences.`),i}finally{this.loading.set(!1),this._dialog_ref.disableClose=!1}e&&(this._data?.local||Ug(),this._dialog_ref.close(t))}setWeekdayEnabled(e,t){this.weekdays_enabled.update(i=>m(l({},i),{[e]:t}))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`wfh-settings-modal`]],decls:8,vars:6,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``,1,`bg-base-200`],[1,`relative`,`flex`,`max-h-[calc(100vh-9rem)]`,`w-160`,`max-w-full`,`flex-col`,`space-y-2`,`overflow-x-hidden`,`overflow-y-auto`,`rounded-sm`,`px-2`,`py-4`,`sm:max-h-[65vh]`,`sm:p-4`],[`loading`,``,1,`bg-base-100`,`relative`,`flex`,`h-72`,`w-[24rem]`,`flex-col`,`items-center`,`justify-center`,`space-y-2`,`overflow-hidden`,`rounded-sm`,`text-center`],[1,`border-base-200`,`flex`,`justify-end`,`border-t`,`px-4`,`py-2`],[1,`border-base-300`,`relative`,`mb-4`,`flex`,`w-full`,`items-center`,`justify-between`,`space-x-2`,`rounded-sm`,`border`,`p-2`],[1,`flex`,`flex-1`,`flex-col`,`items-center`,`pt-2`],[1,`bg-base-100`,`absolute`,`top-0`,`left-2`,`-translate-y-1/2`,`px-2`],[1,`border-base-300`,`relative`,`flex`,`w-full`,`flex-col`,`items-center`,`justify-between`,`space-y-4`,`rounded-sm`,`border`,`px-2`,`pt-6`,`pb-4`,`sm:px-4`],[1,`flex`,`flex-col`,`items-center`,`justify-center`,`space-y-4`,`px-8`,`py-16`],[1,`text-xs`,`font-bold`,`uppercase`],[3,`ngModelChange`,`ngModel`],[1,`bg-base-100`,`absolute`,`top-0`,`left-2`,`m-0!`,`-translate-y-1/2`,`px-2`],[1,`border-base-200`,`relative`,`flex`,`w-full`,`items-center`,`justify-between`,`space-x-2`,`rounded-sm`,`border`,`p-2`],[1,`w-1/2`,`flex-1`,`space-y-2`,`pt-2`],[1,`flex`,`items-center`,`space-x-2`],[1,`border-base-200`,`bg-base-100`,`bg-opacity-50`,`absolute`,`top-0`,`left-2`,`-translate-y-1/2`,`rounded-sm`,`border`,`px-2`,`text-sm`,`font-medium`],[1,`w-1/4`,`flex-1`,3,`ngModelChange`,`ngModel`,`from`,`no_error`],[`appearance`,`outline`,1,`no-subscript`,`w-1/4`,`flex-1`],[3,`value`],[`icon`,``,`matRipple`,``,1,`border-base-400`,`h-12`,`w-12`,`rounded-sm`,`border`],[`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`],[`icon`,``,`matRipple`,``,1,`border-base-400`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`],[`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`],[`src`,`assets/icons/no-results.svg`,1,`m-auto`],[1,`opacity-30`],[3,`diameter`],[`btn`,``,`matRipple`,``,1,`w-48`,3,`click`]],template:function(t,i){t&1&&(ds$1(0,`header`,0)(1,`h2`,1),Xg(2),Jg(3,`translate`),Xa$1(),ld(4,bl,3,0,`button`,2),Xa$1(),ld(5,El,9,4,`main`,3)(6,Il,5,4,`div`,4),ld(7,Nl,4,3,`footer`,5)),t&2&&(ni(2),oc$1(` `,cx(3,4,`COMMON.WORK_LOCATION_SETTINGS`),` `),ni(2),ud(i.loading()?-1:4),ni(),ud(i.loading()?6:5),ni(2),ud(i.loading()?-1:7))},dependencies:[dC,yoe,Eoe,Da$1,np,Wt$1,qn,$t,jt,rT,ha,kn,ai,TX,_X,SU,Noe,ut,qt,BF,f],encapsulation:2})}}return n})();var Ol=[`knob`];var Rl=[`valueIndicatorContainer`];function Dl(n,o){if(n&1&&(ds$1(0,`div`,2,1)(2,`div`,5)(3,`span`,6),Xg(4),Xa$1()()()),n&2){let e=dd();ni(4),tA(e.valueIndicatorText)}}var Al=[`trackActive`];var Pl=[`*`];function Fl(n,o){if(n&1&&PI(0,`div`),n&2){let e=o.$implicit,t=o.$index,i=dd(3);Qg(e===0?`mdc-slider__tick-mark--active`:`mdc-slider__tick-mark--inactive`),fd(`transform`,i._calcTickMarkTransform(t))}}function Vl(n,o){if(n&1&&Q0(0,Fl,1,4,`div`,8,q0),n&2)X0(dd(2)._tickMarks)}function Ll(n,o){if(n&1&&(ds$1(0,`div`,6,1),ld(2,Vl,2,0),Xa$1()),n&2){let e=dd();ni(2),ud(e._cachedWidth?2:-1)}}function Ul(n,o){if(n&1&&PI(0,`mat-slider-visual-thumb`,7),n&2){let e=dd();LI(`discrete`,e.discrete)(`thumbPosition`,1)(`valueIndicatorText`,e.startValueIndicatorText)}}var O=(function(n){return n[n.START=1]=`START`,n[n.END=2]=`END`,n})(O||{});var Qt=(function(n){return n[n.ACTIVE=0]=`ACTIVE`,n[n.INACTIVE=1]=`INACTIVE`,n})(Qt||{});var io=new D$1(`_MatSlider`);var fa=new D$1(`_MatSliderThumb`);var Bl=new D$1(`_MatSliderRangeThumb`);var ga=new D$1(`_MatSliderVisualThumb`);var zl=(()=>{class n{_cdr=p(Sn$1);_ngZone=p(Z);_slider=p(io);_renderer=p(We);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=p(ie).nativeElement;_platform=p(qe);ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let t=this._sliderInputEl,i=this._renderer;this._listenerCleanups=[i.listen(t,`pointermove`,this._onPointerMove),i.listen(t,`pointerdown`,this._onDragStart),i.listen(t,`pointerup`,this._onDragEnd),i.listen(t,`pointerleave`,this._onMouseLeave),i.listen(t,`focus`,this._onFocus),i.listen(t,`blur`,this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e())}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let t=this._hostElement.getBoundingClientRect(),i=this._slider._isCursorOnSliderThumb(e,t);this._isHovered=i,i?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add(`mdc-slider__thumb--focused`)};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove(`mdc-slider__thumb--focused`)};_onDragStart=e=>{e.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add(`mat-mdc-slider-hover-ripple`))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add(`mat-mdc-slider-focus-ripple`))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add(`mat-mdc-slider-active-ripple`))}_isShowingRipple(e){return e?.state===fe$1.FADING_IN||e?.state===fe$1.VISIBLE}_showRipple(e,t){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===O.START?O.END:O.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!t)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:!0,persistent:!0})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let t=this._getSibling();t._isShowingAnyRipple()||(this._hideValueIndicator(),t._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add(`mdc-slider__thumb--with-indicator`)}_hideValueIndicator(){this._hostElement.classList.remove(`mdc-slider__thumb--with-indicator`)}_getSibling(){return this._slider._getThumb(this.thumbPosition===O.START?O.END:O.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static ɵfac=function(t){return new(t||n)};static ɵcmp=Ft({type:n,selectors:[[`mat-slider-visual-thumb`]],viewQuery:function(t,i){if(t&1&&Ts$1(np,5)(Ol,5)(Rl,5),t&2){let a;nc$1(a=rc$1())&&(i._ripple=a.first),nc$1(a=rc$1())&&(i._knob=a.first),nc$1(a=rc$1())&&(i._valueIndicatorContainer=a.first)}},hostAttrs:[1,`mdc-slider__thumb`,`mat-mdc-slider-visual-thumb`],inputs:{discrete:`discrete`,thumbPosition:`thumbPosition`,valueIndicatorText:`valueIndicatorText`},features:[Qe([{provide:ga,useExisting:n}])],decls:4,vars:2,consts:[[`knob`,``],[`valueIndicatorContainer`,``],[1,`mdc-slider__value-indicator-container`],[1,`mdc-slider__thumb-knob`],[`matRipple`,``,1,`mat-focus-indicator`,3,`matRippleDisabled`],[1,`mdc-slider__value-indicator`],[1,`mdc-slider__value-indicator-text`]],template:function(t,i){t&1&&(ld(0,Dl,5,1,`div`,2),PI(1,`div`,3,0)(3,`div`,4)),t&2&&(ud(i.discrete?0:-1),ni(3),LI(`matRippleDisabled`,!0))},dependencies:[np],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
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
`],encapsulation:2})}return n})();var En=(()=>{class n{_ngZone=p(Z);_cdr=p(Sn$1);_elementRef=p(ie);_dir=p(Ar,{optional:!0});_globalRippleOptions=p(ol$1,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let t=this._getInput(O.END),i=this._getInput(O.START);t&&(t.disabled=this._disabled),i&&(i.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(e){let t=e==null||isNaN(e)?this._min:e;this._min!==t&&this._updateMin(t)}_min=0;color;disableRipple=!1;_updateMin(e){let t=this._min;this._min=e,this._isRange?this._updateMinRange({old:t,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange()}_updateMinRange(e){let t=this._getInput(O.END),i=this._getInput(O.START),a=t.value,d=i.value;i.min=e.new,t.min=Math.max(e.new,i.value),i.max=Math.min(t.max,t.value),i._updateWidthInactive(),t._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(t,i):this._onTranslateXChangeBySideEffect(i,t),a!==t.value&&this._onValueChange(t),d!==i.value&&this._onValueChange(i)}_updateMinNonRange(e){let t=this._getInput(O.END);if(t){let i=t.value;t.min=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t)}}get max(){return this._max}set max(e){let t=e==null||isNaN(e)?this._max:e;this._max!==t&&this._updateMax(t)}_max=100;_updateMax(e){let t=this._max;this._max=e,this._isRange?this._updateMaxRange({old:t,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange()}_updateMaxRange(e){let t=this._getInput(O.END),i=this._getInput(O.START),a=t.value,d=i.value;t.max=e.new,i.max=Math.min(e.new,t.value),t.min=i.value,t._updateWidthInactive(),i._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(i,t):this._onTranslateXChangeBySideEffect(t,i),a!==t.value&&this._onValueChange(t),d!==i.value&&this._onValueChange(i)}_updateMaxNonRange(e){let t=this._getInput(O.END);if(t){let i=t.value;t.max=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t)}}get step(){return this._step}set step(e){let t=isNaN(e)?this._step:e;this._step!==t&&this._updateStep(t)}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let e=this._getInput(O.END),t=this._getInput(O.START),i=e.value,a=t.value,d=t.value;e.min=this._min,t.max=this._max,e.step=this._step,t.step=this._step,this._platform.SAFARI&&(e.value=e.value,t.value=t.value),e.min=Math.max(this._min,t.value),t.max=Math.min(this._max,e.value),t._updateWidthInactive(),e._updateWidthInactive(),e.value<d?this._onTranslateXChangeBySideEffect(t,e):this._onTranslateXChangeBySideEffect(e,t),i!==e.value&&this._onValueChange(e),a!==t.value&&this._onValueChange(t)}_updateStepNonRange(){let e=this._getInput(O.END);if(e){let t=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),t!==e.value&&this._onValueChange(e)}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=Oy();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText=``;endValueIndicatorText=``;_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=Le(()=>this._dir?.valueSignal()===`rtl`);_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=p(qe);constructor(){p(ao).load(sl$1);let e=this._isRtl();vZ(()=>{let t=this._isRtl();t!==e&&(e=t,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(O.END),t=this._getInput(O.START);this._isRange=!!e&&!!t,this._cdr.detectChanges();let i=this._getThumb(O.END);this._rippleRadius=i._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,t):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=!0,e._updateThumbUIByValue()}_initUIRange(e,t){e.initProps(),e.initUI(),t.initProps(),t.initUI(),e._updateMinMax(),t._updateMinMax(),e._updateStaticStyles(),t._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,e._updateThumbUIByValue(),t._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let e=this._getInput(O.END),t=this._getInput(O.START);e._setIsLeftThumb(),t._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),t.translateX=t._calcTranslateXByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateWidthInactive(),t._updateWidthInactive(),e._updateThumbUIByValue(),t._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(O.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>`u`||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(O.START)._isActive||this._getThumb(O.END)._isActive}_getValue(e=O.END){let t=this._getInput(e);return t?t.value:this.min}_skipUpdate(){return!!(this._getInput(O.START)?._skipUIUpdate||this._getInput(O.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(e){let t=this._trackActive.nativeElement.style;t.left=e.left,t.right=e.right,t.transformOrigin=e.transformOrigin,t.transform=e.transform}_calcTickMarkTransform(e){let t=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-t:t}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e))}_onTranslateXChangeBySideEffect(e,t){this._hasViewInitialized&&(e._updateThumbUIByValue(),t._updateThumbUIByValue())}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(O.END),t=this._getInput(O.START);e._updateThumbUIByValue(),t._updateThumbUIByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateMinMax(),t._updateMinMax(),e._updateWidthInactive(),t._updateWidthInactive()}else{let e=this._getInput(O.END);e&&e._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let e=this._getInput(O.START),t=this._getInput(O.END);return!e||!t?!1:t.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let t=e.getSibling(),i=this._getThumb(e.thumbPosition);this._getThumb(t.thumbPosition)._hostElement.classList.remove(`mdc-slider__thumb--top`),i._hostElement.classList.toggle(`mdc-slider__thumb--top`,this._thumbsOverlap)}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e))}_updateThumbUI(e){if(this._skipUpdate())return;let t=this._getThumb(e.thumbPosition===O.END?O.END:O.START);t._hostElement.style.transform=`translateX(${e.translateX}px)`}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let t=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(t):e._hostElement.setAttribute(`aria-valuetext`,t),this.discrete){e.thumbPosition===O.START?this.startValueIndicatorText=t:this.endValueIndicatorText=t;let i=this._getThumb(e.thumbPosition);t.length<3?i._hostElement.classList.add(`mdc-slider__thumb--short-value`):i._hostElement.classList.remove(`mdc-slider__thumb--short-value`)}}_updateValueIndicatorUIs(){let e=this._getInput(O.END),t=this._getInput(O.START);e&&this._updateValueIndicatorUI(e),t&&this._updateValueIndicatorUI(t)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,i=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*i}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e))}_updateTrackUIRange(e){let t=e.getSibling();if(!t||!this._cachedWidth)return;let i=Math.abs(t.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:`auto`,right:`${this._cachedWidth-t.translateX}px`,transformOrigin:`right`,transform:`scaleX(${i})`}):this._setTrackActiveStyles({left:`${t.translateX}px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${i})`})}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:`auto`,right:`0px`,transformOrigin:`right`,transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:`0px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${e.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e)}_updateTickMarkUINonRange(e){let t=this._getValue(),i=Math.max(Math.round((t-this.min)/e),0)+1,a=Math.max(Math.round((this.max-t)/e),0)-1;this._isRtl()?i++:a++,this._tickMarks=Array(i).fill(Qt.ACTIVE).concat(Array(a).fill(Qt.INACTIVE))}_updateTickMarkUIRange(e){let t=this._getValue(),i=this._getValue(O.START),a=Math.max(Math.round((i-this.min)/e),0),d=Math.max(Math.round((t-i)/e)+1,0),x=Math.max(Math.round((this.max-t)/e),0);this._tickMarks=Array(a).fill(Qt.INACTIVE).concat(Array(d).fill(Qt.ACTIVE),Array(x).fill(Qt.INACTIVE))}_getInput(e){if(e===O.END&&this._input)return this._input;if(this._inputs?.length)return e===O.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===O.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle(`mat-mdc-slider-with-animation`,this._hasAnimation)}_isCursorOnSliderThumb(e,t){let i=t.width/2,a=t.x+i,d=t.y+i,x=e.clientX-a,R=e.clientY-d;return Math.pow(x,2)+Math.pow(R,2)<Math.pow(i,2)}static ɵfac=function(t){return new(t||n)};static ɵcmp=Ft({type:n,selectors:[[`mat-slider`]],contentQueries:function(t,i,a){if(t&1&&BI(a,fa,5)(a,Bl,4),t&2){let d;nc$1(d=rc$1())&&(i._input=d.first),nc$1(d=rc$1())&&(i._inputs=d)}},viewQuery:function(t,i){if(t&1&&Ts$1(Al,5)(ga,5),t&2){let a;nc$1(a=rc$1())&&(i._trackActive=a.first),nc$1(a=rc$1())&&(i._thumbs=a)}},hostAttrs:[1,`mat-mdc-slider`,`mdc-slider`],hostVars:12,hostBindings:function(t,i){t&2&&(Qg(`mat-`+(i.color||`primary`)),_r(`mdc-slider--range`,i._isRange)(`mdc-slider--disabled`,i.disabled)(`mdc-slider--discrete`,i.discrete)(`mdc-slider--tick-marks`,i.showTickMarks)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{disabled:[2,`disabled`,`disabled`,ct],discrete:[2,`discrete`,`discrete`,ct],showTickMarks:[2,`showTickMarks`,`showTickMarks`,ct],min:[2,`min`,`min`,qx],color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,ct],max:[2,`max`,`max`,qx],step:[2,`step`,`step`,qx],displayWith:`displayWith`},exportAs:[`matSlider`],features:[Qe([{provide:io,useExisting:n}])],ngContentSelectors:Pl,decls:9,vars:5,consts:[[`trackActive`,``],[`tickMarkContainer`,``],[1,`mdc-slider__track`],[1,`mdc-slider__track--inactive`],[1,`mdc-slider__track--active`],[1,`mdc-slider__track--active_fill`],[1,`mdc-slider__tick-marks`],[3,`discrete`,`thumbPosition`,`valueIndicatorText`],[3,`class`,`transform`]],template:function(t,i){t&1&&(ec$1(),tc$1(0),ds$1(1,`div`,2),PI(2,`div`,3),ds$1(3,`div`,4),PI(4,`div`,5,0),Xa$1(),ld(6,Ll,3,1,`div`,6),Xa$1(),ld(7,Ul,1,3,`mat-slider-visual-thumb`,7),PI(8,`mat-slider-visual-thumb`,7)),t&2&&(ni(6),ud(i.showTickMarks?6:-1),ni(),ud(i._isRange?7:-1),ni(),LI(`discrete`,i.discrete)(`thumbPosition`,2)(`valueIndicatorText`,i.endValueIndicatorText))},dependencies:[zl],styles:[`.mdc-slider__track {
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
`],encapsulation:2})}return n})();var Gl={provide:li,useExisting:Ye(()=>ci),multi:!0};var ci=(()=>{class n{_ngZone=p(Z);_elementRef=p(ie);_cdr=p(Sn$1);_slider=p(io);_platform=p(qe);_listenerCleanups;get value(){return qx(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let t=e+``;if(!this._hasSetInitialValue){this._initialValue=t;return}this._isActive||this._setValue(t)}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new re;dragStart=new re;dragEnd=new re;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e}_translateX;thumbPosition=O.END;get min(){return qx(this._hostElement.min,0)}set min(e){this._hostElement.min=e+``,this._cdr.detectChanges()}get max(){return qx(this._hostElement.max,0)}set max(e){this._hostElement.max=e+``,this._cdr.detectChanges()}get step(){return qx(this._hostElement.step,0)}set step(e){this._hostElement.step=e+``,this._cdr.detectChanges()}get disabled(){return ct(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=Ee(``);_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(e){this._isFocused=e}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new N;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let e=p(We);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,`pointerdown`,this._onPointerDown.bind(this)),e.listen(this._hostElement,`pointermove`,this._onPointerMove.bind(this)),e.listen(this._hostElement,`pointerup`,this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!this._isActive}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let t=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=t,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(e){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(e)},0)}_fixValue(e){let t=e.clientX-this._slider._cachedLeft,i=this._slider._cachedWidth,a=this._slider.step===0?1:this._slider.step,d=Math.floor((this._slider.max-this._slider.min)/a),x=this._slider._isRtl()?1-t/i:t/i,Y=Math.round(x*d)/d*(this._slider.max-this._slider.min)+this._slider.min,oe=Math.round(Y/a)*a;if(oe===this.value){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=oe,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation})}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(e){let t=this._tickMarkOffset,i=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,i),t)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e)}_updateThumbUIByPointerEvent(e,t){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(t)}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e)}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=!0}registerOnTouched(e){this._onTouchedFn=e}setDisabledState(e){this.disabled=e}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static ɵfac=function(t){return new(t||n)};static ɵdir=L$1({type:n,selectors:[[`input`,`matSliderThumb`,``]],hostAttrs:[`type`,`range`,1,`mdc-slider__input`],hostVars:1,hostBindings:function(t,i){t&1&&Qt$1(`change`,function(){return i._onChange()})(`input`,function(){return i._onInput()})(`blur`,function(){return i._onBlur()})(`focus`,function(){return i._onFocus()}),t&2&&yn(`aria-valuetext`,i._valuetext())},inputs:{value:[2,`value`,`value`,qx]},outputs:{valueChange:`valueChange`,dragStart:`dragStart`,dragEnd:`dragEnd`},exportAs:[`matSliderThumb`],features:[Qe([Gl,{provide:fa,useExisting:n}])]})}return n})();var In=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Ae$1({type:n});static ɵinj=Ie({imports:[Da$1,Si]})}return n})();function Wl(n,o){if(n&1){let e=ok();ds$1(0,`settings-toggle`,6),Qt$1(`ngModelChange`,function(i){Dv(e);return Tv(dd().setDarkMode(i))}),ds$1(1,`div`,7)(2,`icon`,8),Xg(3,`mode_night`),Xa$1(),ds$1(4,`div`),Xg(5),Jg(6,`translate`),Xa$1()()(),EP()}if(n&2)LI(`ngModel`,dd().dark_mode())(`toggle`,!0),SP(),ni(5),tA(cx(6,3,`COMMON.DARK_MODE`))}function Hl(n,o){if(n&1){let e=ok();ds$1(0,`settings-toggle`,6),Qt$1(`ngModelChange`,function(i){Dv(e);return Tv(dd().setLocatable(i))}),ds$1(1,`div`,7)(2,`icon`,8),Xg(3,`emergency_share`),Xa$1(),ds$1(4,`div`),Xg(5),Jg(6,`translate`),Xa$1()()(),EP()}if(n&2)LI(`ngModel`,dd().locatable())(`toggle`,!0),SP(),ni(5),tA(cx(6,3,`COMMON.LOCATABLE`))}function ql(n,o){if(n&1){let e=ok();ds$1(0,`div`,9),Xg(1),Jg(2,`translate`),Xa$1(),ds$1(3,`div`,10)(4,`span`,11),Xg(5,`A`),Xa$1(),ds$1(6,`mat-slider`,12)(7,`input`,13),Qt$1(`ngModelChange`,function(i){Dv(e);return Tv(dd().applySetting(`font_size`,i))}),Xa$1(),EP(),Xa$1(),ds$1(8,`span`,2),Xg(9,`A`),Xa$1(),ds$1(10,`span`,14),Xg(11),Xa$1()()}if(n&2){let e=dd();ni(),oc$1(` `,cx(2,6,`COMMON.TEXT_SIZE_MSG`),` `),ni(5),LI(`min`,10)(`max`,24)(`step`,2),ni(),LI(`ngModel`,e.font_size()),SP(),ni(4),oc$1(` `,e.font_size(),`px `)}}var va=(()=>{class n extends Ge{constructor(){super(...arguments),this._data=p(oe),this._settings=p(Dn),this.accessible=Ee(!1),this.locatable=Ee(!1),this.can_locate=AT(`allow_locatability_option`,!0),this._allow_dark_mode=this._settings.signal(`allow_dark_mode`,!1),this._font_size=this._settings.signal(`font_size`,16,!0),this._accessible=this._settings.signal(`accessible`,!1,!0),this._theme=this._settings.theme_signal,this.dark_mode=Le(()=>this._theme()===`dark`),this.can_change_dark_mode=Le(()=>!!this._allow_dark_mode()),this.font_size=this._font_size,this.applySetting=(e,t)=>this.timeout(`apply_setting`,()=>{this._settings.saveUserSetting(e,t),e===`accessible`&&this.accessible.set(t)},500),this.close=()=>this._data?.close(),this.setLocatable=e=>{this._settings.updateLocatable(e),this.locatable.set(e)}}async ngOnInit(){this.accessible.set(!!this._accessible()),this.subscription(`user`,kg.subscribe(e=>{this.locatable.set(e.locatable)}))}setDarkMode(e){let t=this._theme();e&&t!==`dark`?this._settings.setTheme(`dark`):!e&&t===`dark`&&this._settings.setTheme(`light`)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=tt(n)))(i||n)}})()}static{this.ɵcmp=Ft({type:n,selectors:[[`accessibility-tooltip`]],features:[fe],decls:18,vars:11,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-[20rem]`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`,3,`click`],[1,`text-2xl`],[1,``],[1,`space-y-2`,`p-2`],[3,`ngModel`,`toggle`],[3,`ngModelChange`,`ngModel`,`toggle`],[1,`flex`,`items-center`,`space-x-2`],[1,`-ml-2`,`text-xl`],[1,`bg-base-200`,`px-8`,`py-4`,`text-center`],[1,`flex`,`items-center`,`space-x-4`,`px-4`],[1,`text-sm`],[1,`w-1/2`,`flex-1`,`text-[16px]`,3,`min`,`max`,`step`],[`matSliderThumb`,``,1,`text-[16px]`,3,`ngModelChange`,`ngModel`],[1,`bg-base-300`,`my-2`,`rounded-sm`,`px-2`,`py-1`,`text-base`,`text-white`]],template:function(t,i){t&1&&(ds$1(0,`div`,0)(1,`div`,1),Qt$1(`click`,function(){return i.close()}),ds$1(2,`icon`,2),Xg(3,`arrow_back`),Xa$1(),ds$1(4,`div`,3),Xg(5),Jg(6,`translate`),Xa$1()(),ds$1(7,`div`,4),ld(8,Wl,7,5,`settings-toggle`,5),ld(9,Hl,7,5,`settings-toggle`,5),ds$1(10,`settings-toggle`,6),Qt$1(`ngModelChange`,function(d){return i.applySetting(`accessible`,d)}),ds$1(11,`div`,7)(12,`icon`,8),Xg(13,`playlist_add`),Xa$1(),ds$1(14,`div`),Xg(15),Jg(16,`translate`),Xa$1()()(),EP(),Xa$1(),ld(17,ql,12,8),Xa$1()),t&2&&(ni(5),oc$1(` `,cx(6,7,`COMMON.CONTROLS_ACCESSIBILITY`),` `),ni(3),ud(i.can_change_dark_mode()?8:-1),ni(),ud(i.can_locate()?9:-1),ni(),LI(`ngModel`,i.accessible())(`toggle`,!0),SP(),ni(5),tA(cx(16,9,`COMMON.TEXT_SIZE`)),ni(2),ud(i.accessible()?17:-1))},dependencies:[Da$1,np,In,En,ci,Yr,Noe,TX,zC,_X,SU,f],encapsulation:2})}}return n})();function jl(n,o){if(n&1){let e=ok();ds$1(0,`mat-radio-button`,8),Qt$1(`click`,function(){let i=Dv(e).$implicit;return Tv(dd().setBuilding(i))}),Xg(1),Xa$1()}if(n&2){let e=o.$implicit;LI(`value`,e.id),ni(),oc$1(` `,e.display_name||e.name,` `)}}var xa=(()=>{class n{constructor(){this._data=p(oe),this._org=p(Tu),this.buildings=this._org.active_buildings,this.building=this._org.active_building,this.setBuilding=e=>{this._org.setBuilding(e,!0),this._data?.close()},this.close=()=>this._data?.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`building-select`]],decls:16,vars:8,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-74`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`,3,`click`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`],[1,`text-2xl`],[1,`leading-tight`],[1,`text-xs`,`opacity-30`],[1,`px-4`,`py-2`,`text-xs`,`opacity-60`],[1,`flex`,`flex-col`,`space-y-2`,`px-2`,3,`ngModel`],[3,`value`],[3,`click`,`value`]],template:function(t,i){t&1&&(ds$1(0,`div`,0),Qt$1(`click`,function(){return i.close()}),ds$1(1,`div`,1)(2,`icon`,2),Xg(3,`arrow_back`),Xa$1(),ds$1(4,`div`,3)(5,`div`),Xg(6),Xa$1(),ds$1(7,`div`,4),Xg(8),Jg(9,`translate`),Xa$1()()(),ds$1(10,`div`,5),Xg(11),Jg(12,`translate`),Xa$1(),ds$1(13,`mat-radio-group`,6),Q0(14,jl,2,2,`mat-radio-button`,7,Z0),Xa$1(),EP(),Xa$1()),t&2&&(ni(6),oc$1(` `,i.building()?.display_name||i.building()?.name,` `),ni(2),oc$1(` `,cx(9,4,`RESOURCE.BUILDING`),` `),ni(3),oc$1(` `,cx(12,6,`COMMON.BUILDING_SELECT`),` `),ni(2),LI(`ngModel`,i.building()?.id),SP(),ni(),X0(i.buildings()))},dependencies:[Mn,si,Kt,Noe,Da$1,np,TX,_X,SU,f],encapsulation:2})}}return n})();function $l(n,o){n&1&&(ds$1(0,`div`,3),Xg(1),Jg(2,`translate`),Xa$1()),n&2&&(ni(),oc$1(` `,cx(2,1,`COMMON.DESK_HEIGHT_NOT_SET`),` `))}function Kl(n,o){if(n&1){let e=ok();ds$1(0,`button`,13),Qt$1(`click`,function(){Dv(e);return Tv(dd().onClose())}),Xg(1),Jg(2,`translate`),Xa$1()}n&2&&(ni(),oc$1(` `,cx(2,1,`COMMON.SAVE`),` `))}var ka=(()=>{class n{constructor(){this._settings=p(Dn),this.show_close=gZ(!1),this.close=mZ(),this.not_set=Ee(!1),this.desk_sitting_height=Ee(71),this.desk_standing_height=Ee(101)}ngOnInit(){this.not_set.set(!this._settings.get(`desk_sitting_height`)&&!this._settings.get(`desk_standing_height`)),this.desk_sitting_height.set(this._settings.get(`desk_sitting_height`)||71),this.desk_standing_height.set(this._settings.get(`desk_standing_height`)||101)}onClose(){this.saveSetting(`desk_sitting_height`,this.desk_sitting_height()),this.saveSetting(`desk_standing_height`,this.desk_standing_height()),this.close.emit()}formatLabel(e){return`${e.toFixed(1)}cm`}saveSetting(e,t){this._settings.saveUserSetting(e,t)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`desk-height-presets`]],inputs:{show_close:[1,`show_close`]},outputs:{show_close:`show_closeChange`,close:`close`},decls:29,vars:23,consts:[[1,`bg-base-100`,`relative`,`w-[20rem]`,`rounded-sm`,`p-4`,`shadow-sm`],[1,`mb-2`,`text-lg`],[1,`mb-4`,`text-xs`,`opacity-60`],[1,`bg-warning`,`text-warning-content`,`-mx-2`,`mb-4`,`rounded-sm`,`p-2`,`text-xs`],[1,`mt-2`,`flex`,`flex-col`],[1,`flex`,`items-center`,`space-x-2`],[`min`,`60`,`max`,`80`,`step`,`0.5`,`discrete`,``,1,`flex-1`,3,`displayWith`],[`matSliderThumb`,``,3,`ngModelChange`,`ngModel`],[1,`w-12`,`text-right`,`text-sm`],[1,`mr-2`,`flex`,`items-center`,`space-x-2`],[`min`,`90`,`max`,`120`,`step`,`0.5`,`discrete`,``,1,`flex-1`,3,`displayWith`],[1,`mr-2`,`w-12`,`text-right`,`text-sm`],[`btn`,``,`matRipple`,``,1,`mt-2`,`w-full`],[`btn`,``,`matRipple`,``,1,`mt-2`,`w-full`,3,`click`]],template:function(t,i){t&1&&(ds$1(0,`div`,0)(1,`div`,1),Xg(2),Jg(3,`translate`),Xa$1(),ds$1(4,`div`,2),Xg(5),Jg(6,`translate`),Xa$1(),ld(7,$l,3,3,`div`,3),ds$1(8,`div`,2),Xg(9),Jg(10,`translate`),Xa$1(),ds$1(11,`div`,4)(12,`label`),Xg(13),Jg(14,`translate`),Xa$1(),ds$1(15,`div`,5)(16,`mat-slider`,6)(17,`input`,7),Qt$1(`ngModelChange`,function(d){return i.desk_sitting_height.set(d),i.saveSetting(`desk_sitting_height`,d)}),Xa$1(),EP(),Xa$1(),ds$1(18,`div`,8),Xg(19),Xa$1()(),ds$1(20,`label`),Xg(21),Jg(22,`translate`),Xa$1(),ds$1(23,`div`,9)(24,`mat-slider`,10)(25,`input`,7),Qt$1(`ngModelChange`,function(d){return i.desk_standing_height.set(d),i.saveSetting(`desk_standing_height`,d)}),Xa$1(),EP(),Xa$1(),ds$1(26,`div`,11),Xg(27),Xa$1()()(),ld(28,Kl,3,3,`button`,12),Xa$1()),t&2&&(ni(2),oc$1(` `,cx(3,13,`COMMON.DESK_HEIGHT_TITLE`),` `),ni(3),oc$1(` `,cx(6,15,`COMMON.DESK_HEIGHT_MSG`),` `),ni(2),ud(i.not_set()&&i.show_close()?7:-1),ni(2),oc$1(` `,cx(10,17,`COMMON.DESK_HEIGHT_INFO`),` `),ni(4),tA(cx(14,19,`COMMON.DESK_HEIGHT_SITTING`)),ni(3),LI(`displayWith`,i.formatLabel),ni(),LI(`ngModel`,i.desk_sitting_height()),SP(),ni(2),oc$1(` `,i.desk_sitting_height().toFixed(1),`cm `),ni(2),tA(cx(22,21,`COMMON.DESK_HEIGHT_STANDING`)),ni(3),LI(`displayWith`,i.formatLabel),ni(),LI(`ngModel`,i.desk_standing_height()),SP(),ni(2),oc$1(` `,i.desk_standing_height().toFixed(1),`cm `),ni(),ud(i.show_close()?28:-1))},dependencies:[Da$1,np,In,En,ci,TX,zC,_X,SU,f],encapsulation:2})}}return n})();function Ql(n,o){if(n&1&&(ds$1(0,`a`,4)(1,`div`,5),PI(2,`icon`,6),ds$1(3,`div`),Xg(4),Xa$1()()()),n&2){let e=o.$implicit;LI(`href`,e.link,Zu),ni(2),LI(`icon`,e.icon),ni(2),tA(e.name)}}var ya=(()=>{class n{constructor(){this._data=p(oe),this._settings=p(Dn),this._tiles=this._settings.signal(`help`,[]),this.close=()=>{this._data?.close()}}get tiles(){return this._tiles()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`help-tooltip`]],decls:9,vars:3,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`w-74`,`flex-col`,`rounded-sm`,`shadow-sm`,3,`click`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-4`],[1,`text-2xl`],[1,``],[`matRipple`,``,`target`,`_blank`,`ref`,`noreferer noopener`,1,`w-full`,`p-2`,`text-left`,3,`href`],[1,`hover:bg-base-200`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-sm`,`p-2`],[1,`text-xl`,3,`icon`]],template:function(t,i){t&1&&(ds$1(0,`div`,0),Qt$1(`click`,function(){return i.close()}),ds$1(1,`div`,1)(2,`icon`,2),Xg(3,`arrow_back`),Xa$1(),ds$1(4,`div`,3),Xg(5),Jg(6,`translate`),Xa$1()(),Q0(7,Ql,5,3,`a`,4,Z0),Xa$1()),t&2&&(ni(5),tA(cx(6,1,`COMMON.CONTROLS_HELP`)),ni(2),X0(i.tiles))},dependencies:[Da$1,np,Noe,f],encapsulation:2})}}return n})();var Xl=(n,o)=>o.id;function Yl(n,o){if(n&1&&(ds$1(0,`div`,8),Xg(1),Xa$1()),n&2){let e=dd().$implicit;ni(),oc$1(` `,e.local,` `)}}function Zl(n,o){if(n&1){let e=ok();ds$1(0,`button`,6),Qt$1(`click`,function(){let i=Dv(e).$implicit;return Tv(dd().setLocale(i.id))}),ds$1(1,`div`,7),Jg(2,`translate`),ds$1(3,`div`),Xg(4),Jg(5,`translate`),Xa$1(),ld(6,Yl,2,1,`div`,8),Jg(7,`translate`),Xa$1()()}if(n&2){let e=o.$implicit,t=dd();ni(),_r(`mt-2`,cx(2,8,e.name)!==e.local)(`border`,t.active_locale===e.id)(`border-info`,t.active_locale===e.id),ni(3),tA(cx(5,10,e.name)),ni(2),ud(cx(7,12,e.name)!==e.local?6:-1)}}var Ca=(()=>{class n{constructor(){this._data=p(oe),this._settings=p(Dn),this._locale=p(Dle),this._locales=this._settings.signal(`locales`,[]),this.setLocale=e=>{this._locale.setLocale(e),localStorage.setItem(`PLACEOS.locale`,e),setTimeout(()=>location.reload(),300)},this.close=()=>this._data?.close()}get active_locale(){return this._locale.locale}get locales(){return this._locales()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`language-select`]],decls:12,vars:6,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-74`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`,3,`click`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`],[1,`text-2xl`],[1,``],[1,`px-4`,`py-2`,`text-xs`,`opacity-60`],[`matRipple`,``,1,`flex`,`h-14`,`items-center`,`justify-between`,`space-x-8`,`px-2`,`text-left`],[`matRipple`,``,1,`flex`,`h-14`,`items-center`,`justify-between`,`space-x-8`,`px-2`,`text-left`,3,`click`],[1,`hover:bg-base-200`,`flex`,`flex-1`,`items-center`,`justify-between`,`rounded-sm`,`p-2`,`leading-tight`],[1,`bg-base-300`,`rounded-sm`,`px-2`,`py-1`,`text-xs`,`opacity-60`]],template:function(t,i){t&1&&(ds$1(0,`div`,0),Qt$1(`click`,function(){return i.close()}),ds$1(1,`div`,1)(2,`icon`,2),Xg(3,`arrow_back`),Xa$1(),ds$1(4,`div`,3),Xg(5),Jg(6,`translate`),Xa$1()(),ds$1(7,`div`,4),Xg(8),Jg(9,`translate`),Xa$1(),Q0(10,Zl,8,14,`button`,5,Xl),Xa$1()),t&2&&(ni(5),tA(cx(6,2,`COMMON.LANGUAGE`)),ni(3),oc$1(` `,cx(9,4,`COMMON.LANGUAGE_SELECT`),` `),ni(2),X0(i.locales))},dependencies:[Da$1,np,Noe,f],encapsulation:2})}}return n})();function Jl(n,o){if(n&1){let e=ok();ds$1(0,`mat-radio-button`,8),Qt$1(`click`,function(){let i=Dv(e).$implicit;return Tv(dd().setRegion(i))}),Xg(1),Xa$1()}if(n&2){let e=o.$implicit;LI(`value`,e.id),ni(),oc$1(` `,e.display_name||e.name,` `)}}var Sa=(()=>{class n{constructor(){this._data=p(oe),this._org=p(Tu),this.regions=this._org.region_list,this.region=this._org.active_region,this.setRegion=async e=>{await this._org.setRegion(e),this._org.setBuilding(this._org.building,!0),this._data?.close()},this.close=()=>this._data?.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`region-select`]],decls:16,vars:8,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-74`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`,3,`click`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`],[1,`text-2xl`],[1,`leading-tight`],[1,`text-xs`,`opacity-30`],[1,`px-4`,`py-2`,`text-xs`,`opacity-60`],[1,`flex`,`flex-col`,`space-y-2`,`px-2`,3,`ngModel`],[3,`value`],[3,`click`,`value`]],template:function(t,i){t&1&&(ds$1(0,`div`,0),Qt$1(`click`,function(){return i.close()}),ds$1(1,`div`,1)(2,`icon`,2),Xg(3,`arrow_back`),Xa$1(),ds$1(4,`div`,3)(5,`div`),Xg(6),Xa$1(),ds$1(7,`div`,4),Xg(8),Jg(9,`translate`),Xa$1()()(),ds$1(10,`div`,5),Xg(11),Jg(12,`translate`),Xa$1(),ds$1(13,`mat-radio-group`,6),Q0(14,Jl,2,2,`mat-radio-button`,7,Z0),Xa$1(),EP(),Xa$1()),t&2&&(ni(6),oc$1(` `,i.region()?.display_name||i.region()?.name,` `),ni(2),oc$1(` `,cx(9,4,`RESOURCE.REGION`),` `),ni(3),oc$1(` `,cx(12,6,`COMMON.REGION_SELECT`),` `),ni(2),LI(`ngModel`,i.region()?.id),SP(),ni(),X0(i.regions()))},dependencies:[Mn,si,Kt,Noe,Da$1,np,TX,_X,SU,f],encapsulation:2})}}return n})();var Ma=(()=>{class n{constructor(){this._settings=p(Dn),this._tooltip=p(oe,{optional:!0}),this.plate_number=Ee(``)}async ngOnInit(){await ile(this._settings.initialised),this.plate_number.set(this._settings.get(`plate_number`)||``)}save(){this.plate_number()&&this._settings.saveUserSetting(`plate_number`,this.plate_number()),_ce(Mi(`COMMON.PARKING_SETTINGS_SAVE`)),this._tooltip?.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`user-parking-tooltip`]],decls:14,vars:13,consts:[[1,`border-base-300`,`bg-base-100`,`min-w-[20rem]`,`space-y-2`,`rounded-md`,`border`,`p-2`],[1,`border-base-300`,`border-b`,`text-lg`,`font-medium`],[1,`flex`,`flex-col`],[`for`,`plate-number`],[`appearance`,`outline`,1,`no-subscript`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`]],template:function(t,i){t&1&&(ds$1(0,`div`,0)(1,`h3`,1),Xg(2),Jg(3,`translate`),Xa$1(),ds$1(4,`div`,2)(5,`label`,3),Xg(6),Jg(7,`translate`),Xa$1(),ds$1(8,`mat-form-field`,4)(9,`input`,5),Jg(10,`translate`),sA(`ngModelChange`,function(d){return Gk(i.plate_number,d)||(i.plate_number=d),d}),Xa$1(),EP(),Xa$1()(),ds$1(11,`button`,6),Qt$1(`click`,function(){return i.save()}),Xg(12),Jg(13,`translate`),Xa$1()()),t&2&&(ni(2),oc$1(` `,cx(3,5,`COMMON.CONTROLS_PARKING`),` `),ni(4),tA(cx(7,7,`BOOKINGS.PARKING_PLATE_NUMBER`)),ni(3),iA(`ngModel`,i.plate_number),LI(`placeholder`,cx(10,9,`BOOKINGS.PARKING_PLATE_NUMBER`)),SP(),ni(3),oc$1(` `,cx(13,11,`COMMON.SAVE`),` `))},dependencies:[Wt$1,qn,fd$1,pd,TX,zC,_X,SU,f],encapsulation:2})}}return n})();function ec(n,o){if(n&1){let e=ok();ds$1(0,`button`,17),Qt$1(`click`,function(){let i=Dv(e).$implicit,a=dd().$index;return Tv(dd(2).setLocation(a,i.id))}),ds$1(1,`div`,18)(2,`icon`,11),Xg(3),Xa$1(),ds$1(4,`div`,19),Xg(5),Jg(6,`translate`),Xa$1()()()}if(n&2){let e=o.$implicit;ni(3),tA(e.icon),ni(2),oc$1(` `,cx(6,2,e.name),` `)}}function tc(n,o){n&1&&PI(0,`div`,16)}function ic(n,o){if(n&1&&(ds$1(0,`div`,9)(1,`div`,10)(2,`icon`,11),Xg(3),Xa$1()(),ds$1(4,`div`,12)(5,`button`,13)(6,`div`),Xg(7),Xa$1(),ds$1(8,`icon`),Xg(9,`expand_more`),Xa$1()(),ds$1(10,`mat-menu`,null,0),Q0(12,ec,7,4,`button`,14,Z0),Xa$1(),ds$1(14,`div`,15),Xg(15),Jg(16,`date`),Jg(17,`date`),Xa$1()(),ld(18,tc,1,0,`div`,16),Xa$1()),n&2){let e=o.$implicit,t=o.$index,i=hk(11),a=dd(2);_r(`opacity-30`,a.now>a.timeFrom(e.end_time)),ni(),_r(`bg-base-200`,a.now<a.timeFrom(e.start_time)||a.now>a.timeFrom(e.end_time))(`bg-info`,a.now>=a.timeFrom(e.start_time)&&a.now<=a.timeFrom(e.end_time))(`text-info-content`,a.now>=a.timeFrom(e.start_time)&&a.now<=a.timeFrom(e.end_time)),ni(2),tA(a.location_icon(a.timeFrom(e.start_time))),ni(2),LI(`matMenuTriggerFor`,i),ni(2),oc$1(` `,a.location(a.timeFrom(e.start_time)),` `),ni(5),X0(a.locations()),ni(3),nA(` `,e_$1(16,14,a.timeFrom(e.start_time),`shortTime`),` – `,e_$1(17,17,a.timeFrom(e.end_time),`shortTime`),` `),ni(3),ud(t>0?18:-1)}}function nc(n,o){if(n&1&&(ds$1(0,`div`,6),Q0(1,ic,19,20,`div`,8,Z0),Xa$1()),n&2){let e=dd();ni(),X0(e.active_preference?.blocks)}}function oc(n,o){n&1&&(ds$1(0,`div`,7)(1,`icon`,20),Xg(2,`event_busy`),Xa$1(),ds$1(3,`p`,21),Xg(4),Jg(5,`translate`),Xa$1(),ds$1(6,`p`,21),Xg(7),Jg(8,`translate`),Xa$1()()),n&2&&(ni(4),oc$1(` `,cx(5,2,`COMMON.WORK_LOCATION_EMPTY`),` `),ni(3),oc$1(` `,cx(8,4,`COMMON.WORK_LOCATION_EDIT_INFO`),` `))}var wa=(()=>{class n{constructor(){this._dialog=p(uN),this.locations=Ee([]),this.settings=Ee(void 0),this.overrides=Ee({})}get active_preference(){let e=qse(new Date,`yyyy-MM-dd`);return this.overrides()[e]?this.overrides()[e]:this.settings()?.find(t=>t.day_of_week===new Date().getDay())}get now(){return Wy(Date.now()).getTime()}ngOnInit(){let e=Ne();this.settings.set(e.work_preferences),this.overrides.set(e.work_overrides),this.locations.set([{id:`wfo`,name:Mi(`COMMON.WORK_OFFICE`),icon:`business`},{id:`wfh`,name:Mi(`COMMON.WORK_HOME`),icon:`home`},{id:`aol`,name:Mi(`COMMON.WORK_LEAVE`),icon:`event_busy`},{id:`sick`,name:Mi(`COMMON.WORK_SICK`),icon:`sick`}])}location_icon(e){return Ne().location_icon(e+60*1e3)}location(e){return Ne().location_name_time(e+60*1e3)}timeFrom(e){return Wy(ho(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}editSettings(){this._dialog.open(Tn)}async setLocation(e,t){let i=Ne(),a=this.active_preference,d=qse(Date.now(),`yyyy-MM-dd`),x=m(l({},i.work_overrides),{[d]:m(l({},a),{blocks:[...a.blocks.slice(0,e),m(l({},a.blocks[e]),{location:t}),...a.blocks.slice(e+1)]})});for(let R in x){let Y=Hr(R,`yyyy-MM-dd`,new Date);(!x[R].blocks.length||de(Y,gN(on$1(Date.now()),-1)))&&delete x[R]}this.overrides.set(x),await QX(i.id,m(l({},i),{work_overrides:x})),Ug()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`work-location-tooltip`]],decls:14,vars:11,consts:[[`work_menu`,`matMenu`],[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`w-74`,`flex-col`,`overflow-hidden`,`rounded-sm`,`shadow-sm`],[1,`flex`,`items-center`,`justify-between`,`px-2`],[1,`px-2`,`py-4`,`font-medium`],[`icon`,``,`matRipple`,``,`matTooltipPosition`,`left`,1,`hover:bg-base-200`,3,`click`,`matTooltip`],[1,`px-4`,`text-sm`,`font-medium`],[1,`pb-2`],[1,`flex`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-2`,`p-8`,`opacity-30`],[1,`relative`,`flex`,`items-center`,`px-4`,`py-2`,3,`opacity-30`],[1,`relative`,`flex`,`items-center`,`px-4`,`py-2`],[1,`bg-base-200`,`z-20`,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`rounded-full`],[1,`text-2xl`],[1,`ml-2`,`flex-1`],[`matRipple`,``,1,`hover:bg-base-200`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`px-2`,`py-1`,`font-medium`,3,`matMenuTriggerFor`],[`mat-menu-item`,``],[1,`px-2`,`text-xs`,`opacity-60`],[1,`border-base-200`,`absolute`,`-top-2`,`left-7`,`h-4`,`w-0`,`-translate-x-px`,`border-l-2`,`border-dashed`],[`mat-menu-item`,``,3,`click`],[1,`flex`,`items-center`,`space-x-2`],[1,`pr-8`],[1,`text-6xl`],[1,`text-center`,`text-sm`]],template:function(t,i){t&1&&(ds$1(0,`div`,1)(1,`div`,2)(2,`h3`,3),Xg(3),Jg(4,`translate`),Xa$1(),ds$1(5,`button`,4),Jg(6,`translate`),Qt$1(`click`,function(){return i.editSettings()}),ds$1(7,`icon`),Xg(8,`edit_note`),Xa$1()()(),ds$1(9,`h3`,5),Xg(10),Jg(11,`date`),Xa$1(),ld(12,nc,3,0,`div`,6)(13,oc,9,6,`div`,7),Xa$1()),t&2&&(ni(3),oc$1(` `,cx(4,4,`COMMON.WORK_LOCATION`),` `),ni(2),LI(`matTooltip`,cx(6,6,`COMMON.WORK_LOCATION_EDIT`)),ni(5),oc$1(` `,e_$1(11,8,i.now,`fullDate`),` `),ni(2),ud(i.active_preference?.blocks?.length?12:13))},dependencies:[dC,yoe,Ud,It,Ni,Gd,Da$1,np,Yt,mt,Noe,BF,f],encapsulation:2})}}return n})();function rc(n,o){if(n&1){let e=ok();ds$1(0,`button`,28),Qt$1(`click`,function(){let i=Dv(e).$implicit;return Tv(dd(2).saveSetting(`work_location`,i.id))}),ds$1(1,`div`,29)(2,`icon`,23),Xg(3),Xa$1(),ds$1(4,`div`,30),Xg(5),Jg(6,`translate`),Xa$1()()()}if(n&2){let e=o.$implicit;ni(3),tA(e.icon),ni(2),oc$1(` `,cx(6,2,e.name),` `)}}function ac(n,o){if(n&1&&(ds$1(0,`div`,7)(1,`h3`,19),Xg(2,` Today's Work Location `),Xa$1(),ds$1(3,`div`,20)(4,`div`,21)(5,`div`,22)(6,`icon`,23),Xg(7),Xa$1()(),ds$1(8,`div`,24)(9,`button`,25)(10,`div`),Xg(11),Xa$1(),ds$1(12,`icon`),Xg(13,`expand_more`),Xa$1()(),ds$1(14,`mat-menu`,null,1),Q0(16,rc,7,4,`button`,26,Z0),Xa$1(),ds$1(18,`div`,27),Xg(19),Jg(20,`date`),Jg(21,`date`),Xa$1()()()()()),n&2){let e=hk(15),t=dd();ni(7),tA(t.location_icon(t.timeFrom(t.active_block().start_time))),ni(2),LI(`matMenuTriggerFor`,e),ni(2),oc$1(` `,t.location(t.timeFrom(t.active_block().start_time)),` `),ni(5),X0(t.pref_locations()),ni(3),nA(` `,e_$1(20,5,t.timeFrom(t.active_block().start_time),`shortTime`),` – `,e_$1(21,8,t.timeFrom(t.active_block().end_time),`shortTime`),` `)}}function sc(n,o){if(n&1&&(ds$1(0,`div`,8)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Xg(5,`layers`),Xa$1()(),ds$1(6,`div`,33),Xg(7),Xa$1(),ds$1(8,`icon`,34),Xg(9,` chevron_right `),Xa$1()()()()),n&2){let e=dd();LI(`content`,e.region_select),ni(7),oc$1(` `,e.region()?.display_name||e.region()?.name,` `)}}function lc(n,o){if(n&1&&(ds$1(0,`div`,8)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Xg(5,`business`),Xa$1()(),ds$1(6,`div`,33),Xg(7),Xa$1(),ds$1(8,`icon`,34),Xg(9,` chevron_right `),Xa$1()()()()),n&2){let e=dd();LI(`content`,e.building_select),ni(7),oc$1(` `,e.building()?.display_name||e.building()?.name,` `)}}function cc(n,o){if(n&1&&(ds$1(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Xg(5,`help`),Xa$1()(),ds$1(6,`div`,35),Xg(7),Jg(8,`translate`),Xa$1(),ds$1(9,`icon`,34),Xg(10,` chevron_right `),Xa$1()()()()),n&2)LI(`content`,dd().help_tooltip),ni(7),oc$1(` `,cx(8,2,`COMMON.CONTROLS_HELP`),` `)}function dc(n,o){if(n&1&&(ds$1(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Xg(5,`share_location`),Xa$1()(),ds$1(6,`div`,35),Xg(7),Jg(8,`translate`),Xa$1(),ds$1(9,`icon`,34),Xg(10,`chevron_right`),Xa$1()()()()),n&2)LI(`content`,dd().work_location_tooltip),ni(7),oc$1(` `,cx(8,2,`COMMON.WORK_LOCATION`),` `)}function mc(n,o){if(n&1&&(ds$1(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Xg(5,`mode_night`),Xa$1()(),ds$1(6,`div`,35),Xg(7),Jg(8,`translate`),Xa$1(),ds$1(9,`icon`,34),Xg(10,`chevron_right`),Xa$1()()()()),n&2){let e=dd();_r(`border-b!`,!e.locales().length||!e.desk_height()),LI(`content`,e.accessibility_tooltip),ni(7),oc$1(` `,cx(8,4,`COMMON.CONTROLS_ACCESSIBILITY`),` `)}}function pc(n,o){if(n&1&&(ds$1(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Xg(5,`desk`),Xa$1()(),ds$1(6,`div`,35),Xg(7),Jg(8,`translate`),Xa$1(),ds$1(9,`icon`,34),Xg(10,` chevron_right `),Xa$1()()()()),n&2){let e=dd(),t=hk(15);_r(`border-b!`,!e.locales().length),LI(`content`,t),ni(7),oc$1(` `,cx(8,4,`COMMON.CONTROLS_DESKS`),` `)}}function uc(n,o){n&1&&PI(0,`desk-height-presets`)}function _c(n,o){if(n&1&&(ds$1(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Xg(5,`parking_sign`),Xa$1()(),ds$1(6,`div`,35),Xg(7),Jg(8,`translate`),Xa$1(),ds$1(9,`icon`,34),Xg(10,` chevron_right `),Xa$1()()()()),n&2){let e=dd();_r(`border-b!`,!e.locales().length),LI(`content`,e.parking_tooltip),ni(7),oc$1(` `,cx(8,4,`COMMON.CONTROLS_PARKING`),` `)}}function hc(n,o){n&1&&(ds$1(0,`div`,37),Xg(1,` Language `),Xa$1())}function fc(n,o){if(n&1&&(ds$1(0,`div`,11)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Xg(5,`language`),Xa$1()(),ds$1(6,`div`,36)(7,`div`)(8,`div`),Xg(9),Jg(10,`translate`),Xa$1(),ld(11,hc,2,0,`div`,37),Jg(12,`translate`),Xa$1(),ds$1(13,`div`,38),Jg(14,`translate`),Xg(15),Jg(16,`translate`),Xa$1()(),ds$1(17,`icon`,34),Xg(18,` chevron_right `),Xa$1()()()()),n&2){let e=dd();LI(`content`,e.language_tooltip),ni(9),oc$1(` `,cx(10,5,`COMMON.LANGUAGE`),` `),ni(2),ud(cx(12,7,`COMMON.LANGUAGE`)!==`Language`?11:-1),ni(2),LI(`matTooltip`,cx(14,9,e.active_locale)),ni(2),oc$1(` `,cx(16,11,e.active_locale),` `)}}function gc(n,o){if(n&1){let e=ok();ds$1(0,`button`,39),Qt$1(`click`,function(){Dv(e);return Tv(dd().newSupportTicket())}),ds$1(1,`div`,31)(2,`div`,32)(3,`icon`),Xg(4,`support_agent`),Xa$1()(),ds$1(5,`div`,35),Xg(6),Jg(7,`translate`),Xa$1()()()}n&2&&(ni(6),oc$1(` `,cx(7,1,`COMMON.CONTROLS_SUPPORT`),` `))}function bc(n,o){if(n&1){let e=ok();ds$1(0,`button`,40),Qt$1(`click`,function(){Dv(e);return Tv(dd().reloadPage())}),Xg(1),Jg(2,`translate`),Xa$1()}n&2&&(ni(),oc$1(` `,cx(2,1,`COMMON.CONTROLS_NEW_VERSION`),` `))}function vc(n,o){if(n&1){let e=ok();ds$1(0,`button`,41),Qt$1(`click`,function(){Dv(e);return Tv(dd().viewChangelog())}),Xg(1),Xa$1()}if(n&2){let e=dd();LI(`disabled`,!e.changelog_available()),ni(),oc$1(` `,e.version.hash,` `)}}function xc(n,o){if(n&1&&(ds$1(0,`span`),Xg(1),Xa$1()),n&2){let e=dd();ni(),tA(e.version.hash)}}var Ta=(()=>{class n{constructor(){this._settings=p(Dn),this._org=p(Tu),this._dialog=p(uN),this._changelog=p(da),this._locale=p(Dle),this.building=this._org.active_building,this.region=this._org.active_region,this.regions=this._org.region_list,this.sidebar=v_(!1),this.accessibility=AT(`allow_accessibility_changes`,!0),this.show_changelog=AT(`show_changelog`,!0),this.changelog_available=this._changelog.available,this.viewChangelog=()=>this._changelog.view(),this.region_select=Sa,this.building_select=xa,this.help_tooltip=ya,this.accessibility_tooltip=va,this.language_tooltip=Ca,this.work_location_tooltip=wa,this.parking_tooltip=Ma,this.features=AT(`features`,[]),this._locales=this._settings.signal(`locales`,[]),this._desk_height=this._settings.signal(`desks.height_enabled`,!1),this._use_region=this._settings.signal(`use_region`,!1),this._disable_building_select=this._settings.signal(`disable_building_select`,!1),this.pref_locations=Ee([]),this.work_prefs=Ee([]),this.overrides=Ee({}),this.active_block=Le(()=>{let e=qse(new Date,`yyyy-MM-dd`),t=new Date().getDay();return(this.overrides()[e]?this.overrides()[e]:this.work_prefs().find(a=>a.day_of_week===t))?.blocks?.find(a=>this.now>=this.timeFrom(a.start_time)&&this.now<this.timeFrom(a.end_time))}),this.active_index=Le(()=>{let e=qse(new Date,`yyyy-MM-dd`),t=new Date().getDay();return(this.overrides()[e]?this.overrides()[e]:this.work_prefs().find(a=>a.day_of_week===t))?.blocks?.findIndex(a=>this.now>=this.timeFrom(a.start_time)&&this.now<this.timeFrom(a.end_time))}),this.locales=this._locales,this.desk_height=this._desk_height,this.use_region=this._use_region,this.disable_building_select=this._disable_building_select}location_icon(e){return Ne().location_icon(e+60*1e3)}location(e){return Ne().location_name_time(e+60*1e3)}timeFrom(e){return Wy(ho(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}get user(){return Ne()}get groups(){return this.user?.groups?.join(`
`)||``}get version(){return pa$1}get active_locale(){let e=this.locales(),t=this._locale.locale;for(let i of e)if(i.id===t)return i.name;return`LANGUAGE.ENGLISH`}get now(){return Wy(Date.now()).getTime()}get has_new_version(){return nb$1()}ngOnInit(){let e=Ne();this.work_prefs.set(e?.work_preferences||[]),this.overrides.set(e?.work_overrides||{}),this.pref_locations.set([{id:`wfo`,name:Mi(`COMMON.WORK_OFFICE`),icon:`business`},{id:`wfh`,name:Mi(`COMMON.WORK_HOME`),icon:`home`},{id:`aol`,name:Mi(`COMMON.WORK_LEAVE`),icon:`event_busy`},{id:`sick`,name:Mi(`COMMON.WORK_SICK`),icon:`sick`}])}logout(){MX()}reloadPage(){location.reload()}newSupportTicket(){this._settings.get(`app.external_support_url`)?window.open(this._settings.get(`app.external_support_url`),`_blank`):this._dialog.open(pa)}openWfhModal(){this._dialog.open(Tn)}saveSetting(e,t){this._settings.saveUserSetting(e,t)}formatLabel(e){return`${e.toFixed(1)}cm`}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`user-controls`]],inputs:{sidebar:[1,`sidebar`]},decls:35,vars:32,consts:[[`desk_height_tooltip`,``],[`work_menu`,`matMenu`],[1,`divide-base-200`,`border-base-300`,`bg-base-100`,`relative`,`mt-1`,`flex`,`flex-col`,`divide-y`,`overflow-auto`,`rounded-sm`,`border`,`shadow-sm`],[`avatar`,``,1,`flex`,`w-full`,`min-w-72`,`flex-col`,`items-center`,`p-2`],[1,`text-2xl`,3,`user`,`matTooltip`],[1,``],[1,`truncate`,`text-xs`,`opacity-60`],[1,`border-base-200`,`w-full`,`rounded-sm`,`border-y`,`py-2`],[`customTooltip`,``,1,`relative`,3,`content`],[`customTooltip`,``,3,`content`],[`customTooltip`,``,3,`content`,`border-b!`],[`customTooltip`,``,1,`border-b!`,3,`content`],[`btn`,``,`matRipple`,``,1,`clear`,`h-14`,`w-full`,`text-left`],[1,`flex`,`flex-col`,`items-center`,`p-4`],[1,`mb-4`,`flex`,`items-center`,`justify-center`,`space-x-2`],[`btn`,``,`matRipple`,``,1,`inverse`,3,`click`],[`btn`,``,`matRipple`,``],[1,`w-full`,`text-xs`,`opacity-60`],[1,`m-0`,`border-none`,`bg-none`,`p-0`,`text-xs`,`underline`,3,`disabled`],[1,`w-full`,`px-4`,`pb-2`,`text-sm`,`font-medium`],[1,`w-full`],[1,`relative`,`flex`,`items-center`,`px-4`,`py-2`],[1,`bg-info`,`text-info-content`,`z-20`,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`rounded-full`],[1,`text-2xl`],[1,`ml-2`,`flex-1`],[`matRipple`,``,1,`hover:bg-base-200`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`px-2`,`py-1`,`font-medium`,3,`matMenuTriggerFor`],[`mat-menu-item`,``],[1,`px-2`,`text-xs`,`opacity-60`],[`mat-menu-item`,``,3,`click`],[1,`flex`,`items-center`,`space-x-2`],[1,`pr-8`],[1,`flex`,`w-full`,`items-center`,`space-x-2`],[1,`bg-base-200`,`flex`,`h-8`,`w-8`,`items-center`,`justify-center`,`rounded-full`],[1,`w-px`,`flex-1`,`truncate`],[1,`text-2xl`,`opacity-60`],[1,`flex-1`],[1,`flex`,`flex-1`,`items-center`,`justify-between`,`space-x-4`],[1,`text-xs`,`opacity-30`],[1,`bg-base-200`,`max-w-24`,`truncate`,`rounded-sm`,`px-2`,`py-1`,`text-sm`,3,`matTooltip`],[`btn`,``,`matRipple`,``,1,`clear`,`h-14`,`w-full`,`text-left`,3,`click`],[`btn`,``,`matRipple`,``,3,`click`],[1,`m-0`,`border-none`,`bg-none`,`p-0`,`text-xs`,`underline`,3,`click`,`disabled`]],template:function(t,i){t&1&&(ds$1(0,`div`,2)(1,`div`,3),PI(2,`a-user-avatar`,4),ds$1(3,`div`,5),Xg(4),Xa$1(),ds$1(5,`div`,6),Xg(6),Xa$1()(),ld(7,ac,22,11,`div`,7),ld(8,sc,10,2,`div`,8),ld(9,lc,10,2,`div`,8),ld(10,cc,11,4,`div`,9),ld(11,dc,11,4,`div`,9),ld(12,mc,11,6,`div`,10),ld(13,pc,11,6,`div`,10),Es$1(14,uc,1,0,`ng-template`,null,0,ux),ld(16,_c,11,6,`div`,10),ld(17,fc,19,13,`div`,11),ld(18,gc,8,3,`button`,12),ds$1(19,`div`,13)(20,`div`,14)(21,`button`,15),Qt$1(`click`,function(){return i.logout()}),Xg(22),Jg(23,`translate`),Xa$1(),ld(24,bc,3,3,`button`,16),Xa$1(),ds$1(25,`div`,17),zg(26),Xg(27),Jg(28,`translate`),qg(),ld(29,vc,2,2,`button`,18)(30,xc,2,1,`span`),Xa$1(),ds$1(31,`div`,17),Xg(32),Jg(33,`date`),Jg(34,`date`),Xa$1()()()),t&2&&(_r(`border`,!i.sidebar()),ni(2),LI(`user`,i.user)(`matTooltip`,i.groups),ni(2),tA(i.user?.name),ni(2),oc$1(` `,i.user?.email,` `),ni(),ud(i.features().includes(`wfh`)&&i.active_block()?7:-1),ni(),ud(i.regions()?.length?8:-1),ni(),ud(!i.disable_building_select()&&!i.use_region()?9:-1),ni(),ud(i.features().includes(`help`)?10:-1),ni(),ud(i.features().includes(`wfh`)?11:-1),ni(),ud(i.accessibility()?12:-1),ni(),ud(i.desk_height()?13:-1),ni(3),ud(i.features().includes(`parking-controls`)?16:-1),ni(),ud(i.locales().length>1?17:-1),ni(),ud(i.features().includes(`support-ticket`)?18:-1),ni(4),oc$1(` `,cx(23,22,`COMMON.CONTROLS_SIGN_OUT`),` `),ni(2),ud(i.has_new_version?24:-1),ni(3),oc$1(` `,cx(28,24,`COMMON.CONTROLS_VERSION`),`: `),ni(2),ud(i.show_changelog()?29:30),ni(3),nA(` `,e_$1(33,26,i.version.time,`longDate`),` (`,e_$1(34,29,i.version.time,`shortTime`),`) `))},dependencies:[dC,yoe,Da$1,np,Noe,he,Yt,mt,wn,Ud,It,Ni,Gd,ka,BF,f],encapsulation:2})}}return n})();var kc=[`*`];function yc(n,o){n&1&&(ds$1(0,`icon`,2),Xg(1,`person`),Xa$1())}function Cc(n,o){if(n&1){let e=ok();ds$1(0,`div`,1)(1,`button`,3),Qt$1(`click`,function(){Dv(e);return Tv(dd().close())}),Xa$1(),ds$1(2,`div`,4)(3,`div`,5),PI(4,`user-controls`,6),ds$1(5,`button`,7),Qt$1(`click`,function(){Dv(e);return Tv(dd().close())}),ds$1(6,`icon`,2),Xg(7,`close`),Xa$1()()()()()}if(n&2){let e=dd();ni(),_r(`opacity-50`,e.is_open())(`opacity-0`,!e.is_open()),ni(2),_r(`translate-x-0`,e.is_open())(`translate-x-full`,!e.is_open()),ni(),LI(`sidebar`,!0)}}var Ea=(()=>{class n{constructor(){this._close_timeout=null,this.is_open=Ee(!1),this.is_rendered=Ee(!1)}open(){this._close_timeout&&(clearTimeout(this._close_timeout),this._close_timeout=null),this.is_rendered.set(!0),requestAnimationFrame(()=>this.is_open.set(!0))}close(){this.is_open.set(!1),this._close_timeout=setTimeout(()=>{this.is_rendered.set(!1),this._close_timeout=null},200)}onEscape(){this.is_open()&&this.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`user-controls-sidebar`]],hostBindings:function(t,i){t&1&&Qt$1(`keydown.escape`,function(){return i.onEscape()},zM)},ngContentSelectors:kc,decls:4,vars:1,consts:[[`icon`,``,`matRipple`,``,`avatar`,``,`type`,`button`,`name`,`user-controls`,1,`bg-base-200`,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`rounded-full`,3,`click`],[1,`fixed`,`inset-0`,`z-9999`,`overflow-hidden`],[1,`text-2xl`],[`type`,`button`,`aria-label`,`Close user controls`,1,`absolute`,`inset-0`,`bg-black`,`transition-opacity`,`duration-200`,3,`click`],[1,`absolute`,`inset-y-0`,`right-0`,`flex`,`max-w-full`],[1,`bg-base-100`,`relative`,`h-full`,`w-80`,`max-w-[100vw]`,`overflow-auto`,`pt-[calc(env(safe-area-inset-top)+1rem)]`,`pb-[env(safe-area-inset-bottom)]`,`pr-[env(safe-area-inset-right)]`,`shadow-xl`,`transition-transform`,`duration-200`,`ease-out`],[3,`sidebar`],[`icon`,``,`default`,``,`matRipple`,``,`type`,`button`,1,`absolute`,`top-[calc(env(safe-area-inset-top)+0.5rem)]`,`right-[calc(env(safe-area-inset-right)+0.5rem)]`,3,`click`]],template:function(t,i){t&1&&(ec$1(),ds$1(0,`button`,0),Qt$1(`click`,function(){return i.open()}),tc$1(1,0,null,yc,2,0),Xa$1(),ld(3,Cc,8,9,`div`,1)),t&2&&(ni(3),ud(i.is_rendered()?3:-1))},dependencies:[Da$1,np,Noe,Ta],encapsulation:2})}}return n})();var Sc=[`editor`];function Mc(n,o){if(n&1){let e=ok();ds$1(0,`button`,20),Qt$1(`click`,function(){Dv(e);return Tv(dd(2).insertImage())}),ds$1(1,`icon`),Xg(2,`image`),Xa$1()(),ds$1(3,`button`,20),Qt$1(`click`,function(){Dv(e);return Tv(dd(2).insertAttachment())}),ds$1(4,`icon`),Xg(5,`attachment`),Xa$1()()}}function wc(n,o){if(n&1){let e=ok();ds$1(0,`div`,3)(1,`select`,5),Qt$1(`change`,function(i){Dv(e);return Tv(dd().setFontFace(i))}),ds$1(2,`option`,6),Xg(3,`Font`),Xa$1(),ds$1(4,`option`,7),Xg(5,`Arial`),Xa$1(),ds$1(6,`option`,8),Xg(7,`Helvetica`),Xa$1(),ds$1(8,`option`,9),Xg(9,`Georgia`),Xa$1(),ds$1(10,`option`,10),Xg(11,`Times New Roman`),Xa$1()(),ds$1(12,`select`,11),Qt$1(`change`,function(i){Dv(e);return Tv(dd().setFontSize(i))}),ds$1(13,`option`,12),Xg(14,`Size`),Xa$1(),ds$1(15,`option`,13),Xg(16,`12`),Xa$1(),ds$1(17,`option`,14),Xg(18,`14`),Xa$1(),ds$1(19,`option`,15),Xg(20,`16`),Xa$1(),ds$1(21,`option`,16),Xg(22,`18`),Xa$1(),ds$1(23,`option`,17),Xg(24,`24`),Xa$1(),ds$1(25,`option`,18),Xg(26,`32`),Xa$1(),ds$1(27,`option`,19),Xg(28,`48`),Xa$1()(),ds$1(29,`button`,20),Qt$1(`click`,function(){Dv(e);return Tv(dd().toggleBold())}),ds$1(30,`icon`),Xg(31,`format_bold`),Xa$1()(),ds$1(32,`button`,20),Qt$1(`click`,function(){Dv(e);return Tv(dd().toggleItalic())}),ds$1(33,`icon`),Xg(34,`format_italic`),Xa$1()(),ds$1(35,`button`,20),Qt$1(`click`,function(){Dv(e);return Tv(dd().toggleUnderline())}),ds$1(36,`icon`),Xg(37,`format_underlined`),Xa$1()(),ds$1(38,`button`,20),Qt$1(`click`,function(){Dv(e);return Tv(dd().makeUnorderedList())}),ds$1(39,`icon`),Xg(40,`format_list_bulleted`),Xa$1()(),ds$1(41,`button`,20),Qt$1(`click`,function(){Dv(e);return Tv(dd().makeOrderedList())}),ds$1(42,`icon`),Xg(43,`format_list_numbered`),Xa$1()(),ds$1(44,`button`,20),Qt$1(`click`,function(){Dv(e);return Tv(dd().insertLink())}),ds$1(45,`icon`),Xg(46,`link`),Xa$1()(),ld(47,Mc,6,0),Xa$1()}if(n&2){let e=dd();ni(29),_r(`border-info`,e.toolbar_state().bold)(`text-info`,e.toolbar_state().bold),ni(3),_r(`border-info`,e.toolbar_state().italic)(`text-info`,e.toolbar_state().italic),ni(3),_r(`border-info`,e.toolbar_state().underline)(`text-info`,e.toolbar_state().underline),ni(3),_r(`border-info`,e.toolbar_state().unordered_list)(`text-info`,e.toolbar_state().unordered_list),ni(3),_r(`border-info`,e.toolbar_state().ordered_list)(`text-info`,e.toolbar_state().ordered_list),ni(3),_r(`border-info`,e.toolbar_state().link)(`text-info`,e.toolbar_state().link),ni(3),ud(e.images_allowed()?47:-1)}}var ma=(()=>{class n extends Ge{constructor(){super(...arguments),this._uploads=p(E6),this._dom_sanitizer=p(Ic$1),this._ng_zone=p(Z),this.placeholder=v_(``),this.readonly=v_(!1),this.images_allowed=v_(!1),this._editor_el=_Z(`editor`),this._onChange=()=>{},this._onTouch=()=>{},this.toolbar_state=Ee({bold:!1,italic:!1,underline:!1,unordered_list:!1,ordered_list:!1,link:!1}),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e,this._syncValue=()=>{this._editor&&this.setValue(this._editor.getHTML())},this._handleTouched=()=>{this._editor&&this._onTouch()},this._refreshToolbarState=()=>{this._editor&&this._ng_zone.run(()=>{this.toolbar_state.set({bold:this._editor.hasFormat(`B`),italic:this._editor.hasFormat(`I`),underline:this._editor.hasFormat(`U`),unordered_list:this._editor.hasFormat(`UL`),ordered_list:this._editor.hasFormat(`OL`),link:this._editor.hasFormat(`A`)})})}}ngOnChanges(e){e.placeholder&&this.timeout(`init`,()=>this._initialiseEditor()),e.readonly&&this._editor&&this._setReadonlyState()}ngAfterViewInit(){this.timeout(`init`,()=>this._initialiseEditor())}setValue(e){this._onChange(e)}writeValue(e){this.timeout(`write`,()=>{this._editor?(this._editor.setHTML(e||``),this._setPlaceholder()):this.timeout(`write`,()=>this.writeValue(e))})}toggleBold(){this._toggleFormat(`B`,()=>this._editor.removeBold(),()=>this._editor.bold())}toggleItalic(){this._toggleFormat(`I`,()=>this._editor.removeItalic(),()=>this._editor.italic())}toggleUnderline(){this._toggleFormat(`U`,()=>this._editor.removeUnderline(),()=>this._editor.underline())}makeUnorderedList(){this._toggleFormat(`UL`,()=>this._editor.removeList(),()=>this._editor.makeUnorderedList())}makeOrderedList(){this._toggleFormat(`OL`,()=>this._editor.removeList(),()=>this._editor.makeOrderedList())}insertLink(){if(!this._editor)return;if(this._editor.hasFormat(`A`)){this._editor.removeLink(),this._syncValue(),this._refreshToolbarState();return}let e=prompt(`Enter URL`);e&&(this._editor.makeLink(e),this._syncValue(),this._refreshToolbarState())}setFontFace(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontFace(t==="default"?`inherit`:t),this._syncValue())}setFontSize(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontSize(t),this._syncValue())}insertImage(){this._embedFile(!0)}insertAttachment(){this._embedFile(!1)}async _initialiseEditor(){let e=this._editor_el()?.nativeElement;if(!e)return this.timeout(`init`,()=>this._initialiseEditor());let{default:t}=await import(`./squire-B0gBI6PO.js`);this._editor&&this._editor.destroy(),e.innerHTML=``,this._editor=new t(e,{blockTag:`div`,sanitizeToDOMFragment:i=>{let a=this._dom_sanitizer.sanitize(Se.HTML,i||``)||``,d=document.createElement(`template`);return d.innerHTML=a,d.content.cloneNode(!0)}}),this._editor.addEventListener(`input`,this._syncValue),this._editor.addEventListener(`blur`,this._handleTouched),this._editor.addEventListener(`cursor`,this._refreshToolbarState),this._editor.addEventListener(`select`,this._refreshToolbarState),this._editor.addEventListener(`pathChange`,this._refreshToolbarState),this._setReadonlyState(),this._setPlaceholder(),this._refreshToolbarState()}_embedFile(e){if(!this._editor)return;let t=document.createElement(`input`);t.setAttribute(`type`,`file`),e&&t.setAttribute(`accept`,`image/*`),t.click(),t.onchange=()=>{let i=t.files?.[0];i&&this._uploads.uploadFile(i,!0).then(a=>{if(!a)return;let d=`${location.origin}/api/engine/v2/uploads/${encodeURIComponent(a)}/url`;this._setAuth(),setTimeout(()=>{this._insertUploadedFile(d,i,e),this._syncValue()},100)}).catch(a=>{a instanceof ju||Ece(`Failed to upload ${i.name}: ${a?.message||`Unknown error`}`)})}}_setReadonlyState(){let e=this._editor_el()?.nativeElement;e&&e.setAttribute(`contenteditable`,`${!this.readonly()}`)}_setPlaceholder(){let e=this._editor_el()?.nativeElement;e&&e.setAttribute(`data-placeholder`,this.placeholder()||``)}_toggleFormat(e,t,i){this._editor&&(this._editor.hasFormat(e)?t():i(),this._syncValue(),this._refreshToolbarState())}_insertUploadedFile(e,t,i){let a=t.type.startsWith(`image/`);if(i||a){this._editor.insertHTML(`<img src="${e}" alt="${t.name}" />`);return}this._editor.insertHTML(`<a href="${e}" target="_blank">${t.name}</a>`)}_setAuth(){let e=tn$1();document.cookie=`${e===`x-api-key`?`api-key=`+encodeURIComponent(Fc()):`bearer_token=`+encodeURIComponent(e)};max-age=30;path=/api/engine/v2/uploads;samesite=strict;${location.protocol===`https:`?`secure;`:``}`}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=tt(n)))(i||n)}})()}static{this.ɵcmp=Ft({type:n,selectors:[[`rich-text-input`]],viewQuery:function(t,i){t&1&&HI(i._editor_el,Sc,5),t&2&&fk()},inputs:{placeholder:[1,`placeholder`],readonly:[1,`readonly`],images_allowed:[1,`images_allowed`]},features:[Qe([{provide:li,useExisting:Ye(()=>n),multi:!0}]),fe,dt],decls:5,vars:1,consts:[[`container`,``],[`editor`,``],[1,`w-full`],[1,`border-base-300`,`bg-base-100`,`flex`,`flex-wrap`,`items-center`,`gap-1`,`rounded-t`,`border`,`p-2`],[1,`squire-editor`],[1,`border-base-300`,`bg-base-100`,`rounded`,`border`,`p-2`,`text-sm`,3,`change`],[`value`,`default`],[`value`,`Arial`],[`value`,`Helvetica`],[`value`,`Georgia`],[`value`,`Times New Roman`],[1,`border-base-300`,`bg-base-100`,`min-w-24`,`rounded`,`border`,`p-2`,`text-sm`,3,`change`],[`value`,``],[`value`,`12px`],[`value`,`14px`],[`value`,`16px`],[`value`,`18px`],[`value`,`24px`],[`value`,`32px`],[`value`,`48px`],[`icon`,``,`type`,`button`,1,`border-base-300`,`rounded`,`border`,`px-2`,`py-1`,`text-sm`,3,`click`]],template:function(t,i){t&1&&(ds$1(0,`div`,2,0),ld(2,wc,48,25,`div`,3),PI(3,`div`,4,1),Xa$1()),t&2&&(ni(2),ud(i.readonly()?-1:2))},dependencies:[Noe],styles:[`[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]     .squire-editor{border-radius:.25rem;border:1px solid var(--%NS%base-300);padding:.5rem;min-height:8rem;width:100%;outline:none}[_nghost-%COMP%]     .squire-editor:empty:before{content:attr(data-placeholder);color:var(--%NS%base-content);opacity:.5}[_nghost-%COMP%]     .squire-editor ul{list-style-type:disc;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor ol{list-style-type:decimal;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor li{margin:.125rem 0}
/*# sourceMappingURL=rich-text-input.component.css.map */`]})}}return n})();var Tc=(n,o)=>o.id+``+n;function Ec(n,o){if(n&1&&(ds$1(0,`a`,1)(1,`icon`,2),Xg(2),Xa$1(),ds$1(3,`span`,3),Xg(4),Xa$1()()),n&2){let e=dd().$implicit;LI(`routerLink`,e.route),ni(2),tA(e.icon),ni(2),tA(e.name)}}function Ic(n,o){if(n&1){let e=ok();ds$1(0,`button`,6),Qt$1(`click`,function(){Dv(e);let i=dd(2).$implicit;return Tv(dd().toggleBlock(i.id||i._id))}),ds$1(1,`icon`,2),Xg(2),Xa$1(),ds$1(3,`div`,7),Xg(4),Xa$1(),ds$1(5,`icon`,8),Xg(6,`arrow_drop_down`),Xa$1()()}if(n&2){let e=dd(2).$implicit;ni(2),oc$1(` `,e.icon,` `),ni(2),oc$1(` `,e.name,` `)}}function Nc(n,o){if(n&1&&(ds$1(0,`a`,10),PI(1,`icon`,8),ds$1(2,`span`),Xg(3),Xa$1()()),n&2){let e=o.$implicit;LI(`routerLink`,e.route),ni(3),tA(e.name)}}function Oc(n,o){if(n&1&&(ds$1(0,`section`,9),Q0(1,Nc,4,2,`a`,10,Z0),Xa$1()),n&2){let e=dd(2).$implicit;_r(`contract-collapsed`,dd().isBlockCollapsed(e.id||e._id)),ni(),X0(e.children)}}function Rc(n,o){if(n&1&&(ld(0,Ic,7,2,`button`,4),ld(1,Oc,3,2,`section`,5)),n&2){let e=dd().$implicit;ud(e.children?.length?0:-1),ni(),ud(e.children?.length?1:-1)}}function Dc(n,o){if(n&1&&ld(0,Ec,5,3,`a`,1)(1,Rc,2,2),n&2){let e=o.$implicit;ud(e.children?1:0)}}var Vb=(()=>{class n extends Ge{constructor(){super(),this._settings=p(Dn),this._org=p(Tu),this._element_ref=p(ie),this.show_block=Ee({}),this.links=[],this.filtered_links=Ee([]),vt(()=>{this._org.active_building()&&this.timeout(`update_links`,()=>this.updateFilteredLinks(),500)}),vt(()=>{TD(),this.links.length&&J(()=>this.updateFilteredLinks())})}get feature_list(){return this._settings.get(`app.features`)||[]}get feature_groups(){return this._settings.get(`app.feature_groups`)||{}}get is_admin(){let e=Ne().groups||[],t=this._settings.get(`app.admin_group`)||`admin`;return e.includes(t)||e.includes(`placeos_admin`)||e.includes(`placeos_support`)}async ngOnInit(){await this._org.waitUntilInitialised(),this.links=[{name:Mi(`APP.CONCIERGE.MENU_BOOKINGS`),icon:`add_circle`,children:[{id:`spaces`,name:Mi(`APP.CONCIERGE.MENU_ROOM_BOOKINGS`),route:[`/book/rooms`]},{id:`desks`,name:Mi(`APP.CONCIERGE.MENU_DESK_BOOKINGS`),route:[`/book/desks/events`]},{id:`parking`,name:Mi(`APP.CONCIERGE.MENU_PARKING_BOOKINGS`),route:[`/book/parking/events`]},{id:`parking-bookings`,name:Mi(`APP.CONCIERGE.MENU_PARKING_BOOKINGS`),route:[`/book/parking/events`]},{id:`lockers`,name:Mi(`APP.CONCIERGE.MENU_LOCKER_BOOKINGS`),route:[`/book/lockers/events`]},{id:`assets`,name:Mi(`APP.CONCIERGE.MENU_ASSET_BOOKINGS`),route:[`/book/assets/list/requests`]},{id:`catering`,name:Mi(`APP.CONCIERGE.MENU_CATERING_BOOKINGS`),route:[`/book/catering/orders`]},{id:`visitors`,name:Mi(`APP.CONCIERGE.MENU_VISITOR_BOOKINGS`),route:[`/book/visitors`]},{id:`visitor-rules`,name:Mi(`APP.CONCIERGE.MENU_VISITOR_RULES`),route:[`/book/visitors/rules`]}]},{id:`facilities`,name:Mi(`APP.CONCIERGE.MENU_MANAGEMENT`),icon:`place`,children:[{id:`zones`,name:Mi(`APP.CONCIERGE.MENU_MANAGE_ZONES`),route:[`/zone-management`]},{id:`spaces`,name:Mi(`APP.CONCIERGE.MENU_MANAGE_ROOMS`),route:[`/room-management`]},{id:`desks`,name:Mi(`APP.CONCIERGE.MENU_MANAGE_DESKS`),route:[`/book/desks/manage`]},{id:`parking`,name:Mi(`APP.CONCIERGE.MENU_MANAGE_PARKING`),route:[`/book/parking/manage`]},{id:`parking-manage`,name:Mi(`APP.CONCIERGE.MENU_MANAGE_PARKING`),route:[`/book/parking/manage`]},{id:`lockers`,name:Mi(`APP.CONCIERGE.MENU_MANAGE_LOCKERS`),route:[`/book/lockers/manage`]},{id:`catering`,name:Mi(`APP.CONCIERGE.MENU_MANAGE_CATERING`),route:[`/book/catering/menu`]},{id:`points`,name:Mi(`APP.CONCIERGE.MENU_MANAGE_POINTS`),route:[`/points-management`]},{id:`emergency-contacts`,name:Mi(`APP.CONCIERGE.MENU_MANAGE_CONTACTS`),icon:`assignment_ind`,route:[`/users/staff/emergency-contacts`]},{id:`signage`,name:Mi(`APP.CONCIERGE.MENU_MANAGE_SIGNAGE`),route:[`/signage`]},{id:`points-of-interest`,name:Mi(`APP.CONCIERGE.MENU_MANAGE_MAP_FEATURES`),route:[`/points-of-interest`]},{id:`url-management`,name:Mi(`APP.CONCIERGE.MENU_MANAGE_URLS`),route:[`/url-management`]},{id:`email-templates`,name:Mi(`APP.CONCIERGE.MENU_MANAGE_EMAILS`),route:[`/email-templates`]},{id:`deals-n-offers`,name:Mi(`APP.CONCIERGE.MENU_MANAGE_DEALS`),route:[`/deals-n-offers`]}]},{id:`assets`,name:Mi(`APP.CONCIERGE.MENU_ASSETS`),route:[`/book/assets/list/items`],icon:`vibration`},{id:`internal-users`,name:Mi(`APP.CONCIERGE.MENU_USER_LIST`),icon:`assignment_ind`,route:[`/users/staff`]},{id:`events`,name:Mi(`APP.CONCIERGE.MENU_EVENTS`),route:[`/entertainment/events`],icon:`confirmation_number`},{id:`surveys`,name:Mi(`APP.CONCIERGE.MENU_SURVEYS`),route:[`/surveys`],icon:`add_reaction`},{_id:`reports`,name:Mi(`APP.CONCIERGE.MENU_REPORTS`),icon:`analytics`,children:[{id:`attendance-report`,name:Mi(`APP.CONCIERGE.MENU_REPORT_SITE_ATTENDANCE`),route:[`/reports/attendance`]},{id:`booking-report`,name:Mi(`APP.CONCIERGE.MENU_REPORT_ROOMS`),route:[`/reports/bookings`]},{id:`desk-report`,name:Mi(`APP.CONCIERGE.MENU_REPORT_DESKS`),route:[`/reports/desks`]},{id:`parking-report`,name:Mi(`APP.CONCIERGE.MENU_REPORT_PARKING`),route:[`/reports/parking`]},{id:`lockers-report`,name:Mi(`APP.CONCIERGE.MENU_REPORT_LOCKERS`),route:[`/reports/lockers`]},{id:`catering-report`,name:Mi(`APP.CONCIERGE.MENU_REPORT_CATERING`),route:[`/reports/catering`]},{id:`contact-tracing-report`,name:Mi(`APP.CONCIERGE.MENU_REPORT_CONTACT_TRACING`),route:[`/reports/contact-tracing`]},{id:`assets-report`,name:Mi(`APP.CONCIERGE.MENU_REPORT_ASSETS`),route:[`/reports/assets`]},{id:`visitors-report`,name:Mi(`APP.CONCIERGE.MENU_REPORT_VISITORS`),route:[`/reports/visitors`]}]}],this.updateFilteredLinks(),this.timeout(`update_inview`,()=>this._moveActiveLinkIntoView(),50),this.timeout(`update_links`,()=>this.updateFilteredLinks(),500)}_isFeatureAvailable(e){if(e.startsWith(`*`))return!0;let t=this.feature_list.includes(e),i=this.feature_groups[e]||[],a=Ne().groups;return!!(t&&(this.is_admin||!i.length||a.find(d=>i.includes(d))))}updateFilteredLinks(){let e=this._settings.get(`app.custom_reports`)||[];if(e.length&&this.links.find(t=>t._id===`reports`)){let t=this.links.find(i=>i._id===`reports`);t.children=Hce(t.children.concat(e.map(i=>m(l({},i),{id:`*${i.id}`,route:[`/reports`,i.id]}))),`id`)}if(this.filtered_links.set(this.links.map(t=>m(l({},t),{children:t.children?t.children.filter(i=>this._isFeatureAvailable(i.id)):null})).filter(t=>(!t.id||t.id===`home`||this._isFeatureAvailable(t.id))&&t.route||t.children?.length)),this.filtered_links().find(t=>t.id===`home`)){let t=this.filtered_links().find(i=>i.id===`home`);t.route=this._settings.get(`app.default_route`)||[`/`]}this.is_admin||this.filtered_links.update(t=>t.filter(i=>i.id!==`facilities`))}toggleBlock(e){this.show_block.update(t=>m(l({},t),{[e]:!t[e]}))}isBlockCollapsed(e){return!!this.show_block()[e]}_moveActiveLinkIntoView(){let e=this._element_ref.nativeElement.querySelector(`a.active`);e&&e.scrollIntoView({block:`center`,behavior:`instant`})}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`app-sidebar`]],features:[fe],decls:3,vars:0,consts:[[1,`border-base-200`,`h-full`,`w-64`,`overflow-auto`,`border-r`,`py-2`,`pr-3`],[`matRipple`,``,`routerLinkActive`,`active`,1,`hover:bg-base-200`,`my-1`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-r-full`,`p-1`,3,`routerLink`],[1,`text-2xl`,`opacity-60`],[1,`font-medium`],[`matRipple`,``,1,`hover:bg-base-200`,`my-1`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-r-full`,`p-1`],[1,`contract-expand`,`w-full`,3,`contract-collapsed`],[`matRipple`,``,1,`hover:bg-base-200`,`my-1`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-r-full`,`p-1`,3,`click`],[1,`flex-1`,`text-left`,`font-medium`],[1,`text-2xl`],[1,`contract-expand`,`w-full`],[`routerLinkActive`,`active`,1,`hover:bg-base-200`,`my-1`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-r-full`,`p-1`,3,`routerLink`]],template:function(t,i){t&1&&(ds$1(0,`div`,0),Q0(1,Dc,2,1,null,null,Tc),Xa$1()),t&2&&(ni(),X0(i.filtered_links()))},dependencies:[pA,Jc,aA,Da$1,np,Noe],styles:[`[_nghost-%COMP%]{height:100%}a.active[_ngcontent-%COMP%]{background-color:var(--%NS%secondary);color:var(--%NS%secondary-content)}a.active[_ngcontent-%COMP%]:hover{color:var(--%NS%base-content);opacity:.75}
/*# sourceMappingURL=app-sidebar.component.css.map */`]})}}return n})();var Ac=()=>[`/`];var Kb=(()=>{class n{constructor(){this._settings=p(Dn),this._shortcuts=p(O$1),this._theme=this._settings.theme_signal,this._logo_dark=this._settings.signal(`app.logo_dark`,{},!0),this._logo_light=this._settings.signal(`app.logo_light`,{},!0),this.logo_src=Le(()=>{let e=this.logo();return typeof e==`string`?e:e?.src||``}),this.logo=Le(()=>(this._theme()===`dark`?this._logo_dark():this._logo_light())||{}),this.user=yT(),this.openShortcuts=()=>this._shortcuts.openHelp()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ft({type:n,selectors:[[`app-topbar`]],decls:14,vars:7,consts:[[1,`border-base-200`,`flex`,`items-center`,`border-b`,`p-2`],[1,`w-64`],[3,`routerLink`],[`auth`,``,1,`h-12`,3,`source`],[1,`flex`,`flex-1`,`items-center`,`justify-end`,`space-x-2`],[`btn`,``,`icon`,``,`matRipple`,``,3,`click`,`matTooltip`],[1,`text-2xl`],[`btn`,``,`icon`,``,`matRipple`,``],[1,`mr-2`],[3,`user`]],template:function(t,i){t&1&&(ds$1(0,`div`,0)(1,`div`,1)(2,`a`,2),PI(3,`img`,3),Xa$1()(),ds$1(4,`div`,4)(5,`button`,5),Jg(6,`translate`),Qt$1(`click`,function(){return i.openShortcuts()}),ds$1(7,`icon`,6),Xg(8,`keyboard`),Xa$1()(),ds$1(9,`button`,7)(10,`icon`,6),Xg(11,`notifications`),Xa$1()(),ds$1(12,`user-controls-sidebar`,8),PI(13,`a-user-avatar`,9),Xa$1()()()),t&2&&(ni(2),LI(`routerLink`,qk(6,Ac)),ni(),LI(`source`,i.logo_src()),ni(2),LI(`matTooltip`,cx(6,4,`APP.CONCIERGE.SHORTCUTS_TITLE`)),ni(8),LI(`user`,i.user()))},dependencies:[pA,Jc,wn,Da$1,np,_t,Noe,Ea,Yt,mt,f],styles:[`[_nghost-%COMP%]{width:100%}
/*# sourceMappingURL=app-topbar.component.css.map */`]})}}return n})();export{sa as C,ys as D,wn as E,qt as S,ut as T,ha as _,Ht as a,la as b,Kt as c,Vb as d,Yr as f,e_ as g,ci as h,Hr as i,Mn as l,ai as m,Cn as n,In as o,_t as p,En as r,Kb as s,$t as t,Tn as u,jt as v,si as w,ma as x,kn as y};
//# debugId=d33b04ed-a8a3-5de8-b17e-d168e21baa43
//# sourceMappingURL=chunk-Cq-RVpZ9.js.map