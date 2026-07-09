import {m,t as ta,O,hm as $te,I as Ie,c7 as nX,c8 as Ev,h as Vl$1,i as V0,D as Det,a as Pe,W as Wt,V as Ve,E as Ei,z as ye,G as Or,aY as H6,b as Ws$1,g as gT,b3 as j,R,f as ft,bp as ao,_ as _r,bw as Oi,am as m$1,an as l,aM as lJe,cd as ZQ,l as xe,v as Y4,N as W4,hn as ike,cO as xp,ho as cV,hp as dV,hq as uV,hr as lV,dp as K,dA as le,dB as se,fA as oa,fB as cet,dC as Tt$1,fC as Dm,e as VM,fP as tf,dE as St,fN as vr,dK as Ft,b4 as $e,fO as Hg,eX as kr,hs as A0,dF as v,dG as Xt,fQ as N,g7 as QJe,g8 as XJe,ed as $o,fW as As$1,fX as $n$1,f4 as xt,fT as Ds$1,cr as re,f3 as Me,f6 as ue,ht as Bg,bv as $p,cL as jp,dJ as dE,hu as F0,hv as jf,gT as We$1,g1 as ct$1,fZ as Jn,hw as P0,fF as C0,g9 as yr,hx as Fne,ba as wt,dM as ve,dO as ou,b1 as mn$1,H as He,p as Fe,bR as gA,ao as _i,y as iE,bz as je$1,K as Ue,Q as qe,hy as Vg,fH as Kle,L as Oe,dP as Mn$1,dQ as Ae,dR as De,fI as Qi,C as CY,fJ as Zle,b0 as Xi,b8 as Kr,b9 as w$1,bf as H,h5 as ks$1,hb as Am,cH as Vt,fG as P1,gY as W,dD as Qo,dH as yn$1,dI as Bl$1,b2 as Le,fD as Ne$1,h0 as Em,h1 as ym,eC as OG,fL as Yt$1,gb as hn$1,hz as OK,X as np,g2 as Xo,ah as Et$1,ab as uU,gl as h7,gm as KC,aR as Art,ae as nE,af as rE,hA as Bne,bS as rP,gn as B1,ad as cC,dc as Fs$1,aE as qDe,aN as AQe,aO as IQe,u as unt,n as lC,B as e9,cx as V2,e1 as HQe,T as vT,ag as u2,Y as YY,d5 as vrt,d6 as yrt,d7 as Ert,d8 as _rt,d9 as zue,s as snt,$ as $de,A as Fo,bA as jo,gf as Lle,bB as tn$1,hB as nl$1,fM as G,hC as wr,go as Zt$1,gp as Sl$1,j as hMe,k as aMe,w as wJ,bO as KDe,a3 as An$1,r as ro,a4 as vPe,hD as SPe,d1 as TPe,e6 as wte,hh as xPe,a6 as Rl$1,d$ as wl$1,e4 as Ko,hE as Zo,bn as Ai,bJ as Wa$1,bo as _t,bI as Qr,bq as Tde,a5 as A7,ax as dC,dL as fet,dN as zo,dm as Nn$1,cS as Je,cP as WR,hF as ll$1,aj as zs$1,hG as Cv,ga as Om,aA as qt,aC as iu,aB as sC,g3 as ia,g5 as ra,g6 as Nm,fU as Z$1,hH as Kh,bk as P$1,S as z4,aD as Zce,aT as ET,au as TV,br as ktt,bs as xtt,o as V8,J as G8,bZ as j6,ai as kn$1,ac as t9,ay as eF,gX as F,hI as Db,q as qte,f8 as wi,fe as mm,hJ as a3,hK as yMe,ct as iC,cu as oC,hL as GB,hM as bv,hN as y0e,hO as tV,hP as rV,cT as xr,eb as Uw,hQ as LH,a9 as l2,hR as N2,h4 as cf,fE as ze,hS as pE,el as jLe,hT as y2,aa as yb,aw as iF,az as rF,aU as lue,d4 as Hnt,aV as Gnt,hU as lt$1,cC as wY,hV as Xr,df as on$1,dg as eE,aW as J_,aX as ey,dh as pn$1,ap as fC,cD as m5,bc as x6,hW as g5,dw as j4,be as f5,c0 as Vy}from'./main.js';function sa(n,o){let e=Ka(o)?new o(0):Je(o,0);return e.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),e.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e}function Ka(n){return typeof n=="function"&&n.prototype?.constructor===n}var Qa=10,en=class{subPriority=0;validate(o,e){return  true}},tn=class extends en{constructor(o,e,t,i,r){super(),this.value=o,this.validateValue=e,this.setValue=t,this.priority=i,r&&(this.subPriority=r);}validate(o,e){return this.validateValue(o,this.value,e)}set(o,e,t){return this.setValue(o,e,this.value,t)}},nn=class extends en{priority=Qa;subPriority=-1;constructor(o,e){super(),this.context=o||(t=>Je(e,t));}set(o,e){return e.timestampIsSet?o:Je(o,sa(o,this.context))}};var w=class{run(o,e,t,i){let r=this.parse(o,e,t,i);return r?{setter:new tn(r.value,this.validate,this.set,this.priority,this.subPriority),rest:r.rest}:null}validate(o,e,t){return  true}};var on=class extends w{priority=140;parse(o,e,t){switch(e){case "G":case "GG":case "GGG":return t.era(o,{width:"abbreviated"})||t.era(o,{width:"narrow"});case "GGGGG":return t.era(o,{width:"narrow"});default:return t.era(o,{width:"wide"})||t.era(o,{width:"abbreviated"})||t.era(o,{width:"narrow"})}}set(o,e,t){return e.era=t,o.setFullYear(t,0,1),o.setHours(0,0,0,0),o}incompatibleTokens=["R","u","t","T"]};var z={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},We={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function Z(n,o){return n&&{value:o(n.value),rest:n.rest}}function U(n,o){let e=o.match(n);return e?{value:parseInt(e[0],10),rest:o.slice(e[0].length)}:null}function je(n,o){let e=o.match(n);if(!e)return null;if(e[0]==="Z")return {value:0,rest:o.slice(1)};let t=e[1]==="+"?1:-1,i=e[2]?parseInt(e[2],10):0,r=e[3]?parseInt(e[3],10):0,d=e[5]?parseInt(e[5],10):0;return {value:t*(i*GB+r*bv+d*y0e),rest:o.slice(e[0].length)}}function rn(n){return U(z.anyDigitsSigned,n)}function P(n,o){switch(n){case 1:return U(z.singleDigit,o);case 2:return U(z.twoDigits,o);case 3:return U(z.threeDigits,o);case 4:return U(z.fourDigits,o);default:return U(new RegExp("^\\d{1,"+n+"}"),o)}}function Yt(n,o){switch(n){case 1:return U(z.singleDigitSigned,o);case 2:return U(z.twoDigitsSigned,o);case 3:return U(z.threeDigitsSigned,o);case 4:return U(z.fourDigitsSigned,o);default:return U(new RegExp("^-?\\d{1,"+n+"}"),o)}}function Kt(n){switch(n){case "morning":return 4;case "evening":return 17;case "pm":case "noon":case "afternoon":return 12;default:return 0}}function an(n,o){let e=o>0,t=e?o:1-o,i;if(t<=50)i=n||100;else {let r=t+50,d=Math.trunc(r/100)*100,x=n>=r%100;i=n+d-(x?100:0);}return e?i:1-i}function sn(n){return n%400===0||n%4===0&&n%100!==0}var ln=class extends w{priority=130;incompatibleTokens=["Y","R","u","w","I","i","e","c","t","T"];parse(o,e,t){let i=r=>({year:r,isTwoDigitYear:e==="yy"});switch(e){case "y":return Z(P(4,o),i);case "yo":return Z(t.ordinalNumber(o,{unit:"year"}),i);default:return Z(P(e.length,o),i)}}validate(o,e){return e.isTwoDigitYear||e.year>0}set(o,e,t){let i=o.getFullYear();if(t.isTwoDigitYear){let d=an(t.year,i);return o.setFullYear(d,0,1),o.setHours(0,0,0,0),o}let r=!("era"in e)||e.era===1?t.year:1-t.year;return o.setFullYear(r,0,1),o.setHours(0,0,0,0),o}};var cn=class extends w{priority=130;parse(o,e,t){let i=r=>({year:r,isTwoDigitYear:e==="YY"});switch(e){case "Y":return Z(P(4,o),i);case "Yo":return Z(t.ordinalNumber(o,{unit:"year"}),i);default:return Z(P(e.length,o),i)}}validate(o,e){return e.isTwoDigitYear||e.year>0}set(o,e,t,i){let r=Cv(o,i);if(t.isTwoDigitYear){let x=an(t.year,r);return o.setFullYear(x,0,i.firstWeekContainsDate),o.setHours(0,0,0,0),zs$1(o,i)}let d=!("era"in e)||e.era===1?t.year:1-t.year;return o.setFullYear(d,0,i.firstWeekContainsDate),o.setHours(0,0,0,0),zs$1(o,i)}incompatibleTokens=["y","R","u","Q","q","M","L","I","d","D","i","t","T"]};var dn=class extends w{priority=130;parse(o,e){return e==="R"?Yt(4,o):Yt(e.length,o)}set(o,e,t){let i=Je(o,0);return i.setFullYear(t,0,4),i.setHours(0,0,0,0),ll$1(i)}incompatibleTokens=["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]};var mn=class extends w{priority=130;parse(o,e){return e==="u"?Yt(4,o):Yt(e.length,o)}set(o,e,t){return o.setFullYear(t,0,1),o.setHours(0,0,0,0),o}incompatibleTokens=["G","y","Y","R","w","I","i","e","c","t","T"]};var pn=class extends w{priority=120;parse(o,e,t){switch(e){case "Q":case "QQ":return P(e.length,o);case "Qo":return t.ordinalNumber(o,{unit:"quarter"});case "QQQ":return t.quarter(o,{width:"abbreviated",context:"formatting"})||t.quarter(o,{width:"narrow",context:"formatting"});case "QQQQQ":return t.quarter(o,{width:"narrow",context:"formatting"});default:return t.quarter(o,{width:"wide",context:"formatting"})||t.quarter(o,{width:"abbreviated",context:"formatting"})||t.quarter(o,{width:"narrow",context:"formatting"})}}validate(o,e){return e>=1&&e<=4}set(o,e,t){return o.setMonth((t-1)*3,1),o.setHours(0,0,0,0),o}incompatibleTokens=["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]};var un=class extends w{priority=120;parse(o,e,t){switch(e){case "q":case "qq":return P(e.length,o);case "qo":return t.ordinalNumber(o,{unit:"quarter"});case "qqq":return t.quarter(o,{width:"abbreviated",context:"standalone"})||t.quarter(o,{width:"narrow",context:"standalone"});case "qqqqq":return t.quarter(o,{width:"narrow",context:"standalone"});default:return t.quarter(o,{width:"wide",context:"standalone"})||t.quarter(o,{width:"abbreviated",context:"standalone"})||t.quarter(o,{width:"narrow",context:"standalone"})}}validate(o,e){return e>=1&&e<=4}set(o,e,t){return o.setMonth((t-1)*3,1),o.setHours(0,0,0,0),o}incompatibleTokens=["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]};var _n=class extends w{incompatibleTokens=["Y","R","q","Q","L","w","I","D","i","e","c","t","T"];priority=110;parse(o,e,t){let i=r=>r-1;switch(e){case "M":return Z(U(z.month,o),i);case "MM":return Z(P(2,o),i);case "Mo":return Z(t.ordinalNumber(o,{unit:"month"}),i);case "MMM":return t.month(o,{width:"abbreviated",context:"formatting"})||t.month(o,{width:"narrow",context:"formatting"});case "MMMMM":return t.month(o,{width:"narrow",context:"formatting"});default:return t.month(o,{width:"wide",context:"formatting"})||t.month(o,{width:"abbreviated",context:"formatting"})||t.month(o,{width:"narrow",context:"formatting"})}}validate(o,e){return e>=0&&e<=11}set(o,e,t){return o.setMonth(t,1),o.setHours(0,0,0,0),o}};var hn=class extends w{priority=110;parse(o,e,t){let i=r=>r-1;switch(e){case "L":return Z(U(z.month,o),i);case "LL":return Z(P(2,o),i);case "Lo":return Z(t.ordinalNumber(o,{unit:"month"}),i);case "LLL":return t.month(o,{width:"abbreviated",context:"standalone"})||t.month(o,{width:"narrow",context:"standalone"});case "LLLLL":return t.month(o,{width:"narrow",context:"standalone"});default:return t.month(o,{width:"wide",context:"standalone"})||t.month(o,{width:"abbreviated",context:"standalone"})||t.month(o,{width:"narrow",context:"standalone"})}}validate(o,e){return e>=0&&e<=11}set(o,e,t){return o.setMonth(t,1),o.setHours(0,0,0,0),o}incompatibleTokens=["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]};function la(n,o,e){let t=K(n,e?.in),i=rV(t,e)-o;return t.setDate(t.getDate()-i*7),K(t,e?.in)}var fn=class extends w{priority=100;parse(o,e,t){switch(e){case "w":return U(z.week,o);case "wo":return t.ordinalNumber(o,{unit:"week"});default:return P(e.length,o)}}validate(o,e){return e>=1&&e<=53}set(o,e,t,i){return zs$1(la(o,t,i),i)}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","i","t","T"]};function ca(n,o,e){let t=K(n,e?.in),i=tV(t,e)-o;return t.setDate(t.getDate()-i*7),t}var gn=class extends w{priority=100;parse(o,e,t){switch(e){case "I":return U(z.week,o);case "Io":return t.ordinalNumber(o,{unit:"week"});default:return P(e.length,o)}}validate(o,e){return e>=1&&e<=53}set(o,e,t){return ll$1(ca(o,t))}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]};var Za=[31,28,31,30,31,30,31,31,30,31,30,31],Ja=[31,29,31,30,31,30,31,31,30,31,30,31],bn=class extends w{priority=90;subPriority=1;parse(o,e,t){switch(e){case "d":return U(z.date,o);case "do":return t.ordinalNumber(o,{unit:"date"});default:return P(e.length,o)}}validate(o,e){let t=o.getFullYear(),i=sn(t),r=o.getMonth();return i?e>=1&&e<=Ja[r]:e>=1&&e<=Za[r]}set(o,e,t){return o.setDate(t),o.setHours(0,0,0,0),o}incompatibleTokens=["Y","R","q","Q","w","I","D","i","e","c","t","T"]};var vn=class extends w{priority=90;subpriority=1;parse(o,e,t){switch(e){case "D":case "DD":return U(z.dayOfYear,o);case "Do":return t.ordinalNumber(o,{unit:"date"});default:return P(e.length,o)}}validate(o,e){let t=o.getFullYear();return sn(t)?e>=1&&e<=366:e>=1&&e<=365}set(o,e,t){return o.setMonth(0,t),o.setHours(0,0,0,0),o}incompatibleTokens=["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]};function Qt(n,o,e){let t=xr(),i=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,r=K(n,e?.in),d=r.getDay(),O=(o%7+7)%7,X=7-i,oe=o<0||o>6?o-(d+X)%7:(O+X)%7-(d+X)%7;return kn$1(r,oe,e)}var xn=class extends w{priority=90;parse(o,e,t){switch(e){case "E":case "EE":case "EEE":return t.day(o,{width:"abbreviated",context:"formatting"})||t.day(o,{width:"short",context:"formatting"})||t.day(o,{width:"narrow",context:"formatting"});case "EEEEE":return t.day(o,{width:"narrow",context:"formatting"});case "EEEEEE":return t.day(o,{width:"short",context:"formatting"})||t.day(o,{width:"narrow",context:"formatting"});default:return t.day(o,{width:"wide",context:"formatting"})||t.day(o,{width:"abbreviated",context:"formatting"})||t.day(o,{width:"short",context:"formatting"})||t.day(o,{width:"narrow",context:"formatting"})}}validate(o,e){return e>=0&&e<=6}set(o,e,t,i){return o=Qt(o,t,i),o.setHours(0,0,0,0),o}incompatibleTokens=["D","i","e","c","t","T"]};var kn=class extends w{priority=90;parse(o,e,t,i){let r=d=>{let x=Math.floor((d-1)/7)*7;return (d+i.weekStartsOn+6)%7+x};switch(e){case "e":case "ee":return Z(P(e.length,o),r);case "eo":return Z(t.ordinalNumber(o,{unit:"day"}),r);case "eee":return t.day(o,{width:"abbreviated",context:"formatting"})||t.day(o,{width:"short",context:"formatting"})||t.day(o,{width:"narrow",context:"formatting"});case "eeeee":return t.day(o,{width:"narrow",context:"formatting"});case "eeeeee":return t.day(o,{width:"short",context:"formatting"})||t.day(o,{width:"narrow",context:"formatting"});default:return t.day(o,{width:"wide",context:"formatting"})||t.day(o,{width:"abbreviated",context:"formatting"})||t.day(o,{width:"short",context:"formatting"})||t.day(o,{width:"narrow",context:"formatting"})}}validate(o,e){return e>=0&&e<=6}set(o,e,t,i){return o=Qt(o,t,i),o.setHours(0,0,0,0),o}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]};var yn=class extends w{priority=90;parse(o,e,t,i){let r=d=>{let x=Math.floor((d-1)/7)*7;return (d+i.weekStartsOn+6)%7+x};switch(e){case "c":case "cc":return Z(P(e.length,o),r);case "co":return Z(t.ordinalNumber(o,{unit:"day"}),r);case "ccc":return t.day(o,{width:"abbreviated",context:"standalone"})||t.day(o,{width:"short",context:"standalone"})||t.day(o,{width:"narrow",context:"standalone"});case "ccccc":return t.day(o,{width:"narrow",context:"standalone"});case "cccccc":return t.day(o,{width:"short",context:"standalone"})||t.day(o,{width:"narrow",context:"standalone"});default:return t.day(o,{width:"wide",context:"standalone"})||t.day(o,{width:"abbreviated",context:"standalone"})||t.day(o,{width:"short",context:"standalone"})||t.day(o,{width:"narrow",context:"standalone"})}}validate(o,e){return e>=0&&e<=6}set(o,e,t,i){return o=Qt(o,t,i),o.setHours(0,0,0,0),o}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]};function da(n,o){let e=K(n,o?.in).getDay();return e===0?7:e}function ma(n,o,e){let t=K(n,e?.in),i=da(t,e),r=o-i;return kn$1(t,r,e)}var Cn=class extends w{priority=90;parse(o,e,t){let i=r=>r===0?7:r;switch(e){case "i":case "ii":return P(e.length,o);case "io":return t.ordinalNumber(o,{unit:"day"});case "iii":return Z(t.day(o,{width:"abbreviated",context:"formatting"})||t.day(o,{width:"short",context:"formatting"})||t.day(o,{width:"narrow",context:"formatting"}),i);case "iiiii":return Z(t.day(o,{width:"narrow",context:"formatting"}),i);case "iiiiii":return Z(t.day(o,{width:"short",context:"formatting"})||t.day(o,{width:"narrow",context:"formatting"}),i);default:return Z(t.day(o,{width:"wide",context:"formatting"})||t.day(o,{width:"abbreviated",context:"formatting"})||t.day(o,{width:"short",context:"formatting"})||t.day(o,{width:"narrow",context:"formatting"}),i)}}validate(o,e){return e>=1&&e<=7}set(o,e,t){return o=ma(o,t),o.setHours(0,0,0,0),o}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]};var Mn=class extends w{priority=80;parse(o,e,t){switch(e){case "a":case "aa":case "aaa":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"})||t.dayPeriod(o,{width:"narrow",context:"formatting"});case "aaaaa":return t.dayPeriod(o,{width:"narrow",context:"formatting"});default:return t.dayPeriod(o,{width:"wide",context:"formatting"})||t.dayPeriod(o,{width:"abbreviated",context:"formatting"})||t.dayPeriod(o,{width:"narrow",context:"formatting"})}}set(o,e,t){return o.setHours(Kt(t),0,0,0),o}incompatibleTokens=["b","B","H","k","t","T"]};var wn=class extends w{priority=80;parse(o,e,t){switch(e){case "b":case "bb":case "bbb":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"})||t.dayPeriod(o,{width:"narrow",context:"formatting"});case "bbbbb":return t.dayPeriod(o,{width:"narrow",context:"formatting"});default:return t.dayPeriod(o,{width:"wide",context:"formatting"})||t.dayPeriod(o,{width:"abbreviated",context:"formatting"})||t.dayPeriod(o,{width:"narrow",context:"formatting"})}}set(o,e,t){return o.setHours(Kt(t),0,0,0),o}incompatibleTokens=["a","B","H","k","t","T"]};var Tn=class extends w{priority=80;parse(o,e,t){switch(e){case "B":case "BB":case "BBB":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"})||t.dayPeriod(o,{width:"narrow",context:"formatting"});case "BBBBB":return t.dayPeriod(o,{width:"narrow",context:"formatting"});default:return t.dayPeriod(o,{width:"wide",context:"formatting"})||t.dayPeriod(o,{width:"abbreviated",context:"formatting"})||t.dayPeriod(o,{width:"narrow",context:"formatting"})}}set(o,e,t){return o.setHours(Kt(t),0,0,0),o}incompatibleTokens=["a","b","t","T"]};var En=class extends w{priority=70;parse(o,e,t){switch(e){case "h":return U(z.hour12h,o);case "ho":return t.ordinalNumber(o,{unit:"hour"});default:return P(e.length,o)}}validate(o,e){return e>=1&&e<=12}set(o,e,t){let i=o.getHours()>=12;return i&&t<12?o.setHours(t+12,0,0,0):!i&&t===12?o.setHours(0,0,0,0):o.setHours(t,0,0,0),o}incompatibleTokens=["H","K","k","t","T"]};var In=class extends w{priority=70;parse(o,e,t){switch(e){case "H":return U(z.hour23h,o);case "Ho":return t.ordinalNumber(o,{unit:"hour"});default:return P(e.length,o)}}validate(o,e){return e>=0&&e<=23}set(o,e,t){return o.setHours(t,0,0,0),o}incompatibleTokens=["a","b","h","K","k","t","T"]};var Sn=class extends w{priority=70;parse(o,e,t){switch(e){case "K":return U(z.hour11h,o);case "Ko":return t.ordinalNumber(o,{unit:"hour"});default:return P(e.length,o)}}validate(o,e){return e>=0&&e<=11}set(o,e,t){return o.getHours()>=12&&t<12?o.setHours(t+12,0,0,0):o.setHours(t,0,0,0),o}incompatibleTokens=["h","H","k","t","T"]};var On=class extends w{priority=70;parse(o,e,t){switch(e){case "k":return U(z.hour24h,o);case "ko":return t.ordinalNumber(o,{unit:"hour"});default:return P(e.length,o)}}validate(o,e){return e>=1&&e<=24}set(o,e,t){let i=t<=24?t%24:t;return o.setHours(i,0,0,0),o}incompatibleTokens=["a","b","h","H","K","t","T"]};var Rn=class extends w{priority=60;parse(o,e,t){switch(e){case "m":return U(z.minute,o);case "mo":return t.ordinalNumber(o,{unit:"minute"});default:return P(e.length,o)}}validate(o,e){return e>=0&&e<=59}set(o,e,t){return o.setMinutes(t,0,0),o}incompatibleTokens=["t","T"]};var Dn=class extends w{priority=50;parse(o,e,t){switch(e){case "s":return U(z.second,o);case "so":return t.ordinalNumber(o,{unit:"second"});default:return P(e.length,o)}}validate(o,e){return e>=0&&e<=59}set(o,e,t){return o.setSeconds(t,0),o}incompatibleTokens=["t","T"]};var An=class extends w{priority=30;parse(o,e){let t=i=>Math.trunc(i*Math.pow(10,-e.length+3));return Z(P(e.length,o),t)}set(o,e,t){return o.setMilliseconds(t),o}incompatibleTokens=["t","T"]};var Pn=class extends w{priority=10;parse(o,e){switch(e){case "X":return je(We.basicOptionalMinutes,o);case "XX":return je(We.basic,o);case "XXXX":return je(We.basicOptionalSeconds,o);case "XXXXX":return je(We.extendedOptionalSeconds,o);default:return je(We.extended,o)}}set(o,e,t){return e.timestampIsSet?o:Je(o,o.getTime()-WR(o)-t)}incompatibleTokens=["t","T","x"]};var Nn=class extends w{priority=10;parse(o,e){switch(e){case "x":return je(We.basicOptionalMinutes,o);case "xx":return je(We.basic,o);case "xxxx":return je(We.basicOptionalSeconds,o);case "xxxxx":return je(We.extendedOptionalSeconds,o);default:return je(We.extended,o)}}set(o,e,t){return e.timestampIsSet?o:Je(o,o.getTime()-WR(o)-t)}incompatibleTokens=["t","T","X"]};var Fn=class extends w{priority=40;parse(o){return rn(o)}set(o,e,t){return [Je(o,t*1e3),{timestampIsSet:true}]}incompatibleTokens="*"};var Vn=class extends w{priority=20;parse(o){return rn(o)}set(o,e,t){return [Je(o,t),{timestampIsSet:true}]}incompatibleTokens="*"};var pa={G:new on,y:new ln,Y:new cn,R:new dn,u:new mn,Q:new pn,q:new un,M:new _n,L:new hn,w:new fn,I:new gn,d:new bn,D:new vn,E:new xn,e:new kn,c:new yn,i:new Cn,a:new Mn,b:new wn,B:new Tn,h:new En,H:new In,K:new Sn,k:new On,m:new Rn,s:new Dn,S:new An,X:new Pn,x:new Nn,t:new Fn,T:new Vn};var es=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ts=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,is=/^'([^]*?)'?$/,ns=/''/g,os=/\S/,rs=/[a-zA-Z]/;function ua(n,o,e,t){let i=()=>Je(e,NaN),r=ike(),d=r.locale??xp,x=r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,O=r.weekStartsOn??r.locale?.options?.weekStartsOn??0;let X={firstWeekContainsDate:x,weekStartsOn:O,locale:d},oe=[new nn(t?.in,e)],_e=o.match(ts).map(B=>{let J=B[0];if(J in cV){let Fe=cV[J];return Fe(B,d.formatLong)}return B}).join("").match(es),ye=[];for(let B of _e){dV(B)&&uV(B,o,n),lV(B)&&uV(B,o,n);let J=B[0],Fe=pa[J];if(Fe){let{incompatibleTokens:Io}=Fe;if(Array.isArray(Io)){let So=ye.find(Oo=>Io.includes(Oo.token)||Oo.token===J);if(So)throw new RangeError(`The format string mustn't contain \`${So.fullToken}\` and \`${B}\` at the same time`)}else if(Fe.incompatibleTokens==="*"&&ye.length>0)throw new RangeError(`The format string mustn't contain \`${B}\` and any other token at the same time`);ye.push({token:J,fullToken:B});let Jn=Fe.run(n,B,d.match,X);if(!Jn)return i();oe.push(Jn.setter),n=Jn.rest;}else {if(J.match(rs))throw new RangeError("Format string contains an unescaped latin alphabet character `"+J+"`");if(B==="''"?B="'":J==="'"&&(B=as(B)),n.indexOf(B)===0)n=n.slice(B.length);else return i()}}if(n.length>0&&os.test(n))return i();let dt=oe.map(B=>B.priority).sort((B,J)=>J-B).filter((B,J,Fe)=>Fe.indexOf(B)===J).map(B=>oe.filter(J=>J.priority===B).sort((J,Fe)=>Fe.subPriority-J.subPriority)).map(B=>B[0]),it=K(e,t?.in);if(isNaN(+it))return i();let si={};for(let B of dt){if(!B.validate(it,X))return i();let J=B.set(it,si,X);Array.isArray(J)?(it=J[0],Object.assign(si,J[1])):it=J;}return it}function as(n){return n.match(is)[1].replace(ns,"'")}var ss=["determinateSpinner"];function ls(n,o){if(n&1&&(gA(),Pe(0,"svg",11),Wt(1,"circle",12),Ve()),n&2){let e=qt();je$1("viewBox",e._viewBox()),ye(),cC("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),je$1("r",e._circleRadius());}}var cs=new v("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:_a})}),_a=100,ds=10,Zt=(()=>{class n{_elementRef=m(j);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e;}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=m(cs),t=Bne(),i=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=i.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&i.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth));}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0));}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0;}_diameter=_a;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0;}_strokeWidth;_circleRadius(){return (this.diameter-ds)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return `0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ie({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,i){if(t&1&&Mn$1(ss,5),t&2){let r;Ae(r=De())&&(i._determinateCircle=r.first);}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,i){t&2&&(je$1("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",i.mode==="determinate"?i.value:null)("mode",i.mode),Fs$1("mat-"+i.color),cC("width",i.diameter,"px")("height",i.diameter,"px")("--mat-progress-spinner-size",i.diameter+"px")("--mat-progress-spinner-active-indicator-width",i.diameter+"px"),Oe("_mat-animation-noopable",i._noopAnimations)("mdc-circular-progress--indeterminate",i.mode==="indeterminate"));},inputs:{color:"color",mode:"mode",value:[2,"value","value",ou],diameter:[2,"diameter","diameter",ou],strokeWidth:[2,"strokeWidth","strokeWidth",ou]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,i){if(t&1&&(_i(0,ls,2,8,"ng-template",null,0,fC),Pe(2,"div",2,1),gA(),Pe(4,"svg",3),Wt(5,"circle",4),Ve()(),rP(),Pe(6,"div",5)(7,"div",6)(8,"div",7),B1(9,8),Ve(),Pe(10,"div",9),B1(11,8),Ve(),Pe(12,"div",10),B1(13,8),Ve()()()),t&2){let r=iE(1);ye(4),je$1("viewBox",i._viewBox()),ye(),cC("stroke-dasharray",i._strokeCircumference(),"px")("stroke-dashoffset",i._strokeDashOffset(),"px")("stroke-width",i._circleStrokeWidth(),"%"),je$1("r",i._circleRadius()),ye(4),Or("ngTemplateOutlet",r),ye(2),Or("ngTemplateOutlet",r),ye(2),Or("ngTemplateOutlet",r);}},dependencies:[KC],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return n})();var Tt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=le({type:n});static \u0275inj=se({imports:[Tt$1]})}return n})();var ms=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],ps=["mat-icon, [matMenuItemIcon]","*"];function us(n,o){n&1&&(gA(),Pe(0,"svg",2),Wt(1,"polygon",3),Ve());}var _s=["*"];function hs(n,o){if(n&1){let e=sC();on$1(0,"div",0),eE("click",function(){J_(e);let i=qt();return ey(i.closed.emit("click"))})("animationstart",function(i){J_(e);let r=qt();return ey(r._onAnimationStart(i.animationName))})("animationend",function(i){J_(e);let r=qt();return ey(r._onAnimationDone(i.animationName))})("animationcancel",function(i){J_(e);let r=qt();return ey(r._onAnimationDone(i.animationName))}),on$1(1,"div",1),Le(2),pn$1()();}if(n&2){let e=qt();Fs$1(e._classList),Oe("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Nn$1("id",e.panelId),je$1("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null);}}var bo=new v("MAT_MENU_PANEL"),lt=(()=>{class n{_elementRef=m(j);_document=m(W);_focusMonitor=m(Qo);_parentMenu=m(bo,{optional:true});_changeDetectorRef=m(St);role="menuitem";disabled=false;disableRipple=false;_hovered=new N;_focused=new N;_highlighted=false;_triggersSubmenu=false;constructor(){m(yn$1).load(Bl$1),this._parentMenu?.addItem?.(this);}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this);}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,false);}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete();}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation());}_handleMouseEnter(){this._hovered.next(this);}getLabel(){let e=this._elementRef.nativeElement.cloneNode(true),t=e.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<t.length;i++)t[i].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck();}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck();}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ie({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,i){t&1&&He("click",function(d){return i._checkDisabled(d)})("mouseenter",function(){return i._handleMouseEnter()}),t&2&&(je$1("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),Oe("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu));},inputs:{role:"role",disabled:[2,"disabled","disabled",ve],disableRipple:[2,"disableRipple","disableRipple",ve]},exportAs:["matMenuItem"],ngContentSelectors:ps,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,i){t&1&&(mn$1(ms),Le(0),Pe(1,"span",0),Le(2,1),Ve(),Wt(3,"div",1),Fe(4,us,2,0,":svg:svg",2)),t&2&&(ye(3),Or("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),ye(),Ue(i._triggersSubmenu?4:-1));},dependencies:[V0],encapsulation:2})}return n})();var fs=new v("MatMenuContent");var gs=new v("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:false,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),fo="_mat-menu-enter",Ln="_mat-menu-exit",tt=(()=>{class n{_elementRef=m(j);_changeDetectorRef=m(St);_injector=m(H);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Xt();_allItems;_directDescendantItems=new ks$1;_classList={};_panelAnimationState="void";_animationDone=new N;_isAnimating=R(false);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses();}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses();}templateRef;items;lazyContent;overlapTrigger=false;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,i=l({},this._classList);t&&t.length&&t.split(" ").forEach(r=>{i[r]=false;}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(r=>{i[r]=true;}),this._elementRef.nativeElement.className=""),this._classList=i;}_previousPanelClass="";get classList(){return this.panelClass}set classList(e){this.panelClass=e;}closed=new re;close=this.closed;panelId=m(Ft).getId("mat-menu-panel-");constructor(){let e=m(gs);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop;}ngOnInit(){this.setPositionClasses();}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Am(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe($n$1(this._directDescendantItems),xt(e=>Ds$1(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let i=e.toArray(),r=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[r]&&!i[r].disabled?t.setActiveItem(r):t.setNextItemActive();}});}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout);}_hovered(){return this._directDescendantItems.changes.pipe($n$1(this._directDescendantItems),xt(t=>Ds$1(...t.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,i=this._keyManager;switch(t){case 27:Jn(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Vt(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&t&&t.focus();}},{injector:this._injector});}resetActiveItem(){this._keyManager.setActiveItem(-1);}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=m$1(l({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck();}_onAnimationDone(e){let t=e===Ln;(t||e===fo)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(false));}_onAnimationStart(e){(e===fo||e===Ln)&&this._isAnimating.set(true);}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0);}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Ln),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?fo:Ln);}),this._changeDetectorRef.markForCheck();}_updateDirectDescendants(){this._allItems.changes.pipe($n$1(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges();});}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ie({type:n,selectors:[["mat-menu"]],contentQueries:function(t,i,r){if(t&1&&Qi(r,fs,5)(r,lt,5)(r,lt,4),t&2){let d;Ae(d=De())&&(i.lazyContent=d.first),Ae(d=De())&&(i._allItems=d),Ae(d=De())&&(i.items=d);}},viewQuery:function(t,i){if(t&1&&Mn$1(hn$1,5),t&2){let r;Ae(r=De())&&(i.templateRef=r.first);}},hostVars:3,hostBindings:function(t,i){t&2&&je$1("aria-label",null)("aria-labelledby",null)("aria-describedby",null);},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",ve],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:ve(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[qe([{provide:bo,useExisting:n}])],ngContentSelectors:_s,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,i){t&1&&(mn$1(),P1(0,hs,3,12,"ng-template"));},styles:[`mat-menu {
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
`],encapsulation:2})}return n})(),bs=new v("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=m(H);return ()=>Om(n)}});var Jt=new WeakMap,vs=(()=>{class n{_canHaveBackdrop;_element=m(j);_viewContainerRef=m(Yt$1);_menuItemInstance=m(lt,{optional:true,self:true});_dir=m(vr,{optional:true});_focusMonitor=m(Qo);_ngZone=m(G);_injector=m(H);_scrollStrategy=m(bs);_changeDetectorRef=m(St);_animationsDisabled=Xt();_portal;_overlayRef=null;_menuOpen=false;_closingActionsSubscription=Ne$1.EMPTY;_menuCloseSubscription=Ne$1.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t);})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()));}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=m(bo,{optional:true});this._parentMaterialMenu=t instanceof tt?t:void 0;}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Jt.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null);}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return !!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit();}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let i=Jt.get(t);Jt.set(t,this),i&&i!==this&&i._closeMenu();let r=this._createOverlay(t),d=r.getConfig(),x=d.positionStrategy;this._setPosition(t,x),this._canHaveBackdrop?d.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:d.hasBackdrop=t.hasBackdrop??false,r.hasAttached()||(r.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(true),t instanceof tt&&(t._setIsOpen(true),t._directDescendantItems.changes.pipe(We$1(t.close)).subscribe(()=>{x.withLockedPosition(false).reapplyLastPosition(),x.withLockedPosition(true);}));}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t);}_destroyMenu(e){let t=this._overlayRef,i=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof tt&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(ct$1(1)).subscribe(()=>{t.detach(),Jt.has(i)||i.lazyContent?.detach();}),i._setIsOpen(false)):(t.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&Jt.delete(i),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(false));}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck());}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=ia(this._injector,t),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof tt&&this._menu._handleKeydown(i);});}return this._overlayRef}_getOverlayConfig(e){return new ra({positionStrategy:Nm(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let r=i.connectionPair.overlayX==="start"?"after":"before",d=i.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(r,d);});});}_setPosition(e,t){let[i,r]=e.xPosition==="before"?["end","start"]:["start","end"],[d,x]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[O,X]=[d,x],[oe,_e]=[i,r],ye=0;if(this._triggersSubmenu()){if(_e=i=e.xPosition==="before"?"start":"end",r=oe=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let dt=this._parentMaterialMenu.items.first;this._parentInnerPadding=dt?dt._getHostElement().offsetTop:0;}ye=d==="bottom"?this._parentInnerPadding:-this._parentInnerPadding;}}else e.overlapTrigger||(O=d==="top"?"bottom":"top",X=x==="top"?"bottom":"top");t.withPositions([{originX:i,originY:O,overlayX:oe,overlayY:d,offsetY:ye},{originX:r,originY:O,overlayX:_e,overlayY:d,offsetY:ye},{originX:i,originY:X,overlayX:oe,overlayY:x,offsetY:-ye},{originX:r,originY:X,overlayX:_e,overlayY:x,offsetY:-ye}]);}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:Z$1(),r=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Me(d=>this._menuOpen&&d!==this._menuItemInstance)):Z$1();return Ds$1(e,i,r,t)}_getPortal(e){return (!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Xo(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return Jt.get(e)===this}_triggerIsAriaDisabled(){return ve(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Kh();};static \u0275dir=w$1({type:n})}return n})(),ct=(()=>{class n extends vs{_cleanupTouchstart;_hoverSubscription=Ne$1.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e;}get menu(){return this._menu}set menu(e){this._menu=e;}menuData;restoreFocus=true;menuOpened=new re;onMenuOpen=this.menuOpened;menuClosed=new re;onMenuClose=this.menuClosed;constructor(){super(true);let e=m($e);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{Em(t)||(this._openedBy="touch");},{passive:true});}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(true);}closeMenu(){this._closeMenu();}updatePosition(){this._overlayRef?.updatePosition();}ngAfterContentInit(){this._handleHover();}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe();}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){ym(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault());}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu());}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu();}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(false));}));}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w$1({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,i){t&1&&He("click",function(d){return i._handleClick(d)})("mousedown",function(d){return i._handleMousedown(d)})("keydown",function(d){return i._handleKeydown(d)}),t&2&&je$1("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu?.panelId:null);},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[xe]})}return n})();var ei=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=le({type:n});static \u0275inj=se({imports:[Vl$1,oa,Tt$1,Dm]})}return n})();var gi=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new N;constructor(o=false,e,t=true,i){this._multiple=o,this._emitChanges=t,this.compareWith=i,e&&e.length&&(o?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0);}select(...o){this._verifyValueAssignment(o),o.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...o){this._verifyValueAssignment(o),o.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...o){this._verifyValueAssignment(o);let e=this.selected,t=new Set(o.map(r=>this._getConcreteValue(r)));o.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(o){return this.isSelected(o)?this.deselect(o):this.select(o)}clear(o=true){this._unmarkAll();let e=this._hasQueuedChanges();return o&&this._emitChangeEvent(),e}isSelected(o){return this._selection.has(this._getConcreteValue(o))}isEmpty(){return this._selection.size===0}hasValue(){return !this.isEmpty()}sort(o){this._multiple&&this.selected&&this._selected.sort(o);}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[]);}_markSelected(o){o=this._getConcreteValue(o),this.isSelected(o)||(this._multiple||this._unmarkAll(),this.isSelected(o)||this._selection.add(o),this._emitChanges&&this._selectedToEmit.push(o));}_unmarkSelected(o){o=this._getConcreteValue(o),this.isSelected(o)&&(this._selection.delete(o),this._emitChanges&&this._deselectedToEmit.push(o));}_unmarkAll(){this.isEmpty()||this._selection.forEach(o=>this._unmarkSelected(o));}_verifyValueAssignment(o){o.length>1&&this._multiple;}_hasQueuedChanges(){return !!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(o,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(o,t))return t;return o}else return o}};var xo=(()=>{class n{_listeners=[];notify(e,t){for(let i of this._listeners)i(e,t);}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t);}}ngOnDestroy(){this._listeners=[];}static \u0275fac=function(t){return new(t||n)};static \u0275prov=F({token:n,factory:n.\u0275fac})}return n})();var ks=["trigger"],ys=["panel"],Cs=[[["mat-select-trigger"]],"*"],Ms=["mat-select-trigger","*"];function ws(n,o){if(n&1&&(Pe(0,"span",4),Ei(1),Ve()),n&2){let e=qt();ye(),iu(e.placeholder);}}function Ts(n,o){n&1&&Le(0);}function Es(n,o){if(n&1&&(Pe(0,"span",11),Ei(1),Ve()),n&2){let e=qt(2);ye(),iu(e.triggerValue);}}function Is(n,o){if(n&1&&(Pe(0,"span",5),Fe(1,Ts,1,0)(2,Es,2,1,"span",11),Ve()),n&2){let e=qt();ye(),Ue(e.customTrigger?1:2);}}function Ss(n,o){if(n&1){let e=sC();Pe(0,"div",12,1),He("keydown",function(i){J_(e);let r=qt();return ey(r._handleKeydown(i))}),Le(2,1),Ve();}if(n&2){let e=qt();Fs$1(e.panelClass),Oe("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",e._parentFormField?.color==="primary")("mat-accent",e._parentFormField?.color==="accent")("mat-warn",e._parentFormField?.color==="warn")("mat-undefined",!e._parentFormField?.color),je$1("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby());}}var Os=new v("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=m(H);return ()=>Om(n)}}),Rs=new v("MAT_SELECT_CONFIG"),ha=new v("MatSelectTrigger"),ko=class{source;value;constructor(o,e){this.source=o,this.value=e;}},ti=(()=>{class n{_viewportRuler=m(tf);_changeDetectorRef=m(St);_elementRef=m(j);_dir=m(vr,{optional:true});_idGenerator=m(Ft);_renderer=m($e);_parentFormField=m(Hg,{optional:true});ngControl=m(kr,{self:true,optional:true});_liveAnnouncer=m(A0);_defaultOptions=m(Rs,{optional:true});_animationsDisabled=Xt();_popoverLocation;_initialized=new N;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,r=QJe(e,this.options,this.optionGroups),d=t._getHostElement();e===0&&r===1?i.scrollTop=0:i.scrollTop=XJe(d.offsetTop,d.offsetHeight,i.scrollTop,i.offsetHeight);}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0);}_getChangeEvent(e){return new ko(this,e)}_scrollStrategyFactory=m(Os);_panelOpen=false;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new N;_errorStateTracker;stateChanges=new N;disableAutomaticLabeling=true;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=false;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=false;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e);}_disableRipple=R(false);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties();}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??false;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next();}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator($o.required)??false}set required(e){this._required=e,this.stateChanges.next();}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e;}_multiple=false;disableOptionCentering=this._defaultOptions?.disableOptionCentering??false;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection();}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e);}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e;}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next();}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e;}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??false;optionSelectionChanges=As$1(()=>{let e=this.options;return e?e.changes.pipe($n$1(e),xt(()=>Ds$1(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(xt(()=>this.optionSelectionChanges))});openedChange=new re;_openedStream=this.openedChange.pipe(Me(e=>e),ue(()=>{}));_closedStream=this.openedChange.pipe(Me(e=>!e),ue(()=>{}));selectionChange=new re;valueChange=new re;constructor(){let e=m(Bg),t=m($p,{optional:true}),i=m(jp,{optional:true}),r=m(new dE("tabindex"),{optional:true}),d=m(F0,{optional:true});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new jf(e,this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=d?.usePopover===false?null:"inline",this.id=this.id;}ngOnInit(){this._selectionModel=new gi(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(We$1(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges());});}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(We$1(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect());}),this.options.changes.pipe($n$1(null),We$1(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection();});}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby");}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState());}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass));}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete();}toggle(){this.panelOpen?this.close():this.open();}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=true,this._overlayDir.positionChange.pipe(ct$1(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled();}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(true)));}close(){this._panelOpen&&(this._panelOpen=false,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(false)));}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0;};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",r=>{r.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay());}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay();},200);e.classList.add("mat-select-panel-exit");}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck();}writeValue(e){this._assignValue(e);}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next();}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return "";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState();}_isRtl(){return this._dir?this._dir.value==="rtl":false}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e));}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,r=t===13||t===32,d=this._keyManager;if(!d.isTyping()&&r&&!Jn(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let x=this.selected;d.onKeydown(e);let O=this.selected;O&&x!==O&&this._liveAnnouncer.announce(O.viewValue,1e4);}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,r=i===40||i===38,d=t.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!d&&(i===13||i===32)&&t.activeItem&&!Jn(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!d&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let x=this.options.some(O=>!O.disabled&&!O.selected);this.options.forEach(O=>{O.disabled||(x?O.select():O.deselect());});}else {let x=t.activeItemIndex;t.onKeydown(e),this._multiple&&r&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==x&&t.activeItem._selectViaInteraction();}}_handleOverlayKeydown(e){e.keyCode===27&&!Jn(e)&&(e.preventDefault(),this.close());}_onFocus(){this.disabled||(this._focused=true,this.stateChanges.next());}_onBlur(){this._focused=false,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next());}get empty(){return !this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next();});}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else {let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1);}this._changeDetectorRef.markForCheck();}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return  false;try{return (i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return  false}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,true):false}_skipPredicate=e=>this.panelOpen?false:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof P0?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck();}_initKeyManager(){this._keyManager=new C0(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close());}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction();});}_resetOptions(){let e=Ds$1(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(We$1(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus());}),Ds$1(...this.options.map(t=>t._stateChanges)).pipe(We$1(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next();});}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next();}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next();}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck();}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e);}else this._keyManager.setActiveItem(this._selectionModel.selected[0]);}_canOpen(){return !this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e);}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby");}onContainerClick(e){let t=yr(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open());}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ie({type:n,selectors:[["mat-select"]],contentQueries:function(t,i,r){if(t&1&&Qi(r,ha,5)(r,CY,5)(r,Zle,5),t&2){let d;Ae(d=De())&&(i.customTrigger=d.first),Ae(d=De())&&(i.options=d),Ae(d=De())&&(i.optionGroups=d);}},viewQuery:function(t,i){if(t&1&&Mn$1(ks,5)(ys,5)(Fne,5),t&2){let r;Ae(r=De())&&(i.trigger=r.first),Ae(r=De())&&(i.panel=r.first),Ae(r=De())&&(i._overlayDir=r.first);}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,i){t&1&&He("keydown",function(d){return i._handleKeydown(d)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(je$1("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),Oe("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen));},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",ve],disableRipple:[2,"disableRipple","disableRipple",ve],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ou(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",ve],placeholder:"placeholder",required:[2,"required","required",ve],multiple:[2,"multiple","multiple",ve],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",ve],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",ou],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",ve]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[qe([{provide:Vg,useExisting:n},{provide:Kle,useExisting:n}]),wt],ngContentSelectors:Ms,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,i){if(t&1&&(mn$1(Cs),Pe(0,"div",2,0),He("click",function(){return i.open()}),Pe(3,"div",3),Fe(4,ws,2,1,"span",4)(5,Is,3,1,"span",5),Ve(),Pe(6,"div",6)(7,"div",7),gA(),Pe(8,"svg",8),Wt(9,"path",9),Ve()()()(),_i(10,Ss,3,16,"ng-template",10),He("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(d){return i._handleOverlayKeydown(d)})),t&2){let r=iE(1);ye(3),je$1("id",i._valueId),ye(),Ue(i.empty?4:5),ye(6),Or("cdkConnectedOverlayDisableClose",true)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||r)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",true)("cdkConnectedOverlayUsePopover",i._popoverLocation);}},dependencies:[P0,Fne],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return n})(),nh=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=w$1({type:n,selectors:[["mat-select-trigger"]],features:[qe([{provide:ha,useExisting:n}])]})}return n})(),ii=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=le({type:n});static \u0275inj=se({imports:[oa,cet,Tt$1,Dm,VM,cet]})}return n})();var Ds=["input"],As=["label"],Ps=["*"],Co={color:"accent",clickAction:"check-indeterminate",disabledInteractive:false},Ns=new v("mat-checkbox-default-options",{providedIn:"root",factory:()=>Co}),ke=(function(n){return n[n.Init=0]="Init",n[n.Checked=1]="Checked",n[n.Unchecked=2]="Unchecked",n[n.Indeterminate=3]="Indeterminate",n})(ke||{}),Mo=class{source;checked},bi=(()=>{class n{_elementRef=m(j);_changeDetectorRef=m(St);_ngZone=m(G);_animationsDisabled=Xt();_options=m(Ns,{optional:true});focus(){this._inputElement.nativeElement.focus();}_createChangeEvent(e){let t=new Mo;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return `${this.id||this._uniqueId}-input`}required=false;labelPosition="after";name=null;change=new re;indeterminateChange=new re;value;disableRipple=false;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=ke.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){m(yn$1).load(Bl$1);let e=m(new dE("tabindex"),{optional:true});this._options=this._options||Co,this.color=this._options.color||Co.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=m(Ft).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??false;}ngOnChanges(e){e.required&&this._validatorChangeFn();}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate);}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck());}_checked=false;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck());}_disabled=false;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(ke.Indeterminate):this._transitionCheckState(this.checked?ke.Checked:ke.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e);}_indeterminate=R(false);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges();}writeValue(e){this.checked=!!e;}registerOnChange(e){this._controlValueAccessorChangeFn=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e;}validate(e){return this.required&&e.value!==true?{required:true}:null}registerOnValidatorChange(e){this._validatorChangeFn=e;}_transitionCheckState(e){let t=this._currentCheckState,i=this._getAnimationTargetElement();if(!(t===e||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let r=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(r);},1e3);});}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked);}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked);}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(false),this.indeterminateChange.emit(false);}),this._checked=!this._checked,this._transitionCheckState(this._checked?ke.Checked:ke.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate);}_onInteractionEvent(e){e.stopPropagation();}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck();});}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return "";switch(e){case ke.Init:if(t===ke.Checked)return this._animationClasses.uncheckedToChecked;if(t==ke.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case ke.Unchecked:return t===ke.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case ke.Checked:return t===ke.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case ke.Indeterminate:return t===ke.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return ""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e);}_onInputClick(){this._handleInputClick();}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus();}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation();}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ie({type:n,selectors:[["mat-checkbox"]],viewQuery:function(t,i){if(t&1&&Mn$1(Ds,5)(As,5),t&2){let r;Ae(r=De())&&(i._inputElement=r.first),Ae(r=De())&&(i._labelElement=r.first);}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,i){t&2&&(Nn$1("id",i.id),je$1("tabindex",null)("aria-label",null)("aria-labelledby",null),Fs$1(i.color?"mat-"+i.color:"mat-accent"),Oe("_mat-animation-noopable",i._animationsDisabled)("mdc-checkbox--disabled",i.disabled)("mat-mdc-checkbox-disabled",i.disabled)("mat-mdc-checkbox-checked",i.checked)("mat-mdc-checkbox-disabled-interactive",i.disabledInteractive));},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",ve],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",ve],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",ve],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:ou(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ve],checked:[2,"checked","checked",ve],disabled:[2,"disabled","disabled",ve],indeterminate:[2,"indeterminate","indeterminate",ve]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[qe([{provide:jo,useExisting:tn$1(()=>n),multi:true},{provide:zo,useExisting:n,multi:true}]),wt],ngContentSelectors:Ps,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,i){if(t&1&&(mn$1(),Pe(0,"div",3),He("click",function(d){return i._preventBubblingFromLabel(d)}),Pe(1,"div",4,0)(3,"div",5),He("click",function(){return i._onTouchTargetClick()}),Ve(),Pe(4,"input",6,1),He("blur",function(){return i._onBlur()})("click",function(){return i._onInputClick()})("change",function(d){return i._onInteractionEvent(d)}),Ve(),Wt(6,"div",7),Pe(7,"div",8),gA(),Pe(8,"svg",9),Wt(9,"path",10),Ve(),rP(),Wt(10,"div",11),Ve(),Wt(11,"div",12),Ve(),Pe(12,"label",13,2),Le(14),Ve()()),t&2){let r=iE(2);Or("labelPosition",i.labelPosition),ye(4),Oe("mdc-checkbox--selected",i.checked),Or("checked",i.checked)("indeterminate",i.indeterminate)("disabled",i.disabled&&!i.disabledInteractive)("id",i.inputId)("required",i.required)("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex),je$1("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby)("aria-describedby",i.ariaDescribedby)("aria-checked",i.indeterminate?"mixed":null)("aria-controls",i.ariaControls)("aria-disabled",i.disabled&&i.disabledInteractive?true:null)("aria-expanded",i.ariaExpanded)("aria-owns",i.ariaOwns)("name",i.name)("value",i.value),ye(7),Or("matRippleTrigger",r)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",true),ye(),Or("for",i.inputId);}},dependencies:[V0,fet],styles:[`.mdc-checkbox {
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
`],encapsulation:2})}return n})(),Wn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=le({type:n});static \u0275inj=se({imports:[bi,Tt$1]})}return n})();var Fs=["*"];function Vs(n,o){if(n&1&&(Pe(0,"icon",2),Ei(1,"info"),Ve()),n&2){let e=qt();Or("matTooltip",e.info());}}function Ls(n,o){n&1&&Wt(0,"div",3);}function Bs(n,o){if(n&1&&(Pe(0,"div",4)(1,"div",6)(2,"div",7)(3,"icon"),Ei(4),Ve()()()()),n&2){let e=qt();ye(),Oe("bg-base-200",!e.value())("bg-info",e.value())("border-info!",e.value()),ye(),Oe("left-1",!e.value())("left-5",e.value())("bg-base-400",!e.value())("bg-info-light",e.value()),ye(2),iu(e.value()?"done":"remove");}}function Us(n,o){if(n&1){let e=sC();Pe(0,"mat-checkbox",8),He("ngModelChange",function(i){J_(e);let r=qt();return ey(r.setValue(i))}),Ve(),V8();}if(n&2){let e=qt();Or("ngModel",e.value()),G8();}}var ga=(()=>{class n{constructor(){this.toggle=Xi(void 0),this.label=Xi(void 0),this.info=Xi(void 0),this.value=R(void 0),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e;}setValue(e){this.value.set(e),this._onChange&&this._onChange(e);}writeValue(e){this.value.set(e);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["settings-toggle"]],inputs:{toggle:[1,"toggle"],label:[1,"label"],info:[1,"info"]},features:[qe([{provide:jo,useExisting:tn$1(()=>n),multi:true}])],ngContentSelectors:Fs,decls:9,vars:8,consts:[["type","button","matRipple","",1,"hover:bg-base-200","relative","flex","flex-1","items-center","space-x-2","overflow-hidden","rounded-sm","border","py-1","pr-1","pl-2",3,"click"],[1,"z-10","flex","flex-1","items-center","space-x-2","p-2","text-left"],[3,"matTooltip"],[1,"bg-info","absolute","inset-0","z-0","m-0!","opacity-10"],[1,"px-2"],[1,"pointer-events-none",3,"ngModel"],["toggle","",1,"border-base-400","relative","h-8","w-12","rounded-full","border-2"],[1,"absolute","top-1/2","flex","h-6","w-6","-translate-x-0.5","-translate-y-1/2","items-center","justify-center","rounded-full","text-black","shadow-sm"],[1,"pointer-events-none",3,"ngModelChange","ngModel"]],template:function(t,i){t&1&&(mn$1(),Pe(0,"button",0),He("click",function(){return i.setValue(!i.value())}),Pe(1,"div",1)(2,"div"),Ei(3),Le(4),Ve(),Fe(5,Vs,2,1,"icon",2),Ve(),Fe(6,Ls,1,0,"div",3),Fe(7,Bs,5,15,"div",4)(8,Us,1,1,"mat-checkbox",5),Ve()),t&2&&(Oe("border-base-300",!i.value())("border-info",i.value()),ye(3),Fo(" ",i.label()," "),ye(2),Ue(i.info()?5:-1),ye(),Ue(i.value()?6:-1),ye(),Ue(i.toggle()?7:8));},dependencies:[Wn,bi,hMe,aMe,wJ,Det,snt,$de],styles:[`[_nghost-%COMP%]{display:flex}[toggle][_ngcontent-%COMP%]{transition:background .2s,left .2s}
/*# sourceMappingURL=settings-toggle.component.css.map */`]});}}return n})();var oi=new Map,zs="PlaceOS.image-cache-v1",va="PlaceOS.image-cache-keys-v1";var ni=null;function xa(){if(ni)return ni;if(typeof sessionStorage>"u")return [];try{let n=sessionStorage.getItem(va);return ni=n?JSON.parse(n):[],ni}catch{return []}}function Gs(n){if(ni=Array.from(new Set(n)),!(typeof sessionStorage>"u"))try{sessionStorage.setItem(va,JSON.stringify(ni));}catch{}}async function ka(){if(typeof caches>"u")return null;try{return await caches.open(zs)}catch{return null}}async function Hs(n){if(!xa().includes(n))return null;let o=await ka();if(!o)return null;try{return await o.match(n)||null}catch{return null}}async function Ws(n,o){let e=await ka();if(e)try{await e.put(n,o),Gs([...xa(),n]);}catch{}}function js(n){let o=Zt$1();document.cookie=`${o==="x-api-key"?"api-key="+encodeURIComponent(Sl$1()):"bearer_token="+encodeURIComponent(o)};max-age=30;path=${n};samesite=strict;${location.protocol==="https:"?"secure;":""}`;}function qs(){let n=Zt$1();return n==="x-api-key"?{"X-API-Key":Sl$1()}:{Authorization:`Bearer ${n}`}}async function ba(n,o){let e=await o.blob(),t=URL.createObjectURL(e);return oi.set(n,t),t}async function ya(n,o){return Ma(n,()=>(js(o),fetch(n)))}async function Ca(n){return Ma(n,()=>fetch(n,{headers:qs()}))}async function Ma(n,o){if(oi.has(n))return oi.get(n);let e=await Hs(n);if(e)return ba(n,e);let t=await o();if(!t||!t.ok)throw new Error(`Failed to fetch image: ${t?.status}`);return Ws(n,t.clone()),ba(n,t)}var Et=(()=>{class n extends Ws$1{constructor(){super(),this._element=m(j),this.source=Xi(void 0);}ngOnChanges(e){e.source&&this.source()&&this._loadImage();}async _loadImage(){let e=this.source();if(typeof e!="string")return;if(!this._element||!Kr())return this.timeout("load",()=>this._loadImage(),300);if(!this._isLocalUrl(e)){this._element.nativeElement.src=e;return}if(oi.has(e)){this._element.nativeElement.src=oi.get(e);return}let t=e.includes("/api/engine/v2/uploads")||e.includes("/api/engine/v2/signage");try{this._element.nativeElement.src=t?await ya(e,this._cookiePath(e)):await Ca(e);}catch(i){this._element.nativeElement.dispatchEvent(new ErrorEvent("error",{error:i}));}}_isLocalUrl(e){try{return new URL(e,location.href).origin===location.origin}catch{return  false}}_cookiePath(e){return e.includes("/api/engine/v2/uploads")?"/api/engine/v2/uploads":"/api/engine/v2/signage"}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275dir=w$1({type:n,selectors:[["img","auth",""],["video","auth",""],["audio","auth",""]],inputs:{source:[1,"source"]},features:[xe,wt]});}}return n})();var $s=["*"];function Xs(n,o){n&1&&(Pe(0,"button",7)(1,"icon"),Ei(2,"close"),Ve()());}function Ys(n,o){if(n&1&&Fe(0,Xs,3,0,"button",7),n&2){let e=qt(2);Ue(e.loading()?-1:0);}}function Ks(n,o){if(n&1&&(Pe(0,"a",8)(1,"icon"),Ei(2,"close"),Ve()()),n&2){let e=qt(3);Or("routerLink",e.close());}}function Qs(n,o){if(n&1&&Fe(0,Ks,3,1,"a",8),n&2){let e=qt(2);Ue(e.loading()?-1:0);}}function Zs(n,o){if(n&1&&Fe(0,Ys,1,1)(1,Qs,1,1),n&2){let e=qt();Ue(e.close()?.length?1:0);}}function Js(n,o){n&1&&(Le(0),Wt(1,"div",9));}function el(n,o){if(n&1&&(Pe(0,"div",5),Wt(1,"mat-spinner",10),Pe(2,"p",11),Ei(3),Ve()()),n&2){let e=qt();ye(),Or("diameter",32),ye(2),iu(e.loading());}}function tl(n,o){if(n&1){let e=sC();Pe(0,"footer",12)(1,"button",13),He("click",function(){J_(e);let i=qt();return ey(i.confirm.emit())}),Ei(2),lC(3,"translate"),Ve()();}if(n&2){let e=qt();Oe("max-w-156",!e.full_width()),ye(),Or("disabled",e.confirm_disabled()),ye(),Fo(" ",e.confirm_text()||e9(3,4,"COMMON.SAVE")," ");}}var jn=(()=>{class n{constructor(){this.loading=Xi(""),this.heading=Xi("Fullscreen Modal"),this.confirm_text=Xi(""),this.confirm_disabled=Xi(false),this.close=Xi([]),this.hide_confirm=Xi(false),this.hide_close=Xi(false),this.full_width=Xi(false),this.confirm=qDe(),this.closed=qDe();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["fullscreen-modal-shell"],["","fs-modal-shell",""]],inputs:{loading:[1,"loading"],heading:[1,"heading"],confirm_text:[1,"confirm_text"],confirm_disabled:[1,"confirm_disabled"],close:[1,"close"],hide_confirm:[1,"hide_confirm"],hide_close:[1,"hide_close"],full_width:[1,"full_width"]},outputs:{confirm:"confirm",closed:"closed"},ngContentSelectors:$s,decls:10,vars:14,consts:[[1,"bg-base-200","fixed","inset-0","flex","flex-col","items-center","overflow-auto","px-2"],[1,"border-base-300","bg-base-100","fixed","top-0","mx-auto","h-screen","max-w-full","border-x"],[1,"bg-base-200","sticky","top-0","z-10","mx-auto","my-2","flex","h-14","w-full","items-center","justify-between","rounded-sm","border-none","px-4","py-2"],[1,"flex","items-center","text-xl","font-medium","capitalize",3,"innerHTML"],[1,"z-0","mx-auto","h-1/2","w-full","flex-1","space-y-8","p-2"],[1,"flex","h-1/2","w-full","flex-1","flex-col","items-center","justify-center","space-y-4","p-12"],[1,"bg-base-200","fixed","bottom-0","left-1/2","z-10","mx-auto","my-2","flex","w-full","-translate-x-1/2","items-center","justify-end","rounded-sm","border-none","px-4","py-2",3,"max-w-156"],["icon","","matRipple","","mat-dialog-close",""],["icon","","matRipple","",3,"routerLink"],[1,"h-24","w-full"],[3,"diameter"],[1,"text-center","opacity-50"],[1,"bg-base-200","fixed","bottom-0","left-1/2","z-10","mx-auto","my-2","flex","w-full","-translate-x-1/2","items-center","justify-end","rounded-sm","border-none","px-4","py-2"],["btn","","matRipple","",1,"min-w-32",3,"click","disabled"]],template:function(t,i){t&1&&(mn$1(),Pe(0,"div",0),Wt(1,"div",1),Pe(2,"header",2),Wt(3,"h2",3),lC(4,"sanitize"),Fe(5,Zs,2,1),Ve(),Pe(6,"main",4),Fe(7,Js,2,0)(8,el,4,2,"div",5),Ve(),Fe(9,tl,4,6,"footer",6),Ve()),t&2&&(ye(),Oe("w-160",!i.full_width())("w-full",i.full_width()),ye(),Oe("max-w-156",!i.full_width()),ye(),Or("innerHTML",e9(4,12,i.heading()),f5),ye(2),Ue(i.hide_close()?-1:5),ye(),Oe("max-w-156",!i.full_width()),ye(),Ue(i.loading()?8:7),ye(2),Ue(!i.loading()&&!i.hide_confirm()?9:-1));},dependencies:[Tt,Zt,Det,AQe,IQe,Vl$1,V0,nX,Ev,unt,Art],styles:[`main[_ngcontent-%COMP%]{scroll-margin-top:60px}
/*# sourceMappingURL=fullscreen-modal-shell.component.css.map */`]});}}return n})();var il=["portal_content"],nl=["*"];function ol(n,o){n&1&&B1(0);}function rl(n,o){if(n&1&&_i(0,ol,1,0,"ng-container",3),n&2){let e=qt(2);Or("ngComponentOutlet",e.component())("ngComponentOutletInjector",e.injector);}}function al(n,o){if(n&1&&(Wt(0,"div",2),lC(1,"sanitize")),n&2){let e=qt(2);Or("innerHTML",e9(1,1,e.html()),f5);}}function sl(n,o){n&1&&B1(0);}function ll(n,o){if(n&1&&_i(0,sl,1,0,"ng-container",4),n&2){let e=qt(2);Or("ngTemplateOutlet",e.template())("ngTemplateOutletContext",e.data());}}function cl(n,o){if(n&1&&(Pe(0,"div",1),Fe(1,rl,1,2,"ng-container")(2,al,2,3,"div",2)(3,ll,1,2,"ng-container"),Ve()),n&2){let e,t=qt();ye(),Ue((e=t.type())==="component"?1:e==="html"?2:3);}}var Ne=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275prov=P$1({token:n,factory:n.\u0275fac});}}return n})(),Ta=(()=>{class n extends Ws$1{constructor(){super(...arguments),this._element=m(j),this._overlay=m(OG),this._injector=m(H),this._view_container_ref=m(Yt$1),this.x_pos=Xi("end",{alias:"xPosition"}),this.y_pos=Xi("top",{alias:"yPosition"}),this.content=Xi(void 0),this.data=Xi(void 0),this.backdrop=Xi(true),this.hover=Xi(false),this.delay=Xi(0),this.x_offset=Xi(0,{alias:"xOffset"}),this.y_offset=Xi(0,{alias:"yOffset"}),this.type=O(()=>this.content()instanceof hn$1?"template":this.content()instanceof OK?"component":"html"),this.template=O(()=>this.content()),this.html=O(()=>this.content()),this.component=O(()=>this.content()),this._overlay_ref=null,this._portal_content=np.required("portal_content",{read:hn$1}),this._update_injector=ft(()=>{this.injector=H.create({providers:[{provide:Ne,useValue:{data:this.data(),close:()=>this.close()}}],parent:this._injector});});}ngOnInit(){let e=()=>this.hover()?"":this.open(),t=r=>this._canOpenHoverTooltip(r)?this.open():"",i=r=>this._canOpenHoverTooltip(r)?this.close():"";this._element.nativeElement.addEventListener("click",e),this._element.nativeElement.addEventListener("touchend",e),this._element.nativeElement.addEventListener("pointerenter",t),this._element.nativeElement.addEventListener("pointerleave",i),this.subscription("click",()=>this._element.nativeElement.removeEventListener("click",e)),this.subscription("touchend",()=>this._element.nativeElement.removeEventListener("touchend",e)),this.subscription("pointerenter",()=>this._element.nativeElement.removeEventListener("pointerenter",t)),this.subscription("pointerleave",()=>this._element.nativeElement.removeEventListener("pointerleave",i));}ngOnChanges(e){this._overlay_ref&&(e.x_pos||e.y_pos||e.x_offset||e.y_offset||e.content)&&this.open();}ngOnDestroy(){super.ngOnDestroy(),this.close();}open(){this.content()&&this.timeout("open",()=>{let e=this.hover(),t=this.delay();e&&t&&this.timeout("onclose",()=>this.close(),t),this._overlay_ref&&this.close();let i=new Xo(this._portal_content(),this._view_container_ref),r="end",d="top",x=this.y_pos();this._overlay_ref=this._overlay.create({hasBackdrop:!!this.backdrop()&&!e,positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withDefaultOffsetX(this.x_offset()).withDefaultOffsetY(this.y_offset()).withPositions([{originX:this.x_pos()||r,originY:(x==="top"?"bottom":x=="bottom"?"top":x)||d,overlayX:this.x_pos()||r,overlayY:this.y_pos()||d}])}),this._overlay_ref.attach(i),this.backdrop()&&this.subscription("backdrop",this._overlay_ref.backdropClick().subscribe(()=>this.close()));},50);}close(){this.clearTimeout("open"),this._overlay_ref&&(this._overlay_ref.dispose(),this._overlay_ref=null);}_canOpenHoverTooltip(e){return this.hover()?!("pointerType"in e)||e.pointerType!=="touch":false}static{this.\u0275fac=(()=>{let e;return function(i){return (e||(e=Et$1(n)))(i||n)}})();}static{this.\u0275cmp=Ie({type:n,selectors:[["","customTooltip",""]],viewQuery:function(t,i){t&1&&nE(i._portal_content,il,5,hn$1),t&2&&rE();},inputs:{x_pos:[1,"xPosition","x_pos"],y_pos:[1,"yPosition","y_pos"],content:[1,"content"],data:[1,"data"],backdrop:[1,"backdrop"],hover:[1,"hover"],delay:[1,"delay"],x_offset:[1,"xOffset","x_offset"],y_offset:[1,"yOffset","y_offset"]},features:[xe,wt],ngContentSelectors:nl,decls:3,vars:0,consts:[["portal_content",""],["custom-tooltip","",1,"relative","print:hidden"],[3,"innerHTML"],[4,"ngComponentOutlet","ngComponentOutletInjector"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,i){t&1&&(mn$1(),Le(0),_i(1,cl,4,1,"ng-template",null,0,fC));},dependencies:[uU,h7,KC,Art],styles:[`[_nghost-%COMP%]{pointer-events:auto!important}
/*# sourceMappingURL=custom-tooltip.component.css.map */`]});}}return n})();var dl=["input"],ml=["formField"],pl=["*"],$n=class{source;value;constructor(o,e){this.source=o,this.value=e;}},ul={provide:jo,useExisting:tn$1(()=>vi),multi:true},Ea=new v("MatRadioGroup"),_l=new v("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:false})}),vi=(()=>{class n{_changeDetector=m(St);_value=null;_name=m(Ft).getId("mat-radio-group-");_selected=null;_isInitialized=false;_labelPosition="after";_disabled=false;_required=false;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new re;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames();}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e==="before"?"before":"after",this._markRadiosForCheck();}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton());}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=true);}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton();}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck();}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck();}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck();}_disabledInteractive=false;ngAfterContentInit(){this._isInitialized=true,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null);});}ngOnDestroy(){this._buttonChanges?.unsubscribe();}_touch(){this.onTouched&&this.onTouched();}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck();});}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t);}));}_emitChangeEvent(){this._isInitialized&&this.change.emit(new $n(this._selected,this._value));}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck());}writeValue(e){this.value=e,this._changeDetector.markForCheck();}registerOnChange(e){this._controlValueAccessorChangeFn=e;}registerOnTouched(e){this.onTouched=e;}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w$1({type:n,selectors:[["mat-radio-group"]],contentQueries:function(t,i,r){if(t&1&&Qi(r,ri,5),t&2){let d;Ae(d=De())&&(i._radios=d);}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",ve],required:[2,"required","required",ve],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ve]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[qe([ul,{provide:Ea,useExisting:n}])]})}return n})(),ri=(()=>{class n{_elementRef=m(j);_changeDetector=m(St);_focusMonitor=m(Qo);_radioDispatcher=m(xo);_defaultOptions=m(_l,{optional:true});_ngZone=m(G);_renderer=m($e);_uniqueId=m(Ft).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=false;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck());}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)));}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e;}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e);}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e;}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e;}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e;}_disabledInteractive;change=new re;radioGroup;get inputId(){return `${this.id||this._uniqueId}-input`}_checked=false;_disabled=false;_required=false;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=Xt();_injector=m(H);constructor(){m(yn$1).load(Bl$1);let e=m(Ea,{optional:true}),t=m(new dE("tabindex"),{optional:true});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??false,t&&(this.tabIndex=ou(t,0));}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e);}_markForCheck(){this._changeDetector.markForCheck();}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=false);});}ngDoCheck(){this._updateTabIndex();}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,true).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch();}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick);});}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener();}_emitChangeEvent(){this.change.emit(new $n(this,this._value));}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=true,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent());}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus();}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck());}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault();};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let i=this._inputElement?.nativeElement;i&&(i.setAttribute("tabindex",t+""),this._previousTabIndex=t,Vt(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===i&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===i&&this._inputElement.nativeElement.blur());});},{injector:this._injector}));}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ie({type:n,selectors:[["mat-radio-button"]],viewQuery:function(t,i){if(t&1&&Mn$1(dl,5)(ml,7,j),t&2){let r;Ae(r=De())&&(i._inputElement=r.first),Ae(r=De())&&(i._rippleTrigger=r.first);}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(t,i){t&1&&He("focus",function(){return i._inputElement.nativeElement.focus()}),t&2&&(je$1("id",i.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),Oe("mat-primary",i.color==="primary")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("mat-mdc-radio-checked",i.checked)("mat-mdc-radio-disabled",i.disabled)("mat-mdc-radio-disabled-interactive",i.disabledInteractive)("_mat-animation-noopable",i._noopAnimations));},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",ve],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ou(e)],checked:[2,"checked","checked",ve],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",ve],required:[2,"required","required",ve],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ve]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:pl,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(t,i){t&1&&(mn$1(),Pe(0,"div",2,0)(2,"div",3)(3,"div",4),He("click",function(d){return i._onTouchTargetClick(d)}),Ve(),Pe(4,"input",5,1),He("change",function(d){return i._onInputInteraction(d)}),Ve(),Pe(6,"div",6),Wt(7,"div",7)(8,"div",8),Ve(),Pe(9,"div",9),Wt(10,"div",10),Ve()(),Pe(11,"label",11),Le(12),Ve()()),t&2&&(Or("labelPosition",i.labelPosition),ye(2),Oe("mdc-radio--disabled",i.disabled),ye(2),Or("id",i.inputId)("checked",i.checked)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),je$1("name",i.name)("value",i.value)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby)("aria-describedby",i.ariaDescribedby)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),ye(5),Or("matRippleTrigger",i._rippleTrigger.nativeElement)("matRippleDisabled",i._isRippleDisabled())("matRippleCentered",true),ye(2),Or("for",i.inputId));},dependencies:[V0,fet],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})}return n})(),Xn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=le({type:n});static \u0275inj=se({imports:[Vl$1,ri,Tt$1]})}return n})();var Sa=(()=>{class n{constructor(){this.url=m(Zce);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["image-viewer"]],decls:5,vars:1,consts:[[1,"bg-base-200","h-screen","w-screen"],["auth","",1,"h-full","w-full","object-contain","object-center",3,"source"],["icon","","matRipple","","mat-dialog-close","",1,"bg-base-100","absolute","top-1","right-1"]],template:function(t,i){t&1&&(Pe(0,"div",0),Wt(1,"img",1),Pe(2,"button",2)(3,"icon"),Ei(4,"close"),Ve()()()),t&2&&(ye(),Or("source",i.url));},dependencies:[Det,Et,AQe,IQe],encapsulation:2});}}return n})();var hl=(n,o,e)=>({file:n,is_public:o,permissions:e});function fl(n,o){if(n&1){let e=sC();Pe(0,"div",7)(1,"label"),Ei(2,"Permissions"),Ve(),Pe(3,"mat-form-field",11)(4,"mat-select",12),He("ngModelChange",function(i){J_(e);let r=qt();return ey(r.permissions.set(i))}),Pe(5,"mat-option",13),Ei(6,"None"),Ve(),Pe(7,"mat-option",14),Ei(8,"Support"),Ve(),Pe(9,"mat-option",15),Ei(10,"Admin"),Ve()(),V8(),Ve()();}if(n&2){let e=qt();ye(4),Or("ngModel",e.permissions()),G8();}}var Ra=(()=>{class n{constructor(){this._dialog_ref=m(ET),this._data=m(Zce),this.file=this._data.file,this.is_public=R(!!this._data.is_public),this.permissions=R("none"),this.file=this._data.file;}close(){this._dialog_ref.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["upload-permissions-modal"]],decls:18,vars:7,consts:[[1,"bg-base-200","sticky","top-0","z-10","m-2","w-[calc(100%-1rem)]","rounded-sm","border-none","p-2"],[1,"px-2","text-xl","font-medium"],["icon","","matRipple","","mat-dialog-close",""],[1,"min-w-[20rem]","space-y-2","px-4","py-2"],[1,"flex","flex-col"],["appearance","outline",1,"no-subscript"],["matInput","","disabled","true","placeholder","File Name",3,"ngModel"],[1,"flex","flex-col","space-y-2"],[1,"border-base-200","flex","items-center","justify-end","space-x-2","border-t","px-4","py-2"],["btn","","matRipple","","mat-dialog-close","",1,"inverse","w-32"],["btn","","matRipple","",1,"w-32",3,"mat-dialog-close"],["appearance","outline"],[3,"ngModelChange","ngModel"],["value","none"],["value","support"],["value","admin"]],template:function(t,i){t&1&&(Pe(0,"header",0)(1,"h2",1),Ei(2,"Upload File"),Ve(),Pe(3,"button",2)(4,"icon"),Ei(5,"close"),Ve()()(),Pe(6,"main",3)(7,"div",4)(8,"label"),Ei(9,"File Name"),Ve(),Pe(10,"mat-form-field",5),Wt(11,"input",6),V8(),Ve()(),Fe(12,fl,11,1,"div",7),Ve(),Pe(13,"footer",8)(14,"button",9),Ei(15," Cancel "),Ve(),Pe(16,"button",10),Ei(17," Upload "),Ve()()),t&2&&(ye(11),Or("ngModel",i.file.name),G8(),ye(),Ue(i.is_public()?-1:12),ye(4),Or("mat-dialog-close",j6(3,hl,i.file,i.is_public(),i.permissions())));},dependencies:[AQe,IQe,VM,YY,hMe,TV,aMe,wJ,ii,ti,CY,Det,ktt,xtt,Vl$1,V0],encapsulation:2});}}return n})();var gl=["image_list"],bl=["file_input"];function vl(n,o){if(n&1){let e=sC();Pe(0,"div",15),Wt(1,"img",16),Pe(2,"div",17),Wt(3,"div",18),Pe(4,"div",19)(5,"button",20),He("click",function(){let i=J_(e).$implicit,r=qt();return ey(r.copyLink(i))}),Pe(6,"icon"),Ei(7,"link"),Ve()(),Pe(8,"button",20),He("click",function(){let i=J_(e).$implicit,r=qt();return ey(r.viewImage(i))}),Pe(9,"icon"),Ei(10,"visibility"),Ve()(),Pe(11,"button",20),He("click",function(){let i=J_(e).$implicit,r=qt();return ey(r.removeImage(i))}),Pe(12,"icon"),Ei(13,"close"),Ve()()()()();}if(n&2){let e=o.$implicit,t=qt();cC("transform","translate(-"+t.offset()+"00%)"),ye(),Or("source",e);}}function xl(n,o){if(n&1&&Wt(0,"mat-progress-spinner",22),n&2){let e=qt().$implicit;Or("value",e.progress)("diameter",64);}}function kl(n,o){n&1&&(Pe(0,"icon",23),Ei(1,"warning"),Ve());}function yl(n,o){n&1&&(Pe(0,"div",24)(1,"icon",25),Ei(2,"refresh"),Ve()());}function Cl(n,o){if(n&1){let e=sC();Pe(0,"div",21),He("click",function(){let i=J_(e).$implicit,r=qt();return ey(r.retryUpload(i))}),Fe(1,xl,1,2,"mat-progress-spinner",22),Fe(2,kl,2,0,"icon",23),Fe(3,yl,3,0,"div",24),Ve();}if(n&2){let e=o.$implicit,t=qt();cC("transform","translate(-"+t.offset()+"00%)"),Or("matTooltip",e.error),ye(),Ue(e.error?-1:1),ye(),Ue(e.error?2:-1),ye(),Ue(e.error?3:-1);}}function Ml(n,o){if(n&1){let e=sC();Pe(0,"button",26),He("click",function(){J_(e);let i=qt();return ey(i.previousOffset())}),Pe(1,"icon"),Ei(2,"chevron_left"),Ve()();}if(n&2){let e=qt();Or("disabled",e.offset()===0);}}function wl(n,o){if(n&1){let e=sC();Pe(0,"button",27),He("click",function(){J_(e);let i=qt();return ey(i.nextOffset())}),Pe(1,"icon"),Ei(2,"chevron_right"),Ve()();}if(n&2){let e=qt();Or("disabled",e.offset()>=e.length()-e.view_space());}}function Tl(n,o){if(n&1){let e=sC();Pe(0,"mat-chip-row",28),He("removed",function(){let i=J_(e).$implicit,r=qt();return ey(r.removeImage(i))}),Pe(1,"div",29),Ei(2),Ve(),Pe(3,"button",30)(4,"icon"),Ei(5,"cancel"),Ve()()();}if(n&2){let e=o.$implicit;ye(2),iu(e),ye(),je$1("aria-label","Remove "+e);}}var Da=(()=>{class n extends Ws$1{constructor(){super(...arguments),this._clipboard=m(V2),this._uploads=m(HQe),this._dialog=m(vT),this._injector=m(H),this._upload_completion_effect=ft(()=>{let e=this.upload_list(),t=this.upload_ids();for(let i of t){let r=e.find(d=>d?.id===i);r&&r.progress>=100&&(this.addImageUrl(r.link),this.upload_ids.set(this.upload_ids().filter(d=>d!==i)));}},{injector:this._injector}),this.list=R([]),this.upload_map={},this.upload_ids=R([]),this.upload_list=R([]),this.offset=R(0),this.view_space=R(0),this.separators=[188,13],this.uploads=O(()=>{let e=this.upload_ids();return this.upload_list().filter(t=>e.includes(t?.id))}),this.length=O(()=>this.list().length+this.upload_list().length+1),this._list_el=np("image_list"),this._file_input=np("file_input"),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e;}ngAfterViewInit(){this.updateViewSpace();}updateViewSpace(){this.timeout("init_view_space",()=>{let e=this._list_el()?.nativeElement?.getBoundingClientRect();e&&this.view_space.set(Math.floor(e.width/152));},100);}copyLink(e){this._clipboard.copy(e),u2("Copied image URL to clipboard");}viewImage(e){this._dialog.open(Sa,{data:e});}removeImage(e){this.setValue(this.list().filter(t=>t!==e));}addImage(e){e.value&&(this.setValue(Oi([...this.list(),e.value])),e.chipInput.inputElement.value="");}addImageUrl(e){this.setValue(Oi([...this.list(),e]));}retryUpload(e){e.error&&(e.error=null,e.upload.resume());}previousOffset(){this.offset.update(e=>e-1);}nextOffset(){this.offset.update(e=>e+1);}async uploadImages(e){let t=e.target;if(t?.files){let i=t.files;if(i.length){this.interval("update_status",()=>this._updateUploadHistory());for(let r=0;r<i.length;r++){let d=await this._uploads.uploadFileWithPermissions(i[r]);this.upload_ids.set([...this.upload_ids(),d]),this._file_input().nativeElement.value="";}}}}setValue(e){let t=e||[];this.list.set(t),this._onChange&&this._onChange(t);}writeValue(e){this.list.set(e||[]);}async _updateUploadHistory(){let e=this.upload_ids();if(e.length===0)return;let i=this._uploads.upload_list().filter(d=>e.find(x=>x===d?.id)),r=i.filter(d=>d.progress>=100);this.upload_list.set(i),r.forEach(d=>{console.log("ID:",l({},d)),this.upload_map[d?.id]=d.upload?.id||d?.id,delete d.upload;}),r.length>=e.length&&this.clearInterval("update_status");}static{this.\u0275fac=(()=>{let e;return function(i){return (e||(e=Et$1(n)))(i||n)}})();}static{this.\u0275cmp=Ie({type:n,selectors:[["image-list-field"]],viewQuery:function(t,i){t&1&&nE(i._list_el,gl,5)(i._file_input,bl,5),t&2&&rE(2);},features:[qe([{provide:jo,useExisting:tn$1(()=>n),multi:true},{provide:Lle,useValue:Ra}]),xe],decls:23,vars:13,consts:[["image_list",""],["file_input",""],["chipList",""],["images","",1,"relative","mb-2","flex","w-full","items-center","space-x-2","overflow-hidden","py-2",3,"resize"],["image","",1,"border-base-200","hover:border-base-300","hover:bg-base-200","relative","flex","h-32","w-36","shrink-0","cursor-pointer","flex-col","items-center","justify-center","rounded-xl","border-2","border-dashed"],[1,"text-4xl","opacity-60"],[1,"px-4","text-center","opacity-60"],["type","file",1,"absolute","inset-0","h-32","w-32","cursor-pointer","opacity-0",3,"change"],["image","",1,"bg-base-200","relative","h-32","w-36","shrink-0","overflow-hidden","rounded-sm","bg-cover","bg-center",3,"transform"],["upload","",1,"border-base-content/10","/5","bg-base-200","flex","h-32","w-36","shrink-0","items-center","justify-center","rounded-sm","border","bg-cover","bg-center",3,"transform","matTooltip"],["icon","","matRipple","",1,"bg-base-100","absolute","top-1/2","left-0","-translate-y-1/2","transform",3,"disabled"],["icon","","matRipple","",1,"bg-base-100","absolute","top-1/2","right-0","-translate-y-1/2","transform",3,"disabled"],["appearance","outline",1,"w-full"],["aria-label","Image List"],[3,"matChipInputTokenEnd","placeholder","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur"],["image","",1,"bg-base-200","relative","h-32","w-36","shrink-0","overflow-hidden","rounded-sm","bg-cover","bg-center"],["auth","",1,"pointer-events-none","absolute","top-1/2","left-1/2","z-10","-translate-x-1/2","-translate-y-1/2","object-contain",3,"source"],["overlay","",1,"text-base-100","absolute","inset-0","z-20"],["bg","",1,"absolute","inset-0","bg-black","opacity-0"],["actions","",1,"absolute","top-0","right-0","left-0","flex","items-center","justify-center","space-x-2","opacity-0"],["icon","",3,"click"],["upload","",1,"border-base-content/10","/5","bg-base-200","flex","h-32","w-36","shrink-0","items-center","justify-center","rounded-sm","border","bg-cover","bg-center",3,"click","matTooltip"],["mode","determinate",3,"value","diameter"],[1,"text-error","text-6xl"],["overlay","",1,"text-base-100","hover:bg-base-content","hover:bg-opacity-50","absolute","inset-0","flex","items-center","justify-center"],[1,"text-3xl","opacity-0"],["icon","","matRipple","",1,"bg-base-100","absolute","top-1/2","left-0","-translate-y-1/2","transform",3,"click","disabled"],["icon","","matRipple","",1,"bg-base-100","absolute","top-1/2","right-0","-translate-y-1/2","transform",3,"click","disabled"],[3,"removed"],[1,"max-w-md","truncate"],["matChipRemove",""]],template:function(t,i){if(t&1&&(Pe(0,"div",3,0),He("resize",function(){return i.updateViewSpace()},m5),Pe(2,"div",4)(3,"icon",5),Ei(4,"add"),Ve(),Pe(5,"p",6),Ei(6),lC(7,"translate"),Ve(),Pe(8,"input",7,1),He("change",function(d){return i.uploadImages(d)}),Ve()(),Y4(10,vl,14,3,"div",8,z4),Y4(12,Cl,4,6,"div",9,z4),Fe(14,Ml,3,1,"button",10),Fe(15,wl,3,1,"button",11),Ve(),Pe(16,"mat-form-field",12)(17,"mat-chip-grid",13,2),Y4(19,Tl,6,2,"mat-chip-row",null,z4),Ve(),Pe(21,"input",14),lC(22,"translate"),He("matChipInputTokenEnd",function(d){return i.addImage(d)}),Ve()()),t&2){let r=iE(18);ye(2),cC("transform","translate(-"+i.offset()+"00%)"),ye(4),Fo(" ",e9(7,9,"COMMON.IMAGE_UPLOADS")," "),ye(4),W4(i.list()),ye(2),W4(i.uploads()),ye(2),Ue(i.length()>i.view_space()?14:-1),ye(),Ue(i.length()>i.view_space()?15:-1),ye(4),W4(i.list()),ye(2),Or("placeholder",e9(22,11,"COMMON.IMAGE_ADD_URL"))("matChipInputFor",r)("matChipInputSeparatorKeyCodes",i.separators)("matChipInputAddOnBlur",true);}},dependencies:[VM,YY,vrt,yrt,Ert,_rt,zue,Tt,Zt,snt,$de,Det,Et,unt],styles:[`[_nghost-%COMP%]{width:100%}[overlay][_ngcontent-%COMP%]{transition:background .2s}[image][_ngcontent-%COMP%]:hover   [actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%]:hover > icon[_ngcontent-%COMP%]{opacity:1!important}[image][_ngcontent-%COMP%]:hover   [bg][_ngcontent-%COMP%]{opacity:.4!important}[actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%] > icon[_ngcontent-%COMP%]{transition:opacity .2s}[image][_ngcontent-%COMP%]{transition:transform .2s}
/*# sourceMappingURL=image-list-field.component.css.map */`]});}}return n})();function El(n,o){if(n&1&&(Wt(0,"div",1),lC(1,"safe")),n&2){let e=qt();Or("innerHTML",dC(1,1,e.changelog(),"html"),f5);}}function Il(n,o){n&1&&(Pe(0,"div",2)(1,"icon",3),Ei(2,"close"),Ve(),Pe(3,"div",4),Ei(4,"No changelog"),Ve()());}var Aa=(()=>{class n{constructor(){this._data=m(Zce),this.loading=R(false),this.changelog=O(()=>lt$1(this._data.changelog||"",{async:false}));}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["changelog-modal"]],decls:3,vars:3,consts:[[3,"heading","hide_confirm"],[1,"markdown",3,"innerHTML"],[1,"flex","flex-col","items-center","justify-center","space-y-2"],[1,"text-3xl"],[1,"text"]],template:function(t,i){t&1&&(Pe(0,"fullscreen-modal-shell",0),Fe(1,El,2,4,"div",1)(2,Il,5,0,"div",2),Ve()),t&2&&(Or("heading","Changelog")("hide_confirm",true),ye(),Ue(i.changelog()?1:2));},dependencies:[jn,Det,wY],encapsulation:2});}}return n})();function Sl(n,o){if(n&1&&(Pe(0,"div",1),Ei(1),Ve()),n&2){let e=qt(2);ye(),Fo(" ",e.initials," ");}}function Ol(n,o){if(n&1&&Wt(0,"img",2),n&2){let e=qt(2);Or("alt",e.initials)("source",e.user().photo);}}function Rl(n,o){if(n&1&&(Pe(0,"div",0),Fe(1,Sl,2,1,"div",1)(2,Ol,1,2,"img",2),Ve()),n&2){let e=qt();je$1("user-id",e.user().id),ye(),Ue(e.user().photo?2:1);}}var Yn=(()=>{class n{constructor(){this.user=Xi(void 0),this.is_valid=O(()=>{let e=this.user();if(!e)return  false;let t=(e.name||"").trim(),i=(e.email||"").trim();return t.startsWith("<empty>")||i.startsWith("<empty>")?false:!!(t||i||e.first_name||e.last_name)});}get initials(){let e=this.user();if(!e)return "NA";if(e.first_name&&e.last_name)return `${e.first_name[0]}${e.last_name[0]}`;let t=(e.name||"").replace(/<[^>]*>/g," ").trim();t||(t=(e.email||e.name||"").split("@")[0]);let i=t.replace(/[()[\]\-+=\\/@<>]+/gi," ").split(/\s+/).filter(Boolean);return i.length===0?"NA":i.length>1?`${i[0][0]}${i[i.length-1][0]}`:i[0].slice(0,2)}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["a-user-avatar"]],inputs:{user:[1,"user"]},decls:1,vars:1,consts:[[1,"border-base-100","bg-base-200","flex","h-[2.5em]","w-[2.5em]","items-center","justify-center","overflow-hidden","rounded-full","border-2"],["initials","",1,"text-base-content","uppercase","opacity-60"],["auth","",1,"flex","h-full","w-full","items-center","justify-center","object-cover","object-center",3,"alt","source"]],template:function(t,i){t&1&&Fe(0,Rl,3,2,"div",0),t&2&&Ue(i.is_valid()?0:-1);},dependencies:[Et],encapsulation:2});}}return n})();function Dl(n,o){if(n&1&&(Pe(0,"mat-option",8),Ei(1),Ve()),n&2){let e=o.$implicit;Or("value",e.display_name||e.name),ye(),Fo(" ",e.display_name||e.name," ");}}function Al(n,o){if(n&1&&(Pe(0,"mat-option",8),Ei(1),Ve()),n&2){let e=o.$implicit;Or("value",e?.name||e),ye(),Fo(" ",e.name||e," ");}}function Pl(n,o){if(n&1&&(Pe(0,"div",5)(1,"label"),Ei(2),lC(3,"translate"),Ve(),Pe(4,"mat-form-field",6)(5,"mat-select",7),lC(6,"translate"),Y4(7,Al,2,2,"mat-option",8,z4),Ve(),V8(),Ve()()),n&2){let e=qt();ye(2),iu(e9(3,3,"COMMON.SUPPORT_TYPE")),ye(3),Or("placeholder",e9(6,5,"COMMON.SUPPORT_TYPE"))("formField",e.form.issue_type),G8(),ye(2),W4(e.support_request_types());}}function Nl(n,o){n&1&&(Pe(0,"mat-error",11),Ei(1),lC(2,"translate"),Ve()),n&2&&(ye(),Fo(" ",e9(2,1,"COMMON.SUPPORT_DESCRIPTION_REQUIRED")," "));}function Fl(n,o){if(n&1&&(Pe(0,"div",12)(1,"label",10),Ei(2),lC(3,"translate"),Ve(),Wt(4,"image-list-field",14),V8(),Ve()),n&2){let e=qt();ye(2),iu(e9(3,2,"COMMON.SUPPORT_IMAGES")),ye(2),Or("formField",e.form.images),G8();}}var Na=(()=>{class n{constructor(){this._dialog_ref=m(ET),this._org=m(gT),this._settings=m(ta),this._support_email=this._settings.signal("support_email","support@place.tech"),this._support_issue_types=this._settings.signal("support_issue_types",[]),this._allow_images=this._settings.signal("allow_support_ticket_images",false),this.loading=R(false),this.model=R({name:"",email:"",location:"",description:"",issue_type:"",images:[]}),this.form=lue(this.model,e=>{Hnt(e.name),Hnt(e.email),Hnt(e.description);}),this.desc_error=R(false),this.support_email=this._support_email,this.support_request_types=this._support_issue_types,this.allow_images=this._allow_images,this.buildings=this._org.building_list;}ngOnInit(){let e=ao();e&&this.model.update(t=>m$1(l({},t),{name:e.name,email:e.email})),this._org.building&&this.model.update(t=>m$1(l({},t),{location:this._org.building.display_name||this._org.building.name}));}async submit(){if(this.loading.set(true),this.form().markAsTouched(),this._updateDescError(),this.form().valid()){let e=this._org.module("smtp","Mailer");if(!e)return l2(_r("COMMON.SUPPORT_NO_MAILER"));let{name:t,email:i,location:r,description:d,images:x,issue_type:O}=this.model(),X=this.support_request_types().find(_e=>_e.name===O)?.email||this.support_email(),oe=_r("COMMON.SUPPORT_MAIL_HEADER",{issue_type:O?" - "+O:""});await e.execute("send_mail",[X,oe,`${t}
${i}

${r}

${d.replace(/<[^>]+>/g,"")}

${x.join(`
`)}`,`<p>${t}</p><p>${i}</p><p>${r}</p><p>${d}</p>${x.join("<br>")}`,[],[],[],[],null,`${i}`]),this._dialog_ref.close(),this.loading.set(false),yb(_r("COMMON.SUPPORT_SUCCESS"));}}_updateDescError(){this.desc_error.set(this.form.description().invalid()&&this.form.description().touched());}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["support-ticket-modal"]],decls:51,vars:45,consts:[[3,"confirm","heading","loading","confirm_text"],[1,"flex","flex-wrap","items-center","sm:space-x-2"],[1,"flex","flex-1","flex-col"],["appearance","outline"],["matInput","",3,"placeholder","formField"],[1,"flex","flex-col"],["appearance","outline",1,"w-full"],[3,"placeholder","formField"],[3,"value"],[1,""],[1,"mb-4"],[1,"my-2","text-xs"],[1,"pt-4"],[1,"mb-2","text-center","text-xs","italic"],[3,"formField"]],template:function(t,i){t&1&&(Pe(0,"fullscreen-modal-shell",0),lC(1,"translate"),He("confirm",function(){return i.submit()}),Pe(2,"form")(3,"div",1)(4,"div",2)(5,"label"),Ei(6),lC(7,"translate"),Pe(8,"span"),Ei(9,"*"),Ve()(),Pe(10,"mat-form-field",3),Wt(11,"input",4),lC(12,"translate"),V8(),Pe(13,"mat-error"),Ei(14),lC(15,"translate"),Ve()()(),Pe(16,"div",2)(17,"label"),Ei(18),lC(19,"translate"),Pe(20,"span"),Ei(21,"*"),Ve()(),Pe(22,"mat-form-field",3),Wt(23,"input",4),lC(24,"translate"),V8(),Pe(25,"mat-error"),Ei(26),lC(27,"translate"),Ve()()()(),Pe(28,"div",5)(29,"label"),Ei(30),lC(31,"translate"),Ve(),Pe(32,"mat-form-field",6)(33,"mat-select",7),lC(34,"translate"),Y4(35,Dl,2,2,"mat-option",8,z4),Ve(),V8(),Ve()(),Fe(37,Pl,9,7,"div",5),Pe(38,"div",9)(39,"label",10),Ei(40),lC(41,"translate"),Pe(42,"span"),Ei(43,"*"),Ve()(),Wt(44,"rich-text-input",7),lC(45,"translate"),V8(),Fe(46,Nl,3,3,"mat-error",11),Ve(),Fe(47,Fl,5,4,"div",12),Ve(),Pe(48,"div",13),Ei(49),lC(50,"translate"),Ve()()),t&2&&(Or("heading","Raise a support ticket")("loading",i.loading()?"true":"")("confirm_text",e9(1,21,"COMMON.SUBMIT")),ye(6),iu(e9(7,23,"FORM.NAME")),ye(5),Or("placeholder",e9(12,25,"FORM.NAME"))("formField",i.form.name),G8(),ye(3),iu(e9(15,27,"FORM.NAME_REQUIRED")),ye(4),iu(e9(19,29,"FORM.EMAIL")),ye(5),Or("placeholder",e9(24,31,"FORM.EMAIL"))("formField",i.form.email),G8(),ye(3),iu(e9(27,33,"FORM.EMAIL_REQUIRED")),ye(4),iu(e9(31,35,"COMMON.SUPPORT_LOCATION")),ye(3),Or("placeholder",e9(34,37,"COMMON.SUPPORT_LOCATION"))("formField",i.form.location),G8(),ye(2),W4(i.buildings()),ye(2),Ue(i.support_request_types().length?37:-1),ye(3),Fo(" ",e9(41,39,"COMMON.SUPPORT_DESCRIPTION")," "),ye(4),Or("placeholder",e9(45,41,"COMMON.SUPPORT_DESCRIPTION"))("formField",i.form.description),G8(),ye(2),Ue(i.desc_error()?46:-1),ye(),Ue(i.allow_images()?47:-1),ye(2),Fo(" ",e9(50,43,"COMMON.SUPPORT_MSG")," "));},dependencies:[uU,VM,YY,Tde,ktt,xtt,Gnt,Tt,Vl$1,Pa,Da,ii,ti,CY,AQe,jn,unt],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%}
/*# sourceMappingURL=support-ticket-modal.component.css.map */`]});}}return n})();var Vl=["*"],Ll=(n,o)=>o.id;function Bl(n,o){if(n&1&&(Pe(0,"div",4),Ei(1),lC(2,"date"),Ve()),n&2){let e=qt();ye(),Fo(" ",t9(2,1,e.active_time(),e.time_format()+" (z)",e.tz())," ");}}function Ul(n,o){if(n&1&&(Pe(0,"div",13),Ei(1),lC(2,"date"),Ve()),n&2){let e=qt(2);ye(),Fo(" ",t9(2,1,e.force_time(),e.time_format()+" (z)",e.tz())," ");}}function zl(n,o){n&1&&(Pe(0,"icon",14),Ei(1," done "),Ve());}function Gl(n,o){if(n&1){let e=sC();Pe(0,"button",9),He("click",function(){J_(e);let i=qt();return ey(i.setValue(i.force_time().toString()))}),Pe(1,"div",10)(2,"div",11)(3,"div",12),Ei(4),lC(5,"date"),Ve(),Fe(6,Ul,3,5,"div",13),Ve(),Fe(7,zl,2,0,"icon",14),Ve()();}if(n&2){let e=qt();Or("value",e.force_time()),ye(4),Fo(" ",dC(5,4,e.force_time(),e.time_format())," "),ye(2),Ue(e.timezone()&&e.tz()?6:-1),ye(),Ue(e.active_time()===e.force_time()?7:-1);}}function Hl(n,o){if(n&1&&(Pe(0,"div",13),Ei(1),lC(2,"date"),Ve()),n&2){let e=qt().$implicit,t=qt();ye(),Fo(" ",t9(2,1,e.date,t.time_format()+" (z)",t.tz())," ");}}function Wl(n,o){n&1&&(Pe(0,"icon",14),Ei(1," done "),Ve());}function jl(n,o){if(n&1){let e=sC();Pe(0,"button",9),He("click",function(){let i=J_(e).$implicit,r=qt();return ey(r.setValue(i.id))}),Pe(1,"div",10)(2,"div",11)(3,"div",12),Ei(4),lC(5,"date"),Ve(),Fe(6,Hl,3,5,"div",13),Ve(),Fe(7,Wl,2,0,"icon",14),Ve()();}if(n&2){let e=o.$implicit,t=qt();Or("value",e.id),je$1("data-time",e.id),ye(4),eF(" ",dC(5,6,e.date,t.time_format())," ",t.extra_info_fn()(e.date)," "),ye(2),Ue(t.timezone()&&t.tz()?6:-1),ye(),Ue(t.active_time()===e.date?7:-1);}}function ql(n,o){n&1&&(Pe(0,"div",8),Ei(1,"No time options to select"),Ve());}function $l(n,o){n&1&&(Pe(0,"mat-error"),Le(1),Ve());}var Fa=(()=>{class n extends Ws$1{constructor(){super(...arguments),this.step=Xi(15),this.disabled=KDe(void 0),this.no_past_times=Xi(true),this.use_24hr=Xi(false),this.force_time=Xi(void 0),this.no_error=Xi(void 0),this.extra_info_fn=Xi(e=>""),this.from=Xi(An$1(Date.now()).valueOf()),this.range=Xi(void 0),this.min_duration=Xi(0),this.timezone=Xi(""),this.date=R(new Date().valueOf()),this.time=R(ro(new Date,"HH:mm")),this._time_options=R([]),this.show_select=R(false),this.active_time=R(Date.now()),this.no_options=R(false),this._menu_trigger=np(ct),this.time_format=O(()=>this.use_24hr()?"HH : mm":"h : mm a"),this._local_tz=vPe(Intl.DateTimeFormat().resolvedOptions().timeZone),this.tz=O(()=>{let e=this.timezone();if(!e)return "";let t=vPe(e);return t===this._local_tz?"":t});}ngOnInit(){this.show_select.set(true),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions(),this.timeout("hide",()=>this.show_select.set(false));let e=this.timezone()||void 0;this.active_time.set(this._time_options().find(t=>t.id===SPe(this.date(),e))?.date||this.active_time());}ngOnChanges(e){(e.no_past_times||e.step||e.from||e.range||e.min_duration)&&(this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions());}ngAfterViewInit(){let e=this._menu_trigger();e&&this.subscription("menu_opened",e.menuOpened.subscribe(()=>{this._scrollToSelectedTime();}));}_scrollToSelectedTime(){requestAnimationFrame(()=>{if(!this._menu_trigger()?.menu)return;let t=document.querySelector(".mat-mdc-menu-panel");if(!t)return;let i=this.timezone()||void 0,r=this.time()||SPe(new Date,i),d=t.querySelector(`[data-time="${r}"]`);if(!d&&this._time_options().length){let x=this._timeToMinutes(r),O=this._time_options()[0],X=1/0;for(let oe of this._time_options()){let _e=this._timeToMinutes(oe.id),ye=Math.abs(_e-x);ye<X&&(X=ye,O=oe);}d=t.querySelector(`[data-time="${O.id}"]`);}if(d){if(typeof d.scrollIntoView!="function")return;d.scrollIntoView({block:"center",behavior:"instant"});}});}_timeToMinutes(e){let[t,i]=e.split(":").map(Number);return t*60+i}time_options(){let e=this.timezone()||void 0,t=(this.time()||"00:00").split(":"),i=TPe(this.date(),+t[0],+t[1],e),{minutes:r}=wte(i,e),d=SPe(i,e),x=[...this._time_options()];return r%this.step()!==0&&this._isWithinRange(i)&&!x.find(O=>O.id===d)&&(x.push({date:i,id:d}),x.sort((O,X)=>`${O.id}`.localeCompare(`${X.id}`))),x}setValue(e){this.time.set(e);let t=this.timezone()||void 0;if(this._onChange){let x=(this.time()||"00:00").split(":"),O=TPe(this.date(),+x[0],+x[1],t);xPe(),this._onChange(O);}let i=this.force_time()||this.time(),r=(typeof i=="string"?i:SPe(i,t)).split(":"),d=TPe(this.date(),+r[0],+r[1],t);this.active_time.set(this._time_options().find(x=>x.id===(typeof i=="string"?i:SPe(i,t)))?.date||d);}writeValue(e){this.date.set(e||this.date());let t=this.timezone()||void 0,i=Rl$1(this.date());i=wl$1(i,{nearestTo:5}),this.time.set(SPe(i,t)),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions();let r=this.force_time(),d=r?SPe(r,t):this.time();this.active_time.set(this._time_options().find(x=>x.id===d)?.date||i.valueOf());}setDisabledState(e){this.disabled.set(e),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times()||e,this.step())),this._updateNoOptions();}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouch=e;}_updateNoOptions(){this.no_options.set(!this.disabled()&&(!this._time_options()||this._time_options().length===0)&&!this.force_time());}generateAvailableTimes(e,t,i=15){let r=t?this.from():Math.max(this.from(),Date.now()),d=[],x=this.range(),O=this.timezone()||void 0,X=O?Ko(e,O):An$1(e).valueOf(),oe=O?Zo(e,O):Ai(e).valueOf(),_e=this.min_duration()||0,ye=x?x.start*60:void 0,dt=x?x.end*60:void 0,it=dt!=null&&_e>0?dt-_e:dt,si=Math.max(X,r,ye!=null?X+ye*60*1e3:X),B=Math.min(oe,it!=null?X+it*60*1e3:oe);if(si>B)return d;let J=this._roundUpToStep(si,i),Fe=this._roundDownToStep(B,i);for(;!Wa$1(J,Fe);)d.push({date:J.valueOf(),id:SPe(J,O)}),J=_t(J,i);return d}_isWithinRange(e){if(Qr(e,this.from()))return  false;let t=this.range();if(!t)return  true;let i=t.start*60,r=t.end*60,d=this.min_duration()||0,x=d>0?r-d:r,O=this.timezone()||void 0,{hours:X,minutes:oe}=wte(e,O),_e=X*60+oe;return !(_e<i||_e>x)}_roundUpToStep(e,t){let i=wl$1(e,{nearestTo:t});return Qr(i,e)&&(i=_t(i,t)),Rl$1(i)}_roundDownToStep(e,t){let i=wl$1(e,{nearestTo:t});return Wa$1(i,e)&&(i=_t(i,-t)),Rl$1(i)}static{this.\u0275fac=(()=>{let e;return function(i){return (e||(e=Et$1(n)))(i||n)}})();}static{this.\u0275cmp=Ie({type:n,selectors:[["a-time-field"],["time-field"]],viewQuery:function(t,i){t&1&&nE(i._menu_trigger,ct,5),t&2&&rE();},inputs:{step:[1,"step"],disabled:[1,"disabled"],no_past_times:[1,"no_past_times"],use_24hr:[1,"use_24hr"],force_time:[1,"force_time"],no_error:[1,"no_error"],extra_info_fn:[1,"extra_info_fn"],from:[1,"from"],range:[1,"range"],min_duration:[1,"min_duration"],timezone:[1,"timezone"]},outputs:{disabled:"disabledChange"},features:[qe([{provide:jo,useExisting:tn$1(()=>n),multi:true}]),xe,wt],ngContentSelectors:Vl,decls:15,vars:12,consts:[["menu","matMenu"],["time-field","","matRipple","",1,"border-neutral","flex","h-12","w-full","items-center","justify-between","rounded-sm","border","px-2",3,"disabled","matMenuTriggerFor"],[1,"flex","w-1/2","flex-1","flex-col","px-2","text-left","leading-tight"],[1,"truncate"],[1,"truncate","text-xs","opacity-30"],[1,"text-2xl"],[1,"max-h-60","min-w-[18rem]"],["mat-menu-item","",1,"text-left",3,"value"],["mat-menu-item","","disabled",""],["mat-menu-item","",1,"text-left",3,"click","value"],[1,"flex","items-center","justify-between"],[1,"flex","flex-col","leading-tight"],[1,""],[1,"text-xs","opacity-30"],[1,"ml-2","text-2xl"]],template:function(t,i){if(t&1&&(mn$1(),Pe(0,"button",1)(1,"div",2)(2,"div",3),Ei(3),lC(4,"date"),Ve(),Fe(5,Bl,3,5,"div",4),Ve(),Pe(6,"icon",5),Ei(7,"arrow_drop_down"),Ve()(),Pe(8,"mat-menu",6,0),Fe(10,Gl,8,7,"button",7),Y4(11,jl,8,9,"button",7,Ll,false,ql,2,0,"div",8),Ve(),Fe(14,$l,2,0,"mat-error")),t&2){let r=iE(9);Oe("opacity-30",i.disabled()||i.no_options()),Or("disabled",i.disabled()||i.no_options())("matMenuTriggerFor",r),ye(3),Fo(" ",dC(4,9,i.active_time(),i.time_format())," "),ye(2),Ue(i.timezone()&&i.tz()?5:-1),ye(5),Ue(i.force_time()?10:-1),ye(),W4(i.time_options()),ye(3),Ue(i.no_error()?-1:14);}},dependencies:[uU,ei,tt,lt,ct,VM,Tde,Det,A7],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%}
/*# sourceMappingURL=time-field.component.css.map */`]});}}return n})();function Xl(n,o){n&1&&(Pe(0,"button",2)(1,"icon"),Ei(2,"close"),Ve()());}function Yl(n,o){if(n&1){let e=sC();Pe(0,"div",7)(1,"div",11),Ei(2),lC(3,"date"),Ve(),Pe(4,"mat-checkbox",12),He("ngModelChange",function(i){let r=J_(e).$implicit,d=qt(2);return d.setWeekdayEnabled(r.getDay(),i),ey(i&&d.initialiseDay(r.getDay()))}),Ve(),V8(),Ve();}if(n&2){let e=o.$implicit,t=qt(2);ye(2),Fo(" ",dC(3,2,e,"EEE")," "),ye(2),Or("ngModel",t.weekdays_enabled()[e.getDay()]),G8();}}function Kl(n,o){if(n&1&&(Pe(0,"mat-option",20),Ei(1),Ve()),n&2){let e=o.$implicit;Or("value",e.id),ye(),Fo(" ",e.name," ");}}function Ql(n,o){if(n&1){let e=sC();Pe(0,"button",23),He("click",function(){J_(e);let i=qt().$index,r=qt(2).$implicit,d=qt(3);return ey(d.addBlock(d.settings()[r.getDay()],i))}),Pe(1,"icon"),Ei(2,"add"),Ve()();}}function Zl(n,o){if(n&1){let e=sC();Pe(0,"button",24),He("click",function(){J_(e);let i=qt().$index,r=qt(2).$implicit,d=qt(3);return ey(d.removeBlock(d.settings()[r.getDay()],i))}),Pe(1,"icon"),Ei(2,"delete"),Ve()();}}function Jl(n,o){if(n&1){let e=sC();Pe(0,"div",16)(1,"a-time-field",18),He("ngModelChange",function(i){let r=J_(e).$implicit,d=qt(2).$implicit,x=qt(3);return ey(x.setStartTime(r,d.getDay(),i))}),Ve(),V8(),Pe(2,"a-time-field",18),He("ngModelChange",function(i){let r=J_(e).$implicit,d=qt(2).$implicit,x=qt(3);return ey(x.setEndTime(r,d.getDay(),i))}),Ve(),V8(),Pe(3,"mat-form-field",19)(4,"mat-select",12),iF("ngModelChange",function(i){let r=J_(e).$implicit;return x6(r.location,i)||(r.location=i),ey(i)}),Y4(5,Kl,2,2,"mat-option",20,z4),Ve(),V8(),Ve(),Fe(7,Ql,3,0,"button",21),Fe(8,Zl,3,0,"button",22),Ve();}if(n&2){let e=o.$implicit,t=o.$index,i=qt(2).$implicit,r=qt(3);ye(),Or("ngModel",r.timeFrom(e.start_time))("from",r.timeFrom((t>0?r.settings()[i.getDay()].blocks[t-1]?.end_time:0)||0))("no_error",true),G8(),ye(),Or("ngModel",r.timeFrom(e.end_time))("from",r.timeFrom(e.start_time+.25))("no_error",true),G8(),ye(2),rF("ngModel",e.location),G8(),ye(),W4(r.options()),ye(2),Ue(t===0?7:-1),ye(),Ue(t!==0?8:-1);}}function ec(n,o){if(n&1&&(Pe(0,"div",14)(1,"div",15),Y4(2,Jl,9,9,"div",16,z4),Ve(),Pe(4,"h3",17),Ei(5),lC(6,"date"),Ve()()),n&2){let e=qt().$implicit,t=qt(3);ye(2),W4(t.settings()[e.getDay()].blocks),ye(3),Fo(" ",dC(6,1,e,"EEEE")," ");}}function tc(n,o){if(n&1&&Fe(0,ec,7,4,"div",14),n&2){let e=o.$implicit,t=qt(3);Ue(t.weekdays_enabled()[e.getDay()]?0:-1);}}function ic(n,o){if(n&1&&(Pe(0,"div",9),Y4(1,tc,1,1,null,null,z4),Pe(3,"h3",13),Ei(4),lC(5,"translate"),Ve()()),n&2){let e=qt(2);ye(),W4(e.days),ye(3),Fo(" ",e9(5,1,"COMMON.WORK_HOURS")," ");}}function nc(n,o){n&1&&(Pe(0,"div",10),Wt(1,"img",25),Pe(2,"p",26),Ei(3),lC(4,"translate"),Ve()()),n&2&&(ye(3),Fo(" ",e9(4,1,"COMMON.WORK_SETTINGS_EMPTY")," "));}function oc(n,o){if(n&1&&(Pe(0,"main",3)(1,"div",6),Y4(2,Yl,5,5,"div",7,z4),Pe(4,"h3",8),Ei(5),lC(6,"translate"),Ve()(),Fe(7,ic,6,3,"div",9)(8,nc,5,3,"div",10),Ve()),n&2){let e=qt();ye(2),W4(e.days),ye(3),Fo(" ",e9(6,2,"COMMON.WORK_DAYS")," "),ye(2),Ue(e.has_working_days()?7:8);}}function rc(n,o){n&1&&(Pe(0,"div",4),Wt(1,"mat-spinner",27),Pe(2,"p",26),Ei(3),lC(4,"translate"),Ve()()),n&2&&(ye(),Or("diameter",32),ye(2),Fo(" ",e9(4,2,"COMMON.WORK_SETTINGS_SAVE")," "));}function ac(n,o){if(n&1){let e=sC();Pe(0,"footer",5)(1,"button",28),He("click",function(){J_(e);let i=qt();return ey(i.saveChanges())}),Ei(2),lC(3,"translate"),Ve()();}n&2&&(ye(2),Fo(" ",e9(3,1,"COMMON.SAVE")," "));}var Kn=(()=>{class n{constructor(){this._data=m(Zce),this._dialog_ref=m(ET),this.options=R([]),this.option=R(""),this.settings=R([]),this.weekdays_enabled=R({}),this.changed=R(false),this.loading=R(false),this.available_weekdays=R([]),this.days=new Array(7).fill(0).map((e,t)=>kn$1(zs$1(kn$1(Date.now(),30)),t)),this.has_working_days=O(()=>{let e=this.weekdays_enabled();return Object.keys(e).some(t=>e[t])}),this.option_name=O(()=>this.options().find(e=>e.id===this.option())?.name||""),this.now=O(()=>Rl$1(Date.now()).getTime());}ngOnInit(){let e=ao(),i=[...((this._data?.local?this._data.preferences:e.work_preferences)||[]).map(x=>m$1(l({},x),{blocks:[...x?.blocks||[]]}))],r={};for(let x of i)x.blocks.length&&(r[x.day_of_week]=true);this.settings.set(i),this.weekdays_enabled.set(r);let d=[{id:"wfo",name:_r("COMMON.WORK_OFFICE"),icon:"business"},{id:"wfh",name:_r("COMMON.WORK_HOME"),icon:"home"},{id:"aol",name:_r("COMMON.WORK_LEAVE"),icon:"event_busy"}];this.options.set(d),this.option.set(d[0].id);}timeFrom(e){return Rl$1(wi(kn$1(new Date,1),{hours:Math.floor(e),minutes:e*60%60})).getTime()}fromTime(e){let t=new Date(e);return t.getHours()+t.getMinutes()/60}initialiseDay(e){let t=this.settings();t[e]||(t[e]={day_of_week:e,blocks:[]}),t[e].blocks||(t[e].blocks=[]),t[e].blocks.length===0&&this.addBlock(t[e],0),this.settings.set([...t]);}addBlock(e,t){e.blocks.splice(t+1,0,{start_time:9,end_time:17,location:"wfo"}),this.cleanupBlocks(e),this.settings.update(i=>[...i]);}removeBlock(e,t){e.blocks.length<=1||(e.blocks.splice(t,1),this.settings.update(i=>[...i]));}setEndTime(e,t,i){setTimeout(()=>{e.end_time=this.fromTime(i),this.cleanupBlocks(this.settings()[t]),this.settings.update(r=>[...r]);},50);}setStartTime(e,t,i){setTimeout(()=>{e.start_time=this.fromTime(i),this.cleanupBlocks(this.settings()[t]),this.settings.update(r=>[...r]);},50);}cleanupBlocks(e){if(e?.blocks?.length)for(let t=0;t<e.blocks.length;t++){let i=e.blocks[t];t>0&&i.start_time<e.blocks[t-1].end_time&&(i.start_time=e.blocks[t-1].end_time),i.end_time<=i.start_time&&(i.end_time=i.start_time+1);}}async saveChanges(e=true){this.loading.set(true),this._dialog_ref.disableClose=true;let t=new Array(7).fill(0).map((i,r)=>({day_of_week:r,blocks:[]}));for(let i of this.days){let r=i.getDay();this.weekdays_enabled()[r]&&(t[r]={day_of_week:r,blocks:this.settings()[r].blocks});}if(!this._data?.local){let i=await Uw("current");await LH(i.id,m$1(l({},i),{groups:i.groups.filter(r=>!r.startsWith("placeos_")),work_preferences:t})).catch(r=>{throw this.loading.set(false),this._dialog_ref.disableClose=false,l2("Unable to save user work preferences."),r});}this.loading.set(false),this._dialog_ref.disableClose=false,e&&(this._data?.local||N2(),this._dialog_ref.close(t));}setWeekdayEnabled(e,t){this.weekdays_enabled.update(i=>m$1(l({},i),{[e]:t}));}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["wfh-settings-modal"]],decls:8,vars:6,consts:[[1,"bg-base-200","sticky","top-0","z-10","m-2","w-[calc(100%-1rem)]","rounded-sm","border-none","p-2"],[1,"px-2","text-xl","font-medium"],["icon","","matRipple","","mat-dialog-close","",1,"bg-base-200"],[1,"relative","flex","max-h-[calc(100vh-9rem)]","w-160","max-w-full","flex-col","space-y-2","overflow-x-hidden","overflow-y-auto","rounded-sm","px-2","py-4","sm:max-h-[65vh]","sm:p-4"],["loading","",1,"bg-base-100","relative","flex","h-72","w-[24rem]","flex-col","items-center","justify-center","space-y-2","overflow-hidden","rounded-sm","text-center"],[1,"border-base-200","flex","justify-end","border-t","px-4","py-2"],[1,"border-base-300","relative","mb-4","flex","w-full","items-center","justify-between","space-x-2","rounded-sm","border","p-2"],[1,"flex","flex-1","flex-col","items-center","pt-2"],[1,"bg-base-100","absolute","top-0","left-2","-translate-y-1/2","px-2"],[1,"border-base-300","relative","flex","w-full","flex-col","items-center","justify-between","space-y-4","rounded-sm","border","px-2","pt-6","pb-4","sm:px-4"],[1,"flex","flex-col","items-center","justify-center","space-y-4","px-8","py-16"],[1,"text-xs","font-bold","uppercase"],[3,"ngModelChange","ngModel"],[1,"bg-base-100","absolute","top-0","left-2","m-0!","-translate-y-1/2","px-2"],[1,"border-base-200","relative","flex","w-full","items-center","justify-between","space-x-2","rounded-sm","border","p-2"],[1,"w-1/2","flex-1","space-y-2","pt-2"],[1,"flex","items-center","space-x-2"],[1,"border-base-200","bg-base-100","bg-opacity-50","absolute","top-0","left-2","-translate-y-1/2","rounded-sm","border","px-2","text-sm","font-medium"],[1,"w-1/4","flex-1",3,"ngModelChange","ngModel","from","no_error"],["appearance","outline",1,"no-subscript","w-1/4","flex-1"],[3,"value"],["icon","","matRipple","",1,"border-base-400","h-12","w-12","rounded-sm","border"],["icon","","matRipple","",1,"border-error","text-error","h-12","w-12","rounded-sm","border"],["icon","","matRipple","",1,"border-base-400","h-12","w-12","rounded-sm","border",3,"click"],["icon","","matRipple","",1,"border-error","text-error","h-12","w-12","rounded-sm","border",3,"click"],["src","assets/icons/no-results.svg",1,"m-auto"],[1,"opacity-30"],[3,"diameter"],["btn","","matRipple","",1,"w-48",3,"click"]],template:function(t,i){t&1&&(Pe(0,"header",0)(1,"h2",1),Ei(2),lC(3,"translate"),Ve(),Fe(4,Xl,3,0,"button",2),Ve(),Fe(5,oc,9,4,"main",3)(6,rc,5,4,"div",4),Fe(7,ac,4,3,"footer",5)),t&2&&(ye(2),Fo(" ",e9(3,4,"COMMON.WORK_LOCATION_SETTINGS")," "),ye(2),Ue(i.loading()?-1:4),ye(),Ue(i.loading()?6:5),ye(2),Ue(i.loading()?-1:7));},dependencies:[uU,AQe,IQe,Vl$1,V0,VM,YY,ii,ti,CY,Fa,Wn,bi,hMe,aMe,wJ,Det,Tt,Zt,A7,unt],encapsulation:2});}}return n})();var sc=["knob"],lc=["valueIndicatorContainer"];function cc(n,o){if(n&1&&(Pe(0,"div",2,1)(2,"div",5)(3,"span",6),Ei(4),Ve()()()),n&2){let e=qt();ye(4),iu(e.valueIndicatorText);}}var dc=["trackActive"],mc=["*"];function pc(n,o){if(n&1&&Wt(0,"div"),n&2){let e=o.$implicit,t=o.$index,i=qt(3);Fs$1(e===0?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"),cC("transform",i._calcTickMarkTransform(t));}}function uc(n,o){if(n&1&&Y4(0,pc,1,4,"div",8,j4),n&2){let e=qt(2);W4(e._tickMarks);}}function _c(n,o){if(n&1&&(Pe(0,"div",6,1),Fe(2,uc,2,0),Ve()),n&2){let e=qt();ye(2),Ue(e._cachedWidth?2:-1);}}function hc(n,o){if(n&1&&Wt(0,"mat-slider-visual-thumb",7),n&2){let e=qt();Or("discrete",e.discrete)("thumbPosition",1)("valueIndicatorText",e.startValueIndicatorText);}}var D=(function(n){return n[n.START=1]="START",n[n.END=2]="END",n})(D||{}),ai=(function(n){return n[n.ACTIVE=0]="ACTIVE",n[n.INACTIVE=1]="INACTIVE",n})(ai||{}),Eo=new v("_MatSlider"),Va=new v("_MatSliderThumb"),fc=new v("_MatSliderRangeThumb"),La=new v("_MatSliderVisualThumb");var gc=(()=>{class n{_cdr=m(St);_ngZone=m(G);_slider=m(Eo);_renderer=m($e);_listenerCleanups;discrete=false;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=false;_isActive=false;_isValueIndicatorVisible=false;_hostElement=m(j).nativeElement;_platform=m(ze);ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let t=this._sliderInputEl,i=this._renderer;this._listenerCleanups=[i.listen(t,"pointermove",this._onPointerMove),i.listen(t,"pointerdown",this._onDragStart),i.listen(t,"pointerup",this._onDragEnd),i.listen(t,"pointerleave",this._onMouseLeave),i.listen(t,"focus",this._onFocus),i.listen(t,"blur",this._onBlur)];}));}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e());}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let t=this._hostElement.getBoundingClientRect(),i=this._slider._isCursorOnSliderThumb(e,t);this._isHovered=i,i?this._showHoverRipple():this._hideRipple(this._hoverRippleRef);};_onMouseLeave=()=>{this._isHovered=false,this._hideRipple(this._hoverRippleRef);};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add("mdc-slider__thumb--focused");};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove("mdc-slider__thumb--focused");};_onDragStart=e=>{e.button===0&&(this._isActive=true,this._showActiveRipple());};_onDragEnd=()=>{this._isActive=false,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple();};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple"));}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},true),this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple"));}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple"));}_isShowingRipple(e){return e?.state===Xr.FADING_IN||e?.state===Xr.VISIBLE}_showRipple(e,t){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===D.START?D.END:D.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!t)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:true,persistent:true})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let t=this._getSibling();t._isShowingAnyRipple()||(this._hideValueIndicator(),t._hideValueIndicator());}_showValueIndicator(){this._hostElement.classList.add("mdc-slider__thumb--with-indicator");}_hideValueIndicator(){this._hostElement.classList.remove("mdc-slider__thumb--with-indicator");}_getSibling(){return this._slider._getThumb(this.thumbPosition===D.START?D.END:D.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ie({type:n,selectors:[["mat-slider-visual-thumb"]],viewQuery:function(t,i){if(t&1&&Mn$1(V0,5)(sc,5)(lc,5),t&2){let r;Ae(r=De())&&(i._ripple=r.first),Ae(r=De())&&(i._knob=r.first),Ae(r=De())&&(i._valueIndicatorContainer=r.first);}},hostAttrs:[1,"mdc-slider__thumb","mat-mdc-slider-visual-thumb"],inputs:{discrete:"discrete",thumbPosition:"thumbPosition",valueIndicatorText:"valueIndicatorText"},features:[qe([{provide:La,useExisting:n}])],decls:4,vars:2,consts:[["knob",""],["valueIndicatorContainer",""],[1,"mdc-slider__value-indicator-container"],[1,"mdc-slider__thumb-knob"],["matRipple","",1,"mat-focus-indicator",3,"matRippleDisabled"],[1,"mdc-slider__value-indicator"],[1,"mdc-slider__value-indicator-text"]],template:function(t,i){t&1&&(Fe(0,cc,5,1,"div",2),Wt(1,"div",3,0)(3,"div",4)),t&2&&(Ue(i.discrete?0:-1),ye(3),Or("matRippleDisabled",true));},dependencies:[V0],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
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
`],encapsulation:2})}return n})(),Qn=(()=>{class n{_ngZone=m(G);_cdr=m(St);_elementRef=m(j);_dir=m(vr,{optional:true});_globalRippleOptions=m(cf,{optional:true});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let t=this._getInput(D.END),i=this._getInput(D.START);t&&(t.disabled=this._disabled),i&&(i.disabled=this._disabled);}_disabled=false;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs();}_discrete=false;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI());}_showTickMarks=false;get min(){return this._min}set min(e){let t=e==null||isNaN(e)?this._min:e;this._min!==t&&this._updateMin(t);}_min=0;color;disableRipple=false;_updateMin(e){let t=this._min;this._min=e,this._isRange?this._updateMinRange({old:t,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange();}_updateMinRange(e){let t=this._getInput(D.END),i=this._getInput(D.START),r=t.value,d=i.value;i.min=e.new,t.min=Math.max(e.new,i.value),i.max=Math.min(t.max,t.value),i._updateWidthInactive(),t._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(t,i):this._onTranslateXChangeBySideEffect(i,t),r!==t.value&&this._onValueChange(t),d!==i.value&&this._onValueChange(i);}_updateMinNonRange(e){let t=this._getInput(D.END);if(t){let i=t.value;t.min=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t);}}get max(){return this._max}set max(e){let t=e==null||isNaN(e)?this._max:e;this._max!==t&&this._updateMax(t);}_max=100;_updateMax(e){let t=this._max;this._max=e,this._isRange?this._updateMaxRange({old:t,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange();}_updateMaxRange(e){let t=this._getInput(D.END),i=this._getInput(D.START),r=t.value,d=i.value;t.max=e.new,i.max=Math.min(e.new,t.value),t.min=i.value,t._updateWidthInactive(),i._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(i,t):this._onTranslateXChangeBySideEffect(t,i),r!==t.value&&this._onValueChange(t),d!==i.value&&this._onValueChange(i);}_updateMaxNonRange(e){let t=this._getInput(D.END);if(t){let i=t.value;t.max=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t);}}get step(){return this._step}set step(e){let t=isNaN(e)?this._step:e;this._step!==t&&this._updateStep(t);}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange();}_updateStepRange(){let e=this._getInput(D.END),t=this._getInput(D.START),i=e.value,r=t.value,d=t.value;e.min=this._min,t.max=this._max,e.step=this._step,t.step=this._step,this._platform.SAFARI&&(e.value=e.value,t.value=t.value),e.min=Math.max(this._min,t.value),t.max=Math.min(this._max,e.value),t._updateWidthInactive(),e._updateWidthInactive(),e.value<d?this._onTranslateXChangeBySideEffect(t,e):this._onTranslateXChangeBySideEffect(e,t),i!==e.value&&this._onValueChange(e),r!==t.value&&this._onValueChange(t);}_updateStepNonRange(){let e=this._getInput(D.END);if(e){let t=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),t!==e.value&&this._onValueChange(e);}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=Xt();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText="";endValueIndicatorText="";_endThumbTransform;_startThumbTransform;_isRange=false;_isRtl=O(()=>this._dir?.valueSignal()==="rtl");_hasViewInitialized=false;_tickMarkTrackWidth=0;_hasAnimation=false;_resizeTimer=null;_platform=m(ze);constructor(){m(yn$1).load(Bl$1);let e=this._isRtl();pE(()=>{let t=this._isRtl();t!==e&&(e=t,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI());});}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(D.END),t=this._getInput(D.START);this._isRange=!!e&&!!t,this._cdr.detectChanges();let i=this._getThumb(D.END);this._rippleRadius=i._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,t):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges();}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=true,e._updateThumbUIByValue();}_initUIRange(e,t){e.initProps(),e.initUI(),t.initProps(),t.initUI(),e._updateMinMax(),t._updateMinMax(),e._updateStaticStyles(),t._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=true,e._updateThumbUIByValue(),t._updateThumbUIByValue();}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null;}_onDirChangeRange(){let e=this._getInput(D.END),t=this._getInput(D.START);e._setIsLeftThumb(),t._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),t.translateX=t._calcTranslateXByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateWidthInactive(),t._updateWidthInactive(),e._updateThumbUIByValue(),t._updateThumbUIByValue();}_onDirChangeNonRange(){this._getInput(D.END)._updateThumbUIByValue();}_observeHostResize(){typeof ResizeObserver>"u"||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize());}),this._resizeObserver.observe(this._elementRef.nativeElement);});}_isActive(){return this._getThumb(D.START)._isActive||this._getThumb(D.END)._isActive}_getValue(e=D.END){let t=this._getInput(e);return t?t.value:this.min}_skipUpdate(){return !!(this._getInput(D.START)?._skipUIUpdate||this._getInput(D.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left;}_setTrackActiveStyles(e){let t=this._trackActive.nativeElement.style;t.left=e.left,t.right=e.right,t.transformOrigin=e.transformOrigin,t.transform=e.transform;}_calcTickMarkTransform(e){let t=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return `translateX(${this._isRtl()?this._cachedWidth-6-t:t}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e));}_onTranslateXChangeBySideEffect(e,t){this._hasViewInitialized&&(e._updateThumbUIByValue(),t._updateThumbUIByValue());}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges());}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck());}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(D.END),t=this._getInput(D.START);e._updateThumbUIByValue(),t._updateThumbUIByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateMinMax(),t._updateMinMax(),e._updateWidthInactive(),t._updateWidthInactive();}else {let e=this._getInput(D.END);e&&e._updateThumbUIByValue();}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges();}}_thumbsOverlap=false;_areThumbsOverlapping(){let e=this._getInput(D.START),t=this._getInput(D.END);return !e||!t?false:t.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let t=e.getSibling(),i=this._getThumb(e.thumbPosition);this._getThumb(t.thumbPosition)._hostElement.classList.remove("mdc-slider__thumb--top"),i._hostElement.classList.toggle("mdc-slider__thumb--top",this._thumbsOverlap);}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e));}_updateThumbUI(e){if(this._skipUpdate())return;let t=this._getThumb(e.thumbPosition===D.END?D.END:D.START);t._hostElement.style.transform=`translateX(${e.translateX}px)`;}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let t=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(t):e._hostElement.setAttribute("aria-valuetext",t),this.discrete){e.thumbPosition===D.START?this.startValueIndicatorText=t:this.endValueIndicatorText=t;let i=this._getThumb(e.thumbPosition);t.length<3?i._hostElement.classList.add("mdc-slider__thumb--short-value"):i._hostElement.classList.remove("mdc-slider__thumb--short-value");}}_updateValueIndicatorUIs(){let e=this._getInput(D.END),t=this._getInput(D.START);e&&this._updateValueIndicatorUI(e),t&&this._updateValueIndicatorUI(t);}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,i=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*i;}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e));}_updateTrackUIRange(e){let t=e.getSibling();if(!t||!this._cachedWidth)return;let i=Math.abs(t.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:"auto",right:`${this._cachedWidth-t.translateX}px`,transformOrigin:"right",transform:`scaleX(${i})`}):this._setTrackActiveStyles({left:`${t.translateX}px`,right:"auto",transformOrigin:"left",transform:`scaleX(${i})`});}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:"auto",right:"0px",transformOrigin:"right",transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:"0px",right:"auto",transformOrigin:"left",transform:`scaleX(${e.fillPercentage})`});}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e);}_updateTickMarkUINonRange(e){let t=this._getValue(),i=Math.max(Math.round((t-this.min)/e),0)+1,r=Math.max(Math.round((this.max-t)/e),0)-1;this._isRtl()?i++:r++,this._tickMarks=Array(i).fill(ai.ACTIVE).concat(Array(r).fill(ai.INACTIVE));}_updateTickMarkUIRange(e){let t=this._getValue(),i=this._getValue(D.START),r=Math.max(Math.round((i-this.min)/e),0),d=Math.max(Math.round((t-i)/e)+1,0),x=Math.max(Math.round((this.max-t)/e),0);this._tickMarks=Array(r).fill(ai.INACTIVE).concat(Array(d).fill(ai.ACTIVE),Array(x).fill(ai.INACTIVE));}_getInput(e){if(e===D.END&&this._input)return this._input;if(this._inputs?.length)return e===D.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===D.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation",this._hasAnimation);}_isCursorOnSliderThumb(e,t){let i=t.width/2,r=t.x+i,d=t.y+i,x=e.clientX-r,O=e.clientY-d;return Math.pow(x,2)+Math.pow(O,2)<Math.pow(i,2)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ie({type:n,selectors:[["mat-slider"]],contentQueries:function(t,i,r){if(t&1&&Qi(r,Va,5)(r,fc,4),t&2){let d;Ae(d=De())&&(i._input=d.first),Ae(d=De())&&(i._inputs=d);}},viewQuery:function(t,i){if(t&1&&Mn$1(dc,5)(La,5),t&2){let r;Ae(r=De())&&(i._trackActive=r.first),Ae(r=De())&&(i._thumbs=r);}},hostAttrs:[1,"mat-mdc-slider","mdc-slider"],hostVars:12,hostBindings:function(t,i){t&2&&(Fs$1("mat-"+(i.color||"primary")),Oe("mdc-slider--range",i._isRange)("mdc-slider--disabled",i.disabled)("mdc-slider--discrete",i.discrete)("mdc-slider--tick-marks",i.showTickMarks)("_mat-animation-noopable",i._noopAnimations));},inputs:{disabled:[2,"disabled","disabled",ve],discrete:[2,"discrete","discrete",ve],showTickMarks:[2,"showTickMarks","showTickMarks",ve],min:[2,"min","min",ou],color:"color",disableRipple:[2,"disableRipple","disableRipple",ve],max:[2,"max","max",ou],step:[2,"step","step",ou],displayWith:"displayWith"},exportAs:["matSlider"],features:[qe([{provide:Eo,useExisting:n}])],ngContentSelectors:mc,decls:9,vars:5,consts:[["trackActive",""],["tickMarkContainer",""],[1,"mdc-slider__track"],[1,"mdc-slider__track--inactive"],[1,"mdc-slider__track--active"],[1,"mdc-slider__track--active_fill"],[1,"mdc-slider__tick-marks"],[3,"discrete","thumbPosition","valueIndicatorText"],[3,"class","transform"]],template:function(t,i){t&1&&(mn$1(),Le(0),Pe(1,"div",2),Wt(2,"div",3),Pe(3,"div",4),Wt(4,"div",5,0),Ve(),Fe(6,_c,3,1,"div",6),Ve(),Fe(7,hc,1,3,"mat-slider-visual-thumb",7),Wt(8,"mat-slider-visual-thumb",7)),t&2&&(ye(6),Ue(i.showTickMarks?6:-1),ye(),Ue(i._isRange?7:-1),ye(),Or("discrete",i.discrete)("thumbPosition",2)("valueIndicatorText",i.endValueIndicatorText));},dependencies:[gc],styles:[`.mdc-slider__track {
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
`],encapsulation:2})}return n})();var bc={provide:jo,useExisting:tn$1(()=>ki),multi:true};var ki=(()=>{class n{_ngZone=m(G);_elementRef=m(j);_cdr=m(St);_slider=m(Eo);_platform=m(ze);_listenerCleanups;get value(){return ou(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let t=e+"";if(!this._hasSetInitialValue){this._initialValue=t;return}this._isActive||this._setValue(t);}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck();}valueChange=new re;dragStart=new re;dragEnd=new re;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e;}_translateX;thumbPosition=D.END;get min(){return ou(this._hostElement.min,0)}set min(e){this._hostElement.min=e+"",this._cdr.detectChanges();}get max(){return ou(this._hostElement.max,0)}set max(e){this._hostElement.max=e+"",this._cdr.detectChanges();}get step(){return ou(this._hostElement.step,0)}set step(e){this._hostElement.step=e+"",this._cdr.detectChanges();}get disabled(){return ve(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled);}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=R("");_knobRadius=8;_tickMarkOffset=3;_isActive=false;_isFocused=false;_setIsFocused(e){this._isFocused=e;}_hasSetInitialValue=false;_initialValue;_formControl;_destroyed=new N;_skipUIUpdate=false;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=false;constructor(){let e=m($e);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,"pointerdown",this._onPointerDown.bind(this)),e.listen(this._hostElement,"pointermove",this._onPointerMove.bind(this)),e.listen(this._hostElement,"pointerup",this._onPointerUp.bind(this))];});}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete();}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=true),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue();}initUI(){this._updateThumbUIByValue();}_initValue(){this._hasSetInitialValue=true,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges());}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(false),this._onTouchedFn();}_onFocus(){this._slider._setTransition(false),this._slider._updateTrackUI(this),this._setIsFocused(true);}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:true});}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:true}),this._slider._onValueChange(this);}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled;}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let t=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=t,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=true,this._setIsFocused(true),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:true}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}));}}_handleValueCorrection(e){this._skipUIUpdate=true,setTimeout(()=>{this._skipUIUpdate=false,this._fixValue(e);},0);}_fixValue(e){let t=e.clientX-this._slider._cachedLeft,i=this._slider._cachedWidth,r=this._slider.step===0?1:this._slider.step,d=Math.floor((this._slider.max-this._slider.min)/r),x=this._slider._isRtl()?1-t/i:t/i,X=Math.round(x*d)/d*(this._slider.max-this._slider.min)+this._slider.min,oe=Math.round(X/r)*r,_e=this.value;if(oe===_e){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=oe,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e);}_onPointerUp(){this._isActive&&(this._isActive=false,this._platform.SAFARI&&this._setIsFocused(false),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0));}_clamp(e){let t=this._tickMarkOffset,i=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,i),t)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`;}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e);}_updateThumbUIByPointerEvent(e,t){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(t);}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this);}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e);}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=true;}registerOnTouched(e){this._onTouchedFn=e;}setDisabledState(e){this.disabled=e;}focus(){this._hostElement.focus();}blur(){this._hostElement.blur();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w$1({type:n,selectors:[["input","matSliderThumb",""]],hostAttrs:["type","range",1,"mdc-slider__input"],hostVars:1,hostBindings:function(t,i){t&1&&He("change",function(){return i._onChange()})("input",function(){return i._onInput()})("blur",function(){return i._onBlur()})("focus",function(){return i._onFocus()}),t&2&&je$1("aria-valuetext",i._valuetext());},inputs:{value:[2,"value","value",ou]},outputs:{valueChange:"valueChange",dragStart:"dragStart",dragEnd:"dragEnd"},exportAs:["matSliderThumb"],features:[qe([bc,{provide:Va,useExisting:n}])]})}return n})();var Zn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=le({type:n});static \u0275inj=se({imports:[Vl$1,Tt$1]})}return n})();function vc(n,o){if(n&1){let e=sC();Pe(0,"settings-toggle",6),He("ngModelChange",function(i){J_(e);let r=qt();return ey(r.setDarkMode(i))}),Pe(1,"div",7)(2,"icon",8),Ei(3,"mode_night"),Ve(),Pe(4,"div"),Ei(5),lC(6,"translate"),Ve()()(),V8();}if(n&2){let e=qt();Or("ngModel",e.dark_mode())("toggle",true),G8(),ye(5),iu(e9(6,3,"COMMON.DARK_MODE"));}}function xc(n,o){if(n&1){let e=sC();Pe(0,"settings-toggle",6),He("ngModelChange",function(i){J_(e);let r=qt();return ey(r.setLocatable(i))}),Pe(1,"div",7)(2,"icon",8),Ei(3,"emergency_share"),Ve(),Pe(4,"div"),Ei(5),lC(6,"translate"),Ve()()(),V8();}if(n&2){let e=qt();Or("ngModel",e.locatable())("toggle",true),G8(),ye(5),iu(e9(6,3,"COMMON.LOCATABLE"));}}function kc(n,o){if(n&1){let e=sC();Pe(0,"div",9),Ei(1),lC(2,"translate"),Ve(),Pe(3,"div",10)(4,"span",11),Ei(5,"A"),Ve(),Pe(6,"mat-slider",12)(7,"input",13),He("ngModelChange",function(i){J_(e);let r=qt();return ey(r.applySetting("font_size",i))}),Ve(),V8(),Ve(),Pe(8,"span",2),Ei(9,"A"),Ve(),Pe(10,"span",14),Ei(11),Ve()();}if(n&2){let e=qt();ye(),Fo(" ",e9(2,6,"COMMON.TEXT_SIZE_MSG")," "),ye(5),Or("min",10)("max",24)("step",2),ye(),Or("ngModel",e.font_size()),G8(),ye(4),Fo(" ",e.font_size(),"px ");}}var Ua=(()=>{class n extends Ws$1{constructor(){super(...arguments),this._data=m(Ne),this._settings=m(ta),this.accessible=R(false),this.locatable=R(false),this.can_locate=qte("allow_locatability_option",true),this._allow_dark_mode=this._settings.signal("allow_dark_mode",false),this._font_size=this._settings.signal("font_size",16,true),this._accessible=this._settings.signal("accessible",false,true),this._theme=this._settings.theme_signal,this.dark_mode=O(()=>this._theme()==="dark"),this.can_change_dark_mode=O(()=>!!this._allow_dark_mode()),this.font_size=this._font_size,this.applySetting=(e,t)=>this.timeout("apply_setting",()=>{this._settings.saveUserSetting(e,t),e==="accessible"&&this.accessible.set(t);},500),this.close=()=>this._data?.close(),this.setLocatable=e=>{this._settings.updateLocatable(e),this.locatable.set(e);};}async ngOnInit(){this.accessible.set(!!this._accessible()),this.subscription("user",jLe.subscribe(e=>{this.locatable.set(e.locatable);}));}setDarkMode(e){let t=this._theme();e&&t!=="dark"?this._settings.setTheme("dark"):!e&&t==="dark"&&this._settings.setTheme("light");}static{this.\u0275fac=(()=>{let e;return function(i){return (e||(e=Et$1(n)))(i||n)}})();}static{this.\u0275cmp=Ie({type:n,selectors:[["accessibility-tooltip"]],features:[xe],decls:18,vars:11,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","max-h-[65vh]","w-[20rem]","flex-col","overflow-auto","rounded-sm","pb-3","shadow-sm"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-3",3,"click"],[1,"text-2xl"],[1,""],[1,"space-y-2","p-2"],[3,"ngModel","toggle"],[3,"ngModelChange","ngModel","toggle"],[1,"flex","items-center","space-x-2"],[1,"-ml-2","text-xl"],[1,"bg-base-200","px-8","py-4","text-center"],[1,"flex","items-center","space-x-4","px-4"],[1,"text-sm"],[1,"w-1/2","flex-1","text-[16px]",3,"min","max","step"],["matSliderThumb","",1,"text-[16px]",3,"ngModelChange","ngModel"],[1,"bg-base-300","my-2","rounded-sm","px-2","py-1","text-base","text-white"]],template:function(t,i){t&1&&(Pe(0,"div",0)(1,"div",1),He("click",function(){return i.close()}),Pe(2,"icon",2),Ei(3,"arrow_back"),Ve(),Pe(4,"div",3),Ei(5),lC(6,"translate"),Ve()(),Pe(7,"div",4),Fe(8,vc,7,5,"settings-toggle",5),Fe(9,xc,7,5,"settings-toggle",5),Pe(10,"settings-toggle",6),He("ngModelChange",function(d){return i.applySetting("accessible",d)}),Pe(11,"div",7)(12,"icon",8),Ei(13,"playlist_add"),Ve(),Pe(14,"div"),Ei(15),lC(16,"translate"),Ve()()(),V8(),Ve(),Fe(17,kc,12,8),Ve()),t&2&&(ye(5),Fo(" ",e9(6,7,"COMMON.CONTROLS_ACCESSIBILITY")," "),ye(3),Ue(i.can_change_dark_mode()?8:-1),ye(),Ue(i.can_locate()?9:-1),ye(),Or("ngModel",i.accessible())("toggle",true),G8(),ye(5),iu(e9(16,9,"COMMON.TEXT_SIZE")),ye(2),Ue(i.accessible()?17:-1));},dependencies:[Vl$1,V0,Zn,Qn,ki,ga,Det,hMe,TV,aMe,wJ,unt],encapsulation:2});}}return n})();function yc(n,o){if(n&1){let e=sC();Pe(0,"mat-radio-button",8),He("click",function(){let i=J_(e).$implicit,r=qt();return ey(r.setBuilding(i))}),Ei(1),Ve();}if(n&2){let e=o.$implicit;Or("value",e.id),ye(),Fo(" ",e.display_name||e.name," ");}}var za=(()=>{class n{constructor(){this._data=m(Ne),this._org=m(gT),this.buildings=this._org.active_buildings,this.building=this._org.active_building,this.setBuilding=e=>{this._org.setBuilding(e,true),this._data?.close();},this.close=()=>this._data?.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["building-select"]],decls:16,vars:8,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","max-h-[65vh]","w-74","flex-col","overflow-auto","rounded-sm","pb-3","shadow-sm",3,"click"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-3"],[1,"text-2xl"],[1,"leading-tight"],[1,"text-xs","opacity-30"],[1,"px-4","py-2","text-xs","opacity-60"],[1,"flex","flex-col","space-y-2","px-2",3,"ngModel"],[3,"value"],[3,"click","value"]],template:function(t,i){t&1&&(Pe(0,"div",0),He("click",function(){return i.close()}),Pe(1,"div",1)(2,"icon",2),Ei(3,"arrow_back"),Ve(),Pe(4,"div",3)(5,"div"),Ei(6),Ve(),Pe(7,"div",4),Ei(8),lC(9,"translate"),Ve()()(),Pe(10,"div",5),Ei(11),lC(12,"translate"),Ve(),Pe(13,"mat-radio-group",6),Y4(14,yc,2,2,"mat-radio-button",7,z4),Ve(),V8(),Ve()),t&2&&(ye(6),Fo(" ",i.building()?.display_name||i.building()?.name," "),ye(2),Fo(" ",e9(9,4,"RESOURCE.BUILDING")," "),ye(3),Fo(" ",e9(12,6,"COMMON.BUILDING_SELECT")," "),ye(2),Or("ngModel",i.building()?.id),G8(),ye(),W4(i.buildings()));},dependencies:[Xn,vi,ri,Det,Vl$1,V0,hMe,aMe,wJ,unt],encapsulation:2});}}return n})();function Cc(n,o){n&1&&(Pe(0,"div",3),Ei(1),lC(2,"translate"),Ve()),n&2&&(ye(),Fo(" ",e9(2,1,"COMMON.DESK_HEIGHT_NOT_SET")," "));}function Mc(n,o){if(n&1){let e=sC();Pe(0,"button",13),He("click",function(){J_(e);let i=qt();return ey(i.onClose())}),Ei(1),lC(2,"translate"),Ve();}n&2&&(ye(),Fo(" ",e9(2,1,"COMMON.SAVE")," "));}var Ga=(()=>{class n{constructor(){this._settings=m(ta),this.show_close=KDe(false),this.close=qDe(),this.not_set=R(false),this.desk_sitting_height=R(71),this.desk_standing_height=R(101);}ngOnInit(){this.not_set.set(!this._settings.get("desk_sitting_height")&&!this._settings.get("desk_standing_height")),this.desk_sitting_height.set(this._settings.get("desk_sitting_height")||71),this.desk_standing_height.set(this._settings.get("desk_standing_height")||101);}onClose(){this.saveSetting("desk_sitting_height",this.desk_sitting_height()),this.saveSetting("desk_standing_height",this.desk_standing_height()),this.close.emit();}formatLabel(e){return `${e.toFixed(1)}cm`}saveSetting(e,t){this._settings.saveUserSetting(e,t);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["desk-height-presets"]],inputs:{show_close:[1,"show_close"]},outputs:{show_close:"show_closeChange",close:"close"},decls:29,vars:23,consts:[[1,"bg-base-100","relative","w-[20rem]","rounded-sm","p-4","shadow-sm"],[1,"mb-2","text-lg"],[1,"mb-4","text-xs","opacity-60"],[1,"bg-warning","text-warning-content","-mx-2","mb-4","rounded-sm","p-2","text-xs"],[1,"mt-2","flex","flex-col"],[1,"flex","items-center","space-x-2"],["min","60","max","80","step","0.5","discrete","",1,"flex-1",3,"displayWith"],["matSliderThumb","",3,"ngModelChange","ngModel"],[1,"w-12","text-right","text-sm"],[1,"mr-2","flex","items-center","space-x-2"],["min","90","max","120","step","0.5","discrete","",1,"flex-1",3,"displayWith"],[1,"mr-2","w-12","text-right","text-sm"],["btn","","matRipple","",1,"mt-2","w-full"],["btn","","matRipple","",1,"mt-2","w-full",3,"click"]],template:function(t,i){t&1&&(Pe(0,"div",0)(1,"div",1),Ei(2),lC(3,"translate"),Ve(),Pe(4,"div",2),Ei(5),lC(6,"translate"),Ve(),Fe(7,Cc,3,3,"div",3),Pe(8,"div",2),Ei(9),lC(10,"translate"),Ve(),Pe(11,"div",4)(12,"label"),Ei(13),lC(14,"translate"),Ve(),Pe(15,"div",5)(16,"mat-slider",6)(17,"input",7),He("ngModelChange",function(d){return i.desk_sitting_height.set(d),i.saveSetting("desk_sitting_height",d)}),Ve(),V8(),Ve(),Pe(18,"div",8),Ei(19),Ve()(),Pe(20,"label"),Ei(21),lC(22,"translate"),Ve(),Pe(23,"div",9)(24,"mat-slider",10)(25,"input",7),He("ngModelChange",function(d){return i.desk_standing_height.set(d),i.saveSetting("desk_standing_height",d)}),Ve(),V8(),Ve(),Pe(26,"div",11),Ei(27),Ve()()(),Fe(28,Mc,3,3,"button",12),Ve()),t&2&&(ye(2),Fo(" ",e9(3,13,"COMMON.DESK_HEIGHT_TITLE")," "),ye(3),Fo(" ",e9(6,15,"COMMON.DESK_HEIGHT_MSG")," "),ye(2),Ue(i.not_set()&&i.show_close()?7:-1),ye(2),Fo(" ",e9(10,17,"COMMON.DESK_HEIGHT_INFO")," "),ye(4),iu(e9(14,19,"COMMON.DESK_HEIGHT_SITTING")),ye(3),Or("displayWith",i.formatLabel),ye(),Or("ngModel",i.desk_sitting_height()),G8(),ye(2),Fo(" ",i.desk_sitting_height().toFixed(1),"cm "),ye(2),Fo("",e9(22,21,"COMMON.DESK_HEIGHT_STANDING"),"t"),ye(3),Or("displayWith",i.formatLabel),ye(),Or("ngModel",i.desk_standing_height()),G8(),ye(2),Fo(" ",i.desk_standing_height().toFixed(1),"cm "),ye(),Ue(i.show_close()?28:-1));},dependencies:[Vl$1,V0,Zn,Qn,ki,hMe,TV,aMe,wJ,unt],encapsulation:2});}}return n})();function wc(n,o){if(n&1&&(Pe(0,"a",4)(1,"div",5),Wt(2,"icon",6),Pe(3,"div"),Ei(4),Ve()()()),n&2){let e=o.$implicit;Or("href",e.link,Vy),ye(2),Or("icon",e.icon),ye(2),iu(e.name);}}var Ha=(()=>{class n{constructor(){this._data=m(Ne),this._settings=m(ta),this._tiles=this._settings.signal("help",[]),this.close=()=>{this._data?.close();};}get tiles(){return this._tiles()}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["help-tooltip"]],decls:9,vars:3,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","w-74","flex-col","rounded-sm","shadow-sm",3,"click"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-4"],[1,"text-2xl"],[1,""],["matRipple","","target","_blank","ref","noreferer noopener",1,"w-full","p-2","text-left",3,"href"],[1,"hover:bg-base-200","flex","w-full","items-center","space-x-2","rounded-sm","p-2"],[1,"text-xl",3,"icon"]],template:function(t,i){t&1&&(Pe(0,"div",0),He("click",function(){return i.close()}),Pe(1,"div",1)(2,"icon",2),Ei(3,"arrow_back"),Ve(),Pe(4,"div",3),Ei(5),lC(6,"translate"),Ve()(),Y4(7,wc,5,3,"a",4,z4),Ve()),t&2&&(ye(5),iu(e9(6,1,"COMMON.CONTROLS_HELP")),ye(2),W4(i.tiles));},dependencies:[Vl$1,V0,Det,unt],encapsulation:2});}}return n})();var Tc=(n,o)=>o.id;function Ec(n,o){if(n&1&&(Pe(0,"div",8),Ei(1),Ve()),n&2){let e=qt().$implicit;ye(),Fo(" ",e.local," ");}}function Ic(n,o){if(n&1){let e=sC();Pe(0,"button",6),He("click",function(){let i=J_(e).$implicit,r=qt();return ey(r.setLocale(i.id))}),Pe(1,"div",7),lC(2,"translate"),Pe(3,"div"),Ei(4),lC(5,"translate"),Ve(),Fe(6,Ec,2,1,"div",8),lC(7,"translate"),Ve()();}if(n&2){let e=o.$implicit,t=qt();ye(),Oe("mt-2",e9(2,8,e.name)!==e.local)("border",t.active_locale===e.id)("border-info",t.active_locale===e.id),ye(3),iu(e9(5,10,e.name)),ye(2),Ue(e9(7,12,e.name)!==e.local?6:-1);}}var Wa=(()=>{class n{constructor(){this._data=m(Ne),this._settings=m(ta),this._locale=m(Db),this._locales=this._settings.signal("locales",[]),this.setLocale=e=>{this._locale.setLocale(e),localStorage.setItem("PLACEOS.locale",e),setTimeout(()=>location.reload(),300);},this.close=()=>this._data?.close();}get active_locale(){return this._locale.locale}get locales(){return this._locales()}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["language-select"]],decls:12,vars:6,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","max-h-[65vh]","w-74","flex-col","overflow-auto","rounded-sm","pb-3","shadow-sm",3,"click"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-3"],[1,"text-2xl"],[1,""],[1,"px-4","py-2","text-xs","opacity-60"],["matRipple","",1,"flex","h-14","items-center","justify-between","space-x-8","px-2","text-left"],["matRipple","",1,"flex","h-14","items-center","justify-between","space-x-8","px-2","text-left",3,"click"],[1,"hover:bg-base-200","flex","flex-1","items-center","justify-between","rounded-sm","p-2","leading-tight"],[1,"bg-base-300","rounded-sm","px-2","py-1","text-xs","opacity-60"]],template:function(t,i){t&1&&(Pe(0,"div",0),He("click",function(){return i.close()}),Pe(1,"div",1)(2,"icon",2),Ei(3,"arrow_back"),Ve(),Pe(4,"div",3),Ei(5),lC(6,"translate"),Ve()(),Pe(7,"div",4),Ei(8),lC(9,"translate"),Ve(),Y4(10,Ic,8,14,"button",5,Tc),Ve()),t&2&&(ye(5),iu(e9(6,2,"COMMON.LANGUAGE")),ye(3),Fo(" ",e9(9,4,"COMMON.LANGUAGE_SELECT")," "),ye(2),W4(i.locales));},dependencies:[Vl$1,V0,Det,unt],encapsulation:2});}}return n})();function Sc(n,o){if(n&1){let e=sC();Pe(0,"mat-radio-button",8),He("click",function(){let i=J_(e).$implicit,r=qt();return ey(r.setRegion(i))}),Ei(1),Ve();}if(n&2){let e=o.$implicit;Or("value",e.id),ye(),Fo(" ",e.display_name||e.name," ");}}var ja=(()=>{class n{constructor(){this._data=m(Ne),this._org=m(gT),this.regions=this._org.region_list,this.region=this._org.active_region,this.setRegion=async e=>{await this._org.setRegion(e),this._org.setBuilding(this._org.building,true),this._data?.close();},this.close=()=>this._data?.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["region-select"]],decls:16,vars:8,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","max-h-[65vh]","w-74","flex-col","overflow-auto","rounded-sm","pb-3","shadow-sm",3,"click"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-3"],[1,"text-2xl"],[1,"leading-tight"],[1,"text-xs","opacity-30"],[1,"px-4","py-2","text-xs","opacity-60"],[1,"flex","flex-col","space-y-2","px-2",3,"ngModel"],[3,"value"],[3,"click","value"]],template:function(t,i){t&1&&(Pe(0,"div",0),He("click",function(){return i.close()}),Pe(1,"div",1)(2,"icon",2),Ei(3,"arrow_back"),Ve(),Pe(4,"div",3)(5,"div"),Ei(6),Ve(),Pe(7,"div",4),Ei(8),lC(9,"translate"),Ve()()(),Pe(10,"div",5),Ei(11),lC(12,"translate"),Ve(),Pe(13,"mat-radio-group",6),Y4(14,Sc,2,2,"mat-radio-button",7,z4),Ve(),V8(),Ve()),t&2&&(ye(6),Fo(" ",i.region()?.display_name||i.region()?.name," "),ye(2),Fo(" ",e9(9,4,"RESOURCE.REGION")," "),ye(3),Fo(" ",e9(12,6,"COMMON.REGION_SELECT")," "),ye(2),Or("ngModel",i.region()?.id),G8(),ye(),W4(i.regions()));},dependencies:[Xn,vi,ri,Det,Vl$1,V0,hMe,aMe,wJ,unt],encapsulation:2});}}return n})();var qa=(()=>{class n{constructor(){this._settings=m(ta),this._tooltip=m(Ne,{optional:true}),this.plate_number=R("");}async ngOnInit(){await y2(this._settings.initialised),this.plate_number.set(this._settings.get("plate_number")||"");}save(){this.plate_number()&&this._settings.saveUserSetting("plate_number",this.plate_number()),yb(_r("COMMON.PARKING_SETTINGS_SAVE")),this._tooltip?.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["user-parking-tooltip"]],decls:14,vars:13,consts:[[1,"border-base-300","bg-base-100","min-w-[20rem]","space-y-2","rounded-md","border","p-2"],[1,"border-base-300","border-b","text-lg","font-medium"],[1,"flex","flex-col"],["for","plate-number"],["appearance","outline",1,"no-subscript"],["matInput","",3,"ngModelChange","ngModel","placeholder"],["btn","","matRipple","",1,"w-full",3,"click"]],template:function(t,i){t&1&&(Pe(0,"div",0)(1,"h3",1),Ei(2),lC(3,"translate"),Ve(),Pe(4,"div",2)(5,"label",3),Ei(6),lC(7,"translate"),Ve(),Pe(8,"mat-form-field",4)(9,"input",5),lC(10,"translate"),iF("ngModelChange",function(d){return x6(i.plate_number,d)||(i.plate_number=d),d}),Ve(),V8(),Ve()(),Pe(11,"button",6),He("click",function(){return i.save()}),Ei(12),lC(13,"translate"),Ve()()),t&2&&(ye(2),Fo(" ",e9(3,5,"COMMON.CONTROLS_PARKING")," "),ye(4),iu(e9(7,7,"EXPLORE.PARKING_PLATE_NUMBER")),ye(3),rF("ngModel",i.plate_number),Or("placeholder",e9(10,9,"EXPLORE.PARKING_PLATE_NUMBER")),G8(),ye(3),Fo(" ",e9(13,11,"COMMON.SAVE")," "));},dependencies:[VM,YY,ktt,xtt,hMe,TV,aMe,wJ,unt],encapsulation:2});}}return n})();function Oc(n,o){if(n&1){let e=sC();Pe(0,"button",17),He("click",function(){let i=J_(e).$implicit,r=qt().$index,d=qt(2);return ey(d.setLocation(r,i.id))}),Pe(1,"div",18)(2,"icon",11),Ei(3),Ve(),Pe(4,"div",19),Ei(5),lC(6,"translate"),Ve()()();}if(n&2){let e=o.$implicit;ye(3),iu(e.icon),ye(2),Fo(" ",e9(6,2,e.name)," ");}}function Rc(n,o){n&1&&Wt(0,"div",16);}function Dc(n,o){if(n&1&&(Pe(0,"div",9)(1,"div",10)(2,"icon",11),Ei(3),Ve()(),Pe(4,"div",12)(5,"button",13)(6,"div"),Ei(7),Ve(),Pe(8,"icon"),Ei(9,"expand_more"),Ve()(),Pe(10,"mat-menu",null,0),Y4(12,Oc,7,4,"button",14,z4),Ve(),Pe(14,"div",15),Ei(15),lC(16,"date"),lC(17,"date"),Ve()(),Fe(18,Rc,1,0,"div",16),Ve()),n&2){let e=o.$implicit,t=o.$index,i=iE(11),r=qt(2);Oe("opacity-30",r.now>r.timeFrom(e.end_time)),ye(),Oe("bg-base-200",r.now<r.timeFrom(e.start_time)||r.now>r.timeFrom(e.end_time))("bg-info",r.now>=r.timeFrom(e.start_time)&&r.now<=r.timeFrom(e.end_time))("text-info-content",r.now>=r.timeFrom(e.start_time)&&r.now<=r.timeFrom(e.end_time)),ye(2),iu(r.location_icon(r.timeFrom(e.start_time))),ye(2),Or("matMenuTriggerFor",i),ye(2),Fo(" ",r.location(r.timeFrom(e.start_time))," "),ye(5),W4(r.locations()),ye(3),eF(" ",dC(16,14,r.timeFrom(e.start_time),"shortTime")," \u2013 ",dC(17,17,r.timeFrom(e.end_time),"shortTime")," "),ye(3),Ue(t>0?18:-1);}}function Ac(n,o){if(n&1&&(Pe(0,"div",6),Y4(1,Dc,19,20,"div",8,z4),Ve()),n&2){let e=qt();ye(),W4(e.active_preference?.blocks);}}function Pc(n,o){n&1&&(Pe(0,"div",7)(1,"icon",20),Ei(2,"event_busy"),Ve(),Pe(3,"p",21),Ei(4),lC(5,"translate"),Ve(),Pe(6,"p",21),Ei(7),lC(8,"translate"),Ve()()),n&2&&(ye(4),Fo(" ",e9(5,2,"COMMON.WORK_LOCATION_EMPTY")," "),ye(3),Fo(" ",e9(8,4,"COMMON.WORK_LOCATION_EDIT_INFO")," "));}var $a=(()=>{class n{constructor(){this._dialog=m(vT),this.locations=R([]),this.settings=R(void 0),this.overrides=R({});}get active_preference(){let e=ro(new Date,"yyyy-MM-dd");return this.overrides()[e]?this.overrides()[e]:this.settings()?.find(t=>t.day_of_week===new Date().getDay())}get now(){return Rl$1(Date.now()).getTime()}ngOnInit(){let e=ao();this.settings.set(e.work_preferences),this.overrides.set(e.work_overrides),this.locations.set([{id:"wfo",name:_r("COMMON.WORK_OFFICE"),icon:"business"},{id:"wfh",name:_r("COMMON.WORK_HOME"),icon:"home"},{id:"aol",name:_r("COMMON.WORK_LEAVE"),icon:"event_busy"},{id:"sick",name:_r("COMMON.WORK_SICK"),icon:"sick"}]);}location_icon(e){return ao().location_icon(e+60*1e3)}location(e){return ao().location_name_time(e+60*1e3)}timeFrom(e){return Rl$1(wi(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}editSettings(){this._dialog.open(Kn);}async setLocation(e,t){let i=ao(),r=this.active_preference,d=ro(Date.now(),"yyyy-MM-dd"),x=m$1(l({},i.work_overrides),{[d]:m$1(l({},r),{blocks:[...r.blocks.slice(0,e),m$1(l({},r.blocks[e]),{location:t}),...r.blocks.slice(e+1)]})});for(let O in x){let X=ua(O,"yyyy-MM-dd",new Date);(!x[O].blocks.length||Qr(X,kn$1(An$1(Date.now()),-1)))&&delete x[O];}this.overrides.set(x),await LH(i.id,m$1(l({},i),{work_overrides:x})),N2();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["work-location-tooltip"]],decls:14,vars:11,consts:[["work_menu","matMenu"],[1,"bg-base-100","relative","-top-12","-right-1","flex","w-74","flex-col","overflow-hidden","rounded-sm","shadow-sm"],[1,"flex","items-center","justify-between","px-2"],[1,"px-2","py-4","font-medium"],["icon","","matRipple","","matTooltipPosition","left",1,"hover:bg-base-200",3,"click","matTooltip"],[1,"px-4","text-sm","font-medium"],[1,"pb-2"],[1,"flex","w-full","flex-col","items-center","justify-center","space-y-2","p-8","opacity-30"],[1,"relative","flex","items-center","px-4","py-2",3,"opacity-30"],[1,"relative","flex","items-center","px-4","py-2"],[1,"bg-base-200","z-20","flex","h-10","w-10","items-center","justify-center","rounded-full"],[1,"text-2xl"],[1,"ml-2","flex-1"],["matRipple","",1,"hover:bg-base-200","flex","items-center","space-x-2","rounded-sm","px-2","py-1","font-medium",3,"matMenuTriggerFor"],["mat-menu-item",""],[1,"px-2","text-xs","opacity-60"],[1,"border-base-200","absolute","-top-2","left-7","h-4","w-0","-translate-x-px","border-l-2","border-dashed"],["mat-menu-item","",3,"click"],[1,"flex","items-center","space-x-2"],[1,"pr-8"],[1,"text-6xl"],[1,"text-center","text-sm"]],template:function(t,i){t&1&&(Pe(0,"div",1)(1,"div",2)(2,"h3",3),Ei(3),lC(4,"translate"),Ve(),Pe(5,"button",4),lC(6,"translate"),He("click",function(){return i.editSettings()}),Pe(7,"icon"),Ei(8,"edit_note"),Ve()()(),Pe(9,"h3",5),Ei(10),lC(11,"date"),Ve(),Fe(12,Ac,3,0,"div",6)(13,Pc,9,6,"div",7),Ve()),t&2&&(ye(3),Fo(" ",e9(4,4,"COMMON.WORK_LOCATION")," "),ye(2),Or("matTooltip",e9(6,6,"COMMON.WORK_LOCATION_EDIT")),ye(5),Fo(" ",dC(11,8,i.now,"fullDate")," "),ye(2),Ue(i.active_preference?.blocks?.length?12:13));},dependencies:[uU,AQe,ei,tt,lt,ct,Vl$1,V0,snt,$de,Det,A7,unt],encapsulation:2});}}return n})();function Nc(n,o){if(n&1){let e=sC();Pe(0,"button",28),He("click",function(){let i=J_(e).$implicit,r=qt(2);return ey(r.saveSetting("work_location",i.id))}),Pe(1,"div",29)(2,"icon",23),Ei(3),Ve(),Pe(4,"div",30),Ei(5),lC(6,"translate"),Ve()()();}if(n&2){let e=o.$implicit;ye(3),iu(e.icon),ye(2),Fo(" ",e9(6,2,e.name)," ");}}function Fc(n,o){if(n&1&&(Pe(0,"div",7)(1,"h3",19),Ei(2," Today's Work Location "),Ve(),Pe(3,"div",20)(4,"div",21)(5,"div",22)(6,"icon",23),Ei(7),Ve()(),Pe(8,"div",24)(9,"button",25)(10,"div"),Ei(11),Ve(),Pe(12,"icon"),Ei(13,"expand_more"),Ve()(),Pe(14,"mat-menu",null,1),Y4(16,Nc,7,4,"button",26,z4),Ve(),Pe(18,"div",27),Ei(19),lC(20,"date"),lC(21,"date"),Ve()()()()()),n&2){let e=iE(15),t=qt();ye(7),iu(t.location_icon(t.timeFrom(t.active_block().start_time))),ye(2),Or("matMenuTriggerFor",e),ye(2),Fo(" ",t.location(t.timeFrom(t.active_block().start_time))," "),ye(5),W4(t.pref_locations()),ye(3),eF(" ",dC(20,5,t.timeFrom(t.active_block().start_time),"shortTime")," \u2013 ",dC(21,8,t.timeFrom(t.active_block().end_time),"shortTime")," ");}}function Vc(n,o){if(n&1&&(Pe(0,"div",8)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),Ei(5,"layers"),Ve()(),Pe(6,"div",33),Ei(7),Ve(),Pe(8,"icon",34),Ei(9," chevron_right "),Ve()()()()),n&2){let e=qt();Or("content",e.region_select),ye(7),Fo(" ",e.region()?.display_name||e.region()?.name," ");}}function Lc(n,o){if(n&1&&(Pe(0,"div",8)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),Ei(5,"business"),Ve()(),Pe(6,"div",33),Ei(7),Ve(),Pe(8,"icon",34),Ei(9," chevron_right "),Ve()()()()),n&2){let e=qt();Or("content",e.building_select),ye(7),Fo(" ",e.building()?.display_name||e.building()?.name," ");}}function Bc(n,o){if(n&1&&(Pe(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),Ei(5,"help"),Ve()(),Pe(6,"div",35),Ei(7),lC(8,"translate"),Ve(),Pe(9,"icon",34),Ei(10," chevron_right "),Ve()()()()),n&2){let e=qt();Or("content",e.help_tooltip),ye(7),Fo(" ",e9(8,2,"COMMON.CONTROLS_HELP")," ");}}function Uc(n,o){if(n&1&&(Pe(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),Ei(5,"share_location"),Ve()(),Pe(6,"div",35),Ei(7),lC(8,"translate"),Ve(),Pe(9,"icon",34),Ei(10,"chevron_right"),Ve()()()()),n&2){let e=qt();Or("content",e.work_location_tooltip),ye(7),Fo(" ",e9(8,2,"COMMON.CONTROLS_WORK_LOCATION")," ");}}function zc(n,o){if(n&1&&(Pe(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),Ei(5,"mode_night"),Ve()(),Pe(6,"div",35),Ei(7),lC(8,"translate"),Ve(),Pe(9,"icon",34),Ei(10,"chevron_right"),Ve()()()()),n&2){let e=qt();Oe("border-b!",!e.locales().length||!e.desk_height()),Or("content",e.accessibility_tooltip),ye(7),Fo(" ",e9(8,4,"COMMON.CONTROLS_ACCESSIBILITY")," ");}}function Gc(n,o){if(n&1&&(Pe(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),Ei(5,"desk"),Ve()(),Pe(6,"div",35),Ei(7),lC(8,"translate"),Ve(),Pe(9,"icon",34),Ei(10," chevron_right "),Ve()()()()),n&2){let e=qt(),t=iE(15);Oe("border-b!",!e.locales().length),Or("content",t),ye(7),Fo(" ",e9(8,4,"COMMON.CONTROLS_DESKS")," ");}}function Hc(n,o){n&1&&Wt(0,"desk-height-presets");}function Wc(n,o){if(n&1&&(Pe(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),Ei(5,"parking_sign"),Ve()(),Pe(6,"div",35),Ei(7),lC(8,"translate"),Ve(),Pe(9,"icon",34),Ei(10," chevron_right "),Ve()()()()),n&2){let e=qt();Oe("border-b!",!e.locales().length),Or("content",e.parking_tooltip),ye(7),Fo(" ",e9(8,4,"COMMON.CONTROLS_PARKING")," ");}}function jc(n,o){n&1&&(Pe(0,"div",37),Ei(1," Language "),Ve());}function qc(n,o){if(n&1&&(Pe(0,"div",11)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),Ei(5,"language"),Ve()(),Pe(6,"div",36)(7,"div")(8,"div"),Ei(9),lC(10,"translate"),Ve(),Fe(11,jc,2,0,"div",37),lC(12,"translate"),Ve(),Pe(13,"div",38),lC(14,"translate"),Ei(15),lC(16,"translate"),Ve()(),Pe(17,"icon",34),Ei(18," chevron_right "),Ve()()()()),n&2){let e=qt();Or("content",e.language_tooltip),ye(9),Fo(" ",e9(10,5,"COMMON.LANGUAGE")," "),ye(2),Ue(e9(12,7,"COMMON.LANGUAGE")!=="Language"?11:-1),ye(2),Or("matTooltip",e9(14,9,e.active_locale)),ye(2),Fo(" ",e9(16,11,e.active_locale)," ");}}function $c(n,o){if(n&1){let e=sC();Pe(0,"button",39),He("click",function(){J_(e);let i=qt();return ey(i.newSupportTicket())}),Pe(1,"div",31)(2,"div",32)(3,"icon"),Ei(4,"support_agent"),Ve()(),Pe(5,"div",35),Ei(6),lC(7,"translate"),Ve()()();}n&2&&(ye(6),Fo(" ",e9(7,1,"COMMON.CONTROLS_SUPPORT")," "));}function Xc(n,o){if(n&1){let e=sC();Pe(0,"button",40),He("click",function(){J_(e);let i=qt();return ey(i.reloadPage())}),Ei(1),lC(2,"translate"),Ve();}n&2&&(ye(),Fo(" ",e9(2,1,"COMMON.CONTROLS_NEW_VERSION")," "));}function Yc(n,o){if(n&1){let e=sC();Pe(0,"button",41),He("click",function(){J_(e);let i=qt();return ey(i.viewChangelog())}),Ei(1),Ve();}if(n&2){let e=qt();ye(),Fo(" ",e.version.hash," ");}}function Kc(n,o){if(n&1&&(Pe(0,"span"),Ei(1),Ve()),n&2){let e=qt();ye(),iu(e.version.hash);}}var Xa=(()=>{class n{constructor(){this._settings=m(ta),this._org=m(gT),this._dialog=m(vT),this._locale=m(Db),this.building=this._org.active_building,this.region=this._org.active_region,this.regions=this._org.region_list,this.sidebar=Xi(false),this.accessibility=qte("allow_accessibility_changes",true),this.show_changelog=qte("show_changelog",true),this.region_select=ja,this.building_select=za,this.help_tooltip=Ha,this.accessibility_tooltip=Ua,this.language_tooltip=Wa,this.work_location_tooltip=$a,this.parking_tooltip=qa,this.features=qte("features",[]),this._locales=this._settings.signal("locales",[]),this._desk_height=this._settings.signal("desks.height_enabled",false),this._use_region=this._settings.signal("use_region",false),this._disable_building_select=this._settings.signal("disable_building_select",false),this.pref_locations=R([]),this.work_prefs=R([]),this.overrides=R({}),this.active_block=O(()=>{let e=ro(new Date,"yyyy-MM-dd"),t=new Date().getDay();return (this.overrides()[e]?this.overrides()[e]:this.work_prefs().find(r=>r.day_of_week===t))?.blocks?.find(r=>this.now>=this.timeFrom(r.start_time)&&this.now<this.timeFrom(r.end_time))}),this.active_index=O(()=>{let e=ro(new Date,"yyyy-MM-dd"),t=new Date().getDay();return (this.overrides()[e]?this.overrides()[e]:this.work_prefs().find(r=>r.day_of_week===t))?.blocks?.findIndex(r=>this.now>=this.timeFrom(r.start_time)&&this.now<this.timeFrom(r.end_time))}),this.locales=this._locales,this.desk_height=this._desk_height,this.use_region=this._use_region,this.disable_building_select=this._disable_building_select;}location_icon(e){return ao().location_icon(e+60*1e3)}location(e){return ao().location_name_time(e+60*1e3)}timeFrom(e){return Rl$1(wi(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}get user(){return ao()}get groups(){return this.user?.groups?.join(`
`)||""}get version(){return mm}get active_locale(){let e=this.locales(),t=this._locale.locale;for(let i of e)if(i.id===t)return i.name;return "LANGUAGE.ENGLISH"}get now(){return Rl$1(Date.now()).getTime()}get has_new_version(){return a3()}ngOnInit(){let e=ao();this.work_prefs.set(e?.work_preferences||[]),this.overrides.set(e?.work_overrides||{}),this.pref_locations.set([{id:"wfo",name:_r("COMMON.WORK_OFFICE"),icon:"business"},{id:"wfh",name:_r("COMMON.WORK_HOME"),icon:"home"},{id:"aol",name:_r("COMMON.WORK_LEAVE"),icon:"event_busy"},{id:"sick",name:_r("COMMON.WORK_SICK"),icon:"sick"}]);}logout(){yMe();}reloadPage(){location.reload();}newSupportTicket(){this._settings.get("app.external_support_url")?window.open(this._settings.get("app.external_support_url"),"_blank"):this._dialog.open(Na);}openWfhModal(){this._dialog.open(Kn);}async viewChangelog(){let e=await(await fetch("https://raw.githubusercontent.com/PlaceOS/user-interfaces/develop/CHANGELOG.md")).text();this._dialog.open(Aa,{data:{changelog:e}});}saveSetting(e,t){this._settings.saveUserSetting(e,t);}formatLabel(e){return `${e.toFixed(1)}cm`}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["user-controls"]],inputs:{sidebar:[1,"sidebar"]},decls:35,vars:32,consts:[["desk_height_tooltip",""],["work_menu","matMenu"],[1,"divide-base-200","border-base-300","bg-base-100","relative","mt-1","flex","flex-col","divide-y","overflow-auto","rounded-sm","border","shadow-sm"],["avatar","",1,"flex","w-full","min-w-72","flex-col","items-center","p-2"],[1,"text-2xl",3,"user","matTooltip"],[1,""],[1,"truncate","text-xs","opacity-60"],[1,"border-base-200","w-full","rounded-sm","border-y","py-2"],["customTooltip","",1,"relative",3,"content"],["customTooltip","",3,"content"],["customTooltip","",3,"content","border-b!"],["customTooltip","",1,"border-b!",3,"content"],["btn","","matRipple","",1,"clear","h-14","w-full","text-left"],[1,"flex","flex-col","items-center","p-4"],[1,"mb-4","flex","items-center","justify-center","space-x-2"],["btn","","matRipple","",1,"inverse",3,"click"],["btn","","matRipple",""],[1,"w-full","text-xs","opacity-60"],[1,"m-0","border-none","bg-none","p-0","text-xs","underline"],[1,"w-full","px-4","pb-2","text-sm","font-medium"],[1,"w-full"],[1,"relative","flex","items-center","px-4","py-2"],[1,"bg-info","text-info-content","z-20","flex","h-10","w-10","items-center","justify-center","rounded-full"],[1,"text-2xl"],[1,"ml-2","flex-1"],["matRipple","",1,"hover:bg-base-200","flex","items-center","space-x-2","rounded-sm","px-2","py-1","font-medium",3,"matMenuTriggerFor"],["mat-menu-item",""],[1,"px-2","text-xs","opacity-60"],["mat-menu-item","",3,"click"],[1,"flex","items-center","space-x-2"],[1,"pr-8"],[1,"flex","w-full","items-center","space-x-2"],[1,"bg-base-200","flex","h-8","w-8","items-center","justify-center","rounded-full"],[1,"w-px","flex-1","truncate"],[1,"text-2xl","opacity-60"],[1,"flex-1"],[1,"flex","flex-1","items-center","justify-between","space-x-4"],[1,"text-xs","opacity-30"],[1,"bg-base-200","max-w-24","truncate","rounded-sm","px-2","py-1","text-sm",3,"matTooltip"],["btn","","matRipple","",1,"clear","h-14","w-full","text-left",3,"click"],["btn","","matRipple","",3,"click"],[1,"m-0","border-none","bg-none","p-0","text-xs","underline",3,"click"]],template:function(t,i){t&1&&(Pe(0,"div",2)(1,"div",3),Wt(2,"a-user-avatar",4),Pe(3,"div",5),Ei(4),Ve(),Pe(5,"div",6),Ei(6),Ve()(),Fe(7,Fc,22,11,"div",7),Fe(8,Vc,10,2,"div",8),Fe(9,Lc,10,2,"div",8),Fe(10,Bc,11,4,"div",9),Fe(11,Uc,11,4,"div",9),Fe(12,zc,11,6,"div",10),Fe(13,Gc,11,6,"div",10),_i(14,Hc,1,0,"ng-template",null,0,fC),Fe(16,Wc,11,6,"div",10),Fe(17,qc,19,13,"div",11),Fe(18,$c,8,3,"button",12),Pe(19,"div",13)(20,"div",14)(21,"button",15),He("click",function(){return i.logout()}),Ei(22),lC(23,"translate"),Ve(),Fe(24,Xc,3,3,"button",16),Ve(),Pe(25,"div",17),iC(26),Ei(27),lC(28,"translate"),oC(),Fe(29,Yc,2,1,"button",18)(30,Kc,2,1,"span"),Ve(),Pe(31,"div",17),Ei(32),lC(33,"date"),lC(34,"date"),Ve()()()),t&2&&(Oe("border",!i.sidebar()),ye(2),Or("user",i.user)("matTooltip",i.groups),ye(2),iu(i.user?.name),ye(2),Fo(" ",i.user?.email," "),ye(),Ue(i.features().includes("wfh")&&i.active_block()?7:-1),ye(),Ue(i.regions()?.length?8:-1),ye(),Ue(!i.disable_building_select()&&!i.use_region()?9:-1),ye(),Ue(i.features().includes("help")?10:-1),ye(),Ue(i.features().includes("wfh")?11:-1),ye(),Ue(i.accessibility()?12:-1),ye(),Ue(i.desk_height()?13:-1),ye(3),Ue(i.features().includes("parking-controls")?16:-1),ye(),Ue(i.locales().length>1?17:-1),ye(),Ue(i.features().includes("support-ticket")?18:-1),ye(4),Fo(" ",e9(23,22,"COMMON.CONTROLS_SIGN_OUT")," "),ye(2),Ue(i.has_new_version?24:-1),ye(3),Fo(" ",e9(28,24,"COMMON.CONTROLS_VERSION"),": "),ye(2),Ue(i.show_changelog()?29:30),ye(3),eF(" ",dC(33,26,i.version.time,"longDate")," (",dC(34,29,i.version.time,"shortTime"),") "));},dependencies:[uU,AQe,Vl$1,V0,Det,Ta,snt,$de,Yn,ei,tt,lt,ct,Ga,A7,unt],encapsulation:2});}}return n})();var Qc=["*"];function Zc(n,o){n&1&&(Pe(0,"icon",2),Ei(1,"person"),Ve());}function Jc(n,o){if(n&1){let e=sC();Pe(0,"div",1)(1,"button",3),He("click",function(){J_(e);let i=qt();return ey(i.close())}),Ve(),Pe(2,"div",4)(3,"div",5),Wt(4,"user-controls",6),Pe(5,"button",7),He("click",function(){J_(e);let i=qt();return ey(i.close())}),Pe(6,"icon",2),Ei(7,"close"),Ve()()()()();}if(n&2){let e=qt();ye(),Oe("opacity-50",e.is_open())("opacity-0",!e.is_open()),ye(2),Oe("translate-x-0",e.is_open())("translate-x-full",!e.is_open()),ye(),Or("sidebar",true);}}var Ya=(()=>{class n{constructor(){this._close_timeout=null,this.is_open=R(false),this.is_rendered=R(false);}open(){this._close_timeout&&(clearTimeout(this._close_timeout),this._close_timeout=null),this.is_rendered.set(true),requestAnimationFrame(()=>this.is_open.set(true));}close(){this.is_open.set(false),this._close_timeout=setTimeout(()=>{this.is_rendered.set(false),this._close_timeout=null;},200);}onEscape(){this.is_open()&&this.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["user-controls-sidebar"]],hostBindings:function(t,i){t&1&&He("keydown.escape",function(){return i.onEscape()},g5);},ngContentSelectors:Qc,decls:4,vars:1,consts:[["icon","","matRipple","","avatar","","type","button","name","user-controls",1,"bg-base-200","flex","h-10","w-10","items-center","justify-center","rounded-full",3,"click"],[1,"fixed","inset-0","z-9999","overflow-hidden"],[1,"text-2xl"],["type","button","aria-label","Close user controls",1,"absolute","inset-0","bg-black","transition-opacity","duration-200",3,"click"],[1,"absolute","inset-y-0","right-0","flex","max-w-full"],[1,"bg-base-100","relative","h-full","w-80","max-w-[100vw]","overflow-auto","pt-[calc(env(safe-area-inset-top)+1rem)]","pb-[env(safe-area-inset-bottom)]","pr-[env(safe-area-inset-right)]","shadow-xl","transition-transform","duration-200","ease-out"],[3,"sidebar"],["icon","","default","","matRipple","","type","button",1,"absolute","top-[calc(env(safe-area-inset-top)+0.5rem)]","right-[calc(env(safe-area-inset-right)+0.5rem)]",3,"click"]],template:function(t,i){t&1&&(mn$1(),Pe(0,"button",0),He("click",function(){return i.open()}),Le(1,0,null,Zc,2,0),Ve(),Fe(3,Jc,8,9,"div",1)),t&2&&(ye(3),Ue(i.is_rendered()?3:-1));},dependencies:[Vl$1,V0,Det,Xa],encapsulation:2});}}return n})();var ed=["editor"];function td(n,o){if(n&1){let e=sC();Pe(0,"button",20),He("click",function(){J_(e);let i=qt(2);return ey(i.insertImage())}),Pe(1,"icon"),Ei(2,"image"),Ve()(),Pe(3,"button",20),He("click",function(){J_(e);let i=qt(2);return ey(i.insertAttachment())}),Pe(4,"icon"),Ei(5,"attachment"),Ve()();}}function id(n,o){if(n&1){let e=sC();Pe(0,"div",3)(1,"select",5),He("change",function(i){J_(e);let r=qt();return ey(r.setFontFace(i))}),Pe(2,"option",6),Ei(3,"Font"),Ve(),Pe(4,"option",7),Ei(5,"Arial"),Ve(),Pe(6,"option",8),Ei(7,"Helvetica"),Ve(),Pe(8,"option",9),Ei(9,"Georgia"),Ve(),Pe(10,"option",10),Ei(11,"Times New Roman"),Ve()(),Pe(12,"select",11),He("change",function(i){J_(e);let r=qt();return ey(r.setFontSize(i))}),Pe(13,"option",12),Ei(14,"Size"),Ve(),Pe(15,"option",13),Ei(16,"12"),Ve(),Pe(17,"option",14),Ei(18,"14"),Ve(),Pe(19,"option",15),Ei(20,"16"),Ve(),Pe(21,"option",16),Ei(22,"18"),Ve(),Pe(23,"option",17),Ei(24,"24"),Ve(),Pe(25,"option",18),Ei(26,"32"),Ve(),Pe(27,"option",19),Ei(28,"48"),Ve()(),Pe(29,"button",20),He("click",function(){J_(e);let i=qt();return ey(i.toggleBold())}),Pe(30,"icon"),Ei(31,"format_bold"),Ve()(),Pe(32,"button",20),He("click",function(){J_(e);let i=qt();return ey(i.toggleItalic())}),Pe(33,"icon"),Ei(34,"format_italic"),Ve()(),Pe(35,"button",20),He("click",function(){J_(e);let i=qt();return ey(i.toggleUnderline())}),Pe(36,"icon"),Ei(37,"format_underlined"),Ve()(),Pe(38,"button",20),He("click",function(){J_(e);let i=qt();return ey(i.makeUnorderedList())}),Pe(39,"icon"),Ei(40,"format_list_bulleted"),Ve()(),Pe(41,"button",20),He("click",function(){J_(e);let i=qt();return ey(i.makeOrderedList())}),Pe(42,"icon"),Ei(43,"format_list_numbered"),Ve()(),Pe(44,"button",20),He("click",function(){J_(e);let i=qt();return ey(i.insertLink())}),Pe(45,"icon"),Ei(46,"link"),Ve()(),Fe(47,td,6,0),Ve();}if(n&2){let e=qt();ye(29),Oe("border-info",e.toolbar_state().bold)("text-info",e.toolbar_state().bold),ye(3),Oe("border-info",e.toolbar_state().italic)("text-info",e.toolbar_state().italic),ye(3),Oe("border-info",e.toolbar_state().underline)("text-info",e.toolbar_state().underline),ye(3),Oe("border-info",e.toolbar_state().unordered_list)("text-info",e.toolbar_state().unordered_list),ye(3),Oe("border-info",e.toolbar_state().ordered_list)("text-info",e.toolbar_state().ordered_list),ye(3),Oe("border-info",e.toolbar_state().link)("text-info",e.toolbar_state().link),ye(3),Ue(e.images_allowed()?47:-1);}}var Pa=(()=>{class n extends Ws$1{constructor(){super(...arguments),this._uploads=m(HQe),this._dom_sanitizer=m(nl$1),this._ng_zone=m(G),this.placeholder=Xi(""),this.readonly=Xi(false),this.images_allowed=Xi(false),this._editor_el=np("editor"),this._onChange=()=>{},this._onTouch=()=>{},this.toolbar_state=R({bold:false,italic:false,underline:false,unordered_list:false,ordered_list:false,link:false}),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e,this._syncValue=()=>{this._editor&&this.setValue(this._editor.getHTML());},this._handleTouched=()=>{this._editor&&this._onTouch();},this._refreshToolbarState=()=>{this._editor&&this._ng_zone.run(()=>{this.toolbar_state.set({bold:this._editor.hasFormat("B"),italic:this._editor.hasFormat("I"),underline:this._editor.hasFormat("U"),unordered_list:this._editor.hasFormat("UL"),ordered_list:this._editor.hasFormat("OL"),link:this._editor.hasFormat("A")});});};}ngOnChanges(e){e.placeholder&&this.timeout("init",()=>this._initialiseEditor()),e.readonly&&this._editor&&this._setReadonlyState();}ngAfterViewInit(){this.timeout("init",()=>this._initialiseEditor());}setValue(e){this._onChange(e);}writeValue(e){this.timeout("write",()=>{this._editor?(this._editor.setHTML(e||""),this._setPlaceholder()):this.timeout("write",()=>this.writeValue(e));});}toggleBold(){this._toggleFormat("B",()=>this._editor.removeBold(),()=>this._editor.bold());}toggleItalic(){this._toggleFormat("I",()=>this._editor.removeItalic(),()=>this._editor.italic());}toggleUnderline(){this._toggleFormat("U",()=>this._editor.removeUnderline(),()=>this._editor.underline());}makeUnorderedList(){this._toggleFormat("UL",()=>this._editor.removeList(),()=>this._editor.makeUnorderedList());}makeOrderedList(){this._toggleFormat("OL",()=>this._editor.removeList(),()=>this._editor.makeOrderedList());}insertLink(){if(!this._editor)return;if(this._editor.hasFormat("A")){this._editor.removeLink(),this._syncValue(),this._refreshToolbarState();return}let e=prompt("Enter URL");e&&(this._editor.makeLink(e),this._syncValue(),this._refreshToolbarState());}setFontFace(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontFace(t==="default"?"inherit":t),this._syncValue());}setFontSize(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontSize(t),this._syncValue());}insertImage(){this._embedFile(true);}insertAttachment(){this._embedFile(false);}async _initialiseEditor(){let e=this._editor_el()?.nativeElement;if(!e)return this.timeout("init",()=>this._initialiseEditor());let{default:t}=await import('./squire-CRXfBZqR.js');this._editor&&this._editor.destroy(),e.innerHTML="",this._editor=new t(e,{blockTag:"div",sanitizeToDOMFragment:i=>{let r=this._dom_sanitizer.sanitize(wr.HTML,i||"")||"",d=document.createElement("template");return d.innerHTML=r,d.content.cloneNode(true)}}),this._editor.addEventListener("input",this._syncValue),this._editor.addEventListener("blur",this._handleTouched),this._editor.addEventListener("cursor",this._refreshToolbarState),this._editor.addEventListener("select",this._refreshToolbarState),this._editor.addEventListener("pathChange",this._refreshToolbarState),this._setReadonlyState(),this._setPlaceholder(),this._refreshToolbarState();}_embedFile(e){if(!this._editor)return;let t=document.createElement("input");t.setAttribute("type","file"),e&&t.setAttribute("accept","image/*"),t.click(),t.onchange=()=>{let i=t.files?.[0];i&&this._uploads.uploadFile(i,true).then(r=>{if(!r)return;let d=`${location.origin}/api/engine/v2/uploads/${encodeURIComponent(r)}/url`;this._setAuth(),setTimeout(()=>{this._insertUploadedFile(d,i,e),this._syncValue();},100);});};}_setReadonlyState(){let e=this._editor_el()?.nativeElement;e&&e.setAttribute("contenteditable",`${!this.readonly()}`);}_setPlaceholder(){let e=this._editor_el()?.nativeElement;e&&e.setAttribute("data-placeholder",this.placeholder()||"");}_toggleFormat(e,t,i){this._editor&&(this._editor.hasFormat(e)?t():i(),this._syncValue(),this._refreshToolbarState());}_insertUploadedFile(e,t,i){let r=t.type.startsWith("image/");if(i||r){this._editor.insertHTML(`<img src="${e}" alt="${t.name}" />`);return}this._editor.insertHTML(`<a href="${e}" target="_blank">${t.name}</a>`);}_setAuth(){let e=Zt$1();document.cookie=`${e==="x-api-key"?"api-key="+encodeURIComponent(Sl$1()):"bearer_token="+encodeURIComponent(e)};max-age=30;path=/api/engine/v2/uploads;samesite=strict;${location.protocol==="https:"?"secure;":""}`;}static{this.\u0275fac=(()=>{let e;return function(i){return (e||(e=Et$1(n)))(i||n)}})();}static{this.\u0275cmp=Ie({type:n,selectors:[["rich-text-input"]],viewQuery:function(t,i){t&1&&nE(i._editor_el,ed,5),t&2&&rE();},inputs:{placeholder:[1,"placeholder"],readonly:[1,"readonly"],images_allowed:[1,"images_allowed"]},features:[qe([{provide:jo,useExisting:tn$1(()=>n),multi:true}]),xe,wt],decls:5,vars:1,consts:[["container",""],["editor",""],[1,"w-full"],[1,"border-base-300","bg-base-100","flex","flex-wrap","items-center","gap-1","rounded-t","border","p-2"],[1,"squire-editor"],[1,"border-base-300","bg-base-100","rounded","border","p-2","text-sm",3,"change"],["value","default"],["value","Arial"],["value","Helvetica"],["value","Georgia"],["value","Times New Roman"],[1,"border-base-300","bg-base-100","min-w-24","rounded","border","p-2","text-sm",3,"change"],["value",""],["value","12px"],["value","14px"],["value","16px"],["value","18px"],["value","24px"],["value","32px"],["value","48px"],["icon","","type","button",1,"border-base-300","rounded","border","px-2","py-1","text-sm",3,"click"]],template:function(t,i){t&1&&(Pe(0,"div",2,0),Fe(2,id,48,25,"div",3),Wt(3,"div",4,1),Ve()),t&2&&(ye(2),Ue(i.readonly()?-1:2));},dependencies:[Det],styles:[`[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]     .squire-editor{border-radius:.25rem;border:1px solid var(--base-300);padding:.5rem;min-height:8rem;width:100%;outline:none}[_nghost-%COMP%]     .squire-editor:empty:before{content:attr(data-placeholder);color:var(--base-content);opacity:.5}[_nghost-%COMP%]     .squire-editor ul{list-style-type:disc;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor ol{list-style-type:decimal;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor li{margin:.125rem 0}
/*# sourceMappingURL=rich-text-input.component.css.map */`]});}}return n})();var nd=(n,o)=>o.id+""+n;function od(n,o){if(n&1&&(Pe(0,"a",1)(1,"icon",2),Ei(2),Ve(),Pe(3,"span",3),Ei(4),Ve()()),n&2){let e=qt().$implicit;Or("routerLink",e.route),ye(2),iu(e.icon),ye(2),iu(e.name);}}function rd(n,o){if(n&1){let e=sC();Pe(0,"button",6),He("click",function(){J_(e);let i=qt(2).$implicit,r=qt();return ey(r.toggleBlock(i.id||i._id))}),Pe(1,"icon",2),Ei(2),Ve(),Pe(3,"div",7),Ei(4),Ve(),Pe(5,"icon",8),Ei(6,"arrow_drop_down"),Ve()();}if(n&2){let e=qt(2).$implicit;ye(2),Fo(" ",e.icon," "),ye(2),Fo(" ",e.name," ");}}function ad(n,o){if(n&1&&(Pe(0,"a",9),Wt(1,"icon",8),Pe(2,"span"),Ei(3),Ve()()),n&2){let e=o.$implicit;Or("routerLink",e.route),ye(3),iu(e.name);}}function sd(n,o){if(n&1&&(Pe(0,"section",5),Y4(1,ad,4,2,"a",9,z4),Ve()),n&2){let e=qt(2).$implicit,t=qt();Or("@show",t.isBlockCollapsed(e.id||e._id)?"hide":"show"),ye(),W4(e.children);}}function ld(n,o){if(n&1&&(Fe(0,rd,7,2,"button",4),Fe(1,sd,3,1,"section",5)),n&2){let e=qt().$implicit;Ue(e.children?.length?0:-1),ye(),Ue(e.children?.length?1:-1);}}function cd(n,o){if(n&1&&Fe(0,od,5,3,"a",1)(1,ld,2,2),n&2){let e=o.$implicit;Ue(e.children?1:0);}}var Hv=(()=>{class n extends Ws$1{constructor(){super(),this._settings=m(ta),this._org=m(gT),this._element_ref=m(j),this.show_block=R({}),this.links=[],this.filtered_links=R([]),ft(()=>{this._org.active_building()&&this.timeout("update_links",()=>this.updateFilteredLinks(),500);});}get feature_list(){return this._settings.get("app.features")||[]}get feature_groups(){return this._settings.get("app.feature_groups")||{}}get is_admin(){let e=ao().groups||[],t=this._settings.get("app.admin_group")||"admin";return e.includes(t)||e.includes("placeos_admin")||e.includes("placeos_support")}async ngOnInit(){await this._org.waitUntilInitialised(),this.links=[{name:_r("APP.CONCIERGE.MENU_BOOKINGS"),icon:"add_circle",children:[{id:"spaces",name:_r("APP.CONCIERGE.MENU_ROOM_BOOKINGS"),route:["/book/rooms"]},{id:"desks",name:_r("APP.CONCIERGE.MENU_DESK_BOOKINGS"),route:["/book/desks/events"]},{id:"parking",name:_r("APP.CONCIERGE.MENU_PARKING_BOOKINGS"),route:["/book/parking/events"]},{id:"parking-bookings",name:_r("APP.CONCIERGE.MENU_PARKING_BOOKINGS"),route:["/book/parking/events"]},{id:"lockers",name:_r("APP.CONCIERGE.MENU_LOCKER_BOOKINGS"),route:["/book/lockers/events"]},{id:"assets",name:_r("APP.CONCIERGE.MENU_ASSET_BOOKINGS"),route:["/book/assets/list/requests"]},{id:"catering",name:_r("APP.CONCIERGE.MENU_CATERING_BOOKINGS"),route:["/book/catering/orders"]},{id:"visitors",name:_r("APP.CONCIERGE.MENU_VISITOR_BOOKINGS"),route:["/book/visitors"]},{id:"visitor-rules",name:_r("APP.CONCIERGE.MENU_VISITOR_RULES"),route:["/book/visitors/rules"]}]},{id:"facilities",name:_r("APP.CONCIERGE.MENU_MANAGEMENT"),icon:"place",children:[{id:"zones",name:_r("APP.CONCIERGE.MENU_MANAGE_ZONES"),route:["/zone-management"]},{id:"spaces",name:_r("APP.CONCIERGE.MENU_MANAGE_ROOMS"),route:["/room-management"]},{id:"desks",name:_r("APP.CONCIERGE.MENU_MANAGE_DESKS"),route:["/book/desks/manage"]},{id:"parking",name:_r("APP.CONCIERGE.MENU_MANAGE_PARKING"),route:["/book/parking/manage"]},{id:"parking-manage",name:_r("APP.CONCIERGE.MENU_MANAGE_PARKING"),route:["/book/parking/manage"]},{id:"lockers",name:_r("APP.CONCIERGE.MENU_MANAGE_LOCKERS"),route:["/book/lockers/manage"]},{id:"catering",name:_r("APP.CONCIERGE.MENU_MANAGE_CATERING"),route:["/book/catering/menu"]},{id:"points",name:_r("APP.CONCIERGE.MENU_MANAGE_POINTS"),route:["/points-management"]},{id:"emergency-contacts",name:_r("APP.CONCIERGE.MENU_MANAGE_CONTACTS"),icon:"assignment_ind",route:["/users/staff/emergency-contacts"]},{id:"signage",name:_r("APP.CONCIERGE.MENU_MANAGE_SIGNAGE"),route:["/signage"]},{id:"points-of-interest",name:_r("APP.CONCIERGE.MENU_MANAGE_MAP_FEATURES"),route:["/points-of-interest"]},{id:"url-management",name:_r("APP.CONCIERGE.MENU_MANAGE_URLS"),route:["/url-management"]},{id:"email-templates",name:_r("APP.CONCIERGE.MENU_MANAGE_EMAILS"),route:["/email-templates"]},{id:"deals-n-offers",name:_r("APP.CONCIERGE.MENU_MANAGE_DEALS"),route:["/deals-n-offers"]}]},{id:"assets",name:_r("APP.CONCIERGE.MENU_ASSETS"),route:["/book/assets/list/items"],icon:"vibration"},{id:"internal-users",name:_r("APP.CONCIERGE.MENU_USER_LIST"),icon:"assignment_ind",route:["/users/staff"]},{id:"events",name:_r("APP.CONCIERGE.MENU_EVENTS"),route:["/entertainment/events"],icon:"confirmation_number"},{id:"surveys",name:_r("APP.CONCIERGE.MENU_SURVEYS"),route:["/surveys"],icon:"add_reaction"},{_id:"reports",name:_r("APP.CONCIERGE.MENU_REPORTS"),icon:"analytics",children:[{id:"attendance-report",name:_r("APP.CONCIERGE.MENU_REPORT_SITE_ATTENDANCE"),route:["/reports/attendance"]},{id:"booking-report",name:_r("APP.CONCIERGE.MENU_REPORT_ROOMS"),route:["/reports/bookings"]},{id:"desk-report",name:_r("APP.CONCIERGE.MENU_REPORT_DESKS"),route:["/reports/desks"]},{id:"parking-report",name:_r("APP.CONCIERGE.MENU_REPORT_PARKING"),route:["/reports/parking"]},{id:"lockers-report",name:_r("APP.CONCIERGE.MENU_REPORT_LOCKERS"),route:["/reports/lockers"]},{id:"catering-report",name:_r("APP.CONCIERGE.MENU_REPORT_CATERING"),route:["/reports/catering"]},{id:"contact-tracing-report",name:_r("APP.CONCIERGE.MENU_REPORT_CONTACT_TRACING"),route:["/reports/contact-tracing"]},{id:"assets-report",name:_r("APP.CONCIERGE.MENU_REPORT_ASSETS"),route:["/reports/assets"]},{id:"visitors-report",name:_r("APP.CONCIERGE.MENU_REPORT_VISITORS"),route:["/reports/visitors"]}]}],this.updateFilteredLinks(),this.timeout("update_inview",()=>this._moveActiveLinkIntoView(),50),this.timeout("update_links",()=>this.updateFilteredLinks(),500);}_isFeatureAvailable(e){if(e.startsWith("*"))return  true;let t=this.feature_list.includes(e),i=this.feature_groups[e]||[],r=ao().groups;return !!(t&&(this.is_admin||!i.length||r.find(d=>i.includes(d))))}updateFilteredLinks(){let e=this._settings.get("app.custom_reports")||[];if(e.length&&this.links.find(t=>t._id==="reports")){let t=this.links.find(i=>i._id==="reports");t.children=Oi(t.children.concat(e.map(i=>m$1(l({},i),{id:`*${i.id}`,route:["/reports",i.id]}))),"id");}if(this.filtered_links.set(this.links.map(t=>m$1(l({},t),{children:t.children?t.children.filter(i=>this._isFeatureAvailable(i.id)):null})).filter(t=>(!t.id||t.id==="home"||this._isFeatureAvailable(t.id))&&t.route||t.children?.length)),this.filtered_links().find(t=>t.id==="home")){let t=this.filtered_links().find(i=>i.id==="home");t.route=this._settings.get("app.default_route")||["/"];}this.is_admin||this.filtered_links.update(t=>t.filter(i=>i.id!=="facilities"));}toggleBlock(e){this.show_block.update(t=>m$1(l({},t),{[e]:!t[e]}));}isBlockCollapsed(e){return !!this.show_block()[e]}_moveActiveLinkIntoView(){let e=this._element_ref.nativeElement.querySelector("a.active");e&&e.scrollIntoView({block:"center",behavior:"instant"});}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["app-sidebar"]],features:[xe],decls:3,vars:0,consts:[[1,"border-base-200","h-full","w-64","overflow-auto","border-r","py-2","pr-3"],["matRipple","","routerLinkActive","active",1,"hover:bg-base-200","my-1","flex","w-full","items-center","space-x-2","rounded-r-full","p-1",3,"routerLink"],[1,"text-2xl","opacity-60"],[1,"font-medium"],["matRipple","",1,"hover:bg-base-200","my-1","flex","w-full","items-center","space-x-2","rounded-r-full","p-1"],[1,"w-full","overflow-hidden"],["matRipple","",1,"hover:bg-base-200","my-1","flex","w-full","items-center","space-x-2","rounded-r-full","p-1",3,"click"],[1,"flex-1","text-left","font-medium"],[1,"text-2xl"],["routerLinkActive","active",1,"hover:bg-base-200","my-1","flex","w-full","items-center","space-x-2","rounded-r-full","p-1",3,"routerLink"]],template:function(t,i){t&1&&(Pe(0,"div",0),Y4(1,cd,2,1,null,null,nd),Ve()),t&2&&(ye(),W4(i.filtered_links()));},dependencies:[nX,Ev,ZQ,Vl$1,V0,Det],styles:[`[_nghost-%COMP%]{height:100%}a.active[_ngcontent-%COMP%]{background-color:var(--secondary);color:var(--secondary-content)}a.active[_ngcontent-%COMP%]:hover{color:var(--base-content);opacity:.75}
/*# sourceMappingURL=app-sidebar.component.css.map */`],data:{animation:[lJe]}});}}return n})();var dd=()=>["/"],Zv=(()=>{class n{constructor(){this._settings=m(ta),this._theme=this._settings.theme_signal,this._logo_dark=this._settings.signal("app.logo_dark",{},true),this._logo_light=this._settings.signal("app.logo_light",{},true),this.logo_src=O(()=>{let e=this.logo();return typeof e=="string"?e:e?.src||""}),this.logo=O(()=>(this._theme()==="dark"?this._logo_dark():this._logo_light())||{}),this.user=$te();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ie({type:n,selectors:[["app-topbar"]],decls:10,vars:4,consts:[[1,"border-base-200","flex","items-center","border-b","p-2"],[1,"w-64"],[3,"routerLink"],["auth","",1,"h-12",3,"source"],[1,"flex","flex-1","items-center","justify-end","space-x-2"],["btn","","icon","","matRipple",""],[1,"text-2xl"],[1,"mr-2"],[3,"user"]],template:function(t,i){t&1&&(Pe(0,"div",0)(1,"div",1)(2,"a",2),Wt(3,"img",3),Ve()(),Pe(4,"div",4)(5,"button",5)(6,"icon",6),Ei(7,"notifications"),Ve()(),Pe(8,"user-controls-sidebar",7),Wt(9,"a-user-avatar",8),Ve()()()),t&2&&(ye(2),Or("routerLink",H6(3,dd)),ye(),Or("source",i.logo_src()),ye(6),Or("user",i.user()));},dependencies:[nX,Ev,Yn,Vl$1,V0,Et,Det,Ya],styles:[`[_nghost-%COMP%]{width:100%}
/*# sourceMappingURL=app-topbar.component.css.map */`]});}}return n})();export{Da as D,Et as E,Fa as F,Hv as H,Kn as K,Pa as P,Qt as Q,Ra as R,Tt as T,Wn as W,Xn as X,Yn as Y,Zv as Z,tt as a,Zt as b,ct as c,bi as d,ei as e,Ta as f,ga as g,js as h,ii as i,jn as j,Zn as k,lt as l,Qn as m,nh as n,ki as o,ri as r,ti as t,ua as u,vi as v};//# sourceMappingURL=chunk-B0XL9TgV.js.map
