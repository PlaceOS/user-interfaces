import {m as m$1,Y as Ys$1,D as De,h7 as QJ,T as Te$1,c1 as uZ,c2 as Zy,M as Ml$1,h as Qw,g as YQe,a as ke,j as jt,V as Ve$1,p as gi$1,w as ge,B as Nr$1,aU as Z8,F as Fs$1,W as WS,a$ as j,O,e as Tt,bk as so$1,_ as _r,br as Ri,al as m$2,am as l,aK as NZe,c7 as oZ,P as Pe,v as t8,H as n8,h8 as DNe,cI as mh,h9 as YU,ha as qU,hb as KU,hc as WU,de as W$1,dp as se,dq as ie,fi as Zs$1,fj as OQe,dr as vt,fk as cm$1,Q as QN,fx as ju,dt as Dt$1,fv as vr$1,dz as kt,b0 as ot,fw as Tg,eK as Ti,hd as Lw,du as v,dv as Kt,fy as R,fR as yQe,fS as vQe,e2 as ol$1,fE as hs,fF as $n$1,eS as Nt$1,fB as ms,cl as te,eR as Me,eU as ce,he as bg,bq as Th,cF as Ih,dy as GE,hf as qw,hg as xf,gB as Ye$1,fL as ct,fH as Jn$1,hh as Yw,fn as Uw,fT as Er$1,hi as jee,b6 as At$1,dB as Ee,dD as qd$1,aZ as gn,r as We,u as Fe,bL as PI,an as hi$1,L as LE,bu as $e,U as Ue,I as ft,hj as Sg,fp as nce,E as Oe,dE as xn,dF as Ie,dG as Ae,fq as Qi,s as s3,fr as rce,aY as Cs,b4 as Zr,b5 as N,ba as $,gP as Ss$1,gV as am$1,cB as Gt$1,fo as EL,gG as z,ds as jo,dw as yn,dx as Nl$1,a_ as Le,fl as Ne,gK as tm$1,gL as em$1,ep as l2,ft as $t,fV as hn,hk as BW,X as Up,fM as zo$1,ag as Ft,aa as K1,g3 as S6,g4 as pC,aP as pet,ad as kE,ae as PE,hl as Yee,bM as Vx,g5 as SL,ac as CD,d2 as Ds$1,aC as _Ie,aL as Y9e,aM as z9e,N as NJe,R as RD,z as l4,cr as yH,dS as c7e,S as QS,af as jV,A as A3,cY as aet,cZ as oet,c_ as set,c$ as iet,d0 as hle,f as DJe,Z as Zce,y as ko$1,bv as vu$1,fZ as $ae,bw as An$1,t as tn,hm as TQ,hn as M0e,q,ho as LQ,hp as g1,h4 as A,hq as N0e,hr as wQ,hs as OE,ht as Zc$1,fu as B,hu as Or$1,g6 as Wt$1,g7 as ml$1,l as F0e,x as x0e,G as GQ,bI as EIe,a2 as Dn$1,n as no,a3 as GMe,hv as jMe,cW as zMe,dX as UJ,h2 as txe,a5 as bl$1,dQ as Ga,dV as Go$1,hw as $o,bi as Si,bE as Ha,bj as _t$1,bD as Qr,bl as Oce,a4 as k6,av as wD,dT as fn,dA as xQe,dC as Pa,dc as Mn,cM as Xe$1,cJ as uR,hx as rl$1,ai as Ps$1,hy as iv,fU as fm$1,ay as zt,aA as Yd$1,az as AD,fN as Ks$1,fP as qs$1,fQ as pm$1,fC as K,hz as Np,bf as P$1,J as e8,aB as rae,aR as ZS,at as sB,bm as eJe,bn as JXe,K as KK,C as QK,bT as J8,hA as IQ,ah as Pn$1,ab as d4,aw as FL,hB as Oo$1,b1 as Wd$1,gF as k,hC as ib,c as tee,eW as Ci$1,f0 as Qh,hD as Vj,hE as G0e,cn as TD,co as ID,hF as DU,hG as Xy,hH as GCe,hI as BU,hJ as HU,hK as Fc$1,cN as kr$1,hL as uv,e0 as ZR,hM as mV,a8 as GV,hN as dH,gO as Zu,fm as je,e9 as uke,hO as QV,a9 as Zv,au as HL,ax as VL,hP as lt$1,cw as c3,hQ as Ot,hR as Xr,d5 as on,d6 as ME,aS as O_,aT as N_,d7 as mn,ao as ND,cx as Iq,b8 as G8,hS as Aq,dk as J5,b9 as bq,bW as _E}from'./main-2PQCZQV6.js';function Ss(n,i){let e=Hl(i)?new i(0):Xe$1(i,0);return e.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),e.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e}function Hl(n){return typeof n=="function"&&n.prototype?.constructor===n}var Gl=10,Rn=class{subPriority=0;validate(i,e){return  true}},On=class extends Rn{constructor(i,e,t,r,o){super(),this.value=i,this.validateValue=e,this.setValue=t,this.priority=r,o&&(this.subPriority=o);}validate(i,e){return this.validateValue(i,this.value,e)}set(i,e,t){return this.setValue(i,e,this.value,t)}},Dn=class extends Rn{priority=Gl;subPriority=-1;constructor(i,e){super(),this.context=i||(t=>Xe$1(e,t));}set(i,e){return e.timestampIsSet?i:Xe$1(i,Ss(i,this.context))}};var E=class{run(i,e,t,r){let o=this.parse(i,e,t,r);return o?{setter:new On(o.value,this.validate,this.set,this.priority,this.subPriority),rest:o.rest}:null}validate(i,e,t){return  true}};var Nn=class extends E{priority=140;parse(i,e,t){switch(e){case "G":case "GG":case "GGG":return t.era(i,{width:"abbreviated"})||t.era(i,{width:"narrow"});case "GGGGG":return t.era(i,{width:"narrow"});default:return t.era(i,{width:"wide"})||t.era(i,{width:"abbreviated"})||t.era(i,{width:"narrow"})}}set(i,e,t){return e.era=t,i.setFullYear(t,0,1),i.setHours(0,0,0,0),i}incompatibleTokens=["R","u","t","T"]};var W={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},Xe={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function ee(n,i){return n&&{value:i(n.value),rest:n.rest}}function G(n,i){let e=i.match(n);return e?{value:parseInt(e[0],10),rest:i.slice(e[0].length)}:null}function Ye(n,i){let e=i.match(n);if(!e)return null;if(e[0]==="Z")return {value:0,rest:i.slice(1)};let t=e[1]==="+"?1:-1,r=e[2]?parseInt(e[2],10):0,o=e[3]?parseInt(e[3],10):0,c=e[5]?parseInt(e[5],10):0;return {value:t*(r*DU+o*Xy+c*GCe),rest:i.slice(e[0].length)}}function An(n){return G(W.anyDigitsSigned,n)}function F(n,i){switch(n){case 1:return G(W.singleDigit,i);case 2:return G(W.twoDigits,i);case 3:return G(W.threeDigits,i);case 4:return G(W.fourDigits,i);default:return G(new RegExp("^\\d{1,"+n+"}"),i)}}function ai(n,i){switch(n){case 1:return G(W.singleDigitSigned,i);case 2:return G(W.twoDigitsSigned,i);case 3:return G(W.threeDigitsSigned,i);case 4:return G(W.fourDigitsSigned,i);default:return G(new RegExp("^-?\\d{1,"+n+"}"),i)}}function si(n){switch(n){case "morning":return 4;case "evening":return 17;case "pm":case "noon":case "afternoon":return 12;default:return 0}}function Pn(n,i){let e=i>0,t=e?i:1-i,r;if(t<=50)r=n||100;else {let o=t+50,c=Math.trunc(o/100)*100,h=n>=o%100;r=n+c-(h?100:0);}return e?r:1-r}function Fn(n){return n%400===0||n%4===0&&n%100!==0}var Vn=class extends E{priority=130;incompatibleTokens=["Y","R","u","w","I","i","e","c","t","T"];parse(i,e,t){let r=o=>({year:o,isTwoDigitYear:e==="yy"});switch(e){case "y":return ee(F(4,i),r);case "yo":return ee(t.ordinalNumber(i,{unit:"year"}),r);default:return ee(F(e.length,i),r)}}validate(i,e){return e.isTwoDigitYear||e.year>0}set(i,e,t){let r=i.getFullYear();if(t.isTwoDigitYear){let c=Pn(t.year,r);return i.setFullYear(c,0,1),i.setHours(0,0,0,0),i}let o=!("era"in e)||e.era===1?t.year:1-t.year;return i.setFullYear(o,0,1),i.setHours(0,0,0,0),i}};var Ln=class extends E{priority=130;parse(i,e,t){let r=o=>({year:o,isTwoDigitYear:e==="YY"});switch(e){case "Y":return ee(F(4,i),r);case "Yo":return ee(t.ordinalNumber(i,{unit:"year"}),r);default:return ee(F(e.length,i),r)}}validate(i,e){return e.isTwoDigitYear||e.year>0}set(i,e,t,r){let o=iv(i,r);if(t.isTwoDigitYear){let h=Pn(t.year,o);return i.setFullYear(h,0,r.firstWeekContainsDate),i.setHours(0,0,0,0),Ps$1(i,r)}let c=!("era"in e)||e.era===1?t.year:1-t.year;return i.setFullYear(c,0,r.firstWeekContainsDate),i.setHours(0,0,0,0),Ps$1(i,r)}incompatibleTokens=["y","R","u","Q","q","M","L","I","d","D","i","t","T"]};var Bn=class extends E{priority=130;parse(i,e){return e==="R"?ai(4,i):ai(e.length,i)}set(i,e,t){let r=Xe$1(i,0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),rl$1(r)}incompatibleTokens=["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]};var Un=class extends E{priority=130;parse(i,e){return e==="u"?ai(4,i):ai(e.length,i)}set(i,e,t){return i.setFullYear(t,0,1),i.setHours(0,0,0,0),i}incompatibleTokens=["G","y","Y","R","w","I","i","e","c","t","T"]};var zn=class extends E{priority=120;parse(i,e,t){switch(e){case "Q":case "QQ":return F(e.length,i);case "Qo":return t.ordinalNumber(i,{unit:"quarter"});case "QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"})||t.quarter(i,{width:"narrow",context:"formatting"});case "QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});default:return t.quarter(i,{width:"wide",context:"formatting"})||t.quarter(i,{width:"abbreviated",context:"formatting"})||t.quarter(i,{width:"narrow",context:"formatting"})}}validate(i,e){return e>=1&&e<=4}set(i,e,t){return i.setMonth((t-1)*3,1),i.setHours(0,0,0,0),i}incompatibleTokens=["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]};var Hn=class extends E{priority=120;parse(i,e,t){switch(e){case "q":case "qq":return F(e.length,i);case "qo":return t.ordinalNumber(i,{unit:"quarter"});case "qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"})||t.quarter(i,{width:"narrow",context:"standalone"});case "qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});default:return t.quarter(i,{width:"wide",context:"standalone"})||t.quarter(i,{width:"abbreviated",context:"standalone"})||t.quarter(i,{width:"narrow",context:"standalone"})}}validate(i,e){return e>=1&&e<=4}set(i,e,t){return i.setMonth((t-1)*3,1),i.setHours(0,0,0,0),i}incompatibleTokens=["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]};var Gn=class extends E{incompatibleTokens=["Y","R","q","Q","L","w","I","D","i","e","c","t","T"];priority=110;parse(i,e,t){let r=o=>o-1;switch(e){case "M":return ee(G(W.month,i),r);case "MM":return ee(F(2,i),r);case "Mo":return ee(t.ordinalNumber(i,{unit:"month"}),r);case "MMM":return t.month(i,{width:"abbreviated",context:"formatting"})||t.month(i,{width:"narrow",context:"formatting"});case "MMMMM":return t.month(i,{width:"narrow",context:"formatting"});default:return t.month(i,{width:"wide",context:"formatting"})||t.month(i,{width:"abbreviated",context:"formatting"})||t.month(i,{width:"narrow",context:"formatting"})}}validate(i,e){return e>=0&&e<=11}set(i,e,t){return i.setMonth(t,1),i.setHours(0,0,0,0),i}};var Wn=class extends E{priority=110;parse(i,e,t){let r=o=>o-1;switch(e){case "L":return ee(G(W.month,i),r);case "LL":return ee(F(2,i),r);case "Lo":return ee(t.ordinalNumber(i,{unit:"month"}),r);case "LLL":return t.month(i,{width:"abbreviated",context:"standalone"})||t.month(i,{width:"narrow",context:"standalone"});case "LLLLL":return t.month(i,{width:"narrow",context:"standalone"});default:return t.month(i,{width:"wide",context:"standalone"})||t.month(i,{width:"abbreviated",context:"standalone"})||t.month(i,{width:"narrow",context:"standalone"})}}validate(i,e){return e>=0&&e<=11}set(i,e,t){return i.setMonth(t,1),i.setHours(0,0,0,0),i}incompatibleTokens=["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]};function Is(n,i,e){let t=W$1(n,e?.in),r=HU(t,e)-i;return t.setDate(t.getDate()-r*7),W$1(t,e?.in)}var jn=class extends E{priority=100;parse(i,e,t){switch(e){case "w":return G(W.week,i);case "wo":return t.ordinalNumber(i,{unit:"week"});default:return F(e.length,i)}}validate(i,e){return e>=1&&e<=53}set(i,e,t,r){return Ps$1(Is(i,t,r),r)}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","i","t","T"]};function Rs(n,i,e){let t=W$1(n,e?.in),r=BU(t,e)-i;return t.setDate(t.getDate()-r*7),t}var Kn=class extends E{priority=100;parse(i,e,t){switch(e){case "I":return G(W.week,i);case "Io":return t.ordinalNumber(i,{unit:"week"});default:return F(e.length,i)}}validate(i,e){return e>=1&&e<=53}set(i,e,t){return rl$1(Rs(i,t))}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]};var Wl=[31,28,31,30,31,30,31,31,30,31,30,31],jl=[31,29,31,30,31,30,31,31,30,31,30,31],qn=class extends E{priority=90;subPriority=1;parse(i,e,t){switch(e){case "d":return G(W.date,i);case "do":return t.ordinalNumber(i,{unit:"date"});default:return F(e.length,i)}}validate(i,e){let t=i.getFullYear(),r=Fn(t),o=i.getMonth();return r?e>=1&&e<=jl[o]:e>=1&&e<=Wl[o]}set(i,e,t){return i.setDate(t),i.setHours(0,0,0,0),i}incompatibleTokens=["Y","R","q","Q","w","I","D","i","e","c","t","T"]};var $n=class extends E{priority=90;subpriority=1;parse(i,e,t){switch(e){case "D":case "DD":return G(W.dayOfYear,i);case "Do":return t.ordinalNumber(i,{unit:"date"});default:return F(e.length,i)}}validate(i,e){let t=i.getFullYear();return Fn(t)?e>=1&&e<=366:e>=1&&e<=365}set(i,e,t){return i.setMonth(0,t),i.setHours(0,0,0,0),i}incompatibleTokens=["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]};function li(n,i,e){let t=kr$1(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,o=W$1(n,e?.in),c=o.getDay(),x=(i%7+7)%7,R=7-r,V=i<0||i>6?i-(c+R)%7:(x+R)%7-(c+R)%7;return Pn$1(o,V,e)}var Xn=class extends E{priority=90;parse(i,e,t){switch(e){case "E":case "EE":case "EEE":return t.day(i,{width:"abbreviated",context:"formatting"})||t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"});case "EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case "EEEEEE":return t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"});default:return t.day(i,{width:"wide",context:"formatting"})||t.day(i,{width:"abbreviated",context:"formatting"})||t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"})}}validate(i,e){return e>=0&&e<=6}set(i,e,t,r){return i=li(i,t,r),i.setHours(0,0,0,0),i}incompatibleTokens=["D","i","e","c","t","T"]};var Yn=class extends E{priority=90;parse(i,e,t,r){let o=c=>{let h=Math.floor((c-1)/7)*7;return (c+r.weekStartsOn+6)%7+h};switch(e){case "e":case "ee":return ee(F(e.length,i),o);case "eo":return ee(t.ordinalNumber(i,{unit:"day"}),o);case "eee":return t.day(i,{width:"abbreviated",context:"formatting"})||t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"});case "eeeee":return t.day(i,{width:"narrow",context:"formatting"});case "eeeeee":return t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"});default:return t.day(i,{width:"wide",context:"formatting"})||t.day(i,{width:"abbreviated",context:"formatting"})||t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"})}}validate(i,e){return e>=0&&e<=6}set(i,e,t,r){return i=li(i,t,r),i.setHours(0,0,0,0),i}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]};var Qn=class extends E{priority=90;parse(i,e,t,r){let o=c=>{let h=Math.floor((c-1)/7)*7;return (c+r.weekStartsOn+6)%7+h};switch(e){case "c":case "cc":return ee(F(e.length,i),o);case "co":return ee(t.ordinalNumber(i,{unit:"day"}),o);case "ccc":return t.day(i,{width:"abbreviated",context:"standalone"})||t.day(i,{width:"short",context:"standalone"})||t.day(i,{width:"narrow",context:"standalone"});case "ccccc":return t.day(i,{width:"narrow",context:"standalone"});case "cccccc":return t.day(i,{width:"short",context:"standalone"})||t.day(i,{width:"narrow",context:"standalone"});default:return t.day(i,{width:"wide",context:"standalone"})||t.day(i,{width:"abbreviated",context:"standalone"})||t.day(i,{width:"short",context:"standalone"})||t.day(i,{width:"narrow",context:"standalone"})}}validate(i,e){return e>=0&&e<=6}set(i,e,t,r){return i=li(i,t,r),i.setHours(0,0,0,0),i}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]};function Os(n,i){let e=W$1(n,i?.in).getDay();return e===0?7:e}function Ds(n,i,e){let t=W$1(n,e?.in),r=Os(t,e),o=i-r;return Pn$1(t,o,e)}var Zn=class extends E{priority=90;parse(i,e,t){let r=o=>o===0?7:o;switch(e){case "i":case "ii":return F(e.length,i);case "io":return t.ordinalNumber(i,{unit:"day"});case "iii":return ee(t.day(i,{width:"abbreviated",context:"formatting"})||t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"}),r);case "iiiii":return ee(t.day(i,{width:"narrow",context:"formatting"}),r);case "iiiiii":return ee(t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"}),r);default:return ee(t.day(i,{width:"wide",context:"formatting"})||t.day(i,{width:"abbreviated",context:"formatting"})||t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"}),r)}}validate(i,e){return e>=1&&e<=7}set(i,e,t){return i=Ds(i,t),i.setHours(0,0,0,0),i}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]};var Jn=class extends E{priority=80;parse(i,e,t){switch(e){case "a":case "aa":case "aaa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"})||t.dayPeriod(i,{width:"narrow",context:"formatting"});case "aaaaa":return t.dayPeriod(i,{width:"narrow",context:"formatting"});default:return t.dayPeriod(i,{width:"wide",context:"formatting"})||t.dayPeriod(i,{width:"abbreviated",context:"formatting"})||t.dayPeriod(i,{width:"narrow",context:"formatting"})}}set(i,e,t){return i.setHours(si(t),0,0,0),i}incompatibleTokens=["b","B","H","k","t","T"]};var er=class extends E{priority=80;parse(i,e,t){switch(e){case "b":case "bb":case "bbb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"})||t.dayPeriod(i,{width:"narrow",context:"formatting"});case "bbbbb":return t.dayPeriod(i,{width:"narrow",context:"formatting"});default:return t.dayPeriod(i,{width:"wide",context:"formatting"})||t.dayPeriod(i,{width:"abbreviated",context:"formatting"})||t.dayPeriod(i,{width:"narrow",context:"formatting"})}}set(i,e,t){return i.setHours(si(t),0,0,0),i}incompatibleTokens=["a","B","H","k","t","T"]};var tr=class extends E{priority=80;parse(i,e,t){switch(e){case "B":case "BB":case "BBB":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"})||t.dayPeriod(i,{width:"narrow",context:"formatting"});case "BBBBB":return t.dayPeriod(i,{width:"narrow",context:"formatting"});default:return t.dayPeriod(i,{width:"wide",context:"formatting"})||t.dayPeriod(i,{width:"abbreviated",context:"formatting"})||t.dayPeriod(i,{width:"narrow",context:"formatting"})}}set(i,e,t){return i.setHours(si(t),0,0,0),i}incompatibleTokens=["a","b","t","T"]};var ir=class extends E{priority=70;parse(i,e,t){switch(e){case "h":return G(W.hour12h,i);case "ho":return t.ordinalNumber(i,{unit:"hour"});default:return F(e.length,i)}}validate(i,e){return e>=1&&e<=12}set(i,e,t){let r=i.getHours()>=12;return r&&t<12?i.setHours(t+12,0,0,0):!r&&t===12?i.setHours(0,0,0,0):i.setHours(t,0,0,0),i}incompatibleTokens=["H","K","k","t","T"]};var nr=class extends E{priority=70;parse(i,e,t){switch(e){case "H":return G(W.hour23h,i);case "Ho":return t.ordinalNumber(i,{unit:"hour"});default:return F(e.length,i)}}validate(i,e){return e>=0&&e<=23}set(i,e,t){return i.setHours(t,0,0,0),i}incompatibleTokens=["a","b","h","K","k","t","T"]};var rr=class extends E{priority=70;parse(i,e,t){switch(e){case "K":return G(W.hour11h,i);case "Ko":return t.ordinalNumber(i,{unit:"hour"});default:return F(e.length,i)}}validate(i,e){return e>=0&&e<=11}set(i,e,t){return i.getHours()>=12&&t<12?i.setHours(t+12,0,0,0):i.setHours(t,0,0,0),i}incompatibleTokens=["h","H","k","t","T"]};var or=class extends E{priority=70;parse(i,e,t){switch(e){case "k":return G(W.hour24h,i);case "ko":return t.ordinalNumber(i,{unit:"hour"});default:return F(e.length,i)}}validate(i,e){return e>=1&&e<=24}set(i,e,t){let r=t<=24?t%24:t;return i.setHours(r,0,0,0),i}incompatibleTokens=["a","b","h","H","K","t","T"]};var ar=class extends E{priority=60;parse(i,e,t){switch(e){case "m":return G(W.minute,i);case "mo":return t.ordinalNumber(i,{unit:"minute"});default:return F(e.length,i)}}validate(i,e){return e>=0&&e<=59}set(i,e,t){return i.setMinutes(t,0,0),i}incompatibleTokens=["t","T"]};var sr=class extends E{priority=50;parse(i,e,t){switch(e){case "s":return G(W.second,i);case "so":return t.ordinalNumber(i,{unit:"second"});default:return F(e.length,i)}}validate(i,e){return e>=0&&e<=59}set(i,e,t){return i.setSeconds(t,0),i}incompatibleTokens=["t","T"]};var lr=class extends E{priority=30;parse(i,e){let t=r=>Math.trunc(r*Math.pow(10,-e.length+3));return ee(F(e.length,i),t)}set(i,e,t){return i.setMilliseconds(t),i}incompatibleTokens=["t","T"]};var cr=class extends E{priority=10;parse(i,e){switch(e){case "X":return Ye(Xe.basicOptionalMinutes,i);case "XX":return Ye(Xe.basic,i);case "XXXX":return Ye(Xe.basicOptionalSeconds,i);case "XXXXX":return Ye(Xe.extendedOptionalSeconds,i);default:return Ye(Xe.extended,i)}}set(i,e,t){return e.timestampIsSet?i:Xe$1(i,i.getTime()-uR(i)-t)}incompatibleTokens=["t","T","x"]};var dr=class extends E{priority=10;parse(i,e){switch(e){case "x":return Ye(Xe.basicOptionalMinutes,i);case "xx":return Ye(Xe.basic,i);case "xxxx":return Ye(Xe.basicOptionalSeconds,i);case "xxxxx":return Ye(Xe.extendedOptionalSeconds,i);default:return Ye(Xe.extended,i)}}set(i,e,t){return e.timestampIsSet?i:Xe$1(i,i.getTime()-uR(i)-t)}incompatibleTokens=["t","T","X"]};var mr=class extends E{priority=40;parse(i){return An(i)}set(i,e,t){return [Xe$1(i,t*1e3),{timestampIsSet:true}]}incompatibleTokens="*"};var ur=class extends E{priority=20;parse(i){return An(i)}set(i,e,t){return [Xe$1(i,t),{timestampIsSet:true}]}incompatibleTokens="*"};var Ns={G:new Nn,y:new Vn,Y:new Ln,R:new Bn,u:new Un,Q:new zn,q:new Hn,M:new Gn,L:new Wn,w:new jn,I:new Kn,d:new qn,D:new $n,E:new Xn,e:new Yn,c:new Qn,i:new Zn,a:new Jn,b:new er,B:new tr,h:new ir,H:new nr,K:new rr,k:new or,m:new ar,s:new sr,S:new lr,X:new cr,x:new dr,t:new mr,T:new ur};var Kl=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ql=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,$l=/^'([^]*?)'?$/,Xl=/''/g,Yl=/\S/,Ql=/[a-zA-Z]/;function As(n,i,e,t){let r=()=>Xe$1(e,NaN),o=DNe(),c=o.locale??mh,h=o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,x=o.weekStartsOn??o.locale?.options?.weekStartsOn??0;let R={firstWeekContainsDate:h,weekStartsOn:x,locale:c},V=[new Dn(t?.in,e)],se=i.match(ql).map(H=>{let te=H[0];if(te in YU){let Ue=YU[te];return Ue(H,c.formatLong)}return H}).join("").match(Kl),pe=[];for(let H of se){qU(H)&&KU(H,i,n),WU(H)&&KU(H,i,n);let te=H[0],Ue=Ns[te];if(Ue){let{incompatibleTokens:qo}=Ue;if(Array.isArray(qo)){let $o=pe.find(Xo=>qo.includes(Xo.token)||Xo.token===te);if($o)throw new RangeError(`The format string mustn't contain \`${$o.fullToken}\` and \`${H}\` at the same time`)}else if(Ue.incompatibleTokens==="*"&&pe.length>0)throw new RangeError(`The format string mustn't contain \`${H}\` and any other token at the same time`);pe.push({token:te,fullToken:H});let Hr=Ue.run(n,H,c.match,R);if(!Hr)return r();V.push(Hr.setter),n=Hr.rest;}else {if(te.match(Ql))throw new RangeError("Format string contains an unescaped latin alphabet character `"+te+"`");if(H==="''"?H="'":te==="'"&&(H=Zl(H)),n.indexOf(H)===0)n=n.slice(H.length);else return r()}}if(n.length>0&&Yl.test(n))return r();let ft=V.map(H=>H.priority).sort((H,te)=>te-H).filter((H,te,Ue)=>Ue.indexOf(H)===te).map(H=>V.filter(te=>te.priority===H).sort((te,Ue)=>Ue.subPriority-te.subPriority)).map(H=>H[0]),ct=W$1(e,t?.in);if(isNaN(+ct))return r();let wi={};for(let H of ft){if(!H.validate(ct,R))return r();let te=H.set(ct,wi,R);Array.isArray(te)?(ct=te[0],Object.assign(wi,te[1])):ct=te;}return ct}function Zl(n){return n.match($l)[1].replace(Xl,"'")}var Jl=["determinateSpinner"];function ec(n,i){if(n&1&&(PI(),ke(0,"svg",11),jt(1,"circle",12),Ve$1()),n&2){let e=zt();$e("viewBox",e._viewBox()),ge(),CD("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),$e("r",e._circleRadius());}}var tc=new v("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Ps})}),Ps=100,ic=10,ci=(()=>{class n{_elementRef=m$1(j);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e;}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=m$1(tc),t=Yee(),r=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&r.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth));}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0));}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0;}_diameter=Ps;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0;}_strokeWidth;_circleRadius(){return (this.diameter-ic)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return `0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Te$1({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,r){if(t&1&&xn(Jl,5),t&2){let o;Ie(o=Ae())&&(r._determinateCircle=o.first);}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,r){t&2&&($e("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),Ds$1("mat-"+r.color),CD("width",r.diameter,"px")("height",r.diameter,"px")("--mat-progress-spinner-size",r.diameter+"px")("--mat-progress-spinner-active-indicator-width",r.diameter+"px"),Oe("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"));},inputs:{color:"color",mode:"mode",value:[2,"value","value",qd$1],diameter:[2,"diameter","diameter",qd$1],strokeWidth:[2,"strokeWidth","strokeWidth",qd$1]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,r){if(t&1&&(hi$1(0,ec,2,8,"ng-template",null,0,ND),ke(2,"div",2,1),PI(),ke(4,"svg",3),jt(5,"circle",4),Ve$1()(),Vx(),ke(6,"div",5)(7,"div",6)(8,"div",7),SL(9,8),Ve$1(),ke(10,"div",9),SL(11,8),Ve$1(),ke(12,"div",10),SL(13,8),Ve$1()()()),t&2){let o=LE(1);ge(4),$e("viewBox",r._viewBox()),ge(),CD("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),$e("r",r._circleRadius()),ge(4),Nr$1("ngTemplateOutlet",o),ge(2),Nr$1("ngTemplateOutlet",o),ge(2),Nr$1("ngTemplateOutlet",o);}},dependencies:[pC],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
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
  --mat-progress-spinner-animation-multiplier: 1.25;
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
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
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
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
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
`],encapsulation:2})}return n})();var Dt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=se({type:n});static \u0275inj=ie({imports:[vt]})}return n})();var nc=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],rc=["mat-icon, [matMenuItemIcon]","*"];function oc(n,i){n&1&&(PI(),ke(0,"svg",2),jt(1,"polygon",3),Ve$1());}var ac=["*"];function sc(n,i){if(n&1){let e=AD();on(0,"div",0),ME("click",function(){O_(e);let r=zt();return N_(r.closed.emit("click"))})("animationstart",function(r){O_(e);let o=zt();return N_(o._onAnimationStart(r.animationName))})("animationend",function(r){O_(e);let o=zt();return N_(o._onAnimationDone(r.animationName))})("animationcancel",function(r){O_(e);let o=zt();return N_(o._onAnimationDone(r.animationName))}),on(1,"div",1),Le(2),mn()();}if(n&2){let e=zt();Ds$1(e._classList),Oe("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Mn("id",e.panelId),$e("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null);}}var so=new v("MAT_MENU_PANEL"),ht=(()=>{class n{_elementRef=m$1(j);_document=m$1(z);_focusMonitor=m$1(jo);_parentMenu=m$1(so,{optional:true});_changeDetectorRef=m$1(Dt$1);role="menuitem";disabled=false;disableRipple=false;_hovered=new R;_focused=new R;_highlighted=false;_triggersSubmenu=false;constructor(){m$1(yn).load(Nl$1),this._parentMenu?.addItem?.(this);}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this);}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,false);}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete();}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation());}_handleMouseEnter(){this._hovered.next(this);}getLabel(){let e=this._elementRef.nativeElement.cloneNode(true),t=e.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<t.length;r++)t[r].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck();}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck();}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Te$1({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,r){t&1&&We("click",function(c){return r._checkDisabled(c)})("mouseenter",function(){return r._handleMouseEnter()}),t&2&&($e("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),Oe("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu));},inputs:{role:"role",disabled:[2,"disabled","disabled",Ee],disableRipple:[2,"disableRipple","disableRipple",Ee]},exportAs:["matMenuItem"],ngContentSelectors:rc,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,r){t&1&&(gn(nc),Le(0),ke(1,"span",0),Le(2,1),Ve$1(),jt(3,"div",1),Fe(4,oc,2,0,":svg:svg",2)),t&2&&(ge(3),Nr$1("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),ge(),Ue(r._triggersSubmenu?4:-1));},dependencies:[Qw],encapsulation:2})}return n})();var lc=new v("MatMenuContent");var cc=new v("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:false,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),oo="_mat-menu-enter",pr="_mat-menu-exit",at=(()=>{class n{_elementRef=m$1(j);_changeDetectorRef=m$1(Dt$1);_injector=m$1($);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Kt();_allItems;_directDescendantItems=new Ss$1;_classList={};_panelAnimationState="void";_animationDone=new R;_isAnimating=O(false);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses();}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses();}templateRef;items;lazyContent;overlapTrigger=false;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,r=l({},this._classList);t&&t.length&&t.split(" ").forEach(o=>{r[o]=false;}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{r[o]=true;}),this._elementRef.nativeElement.className=""),this._classList=r;}_previousPanelClass="";get classList(){return this.panelClass}set classList(e){this.panelClass=e;}closed=new te;close=this.closed;panelId=m$1(kt).getId("mat-menu-panel-");constructor(){let e=m$1(cc);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop;}ngOnInit(){this.setPositionClasses();}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new am$1(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe($n$1(this._directDescendantItems),Nt$1(e=>ms(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let r=e.toArray(),o=Math.max(0,Math.min(r.length-1,t.activeItemIndex||0));r[o]&&!r[o].disabled?t.setActiveItem(o):t.setNextItemActive();}});}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout);}_hovered(){return this._directDescendantItems.changes.pipe($n$1(this._directDescendantItems),Nt$1(t=>ms(...t.map(r=>r._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,r=this._keyManager;switch(t){case 27:Jn$1(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Gt$1(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(e).setFirstItemActive(),!r.activeItem&&t&&t.focus();}},{injector:this._injector});}resetActiveItem(){this._keyManager.setActiveItem(-1);}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=m$2(l({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck();}_onAnimationDone(e){let t=e===pr;(t||e===oo)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(false));}_onAnimationStart(e){(e===oo||e===pr)&&this._isAnimating.set(true);}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0);}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(pr),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?oo:pr);}),this._changeDetectorRef.markForCheck();}_updateDirectDescendants(){this._allItems.changes.pipe($n$1(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges();});}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Te$1({type:n,selectors:[["mat-menu"]],contentQueries:function(t,r,o){if(t&1&&Qi(o,lc,5)(o,ht,5)(o,ht,4),t&2){let c;Ie(c=Ae())&&(r.lazyContent=c.first),Ie(c=Ae())&&(r._allItems=c),Ie(c=Ae())&&(r.items=c);}},viewQuery:function(t,r){if(t&1&&xn(hn,5),t&2){let o;Ie(o=Ae())&&(r.templateRef=o.first);}},hostVars:3,hostBindings:function(t,r){t&2&&$e("aria-label",null)("aria-labelledby",null)("aria-describedby",null);},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",Ee],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:Ee(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[ft([{provide:so,useExisting:n}])],ngContentSelectors:ac,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,r){t&1&&(gn(),EL(0,sc,3,12,"ng-template"));},styles:[`mat-menu {
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
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
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
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
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
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
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
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
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
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
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
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
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
`],encapsulation:2})}return n})(),dc=new v("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=m$1($);return ()=>fm$1(n)}});var di=new WeakMap,mc=(()=>{class n{_canHaveBackdrop;_element=m$1(j);_viewContainerRef=m$1($t);_menuItemInstance=m$1(ht,{optional:true,self:true});_dir=m$1(vr$1,{optional:true});_focusMonitor=m$1(jo);_ngZone=m$1(B);_injector=m$1($);_scrollStrategy=m$1(dc);_changeDetectorRef=m$1(Dt$1);_animationsDisabled=Kt();_portal;_overlayRef=null;_menuOpen=false;_closingActionsSubscription=Ne.EMPTY;_menuCloseSubscription=Ne.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t);})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()));}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=m$1(so,{optional:true});this._parentMaterialMenu=t instanceof at?t:void 0;}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&di.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null);}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return !!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit();}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let r=di.get(t);di.set(t,this),r&&r!==this&&r._closeMenu();let o=this._createOverlay(t),c=o.getConfig(),h=c.positionStrategy;this._setPosition(t,h),this._canHaveBackdrop?c.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:c.hasBackdrop=t.hasBackdrop??false,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(true),t instanceof at&&(t._setIsOpen(true),t._directDescendantItems.changes.pipe(Ye$1(t.close)).subscribe(()=>{h.withLockedPosition(false).reapplyLastPosition(),h.withLockedPosition(true);}));}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t);}_destroyMenu(e){let t=this._overlayRef,r=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof at&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(ct(1)).subscribe(()=>{t.detach(),di.has(r)||r.lazyContent?.detach();}),r._setIsOpen(false)):(t.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&di.delete(r),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(false));}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck());}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Ks$1(this._injector,t),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof at&&this._menu._handleKeydown(r);});}return this._overlayRef}_getOverlayConfig(e){return new qs$1({positionStrategy:pm$1(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let o=r.connectionPair.overlayX==="start"?"after":"before",c=r.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,c);});});}_setPosition(e,t){let[r,o]=e.xPosition==="before"?["end","start"]:["start","end"],[c,h]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[x,R]=[c,h],[V,se]=[r,o],pe=0;if(this._triggersSubmenu()){if(se=r=e.xPosition==="before"?"start":"end",o=V=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let ft=this._parentMaterialMenu.items.first;this._parentInnerPadding=ft?ft._getHostElement().offsetTop:0;}pe=c==="bottom"?this._parentInnerPadding:-this._parentInnerPadding;}}else e.overlapTrigger||(x=c==="top"?"bottom":"top",R=h==="top"?"bottom":"top");t.withPositions([{originX:r,originY:x,overlayX:V,overlayY:c,offsetY:pe},{originX:o,originY:x,overlayX:se,overlayY:c,offsetY:pe},{originX:r,originY:R,overlayX:V,overlayY:h,offsetY:-pe},{originX:o,originY:R,overlayX:se,overlayY:h,offsetY:-pe}]);}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:K(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Me(c=>this._menuOpen&&c!==this._menuItemInstance)):K();return ms(e,r,o,t)}_getPortal(e){return (!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new zo$1(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return di.get(e)===this}_triggerIsAriaDisabled(){return Ee(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Np();};static \u0275dir=N({type:n})}return n})(),_t=(()=>{class n extends mc{_cleanupTouchstart;_hoverSubscription=Ne.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e;}get menu(){return this._menu}set menu(e){this._menu=e;}menuData;restoreFocus=true;menuOpened=new te;onMenuOpen=this.menuOpened;menuClosed=new te;onMenuClose=this.menuClosed;constructor(){super(true);let e=m$1(ot);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{tm$1(t)||(this._openedBy="touch");},{passive:true});}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(true);}closeMenu(){this._closeMenu();}updatePosition(){this._overlayRef?.updatePosition();}ngAfterContentInit(){this._handleHover();}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe();}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){em$1(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault());}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu());}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu();}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(false));}));}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,r){t&1&&We("click",function(c){return r._handleClick(c)})("mousedown",function(c){return r._handleMousedown(c)})("keydown",function(c){return r._handleKeydown(c)}),t&2&&$e("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu?.panelId:null);},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[Pe]})}return n})();var mi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=se({type:n});static \u0275inj=ie({imports:[Ml$1,Zs$1,vt,cm$1]})}return n})();var Li=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new R;constructor(i=false,e,t=true,r){this._multiple=i,this._emitChanges=t,this.compareWith=r,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0);}select(...i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=true){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return !this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i);}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[]);}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i));}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i));}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i));}_verifyValueAssignment(i){i.length>1&&this._multiple;}_hasQueuedChanges(){return !!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var co=(()=>{class n{_listeners=[];notify(e,t){for(let r of this._listeners)r(e,t);}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t);}}ngOnDestroy(){this._listeners=[];}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac})}return n})();var pc=["trigger"],hc=["panel"],_c=[[["mat-select-trigger"]],"*"],fc=["mat-select-trigger","*"];function gc(n,i){if(n&1&&(ke(0,"span",4),gi$1(1),Ve$1()),n&2){let e=zt();ge(),Yd$1(e.placeholder);}}function bc(n,i){n&1&&Le(0);}function vc(n,i){if(n&1&&(ke(0,"span",11),gi$1(1),Ve$1()),n&2){let e=zt(2);ge(),Yd$1(e.triggerValue);}}function yc(n,i){if(n&1&&(ke(0,"span",5),Fe(1,bc,1,0)(2,vc,2,1,"span",11),Ve$1()),n&2){let e=zt();ge(),Ue(e.customTrigger?1:2);}}function xc(n,i){if(n&1){let e=AD();ke(0,"div",12,1),We("keydown",function(r){O_(e);let o=zt();return N_(o._handleKeydown(r))}),Le(2,1),Ve$1();}if(n&2){let e=zt();Ds$1(e.panelClass),Oe("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",e._parentFormField?.color==="primary")("mat-accent",e._parentFormField?.color==="accent")("mat-warn",e._parentFormField?.color==="warn")("mat-undefined",!e._parentFormField?.color),$e("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby());}}var kc=new v("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=m$1($);return ()=>fm$1(n)}}),Cc=new v("MAT_SELECT_CONFIG"),Fs=new v("MatSelectTrigger"),mo=class{source;value;constructor(i,e){this.source=i,this.value=e;}},ui=(()=>{class n{_viewportRuler=m$1(ju);_changeDetectorRef=m$1(Dt$1);_elementRef=m$1(j);_dir=m$1(vr$1,{optional:true});_idGenerator=m$1(kt);_renderer=m$1(ot);_parentFormField=m$1(Tg,{optional:true});ngControl=m$1(Ti,{self:true,optional:true});_liveAnnouncer=m$1(Lw);_defaultOptions=m$1(Cc,{optional:true});_animationsDisabled=Kt();_popoverLocation;_initialized=new R;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,o=yQe(e,this.options,this.optionGroups),c=t._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=vQe(c.offsetTop,c.offsetHeight,r.scrollTop,r.offsetHeight);}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0);}_getChangeEvent(e){return new mo(this,e)}_scrollStrategyFactory=m$1(kc);_panelOpen=false;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new R;_errorStateTracker;stateChanges=new R;disableAutomaticLabeling=true;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=false;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=false;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e);}_disableRipple=O(false);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties();}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??false;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next();}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ol$1.required)??false}set required(e){this._required=e,this.stateChanges.next();}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e;}_multiple=false;disableOptionCentering=this._defaultOptions?.disableOptionCentering??false;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection();}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e);}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e;}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next();}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e;}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??false;optionSelectionChanges=hs(()=>{let e=this.options;return e?e.changes.pipe($n$1(e),Nt$1(()=>ms(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Nt$1(()=>this.optionSelectionChanges))});openedChange=new te;_openedStream=this.openedChange.pipe(Me(e=>e),ce(()=>{}));_closedStream=this.openedChange.pipe(Me(e=>!e),ce(()=>{}));selectionChange=new te;valueChange=new te;constructor(){let e=m$1(bg),t=m$1(Th,{optional:true}),r=m$1(Ih,{optional:true}),o=m$1(new GE("tabindex"),{optional:true}),c=m$1(qw,{optional:true});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new xf(e,this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=c?.usePopover===false?null:"inline",this.id=this.id;}ngOnInit(){this._selectionModel=new Li(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Ye$1(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges());});}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Ye$1(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect());}),this.options.changes.pipe($n$1(null),Ye$1(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection();});}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby");}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState());}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass));}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete();}toggle(){this.panelOpen?this.close():this.open();}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=true,this._overlayDir.positionChange.pipe(ct(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled();}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(true)));}close(){this._panelOpen&&(this._panelOpen=false,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(false)));}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0;};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay());}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay();},200);e.classList.add("mat-select-panel-exit");}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck();}writeValue(e){this._assignValue(e);}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next();}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return "";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState();}_isRtl(){return this._dir?this._dir.value==="rtl":false}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e));}_handleClosedKeydown(e){let t=e.keyCode,r=t===40||t===38||t===37||t===39,o=t===13||t===32,c=this._keyManager;if(!c.isTyping()&&o&&!Jn$1(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let h=this.selected;c.onKeydown(e);let x=this.selected;x&&h!==x&&this._liveAnnouncer.announce(x.viewValue,1e4);}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,o=r===40||r===38,c=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!c&&(r===13||r===32)&&t.activeItem&&!Jn$1(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!c&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let h=this.options.some(x=>!x.disabled&&!x.selected);this.options.forEach(x=>{x.disabled||(h?x.select():x.deselect());});}else {let h=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==h&&t.activeItem._selectViaInteraction();}}_handleOverlayKeydown(e){e.keyCode===27&&!Jn$1(e)&&(e.preventDefault(),this.close());}_onFocus(){this.disabled||(this._focused=true,this.stateChanges.next());}_onBlur(){this._focused=false,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next());}get empty(){return !this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next();});}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else {let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1);}this._changeDetectorRef.markForCheck();}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return  false;try{return (r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return  false}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,true):false}_skipPredicate=e=>this.panelOpen?false:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Yw?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck();}_initKeyManager(){this._keyManager=new Uw(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close());}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction();});}_resetOptions(){let e=ms(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Ye$1(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus());}),ms(...this.options.map(t=>t._stateChanges)).pipe(Ye$1(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next();});}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next();}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next();}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck();}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e);}else this._keyManager.setActiveItem(this._selectionModel.selected[0]);}_canOpen(){return !this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e);}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby");}onContainerClick(e){let t=Er$1(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open());}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Te$1({type:n,selectors:[["mat-select"]],contentQueries:function(t,r,o){if(t&1&&Qi(o,Fs,5)(o,s3,5)(o,rce,5),t&2){let c;Ie(c=Ae())&&(r.customTrigger=c.first),Ie(c=Ae())&&(r.options=c),Ie(c=Ae())&&(r.optionGroups=c);}},viewQuery:function(t,r){if(t&1&&xn(pc,5)(hc,5)(jee,5),t&2){let o;Ie(o=Ae())&&(r.trigger=o.first),Ie(o=Ae())&&(r.panel=o.first),Ie(o=Ae())&&(r._overlayDir=o.first);}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,r){t&1&&We("keydown",function(c){return r._handleKeydown(c)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),t&2&&($e("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),Oe("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen));},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",Ee],disableRipple:[2,"disableRipple","disableRipple",Ee],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:qd$1(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",Ee],placeholder:"placeholder",required:[2,"required","required",Ee],multiple:[2,"multiple","multiple",Ee],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",Ee],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",qd$1],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",Ee]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[ft([{provide:Sg,useExisting:n},{provide:nce,useExisting:n}]),At$1],ngContentSelectors:fc,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,r){if(t&1&&(gn(_c),ke(0,"div",2,0),We("click",function(){return r.open()}),ke(3,"div",3),Fe(4,gc,2,1,"span",4)(5,yc,3,1,"span",5),Ve$1(),ke(6,"div",6)(7,"div",7),PI(),ke(8,"svg",8),jt(9,"path",9),Ve$1()()()(),hi$1(10,xc,3,16,"ng-template",10),We("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(c){return r._handleOverlayKeydown(c)})),t&2){let o=LE(1);ge(3),$e("id",r._valueId),ge(),Ue(r.empty?4:5),ge(6),Nr$1("cdkConnectedOverlayDisableClose",true)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",true)("cdkConnectedOverlayUsePopover",r._popoverLocation);}},dependencies:[Yw,jee],styles:[`@keyframes _mat-select-enter {
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
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
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
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
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
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return n})(),N0=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["mat-select-trigger"]],features:[ft([{provide:Fs,useExisting:n}])]})}return n})(),pi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=se({type:n});static \u0275inj=ie({imports:[Zs$1,OQe,vt,cm$1,QN,OQe]})}return n})();var Mc=["input"],wc=["label"],Tc=["*"],po={color:"accent",clickAction:"check-indeterminate",disabledInteractive:false},Ec=new v("mat-checkbox-default-options",{providedIn:"root",factory:()=>po}),Te=(function(n){return n[n.Init=0]="Init",n[n.Checked=1]="Checked",n[n.Unchecked=2]="Unchecked",n[n.Indeterminate=3]="Indeterminate",n})(Te||{}),ho=class{source;checked},Bi=(()=>{class n{_elementRef=m$1(j);_changeDetectorRef=m$1(Dt$1);_ngZone=m$1(B);_animationsDisabled=Kt();_options=m$1(Ec,{optional:true});focus(){this._inputElement.nativeElement.focus();}_createChangeEvent(e){let t=new ho;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return `${this.id||this._uniqueId}-input`}required=false;labelPosition="after";name=null;change=new te;indeterminateChange=new te;value;disableRipple=false;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=Te.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){m$1(yn).load(Nl$1);let e=m$1(new GE("tabindex"),{optional:true});this._options=this._options||po,this.color=this._options.color||po.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=m$1(kt).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??false;}ngOnChanges(e){e.required&&this._validatorChangeFn();}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate);}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck());}_checked=false;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck());}_disabled=false;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(Te.Indeterminate):this._transitionCheckState(this.checked?Te.Checked:Te.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e);}_indeterminate=O(false);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges();}writeValue(e){this.checked=!!e;}registerOnChange(e){this._controlValueAccessorChangeFn=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e;}validate(e){return this.required&&e.value!==true?{required:true}:null}registerOnValidatorChange(e){this._validatorChangeFn=e;}_transitionCheckState(e){let t=this._currentCheckState,r=this._getAnimationTargetElement();if(!(t===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o);},1e3);});}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked);}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked);}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(false),this.indeterminateChange.emit(false);}),this._checked=!this._checked,this._transitionCheckState(this._checked?Te.Checked:Te.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate);}_onInteractionEvent(e){e.stopPropagation();}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck();});}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return "";switch(e){case Te.Init:if(t===Te.Checked)return this._animationClasses.uncheckedToChecked;if(t==Te.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Te.Unchecked:return t===Te.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Te.Checked:return t===Te.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Te.Indeterminate:return t===Te.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return ""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e);}_onInputClick(){this._handleInputClick();}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus();}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation();}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Te$1({type:n,selectors:[["mat-checkbox"]],viewQuery:function(t,r){if(t&1&&xn(Mc,5)(wc,5),t&2){let o;Ie(o=Ae())&&(r._inputElement=o.first),Ie(o=Ae())&&(r._labelElement=o.first);}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,r){t&2&&(Mn("id",r.id),$e("tabindex",null)("aria-label",null)("aria-labelledby",null),Ds$1(r.color?"mat-"+r.color:"mat-accent"),Oe("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive));},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",Ee],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",Ee],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",Ee],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:qd$1(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ee],checked:[2,"checked","checked",Ee],disabled:[2,"disabled","disabled",Ee],indeterminate:[2,"indeterminate","indeterminate",Ee]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[ft([{provide:vu$1,useExisting:An$1(()=>n),multi:true},{provide:Pa,useExisting:n,multi:true}]),At$1],ngContentSelectors:Tc,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,r){if(t&1&&(gn(),ke(0,"div",3),We("click",function(c){return r._preventBubblingFromLabel(c)}),ke(1,"div",4,0)(3,"div",5),We("click",function(){return r._onTouchTargetClick()}),Ve$1(),ke(4,"input",6,1),We("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(c){return r._onInteractionEvent(c)}),Ve$1(),jt(6,"div",7),ke(7,"div",8),PI(),ke(8,"svg",9),jt(9,"path",10),Ve$1(),Vx(),jt(10,"div",11),Ve$1(),jt(11,"div",12),Ve$1(),ke(12,"label",13,2),Le(14),Ve$1()()),t&2){let o=LE(2);Nr$1("labelPosition",r.labelPosition),ge(4),Oe("mdc-checkbox--selected",r.checked),Nr$1("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),$e("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?true:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),ge(7),Nr$1("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",true),ge(),Nr$1("for",r.inputId);}},dependencies:[Qw,xQe],styles:[`.mdc-checkbox {
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
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
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
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
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
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
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
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
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
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})(),vr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=se({type:n});static \u0275inj=ie({imports:[Bi,vt]})}return n})();var Sc=["*"];function Ic(n,i){if(n&1&&(ke(0,"icon",3),gi$1(1,"info"),Ve$1()),n&2){let e=zt();Nr$1("matTooltip",e.info());}}function Rc(n,i){n&1&&jt(0,"div",4);}function Oc(n,i){if(n&1&&(ke(0,"div",5)(1,"div",7)(2,"div",8)(3,"icon"),gi$1(4),Ve$1()()()()),n&2){let e=zt();ge(),Oe("bg-base-200",!e.value())("bg-info",e.value())("border-info!",e.value()),ge(),Oe("left-1",!e.value())("left-5",e.value())("bg-base-400",!e.value())("bg-info-light",e.value()),ge(2),Yd$1(e.value()?"done":"remove");}}function Dc(n,i){if(n&1){let e=AD();ke(0,"mat-checkbox",9),We("ngModelChange",function(r){O_(e);let o=zt();return N_(o.setValue(r))}),Ve$1(),KK();}if(n&2){let e=zt();Nr$1("ngModel",e.value()),QK();}}var Ls=(()=>{class n{constructor(){this.toggle=Cs(void 0),this.label=Cs(void 0),this.info=Cs(void 0),this.value=O(void 0),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e;}setValue(e){this.value.set(e),this._onChange&&this._onChange(e);}writeValue(e){this.value.set(e);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te$1({type:n,selectors:[["settings-toggle"]],inputs:{toggle:[1,"toggle"],label:[1,"label"],info:[1,"info"]},features:[ft([{provide:vu$1,useExisting:An$1(()=>n),multi:true}])],ngContentSelectors:Sc,decls:9,vars:8,consts:[["matRipple","",1,"hover:bg-base-200","relative","flex","flex-1","items-center","space-x-2","overflow-hidden","rounded-sm","border","py-1","pr-1","pl-2",3,"click"],[1,"z-10","flex","flex-1","items-center","space-x-2","p-2","text-left"],[1,"w-full"],[3,"matTooltip"],[1,"bg-info","absolute","inset-0","z-0","m-0!","opacity-10"],[1,"px-2"],[1,"pointer-events-none",3,"ngModel"],["toggle","",1,"border-base-400","relative","h-8","w-12","rounded-full","border-2"],[1,"absolute","top-1/2","flex","h-6","w-6","-translate-x-0.5","-translate-y-1/2","items-center","justify-center","rounded-full","text-black","shadow-sm"],[1,"pointer-events-none",3,"ngModelChange","ngModel"]],template:function(t,r){t&1&&(gn(),ke(0,"button",0),We("click",function(){return r.setValue(!r.value())}),ke(1,"div",1)(2,"div",2),gi$1(3),Le(4),Ve$1(),Fe(5,Ic,2,1,"icon",3),Ve$1(),Fe(6,Rc,1,0,"div",4),Fe(7,Oc,5,15,"div",5)(8,Dc,1,1,"mat-checkbox",6),Ve$1()),t&2&&(Oe("border-base-300",!r.value())("border-info",r.value()),ge(3),ko$1(" ",r.label()," "),ge(2),Ue(r.info()?5:-1),ge(),Ue(r.value()?6:-1),ge(),Ue(r.toggle()?7:8));},dependencies:[vr,Bi,F0e,x0e,GQ,YQe,DJe,Zce],styles:["[_nghost-%COMP%]{display:flex}[toggle][_ngcontent-%COMP%]{transition:background .2s,left .2s}"]});}}return n})();var _i=new Map,Nc="PlaceOS.image-cache-v1",Us="PlaceOS.image-cache-keys-v1";var hi=null;function zs(){if(hi)return hi;if(typeof sessionStorage>"u")return [];try{let n=sessionStorage.getItem(Us);return hi=n?JSON.parse(n):[],hi}catch{return []}}function Ac(n){if(hi=Array.from(new Set(n)),!(typeof sessionStorage>"u"))try{sessionStorage.setItem(Us,JSON.stringify(hi));}catch{}}async function Hs(){if(typeof caches>"u")return null;try{return await caches.open(Nc)}catch{return null}}async function Pc(n){if(!zs().includes(n))return null;let i=await Hs();if(!i)return null;try{return await i.match(n)||null}catch{return null}}async function Fc(n,i){let e=await Hs();if(e)try{await e.put(n,i),Ac([...zs(),n]);}catch{}}function Vc(n){let i=Wt$1();document.cookie=`${i==="x-api-key"?"api-key="+encodeURIComponent(ml$1()):"bearer_token="+encodeURIComponent(i)};max-age=30;path=${n};samesite=strict;${location.protocol==="https:"?"secure;":""}`;}function Lc(){let n=Wt$1();return n==="x-api-key"?{"X-API-Key":ml$1()}:{Authorization:`Bearer ${n}`}}async function Bs(n,i){let e=await i.blob(),t=URL.createObjectURL(e);return _i.set(n,t),t}async function Gs(n,i){return js(n,()=>(Vc(i),fetch(n)))}async function Ws(n){return js(n,()=>fetch(n,{headers:Lc()}))}async function js(n,i){if(_i.has(n))return _i.get(n);let e=await Pc(n);if(e)return Bs(n,e);let t=await i();if(!t||!t.ok)throw new Error(`Failed to fetch image: ${t?.status}`);return Fc(n,t.clone()),Bs(n,t)}var Nt=(()=>{class n extends Fs$1{constructor(){super(),this._element=m$1(j),this.source=Cs(void 0);}ngOnChanges(e){e.source&&this.source()&&this._loadImage();}async _loadImage(){let e=this.source();if(typeof e!="string")return;if(!this._element||!Zr())return this.timeout("load",()=>this._loadImage(),300);if(!this._isLocalUrl(e)){this._element.nativeElement.src=e;return}if(_i.has(e)){this._element.nativeElement.src=_i.get(e);return}let t=e.includes("/api/engine/v2/uploads")||e.includes("/api/engine/v2/signage");try{this._element.nativeElement.src=t?await Gs(e,this._cookiePath(e)):await Ws(e);}catch(r){this._element.nativeElement.dispatchEvent(new ErrorEvent("error",{error:r}));}}_isLocalUrl(e){try{return new URL(e,location.href).origin===location.origin}catch{return  false}}_cookiePath(e){return e.includes("/api/engine/v2/uploads")?"/api/engine/v2/uploads":"/api/engine/v2/signage"}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275dir=N({type:n,selectors:[["img","auth",""],["video","auth",""],["audio","auth",""]],inputs:{source:[1,"source"]},features:[Pe,At$1]});}}return n})();var fo=0;function Bc(){return fo}function At(n,i){return (...e)=>{try{return fo=i,n(...e)}finally{fo=0;}}}function Uc(n){return !n}function Ks(n){return n}function Pt(n){return Array.isArray(n)}function xr(n){return (typeof n=="object"||typeof n=="function")&&n!=null}var Ht=Symbol(),Ir=Symbol(),zi=class{predicates;fns=[];constructor(i){this.predicates=i;}push(i){this.fns.push(qs(this.predicates,i));}mergeIn(i){let e=this.predicates?i.fns.map(t=>qs(this.predicates,t)):i.fns;this.fns.push(...e);}hasRules(){return this.fns.length>0}},kr=class extends zi{get defaultValue(){return  false}compute(i){return this.fns.some(e=>{let t=e(i);return t&&t!==Ir})}},gi=class n extends zi{ignore;static ignoreNull(i){return new n(i,e=>e===null)}constructor(i,e){super(i),this.ignore=e;}get defaultValue(){return []}compute(i){return this.fns.reduce((e,t)=>{let r=t(i);return r===void 0||r===Ir?e:Pt(r)?[...e,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?e:[...e,r]},[])}},go=class extends gi{constructor(i){super(i,void 0);}},bo=class extends zi{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(i,e){super(i),this.key=e;}compute(i){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let t=0;t<this.fns.length;t++){let r=this.fns[t](i);r!==Ir&&(e=this.key.reducer.reduce(e,r));}return e}};function qs(n,i){return n.length===0?i:e=>{for(let t of n){let r=e.stateOf(t.path),o=q(r.structure.pathKeys).length-t.depth;for(let c=0;c<o;c++)r=r.structure.parent;if(!t.fn(r.context))return Ir}return i(e)}}var bi=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(i){this.predicates=i,this.hidden=new kr(i),this.disabledReasons=new go(i),this.readonly=new kr(i),this.syncErrors=gi.ignoreNull(i),this.syncTreeErrors=gi.ignoreNull(i),this.asyncErrors=gi.ignoreNull(i);}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(i){return this.metadata.has(i)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(i){return this.metadata.has(i)||this.metadata.set(i,new bo(this.predicates,i)),this.metadata.get(i)}mergeIn(i){this.hidden.mergeIn(i.hidden),this.disabledReasons.mergeIn(i.disabledReasons),this.readonly.mergeIn(i.readonly),this.syncErrors.mergeIn(i.syncErrors),this.syncTreeErrors.mergeIn(i.syncTreeErrors),this.asyncErrors.mergeIn(i.asyncErrors);for(let e of i.getMetadataKeys()){let t=i.metadata.get(e);this.getMetadata(e).mergeIn(t);}}},Cr=class{depth;constructor(i){this.depth=i;}build(){return new Mr(this,[],0)}},vi=class n extends Cr{constructor(i){super(i);}current;all=[];addHiddenRule(i){this.getCurrent().addHiddenRule(i);}addDisabledReasonRule(i){this.getCurrent().addDisabledReasonRule(i);}addReadonlyRule(i){this.getCurrent().addReadonlyRule(i);}addSyncErrorRule(i){this.getCurrent().addSyncErrorRule(i);}addSyncTreeErrorRule(i){this.getCurrent().addSyncTreeErrorRule(i);}addAsyncErrorRule(i){this.getCurrent().addAsyncErrorRule(i);}addMetadataRule(i,e){this.getCurrent().addMetadataRule(i,e);}getChild(i){if(i===Ht){let e=this.getCurrent().children;e.size>(e.has(Ht)?1:0)&&(this.current=void 0);}return this.getCurrent().getChild(i)}hasLogic(i){return this===i?true:this.all.some(({builder:e})=>e.hasLogic(i))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:i})=>i.anyChildHasLogic())}mergeIn(i,e){e?this.all.push({builder:i,predicate:{fn:At(e.fn,this.depth),path:e.path}}):this.all.push({builder:i}),this.current=void 0;}getCurrent(){return this.current===void 0&&(this.current=new Hi(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new n(0)}},Hi=class extends Cr{logic=new bi([]);children=new Map;constructor(i){super(i);}addHiddenRule(i){this.logic.hidden.push(At(i,this.depth));}addDisabledReasonRule(i){this.logic.disabledReasons.push(At(i,this.depth));}addReadonlyRule(i){this.logic.readonly.push(At(i,this.depth));}addSyncErrorRule(i){this.logic.syncErrors.push(At(i,this.depth));}addSyncTreeErrorRule(i){this.logic.syncTreeErrors.push(At(i,this.depth));}addAsyncErrorRule(i){this.logic.asyncErrors.push(At(i,this.depth));}addMetadataRule(i,e){this.logic.getMetadata(i).push(At(e,this.depth));}getChild(i){return this.children.has(i)||this.children.set(i,new vi(this.depth+1)),this.children.get(i)}hasLogic(i){return this===i}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let i of this.children.values())if(i.hasRules())return  true;return  false}},Mr=class n{builder;predicates;depth;logic;constructor(i,e,t){this.builder=i,this.predicates=e,this.depth=t,this.logic=i?zc(i,e,t):new bi([]);}getChild(i){let e=this.builder?Ys(this.builder,i):[];if(e.length===0)return new n(void 0,[],this.depth+1);if(e.length===1){let{builder:t,predicates:r}=e[0];return new n(t,[...this.predicates,...r.map(o=>yo(o,this.depth))],this.depth+1)}else {let t=e.map(({builder:r,predicates:o})=>new n(r,[...this.predicates,...o.map(c=>yo(c,this.depth))],this.depth+1));return new vo(t)}}hasLogic(i){return this.builder?this.builder.hasLogic(i):false}hasRules(){return this.builder?this.builder.hasRules():false}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():false}},vo=class n{all;logic;constructor(i){this.all=i,this.logic=new bi([]);for(let e of i)this.logic.mergeIn(e.logic);}getChild(i){return new n(this.all.flatMap(e=>e.getChild(i)))}hasLogic(i){return this.all.some(e=>e.hasLogic(i))}hasRules(){return this.all.some(i=>i.hasRules())}anyChildHasLogic(){return this.all.some(i=>i.anyChildHasLogic())}};function Ys(n,i){if(n instanceof vi)return n.all.flatMap(({builder:e,predicate:t})=>{let r=Ys(e,i);return t?r.map(({builder:o,predicates:c})=>({builder:o,predicates:[...c,t]})):r});if(n instanceof Hi)return [...i!==Ht&&n.children.has(Ht)?[{builder:n.getChild(Ht),predicates:[]}]:[],...n.children.has(i)?[{builder:n.getChild(i),predicates:[]}]:[]];throw new A(1909,false)}function zc(n,i,e){let t=new bi(i);if(n instanceof vi){let r=n.all.map(({builder:o,predicate:c})=>new Mr(o,c?[...i,yo(c,e)]:i,e));for(let o of r)t.mergeIn(o.logic);}else if(n instanceof Hi)t.mergeIn(n.logic);else throw new A(1909,false);return t}function yo(n,i){return m$2(l({},n),{depth:i})}var Qs=Symbol("PATH"),st=class n{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,Hc);logicBuilder;constructor(i,e,t,r){this.keys=i,this.parent=t,this.keyInParent=r,this.root=e??this,t||(this.logicBuilder=vi.newRoot());}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(i){return this.children.has(i)||this.children.set(i,new n([...this.keys,i],this.root,this,i)),this.children.get(i)}mergeIn(i,e){let t=i.compile();this.builder.mergeIn(t.builder,e);}static unwrapFieldPath(i){return i[Qs]}static newRoot(){return new n([],void 0,void 0,void 0)}},Hc={get(n,i){return i===Qs?n:n.getChild(i).fieldPathProxy}},yr,Ui=new Map,wr=class n{schemaFn;constructor(i){this.schemaFn=i;}compile(){if(Ui.has(this))return Ui.get(this);let i=st.newRoot();Ui.set(this,i);let e=yr;try{yr=i,this.schemaFn(i.fieldPathProxy);}finally{yr=e;}return i}static create(i){return i instanceof n?i:new n(i)}static rootCompile(i){try{return Ui.clear(),i===void 0?st.newRoot():i instanceof n?i.compile():new n(i).compile()}finally{Ui.clear();}}};function Gc(n){return n instanceof wr||typeof n=="function"}function Rr(n){if(yr!==st.unwrapFieldPath(n).root)throw new A(1908,false)}function yi(n,i,e){return Rr(n),st.unwrapFieldPath(n).builder.addMetadataRule(i,e),i}var Gt={list(){return {reduce:(n,i)=>i===void 0?n:[...n,i],getInitial:()=>[]}},min(){return {reduce:(n,i)=>n===void 0||i===void 0?n??i:i<n?i:n,getInitial:()=>{}}},max(){return {reduce:(n,i)=>n===void 0||i===void 0?n??i:i>n?i:n,getInitial:()=>{}}},or(){return {reduce:(n,i)=>n||i,getInitial:()=>false}},and(){return {reduce:(n,i)=>n&&i,getInitial:()=>true}},override:Wc};function Wc(n){return {reduce:(i,e)=>e,getInitial:()=>n?.()}}var Oo=Symbol("IS_ASYNC_VALIDATION_RESOURCE"),Tr=class{reducer;create;brand;[Oo];constructor(i,e){this.reducer=i,this.create=e;}};function lt(n){return new Tr(n??Gt.override())}function Do(){return lt()}var No=lt(Gt.or()),Ao=Do();var Po=lt(Gt.max()),Zs=Do();var Js=lt(Gt.max()),el=lt(Gt.min()),tl=lt(Gt.list());function Ve(n,i){if(n===i)return  true;if(!n||!i||n.length!==i.length)return  false;for(let e=0;e<n.length;e++)if(!Object.is(n[e],i[e]))return  false;return  true}function jc(n){return n.errors().length>0?"invalid":n.pending()?"unknown":"valid"}var xo=class{node;constructor(i){this.node=i;}rawSyncTreeErrors=De(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:Ve});syncErrors=De(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...Kc(this.node.submitState.submissionErrors())],{equal:Ve});syncValid=De(()=>this.shouldSkipValidation()?true:this.node.structure.reduceChildren(this.syncErrors().length===0,(i,e)=>e&&i.validationState.syncValid(),Uc));syncTreeErrors=De(()=>this.rawSyncTreeErrors().filter(i=>i.fieldTree===this.node.fieldTree),{equal:Ve});rawAsyncErrors=De(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:Ve});asyncErrors=De(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(i=>i==="pending"||i.fieldTree===this.node.fieldTree),{equal:Ve});parseErrors=De(()=>this.node.formFieldBindings().flatMap(i=>i.parseErrors()),{equal:Ve});errors=De(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(i=>i!=="pending")],{equal:Ve});errorSummary=De(()=>{let i=this.node.structure.reduceChildren(this.errors(),(e,t)=>[...t,...e.errorSummary()]);return q(()=>i.sort(qc)),i},{equal:Ve});pending=De(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(i,e)=>e||i.validationState.asyncErrors().includes("pending")));status=De(()=>{if(this.shouldSkipValidation())return "valid";let i=jc(this);return this.node.structure.reduceChildren(i,(e,t)=>t==="invalid"||e.validationState.status()==="invalid"?"invalid":t==="unknown"||e.validationState.status()==="unknown"?"unknown":"valid",e=>e==="invalid")});valid=De(()=>this.status()==="valid");invalid=De(()=>this.status()==="invalid");shouldSkipValidation=De(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function Kc(n){return n===void 0?[]:Pt(n)?n:[n]}function il(n,i){if(Pt(n))for(let e of n)e.fieldTree??=i;else n&&(n.fieldTree??=i);return n}function $s(n){return n.formField?n.formField.element:n.fieldTree().formFieldBindings().reduce((i,e)=>!i||!e.element?i??e.element:i.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:i,void 0)}function qc(n,i){let e=$s(n),t=$s(i);return e===t?0:e===void 0||t===void 0?e===void 0?1:-1:e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var ko=lt(),Co=class{node;cache=new WeakMap;constructor(i){this.node=i,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this);}resolve(i){if(!this.cache.has(i)){let e=De(()=>{let t=st.unwrapFieldPath(i),r=this.node,o=Bc();for(;o>0||!r.structure.logic.hasLogic(t.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new A(1900,false);for(let c of t.keys)if(r=r.structure.getChild(c),r===void 0)throw new A(1901,false);return r.fieldTree});this.cache.set(i,e);}return this.cache.get(i)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=De(()=>{let i=this.key();if(!Pt(q(this.node.structure.parent.value)))throw new A(1906,false);return Number(i)});fieldTreeOf(i){return this.resolve(i)}stateOf(i){return this.resolve(i)()}valueOf=i=>{let e=this.resolve(i)().value();if(e instanceof uv)throw new A(1907,false);return e}},Mo=class{node;metadata=new Map;constructor(i){this.node=i;}runMetadataCreateLifecycle(){this.node.logicNode.logic.hasMetadataKeys()&&q(()=>fn(this.node.structure.injector,()=>{for(let i of this.node.logicNode.logic.getMetadataKeys())if(i.create){let e=this.node.logicNode.logic.getMetadata(i),t=i.create(this.node,De(()=>e.compute(this.node.context)));this.metadata.set(i,t);}}));}get(i){if(this.has(i)&&!this.metadata.has(i)){if(i.create)throw new A(1912,false);let e=this.node.logicNode.logic.getMetadata(i);this.metadata.set(i,De(()=>e.compute(this.node.context)));}return this.metadata.get(i)}has(i){return this.node.logicNode.logic.hasMetadata(i)}},$c={get(n,i,e){let t=n(),r=t.structure.getChild(i);if(r!==void 0)return r.fieldTree;let o=q(t.value);if(Pt(o)){if(i==="length")return t.value().length;if(i===Symbol.iterator)return ()=>(t.value(),Array.prototype[Symbol.iterator].apply(t.fieldTree))}if(xr(o)&&i===Symbol.iterator)return function*(){for(let c in e)yield [c,e[c]];}},getOwnPropertyDescriptor(n,i){let e=q(n().value),t=Reflect.getOwnPropertyDescriptor(e,i);return t&&!t.configurable&&(t.configurable=true),t},ownKeys(n){let i=q(n().value);return typeof i=="object"&&i!==null?Reflect.ownKeys(i):[]}};function Xc(n,i){let e=De(()=>n()[i()]);return e[Ot]=n[Ot],e.set=t=>{Object.is(q(e),t)||n.update(r=>Yc(r,t,i()));},e.update=t=>{e.set(t(q(e)));},e.asReadonly=()=>e,e}function Yc(n,i,e){if(Pt(n)){let t=[...n];return t[e]=i,t}else return m$2(l({},n),{[e]:i})}var fi=Symbol(""),nl=De(()=>false),Er=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=$.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(i,e,t){this.logic=i,this.node=e,this.createChildNode=t;}children(){this.ensureChildrenMap();let i=this.childrenMap();return i===void 0?[]:Array.from(i.byPropertyKey.values()).map(e=>q(e.reader))}materializedChildren(){let i=this.childrenMap();return i===void 0?[]:Array.from(i.byPropertyKey.values()).map(e=>e.node)}_areChildrenMaterialized(){return q(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||q(()=>{this.childrenMap.update(i=>this.computeChildrenMap(this.value(),i,true));});}getChild(i){this.ensureChildrenMap();let e=i.toString(),t=q(this.childrenMap)?.byPropertyKey.get(e)?.reader;return t||(t=this.createReader(e)),t()}reduceChildren(i,e,t){let r=this.childrenMap();if(!r)return i;let o=i;for(let c of r.byPropertyKey.values()){if(t?.(o))break;o=e(q(c.reader),o);}return o}destroy(){this.injector.destroy();}createKeyOrOrphanSignals(i,e,t){if(i==="root")return {keyInParent:rl,isOrphaned:nl};let r=this.parent,o=t,c=De(()=>{if(r.structure.isOrphaned())return fi;let R=r.structure.childrenMap();if(!R)return fi;let V=R.byPropertyKey.get(o);if(V&&V.node===this.node)return o;if(e===void 0)return fi;for(let[se,pe]of R.byPropertyKey)if(pe.node===this.node)return o=se;return fi}),h=De(()=>c()===fi);return {keyInParent:De(()=>{let R=c();if(R===fi)throw e===void 0?new A(-1902,false):new A(1904,false);return R}),isOrphaned:h}}createChildrenMap(){return Wd$1({source:this.value,computation:(i,e)=>this.computeChildrenMap(i,e?.value,false)})}computeChildrenMap(i,e,t){if(!xr(i)||!t&&e===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;e??={byPropertyKey:new Map};let r,o=Pt(i);e!==void 0&&(o?r=Zc(e,i,this.identitySymbol):r=Jc(e,i));for(let c of Object.keys(i)){let h,x=i[c];if(x===void 0){e.byPropertyKey.has(c)&&(r??=l({},e),r.byPropertyKey.delete(c));continue}o&&xr(x)&&!Pt(x)&&(h=x[this.identitySymbol]??=Symbol(""));let R;h&&(e.byTrackingKey?.has(h)||(r??=l({},e),r.byTrackingKey??=new Map,r.byTrackingKey.set(h,this.createChildNode(c,h,o))),R=(r??e).byTrackingKey.get(h));let V=e.byPropertyKey.get(c);V===void 0?(r??=l({},e),r.byPropertyKey.set(c,{reader:this.createReader(c),node:R??this.createChildNode(c,h,o)})):R&&R!==V.node&&(r??=l({},e),V.node=R);}return r??e}createReader(i){return De(()=>this.childrenMap()?.byPropertyKey.get(i)?.node)}},wo=class extends Er{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return Qc}get keyInParent(){return rl}isOrphaned=nl;childrenMap;constructor(i,e,t,r,o){super(e,i,o),this.fieldManager=t,this.value=r,this.childrenMap=this.createChildrenMap();}},To=class extends Er{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(i,e,t,r,o,c){super(e,i,c),this.logic=e,this.parent=t,this.root=this.parent.structure.root;let h=this.createKeyOrOrphanSignals("child",r,o);this.isOrphaned=h.isOrphaned,this.keyInParent=h.keyInParent,this.pathKeys=De(()=>[...t.structure.pathKeys(),this.keyInParent()]),this.value=Xc(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this);}};var Qc=De(()=>[]),rl=De(()=>{throw new A(1905,false)});function Zc(n,i,e){let t,r=new Set(n.byPropertyKey.keys()),o=new Set(n.byTrackingKey?.keys());for(let c=0;c<i.length;c++){let h=i[c];r.delete(c.toString()),xr(h)&&h.hasOwnProperty(e)&&o.delete(h[e]);}if(r.size>0){t??=l({},n);for(let c of r)t.byPropertyKey.delete(c);}if(o.size>0){t??=l({},n);for(let c of o)t.byTrackingKey?.delete(c);}return t}function Jc(n,i){let e;for(let t of n.byPropertyKey.keys())i.hasOwnProperty(t)||(e??=l({},n),e.byPropertyKey.delete(t));return e}var Eo=class{node;selfSubmitting=O(false);submissionErrors;constructor(i){this.node=i,this.submissionErrors=Wd$1({source:this.node.structure.value,computation:()=>[]});}submitting=De(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??false))},Gi=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new Co(this)}fieldProxy=new Proxy(()=>this,$c);pathNode;constructor(i){this.pathNode=i.pathNode,this.fieldAdapter=i.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,i),this.validationState=this.fieldAdapter.createValidationState(this,i),this.nodeState=this.fieldAdapter.createNodeState(this,i),this.metadataState=new Mo(this),this.submitState=new Eo(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle();}focusBoundControl(i){this.getBindingForFocus()?.focus(i);}getBindingForFocus(){let i=this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(Xs,void 0);return i||this.structure.children().map(e=>e.getBindingForFocus()).reduce(Xs,void 0)}pendingSync=Wd$1({source:()=>this.value(),computation:(i,e)=>{e?.value?.abort();}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let i=this.metadata(Zs)?.();return i?this.metadata(i):void 0}get maxLength(){return this.metadata(el)}get min(){let i=this.metadata(Ao)?.();return i?this.metadata(i):void 0}get minLength(){return this.metadata(Js)}get pattern(){return this.metadata(tl)??ed}get required(){return this.metadata(No)??td}metadata(i){return this.metadataState.get(i)}getError(i){return this.errors().find(e=>e.kind===i)}hasMetadata(i){return this.metadataState.has(i)}markAsTouched(i){this.structure.isOrphaned()||q(()=>{this.markAsTouchedInternal(i),this.flushSync();});}markAsTouchedInternal(i){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!i?.skipDescendants))for(let e of this.structure.children())e.markAsTouchedInternal();}markAsDirty(){this.nodeState.markAsDirty();}markAsPristine(){this.nodeState.markAsPristine();}markAsUntouched(){this.nodeState.markAsUntouched();}reset(i){q(()=>this._reset(i));}_reset(i){this.pendingSync()?.abort(),i!==void 0&&this.value.set(i),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.formFieldBindings())e.reset();for(let e of this.structure.materializedChildren())e._reset();}reloadValidation(){q(()=>this._reloadValidation());}_reloadValidation(){let i=this.logicNode.logic.getMetadataKeys();for(let e of i)e[Oo]&&this.metadata(e).reload?.();for(let e of this.structure.children())e._reloadValidation();}controlValueSignal(){let i=Wd$1(this.value);i.rawSet=i.set,i.set=t=>{i.rawSet(t),this.markAsDirty(),this.debounceSync();};let e=i.update;return i.update=t=>{e(t),this.markAsDirty(),this.debounceSync();},i}sync(){this.value.set(this.controlValue());}flushSync(){let i=this.pendingSync();i&&!i.signal.aborted&&(i.abort(),this.sync());}async debounceSync(){let i=q(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(i){let e=new AbortController,t=i(e.signal);if(t&&(this.pendingSync.set(e),await t,e.signal.aborted))return}this.structure.isOrphaned()||this.sync();}static newRoot(i,e,t,r){return r.newRoot(i,e,t,r)}createStructure(i){return i.kind==="root"?new wo(this,i.logic,i.fieldManager,i.value,this.newChild.bind(this)):new To(this,i.logic,i.parent,i.identityInParent,i.initialKeyInParent,this.newChild.bind(this))}newChild(i,e,t){let r,o;return t?(r=this.pathNode.getChild(Ht),o=this.structure.logic.getChild(Ht)):(r=this.pathNode.getChild(i),o=this.structure.logic.getChild(i)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:r,logic:o,initialKeyInParent:i,identityInParent:e,fieldAdapter:this.fieldAdapter})}},ed=De(()=>[]),td=De(()=>false);function Xs(n,i){return n?i&&n.element.compareDocumentPosition(i.element)&Node.DOCUMENT_POSITION_PRECEDING?i:n:i}var So=class{node;selfTouched=O(false);selfDirty=O(false);markAsTouched(){this.selfTouched.set(true);}markAsDirty(){this.selfDirty.set(true);}markAsPristine(){this.selfDirty.set(false);}markAsUntouched(){this.selfTouched.set(false);}formFieldBindings=O([]);constructor(i){this.node=i;}dirty=De(()=>{let i=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(i,(e,t)=>t||e.nodeState.dirty(),Ks)});touched=De(()=>{let i=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(i,(e,t)=>t||e.nodeState.touched(),Ks)});disabledReasons=De(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:Ve});disabled=De(()=>!!this.disabledReasons().length);readonly=De(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??false);hidden=De(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??false);name=De(()=>{let i=this.node.structure.parent;return i?`${i.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=De(()=>{if(this.node.logicNode.logic.hasMetadata(ko)){let e=this.node.logicNode.logic.getMetadata(ko).compute(this.node.context);if(e)return t=>e(this.node.context,t)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=De(()=>this.hidden()||this.disabled()||this.readonly())},Io=class{newRoot(i,e,t,r){return new Gi({kind:"root",fieldManager:i,value:e,pathNode:t,logic:t.builder.build(),fieldAdapter:r})}newChild(i){return new Gi(i)}createNodeState(i){return new So(i)}createValidationState(i){return new xo(i)}createStructure(i,e){return i.createStructure(e)}},Ro=class{injector;rootName;submitOptions;constructor(i,e,t){this.injector=i,this.rootName=e??`${this.injector.get(Oo$1)}.form${id++}`,this.submitOptions=t;}structures=new Set;createFieldManagementEffect(i){Tt(()=>{let e=new Set;this.markStructuresLive(i,e);for(let t of this.structures)e.has(t)||(this.structures.delete(t),q(()=>t.destroy()));},{injector:this.injector});}markStructuresLive(i,e){e.add(i);for(let t of i.children())this.markStructuresLive(t.structure,e);}},id=0,ol=new v("");function nd(n){let i,e,t;return n.length===3?[i,e,t]=n:n.length===2?Gc(n[1])?[i,e]=n:[i,t]=n:[i]=n,[i,e,t]}function Fo(...n){let[i,e,t]=nd(n),r=t?.injector??m$1($),o=fn(r,()=>wr.rootCompile(e)),c=new Ro(r,t?.name,t?.submission),h=t?.adapter??new Io,x=Gi.newRoot(c,i,o,h);c.createFieldManagementEffect(x.structure);let{experimentalWebMcpTool:R}=t??{};if(R){let V=fn(r,()=>m$1(ol,{optional:!0}));V&&fn(r,()=>V(x.fieldTree,{name:R.name,description:R.description}));}return x.fieldTree}var Sr=class{kind="compat";control;fieldTree;context;message;constructor({context:i,kind:e,control:t}){this.context=i,this.kind=e,this.control=t;}};function al(n){if(n.length===0)return null;let i={};for(let e of n)i[e.kind]=e instanceof Sr?e.context:e;return i}function sl(n,i){return n===null?[]:Object.entries(n).map(([e,t])=>new Sr({context:t,kind:e,control:i}))}var rd=new v("");function zg(n,i){Rr(n);let e=st.unwrapFieldPath(n),t;typeof i=="function"||typeof i=="string"?t=i:t=i?.when,e.builder.addDisabledReasonRule(r=>{let o=true;return typeof t=="string"?o=t:t&&(o=t(r)),typeof o=="string"?{fieldTree:r.fieldTree,message:o}:o?{fieldTree:r.fieldTree}:void 0});}function xi(n,i){return n instanceof Function?n(i):n}function ul(n){return typeof n=="number"?isNaN(n):n===""||n===false||n==null}function ll(n){return n===void 0?[]:Array.isArray(n)?n:[n]}function Ho(n,i){Rr(n),st.unwrapFieldPath(n).builder.addSyncErrorRule(t=>il(i(t),t.fieldTree));}function od(n){return new Vo(n)}function ad(n,i){return new Lo(n,i)}function sd(n){return new Bo(n)}var ki=class{__brand=void 0;kind="";fieldTree;message;constructor(i){i&&Object.assign(this,i);}},Vo=class extends ki{kind="required"},Lo=class extends ki{min;kind="min";constructor(i,e){super(e),this.min=i;}};var Bo=class extends ki{kind="email"},Or=class extends ki{kind="parse"};var ld=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function Hg(n,i){Ho(n,e=>{if(!(i?.when&&!i.when(e))&&!ul(e.value())&&!ld.test(e.value()))return i?.error?xi(i.error,e):sd({message:xi(i?.message,e)})});}function Gg(n,i,e){let t=lt();yi(n,t,r=>{return i}),yi(n,Po,({state:r})=>r.metadata(t)()),yi(n,Ao,()=>Po),Ho(n,r=>{let o=r.value();if(o===null||Number.isNaN(o))return;let c=r.state.metadata(t)();if(!(c===void 0||Number.isNaN(c))&&o<c)return ad(c,{message:xi(e?.message,r)})});}function Dr(n,i){let e=yi(n,lt(),t=>i?.when?i.when(t):true);yi(n,No,({state:t})=>t.metadata(e)()),Ho(n,t=>{if(t.state.metadata(e)()&&ul(t.value()))return i?.error?xi(i.error,t):od({message:xi(i?.message,t)})});}function cd(n,i,e){let t=Wd$1({source:n,computation:()=>[],equal:Ve}),r=c=>{let h=e(c);t.set(ll(h.error)),h.value!==void 0&&i(h.value),t.set(ll(h.error));},o=()=>{t.set([]);};return {errors:t.asReadonly(),setRawValue:r,reset:o}}var Uo=class{field;constructor(i){this.field=i;}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return !this.field().disabled()}get errors(){return al(this.field().errors())}get pristine(){return !this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return !this.field().touched()}get status(){if(this.field().disabled())return "DISABLED";if(this.field().valid())return "VALID";if(this.field().invalid())return "INVALID";if(this.field().pending())return "PENDING";throw new A(1910,false)}valueAccessor=null;hasValidator(i){return i===ol$1.required?this.field().required():false}updateValueAndValidity(){}},zo={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},dd=(()=>{let n={};for(let i of Object.keys(zo))n[zo[i]]=i;return n})();function Go(n,i){let e=dd[i];return n[e]?.()}var Wo=Object.values(zo);function Nr(){return {}}function Wt(n,i,e){return n[i]!==e?(n[i]=e,true):false}function md(n,i,e){let t;if(pl(n)&&e.isBadInput(n))return {error:new Or};switch(n.type){case "checkbox":return {value:n.checked};case "number":case "range":case "datetime-local":if(t=q(i),typeof t=="number"||t===null)return {value:n.value===""?null:n.valueAsNumber};break;case "date":case "month":case "time":case "week":if(t=q(i),t===null||t instanceof Date)return {value:n.valueAsDate};if(typeof t=="number")return {value:n.valueAsNumber};break}if(n.tagName==="INPUT"&&n.type==="text"&&(t??=q(i),typeof t=="number"||t===null)){if(n.value==="")return {value:null};let r=Number(n.value);return Number.isNaN(r)?{error:new Or}:{value:r}}return {value:n.value}}function cl(n,i){switch(n.type){case "checkbox":n.checked=i;return;case "radio":n.checked=i===n.value;return;case "number":case "range":case "datetime-local":if(typeof i=="number"){dl(n,i);return}else if(i===null){n.value="";return}break;case "date":case "month":case "time":case "week":if(i===null||i instanceof Date){n.valueAsDate=i;return}else if(typeof i=="number"){dl(n,i);return}}if(n.tagName==="INPUT"&&n.type==="text"){if(typeof i=="number"){n.value=isNaN(i)?"":String(i);return}if(i===null){n.value="";return}}n.value=i;}function dl(n,i){isNaN(i)?n.value="":n.valueAsNumber=i;}function pl(n){return n.tagName==="INPUT"}function ud(n){return n.type==="date"||n.type==="datetime-local"||n.type==="month"||n.type==="time"||n.type==="week"}function pd(n,i){let e=n.getUTCFullYear(),t=String(n.getUTCMonth()+1).padStart(2,"0");if(i==="month")return `${e}-${t}`;let r=String(n.getUTCDate()).padStart(2,"0");return `${e}-${t}-${r}`}function hl(n,i,e){return i instanceof Date&&(n==="min"||n==="max")&&(e==="date"||e==="month")?pd(i,e):i}function hd(n,i){n.listenToCustomControlModel(t=>i.state().controlValue.set(t)),n.listenToCustomControlOutput("touch",()=>i.state().markAsTouched()),i.registerAsBinding(n.customControl);let e=Nr();return ()=>{let t=i.state(),r=t.controlValue();Wt(e,"controlValue",r)&&n.setCustomControlModelInput(r);for(let o of Wo){let c;if(o==="errors"?c=i.errors():c=Go(t,o),Wt(e,o,c)&&(n.setInputOnDirectives(o,c),i.elementAcceptsNativeProperty(o)&&!n.customControlHasInput(o))){let h=hl(o,c,i.nativeFormElement.type);IQ(i.renderer,i.nativeFormElement,o,h);}}}}function _d(n){return typeof n=="object"&&n!==null}function fd(n,i){let e=Nr();i.controlValueAccessor.registerOnChange(r=>{e.controlValue=r,i.state().controlValue.set(r);}),i.controlValueAccessor.registerOnTouched(()=>i.state().markAsTouched());let t=i.injector.get(Pa,null,{optional:true,self:true});if(t){let r;for(let x of t)_d(x)&&x.registerOnValidatorChange&&(r??=O(0),x.registerOnValidatorChange(()=>{r.update(R=>R+1);}));let o=t.map(x=>typeof x=="function"?x:x.validate.bind(x)),c=ol$1.compose(o),h=De(()=>{r?.();let x=c?c(i.interopNgControl.control):null;return sl(x,i.interopNgControl.control)});i.parseErrorsSource.set(h);}return i.registerAsBinding({reset:()=>{let r=i.state().value();e.controlValue=r,q(()=>i.controlValueAccessor.writeValue(r));}}),()=>{let r=i.state(),o=r.value();Wt(e,"controlValue",o)&&q(()=>i.controlValueAccessor.writeValue(o));for(let c of Wo){let h=Go(r,c);if(Wt(e,c,h)){let x=n.setInputOnDirectives(c,h);c==="disabled"&&i.controlValueAccessor.setDisabledState?q(()=>i.controlValueAccessor.setDisabledState(h)):!x&&i.elementAcceptsNativeProperty(c)&&IQ(i.renderer,i.nativeFormElement,c,h);}}}}function gd(n,i,e){if(typeof MutationObserver!="function")return;let t=new MutationObserver(r=>{r.some(o=>bd(o))&&i();});t.observe(n,{attributes:true,attributeFilter:["value"],characterData:true,childList:true,subtree:true}),e.onDestroy(()=>t.disconnect());}function bd(n){if(n.type==="childList"||n.type==="characterData"){if(n.target instanceof Comment)return  false;for(let i of n.addedNodes)if(!(i instanceof Comment))return  true;for(let i of n.removedNodes)if(!(i instanceof Comment))return  true;return  false}return n.type==="attributes"&&n.target instanceof HTMLOptionElement}function vd(n,i,e,t){let r=false,o=i.nativeFormElement,c=cd(()=>i.state().value(),x=>i.state().controlValue.set(x),x=>md(o,i.state().value,t));e.set(c.errors),i.onReset=()=>{c.reset();let x=i.state().value();h.controlValue=x,cl(o,x);},n.listenToDom("input",()=>c.setRawValue(void 0)),n.listenToDom("blur",()=>i.state().markAsTouched()),pl(o)&&ud(o)&&t.watchValidity(i.destroyRef,o,()=>c.setRawValue(void 0)),i.registerAsBinding(),o.tagName==="SELECT"&&gd(o,()=>{r&&(o.value=i.state().controlValue());},i.destroyRef);let h=Nr();return ()=>{let x=i.state();for(let V of Wo){let se=Go(x,V);if(Wt(h,V,se)&&(n.setInputOnDirectives(V,se),i.elementAcceptsNativeProperty(V))){let pe=hl(V,se,o.type);IQ(i.renderer,o,V,pe);}}let R=x.controlValue();Wt(h,"controlValue",R)&&cl(o,R),r=true;}}var _l=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=P$1({token:n,factory:e=>yd.\u0275fac(e),providedIn:"root"})}return n})(),yd=(()=>{class n extends _l{document=m$1(z);cspNonce=m$1(Fc$1,{optional:true});injectedStyles=new WeakMap;watchValidity(e,t,r){let o=t.getRootNode();this.injectedStyles.has(o)||this.injectedStyles.set(o,this.createTransitionStyle(o));let c=h=>{let x=h;(x.animationName==="ng-valid"||x.animationName==="ng-invalid")&&r();};t.addEventListener("animationstart",c),e.onDestroy(()=>{t.removeEventListener("animationstart",c);});}isBadInput(e){return e.validity?.badInput??false}createTransitionStyle(e){let t=this.document.createElement("style");return this.cspNonce&&(t.nonce=this.cspNonce),t.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,e.nodeType===9?e.head?.appendChild(t):e.appendChild(t),t}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove();}static \u0275fac=(()=>{let e;return function(r){return (e||(e=Ft(n)))(r||n)}})();static \u0275prov=P$1({token:n,factory:n.\u0275fac})}return n})(),xd=Symbol(),ml=new v(""),fl=(()=>{class n{field=Cs.required({alias:"formField"});state=De(()=>this.field()());renderer=m$1(ot);destroyRef=m$1(tn);injector=m$1($);element=m$1(j).nativeElement;elementIsNativeFormElement=TQ(this.element);elementAcceptsTextualValues=M0e(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=m$1(vu$1,{optional:true,self:true});config=m$1(rd,{optional:true});validityMonitor=m$1(_l);parseErrorsSource=O(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new Uo(this.state)}parseErrors=De(()=>this.parseErrorsSource()?.().map(e=>m$2(l({},e),{fieldTree:q(this.state).fieldTree,formField:this}))??[],{equal:Ve});errors=De(()=>this.state().errors().filter(e=>!e.formField||e.formField===this),{equal:Ve});isFieldBinding=false;resetter=()=>{};parseErrorsResetCallback;setParseErrors(e){this.parseErrorsSource.set(e);}set onReset(e){this.parseErrorsResetCallback=e;}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return !this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:LQ(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,De(()=>o(this))]);if(e.length===0)return;let t=Nr();g1({write:()=>{for(let[r,o]of e){let c=o();Wt(t,r,c)&&(c?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r));}}},{injector:this.injector});}focus(e){this.focuser(e);}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value());}registerAsBinding(e){if(this.isFieldBinding)throw new A(1913,false);this.isFieldBinding=true,this.installClassBindingEffect(),e?.focus&&(this.focuser=t=>e.focus(t)),e?.reset&&(this.resetter=()=>e.reset()),Tt(t=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),t(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(c=>c!==this));});},{injector:this.injector});}[xd];\u0275ngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=fd(e,this);else if(e.customControl)this.\u0275ngControlUpdate=hd(e,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=vd(e,this,this.parseErrorsSource,this.validityMonitor);else throw new A(1914,false)}\u0275ngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return  false;switch(e){case "min":case "max":return this._elementAcceptsMinMax??=N0e(this.element);case "minLength":case "maxLength":return this.elementAcceptsTextualValues;case "disabled":case "required":case "readonly":case "name":return  true;default:return  false}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[ft([{provide:ml,useExisting:n},{provide:Ti,useFactory:()=>m$1(n).interopNgControl},{provide:wQ,useFactory:()=>m$1(ml,{self:true})}]),OE("formField")]})}return n})();var kd=["*"];function Cd(n,i){n&1&&(ke(0,"button",7)(1,"icon"),gi$1(2,"close"),Ve$1()());}function Md(n,i){if(n&1&&Fe(0,Cd,3,0,"button",7),n&2){let e=zt(2);Ue(e.loading()?-1:0);}}function wd(n,i){if(n&1&&(ke(0,"a",8)(1,"icon"),gi$1(2,"close"),Ve$1()()),n&2){let e=zt(3);Nr$1("routerLink",e.close());}}function Td(n,i){if(n&1&&Fe(0,wd,3,1,"a",8),n&2){let e=zt(2);Ue(e.loading()?-1:0);}}function Ed(n,i){if(n&1&&Fe(0,Md,1,1)(1,Td,1,1),n&2){let e=zt();Ue(e.close()?.length?1:0);}}function Sd(n,i){n&1&&(Le(0),jt(1,"div",9));}function Id(n,i){if(n&1&&(ke(0,"div",5),jt(1,"mat-spinner",10),ke(2,"p",11),gi$1(3),Ve$1()()),n&2){let e=zt();ge(),Nr$1("diameter",32),ge(2),Yd$1(e.loading());}}function Rd(n,i){if(n&1){let e=AD();ke(0,"footer",12)(1,"button",13),We("click",function(){O_(e);let r=zt();return N_(r.confirm.emit())}),gi$1(2),RD(3,"translate"),Ve$1()();}if(n&2){let e=zt();Oe("max-w-156",!e.full_width()),ge(),Nr$1("disabled",e.confirm_disabled()),ge(),ko$1(" ",e.confirm_text()||l4(3,4,"COMMON.SAVE")," ");}}var Ar=(()=>{class n{constructor(){this.loading=Cs(""),this.heading=Cs("Fullscreen Modal"),this.confirm_text=Cs(""),this.confirm_disabled=Cs(false),this.close=Cs([]),this.hide_confirm=Cs(false),this.hide_close=Cs(false),this.full_width=Cs(false),this.confirm=_Ie(),this.closed=_Ie();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te$1({type:n,selectors:[["fullscreen-modal-shell"],["","fs-modal-shell",""]],inputs:{loading:[1,"loading"],heading:[1,"heading"],confirm_text:[1,"confirm_text"],confirm_disabled:[1,"confirm_disabled"],close:[1,"close"],hide_confirm:[1,"hide_confirm"],hide_close:[1,"hide_close"],full_width:[1,"full_width"]},outputs:{confirm:"confirm",closed:"closed"},ngContentSelectors:kd,decls:10,vars:14,consts:[[1,"bg-base-200","fixed","inset-0","flex","flex-col","items-center","overflow-auto","px-2"],[1,"border-base-300","bg-base-100","fixed","top-0","mx-auto","h-screen","max-w-full","border-x"],[1,"bg-base-200","sticky","top-0","z-10","mx-auto","my-2","flex","h-14","w-full","items-center","justify-between","rounded-sm","border-none","px-4","py-2"],[1,"flex","items-center","text-xl","font-medium","capitalize",3,"innerHTML"],[1,"z-0","mx-auto","h-1/2","w-full","flex-1","space-y-8","p-2"],[1,"flex","h-1/2","w-full","flex-1","flex-col","items-center","justify-center","space-y-4","p-12"],[1,"bg-base-200","fixed","bottom-0","left-1/2","z-10","mx-auto","my-2","flex","w-full","-translate-x-1/2","items-center","justify-end","rounded-sm","border-none","px-4","py-2",3,"max-w-156"],["icon","","matRipple","","mat-dialog-close",""],["icon","","matRipple","",3,"routerLink"],[1,"h-24","w-full"],[3,"diameter"],[1,"text-center","opacity-50"],[1,"bg-base-200","fixed","bottom-0","left-1/2","z-10","mx-auto","my-2","flex","w-full","-translate-x-1/2","items-center","justify-end","rounded-sm","border-none","px-4","py-2"],["btn","","matRipple","",1,"min-w-32",3,"click","disabled"]],template:function(t,r){t&1&&(gn(),ke(0,"div",0),jt(1,"div",1),ke(2,"header",2),jt(3,"h2",3),RD(4,"sanitize"),Fe(5,Ed,2,1),Ve$1(),ke(6,"main",4),Fe(7,Sd,2,0)(8,Id,4,2,"div",5),Ve$1(),Fe(9,Rd,4,6,"footer",6),Ve$1()),t&2&&(ge(),Oe("w-160",!r.full_width())("w-full",r.full_width()),ge(),Oe("max-w-156",!r.full_width()),ge(),Nr$1("innerHTML",l4(4,12,r.heading()),bq),ge(2),Ue(r.hide_close()?-1:5),ge(),Oe("max-w-156",!r.full_width()),ge(),Ue(r.loading()?8:7),ge(2),Ue(!r.loading()&&!r.hide_confirm()?9:-1));},dependencies:[Dt,ci,YQe,Y9e,z9e,Ml$1,Qw,uZ,Zy,NJe,pet],styles:["main[_ngcontent-%COMP%]{scroll-margin-top:60px}"]});}}return n})();var Od=["portal_content"],Dd=["*"];function Nd(n,i){n&1&&SL(0);}function Ad(n,i){if(n&1&&hi$1(0,Nd,1,0,"ng-container",3),n&2){let e=zt(2);Nr$1("ngComponentOutlet",e.component())("ngComponentOutletInjector",e.injector);}}function Pd(n,i){if(n&1&&(jt(0,"div",2),RD(1,"sanitize")),n&2){let e=zt(2);Nr$1("innerHTML",l4(1,1,e.html()),bq);}}function Fd(n,i){n&1&&SL(0);}function Vd(n,i){if(n&1&&hi$1(0,Fd,1,0,"ng-container",4),n&2){let e=zt(2);Nr$1("ngTemplateOutlet",e.template())("ngTemplateOutletContext",e.data());}}function Ld(n,i){if(n&1&&(ke(0,"div",1),Fe(1,Ad,1,2,"ng-container")(2,Pd,2,3,"div",2)(3,Vd,1,2,"ng-container"),Ve$1()),n&2){let e,t=zt();ge(),Ue((e=t.type())==="component"?1:e==="html"?2:3);}}var Be=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275prov=P$1({token:n,factory:n.\u0275fac});}}return n})(),bl=(()=>{class n extends Fs$1{constructor(){super(...arguments),this._element=m$1(j),this._overlay=m$1(l2),this._injector=m$1($),this._view_container_ref=m$1($t),this.x_pos=Cs("end",{alias:"xPosition"}),this.y_pos=Cs("top",{alias:"yPosition"}),this.content=Cs(void 0),this.data=Cs(void 0),this.backdrop=Cs(true),this.hover=Cs(false),this.delay=Cs(0),this.x_offset=Cs(0,{alias:"xOffset"}),this.y_offset=Cs(0,{alias:"yOffset"}),this.type=De(()=>this.content()instanceof hn?"template":this.content()instanceof BW?"component":"html"),this.template=De(()=>this.content()),this.html=De(()=>this.content()),this.component=De(()=>this.content()),this._overlay_ref=null,this._portal_content=Up.required("portal_content",{read:hn}),this._update_injector=Tt(()=>{this.injector=$.create({providers:[{provide:Be,useValue:{data:this.data(),close:()=>this.close()}}],parent:this._injector});});}ngOnInit(){let e=()=>this.hover()?"":this.open(),t=o=>this._canOpenHoverTooltip(o)?this.open():"",r=o=>this._canOpenHoverTooltip(o)?this.close():"";this._element.nativeElement.addEventListener("click",e),this._element.nativeElement.addEventListener("touchend",e),this._element.nativeElement.addEventListener("pointerenter",t),this._element.nativeElement.addEventListener("pointerleave",r),this.subscription("click",()=>this._element.nativeElement.removeEventListener("click",e)),this.subscription("touchend",()=>this._element.nativeElement.removeEventListener("touchend",e)),this.subscription("pointerenter",()=>this._element.nativeElement.removeEventListener("pointerenter",t)),this.subscription("pointerleave",()=>this._element.nativeElement.removeEventListener("pointerleave",r));}ngOnChanges(e){this._overlay_ref&&(e.x_pos||e.y_pos||e.x_offset||e.y_offset||e.content)&&this.open();}ngOnDestroy(){super.ngOnDestroy(),this.close();}open(){this.content()&&this.timeout("open",()=>{let e=this.hover(),t=this.delay();e&&t&&this.timeout("onclose",()=>this.close(),t),this._overlay_ref&&this.close();let r=new zo$1(this._portal_content(),this._view_container_ref),o="end",c="top",h=this.y_pos();this._overlay_ref=this._overlay.create({hasBackdrop:!!this.backdrop()&&!e,positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withDefaultOffsetX(this.x_offset()).withDefaultOffsetY(this.y_offset()).withPositions([{originX:this.x_pos()||o,originY:(h==="top"?"bottom":h=="bottom"?"top":h)||c,overlayX:this.x_pos()||o,overlayY:this.y_pos()||c}])}),this._overlay_ref.attach(r),this.backdrop()&&this.subscription("backdrop",this._overlay_ref.backdropClick().subscribe(()=>this.close()));},50);}close(){this.clearTimeout("open"),this._overlay_ref&&(this._overlay_ref.dispose(),this._overlay_ref=null);}_canOpenHoverTooltip(e){return this.hover()?!("pointerType"in e)||e.pointerType!=="touch":false}static{this.\u0275fac=(()=>{let e;return function(r){return (e||(e=Ft(n)))(r||n)}})();}static{this.\u0275cmp=Te$1({type:n,selectors:[["","customTooltip",""]],viewQuery:function(t,r){t&1&&kE(r._portal_content,Od,5,hn),t&2&&PE();},inputs:{x_pos:[1,"xPosition","x_pos"],y_pos:[1,"yPosition","y_pos"],content:[1,"content"],data:[1,"data"],backdrop:[1,"backdrop"],hover:[1,"hover"],delay:[1,"delay"],x_offset:[1,"xOffset","x_offset"],y_offset:[1,"yOffset","y_offset"]},features:[Pe,At$1],ngContentSelectors:Dd,decls:3,vars:0,consts:[["portal_content",""],["custom-tooltip","",1,"relative","print:hidden"],[3,"innerHTML"],[4,"ngComponentOutlet","ngComponentOutletInjector"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,r){t&1&&(gn(),Le(0),hi$1(1,Ld,4,1,"ng-template",null,0,ND));},dependencies:[K1,S6,pC,pet],styles:["[_nghost-%COMP%]{pointer-events:auto!important}"]});}}return n})();var Bd=["input"],Ud=["formField"],zd=["*"],Fr=class{source;value;constructor(i,e){this.source=i,this.value=e;}},Hd={provide:vu$1,useExisting:An$1(()=>Wi),multi:true},vl=new v("MatRadioGroup"),Gd=new v("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:false})}),Wi=(()=>{class n{_changeDetector=m$1(Dt$1);_value=null;_name=m$1(kt).getId("mat-radio-group-");_selected=null;_isInitialized=false;_labelPosition="after";_disabled=false;_required=false;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new te;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames();}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e==="before"?"before":"after",this._markRadiosForCheck();}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton());}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=true);}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton();}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck();}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck();}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck();}_disabledInteractive=false;ngAfterContentInit(){this._isInitialized=true,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null);});}ngOnDestroy(){this._buttonChanges?.unsubscribe();}_touch(){this.onTouched&&this.onTouched();}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck();});}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t);}));}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Fr(this._selected,this._value));}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck());}writeValue(e){this.value=e,this._changeDetector.markForCheck();}registerOnChange(e){this._controlValueAccessorChangeFn=e;}registerOnTouched(e){this.onTouched=e;}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["mat-radio-group"]],contentQueries:function(t,r,o){if(t&1&&Qi(o,Ci,5),t&2){let c;Ie(c=Ae())&&(r._radios=c);}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",Ee],required:[2,"required","required",Ee],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ee]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[ft([Hd,{provide:vl,useExisting:n}])]})}return n})(),Ci=(()=>{class n{_elementRef=m$1(j);_changeDetector=m$1(Dt$1);_focusMonitor=m$1(jo);_radioDispatcher=m$1(co);_defaultOptions=m$1(Gd,{optional:true});_ngZone=m$1(B);_renderer=m$1(ot);_uniqueId=m$1(kt).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=false;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck());}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)));}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e;}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e);}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e;}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e;}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e;}_disabledInteractive;change=new te;radioGroup;get inputId(){return `${this.id||this._uniqueId}-input`}_checked=false;_disabled=false;_required=false;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=Kt();_injector=m$1($);constructor(){m$1(yn).load(Nl$1);let e=m$1(vl,{optional:true}),t=m$1(new GE("tabindex"),{optional:true});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??false,t&&(this.tabIndex=qd$1(t,0));}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e);}_markForCheck(){this._changeDetector.markForCheck();}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=false);});}ngDoCheck(){this._updateTabIndex();}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,true).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch();}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick);});}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener();}_emitChangeEvent(){this.change.emit(new Fr(this,this._value));}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=true,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent());}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus();}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck());}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault();};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let r=this._inputElement?.nativeElement;r&&(r.setAttribute("tabindex",t+""),this._previousTabIndex=t,Gt$1(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===r&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===r&&this._inputElement.nativeElement.blur());});},{injector:this._injector}));}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Te$1({type:n,selectors:[["mat-radio-button"]],viewQuery:function(t,r){if(t&1&&xn(Bd,5)(Ud,7,j),t&2){let o;Ie(o=Ae())&&(r._inputElement=o.first),Ie(o=Ae())&&(r._rippleTrigger=o.first);}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(t,r){t&1&&We("focus",function(){return r._inputElement.nativeElement.focus()}),t&2&&($e("id",r.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),Oe("mat-primary",r.color==="primary")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("mat-mdc-radio-checked",r.checked)("mat-mdc-radio-disabled",r.disabled)("mat-mdc-radio-disabled-interactive",r.disabledInteractive)("_mat-animation-noopable",r._noopAnimations));},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",Ee],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:qd$1(e)],checked:[2,"checked","checked",Ee],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",Ee],required:[2,"required","required",Ee],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ee]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:zd,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(t,r){t&1&&(gn(),ke(0,"div",2,0)(2,"div",3)(3,"div",4),We("click",function(c){return r._onTouchTargetClick(c)}),Ve$1(),ke(4,"input",5,1),We("change",function(c){return r._onInputInteraction(c)}),Ve$1(),ke(6,"div",6),jt(7,"div",7)(8,"div",8),Ve$1(),ke(9,"div",9),jt(10,"div",10),Ve$1()(),ke(11,"label",11),Le(12),Ve$1()()),t&2&&(Nr$1("labelPosition",r.labelPosition),ge(2),Oe("mdc-radio--disabled",r.disabled),ge(2),Nr$1("id",r.inputId)("checked",r.checked)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),$e("name",r.name)("value",r.value)("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),ge(5),Nr$1("matRippleTrigger",r._rippleTrigger.nativeElement)("matRippleDisabled",r._isRippleDisabled())("matRippleCentered",true),ge(2),Nr$1("for",r.inputId));},dependencies:[Qw,xQe],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  cursor: pointer;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));
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
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
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
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
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
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button label {
  cursor: pointer;
}
.mat-mdc-radio-button label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-radio-button .mdc-radio--disabled + label {
  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
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
  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));
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
  height: var(--mat-radio-touch-target-size, 48px);
  width: var(--mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return n})(),Vr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=se({type:n});static \u0275inj=ie({imports:[Ml$1,Ci,vt]})}return n})();var xl=(()=>{class n{constructor(){this.url=m$1(rae);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te$1({type:n,selectors:[["image-viewer"]],decls:5,vars:1,consts:[[1,"bg-base-200","h-screen","w-screen"],["auth","",1,"h-full","w-full","object-contain","object-center",3,"source"],["icon","","matRipple","","mat-dialog-close","",1,"bg-base-100","absolute","top-1","right-1"]],template:function(t,r){t&1&&(ke(0,"div",0),jt(1,"img",1),ke(2,"button",2)(3,"icon"),gi$1(4,"close"),Ve$1()()()),t&2&&(ge(),Nr$1("source",r.url));},dependencies:[YQe,Nt,Y9e,z9e],encapsulation:2});}}return n})();var Wd=(n,i,e)=>({file:n,is_public:i,permissions:e});function jd(n,i){if(n&1){let e=AD();ke(0,"div",7)(1,"label"),gi$1(2,"Permissions"),Ve$1(),ke(3,"mat-form-field",11)(4,"mat-select",12),We("ngModelChange",function(r){O_(e);let o=zt();return N_(o.permissions.set(r))}),ke(5,"mat-option",13),gi$1(6,"None"),Ve$1(),ke(7,"mat-option",14),gi$1(8,"Support"),Ve$1(),ke(9,"mat-option",15),gi$1(10,"Admin"),Ve$1()(),KK(),Ve$1()();}if(n&2){let e=zt();ge(4),Nr$1("ngModel",e.permissions()),QK();}}var Cl=(()=>{class n{constructor(){this._dialog_ref=m$1(ZS),this._data=m$1(rae),this.file=this._data.file,this.is_public=O(!!this._data.is_public),this.permissions=O("none"),this.file=this._data.file;}close(){this._dialog_ref.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te$1({type:n,selectors:[["upload-permissions-modal"]],decls:18,vars:7,consts:[[1,"bg-base-200","sticky","top-0","z-10","m-2","w-[calc(100%-1rem)]","rounded-sm","border-none","p-2"],[1,"px-2","text-xl","font-medium"],["icon","","matRipple","","mat-dialog-close",""],[1,"min-w-[20rem]","space-y-2","px-4","py-2"],[1,"flex","flex-col"],["appearance","outline",1,"no-subscript"],["matInput","","disabled","true","placeholder","File Name",3,"ngModel"],[1,"flex","flex-col","space-y-2"],[1,"border-base-200","flex","items-center","justify-end","space-x-2","border-t","px-4","py-2"],["btn","","matRipple","","mat-dialog-close","",1,"inverse","w-32"],["btn","","matRipple","",1,"w-32",3,"mat-dialog-close"],["appearance","outline"],[3,"ngModelChange","ngModel"],["value","none"],["value","support"],["value","admin"]],template:function(t,r){t&1&&(ke(0,"header",0)(1,"h2",1),gi$1(2,"Upload File"),Ve$1(),ke(3,"button",2)(4,"icon"),gi$1(5,"close"),Ve$1()()(),ke(6,"main",3)(7,"div",4)(8,"label"),gi$1(9,"File Name"),Ve$1(),ke(10,"mat-form-field",5),jt(11,"input",6),KK(),Ve$1()(),Fe(12,jd,11,1,"div",7),Ve$1(),ke(13,"footer",8)(14,"button",9),gi$1(15," Cancel "),Ve$1(),ke(16,"button",10),gi$1(17," Upload "),Ve$1()()),t&2&&(ge(11),Nr$1("ngModel",r.file.name),QK(),ge(),Ue(r.is_public()?-1:12),ge(4),Nr$1("mat-dialog-close",J8(3,Wd,r.file,r.is_public(),r.permissions())));},dependencies:[Y9e,z9e,QN,A3,F0e,sB,x0e,GQ,pi,ui,s3,YQe,eJe,JXe,Ml$1,Qw],encapsulation:2});}}return n})();var Kd=["image_list"],qd=["file_input"];function $d(n,i){if(n&1){let e=AD();ke(0,"div",15),jt(1,"img",16),ke(2,"div",17),jt(3,"div",18),ke(4,"div",19)(5,"button",20),We("click",function(){let r=O_(e).$implicit,o=zt();return N_(o.copyLink(r))}),ke(6,"icon"),gi$1(7,"link"),Ve$1()(),ke(8,"button",20),We("click",function(){let r=O_(e).$implicit,o=zt();return N_(o.viewImage(r))}),ke(9,"icon"),gi$1(10,"visibility"),Ve$1()(),ke(11,"button",20),We("click",function(){let r=O_(e).$implicit,o=zt();return N_(o.removeImage(r))}),ke(12,"icon"),gi$1(13,"close"),Ve$1()()()()();}if(n&2){let e=i.$implicit,t=zt();CD("transform","translate(-"+t.offset()+"00%)"),ge(),Nr$1("source",e);}}function Xd(n,i){if(n&1&&jt(0,"mat-progress-spinner",22),n&2){let e=zt().$implicit;Nr$1("value",e.progress)("diameter",64);}}function Yd(n,i){n&1&&(ke(0,"icon",23),gi$1(1,"warning"),Ve$1());}function Qd(n,i){n&1&&(ke(0,"div",24)(1,"icon",25),gi$1(2,"refresh"),Ve$1()());}function Zd(n,i){if(n&1){let e=AD();ke(0,"div",21),We("click",function(){let r=O_(e).$implicit,o=zt();return N_(o.retryUpload(r))}),Fe(1,Xd,1,2,"mat-progress-spinner",22),Fe(2,Yd,2,0,"icon",23),Fe(3,Qd,3,0,"div",24),Ve$1();}if(n&2){let e=i.$implicit,t=zt();CD("transform","translate(-"+t.offset()+"00%)"),Nr$1("matTooltip",e.error),ge(),Ue(e.error?-1:1),ge(),Ue(e.error?2:-1),ge(),Ue(e.error?3:-1);}}function Jd(n,i){if(n&1){let e=AD();ke(0,"button",26),We("click",function(){O_(e);let r=zt();return N_(r.previousOffset())}),ke(1,"icon"),gi$1(2,"chevron_left"),Ve$1()();}if(n&2){let e=zt();Nr$1("disabled",e.offset()===0);}}function em(n,i){if(n&1){let e=AD();ke(0,"button",27),We("click",function(){O_(e);let r=zt();return N_(r.nextOffset())}),ke(1,"icon"),gi$1(2,"chevron_right"),Ve$1()();}if(n&2){let e=zt();Nr$1("disabled",e.offset()>=e.length()-e.view_space());}}function tm(n,i){if(n&1){let e=AD();ke(0,"mat-chip-row",28),We("removed",function(){let r=O_(e).$implicit,o=zt();return N_(o.removeImage(r))}),ke(1,"div",29),gi$1(2),Ve$1(),ke(3,"button",30)(4,"icon"),gi$1(5,"cancel"),Ve$1()()();}if(n&2){let e=i.$implicit;ge(2),Yd$1(e),ge(),$e("aria-label","Remove "+e);}}var Ml=(()=>{class n extends Fs$1{constructor(){super(...arguments),this._clipboard=m$1(yH),this._uploads=m$1(c7e),this._dialog=m$1(QS),this._injector=m$1($),this._upload_completion_effect=Tt(()=>{let e=this.upload_list(),t=this.upload_ids();for(let r of t){let o=e.find(c=>c?.id===r);o&&o.progress>=100&&(this.addImageUrl(o.link),this.upload_ids.set(this.upload_ids().filter(c=>c!==r)));}},{injector:this._injector}),this.list=O([]),this.upload_map={},this.upload_ids=O([]),this.upload_list=O([]),this.offset=O(0),this.view_space=O(0),this.separators=[188,13],this.uploads=De(()=>{let e=this.upload_ids();return this.upload_list().filter(t=>e.includes(t?.id))}),this.length=De(()=>this.list().length+this.upload_list().length+1),this._list_el=Up("image_list"),this._file_input=Up("file_input"),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e;}ngAfterViewInit(){this.updateViewSpace();}updateViewSpace(){this.timeout("init_view_space",()=>{let e=this._list_el()?.nativeElement?.getBoundingClientRect();e&&this.view_space.set(Math.floor(e.width/152));},100);}copyLink(e){this._clipboard.copy(e),jV("Copied image URL to clipboard");}viewImage(e){this._dialog.open(xl,{data:e});}removeImage(e){this.setValue(this.list().filter(t=>t!==e));}addImage(e){e.value&&(this.setValue(Ri([...this.list(),e.value])),e.chipInput.inputElement.value="");}addImageUrl(e){this.setValue(Ri([...this.list(),e]));}retryUpload(e){e.error&&(e.error=null,e.upload.resume());}previousOffset(){this.offset.update(e=>e-1);}nextOffset(){this.offset.update(e=>e+1);}async uploadImages(e){let t=e.target;if(t?.files){let r=t.files;if(r.length){this.interval("update_status",()=>this._updateUploadHistory());for(let o=0;o<r.length;o++){let c=await this._uploads.uploadFileWithPermissions(r[o]);this.upload_ids.set([...this.upload_ids(),c]),this._file_input().nativeElement.value="";}}}}setValue(e){let t=e||[];this.list.set(t),this._onChange&&this._onChange(t);}writeValue(e){this.list.set(e||[]);}async _updateUploadHistory(){let e=this.upload_ids();if(e.length===0)return;let r=this._uploads.upload_list().filter(c=>e.find(h=>h===c?.id)),o=r.filter(c=>c.progress>=100);this.upload_list.set(r),o.forEach(c=>{console.log("ID:",l({},c)),this.upload_map[c?.id]=c.upload?.id||c?.id,delete c.upload;}),o.length>=e.length&&this.clearInterval("update_status");}static{this.\u0275fac=(()=>{let e;return function(r){return (e||(e=Ft(n)))(r||n)}})();}static{this.\u0275cmp=Te$1({type:n,selectors:[["image-list-field"]],viewQuery:function(t,r){t&1&&kE(r._list_el,Kd,5)(r._file_input,qd,5),t&2&&PE(2);},features:[ft([{provide:vu$1,useExisting:An$1(()=>n),multi:true},{provide:$ae,useValue:Cl}]),Pe],decls:23,vars:13,consts:[["image_list",""],["file_input",""],["chipList",""],["images","",1,"relative","mb-2","flex","w-full","items-center","space-x-2","overflow-hidden","py-2",3,"resize"],["image","",1,"border-base-200","hover:border-base-300","hover:bg-base-200","relative","flex","h-32","w-36","shrink-0","cursor-pointer","flex-col","items-center","justify-center","rounded-xl","border-2","border-dashed"],[1,"text-4xl","opacity-60"],[1,"px-4","text-center","opacity-60"],["type","file",1,"absolute","inset-0","h-32","w-32","cursor-pointer","opacity-0",3,"change"],["image","",1,"bg-base-200","relative","h-32","w-36","shrink-0","overflow-hidden","rounded-sm","bg-cover","bg-center",3,"transform"],["upload","",1,"border-base-content/10","/5","bg-base-200","flex","h-32","w-36","shrink-0","items-center","justify-center","rounded-sm","border","bg-cover","bg-center",3,"transform","matTooltip"],["icon","","matRipple","",1,"bg-base-100","absolute","top-1/2","left-0","-translate-y-1/2","transform",3,"disabled"],["icon","","matRipple","",1,"bg-base-100","absolute","top-1/2","right-0","-translate-y-1/2","transform",3,"disabled"],["appearance","outline",1,"w-full"],["aria-label","Image List"],[3,"matChipInputTokenEnd","placeholder","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur"],["image","",1,"bg-base-200","relative","h-32","w-36","shrink-0","overflow-hidden","rounded-sm","bg-cover","bg-center"],["auth","",1,"pointer-events-none","absolute","top-1/2","left-1/2","z-10","-translate-x-1/2","-translate-y-1/2","object-contain",3,"source"],["overlay","",1,"text-base-100","absolute","inset-0","z-20"],["bg","",1,"absolute","inset-0","bg-black","opacity-0"],["actions","",1,"absolute","top-0","right-0","left-0","flex","items-center","justify-center","space-x-2","opacity-0"],["icon","",3,"click"],["upload","",1,"border-base-content/10","/5","bg-base-200","flex","h-32","w-36","shrink-0","items-center","justify-center","rounded-sm","border","bg-cover","bg-center",3,"click","matTooltip"],["mode","determinate",3,"value","diameter"],[1,"text-error","text-6xl"],["overlay","",1,"text-base-100","hover:bg-base-content","hover:bg-opacity-50","absolute","inset-0","flex","items-center","justify-center"],[1,"text-3xl","opacity-0"],["icon","","matRipple","",1,"bg-base-100","absolute","top-1/2","left-0","-translate-y-1/2","transform",3,"click","disabled"],["icon","","matRipple","",1,"bg-base-100","absolute","top-1/2","right-0","-translate-y-1/2","transform",3,"click","disabled"],[3,"removed"],[1,"max-w-md","truncate"],["matChipRemove",""]],template:function(t,r){if(t&1&&(ke(0,"div",3,0),We("resize",function(){return r.updateViewSpace()},Iq),ke(2,"div",4)(3,"icon",5),gi$1(4,"add"),Ve$1(),ke(5,"p",6),gi$1(6),RD(7,"translate"),Ve$1(),ke(8,"input",7,1),We("change",function(c){return r.uploadImages(c)}),Ve$1()(),t8(10,$d,14,3,"div",8,e8),t8(12,Zd,4,6,"div",9,e8),Fe(14,Jd,3,1,"button",10),Fe(15,em,3,1,"button",11),Ve$1(),ke(16,"mat-form-field",12)(17,"mat-chip-grid",13,2),t8(19,tm,6,2,"mat-chip-row",null,e8),Ve$1(),ke(21,"input",14),RD(22,"translate"),We("matChipInputTokenEnd",function(c){return r.addImage(c)}),Ve$1()()),t&2){let o=LE(18);ge(2),CD("transform","translate(-"+r.offset()+"00%)"),ge(4),ko$1(" ",l4(7,9,"COMMON.IMAGE_UPLOADS")," "),ge(4),n8(r.list()),ge(2),n8(r.uploads()),ge(2),Ue(r.length()>r.view_space()?14:-1),ge(),Ue(r.length()>r.view_space()?15:-1),ge(4),n8(r.list()),ge(2),Nr$1("placeholder",l4(22,11,"COMMON.IMAGE_ADD_URL"))("matChipInputFor",o)("matChipInputSeparatorKeyCodes",r.separators)("matChipInputAddOnBlur",true);}},dependencies:[QN,A3,aet,oet,set,iet,hle,Dt,ci,DJe,Zce,YQe,Nt,NJe],styles:["[_nghost-%COMP%]{width:100%}[overlay][_ngcontent-%COMP%]{transition:background .2s}[image][_ngcontent-%COMP%]:hover   [actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%]:hover > icon[_ngcontent-%COMP%]{opacity:1!important}[image][_ngcontent-%COMP%]:hover   [bg][_ngcontent-%COMP%]{opacity:.4!important}[actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%] > icon[_ngcontent-%COMP%]{transition:opacity .2s}[image][_ngcontent-%COMP%]{transition:transform .2s}"]});}}return n})();function im(n,i){if(n&1&&(jt(0,"div",1),RD(1,"safe")),n&2){let e=zt();Nr$1("innerHTML",wD(1,1,e.changelog(),"html"),bq);}}function nm(n,i){n&1&&(ke(0,"div",2)(1,"icon",3),gi$1(2,"close"),Ve$1(),ke(3,"div",4),gi$1(4,"No changelog"),Ve$1()());}var wl=(()=>{class n{constructor(){this._data=m$1(rae),this.loading=O(false),this.changelog=De(()=>lt$1(this._data.changelog||"",{async:false}));}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te$1({type:n,selectors:[["changelog-modal"]],decls:3,vars:3,consts:[[3,"heading","hide_confirm"],[1,"markdown",3,"innerHTML"],[1,"flex","flex-col","items-center","justify-center","space-y-2"],[1,"text-3xl"],[1,"text"]],template:function(t,r){t&1&&(ke(0,"fullscreen-modal-shell",0),Fe(1,im,2,4,"div",1)(2,nm,5,0,"div",2),Ve$1()),t&2&&(Nr$1("heading","Changelog")("hide_confirm",true),ge(),Ue(r.changelog()?1:2));},dependencies:[Ar,YQe,c3],encapsulation:2});}}return n})();function rm(n,i){if(n&1&&(ke(0,"div",1),gi$1(1),Ve$1()),n&2){let e=zt(2);ge(),ko$1(" ",e.initials," ");}}function om(n,i){if(n&1&&jt(0,"img",2),n&2){let e=zt(2);Nr$1("alt",e.initials)("source",e.user().photo);}}function am(n,i){if(n&1&&(ke(0,"div",0),Fe(1,rm,2,1,"div",1)(2,om,1,2,"img",2),Ve$1()),n&2){let e=zt();$e("user-id",e.user().id),ge(),Ue(e.user().photo?2:1);}}var Lr=(()=>{class n{constructor(){this.user=Cs(void 0),this.is_valid=De(()=>{let e=this.user();if(!e)return  false;let t=(e.name||"").trim(),r=(e.email||"").trim();return t.startsWith("<empty>")||r.startsWith("<empty>")?false:!!(t||r||e.first_name||e.last_name)});}get initials(){let e=this.user();if(!e)return "NA";if(e.first_name&&e.last_name)return `${e.first_name[0]}${e.last_name[0]}`;let t=(e.name||"").replace(/<[^>]*>/g," ").trim();t||(t=(e.email||e.name||"").split("@")[0]);let r=t.replace(/[()[\]\-+=\\/@<>]+/gi," ").split(/\s+/).filter(Boolean);return r.length===0?"NA":r.length>1?`${r[0][0]}${r[r.length-1][0]}`:r[0].slice(0,2)}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te$1({type:n,selectors:[["a-user-avatar"]],inputs:{user:[1,"user"]},decls:1,vars:1,consts:[[1,"border-base-100","bg-base-200","flex","h-[2.5em]","w-[2.5em]","items-center","justify-center","overflow-hidden","rounded-full","border-2"],["initials","",1,"text-base-content","uppercase","opacity-60"],["auth","",1,"flex","h-full","w-full","items-center","justify-center","object-cover","object-center",3,"alt","source"]],template:function(t,r){t&1&&Fe(0,am,3,2,"div",0),t&2&&Ue(r.is_valid()?0:-1);},dependencies:[Nt],encapsulation:2});}}return n})();function sm(n,i){if(n&1&&(ke(0,"mat-option",8),gi$1(1),Ve$1()),n&2){let e=i.$implicit;Nr$1("value",e.display_name||e.name),ge(),ko$1(" ",e.display_name||e.name," ");}}function lm(n,i){if(n&1&&(ke(0,"mat-option",8),gi$1(1),Ve$1()),n&2){let e=i.$implicit;Nr$1("value",e?.name||e),ge(),ko$1(" ",e.name||e," ");}}function cm(n,i){if(n&1&&(ke(0,"div",5)(1,"label"),gi$1(2),RD(3,"translate"),Ve$1(),ke(4,"mat-form-field",6)(5,"mat-select",7),RD(6,"translate"),t8(7,lm,2,2,"mat-option",8,e8),Ve$1(),KK(),Ve$1()()),n&2){let e=zt();ge(2),Yd$1(l4(3,3,"COMMON.SUPPORT_TYPE")),ge(3),Nr$1("placeholder",l4(6,5,"COMMON.SUPPORT_TYPE"))("formField",e.form.issue_type),QK(),ge(2),n8(e.support_request_types());}}function dm(n,i){n&1&&(ke(0,"mat-error",11),gi$1(1),RD(2,"translate"),Ve$1()),n&2&&(ge(),ko$1(" ",l4(2,1,"COMMON.SUPPORT_DESCRIPTION_REQUIRED")," "));}function mm(n,i){if(n&1&&(ke(0,"div",12)(1,"label",10),gi$1(2),RD(3,"translate"),Ve$1(),jt(4,"image-list-field",14),KK(),Ve$1()),n&2){let e=zt();ge(2),Yd$1(l4(3,2,"COMMON.SUPPORT_IMAGES")),ge(2),Nr$1("formField",e.form.images),QK();}}var El=(()=>{class n{constructor(){this._dialog_ref=m$1(ZS),this._org=m$1(WS),this._settings=m$1(Ys$1),this._support_email=this._settings.signal("support_email","support@place.tech"),this._support_issue_types=this._settings.signal("support_issue_types",[]),this._allow_images=this._settings.signal("allow_support_ticket_images",false),this.loading=O(false),this.model=O({name:"",email:"",location:"",description:"",issue_type:"",images:[]}),this.form=Fo(this.model,e=>{Dr(e.name),Dr(e.email),Dr(e.description);}),this.desc_error=O(false),this.support_email=this._support_email,this.support_request_types=this._support_issue_types,this.allow_images=this._allow_images,this.buildings=this._org.building_list;}ngOnInit(){let e=so$1();e&&this.model.update(t=>m$2(l({},t),{name:e.name,email:e.email})),this._org.building&&this.model.update(t=>m$2(l({},t),{location:this._org.building.display_name||this._org.building.name}));}async submit(){if(this.loading.set(true),this.form().markAsTouched(),this._updateDescError(),this.form().valid()){let e=this._org.module("smtp","Mailer");if(!e)return GV(_r("COMMON.SUPPORT_NO_MAILER"));let{name:t,email:r,location:o,description:c,images:h,issue_type:x}=this.model(),R=this.support_request_types().find(se=>se.name===x)?.email||this.support_email(),V=_r("COMMON.SUPPORT_MAIL_HEADER",{issue_type:x?" - "+x:""});await e.execute("send_mail",[R,V,`${t}
${r}

${o}

${c.replace(/<[^>]+>/g,"")}

${h.join(`
`)}`,`<p>${t}</p><p>${r}</p><p>${o}</p><p>${c}</p>${h.join("<br>")}`,[],[],[],[],null,`${r}`]),this._dialog_ref.close(),this.loading.set(false),Zv(_r("COMMON.SUPPORT_SUCCESS"));}}_updateDescError(){this.desc_error.set(this.form.description().invalid()&&this.form.description().touched());}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te$1({type:n,selectors:[["support-ticket-modal"]],decls:51,vars:45,consts:[[3,"confirm","heading","loading","confirm_text"],[1,"flex","flex-wrap","items-center","sm:space-x-2"],[1,"flex","flex-1","flex-col"],["appearance","outline"],["matInput","",3,"placeholder","formField"],[1,"flex","flex-col"],["appearance","outline",1,"w-full"],[3,"placeholder","formField"],[3,"value"],[1,""],[1,"mb-4"],[1,"my-2","text-xs"],[1,"pt-4"],[1,"mb-2","text-center","text-xs","italic"],[3,"formField"]],template:function(t,r){t&1&&(ke(0,"fullscreen-modal-shell",0),RD(1,"translate"),We("confirm",function(){return r.submit()}),ke(2,"form")(3,"div",1)(4,"div",2)(5,"label"),gi$1(6),RD(7,"translate"),ke(8,"span"),gi$1(9,"*"),Ve$1()(),ke(10,"mat-form-field",3),jt(11,"input",4),RD(12,"translate"),KK(),ke(13,"mat-error"),gi$1(14),RD(15,"translate"),Ve$1()()(),ke(16,"div",2)(17,"label"),gi$1(18),RD(19,"translate"),ke(20,"span"),gi$1(21,"*"),Ve$1()(),ke(22,"mat-form-field",3),jt(23,"input",4),RD(24,"translate"),KK(),ke(25,"mat-error"),gi$1(26),RD(27,"translate"),Ve$1()()()(),ke(28,"div",5)(29,"label"),gi$1(30),RD(31,"translate"),Ve$1(),ke(32,"mat-form-field",6)(33,"mat-select",7),RD(34,"translate"),t8(35,sm,2,2,"mat-option",8,e8),Ve$1(),KK(),Ve$1()(),Fe(37,cm,9,7,"div",5),ke(38,"div",9)(39,"label",10),gi$1(40),RD(41,"translate"),ke(42,"span"),gi$1(43,"*"),Ve$1()(),jt(44,"rich-text-input",7),RD(45,"translate"),KK(),Fe(46,dm,3,3,"mat-error",11),Ve$1(),Fe(47,mm,5,4,"div",12),Ve$1(),ke(48,"div",13),gi$1(49),RD(50,"translate"),Ve$1()()),t&2&&(Nr$1("heading","Raise a support ticket")("loading",r.loading()?"true":"")("confirm_text",l4(1,21,"COMMON.SUBMIT")),ge(6),Yd$1(l4(7,23,"FORM.NAME")),ge(5),Nr$1("placeholder",l4(12,25,"FORM.NAME"))("formField",r.form.name),QK(),ge(3),Yd$1(l4(15,27,"FORM.NAME_REQUIRED")),ge(4),Yd$1(l4(19,29,"FORM.EMAIL")),ge(5),Nr$1("placeholder",l4(24,31,"FORM.EMAIL"))("formField",r.form.email),QK(),ge(3),Yd$1(l4(27,33,"FORM.EMAIL_REQUIRED")),ge(4),Yd$1(l4(31,35,"COMMON.SUPPORT_LOCATION")),ge(3),Nr$1("placeholder",l4(34,37,"COMMON.SUPPORT_LOCATION"))("formField",r.form.location),QK(),ge(2),n8(r.buildings()),ge(2),Ue(r.support_request_types().length?37:-1),ge(3),ko$1(" ",l4(41,39,"COMMON.SUPPORT_DESCRIPTION")," "),ge(4),Nr$1("placeholder",l4(45,41,"COMMON.SUPPORT_DESCRIPTION"))("formField",r.form.description),QK(),ge(2),Ue(r.desc_error()?46:-1),ge(),Ue(r.allow_images()?47:-1),ge(2),ko$1(" ",l4(50,43,"COMMON.SUPPORT_MSG")," "));},dependencies:[K1,QN,A3,Oce,eJe,JXe,fl,Dt,Ml$1,Tl,Ml,pi,ui,s3,Y9e,Ar,NJe],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]});}}return n})();var um=["*"],pm=(n,i)=>i.id;function hm(n,i){if(n&1&&(ke(0,"div",4),gi$1(1),RD(2,"date"),Ve$1()),n&2){let e=zt();ge(),ko$1(" ",d4(2,1,e.active_time(),e.time_format()+" (z)",e.tz())," ");}}function _m(n,i){if(n&1&&(ke(0,"div",13),gi$1(1),RD(2,"date"),Ve$1()),n&2){let e=zt(2);ge(),ko$1(" ",d4(2,1,e.force_time(),e.time_format()+" (z)",e.tz())," ");}}function fm(n,i){n&1&&(ke(0,"icon",14),gi$1(1," done "),Ve$1());}function gm(n,i){if(n&1){let e=AD();ke(0,"button",9),We("click",function(){O_(e);let r=zt();return N_(r.setValue(r.force_time().toString()))}),ke(1,"div",10)(2,"div",11)(3,"div",12),gi$1(4),RD(5,"date"),Ve$1(),Fe(6,_m,3,5,"div",13),Ve$1(),Fe(7,fm,2,0,"icon",14),Ve$1()();}if(n&2){let e=zt();Nr$1("value",e.force_time()),ge(4),ko$1(" ",wD(5,4,e.force_time(),e.time_format())," "),ge(2),Ue(e.timezone()&&e.tz()?6:-1),ge(),Ue(e.active_time()===e.force_time()?7:-1);}}function bm(n,i){if(n&1&&(ke(0,"div",13),gi$1(1),RD(2,"date"),Ve$1()),n&2){let e=zt().$implicit,t=zt();ge(),ko$1(" ",d4(2,1,e.date,t.time_format()+" (z)",t.tz())," ");}}function vm(n,i){n&1&&(ke(0,"icon",14),gi$1(1," done "),Ve$1());}function ym(n,i){if(n&1){let e=AD();ke(0,"button",9),We("click",function(){let r=O_(e).$implicit,o=zt();return N_(o.setValue(r.id))}),ke(1,"div",10)(2,"div",11)(3,"div",12),gi$1(4),RD(5,"date"),Ve$1(),Fe(6,bm,3,5,"div",13),Ve$1(),Fe(7,vm,2,0,"icon",14),Ve$1()();}if(n&2){let e=i.$implicit,t=zt();Nr$1("value",e.id),$e("data-time",e.id),ge(4),FL(" ",wD(5,6,e.date,t.time_format())," ",t.extra_info_fn()(e.date)," "),ge(2),Ue(t.timezone()&&t.tz()?6:-1),ge(),Ue(t.active_time()===e.date?7:-1);}}function xm(n,i){n&1&&(ke(0,"div",8),gi$1(1,"No time options to select"),Ve$1());}function km(n,i){n&1&&(ke(0,"mat-error"),Le(1),Ve$1());}var Sl=(()=>{class n extends Fs$1{constructor(){super(...arguments),this.step=Cs(15),this.disabled=EIe(void 0),this.no_past_times=Cs(true),this.use_24hr=Cs(false),this.force_time=Cs(void 0),this.no_error=Cs(void 0),this.extra_info_fn=Cs(e=>""),this.from=Cs(Dn$1(Date.now()).valueOf()),this.range=Cs(void 0),this.min_duration=Cs(0),this.timezone=Cs(""),this.date=O(new Date().valueOf()),this.time=O(no(new Date,"HH:mm")),this._time_options=O([]),this.show_select=O(false),this.active_time=O(Date.now()),this.no_options=O(false),this._menu_trigger=Up(_t),this.time_format=De(()=>this.use_24hr()?"HH : mm":"h : mm a"),this._local_tz=GMe(Intl.DateTimeFormat().resolvedOptions().timeZone),this.tz=De(()=>{let e=this.timezone();if(!e)return "";let t=GMe(e);return t===this._local_tz?"":t});}ngOnInit(){this.show_select.set(true),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions(),this.timeout("hide",()=>this.show_select.set(false));let e=this.timezone()||void 0;this.active_time.set(this._time_options().find(t=>t.id===jMe(this.date(),e))?.date||this.active_time());}ngOnChanges(e){(e.no_past_times||e.step||e.from||e.range||e.min_duration)&&(this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions());}ngAfterViewInit(){let e=this._menu_trigger();e&&this.subscription("menu_opened",e.menuOpened.subscribe(()=>{this._scrollToSelectedTime();}));}_scrollToSelectedTime(){requestAnimationFrame(()=>{if(!this._menu_trigger()?.menu)return;let t=document.querySelector(".mat-mdc-menu-panel");if(!t)return;let r=this.timezone()||void 0,o=this.time()||jMe(new Date,r),c=t.querySelector(`[data-time="${o}"]`);if(!c&&this._time_options().length){let h=this._timeToMinutes(o),x=this._time_options()[0],R=1/0;for(let V of this._time_options()){let se=this._timeToMinutes(V.id),pe=Math.abs(se-h);pe<R&&(R=pe,x=V);}c=t.querySelector(`[data-time="${x.id}"]`);}if(c){if(typeof c.scrollIntoView!="function")return;c.scrollIntoView({block:"center",behavior:"instant"});}});}_timeToMinutes(e){let[t,r]=e.split(":").map(Number);return t*60+r}time_options(){let e=this.timezone()||void 0,t=(this.time()||"00:00").split(":"),r=zMe(this.date(),+t[0],+t[1],e),{minutes:o}=UJ(r,e),c=jMe(r,e),h=[...this._time_options()];return o%this.step()!==0&&this._isWithinRange(r)&&!h.find(x=>x.id===c)&&(h.push({date:r,id:c}),h.sort((x,R)=>`${x.id}`.localeCompare(`${R.id}`))),h}setValue(e){this.time.set(e);let t=this.timezone()||void 0;if(this._onChange){let h=(this.time()||"00:00").split(":"),x=zMe(this.date(),+h[0],+h[1],t);txe(),this._onChange(x);}let r=this.force_time()||this.time(),o=(typeof r=="string"?r:jMe(r,t)).split(":"),c=zMe(this.date(),+o[0],+o[1],t);this.active_time.set(this._time_options().find(h=>h.id===(typeof r=="string"?r:jMe(r,t)))?.date||c);}writeValue(e){this.date.set(e||this.date());let t=this.timezone()||void 0,r=bl$1(this.date());r=Ga(r,{nearestTo:5}),this.time.set(jMe(r,t)),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions();let o=this.force_time(),c=o?jMe(o,t):this.time();this.active_time.set(this._time_options().find(h=>h.id===c)?.date||r.valueOf());}setDisabledState(e){this.disabled.set(e),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times()||e,this.step())),this._updateNoOptions();}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouch=e;}_updateNoOptions(){this.no_options.set(!this.disabled()&&(!this._time_options()||this._time_options().length===0)&&!this.force_time());}generateAvailableTimes(e,t,r=15){let o=t?this.from():Math.max(this.from(),Date.now()),c=[],h=this.range(),x=this.timezone()||void 0,R=x?Go$1(e,x):Dn$1(e).valueOf(),V=x?$o(e,x):Si(e).valueOf(),se=this.min_duration()||0,pe=h?h.start*60:void 0,ft=h?h.end*60:void 0,ct=ft!=null&&se>0?ft-se:ft,wi=Math.max(R,o,pe!=null?R+pe*60*1e3:R),H=Math.min(V,ct!=null?R+ct*60*1e3:V);if(wi>H)return c;let te=this._roundUpToStep(wi,r),Ue=this._roundDownToStep(H,r);for(;!Ha(te,Ue);)c.push({date:te.valueOf(),id:jMe(te,x)}),te=_t$1(te,r);return c}_isWithinRange(e){if(Qr(e,this.from()))return  false;let t=this.range();if(!t)return  true;let r=t.start*60,o=t.end*60,c=this.min_duration()||0,h=c>0?o-c:o,x=this.timezone()||void 0,{hours:R,minutes:V}=UJ(e,x),se=R*60+V;return !(se<r||se>h)}_roundUpToStep(e,t){let r=Ga(e,{nearestTo:t});return Qr(r,e)&&(r=_t$1(r,t)),bl$1(r)}_roundDownToStep(e,t){let r=Ga(e,{nearestTo:t});return Ha(r,e)&&(r=_t$1(r,-t)),bl$1(r)}static{this.\u0275fac=(()=>{let e;return function(r){return (e||(e=Ft(n)))(r||n)}})();}static{this.\u0275cmp=Te$1({type:n,selectors:[["a-time-field"],["time-field"]],viewQuery:function(t,r){t&1&&kE(r._menu_trigger,_t,5),t&2&&PE();},inputs:{step:[1,"step"],disabled:[1,"disabled"],no_past_times:[1,"no_past_times"],use_24hr:[1,"use_24hr"],force_time:[1,"force_time"],no_error:[1,"no_error"],extra_info_fn:[1,"extra_info_fn"],from:[1,"from"],range:[1,"range"],min_duration:[1,"min_duration"],timezone:[1,"timezone"]},outputs:{disabled:"disabledChange"},features:[ft([{provide:vu$1,useExisting:An$1(()=>n),multi:true}]),Pe,At$1],ngContentSelectors:um,decls:15,vars:12,consts:[["menu","matMenu"],["time-field","","matRipple","",1,"border-neutral","flex","h-12","w-full","items-center","justify-between","rounded-sm","border","px-2",3,"disabled","matMenuTriggerFor"],[1,"flex","w-1/2","flex-1","flex-col","px-2","text-left","leading-tight"],[1,"truncate"],[1,"truncate","text-xs","opacity-30"],[1,"text-2xl"],[1,"max-h-60","min-w-[18rem]"],["mat-menu-item","",1,"text-left",3,"value"],["mat-menu-item","","disabled",""],["mat-menu-item","",1,"text-left",3,"click","value"],[1,"flex","items-center","justify-between"],[1,"flex","flex-col","leading-tight"],[1,""],[1,"text-xs","opacity-30"],[1,"ml-2","text-2xl"]],template:function(t,r){if(t&1&&(gn(),ke(0,"button",1)(1,"div",2)(2,"div",3),gi$1(3),RD(4,"date"),Ve$1(),Fe(5,hm,3,5,"div",4),Ve$1(),ke(6,"icon",5),gi$1(7,"arrow_drop_down"),Ve$1()(),ke(8,"mat-menu",6,0),Fe(10,gm,8,7,"button",7),t8(11,ym,8,9,"button",7,pm,false,xm,2,0,"div",8),Ve$1(),Fe(14,km,2,0,"mat-error")),t&2){let o=LE(9);Oe("opacity-30",r.disabled()||r.no_options()),Nr$1("disabled",r.disabled()||r.no_options())("matMenuTriggerFor",o),ge(3),ko$1(" ",wD(4,9,r.active_time(),r.time_format())," "),ge(2),Ue(r.timezone()&&r.tz()?5:-1),ge(5),Ue(r.force_time()?10:-1),ge(),n8(r.time_options()),ge(3),Ue(r.no_error()?-1:14);}},dependencies:[K1,mi,at,ht,_t,QN,Oce,YQe,k6],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]});}}return n})();function Cm(n,i){n&1&&(ke(0,"button",2)(1,"icon"),gi$1(2,"close"),Ve$1()());}function Mm(n,i){if(n&1){let e=AD();ke(0,"div",7)(1,"div",11),gi$1(2),RD(3,"date"),Ve$1(),ke(4,"mat-checkbox",12),We("ngModelChange",function(r){let o=O_(e).$implicit,c=zt(2);return c.setWeekdayEnabled(o.getDay(),r),N_(r&&c.initialiseDay(o.getDay()))}),Ve$1(),KK(),Ve$1();}if(n&2){let e=i.$implicit,t=zt(2);ge(2),ko$1(" ",wD(3,2,e,"EEE")," "),ge(2),Nr$1("ngModel",t.weekdays_enabled()[e.getDay()]),QK();}}function wm(n,i){if(n&1&&(ke(0,"mat-option",20),gi$1(1),Ve$1()),n&2){let e=i.$implicit;Nr$1("value",e.id),ge(),ko$1(" ",e.name," ");}}function Tm(n,i){if(n&1){let e=AD();ke(0,"button",23),We("click",function(){O_(e);let r=zt().$index,o=zt(2).$implicit,c=zt(3);return N_(c.addBlock(c.settings()[o.getDay()],r))}),ke(1,"icon"),gi$1(2,"add"),Ve$1()();}}function Em(n,i){if(n&1){let e=AD();ke(0,"button",24),We("click",function(){O_(e);let r=zt().$index,o=zt(2).$implicit,c=zt(3);return N_(c.removeBlock(c.settings()[o.getDay()],r))}),ke(1,"icon"),gi$1(2,"delete"),Ve$1()();}}function Sm(n,i){if(n&1){let e=AD();ke(0,"div",16)(1,"a-time-field",18),We("ngModelChange",function(r){let o=O_(e).$implicit,c=zt(2).$implicit,h=zt(3);return N_(h.setStartTime(o,c.getDay(),r))}),Ve$1(),KK(),ke(2,"a-time-field",18),We("ngModelChange",function(r){let o=O_(e).$implicit,c=zt(2).$implicit,h=zt(3);return N_(h.setEndTime(o,c.getDay(),r))}),Ve$1(),KK(),ke(3,"mat-form-field",19)(4,"mat-select",12),HL("ngModelChange",function(r){let o=O_(e).$implicit;return G8(o.location,r)||(o.location=r),N_(r)}),t8(5,wm,2,2,"mat-option",20,e8),Ve$1(),KK(),Ve$1(),Fe(7,Tm,3,0,"button",21),Fe(8,Em,3,0,"button",22),Ve$1();}if(n&2){let e=i.$implicit,t=i.$index,r=zt(2).$implicit,o=zt(3);ge(),Nr$1("ngModel",o.timeFrom(e.start_time))("from",o.timeFrom((t>0?o.settings()[r.getDay()].blocks[t-1]?.end_time:0)||0))("no_error",true),QK(),ge(),Nr$1("ngModel",o.timeFrom(e.end_time))("from",o.timeFrom(e.start_time+.25))("no_error",true),QK(),ge(2),VL("ngModel",e.location),QK(),ge(),n8(o.options()),ge(2),Ue(t===0?7:-1),ge(),Ue(t!==0?8:-1);}}function Im(n,i){if(n&1&&(ke(0,"div",14)(1,"div",15),t8(2,Sm,9,9,"div",16,e8),Ve$1(),ke(4,"h3",17),gi$1(5),RD(6,"date"),Ve$1()()),n&2){let e=zt().$implicit,t=zt(3);ge(2),n8(t.settings()[e.getDay()].blocks),ge(3),ko$1(" ",wD(6,1,e,"EEEE")," ");}}function Rm(n,i){if(n&1&&Fe(0,Im,7,4,"div",14),n&2){let e=i.$implicit,t=zt(3);Ue(t.weekdays_enabled()[e.getDay()]?0:-1);}}function Om(n,i){if(n&1&&(ke(0,"div",9),t8(1,Rm,1,1,null,null,e8),ke(3,"h3",13),gi$1(4),RD(5,"translate"),Ve$1()()),n&2){let e=zt(2);ge(),n8(e.days),ge(3),ko$1(" ",l4(5,1,"COMMON.WORK_HOURS")," ");}}function Dm(n,i){n&1&&(ke(0,"div",10),jt(1,"img",25),ke(2,"p",26),gi$1(3),RD(4,"translate"),Ve$1()()),n&2&&(ge(3),ko$1(" ",l4(4,1,"COMMON.WORK_SETTINGS_EMPTY")," "));}function Nm(n,i){if(n&1&&(ke(0,"main",3)(1,"div",6),t8(2,Mm,5,5,"div",7,e8),ke(4,"h3",8),gi$1(5),RD(6,"translate"),Ve$1()(),Fe(7,Om,6,3,"div",9)(8,Dm,5,3,"div",10),Ve$1()),n&2){let e=zt();ge(2),n8(e.days),ge(3),ko$1(" ",l4(6,2,"COMMON.WORK_DAYS")," "),ge(2),Ue(e.has_working_days()?7:8);}}function Am(n,i){n&1&&(ke(0,"div",4),jt(1,"mat-spinner",27),ke(2,"p",26),gi$1(3),RD(4,"translate"),Ve$1()()),n&2&&(ge(),Nr$1("diameter",32),ge(2),ko$1(" ",l4(4,2,"COMMON.WORK_SETTINGS_SAVE")," "));}function Pm(n,i){if(n&1){let e=AD();ke(0,"footer",5)(1,"button",28),We("click",function(){O_(e);let r=zt();return N_(r.saveChanges())}),gi$1(2),RD(3,"translate"),Ve$1()();}n&2&&(ge(2),ko$1(" ",l4(3,1,"COMMON.SAVE")," "));}var Br=(()=>{class n{constructor(){this._data=m$1(rae),this._dialog_ref=m$1(ZS),this.options=O([]),this.option=O(""),this.settings=O([]),this.weekdays_enabled=O({}),this.changed=O(false),this.loading=O(false),this.available_weekdays=O([]),this.days=new Array(7).fill(0).map((e,t)=>Pn$1(Ps$1(Pn$1(Date.now(),30)),t)),this.has_working_days=De(()=>{let e=this.weekdays_enabled();return Object.keys(e).some(t=>e[t])}),this.option_name=De(()=>this.options().find(e=>e.id===this.option())?.name||""),this.now=De(()=>bl$1(Date.now()).getTime());}ngOnInit(){let e=so$1(),r=[...((this._data?.local?this._data.preferences:e.work_preferences)||[]).map(h=>m$2(l({},h),{blocks:[...h?.blocks||[]]}))],o={};for(let h of r)h.blocks.length&&(o[h.day_of_week]=true);this.settings.set(r),this.weekdays_enabled.set(o);let c=[{id:"wfo",name:_r("COMMON.WORK_OFFICE"),icon:"business"},{id:"wfh",name:_r("COMMON.WORK_HOME"),icon:"home"},{id:"aol",name:_r("COMMON.WORK_LEAVE"),icon:"event_busy"}];this.options.set(c),this.option.set(c[0].id);}timeFrom(e){return bl$1(Ci$1(Pn$1(new Date,1),{hours:Math.floor(e),minutes:e*60%60})).getTime()}fromTime(e){let t=new Date(e);return t.getHours()+t.getMinutes()/60}initialiseDay(e){let t=this.settings();t[e]||(t[e]={day_of_week:e,blocks:[]}),t[e].blocks||(t[e].blocks=[]),t[e].blocks.length===0&&this.addBlock(t[e],0),this.settings.set([...t]);}addBlock(e,t){e.blocks.splice(t+1,0,{start_time:9,end_time:17,location:"wfo"}),this.cleanupBlocks(e),this.settings.update(r=>[...r]);}removeBlock(e,t){e.blocks.length<=1||(e.blocks.splice(t,1),this.settings.update(r=>[...r]));}setEndTime(e,t,r){setTimeout(()=>{e.end_time=this.fromTime(r),this.cleanupBlocks(this.settings()[t]),this.settings.update(o=>[...o]);},50);}setStartTime(e,t,r){setTimeout(()=>{e.start_time=this.fromTime(r),this.cleanupBlocks(this.settings()[t]),this.settings.update(o=>[...o]);},50);}cleanupBlocks(e){if(e?.blocks?.length)for(let t=0;t<e.blocks.length;t++){let r=e.blocks[t];t>0&&r.start_time<e.blocks[t-1].end_time&&(r.start_time=e.blocks[t-1].end_time),r.end_time<=r.start_time&&(r.end_time=r.start_time+1);}}async saveChanges(e=true){this.loading.set(true),this._dialog_ref.disableClose=true;let t=new Array(7).fill(0).map((r,o)=>({day_of_week:o,blocks:[]}));for(let r of this.days){let o=r.getDay();this.weekdays_enabled()[o]&&(t[o]={day_of_week:o,blocks:this.settings()[o].blocks});}if(!this._data?.local){let r=await ZR("current");await mV(r.id,m$2(l({},r),{groups:r.groups.filter(o=>!o.startsWith("placeos_")),work_preferences:t})).catch(o=>{throw this.loading.set(false),this._dialog_ref.disableClose=false,GV("Unable to save user work preferences."),o});}this.loading.set(false),this._dialog_ref.disableClose=false,e&&(this._data?.local||dH(),this._dialog_ref.close(t));}setWeekdayEnabled(e,t){this.weekdays_enabled.update(r=>m$2(l({},r),{[e]:t}));}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te$1({type:n,selectors:[["wfh-settings-modal"]],decls:8,vars:6,consts:[[1,"bg-base-200","sticky","top-0","z-10","m-2","w-[calc(100%-1rem)]","rounded-sm","border-none","p-2"],[1,"px-2","text-xl","font-medium"],["icon","","matRipple","","mat-dialog-close","",1,"bg-base-200"],[1,"relative","flex","max-h-[calc(100vh-9rem)]","w-160","max-w-full","flex-col","space-y-2","overflow-x-hidden","overflow-y-auto","rounded-sm","px-2","py-4","sm:max-h-[65vh]","sm:p-4"],["loading","",1,"bg-base-100","relative","flex","h-72","w-[24rem]","flex-col","items-center","justify-center","space-y-2","overflow-hidden","rounded-sm","text-center"],[1,"border-base-200","flex","justify-end","border-t","px-4","py-2"],[1,"border-base-300","relative","mb-4","flex","w-full","items-center","justify-between","space-x-2","rounded-sm","border","p-2"],[1,"flex","flex-1","flex-col","items-center","pt-2"],[1,"bg-base-100","absolute","top-0","left-2","-translate-y-1/2","px-2"],[1,"border-base-300","relative","flex","w-full","flex-col","items-center","justify-between","space-y-4","rounded-sm","border","px-2","pt-6","pb-4","sm:px-4"],[1,"flex","flex-col","items-center","justify-center","space-y-4","px-8","py-16"],[1,"text-xs","font-bold","uppercase"],[3,"ngModelChange","ngModel"],[1,"bg-base-100","absolute","top-0","left-2","m-0!","-translate-y-1/2","px-2"],[1,"border-base-200","relative","flex","w-full","items-center","justify-between","space-x-2","rounded-sm","border","p-2"],[1,"w-1/2","flex-1","space-y-2","pt-2"],[1,"flex","items-center","space-x-2"],[1,"border-base-200","bg-base-100","bg-opacity-50","absolute","top-0","left-2","-translate-y-1/2","rounded-sm","border","px-2","text-sm","font-medium"],[1,"w-1/4","flex-1",3,"ngModelChange","ngModel","from","no_error"],["appearance","outline",1,"no-subscript","w-1/4","flex-1"],[3,"value"],["icon","","matRipple","",1,"border-base-400","h-12","w-12","rounded-sm","border"],["icon","","matRipple","",1,"border-error","text-error","h-12","w-12","rounded-sm","border"],["icon","","matRipple","",1,"border-base-400","h-12","w-12","rounded-sm","border",3,"click"],["icon","","matRipple","",1,"border-error","text-error","h-12","w-12","rounded-sm","border",3,"click"],["src","assets/icons/no-results.svg",1,"m-auto"],[1,"opacity-30"],[3,"diameter"],["btn","","matRipple","",1,"w-48",3,"click"]],template:function(t,r){t&1&&(ke(0,"header",0)(1,"h2",1),gi$1(2),RD(3,"translate"),Ve$1(),Fe(4,Cm,3,0,"button",2),Ve$1(),Fe(5,Nm,9,4,"main",3)(6,Am,5,4,"div",4),Fe(7,Pm,4,3,"footer",5)),t&2&&(ge(2),ko$1(" ",l4(3,4,"COMMON.WORK_LOCATION_SETTINGS")," "),ge(2),Ue(r.loading()?-1:4),ge(),Ue(r.loading()?6:5),ge(2),Ue(r.loading()?-1:7));},dependencies:[K1,Y9e,z9e,Ml$1,Qw,QN,A3,pi,ui,s3,Sl,vr,Bi,F0e,x0e,GQ,YQe,Dt,ci,k6,NJe],encapsulation:2});}}return n})();var Fm=["knob"],Vm=["valueIndicatorContainer"];function Lm(n,i){if(n&1&&(ke(0,"div",2,1)(2,"div",5)(3,"span",6),gi$1(4),Ve$1()()()),n&2){let e=zt();ge(4),Yd$1(e.valueIndicatorText);}}var Bm=["trackActive"],Um=["*"];function zm(n,i){if(n&1&&jt(0,"div"),n&2){let e=i.$implicit,t=i.$index,r=zt(3);Ds$1(e===0?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"),CD("transform",r._calcTickMarkTransform(t));}}function Hm(n,i){if(n&1&&t8(0,zm,1,4,"div",8,J5),n&2){let e=zt(2);n8(e._tickMarks);}}function Gm(n,i){if(n&1&&(ke(0,"div",6,1),Fe(2,Hm,2,0),Ve$1()),n&2){let e=zt();ge(2),Ue(e._cachedWidth?2:-1);}}function Wm(n,i){if(n&1&&jt(0,"mat-slider-visual-thumb",7),n&2){let e=zt();Nr$1("discrete",e.discrete)("thumbPosition",1)("valueIndicatorText",e.startValueIndicatorText);}}var P=(function(n){return n[n.START=1]="START",n[n.END=2]="END",n})(P||{}),Mi=(function(n){return n[n.ACTIVE=0]="ACTIVE",n[n.INACTIVE=1]="INACTIVE",n})(Mi||{}),Ko=new v("_MatSlider"),Il=new v("_MatSliderThumb"),jm=new v("_MatSliderRangeThumb"),Rl=new v("_MatSliderVisualThumb");var Km=(()=>{class n{_cdr=m$1(Dt$1);_ngZone=m$1(B);_slider=m$1(Ko);_renderer=m$1(ot);_listenerCleanups;discrete=false;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=false;_isActive=false;_isValueIndicatorVisible=false;_hostElement=m$1(j).nativeElement;_platform=m$1(je);ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let t=this._sliderInputEl,r=this._renderer;this._listenerCleanups=[r.listen(t,"pointermove",this._onPointerMove),r.listen(t,"pointerdown",this._onDragStart),r.listen(t,"pointerup",this._onDragEnd),r.listen(t,"pointerleave",this._onMouseLeave),r.listen(t,"focus",this._onFocus),r.listen(t,"blur",this._onBlur)];}));}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e());}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let t=this._hostElement.getBoundingClientRect(),r=this._slider._isCursorOnSliderThumb(e,t);this._isHovered=r,r?this._showHoverRipple():this._hideRipple(this._hoverRippleRef);};_onMouseLeave=()=>{this._isHovered=false,this._hideRipple(this._hoverRippleRef);};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add("mdc-slider__thumb--focused");};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove("mdc-slider__thumb--focused");};_onDragStart=e=>{e.button===0&&(this._isActive=true,this._showActiveRipple());};_onDragEnd=()=>{this._isActive=false,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple();};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple"));}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},true),this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple"));}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple"));}_isShowingRipple(e){return e?.state===Xr.FADING_IN||e?.state===Xr.VISIBLE}_showRipple(e,t){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===P.START?P.END:P.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!t)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:true,persistent:true})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let t=this._getSibling();t._isShowingAnyRipple()||(this._hideValueIndicator(),t._hideValueIndicator());}_showValueIndicator(){this._hostElement.classList.add("mdc-slider__thumb--with-indicator");}_hideValueIndicator(){this._hostElement.classList.remove("mdc-slider__thumb--with-indicator");}_getSibling(){return this._slider._getThumb(this.thumbPosition===P.START?P.END:P.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Te$1({type:n,selectors:[["mat-slider-visual-thumb"]],viewQuery:function(t,r){if(t&1&&xn(Qw,5)(Fm,5)(Vm,5),t&2){let o;Ie(o=Ae())&&(r._ripple=o.first),Ie(o=Ae())&&(r._knob=o.first),Ie(o=Ae())&&(r._valueIndicatorContainer=o.first);}},hostAttrs:[1,"mdc-slider__thumb","mat-mdc-slider-visual-thumb"],inputs:{discrete:"discrete",thumbPosition:"thumbPosition",valueIndicatorText:"valueIndicatorText"},features:[ft([{provide:Rl,useExisting:n}])],decls:4,vars:2,consts:[["knob",""],["valueIndicatorContainer",""],[1,"mdc-slider__value-indicator-container"],[1,"mdc-slider__thumb-knob"],["matRipple","",1,"mat-focus-indicator",3,"matRippleDisabled"],[1,"mdc-slider__value-indicator"],[1,"mdc-slider__value-indicator-text"]],template:function(t,r){t&1&&(Fe(0,Lm,5,1,"div",2),jt(1,"div",3,0)(3,"div",4)),t&2&&(Ue(r.discrete?0:-1),ge(3),Nr$1("matRippleDisabled",true));},dependencies:[Qw],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
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
`],encapsulation:2})}return n})(),Ur=(()=>{class n{_ngZone=m$1(B);_cdr=m$1(Dt$1);_elementRef=m$1(j);_dir=m$1(vr$1,{optional:true});_globalRippleOptions=m$1(Zu,{optional:true});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let t=this._getInput(P.END),r=this._getInput(P.START);t&&(t.disabled=this._disabled),r&&(r.disabled=this._disabled);}_disabled=false;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs();}_discrete=false;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI());}_showTickMarks=false;get min(){return this._min}set min(e){let t=e==null||isNaN(e)?this._min:e;this._min!==t&&this._updateMin(t);}_min=0;color;disableRipple=false;_updateMin(e){let t=this._min;this._min=e,this._isRange?this._updateMinRange({old:t,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange();}_updateMinRange(e){let t=this._getInput(P.END),r=this._getInput(P.START),o=t.value,c=r.value;r.min=e.new,t.min=Math.max(e.new,r.value),r.max=Math.min(t.max,t.value),r._updateWidthInactive(),t._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(t,r):this._onTranslateXChangeBySideEffect(r,t),o!==t.value&&this._onValueChange(t),c!==r.value&&this._onValueChange(r);}_updateMinNonRange(e){let t=this._getInput(P.END);if(t){let r=t.value;t.min=e,t._updateThumbUIByValue(),this._updateTrackUI(t),r!==t.value&&this._onValueChange(t);}}get max(){return this._max}set max(e){let t=e==null||isNaN(e)?this._max:e;this._max!==t&&this._updateMax(t);}_max=100;_updateMax(e){let t=this._max;this._max=e,this._isRange?this._updateMaxRange({old:t,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange();}_updateMaxRange(e){let t=this._getInput(P.END),r=this._getInput(P.START),o=t.value,c=r.value;t.max=e.new,r.max=Math.min(e.new,t.value),t.min=r.value,t._updateWidthInactive(),r._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(r,t):this._onTranslateXChangeBySideEffect(t,r),o!==t.value&&this._onValueChange(t),c!==r.value&&this._onValueChange(r);}_updateMaxNonRange(e){let t=this._getInput(P.END);if(t){let r=t.value;t.max=e,t._updateThumbUIByValue(),this._updateTrackUI(t),r!==t.value&&this._onValueChange(t);}}get step(){return this._step}set step(e){let t=isNaN(e)?this._step:e;this._step!==t&&this._updateStep(t);}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange();}_updateStepRange(){let e=this._getInput(P.END),t=this._getInput(P.START),r=e.value,o=t.value,c=t.value;e.min=this._min,t.max=this._max,e.step=this._step,t.step=this._step,this._platform.SAFARI&&(e.value=e.value,t.value=t.value),e.min=Math.max(this._min,t.value),t.max=Math.min(this._max,e.value),t._updateWidthInactive(),e._updateWidthInactive(),e.value<c?this._onTranslateXChangeBySideEffect(t,e):this._onTranslateXChangeBySideEffect(e,t),r!==e.value&&this._onValueChange(e),o!==t.value&&this._onValueChange(t);}_updateStepNonRange(){let e=this._getInput(P.END);if(e){let t=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),t!==e.value&&this._onValueChange(e);}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=Kt();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText="";endValueIndicatorText="";_endThumbTransform;_startThumbTransform;_isRange=false;_isRtl=De(()=>this._dir?.valueSignal()==="rtl");_hasViewInitialized=false;_tickMarkTrackWidth=0;_hasAnimation=false;_resizeTimer=null;_platform=m$1(je);constructor(){m$1(yn).load(Nl$1);let e=this._isRtl();g1(()=>{let t=this._isRtl();t!==e&&(e=t,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI());});}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(P.END),t=this._getInput(P.START);this._isRange=!!e&&!!t,this._cdr.detectChanges();let r=this._getThumb(P.END);this._rippleRadius=r._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,t):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges();}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=true,e._updateThumbUIByValue();}_initUIRange(e,t){e.initProps(),e.initUI(),t.initProps(),t.initUI(),e._updateMinMax(),t._updateMinMax(),e._updateStaticStyles(),t._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=true,e._updateThumbUIByValue(),t._updateThumbUIByValue();}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null;}_onDirChangeRange(){let e=this._getInput(P.END),t=this._getInput(P.START);e._setIsLeftThumb(),t._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),t.translateX=t._calcTranslateXByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateWidthInactive(),t._updateWidthInactive(),e._updateThumbUIByValue(),t._updateThumbUIByValue();}_onDirChangeNonRange(){this._getInput(P.END)._updateThumbUIByValue();}_observeHostResize(){typeof ResizeObserver>"u"||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize());}),this._resizeObserver.observe(this._elementRef.nativeElement);});}_isActive(){return this._getThumb(P.START)._isActive||this._getThumb(P.END)._isActive}_getValue(e=P.END){let t=this._getInput(e);return t?t.value:this.min}_skipUpdate(){return !!(this._getInput(P.START)?._skipUIUpdate||this._getInput(P.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left;}_setTrackActiveStyles(e){let t=this._trackActive.nativeElement.style;t.left=e.left,t.right=e.right,t.transformOrigin=e.transformOrigin,t.transform=e.transform;}_calcTickMarkTransform(e){let t=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return `translateX(${this._isRtl()?this._cachedWidth-6-t:t}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e));}_onTranslateXChangeBySideEffect(e,t){this._hasViewInitialized&&(e._updateThumbUIByValue(),t._updateThumbUIByValue());}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges());}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck());}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(P.END),t=this._getInput(P.START);e._updateThumbUIByValue(),t._updateThumbUIByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateMinMax(),t._updateMinMax(),e._updateWidthInactive(),t._updateWidthInactive();}else {let e=this._getInput(P.END);e&&e._updateThumbUIByValue();}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges();}}_thumbsOverlap=false;_areThumbsOverlapping(){let e=this._getInput(P.START),t=this._getInput(P.END);return !e||!t?false:t.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let t=e.getSibling(),r=this._getThumb(e.thumbPosition);this._getThumb(t.thumbPosition)._hostElement.classList.remove("mdc-slider__thumb--top"),r._hostElement.classList.toggle("mdc-slider__thumb--top",this._thumbsOverlap);}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e));}_updateThumbUI(e){if(this._skipUpdate())return;let t=this._getThumb(e.thumbPosition===P.END?P.END:P.START);t._hostElement.style.transform=`translateX(${e.translateX}px)`;}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let t=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(t):e._hostElement.setAttribute("aria-valuetext",t),this.discrete){e.thumbPosition===P.START?this.startValueIndicatorText=t:this.endValueIndicatorText=t;let r=this._getThumb(e.thumbPosition);t.length<3?r._hostElement.classList.add("mdc-slider__thumb--short-value"):r._hostElement.classList.remove("mdc-slider__thumb--short-value");}}_updateValueIndicatorUIs(){let e=this._getInput(P.END),t=this._getInput(P.START);e&&this._updateValueIndicatorUI(e),t&&this._updateValueIndicatorUI(t);}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,r=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*r;}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e));}_updateTrackUIRange(e){let t=e.getSibling();if(!t||!this._cachedWidth)return;let r=Math.abs(t.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:"auto",right:`${this._cachedWidth-t.translateX}px`,transformOrigin:"right",transform:`scaleX(${r})`}):this._setTrackActiveStyles({left:`${t.translateX}px`,right:"auto",transformOrigin:"left",transform:`scaleX(${r})`});}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:"auto",right:"0px",transformOrigin:"right",transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:"0px",right:"auto",transformOrigin:"left",transform:`scaleX(${e.fillPercentage})`});}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e);}_updateTickMarkUINonRange(e){let t=this._getValue(),r=Math.max(Math.round((t-this.min)/e),0)+1,o=Math.max(Math.round((this.max-t)/e),0)-1;this._isRtl()?r++:o++,this._tickMarks=Array(r).fill(Mi.ACTIVE).concat(Array(o).fill(Mi.INACTIVE));}_updateTickMarkUIRange(e){let t=this._getValue(),r=this._getValue(P.START),o=Math.max(Math.round((r-this.min)/e),0),c=Math.max(Math.round((t-r)/e)+1,0),h=Math.max(Math.round((this.max-t)/e),0);this._tickMarks=Array(o).fill(Mi.INACTIVE).concat(Array(c).fill(Mi.ACTIVE),Array(h).fill(Mi.INACTIVE));}_getInput(e){if(e===P.END&&this._input)return this._input;if(this._inputs?.length)return e===P.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===P.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation",this._hasAnimation);}_isCursorOnSliderThumb(e,t){let r=t.width/2,o=t.x+r,c=t.y+r,h=e.clientX-o,x=e.clientY-c;return Math.pow(h,2)+Math.pow(x,2)<Math.pow(r,2)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Te$1({type:n,selectors:[["mat-slider"]],contentQueries:function(t,r,o){if(t&1&&Qi(o,Il,5)(o,jm,4),t&2){let c;Ie(c=Ae())&&(r._input=c.first),Ie(c=Ae())&&(r._inputs=c);}},viewQuery:function(t,r){if(t&1&&xn(Bm,5)(Rl,5),t&2){let o;Ie(o=Ae())&&(r._trackActive=o.first),Ie(o=Ae())&&(r._thumbs=o);}},hostAttrs:[1,"mat-mdc-slider","mdc-slider"],hostVars:12,hostBindings:function(t,r){t&2&&(Ds$1("mat-"+(r.color||"primary")),Oe("mdc-slider--range",r._isRange)("mdc-slider--disabled",r.disabled)("mdc-slider--discrete",r.discrete)("mdc-slider--tick-marks",r.showTickMarks)("_mat-animation-noopable",r._noopAnimations));},inputs:{disabled:[2,"disabled","disabled",Ee],discrete:[2,"discrete","discrete",Ee],showTickMarks:[2,"showTickMarks","showTickMarks",Ee],min:[2,"min","min",qd$1],color:"color",disableRipple:[2,"disableRipple","disableRipple",Ee],max:[2,"max","max",qd$1],step:[2,"step","step",qd$1],displayWith:"displayWith"},exportAs:["matSlider"],features:[ft([{provide:Ko,useExisting:n}])],ngContentSelectors:Um,decls:9,vars:5,consts:[["trackActive",""],["tickMarkContainer",""],[1,"mdc-slider__track"],[1,"mdc-slider__track--inactive"],[1,"mdc-slider__track--active"],[1,"mdc-slider__track--active_fill"],[1,"mdc-slider__tick-marks"],[3,"discrete","thumbPosition","valueIndicatorText"],[3,"class","transform"]],template:function(t,r){t&1&&(gn(),Le(0),ke(1,"div",2),jt(2,"div",3),ke(3,"div",4),jt(4,"div",5,0),Ve$1(),Fe(6,Gm,3,1,"div",6),Ve$1(),Fe(7,Wm,1,3,"mat-slider-visual-thumb",7),jt(8,"mat-slider-visual-thumb",7)),t&2&&(ge(6),Ue(r.showTickMarks?6:-1),ge(),Ue(r._isRange?7:-1),ge(),Nr$1("discrete",r.discrete)("thumbPosition",2)("valueIndicatorText",r.endValueIndicatorText));},dependencies:[Km],styles:[`.mdc-slider__track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  pointer-events: none;
  height: var(--mat-slider-inactive-track-height, 4px);
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
  border-radius: var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));
  height: var(--mat-slider-active-track-height, 4px);
  top: calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px)) / 2);
}

