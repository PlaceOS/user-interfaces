"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["default-libs_explore_src_index_ts"],{6168:(te,K,u)=>{function Z(k){var v=this;k="object"==typeof k?k:{},v.revision=3,v.imageTypes={bmp:"image/bmp",gif:"image/gif",jpeg:"image/jpeg",jpg:"image/jpg",png:"image/png","svg+xml":"image/svg+xml",tiff:"image/tiff",webp:"image/webp","x-icon":"image/x-icon"},v.toTable=k.toTable,v.domElement=v.toTable?document.createElement("div"):document.createElement("canvas"),v.url=k.url||"",v.size=k.size||280,v.qrc=!1,v.colorLight=k.colorLight||"#fff",v.colorDark=k.colorDark||"#000",v.ecclevel=k.ecclevel||1,v.noBorder=k.noBorder,v.borderSize=k.borderSize||4;var L,O,l,S,x,P,F,y=[],e=[],g=[],E=[],C=[],A=[],T=function(h,o){var i;h>o&&(i=h,h=o,o=i),i=o,i*=o,i+=o,i>>=1,E[i+=h]=1},B=function(h,o){var i;for(g[h+l*o]=1,i=-2;i<2;i++)g[h+i+l*(o-2)]=1,g[h-2+l*(o+i+1)]=1,g[h+2+l*(o+i)]=1,g[h+i+1+l*(o+2)]=1;for(i=0;i<2;i++)T(h-1,o+i),T(h+1,o-i),T(h-i,o-1),T(h+i,o+1)},D=function(h){for(;h>=255;)h=((h-=255)>>8)+(255&h);return h},J=function(h,o,i,c){var _,U,f,I=Z.gexp,G=Z.glog;for(_=0;_<c;_++)y[i+_]=0;for(_=0;_<o;_++){if(255!=(f=G[y[h+_]^y[i]]))for(U=1;U<c;U++)y[i+U-1]=y[i+U]^I[D(f+A[c-U])];else for(U=i;U<i+c;U++)y[U]=y[U+1];y[i+c-1]=255==f?0:I[D(f+A[0])]}},j=function(h,o){var i;return h>o&&(i=h,h=o,o=i),i=o,i+=o*o,i>>=1,E[i+=h]},q=function(h){var o,i,c,_;switch(h){case 0:for(i=0;i<l;i++)for(o=0;o<l;o++)o+i&1||j(o,i)||(g[o+i*l]^=1);break;case 1:for(i=0;i<l;i++)for(o=0;o<l;o++)1&i||j(o,i)||(g[o+i*l]^=1);break;case 2:for(i=0;i<l;i++)for(c=0,o=0;o<l;o++,c++)3==c&&(c=0),c||j(o,i)||(g[o+i*l]^=1);break;case 3:for(_=0,i=0;i<l;i++,_++)for(3==_&&(_=0),c=_,o=0;o<l;o++,c++)3==c&&(c=0),c||j(o,i)||(g[o+i*l]^=1);break;case 4:for(i=0;i<l;i++)for(c=0,_=i>>1&1,o=0;o<l;o++,c++)3==c&&(c=0,_=!_),_||j(o,i)||(g[o+i*l]^=1);break;case 5:for(_=0,i=0;i<l;i++,_++)for(3==_&&(_=0),c=0,o=0;o<l;o++,c++)3==c&&(c=0),(o&i&1)+!(!c|!_)||j(o,i)||(g[o+i*l]^=1);break;case 6:for(_=0,i=0;i<l;i++,_++)for(3==_&&(_=0),c=0,o=0;o<l;o++,c++)3==c&&(c=0),(o&i&1)+(c&&c==_)&1||j(o,i)||(g[o+i*l]^=1);break;case 7:for(_=0,i=0;i<l;i++,_++)for(3==_&&(_=0),c=0,o=0;o<l;o++,c++)3==c&&(c=0),(c&&c==_)+(o+i&1)&1||j(o,i)||(g[o+i*l]^=1)}},N=function(h){var o,i=0;for(o=0;o<=h;o++)C[o]>=5&&(i+=Z.N1+C[o]-5);for(o=3;o<h-1;o+=2)C[o-2]==C[o+2]&&C[o+2]==C[o-1]&&C[o-1]==C[o+1]&&3*C[o-1]==C[o]&&(0==C[o-3]||o+3>h||3*C[o-3]>=4*C[o]||3*C[o+3]>=4*C[o])&&(i+=Z.N3);return i},$=function(){var h,o,i,c,_,U=0,f=0;for(o=0;o<l-1;o++)for(h=0;h<l-1;h++)(g[h+l*o]&&g[h+1+l*o]&&g[h+l*(o+1)]&&g[h+1+l*(o+1)]||!(g[h+l*o]||g[h+1+l*o]||g[h+l*(o+1)]||g[h+1+l*(o+1)]))&&(U+=Z.N2);for(o=0;o<l;o++){for(C[0]=0,i=c=h=0;h<l;h++)(_=g[h+l*o])==c?C[i]++:C[++i]=1,f+=(c=_)?1:-1;U+=N(i)}f<0&&(f=-f);var I=f,G=0;for(I+=I<<2,I<<=1;I>l*l;)I-=l*l,G++;for(U+=G*Z.N4,h=0;h<l;h++){for(C[0]=0,i=c=o=0;o<l;o++)(_=g[h+l*o])==c?C[i]++:C[++i]=1,c=_;U+=N(i)}return U};v.genframe=function(h){var o,i,c,_,U,f,I,G,V=Z.eccblocks,H=Z.gexp,Q=Z.glog;_=h.length,O=0;do{if(O++,c=4*(L-1)+16*(O-1),S=V[c++],x=V[c++],P=V[c++],F=V[c],_<=(c=P*(S+x)+x-3+(O<=9)))break}while(O<40);for(l=17+4*O,U=P+(P+F)*(S+x)+x,_=0;_<U;_++)e[_]=0;for(y=h.slice(0),_=0;_<l*l;_++)g[_]=0;for(_=0;_<(l*(l+1)+1)/2;_++)E[_]=0;for(_=0;_<3;_++){for(c=0,i=0,1==_&&(c=l-7),2==_&&(i=l-7),g[i+3+l*(c+3)]=1,o=0;o<6;o++)g[i+o+l*c]=1,g[i+l*(c+o+1)]=1,g[i+6+l*(c+o)]=1,g[i+o+1+l*(c+6)]=1;for(o=1;o<5;o++)T(i+o,c+1),T(i+1,c+o+1),T(i+5,c+o),T(i+o+1,c+5);for(o=2;o<4;o++)g[i+o+l*(c+2)]=1,g[i+2+l*(c+o+1)]=1,g[i+4+l*(c+o)]=1,g[i+o+1+l*(c+4)]=1}if(O>1)for(_=Z.adelta[O],i=l-7;;){for(o=l-7;o>_-3&&(B(o,i),!(o<_));)o-=_;if(i<=_+9)break;B(6,i-=_),B(i,6)}for(g[8+l*(l-8)]=1,i=0;i<7;i++)T(7,i),T(l-8,i),T(7,i+l-7);for(o=0;o<8;o++)T(o,7),T(o+l-8,7),T(o,l-8);for(o=0;o<9;o++)T(o,8);for(o=0;o<8;o++)T(o+l-8,8),T(8,o);for(i=0;i<7;i++)T(8,i+l-7);for(o=0;o<l-14;o++)1&o?(T(8+o,6),T(6,8+o)):(g[8+o+6*l]=1,g[6+l*(8+o)]=1);if(O>6)for(_=Z.vpat[O-7],c=17,o=0;o<6;o++)for(i=0;i<3;i++,c--)1&(c>11?O>>c-12:_>>c)?(g[5-o+l*(2-i+l-11)]=1,g[2-i+l-11+l*(5-o)]=1):(T(5-o,2-i+l-11),T(2-i+l-11,5-o));for(i=0;i<l;i++)for(o=0;o<=i;o++)g[o+l*i]&&T(o,i);for(U=y.length,f=0;f<U;f++)e[f]=y.charCodeAt(f);if(y=e.slice(0),U>=(o=P*(S+x)+x)-2&&(U=o-2,O>9&&U--),f=U,O>9){for(y[f+2]=0,y[f+3]=0;f--;)y[f+3]|=255&(_=y[f])<<4,y[f+2]=_>>4;y[2]|=255&U<<4,y[1]=U>>4,y[0]=64|U>>12}else{for(y[f+1]=0,y[f+2]=0;f--;)y[f+2]|=255&(_=y[f])<<4,y[f+1]=_>>4;y[1]|=255&U<<4,y[0]=64|U>>4}for(f=U+3-(O<10);f<o;)y[f++]=236,y[f++]=17;for(A[0]=1,f=0;f<F;f++){for(A[f+1]=1,I=f;I>0;I--)A[I]=A[I]?A[I-1]^H[D(Q[A[I]]+f)]:A[I-1];A[0]=H[D(Q[A[0]]+f)]}for(f=0;f<=F;f++)A[f]=Q[A[f]];for(c=o,i=0,f=0;f<S;f++)J(i,P,c,F),i+=P,c+=F;for(f=0;f<x;f++)J(i,P+1,c,F),i+=P+1,c+=F;for(i=0,f=0;f<P;f++){for(I=0;I<S;I++)e[i++]=y[f+I*P];for(I=0;I<x;I++)e[i++]=y[S*P+f+I*(P+1)]}for(I=0;I<x;I++)e[i++]=y[S*P+f+I*(P+1)];for(f=0;f<F;f++)for(I=0;I<S+x;I++)e[i++]=y[o+f+I*F];for(y=e,o=i=l-1,c=U=1,G=(P+F)*(S+x)+x,f=0;f<G;f++)for(_=y[f],I=0;I<8;I++,_<<=1){128&_&&(g[o+l*i]=1);do{U?o--:(o++,c?0!=i?i--:(c=!c,6==(o-=2)&&(o--,i=9)):i!=l-1?i++:(c=!c,6==(o-=2)&&(o--,i-=8))),U=!U}while(j(o,i))}for(y=g.slice(0),_=0,i=3e4,c=0;c<8&&(q(c),(o=$())<i&&(i=o,_=c),7!=_);c++)g=y.slice(0);for(_!=c&&q(_),i=Z.fmtword[_+(L-1<<3)],c=0;c<8;c++,i>>=1)1&i&&(g[l-1-c+8*l]=1,c<6?g[8+l*c]=1:g[8+l*(c+1)]=1);for(c=0;c<7;c++,i>>=1)1&i&&(g[8+l*(l-7+c)]=1,c?g[6-c+8*l]=1:g[7+8*l]=1);return g},v.init=function(){L=v.ecclevel;var h=v.genframe(v.url);v.toTable?v.tableWrite(h,l):v.canvasWrite(h,l)},v.init()}function b(k,v="#fff0",L="#000"){return new Z({url:k||"Hello",size:360,colorLight:v,colorDark:L,toTable:!1,ecclevel:1,noBorder:!0,borderSize:0})?.toImage("svg+xml")?.src}u.d(K,{w:()=>b}),Z.prototype={canvasWrite:function(k,v){if(!this.qrc&&(this.qrc=this.getContext(this.domElement),!this.qrc))return this.toTable=!0,this.domElement=document.createElement("div"),void this.tableWrite(k,v);var L=this.size,O=this.qrc;O.lineWidth=1;var l=L;l/=v+10,l=Math.round(l-.5);var S=4;this.noBorder?(O.canvas.width=O.canvas.height=l*v,S=0):O.canvas.width=O.canvas.height=L,O.clearRect(0,0,L,L),O.fillStyle=this.colorLight,O.fillRect(0,0,l*(v+8),l*(v+8)),O.fillStyle=this.colorDark;for(var x=0;x<v;x++)for(var P=0;P<v;P++)k[P*v+x]&&O.fillRect(l*(S+x),l*(S+P),l,l)},tableWrite:function(k,v){var L=this,O=Math.round(this.size/v-3.5)+"px",l=v+(L.noBorder?0:2*L.borderSize),S=L.borderSize,x="width:"+O+";height:"+O+";",P=L.colorLight,F=L.colorDark,y=document.createElement("table");y.style.cssText="border:0;border-collapse:collapse;";for(var e,g=document.createElement("tr"),E=document.createElement("td"),C=function(){return E.cloneNode()},A=function(){var N=C();return N.style.cssText=x+"background:"+P,N},T=function(N){for(var $=N.firstChild,h=0;h<S;h++)N.insertBefore(A(),$),N.appendChild(A())},B=0;B<v;B++){var D=g.cloneNode();y.appendChild(D);for(var J=0;J<v;J++)if(1===k[B*v+J]){var j=(e=void 0,(e=C()).style.cssText=x+"background:"+F,e);D.appendChild(j)}else{var q=A();D.appendChild(q)}L.noBorder||T(D)}L.noBorder||function(N){for(var $=N.firstChild,h=0;h<L.borderSize;h++){for(var o=g.cloneNode(),i=0;i<l;i++){var c=A();o.appendChild(c)}N.appendChild(o),N.insertBefore(o.cloneNode(!0),$)}}(y),L.domElement.innerHTML="",L.domElement.appendChild(y)},getContext:function(k){return k.getContext&&k.getContext("2d")?k.getContext("2d"):(console.log("Browser does not have 2d Canvas support"),!1)},toImage:function(k){if(this.qrc){var v=this.imageTypes[k];if(!v)throw new Error(k+" is not a valid image type ");var L=new Image;return L.src=this.domElement.toDataURL(v),L}}},Z.adelta=[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28],Z.vpat=[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177],Z.fmtword=[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],Z.eccblocks=[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],Z.glog=[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175],Z.gexp=[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],Z.N1=3,Z.N2=3,Z.N3=40,Z.N4=10},6125:(te,K,u)=>{u.d(K,{Xp:()=>re,ck:()=>y.c,P2:()=>gt});var Z=u(4666),b=u(2508),k=u(2921),v=u(4714),L=u(5895),O=u(7520),l=u(6850),S=u(1670),x=u(3294),P=u(3619),F=u(5670),y=u(6667),e=u(2560);u(9885),u(207),u(5074),u(7371);var q=u(3690),o=(u(3910),u(8933),u(6862),u(6942)),c=(u(8426),u(3970)),Q=u(1484);u(4603),u(6217);var ee=u(5306),se=u(4522),de=(u(1267),u(1708),u(1022));u(6168);const oe={free:"#43a047",pending:"#ffb300",reserved:"#e65100",busy:"#e53935","signs-of-life":"#1565c0","not-bookable":"#757575",unknown:"#757575"};u(9627);var ge=u(1810),Fe=u(9377),ve=u(3200),Je=u(312),R=u(4505),ne=u(7716),ie=u(9095),ae=u(9128),xe=u(7418),be=u(1847),Ne=u(2306),Ye=u(7303);const je=function(){return{standalone:!0}};function qe(n,d){if(1&n){const t=e.EpF();e.TgZ(0,"main",5)(1,"div",6)(2,"div",7)(3,"label"),e._uU(4,"Date"),e.qZA(),e.TgZ(5,"a-date-field",8),e._uU(6," Date and time must be in the future "),e.qZA()()(),e.TgZ(7,"div",6)(8,"div",9)(9,"label"),e._uU(10,"Start Time"),e.qZA(),e.TgZ(11,"a-time-field",10),e.NdJ("ngModelChange",function(a){e.CHM(t);const r=e.oxw();return e.KtG(r.form.patchValue({date:a}))}),e.qZA()(),e.TgZ(12,"div",9)(13,"label"),e._uU(14,"End Time"),e.qZA(),e._UZ(15,"a-duration-field",11),e.qZA()()()}if(2&n){const t=e.oxw();let s;e.Q6J("formGroup",t.form),e.xp6(5),e.Q6J("to",t.book_until),e.xp6(6),e.Q6J("ngModel",t.form.value.date)("ngModelOptions",e.DdM(8,je)),e.xp6(4),e.Q6J("time",null==(s=t.form.get("date"))?null:s.value)("max",720)("min",60)("step",60)}}let ye=(()=>{class n{constructor(t){this._data=t,this.form=new b.cw({date:new b.NI(this._data.date),duration:new b.NI(this._data.duration)}),this.book_until=this._data.until}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Q.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["set-datetime-modal"]],decls:10,vars:2,consts:[["classs","flex items-center justify-between"],["mat-icon-button","","mat-dialog-close",""],["class","w-[24rem] pt-4",3,"formGroup",4,"ngIf"],[1,"w-full","p-2","border-t","border-gray-200","flex","items-center","justify-center"],["mat-button","",1,"w-32",3,"mat-dialog-close"],[1,"w-[24rem]","pt-4",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","space-x-0","sm:space-x-2","w-[640px]","max-w-[calc(100%-2rem)]","mx-auto"],[1,"flex","flex-col","flex-1","w-full","sm:w-1/4"],["formControlName","date",3,"to"],[1,"flex","flex-col","flex-1","w-full","sm:w-1/3"],[3,"ngModel","ngModelOptions","ngModelChange"],["formControlName","duration",3,"time","max","min","step"]],template:function(t,s){1&t&&(e.TgZ(0,"header",0)(1,"h2"),e._uU(2,"Set date and time"),e.qZA(),e.TgZ(3,"button",1)(4,"app-icon"),e._uU(5,"close"),e.qZA()()(),e.YNc(6,qe,16,9,"main",2),e.TgZ(7,"footer",3)(8,"button",4),e._uU(9,"Continue"),e.qZA()()),2&t&&(e.xp6(6),e.Q6J("ngIf",s.form),e.xp6(2),e.Q6J("mat-dialog-close",s.form.value))},dependencies:[Z.O5,ee.o,se.lW,Q.ZT,b.JJ,b.JL,b.On,b.sg,b.u,Ne.Q,de.B,Ye.N]}),n})();function Qe(n,d){if(1&n&&(e.TgZ(0,"p",8),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Oqu(t.user)}}function $e(n,d){if(1&n&&(e.TgZ(0,"p",9),e._uU(1),e.ALo(2,"date"),e.ALo(3,"date"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.AsE(" ",e.xi3(2,2,t.start,"shortTime")," \u2013 ",e.xi3(3,5,t.end,"shortTime")," ")}}function Ge(n,d){if(1&n&&(e.TgZ(0,"div",2),e._UZ(1,"div",3),e.TgZ(2,"div",4)(3,"h4",5),e._uU(4),e.qZA(),e.YNc(5,Qe,2,1,"p",6),e.YNc(6,$e,4,8,"p",7),e.qZA()()),2&n){const t=e.oxw();e.Tol("absolute rounded bg-white p-4 top-0 left-0 shadow pointer-events-none "+t.x_pos+" "+t.y_pos),e.Q6J("id",t.map_id),e.xp6(4),e.Oqu(t.map_id),e.xp6(1),e.Q6J("ngIf",t.user),e.xp6(1),e.Q6J("ngIf",t.start)}}let Ce=(()=>{class n{constructor(t,s){this._details=t,this._element=s,this.id=this._details.id,this.map_id=this._details.map_id,this.user=this._details.user,this.start=this._details.start,this.end=this._details.end}ngOnInit(t=0){t>10||setTimeout(()=>{const s=this._element.nativeElement.parentElement?.parentElement;if(!s)return this.ngOnInit(++t);const a_y=parseInt(s.style.top,10)/100,a_x=parseInt(s.style.left,10)/100;this.y_pos=a_y>=.5?"bottom":"top",this.x_pos=a_x>=.5?"right":"left"},200)}get available_until(){return""}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(k.ui),e.Y36(e.SBq))},n.\u0275cmp=e.Xpm({type:n,selectors:[["explore-desk-info"]],decls:3,vars:7,consts:[["customTooltip","",1,"h-full","w-full","pointer-events-auto","relative",3,"content","backdrop","xPosition","yPosition","hover"],["desk_tooltip",""],["name","space-info",3,"id"],[1,"arrow"],[1,"details"],["map-id","",1,"m-0","font-medium"],["user","","class","mt-2 text-sm",4,"ngIf"],["start","","class","mt-1 text-sm",4,"ngIf"],["user","",1,"mt-2","text-sm"],["start","",1,"mt-1","text-sm"]],template:function(t,s){if(1&t&&(e._UZ(0,"div",0),e.YNc(1,Ge,7,6,"ng-template",null,1,e.W1O)),2&t){const a=e.MAs(2);e.Q6J("content",a)("backdrop",!1)("xPosition","center")("yPosition","center")("hover",!0),e.uIk("id",s.id)("map_id",s.map_id)}},dependencies:[Z.O5,c.X,Z.uU],styles:["[name=space-info][_ngcontent-%COMP%]{width:16rem}[name=status][_ngcontent-%COMP%]{background-color:#43a047;font-weight:500}[name=status].busy[_ngcontent-%COMP%]{background-color:#e53935}[name=status].pending[_ngcontent-%COMP%]{background-color:#ffb300}[name=status].not-bookable[_ngcontent-%COMP%]{background-color:#757575}\n/*# sourceMappingURL=explore-desk-info.component.ts-angular-inline--58.css.map*/"]}),n})();var Re=u(9380),We=u(8987);const Ke=["explore-device-info",""];function Xe(n,d){if(1&n&&(e.TgZ(0,"p",15)(1,"label"),e._uU(2,"Manufacturer:"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.manufacturer," ")}}function Ve(n,d){if(1&n&&(e.TgZ(0,"p",16)(1,"label"),e._uU(2,"OS:"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.os,"")}}function He(n,d){if(1&n&&(e.TgZ(0,"p",17)(1,"label"),e._uU(2,"SSID:"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.ssid,"")}}function et(n,d){if(1&n&&(e.TgZ(0,"p",18)(1,"label"),e._uU(2,"Username:"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",(null==t.user?null:t.user.name)||(null==t.user?null:t.user.username)||t.username," ")}}function tt(n,d){if(1&n&&(e.TgZ(0,"p",19)(1,"label"),e._uU(2,"Type:"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.user.type," ")}}function st(n,d){if(1&n){const t=e.EpF();e.TgZ(0,"div",6),e.NdJ("mouseleave",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.close())}),e._UZ(1,"div",7),e.TgZ(2,"div",8)(3,"p",9)(4,"label"),e._uU(5,"MAC:"),e.qZA(),e._uU(6),e.qZA(),e.TgZ(7,"p")(8,"label"),e._uU(9,"Accuracy:"),e.qZA(),e._uU(10),e.qZA(),e.TgZ(11,"p")(12,"label"),e._uU(13,"Last Seen:"),e.qZA(),e._uU(14),e.qZA(),e.YNc(15,Xe,4,1,"p",10),e.YNc(16,Ve,4,1,"p",11),e.YNc(17,He,4,1,"p",12),e.YNc(18,et,4,1,"p",13),e.YNc(19,tt,4,1,"p",14),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(6),e.hij(" ",t.mac,""),e.xp6(4),e.hij(" ",t.variance,"m"),e.xp6(4),e.hij(" ",t.last_seen,""),e.xp6(1),e.Q6J("ngIf",t.manufacturer),e.xp6(1),e.Q6J("ngIf",t.os),e.xp6(1),e.Q6J("ngIf",t.ssid),e.xp6(1),e.Q6J("ngIf",t.username),e.xp6(1),e.Q6J("ngIf",t.user)}}let Ze=(()=>{class n extends x.KG{constructor(t,s){super(),this._details=t,this._element=s,this.username="",this.user=this._details.user,this.mac=this._details.mac,this.manufacturer=this._details.manufacturer,this.os=this._details.os,this.ssid=this._details.ssid,this.variance=this._details.variance?.toFixed(2),this.bg_color=this._details.bg_color||this.distance_color,this.zoom=1}get last_seen(){return(0,Re.Z)(1e3*(this._details.last_seen||0),{addSuffix:!0})}get diameter(){return 100*this._details.variance*this.zoom}get distance(){return Math.abs((0,We.Z)(1e3*(this._details.last_seen||0),new Date))}get distance_color(){return this.distance<10?"#43a047":this.distance<20?"#ffb300":"#e53935"}ngOnInit(t=0){t>10||setTimeout(()=>{const s=this._element.nativeElement.parentElement?.parentElement;if(!s)return this.ngOnInit(++t);const a_y=parseInt(s.style.top,10)/100,a_x=parseInt(s.style.left,10)/100;this.y_pos=a_y>=.5?"bottom":"top",this.x_pos=a_x>=.5?"end":"start",this.subscription("zoom",this._details.zoom$.subscribe(r=>this.zoom=r))},200)}loadUser(){var t=this;return(0,S.Z)(function*(){if(t.username)return;const s=(0,q.rTZ)(t._details.system,"LocationServices");if(!s)return;t.username="Loading...";const a=yield s.execute("check_ownership_of",[t.mac]).catch(r=>null);t.username=a&&a.assigned_to?a.assigned_to:""})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(k.ui),e.Y36(e.SBq))},n.\u0275cmp=e.Xpm({type:n,selectors:[["","explore-device-info",""]],features:[e.qOj],attrs:Ke,decls:7,vars:9,consts:[["name","radius",1,"radius","absolute","center","bg-blue-600","bg-opacity-25","border-8","border-dashed","border-blue-600","rounded-full"],["shadow","",1,"absolute","center","bg-black/40","h-8","w-8","rounded-full"],["name","dot",1,"h-3","w-3","absolute","center","rounded-full","shadow","border-2","border-white"],["dot",""],["customTooltip","",1,"absolute","inset-0","pointer-events-auto",3,"content","backdrop","xPosition","yPosition","hover","mouseenter"],["device_tooltip",""],["name","device-info",1,"w-64","rounded","bg-white","p-4","top-0","left-0","shadow","pointer-events-none","mx-2",3,"mouseleave"],[1,"arrow"],[1,"details"],[1,"break-words"],["type","",4,"ngIf"],["os","",4,"ngIf"],["ssid","",4,"ngIf"],["username","",4,"ngIf"],["user","",4,"ngIf"],["type",""],["os",""],["ssid",""],["username",""],["user",""]],template:function(t,s){if(1&t&&(e._UZ(0,"div",0)(1,"div",1)(2,"div",2,3),e.TgZ(4,"div",4),e.NdJ("mouseenter",function(){return s.loadUser()}),e.qZA(),e.YNc(5,st,20,8,"ng-template",null,5,e.W1O)),2&t){const a=e.MAs(6);e.Akn("height: "+s.diameter+"%; width: "+s.diameter+"%;"),e.xp6(2),e.Udp("background-color",s.bg_color),e.xp6(2),e.Q6J("content",a)("backdrop",!1)("xPosition",s.x_pos)("yPosition",s.y_pos)("hover",!0)}},dependencies:[Z.O5,c.X],styles:["[_nghost-%COMP%]{pointer-events:auto}[_nghost-%COMP%] > [name=dot][_ngcontent-%COMP%]{background-color:#616161}[_nghost-%COMP%]:hover > [name=radius][_ngcontent-%COMP%]{opacity:1}[name=radius][_ngcontent-%COMP%]{opacity:0;transition:opacity .2s;pointer-events:none}\n/*# sourceMappingURL=explore-device-info.component.ts-angular-inline--59.css.map*/"]}),n})(),re=(()=>{class n extends x.KG{constructor(t,s,a,r,p){super(),this._state=t,this._org=s,this._settings=a,this._bookings=r,this._dialog=p,this._in_use=new R.X([]),this._options=new R.X({}),this._presence=new R.X([]),this._signs_of_life=new R.X([]),this._statuses={},this._users={},this._poll=new R.X(0),this._checked_in=new R.X([]),this._desk_bookings=(0,ne.aj)([this._state.level,this._poll]).pipe((0,ie.w)(([m])=>(0,be.F2)({period_start:(0,ge.Z)((0,Fe.Z)(new Date)),period_end:(0,ge.Z)((0,ve.Z)(new Date)),type:"desk",zones:m.id})),(0,ae.d)(1)),this.desk_list=this._state.level.pipe((0,ie.w)(m=>(0,q.rlq)(m.id,"desks").pipe((0,o.U)(w=>(w.details instanceof Array?w.details:[]).map(z=>new P.nk({...z,zone:m}))))),(0,xe.K)(m=>[]),(0,ae.d)(1)),this._bind=this._state.level.pipe((0,o.U)(m=>{if(this._statuses={},this.unsubWith("lvl"),!m)return;const w=this._org.binding("area_management");if(!w)return;let z=(0,q.rTZ)(w,"AreaManagement").binding(m.id);this.subscription("lvl-in_use",z.listen().subscribe(M=>this.processBindingChange(M||{},w))),this.subscription("lvl-in_use_bind",z.bind())})),this._state_change=(0,ne.aj)([this.desk_list,this._in_use,this._presence,this._checked_in,this._signs_of_life,this._options]).pipe((0,o.U)(([m,w,z,M,Y])=>{this._statuses={};for(const{id:W,bookable:ce}of m){const vt=w.some(X=>W===X),ke=z.some(X=>W===X),xt=Y.some(X=>W===X),we=M.some(X=>W===X);this._statuses[W]=ce?vt||ke||we?ke||we?"busy":"pending":xt?"signs-of-life":"free":"not-bookable"}this.processDesks(m)})),this.init()}init(){var t=this;return(0,S.Z)(function*(){yield t._org.initialised.pipe((0,F.P)(s=>s)).toPromise(),t.setOptions({enable_booking:!1!==t._settings.get("app.desks.enable_maps")}),t.subscription("bind",t._bind.subscribe()),t.subscription("changes",t._state_change.subscribe()),t.subscription("desks",t.desk_list.subscribe(s=>t.processDesks(s)))})()}startPolling(t=1e4){return this.subscription("desks_in_use_bookings",this._desk_bookings.subscribe(s=>{const a=s.filter(r=>!(r.rejected||r.deleted||"ended"===r.extension_data.current_state));this._in_use.next(a.map(r=>r.asset_id)),this._checked_in.next(a.filter(r=>r.checked_in).map(r=>r.asset_id))})),this.interval("poll",()=>this._poll.next((new Date).valueOf()),t),()=>this.stopPolling()}stopPolling(){this.clearInterval("poll")}setOptions(t){this._options.next({...this._options.getValue(),...t})}processBindingChange({value:t},s){const a=(t||[]).filter(p=>!["desk","booking"].includes(p.location)),r=(t||[]).filter(p=>"desk"===p.location||"booking"===p.location&&"desk"===p.type);this._presence.next(r.filter(p=>p.at_location).map(p=>p.map_id||p.asset_id)),this._signs_of_life.next(r.filter(p=>p.signs_of_life).map(p=>p.map_id||p.asset_id)),this.processDevices(a,s),this.timeout("update",()=>this.updateStatus(),100)}updateStatus(){const t={},s=this._settings.get("app.explore.colors")||{};for(const a in this._statuses)!this._statuses[a]||(t[`#${a}`]={fill:s[`desk-${this._statuses[a]}`]||s[`${this._statuses[a]}`]||oe[`${this._statuses[a]}`]});this._state.setStyles("desks",t)}processDevices(t,s){const a=[];for(const r of t){const p=r.x/r.map_width,m=r.y/r.map_height;a.push({location:{x:r.coordinates_from?.includes("right")?1-p:p,y:r.coordinates_from?.includes("bottom")?1-m:m},content:Ze,z_index:20,data:{...r,system:s}})}this._state.setFeatures("devices",a)}processDesks(t){var s=this;const a=[],r=[],p=this._options.getValue();for(const m of t){if(a.push({location:m.id,content:Ce,full_size:!0,no_scale:!0,data:{id:m.map_id||m.id,map_id:m.name,user:this._users[m.map_id]||m.staff_name,status:this._statuses[m.map_id]},z_index:20}),!m.bookable)continue;const w=function(){var z=(0,S.Z)(function*(){s._bookings.newForm(),s._bookings.setOptions({type:"desk"});const{date:M,duration:Y}=yield s._setBookingTime(s._bookings.form.value.date,s._bookings.form.value.duration);s._bookings.form.patchValue({asset_id:m.id,asset_name:m.name,date:M,duration:Y,map_id:m?.map_id||m?.id,description:m.name,user:p.host||(0,x.ar)(),booking_type:"desk",zones:m.zone?[m.zone?.parent_id,m.zone?.id]:[]}),yield s._bookings.confirmPost(),s._users[m.map_id]=(p.host||(0,x.ar)())?.name,(0,x.t5)(`Successfull booked desk ${m.name||m.id}`)});return function(){return z.apply(this,arguments)}}();r.push({id:m.id,action:"click",callback:w}),r.push({id:m.id,action:"touchend",callback:w})}this._state.setActions("desks",this._options.getValue().enable_booking?r:[]),this._state.setFeatures("desks",a),this.timeout("update",()=>this.updateStatus(),100)}_setBookingTime(t,s){var a=this;return(0,S.Z)(function*(){if(a._settings.get("app.desks.allow_time_changes")){const r=(0,ve.Z)((0,Je.Z)(Date.now(),a._settings.get("app.desks.available_period")||90)),m=yield a._dialog.open(ye,{data:{date:t,duration:s,until:r}}).afterClosed().toPromise();if(!m)throw"User cancelled";t=m.date,s=m.duration}return{date:t,duration:s}})()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(y.c),e.LFG(P.w7),e.LFG(x.gb),e.LFG(be.fy),e.LFG(Q.uw))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();u(9136),u(8461),u(4139),u(823),u(8759),u(4618),u(8550);let gt=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[Z.ez,k.Kk,b.u5,b.UX,v.rP,L.U8,O.eL,l.W9]}),n})()},6667:(te,K,u)=>{u.d(K,{c:()=>y});var Z=u(1670),b=u(4505),k=u(7716),v=u(6942),L=u(823),O=u(5670),l=u(9151),S=u(3294),x=u(3619),P=u(8933),F=u(2560);let y=(()=>{class e extends S.KG{constructor(E,C,A){super(),this._org=E,this._spaces=C,this._settings=A,this._level=new b.X(null),this._positions=new b.X({zoom:1,center:{x:.5,y:.5}}),this._styles=new b.X({}),this._features=new b.X({}),this._actions=new b.X({}),this._labels=new b.X({}),this._options=new b.X({disable:["zones","devices"]}),this._message=new b.X(""),this.level=this._level.asObservable(),this.message=this._message.asObservable(),this.spaces=(0,k.aj)([this._level,this._spaces.list]).pipe((0,v.U)(([T,B])=>B.filter(D=>D.zones.includes(T?.id)))),this.map_url=this._level.pipe((0,v.U)(T=>(T?T.map_id:"")||"")),this.map_positions=this._positions.asObservable(),this.map_features=(0,k.aj)([this._features,this._options]).pipe((0,L.b)(200),(0,v.U)(([T,B])=>{let D=[];for(const J in T)B.disable?.includes(J)||B.disable_features?.includes(J)||(D=D.concat(T[J]));return D})),this.map_actions=(0,k.aj)([this._actions,this._options]).pipe((0,L.b)(200),(0,v.U)(([T,B])=>{let D=[];for(const J in T)B.disable?.includes(J)||B.disable_actions?.includes(J)||(D=D.concat(T[J]));return D})),this.map_labels=(0,k.aj)([this._labels,this._options]).pipe((0,L.b)(200),(0,v.U)(([T,B])=>{let D=[];for(const J in T)B.disable?.includes(J)||B.disable_labels?.includes(J)||(D=D.concat(T[J]));return D})),this.map_styles=(0,k.aj)([this._styles,this._options]).pipe((0,L.b)(200),(0,v.U)(([T,B])=>{let D={text:{display:"none"}};for(const J in T)B.disable?.includes(J)||B.disable_styles?.includes(J)||(D={...D,...T[J]});return B.disable?.includes("zones")&&(D["#zones"]={display:"none"},D["#Zones"]={display:"none"}),D})),this.options=this._options.asObservable(),this.init()}get positions(){return this._positions.getValue()}get active_level(){return this._level.getValue()}init(){var E=this;return(0,Z.Z)(function*(){yield E._org.initialised.pipe((0,O.P)(C=>C)).toPromise(),E._org.active_building.pipe((0,l.h)(C=>!!C)).subscribe(C=>{const A=E._level.getValue(),T=E._org.levelsForBuilding(C);!T.find(D=>A?.id===D.id)&&T.length&&E.setLevel(T[0].id),E._settings.get("app.explore.disable_actions")&&E.setOptions({disable_actions:E._settings.get("app.explore.disable_actions")}),E._settings.get("app.explore.disable_labels")&&E.setOptions({disable_labels:E._settings.get("app.explore.disable_labels")}),E._settings.get("app.explore.disable_features")&&E.setOptions({disable_features:E._settings.get("app.explore.disable_features")}),E._settings.get("app.explore.disable_styles")&&E.setOptions({disable_styles:E._settings.get("app.explore.disable_styles")})})})()}setOptions(E){const C=this._options.getValue(),A=(0,S.Tw)([...E.disable||C.disable,...this._settings.get("app.explore.disable")||[]]);this._options.next({...this._options.getValue(),...E,disable:A})}reset(){this._styles.next({}),this._features.next({}),this._labels.next({}),this._actions.next({}),this.setPositions(1,{x:.5,y:.5})}setLevel(E){const C=this._org.levelWithID([E]);C&&this._level.next(C)}setStyles(E,C){const A=this._styles.getValue();A[E]=C,this._styles.next(A)}setFeatures(E,C){const A=this._features.getValue();A[E]=C,this._features.next(A)}setActions(E,C){const A=this._actions.getValue();A[E]=C,this._actions.next(A)}setLabels(E,C){const A=this._labels.getValue();A[E]=C,this._labels.next(A)}setPositions(E,C){this._positions.next({zoom:E,center:C})}}return e.\u0275fac=function(E){return new(E||e)(F.LFG(x.w7),F.LFG(P.sK),F.LFG(S.gb))},e.\u0275prov=F.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},8461:(te,K,u)=>{u.d(K,{s:()=>L});var Z=u(6667),b=u(2560),k=u(5306),v=u(4522);let L=(()=>{class O{constructor(S){this._state=S,this.zoomIn=()=>this._state.setPositions(Math.min(10,1.2*this._state.positions.zoom),this._state.positions.center),this.zoomOut=()=>this._state.setPositions(Math.max(1,this._state.positions.zoom*(1/1.2)),this._state.positions.center),this.reset=()=>this._state.setPositions(1,{x:.5,y:.5})}}return O.\u0275fac=function(S){return new(S||O)(b.Y36(Z.c))},O.\u0275cmp=b.Xpm({type:O,selectors:[["explore-zoom-controls"]],decls:9,vars:0,consts:[["z-in","","mat-icon-button","",1,"bg-white",3,"click"],["z-out","","mat-icon-button","",1,"bg-white",3,"click"],["reset","","mat-icon-button","",1,"bg-white",3,"click"]],template:function(S,x){1&S&&(b.TgZ(0,"button",0),b.NdJ("click",function(){return x.zoomIn()}),b.TgZ(1,"app-icon"),b._uU(2,"add"),b.qZA()(),b.TgZ(3,"button",1),b.NdJ("click",function(){return x.zoomOut()}),b.TgZ(4,"app-icon"),b._uU(5,"remove"),b.qZA()(),b.TgZ(6,"button",2),b.NdJ("click",function(){return x.reset()}),b.TgZ(7,"app-icon"),b._uU(8,"autorenew"),b.qZA()())},dependencies:[k.o,v.lW],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;padding:.5rem}button[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:0}button[_ngcontent-%COMP%]:first-child{border-radius:.25rem .25rem 0 0;border-bottom:none}button[_ngcontent-%COMP%]:last-child{border-radius:0 0 .25rem .25rem;border-top:none}\n/*# sourceMappingURL=explore-zoom-control.component.ts-angular-inline--62.css.map*/"]}),O})()}}]);
//# sourceMappingURL=default-libs_explore_src_index_ts.js.map