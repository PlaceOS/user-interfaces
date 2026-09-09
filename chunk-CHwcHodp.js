import {m,K as Ks$1,f as fe,ha as Qee,E as Ee,c2 as rQ,c3 as cv,F as Fl$1,C as C0,j as xJe,k as ke,L as Lt,U as Ue,p as pr,u as ue,w as An$1,aU as Y4,i as io$1,l as lT,a$ as G,O,_ as _t,bk as Rr$1,g as gi$1,br as Dr$1,al as m$1,am as l,aK as _Xe,c8 as XZ,R as Re,Q as QK,X as XK,hb as fMe,cJ as Ih,hc as AB,hd as CB,he as RB,hf as DB,dh as q,ds as se,dt as re,fl as Js$1,fm as _Je,du as It$1,fn as vm$1,N as NM,fA as qu,dw as Tt,fy as yi$1,dC as Bt$1,b0 as We,fz as Lg,eN as br$1,hg as f0,dx as S,dy as Zt,fB as w,fU as sJe,fV as aJe,e6 as al$1,fH as Es,fI as Hn$1,eV as Mt,fE as ys,co as ne,eU as xe,eX as ce,hh as kg,bq as xh,cG as kh,dB as JE,hi as I0,hj as Bf,gE as Ye,fO as ct,fK as Zn$1,hk as S0,fq as h0,fW as _i$1,hl as Xte,b6 as Et,dE as ye,dG as Jd$1,aZ as Wt,$ as $e,r as Le,bL as oA,an as zn$1,W as WE,bu as Ge,D as Fe$1,M as ot$1,hm as Pg$1,fs as Ole,J as Ne,dH as Mn,dI as Ie,dJ as Ae,ft as Xr,e as iY,fu as Nle,aY as mn,b4 as Ho,b5 as M,ba as H$1,gS as Ds$1,gY as ym$1,cC as Ht,fr as XL,gJ as Y,dv as Yo,dz as En$1,dA as Ll$1,a_ as Pe,fo as Me$1,gN as pm$1,gO as fm$1,hn as ene,g8 as Jp,bM as vk,g9 as Up,ac as JD,d4 as Os$1,aC as eDe,h0 as Yte,aL as MZe,aM as NZe,o as vtt,aP as RY,q as Hp,t as eC,cs as p2,dW as qZe,T as yT,V as Zc$1,af as RH,g0 as NT,a8 as DH,ag as yt,S as SY,c$ as dnt,d0 as cnt,d1 as lnt,d2 as ant,d3 as Qde,h as mtt,I as Ide,Z as ZK,s as xo$1,bv as Ua,g1 as _le,bw as nn,ad as Kd$1,ae as Zd$1,Y as Yt,ho as gX,hp as ENe,c as K,hq as wX,hr as K1,h7 as C,hs as _Ne,ht as SX,hu as $E,hv as Xc$1,fx as V,hw as Ni,ga as Ut$1,gb as Go$1,A as ANe,y as yNe,P as PX,aA as Qd$1,bI as tDe,a3 as Dn$1,v as vr$1,a4 as Ake,hx as Cke,cY as Rke,d$ as Pee,h5 as Uke,a6 as dl$1,dU as ul$1,dZ as jo,hy as zo,bi as yr$1,bE as Ha,bj as gt,bD as Zi,aa as yy,bl as rde,a5 as R9,av as tC,dX as fn,dD as vJe,dF as Ba,df as Nn$1,cN as Xe,cK as LR,hz as ol$1,ai as Us$1,hA as gv,fX as Im$1,ay as vt,az as QD,fw as Pt,fQ as Xs$1,fS as Qs$1,fT as Am$1,fF as Q,fP as wr$1,hB as Fp,aB as Ice,aR as ET,at as VB,bm as $et,bn as Get,z as z8,B as W8,bU as K4,bf as L,hC as _X,ah as kn,ab as o6,aw as g1,hD as wo$1,b1 as Xd$1,gI as F,hE as gb,n as nte,eZ as Sr$1,f3 as am$1,hF as u2,hG as cxe,bS as ktt,cq as KD,cr as ZD,hH as oB,hI as dv,hJ as Awe,hK as EB,hL as vB,hM as Uc$1,cO as ki,hN as Tv,e4 as Cw,hO as hH,hP as QH,gR as ef,fp as je,hQ as xde,ed as KPe,hR as PH,a9 as cb,au as v1,ax as y1,hS as lt,cx as oY,hT as Nt,hU as Qi,d7 as sn,d8 as zE,aS as $_,aT as j_,d9 as hn,ao as Gp,fY as kt,cy as v5,b8 as U4,hV as b5,dn as KK,b9 as mD,bX as OE}from'./main-CDUXSXFP.js';function Ss(n,i){let e=Gl(i)?new i(0):Xe(i,0);return e.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),e.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e}function Gl(n){return typeof n=="function"&&n.prototype?.constructor===n}var Hl=10,wn=class{subPriority=0;validate(i,e){return  true}},Tn=class extends wn{constructor(i,e,t,r,o){super(),this.value=i,this.validateValue=e,this.setValue=t,this.priority=r,o&&(this.subPriority=o);}validate(i,e){return this.validateValue(i,this.value,e)}set(i,e,t){return this.setValue(i,e,this.value,t)}},En=class extends wn{priority=Hl;subPriority=-1;constructor(i,e){super(),this.context=i||(t=>Xe(e,t));}set(i,e){return e.timestampIsSet?i:Xe(i,Ss(i,this.context))}};var E=class{run(i,e,t,r){let o=this.parse(i,e,t,r);return o?{setter:new Tn(o.value,this.validate,this.set,this.priority,this.subPriority),rest:o.rest}:null}validate(i,e,t){return  true}};var Sn=class extends E{priority=140;parse(i,e,t){switch(e){case "G":case "GG":case "GGG":return t.era(i,{width:"abbreviated"})||t.era(i,{width:"narrow"});case "GGGGG":return t.era(i,{width:"narrow"});default:return t.era(i,{width:"wide"})||t.era(i,{width:"abbreviated"})||t.era(i,{width:"narrow"})}}set(i,e,t){return e.era=t,i.setFullYear(t,0,1),i.setHours(0,0,0,0),i}incompatibleTokens=["R","u","t","T"]};var W={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},Ke={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function ee(n,i){return n&&{value:i(n.value),rest:n.rest}}function H(n,i){let e=i.match(n);return e?{value:parseInt(e[0],10),rest:i.slice(e[0].length)}:null}function qe(n,i){let e=i.match(n);if(!e)return null;if(e[0]==="Z")return {value:0,rest:i.slice(1)};let t=e[1]==="+"?1:-1,r=e[2]?parseInt(e[2],10):0,o=e[3]?parseInt(e[3],10):0,c=e[5]?parseInt(e[5],10):0;return {value:t*(r*oB+o*dv+c*Awe),rest:i.slice(e[0].length)}}function In(n){return H(W.anyDigitsSigned,n)}function P(n,i){switch(n){case 1:return H(W.singleDigit,i);case 2:return H(W.twoDigits,i);case 3:return H(W.threeDigits,i);case 4:return H(W.fourDigits,i);default:return H(new RegExp("^\\d{1,"+n+"}"),i)}}function ni(n,i){switch(n){case 1:return H(W.singleDigitSigned,i);case 2:return H(W.twoDigitsSigned,i);case 3:return H(W.threeDigitsSigned,i);case 4:return H(W.fourDigitsSigned,i);default:return H(new RegExp("^-?\\d{1,"+n+"}"),i)}}function ri(n){switch(n){case "morning":return 4;case "evening":return 17;case "pm":case "noon":case "afternoon":return 12;default:return 0}}function Rn(n,i){let e=i>0,t=e?i:1-i,r;if(t<=50)r=n||100;else {let o=t+50,c=Math.trunc(o/100)*100,h=n>=o%100;r=n+c-(h?100:0);}return e?r:1-r}function On(n){return n%400===0||n%4===0&&n%100!==0}var Dn=class extends E{priority=130;incompatibleTokens=["Y","R","u","w","I","i","e","c","t","T"];parse(i,e,t){let r=o=>({year:o,isTwoDigitYear:e==="yy"});switch(e){case "y":return ee(P(4,i),r);case "yo":return ee(t.ordinalNumber(i,{unit:"year"}),r);default:return ee(P(e.length,i),r)}}validate(i,e){return e.isTwoDigitYear||e.year>0}set(i,e,t){let r=i.getFullYear();if(t.isTwoDigitYear){let c=Rn(t.year,r);return i.setFullYear(c,0,1),i.setHours(0,0,0,0),i}let o=!("era"in e)||e.era===1?t.year:1-t.year;return i.setFullYear(o,0,1),i.setHours(0,0,0,0),i}};var Nn=class extends E{priority=130;parse(i,e,t){let r=o=>({year:o,isTwoDigitYear:e==="YY"});switch(e){case "Y":return ee(P(4,i),r);case "Yo":return ee(t.ordinalNumber(i,{unit:"year"}),r);default:return ee(P(e.length,i),r)}}validate(i,e){return e.isTwoDigitYear||e.year>0}set(i,e,t,r){let o=gv(i,r);if(t.isTwoDigitYear){let h=Rn(t.year,o);return i.setFullYear(h,0,r.firstWeekContainsDate),i.setHours(0,0,0,0),Us$1(i,r)}let c=!("era"in e)||e.era===1?t.year:1-t.year;return i.setFullYear(c,0,r.firstWeekContainsDate),i.setHours(0,0,0,0),Us$1(i,r)}incompatibleTokens=["y","R","u","Q","q","M","L","I","d","D","i","t","T"]};var An=class extends E{priority=130;parse(i,e){return e==="R"?ni(4,i):ni(e.length,i)}set(i,e,t){let r=Xe(i,0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),ol$1(r)}incompatibleTokens=["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]};var Pn=class extends E{priority=130;parse(i,e){return e==="u"?ni(4,i):ni(e.length,i)}set(i,e,t){return i.setFullYear(t,0,1),i.setHours(0,0,0,0),i}incompatibleTokens=["G","y","Y","R","w","I","i","e","c","t","T"]};var Fn=class extends E{priority=120;parse(i,e,t){switch(e){case "Q":case "QQ":return P(e.length,i);case "Qo":return t.ordinalNumber(i,{unit:"quarter"});case "QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"})||t.quarter(i,{width:"narrow",context:"formatting"});case "QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});default:return t.quarter(i,{width:"wide",context:"formatting"})||t.quarter(i,{width:"abbreviated",context:"formatting"})||t.quarter(i,{width:"narrow",context:"formatting"})}}validate(i,e){return e>=1&&e<=4}set(i,e,t){return i.setMonth((t-1)*3,1),i.setHours(0,0,0,0),i}incompatibleTokens=["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]};var Vn=class extends E{priority=120;parse(i,e,t){switch(e){case "q":case "qq":return P(e.length,i);case "qo":return t.ordinalNumber(i,{unit:"quarter"});case "qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"})||t.quarter(i,{width:"narrow",context:"standalone"});case "qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});default:return t.quarter(i,{width:"wide",context:"standalone"})||t.quarter(i,{width:"abbreviated",context:"standalone"})||t.quarter(i,{width:"narrow",context:"standalone"})}}validate(i,e){return e>=1&&e<=4}set(i,e,t){return i.setMonth((t-1)*3,1),i.setHours(0,0,0,0),i}incompatibleTokens=["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]};var Ln=class extends E{incompatibleTokens=["Y","R","q","Q","L","w","I","D","i","e","c","t","T"];priority=110;parse(i,e,t){let r=o=>o-1;switch(e){case "M":return ee(H(W.month,i),r);case "MM":return ee(P(2,i),r);case "Mo":return ee(t.ordinalNumber(i,{unit:"month"}),r);case "MMM":return t.month(i,{width:"abbreviated",context:"formatting"})||t.month(i,{width:"narrow",context:"formatting"});case "MMMMM":return t.month(i,{width:"narrow",context:"formatting"});default:return t.month(i,{width:"wide",context:"formatting"})||t.month(i,{width:"abbreviated",context:"formatting"})||t.month(i,{width:"narrow",context:"formatting"})}}validate(i,e){return e>=0&&e<=11}set(i,e,t){return i.setMonth(t,1),i.setHours(0,0,0,0),i}};var Bn=class extends E{priority=110;parse(i,e,t){let r=o=>o-1;switch(e){case "L":return ee(H(W.month,i),r);case "LL":return ee(P(2,i),r);case "Lo":return ee(t.ordinalNumber(i,{unit:"month"}),r);case "LLL":return t.month(i,{width:"abbreviated",context:"standalone"})||t.month(i,{width:"narrow",context:"standalone"});case "LLLLL":return t.month(i,{width:"narrow",context:"standalone"});default:return t.month(i,{width:"wide",context:"standalone"})||t.month(i,{width:"abbreviated",context:"standalone"})||t.month(i,{width:"narrow",context:"standalone"})}}validate(i,e){return e>=0&&e<=11}set(i,e,t){return i.setMonth(t,1),i.setHours(0,0,0,0),i}incompatibleTokens=["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]};function Is(n,i,e){let t=q(n,e?.in),r=vB(t,e)-i;return t.setDate(t.getDate()-r*7),q(t,e?.in)}var Un=class extends E{priority=100;parse(i,e,t){switch(e){case "w":return H(W.week,i);case "wo":return t.ordinalNumber(i,{unit:"week"});default:return P(e.length,i)}}validate(i,e){return e>=1&&e<=53}set(i,e,t,r){return Us$1(Is(i,t,r),r)}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","i","t","T"]};function Rs(n,i,e){let t=q(n,e?.in),r=EB(t,e)-i;return t.setDate(t.getDate()-r*7),t}var zn=class extends E{priority=100;parse(i,e,t){switch(e){case "I":return H(W.week,i);case "Io":return t.ordinalNumber(i,{unit:"week"});default:return P(e.length,i)}}validate(i,e){return e>=1&&e<=53}set(i,e,t){return ol$1(Rs(i,t))}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]};var Wl=[31,28,31,30,31,30,31,31,30,31,30,31],jl=[31,29,31,30,31,30,31,31,30,31,30,31],Gn=class extends E{priority=90;subPriority=1;parse(i,e,t){switch(e){case "d":return H(W.date,i);case "do":return t.ordinalNumber(i,{unit:"date"});default:return P(e.length,i)}}validate(i,e){let t=i.getFullYear(),r=On(t),o=i.getMonth();return r?e>=1&&e<=jl[o]:e>=1&&e<=Wl[o]}set(i,e,t){return i.setDate(t),i.setHours(0,0,0,0),i}incompatibleTokens=["Y","R","q","Q","w","I","D","i","e","c","t","T"]};var Hn=class extends E{priority=90;subpriority=1;parse(i,e,t){switch(e){case "D":case "DD":return H(W.dayOfYear,i);case "Do":return t.ordinalNumber(i,{unit:"date"});default:return P(e.length,i)}}validate(i,e){let t=i.getFullYear();return On(t)?e>=1&&e<=366:e>=1&&e<=365}set(i,e,t){return i.setMonth(0,t),i.setHours(0,0,0,0),i}incompatibleTokens=["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]};function oi(n,i,e){let t=ki(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,o=q(n,e?.in),c=o.getDay(),x=(i%7+7)%7,R=7-r,F=i<0||i>6?i-(c+R)%7:(x+R)%7-(c+R)%7;return kn(o,F,e)}var Wn=class extends E{priority=90;parse(i,e,t){switch(e){case "E":case "EE":case "EEE":return t.day(i,{width:"abbreviated",context:"formatting"})||t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"});case "EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case "EEEEEE":return t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"});default:return t.day(i,{width:"wide",context:"formatting"})||t.day(i,{width:"abbreviated",context:"formatting"})||t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"})}}validate(i,e){return e>=0&&e<=6}set(i,e,t,r){return i=oi(i,t,r),i.setHours(0,0,0,0),i}incompatibleTokens=["D","i","e","c","t","T"]};var jn=class extends E{priority=90;parse(i,e,t,r){let o=c=>{let h=Math.floor((c-1)/7)*7;return (c+r.weekStartsOn+6)%7+h};switch(e){case "e":case "ee":return ee(P(e.length,i),o);case "eo":return ee(t.ordinalNumber(i,{unit:"day"}),o);case "eee":return t.day(i,{width:"abbreviated",context:"formatting"})||t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"});case "eeeee":return t.day(i,{width:"narrow",context:"formatting"});case "eeeeee":return t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"});default:return t.day(i,{width:"wide",context:"formatting"})||t.day(i,{width:"abbreviated",context:"formatting"})||t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"})}}validate(i,e){return e>=0&&e<=6}set(i,e,t,r){return i=oi(i,t,r),i.setHours(0,0,0,0),i}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]};var Kn=class extends E{priority=90;parse(i,e,t,r){let o=c=>{let h=Math.floor((c-1)/7)*7;return (c+r.weekStartsOn+6)%7+h};switch(e){case "c":case "cc":return ee(P(e.length,i),o);case "co":return ee(t.ordinalNumber(i,{unit:"day"}),o);case "ccc":return t.day(i,{width:"abbreviated",context:"standalone"})||t.day(i,{width:"short",context:"standalone"})||t.day(i,{width:"narrow",context:"standalone"});case "ccccc":return t.day(i,{width:"narrow",context:"standalone"});case "cccccc":return t.day(i,{width:"short",context:"standalone"})||t.day(i,{width:"narrow",context:"standalone"});default:return t.day(i,{width:"wide",context:"standalone"})||t.day(i,{width:"abbreviated",context:"standalone"})||t.day(i,{width:"short",context:"standalone"})||t.day(i,{width:"narrow",context:"standalone"})}}validate(i,e){return e>=0&&e<=6}set(i,e,t,r){return i=oi(i,t,r),i.setHours(0,0,0,0),i}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]};function Os(n,i){let e=q(n,i?.in).getDay();return e===0?7:e}function Ds(n,i,e){let t=q(n,e?.in),r=Os(t,e),o=i-r;return kn(t,o,e)}var qn=class extends E{priority=90;parse(i,e,t){let r=o=>o===0?7:o;switch(e){case "i":case "ii":return P(e.length,i);case "io":return t.ordinalNumber(i,{unit:"day"});case "iii":return ee(t.day(i,{width:"abbreviated",context:"formatting"})||t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"}),r);case "iiiii":return ee(t.day(i,{width:"narrow",context:"formatting"}),r);case "iiiiii":return ee(t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"}),r);default:return ee(t.day(i,{width:"wide",context:"formatting"})||t.day(i,{width:"abbreviated",context:"formatting"})||t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"}),r)}}validate(i,e){return e>=1&&e<=7}set(i,e,t){return i=Ds(i,t),i.setHours(0,0,0,0),i}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]};var $n=class extends E{priority=80;parse(i,e,t){switch(e){case "a":case "aa":case "aaa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"})||t.dayPeriod(i,{width:"narrow",context:"formatting"});case "aaaaa":return t.dayPeriod(i,{width:"narrow",context:"formatting"});default:return t.dayPeriod(i,{width:"wide",context:"formatting"})||t.dayPeriod(i,{width:"abbreviated",context:"formatting"})||t.dayPeriod(i,{width:"narrow",context:"formatting"})}}set(i,e,t){return i.setHours(ri(t),0,0,0),i}incompatibleTokens=["b","B","H","k","t","T"]};var Xn=class extends E{priority=80;parse(i,e,t){switch(e){case "b":case "bb":case "bbb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"})||t.dayPeriod(i,{width:"narrow",context:"formatting"});case "bbbbb":return t.dayPeriod(i,{width:"narrow",context:"formatting"});default:return t.dayPeriod(i,{width:"wide",context:"formatting"})||t.dayPeriod(i,{width:"abbreviated",context:"formatting"})||t.dayPeriod(i,{width:"narrow",context:"formatting"})}}set(i,e,t){return i.setHours(ri(t),0,0,0),i}incompatibleTokens=["a","B","H","k","t","T"]};var Yn=class extends E{priority=80;parse(i,e,t){switch(e){case "B":case "BB":case "BBB":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"})||t.dayPeriod(i,{width:"narrow",context:"formatting"});case "BBBBB":return t.dayPeriod(i,{width:"narrow",context:"formatting"});default:return t.dayPeriod(i,{width:"wide",context:"formatting"})||t.dayPeriod(i,{width:"abbreviated",context:"formatting"})||t.dayPeriod(i,{width:"narrow",context:"formatting"})}}set(i,e,t){return i.setHours(ri(t),0,0,0),i}incompatibleTokens=["a","b","t","T"]};var Qn=class extends E{priority=70;parse(i,e,t){switch(e){case "h":return H(W.hour12h,i);case "ho":return t.ordinalNumber(i,{unit:"hour"});default:return P(e.length,i)}}validate(i,e){return e>=1&&e<=12}set(i,e,t){let r=i.getHours()>=12;return r&&t<12?i.setHours(t+12,0,0,0):!r&&t===12?i.setHours(0,0,0,0):i.setHours(t,0,0,0),i}incompatibleTokens=["H","K","k","t","T"]};var Zn=class extends E{priority=70;parse(i,e,t){switch(e){case "H":return H(W.hour23h,i);case "Ho":return t.ordinalNumber(i,{unit:"hour"});default:return P(e.length,i)}}validate(i,e){return e>=0&&e<=23}set(i,e,t){return i.setHours(t,0,0,0),i}incompatibleTokens=["a","b","h","K","k","t","T"]};var Jn=class extends E{priority=70;parse(i,e,t){switch(e){case "K":return H(W.hour11h,i);case "Ko":return t.ordinalNumber(i,{unit:"hour"});default:return P(e.length,i)}}validate(i,e){return e>=0&&e<=11}set(i,e,t){return i.getHours()>=12&&t<12?i.setHours(t+12,0,0,0):i.setHours(t,0,0,0),i}incompatibleTokens=["h","H","k","t","T"]};var er=class extends E{priority=70;parse(i,e,t){switch(e){case "k":return H(W.hour24h,i);case "ko":return t.ordinalNumber(i,{unit:"hour"});default:return P(e.length,i)}}validate(i,e){return e>=1&&e<=24}set(i,e,t){let r=t<=24?t%24:t;return i.setHours(r,0,0,0),i}incompatibleTokens=["a","b","h","H","K","t","T"]};var tr=class extends E{priority=60;parse(i,e,t){switch(e){case "m":return H(W.minute,i);case "mo":return t.ordinalNumber(i,{unit:"minute"});default:return P(e.length,i)}}validate(i,e){return e>=0&&e<=59}set(i,e,t){return i.setMinutes(t,0,0),i}incompatibleTokens=["t","T"]};var ir=class extends E{priority=50;parse(i,e,t){switch(e){case "s":return H(W.second,i);case "so":return t.ordinalNumber(i,{unit:"second"});default:return P(e.length,i)}}validate(i,e){return e>=0&&e<=59}set(i,e,t){return i.setSeconds(t,0),i}incompatibleTokens=["t","T"]};var nr=class extends E{priority=30;parse(i,e){let t=r=>Math.trunc(r*Math.pow(10,-e.length+3));return ee(P(e.length,i),t)}set(i,e,t){return i.setMilliseconds(t),i}incompatibleTokens=["t","T"]};var rr=class extends E{priority=10;parse(i,e){switch(e){case "X":return qe(Ke.basicOptionalMinutes,i);case "XX":return qe(Ke.basic,i);case "XXXX":return qe(Ke.basicOptionalSeconds,i);case "XXXXX":return qe(Ke.extendedOptionalSeconds,i);default:return qe(Ke.extended,i)}}set(i,e,t){return e.timestampIsSet?i:Xe(i,i.getTime()-LR(i)-t)}incompatibleTokens=["t","T","x"]};var or=class extends E{priority=10;parse(i,e){switch(e){case "x":return qe(Ke.basicOptionalMinutes,i);case "xx":return qe(Ke.basic,i);case "xxxx":return qe(Ke.basicOptionalSeconds,i);case "xxxxx":return qe(Ke.extendedOptionalSeconds,i);default:return qe(Ke.extended,i)}}set(i,e,t){return e.timestampIsSet?i:Xe(i,i.getTime()-LR(i)-t)}incompatibleTokens=["t","T","X"]};var ar=class extends E{priority=40;parse(i){return In(i)}set(i,e,t){return [Xe(i,t*1e3),{timestampIsSet:true}]}incompatibleTokens="*"};var sr=class extends E{priority=20;parse(i){return In(i)}set(i,e,t){return [Xe(i,t),{timestampIsSet:true}]}incompatibleTokens="*"};var Ns={G:new Sn,y:new Dn,Y:new Nn,R:new An,u:new Pn,Q:new Fn,q:new Vn,M:new Ln,L:new Bn,w:new Un,I:new zn,d:new Gn,D:new Hn,E:new Wn,e:new jn,c:new Kn,i:new qn,a:new $n,b:new Xn,B:new Yn,h:new Qn,H:new Zn,K:new Jn,k:new er,m:new tr,s:new ir,S:new nr,X:new rr,x:new or,t:new ar,T:new sr};var Kl=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ql=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,$l=/^'([^]*?)'?$/,Xl=/''/g,Yl=/\S/,Ql=/[a-zA-Z]/;function As(n,i,e,t){let r=()=>Xe(e,NaN),o=fMe(),c=o.locale??Ih,h=o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,x=o.weekStartsOn??o.locale?.options?.weekStartsOn??0;let R={firstWeekContainsDate:h,weekStartsOn:x,locale:c},F=[new En(t?.in,e)],ae=i.match(ql).map(G=>{let te=G[0];if(te in AB){let Le=AB[te];return Le(G,c.formatLong)}return G}).join("").match(Kl),ue=[];for(let G of ae){CB(G)&&RB(G,i,n),DB(G)&&RB(G,i,n);let te=G[0],Le=Ns[te];if(Le){let{incompatibleTokens:Ho}=Le;if(Array.isArray(Ho)){let Wo=ue.find(jo=>Ho.includes(jo.token)||jo.token===te);if(Wo)throw new RangeError(`The format string mustn't contain \`${Wo.fullToken}\` and \`${G}\` at the same time`)}else if(Le.incompatibleTokens==="*"&&ue.length>0)throw new RangeError(`The format string mustn't contain \`${G}\` and any other token at the same time`);ue.push({token:te,fullToken:G});let Fr=Le.run(n,G,c.match,R);if(!Fr)return r();F.push(Fr.setter),n=Fr.rest;}else {if(te.match(Ql))throw new RangeError("Format string contains an unescaped latin alphabet character `"+te+"`");if(G==="''"?G="'":te==="'"&&(G=Zl(G)),n.indexOf(G)===0)n=n.slice(G.length);else return r()}}if(n.length>0&&Yl.test(n))return r();let pt=F.map(G=>G.priority).sort((G,te)=>te-G).filter((G,te,Le)=>Le.indexOf(G)===te).map(G=>F.filter(te=>te.priority===G).sort((te,Le)=>Le.subPriority-te.subPriority)).map(G=>G[0]),st=q(e,t?.in);if(isNaN(+st))return r();let ki={};for(let G of pt){if(!G.validate(st,R))return r();let te=G.set(st,ki,R);Array.isArray(te)?(st=te[0],Object.assign(ki,te[1])):st=te;}return st}function Zl(n){return n.match($l)[1].replace(Xl,"'")}var Jl=["determinateSpinner"];function ec(n,i){if(n&1&&(oA(),ke(0,"svg",11),Lt(1,"circle",12),Ue()),n&2){let e=vt();Ge("viewBox",e._viewBox()),ue(),JD("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),Ge("r",e._circleRadius());}}var tc=new S("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Ps})}),Ps=100,ic=10,ai=(()=>{class n{_elementRef=m(G);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e;}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=m(tc),t=ene(),r=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&r.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth));}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0));}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0;}_diameter=Ps;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0;}_strokeWidth;_circleRadius(){return (this.diameter-ic)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return `0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ee({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,r){if(t&1&&Mn(Jl,5),t&2){let o;Ie(o=Ae())&&(r._determinateCircle=o.first);}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,r){t&2&&(Ge("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),Os$1("mat-"+r.color),JD("width",r.diameter,"px")("height",r.diameter,"px")("--mat-progress-spinner-size",r.diameter+"px")("--mat-progress-spinner-active-indicator-width",r.diameter+"px"),Ne("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"));},inputs:{color:"color",mode:"mode",value:[2,"value","value",Jd$1],diameter:[2,"diameter","diameter",Jd$1],strokeWidth:[2,"strokeWidth","strokeWidth",Jd$1]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,r){if(t&1&&(zn$1(0,ec,2,8,"ng-template",null,0,Gp),ke(2,"div",2,1),oA(),ke(4,"svg",3),Lt(5,"circle",4),Ue()(),vk(),ke(6,"div",5)(7,"div",6)(8,"div",7),Up(9,8),Ue(),ke(10,"div",9),Up(11,8),Ue(),ke(12,"div",10),Up(13,8),Ue()()()),t&2){let o=WE(1);ue(4),Ge("viewBox",r._viewBox()),ue(),JD("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),Ge("r",r._circleRadius()),ue(4),An$1("ngTemplateOutlet",o),ue(2),An$1("ngTemplateOutlet",o),ue(2),An$1("ngTemplateOutlet",o);}},dependencies:[Jp],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return n})();var It=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=se({type:n});static \u0275inj=re({imports:[It$1]})}return n})();var nc=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],rc=["mat-icon, [matMenuItemIcon]","*"];function oc(n,i){n&1&&(oA(),ke(0,"svg",2),Lt(1,"polygon",3),Ue());}var ac=["*"];function sc(n,i){if(n&1){let e=QD();sn(0,"div",0),zE("click",function(){$_(e);let r=vt();return j_(r.closed.emit("click"))})("animationstart",function(r){$_(e);let o=vt();return j_(o._onAnimationStart(r.animationName))})("animationend",function(r){$_(e);let o=vt();return j_(o._onAnimationDone(r.animationName))})("animationcancel",function(r){$_(e);let o=vt();return j_(o._onAnimationDone(r.animationName))}),sn(1,"div",1),Pe(2),hn()();}if(n&2){let e=vt();Os$1(e._classList),Ne("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Nn$1("id",e.panelId),Ge("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null);}}var io=new S("MAT_MENU_PANEL"),mt=(()=>{class n{_elementRef=m(G);_document=m(Y);_focusMonitor=m(Yo);_parentMenu=m(io,{optional:true});_changeDetectorRef=m(Tt);role="menuitem";disabled=false;disableRipple=false;_hovered=new w;_focused=new w;_highlighted=false;_triggersSubmenu=false;constructor(){m(En$1).load(Ll$1),this._parentMenu?.addItem?.(this);}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this);}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,false);}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete();}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation());}_handleMouseEnter(){this._hovered.next(this);}getLabel(){let e=this._elementRef.nativeElement.cloneNode(true),t=e.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<t.length;r++)t[r].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck();}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck();}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ee({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,r){t&1&&$e("click",function(c){return r._checkDisabled(c)})("mouseenter",function(){return r._handleMouseEnter()}),t&2&&(Ge("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),Ne("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu));},inputs:{role:"role",disabled:[2,"disabled","disabled",ye],disableRipple:[2,"disableRipple","disableRipple",ye]},exportAs:["matMenuItem"],ngContentSelectors:rc,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,r){t&1&&(Wt(nc),Pe(0),ke(1,"span",0),Pe(2,1),Ue(),Lt(3,"div",1),Le(4,oc,2,0,":svg:svg",2)),t&2&&(ue(3),An$1("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),ue(),Fe$1(r._triggersSubmenu?4:-1));},dependencies:[C0],encapsulation:2})}return n})();var lc=new S("MatMenuContent");var cc=new S("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:false,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),eo="_mat-menu-enter",lr="_mat-menu-exit",rt=(()=>{class n{_elementRef=m(G);_changeDetectorRef=m(Tt);_injector=m(H$1);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Zt();_allItems;_directDescendantItems=new Ds$1;_classList={};_panelAnimationState="void";_animationDone=new w;_isAnimating=O(false);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses();}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses();}templateRef;items;lazyContent;overlapTrigger=false;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,r=l({},this._classList);t&&t.length&&t.split(" ").forEach(o=>{r[o]=false;}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{r[o]=true;}),this._elementRef.nativeElement.className=""),this._classList=r;}_previousPanelClass="";get classList(){return this.panelClass}set classList(e){this.panelClass=e;}closed=new ne;close=this.closed;panelId=m(Bt$1).getId("mat-menu-panel-");constructor(){let e=m(cc);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop;}ngOnInit(){this.setPositionClasses();}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new ym$1(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Hn$1(this._directDescendantItems),Mt(e=>ys(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let r=e.toArray(),o=Math.max(0,Math.min(r.length-1,t.activeItemIndex||0));r[o]&&!r[o].disabled?t.setActiveItem(o):t.setNextItemActive();}});}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout);}_hovered(){return this._directDescendantItems.changes.pipe(Hn$1(this._directDescendantItems),Mt(t=>ys(...t.map(r=>r._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,r=this._keyManager;switch(t){case 27:Zn$1(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Ht(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(e).setFirstItemActive(),!r.activeItem&&t&&t.focus();}},{injector:this._injector});}resetActiveItem(){this._keyManager.setActiveItem(-1);}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=m$1(l({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck();}_onAnimationDone(e){let t=e===lr;(t||e===eo)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(false));}_onAnimationStart(e){(e===eo||e===lr)&&this._isAnimating.set(true);}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0);}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(lr),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?eo:lr);}),this._changeDetectorRef.markForCheck();}_updateDirectDescendants(){this._allItems.changes.pipe(Hn$1(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges();});}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ee({type:n,selectors:[["mat-menu"]],contentQueries:function(t,r,o){if(t&1&&Xr(o,lc,5)(o,mt,5)(o,mt,4),t&2){let c;Ie(c=Ae())&&(r.lazyContent=c.first),Ie(c=Ae())&&(r._allItems=c),Ie(c=Ae())&&(r.items=c);}},viewQuery:function(t,r){if(t&1&&Mn(kt,5),t&2){let o;Ie(o=Ae())&&(r.templateRef=o.first);}},hostVars:3,hostBindings:function(t,r){t&2&&Ge("aria-label",null)("aria-labelledby",null)("aria-describedby",null);},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",ye],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:ye(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[ot$1([{provide:io,useExisting:n}])],ngContentSelectors:ac,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,r){t&1&&(Wt(),XL(0,sc,3,12,"ng-template"));},styles:[`mat-menu {
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
`],encapsulation:2})}return n})(),dc=new S("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=m(H$1);return ()=>Im$1(n)}});var si=new WeakMap,mc=(()=>{class n{_canHaveBackdrop;_element=m(G);_viewContainerRef=m(Pt);_menuItemInstance=m(mt,{optional:true,self:true});_dir=m(yi$1,{optional:true});_focusMonitor=m(Yo);_ngZone=m(V);_injector=m(H$1);_scrollStrategy=m(dc);_changeDetectorRef=m(Tt);_animationsDisabled=Zt();_portal;_overlayRef=null;_menuOpen=false;_closingActionsSubscription=Me$1.EMPTY;_menuCloseSubscription=Me$1.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t);})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()));}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=m(io,{optional:true});this._parentMaterialMenu=t instanceof rt?t:void 0;}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&si.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null);}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return !!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit();}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let r=si.get(t);si.set(t,this),r&&r!==this&&r._closeMenu();let o=this._createOverlay(t),c=o.getConfig(),h=c.positionStrategy;this._setPosition(t,h),this._canHaveBackdrop?c.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:c.hasBackdrop=t.hasBackdrop??false,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(true),t instanceof rt&&(t._setIsOpen(true),t._directDescendantItems.changes.pipe(Ye(t.close)).subscribe(()=>{h.withLockedPosition(false).reapplyLastPosition(),h.withLockedPosition(true);}));}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t);}_destroyMenu(e){let t=this._overlayRef,r=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof rt&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(ct(1)).subscribe(()=>{t.detach(),si.has(r)||r.lazyContent?.detach();}),r._setIsOpen(false)):(t.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&si.delete(r),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(false));}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck());}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Xs$1(this._injector,t),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof rt&&this._menu._handleKeydown(r);});}return this._overlayRef}_getOverlayConfig(e){return new Qs$1({positionStrategy:Am$1(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let o=r.connectionPair.overlayX==="start"?"after":"before",c=r.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,c);});});}_setPosition(e,t){let[r,o]=e.xPosition==="before"?["end","start"]:["start","end"],[c,h]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[x,R]=[c,h],[F,ae]=[r,o],ue=0;if(this._triggersSubmenu()){if(ae=r=e.xPosition==="before"?"start":"end",o=F=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let pt=this._parentMaterialMenu.items.first;this._parentInnerPadding=pt?pt._getHostElement().offsetTop:0;}ue=c==="bottom"?this._parentInnerPadding:-this._parentInnerPadding;}}else e.overlapTrigger||(x=c==="top"?"bottom":"top",R=h==="top"?"bottom":"top");t.withPositions([{originX:r,originY:x,overlayX:F,overlayY:c,offsetY:ue},{originX:o,originY:x,overlayX:ae,overlayY:c,offsetY:ue},{originX:r,originY:R,overlayX:F,overlayY:h,offsetY:-ue},{originX:o,originY:R,overlayX:ae,overlayY:h,offsetY:-ue}]);}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:Q(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(xe(c=>this._menuOpen&&c!==this._menuItemInstance)):Q();return ys(e,r,o,t)}_getPortal(e){return (!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new wr$1(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return si.get(e)===this}_triggerIsAriaDisabled(){return ye(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Fp();};static \u0275dir=M({type:n})}return n})(),ut=(()=>{class n extends mc{_cleanupTouchstart;_hoverSubscription=Me$1.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e;}get menu(){return this._menu}set menu(e){this._menu=e;}menuData;restoreFocus=true;menuOpened=new ne;onMenuOpen=this.menuOpened;menuClosed=new ne;onMenuClose=this.menuClosed;constructor(){super(true);let e=m(We);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{pm$1(t)||(this._openedBy="touch");},{passive:true});}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(true);}closeMenu(){this._closeMenu();}updatePosition(){this._overlayRef?.updatePosition();}ngAfterContentInit(){this._handleHover();}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe();}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){fm$1(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault());}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu());}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu();}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(false));}));}static \u0275fac=function(t){return new(t||n)};static \u0275dir=M({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,r){t&1&&$e("click",function(c){return r._handleClick(c)})("mousedown",function(c){return r._handleMousedown(c)})("keydown",function(c){return r._handleKeydown(c)}),t&2&&Ge("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu?.panelId:null);},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[Re]})}return n})();var li=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=se({type:n});static \u0275inj=re({imports:[Fl$1,Js$1,It$1,vm$1]})}return n})();var Ai=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new w;constructor(i=false,e,t=true,r){this._multiple=i,this._emitChanges=t,this.compareWith=r,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0);}select(...i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=true){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return !this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i);}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[]);}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i));}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i));}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i));}_verifyValueAssignment(i){i.length>1&&this._multiple;}_hasQueuedChanges(){return !!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var ro=(()=>{class n{_listeners=[];notify(e,t){for(let r of this._listeners)r(e,t);}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t);}}ngOnDestroy(){this._listeners=[];}static \u0275fac=function(t){return new(t||n)};static \u0275prov=F({token:n,factory:n.\u0275fac})}return n})();var pc=["trigger"],hc=["panel"],_c=[[["mat-select-trigger"]],"*"],fc=["mat-select-trigger","*"];function gc(n,i){if(n&1&&(ke(0,"span",4),pr(1),Ue()),n&2){let e=vt();ue(),Qd$1(e.placeholder);}}function bc(n,i){n&1&&Pe(0);}function vc(n,i){if(n&1&&(ke(0,"span",11),pr(1),Ue()),n&2){let e=vt(2);ue(),Qd$1(e.triggerValue);}}function yc(n,i){if(n&1&&(ke(0,"span",5),Le(1,bc,1,0)(2,vc,2,1,"span",11),Ue()),n&2){let e=vt();ue(),Fe$1(e.customTrigger?1:2);}}function xc(n,i){if(n&1){let e=QD();ke(0,"div",12,1),$e("keydown",function(r){$_(e);let o=vt();return j_(o._handleKeydown(r))}),Pe(2,1),Ue();}if(n&2){let e=vt();Os$1(e.panelClass),Ne("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",e._parentFormField?.color==="primary")("mat-accent",e._parentFormField?.color==="accent")("mat-warn",e._parentFormField?.color==="warn")("mat-undefined",!e._parentFormField?.color),Ge("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby());}}var kc=new S("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=m(H$1);return ()=>Im$1(n)}}),Cc=new S("MAT_SELECT_CONFIG"),Fs=new S("MatSelectTrigger"),oo=class{source;value;constructor(i,e){this.source=i,this.value=e;}},ci=(()=>{class n{_viewportRuler=m(qu);_changeDetectorRef=m(Tt);_elementRef=m(G);_dir=m(yi$1,{optional:true});_idGenerator=m(Bt$1);_renderer=m(We);_parentFormField=m(Lg,{optional:true});ngControl=m(br$1,{self:true,optional:true});_liveAnnouncer=m(f0);_defaultOptions=m(Cc,{optional:true});_animationsDisabled=Zt();_popoverLocation;_initialized=new w;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,o=sJe(e,this.options,this.optionGroups),c=t._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=aJe(c.offsetTop,c.offsetHeight,r.scrollTop,r.offsetHeight);}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0);}_getChangeEvent(e){return new oo(this,e)}_scrollStrategyFactory=m(kc);_panelOpen=false;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new w;_errorStateTracker;stateChanges=new w;disableAutomaticLabeling=true;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=false;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=false;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e);}_disableRipple=O(false);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties();}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??false;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next();}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(al$1.required)??false}set required(e){this._required=e,this.stateChanges.next();}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e;}_multiple=false;disableOptionCentering=this._defaultOptions?.disableOptionCentering??false;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection();}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e);}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e;}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next();}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e;}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??false;optionSelectionChanges=Es(()=>{let e=this.options;return e?e.changes.pipe(Hn$1(e),Mt(()=>ys(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Mt(()=>this.optionSelectionChanges))});openedChange=new ne;_openedStream=this.openedChange.pipe(xe(e=>e),ce(()=>{}));_closedStream=this.openedChange.pipe(xe(e=>!e),ce(()=>{}));selectionChange=new ne;valueChange=new ne;constructor(){let e=m(kg),t=m(xh,{optional:true}),r=m(kh,{optional:true}),o=m(new JE("tabindex"),{optional:true}),c=m(I0,{optional:true});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Bf(e,this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=c?.usePopover===false?null:"inline",this.id=this.id;}ngOnInit(){this._selectionModel=new Ai(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Ye(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges());});}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Ye(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect());}),this.options.changes.pipe(Hn$1(null),Ye(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection();});}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby");}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState());}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass));}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete();}toggle(){this.panelOpen?this.close():this.open();}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=true,this._overlayDir.positionChange.pipe(ct(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled();}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(true)));}close(){this._panelOpen&&(this._panelOpen=false,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(false)));}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0;};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay());}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay();},200);e.classList.add("mat-select-panel-exit");}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck();}writeValue(e){this._assignValue(e);}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next();}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return "";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState();}_isRtl(){return this._dir?this._dir.value==="rtl":false}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e));}_handleClosedKeydown(e){let t=e.keyCode,r=t===40||t===38||t===37||t===39,o=t===13||t===32,c=this._keyManager;if(!c.isTyping()&&o&&!Zn$1(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let h=this.selected;c.onKeydown(e);let x=this.selected;x&&h!==x&&this._liveAnnouncer.announce(x.viewValue,1e4);}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,o=r===40||r===38,c=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!c&&(r===13||r===32)&&t.activeItem&&!Zn$1(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!c&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let h=this.options.some(x=>!x.disabled&&!x.selected);this.options.forEach(x=>{x.disabled||(h?x.select():x.deselect());});}else {let h=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==h&&t.activeItem._selectViaInteraction();}}_handleOverlayKeydown(e){e.keyCode===27&&!Zn$1(e)&&(e.preventDefault(),this.close());}_onFocus(){this.disabled||(this._focused=true,this.stateChanges.next());}_onBlur(){this._focused=false,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next());}get empty(){return !this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next();});}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else {let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1);}this._changeDetectorRef.markForCheck();}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return  false;try{return (r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return  false}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,true):false}_skipPredicate=e=>this.panelOpen?false:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof S0?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck();}_initKeyManager(){this._keyManager=new h0(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close());}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction();});}_resetOptions(){let e=ys(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Ye(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus());}),ys(...this.options.map(t=>t._stateChanges)).pipe(Ye(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next();});}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next();}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next();}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck();}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e);}else this._keyManager.setActiveItem(this._selectionModel.selected[0]);}_canOpen(){return !this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e);}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby");}onContainerClick(e){let t=_i$1(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open());}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ee({type:n,selectors:[["mat-select"]],contentQueries:function(t,r,o){if(t&1&&Xr(o,Fs,5)(o,iY,5)(o,Nle,5),t&2){let c;Ie(c=Ae())&&(r.customTrigger=c.first),Ie(c=Ae())&&(r.options=c),Ie(c=Ae())&&(r.optionGroups=c);}},viewQuery:function(t,r){if(t&1&&Mn(pc,5)(hc,5)(Xte,5),t&2){let o;Ie(o=Ae())&&(r.trigger=o.first),Ie(o=Ae())&&(r.panel=o.first),Ie(o=Ae())&&(r._overlayDir=o.first);}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,r){t&1&&$e("keydown",function(c){return r._handleKeydown(c)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),t&2&&(Ge("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),Ne("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen));},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",ye],disableRipple:[2,"disableRipple","disableRipple",ye],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Jd$1(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",ye],placeholder:"placeholder",required:[2,"required","required",ye],multiple:[2,"multiple","multiple",ye],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",ye],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Jd$1],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",ye]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[ot$1([{provide:Pg$1,useExisting:n},{provide:Ole,useExisting:n}]),Et],ngContentSelectors:fc,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,r){if(t&1&&(Wt(_c),ke(0,"div",2,0),$e("click",function(){return r.open()}),ke(3,"div",3),Le(4,gc,2,1,"span",4)(5,yc,3,1,"span",5),Ue(),ke(6,"div",6)(7,"div",7),oA(),ke(8,"svg",8),Lt(9,"path",9),Ue()()()(),zn$1(10,xc,3,16,"ng-template",10),$e("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(c){return r._handleOverlayKeydown(c)})),t&2){let o=WE(1);ue(3),Ge("id",r._valueId),ue(),Fe$1(r.empty?4:5),ue(6),An$1("cdkConnectedOverlayDisableClose",true)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",true)("cdkConnectedOverlayUsePopover",r._popoverLocation);}},dependencies:[S0,Xte],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return n})(),E0=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=M({type:n,selectors:[["mat-select-trigger"]],features:[ot$1([{provide:Fs,useExisting:n}])]})}return n})(),di=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=se({type:n});static \u0275inj=re({imports:[Js$1,_Je,It$1,vm$1,NM,_Je]})}return n})();var Mc=["input"],wc=["label"],Tc=["*"],so={color:"accent",clickAction:"check-indeterminate",disabledInteractive:false},Ec=new S("mat-checkbox-default-options",{providedIn:"root",factory:()=>so}),Me=(function(n){return n[n.Init=0]="Init",n[n.Checked=1]="Checked",n[n.Unchecked=2]="Unchecked",n[n.Indeterminate=3]="Indeterminate",n})(Me||{}),lo=class{source;checked},Pi=(()=>{class n{_elementRef=m(G);_changeDetectorRef=m(Tt);_ngZone=m(V);_animationsDisabled=Zt();_options=m(Ec,{optional:true});focus(){this._inputElement.nativeElement.focus();}_createChangeEvent(e){let t=new lo;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return `${this.id||this._uniqueId}-input`}required=false;labelPosition="after";name=null;change=new ne;indeterminateChange=new ne;value;disableRipple=false;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=Me.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){m(En$1).load(Ll$1);let e=m(new JE("tabindex"),{optional:true});this._options=this._options||so,this.color=this._options.color||so.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=m(Bt$1).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??false;}ngOnChanges(e){e.required&&this._validatorChangeFn();}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate);}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck());}_checked=false;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck());}_disabled=false;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(Me.Indeterminate):this._transitionCheckState(this.checked?Me.Checked:Me.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e);}_indeterminate=O(false);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges();}writeValue(e){this.checked=!!e;}registerOnChange(e){this._controlValueAccessorChangeFn=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e;}validate(e){return this.required&&e.value!==true?{required:true}:null}registerOnValidatorChange(e){this._validatorChangeFn=e;}_transitionCheckState(e){let t=this._currentCheckState,r=this._getAnimationTargetElement();if(!(t===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o);},1e3);});}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked);}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked);}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(false),this.indeterminateChange.emit(false);}),this._checked=!this._checked,this._transitionCheckState(this._checked?Me.Checked:Me.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate);}_onInteractionEvent(e){e.stopPropagation();}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck();});}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return "";switch(e){case Me.Init:if(t===Me.Checked)return this._animationClasses.uncheckedToChecked;if(t==Me.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Me.Unchecked:return t===Me.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Me.Checked:return t===Me.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Me.Indeterminate:return t===Me.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return ""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e);}_onInputClick(){this._handleInputClick();}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus();}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation();}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ee({type:n,selectors:[["mat-checkbox"]],viewQuery:function(t,r){if(t&1&&Mn(Mc,5)(wc,5),t&2){let o;Ie(o=Ae())&&(r._inputElement=o.first),Ie(o=Ae())&&(r._labelElement=o.first);}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,r){t&2&&(Nn$1("id",r.id),Ge("tabindex",null)("aria-label",null)("aria-labelledby",null),Os$1(r.color?"mat-"+r.color:"mat-accent"),Ne("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive));},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",ye],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",ye],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",ye],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Jd$1(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ye],checked:[2,"checked","checked",ye],disabled:[2,"disabled","disabled",ye],indeterminate:[2,"indeterminate","indeterminate",ye]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[ot$1([{provide:Ua,useExisting:nn(()=>n),multi:true},{provide:Ba,useExisting:n,multi:true}]),Et],ngContentSelectors:Tc,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,r){if(t&1&&(Wt(),ke(0,"div",3),$e("click",function(c){return r._preventBubblingFromLabel(c)}),ke(1,"div",4,0)(3,"div",5),$e("click",function(){return r._onTouchTargetClick()}),Ue(),ke(4,"input",6,1),$e("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(c){return r._onInteractionEvent(c)}),Ue(),Lt(6,"div",7),ke(7,"div",8),oA(),ke(8,"svg",9),Lt(9,"path",10),Ue(),vk(),Lt(10,"div",11),Ue(),Lt(11,"div",12),Ue(),ke(12,"label",13,2),Pe(14),Ue()()),t&2){let o=WE(2);An$1("labelPosition",r.labelPosition),ue(4),Ne("mdc-checkbox--selected",r.checked),An$1("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),Ge("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?true:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),ue(7),An$1("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",true),ue(),An$1("for",r.inputId);}},dependencies:[C0,vJe],styles:[`.mdc-checkbox {
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
`],encapsulation:2})}return n})(),hr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=se({type:n});static \u0275inj=re({imports:[Pi,It$1]})}return n})();var Sc=["*"];function Ic(n,i){if(n&1&&(ke(0,"div",3),pr(1),Ue()),n&2){let e=vt();ue(),Qd$1(e.info());}}function Rc(n,i){if(n&1&&(ke(0,"icon",4),pr(1,"info"),Ue()),n&2){let e=vt();An$1("matTooltip",e.info());}}function Oc(n,i){n&1&&Lt(0,"div",5);}function Dc(n,i){if(n&1&&(ke(0,"div",6)(1,"div",8)(2,"div",9)(3,"icon"),pr(4),Ue()()()()),n&2){let e=vt();ue(),Ne("bg-base-200",!e.value())("bg-info",e.value())("border-info!",e.value()),ue(),Ne("left-1",!e.value())("left-5",e.value())("bg-base-400",!e.value())("bg-info-light",e.value()),ue(2),Qd$1(e.value()?"done":"remove");}}function Nc(n,i){if(n&1){let e=QD();ke(0,"mat-checkbox",10),$e("ngModelChange",function(r){$_(e);let o=vt();return j_(o.setValue(r))}),Ue(),z8();}if(n&2){let e=vt();An$1("ngModel",e.value()),W8();}}var Ls=(()=>{class n{constructor(){this.toggle=mn(void 0),this.label=mn(void 0),this.info=mn(void 0),this.inline=mn(true),this.value=O(void 0),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e;}setValue(e){this.value.set(e),this._onChange&&this._onChange(e);}writeValue(e){this.value.set(e);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["settings-toggle"]],inputs:{toggle:[1,"toggle"],label:[1,"label"],info:[1,"info"],inline:[1,"inline"]},features:[ot$1([{provide:Ua,useExisting:nn(()=>n),multi:true}])],ngContentSelectors:Sc,decls:11,vars:13,consts:[["type","button","matRipple","",1,"hover:bg-base-200","relative","flex","flex-1","items-center","space-x-2","overflow-hidden","rounded-sm","border","py-1","pr-1","pl-2",3,"click"],[1,"z-10","flex","flex-1","items-center","space-x-2","px-2","text-left"],[1,"flex","h-full","w-full","flex-col","justify-center","leading-none"],[1,"text-xs","opacity-30"],[3,"matTooltip"],[1,"bg-info","absolute","inset-0","z-0","m-0!","opacity-10"],[1,"px-2"],[1,"pointer-events-none",3,"ngModel"],["toggle","",1,"border-base-400","relative","h-8","w-12","rounded-full","border-2"],[1,"absolute","top-1/2","flex","h-6","w-6","-translate-x-0.5","-translate-y-1/2","items-center","justify-center","rounded-full","text-black","shadow-sm"],[1,"pointer-events-none",3,"ngModelChange","ngModel"]],template:function(t,r){t&1&&(Wt(),ke(0,"button",0),$e("click",function(){return r.setValue(!r.value())}),ke(1,"div",1)(2,"div",2)(3,"div"),pr(4),Pe(5),Ue(),Le(6,Ic,2,1,"div",3),Ue(),Le(7,Rc,2,1,"icon",4),Ue(),Le(8,Oc,1,0,"div",5),Le(9,Dc,5,15,"div",6)(10,Nc,1,1,"mat-checkbox",7),Ue()),t&2&&(Ne("border-base-300",!r.value())("border-info",r.value()),ue(),Ne("py-2",!r.inline())("py-1",r.inline()),ue(3),Qd$1(r.label()),ue(2),Fe$1(r.info()&&r.inline()?6:-1),ue(),Fe$1(r.info()&&!r.inline()?7:-1),ue(),Fe$1(r.value()?8:-1),ue(),Fe$1(r.toggle()?9:10));},dependencies:[hr,Pi,ANe,yNe,PX,xJe,mtt,Ide],styles:["[_nghost-%COMP%]{display:flex}[toggle][_ngcontent-%COMP%]{transition:background .2s,left .2s}"]});}}return n})();var ui=new Map,Ac="PlaceOS.image-cache-v1",Us="PlaceOS.image-cache-keys-v1";var mi=null;function zs(){if(mi)return mi;if(typeof sessionStorage>"u")return [];try{let n=sessionStorage.getItem(Us);return mi=n?JSON.parse(n):[],mi}catch{return []}}function Pc(n){if(mi=Array.from(new Set(n)),!(typeof sessionStorage>"u"))try{sessionStorage.setItem(Us,JSON.stringify(mi));}catch{}}async function Gs(){if(typeof caches>"u")return null;try{return await caches.open(Ac)}catch{return null}}async function Fc(n){if(!zs().includes(n))return null;let i=await Gs();if(!i)return null;try{return await i.match(n)||null}catch{return null}}async function Vc(n,i){let e=await Gs();if(e)try{await e.put(n,i),Pc([...zs(),n]);}catch{}}function Lc(n){let i=Ut$1();document.cookie=`${i==="x-api-key"?"api-key="+encodeURIComponent(Go$1()):"bearer_token="+encodeURIComponent(i)};max-age=30;path=${n};samesite=strict;${location.protocol==="https:"?"secure;":""}`;}function Bc(){let n=Ut$1();return n==="x-api-key"?{"X-API-Key":Go$1()}:{Authorization:`Bearer ${n}`}}async function Bs(n,i){let e=await i.blob(),t=URL.createObjectURL(e);return ui.set(n,t),t}async function Hs(n,i){return js(n,()=>(Lc(i),fetch(n)))}async function Ws(n){return js(n,()=>fetch(n,{headers:Bc()}))}async function js(n,i){if(ui.has(n))return ui.get(n);let e=await Fc(n);if(e)return Bs(n,e);let t=await i();if(!t||!t.ok)throw new Error(`Failed to fetch image: ${t?.status}`);return Vc(n,t.clone()),Bs(n,t)}var Rt=(()=>{class n extends io$1{constructor(){super(),this._element=m(G),this.source=mn(void 0);}ngOnChanges(e){e.source&&this.source()&&this._loadImage();}async _loadImage(){let e=this.source();if(typeof e!="string")return;if(!this._element||!Ho())return this.timeout("load",()=>this._loadImage(),300);if(!this._isLocalUrl(e)){this._element.nativeElement.src=e;return}if(ui.has(e)){this._element.nativeElement.src=ui.get(e);return}let t=e.includes("/api/engine/v2/uploads")||e.includes("/api/engine/v2/signage");try{this._element.nativeElement.src=t?await Hs(e,this._cookiePath(e)):await Ws(e);}catch(r){this._element.nativeElement.dispatchEvent(new ErrorEvent("error",{error:r}));}}_isLocalUrl(e){try{return new URL(e,location.href).origin===location.origin}catch{return  false}}_cookiePath(e){return e.includes("/api/engine/v2/uploads")?"/api/engine/v2/uploads":"/api/engine/v2/signage"}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275dir=M({type:n,selectors:[["img","auth",""],["video","auth",""],["audio","auth",""]],inputs:{source:[1,"source"]},features:[Re,Et]});}}return n})();var mo=0;function Uc(){return mo}function Ot(n,i){return (...e)=>{try{return mo=i,n(...e)}finally{mo=0;}}}function zc(n){return !n}function Ks(n){return n}function Dt(n){return Array.isArray(n)}function fr(n){return (typeof n=="object"||typeof n=="function")&&n!=null}var Bt=Symbol(),Mr=Symbol(),Vi=class{predicates;fns=[];constructor(i){this.predicates=i;}push(i){this.fns.push(qs(this.predicates,i));}mergeIn(i){let e=this.predicates?i.fns.map(t=>qs(this.predicates,t)):i.fns;this.fns.push(...e);}hasRules(){return this.fns.length>0}},gr=class extends Vi{get defaultValue(){return  false}compute(i){return this.fns.some(e=>{let t=e(i);return t&&t!==Mr})}},hi=class n extends Vi{ignore;static ignoreNull(i){return new n(i,e=>e===null)}constructor(i,e){super(i),this.ignore=e;}get defaultValue(){return []}compute(i){return this.fns.reduce((e,t)=>{let r=t(i);return r===void 0||r===Mr?e:Dt(r)?[...e,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?e:[...e,r]},[])}},uo=class extends hi{constructor(i){super(i,void 0);}},po=class extends Vi{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(i,e){super(i),this.key=e;}compute(i){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let t=0;t<this.fns.length;t++){let r=this.fns[t](i);r!==Mr&&(e=this.key.reducer.reduce(e,r));}return e}};function qs(n,i){return n.length===0?i:e=>{for(let t of n){let r=e.stateOf(t.path),o=K(r.structure.pathKeys).length-t.depth;for(let c=0;c<o;c++)r=r.structure.parent;if(!t.fn(r.context))return Mr}return i(e)}}var _i=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(i){this.predicates=i,this.hidden=new gr(i),this.disabledReasons=new uo(i),this.readonly=new gr(i),this.syncErrors=hi.ignoreNull(i),this.syncTreeErrors=hi.ignoreNull(i),this.asyncErrors=hi.ignoreNull(i);}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(i){return this.metadata.has(i)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(i){return this.metadata.has(i)||this.metadata.set(i,new po(this.predicates,i)),this.metadata.get(i)}mergeIn(i){this.hidden.mergeIn(i.hidden),this.disabledReasons.mergeIn(i.disabledReasons),this.readonly.mergeIn(i.readonly),this.syncErrors.mergeIn(i.syncErrors),this.syncTreeErrors.mergeIn(i.syncTreeErrors),this.asyncErrors.mergeIn(i.asyncErrors);for(let e of i.getMetadataKeys()){let t=i.metadata.get(e);this.getMetadata(e).mergeIn(t);}}},br=class{depth;constructor(i){this.depth=i;}build(){return new vr(this,[],0)}},fi=class n extends br{constructor(i){super(i);}current;all=[];addHiddenRule(i){this.getCurrent().addHiddenRule(i);}addDisabledReasonRule(i){this.getCurrent().addDisabledReasonRule(i);}addReadonlyRule(i){this.getCurrent().addReadonlyRule(i);}addSyncErrorRule(i){this.getCurrent().addSyncErrorRule(i);}addSyncTreeErrorRule(i){this.getCurrent().addSyncTreeErrorRule(i);}addAsyncErrorRule(i){this.getCurrent().addAsyncErrorRule(i);}addMetadataRule(i,e){this.getCurrent().addMetadataRule(i,e);}getChild(i){if(i===Bt){let e=this.getCurrent().children;e.size>(e.has(Bt)?1:0)&&(this.current=void 0);}return this.getCurrent().getChild(i)}hasLogic(i){return this===i?true:this.all.some(({builder:e})=>e.hasLogic(i))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:i})=>i.anyChildHasLogic())}mergeIn(i,e){e?this.all.push({builder:i,predicate:{fn:Ot(e.fn,this.depth),path:e.path}}):this.all.push({builder:i}),this.current=void 0;}getCurrent(){return this.current===void 0&&(this.current=new Li(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new n(0)}},Li=class extends br{logic=new _i([]);children=new Map;constructor(i){super(i);}addHiddenRule(i){this.logic.hidden.push(Ot(i,this.depth));}addDisabledReasonRule(i){this.logic.disabledReasons.push(Ot(i,this.depth));}addReadonlyRule(i){this.logic.readonly.push(Ot(i,this.depth));}addSyncErrorRule(i){this.logic.syncErrors.push(Ot(i,this.depth));}addSyncTreeErrorRule(i){this.logic.syncTreeErrors.push(Ot(i,this.depth));}addAsyncErrorRule(i){this.logic.asyncErrors.push(Ot(i,this.depth));}addMetadataRule(i,e){this.logic.getMetadata(i).push(Ot(e,this.depth));}getChild(i){return this.children.has(i)||this.children.set(i,new fi(this.depth+1)),this.children.get(i)}hasLogic(i){return this===i}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let i of this.children.values())if(i.hasRules())return  true;return  false}},vr=class n{builder;predicates;depth;logic;constructor(i,e,t){this.builder=i,this.predicates=e,this.depth=t,this.logic=i?Gc(i,e,t):new _i([]);}getChild(i){let e=this.builder?Ys(this.builder,i):[];if(e.length===0)return new n(void 0,[],this.depth+1);if(e.length===1){let{builder:t,predicates:r}=e[0];return new n(t,[...this.predicates,...r.map(o=>_o(o,this.depth))],this.depth+1)}else {let t=e.map(({builder:r,predicates:o})=>new n(r,[...this.predicates,...o.map(c=>_o(c,this.depth))],this.depth+1));return new ho(t)}}hasLogic(i){return this.builder?this.builder.hasLogic(i):false}hasRules(){return this.builder?this.builder.hasRules():false}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():false}},ho=class n{all;logic;constructor(i){this.all=i,this.logic=new _i([]);for(let e of i)this.logic.mergeIn(e.logic);}getChild(i){return new n(this.all.flatMap(e=>e.getChild(i)))}hasLogic(i){return this.all.some(e=>e.hasLogic(i))}hasRules(){return this.all.some(i=>i.hasRules())}anyChildHasLogic(){return this.all.some(i=>i.anyChildHasLogic())}};function Ys(n,i){if(n instanceof fi)return n.all.flatMap(({builder:e,predicate:t})=>{let r=Ys(e,i);return t?r.map(({builder:o,predicates:c})=>({builder:o,predicates:[...c,t]})):r});if(n instanceof Li)return [...i!==Bt&&n.children.has(Bt)?[{builder:n.getChild(Bt),predicates:[]}]:[],...n.children.has(i)?[{builder:n.getChild(i),predicates:[]}]:[]];throw new C(1909,false)}function Gc(n,i,e){let t=new _i(i);if(n instanceof fi){let r=n.all.map(({builder:o,predicate:c})=>new vr(o,c?[...i,_o(c,e)]:i,e));for(let o of r)t.mergeIn(o.logic);}else if(n instanceof Li)t.mergeIn(n.logic);else throw new C(1909,false);return t}function _o(n,i){return m$1(l({},n),{depth:i})}var Qs=Symbol("PATH"),ot=class n{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,Hc);logicBuilder;constructor(i,e,t,r){this.keys=i,this.parent=t,this.keyInParent=r,this.root=e??this,t||(this.logicBuilder=fi.newRoot());}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(i){return this.children.has(i)||this.children.set(i,new n([...this.keys,i],this.root,this,i)),this.children.get(i)}mergeIn(i,e){let t=i.compile();this.builder.mergeIn(t.builder,e);}static unwrapFieldPath(i){return i[Qs]}static newRoot(){return new n([],void 0,void 0,void 0)}},Hc={get(n,i){return i===Qs?n:n.getChild(i).fieldPathProxy}},_r,Fi=new Map,yr=class n{schemaFn;constructor(i){this.schemaFn=i;}compile(){if(Fi.has(this))return Fi.get(this);let i=ot.newRoot();Fi.set(this,i);let e=_r;try{_r=i,this.schemaFn(i.fieldPathProxy);}finally{_r=e;}return i}static create(i){return i instanceof n?i:new n(i)}static rootCompile(i){try{return Fi.clear(),i===void 0?ot.newRoot():i instanceof n?i.compile():new n(i).compile()}finally{Fi.clear();}}};function Wc(n){return n instanceof yr||typeof n=="function"}function wr(n){if(_r!==ot.unwrapFieldPath(n).root)throw new C(1908,false)}function gi(n,i,e){return wr(n),ot.unwrapFieldPath(n).builder.addMetadataRule(i,e),i}var Ut={list(){return {reduce:(n,i)=>i===void 0?n:[...n,i],getInitial:()=>[]}},min(){return {reduce:(n,i)=>n===void 0||i===void 0?n??i:i<n?i:n,getInitial:()=>{}}},max(){return {reduce:(n,i)=>n===void 0||i===void 0?n??i:i>n?i:n,getInitial:()=>{}}},or(){return {reduce:(n,i)=>n||i,getInitial:()=>false}},and(){return {reduce:(n,i)=>n&&i,getInitial:()=>true}},override:jc};function jc(n){return {reduce:(i,e)=>e,getInitial:()=>n?.()}}var To=Symbol("IS_ASYNC_VALIDATION_RESOURCE"),xr=class{reducer;create;brand;[To];constructor(i,e){this.reducer=i,this.create=e;}};function at(n){return new xr(n??Ut.override())}function Eo(){return at()}var So=at(Ut.or()),Io=Eo();var Ro=at(Ut.max()),Zs=Eo();var Js=at(Ut.max()),el=at(Ut.min()),tl=at(Ut.list());function Fe(n,i){if(n===i)return  true;if(!n||!i||n.length!==i.length)return  false;for(let e=0;e<n.length;e++)if(!Object.is(n[e],i[e]))return  false;return  true}function Kc(n){return n.errors().length>0?"invalid":n.pending()?"unknown":"valid"}var fo=class{node;constructor(i){this.node=i;}rawSyncTreeErrors=fe(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:Fe});syncErrors=fe(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...qc(this.node.submitState.submissionErrors())],{equal:Fe});syncValid=fe(()=>this.shouldSkipValidation()?true:this.node.structure.reduceChildren(this.syncErrors().length===0,(i,e)=>e&&i.validationState.syncValid(),zc));syncTreeErrors=fe(()=>this.rawSyncTreeErrors().filter(i=>i.fieldTree===this.node.fieldTree),{equal:Fe});rawAsyncErrors=fe(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:Fe});asyncErrors=fe(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(i=>i==="pending"||i.fieldTree===this.node.fieldTree),{equal:Fe});parseErrors=fe(()=>this.node.formFieldBindings().flatMap(i=>i.parseErrors()),{equal:Fe});errors=fe(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(i=>i!=="pending")],{equal:Fe});errorSummary=fe(()=>{let i=this.node.structure.reduceChildren(this.errors(),(e,t)=>[...t,...e.errorSummary()]);return K(()=>i.sort($c)),i},{equal:Fe});pending=fe(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(i,e)=>e||i.validationState.asyncErrors().includes("pending")));status=fe(()=>{if(this.shouldSkipValidation())return "valid";let i=Kc(this);return this.node.structure.reduceChildren(i,(e,t)=>t==="invalid"||e.validationState.status()==="invalid"?"invalid":t==="unknown"||e.validationState.status()==="unknown"?"unknown":"valid",e=>e==="invalid")});valid=fe(()=>this.status()==="valid");invalid=fe(()=>this.status()==="invalid");shouldSkipValidation=fe(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function qc(n){return n===void 0?[]:Dt(n)?n:[n]}function il(n,i){if(Dt(n))for(let e of n)e.fieldTree??=i;else n&&(n.fieldTree??=i);return n}function $s(n){return n.formField?n.formField.element:n.fieldTree().formFieldBindings().reduce((i,e)=>!i||!e.element?i??e.element:i.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:i,void 0)}function $c(n,i){let e=$s(n),t=$s(i);return e===t?0:e===void 0||t===void 0?e===void 0?1:-1:e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var go=at(),bo=class{node;cache=new WeakMap;constructor(i){this.node=i,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this);}resolve(i){if(!this.cache.has(i)){let e=fe(()=>{let t=ot.unwrapFieldPath(i),r=this.node,o=Uc();for(;o>0||!r.structure.logic.hasLogic(t.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new C(1900,false);for(let c of t.keys)if(r=r.structure.getChild(c),r===void 0)throw new C(1901,false);return r.fieldTree});this.cache.set(i,e);}return this.cache.get(i)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=fe(()=>{let i=this.key();if(!Dt(K(this.node.structure.parent.value)))throw new C(1906,false);return Number(i)});fieldTreeOf(i){return this.resolve(i)}stateOf(i){return this.resolve(i)()}valueOf=i=>{let e=this.resolve(i)().value();if(e instanceof Tv)throw new C(1907,false);return e}},vo=class{node;metadata=new Map;constructor(i){this.node=i;}runMetadataCreateLifecycle(){this.node.logicNode.logic.hasMetadataKeys()&&K(()=>fn(this.node.structure.injector,()=>{for(let i of this.node.logicNode.logic.getMetadataKeys())if(i.create){let e=this.node.logicNode.logic.getMetadata(i),t=i.create(this.node,fe(()=>e.compute(this.node.context)));this.metadata.set(i,t);}}));}get(i){if(this.has(i)&&!this.metadata.has(i)){if(i.create)throw new C(1912,false);let e=this.node.logicNode.logic.getMetadata(i);this.metadata.set(i,fe(()=>e.compute(this.node.context)));}return this.metadata.get(i)}has(i){return this.node.logicNode.logic.hasMetadata(i)}},Xc={get(n,i,e){let t=n(),r=t.structure.getChild(i);if(r!==void 0)return r.fieldTree;let o=K(t.value);if(Dt(o)){if(i==="length")return t.value().length;if(i===Symbol.iterator)return ()=>(t.value(),Array.prototype[Symbol.iterator].apply(t.fieldTree))}if(fr(o)&&i===Symbol.iterator)return function*(){for(let c in e)yield [c,e[c]];}},getOwnPropertyDescriptor(n,i){let e=K(n().value),t=Reflect.getOwnPropertyDescriptor(e,i);return t&&!t.configurable&&(t.configurable=true),t},ownKeys(n){let i=K(n().value);return typeof i=="object"&&i!==null?Reflect.ownKeys(i):[]}};function Yc(n,i){let e=fe(()=>n()[i()]);return e[Nt]=n[Nt],e.set=t=>{Object.is(K(e),t)||n.update(r=>Qc(r,t,i()));},e.update=t=>{e.set(t(K(e)));},e.asReadonly=()=>e,e}function Qc(n,i,e){if(Dt(n)){let t=[...n];return t[e]=i,t}else return m$1(l({},n),{[e]:i})}var pi=Symbol(""),nl=fe(()=>false),kr=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=H$1.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(i,e,t){this.logic=i,this.node=e,this.createChildNode=t;}children(){this.ensureChildrenMap();let i=this.childrenMap();return i===void 0?[]:Array.from(i.byPropertyKey.values()).map(e=>K(e.reader))}materializedChildren(){let i=this.childrenMap();return i===void 0?[]:Array.from(i.byPropertyKey.values()).map(e=>e.node)}_areChildrenMaterialized(){return K(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||K(()=>{this.childrenMap.update(i=>this.computeChildrenMap(this.value(),i,true));});}getChild(i){this.ensureChildrenMap();let e=i.toString(),t=K(this.childrenMap)?.byPropertyKey.get(e)?.reader;return t||(t=this.createReader(e)),t()}reduceChildren(i,e,t){let r=this.childrenMap();if(!r)return i;let o=i;for(let c of r.byPropertyKey.values()){if(t?.(o))break;o=e(K(c.reader),o);}return o}destroy(){this.injector.destroy();}createKeyOrOrphanSignals(i,e,t){if(i==="root")return {keyInParent:rl,isOrphaned:nl};let r=this.parent,o=t,c=fe(()=>{if(r.structure.isOrphaned())return pi;let R=r.structure.childrenMap();if(!R)return pi;let F=R.byPropertyKey.get(o);if(F&&F.node===this.node)return o;if(e===void 0)return pi;for(let[ae,ue]of R.byPropertyKey)if(ue.node===this.node)return o=ae;return pi}),h=fe(()=>c()===pi);return {keyInParent:fe(()=>{let R=c();if(R===pi)throw e===void 0?new C(-1902,false):new C(1904,false);return R}),isOrphaned:h}}createChildrenMap(){return Xd$1({source:this.value,computation:(i,e)=>this.computeChildrenMap(i,e?.value,false)})}computeChildrenMap(i,e,t){if(!fr(i)||!t&&e===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;e??={byPropertyKey:new Map};let r,o=Dt(i);e!==void 0&&(o?r=Jc(e,i,this.identitySymbol):r=ed(e,i));for(let c of Object.keys(i)){let h,x=i[c];if(x===void 0){e.byPropertyKey.has(c)&&(r??=l({},e),r.byPropertyKey.delete(c));continue}o&&fr(x)&&!Dt(x)&&(h=x[this.identitySymbol]??=Symbol(""));let R;h&&(e.byTrackingKey?.has(h)||(r??=l({},e),r.byTrackingKey??=new Map,r.byTrackingKey.set(h,this.createChildNode(c,h,o))),R=(r??e).byTrackingKey.get(h));let F=e.byPropertyKey.get(c);F===void 0?(r??=l({},e),r.byPropertyKey.set(c,{reader:this.createReader(c),node:R??this.createChildNode(c,h,o)})):R&&R!==F.node&&(r??=l({},e),F.node=R);}return r??e}createReader(i){return fe(()=>this.childrenMap()?.byPropertyKey.get(i)?.node)}},yo=class extends kr{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return Zc}get keyInParent(){return rl}isOrphaned=nl;childrenMap;constructor(i,e,t,r,o){super(e,i,o),this.fieldManager=t,this.value=r,this.childrenMap=this.createChildrenMap();}},xo=class extends kr{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(i,e,t,r,o,c){super(e,i,c),this.logic=e,this.parent=t,this.root=this.parent.structure.root;let h=this.createKeyOrOrphanSignals("child",r,o);this.isOrphaned=h.isOrphaned,this.keyInParent=h.keyInParent,this.pathKeys=fe(()=>[...t.structure.pathKeys(),this.keyInParent()]),this.value=Yc(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this);}};var Zc=fe(()=>[]),rl=fe(()=>{throw new C(1905,false)});function Jc(n,i,e){let t,r=new Set(n.byPropertyKey.keys()),o=new Set(n.byTrackingKey?.keys());for(let c=0;c<i.length;c++){let h=i[c];r.delete(c.toString()),fr(h)&&h.hasOwnProperty(e)&&o.delete(h[e]);}if(r.size>0){t??=l({},n);for(let c of r)t.byPropertyKey.delete(c);}if(o.size>0){t??=l({},n);for(let c of o)t.byTrackingKey?.delete(c);}return t}function ed(n,i){let e;for(let t of n.byPropertyKey.keys())i.hasOwnProperty(t)||(e??=l({},n),e.byPropertyKey.delete(t));return e}var ko=class{node;selfSubmitting=O(false);submissionErrors;constructor(i){this.node=i,this.submissionErrors=Xd$1({source:this.node.structure.value,computation:()=>[]});}submitting=fe(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??false))},Bi=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new bo(this)}fieldProxy=new Proxy(()=>this,Xc);pathNode;constructor(i){this.pathNode=i.pathNode,this.fieldAdapter=i.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,i),this.validationState=this.fieldAdapter.createValidationState(this,i),this.nodeState=this.fieldAdapter.createNodeState(this,i),this.metadataState=new vo(this),this.submitState=new ko(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle();}focusBoundControl(i){this.getBindingForFocus()?.focus(i);}getBindingForFocus(){let i=this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(Xs,void 0);return i||this.structure.children().map(e=>e.getBindingForFocus()).reduce(Xs,void 0)}pendingSync=Xd$1({source:()=>this.value(),computation:(i,e)=>{e?.value?.abort();}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let i=this.metadata(Zs)?.();return i?this.metadata(i):void 0}get maxLength(){return this.metadata(el)}get min(){let i=this.metadata(Io)?.();return i?this.metadata(i):void 0}get minLength(){return this.metadata(Js)}get pattern(){return this.metadata(tl)??td}get required(){return this.metadata(So)??id}metadata(i){return this.metadataState.get(i)}getError(i){return this.errors().find(e=>e.kind===i)}hasMetadata(i){return this.metadataState.has(i)}markAsTouched(i){this.structure.isOrphaned()||K(()=>{this.markAsTouchedInternal(i),this.flushSync();});}markAsTouchedInternal(i){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!i?.skipDescendants))for(let e of this.structure.children())e.markAsTouchedInternal();}markAsDirty(){this.nodeState.markAsDirty();}markAsPristine(){this.nodeState.markAsPristine();}markAsUntouched(){this.nodeState.markAsUntouched();}reset(i){K(()=>this._reset(i));}_reset(i){this.pendingSync()?.abort(),i!==void 0&&this.value.set(i),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.formFieldBindings())e.reset();for(let e of this.structure.materializedChildren())e._reset();}reloadValidation(){K(()=>this._reloadValidation());}_reloadValidation(){let i=this.logicNode.logic.getMetadataKeys();for(let e of i)e[To]&&this.metadata(e).reload?.();for(let e of this.structure.children())e._reloadValidation();}controlValueSignal(){let i=Xd$1(this.value);i.rawSet=i.set,i.set=t=>{i.rawSet(t),this.markAsDirty(),this.debounceSync();};let e=i.update;return i.update=t=>{e(t),this.markAsDirty(),this.debounceSync();},i}sync(){this.value.set(this.controlValue());}flushSync(){let i=this.pendingSync();i&&!i.signal.aborted&&(i.abort(),this.sync());}async debounceSync(){let i=K(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(i){let e=new AbortController,t=i(e.signal);if(t&&(this.pendingSync.set(e),await t,e.signal.aborted))return}this.structure.isOrphaned()||this.sync();}static newRoot(i,e,t,r){return r.newRoot(i,e,t,r)}createStructure(i){return i.kind==="root"?new yo(this,i.logic,i.fieldManager,i.value,this.newChild.bind(this)):new xo(this,i.logic,i.parent,i.identityInParent,i.initialKeyInParent,this.newChild.bind(this))}newChild(i,e,t){let r,o;return t?(r=this.pathNode.getChild(Bt),o=this.structure.logic.getChild(Bt)):(r=this.pathNode.getChild(i),o=this.structure.logic.getChild(i)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:r,logic:o,initialKeyInParent:i,identityInParent:e,fieldAdapter:this.fieldAdapter})}},td=fe(()=>[]),id=fe(()=>false);function Xs(n,i){return n?i&&n.element.compareDocumentPosition(i.element)&Node.DOCUMENT_POSITION_PRECEDING?i:n:i}var Co=class{node;selfTouched=O(false);selfDirty=O(false);markAsTouched(){this.selfTouched.set(true);}markAsDirty(){this.selfDirty.set(true);}markAsPristine(){this.selfDirty.set(false);}markAsUntouched(){this.selfTouched.set(false);}formFieldBindings=O([]);constructor(i){this.node=i;}dirty=fe(()=>{let i=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(i,(e,t)=>t||e.nodeState.dirty(),Ks)});touched=fe(()=>{let i=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(i,(e,t)=>t||e.nodeState.touched(),Ks)});disabledReasons=fe(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:Fe});disabled=fe(()=>!!this.disabledReasons().length);readonly=fe(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??false);hidden=fe(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??false);name=fe(()=>{let i=this.node.structure.parent;return i?`${i.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=fe(()=>{if(this.node.logicNode.logic.hasMetadata(go)){let e=this.node.logicNode.logic.getMetadata(go).compute(this.node.context);if(e)return t=>e(this.node.context,t)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=fe(()=>this.hidden()||this.disabled()||this.readonly())},Mo=class{newRoot(i,e,t,r){return new Bi({kind:"root",fieldManager:i,value:e,pathNode:t,logic:t.builder.build(),fieldAdapter:r})}newChild(i){return new Bi(i)}createNodeState(i){return new Co(i)}createValidationState(i){return new fo(i)}createStructure(i,e){return i.createStructure(e)}},wo=class{injector;rootName;submitOptions;constructor(i,e,t){this.injector=i,this.rootName=e??`${this.injector.get(wo$1)}.form${nd++}`,this.submitOptions=t;}structures=new Set;createFieldManagementEffect(i){_t(()=>{let e=new Set;this.markStructuresLive(i,e);for(let t of this.structures)e.has(t)||(this.structures.delete(t),K(()=>t.destroy()));},{injector:this.injector});}markStructuresLive(i,e){e.add(i);for(let t of i.children())this.markStructuresLive(t.structure,e);}},nd=0,ol=new S("");function rd(n){let i,e,t;return n.length===3?[i,e,t]=n:n.length===2?Wc(n[1])?[i,e]=n:[i,t]=n:[i]=n,[i,e,t]}function Oo(...n){let[i,e,t]=rd(n),r=t?.injector??m(H$1),o=fn(r,()=>yr.rootCompile(e)),c=new wo(r,t?.name,t?.submission),h=t?.adapter??new Mo,x=Bi.newRoot(c,i,o,h);c.createFieldManagementEffect(x.structure);let{experimentalWebMcpTool:R}=t??{};if(R){let F=fn(r,()=>m(ol,{optional:!0}));F&&fn(r,()=>F(x.fieldTree,{name:R.name,description:R.description}));}return x.fieldTree}var Cr=class{kind="compat";control;fieldTree;context;message;constructor({context:i,kind:e,control:t}){this.context=i,this.kind=e,this.control=t;}};function al(n){if(n.length===0)return null;let i={};for(let e of n)i[e.kind]=e instanceof Cr?e.context:e;return i}function sl(n,i){return n===null?[]:Object.entries(n).map(([e,t])=>new Cr({context:t,kind:e,control:i}))}var od=new S("");function Pg(n,i){wr(n);let e=ot.unwrapFieldPath(n),t;typeof i=="function"||typeof i=="string"?t=i:t=i?.when,e.builder.addDisabledReasonRule(r=>{let o=true;return typeof t=="string"?o=t:t&&(o=t(r)),typeof o=="string"?{fieldTree:r.fieldTree,message:o}:o?{fieldTree:r.fieldTree}:void 0});}function bi(n,i){return n instanceof Function?n(i):n}function ul(n){return typeof n=="number"?isNaN(n):n===""||n===false||n==null}function ll(n){return n===void 0?[]:Array.isArray(n)?n:[n]}function Vo(n,i){wr(n),ot.unwrapFieldPath(n).builder.addSyncErrorRule(t=>il(i(t),t.fieldTree));}function ad(n){return new Do(n)}function sd(n,i){return new No(n,i)}function ld(n){return new Ao(n)}var vi=class{__brand=void 0;kind="";fieldTree;message;constructor(i){i&&Object.assign(this,i);}},Do=class extends vi{kind="required"},No=class extends vi{min;kind="min";constructor(i,e){super(e),this.min=i;}};var Ao=class extends vi{kind="email"},Tr=class extends vi{kind="parse"};var cd=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function Fg(n,i){Vo(n,e=>{if(!(i?.when&&!i.when(e))&&!ul(e.value())&&!cd.test(e.value()))return i?.error?bi(i.error,e):ld({message:bi(i?.message,e)})});}function Vg(n,i,e){let t=at();gi(n,t,r=>{return i}),gi(n,Ro,({state:r})=>r.metadata(t)()),gi(n,Io,()=>Ro),Vo(n,r=>{let o=r.value();if(o===null||Number.isNaN(o))return;let c=r.state.metadata(t)();if(!(c===void 0||Number.isNaN(c))&&o<c)return sd(c,{message:bi(e?.message,r)})});}function Er(n,i){let e=gi(n,at(),t=>i?.when?i.when(t):true);gi(n,So,({state:t})=>t.metadata(e)()),Vo(n,t=>{if(t.state.metadata(e)()&&ul(t.value()))return i?.error?bi(i.error,t):ad({message:bi(i?.message,t)})});}function dd(n,i,e){let t=Xd$1({source:n,computation:()=>[],equal:Fe}),r=c=>{let h=e(c);t.set(ll(h.error)),h.value!==void 0&&i(h.value),t.set(ll(h.error));},o=()=>{t.set([]);};return {errors:t.asReadonly(),setRawValue:r,reset:o}}var Po=class{field;constructor(i){this.field=i;}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return !this.field().disabled()}get errors(){return al(this.field().errors())}get pristine(){return !this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return !this.field().touched()}get status(){if(this.field().disabled())return "DISABLED";if(this.field().valid())return "VALID";if(this.field().invalid())return "INVALID";if(this.field().pending())return "PENDING";throw new C(1910,false)}valueAccessor=null;hasValidator(i){return i===al$1.required?this.field().required():false}updateValueAndValidity(){}},Fo={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},md=(()=>{let n={};for(let i of Object.keys(Fo))n[Fo[i]]=i;return n})();function Lo(n,i){let e=md[i];return n[e]?.()}var Bo=Object.values(Fo);function Sr(){return {}}function zt(n,i,e){return n[i]!==e?(n[i]=e,true):false}function ud(n,i,e){let t;if(pl(n)&&e.isBadInput(n))return {error:new Tr};switch(n.type){case "checkbox":return {value:n.checked};case "number":case "range":case "datetime-local":if(t=K(i),typeof t=="number"||t===null)return {value:n.value===""?null:n.valueAsNumber};break;case "date":case "month":case "time":case "week":if(t=K(i),t===null||t instanceof Date)return {value:n.valueAsDate};if(typeof t=="number")return {value:n.valueAsNumber};break}if(n.tagName==="INPUT"&&n.type==="text"&&(t??=K(i),typeof t=="number"||t===null)){if(n.value==="")return {value:null};let r=Number(n.value);return Number.isNaN(r)?{error:new Tr}:{value:r}}return {value:n.value}}function cl(n,i){switch(n.type){case "checkbox":n.checked=i;return;case "radio":n.checked=i===n.value;return;case "number":case "range":case "datetime-local":if(typeof i=="number"){dl(n,i);return}else if(i===null){n.value="";return}break;case "date":case "month":case "time":case "week":if(i===null||i instanceof Date){n.valueAsDate=i;return}else if(typeof i=="number"){dl(n,i);return}}if(n.tagName==="INPUT"&&n.type==="text"){if(typeof i=="number"){n.value=isNaN(i)?"":String(i);return}if(i===null){n.value="";return}}n.value=i;}function dl(n,i){isNaN(i)?n.value="":n.valueAsNumber=i;}function pl(n){return n.tagName==="INPUT"}function pd(n){return n.type==="date"||n.type==="datetime-local"||n.type==="month"||n.type==="time"||n.type==="week"}function hd(n,i){let e=n.getUTCFullYear(),t=String(n.getUTCMonth()+1).padStart(2,"0");if(i==="month")return `${e}-${t}`;let r=String(n.getUTCDate()).padStart(2,"0");return `${e}-${t}-${r}`}function hl(n,i,e){return i instanceof Date&&(n==="min"||n==="max")&&(e==="date"||e==="month")?hd(i,e):i}function _d(n,i){n.listenToCustomControlModel(t=>i.state().controlValue.set(t)),n.listenToCustomControlOutput("touch",()=>i.state().markAsTouched()),i.registerAsBinding(n.customControl);let e=Sr();return ()=>{let t=i.state(),r=t.controlValue();zt(e,"controlValue",r)&&n.setCustomControlModelInput(r);for(let o of Bo){let c;if(o==="errors"?c=i.errors():c=Lo(t,o),zt(e,o,c)&&(n.setInputOnDirectives(o,c),i.elementAcceptsNativeProperty(o)&&!n.customControlHasInput(o))){let h=hl(o,c,i.nativeFormElement.type);_X(i.renderer,i.nativeFormElement,o,h);}}}}function fd(n){return typeof n=="object"&&n!==null}function gd(n,i){let e=Sr();i.controlValueAccessor.registerOnChange(r=>{e.controlValue=r,i.state().controlValue.set(r);}),i.controlValueAccessor.registerOnTouched(()=>i.state().markAsTouched());let t=i.injector.get(Ba,null,{optional:true,self:true});if(t){let r;for(let x of t)fd(x)&&x.registerOnValidatorChange&&(r??=O(0),x.registerOnValidatorChange(()=>{r.update(R=>R+1);}));let o=t.map(x=>typeof x=="function"?x:x.validate.bind(x)),c=al$1.compose(o),h=fe(()=>{r?.();let x=c?c(i.interopNgControl.control):null;return sl(x,i.interopNgControl.control)});i.parseErrorsSource.set(h);}return i.registerAsBinding({reset:()=>{let r=i.state().value();e.controlValue=r,K(()=>i.controlValueAccessor.writeValue(r));}}),()=>{let r=i.state(),o=r.value();zt(e,"controlValue",o)&&K(()=>i.controlValueAccessor.writeValue(o));for(let c of Bo){let h=Lo(r,c);if(zt(e,c,h)){let x=n.setInputOnDirectives(c,h);c==="disabled"&&i.controlValueAccessor.setDisabledState?K(()=>i.controlValueAccessor.setDisabledState(h)):!x&&i.elementAcceptsNativeProperty(c)&&_X(i.renderer,i.nativeFormElement,c,h);}}}}function bd(n,i,e){if(typeof MutationObserver!="function")return;let t=new MutationObserver(r=>{r.some(o=>vd(o))&&i();});t.observe(n,{attributes:true,attributeFilter:["value"],characterData:true,childList:true,subtree:true}),e.onDestroy(()=>t.disconnect());}function vd(n){if(n.type==="childList"||n.type==="characterData"){if(n.target instanceof Comment)return  false;for(let i of n.addedNodes)if(!(i instanceof Comment))return  true;for(let i of n.removedNodes)if(!(i instanceof Comment))return  true;return  false}return n.type==="attributes"&&n.target instanceof HTMLOptionElement}function yd(n,i,e,t){let r=false,o=i.nativeFormElement,c=dd(()=>i.state().value(),x=>i.state().controlValue.set(x),x=>ud(o,i.state().value,t));e.set(c.errors),i.onReset=()=>{c.reset();let x=i.state().value();h.controlValue=x,cl(o,x);},n.listenToDom("input",()=>c.setRawValue(void 0)),n.listenToDom("blur",()=>i.state().markAsTouched()),pl(o)&&pd(o)&&t.watchValidity(i.destroyRef,o,()=>c.setRawValue(void 0)),i.registerAsBinding(),o.tagName==="SELECT"&&bd(o,()=>{r&&(o.value=i.state().controlValue());},i.destroyRef);let h=Sr();return ()=>{let x=i.state();for(let F of Bo){let ae=Lo(x,F);if(zt(h,F,ae)&&(n.setInputOnDirectives(F,ae),i.elementAcceptsNativeProperty(F))){let ue=hl(F,ae,o.type);_X(i.renderer,o,F,ue);}}let R=x.controlValue();zt(h,"controlValue",R)&&cl(o,R),r=true;}}var _l=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=L({token:n,factory:e=>xd.\u0275fac(e),providedIn:"root"})}return n})(),xd=(()=>{class n extends _l{document=m(Y);cspNonce=m(Uc$1,{optional:true});injectedStyles=new WeakMap;watchValidity(e,t,r){let o=t.getRootNode();this.injectedStyles.has(o)||this.injectedStyles.set(o,this.createTransitionStyle(o));let c=h=>{let x=h;(x.animationName==="ng-valid"||x.animationName==="ng-invalid")&&r();};t.addEventListener("animationstart",c),e.onDestroy(()=>{t.removeEventListener("animationstart",c);});}isBadInput(e){return e.validity?.badInput??false}createTransitionStyle(e){let t=this.document.createElement("style");return this.cspNonce&&(t.nonce=this.cspNonce),t.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,e.nodeType===9?e.head?.appendChild(t):e.appendChild(t),t}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove();}static \u0275fac=(()=>{let e;return function(r){return (e||(e=yt(n)))(r||n)}})();static \u0275prov=L({token:n,factory:n.\u0275fac})}return n})(),kd=Symbol(),ml=new S(""),fl=(()=>{class n{field=mn.required({alias:"formField"});state=fe(()=>this.field()());renderer=m(We);destroyRef=m(Yt);injector=m(H$1);element=m(G).nativeElement;elementIsNativeFormElement=gX(this.element);elementAcceptsTextualValues=ENe(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=m(Ua,{optional:true,self:true});config=m(od,{optional:true});validityMonitor=m(_l);parseErrorsSource=O(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new Po(this.state)}parseErrors=fe(()=>this.parseErrorsSource()?.().map(e=>m$1(l({},e),{fieldTree:K(this.state).fieldTree,formField:this}))??[],{equal:Fe});errors=fe(()=>this.state().errors().filter(e=>!e.formField||e.formField===this),{equal:Fe});isFieldBinding=false;resetter=()=>{};parseErrorsResetCallback;setParseErrors(e){this.parseErrorsSource.set(e);}set onReset(e){this.parseErrorsResetCallback=e;}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return !this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:wX(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,fe(()=>o(this))]);if(e.length===0)return;let t=Sr();K1({write:()=>{for(let[r,o]of e){let c=o();zt(t,r,c)&&(c?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r));}}},{injector:this.injector});}focus(e){this.focuser(e);}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value());}registerAsBinding(e){if(this.isFieldBinding)throw new C(1913,false);this.isFieldBinding=true,this.installClassBindingEffect(),e?.focus&&(this.focuser=t=>e.focus(t)),e?.reset&&(this.resetter=()=>e.reset()),_t(t=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),t(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(c=>c!==this));});},{injector:this.injector});}[kd];\u0275ngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=gd(e,this);else if(e.customControl)this.\u0275ngControlUpdate=_d(e,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=yd(e,this,this.parseErrorsSource,this.validityMonitor);else throw new C(1914,false)}\u0275ngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return  false;switch(e){case "min":case "max":return this._elementAcceptsMinMax??=_Ne(this.element);case "minLength":case "maxLength":return this.elementAcceptsTextualValues;case "disabled":case "required":case "readonly":case "name":return  true;default:return  false}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=M({type:n,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[ot$1([{provide:ml,useExisting:n},{provide:br$1,useFactory:()=>m(n).interopNgControl},{provide:SX,useFactory:()=>m(ml,{self:true})}]),$E("formField")]})}return n})();var Cd=["*"];function Md(n,i){n&1&&(ke(0,"button",7)(1,"icon"),pr(2,"close"),Ue()());}function wd(n,i){if(n&1&&Le(0,Md,3,0,"button",7),n&2){let e=vt(2);Fe$1(e.loading()?-1:0);}}function Td(n,i){if(n&1&&(ke(0,"a",8)(1,"icon"),pr(2,"close"),Ue()()),n&2){let e=vt(3);An$1("routerLink",e.close());}}function Ed(n,i){if(n&1&&Le(0,Td,3,1,"a",8),n&2){let e=vt(2);Fe$1(e.loading()?-1:0);}}function Sd(n,i){if(n&1&&Le(0,wd,1,1)(1,Ed,1,1),n&2){let e=vt();Fe$1(e.close()?.length?1:0);}}function Id(n,i){n&1&&(Pe(0),Lt(1,"div",9));}function Rd(n,i){if(n&1&&(ke(0,"div",5),Lt(1,"mat-spinner",10),ke(2,"p",11),pr(3),Ue()()),n&2){let e=vt();ue(),An$1("diameter",32),ue(2),Qd$1(e.loading());}}function Od(n,i){if(n&1&&(ke(0,"kbd",14),pr(1),Ue()),n&2){let e=vt(2);ue(),Qd$1(e.confirm_hotkey());}}function Dd(n,i){if(n&1){let e=QD();ke(0,"footer",12)(1,"button",13),$e("click",function(){$_(e);let r=vt();return j_(r.confirm.emit())}),pr(2),Hp(3,"translate"),Le(4,Od,2,1,"kbd",14),Ue()();}if(n&2){let e=vt();Ne("max-w-156",!e.full_width()),ue(),An$1("disabled",e.confirm_disabled()),ue(),xo$1(" ",e.confirm_text()||eC(3,5,"COMMON.SAVE")," "),ue(2),Fe$1(e.confirm_hotkey()?4:-1);}}var Ir=(()=>{class n{constructor(){this.loading=mn(""),this.heading=mn("Fullscreen Modal"),this.confirm_text=mn(""),this.confirm_hotkey=mn(""),this.confirm_disabled=mn(false),this.close=mn([]),this.hide_confirm=mn(false),this.hide_close=mn(false),this.full_width=mn(false),this.confirm=eDe(),this.closed=eDe();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["fullscreen-modal-shell"],["","fs-modal-shell",""]],inputs:{loading:[1,"loading"],heading:[1,"heading"],confirm_text:[1,"confirm_text"],confirm_hotkey:[1,"confirm_hotkey"],confirm_disabled:[1,"confirm_disabled"],close:[1,"close"],hide_confirm:[1,"hide_confirm"],hide_close:[1,"hide_close"],full_width:[1,"full_width"]},outputs:{confirm:"confirm",closed:"closed"},ngContentSelectors:Cd,decls:10,vars:14,consts:[["cdkScrollable","",1,"bg-base-200","fixed","inset-0","flex","flex-col","items-center","overflow-auto","px-2"],[1,"border-base-300","bg-base-100","fixed","top-0","mx-auto","h-screen","max-w-full","border-x"],[1,"bg-base-200","sticky","top-0","z-10","mx-auto","my-2","flex","h-14","w-full","items-center","justify-between","rounded-sm","border-none","px-4","py-2"],[1,"flex","items-center","text-xl","font-medium","capitalize",3,"innerHTML"],[1,"z-0","mx-auto","h-1/2","w-full","flex-1","space-y-8","p-2"],[1,"flex","h-1/2","w-full","flex-1","flex-col","items-center","justify-center","space-y-4","p-12"],[1,"bg-base-200","fixed","bottom-0","left-1/2","z-10","mx-auto","my-2","flex","w-full","-translate-x-1/2","items-center","justify-end","rounded-sm","border-none","px-4","py-2",3,"max-w-156"],["icon","","matRipple","","mat-dialog-close",""],["icon","","matRipple","",3,"routerLink"],[1,"h-24","w-full"],[3,"diameter"],[1,"text-center","opacity-50"],[1,"bg-base-200","fixed","bottom-0","left-1/2","z-10","mx-auto","my-2","flex","w-full","-translate-x-1/2","items-center","justify-end","rounded-sm","border-none","px-4","py-2"],["btn","","matRipple","",1,"flex","min-w-32","items-center","justify-center","gap-2",3,"click","disabled"],[1,"border-base-300","bg-base-100","text-base-content","rounded","border","px-2","py-1","text-xs","leading-none","shadow-sm"]],template:function(t,r){t&1&&(Wt(),ke(0,"div",0),Lt(1,"div",1),ke(2,"header",2),Lt(3,"h2",3),Hp(4,"sanitize"),Le(5,Sd,2,1),Ue(),ke(6,"main",4),Le(7,Id,2,0)(8,Rd,4,2,"div",5),Ue(),Le(9,Dd,5,7,"footer",6),Ue()),t&2&&(ue(),Ne("w-160",!r.full_width())("w-full",r.full_width()),ue(),Ne("max-w-156",!r.full_width()),ue(),An$1("innerHTML",eC(4,12,r.heading()),mD),ue(2),Fe$1(r.hide_close()?-1:5),ue(),Ne("max-w-156",!r.full_width()),ue(),Fe$1(r.loading()?8:7),ue(2),Fe$1(!r.loading()&&!r.hide_confirm()?9:-1));},dependencies:[Yte,It,ai,xJe,MZe,NZe,Fl$1,C0,rQ,cv,vtt,RY],styles:["main[_ngcontent-%COMP%]{scroll-margin-top:60px}"]});}}return n})();var Nd=["input"],Ad=["formField"],Pd=["*"],Rr=class{source;value;constructor(i,e){this.source=i,this.value=e;}},Fd={provide:Ua,useExisting:nn(()=>Ui),multi:true},bl=new S("MatRadioGroup"),Vd=new S("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:false})}),Ui=(()=>{class n{_changeDetector=m(Tt);_value=null;_name=m(Bt$1).getId("mat-radio-group-");_selected=null;_isInitialized=false;_labelPosition="after";_disabled=false;_required=false;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new ne;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames();}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e==="before"?"before":"after",this._markRadiosForCheck();}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton());}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=true);}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton();}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck();}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck();}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck();}_disabledInteractive=false;ngAfterContentInit(){this._isInitialized=true,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null);});}ngOnDestroy(){this._buttonChanges?.unsubscribe();}_touch(){this.onTouched&&this.onTouched();}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck();});}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t);}));}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Rr(this._selected,this._value));}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck());}writeValue(e){this.value=e,this._changeDetector.markForCheck();}registerOnChange(e){this._controlValueAccessorChangeFn=e;}registerOnTouched(e){this.onTouched=e;}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=M({type:n,selectors:[["mat-radio-group"]],contentQueries:function(t,r,o){if(t&1&&Xr(o,yi,5),t&2){let c;Ie(c=Ae())&&(r._radios=c);}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",ye],required:[2,"required","required",ye],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ye]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[ot$1([Fd,{provide:bl,useExisting:n}])]})}return n})(),yi=(()=>{class n{_elementRef=m(G);_changeDetector=m(Tt);_focusMonitor=m(Yo);_radioDispatcher=m(ro);_defaultOptions=m(Vd,{optional:true});_ngZone=m(V);_renderer=m(We);_uniqueId=m(Bt$1).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=false;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck());}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)));}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e;}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e);}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e;}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e;}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e;}_disabledInteractive;change=new ne;radioGroup;get inputId(){return `${this.id||this._uniqueId}-input`}_checked=false;_disabled=false;_required=false;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=Zt();_injector=m(H$1);constructor(){m(En$1).load(Ll$1);let e=m(bl,{optional:true}),t=m(new JE("tabindex"),{optional:true});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??false,t&&(this.tabIndex=Jd$1(t,0));}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e);}_markForCheck(){this._changeDetector.markForCheck();}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=false);});}ngDoCheck(){this._updateTabIndex();}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,true).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch();}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick);});}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener();}_emitChangeEvent(){this.change.emit(new Rr(this,this._value));}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=true,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent());}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus();}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck());}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault();};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let r=this._inputElement?.nativeElement;r&&(r.setAttribute("tabindex",t+""),this._previousTabIndex=t,Ht(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===r&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===r&&this._inputElement.nativeElement.blur());});},{injector:this._injector}));}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ee({type:n,selectors:[["mat-radio-button"]],viewQuery:function(t,r){if(t&1&&Mn(Nd,5)(Ad,7,G),t&2){let o;Ie(o=Ae())&&(r._inputElement=o.first),Ie(o=Ae())&&(r._rippleTrigger=o.first);}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(t,r){t&1&&$e("focus",function(){return r._inputElement.nativeElement.focus()}),t&2&&(Ge("id",r.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),Ne("mat-primary",r.color==="primary")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("mat-mdc-radio-checked",r.checked)("mat-mdc-radio-disabled",r.disabled)("mat-mdc-radio-disabled-interactive",r.disabledInteractive)("_mat-animation-noopable",r._noopAnimations));},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",ye],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Jd$1(e)],checked:[2,"checked","checked",ye],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",ye],required:[2,"required","required",ye],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ye]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:Pd,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(t,r){t&1&&(Wt(),ke(0,"div",2,0)(2,"div",3)(3,"div",4),$e("click",function(c){return r._onTouchTargetClick(c)}),Ue(),ke(4,"input",5,1),$e("change",function(c){return r._onInputInteraction(c)}),Ue(),ke(6,"div",6),Lt(7,"div",7)(8,"div",8),Ue(),ke(9,"div",9),Lt(10,"div",10),Ue()(),ke(11,"label",11),Pe(12),Ue()()),t&2&&(An$1("labelPosition",r.labelPosition),ue(2),Ne("mdc-radio--disabled",r.disabled),ue(2),An$1("id",r.inputId)("checked",r.checked)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),Ge("name",r.name)("value",r.value)("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),ue(5),An$1("matRippleTrigger",r._rippleTrigger.nativeElement)("matRippleDisabled",r._isRippleDisabled())("matRippleCentered",true),ue(2),An$1("for",r.inputId));},dependencies:[C0,vJe],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})}return n})(),Or=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=se({type:n});static \u0275inj=re({imports:[Fl$1,yi,It$1]})}return n})();var yl=(()=>{class n{constructor(){this.url=m(Ice);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["image-viewer"]],decls:5,vars:1,consts:[[1,"bg-base-200","h-screen","w-screen"],["auth","",1,"h-full","w-full","object-contain","object-center",3,"source"],["icon","","matRipple","","mat-dialog-close","",1,"bg-base-100","absolute","top-1","right-1"]],template:function(t,r){t&1&&(ke(0,"div",0),Lt(1,"img",1),ke(2,"button",2)(3,"icon"),pr(4,"close"),Ue()()()),t&2&&(ue(),An$1("source",r.url));},dependencies:[xJe,Rt,MZe,NZe],encapsulation:2});}}return n})();var Ld=(n,i,e)=>({file:n,is_public:i,permissions:e});function Bd(n,i){if(n&1){let e=QD();ke(0,"div",7)(1,"label"),pr(2,"Permissions"),Ue(),ke(3,"mat-form-field",11)(4,"mat-select",12),$e("ngModelChange",function(r){$_(e);let o=vt();return j_(o.permissions.set(r))}),ke(5,"mat-option",13),pr(6,"None"),Ue(),ke(7,"mat-option",14),pr(8,"Support"),Ue(),ke(9,"mat-option",15),pr(10,"Admin"),Ue()(),z8(),Ue()();}if(n&2){let e=vt();ue(4),An$1("ngModel",e.permissions()),W8();}}var kl=(()=>{class n{constructor(){this._dialog_ref=m(ET),this._data=m(Ice),this.file=this._data.file,this.is_public=O(!!this._data.is_public),this.permissions=O("none"),this.file=this._data.file;}close(){this._dialog_ref.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["upload-permissions-modal"]],decls:18,vars:7,consts:[[1,"bg-base-200","sticky","top-0","z-10","m-2","w-[calc(100%-1rem)]","rounded-sm","border-none","p-2"],[1,"px-2","text-xl","font-medium"],["icon","","matRipple","","mat-dialog-close",""],[1,"min-w-[20rem]","space-y-2","px-4","py-2"],[1,"flex","flex-col"],["appearance","outline",1,"no-subscript"],["matInput","","disabled","true","placeholder","File Name",3,"ngModel"],[1,"flex","flex-col","space-y-2"],[1,"border-base-200","flex","items-center","justify-end","space-x-2","border-t","px-4","py-2"],["btn","","matRipple","","mat-dialog-close","",1,"inverse","w-32"],["btn","","matRipple","",1,"w-32",3,"mat-dialog-close"],["appearance","outline"],[3,"ngModelChange","ngModel"],["value","none"],["value","support"],["value","admin"]],template:function(t,r){t&1&&(ke(0,"header",0)(1,"h2",1),pr(2,"Upload File"),Ue(),ke(3,"button",2)(4,"icon"),pr(5,"close"),Ue()()(),ke(6,"main",3)(7,"div",4)(8,"label"),pr(9,"File Name"),Ue(),ke(10,"mat-form-field",5),Lt(11,"input",6),z8(),Ue()(),Le(12,Bd,11,1,"div",7),Ue(),ke(13,"footer",8)(14,"button",9),pr(15," Cancel "),Ue(),ke(16,"button",10),pr(17," Upload "),Ue()()),t&2&&(ue(11),An$1("ngModel",r.file.name),W8(),ue(),Fe$1(r.is_public()?-1:12),ue(4),An$1("mat-dialog-close",K4(3,Ld,r.file,r.is_public(),r.permissions())));},dependencies:[MZe,NZe,NM,SY,ANe,VB,yNe,PX,di,ci,iY,xJe,$et,Get,Fl$1,C0],encapsulation:2});}}return n})();var Ud=["image_list"],zd=["file_input"];function Gd(n,i){if(n&1){let e=QD();ke(0,"div",15),Lt(1,"img",16),ke(2,"div",17),Lt(3,"div",18),ke(4,"div",19)(5,"button",20),$e("click",function(){let r=$_(e).$implicit,o=vt();return j_(o.copyLink(r))}),ke(6,"icon"),pr(7,"link"),Ue()(),ke(8,"button",20),$e("click",function(){let r=$_(e).$implicit,o=vt();return j_(o.viewImage(r))}),ke(9,"icon"),pr(10,"visibility"),Ue()(),ke(11,"button",20),$e("click",function(){let r=$_(e).$implicit,o=vt();return j_(o.removeImage(r))}),ke(12,"icon"),pr(13,"close"),Ue()()()()();}if(n&2){let e=i.$implicit,t=vt();JD("transform","translate(-"+t.offset()+"00%)"),ue(),An$1("source",e);}}function Hd(n,i){if(n&1&&Lt(0,"mat-progress-spinner",22),n&2){let e=vt().$implicit;An$1("value",e.progress)("diameter",64);}}function Wd(n,i){n&1&&(ke(0,"icon",23),pr(1,"warning"),Ue());}function jd(n,i){n&1&&(ke(0,"div",24)(1,"icon",25),pr(2,"refresh"),Ue()());}function Kd(n,i){if(n&1){let e=QD();ke(0,"div",21),$e("click",function(){let r=$_(e).$implicit,o=vt();return j_(o.retryUpload(r))}),Le(1,Hd,1,2,"mat-progress-spinner",22),Le(2,Wd,2,0,"icon",23),Le(3,jd,3,0,"div",24),Ue();}if(n&2){let e=i.$implicit,t=vt();JD("transform","translate(-"+t.offset()+"00%)"),An$1("matTooltip",e.error),ue(),Fe$1(e.error?-1:1),ue(),Fe$1(e.error?2:-1),ue(),Fe$1(e.error?3:-1);}}function qd(n,i){if(n&1){let e=QD();ke(0,"button",26),$e("click",function(){$_(e);let r=vt();return j_(r.previousOffset())}),ke(1,"icon"),pr(2,"chevron_left"),Ue()();}if(n&2){let e=vt();An$1("disabled",e.offset()===0);}}function $d(n,i){if(n&1){let e=QD();ke(0,"button",27),$e("click",function(){$_(e);let r=vt();return j_(r.nextOffset())}),ke(1,"icon"),pr(2,"chevron_right"),Ue()();}if(n&2){let e=vt();An$1("disabled",e.offset()>=e.length()-e.view_space());}}function Xd(n,i){if(n&1){let e=QD();ke(0,"mat-chip-row",28),$e("removed",function(){let r=$_(e).$implicit,o=vt();return j_(o.removeImage(r))}),ke(1,"div",29),pr(2),Ue(),ke(3,"button",30)(4,"icon"),pr(5,"cancel"),Ue()()();}if(n&2){let e=i.$implicit;ue(2),Qd$1(e),ue(),Ge("aria-label","Remove "+e);}}var Cl=(()=>{class n extends io$1{constructor(){super(...arguments),this._clipboard=m(p2),this._uploads=m(qZe),this._dialog=m(yT),this._injector=m(H$1),this._upload_completion_effect=_t(()=>{let e=this.upload_list(),t=this.upload_ids();for(let r of t){let o=e.find(c=>c?.id===r);o&&o.progress>=100&&(this.addImageUrl(o.link),this.upload_ids.set(this.upload_ids().filter(c=>c!==r)));}},{injector:this._injector}),this.list=O([]),this.upload_map={},this.upload_ids=O([]),this.upload_list=O([]),this.offset=O(0),this.view_space=O(0),this.separators=[188,13],this.uploads=fe(()=>{let e=this.upload_ids();return this.upload_list().filter(t=>e.includes(t?.id))}),this.length=fe(()=>this.list().length+this.upload_list().length+1),this._list_el=Zc$1("image_list"),this._file_input=Zc$1("file_input"),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e;}ngAfterViewInit(){this.updateViewSpace();}updateViewSpace(){this.timeout("init_view_space",()=>{let e=this._list_el()?.nativeElement?.getBoundingClientRect();e&&this.view_space.set(Math.floor(e.width/152));},100);}copyLink(e){this._clipboard.copy(e),RH("Copied image URL to clipboard");}viewImage(e){this._dialog.open(yl,{data:e});}removeImage(e){this.setValue(this.list().filter(t=>t!==e));}addImage(e){e.value&&(this.setValue(Dr$1([...this.list(),e.value])),e.chipInput.inputElement.value="");}addImageUrl(e){this.setValue(Dr$1([...this.list(),e]));}retryUpload(e){e.error&&(e.error=null,e.upload.resume());}previousOffset(){this.offset.update(e=>e-1);}nextOffset(){this.offset.update(e=>e+1);}async uploadImages(e){let t=e.target;if(t?.files){let r=t.files;if(r.length){this.interval("update_status",()=>this._updateUploadHistory());for(let o=0;o<r.length;o++)try{let c=await this._uploads.uploadFileWithPermissions(r[o]);this.upload_ids.set([...this.upload_ids(),c]);}catch(c){if(c instanceof NT)continue;DH(`Failed to upload ${r[o].name}: ${c?.message||"Unknown error"}`);}this._file_input().nativeElement.value="";}}}setValue(e){let t=e||[];this.list.set(t),this._onChange&&this._onChange(t);}writeValue(e){this.list.set(e||[]);}async _updateUploadHistory(){let e=this.upload_ids();if(e.length===0)return;let r=this._uploads.upload_list().filter(c=>e.find(h=>h===c?.id)),o=r.filter(c=>c.progress>=100);this.upload_list.set(r),o.forEach(c=>{console.log("ID:",l({},c)),this.upload_map[c?.id]=c.upload?.id||c?.id,delete c.upload;}),o.length>=e.length&&this.clearInterval("update_status");}static{this.\u0275fac=(()=>{let e;return function(r){return (e||(e=yt(n)))(r||n)}})();}static{this.\u0275cmp=Ee({type:n,selectors:[["image-list-field"]],viewQuery:function(t,r){t&1&&Kd$1(r._list_el,Ud,5)(r._file_input,zd,5),t&2&&Zd$1(2);},features:[ot$1([{provide:Ua,useExisting:nn(()=>n),multi:true},{provide:_le,useValue:kl}]),Re],decls:23,vars:13,consts:[["image_list",""],["file_input",""],["chipList",""],["images","",1,"relative","mb-2","flex","w-full","items-center","space-x-2","overflow-hidden","py-2",3,"resize"],["image","",1,"border-base-200","hover:border-base-300","hover:bg-base-200","relative","flex","h-32","w-36","shrink-0","cursor-pointer","flex-col","items-center","justify-center","rounded-xl","border-2","border-dashed"],[1,"text-4xl","opacity-60"],[1,"px-4","text-center","opacity-60"],["type","file",1,"absolute","inset-0","h-32","w-32","cursor-pointer","opacity-0",3,"change"],["image","",1,"bg-base-200","relative","h-32","w-36","shrink-0","overflow-hidden","rounded-sm","bg-cover","bg-center",3,"transform"],["upload","",1,"border-base-content/10","/5","bg-base-200","flex","h-32","w-36","shrink-0","items-center","justify-center","rounded-sm","border","bg-cover","bg-center",3,"transform","matTooltip"],["icon","","matRipple","",1,"bg-base-100","absolute","top-1/2","left-0","-translate-y-1/2","transform",3,"disabled"],["icon","","matRipple","",1,"bg-base-100","absolute","top-1/2","right-0","-translate-y-1/2","transform",3,"disabled"],["appearance","outline",1,"w-full"],["aria-label","Image List"],[3,"matChipInputTokenEnd","placeholder","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur"],["image","",1,"bg-base-200","relative","h-32","w-36","shrink-0","overflow-hidden","rounded-sm","bg-cover","bg-center"],["auth","",1,"pointer-events-none","absolute","top-1/2","left-1/2","z-10","-translate-x-1/2","-translate-y-1/2","object-contain",3,"source"],["overlay","",1,"text-base-100","absolute","inset-0","z-20"],["bg","",1,"absolute","inset-0","bg-black","opacity-0"],["actions","",1,"absolute","top-0","right-0","left-0","flex","items-center","justify-center","space-x-2","opacity-0"],["icon","",3,"click"],["upload","",1,"border-base-content/10","/5","bg-base-200","flex","h-32","w-36","shrink-0","items-center","justify-center","rounded-sm","border","bg-cover","bg-center",3,"click","matTooltip"],["mode","determinate",3,"value","diameter"],[1,"text-error","text-6xl"],["overlay","",1,"text-base-100","hover:bg-base-content","hover:bg-opacity-50","absolute","inset-0","flex","items-center","justify-center"],[1,"text-3xl","opacity-0"],["icon","","matRipple","",1,"bg-base-100","absolute","top-1/2","left-0","-translate-y-1/2","transform",3,"click","disabled"],["icon","","matRipple","",1,"bg-base-100","absolute","top-1/2","right-0","-translate-y-1/2","transform",3,"click","disabled"],[3,"removed"],[1,"max-w-md","truncate"],["matChipRemove",""]],template:function(t,r){if(t&1&&(ke(0,"div",3,0),$e("resize",function(){return r.updateViewSpace()},v5),ke(2,"div",4)(3,"icon",5),pr(4,"add"),Ue(),ke(5,"p",6),pr(6),Hp(7,"translate"),Ue(),ke(8,"input",7,1),$e("change",function(c){return r.uploadImages(c)}),Ue()(),QK(10,Gd,14,3,"div",8,ZK),QK(12,Kd,4,6,"div",9,ZK),Le(14,qd,3,1,"button",10),Le(15,$d,3,1,"button",11),Ue(),ke(16,"mat-form-field",12)(17,"mat-chip-grid",13,2),QK(19,Xd,6,2,"mat-chip-row",null,ZK),Ue(),ke(21,"input",14),Hp(22,"translate"),$e("matChipInputTokenEnd",function(c){return r.addImage(c)}),Ue()()),t&2){let o=WE(18);ue(2),JD("transform","translate(-"+r.offset()+"00%)"),ue(4),xo$1(" ",eC(7,9,"COMMON.IMAGE_UPLOADS")," "),ue(4),XK(r.list()),ue(2),XK(r.uploads()),ue(2),Fe$1(r.length()>r.view_space()?14:-1),ue(),Fe$1(r.length()>r.view_space()?15:-1),ue(4),XK(r.list()),ue(2),An$1("placeholder",eC(22,11,"COMMON.IMAGE_ADD_URL"))("matChipInputFor",o)("matChipInputSeparatorKeyCodes",r.separators)("matChipInputAddOnBlur",true);}},dependencies:[NM,SY,dnt,cnt,lnt,ant,Qde,It,ai,mtt,Ide,xJe,Rt,vtt],styles:["[_nghost-%COMP%]{width:100%}[overlay][_ngcontent-%COMP%]{transition:background .2s}[image][_ngcontent-%COMP%]:hover   [actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%]:hover > icon[_ngcontent-%COMP%]{opacity:1!important}[image][_ngcontent-%COMP%]:hover   [bg][_ngcontent-%COMP%]{opacity:.4!important}[actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%] > icon[_ngcontent-%COMP%]{transition:opacity .2s}[image][_ngcontent-%COMP%]{transition:transform .2s}"]});}}return n})();function Yd(n,i){if(n&1&&(Lt(0,"div",1),Hp(1,"safe")),n&2){let e=vt();An$1("innerHTML",tC(1,1,e.changelog(),"html"),mD);}}function Qd(n,i){n&1&&(ke(0,"div",2)(1,"icon",3),pr(2,"close"),Ue(),ke(3,"div",4),pr(4,"No changelog"),Ue()());}var Ml=(()=>{class n{constructor(){this._data=m(Ice),this.loading=O(false),this.changelog=fe(()=>lt(this._data.changelog||"",{async:false}));}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["changelog-modal"]],decls:3,vars:3,consts:[[3,"heading","hide_confirm"],[1,"markdown",3,"innerHTML"],[1,"flex","flex-col","items-center","justify-center","space-y-2"],[1,"text-3xl"],[1,"text"]],template:function(t,r){t&1&&(ke(0,"fullscreen-modal-shell",0),Le(1,Yd,2,4,"div",1)(2,Qd,5,0,"div",2),Ue()),t&2&&(An$1("heading","Changelog")("hide_confirm",true),ue(),Fe$1(r.changelog()?1:2));},dependencies:[Ir,xJe,oY],encapsulation:2});}}return n})();function Zd(n,i){if(n&1&&(ke(0,"div",1),pr(1),Ue()),n&2){let e=vt(2);ue(),xo$1(" ",e.initials," ");}}function Jd(n,i){if(n&1&&Lt(0,"img",2),n&2){let e=vt(2);An$1("alt",e.initials)("source",e.user().photo);}}function em(n,i){if(n&1&&(ke(0,"div",0),Le(1,Zd,2,1,"div",1)(2,Jd,1,2,"img",2),Ue()),n&2){let e=vt();Ge("user-id",e.user().id),ue(),Fe$1(e.user().photo?2:1);}}var Dr=(()=>{class n{constructor(){this.user=mn(void 0),this.is_valid=fe(()=>{let e=this.user();if(!e)return  false;let t=(e.name||"").trim(),r=(e.email||"").trim();return t.startsWith("<empty>")||r.startsWith("<empty>")?false:!!(t||r||e.first_name||e.last_name)});}get initials(){let e=this.user();if(!e)return "NA";if(e.first_name&&e.last_name)return `${e.first_name[0]}${e.last_name[0]}`;let t=(e.name||"").replace(/<[^>]*>/g," ").trim();t||(t=(e.email||e.name||"").split("@")[0]);let r=t.replace(/[()[\]\-+=\\/@<>]+/gi," ").split(/\s+/).filter(Boolean);return r.length===0?"NA":r.length>1?`${r[0][0]}${r[r.length-1][0]}`:r[0].slice(0,2)}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["a-user-avatar"]],inputs:{user:[1,"user"]},decls:1,vars:1,consts:[[1,"border-base-100","bg-base-200","flex","h-[2.5em]","w-[2.5em]","items-center","justify-center","overflow-hidden","rounded-full","border-2"],["initials","",1,"text-base-content","uppercase","opacity-60"],["auth","",1,"flex","h-full","w-full","items-center","justify-center","object-cover","object-center",3,"alt","source"]],template:function(t,r){t&1&&Le(0,em,3,2,"div",0),t&2&&Fe$1(r.is_valid()?0:-1);},dependencies:[Rt],encapsulation:2});}}return n})();function tm(n,i){if(n&1&&(ke(0,"mat-option",8),pr(1),Ue()),n&2){let e=i.$implicit;An$1("value",e.display_name||e.name),ue(),xo$1(" ",e.display_name||e.name," ");}}function im(n,i){if(n&1&&(ke(0,"mat-option",8),pr(1),Ue()),n&2){let e=i.$implicit;An$1("value",e?.name||e),ue(),xo$1(" ",e.name||e," ");}}function nm(n,i){if(n&1&&(ke(0,"div",5)(1,"label"),pr(2),Hp(3,"translate"),Ue(),ke(4,"mat-form-field",6)(5,"mat-select",7),Hp(6,"translate"),QK(7,im,2,2,"mat-option",8,ZK),Ue(),z8(),Ue()()),n&2){let e=vt();ue(2),Qd$1(eC(3,3,"COMMON.SUPPORT_TYPE")),ue(3),An$1("placeholder",eC(6,5,"COMMON.SUPPORT_TYPE"))("formField",e.form.issue_type),W8(),ue(2),XK(e.support_request_types());}}function rm(n,i){n&1&&(ke(0,"mat-error",11),pr(1),Hp(2,"translate"),Ue()),n&2&&(ue(),xo$1(" ",eC(2,1,"COMMON.DESCRIPTION_REQUIRED")," "));}function om(n,i){if(n&1&&(ke(0,"div",12)(1,"label",10),pr(2),Hp(3,"translate"),Ue(),Lt(4,"image-list-field",14),z8(),Ue()),n&2){let e=vt();ue(2),Qd$1(eC(3,2,"COMMON.IMAGES")),ue(2),An$1("formField",e.form.images),W8();}}var Tl=(()=>{class n{constructor(){this._dialog_ref=m(ET),this._org=m(lT),this._settings=m(Ks$1),this._support_email=this._settings.signal("support_email","support@place.tech"),this._support_issue_types=this._settings.signal("support_issue_types",[]),this._allow_images=this._settings.signal("allow_support_ticket_images",false),this.loading=O(false),this.model=O({name:"",email:"",location:"",description:"",issue_type:"",images:[]}),this.form=Oo(this.model,e=>{Er(e.name),Er(e.email),Er(e.description);}),this.desc_error=O(false),this.support_email=this._support_email,this.support_request_types=this._support_issue_types,this.allow_images=this._allow_images,this.buildings=this._org.building_list;}ngOnInit(){let e=Rr$1();e&&this.model.update(t=>m$1(l({},t),{name:e.name,email:e.email})),this._org.building&&this.model.update(t=>m$1(l({},t),{location:this._org.building.display_name||this._org.building.name}));}async submit(){if(this.loading.set(true),this.form().markAsTouched(),this._updateDescError(),this.form().valid()){let e=this._org.module("smtp","Mailer");if(!e)return DH(gi$1("COMMON.SUPPORT_NO_MAILER"));let{name:t,email:r,location:o,description:c,images:h,issue_type:x}=this.model(),R=this.support_request_types().find(ae=>ae.name===x)?.email||this.support_email(),F=gi$1("COMMON.SUPPORT_MAIL_HEADER",{issue_type:x?" - "+x:""});await e.execute("send_mail",[R,F,`${t}
${r}

${o}

${c.replace(/<[^>]+>/g,"")}

${h.join(`
`)}`,`<p>${t}</p><p>${r}</p><p>${o}</p><p>${c}</p>${h.join("<br>")}`,[],[],[],[],null,`${r}`]),this._dialog_ref.close(),this.loading.set(false),cb(gi$1("COMMON.SUPPORT_SUCCESS"));}}_updateDescError(){this.desc_error.set(this.form.description().invalid()&&this.form.description().touched());}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["support-ticket-modal"]],decls:51,vars:45,consts:[[3,"confirm","heading","loading","confirm_text"],[1,"flex","flex-wrap","items-center","sm:space-x-2"],[1,"flex","flex-1","flex-col"],["appearance","outline"],["matInput","",3,"placeholder","formField"],[1,"flex","flex-col"],["appearance","outline",1,"w-full"],[3,"placeholder","formField"],[3,"value"],[1,""],[1,"mb-4"],[1,"my-2","text-xs"],[1,"pt-4"],[1,"mb-2","text-center","text-xs","italic"],[3,"formField"]],template:function(t,r){t&1&&(ke(0,"fullscreen-modal-shell",0),Hp(1,"translate"),$e("confirm",function(){return r.submit()}),ke(2,"form")(3,"div",1)(4,"div",2)(5,"label"),pr(6),Hp(7,"translate"),ke(8,"span"),pr(9,"*"),Ue()(),ke(10,"mat-form-field",3),Lt(11,"input",4),Hp(12,"translate"),z8(),ke(13,"mat-error"),pr(14),Hp(15,"translate"),Ue()()(),ke(16,"div",2)(17,"label"),pr(18),Hp(19,"translate"),ke(20,"span"),pr(21,"*"),Ue()(),ke(22,"mat-form-field",3),Lt(23,"input",4),Hp(24,"translate"),z8(),ke(25,"mat-error"),pr(26),Hp(27,"translate"),Ue()()()(),ke(28,"div",5)(29,"label"),pr(30),Hp(31,"translate"),Ue(),ke(32,"mat-form-field",6)(33,"mat-select",7),Hp(34,"translate"),QK(35,tm,2,2,"mat-option",8,ZK),Ue(),z8(),Ue()(),Le(37,nm,9,7,"div",5),ke(38,"div",9)(39,"label",10),pr(40),Hp(41,"translate"),ke(42,"span"),pr(43,"*"),Ue()(),Lt(44,"rich-text-input",7),Hp(45,"translate"),z8(),Le(46,rm,3,3,"mat-error",11),Ue(),Le(47,om,5,4,"div",12),Ue(),ke(48,"div",13),pr(49),Hp(50,"translate"),Ue()()),t&2&&(An$1("heading","Raise a support ticket")("loading",r.loading()?"true":"")("confirm_text",eC(1,21,"COMMON.SUBMIT")),ue(6),Qd$1(eC(7,23,"FORM.NAME")),ue(5),An$1("placeholder",eC(12,25,"FORM.NAME"))("formField",r.form.name),W8(),ue(3),Qd$1(eC(15,27,"FORM.NAME_REQUIRED")),ue(4),Qd$1(eC(19,29,"FORM.EMAIL")),ue(5),An$1("placeholder",eC(24,31,"FORM.EMAIL"))("formField",r.form.email),W8(),ue(3),Qd$1(eC(27,33,"FORM.EMAIL_REQUIRED")),ue(4),Qd$1(eC(31,35,"COMMON.LOCATION")),ue(3),An$1("placeholder",eC(34,37,"COMMON.LOCATION"))("formField",r.form.location),W8(),ue(2),XK(r.buildings()),ue(2),Fe$1(r.support_request_types().length?37:-1),ue(3),xo$1(" ",eC(41,39,"COMMON.SUPPORT_DESCRIPTION")," "),ue(4),An$1("placeholder",eC(45,41,"COMMON.SUPPORT_DESCRIPTION"))("formField",r.form.description),W8(),ue(2),Fe$1(r.desc_error()?46:-1),ue(),Fe$1(r.allow_images()?47:-1),ue(2),xo$1(" ",eC(50,43,"COMMON.SUPPORT_MSG")," "));},dependencies:[yy,NM,SY,rde,$et,Get,fl,It,Fl$1,wl,Cl,di,ci,iY,MZe,Ir,vtt],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]});}}return n})();var am=["*"],sm=(n,i)=>i.id;function lm(n,i){if(n&1&&(ke(0,"div",4),pr(1),Hp(2,"date"),Ue()),n&2){let e=vt();ue(),xo$1(" ",o6(2,1,e.active_time(),e.time_format()+" (z)",e.tz())," ");}}function cm(n,i){if(n&1&&(ke(0,"div",13),pr(1),Hp(2,"date"),Ue()),n&2){let e=vt(2);ue(),xo$1(" ",o6(2,1,e.force_time(),e.time_format()+" (z)",e.tz())," ");}}function dm(n,i){n&1&&(ke(0,"icon",14),pr(1," done "),Ue());}function mm(n,i){if(n&1){let e=QD();ke(0,"button",9),$e("click",function(){$_(e);let r=vt();return j_(r.setValue(r.force_time().toString()))}),ke(1,"div",10)(2,"div",11)(3,"div",12),pr(4),Hp(5,"date"),Ue(),Le(6,cm,3,5,"div",13),Ue(),Le(7,dm,2,0,"icon",14),Ue()();}if(n&2){let e=vt();An$1("value",e.force_time()),ue(4),xo$1(" ",tC(5,4,e.force_time(),e.time_format())," "),ue(2),Fe$1(e.timezone()&&e.tz()?6:-1),ue(),Fe$1(e.active_time()===e.force_time()?7:-1);}}function um(n,i){if(n&1&&(ke(0,"div",13),pr(1),Hp(2,"date"),Ue()),n&2){let e=vt().$implicit,t=vt();ue(),xo$1(" ",o6(2,1,e.date,t.time_format()+" (z)",t.tz())," ");}}function pm(n,i){n&1&&(ke(0,"icon",14),pr(1," done "),Ue());}function hm(n,i){if(n&1){let e=QD();ke(0,"button",9),$e("click",function(){let r=$_(e).$implicit,o=vt();return j_(o.setValue(r.id))}),ke(1,"div",10)(2,"div",11)(3,"div",12),pr(4),Hp(5,"date"),Ue(),Le(6,um,3,5,"div",13),Ue(),Le(7,pm,2,0,"icon",14),Ue()();}if(n&2){let e=i.$implicit,t=vt();An$1("value",e.id),Ge("data-time",e.id),ue(4),g1(" ",tC(5,6,e.date,t.time_format())," ",t.extra_info_fn()(e.date)," "),ue(2),Fe$1(t.timezone()&&t.tz()?6:-1),ue(),Fe$1(t.active_time()===e.date?7:-1);}}function _m(n,i){n&1&&(ke(0,"div",8),pr(1,"No time options to select"),Ue());}function fm(n,i){n&1&&(ke(0,"mat-error"),Pe(1),Ue());}function El(n){if(n==null||n==="")return null;let i=Number(n);return Number.isFinite(i)?i:null}var Sl=(()=>{class n extends io$1{constructor(){super(...arguments),this.step=mn(15),this.disabled=tDe(void 0),this.no_past_times=mn(true),this.use_24hr=mn(false),this.force_time=mn(void 0),this.no_error=mn(void 0),this.extra_info_fn=mn(e=>""),this.from=mn(Dn$1(Date.now()).valueOf()),this.range=mn(void 0),this._range=fe(()=>{let e=this.range();if(!e)return;let t=El(e.start),r=El(e.end);if(!(t===null||r===null||r<=t))return {start:t,end:r}}),this.min_duration=mn(0),this.timezone=mn(""),this.date=O(new Date().valueOf()),this.time=O(vr$1(new Date,"HH:mm")),this._time_options=O([]),this.show_select=O(false),this.active_time=O(Date.now()),this.no_options=O(false),this._menu_trigger=Zc$1(ut),this.time_format=fe(()=>this.use_24hr()?"HH : mm":"h : mm a"),this._local_tz=Ake(Intl.DateTimeFormat().resolvedOptions().timeZone),this.tz=fe(()=>{let e=this.timezone();if(!e)return "";let t=Ake(e);return t===this._local_tz?"":t});}ngOnInit(){this.show_select.set(true),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions(),this.timeout("hide",()=>this.show_select.set(false));let e=this.timezone()||void 0;this.active_time.set(this._time_options().find(t=>t.id===Cke(this.date(),e))?.date||this.active_time());}ngOnChanges(e){(e.no_past_times||e.step||e.from||e.range||e.min_duration)&&(this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions());}ngAfterViewInit(){let e=this._menu_trigger();e&&this.subscription("menu_opened",e.menuOpened.subscribe(()=>{this._scrollToSelectedTime();}));}_scrollToSelectedTime(){requestAnimationFrame(()=>{if(!this._menu_trigger()?.menu)return;let t=document.querySelector(".mat-mdc-menu-panel");if(!t)return;let r=this.timezone()||void 0,o=this.time()||Cke(new Date,r),c=t.querySelector(`[data-time="${o}"]`);if(!c&&this._time_options().length){let h=this._timeToMinutes(o),x=this._time_options()[0],R=1/0;for(let F of this._time_options()){let ae=this._timeToMinutes(F.id),ue=Math.abs(ae-h);ue<R&&(R=ue,x=F);}c=t.querySelector(`[data-time="${x.id}"]`);}if(c){if(typeof c.scrollIntoView!="function")return;c.scrollIntoView({block:"center",behavior:"instant"});}});}_timeToMinutes(e){let[t,r]=e.split(":").map(Number);return t*60+r}time_options(){let e=this.timezone()||void 0,t=(this.time()||"00:00").split(":"),r=Rke(this.date(),+t[0],+t[1],e),{minutes:o}=Pee(r,e),c=Cke(r,e),h=[...this._time_options()];return o%this.step()!==0&&this._isWithinRange(r)&&!h.find(x=>x.id===c)&&(h.push({date:r,id:c}),h.sort((x,R)=>`${x.id}`.localeCompare(`${R.id}`))),h}setValue(e){this.time.set(e);let t=this.timezone()||void 0;if(this._onChange){let h=(this.time()||"00:00").split(":"),x=Rke(this.date(),+h[0],+h[1],t);Uke(),this._onChange(x);}let r=this.force_time()||this.time(),o=(typeof r=="string"?r:Cke(r,t)).split(":"),c=Rke(this.date(),+o[0],+o[1],t);this.active_time.set(this._time_options().find(h=>h.id===(typeof r=="string"?r:Cke(r,t)))?.date||c);}writeValue(e){this.date.set(e||this.date());let t=this.timezone()||void 0,r=dl$1(this.date());r=ul$1(r,{nearestTo:5}),this.time.set(Cke(r,t)),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions();let o=this.force_time(),c=o?Cke(o,t):this.time();this.active_time.set(this._time_options().find(h=>h.id===c)?.date||r.valueOf());}setDisabledState(e){this.disabled.set(e),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times()||e,this.step())),this._updateNoOptions();}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouch=e;}_updateNoOptions(){this.no_options.set(!this.disabled()&&(!this._time_options()||this._time_options().length===0)&&!this.force_time());}generateAvailableTimes(e,t,r=15){let o=t?this.from():Math.max(this.from(),Date.now()),c=[],h=this._range(),x=this.timezone()||void 0,R=x?jo(e,x):Dn$1(e).valueOf(),F=x?zo(e,x):yr$1(e).valueOf(),ae=this.min_duration()||0,ue=h?h.start*60:void 0,pt=h?h.end*60:void 0,st=pt!=null&&ae>0?pt-ae:pt,ki=Math.max(R,o,ue!=null?R+ue*60*1e3:R),G=Math.min(F,st!=null?R+st*60*1e3:F);if(ki>G)return c;let te=this._roundUpToStep(ki,r),Le=this._roundDownToStep(G,r);for(;!Ha(te,Le);)c.push({date:te.valueOf(),id:Cke(te,x)}),te=gt(te,r);return c}_isWithinRange(e){if(Zi(e,this.from()))return  false;let t=this._range();if(!t)return  true;let r=t.start*60,o=t.end*60,c=this.min_duration()||0,h=c>0?o-c:o,x=this.timezone()||void 0,{hours:R,minutes:F}=Pee(e,x),ae=R*60+F;return !(ae<r||ae>h)}_roundUpToStep(e,t){let r=ul$1(e,{nearestTo:t});return Zi(r,e)&&(r=gt(r,t)),dl$1(r)}_roundDownToStep(e,t){let r=ul$1(e,{nearestTo:t});return Ha(r,e)&&(r=gt(r,-t)),dl$1(r)}static{this.\u0275fac=(()=>{let e;return function(r){return (e||(e=yt(n)))(r||n)}})();}static{this.\u0275cmp=Ee({type:n,selectors:[["a-time-field"],["time-field"]],viewQuery:function(t,r){t&1&&Kd$1(r._menu_trigger,ut,5),t&2&&Zd$1();},inputs:{step:[1,"step"],disabled:[1,"disabled"],no_past_times:[1,"no_past_times"],use_24hr:[1,"use_24hr"],force_time:[1,"force_time"],no_error:[1,"no_error"],extra_info_fn:[1,"extra_info_fn"],from:[1,"from"],range:[1,"range"],min_duration:[1,"min_duration"],timezone:[1,"timezone"]},outputs:{disabled:"disabledChange"},features:[ot$1([{provide:Ua,useExisting:nn(()=>n),multi:true}]),Re,Et],ngContentSelectors:am,decls:15,vars:12,consts:[["menu","matMenu"],["type","button","time-field","","matRipple","",1,"border-neutral","flex","h-12","w-full","items-center","justify-between","rounded-sm","border","px-2",3,"disabled","matMenuTriggerFor"],[1,"flex","w-1/2","flex-1","flex-col","px-2","text-left","leading-tight"],[1,"truncate"],[1,"truncate","text-xs","opacity-30"],[1,"text-2xl"],[1,"max-h-60","min-w-[18rem]"],["type","button","mat-menu-item","",1,"text-left",3,"value"],["mat-menu-item","","disabled",""],["type","button","mat-menu-item","",1,"text-left",3,"click","value"],[1,"flex","items-center","justify-between"],[1,"flex","flex-col","leading-tight"],[1,""],[1,"text-xs","opacity-30"],[1,"ml-2","text-2xl"]],template:function(t,r){if(t&1&&(Wt(),ke(0,"button",1)(1,"div",2)(2,"div",3),pr(3),Hp(4,"date"),Ue(),Le(5,lm,3,5,"div",4),Ue(),ke(6,"icon",5),pr(7,"arrow_drop_down"),Ue()(),ke(8,"mat-menu",6,0),Le(10,mm,8,7,"button",7),QK(11,hm,8,9,"button",7,sm,false,_m,2,0,"div",8),Ue(),Le(14,fm,2,0,"mat-error")),t&2){let o=WE(9);Ne("opacity-30",r.disabled()||r.no_options()),An$1("disabled",r.disabled()||r.no_options())("matMenuTriggerFor",o),ue(3),xo$1(" ",tC(4,9,r.active_time(),r.time_format())," "),ue(2),Fe$1(r.timezone()&&r.tz()?5:-1),ue(5),Fe$1(r.force_time()?10:-1),ue(),XK(r.time_options()),ue(3),Fe$1(r.no_error()?-1:14);}},dependencies:[yy,li,rt,mt,ut,NM,rde,xJe,R9],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]});}}return n})();function gm(n,i){n&1&&(ke(0,"button",2)(1,"icon"),pr(2,"close"),Ue()());}function bm(n,i){if(n&1){let e=QD();ke(0,"div",7)(1,"div",11),pr(2),Hp(3,"date"),Ue(),ke(4,"mat-checkbox",12),$e("ngModelChange",function(r){let o=$_(e).$implicit,c=vt(2);return c.setWeekdayEnabled(o.getDay(),r),j_(r&&c.initialiseDay(o.getDay()))}),Ue(),z8(),Ue();}if(n&2){let e=i.$implicit,t=vt(2);ue(2),xo$1(" ",tC(3,2,e,"EEE")," "),ue(2),An$1("ngModel",t.weekdays_enabled()[e.getDay()]),W8();}}function vm(n,i){if(n&1&&(ke(0,"mat-option",20),pr(1),Ue()),n&2){let e=i.$implicit;An$1("value",e.id),ue(),xo$1(" ",e.name," ");}}function ym(n,i){if(n&1){let e=QD();ke(0,"button",23),$e("click",function(){$_(e);let r=vt().$index,o=vt(2).$implicit,c=vt(3);return j_(c.addBlock(c.settings()[o.getDay()],r))}),ke(1,"icon"),pr(2,"add"),Ue()();}}function xm(n,i){if(n&1){let e=QD();ke(0,"button",24),$e("click",function(){$_(e);let r=vt().$index,o=vt(2).$implicit,c=vt(3);return j_(c.removeBlock(c.settings()[o.getDay()],r))}),ke(1,"icon"),pr(2,"delete"),Ue()();}}function km(n,i){if(n&1){let e=QD();ke(0,"div",16)(1,"a-time-field",18),$e("ngModelChange",function(r){let o=$_(e).$implicit,c=vt(2).$implicit,h=vt(3);return j_(h.setStartTime(o,c.getDay(),r))}),Ue(),z8(),ke(2,"a-time-field",18),$e("ngModelChange",function(r){let o=$_(e).$implicit,c=vt(2).$implicit,h=vt(3);return j_(h.setEndTime(o,c.getDay(),r))}),Ue(),z8(),ke(3,"mat-form-field",19)(4,"mat-select",12),v1("ngModelChange",function(r){let o=$_(e).$implicit;return U4(o.location,r)||(o.location=r),j_(r)}),QK(5,vm,2,2,"mat-option",20,ZK),Ue(),z8(),Ue(),Le(7,ym,3,0,"button",21),Le(8,xm,3,0,"button",22),Ue();}if(n&2){let e=i.$implicit,t=i.$index,r=vt(2).$implicit,o=vt(3);ue(),An$1("ngModel",o.timeFrom(e.start_time))("from",o.timeFrom((t>0?o.settings()[r.getDay()].blocks[t-1]?.end_time:0)||0))("no_error",true),W8(),ue(),An$1("ngModel",o.timeFrom(e.end_time))("from",o.timeFrom(e.start_time+.25))("no_error",true),W8(),ue(2),y1("ngModel",e.location),W8(),ue(),XK(o.options()),ue(2),Fe$1(t===0?7:-1),ue(),Fe$1(t!==0?8:-1);}}function Cm(n,i){if(n&1&&(ke(0,"div",14)(1,"div",15),QK(2,km,9,9,"div",16,ZK),Ue(),ke(4,"h3",17),pr(5),Hp(6,"date"),Ue()()),n&2){let e=vt().$implicit,t=vt(3);ue(2),XK(t.settings()[e.getDay()].blocks),ue(3),xo$1(" ",tC(6,1,e,"EEEE")," ");}}function Mm(n,i){if(n&1&&Le(0,Cm,7,4,"div",14),n&2){let e=i.$implicit,t=vt(3);Fe$1(t.weekdays_enabled()[e.getDay()]?0:-1);}}function wm(n,i){if(n&1&&(ke(0,"div",9),QK(1,Mm,1,1,null,null,ZK),ke(3,"h3",13),pr(4),Hp(5,"translate"),Ue()()),n&2){let e=vt(2);ue(),XK(e.days),ue(3),xo$1(" ",eC(5,1,"COMMON.WORK_HOURS")," ");}}function Tm(n,i){n&1&&(ke(0,"div",10),Lt(1,"img",25),ke(2,"p",26),pr(3),Hp(4,"translate"),Ue()()),n&2&&(ue(3),xo$1(" ",eC(4,1,"COMMON.WORK_SETTINGS_EMPTY")," "));}function Em(n,i){if(n&1&&(ke(0,"main",3)(1,"div",6),QK(2,bm,5,5,"div",7,ZK),ke(4,"h3",8),pr(5),Hp(6,"translate"),Ue()(),Le(7,wm,6,3,"div",9)(8,Tm,5,3,"div",10),Ue()),n&2){let e=vt();ue(2),XK(e.days),ue(3),xo$1(" ",eC(6,2,"COMMON.WORK_DAYS")," "),ue(2),Fe$1(e.has_working_days()?7:8);}}function Sm(n,i){n&1&&(ke(0,"div",4),Lt(1,"mat-spinner",27),ke(2,"p",26),pr(3),Hp(4,"translate"),Ue()()),n&2&&(ue(),An$1("diameter",32),ue(2),xo$1(" ",eC(4,2,"COMMON.WORK_SETTINGS_SAVE")," "));}function Im(n,i){if(n&1){let e=QD();ke(0,"footer",5)(1,"button",28),$e("click",function(){$_(e);let r=vt();return j_(r.saveChanges())}),pr(2),Hp(3,"translate"),Ue()();}n&2&&(ue(2),xo$1(" ",eC(3,1,"COMMON.SAVE")," "));}var Nr=(()=>{class n{constructor(){this._data=m(Ice),this._dialog_ref=m(ET),this.options=O([]),this.option=O(""),this.settings=O([]),this.weekdays_enabled=O({}),this.changed=O(false),this.loading=O(false),this.available_weekdays=O([]),this.days=new Array(7).fill(0).map((e,t)=>kn(Us$1(kn(Date.now(),30)),t)),this.has_working_days=fe(()=>{let e=this.weekdays_enabled();return Object.keys(e).some(t=>e[t])}),this.option_name=fe(()=>this.options().find(e=>e.id===this.option())?.name||""),this.now=fe(()=>dl$1(Date.now()).getTime());}ngOnInit(){let e=Rr$1(),r=[...((this._data?.local?this._data.preferences:e.work_preferences)||[]).map(h=>m$1(l({},h),{blocks:[...h?.blocks||[]]}))],o={};for(let h of r)h.blocks.length&&(o[h.day_of_week]=true);this.settings.set(r),this.weekdays_enabled.set(o);let c=[{id:"wfo",name:gi$1("COMMON.WORK_OFFICE"),icon:"business"},{id:"wfh",name:gi$1("COMMON.WORK_HOME"),icon:"home"},{id:"aol",name:gi$1("COMMON.WORK_LEAVE"),icon:"event_busy"}];this.options.set(c),this.option.set(c[0].id);}timeFrom(e){return dl$1(Sr$1(kn(new Date,1),{hours:Math.floor(e),minutes:e*60%60})).getTime()}fromTime(e){let t=new Date(e);return t.getHours()+t.getMinutes()/60}initialiseDay(e){let t=this.settings();t[e]||(t[e]={day_of_week:e,blocks:[]}),t[e].blocks||(t[e].blocks=[]),t[e].blocks.length===0&&this.addBlock(t[e],0),this.settings.set([...t]);}addBlock(e,t){e.blocks.splice(t+1,0,{start_time:9,end_time:17,location:"wfo"}),this.cleanupBlocks(e),this.settings.update(r=>[...r]);}removeBlock(e,t){e.blocks.length<=1||(e.blocks.splice(t,1),this.settings.update(r=>[...r]));}setEndTime(e,t,r){setTimeout(()=>{e.end_time=this.fromTime(r),this.cleanupBlocks(this.settings()[t]),this.settings.update(o=>[...o]);},50);}setStartTime(e,t,r){setTimeout(()=>{e.start_time=this.fromTime(r),this.cleanupBlocks(this.settings()[t]),this.settings.update(o=>[...o]);},50);}cleanupBlocks(e){if(e?.blocks?.length)for(let t=0;t<e.blocks.length;t++){let r=e.blocks[t];t>0&&r.start_time<e.blocks[t-1].end_time&&(r.start_time=e.blocks[t-1].end_time),r.end_time<=r.start_time&&(r.end_time=r.start_time+1);}}async saveChanges(e=true){this.loading.set(true),this._dialog_ref.disableClose=true;let t=new Array(7).fill(0).map((r,o)=>({day_of_week:o,blocks:[]}));for(let r of this.days){let o=r.getDay();this.weekdays_enabled()[o]&&(t[o]={day_of_week:o,blocks:this.settings()[o].blocks});}if(!this._data?.local){let r=await Cw("current");await hH(r.id,m$1(l({},r),{groups:r.groups.filter(o=>!o.startsWith("placeos_")),work_preferences:t})).catch(o=>{throw this.loading.set(false),this._dialog_ref.disableClose=false,DH("Unable to save user work preferences."),o});}this.loading.set(false),this._dialog_ref.disableClose=false,e&&(this._data?.local||QH(),this._dialog_ref.close(t));}setWeekdayEnabled(e,t){this.weekdays_enabled.update(r=>m$1(l({},r),{[e]:t}));}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["wfh-settings-modal"]],decls:8,vars:6,consts:[[1,"bg-base-200","sticky","top-0","z-10","m-2","w-[calc(100%-1rem)]","rounded-sm","border-none","p-2"],[1,"px-2","text-xl","font-medium"],["icon","","matRipple","","mat-dialog-close","",1,"bg-base-200"],[1,"relative","flex","max-h-[calc(100vh-9rem)]","w-160","max-w-full","flex-col","space-y-2","overflow-x-hidden","overflow-y-auto","rounded-sm","px-2","py-4","sm:max-h-[65vh]","sm:p-4"],["loading","",1,"bg-base-100","relative","flex","h-72","w-[24rem]","flex-col","items-center","justify-center","space-y-2","overflow-hidden","rounded-sm","text-center"],[1,"border-base-200","flex","justify-end","border-t","px-4","py-2"],[1,"border-base-300","relative","mb-4","flex","w-full","items-center","justify-between","space-x-2","rounded-sm","border","p-2"],[1,"flex","flex-1","flex-col","items-center","pt-2"],[1,"bg-base-100","absolute","top-0","left-2","-translate-y-1/2","px-2"],[1,"border-base-300","relative","flex","w-full","flex-col","items-center","justify-between","space-y-4","rounded-sm","border","px-2","pt-6","pb-4","sm:px-4"],[1,"flex","flex-col","items-center","justify-center","space-y-4","px-8","py-16"],[1,"text-xs","font-bold","uppercase"],[3,"ngModelChange","ngModel"],[1,"bg-base-100","absolute","top-0","left-2","m-0!","-translate-y-1/2","px-2"],[1,"border-base-200","relative","flex","w-full","items-center","justify-between","space-x-2","rounded-sm","border","p-2"],[1,"w-1/2","flex-1","space-y-2","pt-2"],[1,"flex","items-center","space-x-2"],[1,"border-base-200","bg-base-100","bg-opacity-50","absolute","top-0","left-2","-translate-y-1/2","rounded-sm","border","px-2","text-sm","font-medium"],[1,"w-1/4","flex-1",3,"ngModelChange","ngModel","from","no_error"],["appearance","outline",1,"no-subscript","w-1/4","flex-1"],[3,"value"],["icon","","matRipple","",1,"border-base-400","h-12","w-12","rounded-sm","border"],["icon","","matRipple","",1,"border-error","text-error","h-12","w-12","rounded-sm","border"],["icon","","matRipple","",1,"border-base-400","h-12","w-12","rounded-sm","border",3,"click"],["icon","","matRipple","",1,"border-error","text-error","h-12","w-12","rounded-sm","border",3,"click"],["src","assets/icons/no-results.svg",1,"m-auto"],[1,"opacity-30"],[3,"diameter"],["btn","","matRipple","",1,"w-48",3,"click"]],template:function(t,r){t&1&&(ke(0,"header",0)(1,"h2",1),pr(2),Hp(3,"translate"),Ue(),Le(4,gm,3,0,"button",2),Ue(),Le(5,Em,9,4,"main",3)(6,Sm,5,4,"div",4),Le(7,Im,4,3,"footer",5)),t&2&&(ue(2),xo$1(" ",eC(3,4,"COMMON.WORK_LOCATION_SETTINGS")," "),ue(2),Fe$1(r.loading()?-1:4),ue(),Fe$1(r.loading()?6:5),ue(2),Fe$1(r.loading()?-1:7));},dependencies:[yy,MZe,NZe,Fl$1,C0,NM,SY,di,ci,iY,Sl,hr,Pi,ANe,yNe,PX,xJe,It,ai,R9,vtt],encapsulation:2});}}return n})();var Rm=["knob"],Om=["valueIndicatorContainer"];function Dm(n,i){if(n&1&&(ke(0,"div",2,1)(2,"div",5)(3,"span",6),pr(4),Ue()()()),n&2){let e=vt();ue(4),Qd$1(e.valueIndicatorText);}}var Nm=["trackActive"],Am=["*"];function Pm(n,i){if(n&1&&Lt(0,"div"),n&2){let e=i.$implicit,t=i.$index,r=vt(3);Os$1(e===0?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"),JD("transform",r._calcTickMarkTransform(t));}}function Fm(n,i){if(n&1&&QK(0,Pm,1,4,"div",8,KK),n&2){let e=vt(2);XK(e._tickMarks);}}function Vm(n,i){if(n&1&&(ke(0,"div",6,1),Le(2,Fm,2,0),Ue()),n&2){let e=vt();ue(2),Fe$1(e._cachedWidth?2:-1);}}function Lm(n,i){if(n&1&&Lt(0,"mat-slider-visual-thumb",7),n&2){let e=vt();An$1("discrete",e.discrete)("thumbPosition",1)("valueIndicatorText",e.startValueIndicatorText);}}var A=(function(n){return n[n.START=1]="START",n[n.END=2]="END",n})(A||{}),xi=(function(n){return n[n.ACTIVE=0]="ACTIVE",n[n.INACTIVE=1]="INACTIVE",n})(xi||{}),Go=new S("_MatSlider"),Il=new S("_MatSliderThumb"),Bm=new S("_MatSliderRangeThumb"),Rl=new S("_MatSliderVisualThumb");var Um=(()=>{class n{_cdr=m(Tt);_ngZone=m(V);_slider=m(Go);_renderer=m(We);_listenerCleanups;discrete=false;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=false;_isActive=false;_isValueIndicatorVisible=false;_hostElement=m(G).nativeElement;_platform=m(je);ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let t=this._sliderInputEl,r=this._renderer;this._listenerCleanups=[r.listen(t,"pointermove",this._onPointerMove),r.listen(t,"pointerdown",this._onDragStart),r.listen(t,"pointerup",this._onDragEnd),r.listen(t,"pointerleave",this._onMouseLeave),r.listen(t,"focus",this._onFocus),r.listen(t,"blur",this._onBlur)];}));}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e());}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let t=this._hostElement.getBoundingClientRect(),r=this._slider._isCursorOnSliderThumb(e,t);this._isHovered=r,r?this._showHoverRipple():this._hideRipple(this._hoverRippleRef);};_onMouseLeave=()=>{this._isHovered=false,this._hideRipple(this._hoverRippleRef);};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add("mdc-slider__thumb--focused");};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove("mdc-slider__thumb--focused");};_onDragStart=e=>{e.button===0&&(this._isActive=true,this._showActiveRipple());};_onDragEnd=()=>{this._isActive=false,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple();};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple"));}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},true),this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple"));}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple"));}_isShowingRipple(e){return e?.state===Qi.FADING_IN||e?.state===Qi.VISIBLE}_showRipple(e,t){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===A.START?A.END:A.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!t)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:true,persistent:true})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let t=this._getSibling();t._isShowingAnyRipple()||(this._hideValueIndicator(),t._hideValueIndicator());}_showValueIndicator(){this._hostElement.classList.add("mdc-slider__thumb--with-indicator");}_hideValueIndicator(){this._hostElement.classList.remove("mdc-slider__thumb--with-indicator");}_getSibling(){return this._slider._getThumb(this.thumbPosition===A.START?A.END:A.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ee({type:n,selectors:[["mat-slider-visual-thumb"]],viewQuery:function(t,r){if(t&1&&Mn(C0,5)(Rm,5)(Om,5),t&2){let o;Ie(o=Ae())&&(r._ripple=o.first),Ie(o=Ae())&&(r._knob=o.first),Ie(o=Ae())&&(r._valueIndicatorContainer=o.first);}},hostAttrs:[1,"mdc-slider__thumb","mat-mdc-slider-visual-thumb"],inputs:{discrete:"discrete",thumbPosition:"thumbPosition",valueIndicatorText:"valueIndicatorText"},features:[ot$1([{provide:Rl,useExisting:n}])],decls:4,vars:2,consts:[["knob",""],["valueIndicatorContainer",""],[1,"mdc-slider__value-indicator-container"],[1,"mdc-slider__thumb-knob"],["matRipple","",1,"mat-focus-indicator",3,"matRippleDisabled"],[1,"mdc-slider__value-indicator"],[1,"mdc-slider__value-indicator-text"]],template:function(t,r){t&1&&(Le(0,Dm,5,1,"div",2),Lt(1,"div",3,0)(3,"div",4)),t&2&&(Fe$1(r.discrete?0:-1),ue(3),An$1("matRippleDisabled",true));},dependencies:[C0],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
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
`],encapsulation:2})}return n})(),Ar=(()=>{class n{_ngZone=m(V);_cdr=m(Tt);_elementRef=m(G);_dir=m(yi$1,{optional:true});_globalRippleOptions=m(ef,{optional:true});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let t=this._getInput(A.END),r=this._getInput(A.START);t&&(t.disabled=this._disabled),r&&(r.disabled=this._disabled);}_disabled=false;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs();}_discrete=false;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI());}_showTickMarks=false;get min(){return this._min}set min(e){let t=e==null||isNaN(e)?this._min:e;this._min!==t&&this._updateMin(t);}_min=0;color;disableRipple=false;_updateMin(e){let t=this._min;this._min=e,this._isRange?this._updateMinRange({old:t,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange();}_updateMinRange(e){let t=this._getInput(A.END),r=this._getInput(A.START),o=t.value,c=r.value;r.min=e.new,t.min=Math.max(e.new,r.value),r.max=Math.min(t.max,t.value),r._updateWidthInactive(),t._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(t,r):this._onTranslateXChangeBySideEffect(r,t),o!==t.value&&this._onValueChange(t),c!==r.value&&this._onValueChange(r);}_updateMinNonRange(e){let t=this._getInput(A.END);if(t){let r=t.value;t.min=e,t._updateThumbUIByValue(),this._updateTrackUI(t),r!==t.value&&this._onValueChange(t);}}get max(){return this._max}set max(e){let t=e==null||isNaN(e)?this._max:e;this._max!==t&&this._updateMax(t);}_max=100;_updateMax(e){let t=this._max;this._max=e,this._isRange?this._updateMaxRange({old:t,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange();}_updateMaxRange(e){let t=this._getInput(A.END),r=this._getInput(A.START),o=t.value,c=r.value;t.max=e.new,r.max=Math.min(e.new,t.value),t.min=r.value,t._updateWidthInactive(),r._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(r,t):this._onTranslateXChangeBySideEffect(t,r),o!==t.value&&this._onValueChange(t),c!==r.value&&this._onValueChange(r);}_updateMaxNonRange(e){let t=this._getInput(A.END);if(t){let r=t.value;t.max=e,t._updateThumbUIByValue(),this._updateTrackUI(t),r!==t.value&&this._onValueChange(t);}}get step(){return this._step}set step(e){let t=isNaN(e)?this._step:e;this._step!==t&&this._updateStep(t);}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange();}_updateStepRange(){let e=this._getInput(A.END),t=this._getInput(A.START),r=e.value,o=t.value,c=t.value;e.min=this._min,t.max=this._max,e.step=this._step,t.step=this._step,this._platform.SAFARI&&(e.value=e.value,t.value=t.value),e.min=Math.max(this._min,t.value),t.max=Math.min(this._max,e.value),t._updateWidthInactive(),e._updateWidthInactive(),e.value<c?this._onTranslateXChangeBySideEffect(t,e):this._onTranslateXChangeBySideEffect(e,t),r!==e.value&&this._onValueChange(e),o!==t.value&&this._onValueChange(t);}_updateStepNonRange(){let e=this._getInput(A.END);if(e){let t=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),t!==e.value&&this._onValueChange(e);}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=Zt();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText="";endValueIndicatorText="";_endThumbTransform;_startThumbTransform;_isRange=false;_isRtl=fe(()=>this._dir?.valueSignal()==="rtl");_hasViewInitialized=false;_tickMarkTrackWidth=0;_hasAnimation=false;_resizeTimer=null;_platform=m(je);constructor(){m(En$1).load(Ll$1);let e=this._isRtl();K1(()=>{let t=this._isRtl();t!==e&&(e=t,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI());});}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(A.END),t=this._getInput(A.START);this._isRange=!!e&&!!t,this._cdr.detectChanges();let r=this._getThumb(A.END);this._rippleRadius=r._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,t):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges();}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=true,e._updateThumbUIByValue();}_initUIRange(e,t){e.initProps(),e.initUI(),t.initProps(),t.initUI(),e._updateMinMax(),t._updateMinMax(),e._updateStaticStyles(),t._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=true,e._updateThumbUIByValue(),t._updateThumbUIByValue();}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null;}_onDirChangeRange(){let e=this._getInput(A.END),t=this._getInput(A.START);e._setIsLeftThumb(),t._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),t.translateX=t._calcTranslateXByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateWidthInactive(),t._updateWidthInactive(),e._updateThumbUIByValue(),t._updateThumbUIByValue();}_onDirChangeNonRange(){this._getInput(A.END)._updateThumbUIByValue();}_observeHostResize(){typeof ResizeObserver>"u"||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize());}),this._resizeObserver.observe(this._elementRef.nativeElement);});}_isActive(){return this._getThumb(A.START)._isActive||this._getThumb(A.END)._isActive}_getValue(e=A.END){let t=this._getInput(e);return t?t.value:this.min}_skipUpdate(){return !!(this._getInput(A.START)?._skipUIUpdate||this._getInput(A.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left;}_setTrackActiveStyles(e){let t=this._trackActive.nativeElement.style;t.left=e.left,t.right=e.right,t.transformOrigin=e.transformOrigin,t.transform=e.transform;}_calcTickMarkTransform(e){let t=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return `translateX(${this._isRtl()?this._cachedWidth-6-t:t}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e));}_onTranslateXChangeBySideEffect(e,t){this._hasViewInitialized&&(e._updateThumbUIByValue(),t._updateThumbUIByValue());}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges());}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck());}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(A.END),t=this._getInput(A.START);e._updateThumbUIByValue(),t._updateThumbUIByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateMinMax(),t._updateMinMax(),e._updateWidthInactive(),t._updateWidthInactive();}else {let e=this._getInput(A.END);e&&e._updateThumbUIByValue();}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges();}}_thumbsOverlap=false;_areThumbsOverlapping(){let e=this._getInput(A.START),t=this._getInput(A.END);return !e||!t?false:t.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let t=e.getSibling(),r=this._getThumb(e.thumbPosition);this._getThumb(t.thumbPosition)._hostElement.classList.remove("mdc-slider__thumb--top"),r._hostElement.classList.toggle("mdc-slider__thumb--top",this._thumbsOverlap);}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e));}_updateThumbUI(e){if(this._skipUpdate())return;let t=this._getThumb(e.thumbPosition===A.END?A.END:A.START);t._hostElement.style.transform=`translateX(${e.translateX}px)`;}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let t=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(t):e._hostElement.setAttribute("aria-valuetext",t),this.discrete){e.thumbPosition===A.START?this.startValueIndicatorText=t:this.endValueIndicatorText=t;let r=this._getThumb(e.thumbPosition);t.length<3?r._hostElement.classList.add("mdc-slider__thumb--short-value"):r._hostElement.classList.remove("mdc-slider__thumb--short-value");}}_updateValueIndicatorUIs(){let e=this._getInput(A.END),t=this._getInput(A.START);e&&this._updateValueIndicatorUI(e),t&&this._updateValueIndicatorUI(t);}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,r=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*r;}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e));}_updateTrackUIRange(e){let t=e.getSibling();if(!t||!this._cachedWidth)return;let r=Math.abs(t.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:"auto",right:`${this._cachedWidth-t.translateX}px`,transformOrigin:"right",transform:`scaleX(${r})`}):this._setTrackActiveStyles({left:`${t.translateX}px`,right:"auto",transformOrigin:"left",transform:`scaleX(${r})`});}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:"auto",right:"0px",transformOrigin:"right",transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:"0px",right:"auto",transformOrigin:"left",transform:`scaleX(${e.fillPercentage})`});}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e);}_updateTickMarkUINonRange(e){let t=this._getValue(),r=Math.max(Math.round((t-this.min)/e),0)+1,o=Math.max(Math.round((this.max-t)/e),0)-1;this._isRtl()?r++:o++,this._tickMarks=Array(r).fill(xi.ACTIVE).concat(Array(o).fill(xi.INACTIVE));}_updateTickMarkUIRange(e){let t=this._getValue(),r=this._getValue(A.START),o=Math.max(Math.round((r-this.min)/e),0),c=Math.max(Math.round((t-r)/e)+1,0),h=Math.max(Math.round((this.max-t)/e),0);this._tickMarks=Array(o).fill(xi.INACTIVE).concat(Array(c).fill(xi.ACTIVE),Array(h).fill(xi.INACTIVE));}_getInput(e){if(e===A.END&&this._input)return this._input;if(this._inputs?.length)return e===A.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===A.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation",this._hasAnimation);}_isCursorOnSliderThumb(e,t){let r=t.width/2,o=t.x+r,c=t.y+r,h=e.clientX-o,x=e.clientY-c;return Math.pow(h,2)+Math.pow(x,2)<Math.pow(r,2)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Ee({type:n,selectors:[["mat-slider"]],contentQueries:function(t,r,o){if(t&1&&Xr(o,Il,5)(o,Bm,4),t&2){let c;Ie(c=Ae())&&(r._input=c.first),Ie(c=Ae())&&(r._inputs=c);}},viewQuery:function(t,r){if(t&1&&Mn(Nm,5)(Rl,5),t&2){let o;Ie(o=Ae())&&(r._trackActive=o.first),Ie(o=Ae())&&(r._thumbs=o);}},hostAttrs:[1,"mat-mdc-slider","mdc-slider"],hostVars:12,hostBindings:function(t,r){t&2&&(Os$1("mat-"+(r.color||"primary")),Ne("mdc-slider--range",r._isRange)("mdc-slider--disabled",r.disabled)("mdc-slider--discrete",r.discrete)("mdc-slider--tick-marks",r.showTickMarks)("_mat-animation-noopable",r._noopAnimations));},inputs:{disabled:[2,"disabled","disabled",ye],discrete:[2,"discrete","discrete",ye],showTickMarks:[2,"showTickMarks","showTickMarks",ye],min:[2,"min","min",Jd$1],color:"color",disableRipple:[2,"disableRipple","disableRipple",ye],max:[2,"max","max",Jd$1],step:[2,"step","step",Jd$1],displayWith:"displayWith"},exportAs:["matSlider"],features:[ot$1([{provide:Go,useExisting:n}])],ngContentSelectors:Am,decls:9,vars:5,consts:[["trackActive",""],["tickMarkContainer",""],[1,"mdc-slider__track"],[1,"mdc-slider__track--inactive"],[1,"mdc-slider__track--active"],[1,"mdc-slider__track--active_fill"],[1,"mdc-slider__tick-marks"],[3,"discrete","thumbPosition","valueIndicatorText"],[3,"class","transform"]],template:function(t,r){t&1&&(Wt(),Pe(0),ke(1,"div",2),Lt(2,"div",3),ke(3,"div",4),Lt(4,"div",5,0),Ue(),Le(6,Vm,3,1,"div",6),Ue(),Le(7,Lm,1,3,"mat-slider-visual-thumb",7),Lt(8,"mat-slider-visual-thumb",7)),t&2&&(ue(6),Fe$1(r.showTickMarks?6:-1),ue(),Fe$1(r._isRange?7:-1),ue(),An$1("discrete",r.discrete)("thumbPosition",2)("valueIndicatorText",r.endValueIndicatorText));},dependencies:[Um],styles:[`.mdc-slider__track {
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
`],encapsulation:2})}return n})();var zm={provide:Ua,useExisting:nn(()=>Gi),multi:true};var Gi=(()=>{class n{_ngZone=m(V);_elementRef=m(G);_cdr=m(Tt);_slider=m(Go);_platform=m(je);_listenerCleanups;get value(){return Jd$1(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let t=e+"";if(!this._hasSetInitialValue){this._initialValue=t;return}this._isActive||this._setValue(t);}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck();}valueChange=new ne;dragStart=new ne;dragEnd=new ne;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e;}_translateX;thumbPosition=A.END;get min(){return Jd$1(this._hostElement.min,0)}set min(e){this._hostElement.min=e+"",this._cdr.detectChanges();}get max(){return Jd$1(this._hostElement.max,0)}set max(e){this._hostElement.max=e+"",this._cdr.detectChanges();}get step(){return Jd$1(this._hostElement.step,0)}set step(e){this._hostElement.step=e+"",this._cdr.detectChanges();}get disabled(){return ye(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled);}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=O("");_knobRadius=8;_tickMarkOffset=3;_isActive=false;_isFocused=false;_setIsFocused(e){this._isFocused=e;}_hasSetInitialValue=false;_initialValue;_formControl;_destroyed=new w;_skipUIUpdate=false;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=false;constructor(){let e=m(We);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,"pointerdown",this._onPointerDown.bind(this)),e.listen(this._hostElement,"pointermove",this._onPointerMove.bind(this)),e.listen(this._hostElement,"pointerup",this._onPointerUp.bind(this))];});}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete();}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=true),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue();}initUI(){this._updateThumbUIByValue();}_initValue(){this._hasSetInitialValue=true,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges());}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(false),this._onTouchedFn();}_onFocus(){this._slider._setTransition(false),this._slider._updateTrackUI(this),this._setIsFocused(true);}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:true});}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:true}),this._slider._onValueChange(this);}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled;}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let t=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=t,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=true,this._setIsFocused(true),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:true}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}));}}_handleValueCorrection(e){this._skipUIUpdate=true,setTimeout(()=>{this._skipUIUpdate=false,this._fixValue(e);},0);}_fixValue(e){let t=e.clientX-this._slider._cachedLeft,r=this._slider._cachedWidth,o=this._slider.step===0?1:this._slider.step,c=Math.floor((this._slider.max-this._slider.min)/o),h=this._slider._isRtl()?1-t/r:t/r,R=Math.round(h*c)/c*(this._slider.max-this._slider.min)+this._slider.min,F=Math.round(R/o)*o,ae=this.value;if(F===ae){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=F,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e);}_onPointerUp(){this._isActive&&(this._isActive=false,this._platform.SAFARI&&this._setIsFocused(false),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0));}_clamp(e){let t=this._tickMarkOffset,r=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,r),t)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`;}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e);}_updateThumbUIByPointerEvent(e,t){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(t);}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this);}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e);}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=true;}registerOnTouched(e){this._onTouchedFn=e;}setDisabledState(e){this.disabled=e;}focus(){this._hostElement.focus();}blur(){this._hostElement.blur();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=M({type:n,selectors:[["input","matSliderThumb",""]],hostAttrs:["type","range",1,"mdc-slider__input"],hostVars:1,hostBindings:function(t,r){t&1&&$e("change",function(){return r._onChange()})("input",function(){return r._onInput()})("blur",function(){return r._onBlur()})("focus",function(){return r._onFocus()}),t&2&&Ge("aria-valuetext",r._valuetext());},inputs:{value:[2,"value","value",Jd$1]},outputs:{valueChange:"valueChange",dragStart:"dragStart",dragEnd:"dragEnd"},exportAs:["matSliderThumb"],features:[ot$1([zm,{provide:Il,useExisting:n}])]})}return n})();var Pr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=se({type:n});static \u0275inj=re({imports:[Fl$1,It$1]})}return n})();function Gm(n,i){if(n&1){let e=QD();ke(0,"settings-toggle",6),$e("ngModelChange",function(r){$_(e);let o=vt();return j_(o.setDarkMode(r))}),ke(1,"div",7)(2,"icon",8),pr(3,"mode_night"),Ue(),ke(4,"div"),pr(5),Hp(6,"translate"),Ue()()(),z8();}if(n&2){let e=vt();An$1("ngModel",e.dark_mode())("toggle",true),W8(),ue(5),Qd$1(eC(6,3,"COMMON.DARK_MODE"));}}function Hm(n,i){if(n&1){let e=QD();ke(0,"settings-toggle",6),$e("ngModelChange",function(r){$_(e);let o=vt();return j_(o.setLocatable(r))}),ke(1,"div",7)(2,"icon",8),pr(3,"emergency_share"),Ue(),ke(4,"div"),pr(5),Hp(6,"translate"),Ue()()(),z8();}if(n&2){let e=vt();An$1("ngModel",e.locatable())("toggle",true),W8(),ue(5),Qd$1(eC(6,3,"COMMON.LOCATABLE"));}}function Wm(n,i){if(n&1){let e=QD();ke(0,"div",9),pr(1),Hp(2,"translate"),Ue(),ke(3,"div",10)(4,"span",11),pr(5,"A"),Ue(),ke(6,"mat-slider",12)(7,"input",13),$e("ngModelChange",function(r){$_(e);let o=vt();return j_(o.applySetting("font_size",r))}),Ue(),z8(),Ue(),ke(8,"span",2),pr(9,"A"),Ue(),ke(10,"span",14),pr(11),Ue()();}if(n&2){let e=vt();ue(),xo$1(" ",eC(2,6,"COMMON.TEXT_SIZE_MSG")," "),ue(5),An$1("min",10)("max",24)("step",2),ue(),An$1("ngModel",e.font_size()),W8(),ue(4),xo$1(" ",e.font_size(),"px ");}}var Dl=(()=>{class n extends io$1{constructor(){super(...arguments),this._data=m(xde),this._settings=m(Ks$1),this.accessible=O(false),this.locatable=O(false),this.can_locate=nte("allow_locatability_option",true),this._allow_dark_mode=this._settings.signal("allow_dark_mode",false),this._font_size=this._settings.signal("font_size",16,true),this._accessible=this._settings.signal("accessible",false,true),this._theme=this._settings.theme_signal,this.dark_mode=fe(()=>this._theme()==="dark"),this.can_change_dark_mode=fe(()=>!!this._allow_dark_mode()),this.font_size=this._font_size,this.applySetting=(e,t)=>this.timeout("apply_setting",()=>{this._settings.saveUserSetting(e,t),e==="accessible"&&this.accessible.set(t);},500),this.close=()=>this._data?.close(),this.setLocatable=e=>{this._settings.updateLocatable(e),this.locatable.set(e);};}async ngOnInit(){this.accessible.set(!!this._accessible()),this.subscription("user",KPe.subscribe(e=>{this.locatable.set(e.locatable);}));}setDarkMode(e){let t=this._theme();e&&t!=="dark"?this._settings.setTheme("dark"):!e&&t==="dark"&&this._settings.setTheme("light");}static{this.\u0275fac=(()=>{let e;return function(r){return (e||(e=yt(n)))(r||n)}})();}static{this.\u0275cmp=Ee({type:n,selectors:[["accessibility-tooltip"]],features:[Re],decls:18,vars:11,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","max-h-[65vh]","w-[20rem]","flex-col","overflow-auto","rounded-sm","pb-3","shadow-sm"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-3",3,"click"],[1,"text-2xl"],[1,""],[1,"space-y-2","p-2"],[3,"ngModel","toggle"],[3,"ngModelChange","ngModel","toggle"],[1,"flex","items-center","space-x-2"],[1,"-ml-2","text-xl"],[1,"bg-base-200","px-8","py-4","text-center"],[1,"flex","items-center","space-x-4","px-4"],[1,"text-sm"],[1,"w-1/2","flex-1","text-[16px]",3,"min","max","step"],["matSliderThumb","",1,"text-[16px]",3,"ngModelChange","ngModel"],[1,"bg-base-300","my-2","rounded-sm","px-2","py-1","text-base","text-white"]],template:function(t,r){t&1&&(ke(0,"div",0)(1,"div",1),$e("click",function(){return r.close()}),ke(2,"icon",2),pr(3,"arrow_back"),Ue(),ke(4,"div",3),pr(5),Hp(6,"translate"),Ue()(),ke(7,"div",4),Le(8,Gm,7,5,"settings-toggle",5),Le(9,Hm,7,5,"settings-toggle",5),ke(10,"settings-toggle",6),$e("ngModelChange",function(c){return r.applySetting("accessible",c)}),ke(11,"div",7)(12,"icon",8),pr(13,"playlist_add"),Ue(),ke(14,"div"),pr(15),Hp(16,"translate"),Ue()()(),z8(),Ue(),Le(17,Wm,12,8),Ue()),t&2&&(ue(5),xo$1(" ",eC(6,7,"COMMON.CONTROLS_ACCESSIBILITY")," "),ue(3),Fe$1(r.can_change_dark_mode()?8:-1),ue(),Fe$1(r.can_locate()?9:-1),ue(),An$1("ngModel",r.accessible())("toggle",true),W8(),ue(5),Qd$1(eC(16,9,"COMMON.TEXT_SIZE")),ue(2),Fe$1(r.accessible()?17:-1));},dependencies:[Fl$1,C0,Pr,Ar,Gi,Ls,xJe,ANe,VB,yNe,PX,vtt],encapsulation:2});}}return n})();function jm(n,i){if(n&1){let e=QD();ke(0,"mat-radio-button",8),$e("click",function(){let r=$_(e).$implicit,o=vt();return j_(o.setBuilding(r))}),pr(1),Ue();}if(n&2){let e=i.$implicit;An$1("value",e.id),ue(),xo$1(" ",e.display_name||e.name," ");}}var Nl=(()=>{class n{constructor(){this._data=m(xde),this._org=m(lT),this.buildings=this._org.active_buildings,this.building=this._org.active_building,this.setBuilding=e=>{this._org.setBuilding(e,true),this._data?.close();},this.close=()=>this._data?.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["building-select"]],decls:16,vars:8,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","max-h-[65vh]","w-74","flex-col","overflow-auto","rounded-sm","pb-3","shadow-sm",3,"click"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-3"],[1,"text-2xl"],[1,"leading-tight"],[1,"text-xs","opacity-30"],[1,"px-4","py-2","text-xs","opacity-60"],[1,"flex","flex-col","space-y-2","px-2",3,"ngModel"],[3,"value"],[3,"click","value"]],template:function(t,r){t&1&&(ke(0,"div",0),$e("click",function(){return r.close()}),ke(1,"div",1)(2,"icon",2),pr(3,"arrow_back"),Ue(),ke(4,"div",3)(5,"div"),pr(6),Ue(),ke(7,"div",4),pr(8),Hp(9,"translate"),Ue()()(),ke(10,"div",5),pr(11),Hp(12,"translate"),Ue(),ke(13,"mat-radio-group",6),QK(14,jm,2,2,"mat-radio-button",7,ZK),Ue(),z8(),Ue()),t&2&&(ue(6),xo$1(" ",r.building()?.display_name||r.building()?.name," "),ue(2),xo$1(" ",eC(9,4,"RESOURCE.BUILDING")," "),ue(3),xo$1(" ",eC(12,6,"COMMON.BUILDING_SELECT")," "),ue(2),An$1("ngModel",r.building()?.id),W8(),ue(),XK(r.buildings()));},dependencies:[Or,Ui,yi,xJe,Fl$1,C0,ANe,yNe,PX,vtt],encapsulation:2});}}return n})();function Km(n,i){n&1&&(ke(0,"div",3),pr(1),Hp(2,"translate"),Ue()),n&2&&(ue(),xo$1(" ",eC(2,1,"COMMON.DESK_HEIGHT_NOT_SET")," "));}function qm(n,i){if(n&1){let e=QD();ke(0,"button",13),$e("click",function(){$_(e);let r=vt();return j_(r.onClose())}),pr(1),Hp(2,"translate"),Ue();}n&2&&(ue(),xo$1(" ",eC(2,1,"COMMON.SAVE")," "));}var Al=(()=>{class n{constructor(){this._settings=m(Ks$1),this.show_close=tDe(false),this.close=eDe(),this.not_set=O(false),this.desk_sitting_height=O(71),this.desk_standing_height=O(101);}ngOnInit(){this.not_set.set(!this._settings.get("desk_sitting_height")&&!this._settings.get("desk_standing_height")),this.desk_sitting_height.set(this._settings.get("desk_sitting_height")||71),this.desk_standing_height.set(this._settings.get("desk_standing_height")||101);}onClose(){this.saveSetting("desk_sitting_height",this.desk_sitting_height()),this.saveSetting("desk_standing_height",this.desk_standing_height()),this.close.emit();}formatLabel(e){return `${e.toFixed(1)}cm`}saveSetting(e,t){this._settings.saveUserSetting(e,t);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["desk-height-presets"]],inputs:{show_close:[1,"show_close"]},outputs:{show_close:"show_closeChange",close:"close"},decls:29,vars:23,consts:[[1,"bg-base-100","relative","w-[20rem]","rounded-sm","p-4","shadow-sm"],[1,"mb-2","text-lg"],[1,"mb-4","text-xs","opacity-60"],[1,"bg-warning","text-warning-content","-mx-2","mb-4","rounded-sm","p-2","text-xs"],[1,"mt-2","flex","flex-col"],[1,"flex","items-center","space-x-2"],["min","60","max","80","step","0.5","discrete","",1,"flex-1",3,"displayWith"],["matSliderThumb","",3,"ngModelChange","ngModel"],[1,"w-12","text-right","text-sm"],[1,"mr-2","flex","items-center","space-x-2"],["min","90","max","120","step","0.5","discrete","",1,"flex-1",3,"displayWith"],[1,"mr-2","w-12","text-right","text-sm"],["btn","","matRipple","",1,"mt-2","w-full"],["btn","","matRipple","",1,"mt-2","w-full",3,"click"]],template:function(t,r){t&1&&(ke(0,"div",0)(1,"div",1),pr(2),Hp(3,"translate"),Ue(),ke(4,"div",2),pr(5),Hp(6,"translate"),Ue(),Le(7,Km,3,3,"div",3),ke(8,"div",2),pr(9),Hp(10,"translate"),Ue(),ke(11,"div",4)(12,"label"),pr(13),Hp(14,"translate"),Ue(),ke(15,"div",5)(16,"mat-slider",6)(17,"input",7),$e("ngModelChange",function(c){return r.desk_sitting_height.set(c),r.saveSetting("desk_sitting_height",c)}),Ue(),z8(),Ue(),ke(18,"div",8),pr(19),Ue()(),ke(20,"label"),pr(21),Hp(22,"translate"),Ue(),ke(23,"div",9)(24,"mat-slider",10)(25,"input",7),$e("ngModelChange",function(c){return r.desk_standing_height.set(c),r.saveSetting("desk_standing_height",c)}),Ue(),z8(),Ue(),ke(26,"div",11),pr(27),Ue()()(),Le(28,qm,3,3,"button",12),Ue()),t&2&&(ue(2),xo$1(" ",eC(3,13,"COMMON.DESK_HEIGHT_TITLE")," "),ue(3),xo$1(" ",eC(6,15,"COMMON.DESK_HEIGHT_MSG")," "),ue(2),Fe$1(r.not_set()&&r.show_close()?7:-1),ue(2),xo$1(" ",eC(10,17,"COMMON.DESK_HEIGHT_INFO")," "),ue(4),Qd$1(eC(14,19,"COMMON.DESK_HEIGHT_SITTING")),ue(3),An$1("displayWith",r.formatLabel),ue(),An$1("ngModel",r.desk_sitting_height()),W8(),ue(2),xo$1(" ",r.desk_sitting_height().toFixed(1),"cm "),ue(2),xo$1("",eC(22,21,"COMMON.DESK_HEIGHT_STANDING"),"t"),ue(3),An$1("displayWith",r.formatLabel),ue(),An$1("ngModel",r.desk_standing_height()),W8(),ue(2),xo$1(" ",r.desk_standing_height().toFixed(1),"cm "),ue(),Fe$1(r.show_close()?28:-1));},dependencies:[Fl$1,C0,Pr,Ar,Gi,ANe,VB,yNe,PX,vtt],encapsulation:2});}}return n})();function $m(n,i){if(n&1&&(ke(0,"a",4)(1,"div",5),Lt(2,"icon",6),ke(3,"div"),pr(4),Ue()()()),n&2){let e=i.$implicit;An$1("href",e.link,OE),ue(2),An$1("icon",e.icon),ue(2),Qd$1(e.name);}}var Pl=(()=>{class n{constructor(){this._data=m(xde),this._settings=m(Ks$1),this._tiles=this._settings.signal("help",[]),this.close=()=>{this._data?.close();};}get tiles(){return this._tiles()}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["help-tooltip"]],decls:9,vars:3,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","w-74","flex-col","rounded-sm","shadow-sm",3,"click"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-4"],[1,"text-2xl"],[1,""],["matRipple","","target","_blank","ref","noreferer noopener",1,"w-full","p-2","text-left",3,"href"],[1,"hover:bg-base-200","flex","w-full","items-center","space-x-2","rounded-sm","p-2"],[1,"text-xl",3,"icon"]],template:function(t,r){t&1&&(ke(0,"div",0),$e("click",function(){return r.close()}),ke(1,"div",1)(2,"icon",2),pr(3,"arrow_back"),Ue(),ke(4,"div",3),pr(5),Hp(6,"translate"),Ue()(),QK(7,$m,5,3,"a",4,ZK),Ue()),t&2&&(ue(5),Qd$1(eC(6,1,"COMMON.CONTROLS_HELP")),ue(2),XK(r.tiles));},dependencies:[Fl$1,C0,xJe,vtt],encapsulation:2});}}return n})();var Xm=(n,i)=>i.id;function Ym(n,i){if(n&1&&(ke(0,"div",8),pr(1),Ue()),n&2){let e=vt().$implicit;ue(),xo$1(" ",e.local," ");}}function Qm(n,i){if(n&1){let e=QD();ke(0,"button",6),$e("click",function(){let r=$_(e).$implicit,o=vt();return j_(o.setLocale(r.id))}),ke(1,"div",7),Hp(2,"translate"),ke(3,"div"),pr(4),Hp(5,"translate"),Ue(),Le(6,Ym,2,1,"div",8),Hp(7,"translate"),Ue()();}if(n&2){let e=i.$implicit,t=vt();ue(),Ne("mt-2",eC(2,8,e.name)!==e.local)("border",t.active_locale===e.id)("border-info",t.active_locale===e.id),ue(3),Qd$1(eC(5,10,e.name)),ue(2),Fe$1(eC(7,12,e.name)!==e.local?6:-1);}}var Fl=(()=>{class n{constructor(){this._data=m(xde),this._settings=m(Ks$1),this._locale=m(gb),this._locales=this._settings.signal("locales",[]),this.setLocale=e=>{this._locale.setLocale(e),localStorage.setItem("PLACEOS.locale",e),setTimeout(()=>location.reload(),300);},this.close=()=>this._data?.close();}get active_locale(){return this._locale.locale}get locales(){return this._locales()}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["language-select"]],decls:12,vars:6,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","max-h-[65vh]","w-74","flex-col","overflow-auto","rounded-sm","pb-3","shadow-sm",3,"click"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-3"],[1,"text-2xl"],[1,""],[1,"px-4","py-2","text-xs","opacity-60"],["matRipple","",1,"flex","h-14","items-center","justify-between","space-x-8","px-2","text-left"],["matRipple","",1,"flex","h-14","items-center","justify-between","space-x-8","px-2","text-left",3,"click"],[1,"hover:bg-base-200","flex","flex-1","items-center","justify-between","rounded-sm","p-2","leading-tight"],[1,"bg-base-300","rounded-sm","px-2","py-1","text-xs","opacity-60"]],template:function(t,r){t&1&&(ke(0,"div",0),$e("click",function(){return r.close()}),ke(1,"div",1)(2,"icon",2),pr(3,"arrow_back"),Ue(),ke(4,"div",3),pr(5),Hp(6,"translate"),Ue()(),ke(7,"div",4),pr(8),Hp(9,"translate"),Ue(),QK(10,Qm,8,14,"button",5,Xm),Ue()),t&2&&(ue(5),Qd$1(eC(6,2,"COMMON.LANGUAGE")),ue(3),xo$1(" ",eC(9,4,"COMMON.LANGUAGE_SELECT")," "),ue(2),XK(r.locales));},dependencies:[Fl$1,C0,xJe,vtt],encapsulation:2});}}return n})();function Zm(n,i){if(n&1){let e=QD();ke(0,"mat-radio-button",8),$e("click",function(){let r=$_(e).$implicit,o=vt();return j_(o.setRegion(r))}),pr(1),Ue();}if(n&2){let e=i.$implicit;An$1("value",e.id),ue(),xo$1(" ",e.display_name||e.name," ");}}var Vl=(()=>{class n{constructor(){this._data=m(xde),this._org=m(lT),this.regions=this._org.region_list,this.region=this._org.active_region,this.setRegion=async e=>{await this._org.setRegion(e),this._org.setBuilding(this._org.building,true),this._data?.close();},this.close=()=>this._data?.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["region-select"]],decls:16,vars:8,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","max-h-[65vh]","w-74","flex-col","overflow-auto","rounded-sm","pb-3","shadow-sm",3,"click"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-3"],[1,"text-2xl"],[1,"leading-tight"],[1,"text-xs","opacity-30"],[1,"px-4","py-2","text-xs","opacity-60"],[1,"flex","flex-col","space-y-2","px-2",3,"ngModel"],[3,"value"],[3,"click","value"]],template:function(t,r){t&1&&(ke(0,"div",0),$e("click",function(){return r.close()}),ke(1,"div",1)(2,"icon",2),pr(3,"arrow_back"),Ue(),ke(4,"div",3)(5,"div"),pr(6),Ue(),ke(7,"div",4),pr(8),Hp(9,"translate"),Ue()()(),ke(10,"div",5),pr(11),Hp(12,"translate"),Ue(),ke(13,"mat-radio-group",6),QK(14,Zm,2,2,"mat-radio-button",7,ZK),Ue(),z8(),Ue()),t&2&&(ue(6),xo$1(" ",r.region()?.display_name||r.region()?.name," "),ue(2),xo$1(" ",eC(9,4,"RESOURCE.REGION")," "),ue(3),xo$1(" ",eC(12,6,"COMMON.REGION_SELECT")," "),ue(2),An$1("ngModel",r.region()?.id),W8(),ue(),XK(r.regions()));},dependencies:[Or,Ui,yi,xJe,Fl$1,C0,ANe,yNe,PX,vtt],encapsulation:2});}}return n})();var Ll=(()=>{class n{constructor(){this._settings=m(Ks$1),this._tooltip=m(xde,{optional:true}),this.plate_number=O("");}async ngOnInit(){await PH(this._settings.initialised),this.plate_number.set(this._settings.get("plate_number")||"");}save(){this.plate_number()&&this._settings.saveUserSetting("plate_number",this.plate_number()),cb(gi$1("COMMON.PARKING_SETTINGS_SAVE")),this._tooltip?.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["user-parking-tooltip"]],decls:14,vars:13,consts:[[1,"border-base-300","bg-base-100","min-w-[20rem]","space-y-2","rounded-md","border","p-2"],[1,"border-base-300","border-b","text-lg","font-medium"],[1,"flex","flex-col"],["for","plate-number"],["appearance","outline",1,"no-subscript"],["matInput","",3,"ngModelChange","ngModel","placeholder"],["btn","","matRipple","",1,"w-full",3,"click"]],template:function(t,r){t&1&&(ke(0,"div",0)(1,"h3",1),pr(2),Hp(3,"translate"),Ue(),ke(4,"div",2)(5,"label",3),pr(6),Hp(7,"translate"),Ue(),ke(8,"mat-form-field",4)(9,"input",5),Hp(10,"translate"),v1("ngModelChange",function(c){return U4(r.plate_number,c)||(r.plate_number=c),c}),Ue(),z8(),Ue()(),ke(11,"button",6),$e("click",function(){return r.save()}),pr(12),Hp(13,"translate"),Ue()()),t&2&&(ue(2),xo$1(" ",eC(3,5,"COMMON.CONTROLS_PARKING")," "),ue(4),Qd$1(eC(7,7,"BOOKINGS.PARKING_PLATE_NUMBER")),ue(3),y1("ngModel",r.plate_number),An$1("placeholder",eC(10,9,"BOOKINGS.PARKING_PLATE_NUMBER")),W8(),ue(3),xo$1(" ",eC(13,11,"COMMON.SAVE")," "));},dependencies:[NM,SY,$et,Get,ANe,VB,yNe,PX,vtt],encapsulation:2});}}return n})();function Jm(n,i){if(n&1){let e=QD();ke(0,"button",17),$e("click",function(){let r=$_(e).$implicit,o=vt().$index,c=vt(2);return j_(c.setLocation(o,r.id))}),ke(1,"div",18)(2,"icon",11),pr(3),Ue(),ke(4,"div",19),pr(5),Hp(6,"translate"),Ue()()();}if(n&2){let e=i.$implicit;ue(3),Qd$1(e.icon),ue(2),xo$1(" ",eC(6,2,e.name)," ");}}function eu(n,i){n&1&&Lt(0,"div",16);}function tu(n,i){if(n&1&&(ke(0,"div",9)(1,"div",10)(2,"icon",11),pr(3),Ue()(),ke(4,"div",12)(5,"button",13)(6,"div"),pr(7),Ue(),ke(8,"icon"),pr(9,"expand_more"),Ue()(),ke(10,"mat-menu",null,0),QK(12,Jm,7,4,"button",14,ZK),Ue(),ke(14,"div",15),pr(15),Hp(16,"date"),Hp(17,"date"),Ue()(),Le(18,eu,1,0,"div",16),Ue()),n&2){let e=i.$implicit,t=i.$index,r=WE(11),o=vt(2);Ne("opacity-30",o.now>o.timeFrom(e.end_time)),ue(),Ne("bg-base-200",o.now<o.timeFrom(e.start_time)||o.now>o.timeFrom(e.end_time))("bg-info",o.now>=o.timeFrom(e.start_time)&&o.now<=o.timeFrom(e.end_time))("text-info-content",o.now>=o.timeFrom(e.start_time)&&o.now<=o.timeFrom(e.end_time)),ue(2),Qd$1(o.location_icon(o.timeFrom(e.start_time))),ue(2),An$1("matMenuTriggerFor",r),ue(2),xo$1(" ",o.location(o.timeFrom(e.start_time))," "),ue(5),XK(o.locations()),ue(3),g1(" ",tC(16,14,o.timeFrom(e.start_time),"shortTime")," \u2013 ",tC(17,17,o.timeFrom(e.end_time),"shortTime")," "),ue(3),Fe$1(t>0?18:-1);}}function iu(n,i){if(n&1&&(ke(0,"div",6),QK(1,tu,19,20,"div",8,ZK),Ue()),n&2){let e=vt();ue(),XK(e.active_preference?.blocks);}}function nu(n,i){n&1&&(ke(0,"div",7)(1,"icon",20),pr(2,"event_busy"),Ue(),ke(3,"p",21),pr(4),Hp(5,"translate"),Ue(),ke(6,"p",21),pr(7),Hp(8,"translate"),Ue()()),n&2&&(ue(4),xo$1(" ",eC(5,2,"COMMON.WORK_LOCATION_EMPTY")," "),ue(3),xo$1(" ",eC(8,4,"COMMON.WORK_LOCATION_EDIT_INFO")," "));}var Bl=(()=>{class n{constructor(){this._dialog=m(yT),this.locations=O([]),this.settings=O(void 0),this.overrides=O({});}get active_preference(){let e=vr$1(new Date,"yyyy-MM-dd");return this.overrides()[e]?this.overrides()[e]:this.settings()?.find(t=>t.day_of_week===new Date().getDay())}get now(){return dl$1(Date.now()).getTime()}ngOnInit(){let e=Rr$1();this.settings.set(e.work_preferences),this.overrides.set(e.work_overrides),this.locations.set([{id:"wfo",name:gi$1("COMMON.WORK_OFFICE"),icon:"business"},{id:"wfh",name:gi$1("COMMON.WORK_HOME"),icon:"home"},{id:"aol",name:gi$1("COMMON.WORK_LEAVE"),icon:"event_busy"},{id:"sick",name:gi$1("COMMON.WORK_SICK"),icon:"sick"}]);}location_icon(e){return Rr$1().location_icon(e+60*1e3)}location(e){return Rr$1().location_name_time(e+60*1e3)}timeFrom(e){return dl$1(Sr$1(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}editSettings(){this._dialog.open(Nr);}async setLocation(e,t){let r=Rr$1(),o=this.active_preference,c=vr$1(Date.now(),"yyyy-MM-dd"),h=m$1(l({},r.work_overrides),{[c]:m$1(l({},o),{blocks:[...o.blocks.slice(0,e),m$1(l({},o.blocks[e]),{location:t}),...o.blocks.slice(e+1)]})});for(let x in h){let R=As(x,"yyyy-MM-dd",new Date);(!h[x].blocks.length||Zi(R,kn(Dn$1(Date.now()),-1)))&&delete h[x];}this.overrides.set(h),await hH(r.id,m$1(l({},r),{work_overrides:h})),QH();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["work-location-tooltip"]],decls:14,vars:11,consts:[["work_menu","matMenu"],[1,"bg-base-100","relative","-top-12","-right-1","flex","w-74","flex-col","overflow-hidden","rounded-sm","shadow-sm"],[1,"flex","items-center","justify-between","px-2"],[1,"px-2","py-4","font-medium"],["icon","","matRipple","","matTooltipPosition","left",1,"hover:bg-base-200",3,"click","matTooltip"],[1,"px-4","text-sm","font-medium"],[1,"pb-2"],[1,"flex","w-full","flex-col","items-center","justify-center","space-y-2","p-8","opacity-30"],[1,"relative","flex","items-center","px-4","py-2",3,"opacity-30"],[1,"relative","flex","items-center","px-4","py-2"],[1,"bg-base-200","z-20","flex","h-10","w-10","items-center","justify-center","rounded-full"],[1,"text-2xl"],[1,"ml-2","flex-1"],["matRipple","",1,"hover:bg-base-200","flex","items-center","space-x-2","rounded-sm","px-2","py-1","font-medium",3,"matMenuTriggerFor"],["mat-menu-item",""],[1,"px-2","text-xs","opacity-60"],[1,"border-base-200","absolute","-top-2","left-7","h-4","w-0","-translate-x-px","border-l-2","border-dashed"],["mat-menu-item","",3,"click"],[1,"flex","items-center","space-x-2"],[1,"pr-8"],[1,"text-6xl"],[1,"text-center","text-sm"]],template:function(t,r){t&1&&(ke(0,"div",1)(1,"div",2)(2,"h3",3),pr(3),Hp(4,"translate"),Ue(),ke(5,"button",4),Hp(6,"translate"),$e("click",function(){return r.editSettings()}),ke(7,"icon"),pr(8,"edit_note"),Ue()()(),ke(9,"h3",5),pr(10),Hp(11,"date"),Ue(),Le(12,iu,3,0,"div",6)(13,nu,9,6,"div",7),Ue()),t&2&&(ue(3),xo$1(" ",eC(4,4,"COMMON.WORK_LOCATION")," "),ue(2),An$1("matTooltip",eC(6,6,"COMMON.WORK_LOCATION_EDIT")),ue(5),xo$1(" ",tC(11,8,r.now,"fullDate")," "),ue(2),Fe$1(r.active_preference?.blocks?.length?12:13));},dependencies:[yy,MZe,li,rt,mt,ut,Fl$1,C0,mtt,Ide,xJe,R9,vtt],encapsulation:2});}}return n})();function ru(n,i){if(n&1){let e=QD();ke(0,"button",28),$e("click",function(){let r=$_(e).$implicit,o=vt(2);return j_(o.saveSetting("work_location",r.id))}),ke(1,"div",29)(2,"icon",23),pr(3),Ue(),ke(4,"div",30),pr(5),Hp(6,"translate"),Ue()()();}if(n&2){let e=i.$implicit;ue(3),Qd$1(e.icon),ue(2),xo$1(" ",eC(6,2,e.name)," ");}}function ou(n,i){if(n&1&&(ke(0,"div",7)(1,"h3",19),pr(2," Today's Work Location "),Ue(),ke(3,"div",20)(4,"div",21)(5,"div",22)(6,"icon",23),pr(7),Ue()(),ke(8,"div",24)(9,"button",25)(10,"div"),pr(11),Ue(),ke(12,"icon"),pr(13,"expand_more"),Ue()(),ke(14,"mat-menu",null,1),QK(16,ru,7,4,"button",26,ZK),Ue(),ke(18,"div",27),pr(19),Hp(20,"date"),Hp(21,"date"),Ue()()()()()),n&2){let e=WE(15),t=vt();ue(7),Qd$1(t.location_icon(t.timeFrom(t.active_block().start_time))),ue(2),An$1("matMenuTriggerFor",e),ue(2),xo$1(" ",t.location(t.timeFrom(t.active_block().start_time))," "),ue(5),XK(t.pref_locations()),ue(3),g1(" ",tC(20,5,t.timeFrom(t.active_block().start_time),"shortTime")," \u2013 ",tC(21,8,t.timeFrom(t.active_block().end_time),"shortTime")," ");}}function au(n,i){if(n&1&&(ke(0,"div",8)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),pr(5,"layers"),Ue()(),ke(6,"div",33),pr(7),Ue(),ke(8,"icon",34),pr(9," chevron_right "),Ue()()()()),n&2){let e=vt();An$1("content",e.region_select),ue(7),xo$1(" ",e.region()?.display_name||e.region()?.name," ");}}function su(n,i){if(n&1&&(ke(0,"div",8)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),pr(5,"business"),Ue()(),ke(6,"div",33),pr(7),Ue(),ke(8,"icon",34),pr(9," chevron_right "),Ue()()()()),n&2){let e=vt();An$1("content",e.building_select),ue(7),xo$1(" ",e.building()?.display_name||e.building()?.name," ");}}function lu(n,i){if(n&1&&(ke(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),pr(5,"help"),Ue()(),ke(6,"div",35),pr(7),Hp(8,"translate"),Ue(),ke(9,"icon",34),pr(10," chevron_right "),Ue()()()()),n&2){let e=vt();An$1("content",e.help_tooltip),ue(7),xo$1(" ",eC(8,2,"COMMON.CONTROLS_HELP")," ");}}function cu(n,i){if(n&1&&(ke(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),pr(5,"share_location"),Ue()(),ke(6,"div",35),pr(7),Hp(8,"translate"),Ue(),ke(9,"icon",34),pr(10,"chevron_right"),Ue()()()()),n&2){let e=vt();An$1("content",e.work_location_tooltip),ue(7),xo$1(" ",eC(8,2,"COMMON.WORK_LOCATION")," ");}}function du(n,i){if(n&1&&(ke(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),pr(5,"mode_night"),Ue()(),ke(6,"div",35),pr(7),Hp(8,"translate"),Ue(),ke(9,"icon",34),pr(10,"chevron_right"),Ue()()()()),n&2){let e=vt();Ne("border-b!",!e.locales().length||!e.desk_height()),An$1("content",e.accessibility_tooltip),ue(7),xo$1(" ",eC(8,4,"COMMON.CONTROLS_ACCESSIBILITY")," ");}}function mu(n,i){if(n&1&&(ke(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),pr(5,"desk"),Ue()(),ke(6,"div",35),pr(7),Hp(8,"translate"),Ue(),ke(9,"icon",34),pr(10," chevron_right "),Ue()()()()),n&2){let e=vt(),t=WE(15);Ne("border-b!",!e.locales().length),An$1("content",t),ue(7),xo$1(" ",eC(8,4,"COMMON.CONTROLS_DESKS")," ");}}function uu(n,i){n&1&&Lt(0,"desk-height-presets");}function pu(n,i){if(n&1&&(ke(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),pr(5,"parking_sign"),Ue()(),ke(6,"div",35),pr(7),Hp(8,"translate"),Ue(),ke(9,"icon",34),pr(10," chevron_right "),Ue()()()()),n&2){let e=vt();Ne("border-b!",!e.locales().length),An$1("content",e.parking_tooltip),ue(7),xo$1(" ",eC(8,4,"COMMON.CONTROLS_PARKING")," ");}}function hu(n,i){n&1&&(ke(0,"div",37),pr(1," Language "),Ue());}function _u(n,i){if(n&1&&(ke(0,"div",11)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),pr(5,"language"),Ue()(),ke(6,"div",36)(7,"div")(8,"div"),pr(9),Hp(10,"translate"),Ue(),Le(11,hu,2,0,"div",37),Hp(12,"translate"),Ue(),ke(13,"div",38),Hp(14,"translate"),pr(15),Hp(16,"translate"),Ue()(),ke(17,"icon",34),pr(18," chevron_right "),Ue()()()()),n&2){let e=vt();An$1("content",e.language_tooltip),ue(9),xo$1(" ",eC(10,5,"COMMON.LANGUAGE")," "),ue(2),Fe$1(eC(12,7,"COMMON.LANGUAGE")!=="Language"?11:-1),ue(2),An$1("matTooltip",eC(14,9,e.active_locale)),ue(2),xo$1(" ",eC(16,11,e.active_locale)," ");}}function fu(n,i){if(n&1){let e=QD();ke(0,"button",39),$e("click",function(){$_(e);let r=vt();return j_(r.newSupportTicket())}),ke(1,"div",31)(2,"div",32)(3,"icon"),pr(4,"support_agent"),Ue()(),ke(5,"div",35),pr(6),Hp(7,"translate"),Ue()()();}n&2&&(ue(6),xo$1(" ",eC(7,1,"COMMON.CONTROLS_SUPPORT")," "));}function gu(n,i){if(n&1){let e=QD();ke(0,"button",40),$e("click",function(){$_(e);let r=vt();return j_(r.reloadPage())}),pr(1),Hp(2,"translate"),Ue();}n&2&&(ue(),xo$1(" ",eC(2,1,"COMMON.CONTROLS_NEW_VERSION")," "));}function bu(n,i){if(n&1){let e=QD();ke(0,"button",41),$e("click",function(){$_(e);let r=vt();return j_(r.viewChangelog())}),pr(1),Ue();}if(n&2){let e=vt();ue(),xo$1(" ",e.version.hash," ");}}function vu(n,i){if(n&1&&(ke(0,"span"),pr(1),Ue()),n&2){let e=vt();ue(),Qd$1(e.version.hash);}}var Ul=(()=>{class n{constructor(){this._settings=m(Ks$1),this._org=m(lT),this._dialog=m(yT),this._locale=m(gb),this.building=this._org.active_building,this.region=this._org.active_region,this.regions=this._org.region_list,this.sidebar=mn(false),this.accessibility=nte("allow_accessibility_changes",true),this.show_changelog=nte("show_changelog",true),this.region_select=Vl,this.building_select=Nl,this.help_tooltip=Pl,this.accessibility_tooltip=Dl,this.language_tooltip=Fl,this.work_location_tooltip=Bl,this.parking_tooltip=Ll,this.features=nte("features",[]),this._locales=this._settings.signal("locales",[]),this._desk_height=this._settings.signal("desks.height_enabled",false),this._use_region=this._settings.signal("use_region",false),this._disable_building_select=this._settings.signal("disable_building_select",false),this.pref_locations=O([]),this.work_prefs=O([]),this.overrides=O({}),this.active_block=fe(()=>{let e=vr$1(new Date,"yyyy-MM-dd"),t=new Date().getDay();return (this.overrides()[e]?this.overrides()[e]:this.work_prefs().find(o=>o.day_of_week===t))?.blocks?.find(o=>this.now>=this.timeFrom(o.start_time)&&this.now<this.timeFrom(o.end_time))}),this.active_index=fe(()=>{let e=vr$1(new Date,"yyyy-MM-dd"),t=new Date().getDay();return (this.overrides()[e]?this.overrides()[e]:this.work_prefs().find(o=>o.day_of_week===t))?.blocks?.findIndex(o=>this.now>=this.timeFrom(o.start_time)&&this.now<this.timeFrom(o.end_time))}),this.locales=this._locales,this.desk_height=this._desk_height,this.use_region=this._use_region,this.disable_building_select=this._disable_building_select;}location_icon(e){return Rr$1().location_icon(e+60*1e3)}location(e){return Rr$1().location_name_time(e+60*1e3)}timeFrom(e){return dl$1(Sr$1(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}get user(){return Rr$1()}get groups(){return this.user?.groups?.join(`
`)||""}get version(){return am$1}get active_locale(){let e=this.locales(),t=this._locale.locale;for(let r of e)if(r.id===t)return r.name;return "LANGUAGE.ENGLISH"}get now(){return dl$1(Date.now()).getTime()}get has_new_version(){return u2()}ngOnInit(){let e=Rr$1();this.work_prefs.set(e?.work_preferences||[]),this.overrides.set(e?.work_overrides||{}),this.pref_locations.set([{id:"wfo",name:gi$1("COMMON.WORK_OFFICE"),icon:"business"},{id:"wfh",name:gi$1("COMMON.WORK_HOME"),icon:"home"},{id:"aol",name:gi$1("COMMON.WORK_LEAVE"),icon:"event_busy"},{id:"sick",name:gi$1("COMMON.WORK_SICK"),icon:"sick"}]);}logout(){cxe();}reloadPage(){location.reload();}newSupportTicket(){this._settings.get("app.external_support_url")?window.open(this._settings.get("app.external_support_url"),"_blank"):this._dialog.open(Tl);}openWfhModal(){this._dialog.open(Nr);}async viewChangelog(){let e=await(await fetch("https://raw.githubusercontent.com/PlaceOS/user-interfaces/develop/CHANGELOG.md")).text();this._dialog.open(Ml,{data:{changelog:e}});}saveSetting(e,t){this._settings.saveUserSetting(e,t);}formatLabel(e){return `${e.toFixed(1)}cm`}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["user-controls"]],inputs:{sidebar:[1,"sidebar"]},decls:35,vars:32,consts:[["desk_height_tooltip",""],["work_menu","matMenu"],[1,"divide-base-200","border-base-300","bg-base-100","relative","mt-1","flex","flex-col","divide-y","overflow-auto","rounded-sm","border","shadow-sm"],["avatar","",1,"flex","w-full","min-w-72","flex-col","items-center","p-2"],[1,"text-2xl",3,"user","matTooltip"],[1,""],[1,"truncate","text-xs","opacity-60"],[1,"border-base-200","w-full","rounded-sm","border-y","py-2"],["customTooltip","",1,"relative",3,"content"],["customTooltip","",3,"content"],["customTooltip","",3,"content","border-b!"],["customTooltip","",1,"border-b!",3,"content"],["btn","","matRipple","",1,"clear","h-14","w-full","text-left"],[1,"flex","flex-col","items-center","p-4"],[1,"mb-4","flex","items-center","justify-center","space-x-2"],["btn","","matRipple","",1,"inverse",3,"click"],["btn","","matRipple",""],[1,"w-full","text-xs","opacity-60"],[1,"m-0","border-none","bg-none","p-0","text-xs","underline"],[1,"w-full","px-4","pb-2","text-sm","font-medium"],[1,"w-full"],[1,"relative","flex","items-center","px-4","py-2"],[1,"bg-info","text-info-content","z-20","flex","h-10","w-10","items-center","justify-center","rounded-full"],[1,"text-2xl"],[1,"ml-2","flex-1"],["matRipple","",1,"hover:bg-base-200","flex","items-center","space-x-2","rounded-sm","px-2","py-1","font-medium",3,"matMenuTriggerFor"],["mat-menu-item",""],[1,"px-2","text-xs","opacity-60"],["mat-menu-item","",3,"click"],[1,"flex","items-center","space-x-2"],[1,"pr-8"],[1,"flex","w-full","items-center","space-x-2"],[1,"bg-base-200","flex","h-8","w-8","items-center","justify-center","rounded-full"],[1,"w-px","flex-1","truncate"],[1,"text-2xl","opacity-60"],[1,"flex-1"],[1,"flex","flex-1","items-center","justify-between","space-x-4"],[1,"text-xs","opacity-30"],[1,"bg-base-200","max-w-24","truncate","rounded-sm","px-2","py-1","text-sm",3,"matTooltip"],["btn","","matRipple","",1,"clear","h-14","w-full","text-left",3,"click"],["btn","","matRipple","",3,"click"],[1,"m-0","border-none","bg-none","p-0","text-xs","underline",3,"click"]],template:function(t,r){t&1&&(ke(0,"div",2)(1,"div",3),Lt(2,"a-user-avatar",4),ke(3,"div",5),pr(4),Ue(),ke(5,"div",6),pr(6),Ue()(),Le(7,ou,22,11,"div",7),Le(8,au,10,2,"div",8),Le(9,su,10,2,"div",8),Le(10,lu,11,4,"div",9),Le(11,cu,11,4,"div",9),Le(12,du,11,6,"div",10),Le(13,mu,11,6,"div",10),zn$1(14,uu,1,0,"ng-template",null,0,Gp),Le(16,pu,11,6,"div",10),Le(17,_u,19,13,"div",11),Le(18,fu,8,3,"button",12),ke(19,"div",13)(20,"div",14)(21,"button",15),$e("click",function(){return r.logout()}),pr(22),Hp(23,"translate"),Ue(),Le(24,gu,3,3,"button",16),Ue(),ke(25,"div",17),KD(26),pr(27),Hp(28,"translate"),ZD(),Le(29,bu,2,1,"button",18)(30,vu,2,1,"span"),Ue(),ke(31,"div",17),pr(32),Hp(33,"date"),Hp(34,"date"),Ue()()()),t&2&&(Ne("border",!r.sidebar()),ue(2),An$1("user",r.user)("matTooltip",r.groups),ue(2),Qd$1(r.user?.name),ue(2),xo$1(" ",r.user?.email," "),ue(),Fe$1(r.features().includes("wfh")&&r.active_block()?7:-1),ue(),Fe$1(r.regions()?.length?8:-1),ue(),Fe$1(!r.disable_building_select()&&!r.use_region()?9:-1),ue(),Fe$1(r.features().includes("help")?10:-1),ue(),Fe$1(r.features().includes("wfh")?11:-1),ue(),Fe$1(r.accessibility()?12:-1),ue(),Fe$1(r.desk_height()?13:-1),ue(3),Fe$1(r.features().includes("parking-controls")?16:-1),ue(),Fe$1(r.locales().length>1?17:-1),ue(),Fe$1(r.features().includes("support-ticket")?18:-1),ue(4),xo$1(" ",eC(23,22,"COMMON.CONTROLS_SIGN_OUT")," "),ue(2),Fe$1(r.has_new_version?24:-1),ue(3),xo$1(" ",eC(28,24,"COMMON.CONTROLS_VERSION"),": "),ue(2),Fe$1(r.show_changelog()?29:30),ue(3),g1(" ",tC(33,26,r.version.time,"longDate")," (",tC(34,29,r.version.time,"shortTime"),") "));},dependencies:[yy,MZe,Fl$1,C0,xJe,ktt,mtt,Ide,Dr,li,rt,mt,ut,Al,R9,vtt],encapsulation:2});}}return n})();var yu=["*"];function xu(n,i){n&1&&(ke(0,"icon",2),pr(1,"person"),Ue());}function ku(n,i){if(n&1){let e=QD();ke(0,"div",1)(1,"button",3),$e("click",function(){$_(e);let r=vt();return j_(r.close())}),Ue(),ke(2,"div",4)(3,"div",5),Lt(4,"user-controls",6),ke(5,"button",7),$e("click",function(){$_(e);let r=vt();return j_(r.close())}),ke(6,"icon",2),pr(7,"close"),Ue()()()()();}if(n&2){let e=vt();ue(),Ne("opacity-50",e.is_open())("opacity-0",!e.is_open()),ue(2),Ne("translate-x-0",e.is_open())("translate-x-full",!e.is_open()),ue(),An$1("sidebar",true);}}var zl=(()=>{class n{constructor(){this._close_timeout=null,this.is_open=O(false),this.is_rendered=O(false);}open(){this._close_timeout&&(clearTimeout(this._close_timeout),this._close_timeout=null),this.is_rendered.set(true),requestAnimationFrame(()=>this.is_open.set(true));}close(){this.is_open.set(false),this._close_timeout=setTimeout(()=>{this.is_rendered.set(false),this._close_timeout=null;},200);}onEscape(){this.is_open()&&this.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["user-controls-sidebar"]],hostBindings:function(t,r){t&1&&$e("keydown.escape",function(){return r.onEscape()},b5);},ngContentSelectors:yu,decls:4,vars:1,consts:[["icon","","matRipple","","avatar","","type","button","name","user-controls",1,"bg-base-200","flex","h-10","w-10","items-center","justify-center","rounded-full",3,"click"],[1,"fixed","inset-0","z-9999","overflow-hidden"],[1,"text-2xl"],["type","button","aria-label","Close user controls",1,"absolute","inset-0","bg-black","transition-opacity","duration-200",3,"click"],[1,"absolute","inset-y-0","right-0","flex","max-w-full"],[1,"bg-base-100","relative","h-full","w-80","max-w-[100vw]","overflow-auto","pt-[calc(env(safe-area-inset-top)+1rem)]","pb-[env(safe-area-inset-bottom)]","pr-[env(safe-area-inset-right)]","shadow-xl","transition-transform","duration-200","ease-out"],[3,"sidebar"],["icon","","default","","matRipple","","type","button",1,"absolute","top-[calc(env(safe-area-inset-top)+0.5rem)]","right-[calc(env(safe-area-inset-right)+0.5rem)]",3,"click"]],template:function(t,r){t&1&&(Wt(),ke(0,"button",0),$e("click",function(){return r.open()}),Pe(1,0,null,xu,2,0),Ue(),Le(3,ku,8,9,"div",1)),t&2&&(ue(3),Fe$1(r.is_rendered()?3:-1));},dependencies:[Fl$1,C0,xJe,Ul],encapsulation:2});}}return n})();var Cu=["editor"];function Mu(n,i){if(n&1){let e=QD();ke(0,"button",20),$e("click",function(){$_(e);let r=vt(2);return j_(r.insertImage())}),ke(1,"icon"),pr(2,"image"),Ue()(),ke(3,"button",20),$e("click",function(){$_(e);let r=vt(2);return j_(r.insertAttachment())}),ke(4,"icon"),pr(5,"attachment"),Ue()();}}function wu(n,i){if(n&1){let e=QD();ke(0,"div",3)(1,"select",5),$e("change",function(r){$_(e);let o=vt();return j_(o.setFontFace(r))}),ke(2,"option",6),pr(3,"Font"),Ue(),ke(4,"option",7),pr(5,"Arial"),Ue(),ke(6,"option",8),pr(7,"Helvetica"),Ue(),ke(8,"option",9),pr(9,"Georgia"),Ue(),ke(10,"option",10),pr(11,"Times New Roman"),Ue()(),ke(12,"select",11),$e("change",function(r){$_(e);let o=vt();return j_(o.setFontSize(r))}),ke(13,"option",12),pr(14,"Size"),Ue(),ke(15,"option",13),pr(16,"12"),Ue(),ke(17,"option",14),pr(18,"14"),Ue(),ke(19,"option",15),pr(20,"16"),Ue(),ke(21,"option",16),pr(22,"18"),Ue(),ke(23,"option",17),pr(24,"24"),Ue(),ke(25,"option",18),pr(26,"32"),Ue(),ke(27,"option",19),pr(28,"48"),Ue()(),ke(29,"button",20),$e("click",function(){$_(e);let r=vt();return j_(r.toggleBold())}),ke(30,"icon"),pr(31,"format_bold"),Ue()(),ke(32,"button",20),$e("click",function(){$_(e);let r=vt();return j_(r.toggleItalic())}),ke(33,"icon"),pr(34,"format_italic"),Ue()(),ke(35,"button",20),$e("click",function(){$_(e);let r=vt();return j_(r.toggleUnderline())}),ke(36,"icon"),pr(37,"format_underlined"),Ue()(),ke(38,"button",20),$e("click",function(){$_(e);let r=vt();return j_(r.makeUnorderedList())}),ke(39,"icon"),pr(40,"format_list_bulleted"),Ue()(),ke(41,"button",20),$e("click",function(){$_(e);let r=vt();return j_(r.makeOrderedList())}),ke(42,"icon"),pr(43,"format_list_numbered"),Ue()(),ke(44,"button",20),$e("click",function(){$_(e);let r=vt();return j_(r.insertLink())}),ke(45,"icon"),pr(46,"link"),Ue()(),Le(47,Mu,6,0),Ue();}if(n&2){let e=vt();ue(29),Ne("border-info",e.toolbar_state().bold)("text-info",e.toolbar_state().bold),ue(3),Ne("border-info",e.toolbar_state().italic)("text-info",e.toolbar_state().italic),ue(3),Ne("border-info",e.toolbar_state().underline)("text-info",e.toolbar_state().underline),ue(3),Ne("border-info",e.toolbar_state().unordered_list)("text-info",e.toolbar_state().unordered_list),ue(3),Ne("border-info",e.toolbar_state().ordered_list)("text-info",e.toolbar_state().ordered_list),ue(3),Ne("border-info",e.toolbar_state().link)("text-info",e.toolbar_state().link),ue(3),Fe$1(e.images_allowed()?47:-1);}}var wl=(()=>{class n extends io$1{constructor(){super(...arguments),this._uploads=m(qZe),this._dom_sanitizer=m(Xc$1),this._ng_zone=m(V),this.placeholder=mn(""),this.readonly=mn(false),this.images_allowed=mn(false),this._editor_el=Zc$1("editor"),this._onChange=()=>{},this._onTouch=()=>{},this.toolbar_state=O({bold:false,italic:false,underline:false,unordered_list:false,ordered_list:false,link:false}),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e,this._syncValue=()=>{this._editor&&this.setValue(this._editor.getHTML());},this._handleTouched=()=>{this._editor&&this._onTouch();},this._refreshToolbarState=()=>{this._editor&&this._ng_zone.run(()=>{this.toolbar_state.set({bold:this._editor.hasFormat("B"),italic:this._editor.hasFormat("I"),underline:this._editor.hasFormat("U"),unordered_list:this._editor.hasFormat("UL"),ordered_list:this._editor.hasFormat("OL"),link:this._editor.hasFormat("A")});});};}ngOnChanges(e){e.placeholder&&this.timeout("init",()=>this._initialiseEditor()),e.readonly&&this._editor&&this._setReadonlyState();}ngAfterViewInit(){this.timeout("init",()=>this._initialiseEditor());}setValue(e){this._onChange(e);}writeValue(e){this.timeout("write",()=>{this._editor?(this._editor.setHTML(e||""),this._setPlaceholder()):this.timeout("write",()=>this.writeValue(e));});}toggleBold(){this._toggleFormat("B",()=>this._editor.removeBold(),()=>this._editor.bold());}toggleItalic(){this._toggleFormat("I",()=>this._editor.removeItalic(),()=>this._editor.italic());}toggleUnderline(){this._toggleFormat("U",()=>this._editor.removeUnderline(),()=>this._editor.underline());}makeUnorderedList(){this._toggleFormat("UL",()=>this._editor.removeList(),()=>this._editor.makeUnorderedList());}makeOrderedList(){this._toggleFormat("OL",()=>this._editor.removeList(),()=>this._editor.makeOrderedList());}insertLink(){if(!this._editor)return;if(this._editor.hasFormat("A")){this._editor.removeLink(),this._syncValue(),this._refreshToolbarState();return}let e=prompt("Enter URL");e&&(this._editor.makeLink(e),this._syncValue(),this._refreshToolbarState());}setFontFace(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontFace(t==="default"?"inherit":t),this._syncValue());}setFontSize(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontSize(t),this._syncValue());}insertImage(){this._embedFile(true);}insertAttachment(){this._embedFile(false);}async _initialiseEditor(){let e=this._editor_el()?.nativeElement;if(!e)return this.timeout("init",()=>this._initialiseEditor());let{default:t}=await import('./chunk-CRXfBZqR.js');this._editor&&this._editor.destroy(),e.innerHTML="",this._editor=new t(e,{blockTag:"div",sanitizeToDOMFragment:r=>{let o=this._dom_sanitizer.sanitize(Ni.HTML,r||"")||"",c=document.createElement("template");return c.innerHTML=o,c.content.cloneNode(true)}}),this._editor.addEventListener("input",this._syncValue),this._editor.addEventListener("blur",this._handleTouched),this._editor.addEventListener("cursor",this._refreshToolbarState),this._editor.addEventListener("select",this._refreshToolbarState),this._editor.addEventListener("pathChange",this._refreshToolbarState),this._setReadonlyState(),this._setPlaceholder(),this._refreshToolbarState();}_embedFile(e){if(!this._editor)return;let t=document.createElement("input");t.setAttribute("type","file"),e&&t.setAttribute("accept","image/*"),t.click(),t.onchange=()=>{let r=t.files?.[0];r&&this._uploads.uploadFile(r,true).then(o=>{if(!o)return;let c=`${location.origin}/api/engine/v2/uploads/${encodeURIComponent(o)}/url`;this._setAuth(),setTimeout(()=>{this._insertUploadedFile(c,r,e),this._syncValue();},100);}).catch(o=>{o instanceof NT||DH(`Failed to upload ${r.name}: ${o?.message||"Unknown error"}`);});};}_setReadonlyState(){let e=this._editor_el()?.nativeElement;e&&e.setAttribute("contenteditable",`${!this.readonly()}`);}_setPlaceholder(){let e=this._editor_el()?.nativeElement;e&&e.setAttribute("data-placeholder",this.placeholder()||"");}_toggleFormat(e,t,r){this._editor&&(this._editor.hasFormat(e)?t():r(),this._syncValue(),this._refreshToolbarState());}_insertUploadedFile(e,t,r){let o=t.type.startsWith("image/");if(r||o){this._editor.insertHTML(`<img src="${e}" alt="${t.name}" />`);return}this._editor.insertHTML(`<a href="${e}" target="_blank">${t.name}</a>`);}_setAuth(){let e=Ut$1();document.cookie=`${e==="x-api-key"?"api-key="+encodeURIComponent(Go$1()):"bearer_token="+encodeURIComponent(e)};max-age=30;path=/api/engine/v2/uploads;samesite=strict;${location.protocol==="https:"?"secure;":""}`;}static{this.\u0275fac=(()=>{let e;return function(r){return (e||(e=yt(n)))(r||n)}})();}static{this.\u0275cmp=Ee({type:n,selectors:[["rich-text-input"]],viewQuery:function(t,r){t&1&&Kd$1(r._editor_el,Cu,5),t&2&&Zd$1();},inputs:{placeholder:[1,"placeholder"],readonly:[1,"readonly"],images_allowed:[1,"images_allowed"]},features:[ot$1([{provide:Ua,useExisting:nn(()=>n),multi:true}]),Re,Et],decls:5,vars:1,consts:[["container",""],["editor",""],[1,"w-full"],[1,"border-base-300","bg-base-100","flex","flex-wrap","items-center","gap-1","rounded-t","border","p-2"],[1,"squire-editor"],[1,"border-base-300","bg-base-100","rounded","border","p-2","text-sm",3,"change"],["value","default"],["value","Arial"],["value","Helvetica"],["value","Georgia"],["value","Times New Roman"],[1,"border-base-300","bg-base-100","min-w-24","rounded","border","p-2","text-sm",3,"change"],["value",""],["value","12px"],["value","14px"],["value","16px"],["value","18px"],["value","24px"],["value","32px"],["value","48px"],["icon","","type","button",1,"border-base-300","rounded","border","px-2","py-1","text-sm",3,"click"]],template:function(t,r){t&1&&(ke(0,"div",2,0),Le(2,wu,48,25,"div",3),Lt(3,"div",4,1),Ue()),t&2&&(ue(2),Fe$1(r.readonly()?-1:2));},dependencies:[xJe],styles:["[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]     .squire-editor{border-radius:.25rem;border:1px solid var(--base-300);padding:.5rem;min-height:8rem;width:100%;outline:none}[_nghost-%COMP%]     .squire-editor:empty:before{content:attr(data-placeholder);color:var(--base-content);opacity:.5}[_nghost-%COMP%]     .squire-editor ul{list-style-type:disc;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor ol{list-style-type:decimal;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor li{margin:.125rem 0}"]});}}return n})();var Tu=(n,i)=>i.id+""+n;function Eu(n,i){if(n&1&&(ke(0,"a",1)(1,"icon",2),pr(2),Ue(),ke(3,"span",3),pr(4),Ue()()),n&2){let e=vt().$implicit;An$1("routerLink",e.route),ue(2),Qd$1(e.icon),ue(2),Qd$1(e.name);}}function Su(n,i){if(n&1){let e=QD();ke(0,"button",6),$e("click",function(){$_(e);let r=vt(2).$implicit,o=vt();return j_(o.toggleBlock(r.id||r._id))}),ke(1,"icon",2),pr(2),Ue(),ke(3,"div",7),pr(4),Ue(),ke(5,"icon",8),pr(6,"arrow_drop_down"),Ue()();}if(n&2){let e=vt(2).$implicit;ue(2),xo$1(" ",e.icon," "),ue(2),xo$1(" ",e.name," ");}}function Iu(n,i){if(n&1&&(ke(0,"a",9),Lt(1,"icon",8),ke(2,"span"),pr(3),Ue()()),n&2){let e=i.$implicit;An$1("routerLink",e.route),ue(3),Qd$1(e.name);}}function Ru(n,i){if(n&1&&(ke(0,"section",5),QK(1,Iu,4,2,"a",9,ZK),Ue()),n&2){let e=vt(2).$implicit,t=vt();An$1("@show",t.isBlockCollapsed(e.id||e._id)?"hide":"show"),ue(),XK(e.children);}}function Ou(n,i){if(n&1&&(Le(0,Su,7,2,"button",4),Le(1,Ru,3,1,"section",5)),n&2){let e=vt().$implicit;Fe$1(e.children?.length?0:-1),ue(),Fe$1(e.children?.length?1:-1);}}function Du(n,i){if(n&1&&Le(0,Eu,5,3,"a",1)(1,Ou,2,2),n&2){let e=i.$implicit;Fe$1(e.children?1:0);}}var z1=(()=>{class n extends io$1{constructor(){super(),this._settings=m(Ks$1),this._org=m(lT),this._element_ref=m(G),this.show_block=O({}),this.links=[],this.filtered_links=O([]),_t(()=>{this._org.active_building()&&this.timeout("update_links",()=>this.updateFilteredLinks(),500);});}get feature_list(){return this._settings.get("app.features")||[]}get feature_groups(){return this._settings.get("app.feature_groups")||{}}get is_admin(){let e=Rr$1().groups||[],t=this._settings.get("app.admin_group")||"admin";return e.includes(t)||e.includes("placeos_admin")||e.includes("placeos_support")}async ngOnInit(){await this._org.waitUntilInitialised(),this.links=[{name:gi$1("APP.CONCIERGE.MENU_BOOKINGS"),icon:"add_circle",children:[{id:"spaces",name:gi$1("APP.CONCIERGE.MENU_ROOM_BOOKINGS"),route:["/book/rooms"]},{id:"desks",name:gi$1("APP.CONCIERGE.MENU_DESK_BOOKINGS"),route:["/book/desks/events"]},{id:"parking",name:gi$1("APP.CONCIERGE.MENU_PARKING_BOOKINGS"),route:["/book/parking/events"]},{id:"parking-bookings",name:gi$1("APP.CONCIERGE.MENU_PARKING_BOOKINGS"),route:["/book/parking/events"]},{id:"lockers",name:gi$1("APP.CONCIERGE.MENU_LOCKER_BOOKINGS"),route:["/book/lockers/events"]},{id:"assets",name:gi$1("APP.CONCIERGE.MENU_ASSET_BOOKINGS"),route:["/book/assets/list/requests"]},{id:"catering",name:gi$1("APP.CONCIERGE.MENU_CATERING_BOOKINGS"),route:["/book/catering/orders"]},{id:"visitors",name:gi$1("APP.CONCIERGE.MENU_VISITOR_BOOKINGS"),route:["/book/visitors"]},{id:"visitor-rules",name:gi$1("APP.CONCIERGE.MENU_VISITOR_RULES"),route:["/book/visitors/rules"]}]},{id:"facilities",name:gi$1("APP.CONCIERGE.MENU_MANAGEMENT"),icon:"place",children:[{id:"zones",name:gi$1("APP.CONCIERGE.MENU_MANAGE_ZONES"),route:["/zone-management"]},{id:"spaces",name:gi$1("APP.CONCIERGE.MENU_MANAGE_ROOMS"),route:["/room-management"]},{id:"desks",name:gi$1("APP.CONCIERGE.MENU_MANAGE_DESKS"),route:["/book/desks/manage"]},{id:"parking",name:gi$1("APP.CONCIERGE.MENU_MANAGE_PARKING"),route:["/book/parking/manage"]},{id:"parking-manage",name:gi$1("APP.CONCIERGE.MENU_MANAGE_PARKING"),route:["/book/parking/manage"]},{id:"lockers",name:gi$1("APP.CONCIERGE.MENU_MANAGE_LOCKERS"),route:["/book/lockers/manage"]},{id:"catering",name:gi$1("APP.CONCIERGE.MENU_MANAGE_CATERING"),route:["/book/catering/menu"]},{id:"points",name:gi$1("APP.CONCIERGE.MENU_MANAGE_POINTS"),route:["/points-management"]},{id:"emergency-contacts",name:gi$1("APP.CONCIERGE.MENU_MANAGE_CONTACTS"),icon:"assignment_ind",route:["/users/staff/emergency-contacts"]},{id:"signage",name:gi$1("APP.CONCIERGE.MENU_MANAGE_SIGNAGE"),route:["/signage"]},{id:"points-of-interest",name:gi$1("APP.CONCIERGE.MENU_MANAGE_MAP_FEATURES"),route:["/points-of-interest"]},{id:"url-management",name:gi$1("APP.CONCIERGE.MENU_MANAGE_URLS"),route:["/url-management"]},{id:"email-templates",name:gi$1("APP.CONCIERGE.MENU_MANAGE_EMAILS"),route:["/email-templates"]},{id:"deals-n-offers",name:gi$1("APP.CONCIERGE.MENU_MANAGE_DEALS"),route:["/deals-n-offers"]}]},{id:"assets",name:gi$1("APP.CONCIERGE.MENU_ASSETS"),route:["/book/assets/list/items"],icon:"vibration"},{id:"internal-users",name:gi$1("APP.CONCIERGE.MENU_USER_LIST"),icon:"assignment_ind",route:["/users/staff"]},{id:"events",name:gi$1("APP.CONCIERGE.MENU_EVENTS"),route:["/entertainment/events"],icon:"confirmation_number"},{id:"surveys",name:gi$1("APP.CONCIERGE.MENU_SURVEYS"),route:["/surveys"],icon:"add_reaction"},{_id:"reports",name:gi$1("APP.CONCIERGE.MENU_REPORTS"),icon:"analytics",children:[{id:"attendance-report",name:gi$1("APP.CONCIERGE.MENU_REPORT_SITE_ATTENDANCE"),route:["/reports/attendance"]},{id:"booking-report",name:gi$1("APP.CONCIERGE.MENU_REPORT_ROOMS"),route:["/reports/bookings"]},{id:"desk-report",name:gi$1("APP.CONCIERGE.MENU_REPORT_DESKS"),route:["/reports/desks"]},{id:"parking-report",name:gi$1("APP.CONCIERGE.MENU_REPORT_PARKING"),route:["/reports/parking"]},{id:"lockers-report",name:gi$1("APP.CONCIERGE.MENU_REPORT_LOCKERS"),route:["/reports/lockers"]},{id:"catering-report",name:gi$1("APP.CONCIERGE.MENU_REPORT_CATERING"),route:["/reports/catering"]},{id:"contact-tracing-report",name:gi$1("APP.CONCIERGE.MENU_REPORT_CONTACT_TRACING"),route:["/reports/contact-tracing"]},{id:"assets-report",name:gi$1("APP.CONCIERGE.MENU_REPORT_ASSETS"),route:["/reports/assets"]},{id:"visitors-report",name:gi$1("APP.CONCIERGE.MENU_REPORT_VISITORS"),route:["/reports/visitors"]}]}],this.updateFilteredLinks(),this.timeout("update_inview",()=>this._moveActiveLinkIntoView(),50),this.timeout("update_links",()=>this.updateFilteredLinks(),500);}_isFeatureAvailable(e){if(e.startsWith("*"))return  true;let t=this.feature_list.includes(e),r=this.feature_groups[e]||[],o=Rr$1().groups;return !!(t&&(this.is_admin||!r.length||o.find(c=>r.includes(c))))}updateFilteredLinks(){let e=this._settings.get("app.custom_reports")||[];if(e.length&&this.links.find(t=>t._id==="reports")){let t=this.links.find(r=>r._id==="reports");t.children=Dr$1(t.children.concat(e.map(r=>m$1(l({},r),{id:`*${r.id}`,route:["/reports",r.id]}))),"id");}if(this.filtered_links.set(this.links.map(t=>m$1(l({},t),{children:t.children?t.children.filter(r=>this._isFeatureAvailable(r.id)):null})).filter(t=>(!t.id||t.id==="home"||this._isFeatureAvailable(t.id))&&t.route||t.children?.length)),this.filtered_links().find(t=>t.id==="home")){let t=this.filtered_links().find(r=>r.id==="home");t.route=this._settings.get("app.default_route")||["/"];}this.is_admin||this.filtered_links.update(t=>t.filter(r=>r.id!=="facilities"));}toggleBlock(e){this.show_block.update(t=>m$1(l({},t),{[e]:!t[e]}));}isBlockCollapsed(e){return !!this.show_block()[e]}_moveActiveLinkIntoView(){let e=this._element_ref.nativeElement.querySelector("a.active");e&&e.scrollIntoView({block:"center",behavior:"instant"});}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["app-sidebar"]],features:[Re],decls:3,vars:0,consts:[[1,"border-base-200","h-full","w-64","overflow-auto","border-r","py-2","pr-3"],["matRipple","","routerLinkActive","active",1,"hover:bg-base-200","my-1","flex","w-full","items-center","space-x-2","rounded-r-full","p-1",3,"routerLink"],[1,"text-2xl","opacity-60"],[1,"font-medium"],["matRipple","",1,"hover:bg-base-200","my-1","flex","w-full","items-center","space-x-2","rounded-r-full","p-1"],[1,"w-full","overflow-hidden"],["matRipple","",1,"hover:bg-base-200","my-1","flex","w-full","items-center","space-x-2","rounded-r-full","p-1",3,"click"],[1,"flex-1","text-left","font-medium"],[1,"text-2xl"],["routerLinkActive","active",1,"hover:bg-base-200","my-1","flex","w-full","items-center","space-x-2","rounded-r-full","p-1",3,"routerLink"]],template:function(t,r){t&1&&(ke(0,"div",0),QK(1,Du,2,1,null,null,Tu),Ue()),t&2&&(ue(),XK(r.filtered_links()));},dependencies:[rQ,cv,XZ,Fl$1,C0,xJe],styles:["[_nghost-%COMP%]{height:100%}a.active[_ngcontent-%COMP%]{background-color:var(--secondary);color:var(--secondary-content)}a.active[_ngcontent-%COMP%]:hover{color:var(--base-content);opacity:.75}"],data:{animation:[_Xe]}});}}return n})();var Nu=()=>["/"],Y1=(()=>{class n{constructor(){this._settings=m(Ks$1),this._theme=this._settings.theme_signal,this._logo_dark=this._settings.signal("app.logo_dark",{},true),this._logo_light=this._settings.signal("app.logo_light",{},true),this.logo_src=fe(()=>{let e=this.logo();return typeof e=="string"?e:e?.src||""}),this.logo=fe(()=>(this._theme()==="dark"?this._logo_dark():this._logo_light())||{}),this.user=Qee();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=Ee({type:n,selectors:[["app-topbar"]],decls:10,vars:4,consts:[[1,"border-base-200","flex","items-center","border-b","p-2"],[1,"w-64"],[3,"routerLink"],["auth","",1,"h-12",3,"source"],[1,"flex","flex-1","items-center","justify-end","space-x-2"],["btn","","icon","","matRipple",""],[1,"text-2xl"],[1,"mr-2"],[3,"user"]],template:function(t,r){t&1&&(ke(0,"div",0)(1,"div",1)(2,"a",2),Lt(3,"img",3),Ue()(),ke(4,"div",4)(5,"button",5)(6,"icon",6),pr(7,"notifications"),Ue()(),ke(8,"user-controls-sidebar",7),Lt(9,"a-user-avatar",8),Ue()()()),t&2&&(ue(2),An$1("routerLink",Y4(3,Nu)),ue(),An$1("source",r.logo_src()),ue(6),An$1("user",r.user()));},dependencies:[rQ,cv,Dr,Fl$1,C0,Rt,xJe,zl],styles:["[_nghost-%COMP%]{width:100%}"]});}}return n})();
export{As as A,Cl as C,Dr as D,E0 as E,Fg as F,Gi as G,It as I,Ls as L,Nr as N,Oo as O,Pi as P,Rt as R,Sl as S,Ui as U,Vo as V,Y1 as Y,ai as a,Ir as b,ci as c,di as d,Or as e,fl as f,Pg as g,hr as h,Er as i,Vg as j,kl as k,li as l,mt as m,Lc as n,oi as o,Pr as p,Ar as q,rt as r,ut as u,wl as w,yi as y,z1 as z};