.mdc-slider__track--active_fill {
  border-top-style: solid;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  transform-origin: left;
  transition: transform 80ms ease;
  border-color: var(--mat-slider-active-track-color, var(--mat-sys-primary));
  border-top-width: var(--mat-slider-active-track-height, 4px);
}
.mdc-slider--disabled .mdc-slider__track--active_fill {
  border-color: var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface));
}
[dir=rtl] .mdc-slider__track--active_fill {
  -webkit-transform-origin: right;
  transform-origin: right;
}

.mdc-slider__track--inactive {
  left: 0;
  top: 0;
  opacity: 0.24;
  background-color: var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));
  height: var(--mat-slider-inactive-track-height, 4px);
  border-radius: var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full));
}
.mdc-slider--disabled .mdc-slider__track--inactive {
  background-color: var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));
  opacity: 0.24;
}
.mdc-slider__track--inactive::before {
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
  .mdc-slider__track--inactive::before {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-container {
  bottom: 44px;
  left: 50%;
  pointer-events: none;
  position: absolute;
  transform: var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {
  pointer-events: auto;
}

.mdc-slider__value-indicator {
  display: flex;
  align-items: center;
  transform: scale(0);
  transform-origin: var(--mat-slider-value-indicator-transform-origin, 0 28px);
  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);
  word-break: normal;
  background-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));
  color: var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));
  width: var(--mat-slider-value-indicator-width, 28px);
  height: var(--mat-slider-value-indicator-height, 28px);
  padding: var(--mat-slider-value-indicator-padding, 0);
  opacity: var(--mat-slider-value-indicator-opacity, 1);
  border-radius: var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0);
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
  display: var(--mat-slider-value-indicator-caret-display, none);
  border-top-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));
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
  width: var(--mat-slider-value-indicator-width, 28px);
  transform: var(--mat-slider-value-indicator-text-transform, rotate(45deg));
  font-family: var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));
  font-size: var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));
  font-weight: var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));
  line-height: var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));
  letter-spacing: var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking));
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
  width: var(--mat-slider-handle-width, 20px);
  height: var(--mat-slider-handle-height, 20px);
  border-width: calc(var(--mat-slider-handle-height, 20px) / 2) calc(var(--mat-slider-handle-width, 20px) / 2);
  box-shadow: var(--mat-slider-handle-elevation, var(--mat-sys-level1));
  background-color: var(--mat-slider-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-handle-color, var(--mat-sys-primary));
  border-radius: var(--mat-slider-handle-shape, var(--mat-sys-corner-full));
}
.mdc-slider__thumb:hover .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));
}
.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));
  border-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));
}
.mdc-slider--disabled .mdc-slider__thumb-knob {
  background-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));
  border-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));
}
.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  border: solid 1px #fff;
  box-sizing: content-box;
  border-color: var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));
  border-width: var(--mat-slider-with-overlap-handle-outline-width, 1px);
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
  width: var(--mat-slider-with-tick-marks-container-size, 2px);
  height: var(--mat-slider-with-tick-marks-container-size, 2px);
  border-radius: var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full));
}

