import {m,c as qs$1,a as me,h9 as lee,v as ve,c2 as yZ,c3 as iv,r as kl$1,s as a0,p as _Xe,k as ke,F as Ft,B as Be,C as gr$1,M as he,P as Dn$1,aU as a4,i as io,t as tT,a$ as G,w,_ as _t,bk as ao$1,f as bi$1,br as Rr$1,al as m$1,am as l,aK as tQe,c8 as pZ,z as Re,I as f8,V as p8,ha as ZNe,cJ as Sh,hb as tB,hc as iB,hd as rB,he as nB,df as W$1,dq as ce,dr as oe,fk as Xs$1,fl as tXe,ds as It$1,fm as mm$1,j as aM,fz as qu,du as Tt,fx as Ii,dA as Bt$1,b0 as We,fy as Og$1,eM as Tr$1,hf as Yw,dv as v,dw as Jt,fA as R,fT as jQe,fU as zQe,e4 as sl$1,fG as Es$1,fH as zn$1,eU as xt,fD as ys,co as ne,eT as xe,eW as de,hg as Rg,bq as Nh,cG as Mh,dz as qE,hh as r0,hi as Ff,gD as Ye,fN as ct,fJ as ni$1,hj as n0,fp as qw,fV as Si,hk as ite,b6 as Et,dC as be,dE as Xd$1,aZ as Kt,$ as $e,H as Le,bL as GI,an as Kn$1,K as GE,bu as Ge,T as Fe$1,W as ot$1,hl as wg,fr as mce,U as Ne,dF as Pn$1,dG as Ae,dH as De,fs as Qr,E as E3,ft as gce,aY as gn,b4 as Zi,b5 as O,ba as H$1,gR as Ds$1,gX as hm$1,cC as Gt,fq as RL,gI as z,dt as Wo,dx as yn,dy as xl$1,a_ as Pe,fn as Me$1,gM as cm$1,gN as am$1,hm as ote,g6 as Qp,bM as Zx,g7 as Lp,ac as LD,d3 as Os$1,aC as BIe,aL as g7e,aM as m7e,y as net,aP as $3,D as Bp,O as FD,cs as MH,dV as M7e,X as oT,Y as Kc$1,af as iH,ag as yt,l as F3,c_ as qet,c$ as Yet,d0 as Wet,d1 as zet,d2 as Lle,Q as QJe,o as lle,J as u8,N as Fo$1,bv as Pa,f$ as nce,bw as nn,ad as qd$1,ae as Kd$1,q as qt,hn as NQ,ho as eOe,e as q,hp as jQ,hq as A1,h6 as A$1,hr as J0e,hs as FQ,ht as UE,hu as Qc$1,fw as B,hv as xi,g8 as Qt,g9 as gl,u as aOe,x as tOe,Z as ZQ,bI as VIe,a3 as Cn,n as no$1,a4 as fxe,hw as hxe,cX as mxe,d_ as ZJ,h4 as Axe,a6 as Sl,dT as Tl$1,dY as zo$1,hx as Yo,bi as Sr$1,bE as Ga,bj as gt,bD as Xi,aa as hy,bl as $ce,a5 as $6,av as UD,dW as pn,dB as rXe,dD as La,dd as kn,cN as Xe,cK as yR,hy as rl$1,ai as Us$1,hz as uv,fW as ym$1,ay as vt,aA as Zd$1,az as kD,fv as Lt$1,fP as Qs$1,fR as Zs$1,fS as vm$1,fE as K,fO as Or$1,hA as Pp,aB as gae,aR as rT,at as gB,bm as AJe,bn as IJe,G as s5,S as c5,bU as d4,bf as k,hB as MQ,ah as Fn$1,ab as v4,aw as YL,hC as xo$1,b1 as Qd$1,gH as P$1,hD as db,h as hee,eY as Cr$1,f2 as rm$1,hE as Xj,hF as fOe,bS as _et,cq as MD,cr as xD,hG as PU,hH as ov,hI as dRe,hJ as qU,hK as ZU,hL as Fc$1,cO as Li$1,hM as Ev,e2 as rw,hN as RV,a8 as tH,hO as IH,gQ as ef,fo as je,hP as Ele,eb as Pke,hQ as dH,a9 as nb,au as ZL,ax as KL,hR as lt,cx as v3,hS as Mt,hT as Ji,d6 as sn,d7 as VE,aS as U_,aT as B_,d8 as mn,ao as Vp,fX as Pt,cy as Pq,b8 as J8,hU as Lq,dl as d8,b9 as XA,bX as AE}from'./main-XTR2DCAY.js';function Ts(n,i){let e=Bl(i)?new i(0):Xe(i,0);return e.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),e.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e}function Bl(n){return typeof n=="function"&&n.prototype?.constructor===n}var Ul=10,Mn=class{subPriority=0;validate(i,e){return  true}},wn=class extends Mn{constructor(i,e,t,r,o){super(),this.value=i,this.validateValue=e,this.setValue=t,this.priority=r,o&&(this.subPriority=o);}validate(i,e){return this.validateValue(i,this.value,e)}set(i,e,t){return this.setValue(i,e,this.value,t)}},Tn=class extends Mn{priority=Ul;subPriority=-1;constructor(i,e){super(),this.context=i||(t=>Xe(e,t));}set(i,e){return e.timestampIsSet?i:Xe(i,Ts(i,this.context))}};var E=class{run(i,e,t,r){let o=this.parse(i,e,t,r);return o?{setter:new wn(o.value,this.validate,this.set,this.priority,this.subPriority),rest:o.rest}:null}validate(i,e,t){return  true}};var En=class extends E{priority=140;parse(i,e,t){switch(e){case "G":case "GG":case "GGG":return t.era(i,{width:"abbreviated"})||t.era(i,{width:"narrow"});case "GGGGG":return t.era(i,{width:"narrow"});default:return t.era(i,{width:"wide"})||t.era(i,{width:"abbreviated"})||t.era(i,{width:"narrow"})}}set(i,e,t){return e.era=t,i.setFullYear(t,0,1),i.setHours(0,0,0,0),i}incompatibleTokens=["R","u","t","T"]};var W={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},Ke={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function ee(n,i){return n&&{value:i(n.value),rest:n.rest}}function H(n,i){let e=i.match(n);return e?{value:parseInt(e[0],10),rest:i.slice(e[0].length)}:null}function qe(n,i){let e=i.match(n);if(!e)return null;if(e[0]==="Z")return {value:0,rest:i.slice(1)};let t=e[1]==="+"?1:-1,r=e[2]?parseInt(e[2],10):0,o=e[3]?parseInt(e[3],10):0,c=e[5]?parseInt(e[5],10):0;return {value:t*(r*PU+o*ov+c*dRe),rest:i.slice(e[0].length)}}function Sn(n){return H(W.anyDigitsSigned,n)}function P(n,i){switch(n){case 1:return H(W.singleDigit,i);case 2:return H(W.twoDigits,i);case 3:return H(W.threeDigits,i);case 4:return H(W.fourDigits,i);default:return H(new RegExp("^\\d{1,"+n+"}"),i)}}function ii(n,i){switch(n){case 1:return H(W.singleDigitSigned,i);case 2:return H(W.twoDigitsSigned,i);case 3:return H(W.threeDigitsSigned,i);case 4:return H(W.fourDigitsSigned,i);default:return H(new RegExp("^-?\\d{1,"+n+"}"),i)}}function ni(n){switch(n){case "morning":return 4;case "evening":return 17;case "pm":case "noon":case "afternoon":return 12;default:return 0}}function In(n,i){let e=i>0,t=e?i:1-i,r;if(t<=50)r=n||100;else {let o=t+50,c=Math.trunc(o/100)*100,h=n>=o%100;r=n+c-(h?100:0);}return e?r:1-r}function Rn(n){return n%400===0||n%4===0&&n%100!==0}var On=class extends E{priority=130;incompatibleTokens=["Y","R","u","w","I","i","e","c","t","T"];parse(i,e,t){let r=o=>({year:o,isTwoDigitYear:e==="yy"});switch(e){case "y":return ee(P(4,i),r);case "yo":return ee(t.ordinalNumber(i,{unit:"year"}),r);default:return ee(P(e.length,i),r)}}validate(i,e){return e.isTwoDigitYear||e.year>0}set(i,e,t){let r=i.getFullYear();if(t.isTwoDigitYear){let c=In(t.year,r);return i.setFullYear(c,0,1),i.setHours(0,0,0,0),i}let o=!("era"in e)||e.era===1?t.year:1-t.year;return i.setFullYear(o,0,1),i.setHours(0,0,0,0),i}};var Dn=class extends E{priority=130;parse(i,e,t){let r=o=>({year:o,isTwoDigitYear:e==="YY"});switch(e){case "Y":return ee(P(4,i),r);case "Yo":return ee(t.ordinalNumber(i,{unit:"year"}),r);default:return ee(P(e.length,i),r)}}validate(i,e){return e.isTwoDigitYear||e.year>0}set(i,e,t,r){let o=uv(i,r);if(t.isTwoDigitYear){let h=In(t.year,o);return i.setFullYear(h,0,r.firstWeekContainsDate),i.setHours(0,0,0,0),Us$1(i,r)}let c=!("era"in e)||e.era===1?t.year:1-t.year;return i.setFullYear(c,0,r.firstWeekContainsDate),i.setHours(0,0,0,0),Us$1(i,r)}incompatibleTokens=["y","R","u","Q","q","M","L","I","d","D","i","t","T"]};var Nn=class extends E{priority=130;parse(i,e){return e==="R"?ii(4,i):ii(e.length,i)}set(i,e,t){let r=Xe(i,0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),rl$1(r)}incompatibleTokens=["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]};var An=class extends E{priority=130;parse(i,e){return e==="u"?ii(4,i):ii(e.length,i)}set(i,e,t){return i.setFullYear(t,0,1),i.setHours(0,0,0,0),i}incompatibleTokens=["G","y","Y","R","w","I","i","e","c","t","T"]};var Pn=class extends E{priority=120;parse(i,e,t){switch(e){case "Q":case "QQ":return P(e.length,i);case "Qo":return t.ordinalNumber(i,{unit:"quarter"});case "QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"})||t.quarter(i,{width:"narrow",context:"formatting"});case "QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});default:return t.quarter(i,{width:"wide",context:"formatting"})||t.quarter(i,{width:"abbreviated",context:"formatting"})||t.quarter(i,{width:"narrow",context:"formatting"})}}validate(i,e){return e>=1&&e<=4}set(i,e,t){return i.setMonth((t-1)*3,1),i.setHours(0,0,0,0),i}incompatibleTokens=["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]};var Fn=class extends E{priority=120;parse(i,e,t){switch(e){case "q":case "qq":return P(e.length,i);case "qo":return t.ordinalNumber(i,{unit:"quarter"});case "qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"})||t.quarter(i,{width:"narrow",context:"standalone"});case "qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});default:return t.quarter(i,{width:"wide",context:"standalone"})||t.quarter(i,{width:"abbreviated",context:"standalone"})||t.quarter(i,{width:"narrow",context:"standalone"})}}validate(i,e){return e>=1&&e<=4}set(i,e,t){return i.setMonth((t-1)*3,1),i.setHours(0,0,0,0),i}incompatibleTokens=["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]};var Vn=class extends E{incompatibleTokens=["Y","R","q","Q","L","w","I","D","i","e","c","t","T"];priority=110;parse(i,e,t){let r=o=>o-1;switch(e){case "M":return ee(H(W.month,i),r);case "MM":return ee(P(2,i),r);case "Mo":return ee(t.ordinalNumber(i,{unit:"month"}),r);case "MMM":return t.month(i,{width:"abbreviated",context:"formatting"})||t.month(i,{width:"narrow",context:"formatting"});case "MMMMM":return t.month(i,{width:"narrow",context:"formatting"});default:return t.month(i,{width:"wide",context:"formatting"})||t.month(i,{width:"abbreviated",context:"formatting"})||t.month(i,{width:"narrow",context:"formatting"})}}validate(i,e){return e>=0&&e<=11}set(i,e,t){return i.setMonth(t,1),i.setHours(0,0,0,0),i}};var Ln=class extends E{priority=110;parse(i,e,t){let r=o=>o-1;switch(e){case "L":return ee(H(W.month,i),r);case "LL":return ee(P(2,i),r);case "Lo":return ee(t.ordinalNumber(i,{unit:"month"}),r);case "LLL":return t.month(i,{width:"abbreviated",context:"standalone"})||t.month(i,{width:"narrow",context:"standalone"});case "LLLLL":return t.month(i,{width:"narrow",context:"standalone"});default:return t.month(i,{width:"wide",context:"standalone"})||t.month(i,{width:"abbreviated",context:"standalone"})||t.month(i,{width:"narrow",context:"standalone"})}}validate(i,e){return e>=0&&e<=11}set(i,e,t){return i.setMonth(t,1),i.setHours(0,0,0,0),i}incompatibleTokens=["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]};function Es(n,i,e){let t=W$1(n,e?.in),r=ZU(t,e)-i;return t.setDate(t.getDate()-r*7),W$1(t,e?.in)}var Bn=class extends E{priority=100;parse(i,e,t){switch(e){case "w":return H(W.week,i);case "wo":return t.ordinalNumber(i,{unit:"week"});default:return P(e.length,i)}}validate(i,e){return e>=1&&e<=53}set(i,e,t,r){return Us$1(Es(i,t,r),r)}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","i","t","T"]};function Ss(n,i,e){let t=W$1(n,e?.in),r=qU(t,e)-i;return t.setDate(t.getDate()-r*7),t}var Un=class extends E{priority=100;parse(i,e,t){switch(e){case "I":return H(W.week,i);case "Io":return t.ordinalNumber(i,{unit:"week"});default:return P(e.length,i)}}validate(i,e){return e>=1&&e<=53}set(i,e,t){return rl$1(Ss(i,t))}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]};var zl=[31,28,31,30,31,30,31,31,30,31,30,31],Gl=[31,29,31,30,31,30,31,31,30,31,30,31],zn=class extends E{priority=90;subPriority=1;parse(i,e,t){switch(e){case "d":return H(W.date,i);case "do":return t.ordinalNumber(i,{unit:"date"});default:return P(e.length,i)}}validate(i,e){let t=i.getFullYear(),r=Rn(t),o=i.getMonth();return r?e>=1&&e<=Gl[o]:e>=1&&e<=zl[o]}set(i,e,t){return i.setDate(t),i.setHours(0,0,0,0),i}incompatibleTokens=["Y","R","q","Q","w","I","D","i","e","c","t","T"]};var Gn=class extends E{priority=90;subpriority=1;parse(i,e,t){switch(e){case "D":case "DD":return H(W.dayOfYear,i);case "Do":return t.ordinalNumber(i,{unit:"date"});default:return P(e.length,i)}}validate(i,e){let t=i.getFullYear();return Rn(t)?e>=1&&e<=366:e>=1&&e<=365}set(i,e,t){return i.setMonth(0,t),i.setHours(0,0,0,0),i}incompatibleTokens=["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]};function ri(n,i,e){let t=Li$1(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,o=W$1(n,e?.in),c=o.getDay(),x=(i%7+7)%7,R=7-r,F=i<0||i>6?i-(c+R)%7:(x+R)%7-(c+R)%7;return Fn$1(o,F,e)}var Hn=class extends E{priority=90;parse(i,e,t){switch(e){case "E":case "EE":case "EEE":return t.day(i,{width:"abbreviated",context:"formatting"})||t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"});case "EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case "EEEEEE":return t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"});default:return t.day(i,{width:"wide",context:"formatting"})||t.day(i,{width:"abbreviated",context:"formatting"})||t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"})}}validate(i,e){return e>=0&&e<=6}set(i,e,t,r){return i=ri(i,t,r),i.setHours(0,0,0,0),i}incompatibleTokens=["D","i","e","c","t","T"]};var Wn=class extends E{priority=90;parse(i,e,t,r){let o=c=>{let h=Math.floor((c-1)/7)*7;return (c+r.weekStartsOn+6)%7+h};switch(e){case "e":case "ee":return ee(P(e.length,i),o);case "eo":return ee(t.ordinalNumber(i,{unit:"day"}),o);case "eee":return t.day(i,{width:"abbreviated",context:"formatting"})||t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"});case "eeeee":return t.day(i,{width:"narrow",context:"formatting"});case "eeeeee":return t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"});default:return t.day(i,{width:"wide",context:"formatting"})||t.day(i,{width:"abbreviated",context:"formatting"})||t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"})}}validate(i,e){return e>=0&&e<=6}set(i,e,t,r){return i=ri(i,t,r),i.setHours(0,0,0,0),i}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]};var jn=class extends E{priority=90;parse(i,e,t,r){let o=c=>{let h=Math.floor((c-1)/7)*7;return (c+r.weekStartsOn+6)%7+h};switch(e){case "c":case "cc":return ee(P(e.length,i),o);case "co":return ee(t.ordinalNumber(i,{unit:"day"}),o);case "ccc":return t.day(i,{width:"abbreviated",context:"standalone"})||t.day(i,{width:"short",context:"standalone"})||t.day(i,{width:"narrow",context:"standalone"});case "ccccc":return t.day(i,{width:"narrow",context:"standalone"});case "cccccc":return t.day(i,{width:"short",context:"standalone"})||t.day(i,{width:"narrow",context:"standalone"});default:return t.day(i,{width:"wide",context:"standalone"})||t.day(i,{width:"abbreviated",context:"standalone"})||t.day(i,{width:"short",context:"standalone"})||t.day(i,{width:"narrow",context:"standalone"})}}validate(i,e){return e>=0&&e<=6}set(i,e,t,r){return i=ri(i,t,r),i.setHours(0,0,0,0),i}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]};function Is(n,i){let e=W$1(n,i?.in).getDay();return e===0?7:e}function Rs(n,i,e){let t=W$1(n,e?.in),r=Is(t,e),o=i-r;return Fn$1(t,o,e)}var Kn=class extends E{priority=90;parse(i,e,t){let r=o=>o===0?7:o;switch(e){case "i":case "ii":return P(e.length,i);case "io":return t.ordinalNumber(i,{unit:"day"});case "iii":return ee(t.day(i,{width:"abbreviated",context:"formatting"})||t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"}),r);case "iiiii":return ee(t.day(i,{width:"narrow",context:"formatting"}),r);case "iiiiii":return ee(t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"}),r);default:return ee(t.day(i,{width:"wide",context:"formatting"})||t.day(i,{width:"abbreviated",context:"formatting"})||t.day(i,{width:"short",context:"formatting"})||t.day(i,{width:"narrow",context:"formatting"}),r)}}validate(i,e){return e>=1&&e<=7}set(i,e,t){return i=Rs(i,t),i.setHours(0,0,0,0),i}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]};var qn=class extends E{priority=80;parse(i,e,t){switch(e){case "a":case "aa":case "aaa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"})||t.dayPeriod(i,{width:"narrow",context:"formatting"});case "aaaaa":return t.dayPeriod(i,{width:"narrow",context:"formatting"});default:return t.dayPeriod(i,{width:"wide",context:"formatting"})||t.dayPeriod(i,{width:"abbreviated",context:"formatting"})||t.dayPeriod(i,{width:"narrow",context:"formatting"})}}set(i,e,t){return i.setHours(ni(t),0,0,0),i}incompatibleTokens=["b","B","H","k","t","T"]};var $n=class extends E{priority=80;parse(i,e,t){switch(e){case "b":case "bb":case "bbb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"})||t.dayPeriod(i,{width:"narrow",context:"formatting"});case "bbbbb":return t.dayPeriod(i,{width:"narrow",context:"formatting"});default:return t.dayPeriod(i,{width:"wide",context:"formatting"})||t.dayPeriod(i,{width:"abbreviated",context:"formatting"})||t.dayPeriod(i,{width:"narrow",context:"formatting"})}}set(i,e,t){return i.setHours(ni(t),0,0,0),i}incompatibleTokens=["a","B","H","k","t","T"]};var Xn=class extends E{priority=80;parse(i,e,t){switch(e){case "B":case "BB":case "BBB":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"})||t.dayPeriod(i,{width:"narrow",context:"formatting"});case "BBBBB":return t.dayPeriod(i,{width:"narrow",context:"formatting"});default:return t.dayPeriod(i,{width:"wide",context:"formatting"})||t.dayPeriod(i,{width:"abbreviated",context:"formatting"})||t.dayPeriod(i,{width:"narrow",context:"formatting"})}}set(i,e,t){return i.setHours(ni(t),0,0,0),i}incompatibleTokens=["a","b","t","T"]};var Yn=class extends E{priority=70;parse(i,e,t){switch(e){case "h":return H(W.hour12h,i);case "ho":return t.ordinalNumber(i,{unit:"hour"});default:return P(e.length,i)}}validate(i,e){return e>=1&&e<=12}set(i,e,t){let r=i.getHours()>=12;return r&&t<12?i.setHours(t+12,0,0,0):!r&&t===12?i.setHours(0,0,0,0):i.setHours(t,0,0,0),i}incompatibleTokens=["H","K","k","t","T"]};var Qn=class extends E{priority=70;parse(i,e,t){switch(e){case "H":return H(W.hour23h,i);case "Ho":return t.ordinalNumber(i,{unit:"hour"});default:return P(e.length,i)}}validate(i,e){return e>=0&&e<=23}set(i,e,t){return i.setHours(t,0,0,0),i}incompatibleTokens=["a","b","h","K","k","t","T"]};var Zn=class extends E{priority=70;parse(i,e,t){switch(e){case "K":return H(W.hour11h,i);case "Ko":return t.ordinalNumber(i,{unit:"hour"});default:return P(e.length,i)}}validate(i,e){return e>=0&&e<=11}set(i,e,t){return i.getHours()>=12&&t<12?i.setHours(t+12,0,0,0):i.setHours(t,0,0,0),i}incompatibleTokens=["h","H","k","t","T"]};var Jn=class extends E{priority=70;parse(i,e,t){switch(e){case "k":return H(W.hour24h,i);case "ko":return t.ordinalNumber(i,{unit:"hour"});default:return P(e.length,i)}}validate(i,e){return e>=1&&e<=24}set(i,e,t){let r=t<=24?t%24:t;return i.setHours(r,0,0,0),i}incompatibleTokens=["a","b","h","H","K","t","T"]};var er=class extends E{priority=60;parse(i,e,t){switch(e){case "m":return H(W.minute,i);case "mo":return t.ordinalNumber(i,{unit:"minute"});default:return P(e.length,i)}}validate(i,e){return e>=0&&e<=59}set(i,e,t){return i.setMinutes(t,0,0),i}incompatibleTokens=["t","T"]};var tr=class extends E{priority=50;parse(i,e,t){switch(e){case "s":return H(W.second,i);case "so":return t.ordinalNumber(i,{unit:"second"});default:return P(e.length,i)}}validate(i,e){return e>=0&&e<=59}set(i,e,t){return i.setSeconds(t,0),i}incompatibleTokens=["t","T"]};var ir=class extends E{priority=30;parse(i,e){let t=r=>Math.trunc(r*Math.pow(10,-e.length+3));return ee(P(e.length,i),t)}set(i,e,t){return i.setMilliseconds(t),i}incompatibleTokens=["t","T"]};var nr=class extends E{priority=10;parse(i,e){switch(e){case "X":return qe(Ke.basicOptionalMinutes,i);case "XX":return qe(Ke.basic,i);case "XXXX":return qe(Ke.basicOptionalSeconds,i);case "XXXXX":return qe(Ke.extendedOptionalSeconds,i);default:return qe(Ke.extended,i)}}set(i,e,t){return e.timestampIsSet?i:Xe(i,i.getTime()-yR(i)-t)}incompatibleTokens=["t","T","x"]};var rr=class extends E{priority=10;parse(i,e){switch(e){case "x":return qe(Ke.basicOptionalMinutes,i);case "xx":return qe(Ke.basic,i);case "xxxx":return qe(Ke.basicOptionalSeconds,i);case "xxxxx":return qe(Ke.extendedOptionalSeconds,i);default:return qe(Ke.extended,i)}}set(i,e,t){return e.timestampIsSet?i:Xe(i,i.getTime()-yR(i)-t)}incompatibleTokens=["t","T","X"]};var or=class extends E{priority=40;parse(i){return Sn(i)}set(i,e,t){return [Xe(i,t*1e3),{timestampIsSet:true}]}incompatibleTokens="*"};var ar=class extends E{priority=20;parse(i){return Sn(i)}set(i,e,t){return [Xe(i,t),{timestampIsSet:true}]}incompatibleTokens="*"};var Os={G:new En,y:new On,Y:new Dn,R:new Nn,u:new An,Q:new Pn,q:new Fn,M:new Vn,L:new Ln,w:new Bn,I:new Un,d:new zn,D:new Gn,E:new Hn,e:new Wn,c:new jn,i:new Kn,a:new qn,b:new $n,B:new Xn,h:new Yn,H:new Qn,K:new Zn,k:new Jn,m:new er,s:new tr,S:new ir,X:new nr,x:new rr,t:new or,T:new ar};var Hl=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Wl=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,jl=/^'([^]*?)'?$/,Kl=/''/g,ql=/\S/,$l=/[a-zA-Z]/;function Ds(n,i,e,t){let r=()=>Xe(e,NaN),o=ZNe(),c=o.locale??Sh,h=o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,x=o.weekStartsOn??o.locale?.options?.weekStartsOn??0;let R={firstWeekContainsDate:h,weekStartsOn:x,locale:c},F=[new Tn(t?.in,e)],ae=i.match(Wl).map(G=>{let te=G[0];if(te in tB){let Le=tB[te];return Le(G,c.formatLong)}return G}).join("").match(Hl),ue=[];for(let G of ae){iB(G)&&rB(G,i,n),nB(G)&&rB(G,i,n);let te=G[0],Le=Os[te];if(Le){let{incompatibleTokens:Go}=Le;if(Array.isArray(Go)){let Ho=ue.find(Wo=>Go.includes(Wo.token)||Wo.token===te);if(Ho)throw new RangeError(`The format string mustn't contain \`${Ho.fullToken}\` and \`${G}\` at the same time`)}else if(Le.incompatibleTokens==="*"&&ue.length>0)throw new RangeError(`The format string mustn't contain \`${G}\` and any other token at the same time`);ue.push({token:te,fullToken:G});let Pr=Le.run(n,G,c.match,R);if(!Pr)return r();F.push(Pr.setter),n=Pr.rest;}else {if(te.match($l))throw new RangeError("Format string contains an unescaped latin alphabet character `"+te+"`");if(G==="''"?G="'":te==="'"&&(G=Xl(G)),n.indexOf(G)===0)n=n.slice(G.length);else return r()}}if(n.length>0&&ql.test(n))return r();let pt=F.map(G=>G.priority).sort((G,te)=>te-G).filter((G,te,Le)=>Le.indexOf(G)===te).map(G=>F.filter(te=>te.priority===G).sort((te,Le)=>Le.subPriority-te.subPriority)).map(G=>G[0]),st=W$1(e,t?.in);if(isNaN(+st))return r();let xi={};for(let G of pt){if(!G.validate(st,R))return r();let te=G.set(st,xi,R);Array.isArray(te)?(st=te[0],Object.assign(xi,te[1])):st=te;}return st}function Xl(n){return n.match(jl)[1].replace(Kl,"'")}var Yl=["determinateSpinner"];function Ql(n,i){if(n&1&&(GI(),ke(0,"svg",11),Ft(1,"circle",12),Be()),n&2){let e=vt();Ge("viewBox",e._viewBox()),he(),LD("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),Ge("r",e._circleRadius());}}var Zl=new v("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Ns})}),Ns=100,Jl=10,oi=(()=>{class n{_elementRef=m(G);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e;}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=m(Zl),t=ote(),r=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&r.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth));}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0));}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0;}_diameter=Ns;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0;}_strokeWidth;_circleRadius(){return (this.diameter-Jl)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return `0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=ve({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,r){if(t&1&&Pn$1(Yl,5),t&2){let o;Ae(o=De())&&(r._determinateCircle=o.first);}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,r){t&2&&(Ge("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),Os$1("mat-"+r.color),LD("width",r.diameter,"px")("height",r.diameter,"px")("--mat-progress-spinner-size",r.diameter+"px")("--mat-progress-spinner-active-indicator-width",r.diameter+"px"),Ne("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"));},inputs:{color:"color",mode:"mode",value:[2,"value","value",Xd$1],diameter:[2,"diameter","diameter",Xd$1],strokeWidth:[2,"strokeWidth","strokeWidth",Xd$1]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,r){if(t&1&&(Kn$1(0,Ql,2,8,"ng-template",null,0,Vp),ke(2,"div",2,1),GI(),ke(4,"svg",3),Ft(5,"circle",4),Be()(),Zx(),ke(6,"div",5)(7,"div",6)(8,"div",7),Lp(9,8),Be(),ke(10,"div",9),Lp(11,8),Be(),ke(12,"div",10),Lp(13,8),Be()()()),t&2){let o=GE(1);he(4),Ge("viewBox",r._viewBox()),he(),LD("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),Ge("r",r._circleRadius()),he(4),Dn$1("ngTemplateOutlet",o),he(2),Dn$1("ngTemplateOutlet",o),he(2),Dn$1("ngTemplateOutlet",o);}},dependencies:[Qp],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2})}return n})();var St=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ce({type:n});static \u0275inj=oe({imports:[It$1]})}return n})();var ec=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],tc=["mat-icon, [matMenuItemIcon]","*"];function ic(n,i){n&1&&(GI(),ke(0,"svg",2),Ft(1,"polygon",3),Be());}var nc=["*"];function rc(n,i){if(n&1){let e=kD();sn(0,"div",0),VE("click",function(){U_(e);let r=vt();return B_(r.closed.emit("click"))})("animationstart",function(r){U_(e);let o=vt();return B_(o._onAnimationStart(r.animationName))})("animationend",function(r){U_(e);let o=vt();return B_(o._onAnimationDone(r.animationName))})("animationcancel",function(r){U_(e);let o=vt();return B_(o._onAnimationDone(r.animationName))}),sn(1,"div",1),Pe(2),mn()();}if(n&2){let e=vt();Os$1(e._classList),Ne("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),kn("id",e.panelId),Ge("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null);}}var to=new v("MAT_MENU_PANEL"),mt=(()=>{class n{_elementRef=m(G);_document=m(z);_focusMonitor=m(Wo);_parentMenu=m(to,{optional:true});_changeDetectorRef=m(Tt);role="menuitem";disabled=false;disableRipple=false;_hovered=new R;_focused=new R;_highlighted=false;_triggersSubmenu=false;constructor(){m(yn).load(xl$1),this._parentMenu?.addItem?.(this);}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this);}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,false);}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete();}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation());}_handleMouseEnter(){this._hovered.next(this);}getLabel(){let e=this._elementRef.nativeElement.cloneNode(true),t=e.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<t.length;r++)t[r].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck();}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck();}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=ve({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,r){t&1&&$e("click",function(c){return r._checkDisabled(c)})("mouseenter",function(){return r._handleMouseEnter()}),t&2&&(Ge("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),Ne("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu));},inputs:{role:"role",disabled:[2,"disabled","disabled",be],disableRipple:[2,"disableRipple","disableRipple",be]},exportAs:["matMenuItem"],ngContentSelectors:tc,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,r){t&1&&(Kt(ec),Pe(0),ke(1,"span",0),Pe(2,1),Be(),Ft(3,"div",1),Le(4,ic,2,0,":svg:svg",2)),t&2&&(he(3),Dn$1("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),he(),Fe$1(r._triggersSubmenu?4:-1));},dependencies:[a0],encapsulation:2})}return n})();var oc=new v("MatMenuContent");var ac=new v("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:false,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Jr="_mat-menu-enter",sr="_mat-menu-exit",rt=(()=>{class n{_elementRef=m(G);_changeDetectorRef=m(Tt);_injector=m(H$1);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Jt();_allItems;_directDescendantItems=new Ds$1;_classList={};_panelAnimationState="void";_animationDone=new R;_isAnimating=w(false);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses();}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses();}templateRef;items;lazyContent;overlapTrigger=false;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,r=l({},this._classList);t&&t.length&&t.split(" ").forEach(o=>{r[o]=false;}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{r[o]=true;}),this._elementRef.nativeElement.className=""),this._classList=r;}_previousPanelClass="";get classList(){return this.panelClass}set classList(e){this.panelClass=e;}closed=new ne;close=this.closed;panelId=m(Bt$1).getId("mat-menu-panel-");constructor(){let e=m(ac);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop;}ngOnInit(){this.setPositionClasses();}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new hm$1(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(zn$1(this._directDescendantItems),xt(e=>ys(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let r=e.toArray(),o=Math.max(0,Math.min(r.length-1,t.activeItemIndex||0));r[o]&&!r[o].disabled?t.setActiveItem(o):t.setNextItemActive();}});}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout);}_hovered(){return this._directDescendantItems.changes.pipe(zn$1(this._directDescendantItems),xt(t=>ys(...t.map(r=>r._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,r=this._keyManager;switch(t){case 27:ni$1(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Gt(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(e).setFirstItemActive(),!r.activeItem&&t&&t.focus();}},{injector:this._injector});}resetActiveItem(){this._keyManager.setActiveItem(-1);}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=m$1(l({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck();}_onAnimationDone(e){let t=e===sr;(t||e===Jr)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(false));}_onAnimationStart(e){(e===Jr||e===sr)&&this._isAnimating.set(true);}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0);}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(sr),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?Jr:sr);}),this._changeDetectorRef.markForCheck();}_updateDirectDescendants(){this._allItems.changes.pipe(zn$1(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges();});}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=ve({type:n,selectors:[["mat-menu"]],contentQueries:function(t,r,o){if(t&1&&Qr(o,oc,5)(o,mt,5)(o,mt,4),t&2){let c;Ae(c=De())&&(r.lazyContent=c.first),Ae(c=De())&&(r._allItems=c),Ae(c=De())&&(r.items=c);}},viewQuery:function(t,r){if(t&1&&Pn$1(Pt,5),t&2){let o;Ae(o=De())&&(r.templateRef=o.first);}},hostVars:3,hostBindings:function(t,r){t&2&&Ge("aria-label",null)("aria-labelledby",null)("aria-describedby",null);},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",be],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:be(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[ot$1([{provide:to,useExisting:n}])],ngContentSelectors:nc,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,r){t&1&&(Kt(),RL(0,rc,3,12,"ng-template"));},styles:[`mat-menu {
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
`],encapsulation:2})}return n})(),sc=new v("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=m(H$1);return ()=>ym$1(n)}});var ai=new WeakMap,lc=(()=>{class n{_canHaveBackdrop;_element=m(G);_viewContainerRef=m(Lt$1);_menuItemInstance=m(mt,{optional:true,self:true});_dir=m(Ii,{optional:true});_focusMonitor=m(Wo);_ngZone=m(B);_injector=m(H$1);_scrollStrategy=m(sc);_changeDetectorRef=m(Tt);_animationsDisabled=Jt();_portal;_overlayRef=null;_menuOpen=false;_closingActionsSubscription=Me$1.EMPTY;_menuCloseSubscription=Me$1.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t);})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()));}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=m(to,{optional:true});this._parentMaterialMenu=t instanceof rt?t:void 0;}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&ai.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null);}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return !!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit();}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let r=ai.get(t);ai.set(t,this),r&&r!==this&&r._closeMenu();let o=this._createOverlay(t),c=o.getConfig(),h=c.positionStrategy;this._setPosition(t,h),this._canHaveBackdrop?c.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:c.hasBackdrop=t.hasBackdrop??false,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(true),t instanceof rt&&(t._setIsOpen(true),t._directDescendantItems.changes.pipe(Ye(t.close)).subscribe(()=>{h.withLockedPosition(false).reapplyLastPosition(),h.withLockedPosition(true);}));}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t);}_destroyMenu(e){let t=this._overlayRef,r=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof rt&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(ct(1)).subscribe(()=>{t.detach(),ai.has(r)||r.lazyContent?.detach();}),r._setIsOpen(false)):(t.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&ai.delete(r),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(false));}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck());}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Qs$1(this._injector,t),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof rt&&this._menu._handleKeydown(r);});}return this._overlayRef}_getOverlayConfig(e){return new Zs$1({positionStrategy:vm$1(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let o=r.connectionPair.overlayX==="start"?"after":"before",c=r.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,c);});});}_setPosition(e,t){let[r,o]=e.xPosition==="before"?["end","start"]:["start","end"],[c,h]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[x,R]=[c,h],[F,ae]=[r,o],ue=0;if(this._triggersSubmenu()){if(ae=r=e.xPosition==="before"?"start":"end",o=F=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let pt=this._parentMaterialMenu.items.first;this._parentInnerPadding=pt?pt._getHostElement().offsetTop:0;}ue=c==="bottom"?this._parentInnerPadding:-this._parentInnerPadding;}}else e.overlapTrigger||(x=c==="top"?"bottom":"top",R=h==="top"?"bottom":"top");t.withPositions([{originX:r,originY:x,overlayX:F,overlayY:c,offsetY:ue},{originX:o,originY:x,overlayX:ae,overlayY:c,offsetY:ue},{originX:r,originY:R,overlayX:F,overlayY:h,offsetY:-ue},{originX:o,originY:R,overlayX:ae,overlayY:h,offsetY:-ue}]);}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:K(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(xe(c=>this._menuOpen&&c!==this._menuItemInstance)):K();return ys(e,r,o,t)}_getPortal(e){return (!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Or$1(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return ai.get(e)===this}_triggerIsAriaDisabled(){return be(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Pp();};static \u0275dir=O({type:n})}return n})(),ut=(()=>{class n extends lc{_cleanupTouchstart;_hoverSubscription=Me$1.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e;}get menu(){return this._menu}set menu(e){this._menu=e;}menuData;restoreFocus=true;menuOpened=new ne;onMenuOpen=this.menuOpened;menuClosed=new ne;onMenuClose=this.menuClosed;constructor(){super(true);let e=m(We);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{cm$1(t)||(this._openedBy="touch");},{passive:true});}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(true);}closeMenu(){this._closeMenu();}updatePosition(){this._overlayRef?.updatePosition();}ngAfterContentInit(){this._handleHover();}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe();}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){am$1(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault());}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu());}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu();}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(false));}));}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,r){t&1&&$e("click",function(c){return r._handleClick(c)})("mousedown",function(c){return r._handleMousedown(c)})("keydown",function(c){return r._handleKeydown(c)}),t&2&&Ge("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu?.panelId:null);},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[Re]})}return n})();var si=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ce({type:n});static \u0275inj=oe({imports:[kl$1,Xs$1,It$1,mm$1]})}return n})();var Ni=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new R;constructor(i=false,e,t=true,r){this._multiple=i,this._emitChanges=t,this.compareWith=r,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0);}select(...i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=true){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return !this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i);}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[]);}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i));}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i));}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i));}_verifyValueAssignment(i){i.length>1&&this._multiple;}_hasQueuedChanges(){return !!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var no=(()=>{class n{_listeners=[];notify(e,t){for(let r of this._listeners)r(e,t);}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t);}}ngOnDestroy(){this._listeners=[];}static \u0275fac=function(t){return new(t||n)};static \u0275prov=P$1({token:n,factory:n.\u0275fac})}return n})();var dc=["trigger"],mc=["panel"],uc=[[["mat-select-trigger"]],"*"],pc=["mat-select-trigger","*"];function hc(n,i){if(n&1&&(ke(0,"span",4),gr$1(1),Be()),n&2){let e=vt();he(),Zd$1(e.placeholder);}}function _c(n,i){n&1&&Pe(0);}function fc(n,i){if(n&1&&(ke(0,"span",11),gr$1(1),Be()),n&2){let e=vt(2);he(),Zd$1(e.triggerValue);}}function gc(n,i){if(n&1&&(ke(0,"span",5),Le(1,_c,1,0)(2,fc,2,1,"span",11),Be()),n&2){let e=vt();he(),Fe$1(e.customTrigger?1:2);}}function bc(n,i){if(n&1){let e=kD();ke(0,"div",12,1),$e("keydown",function(r){U_(e);let o=vt();return B_(o._handleKeydown(r))}),Pe(2,1),Be();}if(n&2){let e=vt();Os$1(e.panelClass),Ne("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",e._parentFormField?.color==="primary")("mat-accent",e._parentFormField?.color==="accent")("mat-warn",e._parentFormField?.color==="warn")("mat-undefined",!e._parentFormField?.color),Ge("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby());}}var vc=new v("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=m(H$1);return ()=>ym$1(n)}}),yc=new v("MAT_SELECT_CONFIG"),As=new v("MatSelectTrigger"),ro=class{source;value;constructor(i,e){this.source=i,this.value=e;}},li=(()=>{class n{_viewportRuler=m(qu);_changeDetectorRef=m(Tt);_elementRef=m(G);_dir=m(Ii,{optional:true});_idGenerator=m(Bt$1);_renderer=m(We);_parentFormField=m(Og$1,{optional:true});ngControl=m(Tr$1,{self:true,optional:true});_liveAnnouncer=m(Yw);_defaultOptions=m(yc,{optional:true});_animationsDisabled=Jt();_popoverLocation;_initialized=new R;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,o=jQe(e,this.options,this.optionGroups),c=t._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=zQe(c.offsetTop,c.offsetHeight,r.scrollTop,r.offsetHeight);}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0);}_getChangeEvent(e){return new ro(this,e)}_scrollStrategyFactory=m(vc);_panelOpen=false;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new R;_errorStateTracker;stateChanges=new R;disableAutomaticLabeling=true;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=false;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=false;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e);}_disableRipple=w(false);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties();}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??false;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next();}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(sl$1.required)??false}set required(e){this._required=e,this.stateChanges.next();}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e;}_multiple=false;disableOptionCentering=this._defaultOptions?.disableOptionCentering??false;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection();}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e);}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e;}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next();}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e;}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??false;optionSelectionChanges=Es$1(()=>{let e=this.options;return e?e.changes.pipe(zn$1(e),xt(()=>ys(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(xt(()=>this.optionSelectionChanges))});openedChange=new ne;_openedStream=this.openedChange.pipe(xe(e=>e),de(()=>{}));_closedStream=this.openedChange.pipe(xe(e=>!e),de(()=>{}));selectionChange=new ne;valueChange=new ne;constructor(){let e=m(Rg),t=m(Nh,{optional:true}),r=m(Mh,{optional:true}),o=m(new qE("tabindex"),{optional:true}),c=m(r0,{optional:true});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Ff(e,this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=c?.usePopover===false?null:"inline",this.id=this.id;}ngOnInit(){this._selectionModel=new Ni(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Ye(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges());});}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Ye(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect());}),this.options.changes.pipe(zn$1(null),Ye(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection();});}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby");}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState());}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass));}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete();}toggle(){this.panelOpen?this.close():this.open();}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=true,this._overlayDir.positionChange.pipe(ct(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled();}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(true)));}close(){this._panelOpen&&(this._panelOpen=false,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(false)));}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0;};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay());}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay();},200);e.classList.add("mat-select-panel-exit");}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck();}writeValue(e){this._assignValue(e);}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next();}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return "";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState();}_isRtl(){return this._dir?this._dir.value==="rtl":false}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e));}_handleClosedKeydown(e){let t=e.keyCode,r=t===40||t===38||t===37||t===39,o=t===13||t===32,c=this._keyManager;if(!c.isTyping()&&o&&!ni$1(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let h=this.selected;c.onKeydown(e);let x=this.selected;x&&h!==x&&this._liveAnnouncer.announce(x.viewValue,1e4);}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,o=r===40||r===38,c=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!c&&(r===13||r===32)&&t.activeItem&&!ni$1(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!c&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let h=this.options.some(x=>!x.disabled&&!x.selected);this.options.forEach(x=>{x.disabled||(h?x.select():x.deselect());});}else {let h=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==h&&t.activeItem._selectViaInteraction();}}_handleOverlayKeydown(e){e.keyCode===27&&!ni$1(e)&&(e.preventDefault(),this.close());}_onFocus(){this.disabled||(this._focused=true,this.stateChanges.next());}_onBlur(){this._focused=false,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next());}get empty(){return !this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next();});}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else {let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1);}this._changeDetectorRef.markForCheck();}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return  false;try{return (r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return  false}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,true):false}_skipPredicate=e=>this.panelOpen?false:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof n0?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck();}_initKeyManager(){this._keyManager=new qw(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close());}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction();});}_resetOptions(){let e=ys(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Ye(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus());}),ys(...this.options.map(t=>t._stateChanges)).pipe(Ye(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next();});}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next();}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next();}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck();}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e);}else this._keyManager.setActiveItem(this._selectionModel.selected[0]);}_canOpen(){return !this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e);}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby");}onContainerClick(e){let t=Si(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open());}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=ve({type:n,selectors:[["mat-select"]],contentQueries:function(t,r,o){if(t&1&&Qr(o,As,5)(o,E3,5)(o,gce,5),t&2){let c;Ae(c=De())&&(r.customTrigger=c.first),Ae(c=De())&&(r.options=c),Ae(c=De())&&(r.optionGroups=c);}},viewQuery:function(t,r){if(t&1&&Pn$1(dc,5)(mc,5)(ite,5),t&2){let o;Ae(o=De())&&(r.trigger=o.first),Ae(o=De())&&(r.panel=o.first),Ae(o=De())&&(r._overlayDir=o.first);}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,r){t&1&&$e("keydown",function(c){return r._handleKeydown(c)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),t&2&&(Ge("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),Ne("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen));},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",be],disableRipple:[2,"disableRipple","disableRipple",be],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Xd$1(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",be],placeholder:"placeholder",required:[2,"required","required",be],multiple:[2,"multiple","multiple",be],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",be],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Xd$1],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",be]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[ot$1([{provide:wg,useExisting:n},{provide:mce,useExisting:n}]),Et],ngContentSelectors:pc,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,r){if(t&1&&(Kt(uc),ke(0,"div",2,0),$e("click",function(){return r.open()}),ke(3,"div",3),Le(4,hc,2,1,"span",4)(5,gc,3,1,"span",5),Be(),ke(6,"div",6)(7,"div",7),GI(),ke(8,"svg",8),Ft(9,"path",9),Be()()()(),Kn$1(10,bc,3,16,"ng-template",10),$e("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(c){return r._handleOverlayKeydown(c)})),t&2){let o=GE(1);he(3),Ge("id",r._valueId),he(),Fe$1(r.empty?4:5),he(6),Dn$1("cdkConnectedOverlayDisableClose",true)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",true)("cdkConnectedOverlayUsePopover",r._popoverLocation);}},dependencies:[n0,ite],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return n})(),C0=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["mat-select-trigger"]],features:[ot$1([{provide:As,useExisting:n}])]})}return n})(),ci=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ce({type:n});static \u0275inj=oe({imports:[Xs$1,tXe,It$1,mm$1,aM,tXe]})}return n})();var xc=["input"],kc=["label"],Cc=["*"],ao={color:"accent",clickAction:"check-indeterminate",disabledInteractive:false},Mc=new v("mat-checkbox-default-options",{providedIn:"root",factory:()=>ao}),Me=(function(n){return n[n.Init=0]="Init",n[n.Checked=1]="Checked",n[n.Unchecked=2]="Unchecked",n[n.Indeterminate=3]="Indeterminate",n})(Me||{}),so=class{source;checked},Ai=(()=>{class n{_elementRef=m(G);_changeDetectorRef=m(Tt);_ngZone=m(B);_animationsDisabled=Jt();_options=m(Mc,{optional:true});focus(){this._inputElement.nativeElement.focus();}_createChangeEvent(e){let t=new so;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return `${this.id||this._uniqueId}-input`}required=false;labelPosition="after";name=null;change=new ne;indeterminateChange=new ne;value;disableRipple=false;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=Me.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){m(yn).load(xl$1);let e=m(new qE("tabindex"),{optional:true});this._options=this._options||ao,this.color=this._options.color||ao.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=m(Bt$1).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??false;}ngOnChanges(e){e.required&&this._validatorChangeFn();}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate);}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck());}_checked=false;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck());}_disabled=false;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(Me.Indeterminate):this._transitionCheckState(this.checked?Me.Checked:Me.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e);}_indeterminate=w(false);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges();}writeValue(e){this.checked=!!e;}registerOnChange(e){this._controlValueAccessorChangeFn=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e;}validate(e){return this.required&&e.value!==true?{required:true}:null}registerOnValidatorChange(e){this._validatorChangeFn=e;}_transitionCheckState(e){let t=this._currentCheckState,r=this._getAnimationTargetElement();if(!(t===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o);},1e3);});}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked);}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked);}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(false),this.indeterminateChange.emit(false);}),this._checked=!this._checked,this._transitionCheckState(this._checked?Me.Checked:Me.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate);}_onInteractionEvent(e){e.stopPropagation();}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck();});}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return "";switch(e){case Me.Init:if(t===Me.Checked)return this._animationClasses.uncheckedToChecked;if(t==Me.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Me.Unchecked:return t===Me.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Me.Checked:return t===Me.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Me.Indeterminate:return t===Me.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return ""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e);}_onInputClick(){this._handleInputClick();}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus();}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation();}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=ve({type:n,selectors:[["mat-checkbox"]],viewQuery:function(t,r){if(t&1&&Pn$1(xc,5)(kc,5),t&2){let o;Ae(o=De())&&(r._inputElement=o.first),Ae(o=De())&&(r._labelElement=o.first);}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,r){t&2&&(kn("id",r.id),Ge("tabindex",null)("aria-label",null)("aria-labelledby",null),Os$1(r.color?"mat-"+r.color:"mat-accent"),Ne("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive));},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",be],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",be],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",be],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Xd$1(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",be],checked:[2,"checked","checked",be],disabled:[2,"disabled","disabled",be],indeterminate:[2,"indeterminate","indeterminate",be]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[ot$1([{provide:Pa,useExisting:nn(()=>n),multi:true},{provide:La,useExisting:n,multi:true}]),Et],ngContentSelectors:Cc,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,r){if(t&1&&(Kt(),ke(0,"div",3),$e("click",function(c){return r._preventBubblingFromLabel(c)}),ke(1,"div",4,0)(3,"div",5),$e("click",function(){return r._onTouchTargetClick()}),Be(),ke(4,"input",6,1),$e("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(c){return r._onInteractionEvent(c)}),Be(),Ft(6,"div",7),ke(7,"div",8),GI(),ke(8,"svg",9),Ft(9,"path",10),Be(),Zx(),Ft(10,"div",11),Be(),Ft(11,"div",12),Be(),ke(12,"label",13,2),Pe(14),Be()()),t&2){let o=GE(2);Dn$1("labelPosition",r.labelPosition),he(4),Ne("mdc-checkbox--selected",r.checked),Dn$1("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),Ge("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?true:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),he(7),Dn$1("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",true),he(),Dn$1("for",r.inputId);}},dependencies:[a0,rXe],styles:[`.mdc-checkbox {
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
`],encapsulation:2})}return n})(),pr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ce({type:n});static \u0275inj=oe({imports:[Ai,It$1]})}return n})();var wc=["*"];function Tc(n,i){if(n&1&&(ke(0,"icon",3),gr$1(1,"info"),Be()),n&2){let e=vt();Dn$1("matTooltip",e.info());}}function Ec(n,i){n&1&&Ft(0,"div",4);}function Sc(n,i){if(n&1&&(ke(0,"div",5)(1,"div",7)(2,"div",8)(3,"icon"),gr$1(4),Be()()()()),n&2){let e=vt();he(),Ne("bg-base-200",!e.value())("bg-info",e.value())("border-info!",e.value()),he(),Ne("left-1",!e.value())("left-5",e.value())("bg-base-400",!e.value())("bg-info-light",e.value()),he(2),Zd$1(e.value()?"done":"remove");}}function Ic(n,i){if(n&1){let e=kD();ke(0,"mat-checkbox",9),$e("ngModelChange",function(r){U_(e);let o=vt();return B_(o.setValue(r))}),Be(),s5();}if(n&2){let e=vt();Dn$1("ngModel",e.value()),c5();}}var Fs=(()=>{class n{constructor(){this.toggle=gn(void 0),this.label=gn(void 0),this.info=gn(void 0),this.value=w(void 0),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e;}setValue(e){this.value.set(e),this._onChange&&this._onChange(e);}writeValue(e){this.value.set(e);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ve({type:n,selectors:[["settings-toggle"]],inputs:{toggle:[1,"toggle"],label:[1,"label"],info:[1,"info"]},features:[ot$1([{provide:Pa,useExisting:nn(()=>n),multi:true}])],ngContentSelectors:wc,decls:9,vars:8,consts:[["type","button","matRipple","",1,"hover:bg-base-200","relative","flex","flex-1","items-center","space-x-2","overflow-hidden","rounded-sm","border","py-1","pr-1","pl-2",3,"click"],[1,"z-10","flex","flex-1","items-center","space-x-2","p-2","text-left"],[1,"w-full"],[3,"matTooltip"],[1,"bg-info","absolute","inset-0","z-0","m-0!","opacity-10"],[1,"px-2"],[1,"pointer-events-none",3,"ngModel"],["toggle","",1,"border-base-400","relative","h-8","w-12","rounded-full","border-2"],[1,"absolute","top-1/2","flex","h-6","w-6","-translate-x-0.5","-translate-y-1/2","items-center","justify-center","rounded-full","text-black","shadow-sm"],[1,"pointer-events-none",3,"ngModelChange","ngModel"]],template:function(t,r){t&1&&(Kt(),ke(0,"button",0),$e("click",function(){return r.setValue(!r.value())}),ke(1,"div",1)(2,"div",2),gr$1(3),Pe(4),Be(),Le(5,Tc,2,1,"icon",3),Be(),Le(6,Ec,1,0,"div",4),Le(7,Sc,5,15,"div",5)(8,Ic,1,1,"mat-checkbox",6),Be()),t&2&&(Ne("border-base-300",!r.value())("border-info",r.value()),he(3),Fo$1(" ",r.label()," "),he(2),Fe$1(r.info()?5:-1),he(),Fe$1(r.value()?6:-1),he(),Fe$1(r.toggle()?7:8));},dependencies:[pr,Ai,aOe,tOe,ZQ,_Xe,QJe,lle],styles:["[_nghost-%COMP%]{display:flex}[toggle][_ngcontent-%COMP%]{transition:background .2s,left .2s}"]});}}return n})();var mi=new Map,Rc="PlaceOS.image-cache-v1",Ls="PlaceOS.image-cache-keys-v1";var di=null;function Bs(){if(di)return di;if(typeof sessionStorage>"u")return [];try{let n=sessionStorage.getItem(Ls);return di=n?JSON.parse(n):[],di}catch{return []}}function Oc(n){if(di=Array.from(new Set(n)),!(typeof sessionStorage>"u"))try{sessionStorage.setItem(Ls,JSON.stringify(di));}catch{}}async function Us(){if(typeof caches>"u")return null;try{return await caches.open(Rc)}catch{return null}}async function Dc(n){if(!Bs().includes(n))return null;let i=await Us();if(!i)return null;try{return await i.match(n)||null}catch{return null}}async function Nc(n,i){let e=await Us();if(e)try{await e.put(n,i),Oc([...Bs(),n]);}catch{}}function Ac(n){let i=Qt();document.cookie=`${i==="x-api-key"?"api-key="+encodeURIComponent(gl()):"bearer_token="+encodeURIComponent(i)};max-age=30;path=${n};samesite=strict;${location.protocol==="https:"?"secure;":""}`;}function Pc(){let n=Qt();return n==="x-api-key"?{"X-API-Key":gl()}:{Authorization:`Bearer ${n}`}}async function Vs(n,i){let e=await i.blob(),t=URL.createObjectURL(e);return mi.set(n,t),t}async function zs(n,i){return Hs(n,()=>(Ac(i),fetch(n)))}async function Gs(n){return Hs(n,()=>fetch(n,{headers:Pc()}))}async function Hs(n,i){if(mi.has(n))return mi.get(n);let e=await Dc(n);if(e)return Vs(n,e);let t=await i();if(!t||!t.ok)throw new Error(`Failed to fetch image: ${t?.status}`);return Nc(n,t.clone()),Vs(n,t)}var It=(()=>{class n extends io{constructor(){super(),this._element=m(G),this.source=gn(void 0);}ngOnChanges(e){e.source&&this.source()&&this._loadImage();}async _loadImage(){let e=this.source();if(typeof e!="string")return;if(!this._element||!Zi())return this.timeout("load",()=>this._loadImage(),300);if(!this._isLocalUrl(e)){this._element.nativeElement.src=e;return}if(mi.has(e)){this._element.nativeElement.src=mi.get(e);return}let t=e.includes("/api/engine/v2/uploads")||e.includes("/api/engine/v2/signage");try{this._element.nativeElement.src=t?await zs(e,this._cookiePath(e)):await Gs(e);}catch(r){this._element.nativeElement.dispatchEvent(new ErrorEvent("error",{error:r}));}}_isLocalUrl(e){try{return new URL(e,location.href).origin===location.origin}catch{return  false}}_cookiePath(e){return e.includes("/api/engine/v2/uploads")?"/api/engine/v2/uploads":"/api/engine/v2/signage"}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275dir=O({type:n,selectors:[["img","auth",""],["video","auth",""],["audio","auth",""]],inputs:{source:[1,"source"]},features:[Re,Et]});}}return n})();var co=0;function Fc(){return co}function Rt(n,i){return (...e)=>{try{return co=i,n(...e)}finally{co=0;}}}function Vc(n){return !n}function Ws(n){return n}function Ot(n){return Array.isArray(n)}function _r(n){return (typeof n=="object"||typeof n=="function")&&n!=null}var Lt=Symbol(),Cr=Symbol(),Fi=class{predicates;fns=[];constructor(i){this.predicates=i;}push(i){this.fns.push(js(this.predicates,i));}mergeIn(i){let e=this.predicates?i.fns.map(t=>js(this.predicates,t)):i.fns;this.fns.push(...e);}hasRules(){return this.fns.length>0}},fr=class extends Fi{get defaultValue(){return  false}compute(i){return this.fns.some(e=>{let t=e(i);return t&&t!==Cr})}},pi=class n extends Fi{ignore;static ignoreNull(i){return new n(i,e=>e===null)}constructor(i,e){super(i),this.ignore=e;}get defaultValue(){return []}compute(i){return this.fns.reduce((e,t)=>{let r=t(i);return r===void 0||r===Cr?e:Ot(r)?[...e,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?e:[...e,r]},[])}},mo=class extends pi{constructor(i){super(i,void 0);}},uo=class extends Fi{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(i,e){super(i),this.key=e;}compute(i){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let t=0;t<this.fns.length;t++){let r=this.fns[t](i);r!==Cr&&(e=this.key.reducer.reduce(e,r));}return e}};function js(n,i){return n.length===0?i:e=>{for(let t of n){let r=e.stateOf(t.path),o=q(r.structure.pathKeys).length-t.depth;for(let c=0;c<o;c++)r=r.structure.parent;if(!t.fn(r.context))return Cr}return i(e)}}var hi=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(i){this.predicates=i,this.hidden=new fr(i),this.disabledReasons=new mo(i),this.readonly=new fr(i),this.syncErrors=pi.ignoreNull(i),this.syncTreeErrors=pi.ignoreNull(i),this.asyncErrors=pi.ignoreNull(i);}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(i){return this.metadata.has(i)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(i){return this.metadata.has(i)||this.metadata.set(i,new uo(this.predicates,i)),this.metadata.get(i)}mergeIn(i){this.hidden.mergeIn(i.hidden),this.disabledReasons.mergeIn(i.disabledReasons),this.readonly.mergeIn(i.readonly),this.syncErrors.mergeIn(i.syncErrors),this.syncTreeErrors.mergeIn(i.syncTreeErrors),this.asyncErrors.mergeIn(i.asyncErrors);for(let e of i.getMetadataKeys()){let t=i.metadata.get(e);this.getMetadata(e).mergeIn(t);}}},gr=class{depth;constructor(i){this.depth=i;}build(){return new br(this,[],0)}},_i=class n extends gr{constructor(i){super(i);}current;all=[];addHiddenRule(i){this.getCurrent().addHiddenRule(i);}addDisabledReasonRule(i){this.getCurrent().addDisabledReasonRule(i);}addReadonlyRule(i){this.getCurrent().addReadonlyRule(i);}addSyncErrorRule(i){this.getCurrent().addSyncErrorRule(i);}addSyncTreeErrorRule(i){this.getCurrent().addSyncTreeErrorRule(i);}addAsyncErrorRule(i){this.getCurrent().addAsyncErrorRule(i);}addMetadataRule(i,e){this.getCurrent().addMetadataRule(i,e);}getChild(i){if(i===Lt){let e=this.getCurrent().children;e.size>(e.has(Lt)?1:0)&&(this.current=void 0);}return this.getCurrent().getChild(i)}hasLogic(i){return this===i?true:this.all.some(({builder:e})=>e.hasLogic(i))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:i})=>i.anyChildHasLogic())}mergeIn(i,e){e?this.all.push({builder:i,predicate:{fn:Rt(e.fn,this.depth),path:e.path}}):this.all.push({builder:i}),this.current=void 0;}getCurrent(){return this.current===void 0&&(this.current=new Vi(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new n(0)}},Vi=class extends gr{logic=new hi([]);children=new Map;constructor(i){super(i);}addHiddenRule(i){this.logic.hidden.push(Rt(i,this.depth));}addDisabledReasonRule(i){this.logic.disabledReasons.push(Rt(i,this.depth));}addReadonlyRule(i){this.logic.readonly.push(Rt(i,this.depth));}addSyncErrorRule(i){this.logic.syncErrors.push(Rt(i,this.depth));}addSyncTreeErrorRule(i){this.logic.syncTreeErrors.push(Rt(i,this.depth));}addAsyncErrorRule(i){this.logic.asyncErrors.push(Rt(i,this.depth));}addMetadataRule(i,e){this.logic.getMetadata(i).push(Rt(e,this.depth));}getChild(i){return this.children.has(i)||this.children.set(i,new _i(this.depth+1)),this.children.get(i)}hasLogic(i){return this===i}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let i of this.children.values())if(i.hasRules())return  true;return  false}},br=class n{builder;predicates;depth;logic;constructor(i,e,t){this.builder=i,this.predicates=e,this.depth=t,this.logic=i?Lc(i,e,t):new hi([]);}getChild(i){let e=this.builder?$s(this.builder,i):[];if(e.length===0)return new n(void 0,[],this.depth+1);if(e.length===1){let{builder:t,predicates:r}=e[0];return new n(t,[...this.predicates,...r.map(o=>ho(o,this.depth))],this.depth+1)}else {let t=e.map(({builder:r,predicates:o})=>new n(r,[...this.predicates,...o.map(c=>ho(c,this.depth))],this.depth+1));return new po(t)}}hasLogic(i){return this.builder?this.builder.hasLogic(i):false}hasRules(){return this.builder?this.builder.hasRules():false}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():false}},po=class n{all;logic;constructor(i){this.all=i,this.logic=new hi([]);for(let e of i)this.logic.mergeIn(e.logic);}getChild(i){return new n(this.all.flatMap(e=>e.getChild(i)))}hasLogic(i){return this.all.some(e=>e.hasLogic(i))}hasRules(){return this.all.some(i=>i.hasRules())}anyChildHasLogic(){return this.all.some(i=>i.anyChildHasLogic())}};function $s(n,i){if(n instanceof _i)return n.all.flatMap(({builder:e,predicate:t})=>{let r=$s(e,i);return t?r.map(({builder:o,predicates:c})=>({builder:o,predicates:[...c,t]})):r});if(n instanceof Vi)return [...i!==Lt&&n.children.has(Lt)?[{builder:n.getChild(Lt),predicates:[]}]:[],...n.children.has(i)?[{builder:n.getChild(i),predicates:[]}]:[]];throw new A$1(1909,false)}function Lc(n,i,e){let t=new hi(i);if(n instanceof _i){let r=n.all.map(({builder:o,predicate:c})=>new br(o,c?[...i,ho(c,e)]:i,e));for(let o of r)t.mergeIn(o.logic);}else if(n instanceof Vi)t.mergeIn(n.logic);else throw new A$1(1909,false);return t}function ho(n,i){return m$1(l({},n),{depth:i})}var Xs=Symbol("PATH"),ot=class n{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,Bc);logicBuilder;constructor(i,e,t,r){this.keys=i,this.parent=t,this.keyInParent=r,this.root=e??this,t||(this.logicBuilder=_i.newRoot());}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(i){return this.children.has(i)||this.children.set(i,new n([...this.keys,i],this.root,this,i)),this.children.get(i)}mergeIn(i,e){let t=i.compile();this.builder.mergeIn(t.builder,e);}static unwrapFieldPath(i){return i[Xs]}static newRoot(){return new n([],void 0,void 0,void 0)}},Bc={get(n,i){return i===Xs?n:n.getChild(i).fieldPathProxy}},hr,Pi=new Map,vr=class n{schemaFn;constructor(i){this.schemaFn=i;}compile(){if(Pi.has(this))return Pi.get(this);let i=ot.newRoot();Pi.set(this,i);let e=hr;try{hr=i,this.schemaFn(i.fieldPathProxy);}finally{hr=e;}return i}static create(i){return i instanceof n?i:new n(i)}static rootCompile(i){try{return Pi.clear(),i===void 0?ot.newRoot():i instanceof n?i.compile():new n(i).compile()}finally{Pi.clear();}}};function Uc(n){return n instanceof vr||typeof n=="function"}function Mr(n){if(hr!==ot.unwrapFieldPath(n).root)throw new A$1(1908,false)}function fi(n,i,e){return Mr(n),ot.unwrapFieldPath(n).builder.addMetadataRule(i,e),i}var Bt={list(){return {reduce:(n,i)=>i===void 0?n:[...n,i],getInitial:()=>[]}},min(){return {reduce:(n,i)=>n===void 0||i===void 0?n??i:i<n?i:n,getInitial:()=>{}}},max(){return {reduce:(n,i)=>n===void 0||i===void 0?n??i:i>n?i:n,getInitial:()=>{}}},or(){return {reduce:(n,i)=>n||i,getInitial:()=>false}},and(){return {reduce:(n,i)=>n&&i,getInitial:()=>true}},override:zc};function zc(n){return {reduce:(i,e)=>e,getInitial:()=>n?.()}}var wo=Symbol("IS_ASYNC_VALIDATION_RESOURCE"),yr=class{reducer;create;brand;[wo];constructor(i,e){this.reducer=i,this.create=e;}};function at(n){return new yr(n??Bt.override())}function To(){return at()}var Eo=at(Bt.or()),So=To();var Io=at(Bt.max()),Ys=To();var Qs=at(Bt.max()),Zs=at(Bt.min()),Js=at(Bt.list());function Fe(n,i){if(n===i)return  true;if(!n||!i||n.length!==i.length)return  false;for(let e=0;e<n.length;e++)if(!Object.is(n[e],i[e]))return  false;return  true}function Gc(n){return n.errors().length>0?"invalid":n.pending()?"unknown":"valid"}var _o=class{node;constructor(i){this.node=i;}rawSyncTreeErrors=me(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:Fe});syncErrors=me(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...Hc(this.node.submitState.submissionErrors())],{equal:Fe});syncValid=me(()=>this.shouldSkipValidation()?true:this.node.structure.reduceChildren(this.syncErrors().length===0,(i,e)=>e&&i.validationState.syncValid(),Vc));syncTreeErrors=me(()=>this.rawSyncTreeErrors().filter(i=>i.fieldTree===this.node.fieldTree),{equal:Fe});rawAsyncErrors=me(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:Fe});asyncErrors=me(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(i=>i==="pending"||i.fieldTree===this.node.fieldTree),{equal:Fe});parseErrors=me(()=>this.node.formFieldBindings().flatMap(i=>i.parseErrors()),{equal:Fe});errors=me(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(i=>i!=="pending")],{equal:Fe});errorSummary=me(()=>{let i=this.node.structure.reduceChildren(this.errors(),(e,t)=>[...t,...e.errorSummary()]);return q(()=>i.sort(Wc)),i},{equal:Fe});pending=me(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(i,e)=>e||i.validationState.asyncErrors().includes("pending")));status=me(()=>{if(this.shouldSkipValidation())return "valid";let i=Gc(this);return this.node.structure.reduceChildren(i,(e,t)=>t==="invalid"||e.validationState.status()==="invalid"?"invalid":t==="unknown"||e.validationState.status()==="unknown"?"unknown":"valid",e=>e==="invalid")});valid=me(()=>this.status()==="valid");invalid=me(()=>this.status()==="invalid");shouldSkipValidation=me(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function Hc(n){return n===void 0?[]:Ot(n)?n:[n]}function el(n,i){if(Ot(n))for(let e of n)e.fieldTree??=i;else n&&(n.fieldTree??=i);return n}function Ks(n){return n.formField?n.formField.element:n.fieldTree().formFieldBindings().reduce((i,e)=>!i||!e.element?i??e.element:i.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:i,void 0)}function Wc(n,i){let e=Ks(n),t=Ks(i);return e===t?0:e===void 0||t===void 0?e===void 0?1:-1:e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var fo=at(),go=class{node;cache=new WeakMap;constructor(i){this.node=i,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this);}resolve(i){if(!this.cache.has(i)){let e=me(()=>{let t=ot.unwrapFieldPath(i),r=this.node,o=Fc();for(;o>0||!r.structure.logic.hasLogic(t.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new A$1(1900,false);for(let c of t.keys)if(r=r.structure.getChild(c),r===void 0)throw new A$1(1901,false);return r.fieldTree});this.cache.set(i,e);}return this.cache.get(i)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=me(()=>{let i=this.key();if(!Ot(q(this.node.structure.parent.value)))throw new A$1(1906,false);return Number(i)});fieldTreeOf(i){return this.resolve(i)}stateOf(i){return this.resolve(i)()}valueOf=i=>{let e=this.resolve(i)().value();if(e instanceof Ev)throw new A$1(1907,false);return e}},bo=class{node;metadata=new Map;constructor(i){this.node=i;}runMetadataCreateLifecycle(){this.node.logicNode.logic.hasMetadataKeys()&&q(()=>pn(this.node.structure.injector,()=>{for(let i of this.node.logicNode.logic.getMetadataKeys())if(i.create){let e=this.node.logicNode.logic.getMetadata(i),t=i.create(this.node,me(()=>e.compute(this.node.context)));this.metadata.set(i,t);}}));}get(i){if(this.has(i)&&!this.metadata.has(i)){if(i.create)throw new A$1(1912,false);let e=this.node.logicNode.logic.getMetadata(i);this.metadata.set(i,me(()=>e.compute(this.node.context)));}return this.metadata.get(i)}has(i){return this.node.logicNode.logic.hasMetadata(i)}},jc={get(n,i,e){let t=n(),r=t.structure.getChild(i);if(r!==void 0)return r.fieldTree;let o=q(t.value);if(Ot(o)){if(i==="length")return t.value().length;if(i===Symbol.iterator)return ()=>(t.value(),Array.prototype[Symbol.iterator].apply(t.fieldTree))}if(_r(o)&&i===Symbol.iterator)return function*(){for(let c in e)yield [c,e[c]];}},getOwnPropertyDescriptor(n,i){let e=q(n().value),t=Reflect.getOwnPropertyDescriptor(e,i);return t&&!t.configurable&&(t.configurable=true),t},ownKeys(n){let i=q(n().value);return typeof i=="object"&&i!==null?Reflect.ownKeys(i):[]}};function Kc(n,i){let e=me(()=>n()[i()]);return e[Mt]=n[Mt],e.set=t=>{Object.is(q(e),t)||n.update(r=>qc(r,t,i()));},e.update=t=>{e.set(t(q(e)));},e.asReadonly=()=>e,e}function qc(n,i,e){if(Ot(n)){let t=[...n];return t[e]=i,t}else return m$1(l({},n),{[e]:i})}var ui=Symbol(""),tl=me(()=>false),xr=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=H$1.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(i,e,t){this.logic=i,this.node=e,this.createChildNode=t;}children(){this.ensureChildrenMap();let i=this.childrenMap();return i===void 0?[]:Array.from(i.byPropertyKey.values()).map(e=>q(e.reader))}materializedChildren(){let i=this.childrenMap();return i===void 0?[]:Array.from(i.byPropertyKey.values()).map(e=>e.node)}_areChildrenMaterialized(){return q(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||q(()=>{this.childrenMap.update(i=>this.computeChildrenMap(this.value(),i,true));});}getChild(i){this.ensureChildrenMap();let e=i.toString(),t=q(this.childrenMap)?.byPropertyKey.get(e)?.reader;return t||(t=this.createReader(e)),t()}reduceChildren(i,e,t){let r=this.childrenMap();if(!r)return i;let o=i;for(let c of r.byPropertyKey.values()){if(t?.(o))break;o=e(q(c.reader),o);}return o}destroy(){this.injector.destroy();}createKeyOrOrphanSignals(i,e,t){if(i==="root")return {keyInParent:il,isOrphaned:tl};let r=this.parent,o=t,c=me(()=>{if(r.structure.isOrphaned())return ui;let R=r.structure.childrenMap();if(!R)return ui;let F=R.byPropertyKey.get(o);if(F&&F.node===this.node)return o;if(e===void 0)return ui;for(let[ae,ue]of R.byPropertyKey)if(ue.node===this.node)return o=ae;return ui}),h=me(()=>c()===ui);return {keyInParent:me(()=>{let R=c();if(R===ui)throw e===void 0?new A$1(-1902,false):new A$1(1904,false);return R}),isOrphaned:h}}createChildrenMap(){return Qd$1({source:this.value,computation:(i,e)=>this.computeChildrenMap(i,e?.value,false)})}computeChildrenMap(i,e,t){if(!_r(i)||!t&&e===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;e??={byPropertyKey:new Map};let r,o=Ot(i);e!==void 0&&(o?r=Xc(e,i,this.identitySymbol):r=Yc(e,i));for(let c of Object.keys(i)){let h,x=i[c];if(x===void 0){e.byPropertyKey.has(c)&&(r??=l({},e),r.byPropertyKey.delete(c));continue}o&&_r(x)&&!Ot(x)&&(h=x[this.identitySymbol]??=Symbol(""));let R;h&&(e.byTrackingKey?.has(h)||(r??=l({},e),r.byTrackingKey??=new Map,r.byTrackingKey.set(h,this.createChildNode(c,h,o))),R=(r??e).byTrackingKey.get(h));let F=e.byPropertyKey.get(c);F===void 0?(r??=l({},e),r.byPropertyKey.set(c,{reader:this.createReader(c),node:R??this.createChildNode(c,h,o)})):R&&R!==F.node&&(r??=l({},e),F.node=R);}return r??e}createReader(i){return me(()=>this.childrenMap()?.byPropertyKey.get(i)?.node)}},vo=class extends xr{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return $c}get keyInParent(){return il}isOrphaned=tl;childrenMap;constructor(i,e,t,r,o){super(e,i,o),this.fieldManager=t,this.value=r,this.childrenMap=this.createChildrenMap();}},yo=class extends xr{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(i,e,t,r,o,c){super(e,i,c),this.logic=e,this.parent=t,this.root=this.parent.structure.root;let h=this.createKeyOrOrphanSignals("child",r,o);this.isOrphaned=h.isOrphaned,this.keyInParent=h.keyInParent,this.pathKeys=me(()=>[...t.structure.pathKeys(),this.keyInParent()]),this.value=Kc(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this);}};var $c=me(()=>[]),il=me(()=>{throw new A$1(1905,false)});function Xc(n,i,e){let t,r=new Set(n.byPropertyKey.keys()),o=new Set(n.byTrackingKey?.keys());for(let c=0;c<i.length;c++){let h=i[c];r.delete(c.toString()),_r(h)&&h.hasOwnProperty(e)&&o.delete(h[e]);}if(r.size>0){t??=l({},n);for(let c of r)t.byPropertyKey.delete(c);}if(o.size>0){t??=l({},n);for(let c of o)t.byTrackingKey?.delete(c);}return t}function Yc(n,i){let e;for(let t of n.byPropertyKey.keys())i.hasOwnProperty(t)||(e??=l({},n),e.byPropertyKey.delete(t));return e}var xo=class{node;selfSubmitting=w(false);submissionErrors;constructor(i){this.node=i,this.submissionErrors=Qd$1({source:this.node.structure.value,computation:()=>[]});}submitting=me(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??false))},Li=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new go(this)}fieldProxy=new Proxy(()=>this,jc);pathNode;constructor(i){this.pathNode=i.pathNode,this.fieldAdapter=i.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,i),this.validationState=this.fieldAdapter.createValidationState(this,i),this.nodeState=this.fieldAdapter.createNodeState(this,i),this.metadataState=new bo(this),this.submitState=new xo(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle();}focusBoundControl(i){this.getBindingForFocus()?.focus(i);}getBindingForFocus(){let i=this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(qs,void 0);return i||this.structure.children().map(e=>e.getBindingForFocus()).reduce(qs,void 0)}pendingSync=Qd$1({source:()=>this.value(),computation:(i,e)=>{e?.value?.abort();}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let i=this.metadata(Ys)?.();return i?this.metadata(i):void 0}get maxLength(){return this.metadata(Zs)}get min(){let i=this.metadata(So)?.();return i?this.metadata(i):void 0}get minLength(){return this.metadata(Qs)}get pattern(){return this.metadata(Js)??Qc}get required(){return this.metadata(Eo)??Zc}metadata(i){return this.metadataState.get(i)}getError(i){return this.errors().find(e=>e.kind===i)}hasMetadata(i){return this.metadataState.has(i)}markAsTouched(i){this.structure.isOrphaned()||q(()=>{this.markAsTouchedInternal(i),this.flushSync();});}markAsTouchedInternal(i){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!i?.skipDescendants))for(let e of this.structure.children())e.markAsTouchedInternal();}markAsDirty(){this.nodeState.markAsDirty();}markAsPristine(){this.nodeState.markAsPristine();}markAsUntouched(){this.nodeState.markAsUntouched();}reset(i){q(()=>this._reset(i));}_reset(i){this.pendingSync()?.abort(),i!==void 0&&this.value.set(i),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.formFieldBindings())e.reset();for(let e of this.structure.materializedChildren())e._reset();}reloadValidation(){q(()=>this._reloadValidation());}_reloadValidation(){let i=this.logicNode.logic.getMetadataKeys();for(let e of i)e[wo]&&this.metadata(e).reload?.();for(let e of this.structure.children())e._reloadValidation();}controlValueSignal(){let i=Qd$1(this.value);i.rawSet=i.set,i.set=t=>{i.rawSet(t),this.markAsDirty(),this.debounceSync();};let e=i.update;return i.update=t=>{e(t),this.markAsDirty(),this.debounceSync();},i}sync(){this.value.set(this.controlValue());}flushSync(){let i=this.pendingSync();i&&!i.signal.aborted&&(i.abort(),this.sync());}async debounceSync(){let i=q(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(i){let e=new AbortController,t=i(e.signal);if(t&&(this.pendingSync.set(e),await t,e.signal.aborted))return}this.structure.isOrphaned()||this.sync();}static newRoot(i,e,t,r){return r.newRoot(i,e,t,r)}createStructure(i){return i.kind==="root"?new vo(this,i.logic,i.fieldManager,i.value,this.newChild.bind(this)):new yo(this,i.logic,i.parent,i.identityInParent,i.initialKeyInParent,this.newChild.bind(this))}newChild(i,e,t){let r,o;return t?(r=this.pathNode.getChild(Lt),o=this.structure.logic.getChild(Lt)):(r=this.pathNode.getChild(i),o=this.structure.logic.getChild(i)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:r,logic:o,initialKeyInParent:i,identityInParent:e,fieldAdapter:this.fieldAdapter})}},Qc=me(()=>[]),Zc=me(()=>false);function qs(n,i){return n?i&&n.element.compareDocumentPosition(i.element)&Node.DOCUMENT_POSITION_PRECEDING?i:n:i}var ko=class{node;selfTouched=w(false);selfDirty=w(false);markAsTouched(){this.selfTouched.set(true);}markAsDirty(){this.selfDirty.set(true);}markAsPristine(){this.selfDirty.set(false);}markAsUntouched(){this.selfTouched.set(false);}formFieldBindings=w([]);constructor(i){this.node=i;}dirty=me(()=>{let i=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(i,(e,t)=>t||e.nodeState.dirty(),Ws)});touched=me(()=>{let i=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(i,(e,t)=>t||e.nodeState.touched(),Ws)});disabledReasons=me(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:Fe});disabled=me(()=>!!this.disabledReasons().length);readonly=me(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??false);hidden=me(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??false);name=me(()=>{let i=this.node.structure.parent;return i?`${i.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=me(()=>{if(this.node.logicNode.logic.hasMetadata(fo)){let e=this.node.logicNode.logic.getMetadata(fo).compute(this.node.context);if(e)return t=>e(this.node.context,t)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=me(()=>this.hidden()||this.disabled()||this.readonly())},Co=class{newRoot(i,e,t,r){return new Li({kind:"root",fieldManager:i,value:e,pathNode:t,logic:t.builder.build(),fieldAdapter:r})}newChild(i){return new Li(i)}createNodeState(i){return new ko(i)}createValidationState(i){return new _o(i)}createStructure(i,e){return i.createStructure(e)}},Mo=class{injector;rootName;submitOptions;constructor(i,e,t){this.injector=i,this.rootName=e??`${this.injector.get(xo$1)}.form${Jc++}`,this.submitOptions=t;}structures=new Set;createFieldManagementEffect(i){_t(()=>{let e=new Set;this.markStructuresLive(i,e);for(let t of this.structures)e.has(t)||(this.structures.delete(t),q(()=>t.destroy()));},{injector:this.injector});}markStructuresLive(i,e){e.add(i);for(let t of i.children())this.markStructuresLive(t.structure,e);}},Jc=0,nl=new v("");function ed(n){let i,e,t;return n.length===3?[i,e,t]=n:n.length===2?Uc(n[1])?[i,e]=n:[i,t]=n:[i]=n,[i,e,t]}function Ro(...n){let[i,e,t]=ed(n),r=t?.injector??m(H$1),o=pn(r,()=>vr.rootCompile(e)),c=new Mo(r,t?.name,t?.submission),h=t?.adapter??new Co,x=Li.newRoot(c,i,o,h);c.createFieldManagementEffect(x.structure);let{experimentalWebMcpTool:R}=t??{};if(R){let F=pn(r,()=>m(nl,{optional:!0}));F&&pn(r,()=>F(x.fieldTree,{name:R.name,description:R.description}));}return x.fieldTree}var kr=class{kind="compat";control;fieldTree;context;message;constructor({context:i,kind:e,control:t}){this.context=i,this.kind=e,this.control=t;}};function rl(n){if(n.length===0)return null;let i={};for(let e of n)i[e.kind]=e instanceof kr?e.context:e;return i}function ol(n,i){return n===null?[]:Object.entries(n).map(([e,t])=>new kr({context:t,kind:e,control:i}))}var td=new v("");function Og(n,i){Mr(n);let e=ot.unwrapFieldPath(n),t;typeof i=="function"||typeof i=="string"?t=i:t=i?.when,e.builder.addDisabledReasonRule(r=>{let o=true;return typeof t=="string"?o=t:t&&(o=t(r)),typeof o=="string"?{fieldTree:r.fieldTree,message:o}:o?{fieldTree:r.fieldTree}:void 0});}function gi(n,i){return n instanceof Function?n(i):n}function dl(n){return typeof n=="number"?isNaN(n):n===""||n===false||n==null}function al(n){return n===void 0?[]:Array.isArray(n)?n:[n]}function Fo(n,i){Mr(n),ot.unwrapFieldPath(n).builder.addSyncErrorRule(t=>el(i(t),t.fieldTree));}function id(n){return new Oo(n)}function nd(n,i){return new Do(n,i)}function rd(n){return new No(n)}var bi=class{__brand=void 0;kind="";fieldTree;message;constructor(i){i&&Object.assign(this,i);}},Oo=class extends bi{kind="required"},Do=class extends bi{min;kind="min";constructor(i,e){super(e),this.min=i;}};var No=class extends bi{kind="email"},wr=class extends bi{kind="parse"};var od=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function Dg(n,i){Fo(n,e=>{if(!(i?.when&&!i.when(e))&&!dl(e.value())&&!od.test(e.value()))return i?.error?gi(i.error,e):rd({message:gi(i?.message,e)})});}function Ng(n,i,e){let t=at();fi(n,t,r=>{return i}),fi(n,Io,({state:r})=>r.metadata(t)()),fi(n,So,()=>Io),Fo(n,r=>{let o=r.value();if(o===null||Number.isNaN(o))return;let c=r.state.metadata(t)();if(!(c===void 0||Number.isNaN(c))&&o<c)return nd(c,{message:gi(e?.message,r)})});}function Tr(n,i){let e=fi(n,at(),t=>i?.when?i.when(t):true);fi(n,Eo,({state:t})=>t.metadata(e)()),Fo(n,t=>{if(t.state.metadata(e)()&&dl(t.value()))return i?.error?gi(i.error,t):id({message:gi(i?.message,t)})});}function ad(n,i,e){let t=Qd$1({source:n,computation:()=>[],equal:Fe}),r=c=>{let h=e(c);t.set(al(h.error)),h.value!==void 0&&i(h.value),t.set(al(h.error));},o=()=>{t.set([]);};return {errors:t.asReadonly(),setRawValue:r,reset:o}}var Ao=class{field;constructor(i){this.field=i;}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return !this.field().disabled()}get errors(){return rl(this.field().errors())}get pristine(){return !this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return !this.field().touched()}get status(){if(this.field().disabled())return "DISABLED";if(this.field().valid())return "VALID";if(this.field().invalid())return "INVALID";if(this.field().pending())return "PENDING";throw new A$1(1910,false)}valueAccessor=null;hasValidator(i){return i===sl$1.required?this.field().required():false}updateValueAndValidity(){}},Po={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},sd=(()=>{let n={};for(let i of Object.keys(Po))n[Po[i]]=i;return n})();function Vo(n,i){let e=sd[i];return n[e]?.()}var Lo=Object.values(Po);function Er(){return {}}function Ut(n,i,e){return n[i]!==e?(n[i]=e,true):false}function ld(n,i,e){let t;if(ml(n)&&e.isBadInput(n))return {error:new wr};switch(n.type){case "checkbox":return {value:n.checked};case "number":case "range":case "datetime-local":if(t=q(i),typeof t=="number"||t===null)return {value:n.value===""?null:n.valueAsNumber};break;case "date":case "month":case "time":case "week":if(t=q(i),t===null||t instanceof Date)return {value:n.valueAsDate};if(typeof t=="number")return {value:n.valueAsNumber};break}if(n.tagName==="INPUT"&&n.type==="text"&&(t??=q(i),typeof t=="number"||t===null)){if(n.value==="")return {value:null};let r=Number(n.value);return Number.isNaN(r)?{error:new wr}:{value:r}}return {value:n.value}}function sl(n,i){switch(n.type){case "checkbox":n.checked=i;return;case "radio":n.checked=i===n.value;return;case "number":case "range":case "datetime-local":if(typeof i=="number"){ll(n,i);return}else if(i===null){n.value="";return}break;case "date":case "month":case "time":case "week":if(i===null||i instanceof Date){n.valueAsDate=i;return}else if(typeof i=="number"){ll(n,i);return}}if(n.tagName==="INPUT"&&n.type==="text"){if(typeof i=="number"){n.value=isNaN(i)?"":String(i);return}if(i===null){n.value="";return}}n.value=i;}function ll(n,i){isNaN(i)?n.value="":n.valueAsNumber=i;}function ml(n){return n.tagName==="INPUT"}function cd(n){return n.type==="date"||n.type==="datetime-local"||n.type==="month"||n.type==="time"||n.type==="week"}function dd(n,i){let e=n.getUTCFullYear(),t=String(n.getUTCMonth()+1).padStart(2,"0");if(i==="month")return `${e}-${t}`;let r=String(n.getUTCDate()).padStart(2,"0");return `${e}-${t}-${r}`}function ul(n,i,e){return i instanceof Date&&(n==="min"||n==="max")&&(e==="date"||e==="month")?dd(i,e):i}function md(n,i){n.listenToCustomControlModel(t=>i.state().controlValue.set(t)),n.listenToCustomControlOutput("touch",()=>i.state().markAsTouched()),i.registerAsBinding(n.customControl);let e=Er();return ()=>{let t=i.state(),r=t.controlValue();Ut(e,"controlValue",r)&&n.setCustomControlModelInput(r);for(let o of Lo){let c;if(o==="errors"?c=i.errors():c=Vo(t,o),Ut(e,o,c)&&(n.setInputOnDirectives(o,c),i.elementAcceptsNativeProperty(o)&&!n.customControlHasInput(o))){let h=ul(o,c,i.nativeFormElement.type);MQ(i.renderer,i.nativeFormElement,o,h);}}}}function ud(n){return typeof n=="object"&&n!==null}function pd(n,i){let e=Er();i.controlValueAccessor.registerOnChange(r=>{e.controlValue=r,i.state().controlValue.set(r);}),i.controlValueAccessor.registerOnTouched(()=>i.state().markAsTouched());let t=i.injector.get(La,null,{optional:true,self:true});if(t){let r;for(let x of t)ud(x)&&x.registerOnValidatorChange&&(r??=w(0),x.registerOnValidatorChange(()=>{r.update(R=>R+1);}));let o=t.map(x=>typeof x=="function"?x:x.validate.bind(x)),c=sl$1.compose(o),h=me(()=>{r?.();let x=c?c(i.interopNgControl.control):null;return ol(x,i.interopNgControl.control)});i.parseErrorsSource.set(h);}return i.registerAsBinding({reset:()=>{let r=i.state().value();e.controlValue=r,q(()=>i.controlValueAccessor.writeValue(r));}}),()=>{let r=i.state(),o=r.value();Ut(e,"controlValue",o)&&q(()=>i.controlValueAccessor.writeValue(o));for(let c of Lo){let h=Vo(r,c);if(Ut(e,c,h)){let x=n.setInputOnDirectives(c,h);c==="disabled"&&i.controlValueAccessor.setDisabledState?q(()=>i.controlValueAccessor.setDisabledState(h)):!x&&i.elementAcceptsNativeProperty(c)&&MQ(i.renderer,i.nativeFormElement,c,h);}}}}function hd(n,i,e){if(typeof MutationObserver!="function")return;let t=new MutationObserver(r=>{r.some(o=>_d(o))&&i();});t.observe(n,{attributes:true,attributeFilter:["value"],characterData:true,childList:true,subtree:true}),e.onDestroy(()=>t.disconnect());}function _d(n){if(n.type==="childList"||n.type==="characterData"){if(n.target instanceof Comment)return  false;for(let i of n.addedNodes)if(!(i instanceof Comment))return  true;for(let i of n.removedNodes)if(!(i instanceof Comment))return  true;return  false}return n.type==="attributes"&&n.target instanceof HTMLOptionElement}function fd(n,i,e,t){let r=false,o=i.nativeFormElement,c=ad(()=>i.state().value(),x=>i.state().controlValue.set(x),x=>ld(o,i.state().value,t));e.set(c.errors),i.onReset=()=>{c.reset();let x=i.state().value();h.controlValue=x,sl(o,x);},n.listenToDom("input",()=>c.setRawValue(void 0)),n.listenToDom("blur",()=>i.state().markAsTouched()),ml(o)&&cd(o)&&t.watchValidity(i.destroyRef,o,()=>c.setRawValue(void 0)),i.registerAsBinding(),o.tagName==="SELECT"&&hd(o,()=>{r&&(o.value=i.state().controlValue());},i.destroyRef);let h=Er();return ()=>{let x=i.state();for(let F of Lo){let ae=Vo(x,F);if(Ut(h,F,ae)&&(n.setInputOnDirectives(F,ae),i.elementAcceptsNativeProperty(F))){let ue=ul(F,ae,o.type);MQ(i.renderer,o,F,ue);}}let R=x.controlValue();Ut(h,"controlValue",R)&&sl(o,R),r=true;}}var pl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:e=>gd.\u0275fac(e),providedIn:"root"})}return n})(),gd=(()=>{class n extends pl{document=m(z);cspNonce=m(Fc$1,{optional:true});injectedStyles=new WeakMap;watchValidity(e,t,r){let o=t.getRootNode();this.injectedStyles.has(o)||this.injectedStyles.set(o,this.createTransitionStyle(o));let c=h=>{let x=h;(x.animationName==="ng-valid"||x.animationName==="ng-invalid")&&r();};t.addEventListener("animationstart",c),e.onDestroy(()=>{t.removeEventListener("animationstart",c);});}isBadInput(e){return e.validity?.badInput??false}createTransitionStyle(e){let t=this.document.createElement("style");return this.cspNonce&&(t.nonce=this.cspNonce),t.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,e.nodeType===9?e.head?.appendChild(t):e.appendChild(t),t}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove();}static \u0275fac=(()=>{let e;return function(r){return (e||(e=yt(n)))(r||n)}})();static \u0275prov=k({token:n,factory:n.\u0275fac})}return n})(),bd=Symbol(),cl=new v(""),hl=(()=>{class n{field=gn.required({alias:"formField"});state=me(()=>this.field()());renderer=m(We);destroyRef=m(qt);injector=m(H$1);element=m(G).nativeElement;elementIsNativeFormElement=NQ(this.element);elementAcceptsTextualValues=eOe(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=m(Pa,{optional:true,self:true});config=m(td,{optional:true});validityMonitor=m(pl);parseErrorsSource=w(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new Ao(this.state)}parseErrors=me(()=>this.parseErrorsSource()?.().map(e=>m$1(l({},e),{fieldTree:q(this.state).fieldTree,formField:this}))??[],{equal:Fe});errors=me(()=>this.state().errors().filter(e=>!e.formField||e.formField===this),{equal:Fe});isFieldBinding=false;resetter=()=>{};parseErrorsResetCallback;setParseErrors(e){this.parseErrorsSource.set(e);}set onReset(e){this.parseErrorsResetCallback=e;}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return !this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:jQ(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,me(()=>o(this))]);if(e.length===0)return;let t=Er();A1({write:()=>{for(let[r,o]of e){let c=o();Ut(t,r,c)&&(c?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r));}}},{injector:this.injector});}focus(e){this.focuser(e);}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value());}registerAsBinding(e){if(this.isFieldBinding)throw new A$1(1913,false);this.isFieldBinding=true,this.installClassBindingEffect(),e?.focus&&(this.focuser=t=>e.focus(t)),e?.reset&&(this.resetter=()=>e.reset()),_t(t=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),t(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(c=>c!==this));});},{injector:this.injector});}[bd];\u0275ngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=pd(e,this);else if(e.customControl)this.\u0275ngControlUpdate=md(e,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=fd(e,this,this.parseErrorsSource,this.validityMonitor);else throw new A$1(1914,false)}\u0275ngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return  false;switch(e){case "min":case "max":return this._elementAcceptsMinMax??=J0e(this.element);case "minLength":case "maxLength":return this.elementAcceptsTextualValues;case "disabled":case "required":case "readonly":case "name":return  true;default:return  false}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[ot$1([{provide:cl,useExisting:n},{provide:Tr$1,useFactory:()=>m(n).interopNgControl},{provide:FQ,useFactory:()=>m(cl,{self:true})}]),UE("formField")]})}return n})();var vd=["*"];function yd(n,i){n&1&&(ke(0,"button",7)(1,"icon"),gr$1(2,"close"),Be()());}function xd(n,i){if(n&1&&Le(0,yd,3,0,"button",7),n&2){let e=vt(2);Fe$1(e.loading()?-1:0);}}function kd(n,i){if(n&1&&(ke(0,"a",8)(1,"icon"),gr$1(2,"close"),Be()()),n&2){let e=vt(3);Dn$1("routerLink",e.close());}}function Cd(n,i){if(n&1&&Le(0,kd,3,1,"a",8),n&2){let e=vt(2);Fe$1(e.loading()?-1:0);}}function Md(n,i){if(n&1&&Le(0,xd,1,1)(1,Cd,1,1),n&2){let e=vt();Fe$1(e.close()?.length?1:0);}}function wd(n,i){n&1&&(Pe(0),Ft(1,"div",9));}function Td(n,i){if(n&1&&(ke(0,"div",5),Ft(1,"mat-spinner",10),ke(2,"p",11),gr$1(3),Be()()),n&2){let e=vt();he(),Dn$1("diameter",32),he(2),Zd$1(e.loading());}}function Ed(n,i){if(n&1&&(ke(0,"kbd",14),gr$1(1),Be()),n&2){let e=vt(2);he(),Zd$1(e.confirm_hotkey());}}function Sd(n,i){if(n&1){let e=kD();ke(0,"footer",12)(1,"button",13),$e("click",function(){U_(e);let r=vt();return B_(r.confirm.emit())}),gr$1(2),Bp(3,"translate"),Le(4,Ed,2,1,"kbd",14),Be()();}if(n&2){let e=vt();Ne("max-w-156",!e.full_width()),he(),Dn$1("disabled",e.confirm_disabled()),he(),Fo$1(" ",e.confirm_text()||FD(3,5,"COMMON.SAVE")," "),he(2),Fe$1(e.confirm_hotkey()?4:-1);}}var Sr=(()=>{class n{constructor(){this.loading=gn(""),this.heading=gn("Fullscreen Modal"),this.confirm_text=gn(""),this.confirm_hotkey=gn(""),this.confirm_disabled=gn(false),this.close=gn([]),this.hide_confirm=gn(false),this.hide_close=gn(false),this.full_width=gn(false),this.confirm=BIe(),this.closed=BIe();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ve({type:n,selectors:[["fullscreen-modal-shell"],["","fs-modal-shell",""]],inputs:{loading:[1,"loading"],heading:[1,"heading"],confirm_text:[1,"confirm_text"],confirm_hotkey:[1,"confirm_hotkey"],confirm_disabled:[1,"confirm_disabled"],close:[1,"close"],hide_confirm:[1,"hide_confirm"],hide_close:[1,"hide_close"],full_width:[1,"full_width"]},outputs:{confirm:"confirm",closed:"closed"},ngContentSelectors:vd,decls:10,vars:14,consts:[[1,"bg-base-200","fixed","inset-0","flex","flex-col","items-center","overflow-auto","px-2"],[1,"border-base-300","bg-base-100","fixed","top-0","mx-auto","h-screen","max-w-full","border-x"],[1,"bg-base-200","sticky","top-0","z-10","mx-auto","my-2","flex","h-14","w-full","items-center","justify-between","rounded-sm","border-none","px-4","py-2"],[1,"flex","items-center","text-xl","font-medium","capitalize",3,"innerHTML"],[1,"z-0","mx-auto","h-1/2","w-full","flex-1","space-y-8","p-2"],[1,"flex","h-1/2","w-full","flex-1","flex-col","items-center","justify-center","space-y-4","p-12"],[1,"bg-base-200","fixed","bottom-0","left-1/2","z-10","mx-auto","my-2","flex","w-full","-translate-x-1/2","items-center","justify-end","rounded-sm","border-none","px-4","py-2",3,"max-w-156"],["icon","","matRipple","","mat-dialog-close",""],["icon","","matRipple","",3,"routerLink"],[1,"h-24","w-full"],[3,"diameter"],[1,"text-center","opacity-50"],[1,"bg-base-200","fixed","bottom-0","left-1/2","z-10","mx-auto","my-2","flex","w-full","-translate-x-1/2","items-center","justify-end","rounded-sm","border-none","px-4","py-2"],["btn","","matRipple","",1,"flex","min-w-32","items-center","justify-center","gap-2",3,"click","disabled"],[1,"border-base-300","bg-base-100","text-base-content","rounded","border","px-2","py-1","text-xs","leading-none","shadow-sm"]],template:function(t,r){t&1&&(Kt(),ke(0,"div",0),Ft(1,"div",1),ke(2,"header",2),Ft(3,"h2",3),Bp(4,"sanitize"),Le(5,Md,2,1),Be(),ke(6,"main",4),Le(7,wd,2,0)(8,Td,4,2,"div",5),Be(),Le(9,Sd,5,7,"footer",6),Be()),t&2&&(he(),Ne("w-160",!r.full_width())("w-full",r.full_width()),he(),Ne("max-w-156",!r.full_width()),he(),Dn$1("innerHTML",FD(4,12,r.heading()),XA),he(2),Fe$1(r.hide_close()?-1:5),he(),Ne("max-w-156",!r.full_width()),he(),Fe$1(r.loading()?8:7),he(2),Fe$1(!r.loading()&&!r.hide_confirm()?9:-1));},dependencies:[St,oi,_Xe,g7e,m7e,kl$1,a0,yZ,iv,net,$3],styles:["main[_ngcontent-%COMP%]{scroll-margin-top:60px}"]});}}return n})();var Id=["input"],Rd=["formField"],Od=["*"],Ir=class{source;value;constructor(i,e){this.source=i,this.value=e;}},Dd={provide:Pa,useExisting:nn(()=>Bi),multi:true},fl=new v("MatRadioGroup"),Nd=new v("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:false})}),Bi=(()=>{class n{_changeDetector=m(Tt);_value=null;_name=m(Bt$1).getId("mat-radio-group-");_selected=null;_isInitialized=false;_labelPosition="after";_disabled=false;_required=false;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new ne;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames();}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e==="before"?"before":"after",this._markRadiosForCheck();}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton());}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=true);}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton();}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck();}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck();}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck();}_disabledInteractive=false;ngAfterContentInit(){this._isInitialized=true,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null);});}ngOnDestroy(){this._buttonChanges?.unsubscribe();}_touch(){this.onTouched&&this.onTouched();}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck();});}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t);}));}_emitChangeEvent(){this._isInitialized&&this.change.emit(new Ir(this._selected,this._value));}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck());}writeValue(e){this.value=e,this._changeDetector.markForCheck();}registerOnChange(e){this._controlValueAccessorChangeFn=e;}registerOnTouched(e){this.onTouched=e;}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["mat-radio-group"]],contentQueries:function(t,r,o){if(t&1&&Qr(o,vi,5),t&2){let c;Ae(c=De())&&(r._radios=c);}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[2,"disabled","disabled",be],required:[2,"required","required",be],disabledInteractive:[2,"disabledInteractive","disabledInteractive",be]},outputs:{change:"change"},exportAs:["matRadioGroup"],features:[ot$1([Dd,{provide:fl,useExisting:n}])]})}return n})(),vi=(()=>{class n{_elementRef=m(G);_changeDetector=m(Tt);_focusMonitor=m(Wo);_radioDispatcher=m(no);_defaultOptions=m(Nd,{optional:true});_ngZone=m(B);_renderer=m(We);_uniqueId=m(Bt$1).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=false;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck());}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)));}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e;}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e);}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e;}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e;}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e;}_disabledInteractive;change=new ne;radioGroup;get inputId(){return `${this.id||this._uniqueId}-input`}_checked=false;_disabled=false;_required=false;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=Jt();_injector=m(H$1);constructor(){m(yn).load(xl$1);let e=m(fl,{optional:true}),t=m(new qE("tabindex"),{optional:true});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??false,t&&(this.tabIndex=Xd$1(t,0));}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e);}_markForCheck(){this._changeDetector.markForCheck();}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=false);});}ngDoCheck(){this._updateTabIndex();}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,true).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch();}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick);});}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener();}_emitChangeEvent(){this.change.emit(new Ir(this,this._value));}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=true,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent());}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus();}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck());}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault();};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let r=this._inputElement?.nativeElement;r&&(r.setAttribute("tabindex",t+""),this._previousTabIndex=t,Gt(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===r&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===r&&this._inputElement.nativeElement.blur());});},{injector:this._injector}));}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=ve({type:n,selectors:[["mat-radio-button"]],viewQuery:function(t,r){if(t&1&&Pn$1(Id,5)(Rd,7,G),t&2){let o;Ae(o=De())&&(r._inputElement=o.first),Ae(o=De())&&(r._rippleTrigger=o.first);}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(t,r){t&1&&$e("focus",function(){return r._inputElement.nativeElement.focus()}),t&2&&(Ge("id",r.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),Ne("mat-primary",r.color==="primary")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("mat-mdc-radio-checked",r.checked)("mat-mdc-radio-disabled",r.disabled)("mat-mdc-radio-disabled-interactive",r.disabledInteractive)("_mat-animation-noopable",r._noopAnimations));},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",be],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Xd$1(e)],checked:[2,"checked","checked",be],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",be],required:[2,"required","required",be],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",be]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:Od,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(t,r){t&1&&(Kt(),ke(0,"div",2,0)(2,"div",3)(3,"div",4),$e("click",function(c){return r._onTouchTargetClick(c)}),Be(),ke(4,"input",5,1),$e("change",function(c){return r._onInputInteraction(c)}),Be(),ke(6,"div",6),Ft(7,"div",7)(8,"div",8),Be(),ke(9,"div",9),Ft(10,"div",10),Be()(),ke(11,"label",11),Pe(12),Be()()),t&2&&(Dn$1("labelPosition",r.labelPosition),he(2),Ne("mdc-radio--disabled",r.disabled),he(2),Dn$1("id",r.inputId)("checked",r.checked)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),Ge("name",r.name)("value",r.value)("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),he(5),Dn$1("matRippleTrigger",r._rippleTrigger.nativeElement)("matRippleDisabled",r._isRippleDisabled())("matRippleCentered",true),he(2),Dn$1("for",r.inputId));},dependencies:[a0,rXe],styles:[`.mat-mdc-radio-button {
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
`],encapsulation:2})}return n})(),Rr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ce({type:n});static \u0275inj=oe({imports:[kl$1,vi,It$1]})}return n})();var bl=(()=>{class n{constructor(){this.url=m(gae);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ve({type:n,selectors:[["image-viewer"]],decls:5,vars:1,consts:[[1,"bg-base-200","h-screen","w-screen"],["auth","",1,"h-full","w-full","object-contain","object-center",3,"source"],["icon","","matRipple","","mat-dialog-close","",1,"bg-base-100","absolute","top-1","right-1"]],template:function(t,r){t&1&&(ke(0,"div",0),Ft(1,"img",1),ke(2,"button",2)(3,"icon"),gr$1(4,"close"),Be()()()),t&2&&(he(),Dn$1("source",r.url));},dependencies:[_Xe,It,g7e,m7e],encapsulation:2});}}return n})();var Ad=(n,i,e)=>({file:n,is_public:i,permissions:e});function Pd(n,i){if(n&1){let e=kD();ke(0,"div",7)(1,"label"),gr$1(2,"Permissions"),Be(),ke(3,"mat-form-field",11)(4,"mat-select",12),$e("ngModelChange",function(r){U_(e);let o=vt();return B_(o.permissions.set(r))}),ke(5,"mat-option",13),gr$1(6,"None"),Be(),ke(7,"mat-option",14),gr$1(8,"Support"),Be(),ke(9,"mat-option",15),gr$1(10,"Admin"),Be()(),s5(),Be()();}if(n&2){let e=vt();he(4),Dn$1("ngModel",e.permissions()),c5();}}var yl=(()=>{class n{constructor(){this._dialog_ref=m(rT),this._data=m(gae),this.file=this._data.file,this.is_public=w(!!this._data.is_public),this.permissions=w("none"),this.file=this._data.file;}close(){this._dialog_ref.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ve({type:n,selectors:[["upload-permissions-modal"]],decls:18,vars:7,consts:[[1,"bg-base-200","sticky","top-0","z-10","m-2","w-[calc(100%-1rem)]","rounded-sm","border-none","p-2"],[1,"px-2","text-xl","font-medium"],["icon","","matRipple","","mat-dialog-close",""],[1,"min-w-[20rem]","space-y-2","px-4","py-2"],[1,"flex","flex-col"],["appearance","outline",1,"no-subscript"],["matInput","","disabled","true","placeholder","File Name",3,"ngModel"],[1,"flex","flex-col","space-y-2"],[1,"border-base-200","flex","items-center","justify-end","space-x-2","border-t","px-4","py-2"],["btn","","matRipple","","mat-dialog-close","",1,"inverse","w-32"],["btn","","matRipple","",1,"w-32",3,"mat-dialog-close"],["appearance","outline"],[3,"ngModelChange","ngModel"],["value","none"],["value","support"],["value","admin"]],template:function(t,r){t&1&&(ke(0,"header",0)(1,"h2",1),gr$1(2,"Upload File"),Be(),ke(3,"button",2)(4,"icon"),gr$1(5,"close"),Be()()(),ke(6,"main",3)(7,"div",4)(8,"label"),gr$1(9,"File Name"),Be(),ke(10,"mat-form-field",5),Ft(11,"input",6),s5(),Be()(),Le(12,Pd,11,1,"div",7),Be(),ke(13,"footer",8)(14,"button",9),gr$1(15," Cancel "),Be(),ke(16,"button",10),gr$1(17," Upload "),Be()()),t&2&&(he(11),Dn$1("ngModel",r.file.name),c5(),he(),Fe$1(r.is_public()?-1:12),he(4),Dn$1("mat-dialog-close",d4(3,Ad,r.file,r.is_public(),r.permissions())));},dependencies:[g7e,m7e,aM,F3,aOe,gB,tOe,ZQ,ci,li,E3,_Xe,AJe,IJe,kl$1,a0],encapsulation:2});}}return n})();var Fd=["image_list"],Vd=["file_input"];function Ld(n,i){if(n&1){let e=kD();ke(0,"div",15),Ft(1,"img",16),ke(2,"div",17),Ft(3,"div",18),ke(4,"div",19)(5,"button",20),$e("click",function(){let r=U_(e).$implicit,o=vt();return B_(o.copyLink(r))}),ke(6,"icon"),gr$1(7,"link"),Be()(),ke(8,"button",20),$e("click",function(){let r=U_(e).$implicit,o=vt();return B_(o.viewImage(r))}),ke(9,"icon"),gr$1(10,"visibility"),Be()(),ke(11,"button",20),$e("click",function(){let r=U_(e).$implicit,o=vt();return B_(o.removeImage(r))}),ke(12,"icon"),gr$1(13,"close"),Be()()()()();}if(n&2){let e=i.$implicit,t=vt();LD("transform","translate(-"+t.offset()+"00%)"),he(),Dn$1("source",e);}}function Bd(n,i){if(n&1&&Ft(0,"mat-progress-spinner",22),n&2){let e=vt().$implicit;Dn$1("value",e.progress)("diameter",64);}}function Ud(n,i){n&1&&(ke(0,"icon",23),gr$1(1,"warning"),Be());}function zd(n,i){n&1&&(ke(0,"div",24)(1,"icon",25),gr$1(2,"refresh"),Be()());}function Gd(n,i){if(n&1){let e=kD();ke(0,"div",21),$e("click",function(){let r=U_(e).$implicit,o=vt();return B_(o.retryUpload(r))}),Le(1,Bd,1,2,"mat-progress-spinner",22),Le(2,Ud,2,0,"icon",23),Le(3,zd,3,0,"div",24),Be();}if(n&2){let e=i.$implicit,t=vt();LD("transform","translate(-"+t.offset()+"00%)"),Dn$1("matTooltip",e.error),he(),Fe$1(e.error?-1:1),he(),Fe$1(e.error?2:-1),he(),Fe$1(e.error?3:-1);}}function Hd(n,i){if(n&1){let e=kD();ke(0,"button",26),$e("click",function(){U_(e);let r=vt();return B_(r.previousOffset())}),ke(1,"icon"),gr$1(2,"chevron_left"),Be()();}if(n&2){let e=vt();Dn$1("disabled",e.offset()===0);}}function Wd(n,i){if(n&1){let e=kD();ke(0,"button",27),$e("click",function(){U_(e);let r=vt();return B_(r.nextOffset())}),ke(1,"icon"),gr$1(2,"chevron_right"),Be()();}if(n&2){let e=vt();Dn$1("disabled",e.offset()>=e.length()-e.view_space());}}function jd(n,i){if(n&1){let e=kD();ke(0,"mat-chip-row",28),$e("removed",function(){let r=U_(e).$implicit,o=vt();return B_(o.removeImage(r))}),ke(1,"div",29),gr$1(2),Be(),ke(3,"button",30)(4,"icon"),gr$1(5,"cancel"),Be()()();}if(n&2){let e=i.$implicit;he(2),Zd$1(e),he(),Ge("aria-label","Remove "+e);}}var xl=(()=>{class n extends io{constructor(){super(...arguments),this._clipboard=m(MH),this._uploads=m(M7e),this._dialog=m(oT),this._injector=m(H$1),this._upload_completion_effect=_t(()=>{let e=this.upload_list(),t=this.upload_ids();for(let r of t){let o=e.find(c=>c?.id===r);o&&o.progress>=100&&(this.addImageUrl(o.link),this.upload_ids.set(this.upload_ids().filter(c=>c!==r)));}},{injector:this._injector}),this.list=w([]),this.upload_map={},this.upload_ids=w([]),this.upload_list=w([]),this.offset=w(0),this.view_space=w(0),this.separators=[188,13],this.uploads=me(()=>{let e=this.upload_ids();return this.upload_list().filter(t=>e.includes(t?.id))}),this.length=me(()=>this.list().length+this.upload_list().length+1),this._list_el=Kc$1("image_list"),this._file_input=Kc$1("file_input"),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e;}ngAfterViewInit(){this.updateViewSpace();}updateViewSpace(){this.timeout("init_view_space",()=>{let e=this._list_el()?.nativeElement?.getBoundingClientRect();e&&this.view_space.set(Math.floor(e.width/152));},100);}copyLink(e){this._clipboard.copy(e),iH("Copied image URL to clipboard");}viewImage(e){this._dialog.open(bl,{data:e});}removeImage(e){this.setValue(this.list().filter(t=>t!==e));}addImage(e){e.value&&(this.setValue(Rr$1([...this.list(),e.value])),e.chipInput.inputElement.value="");}addImageUrl(e){this.setValue(Rr$1([...this.list(),e]));}retryUpload(e){e.error&&(e.error=null,e.upload.resume());}previousOffset(){this.offset.update(e=>e-1);}nextOffset(){this.offset.update(e=>e+1);}async uploadImages(e){let t=e.target;if(t?.files){let r=t.files;if(r.length){this.interval("update_status",()=>this._updateUploadHistory());for(let o=0;o<r.length;o++){let c=await this._uploads.uploadFileWithPermissions(r[o]);this.upload_ids.set([...this.upload_ids(),c]),this._file_input().nativeElement.value="";}}}}setValue(e){let t=e||[];this.list.set(t),this._onChange&&this._onChange(t);}writeValue(e){this.list.set(e||[]);}async _updateUploadHistory(){let e=this.upload_ids();if(e.length===0)return;let r=this._uploads.upload_list().filter(c=>e.find(h=>h===c?.id)),o=r.filter(c=>c.progress>=100);this.upload_list.set(r),o.forEach(c=>{console.log("ID:",l({},c)),this.upload_map[c?.id]=c.upload?.id||c?.id,delete c.upload;}),o.length>=e.length&&this.clearInterval("update_status");}static{this.\u0275fac=(()=>{let e;return function(r){return (e||(e=yt(n)))(r||n)}})();}static{this.\u0275cmp=ve({type:n,selectors:[["image-list-field"]],viewQuery:function(t,r){t&1&&qd$1(r._list_el,Fd,5)(r._file_input,Vd,5),t&2&&Kd$1(2);},features:[ot$1([{provide:Pa,useExisting:nn(()=>n),multi:true},{provide:nce,useValue:yl}]),Re],decls:23,vars:13,consts:[["image_list",""],["file_input",""],["chipList",""],["images","",1,"relative","mb-2","flex","w-full","items-center","space-x-2","overflow-hidden","py-2",3,"resize"],["image","",1,"border-base-200","hover:border-base-300","hover:bg-base-200","relative","flex","h-32","w-36","shrink-0","cursor-pointer","flex-col","items-center","justify-center","rounded-xl","border-2","border-dashed"],[1,"text-4xl","opacity-60"],[1,"px-4","text-center","opacity-60"],["type","file",1,"absolute","inset-0","h-32","w-32","cursor-pointer","opacity-0",3,"change"],["image","",1,"bg-base-200","relative","h-32","w-36","shrink-0","overflow-hidden","rounded-sm","bg-cover","bg-center",3,"transform"],["upload","",1,"border-base-content/10","/5","bg-base-200","flex","h-32","w-36","shrink-0","items-center","justify-center","rounded-sm","border","bg-cover","bg-center",3,"transform","matTooltip"],["icon","","matRipple","",1,"bg-base-100","absolute","top-1/2","left-0","-translate-y-1/2","transform",3,"disabled"],["icon","","matRipple","",1,"bg-base-100","absolute","top-1/2","right-0","-translate-y-1/2","transform",3,"disabled"],["appearance","outline",1,"w-full"],["aria-label","Image List"],[3,"matChipInputTokenEnd","placeholder","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur"],["image","",1,"bg-base-200","relative","h-32","w-36","shrink-0","overflow-hidden","rounded-sm","bg-cover","bg-center"],["auth","",1,"pointer-events-none","absolute","top-1/2","left-1/2","z-10","-translate-x-1/2","-translate-y-1/2","object-contain",3,"source"],["overlay","",1,"text-base-100","absolute","inset-0","z-20"],["bg","",1,"absolute","inset-0","bg-black","opacity-0"],["actions","",1,"absolute","top-0","right-0","left-0","flex","items-center","justify-center","space-x-2","opacity-0"],["icon","",3,"click"],["upload","",1,"border-base-content/10","/5","bg-base-200","flex","h-32","w-36","shrink-0","items-center","justify-center","rounded-sm","border","bg-cover","bg-center",3,"click","matTooltip"],["mode","determinate",3,"value","diameter"],[1,"text-error","text-6xl"],["overlay","",1,"text-base-100","hover:bg-base-content","hover:bg-opacity-50","absolute","inset-0","flex","items-center","justify-center"],[1,"text-3xl","opacity-0"],["icon","","matRipple","",1,"bg-base-100","absolute","top-1/2","left-0","-translate-y-1/2","transform",3,"click","disabled"],["icon","","matRipple","",1,"bg-base-100","absolute","top-1/2","right-0","-translate-y-1/2","transform",3,"click","disabled"],[3,"removed"],[1,"max-w-md","truncate"],["matChipRemove",""]],template:function(t,r){if(t&1&&(ke(0,"div",3,0),$e("resize",function(){return r.updateViewSpace()},Pq),ke(2,"div",4)(3,"icon",5),gr$1(4,"add"),Be(),ke(5,"p",6),gr$1(6),Bp(7,"translate"),Be(),ke(8,"input",7,1),$e("change",function(c){return r.uploadImages(c)}),Be()(),f8(10,Ld,14,3,"div",8,u8),f8(12,Gd,4,6,"div",9,u8),Le(14,Hd,3,1,"button",10),Le(15,Wd,3,1,"button",11),Be(),ke(16,"mat-form-field",12)(17,"mat-chip-grid",13,2),f8(19,jd,6,2,"mat-chip-row",null,u8),Be(),ke(21,"input",14),Bp(22,"translate"),$e("matChipInputTokenEnd",function(c){return r.addImage(c)}),Be()()),t&2){let o=GE(18);he(2),LD("transform","translate(-"+r.offset()+"00%)"),he(4),Fo$1(" ",FD(7,9,"COMMON.IMAGE_UPLOADS")," "),he(4),p8(r.list()),he(2),p8(r.uploads()),he(2),Fe$1(r.length()>r.view_space()?14:-1),he(),Fe$1(r.length()>r.view_space()?15:-1),he(4),p8(r.list()),he(2),Dn$1("placeholder",FD(22,11,"COMMON.IMAGE_ADD_URL"))("matChipInputFor",o)("matChipInputSeparatorKeyCodes",r.separators)("matChipInputAddOnBlur",true);}},dependencies:[aM,F3,qet,Yet,Wet,zet,Lle,St,oi,QJe,lle,_Xe,It,net],styles:["[_nghost-%COMP%]{width:100%}[overlay][_ngcontent-%COMP%]{transition:background .2s}[image][_ngcontent-%COMP%]:hover   [actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%]:hover > icon[_ngcontent-%COMP%]{opacity:1!important}[image][_ngcontent-%COMP%]:hover   [bg][_ngcontent-%COMP%]{opacity:.4!important}[actions][_ngcontent-%COMP%], [image][_ngcontent-%COMP%] > icon[_ngcontent-%COMP%]{transition:opacity .2s}[image][_ngcontent-%COMP%]{transition:transform .2s}"]});}}return n})();function Kd(n,i){if(n&1&&(Ft(0,"div",1),Bp(1,"safe")),n&2){let e=vt();Dn$1("innerHTML",UD(1,1,e.changelog(),"html"),XA);}}function qd(n,i){n&1&&(ke(0,"div",2)(1,"icon",3),gr$1(2,"close"),Be(),ke(3,"div",4),gr$1(4,"No changelog"),Be()());}var kl=(()=>{class n{constructor(){this._data=m(gae),this.loading=w(false),this.changelog=me(()=>lt(this._data.changelog||"",{async:false}));}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ve({type:n,selectors:[["changelog-modal"]],decls:3,vars:3,consts:[[3,"heading","hide_confirm"],[1,"markdown",3,"innerHTML"],[1,"flex","flex-col","items-center","justify-center","space-y-2"],[1,"text-3xl"],[1,"text"]],template:function(t,r){t&1&&(ke(0,"fullscreen-modal-shell",0),Le(1,Kd,2,4,"div",1)(2,qd,5,0,"div",2),Be()),t&2&&(Dn$1("heading","Changelog")("hide_confirm",true),he(),Fe$1(r.changelog()?1:2));},dependencies:[Sr,_Xe,v3],encapsulation:2});}}return n})();function $d(n,i){if(n&1&&(ke(0,"div",1),gr$1(1),Be()),n&2){let e=vt(2);he(),Fo$1(" ",e.initials," ");}}function Xd(n,i){if(n&1&&Ft(0,"img",2),n&2){let e=vt(2);Dn$1("alt",e.initials)("source",e.user().photo);}}function Yd(n,i){if(n&1&&(ke(0,"div",0),Le(1,$d,2,1,"div",1)(2,Xd,1,2,"img",2),Be()),n&2){let e=vt();Ge("user-id",e.user().id),he(),Fe$1(e.user().photo?2:1);}}var Or=(()=>{class n{constructor(){this.user=gn(void 0),this.is_valid=me(()=>{let e=this.user();if(!e)return  false;let t=(e.name||"").trim(),r=(e.email||"").trim();return t.startsWith("<empty>")||r.startsWith("<empty>")?false:!!(t||r||e.first_name||e.last_name)});}get initials(){let e=this.user();if(!e)return "NA";if(e.first_name&&e.last_name)return `${e.first_name[0]}${e.last_name[0]}`;let t=(e.name||"").replace(/<[^>]*>/g," ").trim();t||(t=(e.email||e.name||"").split("@")[0]);let r=t.replace(/[()[\]\-+=\\/@<>]+/gi," ").split(/\s+/).filter(Boolean);return r.length===0?"NA":r.length>1?`${r[0][0]}${r[r.length-1][0]}`:r[0].slice(0,2)}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ve({type:n,selectors:[["a-user-avatar"]],inputs:{user:[1,"user"]},decls:1,vars:1,consts:[[1,"border-base-100","bg-base-200","flex","h-[2.5em]","w-[2.5em]","items-center","justify-center","overflow-hidden","rounded-full","border-2"],["initials","",1,"text-base-content","uppercase","opacity-60"],["auth","",1,"flex","h-full","w-full","items-center","justify-center","object-cover","object-center",3,"alt","source"]],template:function(t,r){t&1&&Le(0,Yd,3,2,"div",0),t&2&&Fe$1(r.is_valid()?0:-1);},dependencies:[It],encapsulation:2});}}return n})();function Qd(n,i){if(n&1&&(ke(0,"mat-option",8),gr$1(1),Be()),n&2){let e=i.$implicit;Dn$1("value",e.display_name||e.name),he(),Fo$1(" ",e.display_name||e.name," ");}}function Zd(n,i){if(n&1&&(ke(0,"mat-option",8),gr$1(1),Be()),n&2){let e=i.$implicit;Dn$1("value",e?.name||e),he(),Fo$1(" ",e.name||e," ");}}function Jd(n,i){if(n&1&&(ke(0,"div",5)(1,"label"),gr$1(2),Bp(3,"translate"),Be(),ke(4,"mat-form-field",6)(5,"mat-select",7),Bp(6,"translate"),f8(7,Zd,2,2,"mat-option",8,u8),Be(),s5(),Be()()),n&2){let e=vt();he(2),Zd$1(FD(3,3,"COMMON.SUPPORT_TYPE")),he(3),Dn$1("placeholder",FD(6,5,"COMMON.SUPPORT_TYPE"))("formField",e.form.issue_type),c5(),he(2),p8(e.support_request_types());}}function em(n,i){n&1&&(ke(0,"mat-error",11),gr$1(1),Bp(2,"translate"),Be()),n&2&&(he(),Fo$1(" ",FD(2,1,"COMMON.SUPPORT_DESCRIPTION_REQUIRED")," "));}function tm(n,i){if(n&1&&(ke(0,"div",12)(1,"label",10),gr$1(2),Bp(3,"translate"),Be(),Ft(4,"image-list-field",14),s5(),Be()),n&2){let e=vt();he(2),Zd$1(FD(3,2,"COMMON.SUPPORT_IMAGES")),he(2),Dn$1("formField",e.form.images),c5();}}var Ml=(()=>{class n{constructor(){this._dialog_ref=m(rT),this._org=m(tT),this._settings=m(qs$1),this._support_email=this._settings.signal("support_email","support@place.tech"),this._support_issue_types=this._settings.signal("support_issue_types",[]),this._allow_images=this._settings.signal("allow_support_ticket_images",false),this.loading=w(false),this.model=w({name:"",email:"",location:"",description:"",issue_type:"",images:[]}),this.form=Ro(this.model,e=>{Tr(e.name),Tr(e.email),Tr(e.description);}),this.desc_error=w(false),this.support_email=this._support_email,this.support_request_types=this._support_issue_types,this.allow_images=this._allow_images,this.buildings=this._org.building_list;}ngOnInit(){let e=ao$1();e&&this.model.update(t=>m$1(l({},t),{name:e.name,email:e.email})),this._org.building&&this.model.update(t=>m$1(l({},t),{location:this._org.building.display_name||this._org.building.name}));}async submit(){if(this.loading.set(true),this.form().markAsTouched(),this._updateDescError(),this.form().valid()){let e=this._org.module("smtp","Mailer");if(!e)return tH(bi$1("COMMON.SUPPORT_NO_MAILER"));let{name:t,email:r,location:o,description:c,images:h,issue_type:x}=this.model(),R=this.support_request_types().find(ae=>ae.name===x)?.email||this.support_email(),F=bi$1("COMMON.SUPPORT_MAIL_HEADER",{issue_type:x?" - "+x:""});await e.execute("send_mail",[R,F,`${t}
${r}

${o}

${c.replace(/<[^>]+>/g,"")}

${h.join(`
`)}`,`<p>${t}</p><p>${r}</p><p>${o}</p><p>${c}</p>${h.join("<br>")}`,[],[],[],[],null,`${r}`]),this._dialog_ref.close(),this.loading.set(false),nb(bi$1("COMMON.SUPPORT_SUCCESS"));}}_updateDescError(){this.desc_error.set(this.form.description().invalid()&&this.form.description().touched());}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ve({type:n,selectors:[["support-ticket-modal"]],decls:51,vars:45,consts:[[3,"confirm","heading","loading","confirm_text"],[1,"flex","flex-wrap","items-center","sm:space-x-2"],[1,"flex","flex-1","flex-col"],["appearance","outline"],["matInput","",3,"placeholder","formField"],[1,"flex","flex-col"],["appearance","outline",1,"w-full"],[3,"placeholder","formField"],[3,"value"],[1,""],[1,"mb-4"],[1,"my-2","text-xs"],[1,"pt-4"],[1,"mb-2","text-center","text-xs","italic"],[3,"formField"]],template:function(t,r){t&1&&(ke(0,"fullscreen-modal-shell",0),Bp(1,"translate"),$e("confirm",function(){return r.submit()}),ke(2,"form")(3,"div",1)(4,"div",2)(5,"label"),gr$1(6),Bp(7,"translate"),ke(8,"span"),gr$1(9,"*"),Be()(),ke(10,"mat-form-field",3),Ft(11,"input",4),Bp(12,"translate"),s5(),ke(13,"mat-error"),gr$1(14),Bp(15,"translate"),Be()()(),ke(16,"div",2)(17,"label"),gr$1(18),Bp(19,"translate"),ke(20,"span"),gr$1(21,"*"),Be()(),ke(22,"mat-form-field",3),Ft(23,"input",4),Bp(24,"translate"),s5(),ke(25,"mat-error"),gr$1(26),Bp(27,"translate"),Be()()()(),ke(28,"div",5)(29,"label"),gr$1(30),Bp(31,"translate"),Be(),ke(32,"mat-form-field",6)(33,"mat-select",7),Bp(34,"translate"),f8(35,Qd,2,2,"mat-option",8,u8),Be(),s5(),Be()(),Le(37,Jd,9,7,"div",5),ke(38,"div",9)(39,"label",10),gr$1(40),Bp(41,"translate"),ke(42,"span"),gr$1(43,"*"),Be()(),Ft(44,"rich-text-input",7),Bp(45,"translate"),s5(),Le(46,em,3,3,"mat-error",11),Be(),Le(47,tm,5,4,"div",12),Be(),ke(48,"div",13),gr$1(49),Bp(50,"translate"),Be()()),t&2&&(Dn$1("heading","Raise a support ticket")("loading",r.loading()?"true":"")("confirm_text",FD(1,21,"COMMON.SUBMIT")),he(6),Zd$1(FD(7,23,"FORM.NAME")),he(5),Dn$1("placeholder",FD(12,25,"FORM.NAME"))("formField",r.form.name),c5(),he(3),Zd$1(FD(15,27,"FORM.NAME_REQUIRED")),he(4),Zd$1(FD(19,29,"FORM.EMAIL")),he(5),Dn$1("placeholder",FD(24,31,"FORM.EMAIL"))("formField",r.form.email),c5(),he(3),Zd$1(FD(27,33,"FORM.EMAIL_REQUIRED")),he(4),Zd$1(FD(31,35,"COMMON.SUPPORT_LOCATION")),he(3),Dn$1("placeholder",FD(34,37,"COMMON.SUPPORT_LOCATION"))("formField",r.form.location),c5(),he(2),p8(r.buildings()),he(2),Fe$1(r.support_request_types().length?37:-1),he(3),Fo$1(" ",FD(41,39,"COMMON.SUPPORT_DESCRIPTION")," "),he(4),Dn$1("placeholder",FD(45,41,"COMMON.SUPPORT_DESCRIPTION"))("formField",r.form.description),c5(),he(2),Fe$1(r.desc_error()?46:-1),he(),Fe$1(r.allow_images()?47:-1),he(2),Fo$1(" ",FD(50,43,"COMMON.SUPPORT_MSG")," "));},dependencies:[hy,aM,F3,$ce,AJe,IJe,hl,St,kl$1,Cl,xl,ci,li,E3,g7e,Sr,net],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]});}}return n})();var im=["*"],nm=(n,i)=>i.id;function rm(n,i){if(n&1&&(ke(0,"div",4),gr$1(1),Bp(2,"date"),Be()),n&2){let e=vt();he(),Fo$1(" ",v4(2,1,e.active_time(),e.time_format()+" (z)",e.tz())," ");}}function om(n,i){if(n&1&&(ke(0,"div",13),gr$1(1),Bp(2,"date"),Be()),n&2){let e=vt(2);he(),Fo$1(" ",v4(2,1,e.force_time(),e.time_format()+" (z)",e.tz())," ");}}function am(n,i){n&1&&(ke(0,"icon",14),gr$1(1," done "),Be());}function sm(n,i){if(n&1){let e=kD();ke(0,"button",9),$e("click",function(){U_(e);let r=vt();return B_(r.setValue(r.force_time().toString()))}),ke(1,"div",10)(2,"div",11)(3,"div",12),gr$1(4),Bp(5,"date"),Be(),Le(6,om,3,5,"div",13),Be(),Le(7,am,2,0,"icon",14),Be()();}if(n&2){let e=vt();Dn$1("value",e.force_time()),he(4),Fo$1(" ",UD(5,4,e.force_time(),e.time_format())," "),he(2),Fe$1(e.timezone()&&e.tz()?6:-1),he(),Fe$1(e.active_time()===e.force_time()?7:-1);}}function lm(n,i){if(n&1&&(ke(0,"div",13),gr$1(1),Bp(2,"date"),Be()),n&2){let e=vt().$implicit,t=vt();he(),Fo$1(" ",v4(2,1,e.date,t.time_format()+" (z)",t.tz())," ");}}function cm(n,i){n&1&&(ke(0,"icon",14),gr$1(1," done "),Be());}function dm(n,i){if(n&1){let e=kD();ke(0,"button",9),$e("click",function(){let r=U_(e).$implicit,o=vt();return B_(o.setValue(r.id))}),ke(1,"div",10)(2,"div",11)(3,"div",12),gr$1(4),Bp(5,"date"),Be(),Le(6,lm,3,5,"div",13),Be(),Le(7,cm,2,0,"icon",14),Be()();}if(n&2){let e=i.$implicit,t=vt();Dn$1("value",e.id),Ge("data-time",e.id),he(4),YL(" ",UD(5,6,e.date,t.time_format())," ",t.extra_info_fn()(e.date)," "),he(2),Fe$1(t.timezone()&&t.tz()?6:-1),he(),Fe$1(t.active_time()===e.date?7:-1);}}function mm(n,i){n&1&&(ke(0,"div",8),gr$1(1,"No time options to select"),Be());}function um(n,i){n&1&&(ke(0,"mat-error"),Pe(1),Be());}var wl=(()=>{class n extends io{constructor(){super(...arguments),this.step=gn(15),this.disabled=VIe(void 0),this.no_past_times=gn(true),this.use_24hr=gn(false),this.force_time=gn(void 0),this.no_error=gn(void 0),this.extra_info_fn=gn(e=>""),this.from=gn(Cn(Date.now()).valueOf()),this.range=gn(void 0),this.min_duration=gn(0),this.timezone=gn(""),this.date=w(new Date().valueOf()),this.time=w(no$1(new Date,"HH:mm")),this._time_options=w([]),this.show_select=w(false),this.active_time=w(Date.now()),this.no_options=w(false),this._menu_trigger=Kc$1(ut),this.time_format=me(()=>this.use_24hr()?"HH : mm":"h : mm a"),this._local_tz=fxe(Intl.DateTimeFormat().resolvedOptions().timeZone),this.tz=me(()=>{let e=this.timezone();if(!e)return "";let t=fxe(e);return t===this._local_tz?"":t});}ngOnInit(){this.show_select.set(true),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions(),this.timeout("hide",()=>this.show_select.set(false));let e=this.timezone()||void 0;this.active_time.set(this._time_options().find(t=>t.id===hxe(this.date(),e))?.date||this.active_time());}ngOnChanges(e){(e.no_past_times||e.step||e.from||e.range||e.min_duration)&&(this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions());}ngAfterViewInit(){let e=this._menu_trigger();e&&this.subscription("menu_opened",e.menuOpened.subscribe(()=>{this._scrollToSelectedTime();}));}_scrollToSelectedTime(){requestAnimationFrame(()=>{if(!this._menu_trigger()?.menu)return;let t=document.querySelector(".mat-mdc-menu-panel");if(!t)return;let r=this.timezone()||void 0,o=this.time()||hxe(new Date,r),c=t.querySelector(`[data-time="${o}"]`);if(!c&&this._time_options().length){let h=this._timeToMinutes(o),x=this._time_options()[0],R=1/0;for(let F of this._time_options()){let ae=this._timeToMinutes(F.id),ue=Math.abs(ae-h);ue<R&&(R=ue,x=F);}c=t.querySelector(`[data-time="${x.id}"]`);}if(c){if(typeof c.scrollIntoView!="function")return;c.scrollIntoView({block:"center",behavior:"instant"});}});}_timeToMinutes(e){let[t,r]=e.split(":").map(Number);return t*60+r}time_options(){let e=this.timezone()||void 0,t=(this.time()||"00:00").split(":"),r=mxe(this.date(),+t[0],+t[1],e),{minutes:o}=ZJ(r,e),c=hxe(r,e),h=[...this._time_options()];return o%this.step()!==0&&this._isWithinRange(r)&&!h.find(x=>x.id===c)&&(h.push({date:r,id:c}),h.sort((x,R)=>`${x.id}`.localeCompare(`${R.id}`))),h}setValue(e){this.time.set(e);let t=this.timezone()||void 0;if(this._onChange){let h=(this.time()||"00:00").split(":"),x=mxe(this.date(),+h[0],+h[1],t);Axe(),this._onChange(x);}let r=this.force_time()||this.time(),o=(typeof r=="string"?r:hxe(r,t)).split(":"),c=mxe(this.date(),+o[0],+o[1],t);this.active_time.set(this._time_options().find(h=>h.id===(typeof r=="string"?r:hxe(r,t)))?.date||c);}writeValue(e){this.date.set(e||this.date());let t=this.timezone()||void 0,r=Sl(this.date());r=Tl$1(r,{nearestTo:5}),this.time.set(hxe(r,t)),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times(),this.step())),this._updateNoOptions();let o=this.force_time(),c=o?hxe(o,t):this.time();this.active_time.set(this._time_options().find(h=>h.id===c)?.date||r.valueOf());}setDisabledState(e){this.disabled.set(e),this._time_options.set(this.generateAvailableTimes(this.date(),!this.no_past_times()||e,this.step())),this._updateNoOptions();}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouch=e;}_updateNoOptions(){this.no_options.set(!this.disabled()&&(!this._time_options()||this._time_options().length===0)&&!this.force_time());}generateAvailableTimes(e,t,r=15){let o=t?this.from():Math.max(this.from(),Date.now()),c=[],h=this.range(),x=this.timezone()||void 0,R=x?zo$1(e,x):Cn(e).valueOf(),F=x?Yo(e,x):Sr$1(e).valueOf(),ae=this.min_duration()||0,ue=h?h.start*60:void 0,pt=h?h.end*60:void 0,st=pt!=null&&ae>0?pt-ae:pt,xi=Math.max(R,o,ue!=null?R+ue*60*1e3:R),G=Math.min(F,st!=null?R+st*60*1e3:F);if(xi>G)return c;let te=this._roundUpToStep(xi,r),Le=this._roundDownToStep(G,r);for(;!Ga(te,Le);)c.push({date:te.valueOf(),id:hxe(te,x)}),te=gt(te,r);return c}_isWithinRange(e){if(Xi(e,this.from()))return  false;let t=this.range();if(!t)return  true;let r=t.start*60,o=t.end*60,c=this.min_duration()||0,h=c>0?o-c:o,x=this.timezone()||void 0,{hours:R,minutes:F}=ZJ(e,x),ae=R*60+F;return !(ae<r||ae>h)}_roundUpToStep(e,t){let r=Tl$1(e,{nearestTo:t});return Xi(r,e)&&(r=gt(r,t)),Sl(r)}_roundDownToStep(e,t){let r=Tl$1(e,{nearestTo:t});return Ga(r,e)&&(r=gt(r,-t)),Sl(r)}static{this.\u0275fac=(()=>{let e;return function(r){return (e||(e=yt(n)))(r||n)}})();}static{this.\u0275cmp=ve({type:n,selectors:[["a-time-field"],["time-field"]],viewQuery:function(t,r){t&1&&qd$1(r._menu_trigger,ut,5),t&2&&Kd$1();},inputs:{step:[1,"step"],disabled:[1,"disabled"],no_past_times:[1,"no_past_times"],use_24hr:[1,"use_24hr"],force_time:[1,"force_time"],no_error:[1,"no_error"],extra_info_fn:[1,"extra_info_fn"],from:[1,"from"],range:[1,"range"],min_duration:[1,"min_duration"],timezone:[1,"timezone"]},outputs:{disabled:"disabledChange"},features:[ot$1([{provide:Pa,useExisting:nn(()=>n),multi:true}]),Re,Et],ngContentSelectors:im,decls:15,vars:12,consts:[["menu","matMenu"],["type","button","time-field","","matRipple","",1,"border-neutral","flex","h-12","w-full","items-center","justify-between","rounded-sm","border","px-2",3,"disabled","matMenuTriggerFor"],[1,"flex","w-1/2","flex-1","flex-col","px-2","text-left","leading-tight"],[1,"truncate"],[1,"truncate","text-xs","opacity-30"],[1,"text-2xl"],[1,"max-h-60","min-w-[18rem]"],["type","button","mat-menu-item","",1,"text-left",3,"value"],["mat-menu-item","","disabled",""],["type","button","mat-menu-item","",1,"text-left",3,"click","value"],[1,"flex","items-center","justify-between"],[1,"flex","flex-col","leading-tight"],[1,""],[1,"text-xs","opacity-30"],[1,"ml-2","text-2xl"]],template:function(t,r){if(t&1&&(Kt(),ke(0,"button",1)(1,"div",2)(2,"div",3),gr$1(3),Bp(4,"date"),Be(),Le(5,rm,3,5,"div",4),Be(),ke(6,"icon",5),gr$1(7,"arrow_drop_down"),Be()(),ke(8,"mat-menu",6,0),Le(10,sm,8,7,"button",7),f8(11,dm,8,9,"button",7,nm,false,mm,2,0,"div",8),Be(),Le(14,um,2,0,"mat-error")),t&2){let o=GE(9);Ne("opacity-30",r.disabled()||r.no_options()),Dn$1("disabled",r.disabled()||r.no_options())("matMenuTriggerFor",o),he(3),Fo$1(" ",UD(4,9,r.active_time(),r.time_format())," "),he(2),Fe$1(r.timezone()&&r.tz()?5:-1),he(5),Fe$1(r.force_time()?10:-1),he(),p8(r.time_options()),he(3),Fe$1(r.no_error()?-1:14);}},dependencies:[hy,si,rt,mt,ut,aM,$ce,_Xe,$6],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]});}}return n})();function pm(n,i){n&1&&(ke(0,"button",2)(1,"icon"),gr$1(2,"close"),Be()());}function hm(n,i){if(n&1){let e=kD();ke(0,"div",7)(1,"div",11),gr$1(2),Bp(3,"date"),Be(),ke(4,"mat-checkbox",12),$e("ngModelChange",function(r){let o=U_(e).$implicit,c=vt(2);return c.setWeekdayEnabled(o.getDay(),r),B_(r&&c.initialiseDay(o.getDay()))}),Be(),s5(),Be();}if(n&2){let e=i.$implicit,t=vt(2);he(2),Fo$1(" ",UD(3,2,e,"EEE")," "),he(2),Dn$1("ngModel",t.weekdays_enabled()[e.getDay()]),c5();}}function _m(n,i){if(n&1&&(ke(0,"mat-option",20),gr$1(1),Be()),n&2){let e=i.$implicit;Dn$1("value",e.id),he(),Fo$1(" ",e.name," ");}}function fm(n,i){if(n&1){let e=kD();ke(0,"button",23),$e("click",function(){U_(e);let r=vt().$index,o=vt(2).$implicit,c=vt(3);return B_(c.addBlock(c.settings()[o.getDay()],r))}),ke(1,"icon"),gr$1(2,"add"),Be()();}}function gm(n,i){if(n&1){let e=kD();ke(0,"button",24),$e("click",function(){U_(e);let r=vt().$index,o=vt(2).$implicit,c=vt(3);return B_(c.removeBlock(c.settings()[o.getDay()],r))}),ke(1,"icon"),gr$1(2,"delete"),Be()();}}function bm(n,i){if(n&1){let e=kD();ke(0,"div",16)(1,"a-time-field",18),$e("ngModelChange",function(r){let o=U_(e).$implicit,c=vt(2).$implicit,h=vt(3);return B_(h.setStartTime(o,c.getDay(),r))}),Be(),s5(),ke(2,"a-time-field",18),$e("ngModelChange",function(r){let o=U_(e).$implicit,c=vt(2).$implicit,h=vt(3);return B_(h.setEndTime(o,c.getDay(),r))}),Be(),s5(),ke(3,"mat-form-field",19)(4,"mat-select",12),ZL("ngModelChange",function(r){let o=U_(e).$implicit;return J8(o.location,r)||(o.location=r),B_(r)}),f8(5,_m,2,2,"mat-option",20,u8),Be(),s5(),Be(),Le(7,fm,3,0,"button",21),Le(8,gm,3,0,"button",22),Be();}if(n&2){let e=i.$implicit,t=i.$index,r=vt(2).$implicit,o=vt(3);he(),Dn$1("ngModel",o.timeFrom(e.start_time))("from",o.timeFrom((t>0?o.settings()[r.getDay()].blocks[t-1]?.end_time:0)||0))("no_error",true),c5(),he(),Dn$1("ngModel",o.timeFrom(e.end_time))("from",o.timeFrom(e.start_time+.25))("no_error",true),c5(),he(2),KL("ngModel",e.location),c5(),he(),p8(o.options()),he(2),Fe$1(t===0?7:-1),he(),Fe$1(t!==0?8:-1);}}function vm(n,i){if(n&1&&(ke(0,"div",14)(1,"div",15),f8(2,bm,9,9,"div",16,u8),Be(),ke(4,"h3",17),gr$1(5),Bp(6,"date"),Be()()),n&2){let e=vt().$implicit,t=vt(3);he(2),p8(t.settings()[e.getDay()].blocks),he(3),Fo$1(" ",UD(6,1,e,"EEEE")," ");}}function ym(n,i){if(n&1&&Le(0,vm,7,4,"div",14),n&2){let e=i.$implicit,t=vt(3);Fe$1(t.weekdays_enabled()[e.getDay()]?0:-1);}}function xm(n,i){if(n&1&&(ke(0,"div",9),f8(1,ym,1,1,null,null,u8),ke(3,"h3",13),gr$1(4),Bp(5,"translate"),Be()()),n&2){let e=vt(2);he(),p8(e.days),he(3),Fo$1(" ",FD(5,1,"COMMON.WORK_HOURS")," ");}}function km(n,i){n&1&&(ke(0,"div",10),Ft(1,"img",25),ke(2,"p",26),gr$1(3),Bp(4,"translate"),Be()()),n&2&&(he(3),Fo$1(" ",FD(4,1,"COMMON.WORK_SETTINGS_EMPTY")," "));}function Cm(n,i){if(n&1&&(ke(0,"main",3)(1,"div",6),f8(2,hm,5,5,"div",7,u8),ke(4,"h3",8),gr$1(5),Bp(6,"translate"),Be()(),Le(7,xm,6,3,"div",9)(8,km,5,3,"div",10),Be()),n&2){let e=vt();he(2),p8(e.days),he(3),Fo$1(" ",FD(6,2,"COMMON.WORK_DAYS")," "),he(2),Fe$1(e.has_working_days()?7:8);}}function Mm(n,i){n&1&&(ke(0,"div",4),Ft(1,"mat-spinner",27),ke(2,"p",26),gr$1(3),Bp(4,"translate"),Be()()),n&2&&(he(),Dn$1("diameter",32),he(2),Fo$1(" ",FD(4,2,"COMMON.WORK_SETTINGS_SAVE")," "));}function wm(n,i){if(n&1){let e=kD();ke(0,"footer",5)(1,"button",28),$e("click",function(){U_(e);let r=vt();return B_(r.saveChanges())}),gr$1(2),Bp(3,"translate"),Be()();}n&2&&(he(2),Fo$1(" ",FD(3,1,"COMMON.SAVE")," "));}var Dr=(()=>{class n{constructor(){this._data=m(gae),this._dialog_ref=m(rT),this.options=w([]),this.option=w(""),this.settings=w([]),this.weekdays_enabled=w({}),this.changed=w(false),this.loading=w(false),this.available_weekdays=w([]),this.days=new Array(7).fill(0).map((e,t)=>Fn$1(Us$1(Fn$1(Date.now(),30)),t)),this.has_working_days=me(()=>{let e=this.weekdays_enabled();return Object.keys(e).some(t=>e[t])}),this.option_name=me(()=>this.options().find(e=>e.id===this.option())?.name||""),this.now=me(()=>Sl(Date.now()).getTime());}ngOnInit(){let e=ao$1(),r=[...((this._data?.local?this._data.preferences:e.work_preferences)||[]).map(h=>m$1(l({},h),{blocks:[...h?.blocks||[]]}))],o={};for(let h of r)h.blocks.length&&(o[h.day_of_week]=true);this.settings.set(r),this.weekdays_enabled.set(o);let c=[{id:"wfo",name:bi$1("COMMON.WORK_OFFICE"),icon:"business"},{id:"wfh",name:bi$1("COMMON.WORK_HOME"),icon:"home"},{id:"aol",name:bi$1("COMMON.WORK_LEAVE"),icon:"event_busy"}];this.options.set(c),this.option.set(c[0].id);}timeFrom(e){return Sl(Cr$1(Fn$1(new Date,1),{hours:Math.floor(e),minutes:e*60%60})).getTime()}fromTime(e){let t=new Date(e);return t.getHours()+t.getMinutes()/60}initialiseDay(e){let t=this.settings();t[e]||(t[e]={day_of_week:e,blocks:[]}),t[e].blocks||(t[e].blocks=[]),t[e].blocks.length===0&&this.addBlock(t[e],0),this.settings.set([...t]);}addBlock(e,t){e.blocks.splice(t+1,0,{start_time:9,end_time:17,location:"wfo"}),this.cleanupBlocks(e),this.settings.update(r=>[...r]);}removeBlock(e,t){e.blocks.length<=1||(e.blocks.splice(t,1),this.settings.update(r=>[...r]));}setEndTime(e,t,r){setTimeout(()=>{e.end_time=this.fromTime(r),this.cleanupBlocks(this.settings()[t]),this.settings.update(o=>[...o]);},50);}setStartTime(e,t,r){setTimeout(()=>{e.start_time=this.fromTime(r),this.cleanupBlocks(this.settings()[t]),this.settings.update(o=>[...o]);},50);}cleanupBlocks(e){if(e?.blocks?.length)for(let t=0;t<e.blocks.length;t++){let r=e.blocks[t];t>0&&r.start_time<e.blocks[t-1].end_time&&(r.start_time=e.blocks[t-1].end_time),r.end_time<=r.start_time&&(r.end_time=r.start_time+1);}}async saveChanges(e=true){this.loading.set(true),this._dialog_ref.disableClose=true;let t=new Array(7).fill(0).map((r,o)=>({day_of_week:o,blocks:[]}));for(let r of this.days){let o=r.getDay();this.weekdays_enabled()[o]&&(t[o]={day_of_week:o,blocks:this.settings()[o].blocks});}if(!this._data?.local){let r=await rw("current");await RV(r.id,m$1(l({},r),{groups:r.groups.filter(o=>!o.startsWith("placeos_")),work_preferences:t})).catch(o=>{throw this.loading.set(false),this._dialog_ref.disableClose=false,tH("Unable to save user work preferences."),o});}this.loading.set(false),this._dialog_ref.disableClose=false,e&&(this._data?.local||IH(),this._dialog_ref.close(t));}setWeekdayEnabled(e,t){this.weekdays_enabled.update(r=>m$1(l({},r),{[e]:t}));}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ve({type:n,selectors:[["wfh-settings-modal"]],decls:8,vars:6,consts:[[1,"bg-base-200","sticky","top-0","z-10","m-2","w-[calc(100%-1rem)]","rounded-sm","border-none","p-2"],[1,"px-2","text-xl","font-medium"],["icon","","matRipple","","mat-dialog-close","",1,"bg-base-200"],[1,"relative","flex","max-h-[calc(100vh-9rem)]","w-160","max-w-full","flex-col","space-y-2","overflow-x-hidden","overflow-y-auto","rounded-sm","px-2","py-4","sm:max-h-[65vh]","sm:p-4"],["loading","",1,"bg-base-100","relative","flex","h-72","w-[24rem]","flex-col","items-center","justify-center","space-y-2","overflow-hidden","rounded-sm","text-center"],[1,"border-base-200","flex","justify-end","border-t","px-4","py-2"],[1,"border-base-300","relative","mb-4","flex","w-full","items-center","justify-between","space-x-2","rounded-sm","border","p-2"],[1,"flex","flex-1","flex-col","items-center","pt-2"],[1,"bg-base-100","absolute","top-0","left-2","-translate-y-1/2","px-2"],[1,"border-base-300","relative","flex","w-full","flex-col","items-center","justify-between","space-y-4","rounded-sm","border","px-2","pt-6","pb-4","sm:px-4"],[1,"flex","flex-col","items-center","justify-center","space-y-4","px-8","py-16"],[1,"text-xs","font-bold","uppercase"],[3,"ngModelChange","ngModel"],[1,"bg-base-100","absolute","top-0","left-2","m-0!","-translate-y-1/2","px-2"],[1,"border-base-200","relative","flex","w-full","items-center","justify-between","space-x-2","rounded-sm","border","p-2"],[1,"w-1/2","flex-1","space-y-2","pt-2"],[1,"flex","items-center","space-x-2"],[1,"border-base-200","bg-base-100","bg-opacity-50","absolute","top-0","left-2","-translate-y-1/2","rounded-sm","border","px-2","text-sm","font-medium"],[1,"w-1/4","flex-1",3,"ngModelChange","ngModel","from","no_error"],["appearance","outline",1,"no-subscript","w-1/4","flex-1"],[3,"value"],["icon","","matRipple","",1,"border-base-400","h-12","w-12","rounded-sm","border"],["icon","","matRipple","",1,"border-error","text-error","h-12","w-12","rounded-sm","border"],["icon","","matRipple","",1,"border-base-400","h-12","w-12","rounded-sm","border",3,"click"],["icon","","matRipple","",1,"border-error","text-error","h-12","w-12","rounded-sm","border",3,"click"],["src","assets/icons/no-results.svg",1,"m-auto"],[1,"opacity-30"],[3,"diameter"],["btn","","matRipple","",1,"w-48",3,"click"]],template:function(t,r){t&1&&(ke(0,"header",0)(1,"h2",1),gr$1(2),Bp(3,"translate"),Be(),Le(4,pm,3,0,"button",2),Be(),Le(5,Cm,9,4,"main",3)(6,Mm,5,4,"div",4),Le(7,wm,4,3,"footer",5)),t&2&&(he(2),Fo$1(" ",FD(3,4,"COMMON.WORK_LOCATION_SETTINGS")," "),he(2),Fe$1(r.loading()?-1:4),he(),Fe$1(r.loading()?6:5),he(2),Fe$1(r.loading()?-1:7));},dependencies:[hy,g7e,m7e,kl$1,a0,aM,F3,ci,li,E3,wl,pr,Ai,aOe,tOe,ZQ,_Xe,St,oi,$6,net],encapsulation:2});}}return n})();var Tm=["knob"],Em=["valueIndicatorContainer"];function Sm(n,i){if(n&1&&(ke(0,"div",2,1)(2,"div",5)(3,"span",6),gr$1(4),Be()()()),n&2){let e=vt();he(4),Zd$1(e.valueIndicatorText);}}var Im=["trackActive"],Rm=["*"];function Om(n,i){if(n&1&&Ft(0,"div"),n&2){let e=i.$implicit,t=i.$index,r=vt(3);Os$1(e===0?"mdc-slider__tick-mark--active":"mdc-slider__tick-mark--inactive"),LD("transform",r._calcTickMarkTransform(t));}}function Dm(n,i){if(n&1&&f8(0,Om,1,4,"div",8,d8),n&2){let e=vt(2);p8(e._tickMarks);}}function Nm(n,i){if(n&1&&(ke(0,"div",6,1),Le(2,Dm,2,0),Be()),n&2){let e=vt();he(2),Fe$1(e._cachedWidth?2:-1);}}function Am(n,i){if(n&1&&Ft(0,"mat-slider-visual-thumb",7),n&2){let e=vt();Dn$1("discrete",e.discrete)("thumbPosition",1)("valueIndicatorText",e.startValueIndicatorText);}}var A=(function(n){return n[n.START=1]="START",n[n.END=2]="END",n})(A||{}),yi=(function(n){return n[n.ACTIVE=0]="ACTIVE",n[n.INACTIVE=1]="INACTIVE",n})(yi||{}),zo=new v("_MatSlider"),Tl=new v("_MatSliderThumb"),Pm=new v("_MatSliderRangeThumb"),El=new v("_MatSliderVisualThumb");var Fm=(()=>{class n{_cdr=m(Tt);_ngZone=m(B);_slider=m(zo);_renderer=m(We);_listenerCleanups;discrete=false;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=false;_isActive=false;_isValueIndicatorVisible=false;_hostElement=m(G).nativeElement;_platform=m(je);ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let t=this._sliderInputEl,r=this._renderer;this._listenerCleanups=[r.listen(t,"pointermove",this._onPointerMove),r.listen(t,"pointerdown",this._onDragStart),r.listen(t,"pointerup",this._onDragEnd),r.listen(t,"pointerleave",this._onMouseLeave),r.listen(t,"focus",this._onFocus),r.listen(t,"blur",this._onBlur)];}));}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e());}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let t=this._hostElement.getBoundingClientRect(),r=this._slider._isCursorOnSliderThumb(e,t);this._isHovered=r,r?this._showHoverRipple():this._hideRipple(this._hoverRippleRef);};_onMouseLeave=()=>{this._isHovered=false,this._hideRipple(this._hoverRippleRef);};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add("mdc-slider__thumb--focused");};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove("mdc-slider__thumb--focused");};_onDragStart=e=>{e.button===0&&(this._isActive=true,this._showActiveRipple());};_onDragEnd=()=>{this._isActive=false,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple();};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple"));}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},true),this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple"));}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple"));}_isShowingRipple(e){return e?.state===Ji.FADING_IN||e?.state===Ji.VISIBLE}_showRipple(e,t){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===A.START?A.END:A.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!t)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:true,persistent:true})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let t=this._getSibling();t._isShowingAnyRipple()||(this._hideValueIndicator(),t._hideValueIndicator());}_showValueIndicator(){this._hostElement.classList.add("mdc-slider__thumb--with-indicator");}_hideValueIndicator(){this._hostElement.classList.remove("mdc-slider__thumb--with-indicator");}_getSibling(){return this._slider._getThumb(this.thumbPosition===A.START?A.END:A.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=ve({type:n,selectors:[["mat-slider-visual-thumb"]],viewQuery:function(t,r){if(t&1&&Pn$1(a0,5)(Tm,5)(Em,5),t&2){let o;Ae(o=De())&&(r._ripple=o.first),Ae(o=De())&&(r._knob=o.first),Ae(o=De())&&(r._valueIndicatorContainer=o.first);}},hostAttrs:[1,"mdc-slider__thumb","mat-mdc-slider-visual-thumb"],inputs:{discrete:"discrete",thumbPosition:"thumbPosition",valueIndicatorText:"valueIndicatorText"},features:[ot$1([{provide:El,useExisting:n}])],decls:4,vars:2,consts:[["knob",""],["valueIndicatorContainer",""],[1,"mdc-slider__value-indicator-container"],[1,"mdc-slider__thumb-knob"],["matRipple","",1,"mat-focus-indicator",3,"matRippleDisabled"],[1,"mdc-slider__value-indicator"],[1,"mdc-slider__value-indicator-text"]],template:function(t,r){t&1&&(Le(0,Sm,5,1,"div",2),Ft(1,"div",3,0)(3,"div",4)),t&2&&(Fe$1(r.discrete?0:-1),he(3),Dn$1("matRippleDisabled",true));},dependencies:[a0],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
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
`],encapsulation:2})}return n})(),Nr=(()=>{class n{_ngZone=m(B);_cdr=m(Tt);_elementRef=m(G);_dir=m(Ii,{optional:true});_globalRippleOptions=m(ef,{optional:true});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let t=this._getInput(A.END),r=this._getInput(A.START);t&&(t.disabled=this._disabled),r&&(r.disabled=this._disabled);}_disabled=false;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs();}_discrete=false;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI());}_showTickMarks=false;get min(){return this._min}set min(e){let t=e==null||isNaN(e)?this._min:e;this._min!==t&&this._updateMin(t);}_min=0;color;disableRipple=false;_updateMin(e){let t=this._min;this._min=e,this._isRange?this._updateMinRange({old:t,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange();}_updateMinRange(e){let t=this._getInput(A.END),r=this._getInput(A.START),o=t.value,c=r.value;r.min=e.new,t.min=Math.max(e.new,r.value),r.max=Math.min(t.max,t.value),r._updateWidthInactive(),t._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(t,r):this._onTranslateXChangeBySideEffect(r,t),o!==t.value&&this._onValueChange(t),c!==r.value&&this._onValueChange(r);}_updateMinNonRange(e){let t=this._getInput(A.END);if(t){let r=t.value;t.min=e,t._updateThumbUIByValue(),this._updateTrackUI(t),r!==t.value&&this._onValueChange(t);}}get max(){return this._max}set max(e){let t=e==null||isNaN(e)?this._max:e;this._max!==t&&this._updateMax(t);}_max=100;_updateMax(e){let t=this._max;this._max=e,this._isRange?this._updateMaxRange({old:t,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange();}_updateMaxRange(e){let t=this._getInput(A.END),r=this._getInput(A.START),o=t.value,c=r.value;t.max=e.new,r.max=Math.min(e.new,t.value),t.min=r.value,t._updateWidthInactive(),r._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(r,t):this._onTranslateXChangeBySideEffect(t,r),o!==t.value&&this._onValueChange(t),c!==r.value&&this._onValueChange(r);}_updateMaxNonRange(e){let t=this._getInput(A.END);if(t){let r=t.value;t.max=e,t._updateThumbUIByValue(),this._updateTrackUI(t),r!==t.value&&this._onValueChange(t);}}get step(){return this._step}set step(e){let t=isNaN(e)?this._step:e;this._step!==t&&this._updateStep(t);}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange();}_updateStepRange(){let e=this._getInput(A.END),t=this._getInput(A.START),r=e.value,o=t.value,c=t.value;e.min=this._min,t.max=this._max,e.step=this._step,t.step=this._step,this._platform.SAFARI&&(e.value=e.value,t.value=t.value),e.min=Math.max(this._min,t.value),t.max=Math.min(this._max,e.value),t._updateWidthInactive(),e._updateWidthInactive(),e.value<c?this._onTranslateXChangeBySideEffect(t,e):this._onTranslateXChangeBySideEffect(e,t),r!==e.value&&this._onValueChange(e),o!==t.value&&this._onValueChange(t);}_updateStepNonRange(){let e=this._getInput(A.END);if(e){let t=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),t!==e.value&&this._onValueChange(e);}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=Jt();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText="";endValueIndicatorText="";_endThumbTransform;_startThumbTransform;_isRange=false;_isRtl=me(()=>this._dir?.valueSignal()==="rtl");_hasViewInitialized=false;_tickMarkTrackWidth=0;_hasAnimation=false;_resizeTimer=null;_platform=m(je);constructor(){m(yn).load(xl$1);let e=this._isRtl();A1(()=>{let t=this._isRtl();t!==e&&(e=t,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI());});}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(A.END),t=this._getInput(A.START);this._isRange=!!e&&!!t,this._cdr.detectChanges();let r=this._getThumb(A.END);this._rippleRadius=r._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,t):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges();}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=true,e._updateThumbUIByValue();}_initUIRange(e,t){e.initProps(),e.initUI(),t.initProps(),t.initUI(),e._updateMinMax(),t._updateMinMax(),e._updateStaticStyles(),t._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=true,e._updateThumbUIByValue(),t._updateThumbUIByValue();}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null;}_onDirChangeRange(){let e=this._getInput(A.END),t=this._getInput(A.START);e._setIsLeftThumb(),t._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),t.translateX=t._calcTranslateXByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateWidthInactive(),t._updateWidthInactive(),e._updateThumbUIByValue(),t._updateThumbUIByValue();}_onDirChangeNonRange(){this._getInput(A.END)._updateThumbUIByValue();}_observeHostResize(){typeof ResizeObserver>"u"||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize());}),this._resizeObserver.observe(this._elementRef.nativeElement);});}_isActive(){return this._getThumb(A.START)._isActive||this._getThumb(A.END)._isActive}_getValue(e=A.END){let t=this._getInput(e);return t?t.value:this.min}_skipUpdate(){return !!(this._getInput(A.START)?._skipUIUpdate||this._getInput(A.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left;}_setTrackActiveStyles(e){let t=this._trackActive.nativeElement.style;t.left=e.left,t.right=e.right,t.transformOrigin=e.transformOrigin,t.transform=e.transform;}_calcTickMarkTransform(e){let t=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return `translateX(${this._isRtl()?this._cachedWidth-6-t:t}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e));}_onTranslateXChangeBySideEffect(e,t){this._hasViewInitialized&&(e._updateThumbUIByValue(),t._updateThumbUIByValue());}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges());}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck());}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(A.END),t=this._getInput(A.START);e._updateThumbUIByValue(),t._updateThumbUIByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateMinMax(),t._updateMinMax(),e._updateWidthInactive(),t._updateWidthInactive();}else {let e=this._getInput(A.END);e&&e._updateThumbUIByValue();}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges();}}_thumbsOverlap=false;_areThumbsOverlapping(){let e=this._getInput(A.START),t=this._getInput(A.END);return !e||!t?false:t.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let t=e.getSibling(),r=this._getThumb(e.thumbPosition);this._getThumb(t.thumbPosition)._hostElement.classList.remove("mdc-slider__thumb--top"),r._hostElement.classList.toggle("mdc-slider__thumb--top",this._thumbsOverlap);}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e));}_updateThumbUI(e){if(this._skipUpdate())return;let t=this._getThumb(e.thumbPosition===A.END?A.END:A.START);t._hostElement.style.transform=`translateX(${e.translateX}px)`;}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let t=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(t):e._hostElement.setAttribute("aria-valuetext",t),this.discrete){e.thumbPosition===A.START?this.startValueIndicatorText=t:this.endValueIndicatorText=t;let r=this._getThumb(e.thumbPosition);t.length<3?r._hostElement.classList.add("mdc-slider__thumb--short-value"):r._hostElement.classList.remove("mdc-slider__thumb--short-value");}}_updateValueIndicatorUIs(){let e=this._getInput(A.END),t=this._getInput(A.START);e&&this._updateValueIndicatorUI(e),t&&this._updateValueIndicatorUI(t);}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,r=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*r;}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e));}_updateTrackUIRange(e){let t=e.getSibling();if(!t||!this._cachedWidth)return;let r=Math.abs(t.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:"auto",right:`${this._cachedWidth-t.translateX}px`,transformOrigin:"right",transform:`scaleX(${r})`}):this._setTrackActiveStyles({left:`${t.translateX}px`,right:"auto",transformOrigin:"left",transform:`scaleX(${r})`});}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:"auto",right:"0px",transformOrigin:"right",transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:"0px",right:"auto",transformOrigin:"left",transform:`scaleX(${e.fillPercentage})`});}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e);}_updateTickMarkUINonRange(e){let t=this._getValue(),r=Math.max(Math.round((t-this.min)/e),0)+1,o=Math.max(Math.round((this.max-t)/e),0)-1;this._isRtl()?r++:o++,this._tickMarks=Array(r).fill(yi.ACTIVE).concat(Array(o).fill(yi.INACTIVE));}_updateTickMarkUIRange(e){let t=this._getValue(),r=this._getValue(A.START),o=Math.max(Math.round((r-this.min)/e),0),c=Math.max(Math.round((t-r)/e)+1,0),h=Math.max(Math.round((this.max-t)/e),0);this._tickMarks=Array(o).fill(yi.INACTIVE).concat(Array(c).fill(yi.ACTIVE),Array(h).fill(yi.INACTIVE));}_getInput(e){if(e===A.END&&this._input)return this._input;if(this._inputs?.length)return e===A.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===A.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation",this._hasAnimation);}_isCursorOnSliderThumb(e,t){let r=t.width/2,o=t.x+r,c=t.y+r,h=e.clientX-o,x=e.clientY-c;return Math.pow(h,2)+Math.pow(x,2)<Math.pow(r,2)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=ve({type:n,selectors:[["mat-slider"]],contentQueries:function(t,r,o){if(t&1&&Qr(o,Tl,5)(o,Pm,4),t&2){let c;Ae(c=De())&&(r._input=c.first),Ae(c=De())&&(r._inputs=c);}},viewQuery:function(t,r){if(t&1&&Pn$1(Im,5)(El,5),t&2){let o;Ae(o=De())&&(r._trackActive=o.first),Ae(o=De())&&(r._thumbs=o);}},hostAttrs:[1,"mat-mdc-slider","mdc-slider"],hostVars:12,hostBindings:function(t,r){t&2&&(Os$1("mat-"+(r.color||"primary")),Ne("mdc-slider--range",r._isRange)("mdc-slider--disabled",r.disabled)("mdc-slider--discrete",r.discrete)("mdc-slider--tick-marks",r.showTickMarks)("_mat-animation-noopable",r._noopAnimations));},inputs:{disabled:[2,"disabled","disabled",be],discrete:[2,"discrete","discrete",be],showTickMarks:[2,"showTickMarks","showTickMarks",be],min:[2,"min","min",Xd$1],color:"color",disableRipple:[2,"disableRipple","disableRipple",be],max:[2,"max","max",Xd$1],step:[2,"step","step",Xd$1],displayWith:"displayWith"},exportAs:["matSlider"],features:[ot$1([{provide:zo,useExisting:n}])],ngContentSelectors:Rm,decls:9,vars:5,consts:[["trackActive",""],["tickMarkContainer",""],[1,"mdc-slider__track"],[1,"mdc-slider__track--inactive"],[1,"mdc-slider__track--active"],[1,"mdc-slider__track--active_fill"],[1,"mdc-slider__tick-marks"],[3,"discrete","thumbPosition","valueIndicatorText"],[3,"class","transform"]],template:function(t,r){t&1&&(Kt(),Pe(0),ke(1,"div",2),Ft(2,"div",3),ke(3,"div",4),Ft(4,"div",5,0),Be(),Le(6,Nm,3,1,"div",6),Be(),Le(7,Am,1,3,"mat-slider-visual-thumb",7),Ft(8,"mat-slider-visual-thumb",7)),t&2&&(he(6),Fe$1(r.showTickMarks?6:-1),he(),Fe$1(r._isRange?7:-1),he(),Dn$1("discrete",r.discrete)("thumbPosition",2)("valueIndicatorText",r.endValueIndicatorText));},dependencies:[Fm],styles:[`.mdc-slider__track {
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
`],encapsulation:2})}return n})();var Vm={provide:Pa,useExisting:nn(()=>zi),multi:true};var zi=(()=>{class n{_ngZone=m(B);_elementRef=m(G);_cdr=m(Tt);_slider=m(zo);_platform=m(je);_listenerCleanups;get value(){return Xd$1(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let t=e+"";if(!this._hasSetInitialValue){this._initialValue=t;return}this._isActive||this._setValue(t);}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck();}valueChange=new ne;dragStart=new ne;dragEnd=new ne;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e;}_translateX;thumbPosition=A.END;get min(){return Xd$1(this._hostElement.min,0)}set min(e){this._hostElement.min=e+"",this._cdr.detectChanges();}get max(){return Xd$1(this._hostElement.max,0)}set max(e){this._hostElement.max=e+"",this._cdr.detectChanges();}get step(){return Xd$1(this._hostElement.step,0)}set step(e){this._hostElement.step=e+"",this._cdr.detectChanges();}get disabled(){return be(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled);}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=w("");_knobRadius=8;_tickMarkOffset=3;_isActive=false;_isFocused=false;_setIsFocused(e){this._isFocused=e;}_hasSetInitialValue=false;_initialValue;_formControl;_destroyed=new R;_skipUIUpdate=false;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=false;constructor(){let e=m(We);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,"pointerdown",this._onPointerDown.bind(this)),e.listen(this._hostElement,"pointermove",this._onPointerMove.bind(this)),e.listen(this._hostElement,"pointerup",this._onPointerUp.bind(this))];});}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete();}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=true),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue();}initUI(){this._updateThumbUIByValue();}_initValue(){this._hasSetInitialValue=true,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges());}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(false),this._onTouchedFn();}_onFocus(){this._slider._setTransition(false),this._slider._updateTrackUI(this),this._setIsFocused(true);}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:true});}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:true}),this._slider._onValueChange(this);}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled;}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let t=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=t,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=true,this._setIsFocused(true),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:true}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}));}}_handleValueCorrection(e){this._skipUIUpdate=true,setTimeout(()=>{this._skipUIUpdate=false,this._fixValue(e);},0);}_fixValue(e){let t=e.clientX-this._slider._cachedLeft,r=this._slider._cachedWidth,o=this._slider.step===0?1:this._slider.step,c=Math.floor((this._slider.max-this._slider.min)/o),h=this._slider._isRtl()?1-t/r:t/r,R=Math.round(h*c)/c*(this._slider.max-this._slider.min)+this._slider.min,F=Math.round(R/o)*o,ae=this.value;if(F===ae){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=F,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e);}_onPointerUp(){this._isActive&&(this._isActive=false,this._platform.SAFARI&&this._setIsFocused(false),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0));}_clamp(e){let t=this._tickMarkOffset,r=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,r),t)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`;}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e);}_updateThumbUIByPointerEvent(e,t){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(t);}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this);}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e);}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=true;}registerOnTouched(e){this._onTouchedFn=e;}setDisabledState(e){this.disabled=e;}focus(){this._hostElement.focus();}blur(){this._hostElement.blur();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=O({type:n,selectors:[["input","matSliderThumb",""]],hostAttrs:["type","range",1,"mdc-slider__input"],hostVars:1,hostBindings:function(t,r){t&1&&$e("change",function(){return r._onChange()})("input",function(){return r._onInput()})("blur",function(){return r._onBlur()})("focus",function(){return r._onFocus()}),t&2&&Ge("aria-valuetext",r._valuetext());},inputs:{value:[2,"value","value",Xd$1]},outputs:{valueChange:"valueChange",dragStart:"dragStart",dragEnd:"dragEnd"},exportAs:["matSliderThumb"],features:[ot$1([Vm,{provide:Tl,useExisting:n}])]})}return n})();var Ar=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ce({type:n});static \u0275inj=oe({imports:[kl$1,It$1]})}return n})();function Lm(n,i){if(n&1){let e=kD();ke(0,"settings-toggle",6),$e("ngModelChange",function(r){U_(e);let o=vt();return B_(o.setDarkMode(r))}),ke(1,"div",7)(2,"icon",8),gr$1(3,"mode_night"),Be(),ke(4,"div"),gr$1(5),Bp(6,"translate"),Be()()(),s5();}if(n&2){let e=vt();Dn$1("ngModel",e.dark_mode())("toggle",true),c5(),he(5),Zd$1(FD(6,3,"COMMON.DARK_MODE"));}}function Bm(n,i){if(n&1){let e=kD();ke(0,"settings-toggle",6),$e("ngModelChange",function(r){U_(e);let o=vt();return B_(o.setLocatable(r))}),ke(1,"div",7)(2,"icon",8),gr$1(3,"emergency_share"),Be(),ke(4,"div"),gr$1(5),Bp(6,"translate"),Be()()(),s5();}if(n&2){let e=vt();Dn$1("ngModel",e.locatable())("toggle",true),c5(),he(5),Zd$1(FD(6,3,"COMMON.LOCATABLE"));}}function Um(n,i){if(n&1){let e=kD();ke(0,"div",9),gr$1(1),Bp(2,"translate"),Be(),ke(3,"div",10)(4,"span",11),gr$1(5,"A"),Be(),ke(6,"mat-slider",12)(7,"input",13),$e("ngModelChange",function(r){U_(e);let o=vt();return B_(o.applySetting("font_size",r))}),Be(),s5(),Be(),ke(8,"span",2),gr$1(9,"A"),Be(),ke(10,"span",14),gr$1(11),Be()();}if(n&2){let e=vt();he(),Fo$1(" ",FD(2,6,"COMMON.TEXT_SIZE_MSG")," "),he(5),Dn$1("min",10)("max",24)("step",2),he(),Dn$1("ngModel",e.font_size()),c5(),he(4),Fo$1(" ",e.font_size(),"px ");}}var Il=(()=>{class n extends io{constructor(){super(...arguments),this._data=m(Ele),this._settings=m(qs$1),this.accessible=w(false),this.locatable=w(false),this.can_locate=hee("allow_locatability_option",true),this._allow_dark_mode=this._settings.signal("allow_dark_mode",false),this._font_size=this._settings.signal("font_size",16,true),this._accessible=this._settings.signal("accessible",false,true),this._theme=this._settings.theme_signal,this.dark_mode=me(()=>this._theme()==="dark"),this.can_change_dark_mode=me(()=>!!this._allow_dark_mode()),this.font_size=this._font_size,this.applySetting=(e,t)=>this.timeout("apply_setting",()=>{this._settings.saveUserSetting(e,t),e==="accessible"&&this.accessible.set(t);},500),this.close=()=>this._data?.close(),this.setLocatable=e=>{this._settings.updateLocatable(e),this.locatable.set(e);};}async ngOnInit(){this.accessible.set(!!this._accessible()),this.subscription("user",Pke.subscribe(e=>{this.locatable.set(e.locatable);}));}setDarkMode(e){let t=this._theme();e&&t!=="dark"?this._settings.setTheme("dark"):!e&&t==="dark"&&this._settings.setTheme("light");}static{this.\u0275fac=(()=>{let e;return function(r){return (e||(e=yt(n)))(r||n)}})();}static{this.\u0275cmp=ve({type:n,selectors:[["accessibility-tooltip"]],features:[Re],decls:18,vars:11,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","max-h-[65vh]","w-[20rem]","flex-col","overflow-auto","rounded-sm","pb-3","shadow-sm"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-3",3,"click"],[1,"text-2xl"],[1,""],[1,"space-y-2","p-2"],[3,"ngModel","toggle"],[3,"ngModelChange","ngModel","toggle"],[1,"flex","items-center","space-x-2"],[1,"-ml-2","text-xl"],[1,"bg-base-200","px-8","py-4","text-center"],[1,"flex","items-center","space-x-4","px-4"],[1,"text-sm"],[1,"w-1/2","flex-1","text-[16px]",3,"min","max","step"],["matSliderThumb","",1,"text-[16px]",3,"ngModelChange","ngModel"],[1,"bg-base-300","my-2","rounded-sm","px-2","py-1","text-base","text-white"]],template:function(t,r){t&1&&(ke(0,"div",0)(1,"div",1),$e("click",function(){return r.close()}),ke(2,"icon",2),gr$1(3,"arrow_back"),Be(),ke(4,"div",3),gr$1(5),Bp(6,"translate"),Be()(),ke(7,"div",4),Le(8,Lm,7,5,"settings-toggle",5),Le(9,Bm,7,5,"settings-toggle",5),ke(10,"settings-toggle",6),$e("ngModelChange",function(c){return r.applySetting("accessible",c)}),ke(11,"div",7)(12,"icon",8),gr$1(13,"playlist_add"),Be(),ke(14,"div"),gr$1(15),Bp(16,"translate"),Be()()(),s5(),Be(),Le(17,Um,12,8),Be()),t&2&&(he(5),Fo$1(" ",FD(6,7,"COMMON.CONTROLS_ACCESSIBILITY")," "),he(3),Fe$1(r.can_change_dark_mode()?8:-1),he(),Fe$1(r.can_locate()?9:-1),he(),Dn$1("ngModel",r.accessible())("toggle",true),c5(),he(5),Zd$1(FD(16,9,"COMMON.TEXT_SIZE")),he(2),Fe$1(r.accessible()?17:-1));},dependencies:[kl$1,a0,Ar,Nr,zi,Fs,_Xe,aOe,gB,tOe,ZQ,net],encapsulation:2});}}return n})();function zm(n,i){if(n&1){let e=kD();ke(0,"mat-radio-button",8),$e("click",function(){let r=U_(e).$implicit,o=vt();return B_(o.setBuilding(r))}),gr$1(1),Be();}if(n&2){let e=i.$implicit;Dn$1("value",e.id),he(),Fo$1(" ",e.display_name||e.name," ");}}var Rl=(()=>{class n{constructor(){this._data=m(Ele),this._org=m(tT),this.buildings=this._org.active_buildings,this.building=this._org.active_building,this.setBuilding=e=>{this._org.setBuilding(e,true),this._data?.close();},this.close=()=>this._data?.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ve({type:n,selectors:[["building-select"]],decls:16,vars:8,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","max-h-[65vh]","w-74","flex-col","overflow-auto","rounded-sm","pb-3","shadow-sm",3,"click"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-3"],[1,"text-2xl"],[1,"leading-tight"],[1,"text-xs","opacity-30"],[1,"px-4","py-2","text-xs","opacity-60"],[1,"flex","flex-col","space-y-2","px-2",3,"ngModel"],[3,"value"],[3,"click","value"]],template:function(t,r){t&1&&(ke(0,"div",0),$e("click",function(){return r.close()}),ke(1,"div",1)(2,"icon",2),gr$1(3,"arrow_back"),Be(),ke(4,"div",3)(5,"div"),gr$1(6),Be(),ke(7,"div",4),gr$1(8),Bp(9,"translate"),Be()()(),ke(10,"div",5),gr$1(11),Bp(12,"translate"),Be(),ke(13,"mat-radio-group",6),f8(14,zm,2,2,"mat-radio-button",7,u8),Be(),s5(),Be()),t&2&&(he(6),Fo$1(" ",r.building()?.display_name||r.building()?.name," "),he(2),Fo$1(" ",FD(9,4,"RESOURCE.BUILDING")," "),he(3),Fo$1(" ",FD(12,6,"COMMON.BUILDING_SELECT")," "),he(2),Dn$1("ngModel",r.building()?.id),c5(),he(),p8(r.buildings()));},dependencies:[Rr,Bi,vi,_Xe,kl$1,a0,aOe,tOe,ZQ,net],encapsulation:2});}}return n})();function Gm(n,i){n&1&&(ke(0,"div",3),gr$1(1),Bp(2,"translate"),Be()),n&2&&(he(),Fo$1(" ",FD(2,1,"COMMON.DESK_HEIGHT_NOT_SET")," "));}function Hm(n,i){if(n&1){let e=kD();ke(0,"button",13),$e("click",function(){U_(e);let r=vt();return B_(r.onClose())}),gr$1(1),Bp(2,"translate"),Be();}n&2&&(he(),Fo$1(" ",FD(2,1,"COMMON.SAVE")," "));}var Ol=(()=>{class n{constructor(){this._settings=m(qs$1),this.show_close=VIe(false),this.close=BIe(),this.not_set=w(false),this.desk_sitting_height=w(71),this.desk_standing_height=w(101);}ngOnInit(){this.not_set.set(!this._settings.get("desk_sitting_height")&&!this._settings.get("desk_standing_height")),this.desk_sitting_height.set(this._settings.get("desk_sitting_height")||71),this.desk_standing_height.set(this._settings.get("desk_standing_height")||101);}onClose(){this.saveSetting("desk_sitting_height",this.desk_sitting_height()),this.saveSetting("desk_standing_height",this.desk_standing_height()),this.close.emit();}formatLabel(e){return `${e.toFixed(1)}cm`}saveSetting(e,t){this._settings.saveUserSetting(e,t);}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ve({type:n,selectors:[["desk-height-presets"]],inputs:{show_close:[1,"show_close"]},outputs:{show_close:"show_closeChange",close:"close"},decls:29,vars:23,consts:[[1,"bg-base-100","relative","w-[20rem]","rounded-sm","p-4","shadow-sm"],[1,"mb-2","text-lg"],[1,"mb-4","text-xs","opacity-60"],[1,"bg-warning","text-warning-content","-mx-2","mb-4","rounded-sm","p-2","text-xs"],[1,"mt-2","flex","flex-col"],[1,"flex","items-center","space-x-2"],["min","60","max","80","step","0.5","discrete","",1,"flex-1",3,"displayWith"],["matSliderThumb","",3,"ngModelChange","ngModel"],[1,"w-12","text-right","text-sm"],[1,"mr-2","flex","items-center","space-x-2"],["min","90","max","120","step","0.5","discrete","",1,"flex-1",3,"displayWith"],[1,"mr-2","w-12","text-right","text-sm"],["btn","","matRipple","",1,"mt-2","w-full"],["btn","","matRipple","",1,"mt-2","w-full",3,"click"]],template:function(t,r){t&1&&(ke(0,"div",0)(1,"div",1),gr$1(2),Bp(3,"translate"),Be(),ke(4,"div",2),gr$1(5),Bp(6,"translate"),Be(),Le(7,Gm,3,3,"div",3),ke(8,"div",2),gr$1(9),Bp(10,"translate"),Be(),ke(11,"div",4)(12,"label"),gr$1(13),Bp(14,"translate"),Be(),ke(15,"div",5)(16,"mat-slider",6)(17,"input",7),$e("ngModelChange",function(c){return r.desk_sitting_height.set(c),r.saveSetting("desk_sitting_height",c)}),Be(),s5(),Be(),ke(18,"div",8),gr$1(19),Be()(),ke(20,"label"),gr$1(21),Bp(22,"translate"),Be(),ke(23,"div",9)(24,"mat-slider",10)(25,"input",7),$e("ngModelChange",function(c){return r.desk_standing_height.set(c),r.saveSetting("desk_standing_height",c)}),Be(),s5(),Be(),ke(26,"div",11),gr$1(27),Be()()(),Le(28,Hm,3,3,"button",12),Be()),t&2&&(he(2),Fo$1(" ",FD(3,13,"COMMON.DESK_HEIGHT_TITLE")," "),he(3),Fo$1(" ",FD(6,15,"COMMON.DESK_HEIGHT_MSG")," "),he(2),Fe$1(r.not_set()&&r.show_close()?7:-1),he(2),Fo$1(" ",FD(10,17,"COMMON.DESK_HEIGHT_INFO")," "),he(4),Zd$1(FD(14,19,"COMMON.DESK_HEIGHT_SITTING")),he(3),Dn$1("displayWith",r.formatLabel),he(),Dn$1("ngModel",r.desk_sitting_height()),c5(),he(2),Fo$1(" ",r.desk_sitting_height().toFixed(1),"cm "),he(2),Fo$1("",FD(22,21,"COMMON.DESK_HEIGHT_STANDING"),"t"),he(3),Dn$1("displayWith",r.formatLabel),he(),Dn$1("ngModel",r.desk_standing_height()),c5(),he(2),Fo$1(" ",r.desk_standing_height().toFixed(1),"cm "),he(),Fe$1(r.show_close()?28:-1));},dependencies:[kl$1,a0,Ar,Nr,zi,aOe,gB,tOe,ZQ,net],encapsulation:2});}}return n})();function Wm(n,i){if(n&1&&(ke(0,"a",4)(1,"div",5),Ft(2,"icon",6),ke(3,"div"),gr$1(4),Be()()()),n&2){let e=i.$implicit;Dn$1("href",e.link,AE),he(2),Dn$1("icon",e.icon),he(2),Zd$1(e.name);}}var Dl=(()=>{class n{constructor(){this._data=m(Ele),this._settings=m(qs$1),this._tiles=this._settings.signal("help",[]),this.close=()=>{this._data?.close();};}get tiles(){return this._tiles()}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ve({type:n,selectors:[["help-tooltip"]],decls:9,vars:3,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","w-74","flex-col","rounded-sm","shadow-sm",3,"click"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-4"],[1,"text-2xl"],[1,""],["matRipple","","target","_blank","ref","noreferer noopener",1,"w-full","p-2","text-left",3,"href"],[1,"hover:bg-base-200","flex","w-full","items-center","space-x-2","rounded-sm","p-2"],[1,"text-xl",3,"icon"]],template:function(t,r){t&1&&(ke(0,"div",0),$e("click",function(){return r.close()}),ke(1,"div",1)(2,"icon",2),gr$1(3,"arrow_back"),Be(),ke(4,"div",3),gr$1(5),Bp(6,"translate"),Be()(),f8(7,Wm,5,3,"a",4,u8),Be()),t&2&&(he(5),Zd$1(FD(6,1,"COMMON.CONTROLS_HELP")),he(2),p8(r.tiles));},dependencies:[kl$1,a0,_Xe,net],encapsulation:2});}}return n})();var jm=(n,i)=>i.id;function Km(n,i){if(n&1&&(ke(0,"div",8),gr$1(1),Be()),n&2){let e=vt().$implicit;he(),Fo$1(" ",e.local," ");}}function qm(n,i){if(n&1){let e=kD();ke(0,"button",6),$e("click",function(){let r=U_(e).$implicit,o=vt();return B_(o.setLocale(r.id))}),ke(1,"div",7),Bp(2,"translate"),ke(3,"div"),gr$1(4),Bp(5,"translate"),Be(),Le(6,Km,2,1,"div",8),Bp(7,"translate"),Be()();}if(n&2){let e=i.$implicit,t=vt();he(),Ne("mt-2",FD(2,8,e.name)!==e.local)("border",t.active_locale===e.id)("border-info",t.active_locale===e.id),he(3),Zd$1(FD(5,10,e.name)),he(2),Fe$1(FD(7,12,e.name)!==e.local?6:-1);}}var Nl=(()=>{class n{constructor(){this._data=m(Ele),this._settings=m(qs$1),this._locale=m(db),this._locales=this._settings.signal("locales",[]),this.setLocale=e=>{this._locale.setLocale(e),localStorage.setItem("PLACEOS.locale",e),setTimeout(()=>location.reload(),300);},this.close=()=>this._data?.close();}get active_locale(){return this._locale.locale}get locales(){return this._locales()}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ve({type:n,selectors:[["language-select"]],decls:12,vars:6,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","max-h-[65vh]","w-74","flex-col","overflow-auto","rounded-sm","pb-3","shadow-sm",3,"click"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-3"],[1,"text-2xl"],[1,""],[1,"px-4","py-2","text-xs","opacity-60"],["matRipple","",1,"flex","h-14","items-center","justify-between","space-x-8","px-2","text-left"],["matRipple","",1,"flex","h-14","items-center","justify-between","space-x-8","px-2","text-left",3,"click"],[1,"hover:bg-base-200","flex","flex-1","items-center","justify-between","rounded-sm","p-2","leading-tight"],[1,"bg-base-300","rounded-sm","px-2","py-1","text-xs","opacity-60"]],template:function(t,r){t&1&&(ke(0,"div",0),$e("click",function(){return r.close()}),ke(1,"div",1)(2,"icon",2),gr$1(3,"arrow_back"),Be(),ke(4,"div",3),gr$1(5),Bp(6,"translate"),Be()(),ke(7,"div",4),gr$1(8),Bp(9,"translate"),Be(),f8(10,qm,8,14,"button",5,jm),Be()),t&2&&(he(5),Zd$1(FD(6,2,"COMMON.LANGUAGE")),he(3),Fo$1(" ",FD(9,4,"COMMON.LANGUAGE_SELECT")," "),he(2),p8(r.locales));},dependencies:[kl$1,a0,_Xe,net],encapsulation:2});}}return n})();function $m(n,i){if(n&1){let e=kD();ke(0,"mat-radio-button",8),$e("click",function(){let r=U_(e).$implicit,o=vt();return B_(o.setRegion(r))}),gr$1(1),Be();}if(n&2){let e=i.$implicit;Dn$1("value",e.id),he(),Fo$1(" ",e.display_name||e.name," ");}}var Al=(()=>{class n{constructor(){this._data=m(Ele),this._org=m(tT),this.regions=this._org.region_list,this.region=this._org.active_region,this.setRegion=async e=>{await this._org.setRegion(e),this._org.setBuilding(this._org.building,true),this._data?.close();},this.close=()=>this._data?.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ve({type:n,selectors:[["region-select"]],decls:16,vars:8,consts:[[1,"bg-base-100","relative","-top-12","-right-1","flex","max-h-[65vh]","w-74","flex-col","overflow-auto","rounded-sm","pb-3","shadow-sm",3,"click"],["matRipple","",1,"border-base-300","flex","items-center","space-x-2","border-b","px-2","py-3"],[1,"text-2xl"],[1,"leading-tight"],[1,"text-xs","opacity-30"],[1,"px-4","py-2","text-xs","opacity-60"],[1,"flex","flex-col","space-y-2","px-2",3,"ngModel"],[3,"value"],[3,"click","value"]],template:function(t,r){t&1&&(ke(0,"div",0),$e("click",function(){return r.close()}),ke(1,"div",1)(2,"icon",2),gr$1(3,"arrow_back"),Be(),ke(4,"div",3)(5,"div"),gr$1(6),Be(),ke(7,"div",4),gr$1(8),Bp(9,"translate"),Be()()(),ke(10,"div",5),gr$1(11),Bp(12,"translate"),Be(),ke(13,"mat-radio-group",6),f8(14,$m,2,2,"mat-radio-button",7,u8),Be(),s5(),Be()),t&2&&(he(6),Fo$1(" ",r.region()?.display_name||r.region()?.name," "),he(2),Fo$1(" ",FD(9,4,"RESOURCE.REGION")," "),he(3),Fo$1(" ",FD(12,6,"COMMON.REGION_SELECT")," "),he(2),Dn$1("ngModel",r.region()?.id),c5(),he(),p8(r.regions()));},dependencies:[Rr,Bi,vi,_Xe,kl$1,a0,aOe,tOe,ZQ,net],encapsulation:2});}}return n})();var Pl=(()=>{class n{constructor(){this._settings=m(qs$1),this._tooltip=m(Ele,{optional:true}),this.plate_number=w("");}async ngOnInit(){await dH(this._settings.initialised),this.plate_number.set(this._settings.get("plate_number")||"");}save(){this.plate_number()&&this._settings.saveUserSetting("plate_number",this.plate_number()),nb(bi$1("COMMON.PARKING_SETTINGS_SAVE")),this._tooltip?.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ve({type:n,selectors:[["user-parking-tooltip"]],decls:14,vars:13,consts:[[1,"border-base-300","bg-base-100","min-w-[20rem]","space-y-2","rounded-md","border","p-2"],[1,"border-base-300","border-b","text-lg","font-medium"],[1,"flex","flex-col"],["for","plate-number"],["appearance","outline",1,"no-subscript"],["matInput","",3,"ngModelChange","ngModel","placeholder"],["btn","","matRipple","",1,"w-full",3,"click"]],template:function(t,r){t&1&&(ke(0,"div",0)(1,"h3",1),gr$1(2),Bp(3,"translate"),Be(),ke(4,"div",2)(5,"label",3),gr$1(6),Bp(7,"translate"),Be(),ke(8,"mat-form-field",4)(9,"input",5),Bp(10,"translate"),ZL("ngModelChange",function(c){return J8(r.plate_number,c)||(r.plate_number=c),c}),Be(),s5(),Be()(),ke(11,"button",6),$e("click",function(){return r.save()}),gr$1(12),Bp(13,"translate"),Be()()),t&2&&(he(2),Fo$1(" ",FD(3,5,"COMMON.CONTROLS_PARKING")," "),he(4),Zd$1(FD(7,7,"EXPLORE.PARKING_PLATE_NUMBER")),he(3),KL("ngModel",r.plate_number),Dn$1("placeholder",FD(10,9,"EXPLORE.PARKING_PLATE_NUMBER")),c5(),he(3),Fo$1(" ",FD(13,11,"COMMON.SAVE")," "));},dependencies:[aM,F3,AJe,IJe,aOe,gB,tOe,ZQ,net],encapsulation:2});}}return n})();function Xm(n,i){if(n&1){let e=kD();ke(0,"button",17),$e("click",function(){let r=U_(e).$implicit,o=vt().$index,c=vt(2);return B_(c.setLocation(o,r.id))}),ke(1,"div",18)(2,"icon",11),gr$1(3),Be(),ke(4,"div",19),gr$1(5),Bp(6,"translate"),Be()()();}if(n&2){let e=i.$implicit;he(3),Zd$1(e.icon),he(2),Fo$1(" ",FD(6,2,e.name)," ");}}function Ym(n,i){n&1&&Ft(0,"div",16);}function Qm(n,i){if(n&1&&(ke(0,"div",9)(1,"div",10)(2,"icon",11),gr$1(3),Be()(),ke(4,"div",12)(5,"button",13)(6,"div"),gr$1(7),Be(),ke(8,"icon"),gr$1(9,"expand_more"),Be()(),ke(10,"mat-menu",null,0),f8(12,Xm,7,4,"button",14,u8),Be(),ke(14,"div",15),gr$1(15),Bp(16,"date"),Bp(17,"date"),Be()(),Le(18,Ym,1,0,"div",16),Be()),n&2){let e=i.$implicit,t=i.$index,r=GE(11),o=vt(2);Ne("opacity-30",o.now>o.timeFrom(e.end_time)),he(),Ne("bg-base-200",o.now<o.timeFrom(e.start_time)||o.now>o.timeFrom(e.end_time))("bg-info",o.now>=o.timeFrom(e.start_time)&&o.now<=o.timeFrom(e.end_time))("text-info-content",o.now>=o.timeFrom(e.start_time)&&o.now<=o.timeFrom(e.end_time)),he(2),Zd$1(o.location_icon(o.timeFrom(e.start_time))),he(2),Dn$1("matMenuTriggerFor",r),he(2),Fo$1(" ",o.location(o.timeFrom(e.start_time))," "),he(5),p8(o.locations()),he(3),YL(" ",UD(16,14,o.timeFrom(e.start_time),"shortTime")," \u2013 ",UD(17,17,o.timeFrom(e.end_time),"shortTime")," "),he(3),Fe$1(t>0?18:-1);}}function Zm(n,i){if(n&1&&(ke(0,"div",6),f8(1,Qm,19,20,"div",8,u8),Be()),n&2){let e=vt();he(),p8(e.active_preference?.blocks);}}function Jm(n,i){n&1&&(ke(0,"div",7)(1,"icon",20),gr$1(2,"event_busy"),Be(),ke(3,"p",21),gr$1(4),Bp(5,"translate"),Be(),ke(6,"p",21),gr$1(7),Bp(8,"translate"),Be()()),n&2&&(he(4),Fo$1(" ",FD(5,2,"COMMON.WORK_LOCATION_EMPTY")," "),he(3),Fo$1(" ",FD(8,4,"COMMON.WORK_LOCATION_EDIT_INFO")," "));}var Fl=(()=>{class n{constructor(){this._dialog=m(oT),this.locations=w([]),this.settings=w(void 0),this.overrides=w({});}get active_preference(){let e=no$1(new Date,"yyyy-MM-dd");return this.overrides()[e]?this.overrides()[e]:this.settings()?.find(t=>t.day_of_week===new Date().getDay())}get now(){return Sl(Date.now()).getTime()}ngOnInit(){let e=ao$1();this.settings.set(e.work_preferences),this.overrides.set(e.work_overrides),this.locations.set([{id:"wfo",name:bi$1("COMMON.WORK_OFFICE"),icon:"business"},{id:"wfh",name:bi$1("COMMON.WORK_HOME"),icon:"home"},{id:"aol",name:bi$1("COMMON.WORK_LEAVE"),icon:"event_busy"},{id:"sick",name:bi$1("COMMON.WORK_SICK"),icon:"sick"}]);}location_icon(e){return ao$1().location_icon(e+60*1e3)}location(e){return ao$1().location_name_time(e+60*1e3)}timeFrom(e){return Sl(Cr$1(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}editSettings(){this._dialog.open(Dr);}async setLocation(e,t){let r=ao$1(),o=this.active_preference,c=no$1(Date.now(),"yyyy-MM-dd"),h=m$1(l({},r.work_overrides),{[c]:m$1(l({},o),{blocks:[...o.blocks.slice(0,e),m$1(l({},o.blocks[e]),{location:t}),...o.blocks.slice(e+1)]})});for(let x in h){let R=Ds(x,"yyyy-MM-dd",new Date);(!h[x].blocks.length||Xi(R,Fn$1(Cn(Date.now()),-1)))&&delete h[x];}this.overrides.set(h),await RV(r.id,m$1(l({},r),{work_overrides:h})),IH();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ve({type:n,selectors:[["work-location-tooltip"]],decls:14,vars:11,consts:[["work_menu","matMenu"],[1,"bg-base-100","relative","-top-12","-right-1","flex","w-74","flex-col","overflow-hidden","rounded-sm","shadow-sm"],[1,"flex","items-center","justify-between","px-2"],[1,"px-2","py-4","font-medium"],["icon","","matRipple","","matTooltipPosition","left",1,"hover:bg-base-200",3,"click","matTooltip"],[1,"px-4","text-sm","font-medium"],[1,"pb-2"],[1,"flex","w-full","flex-col","items-center","justify-center","space-y-2","p-8","opacity-30"],[1,"relative","flex","items-center","px-4","py-2",3,"opacity-30"],[1,"relative","flex","items-center","px-4","py-2"],[1,"bg-base-200","z-20","flex","h-10","w-10","items-center","justify-center","rounded-full"],[1,"text-2xl"],[1,"ml-2","flex-1"],["matRipple","",1,"hover:bg-base-200","flex","items-center","space-x-2","rounded-sm","px-2","py-1","font-medium",3,"matMenuTriggerFor"],["mat-menu-item",""],[1,"px-2","text-xs","opacity-60"],[1,"border-base-200","absolute","-top-2","left-7","h-4","w-0","-translate-x-px","border-l-2","border-dashed"],["mat-menu-item","",3,"click"],[1,"flex","items-center","space-x-2"],[1,"pr-8"],[1,"text-6xl"],[1,"text-center","text-sm"]],template:function(t,r){t&1&&(ke(0,"div",1)(1,"div",2)(2,"h3",3),gr$1(3),Bp(4,"translate"),Be(),ke(5,"button",4),Bp(6,"translate"),$e("click",function(){return r.editSettings()}),ke(7,"icon"),gr$1(8,"edit_note"),Be()()(),ke(9,"h3",5),gr$1(10),Bp(11,"date"),Be(),Le(12,Zm,3,0,"div",6)(13,Jm,9,6,"div",7),Be()),t&2&&(he(3),Fo$1(" ",FD(4,4,"COMMON.WORK_LOCATION")," "),he(2),Dn$1("matTooltip",FD(6,6,"COMMON.WORK_LOCATION_EDIT")),he(5),Fo$1(" ",UD(11,8,r.now,"fullDate")," "),he(2),Fe$1(r.active_preference?.blocks?.length?12:13));},dependencies:[hy,g7e,si,rt,mt,ut,kl$1,a0,QJe,lle,_Xe,$6,net],encapsulation:2});}}return n})();function eu(n,i){if(n&1){let e=kD();ke(0,"button",28),$e("click",function(){let r=U_(e).$implicit,o=vt(2);return B_(o.saveSetting("work_location",r.id))}),ke(1,"div",29)(2,"icon",23),gr$1(3),Be(),ke(4,"div",30),gr$1(5),Bp(6,"translate"),Be()()();}if(n&2){let e=i.$implicit;he(3),Zd$1(e.icon),he(2),Fo$1(" ",FD(6,2,e.name)," ");}}function tu(n,i){if(n&1&&(ke(0,"div",7)(1,"h3",19),gr$1(2," Today's Work Location "),Be(),ke(3,"div",20)(4,"div",21)(5,"div",22)(6,"icon",23),gr$1(7),Be()(),ke(8,"div",24)(9,"button",25)(10,"div"),gr$1(11),Be(),ke(12,"icon"),gr$1(13,"expand_more"),Be()(),ke(14,"mat-menu",null,1),f8(16,eu,7,4,"button",26,u8),Be(),ke(18,"div",27),gr$1(19),Bp(20,"date"),Bp(21,"date"),Be()()()()()),n&2){let e=GE(15),t=vt();he(7),Zd$1(t.location_icon(t.timeFrom(t.active_block().start_time))),he(2),Dn$1("matMenuTriggerFor",e),he(2),Fo$1(" ",t.location(t.timeFrom(t.active_block().start_time))," "),he(5),p8(t.pref_locations()),he(3),YL(" ",UD(20,5,t.timeFrom(t.active_block().start_time),"shortTime")," \u2013 ",UD(21,8,t.timeFrom(t.active_block().end_time),"shortTime")," ");}}function iu(n,i){if(n&1&&(ke(0,"div",8)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),gr$1(5,"layers"),Be()(),ke(6,"div",33),gr$1(7),Be(),ke(8,"icon",34),gr$1(9," chevron_right "),Be()()()()),n&2){let e=vt();Dn$1("content",e.region_select),he(7),Fo$1(" ",e.region()?.display_name||e.region()?.name," ");}}function nu(n,i){if(n&1&&(ke(0,"div",8)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),gr$1(5,"business"),Be()(),ke(6,"div",33),gr$1(7),Be(),ke(8,"icon",34),gr$1(9," chevron_right "),Be()()()()),n&2){let e=vt();Dn$1("content",e.building_select),he(7),Fo$1(" ",e.building()?.display_name||e.building()?.name," ");}}function ru(n,i){if(n&1&&(ke(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),gr$1(5,"help"),Be()(),ke(6,"div",35),gr$1(7),Bp(8,"translate"),Be(),ke(9,"icon",34),gr$1(10," chevron_right "),Be()()()()),n&2){let e=vt();Dn$1("content",e.help_tooltip),he(7),Fo$1(" ",FD(8,2,"COMMON.CONTROLS_HELP")," ");}}function ou(n,i){if(n&1&&(ke(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),gr$1(5,"share_location"),Be()(),ke(6,"div",35),gr$1(7),Bp(8,"translate"),Be(),ke(9,"icon",34),gr$1(10,"chevron_right"),Be()()()()),n&2){let e=vt();Dn$1("content",e.work_location_tooltip),he(7),Fo$1(" ",FD(8,2,"COMMON.CONTROLS_WORK_LOCATION")," ");}}function au(n,i){if(n&1&&(ke(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),gr$1(5,"mode_night"),Be()(),ke(6,"div",35),gr$1(7),Bp(8,"translate"),Be(),ke(9,"icon",34),gr$1(10,"chevron_right"),Be()()()()),n&2){let e=vt();Ne("border-b!",!e.locales().length||!e.desk_height()),Dn$1("content",e.accessibility_tooltip),he(7),Fo$1(" ",FD(8,4,"COMMON.CONTROLS_ACCESSIBILITY")," ");}}function su(n,i){if(n&1&&(ke(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),gr$1(5,"desk"),Be()(),ke(6,"div",35),gr$1(7),Bp(8,"translate"),Be(),ke(9,"icon",34),gr$1(10," chevron_right "),Be()()()()),n&2){let e=vt(),t=GE(15);Ne("border-b!",!e.locales().length),Dn$1("content",t),he(7),Fo$1(" ",FD(8,4,"COMMON.CONTROLS_DESKS")," ");}}function lu(n,i){n&1&&Ft(0,"desk-height-presets");}function cu(n,i){if(n&1&&(ke(0,"div",9)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),gr$1(5,"parking_sign"),Be()(),ke(6,"div",35),gr$1(7),Bp(8,"translate"),Be(),ke(9,"icon",34),gr$1(10," chevron_right "),Be()()()()),n&2){let e=vt();Ne("border-b!",!e.locales().length),Dn$1("content",e.parking_tooltip),he(7),Fo$1(" ",FD(8,4,"COMMON.CONTROLS_PARKING")," ");}}function du(n,i){n&1&&(ke(0,"div",37),gr$1(1," Language "),Be());}function mu(n,i){if(n&1&&(ke(0,"div",11)(1,"button",12)(2,"div",31)(3,"div",32)(4,"icon"),gr$1(5,"language"),Be()(),ke(6,"div",36)(7,"div")(8,"div"),gr$1(9),Bp(10,"translate"),Be(),Le(11,du,2,0,"div",37),Bp(12,"translate"),Be(),ke(13,"div",38),Bp(14,"translate"),gr$1(15),Bp(16,"translate"),Be()(),ke(17,"icon",34),gr$1(18," chevron_right "),Be()()()()),n&2){let e=vt();Dn$1("content",e.language_tooltip),he(9),Fo$1(" ",FD(10,5,"COMMON.LANGUAGE")," "),he(2),Fe$1(FD(12,7,"COMMON.LANGUAGE")!=="Language"?11:-1),he(2),Dn$1("matTooltip",FD(14,9,e.active_locale)),he(2),Fo$1(" ",FD(16,11,e.active_locale)," ");}}function uu(n,i){if(n&1){let e=kD();ke(0,"button",39),$e("click",function(){U_(e);let r=vt();return B_(r.newSupportTicket())}),ke(1,"div",31)(2,"div",32)(3,"icon"),gr$1(4,"support_agent"),Be()(),ke(5,"div",35),gr$1(6),Bp(7,"translate"),Be()()();}n&2&&(he(6),Fo$1(" ",FD(7,1,"COMMON.CONTROLS_SUPPORT")," "));}function pu(n,i){if(n&1){let e=kD();ke(0,"button",40),$e("click",function(){U_(e);let r=vt();return B_(r.reloadPage())}),gr$1(1),Bp(2,"translate"),Be();}n&2&&(he(),Fo$1(" ",FD(2,1,"COMMON.CONTROLS_NEW_VERSION")," "));}function hu(n,i){if(n&1){let e=kD();ke(0,"button",41),$e("click",function(){U_(e);let r=vt();return B_(r.viewChangelog())}),gr$1(1),Be();}if(n&2){let e=vt();he(),Fo$1(" ",e.version.hash," ");}}function _u(n,i){if(n&1&&(ke(0,"span"),gr$1(1),Be()),n&2){let e=vt();he(),Zd$1(e.version.hash);}}var Vl=(()=>{class n{constructor(){this._settings=m(qs$1),this._org=m(tT),this._dialog=m(oT),this._locale=m(db),this.building=this._org.active_building,this.region=this._org.active_region,this.regions=this._org.region_list,this.sidebar=gn(false),this.accessibility=hee("allow_accessibility_changes",true),this.show_changelog=hee("show_changelog",true),this.region_select=Al,this.building_select=Rl,this.help_tooltip=Dl,this.accessibility_tooltip=Il,this.language_tooltip=Nl,this.work_location_tooltip=Fl,this.parking_tooltip=Pl,this.features=hee("features",[]),this._locales=this._settings.signal("locales",[]),this._desk_height=this._settings.signal("desks.height_enabled",false),this._use_region=this._settings.signal("use_region",false),this._disable_building_select=this._settings.signal("disable_building_select",false),this.pref_locations=w([]),this.work_prefs=w([]),this.overrides=w({}),this.active_block=me(()=>{let e=no$1(new Date,"yyyy-MM-dd"),t=new Date().getDay();return (this.overrides()[e]?this.overrides()[e]:this.work_prefs().find(o=>o.day_of_week===t))?.blocks?.find(o=>this.now>=this.timeFrom(o.start_time)&&this.now<this.timeFrom(o.end_time))}),this.active_index=me(()=>{let e=no$1(new Date,"yyyy-MM-dd"),t=new Date().getDay();return (this.overrides()[e]?this.overrides()[e]:this.work_prefs().find(o=>o.day_of_week===t))?.blocks?.findIndex(o=>this.now>=this.timeFrom(o.start_time)&&this.now<this.timeFrom(o.end_time))}),this.locales=this._locales,this.desk_height=this._desk_height,this.use_region=this._use_region,this.disable_building_select=this._disable_building_select;}location_icon(e){return ao$1().location_icon(e+60*1e3)}location(e){return ao$1().location_name_time(e+60*1e3)}timeFrom(e){return Sl(Cr$1(new Date,{hours:Math.floor(e),minutes:e*60%60,seconds:0,milliseconds:0})).getTime()}get user(){return ao$1()}get groups(){return this.user?.groups?.join(`
`)||""}get version(){return rm$1}get active_locale(){let e=this.locales(),t=this._locale.locale;for(let r of e)if(r.id===t)return r.name;return "LANGUAGE.ENGLISH"}get now(){return Sl(Date.now()).getTime()}get has_new_version(){return Xj()}ngOnInit(){let e=ao$1();this.work_prefs.set(e?.work_preferences||[]),this.overrides.set(e?.work_overrides||{}),this.pref_locations.set([{id:"wfo",name:bi$1("COMMON.WORK_OFFICE"),icon:"business"},{id:"wfh",name:bi$1("COMMON.WORK_HOME"),icon:"home"},{id:"aol",name:bi$1("COMMON.WORK_LEAVE"),icon:"event_busy"},{id:"sick",name:bi$1("COMMON.WORK_SICK"),icon:"sick"}]);}logout(){fOe();}reloadPage(){location.reload();}newSupportTicket(){this._settings.get("app.external_support_url")?window.open(this._settings.get("app.external_support_url"),"_blank"):this._dialog.open(Ml);}openWfhModal(){this._dialog.open(Dr);}async viewChangelog(){let e=await(await fetch("https://raw.githubusercontent.com/PlaceOS/user-interfaces/develop/CHANGELOG.md")).text();this._dialog.open(kl,{data:{changelog:e}});}saveSetting(e,t){this._settings.saveUserSetting(e,t);}formatLabel(e){return `${e.toFixed(1)}cm`}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ve({type:n,selectors:[["user-controls"]],inputs:{sidebar:[1,"sidebar"]},decls:35,vars:32,consts:[["desk_height_tooltip",""],["work_menu","matMenu"],[1,"divide-base-200","border-base-300","bg-base-100","relative","mt-1","flex","flex-col","divide-y","overflow-auto","rounded-sm","border","shadow-sm"],["avatar","",1,"flex","w-full","min-w-72","flex-col","items-center","p-2"],[1,"text-2xl",3,"user","matTooltip"],[1,""],[1,"truncate","text-xs","opacity-60"],[1,"border-base-200","w-full","rounded-sm","border-y","py-2"],["customTooltip","",1,"relative",3,"content"],["customTooltip","",3,"content"],["customTooltip","",3,"content","border-b!"],["customTooltip","",1,"border-b!",3,"content"],["btn","","matRipple","",1,"clear","h-14","w-full","text-left"],[1,"flex","flex-col","items-center","p-4"],[1,"mb-4","flex","items-center","justify-center","space-x-2"],["btn","","matRipple","",1,"inverse",3,"click"],["btn","","matRipple",""],[1,"w-full","text-xs","opacity-60"],[1,"m-0","border-none","bg-none","p-0","text-xs","underline"],[1,"w-full","px-4","pb-2","text-sm","font-medium"],[1,"w-full"],[1,"relative","flex","items-center","px-4","py-2"],[1,"bg-info","text-info-content","z-20","flex","h-10","w-10","items-center","justify-center","rounded-full"],[1,"text-2xl"],[1,"ml-2","flex-1"],["matRipple","",1,"hover:bg-base-200","flex","items-center","space-x-2","rounded-sm","px-2","py-1","font-medium",3,"matMenuTriggerFor"],["mat-menu-item",""],[1,"px-2","text-xs","opacity-60"],["mat-menu-item","",3,"click"],[1,"flex","items-center","space-x-2"],[1,"pr-8"],[1,"flex","w-full","items-center","space-x-2"],[1,"bg-base-200","flex","h-8","w-8","items-center","justify-center","rounded-full"],[1,"w-px","flex-1","truncate"],[1,"text-2xl","opacity-60"],[1,"flex-1"],[1,"flex","flex-1","items-center","justify-between","space-x-4"],[1,"text-xs","opacity-30"],[1,"bg-base-200","max-w-24","truncate","rounded-sm","px-2","py-1","text-sm",3,"matTooltip"],["btn","","matRipple","",1,"clear","h-14","w-full","text-left",3,"click"],["btn","","matRipple","",3,"click"],[1,"m-0","border-none","bg-none","p-0","text-xs","underline",3,"click"]],template:function(t,r){t&1&&(ke(0,"div",2)(1,"div",3),Ft(2,"a-user-avatar",4),ke(3,"div",5),gr$1(4),Be(),ke(5,"div",6),gr$1(6),Be()(),Le(7,tu,22,11,"div",7),Le(8,iu,10,2,"div",8),Le(9,nu,10,2,"div",8),Le(10,ru,11,4,"div",9),Le(11,ou,11,4,"div",9),Le(12,au,11,6,"div",10),Le(13,su,11,6,"div",10),Kn$1(14,lu,1,0,"ng-template",null,0,Vp),Le(16,cu,11,6,"div",10),Le(17,mu,19,13,"div",11),Le(18,uu,8,3,"button",12),ke(19,"div",13)(20,"div",14)(21,"button",15),$e("click",function(){return r.logout()}),gr$1(22),Bp(23,"translate"),Be(),Le(24,pu,3,3,"button",16),Be(),ke(25,"div",17),MD(26),gr$1(27),Bp(28,"translate"),xD(),Le(29,hu,2,1,"button",18)(30,_u,2,1,"span"),Be(),ke(31,"div",17),gr$1(32),Bp(33,"date"),Bp(34,"date"),Be()()()),t&2&&(Ne("border",!r.sidebar()),he(2),Dn$1("user",r.user)("matTooltip",r.groups),he(2),Zd$1(r.user?.name),he(2),Fo$1(" ",r.user?.email," "),he(),Fe$1(r.features().includes("wfh")&&r.active_block()?7:-1),he(),Fe$1(r.regions()?.length?8:-1),he(),Fe$1(!r.disable_building_select()&&!r.use_region()?9:-1),he(),Fe$1(r.features().includes("help")?10:-1),he(),Fe$1(r.features().includes("wfh")?11:-1),he(),Fe$1(r.accessibility()?12:-1),he(),Fe$1(r.desk_height()?13:-1),he(3),Fe$1(r.features().includes("parking-controls")?16:-1),he(),Fe$1(r.locales().length>1?17:-1),he(),Fe$1(r.features().includes("support-ticket")?18:-1),he(4),Fo$1(" ",FD(23,22,"COMMON.CONTROLS_SIGN_OUT")," "),he(2),Fe$1(r.has_new_version?24:-1),he(3),Fo$1(" ",FD(28,24,"COMMON.CONTROLS_VERSION"),": "),he(2),Fe$1(r.show_changelog()?29:30),he(3),YL(" ",UD(33,26,r.version.time,"longDate")," (",UD(34,29,r.version.time,"shortTime"),") "));},dependencies:[hy,g7e,kl$1,a0,_Xe,_et,QJe,lle,Or,si,rt,mt,ut,Ol,$6,net],encapsulation:2});}}return n})();var fu=["*"];function gu(n,i){n&1&&(ke(0,"icon",2),gr$1(1,"person"),Be());}function bu(n,i){if(n&1){let e=kD();ke(0,"div",1)(1,"button",3),$e("click",function(){U_(e);let r=vt();return B_(r.close())}),Be(),ke(2,"div",4)(3,"div",5),Ft(4,"user-controls",6),ke(5,"button",7),$e("click",function(){U_(e);let r=vt();return B_(r.close())}),ke(6,"icon",2),gr$1(7,"close"),Be()()()()();}if(n&2){let e=vt();he(),Ne("opacity-50",e.is_open())("opacity-0",!e.is_open()),he(2),Ne("translate-x-0",e.is_open())("translate-x-full",!e.is_open()),he(),Dn$1("sidebar",true);}}var Ll=(()=>{class n{constructor(){this._close_timeout=null,this.is_open=w(false),this.is_rendered=w(false);}open(){this._close_timeout&&(clearTimeout(this._close_timeout),this._close_timeout=null),this.is_rendered.set(true),requestAnimationFrame(()=>this.is_open.set(true));}close(){this.is_open.set(false),this._close_timeout=setTimeout(()=>{this.is_rendered.set(false),this._close_timeout=null;},200);}onEscape(){this.is_open()&&this.close();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ve({type:n,selectors:[["user-controls-sidebar"]],hostBindings:function(t,r){t&1&&$e("keydown.escape",function(){return r.onEscape()},Lq);},ngContentSelectors:fu,decls:4,vars:1,consts:[["icon","","matRipple","","avatar","","type","button","name","user-controls",1,"bg-base-200","flex","h-10","w-10","items-center","justify-center","rounded-full",3,"click"],[1,"fixed","inset-0","z-9999","overflow-hidden"],[1,"text-2xl"],["type","button","aria-label","Close user controls",1,"absolute","inset-0","bg-black","transition-opacity","duration-200",3,"click"],[1,"absolute","inset-y-0","right-0","flex","max-w-full"],[1,"bg-base-100","relative","h-full","w-80","max-w-[100vw]","overflow-auto","pt-[calc(env(safe-area-inset-top)+1rem)]","pb-[env(safe-area-inset-bottom)]","pr-[env(safe-area-inset-right)]","shadow-xl","transition-transform","duration-200","ease-out"],[3,"sidebar"],["icon","","default","","matRipple","","type","button",1,"absolute","top-[calc(env(safe-area-inset-top)+0.5rem)]","right-[calc(env(safe-area-inset-right)+0.5rem)]",3,"click"]],template:function(t,r){t&1&&(Kt(),ke(0,"button",0),$e("click",function(){return r.open()}),Pe(1,0,null,gu,2,0),Be(),Le(3,bu,8,9,"div",1)),t&2&&(he(3),Fe$1(r.is_rendered()?3:-1));},dependencies:[kl$1,a0,_Xe,Vl],encapsulation:2});}}return n})();var vu=["editor"];function yu(n,i){if(n&1){let e=kD();ke(0,"button",20),$e("click",function(){U_(e);let r=vt(2);return B_(r.insertImage())}),ke(1,"icon"),gr$1(2,"image"),Be()(),ke(3,"button",20),$e("click",function(){U_(e);let r=vt(2);return B_(r.insertAttachment())}),ke(4,"icon"),gr$1(5,"attachment"),Be()();}}function xu(n,i){if(n&1){let e=kD();ke(0,"div",3)(1,"select",5),$e("change",function(r){U_(e);let o=vt();return B_(o.setFontFace(r))}),ke(2,"option",6),gr$1(3,"Font"),Be(),ke(4,"option",7),gr$1(5,"Arial"),Be(),ke(6,"option",8),gr$1(7,"Helvetica"),Be(),ke(8,"option",9),gr$1(9,"Georgia"),Be(),ke(10,"option",10),gr$1(11,"Times New Roman"),Be()(),ke(12,"select",11),$e("change",function(r){U_(e);let o=vt();return B_(o.setFontSize(r))}),ke(13,"option",12),gr$1(14,"Size"),Be(),ke(15,"option",13),gr$1(16,"12"),Be(),ke(17,"option",14),gr$1(18,"14"),Be(),ke(19,"option",15),gr$1(20,"16"),Be(),ke(21,"option",16),gr$1(22,"18"),Be(),ke(23,"option",17),gr$1(24,"24"),Be(),ke(25,"option",18),gr$1(26,"32"),Be(),ke(27,"option",19),gr$1(28,"48"),Be()(),ke(29,"button",20),$e("click",function(){U_(e);let r=vt();return B_(r.toggleBold())}),ke(30,"icon"),gr$1(31,"format_bold"),Be()(),ke(32,"button",20),$e("click",function(){U_(e);let r=vt();return B_(r.toggleItalic())}),ke(33,"icon"),gr$1(34,"format_italic"),Be()(),ke(35,"button",20),$e("click",function(){U_(e);let r=vt();return B_(r.toggleUnderline())}),ke(36,"icon"),gr$1(37,"format_underlined"),Be()(),ke(38,"button",20),$e("click",function(){U_(e);let r=vt();return B_(r.makeUnorderedList())}),ke(39,"icon"),gr$1(40,"format_list_bulleted"),Be()(),ke(41,"button",20),$e("click",function(){U_(e);let r=vt();return B_(r.makeOrderedList())}),ke(42,"icon"),gr$1(43,"format_list_numbered"),Be()(),ke(44,"button",20),$e("click",function(){U_(e);let r=vt();return B_(r.insertLink())}),ke(45,"icon"),gr$1(46,"link"),Be()(),Le(47,yu,6,0),Be();}if(n&2){let e=vt();he(29),Ne("border-info",e.toolbar_state().bold)("text-info",e.toolbar_state().bold),he(3),Ne("border-info",e.toolbar_state().italic)("text-info",e.toolbar_state().italic),he(3),Ne("border-info",e.toolbar_state().underline)("text-info",e.toolbar_state().underline),he(3),Ne("border-info",e.toolbar_state().unordered_list)("text-info",e.toolbar_state().unordered_list),he(3),Ne("border-info",e.toolbar_state().ordered_list)("text-info",e.toolbar_state().ordered_list),he(3),Ne("border-info",e.toolbar_state().link)("text-info",e.toolbar_state().link),he(3),Fe$1(e.images_allowed()?47:-1);}}var Cl=(()=>{class n extends io{constructor(){super(...arguments),this._uploads=m(M7e),this._dom_sanitizer=m(Qc$1),this._ng_zone=m(B),this.placeholder=gn(""),this.readonly=gn(false),this.images_allowed=gn(false),this._editor_el=Kc$1("editor"),this._onChange=()=>{},this._onTouch=()=>{},this.toolbar_state=w({bold:false,italic:false,underline:false,unordered_list:false,ordered_list:false,link:false}),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e,this._syncValue=()=>{this._editor&&this.setValue(this._editor.getHTML());},this._handleTouched=()=>{this._editor&&this._onTouch();},this._refreshToolbarState=()=>{this._editor&&this._ng_zone.run(()=>{this.toolbar_state.set({bold:this._editor.hasFormat("B"),italic:this._editor.hasFormat("I"),underline:this._editor.hasFormat("U"),unordered_list:this._editor.hasFormat("UL"),ordered_list:this._editor.hasFormat("OL"),link:this._editor.hasFormat("A")});});};}ngOnChanges(e){e.placeholder&&this.timeout("init",()=>this._initialiseEditor()),e.readonly&&this._editor&&this._setReadonlyState();}ngAfterViewInit(){this.timeout("init",()=>this._initialiseEditor());}setValue(e){this._onChange(e);}writeValue(e){this.timeout("write",()=>{this._editor?(this._editor.setHTML(e||""),this._setPlaceholder()):this.timeout("write",()=>this.writeValue(e));});}toggleBold(){this._toggleFormat("B",()=>this._editor.removeBold(),()=>this._editor.bold());}toggleItalic(){this._toggleFormat("I",()=>this._editor.removeItalic(),()=>this._editor.italic());}toggleUnderline(){this._toggleFormat("U",()=>this._editor.removeUnderline(),()=>this._editor.underline());}makeUnorderedList(){this._toggleFormat("UL",()=>this._editor.removeList(),()=>this._editor.makeUnorderedList());}makeOrderedList(){this._toggleFormat("OL",()=>this._editor.removeList(),()=>this._editor.makeOrderedList());}insertLink(){if(!this._editor)return;if(this._editor.hasFormat("A")){this._editor.removeLink(),this._syncValue(),this._refreshToolbarState();return}let e=prompt("Enter URL");e&&(this._editor.makeLink(e),this._syncValue(),this._refreshToolbarState());}setFontFace(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontFace(t==="default"?"inherit":t),this._syncValue());}setFontSize(e){if(!this._editor)return;let t=e.target.value;t&&(this._editor.setFontSize(t),this._syncValue());}insertImage(){this._embedFile(true);}insertAttachment(){this._embedFile(false);}async _initialiseEditor(){let e=this._editor_el()?.nativeElement;if(!e)return this.timeout("init",()=>this._initialiseEditor());let{default:t}=await import('./chunk-CRXfBZqR.js');this._editor&&this._editor.destroy(),e.innerHTML="",this._editor=new t(e,{blockTag:"div",sanitizeToDOMFragment:r=>{let o=this._dom_sanitizer.sanitize(xi.HTML,r||"")||"",c=document.createElement("template");return c.innerHTML=o,c.content.cloneNode(true)}}),this._editor.addEventListener("input",this._syncValue),this._editor.addEventListener("blur",this._handleTouched),this._editor.addEventListener("cursor",this._refreshToolbarState),this._editor.addEventListener("select",this._refreshToolbarState),this._editor.addEventListener("pathChange",this._refreshToolbarState),this._setReadonlyState(),this._setPlaceholder(),this._refreshToolbarState();}_embedFile(e){if(!this._editor)return;let t=document.createElement("input");t.setAttribute("type","file"),e&&t.setAttribute("accept","image/*"),t.click(),t.onchange=()=>{let r=t.files?.[0];r&&this._uploads.uploadFile(r,true).then(o=>{if(!o)return;let c=`${location.origin}/api/engine/v2/uploads/${encodeURIComponent(o)}/url`;this._setAuth(),setTimeout(()=>{this._insertUploadedFile(c,r,e),this._syncValue();},100);});};}_setReadonlyState(){let e=this._editor_el()?.nativeElement;e&&e.setAttribute("contenteditable",`${!this.readonly()}`);}_setPlaceholder(){let e=this._editor_el()?.nativeElement;e&&e.setAttribute("data-placeholder",this.placeholder()||"");}_toggleFormat(e,t,r){this._editor&&(this._editor.hasFormat(e)?t():r(),this._syncValue(),this._refreshToolbarState());}_insertUploadedFile(e,t,r){let o=t.type.startsWith("image/");if(r||o){this._editor.insertHTML(`<img src="${e}" alt="${t.name}" />`);return}this._editor.insertHTML(`<a href="${e}" target="_blank">${t.name}</a>`);}_setAuth(){let e=Qt();document.cookie=`${e==="x-api-key"?"api-key="+encodeURIComponent(gl()):"bearer_token="+encodeURIComponent(e)};max-age=30;path=/api/engine/v2/uploads;samesite=strict;${location.protocol==="https:"?"secure;":""}`;}static{this.\u0275fac=(()=>{let e;return function(r){return (e||(e=yt(n)))(r||n)}})();}static{this.\u0275cmp=ve({type:n,selectors:[["rich-text-input"]],viewQuery:function(t,r){t&1&&qd$1(r._editor_el,vu,5),t&2&&Kd$1();},inputs:{placeholder:[1,"placeholder"],readonly:[1,"readonly"],images_allowed:[1,"images_allowed"]},features:[ot$1([{provide:Pa,useExisting:nn(()=>n),multi:true}]),Re,Et],decls:5,vars:1,consts:[["container",""],["editor",""],[1,"w-full"],[1,"border-base-300","bg-base-100","flex","flex-wrap","items-center","gap-1","rounded-t","border","p-2"],[1,"squire-editor"],[1,"border-base-300","bg-base-100","rounded","border","p-2","text-sm",3,"change"],["value","default"],["value","Arial"],["value","Helvetica"],["value","Georgia"],["value","Times New Roman"],[1,"border-base-300","bg-base-100","min-w-24","rounded","border","p-2","text-sm",3,"change"],["value",""],["value","12px"],["value","14px"],["value","16px"],["value","18px"],["value","24px"],["value","32px"],["value","48px"],["icon","","type","button",1,"border-base-300","rounded","border","px-2","py-1","text-sm",3,"click"]],template:function(t,r){t&1&&(ke(0,"div",2,0),Le(2,xu,48,25,"div",3),Ft(3,"div",4,1),Be()),t&2&&(he(2),Fe$1(r.readonly()?-1:2));},dependencies:[_Xe],styles:["[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]     .squire-editor{border-radius:.25rem;border:1px solid var(--base-300);padding:.5rem;min-height:8rem;width:100%;outline:none}[_nghost-%COMP%]     .squire-editor:empty:before{content:attr(data-placeholder);color:var(--base-content);opacity:.5}[_nghost-%COMP%]     .squire-editor ul{list-style-type:disc;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor ol{list-style-type:decimal;margin:.5rem 0;padding-left:1.5rem}[_nghost-%COMP%]     .squire-editor li{margin:.125rem 0}"]});}}return n})();var ku=(n,i)=>i.id+""+n;function Cu(n,i){if(n&1&&(ke(0,"a",1)(1,"icon",2),gr$1(2),Be(),ke(3,"span",3),gr$1(4),Be()()),n&2){let e=vt().$implicit;Dn$1("routerLink",e.route),he(2),Zd$1(e.icon),he(2),Zd$1(e.name);}}function Mu(n,i){if(n&1){let e=kD();ke(0,"button",6),$e("click",function(){U_(e);let r=vt(2).$implicit,o=vt();return B_(o.toggleBlock(r.id||r._id))}),ke(1,"icon",2),gr$1(2),Be(),ke(3,"div",7),gr$1(4),Be(),ke(5,"icon",8),gr$1(6,"arrow_drop_down"),Be()();}if(n&2){let e=vt(2).$implicit;he(2),Fo$1(" ",e.icon," "),he(2),Fo$1(" ",e.name," ");}}function wu(n,i){if(n&1&&(ke(0,"a",9),Ft(1,"icon",8),ke(2,"span"),gr$1(3),Be()()),n&2){let e=i.$implicit;Dn$1("routerLink",e.route),he(3),Zd$1(e.name);}}function Tu(n,i){if(n&1&&(ke(0,"section",5),f8(1,wu,4,2,"a",9,u8),Be()),n&2){let e=vt(2).$implicit,t=vt();Dn$1("@show",t.isBlockCollapsed(e.id||e._id)?"hide":"show"),he(),p8(e.children);}}function Eu(n,i){if(n&1&&(Le(0,Mu,7,2,"button",4),Le(1,Tu,3,1,"section",5)),n&2){let e=vt().$implicit;Fe$1(e.children?.length?0:-1),he(),Fe$1(e.children?.length?1:-1);}}function Su(n,i){if(n&1&&Le(0,Cu,5,3,"a",1)(1,Eu,2,2),n&2){let e=i.$implicit;Fe$1(e.children?1:0);}}var F1=(()=>{class n extends io{constructor(){super(),this._settings=m(qs$1),this._org=m(tT),this._element_ref=m(G),this.show_block=w({}),this.links=[],this.filtered_links=w([]),_t(()=>{this._org.active_building()&&this.timeout("update_links",()=>this.updateFilteredLinks(),500);});}get feature_list(){return this._settings.get("app.features")||[]}get feature_groups(){return this._settings.get("app.feature_groups")||{}}get is_admin(){let e=ao$1().groups||[],t=this._settings.get("app.admin_group")||"admin";return e.includes(t)||e.includes("placeos_admin")||e.includes("placeos_support")}async ngOnInit(){await this._org.waitUntilInitialised(),this.links=[{name:bi$1("APP.CONCIERGE.MENU_BOOKINGS"),icon:"add_circle",children:[{id:"spaces",name:bi$1("APP.CONCIERGE.MENU_ROOM_BOOKINGS"),route:["/book/rooms"]},{id:"desks",name:bi$1("APP.CONCIERGE.MENU_DESK_BOOKINGS"),route:["/book/desks/events"]},{id:"parking",name:bi$1("APP.CONCIERGE.MENU_PARKING_BOOKINGS"),route:["/book/parking/events"]},{id:"parking-bookings",name:bi$1("APP.CONCIERGE.MENU_PARKING_BOOKINGS"),route:["/book/parking/events"]},{id:"lockers",name:bi$1("APP.CONCIERGE.MENU_LOCKER_BOOKINGS"),route:["/book/lockers/events"]},{id:"assets",name:bi$1("APP.CONCIERGE.MENU_ASSET_BOOKINGS"),route:["/book/assets/list/requests"]},{id:"catering",name:bi$1("APP.CONCIERGE.MENU_CATERING_BOOKINGS"),route:["/book/catering/orders"]},{id:"visitors",name:bi$1("APP.CONCIERGE.MENU_VISITOR_BOOKINGS"),route:["/book/visitors"]},{id:"visitor-rules",name:bi$1("APP.CONCIERGE.MENU_VISITOR_RULES"),route:["/book/visitors/rules"]}]},{id:"facilities",name:bi$1("APP.CONCIERGE.MENU_MANAGEMENT"),icon:"place",children:[{id:"zones",name:bi$1("APP.CONCIERGE.MENU_MANAGE_ZONES"),route:["/zone-management"]},{id:"spaces",name:bi$1("APP.CONCIERGE.MENU_MANAGE_ROOMS"),route:["/room-management"]},{id:"desks",name:bi$1("APP.CONCIERGE.MENU_MANAGE_DESKS"),route:["/book/desks/manage"]},{id:"parking",name:bi$1("APP.CONCIERGE.MENU_MANAGE_PARKING"),route:["/book/parking/manage"]},{id:"parking-manage",name:bi$1("APP.CONCIERGE.MENU_MANAGE_PARKING"),route:["/book/parking/manage"]},{id:"lockers",name:bi$1("APP.CONCIERGE.MENU_MANAGE_LOCKERS"),route:["/book/lockers/manage"]},{id:"catering",name:bi$1("APP.CONCIERGE.MENU_MANAGE_CATERING"),route:["/book/catering/menu"]},{id:"points",name:bi$1("APP.CONCIERGE.MENU_MANAGE_POINTS"),route:["/points-management"]},{id:"emergency-contacts",name:bi$1("APP.CONCIERGE.MENU_MANAGE_CONTACTS"),icon:"assignment_ind",route:["/users/staff/emergency-contacts"]},{id:"signage",name:bi$1("APP.CONCIERGE.MENU_MANAGE_SIGNAGE"),route:["/signage"]},{id:"points-of-interest",name:bi$1("APP.CONCIERGE.MENU_MANAGE_MAP_FEATURES"),route:["/points-of-interest"]},{id:"url-management",name:bi$1("APP.CONCIERGE.MENU_MANAGE_URLS"),route:["/url-management"]},{id:"email-templates",name:bi$1("APP.CONCIERGE.MENU_MANAGE_EMAILS"),route:["/email-templates"]},{id:"deals-n-offers",name:bi$1("APP.CONCIERGE.MENU_MANAGE_DEALS"),route:["/deals-n-offers"]}]},{id:"assets",name:bi$1("APP.CONCIERGE.MENU_ASSETS"),route:["/book/assets/list/items"],icon:"vibration"},{id:"internal-users",name:bi$1("APP.CONCIERGE.MENU_USER_LIST"),icon:"assignment_ind",route:["/users/staff"]},{id:"events",name:bi$1("APP.CONCIERGE.MENU_EVENTS"),route:["/entertainment/events"],icon:"confirmation_number"},{id:"surveys",name:bi$1("APP.CONCIERGE.MENU_SURVEYS"),route:["/surveys"],icon:"add_reaction"},{_id:"reports",name:bi$1("APP.CONCIERGE.MENU_REPORTS"),icon:"analytics",children:[{id:"attendance-report",name:bi$1("APP.CONCIERGE.MENU_REPORT_SITE_ATTENDANCE"),route:["/reports/attendance"]},{id:"booking-report",name:bi$1("APP.CONCIERGE.MENU_REPORT_ROOMS"),route:["/reports/bookings"]},{id:"desk-report",name:bi$1("APP.CONCIERGE.MENU_REPORT_DESKS"),route:["/reports/desks"]},{id:"parking-report",name:bi$1("APP.CONCIERGE.MENU_REPORT_PARKING"),route:["/reports/parking"]},{id:"lockers-report",name:bi$1("APP.CONCIERGE.MENU_REPORT_LOCKERS"),route:["/reports/lockers"]},{id:"catering-report",name:bi$1("APP.CONCIERGE.MENU_REPORT_CATERING"),route:["/reports/catering"]},{id:"contact-tracing-report",name:bi$1("APP.CONCIERGE.MENU_REPORT_CONTACT_TRACING"),route:["/reports/contact-tracing"]},{id:"assets-report",name:bi$1("APP.CONCIERGE.MENU_REPORT_ASSETS"),route:["/reports/assets"]},{id:"visitors-report",name:bi$1("APP.CONCIERGE.MENU_REPORT_VISITORS"),route:["/reports/visitors"]}]}],this.updateFilteredLinks(),this.timeout("update_inview",()=>this._moveActiveLinkIntoView(),50),this.timeout("update_links",()=>this.updateFilteredLinks(),500);}_isFeatureAvailable(e){if(e.startsWith("*"))return  true;let t=this.feature_list.includes(e),r=this.feature_groups[e]||[],o=ao$1().groups;return !!(t&&(this.is_admin||!r.length||o.find(c=>r.includes(c))))}updateFilteredLinks(){let e=this._settings.get("app.custom_reports")||[];if(e.length&&this.links.find(t=>t._id==="reports")){let t=this.links.find(r=>r._id==="reports");t.children=Rr$1(t.children.concat(e.map(r=>m$1(l({},r),{id:`*${r.id}`,route:["/reports",r.id]}))),"id");}if(this.filtered_links.set(this.links.map(t=>m$1(l({},t),{children:t.children?t.children.filter(r=>this._isFeatureAvailable(r.id)):null})).filter(t=>(!t.id||t.id==="home"||this._isFeatureAvailable(t.id))&&t.route||t.children?.length)),this.filtered_links().find(t=>t.id==="home")){let t=this.filtered_links().find(r=>r.id==="home");t.route=this._settings.get("app.default_route")||["/"];}this.is_admin||this.filtered_links.update(t=>t.filter(r=>r.id!=="facilities"));}toggleBlock(e){this.show_block.update(t=>m$1(l({},t),{[e]:!t[e]}));}isBlockCollapsed(e){return !!this.show_block()[e]}_moveActiveLinkIntoView(){let e=this._element_ref.nativeElement.querySelector("a.active");e&&e.scrollIntoView({block:"center",behavior:"instant"});}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ve({type:n,selectors:[["app-sidebar"]],features:[Re],decls:3,vars:0,consts:[[1,"border-base-200","h-full","w-64","overflow-auto","border-r","py-2","pr-3"],["matRipple","","routerLinkActive","active",1,"hover:bg-base-200","my-1","flex","w-full","items-center","space-x-2","rounded-r-full","p-1",3,"routerLink"],[1,"text-2xl","opacity-60"],[1,"font-medium"],["matRipple","",1,"hover:bg-base-200","my-1","flex","w-full","items-center","space-x-2","rounded-r-full","p-1"],[1,"w-full","overflow-hidden"],["matRipple","",1,"hover:bg-base-200","my-1","flex","w-full","items-center","space-x-2","rounded-r-full","p-1",3,"click"],[1,"flex-1","text-left","font-medium"],[1,"text-2xl"],["routerLinkActive","active",1,"hover:bg-base-200","my-1","flex","w-full","items-center","space-x-2","rounded-r-full","p-1",3,"routerLink"]],template:function(t,r){t&1&&(ke(0,"div",0),f8(1,Su,2,1,null,null,ku),Be()),t&2&&(he(),p8(r.filtered_links()));},dependencies:[yZ,iv,pZ,kl$1,a0,_Xe],styles:["[_nghost-%COMP%]{height:100%}a.active[_ngcontent-%COMP%]{background-color:var(--secondary);color:var(--secondary-content)}a.active[_ngcontent-%COMP%]:hover{color:var(--base-content);opacity:.75}"],data:{animation:[tQe]}});}}return n})();var Iu=()=>["/"],j1=(()=>{class n{constructor(){this._settings=m(qs$1),this._theme=this._settings.theme_signal,this._logo_dark=this._settings.signal("app.logo_dark",{},true),this._logo_light=this._settings.signal("app.logo_light",{},true),this.logo_src=me(()=>{let e=this.logo();return typeof e=="string"?e:e?.src||""}),this.logo=me(()=>(this._theme()==="dark"?this._logo_dark():this._logo_light())||{}),this.user=lee();}static{this.\u0275fac=function(t){return new(t||n)};}static{this.\u0275cmp=ve({type:n,selectors:[["app-topbar"]],decls:10,vars:4,consts:[[1,"border-base-200","flex","items-center","border-b","p-2"],[1,"w-64"],[3,"routerLink"],["auth","",1,"h-12",3,"source"],[1,"flex","flex-1","items-center","justify-end","space-x-2"],["btn","","icon","","matRipple",""],[1,"text-2xl"],[1,"mr-2"],[3,"user"]],template:function(t,r){t&1&&(ke(0,"div",0)(1,"div",1)(2,"a",2),Ft(3,"img",3),Be()(),ke(4,"div",4)(5,"button",5)(6,"icon",6),gr$1(7,"notifications"),Be()(),ke(8,"user-controls-sidebar",7),Ft(9,"a-user-avatar",8),Be()()()),t&2&&(he(2),Dn$1("routerLink",a4(3,Iu)),he(),Dn$1("source",r.logo_src()),he(6),Dn$1("user",r.user()));},dependencies:[yZ,iv,Or,kl$1,a0,It,_Xe,Ll],styles:["[_nghost-%COMP%]{width:100%}"]});}}return n})();
export{Ai as A,Bi as B,C0 as C,Ds as D,zi as E,F1 as F,It as I,Ng as N,Or as O,Ro as R,St as S,Tr as T,Fs as a,Sr as b,ci as c,Cl as d,Rr as e,Og as f,Fo as g,hl as h,ri as i,j1 as j,Dg as k,li as l,mt as m,Dr as n,oi as o,pr as p,Ac as q,rt as r,si as s,Ar as t,ut as u,vi as v,wl as w,xl as x,yl as y,Nr as z};