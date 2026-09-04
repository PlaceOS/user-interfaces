import{$a as Zm,$i as Vt,$l as so,$o as da$1,$s as ire,$t as Hne,Ac as lj,An as K2,Ar as Oe,At as GC,Au as vl$1,B as C8,Ba as Yo,Bl as rq,Bt as Grt,Ca as XFe,Cd as l,Ci as Stt,Cn as Jp,Ct as Ffe,Cu as unt,Dc as l_,Dn as Jt$1,Ds as fp,Dt as Fue,Ea as Xe,El as qj,Eo as b0,Et as Fr,Eu as vH,F as Bs$1,Fa as YC,Fc as lt,Fr as Ox,Fs as gp,Fu as w1e,G as Ci,Gi as V,Gl as s9,Gr as Pe,H as COe,Hc as ml$1,Hi as Unt,Hs as hf,Ht as Gt,I as Bt,Il as re,Io as cH,It as Ghe,J as Cw,Jl as sH,Jn as Ln,Jo as dI,Js as i9,Jt as HS,Ju as ws$1,K as Cn$1,Ki as VB,Kt as HC,Lc as m,Li as UW,Ll as rh,Ln as Kl$1,Lo as cJ,Lr as PE,Ls as gu,Ma as Xt$1,Mc as ln$1,Mn as KF,Mo as br,Ms as gj,No as bt,Nr as Os$1,Nu as vt,Oa as Xit,Oc as la$1,Oi as Te,Ol as qot,Os as ft,Ot as G,Pc as lre,Pn as KS,Ps as gn$1,Pu as w,Qa as Zl$1,Qc as o9,Ql as sn$1,Qo as d_,R as C0,Ra as Yj,Rn as Km,Ro as cLe,Rr as PJe,Rt as Gm,Ru as wN,Sa as XF,Sc as kn$1,Si as St,Sl as qP,Sn as Jo,So as aj,Sr as O,Ss as fPe,St as Fe,T as B1e,Ta as XT,Tn as Jre,To as b,Ua as Z,Uc as mu,Ui as Ut,Ut as H,Va as Yot,Vo as cl$1,Vt as Gs$1,Wi as Uue,Ws as hp,Xi as Ve,Xl as sa$1,Xn as Lr,Xu as x,Yn as Lo,Z as DE,Za as Za$1,Zl as sl$1,Zn as Lt,Zt as He,_ as Ai,_l as q,_n as JF,_r as Ne,_s as et,_t as En$1,ai as Qo,ao as _e,ar as Me,as as dt,b as Ake,ba as XB,bd as zot,bi as Snt,bn as JRe,br as Np,bu as ufe,ca as We,cc as jee,ci as R8,cs as eH,cu as tg,d as $v,dc as jt$1,dn as Ir,do as _u,dr as N1e,du as to,el as oH,fa as Wn$1,fc as jv,fd as ye,fn as Iue,ft as Ef,fu as ts$1,g as Ahe,gn as J4,go as aH,gs as es$1,gu as uE,hd as zC,hl as pu,ho as aC,ia as WC,ii as QT,is as dnt,it as Dn$1,jc as lm,js as ghe,k as BW,ka as Xn,kc as le,kr as Ode,lc as jm,ll as p7,lo as _ot,ls as eNe,lt as Dy,lu as ti$1,ma as Wot,mc as kJe,mi as Rt,ml as pt,mn as J,mo as a9,ms as ei$1,mt as Eke,nd as xe$1,nl as oe,nn as IE,no as Zv,nt as Dit,nu as t7,o as $e,oc as jT,od as xn$1,ol as p0,or as Mi,pd as yi,ps as eg,q as Ct$1,qa as ZA,qn as Le,qs as i7,ra as W9,rc as jC,rd as xi,rl as oie,rs as dm,sd as xq,sn as Ie,sr as Mj,t as $,ti as QJe,tn as I0,to as Zs$1,tr as ME,tt as Di,tu as t6,u as $o,uc as jrt,ul as pJ,uo as _p,ur as N,uu as tn$1,v as Ait,vd as ze$1,vs as f0,w as Ay,wd as m$1,wl as qe,wn as Jr,wr as OF,ws as fe,wt as Fm,x as Ant,xa as XE,xd as zt,xi as Sr,xo as aie,xt as FZ,xu as uh,yc as ke,yd as zo,yi as Sl$1,yo as ae,yu as u_,z as C1e,zi as Ue,zl as rot,zn as Ko,zo as ca$1,zt as Gn$1}from"./chunk-LAh-C4hK.js";function sa(n,o){let e=Ya(o)?new o(0):et(o,0);return e.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),e.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e}function Ya(n){return typeof n==`function`&&n.prototype?.constructor===n}var Qa=10;var Yi=class{subPriority=0;validate(o,e){return!0}};var Qi=class extends Yi{constructor(o,e,t,i,r){super(),this.value=o,this.validateValue=e,this.setValue=t,this.priority=i,r&&(this.subPriority=r)}validate(o,e){return this.validateValue(o,this.value,e)}set(o,e,t){return this.setValue(o,e,this.value,t)}};var Zi=class extends Yi{priority=Qa;subPriority=-1;constructor(o,e){super(),this.context=o||(t=>et(e,t))}set(o,e){return e.timestampIsSet?o:et(o,sa(o,this.context))}};var S=class{run(o,e,t,i){let r=this.parse(o,e,t,i);return r?{setter:new Qi(r.value,this.validate,this.set,this.priority,this.subPriority),rest:r.rest}:null}validate(o,e,t){return!0}};var Ji=class extends S{priority=140;parse(o,e,t){switch(e){case`G`:case`GG`:case`GGG`:return t.era(o,{width:`abbreviated`})||t.era(o,{width:`narrow`});case`GGGGG`:return t.era(o,{width:`narrow`});default:return t.era(o,{width:`wide`})||t.era(o,{width:`abbreviated`})||t.era(o,{width:`narrow`})}}set(o,e,t){return e.era=t,o.setFullYear(t,0,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`R`,`u`,`t`,`T`]};var z={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/};var ze={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function K(n,o){return n&&{value:o(n.value),rest:n.rest}}function U(n,o){let e=o.match(n);return e?{value:parseInt(e[0],10),rest:o.slice(e[0].length)}:null}function Ge(n,o){let e=o.match(n);if(!e)return null;if(e[0]===`Z`)return{value:0,rest:o.slice(1)};let t=e[1]===`+`?1:-1,i=e[2]?parseInt(e[2],10):0,r=e[3]?parseInt(e[3],10):0,d=e[5]?parseInt(e[5],10):0;return{value:t*(i*VB+r*$v+d*COe),rest:o.slice(e[0].length)}}function en(n){return U(z.anyDigitsSigned,n)}function D(n,o){switch(n){case 1:return U(z.singleDigit,o);case 2:return U(z.twoDigits,o);case 3:return U(z.threeDigits,o);case 4:return U(z.fourDigits,o);default:return U(new RegExp(`^\\d{1,`+n+`}`),o)}}function qt(n,o){switch(n){case 1:return U(z.singleDigitSigned,o);case 2:return U(z.twoDigitsSigned,o);case 3:return U(z.threeDigitsSigned,o);case 4:return U(z.fourDigitsSigned,o);default:return U(new RegExp(`^-?\\d{1,`+n+`}`),o)}}function jt(n){switch(n){case`morning`:return 4;case`evening`:return 17;case`pm`:case`noon`:case`afternoon`:return 12;default:return 0}}function tn(n,o){let e=o>0,t=e?o:1-o,i;if(t<=50)i=n||100;else{let r=t+50,d=Math.trunc(r/100)*100,x=n>=r%100;i=n+d-(x?100:0)}return e?i:1-i}function nn(n){return n%400===0||n%4===0&&n%100!==0}var on=class extends S{priority=130;incompatibleTokens=[`Y`,`R`,`u`,`w`,`I`,`i`,`e`,`c`,`t`,`T`];parse(o,e,t){let i=r=>({year:r,isTwoDigitYear:e===`yy`});switch(e){case`y`:return K(D(4,o),i);case`yo`:return K(t.ordinalNumber(o,{unit:`year`}),i);default:return K(D(e.length,o),i)}}validate(o,e){return e.isTwoDigitYear||e.year>0}set(o,e,t){let i=o.getFullYear();if(t.isTwoDigitYear){let d=tn(t.year,i);return o.setFullYear(d,0,1),o.setHours(0,0,0,0),o}let r=!(`era`in e)||e.era===1?t.year:1-t.year;return o.setFullYear(r,0,1),o.setHours(0,0,0,0),o}};var rn=class extends S{priority=130;parse(o,e,t){let i=r=>({year:r,isTwoDigitYear:e===`YY`});switch(e){case`Y`:return K(D(4,o),i);case`Yo`:return K(t.ordinalNumber(o,{unit:`year`}),i);default:return K(D(e.length,o),i)}}validate(o,e){return e.isTwoDigitYear||e.year>0}set(o,e,t,i){let r=Zv(o,i);if(t.isTwoDigitYear){let x=tn(t.year,r);return o.setFullYear(x,0,i.firstWeekContainsDate),o.setHours(0,0,0,0),Zs$1(o,i)}let d=!(`era`in e)||e.era===1?t.year:1-t.year;return o.setFullYear(d,0,i.firstWeekContainsDate),o.setHours(0,0,0,0),Zs$1(o,i)}incompatibleTokens=[`y`,`R`,`u`,`Q`,`q`,`M`,`L`,`I`,`d`,`D`,`i`,`t`,`T`]};var an=class extends S{priority=130;parse(o,e){return e===`R`?qt(4,o):qt(e.length,o)}set(o,e,t){let i=et(o,0);return i.setFullYear(t,0,4),i.setHours(0,0,0,0),ml$1(i)}incompatibleTokens=[`G`,`y`,`Y`,`u`,`Q`,`q`,`M`,`L`,`w`,`d`,`D`,`e`,`c`,`t`,`T`]};var sn=class extends S{priority=130;parse(o,e){return e===`u`?qt(4,o):qt(e.length,o)}set(o,e,t){return o.setFullYear(t,0,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`G`,`y`,`Y`,`R`,`w`,`I`,`i`,`e`,`c`,`t`,`T`]};var ln=class extends S{priority=120;parse(o,e,t){switch(e){case`Q`:case`QQ`:return D(e.length,o);case`Qo`:return t.ordinalNumber(o,{unit:`quarter`});case`QQQ`:return t.quarter(o,{width:`abbreviated`,context:`formatting`})||t.quarter(o,{width:`narrow`,context:`formatting`});case`QQQQQ`:return t.quarter(o,{width:`narrow`,context:`formatting`});default:return t.quarter(o,{width:`wide`,context:`formatting`})||t.quarter(o,{width:`abbreviated`,context:`formatting`})||t.quarter(o,{width:`narrow`,context:`formatting`})}}validate(o,e){return e>=1&&e<=4}set(o,e,t){return o.setMonth((t-1)*3,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`q`,`M`,`L`,`w`,`I`,`d`,`D`,`i`,`e`,`c`,`t`,`T`]};var cn=class extends S{priority=120;parse(o,e,t){switch(e){case`q`:case`qq`:return D(e.length,o);case`qo`:return t.ordinalNumber(o,{unit:`quarter`});case`qqq`:return t.quarter(o,{width:`abbreviated`,context:`standalone`})||t.quarter(o,{width:`narrow`,context:`standalone`});case`qqqqq`:return t.quarter(o,{width:`narrow`,context:`standalone`});default:return t.quarter(o,{width:`wide`,context:`standalone`})||t.quarter(o,{width:`abbreviated`,context:`standalone`})||t.quarter(o,{width:`narrow`,context:`standalone`})}}validate(o,e){return e>=1&&e<=4}set(o,e,t){return o.setMonth((t-1)*3,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`Q`,`M`,`L`,`w`,`I`,`d`,`D`,`i`,`e`,`c`,`t`,`T`]};var dn=class extends S{incompatibleTokens=[`Y`,`R`,`q`,`Q`,`L`,`w`,`I`,`D`,`i`,`e`,`c`,`t`,`T`];priority=110;parse(o,e,t){let i=r=>r-1;switch(e){case`M`:return K(U(z.month,o),i);case`MM`:return K(D(2,o),i);case`Mo`:return K(t.ordinalNumber(o,{unit:`month`}),i);case`MMM`:return t.month(o,{width:`abbreviated`,context:`formatting`})||t.month(o,{width:`narrow`,context:`formatting`});case`MMMMM`:return t.month(o,{width:`narrow`,context:`formatting`});default:return t.month(o,{width:`wide`,context:`formatting`})||t.month(o,{width:`abbreviated`,context:`formatting`})||t.month(o,{width:`narrow`,context:`formatting`})}}validate(o,e){return e>=0&&e<=11}set(o,e,t){return o.setMonth(t,1),o.setHours(0,0,0,0),o}};var mn=class extends S{priority=110;parse(o,e,t){let i=r=>r-1;switch(e){case`L`:return K(U(z.month,o),i);case`LL`:return K(D(2,o),i);case`Lo`:return K(t.ordinalNumber(o,{unit:`month`}),i);case`LLL`:return t.month(o,{width:`abbreviated`,context:`standalone`})||t.month(o,{width:`narrow`,context:`standalone`});case`LLLLL`:return t.month(o,{width:`narrow`,context:`standalone`});default:return t.month(o,{width:`wide`,context:`standalone`})||t.month(o,{width:`abbreviated`,context:`standalone`})||t.month(o,{width:`narrow`,context:`standalone`})}}validate(o,e){return e>=0&&e<=11}set(o,e,t){return o.setMonth(t,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`q`,`Q`,`M`,`w`,`I`,`D`,`i`,`e`,`c`,`t`,`T`]};function la(n,o,e){let t=Z(n,e?.in),i=eH(t,e)-o;return t.setDate(t.getDate()-i*7),Z(t,e?.in)}var pn=class extends S{priority=100;parse(o,e,t){switch(e){case`w`:return U(z.week,o);case`wo`:return t.ordinalNumber(o,{unit:`week`});default:return D(e.length,o)}}validate(o,e){return e>=1&&e<=53}set(o,e,t,i){return Zs$1(la(o,t,i),i)}incompatibleTokens=[`y`,`R`,`u`,`q`,`Q`,`M`,`L`,`I`,`d`,`D`,`i`,`t`,`T`]};function ca(n,o,e){let t=Z(n,e?.in),i=XB(t,e)-o;return t.setDate(t.getDate()-i*7),t}var un=class extends S{priority=100;parse(o,e,t){switch(e){case`I`:return U(z.week,o);case`Io`:return t.ordinalNumber(o,{unit:`week`});default:return D(e.length,o)}}validate(o,e){return e>=1&&e<=53}set(o,e,t){return ml$1(ca(o,t))}incompatibleTokens=[`y`,`Y`,`u`,`q`,`Q`,`M`,`L`,`w`,`d`,`D`,`e`,`c`,`t`,`T`]};var Za=[31,28,31,30,31,30,31,31,30,31,30,31];var Ja=[31,29,31,30,31,30,31,31,30,31,30,31];var _n=class extends S{priority=90;subPriority=1;parse(o,e,t){switch(e){case`d`:return U(z.date,o);case`do`:return t.ordinalNumber(o,{unit:`date`});default:return D(e.length,o)}}validate(o,e){let i=nn(o.getFullYear()),r=o.getMonth();return i?e>=1&&e<=Ja[r]:e>=1&&e<=Za[r]}set(o,e,t){return o.setDate(t),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`q`,`Q`,`w`,`I`,`D`,`i`,`e`,`c`,`t`,`T`]};var hn=class extends S{priority=90;subpriority=1;parse(o,e,t){switch(e){case`D`:case`DD`:return U(z.dayOfYear,o);case`Do`:return t.ordinalNumber(o,{unit:`date`});default:return D(e.length,o)}}validate(o,e){return nn(o.getFullYear())?e>=1&&e<=366:e>=1&&e<=365}set(o,e,t){return o.setMonth(0,t),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`q`,`Q`,`M`,`L`,`w`,`I`,`d`,`E`,`i`,`e`,`c`,`t`,`T`]};function $t(n,o,e){let t=Lr(),i=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,r=Z(n,e?.in),d=r.getDay(),O=(o%7+7)%7,$=7-i;return Ln(r,o<0||o>6?o-(d+$)%7:(O+$)%7-(d+$)%7,e)}var fn=class extends S{priority=90;parse(o,e,t){switch(e){case`E`:case`EE`:case`EEE`:return t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`});case`EEEEE`:return t.day(o,{width:`narrow`,context:`formatting`});case`EEEEEE`:return t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`});default:return t.day(o,{width:`wide`,context:`formatting`})||t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`})}}validate(o,e){return e>=0&&e<=6}set(o,e,t,i){return o=$t(o,t,i),o.setHours(0,0,0,0),o}incompatibleTokens=[`D`,`i`,`e`,`c`,`t`,`T`]};var gn=class extends S{priority=90;parse(o,e,t,i){let r=d=>{let x=Math.floor((d-1)/7)*7;return(d+i.weekStartsOn+6)%7+x};switch(e){case`e`:case`ee`:return K(D(e.length,o),r);case`eo`:return K(t.ordinalNumber(o,{unit:`day`}),r);case`eee`:return t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`});case`eeeee`:return t.day(o,{width:`narrow`,context:`formatting`});case`eeeeee`:return t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`});default:return t.day(o,{width:`wide`,context:`formatting`})||t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`})}}validate(o,e){return e>=0&&e<=6}set(o,e,t,i){return o=$t(o,t,i),o.setHours(0,0,0,0),o}incompatibleTokens=[`y`,`R`,`u`,`q`,`Q`,`M`,`L`,`I`,`d`,`D`,`E`,`i`,`c`,`t`,`T`]};var bn=class extends S{priority=90;parse(o,e,t,i){let r=d=>{let x=Math.floor((d-1)/7)*7;return(d+i.weekStartsOn+6)%7+x};switch(e){case`c`:case`cc`:return K(D(e.length,o),r);case`co`:return K(t.ordinalNumber(o,{unit:`day`}),r);case`ccc`:return t.day(o,{width:`abbreviated`,context:`standalone`})||t.day(o,{width:`short`,context:`standalone`})||t.day(o,{width:`narrow`,context:`standalone`});case`ccccc`:return t.day(o,{width:`narrow`,context:`standalone`});case`cccccc`:return t.day(o,{width:`short`,context:`standalone`})||t.day(o,{width:`narrow`,context:`standalone`});default:return t.day(o,{width:`wide`,context:`standalone`})||t.day(o,{width:`abbreviated`,context:`standalone`})||t.day(o,{width:`short`,context:`standalone`})||t.day(o,{width:`narrow`,context:`standalone`})}}validate(o,e){return e>=0&&e<=6}set(o,e,t,i){return o=$t(o,t,i),o.setHours(0,0,0,0),o}incompatibleTokens=[`y`,`R`,`u`,`q`,`Q`,`M`,`L`,`I`,`d`,`D`,`E`,`i`,`e`,`t`,`T`]};function da(n,o){let e=Z(n,o?.in).getDay();return e===0?7:e}function ma(n,o,e){let t=Z(n,e?.in);return Ln(t,o-da(t,e),e)}var vn=class extends S{priority=90;parse(o,e,t){let i=r=>r===0?7:r;switch(e){case`i`:case`ii`:return D(e.length,o);case`io`:return t.ordinalNumber(o,{unit:`day`});case`iii`:return K(t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`}),i);case`iiiii`:return K(t.day(o,{width:`narrow`,context:`formatting`}),i);case`iiiiii`:return K(t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`}),i);default:return K(t.day(o,{width:`wide`,context:`formatting`})||t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`}),i)}}validate(o,e){return e>=1&&e<=7}set(o,e,t){return o=ma(o,t),o.setHours(0,0,0,0),o}incompatibleTokens=[`y`,`Y`,`u`,`q`,`Q`,`M`,`L`,`w`,`d`,`D`,`E`,`e`,`c`,`t`,`T`]};var xn=class extends S{priority=80;parse(o,e,t){switch(e){case`a`:case`aa`:case`aaa`:return t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`});case`aaaaa`:return t.dayPeriod(o,{width:`narrow`,context:`formatting`});default:return t.dayPeriod(o,{width:`wide`,context:`formatting`})||t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`})}}set(o,e,t){return o.setHours(jt(t),0,0,0),o}incompatibleTokens=[`b`,`B`,`H`,`k`,`t`,`T`]};var kn=class extends S{priority=80;parse(o,e,t){switch(e){case`b`:case`bb`:case`bbb`:return t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`});case`bbbbb`:return t.dayPeriod(o,{width:`narrow`,context:`formatting`});default:return t.dayPeriod(o,{width:`wide`,context:`formatting`})||t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`})}}set(o,e,t){return o.setHours(jt(t),0,0,0),o}incompatibleTokens=[`a`,`B`,`H`,`k`,`t`,`T`]};var yn=class extends S{priority=80;parse(o,e,t){switch(e){case`B`:case`BB`:case`BBB`:return t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`});case`BBBBB`:return t.dayPeriod(o,{width:`narrow`,context:`formatting`});default:return t.dayPeriod(o,{width:`wide`,context:`formatting`})||t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`})}}set(o,e,t){return o.setHours(jt(t),0,0,0),o}incompatibleTokens=[`a`,`b`,`t`,`T`]};var Cn=class extends S{priority=70;parse(o,e,t){switch(e){case`h`:return U(z.hour12h,o);case`ho`:return t.ordinalNumber(o,{unit:`hour`});default:return D(e.length,o)}}validate(o,e){return e>=1&&e<=12}set(o,e,t){let i=o.getHours()>=12;return i&&t<12?o.setHours(t+12,0,0,0):!i&&t===12?o.setHours(0,0,0,0):o.setHours(t,0,0,0),o}incompatibleTokens=[`H`,`K`,`k`,`t`,`T`]};var Mn=class extends S{priority=70;parse(o,e,t){switch(e){case`H`:return U(z.hour23h,o);case`Ho`:return t.ordinalNumber(o,{unit:`hour`});default:return D(e.length,o)}}validate(o,e){return e>=0&&e<=23}set(o,e,t){return o.setHours(t,0,0,0),o}incompatibleTokens=[`a`,`b`,`h`,`K`,`k`,`t`,`T`]};var Sn=class extends S{priority=70;parse(o,e,t){switch(e){case`K`:return U(z.hour11h,o);case`Ko`:return t.ordinalNumber(o,{unit:`hour`});default:return D(e.length,o)}}validate(o,e){return e>=0&&e<=11}set(o,e,t){return o.getHours()>=12&&t<12?o.setHours(t+12,0,0,0):o.setHours(t,0,0,0),o}incompatibleTokens=[`h`,`H`,`k`,`t`,`T`]};var wn=class extends S{priority=70;parse(o,e,t){switch(e){case`k`:return U(z.hour24h,o);case`ko`:return t.ordinalNumber(o,{unit:`hour`});default:return D(e.length,o)}}validate(o,e){return e>=1&&e<=24}set(o,e,t){let i=t<=24?t%24:t;return o.setHours(i,0,0,0),o}incompatibleTokens=[`a`,`b`,`h`,`H`,`K`,`t`,`T`]};var Tn=class extends S{priority=60;parse(o,e,t){switch(e){case`m`:return U(z.minute,o);case`mo`:return t.ordinalNumber(o,{unit:`minute`});default:return D(e.length,o)}}validate(o,e){return e>=0&&e<=59}set(o,e,t){return o.setMinutes(t,0,0),o}incompatibleTokens=[`t`,`T`]};var En=class extends S{priority=50;parse(o,e,t){switch(e){case`s`:return U(z.second,o);case`so`:return t.ordinalNumber(o,{unit:`second`});default:return D(e.length,o)}}validate(o,e){return e>=0&&e<=59}set(o,e,t){return o.setSeconds(t,0),o}incompatibleTokens=[`t`,`T`]};var In=class extends S{priority=30;parse(o,e){let t=i=>Math.trunc(i*Math.pow(10,-e.length+3));return K(D(e.length,o),t)}set(o,e,t){return o.setMilliseconds(t),o}incompatibleTokens=[`t`,`T`]};var Nn=class extends S{priority=10;parse(o,e){switch(e){case`X`:return Ge(ze.basicOptionalMinutes,o);case`XX`:return Ge(ze.basic,o);case`XXXX`:return Ge(ze.basicOptionalSeconds,o);case`XXXXX`:return Ge(ze.extendedOptionalSeconds,o);default:return Ge(ze.extended,o)}}set(o,e,t){return e.timestampIsSet?o:et(o,o.getTime()-wN(o)-t)}incompatibleTokens=[`t`,`T`,`x`]};var On=class extends S{priority=10;parse(o,e){switch(e){case`x`:return Ge(ze.basicOptionalMinutes,o);case`xx`:return Ge(ze.basic,o);case`xxxx`:return Ge(ze.basicOptionalSeconds,o);case`xxxxx`:return Ge(ze.extendedOptionalSeconds,o);default:return Ge(ze.extended,o)}}set(o,e,t){return e.timestampIsSet?o:et(o,o.getTime()-wN(o)-t)}incompatibleTokens=[`t`,`T`,`X`]};var Rn=class extends S{priority=40;parse(o){return en(o)}set(o,e,t){return[et(o,t*1e3),{timestampIsSet:!0}]}incompatibleTokens=`*`};var Dn=class extends S{priority=20;parse(o){return en(o)}set(o,e,t){return[et(o,t),{timestampIsSet:!0}]}incompatibleTokens=`*`};var pa={G:new Ji,y:new on,Y:new rn,R:new an,u:new sn,Q:new ln,q:new cn,M:new dn,L:new mn,w:new pn,I:new un,d:new _n,D:new hn,E:new fn,e:new gn,c:new bn,i:new vn,a:new xn,b:new kn,B:new yn,h:new Cn,H:new Mn,K:new Sn,k:new wn,m:new Tn,s:new En,S:new In,X:new Nn,x:new On,t:new Rn,T:new Dn};var es=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;var ts=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;var is=/^'([^]*?)'?$/;var ns=/''/g;var os=/\S/;var rs=/[a-zA-Z]/;function ua(n,o,e,t){let i=()=>et(t?.in||e,NaN),r=fPe(),d=t?.locale??r.locale??Jp,x=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,O=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0;if(!o)return n?i():Z(e,t?.in);let $={firstWeekContainsDate:x,weekStartsOn:O,locale:d},ie=[new Zi(t?.in,e)],_e=o.match(ts).map(B=>{let Y=B[0];if(Y in oH){let De=oH[Y];return De(B,d.formatLong)}return B}).join(``).match(es),ke=[];for(let B of _e){!t?.useAdditionalWeekYearTokens&&aH(B)&&cH(B,o,n),!t?.useAdditionalDayOfYearTokens&&sH(B)&&cH(B,o,n);let Y=B[0],De=pa[Y];if(De){let{incompatibleTokens:Mo}=De;if(Array.isArray(Mo)){let So=ke.find(wo=>Mo.includes(wo.token)||wo.token===Y);if(So)throw new RangeError(`The format string mustn't contain \`${So.fullToken}\` and \`${B}\` at the same time`)}else if(De.incompatibleTokens===`*`&&ke.length>0)throw new RangeError(`The format string mustn't contain \`${B}\` and any other token at the same time`);ke.push({token:Y,fullToken:B});let Xn=De.run(n,B,d.match,$);if(!Xn)return i();ie.push(Xn.setter),n=Xn.rest}else{if(Y.match(rs))throw new RangeError("Format string contains an unescaped latin alphabet character `"+Y+"`");if(B===`''`?B=`'`:Y===`'`&&(B=as(B)),n.indexOf(B)===0)n=n.slice(B.length);else return i()}}if(n.length>0&&os.test(n))return i();let st=ie.map(B=>B.priority).sort((B,Y)=>Y-B).filter((B,Y,De)=>De.indexOf(B)===Y).map(B=>ie.filter(Y=>Y.priority===B).sort((Y,De)=>De.subPriority-Y.subPriority)).map(B=>B[0]),et$1=Z(e,t?.in);if(isNaN(+et$1))return i();let ni={};for(let B of st){if(!B.validate(et$1,$))return i();let Y=B.set(et$1,ni,$);Array.isArray(Y)?(et$1=Y[0],Object.assign(ni,Y[1])):et$1=Y}return et$1}function as(n){return n.match(is)[1].replace(ns,`'`)}var ss=[`determinateSpinner`];function ls(n,o){if(n&1&&(ZA(),ke(0,`svg`,11),Bt(1,`circle`,12),Ue()),n&2){let e=bt();$e(`viewBox`,e._viewBox()),fe(),zC(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),$e(`r`,e._circleRadius())}}var cs=new b(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:_a})});var _a=100;var ds=10;var Xt=(()=>{class n{_elementRef=m($);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=m(cs),t=aie(),i=this._elementRef.nativeElement;this._noopAnimations=t===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=i.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&t===`reduced-motion`&&i.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=_a;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-ds)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(t){return new(t||n)};static ɵcmp=_e({type:n,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(t,i){if(t&1&&kn$1(ss,5),t&2){let r;Te(r=Ie())&&(i._determinateCircle=r.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(t,i){t&2&&($e(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,i.mode===`determinate`?i.value:null)(`mode`,i.mode),Gs$1(`mat-`+i.color),zC(`width`,i.diameter,`px`)(`height`,i.diameter,`px`)(`--%NS%mat-progress-spinner-size`,i.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,i.diameter+`px`),Oe(`_mat-animation-noopable`,i._noopAnimations)(`mdc-circular-progress--indeterminate`,i.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,_u],diameter:[2,`diameter`,`diameter`,_u],strokeWidth:[2,`strokeWidth`,`strokeWidth`,_u]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(t,i){if(t&1&&(Wn$1(0,ls,2,8,`ng-template`,null,0,_p),ke(2,`div`,2,1),ZA(),ke(4,`svg`,3),Bt(5,`circle`,4),Ue()(),qP(),ke(6,`div`,5)(7,`div`,6)(8,`div`,7),hp(9,8),Ue(),ke(10,`div`,9),hp(11,8),Ue(),ke(12,`div`,10),hp(13,8),Ue()()()),t&2){let r=DE(1);fe(4),$e(`viewBox`,i._viewBox()),fe(),zC(`stroke-dasharray`,i._strokeCircumference(),`px`)(`stroke-dashoffset`,i._strokeDashOffset(),`px`)(`stroke-width`,i._circleStrokeWidth(),`%`),$e(`r`,i._circleRadius()),fe(4),Dn$1(`ngTemplateOutlet`,r),fe(2),Dn$1(`ngTemplateOutlet`,r),fe(2),Dn$1(`ngTemplateOutlet`,r)}},dependencies:[Np],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return n})();var Ct=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ae({type:n});static ɵinj=oe({imports:[Rt]})}return n})();var ms=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`];var ps=[`mat-icon, [matMenuItemIcon]`,`*`];function us(n,o){n&1&&(ZA(),ke(0,`svg`,2),Bt(1,`polygon`,3),Ue())}var _s=[`*`];function hs(n,o){if(n&1){let e=GC();ln$1(0,`div`,0),IE(`click`,function(){Ay(e);return Dy(bt().closed.emit(`click`))})(`animationstart`,function(i){Ay(e);return Dy(bt()._onAnimationStart(i.animationName))})(`animationend`,function(i){Ay(e);return Dy(bt()._onAnimationDone(i.animationName))})(`animationcancel`,function(i){Ay(e);return Dy(bt()._onAnimationDone(i.animationName))}),ln$1(1,`div`,1),Pe(2),gn$1()()}if(n&2){let e=bt();Gs$1(e._classList),Oe(`mat-menu-panel-animations-disabled`,e._animationsDisabled)(`mat-menu-panel-exit-animation`,e._panelAnimationState===`void`)(`mat-menu-panel-animating`,e._isAnimating()),xn$1(`id`,e.panelId),$e(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e.ariaLabelledby||null)(`aria-describedby`,e.ariaDescribedby||null)}}var uo=new b(`MAT_MENU_PANEL`);var rt=(()=>{class n{_elementRef=m($);_document=m(q);_focusMonitor=m(ts$1);_parentMenu=m(uo,{optional:!0});_changeDetectorRef=m(Ct$1);role=`menuitem`;disabled=!1;disableRipple=!1;_hovered=new O;_focused=new O;_highlighted=!1;_triggersSubmenu=!1;constructor(){m(En$1).load(Kl$1),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons`);for(let i=0;i<t.length;i++)t[i].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||n)};static ɵcmp=_e({type:n,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:8,hostBindings:function(t,i){t&1&&He(`click`,function(d){return i._checkDisabled(d)})(`mouseenter`,function(){return i._handleMouseEnter()}),t&2&&($e(`role`,i.role)(`tabindex`,i._getTabIndex())(`aria-disabled`,i.disabled)(`disabled`,i.disabled||null),Oe(`mat-mdc-menu-item-highlighted`,i._highlighted)(`mat-mdc-menu-item-submenu-trigger`,i._triggersSubmenu))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,ye],disableRipple:[2,`disableRipple`,`disableRipple`,ye]},exportAs:[`matMenuItem`],ngContentSelectors:ps,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(t,i){t&1&&(Xt$1(ms),Pe(0),ke(1,`span`,0),Pe(2,1),Ue(),Bt(3,`div`,1),Le(4,us,2,0,`:svg:svg`,2)),t&2&&(fe(3),Dn$1(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleTrigger`,i._getHostElement()),fe(),Fe(i._triggersSubmenu?4:-1))},dependencies:[C0],encapsulation:2})}return n})();var fs=new b(`MatMenuContent`);var gs=new b(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var mo=`_mat-menu-enter`;var An=`_mat-menu-exit`;var Je=(()=>{class n{_elementRef=m($);_changeDetectorRef=m(Ct$1);_injector=m(H);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=tn$1();_allItems;_directDescendantItems=new Bs$1;_classList={};_panelAnimationState=`void`;_animationDone=new O;_isAnimating=N(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,i=l({},this._classList);t&&t.length&&t.split(` `).forEach(r=>{i[r]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(r=>{i[r]=!0}),this._elementRef.nativeElement.className=``),this._classList=i}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new re;close=this.closed;panelId=m(Gt).getId(`mat-menu-panel-`);constructor(){let e=m(gs);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Km(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(Gn$1(this._directDescendantItems),Lt(e=>Os$1(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let i=e.toArray(),r=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[r]&&!i[r].disabled?t.setActiveItem(r):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Gn$1(this._directDescendantItems),Lt(t=>Os$1(...t.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,i=this._keyManager;switch(t){case 27:Xn(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&i.setFocusOrigin(`keyboard`),i.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=zt(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=m$1(l({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===An;(t||e===mo)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===mo||e===An)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(An),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?mo:An)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Gn$1(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||n)};static ɵcmp=_e({type:n,selectors:[[`mat-menu`]],contentQueries:function(t,i,r){if(t&1&&to(r,fs,5)(r,rt,5)(r,rt,4),t&2){let d;Te(d=Ie())&&(i.lazyContent=d.first),Te(d=Ie())&&(i._allItems=d),Te(d=Ie())&&(i.items=d)}},viewQuery:function(t,i){if(t&1&&kn$1(Ut,5),t&2){let r;Te(r=Ie())&&(i.templateRef=r.first)}},hostVars:3,hostBindings:function(t,i){t&2&&$e(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,ye],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,e=>e==null?null:ye(e)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[qe([{provide:uo,useExisting:n}])],ngContentSelectors:_s,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(t,i){t&1&&(Xt$1(),OF(0,hs,3,12,`ng-template`))},styles:[`mat-menu {
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
`],encapsulation:2})}return n})();var bs=new b(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=m(H);return()=>eg(n)}});var Kt=new WeakMap;var vs=(()=>{class n{_canHaveBackdrop;_element=m($);_viewContainerRef=m(Vt);_menuItemInstance=m(rt,{optional:!0,self:!0});_dir=m(Ir,{optional:!0});_focusMonitor=m(ts$1);_ngZone=m(G);_injector=m(H);_scrollStrategy=m(bs);_changeDetectorRef=m(Ct$1);_animationsDisabled=tn$1();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Me.EMPTY;_menuCloseSubscription=Me.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=m(uo,{optional:!0});this._parentMaterialMenu=t instanceof Je?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Kt.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let i=Kt.get(t);Kt.set(t,this),i&&i!==this&&i._closeMenu();let r=this._createOverlay(t),d=r.getConfig(),x=d.positionStrategy;this._setPosition(t,x),this._canHaveBackdrop?d.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:d.hasBackdrop=t.hasBackdrop??!1,r.hasAttached()||(r.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof Je&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(We(t.close)).subscribe(()=>{x.withLockedPosition(!1).reapplyLastPosition(),x.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,i=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof Je&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(lt(1)).subscribe(()=>{t.detach(),Kt.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(t.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&Kt.delete(i),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=la$1(this._injector,t),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof Je&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(e){return new ca$1({positionStrategy:tg(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let r=i.connectionPair.overlayX===`start`?`after`:`before`,d=i.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(r,d)})})}_setPosition(e,t){let[i,r]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[d,x]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[O,$]=[d,x],[ie,_e]=[i,r],ke=0;if(this._triggersSubmenu()){if(_e=i=e.xPosition===`before`?`start`:`end`,r=ie=i===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let st=this._parentMaterialMenu.items.first;this._parentInnerPadding=st?st._getHostElement().offsetTop:0}ke=d===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(O=d===`top`?`bottom`:`top`,$=x===`top`?`bottom`:`top`);t.withPositions([{originX:i,originY:O,overlayX:ie,overlayY:d,offsetY:ke},{originX:r,originY:O,overlayX:_e,overlayY:d,offsetY:ke},{originX:i,originY:$,overlayX:ie,overlayY:x,offsetY:-ke},{originX:r,originY:$,overlayX:_e,overlayY:x,offsetY:-ke}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments();return Os$1(e,this._parentMaterialMenu?this._parentMaterialMenu.closed:J(),this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(xe$1(d=>this._menuOpen&&d!==this._menuItemInstance)):J(),t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new xi(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return Kt.get(e)===this}_triggerIsAriaDisabled(){return ye(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){fp()};static ɵdir=x({type:n})}return n})();var at=(()=>{class n extends vs{_cleanupTouchstart;_hoverSubscription=Me.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new re;onMenuOpen=this.menuOpened;menuClosed=new re;onMenuClose=this.menuClosed;constructor(){super(!0);let e=m(Ve);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{Gm(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){jm(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||n)};static ɵdir=x({type:n,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,i){t&1&&He(`click`,function(d){return i._handleClick(d)})(`mousedown`,function(d){return i._handleMousedown(d)})(`keydown`,function(d){return i._handleKeydown(d)}),t&2&&$e(`aria-haspopup`,i.menu?`menu`:null)(`aria-expanded`,i.menuOpen)(`aria-controls`,i.menuOpen?i.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Ne]})}return n})();var Yt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ae({type:n});static ɵinj=oe({imports:[Zl$1,da$1,Rt,Zm]})}return n})();var ui=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new O;bulk={select:o=>this._select(o),deselect:o=>this._deselect(o),setSelection:o=>this._setSelection(o)};constructor(o=!1,e,t=!0,i){this._multiple=o,this._emitChanges=t,this.compareWith=i,e&&e.length&&(o?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...o){return this._select(o)}deselect(...o){return this._deselect(o)}setSelection(...o){return this._setSelection(o)}toggle(o){return this.isSelected(o)?this.deselect(o):this.select(o)}clear(o=!0){this._unmarkAll();let e=this._hasQueuedChanges();return o&&this._emitChangeEvent(),e}isSelected(o){return this._selection.has(this._getConcreteValue(o))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(o){this._multiple&&this.selected&&this._selected.sort(o)}isMultipleSelection(){return this._multiple}_select(o){this._verifyValueAssignment(o),o.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(o){this._verifyValueAssignment(o),o.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(o){this._verifyValueAssignment(o);let e=this.selected,t=new Set(o.map(r=>this._getConcreteValue(r)));o.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(o){o=this._getConcreteValue(o),this.isSelected(o)||(this._multiple||this._unmarkAll(),this.isSelected(o)||this._selection.add(o),this._emitChanges&&this._selectedToEmit.push(o))}_unmarkSelected(o){o=this._getConcreteValue(o),this.isSelected(o)&&(this._selection.delete(o),this._emitChanges&&this._deselectedToEmit.push(o))}_unmarkAll(){this.isEmpty()||this._selection.forEach(o=>this._unmarkSelected(o))}_verifyValueAssignment(o){o.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(o,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(o,t))return t;return o}else return o}};var ho=(()=>{class n{_listeners=[];notify(e,t){for(let i of this._listeners)i(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(t){return new(t||n)};static ɵprov=V({token:n,factory:n.ɵfac})}return n})();var ks=[`trigger`];var ys=[`panel`];var Cs=[[[`mat-select-trigger`]],`*`];var Ms=[`mat-select-trigger`,`*`];function Ss(n,o){if(n&1&&(ke(0,`span`,4),yi(1),Ue()),n&2){let e=bt();fe(),gu(e.placeholder)}}function ws(n,o){n&1&&Pe(0)}function Ts(n,o){if(n&1&&(ke(0,`span`,11),yi(1),Ue()),n&2){let e=bt(2);fe(),gu(e.triggerValue)}}function Es(n,o){if(n&1&&(ke(0,`span`,5),Le(1,ws,1,0)(2,Ts,2,1,`span`,11),Ue()),n&2){let e=bt();fe(),Fe(e.customTrigger?1:2)}}function Is(n,o){if(n&1){let e=GC();ke(0,`div`,12,1),He(`keydown`,function(i){Ay(e);return Dy(bt()._handleKeydown(i))}),Pe(2,1),Ue()}if(n&2){let e=bt();Gs$1(e.panelClass),Oe(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),$e(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var Ns=new b(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=m(H);return()=>eg(n)}});var Os=new b(`MAT_SELECT_CONFIG`);var ha=new b(`MatSelectTrigger`);var fo=class{source;value;constructor(o,e){this.source=o,this.value=e}};var Qt=(()=>{class n{_viewportRuler=m(hf);_changeDetectorRef=m(Ct$1);_elementRef=m($);_dir=m(Ir,{optional:!0});_idGenerator=m(Gt);_renderer=m(Ve);_parentFormField=m(u_,{optional:!0});ngControl=m(Fr,{self:!0,optional:!0});_liveAnnouncer=m(f0);_defaultOptions=m(Os,{optional:!0});_animationsDisabled=tn$1();_popoverLocation;_initialized=new O;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,r=dnt(e,this.options,this.optionGroups),d=t._getHostElement();e===0&&r===1?i.scrollTop=0:i.scrollTop=unt(d.offsetTop,d.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new fo(this,e)}_scrollStrategyFactory=m(Ns);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new O;_errorStateTracker;stateChanges=new O;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=N(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator($o.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=ws$1(()=>{let e=this.options;return e?e.changes.pipe(Gn$1(e),Lt(()=>Os$1(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Lt(()=>this.optionSelectionChanges))});openedChange=new re;_openedStream=this.openedChange.pipe(xe$1(e=>e),le(()=>{}));_closedStream=this.openedChange.pipe(xe$1(e=>!e),le(()=>{}));selectionChange=new re;valueChange=new re;constructor(){let e=m(l_),t=m(lm,{optional:!0}),i=m(dm,{optional:!0}),r=m(new ME(`tabindex`),{optional:!0}),d=m(I0,{optional:!0}),x=m(uh,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new rh(e,x||this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=d?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new ui(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(We(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(We(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Gn$1(null),We(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute(`aria-labelledby`,e):i.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(lt(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,r=>{r.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,r=t===13||t===32,d=this._keyManager;if(!d.isTyping()&&r&&!Xn(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let x=this.selected;d.onKeydown(e);let O=this.selected;O&&x!==O&&this._liveAnnouncer.announce(O.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,r=i===40||i===38,d=t.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!d&&(i===13||i===32)&&t.activeItem&&!Xn(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!d&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let x=this.options.some(O=>!O.disabled&&!O.selected);this.options.forEach(O=>{O.disabled||(x?O.select():O.deselect())})}else{let x=t.activeItemIndex;t.onKeydown(e),this._multiple&&r&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==x&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Xn(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof b0?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new p0(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Os$1(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(We(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Os$1(...this.options.map(t=>t._stateChanges)).pipe(We(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=br(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||n)};static ɵcmp=_e({type:n,selectors:[[`mat-select`]],contentQueries:function(t,i,r){if(t&1&&to(r,ha,5)(r,UW,5)(r,Uue,5),t&2){let d;Te(d=Ie())&&(i.customTrigger=d.first),Te(d=Ie())&&(i.options=d),Te(d=Ie())&&(i.optionGroups=d)}},viewQuery:function(t,i){if(t&1&&kn$1(ks,5)(ys,5)(oie,5),t&2){let r;Te(r=Ie())&&(i.trigger=r.first),Te(r=Ie())&&(i.panel=r.first),Te(r=Ie())&&(i._overlayDir=r.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(t,i){t&1&&He(`keydown`,function(d){return i._handleKeydown(d)})(`focus`,function(){return i._onFocus()})(`blur`,function(){return i._onBlur()}),t&2&&($e(`id`,i.id)(`tabindex`,i.disabled?-1:i.tabIndex)(`aria-controls`,i.panelOpen?i.id+`-panel`:null)(`aria-expanded`,i.panelOpen)(`aria-label`,i.ariaLabel||null)(`aria-required`,i.required.toString())(`aria-disabled`,i.disabled.toString())(`aria-invalid`,i.errorState)(`aria-activedescendant`,i._getAriaActiveDescendant()),Oe(`mat-mdc-select-disabled`,i.disabled)(`mat-mdc-select-invalid`,i.errorState)(`mat-mdc-select-required`,i.required)(`mat-mdc-select-empty`,i.empty)(`mat-mdc-select-multiple`,i.multiple)(`mat-select-open`,i.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,ye],disableRipple:[2,`disableRipple`,`disableRipple`,ye],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:_u(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,ye],placeholder:`placeholder`,required:[2,`required`,`required`,ye],multiple:[2,`multiple`,`multiple`,ye],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,ye],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,_u],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,ye]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[qe([{provide:d_,useExisting:n},{provide:Fue,useExisting:n}]),St],ngContentSelectors:Ms,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(t,i){if(t&1&&(Xt$1(Cs),ke(0,`div`,2,0),He(`click`,function(){return i.open()}),ke(3,`div`,3),Le(4,Ss,2,1,`span`,4)(5,Es,3,1,`span`,5),Ue(),ke(6,`div`,6)(7,`div`,7),ZA(),ke(8,`svg`,8),Bt(9,`path`,9),Ue()()()(),Wn$1(10,Is,3,16,`ng-template`,10),He(`detach`,function(){return i.close()})(`backdropClick`,function(){return i.close()})(`overlayKeydown`,function(d){return i._handleOverlayKeydown(d)})),t&2){let r=DE(1);fe(3),$e(`id`,i._valueId),fe(),Fe(i.empty?4:5),fe(6),Dn$1(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,i._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,i._scrollStrategy)(`cdkConnectedOverlayOrigin`,i._preferredOverlayOrigin||r)(`cdkConnectedOverlayPositions`,i._positions)(`cdkConnectedOverlayWidth`,i._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,i._popoverLocation)}},dependencies:[b0,oie],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return n})();var Q_=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=x({type:n,selectors:[[`mat-select-trigger`]],features:[qe([{provide:ha,useExisting:n}])]})}return n})();var Zt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ae({type:n});static ɵinj=oe({imports:[da$1,Snt,Rt,Zm,Ox,Snt]})}return n})();var Rs=[`input`];var Ds=[`*`];var bo={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var As=new b(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>bo});var xe=(function(n){return n[n.Init=0]=`Init`,n[n.Checked=1]=`Checked`,n[n.Unchecked=2]=`Unchecked`,n[n.Indeterminate=3]=`Indeterminate`,n})(xe||{});var vo=class{source;checked};var _i=(()=>{class n{_elementRef=m($);_changeDetectorRef=m(Ct$1);_ngZone=m(G);_animationsDisabled=tn$1();_options=m(As,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new vo;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new re;indeterminateChange=new re;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=xe.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){m(En$1).load(Kl$1);let e=m(new ME(`tabindex`),{optional:!0});this._options=this._options||bo,this.color=this._options.color||bo.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=m(Gt).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(xe.Indeterminate):this._transitionCheckState(this.checked?xe.Checked:xe.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=N(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,i=this._getAnimationTargetElement();if(!(t===e||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let r=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(r)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?xe.Checked:xe.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return``;switch(e){case xe.Init:if(t===xe.Checked)return this._animationClasses.uncheckedToChecked;if(t==xe.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case xe.Unchecked:return t===xe.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case xe.Checked:return t===xe.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case xe.Indeterminate:return t===xe.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(t){return new(t||n)};static ɵcmp=_e({type:n,selectors:[[`mat-checkbox`]],viewQuery:function(t,i){if(t&1&&kn$1(Rs,5),t&2){let r;Te(r=Ie())&&(i._inputElement=r.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(t,i){t&2&&(xn$1(`id`,i.id),$e(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),Gs$1(i.color?`mat-`+i.color:`mat-accent`),Oe(`_mat-animation-noopable`,i._animationsDisabled)(`mdc-checkbox--disabled`,i.disabled)(`mat-mdc-checkbox-disabled`,i.disabled)(`mat-mdc-checkbox-checked`,i.checked)(`mat-mdc-checkbox-disabled-interactive`,i.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,ye],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,ye],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,ye],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?void 0:_u(e)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ye],checked:[2,`checked`,`checked`,ye],disabled:[2,`disabled`,`disabled`,ye],indeterminate:[2,`indeterminate`,`indeterminate`,ye]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[qe([{provide:zo,useExisting:sn$1(()=>n),multi:!0},{provide:Yo,useExisting:n,multi:!0}]),St],ngContentSelectors:Ds,decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,i){if(t&1&&(Xt$1(),ke(0,`label`,3),He(`click`,function(d){return i._preventBubblingFromLabel(d)}),ke(1,`span`,4,0),Bt(3,`span`,5),ke(4,`input`,6,1),He(`blur`,function(){return i._onBlur()})(`click`,function(){return i._onInputClick()})(`change`,function(d){return i._onInteractionEvent(d)}),Ue(),Bt(6,`span`,7),ke(7,`span`,8),ZA(),ke(8,`svg`,9),Bt(9,`path`,10),Ue(),qP(),Bt(10,`span`,11),Ue(),Bt(11,`span`,12),Ue(),ke(12,`span`,13,2),Pe(14),Ue()()),t&2){let r=DE(2);Dn$1(`labelPosition`,i.labelPosition)(`for`,i.inputId),fe(4),Oe(`mdc-checkbox--selected`,i.checked),Dn$1(`checked`,i.checked)(`indeterminate`,i.indeterminate)(`disabled`,i.disabled&&!i.disabledInteractive)(`id`,i.inputId)(`required`,i.required)(`tabIndex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex),$e(`aria-label`,i.ariaLabel||null)(`aria-labelledby`,i.ariaLabelledby)(`aria-describedby`,i.ariaDescribedby)(`aria-checked`,i.indeterminate?`mixed`:null)(`aria-controls`,i.ariaControls)(`aria-disabled`,i.disabled&&i.disabledInteractive?!0:null)(`aria-expanded`,i.ariaExpanded)(`aria-owns`,i.ariaOwns)(`name`,i.name)(`value`,i.value),fe(7),Dn$1(`matRippleTrigger`,r)(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleCentered`,!0)}},dependencies:[C0,Ant],styles:[`.mdc-checkbox {
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
`],encapsulation:2})}return n})();var Un=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ae({type:n});static ɵinj=oe({imports:[_i,Rt]})}return n})();var Ps=[`*`];function Fs(n,o){if(n&1&&(ke(0,`div`,3),yi(1),Ue()),n&2){let e=bt();fe(),gu(e.info())}}function Vs(n,o){if(n&1&&(ke(0,`icon`,4),yi(1,`info`),Ue()),n&2)Dn$1(`matTooltip`,bt().info())}function Ls(n,o){n&1&&Bt(0,`div`,5)}function Bs(n,o){if(n&1&&(ke(0,`div`,6)(1,`div`,8)(2,`div`,9)(3,`icon`),yi(4),Ue()()()()),n&2){let e=bt();fe(),Oe(`bg-base-200`,!e.value())(`bg-info`,e.value())(`border-info!`,e.value()),fe(),Oe(`left-1`,!e.value())(`left-5`,e.value())(`bg-base-400`,!e.value())(`bg-info-light`,e.value()),fe(2),gu(e.value()?`done`:`remove`)}}function Us(n,o){if(n&1){let e=GC();ke(0,`mat-checkbox`,10),He(`ngModelChange`,function(i){Ay(e);return Dy(bt().setValue(i))}),Ue(),J4()}if(n&2)Dn$1(`ngModel`,bt().value()),t6()}var ga=(()=>{class n{constructor(){this.toggle=Jt$1(void 0),this.label=Jt$1(void 0),this.info=Jt$1(void 0),this.inline=Jt$1(!0),this.value=N(void 0),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e}setValue(e){this.value.set(e),this._onChange&&this._onChange(e)}writeValue(e){this.value.set(e)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=_e({type:n,selectors:[[`settings-toggle`]],inputs:{toggle:[1,`toggle`],label:[1,`label`],info:[1,`info`],inline:[1,`inline`]},features:[qe([{provide:zo,useExisting:sn$1(()=>n),multi:!0}])],ngContentSelectors:Ps,decls:11,vars:13,consts:[[`type`,`button`,`matRipple`,``,1,`hover:bg-base-200`,`relative`,`flex`,`flex-1`,`items-center`,`space-x-2`,`overflow-hidden`,`rounded-sm`,`border`,`py-1`,`pr-1`,`pl-2`,3,`click`],[1,`z-10`,`flex`,`flex-1`,`items-center`,`space-x-2`,`px-2`,`text-left`],[1,`flex`,`flex-col`,`justify-center`,`w-full`,`leading-none`,`h-full`],[1,`text-xs`,`opacity-30`],[3,`matTooltip`],[1,`bg-info`,`absolute`,`inset-0`,`z-0`,`m-0!`,`opacity-10`],[1,`px-2`],[1,`pointer-events-none`,3,`ngModel`],[`toggle`,``,1,`border-base-400`,`relative`,`h-8`,`w-12`,`rounded-full`,`border-2`],[1,`absolute`,`top-1/2`,`flex`,`h-6`,`w-6`,`-translate-x-0.5`,`-translate-y-1/2`,`items-center`,`justify-center`,`rounded-full`,`text-black`,`shadow-sm`],[1,`pointer-events-none`,3,`ngModelChange`,`ngModel`]],template:function(t,i){t&1&&(Xt$1(),ke(0,`button`,0),He(`click`,function(){return i.setValue(!i.value())}),ke(1,`div`,1)(2,`div`,2)(3,`div`),yi(4),Pe(5),Ue(),Le(6,Fs,2,1,`div`,3),Ue(),Le(7,Vs,2,1,`icon`,4),Ue(),Le(8,Ls,1,0,`div`,5),Le(9,Bs,5,15,`div`,6)(10,Us,1,1,`mat-checkbox`,7),Ue()),t&2&&(Oe(`border-base-300`,!i.value())(`border-info`,i.value()),fe(),Oe(`py-2`,!i.inline())(`py-1`,!i.inline()),fe(3),gu(i.label()),fe(2),Fe(i.info()&&i.inline()?6:-1),fe(),Fe(i.info()&&!i.inline()?7:-1),fe(),Fe(i.value()?8:-1),fe(),Fe(i.toggle()?9:10))},dependencies:[Un,_i,Ake,Eke,jee,Unt,Xit,ghe],styles:[`[_nghost-%COMP%]{display:flex}[toggle][_ngcontent-%COMP%]{transition:background .2s,left .2s}
/*# sourceMappingURL=settings-toggle.component.css.map */`]})}}return n})();var ei=new Map;var zs=`PlaceOS.image-cache-v1`;var va=`PlaceOS.image-cache-keys-v1`;var Jt=null;function xa(){if(Jt)return Jt;if(typeof sessionStorage>`u`)return[];try{let n=sessionStorage.getItem(va);return Jt=n?JSON.parse(n):[],Jt}catch{return[]}}function Gs(n){if(Jt=Array.from(new Set(n)),!(typeof sessionStorage>`u`))try{sessionStorage.setItem(va,JSON.stringify(Jt))}catch{}}async function ka(){if(typeof caches>`u`)return null;try{return await caches.open(zs)}catch{return null}}async function Hs(n){if(!xa().includes(n))return null;let o=await ka();if(!o)return null;try{return await o.match(n)||null}catch{return null}}async function Ws(n,o){let e=await ka();if(e)try{await e.put(n,o),Gs([...xa(),n])}catch{}}function qs(n){let o=jt$1();document.cookie=`${o===`x-api-key`?`api-key=`+encodeURIComponent(Qo()):`bearer_token=`+encodeURIComponent(o)};max-age=30;path=${n};samesite=strict;${location.protocol===`https:`?`secure;`:``}`}function js(){let n=jt$1();return n===`x-api-key`?{"X-API-Key":Qo()}:{Authorization:`Bearer ${n}`}}async function ba(n,o){let e=await o.blob(),t=URL.createObjectURL(e);return ei.set(n,t),t}async function ya(n,o){return Ma(n,()=>(qs(o),fetch(n)))}async function Ca(n){return Ma(n,()=>fetch(n,{headers:js()}))}async function Ma(n,o){if(ei.has(n))return ei.get(n);let e=await Hs(n);if(e)return ba(n,e);let t=await o();if(!t||!t.ok)throw new Error(`Failed to fetch image: ${t?.status}`);return Ws(n,t.clone()),ba(n,t)}var Mt=(()=>{class n extends so{constructor(){super(),this._element=m($),this.source=Jt$1(void 0)}ngOnChanges(e){e.source&&this.source()&&this._loadImage()}async _loadImage(){let e=this.source();if(typeof e!=`string`)return;if(!this._element||!Ko())return this.timeout(`load`,()=>this._loadImage(),300);if(!this._isLocalUrl(e)){this._element.nativeElement.src=e;return}if(ei.has(e)){this._element.nativeElement.src=ei.get(e);return}let t=e.includes(`/api/engine/v2/uploads`)||e.includes(`/api/engine/v2/signage`);try{this._element.nativeElement.src=t?await ya(e,this._cookiePath(e)):await Ca(e)}catch(i){this._element.nativeElement.dispatchEvent(new ErrorEvent(`error`,{error:i}))}}_isLocalUrl(e){try{return new URL(e,location.href).origin===location.origin}catch{return!1}}_cookiePath(e){return e.includes(`/api/engine/v2/uploads`)?`/api/engine/v2/uploads`:`/api/engine/v2/signage`}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵdir=x({type:n,selectors:[[`img`,`auth`,``],[`video`,`auth`,``],[`audio`,`auth`,``]],inputs:{source:[1,`source`]},features:[Ne,St]})}}return n})();var $s=[`*`];function Xs(n,o){n&1&&(ke(0,`button`,7)(1,`icon`),yi(2,`close`),Ue()())}function Ks(n,o){if(n&1&&Le(0,Xs,3,0,`button`,7),n&2)Fe(bt(2).loading()?-1:0)}function Ys(n,o){if(n&1&&(ke(0,`a`,8)(1,`icon`),yi(2,`close`),Ue()()),n&2)Dn$1(`routerLink`,bt(3).close())}function Qs(n,o){if(n&1&&Le(0,Ys,3,1,`a`,8),n&2)Fe(bt(2).loading()?-1:0)}function Zs(n,o){if(n&1&&Le(0,Ks,1,1)(1,Qs,1,1),n&2)Fe(bt().close()?.length?1:0)}function Js(n,o){n&1&&(Pe(0),Bt(1,`div`,9))}function el(n,o){if(n&1&&(ke(0,`div`,5),Bt(1,`mat-spinner`,10),ke(2,`p`,11),yi(3),Ue()()),n&2){let e=bt();fe(),Dn$1(`diameter`,32),fe(2),gu(e.loading())}}function tl(n,o){if(n&1&&(ke(0,`kbd`,14),yi(1),Ue()),n&2){let e=bt(2);fe(),gu(e.confirm_hotkey())}}function il(n,o){if(n&1){let e=GC();ke(0,`footer`,12)(1,`button`,13),He(`click`,function(){Ay(e);return Dy(bt().confirm.emit())}),yi(2),gp(3,`translate`),Le(4,tl,2,1,`kbd`,14),Ue()()}if(n&2){let e=bt();Oe(`max-w-156`,!e.full_width()),fe(),Dn$1(`disabled`,e.confirm_disabled()),fe(),Lo(` `,e.confirm_text()||YC(3,5,`COMMON.SAVE`),` `),fe(2),Fe(e.confirm_hotkey()?4:-1)}}var zn=(()=>{class n{constructor(){this.loading=Jt$1(``),this.heading=Jt$1(`Fullscreen Modal`),this.confirm_text=Jt$1(``),this.confirm_hotkey=Jt$1(``),this.confirm_disabled=Jt$1(!1),this.close=Jt$1([]),this.hide_confirm=Jt$1(!1),this.hide_close=Jt$1(!1),this.full_width=Jt$1(!1),this.confirm=JRe(),this.closed=JRe()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=_e({type:n,selectors:[[`fullscreen-modal-shell`],[``,`fs-modal-shell`,``]],inputs:{loading:[1,`loading`],heading:[1,`heading`],confirm_text:[1,`confirm_text`],confirm_hotkey:[1,`confirm_hotkey`],confirm_disabled:[1,`confirm_disabled`],close:[1,`close`],hide_confirm:[1,`hide_confirm`],hide_close:[1,`hide_close`],full_width:[1,`full_width`]},outputs:{confirm:`confirm`,closed:`closed`},ngContentSelectors:$s,decls:10,vars:14,consts:[[`cdkScrollable`,``,1,`bg-base-200`,`fixed`,`inset-0`,`flex`,`flex-col`,`items-center`,`overflow-auto`,`px-2`],[1,`border-base-300`,`bg-base-100`,`fixed`,`top-0`,`mx-auto`,`h-screen`,`max-w-full`,`border-x`],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`mx-auto`,`my-2`,`flex`,`h-14`,`w-full`,`items-center`,`justify-between`,`rounded-sm`,`border-none`,`px-4`,`py-2`],[1,`flex`,`items-center`,`text-xl`,`font-medium`,`capitalize`,3,`innerHTML`],[1,`z-0`,`mx-auto`,`h-1/2`,`w-full`,`flex-1`,`space-y-8`,`p-2`],[1,`flex`,`h-1/2`,`w-full`,`flex-1`,`flex-col`,`items-center`,`justify-center`,`space-y-4`,`p-12`],[1,`bg-base-200`,`fixed`,`bottom-0`,`left-1/2`,`z-10`,`mx-auto`,`my-2`,`flex`,`w-full`,`-translate-x-1/2`,`items-center`,`justify-end`,`rounded-sm`,`border-none`,`px-4`,`py-2`,3,`max-w-156`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[`icon`,``,`matRipple`,``,3,`routerLink`],[1,`h-24`,`w-full`],[3,`diameter`],[1,`text-center`,`opacity-50`],[1,`bg-base-200`,`fixed`,`bottom-0`,`left-1/2`,`z-10`,`mx-auto`,`my-2`,`flex`,`w-full`,`-translate-x-1/2`,`items-center`,`justify-end`,`rounded-sm`,`border-none`,`px-4`,`py-2`],[`btn`,``,`matRipple`,``,1,`flex`,`min-w-32`,`items-center`,`justify-center`,`gap-2`,3,`click`,`disabled`],[1,`border-base-300`,`bg-base-100`,`text-base-content`,`rounded`,`border`,`px-2`,`py-1`,`text-xs`,`leading-none`,`shadow-sm`]],template:function(t,i){t&1&&(Xt$1(),ke(0,`div`,0),Bt(1,`div`,1),ke(2,`header`,2),Bt(3,`h2`,3),gp(4,`sanitize`),Le(5,Zs,2,1),Ue(),ke(6,`main`,4),Le(7,Js,2,0)(8,el,4,2,`div`,5),Ue(),Le(9,il,5,7,`footer`,6),Ue()),t&2&&(fe(),Oe(`w-160`,!i.full_width())(`w-full`,i.full_width()),fe(),Oe(`max-w-156`,!i.full_width()),fe(),Dn$1(`innerHTML`,YC(4,12,i.heading()),aC),fe(2),Fe(i.hide_close()?-1:5),fe(),Oe(`max-w-156`,!i.full_width()),fe(),Fe(i.loading()?8:7),fe(2),Fe(!i.loading()&&!i.hide_confirm()?9:-1))},dependencies:[Jre,Ct,Xt,Unt,PJe,kJe,Zl$1,C0,pJ,jv,rot,xq],styles:[`main[_ngcontent-%COMP%]{scroll-margin-top:60px}
/*# sourceMappingURL=fullscreen-modal-shell.component.css.map */`]})}}return n})();var nl=[`input`];var ol=[`formField`];var rl=[`*`];var Gn=class{source;value;constructor(o,e){this.source=o,this.value=e}};var al={provide:zo,useExisting:sn$1(()=>hi),multi:!0};var wa=new b(`MatRadioGroup`);var sl=new b(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var hi=(()=>{class n{_changeDetector=m(Ct$1);_value=null;_name=m(Gt).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new re;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Gn(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(t){return new(t||n)};static ɵdir=x({type:n,selectors:[[`mat-radio-group`]],contentQueries:function(t,i,r){if(t&1&&to(r,ti,5),t&2){let d;Te(d=Ie())&&(i._radios=d)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,ye],required:[2,`required`,`required`,ye],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ye]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[qe([al,{provide:wa,useExisting:n}])]})}return n})();var ti=(()=>{class n{_elementRef=m($);_changeDetector=m(Ct$1);_focusMonitor=m(ts$1);_radioDispatcher=m(ho);_defaultOptions=m(sl,{optional:!0});_ngZone=m(G);_renderer=m(Ve);_uniqueId=m(Gt).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new re;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=tn$1();_injector=m(H);constructor(){m(En$1).load(Kl$1);let e=m(wa,{optional:!0}),t=m(new ME(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=_u(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new Gn(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let i=this._inputElement?.nativeElement;i&&(i.setAttribute(`tabindex`,t+``),this._previousTabIndex=t,zt(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===i&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===i&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(t){return new(t||n)};static ɵcmp=_e({type:n,selectors:[[`mat-radio-button`]],viewQuery:function(t,i){if(t&1&&kn$1(nl,5)(ol,7,$),t&2){let r;Te(r=Ie())&&(i._inputElement=r.first),Te(r=Ie())&&(i._rippleTrigger=r.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(t,i){t&1&&He(`focus`,function(){return i._inputElement.nativeElement.focus()}),t&2&&($e(`id`,i.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),Oe(`mat-primary`,i.color===`primary`)(`mat-accent`,i.color===`accent`)(`mat-warn`,i.color===`warn`)(`mat-mdc-radio-checked`,i.checked)(`mat-mdc-radio-disabled`,i.disabled)(`mat-mdc-radio-disabled-interactive`,i.disabledInteractive)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,ye],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:_u(e)],checked:[2,`checked`,`checked`,ye],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,ye],required:[2,`required`,`required`,ye],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ye]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:rl,decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,i){t&1&&(Xt$1(),ke(0,`label`,2,0)(2,`span`,3),Bt(3,`span`,4),ke(4,`input`,5,1),He(`change`,function(d){return i._onInputInteraction(d)}),Ue(),ke(6,`span`,6),Bt(7,`span`,7)(8,`span`,8),Ue(),ke(9,`span`,9),Bt(10,`span`,10),Ue()(),ke(11,`span`,11),Pe(12),Ue()()),t&2&&(Dn$1(`labelPosition`,i.labelPosition)(`for`,i.inputId),fe(2),Oe(`mdc-radio--disabled`,i.disabled),fe(2),Dn$1(`id`,i.inputId)(`checked`,i.checked)(`disabled`,i.disabled&&!i.disabledInteractive)(`required`,i.required),$e(`name`,i.name)(`value`,i.value)(`aria-label`,i.ariaLabel)(`aria-labelledby`,i.ariaLabelledby)(`aria-describedby`,i.ariaDescribedby)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null),fe(5),Dn$1(`matRippleTrigger`,i._rippleTrigger.nativeElement)(`matRippleDisabled`,i._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[C0,Ant],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})}return n})();var Hn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ae({type:n});static ɵinj=oe({imports:[Zl$1,ti,Rt]})}return n})();var Ea=(()=>{class n{constructor(){this.url=m(Ode)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=_e({type:n,selectors:[[`image-viewer`]],decls:5,vars:1,consts:[[1,`bg-base-200`,`h-screen`,`w-screen`],[`auth`,``,1,`h-full`,`w-full`,`object-contain`,`object-center`,3,`source`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``,1,`bg-base-100`,`absolute`,`top-1`,`right-1`]],template:function(t,i){t&1&&(ke(0,`div`,0),Bt(1,`img`,1),ke(2,`button`,2)(3,`icon`),yi(4,`close`),Ue()()()),t&2&&(fe(),Dn$1(`source`,i.url))},dependencies:[Unt,Mt,PJe,kJe],encapsulation:2})}}return n})();var ll=(n,o,e)=>({file:n,is_public:o,permissions:e});function cl(n,o){if(n&1){let e=GC();ke(0,`div`,7)(1,`label`),yi(2,`Permissions`),Ue(),ke(3,`mat-form-field`,11)(4,`mat-select`,12),He(`ngModelChange`,function(i){Ay(e);return Dy(bt().permissions.set(i))}),ke(5,`mat-option`,13),yi(6,`None`),Ue(),ke(7,`mat-option`,14),yi(8,`Support`),Ue(),ke(9,`mat-option`,15),yi(10,`Admin`),Ue()(),J4(),Ue()()}if(n&2){let e=bt();fe(4),Dn$1(`ngModel`,e.permissions()),t6()}}var Na=(()=>{class n{constructor(){this._dialog_ref=m(QT),this._data=m(Ode),this.file=this._data.file,this.is_public=N(!!this._data.is_public),this.permissions=N(`none`),this.file=this._data.file}close(){this._dialog_ref.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=_e({type:n,selectors:[[`upload-permissions-modal`]],decls:18,vars:7,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[1,`min-w-[20rem]`,`space-y-2`,`px-4`,`py-2`],[1,`flex`,`flex-col`],[`appearance`,`outline`,1,`no-subscript`],[`matInput`,``,`disabled`,`true`,`placeholder`,`File Name`,3,`ngModel`],[1,`flex`,`flex-col`,`space-y-2`],[1,`border-base-200`,`flex`,`items-center`,`justify-end`,`space-x-2`,`border-t`,`px-4`,`py-2`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`w-32`],[`btn`,``,`matRipple`,``,1,`w-32`,3,`mat-dialog-close`],[`appearance`,`outline`],[3,`ngModelChange`,`ngModel`],[`value`,`none`],[`value`,`support`],[`value`,`admin`]],template:function(t,i){t&1&&(ke(0,`header`,0)(1,`h2`,1),yi(2,`Upload File`),Ue(),ke(3,`button`,2)(4,`icon`),yi(5,`close`),Ue()()(),ke(6,`main`,3)(7,`div`,4)(8,`label`),yi(9,`File Name`),Ue(),ke(10,`mat-form-field`,5),Bt(11,`input`,6),J4(),Ue()(),Le(12,cl,11,1,`div`,7),Ue(),ke(13,`footer`,8)(14,`button`,9),yi(15,` Cancel `),Ue(),ke(16,`button`,10),yi(17,` Upload `),Ue()()),t&2&&(fe(11),Dn$1(`ngModel`,i.file.name),t6(),fe(),Fe(i.is_public()?-1:12),fe(4),Dn$1(`mat-dialog-close`,i7(3,ll,i.file,i.is_public(),i.permissions())))},dependencies:[PJe,kJe,Ox,rq,Ake,vH,Eke,jee,Zt,Qt,UW,Unt,Dit,Ait,Zl$1,C0],encapsulation:2})}}return n})();var dl=[`image_list`];var ml=[`file_input`];function pl(n,o){if(n&1){let e=GC();ke(0,`div`,15),Bt(1,`img`,16),ke(2,`div`,17),Bt(3,`div`,18),ke(4,`div`,19)(5,`button`,20),He(`click`,function(){let i=Ay(e).$implicit;return Dy(bt().copyLink(i))}),ke(6,`icon`),yi(7,`link`),Ue()(),ke(8,`button`,20),He(`click`,function(){let i=Ay(e).$implicit;return Dy(bt().viewImage(i))}),ke(9,`icon`),yi(10,`visibility`),Ue()(),ke(11,`button`,20),He(`click`,function(){let i=Ay(e).$implicit;return Dy(bt().removeImage(i))}),ke(12,`icon`),yi(13,`close`),Ue()()()()()}if(n&2){let e=o.$implicit;zC(`transform`,`translate(-`+bt().offset()+`00%)`),fe(),Dn$1(`source`,e)}}function ul(n,o){if(n&1&&Bt(0,`mat-progress-spinner`,22),n&2){let e=bt().$implicit;Dn$1(`value`,e.progress)(`diameter`,64)}}function _l(n,o){n&1&&(ke(0,`icon`,23),yi(1,`warning`),Ue())}function hl(n,o){n&1&&(ke(0,`div`,24)(1,`icon`,25),yi(2,`refresh`),Ue()())}function fl(n,o){if(n&1){let e=GC();ke(0,`div`,21),He(`click`,function(){let i=Ay(e).$implicit;return Dy(bt().retryUpload(i))}),Le(1,ul,1,2,`mat-progress-spinner`,22),Le(2,_l,2,0,`icon`,23),Le(3,hl,3,0,`div`,24),Ue()}if(n&2){let e=o.$implicit;zC(`transform`,`translate(-`+bt().offset()+`00%)`),Dn$1(`matTooltip`,e.error),fe(),Fe(e.error?-1:1),fe(),Fe(e.error?2:-1),fe(),Fe(e.error?3:-1)}}function gl(n,o){if(n&1){let e=GC();ke(0,`button`,26),He(`click`,function(){Ay(e);return Dy(bt().previousOffset())}),ke(1,`icon`),yi(2,`chevron_left`),Ue()()}if(n&2)Dn$1(`disabled`,bt().offset()===0)}function bl(n,o){if(n&1){let e=GC();ke(0,`button`,27),He(`click`,function(){Ay(e);return Dy(bt().nextOffset())}),ke(1,`icon`),yi(2,`chevron_right`),Ue()()}if(n&2){let e=bt();Dn$1(`disabled`,e.offset()>=e.length()-e.view_space())}}function vl(n,o){if(n&1){let e=GC();ke(0,`mat-chip-row`,28),He(`removed`,function(){let i=Ay(e).$implicit;return Dy(bt().removeImage(i))}),ke(1,`div`,29),yi(2),Ue(),ke(3,`button`,30)(4,`icon`),yi(5,`cancel`),Ue()()()}if(n&2){let e=o.$implicit;fe(2),gu(e),fe(),$e(`aria-label`,`Remove `+e)}}var Oa=(()=>{class n extends so{constructor(){super(...arguments),this._clipboard=m(qj),this._uploads=m(QJe),this._dialog=m(XT),this._injector=m(H),this._upload_completion_effect=Xe(()=>{let e=this.upload_list(),t=this.upload_ids();for(let i of t){let r=e.find(d=>d?.id===i);r&&r.progress>=100&&(this.addImageUrl(r.link),this.upload_ids.set(this.upload_ids().filter(d=>d!==i)))}},{injector:this._injector}),this.list=N([]),this.upload_map={},this.upload_ids=N([]),this.upload_list=N([]),this.offset=N(0),this.view_space=N(0),this.separators=[188,13],this.uploads=w(()=>{let e=this.upload_ids();return this.upload_list().filter(t=>e.includes(t?.id))}),this.length=w(()=>this.list().length+this.upload_list().length+1),this._list_el=sl$1(`image_list`),this._file_input=sl$1(`file_input`),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e}ngAfterViewInit(){this.updateViewSpace()}updateViewSpace(){this.timeout(`init_view_space`,()=>{let e=this._list_el()?.nativeElement?.getBoundingClientRect();e&&this.view_space.set(Math.floor(e.width/152))},100)}copyLink(e){this._clipboard.copy(e),lj(`Copied image URL to clipboard`)}viewImage(e){this._dialog.open(Ea,{data:e})}removeImage(e){this.setValue(this.list().filter(t=>t!==e))}addImage(e){e.value&&(this.setValue(ei$1([...this.list(),e.value])),e.chipInput.inputElement.value=``)}addImageUrl(e){this.setValue(ei$1([...this.list(),e]))}retryUpload(e){e.error&&(e.error=null,e.upload.resume())}previousOffset(){this.offset.update(e=>e-1)}nextOffset(){this.offset.update(e=>e+1)}async uploadImages(e){let t=e.target;if(t?.files){let i=t.files;if(i.length){this.interval(`update_status`,()=>this._updateUploadHistory());for(let r=0;r<i.length;r++)try{let d=await this._uploads.uploadFileWithPermissions(i[r]);this.upload_ids.set([...this.upload_ids(),d])}catch(d){if(d instanceof dI)continue;aj(`Failed to upload ${i[r].name}: ${d?.message||`Unknown error`}`)}this._file_input().nativeElement.value=``}}}setValue(e){let t=e||[];this.list.set(t),this._onChange&&this._onChange(t)}writeValue(e){this.list.set(e||[])}async _updateUploadHistory(){let e=this.upload_ids();if(e.length===0)return;let i=this._uploads.upload_list().filter(d=>e.find(x=>x===d?.id)),r=i.filter(d=>d.progress>=100);this.upload_list.set(i),r.forEach(d=>{console.log(`ID:`,l({},d)),this.upload_map[d?.id]=d.upload?.id||d?.id,delete d.upload}),r.length>=e.length&&this.clearInterval(`update_status`)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=pt(n)))(i||n)}})()}static{this.ɵcmp=_e({type:n,selectors:[[`image-list-field`]],viewQuery:function(t,i){t&1&&pu(i._list_el,dl,5)(i._file_input,ml,5),t&2&&mu(2)},features:[qe([{provide:zo,useExisting:sn$1(()=>n),multi:!0},{provide:Iue,useValue:Na}]),Ne],decls:23,vars:13,consts:[[`image_list`,``],[`file_input`,``],[`chipList`,``],[`images`,``,1,`relative`,`mb-2`,`flex`,`w-full`,`items-center`,`space-x-2`,`overflow-hidden`,`py-2`,3,`resize`],[`image`,``,1,`border-base-200`,`hover:border-base-300`,`hover:bg-base-200`,`relative`,`flex`,`h-32`,`w-36`,`shrink-0`,`cursor-pointer`,`flex-col`,`items-center`,`justify-center`,`rounded-xl`,`border-2`,`border-dashed`],[1,`text-4xl`,`opacity-60`],[1,`px-4`,`text-center`,`opacity-60`],[`type`,`file`,1,`absolute`,`inset-0`,`h-32`,`w-32`,`cursor-pointer`,`opacity-0`,3,`change`],[`image`,``,1,`bg-base-200`,`relative`,`h-32`,`w-36`,`shrink-0`,`overflow-hidden`,`rounded-sm`,`bg-cover`,`bg-center`,3,`transform`],[`upload`,``,1,`border-base-content/10`,`/5`,`bg-base-200`,`flex`,`h-32`,`w-36`,`shrink-0`,`items-center`,`justify-center`,`rounded-sm`,`border`,`bg-cover`,`bg-center`,3,`transform`,`matTooltip`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`left-0`,`-translate-y-1/2`,`transform`,3,`disabled`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`right-0`,`-translate-y-1/2`,`transform`,3,`disabled`],[`appearance`,`outline`,1,`w-full`],[`aria-label`,`Image List`],[3,`matChipInputTokenEnd`,`placeholder`,`matChipInputFor`,`matChipInputSeparatorKeyCodes`,`matChipInputAddOnBlur`],[`image`,``,1,`bg-base-200`,`relative`,`h-32`,`w-36`,`shrink-0`,`overflow-hidden`,`rounded-sm`,`bg-cover`,`bg-center`],[`auth`,``,1,`pointer-events-none`,`absolute`,`top-1/2`,`left-1/2`,`z-10`,`-translate-x-1/2`,`-translate-y-1/2`,`object-contain`,3,`source`],[`overlay`,``,1,`text-base-100`,`absolute`,`inset-0`,`z-20`],[`bg`,``,1,`absolute`,`inset-0`,`bg-black`,`opacity-0`],[`actions`,``,1,`absolute`,`top-0`,`right-0`,`left-0`,`flex`,`items-center`,`justify-center`,`space-x-2`,`opacity-0`],[`icon`,``,3,`click`],[`upload`,``,1,`border-base-content/10`,`/5`,`bg-base-200`,`flex`,`h-32`,`w-36`,`shrink-0`,`items-center`,`justify-center`,`rounded-sm`,`border`,`bg-cover`,`bg-center`,3,`click`,`matTooltip`],[`mode`,`determinate`,3,`value`,`diameter`],[1,`text-error`,`text-6xl`],[`overlay`,``,1,`text-base-100`,`hover:bg-base-content`,`hover:bg-opacity-50`,`absolute`,`inset-0`,`flex`,`items-center`,`justify-center`],[1,`text-3xl`,`opacity-0`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`left-0`,`-translate-y-1/2`,`transform`,3,`click`,`disabled`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`right-0`,`-translate-y-1/2`,`transform`,3,`click`,`disabled`],[3,`removed`],[1,`max-w-md`,`truncate`],[`matChipRemove`,``]],template:function(t,i){if(t&1&&(ke(0,`div`,3,0),He(`resize`,function(){return i.updateViewSpace()},C8),ke(2,`div`,4)(3,`icon`,5),yi(4,`add`),Ue(),ke(5,`p`,6),yi(6),gp(7,`translate`),Ue(),ke(8,`input`,7,1),He(`change`,function(d){return i.uploadImages(d)}),Ue()(),s9(10,pl,14,3,`div`,8,o9),s9(12,fl,4,6,`div`,9,o9),Le(14,gl,3,1,`button`,10),Le(15,bl,3,1,`button`,11),Ue(),ke(16,`mat-form-field`,12)(17,`mat-chip-grid`,13,2),s9(19,vl,6,2,`mat-chip-row`,null,o9),Ue(),ke(21,`input`,14),gp(22,`translate`),He(`matChipInputTokenEnd`,function(d){return i.addImage(d)}),Ue()()),t&2){let r=DE(18);fe(2),zC(`transform`,`translate(-`+i.offset()+`00%)`),fe(4),Lo(` `,YC(7,9,`COMMON.IMAGE_UPLOADS`),` `),fe(4),a9(i.list()),fe(2),a9(i.uploads()),fe(2),Fe(i.length()>i.view_space()?14:-1),fe(),Fe(i.length()>i.view_space()?15:-1),fe(4),a9(i.list()),fe(2),Dn$1(`placeholder`,YC(22,11,`COMMON.IMAGE_ADD_URL`))(`matChipInputFor`,r)(`matChipInputSeparatorKeyCodes`,i.separators)(`matChipInputAddOnBlur`,!0)}},dependencies:[Ox,rq,qot,Yot,Wot,zot,Ghe,Ct,Xt,Xit,ghe,Unt,Mt,rot],styles:[`[_nghost-%COMP%]{width:100%}[overlay][_ngcontent-%COMP%]{transition:background .2s}[image][_ngcontent-%COMP%]:hover   [actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%]:hover > icon[_ngcontent-%COMP%]{opacity:1!important}[image][_ngcontent-%COMP%]:hover   [bg][_ngcontent-%COMP%]{opacity:.4!important}[actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%] > icon[_ngcontent-%COMP%]{transition:opacity .2s}[image][_ngcontent-%COMP%]{transition:transform .2s}
/*# sourceMappingURL=image-list-field.component.css.map */`]})}}return n})();function xl(n,o){if(n&1&&(Bt(0,`div`,1),gp(1,`safe`)),n&2)Dn$1(`innerHTML`,WC(1,1,bt().changelog(),`html`),aC)}function kl(n,o){n&1&&(ke(0,`div`,2)(1,`icon`,3),yi(2,`close`),Ue(),ke(3,`div`,4),yi(4,`No changelog`),Ue()())}var Ra=(()=>{class n{constructor(){this._data=m(Ode),this.loading=N(!1),this.changelog=w(()=>dt(this._data.changelog||``,{async:!1}))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=_e({type:n,selectors:[[`changelog-modal`]],decls:3,vars:3,consts:[[3,`heading`,`hide_confirm`],[1,`markdown`,3,`innerHTML`],[1,`flex`,`flex-col`,`items-center`,`justify-center`,`space-y-2`],[1,`text-3xl`],[1,`text`]],template:function(t,i){t&1&&(ke(0,`fullscreen-modal-shell`,0),Le(1,xl,2,4,`div`,1)(2,kl,5,0,`div`,2),Ue()),t&2&&(Dn$1(`heading`,`Changelog`)(`hide_confirm`,!0),fe(),Fe(i.changelog()?1:2))},dependencies:[zn,Unt,BW],encapsulation:2})}}return n})();function yl(n,o){if(n&1&&(ke(0,`div`,1),yi(1),Ue()),n&2){let e=bt(2);fe(),Lo(` `,e.initials,` `)}}function Cl(n,o){if(n&1&&Bt(0,`img`,2),n&2){let e=bt(2);Dn$1(`alt`,e.initials)(`source`,e.user().photo)}}function Ml(n,o){if(n&1&&(ke(0,`div`,0),Le(1,yl,2,1,`div`,1)(2,Cl,1,2,`img`,2),Ue()),n&2){let e=bt();$e(`user-id`,e.user().id),fe(),Fe(e.user().photo?2:1)}}var Wn=(()=>{class n{constructor(){this.user=Jt$1(void 0),this.is_valid=w(()=>{let e=this.user();if(!e)return!1;let t=(e.name||``).trim(),i=(e.email||``).trim();return t.startsWith(`<empty>`)||i.startsWith(`<empty>`)?!1:!!(t||i||e.first_name||e.last_name)})}get initials(){let e=this.user();if(!e)return`NA`;if(e.first_name&&e.last_name)return`${e.first_name[0]}${e.last_name[0]}`;let t=(e.name||``).replace(/<[^>]*>/g,` `).trim();t||(t=(e.email||e.name||``).split(`@`)[0]);let i=t.replace(/[()[\]\-+=\\/@<>]+/gi,` `).split(/\s+/).filter(Boolean);return i.length===0?`NA`:i.length>1?`${i[0][0]}${i[i.length-1][0]}`:i[0].slice(0,2)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=_e({type:n,selectors:[[`a-user-avatar`]],inputs:{user:[1,`user`]},decls:1,vars:1,consts:[[1,`border-base-100`,`bg-base-200`,`flex`,`h-[2.5em]`,`w-[2.5em]`,`items-center`,`justify-center`,`overflow-hidden`,`rounded-full`,`border-2`],[`initials`,``,1,`text-base-content`,`uppercase`,`opacity-60`],[`auth`,``,1,`flex`,`h-full`,`w-full`,`items-center`,`justify-center`,`object-cover`,`object-center`,3,`alt`,`source`]],template:function(t,i){t&1&&Le(0,Ml,3,2,`div`,0),t&2&&Fe(i.is_valid()?0:-1)},dependencies:[Mt],encapsulation:2})}}return n})();function Sl(n,o){if(n&1&&(ke(0,`mat-option`,8),yi(1),Ue()),n&2){let e=o.$implicit;Dn$1(`value`,e.display_name||e.name),fe(),Lo(` `,e.display_name||e.name,` `)}}function wl(n,o){if(n&1&&(ke(0,`mat-option`,8),yi(1),Ue()),n&2){let e=o.$implicit;Dn$1(`value`,e?.name||e),fe(),Lo(` `,e.name||e,` `)}}function Tl(n,o){if(n&1&&(ke(0,`div`,5)(1,`label`),yi(2),gp(3,`translate`),Ue(),ke(4,`mat-form-field`,6)(5,`mat-select`,7),gp(6,`translate`),s9(7,wl,2,2,`mat-option`,8,o9),Ue(),J4(),Ue()()),n&2){let e=bt();fe(2),gu(YC(3,3,`COMMON.SUPPORT_TYPE`)),fe(3),Dn$1(`placeholder`,YC(6,5,`COMMON.SUPPORT_TYPE`))(`formField`,e.form.issue_type),t6(),fe(2),a9(e.support_request_types())}}function El(n,o){n&1&&(ke(0,`mat-error`,11),yi(1),gp(2,`translate`),Ue()),n&2&&(fe(),Lo(` `,YC(2,1,`COMMON.DESCRIPTION_REQUIRED`),` `))}function Il(n,o){if(n&1&&(ke(0,`div`,12)(1,`label`,10),yi(2),gp(3,`translate`),Ue(),Bt(4,`image-list-field`,14),J4(),Ue()),n&2){let e=bt();fe(2),gu(YC(3,2,`COMMON.IMAGES`)),fe(2),Dn$1(`formField`,e.form.images),t6()}}var Aa=(()=>{class n{constructor(){this._dialog_ref=m(QT),this._org=m(jT),this._settings=m(sa$1),this._support_email=this._settings.signal(`support_email`,`support@place.tech`),this._support_issue_types=this._settings.signal(`support_issue_types`,[]),this._allow_images=this._settings.signal(`allow_support_ticket_images`,!1),this.loading=N(!1),this.model=N({name:``,email:``,location:``,description:``,issue_type:``,images:[]}),this.form=Ffe(this.model,e=>{jrt(e.name),jrt(e.email),jrt(e.description)}),this.desc_error=N(!1),this.support_email=this._support_email,this.support_request_types=this._support_issue_types,this.allow_images=this._allow_images,this.buildings=this._org.building_list}ngOnInit(){let e=Mi();e&&this.model.update(t=>m$1(l({},t),{name:e.name,email:e.email})),this._org.building&&this.model.update(t=>m$1(l({},t),{location:this._org.building.display_name||this._org.building.name}))}async submit(){if(this.loading.set(!0),this.form().markAsTouched(),this._updateDescError(),this.form().valid()){let e=this._org.module(`smtp`,`Mailer`);if(!e)return aj(Sr(`COMMON.SUPPORT_NO_MAILER`));let{name:t,email:i,location:r,description:d,images:x,issue_type:O}=this.model(),$=this.support_request_types().find(_e=>_e.name===O)?.email||this.support_email(),ie=Sr(`COMMON.SUPPORT_MAIL_HEADER`,{issue_type:O?` - `+O:``});await e.execute(`send_mail`,[$,ie,`${t}
${i}

${r}

${d.replace(/<[^>]+>/g,``)}

${x.join(`
`)}`,`<p>${t}</p><p>${i}</p><p>${r}</p><p>${d}</p>${x.join(`<br>`)}`,[],[],[],[],null,`${i}`]),this._dialog_ref.close(),this.loading.set(!1),HS(Sr(`COMMON.SUPPORT_SUCCESS`))}}_updateDescError(){this.desc_error.set(this.form.description().invalid()&&this.form.description().touched())}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=_e({type:n,selectors:[[`support-ticket-modal`]],decls:51,vars:45,consts:[[3,`confirm`,`heading`,`loading`,`confirm_text`],[1,`flex`,`flex-wrap`,`items-center`,`sm:space-x-2`],[1,`flex`,`flex-1`,`flex-col`],[`appearance`,`outline`],[`matInput`,``,3,`placeholder`,`formField`],[1,`flex`,`flex-col`],[`appearance`,`outline`,1,`w-full`],[3,`placeholder`,`formField`],[3,`value`],[1,``],[1,`mb-4`],[1,`my-2`,`text-xs`],[1,`pt-4`],[1,`mb-2`,`text-center`,`text-xs`,`italic`],[3,`formField`]],template:function(t,i){t&1&&(ke(0,`fullscreen-modal-shell`,0),gp(1,`translate`),He(`confirm`,function(){return i.submit()}),ke(2,`form`)(3,`div`,1)(4,`div`,2)(5,`label`),yi(6),gp(7,`translate`),ke(8,`span`),yi(9,`*`),Ue()(),ke(10,`mat-form-field`,3),Bt(11,`input`,4),gp(12,`translate`),J4(),ke(13,`mat-error`),yi(14),gp(15,`translate`),Ue()()(),ke(16,`div`,2)(17,`label`),yi(18),gp(19,`translate`),ke(20,`span`),yi(21,`*`),Ue()(),ke(22,`mat-form-field`,3),Bt(23,`input`,4),gp(24,`translate`),J4(),ke(25,`mat-error`),yi(26),gp(27,`translate`),Ue()()()(),ke(28,`div`,5)(29,`label`),yi(30),gp(31,`translate`),Ue(),ke(32,`mat-form-field`,6)(33,`mat-select`,7),gp(34,`translate`),s9(35,Sl,2,2,`mat-option`,8,o9),Ue(),J4(),Ue()(),Le(37,Tl,9,7,`div`,5),ke(38,`div`,9)(39,`label`,10),yi(40),gp(41,`translate`),ke(42,`span`),yi(43,`*`),Ue()(),Bt(44,`rich-text-input`,7),gp(45,`translate`),J4(),Le(46,El,3,3,`mat-error`,11),Ue(),Le(47,Il,5,4,`div`,12),Ue(),ke(48,`div`,13),yi(49),gp(50,`translate`),Ue()()),t&2&&(Dn$1(`heading`,`Raise a support ticket`)(`loading`,i.loading()?`true`:``)(`confirm_text`,YC(1,21,`COMMON.SUBMIT`)),fe(6),gu(YC(7,23,`FORM.NAME`)),fe(5),Dn$1(`placeholder`,YC(12,25,`FORM.NAME`))(`formField`,i.form.name),t6(),fe(3),gu(YC(15,27,`FORM.NAME_REQUIRED`)),fe(4),gu(YC(19,29,`FORM.EMAIL`)),fe(5),Dn$1(`placeholder`,YC(24,31,`FORM.EMAIL`))(`formField`,i.form.email),t6(),fe(3),gu(YC(27,33,`FORM.EMAIL_REQUIRED`)),fe(4),gu(YC(31,35,`COMMON.LOCATION`)),fe(3),Dn$1(`placeholder`,YC(34,37,`COMMON.LOCATION`))(`formField`,i.form.location),t6(),fe(2),a9(i.buildings()),fe(2),Fe(i.support_request_types().length?37:-1),fe(3),Lo(` `,YC(41,39,`COMMON.SUPPORT_DESCRIPTION`),` `),fe(4),Dn$1(`placeholder`,YC(45,41,`COMMON.SUPPORT_DESCRIPTION`))(`formField`,i.form.description),t6(),fe(2),Fe(i.desc_error()?46:-1),fe(),Fe(i.allow_images()?47:-1),fe(2),Lo(` `,YC(50,43,`COMMON.SUPPORT_MSG`),` `))},dependencies:[XE,Ox,rq,ufe,Dit,Ait,Grt,Ct,Zl$1,Da,Oa,Zt,Qt,UW,PJe,zn,rot],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%}
/*# sourceMappingURL=support-ticket-modal.component.css.map */`]})}}return n})();var Nl=[`*`];var Ol=(n,o)=>o.id;function Rl(n,o){if(n&1&&(ke(0,`div`,4),yi(1),gp(2,`date`),Ue()),n&2){let e=bt();fe(),Lo(` `,p7(2,1,e.active_time(),e.time_format()+` (z)`,e.tz()),` `)}}function Dl(n,o){if(n&1&&(ke(0,`div`,13),yi(1),gp(2,`date`),Ue()),n&2){let e=bt(2);fe(),Lo(` `,p7(2,1,e.force_time(),e.time_format()+` (z)`,e.tz()),` `)}}function Al(n,o){n&1&&(ke(0,`icon`,14),yi(1,` done `),Ue())}function Pl(n,o){if(n&1){let e=GC();ke(0,`button`,9),He(`click`,function(){Ay(e);let i=bt();return Dy(i.setValue(i.force_time().toString()))}),ke(1,`div`,10)(2,`div`,11)(3,`div`,12),yi(4),gp(5,`date`),Ue(),Le(6,Dl,3,5,`div`,13),Ue(),Le(7,Al,2,0,`icon`,14),Ue()()}if(n&2){let e=bt();Dn$1(`value`,e.force_time()),fe(4),Lo(` `,WC(5,4,e.force_time(),e.time_format()),` `),fe(2),Fe(e.timezone()&&e.tz()?6:-1),fe(),Fe(e.active_time()===e.force_time()?7:-1)}}function Fl(n,o){if(n&1&&(ke(0,`div`,13),yi(1),gp(2,`date`),Ue()),n&2){let e=bt().$implicit,t=bt();fe(),Lo(` `,p7(2,1,e.date,t.time_format()+` (z)`,t.tz()),` `)}}function Vl(n,o){n&1&&(ke(0,`icon`,14),yi(1,` done `),Ue())}function Ll(n,o){if(n&1){let e=GC();ke(0,`button`,9),He(`click`,function(){let i=Ay(e).$implicit;return Dy(bt().setValue(i.id))}),ke(1,`div`,10)(2,`div`,11)(3,`div`,12),yi(4),gp(5,`date`),Ue(),Le(6,Fl,3,5,`div`,13),Ue(),Le(7,Vl,2,0,`icon`,14),Ue()()}if(n&2){let e=o.$implicit,t=bt();Dn$1(`value`,e.id),$e(`data-time`,e.id),fe(4),KF(` `,WC(5,6,e.date,t.time_format()),` `,t.extra_info_fn()(e.date),` `),fe(2),Fe(t.timezone()&&t.tz()?6:-1),fe(),Fe(t.active_time()===e.date?7:-1)}}function Bl(n,o){n&1&&(ke(0,`div`,8),yi(1,`No time options to select`),Ue())}function Ul(n,o){n&1&&(ke(0,`mat-error`),Pe(1),Ue())}function Pa(n){if(n==null||n===``)return null;let o=Number(n);return Number.isFinite(o)?o:null}var Fa=(()=>{class n extends so{constructor(){super(...arguments),this.step=Jt$1(15),this.disabled=eNe(void 0),this.no_past_times=Jt$1(!0),this.use_24hr=Jt$1(!1),this.force_time=Jt$1(void 0),this.no_error=Jt$1(void 0),this.extra_info_fn=Jt$1(e=>``),this.from=Jt$1(Cn$1(Date.now()).valueOf()),this.range=Jt$1(void 0),this._range=w(()=>{let e=this.range();if(!e)return;let t=Pa(e.start),i=Pa(e.end);if(!(t===null||i===null||i<=t))return{start:t,end:i}}),this.min_duration=Jt$1(0),this.timezone=Jt$1(``),this.date=N(new Date().valueOf()),this.time=N(Di(new Date,`HH:mm`)),this._time_options=N([]),this.show_select=N(!1),this.active_time=N(Date.now()),this.no_options=N(!1),this._menu_trigger=sl$1(at),this.time_format=w(()=>this.use_24hr()?`HH : mm`:`h : mm a`),this._local_tz=C1e(Intl.DateTimeFormat().resolvedOptions().timeZone),this.tz=w(()=>{let e=this.timezone();if(!e)return``;let t=C1e(e);return t===this._local_tz?``:t})}ngOnInit(){this.show_select.set(!0),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions(),this.timeout(`hide`,()=>this.show_select.set(!1));let e=this.timezone()||void 0;this.active_time.set(this._time_options().find(t=>t.id===N1e(this.date(),e))?.date||this.active_time())}ngOnChanges(e){(e.no_past_times||e.step||e.from||e.range||e.min_duration)&&(this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions())}ngAfterViewInit(){let e=this._menu_trigger();e&&this.subscription(`menu_opened`,e.menuOpened.subscribe(()=>{this._scrollToSelectedTime()}))}_scrollToSelectedTime(){requestAnimationFrame(()=>{if(!this._menu_trigger()?.menu)return;let t=document.querySelector(`.mat-mdc-menu-panel`);if(!t)return;let i=this.timezone()||void 0,r=this.time()||N1e(new Date,i),d=t.querySelector(`[data-time="${r}"]`);if(!d&&this._time_options().length){let x=this._timeToMinutes(r),O=this._time_options()[0],$=Infinity;for(let ie of this._time_options()){let _e=this._timeToMinutes(ie.id),ke=Math.abs(_e-x);ke<$&&($=ke,O=ie)}d=t.querySelector(`[data-time="${O.id}"]`)}if(d){if(typeof d.scrollIntoView!=`function`)return;d.scrollIntoView({block:`center`,behavior:`instant`})}})}_timeToMinutes(e){let[t,i]=e.split(`:`).map(Number);return t*60+i}time_options(){let e=this.timezone()||void 0,t=(this.time()||`00:00`).split(`:`),i=w1e(this.date(),+t[0],+t[1],e),{minutes:r}=Hne(i,e),d=N1e(i,e),x=[...this._time_options()];return r%this.step()!==0&&this._isWithinRange(i)&&!x.find(O=>O.id===d)&&(x.push({date:i,id:d}),x.sort((O,$)=>`${O.id}`.localeCompare(`${$.id}`))),x}setValue(e){this.time.set(e);let t=this.timezone()||void 0;if(this._onChange){let x=(this.time()||`00:00`).split(`:`),O=w1e(this.date(),+x[0],+x[1],t);B1e(),this._onChange(O)}let i=this.force_time()||this.time(),r=(typeof i==`string`?i:N1e(i,t)).split(`:`),d=w1e(this.date(),+r[0],+r[1],t);this.active_time.set(this._time_options().find(x=>x.id===(typeof i==`string`?i:N1e(i,t)))?.date||d)}writeValue(e){this.date.set(e||this.date());let t=this.timezone()||void 0,i=vl$1(this.date());i=Sl$1(i,{nearestTo:5}),this.time.set(N1e(i,t)),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions();let r=this.force_time(),d=r?N1e(r,t):this.time();this.active_time.set(this._time_options().find(x=>x.id===d)?.date||i.valueOf())}setDisabledState(e){this.disabled.set(e),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times()||e,this.step())),this._updateNoOptions()}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouch=e}_updateNoOptions(){this.no_options.set(!this.disabled()&&(!this._time_options()||this._time_options().length===0)&&!this.force_time())}generateAvailableTimes(e,t,i=15){let r=t?this.from():Math.max(this.from(),Date.now()),d=[],x=this._range(),O=this.timezone()||void 0,$=O?Jo(e,O):Cn$1(e).valueOf(),ie=O?es$1(e,O):Ai(e).valueOf(),_e=this.min_duration()||0,ke=x?x.start*60:void 0,st=x?x.end*60:void 0,et=st!=null&&_e>0?st-_e:st,ni=Math.max($,r,ke!=null?$+ke*60*1e3:$),B=Math.min(ie,et!=null?$+et*60*1e3:ie);if(ni>B)return d;let Y=this._roundUpToStep(ni,i),De=this._roundDownToStep(B,i);for(;!Za$1(Y,De);)d.push({date:Y.valueOf(),id:N1e(Y,O)}),Y=vt(Y,i);return d}_isWithinRange(e){if(Jr(e,this.from()))return!1;let t=this._range();if(!t)return!0;let i=t.start*60,r=t.end*60,d=this.min_duration()||0,x=d>0?r-d:r,{hours:$,minutes:ie}=Hne(e,this.timezone()||void 0),_e=$*60+ie;return!(_e<i||_e>x)}_roundUpToStep(e,t){let i=Sl$1(e,{nearestTo:t});return Jr(i,e)&&(i=vt(i,t)),vl$1(i)}_roundDownToStep(e,t){let i=Sl$1(e,{nearestTo:t});return Za$1(i,e)&&(i=vt(i,-t)),vl$1(i)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=pt(n)))(i||n)}})()}static{this.ɵcmp=_e({type:n,selectors:[[`a-time-field`],[`time-field`]],viewQuery:function(t,i){t&1&&pu(i._menu_trigger,at,5),t&2&&mu()},inputs:{step:[1,`step`],disabled:[1,`disabled`],no_past_times:[1,`no_past_times`],use_24hr:[1,`use_24hr`],force_time:[1,`force_time`],no_error:[1,`no_error`],extra_info_fn:[1,`extra_info_fn`],from:[1,`from`],range:[1,`range`],min_duration:[1,`min_duration`],timezone:[1,`timezone`]},outputs:{disabled:`disabledChange`},features:[qe([{provide:zo,useExisting:sn$1(()=>n),multi:!0}]),Ne,St],ngContentSelectors:Nl,decls:15,vars:12,consts:[[`menu`,`matMenu`],[`type`,`button`,`time-field`,``,`matRipple`,``,1,`border-neutral`,`flex`,`h-12`,`w-full`,`items-center`,`justify-between`,`rounded-sm`,`border`,`px-2`,3,`disabled`,`matMenuTriggerFor`],[1,`flex`,`w-1/2`,`flex-1`,`flex-col`,`px-2`,`text-left`,`leading-tight`],[1,`truncate`],[1,`truncate`,`text-xs`,`opacity-30`],[1,`text-2xl`],[1,`max-h-60`,`min-w-[18rem]`],[`type`,`button`,`mat-menu-item`,``,1,`text-left`,3,`value`],[`mat-menu-item`,``,`disabled`,``],[`type`,`button`,`mat-menu-item`,``,1,`text-left`,3,`click`,`value`],[1,`flex`,`items-center`,`justify-between`],[1,`flex`,`flex-col`,`leading-tight`],[1,``],[1,`text-xs`,`opacity-30`],[1,`ml-2`,`text-2xl`]],template:function(t,i){if(t&1&&(Xt$1(),ke(0,`button`,1)(1,`div`,2)(2,`div`,3),yi(3),gp(4,`date`),Ue(),Le(5,Rl,3,5,`div`,4),Ue(),ke(6,`icon`,5),yi(7,`arrow_drop_down`),Ue()(),ke(8,`mat-menu`,6,0),Le(10,Pl,8,7,`button`,7),s9(11,Ll,8,9,`button`,7,Ol,!1,Bl,2,0,`div`,8),Ue(),Le(14,Ul,2,0,`mat-error`)),t&2){let r=DE(9);Oe(`opacity-30`,i.disabled()||i.no_options()),Dn$1(`disabled`,i.disabled()||i.no_options())(`matMenuTriggerFor`,r),fe(3),Lo(` `,WC(4,9,i.active_time(),i.time_format()),` `),fe(2),Fe(i.timezone()&&i.tz()?5:-1),fe(5),Fe(i.force_time()?10:-1),fe(),a9(i.time_options()),fe(3),Fe(i.no_error()?-1:14)}},dependencies:[XE,Yt,Je,rt,at,Ox,ufe,Unt,FZ],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%}
/*# sourceMappingURL=time-field.component.css.map */`]})}}return n})();function zl(n,o){n&1&&(ke(0,`button`,2)(1,`icon`),yi(2,`close`),Ue()())}function Gl(n,o){if(n&1){let e=GC();ke(0,`div`,7)(1,`div`,11),yi(2),gp(3,`date`),Ue(),ke(4,`mat-checkbox`,12),He(`ngModelChange`,function(i){let r=Ay(e).$implicit,d=bt(2);return d.setWeekdayEnabled(r.getDay(),i),Dy(i&&d.initialiseDay(r.getDay()))}),Ue(),J4(),Ue()}if(n&2){let e=o.$implicit,t=bt(2);fe(2),Lo(` `,WC(3,2,e,`EEE`),` `),fe(2),Dn$1(`ngModel`,t.weekdays_enabled()[e.getDay()]),t6()}}function Hl(n,o){if(n&1&&(ke(0,`mat-option`,20),yi(1),Ue()),n&2){let e=o.$implicit;Dn$1(`value`,e.id),fe(),Lo(` `,e.name,` `)}}function Wl(n,o){if(n&1){let e=GC();ke(0,`button`,23),He(`click`,function(){Ay(e);let i=bt().$index,r=bt(2).$implicit,d=bt(3);return Dy(d.addBlock(d.settings()[r.getDay()],i))}),ke(1,`icon`),yi(2,`add`),Ue()()}}function ql(n,o){if(n&1){let e=GC();ke(0,`button`,24),He(`click`,function(){Ay(e);let i=bt().$index,r=bt(2).$implicit,d=bt(3);return Dy(d.removeBlock(d.settings()[r.getDay()],i))}),ke(1,`icon`),yi(2,`delete`),Ue()()}}function jl(n,o){if(n&1){let e=GC();ke(0,`div`,16)(1,`a-time-field`,18),He(`ngModelChange`,function(i){let r=Ay(e).$implicit,d=bt(2).$implicit;return Dy(bt(3).setStartTime(r,d.getDay(),i))}),Ue(),J4(),ke(2,`a-time-field`,18),He(`ngModelChange`,function(i){let r=Ay(e).$implicit,d=bt(2).$implicit;return Dy(bt(3).setEndTime(r,d.getDay(),i))}),Ue(),J4(),ke(3,`mat-form-field`,19)(4,`mat-select`,12),JF(`ngModelChange`,function(i){let r=Ay(e).$implicit;return W9(r.location,i)||(r.location=i),Dy(i)}),s9(5,Hl,2,2,`mat-option`,20,o9),Ue(),J4(),Ue(),Le(7,Wl,3,0,`button`,21),Le(8,ql,3,0,`button`,22),Ue()}if(n&2){let e=o.$implicit,t=o.$index,i=bt(2).$implicit,r=bt(3);fe(),Dn$1(`ngModel`,r.timeFrom(e.start_time))(`from`,r.timeFrom((t>0?r.settings()[i.getDay()].blocks[t-1]?.end_time:0)||0))(`no_error`,!0),t6(),fe(),Dn$1(`ngModel`,r.timeFrom(e.end_time))(`from`,r.timeFrom(e.start_time+.25))(`no_error`,!0),t6(),fe(2),XF(`ngModel`,e.location),t6(),fe(),a9(r.options()),fe(2),Fe(t===0?7:-1),fe(),Fe(t!==0?8:-1)}}function $l(n,o){if(n&1&&(ke(0,`div`,14)(1,`div`,15),s9(2,jl,9,9,`div`,16,o9),Ue(),ke(4,`h3`,17),yi(5),gp(6,`date`),Ue()()),n&2){let e=bt().$implicit,t=bt(3);fe(2),a9(t.settings()[e.getDay()].blocks),fe(3),Lo(` `,WC(6,1,e,`EEEE`),` `)}}function Xl(n,o){if(n&1&&Le(0,$l,7,4,`div`,14),n&2){let e=o.$implicit;Fe(bt(3).weekdays_enabled()[e.getDay()]?0:-1)}}function Kl(n,o){if(n&1&&(ke(0,`div`,9),s9(1,Xl,1,1,null,null,o9),ke(3,`h3`,13),yi(4),gp(5,`translate`),Ue()()),n&2){let e=bt(2);fe(),a9(e.days),fe(3),Lo(` `,YC(5,1,`COMMON.WORK_HOURS`),` `)}}function Yl(n,o){n&1&&(ke(0,`div`,10),Bt(1,`img`,25),ke(2,`p`,26),yi(3),gp(4,`translate`),Ue()()),n&2&&(fe(3),Lo(` `,YC(4,1,`COMMON.WORK_SETTINGS_EMPTY`),` `))}function Ql(n,o){if(n&1&&(ke(0,`main`,3)(1,`div`,6),s9(2,Gl,5,5,`div`,7,o9),ke(4,`h3`,8),yi(5),gp(6,`translate`),Ue()(),Le(7,Kl,6,3,`div`,9)(8,Yl,5,3,`div`,10),Ue()),n&2){let e=bt();fe(2),a9(e.days),fe(3),Lo(` `,YC(6,2,`COMMON.WORK_DAYS`),` `),fe(2),Fe(e.has_working_days()?7:8)}}function Zl(n,o){n&1&&(ke(0,`div`,4),Bt(1,`mat-spinner`,27),ke(2,`p`,26),yi(3),gp(4,`translate`),Ue()()),n&2&&(fe(),Dn$1(`diameter`,32),fe(2),Lo(` `,YC(4,2,`COMMON.WORK_SETTINGS_SAVE`),` `))}function Jl(n,o){if(n&1){let e=GC();ke(0,`footer`,5)(1,`button`,28),He(`click`,function(){Ay(e);return Dy(bt().saveChanges())}),yi(2),gp(3,`translate`),Ue()()}n&2&&(fe(2),Lo(` `,YC(3,1,`COMMON.SAVE`),` `))}var qn=(()=>{class n{constructor(){this._data=m(Ode),this._dialog_ref=m(QT),this.options=N([]),this.option=N(``),this.settings=N([]),this.weekdays_enabled=N({}),this.changed=N(!1),this.loading=N(!1),this.available_weekdays=N([]),this.days=new Array(7).fill(0).map((e,t)=>Ln(Zs$1(Ln(Date.now(),30)),t)),this.has_working_days=w(()=>{let e=this.weekdays_enabled();return Object.keys(e).some(t=>e[t])}),this.option_name=w(()=>this.options().find(e=>e.id===this.option())?.name||``),this.now=w(()=>vl$1(Date.now()).getTime())}ngOnInit(){let e=Mi(),i=[...((this._data?.local?this._data.preferences:e.work_preferences)||[]).map(x=>m$1(l({},x),{blocks:[...x?.blocks||[]]}))],r={};for(let x of i)x.blocks.length&&(r[x.day_of_week]=!0);this.settings.set(i),this.weekdays_enabled.set(r);let d=[{id:`wfo`,name:Sr(`COMMON.WORK_OFFICE`),icon:`business`},{id:`wfh`,name:Sr(`COMMON.WORK_HOME`),icon:`home`},{id:`aol`,name:Sr(`COMMON.WORK_LEAVE`),icon:`event_busy`}];this.options.set(d),this.option.set(d[0].id)}timeFrom(e){return vl$1(Ci(Ln(new Date,1),{hours:Math.floor(e),minutes:e*60%60})).getTime()}fromTime(e){let t=new Date(e);return t.getHours()+t.getMinutes()/60}initialiseDay(e){let t=this.settings();t[e]||(t[e]={day_of_week:e,blocks:[]}),t[e].blocks||(t[e].blocks=[]),t[e].blocks.length===0&&this.addBlock(t[e],0),this.settings.set([...t])}addBlock(e,t){e.blocks.splice(t+1,0,{start_time:9,end_time:17,location:`wfo`}),this.cleanupBlocks(e),this.settings.update(i=>[...i])}removeBlock(e,t){e.blocks.length<=1||(e.blocks.splice(t,1),this.settings.update(i=>[...i]))}setEndTime(e,t,i){setTimeout(()=>{e.end_time=this.fromTime(i),this.cleanupBlocks(this.settings()[t]),this.settings.update(r=>[...r])},50)}setStartTime(e,t,i){setTimeout(()=>{e.start_time=this.fromTime(i),this.cleanupBlocks(this.settings()[t]),this.settings.update(r=>[...r])},50)}cleanupBlocks(e){if(e?.blocks?.length)for(let t=0;t<e.blocks.length;t++){let i=e.blocks[t];t>0&&i.start_time<e.blocks[t-1].end_time&&(i.start_time=e.blocks[t-1].end_time),i.end_time<=i.start_time&&(i.end_time=i.start_time+1)}}async saveChanges(e=!0){this.loading.set(!0),this._dialog_ref.disableClose=!0;let t=new Array(7).fill(0).map((i,r)=>({day_of_week:r,blocks:[]}));for(let i of this.days){let r=i.getDay();this.weekdays_enabled()[r]&&(t[r]={day_of_week:r,blocks:this.settings()[r].blocks})}if(!this._data?.local){let i=await Cw(`current`);await K2(i.id,m$1(l({},i),{groups:i.groups.filter(r=>!r.startsWith(`placeos_`)),work_preferences:t})).catch(r=>{throw this.loading.set(!1),this._dialog_ref.disableClose=!1,aj(`Unable to save user work preferences.`),r})}this.loading.set(!1),this._dialog_ref.disableClose=!1,e&&(this._data?.local||Mj(),this._dialog_ref.close(t))}setWeekdayEnabled(e,t){this.weekdays_enabled.update(i=>m$1(l({},i),{[e]:t}))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=_e({type:n,selectors:[[`wfh-settings-modal`]],decls:8,vars:6,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``,1,`bg-base-200`],[1,`relative`,`flex`,`max-h-[calc(100vh-9rem)]`,`w-160`,`max-w-full`,`flex-col`,`space-y-2`,`overflow-x-hidden`,`overflow-y-auto`,`rounded-sm`,`px-2`,`py-4`,`sm:max-h-[65vh]`,`sm:p-4`],[`loading`,``,1,`bg-base-100`,`relative`,`flex`,`h-72`,`w-[24rem]`,`flex-col`,`items-center`,`justify-center`,`space-y-2`,`overflow-hidden`,`rounded-sm`,`text-center`],[1,`border-base-200`,`flex`,`justify-end`,`border-t`,`px-4`,`py-2`],[1,`border-base-300`,`relative`,`mb-4`,`flex`,`w-full`,`items-center`,`justify-between`,`space-x-2`,`rounded-sm`,`border`,`p-2`],[1,`flex`,`flex-1`,`flex-col`,`items-center`,`pt-2`],[1,`bg-base-100`,`absolute`,`top-0`,`left-2`,`-translate-y-1/2`,`px-2`],[1,`border-base-300`,`relative`,`flex`,`w-full`,`flex-col`,`items-center`,`justify-between`,`space-y-4`,`rounded-sm`,`border`,`px-2`,`pt-6`,`pb-4`,`sm:px-4`],[1,`flex`,`flex-col`,`items-center`,`justify-center`,`space-y-4`,`px-8`,`py-16`],[1,`text-xs`,`font-bold`,`uppercase`],[3,`ngModelChange`,`ngModel`],[1,`bg-base-100`,`absolute`,`top-0`,`left-2`,`m-0!`,`-translate-y-1/2`,`px-2`],[1,`border-base-200`,`relative`,`flex`,`w-full`,`items-center`,`justify-between`,`space-x-2`,`rounded-sm`,`border`,`p-2`],[1,`w-1/2`,`flex-1`,`space-y-2`,`pt-2`],[1,`flex`,`items-center`,`space-x-2`],[1,`border-base-200`,`bg-base-100`,`bg-opacity-50`,`absolute`,`top-0`,`left-2`,`-translate-y-1/2`,`rounded-sm`,`border`,`px-2`,`text-sm`,`font-medium`],[1,`w-1/4`,`flex-1`,3,`ngModelChange`,`ngModel`,`from`,`no_error`],[`appearance`,`outline`,1,`no-subscript`,`w-1/4`,`flex-1`],[3,`value`],[`icon`,``,`matRipple`,``,1,`border-base-400`,`h-12`,`w-12`,`rounded-sm`,`border`],[`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`],[`icon`,``,`matRipple`,``,1,`border-base-400`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`],[`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`],[`src`,`assets/icons/no-results.svg`,1,`m-auto`],[1,`opacity-30`],[3,`diameter`],[`btn`,``,`matRipple`,``,1,`w-48`,3,`click`]],template:function(t,i){t&1&&(ke(0,`header`,0)(1,`h2`,1),yi(2),gp(3,`translate`),Ue(),Le(4,zl,3,0,`button`,2),Ue(),Le(5,Ql,9,4,`main`,3)(6,Zl,5,4,`div`,4),Le(7,Jl,4,3,`footer`,5)),t&2&&(fe(2),Lo(` `,YC(3,4,`COMMON.WORK_LOCATION_SETTINGS`),` `),fe(2),Fe(i.loading()?-1:4),fe(),Fe(i.loading()?6:5),fe(2),Fe(i.loading()?-1:7))},dependencies:[XE,PJe,kJe,Zl$1,C0,Ox,rq,Zt,Qt,UW,Fa,Un,_i,Ake,Eke,jee,Unt,Ct,Xt,FZ,rot],encapsulation:2})}}return n})();var ec=[`knob`];var tc=[`valueIndicatorContainer`];function ic(n,o){if(n&1&&(ke(0,`div`,2,1)(2,`div`,5)(3,`span`,6),yi(4),Ue()()()),n&2){let e=bt();fe(4),gu(e.valueIndicatorText)}}var nc=[`trackActive`];var oc=[`*`];function rc(n,o){if(n&1&&Bt(0,`div`),n&2){let e=o.$implicit,t=o.$index,i=bt(3);Gs$1(e===0?`mdc-slider__tick-mark--active`:`mdc-slider__tick-mark--inactive`),zC(`transform`,i._calcTickMarkTransform(t))}}function ac(n,o){if(n&1&&s9(0,rc,1,4,`div`,8,i9),n&2)a9(bt(2)._tickMarks)}function sc(n,o){if(n&1&&(ke(0,`div`,6,1),Le(2,ac,2,0),Ue()),n&2){let e=bt();fe(2),Fe(e._cachedWidth?2:-1)}}function lc(n,o){if(n&1&&Bt(0,`mat-slider-visual-thumb`,7),n&2){let e=bt();Dn$1(`discrete`,e.discrete)(`thumbPosition`,1)(`valueIndicatorText`,e.startValueIndicatorText)}}var R=(function(n){return n[n.START=1]=`START`,n[n.END=2]=`END`,n})(R||{});var ii=(function(n){return n[n.ACTIVE=0]=`ACTIVE`,n[n.INACTIVE=1]=`INACTIVE`,n})(ii||{});var Co=new b(`_MatSlider`);var Va=new b(`_MatSliderThumb`);var cc=new b(`_MatSliderRangeThumb`);var La=new b(`_MatSliderVisualThumb`);var dc=(()=>{class n{_cdr=m(Ct$1);_ngZone=m(G);_slider=m(Co);_renderer=m(Ve);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=m($).nativeElement;_platform=m(ze$1);ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let t=this._sliderInputEl,i=this._renderer;this._listenerCleanups=[i.listen(t,`pointermove`,this._onPointerMove),i.listen(t,`pointerdown`,this._onDragStart),i.listen(t,`pointerup`,this._onDragEnd),i.listen(t,`pointerleave`,this._onMouseLeave),i.listen(t,`focus`,this._onFocus),i.listen(t,`blur`,this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e())}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let t=this._hostElement.getBoundingClientRect(),i=this._slider._isCursorOnSliderThumb(e,t);this._isHovered=i,i?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add(`mdc-slider__thumb--focused`)};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove(`mdc-slider__thumb--focused`)};_onDragStart=e=>{e.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add(`mat-mdc-slider-hover-ripple`))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add(`mat-mdc-slider-focus-ripple`))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add(`mat-mdc-slider-active-ripple`))}_isShowingRipple(e){return e?.state===ti$1.FADING_IN||e?.state===ti$1.VISIBLE}_showRipple(e,t){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===R.START?R.END:R.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!t)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:!0,persistent:!0})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let t=this._getSibling();t._isShowingAnyRipple()||(this._hideValueIndicator(),t._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add(`mdc-slider__thumb--with-indicator`)}_hideValueIndicator(){this._hostElement.classList.remove(`mdc-slider__thumb--with-indicator`)}_getSibling(){return this._slider._getThumb(this.thumbPosition===R.START?R.END:R.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static ɵfac=function(t){return new(t||n)};static ɵcmp=_e({type:n,selectors:[[`mat-slider-visual-thumb`]],viewQuery:function(t,i){if(t&1&&kn$1(C0,5)(ec,5)(tc,5),t&2){let r;Te(r=Ie())&&(i._ripple=r.first),Te(r=Ie())&&(i._knob=r.first),Te(r=Ie())&&(i._valueIndicatorContainer=r.first)}},hostAttrs:[1,`mdc-slider__thumb`,`mat-mdc-slider-visual-thumb`],inputs:{discrete:`discrete`,thumbPosition:`thumbPosition`,valueIndicatorText:`valueIndicatorText`},features:[qe([{provide:La,useExisting:n}])],decls:4,vars:2,consts:[[`knob`,``],[`valueIndicatorContainer`,``],[1,`mdc-slider__value-indicator-container`],[1,`mdc-slider__thumb-knob`],[`matRipple`,``,1,`mat-focus-indicator`,3,`matRippleDisabled`],[1,`mdc-slider__value-indicator`],[1,`mdc-slider__value-indicator-text`]],template:function(t,i){t&1&&(Le(0,ic,5,1,`div`,2),Bt(1,`div`,3,0)(3,`div`,4)),t&2&&(Fe(i.discrete?0:-1),fe(3),Dn$1(`matRippleDisabled`,!0))},dependencies:[C0],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
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
`],encapsulation:2})}return n})();var jn=(()=>{class n{_ngZone=m(G);_cdr=m(Ct$1);_elementRef=m($);_dir=m(Ir,{optional:!0});_globalRippleOptions=m(Ef,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let t=this._getInput(R.END),i=this._getInput(R.START);t&&(t.disabled=this._disabled),i&&(i.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(e){let t=e==null||isNaN(e)?this._min:e;this._min!==t&&this._updateMin(t)}_min=0;color;disableRipple=!1;_updateMin(e){let t=this._min;this._min=e,this._isRange?this._updateMinRange({old:t,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange()}_updateMinRange(e){let t=this._getInput(R.END),i=this._getInput(R.START),r=t.value,d=i.value;i.min=e.new,t.min=Math.max(e.new,i.value),i.max=Math.min(t.max,t.value),i._updateWidthInactive(),t._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(t,i):this._onTranslateXChangeBySideEffect(i,t),r!==t.value&&this._onValueChange(t),d!==i.value&&this._onValueChange(i)}_updateMinNonRange(e){let t=this._getInput(R.END);if(t){let i=t.value;t.min=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t)}}get max(){return this._max}set max(e){let t=e==null||isNaN(e)?this._max:e;this._max!==t&&this._updateMax(t)}_max=100;_updateMax(e){let t=this._max;this._max=e,this._isRange?this._updateMaxRange({old:t,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange()}_updateMaxRange(e){let t=this._getInput(R.END),i=this._getInput(R.START),r=t.value,d=i.value;t.max=e.new,i.max=Math.min(e.new,t.value),t.min=i.value,t._updateWidthInactive(),i._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(i,t):this._onTranslateXChangeBySideEffect(t,i),r!==t.value&&this._onValueChange(t),d!==i.value&&this._onValueChange(i)}_updateMaxNonRange(e){let t=this._getInput(R.END);if(t){let i=t.value;t.max=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t)}}get step(){return this._step}set step(e){let t=isNaN(e)?this._step:e;this._step!==t&&this._updateStep(t)}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let e=this._getInput(R.END),t=this._getInput(R.START),i=e.value,r=t.value,d=t.value;e.min=this._min,t.max=this._max,e.step=this._step,t.step=this._step,this._platform.SAFARI&&(e.value=e.value,t.value=t.value),e.min=Math.max(this._min,t.value),t.max=Math.min(this._max,e.value),t._updateWidthInactive(),e._updateWidthInactive(),e.value<d?this._onTranslateXChangeBySideEffect(t,e):this._onTranslateXChangeBySideEffect(e,t),i!==e.value&&this._onValueChange(e),r!==t.value&&this._onValueChange(t)}_updateStepNonRange(){let e=this._getInput(R.END);if(e){let t=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),t!==e.value&&this._onValueChange(e)}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=tn$1();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText=``;endValueIndicatorText=``;_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=w(()=>this._dir?.valueSignal()===`rtl`);_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=m(ze$1);constructor(){m(En$1).load(Kl$1);let e=this._isRtl();PE(()=>{let t=this._isRtl();t!==e&&(e=t,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(R.END),t=this._getInput(R.START);this._isRange=!!e&&!!t,this._cdr.detectChanges();let i=this._getThumb(R.END);this._rippleRadius=i._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,t):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=!0,e._updateThumbUIByValue()}_initUIRange(e,t){e.initProps(),e.initUI(),t.initProps(),t.initUI(),e._updateMinMax(),t._updateMinMax(),e._updateStaticStyles(),t._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,e._updateThumbUIByValue(),t._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let e=this._getInput(R.END),t=this._getInput(R.START);e._setIsLeftThumb(),t._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),t.translateX=t._calcTranslateXByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateWidthInactive(),t._updateWidthInactive(),e._updateThumbUIByValue(),t._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(R.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>`u`||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(R.START)._isActive||this._getThumb(R.END)._isActive}_getValue(e=R.END){let t=this._getInput(e);return t?t.value:this.min}_skipUpdate(){return!!(this._getInput(R.START)?._skipUIUpdate||this._getInput(R.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(e){let t=this._trackActive.nativeElement.style;t.left=e.left,t.right=e.right,t.transformOrigin=e.transformOrigin,t.transform=e.transform}_calcTickMarkTransform(e){let t=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-t:t}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e))}_onTranslateXChangeBySideEffect(e,t){this._hasViewInitialized&&(e._updateThumbUIByValue(),t._updateThumbUIByValue())}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(R.END),t=this._getInput(R.START);e._updateThumbUIByValue(),t._updateThumbUIByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateMinMax(),t._updateMinMax(),e._updateWidthInactive(),t._updateWidthInactive()}else{let e=this._getInput(R.END);e&&e._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let e=this._getInput(R.START),t=this._getInput(R.END);return!e||!t?!1:t.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let t=e.getSibling(),i=this._getThumb(e.thumbPosition);this._getThumb(t.thumbPosition)._hostElement.classList.remove(`mdc-slider__thumb--top`),i._hostElement.classList.toggle(`mdc-slider__thumb--top`,this._thumbsOverlap)}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e))}_updateThumbUI(e){if(this._skipUpdate())return;let t=this._getThumb(e.thumbPosition===R.END?R.END:R.START);t._hostElement.style.transform=`translateX(${e.translateX}px)`}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let t=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(t):e._hostElement.setAttribute(`aria-valuetext`,t),this.discrete){e.thumbPosition===R.START?this.startValueIndicatorText=t:this.endValueIndicatorText=t;let i=this._getThumb(e.thumbPosition);t.length<3?i._hostElement.classList.add(`mdc-slider__thumb--short-value`):i._hostElement.classList.remove(`mdc-slider__thumb--short-value`)}}_updateValueIndicatorUIs(){let e=this._getInput(R.END),t=this._getInput(R.START);e&&this._updateValueIndicatorUI(e),t&&this._updateValueIndicatorUI(t)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,i=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*i}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e))}_updateTrackUIRange(e){let t=e.getSibling();if(!t||!this._cachedWidth)return;let i=Math.abs(t.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:`auto`,right:`${this._cachedWidth-t.translateX}px`,transformOrigin:`right`,transform:`scaleX(${i})`}):this._setTrackActiveStyles({left:`${t.translateX}px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${i})`})}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:`auto`,right:`0px`,transformOrigin:`right`,transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:`0px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${e.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e)}_updateTickMarkUINonRange(e){let t=this._getValue(),i=Math.max(Math.round((t-this.min)/e),0)+1,r=Math.max(Math.round((this.max-t)/e),0)-1;this._isRtl()?i++:r++,this._tickMarks=Array(i).fill(ii.ACTIVE).concat(Array(r).fill(ii.INACTIVE))}_updateTickMarkUIRange(e){let t=this._getValue(),i=this._getValue(R.START),r=Math.max(Math.round((i-this.min)/e),0),d=Math.max(Math.round((t-i)/e)+1,0),x=Math.max(Math.round((this.max-t)/e),0);this._tickMarks=Array(r).fill(ii.INACTIVE).concat(Array(d).fill(ii.ACTIVE),Array(x).fill(ii.INACTIVE))}_getInput(e){if(e===R.END&&this._input)return this._input;if(this._inputs?.length)return e===R.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===R.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle(`mat-mdc-slider-with-animation`,this._hasAnimation)}_isCursorOnSliderThumb(e,t){let i=t.width/2,r=t.x+i,d=t.y+i,x=e.clientX-r,O=e.clientY-d;return Math.pow(x,2)+Math.pow(O,2)<Math.pow(i,2)}static ɵfac=function(t){return new(t||n)};static ɵcmp=_e({type:n,selectors:[[`mat-slider`]],contentQueries:function(t,i,r){if(t&1&&to(r,Va,5)(r,cc,4),t&2){let d;Te(d=Ie())&&(i._input=d.first),Te(d=Ie())&&(i._inputs=d)}},viewQuery:function(t,i){if(t&1&&kn$1(nc,5)(La,5),t&2){let r;Te(r=Ie())&&(i._trackActive=r.first),Te(r=Ie())&&(i._thumbs=r)}},hostAttrs:[1,`mat-mdc-slider`,`mdc-slider`],hostVars:12,hostBindings:function(t,i){t&2&&(Gs$1(`mat-`+(i.color||`primary`)),Oe(`mdc-slider--range`,i._isRange)(`mdc-slider--disabled`,i.disabled)(`mdc-slider--discrete`,i.discrete)(`mdc-slider--tick-marks`,i.showTickMarks)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{disabled:[2,`disabled`,`disabled`,ye],discrete:[2,`discrete`,`discrete`,ye],showTickMarks:[2,`showTickMarks`,`showTickMarks`,ye],min:[2,`min`,`min`,_u],color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,ye],max:[2,`max`,`max`,_u],step:[2,`step`,`step`,_u],displayWith:`displayWith`},exportAs:[`matSlider`],features:[qe([{provide:Co,useExisting:n}])],ngContentSelectors:oc,decls:9,vars:5,consts:[[`trackActive`,``],[`tickMarkContainer`,``],[1,`mdc-slider__track`],[1,`mdc-slider__track--inactive`],[1,`mdc-slider__track--active`],[1,`mdc-slider__track--active_fill`],[1,`mdc-slider__tick-marks`],[3,`discrete`,`thumbPosition`,`valueIndicatorText`],[3,`class`,`transform`]],template:function(t,i){t&1&&(Xt$1(),Pe(0),ke(1,`div`,2),Bt(2,`div`,3),ke(3,`div`,4),Bt(4,`div`,5,0),Ue(),Le(6,sc,3,1,`div`,6),Ue(),Le(7,lc,1,3,`mat-slider-visual-thumb`,7),Bt(8,`mat-slider-visual-thumb`,7)),t&2&&(fe(6),Fe(i.showTickMarks?6:-1),fe(),Fe(i._isRange?7:-1),fe(),Dn$1(`discrete`,i.discrete)(`thumbPosition`,2)(`valueIndicatorText`,i.endValueIndicatorText))},dependencies:[dc],styles:[`.mdc-slider__track {
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
`],encapsulation:2})}return n})();var mc={provide:zo,useExisting:sn$1(()=>gi),multi:!0};var gi=(()=>{class n{_ngZone=m(G);_elementRef=m($);_cdr=m(Ct$1);_slider=m(Co);_platform=m(ze$1);_listenerCleanups;get value(){return _u(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let t=e+``;if(!this._hasSetInitialValue){this._initialValue=t;return}this._isActive||this._setValue(t)}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new re;dragStart=new re;dragEnd=new re;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e}_translateX;thumbPosition=R.END;get min(){return _u(this._hostElement.min,0)}set min(e){this._hostElement.min=e+``,this._cdr.detectChanges()}get max(){return _u(this._hostElement.max,0)}set max(e){this._hostElement.max=e+``,this._cdr.detectChanges()}get step(){return _u(this._hostElement.step,0)}set step(e){this._hostElement.step=e+``,this._cdr.detectChanges()}get disabled(){return ye(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=N(``);_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(e){this._isFocused=e}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new O;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let e=m(Ve);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,`pointerdown`,this._onPointerDown.bind(this)),e.listen(this._hostElement,`pointermove`,this._onPointerMove.bind(this)),e.listen(this._hostElement,`pointerup`,this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!this._isActive}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let t=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=t,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(e){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(e)},0)}_fixValue(e){let t=e.clientX-this._slider._cachedLeft,i=this._slider._cachedWidth,r=this._slider.step===0?1:this._slider.step,d=Math.floor((this._slider.max-this._slider.min)/r),x=this._slider._isRtl()?1-t/i:t/i,$=Math.round(x*d)/d*(this._slider.max-this._slider.min)+this._slider.min,ie=Math.round($/r)*r;if(ie===this.value){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=ie,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation})}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(e){let t=this._tickMarkOffset,i=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,i),t)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e)}_updateThumbUIByPointerEvent(e,t){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(t)}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e)}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=!0}registerOnTouched(e){this._onTouchedFn=e}setDisabledState(e){this.disabled=e}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static ɵfac=function(t){return new(t||n)};static ɵdir=x({type:n,selectors:[[`input`,`matSliderThumb`,``]],hostAttrs:[`type`,`range`,1,`mdc-slider__input`],hostVars:1,hostBindings:function(t,i){t&1&&He(`change`,function(){return i._onChange()})(`input`,function(){return i._onInput()})(`blur`,function(){return i._onBlur()})(`focus`,function(){return i._onFocus()}),t&2&&$e(`aria-valuetext`,i._valuetext())},inputs:{value:[2,`value`,`value`,_u]},outputs:{valueChange:`valueChange`,dragStart:`dragStart`,dragEnd:`dragEnd`},exportAs:[`matSliderThumb`],features:[qe([mc,{provide:Va,useExisting:n}])]})}return n})();var $n=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ae({type:n});static ɵinj=oe({imports:[Zl$1,Rt]})}return n})();function pc(n,o){if(n&1){let e=GC();ke(0,`settings-toggle`,6),He(`ngModelChange`,function(i){Ay(e);return Dy(bt().setDarkMode(i))}),ke(1,`div`,7)(2,`icon`,8),yi(3,`mode_night`),Ue(),ke(4,`div`),yi(5),gp(6,`translate`),Ue()()(),J4()}if(n&2)Dn$1(`ngModel`,bt().dark_mode())(`toggle`,!0),t6(),fe(5),gu(YC(6,3,`COMMON.DARK_MODE`))}function uc(n,o){if(n&1){let e=GC();ke(0,`settings-toggle`,6),He(`ngModelChange`,function(i){Ay(e);return Dy(bt().setLocatable(i))}),ke(1,`div`,7)(2,`icon`,8),yi(3,`emergency_share`),Ue(),ke(4,`div`),yi(5),gp(6,`translate`),Ue()()(),J4()}if(n&2)Dn$1(`ngModel`,bt().locatable())(`toggle`,!0),t6(),fe(5),gu(YC(6,3,`COMMON.LOCATABLE`))}function _c(n,o){if(n&1){let e=GC();ke(0,`div`,9),yi(1),gp(2,`translate`),Ue(),ke(3,`div`,10)(4,`span`,11),yi(5,`A`),Ue(),ke(6,`mat-slider`,12)(7,`input`,13),He(`ngModelChange`,function(i){Ay(e);return Dy(bt().applySetting(`font_size`,i))}),Ue(),J4(),Ue(),ke(8,`span`,2),yi(9,`A`),Ue(),ke(10,`span`,14),yi(11),Ue()()}if(n&2){let e=bt();fe(),Lo(` `,YC(2,6,`COMMON.TEXT_SIZE_MSG`),` `),fe(5),Dn$1(`min`,10)(`max`,24)(`step`,2),fe(),Dn$1(`ngModel`,e.font_size()),t6(),fe(4),Lo(` `,e.font_size(),`px `)}}var Ua=(()=>{class n extends so{constructor(){super(...arguments),this._data=m(Ahe),this._settings=m(sa$1),this.accessible=N(!1),this.locatable=N(!1),this.can_locate=lre(`allow_locatability_option`,!0),this._allow_dark_mode=this._settings.signal(`allow_dark_mode`,!1),this._font_size=this._settings.signal(`font_size`,16,!0),this._accessible=this._settings.signal(`accessible`,!1,!0),this._theme=this._settings.theme_signal,this.dark_mode=w(()=>this._theme()===`dark`),this.can_change_dark_mode=w(()=>!!this._allow_dark_mode()),this.font_size=this._font_size,this.applySetting=(e,t)=>this.timeout(`apply_setting`,()=>{this._settings.saveUserSetting(e,t),e===`accessible`&&this.accessible.set(t)},500),this.close=()=>this._data?.close(),this.setLocatable=e=>{this._settings.updateLocatable(e),this.locatable.set(e)}}async ngOnInit(){this.accessible.set(!!this._accessible()),this.subscription(`user`,XFe.subscribe(e=>{this.locatable.set(e.locatable)}))}setDarkMode(e){let t=this._theme();e&&t!==`dark`?this._settings.setTheme(`dark`):!e&&t===`dark`&&this._settings.setTheme(`light`)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=pt(n)))(i||n)}})()}static{this.ɵcmp=_e({type:n,selectors:[[`accessibility-tooltip`]],features:[Ne],decls:18,vars:11,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-[20rem]`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`,3,`click`],[1,`text-2xl`],[1,``],[1,`space-y-2`,`p-2`],[3,`ngModel`,`toggle`],[3,`ngModelChange`,`ngModel`,`toggle`],[1,`flex`,`items-center`,`space-x-2`],[1,`-ml-2`,`text-xl`],[1,`bg-base-200`,`px-8`,`py-4`,`text-center`],[1,`flex`,`items-center`,`space-x-4`,`px-4`],[1,`text-sm`],[1,`w-1/2`,`flex-1`,`text-[16px]`,3,`min`,`max`,`step`],[`matSliderThumb`,``,1,`text-[16px]`,3,`ngModelChange`,`ngModel`],[1,`bg-base-300`,`my-2`,`rounded-sm`,`px-2`,`py-1`,`text-base`,`text-white`]],template:function(t,i){t&1&&(ke(0,`div`,0)(1,`div`,1),He(`click`,function(){return i.close()}),ke(2,`icon`,2),yi(3,`arrow_back`),Ue(),ke(4,`div`,3),yi(5),gp(6,`translate`),Ue()(),ke(7,`div`,4),Le(8,pc,7,5,`settings-toggle`,5),Le(9,uc,7,5,`settings-toggle`,5),ke(10,`settings-toggle`,6),He(`ngModelChange`,function(d){return i.applySetting(`accessible`,d)}),ke(11,`div`,7)(12,`icon`,8),yi(13,`playlist_add`),Ue(),ke(14,`div`),yi(15),gp(16,`translate`),Ue()()(),J4(),Ue(),Le(17,_c,12,8),Ue()),t&2&&(fe(5),Lo(` `,YC(6,7,`COMMON.CONTROLS_ACCESSIBILITY`),` `),fe(3),Fe(i.can_change_dark_mode()?8:-1),fe(),Fe(i.can_locate()?9:-1),fe(),Dn$1(`ngModel`,i.accessible())(`toggle`,!0),t6(),fe(5),gu(YC(16,9,`COMMON.TEXT_SIZE`)),fe(2),Fe(i.accessible()?17:-1))},dependencies:[Zl$1,C0,$n,jn,gi,ga,Unt,Ake,vH,Eke,jee,rot],encapsulation:2})}}return n})();function hc(n,o){if(n&1){let e=GC();ke(0,`mat-radio-button`,8),He(`click`,function(){let i=Ay(e).$implicit;return Dy(bt().setBuilding(i))}),yi(1),Ue()}if(n&2){let e=o.$implicit;Dn$1(`value`,e.id),fe(),Lo(` `,e.display_name||e.name,` `)}}var za=(()=>{class n{constructor(){this._data=m(Ahe),this._org=m(jT),this.buildings=this._org.active_buildings,this.building=this._org.active_building,this.setBuilding=e=>{this._org.setBuilding(e,!0),this._data?.close()},this.close=()=>this._data?.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=_e({type:n,selectors:[[`building-select`]],decls:16,vars:8,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-74`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`,3,`click`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`],[1,`text-2xl`],[1,`leading-tight`],[1,`text-xs`,`opacity-30`],[1,`px-4`,`py-2`,`text-xs`,`opacity-60`],[1,`flex`,`flex-col`,`space-y-2`,`px-2`,3,`ngModel`],[3,`value`],[3,`click`,`value`]],template:function(t,i){t&1&&(ke(0,`div`,0),He(`click`,function(){return i.close()}),ke(1,`div`,1)(2,`icon`,2),yi(3,`arrow_back`),Ue(),ke(4,`div`,3)(5,`div`),yi(6),Ue(),ke(7,`div`,4),yi(8),gp(9,`translate`),Ue()()(),ke(10,`div`,5),yi(11),gp(12,`translate`),Ue(),ke(13,`mat-radio-group`,6),s9(14,hc,2,2,`mat-radio-button`,7,o9),Ue(),J4(),Ue()),t&2&&(fe(6),Lo(` `,i.building()?.display_name||i.building()?.name,` `),fe(2),Lo(` `,YC(9,4,`RESOURCE.BUILDING`),` `),fe(3),Lo(` `,YC(12,6,`COMMON.BUILDING_SELECT`),` `),fe(2),Dn$1(`ngModel`,i.building()?.id),t6(),fe(),a9(i.buildings()))},dependencies:[Hn,hi,ti,Unt,Zl$1,C0,Ake,Eke,jee,rot],encapsulation:2})}}return n})();function fc(n,o){n&1&&(ke(0,`div`,3),yi(1),gp(2,`translate`),Ue()),n&2&&(fe(),Lo(` `,YC(2,1,`COMMON.DESK_HEIGHT_NOT_SET`),` `))}function gc(n,o){if(n&1){let e=GC();ke(0,`button`,13),He(`click`,function(){Ay(e);return Dy(bt().onClose())}),yi(1),gp(2,`translate`),Ue()}n&2&&(fe(),Lo(` `,YC(2,1,`COMMON.SAVE`),` `))}var Ga=(()=>{class n{constructor(){this._settings=m(sa$1),this.show_close=eNe(!1),this.close=JRe(),this.not_set=N(!1),this.desk_sitting_height=N(71),this.desk_standing_height=N(101)}ngOnInit(){this.not_set.set(!this._settings.get(`desk_sitting_height`)&&!this._settings.get(`desk_standing_height`)),this.desk_sitting_height.set(this._settings.get(`desk_sitting_height`)||71),this.desk_standing_height.set(this._settings.get(`desk_standing_height`)||101)}onClose(){this.saveSetting(`desk_sitting_height`,this.desk_sitting_height()),this.saveSetting(`desk_standing_height`,this.desk_standing_height()),this.close.emit()}formatLabel(e){return`${e.toFixed(1)}cm`}saveSetting(e,t){this._settings.saveUserSetting(e,t)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=_e({type:n,selectors:[[`desk-height-presets`]],inputs:{show_close:[1,`show_close`]},outputs:{show_close:`show_closeChange`,close:`close`},decls:29,vars:23,consts:[[1,`bg-base-100`,`relative`,`w-[20rem]`,`rounded-sm`,`p-4`,`shadow-sm`],[1,`mb-2`,`text-lg`],[1,`mb-4`,`text-xs`,`opacity-60`],[1,`bg-warning`,`text-warning-content`,`-mx-2`,`mb-4`,`rounded-sm`,`p-2`,`text-xs`],[1,`mt-2`,`flex`,`flex-col`],[1,`flex`,`items-center`,`space-x-2`],[`min`,`60`,`max`,`80`,`step`,`0.5`,`discrete`,``,1,`flex-1`,3,`displayWith`],[`matSliderThumb`,``,3,`ngModelChange`,`ngModel`],[1,`w-12`,`text-right`,`text-sm`],[1,`mr-2`,`flex`,`items-center`,`space-x-2`],[`min`,`90`,`max`,`120`,`step`,`0.5`,`discrete`,``,1,`flex-1`,3,`displayWith`],[1,`mr-2`,`w-12`,`text-right`,`text-sm`],[`btn`,``,`matRipple`,``,1,`mt-2`,`w-full`],[`btn`,``,`matRipple`,``,1,`mt-2`,`w-full`,3,`click`]],template:function(t,i){t&1&&(ke(0,`div`,0)(1,`div`,1),yi(2),gp(3,`translate`),Ue(),ke(4,`div`,2),yi(5),gp(6,`translate`),Ue(),Le(7,fc,3,3,`div`,3),ke(8,`div`,2),yi(9),gp(10,`translate`),Ue(),ke(11,`div`,4)(12,`label`),yi(13),gp(14,`translate`),Ue(),ke(15,`div`,5)(16,`mat-slider`,6)(17,`input`,7),He(`ngModelChange`,function(d){return i.desk_sitting_height.set(d),i.saveSetting(`desk_sitting_height`,d)}),Ue(),J4(),Ue(),ke(18,`div`,8),yi(19),Ue()(),ke(20,`label`),yi(21),gp(22,`translate`),Ue(),ke(23,`div`,9)(24,`mat-slider`,10)(25,`input`,7),He(`ngModelChange`,function(d){return i.desk_standing_height.set(d),i.saveSetting(`desk_standing_height`,d)}),Ue(),J4(),Ue(),ke(26,`div`,11),yi(27),Ue()()(),Le(28,gc,3,3,`button`,12),Ue()),t&2&&(fe(2),Lo(` `,YC(3,13,`COMMON.DESK_HEIGHT_TITLE`),` `),fe(3),Lo(` `,YC(6,15,`COMMON.DESK_HEIGHT_MSG`),` `),fe(2),Fe(i.not_set()&&i.show_close()?7:-1),fe(2),Lo(` `,YC(10,17,`COMMON.DESK_HEIGHT_INFO`),` `),fe(4),gu(YC(14,19,`COMMON.DESK_HEIGHT_SITTING`)),fe(3),Dn$1(`displayWith`,i.formatLabel),fe(),Dn$1(`ngModel`,i.desk_sitting_height()),t6(),fe(2),Lo(` `,i.desk_sitting_height().toFixed(1),`cm `),fe(2),Lo(``,YC(22,21,`COMMON.DESK_HEIGHT_STANDING`),`t`),fe(3),Dn$1(`displayWith`,i.formatLabel),fe(),Dn$1(`ngModel`,i.desk_standing_height()),t6(),fe(2),Lo(` `,i.desk_standing_height().toFixed(1),`cm `),fe(),Fe(i.show_close()?28:-1))},dependencies:[Zl$1,C0,$n,jn,gi,Ake,vH,Eke,jee,rot],encapsulation:2})}}return n})();function bc(n,o){if(n&1&&(ke(0,`a`,4)(1,`div`,5),Bt(2,`icon`,6),ke(3,`div`),yi(4),Ue()()()),n&2){let e=o.$implicit;Dn$1(`href`,e.link,uE),fe(2),Dn$1(`icon`,e.icon),fe(2),gu(e.name)}}var Ha=(()=>{class n{constructor(){this._data=m(Ahe),this._settings=m(sa$1),this._tiles=this._settings.signal(`help`,[]),this.close=()=>{this._data?.close()}}get tiles(){return this._tiles()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=_e({type:n,selectors:[[`help-tooltip`]],decls:9,vars:3,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`w-74`,`flex-col`,`rounded-sm`,`shadow-sm`,3,`click`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-4`],[1,`text-2xl`],[1,``],[`matRipple`,``,`target`,`_blank`,`ref`,`noreferer noopener`,1,`w-full`,`p-2`,`text-left`,3,`href`],[1,`hover:bg-base-200`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-sm`,`p-2`],[1,`text-xl`,3,`icon`]],template:function(t,i){t&1&&(ke(0,`div`,0),He(`click`,function(){return i.close()}),ke(1,`div`,1)(2,`icon`,2),yi(3,`arrow_back`),Ue(),ke(4,`div`,3),yi(5),gp(6,`translate`),Ue()(),s9(7,bc,5,3,`a`,4,o9),Ue()),t&2&&(fe(5),gu(YC(6,1,`COMMON.CONTROLS_HELP`)),fe(2),a9(i.tiles))},dependencies:[Zl$1,C0,Unt,rot],encapsulation:2})}}return n})();var vc=(n,o)=>o.id;function xc(n,o){if(n&1&&(ke(0,`div`,8),yi(1),Ue()),n&2){let e=bt().$implicit;fe(),Lo(` `,e.local,` `)}}function kc(n,o){if(n&1){let e=GC();ke(0,`button`,6),He(`click`,function(){let i=Ay(e).$implicit;return Dy(bt().setLocale(i.id))}),ke(1,`div`,7),gp(2,`translate`),ke(3,`div`),yi(4),gp(5,`translate`),Ue(),Le(6,xc,2,1,`div`,8),gp(7,`translate`),Ue()()}if(n&2){let e=o.$implicit,t=bt();fe(),Oe(`mt-2`,YC(2,8,e.name)!==e.local)(`border`,t.active_locale===e.id)(`border-info`,t.active_locale===e.id),fe(3),gu(YC(5,10,e.name)),fe(2),Fe(YC(7,12,e.name)!==e.local?6:-1)}}var Wa=(()=>{class n{constructor(){this._data=m(Ahe),this._settings=m(sa$1),this._locale=m(KS),this._locales=this._settings.signal(`locales`,[]),this.setLocale=e=>{this._locale.setLocale(e),localStorage.setItem(`PLACEOS.locale`,e),setTimeout(()=>location.reload(),300)},this.close=()=>this._data?.close()}get active_locale(){return this._locale.locale}get locales(){return this._locales()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=_e({type:n,selectors:[[`language-select`]],decls:12,vars:6,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-74`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`,3,`click`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`],[1,`text-2xl`],[1,``],[1,`px-4`,`py-2`,`text-xs`,`opacity-60`],[`matRipple`,``,1,`flex`,`h-14`,`items-center`,`justify-between`,`space-x-8`,`px-2`,`text-left`],[`matRipple`,``,1,`flex`,`h-14`,`items-center`,`justify-between`,`space-x-8`,`px-2`,`text-left`,3,`click`],[1,`hover:bg-base-200`,`flex`,`flex-1`,`items-center`,`justify-between`,`rounded-sm`,`p-2`,`leading-tight`],[1,`bg-base-300`,`rounded-sm`,`px-2`,`py-1`,`text-xs`,`opacity-60`]],template:function(t,i){t&1&&(ke(0,`div`,0),He(`click`,function(){return i.close()}),ke(1,`div`,1)(2,`icon`,2),yi(3,`arrow_back`),Ue(),ke(4,`div`,3),yi(5),gp(6,`translate`),Ue()(),ke(7,`div`,4),yi(8),gp(9,`translate`),Ue(),s9(10,kc,8,14,`button`,5,vc),Ue()),t&2&&(fe(5),gu(YC(6,2,`COMMON.LANGUAGE`)),fe(3),Lo(` `,YC(9,4,`COMMON.LANGUAGE_SELECT`),` `),fe(2),a9(i.locales))},dependencies:[Zl$1,C0,Unt,rot],encapsulation:2})}}return n})();function yc(n,o){if(n&1){let e=GC();ke(0,`mat-radio-button`,8),He(`click`,function(){let i=Ay(e).$implicit;return Dy(bt().setRegion(i))}),yi(1),Ue()}if(n&2){let e=o.$implicit;Dn$1(`value`,e.id),fe(),Lo(` `,e.display_name||e.name,` `)}}var qa=(()=>{class n{constructor(){this._data=m(Ahe),this._org=m(jT),this.regions=this._org.region_list,this.region=this._org.active_region,this.setRegion=async e=>{await this._org.setRegion(e),this._org.setBuilding(this._org.building,!0),this._data?.close()},this.close=()=>this._data?.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=_e({type:n,selectors:[[`region-select`]],decls:16,vars:8,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-74`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`,3,`click`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`],[1,`text-2xl`],[1,`leading-tight`],[1,`text-xs`,`opacity-30`],[1,`px-4`,`py-2`,`text-xs`,`opacity-60`],[1,`flex`,`flex-col`,`space-y-2`,`px-2`,3,`ngModel`],[3,`value`],[3,`click`,`value`]],template:function(t,i){t&1&&(ke(0,`div`,0),He(`click`,function(){return i.close()}),ke(1,`div`,1)(2,`icon`,2),yi(3,`arrow_back`),Ue(),ke(4,`div`,3)(5,`div`),yi(6),Ue(),ke(7,`div`,4),yi(8),gp(9,`translate`),Ue()()(),ke(10,`div`,5),yi(11),gp(12,`translate`),Ue(),ke(13,`mat-radio-group`,6),s9(14,yc,2,2,`mat-radio-button`,7,o9),Ue(),J4(),Ue()),t&2&&(fe(6),Lo(` `,i.region()?.display_name||i.region()?.name,` `),fe(2),Lo(` `,YC(9,4,`RESOURCE.REGION`),` `),fe(3),Lo(` `,YC(12,6,`COMMON.REGION_SELECT`),` `),fe(2),Dn$1(`ngModel`,i.region()?.id),t6(),fe(),a9(i.regions()))},dependencies:[Hn,hi,ti,Unt,Zl$1,C0,Ake,Eke,jee,rot],encapsulation:2})}}return n})();var ja=(()=>{class n{constructor(){this._settings=m(sa$1),this._tooltip=m(Ahe,{optional:!0}),this.plate_number=N(``)}async ngOnInit(){await gj(this._settings.initialised),this.plate_number.set(this._settings.get(`plate_number`)||``)}save(){this.plate_number()&&this._settings.saveUserSetting(`plate_number`,this.plate_number()),HS(Sr(`COMMON.PARKING_SETTINGS_SAVE`)),this._tooltip?.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=_e({type:n,selectors:[[`user-parking-tooltip`]],decls:14,vars:13,consts:[[1,`border-base-300`,`bg-base-100`,`min-w-[20rem]`,`space-y-2`,`rounded-md`,`border`,`p-2`],[1,`border-base-300`,`border-b`,`text-lg`,`font-medium`],[1,`flex`,`flex-col`],[`for`,`plate-number`],[`appearance`,`outline`,1,`no-subscript`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`]],template:function(t,i){t&1&&(ke(0,`div`,0)(1,`h3`,1),yi(2),gp(3,`translate`),Ue(),ke(4,`div`,2)(5,`label`,3),yi(6),gp(7,`translate`),Ue(),ke(8,`mat-form-field`,4)(9,`input`,5),gp(10,`translate`),JF(`ngModelChange`,function(d){return W9(i.plate_number,d)||(i.plate_number=d),d}),Ue(),J4(),Ue()(),ke(11,`button`,6),He(`click`,function(){return i.save()}),yi(12),gp(13,`translate`),Ue()()),t&2&&(fe(2),Lo(` `,YC(3,5,`COMMON.CONTROLS_PARKING`),` `),fe(4),gu(YC(7,7,`BOOKINGS.PARKING_PLATE_NUMBER`)),fe(3),XF(`ngModel`,i.plate_number),Dn$1(`placeholder`,YC(10,9,`BOOKINGS.PARKING_PLATE_NUMBER`)),t6(),fe(3),Lo(` `,YC(13,11,`COMMON.SAVE`),` `))},dependencies:[Ox,rq,Dit,Ait,Ake,vH,Eke,jee,rot],encapsulation:2})}}return n})();function Cc(n,o){if(n&1){let e=GC();ke(0,`button`,17),He(`click`,function(){let i=Ay(e).$implicit,r=bt().$index;return Dy(bt(2).setLocation(r,i.id))}),ke(1,`div`,18)(2,`icon`,11),yi(3),Ue(),ke(4,`div`,19),yi(5),gp(6,`translate`),Ue()()()}if(n&2){let e=o.$implicit;fe(3),gu(e.icon),fe(2),Lo(` `,YC(6,2,e.name),` `)}}function Mc(n,o){n&1&&Bt(0,`div`,16)}function Sc(n,o){if(n&1&&(ke(0,`div`,9)(1,`div`,10)(2,`icon`,11),yi(3),Ue()(),ke(4,`div`,12)(5,`button`,13)(6,`div`),yi(7),Ue(),ke(8,`icon`),yi(9,`expand_more`),Ue()(),ke(10,`mat-menu`,null,0),s9(12,Cc,7,4,`button`,14,o9),Ue(),ke(14,`div`,15),yi(15),gp(16,`date`),gp(17,`date`),Ue()(),Le(18,Mc,1,0,`div`,16),Ue()),n&2){let e=o.$implicit,t=o.$index,i=DE(11),r=bt(2);Oe(`opacity-30`,r.now>r.timeFrom(e.end_time)),fe(),Oe(`bg-base-200`,r.now<r.timeFrom(e.start_time)||r.now>r.timeFrom(e.end_time))(`bg-info`,r.now>=r.timeFrom(e.start_time)&&r.now<=r.timeFrom(e.end_time))(`text-info-content`,r.now>=r.timeFrom(e.start_time)&&r.now<=r.timeFrom(e.end_time)),fe(2),gu(r.location_icon(r.timeFrom(e.start_time))),fe(2),Dn$1(`matMenuTriggerFor`,i),fe(2),Lo(` `,r.location(r.timeFrom(e.start_time)),` `),fe(5),a9(r.locations()),fe(3),KF(` `,WC(16,14,r.timeFrom(e.start_time),`shortTime`),` – `,WC(17,17,r.timeFrom(e.end_time),`shortTime`),` `),fe(3),Fe(t>0?18:-1)}}function wc(n,o){if(n&1&&(ke(0,`div`,6),s9(1,Sc,19,20,`div`,8,o9),Ue()),n&2){let e=bt();fe(),a9(e.active_preference?.blocks)}}function Tc(n,o){n&1&&(ke(0,`div`,7)(1,`icon`,20),yi(2,`event_busy`),Ue(),ke(3,`p`,21),yi(4),gp(5,`translate`),Ue(),ke(6,`p`,21),yi(7),gp(8,`translate`),Ue()()),n&2&&(fe(4),Lo(` `,YC(5,2,`COMMON.WORK_LOCATION_EMPTY`),` `),fe(3),Lo(` `,YC(8,4,`COMMON.WORK_LOCATION_EDIT_INFO`),` `))}var $a=(()=>{class n{constructor(){this._dialog=m(XT),this.locations=N([]),this.settings=N(void 0),this.overrides=N({})}get active_preference(){let e=Di(new Date,`yyyy-MM-dd`);return this.overrides()[e]?this.overrides()[e]:this.settings()?.find(t=>t.day_of_week===new Date().getDay())}get now(){return vl$1(Date.now()).getTime()}ngOnInit(){let e=Mi();this.settings.set(e.work_preferences),this.overrides.set(e.work_overrides),this.locations.set([{id:`wfo`,name:Sr(`COMMON.WORK_OFFICE`),icon:`business`},{id:`wfh`,name:Sr(`COMMON.WORK_HOME`),icon:`home`},{id:`aol`,name:Sr(`COMMON.WORK_LEAVE`),icon:`event_busy`},{id:`sick`,name:Sr(`COMMON.WORK_SICK`),icon:`sick`}])}location_icon(e){return Mi().location_icon(e+60*1e3)}location(e){return Mi().location_name_time(e+60*1e3)}timeFrom(e){return vl$1(Ci(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}editSettings(){this._dialog.open(qn)}async setLocation(e,t){let i=Mi(),r=this.active_preference,d=Di(Date.now(),`yyyy-MM-dd`),x=m$1(l({},i.work_overrides),{[d]:m$1(l({},r),{blocks:[...r.blocks.slice(0,e),m$1(l({},r.blocks[e]),{location:t}),...r.blocks.slice(e+1)]})});for(let O in x){let $=ua(O,`yyyy-MM-dd`,new Date);(!x[O].blocks.length||Jr($,Ln(Cn$1(Date.now()),-1)))&&delete x[O]}this.overrides.set(x),await K2(i.id,m$1(l({},i),{work_overrides:x})),Mj()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=_e({type:n,selectors:[[`work-location-tooltip`]],decls:14,vars:11,consts:[[`work_menu`,`matMenu`],[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`w-74`,`flex-col`,`overflow-hidden`,`rounded-sm`,`shadow-sm`],[1,`flex`,`items-center`,`justify-between`,`px-2`],[1,`px-2`,`py-4`,`font-medium`],[`icon`,``,`matRipple`,``,`matTooltipPosition`,`left`,1,`hover:bg-base-200`,3,`click`,`matTooltip`],[1,`px-4`,`text-sm`,`font-medium`],[1,`pb-2`],[1,`flex`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-2`,`p-8`,`opacity-30`],[1,`relative`,`flex`,`items-center`,`px-4`,`py-2`,3,`opacity-30`],[1,`relative`,`flex`,`items-center`,`px-4`,`py-2`],[1,`bg-base-200`,`z-20`,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`rounded-full`],[1,`text-2xl`],[1,`ml-2`,`flex-1`],[`matRipple`,``,1,`hover:bg-base-200`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`px-2`,`py-1`,`font-medium`,3,`matMenuTriggerFor`],[`mat-menu-item`,``],[1,`px-2`,`text-xs`,`opacity-60`],[1,`border-base-200`,`absolute`,`-top-2`,`left-7`,`h-4`,`w-0`,`-translate-x-px`,`border-l-2`,`border-dashed`],[`mat-menu-item`,``,3,`click`],[1,`flex`,`items-center`,`space-x-2`],[1,`pr-8`],[1,`text-6xl`],[1,`text-center`,`text-sm`]],template:function(t,i){t&1&&(ke(0,`div`,1)(1,`div`,2)(2,`h3`,3),yi(3),gp(4,`translate`),Ue(),ke(5,`button`,4),gp(6,`translate`),He(`click`,function(){return i.editSettings()}),ke(7,`icon`),yi(8,`edit_note`),Ue()()(),ke(9,`h3`,5),yi(10),gp(11,`date`),Ue(),Le(12,wc,3,0,`div`,6)(13,Tc,9,6,`div`,7),Ue()),t&2&&(fe(3),Lo(` `,YC(4,4,`COMMON.WORK_LOCATION`),` `),fe(2),Dn$1(`matTooltip`,YC(6,6,`COMMON.WORK_LOCATION_EDIT`)),fe(5),Lo(` `,WC(11,8,i.now,`fullDate`),` `),fe(2),Fe(i.active_preference?.blocks?.length?12:13))},dependencies:[XE,PJe,Yt,Je,rt,at,Zl$1,C0,Xit,ghe,Unt,FZ,rot],encapsulation:2})}}return n})();function Ec(n,o){if(n&1){let e=GC();ke(0,`button`,28),He(`click`,function(){let i=Ay(e).$implicit;return Dy(bt(2).saveSetting(`work_location`,i.id))}),ke(1,`div`,29)(2,`icon`,23),yi(3),Ue(),ke(4,`div`,30),yi(5),gp(6,`translate`),Ue()()()}if(n&2){let e=o.$implicit;fe(3),gu(e.icon),fe(2),Lo(` `,YC(6,2,e.name),` `)}}function Ic(n,o){if(n&1&&(ke(0,`div`,7)(1,`h3`,19),yi(2,` Today's Work Location `),Ue(),ke(3,`div`,20)(4,`div`,21)(5,`div`,22)(6,`icon`,23),yi(7),Ue()(),ke(8,`div`,24)(9,`button`,25)(10,`div`),yi(11),Ue(),ke(12,`icon`),yi(13,`expand_more`),Ue()(),ke(14,`mat-menu`,null,1),s9(16,Ec,7,4,`button`,26,o9),Ue(),ke(18,`div`,27),yi(19),gp(20,`date`),gp(21,`date`),Ue()()()()()),n&2){let e=DE(15),t=bt();fe(7),gu(t.location_icon(t.timeFrom(t.active_block().start_time))),fe(2),Dn$1(`matMenuTriggerFor`,e),fe(2),Lo(` `,t.location(t.timeFrom(t.active_block().start_time)),` `),fe(5),a9(t.pref_locations()),fe(3),KF(` `,WC(20,5,t.timeFrom(t.active_block().start_time),`shortTime`),` – `,WC(21,8,t.timeFrom(t.active_block().end_time),`shortTime`),` `)}}function Nc(n,o){if(n&1&&(ke(0,`div`,8)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),yi(5,`layers`),Ue()(),ke(6,`div`,33),yi(7),Ue(),ke(8,`icon`,34),yi(9,` chevron_right `),Ue()()()()),n&2){let e=bt();Dn$1(`content`,e.region_select),fe(7),Lo(` `,e.region()?.display_name||e.region()?.name,` `)}}function Oc(n,o){if(n&1&&(ke(0,`div`,8)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),yi(5,`business`),Ue()(),ke(6,`div`,33),yi(7),Ue(),ke(8,`icon`,34),yi(9,` chevron_right `),Ue()()()()),n&2){let e=bt();Dn$1(`content`,e.building_select),fe(7),Lo(` `,e.building()?.display_name||e.building()?.name,` `)}}function Rc(n,o){if(n&1&&(ke(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),yi(5,`help`),Ue()(),ke(6,`div`,35),yi(7),gp(8,`translate`),Ue(),ke(9,`icon`,34),yi(10,` chevron_right `),Ue()()()()),n&2)Dn$1(`content`,bt().help_tooltip),fe(7),Lo(` `,YC(8,2,`COMMON.CONTROLS_HELP`),` `)}function Dc(n,o){if(n&1&&(ke(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),yi(5,`share_location`),Ue()(),ke(6,`div`,35),yi(7),gp(8,`translate`),Ue(),ke(9,`icon`,34),yi(10,`chevron_right`),Ue()()()()),n&2)Dn$1(`content`,bt().work_location_tooltip),fe(7),Lo(` `,YC(8,2,`COMMON.WORK_LOCATION`),` `)}function Ac(n,o){if(n&1&&(ke(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),yi(5,`mode_night`),Ue()(),ke(6,`div`,35),yi(7),gp(8,`translate`),Ue(),ke(9,`icon`,34),yi(10,`chevron_right`),Ue()()()()),n&2){let e=bt();Oe(`border-b!`,!e.locales().length||!e.desk_height()),Dn$1(`content`,e.accessibility_tooltip),fe(7),Lo(` `,YC(8,4,`COMMON.CONTROLS_ACCESSIBILITY`),` `)}}function Pc(n,o){if(n&1&&(ke(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),yi(5,`desk`),Ue()(),ke(6,`div`,35),yi(7),gp(8,`translate`),Ue(),ke(9,`icon`,34),yi(10,` chevron_right `),Ue()()()()),n&2){let e=bt(),t=DE(15);Oe(`border-b!`,!e.locales().length),Dn$1(`content`,t),fe(7),Lo(` `,YC(8,4,`COMMON.CONTROLS_DESKS`),` `)}}function Fc(n,o){n&1&&Bt(0,`desk-height-presets`)}function Vc(n,o){if(n&1&&(ke(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),yi(5,`parking_sign`),Ue()(),ke(6,`div`,35),yi(7),gp(8,`translate`),Ue(),ke(9,`icon`,34),yi(10,` chevron_right `),Ue()()()()),n&2){let e=bt();Oe(`border-b!`,!e.locales().length),Dn$1(`content`,e.parking_tooltip),fe(7),Lo(` `,YC(8,4,`COMMON.CONTROLS_PARKING`),` `)}}function Lc(n,o){n&1&&(ke(0,`div`,37),yi(1,` Language `),Ue())}function Bc(n,o){if(n&1&&(ke(0,`div`,11)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),yi(5,`language`),Ue()(),ke(6,`div`,36)(7,`div`)(8,`div`),yi(9),gp(10,`translate`),Ue(),Le(11,Lc,2,0,`div`,37),gp(12,`translate`),Ue(),ke(13,`div`,38),gp(14,`translate`),yi(15),gp(16,`translate`),Ue()(),ke(17,`icon`,34),yi(18,` chevron_right `),Ue()()()()),n&2){let e=bt();Dn$1(`content`,e.language_tooltip),fe(9),Lo(` `,YC(10,5,`COMMON.LANGUAGE`),` `),fe(2),Fe(YC(12,7,`COMMON.LANGUAGE`)!==`Language`?11:-1),fe(2),Dn$1(`matTooltip`,YC(14,9,e.active_locale)),fe(2),Lo(` `,YC(16,11,e.active_locale),` `)}}function Uc(n,o){if(n&1){let e=GC();ke(0,`button`,39),He(`click`,function(){Ay(e);return Dy(bt().newSupportTicket())}),ke(1,`div`,31)(2,`div`,32)(3,`icon`),yi(4,`support_agent`),Ue()(),ke(5,`div`,35),yi(6),gp(7,`translate`),Ue()()()}n&2&&(fe(6),Lo(` `,YC(7,1,`COMMON.CONTROLS_SUPPORT`),` `))}function zc(n,o){if(n&1){let e=GC();ke(0,`button`,40),He(`click`,function(){Ay(e);return Dy(bt().reloadPage())}),yi(1),gp(2,`translate`),Ue()}n&2&&(fe(),Lo(` `,YC(2,1,`COMMON.CONTROLS_NEW_VERSION`),` `))}function Gc(n,o){if(n&1){let e=GC();ke(0,`button`,41),He(`click`,function(){Ay(e);return Dy(bt().viewChangelog())}),yi(1),Ue()}if(n&2){let e=bt();fe(),Lo(` `,e.version.hash,` `)}}function Hc(n,o){if(n&1&&(ke(0,`span`),yi(1),Ue()),n&2){let e=bt();fe(),gu(e.version.hash)}}var Xa=(()=>{class n{constructor(){this._settings=m(sa$1),this._org=m(jT),this._dialog=m(XT),this._locale=m(KS),this.building=this._org.active_building,this.region=this._org.active_region,this.regions=this._org.region_list,this.sidebar=Jt$1(!1),this.accessibility=lre(`allow_accessibility_changes`,!0),this.show_changelog=lre(`show_changelog`,!0),this.region_select=qa,this.building_select=za,this.help_tooltip=Ha,this.accessibility_tooltip=Ua,this.language_tooltip=Wa,this.work_location_tooltip=$a,this.parking_tooltip=ja,this.features=lre(`features`,[]),this._locales=this._settings.signal(`locales`,[]),this._desk_height=this._settings.signal(`desks.height_enabled`,!1),this._use_region=this._settings.signal(`use_region`,!1),this._disable_building_select=this._settings.signal(`disable_building_select`,!1),this.pref_locations=N([]),this.work_prefs=N([]),this.overrides=N({}),this.active_block=w(()=>{let e=Di(new Date,`yyyy-MM-dd`),t=new Date().getDay();return(this.overrides()[e]?this.overrides()[e]:this.work_prefs().find(r=>r.day_of_week===t))?.blocks?.find(r=>this.now>=this.timeFrom(r.start_time)&&this.now<this.timeFrom(r.end_time))}),this.active_index=w(()=>{let e=Di(new Date,`yyyy-MM-dd`),t=new Date().getDay();return(this.overrides()[e]?this.overrides()[e]:this.work_prefs().find(r=>r.day_of_week===t))?.blocks?.findIndex(r=>this.now>=this.timeFrom(r.start_time)&&this.now<this.timeFrom(r.end_time))}),this.locales=this._locales,this.desk_height=this._desk_height,this.use_region=this._use_region,this.disable_building_select=this._disable_building_select}location_icon(e){return Mi().location_icon(e+60*1e3)}location(e){return Mi().location_name_time(e+60*1e3)}timeFrom(e){return vl$1(Ci(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}get user(){return Mi()}get groups(){return this.user?.groups?.join(`
`)||``}get version(){return Fm}get active_locale(){let e=this.locales(),t=this._locale.locale;for(let i of e)if(i.id===t)return i.name;return`LANGUAGE.ENGLISH`}get now(){return vl$1(Date.now()).getTime()}get has_new_version(){return Yj()}ngOnInit(){let e=Mi();this.work_prefs.set(e?.work_preferences||[]),this.overrides.set(e?.work_overrides||{}),this.pref_locations.set([{id:`wfo`,name:Sr(`COMMON.WORK_OFFICE`),icon:`business`},{id:`wfh`,name:Sr(`COMMON.WORK_HOME`),icon:`home`},{id:`aol`,name:Sr(`COMMON.WORK_LEAVE`),icon:`event_busy`},{id:`sick`,name:Sr(`COMMON.WORK_SICK`),icon:`sick`}])}logout(){cLe()}reloadPage(){location.reload()}newSupportTicket(){this._settings.get(`app.external_support_url`)?window.open(this._settings.get(`app.external_support_url`),`_blank`):this._dialog.open(Aa)}openWfhModal(){this._dialog.open(qn)}async viewChangelog(){let e=await(await fetch(`https://raw.githubusercontent.com/PlaceOS/user-interfaces/develop/CHANGELOG.md`)).text();this._dialog.open(Ra,{data:{changelog:e}})}saveSetting(e,t){this._settings.saveUserSetting(e,t)}formatLabel(e){return`${e.toFixed(1)}cm`}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=_e({type:n,selectors:[[`user-controls`]],inputs:{sidebar:[1,`sidebar`]},decls:35,vars:32,consts:[[`desk_height_tooltip`,``],[`work_menu`,`matMenu`],[1,`divide-base-200`,`border-base-300`,`bg-base-100`,`relative`,`mt-1`,`flex`,`flex-col`,`divide-y`,`overflow-auto`,`rounded-sm`,`border`,`shadow-sm`],[`avatar`,``,1,`flex`,`w-full`,`min-w-72`,`flex-col`,`items-center`,`p-2`],[1,`text-2xl`,3,`user`,`matTooltip`],[1,``],[1,`truncate`,`text-xs`,`opacity-60`],[1,`border-base-200`,`w-full`,`rounded-sm`,`border-y`,`py-2`],[`customTooltip`,``,1,`relative`,3,`content`],[`customTooltip`,``,3,`content`],[`customTooltip`,``,3,`content`,`border-b!`],[`customTooltip`,``,1,`border-b!`,3,`content`],[`btn`,``,`matRipple`,``,1,`clear`,`h-14`,`w-full`,`text-left`],[1,`flex`,`flex-col`,`items-center`,`p-4`],[1,`mb-4`,`flex`,`items-center`,`justify-center`,`space-x-2`],[`btn`,``,`matRipple`,``,1,`inverse`,3,`click`],[`btn`,``,`matRipple`,``],[1,`w-full`,`text-xs`,`opacity-60`],[1,`m-0`,`border-none`,`bg-none`,`p-0`,`text-xs`,`underline`],[1,`w-full`,`px-4`,`pb-2`,`text-sm`,`font-medium`],[1,`w-full`],[1,`relative`,`flex`,`items-center`,`px-4`,`py-2`],[1,`bg-info`,`text-info-content`,`z-20`,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`rounded-full`],[1,`text-2xl`],[1,`ml-2`,`flex-1`],[`matRipple`,``,1,`hover:bg-base-200`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`px-2`,`py-1`,`font-medium`,3,`matMenuTriggerFor`],[`mat-menu-item`,``],[1,`px-2`,`text-xs`,`opacity-60`],[`mat-menu-item`,``,3,`click`],[1,`flex`,`items-center`,`space-x-2`],[1,`pr-8`],[1,`flex`,`w-full`,`items-center`,`space-x-2`],[1,`bg-base-200`,`flex`,`h-8`,`w-8`,`items-center`,`justify-center`,`rounded-full`],[1,`w-px`,`flex-1`,`truncate`],[1,`text-2xl`,`opacity-60`],[1,`flex-1`],[1,`flex`,`flex-1`,`items-center`,`justify-between`,`space-x-4`],[1,`text-xs`,`opacity-30`],[1,`bg-base-200`,`max-w-24`,`truncate`,`rounded-sm`,`px-2`,`py-1`,`text-sm`,3,`matTooltip`],[`btn`,``,`matRipple`,``,1,`clear`,`h-14`,`w-full`,`text-left`,3,`click`],[`btn`,``,`matRipple`,``,3,`click`],[1,`m-0`,`border-none`,`bg-none`,`p-0`,`text-xs`,`underline`,3,`click`]],template:function(t,i){t&1&&(ke(0,`div`,2)(1,`div`,3),Bt(2,`a-user-avatar`,4),ke(3,`div`,5),yi(4),Ue(),ke(5,`div`,6),yi(6),Ue()(),Le(7,Ic,22,11,`div`,7),Le(8,Nc,10,2,`div`,8),Le(9,Oc,10,2,`div`,8),Le(10,Rc,11,4,`div`,9),Le(11,Dc,11,4,`div`,9),Le(12,Ac,11,6,`div`,10),Le(13,Pc,11,6,`div`,10),Wn$1(14,Fc,1,0,`ng-template`,null,0,_p),Le(16,Vc,11,6,`div`,10),Le(17,Bc,19,13,`div`,11),Le(18,Uc,8,3,`button`,12),ke(19,`div`,13)(20,`div`,14)(21,`button`,15),He(`click`,function(){return i.logout()}),yi(22),gp(23,`translate`),Ue(),Le(24,zc,3,3,`button`,16),Ue(),ke(25,`div`,17),HC(26),yi(27),gp(28,`translate`),jC(),Le(29,Gc,2,1,`button`,18)(30,Hc,2,1,`span`),Ue(),ke(31,`div`,17),yi(32),gp(33,`date`),gp(34,`date`),Ue()()()),t&2&&(Oe(`border`,!i.sidebar()),fe(2),Dn$1(`user`,i.user)(`matTooltip`,i.groups),fe(2),gu(i.user?.name),fe(2),Lo(` `,i.user?.email,` `),fe(),Fe(i.features().includes(`wfh`)&&i.active_block()?7:-1),fe(),Fe(i.regions()?.length?8:-1),fe(),Fe(!i.disable_building_select()&&!i.use_region()?9:-1),fe(),Fe(i.features().includes(`help`)?10:-1),fe(),Fe(i.features().includes(`wfh`)?11:-1),fe(),Fe(i.accessibility()?12:-1),fe(),Fe(i.desk_height()?13:-1),fe(3),Fe(i.features().includes(`parking-controls`)?16:-1),fe(),Fe(i.locales().length>1?17:-1),fe(),Fe(i.features().includes(`support-ticket`)?18:-1),fe(4),Lo(` `,YC(23,22,`COMMON.CONTROLS_SIGN_OUT`),` `),fe(2),Fe(i.has_new_version?24:-1),fe(3),Lo(` `,YC(28,24,`COMMON.CONTROLS_VERSION`),`: `),fe(2),Fe(i.show_changelog()?29:30),fe(3),KF(` `,WC(33,26,i.version.time,`longDate`),` (`,WC(34,29,i.version.time,`shortTime`),`) `))},dependencies:[XE,PJe,Zl$1,C0,Unt,_ot,Xit,ghe,Wn,Yt,Je,rt,at,Ga,FZ,rot],encapsulation:2})}}return n})();var Wc=[`*`];function qc(n,o){n&1&&(ke(0,`icon`,2),yi(1,`person`),Ue())}function jc(n,o){if(n&1){let e=GC();ke(0,`div`,1)(1,`button`,3),He(`click`,function(){Ay(e);return Dy(bt().close())}),Ue(),ke(2,`div`,4)(3,`div`,5),Bt(4,`user-controls`,6),ke(5,`button`,7),He(`click`,function(){Ay(e);return Dy(bt().close())}),ke(6,`icon`,2),yi(7,`close`),Ue()()()()()}if(n&2){let e=bt();fe(),Oe(`opacity-50`,e.is_open())(`opacity-0`,!e.is_open()),fe(2),Oe(`translate-x-0`,e.is_open())(`translate-x-full`,!e.is_open()),fe(),Dn$1(`sidebar`,!0)}}var Ka=(()=>{class n{constructor(){this._close_timeout=null,this.is_open=N(!1),this.is_rendered=N(!1)}open(){this._close_timeout&&(clearTimeout(this._close_timeout),this._close_timeout=null),this.is_rendered.set(!0),requestAnimationFrame(()=>this.is_open.set(!0))}close(){this.is_open.set(!1),this._close_timeout=setTimeout(()=>{this.is_rendered.set(!1),this._close_timeout=null},200)}onEscape(){this.is_open()&&this.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=_e({type:n,selectors:[[`user-controls-sidebar`]],hostBindings:function(t,i){t&1&&He(`keydown.escape`,function(){return i.onEscape()},R8)},ngContentSelectors:Wc,decls:4,vars:1,consts:[[`icon`,``,`matRipple`,``,`avatar`,``,`type`,`button`,`name`,`user-controls`,1,`bg-base-200`,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`rounded-full`,3,`click`],[1,`fixed`,`inset-0`,`z-9999`,`overflow-hidden`],[1,`text-2xl`],[`type`,`button`,`aria-label`,`Close user controls`,1,`absolute`,`inset-0`,`bg-black`,`transition-opacity`,`duration-200`,3,`click`],[1,`absolute`,`inset-y-0`,`right-0`,`flex`,`max-w-full`],[1,`bg-base-100`,`relative`,`h-full`,`w-80`,`max-w-[100vw]`,`overflow-auto`,`pt-[calc(env(safe-area-inset-top)+1rem)]`,`pb-[env(safe-area-inset-bottom)]`,`pr-[env(safe-area-inset-right)]`,`shadow-xl`,`transition-transform`,`duration-200`,`ease-out`],[3,`sidebar`],[`icon`,``,`default`,``,`matRipple`,``,`type`,`button`,1,`absolute`,`top-[calc(env(safe-area-inset-top)+0.5rem)]`,`right-[calc(env(safe-area-inset-right)+0.5rem)]`,3,`click`]],template:function(t,i){t&1&&(Xt$1(),ke(0,`button`,0),He(`click`,function(){return i.open()}),Pe(1,0,null,qc,2,0),Ue(),Le(3,jc,8,9,`div`,1)),t&2&&(fe(3),Fe(i.is_rendered()?3:-1))},dependencies:[Zl$1,C0,Unt,Xa],encapsulation:2})}}return n})();var $c=[`editor`];function Xc(n,o){if(n&1){let e=GC();ke(0,`button`,20),He(`click`,function(){Ay(e);return Dy(bt(2).insertImage())}),ke(1,`icon`),yi(2,`image`),Ue()(),ke(3,`button`,20),He(`click`,function(){Ay(e);return Dy(bt(2).insertAttachment())}),ke(4,`icon`),yi(5,`attachment`),Ue()()}}function Kc(n,o){if(n&1){let e=GC();ke(0,`div`,3)(1,`select`,5),He(`change`,function(i){Ay(e);return Dy(bt().setFontFace(i))}),ke(2,`option`,6),yi(3,`Font`),Ue(),ke(4,`option`,7),yi(5,`Arial`),Ue(),ke(6,`option`,8),yi(7,`Helvetica`),Ue(),ke(8,`option`,9),yi(9,`Georgia`),Ue(),ke(10,`option`,10),yi(11,`Times New Roman`),Ue()(),ke(12,`select`,11),He(`change`,function(i){Ay(e);return Dy(bt().setFontSize(i))}),ke(13,`option`,12),yi(14,`Size`),Ue(),ke(15,`option`,13),yi(16,`12`),Ue(),ke(17,`option`,14),yi(18,`14`),Ue(),ke(19,`option`,15),yi(20,`16`),Ue(),ke(21,`option`,16),yi(22,`18`),Ue(),ke(23,`option`,17),yi(24,`24`),Ue(),ke(25,`option`,18),yi(26,`32`),Ue(),ke(27,`option`,19),yi(28,`48`),Ue()(),ke(29,`button`,20),He(`click`,function(){Ay(e);return Dy(bt().toggleBold())}),ke(30,`icon`),yi(31,`format_bold`),Ue()(),ke(32,`button`,20),He(`click`,function(){Ay(e);return Dy(bt().toggleItalic())}),ke(33,`icon`),yi(34,`format_italic`),Ue()(),ke(35,`button`,20),He(`click`,function(){Ay(e);return Dy(bt().toggleUnderline())}),ke(36,`icon`),yi(37,`format_underlined`),Ue()(),ke(38,`button`,20),He(`click`,function(){Ay(e);return Dy(bt().makeUnorderedList())}),ke(39,`icon`),yi(40,`format_list_bulleted`),Ue()(),ke(41,`button`,20),He(`click`,function(){Ay(e);return Dy(bt().makeOrderedList())}),ke(42,`icon`),yi(43,`format_list_numbered`),Ue()(),ke(44,`button`,20),He(`click`,function(){Ay(e);return Dy(bt().insertLink())}),ke(45,`icon`),yi(46,`link`),Ue()(),Le(47,Xc,6,0),Ue()}if(n&2){let e=bt();fe(29),Oe(`border-info`,e.toolbar_state().bold)(`text-info`,e.toolbar_state().bold),fe(3),Oe(`border-info`,e.toolbar_state().italic)(`text-info`,e.toolbar_state().italic),fe(3),Oe(`border-info`,e.toolbar_state().underline)(`text-info`,e.toolbar_state().underline),fe(3),Oe(`border-info`,e.toolbar_state().unordered_list)(`text-info`,e.toolbar_state().unordered_list),fe(3),Oe(`border-info`,e.toolbar_state().ordered_list)(`text-info`,e.toolbar_state().ordered_list),fe(3),Oe(`border-info`,e.toolbar_state().link)(`text-info`,e.toolbar_state().link),fe(3),Fe(e.images_allowed()?47:-1)}}var Da=(()=>{class n extends so{constructor(){super(...arguments),this._uploads=m(QJe),this._dom_sanitizer=m(cl$1),this._ng_zone=m(G),this.placeholder=Jt$1(``),this.readonly=Jt$1(!1),this.images_allowed=Jt$1(!1),this._editor_el=sl$1(`editor`),this._onChange=()=>{},this._onTouch=()=>{},this.toolbar_state=N({bold:!1,italic:!1,underline:!1,unordered_list:!1,ordered_list:!1,link:!1}),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e,this._syncValue=()=>{this._editor&&this.setValue(this._editor.getHTML())},this._handleTouched=()=>{this._editor&&this._onTouch()},this._refreshToolbarState=()=>{this._editor&&this._ng_zone.run(()=>{this.toolbar_state.set({bold:this._editor.hasFormat(`B`),italic:this._editor.hasFormat(`I`),underline:this._editor.hasFormat(`U`),unordered_list:this._editor.hasFormat(`UL`),ordered_list:this._editor.hasFormat(`OL`),link:this._editor.hasFormat(`A`)})})}}ngOnChanges(e){e.placeholder&&this.timeout(`init`,()=>this._initialiseEditor()),e.readonly&&this._editor&&this._setReadonlyState()}ngAfterViewInit(){this.timeout(`init`,()=>this._initialiseEditor())}setValue(e){this._onChange(e)}writeValue(e){this.timeout(`write`,()=>{this._editor?(this._editor.setHTML(e||``),this._setPlaceholder()):this.timeout(`write`,()=>this.writeValue(e))})}toggleBold(){this._toggleFormat(`B`,()=>this._editor.removeBold(),()=>this._editor.bold())}toggleItalic(){this._toggleFormat(`I`,()=>this._editor.removeItalic(),()=>this._editor.italic())}toggleUnderline(){this._toggleFormat(`U`,()=>this._editor.removeUnderline(),()=>this._editor.underline())}makeUnorderedList(){this._toggleFormat(`UL`,()=>this._editor.removeList(),()=>this._editor.makeUnorderedList())}makeOrderedList(){this._toggleFormat(`OL`,()=>this._editor.removeList(),()=>this._editor.makeOrderedList())}insertLink(){if(!this._editor)return;if(this._editor.hasFormat(`A`)){this._editor.removeLink(),this._syncValue(),this._refreshToolbarState();return}let e=prompt(`Enter URL`);e&&(this._editor.makeLink(e),this._syncValue(),this._refreshToolbarState())}setFontFace(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontFace(t==="default"?`inherit`:t),this._syncValue())}setFontSize(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontSize(t),this._syncValue())}insertImage(){this._embedFile(!0)}insertAttachment(){this._embedFile(!1)}async _initialiseEditor(){let e=this._editor_el()?.nativeElement;if(!e)return this.timeout(`init`,()=>this._initialiseEditor());let{default:t}=await import(`./squire-B0gBI6PO.js`);this._editor&&this._editor.destroy(),e.innerHTML=``,this._editor=new t(e,{blockTag:`div`,sanitizeToDOMFragment:i=>{let r=this._dom_sanitizer.sanitize(ft.HTML,i||``)||``,d=document.createElement(`template`);return d.innerHTML=r,d.content.cloneNode(!0)}}),this._editor.addEventListener(`input`,this._syncValue),this._editor.addEventListener(`blur`,this._handleTouched),this._editor.addEventListener(`cursor`,this._refreshToolbarState),this._editor.addEventListener(`select`,this._refreshToolbarState),this._editor.addEventListener(`pathChange`,this._refreshToolbarState),this._setReadonlyState(),this._setPlaceholder(),this._refreshToolbarState()}_embedFile(e){if(!this._editor)return;let t=document.createElement(`input`);t.setAttribute(`type`,`file`),e&&t.setAttribute(`accept`,`image/*`),t.click(),t.onchange=()=>{let i=t.files?.[0];i&&this._uploads.uploadFile(i,!0).then(r=>{if(!r)return;let d=`${location.origin}/api/engine/v2/uploads/${encodeURIComponent(r)}/url`;this._setAuth(),setTimeout(()=>{this._insertUploadedFile(d,i,e),this._syncValue()},100)}).catch(r=>{r instanceof dI||aj(`Failed to upload ${i.name}: ${r?.message||`Unknown error`}`)})}}_setReadonlyState(){let e=this._editor_el()?.nativeElement;e&&e.setAttribute(`contenteditable`,`${!this.readonly()}`)}_setPlaceholder(){let e=this._editor_el()?.nativeElement;e&&e.setAttribute(`data-placeholder`,this.placeholder()||``)}_toggleFormat(e,t,i){this._editor&&(this._editor.hasFormat(e)?t():i(),this._syncValue(),this._refreshToolbarState())}_insertUploadedFile(e,t,i){let r=t.type.startsWith(`image/`);if(i||r){this._editor.insertHTML(`<img src="${e}" alt="${t.name}" />`);return}this._editor.insertHTML(`<a href="${e}" target="_blank">${t.name}</a>`)}_setAuth(){let e=jt$1();document.cookie=`${e===`x-api-key`?`api-key=`+encodeURIComponent(Qo()):`bearer_token=`+encodeURIComponent(e)};max-age=30;path=/api/engine/v2/uploads;samesite=strict;${location.protocol===`https:`?`secure;`:``}`}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=pt(n)))(i||n)}})()}static{this.ɵcmp=_e({type:n,selectors:[[`rich-text-input`]],viewQuery:function(t,i){t&1&&pu(i._editor_el,$c,5),t&2&&mu()},inputs:{placeholder:[1,`placeholder`],readonly:[1,`readonly`],images_allowed:[1,`images_allowed`]},features:[qe([{provide:zo,useExisting:sn$1(()=>n),multi:!0}]),Ne,St],decls:5,vars:1,consts:[[`container`,``],[`editor`,``],[1,`w-full`],[1,`border-base-300`,`bg-base-100`,`flex`,`flex-wrap`,`items-center`,`gap-1`,`rounded-t`,`border`,`p-2`],[1,`squire-editor`],[1,`border-base-300`,`bg-base-100`,`rounded`,`border`,`p-2`,`text-sm`,3,`change`],[`value`,`default`],[`value`,`Arial`],[`value`,`Helvetica`],[`value`,`Georgia`],[`value`,`Times New Roman`],[1,`border-base-300`,`bg-base-100`,`min-w-24`,`rounded`,`border`,`p-2`,`text-sm`,3,`change`],[`value`,``],[`value`,`12px`],[`value`,`14px`],[`value`,`16px`],[`value`,`18px`],[`value`,`24px`],[`value`,`32px`],[`value`,`48px`],[`icon`,``,`type`,`button`,1,`border-base-300`,`rounded`,`border`,`px-2`,`py-1`,`text-sm`,3,`click`]],template:function(t,i){t&1&&(ke(0,`div`,2,0),Le(2,Kc,48,25,`div`,3),Bt(3,`div`,4,1),Ue()),t&2&&(fe(2),Fe(i.readonly()?-1:2))},dependencies:[Unt],styles:[`[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]     .squire-editor{border-radius:.25rem;border:1px solid var(--%NS%base-300);padding:.5rem;min-height:8rem;width:100%;outline:none}[_nghost-%COMP%]     .squire-editor:empty:before{content:attr(data-placeholder);color:var(--%NS%base-content);opacity:.5}[_nghost-%COMP%]     .squire-editor ul{list-style-type:disc;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor ol{list-style-type:decimal;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor li{margin:.125rem 0}
/*# sourceMappingURL=rich-text-input.component.css.map */`]})}}return n})();var Yc=(n,o)=>o.id+``+n;function Qc(n,o){if(n&1&&(ke(0,`a`,1)(1,`icon`,2),yi(2),Ue(),ke(3,`span`,3),yi(4),Ue()()),n&2){let e=bt().$implicit;Dn$1(`routerLink`,e.route),fe(2),gu(e.icon),fe(2),gu(e.name)}}function Zc(n,o){if(n&1){let e=GC();ke(0,`button`,6),He(`click`,function(){Ay(e);let i=bt(2).$implicit;return Dy(bt().toggleBlock(i.id||i._id))}),ke(1,`icon`,2),yi(2),Ue(),ke(3,`div`,7),yi(4),Ue(),ke(5,`icon`,8),yi(6,`arrow_drop_down`),Ue()()}if(n&2){let e=bt(2).$implicit;fe(2),Lo(` `,e.icon,` `),fe(2),Lo(` `,e.name,` `)}}function Jc(n,o){if(n&1&&(ke(0,`a`,9),Bt(1,`icon`,8),ke(2,`span`),yi(3),Ue()()),n&2){let e=o.$implicit;Dn$1(`routerLink`,e.route),fe(3),gu(e.name)}}function ed(n,o){if(n&1&&(ke(0,`section`,5),s9(1,Jc,4,2,`a`,9,o9),Ue()),n&2){let e=bt(2).$implicit;Dn$1(`@show`,bt().isBlockCollapsed(e.id||e._id)?`hide`:`show`),fe(),a9(e.children)}}function td(n,o){if(n&1&&(Le(0,Zc,7,2,`button`,4),Le(1,ed,3,1,`section`,5)),n&2){let e=bt().$implicit;Fe(e.children?.length?0:-1),fe(),Fe(e.children?.length?1:-1)}}function id(n,o){if(n&1&&Le(0,Qc,5,3,`a`,1)(1,td,2,2),n&2){let e=o.$implicit;Fe(e.children?1:0)}}var Iv=(()=>{class n extends so{constructor(){super(),this._settings=m(sa$1),this._org=m(jT),this._element_ref=m($),this.show_block=N({}),this.links=[],this.filtered_links=N([]),Xe(()=>{this._org.active_building()&&this.timeout(`update_links`,()=>this.updateFilteredLinks(),500)})}get feature_list(){return this._settings.get(`app.features`)||[]}get feature_groups(){return this._settings.get(`app.feature_groups`)||{}}get is_admin(){let e=Mi().groups||[],t=this._settings.get(`app.admin_group`)||`admin`;return e.includes(t)||e.includes(`placeos_admin`)||e.includes(`placeos_support`)}async ngOnInit(){await this._org.waitUntilInitialised(),this.links=[{name:Sr(`APP.CONCIERGE.MENU_BOOKINGS`),icon:`add_circle`,children:[{id:`spaces`,name:Sr(`APP.CONCIERGE.MENU_ROOM_BOOKINGS`),route:[`/book/rooms`]},{id:`desks`,name:Sr(`APP.CONCIERGE.MENU_DESK_BOOKINGS`),route:[`/book/desks/events`]},{id:`parking`,name:Sr(`APP.CONCIERGE.MENU_PARKING_BOOKINGS`),route:[`/book/parking/events`]},{id:`parking-bookings`,name:Sr(`APP.CONCIERGE.MENU_PARKING_BOOKINGS`),route:[`/book/parking/events`]},{id:`lockers`,name:Sr(`APP.CONCIERGE.MENU_LOCKER_BOOKINGS`),route:[`/book/lockers/events`]},{id:`assets`,name:Sr(`APP.CONCIERGE.MENU_ASSET_BOOKINGS`),route:[`/book/assets/list/requests`]},{id:`catering`,name:Sr(`APP.CONCIERGE.MENU_CATERING_BOOKINGS`),route:[`/book/catering/orders`]},{id:`visitors`,name:Sr(`APP.CONCIERGE.MENU_VISITOR_BOOKINGS`),route:[`/book/visitors`]},{id:`visitor-rules`,name:Sr(`APP.CONCIERGE.MENU_VISITOR_RULES`),route:[`/book/visitors/rules`]}]},{id:`facilities`,name:Sr(`APP.CONCIERGE.MENU_MANAGEMENT`),icon:`place`,children:[{id:`zones`,name:Sr(`APP.CONCIERGE.MENU_MANAGE_ZONES`),route:[`/zone-management`]},{id:`spaces`,name:Sr(`APP.CONCIERGE.MENU_MANAGE_ROOMS`),route:[`/room-management`]},{id:`desks`,name:Sr(`APP.CONCIERGE.MENU_MANAGE_DESKS`),route:[`/book/desks/manage`]},{id:`parking`,name:Sr(`APP.CONCIERGE.MENU_MANAGE_PARKING`),route:[`/book/parking/manage`]},{id:`parking-manage`,name:Sr(`APP.CONCIERGE.MENU_MANAGE_PARKING`),route:[`/book/parking/manage`]},{id:`lockers`,name:Sr(`APP.CONCIERGE.MENU_MANAGE_LOCKERS`),route:[`/book/lockers/manage`]},{id:`catering`,name:Sr(`APP.CONCIERGE.MENU_MANAGE_CATERING`),route:[`/book/catering/menu`]},{id:`points`,name:Sr(`APP.CONCIERGE.MENU_MANAGE_POINTS`),route:[`/points-management`]},{id:`emergency-contacts`,name:Sr(`APP.CONCIERGE.MENU_MANAGE_CONTACTS`),icon:`assignment_ind`,route:[`/users/staff/emergency-contacts`]},{id:`signage`,name:Sr(`APP.CONCIERGE.MENU_MANAGE_SIGNAGE`),route:[`/signage`]},{id:`points-of-interest`,name:Sr(`APP.CONCIERGE.MENU_MANAGE_MAP_FEATURES`),route:[`/points-of-interest`]},{id:`url-management`,name:Sr(`APP.CONCIERGE.MENU_MANAGE_URLS`),route:[`/url-management`]},{id:`email-templates`,name:Sr(`APP.CONCIERGE.MENU_MANAGE_EMAILS`),route:[`/email-templates`]},{id:`deals-n-offers`,name:Sr(`APP.CONCIERGE.MENU_MANAGE_DEALS`),route:[`/deals-n-offers`]}]},{id:`assets`,name:Sr(`APP.CONCIERGE.MENU_ASSETS`),route:[`/book/assets/list/items`],icon:`vibration`},{id:`internal-users`,name:Sr(`APP.CONCIERGE.MENU_USER_LIST`),icon:`assignment_ind`,route:[`/users/staff`]},{id:`events`,name:Sr(`APP.CONCIERGE.MENU_EVENTS`),route:[`/entertainment/events`],icon:`confirmation_number`},{id:`surveys`,name:Sr(`APP.CONCIERGE.MENU_SURVEYS`),route:[`/surveys`],icon:`add_reaction`},{_id:`reports`,name:Sr(`APP.CONCIERGE.MENU_REPORTS`),icon:`analytics`,children:[{id:`attendance-report`,name:Sr(`APP.CONCIERGE.MENU_REPORT_SITE_ATTENDANCE`),route:[`/reports/attendance`]},{id:`booking-report`,name:Sr(`APP.CONCIERGE.MENU_REPORT_ROOMS`),route:[`/reports/bookings`]},{id:`desk-report`,name:Sr(`APP.CONCIERGE.MENU_REPORT_DESKS`),route:[`/reports/desks`]},{id:`parking-report`,name:Sr(`APP.CONCIERGE.MENU_REPORT_PARKING`),route:[`/reports/parking`]},{id:`lockers-report`,name:Sr(`APP.CONCIERGE.MENU_REPORT_LOCKERS`),route:[`/reports/lockers`]},{id:`catering-report`,name:Sr(`APP.CONCIERGE.MENU_REPORT_CATERING`),route:[`/reports/catering`]},{id:`contact-tracing-report`,name:Sr(`APP.CONCIERGE.MENU_REPORT_CONTACT_TRACING`),route:[`/reports/contact-tracing`]},{id:`assets-report`,name:Sr(`APP.CONCIERGE.MENU_REPORT_ASSETS`),route:[`/reports/assets`]},{id:`visitors-report`,name:Sr(`APP.CONCIERGE.MENU_REPORT_VISITORS`),route:[`/reports/visitors`]}]}],this.updateFilteredLinks(),this.timeout(`update_inview`,()=>this._moveActiveLinkIntoView(),50),this.timeout(`update_links`,()=>this.updateFilteredLinks(),500)}_isFeatureAvailable(e){if(e.startsWith(`*`))return!0;let t=this.feature_list.includes(e),i=this.feature_groups[e]||[],r=Mi().groups;return!!(t&&(this.is_admin||!i.length||r.find(d=>i.includes(d))))}updateFilteredLinks(){let e=this._settings.get(`app.custom_reports`)||[];if(e.length&&this.links.find(t=>t._id===`reports`)){let t=this.links.find(i=>i._id===`reports`);t.children=ei$1(t.children.concat(e.map(i=>m$1(l({},i),{id:`*${i.id}`,route:[`/reports`,i.id]}))),`id`)}if(this.filtered_links.set(this.links.map(t=>m$1(l({},t),{children:t.children?t.children.filter(i=>this._isFeatureAvailable(i.id)):null})).filter(t=>(!t.id||t.id===`home`||this._isFeatureAvailable(t.id))&&t.route||t.children?.length)),this.filtered_links().find(t=>t.id===`home`)){let t=this.filtered_links().find(i=>i.id===`home`);t.route=this._settings.get(`app.default_route`)||[`/`]}this.is_admin||this.filtered_links.update(t=>t.filter(i=>i.id!==`facilities`))}toggleBlock(e){this.show_block.update(t=>m$1(l({},t),{[e]:!t[e]}))}isBlockCollapsed(e){return!!this.show_block()[e]}_moveActiveLinkIntoView(){let e=this._element_ref.nativeElement.querySelector(`a.active`);e&&e.scrollIntoView({block:`center`,behavior:`instant`})}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=_e({type:n,selectors:[[`app-sidebar`]],features:[Ne],decls:3,vars:0,consts:[[1,`border-base-200`,`h-full`,`w-64`,`overflow-auto`,`border-r`,`py-2`,`pr-3`],[`matRipple`,``,`routerLinkActive`,`active`,1,`hover:bg-base-200`,`my-1`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-r-full`,`p-1`,3,`routerLink`],[1,`text-2xl`,`opacity-60`],[1,`font-medium`],[`matRipple`,``,1,`hover:bg-base-200`,`my-1`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-r-full`,`p-1`],[1,`w-full`,`overflow-hidden`],[`matRipple`,``,1,`hover:bg-base-200`,`my-1`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-r-full`,`p-1`,3,`click`],[1,`flex-1`,`text-left`,`font-medium`],[1,`text-2xl`],[`routerLinkActive`,`active`,1,`hover:bg-base-200`,`my-1`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-r-full`,`p-1`,3,`routerLink`]],template:function(t,i){t&1&&(ke(0,`div`,0),s9(1,id,2,1,null,null,Yc),Ue()),t&2&&(fe(),a9(i.filtered_links()))},dependencies:[pJ,jv,cJ,Zl$1,C0,Unt],styles:[`[_nghost-%COMP%]{height:100%}a.active[_ngcontent-%COMP%]{background-color:var(--%NS%secondary);color:var(--%NS%secondary-content)}a.active[_ngcontent-%COMP%]:hover{color:var(--%NS%base-content);opacity:.75}
/*# sourceMappingURL=app-sidebar.component.css.map */`],data:{animation:[Stt]}})}}return n})();var nd=()=>[`/`];var Lv=(()=>{class n{constructor(){this._settings=m(sa$1),this._theme=this._settings.theme_signal,this._logo_dark=this._settings.signal(`app.logo_dark`,{},!0),this._logo_light=this._settings.signal(`app.logo_light`,{},!0),this.logo_src=w(()=>{let e=this.logo();return typeof e==`string`?e:e?.src||``}),this.logo=w(()=>(this._theme()===`dark`?this._logo_dark():this._logo_light())||{}),this.user=ire()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=_e({type:n,selectors:[[`app-topbar`]],decls:10,vars:4,consts:[[1,`border-base-200`,`flex`,`items-center`,`border-b`,`p-2`],[1,`w-64`],[3,`routerLink`],[`auth`,``,1,`h-12`,3,`source`],[1,`flex`,`flex-1`,`items-center`,`justify-end`,`space-x-2`],[`btn`,``,`icon`,``,`matRipple`,``],[1,`text-2xl`],[1,`mr-2`],[3,`user`]],template:function(t,i){t&1&&(ke(0,`div`,0)(1,`div`,1)(2,`a`,2),Bt(3,`img`,3),Ue()(),ke(4,`div`,4)(5,`button`,5)(6,`icon`,6),yi(7,`notifications`),Ue()(),ke(8,`user-controls-sidebar`,7),Bt(9,`a-user-avatar`,8),Ue()()()),t&2&&(fe(2),Dn$1(`routerLink`,t7(3,nd)),fe(),Dn$1(`source`,i.logo_src()),fe(6),Dn$1(`user`,i.user()))},dependencies:[pJ,jv,Wn,Zl$1,C0,Mt,Unt,Ka],styles:[`[_nghost-%COMP%]{width:100%}
/*# sourceMappingURL=app-topbar.component.css.map */`]})}}return n})();export{ua as A,gi as C,qs as D,qn as E,rt as O,ga as S,jn as T,Xt as _,Fa as a,_i as b,Je as c,Na as d,Oa as f,Wn as g,Un as h,Da as i,zn as j,ti as k,Lv as l,Qt as m,$t as n,Hn as o,Q_ as p,Ct as r,Iv as s,$n as t,Mt as u,Yt as v,hi as w,at as x,Zt as y};
//# debugId=cf61bc12-d0ce-5b7b-81da-5c538cc47759
//# sourceMappingURL=chunk-DADQntvB.js.map