"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["default-libs_explore_src_index_ts"],{6168:(oe,W,_)=>{function T(k){var v=this;k="object"==typeof k?k:{},v.revision=3,v.imageTypes={bmp:"image/bmp",gif:"image/gif",jpeg:"image/jpeg",jpg:"image/jpg",png:"image/png","svg+xml":"image/svg+xml",tiff:"image/tiff",webp:"image/webp","x-icon":"image/x-icon"},v.toTable=k.toTable,v.domElement=v.toTable?document.createElement("div"):document.createElement("canvas"),v.url=k.url||"",v.size=k.size||280,v.qrc=!1,v.colorLight=k.colorLight||"#fff",v.colorDark=k.colorDark||"#000",v.ecclevel=k.ecclevel||1,v.noBorder=k.noBorder,v.borderSize=k.borderSize||4;var D,O,r,S,b,I,J,y=[],e=[],f=[],L=[],C=[],M=[],Z=function(h,s){var n;h>s&&(n=h,h=s,s=n),n=s,n*=s,n+=s,n>>=1,L[n+=h]=1},j=function(h,s){var n;for(f[h+r*s]=1,n=-2;n<2;n++)f[h+n+r*(s-2)]=1,f[h-2+r*(s+n+1)]=1,f[h+2+r*(s+n)]=1,f[h+n+1+r*(s+2)]=1;for(n=0;n<2;n++)Z(h-1,s+n),Z(h+1,s-n),Z(h-n,s-1),Z(h+n,s+1)},F=function(h){for(;h>=255;)h=((h-=255)>>8)+(255&h);return h},N=function(h,s,n,p){var d,A,m,U=T.gexp,G=T.glog;for(d=0;d<p;d++)y[n+d]=0;for(d=0;d<s;d++){if(255!=(m=G[y[h+d]^y[n]]))for(A=1;A<p;A++)y[n+A-1]=y[n+A]^U[F(m+M[p-A])];else for(A=n;A<n+p;A++)y[A]=y[A+1];y[n+p-1]=255==m?0:U[F(m+M[0])]}},B=function(h,s){var n;return h>s&&(n=h,h=s,s=n),n=s,n+=s*s,n>>=1,L[n+=h]},z=function(h){var s,n,p,d;switch(h){case 0:for(n=0;n<r;n++)for(s=0;s<r;s++)s+n&1||B(s,n)||(f[s+n*r]^=1);break;case 1:for(n=0;n<r;n++)for(s=0;s<r;s++)1&n||B(s,n)||(f[s+n*r]^=1);break;case 2:for(n=0;n<r;n++)for(p=0,s=0;s<r;s++,p++)3==p&&(p=0),p||B(s,n)||(f[s+n*r]^=1);break;case 3:for(d=0,n=0;n<r;n++,d++)for(3==d&&(d=0),p=d,s=0;s<r;s++,p++)3==p&&(p=0),p||B(s,n)||(f[s+n*r]^=1);break;case 4:for(n=0;n<r;n++)for(p=0,d=n>>1&1,s=0;s<r;s++,p++)3==p&&(p=0,d=!d),d||B(s,n)||(f[s+n*r]^=1);break;case 5:for(d=0,n=0;n<r;n++,d++)for(3==d&&(d=0),p=0,s=0;s<r;s++,p++)3==p&&(p=0),(s&n&1)+!(!p|!d)||B(s,n)||(f[s+n*r]^=1);break;case 6:for(d=0,n=0;n<r;n++,d++)for(3==d&&(d=0),p=0,s=0;s<r;s++,p++)3==p&&(p=0),(s&n&1)+(p&&p==d)&1||B(s,n)||(f[s+n*r]^=1);break;case 7:for(d=0,n=0;n<r;n++,d++)for(3==d&&(d=0),p=0,s=0;s<r;s++,p++)3==p&&(p=0),(p&&p==d)+(s+n&1)&1||B(s,n)||(f[s+n*r]^=1)}},Y=function(h){var s,n=0;for(s=0;s<=h;s++)C[s]>=5&&(n+=T.N1+C[s]-5);for(s=3;s<h-1;s+=2)C[s-2]==C[s+2]&&C[s+2]==C[s-1]&&C[s-1]==C[s+1]&&3*C[s-1]==C[s]&&(0==C[s-3]||s+3>h||3*C[s-3]>=4*C[s]||3*C[s+3]>=4*C[s])&&(n+=T.N3);return n},$=function(){var h,s,n,p,d,A=0,m=0;for(s=0;s<r-1;s++)for(h=0;h<r-1;h++)(f[h+r*s]&&f[h+1+r*s]&&f[h+r*(s+1)]&&f[h+1+r*(s+1)]||!(f[h+r*s]||f[h+1+r*s]||f[h+r*(s+1)]||f[h+1+r*(s+1)]))&&(A+=T.N2);for(s=0;s<r;s++){for(C[0]=0,n=p=h=0;h<r;h++)(d=f[h+r*s])==p?C[n]++:C[++n]=1,m+=(p=d)?1:-1;A+=Y(n)}m<0&&(m=-m);var U=m,G=0;for(U+=U<<2,U<<=1;U>r*r;)U-=r*r,G++;for(A+=G*T.N4,h=0;h<r;h++){for(C[0]=0,n=p=s=0;s<r;s++)(d=f[h+r*s])==p?C[n]++:C[++n]=1,p=d;A+=Y(n)}return A};v.genframe=function(h){var s,n,p,d,A,m,U,G,X=T.eccblocks,V=T.gexp,q=T.glog;d=h.length,O=0;do{if(O++,p=4*(D-1)+16*(O-1),S=X[p++],b=X[p++],I=X[p++],J=X[p],d<=(p=I*(S+b)+b-3+(O<=9)))break}while(O<40);for(r=17+4*O,A=I+(I+J)*(S+b)+b,d=0;d<A;d++)e[d]=0;for(y=h.slice(0),d=0;d<r*r;d++)f[d]=0;for(d=0;d<(r*(r+1)+1)/2;d++)L[d]=0;for(d=0;d<3;d++){for(p=0,n=0,1==d&&(p=r-7),2==d&&(n=r-7),f[n+3+r*(p+3)]=1,s=0;s<6;s++)f[n+s+r*p]=1,f[n+r*(p+s+1)]=1,f[n+6+r*(p+s)]=1,f[n+s+1+r*(p+6)]=1;for(s=1;s<5;s++)Z(n+s,p+1),Z(n+1,p+s+1),Z(n+5,p+s),Z(n+s+1,p+5);for(s=2;s<4;s++)f[n+s+r*(p+2)]=1,f[n+2+r*(p+s+1)]=1,f[n+4+r*(p+s)]=1,f[n+s+1+r*(p+4)]=1}if(O>1)for(d=T.adelta[O],n=r-7;;){for(s=r-7;s>d-3&&(j(s,n),!(s<d));)s-=d;if(n<=d+9)break;j(6,n-=d),j(n,6)}for(f[8+r*(r-8)]=1,n=0;n<7;n++)Z(7,n),Z(r-8,n),Z(7,n+r-7);for(s=0;s<8;s++)Z(s,7),Z(s+r-8,7),Z(s,r-8);for(s=0;s<9;s++)Z(s,8);for(s=0;s<8;s++)Z(s+r-8,8),Z(8,s);for(n=0;n<7;n++)Z(8,n+r-7);for(s=0;s<r-14;s++)1&s?(Z(8+s,6),Z(6,8+s)):(f[8+s+6*r]=1,f[6+r*(8+s)]=1);if(O>6)for(d=T.vpat[O-7],p=17,s=0;s<6;s++)for(n=0;n<3;n++,p--)1&(p>11?O>>p-12:d>>p)?(f[5-s+r*(2-n+r-11)]=1,f[2-n+r-11+r*(5-s)]=1):(Z(5-s,2-n+r-11),Z(2-n+r-11,5-s));for(n=0;n<r;n++)for(s=0;s<=n;s++)f[s+r*n]&&Z(s,n);for(A=y.length,m=0;m<A;m++)e[m]=y.charCodeAt(m);if(y=e.slice(0),A>=(s=I*(S+b)+b)-2&&(A=s-2,O>9&&A--),m=A,O>9){for(y[m+2]=0,y[m+3]=0;m--;)y[m+3]|=255&(d=y[m])<<4,y[m+2]=d>>4;y[2]|=255&A<<4,y[1]=A>>4,y[0]=64|A>>12}else{for(y[m+1]=0,y[m+2]=0;m--;)y[m+2]|=255&(d=y[m])<<4,y[m+1]=d>>4;y[1]|=255&A<<4,y[0]=64|A>>4}for(m=A+3-(O<10);m<s;)y[m++]=236,y[m++]=17;for(M[0]=1,m=0;m<J;m++){for(M[m+1]=1,U=m;U>0;U--)M[U]=M[U]?M[U-1]^V[F(q[M[U]]+m)]:M[U-1];M[0]=V[F(q[M[0]]+m)]}for(m=0;m<=J;m++)M[m]=q[M[m]];for(p=s,n=0,m=0;m<S;m++)N(n,I,p,J),n+=I,p+=J;for(m=0;m<b;m++)N(n,I+1,p,J),n+=I+1,p+=J;for(n=0,m=0;m<I;m++){for(U=0;U<S;U++)e[n++]=y[m+U*I];for(U=0;U<b;U++)e[n++]=y[S*I+m+U*(I+1)]}for(U=0;U<b;U++)e[n++]=y[S*I+m+U*(I+1)];for(m=0;m<J;m++)for(U=0;U<S+b;U++)e[n++]=y[s+m+U*J];for(y=e,s=n=r-1,p=A=1,G=(I+J)*(S+b)+b,m=0;m<G;m++)for(d=y[m],U=0;U<8;U++,d<<=1){128&d&&(f[s+r*n]=1);do{A?s--:(s++,p?0!=n?n--:(p=!p,6==(s-=2)&&(s--,n=9)):n!=r-1?n++:(p=!p,6==(s-=2)&&(s--,n-=8))),A=!A}while(B(s,n))}for(y=f.slice(0),d=0,n=3e4,p=0;p<8&&(z(p),(s=$())<n&&(n=s,d=p),7!=d);p++)f=y.slice(0);for(d!=p&&z(d),n=T.fmtword[d+(D-1<<3)],p=0;p<8;p++,n>>=1)1&n&&(f[r-1-p+8*r]=1,p<6?f[8+r*p]=1:f[8+r*(p+1)]=1);for(p=0;p<7;p++,n>>=1)1&n&&(f[8+r*(r-7+p)]=1,p?f[6-p+8*r]=1:f[7+8*r]=1);return f},v.init=function(){D=v.ecclevel;var h=v.genframe(v.url);v.toTable?v.tableWrite(h,r):v.canvasWrite(h,r)},v.init()}function x(k,v="#fff0",D="#000"){var O;const r=new T({url:k||"Hello",size:360,colorLight:v,colorDark:D,toTable:!1,ecclevel:1,noBorder:!0,borderSize:0});return null===(O=null==r?void 0:r.toImage("svg+xml"))||void 0===O?void 0:O.src}_.d(W,{w:()=>x}),T.prototype={canvasWrite:function(k,v){if(!this.qrc&&(this.qrc=this.getContext(this.domElement),!this.qrc))return this.toTable=!0,this.domElement=document.createElement("div"),void this.tableWrite(k,v);var D=this.size,O=this.qrc;O.lineWidth=1;var r=D;r/=v+10,r=Math.round(r-.5);var S=4;this.noBorder?(O.canvas.width=O.canvas.height=r*v,S=0):O.canvas.width=O.canvas.height=D,O.clearRect(0,0,D,D),O.fillStyle=this.colorLight,O.fillRect(0,0,r*(v+8),r*(v+8)),O.fillStyle=this.colorDark;for(var b=0;b<v;b++)for(var I=0;I<v;I++)k[I*v+b]&&O.fillRect(r*(S+b),r*(S+I),r,r)},tableWrite:function(k,v){var D=this,O=Math.round(this.size/v-3.5)+"px",r=v+(D.noBorder?0:2*D.borderSize),S=D.borderSize,b="width:"+O+";height:"+O+";",I=D.colorLight,J=D.colorDark,y=document.createElement("table");y.style.cssText="border:0;border-collapse:collapse;";for(var e,f=document.createElement("tr"),L=document.createElement("td"),C=function(){return L.cloneNode()},M=function(){var Y=C();return Y.style.cssText=b+"background:"+I,Y},Z=function(Y){for(var $=Y.firstChild,h=0;h<S;h++)Y.insertBefore(M(),$),Y.appendChild(M())},j=0;j<v;j++){var F=f.cloneNode();y.appendChild(F);for(var N=0;N<v;N++)if(1===k[j*v+N]){var B=(e=void 0,(e=C()).style.cssText=b+"background:"+J,e);F.appendChild(B)}else{var z=M();F.appendChild(z)}D.noBorder||Z(F)}D.noBorder||function(Y){for(var $=Y.firstChild,h=0;h<D.borderSize;h++){for(var s=f.cloneNode(),n=0;n<r;n++){var p=M();s.appendChild(p)}Y.appendChild(s),Y.insertBefore(s.cloneNode(!0),$)}}(y),D.domElement.innerHTML="",D.domElement.appendChild(y)},getContext:function(k){return k.getContext&&k.getContext("2d")?k.getContext("2d"):(console.log("Browser does not have 2d Canvas support"),!1)},toImage:function(k){if(this.qrc){var v=this.imageTypes[k];if(!v)throw new Error(k+" is not a valid image type ");var D=new Image;return D.src=this.domElement.toDataURL(v),D}}},T.adelta=[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28],T.vpat=[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177],T.fmtword=[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],T.eccblocks=[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],T.glog=[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175],T.gexp=[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],T.N1=3,T.N2=3,T.N3=40,T.N4=10},6125:(oe,W,_)=>{_.d(W,{Xp:()=>re,ck:()=>y.c,P2:()=>ut});var T=_(6362),x=_(587),k=_(7741),v=_(6623),D=_(4244),O=_(4476),r=_(8318),S=_(4929),b=_(3294),I=_(3619),J=_(5670),y=_(6667),e=_(3184);_(9481),_(4770),_(1434),_(1130);var z=_(3499),s=(_(3910),_(3667),_(6862),_(6942)),p=(_(8426),_(3970)),q=_(5758);_(4603),_(6217);var se=_(7317),H=_(5306),pe=(_(4683),_(1022));_(4742),_(6168);const ie={free:"#43a047",pending:"#ffb300",reserved:"#e65100",busy:"#e53935","not-bookable":"#757575",unknown:"#757575"};_(9627);var K=_(4505),ne=_(7716),ae=_(9095),le=_(9128),ge=_(7418),ve=_(1810),ze=_(9377),be=_(3200),Be=_(312),xe=_(4099),Fe=_(9380),je=_(8987);const Je=["explore-device-info",""];function Ne(i,u){if(1&i&&(e.TgZ(0,"p",15)(1,"label"),e._uU(2,"Manufacturer:"),e.qZA(),e._uU(3),e.qZA()),2&i){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.manufacturer," ")}}function Ye(i,u){if(1&i&&(e.TgZ(0,"p",16)(1,"label"),e._uU(2,"OS:"),e.qZA(),e._uU(3),e.qZA()),2&i){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.os,"")}}function Qe(i,u){if(1&i&&(e.TgZ(0,"p",17)(1,"label"),e._uU(2,"SSID:"),e.qZA(),e._uU(3),e.qZA()),2&i){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.ssid,"")}}function qe(i,u){if(1&i&&(e.TgZ(0,"p",18)(1,"label"),e._uU(2,"Username:"),e.qZA(),e._uU(3),e.qZA()),2&i){const t=e.oxw(2);e.xp6(3),e.hij(" ",(null==t.user?null:t.user.name)||(null==t.user?null:t.user.username)||t.username," ")}}function $e(i,u){if(1&i&&(e.TgZ(0,"p",19)(1,"label"),e._uU(2,"Type:"),e.qZA(),e._uU(3),e.qZA()),2&i){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.user.type," ")}}function Ge(i,u){if(1&i){const t=e.EpF();e.TgZ(0,"div",6),e.NdJ("mouseleave",function(){return e.CHM(t),e.oxw().close()}),e._UZ(1,"div",7),e.TgZ(2,"div",8)(3,"p",9)(4,"label"),e._uU(5,"MAC:"),e.qZA(),e._uU(6),e.qZA(),e.TgZ(7,"p")(8,"label"),e._uU(9,"Accuracy:"),e.qZA(),e._uU(10),e.qZA(),e.TgZ(11,"p")(12,"label"),e._uU(13,"Last Seen:"),e.qZA(),e._uU(14),e.qZA(),e.YNc(15,Ne,4,1,"p",10),e.YNc(16,Ye,4,1,"p",11),e.YNc(17,Qe,4,1,"p",12),e.YNc(18,qe,4,1,"p",13),e.YNc(19,$e,4,1,"p",14),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(6),e.hij(" ",t.mac,""),e.xp6(4),e.hij(" ",t.variance,"m"),e.xp6(4),e.hij(" ",t.last_seen,""),e.xp6(1),e.Q6J("ngIf",t.manufacturer),e.xp6(1),e.Q6J("ngIf",t.os),e.xp6(1),e.Q6J("ngIf",t.ssid),e.xp6(1),e.Q6J("ngIf",t.username),e.xp6(1),e.Q6J("ngIf",t.user)}}let ye=(()=>{class i extends b.KG{constructor(t,o){var a;super(),this._details=t,this._element=o,this.username="",this.user=this._details.user,this.mac=this._details.mac,this.manufacturer=this._details.manufacturer,this.os=this._details.os,this.ssid=this._details.ssid,this.variance=null===(a=this._details.variance)||void 0===a?void 0:a.toFixed(2),this.bg_color=this._details.bg_color||this.distance_color,this.zoom=1}get last_seen(){return(0,Fe.Z)(1e3*(this._details.last_seen||0),{addSuffix:!0})}get diameter(){return 100*this._details.variance*this.zoom}get distance(){return Math.abs((0,je.Z)(1e3*(this._details.last_seen||0),new Date))}get distance_color(){return this.distance<10?"#43a047":this.distance<20?"#ffb300":"#e53935"}ngOnInit(t=0){t>10||setTimeout(()=>{var o;const a=null===(o=this._element.nativeElement.parentElement)||void 0===o?void 0:o.parentElement;if(!a)return this.ngOnInit(++t);const l_y=parseInt(a.style.top,10)/100,l_x=parseInt(a.style.left,10)/100;this.y_pos=l_y>=.5?"bottom":"top",this.x_pos=l_x>=.5?"end":"start",this.subscription("zoom",this._details.zoom$.subscribe(c=>this.zoom=c))},200)}loadUser(){return(0,S.mG)(this,void 0,void 0,function*(){if(this.username)return;const t=(0,z.rTZ)(this._details.system,"LocationServices");if(!t)return;this.username="Loading...";const o=yield t.execute("check_ownership_of",[this.mac]).catch(a=>null);this.username=o&&o.assigned_to?o.assigned_to:""})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(k.ui),e.Y36(e.SBq))},i.\u0275cmp=e.Xpm({type:i,selectors:[["","explore-device-info",""]],features:[e.qOj],attrs:Je,decls:7,vars:9,consts:[["name","radius",1,"radius","absolute","center","bg-blue-600","bg-opacity-25","border-8","border-dashed","border-blue-600","rounded-full"],["shadow","",1,"absolute","center","bg-black/40","h-8","w-8","rounded-full"],["name","dot",1,"h-3","w-3","absolute","center","rounded-full","shadow","border-2","border-white"],["dot",""],["customTooltip","",1,"absolute","inset-0","pointer-events-auto",3,"content","backdrop","xPosition","yPosition","hover","mouseenter"],["device_tooltip",""],["name","device-info",1,"w-64","rounded","bg-white","p-4","top-0","left-0","shadow","pointer-events-none","mx-2",3,"mouseleave"],[1,"arrow"],[1,"details"],[1,"break-words"],["type","",4,"ngIf"],["os","",4,"ngIf"],["ssid","",4,"ngIf"],["username","",4,"ngIf"],["user","",4,"ngIf"],["type",""],["os",""],["ssid",""],["username",""],["user",""]],template:function(t,o){if(1&t&&(e._UZ(0,"div",0)(1,"div",1)(2,"div",2,3),e.TgZ(4,"div",4),e.NdJ("mouseenter",function(){return o.loadUser()}),e.qZA(),e.YNc(5,Ge,20,8,"ng-template",null,5,e.W1O)),2&t){const a=e.MAs(6);e.Akn("height: "+o.diameter+"%; width: "+o.diameter+"%;"),e.xp6(2),e.Udp("background-color",o.bg_color),e.xp6(2),e.Q6J("content",a)("backdrop",!1)("xPosition",o.x_pos)("yPosition",o.y_pos)("hover",!0)}},directives:[p.X,T.O5],styles:["[_nghost-%COMP%]{pointer-events:auto}[_nghost-%COMP%] > [name=dot][_ngcontent-%COMP%]{background-color:#616161}[_nghost-%COMP%]:hover > [name=radius][_ngcontent-%COMP%]{opacity:1}[name=radius][_ngcontent-%COMP%]{opacity:0;transition:opacity .2s;pointer-events:none}\n/*# sourceMappingURL=explore-device-info.component.ts-angular-inline--54.css.map*/"]}),i})();function Re(i,u){if(1&i&&(e.TgZ(0,"p",8),e._uU(1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Oqu(t.user)}}function We(i,u){if(1&i&&(e.TgZ(0,"p",9),e._uU(1),e.ALo(2,"date"),e.ALo(3,"date"),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.AsE(" ",e.xi3(2,2,t.start,"shortTime")," \u2013 ",e.xi3(3,5,t.end,"shortTime")," ")}}function Ke(i,u){if(1&i&&(e.TgZ(0,"div",2),e._UZ(1,"div",3),e.TgZ(2,"div",4)(3,"h4",5),e._uU(4),e.qZA(),e.YNc(5,Re,2,1,"p",6),e.YNc(6,We,4,8,"p",7),e.qZA()()),2&i){const t=e.oxw();e.Tol("absolute rounded bg-white p-4 top-0 left-0 shadow pointer-events-none "+t.x_pos+" "+t.y_pos),e.Q6J("id",t.map_id),e.xp6(4),e.Oqu(t.map_id),e.xp6(1),e.Q6J("ngIf",t.user),e.xp6(1),e.Q6J("ngIf",t.start)}}let Ce=(()=>{class i{constructor(t,o){this._details=t,this._element=o,this.id=this._details.id,this.map_id=this._details.map_id,this.user=this._details.user,this.start=this._details.start,this.end=this._details.end}ngOnInit(t=0){t>10||setTimeout(()=>{var o;const a=null===(o=this._element.nativeElement.parentElement)||void 0===o?void 0:o.parentElement;if(!a)return this.ngOnInit(++t);const l_y=parseInt(a.style.top,10)/100,l_x=parseInt(a.style.left,10)/100;this.y_pos=l_y>=.5?"bottom":"top",this.x_pos=l_x>=.5?"right":"left"},200)}get available_until(){return""}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(k.ui),e.Y36(e.SBq))},i.\u0275cmp=e.Xpm({type:i,selectors:[["explore-desk-info"]],decls:3,vars:6,consts:[["customTooltip","",1,"h-full","w-full","pointer-events-auto","relative",3,"content","backdrop","xPosition","yPosition","hover"],["desk_tooltip",""],["name","space-info",3,"id"],[1,"arrow"],[1,"details"],["map-id","",1,"m-0","font-medium"],["user","","class","mt-2 text-sm",4,"ngIf"],["start","","class","mt-1 text-sm",4,"ngIf"],["user","",1,"mt-2","text-sm"],["start","",1,"mt-1","text-sm"]],template:function(t,o){if(1&t&&(e._UZ(0,"div",0),e.YNc(1,Ke,7,6,"ng-template",null,1,e.W1O)),2&t){const a=e.MAs(2);e.Q6J("content",a)("backdrop",!1)("xPosition","center")("yPosition","center")("hover",!0),e.uIk("id",o.id)}},directives:[p.X,T.O5],pipes:[T.uU],styles:["[name=space-info][_ngcontent-%COMP%]{width:16rem}[name=status][_ngcontent-%COMP%]{background-color:#43a047;font-weight:500}[name=status].busy[_ngcontent-%COMP%]{background-color:#e53935}[name=status].pending[_ngcontent-%COMP%]{background-color:#ffb300}[name=status].not-bookable[_ngcontent-%COMP%]{background-color:#757575}\n/*# sourceMappingURL=explore-desk-info.component.ts-angular-inline--55.css.map*/"]}),i})();var Xe=_(2306),Ve=_(7303);const He=function(){return{standalone:!0}};function et(i,u){if(1&i){const t=e.EpF();e.TgZ(0,"main",5)(1,"div",6)(2,"div",7)(3,"label"),e._uU(4,"Date"),e.qZA(),e.TgZ(5,"a-date-field",8),e._uU(6," Date and time must be in the future "),e.qZA()()(),e.TgZ(7,"div",6)(8,"div",9)(9,"label"),e._uU(10,"Start Time"),e.qZA(),e.TgZ(11,"a-time-field",10),e.NdJ("ngModelChange",function(a){return e.CHM(t),e.oxw().form.patchValue({date:a})}),e.qZA()(),e.TgZ(12,"div",9)(13,"label"),e._uU(14,"End Time"),e.qZA(),e._UZ(15,"a-duration-field",11),e.qZA()()()}if(2&i){const t=e.oxw();let o;e.Q6J("formGroup",t.form),e.xp6(5),e.Q6J("to",t.book_until),e.xp6(6),e.Q6J("ngModel",t.form.value.date)("ngModelOptions",e.DdM(8,He)),e.xp6(4),e.Q6J("time",null==(o=t.form.get("date"))?null:o.value)("max",720)("min",60)("step",60)}}let Ze=(()=>{class i{constructor(t){this._data=t,this.book_until=this._data.until,this.form=new x.cw({date:new x.NI(t.date),duration:new x.NI(t.duration)})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(q.WI))},i.\u0275cmp=e.Xpm({type:i,selectors:[["set-datetime-modal"]],decls:10,vars:2,consts:[["classs","flex items-center justify-between"],["mat-icon-button","","mat-dialog-close",""],["class","w-[24rem] pt-4",3,"formGroup",4,"ngIf"],[1,"w-full","p-2","border-t","border-gray-200","flex","items-center","justify-center"],["mat-button","",1,"w-32",3,"mat-dialog-close"],[1,"w-[24rem]","pt-4",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","space-x-0","sm:space-x-2","w-[640px]","max-w-[calc(100%-2rem)]","mx-auto"],[1,"flex","flex-col","flex-1","w-full","sm:w-1/4"],["formControlName","date",3,"to"],[1,"flex","flex-col","flex-1","w-full","sm:w-1/3"],[3,"ngModel","ngModelOptions","ngModelChange"],["formControlName","duration",3,"time","max","min","step"]],template:function(t,o){1&t&&(e.TgZ(0,"header",0)(1,"h2"),e._uU(2,"Set date and time"),e.qZA(),e.TgZ(3,"button",1)(4,"app-icon"),e._uU(5,"close"),e.qZA()()(),e.YNc(6,et,16,9,"main",2),e.TgZ(7,"footer",3)(8,"button",4),e._uU(9,"Continue"),e.qZA()()),2&t&&(e.xp6(6),e.Q6J("ngIf",o.form),e.xp6(2),e.Q6J("mat-dialog-close",o.form.value))},directives:[se.lW,q.ZT,H.o,T.O5,x.JL,x.sg,Xe.Q,x.JJ,x.u,Ve.N,x.On,pe.B],styles:[""]}),i})(),re=(()=>{class i extends b.KG{constructor(t,o,a,l,c){super(),this._state=t,this._org=o,this._settings=a,this._bookings=l,this._dialog=c,this._in_use=new K.X([]),this._options=new K.X({}),this._presence=new K.X([]),this._statuses={},this._users={},this._poll=new K.X(0),this._desk_bookings=(0,ne.aj)([this._state.level,this._poll]).pipe((0,ae.w)(([g])=>(0,xe.F2)({period_start:(0,ve.Z)((0,ze.Z)(new Date)),period_end:(0,ve.Z)((0,be.Z)(new Date)),type:"desk",zones:g.id})),(0,le.d)(1)),this.desk_list=this._state.level.pipe((0,ae.w)(g=>(0,z.rlq)(g.id,"desks").pipe((0,s.U)(E=>(E.details instanceof Array?E.details:[]).map(P=>new I.nk(Object.assign(Object.assign({},P),{zone:g})))))),(0,ge.K)(g=>[]),(0,le.d)(1)),this._bind=this._state.level.pipe((0,s.U)(g=>{if(this._statuses={},this.unsubWith("lvl"),!g)return;const E=this._org.binding("area_management");if(!E)return;let P=(0,z.rTZ)(E,"AreaManagement").binding(g.id);this.subscription("lvl-in_use",P.listen().subscribe(w=>this.processBindingChange(w||{},E))),this.subscription("lvl-in_use_bind",P.bind())})),this._state_change=(0,ne.aj)([this.desk_list,this._in_use,this._presence,this._options]).pipe((0,s.U)(([g,E,P])=>{this._statuses={};for(const{id:w,bookable:Q}of g){const R=E.some(te=>w===te),ee=P.some(te=>w===te);this._statuses[w]=Q?R||ee?ee?"busy":"pending":"free":"not-bookable"}this.processDesks(g)})),this.init()}init(){return(0,S.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,J.P)(t=>t)).toPromise(),this.setOptions({enable_booking:!1!==this._settings.get("app.desks.enabled")}),this.subscription("bind",this._bind.subscribe()),this.subscription("changes",this._state_change.subscribe()),this.subscription("desks",this.desk_list.subscribe(t=>this.processDesks(t)))})}startPolling(t=1e4){return this.subscription("desks_in_use_bookings",this._desk_bookings.subscribe(o=>this._in_use.next(o.map(a=>a.asset_id)))),this.interval("poll",()=>this._poll.next((new Date).valueOf()),t),()=>this.stopPolling()}stopPolling(){this.clearInterval("poll")}setOptions(t){this._options.next(Object.assign(Object.assign({},this._options.getValue()),t))}processBindingChange({value:t},o){const a=(t||[]).filter(c=>!["desk","booking"].includes(c.location)),l=(t||[]).filter(c=>"desk"===c.location||"booking"===c.location&&"desk"===c.type);this._presence.next(l.filter(c=>c.at_location).map(c=>c.map_id||c.asset_id)),this.processDevices(a,o),this.timeout("update",()=>this.updateStatus(),100)}updateStatus(){const t={},o=this._settings.get("app.explore.colors")||{};for(const a in this._statuses)!this._statuses[a]||(t[`#${a}`]={fill:o[`desk-${this._statuses[a]}`]||o[`${this._statuses[a]}`]||ie[`${this._statuses[a]}`]});this._state.setStyles("desks",t)}processDevices(t,o){var a,l;const c=[];for(const g of t){const E=g.x/g.map_width,P=g.y/g.map_height;c.push({location:{x:(null===(a=g.coordinates_from)||void 0===a?void 0:a.includes("right"))?1-E:E,y:(null===(l=g.coordinates_from)||void 0===l?void 0:l.includes("bottom"))?1-P:P},content:ye,z_index:20,data:Object.assign(Object.assign({},g),{system:o})})}this._state.setFeatures("devices",c)}processDesks(t){const o=[],a=[],l=this._options.getValue();for(const c of t){if(o.push({location:c.id,content:Ce,full_size:!0,no_scale:!0,data:{id:c.map_id||c.id,map_id:c.name,user:this._users[c.map_id]||c.staff_name,status:this._statuses[c.map_id]},z_index:20}),!c.bookable)continue;const g=()=>(0,S.mG)(this,void 0,void 0,function*(){var E,P,w;this._bookings.newForm();const{date:Q,duration:R}=yield this._setBookingTime(this._bookings.form.value.date,this._bookings.form.value.duration);this._bookings.form.patchValue({asset_id:c.id,asset_name:c.name,date:Q,duration:R,map_id:(null==c?void 0:c.map_id)||(null==c?void 0:c.id),description:c.name,user:l.host||(0,b.ar)(),booking_type:"desk",zones:c.zone?[null===(E=c.zone)||void 0===E?void 0:E.parent_id,null===(P=c.zone)||void 0===P?void 0:P.id]:[]}),yield this._bookings.confirmPost(),this._users[c.map_id]=null===(w=l.host||(0,b.ar)())||void 0===w?void 0:w.name,(0,b.t5)(`Successfull booked desk ${c.name||c.id}`)});a.push({id:c.id,action:"click",callback:g}),a.push({id:c.id,action:"touchend",callback:g})}this._state.setActions("desks",this._options.getValue().enable_booking?a:[]),this._state.setFeatures("desks",o),this.timeout("update",()=>this.updateStatus(),100)}_setBookingTime(t,o){return(0,S.mG)(this,void 0,void 0,function*(){if(this._settings.get("app.desks.allow_time_changes")){const a=(0,be.Z)((0,Be.Z)(Date.now(),this._settings.get("app.desks.available_period")||90)),c=yield this._dialog.open(Ze,{data:{date:t,duration:o,until:a}}).afterClosed().toPromise();if(!c)throw"User cancelled";t=c.date,o=c.duration}return{date:t,duration:o}})}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(y.c),e.LFG(I.w7),e.LFG(b.gb),e.LFG(xe.fy),e.LFG(q.uw))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i})();_(9136),_(8461),_(4139),_(823),_(8759),_(4618),_(3188);let ut=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[T.ez,k.Kk,x.u5,x.UX,v.rP,D.U8,O.eL,r.W9]]}),i})()},6667:(oe,W,_)=>{_.d(W,{c:()=>y});var T=_(4929),x=_(4505),k=_(7716),v=_(6942),D=_(823),O=_(5670),r=_(9151),S=_(3294),b=_(3619),I=_(3667),J=_(3184);let y=(()=>{class e extends S.KG{constructor(L,C,M){super(),this._org=L,this._spaces=C,this._settings=M,this._level=new x.X(null),this._positions=new x.X({zoom:1,center:{x:.5,y:.5}}),this._styles=new x.X({}),this._features=new x.X({}),this._actions=new x.X({}),this._labels=new x.X({}),this._options=new x.X({disable:["zones","devices"]}),this._message=new x.X(""),this.level=this._level.asObservable(),this.message=this._message.asObservable(),this.spaces=(0,k.aj)([this._level,this._spaces.list]).pipe((0,v.U)(([Z,j])=>j.filter(F=>F.zones.includes(null==Z?void 0:Z.id)))),this.map_url=this._level.pipe((0,v.U)(Z=>(Z?Z.map_id:"")||"")),this.map_positions=this._positions.asObservable(),this.map_features=(0,k.aj)([this._features,this._options]).pipe((0,D.b)(200),(0,v.U)(([Z,j])=>{var F,N;let B=[];for(const z in Z)(null===(F=j.disable)||void 0===F?void 0:F.includes(z))||(null===(N=j.disable_features)||void 0===N?void 0:N.includes(z))||(B=B.concat(Z[z]));return B})),this.map_actions=(0,k.aj)([this._actions,this._options]).pipe((0,D.b)(200),(0,v.U)(([Z,j])=>{var F,N;let B=[];for(const z in Z)(null===(F=j.disable)||void 0===F?void 0:F.includes(z))||(null===(N=j.disable_actions)||void 0===N?void 0:N.includes(z))||(B=B.concat(Z[z]));return B})),this.map_labels=(0,k.aj)([this._labels,this._options]).pipe((0,D.b)(200),(0,v.U)(([Z,j])=>{var F,N;let B=[];for(const z in Z)(null===(F=j.disable)||void 0===F?void 0:F.includes(z))||(null===(N=j.disable_labels)||void 0===N?void 0:N.includes(z))||(B=B.concat(Z[z]));return B})),this.map_styles=(0,k.aj)([this._styles,this._options]).pipe((0,D.b)(200),(0,v.U)(([Z,j])=>{var F,N,B;let z={text:{display:"none"}};for(const Y in Z)(null===(F=j.disable)||void 0===F?void 0:F.includes(Y))||(null===(N=j.disable_styles)||void 0===N?void 0:N.includes(Y))||(z=Object.assign(Object.assign({},z),Z[Y]));return(null===(B=j.disable)||void 0===B?void 0:B.includes("zones"))&&(z["#zones"]={display:"none"},z["#Zones"]={display:"none"}),z})),this.options=this._options.asObservable(),this.init()}get positions(){return this._positions.getValue()}get active_level(){return this._level.getValue()}init(){return(0,T.mG)(this,void 0,void 0,function*(){yield this._org.initialised.pipe((0,O.P)(L=>L)).toPromise(),this._org.active_building.pipe((0,r.h)(L=>!!L)).subscribe(L=>{const C=this._level.getValue(),M=this._org.levelsForBuilding(L);!M.find(j=>(null==C?void 0:C.id)===j.id)&&M.length&&this.setLevel(M[0].id),this._settings.get("app.explore.disable_actions")&&this.setOptions({disable_actions:this._settings.get("app.explore.disable_actions")}),this._settings.get("app.explore.disable_labels")&&this.setOptions({disable_labels:this._settings.get("app.explore.disable_labels")}),this._settings.get("app.explore.disable_features")&&this.setOptions({disable_features:this._settings.get("app.explore.disable_features")}),this._settings.get("app.explore.disable_styles")&&this.setOptions({disable_styles:this._settings.get("app.explore.disable_styles")})})})}setOptions(L){const C=this._options.getValue(),M=(0,S.Tw)([...L.disable||C.disable,...this._settings.get("app.explore.disable")||[]]);this._options.next(Object.assign(Object.assign(Object.assign({},this._options.getValue()),L),{disable:M}))}reset(){this._styles.next({}),this._features.next({}),this._labels.next({}),this._actions.next({}),this.setPositions(1,{x:.5,y:.5})}setLevel(L){const C=this._org.levelWithID([L]);C&&this._level.next(C)}setStyles(L,C){const M=this._styles.getValue();M[L]=C,this._styles.next(M)}setFeatures(L,C){const M=this._features.getValue();M[L]=C,this._features.next(M)}setActions(L,C){const M=this._actions.getValue();M[L]=C,this._actions.next(M)}setLabels(L,C){const M=this._labels.getValue();M[L]=C,this._labels.next(M)}setPositions(L,C){this._positions.next({zoom:L,center:C})}}return e.\u0275fac=function(L){return new(L||e)(J.LFG(b.w7),J.LFG(I.sK),J.LFG(S.gb))},e.\u0275prov=J.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},8461:(oe,W,_)=>{_.d(W,{s:()=>D});var T=_(6667),x=_(3184),k=_(7317),v=_(5306);let D=(()=>{class O{constructor(S){this._state=S,this.zoomIn=()=>this._state.setPositions(Math.min(10,1.2*this._state.positions.zoom),this._state.positions.center),this.zoomOut=()=>this._state.setPositions(Math.max(1,this._state.positions.zoom*(1/1.2)),this._state.positions.center),this.reset=()=>this._state.setPositions(1,{x:.5,y:.5})}}return O.\u0275fac=function(S){return new(S||O)(x.Y36(T.c))},O.\u0275cmp=x.Xpm({type:O,selectors:[["explore-zoom-controls"]],decls:9,vars:0,consts:[["z-in","","mat-icon-button","",1,"bg-white",3,"click"],["z-out","","mat-icon-button","",1,"bg-white",3,"click"],["reset","","mat-icon-button","",1,"bg-white",3,"click"]],template:function(S,b){1&S&&(x.TgZ(0,"button",0),x.NdJ("click",function(){return b.zoomIn()}),x.TgZ(1,"app-icon"),x._uU(2,"add"),x.qZA()(),x.TgZ(3,"button",1),x.NdJ("click",function(){return b.zoomOut()}),x.TgZ(4,"app-icon"),x._uU(5,"remove"),x.qZA()(),x.TgZ(6,"button",2),x.NdJ("click",function(){return b.reset()}),x.TgZ(7,"app-icon"),x._uU(8,"autorenew"),x.qZA()())},directives:[k.lW,v.o],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;padding:.5rem}button[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:0}button[_ngcontent-%COMP%]:first-child{border-radius:.25rem .25rem 0 0;border-bottom:none}button[_ngcontent-%COMP%]:last-child{border-radius:0 0 .25rem .25rem;border-top:none}\n/*# sourceMappingURL=explore-zoom-control.component.ts-angular-inline--58.css.map*/"]}),O})()}}]);
//# sourceMappingURL=default-libs_explore_src_index_ts.js.map