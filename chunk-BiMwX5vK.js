import{$c as pZ,$i as Yr$1,$o as gt,$r as UD,$s as lU,$t as Jn$1,$u as yt$1,A as CE,Al as rue,Ar as Rt,B as DE,Bo as fl$1,Bu as xl$1,Ca as _n$1,Cl as r1,Di as WB,Dl as rh,Do as ee,Du as wa$1,E as Bt,Ea as a6,Eo as eP,Et as HD,F as Ce,Ft as IB,Fu as x,Gl as tS,H as DXe,Hi as Xk,Ht as Ine,Hu as xr,I as Cr,Ic as oB,In as N,Ir as So,Is as k,It as IJ,Iu as x9,Ja as bs$1,Jo as gm,Jr as Tn$1,K as Dr,Ka as bne,Kc as ow,Kl as tT,Kr as Te,Ks as kl$1,Ku as y5,La as aw,Lc as oJ,Lo as fXe,Lr as St,Mc as nT,Ml as s6,Mr as S1,Ms as jd,Nc as ni,Ni as We,No as fG,Nu as wv,Oc as nN,Oi as WIe,Oo as ei,P as Ca$1,Pa as an$1,Q as Ee,Qi as Yi$1,Ql as u4,Qo as gr,Qt as JS,R as D9,Ro as fZe,Ru as xE,S as BD,Sl as qq,T as Bs$1,Tc as nB,Ti as W4,Tr as QV,Ts as iue,Tt as HB,U as Da$1,Un as Ns$1,Uo as g,Us as ka$1,Ut as Iw,Vn as No,Vt as Ie,Vu as xo,W as De$1,Wa as bXe,Wi as Y,Wl as tRe,Wo as g1,Wt as J,Xc as pS,Xi as Yb,Ya as c6,Yl as tt,Yr as To,Yt as JIe,Zc as pXe,Zn as OR,Zr as U0e,_ as A_,_a as _G,_n as Ku,_t as GT,ai as Un,an as K8,as as hW,au as ue,ba as _W,bc as mr,bi as Vi$1,bo as dt,bu as vt,c as $le,cc as lte,ci as Ut,cn as KIe,da as Ze,dd as zq,dr as Po,dt as Fr$1,du as v5,ed as yw,eo as cS,er as Oa$1,fc as mNe,fl as q8,fn as KV,fo as dMe,fu as vB,ga as _1,gd as m,gi as VXe,gn as Kt$1,go as di,gs as iB,gu as vV,hd as l,hl as qIe,hn as Kq,hr as Pt,ht as GR,ic as li$1,id as zCe,ii as Ue,il as pr,in as K7e,is as hT,j as CJ,jn as MV,jr as Rv,jt as Ht$1,ko as et,kr as Rr,li as V,ll as q0e,lo as dC,m as AF,ma as Zt,mc as mZ,na as Z7e,nr as Oo,oi as Uo,ol as pw,ou as ui,pa as Zn$1,pr as Pr$1,ps as hw,q as Dw,qa as bo,ql as ti,qo as gW,qs as ks$1,ra as Z8,rc as le,rd as zC,rl as pn$1,ro as cn$1,rt as FD,si as Ur$1,so as d4,ta as Z4,tc as lZ,tn as Jx,tr as Oh,tt as F0e,ua as Zce,ui as V4,un as KQe,uo as dE,us as hl$1,ut as Fp,uu as v1,v as Aa$1,vc as ml$1,vi as Ve,vl as qc,vn as L$1,wi as W,wl as rB,ws as it,xc as mte,xr as QCe,xt as Gi$1,xu as vw,y as Ar,yi as Vh,yl as qe,yn as L0e,yo as ds$1,yr as Q8,z as DB,za as b,zo as fe,zs as kD,zt as I_}from"./chunk-BSsu6GcQ.js";import{A as yo,C as fd,D as wl$1,E as qn$1,T as pd,a as Gd,b as Ye,d as Ni,f as Nl$1,g as Ud,h as Sl$1,i as Fs$1,k as xa$1,l as It,m as Rs$1,n as Cl$1,p as Qe,u as Le,v as Wt$1,x as Yr$2}from"./chunk-n9KeBu_6.js";import{n as Yt,r as mt,t as f}from"./main.js";import{t as E}from"./chunk-BDZ31gyP.js";import{n as oe,t as he}from"./chunk-DtCI-V6W.js";import{n as f$1}from"./chunk-B-tI7xzt.js";function Pr(n,o){let e=wa(o)?new o(0):Ve(o,0);return e.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),e.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e}function wa(n){return typeof n==`function`&&n.prototype?.constructor===n}var Ta=10;var Vi=class{subPriority=0;validate(o,e){return!0}};var Li=class extends Vi{constructor(o,e,t,i,a){super(),this.value=o,this.validateValue=e,this.setValue=t,this.priority=i,a&&(this.subPriority=a)}validate(o,e){return this.validateValue(o,this.value,e)}set(o,e,t){return this.setValue(o,e,this.value,t)}};var Ui=class extends Vi{priority=Ta;subPriority=-1;constructor(o,e){super(),this.context=o||(t=>Ve(e,t))}set(o,e){return e.timestampIsSet?o:Ve(o,Pr(o,this.context))}};var C=class{run(o,e,t,i){let a=this.parse(o,e,t,i);return a?{setter:new Li(a.value,this.validate,this.set,this.priority,this.subPriority),rest:a.rest}:null}validate(o,e,t){return!0}};var Bi=class extends C{priority=140;parse(o,e,t){switch(e){case`G`:case`GG`:case`GGG`:return t.era(o,{width:`abbreviated`})||t.era(o,{width:`narrow`});case`GGGGG`:return t.era(o,{width:`narrow`});default:return t.era(o,{width:`wide`})||t.era(o,{width:`abbreviated`})||t.era(o,{width:`narrow`})}}set(o,e,t){return e.era=t,o.setFullYear(t,0,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`R`,`u`,`t`,`T`]};var B={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/};var De={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function $(n,o){return n&&{value:o(n.value),rest:n.rest}}function L(n,o){let e=o.match(n);return e?{value:parseInt(e[0],10),rest:o.slice(e[0].length)}:null}function Ae(n,o){let e=o.match(n);if(!e)return null;if(e[0]===`Z`)return{value:0,rest:o.slice(1)};let t=e[1]===`+`?1:-1,i=e[2]?parseInt(e[2],10):0,a=e[3]?parseInt(e[3],10):0,d=e[5]?parseInt(e[5],10):0;return{value:t*(i*MV+a*tS+d*mNe),rest:o.slice(e[0].length)}}function zi(n){return L(B.anyDigitsSigned,n)}function D(n,o){switch(n){case 1:return L(B.singleDigit,o);case 2:return L(B.twoDigits,o);case 3:return L(B.threeDigits,o);case 4:return L(B.fourDigits,o);default:return L(new RegExp(`^\\d{1,`+n+`}`),o)}}function Gt(n,o){switch(n){case 1:return L(B.singleDigitSigned,o);case 2:return L(B.twoDigitsSigned,o);case 3:return L(B.threeDigitsSigned,o);case 4:return L(B.fourDigitsSigned,o);default:return L(new RegExp(`^-?\\d{1,`+n+`}`),o)}}function Wt(n){switch(n){case`morning`:return 4;case`evening`:return 17;case`pm`:case`noon`:case`afternoon`:return 12;default:return 0}}function Gi(n,o){let e=o>0,t=e?o:1-o,i;if(t<=50)i=n||100;else{let a=t+50,d=Math.trunc(a/100)*100,x=n>=a%100;i=n+d-(x?100:0)}return e?i:1-i}function Wi(n){return n%400===0||n%4===0&&n%100!==0}var Hi=class extends C{priority=130;incompatibleTokens=[`Y`,`R`,`u`,`w`,`I`,`i`,`e`,`c`,`t`,`T`];parse(o,e,t){let i=a=>({year:a,isTwoDigitYear:e===`yy`});switch(e){case`y`:return $(D(4,o),i);case`yo`:return $(t.ordinalNumber(o,{unit:`year`}),i);default:return $(D(e.length,o),i)}}validate(o,e){return e.isTwoDigitYear||e.year>0}set(o,e,t){let i=o.getFullYear();if(t.isTwoDigitYear){let d=Gi(t.year,i);return o.setFullYear(d,0,1),o.setHours(0,0,0,0),o}let a=!(`era`in e)||e.era===1?t.year:1-t.year;return o.setFullYear(a,0,1),o.setHours(0,0,0,0),o}};var qi=class extends C{priority=130;parse(o,e,t){let i=a=>({year:a,isTwoDigitYear:e===`YY`});switch(e){case`Y`:return $(D(4,o),i);case`Yo`:return $(t.ordinalNumber(o,{unit:`year`}),i);default:return $(D(e.length,o),i)}}validate(o,e){return e.isTwoDigitYear||e.year>0}set(o,e,t,i){let a=cS(o,i);if(t.isTwoDigitYear){let x=Gi(t.year,a);return o.setFullYear(x,0,i.firstWeekContainsDate),o.setHours(0,0,0,0),Ns$1(o,i)}let d=!(`era`in e)||e.era===1?t.year:1-t.year;return o.setFullYear(d,0,i.firstWeekContainsDate),o.setHours(0,0,0,0),Ns$1(o,i)}incompatibleTokens=[`y`,`R`,`u`,`Q`,`q`,`M`,`L`,`I`,`d`,`D`,`i`,`t`,`T`]};var ji=class extends C{priority=130;parse(o,e){return e===`R`?Gt(4,o):Gt(e.length,o)}set(o,e,t){let i=Ve(o,0);return i.setFullYear(t,0,4),i.setHours(0,0,0,0),fl$1(i)}incompatibleTokens=[`G`,`y`,`Y`,`u`,`Q`,`q`,`M`,`L`,`w`,`d`,`D`,`e`,`c`,`t`,`T`]};var $i=class extends C{priority=130;parse(o,e){return e===`u`?Gt(4,o):Gt(e.length,o)}set(o,e,t){return o.setFullYear(t,0,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`G`,`y`,`Y`,`R`,`w`,`I`,`i`,`e`,`c`,`t`,`T`]};var Ki=class extends C{priority=120;parse(o,e,t){switch(e){case`Q`:case`QQ`:return D(e.length,o);case`Qo`:return t.ordinalNumber(o,{unit:`quarter`});case`QQQ`:return t.quarter(o,{width:`abbreviated`,context:`formatting`})||t.quarter(o,{width:`narrow`,context:`formatting`});case`QQQQQ`:return t.quarter(o,{width:`narrow`,context:`formatting`});default:return t.quarter(o,{width:`wide`,context:`formatting`})||t.quarter(o,{width:`abbreviated`,context:`formatting`})||t.quarter(o,{width:`narrow`,context:`formatting`})}}validate(o,e){return e>=1&&e<=4}set(o,e,t){return o.setMonth((t-1)*3,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`q`,`M`,`L`,`w`,`I`,`d`,`D`,`i`,`e`,`c`,`t`,`T`]};var Qi=class extends C{priority=120;parse(o,e,t){switch(e){case`q`:case`qq`:return D(e.length,o);case`qo`:return t.ordinalNumber(o,{unit:`quarter`});case`qqq`:return t.quarter(o,{width:`abbreviated`,context:`standalone`})||t.quarter(o,{width:`narrow`,context:`standalone`});case`qqqqq`:return t.quarter(o,{width:`narrow`,context:`standalone`});default:return t.quarter(o,{width:`wide`,context:`standalone`})||t.quarter(o,{width:`abbreviated`,context:`standalone`})||t.quarter(o,{width:`narrow`,context:`standalone`})}}validate(o,e){return e>=1&&e<=4}set(o,e,t){return o.setMonth((t-1)*3,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`Q`,`M`,`L`,`w`,`I`,`d`,`D`,`i`,`e`,`c`,`t`,`T`]};var Xi=class extends C{incompatibleTokens=[`Y`,`R`,`q`,`Q`,`L`,`w`,`I`,`D`,`i`,`e`,`c`,`t`,`T`];priority=110;parse(o,e,t){let i=a=>a-1;switch(e){case`M`:return $(L(B.month,o),i);case`MM`:return $(D(2,o),i);case`Mo`:return $(t.ordinalNumber(o,{unit:`month`}),i);case`MMM`:return t.month(o,{width:`abbreviated`,context:`formatting`})||t.month(o,{width:`narrow`,context:`formatting`});case`MMMMM`:return t.month(o,{width:`narrow`,context:`formatting`});default:return t.month(o,{width:`wide`,context:`formatting`})||t.month(o,{width:`abbreviated`,context:`formatting`})||t.month(o,{width:`narrow`,context:`formatting`})}}validate(o,e){return e>=0&&e<=11}set(o,e,t){return o.setMonth(t,1),o.setHours(0,0,0,0),o}};var Yi=class extends C{priority=110;parse(o,e,t){let i=a=>a-1;switch(e){case`L`:return $(L(B.month,o),i);case`LL`:return $(D(2,o),i);case`Lo`:return $(t.ordinalNumber(o,{unit:`month`}),i);case`LLL`:return t.month(o,{width:`abbreviated`,context:`standalone`})||t.month(o,{width:`narrow`,context:`standalone`});case`LLLLL`:return t.month(o,{width:`narrow`,context:`standalone`});default:return t.month(o,{width:`wide`,context:`standalone`})||t.month(o,{width:`abbreviated`,context:`standalone`})||t.month(o,{width:`narrow`,context:`standalone`})}}validate(o,e){return e>=0&&e<=11}set(o,e,t){return o.setMonth(t,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`q`,`Q`,`M`,`w`,`I`,`D`,`i`,`e`,`c`,`t`,`T`]};function Fr(n,o,e){let t=W(n,e?.in),i=QV(t,e)-o;return t.setDate(t.getDate()-i*7),W(t,e?.in)}var Zi=class extends C{priority=100;parse(o,e,t){switch(e){case`w`:return L(B.week,o);case`wo`:return t.ordinalNumber(o,{unit:`week`});default:return D(e.length,o)}}validate(o,e){return e>=1&&e<=53}set(o,e,t,i){return Ns$1(Fr(o,t,i),i)}incompatibleTokens=[`y`,`R`,`u`,`q`,`Q`,`M`,`L`,`I`,`d`,`D`,`i`,`t`,`T`]};function Vr(n,o,e){let t=W(n,e?.in),i=KV(t,e)-o;return t.setDate(t.getDate()-i*7),t}var Ji=class extends C{priority=100;parse(o,e,t){switch(e){case`I`:return L(B.week,o);case`Io`:return t.ordinalNumber(o,{unit:`week`});default:return D(e.length,o)}}validate(o,e){return e>=1&&e<=53}set(o,e,t){return fl$1(Vr(o,t))}incompatibleTokens=[`y`,`Y`,`u`,`q`,`Q`,`M`,`L`,`w`,`d`,`D`,`e`,`c`,`t`,`T`]};var Ea=[31,28,31,30,31,30,31,31,30,31,30,31];var Ia=[31,29,31,30,31,30,31,31,30,31,30,31];var en=class extends C{priority=90;subPriority=1;parse(o,e,t){switch(e){case`d`:return L(B.date,o);case`do`:return t.ordinalNumber(o,{unit:`date`});default:return D(e.length,o)}}validate(o,e){let i=Wi(o.getFullYear()),a=o.getMonth();return i?e>=1&&e<=Ia[a]:e>=1&&e<=Ea[a]}set(o,e,t){return o.setDate(t),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`q`,`Q`,`w`,`I`,`D`,`i`,`e`,`c`,`t`,`T`]};var tn=class extends C{priority=90;subpriority=1;parse(o,e,t){switch(e){case`D`:case`DD`:return L(B.dayOfYear,o);case`Do`:return t.ordinalNumber(o,{unit:`date`});default:return D(e.length,o)}}validate(o,e){return Wi(o.getFullYear())?e>=1&&e<=366:e>=1&&e<=365}set(o,e,t){return o.setMonth(0,t),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`q`,`Q`,`M`,`L`,`w`,`I`,`d`,`E`,`i`,`e`,`c`,`t`,`T`]};function Ht(n,o,e){let t=pr(),i=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,a=W(n,e?.in),d=a.getDay(),R=(o%7+7)%7,Y=7-i;return pn$1(a,o<0||o>6?o-(d+Y)%7:(R+Y)%7-(d+Y)%7,e)}var nn=class extends C{priority=90;parse(o,e,t){switch(e){case`E`:case`EE`:case`EEE`:return t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`});case`EEEEE`:return t.day(o,{width:`narrow`,context:`formatting`});case`EEEEEE`:return t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`});default:return t.day(o,{width:`wide`,context:`formatting`})||t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`})}}validate(o,e){return e>=0&&e<=6}set(o,e,t,i){return o=Ht(o,t,i),o.setHours(0,0,0,0),o}incompatibleTokens=[`D`,`i`,`e`,`c`,`t`,`T`]};var on=class extends C{priority=90;parse(o,e,t,i){let a=d=>{let x=Math.floor((d-1)/7)*7;return(d+i.weekStartsOn+6)%7+x};switch(e){case`e`:case`ee`:return $(D(e.length,o),a);case`eo`:return $(t.ordinalNumber(o,{unit:`day`}),a);case`eee`:return t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`});case`eeeee`:return t.day(o,{width:`narrow`,context:`formatting`});case`eeeeee`:return t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`});default:return t.day(o,{width:`wide`,context:`formatting`})||t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`})}}validate(o,e){return e>=0&&e<=6}set(o,e,t,i){return o=Ht(o,t,i),o.setHours(0,0,0,0),o}incompatibleTokens=[`y`,`R`,`u`,`q`,`Q`,`M`,`L`,`I`,`d`,`D`,`E`,`i`,`c`,`t`,`T`]};var rn=class extends C{priority=90;parse(o,e,t,i){let a=d=>{let x=Math.floor((d-1)/7)*7;return(d+i.weekStartsOn+6)%7+x};switch(e){case`c`:case`cc`:return $(D(e.length,o),a);case`co`:return $(t.ordinalNumber(o,{unit:`day`}),a);case`ccc`:return t.day(o,{width:`abbreviated`,context:`standalone`})||t.day(o,{width:`short`,context:`standalone`})||t.day(o,{width:`narrow`,context:`standalone`});case`ccccc`:return t.day(o,{width:`narrow`,context:`standalone`});case`cccccc`:return t.day(o,{width:`short`,context:`standalone`})||t.day(o,{width:`narrow`,context:`standalone`});default:return t.day(o,{width:`wide`,context:`standalone`})||t.day(o,{width:`abbreviated`,context:`standalone`})||t.day(o,{width:`short`,context:`standalone`})||t.day(o,{width:`narrow`,context:`standalone`})}}validate(o,e){return e>=0&&e<=6}set(o,e,t,i){return o=Ht(o,t,i),o.setHours(0,0,0,0),o}incompatibleTokens=[`y`,`R`,`u`,`q`,`Q`,`M`,`L`,`I`,`d`,`D`,`E`,`i`,`e`,`t`,`T`]};function Lr(n,o){let e=W(n,o?.in).getDay();return e===0?7:e}function Ur(n,o,e){let t=W(n,e?.in);return pn$1(t,o-Lr(t,e),e)}var an=class extends C{priority=90;parse(o,e,t){let i=a=>a===0?7:a;switch(e){case`i`:case`ii`:return D(e.length,o);case`io`:return t.ordinalNumber(o,{unit:`day`});case`iii`:return $(t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`}),i);case`iiiii`:return $(t.day(o,{width:`narrow`,context:`formatting`}),i);case`iiiiii`:return $(t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`}),i);default:return $(t.day(o,{width:`wide`,context:`formatting`})||t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`}),i)}}validate(o,e){return e>=1&&e<=7}set(o,e,t){return o=Ur(o,t),o.setHours(0,0,0,0),o}incompatibleTokens=[`y`,`Y`,`u`,`q`,`Q`,`M`,`L`,`w`,`d`,`D`,`E`,`e`,`c`,`t`,`T`]};var sn=class extends C{priority=80;parse(o,e,t){switch(e){case`a`:case`aa`:case`aaa`:return t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`});case`aaaaa`:return t.dayPeriod(o,{width:`narrow`,context:`formatting`});default:return t.dayPeriod(o,{width:`wide`,context:`formatting`})||t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`})}}set(o,e,t){return o.setHours(Wt(t),0,0,0),o}incompatibleTokens=[`b`,`B`,`H`,`k`,`t`,`T`]};var ln=class extends C{priority=80;parse(o,e,t){switch(e){case`b`:case`bb`:case`bbb`:return t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`});case`bbbbb`:return t.dayPeriod(o,{width:`narrow`,context:`formatting`});default:return t.dayPeriod(o,{width:`wide`,context:`formatting`})||t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`})}}set(o,e,t){return o.setHours(Wt(t),0,0,0),o}incompatibleTokens=[`a`,`B`,`H`,`k`,`t`,`T`]};var cn=class extends C{priority=80;parse(o,e,t){switch(e){case`B`:case`BB`:case`BBB`:return t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`});case`BBBBB`:return t.dayPeriod(o,{width:`narrow`,context:`formatting`});default:return t.dayPeriod(o,{width:`wide`,context:`formatting`})||t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`})}}set(o,e,t){return o.setHours(Wt(t),0,0,0),o}incompatibleTokens=[`a`,`b`,`t`,`T`]};var dn=class extends C{priority=70;parse(o,e,t){switch(e){case`h`:return L(B.hour12h,o);case`ho`:return t.ordinalNumber(o,{unit:`hour`});default:return D(e.length,o)}}validate(o,e){return e>=1&&e<=12}set(o,e,t){let i=o.getHours()>=12;return i&&t<12?o.setHours(t+12,0,0,0):!i&&t===12?o.setHours(0,0,0,0):o.setHours(t,0,0,0),o}incompatibleTokens=[`H`,`K`,`k`,`t`,`T`]};var mn=class extends C{priority=70;parse(o,e,t){switch(e){case`H`:return L(B.hour23h,o);case`Ho`:return t.ordinalNumber(o,{unit:`hour`});default:return D(e.length,o)}}validate(o,e){return e>=0&&e<=23}set(o,e,t){return o.setHours(t,0,0,0),o}incompatibleTokens=[`a`,`b`,`h`,`K`,`k`,`t`,`T`]};var pn=class extends C{priority=70;parse(o,e,t){switch(e){case`K`:return L(B.hour11h,o);case`Ko`:return t.ordinalNumber(o,{unit:`hour`});default:return D(e.length,o)}}validate(o,e){return e>=0&&e<=11}set(o,e,t){return o.getHours()>=12&&t<12?o.setHours(t+12,0,0,0):o.setHours(t,0,0,0),o}incompatibleTokens=[`h`,`H`,`k`,`t`,`T`]};var un=class extends C{priority=70;parse(o,e,t){switch(e){case`k`:return L(B.hour24h,o);case`ko`:return t.ordinalNumber(o,{unit:`hour`});default:return D(e.length,o)}}validate(o,e){return e>=1&&e<=24}set(o,e,t){let i=t<=24?t%24:t;return o.setHours(i,0,0,0),o}incompatibleTokens=[`a`,`b`,`h`,`H`,`K`,`t`,`T`]};var _n=class extends C{priority=60;parse(o,e,t){switch(e){case`m`:return L(B.minute,o);case`mo`:return t.ordinalNumber(o,{unit:`minute`});default:return D(e.length,o)}}validate(o,e){return e>=0&&e<=59}set(o,e,t){return o.setMinutes(t,0,0),o}incompatibleTokens=[`t`,`T`]};var hn=class extends C{priority=50;parse(o,e,t){switch(e){case`s`:return L(B.second,o);case`so`:return t.ordinalNumber(o,{unit:`second`});default:return D(e.length,o)}}validate(o,e){return e>=0&&e<=59}set(o,e,t){return o.setSeconds(t,0),o}incompatibleTokens=[`t`,`T`]};var fn=class extends C{priority=30;parse(o,e){let t=i=>Math.trunc(i*Math.pow(10,-e.length+3));return $(D(e.length,o),t)}set(o,e,t){return o.setMilliseconds(t),o}incompatibleTokens=[`t`,`T`]};var gn=class extends C{priority=10;parse(o,e){switch(e){case`X`:return Ae(De.basicOptionalMinutes,o);case`XX`:return Ae(De.basic,o);case`XXXX`:return Ae(De.basicOptionalSeconds,o);case`XXXXX`:return Ae(De.extendedOptionalSeconds,o);default:return Ae(De.extended,o)}}set(o,e,t){return e.timestampIsSet?o:Ve(o,o.getTime()-GR(o)-t)}incompatibleTokens=[`t`,`T`,`x`]};var bn=class extends C{priority=10;parse(o,e){switch(e){case`x`:return Ae(De.basicOptionalMinutes,o);case`xx`:return Ae(De.basic,o);case`xxxx`:return Ae(De.basicOptionalSeconds,o);case`xxxxx`:return Ae(De.extendedOptionalSeconds,o);default:return Ae(De.extended,o)}}set(o,e,t){return e.timestampIsSet?o:Ve(o,o.getTime()-GR(o)-t)}incompatibleTokens=[`t`,`T`,`X`]};var vn=class extends C{priority=40;parse(o){return zi(o)}set(o,e,t){return[Ve(o,t*1e3),{timestampIsSet:!0}]}incompatibleTokens=`*`};var xn=class extends C{priority=20;parse(o){return zi(o)}set(o,e,t){return[Ve(o,t),{timestampIsSet:!0}]}incompatibleTokens=`*`};var Br={G:new Bi,y:new Hi,Y:new qi,R:new ji,u:new $i,Q:new Ki,q:new Qi,M:new Xi,L:new Yi,w:new Zi,I:new Ji,d:new en,D:new tn,E:new nn,e:new on,c:new rn,i:new an,a:new sn,b:new ln,B:new cn,h:new dn,H:new mn,K:new pn,k:new un,m:new _n,s:new hn,S:new fn,X:new gn,x:new bn,t:new vn,T:new xn};var Na=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;var Oa=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;var Ra=/^'([^]*?)'?$/;var Da=/''/g;var Aa=/\S/;var Pa=/[a-zA-Z]/;function zr(n,o,e,t){let i=()=>Ve(t?.in||e,NaN),a=dMe(),d=t?.locale??a.locale??Oh,x=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,R=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0;if(!o)return n?i():W(e,t?.in);let Y={firstWeekContainsDate:x,weekStartsOn:R,locale:d},oe=[new Ui(t?.in,e)],we=o.match(Oa).map(F=>{let K=F[0];if(K in nB){let Ne=nB[K];return Ne(F,d.formatLong)}return F}).join(``).match(Na),Qe=[];for(let F of we){!t?.useAdditionalWeekYearTokens&&iB(F)&&oB(F,o,n),!t?.useAdditionalDayOfYearTokens&&rB(F)&&oB(F,o,n);let K=F[0],Ne=Br[K];if(Ne){let{incompatibleTokens:no}=Ne;if(Array.isArray(no)){let oo=Qe.find(ro=>no.includes(ro.token)||ro.token===K);if(oo)throw new RangeError(`The format string mustn't contain \`${oo.fullToken}\` and \`${F}\` at the same time`)}else if(Ne.incompatibleTokens===`*`&&Qe.length>0)throw new RangeError(`The format string mustn't contain \`${F}\` and any other token at the same time`);Qe.push({token:K,fullToken:F});let In=Ne.run(n,F,d.match,Y);if(!In)return i();oe.push(In.setter),n=In.rest}else{if(K.match(Pa))throw new RangeError("Format string contains an unescaped latin alphabet character `"+K+"`");if(F===`''`?F=`'`:K===`'`&&(F=Fa(F)),n.indexOf(F)===0)n=n.slice(F.length);else return i()}}if(n.length>0&&Aa.test(n))return i();let Xt=oe.map(F=>F.priority).sort((F,K)=>K-F).filter((F,K,Ne)=>Ne.indexOf(F)===K).map(F=>oe.filter(K=>K.priority===F).sort((K,Ne)=>Ne.subPriority-K.subPriority)).map(F=>F[0]),Xe=W(e,t?.in);if(isNaN(+Xe))return i();let Yt={};for(let F of Xt){if(!F.validate(Xe,Y))return i();let K=F.set(Xe,Yt,Y);Array.isArray(K)?(Xe=K[0],Object.assign(Yt,K[1])):Xe=K}return Xe}function Fa(n){return n.match(Ra)[1].replace(Da,`'`)}var Va=[`determinateSpinner`];function La(n,o){if(n&1&&(Jx(),Ar(0,`svg`,11),So(1,`circle`,12),Rr()),n&2){let e=Vi$1();Kt$1(`viewBox`,e._viewBox()),Ut(),CE(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),Kt$1(`r`,e._circleRadius())}}var Ua=new b(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:Gr})});var Gr=100;var Ba=10;var qt=(()=>{class n{_elementRef=g(ue);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=g(Ua),t=Ine(),i=this._elementRef.nativeElement;this._noopAnimations=t===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=i.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&t===`reduced-motion`&&i.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Gr;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Ba)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(t){return new(t||n)};static ɵcmp=Ue({type:n,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(t,i){if(t&1&&bo(Va,5),t&2){let a;ti(a=ni())&&(i._determinateCircle=a.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(t,i){t&2&&(Kt$1(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,i.mode===`determinate`?i.value:null)(`mode`,i.mode),Fp(`mat-`+i.color),CE(`width`,i.diameter,`px`)(`height`,i.diameter,`px`)(`--%NS%mat-progress-spinner-size`,i.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,i.diameter+`px`),gt(`_mat-animation-noopable`,i._noopAnimations)(`mdc-circular-progress--indeterminate`,i.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,dC],diameter:[2,`diameter`,`diameter`,dC],strokeWidth:[2,`strokeWidth`,`strokeWidth`,dC]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(t,i){if(t&1&&(Aa$1(0,La,2,8,`ng-template`,null,0,c6),Ar(2,`div`,2,1),Jx(),Ar(4,`svg`,3),So(5,`circle`,4),Rr()(),eP(),Ar(6,`div`,5)(7,`div`,6)(8,`div`,7),Xk(9,8),Rr(),Ar(10,`div`,9),Xk(11,8),Rr(),Ar(12,`div`,10),Xk(13,8),Rr()()()),t&2){let a=d4(1);Ut(4),Kt$1(`viewBox`,i._viewBox()),Ut(),CE(`stroke-dasharray`,i._strokeCircumference(),`px`)(`stroke-dashoffset`,i._strokeDashOffset(),`px`)(`stroke-width`,i._circleStrokeWidth(),`%`),Kt$1(`r`,i._circleRadius()),Ut(4),Ku(`ngTemplateOutlet`,a),Ut(2),Ku(`ngTemplateOutlet`,a),Ut(2),Ku(`ngTemplateOutlet`,a)}},dependencies:[D9],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return n})();var ut=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Te({type:n});static ɵinj=Ee({imports:[_n$1]})}return n})();var oi=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new L$1;bulk={select:o=>this._select(o),deselect:o=>this._deselect(o),setSelection:o=>this._setSelection(o)};constructor(o=!1,e,t=!0,i){this._multiple=o,this._emitChanges=t,this.compareWith=i,e&&e.length&&(o?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...o){return this._select(o)}deselect(...o){return this._deselect(o)}setSelection(...o){return this._setSelection(o)}toggle(o){return this.isSelected(o)?this.deselect(o):this.select(o)}clear(o=!0){this._unmarkAll();let e=this._hasQueuedChanges();return o&&this._emitChangeEvent(),e}isSelected(o){return this._selection.has(this._getConcreteValue(o))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(o){this._multiple&&this.selected&&this._selected.sort(o)}isMultipleSelection(){return this._multiple}_select(o){this._verifyValueAssignment(o),o.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(o){this._verifyValueAssignment(o),o.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(o){this._verifyValueAssignment(o);let e=this.selected,t=new Set(o.map(a=>this._getConcreteValue(a)));o.forEach(a=>this._markSelected(a)),e.filter(a=>!t.has(this._getConcreteValue(a,t))).forEach(a=>this._unmarkSelected(a));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(o){o=this._getConcreteValue(o),this.isSelected(o)||(this._multiple||this._unmarkAll(),this.isSelected(o)||this._selection.add(o),this._emitChanges&&this._selectedToEmit.push(o))}_unmarkSelected(o){o=this._getConcreteValue(o),this.isSelected(o)&&(this._selection.delete(o),this._emitChanges&&this._deselectedToEmit.push(o))}_unmarkAll(){this.isEmpty()||this._selection.forEach(o=>this._unmarkSelected(o))}_verifyValueAssignment(o){o.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(o,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(o,t))return t;return o}else return o}};var qn=(()=>{class n{_listeners=[];notify(e,t){for(let i of this._listeners)i(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(t){return new(t||n)};static ɵprov=k({token:n,factory:n.ɵfac})}return n})();var qa=[`trigger`];var ja=[`panel`];var $a=[[[`mat-select-trigger`]],`*`];var Ka=[`mat-select-trigger`,`*`];function Qa(n,o){if(n&1&&(Ar(0,`span`,4),Ca$1(1),Rr()),n&2){let e=Vi$1();Ut(),g1(e.placeholder)}}function Xa(n,o){n&1&&Tn$1(0)}function Ya(n,o){if(n&1&&(Ar(0,`span`,11),Ca$1(1),Rr()),n&2){let e=Vi$1(2);Ut(),g1(e.triggerValue)}}function Za(n,o){if(n&1&&(Ar(0,`span`,5),Dr(1,Xa,1,0)(2,Ya,2,1,`span`,11),Rr()),n&2){let e=Vi$1();Ut(),Cr(e.customTrigger?1:2)}}function Ja(n,o){if(n&1){let e=UD();Ar(0,`div`,12,1),Bt(`keydown`,function(i){I_(e);return A_(Vi$1()._handleKeydown(i))}),Tn$1(2,1),Rr()}if(n&2){let e=Vi$1();Fp(e.panelClass),gt(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),Kt$1(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var es=new b(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=g(Y);return()=>vw(n)}});var ts=new b(`MAT_SELECT_CONFIG`);var jr=new b(`MatSelectTrigger`);var $n=class{source;value;constructor(o,e){this.source=o,this.value=e}};var jt=(()=>{class n{_viewportRuler=g(xl$1);_changeDetectorRef=g(Zt);_elementRef=g(ue);_dir=g(Bs$1,{optional:!0});_idGenerator=g(Fr$1);_renderer=g(it);_parentFormField=g(Ye,{optional:!0});ngControl=g(wa$1,{self:!0,optional:!0});_liveAnnouncer=g(ow);_defaultOptions=g(ts,{optional:!0});_animationsDisabled=gr();_popoverLocation;_initialized=new L$1;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,a=fXe(e,this.options,this.optionGroups),d=t._getHostElement();e===0&&a===1?i.scrollTop=0:i.scrollTop=pXe(d.offsetTop,d.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new $n(this,e)}_scrollStrategyFactory=g(es);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new L$1;_errorStateTracker;stateChanges=new L$1;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=N(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(zC.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=ds$1(()=>{let e=this.options;return e?e.changes.pipe(Yr$1(e),yt$1(()=>GT(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(yt$1(()=>this.optionSelectionChanges))});openedChange=new fe;_openedStream=this.openedChange.pipe(De$1(e=>e),le(()=>{}));_closedStream=this.openedChange.pipe(De$1(e=>!e),le(()=>{}));selectionChange=new fe;valueChange=new fe;constructor(){let e=g(KQe),t=g(lZ,{optional:!0}),i=g(pZ,{optional:!0}),a=g(new xE(`tabindex`),{optional:!0}),d=g(Iw,{optional:!0}),x=g(Le,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new gW(e,x||this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=d?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new oi(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Un(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Un(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Yr$1(null),Un(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute(`aria-labelledby`,e):i.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(We(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,a=>{a.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,a=t===13||t===32,d=this._keyManager;if(!d.isTyping()&&a&&!Uo(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let x=this.selected;d.onKeydown(e);let R=this.selected;R&&x!==R&&this._liveAnnouncer.announce(R.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,a=i===40||i===38,d=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!d&&(i===13||i===32)&&t.activeItem&&!Uo(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!d&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let x=this.options.some(R=>!R.disabled&&!R.selected);this.options.forEach(R=>{R.disabled||(x?R.select():R.deselect())})}else{let x=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==x&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Uo(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof yw?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new aw(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=GT(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Un(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),GT(...this.options.map(t=>t._stateChanges)).pipe(Un(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=Jn$1(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||n)};static ɵcmp=Ue({type:n,selectors:[[`mat-select`]],contentQueries:function(t,i,a){if(t&1&&DE(a,jr,5)(a,hW,5)(a,iue,5),t&2){let d;ti(d=ni())&&(i.customTrigger=d.first),ti(d=ni())&&(i.options=d),ti(d=ni())&&(i.optionGroups=d)}},viewQuery:function(t,i){if(t&1&&bo(qa,5)(ja,5)(bne,5),t&2){let a;ti(a=ni())&&(i.trigger=a.first),ti(a=ni())&&(i.panel=a.first),ti(a=ni())&&(i._overlayDir=a.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(t,i){t&1&&Bt(`keydown`,function(d){return i._handleKeydown(d)})(`focus`,function(){return i._onFocus()})(`blur`,function(){return i._onBlur()}),t&2&&(Kt$1(`id`,i.id)(`tabindex`,i.disabled?-1:i.tabIndex)(`aria-controls`,i.panelOpen?i.id+`-panel`:null)(`aria-expanded`,i.panelOpen)(`aria-label`,i.ariaLabel||null)(`aria-required`,i.required.toString())(`aria-disabled`,i.disabled.toString())(`aria-invalid`,i.errorState)(`aria-activedescendant`,i._getAriaActiveDescendant()),gt(`mat-mdc-select-disabled`,i.disabled)(`mat-mdc-select-invalid`,i.errorState)(`mat-mdc-select-required`,i.required)(`mat-mdc-select-empty`,i.empty)(`mat-mdc-select-multiple`,i.multiple)(`mat-select-open`,i.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,qe],disableRipple:[2,`disableRipple`,`disableRipple`,qe],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:dC(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,qe],placeholder:`placeholder`,required:[2,`required`,`required`,qe],multiple:[2,`multiple`,`multiple`,qe],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,qe],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,dC],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,qe]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[Ht$1([{provide:Qe,useExisting:n},{provide:rue,useExisting:n}]),Rt],ngContentSelectors:Ka,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(t,i){if(t&1&&(ei($a),Ar(0,`div`,2,0),Bt(`click`,function(){return i.open()}),Ar(3,`div`,3),Dr(4,Qa,2,1,`span`,4)(5,Za,3,1,`span`,5),Rr(),Ar(6,`div`,6)(7,`div`,7),Jx(),Ar(8,`svg`,8),So(9,`path`,9),Rr()()()(),Aa$1(10,Ja,3,16,`ng-template`,10),Bt(`detach`,function(){return i.close()})(`backdropClick`,function(){return i.close()})(`overlayKeydown`,function(d){return i._handleOverlayKeydown(d)})),t&2){let a=d4(1);Ut(3),Kt$1(`id`,i._valueId),Ut(),Cr(i.empty?4:5),Ut(6),Ku(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,i._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,i._scrollStrategy)(`cdkConnectedOverlayOrigin`,i._preferredOverlayOrigin||a)(`cdkConnectedOverlayPositions`,i._positions)(`cdkConnectedOverlayWidth`,i._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,i._popoverLocation)}},dependencies:[yw,bne],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return n})();var Yu=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=V({type:n,selectors:[[`mat-select-trigger`]],features:[Ht$1([{provide:jr,useExisting:n}])]})}return n})();var $t=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Te({type:n});static ɵinj=Ee({imports:[kl$1,bXe,_n$1,pw,Wt$1,bXe]})}return n})();var is=[`input`];var ns=[`*`];var Qn={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var os=new b(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>Qn});var be=(function(n){return n[n.Init=0]=`Init`,n[n.Checked=1]=`Checked`,n[n.Unchecked=2]=`Unchecked`,n[n.Indeterminate=3]=`Indeterminate`,n})(be||{});var Xn=class{source;checked};var ri=(()=>{class n{_elementRef=g(ue);_changeDetectorRef=g(Zt);_ngZone=g(ee);_animationsDisabled=gr();_options=g(os,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new Xn;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new fe;indeterminateChange=new fe;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=be.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){g(mr).load(wv);let e=g(new xE(`tabindex`),{optional:!0});this._options=this._options||Qn,this.color=this._options.color||Qn.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=g(Fr$1).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(be.Indeterminate):this._transitionCheckState(this.checked?be.Checked:be.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=N(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,i=this._getAnimationTargetElement();if(!(t===e||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let a=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(a)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?be.Checked:be.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return``;switch(e){case be.Init:if(t===be.Checked)return this._animationClasses.uncheckedToChecked;if(t==be.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case be.Unchecked:return t===be.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case be.Checked:return t===be.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case be.Indeterminate:return t===be.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(t){return new(t||n)};static ɵcmp=Ue({type:n,selectors:[[`mat-checkbox`]],viewQuery:function(t,i){if(t&1&&bo(is,5),t&2){let a;ti(a=ni())&&(i._inputElement=a.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(t,i){t&2&&(Da$1(`id`,i.id),Kt$1(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),Fp(i.color?`mat-`+i.color:`mat-accent`),gt(`_mat-animation-noopable`,i._animationsDisabled)(`mdc-checkbox--disabled`,i.disabled)(`mat-mdc-checkbox-disabled`,i.disabled)(`mat-mdc-checkbox-checked`,i.checked)(`mat-mdc-checkbox-disabled-interactive`,i.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,qe],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,qe],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,qe],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?void 0:dC(e)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,qe],checked:[2,`checked`,`checked`,qe],disabled:[2,`disabled`,`disabled`,qe],indeterminate:[2,`indeterminate`,`indeterminate`,qe]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[Ht$1([{provide:qc,useExisting:Pt(()=>n),multi:!0},{provide:Oa$1,useExisting:n,multi:!0}]),Rt],ngContentSelectors:ns,decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,i){if(t&1&&(ei(),Ar(0,`label`,3),Bt(`click`,function(d){return i._preventBubblingFromLabel(d)}),Ar(1,`span`,4,0),So(3,`span`,5),Ar(4,`input`,6,1),Bt(`blur`,function(){return i._onBlur()})(`click`,function(){return i._onInputClick()})(`change`,function(d){return i._onInteractionEvent(d)}),Rr(),So(6,`span`,7),Ar(7,`span`,8),Jx(),Ar(8,`svg`,9),So(9,`path`,10),Rr(),eP(),So(10,`span`,11),Rr(),So(11,`span`,12),Rr(),Ar(12,`span`,13,2),Tn$1(14),Rr()()),t&2){let a=d4(2);Ku(`labelPosition`,i.labelPosition)(`for`,i.inputId),Ut(4),gt(`mdc-checkbox--selected`,i.checked),Ku(`checked`,i.checked)(`indeterminate`,i.indeterminate)(`disabled`,i.disabled&&!i.disabledInteractive)(`id`,i.inputId)(`required`,i.required)(`tabIndex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex),Kt$1(`aria-label`,i.ariaLabel||null)(`aria-labelledby`,i.ariaLabelledby)(`aria-describedby`,i.ariaDescribedby)(`aria-checked`,i.indeterminate?`mixed`:null)(`aria-controls`,i.ariaControls)(`aria-disabled`,i.disabled&&i.disabledInteractive?!0:null)(`aria-expanded`,i.ariaExpanded)(`aria-owns`,i.ariaOwns)(`name`,i.name)(`value`,i.value),Ut(7),Ku(`matRippleTrigger`,a)(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleCentered`,!0)}},dependencies:[Dw,DXe],styles:[`.mdc-checkbox {
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
`],encapsulation:2})}return n})();var kn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Te({type:n});static ɵinj=Ee({imports:[ri,_n$1]})}return n})();var rs=[`*`];function as(n,o){if(n&1&&(Ar(0,`div`,3),Ca$1(1),Rr()),n&2){let e=Vi$1();Ut(),g1(e.info())}}function ss(n,o){if(n&1&&(Ar(0,`icon`,4),Ca$1(1,`info`),Rr()),n&2)Ku(`matTooltip`,Vi$1().info())}function ls(n,o){n&1&&So(0,`div`,5)}function cs(n,o){if(n&1&&(Ar(0,`div`,6)(1,`div`,8)(2,`div`,9)(3,`icon`),Ca$1(4),Rr()()()()),n&2){let e=Vi$1();Ut(),gt(`bg-base-200`,!e.value())(`bg-info`,e.value())(`border-info!`,e.value()),Ut(),gt(`left-1`,!e.value())(`left-5`,e.value())(`bg-base-400`,!e.value())(`bg-info-light`,e.value()),Ut(2),g1(e.value()?`done`:`remove`)}}function ds(n,o){if(n&1){let e=UD();Ar(0,`mat-checkbox`,10),Bt(`ngModelChange`,function(i){I_(e);return A_(Vi$1().setValue(i))}),Rr(),y5()}if(n&2)Ku(`ngModel`,Vi$1().value()),v5()}var Kr=(()=>{class n{constructor(){this.toggle=bs$1(void 0),this.label=bs$1(void 0),this.info=bs$1(void 0),this.inline=bs$1(!0),this.value=N(void 0),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e}setValue(e){this.value.set(e),this._onChange&&this._onChange(e)}writeValue(e){this.value.set(e)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`settings-toggle`]],inputs:{toggle:[1,`toggle`],label:[1,`label`],info:[1,`info`],inline:[1,`inline`]},features:[Ht$1([{provide:qc,useExisting:Pt(()=>n),multi:!0}])],ngContentSelectors:rs,decls:11,vars:13,consts:[[`type`,`button`,`matRipple`,``,1,`hover:bg-base-200`,`relative`,`flex`,`flex-1`,`items-center`,`space-x-2`,`overflow-hidden`,`rounded-sm`,`border`,`py-1`,`pr-1`,`pl-2`,3,`click`],[1,`z-10`,`flex`,`flex-1`,`items-center`,`space-x-2`,`px-2`,`text-left`],[1,`flex`,`flex-col`,`justify-center`,`w-full`,`leading-none`,`h-full`],[1,`text-xs`,`opacity-30`],[3,`matTooltip`],[1,`bg-info`,`absolute`,`inset-0`,`z-0`,`m-0!`,`opacity-10`],[1,`px-2`],[1,`pointer-events-none`,3,`ngModel`],[`toggle`,``,1,`border-base-400`,`relative`,`h-8`,`w-12`,`rounded-full`,`border-2`],[1,`absolute`,`top-1/2`,`flex`,`h-6`,`w-6`,`-translate-x-0.5`,`-translate-y-1/2`,`items-center`,`justify-center`,`rounded-full`,`text-black`,`shadow-sm`],[1,`pointer-events-none`,3,`ngModelChange`,`ngModel`]],template:function(t,i){t&1&&(ei(),Ar(0,`button`,0),Bt(`click`,function(){return i.setValue(!i.value())}),Ar(1,`div`,1)(2,`div`,2)(3,`div`),Ca$1(4),Tn$1(5),Rr(),Dr(6,as,2,1,`div`,3),Rr(),Dr(7,ss,2,1,`icon`,4),Rr(),Dr(8,ls,1,0,`div`,5),Dr(9,cs,5,15,`div`,6)(10,ds,1,1,`mat-checkbox`,7),Rr()),t&2&&(gt(`border-base-300`,!i.value())(`border-info`,i.value()),Ut(),gt(`py-2`,!i.inline())(`py-1`,!i.inline()),Ut(3),g1(i.label()),Ut(2),Cr(i.info()&&i.inline()?6:-1),Ut(),Cr(i.info()&&!i.inline()?7:-1),Ut(),Cr(i.value()?8:-1),Ut(),Cr(i.toggle()?9:10))},dependencies:[kn,ri,QCe,zCe,mZ,VXe,Yt,mt],styles:[`[_nghost-%COMP%]{display:flex}[toggle][_ngcontent-%COMP%]{transition:background .2s,left .2s}
/*# sourceMappingURL=settings-toggle.component.css.map */`]})}}return n})();var ms=64;var ps=64;var us=30*1e3;var _s=`PlaceOS.image-cache-v1`;var hs=`PlaceOS.image-cache-keys-v1`;var Ke=new Map;var Zn=new Map;var yt=new Map;var Qr=!1;function fs(){if(!Qr&&(Qr=!0,typeof caches<`u`&&caches.delete(_s).catch(()=>!1),typeof sessionStorage<`u`))try{sessionStorage.removeItem(hs)}catch{}}function Jn(n){let o=Ke.get(n);if(o)return Ke.delete(n),Ke.set(n,o),o}function gs(n,o){let e=Ke.get(n);for(e&&e!==o&&URL.revokeObjectURL(e),Ke.delete(n),Ke.set(n,o);Ke.size>ms;){let t=Ke.keys().next().value;if(!t)break;let i=Ke.get(t);Ke.delete(t),i&&URL.revokeObjectURL(i)}return o}function bs(n){for(yt.delete(n),yt.set(n,Date.now()+us);yt.size>ps;){let o=yt.keys().next().value;if(!o)break;yt.delete(o)}}function vs(n){let o=dt();document.cookie=`${o===`x-api-key`?`api-key=`+encodeURIComponent(Oo()):`bearer_token=`+encodeURIComponent(o)};max-age=30;path=${n};samesite=strict;${location.protocol===`https:`?`secure;`:``}`}function xs(){let n=dt();return n===`x-api-key`?{"X-API-Key":Oo()}:{Authorization:`Bearer ${n}`}}function Xr(n,o){return Zr(n,()=>(vs(o),fetch(n)))}function Yr(n){return Zr(n,()=>fetch(n,{headers:xs()}))}async function Zr(n,o){fs();let e=Jn(n);if(e)return e;if((yt.get(n)||0)>Date.now())throw new Error(`Image load is in retry cooldown`);yt.delete(n);let i=Zn.get(n);if(i)return i;let a=o().then(async d=>{if(!d?.ok)throw new Error(`Failed to fetch image: ${d?.status}`);return gs(n,URL.createObjectURL(await d.blob()))}).catch(d=>{throw bs(n),d}).finally(()=>Zn.delete(n));return Zn.set(n,a),a}var _t=(()=>{class n extends Gi$1{constructor(){super(...arguments),this._element=g(ue),this._observer=null,this._source_version=0,this.source=bs$1(void 0)}ngOnChanges(e){if(!e.source)return;this._source_version+=1,this.clearTimeout(`load`),this._observer?.disconnect(),this._observer=null;let t=this.source();if(t){if(!this._isLocalUrl(t)){this._element.nativeElement.src=t;return}this._loadWhenVisible(t,this._source_version)}}ngOnDestroy(){this._observer?.disconnect(),this._observer=null,super.ngOnDestroy()}_loadWhenVisible(e,t){if(typeof IntersectionObserver>`u`){this._loadImage(e,t);return}this._observer=new IntersectionObserver(i=>{i.some(({isIntersecting:a})=>a)&&(this._observer?.disconnect(),this._observer=null,this._loadImage(e,t))},{rootMargin:`300px`}),this._observer.observe(this._element.nativeElement)}async _loadImage(e,t){if(t!==this._source_version||e!==this.source())return;if(!No()){this.timeout(`load`,()=>{this._loadImage(e,t)},300);return}let i=Jn(e);if(i){this._element.nativeElement.src=i;return}let a=e.includes(`/api/engine/v2/uploads`)||e.includes(`/api/engine/v2/signage`);try{let d=a?await Xr(e,this._cookiePath(e)):await Yr(e);t===this._source_version&&e===this.source()&&(this._element.nativeElement.src=d)}catch(d){t===this._source_version&&this._element.nativeElement.dispatchEvent(new ErrorEvent(`error`,{error:d}))}}_isLocalUrl(e){try{return new URL(e,location.href).origin===location.origin}catch{return!1}}_cookiePath(e){return e.includes(`/api/engine/v2/uploads`)?`/api/engine/v2/uploads`:`/api/engine/v2/signage`}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=vt(n)))(i||n)}})()}static{this.ɵdir=V({type:n,selectors:[[`img`,`auth`,``],[`video`,`auth`,``],[`audio`,`auth`,``]],inputs:{source:[1,`source`]},features:[Ce,Rt]})}}return n})();var ks=[`*`];function ys(n,o){n&1&&(Ar(0,`button`,7)(1,`icon`),Ca$1(2,`close`),Rr()())}function Cs(n,o){if(n&1&&Dr(0,ys,3,0,`button`,7),n&2)Cr(Vi$1(2).loading()?-1:0)}function Ss(n,o){if(n&1&&(Ar(0,`a`,8)(1,`icon`),Ca$1(2,`close`),Rr()()),n&2)Ku(`routerLink`,Vi$1(3).close())}function Ms(n,o){if(n&1&&Dr(0,Ss,3,1,`a`,8),n&2)Cr(Vi$1(2).loading()?-1:0)}function ws(n,o){if(n&1&&Dr(0,Cs,1,1)(1,Ms,1,1),n&2)Cr(Vi$1().close()?.length?1:0)}function Ts(n,o){n&1&&(Tn$1(0),So(1,`div`,9))}function Es(n,o){if(n&1&&(Ar(0,`div`,5),So(1,`mat-spinner`,10),Ar(2,`p`,11),Ca$1(3),Rr()()),n&2){let e=Vi$1();Ut(),Ku(`diameter`,32),Ut(2),g1(e.loading())}}function Is(n,o){if(n&1&&(Ar(0,`kbd`,14),Ca$1(1),Rr()),n&2){let e=Vi$1(2);Ut(),g1(e.confirm_hotkey())}}function Ns(n,o){if(n&1){let e=UD();Ar(0,`footer`,12)(1,`button`,13),Bt(`click`,function(){I_(e);return A_(Vi$1().confirm.emit())}),Ca$1(2),BD(3,`translate`),Dr(4,Is,2,1,`kbd`,14),Rr()()}if(n&2){let e=Vi$1();gt(`max-w-156`,!e.full_width()),Ut(),Ku(`disabled`,e.confirm_disabled()),Ut(),To(` `,e.confirm_text()||s6(3,5,`COMMON.SAVE`),` `),Ut(2),Cr(e.confirm_hotkey()?4:-1)}}var yn=(()=>{class n{constructor(){this.loading=bs$1(``),this.heading=bs$1(`Fullscreen Modal`),this.confirm_text=bs$1(``),this.confirm_hotkey=bs$1(``),this.confirm_disabled=bs$1(!1),this.close=bs$1([]),this.hide_confirm=bs$1(!1),this.hide_close=bs$1(!1),this.full_width=bs$1(!1),this.confirm=WIe(),this.closed=WIe()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`fullscreen-modal-shell`],[``,`fs-modal-shell`,``]],inputs:{loading:[1,`loading`],heading:[1,`heading`],confirm_text:[1,`confirm_text`],confirm_hotkey:[1,`confirm_hotkey`],confirm_disabled:[1,`confirm_disabled`],close:[1,`close`],hide_confirm:[1,`hide_confirm`],hide_close:[1,`hide_close`],full_width:[1,`full_width`]},outputs:{confirm:`confirm`,closed:`closed`},ngContentSelectors:ks,decls:10,vars:14,consts:[[`cdkScrollable`,``,1,`bg-base-200`,`fixed`,`inset-0`,`flex`,`flex-col`,`items-center`,`overflow-auto`,`px-2`],[1,`border-base-300`,`bg-base-100`,`fixed`,`top-0`,`mx-auto`,`h-screen`,`max-w-full`,`border-x`],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`mx-auto`,`my-2`,`flex`,`h-14`,`w-full`,`items-center`,`justify-between`,`rounded-sm`,`border-none`,`px-4`,`py-2`],[1,`flex`,`items-center`,`text-xl`,`font-medium`,`capitalize`,3,`innerHTML`],[1,`z-0`,`mx-auto`,`h-1/2`,`w-full`,`flex-1`,`space-y-8`,`p-2`],[1,`flex`,`h-1/2`,`w-full`,`flex-1`,`flex-col`,`items-center`,`justify-center`,`space-y-4`,`p-12`],[1,`bg-base-200`,`fixed`,`bottom-0`,`left-1/2`,`z-10`,`mx-auto`,`my-2`,`flex`,`w-full`,`-translate-x-1/2`,`items-center`,`justify-end`,`rounded-sm`,`border-none`,`px-4`,`py-2`,3,`max-w-156`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[`icon`,``,`matRipple`,``,3,`routerLink`],[1,`h-24`,`w-full`],[3,`diameter`],[1,`text-center`,`opacity-50`],[1,`bg-base-200`,`fixed`,`bottom-0`,`left-1/2`,`z-10`,`mx-auto`,`my-2`,`flex`,`w-full`,`-translate-x-1/2`,`items-center`,`justify-end`,`rounded-sm`,`border-none`,`px-4`,`py-2`],[`btn`,``,`matRipple`,``,1,`flex`,`min-w-32`,`items-center`,`justify-center`,`gap-2`,3,`click`,`disabled`],[1,`border-base-300`,`bg-base-100`,`text-base-content`,`rounded`,`border`,`px-2`,`py-1`,`text-xs`,`leading-none`,`shadow-sm`]],template:function(t,i){t&1&&(ei(),Ar(0,`div`,0),So(1,`div`,1),Ar(2,`header`,2),So(3,`h2`,3),BD(4,`sanitize`),Dr(5,ws,2,1),Rr(),Ar(6,`main`,4),Dr(7,Ts,2,0)(8,Es,4,2,`div`,5),Rr(),Dr(9,Ns,5,7,`footer`,6),Rr()),t&2&&(Ut(),gt(`w-160`,!i.full_width())(`w-full`,i.full_width()),Ut(),gt(`max-w-156`,!i.full_width()),Ut(),Ku(`innerHTML`,s6(4,12,i.heading()),zq),Ut(2),Cr(i.hide_close()?-1:5),Ut(),gt(`max-w-156`,!i.full_width()),Ut(),Cr(i.loading()?8:7),Ut(2),Cr(!i.loading()&&!i.hide_confirm()?9:-1))},dependencies:[hw,ut,qt,VXe,Z7e,K7e,gm,Dw,mte,JS,f,E],styles:[`main[_ngcontent-%COMP%]{scroll-margin-top:60px}
/*# sourceMappingURL=fullscreen-modal-shell.component.css.map */`]})}}return n})();var Os=[`input`];var Rs=[`formField`];var Ds=[`*`];var Cn=class{source;value;constructor(o,e){this.source=o,this.value=e}};var As={provide:qc,useExisting:Pt(()=>ai),multi:!0};var ea=new b(`MatRadioGroup`);var Ps=new b(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var ai=(()=>{class n{_changeDetector=g(Zt);_value=null;_name=g(Fr$1).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new fe;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Cn(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(t){return new(t||n)};static ɵdir=V({type:n,selectors:[[`mat-radio-group`]],contentQueries:function(t,i,a){if(t&1&&DE(a,Kt,5),t&2){let d;ti(d=ni())&&(i._radios=d)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,qe],required:[2,`required`,`required`,qe],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,qe]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[Ht$1([As,{provide:ea,useExisting:n}])]})}return n})();var Kt=(()=>{class n{_elementRef=g(ue);_changeDetector=g(Zt);_focusMonitor=g(jd);_radioDispatcher=g(qn);_defaultOptions=g(Ps,{optional:!0});_ngZone=g(ee);_renderer=g(it);_uniqueId=g(Fr$1).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new fe;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=gr();_injector=g(Y);constructor(){g(mr).load(wv);let e=g(ea,{optional:!0}),t=g(new xE(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=dC(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new Cn(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let i=this._inputElement?.nativeElement;i&&(i.setAttribute(`tabindex`,t+``),this._previousTabIndex=t,an$1(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===i&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===i&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(t){return new(t||n)};static ɵcmp=Ue({type:n,selectors:[[`mat-radio-button`]],viewQuery:function(t,i){if(t&1&&bo(Os,5)(Rs,7,ue),t&2){let a;ti(a=ni())&&(i._inputElement=a.first),ti(a=ni())&&(i._rippleTrigger=a.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(t,i){t&1&&Bt(`focus`,function(){return i._inputElement.nativeElement.focus()}),t&2&&(Kt$1(`id`,i.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),gt(`mat-primary`,i.color===`primary`)(`mat-accent`,i.color===`accent`)(`mat-warn`,i.color===`warn`)(`mat-mdc-radio-checked`,i.checked)(`mat-mdc-radio-disabled`,i.disabled)(`mat-mdc-radio-disabled-interactive`,i.disabledInteractive)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,qe],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:dC(e)],checked:[2,`checked`,`checked`,qe],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,qe],required:[2,`required`,`required`,qe],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,qe]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:Ds,decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,i){t&1&&(ei(),Ar(0,`label`,2,0)(2,`span`,3),So(3,`span`,4),Ar(4,`input`,5,1),Bt(`change`,function(d){return i._onInputInteraction(d)}),Rr(),Ar(6,`span`,6),So(7,`span`,7)(8,`span`,8),Rr(),Ar(9,`span`,9),So(10,`span`,10),Rr()(),Ar(11,`span`,11),Tn$1(12),Rr()()),t&2&&(Ku(`labelPosition`,i.labelPosition)(`for`,i.inputId),Ut(2),gt(`mdc-radio--disabled`,i.disabled),Ut(2),Ku(`id`,i.inputId)(`checked`,i.checked)(`disabled`,i.disabled&&!i.disabledInteractive)(`required`,i.required),Kt$1(`name`,i.name)(`value`,i.value)(`aria-label`,i.ariaLabel)(`aria-labelledby`,i.ariaLabelledby)(`aria-describedby`,i.ariaDescribedby)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null),Ut(5),Ku(`matRippleTrigger`,i._rippleTrigger.nativeElement)(`matRippleDisabled`,i._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[Dw,DXe],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})}return n})();var Sn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Te({type:n});static ɵinj=Ee({imports:[gm,Kt,_n$1]})}return n})();var ia=(()=>{class n{constructor(){this.url=g(Zce)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`image-viewer`]],decls:5,vars:1,consts:[[1,`bg-base-200`,`h-screen`,`w-screen`],[`auth`,``,1,`h-full`,`w-full`,`object-contain`,`object-center`,3,`source`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``,1,`bg-base-100`,`absolute`,`top-1`,`right-1`]],template:function(t,i){t&1&&(Ar(0,`div`,0),So(1,`img`,1),Ar(2,`button`,2)(3,`icon`),Ca$1(4,`close`),Rr()()()),t&2&&(Ut(),Ku(`source`,i.url))},dependencies:[VXe,_t,Z7e,K7e],encapsulation:2})}}return n})();var Fs=(n,o,e)=>({file:n,is_public:o,permissions:e});function Vs(n,o){if(n&1){let e=UD();Ar(0,`div`,7)(1,`label`),Ca$1(2,`Permissions`),Rr(),Ar(3,`mat-form-field`,11)(4,`mat-select`,12),Bt(`ngModelChange`,function(i){I_(e);return A_(Vi$1().permissions.set(i))}),Ar(5,`mat-option`,13),Ca$1(6,`None`),Rr(),Ar(7,`mat-option`,14),Ca$1(8,`Support`),Rr(),Ar(9,`mat-option`,15),Ca$1(10,`Admin`),Rr()(),y5(),Rr()()}if(n&2){let e=Vi$1();Ut(4),Ku(`ngModel`,e.permissions()),v5()}}var oa=(()=>{class n{constructor(){this._dialog_ref=g(tT),this._data=g(Zce),this.file=this._data.file,this.is_public=N(!!this._data.is_public),this.permissions=N(`none`),this.file=this._data.file}close(){this._dialog_ref.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`upload-permissions-modal`]],decls:18,vars:7,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[1,`min-w-[20rem]`,`space-y-2`,`px-4`,`py-2`],[1,`flex`,`flex-col`],[`appearance`,`outline`,1,`no-subscript`],[`matInput`,``,`disabled`,`true`,`placeholder`,`File Name`,3,`ngModel`],[1,`flex`,`flex-col`,`space-y-2`],[1,`border-base-200`,`flex`,`items-center`,`justify-end`,`space-x-2`,`border-t`,`px-4`,`py-2`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`w-32`],[`btn`,``,`matRipple`,``,1,`w-32`,3,`mat-dialog-close`],[`appearance`,`outline`],[3,`ngModelChange`,`ngModel`],[`value`,`none`],[`value`,`support`],[`value`,`admin`]],template:function(t,i){t&1&&(Ar(0,`header`,0)(1,`h2`,1),Ca$1(2,`Upload File`),Rr(),Ar(3,`button`,2)(4,`icon`),Ca$1(5,`close`),Rr()()(),Ar(6,`main`,3)(7,`div`,4)(8,`label`),Ca$1(9,`File Name`),Rr(),Ar(10,`mat-form-field`,5),So(11,`input`,6),y5(),Rr()(),Dr(12,Vs,11,1,`div`,7),Rr(),Ar(13,`footer`,8)(14,`button`,9),Ca$1(15,` Cancel `),Rr(),Ar(16,`button`,10),Ca$1(17,` Upload `),Rr()()),t&2&&(Ut(11),Ku(`ngModel`,i.file.name),v5(),Ut(),Cr(i.is_public()?-1:12),Ut(4),Ku(`mat-dialog-close`,Z4(3,Fs,i.file,i.is_public(),i.permissions())))},dependencies:[Z7e,K7e,Wt$1,qn$1,QCe,lU,zCe,mZ,$t,jt,hW,VXe,fd,pd,gm,Dw],encapsulation:2})}}return n})();var Ls=[`image_list`];var Us=[`file_input`];function Bs(n,o){if(n&1){let e=UD();Ar(0,`div`,15),So(1,`img`,16),Ar(2,`div`,17),So(3,`div`,18),Ar(4,`div`,19)(5,`button`,20),Bt(`click`,function(){let i=I_(e).$implicit;return A_(Vi$1().copyLink(i))}),Ar(6,`icon`),Ca$1(7,`link`),Rr()(),Ar(8,`button`,20),Bt(`click`,function(){let i=I_(e).$implicit;return A_(Vi$1().viewImage(i))}),Ar(9,`icon`),Ca$1(10,`visibility`),Rr()(),Ar(11,`button`,20),Bt(`click`,function(){let i=I_(e).$implicit;return A_(Vi$1().removeImage(i))}),Ar(12,`icon`),Ca$1(13,`close`),Rr()()()()()}if(n&2){let e=o.$implicit;CE(`transform`,`translate(-`+Vi$1().offset()+`00%)`),Ut(),Ku(`source`,e)}}function zs(n,o){if(n&1&&So(0,`mat-progress-spinner`,22),n&2){let e=Vi$1().$implicit;Ku(`value`,e.progress)(`diameter`,64)}}function Gs(n,o){n&1&&(Ar(0,`icon`,23),Ca$1(1,`warning`),Rr())}function Ws(n,o){n&1&&(Ar(0,`div`,24)(1,`icon`,25),Ca$1(2,`refresh`),Rr()())}function Hs(n,o){if(n&1){let e=UD();Ar(0,`div`,21),Bt(`click`,function(){let i=I_(e).$implicit;return A_(Vi$1().retryUpload(i))}),Dr(1,zs,1,2,`mat-progress-spinner`,22),Dr(2,Gs,2,0,`icon`,23),Dr(3,Ws,3,0,`div`,24),Rr()}if(n&2){let e=o.$implicit;CE(`transform`,`translate(-`+Vi$1().offset()+`00%)`),Ku(`matTooltip`,e.error),Ut(),Cr(e.error?-1:1),Ut(),Cr(e.error?2:-1),Ut(),Cr(e.error?3:-1)}}function qs(n,o){if(n&1){let e=UD();Ar(0,`button`,26),Bt(`click`,function(){I_(e);return A_(Vi$1().previousOffset())}),Ar(1,`icon`),Ca$1(2,`chevron_left`),Rr()()}if(n&2)Ku(`disabled`,Vi$1().offset()===0)}function js(n,o){if(n&1){let e=UD();Ar(0,`button`,27),Bt(`click`,function(){I_(e);return A_(Vi$1().nextOffset())}),Ar(1,`icon`),Ca$1(2,`chevron_right`),Rr()()}if(n&2){let e=Vi$1();Ku(`disabled`,e.offset()>=e.length()-e.view_space())}}function $s(n,o){if(n&1){let e=UD();Ar(0,`mat-chip-row`,28),Bt(`removed`,function(){let i=I_(e).$implicit;return A_(Vi$1().removeImage(i))}),Ar(1,`div`,29),Ca$1(2),Rr(),Ar(3,`button`,30)(4,`icon`),Ca$1(5,`cancel`),Rr()()()}if(n&2){let e=o.$implicit;Ut(2),g1(e),Ut(),Kt$1(`aria-label`,`Remove `+e)}}var ra=(()=>{class n extends Gi$1{constructor(){super(...arguments),this._clipboard=g(_G),this._uploads=g(fZe),this._dialog=g(nT),this._injector=g(Y),this._upload_completion_effect=St(()=>{let e=this.upload_list(),t=this.upload_ids();for(let i of t){let a=e.find(d=>d?.id===i);a&&a.progress>=100&&(this.addImageUrl(a.link),this.upload_ids.set(this.upload_ids().filter(d=>d!==i)))}},{injector:this._injector}),this.list=N([]),this.upload_map={},this.upload_ids=N([]),this.upload_list=N([]),this.offset=N(0),this.view_space=N(0),this.separators=[188,13],this.uploads=Ie(()=>{let e=this.upload_ids();return this.upload_list().filter(t=>e.includes(t?.id))}),this.length=Ie(()=>this.list().length+this.uploads().length+1),this._list_el=KIe(`image_list`),this._file_input=KIe(`file_input`),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e}ngAfterViewInit(){this.updateViewSpace()}updateViewSpace(){this.timeout(`init_view_space`,()=>{let e=this._list_el()?.nativeElement?.getBoundingClientRect();e&&this.view_space.set(Math.floor(e.width/152))},100)}copyLink(e){this._clipboard.copy(e),DB(`Copied image URL to clipboard`)}viewImage(e){this._dialog.open(ia,{data:e})}removeImage(e){this.setValue(this.list().filter(t=>t!==e))}addImage(e){e.value&&(this.setValue(Pr$1([...this.list(),e.value])),e.chipInput.inputElement.value=``)}addImageUrl(e){this.setValue(Pr$1([...this.list(),e]))}retryUpload(e){e.error&&(e.error=null,e.upload.resume())}previousOffset(){this.offset.update(e=>e-1)}nextOffset(){this.offset.update(e=>e+1)}async uploadImages(e){let t=e.target;if(t?.files){let i=t.files;if(i.length){this.interval(`update_status`,()=>this._updateUploadHistory());for(let a=0;a<i.length;a++)try{let d=await this._uploads.uploadFileWithPermissions(i[a]);this.upload_ids.set([...this.upload_ids(),d])}catch(d){if(d instanceof hT)continue;IB(`Failed to upload ${i[a].name}: ${d?.message||`Unknown error`}`)}this._file_input().nativeElement.value=``}}}setValue(e){let t=e||[];this.list.set(t),this._onChange&&this._onChange(t)}writeValue(e){this.list.set(e||[])}async _updateUploadHistory(){let e=this.upload_ids();if(e.length===0)return;let i=this._uploads.upload_list().filter(d=>e.find(x=>x===d?.id)),a=i.filter(d=>d.progress>=100);this.upload_list.set(i),a.forEach(d=>{this.upload_map[d?.id]=d.upload?.id||d?.id,delete d.upload}),a.length>=e.length&&this.clearInterval(`update_status`)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=vt(n)))(i||n)}})()}static{this.ɵcmp=Ue({type:n,selectors:[[`image-list-field`]],viewQuery:function(t,i){t&1&&r1(i._list_el,Ls,5)(i._file_input,Us,5),t&2&&u4(2)},features:[Ht$1([{provide:qc,useExisting:Pt(()=>n),multi:!0},{provide:$le,useValue:oa}]),Ce],decls:23,vars:13,consts:[[`image_list`,``],[`file_input`,``],[`chipList`,``],[`images`,``,1,`relative`,`mb-2`,`flex`,`w-full`,`items-center`,`space-x-2`,`overflow-hidden`,`py-2`,3,`resize`],[`image`,``,1,`border-base-200`,`hover:border-base-300`,`hover:bg-base-200`,`relative`,`flex`,`h-32`,`w-36`,`shrink-0`,`cursor-pointer`,`flex-col`,`items-center`,`justify-center`,`rounded-xl`,`border-2`,`border-dashed`],[1,`text-4xl`,`opacity-60`],[1,`px-4`,`text-center`,`opacity-60`],[`type`,`file`,1,`absolute`,`inset-0`,`h-32`,`w-32`,`cursor-pointer`,`opacity-0`,3,`change`],[`image`,``,1,`bg-base-200`,`relative`,`h-32`,`w-36`,`shrink-0`,`overflow-hidden`,`rounded-sm`,`bg-cover`,`bg-center`,3,`transform`],[`upload`,``,1,`border-base-content/10`,`/5`,`bg-base-200`,`flex`,`h-32`,`w-36`,`shrink-0`,`items-center`,`justify-center`,`rounded-sm`,`border`,`bg-cover`,`bg-center`,3,`transform`,`matTooltip`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`left-0`,`-translate-y-1/2`,`transform`,3,`disabled`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`right-0`,`-translate-y-1/2`,`transform`,3,`disabled`],[`appearance`,`outline`,1,`w-full`],[`aria-label`,`Image List`],[3,`matChipInputTokenEnd`,`placeholder`,`matChipInputFor`,`matChipInputSeparatorKeyCodes`,`matChipInputAddOnBlur`],[`image`,``,1,`bg-base-200`,`relative`,`h-32`,`w-36`,`shrink-0`,`overflow-hidden`,`rounded-sm`,`bg-cover`,`bg-center`],[`auth`,``,1,`pointer-events-none`,`absolute`,`top-1/2`,`left-1/2`,`z-10`,`-translate-x-1/2`,`-translate-y-1/2`,`object-contain`,3,`source`],[`overlay`,``,1,`text-base-100`,`absolute`,`inset-0`,`z-20`],[`bg`,``,1,`absolute`,`inset-0`,`bg-black`,`opacity-0`],[`actions`,``,1,`absolute`,`top-0`,`right-0`,`left-0`,`flex`,`items-center`,`justify-center`,`space-x-2`,`opacity-0`],[`icon`,``,3,`click`],[`upload`,``,1,`border-base-content/10`,`/5`,`bg-base-200`,`flex`,`h-32`,`w-36`,`shrink-0`,`items-center`,`justify-center`,`rounded-sm`,`border`,`bg-cover`,`bg-center`,3,`click`,`matTooltip`],[`mode`,`determinate`,3,`value`,`diameter`],[1,`text-error`,`text-6xl`],[`overlay`,``,1,`text-base-100`,`hover:bg-base-content`,`hover:bg-opacity-50`,`absolute`,`inset-0`,`flex`,`items-center`,`justify-center`],[1,`text-3xl`,`opacity-0`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`left-0`,`-translate-y-1/2`,`transform`,3,`click`,`disabled`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`right-0`,`-translate-y-1/2`,`transform`,3,`click`,`disabled`],[3,`removed`],[1,`max-w-md`,`truncate`],[`matChipRemove`,``]],template:function(t,i){if(t&1&&(Ar(0,`div`,3,0),Bt(`resize`,function(){return i.updateViewSpace()},qq),Ar(2,`div`,4)(3,`icon`,5),Ca$1(4,`add`),Rr(),Ar(5,`p`,6),Ca$1(6),BD(7,`translate`),Rr(),Ar(8,`input`,7,1),Bt(`change`,function(d){return i.uploadImages(d)}),Rr()(),Z8(10,Bs,14,3,`div`,8,K8),Z8(12,Hs,4,6,`div`,9,K8),Dr(14,qs,3,1,`button`,10),Dr(15,js,3,1,`button`,11),Rr(),Ar(16,`mat-form-field`,12)(17,`mat-chip-grid`,13,2),Z8(19,$s,6,2,`mat-chip-row`,null,K8),Rr(),Ar(21,`input`,14),BD(22,`translate`),Bt(`matChipInputTokenEnd`,function(d){return i.addImage(d)}),Rr()()),t&2){let a=d4(18);Ut(2),CE(`transform`,`translate(-`+i.offset()+`00%)`),Ut(4),To(` `,s6(7,9,`COMMON.IMAGE_UPLOADS`),` `),Ut(4),Q8(i.list()),Ut(2),Q8(i.uploads()),Ut(2),Cr(i.length()>i.view_space()?14:-1),Ut(),Cr(i.length()>i.view_space()?15:-1),Ut(4),Q8(i.list()),Ut(2),Ku(`placeholder`,s6(22,11,`COMMON.IMAGE_ADD_URL`))(`matChipInputFor`,a)(`matChipInputSeparatorKeyCodes`,i.separators)(`matChipInputAddOnBlur`,!0)}},dependencies:[Wt$1,qn$1,Cl$1,Nl$1,wl$1,Sl$1,yo,ut,qt,Yt,mt,VXe,_t,f],styles:[`[_nghost-%COMP%]{width:100%}[overlay][_ngcontent-%COMP%]{transition:background .2s}[image][_ngcontent-%COMP%]:hover   [actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%]:hover > icon[_ngcontent-%COMP%]{opacity:1!important}[image][_ngcontent-%COMP%]:hover   [bg][_ngcontent-%COMP%]{opacity:.4!important}[actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%] > icon[_ngcontent-%COMP%]{transition:opacity .2s}[image][_ngcontent-%COMP%]{transition:transform .2s}
/*# sourceMappingURL=image-list-field.component.css.map */`]})}}return n})();function Ks(n,o){if(n&1&&(So(0,`div`,1),BD(1,`safe`)),n&2)Ku(`innerHTML`,HD(1,1,Vi$1().changelog(),`html`),zq)}function Qs(n,o){n&1&&(Ar(0,`div`,2)(1,`icon`,3),Ca$1(2,`close`),Rr(),Ar(3,`div`,4),Ca$1(4,`No changelog`),Rr()())}var aa=(()=>{class n{constructor(){this._data=g(Zce),this.loading=N(!1),this.changelog=Ie(()=>f$1(this._data.changelog||``,{async:!1}))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`changelog-modal`]],decls:3,vars:3,consts:[[3,`heading`,`hide_confirm`],[1,`markdown`,3,`innerHTML`],[1,`flex`,`flex-col`,`items-center`,`justify-center`,`space-y-2`],[1,`text-3xl`],[1,`text`]],template:function(t,i){t&1&&(Ar(0,`fullscreen-modal-shell`,0),Dr(1,Ks,2,4,`div`,1)(2,Qs,5,0,`div`,2),Rr()),t&2&&(Ku(`heading`,`Changelog`)(`hide_confirm`,!0),Ut(),Cr(i.changelog()?1:2))},dependencies:[yn,VXe,_W],encapsulation:2})}}return n})();var sa=(()=>{class n{constructor(){this._document=g(J),this._dialog=g(nT),this._changelog=N(null),this.available=Ie(()=>this._changelog()!==null),this._load()}view(){let e=this._changelog();e!==null&&this._dialog.open(aa,{data:{changelog:e}})}async _load(){try{let e=new URL(`CHANGELOG.md`,this._document.baseURI),t=await fetch(e);if(!t.ok)return;this._changelog.set(await t.text())}catch{}}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=x({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();function Xs(n,o){if(n&1&&(Ar(0,`div`,1),Ca$1(1),Rr()),n&2){let e=Vi$1(2);Ut(),To(` `,e.initials,` `)}}function Ys(n,o){if(n&1&&So(0,`img`,2),n&2){let e=Vi$1(2);Ku(`alt`,e.initials)(`source`,e.user().photo)}}function Zs(n,o){if(n&1&&(Ar(0,`div`,0),Dr(1,Xs,2,1,`div`,1)(2,Ys,1,2,`img`,2),Rr()),n&2){let e=Vi$1();Kt$1(`user-id`,e.user().id),Ut(),Cr(e.user().photo?2:1)}}var Mn=(()=>{class n{constructor(){this.user=bs$1(void 0),this.is_valid=Ie(()=>{let e=this.user();if(!e)return!1;let t=(e.name||``).trim(),i=(e.email||``).trim();return t.startsWith(`<empty>`)||i.startsWith(`<empty>`)?!1:!!(t||i||e.first_name||e.last_name)})}get initials(){let e=this.user();if(!e)return`NA`;if(e.first_name&&e.last_name)return`${e.first_name[0]}${e.last_name[0]}`;let t=(e.name||``).replace(/<[^>]*>/g,` `).trim();t||(t=(e.email||e.name||``).split(`@`)[0]);let i=t.replace(/[()[\]\-+=\\/@<>]+/gi,` `).split(/\s+/).filter(Boolean);return i.length===0?`NA`:i.length>1?`${i[0][0]}${i[i.length-1][0]}`:i[0].slice(0,2)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`a-user-avatar`]],inputs:{user:[1,`user`]},decls:1,vars:1,consts:[[1,`border-base-100`,`bg-base-200`,`flex`,`h-[2.5em]`,`w-[2.5em]`,`items-center`,`justify-center`,`overflow-hidden`,`rounded-full`,`border-2`],[`initials`,``,1,`text-base-content`,`uppercase`,`opacity-60`],[`auth`,``,1,`flex`,`h-full`,`w-full`,`items-center`,`justify-center`,`object-cover`,`object-center`,3,`alt`,`source`]],template:function(t,i){t&1&&Dr(0,Zs,3,2,`div`,0),t&2&&Cr(i.is_valid()?0:-1)},dependencies:[_t],encapsulation:2})}}return n})();function Js(n,o){if(n&1&&(Ar(0,`mat-option`,8),Ca$1(1),Rr()),n&2){let e=o.$implicit;Ku(`value`,e.display_name||e.name),Ut(),To(` `,e.display_name||e.name,` `)}}function el(n,o){if(n&1&&(Ar(0,`mat-option`,8),Ca$1(1),Rr()),n&2){let e=o.$implicit;Ku(`value`,e?.name||e),Ut(),To(` `,e.name||e,` `)}}function tl(n,o){if(n&1&&(Ar(0,`div`,5)(1,`label`),Ca$1(2),BD(3,`translate`),Rr(),Ar(4,`mat-form-field`,6)(5,`mat-select`,7),BD(6,`translate`),Z8(7,el,2,2,`mat-option`,8,K8),Rr(),y5(),Rr()()),n&2){let e=Vi$1();Ut(2),g1(s6(3,3,`COMMON.SUPPORT_TYPE`)),Ut(3),Ku(`placeholder`,s6(6,5,`COMMON.SUPPORT_TYPE`))(`formField`,e.form.issue_type),v5(),Ut(2),Q8(e.support_request_types())}}function il(n,o){n&1&&(Ar(0,`mat-error`,11),Ca$1(1),BD(2,`translate`),Rr()),n&2&&(Ut(),To(` `,s6(2,1,`COMMON.DESCRIPTION_REQUIRED`),` `))}function nl(n,o){if(n&1&&(Ar(0,`div`,12)(1,`label`,10),Ca$1(2),BD(3,`translate`),Rr(),So(4,`image-list-field`,14),y5(),Rr()),n&2){let e=Vi$1();Ut(2),g1(s6(3,2,`COMMON.IMAGES`)),Ut(2),Ku(`formField`,e.form.images),v5()}}var ca=(()=>{class n{constructor(){this._dialog_ref=g(tT),this._org=g(Yb),this._settings=g(ks$1),this._support_email=this._settings.signal(`support_email`,`support@place.tech`),this._support_issue_types=this._settings.signal(`support_issue_types`,[]),this._allow_images=this._settings.signal(`allow_support_ticket_images`,!1),this.loading=N(!1),this.model=N({name:``,email:``,location:``,description:``,issue_type:``,images:[]}),this.form=xa$1(this.model,e=>{Fs$1(e.name),Fs$1(e.email),Fs$1(e.description)}),this.desc_error=N(!1),this.support_email=this._support_email,this.support_request_types=this._support_issue_types,this.allow_images=this._allow_images,this.buildings=this._org.building_list}ngOnInit(){let e=Yi$1();e&&this.model.update(t=>m(l({},t),{name:e.name,email:e.email})),this._org.building&&this.model.update(t=>m(l({},t),{location:this._org.building.display_name||this._org.building.name}))}async submit(){if(this.loading.set(!0),this.form().markAsTouched(),this._updateDescError(),this.form().valid()){let e=this._org.module(`smtp`,`Mailer`);if(!e)return IB(Zn$1(`COMMON.SUPPORT_NO_MAILER`));let{name:t,email:i,location:a,description:d,images:x,issue_type:R}=this.model(),Y=this.support_request_types().find(we=>we.name===R)?.email||this.support_email(),oe=Zn$1(`COMMON.SUPPORT_MAIL_HEADER`,{issue_type:R?` - `+R:``});await e.execute(`send_mail`,[Y,oe,`${t}
${i}

${a}

${d.replace(/<[^>]+>/g,``)}

${x.join(`
`)}`,`<p>${t}</p><p>${i}</p><p>${a}</p><p>${d}</p>${x.join(`<br>`)}`,[],[],[],[],null,`${i}`]),this._dialog_ref.close(),this.loading.set(!1),pS(Zn$1(`COMMON.SUPPORT_SUCCESS`))}}_updateDescError(){this.desc_error.set(this.form.description().invalid()&&this.form.description().touched())}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`support-ticket-modal`]],decls:51,vars:45,consts:[[3,`confirm`,`heading`,`loading`,`confirm_text`],[1,`flex`,`flex-wrap`,`items-center`,`sm:space-x-2`],[1,`flex`,`flex-1`,`flex-col`],[`appearance`,`outline`],[`matInput`,``,3,`placeholder`,`formField`],[1,`flex`,`flex-col`],[`appearance`,`outline`,1,`w-full`],[3,`placeholder`,`formField`],[3,`value`],[1,``],[1,`mb-4`],[1,`my-2`,`text-xs`],[1,`pt-4`],[1,`mb-2`,`text-center`,`text-xs`,`italic`],[3,`formField`]],template:function(t,i){t&1&&(Ar(0,`fullscreen-modal-shell`,0),BD(1,`translate`),Bt(`confirm`,function(){return i.submit()}),Ar(2,`form`)(3,`div`,1)(4,`div`,2)(5,`label`),Ca$1(6),BD(7,`translate`),Ar(8,`span`),Ca$1(9,`*`),Rr()(),Ar(10,`mat-form-field`,3),So(11,`input`,4),BD(12,`translate`),y5(),Ar(13,`mat-error`),Ca$1(14),BD(15,`translate`),Rr()()(),Ar(16,`div`,2)(17,`label`),Ca$1(18),BD(19,`translate`),Ar(20,`span`),Ca$1(21,`*`),Rr()(),Ar(22,`mat-form-field`,3),So(23,`input`,4),BD(24,`translate`),y5(),Ar(25,`mat-error`),Ca$1(26),BD(27,`translate`),Rr()()()(),Ar(28,`div`,5)(29,`label`),Ca$1(30),BD(31,`translate`),Rr(),Ar(32,`mat-form-field`,6)(33,`mat-select`,7),BD(34,`translate`),Z8(35,Js,2,2,`mat-option`,8,K8),Rr(),y5(),Rr()(),Dr(37,tl,9,7,`div`,5),Ar(38,`div`,9)(39,`label`,10),Ca$1(40),BD(41,`translate`),Ar(42,`span`),Ca$1(43,`*`),Rr()(),So(44,`rich-text-input`,7),BD(45,`translate`),y5(),Dr(46,il,3,3,`mat-error`,11),Rr(),Dr(47,nl,5,4,`div`,12),Rr(),Ar(48,`div`,13),Ca$1(49),BD(50,`translate`),Rr()()),t&2&&(Ku(`heading`,`Raise a support ticket`)(`loading`,i.loading()?`true`:``)(`confirm_text`,s6(1,21,`COMMON.SUBMIT`)),Ut(6),g1(s6(7,23,`FORM.NAME`)),Ut(5),Ku(`placeholder`,s6(12,25,`FORM.NAME`))(`formField`,i.form.name),v5(),Ut(3),g1(s6(15,27,`FORM.NAME_REQUIRED`)),Ut(4),g1(s6(19,29,`FORM.EMAIL`)),Ut(5),Ku(`placeholder`,s6(24,31,`FORM.EMAIL`))(`formField`,i.form.email),v5(),Ut(3),g1(s6(27,33,`FORM.EMAIL_REQUIRED`)),Ut(4),g1(s6(31,35,`COMMON.LOCATION`)),Ut(3),Ku(`placeholder`,s6(34,37,`COMMON.LOCATION`))(`formField`,i.form.location),v5(),Ut(2),Q8(i.buildings()),Ut(2),Cr(i.support_request_types().length?37:-1),Ut(3),To(` `,s6(41,39,`COMMON.SUPPORT_DESCRIPTION`),` `),Ut(4),Ku(`placeholder`,s6(45,41,`COMMON.SUPPORT_DESCRIPTION`))(`formField`,i.form.description),v5(),Ut(2),Cr(i.desc_error()?46:-1),Ut(),Cr(i.allow_images()?47:-1),Ut(2),To(` `,s6(50,43,`COMMON.SUPPORT_MSG`),` `))},dependencies:[AF,Wt$1,qn$1,Yr$2,fd,pd,Rs$1,ut,gm,la,ra,$t,jt,hW,Z7e,yn,f],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%}
/*# sourceMappingURL=support-ticket-modal.component.css.map */`]})}}return n})();var ol=[`*`];var rl=(n,o)=>o.id;function al(n,o){if(n&1&&(Ar(0,`div`,4),Ca$1(1),BD(2,`date`),Rr()),n&2){let e=Vi$1();Ut(),To(` `,a6(2,1,e.active_time(),e.time_format()+` (z)`,e.tz()),` `)}}function sl(n,o){if(n&1&&(Ar(0,`div`,13),Ca$1(1),BD(2,`date`),Rr()),n&2){let e=Vi$1(2);Ut(),To(` `,a6(2,1,e.force_time(),e.time_format()+` (z)`,e.tz()),` `)}}function ll(n,o){n&1&&(Ar(0,`icon`,14),Ca$1(1,` done `),Rr())}function cl(n,o){if(n&1){let e=UD();Ar(0,`button`,9),Bt(`click`,function(){I_(e);let i=Vi$1();return A_(i.setValue(i.force_time().toString()))}),Ar(1,`div`,10)(2,`div`,11)(3,`div`,12),Ca$1(4),BD(5,`date`),Rr(),Dr(6,sl,3,5,`div`,13),Rr(),Dr(7,ll,2,0,`icon`,14),Rr()()}if(n&2){let e=Vi$1();Ku(`value`,e.force_time()),Ut(4),To(` `,HD(5,4,e.force_time(),e.time_format()),` `),Ut(2),Cr(e.timezone()&&e.tz()?6:-1),Ut(),Cr(e.active_time()===e.force_time()?7:-1)}}function dl(n,o){if(n&1&&(Ar(0,`div`,13),Ca$1(1),BD(2,`date`),Rr()),n&2){let e=Vi$1().$implicit,t=Vi$1();Ut(),To(` `,a6(2,1,e.date,t.time_format()+` (z)`,t.tz()),` `)}}function ml(n,o){n&1&&(Ar(0,`icon`,14),Ca$1(1,` done `),Rr())}function pl(n,o){if(n&1){let e=UD();Ar(0,`button`,9),Bt(`click`,function(){let i=I_(e).$implicit;return A_(Vi$1().setValue(i.id))}),Ar(1,`div`,10)(2,`div`,11)(3,`div`,12),Ca$1(4),BD(5,`date`),Rr(),Dr(6,dl,3,5,`div`,13),Rr(),Dr(7,ml,2,0,`icon`,14),Rr()()}if(n&2){let e=o.$implicit,t=Vi$1();Ku(`value`,e.id),Kt$1(`data-time`,e.id),Ut(4),_1(` `,HD(5,6,e.date,t.time_format()),` `,t.extra_info_fn()(e.date),` `),Ut(2),Cr(t.timezone()&&t.tz()?6:-1),Ut(),Cr(t.active_time()===e.date?7:-1)}}function ul(n,o){n&1&&(Ar(0,`div`,8),Ca$1(1,`No time options to select`),Rr())}function _l(n,o){n&1&&(Ar(0,`mat-error`),Tn$1(1),Rr())}function da(n){if(n==null||n===``)return null;let o=Number(n);return Number.isFinite(o)?o:null}var pa=(()=>{class n extends Gi$1{constructor(){super(...arguments),this.step=bs$1(15),this.disabled=qIe(void 0),this.no_past_times=bs$1(!0),this.use_24hr=bs$1(!1),this.force_time=bs$1(void 0),this.no_error=bs$1(void 0),this.extra_info_fn=bs$1(e=>``),this.from=bs$1(cn$1(Date.now()).valueOf()),this.range=bs$1(void 0),this._range=Ie(()=>{let e=this.range();if(!e)return;let t=da(e.start),i=da(e.end);if(!(t===null||i===null||i<=t))return{start:t,end:i}}),this.min_duration=bs$1(0),this.timezone=bs$1(``),this.date=N(new Date().valueOf()),this.time=N(ui(new Date,`HH:mm`)),this._time_options=N([]),this.show_select=N(!1),this.active_time=N(Date.now()),this.no_options=N(!1),this._menu_trigger=KIe(Gd),this.time_format=Ie(()=>this.use_24hr()?`HH : mm`:`h : mm a`),this._local_tz=L0e(Intl.DateTimeFormat().resolvedOptions().timeZone),this.tz=Ie(()=>{let e=this.timezone();if(!e)return``;let t=L0e(e);return t===this._local_tz?``:t})}ngOnInit(){this.show_select.set(!0),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions(),this.timeout(`hide`,()=>this.show_select.set(!1));let e=this.timezone()||void 0;this.active_time.set(this._time_options().find(t=>t.id===F0e(this.date(),e))?.date||this.active_time())}ngOnChanges(e){(e.no_past_times||e.step||e.from||e.range||e.min_duration)&&(this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions())}ngAfterViewInit(){let e=this._menu_trigger();e&&this.subscription(`menu_opened`,e.menuOpened.subscribe(()=>{this._scrollToSelectedTime()}))}_scrollToSelectedTime(){requestAnimationFrame(()=>{if(!this._menu_trigger()?.menu)return;let t=document.querySelector(`.mat-mdc-menu-panel`);if(!t)return;let i=this.timezone()||void 0,a=this.time()||F0e(new Date,i),d=t.querySelector(`[data-time="${a}"]`);if(!d&&this._time_options().length){let x=this._timeToMinutes(a),R=this._time_options()[0],Y=Infinity;for(let oe of this._time_options()){let we=this._timeToMinutes(oe.id),Qe=Math.abs(we-x);Qe<Y&&(Y=Qe,R=oe)}d=t.querySelector(`[data-time="${R.id}"]`)}if(d){if(typeof d.scrollIntoView!=`function`)return;d.scrollIntoView({block:`center`,behavior:`instant`})}})}_timeToMinutes(e){let[t,i]=e.split(`:`).map(Number);return t*60+i}time_options(){let e=this.timezone()||void 0,t=(this.time()||`00:00`).split(`:`),i=U0e(this.date(),+t[0],+t[1],e),{minutes:a}=oJ(i,e),d=F0e(i,e),x=[...this._time_options()];return a%this.step()!==0&&this._isWithinRange(i)&&!x.find(R=>R.id===d)&&(x.push({date:i,id:d}),x.sort((R,Y)=>`${R.id}`.localeCompare(`${Y.id}`))),x}setValue(e){this.time.set(e);let t=this.timezone()||void 0;if(this._onChange){let x=(this.time()||`00:00`).split(`:`),R=U0e(this.date(),+x[0],+x[1],t);q0e(),this._onChange(R)}let i=this.force_time()||this.time(),a=(typeof i==`string`?i:F0e(i,t)).split(`:`),d=U0e(this.date(),+a[0],+a[1],t);this.active_time.set(this._time_options().find(x=>x.id===(typeof i==`string`?i:F0e(i,t)))?.date||d)}writeValue(e){this.date.set(e||this.date());let t=this.timezone()||void 0,i=hl$1(this.date());i=ml$1(i,{nearestTo:5}),this.time.set(F0e(i,t)),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions();let a=this.force_time(),d=a?F0e(a,t):this.time();this.active_time.set(this._time_options().find(x=>x.id===d)?.date||i.valueOf())}setDisabledState(e){this.disabled.set(e),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times()||e,this.step())),this._updateNoOptions()}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouch=e}_updateNoOptions(){this.no_options.set(!this.disabled()&&(!this._time_options()||this._time_options().length===0)&&!this.force_time())}generateAvailableTimes(e,t,i=15){let a=t?this.from():Math.max(this.from(),Date.now()),d=[],x=this._range(),R=this.timezone()||void 0,Y=R?xo(e,R):cn$1(e).valueOf(),oe=R?Po(e,R):li$1(e).valueOf(),we=this.min_duration()||0,Qe=x?x.start*60:void 0,Xt=x?x.end*60:void 0,Xe=Xt!=null&&we>0?Xt-we:Xt,Yt=Math.max(Y,a,Qe!=null?Y+Qe*60*1e3:Y),F=Math.min(oe,Xe!=null?Y+Xe*60*1e3:oe);if(Yt>F)return d;let K=this._roundUpToStep(Yt,i),Ne=this._roundDownToStep(F,i);for(;!ka$1(K,Ne);)d.push({date:K.valueOf(),id:F0e(K,R)}),K=et(K,i);return d}_isWithinRange(e){if(xr(e,this.from()))return!1;let t=this._range();if(!t)return!0;let i=t.start*60,a=t.end*60,d=this.min_duration()||0,x=d>0?a-d:a,{hours:Y,minutes:oe}=oJ(e,this.timezone()||void 0),we=Y*60+oe;return!(we<i||we>x)}_roundUpToStep(e,t){let i=ml$1(e,{nearestTo:t});return xr(i,e)&&(i=et(i,t)),hl$1(i)}_roundDownToStep(e,t){let i=ml$1(e,{nearestTo:t});return ka$1(i,e)&&(i=et(i,-t)),hl$1(i)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=vt(n)))(i||n)}})()}static{this.ɵcmp=Ue({type:n,selectors:[[`a-time-field`],[`time-field`]],viewQuery:function(t,i){t&1&&r1(i._menu_trigger,Gd,5),t&2&&u4()},inputs:{step:[1,`step`],disabled:[1,`disabled`],no_past_times:[1,`no_past_times`],use_24hr:[1,`use_24hr`],force_time:[1,`force_time`],no_error:[1,`no_error`],extra_info_fn:[1,`extra_info_fn`],from:[1,`from`],range:[1,`range`],min_duration:[1,`min_duration`],timezone:[1,`timezone`]},outputs:{disabled:`disabledChange`},features:[Ht$1([{provide:qc,useExisting:Pt(()=>n),multi:!0}]),Ce,Rt],ngContentSelectors:ol,decls:15,vars:12,consts:[[`menu`,`matMenu`],[`type`,`button`,`time-field`,``,`matRipple`,``,1,`border-neutral`,`flex`,`h-12`,`w-full`,`items-center`,`justify-between`,`rounded-sm`,`border`,`px-2`,3,`disabled`,`matMenuTriggerFor`],[1,`flex`,`w-1/2`,`flex-1`,`flex-col`,`px-2`,`text-left`,`leading-tight`],[1,`truncate`],[1,`truncate`,`text-xs`,`opacity-30`],[1,`text-2xl`],[1,`max-h-60`,`min-w-[18rem]`],[`type`,`button`,`mat-menu-item`,``,1,`text-left`,3,`value`],[`mat-menu-item`,``,`disabled`,``],[`type`,`button`,`mat-menu-item`,``,1,`text-left`,3,`click`,`value`],[1,`flex`,`items-center`,`justify-between`],[1,`flex`,`flex-col`,`leading-tight`],[1,``],[1,`text-xs`,`opacity-30`],[1,`ml-2`,`text-2xl`]],template:function(t,i){if(t&1&&(ei(),Ar(0,`button`,1)(1,`div`,2)(2,`div`,3),Ca$1(3),BD(4,`date`),Rr(),Dr(5,al,3,5,`div`,4),Rr(),Ar(6,`icon`,5),Ca$1(7,`arrow_drop_down`),Rr()(),Ar(8,`mat-menu`,6,0),Dr(10,cl,8,7,`button`,7),Z8(11,pl,8,9,`button`,7,rl,!1,ul,2,0,`div`,8),Rr(),Dr(14,_l,2,0,`mat-error`)),t&2){let a=d4(9);gt(`opacity-30`,i.disabled()||i.no_options()),Ku(`disabled`,i.disabled()||i.no_options())(`matMenuTriggerFor`,a),Ut(3),To(` `,HD(4,9,i.active_time(),i.time_format()),` `),Ut(2),Cr(i.timezone()&&i.tz()?5:-1),Ut(5),Cr(i.force_time()?10:-1),Ut(),Q8(i.time_options()),Ut(3),Cr(i.no_error()?-1:14)}},dependencies:[AF,Ud,It,Ni,Gd,Wt$1,Yr$2,VXe,x9],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%}
/*# sourceMappingURL=time-field.component.css.map */`]})}}return n})();function hl(n,o){n&1&&(Ar(0,`button`,2)(1,`icon`),Ca$1(2,`close`),Rr()())}function fl(n,o){if(n&1){let e=UD();Ar(0,`div`,7)(1,`div`,11),Ca$1(2),BD(3,`date`),Rr(),Ar(4,`mat-checkbox`,12),Bt(`ngModelChange`,function(i){let a=I_(e).$implicit,d=Vi$1(2);return d.setWeekdayEnabled(a.getDay(),i),A_(i&&d.initialiseDay(a.getDay()))}),Rr(),y5(),Rr()}if(n&2){let e=o.$implicit,t=Vi$1(2);Ut(2),To(` `,HD(3,2,e,`EEE`),` `),Ut(2),Ku(`ngModel`,t.weekdays_enabled()[e.getDay()]),v5()}}function gl(n,o){if(n&1&&(Ar(0,`mat-option`,20),Ca$1(1),Rr()),n&2){let e=o.$implicit;Ku(`value`,e.id),Ut(),To(` `,e.name,` `)}}function bl(n,o){if(n&1){let e=UD();Ar(0,`button`,23),Bt(`click`,function(){I_(e);let i=Vi$1().$index,a=Vi$1(2).$implicit,d=Vi$1(3);return A_(d.addBlock(d.settings()[a.getDay()],i))}),Ar(1,`icon`),Ca$1(2,`add`),Rr()()}}function vl(n,o){if(n&1){let e=UD();Ar(0,`button`,24),Bt(`click`,function(){I_(e);let i=Vi$1().$index,a=Vi$1(2).$implicit,d=Vi$1(3);return A_(d.removeBlock(d.settings()[a.getDay()],i))}),Ar(1,`icon`),Ca$1(2,`delete`),Rr()()}}function xl(n,o){if(n&1){let e=UD();Ar(0,`div`,16)(1,`a-time-field`,18),Bt(`ngModelChange`,function(i){let a=I_(e).$implicit,d=Vi$1(2).$implicit;return A_(Vi$1(3).setStartTime(a,d.getDay(),i))}),Rr(),y5(),Ar(2,`a-time-field`,18),Bt(`ngModelChange`,function(i){let a=I_(e).$implicit,d=Vi$1(2).$implicit;return A_(Vi$1(3).setEndTime(a,d.getDay(),i))}),Rr(),y5(),Ar(3,`mat-form-field`,19)(4,`mat-select`,12),v1(`ngModelChange`,function(i){let a=I_(e).$implicit;return V4(a.location,i)||(a.location=i),A_(i)}),Z8(5,gl,2,2,`mat-option`,20,K8),Rr(),y5(),Rr(),Dr(7,bl,3,0,`button`,21),Dr(8,vl,3,0,`button`,22),Rr()}if(n&2){let e=o.$implicit,t=o.$index,i=Vi$1(2).$implicit,a=Vi$1(3);Ut(),Ku(`ngModel`,a.timeFrom(e.start_time))(`from`,a.timeFrom((t>0?a.settings()[i.getDay()].blocks[t-1]?.end_time:0)||0))(`no_error`,!0),v5(),Ut(),Ku(`ngModel`,a.timeFrom(e.end_time))(`from`,a.timeFrom(e.start_time+.25))(`no_error`,!0),v5(),Ut(2),S1(`ngModel`,e.location),v5(),Ut(),Q8(a.options()),Ut(2),Cr(t===0?7:-1),Ut(),Cr(t!==0?8:-1)}}function kl(n,o){if(n&1&&(Ar(0,`div`,14)(1,`div`,15),Z8(2,xl,9,9,`div`,16,K8),Rr(),Ar(4,`h3`,17),Ca$1(5),BD(6,`date`),Rr()()),n&2){let e=Vi$1().$implicit,t=Vi$1(3);Ut(2),Q8(t.settings()[e.getDay()].blocks),Ut(3),To(` `,HD(6,1,e,`EEEE`),` `)}}function yl(n,o){if(n&1&&Dr(0,kl,7,4,`div`,14),n&2){let e=o.$implicit;Cr(Vi$1(3).weekdays_enabled()[e.getDay()]?0:-1)}}function Cl(n,o){if(n&1&&(Ar(0,`div`,9),Z8(1,yl,1,1,null,null,K8),Ar(3,`h3`,13),Ca$1(4),BD(5,`translate`),Rr()()),n&2){let e=Vi$1(2);Ut(),Q8(e.days),Ut(3),To(` `,s6(5,1,`COMMON.WORK_HOURS`),` `)}}function Sl(n,o){n&1&&(Ar(0,`div`,10),So(1,`img`,25),Ar(2,`p`,26),Ca$1(3),BD(4,`translate`),Rr()()),n&2&&(Ut(3),To(` `,s6(4,1,`COMMON.WORK_SETTINGS_EMPTY`),` `))}function Ml(n,o){if(n&1&&(Ar(0,`main`,3)(1,`div`,6),Z8(2,fl,5,5,`div`,7,K8),Ar(4,`h3`,8),Ca$1(5),BD(6,`translate`),Rr()(),Dr(7,Cl,6,3,`div`,9)(8,Sl,5,3,`div`,10),Rr()),n&2){let e=Vi$1();Ut(2),Q8(e.days),Ut(3),To(` `,s6(6,2,`COMMON.WORK_DAYS`),` `),Ut(2),Cr(e.has_working_days()?7:8)}}function wl(n,o){n&1&&(Ar(0,`div`,4),So(1,`mat-spinner`,27),Ar(2,`p`,26),Ca$1(3),BD(4,`translate`),Rr()()),n&2&&(Ut(),Ku(`diameter`,32),Ut(2),To(` `,s6(4,2,`COMMON.WORK_SETTINGS_SAVE`),` `))}function Tl(n,o){if(n&1){let e=UD();Ar(0,`footer`,5)(1,`button`,28),Bt(`click`,function(){I_(e);return A_(Vi$1().saveChanges())}),Ca$1(2),BD(3,`translate`),Rr()()}n&2&&(Ut(2),To(` `,s6(3,1,`COMMON.SAVE`),` `))}var wn=(()=>{class n{constructor(){this._data=g(Zce),this._dialog_ref=g(tT),this.options=N([]),this.option=N(``),this.settings=N([]),this.weekdays_enabled=N({}),this.changed=N(!1),this.loading=N(!1),this.available_weekdays=N([]),this.days=new Array(7).fill(0).map((e,t)=>pn$1(Ns$1(pn$1(Date.now(),30)),t)),this.has_working_days=Ie(()=>{let e=this.weekdays_enabled();return Object.keys(e).some(t=>e[t])}),this.option_name=Ie(()=>this.options().find(e=>e.id===this.option())?.name||``),this.now=Ie(()=>hl$1(Date.now()).getTime())}ngOnInit(){let e=Yi$1(),i=[...((this._data?.local?this._data.preferences:e.work_preferences)||[]).map(x=>m(l({},x),{blocks:[...x?.blocks||[]]}))],a={};for(let x of i)x.blocks.length&&(a[x.day_of_week]=!0);this.settings.set(i),this.weekdays_enabled.set(a);let d=[{id:`wfo`,name:Zn$1(`COMMON.WORK_OFFICE`),icon:`business`},{id:`wfh`,name:Zn$1(`COMMON.WORK_HOME`),icon:`home`},{id:`aol`,name:Zn$1(`COMMON.WORK_LEAVE`),icon:`event_busy`}];this.options.set(d),this.option.set(d[0].id)}timeFrom(e){return hl$1(di(pn$1(new Date,1),{hours:Math.floor(e),minutes:e*60%60})).getTime()}fromTime(e){let t=new Date(e);return t.getHours()+t.getMinutes()/60}initialiseDay(e){let t=this.settings();t[e]||(t[e]={day_of_week:e,blocks:[]}),t[e].blocks||(t[e].blocks=[]),t[e].blocks.length===0&&this.addBlock(t[e],0),this.settings.set([...t])}addBlock(e,t){e.blocks.splice(t+1,0,{start_time:9,end_time:17,location:`wfo`}),this.cleanupBlocks(e),this.settings.update(i=>[...i])}removeBlock(e,t){e.blocks.length<=1||(e.blocks.splice(t,1),this.settings.update(i=>[...i]))}setEndTime(e,t,i){setTimeout(()=>{e.end_time=this.fromTime(i),this.cleanupBlocks(this.settings()[t]),this.settings.update(a=>[...a])},50)}setStartTime(e,t,i){setTimeout(()=>{e.start_time=this.fromTime(i),this.cleanupBlocks(this.settings()[t]),this.settings.update(a=>[...a])},50)}cleanupBlocks(e){if(e?.blocks?.length)for(let t=0;t<e.blocks.length;t++){let i=e.blocks[t];t>0&&i.start_time<e.blocks[t-1].end_time&&(i.start_time=e.blocks[t-1].end_time),i.end_time<=i.start_time&&(i.end_time=i.start_time+1)}}async saveChanges(e=!0){this.loading.set(!0),this._dialog_ref.disableClose=!0;let t=new Array(7).fill(0).map((i,a)=>({day_of_week:a,blocks:[]}));for(let i of this.days){let a=i.getDay();this.weekdays_enabled()[a]&&(t[a]={day_of_week:a,blocks:this.settings()[a].blocks})}if(this._data?.local)this.loading.set(!1),this._dialog_ref.disableClose=!1;else try{let i=await OR(`current`);await vV(i.id,m(l({},i),{groups:i.groups.filter(a=>!a.startsWith(`placeos_`)),work_preferences:t}))}catch(i){throw IB(`Unable to save user work preferences.`),i}finally{this.loading.set(!1),this._dialog_ref.disableClose=!1}e&&(this._data?.local||WB(),this._dialog_ref.close(t))}setWeekdayEnabled(e,t){this.weekdays_enabled.update(i=>m(l({},i),{[e]:t}))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`wfh-settings-modal`]],decls:8,vars:6,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``,1,`bg-base-200`],[1,`relative`,`flex`,`max-h-[calc(100vh-9rem)]`,`w-160`,`max-w-full`,`flex-col`,`space-y-2`,`overflow-x-hidden`,`overflow-y-auto`,`rounded-sm`,`px-2`,`py-4`,`sm:max-h-[65vh]`,`sm:p-4`],[`loading`,``,1,`bg-base-100`,`relative`,`flex`,`h-72`,`w-[24rem]`,`flex-col`,`items-center`,`justify-center`,`space-y-2`,`overflow-hidden`,`rounded-sm`,`text-center`],[1,`border-base-200`,`flex`,`justify-end`,`border-t`,`px-4`,`py-2`],[1,`border-base-300`,`relative`,`mb-4`,`flex`,`w-full`,`items-center`,`justify-between`,`space-x-2`,`rounded-sm`,`border`,`p-2`],[1,`flex`,`flex-1`,`flex-col`,`items-center`,`pt-2`],[1,`bg-base-100`,`absolute`,`top-0`,`left-2`,`-translate-y-1/2`,`px-2`],[1,`border-base-300`,`relative`,`flex`,`w-full`,`flex-col`,`items-center`,`justify-between`,`space-y-4`,`rounded-sm`,`border`,`px-2`,`pt-6`,`pb-4`,`sm:px-4`],[1,`flex`,`flex-col`,`items-center`,`justify-center`,`space-y-4`,`px-8`,`py-16`],[1,`text-xs`,`font-bold`,`uppercase`],[3,`ngModelChange`,`ngModel`],[1,`bg-base-100`,`absolute`,`top-0`,`left-2`,`m-0!`,`-translate-y-1/2`,`px-2`],[1,`border-base-200`,`relative`,`flex`,`w-full`,`items-center`,`justify-between`,`space-x-2`,`rounded-sm`,`border`,`p-2`],[1,`w-1/2`,`flex-1`,`space-y-2`,`pt-2`],[1,`flex`,`items-center`,`space-x-2`],[1,`border-base-200`,`bg-base-100`,`bg-opacity-50`,`absolute`,`top-0`,`left-2`,`-translate-y-1/2`,`rounded-sm`,`border`,`px-2`,`text-sm`,`font-medium`],[1,`w-1/4`,`flex-1`,3,`ngModelChange`,`ngModel`,`from`,`no_error`],[`appearance`,`outline`,1,`no-subscript`,`w-1/4`,`flex-1`],[3,`value`],[`icon`,``,`matRipple`,``,1,`border-base-400`,`h-12`,`w-12`,`rounded-sm`,`border`],[`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`],[`icon`,``,`matRipple`,``,1,`border-base-400`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`],[`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`],[`src`,`assets/icons/no-results.svg`,1,`m-auto`],[1,`opacity-30`],[3,`diameter`],[`btn`,``,`matRipple`,``,1,`w-48`,3,`click`]],template:function(t,i){t&1&&(Ar(0,`header`,0)(1,`h2`,1),Ca$1(2),BD(3,`translate`),Rr(),Dr(4,hl,3,0,`button`,2),Rr(),Dr(5,Ml,9,4,`main`,3)(6,wl,5,4,`div`,4),Dr(7,Tl,4,3,`footer`,5)),t&2&&(Ut(2),To(` `,s6(3,4,`COMMON.WORK_LOCATION_SETTINGS`),` `),Ut(2),Cr(i.loading()?-1:4),Ut(),Cr(i.loading()?6:5),Ut(2),Cr(i.loading()?-1:7))},dependencies:[AF,Z7e,K7e,gm,Dw,Wt$1,qn$1,$t,jt,hW,pa,kn,ri,QCe,zCe,mZ,VXe,ut,qt,x9,f],encapsulation:2})}}return n})();var El=[`knob`];var Il=[`valueIndicatorContainer`];function Nl(n,o){if(n&1&&(Ar(0,`div`,2,1)(2,`div`,5)(3,`span`,6),Ca$1(4),Rr()()()),n&2){let e=Vi$1();Ut(4),g1(e.valueIndicatorText)}}var Ol=[`trackActive`];var Rl=[`*`];function Dl(n,o){if(n&1&&So(0,`div`),n&2){let e=o.$implicit,t=o.$index,i=Vi$1(3);Fp(e===0?`mdc-slider__tick-mark--active`:`mdc-slider__tick-mark--inactive`),CE(`transform`,i._calcTickMarkTransform(t))}}function Al(n,o){if(n&1&&Z8(0,Dl,1,4,`div`,8,q8),n&2)Q8(Vi$1(2)._tickMarks)}function Pl(n,o){if(n&1&&(Ar(0,`div`,6,1),Dr(2,Al,2,0),Rr()),n&2){let e=Vi$1();Ut(2),Cr(e._cachedWidth?2:-1)}}function Fl(n,o){if(n&1&&So(0,`mat-slider-visual-thumb`,7),n&2){let e=Vi$1();Ku(`discrete`,e.discrete)(`thumbPosition`,1)(`valueIndicatorText`,e.startValueIndicatorText)}}var O=(function(n){return n[n.START=1]=`START`,n[n.END=2]=`END`,n})(O||{});var Qt=(function(n){return n[n.ACTIVE=0]=`ACTIVE`,n[n.INACTIVE=1]=`INACTIVE`,n})(Qt||{});var io=new b(`_MatSlider`);var ua=new b(`_MatSliderThumb`);var Vl=new b(`_MatSliderRangeThumb`);var _a=new b(`_MatSliderVisualThumb`);var Ll=(()=>{class n{_cdr=g(Zt);_ngZone=g(ee);_slider=g(io);_renderer=g(it);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=g(ue).nativeElement;_platform=g(tt);ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let t=this._sliderInputEl,i=this._renderer;this._listenerCleanups=[i.listen(t,`pointermove`,this._onPointerMove),i.listen(t,`pointerdown`,this._onDragStart),i.listen(t,`pointerup`,this._onDragEnd),i.listen(t,`pointerleave`,this._onMouseLeave),i.listen(t,`focus`,this._onFocus),i.listen(t,`blur`,this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e())}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let t=this._hostElement.getBoundingClientRect(),i=this._slider._isCursorOnSliderThumb(e,t);this._isHovered=i,i?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add(`mdc-slider__thumb--focused`)};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove(`mdc-slider__thumb--focused`)};_onDragStart=e=>{e.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add(`mat-mdc-slider-hover-ripple`))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add(`mat-mdc-slider-focus-ripple`))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add(`mat-mdc-slider-active-ripple`))}_isShowingRipple(e){return e?.state===Ur$1.FADING_IN||e?.state===Ur$1.VISIBLE}_showRipple(e,t){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===O.START?O.END:O.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!t)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:!0,persistent:!0})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let t=this._getSibling();t._isShowingAnyRipple()||(this._hideValueIndicator(),t._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add(`mdc-slider__thumb--with-indicator`)}_hideValueIndicator(){this._hostElement.classList.remove(`mdc-slider__thumb--with-indicator`)}_getSibling(){return this._slider._getThumb(this.thumbPosition===O.START?O.END:O.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static ɵfac=function(t){return new(t||n)};static ɵcmp=Ue({type:n,selectors:[[`mat-slider-visual-thumb`]],viewQuery:function(t,i){if(t&1&&bo(Dw,5)(El,5)(Il,5),t&2){let a;ti(a=ni())&&(i._ripple=a.first),ti(a=ni())&&(i._knob=a.first),ti(a=ni())&&(i._valueIndicatorContainer=a.first)}},hostAttrs:[1,`mdc-slider__thumb`,`mat-mdc-slider-visual-thumb`],inputs:{discrete:`discrete`,thumbPosition:`thumbPosition`,valueIndicatorText:`valueIndicatorText`},features:[Ht$1([{provide:_a,useExisting:n}])],decls:4,vars:2,consts:[[`knob`,``],[`valueIndicatorContainer`,``],[1,`mdc-slider__value-indicator-container`],[1,`mdc-slider__thumb-knob`],[`matRipple`,``,1,`mat-focus-indicator`,3,`matRippleDisabled`],[1,`mdc-slider__value-indicator`],[1,`mdc-slider__value-indicator-text`]],template:function(t,i){t&1&&(Dr(0,Nl,5,1,`div`,2),So(1,`div`,3,0)(3,`div`,4)),t&2&&(Cr(i.discrete?0:-1),Ut(3),Ku(`matRippleDisabled`,!0))},dependencies:[Dw],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
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
`],encapsulation:2})}return n})();var Tn=(()=>{class n{_ngZone=g(ee);_cdr=g(Zt);_elementRef=g(ue);_dir=g(Bs$1,{optional:!0});_globalRippleOptions=g(Rv,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let t=this._getInput(O.END),i=this._getInput(O.START);t&&(t.disabled=this._disabled),i&&(i.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(e){let t=e==null||isNaN(e)?this._min:e;this._min!==t&&this._updateMin(t)}_min=0;color;disableRipple=!1;_updateMin(e){let t=this._min;this._min=e,this._isRange?this._updateMinRange({old:t,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange()}_updateMinRange(e){let t=this._getInput(O.END),i=this._getInput(O.START),a=t.value,d=i.value;i.min=e.new,t.min=Math.max(e.new,i.value),i.max=Math.min(t.max,t.value),i._updateWidthInactive(),t._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(t,i):this._onTranslateXChangeBySideEffect(i,t),a!==t.value&&this._onValueChange(t),d!==i.value&&this._onValueChange(i)}_updateMinNonRange(e){let t=this._getInput(O.END);if(t){let i=t.value;t.min=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t)}}get max(){return this._max}set max(e){let t=e==null||isNaN(e)?this._max:e;this._max!==t&&this._updateMax(t)}_max=100;_updateMax(e){let t=this._max;this._max=e,this._isRange?this._updateMaxRange({old:t,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange()}_updateMaxRange(e){let t=this._getInput(O.END),i=this._getInput(O.START),a=t.value,d=i.value;t.max=e.new,i.max=Math.min(e.new,t.value),t.min=i.value,t._updateWidthInactive(),i._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(i,t):this._onTranslateXChangeBySideEffect(t,i),a!==t.value&&this._onValueChange(t),d!==i.value&&this._onValueChange(i)}_updateMaxNonRange(e){let t=this._getInput(O.END);if(t){let i=t.value;t.max=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t)}}get step(){return this._step}set step(e){let t=isNaN(e)?this._step:e;this._step!==t&&this._updateStep(t)}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let e=this._getInput(O.END),t=this._getInput(O.START),i=e.value,a=t.value,d=t.value;e.min=this._min,t.max=this._max,e.step=this._step,t.step=this._step,this._platform.SAFARI&&(e.value=e.value,t.value=t.value),e.min=Math.max(this._min,t.value),t.max=Math.min(this._max,e.value),t._updateWidthInactive(),e._updateWidthInactive(),e.value<d?this._onTranslateXChangeBySideEffect(t,e):this._onTranslateXChangeBySideEffect(e,t),i!==e.value&&this._onValueChange(e),a!==t.value&&this._onValueChange(t)}_updateStepNonRange(){let e=this._getInput(O.END);if(e){let t=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),t!==e.value&&this._onValueChange(e)}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=gr();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText=``;endValueIndicatorText=``;_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=Ie(()=>this._dir?.valueSignal()===`rtl`);_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=g(tt);constructor(){g(mr).load(wv);let e=this._isRtl();JIe(()=>{let t=this._isRtl();t!==e&&(e=t,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(O.END),t=this._getInput(O.START);this._isRange=!!e&&!!t,this._cdr.detectChanges();let i=this._getThumb(O.END);this._rippleRadius=i._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,t):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=!0,e._updateThumbUIByValue()}_initUIRange(e,t){e.initProps(),e.initUI(),t.initProps(),t.initUI(),e._updateMinMax(),t._updateMinMax(),e._updateStaticStyles(),t._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,e._updateThumbUIByValue(),t._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let e=this._getInput(O.END),t=this._getInput(O.START);e._setIsLeftThumb(),t._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),t.translateX=t._calcTranslateXByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateWidthInactive(),t._updateWidthInactive(),e._updateThumbUIByValue(),t._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(O.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>`u`||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(O.START)._isActive||this._getThumb(O.END)._isActive}_getValue(e=O.END){let t=this._getInput(e);return t?t.value:this.min}_skipUpdate(){return!!(this._getInput(O.START)?._skipUIUpdate||this._getInput(O.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(e){let t=this._trackActive.nativeElement.style;t.left=e.left,t.right=e.right,t.transformOrigin=e.transformOrigin,t.transform=e.transform}_calcTickMarkTransform(e){let t=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-t:t}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e))}_onTranslateXChangeBySideEffect(e,t){this._hasViewInitialized&&(e._updateThumbUIByValue(),t._updateThumbUIByValue())}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(O.END),t=this._getInput(O.START);e._updateThumbUIByValue(),t._updateThumbUIByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateMinMax(),t._updateMinMax(),e._updateWidthInactive(),t._updateWidthInactive()}else{let e=this._getInput(O.END);e&&e._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let e=this._getInput(O.START),t=this._getInput(O.END);return!e||!t?!1:t.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let t=e.getSibling(),i=this._getThumb(e.thumbPosition);this._getThumb(t.thumbPosition)._hostElement.classList.remove(`mdc-slider__thumb--top`),i._hostElement.classList.toggle(`mdc-slider__thumb--top`,this._thumbsOverlap)}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e))}_updateThumbUI(e){if(this._skipUpdate())return;let t=this._getThumb(e.thumbPosition===O.END?O.END:O.START);t._hostElement.style.transform=`translateX(${e.translateX}px)`}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let t=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(t):e._hostElement.setAttribute(`aria-valuetext`,t),this.discrete){e.thumbPosition===O.START?this.startValueIndicatorText=t:this.endValueIndicatorText=t;let i=this._getThumb(e.thumbPosition);t.length<3?i._hostElement.classList.add(`mdc-slider__thumb--short-value`):i._hostElement.classList.remove(`mdc-slider__thumb--short-value`)}}_updateValueIndicatorUIs(){let e=this._getInput(O.END),t=this._getInput(O.START);e&&this._updateValueIndicatorUI(e),t&&this._updateValueIndicatorUI(t)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,i=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*i}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e))}_updateTrackUIRange(e){let t=e.getSibling();if(!t||!this._cachedWidth)return;let i=Math.abs(t.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:`auto`,right:`${this._cachedWidth-t.translateX}px`,transformOrigin:`right`,transform:`scaleX(${i})`}):this._setTrackActiveStyles({left:`${t.translateX}px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${i})`})}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:`auto`,right:`0px`,transformOrigin:`right`,transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:`0px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${e.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e)}_updateTickMarkUINonRange(e){let t=this._getValue(),i=Math.max(Math.round((t-this.min)/e),0)+1,a=Math.max(Math.round((this.max-t)/e),0)-1;this._isRtl()?i++:a++,this._tickMarks=Array(i).fill(Qt.ACTIVE).concat(Array(a).fill(Qt.INACTIVE))}_updateTickMarkUIRange(e){let t=this._getValue(),i=this._getValue(O.START),a=Math.max(Math.round((i-this.min)/e),0),d=Math.max(Math.round((t-i)/e)+1,0),x=Math.max(Math.round((this.max-t)/e),0);this._tickMarks=Array(a).fill(Qt.INACTIVE).concat(Array(d).fill(Qt.ACTIVE),Array(x).fill(Qt.INACTIVE))}_getInput(e){if(e===O.END&&this._input)return this._input;if(this._inputs?.length)return e===O.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===O.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle(`mat-mdc-slider-with-animation`,this._hasAnimation)}_isCursorOnSliderThumb(e,t){let i=t.width/2,a=t.x+i,d=t.y+i,x=e.clientX-a,R=e.clientY-d;return Math.pow(x,2)+Math.pow(R,2)<Math.pow(i,2)}static ɵfac=function(t){return new(t||n)};static ɵcmp=Ue({type:n,selectors:[[`mat-slider`]],contentQueries:function(t,i,a){if(t&1&&DE(a,ua,5)(a,Vl,4),t&2){let d;ti(d=ni())&&(i._input=d.first),ti(d=ni())&&(i._inputs=d)}},viewQuery:function(t,i){if(t&1&&bo(Ol,5)(_a,5),t&2){let a;ti(a=ni())&&(i._trackActive=a.first),ti(a=ni())&&(i._thumbs=a)}},hostAttrs:[1,`mat-mdc-slider`,`mdc-slider`],hostVars:12,hostBindings:function(t,i){t&2&&(Fp(`mat-`+(i.color||`primary`)),gt(`mdc-slider--range`,i._isRange)(`mdc-slider--disabled`,i.disabled)(`mdc-slider--discrete`,i.discrete)(`mdc-slider--tick-marks`,i.showTickMarks)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{disabled:[2,`disabled`,`disabled`,qe],discrete:[2,`discrete`,`discrete`,qe],showTickMarks:[2,`showTickMarks`,`showTickMarks`,qe],min:[2,`min`,`min`,dC],color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,qe],max:[2,`max`,`max`,dC],step:[2,`step`,`step`,dC],displayWith:`displayWith`},exportAs:[`matSlider`],features:[Ht$1([{provide:io,useExisting:n}])],ngContentSelectors:Rl,decls:9,vars:5,consts:[[`trackActive`,``],[`tickMarkContainer`,``],[1,`mdc-slider__track`],[1,`mdc-slider__track--inactive`],[1,`mdc-slider__track--active`],[1,`mdc-slider__track--active_fill`],[1,`mdc-slider__tick-marks`],[3,`discrete`,`thumbPosition`,`valueIndicatorText`],[3,`class`,`transform`]],template:function(t,i){t&1&&(ei(),Tn$1(0),Ar(1,`div`,2),So(2,`div`,3),Ar(3,`div`,4),So(4,`div`,5,0),Rr(),Dr(6,Pl,3,1,`div`,6),Rr(),Dr(7,Fl,1,3,`mat-slider-visual-thumb`,7),So(8,`mat-slider-visual-thumb`,7)),t&2&&(Ut(6),Cr(i.showTickMarks?6:-1),Ut(),Cr(i._isRange?7:-1),Ut(),Ku(`discrete`,i.discrete)(`thumbPosition`,2)(`valueIndicatorText`,i.endValueIndicatorText))},dependencies:[Ll],styles:[`.mdc-slider__track {
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
`],encapsulation:2})}return n})();var Ul={provide:qc,useExisting:Pt(()=>li),multi:!0};var li=(()=>{class n{_ngZone=g(ee);_elementRef=g(ue);_cdr=g(Zt);_slider=g(io);_platform=g(tt);_listenerCleanups;get value(){return dC(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let t=e+``;if(!this._hasSetInitialValue){this._initialValue=t;return}this._isActive||this._setValue(t)}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new fe;dragStart=new fe;dragEnd=new fe;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e}_translateX;thumbPosition=O.END;get min(){return dC(this._hostElement.min,0)}set min(e){this._hostElement.min=e+``,this._cdr.detectChanges()}get max(){return dC(this._hostElement.max,0)}set max(e){this._hostElement.max=e+``,this._cdr.detectChanges()}get step(){return dC(this._hostElement.step,0)}set step(e){this._hostElement.step=e+``,this._cdr.detectChanges()}get disabled(){return qe(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=N(``);_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(e){this._isFocused=e}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new L$1;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let e=g(it);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,`pointerdown`,this._onPointerDown.bind(this)),e.listen(this._hostElement,`pointermove`,this._onPointerMove.bind(this)),e.listen(this._hostElement,`pointerup`,this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!this._isActive}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let t=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=t,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(e){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(e)},0)}_fixValue(e){let t=e.clientX-this._slider._cachedLeft,i=this._slider._cachedWidth,a=this._slider.step===0?1:this._slider.step,d=Math.floor((this._slider.max-this._slider.min)/a),x=this._slider._isRtl()?1-t/i:t/i,Y=Math.round(x*d)/d*(this._slider.max-this._slider.min)+this._slider.min,oe=Math.round(Y/a)*a;if(oe===this.value){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=oe,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation})}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(e){let t=this._tickMarkOffset,i=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,i),t)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e)}_updateThumbUIByPointerEvent(e,t){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(t)}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e)}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=!0}registerOnTouched(e){this._onTouchedFn=e}setDisabledState(e){this.disabled=e}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static ɵfac=function(t){return new(t||n)};static ɵdir=V({type:n,selectors:[[`input`,`matSliderThumb`,``]],hostAttrs:[`type`,`range`,1,`mdc-slider__input`],hostVars:1,hostBindings:function(t,i){t&1&&Bt(`change`,function(){return i._onChange()})(`input`,function(){return i._onInput()})(`blur`,function(){return i._onBlur()})(`focus`,function(){return i._onFocus()}),t&2&&Kt$1(`aria-valuetext`,i._valuetext())},inputs:{value:[2,`value`,`value`,dC]},outputs:{valueChange:`valueChange`,dragStart:`dragStart`,dragEnd:`dragEnd`},exportAs:[`matSliderThumb`],features:[Ht$1([Ul,{provide:ua,useExisting:n}])]})}return n})();var En=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Te({type:n});static ɵinj=Ee({imports:[gm,_n$1]})}return n})();function Bl(n,o){if(n&1){let e=UD();Ar(0,`settings-toggle`,6),Bt(`ngModelChange`,function(i){I_(e);return A_(Vi$1().setDarkMode(i))}),Ar(1,`div`,7)(2,`icon`,8),Ca$1(3,`mode_night`),Rr(),Ar(4,`div`),Ca$1(5),BD(6,`translate`),Rr()()(),y5()}if(n&2)Ku(`ngModel`,Vi$1().dark_mode())(`toggle`,!0),v5(),Ut(5),g1(s6(6,3,`COMMON.DARK_MODE`))}function zl(n,o){if(n&1){let e=UD();Ar(0,`settings-toggle`,6),Bt(`ngModelChange`,function(i){I_(e);return A_(Vi$1().setLocatable(i))}),Ar(1,`div`,7)(2,`icon`,8),Ca$1(3,`emergency_share`),Rr(),Ar(4,`div`),Ca$1(5),BD(6,`translate`),Rr()()(),y5()}if(n&2)Ku(`ngModel`,Vi$1().locatable())(`toggle`,!0),v5(),Ut(5),g1(s6(6,3,`COMMON.LOCATABLE`))}function Gl(n,o){if(n&1){let e=UD();Ar(0,`div`,9),Ca$1(1),BD(2,`translate`),Rr(),Ar(3,`div`,10)(4,`span`,11),Ca$1(5,`A`),Rr(),Ar(6,`mat-slider`,12)(7,`input`,13),Bt(`ngModelChange`,function(i){I_(e);return A_(Vi$1().applySetting(`font_size`,i))}),Rr(),y5(),Rr(),Ar(8,`span`,2),Ca$1(9,`A`),Rr(),Ar(10,`span`,14),Ca$1(11),Rr()()}if(n&2){let e=Vi$1();Ut(),To(` `,s6(2,6,`COMMON.TEXT_SIZE_MSG`),` `),Ut(5),Ku(`min`,10)(`max`,24)(`step`,2),Ut(),Ku(`ngModel`,e.font_size()),v5(),Ut(4),To(` `,e.font_size(),`px `)}}var fa=(()=>{class n extends Gi$1{constructor(){super(...arguments),this._data=g(oe),this._settings=g(ks$1),this.accessible=N(!1),this.locatable=N(!1),this.can_locate=CJ(`allow_locatability_option`,!0),this._allow_dark_mode=this._settings.signal(`allow_dark_mode`,!1),this._font_size=this._settings.signal(`font_size`,16,!0),this._accessible=this._settings.signal(`accessible`,!1,!0),this._theme=this._settings.theme_signal,this.dark_mode=Ie(()=>this._theme()===`dark`),this.can_change_dark_mode=Ie(()=>!!this._allow_dark_mode()),this.font_size=this._font_size,this.applySetting=(e,t)=>this.timeout(`apply_setting`,()=>{this._settings.saveUserSetting(e,t),e===`accessible`&&this.accessible.set(t)},500),this.close=()=>this._data?.close(),this.setLocatable=e=>{this._settings.updateLocatable(e),this.locatable.set(e)}}async ngOnInit(){this.accessible.set(!!this._accessible()),this.subscription(`user`,HB.subscribe(e=>{this.locatable.set(e.locatable)}))}setDarkMode(e){let t=this._theme();e&&t!==`dark`?this._settings.setTheme(`dark`):!e&&t===`dark`&&this._settings.setTheme(`light`)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=vt(n)))(i||n)}})()}static{this.ɵcmp=Ue({type:n,selectors:[[`accessibility-tooltip`]],features:[Ce],decls:18,vars:11,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-[20rem]`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`,3,`click`],[1,`text-2xl`],[1,``],[1,`space-y-2`,`p-2`],[3,`ngModel`,`toggle`],[3,`ngModelChange`,`ngModel`,`toggle`],[1,`flex`,`items-center`,`space-x-2`],[1,`-ml-2`,`text-xl`],[1,`bg-base-200`,`px-8`,`py-4`,`text-center`],[1,`flex`,`items-center`,`space-x-4`,`px-4`],[1,`text-sm`],[1,`w-1/2`,`flex-1`,`text-[16px]`,3,`min`,`max`,`step`],[`matSliderThumb`,``,1,`text-[16px]`,3,`ngModelChange`,`ngModel`],[1,`bg-base-300`,`my-2`,`rounded-sm`,`px-2`,`py-1`,`text-base`,`text-white`]],template:function(t,i){t&1&&(Ar(0,`div`,0)(1,`div`,1),Bt(`click`,function(){return i.close()}),Ar(2,`icon`,2),Ca$1(3,`arrow_back`),Rr(),Ar(4,`div`,3),Ca$1(5),BD(6,`translate`),Rr()(),Ar(7,`div`,4),Dr(8,Bl,7,5,`settings-toggle`,5),Dr(9,zl,7,5,`settings-toggle`,5),Ar(10,`settings-toggle`,6),Bt(`ngModelChange`,function(d){return i.applySetting(`accessible`,d)}),Ar(11,`div`,7)(12,`icon`,8),Ca$1(13,`playlist_add`),Rr(),Ar(14,`div`),Ca$1(15),BD(16,`translate`),Rr()()(),y5(),Rr(),Dr(17,Gl,12,8),Rr()),t&2&&(Ut(5),To(` `,s6(6,7,`COMMON.CONTROLS_ACCESSIBILITY`),` `),Ut(3),Cr(i.can_change_dark_mode()?8:-1),Ut(),Cr(i.can_locate()?9:-1),Ut(),Ku(`ngModel`,i.accessible())(`toggle`,!0),v5(),Ut(5),g1(s6(16,9,`COMMON.TEXT_SIZE`)),Ut(2),Cr(i.accessible()?17:-1))},dependencies:[gm,Dw,En,Tn,li,Kr,VXe,QCe,lU,zCe,mZ,f],encapsulation:2})}}return n})();function Wl(n,o){if(n&1){let e=UD();Ar(0,`mat-radio-button`,8),Bt(`click`,function(){let i=I_(e).$implicit;return A_(Vi$1().setBuilding(i))}),Ca$1(1),Rr()}if(n&2){let e=o.$implicit;Ku(`value`,e.id),Ut(),To(` `,e.display_name||e.name,` `)}}var ga=(()=>{class n{constructor(){this._data=g(oe),this._org=g(Yb),this.buildings=this._org.active_buildings,this.building=this._org.active_building,this.setBuilding=e=>{this._org.setBuilding(e,!0),this._data?.close()},this.close=()=>this._data?.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`building-select`]],decls:16,vars:8,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-74`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`,3,`click`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`],[1,`text-2xl`],[1,`leading-tight`],[1,`text-xs`,`opacity-30`],[1,`px-4`,`py-2`,`text-xs`,`opacity-60`],[1,`flex`,`flex-col`,`space-y-2`,`px-2`,3,`ngModel`],[3,`value`],[3,`click`,`value`]],template:function(t,i){t&1&&(Ar(0,`div`,0),Bt(`click`,function(){return i.close()}),Ar(1,`div`,1)(2,`icon`,2),Ca$1(3,`arrow_back`),Rr(),Ar(4,`div`,3)(5,`div`),Ca$1(6),Rr(),Ar(7,`div`,4),Ca$1(8),BD(9,`translate`),Rr()()(),Ar(10,`div`,5),Ca$1(11),BD(12,`translate`),Rr(),Ar(13,`mat-radio-group`,6),Z8(14,Wl,2,2,`mat-radio-button`,7,K8),Rr(),y5(),Rr()),t&2&&(Ut(6),To(` `,i.building()?.display_name||i.building()?.name,` `),Ut(2),To(` `,s6(9,4,`RESOURCE.BUILDING`),` `),Ut(3),To(` `,s6(12,6,`COMMON.BUILDING_SELECT`),` `),Ut(2),Ku(`ngModel`,i.building()?.id),v5(),Ut(),Q8(i.buildings()))},dependencies:[Sn,ai,Kt,VXe,gm,Dw,QCe,zCe,mZ,f],encapsulation:2})}}return n})();function Hl(n,o){n&1&&(Ar(0,`div`,3),Ca$1(1),BD(2,`translate`),Rr()),n&2&&(Ut(),To(` `,s6(2,1,`COMMON.DESK_HEIGHT_NOT_SET`),` `))}function ql(n,o){if(n&1){let e=UD();Ar(0,`button`,13),Bt(`click`,function(){I_(e);return A_(Vi$1().onClose())}),Ca$1(1),BD(2,`translate`),Rr()}n&2&&(Ut(),To(` `,s6(2,1,`COMMON.SAVE`),` `))}var ba=(()=>{class n{constructor(){this._settings=g(ks$1),this.show_close=qIe(!1),this.close=WIe(),this.not_set=N(!1),this.desk_sitting_height=N(71),this.desk_standing_height=N(101)}ngOnInit(){this.not_set.set(!this._settings.get(`desk_sitting_height`)&&!this._settings.get(`desk_standing_height`)),this.desk_sitting_height.set(this._settings.get(`desk_sitting_height`)||71),this.desk_standing_height.set(this._settings.get(`desk_standing_height`)||101)}onClose(){this.saveSetting(`desk_sitting_height`,this.desk_sitting_height()),this.saveSetting(`desk_standing_height`,this.desk_standing_height()),this.close.emit()}formatLabel(e){return`${e.toFixed(1)}cm`}saveSetting(e,t){this._settings.saveUserSetting(e,t)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`desk-height-presets`]],inputs:{show_close:[1,`show_close`]},outputs:{show_close:`show_closeChange`,close:`close`},decls:29,vars:23,consts:[[1,`bg-base-100`,`relative`,`w-[20rem]`,`rounded-sm`,`p-4`,`shadow-sm`],[1,`mb-2`,`text-lg`],[1,`mb-4`,`text-xs`,`opacity-60`],[1,`bg-warning`,`text-warning-content`,`-mx-2`,`mb-4`,`rounded-sm`,`p-2`,`text-xs`],[1,`mt-2`,`flex`,`flex-col`],[1,`flex`,`items-center`,`space-x-2`],[`min`,`60`,`max`,`80`,`step`,`0.5`,`discrete`,``,1,`flex-1`,3,`displayWith`],[`matSliderThumb`,``,3,`ngModelChange`,`ngModel`],[1,`w-12`,`text-right`,`text-sm`],[1,`mr-2`,`flex`,`items-center`,`space-x-2`],[`min`,`90`,`max`,`120`,`step`,`0.5`,`discrete`,``,1,`flex-1`,3,`displayWith`],[1,`mr-2`,`w-12`,`text-right`,`text-sm`],[`btn`,``,`matRipple`,``,1,`mt-2`,`w-full`],[`btn`,``,`matRipple`,``,1,`mt-2`,`w-full`,3,`click`]],template:function(t,i){t&1&&(Ar(0,`div`,0)(1,`div`,1),Ca$1(2),BD(3,`translate`),Rr(),Ar(4,`div`,2),Ca$1(5),BD(6,`translate`),Rr(),Dr(7,Hl,3,3,`div`,3),Ar(8,`div`,2),Ca$1(9),BD(10,`translate`),Rr(),Ar(11,`div`,4)(12,`label`),Ca$1(13),BD(14,`translate`),Rr(),Ar(15,`div`,5)(16,`mat-slider`,6)(17,`input`,7),Bt(`ngModelChange`,function(d){return i.desk_sitting_height.set(d),i.saveSetting(`desk_sitting_height`,d)}),Rr(),y5(),Rr(),Ar(18,`div`,8),Ca$1(19),Rr()(),Ar(20,`label`),Ca$1(21),BD(22,`translate`),Rr(),Ar(23,`div`,9)(24,`mat-slider`,10)(25,`input`,7),Bt(`ngModelChange`,function(d){return i.desk_standing_height.set(d),i.saveSetting(`desk_standing_height`,d)}),Rr(),y5(),Rr(),Ar(26,`div`,11),Ca$1(27),Rr()()(),Dr(28,ql,3,3,`button`,12),Rr()),t&2&&(Ut(2),To(` `,s6(3,13,`COMMON.DESK_HEIGHT_TITLE`),` `),Ut(3),To(` `,s6(6,15,`COMMON.DESK_HEIGHT_MSG`),` `),Ut(2),Cr(i.not_set()&&i.show_close()?7:-1),Ut(2),To(` `,s6(10,17,`COMMON.DESK_HEIGHT_INFO`),` `),Ut(4),g1(s6(14,19,`COMMON.DESK_HEIGHT_SITTING`)),Ut(3),Ku(`displayWith`,i.formatLabel),Ut(),Ku(`ngModel`,i.desk_sitting_height()),v5(),Ut(2),To(` `,i.desk_sitting_height().toFixed(1),`cm `),Ut(2),g1(s6(22,21,`COMMON.DESK_HEIGHT_STANDING`)),Ut(3),Ku(`displayWith`,i.formatLabel),Ut(),Ku(`ngModel`,i.desk_standing_height()),v5(),Ut(2),To(` `,i.desk_standing_height().toFixed(1),`cm `),Ut(),Cr(i.show_close()?28:-1))},dependencies:[gm,Dw,En,Tn,li,QCe,lU,zCe,mZ,f],encapsulation:2})}}return n})();function jl(n,o){if(n&1&&(Ar(0,`a`,4)(1,`div`,5),So(2,`icon`,6),Ar(3,`div`),Ca$1(4),Rr()()()),n&2){let e=o.$implicit;Ku(`href`,e.link,dE),Ut(2),Ku(`icon`,e.icon),Ut(2),g1(e.name)}}var va=(()=>{class n{constructor(){this._data=g(oe),this._settings=g(ks$1),this._tiles=this._settings.signal(`help`,[]),this.close=()=>{this._data?.close()}}get tiles(){return this._tiles()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`help-tooltip`]],decls:9,vars:3,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`w-74`,`flex-col`,`rounded-sm`,`shadow-sm`,3,`click`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-4`],[1,`text-2xl`],[1,``],[`matRipple`,``,`target`,`_blank`,`ref`,`noreferer noopener`,1,`w-full`,`p-2`,`text-left`,3,`href`],[1,`hover:bg-base-200`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-sm`,`p-2`],[1,`text-xl`,3,`icon`]],template:function(t,i){t&1&&(Ar(0,`div`,0),Bt(`click`,function(){return i.close()}),Ar(1,`div`,1)(2,`icon`,2),Ca$1(3,`arrow_back`),Rr(),Ar(4,`div`,3),Ca$1(5),BD(6,`translate`),Rr()(),Z8(7,jl,5,3,`a`,4,K8),Rr()),t&2&&(Ut(5),g1(s6(6,1,`COMMON.CONTROLS_HELP`)),Ut(2),Q8(i.tiles))},dependencies:[gm,Dw,VXe,f],encapsulation:2})}}return n})();var $l=(n,o)=>o.id;function Kl(n,o){if(n&1&&(Ar(0,`div`,8),Ca$1(1),Rr()),n&2){let e=Vi$1().$implicit;Ut(),To(` `,e.local,` `)}}function Ql(n,o){if(n&1){let e=UD();Ar(0,`button`,6),Bt(`click`,function(){let i=I_(e).$implicit;return A_(Vi$1().setLocale(i.id))}),Ar(1,`div`,7),BD(2,`translate`),Ar(3,`div`),Ca$1(4),BD(5,`translate`),Rr(),Dr(6,Kl,2,1,`div`,8),BD(7,`translate`),Rr()()}if(n&2){let e=o.$implicit,t=Vi$1();Ut(),gt(`mt-2`,s6(2,8,e.name)!==e.local)(`border`,t.active_locale===e.id)(`border-info`,t.active_locale===e.id),Ut(3),g1(s6(5,10,e.name)),Ut(2),Cr(s6(7,12,e.name)!==e.local?6:-1)}}var xa=(()=>{class n{constructor(){this._data=g(oe),this._settings=g(ks$1),this._locale=g(vB),this._locales=this._settings.signal(`locales`,[]),this.setLocale=e=>{this._locale.setLocale(e),localStorage.setItem(`PLACEOS.locale`,e),setTimeout(()=>location.reload(),300)},this.close=()=>this._data?.close()}get active_locale(){return this._locale.locale}get locales(){return this._locales()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`language-select`]],decls:12,vars:6,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-74`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`,3,`click`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`],[1,`text-2xl`],[1,``],[1,`px-4`,`py-2`,`text-xs`,`opacity-60`],[`matRipple`,``,1,`flex`,`h-14`,`items-center`,`justify-between`,`space-x-8`,`px-2`,`text-left`],[`matRipple`,``,1,`flex`,`h-14`,`items-center`,`justify-between`,`space-x-8`,`px-2`,`text-left`,3,`click`],[1,`hover:bg-base-200`,`flex`,`flex-1`,`items-center`,`justify-between`,`rounded-sm`,`p-2`,`leading-tight`],[1,`bg-base-300`,`rounded-sm`,`px-2`,`py-1`,`text-xs`,`opacity-60`]],template:function(t,i){t&1&&(Ar(0,`div`,0),Bt(`click`,function(){return i.close()}),Ar(1,`div`,1)(2,`icon`,2),Ca$1(3,`arrow_back`),Rr(),Ar(4,`div`,3),Ca$1(5),BD(6,`translate`),Rr()(),Ar(7,`div`,4),Ca$1(8),BD(9,`translate`),Rr(),Z8(10,Ql,8,14,`button`,5,$l),Rr()),t&2&&(Ut(5),g1(s6(6,2,`COMMON.LANGUAGE`)),Ut(3),To(` `,s6(9,4,`COMMON.LANGUAGE_SELECT`),` `),Ut(2),Q8(i.locales))},dependencies:[gm,Dw,VXe,f],encapsulation:2})}}return n})();function Xl(n,o){if(n&1){let e=UD();Ar(0,`mat-radio-button`,8),Bt(`click`,function(){let i=I_(e).$implicit;return A_(Vi$1().setRegion(i))}),Ca$1(1),Rr()}if(n&2){let e=o.$implicit;Ku(`value`,e.id),Ut(),To(` `,e.display_name||e.name,` `)}}var ka=(()=>{class n{constructor(){this._data=g(oe),this._org=g(Yb),this.regions=this._org.region_list,this.region=this._org.active_region,this.setRegion=async e=>{await this._org.setRegion(e),this._org.setBuilding(this._org.building,!0),this._data?.close()},this.close=()=>this._data?.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`region-select`]],decls:16,vars:8,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-74`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`,3,`click`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`],[1,`text-2xl`],[1,`leading-tight`],[1,`text-xs`,`opacity-30`],[1,`px-4`,`py-2`,`text-xs`,`opacity-60`],[1,`flex`,`flex-col`,`space-y-2`,`px-2`,3,`ngModel`],[3,`value`],[3,`click`,`value`]],template:function(t,i){t&1&&(Ar(0,`div`,0),Bt(`click`,function(){return i.close()}),Ar(1,`div`,1)(2,`icon`,2),Ca$1(3,`arrow_back`),Rr(),Ar(4,`div`,3)(5,`div`),Ca$1(6),Rr(),Ar(7,`div`,4),Ca$1(8),BD(9,`translate`),Rr()()(),Ar(10,`div`,5),Ca$1(11),BD(12,`translate`),Rr(),Ar(13,`mat-radio-group`,6),Z8(14,Xl,2,2,`mat-radio-button`,7,K8),Rr(),y5(),Rr()),t&2&&(Ut(6),To(` `,i.region()?.display_name||i.region()?.name,` `),Ut(2),To(` `,s6(9,4,`RESOURCE.REGION`),` `),Ut(3),To(` `,s6(12,6,`COMMON.REGION_SELECT`),` `),Ut(2),Ku(`ngModel`,i.region()?.id),v5(),Ut(),Q8(i.regions()))},dependencies:[Sn,ai,Kt,VXe,gm,Dw,QCe,zCe,mZ,f],encapsulation:2})}}return n})();var ya=(()=>{class n{constructor(){this._settings=g(ks$1),this._tooltip=g(oe,{optional:!0}),this.plate_number=N(``)}async ngOnInit(){await nN(this._settings.initialised),this.plate_number.set(this._settings.get(`plate_number`)||``)}save(){this.plate_number()&&this._settings.saveUserSetting(`plate_number`,this.plate_number()),pS(Zn$1(`COMMON.PARKING_SETTINGS_SAVE`)),this._tooltip?.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`user-parking-tooltip`]],decls:14,vars:13,consts:[[1,`border-base-300`,`bg-base-100`,`min-w-[20rem]`,`space-y-2`,`rounded-md`,`border`,`p-2`],[1,`border-base-300`,`border-b`,`text-lg`,`font-medium`],[1,`flex`,`flex-col`],[`for`,`plate-number`],[`appearance`,`outline`,1,`no-subscript`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`]],template:function(t,i){t&1&&(Ar(0,`div`,0)(1,`h3`,1),Ca$1(2),BD(3,`translate`),Rr(),Ar(4,`div`,2)(5,`label`,3),Ca$1(6),BD(7,`translate`),Rr(),Ar(8,`mat-form-field`,4)(9,`input`,5),BD(10,`translate`),v1(`ngModelChange`,function(d){return V4(i.plate_number,d)||(i.plate_number=d),d}),Rr(),y5(),Rr()(),Ar(11,`button`,6),Bt(`click`,function(){return i.save()}),Ca$1(12),BD(13,`translate`),Rr()()),t&2&&(Ut(2),To(` `,s6(3,5,`COMMON.CONTROLS_PARKING`),` `),Ut(4),g1(s6(7,7,`BOOKINGS.PARKING_PLATE_NUMBER`)),Ut(3),S1(`ngModel`,i.plate_number),Ku(`placeholder`,s6(10,9,`BOOKINGS.PARKING_PLATE_NUMBER`)),v5(),Ut(3),To(` `,s6(13,11,`COMMON.SAVE`),` `))},dependencies:[Wt$1,qn$1,fd,pd,QCe,lU,zCe,mZ,f],encapsulation:2})}}return n})();function Yl(n,o){if(n&1){let e=UD();Ar(0,`button`,17),Bt(`click`,function(){let i=I_(e).$implicit,a=Vi$1().$index;return A_(Vi$1(2).setLocation(a,i.id))}),Ar(1,`div`,18)(2,`icon`,11),Ca$1(3),Rr(),Ar(4,`div`,19),Ca$1(5),BD(6,`translate`),Rr()()()}if(n&2){let e=o.$implicit;Ut(3),g1(e.icon),Ut(2),To(` `,s6(6,2,e.name),` `)}}function Zl(n,o){n&1&&So(0,`div`,16)}function Jl(n,o){if(n&1&&(Ar(0,`div`,9)(1,`div`,10)(2,`icon`,11),Ca$1(3),Rr()(),Ar(4,`div`,12)(5,`button`,13)(6,`div`),Ca$1(7),Rr(),Ar(8,`icon`),Ca$1(9,`expand_more`),Rr()(),Ar(10,`mat-menu`,null,0),Z8(12,Yl,7,4,`button`,14,K8),Rr(),Ar(14,`div`,15),Ca$1(15),BD(16,`date`),BD(17,`date`),Rr()(),Dr(18,Zl,1,0,`div`,16),Rr()),n&2){let e=o.$implicit,t=o.$index,i=d4(11),a=Vi$1(2);gt(`opacity-30`,a.now>a.timeFrom(e.end_time)),Ut(),gt(`bg-base-200`,a.now<a.timeFrom(e.start_time)||a.now>a.timeFrom(e.end_time))(`bg-info`,a.now>=a.timeFrom(e.start_time)&&a.now<=a.timeFrom(e.end_time))(`text-info-content`,a.now>=a.timeFrom(e.start_time)&&a.now<=a.timeFrom(e.end_time)),Ut(2),g1(a.location_icon(a.timeFrom(e.start_time))),Ut(2),Ku(`matMenuTriggerFor`,i),Ut(2),To(` `,a.location(a.timeFrom(e.start_time)),` `),Ut(5),Q8(a.locations()),Ut(3),_1(` `,HD(16,14,a.timeFrom(e.start_time),`shortTime`),` – `,HD(17,17,a.timeFrom(e.end_time),`shortTime`),` `),Ut(3),Cr(t>0?18:-1)}}function ec(n,o){if(n&1&&(Ar(0,`div`,6),Z8(1,Jl,19,20,`div`,8,K8),Rr()),n&2){let e=Vi$1();Ut(),Q8(e.active_preference?.blocks)}}function tc(n,o){n&1&&(Ar(0,`div`,7)(1,`icon`,20),Ca$1(2,`event_busy`),Rr(),Ar(3,`p`,21),Ca$1(4),BD(5,`translate`),Rr(),Ar(6,`p`,21),Ca$1(7),BD(8,`translate`),Rr()()),n&2&&(Ut(4),To(` `,s6(5,2,`COMMON.WORK_LOCATION_EMPTY`),` `),Ut(3),To(` `,s6(8,4,`COMMON.WORK_LOCATION_EDIT_INFO`),` `))}var Ca=(()=>{class n{constructor(){this._dialog=g(nT),this.locations=N([]),this.settings=N(void 0),this.overrides=N({})}get active_preference(){let e=ui(new Date,`yyyy-MM-dd`);return this.overrides()[e]?this.overrides()[e]:this.settings()?.find(t=>t.day_of_week===new Date().getDay())}get now(){return hl$1(Date.now()).getTime()}ngOnInit(){let e=Yi$1();this.settings.set(e.work_preferences),this.overrides.set(e.work_overrides),this.locations.set([{id:`wfo`,name:Zn$1(`COMMON.WORK_OFFICE`),icon:`business`},{id:`wfh`,name:Zn$1(`COMMON.WORK_HOME`),icon:`home`},{id:`aol`,name:Zn$1(`COMMON.WORK_LEAVE`),icon:`event_busy`},{id:`sick`,name:Zn$1(`COMMON.WORK_SICK`),icon:`sick`}])}location_icon(e){return Yi$1().location_icon(e+60*1e3)}location(e){return Yi$1().location_name_time(e+60*1e3)}timeFrom(e){return hl$1(di(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}editSettings(){this._dialog.open(wn)}async setLocation(e,t){let i=Yi$1(),a=this.active_preference,d=ui(Date.now(),`yyyy-MM-dd`),x=m(l({},i.work_overrides),{[d]:m(l({},a),{blocks:[...a.blocks.slice(0,e),m(l({},a.blocks[e]),{location:t}),...a.blocks.slice(e+1)]})});for(let R in x){let Y=zr(R,`yyyy-MM-dd`,new Date);(!x[R].blocks.length||xr(Y,pn$1(cn$1(Date.now()),-1)))&&delete x[R]}this.overrides.set(x),await vV(i.id,m(l({},i),{work_overrides:x})),WB()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`work-location-tooltip`]],decls:14,vars:11,consts:[[`work_menu`,`matMenu`],[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`w-74`,`flex-col`,`overflow-hidden`,`rounded-sm`,`shadow-sm`],[1,`flex`,`items-center`,`justify-between`,`px-2`],[1,`px-2`,`py-4`,`font-medium`],[`icon`,``,`matRipple`,``,`matTooltipPosition`,`left`,1,`hover:bg-base-200`,3,`click`,`matTooltip`],[1,`px-4`,`text-sm`,`font-medium`],[1,`pb-2`],[1,`flex`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-2`,`p-8`,`opacity-30`],[1,`relative`,`flex`,`items-center`,`px-4`,`py-2`,3,`opacity-30`],[1,`relative`,`flex`,`items-center`,`px-4`,`py-2`],[1,`bg-base-200`,`z-20`,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`rounded-full`],[1,`text-2xl`],[1,`ml-2`,`flex-1`],[`matRipple`,``,1,`hover:bg-base-200`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`px-2`,`py-1`,`font-medium`,3,`matMenuTriggerFor`],[`mat-menu-item`,``],[1,`px-2`,`text-xs`,`opacity-60`],[1,`border-base-200`,`absolute`,`-top-2`,`left-7`,`h-4`,`w-0`,`-translate-x-px`,`border-l-2`,`border-dashed`],[`mat-menu-item`,``,3,`click`],[1,`flex`,`items-center`,`space-x-2`],[1,`pr-8`],[1,`text-6xl`],[1,`text-center`,`text-sm`]],template:function(t,i){t&1&&(Ar(0,`div`,1)(1,`div`,2)(2,`h3`,3),Ca$1(3),BD(4,`translate`),Rr(),Ar(5,`button`,4),BD(6,`translate`),Bt(`click`,function(){return i.editSettings()}),Ar(7,`icon`),Ca$1(8,`edit_note`),Rr()()(),Ar(9,`h3`,5),Ca$1(10),BD(11,`date`),Rr(),Dr(12,ec,3,0,`div`,6)(13,tc,9,6,`div`,7),Rr()),t&2&&(Ut(3),To(` `,s6(4,4,`COMMON.WORK_LOCATION`),` `),Ut(2),Ku(`matTooltip`,s6(6,6,`COMMON.WORK_LOCATION_EDIT`)),Ut(5),To(` `,HD(11,8,i.now,`fullDate`),` `),Ut(2),Cr(i.active_preference?.blocks?.length?12:13))},dependencies:[AF,Z7e,Ud,It,Ni,Gd,gm,Dw,Yt,mt,VXe,x9,f],encapsulation:2})}}return n})();function ic(n,o){if(n&1){let e=UD();Ar(0,`button`,28),Bt(`click`,function(){let i=I_(e).$implicit;return A_(Vi$1(2).saveSetting(`work_location`,i.id))}),Ar(1,`div`,29)(2,`icon`,23),Ca$1(3),Rr(),Ar(4,`div`,30),Ca$1(5),BD(6,`translate`),Rr()()()}if(n&2){let e=o.$implicit;Ut(3),g1(e.icon),Ut(2),To(` `,s6(6,2,e.name),` `)}}function nc(n,o){if(n&1&&(Ar(0,`div`,7)(1,`h3`,19),Ca$1(2,` Today's Work Location `),Rr(),Ar(3,`div`,20)(4,`div`,21)(5,`div`,22)(6,`icon`,23),Ca$1(7),Rr()(),Ar(8,`div`,24)(9,`button`,25)(10,`div`),Ca$1(11),Rr(),Ar(12,`icon`),Ca$1(13,`expand_more`),Rr()(),Ar(14,`mat-menu`,null,1),Z8(16,ic,7,4,`button`,26,K8),Rr(),Ar(18,`div`,27),Ca$1(19),BD(20,`date`),BD(21,`date`),Rr()()()()()),n&2){let e=d4(15),t=Vi$1();Ut(7),g1(t.location_icon(t.timeFrom(t.active_block().start_time))),Ut(2),Ku(`matMenuTriggerFor`,e),Ut(2),To(` `,t.location(t.timeFrom(t.active_block().start_time)),` `),Ut(5),Q8(t.pref_locations()),Ut(3),_1(` `,HD(20,5,t.timeFrom(t.active_block().start_time),`shortTime`),` – `,HD(21,8,t.timeFrom(t.active_block().end_time),`shortTime`),` `)}}function oc(n,o){if(n&1&&(Ar(0,`div`,8)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Ca$1(5,`layers`),Rr()(),Ar(6,`div`,33),Ca$1(7),Rr(),Ar(8,`icon`,34),Ca$1(9,` chevron_right `),Rr()()()()),n&2){let e=Vi$1();Ku(`content`,e.region_select),Ut(7),To(` `,e.region()?.display_name||e.region()?.name,` `)}}function rc(n,o){if(n&1&&(Ar(0,`div`,8)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Ca$1(5,`business`),Rr()(),Ar(6,`div`,33),Ca$1(7),Rr(),Ar(8,`icon`,34),Ca$1(9,` chevron_right `),Rr()()()()),n&2){let e=Vi$1();Ku(`content`,e.building_select),Ut(7),To(` `,e.building()?.display_name||e.building()?.name,` `)}}function ac(n,o){if(n&1&&(Ar(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Ca$1(5,`help`),Rr()(),Ar(6,`div`,35),Ca$1(7),BD(8,`translate`),Rr(),Ar(9,`icon`,34),Ca$1(10,` chevron_right `),Rr()()()()),n&2)Ku(`content`,Vi$1().help_tooltip),Ut(7),To(` `,s6(8,2,`COMMON.CONTROLS_HELP`),` `)}function sc(n,o){if(n&1&&(Ar(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Ca$1(5,`share_location`),Rr()(),Ar(6,`div`,35),Ca$1(7),BD(8,`translate`),Rr(),Ar(9,`icon`,34),Ca$1(10,`chevron_right`),Rr()()()()),n&2)Ku(`content`,Vi$1().work_location_tooltip),Ut(7),To(` `,s6(8,2,`COMMON.WORK_LOCATION`),` `)}function lc(n,o){if(n&1&&(Ar(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Ca$1(5,`mode_night`),Rr()(),Ar(6,`div`,35),Ca$1(7),BD(8,`translate`),Rr(),Ar(9,`icon`,34),Ca$1(10,`chevron_right`),Rr()()()()),n&2){let e=Vi$1();gt(`border-b!`,!e.locales().length||!e.desk_height()),Ku(`content`,e.accessibility_tooltip),Ut(7),To(` `,s6(8,4,`COMMON.CONTROLS_ACCESSIBILITY`),` `)}}function cc(n,o){if(n&1&&(Ar(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Ca$1(5,`desk`),Rr()(),Ar(6,`div`,35),Ca$1(7),BD(8,`translate`),Rr(),Ar(9,`icon`,34),Ca$1(10,` chevron_right `),Rr()()()()),n&2){let e=Vi$1(),t=d4(15);gt(`border-b!`,!e.locales().length),Ku(`content`,t),Ut(7),To(` `,s6(8,4,`COMMON.CONTROLS_DESKS`),` `)}}function dc(n,o){n&1&&So(0,`desk-height-presets`)}function mc(n,o){if(n&1&&(Ar(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Ca$1(5,`parking_sign`),Rr()(),Ar(6,`div`,35),Ca$1(7),BD(8,`translate`),Rr(),Ar(9,`icon`,34),Ca$1(10,` chevron_right `),Rr()()()()),n&2){let e=Vi$1();gt(`border-b!`,!e.locales().length),Ku(`content`,e.parking_tooltip),Ut(7),To(` `,s6(8,4,`COMMON.CONTROLS_PARKING`),` `)}}function pc(n,o){n&1&&(Ar(0,`div`,37),Ca$1(1,` Language `),Rr())}function uc(n,o){if(n&1&&(Ar(0,`div`,11)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Ca$1(5,`language`),Rr()(),Ar(6,`div`,36)(7,`div`)(8,`div`),Ca$1(9),BD(10,`translate`),Rr(),Dr(11,pc,2,0,`div`,37),BD(12,`translate`),Rr(),Ar(13,`div`,38),BD(14,`translate`),Ca$1(15),BD(16,`translate`),Rr()(),Ar(17,`icon`,34),Ca$1(18,` chevron_right `),Rr()()()()),n&2){let e=Vi$1();Ku(`content`,e.language_tooltip),Ut(9),To(` `,s6(10,5,`COMMON.LANGUAGE`),` `),Ut(2),Cr(s6(12,7,`COMMON.LANGUAGE`)!==`Language`?11:-1),Ut(2),Ku(`matTooltip`,s6(14,9,e.active_locale)),Ut(2),To(` `,s6(16,11,e.active_locale),` `)}}function _c(n,o){if(n&1){let e=UD();Ar(0,`button`,39),Bt(`click`,function(){I_(e);return A_(Vi$1().newSupportTicket())}),Ar(1,`div`,31)(2,`div`,32)(3,`icon`),Ca$1(4,`support_agent`),Rr()(),Ar(5,`div`,35),Ca$1(6),BD(7,`translate`),Rr()()()}n&2&&(Ut(6),To(` `,s6(7,1,`COMMON.CONTROLS_SUPPORT`),` `))}function hc(n,o){if(n&1){let e=UD();Ar(0,`button`,40),Bt(`click`,function(){I_(e);return A_(Vi$1().reloadPage())}),Ca$1(1),BD(2,`translate`),Rr()}n&2&&(Ut(),To(` `,s6(2,1,`COMMON.CONTROLS_NEW_VERSION`),` `))}function fc(n,o){if(n&1){let e=UD();Ar(0,`button`,41),Bt(`click`,function(){I_(e);return A_(Vi$1().viewChangelog())}),Ca$1(1),Rr()}if(n&2){let e=Vi$1();Ku(`disabled`,!e.changelog_available()),Ut(),To(` `,e.version.hash,` `)}}function gc(n,o){if(n&1&&(Ar(0,`span`),Ca$1(1),Rr()),n&2){let e=Vi$1();Ut(),g1(e.version.hash)}}var Sa=(()=>{class n{constructor(){this._settings=g(ks$1),this._org=g(Yb),this._dialog=g(nT),this._changelog=g(sa),this._locale=g(vB),this.building=this._org.active_building,this.region=this._org.active_region,this.regions=this._org.region_list,this.sidebar=bs$1(!1),this.accessibility=CJ(`allow_accessibility_changes`,!0),this.show_changelog=CJ(`show_changelog`,!0),this.changelog_available=this._changelog.available,this.viewChangelog=()=>this._changelog.view(),this.region_select=ka,this.building_select=ga,this.help_tooltip=va,this.accessibility_tooltip=fa,this.language_tooltip=xa,this.work_location_tooltip=Ca,this.parking_tooltip=ya,this.features=CJ(`features`,[]),this._locales=this._settings.signal(`locales`,[]),this._desk_height=this._settings.signal(`desks.height_enabled`,!1),this._use_region=this._settings.signal(`use_region`,!1),this._disable_building_select=this._settings.signal(`disable_building_select`,!1),this.pref_locations=N([]),this.work_prefs=N([]),this.overrides=N({}),this.active_block=Ie(()=>{let e=ui(new Date,`yyyy-MM-dd`),t=new Date().getDay();return(this.overrides()[e]?this.overrides()[e]:this.work_prefs().find(a=>a.day_of_week===t))?.blocks?.find(a=>this.now>=this.timeFrom(a.start_time)&&this.now<this.timeFrom(a.end_time))}),this.active_index=Ie(()=>{let e=ui(new Date,`yyyy-MM-dd`),t=new Date().getDay();return(this.overrides()[e]?this.overrides()[e]:this.work_prefs().find(a=>a.day_of_week===t))?.blocks?.findIndex(a=>this.now>=this.timeFrom(a.start_time)&&this.now<this.timeFrom(a.end_time))}),this.locales=this._locales,this.desk_height=this._desk_height,this.use_region=this._use_region,this.disable_building_select=this._disable_building_select}location_icon(e){return Yi$1().location_icon(e+60*1e3)}location(e){return Yi$1().location_name_time(e+60*1e3)}timeFrom(e){return hl$1(di(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}get user(){return Yi$1()}get groups(){return this.user?.groups?.join(`
`)||``}get version(){return Vh}get active_locale(){let e=this.locales(),t=this._locale.locale;for(let i of e)if(i.id===t)return i.name;return`LANGUAGE.ENGLISH`}get now(){return hl$1(Date.now()).getTime()}get has_new_version(){return fG()}ngOnInit(){let e=Yi$1();this.work_prefs.set(e?.work_preferences||[]),this.overrides.set(e?.work_overrides||{}),this.pref_locations.set([{id:`wfo`,name:Zn$1(`COMMON.WORK_OFFICE`),icon:`business`},{id:`wfh`,name:Zn$1(`COMMON.WORK_HOME`),icon:`home`},{id:`aol`,name:Zn$1(`COMMON.WORK_LEAVE`),icon:`event_busy`},{id:`sick`,name:Zn$1(`COMMON.WORK_SICK`),icon:`sick`}])}logout(){tRe()}reloadPage(){location.reload()}newSupportTicket(){this._settings.get(`app.external_support_url`)?window.open(this._settings.get(`app.external_support_url`),`_blank`):this._dialog.open(ca)}openWfhModal(){this._dialog.open(wn)}saveSetting(e,t){this._settings.saveUserSetting(e,t)}formatLabel(e){return`${e.toFixed(1)}cm`}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`user-controls`]],inputs:{sidebar:[1,`sidebar`]},decls:35,vars:32,consts:[[`desk_height_tooltip`,``],[`work_menu`,`matMenu`],[1,`divide-base-200`,`border-base-300`,`bg-base-100`,`relative`,`mt-1`,`flex`,`flex-col`,`divide-y`,`overflow-auto`,`rounded-sm`,`border`,`shadow-sm`],[`avatar`,``,1,`flex`,`w-full`,`min-w-72`,`flex-col`,`items-center`,`p-2`],[1,`text-2xl`,3,`user`,`matTooltip`],[1,``],[1,`truncate`,`text-xs`,`opacity-60`],[1,`border-base-200`,`w-full`,`rounded-sm`,`border-y`,`py-2`],[`customTooltip`,``,1,`relative`,3,`content`],[`customTooltip`,``,3,`content`],[`customTooltip`,``,3,`content`,`border-b!`],[`customTooltip`,``,1,`border-b!`,3,`content`],[`btn`,``,`matRipple`,``,1,`clear`,`h-14`,`w-full`,`text-left`],[1,`flex`,`flex-col`,`items-center`,`p-4`],[1,`mb-4`,`flex`,`items-center`,`justify-center`,`space-x-2`],[`btn`,``,`matRipple`,``,1,`inverse`,3,`click`],[`btn`,``,`matRipple`,``],[1,`w-full`,`text-xs`,`opacity-60`],[1,`m-0`,`border-none`,`bg-none`,`p-0`,`text-xs`,`underline`,3,`disabled`],[1,`w-full`,`px-4`,`pb-2`,`text-sm`,`font-medium`],[1,`w-full`],[1,`relative`,`flex`,`items-center`,`px-4`,`py-2`],[1,`bg-info`,`text-info-content`,`z-20`,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`rounded-full`],[1,`text-2xl`],[1,`ml-2`,`flex-1`],[`matRipple`,``,1,`hover:bg-base-200`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`px-2`,`py-1`,`font-medium`,3,`matMenuTriggerFor`],[`mat-menu-item`,``],[1,`px-2`,`text-xs`,`opacity-60`],[`mat-menu-item`,``,3,`click`],[1,`flex`,`items-center`,`space-x-2`],[1,`pr-8`],[1,`flex`,`w-full`,`items-center`,`space-x-2`],[1,`bg-base-200`,`flex`,`h-8`,`w-8`,`items-center`,`justify-center`,`rounded-full`],[1,`w-px`,`flex-1`,`truncate`],[1,`text-2xl`,`opacity-60`],[1,`flex-1`],[1,`flex`,`flex-1`,`items-center`,`justify-between`,`space-x-4`],[1,`text-xs`,`opacity-30`],[1,`bg-base-200`,`max-w-24`,`truncate`,`rounded-sm`,`px-2`,`py-1`,`text-sm`,3,`matTooltip`],[`btn`,``,`matRipple`,``,1,`clear`,`h-14`,`w-full`,`text-left`,3,`click`],[`btn`,``,`matRipple`,``,3,`click`],[1,`m-0`,`border-none`,`bg-none`,`p-0`,`text-xs`,`underline`,3,`click`,`disabled`]],template:function(t,i){t&1&&(Ar(0,`div`,2)(1,`div`,3),So(2,`a-user-avatar`,4),Ar(3,`div`,5),Ca$1(4),Rr(),Ar(5,`div`,6),Ca$1(6),Rr()(),Dr(7,nc,22,11,`div`,7),Dr(8,oc,10,2,`div`,8),Dr(9,rc,10,2,`div`,8),Dr(10,ac,11,4,`div`,9),Dr(11,sc,11,4,`div`,9),Dr(12,lc,11,6,`div`,10),Dr(13,cc,11,6,`div`,10),Aa$1(14,dc,1,0,`ng-template`,null,0,c6),Dr(16,mc,11,6,`div`,10),Dr(17,uc,19,13,`div`,11),Dr(18,_c,8,3,`button`,12),Ar(19,`div`,13)(20,`div`,14)(21,`button`,15),Bt(`click`,function(){return i.logout()}),Ca$1(22),BD(23,`translate`),Rr(),Dr(24,hc,3,3,`button`,16),Rr(),Ar(25,`div`,17),kD(26),Ca$1(27),BD(28,`translate`),FD(),Dr(29,fc,2,2,`button`,18)(30,gc,2,1,`span`),Rr(),Ar(31,`div`,17),Ca$1(32),BD(33,`date`),BD(34,`date`),Rr()()()),t&2&&(gt(`border`,!i.sidebar()),Ut(2),Ku(`user`,i.user)(`matTooltip`,i.groups),Ut(2),g1(i.user?.name),Ut(2),To(` `,i.user?.email,` `),Ut(),Cr(i.features().includes(`wfh`)&&i.active_block()?7:-1),Ut(),Cr(i.regions()?.length?8:-1),Ut(),Cr(!i.disable_building_select()&&!i.use_region()?9:-1),Ut(),Cr(i.features().includes(`help`)?10:-1),Ut(),Cr(i.features().includes(`wfh`)?11:-1),Ut(),Cr(i.accessibility()?12:-1),Ut(),Cr(i.desk_height()?13:-1),Ut(3),Cr(i.features().includes(`parking-controls`)?16:-1),Ut(),Cr(i.locales().length>1?17:-1),Ut(),Cr(i.features().includes(`support-ticket`)?18:-1),Ut(4),To(` `,s6(23,22,`COMMON.CONTROLS_SIGN_OUT`),` `),Ut(2),Cr(i.has_new_version?24:-1),Ut(3),To(` `,s6(28,24,`COMMON.CONTROLS_VERSION`),`: `),Ut(2),Cr(i.show_changelog()?29:30),Ut(3),_1(` `,HD(33,26,i.version.time,`longDate`),` (`,HD(34,29,i.version.time,`shortTime`),`) `))},dependencies:[AF,Z7e,gm,Dw,VXe,he,Yt,mt,Mn,Ud,It,Ni,Gd,ba,x9,f],encapsulation:2})}}return n})();var bc=[`*`];function vc(n,o){n&1&&(Ar(0,`icon`,2),Ca$1(1,`person`),Rr())}function xc(n,o){if(n&1){let e=UD();Ar(0,`div`,1)(1,`button`,3),Bt(`click`,function(){I_(e);return A_(Vi$1().close())}),Rr(),Ar(2,`div`,4)(3,`div`,5),So(4,`user-controls`,6),Ar(5,`button`,7),Bt(`click`,function(){I_(e);return A_(Vi$1().close())}),Ar(6,`icon`,2),Ca$1(7,`close`),Rr()()()()()}if(n&2){let e=Vi$1();Ut(),gt(`opacity-50`,e.is_open())(`opacity-0`,!e.is_open()),Ut(2),gt(`translate-x-0`,e.is_open())(`translate-x-full`,!e.is_open()),Ut(),Ku(`sidebar`,!0)}}var Ma=(()=>{class n{constructor(){this._close_timeout=null,this.is_open=N(!1),this.is_rendered=N(!1)}open(){this._close_timeout&&(clearTimeout(this._close_timeout),this._close_timeout=null),this.is_rendered.set(!0),requestAnimationFrame(()=>this.is_open.set(!0))}close(){this.is_open.set(!1),this._close_timeout=setTimeout(()=>{this.is_rendered.set(!1),this._close_timeout=null},200)}onEscape(){this.is_open()&&this.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`user-controls-sidebar`]],hostBindings:function(t,i){t&1&&Bt(`keydown.escape`,function(){return i.onEscape()},Kq)},ngContentSelectors:bc,decls:4,vars:1,consts:[[`icon`,``,`matRipple`,``,`avatar`,``,`type`,`button`,`name`,`user-controls`,1,`bg-base-200`,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`rounded-full`,3,`click`],[1,`fixed`,`inset-0`,`z-9999`,`overflow-hidden`],[1,`text-2xl`],[`type`,`button`,`aria-label`,`Close user controls`,1,`absolute`,`inset-0`,`bg-black`,`transition-opacity`,`duration-200`,3,`click`],[1,`absolute`,`inset-y-0`,`right-0`,`flex`,`max-w-full`],[1,`bg-base-100`,`relative`,`h-full`,`w-80`,`max-w-[100vw]`,`overflow-auto`,`pt-[calc(env(safe-area-inset-top)+1rem)]`,`pb-[env(safe-area-inset-bottom)]`,`pr-[env(safe-area-inset-right)]`,`shadow-xl`,`transition-transform`,`duration-200`,`ease-out`],[3,`sidebar`],[`icon`,``,`default`,``,`matRipple`,``,`type`,`button`,1,`absolute`,`top-[calc(env(safe-area-inset-top)+0.5rem)]`,`right-[calc(env(safe-area-inset-right)+0.5rem)]`,3,`click`]],template:function(t,i){t&1&&(ei(),Ar(0,`button`,0),Bt(`click`,function(){return i.open()}),Tn$1(1,0,null,vc,2,0),Rr(),Dr(3,xc,8,9,`div`,1)),t&2&&(Ut(3),Cr(i.is_rendered()?3:-1))},dependencies:[gm,Dw,VXe,Sa],encapsulation:2})}}return n})();var kc=[`editor`];function yc(n,o){if(n&1){let e=UD();Ar(0,`button`,20),Bt(`click`,function(){I_(e);return A_(Vi$1(2).insertImage())}),Ar(1,`icon`),Ca$1(2,`image`),Rr()(),Ar(3,`button`,20),Bt(`click`,function(){I_(e);return A_(Vi$1(2).insertAttachment())}),Ar(4,`icon`),Ca$1(5,`attachment`),Rr()()}}function Cc(n,o){if(n&1){let e=UD();Ar(0,`div`,3)(1,`select`,5),Bt(`change`,function(i){I_(e);return A_(Vi$1().setFontFace(i))}),Ar(2,`option`,6),Ca$1(3,`Font`),Rr(),Ar(4,`option`,7),Ca$1(5,`Arial`),Rr(),Ar(6,`option`,8),Ca$1(7,`Helvetica`),Rr(),Ar(8,`option`,9),Ca$1(9,`Georgia`),Rr(),Ar(10,`option`,10),Ca$1(11,`Times New Roman`),Rr()(),Ar(12,`select`,11),Bt(`change`,function(i){I_(e);return A_(Vi$1().setFontSize(i))}),Ar(13,`option`,12),Ca$1(14,`Size`),Rr(),Ar(15,`option`,13),Ca$1(16,`12`),Rr(),Ar(17,`option`,14),Ca$1(18,`14`),Rr(),Ar(19,`option`,15),Ca$1(20,`16`),Rr(),Ar(21,`option`,16),Ca$1(22,`18`),Rr(),Ar(23,`option`,17),Ca$1(24,`24`),Rr(),Ar(25,`option`,18),Ca$1(26,`32`),Rr(),Ar(27,`option`,19),Ca$1(28,`48`),Rr()(),Ar(29,`button`,20),Bt(`click`,function(){I_(e);return A_(Vi$1().toggleBold())}),Ar(30,`icon`),Ca$1(31,`format_bold`),Rr()(),Ar(32,`button`,20),Bt(`click`,function(){I_(e);return A_(Vi$1().toggleItalic())}),Ar(33,`icon`),Ca$1(34,`format_italic`),Rr()(),Ar(35,`button`,20),Bt(`click`,function(){I_(e);return A_(Vi$1().toggleUnderline())}),Ar(36,`icon`),Ca$1(37,`format_underlined`),Rr()(),Ar(38,`button`,20),Bt(`click`,function(){I_(e);return A_(Vi$1().makeUnorderedList())}),Ar(39,`icon`),Ca$1(40,`format_list_bulleted`),Rr()(),Ar(41,`button`,20),Bt(`click`,function(){I_(e);return A_(Vi$1().makeOrderedList())}),Ar(42,`icon`),Ca$1(43,`format_list_numbered`),Rr()(),Ar(44,`button`,20),Bt(`click`,function(){I_(e);return A_(Vi$1().insertLink())}),Ar(45,`icon`),Ca$1(46,`link`),Rr()(),Dr(47,yc,6,0),Rr()}if(n&2){let e=Vi$1();Ut(29),gt(`border-info`,e.toolbar_state().bold)(`text-info`,e.toolbar_state().bold),Ut(3),gt(`border-info`,e.toolbar_state().italic)(`text-info`,e.toolbar_state().italic),Ut(3),gt(`border-info`,e.toolbar_state().underline)(`text-info`,e.toolbar_state().underline),Ut(3),gt(`border-info`,e.toolbar_state().unordered_list)(`text-info`,e.toolbar_state().unordered_list),Ut(3),gt(`border-info`,e.toolbar_state().ordered_list)(`text-info`,e.toolbar_state().ordered_list),Ut(3),gt(`border-info`,e.toolbar_state().link)(`text-info`,e.toolbar_state().link),Ut(3),Cr(e.images_allowed()?47:-1)}}var la=(()=>{class n extends Gi$1{constructor(){super(...arguments),this._uploads=g(fZe),this._dom_sanitizer=g(rh),this._ng_zone=g(ee),this.placeholder=bs$1(``),this.readonly=bs$1(!1),this.images_allowed=bs$1(!1),this._editor_el=KIe(`editor`),this._onChange=()=>{},this._onTouch=()=>{},this.toolbar_state=N({bold:!1,italic:!1,underline:!1,unordered_list:!1,ordered_list:!1,link:!1}),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e,this._syncValue=()=>{this._editor&&this.setValue(this._editor.getHTML())},this._handleTouched=()=>{this._editor&&this._onTouch()},this._refreshToolbarState=()=>{this._editor&&this._ng_zone.run(()=>{this.toolbar_state.set({bold:this._editor.hasFormat(`B`),italic:this._editor.hasFormat(`I`),underline:this._editor.hasFormat(`U`),unordered_list:this._editor.hasFormat(`UL`),ordered_list:this._editor.hasFormat(`OL`),link:this._editor.hasFormat(`A`)})})}}ngOnChanges(e){e.placeholder&&this.timeout(`init`,()=>this._initialiseEditor()),e.readonly&&this._editor&&this._setReadonlyState()}ngAfterViewInit(){this.timeout(`init`,()=>this._initialiseEditor())}setValue(e){this._onChange(e)}writeValue(e){this.timeout(`write`,()=>{this._editor?(this._editor.setHTML(e||``),this._setPlaceholder()):this.timeout(`write`,()=>this.writeValue(e))})}toggleBold(){this._toggleFormat(`B`,()=>this._editor.removeBold(),()=>this._editor.bold())}toggleItalic(){this._toggleFormat(`I`,()=>this._editor.removeItalic(),()=>this._editor.italic())}toggleUnderline(){this._toggleFormat(`U`,()=>this._editor.removeUnderline(),()=>this._editor.underline())}makeUnorderedList(){this._toggleFormat(`UL`,()=>this._editor.removeList(),()=>this._editor.makeUnorderedList())}makeOrderedList(){this._toggleFormat(`OL`,()=>this._editor.removeList(),()=>this._editor.makeOrderedList())}insertLink(){if(!this._editor)return;if(this._editor.hasFormat(`A`)){this._editor.removeLink(),this._syncValue(),this._refreshToolbarState();return}let e=prompt(`Enter URL`);e&&(this._editor.makeLink(e),this._syncValue(),this._refreshToolbarState())}setFontFace(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontFace(t==="default"?`inherit`:t),this._syncValue())}setFontSize(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontSize(t),this._syncValue())}insertImage(){this._embedFile(!0)}insertAttachment(){this._embedFile(!1)}async _initialiseEditor(){let e=this._editor_el()?.nativeElement;if(!e)return this.timeout(`init`,()=>this._initialiseEditor());let{default:t}=await import(`./squire-B0gBI6PO.js`);this._editor&&this._editor.destroy(),e.innerHTML=``,this._editor=new t(e,{blockTag:`div`,sanitizeToDOMFragment:i=>{let a=this._dom_sanitizer.sanitize(Ze.HTML,i||``)||``,d=document.createElement(`template`);return d.innerHTML=a,d.content.cloneNode(!0)}}),this._editor.addEventListener(`input`,this._syncValue),this._editor.addEventListener(`blur`,this._handleTouched),this._editor.addEventListener(`cursor`,this._refreshToolbarState),this._editor.addEventListener(`select`,this._refreshToolbarState),this._editor.addEventListener(`pathChange`,this._refreshToolbarState),this._setReadonlyState(),this._setPlaceholder(),this._refreshToolbarState()}_embedFile(e){if(!this._editor)return;let t=document.createElement(`input`);t.setAttribute(`type`,`file`),e&&t.setAttribute(`accept`,`image/*`),t.click(),t.onchange=()=>{let i=t.files?.[0];i&&this._uploads.uploadFile(i,!0).then(a=>{if(!a)return;let d=`${location.origin}/api/engine/v2/uploads/${encodeURIComponent(a)}/url`;this._setAuth(),setTimeout(()=>{this._insertUploadedFile(d,i,e),this._syncValue()},100)}).catch(a=>{a instanceof hT||IB(`Failed to upload ${i.name}: ${a?.message||`Unknown error`}`)})}}_setReadonlyState(){let e=this._editor_el()?.nativeElement;e&&e.setAttribute(`contenteditable`,`${!this.readonly()}`)}_setPlaceholder(){let e=this._editor_el()?.nativeElement;e&&e.setAttribute(`data-placeholder`,this.placeholder()||``)}_toggleFormat(e,t,i){this._editor&&(this._editor.hasFormat(e)?t():i(),this._syncValue(),this._refreshToolbarState())}_insertUploadedFile(e,t,i){let a=t.type.startsWith(`image/`);if(i||a){this._editor.insertHTML(`<img src="${e}" alt="${t.name}" />`);return}this._editor.insertHTML(`<a href="${e}" target="_blank">${t.name}</a>`)}_setAuth(){let e=dt();document.cookie=`${e===`x-api-key`?`api-key=`+encodeURIComponent(Oo()):`bearer_token=`+encodeURIComponent(e)};max-age=30;path=/api/engine/v2/uploads;samesite=strict;${location.protocol===`https:`?`secure;`:``}`}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=vt(n)))(i||n)}})()}static{this.ɵcmp=Ue({type:n,selectors:[[`rich-text-input`]],viewQuery:function(t,i){t&1&&r1(i._editor_el,kc,5),t&2&&u4()},inputs:{placeholder:[1,`placeholder`],readonly:[1,`readonly`],images_allowed:[1,`images_allowed`]},features:[Ht$1([{provide:qc,useExisting:Pt(()=>n),multi:!0}]),Ce,Rt],decls:5,vars:1,consts:[[`container`,``],[`editor`,``],[1,`w-full`],[1,`border-base-300`,`bg-base-100`,`flex`,`flex-wrap`,`items-center`,`gap-1`,`rounded-t`,`border`,`p-2`],[1,`squire-editor`],[1,`border-base-300`,`bg-base-100`,`rounded`,`border`,`p-2`,`text-sm`,3,`change`],[`value`,`default`],[`value`,`Arial`],[`value`,`Helvetica`],[`value`,`Georgia`],[`value`,`Times New Roman`],[1,`border-base-300`,`bg-base-100`,`min-w-24`,`rounded`,`border`,`p-2`,`text-sm`,3,`change`],[`value`,``],[`value`,`12px`],[`value`,`14px`],[`value`,`16px`],[`value`,`18px`],[`value`,`24px`],[`value`,`32px`],[`value`,`48px`],[`icon`,``,`type`,`button`,1,`border-base-300`,`rounded`,`border`,`px-2`,`py-1`,`text-sm`,3,`click`]],template:function(t,i){t&1&&(Ar(0,`div`,2,0),Dr(2,Cc,48,25,`div`,3),So(3,`div`,4,1),Rr()),t&2&&(Ut(2),Cr(i.readonly()?-1:2))},dependencies:[VXe],styles:[`[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]     .squire-editor{border-radius:.25rem;border:1px solid var(--%NS%base-300);padding:.5rem;min-height:8rem;width:100%;outline:none}[_nghost-%COMP%]     .squire-editor:empty:before{content:attr(data-placeholder);color:var(--%NS%base-content);opacity:.5}[_nghost-%COMP%]     .squire-editor ul{list-style-type:disc;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor ol{list-style-type:decimal;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor li{margin:.125rem 0}
/*# sourceMappingURL=rich-text-input.component.css.map */`]})}}return n})();var Sc=(n,o)=>o.id+``+n;function Mc(n,o){if(n&1&&(Ar(0,`a`,1)(1,`icon`,2),Ca$1(2),Rr(),Ar(3,`span`,3),Ca$1(4),Rr()()),n&2){let e=Vi$1().$implicit;Ku(`routerLink`,e.route),Ut(2),g1(e.icon),Ut(2),g1(e.name)}}function wc(n,o){if(n&1){let e=UD();Ar(0,`button`,6),Bt(`click`,function(){I_(e);let i=Vi$1(2).$implicit;return A_(Vi$1().toggleBlock(i.id||i._id))}),Ar(1,`icon`,2),Ca$1(2),Rr(),Ar(3,`div`,7),Ca$1(4),Rr(),Ar(5,`icon`,8),Ca$1(6,`arrow_drop_down`),Rr()()}if(n&2){let e=Vi$1(2).$implicit;Ut(2),To(` `,e.icon,` `),Ut(2),To(` `,e.name,` `)}}function Tc(n,o){if(n&1&&(Ar(0,`a`,10),So(1,`icon`,8),Ar(2,`span`),Ca$1(3),Rr()()),n&2){let e=o.$implicit;Ku(`routerLink`,e.route),Ut(3),g1(e.name)}}function Ec(n,o){if(n&1&&(Ar(0,`section`,9),Z8(1,Tc,4,2,`a`,10,K8),Rr()),n&2){let e=Vi$1(2).$implicit;gt(`contract-collapsed`,Vi$1().isBlockCollapsed(e.id||e._id)),Ut(),Q8(e.children)}}function Ic(n,o){if(n&1&&(Dr(0,wc,7,2,`button`,4),Dr(1,Ec,3,2,`section`,5)),n&2){let e=Vi$1().$implicit;Cr(e.children?.length?0:-1),Ut(),Cr(e.children?.length?1:-1)}}function Nc(n,o){if(n&1&&Dr(0,Mc,5,3,`a`,1)(1,Ic,2,2),n&2){let e=o.$implicit;Cr(e.children?1:0)}}var Ab=(()=>{class n extends Gi$1{constructor(){super(),this._settings=g(ks$1),this._org=g(Yb),this._element_ref=g(ue),this.show_block=N({}),this.links=[],this.filtered_links=N([]),St(()=>{this._org.active_building()&&this.timeout(`update_links`,()=>this.updateFilteredLinks(),500)})}get feature_list(){return this._settings.get(`app.features`)||[]}get feature_groups(){return this._settings.get(`app.feature_groups`)||{}}get is_admin(){let e=Yi$1().groups||[],t=this._settings.get(`app.admin_group`)||`admin`;return e.includes(t)||e.includes(`placeos_admin`)||e.includes(`placeos_support`)}async ngOnInit(){await this._org.waitUntilInitialised(),this.links=[{name:Zn$1(`APP.CONCIERGE.MENU_BOOKINGS`),icon:`add_circle`,children:[{id:`spaces`,name:Zn$1(`APP.CONCIERGE.MENU_ROOM_BOOKINGS`),route:[`/book/rooms`]},{id:`desks`,name:Zn$1(`APP.CONCIERGE.MENU_DESK_BOOKINGS`),route:[`/book/desks/events`]},{id:`parking`,name:Zn$1(`APP.CONCIERGE.MENU_PARKING_BOOKINGS`),route:[`/book/parking/events`]},{id:`parking-bookings`,name:Zn$1(`APP.CONCIERGE.MENU_PARKING_BOOKINGS`),route:[`/book/parking/events`]},{id:`lockers`,name:Zn$1(`APP.CONCIERGE.MENU_LOCKER_BOOKINGS`),route:[`/book/lockers/events`]},{id:`assets`,name:Zn$1(`APP.CONCIERGE.MENU_ASSET_BOOKINGS`),route:[`/book/assets/list/requests`]},{id:`catering`,name:Zn$1(`APP.CONCIERGE.MENU_CATERING_BOOKINGS`),route:[`/book/catering/orders`]},{id:`visitors`,name:Zn$1(`APP.CONCIERGE.MENU_VISITOR_BOOKINGS`),route:[`/book/visitors`]},{id:`visitor-rules`,name:Zn$1(`APP.CONCIERGE.MENU_VISITOR_RULES`),route:[`/book/visitors/rules`]}]},{id:`facilities`,name:Zn$1(`APP.CONCIERGE.MENU_MANAGEMENT`),icon:`place`,children:[{id:`zones`,name:Zn$1(`APP.CONCIERGE.MENU_MANAGE_ZONES`),route:[`/zone-management`]},{id:`spaces`,name:Zn$1(`APP.CONCIERGE.MENU_MANAGE_ROOMS`),route:[`/room-management`]},{id:`desks`,name:Zn$1(`APP.CONCIERGE.MENU_MANAGE_DESKS`),route:[`/book/desks/manage`]},{id:`parking`,name:Zn$1(`APP.CONCIERGE.MENU_MANAGE_PARKING`),route:[`/book/parking/manage`]},{id:`parking-manage`,name:Zn$1(`APP.CONCIERGE.MENU_MANAGE_PARKING`),route:[`/book/parking/manage`]},{id:`lockers`,name:Zn$1(`APP.CONCIERGE.MENU_MANAGE_LOCKERS`),route:[`/book/lockers/manage`]},{id:`catering`,name:Zn$1(`APP.CONCIERGE.MENU_MANAGE_CATERING`),route:[`/book/catering/menu`]},{id:`points`,name:Zn$1(`APP.CONCIERGE.MENU_MANAGE_POINTS`),route:[`/points-management`]},{id:`emergency-contacts`,name:Zn$1(`APP.CONCIERGE.MENU_MANAGE_CONTACTS`),icon:`assignment_ind`,route:[`/users/staff/emergency-contacts`]},{id:`signage`,name:Zn$1(`APP.CONCIERGE.MENU_MANAGE_SIGNAGE`),route:[`/signage`]},{id:`points-of-interest`,name:Zn$1(`APP.CONCIERGE.MENU_MANAGE_MAP_FEATURES`),route:[`/points-of-interest`]},{id:`url-management`,name:Zn$1(`APP.CONCIERGE.MENU_MANAGE_URLS`),route:[`/url-management`]},{id:`email-templates`,name:Zn$1(`APP.CONCIERGE.MENU_MANAGE_EMAILS`),route:[`/email-templates`]},{id:`deals-n-offers`,name:Zn$1(`APP.CONCIERGE.MENU_MANAGE_DEALS`),route:[`/deals-n-offers`]}]},{id:`assets`,name:Zn$1(`APP.CONCIERGE.MENU_ASSETS`),route:[`/book/assets/list/items`],icon:`vibration`},{id:`internal-users`,name:Zn$1(`APP.CONCIERGE.MENU_USER_LIST`),icon:`assignment_ind`,route:[`/users/staff`]},{id:`events`,name:Zn$1(`APP.CONCIERGE.MENU_EVENTS`),route:[`/entertainment/events`],icon:`confirmation_number`},{id:`surveys`,name:Zn$1(`APP.CONCIERGE.MENU_SURVEYS`),route:[`/surveys`],icon:`add_reaction`},{_id:`reports`,name:Zn$1(`APP.CONCIERGE.MENU_REPORTS`),icon:`analytics`,children:[{id:`attendance-report`,name:Zn$1(`APP.CONCIERGE.MENU_REPORT_SITE_ATTENDANCE`),route:[`/reports/attendance`]},{id:`booking-report`,name:Zn$1(`APP.CONCIERGE.MENU_REPORT_ROOMS`),route:[`/reports/bookings`]},{id:`desk-report`,name:Zn$1(`APP.CONCIERGE.MENU_REPORT_DESKS`),route:[`/reports/desks`]},{id:`parking-report`,name:Zn$1(`APP.CONCIERGE.MENU_REPORT_PARKING`),route:[`/reports/parking`]},{id:`lockers-report`,name:Zn$1(`APP.CONCIERGE.MENU_REPORT_LOCKERS`),route:[`/reports/lockers`]},{id:`catering-report`,name:Zn$1(`APP.CONCIERGE.MENU_REPORT_CATERING`),route:[`/reports/catering`]},{id:`contact-tracing-report`,name:Zn$1(`APP.CONCIERGE.MENU_REPORT_CONTACT_TRACING`),route:[`/reports/contact-tracing`]},{id:`assets-report`,name:Zn$1(`APP.CONCIERGE.MENU_REPORT_ASSETS`),route:[`/reports/assets`]},{id:`visitors-report`,name:Zn$1(`APP.CONCIERGE.MENU_REPORT_VISITORS`),route:[`/reports/visitors`]}]}],this.updateFilteredLinks(),this.timeout(`update_inview`,()=>this._moveActiveLinkIntoView(),50),this.timeout(`update_links`,()=>this.updateFilteredLinks(),500)}_isFeatureAvailable(e){if(e.startsWith(`*`))return!0;let t=this.feature_list.includes(e),i=this.feature_groups[e]||[],a=Yi$1().groups;return!!(t&&(this.is_admin||!i.length||a.find(d=>i.includes(d))))}updateFilteredLinks(){let e=this._settings.get(`app.custom_reports`)||[];if(e.length&&this.links.find(t=>t._id===`reports`)){let t=this.links.find(i=>i._id===`reports`);t.children=Pr$1(t.children.concat(e.map(i=>m(l({},i),{id:`*${i.id}`,route:[`/reports`,i.id]}))),`id`)}if(this.filtered_links.set(this.links.map(t=>m(l({},t),{children:t.children?t.children.filter(i=>this._isFeatureAvailable(i.id)):null})).filter(t=>(!t.id||t.id===`home`||this._isFeatureAvailable(t.id))&&t.route||t.children?.length)),this.filtered_links().find(t=>t.id===`home`)){let t=this.filtered_links().find(i=>i.id===`home`);t.route=this._settings.get(`app.default_route`)||[`/`]}this.is_admin||this.filtered_links.update(t=>t.filter(i=>i.id!==`facilities`))}toggleBlock(e){this.show_block.update(t=>m(l({},t),{[e]:!t[e]}))}isBlockCollapsed(e){return!!this.show_block()[e]}_moveActiveLinkIntoView(){let e=this._element_ref.nativeElement.querySelector(`a.active`);e&&e.scrollIntoView({block:`center`,behavior:`instant`})}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`app-sidebar`]],features:[Ce],decls:3,vars:0,consts:[[1,`border-base-200`,`h-full`,`w-64`,`overflow-auto`,`border-r`,`py-2`,`pr-3`],[`matRipple`,``,`routerLinkActive`,`active`,1,`hover:bg-base-200`,`my-1`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-r-full`,`p-1`,3,`routerLink`],[1,`text-2xl`,`opacity-60`],[1,`font-medium`],[`matRipple`,``,1,`hover:bg-base-200`,`my-1`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-r-full`,`p-1`],[1,`contract-expand`,`w-full`,3,`contract-collapsed`],[`matRipple`,``,1,`hover:bg-base-200`,`my-1`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-r-full`,`p-1`,3,`click`],[1,`flex-1`,`text-left`,`font-medium`],[1,`text-2xl`],[1,`contract-expand`,`w-full`],[`routerLinkActive`,`active`,1,`hover:bg-base-200`,`my-1`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-r-full`,`p-1`,3,`routerLink`]],template:function(t,i){t&1&&(Ar(0,`div`,0),Z8(1,Nc,2,1,null,null,Sc),Rr()),t&2&&(Ut(),Q8(i.filtered_links()))},dependencies:[mte,JS,lte,gm,Dw,VXe],styles:[`[_nghost-%COMP%]{height:100%}a.active[_ngcontent-%COMP%]{background-color:var(--%NS%secondary);color:var(--%NS%secondary-content)}a.active[_ngcontent-%COMP%]:hover{color:var(--%NS%base-content);opacity:.75}
/*# sourceMappingURL=app-sidebar.component.css.map */`]})}}return n})();var Oc=()=>[`/`];var Wb=(()=>{class n{constructor(){this._settings=g(ks$1),this._theme=this._settings.theme_signal,this._logo_dark=this._settings.signal(`app.logo_dark`,{},!0),this._logo_light=this._settings.signal(`app.logo_light`,{},!0),this.logo_src=Ie(()=>{let e=this.logo();return typeof e==`string`?e:e?.src||``}),this.logo=Ie(()=>(this._theme()===`dark`?this._logo_dark():this._logo_light())||{}),this.user=IJ()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=Ue({type:n,selectors:[[`app-topbar`]],decls:10,vars:4,consts:[[1,`border-base-200`,`flex`,`items-center`,`border-b`,`p-2`],[1,`w-64`],[3,`routerLink`],[`auth`,``,1,`h-12`,3,`source`],[1,`flex`,`flex-1`,`items-center`,`justify-end`,`space-x-2`],[`btn`,``,`icon`,``,`matRipple`,``],[1,`text-2xl`],[1,`mr-2`],[3,`user`]],template:function(t,i){t&1&&(Ar(0,`div`,0)(1,`div`,1)(2,`a`,2),So(3,`img`,3),Rr()(),Ar(4,`div`,4)(5,`button`,5)(6,`icon`,6),Ca$1(7,`notifications`),Rr()(),Ar(8,`user-controls-sidebar`,7),So(9,`a-user-avatar`,8),Rr()()()),t&2&&(Ut(2),Ku(`routerLink`,W4(3,Oc)),Ut(),Ku(`source`,i.logo_src()),Ut(6),Ku(`user`,i.user()))},dependencies:[mte,JS,Mn,gm,Dw,_t,VXe,Ma],styles:[`[_nghost-%COMP%]{width:100%}
/*# sourceMappingURL=app-topbar.component.css.map */`]})}}return n})();export{ut as C,zr as D,yn as E,ri as S,wn as T,li as _,Kr as a,qt as b,Sn as c,Yu as d,_t as f,la as g,kn as h,Ht as i,Tn as l,jt as m,Ab as n,Kt as o,ai as p,En as r,Mn as s,$t as t,Wb as u,oa as v,vs as w,ra as x,pa as y};
//# debugId=6471249c-3ac6-59a7-8b08-7001575c2cde
//# sourceMappingURL=chunk-BiMwX5vK.js.map