import {m,o as oa,R,hp as mne,E as Ee,c8 as AX,c9 as RE,G as Gl$1,t as tN,j as gtt,k as ke,B as Bt,a as Be,q as yi,J as me,P as An$1,aZ as h9,b as ao,c as wT,b4 as j,w as w$1,g as ot,bp as xi,y as yr,bw as Oi,an as m$1,ao as l,aN as XJe,ce as vX,p as we,C as y6,W as v6,hq as Yke,cP as Vp,hr as RV,hs as OV,ht as MV,hu as NV,dq as K,dB as le,dC as se,fD as la$1,fE as ett,dD as At,fF as km,h as cx,fS as of,dF as It,fQ as br,dL as $t$1,b5 as je,fR as Xg,e$ as Pr,hv as V0,dG as E,dH as en$1,fT as O,ga as jet,gb as Get,eh as Yo,fZ as Rs$1,f_ as $n$1,f8 as kt,fW as Ns$1,cu as re,f7 as xe$1,fa as ue,hw as Zg,bv as Zp,cM as Qp,dK as vv,hx as X0,hy as qf,gX as We,g4 as lt,g0 as Jn,hz as Z0,fI as $0,gc as vr,hA as lre,bb as Et,dN as be,dP as lu,b2 as Zt$1,H as He,z as Le,bR as NA,ap as Yn,F as hv,bz as Ge$1,T as Fe,Y as qe,hB as Qg,fK as wde,U as Oe,dQ as Mn$1,dR as Ae,dS as De,fL as to,i as eW,fM as Rde,b1 as Qt$1,b9 as Ci,ba as N,bf as V,h9 as Us$1,hf as xm,cI as Gt,fJ as rF,h0 as W,dE as ts$1,dI as yn$1,dJ as jl$1,b3 as Pe,fG as Me,h4 as Cm,h5 as Dm,hC as ure,gq as mp,bS as AP,gr as ep,ae as IC,dd as Hs$1,aF as LCe,hj as rre,aO as pXe,aP as hXe,n as trt,aS as KW,r as rp,O as AC,cy as l$,e6 as NXe,$ as MT,a0 as rl$1,ah as M2,gi as GT,aa as N2,ai as ht,v as vW,d7 as Iit,d8 as Sit,d9 as Tit,da as bit,db as xfe,Z as Znt,S as Sue,_ as _6,V as Vo,bA as Wo,gj as mde,bB as rn$1,af as su,ag as au,hD as ol$1,fP as $,hE as Or,gs as Ht,gt as Xo,l as txe,K as KMe,X as XJ,bO as FCe,a5 as Dn$1,s as so,a6 as cLe,hF as dLe,d2 as uLe,eb as Xte,hk as bLe,a8 as Nl$1,e4 as Ol$1,e9 as Jo,hG as es$1,bn as Ai,bJ as Qa$1,bo as yt,bI as Qr,ac as Vv,bq as nue,a7 as K7,ay as DC,dM as rtt,dO as qo,dn as On$1,cT as Je$1,cQ as cR,hH as fl$1,ak as Ks$1,hI as FE,gd as Um,aB as bt,aD as cu,aC as SC,fO as Ut,g6 as ca$1,g8 as aa$1,g9 as Bm,fX as Z,g5 as ki,hJ as Jh,aE as Sle,aU as OT,av as GV,br as Int,bs as Tnt,u as f4,Q as p4,b_ as g9,aj as kn$1,ad as D9,az as bF,g$ as F,hK as Lb,d as Ene,e2 as Ni,fh as Tm,hL as R3,hM as sxe,bY as qrt,cw as EC,cx as bC,hN as lV,hO as OE,hP as sNe,hQ as SV,hR as IV,cU as kr,ef as JR,hS as r2,hT as t$,h8 as uf,fH as ze$1,hU as Tv$1,hV as mfe,ep as M1e,hW as B2,ab as wb,ax as AF,aA as IF,aV as $ue,d6 as Ort,aW as Mrt,hX as dt,cD as nW,hY as Xr,dg as an$1,dh as uv,aX as dy,aY as uy,di as mn$1,aq as ip,ge as Ft,cE as HK,bd as o9,hZ as $K,dx as g6,be as VD,c1 as Qy}from'./main.js';function aa(n,o){let e=Xa(o)?new o(0):Je$1(o,0);return e.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),e.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e}function Xa(n){return typeof n=="function"&&n.prototype?.constructor===n}var Ka=10,Yi=class{subPriority=0;validate(o,e){return  true}},Qi=class extends Yi{constructor(o,e,t,i,r){super(),this.value=o,this.validateValue=e,this.setValue=t,this.priority=i,r&&(this.subPriority=r);}validate(o,e){return this.validateValue(o,this.value,e)}set(o,e,t){return this.setValue(o,e,this.value,t)}},Zi=class extends Yi{priority=Ka;subPriority=-1;constructor(o,e){super(),this.context=o||(t=>Je$1(e,t));}set(o,e){return e.timestampIsSet?o:Je$1(o,aa(o,this.context))}};var w=class{run(o,e,t,i){let r=this.parse(o,e,t,i);return r?{setter:new Qi(r.value,this.validate,this.set,this.priority,this.subPriority),rest:r.rest}:null}validate(o,e,t){return  true}};var Ji=class extends w{priority=140;parse(o,e,t){switch(e){case "G":case "GG":case "GGG":return t.era(o,{width:"abbreviated"})||t.era(o,{width:"narrow"});case "GGGGG":return t.era(o,{width:"narrow"});default:return t.era(o,{width:"wide"})||t.era(o,{width:"abbreviated"})||t.era(o,{width:"narrow"})}}set(o,e,t){return e.era=t,o.setFullYear(t,0,1),o.setHours(0,0,0,0),o}incompatibleTokens=["R","u","t","T"]};var z={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},ze={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function Q(n,o){return n&&{value:o(n.value),rest:n.rest}}function U(n,o){let e=o.match(n);return e?{value:parseInt(e[0],10),rest:o.slice(e[0].length)}:null}function Ge(n,o){let e=o.match(n);if(!e)return null;if(e[0]==="Z")return {value:0,rest:o.slice(1)};let t=e[1]==="+"?1:-1,i=e[2]?parseInt(e[2],10):0,r=e[3]?parseInt(e[3],10):0,d=e[5]?parseInt(e[5],10):0;return {value:t*(i*lV+r*OE+d*sNe),rest:o.slice(e[0].length)}}function en(n){return U(z.anyDigitsSigned,n)}function A(n,o){switch(n){case 1:return U(z.singleDigit,o);case 2:return U(z.twoDigits,o);case 3:return U(z.threeDigits,o);case 4:return U(z.fourDigits,o);default:return U(new RegExp("^\\d{1,"+n+"}"),o)}}function qt(n,o){switch(n){case 1:return U(z.singleDigitSigned,o);case 2:return U(z.twoDigitsSigned,o);case 3:return U(z.threeDigitsSigned,o);case 4:return U(z.fourDigitsSigned,o);default:return U(new RegExp("^-?\\d{1,"+n+"}"),o)}}function jt(n){switch(n){case "morning":return 4;case "evening":return 17;case "pm":case "noon":case "afternoon":return 12;default:return 0}}function tn(n,o){let e=o>0,t=e?o:1-o,i;if(t<=50)i=n||100;else {let r=t+50,d=Math.trunc(r/100)*100,x=n>=r%100;i=n+d-(x?100:0);}return e?i:1-i}function nn(n){return n%400===0||n%4===0&&n%100!==0}var on=class extends w{priority=130;incompatibleTokens=["Y","R","u","w","I","i","e","c","t","T"];parse(o,e,t){let i=r=>({year:r,isTwoDigitYear:e==="yy"});switch(e){case "y":return Q(A(4,o),i);case "yo":return Q(t.ordinalNumber(o,{unit:"year"}),i);default:return Q(A(e.length,o),i)}}validate(o,e){return e.isTwoDigitYear||e.year>0}set(o,e,t){let i=o.getFullYear();if(t.isTwoDigitYear){let d=tn(t.year,i);return o.setFullYear(d,0,1),o.setHours(0,0,0,0),o}let r=!("era"in e)||e.era===1?t.year:1-t.year;return o.setFullYear(r,0,1),o.setHours(0,0,0,0),o}};var rn=class extends w{priority=130;parse(o,e,t){let i=r=>({year:r,isTwoDigitYear:e==="YY"});switch(e){case "Y":return Q(A(4,o),i);case "Yo":return Q(t.ordinalNumber(o,{unit:"year"}),i);default:return Q(A(e.length,o),i)}}validate(o,e){return e.isTwoDigitYear||e.year>0}set(o,e,t,i){let r=FE(o,i);if(t.isTwoDigitYear){let x=tn(t.year,r);return o.setFullYear(x,0,i.firstWeekContainsDate),o.setHours(0,0,0,0),Ks$1(o,i)}let d=!("era"in e)||e.era===1?t.year:1-t.year;return o.setFullYear(d,0,i.firstWeekContainsDate),o.setHours(0,0,0,0),Ks$1(o,i)}incompatibleTokens=["y","R","u","Q","q","M","L","I","d","D","i","t","T"]};var an=class extends w{priority=130;parse(o,e){return e==="R"?qt(4,o):qt(e.length,o)}set(o,e,t){let i=Je$1(o,0);return i.setFullYear(t,0,4),i.setHours(0,0,0,0),fl$1(i)}incompatibleTokens=["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]};var sn=class extends w{priority=130;parse(o,e){return e==="u"?qt(4,o):qt(e.length,o)}set(o,e,t){return o.setFullYear(t,0,1),o.setHours(0,0,0,0),o}incompatibleTokens=["G","y","Y","R","w","I","i","e","c","t","T"]};var ln=class extends w{priority=120;parse(o,e,t){switch(e){case "Q":case "QQ":return A(e.length,o);case "Qo":return t.ordinalNumber(o,{unit:"quarter"});case "QQQ":return t.quarter(o,{width:"abbreviated",context:"formatting"})||t.quarter(o,{width:"narrow",context:"formatting"});case "QQQQQ":return t.quarter(o,{width:"narrow",context:"formatting"});default:return t.quarter(o,{width:"wide",context:"formatting"})||t.quarter(o,{width:"abbreviated",context:"formatting"})||t.quarter(o,{width:"narrow",context:"formatting"})}}validate(o,e){return e>=1&&e<=4}set(o,e,t){return o.setMonth((t-1)*3,1),o.setHours(0,0,0,0),o}incompatibleTokens=["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]};var cn=class extends w{priority=120;parse(o,e,t){switch(e){case "q":case "qq":return A(e.length,o);case "qo":return t.ordinalNumber(o,{unit:"quarter"});case "qqq":return t.quarter(o,{width:"abbreviated",context:"standalone"})||t.quarter(o,{width:"narrow",context:"standalone"});case "qqqqq":return t.quarter(o,{width:"narrow",context:"standalone"});default:return t.quarter(o,{width:"wide",context:"standalone"})||t.quarter(o,{width:"abbreviated",context:"standalone"})||t.quarter(o,{width:"narrow",context:"standalone"})}}validate(o,e){return e>=1&&e<=4}set(o,e,t){return o.setMonth((t-1)*3,1),o.setHours(0,0,0,0),o}incompatibleTokens=["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]};var dn=class extends w{incompatibleTokens=["Y","R","q","Q","L","w","I","D","i","e","c","t","T"];priority=110;parse(o,e,t){let i=r=>r-1;switch(e){case "M":return Q(U(z.month,o),i);case "MM":return Q(A(2,o),i);case "Mo":return Q(t.ordinalNumber(o,{unit:"month"}),i);case "MMM":return t.month(o,{width:"abbreviated",context:"formatting"})||t.month(o,{width:"narrow",context:"formatting"});case "MMMMM":return t.month(o,{width:"narrow",context:"formatting"});default:return t.month(o,{width:"wide",context:"formatting"})||t.month(o,{width:"abbreviated",context:"formatting"})||t.month(o,{width:"narrow",context:"formatting"})}}validate(o,e){return e>=0&&e<=11}set(o,e,t){return o.setMonth(t,1),o.setHours(0,0,0,0),o}};var mn=class extends w{priority=110;parse(o,e,t){let i=r=>r-1;switch(e){case "L":return Q(U(z.month,o),i);case "LL":return Q(A(2,o),i);case "Lo":return Q(t.ordinalNumber(o,{unit:"month"}),i);case "LLL":return t.month(o,{width:"abbreviated",context:"standalone"})||t.month(o,{width:"narrow",context:"standalone"});case "LLLLL":return t.month(o,{width:"narrow",context:"standalone"});default:return t.month(o,{width:"wide",context:"standalone"})||t.month(o,{width:"abbreviated",context:"standalone"})||t.month(o,{width:"narrow",context:"standalone"})}}validate(o,e){return e>=0&&e<=11}set(o,e,t){return o.setMonth(t,1),o.setHours(0,0,0,0),o}incompatibleTokens=["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]};function sa(n,o,e){let t=K(n,e?.in),i=IV(t,e)-o;return t.setDate(t.getDate()-i*7),K(t,e?.in)}var pn=class extends w{priority=100;parse(o,e,t){switch(e){case "w":return U(z.week,o);case "wo":return t.ordinalNumber(o,{unit:"week"});default:return A(e.length,o)}}validate(o,e){return e>=1&&e<=53}set(o,e,t,i){return Ks$1(sa(o,t,i),i)}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","i","t","T"]};function la(n,o,e){let t=K(n,e?.in),i=SV(t,e)-o;return t.setDate(t.getDate()-i*7),t}var un=class extends w{priority=100;parse(o,e,t){switch(e){case "I":return U(z.week,o);case "Io":return t.ordinalNumber(o,{unit:"week"});default:return A(e.length,o)}}validate(o,e){return e>=1&&e<=53}set(o,e,t){return fl$1(la(o,t))}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]};var Ya=[31,28,31,30,31,30,31,31,30,31,30,31],Qa=[31,29,31,30,31,30,31,31,30,31,30,31],_n=class extends w{priority=90;subPriority=1;parse(o,e,t){switch(e){case "d":return U(z.date,o);case "do":return t.ordinalNumber(o,{unit:"date"});default:return A(e.length,o)}}validate(o,e){let t=o.getFullYear(),i=nn(t),r=o.getMonth();return i?e>=1&&e<=Qa[r]:e>=1&&e<=Ya[r]}set(o,e,t){return o.setDate(t),o.setHours(0,0,0,0),o}incompatibleTokens=["Y","R","q","Q","w","I","D","i","e","c","t","T"]};var hn=class extends w{priority=90;subpriority=1;parse(o,e,t){switch(e){case "D":case "DD":return U(z.dayOfYear,o);case "Do":return t.ordinalNumber(o,{unit:"date"});default:return A(e.length,o)}}validate(o,e){let t=o.getFullYear();return nn(t)?e>=1&&e<=366:e>=1&&e<=365}set(o,e,t){return o.setMonth(0,t),o.setHours(0,0,0,0),o}incompatibleTokens=["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]};function $t(n,o,e){let t=kr(),i=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,r=K(n,e?.in),d=r.getDay(),O=(o%7+7)%7,$=7-i,ie=o<0||o>6?o-(d+$)%7:(O+$)%7-(d+$)%7;return kn$1(r,ie,e)}var fn=class extends w{priority=90;parse(o,e,t){switch(e){case "E":case "EE":case "EEE":return t.day(o,{width:"abbreviated",context:"formatting"})||t.day(o,{width:"short",context:"formatting"})||t.day(o,{width:"narrow",context:"formatting"});case "EEEEE":return t.day(o,{width:"narrow",context:"formatting"});case "EEEEEE":return t.day(o,{width:"short",context:"formatting"})||t.day(o,{width:"narrow",context:"formatting"});default:return t.day(o,{width:"wide",context:"formatting"})||t.day(o,{width:"abbreviated",context:"formatting"})||t.day(o,{width:"short",context:"formatting"})||t.day(o,{width:"narrow",context:"formatting"})}}validate(o,e){return e>=0&&e<=6}set(o,e,t,i){return o=$t(o,t,i),o.setHours(0,0,0,0),o}incompatibleTokens=["D","i","e","c","t","T"]};var gn=class extends w{priority=90;parse(o,e,t,i){let r=d=>{let x=Math.floor((d-1)/7)*7;return (d+i.weekStartsOn+6)%7+x};switch(e){case "e":case "ee":return Q(A(e.length,o),r);case "eo":return Q(t.ordinalNumber(o,{unit:"day"}),r);case "eee":return t.day(o,{width:"abbreviated",context:"formatting"})||t.day(o,{width:"short",context:"formatting"})||t.day(o,{width:"narrow",context:"formatting"});case "eeeee":return t.day(o,{width:"narrow",context:"formatting"});case "eeeeee":return t.day(o,{width:"short",context:"formatting"})||t.day(o,{width:"narrow",context:"formatting"});default:return t.day(o,{width:"wide",context:"formatting"})||t.day(o,{width:"abbreviated",context:"formatting"})||t.day(o,{width:"short",context:"formatting"})||t.day(o,{width:"narrow",context:"formatting"})}}validate(o,e){return e>=0&&e<=6}set(o,e,t,i){return o=$t(o,t,i),o.setHours(0,0,0,0),o}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]};var bn=class extends w{priority=90;parse(o,e,t,i){let r=d=>{let x=Math.floor((d-1)/7)*7;return (d+i.weekStartsOn+6)%7+x};switch(e){case "c":case "cc":return Q(A(e.length,o),r);case "co":return Q(t.ordinalNumber(o,{unit:"day"}),r);case "ccc":return t.day(o,{width:"abbreviated",context:"standalone"})||t.day(o,{width:"short",context:"standalone"})||t.day(o,{width:"narrow",context:"standalone"});case "ccccc":return t.day(o,{width:"narrow",context:"standalone"});case "cccccc":return t.day(o,{width:"short",context:"standalone"})||t.day(o,{width:"narrow",context:"standalone"});default:return t.day(o,{width:"wide",context:"standalone"})||t.day(o,{width:"abbreviated",context:"standalone"})||t.day(o,{width:"short",context:"standalone"})||t.day(o,{width:"narrow",context:"standalone"})}}validate(o,e){return e>=0&&e<=6}set(o,e,t,i){return o=$t(o,t,i),o.setHours(0,0,0,0),o}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]};function ca(n,o){let e=K(n,o?.in).getDay();return e===0?7:e}function da(n,o,e){let t=K(n,e?.in),i=ca(t,e),r=o-i;return kn$1(t,r,e)}var vn=class extends w{priority=90;parse(o,e,t){let i=r=>r===0?7:r;switch(e){case "i":case "ii":return A(e.length,o);case "io":return t.ordinalNumber(o,{unit:"day"});case "iii":return Q(t.day(o,{width:"abbreviated",context:"formatting"})||t.day(o,{width:"short",context:"formatting"})||t.day(o,{width:"narrow",context:"formatting"}),i);case "iiiii":return Q(t.day(o,{width:"narrow",context:"formatting"}),i);case "iiiiii":return Q(t.day(o,{width:"short",context:"formatting"})||t.day(o,{width:"narrow",context:"formatting"}),i);default:return Q(t.day(o,{width:"wide",context:"formatting"})||t.day(o,{width:"abbreviated",context:"formatting"})||t.day(o,{width:"short",context:"formatting"})||t.day(o,{width:"narrow",context:"formatting"}),i)}}validate(o,e){return e>=1&&e<=7}set(o,e,t){return o=da(o,t),o.setHours(0,0,0,0),o}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]};var xn=class extends w{priority=80;parse(o,e,t){switch(e){case "a":case "aa":case "aaa":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"})||t.dayPeriod(o,{width:"narrow",context:"formatting"});case "aaaaa":return t.dayPeriod(o,{width:"narrow",context:"formatting"});default:return t.dayPeriod(o,{width:"wide",context:"formatting"})||t.dayPeriod(o,{width:"abbreviated",context:"formatting"})||t.dayPeriod(o,{width:"narrow",context:"formatting"})}}set(o,e,t){return o.setHours(jt(t),0,0,0),o}incompatibleTokens=["b","B","H","k","t","T"]};var kn=class extends w{priority=80;parse(o,e,t){switch(e){case "b":case "bb":case "bbb":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"})||t.dayPeriod(o,{width:"narrow",context:"formatting"});case "bbbbb":return t.dayPeriod(o,{width:"narrow",context:"formatting"});default:return t.dayPeriod(o,{width:"wide",context:"formatting"})||t.dayPeriod(o,{width:"abbreviated",context:"formatting"})||t.dayPeriod(o,{width:"narrow",context:"formatting"})}}set(o,e,t){return o.setHours(jt(t),0,0,0),o}incompatibleTokens=["a","B","H","k","t","T"]};var yn=class extends w{priority=80;parse(o,e,t){switch(e){case "B":case "BB":case "BBB":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"})||t.dayPeriod(o,{width:"narrow",context:"formatting"});case "BBBBB":return t.dayPeriod(o,{width:"narrow",context:"formatting"});default:return t.dayPeriod(o,{width:"wide",context:"formatting"})||t.dayPeriod(o,{width:"abbreviated",context:"formatting"})||t.dayPeriod(o,{width:"narrow",context:"formatting"})}}set(o,e,t){return o.setHours(jt(t),0,0,0),o}incompatibleTokens=["a","b","t","T"]};var Cn=class extends w{priority=70;parse(o,e,t){switch(e){case "h":return U(z.hour12h,o);case "ho":return t.ordinalNumber(o,{unit:"hour"});default:return A(e.length,o)}}validate(o,e){return e>=1&&e<=12}set(o,e,t){let i=o.getHours()>=12;return i&&t<12?o.setHours(t+12,0,0,0):!i&&t===12?o.setHours(0,0,0,0):o.setHours(t,0,0,0),o}incompatibleTokens=["H","K","k","t","T"]};var Mn=class extends w{priority=70;parse(o,e,t){switch(e){case "H":return U(z.hour23h,o);case "Ho":return t.ordinalNumber(o,{unit:"hour"});default:return A(e.length,o)}}validate(o,e){return e>=0&&e<=23}set(o,e,t){return o.setHours(t,0,0,0),o}incompatibleTokens=["a","b","h","K","k","t","T"]};var wn=class extends w{priority=70;parse(o,e,t){switch(e){case "K":return U(z.hour11h,o);case "Ko":return t.ordinalNumber(o,{unit:"hour"});default:return A(e.length,o)}}validate(o,e){return e>=0&&e<=11}set(o,e,t){return o.getHours()>=12&&t<12?o.setHours(t+12,0,0,0):o.setHours(t,0,0,0),o}incompatibleTokens=["h","H","k","t","T"]};var Tn=class extends w{priority=70;parse(o,e,t){switch(e){case "k":return U(z.hour24h,o);case "ko":return t.ordinalNumber(o,{unit:"hour"});default:return A(e.length,o)}}validate(o,e){return e>=1&&e<=24}set(o,e,t){let i=t<=24?t%24:t;return o.setHours(i,0,0,0),o}incompatibleTokens=["a","b","h","H","K","t","T"]};var En=class extends w{priority=60;parse(o,e,t){switch(e){case "m":return U(z.minute,o);case "mo":return t.ordinalNumber(o,{unit:"minute"});default:return A(e.length,o)}}validate(o,e){return e>=0&&e<=59}set(o,e,t){return o.setMinutes(t,0,0),o}incompatibleTokens=["t","T"]};var In=class extends w{priority=50;parse(o,e,t){switch(e){case "s":return U(z.second,o);case "so":return t.ordinalNumber(o,{unit:"second"});default:return A(e.length,o)}}validate(o,e){return e>=0&&e<=59}set(o,e,t){return o.setSeconds(t,0),o}incompatibleTokens=["t","T"]};var Sn=class extends w{priority=30;parse(o,e){let t=i=>Math.trunc(i*Math.pow(10,-e.length+3));return Q(A(e.length,o),t)}set(o,e,t){return o.setMilliseconds(t),o}incompatibleTokens=["t","T"]};var On=class extends w{priority=10;parse(o,e){switch(e){case "X":return Ge(ze.basicOptionalMinutes,o);case "XX":return Ge(ze.basic,o);case "XXXX":return Ge(ze.basicOptionalSeconds,o);case "XXXXX":return Ge(ze.extendedOptionalSeconds,o);default:return Ge(ze.extended,o)}}set(o,e,t){return e.timestampIsSet?o:Je$1(o,o.getTime()-cR(o)-t)}incompatibleTokens=["t","T","x"]};var Rn=class extends w{priority=10;parse(o,e){switch(e){case "x":return Ge(ze.basicOptionalMinutes,o);case "xx":return Ge(ze.basic,o);case "xxxx":return Ge(ze.basicOptionalSeconds,o);case "xxxxx":return Ge(ze.extendedOptionalSeconds,o);default:return Ge(ze.extended,o)}}set(o,e,t){return e.timestampIsSet?o:Je$1(o,o.getTime()-cR(o)-t)}incompatibleTokens=["t","T","X"]};var Dn=class extends w{priority=40;parse(o){return en(o)}set(o,e,t){return [Je$1(o,t*1e3),{timestampIsSet:true}]}incompatibleTokens="*"};var An=class extends w{priority=20;parse(o){return en(o)}set(o,e,t){return [Je$1(o,t),{timestampIsSet:true}]}incompatibleTokens="*"};var ma={G:new Ji,y:new on,Y:new rn,R:new an,u:new sn,Q:new ln,q:new cn,M:new dn,L:new mn,w:new pn,I:new un,d:new _n,D:new hn,E:new fn,e:new gn,c:new bn,i:new vn,a:new xn,b:new kn,B:new yn,h:new Cn,H:new Mn,K:new wn,k:new Tn,m:new En,s:new In,S:new Sn,X:new On,x:new Rn,t:new Dn,T:new An};var Za=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ja=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,es=/^'([^]*?)'?$/,ts=/''/g,is=/\S/,ns=/[a-zA-Z]/;function pa(n,o,e,t){let i=()=>Je$1(e,NaN),r=Yke(),d=r.locale??Vp,x=r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,O=r.weekStartsOn??r.locale?.options?.weekStartsOn??0;let $={firstWeekContainsDate:x,weekStartsOn:O,locale:d},ie=[new Zi(t?.in,e)],_e=o.match(Ja).map(L=>{let Z=L[0];if(Z in RV){let Ae=RV[Z];return Ae(L,d.formatLong)}return L}).join("").match(Za),ke=[];for(let L of _e){OV(L)&&MV(L,o,n),NV(L)&&MV(L,o,n);let Z=L[0],Ae=ma[Z];if(Ae){let{incompatibleTokens:Mo}=Ae;if(Array.isArray(Mo)){let wo=ke.find(To=>Mo.includes(To.token)||To.token===Z);if(wo)throw new RangeError(`The format string mustn't contain \`${wo.fullToken}\` and \`${L}\` at the same time`)}else if(Ae.incompatibleTokens==="*"&&ke.length>0)throw new RangeError(`The format string mustn't contain \`${L}\` and any other token at the same time`);ke.push({token:Z,fullToken:L});let Xn=Ae.run(n,L,d.match,$);if(!Xn)return i();ie.push(Xn.setter),n=Xn.rest;}else {if(Z.match(ns))throw new RangeError("Format string contains an unescaped latin alphabet character `"+Z+"`");if(L==="''"?L="'":Z==="'"&&(L=os(L)),n.indexOf(L)===0)n=n.slice(L.length);else return i()}}if(n.length>0&&is.test(n))return i();let st=ie.map(L=>L.priority).sort((L,Z)=>Z-L).filter((L,Z,Ae)=>Ae.indexOf(L)===Z).map(L=>ie.filter(Z=>Z.priority===L).sort((Z,Ae)=>Ae.subPriority-Z.subPriority)).map(L=>L[0]),et=K(e,t?.in);if(isNaN(+et))return i();let ni={};for(let L of st){if(!L.validate(et,$))return i();let Z=L.set(et,ni,$);Array.isArray(Z)?(et=Z[0],Object.assign(ni,Z[1])):et=Z;}return et}function os(n){return n.match(es)[1].replace(ts,"'")}var rs=["determinateSpinner"];function as(n,o){if(n&1&&(NA(),ke(0,"svg",11),Bt(1,"circle",12),Be()),n&2){let e=bt();Ge$1("viewBox",e._viewBox()),me(),IC("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),Ge$1("r",e._circleRadius());}}var ss=new E("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:ua})}),ua=100,ls=10,Xt=(()=>{class n{_elementRef=m(j);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e;}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=m(ss),t=ure(),i=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=i.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&i.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth));}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0));}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0;}_diameter=ua;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0;}_strokeWidth;_circleRadius(){return (this.diameter-ls)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return `0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ee({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,i){if(t&1&&Mn$1(rs,5),t&2){let r;Ae(r=De())&&(i._determinateCircle=r.first);}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,i){t&2&&(Ge$1("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",i.mode==="determinate"?i.value:null)("mode",i.mode),Hs$1("mat-"+i.color),IC("width",i.diameter,"px")("height",i.diameter,"px")("--mat-progress-spinner-size",i.diameter+"px")("--mat-progress-spinner-active-indicator-width",i.diameter+"px"),Oe("_mat-animation-noopable",i._noopAnimations)("mdc-circular-progress--indeterminate",i.mode==="indeterminate"));},inputs:{color:"color",mode:"mode",value:[2,"value","value",lu],diameter:[2,"diameter","diameter",lu],strokeWidth:[2,"strokeWidth","strokeWidth",lu]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,i){if(t&1&&(Yn(0,as,2,8,"ng-template",null,0,ip),ke(2,"div",2,1),NA(),ke(4,"svg",3),Bt(5,"circle",4),Be()(),AP(),ke(6,"div",5)(7,"div",6)(8,"div",7),ep(9,8),Be(),ke(10,"div",9),ep(11,8),Be(),ke(12,"div",10),ep(13,8),Be()()()),t&2){let r=hv(1);me(4),Ge$1("viewBox",i._viewBox()),me(),IC("stroke-dasharray",i._strokeCircumference(),"px")("stroke-dashoffset",i._strokeDashOffset(),"px")("stroke-width",i._circleStrokeWidth(),"%"),Ge$1("r",i._circleRadius()),me(4),An$1("ngTemplateOutlet",r),me(2),An$1("ngTemplateOutlet",r),me(2),An$1("ngTemplateOutlet",r);}},dependencies:[mp],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return n})();var Ct=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=le({type:n});static \u0275inj=se({imports:[At]})}return n})();var cs=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],ds=["mat-icon, [matMenuItemIcon]","*"];function ms(n,o){n&1&&(NA(),ke(0,"svg",2),Bt(1,"polygon",3),Be());}var ps=["*"];function us(n,o){if(n&1){let e=SC();an$1(0,"div",0),uv("click",function(){dy(e);let i=bt();return uy(i.closed.emit("click"))})("animationstart",function(i){dy(e);let r=bt();return uy(r._onAnimationStart(i.animationName))})("animationend",function(i){dy(e);let r=bt();return uy(r._onAnimationDone(i.animationName))})("animationcancel",function(i){dy(e);let r=bt();return uy(r._onAnimationDone(i.animationName))}),an$1(1,"div",1),Pe(2),mn$1()();}if(n&2){let e=bt();Hs$1(e._classList),Oe("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),On$1("id",e.panelId),Ge$1("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null);}}var uo=new E("MAT_MENU_PANEL"),rt=(()=>{class n{_elementRef=m(j);_document=m(W);_focusMonitor=m(ts$1);_parentMenu=m(uo,{optional:true});_changeDetectorRef=m(It);role="menuitem";disabled=false;disableRipple=false;_hovered=new O;_focused=new O;_highlighted=false;_triggersSubmenu=false;constructor(){m(yn$1).load(jl$1),this._parentMenu?.addItem?.(this);}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this);}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,false);}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete();}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation());}_handleMouseEnter(){this._hovered.next(this);}getLabel(){let e=this._elementRef.nativeElement.cloneNode(true),t=e.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<t.length;i++)t[i].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck();}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck();}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ee({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,i){t&1&&He("click",function(d){return i._checkDisabled(d)})("mouseenter",function(){return i._handleMouseEnter()}),t&2&&(Ge$1("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),Oe("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu));},inputs:{role:"role",disabled:[2,"disabled","disabled",be],disableRipple:[2,"disableRipple","disableRipple",be]},exportAs:["matMenuItem"],ngContentSelectors:ds,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,i){t&1&&(Zt$1(cs),Pe(0),ke(1,"span",0),Pe(2,1),Be(),Bt(3,"div",1),Le(4,ms,2,0,":svg:svg",2)),t&2&&(me(3),An$1("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),me(),Fe(i._triggersSubmenu?4:-1));},dependencies:[tN],encapsulation:2})}return n})();var _s=new E("MatMenuContent");var hs=new E("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:false,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),mo="_mat-menu-enter",Pn="_mat-menu-exit",Je=(()=>{class n{_elementRef=m(j);_changeDetectorRef=m(It);_injector=m(V);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=en$1();_allItems;_directDescendantItems=new Us$1;_classList={};_panelAnimationState="void";_animationDone=new O;_isAnimating=w$1(false);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses();}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses();}templateRef;items;lazyContent;overlapTrigger=false;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,i=l({},this._classList);t&&t.length&&t.split(" ").forEach(r=>{i[r]=false;}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(r=>{i[r]=true;}),this._elementRef.nativeElement.className=""),this._classList=i;}_previousPanelClass="";get classList(){return this.panelClass}set classList(e){this.panelClass=e;}closed=new re;close=this.closed;panelId=m($t$1).getId("mat-menu-panel-");constructor(){let e=m(hs);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop;}ngOnInit(){this.setPositionClasses();}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new xm(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe($n$1(this._directDescendantItems),kt(e=>Ns$1(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let i=e.toArray(),r=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[r]&&!i[r].disabled?t.setActiveItem(r):t.setNextItemActive();}});}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout);}_hovered(){return this._directDescendantItems.changes.pipe($n$1(this._directDescendantItems),kt(t=>Ns$1(...t.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,i=this._keyManager;switch(t){case 27:Jn(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Gt(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&t&&t.focus();}},{injector:this._injector});}resetActiveItem(){this._keyManager.setActiveItem(-1);}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=m$1(l({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck();}_onAnimationDone(e){let t=e===Pn;(t||e===mo)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(false));}_onAnimationStart(e){(e===mo||e===Pn)&&this._isAnimating.set(true);}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0);}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Pn),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?mo:Pn);}),this._changeDetectorRef.markForCheck();}_updateDirectDescendants(){this._allItems.changes.pipe($n$1(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges();});}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ee({type:n,selectors:[["mat-menu"]],contentQueries:function(t,i,r){if(t&1&&to(r,_s,5)(r,rt,5)(r,rt,4),t&2){let d;Ae(d=De())&&(i.lazyContent=d.first),Ae(d=De())&&(i._allItems=d),Ae(d=De())&&(i.items=d);}},viewQuery:function(t,i){if(t&1&&Mn$1(Ft,5),t&2){let r;Ae(r=De())&&(i.templateRef=r.first);}},hostVars:3,hostBindings:function(t,i){t&2&&Ge$1("aria-label",null)("aria-labelledby",null)("aria-describedby",null);},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",be],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:be(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[qe([{provide:uo,useExisting:n}])],ngContentSelectors:ps,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,i){t&1&&(Zt$1(),rF(0,us,3,12,"ng-template"));},styles:[`mat-menu {
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
`],encapsulation:2})}return n})(),fs=new E("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=m(V);return ()=>Um(n)}});var Kt=new WeakMap,gs=(()=>{class n{_canHaveBackdrop;_element=m(j);_viewContainerRef=m(Ut);_menuItemInstance=m(rt,{optional:true,self:true});_dir=m(br,{optional:true});_focusMonitor=m(ts$1);_ngZone=m($);_injector=m(V);_scrollStrategy=m(fs);_changeDetectorRef=m(It);_animationsDisabled=en$1();_portal;_overlayRef=null;_menuOpen=false;_closingActionsSubscription=Me.EMPTY;_menuCloseSubscription=Me.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t);})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()));}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=m(uo,{optional:true});this._parentMaterialMenu=t instanceof Je?t:void 0;}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Kt.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null);}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return !!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit();}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let i=Kt.get(t);Kt.set(t,this),i&&i!==this&&i._closeMenu();let r=this._createOverlay(t),d=r.getConfig(),x=d.positionStrategy;this._setPosition(t,x),this._canHaveBackdrop?d.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:d.hasBackdrop=t.hasBackdrop??false,r.hasAttached()||(r.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(true),t instanceof Je&&(t._setIsOpen(true),t._directDescendantItems.changes.pipe(We(t.close)).subscribe(()=>{x.withLockedPosition(false).reapplyLastPosition(),x.withLockedPosition(true);}));}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t);}_destroyMenu(e){let t=this._overlayRef,i=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof Je&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(lt(1)).subscribe(()=>{t.detach(),Kt.has(i)||i.lazyContent?.detach();}),i._setIsOpen(false)):(t.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&Kt.delete(i),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(false));}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck());}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=ca$1(this._injector,t),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof Je&&this._menu._handleKeydown(i);});}return this._overlayRef}_getOverlayConfig(e){return new aa$1({positionStrategy:Bm(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let r=i.connectionPair.overlayX==="start"?"after":"before",d=i.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(r,d);});});}_setPosition(e,t){let[i,r]=e.xPosition==="before"?["end","start"]:["start","end"],[d,x]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[O,$]=[d,x],[ie,_e]=[i,r],ke=0;if(this._triggersSubmenu()){if(_e=i=e.xPosition==="before"?"start":"end",r=ie=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let st=this._parentMaterialMenu.items.first;this._parentInnerPadding=st?st._getHostElement().offsetTop:0;}ke=d==="bottom"?this._parentInnerPadding:-this._parentInnerPadding;}}else e.overlapTrigger||(O=d==="top"?"bottom":"top",$=x==="top"?"bottom":"top");t.withPositions([{originX:i,originY:O,overlayX:ie,overlayY:d,offsetY:ke},{originX:r,originY:O,overlayX:_e,overlayY:d,offsetY:ke},{originX:i,originY:$,overlayX:ie,overlayY:x,offsetY:-ke},{originX:r,originY:$,overlayX:_e,overlayY:x,offsetY:-ke}]);}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:Z(),r=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(xe$1(d=>this._menuOpen&&d!==this._menuItemInstance)):Z();return Ns$1(e,i,r,t)}_getPortal(e){return (!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new ki(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return Kt.get(e)===this}_triggerIsAriaDisabled(){return be(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Jh();};static \u0275dir=N({type:n})}return n})(),at=(()=>{class n extends gs{_cleanupTouchstart;_hoverSubscription=Me.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e;}get menu(){return this._menu}set menu(e){this._menu=e;}menuData;restoreFocus=true;menuOpened=new re;onMenuOpen=this.menuOpened;menuClosed=new re;onMenuClose=this.menuClosed;constructor(){super(true);let e=m(je);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{Cm(t)||(this._openedBy="touch");},{passive:true});}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(true);}closeMenu(){this._closeMenu();}updatePosition(){this._overlayRef?.updatePosition();}ngAfterContentInit(){this._handleHover();}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe();}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Dm(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault());}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu());}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu();}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(false));}));}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,i){t&1&&He("click",function(d){return i._handleClick(d)})("mousedown",function(d){return i._handleMousedown(d)})("keydown",function(d){return i._handleKeydown(d)}),t&2&&Ge$1("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu?.panelId:null);},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[we]})}return n})();var Yt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=le({type:n});static \u0275inj=se({imports:[Gl$1,la$1,At,km]})}return n})();var ui=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new O;constructor(o=false,e,t=true,i){this._multiple=o,this._emitChanges=t,this.compareWith=i,e&&e.length&&(o?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0);}select(...o){this._verifyValueAssignment(o),o.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...o){this._verifyValueAssignment(o),o.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...o){this._verifyValueAssignment(o);let e=this.selected,t=new Set(o.map(r=>this._getConcreteValue(r)));o.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(o){return this.isSelected(o)?this.deselect(o):this.select(o)}clear(o=true){this._unmarkAll();let e=this._hasQueuedChanges();return o&&this._emitChangeEvent(),e}isSelected(o){return this._selection.has(this._getConcreteValue(o))}isEmpty(){return this._selection.size===0}hasValue(){return !this.isEmpty()}sort(o){this._multiple&&this.selected&&this._selected.sort(o);}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[]);}_markSelected(o){o=this._getConcreteValue(o),this.isSelected(o)||(this._multiple||this._unmarkAll(),this.isSelected(o)||this._selection.add(o),this._emitChanges&&this._selectedToEmit.push(o));}_unmarkSelected(o){o=this._getConcreteValue(o),this.isSelected(o)&&(this._selection.delete(o),this._emitChanges&&this._deselectedToEmit.push(o));}_unmarkAll(){this.isEmpty()||this._selection.forEach(o=>this._unmarkSelected(o));}_verifyValueAssignment(o){o.length>1&&this._multiple;}_hasQueuedChanges(){return !!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(o,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(o,t))return t;return o}else return o}};var ho=(()=>{class n{_listeners=[];notify(e,t){for(let i of this._listeners)i(e,t);}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t);}}ngOnDestroy(){this._listeners=[];}static \u0275fac=function(t){return new(t||n)};static \u0275prov=F({token:n,factory:n.\u0275fac})}return n})();var vs=["trigger"],xs=["panel"],ks=[[["mat-select-trigger"]],"*"],ys=["mat-select-trigger","*"];function Cs(n,o){if(n&1&&(ke(0,"span",4),yi(1),Be()),n&2){let e=bt();me(),cu(e.placeholder);}}function Ms(n,o){n&1&&Pe(0);}function ws(n,o){if(n&1&&(ke(0,"span",11),yi(1),Be()),n&2){let e=bt(2);me(),cu(e.triggerValue);}}function Ts(n,o){if(n&1&&(ke(0,"span",5),Le(1,Ms,1,0)(2,ws,2,1,"span",11),Be()),n&2){let e=bt();me(),Fe(e.customTrigger?1:2);}}function Es(n,o){if(n&1){let e=SC();ke(0,"div",12,1),He("keydown",function(i){dy(e);let r=bt();return uy(r._handleKeydown(i))}),Pe(2,1),Be();}if(n&2){let e=bt();Hs$1(e.panelClass),Oe("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",e._parentFormField?.color==="primary")("mat-accent",e._parentFormField?.color==="accent")("mat-warn",e._parentFormField?.color==="warn")("mat-undefined",!e._parentFormField?.color),Ge$1("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby());}}var Is=new E("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=m(V);return ()=>Um(n)}}),Ss=new E("MAT_SELECT_CONFIG"),_a=new E("MatSelectTrigger"),fo=class{source;value;constructor(o,e){this.source=o,this.value=e;}},Qt=(()=>{class n{_viewportRuler=m(of);_changeDetectorRef=m(It);_elementRef=m(j);_dir=m(br,{optional:true});_idGenerator=m($t$1);_renderer=m(je);_parentFormField=m(Xg,{optional:true});ngControl=m(Pr,{self:true,optional:true});_liveAnnouncer=m(V0);_defaultOptions=m(Ss,{optional:true});_animationsDisabled=en$1();_popoverLocation;_initialized=new O;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,r=jet(e,this.options,this.optionGroups),d=t._getHostElement();e===0&&r===1?i.scrollTop=0:i.scrollTop=Get(d.offsetTop,d.offsetHeight,i.scrollTop,i.offsetHeight);}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0);}_getChangeEvent(e){return new fo(this,e)}_scrollStrategyFactory=m(Is);_panelOpen=false;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new O;_errorStateTracker;stateChanges=new O;disableAutomaticLabeling=true;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=false;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=false;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e);}_disableRipple=w$1(false);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties();}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??false;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next();}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Yo.required)??false}set required(e){this._required=e,this.stateChanges.next();}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e;}_multiple=false;disableOptionCentering=this._defaultOptions?.disableOptionCentering??false;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection();}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e);}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e;}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next();}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e;}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??false;optionSelectionChanges=Rs$1(()=>{let e=this.options;return e?e.changes.pipe($n$1(e),kt(()=>Ns$1(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(kt(()=>this.optionSelectionChanges))});openedChange=new re;_openedStream=this.openedChange.pipe(xe$1(e=>e),ue(()=>{}));_closedStream=this.openedChange.pipe(xe$1(e=>!e),ue(()=>{}));selectionChange=new re;valueChange=new re;constructor(){let e=m(Zg),t=m(Zp,{optional:true}),i=m(Qp,{optional:true}),r=m(new vv("tabindex"),{optional:true}),d=m(X0,{optional:true});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new qf(e,this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=d?.usePopover===false?null:"inline",this.id=this.id;}ngOnInit(){this._selectionModel=new ui(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(We(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges());});}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(We(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect());}),this.options.changes.pipe($n$1(null),We(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection();});}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby");}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState());}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass));}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete();}toggle(){this.panelOpen?this.close():this.open();}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=true,this._overlayDir.positionChange.pipe(lt(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled();}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(true)));}close(){this._panelOpen&&(this._panelOpen=false,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(false)));}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0;};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",r=>{r.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay());}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay();},200);e.classList.add("mat-select-panel-exit");}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck();}writeValue(e){this._assignValue(e);}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next();}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return "";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState();}_isRtl(){return this._dir?this._dir.value==="rtl":false}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e));}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,r=t===13||t===32,d=this._keyManager;if(!d.isTyping()&&r&&!Jn(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let x=this.selected;d.onKeydown(e);let O=this.selected;O&&x!==O&&this._liveAnnouncer.announce(O.viewValue,1e4);}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,r=i===40||i===38,d=t.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!d&&(i===13||i===32)&&t.activeItem&&!Jn(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!d&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let x=this.options.some(O=>!O.disabled&&!O.selected);this.options.forEach(O=>{O.disabled||(x?O.select():O.deselect());});}else {let x=t.activeItemIndex;t.onKeydown(e),this._multiple&&r&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==x&&t.activeItem._selectViaInteraction();}}_handleOverlayKeydown(e){e.keyCode===27&&!Jn(e)&&(e.preventDefault(),this.close());}_onFocus(){this.disabled||(this._focused=true,this.stateChanges.next());}_onBlur(){this._focused=false,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next());}get empty(){return !this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next();});}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else {let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1);}this._changeDetectorRef.markForCheck();}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return  false;try{return (i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return  false}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,true):false}_skipPredicate=e=>this.panelOpen?false:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Z0?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck();}_initKeyManager(){this._keyManager=new $0(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close());}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction();});}_resetOptions(){let e=Ns$1(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(We(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus());}),Ns$1(...this.options.map(t=>t._stateChanges)).pipe(We(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next();});}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next();}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next();}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck();}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e);}else this._keyManager.setActiveItem(this._selectionModel.selected[0]);}_canOpen(){return !this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e);}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby");}onContainerClick(e){let t=vr(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open());}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ee({type:n,selectors:[["mat-select"]],contentQueries:function(t,i,r){if(t&1&&to(r,_a,5)(r,eW,5)(r,Rde,5),t&2){let d;Ae(d=De())&&(i.customTrigger=d.first),Ae(d=De())&&(i.options=d),Ae(d=De())&&(i.optionGroups=d);}},viewQuery:function(t,i){if(t&1&&Mn$1(vs,5)(xs,5)(lre,5),t&2){let r;Ae(r=De())&&(i.trigger=r.first),Ae(r=De())&&(i.panel=r.first),Ae(r=De())&&(i._overlayDir=r.first);}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,i){t&1&&He("keydown",function(d){return i._handleKeydown(d)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(Ge$1("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),Oe("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen));},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",be],disableRipple:[2,"disableRipple","disableRipple",be],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:lu(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",be],placeholder:"placeholder",required:[2,"required","required",be],multiple:[2,"multiple","multiple",be],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",be],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",lu],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",be]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[qe([{provide:Qg,useExisting:n},{provide:wde,useExisting:n}]),Et],ngContentSelectors:ys,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,i){if(t&1&&(Zt$1(ks),ke(0,"div",2,0),He("click",function(){return i.open()}),ke(3,"div",3),Le(4,Cs,2,1,"span",4)(5,Ts,3,1,"span",5),Be(),ke(6,"div",6)(7,"div",7),NA(),ke(8,"svg",8),Bt(9,"path",9),Be()()()(),Yn(10,Es,3,16,"ng-template",10),He("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(d){return i._handleOverlayKeydown(d)})),t&2){let r=hv(1);me(3),Ge$1("id",i._valueId),me(),Fe(i.empty?4:5),me(6),An$1("cdkConnectedOverlayDisableClose",true)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||r)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",true)("cdkConnectedOverlayUsePopover",i._popoverLocation);}},dependencies:[Z0,lre],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return n})(),X_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["mat-select-trigger"]],features:[qe([{provide:_a,useExisting:n}])]})}return n})(),Zt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=le({type:n});static \u0275inj=se({imports:[la$1,ett,At,km,cx,ett]})}return n})();var Os=["input"],Rs=["label"],Ds=["*"],bo={color:"accent",clickAction:"check-indeterminate",disabledInteractive:false},As=new E("mat-checkbox-default-options",{providedIn:"root",factory:()=>bo}),xe=(function(n){return n[n.Init=0]="Init",n[n.Checked=1]="Checked",n[n.Unchecked=2]="Unchecked",n[n.Indeterminate=3]="Indeterminate",n})(xe||{}),vo=class{source;checked},_i=(()=>{class n{_elementRef=m(j);_changeDetectorRef=m(It);_ngZone=m($);_animationsDisabled=en$1();_options=m(As,{optional:true});focus(){this._inputElement.nativeElement.focus();}_createChangeEvent(e){let t=new vo;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return `${this.id||this._uniqueId}-input`}required=false;labelPosition="after";name=null;change=new re;indeterminateChange=new re;value;disableRipple=false;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=xe.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){m(yn$1).load(jl$1);let e=m(new vv("tabindex"),{optional:true});this._options=this._options||bo,this.color=this._options.color||bo.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=m($t$1).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??false;}ngOnChanges(e){e.required&&this._validatorChangeFn();}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate);}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck());}_checked=false;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck());}_disabled=false;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(xe.Indeterminate):this._transitionCheckState(this.checked?xe.Checked:xe.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e);}_indeterminate=w$1(false);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges();}writeValue(e){this.checked=!!e;}registerOnChange(e){this._controlValueAccessorChangeFn=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e;}validate(e){return this.required&&e.value!==true?{required:true}:null}registerOnValidatorChange(e){this._validatorChangeFn=e;}_transitionCheckState(e){let t=this._currentCheckState,i=this._getAnimationTargetElement();if(!(t===e||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let r=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(r);},1e3);});}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked);}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked);}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(false),this.indeterminateChange.emit(false);}),this._checked=!this._checked,this._transitionCheckState(this._checked?xe.Checked:xe.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate);}_onInteractionEvent(e){e.stopPropagation();}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck();});}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return "";switch(e){case xe.Init:if(t===xe.Checked)return this._animationClasses.uncheckedToChecked;if(t==xe.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case xe.Unchecked:return t===xe.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case xe.Checked:return t===xe.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case xe.Indeterminate:return t===xe.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return ""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e);}_onInputClick(){this._handleInputClick();}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus();}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation();}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ee({type:n,selectors:[["mat-checkbox"]],viewQuery:function(t,i){if(t&1&&Mn$1(Os,5)(Rs,5),t&2){let r;Ae(r=De())&&(i._inputElement=r.first),Ae(r=De())&&(i._labelElement=r.first);}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,i){t&2&&(On$1("id",i.id),Ge$1("tabindex",null)("aria-label",null)("aria-labelledby",null),Hs$1(i.color?"mat-"+i.color:"mat-accent"),Oe("_mat-animation-noopable",i._animationsDisabled)("mdc-checkbox--disabled",i.disabled)("mat-mdc-checkbox-disabled",i.disabled)("mat-mdc-checkbox-checked",i.checked)("mat-mdc-checkbox-disabled-interactive",i.disabledInteractive));},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",be],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",be],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",be],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:lu(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",be],checked:[2,"checked","checked",be],disabled:[2,"disabled","disabled",be],indeterminate:[2,"indeterminate","indeterminate",be]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[qe([{provide:Wo,useExisting:rn$1(()=>n),multi:true},{provide:qo,useExisting:n,multi:true}]),Et],ngContentSelectors:Ds,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,i){if(t&1&&(Zt$1(),ke(0,"div",3),He("click",function(d){return i._preventBubblingFromLabel(d)}),ke(1,"div",4,0)(3,"div",5),He("click",function(){return i._onTouchTargetClick()}),Be(),ke(4,"input",6,1),He("blur",function(){return i._onBlur()})("click",function(){return i._onInputClick()})("change",function(d){return i._onInteractionEvent(d)}),Be(),Bt(6,"div",7),ke(7,"div",8),NA(),ke(8,"svg",9),Bt(9,"path",10),Be(),AP(),Bt(10,"div",11),Be(),Bt(11,"div",12),Be(),ke(12,"label",13,2),Pe(14),Be()()),t&2){let r=hv(2);An$1("labelPosition",i.labelPosition),me(4),Oe("mdc-checkbox--selected",i.checked),An$1("checked",i.checked)("indeterminate",i.indeterminate)("disabled",i.disabled&&!i.disabledInteractive)("id",i.inputId)("required",i.required)("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex),Ge$1("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby)("aria-describedby",i.ariaDescribedby)("aria-checked",i.indeterminate?"mixed":null)("aria-controls",i.ariaControls)("aria-disabled",i.disabled&&i.disabledInteractive?true:null)("aria-expanded",i.ariaExpanded)("aria-owns",i.ariaOwns)("name",i.name)("value",i.value),me(7),An$1("matRippleTrigger",r)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",true),me(),An$1("for",i.inputId);}},dependencies:[tN,rtt],styles:[`.mdc-checkbox {
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
`],encapsulation:2})}return n})(),Un=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=le({type:n});static \u0275inj=se({imports:[_i,At]})}return n})();var Ps=["*"];function Ns(n,o){if(n&1&&(ke(0,"icon",2),yi(1,"info"),Be()),n&2){let e=bt();An$1("matTooltip",e.info());}}function Fs(n,o){n&1&&Bt(0,"div",3);}function Vs(n,o){if(n&1&&(ke(0,"div",4)(1,"div",6)(2,"div",7)(3,"icon"),yi(4),Be()()()()),n&2){let e=bt();me(),Oe("bg-base-200",!e.value())("bg-info",e.value())("border-info!",e.value()),me(),Oe("left-1",!e.value())("left-5",e.value())("bg-base-400",!e.value())("bg-info-light",e.value()),me(2),cu(e.value()?"done":"remove");}}function Ls(n,o){if(n&1){let e=SC();ke(0,"mat-checkbox",8),He("ngModelChange",function(i){dy(e);let r=bt();return uy(r.setValue(i))}),Be(),f4();}if(n&2){let e=bt();An$1("ngModel",e.value()),p4();}}var fa=(()=>{class n{constructor(){this.toggle=Qt$1(void 0),this.label=Qt$1(void 0),this.info=Qt$1(void 0),this.value=w$1(void 0),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e;}setValue(e){this.value.set(e),this._onChange&&this._onChange(e);}writeValue(e){this.value.set(e);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["settings-toggle"]],inputs:{toggle:[1,"toggle"],label:[1,"label"],info:[1,"info"]},features:[qe([{provide:Wo,useExisting:rn$1(()=>n),multi:true}])],ngContentSelectors:Ps,decls:9,vars:8,consts:[["type","button","matRipple","",1,"hover:bg-base-200","relative","flex","flex-1","items-center","space-x-2","overflow-hidden","rounded-sm","border","py-1","pr-1","pl-2",3,"click"],[1,"z-10","flex","flex-1","items-center","space-x-2","p-2","text-left"],[3,"matTooltip"],[1,"bg-info","absolute","inset-0","z-0","m-0!","opacity-10"],[1,"px-2"],[1,"pointer-events-none",3,"ngModel"],["toggle","",1,"border-base-400","relative","h-8","w-12","rounded-full","border-2"],[1,"absolute","top-1/2","flex","h-6","w-6","-translate-x-0.5","-translate-y-1/2","items-center","justify-center","rounded-full","text-black","shadow-sm"],[1,"pointer-events-none",3,"ngModelChange","ngModel"]],template:function(t,i){t&1&&(Zt$1(),ke(0,"button",0),He("click",function(){return i.setValue(!i.value())}),ke(1,"div",1)(2,"div"),yi(3),Pe(4),Be(),Le(5,Ns,2,1,"icon",2),Be(),Le(6,Fs,1,0,"div",3),Le(7,Vs,5,15,"div",4)(8,Ls,1,1,"mat-checkbox",5),Be()),t&2&&(Oe("border-base-300",!i.value())("border-info",i.value()),me(3),Vo(" ",i.label()," "),me(2),Fe(i.info()?5:-1),me(),Fe(i.value()?6:-1),me(),Fe(i.toggle()?7:8));},dependencies:[Un,_i,txe,KMe,XJ,gtt,Znt,Sue],styles:[`[_nghost-%COMP%]{display:flex}[toggle][_ngcontent-%COMP%]{transition:background .2s,left .2s}
/*# sourceMappingURL=settings-toggle.component.css.map */`]});}}return n})();var ei=new Map,Bs="PlaceOS.image-cache-v1",ba="PlaceOS.image-cache-keys-v1";var Jt=null;function va(){if(Jt)return Jt;if(typeof sessionStorage>"u")return [];try{let n=sessionStorage.getItem(ba);return Jt=n?JSON.parse(n):[],Jt}catch{return []}}function Us(n){if(Jt=Array.from(new Set(n)),!(typeof sessionStorage>"u"))try{sessionStorage.setItem(ba,JSON.stringify(Jt));}catch{}}async function xa(){if(typeof caches>"u")return null;try{return await caches.open(Bs)}catch{return null}}async function zs(n){if(!va().includes(n))return null;let o=await xa();if(!o)return null;try{return await o.match(n)||null}catch{return null}}async function Gs(n,o){let e=await xa();if(e)try{await e.put(n,o),Us([...va(),n]);}catch{}}function Hs(n){let o=Ht();document.cookie=`${o==="x-api-key"?"api-key="+encodeURIComponent(Xo()):"bearer_token="+encodeURIComponent(o)};max-age=30;path=${n};samesite=strict;${location.protocol==="https:"?"secure;":""}`;}function Ws(){let n=Ht();return n==="x-api-key"?{"X-API-Key":Xo()}:{Authorization:`Bearer ${n}`}}async function ga(n,o){let e=await o.blob(),t=URL.createObjectURL(e);return ei.set(n,t),t}async function ka(n,o){return Ca(n,()=>(Hs(o),fetch(n)))}async function ya(n){return Ca(n,()=>fetch(n,{headers:Ws()}))}async function Ca(n,o){if(ei.has(n))return ei.get(n);let e=await zs(n);if(e)return ga(n,e);let t=await o();if(!t||!t.ok)throw new Error(`Failed to fetch image: ${t?.status}`);return Gs(n,t.clone()),ga(n,t)}var Mt=(()=>{class n extends ao{constructor(){super(),this._element=m(j),this.source=Qt$1(void 0);}ngOnChanges(e){e.source&&this.source()&&this._loadImage();}async _loadImage(){let e=this.source();if(typeof e!="string")return;if(!this._element||!Ci())return this.timeout("load",()=>this._loadImage(),300);if(!this._isLocalUrl(e)){this._element.nativeElement.src=e;return}if(ei.has(e)){this._element.nativeElement.src=ei.get(e);return}let t=e.includes("/api/engine/v2/uploads")||e.includes("/api/engine/v2/signage");try{this._element.nativeElement.src=t?await ka(e,this._cookiePath(e)):await ya(e);}catch(i){this._element.nativeElement.dispatchEvent(new ErrorEvent("error",{error:i}));}}_isLocalUrl(e){try{return new URL(e,location.href).origin===location.origin}catch{return  false}}_cookiePath(e){return e.includes("/api/engine/v2/uploads")?"/api/engine/v2/uploads":"/api/engine/v2/signage"}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275dir=N({type:n,selectors:[["img","auth",""],["video","auth",""],["audio","auth",""]],inputs:{source:[1,"source"]},features:[we,Et]});}}return n})();var qs=["*"];function js(n,o){n&1&&(ke(0,"button",7)(1,"icon"),yi(2,"close"),Be()());}function $s(n,o){if(n&1&&Le(0,js,3,0,"button",7),n&2){let e=bt(2);Fe(e.loading()?-1:0);}}function Xs(n,o){if(n&1&&(ke(0,"a",8)(1,"icon"),yi(2,"close"),Be()()),n&2){let e=bt(3);An$1("routerLink",e.close());}}function Ks(n,o){if(n&1&&Le(0,Xs,3,1,"a",8),n&2){let e=bt(2);Fe(e.loading()?-1:0);}}function Ys(n,o){if(n&1&&Le(0,$s,1,1)(1,Ks,1,1),n&2){let e=bt();Fe(e.close()?.length?1:0);}}function Qs(n,o){n&1&&(Pe(0),Bt(1,"div",9));}function Zs(n,o){if(n&1&&(ke(0,"div",5),Bt(1,"mat-spinner",10),ke(2,"p",11),yi(3),Be()()),n&2){let e=bt();me(),An$1("diameter",32),me(2),cu(e.loading());}}function Js(n,o){if(n&1&&(ke(0,"kbd",14),yi(1),Be()),n&2){let e=bt(2);me(),cu(e.confirm_hotkey());}}function el(n,o){if(n&1){let e=SC();ke(0,"footer",12)(1,"button",13),He("click",function(){dy(e);let i=bt();return uy(i.confirm.emit())}),yi(2),rp(3,"translate"),Le(4,Js,2,1,"kbd",14),Be()();}if(n&2){let e=bt();Oe("max-w-156",!e.full_width()),me(),An$1("disabled",e.confirm_disabled()),me(),Vo(" ",e.confirm_text()||AC(3,5,"COMMON.SAVE")," "),me(2),Fe(e.confirm_hotkey()?4:-1);}}var zn=(()=>{class n{constructor(){this.loading=Qt$1(""),this.heading=Qt$1("Fullscreen Modal"),this.confirm_text=Qt$1(""),this.confirm_hotkey=Qt$1(""),this.confirm_disabled=Qt$1(false),this.close=Qt$1([]),this.hide_confirm=Qt$1(false),this.hide_close=Qt$1(false),this.full_width=Qt$1(false),this.confirm=LCe(),this.closed=LCe();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["fullscreen-modal-shell"],["","fs-modal-shell",""]],inputs:{loading:[1,"loading"],heading:[1,"heading"],confirm_text:[1,"confirm_text"],confirm_hotkey:[1,"confirm_hotkey"],confirm_disabled:[1,"confirm_disabled"],close:[1,"close"],hide_confirm:[1,"hide_confirm"],hide_close:[1,"hide_close"],full_width:[1,"full_width"]},outputs:{confirm:"confirm",closed:"closed"},ngContentSelectors:qs,decls:10,vars:14,consts:[["cdkScrollable","",1,"bg-base-200","fixed","inset-0","flex","flex-col","items-center","overflow-auto","px-2"],[1,"border-base-300","bg-base-100","fixed","top-0","mx-auto","h-screen","max-w-full","border-x"],[1,"bg-base-200","sticky","top-0","z-10","mx-auto","my-2","flex","h-14","w-full","items-center","justify-between","rounded-sm","border-none","px-4","py-2"],[1,"flex","items-center","text-xl","font-medium","capitalize",3,"innerHTML"],[1,"z-0","mx-auto","h-1/2","w-full","flex-1","space-y-8","p-2"],[1,"flex","h-1/2","w-full","flex-1","flex-col","items-center","justify-center","space-y-4","p-12"],[1,"bg-base-200","fixed","bottom-0","left-1/2","z-10","mx-auto","my-2","flex","w-full","-translate-x-1/2","items-center","justify-end","rounded-sm","border-none","px-4","py-2",3,"max-w-156"],["icon","","matRipple","","mat-dialog-close",""],["icon","","matRipple","",3,"routerLink"],[1,"h-24","w-full"],[3,"diameter"],[1,"text-center","opacity-50"],[1,"bg-base-200","fixed","bottom-0","left-1/2","z-10","mx-auto","my-2","flex","w-full","-translate-x-1/2","items-center","justify-end","rounded-sm","border-none","px-4","py-2"],["btn","","matRipple","",1,"flex","min-w-32","items-center","justify-center","gap-2",3,"click","disabled"],[1,"border-base-300","bg-base-100","text-base-content","rounded","border","px-2","py-1","text-xs","leading-none","shadow-sm"]],template:function(t,i){t&1&&(Zt$1(),ke(0,"div",0),Bt(1,"div",1),ke(2,"header",2),Bt(3,"h2",3),rp(4,"sanitize"),Le(5,Ys,2,1),Be(),ke(6,"main",4),Le(7,Qs,2,0)(8,Zs,4,2,"div",5),Be(),Le(9,el,5,7,"footer",6),Be()),t&2&&(me(),Oe("w-160",!i.full_width())("w-full",i.full_width()),me(),Oe("max-w-156",!i.full_width()),me(),An$1("innerHTML",AC(4,12,i.heading()),VD),me(2),Fe(i.hide_close()?-1:5),me(),Oe("max-w-156",!i.full_width()),me(),Fe(i.loading()?8:7),me(2),Fe(!i.loading()&&!i.hide_confirm()?9:-1));},dependencies:[rre,Ct,Xt,gtt,pXe,hXe,Gl$1,tN,AX,RE,trt,KW],styles:[`main[_ngcontent-%COMP%]{scroll-margin-top:60px}
/*# sourceMappingURL=fullscreen-modal-shell.component.css.map */`]});}}return n})();var tl=["input"],il=["formField"],nl=["*"],Gn=class{source;value;constructor(o,e){this.source=o,this.value=e;}},ol={provide:Wo,useExisting:rn$1(()=>hi),multi:true},wa=new E("MatRadioGroup"),rl=new E("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:false})}),hi=(()=>{class n{_changeDetector=m(It);_value=null;_name=m($t$1).getId("mat-radio-group-");_selected=null;_isInitialized=false;_labelPosition="after";_disabled=false;_required=false;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new re;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames();}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e==="before"?"before":"after",this._markRadiosForCheck();}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton());}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=true);}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton();}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck();}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck();}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck();}_disabledInteractive=false;ngAfterContentInit(){this._isInitialized=true,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null);});}ngOnDestroy(){this._buttonChanges?.unsubscribe();}_touch(){this.onTouched&&this.onTouched();}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck();});}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t);}));}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Gn(this._selected,this._value));}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck());}writeValue(e){this.value=e,this._changeDetector.markForCheck();}registerOnChange(e){this._controlValueAccessorChangeFn=e;}registerOnTouched(e){this.onTouched=e;}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["mat-radio-group"]],contentQueries:function(t,i,r){if(t&1&&to(r,ti,5),t&2){let d;Ae(d=De())&&(i._radios=d);}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",be],required:[2,"required","required",be],disabledInteractive:[2,"disabledInteractive","disabledInteractive",be]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[qe([ol,{provide:wa,useExisting:n}])]})}return n})(),ti=(()=>{class n{_elementRef=m(j);_changeDetector=m(It);_focusMonitor=m(ts$1);_radioDispatcher=m(ho);_defaultOptions=m(rl,{optional:true});_ngZone=m($);_renderer=m(je);_uniqueId=m($t$1).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=false;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck());}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)));}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e;}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e);}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e;}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e;}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e;}_disabledInteractive;change=new re;radioGroup;get inputId(){return `${this.id||this._uniqueId}-input`}_checked=false;_disabled=false;_required=false;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=en$1();_injector=m(V);constructor(){m(yn$1).load(jl$1);let e=m(wa,{optional:true}),t=m(new vv("tabindex"),{optional:true});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??false,t&&(this.tabIndex=lu(t,0));}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e);}_markForCheck(){this._changeDetector.markForCheck();}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=false);});}ngDoCheck(){this._updateTabIndex();}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,true).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch();}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick);});}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener();}_emitChangeEvent(){this.change.emit(new Gn(this,this._value));}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=true,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent());}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus();}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck());}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault();};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let i=this._inputElement?.nativeElement;i&&(i.setAttribute("tabindex",t+""),this._previousTabIndex=t,Gt(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===i&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===i&&this._inputElement.nativeElement.blur());});},{injector:this._injector}));}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ee({type:n,selectors:[["mat-radio-button"]],viewQuery:function(t,i){if(t&1&&Mn$1(tl,5)(il,7,j),t&2){let r;Ae(r=De())&&(i._inputElement=r.first),Ae(r=De())&&(i._rippleTrigger=r.first);}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(t,i){t&1&&He("focus",function(){return i._inputElement.nativeElement.focus()}),t&2&&(Ge$1("id",i.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),Oe("mat-primary",i.color==="primary")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("mat-mdc-radio-checked",i.checked)("mat-mdc-radio-disabled",i.disabled)("mat-mdc-radio-disabled-interactive",i.disabledInteractive)("_mat-animation-noopable",i._noopAnimations));},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",be],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:lu(e)],checked:[2,"checked","checked",be],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",be],required:[2,"required","required",be],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",be]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:nl,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(t,i){t&1&&(Zt$1(),ke(0,"div",2,0)(2,"div",3)(3,"div",4),He("click",function(d){return i._onTouchTargetClick(d)}),Be(),ke(4,"input",5,1),He("change",function(d){return i._onInputInteraction(d)}),Be(),ke(6,"div",6),Bt(7,"div",7)(8,"div",8),Be(),ke(9,"div",9),Bt(10,"div",10),Be()(),ke(11,"label",11),Pe(12),Be()()),t&2&&(An$1("labelPosition",i.labelPosition),me(2),Oe("mdc-radio--disabled",i.disabled),me(2),An$1("id",i.inputId)("checked",i.checked)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),Ge$1("name",i.name)("value",i.value)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby)("aria-describedby",i.ariaDescribedby)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),me(5),An$1("matRippleTrigger",i._rippleTrigger.nativeElement)("matRippleDisabled",i._isRippleDisabled())("matRippleCentered",true),me(2),An$1("for",i.inputId));},dependencies:[tN,rtt],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})}return n})(),Hn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=le({type:n});static \u0275inj=se({imports:[Gl$1,ti,At]})}return n})();var Ea=(()=>{class n{constructor(){this.url=m(Sle);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["image-viewer"]],decls:5,vars:1,consts:[[1,"bg-base-200","h-screen","w-screen"],["auth","",1,"h-full","w-full","object-contain","object-center",3,"source"],["icon","","matRipple","","mat-dialog-close","",1,"bg-base-100","absolute","top-1","right-1"]],template:function(t,i){t&1&&(ke(0,"div",0),Bt(1,"img",1),ke(2,"button",2)(3,"icon"),yi(4,"close"),Be()()()),t&2&&(me(),An$1("source",i.url));},dependencies:[gtt,Mt,pXe,hXe],encapsulation:2});}}return n})();var al=(n,o,e)=>({file:n,is_public:o,permissions:e});function sl(n,o){if(n&1){let e=SC();ke(0,"div",7)(1,"label"),yi(2,"Permissions"),Be(),ke(3,"mat-form-field",11)(4,"mat-select",12),He("ngModelChange",function(i){dy(e);let r=bt();return uy(r.permissions.set(i))}),ke(5,"mat-option",13),yi(6,"None"),Be(),ke(7,"mat-option",14),yi(8,"Support"),Be(),ke(9,"mat-option",15),yi(10,"Admin"),Be()(),f4(),Be()();}if(n&2){let e=bt();me(4),An$1("ngModel",e.permissions()),p4();}}var Sa=(()=>{class n{constructor(){this._dialog_ref=m(OT),this._data=m(Sle),this.file=this._data.file,this.is_public=w$1(!!this._data.is_public),this.permissions=w$1("none"),this.file=this._data.file;}close(){this._dialog_ref.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["upload-permissions-modal"]],decls:18,vars:7,consts:[[1,"bg-base-200","sticky","top-0","z-10","m-2","w-[calc(100%-1rem)]","rounded-sm","border-none","p-2"],[1,"px-2","text-xl","font-medium"],["icon","","matRipple","","mat-dialog-close",""],[1,"min-w-[20rem]","space-y-2","px-4","py-2"],[1,"flex","flex-col"],["appearance","outline",1,"no-subscript"],["matInput","","disabled","true","placeholder","File Name",3,"ngModel"],[1,"flex","flex-col","space-y-2"],[1,"border-base-200","flex","items-center","justify-end","space-x-2","border-t","px-4","py-2"],["btn","","matRipple","","mat-dialog-close","",1,"inverse","w-32"],["btn","","matRipple","",1,"w-32",3,"mat-dialog-close"],["appearance","outline"],[3,"ngModelChange","ngModel"],["value","none"],["value","support"],["value","admin"]],template:function(t,i){t&1&&(ke(0,"header",0)(1,"h2",1),yi(2,"Upload File"),Be(),ke(3,"button",2)(4,"icon"),yi(5,"close"),Be()()(),ke(6,"main",3)(7,"div",4)(8,"label"),yi(9,"File Name"),Be(),ke(10,"mat-form-field",5),Bt(11,"input",6),f4(),Be()(),Le(12,sl,11,1,"div",7),Be(),ke(13,"footer",8)(14,"button",9),yi(15," Cancel "),Be(),ke(16,"button",10),yi(17," Upload "),Be()()),t&2&&(me(11),An$1("ngModel",i.file.name),p4(),me(),Fe(i.is_public()?-1:12),me(4),An$1("mat-dialog-close",g9(3,al,i.file,i.is_public(),i.permissions())));},dependencies:[pXe,hXe,cx,vW,txe,GV,KMe,XJ,Zt,Qt,eW,gtt,Int,Tnt,Gl$1,tN],encapsulation:2});}}return n})();var ll=["image_list"],cl=["file_input"];function dl(n,o){if(n&1){let e=SC();ke(0,"div",15),Bt(1,"img",16),ke(2,"div",17),Bt(3,"div",18),ke(4,"div",19)(5,"button",20),He("click",function(){let i=dy(e).$implicit,r=bt();return uy(r.copyLink(i))}),ke(6,"icon"),yi(7,"link"),Be()(),ke(8,"button",20),He("click",function(){let i=dy(e).$implicit,r=bt();return uy(r.viewImage(i))}),ke(9,"icon"),yi(10,"visibility"),Be()(),ke(11,"button",20),He("click",function(){let i=dy(e).$implicit,r=bt();return uy(r.removeImage(i))}),ke(12,"icon"),yi(13,"close"),Be()()()()();}if(n&2){let e=o.$implicit,t=bt();IC("transform","translate(-"+t.offset()+"00%)"),me(),An$1("source",e);}}function ml(n,o){if(n&1&&Bt(0,"mat-progress-spinner",22),n&2){let e=bt().$implicit;An$1("value",e.progress)("diameter",64);}}function pl(n,o){n&1&&(ke(0,"icon",23),yi(1,"warning"),Be());}function ul(n,o){n&1&&(ke(0,"div",24)(1,"icon",25),yi(2,"refresh"),Be()());}function _l(n,o){if(n&1){let e=SC();ke(0,"div",21),He("click",function(){let i=dy(e).$implicit,r=bt();return uy(r.retryUpload(i))}),Le(1,ml,1,2,"mat-progress-spinner",22),Le(2,pl,2,0,"icon",23),Le(3,ul,3,0,"div",24),Be();}if(n&2){let e=o.$implicit,t=bt();IC("transform","translate(-"+t.offset()+"00%)"),An$1("matTooltip",e.error),me(),Fe(e.error?-1:1),me(),Fe(e.error?2:-1),me(),Fe(e.error?3:-1);}}function hl(n,o){if(n&1){let e=SC();ke(0,"button",26),He("click",function(){dy(e);let i=bt();return uy(i.previousOffset())}),ke(1,"icon"),yi(2,"chevron_left"),Be()();}if(n&2){let e=bt();An$1("disabled",e.offset()===0);}}function fl(n,o){if(n&1){let e=SC();ke(0,"button",27),He("click",function(){dy(e);let i=bt();return uy(i.nextOffset())}),ke(1,"icon"),yi(2,"chevron_right"),Be()();}if(n&2){let e=bt();An$1("disabled",e.offset()>=e.length()-e.view_space());}}function gl(n,o){if(n&1){let e=SC();ke(0,"mat-chip-row",28),He("removed",function(){let i=dy(e).$implicit,r=bt();return uy(r.removeImage(i))}),ke(1,"div",29),yi(2),Be(),ke(3,"button",30)(4,"icon"),yi(5,"cancel"),Be()()();}if(n&2){let e=o.$implicit;me(2),cu(e),me(),Ge$1("aria-label","Remove "+e);}}var Oa=(()=>{class n extends ao{constructor(){super(...arguments),this._clipboard=m(l$),this._uploads=m(NXe),this._dialog=m(MT),this._injector=m(V),this._upload_completion_effect=ot(()=>{let e=this.upload_list(),t=this.upload_ids();for(let i of t){let r=e.find(d=>d?.id===i);r&&r.progress>=100&&(this.addImageUrl(r.link),this.upload_ids.set(this.upload_ids().filter(d=>d!==i)));}},{injector:this._injector}),this.list=w$1([]),this.upload_map={},this.upload_ids=w$1([]),this.upload_list=w$1([]),this.offset=w$1(0),this.view_space=w$1(0),this.separators=[188,13],this.uploads=R(()=>{let e=this.upload_ids();return this.upload_list().filter(t=>e.includes(t?.id))}),this.length=R(()=>this.list().length+this.upload_list().length+1),this._list_el=rl$1("image_list"),this._file_input=rl$1("file_input"),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e;}ngAfterViewInit(){this.updateViewSpace();}updateViewSpace(){this.timeout("init_view_space",()=>{let e=this._list_el()?.nativeElement?.getBoundingClientRect();e&&this.view_space.set(Math.floor(e.width/152));},100);}copyLink(e){this._clipboard.copy(e),M2("Copied image URL to clipboard");}viewImage(e){this._dialog.open(Ea,{data:e});}removeImage(e){this.setValue(this.list().filter(t=>t!==e));}addImage(e){e.value&&(this.setValue(Oi([...this.list(),e.value])),e.chipInput.inputElement.value="");}addImageUrl(e){this.setValue(Oi([...this.list(),e]));}retryUpload(e){e.error&&(e.error=null,e.upload.resume());}previousOffset(){this.offset.update(e=>e-1);}nextOffset(){this.offset.update(e=>e+1);}async uploadImages(e){let t=e.target;if(t?.files){let i=t.files;if(i.length){this.interval("update_status",()=>this._updateUploadHistory());for(let r=0;r<i.length;r++)try{let d=await this._uploads.uploadFileWithPermissions(i[r]);this.upload_ids.set([...this.upload_ids(),d]);}catch(d){if(d instanceof GT)continue;N2(`Failed to upload ${i[r].name}: ${d?.message||"Unknown error"}`);}this._file_input().nativeElement.value="";}}}setValue(e){let t=e||[];this.list.set(t),this._onChange&&this._onChange(t);}writeValue(e){this.list.set(e||[]);}async _updateUploadHistory(){let e=this.upload_ids();if(e.length===0)return;let i=this._uploads.upload_list().filter(d=>e.find(x=>x===d?.id)),r=i.filter(d=>d.progress>=100);this.upload_list.set(i),r.forEach(d=>{console.log("ID:",l({},d)),this.upload_map[d?.id]=d.upload?.id||d?.id,delete d.upload;}),r.length>=e.length&&this.clearInterval("update_status");}static{this.\u0275fac=(()=>{let e;return function(i){return (e||(e=ht(n)))(i||n)}})();}static{this.\u0275cmp=Ee({type:n,selectors:[["image-list-field"]],viewQuery:function(t,i){t&1&&su(i._list_el,ll,5)(i._file_input,cl,5),t&2&&au(2);},features:[qe([{provide:Wo,useExisting:rn$1(()=>n),multi:true},{provide:mde,useValue:Sa}]),we],decls:23,vars:13,consts:[["image_list",""],["file_input",""],["chipList",""],["images","",1,"relative","mb-2","flex","w-full","items-center","space-x-2","overflow-hidden","py-2",3,"resize"],["image","",1,"border-base-200","hover:border-base-300","hover:bg-base-200","relative","flex","h-32","w-36","shrink-0","cursor-pointer","flex-col","items-center","justify-center","rounded-xl","border-2","border-dashed"],[1,"text-4xl","opacity-60"],[1,"px-4","text-center","opacity-60"],["type","file",1,"absolute","inset-0","h-32","w-32","cursor-pointer","opacity-0",3,"change"],["image","",1,"bg-base-200","relative","h-32","w-36","shrink-0","overflow-hidden","rounded-sm","bg-cover","bg-center",3,"transform"],["upload","",1,"border-base-content/10","/5","bg-base-200","flex","h-32","w-36","shrink-0","items-center","justify-center","rounded-sm","border","bg-cover","bg-center",3,"transform","matTooltip"],["icon","","matRipple","",1,"bg-base-100","absolute","top-1/2","left-0","-translate-y-1/2","transform",3,"disabled"],["icon","","matRipple","",1,"bg-base-100","absolute","top-1/2","right-0","-translate-y-1/2","transform",3,"disabled"],["appearance","outline",1,"w-full"],["aria-label","Image List"],[3,"matChipInputTokenEnd","placeholder","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur"],["image","",1,"bg-base-200","relative","h-32","w-36","shrink-0","overflow-hidden","rounded-sm","bg-cover","bg-center"],["auth","",1,"pointer-events-none","absolute","top-1/2","left-1/2","z-10","-translate-x-1/2","-translate-y-1/2","object-contain",3,"source"],["overlay","",1,"text-base-100","absolute","inset-0","z-20"],["bg","",1,"absolute","inset-0","bg-black","opacity-0"],["actions","",1,"absolute","top-0","right-0","left-0","flex","items-center","justify-center","space-x-2","opacity-0"],["icon","",3,"click"],["upload","",1,"border-base-content/10","/5","bg-base-200","flex","h-32","w-36","shrink-0","items-center","justify-center","rounded-sm","border","bg-cover","bg-center",3,"click","matTooltip"],["mode","determinate",3,"value","diameter"],[1,"text-error","text-6xl"],["overlay","",1,"text-base-100","hover:bg-base-content","hover:bg-opacity-50","absolute","inset-0","flex","items-center","justify-center"],[1,"text-3xl","opacity-0"],["icon","","matRipple","",1,"bg-base-100","absolute","top-1/2","left-0","-translate-y-1/2","transform",3,"click","disabled"],["icon","","matRipple","",1,"bg-base-100","absolute","top-1/2","right-0","-translate-y-1/2","transform",3,"click","disabled"],[3,"removed"],[1,"max-w-md","truncate"],["matChipRemove",""]],template:function(t,i){if(t&1&&(ke(0,"div",3,0),He("resize",function(){return i.updateViewSpace()},HK),ke(2,"div",4)(3,"icon",5),yi(4,"add"),Be(),ke(5,"p",6),yi(6),rp(7,"translate"),Be(),ke(8,"input",7,1),He("change",function(d){return i.uploadImages(d)}),Be()(),y6(10,dl,14,3,"div",8,_6),y6(12,_l,4,6,"div",9,_6),Le(14,hl,3,1,"button",10),Le(15,fl,3,1,"button",11),Be(),ke(16,"mat-form-field",12)(17,"mat-chip-grid",13,2),y6(19,gl,6,2,"mat-chip-row",null,_6),Be(),ke(21,"input",14),rp(22,"translate"),He("matChipInputTokenEnd",function(d){return i.addImage(d)}),Be()()),t&2){let r=hv(18);me(2),IC("transform","translate(-"+i.offset()+"00%)"),me(4),Vo(" ",AC(7,9,"COMMON.IMAGE_UPLOADS")," "),me(4),v6(i.list()),me(2),v6(i.uploads()),me(2),Fe(i.length()>i.view_space()?14:-1),me(),Fe(i.length()>i.view_space()?15:-1),me(4),v6(i.list()),me(2),An$1("placeholder",AC(22,11,"COMMON.IMAGE_ADD_URL"))("matChipInputFor",r)("matChipInputSeparatorKeyCodes",i.separators)("matChipInputAddOnBlur",true);}},dependencies:[cx,vW,Iit,Sit,Tit,bit,xfe,Ct,Xt,Znt,Sue,gtt,Mt,trt],styles:[`[_nghost-%COMP%]{width:100%}[overlay][_ngcontent-%COMP%]{transition:background .2s}[image][_ngcontent-%COMP%]:hover   [actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%]:hover > icon[_ngcontent-%COMP%]{opacity:1!important}[image][_ngcontent-%COMP%]:hover   [bg][_ngcontent-%COMP%]{opacity:.4!important}[actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%] > icon[_ngcontent-%COMP%]{transition:opacity .2s}[image][_ngcontent-%COMP%]{transition:transform .2s}
/*# sourceMappingURL=image-list-field.component.css.map */`]});}}return n})();function bl(n,o){if(n&1&&(Bt(0,"div",1),rp(1,"safe")),n&2){let e=bt();An$1("innerHTML",DC(1,1,e.changelog(),"html"),VD);}}function vl(n,o){n&1&&(ke(0,"div",2)(1,"icon",3),yi(2,"close"),Be(),ke(3,"div",4),yi(4,"No changelog"),Be()());}var Ra=(()=>{class n{constructor(){this._data=m(Sle),this.loading=w$1(false),this.changelog=R(()=>dt(this._data.changelog||"",{async:false}));}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["changelog-modal"]],decls:3,vars:3,consts:[[3,"heading","hide_confirm"],[1,"markdown",3,"innerHTML"],[1,"flex","flex-col","items-center","justify-center","space-y-2"],[1,"text-3xl"],[1,"text"]],template:function(t,i){t&1&&(ke(0,"fullscreen-modal-shell",0),Le(1,bl,2,4,"div",1)(2,vl,5,0,"div",2),Be()),t&2&&(An$1("heading","Changelog")("hide_confirm",true),me(),Fe(i.changelog()?1:2));},dependencies:[zn,gtt,nW],encapsulation:2});}}return n})();function xl(n,o){if(n&1&&(ke(0,"div",1),yi(1),Be()),n&2){let e=bt(2);me(),Vo(" ",e.initials," ");}}function kl(n,o){if(n&1&&Bt(0,"img",2),n&2){let e=bt(2);An$1("alt",e.initials)("source",e.user().photo);}}function yl(n,o){if(n&1&&(ke(0,"div",0),Le(1,xl,2,1,"div",1)(2,kl,1,2,"img",2),Be()),n&2){let e=bt();Ge$1("user-id",e.user().id),me(),Fe(e.user().photo?2:1);}}var Wn=(()=>{class n{constructor(){this.user=Qt$1(void 0),this.is_valid=R(()=>{let e=this.user();if(!e)return  false;let t=(e.name||"").trim(),i=(e.email||"").trim();return t.startsWith("<empty>")||i.startsWith("<empty>")?false:!!(t||i||e.first_name||e.last_name)});}get initials(){let e=this.user();if(!e)return "NA";if(e.first_name&&e.last_name)return `${e.first_name[0]}${e.last_name[0]}`;let t=(e.name||"").replace(/<[^>]*>/g," ").trim();t||(t=(e.email||e.name||"").split("@")[0]);let i=t.replace(/[()[\]\-+=\\/@<>]+/gi," ").split(/\s+/).filter(Boolean);return i.length===0?"NA":i.length>1?`${i[0][0]}${i[i.length-1][0]}`:i[0].slice(0,2)}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["a-user-avatar"]],inputs:{user:[1,"user"]},decls:1,vars:1,consts:[[1,"border-base-100","bg-base-200","flex","h-[2.5em]","w-[2.5em]","items-center","justify-center","overflow-hidden","rounded-full","border-2"],["initials","",1,"text-base-content","uppercase","opacity-60"],["auth","",1,"flex","h-full","w-full","items-center","justify-center","object-cover","object-center",3,"alt","source"]],template:function(t,i){t&1&&Le(0,yl,3,2,"div",0),t&2&&Fe(i.is_valid()?0:-1);},dependencies:[Mt],encapsulation:2});}}return n})();function Cl(n,o){if(n&1&&(ke(0,"mat-option",8),yi(1),Be()),n&2){let e=o.$implicit;An$1("value",e.display_name||e.name),me(),Vo(" ",e.display_name||e.name," ");}}function Ml(n,o){if(n&1&&(ke(0,"mat-option",8),yi(1),Be()),n&2){let e=o.$implicit;An$1("value",e?.name||e),me(),Vo(" ",e.name||e," ");}}function wl(n,o){if(n&1&&(ke(0,"div",5)(1,"label"),yi(2),rp(3,"translate"),Be(),ke(4,"mat-form-field",6)(5,"mat-select",7),rp(6,"translate"),y6(7,Ml,2,2,"mat-option",8,_6),Be(),f4(),Be()()),n&2){let e=bt();me(2),cu(AC(3,3,"COMMON.SUPPORT_TYPE")),me(3),An$1("placeholder",AC(6,5,"COMMON.SUPPORT_TYPE"))("formField",e.form.issue_type),p4(),me(2),v6(e.support_request_types());}}function Tl(n,o){n&1&&(ke(0,"mat-error",11),yi(1),rp(2,"translate"),Be()),n&2&&(me(),Vo(" ",AC(2,1,"COMMON.DESCRIPTION_REQUIRED")," "));}function El(n,o){if(n&1&&(ke(0,"div",12)(1,"label",10),yi(2),rp(3,"translate"),Be(),Bt(4,"image-list-field",14),f4(),Be()),n&2){let e=bt();me(2),cu(AC(3,2,"COMMON.IMAGES")),me(2),An$1("formField",e.form.images),p4();}}var Aa=(()=>{class n{constructor(){this._dialog_ref=m(OT),this._org=m(wT),this._settings=m(oa),this._support_email=this._settings.signal("support_email","support@place.tech"),this._support_issue_types=this._settings.signal("support_issue_types",[]),this._allow_images=this._settings.signal("allow_support_ticket_images",false),this.loading=w$1(false),this.model=w$1({name:"",email:"",location:"",description:"",issue_type:"",images:[]}),this.form=$ue(this.model,e=>{Ort(e.name),Ort(e.email),Ort(e.description);}),this.desc_error=w$1(false),this.support_email=this._support_email,this.support_request_types=this._support_issue_types,this.allow_images=this._allow_images,this.buildings=this._org.building_list;}ngOnInit(){let e=xi();e&&this.model.update(t=>m$1(l({},t),{name:e.name,email:e.email})),this._org.building&&this.model.update(t=>m$1(l({},t),{location:this._org.building.display_name||this._org.building.name}));}async submit(){if(this.loading.set(true),this.form().markAsTouched(),this._updateDescError(),this.form().valid()){let e=this._org.module("smtp","Mailer");if(!e)return N2(yr("COMMON.SUPPORT_NO_MAILER"));let{name:t,email:i,location:r,description:d,images:x,issue_type:O}=this.model(),$=this.support_request_types().find(_e=>_e.name===O)?.email||this.support_email(),ie=yr("COMMON.SUPPORT_MAIL_HEADER",{issue_type:O?" - "+O:""});await e.execute("send_mail",[$,ie,`${t}
${i}

${r}

${d.replace(/<[^>]+>/g,"")}

${x.join(`
`)}`,`<p>${t}</p><p>${i}</p><p>${r}</p><p>${d}</p>${x.join("<br>")}`,[],[],[],[],null,`${i}`]),this._dialog_ref.close(),this.loading.set(false),wb(yr("COMMON.SUPPORT_SUCCESS"));}}_updateDescError(){this.desc_error.set(this.form.description().invalid()&&this.form.description().touched());}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["support-ticket-modal"]],decls:51,vars:45,consts:[[3,"confirm","heading","loading","confirm_text"],[1,"flex","flex-wrap","items-center","sm:space-x-2"],[1,"flex","flex-1","flex-col"],["appearance","outline"],["matInput","",3,"placeholder","formField"],[1,"flex","flex-col"],["appearance","outline",1,"w-full"],[3,"placeholder","formField"],[3,"value"],[1,""],[1,"mb-4"],[1,"my-2","text-xs"],[1,"pt-4"],[1,"mb-2","text-center","text-xs","italic"],[3,"formField"]],template:function(t,i){t&1&&(ke(0,"fullscreen-modal-shell",0),rp(1,"translate"),He("confirm",function(){return i.submit()}),ke(2,"form")(3,"div",1)(4,"div",2)(5,"label"),yi(6),rp(7,"translate"),ke(8,"span"),yi(9,"*"),Be()(),ke(10,"mat-form-field",3),Bt(11,"input",4),rp(12,"translate"),f4(),ke(13,"mat-error"),yi(14),rp(15,"translate"),Be()()(),ke(16,"div",2)(17,"label"),yi(18),rp(19,"translate"),ke(20,"span"),yi(21,"*"),Be()(),ke(22,"mat-form-field",3),Bt(23,"input",4),rp(24,"translate"),f4(),ke(25,"mat-error"),yi(26),rp(27,"translate"),Be()()()(),ke(28,"div",5)(29,"label"),yi(30),rp(31,"translate"),Be(),ke(32,"mat-form-field",6)(33,"mat-select",7),rp(34,"translate"),y6(35,Cl,2,2,"mat-option",8,_6),Be(),f4(),Be()(),Le(37,wl,9,7,"div",5),ke(38,"div",9)(39,"label",10),yi(40),rp(41,"translate"),ke(42,"span"),yi(43,"*"),Be()(),Bt(44,"rich-text-input",7),rp(45,"translate"),f4(),Le(46,Tl,3,3,"mat-error",11),Be(),Le(47,El,5,4,"div",12),Be(),ke(48,"div",13),yi(49),rp(50,"translate"),Be()()),t&2&&(An$1("heading","Raise a support ticket")("loading",i.loading()?"true":"")("confirm_text",AC(1,21,"COMMON.SUBMIT")),me(6),cu(AC(7,23,"FORM.NAME")),me(5),An$1("placeholder",AC(12,25,"FORM.NAME"))("formField",i.form.name),p4(),me(3),cu(AC(15,27,"FORM.NAME_REQUIRED")),me(4),cu(AC(19,29,"FORM.EMAIL")),me(5),An$1("placeholder",AC(24,31,"FORM.EMAIL"))("formField",i.form.email),p4(),me(3),cu(AC(27,33,"FORM.EMAIL_REQUIRED")),me(4),cu(AC(31,35,"COMMON.LOCATION")),me(3),An$1("placeholder",AC(34,37,"COMMON.LOCATION"))("formField",i.form.location),p4(),me(2),v6(i.buildings()),me(2),Fe(i.support_request_types().length?37:-1),me(3),Vo(" ",AC(41,39,"COMMON.SUPPORT_DESCRIPTION")," "),me(4),An$1("placeholder",AC(45,41,"COMMON.SUPPORT_DESCRIPTION"))("formField",i.form.description),p4(),me(2),Fe(i.desc_error()?46:-1),me(),Fe(i.allow_images()?47:-1),me(2),Vo(" ",AC(50,43,"COMMON.SUPPORT_MSG")," "));},dependencies:[Vv,cx,vW,nue,Int,Tnt,Mrt,Ct,Gl$1,Da,Oa,Zt,Qt,eW,pXe,zn,trt],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%}
/*# sourceMappingURL=support-ticket-modal.component.css.map */`]});}}return n})();var Il=["*"],Sl=(n,o)=>o.id;function Ol(n,o){if(n&1&&(ke(0,"div",4),yi(1),rp(2,"date"),Be()),n&2){let e=bt();me(),Vo(" ",D9(2,1,e.active_time(),e.time_format()+" (z)",e.tz())," ");}}function Rl(n,o){if(n&1&&(ke(0,"div",13),yi(1),rp(2,"date"),Be()),n&2){let e=bt(2);me(),Vo(" ",D9(2,1,e.force_time(),e.time_format()+" (z)",e.tz())," ");}}function Dl(n,o){n&1&&(ke(0,"icon",14),yi(1," done "),Be());}function Al(n,o){if(n&1){let e=SC();ke(0,"button",9),He("click",function(){dy(e);let i=bt();return uy(i.setValue(i.force_time().toString()))}),ke(1,"div",10)(2,"div",11)(3,"div",12),yi(4),rp(5,"date"),Be(),Le(6,Rl,3,5,"div",13),Be(),Le(7,Dl,2,0,"icon",14),Be()();}if(n&2){let e=bt();An$1("value",e.force_time()),me(4),Vo(" ",DC(5,4,e.force_time(),e.time_format())," "),me(2),Fe(e.timezone()&&e.tz()?6:-1),me(),Fe(e.active_time()===e.force_time()?7:-1);}}function Pl(n,o){if(n&1&&(ke(0,"div",13),yi(1),rp(2,"date"),Be()),n&2){let e=bt().$implicit,t=bt();me(),Vo(" ",D9(2,1,e.date,t.time_format()+" (z)",t.tz())," ");}}function Nl(n,o){n&1&&(ke(0,"icon",14),yi(1," done "),Be());}function Fl(n,o){if(n&1){let e=SC();ke(0,"button",9),He("click",function(){let i=dy(e).$implicit,r=bt();return uy(r.setValue(i.id))}),ke(1,"div",10)(2,"div",11)(3,"div",12),yi(4),rp(5,"date"),Be(),Le(6,Pl,3,5,"div",13),Be(),Le(7,Nl,2,0,"icon",14),Be()();}if(n&2){let e=o.$implicit,t=bt();An$1("value",e.id),Ge$1("data-time",e.id),me(4),bF(" ",DC(5,6,e.date,t.time_format())," ",t.extra_info_fn()(e.date)," "),me(2),Fe(t.timezone()&&t.tz()?6:-1),me(),Fe(t.active_time()===e.date?7:-1);}}function Vl(n,o){n&1&&(ke(0,"div",8),yi(1,"No time options to select"),Be());}function Ll(n,o){n&1&&(ke(0,"mat-error"),Pe(1),Be());}var Pa=(()=>{class n extends ao{constructor(){super(...arguments),this.step=Qt$1(15),this.disabled=FCe(void 0),this.no_past_times=Qt$1(true),this.use_24hr=Qt$1(false),this.force_time=Qt$1(void 0),this.no_error=Qt$1(void 0),this.extra_info_fn=Qt$1(e=>""),this.from=Qt$1(Dn$1(Date.now()).valueOf()),this.range=Qt$1(void 0),this.min_duration=Qt$1(0),this.timezone=Qt$1(""),this.date=w$1(new Date().valueOf()),this.time=w$1(so(new Date,"HH:mm")),this._time_options=w$1([]),this.show_select=w$1(false),this.active_time=w$1(Date.now()),this.no_options=w$1(false),this._menu_trigger=rl$1(at),this.time_format=R(()=>this.use_24hr()?"HH : mm":"h : mm a"),this._local_tz=cLe(Intl.DateTimeFormat().resolvedOptions().timeZone),this.tz=R(()=>{let e=this.timezone();if(!e)return "";let t=cLe(e);return t===this._local_tz?"":t});}ngOnInit(){this.show_select.set(true),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions(),this.timeout("hide",()=>this.show_select.set(false));let e=this.timezone()||void 0;this.active_time.set(this._time_options().find(t=>t.id===dLe(this.date(),e))?.date||this.active_time());}ngOnChanges(e){(e.no_past_times||e.step||e.from||e.range||e.min_duration)&&(this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions());}ngAfterViewInit(){let e=this._menu_trigger();e&&this.subscription("menu_opened",e.menuOpened.subscribe(()=>{this._scrollToSelectedTime();}));}_scrollToSelectedTime(){requestAnimationFrame(()=>{if(!this._menu_trigger()?.menu)return;let t=document.querySelector(".mat-mdc-menu-panel");if(!t)return;let i=this.timezone()||void 0,r=this.time()||dLe(new Date,i),d=t.querySelector(`[data-time="${r}"]`);if(!d&&this._time_options().length){let x=this._timeToMinutes(r),O=this._time_options()[0],$=1/0;for(let ie of this._time_options()){let _e=this._timeToMinutes(ie.id),ke=Math.abs(_e-x);ke<$&&($=ke,O=ie);}d=t.querySelector(`[data-time="${O.id}"]`);}if(d){if(typeof d.scrollIntoView!="function")return;d.scrollIntoView({block:"center",behavior:"instant"});}});}_timeToMinutes(e){let[t,i]=e.split(":").map(Number);return t*60+i}time_options(){let e=this.timezone()||void 0,t=(this.time()||"00:00").split(":"),i=uLe(this.date(),+t[0],+t[1],e),{minutes:r}=Xte(i,e),d=dLe(i,e),x=[...this._time_options()];return r%this.step()!==0&&this._isWithinRange(i)&&!x.find(O=>O.id===d)&&(x.push({date:i,id:d}),x.sort((O,$)=>`${O.id}`.localeCompare(`${$.id}`))),x}setValue(e){this.time.set(e);let t=this.timezone()||void 0;if(this._onChange){let x=(this.time()||"00:00").split(":"),O=uLe(this.date(),+x[0],+x[1],t);bLe(),this._onChange(O);}let i=this.force_time()||this.time(),r=(typeof i=="string"?i:dLe(i,t)).split(":"),d=uLe(this.date(),+r[0],+r[1],t);this.active_time.set(this._time_options().find(x=>x.id===(typeof i=="string"?i:dLe(i,t)))?.date||d);}writeValue(e){this.date.set(e||this.date());let t=this.timezone()||void 0,i=Nl$1(this.date());i=Ol$1(i,{nearestTo:5}),this.time.set(dLe(i,t)),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions();let r=this.force_time(),d=r?dLe(r,t):this.time();this.active_time.set(this._time_options().find(x=>x.id===d)?.date||i.valueOf());}setDisabledState(e){this.disabled.set(e),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times()||e,this.step())),this._updateNoOptions();}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouch=e;}_updateNoOptions(){this.no_options.set(!this.disabled()&&(!this._time_options()||this._time_options().length===0)&&!this.force_time());}generateAvailableTimes(e,t,i=15){let r=t?this.from():Math.max(this.from(),Date.now()),d=[],x=this.range(),O=this.timezone()||void 0,$=O?Jo(e,O):Dn$1(e).valueOf(),ie=O?es$1(e,O):Ai(e).valueOf(),_e=this.min_duration()||0,ke=x?x.start*60:void 0,st=x?x.end*60:void 0,et=st!=null&&_e>0?st-_e:st,ni=Math.max($,r,ke!=null?$+ke*60*1e3:$),L=Math.min(ie,et!=null?$+et*60*1e3:ie);if(ni>L)return d;let Z=this._roundUpToStep(ni,i),Ae=this._roundDownToStep(L,i);for(;!Qa$1(Z,Ae);)d.push({date:Z.valueOf(),id:dLe(Z,O)}),Z=yt(Z,i);return d}_isWithinRange(e){if(Qr(e,this.from()))return  false;let t=this.range();if(!t)return  true;let i=t.start*60,r=t.end*60,d=this.min_duration()||0,x=d>0?r-d:r,O=this.timezone()||void 0,{hours:$,minutes:ie}=Xte(e,O),_e=$*60+ie;return !(_e<i||_e>x)}_roundUpToStep(e,t){let i=Ol$1(e,{nearestTo:t});return Qr(i,e)&&(i=yt(i,t)),Nl$1(i)}_roundDownToStep(e,t){let i=Ol$1(e,{nearestTo:t});return Qa$1(i,e)&&(i=yt(i,-t)),Nl$1(i)}static{this.\u0275fac=(()=>{let e;return function(i){return (e||(e=ht(n)))(i||n)}})();}static{this.\u0275cmp=Ee({type:n,selectors:[["a-time-field"],["time-field"]],viewQuery:function(t,i){t&1&&su(i._menu_trigger,at,5),t&2&&au();},inputs:{step:[1,"step"],disabled:[1,"disabled"],no_past_times:[1,"no_past_times"],use_24hr:[1,"use_24hr"],force_time:[1,"force_time"],no_error:[1,"no_error"],extra_info_fn:[1,"extra_info_fn"],from:[1,"from"],range:[1,"range"],min_duration:[1,"min_duration"],timezone:[1,"timezone"]},outputs:{disabled:"disabledChange"},features:[qe([{provide:Wo,useExisting:rn$1(()=>n),multi:true}]),we,Et],ngContentSelectors:Il,decls:15,vars:12,consts:[["menu","matMenu"],["type","button","time-field","","matRipple","",1,"border-neutral","flex","h-12","w-full","items-center","justify-between","rounded-sm","border","px-2",3,"disabled","matMenuTriggerFor"],[1,"flex","w-1/2","flex-1","flex-col","px-2","text-left","leading-tight"],[1,"truncate"],[1,"truncate","text-xs","opacity-30"],[1,"text-2xl"],[1,"max-h-60","min-w-[18rem]"],["type","button","mat-menu-item","",1,"text-left",3,"value"],["mat-menu-item","","disabled",""],["type","button","mat-menu-item","",1,"text-left",3,"click","value"],[1,"flex","items-center","justify-between"],[1,"flex","flex-col","leading-tight"],[1,""],[1,"text-xs","opacity-30"],[1,"ml-2","text-2xl"]],template:function(t,i){if(t&1&&(Zt$1(),ke(0,"button",1)(1,"div",2)(2,"div",3),yi(3),rp(4,"date"),Be(),Le(5,Ol,3,5,"div",4),Be(),ke(6,"icon",5),yi(7,"arrow_drop_down"),Be()(),ke(8,"mat-menu",6,0),Le(10,Al,8,7,"button",7),y6(11,Fl,8,9,"button",7,Sl,false,Vl,2,0,"div",8),Be(),Le(14,Ll,2,0,"mat-error")),t&2){let r=hv(9);Oe("opacity-30",i.disabled()||i.no_options()),An$1("disabled",i.disabled()||i.no_options())("matMenuTriggerFor",r),me(3),Vo(" ",DC(4,9,i.active_time(),i.time_format())," "),me(2),Fe(i.timezone()&&i.tz()?5:-1),me(5),Fe(i.force_time()?10:-1),me(),v6(i.time_options()),me(3),Fe(i.no_error()?-1:14);}},dependencies:[Vv,Yt,Je,rt,at,cx,nue,gtt,K7],styles:[`mat-form-field[_ngcontent-%COMP%]{width:100%}
/*# sourceMappingURL=time-field.component.css.map */`]});}}return n})();function Bl(n,o){n&1&&(ke(0,"button",2)(1,"icon"),yi(2,"close"),Be()());}function Ul(n,o){if(n&1){let e=SC();ke(0,"div",7)(1,"div",11),yi(2),rp(3,"date"),Be(),ke(4,"mat-checkbox",12),He("ngModelChange",function(i){let r=dy(e).$implicit,d=bt(2);return d.setWeekdayEnabled(r.getDay(),i),uy(i&&d.initialiseDay(r.getDay()))}),Be(),f4(),Be();}if(n&2){let e=o.$implicit,t=bt(2);me(2),Vo(" ",DC(3,2,e,"EEE")," "),me(2),An$1("ngModel",t.weekdays_enabled()[e.getDay()]),p4();}}function zl(n,o){if(n&1&&(ke(0,"mat-option",20),yi(1),Be()),n&2){let e=o.$implicit;An$1("value",e.id),me(),Vo(" ",e.name," ");}}function Gl(n,o){if(n&1){let e=SC();ke(0,"button",23),He("click",function(){dy(e);let i=bt().$index,r=bt(2).$implicit,d=bt(3);return uy(d.addBlock(d.settings()[r.getDay()],i))}),ke(1,"icon"),yi(2,"add"),Be()();}}function Hl(n,o){if(n&1){let e=SC();ke(0,"button",24),He("click",function(){dy(e);let i=bt().$index,r=bt(2).$implicit,d=bt(3);return uy(d.removeBlock(d.settings()[r.getDay()],i))}),ke(1,"icon"),yi(2,"delete"),Be()();}}function Wl(n,o){if(n&1){let e=SC();ke(0,"div",16)(1,"a-time-field",18),He("ngModelChange",function(i){let r=dy(e).$implicit,d=bt(2).$implicit,x=bt(3);return uy(x.setStartTime(r,d.getDay(),i))}),Be(),f4(),ke(2,"a-time-field",18),He("ngModelChange",function(i){let r=dy(e).$implicit,d=bt(2).$implicit,x=bt(3);return uy(x.setEndTime(r,d.getDay(),i))}),Be(),f4(),ke(3,"mat-form-field",19)(4,"mat-select",12),AF("ngModelChange",function(i){let r=dy(e).$implicit;return o9(r.location,i)||(r.location=i),uy(i)}),y6(5,zl,2,2,"mat-option",20,_6),Be(),f4(),Be(),Le(7,Gl,3,0,"button",21),Le(8,Hl,3,0,"button",22),Be();}if(n&2){let e=o.$implicit,t=o.$index,i=bt(2).$implicit,r=bt(3);me(),An$1("ngModel",r.timeFrom(e.start_time))("from",r.timeFrom((t>0?r.settings()[i.getDay()].blocks[t-1]?.end_time:0)||0))("no_error",true),p4(),me(),An$1("ngModel",r.timeFrom(e.end_time))("from",r.timeFrom(e.start_time+.25))("no_error",true),p4(),me(2),IF("ngModel",e.location),p4(),me(),v6(r.options()),me(2),Fe(t===0?7:-1),me(),Fe(t!==0?8:-1);}}function ql(n,o){if(n&1&&(ke(0,"div",14)(1,"div",15),y6(2,Wl,9,9,"div",16,_6),Be(),ke(4,"h3",17),yi(5),rp(6,"date"),Be()()),n&2){let e=bt().$implicit,t=bt(3);me(2),v6(t.settings()[e.getDay()].blocks),me(3),Vo(" ",DC(6,1,e,"EEEE")," ");}}function jl(n,o){if(n&1&&Le(0,ql,7,4,"div",14),n&2){let e=o.$implicit,t=bt(3);Fe(t.weekdays_enabled()[e.getDay()]?0:-1);}}function $l(n,o){if(n&1&&(ke(0,"div",9),y6(1,jl,1,1,null,null,_6),ke(3,"h3",13),yi(4),rp(5,"translate"),Be()()),n&2){let e=bt(2);me(),v6(e.days),me(3),Vo(" ",AC(5,1,"COMMON.WORK_HOURS")," ");}}function Xl(n,o){n&1&&(ke(0,"div",10),Bt(1,"img",25),ke(2,"p",26),yi(3),rp(4,"translate"),Be()()),n&2&&(me(3),Vo(" ",AC(4,1,"COMMON.WORK_SETTINGS_EMPTY")," "));}function Kl(n,o){if(n&1&&(ke(0,"main",3)(1,"div",6),y6(2,Ul,5,5,"div",7,_6),ke(4,"h3",8),yi(5),rp(6,"translate"),Be()(),Le(7,$l,6,3,"div",9)(8,Xl,5,3,"div",10),Be()),n&2){let e=bt();me(2),v6(e.days),me(3),Vo(" ",AC(6,2,"COMMON.WORK_DAYS")," "),me(2),Fe(e.has_working_days()?7:8);}}function Yl(n,o){n&1&&(ke(0,"div",4),Bt(1,"mat-spinner",27),ke(2,"p",26),yi(3),rp(4,"translate"),Be()()),n&2&&(me(),An$1("diameter",32),me(2),Vo(" ",AC(4,2,"COMMON.WORK_SETTINGS_SAVE")," "));}function Ql(n,o){if(n&1){let e=SC();ke(0,"footer",5)(1,"button",28),He("click",function(){dy(e);let i=bt();return uy(i.saveChanges())}),yi(2),rp(3,"translate"),Be()();}n&2&&(me(2),Vo(" ",AC(3,1,"COMMON.SAVE")," "));}var qn=(()=>{class n{constructor(){this._data=m(Sle),this._dialog_ref=m(OT),this.options=w$1([]),this.option=w$1(""),this.settings=w$1([]),this.weekdays_enabled=w$1({}),this.changed=w$1(false),this.loading=w$1(false),this.available_weekdays=w$1([]),this.days=new Array(7).fill(0).map((e,t)=>kn$1(Ks$1(kn$1(Date.now(),30)),t)),this.has_working_days=R(()=>{let e=this.weekdays_enabled();return Object.keys(e).some(t=>e[t])}),this.option_name=R(()=>this.options().find(e=>e.id===this.option())?.name||""),this.now=R(()=>Nl$1(Date.now()).getTime());}ngOnInit(){let e=xi(),i=[...((this._data?.local?this._data.preferences:e.work_preferences)||[]).map(x=>m$1(l({},x),{blocks:[...x?.blocks||[]]}))],r={};for(let x of i)x.blocks.length&&(r[x.day_of_week]=true);this.settings.set(i),this.weekdays_enabled.set(r);let d=[{id:"wfo",name:yr("COMMON.WORK_OFFICE"),icon:"business"},{id:"wfh",name:yr("COMMON.WORK_HOME"),icon:"home"},{id:"aol",name:yr("COMMON.WORK_LEAVE"),icon:"event_busy"}];this.options.set(d),this.option.set(d[0].id);}timeFrom(e){return Nl$1(Ni(kn$1(new Date,1),{hours:Math.floor(e),minutes:e*60%60})).getTime()}fromTime(e){let t=new Date(e);return t.getHours()+t.getMinutes()/60}initialiseDay(e){let t=this.settings();t[e]||(t[e]={day_of_week:e,blocks:[]}),t[e].blocks||(t[e].blocks=[]),t[e].blocks.length===0&&this.addBlock(t[e],0),this.settings.set([...t]);}addBlock(e,t){e.blocks.splice(t+1,0,{start_time:9,end_time:17,location:"wfo"}),this.cleanupBlocks(e),this.settings.update(i=>[...i]);}removeBlock(e,t){e.blocks.length<=1||(e.blocks.splice(t,1),this.settings.update(i=>[...i]));}setEndTime(e,t,i){setTimeout(()=>{e.end_time=this.fromTime(i),this.cleanupBlocks(this.settings()[t]),this.settings.update(r=>[...r]);},50);}setStartTime(e,t,i){setTimeout(()=>{e.start_time=this.fromTime(i),this.cleanupBlocks(this.settings()[t]),this.settings.update(r=>[...r]);},50);}cleanupBlocks(e){if(e?.blocks?.length)for(let t=0;t<e.blocks.length;t++){let i=e.blocks[t];t>0&&i.start_time<e.blocks[t-1].end_time&&(i.start_time=e.blocks[t-1].end_time),i.end_time<=i.start_time&&(i.end_time=i.start_time+1);}}async saveChanges(e=true){this.loading.set(true),this._dialog_ref.disableClose=true;let t=new Array(7).fill(0).map((i,r)=>({day_of_week:r,blocks:[]}));for(let i of this.days){let r=i.getDay();this.weekdays_enabled()[r]&&(t[r]={day_of_week:r,blocks:this.settings()[r].blocks});}if(!this._data?.local){let i=await JR("current");await r2(i.id,m$1(l({},i),{groups:i.groups.filter(r=>!r.startsWith("placeos_")),work_preferences:t})).catch(r=>{throw this.loading.set(false),this._dialog_ref.disableClose=false,N2("Unable to save user work preferences."),r});}this.loading.set(false),this._dialog_ref.disableClose=false,e&&(this._data?.local||t$(),this._dialog_ref.close(t));}setWeekdayEnabled(e,t){this.weekdays_enabled.update(i=>m$1(l({},i),{[e]:t}));}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["wfh-settings-modal"]],decls:8,vars:6,consts:[[1,"bg-base-200","sticky","top-0","z-10","m-2","w-[calc(100%-1rem)]","rounded-sm","border-none","p-2"],[1,"px-2","text-xl","font-medium"],["icon","","matRipple","","mat-dialog-close","",1,"bg-base-200"],[1,"relative","flex","max-h-[calc(100vh-9rem)]","w-160","max-w-full","flex-col","space-y-2","overflow-x-hidden","overflow-y-auto","rounded-sm","px-2","py-4","sm:max-h-[65vh]","sm:p-4"],["loading","",1,"bg-base-100","relative","flex","h-72","w-[24rem]","flex-col","items-center","justify-center","space-y-2","overflow-hidden","rounded-sm","text-center"],[1,"border-base-200","flex","justify-end","border-t","px-4","py-2"],[1,"border-base-300","relative","mb-4","flex","w-full","items-center","justify-between","space-x-2","rounded-sm","border","p-2"],[1,"flex","flex-1","flex-col","items-center","pt-2"],[1,"bg-base-100","absolute","top-0","left-2","-translate-y-1/2","px-2"],[1,"border-base-300","relative","flex","w-full","flex-col","items-center","justify-between","space-y-4","rounded-sm","border","px-2","pt-6","pb-4","sm:px-4"],[1,"flex","flex-col","items-center","justify-center","space-y-4","px-8","py-16"],[1,"text-xs","font-bold","uppercase"],[3,"ngModelChange","ngModel"],[1,"bg-base-100","absolute","top-0","left-2","m-0!","-translate-y-1/2","px-2"],[1,"border-base-200","relative","flex","w-full","items-center","justify-between","space-x-2","rounded-sm","border","p-2"],[1,"w-1/2","flex-1","space-y-2","pt-2"],[1,"flex","items-center","space-x-2"],[1,"border-base-200","bg-base-100","bg-opacity-50","absolute","top-0","left-2","-translate-y-1/2","rounded-sm","border","px-2","text-sm","font-medium"],[1,"w-1/4","flex-1",3,"ngModelChange","ngModel","from","no_error"],["appearance","outline",1,"no-subscript","w-1/4","flex-1"],[3,"value"],["icon","","matRipple","",1,"border-base-400","h-12","w-12","rounded-sm","border"],["icon","","matRipple","",1,"border-error","text-error","h-12","w-12","rounded-sm","border"],["icon","","matRipple","",1,"border-base-400","h-12","w-12","rounded-sm","border",3,"click"],["icon","","matRipple","",1,"border-error","text-error","h-12","w-12","rounded-sm","border",3,"click"],["src","assets/icons/no-results.svg",1,"m-auto"],[1,"opacity-30"],[3,"diameter"],["btn","","matRipple","",1,"w-48",3,"click"]],template:function(t,i){t&1&&(ke(0,"header",0)(1,"h2",1),yi(2),rp(3,"translate"),Be(),Le(4,Bl,3,0,"button",2),Be(),Le(5,Kl,9,4,"main",3)(6,Yl,5,4,"div",4),Le(7,Ql,4,3,"footer",5)),t&2&&(me(2),Vo(" ",AC(3,4,"COMMON.WORK_LOCATION_SETTINGS")," "),me(2),Fe(i.loading()?-1:4),me(),Fe(i.loading()?6:5),me(2),Fe(i.loading()?-1:7));},dependencies:[Vv,pXe,hXe,Gl$1,tN,cx,vW,Zt,Qt,eW,Pa,Un,_i,txe,KMe,XJ,gtt,Ct,Xt,K7,trt],encapsulation:2});}}return n})();var Zl=["knob"],Jl=["valueIndicatorContainer"];function ec(n,o){if(n&1&&(ke(0,"div",2,1)(2,"div",5)(3,"span",6),yi(4),Be()()()),n&2){let e=bt();me(4),cu(e.valueIndicatorText);}}var tc=["trackActive"],ic=["*"];function nc(n,o){if(n&1&&Bt(0,"div"),n&2){let e=o.$implicit,t=o.$index,i=bt(3);Hs$1(e===0?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"),IC("transform",i._calcTickMarkTransform(t));}}function oc(n,o){if(n&1&&y6(0,nc,1,4,"div",8,g6),n&2){let e=bt(2);v6(e._tickMarks);}}function rc(n,o){if(n&1&&(ke(0,"div",6,1),Le(2,oc,2,0),Be()),n&2){let e=bt();me(2),Fe(e._cachedWidth?2:-1);}}function ac(n,o){if(n&1&&Bt(0,"mat-slider-visual-thumb",7),n&2){let e=bt();An$1("discrete",e.discrete)("thumbPosition",1)("valueIndicatorText",e.startValueIndicatorText);}}var D=(function(n){return n[n.START=1]="START",n[n.END=2]="END",n})(D||{}),ii=(function(n){return n[n.ACTIVE=0]="ACTIVE",n[n.INACTIVE=1]="INACTIVE",n})(ii||{}),Co=new E("_MatSlider"),Na=new E("_MatSliderThumb"),sc=new E("_MatSliderRangeThumb"),Fa=new E("_MatSliderVisualThumb");var lc=(()=>{class n{_cdr=m(It);_ngZone=m($);_slider=m(Co);_renderer=m(je);_listenerCleanups;discrete=false;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=false;_isActive=false;_isValueIndicatorVisible=false;_hostElement=m(j).nativeElement;_platform=m(ze$1);ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let t=this._sliderInputEl,i=this._renderer;this._listenerCleanups=[i.listen(t,"pointermove",this._onPointerMove),i.listen(t,"pointerdown",this._onDragStart),i.listen(t,"pointerup",this._onDragEnd),i.listen(t,"pointerleave",this._onMouseLeave),i.listen(t,"focus",this._onFocus),i.listen(t,"blur",this._onBlur)];}));}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e());}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let t=this._hostElement.getBoundingClientRect(),i=this._slider._isCursorOnSliderThumb(e,t);this._isHovered=i,i?this._showHoverRipple():this._hideRipple(this._hoverRippleRef);};_onMouseLeave=()=>{this._isHovered=false,this._hideRipple(this._hoverRippleRef);};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add("mdc-slider__thumb--focused");};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove("mdc-slider__thumb--focused");};_onDragStart=e=>{e.button===0&&(this._isActive=true,this._showActiveRipple());};_onDragEnd=()=>{this._isActive=false,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple();};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple"));}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},true),this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple"));}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple"));}_isShowingRipple(e){return e?.state===Xr.FADING_IN||e?.state===Xr.VISIBLE}_showRipple(e,t){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===D.START?D.END:D.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!t)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:true,persistent:true})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let t=this._getSibling();t._isShowingAnyRipple()||(this._hideValueIndicator(),t._hideValueIndicator());}_showValueIndicator(){this._hostElement.classList.add("mdc-slider__thumb--with-indicator");}_hideValueIndicator(){this._hostElement.classList.remove("mdc-slider__thumb--with-indicator");}_getSibling(){return this._slider._getThumb(this.thumbPosition===D.START?D.END:D.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ee({type:n,selectors:[["mat-slider-visual-thumb"]],viewQuery:function(t,i){if(t&1&&Mn$1(tN,5)(Zl,5)(Jl,5),t&2){let r;Ae(r=De())&&(i._ripple=r.first),Ae(r=De())&&(i._knob=r.first),Ae(r=De())&&(i._valueIndicatorContainer=r.first);}},hostAttrs:[1,"mdc-slider__thumb","mat-mdc-slider-visual-thumb"],inputs:{discrete:"discrete",thumbPosition:"thumbPosition",valueIndicatorText:"valueIndicatorText"},features:[qe([{provide:Fa,useExisting:n}])],decls:4,vars:2,consts:[["knob",""],["valueIndicatorContainer",""],[1,"mdc-slider__value-indicator-container"],[1,"mdc-slider__thumb-knob"],["matRipple","",1,"mat-focus-indicator",3,"matRippleDisabled"],[1,"mdc-slider__value-indicator"],[1,"mdc-slider__value-indicator-text"]],template:function(t,i){t&1&&(Le(0,ec,5,1,"div",2),Bt(1,"div",3,0)(3,"div",4)),t&2&&(Fe(i.discrete?0:-1),me(3),An$1("matRippleDisabled",true));},dependencies:[tN],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
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
`],encapsulation:2})}return n})(),jn=(()=>{class n{_ngZone=m($);_cdr=m(It);_elementRef=m(j);_dir=m(br,{optional:true});_globalRippleOptions=m(uf,{optional:true});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let t=this._getInput(D.END),i=this._getInput(D.START);t&&(t.disabled=this._disabled),i&&(i.disabled=this._disabled);}_disabled=false;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs();}_discrete=false;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI());}_showTickMarks=false;get min(){return this._min}set min(e){let t=e==null||isNaN(e)?this._min:e;this._min!==t&&this._updateMin(t);}_min=0;color;disableRipple=false;_updateMin(e){let t=this._min;this._min=e,this._isRange?this._updateMinRange({old:t,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange();}_updateMinRange(e){let t=this._getInput(D.END),i=this._getInput(D.START),r=t.value,d=i.value;i.min=e.new,t.min=Math.max(e.new,i.value),i.max=Math.min(t.max,t.value),i._updateWidthInactive(),t._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(t,i):this._onTranslateXChangeBySideEffect(i,t),r!==t.value&&this._onValueChange(t),d!==i.value&&this._onValueChange(i);}_updateMinNonRange(e){let t=this._getInput(D.END);if(t){let i=t.value;t.min=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t);}}get max(){return this._max}set max(e){let t=e==null||isNaN(e)?this._max:e;this._max!==t&&this._updateMax(t);}_max=100;_updateMax(e){let t=this._max;this._max=e,this._isRange?this._updateMaxRange({old:t,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange();}_updateMaxRange(e){let t=this._getInput(D.END),i=this._getInput(D.START),r=t.value,d=i.value;t.max=e.new,i.max=Math.min(e.new,t.value),t.min=i.value,t._updateWidthInactive(),i._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(i,t):this._onTranslateXChangeBySideEffect(t,i),r!==t.value&&this._onValueChange(t),d!==i.value&&this._onValueChange(i);}_updateMaxNonRange(e){let t=this._getInput(D.END);if(t){let i=t.value;t.max=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t);}}get step(){return this._step}set step(e){let t=isNaN(e)?this._step:e;this._step!==t&&this._updateStep(t);}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange();}_updateStepRange(){let e=this._getInput(D.END),t=this._getInput(D.START),i=e.value,r=t.value,d=t.value;e.min=this._min,t.max=this._max,e.step=this._step,t.step=this._step,this._platform.SAFARI&&(e.value=e.value,t.value=t.value),e.min=Math.max(this._min,t.value),t.max=Math.min(this._max,e.value),t._updateWidthInactive(),e._updateWidthInactive(),e.value<d?this._onTranslateXChangeBySideEffect(t,e):this._onTranslateXChangeBySideEffect(e,t),i!==e.value&&this._onValueChange(e),r!==t.value&&this._onValueChange(t);}_updateStepNonRange(){let e=this._getInput(D.END);if(e){let t=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),t!==e.value&&this._onValueChange(e);}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=en$1();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText="";endValueIndicatorText="";_endThumbTransform;_startThumbTransform;_isRange=false;_isRtl=R(()=>this._dir?.valueSignal()==="rtl");_hasViewInitialized=false;_tickMarkTrackWidth=0;_hasAnimation=false;_resizeTimer=null;_platform=m(ze$1);constructor(){m(yn$1).load(jl$1);let e=this._isRtl();Tv$1(()=>{let t=this._isRtl();t!==e&&(e=t,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI());});}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(D.END),t=this._getInput(D.START);this._isRange=!!e&&!!t,this._cdr.detectChanges();let i=this._getThumb(D.END);this._rippleRadius=i._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,t):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges();}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=true,e._updateThumbUIByValue();}_initUIRange(e,t){e.initProps(),e.initUI(),t.initProps(),t.initUI(),e._updateMinMax(),t._updateMinMax(),e._updateStaticStyles(),t._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=true,e._updateThumbUIByValue(),t._updateThumbUIByValue();}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null;}_onDirChangeRange(){let e=this._getInput(D.END),t=this._getInput(D.START);e._setIsLeftThumb(),t._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),t.translateX=t._calcTranslateXByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateWidthInactive(),t._updateWidthInactive(),e._updateThumbUIByValue(),t._updateThumbUIByValue();}_onDirChangeNonRange(){this._getInput(D.END)._updateThumbUIByValue();}_observeHostResize(){typeof ResizeObserver>"u"||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize());}),this._resizeObserver.observe(this._elementRef.nativeElement);});}_isActive(){return this._getThumb(D.START)._isActive||this._getThumb(D.END)._isActive}_getValue(e=D.END){let t=this._getInput(e);return t?t.value:this.min}_skipUpdate(){return !!(this._getInput(D.START)?._skipUIUpdate||this._getInput(D.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left;}_setTrackActiveStyles(e){let t=this._trackActive.nativeElement.style;t.left=e.left,t.right=e.right,t.transformOrigin=e.transformOrigin,t.transform=e.transform;}_calcTickMarkTransform(e){let t=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return `translateX(${this._isRtl()?this._cachedWidth-6-t:t}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e));}_onTranslateXChangeBySideEffect(e,t){this._hasViewInitialized&&(e._updateThumbUIByValue(),t._updateThumbUIByValue());}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges());}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck());}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(D.END),t=this._getInput(D.START);e._updateThumbUIByValue(),t._updateThumbUIByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateMinMax(),t._updateMinMax(),e._updateWidthInactive(),t._updateWidthInactive();}else {let e=this._getInput(D.END);e&&e._updateThumbUIByValue();}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges();}}_thumbsOverlap=false;_areThumbsOverlapping(){let e=this._getInput(D.START),t=this._getInput(D.END);return !e||!t?false:t.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let t=e.getSibling(),i=this._getThumb(e.thumbPosition);this._getThumb(t.thumbPosition)._hostElement.classList.remove("mdc-slider__thumb--top"),i._hostElement.classList.toggle("mdc-slider__thumb--top",this._thumbsOverlap);}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e));}_updateThumbUI(e){if(this._skipUpdate())return;let t=this._getThumb(e.thumbPosition===D.END?D.END:D.START);t._hostElement.style.transform=`translateX(${e.translateX}px)`;}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let t=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(t):e._hostElement.setAttribute("aria-valuetext",t),this.discrete){e.thumbPosition===D.START?this.startValueIndicatorText=t:this.endValueIndicatorText=t;let i=this._getThumb(e.thumbPosition);t.length<3?i._hostElement.classList.add("mdc-slider__thumb--short-value"):i._hostElement.classList.remove("mdc-slider__thumb--short-value");}}_updateValueIndicatorUIs(){let e=this._getInput(D.END),t=this._getInput(D.START);e&&this._updateValueIndicatorUI(e),t&&this._updateValueIndicatorUI(t);}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,i=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*i;}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e));}_updateTrackUIRange(e){let t=e.getSibling();if(!t||!this._cachedWidth)return;let i=Math.abs(t.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:"auto",right:`${this._cachedWidth-t.translateX}px`,transformOrigin:"right",transform:`scaleX(${i})`}):this._setTrackActiveStyles({left:`${t.translateX}px`,right:"auto",transformOrigin:"left",transform:`scaleX(${i})`});}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:"auto",right:"0px",transformOrigin:"right",transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:"0px",right:"auto",transformOrigin:"left",transform:`scaleX(${e.fillPercentage})`});}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e);}_updateTickMarkUINonRange(e){let t=this._getValue(),i=Math.max(Math.round((t-this.min)/e),0)+1,r=Math.max(Math.round((this.max-t)/e),0)-1;this._isRtl()?i++:r++,this._tickMarks=Array(i).fill(ii.ACTIVE).concat(Array(r).fill(ii.INACTIVE));}_updateTickMarkUIRange(e){let t=this._getValue(),i=this._getValue(D.START),r=Math.max(Math.round((i-this.min)/e),0),d=Math.max(Math.round((t-i)/e)+1,0),x=Math.max(Math.round((this.max-t)/e),0);this._tickMarks=Array(r).fill(ii.INACTIVE).concat(Array(d).fill(ii.ACTIVE),Array(x).fill(ii.INACTIVE));}_getInput(e){if(e===D.END&&this._input)return this._input;if(this._inputs?.length)return e===D.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===D.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation",this._hasAnimation);}_isCursorOnSliderThumb(e,t){let i=t.width/2,r=t.x+i,d=t.y+i,x=e.clientX-r,O=e.clientY-d;return Math.pow(x,2)+Math.pow(O,2)<Math.pow(i,2)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ee({type:n,selectors:[["mat-slider"]],contentQueries:function(t,i,r){if(t&1&&to(r,Na,5)(r,sc,4),t&2){let d;Ae(d=De())&&(i._input=d.first),Ae(d=De())&&(i._inputs=d);}},viewQuery:function(t,i){if(t&1&&Mn$1(tc,5)(Fa,5),t&2){let r;Ae(r=De())&&(i._trackActive=r.first),Ae(r=De())&&(i._thumbs=r);}},hostAttrs:[1,"mat-mdc-slider","mdc-slider"],hostVars:12,hostBindings:function(t,i){t&2&&(Hs$1("mat-"+(i.color||"primary")),Oe("mdc-slider--range",i._isRange)("mdc-slider--disabled",i.disabled)("mdc-slider--discrete",i.discrete)("mdc-slider--tick-marks",i.showTickMarks)("_mat-animation-noopable",i._noopAnimations));},inputs:{disabled:[2,"disabled","disabled",be],discrete:[2,"discrete","discrete",be],showTickMarks:[2,"showTickMarks","showTickMarks",be],min:[2,"min","min",lu],color:"color",disableRipple:[2,"disableRipple","disableRipple",be],max:[2,"max","max",lu],step:[2,"step","step",lu],displayWith:"displayWith"},exportAs:["matSlider"],features:[qe([{provide:Co,useExisting:n}])],ngContentSelectors:ic,decls:9,vars:5,consts:[["trackActive",""],["tickMarkContainer",""],[1,"mdc-slider__track"],[1,"mdc-slider__track--inactive"],[1,"mdc-slider__track--active"],[1,"mdc-slider__track--active_fill"],[1,"mdc-slider__tick-marks"],[3,"discrete","thumbPosition","valueIndicatorText"],[3,"class","transform"]],template:function(t,i){t&1&&(Zt$1(),Pe(0),ke(1,"div",2),Bt(2,"div",3),ke(3,"div",4),Bt(4,"div",5,0),Be(),Le(6,rc,3,1,"div",6),Be(),Le(7,ac,1,3,"mat-slider-visual-thumb",7),Bt(8,"mat-slider-visual-thumb",7)),t&2&&(me(6),Fe(i.showTickMarks?6:-1),me(),Fe(i._isRange?7:-1),me(),An$1("discrete",i.discrete)("thumbPosition",2)("valueIndicatorText",i.endValueIndicatorText));},dependencies:[lc],styles:[`.mdc-slider__track {
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
`],encapsulation:2})}return n})();var cc={provide:Wo,useExisting:rn$1(()=>gi),multi:true};var gi=(()=>{class n{_ngZone=m($);_elementRef=m(j);_cdr=m(It);_slider=m(Co);_platform=m(ze$1);_listenerCleanups;get value(){return lu(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let t=e+"";if(!this._hasSetInitialValue){this._initialValue=t;return}this._isActive||this._setValue(t);}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck();}valueChange=new re;dragStart=new re;dragEnd=new re;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e;}_translateX;thumbPosition=D.END;get min(){return lu(this._hostElement.min,0)}set min(e){this._hostElement.min=e+"",this._cdr.detectChanges();}get max(){return lu(this._hostElement.max,0)}set max(e){this._hostElement.max=e+"",this._cdr.detectChanges();}get step(){return lu(this._hostElement.step,0)}set step(e){this._hostElement.step=e+"",this._cdr.detectChanges();}get disabled(){return be(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled);}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=w$1("");_knobRadius=8;_tickMarkOffset=3;_isActive=false;_isFocused=false;_setIsFocused(e){this._isFocused=e;}_hasSetInitialValue=false;_initialValue;_formControl;_destroyed=new O;_skipUIUpdate=false;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=false;constructor(){let e=m(je);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,"pointerdown",this._onPointerDown.bind(this)),e.listen(this._hostElement,"pointermove",this._onPointerMove.bind(this)),e.listen(this._hostElement,"pointerup",this._onPointerUp.bind(this))];});}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete();}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=true),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue();}initUI(){this._updateThumbUIByValue();}_initValue(){this._hasSetInitialValue=true,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges());}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(false),this._onTouchedFn();}_onFocus(){this._slider._setTransition(false),this._slider._updateTrackUI(this),this._setIsFocused(true);}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:true});}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:true}),this._slider._onValueChange(this);}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled;}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let t=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=t,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=true,this._setIsFocused(true),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:true}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}));}}_handleValueCorrection(e){this._skipUIUpdate=true,setTimeout(()=>{this._skipUIUpdate=false,this._fixValue(e);},0);}_fixValue(e){let t=e.clientX-this._slider._cachedLeft,i=this._slider._cachedWidth,r=this._slider.step===0?1:this._slider.step,d=Math.floor((this._slider.max-this._slider.min)/r),x=this._slider._isRtl()?1-t/i:t/i,$=Math.round(x*d)/d*(this._slider.max-this._slider.min)+this._slider.min,ie=Math.round($/r)*r,_e=this.value;if(ie===_e){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=ie,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e);}_onPointerUp(){this._isActive&&(this._isActive=false,this._platform.SAFARI&&this._setIsFocused(false),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0));}_clamp(e){let t=this._tickMarkOffset,i=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,i),t)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`;}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e);}_updateThumbUIByPointerEvent(e,t){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(t);}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this);}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e);}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=true;}registerOnTouched(e){this._onTouchedFn=e;}setDisabledState(e){this.disabled=e;}focus(){this._hostElement.focus();}blur(){this._hostElement.blur();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=N({type:n,selectors:[["input","matSliderThumb",""]],hostAttrs:["type","range",1,"mdc-slider__input"],hostVars:1,hostBindings:function(t,i){t&1&&He("change",function(){return i._onChange()})("input",function(){return i._onInput()})("blur",function(){return i._onBlur()})("focus",function(){return i._onFocus()}),t&2&&Ge$1("aria-valuetext",i._valuetext());},inputs:{value:[2,"value","value",lu]},outputs:{valueChange:"valueChange",dragStart:"dragStart",dragEnd:"dragEnd"},exportAs:["matSliderThumb"],features:[qe([cc,{provide:Na,useExisting:n}])]})}return n})();var $n=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=le({type:n});static \u0275inj=se({imports:[Gl$1,At]})}return n})();function dc(n,o){if(n&1){let e=SC();ke(0,"settings-toggle",6),He("ngModelChange",function(i){dy(e);let r=bt();return uy(r.setDarkMode(i))}),ke(1,"div",7)(2,"icon",8),yi(3,"mode_night"),Be(),ke(4,"div"),yi(5),rp(6,"translate"),Be()()(),f4();}if(n&2){let e=bt();An$1("ngModel",e.dark_mode())("toggle",true),p4(),me(5),cu(AC(6,3,"COMMON.DARK_MODE"));}}function mc(n,o){if(n&1){let e=SC();ke(0,"settings-toggle",6),He("ngModelChange",function(i){dy(e);let r=bt();return uy(r.setLocatable(i))}),ke(1,"div",7)(2,"icon",8),yi(3,"emergency_share"),Be(),ke(4,"div"),yi(5),rp(6,"translate"),Be()()(),f4();}if(n&2){let e=bt();An$1("ngModel",e.locatable())("toggle",true),p4(),me(5),cu(AC(6,3,"COMMON.LOCATABLE"));}}function pc(n,o){if(n&1){let e=SC();ke(0,"div",9),yi(1),rp(2,"translate"),Be(),ke(3,"div",10)(4,"span",11),yi(5,"A"),Be(),ke(6,"mat-slider",12)(7,"input",13),He("ngModelChange",function(i){dy(e);let r=bt();return uy(r.applySetting("font_size",i))}),Be(),f4(),Be(),ke(8,"span",2),yi(9,"A"),Be(),ke(10,"span",14),yi(11),Be()();}if(n&2){let e=bt();me(),Vo(" ",AC(2,6,"COMMON.TEXT_SIZE_MSG")," "),me(5),An$1("min",10)("max",24)("step",2),me(),An$1("ngModel",e.font_size()),p4(),me(4),Vo(" ",e.font_size(),"px ");}}var La=(()=>{class n extends ao{constructor(){super(...arguments),this._data=m(mfe),this._settings=m(oa),this.accessible=w$1(false),this.locatable=w$1(false),this.can_locate=Ene("allow_locatability_option",true),this._allow_dark_mode=this._settings.signal("allow_dark_mode",false),this._font_size=this._settings.signal("font_size",16,true),this._accessible=this._settings.signal("accessible",false,true),this._theme=this._settings.theme_signal,this.dark_mode=R(()=>this._theme()==="dark"),this.can_change_dark_mode=R(()=>!!this._allow_dark_mode()),this.font_size=this._font_size,this.applySetting=(e,t)=>this.timeout("apply_setting",()=>{this._settings.saveUserSetting(e,t),e==="accessible"&&this.accessible.set(t);},500),this.close=()=>this._data?.close(),this.setLocatable=e=>{this._settings.updateLocatable(e),this.locatable.set(e);};}async ngOnInit(){this.accessible.set(!!this._accessible()),this.subscription("user",M1e.subscribe(e=>{this.locatable.set(e.locatable);}));}setDarkMode(e){let t=this._theme();e&&t!=="dark"?this._settings.setTheme("dark"):!e&&t==="dark"&&this._settings.setTheme("light");}static{this.\u0275fac=(()=>{let e;return function(i){return (e||(e=ht(n)))(i||n)}})();}static{this.\u0275cmp=Ee({type:n,selectors:[["accessibility-tooltip"]],features:[we],decls:18,vars:11,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","max-h-[65vh]","w-[20rem]","flex-col","overflow-auto","rounded-sm","pb-3","shadow-sm"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-3",3,"click"],[1,"text-2xl"],[1,""],[1,"space-y-2","p-2"],[3,"ngModel","toggle"],[3,"ngModelChange","ngModel","toggle"],[1,"flex","items-center","space-x-2"],[1,"-ml-2","text-xl"],[1,"bg-base-200","px-8","py-4","text-center"],[1,"flex","items-center","space-x-4","px-4"],[1,"text-sm"],[1,"w-1/2","flex-1","text-[16px]",3,"min","max","step"],["matSliderThumb","",1,"text-[16px]",3,"ngModelChange","ngModel"],[1,"bg-base-300","my-2","rounded-sm","px-2","py-1","text-base","text-white"]],template:function(t,i){t&1&&(ke(0,"div",0)(1,"div",1),He("click",function(){return i.close()}),ke(2,"icon",2),yi(3,"arrow_back"),Be(),ke(4,"div",3),yi(5),rp(6,"translate"),Be()(),ke(7,"div",4),Le(8,dc,7,5,"settings-toggle",5),Le(9,mc,7,5,"settings-toggle",5),ke(10,"settings-toggle",6),He("ngModelChange",function(d){return i.applySetting("accessible",d)}),ke(11,"div",7)(12,"icon",8),yi(13,"playlist_add"),Be(),ke(14,"div"),yi(15),rp(16,"translate"),Be()()(),f4(),Be(),Le(17,pc,12,8),Be()),t&2&&(me(5),Vo(" ",AC(6,7,"COMMON.CONTROLS_ACCESSIBILITY")," "),me(3),Fe(i.can_change_dark_mode()?8:-1),me(),Fe(i.can_locate()?9:-1),me(),An$1("ngModel",i.accessible())("toggle",true),p4(),me(5),cu(AC(16,9,"COMMON.TEXT_SIZE")),me(2),Fe(i.accessible()?17:-1));},dependencies:[Gl$1,tN,$n,jn,gi,fa,gtt,txe,GV,KMe,XJ,trt],encapsulation:2});}}return n})();function uc(n,o){if(n&1){let e=SC();ke(0,"mat-radio-button",8),He("click",function(){let i=dy(e).$implicit,r=bt();return uy(r.setBuilding(i))}),yi(1),Be();}if(n&2){let e=o.$implicit;An$1("value",e.id),me(),Vo(" ",e.display_name||e.name," ");}}var Ba=(()=>{class n{constructor(){this._data=m(mfe),this._org=m(wT),this.buildings=this._org.active_buildings,this.building=this._org.active_building,this.setBuilding=e=>{this._org.setBuilding(e,true),this._data?.close();},this.close=()=>this._data?.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["building-select"]],decls:16,vars:8,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","max-h-[65vh]","w-74","flex-col","overflow-auto","rounded-sm","pb-3","shadow-sm",3,"click"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-3"],[1,"text-2xl"],[1,"leading-tight"],[1,"text-xs","opacity-30"],[1,"px-4","py-2","text-xs","opacity-60"],[1,"flex","flex-col","space-y-2","px-2",3,"ngModel"],[3,"value"],[3,"click","value"]],template:function(t,i){t&1&&(ke(0,"div",0),He("click",function(){return i.close()}),ke(1,"div",1)(2,"icon",2),yi(3,"arrow_back"),Be(),ke(4,"div",3)(5,"div"),yi(6),Be(),ke(7,"div",4),yi(8),rp(9,"translate"),Be()()(),ke(10,"div",5),yi(11),rp(12,"translate"),Be(),ke(13,"mat-radio-group",6),y6(14,uc,2,2,"mat-radio-button",7,_6),Be(),f4(),Be()),t&2&&(me(6),Vo(" ",i.building()?.display_name||i.building()?.name," "),me(2),Vo(" ",AC(9,4,"RESOURCE.BUILDING")," "),me(3),Vo(" ",AC(12,6,"COMMON.BUILDING_SELECT")," "),me(2),An$1("ngModel",i.building()?.id),p4(),me(),v6(i.buildings()));},dependencies:[Hn,hi,ti,gtt,Gl$1,tN,txe,KMe,XJ,trt],encapsulation:2});}}return n})();function _c(n,o){n&1&&(ke(0,"div",3),yi(1),rp(2,"translate"),Be()),n&2&&(me(),Vo(" ",AC(2,1,"COMMON.DESK_HEIGHT_NOT_SET")," "));}function hc(n,o){if(n&1){let e=SC();ke(0,"button",13),He("click",function(){dy(e);let i=bt();return uy(i.onClose())}),yi(1),rp(2,"translate"),Be();}n&2&&(me(),Vo(" ",AC(2,1,"COMMON.SAVE")," "));}var Ua=(()=>{class n{constructor(){this._settings=m(oa),this.show_close=FCe(false),this.close=LCe(),this.not_set=w$1(false),this.desk_sitting_height=w$1(71),this.desk_standing_height=w$1(101);}ngOnInit(){this.not_set.set(!this._settings.get("desk_sitting_height")&&!this._settings.get("desk_standing_height")),this.desk_sitting_height.set(this._settings.get("desk_sitting_height")||71),this.desk_standing_height.set(this._settings.get("desk_standing_height")||101);}onClose(){this.saveSetting("desk_sitting_height",this.desk_sitting_height()),this.saveSetting("desk_standing_height",this.desk_standing_height()),this.close.emit();}formatLabel(e){return `${e.toFixed(1)}cm`}saveSetting(e,t){this._settings.saveUserSetting(e,t);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["desk-height-presets"]],inputs:{show_close:[1,"show_close"]},outputs:{show_close:"show_closeChange",close:"close"},decls:29,vars:23,consts:[[1,"bg-base-100","relative","w-[20rem]","rounded-sm","p-4","shadow-sm"],[1,"mb-2","text-lg"],[1,"mb-4","text-xs","opacity-60"],[1,"bg-warning","text-warning-content","-mx-2","mb-4","rounded-sm","p-2","text-xs"],[1,"mt-2","flex","flex-col"],[1,"flex","items-center","space-x-2"],["min","60","max","80","step","0.5","discrete","",1,"flex-1",3,"displayWith"],["matSliderThumb","",3,"ngModelChange","ngModel"],[1,"w-12","text-right","text-sm"],[1,"mr-2","flex","items-center","space-x-2"],["min","90","max","120","step","0.5","discrete","",1,"flex-1",3,"displayWith"],[1,"mr-2","w-12","text-right","text-sm"],["btn","","matRipple","",1,"mt-2","w-full"],["btn","","matRipple","",1,"mt-2","w-full",3,"click"]],template:function(t,i){t&1&&(ke(0,"div",0)(1,"div",1),yi(2),rp(3,"translate"),Be(),ke(4,"div",2),yi(5),rp(6,"translate"),Be(),Le(7,_c,3,3,"div",3),ke(8,"div",2),yi(9),rp(10,"translate"),Be(),ke(11,"div",4)(12,"label"),yi(13),rp(14,"translate"),Be(),ke(15,"div",5)(16,"mat-slider",6)(17,"input",7),He("ngModelChange",function(d){return i.desk_sitting_height.set(d),i.saveSetting("desk_sitting_height",d)}),Be(),f4(),Be(),ke(18,"div",8),yi(19),Be()(),ke(20,"label"),yi(21),rp(22,"translate"),Be(),ke(23,"div",9)(24,"mat-slider",10)(25,"input",7),He("ngModelChange",function(d){return i.desk_standing_height.set(d),i.saveSetting("desk_standing_height",d)}),Be(),f4(),Be(),ke(26,"div",11),yi(27),Be()()(),Le(28,hc,3,3,"button",12),Be()),t&2&&(me(2),Vo(" ",AC(3,13,"COMMON.DESK_HEIGHT_TITLE")," "),me(3),Vo(" ",AC(6,15,"COMMON.DESK_HEIGHT_MSG")," "),me(2),Fe(i.not_set()&&i.show_close()?7:-1),me(2),Vo(" ",AC(10,17,"COMMON.DESK_HEIGHT_INFO")," "),me(4),cu(AC(14,19,"COMMON.DESK_HEIGHT_SITTING")),me(3),An$1("displayWith",i.formatLabel),me(),An$1("ngModel",i.desk_sitting_height()),p4(),me(2),Vo(" ",i.desk_sitting_height().toFixed(1),"cm "),me(2),Vo("",AC(22,21,"COMMON.DESK_HEIGHT_STANDING"),"t"),me(3),An$1("displayWith",i.formatLabel),me(),An$1("ngModel",i.desk_standing_height()),p4(),me(2),Vo(" ",i.desk_standing_height().toFixed(1),"cm "),me(),Fe(i.show_close()?28:-1));},dependencies:[Gl$1,tN,$n,jn,gi,txe,GV,KMe,XJ,trt],encapsulation:2});}}return n})();function fc(n,o){if(n&1&&(ke(0,"a",4)(1,"div",5),Bt(2,"icon",6),ke(3,"div"),yi(4),Be()()()),n&2){let e=o.$implicit;An$1("href",e.link,Qy),me(2),An$1("icon",e.icon),me(2),cu(e.name);}}var za=(()=>{class n{constructor(){this._data=m(mfe),this._settings=m(oa),this._tiles=this._settings.signal("help",[]),this.close=()=>{this._data?.close();};}get tiles(){return this._tiles()}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["help-tooltip"]],decls:9,vars:3,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","w-74","flex-col","rounded-sm","shadow-sm",3,"click"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-4"],[1,"text-2xl"],[1,""],["matRipple","","target","_blank","ref","noreferer noopener",1,"w-full","p-2","text-left",3,"href"],[1,"hover:bg-base-200","flex","w-full","items-center","space-x-2","rounded-sm","p-2"],[1,"text-xl",3,"icon"]],template:function(t,i){t&1&&(ke(0,"div",0),He("click",function(){return i.close()}),ke(1,"div",1)(2,"icon",2),yi(3,"arrow_back"),Be(),ke(4,"div",3),yi(5),rp(6,"translate"),Be()(),y6(7,fc,5,3,"a",4,_6),Be()),t&2&&(me(5),cu(AC(6,1,"COMMON.CONTROLS_HELP")),me(2),v6(i.tiles));},dependencies:[Gl$1,tN,gtt,trt],encapsulation:2});}}return n})();var gc=(n,o)=>o.id;function bc(n,o){if(n&1&&(ke(0,"div",8),yi(1),Be()),n&2){let e=bt().$implicit;me(),Vo(" ",e.local," ");}}function vc(n,o){if(n&1){let e=SC();ke(0,"button",6),He("click",function(){let i=dy(e).$implicit,r=bt();return uy(r.setLocale(i.id))}),ke(1,"div",7),rp(2,"translate"),ke(3,"div"),yi(4),rp(5,"translate"),Be(),Le(6,bc,2,1,"div",8),rp(7,"translate"),Be()();}if(n&2){let e=o.$implicit,t=bt();me(),Oe("mt-2",AC(2,8,e.name)!==e.local)("border",t.active_locale===e.id)("border-info",t.active_locale===e.id),me(3),cu(AC(5,10,e.name)),me(2),Fe(AC(7,12,e.name)!==e.local?6:-1);}}var Ga=(()=>{class n{constructor(){this._data=m(mfe),this._settings=m(oa),this._locale=m(Lb),this._locales=this._settings.signal("locales",[]),this.setLocale=e=>{this._locale.setLocale(e),localStorage.setItem("PLACEOS.locale",e),setTimeout(()=>location.reload(),300);},this.close=()=>this._data?.close();}get active_locale(){return this._locale.locale}get locales(){return this._locales()}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["language-select"]],decls:12,vars:6,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","max-h-[65vh]","w-74","flex-col","overflow-auto","rounded-sm","pb-3","shadow-sm",3,"click"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-3"],[1,"text-2xl"],[1,""],[1,"px-4","py-2","text-xs","opacity-60"],["matRipple","",1,"flex","h-14","items-center","justify-between","space-x-8","px-2","text-left"],["matRipple","",1,"flex","h-14","items-center","justify-between","space-x-8","px-2","text-left",3,"click"],[1,"hover:bg-base-200","flex","flex-1","items-center","justify-between","rounded-sm","p-2","leading-tight"],[1,"bg-base-300","rounded-sm","px-2","py-1","text-xs","opacity-60"]],template:function(t,i){t&1&&(ke(0,"div",0),He("click",function(){return i.close()}),ke(1,"div",1)(2,"icon",2),yi(3,"arrow_back"),Be(),ke(4,"div",3),yi(5),rp(6,"translate"),Be()(),ke(7,"div",4),yi(8),rp(9,"translate"),Be(),y6(10,vc,8,14,"button",5,gc),Be()),t&2&&(me(5),cu(AC(6,2,"COMMON.LANGUAGE")),me(3),Vo(" ",AC(9,4,"COMMON.LANGUAGE_SELECT")," "),me(2),v6(i.locales));},dependencies:[Gl$1,tN,gtt,trt],encapsulation:2});}}return n})();function xc(n,o){if(n&1){let e=SC();ke(0,"mat-radio-button",8),He("click",function(){let i=dy(e).$implicit,r=bt();return uy(r.setRegion(i))}),yi(1),Be();}if(n&2){let e=o.$implicit;An$1("value",e.id),me(),Vo(" ",e.display_name||e.name," ");}}var Ha=(()=>{class n{constructor(){this._data=m(mfe),this._org=m(wT),this.regions=this._org.region_list,this.region=this._org.active_region,this.setRegion=async e=>{await this._org.setRegion(e),this._org.setBuilding(this._org.building,true),this._data?.close();},this.close=()=>this._data?.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["region-select"]],decls:16,vars:8,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","max-h-[65vh]","w-74","flex-col","overflow-auto","rounded-sm","pb-3","shadow-sm",3,"click"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-3"],[1,"text-2xl"],[1,"leading-tight"],[1,"text-xs","opacity-30"],[1,"px-4","py-2","text-xs","opacity-60"],[1,"flex","flex-col","space-y-2","px-2",3,"ngModel"],[3,"value"],[3,"click","value"]],template:function(t,i){t&1&&(ke(0,"div",0),He("click",function(){return i.close()}),ke(1,"div",1)(2,"icon",2),yi(3,"arrow_back"),Be(),ke(4,"div",3)(5,"div"),yi(6),Be(),ke(7,"div",4),yi(8),rp(9,"translate"),Be()()(),ke(10,"div",5),yi(11),rp(12,"translate"),Be(),ke(13,"mat-radio-group",6),y6(14,xc,2,2,"mat-radio-button",7,_6),Be(),f4(),Be()),t&2&&(me(6),Vo(" ",i.region()?.display_name||i.region()?.name," "),me(2),Vo(" ",AC(9,4,"RESOURCE.REGION")," "),me(3),Vo(" ",AC(12,6,"COMMON.REGION_SELECT")," "),me(2),An$1("ngModel",i.region()?.id),p4(),me(),v6(i.regions()));},dependencies:[Hn,hi,ti,gtt,Gl$1,tN,txe,KMe,XJ,trt],encapsulation:2});}}return n})();var Wa=(()=>{class n{constructor(){this._settings=m(oa),this._tooltip=m(mfe,{optional:true}),this.plate_number=w$1("");}async ngOnInit(){await B2(this._settings.initialised),this.plate_number.set(this._settings.get("plate_number")||"");}save(){this.plate_number()&&this._settings.saveUserSetting("plate_number",this.plate_number()),wb(yr("COMMON.PARKING_SETTINGS_SAVE")),this._tooltip?.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["user-parking-tooltip"]],decls:14,vars:13,consts:[[1,"border-base-300","bg-base-100","min-w-[20rem]","space-y-2","rounded-md","border","p-2"],[1,"border-base-300","border-b","text-lg","font-medium"],[1,"flex","flex-col"],["for","plate-number"],["appearance","outline",1,"no-subscript"],["matInput","",3,"ngModelChange","ngModel","placeholder"],["btn","","matRipple","",1,"w-full",3,"click"]],template:function(t,i){t&1&&(ke(0,"div",0)(1,"h3",1),yi(2),rp(3,"translate"),Be(),ke(4,"div",2)(5,"label",3),yi(6),rp(7,"translate"),Be(),ke(8,"mat-form-field",4)(9,"input",5),rp(10,"translate"),AF("ngModelChange",function(d){return o9(i.plate_number,d)||(i.plate_number=d),d}),Be(),f4(),Be()(),ke(11,"button",6),He("click",function(){return i.save()}),yi(12),rp(13,"translate"),Be()()),t&2&&(me(2),Vo(" ",AC(3,5,"COMMON.CONTROLS_PARKING")," "),me(4),cu(AC(7,7,"BOOKINGS.PARKING_PLATE_NUMBER")),me(3),IF("ngModel",i.plate_number),An$1("placeholder",AC(10,9,"BOOKINGS.PARKING_PLATE_NUMBER")),p4(),me(3),Vo(" ",AC(13,11,"COMMON.SAVE")," "));},dependencies:[cx,vW,Int,Tnt,txe,GV,KMe,XJ,trt],encapsulation:2});}}return n})();function kc(n,o){if(n&1){let e=SC();ke(0,"button",17),He("click",function(){let i=dy(e).$implicit,r=bt().$index,d=bt(2);return uy(d.setLocation(r,i.id))}),ke(1,"div",18)(2,"icon",11),yi(3),Be(),ke(4,"div",19),yi(5),rp(6,"translate"),Be()()();}if(n&2){let e=o.$implicit;me(3),cu(e.icon),me(2),Vo(" ",AC(6,2,e.name)," ");}}function yc(n,o){n&1&&Bt(0,"div",16);}function Cc(n,o){if(n&1&&(ke(0,"div",9)(1,"div",10)(2,"icon",11),yi(3),Be()(),ke(4,"div",12)(5,"button",13)(6,"div"),yi(7),Be(),ke(8,"icon"),yi(9,"expand_more"),Be()(),ke(10,"mat-menu",null,0),y6(12,kc,7,4,"button",14,_6),Be(),ke(14,"div",15),yi(15),rp(16,"date"),rp(17,"date"),Be()(),Le(18,yc,1,0,"div",16),Be()),n&2){let e=o.$implicit,t=o.$index,i=hv(11),r=bt(2);Oe("opacity-30",r.now>r.timeFrom(e.end_time)),me(),Oe("bg-base-200",r.now<r.timeFrom(e.start_time)||r.now>r.timeFrom(e.end_time))("bg-info",r.now>=r.timeFrom(e.start_time)&&r.now<=r.timeFrom(e.end_time))("text-info-content",r.now>=r.timeFrom(e.start_time)&&r.now<=r.timeFrom(e.end_time)),me(2),cu(r.location_icon(r.timeFrom(e.start_time))),me(2),An$1("matMenuTriggerFor",i),me(2),Vo(" ",r.location(r.timeFrom(e.start_time))," "),me(5),v6(r.locations()),me(3),bF(" ",DC(16,14,r.timeFrom(e.start_time),"shortTime")," \u2013 ",DC(17,17,r.timeFrom(e.end_time),"shortTime")," "),me(3),Fe(t>0?18:-1);}}function Mc(n,o){if(n&1&&(ke(0,"div",6),y6(1,Cc,19,20,"div",8,_6),Be()),n&2){let e=bt();me(),v6(e.active_preference?.blocks);}}function wc(n,o){n&1&&(ke(0,"div",7)(1,"icon",20),yi(2,"event_busy"),Be(),ke(3,"p",21),yi(4),rp(5,"translate"),Be(),ke(6,"p",21),yi(7),rp(8,"translate"),Be()()),n&2&&(me(4),Vo(" ",AC(5,2,"COMMON.WORK_LOCATION_EMPTY")," "),me(3),Vo(" ",AC(8,4,"COMMON.WORK_LOCATION_EDIT_INFO")," "));}var qa=(()=>{class n{constructor(){this._dialog=m(MT),this.locations=w$1([]),this.settings=w$1(void 0),this.overrides=w$1({});}get active_preference(){let e=so(new Date,"yyyy-MM-dd");return this.overrides()[e]?this.overrides()[e]:this.settings()?.find(t=>t.day_of_week===new Date().getDay())}get now(){return Nl$1(Date.now()).getTime()}ngOnInit(){let e=xi();this.settings.set(e.work_preferences),this.overrides.set(e.work_overrides),this.locations.set([{id:"wfo",name:yr("COMMON.WORK_OFFICE"),icon:"business"},{id:"wfh",name:yr("COMMON.WORK_HOME"),icon:"home"},{id:"aol",name:yr("COMMON.WORK_LEAVE"),icon:"event_busy"},{id:"sick",name:yr("COMMON.WORK_SICK"),icon:"sick"}]);}location_icon(e){return xi().location_icon(e+60*1e3)}location(e){return xi().location_name_time(e+60*1e3)}timeFrom(e){return Nl$1(Ni(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}editSettings(){this._dialog.open(qn);}async setLocation(e,t){let i=xi(),r=this.active_preference,d=so(Date.now(),"yyyy-MM-dd"),x=m$1(l({},i.work_overrides),{[d]:m$1(l({},r),{blocks:[...r.blocks.slice(0,e),m$1(l({},r.blocks[e]),{location:t}),...r.blocks.slice(e+1)]})});for(let O in x){let $=pa(O,"yyyy-MM-dd",new Date);(!x[O].blocks.length||Qr($,kn$1(Dn$1(Date.now()),-1)))&&delete x[O];}this.overrides.set(x),await r2(i.id,m$1(l({},i),{work_overrides:x})),t$();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["work-location-tooltip"]],decls:14,vars:11,consts:[["work_menu","matMenu"],[1,"bg-base-100","relative","-top-12","-right-1","flex","w-74","flex-col","overflow-hidden","rounded-sm","shadow-sm"],[1,"flex","items-center","justify-between","px-2"],[1,"px-2","py-4","font-medium"],["icon","","matRipple","","matTooltipPosition","left",1,"hover:bg-base-200",3,"click","matTooltip"],[1,"px-4","text-sm","font-medium"],[1,"pb-2"],[1,"flex","w-full","flex-col","items-center","justify-center","space-y-2","p-8","opacity-30"],[1,"relative","flex","items-center","px-4","py-2",3,"opacity-30"],[1,"relative","flex","items-center","px-4","py-2"],[1,"bg-base-200","z-20","flex","h-10","w-10","items-center","justify-center","rounded-full"],[1,"text-2xl"],[1,"ml-2","flex-1"],["matRipple","",1,"hover:bg-base-200","flex","items-center","space-x-2","rounded-sm","px-2","py-1","font-medium",3,"matMenuTriggerFor"],["mat-menu-item",""],[1,"px-2","text-xs","opacity-60"],[1,"border-base-200","absolute","-top-2","left-7","h-4","w-0","-translate-x-px","border-l-2","border-dashed"],["mat-menu-item","",3,"click"],[1,"flex","items-center","space-x-2"],[1,"pr-8"],[1,"text-6xl"],[1,"text-center","text-sm"]],template:function(t,i){t&1&&(ke(0,"div",1)(1,"div",2)(2,"h3",3),yi(3),rp(4,"translate"),Be(),ke(5,"button",4),rp(6,"translate"),He("click",function(){return i.editSettings()}),ke(7,"icon"),yi(8,"edit_note"),Be()()(),ke(9,"h3",5),yi(10),rp(11,"date"),Be(),Le(12,Mc,3,0,"div",6)(13,wc,9,6,"div",7),Be()),t&2&&(me(3),Vo(" ",AC(4,4,"COMMON.WORK_LOCATION")," "),me(2),An$1("matTooltip",AC(6,6,"COMMON.WORK_LOCATION_EDIT")),me(5),Vo(" ",DC(11,8,i.now,"fullDate")," "),me(2),Fe(i.active_preference?.blocks?.length?12:13));},dependencies:[Vv,pXe,Yt,Je,rt,at,Gl$1,tN,Znt,Sue,gtt,K7,trt],encapsulation:2});}}return n})();function Tc(n,o){if(n&1){let e=SC();ke(0,"button",28),He("click",function(){let i=dy(e).$implicit,r=bt(2);return uy(r.saveSetting("work_location",i.id))}),ke(1,"div",29)(2,"icon",23),yi(3),Be(),ke(4,"div",30),yi(5),rp(6,"translate"),Be()()();}if(n&2){let e=o.$implicit;me(3),cu(e.icon),me(2),Vo(" ",AC(6,2,e.name)," ");}}function Ec(n,o){if(n&1&&(ke(0,"div",7)(1,"h3",19),yi(2," Today's Work Location "),Be(),ke(3,"div",20)(4,"div",21)(5,"div",22)(6,"icon",23),yi(7),Be()(),ke(8,"div",24)(9,"button",25)(10,"div"),yi(11),Be(),ke(12,"icon"),yi(13,"expand_more"),Be()(),ke(14,"mat-menu",null,1),y6(16,Tc,7,4,"button",26,_6),Be(),ke(18,"div",27),yi(19),rp(20,"date"),rp(21,"date"),Be()()()()()),n&2){let e=hv(15),t=bt();me(7),cu(t.location_icon(t.timeFrom(t.active_block().start_time))),me(2),An$1("matMenuTriggerFor",e),me(2),Vo(" ",t.location(t.timeFrom(t.active_block().start_time))," "),me(5),v6(t.pref_locations()),me(3),bF(" ",DC(20,5,t.timeFrom(t.active_block().start_time),"shortTime")," \u2013 ",DC(21,8,t.timeFrom(t.active_block().end_time),"shortTime")," ");}}function Ic(n,o){if(n&1&&(ke(0,"div",8)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),yi(5,"layers"),Be()(),ke(6,"div",33),yi(7),Be(),ke(8,"icon",34),yi(9," chevron_right "),Be()()()()),n&2){let e=bt();An$1("content",e.region_select),me(7),Vo(" ",e.region()?.display_name||e.region()?.name," ");}}function Sc(n,o){if(n&1&&(ke(0,"div",8)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),yi(5,"business"),Be()(),ke(6,"div",33),yi(7),Be(),ke(8,"icon",34),yi(9," chevron_right "),Be()()()()),n&2){let e=bt();An$1("content",e.building_select),me(7),Vo(" ",e.building()?.display_name||e.building()?.name," ");}}function Oc(n,o){if(n&1&&(ke(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),yi(5,"help"),Be()(),ke(6,"div",35),yi(7),rp(8,"translate"),Be(),ke(9,"icon",34),yi(10," chevron_right "),Be()()()()),n&2){let e=bt();An$1("content",e.help_tooltip),me(7),Vo(" ",AC(8,2,"COMMON.CONTROLS_HELP")," ");}}function Rc(n,o){if(n&1&&(ke(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),yi(5,"share_location"),Be()(),ke(6,"div",35),yi(7),rp(8,"translate"),Be(),ke(9,"icon",34),yi(10,"chevron_right"),Be()()()()),n&2){let e=bt();An$1("content",e.work_location_tooltip),me(7),Vo(" ",AC(8,2,"COMMON.WORK_LOCATION")," ");}}function Dc(n,o){if(n&1&&(ke(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),yi(5,"mode_night"),Be()(),ke(6,"div",35),yi(7),rp(8,"translate"),Be(),ke(9,"icon",34),yi(10,"chevron_right"),Be()()()()),n&2){let e=bt();Oe("border-b!",!e.locales().length||!e.desk_height()),An$1("content",e.accessibility_tooltip),me(7),Vo(" ",AC(8,4,"COMMON.CONTROLS_ACCESSIBILITY")," ");}}function Ac(n,o){if(n&1&&(ke(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),yi(5,"desk"),Be()(),ke(6,"div",35),yi(7),rp(8,"translate"),Be(),ke(9,"icon",34),yi(10," chevron_right "),Be()()()()),n&2){let e=bt(),t=hv(15);Oe("border-b!",!e.locales().length),An$1("content",t),me(7),Vo(" ",AC(8,4,"COMMON.CONTROLS_DESKS")," ");}}function Pc(n,o){n&1&&Bt(0,"desk-height-presets");}function Nc(n,o){if(n&1&&(ke(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),yi(5,"parking_sign"),Be()(),ke(6,"div",35),yi(7),rp(8,"translate"),Be(),ke(9,"icon",34),yi(10," chevron_right "),Be()()()()),n&2){let e=bt();Oe("border-b!",!e.locales().length),An$1("content",e.parking_tooltip),me(7),Vo(" ",AC(8,4,"COMMON.CONTROLS_PARKING")," ");}}function Fc(n,o){n&1&&(ke(0,"div",37),yi(1," Language "),Be());}function Vc(n,o){if(n&1&&(ke(0,"div",11)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),yi(5,"language"),Be()(),ke(6,"div",36)(7,"div")(8,"div"),yi(9),rp(10,"translate"),Be(),Le(11,Fc,2,0,"div",37),rp(12,"translate"),Be(),ke(13,"div",38),rp(14,"translate"),yi(15),rp(16,"translate"),Be()(),ke(17,"icon",34),yi(18," chevron_right "),Be()()()()),n&2){let e=bt();An$1("content",e.language_tooltip),me(9),Vo(" ",AC(10,5,"COMMON.LANGUAGE")," "),me(2),Fe(AC(12,7,"COMMON.LANGUAGE")!=="Language"?11:-1),me(2),An$1("matTooltip",AC(14,9,e.active_locale)),me(2),Vo(" ",AC(16,11,e.active_locale)," ");}}function Lc(n,o){if(n&1){let e=SC();ke(0,"button",39),He("click",function(){dy(e);let i=bt();return uy(i.newSupportTicket())}),ke(1,"div",31)(2,"div",32)(3,"icon"),yi(4,"support_agent"),Be()(),ke(5,"div",35),yi(6),rp(7,"translate"),Be()()();}n&2&&(me(6),Vo(" ",AC(7,1,"COMMON.CONTROLS_SUPPORT")," "));}function Bc(n,o){if(n&1){let e=SC();ke(0,"button",40),He("click",function(){dy(e);let i=bt();return uy(i.reloadPage())}),yi(1),rp(2,"translate"),Be();}n&2&&(me(),Vo(" ",AC(2,1,"COMMON.CONTROLS_NEW_VERSION")," "));}function Uc(n,o){if(n&1){let e=SC();ke(0,"button",41),He("click",function(){dy(e);let i=bt();return uy(i.viewChangelog())}),yi(1),Be();}if(n&2){let e=bt();me(),Vo(" ",e.version.hash," ");}}function zc(n,o){if(n&1&&(ke(0,"span"),yi(1),Be()),n&2){let e=bt();me(),cu(e.version.hash);}}var ja=(()=>{class n{constructor(){this._settings=m(oa),this._org=m(wT),this._dialog=m(MT),this._locale=m(Lb),this.building=this._org.active_building,this.region=this._org.active_region,this.regions=this._org.region_list,this.sidebar=Qt$1(false),this.accessibility=Ene("allow_accessibility_changes",true),this.show_changelog=Ene("show_changelog",true),this.region_select=Ha,this.building_select=Ba,this.help_tooltip=za,this.accessibility_tooltip=La,this.language_tooltip=Ga,this.work_location_tooltip=qa,this.parking_tooltip=Wa,this.features=Ene("features",[]),this._locales=this._settings.signal("locales",[]),this._desk_height=this._settings.signal("desks.height_enabled",false),this._use_region=this._settings.signal("use_region",false),this._disable_building_select=this._settings.signal("disable_building_select",false),this.pref_locations=w$1([]),this.work_prefs=w$1([]),this.overrides=w$1({}),this.active_block=R(()=>{let e=so(new Date,"yyyy-MM-dd"),t=new Date().getDay();return (this.overrides()[e]?this.overrides()[e]:this.work_prefs().find(r=>r.day_of_week===t))?.blocks?.find(r=>this.now>=this.timeFrom(r.start_time)&&this.now<this.timeFrom(r.end_time))}),this.active_index=R(()=>{let e=so(new Date,"yyyy-MM-dd"),t=new Date().getDay();return (this.overrides()[e]?this.overrides()[e]:this.work_prefs().find(r=>r.day_of_week===t))?.blocks?.findIndex(r=>this.now>=this.timeFrom(r.start_time)&&this.now<this.timeFrom(r.end_time))}),this.locales=this._locales,this.desk_height=this._desk_height,this.use_region=this._use_region,this.disable_building_select=this._disable_building_select;}location_icon(e){return xi().location_icon(e+60*1e3)}location(e){return xi().location_name_time(e+60*1e3)}timeFrom(e){return Nl$1(Ni(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}get user(){return xi()}get groups(){return this.user?.groups?.join(`
`)||""}get version(){return Tm}get active_locale(){let e=this.locales(),t=this._locale.locale;for(let i of e)if(i.id===t)return i.name;return "LANGUAGE.ENGLISH"}get now(){return Nl$1(Date.now()).getTime()}get has_new_version(){return R3()}ngOnInit(){let e=xi();this.work_prefs.set(e?.work_preferences||[]),this.overrides.set(e?.work_overrides||{}),this.pref_locations.set([{id:"wfo",name:yr("COMMON.WORK_OFFICE"),icon:"business"},{id:"wfh",name:yr("COMMON.WORK_HOME"),icon:"home"},{id:"aol",name:yr("COMMON.WORK_LEAVE"),icon:"event_busy"},{id:"sick",name:yr("COMMON.WORK_SICK"),icon:"sick"}]);}logout(){sxe();}reloadPage(){location.reload();}newSupportTicket(){this._settings.get("app.external_support_url")?window.open(this._settings.get("app.external_support_url"),"_blank"):this._dialog.open(Aa);}openWfhModal(){this._dialog.open(qn);}async viewChangelog(){let e=await(await fetch("https://raw.githubusercontent.com/PlaceOS/user-interfaces/develop/CHANGELOG.md")).text();this._dialog.open(Ra,{data:{changelog:e}});}saveSetting(e,t){this._settings.saveUserSetting(e,t);}formatLabel(e){return `${e.toFixed(1)}cm`}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["user-controls"]],inputs:{sidebar:[1,"sidebar"]},decls:35,vars:32,consts:[["desk_height_tooltip",""],["work_menu","matMenu"],[1,"divide-base-200","border-base-300","bg-base-100","relative","mt-1","flex","flex-col","divide-y","overflow-auto","rounded-sm","border","shadow-sm"],["avatar","",1,"flex","w-full","min-w-72","flex-col","items-center","p-2"],[1,"text-2xl",3,"user","matTooltip"],[1,""],[1,"truncate","text-xs","opacity-60"],[1,"border-base-200","w-full","rounded-sm","border-y","py-2"],["customTooltip","",1,"relative",3,"content"],["customTooltip","",3,"content"],["customTooltip","",3,"content","border-b!"],["customTooltip","",1,"border-b!",3,"content"],["btn","","matRipple","",1,"clear","h-14","w-full","text-left"],[1,"flex","flex-col","items-center","p-4"],[1,"mb-4","flex","items-center","justify-center","space-x-2"],["btn","","matRipple","",1,"inverse",3,"click"],["btn","","matRipple",""],[1,"w-full","text-xs","opacity-60"],[1,"m-0","border-none","bg-none","p-0","text-xs","underline"],[1,"w-full","px-4","pb-2","text-sm","font-medium"],[1,"w-full"],[1,"relative","flex","items-center","px-4","py-2"],[1,"bg-info","text-info-content","z-20","flex","h-10","w-10","items-center","justify-center","rounded-full"],[1,"text-2xl"],[1,"ml-2","flex-1"],["matRipple","",1,"hover:bg-base-200","flex","items-center","space-x-2","rounded-sm","px-2","py-1","font-medium",3,"matMenuTriggerFor"],["mat-menu-item",""],[1,"px-2","text-xs","opacity-60"],["mat-menu-item","",3,"click"],[1,"flex","items-center","space-x-2"],[1,"pr-8"],[1,"flex","w-full","items-center","space-x-2"],[1,"bg-base-200","flex","h-8","w-8","items-center","justify-center","rounded-full"],[1,"w-px","flex-1","truncate"],[1,"text-2xl","opacity-60"],[1,"flex-1"],[1,"flex","flex-1","items-center","justify-between","space-x-4"],[1,"text-xs","opacity-30"],[1,"bg-base-200","max-w-24","truncate","rounded-sm","px-2","py-1","text-sm",3,"matTooltip"],["btn","","matRipple","",1,"clear","h-14","w-full","text-left",3,"click"],["btn","","matRipple","",3,"click"],[1,"m-0","border-none","bg-none","p-0","text-xs","underline",3,"click"]],template:function(t,i){t&1&&(ke(0,"div",2)(1,"div",3),Bt(2,"a-user-avatar",4),ke(3,"div",5),yi(4),Be(),ke(5,"div",6),yi(6),Be()(),Le(7,Ec,22,11,"div",7),Le(8,Ic,10,2,"div",8),Le(9,Sc,10,2,"div",8),Le(10,Oc,11,4,"div",9),Le(11,Rc,11,4,"div",9),Le(12,Dc,11,6,"div",10),Le(13,Ac,11,6,"div",10),Yn(14,Pc,1,0,"ng-template",null,0,ip),Le(16,Nc,11,6,"div",10),Le(17,Vc,19,13,"div",11),Le(18,Lc,8,3,"button",12),ke(19,"div",13)(20,"div",14)(21,"button",15),He("click",function(){return i.logout()}),yi(22),rp(23,"translate"),Be(),Le(24,Bc,3,3,"button",16),Be(),ke(25,"div",17),EC(26),yi(27),rp(28,"translate"),bC(),Le(29,Uc,2,1,"button",18)(30,zc,2,1,"span"),Be(),ke(31,"div",17),yi(32),rp(33,"date"),rp(34,"date"),Be()()()),t&2&&(Oe("border",!i.sidebar()),me(2),An$1("user",i.user)("matTooltip",i.groups),me(2),cu(i.user?.name),me(2),Vo(" ",i.user?.email," "),me(),Fe(i.features().includes("wfh")&&i.active_block()?7:-1),me(),Fe(i.regions()?.length?8:-1),me(),Fe(!i.disable_building_select()&&!i.use_region()?9:-1),me(),Fe(i.features().includes("help")?10:-1),me(),Fe(i.features().includes("wfh")?11:-1),me(),Fe(i.accessibility()?12:-1),me(),Fe(i.desk_height()?13:-1),me(3),Fe(i.features().includes("parking-controls")?16:-1),me(),Fe(i.locales().length>1?17:-1),me(),Fe(i.features().includes("support-ticket")?18:-1),me(4),Vo(" ",AC(23,22,"COMMON.CONTROLS_SIGN_OUT")," "),me(2),Fe(i.has_new_version?24:-1),me(3),Vo(" ",AC(28,24,"COMMON.CONTROLS_VERSION"),": "),me(2),Fe(i.show_changelog()?29:30),me(3),bF(" ",DC(33,26,i.version.time,"longDate")," (",DC(34,29,i.version.time,"shortTime"),") "));},dependencies:[Vv,pXe,Gl$1,tN,gtt,qrt,Znt,Sue,Wn,Yt,Je,rt,at,Ua,K7,trt],encapsulation:2});}}return n})();var Gc=["*"];function Hc(n,o){n&1&&(ke(0,"icon",2),yi(1,"person"),Be());}function Wc(n,o){if(n&1){let e=SC();ke(0,"div",1)(1,"button",3),He("click",function(){dy(e);let i=bt();return uy(i.close())}),Be(),ke(2,"div",4)(3,"div",5),Bt(4,"user-controls",6),ke(5,"button",7),He("click",function(){dy(e);let i=bt();return uy(i.close())}),ke(6,"icon",2),yi(7,"close"),Be()()()()();}if(n&2){let e=bt();me(),Oe("opacity-50",e.is_open())("opacity-0",!e.is_open()),me(2),Oe("translate-x-0",e.is_open())("translate-x-full",!e.is_open()),me(),An$1("sidebar",true);}}var $a=(()=>{class n{constructor(){this._close_timeout=null,this.is_open=w$1(false),this.is_rendered=w$1(false);}open(){this._close_timeout&&(clearTimeout(this._close_timeout),this._close_timeout=null),this.is_rendered.set(true),requestAnimationFrame(()=>this.is_open.set(true));}close(){this.is_open.set(false),this._close_timeout=setTimeout(()=>{this.is_rendered.set(false),this._close_timeout=null;},200);}onEscape(){this.is_open()&&this.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["user-controls-sidebar"]],hostBindings:function(t,i){t&1&&He("keydown.escape",function(){return i.onEscape()},$K);},ngContentSelectors:Gc,decls:4,vars:1,consts:[["icon","","matRipple","","avatar","","type","button","name","user-controls",1,"bg-base-200","flex","h-10","w-10","items-center","justify-center","rounded-full",3,"click"],[1,"fixed","inset-0","z-9999","overflow-hidden"],[1,"text-2xl"],["type","button","aria-label","Close user controls",1,"absolute","inset-0","bg-black","transition-opacity","duration-200",3,"click"],[1,"absolute","inset-y-0","right-0","flex","max-w-full"],[1,"bg-base-100","relative","h-full","w-80","max-w-[100vw]","overflow-auto","pt-[calc(env(safe-area-inset-top)+1rem)]","pb-[env(safe-area-inset-bottom)]","pr-[env(safe-area-inset-right)]","shadow-xl","transition-transform","duration-200","ease-out"],[3,"sidebar"],["icon","","default","","matRipple","","type","button",1,"absolute","top-[calc(env(safe-area-inset-top)+0.5rem)]","right-[calc(env(safe-area-inset-right)+0.5rem)]",3,"click"]],template:function(t,i){t&1&&(Zt$1(),ke(0,"button",0),He("click",function(){return i.open()}),Pe(1,0,null,Hc,2,0),Be(),Le(3,Wc,8,9,"div",1)),t&2&&(me(3),Fe(i.is_rendered()?3:-1));},dependencies:[Gl$1,tN,gtt,ja],encapsulation:2});}}return n})();var qc=["editor"];function jc(n,o){if(n&1){let e=SC();ke(0,"button",20),He("click",function(){dy(e);let i=bt(2);return uy(i.insertImage())}),ke(1,"icon"),yi(2,"image"),Be()(),ke(3,"button",20),He("click",function(){dy(e);let i=bt(2);return uy(i.insertAttachment())}),ke(4,"icon"),yi(5,"attachment"),Be()();}}function $c(n,o){if(n&1){let e=SC();ke(0,"div",3)(1,"select",5),He("change",function(i){dy(e);let r=bt();return uy(r.setFontFace(i))}),ke(2,"option",6),yi(3,"Font"),Be(),ke(4,"option",7),yi(5,"Arial"),Be(),ke(6,"option",8),yi(7,"Helvetica"),Be(),ke(8,"option",9),yi(9,"Georgia"),Be(),ke(10,"option",10),yi(11,"Times New Roman"),Be()(),ke(12,"select",11),He("change",function(i){dy(e);let r=bt();return uy(r.setFontSize(i))}),ke(13,"option",12),yi(14,"Size"),Be(),ke(15,"option",13),yi(16,"12"),Be(),ke(17,"option",14),yi(18,"14"),Be(),ke(19,"option",15),yi(20,"16"),Be(),ke(21,"option",16),yi(22,"18"),Be(),ke(23,"option",17),yi(24,"24"),Be(),ke(25,"option",18),yi(26,"32"),Be(),ke(27,"option",19),yi(28,"48"),Be()(),ke(29,"button",20),He("click",function(){dy(e);let i=bt();return uy(i.toggleBold())}),ke(30,"icon"),yi(31,"format_bold"),Be()(),ke(32,"button",20),He("click",function(){dy(e);let i=bt();return uy(i.toggleItalic())}),ke(33,"icon"),yi(34,"format_italic"),Be()(),ke(35,"button",20),He("click",function(){dy(e);let i=bt();return uy(i.toggleUnderline())}),ke(36,"icon"),yi(37,"format_underlined"),Be()(),ke(38,"button",20),He("click",function(){dy(e);let i=bt();return uy(i.makeUnorderedList())}),ke(39,"icon"),yi(40,"format_list_bulleted"),Be()(),ke(41,"button",20),He("click",function(){dy(e);let i=bt();return uy(i.makeOrderedList())}),ke(42,"icon"),yi(43,"format_list_numbered"),Be()(),ke(44,"button",20),He("click",function(){dy(e);let i=bt();return uy(i.insertLink())}),ke(45,"icon"),yi(46,"link"),Be()(),Le(47,jc,6,0),Be();}if(n&2){let e=bt();me(29),Oe("border-info",e.toolbar_state().bold)("text-info",e.toolbar_state().bold),me(3),Oe("border-info",e.toolbar_state().italic)("text-info",e.toolbar_state().italic),me(3),Oe("border-info",e.toolbar_state().underline)("text-info",e.toolbar_state().underline),me(3),Oe("border-info",e.toolbar_state().unordered_list)("text-info",e.toolbar_state().unordered_list),me(3),Oe("border-info",e.toolbar_state().ordered_list)("text-info",e.toolbar_state().ordered_list),me(3),Oe("border-info",e.toolbar_state().link)("text-info",e.toolbar_state().link),me(3),Fe(e.images_allowed()?47:-1);}}var Da=(()=>{class n extends ao{constructor(){super(...arguments),this._uploads=m(NXe),this._dom_sanitizer=m(ol$1),this._ng_zone=m($),this.placeholder=Qt$1(""),this.readonly=Qt$1(false),this.images_allowed=Qt$1(false),this._editor_el=rl$1("editor"),this._onChange=()=>{},this._onTouch=()=>{},this.toolbar_state=w$1({bold:false,italic:false,underline:false,unordered_list:false,ordered_list:false,link:false}),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e,this._syncValue=()=>{this._editor&&this.setValue(this._editor.getHTML());},this._handleTouched=()=>{this._editor&&this._onTouch();},this._refreshToolbarState=()=>{this._editor&&this._ng_zone.run(()=>{this.toolbar_state.set({bold:this._editor.hasFormat("B"),italic:this._editor.hasFormat("I"),underline:this._editor.hasFormat("U"),unordered_list:this._editor.hasFormat("UL"),ordered_list:this._editor.hasFormat("OL"),link:this._editor.hasFormat("A")});});};}ngOnChanges(e){e.placeholder&&this.timeout("init",()=>this._initialiseEditor()),e.readonly&&this._editor&&this._setReadonlyState();}ngAfterViewInit(){this.timeout("init",()=>this._initialiseEditor());}setValue(e){this._onChange(e);}writeValue(e){this.timeout("write",()=>{this._editor?(this._editor.setHTML(e||""),this._setPlaceholder()):this.timeout("write",()=>this.writeValue(e));});}toggleBold(){this._toggleFormat("B",()=>this._editor.removeBold(),()=>this._editor.bold());}toggleItalic(){this._toggleFormat("I",()=>this._editor.removeItalic(),()=>this._editor.italic());}toggleUnderline(){this._toggleFormat("U",()=>this._editor.removeUnderline(),()=>this._editor.underline());}makeUnorderedList(){this._toggleFormat("UL",()=>this._editor.removeList(),()=>this._editor.makeUnorderedList());}makeOrderedList(){this._toggleFormat("OL",()=>this._editor.removeList(),()=>this._editor.makeOrderedList());}insertLink(){if(!this._editor)return;if(this._editor.hasFormat("A")){this._editor.removeLink(),this._syncValue(),this._refreshToolbarState();return}let e=prompt("Enter URL");e&&(this._editor.makeLink(e),this._syncValue(),this._refreshToolbarState());}setFontFace(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontFace(t==="default"?"inherit":t),this._syncValue());}setFontSize(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontSize(t),this._syncValue());}insertImage(){this._embedFile(true);}insertAttachment(){this._embedFile(false);}async _initialiseEditor(){let e=this._editor_el()?.nativeElement;if(!e)return this.timeout("init",()=>this._initialiseEditor());let{default:t}=await import('./squire-CRXfBZqR.js');this._editor&&this._editor.destroy(),e.innerHTML="",this._editor=new t(e,{blockTag:"div",sanitizeToDOMFragment:i=>{let r=this._dom_sanitizer.sanitize(Or.HTML,i||"")||"",d=document.createElement("template");return d.innerHTML=r,d.content.cloneNode(true)}}),this._editor.addEventListener("input",this._syncValue),this._editor.addEventListener("blur",this._handleTouched),this._editor.addEventListener("cursor",this._refreshToolbarState),this._editor.addEventListener("select",this._refreshToolbarState),this._editor.addEventListener("pathChange",this._refreshToolbarState),this._setReadonlyState(),this._setPlaceholder(),this._refreshToolbarState();}_embedFile(e){if(!this._editor)return;let t=document.createElement("input");t.setAttribute("type","file"),e&&t.setAttribute("accept","image/*"),t.click(),t.onchange=()=>{let i=t.files?.[0];i&&this._uploads.uploadFile(i,true).then(r=>{if(!r)return;let d=`${location.origin}/api/engine/v2/uploads/${encodeURIComponent(r)}/url`;this._setAuth(),setTimeout(()=>{this._insertUploadedFile(d,i,e),this._syncValue();},100);}).catch(r=>{r instanceof GT||N2(`Failed to upload ${i.name}: ${r?.message||"Unknown error"}`);});};}_setReadonlyState(){let e=this._editor_el()?.nativeElement;e&&e.setAttribute("contenteditable",`${!this.readonly()}`);}_setPlaceholder(){let e=this._editor_el()?.nativeElement;e&&e.setAttribute("data-placeholder",this.placeholder()||"");}_toggleFormat(e,t,i){this._editor&&(this._editor.hasFormat(e)?t():i(),this._syncValue(),this._refreshToolbarState());}_insertUploadedFile(e,t,i){let r=t.type.startsWith("image/");if(i||r){this._editor.insertHTML(`<img src="${e}" alt="${t.name}" />`);return}this._editor.insertHTML(`<a href="${e}" target="_blank">${t.name}</a>`);}_setAuth(){let e=Ht();document.cookie=`${e==="x-api-key"?"api-key="+encodeURIComponent(Xo()):"bearer_token="+encodeURIComponent(e)};max-age=30;path=/api/engine/v2/uploads;samesite=strict;${location.protocol==="https:"?"secure;":""}`;}static{this.\u0275fac=(()=>{let e;return function(i){return (e||(e=ht(n)))(i||n)}})();}static{this.\u0275cmp=Ee({type:n,selectors:[["rich-text-input"]],viewQuery:function(t,i){t&1&&su(i._editor_el,qc,5),t&2&&au();},inputs:{placeholder:[1,"placeholder"],readonly:[1,"readonly"],images_allowed:[1,"images_allowed"]},features:[qe([{provide:Wo,useExisting:rn$1(()=>n),multi:true}]),we,Et],decls:5,vars:1,consts:[["container",""],["editor",""],[1,"w-full"],[1,"border-base-300","bg-base-100","flex","flex-wrap","items-center","gap-1","rounded-t","border","p-2"],[1,"squire-editor"],[1,"border-base-300","bg-base-100","rounded","border","p-2","text-sm",3,"change"],["value","default"],["value","Arial"],["value","Helvetica"],["value","Georgia"],["value","Times New Roman"],[1,"border-base-300","bg-base-100","min-w-24","rounded","border","p-2","text-sm",3,"change"],["value",""],["value","12px"],["value","14px"],["value","16px"],["value","18px"],["value","24px"],["value","32px"],["value","48px"],["icon","","type","button",1,"border-base-300","rounded","border","px-2","py-1","text-sm",3,"click"]],template:function(t,i){t&1&&(ke(0,"div",2,0),Le(2,$c,48,25,"div",3),Bt(3,"div",4,1),Be()),t&2&&(me(2),Fe(i.readonly()?-1:2));},dependencies:[gtt],styles:[`[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]     .squire-editor{border-radius:.25rem;border:1px solid var(--base-300);padding:.5rem;min-height:8rem;width:100%;outline:none}[_nghost-%COMP%]     .squire-editor:empty:before{content:attr(data-placeholder);color:var(--base-content);opacity:.5}[_nghost-%COMP%]     .squire-editor ul{list-style-type:disc;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor ol{list-style-type:decimal;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor li{margin:.125rem 0}
/*# sourceMappingURL=rich-text-input.component.css.map */`]});}}return n})();var Xc=(n,o)=>o.id+""+n;function Kc(n,o){if(n&1&&(ke(0,"a",1)(1,"icon",2),yi(2),Be(),ke(3,"span",3),yi(4),Be()()),n&2){let e=bt().$implicit;An$1("routerLink",e.route),me(2),cu(e.icon),me(2),cu(e.name);}}function Yc(n,o){if(n&1){let e=SC();ke(0,"button",6),He("click",function(){dy(e);let i=bt(2).$implicit,r=bt();return uy(r.toggleBlock(i.id||i._id))}),ke(1,"icon",2),yi(2),Be(),ke(3,"div",7),yi(4),Be(),ke(5,"icon",8),yi(6,"arrow_drop_down"),Be()();}if(n&2){let e=bt(2).$implicit;me(2),Vo(" ",e.icon," "),me(2),Vo(" ",e.name," ");}}function Qc(n,o){if(n&1&&(ke(0,"a",9),Bt(1,"icon",8),ke(2,"span"),yi(3),Be()()),n&2){let e=o.$implicit;An$1("routerLink",e.route),me(3),cu(e.name);}}function Zc(n,o){if(n&1&&(ke(0,"section",5),y6(1,Qc,4,2,"a",9,_6),Be()),n&2){let e=bt(2).$implicit,t=bt();An$1("@show",t.isBlockCollapsed(e.id||e._id)?"hide":"show"),me(),v6(e.children);}}function Jc(n,o){if(n&1&&(Le(0,Yc,7,2,"button",4),Le(1,Zc,3,1,"section",5)),n&2){let e=bt().$implicit;Fe(e.children?.length?0:-1),me(),Fe(e.children?.length?1:-1);}}function ed(n,o){if(n&1&&Le(0,Kc,5,3,"a",1)(1,Jc,2,2),n&2){let e=o.$implicit;Fe(e.children?1:0);}}var Tv=(()=>{class n extends ao{constructor(){super(),this._settings=m(oa),this._org=m(wT),this._element_ref=m(j),this.show_block=w$1({}),this.links=[],this.filtered_links=w$1([]),ot(()=>{this._org.active_building()&&this.timeout("update_links",()=>this.updateFilteredLinks(),500);});}get feature_list(){return this._settings.get("app.features")||[]}get feature_groups(){return this._settings.get("app.feature_groups")||{}}get is_admin(){let e=xi().groups||[],t=this._settings.get("app.admin_group")||"admin";return e.includes(t)||e.includes("placeos_admin")||e.includes("placeos_support")}async ngOnInit(){await this._org.waitUntilInitialised(),this.links=[{name:yr("APP.CONCIERGE.MENU_BOOKINGS"),icon:"add_circle",children:[{id:"spaces",name:yr("APP.CONCIERGE.MENU_ROOM_BOOKINGS"),route:["/book/rooms"]},{id:"desks",name:yr("APP.CONCIERGE.MENU_DESK_BOOKINGS"),route:["/book/desks/events"]},{id:"parking",name:yr("APP.CONCIERGE.MENU_PARKING_BOOKINGS"),route:["/book/parking/events"]},{id:"parking-bookings",name:yr("APP.CONCIERGE.MENU_PARKING_BOOKINGS"),route:["/book/parking/events"]},{id:"lockers",name:yr("APP.CONCIERGE.MENU_LOCKER_BOOKINGS"),route:["/book/lockers/events"]},{id:"assets",name:yr("APP.CONCIERGE.MENU_ASSET_BOOKINGS"),route:["/book/assets/list/requests"]},{id:"catering",name:yr("APP.CONCIERGE.MENU_CATERING_BOOKINGS"),route:["/book/catering/orders"]},{id:"visitors",name:yr("APP.CONCIERGE.MENU_VISITOR_BOOKINGS"),route:["/book/visitors"]},{id:"visitor-rules",name:yr("APP.CONCIERGE.MENU_VISITOR_RULES"),route:["/book/visitors/rules"]}]},{id:"facilities",name:yr("APP.CONCIERGE.MENU_MANAGEMENT"),icon:"place",children:[{id:"zones",name:yr("APP.CONCIERGE.MENU_MANAGE_ZONES"),route:["/zone-management"]},{id:"spaces",name:yr("APP.CONCIERGE.MENU_MANAGE_ROOMS"),route:["/room-management"]},{id:"desks",name:yr("APP.CONCIERGE.MENU_MANAGE_DESKS"),route:["/book/desks/manage"]},{id:"parking",name:yr("APP.CONCIERGE.MENU_MANAGE_PARKING"),route:["/book/parking/manage"]},{id:"parking-manage",name:yr("APP.CONCIERGE.MENU_MANAGE_PARKING"),route:["/book/parking/manage"]},{id:"lockers",name:yr("APP.CONCIERGE.MENU_MANAGE_LOCKERS"),route:["/book/lockers/manage"]},{id:"catering",name:yr("APP.CONCIERGE.MENU_MANAGE_CATERING"),route:["/book/catering/menu"]},{id:"points",name:yr("APP.CONCIERGE.MENU_MANAGE_POINTS"),route:["/points-management"]},{id:"emergency-contacts",name:yr("APP.CONCIERGE.MENU_MANAGE_CONTACTS"),icon:"assignment_ind",route:["/users/staff/emergency-contacts"]},{id:"signage",name:yr("APP.CONCIERGE.MENU_MANAGE_SIGNAGE"),route:["/signage"]},{id:"points-of-interest",name:yr("APP.CONCIERGE.MENU_MANAGE_MAP_FEATURES"),route:["/points-of-interest"]},{id:"url-management",name:yr("APP.CONCIERGE.MENU_MANAGE_URLS"),route:["/url-management"]},{id:"email-templates",name:yr("APP.CONCIERGE.MENU_MANAGE_EMAILS"),route:["/email-templates"]},{id:"deals-n-offers",name:yr("APP.CONCIERGE.MENU_MANAGE_DEALS"),route:["/deals-n-offers"]}]},{id:"assets",name:yr("APP.CONCIERGE.MENU_ASSETS"),route:["/book/assets/list/items"],icon:"vibration"},{id:"internal-users",name:yr("APP.CONCIERGE.MENU_USER_LIST"),icon:"assignment_ind",route:["/users/staff"]},{id:"events",name:yr("APP.CONCIERGE.MENU_EVENTS"),route:["/entertainment/events"],icon:"confirmation_number"},{id:"surveys",name:yr("APP.CONCIERGE.MENU_SURVEYS"),route:["/surveys"],icon:"add_reaction"},{_id:"reports",name:yr("APP.CONCIERGE.MENU_REPORTS"),icon:"analytics",children:[{id:"attendance-report",name:yr("APP.CONCIERGE.MENU_REPORT_SITE_ATTENDANCE"),route:["/reports/attendance"]},{id:"booking-report",name:yr("APP.CONCIERGE.MENU_REPORT_ROOMS"),route:["/reports/bookings"]},{id:"desk-report",name:yr("APP.CONCIERGE.MENU_REPORT_DESKS"),route:["/reports/desks"]},{id:"parking-report",name:yr("APP.CONCIERGE.MENU_REPORT_PARKING"),route:["/reports/parking"]},{id:"lockers-report",name:yr("APP.CONCIERGE.MENU_REPORT_LOCKERS"),route:["/reports/lockers"]},{id:"catering-report",name:yr("APP.CONCIERGE.MENU_REPORT_CATERING"),route:["/reports/catering"]},{id:"contact-tracing-report",name:yr("APP.CONCIERGE.MENU_REPORT_CONTACT_TRACING"),route:["/reports/contact-tracing"]},{id:"assets-report",name:yr("APP.CONCIERGE.MENU_REPORT_ASSETS"),route:["/reports/assets"]},{id:"visitors-report",name:yr("APP.CONCIERGE.MENU_REPORT_VISITORS"),route:["/reports/visitors"]}]}],this.updateFilteredLinks(),this.timeout("update_inview",()=>this._moveActiveLinkIntoView(),50),this.timeout("update_links",()=>this.updateFilteredLinks(),500);}_isFeatureAvailable(e){if(e.startsWith("*"))return  true;let t=this.feature_list.includes(e),i=this.feature_groups[e]||[],r=xi().groups;return !!(t&&(this.is_admin||!i.length||r.find(d=>i.includes(d))))}updateFilteredLinks(){let e=this._settings.get("app.custom_reports")||[];if(e.length&&this.links.find(t=>t._id==="reports")){let t=this.links.find(i=>i._id==="reports");t.children=Oi(t.children.concat(e.map(i=>m$1(l({},i),{id:`*${i.id}`,route:["/reports",i.id]}))),"id");}if(this.filtered_links.set(this.links.map(t=>m$1(l({},t),{children:t.children?t.children.filter(i=>this._isFeatureAvailable(i.id)):null})).filter(t=>(!t.id||t.id==="home"||this._isFeatureAvailable(t.id))&&t.route||t.children?.length)),this.filtered_links().find(t=>t.id==="home")){let t=this.filtered_links().find(i=>i.id==="home");t.route=this._settings.get("app.default_route")||["/"];}this.is_admin||this.filtered_links.update(t=>t.filter(i=>i.id!=="facilities"));}toggleBlock(e){this.show_block.update(t=>m$1(l({},t),{[e]:!t[e]}));}isBlockCollapsed(e){return !!this.show_block()[e]}_moveActiveLinkIntoView(){let e=this._element_ref.nativeElement.querySelector("a.active");e&&e.scrollIntoView({block:"center",behavior:"instant"});}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["app-sidebar"]],features:[we],decls:3,vars:0,consts:[[1,"border-base-200","h-full","w-64","overflow-auto","border-r","py-2","pr-3"],["matRipple","","routerLinkActive","active",1,"hover:bg-base-200","my-1","flex","w-full","items-center","space-x-2","rounded-r-full","p-1",3,"routerLink"],[1,"text-2xl","opacity-60"],[1,"font-medium"],["matRipple","",1,"hover:bg-base-200","my-1","flex","w-full","items-center","space-x-2","rounded-r-full","p-1"],[1,"w-full","overflow-hidden"],["matRipple","",1,"hover:bg-base-200","my-1","flex","w-full","items-center","space-x-2","rounded-r-full","p-1",3,"click"],[1,"flex-1","text-left","font-medium"],[1,"text-2xl"],["routerLinkActive","active",1,"hover:bg-base-200","my-1","flex","w-full","items-center","space-x-2","rounded-r-full","p-1",3,"routerLink"]],template:function(t,i){t&1&&(ke(0,"div",0),y6(1,ed,2,1,null,null,Xc),Be()),t&2&&(me(),v6(i.filtered_links()));},dependencies:[AX,RE,vX,Gl$1,tN,gtt],styles:[`[_nghost-%COMP%]{height:100%}a.active[_ngcontent-%COMP%]{background-color:var(--secondary);color:var(--secondary-content)}a.active[_ngcontent-%COMP%]:hover{color:var(--base-content);opacity:.75}
/*# sourceMappingURL=app-sidebar.component.css.map */`],data:{animation:[XJe]}});}}return n})();var td=()=>["/"],Nv=(()=>{class n{constructor(){this._settings=m(oa),this._theme=this._settings.theme_signal,this._logo_dark=this._settings.signal("app.logo_dark",{},true),this._logo_light=this._settings.signal("app.logo_light",{},true),this.logo_src=R(()=>{let e=this.logo();return typeof e=="string"?e:e?.src||""}),this.logo=R(()=>(this._theme()==="dark"?this._logo_dark():this._logo_light())||{}),this.user=mne();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["app-topbar"]],decls:10,vars:4,consts:[[1,"border-base-200","flex","items-center","border-b","p-2"],[1,"w-64"],[3,"routerLink"],["auth","",1,"h-12",3,"source"],[1,"flex","flex-1","items-center","justify-end","space-x-2"],["btn","","icon","","matRipple",""],[1,"text-2xl"],[1,"mr-2"],[3,"user"]],template:function(t,i){t&1&&(ke(0,"div",0)(1,"div",1)(2,"a",2),Bt(3,"img",3),Be()(),ke(4,"div",4)(5,"button",5)(6,"icon",6),yi(7,"notifications"),Be()(),ke(8,"user-controls-sidebar",7),Bt(9,"a-user-avatar",8),Be()()()),t&2&&(me(2),An$1("routerLink",h9(3,td)),me(),An$1("source",i.logo_src()),me(6),An$1("user",i.user()));},dependencies:[AX,RE,Wn,Gl$1,tN,Mt,gtt,$a],styles:[`[_nghost-%COMP%]{width:100%}
/*# sourceMappingURL=app-topbar.component.css.map */`]});}}return n})();export{$t as $,Ct as C,Da as D,Hn as H,Je as J,Mt as M,Nv as N,Oa as O,Pa as P,Qt as Q,Sa as S,Tv as T,Un as U,Wn as W,Xt as X,Yt as Y,Zt as Z,_i as _,at as a,X_ as b,Hs as c,$n as d,fa as f,gi as g,hi as h,jn as j,pa as p,qn as q,rt as r,ti as t,zn as z};//# sourceMappingURL=chunk-v--CuXSv.js.map