.mdc-slider__tick-mark--inactive {
  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant));
}
.mdc-slider--disabled .mdc-slider__tick-mark--inactive {
  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface));
}

.mdc-slider__tick-mark--active {
  opacity: var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);
  background-color: var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary));
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
  background-color: var(--mat-slider-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {
  background-color: var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,
.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {
  background-color: var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent));
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
`],encapsulation:2})}return n})();var qm={provide:vu$1,useExisting:An$1(()=>Ki),multi:true};var Ki=(()=>{class n{_ngZone=m$1(B);_elementRef=m$1(j);_cdr=m$1(Dt$1);_slider=m$1(Ko);_platform=m$1(je);_listenerCleanups;get value(){return qd$1(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let t=e+"";if(!this._hasSetInitialValue){this._initialValue=t;return}this._isActive||this._setValue(t);}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck();}valueChange=new te;dragStart=new te;dragEnd=new te;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e;}_translateX;thumbPosition=P.END;get min(){return qd$1(this._hostElement.min,0)}set min(e){this._hostElement.min=e+"",this._cdr.detectChanges();}get max(){return qd$1(this._hostElement.max,0)}set max(e){this._hostElement.max=e+"",this._cdr.detectChanges();}get step(){return qd$1(this._hostElement.step,0)}set step(e){this._hostElement.step=e+"",this._cdr.detectChanges();}get disabled(){return Ee(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled);}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=O("");_knobRadius=8;_tickMarkOffset=3;_isActive=false;_isFocused=false;_setIsFocused(e){this._isFocused=e;}_hasSetInitialValue=false;_initialValue;_formControl;_destroyed=new R;_skipUIUpdate=false;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=false;constructor(){let e=m$1(ot);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,"pointerdown",this._onPointerDown.bind(this)),e.listen(this._hostElement,"pointermove",this._onPointerMove.bind(this)),e.listen(this._hostElement,"pointerup",this._onPointerUp.bind(this))];});}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete();}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=true),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue();}initUI(){this._updateThumbUIByValue();}_initValue(){this._hasSetInitialValue=true,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges());}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(false),this._onTouchedFn();}_onFocus(){this._slider._setTransition(false),this._slider._updateTrackUI(this),this._setIsFocused(true);}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:true});}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:true}),this._slider._onValueChange(this);}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled;}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let t=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=t,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=true,this._setIsFocused(true),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:true}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}));}}_handleValueCorrection(e){this._skipUIUpdate=true,setTimeout(()=>{this._skipUIUpdate=false,this._fixValue(e);},0);}_fixValue(e){let t=e.clientX-this._slider._cachedLeft,r=this._slider._cachedWidth,o=this._slider.step===0?1:this._slider.step,c=Math.floor((this._slider.max-this._slider.min)/o),h=this._slider._isRtl()?1-t/r:t/r,R=Math.round(h*c)/c*(this._slider.max-this._slider.min)+this._slider.min,V=Math.round(R/o)*o,se=this.value;if(V===se){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=V,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e);}_onPointerUp(){this._isActive&&(this._isActive=false,this._platform.SAFARI&&this._setIsFocused(false),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0));}_clamp(e){let t=this._tickMarkOffset,r=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,r),t)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`;}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e);}_updateThumbUIByPointerEvent(e,t){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(t);}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this);}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e);}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=true;}registerOnTouched(e){this._onTouchedFn=e;}setDisabledState(e){this.disabled=e;}focus(){this._hostElement.focus();}blur(){this._hostElement.blur();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["input","matSliderThumb",""]],hostAttrs:["type","range",1,"mdc-slider__input"],hostVars:1,hostBindings:function(t,r){t&1&&We("change",function(){return r._onChange()})("input",function(){return r._onInput()})("blur",function(){return r._onBlur()})("focus",function(){return r._onFocus()}),t&2&&$e("aria-valuetext",r._valuetext());},inputs:{value:[2,"value","value",qd$1]},outputs:{valueChange:"valueChange",dragStart:"dragStart",dragEnd:"dragEnd"},exportAs:["matSliderThumb"],features:[ft([qm,{provide:Il,useExisting:n}])]})}return n})();var zr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=se({type:n});static \u0275inj=ie({imports:[Ml$1,vt]})}return n})();function $m(n,i){if(n&1){let e=AD();ke(0,"settings-toggle",6),We("ngModelChange",function(r){O_(e);let o=zt();return N_(o.setDarkMode(r))}),ke(1,"div",7)(2,"icon",8),gi$1(3,"mode_night"),Ve$1(),ke(4,"div"),gi$1(5),RD(6,"translate"),Ve$1()()(),KK();}if(n&2){let e=zt();Nr$1("ngModel",e.dark_mode())("toggle",true),QK(),ge(5),Yd$1(l4(6,3,"COMMON.DARK_MODE"));}}function Xm(n,i){if(n&1){let e=AD();ke(0,"settings-toggle",6),We("ngModelChange",function(r){O_(e);let o=zt();return N_(o.setLocatable(r))}),ke(1,"div",7)(2,"icon",8),gi$1(3,"emergency_share"),Ve$1(),ke(4,"div"),gi$1(5),RD(6,"translate"),Ve$1()()(),KK();}if(n&2){let e=zt();Nr$1("ngModel",e.locatable())("toggle",true),QK(),ge(5),Yd$1(l4(6,3,"COMMON.LOCATABLE"));}}function Ym(n,i){if(n&1){let e=AD();ke(0,"div",9),gi$1(1),RD(2,"translate"),Ve$1(),ke(3,"div",10)(4,"span",11),gi$1(5,"A"),Ve$1(),ke(6,"mat-slider",12)(7,"input",13),We("ngModelChange",function(r){O_(e);let o=zt();return N_(o.applySetting("font_size",r))}),Ve$1(),KK(),Ve$1(),ke(8,"span",2),gi$1(9,"A"),Ve$1(),ke(10,"span",14),gi$1(11),Ve$1()();}if(n&2){let e=zt();ge(),ko$1(" ",l4(2,6,"COMMON.TEXT_SIZE_MSG")," "),ge(5),Nr$1("min",10)("max",24)("step",2),ge(),Nr$1("ngModel",e.font_size()),QK(),ge(4),ko$1(" ",e.font_size(),"px ");}}var Dl=(()=>{class n extends Fs$1{constructor(){super(...arguments),this._data=m$1(Be),this._settings=m$1(Ys$1),this.accessible=O(false),this.locatable=O(false),this.can_locate=tee("allow_locatability_option",true),this._allow_dark_mode=this._settings.signal("allow_dark_mode",false),this._font_size=this._settings.signal("font_size",16,true),this._accessible=this._settings.signal("accessible",false,true),this._theme=this._settings.theme_signal,this.dark_mode=De(()=>this._theme()==="dark"),this.can_change_dark_mode=De(()=>!!this._allow_dark_mode()),this.font_size=this._font_size,this.applySetting=(e,t)=>this.timeout("apply_setting",()=>{this._settings.saveUserSetting(e,t),e==="accessible"&&this.accessible.set(t);},500),this.close=()=>this._data?.close(),this.setLocatable=e=>{this._settings.updateLocatable(e),this.locatable.set(e);};}async ngOnInit(){this.accessible.set(!!this._accessible()),this.subscription("user",uke.subscribe(e=>{this.locatable.set(e.locatable);}));}setDarkMode(e){let t=this._theme();e&&t!=="dark"?this._settings.setTheme("dark"):!e&&t==="dark"&&this._settings.setTheme("light");}static{this.\u0275fac=(()=>{let e;return function(r){return (e||(e=Ft(n)))(r||n)}})();}static{this.\u0275cmp=Te$1({type:n,selectors:[["accessibility-tooltip"]],features:[Pe],decls:18,vars:11,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","max-h-[65vh]","w-[20rem]","flex-col","overflow-auto","rounded-sm","pb-3","shadow-sm"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-3",3,"click"],[1,"text-2xl"],[1,""],[1,"space-y-2","p-2"],[3,"ngModel","toggle"],[3,"ngModelChange","ngModel","toggle"],[1,"flex","items-center","space-x-2"],[1,"-ml-2","text-xl"],[1,"bg-base-200","px-8","py-4","text-center"],[1,"flex","items-center","space-x-4","px-4"],[1,"text-sm"],[1,"w-1/2","flex-1","text-[16px]",3,"min","max","step"],["matSliderThumb","",1,"text-[16px]",3,"ngModelChange","ngModel"],[1,"bg-base-300","my-2","rounded-sm","px-2","py-1","text-base","text-white"]],template:function(t,r){t&1&&(ke(0,"div",0)(1,"div",1),We("click",function(){return r.close()}),ke(2,"icon",2),gi$1(3,"arrow_back"),Ve$1(),ke(4,"div",3),gi$1(5),RD(6,"translate"),Ve$1()(),ke(7,"div",4),Fe(8,$m,7,5,"settings-toggle",5),Fe(9,Xm,7,5,"settings-toggle",5),ke(10,"settings-toggle",6),We("ngModelChange",function(c){return r.applySetting("accessible",c)}),ke(11,"div",7)(12,"icon",8),gi$1(13,"playlist_add"),Ve$1(),ke(14,"div"),gi$1(15),RD(16,"translate"),Ve$1()()(),KK(),Ve$1(),Fe(17,Ym,12,8),Ve$1()),t&2&&(ge(5),ko$1(" ",l4(6,7,"COMMON.CONTROLS_ACCESSIBILITY")," "),ge(3),Ue(r.can_change_dark_mode()?8:-1),ge(),Ue(r.can_locate()?9:-1),ge(),Nr$1("ngModel",r.accessible())("toggle",true),QK(),ge(5),Yd$1(l4(16,9,"COMMON.TEXT_SIZE")),ge(2),Ue(r.accessible()?17:-1));},dependencies:[Ml$1,Qw,zr,Ur,Ki,Ls,YQe,F0e,sB,x0e,GQ,NJe],encapsulation:2});}}return n})();function Qm(n,i){if(n&1){let e=AD();ke(0,"mat-radio-button",8),We("click",function(){let r=O_(e).$implicit,o=zt();return N_(o.setBuilding(r))}),gi$1(1),Ve$1();}if(n&2){let e=i.$implicit;Nr$1("value",e.id),ge(),ko$1(" ",e.display_name||e.name," ");}}var Nl=(()=>{class n{constructor(){this._data=m$1(Be),this._org=m$1(WS),this.buildings=this._org.active_buildings,this.building=this._org.active_building,this.setBuilding=e=>{this._org.setBuilding(e,true),this._data?.close();},this.close=()=>this._data?.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te$1({type:n,selectors:[["building-select"]],decls:16,vars:8,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","max-h-[65vh]","w-74","flex-col","overflow-auto","rounded-sm","pb-3","shadow-sm",3,"click"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-3"],[1,"text-2xl"],[1,"leading-tight"],[1,"text-xs","opacity-30"],[1,"px-4","py-2","text-xs","opacity-60"],[1,"flex","flex-col","space-y-2","px-2",3,"ngModel"],[3,"value"],[3,"click","value"]],template:function(t,r){t&1&&(ke(0,"div",0),We("click",function(){return r.close()}),ke(1,"div",1)(2,"icon",2),gi$1(3,"arrow_back"),Ve$1(),ke(4,"div",3)(5,"div"),gi$1(6),Ve$1(),ke(7,"div",4),gi$1(8),RD(9,"translate"),Ve$1()()(),ke(10,"div",5),gi$1(11),RD(12,"translate"),Ve$1(),ke(13,"mat-radio-group",6),t8(14,Qm,2,2,"mat-radio-button",7,e8),Ve$1(),KK(),Ve$1()),t&2&&(ge(6),ko$1(" ",r.building()?.display_name||r.building()?.name," "),ge(2),ko$1(" ",l4(9,4,"RESOURCE.BUILDING")," "),ge(3),ko$1(" ",l4(12,6,"COMMON.BUILDING_SELECT")," "),ge(2),Nr$1("ngModel",r.building()?.id),QK(),ge(),n8(r.buildings()));},dependencies:[Vr,Wi,Ci,YQe,Ml$1,Qw,F0e,x0e,GQ,NJe],encapsulation:2});}}return n})();function Zm(n,i){n&1&&(ke(0,"div",3),gi$1(1),RD(2,"translate"),Ve$1()),n&2&&(ge(),ko$1(" ",l4(2,1,"COMMON.DESK_HEIGHT_NOT_SET")," "));}function Jm(n,i){if(n&1){let e=AD();ke(0,"button",13),We("click",function(){O_(e);let r=zt();return N_(r.onClose())}),gi$1(1),RD(2,"translate"),Ve$1();}n&2&&(ge(),ko$1(" ",l4(2,1,"COMMON.SAVE")," "));}var Al=(()=>{class n{constructor(){this._settings=m$1(Ys$1),this.show_close=EIe(false),this.close=_Ie(),this.not_set=O(false),this.desk_sitting_height=O(71),this.desk_standing_height=O(101);}ngOnInit(){this.not_set.set(!this._settings.get("desk_sitting_height")&&!this._settings.get("desk_standing_height")),this.desk_sitting_height.set(this._settings.get("desk_sitting_height")||71),this.desk_standing_height.set(this._settings.get("desk_standing_height")||101);}onClose(){this.saveSetting("desk_sitting_height",this.desk_sitting_height()),this.saveSetting("desk_standing_height",this.desk_standing_height()),this.close.emit();}formatLabel(e){return `${e.toFixed(1)}cm`}saveSetting(e,t){this._settings.saveUserSetting(e,t);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te$1({type:n,selectors:[["desk-height-presets"]],inputs:{show_close:[1,"show_close"]},outputs:{show_close:"show_closeChange",close:"close"},decls:29,vars:23,consts:[[1,"bg-base-100","relative","w-[20rem]","rounded-sm","p-4","shadow-sm"],[1,"mb-2","text-lg"],[1,"mb-4","text-xs","opacity-60"],[1,"bg-warning","text-warning-content","-mx-2","mb-4","rounded-sm","p-2","text-xs"],[1,"mt-2","flex","flex-col"],[1,"flex","items-center","space-x-2"],["min","60","max","80","step","0.5","discrete","",1,"flex-1",3,"displayWith"],["matSliderThumb","",3,"ngModelChange","ngModel"],[1,"w-12","text-right","text-sm"],[1,"mr-2","flex","items-center","space-x-2"],["min","90","max","120","step","0.5","discrete","",1,"flex-1",3,"displayWith"],[1,"mr-2","w-12","text-right","text-sm"],["btn","","matRipple","",1,"mt-2","w-full"],["btn","","matRipple","",1,"mt-2","w-full",3,"click"]],template:function(t,r){t&1&&(ke(0,"div",0)(1,"div",1),gi$1(2),RD(3,"translate"),Ve$1(),ke(4,"div",2),gi$1(5),RD(6,"translate"),Ve$1(),Fe(7,Zm,3,3,"div",3),ke(8,"div",2),gi$1(9),RD(10,"translate"),Ve$1(),ke(11,"div",4)(12,"label"),gi$1(13),RD(14,"translate"),Ve$1(),ke(15,"div",5)(16,"mat-slider",6)(17,"input",7),We("ngModelChange",function(c){return r.desk_sitting_height.set(c),r.saveSetting("desk_sitting_height",c)}),Ve$1(),KK(),Ve$1(),ke(18,"div",8),gi$1(19),Ve$1()(),ke(20,"label"),gi$1(21),RD(22,"translate"),Ve$1(),ke(23,"div",9)(24,"mat-slider",10)(25,"input",7),We("ngModelChange",function(c){return r.desk_standing_height.set(c),r.saveSetting("desk_standing_height",c)}),Ve$1(),KK(),Ve$1(),ke(26,"div",11),gi$1(27),Ve$1()()(),Fe(28,Jm,3,3,"button",12),Ve$1()),t&2&&(ge(2),ko$1(" ",l4(3,13,"COMMON.DESK_HEIGHT_TITLE")," "),ge(3),ko$1(" ",l4(6,15,"COMMON.DESK_HEIGHT_MSG")," "),ge(2),Ue(r.not_set()&&r.show_close()?7:-1),ge(2),ko$1(" ",l4(10,17,"COMMON.DESK_HEIGHT_INFO")," "),ge(4),Yd$1(l4(14,19,"COMMON.DESK_HEIGHT_SITTING")),ge(3),Nr$1("displayWith",r.formatLabel),ge(),Nr$1("ngModel",r.desk_sitting_height()),QK(),ge(2),ko$1(" ",r.desk_sitting_height().toFixed(1),"cm "),ge(2),ko$1("",l4(22,21,"COMMON.DESK_HEIGHT_STANDING"),"t"),ge(3),Nr$1("displayWith",r.formatLabel),ge(),Nr$1("ngModel",r.desk_standing_height()),QK(),ge(2),ko$1(" ",r.desk_standing_height().toFixed(1),"cm "),ge(),Ue(r.show_close()?28:-1));},dependencies:[Ml$1,Qw,zr,Ur,Ki,F0e,sB,x0e,GQ,NJe],encapsulation:2});}}return n})();function eu(n,i){if(n&1&&(ke(0,"a",4)(1,"div",5),jt(2,"icon",6),ke(3,"div"),gi$1(4),Ve$1()()()),n&2){let e=i.$implicit;Nr$1("href",e.link,_E),ge(2),Nr$1("icon",e.icon),ge(2),Yd$1(e.name);}}var Pl=(()=>{class n{constructor(){this._data=m$1(Be),this._settings=m$1(Ys$1),this._tiles=this._settings.signal("help",[]),this.close=()=>{this._data?.close();};}get tiles(){return this._tiles()}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te$1({type:n,selectors:[["help-tooltip"]],decls:9,vars:3,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","w-74","flex-col","rounded-sm","shadow-sm",3,"click"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-4"],[1,"text-2xl"],[1,""],["matRipple","","target","_blank","ref","noreferer noopener",1,"w-full","p-2","text-left",3,"href"],[1,"hover:bg-base-200","flex","w-full","items-center","space-x-2","rounded-sm","p-2"],[1,"text-xl",3,"icon"]],template:function(t,r){t&1&&(ke(0,"div",0),We("click",function(){return r.close()}),ke(1,"div",1)(2,"icon",2),gi$1(3,"arrow_back"),Ve$1(),ke(4,"div",3),gi$1(5),RD(6,"translate"),Ve$1()(),t8(7,eu,5,3,"a",4,e8),Ve$1()),t&2&&(ge(5),Yd$1(l4(6,1,"COMMON.CONTROLS_HELP")),ge(2),n8(r.tiles));},dependencies:[Ml$1,Qw,YQe,NJe],encapsulation:2});}}return n})();var tu=(n,i)=>i.id;function iu(n,i){if(n&1&&(ke(0,"div",8),gi$1(1),Ve$1()),n&2){let e=zt().$implicit;ge(),ko$1(" ",e.local," ");}}function nu(n,i){if(n&1){let e=AD();ke(0,"button",6),We("click",function(){let r=O_(e).$implicit,o=zt();return N_(o.setLocale(r.id))}),ke(1,"div",7),RD(2,"translate"),ke(3,"div"),gi$1(4),RD(5,"translate"),Ve$1(),Fe(6,iu,2,1,"div",8),RD(7,"translate"),Ve$1()();}if(n&2){let e=i.$implicit,t=zt();ge(),Oe("mt-2",l4(2,8,e.name)!==e.local)("border",t.active_locale===e.id)("border-info",t.active_locale===e.id),ge(3),Yd$1(l4(5,10,e.name)),ge(2),Ue(l4(7,12,e.name)!==e.local?6:-1);}}var Fl=(()=>{class n{constructor(){this._data=m$1(Be),this._settings=m$1(Ys$1),this._locale=m$1(ib),this._locales=this._settings.signal("locales",[]),this.setLocale=e=>{this._locale.setLocale(e),localStorage.setItem("PLACEOS.locale",e),setTimeout(()=>location.reload(),300);},this.close=()=>this._data?.close();}get active_locale(){return this._locale.locale}get locales(){return this._locales()}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te$1({type:n,selectors:[["language-select"]],decls:12,vars:6,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","max-h-[65vh]","w-74","flex-col","overflow-auto","rounded-sm","pb-3","shadow-sm",3,"click"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-3"],[1,"text-2xl"],[1,""],[1,"px-4","py-2","text-xs","opacity-60"],["matRipple","",1,"flex","h-14","items-center","justify-between","space-x-8","px-2","text-left"],["matRipple","",1,"flex","h-14","items-center","justify-between","space-x-8","px-2","text-left",3,"click"],[1,"hover:bg-base-200","flex","flex-1","items-center","justify-between","rounded-sm","p-2","leading-tight"],[1,"bg-base-300","rounded-sm","px-2","py-1","text-xs","opacity-60"]],template:function(t,r){t&1&&(ke(0,"div",0),We("click",function(){return r.close()}),ke(1,"div",1)(2,"icon",2),gi$1(3,"arrow_back"),Ve$1(),ke(4,"div",3),gi$1(5),RD(6,"translate"),Ve$1()(),ke(7,"div",4),gi$1(8),RD(9,"translate"),Ve$1(),t8(10,nu,8,14,"button",5,tu),Ve$1()),t&2&&(ge(5),Yd$1(l4(6,2,"COMMON.LANGUAGE")),ge(3),ko$1(" ",l4(9,4,"COMMON.LANGUAGE_SELECT")," "),ge(2),n8(r.locales));},dependencies:[Ml$1,Qw,YQe,NJe],encapsulation:2});}}return n})();function ru(n,i){if(n&1){let e=AD();ke(0,"mat-radio-button",8),We("click",function(){let r=O_(e).$implicit,o=zt();return N_(o.setRegion(r))}),gi$1(1),Ve$1();}if(n&2){let e=i.$implicit;Nr$1("value",e.id),ge(),ko$1(" ",e.display_name||e.name," ");}}var Vl=(()=>{class n{constructor(){this._data=m$1(Be),this._org=m$1(WS),this.regions=this._org.region_list,this.region=this._org.active_region,this.setRegion=async e=>{await this._org.setRegion(e),this._org.setBuilding(this._org.building,true),this._data?.close();},this.close=()=>this._data?.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te$1({type:n,selectors:[["region-select"]],decls:16,vars:8,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","max-h-[65vh]","w-74","flex-col","overflow-auto","rounded-sm","pb-3","shadow-sm",3,"click"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-3"],[1,"text-2xl"],[1,"leading-tight"],[1,"text-xs","opacity-30"],[1,"px-4","py-2","text-xs","opacity-60"],[1,"flex","flex-col","space-y-2","px-2",3,"ngModel"],[3,"value"],[3,"click","value"]],template:function(t,r){t&1&&(ke(0,"div",0),We("click",function(){return r.close()}),ke(1,"div",1)(2,"icon",2),gi$1(3,"arrow_back"),Ve$1(),ke(4,"div",3)(5,"div"),gi$1(6),Ve$1(),ke(7,"div",4),gi$1(8),RD(9,"translate"),Ve$1()()(),ke(10,"div",5),gi$1(11),RD(12,"translate"),Ve$1(),ke(13,"mat-radio-group",6),t8(14,ru,2,2,"mat-radio-button",7,e8),Ve$1(),KK(),Ve$1()),t&2&&(ge(6),ko$1(" ",r.region()?.display_name||r.region()?.name," "),ge(2),ko$1(" ",l4(9,4,"RESOURCE.REGION")," "),ge(3),ko$1(" ",l4(12,6,"COMMON.REGION_SELECT")," "),ge(2),Nr$1("ngModel",r.region()?.id),QK(),ge(),n8(r.regions()));},dependencies:[Vr,Wi,Ci,YQe,Ml$1,Qw,F0e,x0e,GQ,NJe],encapsulation:2});}}return n})();var Ll=(()=>{class n{constructor(){this._settings=m$1(Ys$1),this._tooltip=m$1(Be,{optional:true}),this.plate_number=O("");}async ngOnInit(){await QV(this._settings.initialised),this.plate_number.set(this._settings.get("plate_number")||"");}save(){this.plate_number()&&this._settings.saveUserSetting("plate_number",this.plate_number()),Zv(_r("COMMON.PARKING_SETTINGS_SAVE")),this._tooltip?.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te$1({type:n,selectors:[["user-parking-tooltip"]],decls:14,vars:13,consts:[[1,"border-base-300","bg-base-100","min-w-[20rem]","space-y-2","rounded-md","border","p-2"],[1,"border-base-300","border-b","text-lg","font-medium"],[1,"flex","flex-col"],["for","plate-number"],["appearance","outline",1,"no-subscript"],["matInput","",3,"ngModelChange","ngModel","placeholder"],["btn","","matRipple","",1,"w-full",3,"click"]],template:function(t,r){t&1&&(ke(0,"div",0)(1,"h3",1),gi$1(2),RD(3,"translate"),Ve$1(),ke(4,"div",2)(5,"label",3),gi$1(6),RD(7,"translate"),Ve$1(),ke(8,"mat-form-field",4)(9,"input",5),RD(10,"translate"),HL("ngModelChange",function(c){return G8(r.plate_number,c)||(r.plate_number=c),c}),Ve$1(),KK(),Ve$1()(),ke(11,"button",6),We("click",function(){return r.save()}),gi$1(12),RD(13,"translate"),Ve$1()()),t&2&&(ge(2),ko$1(" ",l4(3,5,"COMMON.CONTROLS_PARKING")," "),ge(4),Yd$1(l4(7,7,"EXPLORE.PARKING_PLATE_NUMBER")),ge(3),VL("ngModel",r.plate_number),Nr$1("placeholder",l4(10,9,"EXPLORE.PARKING_PLATE_NUMBER")),QK(),ge(3),ko$1(" ",l4(13,11,"COMMON.SAVE")," "));},dependencies:[QN,A3,eJe,JXe,F0e,sB,x0e,GQ,NJe],encapsulation:2});}}return n})();function ou(n,i){if(n&1){let e=AD();ke(0,"button",17),We("click",function(){let r=O_(e).$implicit,o=zt().$index,c=zt(2);return N_(c.setLocation(o,r.id))}),ke(1,"div",18)(2,"icon",11),gi$1(3),Ve$1(),ke(4,"div",19),gi$1(5),RD(6,"translate"),Ve$1()()();}if(n&2){let e=i.$implicit;ge(3),Yd$1(e.icon),ge(2),ko$1(" ",l4(6,2,e.name)," ");}}function au(n,i){n&1&&jt(0,"div",16);}function su(n,i){if(n&1&&(ke(0,"div",9)(1,"div",10)(2,"icon",11),gi$1(3),Ve$1()(),ke(4,"div",12)(5,"button",13)(6,"div"),gi$1(7),Ve$1(),ke(8,"icon"),gi$1(9,"expand_more"),Ve$1()(),ke(10,"mat-menu",null,0),t8(12,ou,7,4,"button",14,e8),Ve$1(),ke(14,"div",15),gi$1(15),RD(16,"date"),RD(17,"date"),Ve$1()(),Fe(18,au,1,0,"div",16),Ve$1()),n&2){let e=i.$implicit,t=i.$index,r=LE(11),o=zt(2);Oe("opacity-30",o.now>o.timeFrom(e.end_time)),ge(),Oe("bg-base-200",o.now<o.timeFrom(e.start_time)||o.now>o.timeFrom(e.end_time))("bg-info",o.now>=o.timeFrom(e.start_time)&&o.now<=o.timeFrom(e.end_time))("text-info-content",o.now>=o.timeFrom(e.start_time)&&o.now<=o.timeFrom(e.end_time)),ge(2),Yd$1(o.location_icon(o.timeFrom(e.start_time))),ge(2),Nr$1("matMenuTriggerFor",r),ge(2),ko$1(" ",o.location(o.timeFrom(e.start_time))," "),ge(5),n8(o.locations()),ge(3),FL(" ",wD(16,14,o.timeFrom(e.start_time),"shortTime")," \u2013 ",wD(17,17,o.timeFrom(e.end_time),"shortTime")," "),ge(3),Ue(t>0?18:-1);}}function lu(n,i){if(n&1&&(ke(0,"div",6),t8(1,su,19,20,"div",8,e8),Ve$1()),n&2){let e=zt();ge(),n8(e.active_preference?.blocks);}}function cu(n,i){n&1&&(ke(0,"div",7)(1,"icon",20),gi$1(2,"event_busy"),Ve$1(),ke(3,"p",21),gi$1(4),RD(5,"translate"),Ve$1(),ke(6,"p",21),gi$1(7),RD(8,"translate"),Ve$1()()),n&2&&(ge(4),ko$1(" ",l4(5,2,"COMMON.WORK_LOCATION_EMPTY")," "),ge(3),ko$1(" ",l4(8,4,"COMMON.WORK_LOCATION_EDIT_INFO")," "));}var Bl=(()=>{class n{constructor(){this._dialog=m$1(QS),this.locations=O([]),this.settings=O(void 0),this.overrides=O({});}get active_preference(){let e=no(new Date,"yyyy-MM-dd");return this.overrides()[e]?this.overrides()[e]:this.settings()?.find(t=>t.day_of_week===new Date().getDay())}get now(){return bl$1(Date.now()).getTime()}ngOnInit(){let e=so$1();this.settings.set(e.work_preferences),this.overrides.set(e.work_overrides),this.locations.set([{id:"wfo",name:_r("COMMON.WORK_OFFICE"),icon:"business"},{id:"wfh",name:_r("COMMON.WORK_HOME"),icon:"home"},{id:"aol",name:_r("COMMON.WORK_LEAVE"),icon:"event_busy"},{id:"sick",name:_r("COMMON.WORK_SICK"),icon:"sick"}]);}location_icon(e){return so$1().location_icon(e+60*1e3)}location(e){return so$1().location_name_time(e+60*1e3)}timeFrom(e){return bl$1(Ci$1(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}editSettings(){this._dialog.open(Br);}async setLocation(e,t){let r=so$1(),o=this.active_preference,c=no(Date.now(),"yyyy-MM-dd"),h=m$2(l({},r.work_overrides),{[c]:m$2(l({},o),{blocks:[...o.blocks.slice(0,e),m$2(l({},o.blocks[e]),{location:t}),...o.blocks.slice(e+1)]})});for(let x in h){let R=As(x,"yyyy-MM-dd",new Date);(!h[x].blocks.length||Qr(R,Pn$1(Dn$1(Date.now()),-1)))&&delete h[x];}this.overrides.set(h),await mV(r.id,m$2(l({},r),{work_overrides:h})),dH();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te$1({type:n,selectors:[["work-location-tooltip"]],decls:14,vars:11,consts:[["work_menu","matMenu"],[1,"bg-base-100","relative","-top-12","-right-1","flex","w-74","flex-col","overflow-hidden","rounded-sm","shadow-sm"],[1,"flex","items-center","justify-between","px-2"],[1,"px-2","py-4","font-medium"],["icon","","matRipple","","matTooltipPosition","left",1,"hover:bg-base-200",3,"click","matTooltip"],[1,"px-4","text-sm","font-medium"],[1,"pb-2"],[1,"flex","w-full","flex-col","items-center","justify-center","space-y-2","p-8","opacity-30"],[1,"relative","flex","items-center","px-4","py-2",3,"opacity-30"],[1,"relative","flex","items-center","px-4","py-2"],[1,"bg-base-200","z-20","flex","h-10","w-10","items-center","justify-center","rounded-full"],[1,"text-2xl"],[1,"ml-2","flex-1"],["matRipple","",1,"hover:bg-base-200","flex","items-center","space-x-2","rounded-sm","px-2","py-1","font-medium",3,"matMenuTriggerFor"],["mat-menu-item",""],[1,"px-2","text-xs","opacity-60"],[1,"border-base-200","absolute","-top-2","left-7","h-4","w-0","-translate-x-px","border-l-2","border-dashed"],["mat-menu-item","",3,"click"],[1,"flex","items-center","space-x-2"],[1,"pr-8"],[1,"text-6xl"],[1,"text-center","text-sm"]],template:function(t,r){t&1&&(ke(0,"div",1)(1,"div",2)(2,"h3",3),gi$1(3),RD(4,"translate"),Ve$1(),ke(5,"button",4),RD(6,"translate"),We("click",function(){return r.editSettings()}),ke(7,"icon"),gi$1(8,"edit_note"),Ve$1()()(),ke(9,"h3",5),gi$1(10),RD(11,"date"),Ve$1(),Fe(12,lu,3,0,"div",6)(13,cu,9,6,"div",7),Ve$1()),t&2&&(ge(3),ko$1(" ",l4(4,4,"COMMON.WORK_LOCATION")," "),ge(2),Nr$1("matTooltip",l4(6,6,"COMMON.WORK_LOCATION_EDIT")),ge(5),ko$1(" ",wD(11,8,r.now,"fullDate")," "),ge(2),Ue(r.active_preference?.blocks?.length?12:13));},dependencies:[K1,Y9e,mi,at,ht,_t,Ml$1,Qw,DJe,Zce,YQe,k6,NJe],encapsulation:2});}}return n})();function du(n,i){if(n&1){let e=AD();ke(0,"button",28),We("click",function(){let r=O_(e).$implicit,o=zt(2);return N_(o.saveSetting("work_location",r.id))}),ke(1,"div",29)(2,"icon",23),gi$1(3),Ve$1(),ke(4,"div",30),gi$1(5),RD(6,"translate"),Ve$1()()();}if(n&2){let e=i.$implicit;ge(3),Yd$1(e.icon),ge(2),ko$1(" ",l4(6,2,e.name)," ");}}function mu(n,i){if(n&1&&(ke(0,"div",7)(1,"h3",19),gi$1(2," Today's Work Location "),Ve$1(),ke(3,"div",20)(4,"div",21)(5,"div",22)(6,"icon",23),gi$1(7),Ve$1()(),ke(8,"div",24)(9,"button",25)(10,"div"),gi$1(11),Ve$1(),ke(12,"icon"),gi$1(13,"expand_more"),Ve$1()(),ke(14,"mat-menu",null,1),t8(16,du,7,4,"button",26,e8),Ve$1(),ke(18,"div",27),gi$1(19),RD(20,"date"),RD(21,"date"),Ve$1()()()()()),n&2){let e=LE(15),t=zt();ge(7),Yd$1(t.location_icon(t.timeFrom(t.active_block().start_time))),ge(2),Nr$1("matMenuTriggerFor",e),ge(2),ko$1(" ",t.location(t.timeFrom(t.active_block().start_time))," "),ge(5),n8(t.pref_locations()),ge(3),FL(" ",wD(20,5,t.timeFrom(t.active_block().start_time),"shortTime")," \u2013 ",wD(21,8,t.timeFrom(t.active_block().end_time),"shortTime")," ");}}function uu(n,i){if(n&1&&(ke(0,"div",8)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),gi$1(5,"layers"),Ve$1()(),ke(6,"div",33),gi$1(7),Ve$1(),ke(8,"icon",34),gi$1(9," chevron_right "),Ve$1()()()()),n&2){let e=zt();Nr$1("content",e.region_select),ge(7),ko$1(" ",e.region()?.display_name||e.region()?.name," ");}}function pu(n,i){if(n&1&&(ke(0,"div",8)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),gi$1(5,"business"),Ve$1()(),ke(6,"div",33),gi$1(7),Ve$1(),ke(8,"icon",34),gi$1(9," chevron_right "),Ve$1()()()()),n&2){let e=zt();Nr$1("content",e.building_select),ge(7),ko$1(" ",e.building()?.display_name||e.building()?.name," ");}}function hu(n,i){if(n&1&&(ke(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),gi$1(5,"help"),Ve$1()(),ke(6,"div",35),gi$1(7),RD(8,"translate"),Ve$1(),ke(9,"icon",34),gi$1(10," chevron_right "),Ve$1()()()()),n&2){let e=zt();Nr$1("content",e.help_tooltip),ge(7),ko$1(" ",l4(8,2,"COMMON.CONTROLS_HELP")," ");}}function _u(n,i){if(n&1&&(ke(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),gi$1(5,"share_location"),Ve$1()(),ke(6,"div",35),gi$1(7),RD(8,"translate"),Ve$1(),ke(9,"icon",34),gi$1(10,"chevron_right"),Ve$1()()()()),n&2){let e=zt();Nr$1("content",e.work_location_tooltip),ge(7),ko$1(" ",l4(8,2,"COMMON.CONTROLS_WORK_LOCATION")," ");}}function fu(n,i){if(n&1&&(ke(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),gi$1(5,"mode_night"),Ve$1()(),ke(6,"div",35),gi$1(7),RD(8,"translate"),Ve$1(),ke(9,"icon",34),gi$1(10,"chevron_right"),Ve$1()()()()),n&2){let e=zt();Oe("border-b!",!e.locales().length||!e.desk_height()),Nr$1("content",e.accessibility_tooltip),ge(7),ko$1(" ",l4(8,4,"COMMON.CONTROLS_ACCESSIBILITY")," ");}}function gu(n,i){if(n&1&&(ke(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),gi$1(5,"desk"),Ve$1()(),ke(6,"div",35),gi$1(7),RD(8,"translate"),Ve$1(),ke(9,"icon",34),gi$1(10," chevron_right "),Ve$1()()()()),n&2){let e=zt(),t=LE(15);Oe("border-b!",!e.locales().length),Nr$1("content",t),ge(7),ko$1(" ",l4(8,4,"COMMON.CONTROLS_DESKS")," ");}}function bu(n,i){n&1&&jt(0,"desk-height-presets");}function vu(n,i){if(n&1&&(ke(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),gi$1(5,"parking_sign"),Ve$1()(),ke(6,"div",35),gi$1(7),RD(8,"translate"),Ve$1(),ke(9,"icon",34),gi$1(10," chevron_right "),Ve$1()()()()),n&2){let e=zt();Oe("border-b!",!e.locales().length),Nr$1("content",e.parking_tooltip),ge(7),ko$1(" ",l4(8,4,"COMMON.CONTROLS_PARKING")," ");}}function yu(n,i){n&1&&(ke(0,"div",37),gi$1(1," Language "),Ve$1());}function xu(n,i){if(n&1&&(ke(0,"div",11)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),gi$1(5,"language"),Ve$1()(),ke(6,"div",36)(7,"div")(8,"div"),gi$1(9),RD(10,"translate"),Ve$1(),Fe(11,yu,2,0,"div",37),RD(12,"translate"),Ve$1(),ke(13,"div",38),RD(14,"translate"),gi$1(15),RD(16,"translate"),Ve$1()(),ke(17,"icon",34),gi$1(18," chevron_right "),Ve$1()()()()),n&2){let e=zt();Nr$1("content",e.language_tooltip),ge(9),ko$1(" ",l4(10,5,"COMMON.LANGUAGE")," "),ge(2),Ue(l4(12,7,"COMMON.LANGUAGE")!=="Language"?11:-1),ge(2),Nr$1("matTooltip",l4(14,9,e.active_locale)),ge(2),ko$1(" ",l4(16,11,e.active_locale)," ");}}function ku(n,i){if(n&1){let e=AD();ke(0,"button",39),We("click",function(){O_(e);let r=zt();return N_(r.newSupportTicket())}),ke(1,"div",31)(2,"div",32)(3,"icon"),gi$1(4,"support_agent"),Ve$1()(),ke(5,"div",35),gi$1(6),RD(7,"translate"),Ve$1()()();}n&2&&(ge(6),ko$1(" ",l4(7,1,"COMMON.CONTROLS_SUPPORT")," "));}function Cu(n,i){if(n&1){let e=AD();ke(0,"button",40),We("click",function(){O_(e);let r=zt();return N_(r.reloadPage())}),gi$1(1),RD(2,"translate"),Ve$1();}n&2&&(ge(),ko$1(" ",l4(2,1,"COMMON.CONTROLS_NEW_VERSION")," "));}function Mu(n,i){if(n&1){let e=AD();ke(0,"button",41),We("click",function(){O_(e);let r=zt();return N_(r.viewChangelog())}),gi$1(1),Ve$1();}if(n&2){let e=zt();ge(),ko$1(" ",e.version.hash," ");}}function wu(n,i){if(n&1&&(ke(0,"span"),gi$1(1),Ve$1()),n&2){let e=zt();ge(),Yd$1(e.version.hash);}}var Ul=(()=>{class n{constructor(){this._settings=m$1(Ys$1),this._org=m$1(WS),this._dialog=m$1(QS),this._locale=m$1(ib),this.building=this._org.active_building,this.region=this._org.active_region,this.regions=this._org.region_list,this.sidebar=Cs(false),this.accessibility=tee("allow_accessibility_changes",true),this.show_changelog=tee("show_changelog",true),this.region_select=Vl,this.building_select=Nl,this.help_tooltip=Pl,this.accessibility_tooltip=Dl,this.language_tooltip=Fl,this.work_location_tooltip=Bl,this.parking_tooltip=Ll,this.features=tee("features",[]),this._locales=this._settings.signal("locales",[]),this._desk_height=this._settings.signal("desks.height_enabled",false),this._use_region=this._settings.signal("use_region",false),this._disable_building_select=this._settings.signal("disable_building_select",false),this.pref_locations=O([]),this.work_prefs=O([]),this.overrides=O({}),this.active_block=De(()=>{let e=no(new Date,"yyyy-MM-dd"),t=new Date().getDay();return (this.overrides()[e]?this.overrides()[e]:this.work_prefs().find(o=>o.day_of_week===t))?.blocks?.find(o=>this.now>=this.timeFrom(o.start_time)&&this.now<this.timeFrom(o.end_time))}),this.active_index=De(()=>{let e=no(new Date,"yyyy-MM-dd"),t=new Date().getDay();return (this.overrides()[e]?this.overrides()[e]:this.work_prefs().find(o=>o.day_of_week===t))?.blocks?.findIndex(o=>this.now>=this.timeFrom(o.start_time)&&this.now<this.timeFrom(o.end_time))}),this.locales=this._locales,this.desk_height=this._desk_height,this.use_region=this._use_region,this.disable_building_select=this._disable_building_select;}location_icon(e){return so$1().location_icon(e+60*1e3)}location(e){return so$1().location_name_time(e+60*1e3)}timeFrom(e){return bl$1(Ci$1(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}get user(){return so$1()}get groups(){return this.user?.groups?.join(`
`)||""}get version(){return Qh}get active_locale(){let e=this.locales(),t=this._locale.locale;for(let r of e)if(r.id===t)return r.name;return "LANGUAGE.ENGLISH"}get now(){return bl$1(Date.now()).getTime()}get has_new_version(){return Vj()}ngOnInit(){let e=so$1();this.work_prefs.set(e?.work_preferences||[]),this.overrides.set(e?.work_overrides||{}),this.pref_locations.set([{id:"wfo",name:_r("COMMON.WORK_OFFICE"),icon:"business"},{id:"wfh",name:_r("COMMON.WORK_HOME"),icon:"home"},{id:"aol",name:_r("COMMON.WORK_LEAVE"),icon:"event_busy"},{id:"sick",name:_r("COMMON.WORK_SICK"),icon:"sick"}]);}logout(){G0e();}reloadPage(){location.reload();}newSupportTicket(){this._settings.get("app.external_support_url")?window.open(this._settings.get("app.external_support_url"),"_blank"):this._dialog.open(El);}openWfhModal(){this._dialog.open(Br);}async viewChangelog(){let e=await(await fetch("https://raw.githubusercontent.com/PlaceOS/user-interfaces/develop/CHANGELOG.md")).text();this._dialog.open(wl,{data:{changelog:e}});}saveSetting(e,t){this._settings.saveUserSetting(e,t);}formatLabel(e){return `${e.toFixed(1)}cm`}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te$1({type:n,selectors:[["user-controls"]],inputs:{sidebar:[1,"sidebar"]},decls:35,vars:32,consts:[["desk_height_tooltip",""],["work_menu","matMenu"],[1,"divide-base-200","border-base-300","bg-base-100","relative","mt-1","flex","flex-col","divide-y","overflow-auto","rounded-sm","border","shadow-sm"],["avatar","",1,"flex","w-full","min-w-72","flex-col","items-center","p-2"],[1,"text-2xl",3,"user","matTooltip"],[1,""],[1,"truncate","text-xs","opacity-60"],[1,"border-base-200","w-full","rounded-sm","border-y","py-2"],["customTooltip","",1,"relative",3,"content"],["customTooltip","",3,"content"],["customTooltip","",3,"content","border-b!"],["customTooltip","",1,"border-b!",3,"content"],["btn","","matRipple","",1,"clear","h-14","w-full","text-left"],[1,"flex","flex-col","items-center","p-4"],[1,"mb-4","flex","items-center","justify-center","space-x-2"],["btn","","matRipple","",1,"inverse",3,"click"],["btn","","matRipple",""],[1,"w-full","text-xs","opacity-60"],[1,"m-0","border-none","bg-none","p-0","text-xs","underline"],[1,"w-full","px-4","pb-2","text-sm","font-medium"],[1,"w-full"],[1,"relative","flex","items-center","px-4","py-2"],[1,"bg-info","text-info-content","z-20","flex","h-10","w-10","items-center","justify-center","rounded-full"],[1,"text-2xl"],[1,"ml-2","flex-1"],["matRipple","",1,"hover:bg-base-200","flex","items-center","space-x-2","rounded-sm","px-2","py-1","font-medium",3,"matMenuTriggerFor"],["mat-menu-item",""],[1,"px-2","text-xs","opacity-60"],["mat-menu-item","",3,"click"],[1,"flex","items-center","space-x-2"],[1,"pr-8"],[1,"flex","w-full","items-center","space-x-2"],[1,"bg-base-200","flex","h-8","w-8","items-center","justify-center","rounded-full"],[1,"w-px","flex-1","truncate"],[1,"text-2xl","opacity-60"],[1,"flex-1"],[1,"flex","flex-1","items-center","justify-between","space-x-4"],[1,"text-xs","opacity-30"],[1,"bg-base-200","max-w-24","truncate","rounded-sm","px-2","py-1","text-sm",3,"matTooltip"],["btn","","matRipple","",1,"clear","h-14","w-full","text-left",3,"click"],["btn","","matRipple","",3,"click"],[1,"m-0","border-none","bg-none","p-0","text-xs","underline",3,"click"]],template:function(t,r){t&1&&(ke(0,"div",2)(1,"div",3),jt(2,"a-user-avatar",4),ke(3,"div",5),gi$1(4),Ve$1(),ke(5,"div",6),gi$1(6),Ve$1()(),Fe(7,mu,22,11,"div",7),Fe(8,uu,10,2,"div",8),Fe(9,pu,10,2,"div",8),Fe(10,hu,11,4,"div",9),Fe(11,_u,11,4,"div",9),Fe(12,fu,11,6,"div",10),Fe(13,gu,11,6,"div",10),hi$1(14,bu,1,0,"ng-template",null,0,ND),Fe(16,vu,11,6,"div",10),Fe(17,xu,19,13,"div",11),Fe(18,ku,8,3,"button",12),ke(19,"div",13)(20,"div",14)(21,"button",15),We("click",function(){return r.logout()}),gi$1(22),RD(23,"translate"),Ve$1(),Fe(24,Cu,3,3,"button",16),Ve$1(),ke(25,"div",17),TD(26),gi$1(27),RD(28,"translate"),ID(),Fe(29,Mu,2,1,"button",18)(30,wu,2,1,"span"),Ve$1(),ke(31,"div",17),gi$1(32),RD(33,"date"),RD(34,"date"),Ve$1()()()),t&2&&(Oe("border",!r.sidebar()),ge(2),Nr$1("user",r.user)("matTooltip",r.groups),ge(2),Yd$1(r.user?.name),ge(2),ko$1(" ",r.user?.email," "),ge(),Ue(r.features().includes("wfh")&&r.active_block()?7:-1),ge(),Ue(r.regions()?.length?8:-1),ge(),Ue(!r.disable_building_select()&&!r.use_region()?9:-1),ge(),Ue(r.features().includes("help")?10:-1),ge(),Ue(r.features().includes("wfh")?11:-1),ge(),Ue(r.accessibility()?12:-1),ge(),Ue(r.desk_height()?13:-1),ge(3),Ue(r.features().includes("parking-controls")?16:-1),ge(),Ue(r.locales().length>1?17:-1),ge(),Ue(r.features().includes("support-ticket")?18:-1),ge(4),ko$1(" ",l4(23,22,"COMMON.CONTROLS_SIGN_OUT")," "),ge(2),Ue(r.has_new_version?24:-1),ge(3),ko$1(" ",l4(28,24,"COMMON.CONTROLS_VERSION"),": "),ge(2),Ue(r.show_changelog()?29:30),ge(3),FL(" ",wD(33,26,r.version.time,"longDate")," (",wD(34,29,r.version.time,"shortTime"),") "));},dependencies:[K1,Y9e,Ml$1,Qw,YQe,bl,DJe,Zce,Lr,mi,at,ht,_t,Al,k6,NJe],encapsulation:2});}}return n})();var Tu=["*"];function Eu(n,i){n&1&&(ke(0,"icon",2),gi$1(1,"person"),Ve$1());}function Su(n,i){if(n&1){let e=AD();ke(0,"div",1)(1,"button",3),We("click",function(){O_(e);let r=zt();return N_(r.close())}),Ve$1(),ke(2,"div",4)(3,"div",5),jt(4,"user-controls",6),ke(5,"button",7),We("click",function(){O_(e);let r=zt();return N_(r.close())}),ke(6,"icon",2),gi$1(7,"close"),Ve$1()()()()();}if(n&2){let e=zt();ge(),Oe("opacity-50",e.is_open())("opacity-0",!e.is_open()),ge(2),Oe("translate-x-0",e.is_open())("translate-x-full",!e.is_open()),ge(),Nr$1("sidebar",true);}}var zl=(()=>{class n{constructor(){this._close_timeout=null,this.is_open=O(false),this.is_rendered=O(false);}open(){this._close_timeout&&(clearTimeout(this._close_timeout),this._close_timeout=null),this.is_rendered.set(true),requestAnimationFrame(()=>this.is_open.set(true));}close(){this.is_open.set(false),this._close_timeout=setTimeout(()=>{this.is_rendered.set(false),this._close_timeout=null;},200);}onEscape(){this.is_open()&&this.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te$1({type:n,selectors:[["user-controls-sidebar"]],hostBindings:function(t,r){t&1&&We("keydown.escape",function(){return r.onEscape()},Aq);},ngContentSelectors:Tu,decls:4,vars:1,consts:[["icon","","matRipple","","avatar","","type","button","name","user-controls",1,"bg-base-200","flex","h-10","w-10","items-center","justify-center","rounded-full",3,"click"],[1,"fixed","inset-0","z-9999","overflow-hidden"],[1,"text-2xl"],["type","button","aria-label","Close user controls",1,"absolute","inset-0","bg-black","transition-opacity","duration-200",3,"click"],[1,"absolute","inset-y-0","right-0","flex","max-w-full"],[1,"bg-base-100","relative","h-full","w-80","max-w-[100vw]","overflow-auto","pt-[calc(env(safe-area-inset-top)+1rem)]","pb-[env(safe-area-inset-bottom)]","pr-[env(safe-area-inset-right)]","shadow-xl","transition-transform","duration-200","ease-out"],[3,"sidebar"],["icon","","default","","matRipple","","type","button",1,"absolute","top-[calc(env(safe-area-inset-top)+0.5rem)]","right-[calc(env(safe-area-inset-right)+0.5rem)]",3,"click"]],template:function(t,r){t&1&&(gn(),ke(0,"button",0),We("click",function(){return r.open()}),Le(1,0,null,Eu,2,0),Ve$1(),Fe(3,Su,8,9,"div",1)),t&2&&(ge(3),Ue(r.is_rendered()?3:-1));},dependencies:[Ml$1,Qw,YQe,Ul],encapsulation:2});}}return n})();var Iu=["editor"];function Ru(n,i){if(n&1){let e=AD();ke(0,"button",20),We("click",function(){O_(e);let r=zt(2);return N_(r.insertImage())}),ke(1,"icon"),gi$1(2,"image"),Ve$1()(),ke(3,"button",20),We("click",function(){O_(e);let r=zt(2);return N_(r.insertAttachment())}),ke(4,"icon"),gi$1(5,"attachment"),Ve$1()();}}function Ou(n,i){if(n&1){let e=AD();ke(0,"div",3)(1,"select",5),We("change",function(r){O_(e);let o=zt();return N_(o.setFontFace(r))}),ke(2,"option",6),gi$1(3,"Font"),Ve$1(),ke(4,"option",7),gi$1(5,"Arial"),Ve$1(),ke(6,"option",8),gi$1(7,"Helvetica"),Ve$1(),ke(8,"option",9),gi$1(9,"Georgia"),Ve$1(),ke(10,"option",10),gi$1(11,"Times New Roman"),Ve$1()(),ke(12,"select",11),We("change",function(r){O_(e);let o=zt();return N_(o.setFontSize(r))}),ke(13,"option",12),gi$1(14,"Size"),Ve$1(),ke(15,"option",13),gi$1(16,"12"),Ve$1(),ke(17,"option",14),gi$1(18,"14"),Ve$1(),ke(19,"option",15),gi$1(20,"16"),Ve$1(),ke(21,"option",16),gi$1(22,"18"),Ve$1(),ke(23,"option",17),gi$1(24,"24"),Ve$1(),ke(25,"option",18),gi$1(26,"32"),Ve$1(),ke(27,"option",19),gi$1(28,"48"),Ve$1()(),ke(29,"button",20),We("click",function(){O_(e);let r=zt();return N_(r.toggleBold())}),ke(30,"icon"),gi$1(31,"format_bold"),Ve$1()(),ke(32,"button",20),We("click",function(){O_(e);let r=zt();return N_(r.toggleItalic())}),ke(33,"icon"),gi$1(34,"format_italic"),Ve$1()(),ke(35,"button",20),We("click",function(){O_(e);let r=zt();return N_(r.toggleUnderline())}),ke(36,"icon"),gi$1(37,"format_underlined"),Ve$1()(),ke(38,"button",20),We("click",function(){O_(e);let r=zt();return N_(r.makeUnorderedList())}),ke(39,"icon"),gi$1(40,"format_list_bulleted"),Ve$1()(),ke(41,"button",20),We("click",function(){O_(e);let r=zt();return N_(r.makeOrderedList())}),ke(42,"icon"),gi$1(43,"format_list_numbered"),Ve$1()(),ke(44,"button",20),We("click",function(){O_(e);let r=zt();return N_(r.insertLink())}),ke(45,"icon"),gi$1(46,"link"),Ve$1()(),Fe(47,Ru,6,0),Ve$1();}if(n&2){let e=zt();ge(29),Oe("border-info",e.toolbar_state().bold)("text-info",e.toolbar_state().bold),ge(3),Oe("border-info",e.toolbar_state().italic)("text-info",e.toolbar_state().italic),ge(3),Oe("border-info",e.toolbar_state().underline)("text-info",e.toolbar_state().underline),ge(3),Oe("border-info",e.toolbar_state().unordered_list)("text-info",e.toolbar_state().unordered_list),ge(3),Oe("border-info",e.toolbar_state().ordered_list)("text-info",e.toolbar_state().ordered_list),ge(3),Oe("border-info",e.toolbar_state().link)("text-info",e.toolbar_state().link),ge(3),Ue(e.images_allowed()?47:-1);}}var Tl=(()=>{class n extends Fs$1{constructor(){super(...arguments),this._uploads=m$1(c7e),this._dom_sanitizer=m$1(Zc$1),this._ng_zone=m$1(B),this.placeholder=Cs(""),this.readonly=Cs(false),this.images_allowed=Cs(false),this._editor_el=Up("editor"),this._onChange=()=>{},this._onTouch=()=>{},this.toolbar_state=O({bold:false,italic:false,underline:false,unordered_list:false,ordered_list:false,link:false}),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e,this._syncValue=()=>{this._editor&&this.setValue(this._editor.getHTML());},this._handleTouched=()=>{this._editor&&this._onTouch();},this._refreshToolbarState=()=>{this._editor&&this._ng_zone.run(()=>{this.toolbar_state.set({bold:this._editor.hasFormat("B"),italic:this._editor.hasFormat("I"),underline:this._editor.hasFormat("U"),unordered_list:this._editor.hasFormat("UL"),ordered_list:this._editor.hasFormat("OL"),link:this._editor.hasFormat("A")});});};}ngOnChanges(e){e.placeholder&&this.timeout("init",()=>this._initialiseEditor()),e.readonly&&this._editor&&this._setReadonlyState();}ngAfterViewInit(){this.timeout("init",()=>this._initialiseEditor());}setValue(e){this._onChange(e);}writeValue(e){this.timeout("write",()=>{this._editor?(this._editor.setHTML(e||""),this._setPlaceholder()):this.timeout("write",()=>this.writeValue(e));});}toggleBold(){this._toggleFormat("B",()=>this._editor.removeBold(),()=>this._editor.bold());}toggleItalic(){this._toggleFormat("I",()=>this._editor.removeItalic(),()=>this._editor.italic());}toggleUnderline(){this._toggleFormat("U",()=>this._editor.removeUnderline(),()=>this._editor.underline());}makeUnorderedList(){this._toggleFormat("UL",()=>this._editor.removeList(),()=>this._editor.makeUnorderedList());}makeOrderedList(){this._toggleFormat("OL",()=>this._editor.removeList(),()=>this._editor.makeOrderedList());}insertLink(){if(!this._editor)return;if(this._editor.hasFormat("A")){this._editor.removeLink(),this._syncValue(),this._refreshToolbarState();return}let e=prompt("Enter URL");e&&(this._editor.makeLink(e),this._syncValue(),this._refreshToolbarState());}setFontFace(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontFace(t==="default"?"inherit":t),this._syncValue());}setFontSize(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontSize(t),this._syncValue());}insertImage(){this._embedFile(true);}insertAttachment(){this._embedFile(false);}async _initialiseEditor(){let e=this._editor_el()?.nativeElement;if(!e)return this.timeout("init",()=>this._initialiseEditor());let{default:t}=await import('./chunk-CRXfBZqR.js');this._editor&&this._editor.destroy(),e.innerHTML="",this._editor=new t(e,{blockTag:"div",sanitizeToDOMFragment:r=>{let o=this._dom_sanitizer.sanitize(Or$1.HTML,r||"")||"",c=document.createElement("template");return c.innerHTML=o,c.content.cloneNode(true)}}),this._editor.addEventListener("input",this._syncValue),this._editor.addEventListener("blur",this._handleTouched),this._editor.addEventListener("cursor",this._refreshToolbarState),this._editor.addEventListener("select",this._refreshToolbarState),this._editor.addEventListener("pathChange",this._refreshToolbarState),this._setReadonlyState(),this._setPlaceholder(),this._refreshToolbarState();}_embedFile(e){if(!this._editor)return;let t=document.createElement("input");t.setAttribute("type","file"),e&&t.setAttribute("accept","image/*"),t.click(),t.onchange=()=>{let r=t.files?.[0];r&&this._uploads.uploadFile(r,true).then(o=>{if(!o)return;let c=`${location.origin}/api/engine/v2/uploads/${encodeURIComponent(o)}/url`;this._setAuth(),setTimeout(()=>{this._insertUploadedFile(c,r,e),this._syncValue();},100);});};}_setReadonlyState(){let e=this._editor_el()?.nativeElement;e&&e.setAttribute("contenteditable",`${!this.readonly()}`);}_setPlaceholder(){let e=this._editor_el()?.nativeElement;e&&e.setAttribute("data-placeholder",this.placeholder()||"");}_toggleFormat(e,t,r){this._editor&&(this._editor.hasFormat(e)?t():r(),this._syncValue(),this._refreshToolbarState());}_insertUploadedFile(e,t,r){let o=t.type.startsWith("image/");if(r||o){this._editor.insertHTML(`<img src="${e}" alt="${t.name}" />`);return}this._editor.insertHTML(`<a href="${e}" target="_blank">${t.name}</a>`);}_setAuth(){let e=Wt$1();document.cookie=`${e==="x-api-key"?"api-key="+encodeURIComponent(ml$1()):"bearer_token="+encodeURIComponent(e)};max-age=30;path=/api/engine/v2/uploads;samesite=strict;${location.protocol==="https:"?"secure;":""}`;}static{this.\u0275fac=(()=>{let e;return function(r){return (e||(e=Ft(n)))(r||n)}})();}static{this.\u0275cmp=Te$1({type:n,selectors:[["rich-text-input"]],viewQuery:function(t,r){t&1&&kE(r._editor_el,Iu,5),t&2&&PE();},inputs:{placeholder:[1,"placeholder"],readonly:[1,"readonly"],images_allowed:[1,"images_allowed"]},features:[ft([{provide:vu$1,useExisting:An$1(()=>n),multi:true}]),Pe,At$1],decls:5,vars:1,consts:[["container",""],["editor",""],[1,"w-full"],[1,"border-base-300","bg-base-100","flex","flex-wrap","items-center","gap-1","rounded-t","border","p-2"],[1,"squire-editor"],[1,"border-base-300","bg-base-100","rounded","border","p-2","text-sm",3,"change"],["value","default"],["value","Arial"],["value","Helvetica"],["value","Georgia"],["value","Times New Roman"],[1,"border-base-300","bg-base-100","min-w-24","rounded","border","p-2","text-sm",3,"change"],["value",""],["value","12px"],["value","14px"],["value","16px"],["value","18px"],["value","24px"],["value","32px"],["value","48px"],["icon","","type","button",1,"border-base-300","rounded","border","px-2","py-1","text-sm",3,"click"]],template:function(t,r){t&1&&(ke(0,"div",2,0),Fe(2,Ou,48,25,"div",3),jt(3,"div",4,1),Ve$1()),t&2&&(ge(2),Ue(r.readonly()?-1:2));},dependencies:[YQe],styles:["[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]     .squire-editor{border-radius:.25rem;border:1px solid var(--base-300);padding:.5rem;min-height:8rem;width:100%;outline:none}[_nghost-%COMP%]     .squire-editor:empty:before{content:attr(data-placeholder);color:var(--base-content);opacity:.5}[_nghost-%COMP%]     .squire-editor ul{list-style-type:disc;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor ol{list-style-type:decimal;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor li{margin:.125rem 0}"]});}}return n})();var Du=(n,i)=>i.id+""+n;function Nu(n,i){if(n&1&&(ke(0,"a",1)(1,"icon",2),gi$1(2),Ve$1(),ke(3,"span",3),gi$1(4),Ve$1()()),n&2){let e=zt().$implicit;Nr$1("routerLink",e.route),ge(2),Yd$1(e.icon),ge(2),Yd$1(e.name);}}function Au(n,i){if(n&1){let e=AD();ke(0,"button",6),We("click",function(){O_(e);let r=zt(2).$implicit,o=zt();return N_(o.toggleBlock(r.id||r._id))}),ke(1,"icon",2),gi$1(2),Ve$1(),ke(3,"div",7),gi$1(4),Ve$1(),ke(5,"icon",8),gi$1(6,"arrow_drop_down"),Ve$1()();}if(n&2){let e=zt(2).$implicit;ge(2),ko$1(" ",e.icon," "),ge(2),ko$1(" ",e.name," ");}}function Pu(n,i){if(n&1&&(ke(0,"a",9),jt(1,"icon",8),ke(2,"span"),gi$1(3),Ve$1()()),n&2){let e=i.$implicit;Nr$1("routerLink",e.route),ge(3),Yd$1(e.name);}}function Fu(n,i){if(n&1&&(ke(0,"section",5),t8(1,Pu,4,2,"a",9,e8),Ve$1()),n&2){let e=zt(2).$implicit,t=zt();Nr$1("@show",t.isBlockCollapsed(e.id||e._id)?"hide":"show"),ge(),n8(e.children);}}function Vu(n,i){if(n&1&&(Fe(0,Au,7,2,"button",4),Fe(1,Fu,3,1,"section",5)),n&2){let e=zt().$implicit;Ue(e.children?.length?0:-1),ge(),Ue(e.children?.length?1:-1);}}function Lu(n,i){if(n&1&&Fe(0,Nu,5,3,"a",1)(1,Vu,2,2),n&2){let e=i.$implicit;Ue(e.children?1:0);}}var tk=(()=>{class n extends Fs$1{constructor(){super(),this._settings=m$1(Ys$1),this._org=m$1(WS),this._element_ref=m$1(j),this.show_block=O({}),this.links=[],this.filtered_links=O([]),Tt(()=>{this._org.active_building()&&this.timeout("update_links",()=>this.updateFilteredLinks(),500);});}get feature_list(){return this._settings.get("app.features")||[]}get feature_groups(){return this._settings.get("app.feature_groups")||{}}get is_admin(){let e=so$1().groups||[],t=this._settings.get("app.admin_group")||"admin";return e.includes(t)||e.includes("placeos_admin")||e.includes("placeos_support")}async ngOnInit(){await this._org.waitUntilInitialised(),this.links=[{name:_r("APP.CONCIERGE.MENU_BOOKINGS"),icon:"add_circle",children:[{id:"spaces",name:_r("APP.CONCIERGE.MENU_ROOM_BOOKINGS"),route:["/book/rooms"]},{id:"desks",name:_r("APP.CONCIERGE.MENU_DESK_BOOKINGS"),route:["/book/desks/events"]},{id:"parking",name:_r("APP.CONCIERGE.MENU_PARKING_BOOKINGS"),route:["/book/parking/events"]},{id:"parking-bookings",name:_r("APP.CONCIERGE.MENU_PARKING_BOOKINGS"),route:["/book/parking/events"]},{id:"lockers",name:_r("APP.CONCIERGE.MENU_LOCKER_BOOKINGS"),route:["/book/lockers/events"]},{id:"assets",name:_r("APP.CONCIERGE.MENU_ASSET_BOOKINGS"),route:["/book/assets/list/requests"]},{id:"catering",name:_r("APP.CONCIERGE.MENU_CATERING_BOOKINGS"),route:["/book/catering/orders"]},{id:"visitors",name:_r("APP.CONCIERGE.MENU_VISITOR_BOOKINGS"),route:["/book/visitors"]},{id:"visitor-rules",name:_r("APP.CONCIERGE.MENU_VISITOR_RULES"),route:["/book/visitors/rules"]}]},{id:"facilities",name:_r("APP.CONCIERGE.MENU_MANAGEMENT"),icon:"place",children:[{id:"zones",name:_r("APP.CONCIERGE.MENU_MANAGE_ZONES"),route:["/zone-management"]},{id:"spaces",name:_r("APP.CONCIERGE.MENU_MANAGE_ROOMS"),route:["/room-management"]},{id:"desks",name:_r("APP.CONCIERGE.MENU_MANAGE_DESKS"),route:["/book/desks/manage"]},{id:"parking",name:_r("APP.CONCIERGE.MENU_MANAGE_PARKING"),route:["/book/parking/manage"]},{id:"parking-manage",name:_r("APP.CONCIERGE.MENU_MANAGE_PARKING"),route:["/book/parking/manage"]},{id:"lockers",name:_r("APP.CONCIERGE.MENU_MANAGE_LOCKERS"),route:["/book/lockers/manage"]},{id:"catering",name:_r("APP.CONCIERGE.MENU_MANAGE_CATERING"),route:["/book/catering/menu"]},{id:"points",name:_r("APP.CONCIERGE.MENU_MANAGE_POINTS"),route:["/points-management"]},{id:"emergency-contacts",name:_r("APP.CONCIERGE.MENU_MANAGE_CONTACTS"),icon:"assignment_ind",route:["/users/staff/emergency-contacts"]},{id:"signage",name:_r("APP.CONCIERGE.MENU_MANAGE_SIGNAGE"),route:["/signage"]},{id:"points-of-interest",name:_r("APP.CONCIERGE.MENU_MANAGE_MAP_FEATURES"),route:["/points-of-interest"]},{id:"url-management",name:_r("APP.CONCIERGE.MENU_MANAGE_URLS"),route:["/url-management"]},{id:"email-templates",name:_r("APP.CONCIERGE.MENU_MANAGE_EMAILS"),route:["/email-templates"]},{id:"deals-n-offers",name:_r("APP.CONCIERGE.MENU_MANAGE_DEALS"),route:["/deals-n-offers"]}]},{id:"assets",name:_r("APP.CONCIERGE.MENU_ASSETS"),route:["/book/assets/list/items"],icon:"vibration"},{id:"internal-users",name:_r("APP.CONCIERGE.MENU_USER_LIST"),icon:"assignment_ind",route:["/users/staff"]},{id:"events",name:_r("APP.CONCIERGE.MENU_EVENTS"),route:["/entertainment/events"],icon:"confirmation_number"},{id:"surveys",name:_r("APP.CONCIERGE.MENU_SURVEYS"),route:["/surveys"],icon:"add_reaction"},{_id:"reports",name:_r("APP.CONCIERGE.MENU_REPORTS"),icon:"analytics",children:[{id:"attendance-report",name:_r("APP.CONCIERGE.MENU_REPORT_SITE_ATTENDANCE"),route:["/reports/attendance"]},{id:"booking-report",name:_r("APP.CONCIERGE.MENU_REPORT_ROOMS"),route:["/reports/bookings"]},{id:"desk-report",name:_r("APP.CONCIERGE.MENU_REPORT_DESKS"),route:["/reports/desks"]},{id:"parking-report",name:_r("APP.CONCIERGE.MENU_REPORT_PARKING"),route:["/reports/parking"]},{id:"lockers-report",name:_r("APP.CONCIERGE.MENU_REPORT_LOCKERS"),route:["/reports/lockers"]},{id:"catering-report",name:_r("APP.CONCIERGE.MENU_REPORT_CATERING"),route:["/reports/catering"]},{id:"contact-tracing-report",name:_r("APP.CONCIERGE.MENU_REPORT_CONTACT_TRACING"),route:["/reports/contact-tracing"]},{id:"assets-report",name:_r("APP.CONCIERGE.MENU_REPORT_ASSETS"),route:["/reports/assets"]},{id:"visitors-report",name:_r("APP.CONCIERGE.MENU_REPORT_VISITORS"),route:["/reports/visitors"]}]}],this.updateFilteredLinks(),this.timeout("update_inview",()=>this._moveActiveLinkIntoView(),50),this.timeout("update_links",()=>this.updateFilteredLinks(),500);}_isFeatureAvailable(e){if(e.startsWith("*"))return  true;let t=this.feature_list.includes(e),r=this.feature_groups[e]||[],o=so$1().groups;return !!(t&&(this.is_admin||!r.length||o.find(c=>r.includes(c))))}updateFilteredLinks(){let e=this._settings.get("app.custom_reports")||[];if(e.length&&this.links.find(t=>t._id==="reports")){let t=this.links.find(r=>r._id==="reports");t.children=Ri(t.children.concat(e.map(r=>m$2(l({},r),{id:`*${r.id}`,route:["/reports",r.id]}))),"id");}if(this.filtered_links.set(this.links.map(t=>m$2(l({},t),{children:t.children?t.children.filter(r=>this._isFeatureAvailable(r.id)):null})).filter(t=>(!t.id||t.id==="home"||this._isFeatureAvailable(t.id))&&t.route||t.children?.length)),this.filtered_links().find(t=>t.id==="home")){let t=this.filtered_links().find(r=>r.id==="home");t.route=this._settings.get("app.default_route")||["/"];}this.is_admin||this.filtered_links.update(t=>t.filter(r=>r.id!=="facilities"));}toggleBlock(e){this.show_block.update(t=>m$2(l({},t),{[e]:!t[e]}));}isBlockCollapsed(e){return !!this.show_block()[e]}_moveActiveLinkIntoView(){let e=this._element_ref.nativeElement.querySelector("a.active");e&&e.scrollIntoView({block:"center",behavior:"instant"});}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te$1({type:n,selectors:[["app-sidebar"]],features:[Pe],decls:3,vars:0,consts:[[1,"border-base-200","h-full","w-64","overflow-auto","border-r","py-2","pr-3"],["matRipple","","routerLinkActive","active",1,"hover:bg-base-200","my-1","flex","w-full","items-center","space-x-2","rounded-r-full","p-1",3,"routerLink"],[1,"text-2xl","opacity-60"],[1,"font-medium"],["matRipple","",1,"hover:bg-base-200","my-1","flex","w-full","items-center","space-x-2","rounded-r-full","p-1"],[1,"w-full","overflow-hidden"],["matRipple","",1,"hover:bg-base-200","my-1","flex","w-full","items-center","space-x-2","rounded-r-full","p-1",3,"click"],[1,"flex-1","text-left","font-medium"],[1,"text-2xl"],["routerLinkActive","active",1,"hover:bg-base-200","my-1","flex","w-full","items-center","space-x-2","rounded-r-full","p-1",3,"routerLink"]],template:function(t,r){t&1&&(ke(0,"div",0),t8(1,Lu,2,1,null,null,Du),Ve$1()),t&2&&(ge(),n8(r.filtered_links()));},dependencies:[uZ,Zy,oZ,Ml$1,Qw,YQe],styles:["[_nghost-%COMP%]{height:100%}a.active[_ngcontent-%COMP%]{background-color:var(--secondary);color:var(--secondary-content)}a.active[_ngcontent-%COMP%]:hover{color:var(--base-content);opacity:.75}"],data:{animation:[NZe]}});}}return n})();var Bu=()=>["/"],dk=(()=>{class n{constructor(){this._settings=m$1(Ys$1),this._theme=this._settings.theme_signal,this._logo_dark=this._settings.signal("app.logo_dark",{},true),this._logo_light=this._settings.signal("app.logo_light",{},true),this.logo_src=De(()=>{let e=this.logo();return typeof e=="string"?e:e?.src||""}),this.logo=De(()=>(this._theme()==="dark"?this._logo_dark():this._logo_light())||{}),this.user=QJ();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Te$1({type:n,selectors:[["app-topbar"]],decls:10,vars:4,consts:[[1,"border-base-200","flex","items-center","border-b","p-2"],[1,"w-64"],[3,"routerLink"],["auth","",1,"h-12",3,"source"],[1,"flex","flex-1","items-center","justify-end","space-x-2"],["btn","","icon","","matRipple",""],[1,"text-2xl"],[1,"mr-2"],[3,"user"]],template:function(t,r){t&1&&(ke(0,"div",0)(1,"div",1)(2,"a",2),jt(3,"img",3),Ve$1()(),ke(4,"div",4)(5,"button",5)(6,"icon",6),gi$1(7,"notifications"),Ve$1()(),ke(8,"user-controls-sidebar",7),jt(9,"a-user-avatar",8),Ve$1()()()),t&2&&(ge(2),Nr$1("routerLink",Z8(3,Bu)),ge(),Nr$1("source",r.logo_src()),ge(6),Nr$1("user",r.user()));},dependencies:[uZ,Zy,Lr,Ml$1,Qw,Nt,YQe,zl],styles:["[_nghost-%COMP%]{width:100%}"]});}}return n})();
export{Ar as A,Bi as B,Ci as C,Dt as D,Fo as F,Gg as G,Ho as H,Ki as K,Ls as L,Ml as M,Nt as N,Sl as S,Tl as T,Ur as U,Vr as V,Wi as W,_t as _,at as a,Lr as b,ci as c,dk as d,N0 as e,fl as f,As as g,ht as h,bl as i,Dr as j,Hg as k,li as l,mi as m,Br as n,Cl as o,pi as p,Vc as q,zr as r,tk as t,ui as u,vr as v,zg as z};