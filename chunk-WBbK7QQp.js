import{$i as We,$t as IE,An as Kn,Ar as PZe,Bi as Vd,Bn as Lo,Bo as e1,Br as QN,C as As$1,Cc as lB,Ci as Te,Cl as qTe,Ct as G7,Do as cm,Ds as hce,Dt as GTe,E as BDe,Ea as Yt$1,El as qc$1,En as KU,Eu as wB,Fa as ZU,Fi as V,Fn as L9e,Fs as i1,G as Cp,Gs as ii$1,Gt as Hte,Hn as Ls$1,Hr as QU,Hu as yD,Ia as ZX,Ii as V8,Iu as xMe,Ji as WN,Js as iw,Jt as I,Ju as ys$1,Ka as _n$1,Kr as Qr,La as Ze,Ll as ri,Lr as Q9e,Ma as ZK,Mn as L4,Mr as Pr,Mu as wl$1,N as Bk,Ni as Ue,Nl as rE,Nr as Pt,Ns as hr,Nt as Gs$1,Nu as wo$1,O as BR,Oi as U7,On as Kc$1,Ot as GU,Pc as lw,Pi as Ui,Po as dQe,Pt as Gt,Pu as wr,Q as Da$1,Qc as nw,Qi as WY,Qn as N,Qs as jN,Qt as ID,Ra as Zp,Rl as rt,Rn as Li,Rs as iB,S as Ar,Si as Ta$1,Sn as KH,So as cF,Sr as P9e,St as Fx,Su as vle,T as B8,Ta as Yc$1,Tl as qY,Uc as mr,Un as Lte,Uo as eG,Ur as QZe,Vn as Lr,Vs as iT,Wa as __,Wi as Vs$1,Xl as sn$1,Xn as Mh,Xt as I8,Y as D8,Yl as se,Yo as em,Ys as j7,Yu as z$1,Za as aB,Zl as sw,Zo as et$1,Zr as RC,Zs as jMe,Zt as IB,_ as AU,_c as kt,_n as Jk,_o as bt,_r as Ol$1,_t as F4,aa as XDe,ac as ji,ad as zb,ai as Rk,al as oi,ao as an$1,bi as TD,bo as c9,br as P,bs as h4,bt as Fi,ca as XU,cc as jt,cd as zu,ci as Rt$1,cl as on$1,cn as Is$1,co as aw,d as $r,da as Xr,dd as m,dt as Eo,ea as Wt,f as $te,fa as Y,fi as Sq,fr as OMe,ga as YF,gc as ki,gn as Jh,go as ble,gr as Oe,gs as g_,gt as F,h as AD,ha as YDe,hc as kee,hn as JX,ho as be,hr as Oc$1,ic as je,id as zY,il as oh,io as ale,ir as Na$1,is as fe,jl as r1,jn as L,jr as Po,jt as Gee,kn as Ke,kr as PX,l as $d,la as XZe,ll as oo,ln as Iy,lo as b4,ls as g,lt as Ee,m as A8,mi as Sv,ml as pn$1,mo as ba,mt as Ev,mu as ue,nc as jU,ni as Ra$1,nn as IQe,nr as NR,o as $Te,oc as jn$1,oi as Ro,on as Iq,oo as as$1,or as No,os as fn$1,p as A4,pc as kb,pi as Ss$1,pt as Et,qa as _y,ql as sOe,qo as ee,qs as it,qu as yo$1,rc as jc$1,rd as zV,ri as Re,rl as oS,rt as Dr,sd as zt,si as Rr,sn as Ir,ss as fr,st as EE,ta as X,tc as jTe,ti as RT,to as aQe,tu as t9,ua as Xn$1,uc as k4,ud as l,ui as SD,va as YN,vc as kx,vn as K$1,vr as Op,vu as vD,w as At,wa as Yb,wi as Tq,wr as PMe,wt as GC,x as Ao,xa as YS,xl as qNe,xn as KD,xt as Fk,xu as va$1,y as Ae,yi as T8,yl as qK,yr as Or,ys as gt,zn as Lk}from"./chunk-BCAuYaAp.js";import{C as sd$1,a as Is$2,b as ld,c as Le,d as Uo,h as dd,i as Gr,l as Ne,m as br,r as Go,t as Aa$1,u as Oe$1,v as ks$1,w as un$1,x as od$1,y as kt$1}from"./chunk-DIp2CUMv.js";import{n as Yt$2,r as mt,t as f}from"./main.js";import{t as E}from"./chunk-Cnrqk0Ls.js";import{n as oe,t as he}from"./chunk-Wt7A29GI.js";import{n as f$1}from"./chunk-B1L6CihT.js";function ca(n,o){let e=Ya(o)?new o(0):Ue(o,0);return e.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),e.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e}function Ya(n){return typeof n==`function`&&n.prototype?.constructor===n}var Qa=10;var Qi=class{subPriority=0;validate(o,e){return!0}};var Zi=class extends Qi{constructor(o,e,t,i,r){super(),this.value=o,this.validateValue=e,this.setValue=t,this.priority=i,r&&(this.subPriority=r)}validate(o,e){return this.validateValue(o,this.value,e)}set(o,e,t){return this.setValue(o,e,this.value,t)}};var Ji=class extends Qi{priority=Qa;subPriority=-1;constructor(o,e){super(),this.context=o||(t=>Ue(e,t))}set(o,e){return e.timestampIsSet?o:Ue(o,ca(o,this.context))}};var S=class{run(o,e,t,i){let r=this.parse(o,e,t,i);return r?{setter:new Zi(r.value,this.validate,this.set,this.priority,this.subPriority),rest:r.rest}:null}validate(o,e,t){return!0}};var en=class extends S{priority=140;parse(o,e,t){switch(e){case`G`:case`GG`:case`GGG`:return t.era(o,{width:`abbreviated`})||t.era(o,{width:`narrow`});case`GGGGG`:return t.era(o,{width:`narrow`});default:return t.era(o,{width:`wide`})||t.era(o,{width:`abbreviated`})||t.era(o,{width:`narrow`})}}set(o,e,t){return e.era=t,o.setFullYear(t,0,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`R`,`u`,`t`,`T`]};var z={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/};var ze={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function K(n,o){return n&&{value:o(n.value),rest:n.rest}}function U(n,o){let e=o.match(n);return e?{value:parseInt(e[0],10),rest:o.slice(e[0].length)}:null}function Ge(n,o){let e=o.match(n);if(!e)return null;if(e[0]===`Z`)return{value:0,rest:o.slice(1)};let t=e[1]===`+`?1:-1,i=e[2]?parseInt(e[2],10):0,r=e[3]?parseInt(e[3],10):0,d=e[5]?parseInt(e[5],10):0;return{value:t*(i*AU+r*_y+d*XDe),rest:o.slice(e[0].length)}}function tn(n){return U(z.anyDigitsSigned,n)}function D(n,o){switch(n){case 1:return U(z.singleDigit,o);case 2:return U(z.twoDigits,o);case 3:return U(z.threeDigits,o);case 4:return U(z.fourDigits,o);default:return U(new RegExp(`^\\d{1,`+n+`}`),o)}}function $t(n,o){switch(n){case 1:return U(z.singleDigitSigned,o);case 2:return U(z.twoDigitsSigned,o);case 3:return U(z.threeDigitsSigned,o);case 4:return U(z.fourDigitsSigned,o);default:return U(new RegExp(`^-?\\d{1,`+n+`}`),o)}}function Xt(n){switch(n){case`morning`:return 4;case`evening`:return 17;case`pm`:case`noon`:case`afternoon`:return 12;default:return 0}}function nn(n,o){let e=o>0,t=e?o:1-o,i;if(t<=50)i=n||100;else{let r=t+50,d=Math.trunc(r/100)*100,x=n>=r%100;i=n+d-(x?100:0)}return e?i:1-i}function on(n){return n%400===0||n%4===0&&n%100!==0}var rn=class extends S{priority=130;incompatibleTokens=[`Y`,`R`,`u`,`w`,`I`,`i`,`e`,`c`,`t`,`T`];parse(o,e,t){let i=r=>({year:r,isTwoDigitYear:e===`yy`});switch(e){case`y`:return K(D(4,o),i);case`yo`:return K(t.ordinalNumber(o,{unit:`year`}),i);default:return K(D(e.length,o),i)}}validate(o,e){return e.isTwoDigitYear||e.year>0}set(o,e,t){let i=o.getFullYear();if(t.isTwoDigitYear){let d=nn(t.year,i);return o.setFullYear(d,0,1),o.setHours(0,0,0,0),o}let r=!(`era`in e)||e.era===1?t.year:1-t.year;return o.setFullYear(r,0,1),o.setHours(0,0,0,0),o}};var an=class extends S{priority=130;parse(o,e,t){let i=r=>({year:r,isTwoDigitYear:e===`YY`});switch(e){case`Y`:return K(D(4,o),i);case`Yo`:return K(t.ordinalNumber(o,{unit:`year`}),i);default:return K(D(e.length,o),i)}}validate(o,e){return e.isTwoDigitYear||e.year>0}set(o,e,t,i){let r=Iy(o,i);if(t.isTwoDigitYear){let x=nn(t.year,r);return o.setFullYear(x,0,i.firstWeekContainsDate),o.setHours(0,0,0,0),As$1(o,i)}let d=!(`era`in e)||e.era===1?t.year:1-t.year;return o.setFullYear(d,0,i.firstWeekContainsDate),o.setHours(0,0,0,0),As$1(o,i)}incompatibleTokens=[`y`,`R`,`u`,`Q`,`q`,`M`,`L`,`I`,`d`,`D`,`i`,`t`,`T`]};var sn=class extends S{priority=130;parse(o,e){return e===`R`?$t(4,o):$t(e.length,o)}set(o,e,t){let i=Ue(o,0);return i.setFullYear(t,0,4),i.setHours(0,0,0,0),Yc$1(i)}incompatibleTokens=[`G`,`y`,`Y`,`u`,`Q`,`q`,`M`,`L`,`w`,`d`,`D`,`e`,`c`,`t`,`T`]};var ln=class extends S{priority=130;parse(o,e){return e===`u`?$t(4,o):$t(e.length,o)}set(o,e,t){return o.setFullYear(t,0,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`G`,`y`,`Y`,`R`,`w`,`I`,`i`,`e`,`c`,`t`,`T`]};var cn=class extends S{priority=120;parse(o,e,t){switch(e){case`Q`:case`QQ`:return D(e.length,o);case`Qo`:return t.ordinalNumber(o,{unit:`quarter`});case`QQQ`:return t.quarter(o,{width:`abbreviated`,context:`formatting`})||t.quarter(o,{width:`narrow`,context:`formatting`});case`QQQQQ`:return t.quarter(o,{width:`narrow`,context:`formatting`});default:return t.quarter(o,{width:`wide`,context:`formatting`})||t.quarter(o,{width:`abbreviated`,context:`formatting`})||t.quarter(o,{width:`narrow`,context:`formatting`})}}validate(o,e){return e>=1&&e<=4}set(o,e,t){return o.setMonth((t-1)*3,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`q`,`M`,`L`,`w`,`I`,`d`,`D`,`i`,`e`,`c`,`t`,`T`]};var dn=class extends S{priority=120;parse(o,e,t){switch(e){case`q`:case`qq`:return D(e.length,o);case`qo`:return t.ordinalNumber(o,{unit:`quarter`});case`qqq`:return t.quarter(o,{width:`abbreviated`,context:`standalone`})||t.quarter(o,{width:`narrow`,context:`standalone`});case`qqqqq`:return t.quarter(o,{width:`narrow`,context:`standalone`});default:return t.quarter(o,{width:`wide`,context:`standalone`})||t.quarter(o,{width:`abbreviated`,context:`standalone`})||t.quarter(o,{width:`narrow`,context:`standalone`})}}validate(o,e){return e>=1&&e<=4}set(o,e,t){return o.setMonth((t-1)*3,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`Q`,`M`,`L`,`w`,`I`,`d`,`D`,`i`,`e`,`c`,`t`,`T`]};var mn=class extends S{incompatibleTokens=[`Y`,`R`,`q`,`Q`,`L`,`w`,`I`,`D`,`i`,`e`,`c`,`t`,`T`];priority=110;parse(o,e,t){let i=r=>r-1;switch(e){case`M`:return K(U(z.month,o),i);case`MM`:return K(D(2,o),i);case`Mo`:return K(t.ordinalNumber(o,{unit:`month`}),i);case`MMM`:return t.month(o,{width:`abbreviated`,context:`formatting`})||t.month(o,{width:`narrow`,context:`formatting`});case`MMMMM`:return t.month(o,{width:`narrow`,context:`formatting`});default:return t.month(o,{width:`wide`,context:`formatting`})||t.month(o,{width:`abbreviated`,context:`formatting`})||t.month(o,{width:`narrow`,context:`formatting`})}}validate(o,e){return e>=0&&e<=11}set(o,e,t){return o.setMonth(t,1),o.setHours(0,0,0,0),o}};var pn=class extends S{priority=110;parse(o,e,t){let i=r=>r-1;switch(e){case`L`:return K(U(z.month,o),i);case`LL`:return K(D(2,o),i);case`Lo`:return K(t.ordinalNumber(o,{unit:`month`}),i);case`LLL`:return t.month(o,{width:`abbreviated`,context:`standalone`})||t.month(o,{width:`narrow`,context:`standalone`});case`LLLLL`:return t.month(o,{width:`narrow`,context:`standalone`});default:return t.month(o,{width:`wide`,context:`standalone`})||t.month(o,{width:`abbreviated`,context:`standalone`})||t.month(o,{width:`narrow`,context:`standalone`})}}validate(o,e){return e>=0&&e<=11}set(o,e,t){return o.setMonth(t,1),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`q`,`Q`,`M`,`w`,`I`,`D`,`i`,`e`,`c`,`t`,`T`]};function da(n,o,e){let t=z$1(n,e?.in),i=jU(t,e)-o;return t.setDate(t.getDate()-i*7),z$1(t,e?.in)}var un=class extends S{priority=100;parse(o,e,t){switch(e){case`w`:return U(z.week,o);case`wo`:return t.ordinalNumber(o,{unit:`week`});default:return D(e.length,o)}}validate(o,e){return e>=1&&e<=53}set(o,e,t,i){return As$1(da(o,t,i),i)}incompatibleTokens=[`y`,`R`,`u`,`q`,`Q`,`M`,`L`,`I`,`d`,`D`,`i`,`t`,`T`]};function ma(n,o,e){let t=z$1(n,e?.in),i=GU(t,e)-o;return t.setDate(t.getDate()-i*7),t}var _n=class extends S{priority=100;parse(o,e,t){switch(e){case`I`:return U(z.week,o);case`Io`:return t.ordinalNumber(o,{unit:`week`});default:return D(e.length,o)}}validate(o,e){return e>=1&&e<=53}set(o,e,t){return Yc$1(ma(o,t))}incompatibleTokens=[`y`,`Y`,`u`,`q`,`Q`,`M`,`L`,`w`,`d`,`D`,`e`,`c`,`t`,`T`]};var Za=[31,28,31,30,31,30,31,31,30,31,30,31];var Ja=[31,29,31,30,31,30,31,31,30,31,30,31];var hn=class extends S{priority=90;subPriority=1;parse(o,e,t){switch(e){case`d`:return U(z.date,o);case`do`:return t.ordinalNumber(o,{unit:`date`});default:return D(e.length,o)}}validate(o,e){let i=on(o.getFullYear()),r=o.getMonth();return i?e>=1&&e<=Ja[r]:e>=1&&e<=Za[r]}set(o,e,t){return o.setDate(t),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`q`,`Q`,`w`,`I`,`D`,`i`,`e`,`c`,`t`,`T`]};var fn=class extends S{priority=90;subpriority=1;parse(o,e,t){switch(e){case`D`:case`DD`:return U(z.dayOfYear,o);case`Do`:return t.ordinalNumber(o,{unit:`date`});default:return D(e.length,o)}}validate(o,e){return on(o.getFullYear())?e>=1&&e<=366:e>=1&&e<=365}set(o,e,t){return o.setMonth(0,t),o.setHours(0,0,0,0),o}incompatibleTokens=[`Y`,`R`,`q`,`Q`,`M`,`L`,`w`,`I`,`d`,`E`,`i`,`e`,`c`,`t`,`T`]};function Kt(n,o,e){let t=fr(),i=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,r=z$1(n,e?.in),d=r.getDay(),O=(o%7+7)%7,$=7-i;return pn$1(r,o<0||o>6?o-(d+$)%7:(O+$)%7-(d+$)%7,e)}var gn=class extends S{priority=90;parse(o,e,t){switch(e){case`E`:case`EE`:case`EEE`:return t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`});case`EEEEE`:return t.day(o,{width:`narrow`,context:`formatting`});case`EEEEEE`:return t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`});default:return t.day(o,{width:`wide`,context:`formatting`})||t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`})}}validate(o,e){return e>=0&&e<=6}set(o,e,t,i){return o=Kt(o,t,i),o.setHours(0,0,0,0),o}incompatibleTokens=[`D`,`i`,`e`,`c`,`t`,`T`]};var bn=class extends S{priority=90;parse(o,e,t,i){let r=d=>{let x=Math.floor((d-1)/7)*7;return(d+i.weekStartsOn+6)%7+x};switch(e){case`e`:case`ee`:return K(D(e.length,o),r);case`eo`:return K(t.ordinalNumber(o,{unit:`day`}),r);case`eee`:return t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`});case`eeeee`:return t.day(o,{width:`narrow`,context:`formatting`});case`eeeeee`:return t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`});default:return t.day(o,{width:`wide`,context:`formatting`})||t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`})}}validate(o,e){return e>=0&&e<=6}set(o,e,t,i){return o=Kt(o,t,i),o.setHours(0,0,0,0),o}incompatibleTokens=[`y`,`R`,`u`,`q`,`Q`,`M`,`L`,`I`,`d`,`D`,`E`,`i`,`c`,`t`,`T`]};var vn=class extends S{priority=90;parse(o,e,t,i){let r=d=>{let x=Math.floor((d-1)/7)*7;return(d+i.weekStartsOn+6)%7+x};switch(e){case`c`:case`cc`:return K(D(e.length,o),r);case`co`:return K(t.ordinalNumber(o,{unit:`day`}),r);case`ccc`:return t.day(o,{width:`abbreviated`,context:`standalone`})||t.day(o,{width:`short`,context:`standalone`})||t.day(o,{width:`narrow`,context:`standalone`});case`ccccc`:return t.day(o,{width:`narrow`,context:`standalone`});case`cccccc`:return t.day(o,{width:`short`,context:`standalone`})||t.day(o,{width:`narrow`,context:`standalone`});default:return t.day(o,{width:`wide`,context:`standalone`})||t.day(o,{width:`abbreviated`,context:`standalone`})||t.day(o,{width:`short`,context:`standalone`})||t.day(o,{width:`narrow`,context:`standalone`})}}validate(o,e){return e>=0&&e<=6}set(o,e,t,i){return o=Kt(o,t,i),o.setHours(0,0,0,0),o}incompatibleTokens=[`y`,`R`,`u`,`q`,`Q`,`M`,`L`,`I`,`d`,`D`,`E`,`i`,`e`,`t`,`T`]};function pa(n,o){let e=z$1(n,o?.in).getDay();return e===0?7:e}function ua(n,o,e){let t=z$1(n,e?.in);return pn$1(t,o-pa(t,e),e)}var xn=class extends S{priority=90;parse(o,e,t){let i=r=>r===0?7:r;switch(e){case`i`:case`ii`:return D(e.length,o);case`io`:return t.ordinalNumber(o,{unit:`day`});case`iii`:return K(t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`}),i);case`iiiii`:return K(t.day(o,{width:`narrow`,context:`formatting`}),i);case`iiiiii`:return K(t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`}),i);default:return K(t.day(o,{width:`wide`,context:`formatting`})||t.day(o,{width:`abbreviated`,context:`formatting`})||t.day(o,{width:`short`,context:`formatting`})||t.day(o,{width:`narrow`,context:`formatting`}),i)}}validate(o,e){return e>=1&&e<=7}set(o,e,t){return o=ua(o,t),o.setHours(0,0,0,0),o}incompatibleTokens=[`y`,`Y`,`u`,`q`,`Q`,`M`,`L`,`w`,`d`,`D`,`E`,`e`,`c`,`t`,`T`]};var kn=class extends S{priority=80;parse(o,e,t){switch(e){case`a`:case`aa`:case`aaa`:return t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`});case`aaaaa`:return t.dayPeriod(o,{width:`narrow`,context:`formatting`});default:return t.dayPeriod(o,{width:`wide`,context:`formatting`})||t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`})}}set(o,e,t){return o.setHours(Xt(t),0,0,0),o}incompatibleTokens=[`b`,`B`,`H`,`k`,`t`,`T`]};var yn=class extends S{priority=80;parse(o,e,t){switch(e){case`b`:case`bb`:case`bbb`:return t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`});case`bbbbb`:return t.dayPeriod(o,{width:`narrow`,context:`formatting`});default:return t.dayPeriod(o,{width:`wide`,context:`formatting`})||t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`})}}set(o,e,t){return o.setHours(Xt(t),0,0,0),o}incompatibleTokens=[`a`,`B`,`H`,`k`,`t`,`T`]};var Cn=class extends S{priority=80;parse(o,e,t){switch(e){case`B`:case`BB`:case`BBB`:return t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`});case`BBBBB`:return t.dayPeriod(o,{width:`narrow`,context:`formatting`});default:return t.dayPeriod(o,{width:`wide`,context:`formatting`})||t.dayPeriod(o,{width:`abbreviated`,context:`formatting`})||t.dayPeriod(o,{width:`narrow`,context:`formatting`})}}set(o,e,t){return o.setHours(Xt(t),0,0,0),o}incompatibleTokens=[`a`,`b`,`t`,`T`]};var Mn=class extends S{priority=70;parse(o,e,t){switch(e){case`h`:return U(z.hour12h,o);case`ho`:return t.ordinalNumber(o,{unit:`hour`});default:return D(e.length,o)}}validate(o,e){return e>=1&&e<=12}set(o,e,t){let i=o.getHours()>=12;return i&&t<12?o.setHours(t+12,0,0,0):!i&&t===12?o.setHours(0,0,0,0):o.setHours(t,0,0,0),o}incompatibleTokens=[`H`,`K`,`k`,`t`,`T`]};var Sn=class extends S{priority=70;parse(o,e,t){switch(e){case`H`:return U(z.hour23h,o);case`Ho`:return t.ordinalNumber(o,{unit:`hour`});default:return D(e.length,o)}}validate(o,e){return e>=0&&e<=23}set(o,e,t){return o.setHours(t,0,0,0),o}incompatibleTokens=[`a`,`b`,`h`,`K`,`k`,`t`,`T`]};var wn=class extends S{priority=70;parse(o,e,t){switch(e){case`K`:return U(z.hour11h,o);case`Ko`:return t.ordinalNumber(o,{unit:`hour`});default:return D(e.length,o)}}validate(o,e){return e>=0&&e<=11}set(o,e,t){return o.getHours()>=12&&t<12?o.setHours(t+12,0,0,0):o.setHours(t,0,0,0),o}incompatibleTokens=[`h`,`H`,`k`,`t`,`T`]};var Tn=class extends S{priority=70;parse(o,e,t){switch(e){case`k`:return U(z.hour24h,o);case`ko`:return t.ordinalNumber(o,{unit:`hour`});default:return D(e.length,o)}}validate(o,e){return e>=1&&e<=24}set(o,e,t){let i=t<=24?t%24:t;return o.setHours(i,0,0,0),o}incompatibleTokens=[`a`,`b`,`h`,`H`,`K`,`t`,`T`]};var En=class extends S{priority=60;parse(o,e,t){switch(e){case`m`:return U(z.minute,o);case`mo`:return t.ordinalNumber(o,{unit:`minute`});default:return D(e.length,o)}}validate(o,e){return e>=0&&e<=59}set(o,e,t){return o.setMinutes(t,0,0),o}incompatibleTokens=[`t`,`T`]};var In=class extends S{priority=50;parse(o,e,t){switch(e){case`s`:return U(z.second,o);case`so`:return t.ordinalNumber(o,{unit:`second`});default:return D(e.length,o)}}validate(o,e){return e>=0&&e<=59}set(o,e,t){return o.setSeconds(t,0),o}incompatibleTokens=[`t`,`T`]};var Nn=class extends S{priority=30;parse(o,e){let t=i=>Math.trunc(i*Math.pow(10,-e.length+3));return K(D(e.length,o),t)}set(o,e,t){return o.setMilliseconds(t),o}incompatibleTokens=[`t`,`T`]};var On=class extends S{priority=10;parse(o,e){switch(e){case`X`:return Ge(ze.basicOptionalMinutes,o);case`XX`:return Ge(ze.basic,o);case`XXXX`:return Ge(ze.basicOptionalSeconds,o);case`XXXXX`:return Ge(ze.extendedOptionalSeconds,o);default:return Ge(ze.extended,o)}}set(o,e,t){return e.timestampIsSet?o:Ue(o,o.getTime()-BR(o)-t)}incompatibleTokens=[`t`,`T`,`x`]};var Rn=class extends S{priority=10;parse(o,e){switch(e){case`x`:return Ge(ze.basicOptionalMinutes,o);case`xx`:return Ge(ze.basic,o);case`xxxx`:return Ge(ze.basicOptionalSeconds,o);case`xxxxx`:return Ge(ze.extendedOptionalSeconds,o);default:return Ge(ze.extended,o)}}set(o,e,t){return e.timestampIsSet?o:Ue(o,o.getTime()-BR(o)-t)}incompatibleTokens=[`t`,`T`,`X`]};var Dn=class extends S{priority=40;parse(o){return tn(o)}set(o,e,t){return[Ue(o,t*1e3),{timestampIsSet:!0}]}incompatibleTokens=`*`};var An=class extends S{priority=20;parse(o){return tn(o)}set(o,e,t){return[Ue(o,t),{timestampIsSet:!0}]}incompatibleTokens=`*`};var _a={G:new en,y:new rn,Y:new an,R:new sn,u:new ln,Q:new cn,q:new dn,M:new mn,L:new pn,w:new un,I:new _n,d:new hn,D:new fn,E:new gn,e:new bn,c:new vn,i:new xn,a:new kn,b:new yn,B:new Cn,h:new Mn,H:new Sn,K:new wn,k:new Tn,m:new En,s:new In,S:new Nn,X:new On,x:new Rn,t:new Dn,T:new An};var es=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;var ts=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;var is=/^'([^]*?)'?$/;var ns=/''/g;var os=/\S/;var rs=/[a-zA-Z]/;function ha(n,o,e,t){let i=()=>Ue(t?.in||e,NaN),r=qNe(),d=t?.locale??r.locale??oh,x=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,O=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0;if(!o)return n?i():z$1(e,t?.in);let $={firstWeekContainsDate:x,weekStartsOn:O,locale:d},ie=[new Ji(t?.in,e)],_e=o.match(ts).map(B=>{let Y=B[0];if(Y in KU){let De=KU[Y];return De(B,d.formatLong)}return B}).join(``).match(es),ke=[];for(let B of _e){!t?.useAdditionalWeekYearTokens&&QU(B)&&XU(B,o,n),!t?.useAdditionalDayOfYearTokens&&ZU(B)&&XU(B,o,n);let Y=B[0],De=_a[Y];if(De){let{incompatibleTokens:To}=De;if(Array.isArray(To)){let Eo=ke.find(Io=>To.includes(Io.token)||Io.token===Y);if(Eo)throw new RangeError(`The format string mustn't contain \`${Eo.fullToken}\` and \`${B}\` at the same time`)}else if(De.incompatibleTokens===`*`&&ke.length>0)throw new RangeError(`The format string mustn't contain \`${B}\` and any other token at the same time`);ke.push({token:Y,fullToken:B});let Kn=De.run(n,B,d.match,$);if(!Kn)return i();ie.push(Kn.setter),n=Kn.rest}else{if(Y.match(rs))throw new RangeError("Format string contains an unescaped latin alphabet character `"+Y+"`");if(B===`''`?B=`'`:Y===`'`&&(B=as(B)),n.indexOf(B)===0)n=n.slice(B.length);else return i()}}if(n.length>0&&os.test(n))return i();let ct=ie.map(B=>B.priority).sort((B,Y)=>Y-B).filter((B,Y,De)=>De.indexOf(B)===Y).map(B=>ie.filter(Y=>Y.priority===B).sort((Y,De)=>De.subPriority-Y.subPriority)).map(B=>B[0]),it=z$1(e,t?.in);if(isNaN(+it))return i();let ni={};for(let B of ct){if(!B.validate(it,$))return i();let Y=B.set(it,ni,$);Array.isArray(Y)?(it=Y[0],Object.assign(ni,Y[1])):it=Y}return it}function as(n){return n.match(is)[1].replace(ns,`'`)}var ss=[`determinateSpinner`];function ls(n,o){if(n&1&&(kx(),Ir(0,`svg`,11),Eo(1,`circle`,12),Rr()),n&2){let e=Li();Wt(`viewBox`,e._viewBox()),zt(),TD(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),Wt(`r`,e._circleRadius())}}var cs=new I(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:fa})});var fa=100;var ds=10;var Yt=(()=>{class n{_elementRef=g(ue);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=g(cs),t=$te(),i=this._elementRef.nativeElement;this._noopAnimations=t===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=i.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&t===`reduced-motion`&&i.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=fa;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-ds)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(t){return new(t||n)};static ɵcmp=je({type:n,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(t,i){if(t&1&&ys$1(ss,5),t&2){let r;Fi(r=Ui())&&(i._determinateCircle=r.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(t,i){t&2&&(Wt(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,i.mode===`determinate`?i.value:null)(`mode`,i.mode),Op(`mat-`+i.color),TD(`width`,i.diameter,`px`)(`height`,i.diameter,`px`)(`--%NS%mat-progress-spinner-size`,i.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,i.diameter+`px`),Et(`_mat-animation-noopable`,i._noopAnimations)(`mdc-circular-progress--indeterminate`,i.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,KD],diameter:[2,`diameter`,`diameter`,KD],strokeWidth:[2,`strokeWidth`,`strokeWidth`,KD]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(t,i){if(t&1&&(va$1(0,ls,2,8,`ng-template`,null,0,F4),Ir(2,`div`,2,1),kx(),Ir(4,`svg`,3),Eo(5,`circle`,4),Rr()(),Fx(),Ir(6,`div`,5)(7,`div`,6)(8,`div`,7),Lk(9,8),Rr(),Ir(10,`div`,9),Lk(11,8),Rr(),Ir(12,`div`,10),Lk(13,8),Rr()()()),t&2){let r=B8(1);zt(4),Wt(`viewBox`,i._viewBox()),zt(),TD(`stroke-dasharray`,i._strokeCircumference(),`px`)(`stroke-dashoffset`,i._strokeDashOffset(),`px`)(`stroke-width`,i._circleStrokeWidth(),`%`),Wt(`r`,i._circleRadius()),zt(4),zu(`ngTemplateOutlet`,r),zt(2),zu(`ngTemplateOutlet`,r),zt(2),zu(`ngTemplateOutlet`,r)}},dependencies:[t9],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return n})();var St=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=be({type:n});static ɵinj=Ee({imports:[_n$1]})}return n})();var ms=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`];var ps=[`mat-icon, [matMenuItemIcon]`,`*`];function us(n,o){n&1&&(kx(),Ir(0,`svg`,2),Eo(1,`polygon`,3),Rr())}var _s=[`*`];function hs(n,o){if(n&1){let e=vD();Qr(0,`div`,0),Fk(`click`,function(){g_(e);return __(Li().closed.emit(`click`))})(`animationstart`,function(i){g_(e);return __(Li()._onAnimationStart(i.animationName))})(`animationend`,function(i){g_(e);return __(Li()._onAnimationDone(i.animationName))})(`animationcancel`,function(i){g_(e);return __(Li()._onAnimationDone(i.animationName))}),Qr(1,`div`,1),jn$1(2),Xr()()}if(n&2){let e=Li();Op(e._classList),Et(`mat-menu-panel-animations-disabled`,e._animationsDisabled)(`mat-menu-panel-exit-animation`,e._panelAnimationState===`void`)(`mat-menu-panel-animating`,e._isAnimating()),ba(`id`,e.panelId),Wt(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e.ariaLabelledby||null)(`aria-describedby`,e.ariaDescribedby||null)}}var _o=new I(`MAT_MENU_PANEL`);var st=(()=>{class n{_elementRef=g(ue);_document=g(X);_focusMonitor=g(Vd);_parentMenu=g(_o,{optional:!0});_changeDetectorRef=g(sn$1);role=`menuitem`;disabled=!1;disableRipple=!1;_hovered=new F;_focused=new F;_highlighted=!1;_triggersSubmenu=!1;constructor(){g(hr).load(Sv),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons`);for(let i=0;i<t.length;i++)t[i].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||n)};static ɵcmp=je({type:n,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:8,hostBindings:function(t,i){t&1&&kt(`click`,function(d){return i._checkDisabled(d)})(`mouseenter`,function(){return i._handleMouseEnter()}),t&2&&(Wt(`role`,i.role)(`tabindex`,i._getTabIndex())(`aria-disabled`,i.disabled)(`disabled`,i.disabled||null),Et(`mat-mdc-menu-item-highlighted`,i._highlighted)(`mat-mdc-menu-item-submenu-trigger`,i._triggersSubmenu))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,Ze],disableRipple:[2,`disableRipple`,`disableRipple`,Ze]},exportAs:[`matMenuItem`],ngContentSelectors:ps,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(t,i){t&1&&(ki(ms),jn$1(0),Ir(1,`span`,0),jn$1(2,1),Rr(),Eo(3,`div`,1),Ar(4,us,2,0,`:svg:svg`,2)),t&2&&(zt(3),zu(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleTrigger`,i._getHostElement()),zt(),Dr(i._triggersSubmenu?4:-1))},dependencies:[lw],encapsulation:2})}return n})();var fs=new I(`MatMenuContent`);var gs=new I(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var po=`_mat-menu-enter`;var Pn=`_mat-menu-exit`;var et=(()=>{class n{_elementRef=g(ue);_changeDetectorRef=g(sn$1);_injector=g(Y);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=mr();_allItems;_directDescendantItems=new Oc$1;_classList={};_panelAnimationState=`void`;_animationDone=new F;_isAnimating=N(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,i=l({},this._classList);t&&t.length&&t.split(` `).forEach(r=>{i[r]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(r=>{i[r]=!0}),this._elementRef.nativeElement.className=``),this._classList=i}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new fe;close=this.closed;panelId=g(Pr).getId(`mat-menu-panel-`);constructor(){let e=g(gs);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new WN(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(oo(this._directDescendantItems),bt(e=>RT(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let i=e.toArray(),r=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[r]&&!i[r].disabled?t.setActiveItem(r):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(oo(this._directDescendantItems),bt(t=>RT(...t.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,i=this._keyManager;switch(t){case 27:Po(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&i.setFocusOrigin(`keyboard`),i.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=fn$1(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=m(l({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Pn;(t||e===po)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===po||e===Pn)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Pn),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?po:Pn)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(oo(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||n)};static ɵcmp=je({type:n,selectors:[[`mat-menu`]],contentQueries:function(t,i,r){if(t&1&&EE(r,fs,5)(r,st,5)(r,st,4),t&2){let d;Fi(d=Ui())&&(i.lazyContent=d.first),Fi(d=Ui())&&(i._allItems=d),Fi(d=Ui())&&(i.items=d)}},viewQuery:function(t,i){if(t&1&&ys$1(jt,5),t&2){let r;Fi(r=Ui())&&(i.templateRef=r.first)}},hostVars:3,hostBindings:function(t,i){t&2&&Wt(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,Ze],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,e=>e==null?null:Ze(e)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[on$1([{provide:_o,useExisting:n}])],ngContentSelectors:_s,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(t,i){t&1&&(ki(),Rk(0,hs,3,12,`ng-template`))},styles:[`mat-menu {
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
`],encapsulation:2})}return n})();var bs=new I(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=g(Y);return()=>iw(n)}});var Qt=new WeakMap;var vs=(()=>{class n{_canHaveBackdrop;_element=g(ue);_viewContainerRef=g(Yt$1);_menuItemInstance=g(st,{optional:!0,self:!0});_dir=g(Vs$1,{optional:!0});_focusMonitor=g(Vd);_ngZone=g(ee);_injector=g(Y);_scrollStrategy=g(bs);_changeDetectorRef=g(sn$1);_animationsDisabled=mr();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Ae.EMPTY;_menuCloseSubscription=Ae.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=g(_o,{optional:!0});this._parentMaterialMenu=t instanceof et?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Qt.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let i=Qt.get(t);Qt.set(t,this),i&&i!==this&&i._closeMenu();let r=this._createOverlay(t),d=r.getConfig(),x=d.positionStrategy;this._setPosition(t,x),this._canHaveBackdrop?d.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:d.hasBackdrop=t.hasBackdrop??!1,r.hasAttached()||(r.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof et&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe($r(t.close)).subscribe(()=>{x.withLockedPosition(!1).reapplyLastPosition(),x.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,i=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof et&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(We(1)).subscribe(()=>{t.detach(),Qt.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(t.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&Qt.delete(i),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=wl$1(this._injector,t),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof et&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(e){return new Gs$1({positionStrategy:sw(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let r=i.connectionPair.overlayX===`start`?`after`:`before`,d=i.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(r,d)})})}_setPosition(e,t){let[i,r]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[d,x]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[O,$]=[d,x],[ie,_e]=[i,r],ke=0;if(this._triggersSubmenu()){if(_e=i=e.xPosition===`before`?`start`:`end`,r=ie=i===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let ct=this._parentMaterialMenu.items.first;this._parentInnerPadding=ct?ct._getHostElement().offsetTop:0}ke=d===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(O=d===`top`?`bottom`:`top`,$=x===`top`?`bottom`:`top`);t.withPositions([{originX:i,originY:O,overlayX:ie,overlayY:d,offsetY:ke},{originX:r,originY:O,overlayX:_e,overlayY:d,offsetY:ke},{originX:i,originY:$,overlayX:ie,overlayY:x,offsetY:-ke},{originX:r,originY:$,overlayX:_e,overlayY:x,offsetY:-ke}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments();return RT(e,this._parentMaterialMenu?this._parentMaterialMenu.closed:K$1(),this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Re(d=>this._menuOpen&&d!==this._menuItemInstance)):K$1(),t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Lo(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return Qt.get(e)===this}_triggerIsAriaDisabled(){return Ze(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){Cp()};static ɵdir=V({type:n})}return n})();var lt=(()=>{class n extends vs{_cleanupTouchstart;_hoverSubscription=Ae.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new fe;onMenuOpen=this.menuOpened;menuClosed=new fe;onMenuClose=this.menuClosed;constructor(){super(!0);let e=g(it);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{em(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Jh(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||n)};static ɵdir=V({type:n,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,i){t&1&&kt(`click`,function(d){return i._handleClick(d)})(`mousedown`,function(d){return i._handleMousedown(d)})(`keydown`,function(d){return i._handleKeydown(d)}),t&2&&Wt(`aria-haspopup`,i.menu?`menu`:null)(`aria-expanded`,i.menuOpen)(`aria-controls`,i.menuOpen?i.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Oe]})}return n})();var Zt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=be({type:n});static ɵinj=Ee({imports:[cm,Ol$1,_n$1,QN]})}return n})();var ui=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new F;bulk={select:o=>this._select(o),deselect:o=>this._deselect(o),setSelection:o=>this._setSelection(o)};constructor(o=!1,e,t=!0,i){this._multiple=o,this._emitChanges=t,this.compareWith=i,e&&e.length&&(o?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...o){return this._select(o)}deselect(...o){return this._deselect(o)}setSelection(...o){return this._setSelection(o)}toggle(o){return this.isSelected(o)?this.deselect(o):this.select(o)}clear(o=!0){this._unmarkAll();let e=this._hasQueuedChanges();return o&&this._emitChangeEvent(),e}isSelected(o){return this._selection.has(this._getConcreteValue(o))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(o){this._multiple&&this.selected&&this._selected.sort(o)}isMultipleSelection(){return this._multiple}_select(o){this._verifyValueAssignment(o),o.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(o){this._verifyValueAssignment(o),o.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(o){this._verifyValueAssignment(o);let e=this.selected,t=new Set(o.map(r=>this._getConcreteValue(r)));o.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(o){o=this._getConcreteValue(o),this.isSelected(o)||(this._multiple||this._unmarkAll(),this.isSelected(o)||this._selection.add(o),this._emitChanges&&this._selectedToEmit.push(o))}_unmarkSelected(o){o=this._getConcreteValue(o),this.isSelected(o)&&(this._selection.delete(o),this._emitChanges&&this._deselectedToEmit.push(o))}_unmarkAll(){this.isEmpty()||this._selection.forEach(o=>this._unmarkSelected(o))}_verifyValueAssignment(o){o.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(o,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(o,t))return t;return o}else return o}};var fo=(()=>{class n{_listeners=[];notify(e,t){for(let i of this._listeners)i(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(t){return new(t||n)};static ɵprov=L({token:n,factory:n.ɵfac})}return n})();var ks=[`trigger`];var ys=[`panel`];var Cs=[[[`mat-select-trigger`]],`*`];var Ms=[`mat-select-trigger`,`*`];function Ss(n,o){if(n&1&&(Ir(0,`span`,4),Ta$1(1),Rr()),n&2){let e=Li();zt(),Jk(e.placeholder)}}function ws(n,o){n&1&&jn$1(0)}function Ts(n,o){if(n&1&&(Ir(0,`span`,11),Ta$1(1),Rr()),n&2){let e=Li(2);zt(),Jk(e.triggerValue)}}function Es(n,o){if(n&1&&(Ir(0,`span`,5),Ar(1,ws,1,0)(2,Ts,2,1,`span`,11),Rr()),n&2){let e=Li();zt(),Dr(e.customTrigger?1:2)}}function Is(n,o){if(n&1){let e=vD();Ir(0,`div`,12,1),kt(`keydown`,function(i){g_(e);return __(Li()._handleKeydown(i))}),jn$1(2,1),Rr()}if(n&2){let e=Li();Op(e.panelClass),Et(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),Wt(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var Ns=new I(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=g(Y);return()=>iw(n)}});var Os=new I(`MAT_SELECT_CONFIG`);var ga=new I(`MatSelectTrigger`);var go=class{source;value;constructor(o,e){this.source=o,this.value=e}};var Jt=(()=>{class n{_viewportRuler=g($d);_changeDetectorRef=g(sn$1);_elementRef=g(ue);_dir=g(Vs$1,{optional:!0});_idGenerator=g(Pr);_renderer=g(it);_parentFormField=g(Le,{optional:!0});ngControl=g(Da$1,{self:!0,optional:!0});_liveAnnouncer=g(jN);_defaultOptions=g(Os,{optional:!0});_animationsDisabled=mr();_popoverLocation;_initialized=new F;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,r=QZe(e,this.options,this.optionGroups),d=t._getHostElement();e===0&&r===1?i.scrollTop=0:i.scrollTop=XZe(d.offsetTop,d.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new go(this,e)}_scrollStrategyFactory=g(Ns);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new F;_errorStateTracker;stateChanges=new F;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=N(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(NR.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=as$1(()=>{let e=this.options;return e?e.changes.pipe(oo(e),bt(()=>RT(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(bt(()=>this.optionSelectionChanges))});openedChange=new fe;_openedStream=this.openedChange.pipe(Re(e=>e),se(()=>{}));_closedStream=this.openedChange.pipe(Re(e=>!e),se(()=>{}));selectionChange=new fe;valueChange=new fe;constructor(){let e=g(PZe),t=g(U7,{optional:!0}),i=g(G7,{optional:!0}),r=g(new IE(`tabindex`),{optional:!0}),d=g(aw,{optional:!0}),x=g(Ne,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new WY(e,x||this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=d?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new ui(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe($r(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe($r(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(oo(null),$r(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute(`aria-labelledby`,e):i.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(We(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,r=>{r.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,r=t===13||t===32,d=this._keyManager;if(!d.isTyping()&&r&&!Po(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let x=this.selected;d.onKeydown(e);let O=this.selected;O&&x!==O&&this._liveAnnouncer.announce(O.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,r=i===40||i===38,d=t.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!d&&(i===13||i===32)&&t.activeItem&&!Po(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!d&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let x=this.options.some(O=>!O.disabled&&!O.selected);this.options.forEach(O=>{O.disabled||(x?O.select():O.deselect())})}else{let x=t.activeItemIndex;t.onKeydown(e),this._multiple&&r&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==x&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Po(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof nw?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new YN(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=RT(this.options.changes,this._destroy);this.optionSelectionChanges.pipe($r(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),RT(...this.options.map(t=>t._stateChanges)).pipe($r(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=Xn$1(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||n)};static ɵcmp=je({type:n,selectors:[[`mat-select`]],contentQueries:function(t,i,r){if(t&1&&EE(r,ga,5)(r,zY,5)(r,ble,5),t&2){let d;Fi(d=Ui())&&(i.customTrigger=d.first),Fi(d=Ui())&&(i.options=d),Fi(d=Ui())&&(i.optionGroups=d)}},viewQuery:function(t,i){if(t&1&&ys$1(ks,5)(ys,5)(Hte,5),t&2){let r;Fi(r=Ui())&&(i.trigger=r.first),Fi(r=Ui())&&(i.panel=r.first),Fi(r=Ui())&&(i._overlayDir=r.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(t,i){t&1&&kt(`keydown`,function(d){return i._handleKeydown(d)})(`focus`,function(){return i._onFocus()})(`blur`,function(){return i._onBlur()}),t&2&&(Wt(`id`,i.id)(`tabindex`,i.disabled?-1:i.tabIndex)(`aria-controls`,i.panelOpen?i.id+`-panel`:null)(`aria-expanded`,i.panelOpen)(`aria-label`,i.ariaLabel||null)(`aria-required`,i.required.toString())(`aria-disabled`,i.disabled.toString())(`aria-invalid`,i.errorState)(`aria-activedescendant`,i._getAriaActiveDescendant()),Et(`mat-mdc-select-disabled`,i.disabled)(`mat-mdc-select-invalid`,i.errorState)(`mat-mdc-select-required`,i.required)(`mat-mdc-select-empty`,i.empty)(`mat-mdc-select-multiple`,i.multiple)(`mat-select-open`,i.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,Ze],disableRipple:[2,`disableRipple`,`disableRipple`,Ze],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:KD(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,Ze],placeholder:`placeholder`,required:[2,`required`,`required`,Ze],multiple:[2,`multiple`,`multiple`,Ze],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,Ze],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,KD],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,Ze]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[on$1([{provide:Oe$1,useExisting:n},{provide:vle,useExisting:n}]),Pt],ngContentSelectors:Ms,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(t,i){if(t&1&&(ki(Cs),Ir(0,`div`,2,0),kt(`click`,function(){return i.open()}),Ir(3,`div`,3),Ar(4,Ss,2,1,`span`,4)(5,Es,3,1,`span`,5),Rr(),Ir(6,`div`,6)(7,`div`,7),kx(),Ir(8,`svg`,8),Eo(9,`path`,9),Rr()()()(),va$1(10,Is,3,16,`ng-template`,10),kt(`detach`,function(){return i.close()})(`backdropClick`,function(){return i.close()})(`overlayKeydown`,function(d){return i._handleOverlayKeydown(d)})),t&2){let r=B8(1);zt(3),Wt(`id`,i._valueId),zt(),Dr(i.empty?4:5),zt(6),zu(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,i._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,i._scrollStrategy)(`cdkConnectedOverlayOrigin`,i._preferredOverlayOrigin||r)(`cdkConnectedOverlayPositions`,i._positions)(`cdkConnectedOverlayWidth`,i._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,i._popoverLocation)}},dependencies:[nw,Hte],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return n})();var th=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=V({type:n,selectors:[[`mat-select-trigger`]],features:[on$1([{provide:ga,useExisting:n}])]})}return n})();var ei=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=be({type:n});static ɵinj=Ee({imports:[Ol$1,aQe,_n$1,QN,kt$1,aQe]})}return n})();var Rs=[`input`];var Ds=[`*`];var vo={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var As=new I(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>vo});var xe=(function(n){return n[n.Init=0]=`Init`,n[n.Checked=1]=`Checked`,n[n.Unchecked=2]=`Unchecked`,n[n.Indeterminate=3]=`Indeterminate`,n})(xe||{});var xo=class{source;checked};var _i=(()=>{class n{_elementRef=g(ue);_changeDetectorRef=g(sn$1);_ngZone=g(ee);_animationsDisabled=mr();_options=g(As,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new xo;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new fe;indeterminateChange=new fe;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=xe.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){g(hr).load(Sv);let e=g(new IE(`tabindex`),{optional:!0});this._options=this._options||vo,this.color=this._options.color||vo.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=g(Pr).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(xe.Indeterminate):this._transitionCheckState(this.checked?xe.Checked:xe.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=N(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,i=this._getAnimationTargetElement();if(!(t===e||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let r=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(r)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?xe.Checked:xe.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return``;switch(e){case xe.Init:if(t===xe.Checked)return this._animationClasses.uncheckedToChecked;if(t==xe.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case xe.Unchecked:return t===xe.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case xe.Checked:return t===xe.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case xe.Indeterminate:return t===xe.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(t){return new(t||n)};static ɵcmp=je({type:n,selectors:[[`mat-checkbox`]],viewQuery:function(t,i){if(t&1&&ys$1(Rs,5),t&2){let r;Fi(r=Ui())&&(i._inputElement=r.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(t,i){t&2&&(ba(`id`,i.id),Wt(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),Op(i.color?`mat-`+i.color:`mat-accent`),Et(`_mat-animation-noopable`,i._animationsDisabled)(`mdc-checkbox--disabled`,i.disabled)(`mat-mdc-checkbox-disabled`,i.disabled)(`mat-mdc-checkbox-checked`,i.checked)(`mat-mdc-checkbox-disabled-interactive`,i.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,Ze],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,Ze],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,Ze],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?void 0:KD(e)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Ze],checked:[2,`checked`,`checked`,Ze],disabled:[2,`disabled`,`disabled`,Ze],indeterminate:[2,`indeterminate`,`indeterminate`,Ze]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[on$1([{provide:jc$1,useExisting:Gt(()=>n),multi:!0},{provide:Ra$1,useExisting:n,multi:!0}]),Pt],ngContentSelectors:Ds,decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,i){if(t&1&&(ki(),Ir(0,`label`,3),kt(`click`,function(d){return i._preventBubblingFromLabel(d)}),Ir(1,`span`,4,0),Eo(3,`span`,5),Ir(4,`input`,6,1),kt(`blur`,function(){return i._onBlur()})(`click`,function(){return i._onInputClick()})(`change`,function(d){return i._onInteractionEvent(d)}),Rr(),Eo(6,`span`,7),Ir(7,`span`,8),kx(),Ir(8,`svg`,9),Eo(9,`path`,10),Rr(),Fx(),Eo(10,`span`,11),Rr(),Eo(11,`span`,12),Rr(),Ir(12,`span`,13,2),jn$1(14),Rr()()),t&2){let r=B8(2);zu(`labelPosition`,i.labelPosition)(`for`,i.inputId),zt(4),Et(`mdc-checkbox--selected`,i.checked),zu(`checked`,i.checked)(`indeterminate`,i.indeterminate)(`disabled`,i.disabled&&!i.disabledInteractive)(`id`,i.inputId)(`required`,i.required)(`tabIndex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex),Wt(`aria-label`,i.ariaLabel||null)(`aria-labelledby`,i.ariaLabelledby)(`aria-describedby`,i.ariaDescribedby)(`aria-checked`,i.indeterminate?`mixed`:null)(`aria-controls`,i.ariaControls)(`aria-disabled`,i.disabled&&i.disabledInteractive?!0:null)(`aria-expanded`,i.ariaExpanded)(`aria-owns`,i.ariaOwns)(`name`,i.name)(`value`,i.value),zt(7),zu(`matRippleTrigger`,r)(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleCentered`,!0)}},dependencies:[lw,dQe],styles:[`.mdc-checkbox {
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
`],encapsulation:2})}return n})();var zn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=be({type:n});static ɵinj=Ee({imports:[_i,_n$1]})}return n})();var Ps=[`*`];function Fs(n,o){if(n&1&&(Ir(0,`div`,3),Ta$1(1),Rr()),n&2){let e=Li();zt(),Jk(e.info())}}function Vs(n,o){if(n&1&&(Ir(0,`icon`,4),Ta$1(1,`info`),Rr()),n&2)zu(`matTooltip`,Li().info())}function Ls(n,o){n&1&&Eo(0,`div`,5)}function Bs(n,o){if(n&1&&(Ir(0,`div`,6)(1,`div`,8)(2,`div`,9)(3,`icon`),Ta$1(4),Rr()()()()),n&2){let e=Li();zt(),Et(`bg-base-200`,!e.value())(`bg-info`,e.value())(`border-info!`,e.value()),zt(),Et(`left-1`,!e.value())(`left-5`,e.value())(`bg-base-400`,!e.value())(`bg-info-light`,e.value()),zt(2),Jk(e.value()?`done`:`remove`)}}function Us(n,o){if(n&1){let e=vD();Ir(0,`mat-checkbox`,10),kt(`ngModelChange`,function(i){g_(e);return __(Li().setValue(i))}),Rr(),qK()}if(n&2)zu(`ngModel`,Li().value()),ZK()}var va=(()=>{class n{constructor(){this.toggle=Ss$1(void 0),this.label=Ss$1(void 0),this.info=Ss$1(void 0),this.inline=Ss$1(!0),this.value=N(void 0),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e}setValue(e){this.value.set(e),this._onChange&&this._onChange(e)}writeValue(e){this.value.set(e)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je({type:n,selectors:[[`settings-toggle`]],inputs:{toggle:[1,`toggle`],label:[1,`label`],info:[1,`info`],inline:[1,`inline`]},features:[on$1([{provide:jc$1,useExisting:Gt(()=>n),multi:!0}])],ngContentSelectors:Ps,decls:11,vars:13,consts:[[`type`,`button`,`matRipple`,``,1,`hover:bg-base-200`,`relative`,`flex`,`flex-1`,`items-center`,`space-x-2`,`overflow-hidden`,`rounded-sm`,`border`,`py-1`,`pr-1`,`pl-2`,3,`click`],[1,`z-10`,`flex`,`flex-1`,`items-center`,`space-x-2`,`px-2`,`text-left`],[1,`flex`,`flex-col`,`justify-center`,`w-full`,`leading-none`,`h-full`],[1,`text-xs`,`opacity-30`],[3,`matTooltip`],[1,`bg-info`,`absolute`,`inset-0`,`z-0`,`m-0!`,`opacity-10`],[1,`px-2`],[1,`pointer-events-none`,3,`ngModel`],[`toggle`,``,1,`border-base-400`,`relative`,`h-8`,`w-12`,`rounded-full`,`border-2`],[1,`absolute`,`top-1/2`,`flex`,`h-6`,`w-6`,`-translate-x-0.5`,`-translate-y-1/2`,`items-center`,`justify-center`,`rounded-full`,`text-black`,`shadow-sm`],[1,`pointer-events-none`,3,`ngModelChange`,`ngModel`]],template:function(t,i){t&1&&(ki(),Ir(0,`button`,0),kt(`click`,function(){return i.setValue(!i.value())}),Ir(1,`div`,1)(2,`div`,2)(3,`div`),Ta$1(4),jn$1(5),Rr(),Ar(6,Fs,2,1,`div`,3),Rr(),Ar(7,Vs,2,1,`icon`,4),Rr(),Ar(8,Ls,1,0,`div`,5),Ar(9,Bs,5,15,`div`,6)(10,Us,1,1,`mat-checkbox`,7),Rr()),t&2&&(Et(`border-base-300`,!i.value())(`border-info`,i.value()),zt(),Et(`py-2`,!i.inline())(`py-1`,!i.inline()),zt(3),Jk(i.label()),zt(2),Dr(i.info()&&i.inline()?6:-1),zt(),Dr(i.info()&&!i.inline()?7:-1),zt(),Dr(i.value()?8:-1),zt(),Dr(i.toggle()?9:10))},dependencies:[zn,_i,YDe,BDe,j7,IQe,Yt$2,mt],styles:[`[_nghost-%COMP%]{display:flex}[toggle][_ngcontent-%COMP%]{transition:background .2s,left .2s}
/*# sourceMappingURL=settings-toggle.component.css.map */`]})}}return n})();var zs=64;var Gs=64;var Hs=30*1e3;var Ws=`PlaceOS.image-cache-v1`;var js=`PlaceOS.image-cache-keys-v1`;var tt=new Map;var yo=new Map;var Rt=new Map;var xa=!1;function qs(){if(!xa&&(xa=!0,typeof caches<`u`&&caches.delete(Ws).catch(()=>!1),typeof sessionStorage<`u`))try{sessionStorage.removeItem(js)}catch{}}function Co(n){let o=tt.get(n);if(o)return tt.delete(n),tt.set(n,o),o}function $s(n,o){let e=tt.get(n);for(e&&e!==o&&URL.revokeObjectURL(e),tt.delete(n),tt.set(n,o);tt.size>zs;){let t=tt.keys().next().value;if(!t)break;let i=tt.get(t);tt.delete(t),i&&URL.revokeObjectURL(i)}return o}function Xs(n){for(Rt.delete(n),Rt.set(n,Date.now()+Hs);Rt.size>Gs;){let o=Rt.keys().next().value;if(!o)break;Rt.delete(o)}}function Ks(n){let o=gt();document.cookie=`${o===`x-api-key`?`api-key=`+encodeURIComponent(Ro()):`bearer_token=`+encodeURIComponent(o)};max-age=30;path=${n};samesite=strict;${location.protocol===`https:`?`secure;`:``}`}function Ys(){let n=gt();return n===`x-api-key`?{"X-API-Key":Ro()}:{Authorization:`Bearer ${n}`}}function ka(n,o){return Ca(n,()=>(Ks(o),fetch(n)))}function ya(n){return Ca(n,()=>fetch(n,{headers:Ys()}))}async function Ca(n,o){qs();let e=Co(n);if(e)return e;if((Rt.get(n)||0)>Date.now())throw new Error(`Image load is in retry cooldown`);Rt.delete(n);let i=yo.get(n);if(i)return i;let r=o().then(async d=>{if(!d?.ok)throw new Error(`Failed to fetch image: ${d?.status}`);return $s(n,URL.createObjectURL(await d.blob()))}).catch(d=>{throw Xs(n),d}).finally(()=>yo.delete(n));return yo.set(n,r),r}var wt=(()=>{class n extends Is$1{constructor(){super(...arguments),this._element=g(ue),this._observer=null,this._source_version=0,this.source=Ss$1(void 0)}ngOnChanges(e){if(!e.source)return;this._source_version+=1,this.clearTimeout(`load`),this._observer?.disconnect(),this._observer=null;let t=this.source();if(t){if(!this._isLocalUrl(t)){this._element.nativeElement.src=t;return}this._loadWhenVisible(t,this._source_version)}}ngOnDestroy(){this._observer?.disconnect(),this._observer=null,super.ngOnDestroy()}_loadWhenVisible(e,t){if(typeof IntersectionObserver>`u`){this._loadImage(e,t);return}this._observer=new IntersectionObserver(i=>{i.some(({isIntersecting:r})=>r)&&(this._observer?.disconnect(),this._observer=null,this._loadImage(e,t))},{rootMargin:`300px`}),this._observer.observe(this._element.nativeElement)}async _loadImage(e,t){if(t!==this._source_version||e!==this.source())return;if(!Ao()){this.timeout(`load`,()=>{this._loadImage(e,t)},300);return}let i=Co(e);if(i){this._element.nativeElement.src=i;return}let r=e.includes(`/api/engine/v2/uploads`)||e.includes(`/api/engine/v2/signage`);try{let d=r?await ka(e,this._cookiePath(e)):await ya(e);t===this._source_version&&e===this.source()&&(this._element.nativeElement.src=d)}catch(d){t===this._source_version&&this._element.nativeElement.dispatchEvent(new ErrorEvent(`error`,{error:d}))}}_isLocalUrl(e){try{return new URL(e,location.href).origin===location.origin}catch{return!1}}_cookiePath(e){return e.includes(`/api/engine/v2/uploads`)?`/api/engine/v2/uploads`:`/api/engine/v2/signage`}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Rt$1(n)))(i||n)}})()}static{this.ɵdir=V({type:n,selectors:[[`img`,`auth`,``],[`video`,`auth`,``],[`audio`,`auth`,``]],inputs:{source:[1,`source`]},features:[Oe,Pt]})}}return n})();var Qs=[`*`];function Zs(n,o){n&1&&(Ir(0,`button`,7)(1,`icon`),Ta$1(2,`close`),Rr()())}function Js(n,o){if(n&1&&Ar(0,Zs,3,0,`button`,7),n&2)Dr(Li(2).loading()?-1:0)}function el(n,o){if(n&1&&(Ir(0,`a`,8)(1,`icon`),Ta$1(2,`close`),Rr()()),n&2)zu(`routerLink`,Li(3).close())}function tl(n,o){if(n&1&&Ar(0,el,3,1,`a`,8),n&2)Dr(Li(2).loading()?-1:0)}function il(n,o){if(n&1&&Ar(0,Js,1,1)(1,tl,1,1),n&2)Dr(Li().close()?.length?1:0)}function nl(n,o){n&1&&(jn$1(0),Eo(1,`div`,9))}function ol(n,o){if(n&1&&(Ir(0,`div`,5),Eo(1,`mat-spinner`,10),Ir(2,`p`,11),Ta$1(3),Rr()()),n&2){let e=Li();zt(),zu(`diameter`,32),zt(2),Jk(e.loading())}}function rl(n,o){if(n&1&&(Ir(0,`kbd`,14),Ta$1(1),Rr()),n&2){let e=Li(2);zt(),Jk(e.confirm_hotkey())}}function al(n,o){if(n&1){let e=vD();Ir(0,`footer`,12)(1,`button`,13),kt(`click`,function(){g_(e);return __(Li().confirm.emit())}),Ta$1(2),ID(3,`translate`),Ar(4,rl,2,1,`kbd`,14),Rr()()}if(n&2){let e=Li();Et(`max-w-156`,!e.full_width()),zt(),zu(`disabled`,e.confirm_disabled()),zt(),yo$1(` `,e.confirm_text()||L4(3,5,`COMMON.SAVE`),` `),zt(2),Dr(e.confirm_hotkey()?4:-1)}}var Gn=(()=>{class n{constructor(){this.loading=Ss$1(``),this.heading=Ss$1(`Fullscreen Modal`),this.confirm_text=Ss$1(``),this.confirm_hotkey=Ss$1(``),this.confirm_disabled=Ss$1(!1),this.close=Ss$1([]),this.hide_confirm=Ss$1(!1),this.hide_close=Ss$1(!1),this.full_width=Ss$1(!1),this.confirm=GTe(),this.closed=GTe()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je({type:n,selectors:[[`fullscreen-modal-shell`],[``,`fs-modal-shell`,``]],inputs:{loading:[1,`loading`],heading:[1,`heading`],confirm_text:[1,`confirm_text`],confirm_hotkey:[1,`confirm_hotkey`],confirm_disabled:[1,`confirm_disabled`],close:[1,`close`],hide_confirm:[1,`hide_confirm`],hide_close:[1,`hide_close`],full_width:[1,`full_width`]},outputs:{confirm:`confirm`,closed:`closed`},ngContentSelectors:Qs,decls:10,vars:14,consts:[[`cdkScrollable`,``,1,`bg-base-200`,`fixed`,`inset-0`,`flex`,`flex-col`,`items-center`,`overflow-auto`,`px-2`],[1,`border-base-300`,`bg-base-100`,`fixed`,`top-0`,`mx-auto`,`h-screen`,`max-w-full`,`border-x`],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`mx-auto`,`my-2`,`flex`,`h-14`,`w-full`,`items-center`,`justify-between`,`rounded-sm`,`border-none`,`px-4`,`py-2`],[1,`flex`,`items-center`,`text-xl`,`font-medium`,`capitalize`,3,`innerHTML`],[1,`z-0`,`mx-auto`,`h-1/2`,`w-full`,`flex-1`,`space-y-8`,`p-2`],[1,`flex`,`h-1/2`,`w-full`,`flex-1`,`flex-col`,`items-center`,`justify-center`,`space-y-4`,`p-12`],[1,`bg-base-200`,`fixed`,`bottom-0`,`left-1/2`,`z-10`,`mx-auto`,`my-2`,`flex`,`w-full`,`-translate-x-1/2`,`items-center`,`justify-end`,`rounded-sm`,`border-none`,`px-4`,`py-2`,3,`max-w-156`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[`icon`,``,`matRipple`,``,3,`routerLink`],[1,`h-24`,`w-full`],[3,`diameter`],[1,`text-center`,`opacity-50`],[1,`bg-base-200`,`fixed`,`bottom-0`,`left-1/2`,`z-10`,`mx-auto`,`my-2`,`flex`,`w-full`,`-translate-x-1/2`,`items-center`,`justify-end`,`rounded-sm`,`border-none`,`px-4`,`py-2`],[`btn`,``,`matRipple`,``,1,`flex`,`min-w-32`,`items-center`,`justify-center`,`gap-2`,3,`click`,`disabled`],[1,`border-base-300`,`bg-base-100`,`text-base-content`,`rounded`,`border`,`px-2`,`py-1`,`text-xs`,`leading-none`,`shadow-sm`]],template:function(t,i){t&1&&(ki(),Ir(0,`div`,0),Eo(1,`div`,1),Ir(2,`header`,2),Eo(3,`h2`,3),ID(4,`sanitize`),Ar(5,il,2,1),Rr(),Ir(6,`main`,4),Ar(7,nl,2,0)(8,ol,4,2,`div`,5),Rr(),Ar(9,al,5,7,`footer`,6),Rr()),t&2&&(zt(),Et(`w-160`,!i.full_width())(`w-full`,i.full_width()),zt(),Et(`max-w-156`,!i.full_width()),zt(),zu(`innerHTML`,L4(4,12,i.heading()),Sq),zt(2),Dr(i.hide_close()?-1:5),zt(),Et(`max-w-156`,!i.full_width()),zt(),Dr(i.loading()?8:7),zt(2),Dr(!i.loading()&&!i.hide_confirm()?9:-1))},dependencies:[Lte,St,Yt,IQe,L9e,P9e,cm,lw,Gee,YS,f,E],styles:[`main[_ngcontent-%COMP%]{scroll-margin-top:60px}
/*# sourceMappingURL=fullscreen-modal-shell.component.css.map */`]})}}return n})();var sl=[`input`];var ll=[`formField`];var cl=[`*`];var Hn=class{source;value;constructor(o,e){this.source=o,this.value=e}};var dl={provide:jc$1,useExisting:Gt(()=>hi),multi:!0};var Sa=new I(`MatRadioGroup`);var ml=new I(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var hi=(()=>{class n{_changeDetector=g(sn$1);_value=null;_name=g(Pr).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new fe;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Hn(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(t){return new(t||n)};static ɵdir=V({type:n,selectors:[[`mat-radio-group`]],contentQueries:function(t,i,r){if(t&1&&EE(r,ti,5),t&2){let d;Fi(d=Ui())&&(i._radios=d)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,Ze],required:[2,`required`,`required`,Ze],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Ze]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[on$1([dl,{provide:Sa,useExisting:n}])]})}return n})();var ti=(()=>{class n{_elementRef=g(ue);_changeDetector=g(sn$1);_focusMonitor=g(Vd);_radioDispatcher=g(fo);_defaultOptions=g(ml,{optional:!0});_ngZone=g(ee);_renderer=g(it);_uniqueId=g(Pr).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new fe;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=mr();_injector=g(Y);constructor(){g(hr).load(Sv);let e=g(Sa,{optional:!0}),t=g(new IE(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=KD(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new Hn(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let i=this._inputElement?.nativeElement;i&&(i.setAttribute(`tabindex`,t+``),this._previousTabIndex=t,fn$1(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===i&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===i&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(t){return new(t||n)};static ɵcmp=je({type:n,selectors:[[`mat-radio-button`]],viewQuery:function(t,i){if(t&1&&ys$1(sl,5)(ll,7,ue),t&2){let r;Fi(r=Ui())&&(i._inputElement=r.first),Fi(r=Ui())&&(i._rippleTrigger=r.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(t,i){t&1&&kt(`focus`,function(){return i._inputElement.nativeElement.focus()}),t&2&&(Wt(`id`,i.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),Et(`mat-primary`,i.color===`primary`)(`mat-accent`,i.color===`accent`)(`mat-warn`,i.color===`warn`)(`mat-mdc-radio-checked`,i.checked)(`mat-mdc-radio-disabled`,i.disabled)(`mat-mdc-radio-disabled-interactive`,i.disabledInteractive)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,Ze],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:KD(e)],checked:[2,`checked`,`checked`,Ze],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,Ze],required:[2,`required`,`required`,Ze],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Ze]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:cl,decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,i){t&1&&(ki(),Ir(0,`label`,2,0)(2,`span`,3),Eo(3,`span`,4),Ir(4,`input`,5,1),kt(`change`,function(d){return i._onInputInteraction(d)}),Rr(),Ir(6,`span`,6),Eo(7,`span`,7)(8,`span`,8),Rr(),Ir(9,`span`,9),Eo(10,`span`,10),Rr()(),Ir(11,`span`,11),jn$1(12),Rr()()),t&2&&(zu(`labelPosition`,i.labelPosition)(`for`,i.inputId),zt(2),Et(`mdc-radio--disabled`,i.disabled),zt(2),zu(`id`,i.inputId)(`checked`,i.checked)(`disabled`,i.disabled&&!i.disabledInteractive)(`required`,i.required),Wt(`name`,i.name)(`value`,i.value)(`aria-label`,i.ariaLabel)(`aria-labelledby`,i.ariaLabelledby)(`aria-describedby`,i.ariaDescribedby)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null),zt(5),zu(`matRippleTrigger`,i._rippleTrigger.nativeElement)(`matRippleDisabled`,i._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[lw,dQe],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})}return n})();var Wn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=be({type:n});static ɵinj=Ee({imports:[cm,ti,_n$1]})}return n})();var Ta=(()=>{class n{constructor(){this.url=g(hce)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je({type:n,selectors:[[`image-viewer`]],decls:5,vars:1,consts:[[1,`bg-base-200`,`h-screen`,`w-screen`],[`auth`,``,1,`h-full`,`w-full`,`object-contain`,`object-center`,3,`source`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``,1,`bg-base-100`,`absolute`,`top-1`,`right-1`]],template:function(t,i){t&1&&(Ir(0,`div`,0),Eo(1,`img`,1),Ir(2,`button`,2)(3,`icon`),Ta$1(4,`close`),Rr()()()),t&2&&(zt(),zu(`source`,i.url))},dependencies:[IQe,wt,L9e,P9e],encapsulation:2})}}return n})();var pl=(n,o,e)=>({file:n,is_public:o,permissions:e});function ul(n,o){if(n&1){let e=vD();Ir(0,`div`,7)(1,`label`),Ta$1(2,`Permissions`),Rr(),Ir(3,`mat-form-field`,11)(4,`mat-select`,12),kt(`ngModelChange`,function(i){g_(e);return __(Li().permissions.set(i))}),Ir(5,`mat-option`,13),Ta$1(6,`None`),Rr(),Ir(7,`mat-option`,14),Ta$1(8,`Support`),Rr(),Ir(9,`mat-option`,15),Ta$1(10,`Admin`),Rr()(),qK(),Rr()()}if(n&2){let e=Li();zt(4),zu(`ngModel`,e.permissions()),ZK()}}var Ia=(()=>{class n{constructor(){this._dialog_ref=g(zb),this._data=g(hce),this.file=this._data.file,this.is_public=N(!!this._data.is_public),this.permissions=N(`none`),this.file=this._data.file}close(){this._dialog_ref.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je({type:n,selectors:[[`upload-permissions-modal`]],decls:18,vars:7,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[1,`min-w-[20rem]`,`space-y-2`,`px-4`,`py-2`],[1,`flex`,`flex-col`],[`appearance`,`outline`,1,`no-subscript`],[`matInput`,``,`disabled`,`true`,`placeholder`,`File Name`,3,`ngModel`],[1,`flex`,`flex-col`,`space-y-2`],[1,`border-base-200`,`flex`,`items-center`,`justify-end`,`space-x-2`,`border-t`,`px-4`,`py-2`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`w-32`],[`btn`,``,`matRipple`,``,1,`w-32`,3,`mat-dialog-close`],[`appearance`,`outline`],[3,`ngModelChange`,`ngModel`],[`value`,`none`],[`value`,`support`],[`value`,`admin`]],template:function(t,i){t&1&&(Ir(0,`header`,0)(1,`h2`,1),Ta$1(2,`Upload File`),Rr(),Ir(3,`button`,2)(4,`icon`),Ta$1(5,`close`),Rr()()(),Ir(6,`main`,3)(7,`div`,4)(8,`label`),Ta$1(9,`File Name`),Rr(),Ir(10,`mat-form-field`,5),Eo(11,`input`,6),qK(),Rr()(),Ar(12,ul,11,1,`div`,7),Rr(),Ir(13,`footer`,8)(14,`button`,9),Ta$1(15,` Cancel `),Rr(),Ir(16,`button`,10),Ta$1(17,` Upload `),Rr()()),t&2&&(zt(11),zu(`ngModel`,i.file.name),ZK(),zt(),Dr(i.is_public()?-1:12),zt(4),zu(`mat-dialog-close`,A4(3,pl,i.file,i.is_public(),i.permissions())))},dependencies:[L9e,P9e,kt$1,un$1,YDe,YF,BDe,j7,ei,Jt,zY,IQe,ks$1,Is$2,cm,lw],encapsulation:2})}}return n})();var _l=[`image_list`];var hl=[`file_input`];function fl(n,o){if(n&1){let e=vD();Ir(0,`div`,15),Eo(1,`img`,16),Ir(2,`div`,17),Eo(3,`div`,18),Ir(4,`div`,19)(5,`button`,20),kt(`click`,function(){let i=g_(e).$implicit;return __(Li().copyLink(i))}),Ir(6,`icon`),Ta$1(7,`link`),Rr()(),Ir(8,`button`,20),kt(`click`,function(){let i=g_(e).$implicit;return __(Li().viewImage(i))}),Ir(9,`icon`),Ta$1(10,`visibility`),Rr()(),Ir(11,`button`,20),kt(`click`,function(){let i=g_(e).$implicit;return __(Li().removeImage(i))}),Ir(12,`icon`),Ta$1(13,`close`),Rr()()()()()}if(n&2){let e=o.$implicit;TD(`transform`,`translate(-`+Li().offset()+`00%)`),zt(),zu(`source`,e)}}function gl(n,o){if(n&1&&Eo(0,`mat-progress-spinner`,22),n&2){let e=Li().$implicit;zu(`value`,e.progress)(`diameter`,64)}}function bl(n,o){n&1&&(Ir(0,`icon`,23),Ta$1(1,`warning`),Rr())}function vl(n,o){n&1&&(Ir(0,`div`,24)(1,`icon`,25),Ta$1(2,`refresh`),Rr()())}function xl(n,o){if(n&1){let e=vD();Ir(0,`div`,21),kt(`click`,function(){let i=g_(e).$implicit;return __(Li().retryUpload(i))}),Ar(1,gl,1,2,`mat-progress-spinner`,22),Ar(2,bl,2,0,`icon`,23),Ar(3,vl,3,0,`div`,24),Rr()}if(n&2){let e=o.$implicit;TD(`transform`,`translate(-`+Li().offset()+`00%)`),zu(`matTooltip`,e.error),zt(),Dr(e.error?-1:1),zt(),Dr(e.error?2:-1),zt(),Dr(e.error?3:-1)}}function kl(n,o){if(n&1){let e=vD();Ir(0,`button`,26),kt(`click`,function(){g_(e);return __(Li().previousOffset())}),Ir(1,`icon`),Ta$1(2,`chevron_left`),Rr()()}if(n&2)zu(`disabled`,Li().offset()===0)}function yl(n,o){if(n&1){let e=vD();Ir(0,`button`,27),kt(`click`,function(){g_(e);return __(Li().nextOffset())}),Ir(1,`icon`),Ta$1(2,`chevron_right`),Rr()()}if(n&2){let e=Li();zu(`disabled`,e.offset()>=e.length()-e.view_space())}}function Cl(n,o){if(n&1){let e=vD();Ir(0,`mat-chip-row`,28),kt(`removed`,function(){let i=g_(e).$implicit;return __(Li().removeImage(i))}),Ir(1,`div`,29),Ta$1(2),Rr(),Ir(3,`button`,30)(4,`icon`),Ta$1(5,`cancel`),Rr()()()}if(n&2){let e=o.$implicit;zt(2),Jk(e),zt(),Wt(`aria-label`,`Remove `+e)}}var Na=(()=>{class n extends Is$1{constructor(){super(...arguments),this._clipboard=g(eG),this._uploads=g(Q9e),this._dialog=g(Yb),this._injector=g(Y),this._upload_completion_effect=At(()=>{let e=this.upload_list(),t=this.upload_ids();for(let i of t){let r=e.find(d=>d?.id===i);r&&r.progress>=100&&(this.addImageUrl(r.link),this.upload_ids.set(this.upload_ids().filter(d=>d!==i)))}},{injector:this._injector}),this.list=N([]),this.upload_map={},this.upload_ids=N([]),this.upload_list=N([]),this.offset=N(0),this.view_space=N(0),this.separators=[188,13],this.uploads=Te(()=>{let e=this.upload_ids();return this.upload_list().filter(t=>e.includes(t?.id))}),this.length=Te(()=>this.list().length+this.uploads().length+1),this._list_el=jTe(`image_list`),this._file_input=jTe(`file_input`),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e}ngAfterViewInit(){this.updateViewSpace()}updateViewSpace(){this.timeout(`init_view_space`,()=>{let e=this._list_el()?.nativeElement?.getBoundingClientRect();e&&this.view_space.set(Math.floor(e.width/152))},100)}copyLink(e){this._clipboard.copy(e),lB(`Copied image URL to clipboard`)}viewImage(e){this._dialog.open(Ta,{data:e})}removeImage(e){this.setValue(this.list().filter(t=>t!==e))}addImage(e){e.value&&(this.setValue(Or([...this.list(),e.value])),e.chipInput.inputElement.value=``)}addImageUrl(e){this.setValue(Or([...this.list(),e]))}retryUpload(e){e.error&&(e.error=null,e.upload.resume())}previousOffset(){this.offset.update(e=>e-1)}nextOffset(){this.offset.update(e=>e+1)}async uploadImages(e){let t=e.target;if(t?.files){let i=t.files;if(i.length){this.interval(`update_status`,()=>this._updateUploadHistory());for(let r=0;r<i.length;r++)try{let d=await this._uploads.uploadFileWithPermissions(i[r]);this.upload_ids.set([...this.upload_ids(),d])}catch(d){if(d instanceof iT)continue;aB(`Failed to upload ${i[r].name}: ${d?.message||`Unknown error`}`)}this._file_input().nativeElement.value=``}}}setValue(e){let t=e||[];this.list.set(t),this._onChange&&this._onChange(t)}writeValue(e){this.list.set(e||[])}async _updateUploadHistory(){let e=this.upload_ids();if(e.length===0)return;let i=this._uploads.upload_list().filter(d=>e.find(x=>x===d?.id)),r=i.filter(d=>d.progress>=100);this.upload_list.set(i),r.forEach(d=>{this.upload_map[d?.id]=d.upload?.id||d?.id,delete d.upload}),r.length>=e.length&&this.clearInterval(`update_status`)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Rt$1(n)))(i||n)}})()}static{this.ɵcmp=je({type:n,selectors:[[`image-list-field`]],viewQuery:function(t,i){t&1&&Bk(i._list_el,_l,5)(i._file_input,hl,5),t&2&&V8(2)},features:[on$1([{provide:jc$1,useExisting:Gt(()=>n),multi:!0},{provide:ale,useValue:Ia}]),Oe],decls:23,vars:13,consts:[[`image_list`,``],[`file_input`,``],[`chipList`,``],[`images`,``,1,`relative`,`mb-2`,`flex`,`w-full`,`items-center`,`space-x-2`,`overflow-hidden`,`py-2`,3,`resize`],[`image`,``,1,`border-base-200`,`hover:border-base-300`,`hover:bg-base-200`,`relative`,`flex`,`h-32`,`w-36`,`shrink-0`,`cursor-pointer`,`flex-col`,`items-center`,`justify-center`,`rounded-xl`,`border-2`,`border-dashed`],[1,`text-4xl`,`opacity-60`],[1,`px-4`,`text-center`,`opacity-60`],[`type`,`file`,1,`absolute`,`inset-0`,`h-32`,`w-32`,`cursor-pointer`,`opacity-0`,3,`change`],[`image`,``,1,`bg-base-200`,`relative`,`h-32`,`w-36`,`shrink-0`,`overflow-hidden`,`rounded-sm`,`bg-cover`,`bg-center`,3,`transform`],[`upload`,``,1,`border-base-content/10`,`/5`,`bg-base-200`,`flex`,`h-32`,`w-36`,`shrink-0`,`items-center`,`justify-center`,`rounded-sm`,`border`,`bg-cover`,`bg-center`,3,`transform`,`matTooltip`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`left-0`,`-translate-y-1/2`,`transform`,3,`disabled`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`right-0`,`-translate-y-1/2`,`transform`,3,`disabled`],[`appearance`,`outline`,1,`w-full`],[`aria-label`,`Image List`],[3,`matChipInputTokenEnd`,`placeholder`,`matChipInputFor`,`matChipInputSeparatorKeyCodes`,`matChipInputAddOnBlur`],[`image`,``,1,`bg-base-200`,`relative`,`h-32`,`w-36`,`shrink-0`,`overflow-hidden`,`rounded-sm`,`bg-cover`,`bg-center`],[`auth`,``,1,`pointer-events-none`,`absolute`,`top-1/2`,`left-1/2`,`z-10`,`-translate-x-1/2`,`-translate-y-1/2`,`object-contain`,3,`source`],[`overlay`,``,1,`text-base-100`,`absolute`,`inset-0`,`z-20`],[`bg`,``,1,`absolute`,`inset-0`,`bg-black`,`opacity-0`],[`actions`,``,1,`absolute`,`top-0`,`right-0`,`left-0`,`flex`,`items-center`,`justify-center`,`space-x-2`,`opacity-0`],[`icon`,``,3,`click`],[`upload`,``,1,`border-base-content/10`,`/5`,`bg-base-200`,`flex`,`h-32`,`w-36`,`shrink-0`,`items-center`,`justify-center`,`rounded-sm`,`border`,`bg-cover`,`bg-center`,3,`click`,`matTooltip`],[`mode`,`determinate`,3,`value`,`diameter`],[1,`text-error`,`text-6xl`],[`overlay`,``,1,`text-base-100`,`hover:bg-base-content`,`hover:bg-opacity-50`,`absolute`,`inset-0`,`flex`,`items-center`,`justify-center`],[1,`text-3xl`,`opacity-0`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`left-0`,`-translate-y-1/2`,`transform`,3,`click`,`disabled`],[`icon`,``,`matRipple`,``,1,`bg-base-100`,`absolute`,`top-1/2`,`right-0`,`-translate-y-1/2`,`transform`,3,`click`,`disabled`],[3,`removed`],[1,`max-w-md`,`truncate`],[`matChipRemove`,``]],template:function(t,i){if(t&1&&(Ir(0,`div`,3,0),kt(`resize`,function(){return i.updateViewSpace()},Tq),Ir(2,`div`,4)(3,`icon`,5),Ta$1(4,`add`),Rr(),Ir(5,`p`,6),Ta$1(6),ID(7,`translate`),Rr(),Ir(8,`input`,7,1),kt(`change`,function(d){return i.uploadImages(d)}),Rr()(),A8(10,fl,14,3,`div`,8,I8),A8(12,xl,4,6,`div`,9,I8),Ar(14,kl,3,1,`button`,10),Ar(15,yl,3,1,`button`,11),Rr(),Ir(16,`mat-form-field`,12)(17,`mat-chip-grid`,13,2),A8(19,Cl,6,2,`mat-chip-row`,null,I8),Rr(),Ir(21,`input`,14),ID(22,`translate`),kt(`matChipInputTokenEnd`,function(d){return i.addImage(d)}),Rr()()),t&2){let r=B8(18);zt(2),TD(`transform`,`translate(-`+i.offset()+`00%)`),zt(4),yo$1(` `,L4(7,9,`COMMON.IMAGE_UPLOADS`),` `),zt(4),D8(i.list()),zt(2),D8(i.uploads()),zt(2),Dr(i.length()>i.view_space()?14:-1),zt(),Dr(i.length()>i.view_space()?15:-1),zt(4),D8(i.list()),zt(2),zu(`placeholder`,L4(22,11,`COMMON.IMAGE_ADD_URL`))(`matChipInputFor`,r)(`matChipInputSeparatorKeyCodes`,i.separators)(`matChipInputAddOnBlur`,!0)}},dependencies:[kt$1,un$1,ld,sd$1,dd,od$1,Aa$1,St,Yt,Yt$2,mt,IQe,wt,f],styles:[`[_nghost-%COMP%]{width:100%}[overlay][_ngcontent-%COMP%]{transition:background .2s}[image][_ngcontent-%COMP%]:hover   [actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%]:hover > icon[_ngcontent-%COMP%]{opacity:1!important}[image][_ngcontent-%COMP%]:hover   [bg][_ngcontent-%COMP%]{opacity:.4!important}[actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%] > icon[_ngcontent-%COMP%]{transition:opacity .2s}[image][_ngcontent-%COMP%]{transition:transform .2s}
/*# sourceMappingURL=image-list-field.component.css.map */`]})}}return n})();function Ml(n,o){if(n&1&&(Eo(0,`div`,1),ID(1,`safe`)),n&2)zu(`innerHTML`,AD(1,1,Li().changelog(),`html`),Sq)}function Sl(n,o){n&1&&(Ir(0,`div`,2)(1,`icon`,3),Ta$1(2,`close`),Rr(),Ir(3,`div`,4),Ta$1(4,`No changelog`),Rr()())}var Oa=(()=>{class n{constructor(){this._data=g(hce),this.loading=N(!1),this.changelog=Te(()=>f$1(this._data.changelog||``,{async:!1}))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je({type:n,selectors:[[`changelog-modal`]],decls:3,vars:3,consts:[[3,`heading`,`hide_confirm`],[1,`markdown`,3,`innerHTML`],[1,`flex`,`flex-col`,`items-center`,`justify-center`,`space-y-2`],[1,`text-3xl`],[1,`text`]],template:function(t,i){t&1&&(Ir(0,`fullscreen-modal-shell`,0),Ar(1,Ml,2,4,`div`,1)(2,Sl,5,0,`div`,2),Rr()),t&2&&(zu(`heading`,`Changelog`)(`hide_confirm`,!0),zt(),Dr(i.changelog()?1:2))},dependencies:[Gn,IQe,qY],encapsulation:2})}}return n})();var Ra=(()=>{class n{constructor(){this._document=g(X),this._dialog=g(Yb),this._changelog=N(null),this.available=Te(()=>this._changelog()!==null),this._load()}view(){let e=this._changelog();e!==null&&this._dialog.open(Oa,{data:{changelog:e}})}async _load(){try{let e=new URL(`CHANGELOG.md`,this._document.baseURI),t=await fetch(e);if(!t.ok)return;this._changelog.set(await t.text())}catch{}}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=P({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();function wl(n,o){if(n&1&&(Ir(0,`div`,1),Ta$1(1),Rr()),n&2){let e=Li(2);zt(),yo$1(` `,e.initials,` `)}}function Tl(n,o){if(n&1&&Eo(0,`img`,2),n&2){let e=Li(2);zu(`alt`,e.initials)(`source`,e.user().photo)}}function El(n,o){if(n&1&&(Ir(0,`div`,0),Ar(1,wl,2,1,`div`,1)(2,Tl,1,2,`img`,2),Rr()),n&2){let e=Li();Wt(`user-id`,e.user().id),zt(),Dr(e.user().photo?2:1)}}var jn=(()=>{class n{constructor(){this.user=Ss$1(void 0),this.is_valid=Te(()=>{let e=this.user();if(!e)return!1;let t=(e.name||``).trim(),i=(e.email||``).trim();return t.startsWith(`<empty>`)||i.startsWith(`<empty>`)?!1:!!(t||i||e.first_name||e.last_name)})}get initials(){let e=this.user();if(!e)return`NA`;if(e.first_name&&e.last_name)return`${e.first_name[0]}${e.last_name[0]}`;let t=(e.name||``).replace(/<[^>]*>/g,` `).trim();t||(t=(e.email||e.name||``).split(`@`)[0]);let i=t.replace(/[()[\]\-+=\\/@<>]+/gi,` `).split(/\s+/).filter(Boolean);return i.length===0?`NA`:i.length>1?`${i[0][0]}${i[i.length-1][0]}`:i[0].slice(0,2)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je({type:n,selectors:[[`a-user-avatar`]],inputs:{user:[1,`user`]},decls:1,vars:1,consts:[[1,`border-base-100`,`bg-base-200`,`flex`,`h-[2.5em]`,`w-[2.5em]`,`items-center`,`justify-center`,`overflow-hidden`,`rounded-full`,`border-2`],[`initials`,``,1,`text-base-content`,`uppercase`,`opacity-60`],[`auth`,``,1,`flex`,`h-full`,`w-full`,`items-center`,`justify-center`,`object-cover`,`object-center`,3,`alt`,`source`]],template:function(t,i){t&1&&Ar(0,El,3,2,`div`,0),t&2&&Dr(i.is_valid()?0:-1)},dependencies:[wt],encapsulation:2})}}return n})();function Il(n,o){if(n&1&&(Ir(0,`mat-option`,8),Ta$1(1),Rr()),n&2){let e=o.$implicit;zu(`value`,e.display_name||e.name),zt(),yo$1(` `,e.display_name||e.name,` `)}}function Nl(n,o){if(n&1&&(Ir(0,`mat-option`,8),Ta$1(1),Rr()),n&2){let e=o.$implicit;zu(`value`,e?.name||e),zt(),yo$1(` `,e.name||e,` `)}}function Ol(n,o){if(n&1&&(Ir(0,`div`,5)(1,`label`),Ta$1(2),ID(3,`translate`),Rr(),Ir(4,`mat-form-field`,6)(5,`mat-select`,7),ID(6,`translate`),A8(7,Nl,2,2,`mat-option`,8,I8),Rr(),qK(),Rr()()),n&2){let e=Li();zt(2),Jk(L4(3,3,`COMMON.SUPPORT_TYPE`)),zt(3),zu(`placeholder`,L4(6,5,`COMMON.SUPPORT_TYPE`))(`formField`,e.form.issue_type),ZK(),zt(2),D8(e.support_request_types())}}function Rl(n,o){n&1&&(Ir(0,`mat-error`,11),Ta$1(1),ID(2,`translate`),Rr()),n&2&&(zt(),yo$1(` `,L4(2,1,`COMMON.DESCRIPTION_REQUIRED`),` `))}function Dl(n,o){if(n&1&&(Ir(0,`div`,12)(1,`label`,10),Ta$1(2),ID(3,`translate`),Rr(),Eo(4,`image-list-field`,14),qK(),Rr()),n&2){let e=Li();zt(2),Jk(L4(3,2,`COMMON.IMAGES`)),zt(2),zu(`formField`,e.form.images),ZK()}}var Aa=(()=>{class n{constructor(){this._dialog_ref=g(zb),this._org=g(kb),this._settings=g(Ls$1),this._support_email=this._settings.signal(`support_email`,`support@place.tech`),this._support_issue_types=this._settings.signal(`support_issue_types`,[]),this._allow_images=this._settings.signal(`allow_support_ticket_images`,!1),this.loading=N(!1),this.model=N({name:``,email:``,location:``,description:``,issue_type:``,images:[]}),this.form=Gr(this.model,e=>{Go(e.name),Go(e.email),Go(e.description)}),this.desc_error=N(!1),this.support_email=this._support_email,this.support_request_types=this._support_issue_types,this.allow_images=this._allow_images,this.buildings=this._org.building_list}ngOnInit(){let e=ji();e&&this.model.update(t=>m(l({},t),{name:e.name,email:e.email})),this._org.building&&this.model.update(t=>m(l({},t),{location:this._org.building.display_name||this._org.building.name}))}async submit(){if(this.loading.set(!0),this.form().markAsTouched(),this._updateDescError(),this.form().valid()){let e=this._org.module(`smtp`,`Mailer`);if(!e)return aB(Kn(`COMMON.SUPPORT_NO_MAILER`));let{name:t,email:i,location:r,description:d,images:x,issue_type:O}=this.model(),$=this.support_request_types().find(_e=>_e.name===O)?.email||this.support_email(),ie=Kn(`COMMON.SUPPORT_MAIL_HEADER`,{issue_type:O?` - `+O:``});await e.execute(`send_mail`,[$,ie,`${t}
${i}

${r}

${d.replace(/<[^>]+>/g,``)}

${x.join(`
`)}`,`<p>${t}</p><p>${i}</p><p>${r}</p><p>${d}</p>${x.join(`<br>`)}`,[],[],[],[],null,`${i}`]),this._dialog_ref.close(),this.loading.set(!1),oS(Kn(`COMMON.SUPPORT_SUCCESS`))}}_updateDescError(){this.desc_error.set(this.form.description().invalid()&&this.form.description().touched())}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je({type:n,selectors:[[`support-ticket-modal`]],decls:51,vars:45,consts:[[3,`confirm`,`heading`,`loading`,`confirm_text`],[1,`flex`,`flex-wrap`,`items-center`,`sm:space-x-2`],[1,`flex`,`flex-1`,`flex-col`],[`appearance`,`outline`],[`matInput`,``,3,`placeholder`,`formField`],[1,`flex`,`flex-col`],[`appearance`,`outline`,1,`w-full`],[3,`placeholder`,`formField`],[3,`value`],[1,``],[1,`mb-4`],[1,`my-2`,`text-xs`],[1,`pt-4`],[1,`mb-2`,`text-center`,`text-xs`,`italic`],[3,`formField`]],template:function(t,i){t&1&&(Ir(0,`fullscreen-modal-shell`,0),ID(1,`translate`),kt(`confirm`,function(){return i.submit()}),Ir(2,`form`)(3,`div`,1)(4,`div`,2)(5,`label`),Ta$1(6),ID(7,`translate`),Ir(8,`span`),Ta$1(9,`*`),Rr()(),Ir(10,`mat-form-field`,3),Eo(11,`input`,4),ID(12,`translate`),qK(),Ir(13,`mat-error`),Ta$1(14),ID(15,`translate`),Rr()()(),Ir(16,`div`,2)(17,`label`),Ta$1(18),ID(19,`translate`),Ir(20,`span`),Ta$1(21,`*`),Rr()(),Ir(22,`mat-form-field`,3),Eo(23,`input`,4),ID(24,`translate`),qK(),Ir(25,`mat-error`),Ta$1(26),ID(27,`translate`),Rr()()()(),Ir(28,`div`,5)(29,`label`),Ta$1(30),ID(31,`translate`),Rr(),Ir(32,`mat-form-field`,6)(33,`mat-select`,7),ID(34,`translate`),A8(35,Il,2,2,`mat-option`,8,I8),Rr(),qK(),Rr()(),Ar(37,Ol,9,7,`div`,5),Ir(38,`div`,9)(39,`label`,10),Ta$1(40),ID(41,`translate`),Ir(42,`span`),Ta$1(43,`*`),Rr()(),Eo(44,`rich-text-input`,7),ID(45,`translate`),qK(),Ar(46,Rl,3,3,`mat-error`,11),Rr(),Ar(47,Dl,5,4,`div`,12),Rr(),Ir(48,`div`,13),Ta$1(49),ID(50,`translate`),Rr()()),t&2&&(zu(`heading`,`Raise a support ticket`)(`loading`,i.loading()?`true`:``)(`confirm_text`,L4(1,21,`COMMON.SUBMIT`)),zt(6),Jk(L4(7,23,`FORM.NAME`)),zt(5),zu(`placeholder`,L4(12,25,`FORM.NAME`))(`formField`,i.form.name),ZK(),zt(3),Jk(L4(15,27,`FORM.NAME_REQUIRED`)),zt(4),Jk(L4(19,29,`FORM.EMAIL`)),zt(5),zu(`placeholder`,L4(24,31,`FORM.EMAIL`))(`formField`,i.form.email),ZK(),zt(3),Jk(L4(27,33,`FORM.EMAIL_REQUIRED`)),zt(4),Jk(L4(31,35,`COMMON.LOCATION`)),zt(3),zu(`placeholder`,L4(34,37,`COMMON.LOCATION`))(`formField`,i.form.location),ZK(),zt(2),D8(i.buildings()),zt(2),Dr(i.support_request_types().length?37:-1),zt(3),yo$1(` `,L4(41,39,`COMMON.SUPPORT_DESCRIPTION`),` `),zt(4),zu(`placeholder`,L4(45,41,`COMMON.SUPPORT_DESCRIPTION`))(`formField`,i.form.description),ZK(),zt(2),Dr(i.desc_error()?46:-1),zt(),Dr(i.allow_images()?47:-1),zt(2),yo$1(` `,L4(50,43,`COMMON.SUPPORT_MSG`),` `))},dependencies:[cF,kt$1,un$1,br,ks$1,Is$2,Uo,St,cm,Da,Na,ei,Jt,zY,L9e,Gn,f],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%}
/*# sourceMappingURL=support-ticket-modal.component.css.map */`]})}}return n})();var Al=[`*`];var Pl=(n,o)=>o.id;function Fl(n,o){if(n&1&&(Ir(0,`div`,4),Ta$1(1),ID(2,`date`),Rr()),n&2){let e=Li();zt(),yo$1(` `,k4(2,1,e.active_time(),e.time_format()+` (z)`,e.tz()),` `)}}function Vl(n,o){if(n&1&&(Ir(0,`div`,13),Ta$1(1),ID(2,`date`),Rr()),n&2){let e=Li(2);zt(),yo$1(` `,k4(2,1,e.force_time(),e.time_format()+` (z)`,e.tz()),` `)}}function Ll(n,o){n&1&&(Ir(0,`icon`,14),Ta$1(1,` done `),Rr())}function Bl(n,o){if(n&1){let e=vD();Ir(0,`button`,9),kt(`click`,function(){g_(e);let i=Li();return __(i.setValue(i.force_time().toString()))}),Ir(1,`div`,10)(2,`div`,11)(3,`div`,12),Ta$1(4),ID(5,`date`),Rr(),Ar(6,Vl,3,5,`div`,13),Rr(),Ar(7,Ll,2,0,`icon`,14),Rr()()}if(n&2){let e=Li();zu(`value`,e.force_time()),zt(4),yo$1(` `,AD(5,4,e.force_time(),e.time_format()),` `),zt(2),Dr(e.timezone()&&e.tz()?6:-1),zt(),Dr(e.active_time()===e.force_time()?7:-1)}}function Ul(n,o){if(n&1&&(Ir(0,`div`,13),Ta$1(1),ID(2,`date`),Rr()),n&2){let e=Li().$implicit,t=Li();zt(),yo$1(` `,k4(2,1,e.date,t.time_format()+` (z)`,t.tz()),` `)}}function zl(n,o){n&1&&(Ir(0,`icon`,14),Ta$1(1,` done `),Rr())}function Gl(n,o){if(n&1){let e=vD();Ir(0,`button`,9),kt(`click`,function(){let i=g_(e).$implicit;return __(Li().setValue(i.id))}),Ir(1,`div`,10)(2,`div`,11)(3,`div`,12),Ta$1(4),ID(5,`date`),Rr(),Ar(6,Ul,3,5,`div`,13),Rr(),Ar(7,zl,2,0,`icon`,14),Rr()()}if(n&2){let e=o.$implicit,t=Li();zu(`value`,e.id),Wt(`data-time`,e.id),zt(4),e1(` `,AD(5,6,e.date,t.time_format()),` `,t.extra_info_fn()(e.date),` `),zt(2),Dr(t.timezone()&&t.tz()?6:-1),zt(),Dr(t.active_time()===e.date?7:-1)}}function Hl(n,o){n&1&&(Ir(0,`div`,8),Ta$1(1,`No time options to select`),Rr())}function Wl(n,o){n&1&&(Ir(0,`mat-error`),jn$1(1),Rr())}function Pa(n){if(n==null||n===``)return null;let o=Number(n);return Number.isFinite(o)?o:null}var Fa=(()=>{class n extends Is$1{constructor(){super(...arguments),this.step=Ss$1(15),this.disabled=$Te(void 0),this.no_past_times=Ss$1(!0),this.use_24hr=Ss$1(!1),this.force_time=Ss$1(void 0),this.no_error=Ss$1(void 0),this.extra_info_fn=Ss$1(e=>``),this.from=Ss$1(an$1(Date.now()).valueOf()),this.range=Ss$1(void 0),this._range=Te(()=>{let e=this.range();if(!e)return;let t=Pa(e.start),i=Pa(e.end);if(!(t===null||i===null||i<=t))return{start:t,end:i}}),this.min_duration=Ss$1(0),this.timezone=Ss$1(``),this.date=N(new Date().valueOf()),this.time=N(ii$1(new Date,`HH:mm`)),this._time_options=N([]),this.show_select=N(!1),this.active_time=N(Date.now()),this.no_options=N(!1),this._menu_trigger=jTe(lt),this.time_format=Te(()=>this.use_24hr()?`HH : mm`:`h : mm a`),this._local_tz=OMe(Intl.DateTimeFormat().resolvedOptions().timeZone),this.tz=Te(()=>{let e=this.timezone();if(!e)return``;let t=OMe(e);return t===this._local_tz?``:t})}ngOnInit(){this.show_select.set(!0),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions(),this.timeout(`hide`,()=>this.show_select.set(!1));let e=this.timezone()||void 0;this.active_time.set(this._time_options().find(t=>t.id===xMe(this.date(),e))?.date||this.active_time())}ngOnChanges(e){(e.no_past_times||e.step||e.from||e.range||e.min_duration)&&(this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions())}ngAfterViewInit(){let e=this._menu_trigger();e&&this.subscription(`menu_opened`,e.menuOpened.subscribe(()=>{this._scrollToSelectedTime()}))}_scrollToSelectedTime(){requestAnimationFrame(()=>{if(!this._menu_trigger()?.menu)return;let t=document.querySelector(`.mat-mdc-menu-panel`);if(!t)return;let i=this.timezone()||void 0,r=this.time()||xMe(new Date,i),d=t.querySelector(`[data-time="${r}"]`);if(!d&&this._time_options().length){let x=this._timeToMinutes(r),O=this._time_options()[0],$=Infinity;for(let ie of this._time_options()){let _e=this._timeToMinutes(ie.id),ke=Math.abs(_e-x);ke<$&&($=ke,O=ie)}d=t.querySelector(`[data-time="${O.id}"]`)}if(d){if(typeof d.scrollIntoView!=`function`)return;d.scrollIntoView({block:`center`,behavior:`instant`})}})}_timeToMinutes(e){let[t,i]=e.split(`:`).map(Number);return t*60+i}time_options(){let e=this.timezone()||void 0,t=(this.time()||`00:00`).split(`:`),i=PMe(this.date(),+t[0],+t[1],e),{minutes:r}=PX(i,e),d=xMe(i,e),x=[...this._time_options()];return r%this.step()!==0&&this._isWithinRange(i)&&!x.find(O=>O.id===d)&&(x.push({date:i,id:d}),x.sort((O,$)=>`${O.id}`.localeCompare(`${$.id}`))),x}setValue(e){this.time.set(e);let t=this.timezone()||void 0;if(this._onChange){let x=(this.time()||`00:00`).split(`:`),O=PMe(this.date(),+x[0],+x[1],t);jMe(),this._onChange(O)}let i=this.force_time()||this.time(),r=(typeof i==`string`?i:xMe(i,t)).split(`:`),d=PMe(this.date(),+r[0],+r[1],t);this.active_time.set(this._time_options().find(x=>x.id===(typeof i==`string`?i:xMe(i,t)))?.date||d)}writeValue(e){this.date.set(e||this.date());let t=this.timezone()||void 0,i=qc$1(this.date());i=Kc$1(i,{nearestTo:5}),this.time.set(xMe(i,t)),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions();let r=this.force_time(),d=r?xMe(r,t):this.time();this.active_time.set(this._time_options().find(x=>x.id===d)?.date||i.valueOf())}setDisabledState(e){this.disabled.set(e),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times()||e,this.step())),this._updateNoOptions()}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouch=e}_updateNoOptions(){this.no_options.set(!this.disabled()&&(!this._time_options()||this._time_options().length===0)&&!this.force_time())}generateAvailableTimes(e,t,i=15){let r=t?this.from():Math.max(this.from(),Date.now()),d=[],x=this._range(),O=this.timezone()||void 0,$=O?No(e,O):an$1(e).valueOf(),ie=O?wo$1(e,O):ri(e).valueOf(),_e=this.min_duration()||0,ke=x?x.start*60:void 0,ct=x?x.end*60:void 0,it=ct!=null&&_e>0?ct-_e:ct,ni=Math.max($,r,ke!=null?$+ke*60*1e3:$),B=Math.min(ie,it!=null?$+it*60*1e3:ie);if(ni>B)return d;let Y=this._roundUpToStep(ni,i),De=this._roundDownToStep(B,i);for(;!Na$1(Y,De);)d.push({date:Y.valueOf(),id:xMe(Y,O)}),Y=et$1(Y,i);return d}_isWithinRange(e){if(wr(e,this.from()))return!1;let t=this._range();if(!t)return!0;let i=t.start*60,r=t.end*60,d=this.min_duration()||0,x=d>0?r-d:r,{hours:$,minutes:ie}=PX(e,this.timezone()||void 0),_e=$*60+ie;return!(_e<i||_e>x)}_roundUpToStep(e,t){let i=Kc$1(e,{nearestTo:t});return wr(i,e)&&(i=et$1(i,t)),qc$1(i)}_roundDownToStep(e,t){let i=Kc$1(e,{nearestTo:t});return Na$1(i,e)&&(i=et$1(i,-t)),qc$1(i)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Rt$1(n)))(i||n)}})()}static{this.ɵcmp=je({type:n,selectors:[[`a-time-field`],[`time-field`]],viewQuery:function(t,i){t&1&&Bk(i._menu_trigger,lt,5),t&2&&V8()},inputs:{step:[1,`step`],disabled:[1,`disabled`],no_past_times:[1,`no_past_times`],use_24hr:[1,`use_24hr`],force_time:[1,`force_time`],no_error:[1,`no_error`],extra_info_fn:[1,`extra_info_fn`],from:[1,`from`],range:[1,`range`],min_duration:[1,`min_duration`],timezone:[1,`timezone`]},outputs:{disabled:`disabledChange`},features:[on$1([{provide:jc$1,useExisting:Gt(()=>n),multi:!0}]),Oe,Pt],ngContentSelectors:Al,decls:15,vars:12,consts:[[`menu`,`matMenu`],[`type`,`button`,`time-field`,``,`matRipple`,``,1,`border-neutral`,`flex`,`h-12`,`w-full`,`items-center`,`justify-between`,`rounded-sm`,`border`,`px-2`,3,`disabled`,`matMenuTriggerFor`],[1,`flex`,`w-1/2`,`flex-1`,`flex-col`,`px-2`,`text-left`,`leading-tight`],[1,`truncate`],[1,`truncate`,`text-xs`,`opacity-30`],[1,`text-2xl`],[1,`max-h-60`,`min-w-[18rem]`],[`type`,`button`,`mat-menu-item`,``,1,`text-left`,3,`value`],[`mat-menu-item`,``,`disabled`,``],[`type`,`button`,`mat-menu-item`,``,1,`text-left`,3,`click`,`value`],[1,`flex`,`items-center`,`justify-between`],[1,`flex`,`flex-col`,`leading-tight`],[1,``],[1,`text-xs`,`opacity-30`],[1,`ml-2`,`text-2xl`]],template:function(t,i){if(t&1&&(ki(),Ir(0,`button`,1)(1,`div`,2)(2,`div`,3),Ta$1(3),ID(4,`date`),Rr(),Ar(5,Fl,3,5,`div`,4),Rr(),Ir(6,`icon`,5),Ta$1(7,`arrow_drop_down`),Rr()(),Ir(8,`mat-menu`,6,0),Ar(10,Bl,8,7,`button`,7),A8(11,Gl,8,9,`button`,7,Pl,!1,Hl,2,0,`div`,8),Rr(),Ar(14,Wl,2,0,`mat-error`)),t&2){let r=B8(9);Et(`opacity-30`,i.disabled()||i.no_options()),zu(`disabled`,i.disabled()||i.no_options())(`matMenuTriggerFor`,r),zt(3),yo$1(` `,AD(4,9,i.active_time(),i.time_format()),` `),zt(2),Dr(i.timezone()&&i.tz()?5:-1),zt(5),Dr(i.force_time()?10:-1),zt(),D8(i.time_options()),zt(3),Dr(i.no_error()?-1:14)}},dependencies:[cF,Zt,et,st,lt,kt$1,br,IQe,c9],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%}
/*# sourceMappingURL=time-field.component.css.map */`]})}}return n})();function jl(n,o){n&1&&(Ir(0,`button`,2)(1,`icon`),Ta$1(2,`close`),Rr()())}function ql(n,o){if(n&1){let e=vD();Ir(0,`div`,7)(1,`div`,11),Ta$1(2),ID(3,`date`),Rr(),Ir(4,`mat-checkbox`,12),kt(`ngModelChange`,function(i){let r=g_(e).$implicit,d=Li(2);return d.setWeekdayEnabled(r.getDay(),i),__(i&&d.initialiseDay(r.getDay()))}),Rr(),qK(),Rr()}if(n&2){let e=o.$implicit,t=Li(2);zt(2),yo$1(` `,AD(3,2,e,`EEE`),` `),zt(2),zu(`ngModel`,t.weekdays_enabled()[e.getDay()]),ZK()}}function $l(n,o){if(n&1&&(Ir(0,`mat-option`,20),Ta$1(1),Rr()),n&2){let e=o.$implicit;zu(`value`,e.id),zt(),yo$1(` `,e.name,` `)}}function Xl(n,o){if(n&1){let e=vD();Ir(0,`button`,23),kt(`click`,function(){g_(e);let i=Li().$index,r=Li(2).$implicit,d=Li(3);return __(d.addBlock(d.settings()[r.getDay()],i))}),Ir(1,`icon`),Ta$1(2,`add`),Rr()()}}function Kl(n,o){if(n&1){let e=vD();Ir(0,`button`,24),kt(`click`,function(){g_(e);let i=Li().$index,r=Li(2).$implicit,d=Li(3);return __(d.removeBlock(d.settings()[r.getDay()],i))}),Ir(1,`icon`),Ta$1(2,`delete`),Rr()()}}function Yl(n,o){if(n&1){let e=vD();Ir(0,`div`,16)(1,`a-time-field`,18),kt(`ngModelChange`,function(i){let r=g_(e).$implicit,d=Li(2).$implicit;return __(Li(3).setStartTime(r,d.getDay(),i))}),Rr(),qK(),Ir(2,`a-time-field`,18),kt(`ngModelChange`,function(i){let r=g_(e).$implicit,d=Li(2).$implicit;return __(Li(3).setEndTime(r,d.getDay(),i))}),Rr(),qK(),Ir(3,`mat-form-field`,19)(4,`mat-select`,12),i1(`ngModelChange`,function(i){let r=g_(e).$implicit;return h4(r.location,i)||(r.location=i),__(i)}),A8(5,$l,2,2,`mat-option`,20,I8),Rr(),qK(),Rr(),Ar(7,Xl,3,0,`button`,21),Ar(8,Kl,3,0,`button`,22),Rr()}if(n&2){let e=o.$implicit,t=o.$index,i=Li(2).$implicit,r=Li(3);zt(),zu(`ngModel`,r.timeFrom(e.start_time))(`from`,r.timeFrom((t>0?r.settings()[i.getDay()].blocks[t-1]?.end_time:0)||0))(`no_error`,!0),ZK(),zt(),zu(`ngModel`,r.timeFrom(e.end_time))(`from`,r.timeFrom(e.start_time+.25))(`no_error`,!0),ZK(),zt(2),r1(`ngModel`,e.location),ZK(),zt(),D8(r.options()),zt(2),Dr(t===0?7:-1),zt(),Dr(t!==0?8:-1)}}function Ql(n,o){if(n&1&&(Ir(0,`div`,14)(1,`div`,15),A8(2,Yl,9,9,`div`,16,I8),Rr(),Ir(4,`h3`,17),Ta$1(5),ID(6,`date`),Rr()()),n&2){let e=Li().$implicit,t=Li(3);zt(2),D8(t.settings()[e.getDay()].blocks),zt(3),yo$1(` `,AD(6,1,e,`EEEE`),` `)}}function Zl(n,o){if(n&1&&Ar(0,Ql,7,4,`div`,14),n&2){let e=o.$implicit;Dr(Li(3).weekdays_enabled()[e.getDay()]?0:-1)}}function Jl(n,o){if(n&1&&(Ir(0,`div`,9),A8(1,Zl,1,1,null,null,I8),Ir(3,`h3`,13),Ta$1(4),ID(5,`translate`),Rr()()),n&2){let e=Li(2);zt(),D8(e.days),zt(3),yo$1(` `,L4(5,1,`COMMON.WORK_HOURS`),` `)}}function ec(n,o){n&1&&(Ir(0,`div`,10),Eo(1,`img`,25),Ir(2,`p`,26),Ta$1(3),ID(4,`translate`),Rr()()),n&2&&(zt(3),yo$1(` `,L4(4,1,`COMMON.WORK_SETTINGS_EMPTY`),` `))}function tc(n,o){if(n&1&&(Ir(0,`main`,3)(1,`div`,6),A8(2,ql,5,5,`div`,7,I8),Ir(4,`h3`,8),Ta$1(5),ID(6,`translate`),Rr()(),Ar(7,Jl,6,3,`div`,9)(8,ec,5,3,`div`,10),Rr()),n&2){let e=Li();zt(2),D8(e.days),zt(3),yo$1(` `,L4(6,2,`COMMON.WORK_DAYS`),` `),zt(2),Dr(e.has_working_days()?7:8)}}function ic(n,o){n&1&&(Ir(0,`div`,4),Eo(1,`mat-spinner`,27),Ir(2,`p`,26),Ta$1(3),ID(4,`translate`),Rr()()),n&2&&(zt(),zu(`diameter`,32),zt(2),yo$1(` `,L4(4,2,`COMMON.WORK_SETTINGS_SAVE`),` `))}function nc(n,o){if(n&1){let e=vD();Ir(0,`footer`,5)(1,`button`,28),kt(`click`,function(){g_(e);return __(Li().saveChanges())}),Ta$1(2),ID(3,`translate`),Rr()()}n&2&&(zt(2),yo$1(` `,L4(3,1,`COMMON.SAVE`),` `))}var qn=(()=>{class n{constructor(){this._data=g(hce),this._dialog_ref=g(zb),this.options=N([]),this.option=N(``),this.settings=N([]),this.weekdays_enabled=N({}),this.changed=N(!1),this.loading=N(!1),this.available_weekdays=N([]),this.days=new Array(7).fill(0).map((e,t)=>pn$1(As$1(pn$1(Date.now(),30)),t)),this.has_working_days=Te(()=>{let e=this.weekdays_enabled();return Object.keys(e).some(t=>e[t])}),this.option_name=Te(()=>this.options().find(e=>e.id===this.option())?.name||``),this.now=Te(()=>qc$1(Date.now()).getTime())}ngOnInit(){let e=ji(),i=[...((this._data?.local?this._data.preferences:e.work_preferences)||[]).map(x=>m(l({},x),{blocks:[...x?.blocks||[]]}))],r={};for(let x of i)x.blocks.length&&(r[x.day_of_week]=!0);this.settings.set(i),this.weekdays_enabled.set(r);let d=[{id:`wfo`,name:Kn(`COMMON.WORK_OFFICE`),icon:`business`},{id:`wfh`,name:Kn(`COMMON.WORK_HOME`),icon:`home`},{id:`aol`,name:Kn(`COMMON.WORK_LEAVE`),icon:`event_busy`}];this.options.set(d),this.option.set(d[0].id)}timeFrom(e){return qc$1(oi(pn$1(new Date,1),{hours:Math.floor(e),minutes:e*60%60})).getTime()}fromTime(e){let t=new Date(e);return t.getHours()+t.getMinutes()/60}initialiseDay(e){let t=this.settings();t[e]||(t[e]={day_of_week:e,blocks:[]}),t[e].blocks||(t[e].blocks=[]),t[e].blocks.length===0&&this.addBlock(t[e],0),this.settings.set([...t])}addBlock(e,t){e.blocks.splice(t+1,0,{start_time:9,end_time:17,location:`wfo`}),this.cleanupBlocks(e),this.settings.update(i=>[...i])}removeBlock(e,t){e.blocks.length<=1||(e.blocks.splice(t,1),this.settings.update(i=>[...i]))}setEndTime(e,t,i){setTimeout(()=>{e.end_time=this.fromTime(i),this.cleanupBlocks(this.settings()[t]),this.settings.update(r=>[...r])},50)}setStartTime(e,t,i){setTimeout(()=>{e.start_time=this.fromTime(i),this.cleanupBlocks(this.settings()[t]),this.settings.update(r=>[...r])},50)}cleanupBlocks(e){if(e?.blocks?.length)for(let t=0;t<e.blocks.length;t++){let i=e.blocks[t];t>0&&i.start_time<e.blocks[t-1].end_time&&(i.start_time=e.blocks[t-1].end_time),i.end_time<=i.start_time&&(i.end_time=i.start_time+1)}}async saveChanges(e=!0){this.loading.set(!0),this._dialog_ref.disableClose=!0;let t=new Array(7).fill(0).map((i,r)=>({day_of_week:r,blocks:[]}));for(let i of this.days){let r=i.getDay();this.weekdays_enabled()[r]&&(t[r]={day_of_week:r,blocks:this.settings()[r].blocks})}if(this._data?.local)this.loading.set(!1),this._dialog_ref.disableClose=!1;else try{let i=await RC(`current`);await zV(i.id,m(l({},i),{groups:i.groups.filter(r=>!r.startsWith(`placeos_`)),work_preferences:t}))}catch(i){throw aB(`Unable to save user work preferences.`),i}finally{this.loading.set(!1),this._dialog_ref.disableClose=!1}e&&(this._data?.local||wB(),this._dialog_ref.close(t))}setWeekdayEnabled(e,t){this.weekdays_enabled.update(i=>m(l({},i),{[e]:t}))}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je({type:n,selectors:[[`wfh-settings-modal`]],decls:8,vars:6,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``,1,`bg-base-200`],[1,`relative`,`flex`,`max-h-[calc(100vh-9rem)]`,`w-160`,`max-w-full`,`flex-col`,`space-y-2`,`overflow-x-hidden`,`overflow-y-auto`,`rounded-sm`,`px-2`,`py-4`,`sm:max-h-[65vh]`,`sm:p-4`],[`loading`,``,1,`bg-base-100`,`relative`,`flex`,`h-72`,`w-[24rem]`,`flex-col`,`items-center`,`justify-center`,`space-y-2`,`overflow-hidden`,`rounded-sm`,`text-center`],[1,`border-base-200`,`flex`,`justify-end`,`border-t`,`px-4`,`py-2`],[1,`border-base-300`,`relative`,`mb-4`,`flex`,`w-full`,`items-center`,`justify-between`,`space-x-2`,`rounded-sm`,`border`,`p-2`],[1,`flex`,`flex-1`,`flex-col`,`items-center`,`pt-2`],[1,`bg-base-100`,`absolute`,`top-0`,`left-2`,`-translate-y-1/2`,`px-2`],[1,`border-base-300`,`relative`,`flex`,`w-full`,`flex-col`,`items-center`,`justify-between`,`space-y-4`,`rounded-sm`,`border`,`px-2`,`pt-6`,`pb-4`,`sm:px-4`],[1,`flex`,`flex-col`,`items-center`,`justify-center`,`space-y-4`,`px-8`,`py-16`],[1,`text-xs`,`font-bold`,`uppercase`],[3,`ngModelChange`,`ngModel`],[1,`bg-base-100`,`absolute`,`top-0`,`left-2`,`m-0!`,`-translate-y-1/2`,`px-2`],[1,`border-base-200`,`relative`,`flex`,`w-full`,`items-center`,`justify-between`,`space-x-2`,`rounded-sm`,`border`,`p-2`],[1,`w-1/2`,`flex-1`,`space-y-2`,`pt-2`],[1,`flex`,`items-center`,`space-x-2`],[1,`border-base-200`,`bg-base-100`,`bg-opacity-50`,`absolute`,`top-0`,`left-2`,`-translate-y-1/2`,`rounded-sm`,`border`,`px-2`,`text-sm`,`font-medium`],[1,`w-1/4`,`flex-1`,3,`ngModelChange`,`ngModel`,`from`,`no_error`],[`appearance`,`outline`,1,`no-subscript`,`w-1/4`,`flex-1`],[3,`value`],[`icon`,``,`matRipple`,``,1,`border-base-400`,`h-12`,`w-12`,`rounded-sm`,`border`],[`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`],[`icon`,``,`matRipple`,``,1,`border-base-400`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`],[`icon`,``,`matRipple`,``,1,`border-error`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`],[`src`,`assets/icons/no-results.svg`,1,`m-auto`],[1,`opacity-30`],[3,`diameter`],[`btn`,``,`matRipple`,``,1,`w-48`,3,`click`]],template:function(t,i){t&1&&(Ir(0,`header`,0)(1,`h2`,1),Ta$1(2),ID(3,`translate`),Rr(),Ar(4,jl,3,0,`button`,2),Rr(),Ar(5,tc,9,4,`main`,3)(6,ic,5,4,`div`,4),Ar(7,nc,4,3,`footer`,5)),t&2&&(zt(2),yo$1(` `,L4(3,4,`COMMON.WORK_LOCATION_SETTINGS`),` `),zt(2),Dr(i.loading()?-1:4),zt(),Dr(i.loading()?6:5),zt(2),Dr(i.loading()?-1:7))},dependencies:[cF,L9e,P9e,cm,lw,kt$1,un$1,ei,Jt,zY,Fa,zn,_i,YDe,BDe,j7,IQe,St,Yt,c9,f],encapsulation:2})}}return n})();var oc=[`knob`];var rc=[`valueIndicatorContainer`];function ac(n,o){if(n&1&&(Ir(0,`div`,2,1)(2,`div`,5)(3,`span`,6),Ta$1(4),Rr()()()),n&2){let e=Li();zt(4),Jk(e.valueIndicatorText)}}var sc=[`trackActive`];var lc=[`*`];function cc(n,o){if(n&1&&Eo(0,`div`),n&2){let e=o.$implicit,t=o.$index,i=Li(3);Op(e===0?`mdc-slider__tick-mark--active`:`mdc-slider__tick-mark--inactive`),TD(`transform`,i._calcTickMarkTransform(t))}}function dc(n,o){if(n&1&&A8(0,cc,1,4,`div`,8,T8),n&2)D8(Li(2)._tickMarks)}function mc(n,o){if(n&1&&(Ir(0,`div`,6,1),Ar(2,dc,2,0),Rr()),n&2){let e=Li();zt(2),Dr(e._cachedWidth?2:-1)}}function pc(n,o){if(n&1&&Eo(0,`mat-slider-visual-thumb`,7),n&2){let e=Li();zu(`discrete`,e.discrete)(`thumbPosition`,1)(`valueIndicatorText`,e.startValueIndicatorText)}}var R=(function(n){return n[n.START=1]=`START`,n[n.END=2]=`END`,n})(R||{});var ii=(function(n){return n[n.ACTIVE=0]=`ACTIVE`,n[n.INACTIVE=1]=`INACTIVE`,n})(ii||{});var wo=new I(`_MatSlider`);var Va=new I(`_MatSliderThumb`);var uc=new I(`_MatSliderRangeThumb`);var La=new I(`_MatSliderVisualThumb`);var _c=(()=>{class n{_cdr=g(sn$1);_ngZone=g(ee);_slider=g(wo);_renderer=g(it);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=g(ue).nativeElement;_platform=g(rt);ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let t=this._sliderInputEl,i=this._renderer;this._listenerCleanups=[i.listen(t,`pointermove`,this._onPointerMove),i.listen(t,`pointerdown`,this._onDragStart),i.listen(t,`pointerup`,this._onDragEnd),i.listen(t,`pointerleave`,this._onMouseLeave),i.listen(t,`focus`,this._onFocus),i.listen(t,`blur`,this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e())}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let t=this._hostElement.getBoundingClientRect(),i=this._slider._isCursorOnSliderThumb(e,t);this._isHovered=i,i?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add(`mdc-slider__thumb--focused`)};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove(`mdc-slider__thumb--focused`)};_onDragStart=e=>{e.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add(`mat-mdc-slider-hover-ripple`))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add(`mat-mdc-slider-focus-ripple`))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add(`mat-mdc-slider-active-ripple`))}_isShowingRipple(e){return e?.state===Lr.FADING_IN||e?.state===Lr.VISIBLE}_showRipple(e,t){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===R.START?R.END:R.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!t)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:!0,persistent:!0})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let t=this._getSibling();t._isShowingAnyRipple()||(this._hideValueIndicator(),t._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add(`mdc-slider__thumb--with-indicator`)}_hideValueIndicator(){this._hostElement.classList.remove(`mdc-slider__thumb--with-indicator`)}_getSibling(){return this._slider._getThumb(this.thumbPosition===R.START?R.END:R.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static ɵfac=function(t){return new(t||n)};static ɵcmp=je({type:n,selectors:[[`mat-slider-visual-thumb`]],viewQuery:function(t,i){if(t&1&&ys$1(lw,5)(oc,5)(rc,5),t&2){let r;Fi(r=Ui())&&(i._ripple=r.first),Fi(r=Ui())&&(i._knob=r.first),Fi(r=Ui())&&(i._valueIndicatorContainer=r.first)}},hostAttrs:[1,`mdc-slider__thumb`,`mat-mdc-slider-visual-thumb`],inputs:{discrete:`discrete`,thumbPosition:`thumbPosition`,valueIndicatorText:`valueIndicatorText`},features:[on$1([{provide:La,useExisting:n}])],decls:4,vars:2,consts:[[`knob`,``],[`valueIndicatorContainer`,``],[1,`mdc-slider__value-indicator-container`],[1,`mdc-slider__thumb-knob`],[`matRipple`,``,1,`mat-focus-indicator`,3,`matRippleDisabled`],[1,`mdc-slider__value-indicator`],[1,`mdc-slider__value-indicator-text`]],template:function(t,i){t&1&&(Ar(0,ac,5,1,`div`,2),Eo(1,`div`,3,0)(3,`div`,4)),t&2&&(Dr(i.discrete?0:-1),zt(3),zu(`matRippleDisabled`,!0))},dependencies:[lw],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
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
`],encapsulation:2})}return n})();var $n=(()=>{class n{_ngZone=g(ee);_cdr=g(sn$1);_elementRef=g(ue);_dir=g(Vs$1,{optional:!0});_globalRippleOptions=g(Ev,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let t=this._getInput(R.END),i=this._getInput(R.START);t&&(t.disabled=this._disabled),i&&(i.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(e){let t=e==null||isNaN(e)?this._min:e;this._min!==t&&this._updateMin(t)}_min=0;color;disableRipple=!1;_updateMin(e){let t=this._min;this._min=e,this._isRange?this._updateMinRange({old:t,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange()}_updateMinRange(e){let t=this._getInput(R.END),i=this._getInput(R.START),r=t.value,d=i.value;i.min=e.new,t.min=Math.max(e.new,i.value),i.max=Math.min(t.max,t.value),i._updateWidthInactive(),t._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(t,i):this._onTranslateXChangeBySideEffect(i,t),r!==t.value&&this._onValueChange(t),d!==i.value&&this._onValueChange(i)}_updateMinNonRange(e){let t=this._getInput(R.END);if(t){let i=t.value;t.min=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t)}}get max(){return this._max}set max(e){let t=e==null||isNaN(e)?this._max:e;this._max!==t&&this._updateMax(t)}_max=100;_updateMax(e){let t=this._max;this._max=e,this._isRange?this._updateMaxRange({old:t,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange()}_updateMaxRange(e){let t=this._getInput(R.END),i=this._getInput(R.START),r=t.value,d=i.value;t.max=e.new,i.max=Math.min(e.new,t.value),t.min=i.value,t._updateWidthInactive(),i._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(i,t):this._onTranslateXChangeBySideEffect(t,i),r!==t.value&&this._onValueChange(t),d!==i.value&&this._onValueChange(i)}_updateMaxNonRange(e){let t=this._getInput(R.END);if(t){let i=t.value;t.max=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t)}}get step(){return this._step}set step(e){let t=isNaN(e)?this._step:e;this._step!==t&&this._updateStep(t)}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let e=this._getInput(R.END),t=this._getInput(R.START),i=e.value,r=t.value,d=t.value;e.min=this._min,t.max=this._max,e.step=this._step,t.step=this._step,this._platform.SAFARI&&(e.value=e.value,t.value=t.value),e.min=Math.max(this._min,t.value),t.max=Math.min(this._max,e.value),t._updateWidthInactive(),e._updateWidthInactive(),e.value<d?this._onTranslateXChangeBySideEffect(t,e):this._onTranslateXChangeBySideEffect(e,t),i!==e.value&&this._onValueChange(e),r!==t.value&&this._onValueChange(t)}_updateStepNonRange(){let e=this._getInput(R.END);if(e){let t=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),t!==e.value&&this._onValueChange(e)}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=mr();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText=``;endValueIndicatorText=``;_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=Te(()=>this._dir?.valueSignal()===`rtl`);_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=g(rt);constructor(){g(hr).load(Sv);let e=this._isRtl();qTe(()=>{let t=this._isRtl();t!==e&&(e=t,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(R.END),t=this._getInput(R.START);this._isRange=!!e&&!!t,this._cdr.detectChanges();let i=this._getThumb(R.END);this._rippleRadius=i._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,t):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=!0,e._updateThumbUIByValue()}_initUIRange(e,t){e.initProps(),e.initUI(),t.initProps(),t.initUI(),e._updateMinMax(),t._updateMinMax(),e._updateStaticStyles(),t._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,e._updateThumbUIByValue(),t._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let e=this._getInput(R.END),t=this._getInput(R.START);e._setIsLeftThumb(),t._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),t.translateX=t._calcTranslateXByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateWidthInactive(),t._updateWidthInactive(),e._updateThumbUIByValue(),t._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(R.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>`u`||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(R.START)._isActive||this._getThumb(R.END)._isActive}_getValue(e=R.END){let t=this._getInput(e);return t?t.value:this.min}_skipUpdate(){return!!(this._getInput(R.START)?._skipUIUpdate||this._getInput(R.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(e){let t=this._trackActive.nativeElement.style;t.left=e.left,t.right=e.right,t.transformOrigin=e.transformOrigin,t.transform=e.transform}_calcTickMarkTransform(e){let t=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-t:t}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e))}_onTranslateXChangeBySideEffect(e,t){this._hasViewInitialized&&(e._updateThumbUIByValue(),t._updateThumbUIByValue())}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(R.END),t=this._getInput(R.START);e._updateThumbUIByValue(),t._updateThumbUIByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateMinMax(),t._updateMinMax(),e._updateWidthInactive(),t._updateWidthInactive()}else{let e=this._getInput(R.END);e&&e._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let e=this._getInput(R.START),t=this._getInput(R.END);return!e||!t?!1:t.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let t=e.getSibling(),i=this._getThumb(e.thumbPosition);this._getThumb(t.thumbPosition)._hostElement.classList.remove(`mdc-slider__thumb--top`),i._hostElement.classList.toggle(`mdc-slider__thumb--top`,this._thumbsOverlap)}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e))}_updateThumbUI(e){if(this._skipUpdate())return;let t=this._getThumb(e.thumbPosition===R.END?R.END:R.START);t._hostElement.style.transform=`translateX(${e.translateX}px)`}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let t=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(t):e._hostElement.setAttribute(`aria-valuetext`,t),this.discrete){e.thumbPosition===R.START?this.startValueIndicatorText=t:this.endValueIndicatorText=t;let i=this._getThumb(e.thumbPosition);t.length<3?i._hostElement.classList.add(`mdc-slider__thumb--short-value`):i._hostElement.classList.remove(`mdc-slider__thumb--short-value`)}}_updateValueIndicatorUIs(){let e=this._getInput(R.END),t=this._getInput(R.START);e&&this._updateValueIndicatorUI(e),t&&this._updateValueIndicatorUI(t)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,i=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*i}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e))}_updateTrackUIRange(e){let t=e.getSibling();if(!t||!this._cachedWidth)return;let i=Math.abs(t.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:`auto`,right:`${this._cachedWidth-t.translateX}px`,transformOrigin:`right`,transform:`scaleX(${i})`}):this._setTrackActiveStyles({left:`${t.translateX}px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${i})`})}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:`auto`,right:`0px`,transformOrigin:`right`,transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:`0px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${e.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e)}_updateTickMarkUINonRange(e){let t=this._getValue(),i=Math.max(Math.round((t-this.min)/e),0)+1,r=Math.max(Math.round((this.max-t)/e),0)-1;this._isRtl()?i++:r++,this._tickMarks=Array(i).fill(ii.ACTIVE).concat(Array(r).fill(ii.INACTIVE))}_updateTickMarkUIRange(e){let t=this._getValue(),i=this._getValue(R.START),r=Math.max(Math.round((i-this.min)/e),0),d=Math.max(Math.round((t-i)/e)+1,0),x=Math.max(Math.round((this.max-t)/e),0);this._tickMarks=Array(r).fill(ii.INACTIVE).concat(Array(d).fill(ii.ACTIVE),Array(x).fill(ii.INACTIVE))}_getInput(e){if(e===R.END&&this._input)return this._input;if(this._inputs?.length)return e===R.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===R.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle(`mat-mdc-slider-with-animation`,this._hasAnimation)}_isCursorOnSliderThumb(e,t){let i=t.width/2,r=t.x+i,d=t.y+i,x=e.clientX-r,O=e.clientY-d;return Math.pow(x,2)+Math.pow(O,2)<Math.pow(i,2)}static ɵfac=function(t){return new(t||n)};static ɵcmp=je({type:n,selectors:[[`mat-slider`]],contentQueries:function(t,i,r){if(t&1&&EE(r,Va,5)(r,uc,4),t&2){let d;Fi(d=Ui())&&(i._input=d.first),Fi(d=Ui())&&(i._inputs=d)}},viewQuery:function(t,i){if(t&1&&ys$1(sc,5)(La,5),t&2){let r;Fi(r=Ui())&&(i._trackActive=r.first),Fi(r=Ui())&&(i._thumbs=r)}},hostAttrs:[1,`mat-mdc-slider`,`mdc-slider`],hostVars:12,hostBindings:function(t,i){t&2&&(Op(`mat-`+(i.color||`primary`)),Et(`mdc-slider--range`,i._isRange)(`mdc-slider--disabled`,i.disabled)(`mdc-slider--discrete`,i.discrete)(`mdc-slider--tick-marks`,i.showTickMarks)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{disabled:[2,`disabled`,`disabled`,Ze],discrete:[2,`discrete`,`discrete`,Ze],showTickMarks:[2,`showTickMarks`,`showTickMarks`,Ze],min:[2,`min`,`min`,KD],color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,Ze],max:[2,`max`,`max`,KD],step:[2,`step`,`step`,KD],displayWith:`displayWith`},exportAs:[`matSlider`],features:[on$1([{provide:wo,useExisting:n}])],ngContentSelectors:lc,decls:9,vars:5,consts:[[`trackActive`,``],[`tickMarkContainer`,``],[1,`mdc-slider__track`],[1,`mdc-slider__track--inactive`],[1,`mdc-slider__track--active`],[1,`mdc-slider__track--active_fill`],[1,`mdc-slider__tick-marks`],[3,`discrete`,`thumbPosition`,`valueIndicatorText`],[3,`class`,`transform`]],template:function(t,i){t&1&&(ki(),jn$1(0),Ir(1,`div`,2),Eo(2,`div`,3),Ir(3,`div`,4),Eo(4,`div`,5,0),Rr(),Ar(6,mc,3,1,`div`,6),Rr(),Ar(7,pc,1,3,`mat-slider-visual-thumb`,7),Eo(8,`mat-slider-visual-thumb`,7)),t&2&&(zt(6),Dr(i.showTickMarks?6:-1),zt(),Dr(i._isRange?7:-1),zt(),zu(`discrete`,i.discrete)(`thumbPosition`,2)(`valueIndicatorText`,i.endValueIndicatorText))},dependencies:[_c],styles:[`.mdc-slider__track {
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
`],encapsulation:2})}return n})();var hc={provide:jc$1,useExisting:Gt(()=>gi),multi:!0};var gi=(()=>{class n{_ngZone=g(ee);_elementRef=g(ue);_cdr=g(sn$1);_slider=g(wo);_platform=g(rt);_listenerCleanups;get value(){return KD(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let t=e+``;if(!this._hasSetInitialValue){this._initialValue=t;return}this._isActive||this._setValue(t)}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new fe;dragStart=new fe;dragEnd=new fe;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e}_translateX;thumbPosition=R.END;get min(){return KD(this._hostElement.min,0)}set min(e){this._hostElement.min=e+``,this._cdr.detectChanges()}get max(){return KD(this._hostElement.max,0)}set max(e){this._hostElement.max=e+``,this._cdr.detectChanges()}get step(){return KD(this._hostElement.step,0)}set step(e){this._hostElement.step=e+``,this._cdr.detectChanges()}get disabled(){return Ze(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=N(``);_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(e){this._isFocused=e}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new F;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let e=g(it);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,`pointerdown`,this._onPointerDown.bind(this)),e.listen(this._hostElement,`pointermove`,this._onPointerMove.bind(this)),e.listen(this._hostElement,`pointerup`,this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!this._isActive}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let t=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=t,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(e){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(e)},0)}_fixValue(e){let t=e.clientX-this._slider._cachedLeft,i=this._slider._cachedWidth,r=this._slider.step===0?1:this._slider.step,d=Math.floor((this._slider.max-this._slider.min)/r),x=this._slider._isRtl()?1-t/i:t/i,$=Math.round(x*d)/d*(this._slider.max-this._slider.min)+this._slider.min,ie=Math.round($/r)*r;if(ie===this.value){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=ie,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation})}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(e){let t=this._tickMarkOffset,i=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,i),t)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e)}_updateThumbUIByPointerEvent(e,t){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(t)}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e)}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=!0}registerOnTouched(e){this._onTouchedFn=e}setDisabledState(e){this.disabled=e}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static ɵfac=function(t){return new(t||n)};static ɵdir=V({type:n,selectors:[[`input`,`matSliderThumb`,``]],hostAttrs:[`type`,`range`,1,`mdc-slider__input`],hostVars:1,hostBindings:function(t,i){t&1&&kt(`change`,function(){return i._onChange()})(`input`,function(){return i._onInput()})(`blur`,function(){return i._onBlur()})(`focus`,function(){return i._onFocus()}),t&2&&Wt(`aria-valuetext`,i._valuetext())},inputs:{value:[2,`value`,`value`,KD]},outputs:{valueChange:`valueChange`,dragStart:`dragStart`,dragEnd:`dragEnd`},exportAs:[`matSliderThumb`],features:[on$1([hc,{provide:Va,useExisting:n}])]})}return n})();var Xn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=be({type:n});static ɵinj=Ee({imports:[cm,_n$1]})}return n})();function fc(n,o){if(n&1){let e=vD();Ir(0,`settings-toggle`,6),kt(`ngModelChange`,function(i){g_(e);return __(Li().setDarkMode(i))}),Ir(1,`div`,7)(2,`icon`,8),Ta$1(3,`mode_night`),Rr(),Ir(4,`div`),Ta$1(5),ID(6,`translate`),Rr()()(),qK()}if(n&2)zu(`ngModel`,Li().dark_mode())(`toggle`,!0),ZK(),zt(5),Jk(L4(6,3,`COMMON.DARK_MODE`))}function gc(n,o){if(n&1){let e=vD();Ir(0,`settings-toggle`,6),kt(`ngModelChange`,function(i){g_(e);return __(Li().setLocatable(i))}),Ir(1,`div`,7)(2,`icon`,8),Ta$1(3,`emergency_share`),Rr(),Ir(4,`div`),Ta$1(5),ID(6,`translate`),Rr()()(),qK()}if(n&2)zu(`ngModel`,Li().locatable())(`toggle`,!0),ZK(),zt(5),Jk(L4(6,3,`COMMON.LOCATABLE`))}function bc(n,o){if(n&1){let e=vD();Ir(0,`div`,9),Ta$1(1),ID(2,`translate`),Rr(),Ir(3,`div`,10)(4,`span`,11),Ta$1(5,`A`),Rr(),Ir(6,`mat-slider`,12)(7,`input`,13),kt(`ngModelChange`,function(i){g_(e);return __(Li().applySetting(`font_size`,i))}),Rr(),qK(),Rr(),Ir(8,`span`,2),Ta$1(9,`A`),Rr(),Ir(10,`span`,14),Ta$1(11),Rr()()}if(n&2){let e=Li();zt(),yo$1(` `,L4(2,6,`COMMON.TEXT_SIZE_MSG`),` `),zt(5),zu(`min`,10)(`max`,24)(`step`,2),zt(),zu(`ngModel`,e.font_size()),ZK(),zt(4),yo$1(` `,e.font_size(),`px `)}}var Ua=(()=>{class n extends Is$1{constructor(){super(...arguments),this._data=g(oe),this._settings=g(Ls$1),this.accessible=N(!1),this.locatable=N(!1),this.can_locate=JX(`allow_locatability_option`,!0),this._allow_dark_mode=this._settings.signal(`allow_dark_mode`,!1),this._font_size=this._settings.signal(`font_size`,16,!0),this._accessible=this._settings.signal(`accessible`,!1,!0),this._theme=this._settings.theme_signal,this.dark_mode=Te(()=>this._theme()===`dark`),this.can_change_dark_mode=Te(()=>!!this._allow_dark_mode()),this.font_size=this._font_size,this.applySetting=(e,t)=>this.timeout(`apply_setting`,()=>{this._settings.saveUserSetting(e,t),e===`accessible`&&this.accessible.set(t)},500),this.close=()=>this._data?.close(),this.setLocatable=e=>{this._settings.updateLocatable(e),this.locatable.set(e)}}async ngOnInit(){this.accessible.set(!!this._accessible()),this.subscription(`user`,IB.subscribe(e=>{this.locatable.set(e.locatable)}))}setDarkMode(e){let t=this._theme();e&&t!==`dark`?this._settings.setTheme(`dark`):!e&&t===`dark`&&this._settings.setTheme(`light`)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Rt$1(n)))(i||n)}})()}static{this.ɵcmp=je({type:n,selectors:[[`accessibility-tooltip`]],features:[Oe],decls:18,vars:11,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-[20rem]`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`,3,`click`],[1,`text-2xl`],[1,``],[1,`space-y-2`,`p-2`],[3,`ngModel`,`toggle`],[3,`ngModelChange`,`ngModel`,`toggle`],[1,`flex`,`items-center`,`space-x-2`],[1,`-ml-2`,`text-xl`],[1,`bg-base-200`,`px-8`,`py-4`,`text-center`],[1,`flex`,`items-center`,`space-x-4`,`px-4`],[1,`text-sm`],[1,`w-1/2`,`flex-1`,`text-[16px]`,3,`min`,`max`,`step`],[`matSliderThumb`,``,1,`text-[16px]`,3,`ngModelChange`,`ngModel`],[1,`bg-base-300`,`my-2`,`rounded-sm`,`px-2`,`py-1`,`text-base`,`text-white`]],template:function(t,i){t&1&&(Ir(0,`div`,0)(1,`div`,1),kt(`click`,function(){return i.close()}),Ir(2,`icon`,2),Ta$1(3,`arrow_back`),Rr(),Ir(4,`div`,3),Ta$1(5),ID(6,`translate`),Rr()(),Ir(7,`div`,4),Ar(8,fc,7,5,`settings-toggle`,5),Ar(9,gc,7,5,`settings-toggle`,5),Ir(10,`settings-toggle`,6),kt(`ngModelChange`,function(d){return i.applySetting(`accessible`,d)}),Ir(11,`div`,7)(12,`icon`,8),Ta$1(13,`playlist_add`),Rr(),Ir(14,`div`),Ta$1(15),ID(16,`translate`),Rr()()(),qK(),Rr(),Ar(17,bc,12,8),Rr()),t&2&&(zt(5),yo$1(` `,L4(6,7,`COMMON.CONTROLS_ACCESSIBILITY`),` `),zt(3),Dr(i.can_change_dark_mode()?8:-1),zt(),Dr(i.can_locate()?9:-1),zt(),zu(`ngModel`,i.accessible())(`toggle`,!0),ZK(),zt(5),Jk(L4(16,9,`COMMON.TEXT_SIZE`)),zt(2),Dr(i.accessible()?17:-1))},dependencies:[cm,lw,Xn,$n,gi,va,IQe,YDe,YF,BDe,j7,f],encapsulation:2})}}return n})();function vc(n,o){if(n&1){let e=vD();Ir(0,`mat-radio-button`,8),kt(`click`,function(){let i=g_(e).$implicit;return __(Li().setBuilding(i))}),Ta$1(1),Rr()}if(n&2){let e=o.$implicit;zu(`value`,e.id),zt(),yo$1(` `,e.display_name||e.name,` `)}}var za=(()=>{class n{constructor(){this._data=g(oe),this._org=g(kb),this.buildings=this._org.active_buildings,this.building=this._org.active_building,this.setBuilding=e=>{this._org.setBuilding(e,!0),this._data?.close()},this.close=()=>this._data?.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je({type:n,selectors:[[`building-select`]],decls:16,vars:8,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-74`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`,3,`click`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`],[1,`text-2xl`],[1,`leading-tight`],[1,`text-xs`,`opacity-30`],[1,`px-4`,`py-2`,`text-xs`,`opacity-60`],[1,`flex`,`flex-col`,`space-y-2`,`px-2`,3,`ngModel`],[3,`value`],[3,`click`,`value`]],template:function(t,i){t&1&&(Ir(0,`div`,0),kt(`click`,function(){return i.close()}),Ir(1,`div`,1)(2,`icon`,2),Ta$1(3,`arrow_back`),Rr(),Ir(4,`div`,3)(5,`div`),Ta$1(6),Rr(),Ir(7,`div`,4),Ta$1(8),ID(9,`translate`),Rr()()(),Ir(10,`div`,5),Ta$1(11),ID(12,`translate`),Rr(),Ir(13,`mat-radio-group`,6),A8(14,vc,2,2,`mat-radio-button`,7,I8),Rr(),qK(),Rr()),t&2&&(zt(6),yo$1(` `,i.building()?.display_name||i.building()?.name,` `),zt(2),yo$1(` `,L4(9,4,`RESOURCE.BUILDING`),` `),zt(3),yo$1(` `,L4(12,6,`COMMON.BUILDING_SELECT`),` `),zt(2),zu(`ngModel`,i.building()?.id),ZK(),zt(),D8(i.buildings()))},dependencies:[Wn,hi,ti,IQe,cm,lw,YDe,BDe,j7,f],encapsulation:2})}}return n})();function xc(n,o){n&1&&(Ir(0,`div`,3),Ta$1(1),ID(2,`translate`),Rr()),n&2&&(zt(),yo$1(` `,L4(2,1,`COMMON.DESK_HEIGHT_NOT_SET`),` `))}function kc(n,o){if(n&1){let e=vD();Ir(0,`button`,13),kt(`click`,function(){g_(e);return __(Li().onClose())}),Ta$1(1),ID(2,`translate`),Rr()}n&2&&(zt(),yo$1(` `,L4(2,1,`COMMON.SAVE`),` `))}var Ga=(()=>{class n{constructor(){this._settings=g(Ls$1),this.show_close=$Te(!1),this.close=GTe(),this.not_set=N(!1),this.desk_sitting_height=N(71),this.desk_standing_height=N(101)}ngOnInit(){this.not_set.set(!this._settings.get(`desk_sitting_height`)&&!this._settings.get(`desk_standing_height`)),this.desk_sitting_height.set(this._settings.get(`desk_sitting_height`)||71),this.desk_standing_height.set(this._settings.get(`desk_standing_height`)||101)}onClose(){this.saveSetting(`desk_sitting_height`,this.desk_sitting_height()),this.saveSetting(`desk_standing_height`,this.desk_standing_height()),this.close.emit()}formatLabel(e){return`${e.toFixed(1)}cm`}saveSetting(e,t){this._settings.saveUserSetting(e,t)}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je({type:n,selectors:[[`desk-height-presets`]],inputs:{show_close:[1,`show_close`]},outputs:{show_close:`show_closeChange`,close:`close`},decls:29,vars:23,consts:[[1,`bg-base-100`,`relative`,`w-[20rem]`,`rounded-sm`,`p-4`,`shadow-sm`],[1,`mb-2`,`text-lg`],[1,`mb-4`,`text-xs`,`opacity-60`],[1,`bg-warning`,`text-warning-content`,`-mx-2`,`mb-4`,`rounded-sm`,`p-2`,`text-xs`],[1,`mt-2`,`flex`,`flex-col`],[1,`flex`,`items-center`,`space-x-2`],[`min`,`60`,`max`,`80`,`step`,`0.5`,`discrete`,``,1,`flex-1`,3,`displayWith`],[`matSliderThumb`,``,3,`ngModelChange`,`ngModel`],[1,`w-12`,`text-right`,`text-sm`],[1,`mr-2`,`flex`,`items-center`,`space-x-2`],[`min`,`90`,`max`,`120`,`step`,`0.5`,`discrete`,``,1,`flex-1`,3,`displayWith`],[1,`mr-2`,`w-12`,`text-right`,`text-sm`],[`btn`,``,`matRipple`,``,1,`mt-2`,`w-full`],[`btn`,``,`matRipple`,``,1,`mt-2`,`w-full`,3,`click`]],template:function(t,i){t&1&&(Ir(0,`div`,0)(1,`div`,1),Ta$1(2),ID(3,`translate`),Rr(),Ir(4,`div`,2),Ta$1(5),ID(6,`translate`),Rr(),Ar(7,xc,3,3,`div`,3),Ir(8,`div`,2),Ta$1(9),ID(10,`translate`),Rr(),Ir(11,`div`,4)(12,`label`),Ta$1(13),ID(14,`translate`),Rr(),Ir(15,`div`,5)(16,`mat-slider`,6)(17,`input`,7),kt(`ngModelChange`,function(d){return i.desk_sitting_height.set(d),i.saveSetting(`desk_sitting_height`,d)}),Rr(),qK(),Rr(),Ir(18,`div`,8),Ta$1(19),Rr()(),Ir(20,`label`),Ta$1(21),ID(22,`translate`),Rr(),Ir(23,`div`,9)(24,`mat-slider`,10)(25,`input`,7),kt(`ngModelChange`,function(d){return i.desk_standing_height.set(d),i.saveSetting(`desk_standing_height`,d)}),Rr(),qK(),Rr(),Ir(26,`div`,11),Ta$1(27),Rr()()(),Ar(28,kc,3,3,`button`,12),Rr()),t&2&&(zt(2),yo$1(` `,L4(3,13,`COMMON.DESK_HEIGHT_TITLE`),` `),zt(3),yo$1(` `,L4(6,15,`COMMON.DESK_HEIGHT_MSG`),` `),zt(2),Dr(i.not_set()&&i.show_close()?7:-1),zt(2),yo$1(` `,L4(10,17,`COMMON.DESK_HEIGHT_INFO`),` `),zt(4),Jk(L4(14,19,`COMMON.DESK_HEIGHT_SITTING`)),zt(3),zu(`displayWith`,i.formatLabel),zt(),zu(`ngModel`,i.desk_sitting_height()),ZK(),zt(2),yo$1(` `,i.desk_sitting_height().toFixed(1),`cm `),zt(2),Jk(L4(22,21,`COMMON.DESK_HEIGHT_STANDING`)),zt(3),zu(`displayWith`,i.formatLabel),zt(),zu(`ngModel`,i.desk_standing_height()),ZK(),zt(2),yo$1(` `,i.desk_standing_height().toFixed(1),`cm `),zt(),Dr(i.show_close()?28:-1))},dependencies:[cm,lw,Xn,$n,gi,YDe,YF,BDe,j7,f],encapsulation:2})}}return n})();function yc(n,o){if(n&1&&(Ir(0,`a`,4)(1,`div`,5),Eo(2,`icon`,6),Ir(3,`div`),Ta$1(4),Rr()()()),n&2){let e=o.$implicit;zu(`href`,e.link,rE),zt(2),zu(`icon`,e.icon),zt(2),Jk(e.name)}}var Ha=(()=>{class n{constructor(){this._data=g(oe),this._settings=g(Ls$1),this._tiles=this._settings.signal(`help`,[]),this.close=()=>{this._data?.close()}}get tiles(){return this._tiles()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je({type:n,selectors:[[`help-tooltip`]],decls:9,vars:3,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`w-74`,`flex-col`,`rounded-sm`,`shadow-sm`,3,`click`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-4`],[1,`text-2xl`],[1,``],[`matRipple`,``,`target`,`_blank`,`ref`,`noreferer noopener`,1,`w-full`,`p-2`,`text-left`,3,`href`],[1,`hover:bg-base-200`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-sm`,`p-2`],[1,`text-xl`,3,`icon`]],template:function(t,i){t&1&&(Ir(0,`div`,0),kt(`click`,function(){return i.close()}),Ir(1,`div`,1)(2,`icon`,2),Ta$1(3,`arrow_back`),Rr(),Ir(4,`div`,3),Ta$1(5),ID(6,`translate`),Rr()(),A8(7,yc,5,3,`a`,4,I8),Rr()),t&2&&(zt(5),Jk(L4(6,1,`COMMON.CONTROLS_HELP`)),zt(2),D8(i.tiles))},dependencies:[cm,lw,IQe,f],encapsulation:2})}}return n})();var Cc=(n,o)=>o.id;function Mc(n,o){if(n&1&&(Ir(0,`div`,8),Ta$1(1),Rr()),n&2){let e=Li().$implicit;zt(),yo$1(` `,e.local,` `)}}function Sc(n,o){if(n&1){let e=vD();Ir(0,`button`,6),kt(`click`,function(){let i=g_(e).$implicit;return __(Li().setLocale(i.id))}),Ir(1,`div`,7),ID(2,`translate`),Ir(3,`div`),Ta$1(4),ID(5,`translate`),Rr(),Ar(6,Mc,2,1,`div`,8),ID(7,`translate`),Rr()()}if(n&2){let e=o.$implicit,t=Li();zt(),Et(`mt-2`,L4(2,8,e.name)!==e.local)(`border`,t.active_locale===e.id)(`border-info`,t.active_locale===e.id),zt(3),Jk(L4(5,10,e.name)),zt(2),Dr(L4(7,12,e.name)!==e.local?6:-1)}}var Wa=(()=>{class n{constructor(){this._data=g(oe),this._settings=g(Ls$1),this._locale=g(iB),this._locales=this._settings.signal(`locales`,[]),this.setLocale=e=>{this._locale.setLocale(e),localStorage.setItem(`PLACEOS.locale`,e),setTimeout(()=>location.reload(),300)},this.close=()=>this._data?.close()}get active_locale(){return this._locale.locale}get locales(){return this._locales()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je({type:n,selectors:[[`language-select`]],decls:12,vars:6,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-74`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`,3,`click`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`],[1,`text-2xl`],[1,``],[1,`px-4`,`py-2`,`text-xs`,`opacity-60`],[`matRipple`,``,1,`flex`,`h-14`,`items-center`,`justify-between`,`space-x-8`,`px-2`,`text-left`],[`matRipple`,``,1,`flex`,`h-14`,`items-center`,`justify-between`,`space-x-8`,`px-2`,`text-left`,3,`click`],[1,`hover:bg-base-200`,`flex`,`flex-1`,`items-center`,`justify-between`,`rounded-sm`,`p-2`,`leading-tight`],[1,`bg-base-300`,`rounded-sm`,`px-2`,`py-1`,`text-xs`,`opacity-60`]],template:function(t,i){t&1&&(Ir(0,`div`,0),kt(`click`,function(){return i.close()}),Ir(1,`div`,1)(2,`icon`,2),Ta$1(3,`arrow_back`),Rr(),Ir(4,`div`,3),Ta$1(5),ID(6,`translate`),Rr()(),Ir(7,`div`,4),Ta$1(8),ID(9,`translate`),Rr(),A8(10,Sc,8,14,`button`,5,Cc),Rr()),t&2&&(zt(5),Jk(L4(6,2,`COMMON.LANGUAGE`)),zt(3),yo$1(` `,L4(9,4,`COMMON.LANGUAGE_SELECT`),` `),zt(2),D8(i.locales))},dependencies:[cm,lw,IQe,f],encapsulation:2})}}return n})();function wc(n,o){if(n&1){let e=vD();Ir(0,`mat-radio-button`,8),kt(`click`,function(){let i=g_(e).$implicit;return __(Li().setRegion(i))}),Ta$1(1),Rr()}if(n&2){let e=o.$implicit;zu(`value`,e.id),zt(),yo$1(` `,e.display_name||e.name,` `)}}var ja=(()=>{class n{constructor(){this._data=g(oe),this._org=g(kb),this.regions=this._org.region_list,this.region=this._org.active_region,this.setRegion=async e=>{await this._org.setRegion(e),this._org.setBuilding(this._org.building,!0),this._data?.close()},this.close=()=>this._data?.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je({type:n,selectors:[[`region-select`]],decls:16,vars:8,consts:[[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`max-h-[65vh]`,`w-74`,`flex-col`,`overflow-auto`,`rounded-sm`,`pb-3`,`shadow-sm`,3,`click`],[`matRipple`,``,1,`border-base-300`,`flex`,`items-center`,`space-x-2`,`border-b`,`px-2`,`py-3`],[1,`text-2xl`],[1,`leading-tight`],[1,`text-xs`,`opacity-30`],[1,`px-4`,`py-2`,`text-xs`,`opacity-60`],[1,`flex`,`flex-col`,`space-y-2`,`px-2`,3,`ngModel`],[3,`value`],[3,`click`,`value`]],template:function(t,i){t&1&&(Ir(0,`div`,0),kt(`click`,function(){return i.close()}),Ir(1,`div`,1)(2,`icon`,2),Ta$1(3,`arrow_back`),Rr(),Ir(4,`div`,3)(5,`div`),Ta$1(6),Rr(),Ir(7,`div`,4),Ta$1(8),ID(9,`translate`),Rr()()(),Ir(10,`div`,5),Ta$1(11),ID(12,`translate`),Rr(),Ir(13,`mat-radio-group`,6),A8(14,wc,2,2,`mat-radio-button`,7,I8),Rr(),qK(),Rr()),t&2&&(zt(6),yo$1(` `,i.region()?.display_name||i.region()?.name,` `),zt(2),yo$1(` `,L4(9,4,`RESOURCE.REGION`),` `),zt(3),yo$1(` `,L4(12,6,`COMMON.REGION_SELECT`),` `),zt(2),zu(`ngModel`,i.region()?.id),ZK(),zt(),D8(i.regions()))},dependencies:[Wn,hi,ti,IQe,cm,lw,YDe,BDe,j7,f],encapsulation:2})}}return n})();var qa=(()=>{class n{constructor(){this._settings=g(Ls$1),this._tooltip=g(oe,{optional:!0}),this.plate_number=N(``)}async ngOnInit(){await GC(this._settings.initialised),this.plate_number.set(this._settings.get(`plate_number`)||``)}save(){this.plate_number()&&this._settings.saveUserSetting(`plate_number`,this.plate_number()),oS(Kn(`COMMON.PARKING_SETTINGS_SAVE`)),this._tooltip?.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je({type:n,selectors:[[`user-parking-tooltip`]],decls:14,vars:13,consts:[[1,`border-base-300`,`bg-base-100`,`min-w-[20rem]`,`space-y-2`,`rounded-md`,`border`,`p-2`],[1,`border-base-300`,`border-b`,`text-lg`,`font-medium`],[1,`flex`,`flex-col`],[`for`,`plate-number`],[`appearance`,`outline`,1,`no-subscript`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`]],template:function(t,i){t&1&&(Ir(0,`div`,0)(1,`h3`,1),Ta$1(2),ID(3,`translate`),Rr(),Ir(4,`div`,2)(5,`label`,3),Ta$1(6),ID(7,`translate`),Rr(),Ir(8,`mat-form-field`,4)(9,`input`,5),ID(10,`translate`),i1(`ngModelChange`,function(d){return h4(i.plate_number,d)||(i.plate_number=d),d}),Rr(),qK(),Rr()(),Ir(11,`button`,6),kt(`click`,function(){return i.save()}),Ta$1(12),ID(13,`translate`),Rr()()),t&2&&(zt(2),yo$1(` `,L4(3,5,`COMMON.CONTROLS_PARKING`),` `),zt(4),Jk(L4(7,7,`BOOKINGS.PARKING_PLATE_NUMBER`)),zt(3),r1(`ngModel`,i.plate_number),zu(`placeholder`,L4(10,9,`BOOKINGS.PARKING_PLATE_NUMBER`)),ZK(),zt(3),yo$1(` `,L4(13,11,`COMMON.SAVE`),` `))},dependencies:[kt$1,un$1,ks$1,Is$2,YDe,YF,BDe,j7,f],encapsulation:2})}}return n})();function Tc(n,o){if(n&1){let e=vD();Ir(0,`button`,17),kt(`click`,function(){let i=g_(e).$implicit,r=Li().$index;return __(Li(2).setLocation(r,i.id))}),Ir(1,`div`,18)(2,`icon`,11),Ta$1(3),Rr(),Ir(4,`div`,19),Ta$1(5),ID(6,`translate`),Rr()()()}if(n&2){let e=o.$implicit;zt(3),Jk(e.icon),zt(2),yo$1(` `,L4(6,2,e.name),` `)}}function Ec(n,o){n&1&&Eo(0,`div`,16)}function Ic(n,o){if(n&1&&(Ir(0,`div`,9)(1,`div`,10)(2,`icon`,11),Ta$1(3),Rr()(),Ir(4,`div`,12)(5,`button`,13)(6,`div`),Ta$1(7),Rr(),Ir(8,`icon`),Ta$1(9,`expand_more`),Rr()(),Ir(10,`mat-menu`,null,0),A8(12,Tc,7,4,`button`,14,I8),Rr(),Ir(14,`div`,15),Ta$1(15),ID(16,`date`),ID(17,`date`),Rr()(),Ar(18,Ec,1,0,`div`,16),Rr()),n&2){let e=o.$implicit,t=o.$index,i=B8(11),r=Li(2);Et(`opacity-30`,r.now>r.timeFrom(e.end_time)),zt(),Et(`bg-base-200`,r.now<r.timeFrom(e.start_time)||r.now>r.timeFrom(e.end_time))(`bg-info`,r.now>=r.timeFrom(e.start_time)&&r.now<=r.timeFrom(e.end_time))(`text-info-content`,r.now>=r.timeFrom(e.start_time)&&r.now<=r.timeFrom(e.end_time)),zt(2),Jk(r.location_icon(r.timeFrom(e.start_time))),zt(2),zu(`matMenuTriggerFor`,i),zt(2),yo$1(` `,r.location(r.timeFrom(e.start_time)),` `),zt(5),D8(r.locations()),zt(3),e1(` `,AD(16,14,r.timeFrom(e.start_time),`shortTime`),` – `,AD(17,17,r.timeFrom(e.end_time),`shortTime`),` `),zt(3),Dr(t>0?18:-1)}}function Nc(n,o){if(n&1&&(Ir(0,`div`,6),A8(1,Ic,19,20,`div`,8,I8),Rr()),n&2){let e=Li();zt(),D8(e.active_preference?.blocks)}}function Oc(n,o){n&1&&(Ir(0,`div`,7)(1,`icon`,20),Ta$1(2,`event_busy`),Rr(),Ir(3,`p`,21),Ta$1(4),ID(5,`translate`),Rr(),Ir(6,`p`,21),Ta$1(7),ID(8,`translate`),Rr()()),n&2&&(zt(4),yo$1(` `,L4(5,2,`COMMON.WORK_LOCATION_EMPTY`),` `),zt(3),yo$1(` `,L4(8,4,`COMMON.WORK_LOCATION_EDIT_INFO`),` `))}var $a=(()=>{class n{constructor(){this._dialog=g(Yb),this.locations=N([]),this.settings=N(void 0),this.overrides=N({})}get active_preference(){let e=ii$1(new Date,`yyyy-MM-dd`);return this.overrides()[e]?this.overrides()[e]:this.settings()?.find(t=>t.day_of_week===new Date().getDay())}get now(){return qc$1(Date.now()).getTime()}ngOnInit(){let e=ji();this.settings.set(e.work_preferences),this.overrides.set(e.work_overrides),this.locations.set([{id:`wfo`,name:Kn(`COMMON.WORK_OFFICE`),icon:`business`},{id:`wfh`,name:Kn(`COMMON.WORK_HOME`),icon:`home`},{id:`aol`,name:Kn(`COMMON.WORK_LEAVE`),icon:`event_busy`},{id:`sick`,name:Kn(`COMMON.WORK_SICK`),icon:`sick`}])}location_icon(e){return ji().location_icon(e+60*1e3)}location(e){return ji().location_name_time(e+60*1e3)}timeFrom(e){return qc$1(oi(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}editSettings(){this._dialog.open(qn)}async setLocation(e,t){let i=ji(),r=this.active_preference,d=ii$1(Date.now(),`yyyy-MM-dd`),x=m(l({},i.work_overrides),{[d]:m(l({},r),{blocks:[...r.blocks.slice(0,e),m(l({},r.blocks[e]),{location:t}),...r.blocks.slice(e+1)]})});for(let O in x){let $=ha(O,`yyyy-MM-dd`,new Date);(!x[O].blocks.length||wr($,pn$1(an$1(Date.now()),-1)))&&delete x[O]}this.overrides.set(x),await zV(i.id,m(l({},i),{work_overrides:x})),wB()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je({type:n,selectors:[[`work-location-tooltip`]],decls:14,vars:11,consts:[[`work_menu`,`matMenu`],[1,`bg-base-100`,`relative`,`-top-12`,`-right-1`,`flex`,`w-74`,`flex-col`,`overflow-hidden`,`rounded-sm`,`shadow-sm`],[1,`flex`,`items-center`,`justify-between`,`px-2`],[1,`px-2`,`py-4`,`font-medium`],[`icon`,``,`matRipple`,``,`matTooltipPosition`,`left`,1,`hover:bg-base-200`,3,`click`,`matTooltip`],[1,`px-4`,`text-sm`,`font-medium`],[1,`pb-2`],[1,`flex`,`w-full`,`flex-col`,`items-center`,`justify-center`,`space-y-2`,`p-8`,`opacity-30`],[1,`relative`,`flex`,`items-center`,`px-4`,`py-2`,3,`opacity-30`],[1,`relative`,`flex`,`items-center`,`px-4`,`py-2`],[1,`bg-base-200`,`z-20`,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`rounded-full`],[1,`text-2xl`],[1,`ml-2`,`flex-1`],[`matRipple`,``,1,`hover:bg-base-200`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`px-2`,`py-1`,`font-medium`,3,`matMenuTriggerFor`],[`mat-menu-item`,``],[1,`px-2`,`text-xs`,`opacity-60`],[1,`border-base-200`,`absolute`,`-top-2`,`left-7`,`h-4`,`w-0`,`-translate-x-px`,`border-l-2`,`border-dashed`],[`mat-menu-item`,``,3,`click`],[1,`flex`,`items-center`,`space-x-2`],[1,`pr-8`],[1,`text-6xl`],[1,`text-center`,`text-sm`]],template:function(t,i){t&1&&(Ir(0,`div`,1)(1,`div`,2)(2,`h3`,3),Ta$1(3),ID(4,`translate`),Rr(),Ir(5,`button`,4),ID(6,`translate`),kt(`click`,function(){return i.editSettings()}),Ir(7,`icon`),Ta$1(8,`edit_note`),Rr()()(),Ir(9,`h3`,5),Ta$1(10),ID(11,`date`),Rr(),Ar(12,Nc,3,0,`div`,6)(13,Oc,9,6,`div`,7),Rr()),t&2&&(zt(3),yo$1(` `,L4(4,4,`COMMON.WORK_LOCATION`),` `),zt(2),zu(`matTooltip`,L4(6,6,`COMMON.WORK_LOCATION_EDIT`)),zt(5),yo$1(` `,AD(11,8,i.now,`fullDate`),` `),zt(2),Dr(i.active_preference?.blocks?.length?12:13))},dependencies:[cF,L9e,Zt,et,st,lt,cm,lw,Yt$2,mt,IQe,c9,f],encapsulation:2})}}return n})();function Rc(n,o){if(n&1){let e=vD();Ir(0,`button`,28),kt(`click`,function(){let i=g_(e).$implicit;return __(Li(2).saveSetting(`work_location`,i.id))}),Ir(1,`div`,29)(2,`icon`,23),Ta$1(3),Rr(),Ir(4,`div`,30),Ta$1(5),ID(6,`translate`),Rr()()()}if(n&2){let e=o.$implicit;zt(3),Jk(e.icon),zt(2),yo$1(` `,L4(6,2,e.name),` `)}}function Dc(n,o){if(n&1&&(Ir(0,`div`,7)(1,`h3`,19),Ta$1(2,` Today's Work Location `),Rr(),Ir(3,`div`,20)(4,`div`,21)(5,`div`,22)(6,`icon`,23),Ta$1(7),Rr()(),Ir(8,`div`,24)(9,`button`,25)(10,`div`),Ta$1(11),Rr(),Ir(12,`icon`),Ta$1(13,`expand_more`),Rr()(),Ir(14,`mat-menu`,null,1),A8(16,Rc,7,4,`button`,26,I8),Rr(),Ir(18,`div`,27),Ta$1(19),ID(20,`date`),ID(21,`date`),Rr()()()()()),n&2){let e=B8(15),t=Li();zt(7),Jk(t.location_icon(t.timeFrom(t.active_block().start_time))),zt(2),zu(`matMenuTriggerFor`,e),zt(2),yo$1(` `,t.location(t.timeFrom(t.active_block().start_time)),` `),zt(5),D8(t.pref_locations()),zt(3),e1(` `,AD(20,5,t.timeFrom(t.active_block().start_time),`shortTime`),` – `,AD(21,8,t.timeFrom(t.active_block().end_time),`shortTime`),` `)}}function Ac(n,o){if(n&1&&(Ir(0,`div`,8)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Ta$1(5,`layers`),Rr()(),Ir(6,`div`,33),Ta$1(7),Rr(),Ir(8,`icon`,34),Ta$1(9,` chevron_right `),Rr()()()()),n&2){let e=Li();zu(`content`,e.region_select),zt(7),yo$1(` `,e.region()?.display_name||e.region()?.name,` `)}}function Pc(n,o){if(n&1&&(Ir(0,`div`,8)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Ta$1(5,`business`),Rr()(),Ir(6,`div`,33),Ta$1(7),Rr(),Ir(8,`icon`,34),Ta$1(9,` chevron_right `),Rr()()()()),n&2){let e=Li();zu(`content`,e.building_select),zt(7),yo$1(` `,e.building()?.display_name||e.building()?.name,` `)}}function Fc(n,o){if(n&1&&(Ir(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Ta$1(5,`help`),Rr()(),Ir(6,`div`,35),Ta$1(7),ID(8,`translate`),Rr(),Ir(9,`icon`,34),Ta$1(10,` chevron_right `),Rr()()()()),n&2)zu(`content`,Li().help_tooltip),zt(7),yo$1(` `,L4(8,2,`COMMON.CONTROLS_HELP`),` `)}function Vc(n,o){if(n&1&&(Ir(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Ta$1(5,`share_location`),Rr()(),Ir(6,`div`,35),Ta$1(7),ID(8,`translate`),Rr(),Ir(9,`icon`,34),Ta$1(10,`chevron_right`),Rr()()()()),n&2)zu(`content`,Li().work_location_tooltip),zt(7),yo$1(` `,L4(8,2,`COMMON.WORK_LOCATION`),` `)}function Lc(n,o){if(n&1&&(Ir(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Ta$1(5,`mode_night`),Rr()(),Ir(6,`div`,35),Ta$1(7),ID(8,`translate`),Rr(),Ir(9,`icon`,34),Ta$1(10,`chevron_right`),Rr()()()()),n&2){let e=Li();Et(`border-b!`,!e.locales().length||!e.desk_height()),zu(`content`,e.accessibility_tooltip),zt(7),yo$1(` `,L4(8,4,`COMMON.CONTROLS_ACCESSIBILITY`),` `)}}function Bc(n,o){if(n&1&&(Ir(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Ta$1(5,`desk`),Rr()(),Ir(6,`div`,35),Ta$1(7),ID(8,`translate`),Rr(),Ir(9,`icon`,34),Ta$1(10,` chevron_right `),Rr()()()()),n&2){let e=Li(),t=B8(15);Et(`border-b!`,!e.locales().length),zu(`content`,t),zt(7),yo$1(` `,L4(8,4,`COMMON.CONTROLS_DESKS`),` `)}}function Uc(n,o){n&1&&Eo(0,`desk-height-presets`)}function zc(n,o){if(n&1&&(Ir(0,`div`,9)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Ta$1(5,`parking_sign`),Rr()(),Ir(6,`div`,35),Ta$1(7),ID(8,`translate`),Rr(),Ir(9,`icon`,34),Ta$1(10,` chevron_right `),Rr()()()()),n&2){let e=Li();Et(`border-b!`,!e.locales().length),zu(`content`,e.parking_tooltip),zt(7),yo$1(` `,L4(8,4,`COMMON.CONTROLS_PARKING`),` `)}}function Gc(n,o){n&1&&(Ir(0,`div`,37),Ta$1(1,` Language `),Rr())}function Hc(n,o){if(n&1&&(Ir(0,`div`,11)(1,`button`,12)(2,`div`,31)(3,`div`,32)(4,`icon`),Ta$1(5,`language`),Rr()(),Ir(6,`div`,36)(7,`div`)(8,`div`),Ta$1(9),ID(10,`translate`),Rr(),Ar(11,Gc,2,0,`div`,37),ID(12,`translate`),Rr(),Ir(13,`div`,38),ID(14,`translate`),Ta$1(15),ID(16,`translate`),Rr()(),Ir(17,`icon`,34),Ta$1(18,` chevron_right `),Rr()()()()),n&2){let e=Li();zu(`content`,e.language_tooltip),zt(9),yo$1(` `,L4(10,5,`COMMON.LANGUAGE`),` `),zt(2),Dr(L4(12,7,`COMMON.LANGUAGE`)!==`Language`?11:-1),zt(2),zu(`matTooltip`,L4(14,9,e.active_locale)),zt(2),yo$1(` `,L4(16,11,e.active_locale),` `)}}function Wc(n,o){if(n&1){let e=vD();Ir(0,`button`,39),kt(`click`,function(){g_(e);return __(Li().newSupportTicket())}),Ir(1,`div`,31)(2,`div`,32)(3,`icon`),Ta$1(4,`support_agent`),Rr()(),Ir(5,`div`,35),Ta$1(6),ID(7,`translate`),Rr()()()}n&2&&(zt(6),yo$1(` `,L4(7,1,`COMMON.CONTROLS_SUPPORT`),` `))}function jc(n,o){if(n&1){let e=vD();Ir(0,`button`,40),kt(`click`,function(){g_(e);return __(Li().reloadPage())}),Ta$1(1),ID(2,`translate`),Rr()}n&2&&(zt(),yo$1(` `,L4(2,1,`COMMON.CONTROLS_NEW_VERSION`),` `))}function qc(n,o){if(n&1){let e=vD();Ir(0,`button`,41),kt(`click`,function(){g_(e);return __(Li().viewChangelog())}),Ta$1(1),Rr()}if(n&2){let e=Li();zu(`disabled`,!e.changelog_available()),zt(),yo$1(` `,e.version.hash,` `)}}function $c(n,o){if(n&1&&(Ir(0,`span`),Ta$1(1),Rr()),n&2){let e=Li();zt(),Jk(e.version.hash)}}var Xa=(()=>{class n{constructor(){this._settings=g(Ls$1),this._org=g(kb),this._dialog=g(Yb),this._changelog=g(Ra),this._locale=g(iB),this.building=this._org.active_building,this.region=this._org.active_region,this.regions=this._org.region_list,this.sidebar=Ss$1(!1),this.accessibility=JX(`allow_accessibility_changes`,!0),this.show_changelog=JX(`show_changelog`,!0),this.changelog_available=this._changelog.available,this.viewChangelog=()=>this._changelog.view(),this.region_select=ja,this.building_select=za,this.help_tooltip=Ha,this.accessibility_tooltip=Ua,this.language_tooltip=Wa,this.work_location_tooltip=$a,this.parking_tooltip=qa,this.features=JX(`features`,[]),this._locales=this._settings.signal(`locales`,[]),this._desk_height=this._settings.signal(`desks.height_enabled`,!1),this._use_region=this._settings.signal(`use_region`,!1),this._disable_building_select=this._settings.signal(`disable_building_select`,!1),this.pref_locations=N([]),this.work_prefs=N([]),this.overrides=N({}),this.active_block=Te(()=>{let e=ii$1(new Date,`yyyy-MM-dd`),t=new Date().getDay();return(this.overrides()[e]?this.overrides()[e]:this.work_prefs().find(r=>r.day_of_week===t))?.blocks?.find(r=>this.now>=this.timeFrom(r.start_time)&&this.now<this.timeFrom(r.end_time))}),this.active_index=Te(()=>{let e=ii$1(new Date,`yyyy-MM-dd`),t=new Date().getDay();return(this.overrides()[e]?this.overrides()[e]:this.work_prefs().find(r=>r.day_of_week===t))?.blocks?.findIndex(r=>this.now>=this.timeFrom(r.start_time)&&this.now<this.timeFrom(r.end_time))}),this.locales=this._locales,this.desk_height=this._desk_height,this.use_region=this._use_region,this.disable_building_select=this._disable_building_select}location_icon(e){return ji().location_icon(e+60*1e3)}location(e){return ji().location_name_time(e+60*1e3)}timeFrom(e){return qc$1(oi(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}get user(){return ji()}get groups(){return this.user?.groups?.join(`
`)||``}get version(){return Mh}get active_locale(){let e=this.locales(),t=this._locale.locale;for(let i of e)if(i.id===t)return i.name;return`LANGUAGE.ENGLISH`}get now(){return qc$1(Date.now()).getTime()}get has_new_version(){return KH()}ngOnInit(){let e=ji();this.work_prefs.set(e?.work_preferences||[]),this.overrides.set(e?.work_overrides||{}),this.pref_locations.set([{id:`wfo`,name:Kn(`COMMON.WORK_OFFICE`),icon:`business`},{id:`wfh`,name:Kn(`COMMON.WORK_HOME`),icon:`home`},{id:`aol`,name:Kn(`COMMON.WORK_LEAVE`),icon:`event_busy`},{id:`sick`,name:Kn(`COMMON.WORK_SICK`),icon:`sick`}])}logout(){sOe()}reloadPage(){location.reload()}newSupportTicket(){this._settings.get(`app.external_support_url`)?window.open(this._settings.get(`app.external_support_url`),`_blank`):this._dialog.open(Aa)}openWfhModal(){this._dialog.open(qn)}saveSetting(e,t){this._settings.saveUserSetting(e,t)}formatLabel(e){return`${e.toFixed(1)}cm`}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je({type:n,selectors:[[`user-controls`]],inputs:{sidebar:[1,`sidebar`]},decls:35,vars:32,consts:[[`desk_height_tooltip`,``],[`work_menu`,`matMenu`],[1,`divide-base-200`,`border-base-300`,`bg-base-100`,`relative`,`mt-1`,`flex`,`flex-col`,`divide-y`,`overflow-auto`,`rounded-sm`,`border`,`shadow-sm`],[`avatar`,``,1,`flex`,`w-full`,`min-w-72`,`flex-col`,`items-center`,`p-2`],[1,`text-2xl`,3,`user`,`matTooltip`],[1,``],[1,`truncate`,`text-xs`,`opacity-60`],[1,`border-base-200`,`w-full`,`rounded-sm`,`border-y`,`py-2`],[`customTooltip`,``,1,`relative`,3,`content`],[`customTooltip`,``,3,`content`],[`customTooltip`,``,3,`content`,`border-b!`],[`customTooltip`,``,1,`border-b!`,3,`content`],[`btn`,``,`matRipple`,``,1,`clear`,`h-14`,`w-full`,`text-left`],[1,`flex`,`flex-col`,`items-center`,`p-4`],[1,`mb-4`,`flex`,`items-center`,`justify-center`,`space-x-2`],[`btn`,``,`matRipple`,``,1,`inverse`,3,`click`],[`btn`,``,`matRipple`,``],[1,`w-full`,`text-xs`,`opacity-60`],[1,`m-0`,`border-none`,`bg-none`,`p-0`,`text-xs`,`underline`,3,`disabled`],[1,`w-full`,`px-4`,`pb-2`,`text-sm`,`font-medium`],[1,`w-full`],[1,`relative`,`flex`,`items-center`,`px-4`,`py-2`],[1,`bg-info`,`text-info-content`,`z-20`,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`rounded-full`],[1,`text-2xl`],[1,`ml-2`,`flex-1`],[`matRipple`,``,1,`hover:bg-base-200`,`flex`,`items-center`,`space-x-2`,`rounded-sm`,`px-2`,`py-1`,`font-medium`,3,`matMenuTriggerFor`],[`mat-menu-item`,``],[1,`px-2`,`text-xs`,`opacity-60`],[`mat-menu-item`,``,3,`click`],[1,`flex`,`items-center`,`space-x-2`],[1,`pr-8`],[1,`flex`,`w-full`,`items-center`,`space-x-2`],[1,`bg-base-200`,`flex`,`h-8`,`w-8`,`items-center`,`justify-center`,`rounded-full`],[1,`w-px`,`flex-1`,`truncate`],[1,`text-2xl`,`opacity-60`],[1,`flex-1`],[1,`flex`,`flex-1`,`items-center`,`justify-between`,`space-x-4`],[1,`text-xs`,`opacity-30`],[1,`bg-base-200`,`max-w-24`,`truncate`,`rounded-sm`,`px-2`,`py-1`,`text-sm`,3,`matTooltip`],[`btn`,``,`matRipple`,``,1,`clear`,`h-14`,`w-full`,`text-left`,3,`click`],[`btn`,``,`matRipple`,``,3,`click`],[1,`m-0`,`border-none`,`bg-none`,`p-0`,`text-xs`,`underline`,3,`click`,`disabled`]],template:function(t,i){t&1&&(Ir(0,`div`,2)(1,`div`,3),Eo(2,`a-user-avatar`,4),Ir(3,`div`,5),Ta$1(4),Rr(),Ir(5,`div`,6),Ta$1(6),Rr()(),Ar(7,Dc,22,11,`div`,7),Ar(8,Ac,10,2,`div`,8),Ar(9,Pc,10,2,`div`,8),Ar(10,Fc,11,4,`div`,9),Ar(11,Vc,11,4,`div`,9),Ar(12,Lc,11,6,`div`,10),Ar(13,Bc,11,6,`div`,10),va$1(14,Uc,1,0,`ng-template`,null,0,F4),Ar(16,zc,11,6,`div`,10),Ar(17,Hc,19,13,`div`,11),Ar(18,Wc,8,3,`button`,12),Ir(19,`div`,13)(20,`div`,14)(21,`button`,15),kt(`click`,function(){return i.logout()}),Ta$1(22),ID(23,`translate`),Rr(),Ar(24,jc,3,3,`button`,16),Rr(),Ir(25,`div`,17),yD(26),Ta$1(27),ID(28,`translate`),SD(),Ar(29,qc,2,2,`button`,18)(30,$c,2,1,`span`),Rr(),Ir(31,`div`,17),Ta$1(32),ID(33,`date`),ID(34,`date`),Rr()()()),t&2&&(Et(`border`,!i.sidebar()),zt(2),zu(`user`,i.user)(`matTooltip`,i.groups),zt(2),Jk(i.user?.name),zt(2),yo$1(` `,i.user?.email,` `),zt(),Dr(i.features().includes(`wfh`)&&i.active_block()?7:-1),zt(),Dr(i.regions()?.length?8:-1),zt(),Dr(!i.disable_building_select()&&!i.use_region()?9:-1),zt(),Dr(i.features().includes(`help`)?10:-1),zt(),Dr(i.features().includes(`wfh`)?11:-1),zt(),Dr(i.accessibility()?12:-1),zt(),Dr(i.desk_height()?13:-1),zt(3),Dr(i.features().includes(`parking-controls`)?16:-1),zt(),Dr(i.locales().length>1?17:-1),zt(),Dr(i.features().includes(`support-ticket`)?18:-1),zt(4),yo$1(` `,L4(23,22,`COMMON.CONTROLS_SIGN_OUT`),` `),zt(2),Dr(i.has_new_version?24:-1),zt(3),yo$1(` `,L4(28,24,`COMMON.CONTROLS_VERSION`),`: `),zt(2),Dr(i.show_changelog()?29:30),zt(3),e1(` `,AD(33,26,i.version.time,`longDate`),` (`,AD(34,29,i.version.time,`shortTime`),`) `))},dependencies:[cF,L9e,cm,lw,IQe,he,Yt$2,mt,jn,Zt,et,st,lt,Ga,c9,f],encapsulation:2})}}return n})();var Xc=[`*`];function Kc(n,o){n&1&&(Ir(0,`icon`,2),Ta$1(1,`person`),Rr())}function Yc(n,o){if(n&1){let e=vD();Ir(0,`div`,1)(1,`button`,3),kt(`click`,function(){g_(e);return __(Li().close())}),Rr(),Ir(2,`div`,4)(3,`div`,5),Eo(4,`user-controls`,6),Ir(5,`button`,7),kt(`click`,function(){g_(e);return __(Li().close())}),Ir(6,`icon`,2),Ta$1(7,`close`),Rr()()()()()}if(n&2){let e=Li();zt(),Et(`opacity-50`,e.is_open())(`opacity-0`,!e.is_open()),zt(2),Et(`translate-x-0`,e.is_open())(`translate-x-full`,!e.is_open()),zt(),zu(`sidebar`,!0)}}var Ka=(()=>{class n{constructor(){this._close_timeout=null,this.is_open=N(!1),this.is_rendered=N(!1)}open(){this._close_timeout&&(clearTimeout(this._close_timeout),this._close_timeout=null),this.is_rendered.set(!0),requestAnimationFrame(()=>this.is_open.set(!0))}close(){this.is_open.set(!1),this._close_timeout=setTimeout(()=>{this.is_rendered.set(!1),this._close_timeout=null},200)}onEscape(){this.is_open()&&this.close()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je({type:n,selectors:[[`user-controls-sidebar`]],hostBindings:function(t,i){t&1&&kt(`keydown.escape`,function(){return i.onEscape()},Iq)},ngContentSelectors:Xc,decls:4,vars:1,consts:[[`icon`,``,`matRipple`,``,`avatar`,``,`type`,`button`,`name`,`user-controls`,1,`bg-base-200`,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`rounded-full`,3,`click`],[1,`fixed`,`inset-0`,`z-9999`,`overflow-hidden`],[1,`text-2xl`],[`type`,`button`,`aria-label`,`Close user controls`,1,`absolute`,`inset-0`,`bg-black`,`transition-opacity`,`duration-200`,3,`click`],[1,`absolute`,`inset-y-0`,`right-0`,`flex`,`max-w-full`],[1,`bg-base-100`,`relative`,`h-full`,`w-80`,`max-w-[100vw]`,`overflow-auto`,`pt-[calc(env(safe-area-inset-top)+1rem)]`,`pb-[env(safe-area-inset-bottom)]`,`pr-[env(safe-area-inset-right)]`,`shadow-xl`,`transition-transform`,`duration-200`,`ease-out`],[3,`sidebar`],[`icon`,``,`default`,``,`matRipple`,``,`type`,`button`,1,`absolute`,`top-[calc(env(safe-area-inset-top)+0.5rem)]`,`right-[calc(env(safe-area-inset-right)+0.5rem)]`,3,`click`]],template:function(t,i){t&1&&(ki(),Ir(0,`button`,0),kt(`click`,function(){return i.open()}),jn$1(1,0,null,Kc,2,0),Rr(),Ar(3,Yc,8,9,`div`,1)),t&2&&(zt(3),Dr(i.is_rendered()?3:-1))},dependencies:[cm,lw,IQe,Xa],encapsulation:2})}}return n})();var Qc=[`editor`];function Zc(n,o){if(n&1){let e=vD();Ir(0,`button`,20),kt(`click`,function(){g_(e);return __(Li(2).insertImage())}),Ir(1,`icon`),Ta$1(2,`image`),Rr()(),Ir(3,`button`,20),kt(`click`,function(){g_(e);return __(Li(2).insertAttachment())}),Ir(4,`icon`),Ta$1(5,`attachment`),Rr()()}}function Jc(n,o){if(n&1){let e=vD();Ir(0,`div`,3)(1,`select`,5),kt(`change`,function(i){g_(e);return __(Li().setFontFace(i))}),Ir(2,`option`,6),Ta$1(3,`Font`),Rr(),Ir(4,`option`,7),Ta$1(5,`Arial`),Rr(),Ir(6,`option`,8),Ta$1(7,`Helvetica`),Rr(),Ir(8,`option`,9),Ta$1(9,`Georgia`),Rr(),Ir(10,`option`,10),Ta$1(11,`Times New Roman`),Rr()(),Ir(12,`select`,11),kt(`change`,function(i){g_(e);return __(Li().setFontSize(i))}),Ir(13,`option`,12),Ta$1(14,`Size`),Rr(),Ir(15,`option`,13),Ta$1(16,`12`),Rr(),Ir(17,`option`,14),Ta$1(18,`14`),Rr(),Ir(19,`option`,15),Ta$1(20,`16`),Rr(),Ir(21,`option`,16),Ta$1(22,`18`),Rr(),Ir(23,`option`,17),Ta$1(24,`24`),Rr(),Ir(25,`option`,18),Ta$1(26,`32`),Rr(),Ir(27,`option`,19),Ta$1(28,`48`),Rr()(),Ir(29,`button`,20),kt(`click`,function(){g_(e);return __(Li().toggleBold())}),Ir(30,`icon`),Ta$1(31,`format_bold`),Rr()(),Ir(32,`button`,20),kt(`click`,function(){g_(e);return __(Li().toggleItalic())}),Ir(33,`icon`),Ta$1(34,`format_italic`),Rr()(),Ir(35,`button`,20),kt(`click`,function(){g_(e);return __(Li().toggleUnderline())}),Ir(36,`icon`),Ta$1(37,`format_underlined`),Rr()(),Ir(38,`button`,20),kt(`click`,function(){g_(e);return __(Li().makeUnorderedList())}),Ir(39,`icon`),Ta$1(40,`format_list_bulleted`),Rr()(),Ir(41,`button`,20),kt(`click`,function(){g_(e);return __(Li().makeOrderedList())}),Ir(42,`icon`),Ta$1(43,`format_list_numbered`),Rr()(),Ir(44,`button`,20),kt(`click`,function(){g_(e);return __(Li().insertLink())}),Ir(45,`icon`),Ta$1(46,`link`),Rr()(),Ar(47,Zc,6,0),Rr()}if(n&2){let e=Li();zt(29),Et(`border-info`,e.toolbar_state().bold)(`text-info`,e.toolbar_state().bold),zt(3),Et(`border-info`,e.toolbar_state().italic)(`text-info`,e.toolbar_state().italic),zt(3),Et(`border-info`,e.toolbar_state().underline)(`text-info`,e.toolbar_state().underline),zt(3),Et(`border-info`,e.toolbar_state().unordered_list)(`text-info`,e.toolbar_state().unordered_list),zt(3),Et(`border-info`,e.toolbar_state().ordered_list)(`text-info`,e.toolbar_state().ordered_list),zt(3),Et(`border-info`,e.toolbar_state().link)(`text-info`,e.toolbar_state().link),zt(3),Dr(e.images_allowed()?47:-1)}}var Da=(()=>{class n extends Is$1{constructor(){super(...arguments),this._uploads=g(Q9e),this._dom_sanitizer=g(Zp),this._ng_zone=g(ee),this.placeholder=Ss$1(``),this.readonly=Ss$1(!1),this.images_allowed=Ss$1(!1),this._editor_el=jTe(`editor`),this._onChange=()=>{},this._onTouch=()=>{},this.toolbar_state=N({bold:!1,italic:!1,underline:!1,unordered_list:!1,ordered_list:!1,link:!1}),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e,this._syncValue=()=>{this._editor&&this.setValue(this._editor.getHTML())},this._handleTouched=()=>{this._editor&&this._onTouch()},this._refreshToolbarState=()=>{this._editor&&this._ng_zone.run(()=>{this.toolbar_state.set({bold:this._editor.hasFormat(`B`),italic:this._editor.hasFormat(`I`),underline:this._editor.hasFormat(`U`),unordered_list:this._editor.hasFormat(`UL`),ordered_list:this._editor.hasFormat(`OL`),link:this._editor.hasFormat(`A`)})})}}ngOnChanges(e){e.placeholder&&this.timeout(`init`,()=>this._initialiseEditor()),e.readonly&&this._editor&&this._setReadonlyState()}ngAfterViewInit(){this.timeout(`init`,()=>this._initialiseEditor())}setValue(e){this._onChange(e)}writeValue(e){this.timeout(`write`,()=>{this._editor?(this._editor.setHTML(e||``),this._setPlaceholder()):this.timeout(`write`,()=>this.writeValue(e))})}toggleBold(){this._toggleFormat(`B`,()=>this._editor.removeBold(),()=>this._editor.bold())}toggleItalic(){this._toggleFormat(`I`,()=>this._editor.removeItalic(),()=>this._editor.italic())}toggleUnderline(){this._toggleFormat(`U`,()=>this._editor.removeUnderline(),()=>this._editor.underline())}makeUnorderedList(){this._toggleFormat(`UL`,()=>this._editor.removeList(),()=>this._editor.makeUnorderedList())}makeOrderedList(){this._toggleFormat(`OL`,()=>this._editor.removeList(),()=>this._editor.makeOrderedList())}insertLink(){if(!this._editor)return;if(this._editor.hasFormat(`A`)){this._editor.removeLink(),this._syncValue(),this._refreshToolbarState();return}let e=prompt(`Enter URL`);e&&(this._editor.makeLink(e),this._syncValue(),this._refreshToolbarState())}setFontFace(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontFace(t==="default"?`inherit`:t),this._syncValue())}setFontSize(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontSize(t),this._syncValue())}insertImage(){this._embedFile(!0)}insertAttachment(){this._embedFile(!1)}async _initialiseEditor(){let e=this._editor_el()?.nativeElement;if(!e)return this.timeout(`init`,()=>this._initialiseEditor());let{default:t}=await import(`./squire-B0gBI6PO.js`);this._editor&&this._editor.destroy(),e.innerHTML=``,this._editor=new t(e,{blockTag:`div`,sanitizeToDOMFragment:i=>{let r=this._dom_sanitizer.sanitize(Ke.HTML,i||``)||``,d=document.createElement(`template`);return d.innerHTML=r,d.content.cloneNode(!0)}}),this._editor.addEventListener(`input`,this._syncValue),this._editor.addEventListener(`blur`,this._handleTouched),this._editor.addEventListener(`cursor`,this._refreshToolbarState),this._editor.addEventListener(`select`,this._refreshToolbarState),this._editor.addEventListener(`pathChange`,this._refreshToolbarState),this._setReadonlyState(),this._setPlaceholder(),this._refreshToolbarState()}_embedFile(e){if(!this._editor)return;let t=document.createElement(`input`);t.setAttribute(`type`,`file`),e&&t.setAttribute(`accept`,`image/*`),t.click(),t.onchange=()=>{let i=t.files?.[0];i&&this._uploads.uploadFile(i,!0).then(r=>{if(!r)return;let d=`${location.origin}/api/engine/v2/uploads/${encodeURIComponent(r)}/url`;this._setAuth(),setTimeout(()=>{this._insertUploadedFile(d,i,e),this._syncValue()},100)}).catch(r=>{r instanceof iT||aB(`Failed to upload ${i.name}: ${r?.message||`Unknown error`}`)})}}_setReadonlyState(){let e=this._editor_el()?.nativeElement;e&&e.setAttribute(`contenteditable`,`${!this.readonly()}`)}_setPlaceholder(){let e=this._editor_el()?.nativeElement;e&&e.setAttribute(`data-placeholder`,this.placeholder()||``)}_toggleFormat(e,t,i){this._editor&&(this._editor.hasFormat(e)?t():i(),this._syncValue(),this._refreshToolbarState())}_insertUploadedFile(e,t,i){let r=t.type.startsWith(`image/`);if(i||r){this._editor.insertHTML(`<img src="${e}" alt="${t.name}" />`);return}this._editor.insertHTML(`<a href="${e}" target="_blank">${t.name}</a>`)}_setAuth(){let e=gt();document.cookie=`${e===`x-api-key`?`api-key=`+encodeURIComponent(Ro()):`bearer_token=`+encodeURIComponent(e)};max-age=30;path=/api/engine/v2/uploads;samesite=strict;${location.protocol===`https:`?`secure;`:``}`}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Rt$1(n)))(i||n)}})()}static{this.ɵcmp=je({type:n,selectors:[[`rich-text-input`]],viewQuery:function(t,i){t&1&&Bk(i._editor_el,Qc,5),t&2&&V8()},inputs:{placeholder:[1,`placeholder`],readonly:[1,`readonly`],images_allowed:[1,`images_allowed`]},features:[on$1([{provide:jc$1,useExisting:Gt(()=>n),multi:!0}]),Oe,Pt],decls:5,vars:1,consts:[[`container`,``],[`editor`,``],[1,`w-full`],[1,`border-base-300`,`bg-base-100`,`flex`,`flex-wrap`,`items-center`,`gap-1`,`rounded-t`,`border`,`p-2`],[1,`squire-editor`],[1,`border-base-300`,`bg-base-100`,`rounded`,`border`,`p-2`,`text-sm`,3,`change`],[`value`,`default`],[`value`,`Arial`],[`value`,`Helvetica`],[`value`,`Georgia`],[`value`,`Times New Roman`],[1,`border-base-300`,`bg-base-100`,`min-w-24`,`rounded`,`border`,`p-2`,`text-sm`,3,`change`],[`value`,``],[`value`,`12px`],[`value`,`14px`],[`value`,`16px`],[`value`,`18px`],[`value`,`24px`],[`value`,`32px`],[`value`,`48px`],[`icon`,``,`type`,`button`,1,`border-base-300`,`rounded`,`border`,`px-2`,`py-1`,`text-sm`,3,`click`]],template:function(t,i){t&1&&(Ir(0,`div`,2,0),Ar(2,Jc,48,25,`div`,3),Eo(3,`div`,4,1),Rr()),t&2&&(zt(2),Dr(i.readonly()?-1:2))},dependencies:[IQe],styles:[`[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]     .squire-editor{border-radius:.25rem;border:1px solid var(--%NS%base-300);padding:.5rem;min-height:8rem;width:100%;outline:none}[_nghost-%COMP%]     .squire-editor:empty:before{content:attr(data-placeholder);color:var(--%NS%base-content);opacity:.5}[_nghost-%COMP%]     .squire-editor ul{list-style-type:disc;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor ol{list-style-type:decimal;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor li{margin:.125rem 0}
/*# sourceMappingURL=rich-text-input.component.css.map */`]})}}return n})();var ed=(n,o)=>o.id+``+n;function td(n,o){if(n&1&&(Ir(0,`a`,1)(1,`icon`,2),Ta$1(2),Rr(),Ir(3,`span`,3),Ta$1(4),Rr()()),n&2){let e=Li().$implicit;zu(`routerLink`,e.route),zt(2),Jk(e.icon),zt(2),Jk(e.name)}}function id(n,o){if(n&1){let e=vD();Ir(0,`button`,6),kt(`click`,function(){g_(e);let i=Li(2).$implicit;return __(Li().toggleBlock(i.id||i._id))}),Ir(1,`icon`,2),Ta$1(2),Rr(),Ir(3,`div`,7),Ta$1(4),Rr(),Ir(5,`icon`,8),Ta$1(6,`arrow_drop_down`),Rr()()}if(n&2){let e=Li(2).$implicit;zt(2),yo$1(` `,e.icon,` `),zt(2),yo$1(` `,e.name,` `)}}function nd(n,o){if(n&1&&(Ir(0,`a`,10),Eo(1,`icon`,8),Ir(2,`span`),Ta$1(3),Rr()()),n&2){let e=o.$implicit;zu(`routerLink`,e.route),zt(3),Jk(e.name)}}function od(n,o){if(n&1&&(Ir(0,`section`,9),A8(1,nd,4,2,`a`,10,I8),Rr()),n&2){let e=Li(2).$implicit;Et(`contract-collapsed`,Li().isBlockCollapsed(e.id||e._id)),zt(),D8(e.children)}}function rd(n,o){if(n&1&&(Ar(0,id,7,2,`button`,4),Ar(1,od,3,2,`section`,5)),n&2){let e=Li().$implicit;Dr(e.children?.length?0:-1),zt(),Dr(e.children?.length?1:-1)}}function ad(n,o){if(n&1&&Ar(0,td,5,3,`a`,1)(1,rd,2,2),n&2){let e=o.$implicit;Dr(e.children?1:0)}}var Lv=(()=>{class n extends Is$1{constructor(){super(),this._settings=g(Ls$1),this._org=g(kb),this._element_ref=g(ue),this.show_block=N({}),this.links=[],this.filtered_links=N([]),At(()=>{this._org.active_building()&&this.timeout(`update_links`,()=>this.updateFilteredLinks(),500)})}get feature_list(){return this._settings.get(`app.features`)||[]}get feature_groups(){return this._settings.get(`app.feature_groups`)||{}}get is_admin(){let e=ji().groups||[],t=this._settings.get(`app.admin_group`)||`admin`;return e.includes(t)||e.includes(`placeos_admin`)||e.includes(`placeos_support`)}async ngOnInit(){await this._org.waitUntilInitialised(),this.links=[{name:Kn(`APP.CONCIERGE.MENU_BOOKINGS`),icon:`add_circle`,children:[{id:`spaces`,name:Kn(`APP.CONCIERGE.MENU_ROOM_BOOKINGS`),route:[`/book/rooms`]},{id:`desks`,name:Kn(`APP.CONCIERGE.MENU_DESK_BOOKINGS`),route:[`/book/desks/events`]},{id:`parking`,name:Kn(`APP.CONCIERGE.MENU_PARKING_BOOKINGS`),route:[`/book/parking/events`]},{id:`parking-bookings`,name:Kn(`APP.CONCIERGE.MENU_PARKING_BOOKINGS`),route:[`/book/parking/events`]},{id:`lockers`,name:Kn(`APP.CONCIERGE.MENU_LOCKER_BOOKINGS`),route:[`/book/lockers/events`]},{id:`assets`,name:Kn(`APP.CONCIERGE.MENU_ASSET_BOOKINGS`),route:[`/book/assets/list/requests`]},{id:`catering`,name:Kn(`APP.CONCIERGE.MENU_CATERING_BOOKINGS`),route:[`/book/catering/orders`]},{id:`visitors`,name:Kn(`APP.CONCIERGE.MENU_VISITOR_BOOKINGS`),route:[`/book/visitors`]},{id:`visitor-rules`,name:Kn(`APP.CONCIERGE.MENU_VISITOR_RULES`),route:[`/book/visitors/rules`]}]},{id:`facilities`,name:Kn(`APP.CONCIERGE.MENU_MANAGEMENT`),icon:`place`,children:[{id:`zones`,name:Kn(`APP.CONCIERGE.MENU_MANAGE_ZONES`),route:[`/zone-management`]},{id:`spaces`,name:Kn(`APP.CONCIERGE.MENU_MANAGE_ROOMS`),route:[`/room-management`]},{id:`desks`,name:Kn(`APP.CONCIERGE.MENU_MANAGE_DESKS`),route:[`/book/desks/manage`]},{id:`parking`,name:Kn(`APP.CONCIERGE.MENU_MANAGE_PARKING`),route:[`/book/parking/manage`]},{id:`parking-manage`,name:Kn(`APP.CONCIERGE.MENU_MANAGE_PARKING`),route:[`/book/parking/manage`]},{id:`lockers`,name:Kn(`APP.CONCIERGE.MENU_MANAGE_LOCKERS`),route:[`/book/lockers/manage`]},{id:`catering`,name:Kn(`APP.CONCIERGE.MENU_MANAGE_CATERING`),route:[`/book/catering/menu`]},{id:`points`,name:Kn(`APP.CONCIERGE.MENU_MANAGE_POINTS`),route:[`/points-management`]},{id:`emergency-contacts`,name:Kn(`APP.CONCIERGE.MENU_MANAGE_CONTACTS`),icon:`assignment_ind`,route:[`/users/staff/emergency-contacts`]},{id:`signage`,name:Kn(`APP.CONCIERGE.MENU_MANAGE_SIGNAGE`),route:[`/signage`]},{id:`points-of-interest`,name:Kn(`APP.CONCIERGE.MENU_MANAGE_MAP_FEATURES`),route:[`/points-of-interest`]},{id:`url-management`,name:Kn(`APP.CONCIERGE.MENU_MANAGE_URLS`),route:[`/url-management`]},{id:`email-templates`,name:Kn(`APP.CONCIERGE.MENU_MANAGE_EMAILS`),route:[`/email-templates`]},{id:`deals-n-offers`,name:Kn(`APP.CONCIERGE.MENU_MANAGE_DEALS`),route:[`/deals-n-offers`]}]},{id:`assets`,name:Kn(`APP.CONCIERGE.MENU_ASSETS`),route:[`/book/assets/list/items`],icon:`vibration`},{id:`internal-users`,name:Kn(`APP.CONCIERGE.MENU_USER_LIST`),icon:`assignment_ind`,route:[`/users/staff`]},{id:`events`,name:Kn(`APP.CONCIERGE.MENU_EVENTS`),route:[`/entertainment/events`],icon:`confirmation_number`},{id:`surveys`,name:Kn(`APP.CONCIERGE.MENU_SURVEYS`),route:[`/surveys`],icon:`add_reaction`},{_id:`reports`,name:Kn(`APP.CONCIERGE.MENU_REPORTS`),icon:`analytics`,children:[{id:`attendance-report`,name:Kn(`APP.CONCIERGE.MENU_REPORT_SITE_ATTENDANCE`),route:[`/reports/attendance`]},{id:`booking-report`,name:Kn(`APP.CONCIERGE.MENU_REPORT_ROOMS`),route:[`/reports/bookings`]},{id:`desk-report`,name:Kn(`APP.CONCIERGE.MENU_REPORT_DESKS`),route:[`/reports/desks`]},{id:`parking-report`,name:Kn(`APP.CONCIERGE.MENU_REPORT_PARKING`),route:[`/reports/parking`]},{id:`lockers-report`,name:Kn(`APP.CONCIERGE.MENU_REPORT_LOCKERS`),route:[`/reports/lockers`]},{id:`catering-report`,name:Kn(`APP.CONCIERGE.MENU_REPORT_CATERING`),route:[`/reports/catering`]},{id:`contact-tracing-report`,name:Kn(`APP.CONCIERGE.MENU_REPORT_CONTACT_TRACING`),route:[`/reports/contact-tracing`]},{id:`assets-report`,name:Kn(`APP.CONCIERGE.MENU_REPORT_ASSETS`),route:[`/reports/assets`]},{id:`visitors-report`,name:Kn(`APP.CONCIERGE.MENU_REPORT_VISITORS`),route:[`/reports/visitors`]}]}],this.updateFilteredLinks(),this.timeout(`update_inview`,()=>this._moveActiveLinkIntoView(),50),this.timeout(`update_links`,()=>this.updateFilteredLinks(),500)}_isFeatureAvailable(e){if(e.startsWith(`*`))return!0;let t=this.feature_list.includes(e),i=this.feature_groups[e]||[],r=ji().groups;return!!(t&&(this.is_admin||!i.length||r.find(d=>i.includes(d))))}updateFilteredLinks(){let e=this._settings.get(`app.custom_reports`)||[];if(e.length&&this.links.find(t=>t._id===`reports`)){let t=this.links.find(i=>i._id===`reports`);t.children=Or(t.children.concat(e.map(i=>m(l({},i),{id:`*${i.id}`,route:[`/reports`,i.id]}))),`id`)}if(this.filtered_links.set(this.links.map(t=>m(l({},t),{children:t.children?t.children.filter(i=>this._isFeatureAvailable(i.id)):null})).filter(t=>(!t.id||t.id===`home`||this._isFeatureAvailable(t.id))&&t.route||t.children?.length)),this.filtered_links().find(t=>t.id===`home`)){let t=this.filtered_links().find(i=>i.id===`home`);t.route=this._settings.get(`app.default_route`)||[`/`]}this.is_admin||this.filtered_links.update(t=>t.filter(i=>i.id!==`facilities`))}toggleBlock(e){this.show_block.update(t=>m(l({},t),{[e]:!t[e]}))}isBlockCollapsed(e){return!!this.show_block()[e]}_moveActiveLinkIntoView(){let e=this._element_ref.nativeElement.querySelector(`a.active`);e&&e.scrollIntoView({block:`center`,behavior:`instant`})}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je({type:n,selectors:[[`app-sidebar`]],features:[Oe],decls:3,vars:0,consts:[[1,`border-base-200`,`h-full`,`w-64`,`overflow-auto`,`border-r`,`py-2`,`pr-3`],[`matRipple`,``,`routerLinkActive`,`active`,1,`hover:bg-base-200`,`my-1`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-r-full`,`p-1`,3,`routerLink`],[1,`text-2xl`,`opacity-60`],[1,`font-medium`],[`matRipple`,``,1,`hover:bg-base-200`,`my-1`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-r-full`,`p-1`],[1,`contract-expand`,`w-full`,3,`contract-collapsed`],[`matRipple`,``,1,`hover:bg-base-200`,`my-1`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-r-full`,`p-1`,3,`click`],[1,`flex-1`,`text-left`,`font-medium`],[1,`text-2xl`],[1,`contract-expand`,`w-full`],[`routerLinkActive`,`active`,1,`hover:bg-base-200`,`my-1`,`flex`,`w-full`,`items-center`,`space-x-2`,`rounded-r-full`,`p-1`,3,`routerLink`]],template:function(t,i){t&1&&(Ir(0,`div`,0),A8(1,ad,2,1,null,null,ed),Rr()),t&2&&(zt(),D8(i.filtered_links()))},dependencies:[Gee,YS,kee,cm,lw,IQe],styles:[`[_nghost-%COMP%]{height:100%}a.active[_ngcontent-%COMP%]{background-color:var(--%NS%secondary);color:var(--%NS%secondary-content)}a.active[_ngcontent-%COMP%]:hover{color:var(--%NS%base-content);opacity:.75}
/*# sourceMappingURL=app-sidebar.component.css.map */`]})}}return n})();var sd=()=>[`/`];var $v=(()=>{class n{constructor(){this._settings=g(Ls$1),this._theme=this._settings.theme_signal,this._logo_dark=this._settings.signal(`app.logo_dark`,{},!0),this._logo_light=this._settings.signal(`app.logo_light`,{},!0),this.logo_src=Te(()=>{let e=this.logo();return typeof e==`string`?e:e?.src||``}),this.logo=Te(()=>(this._theme()===`dark`?this._logo_dark():this._logo_light())||{}),this.user=ZX()}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵcmp=je({type:n,selectors:[[`app-topbar`]],decls:10,vars:4,consts:[[1,`border-base-200`,`flex`,`items-center`,`border-b`,`p-2`],[1,`w-64`],[3,`routerLink`],[`auth`,``,1,`h-12`,3,`source`],[1,`flex`,`flex-1`,`items-center`,`justify-end`,`space-x-2`],[`btn`,``,`icon`,``,`matRipple`,``],[1,`text-2xl`],[1,`mr-2`],[3,`user`]],template:function(t,i){t&1&&(Ir(0,`div`,0)(1,`div`,1)(2,`a`,2),Eo(3,`img`,3),Rr()(),Ir(4,`div`,4)(5,`button`,5)(6,`icon`,6),Ta$1(7,`notifications`),Rr()(),Ir(8,`user-controls-sidebar`,7),Eo(9,`a-user-avatar`,8),Rr()()()),t&2&&(zt(2),zu(`routerLink`,b4(3,sd)),zt(),zu(`source`,i.logo_src()),zt(6),zu(`user`,i.user()))},dependencies:[Gee,YS,jn,cm,lw,wt,IQe,Ka],styles:[`[_nghost-%COMP%]{width:100%}
/*# sourceMappingURL=app-topbar.component.css.map */`]})}}return n})();export{wt as A,jn as C,th as D,st as E,ti as O,hi as S,qn as T,_i as _,Gn as a,gi as b,Ks as c,Na as d,St as f,Zt as g,Yt as h,Fa as i,zn as j,va as k,Kt as l,Xn as m,$v as n,Ia as o,Wn as p,Da as r,Jt as s,$n as t,Lv as u,ei as v,lt as w,ha as x,et as y};
//# debugId=808dd883-fc15-5551-8921-b242f0082e58
//# sourceMappingURL=chunk-WBbK7QQp.js.map