"use strict";(self.webpackChunkconcierge=self.webpackChunkconcierge||[]).push([["default-libs_explore_src_index_ts"],{6168:(oe,X,_)=>{function b(M){var y=this;M="object"==typeof M?M:{},y.revision=3,y.imageTypes={bmp:"image/bmp",gif:"image/gif",jpeg:"image/jpeg",jpg:"image/jpg",png:"image/png","svg+xml":"image/svg+xml",tiff:"image/tiff",webp:"image/webp","x-icon":"image/x-icon"},y.toTable=M.toTable,y.domElement=y.toTable?document.createElement("div"):document.createElement("canvas"),y.url=M.url||"",y.size=M.size||280,y.qrc=!1,y.colorLight=M.colorLight||"#fff",y.colorDark=M.colorDark||"#000",y.ecclevel=M.ecclevel||1,y.noBorder=M.noBorder,y.borderSize=M.borderSize||4;var P,T,r,k,v,A,Y,x=[],e=[],g=[],$=[],D=[],B=[],z=function(d,s){var i;d>s&&(i=d,d=s,s=i),i=s,i*=s,i+=s,i>>=1,$[i+=d]=1},N=function(d,s){var i;for(g[d+r*s]=1,i=-2;i<2;i++)g[d+i+r*(s-2)]=1,g[d-2+r*(s+i+1)]=1,g[d+2+r*(s+i)]=1,g[d+i+1+r*(s+2)]=1;for(i=0;i<2;i++)z(d-1,s+i),z(d+1,s-i),z(d-i,s-1),z(d+i,s+1)},j=function(d){for(;d>=255;)d=((d-=255)>>8)+(255&d);return d},C=function(d,s,i,c){var u,w,f,O=b.gexp,R=b.glog;for(u=0;u<c;u++)x[i+u]=0;for(u=0;u<s;u++){if(255!=(f=R[x[d+u]^x[i]]))for(w=1;w<c;w++)x[i+w-1]=x[i+w]^O[j(f+B[c-w])];else for(w=i;w<i+c;w++)x[w]=x[w+1];x[i+c-1]=255==f?0:O[j(f+B[0])]}},U=function(d,s){var i;return d>s&&(i=d,d=s,s=i),i=s,i+=s*s,i>>=1,$[i+=d]},L=function(d){var s,i,c,u;switch(d){case 0:for(i=0;i<r;i++)for(s=0;s<r;s++)s+i&1||U(s,i)||(g[s+i*r]^=1);break;case 1:for(i=0;i<r;i++)for(s=0;s<r;s++)1&i||U(s,i)||(g[s+i*r]^=1);break;case 2:for(i=0;i<r;i++)for(c=0,s=0;s<r;s++,c++)3==c&&(c=0),c||U(s,i)||(g[s+i*r]^=1);break;case 3:for(u=0,i=0;i<r;i++,u++)for(3==u&&(u=0),c=u,s=0;s<r;s++,c++)3==c&&(c=0),c||U(s,i)||(g[s+i*r]^=1);break;case 4:for(i=0;i<r;i++)for(c=0,u=i>>1&1,s=0;s<r;s++,c++)3==c&&(c=0,u=!u),u||U(s,i)||(g[s+i*r]^=1);break;case 5:for(u=0,i=0;i<r;i++,u++)for(3==u&&(u=0),c=0,s=0;s<r;s++,c++)3==c&&(c=0),(s&i&1)+!(!c|!u)||U(s,i)||(g[s+i*r]^=1);break;case 6:for(u=0,i=0;i<r;i++,u++)for(3==u&&(u=0),c=0,s=0;s<r;s++,c++)3==c&&(c=0),(s&i&1)+(c&&c==u)&1||U(s,i)||(g[s+i*r]^=1);break;case 7:for(u=0,i=0;i<r;i++,u++)for(3==u&&(u=0),c=0,s=0;s<r;s++,c++)3==c&&(c=0),(c&&c==u)+(s+i&1)&1||U(s,i)||(g[s+i*r]^=1)}},I=function(d){var s,i=0;for(s=0;s<=d;s++)D[s]>=5&&(i+=b.N1+D[s]-5);for(s=3;s<d-1;s+=2)D[s-2]==D[s+2]&&D[s+2]==D[s-1]&&D[s-1]==D[s+1]&&3*D[s-1]==D[s]&&(0==D[s-3]||s+3>d||3*D[s-3]>=4*D[s]||3*D[s+3]>=4*D[s])&&(i+=b.N3);return i},F=function(){var d,s,i,c,u,w=0,f=0;for(s=0;s<r-1;s++)for(d=0;d<r-1;d++)(g[d+r*s]&&g[d+1+r*s]&&g[d+r*(s+1)]&&g[d+1+r*(s+1)]||!(g[d+r*s]||g[d+1+r*s]||g[d+r*(s+1)]||g[d+1+r*(s+1)]))&&(w+=b.N2);for(s=0;s<r;s++){for(D[0]=0,i=c=d=0;d<r;d++)(u=g[d+r*s])==c?D[i]++:D[++i]=1,f+=(c=u)?1:-1;w+=I(i)}f<0&&(f=-f);var O=f,R=0;for(O+=O<<2,O<<=1;O>r*r;)O-=r*r,R++;for(w+=R*b.N4,d=0;d<r;d++){for(D[0]=0,i=c=s=0;s<r;s++)(u=g[d+r*s])==c?D[i]++:D[++i]=1,c=u;w+=I(i)}return w};y.genframe=function(d){var s,i,c,u,w,f,O,R,W=b.eccblocks,H=b.gexp,ee=b.glog;u=d.length,T=0;do{if(T++,c=4*(P-1)+16*(T-1),k=W[c++],v=W[c++],A=W[c++],Y=W[c],u<=(c=A*(k+v)+v-3+(T<=9)))break}while(T<40);for(r=17+4*T,w=A+(A+Y)*(k+v)+v,u=0;u<w;u++)e[u]=0;for(x=d.slice(0),u=0;u<r*r;u++)g[u]=0;for(u=0;u<(r*(r+1)+1)/2;u++)$[u]=0;for(u=0;u<3;u++){for(c=0,i=0,1==u&&(c=r-7),2==u&&(i=r-7),g[i+3+r*(c+3)]=1,s=0;s<6;s++)g[i+s+r*c]=1,g[i+r*(c+s+1)]=1,g[i+6+r*(c+s)]=1,g[i+s+1+r*(c+6)]=1;for(s=1;s<5;s++)z(i+s,c+1),z(i+1,c+s+1),z(i+5,c+s),z(i+s+1,c+5);for(s=2;s<4;s++)g[i+s+r*(c+2)]=1,g[i+2+r*(c+s+1)]=1,g[i+4+r*(c+s)]=1,g[i+s+1+r*(c+4)]=1}if(T>1)for(u=b.adelta[T],i=r-7;;){for(s=r-7;s>u-3&&(N(s,i),!(s<u));)s-=u;if(i<=u+9)break;N(6,i-=u),N(i,6)}for(g[8+r*(r-8)]=1,i=0;i<7;i++)z(7,i),z(r-8,i),z(7,i+r-7);for(s=0;s<8;s++)z(s,7),z(s+r-8,7),z(s,r-8);for(s=0;s<9;s++)z(s,8);for(s=0;s<8;s++)z(s+r-8,8),z(8,s);for(i=0;i<7;i++)z(8,i+r-7);for(s=0;s<r-14;s++)1&s?(z(8+s,6),z(6,8+s)):(g[8+s+6*r]=1,g[6+r*(8+s)]=1);if(T>6)for(u=b.vpat[T-7],c=17,s=0;s<6;s++)for(i=0;i<3;i++,c--)1&(c>11?T>>c-12:u>>c)?(g[5-s+r*(2-i+r-11)]=1,g[2-i+r-11+r*(5-s)]=1):(z(5-s,2-i+r-11),z(2-i+r-11,5-s));for(i=0;i<r;i++)for(s=0;s<=i;s++)g[s+r*i]&&z(s,i);for(w=x.length,f=0;f<w;f++)e[f]=x.charCodeAt(f);if(x=e.slice(0),w>=(s=A*(k+v)+v)-2&&(w=s-2,T>9&&w--),f=w,T>9){for(x[f+2]=0,x[f+3]=0;f--;)x[f+3]|=255&(u=x[f])<<4,x[f+2]=u>>4;x[2]|=255&w<<4,x[1]=w>>4,x[0]=64|w>>12}else{for(x[f+1]=0,x[f+2]=0;f--;)x[f+2]|=255&(u=x[f])<<4,x[f+1]=u>>4;x[1]|=255&w<<4,x[0]=64|w>>4}for(f=w+3-(T<10);f<s;)x[f++]=236,x[f++]=17;for(B[0]=1,f=0;f<Y;f++){for(B[f+1]=1,O=f;O>0;O--)B[O]=B[O]?B[O-1]^H[j(ee[B[O]]+f)]:B[O-1];B[0]=H[j(ee[B[0]]+f)]}for(f=0;f<=Y;f++)B[f]=ee[B[f]];for(c=s,i=0,f=0;f<k;f++)C(i,A,c,Y),i+=A,c+=Y;for(f=0;f<v;f++)C(i,A+1,c,Y),i+=A+1,c+=Y;for(i=0,f=0;f<A;f++){for(O=0;O<k;O++)e[i++]=x[f+O*A];for(O=0;O<v;O++)e[i++]=x[k*A+f+O*(A+1)]}for(O=0;O<v;O++)e[i++]=x[k*A+f+O*(A+1)];for(f=0;f<Y;f++)for(O=0;O<k+v;O++)e[i++]=x[s+f+O*Y];for(x=e,s=i=r-1,c=w=1,R=(A+Y)*(k+v)+v,f=0;f<R;f++)for(u=x[f],O=0;O<8;O++,u<<=1){128&u&&(g[s+r*i]=1);do{w?s--:(s++,c?0!=i?i--:(c=!c,6==(s-=2)&&(s--,i=9)):i!=r-1?i++:(c=!c,6==(s-=2)&&(s--,i-=8))),w=!w}while(U(s,i))}for(x=g.slice(0),u=0,i=3e4,c=0;c<8&&(L(c),(s=F())<i&&(i=s,u=c),7!=u);c++)g=x.slice(0);for(u!=c&&L(u),i=b.fmtword[u+(P-1<<3)],c=0;c<8;c++,i>>=1)1&i&&(g[r-1-c+8*r]=1,c<6?g[8+r*c]=1:g[8+r*(c+1)]=1);for(c=0;c<7;c++,i>>=1)1&i&&(g[8+r*(r-7+c)]=1,c?g[6-c+8*r]=1:g[7+8*r]=1);return g},y.init=function(){P=y.ecclevel;var d=y.genframe(y.url);y.toTable?y.tableWrite(d,r):y.canvasWrite(d,r)},y.init()}function E(M,y="#fff0",P="#000"){return new b({url:M||"Hello",size:360,colorLight:y,colorDark:P,toTable:!1,ecclevel:1,noBorder:!0,borderSize:0})?.toImage("svg+xml")?.src}_.d(X,{w:()=>E}),b.prototype={canvasWrite:function(M,y){if(!this.qrc&&(this.qrc=this.getContext(this.domElement),!this.qrc))return this.toTable=!0,this.domElement=document.createElement("div"),void this.tableWrite(M,y);var P=this.size,T=this.qrc;T.lineWidth=1;var r=P;r/=y+10,r=Math.round(r-.5);var k=4;this.noBorder?(T.canvas.width=T.canvas.height=r*y,k=0):T.canvas.width=T.canvas.height=P,T.clearRect(0,0,P,P),T.fillStyle=this.colorLight,T.fillRect(0,0,r*(y+8),r*(y+8)),T.fillStyle=this.colorDark;for(var v=0;v<y;v++)for(var A=0;A<y;A++)M[A*y+v]&&T.fillRect(r*(k+v),r*(k+A),r,r)},tableWrite:function(M,y){var P=this,T=Math.round(this.size/y-3.5)+"px",r=y+(P.noBorder?0:2*P.borderSize),k=P.borderSize,v="width:"+T+";height:"+T+";",A=P.colorLight,Y=P.colorDark,x=document.createElement("table");x.style.cssText="border:0;border-collapse:collapse;";for(var e,g=document.createElement("tr"),$=document.createElement("td"),D=function(){return $.cloneNode()},B=function(){var I=D();return I.style.cssText=v+"background:"+A,I},z=function(I){for(var F=I.firstChild,d=0;d<k;d++)I.insertBefore(B(),F),I.appendChild(B())},N=0;N<y;N++){var j=g.cloneNode();x.appendChild(j);for(var C=0;C<y;C++)if(1===M[N*y+C]){var U=(e=void 0,(e=D()).style.cssText=v+"background:"+Y,e);j.appendChild(U)}else{var L=B();j.appendChild(L)}P.noBorder||z(j)}P.noBorder||function(I){for(var F=I.firstChild,d=0;d<P.borderSize;d++){for(var s=g.cloneNode(),i=0;i<r;i++){var c=B();s.appendChild(c)}I.appendChild(s),I.insertBefore(s.cloneNode(!0),F)}}(x),P.domElement.innerHTML="",P.domElement.appendChild(x)},getContext:function(M){return M.getContext&&M.getContext("2d")?M.getContext("2d"):(console.log("Browser does not have 2d Canvas support"),!1)},toImage:function(M){if(this.qrc){var y=this.imageTypes[M];if(!y)throw new Error(M+" is not a valid image type ");var P=new Image;return P.src=this.domElement.toDataURL(y),P}}},b.adelta=[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28],b.vpat=[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177],b.fmtword=[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],b.eccblocks=[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],b.glog=[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175],b.gexp=[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],b.N1=3,b.N2=3,b.N3=40,b.N4=10},1709:(oe,X,_)=>{_.d(X,{Xp:()=>ce,ck:()=>x.c,P2:()=>wt});var b=_(4666),E=_(2508),M=_(2921),y=_(4714),P=_(5895),T=_(7520),r=_(5170),k=_(1670),v=_(9112),A=_(5670),Y=_(565),x=_(6667),e=_(2560);_(9885),_(207),_(5074),_(7371);var L=_(3690),u=(_(3910),_(711),_(73),_(4702),_(3159),_(6198),_(6942)),W=(_(8296),_(656),_(3902),_(719),_(9136)),H=_(3970),q=_(1484),te=(_(8943),_(5306)),ne=_(4522),he=(_(1267),_(1708),_(1022));_(6168);const ie={free:"#43a047",pending:"#ffb300",reserved:"#e65100",busy:"#e53935","signs-of-life":"#1565c0","not-bookable":"#757575",unknown:"#757575"};_(9627);var ye=_(1810),qe=_(9377),Ze=_(3200),Ke=_(312),K=_(4505),ae=_(7716),se=_(9095),le=_(9128),re=_(7418),Ge=_(8929),Xe=_(354),Ve=_(9502),He=_(2306),et=_(7303);const tt=function(){return{standalone:!0}};function st(n,m){if(1&n){const t=e.EpF();e.TgZ(0,"main",5)(1,"div",6)(2,"div",7)(3,"label"),e._uU(4,"Date"),e.qZA(),e.TgZ(5,"a-date-field",8),e._uU(6," Date and time must be in the future "),e.qZA()()(),e.TgZ(7,"div",6)(8,"div",9)(9,"label"),e._uU(10,"Start Time"),e.qZA(),e.TgZ(11,"a-time-field",10),e.NdJ("ngModelChange",function(a){e.CHM(t);const l=e.oxw();return e.KtG(l.form.patchValue({date:a}))}),e.qZA()(),e.TgZ(12,"div",9)(13,"label"),e._uU(14,"End Time"),e.qZA(),e._UZ(15,"a-duration-field",11),e.qZA()()()}if(2&n){const t=e.oxw();let o;e.Q6J("formGroup",t.form),e.xp6(5),e.Q6J("to",t.book_until),e.xp6(6),e.Q6J("ngModel",t.form.value.date)("ngModelOptions",e.DdM(8,tt)),e.xp6(4),e.Q6J("time",null==(o=t.form.get("date"))?null:o.value)("max",720)("min",60)("step",60)}}let Ce=(()=>{class n{constructor(t){this._data=t,this.form=new E.cw({date:new E.NI(this._data.date),duration:new E.NI(this._data.duration)}),this.book_until=this._data.until}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(q.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["set-datetime-modal"]],decls:10,vars:2,consts:[["classs","flex items-center justify-between"],["mat-icon-button","","mat-dialog-close",""],["class","w-[24rem] pt-4",3,"formGroup",4,"ngIf"],[1,"w-full","p-2","border-t","border-gray-200","flex","items-center","justify-center"],["mat-button","",1,"w-32",3,"mat-dialog-close"],[1,"w-[24rem]","pt-4",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","space-x-0","sm:space-x-2","w-[640px]","max-w-[calc(100%-2rem)]","mx-auto"],[1,"flex","flex-col","flex-1","w-full","sm:w-1/4"],["formControlName","date",3,"to"],[1,"flex","flex-col","flex-1","w-full","sm:w-1/3"],[3,"ngModel","ngModelOptions","ngModelChange"],["formControlName","duration",3,"time","max","min","step"]],template:function(t,o){1&t&&(e.TgZ(0,"header",0)(1,"h2"),e._uU(2,"Set date and time"),e.qZA(),e.TgZ(3,"button",1)(4,"app-icon"),e._uU(5,"close"),e.qZA()()(),e.YNc(6,st,16,9,"main",2),e.TgZ(7,"footer",3)(8,"button",4),e._uU(9,"Continue"),e.qZA()()),2&t&&(e.xp6(6),e.Q6J("ngIf",o.form),e.xp6(2),e.Q6J("mat-dialog-close",o.form.value))},dependencies:[b.O5,te.o,ne.lW,q.ZT,E.JJ,E.JL,E.On,E.sg,E.u,He.Q,he.B,et.N]}),n})();function ot(n,m){if(1&n&&(e.TgZ(0,"p",8),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Oqu(t.user)}}function nt(n,m){if(1&n&&(e.TgZ(0,"p",9),e._uU(1),e.ALo(2,"date"),e.ALo(3,"date"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.AsE(" ",e.xi3(2,2,t.start,"shortTime")," \u2013 ",e.xi3(3,5,t.end,"shortTime")," ")}}function it(n,m){if(1&n&&(e.TgZ(0,"div",2),e._UZ(1,"div",3),e.TgZ(2,"div",4)(3,"h4",5),e._uU(4),e.qZA(),e.YNc(5,ot,2,1,"p",6),e.YNc(6,nt,4,8,"p",7),e.qZA()()),2&n){const t=e.oxw();e.Tol("absolute rounded bg-white dark:bg-neutral-800 p-4 top-0 left-0 shadow pointer-events-none "+t.x_pos+" "+t.y_pos),e.Q6J("id",t.map_id),e.xp6(4),e.Oqu(t.name||t.map_id||t.id),e.xp6(1),e.Q6J("ngIf",t.user),e.xp6(1),e.Q6J("ngIf",t.start)}}let Ee=(()=>{class n{constructor(t,o){this._details=t,this._element=o,this.id=this._details.id,this.map_id=this._details.map_id,this.name=this._details.name,this.user=this._details.user,this.start=this._details.start,this.end=this._details.end}ngOnInit(t=0){t>10||setTimeout(()=>{const o=this._element.nativeElement.parentElement?.parentElement;if(!o)return this.ngOnInit(++t);const a_y=parseInt(o.style.top,10)/100,a_x=parseInt(o.style.left,10)/100;this.y_pos=a_y>=.5?"bottom":"top",this.x_pos=a_x>=.5?"right":"left"},200)}get available_until(){return""}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(W.u),e.Y36(e.SBq))},n.\u0275cmp=e.Xpm({type:n,selectors:[["explore-desk-info"]],decls:3,vars:7,consts:[["customTooltip","",1,"h-full","w-full","pointer-events-auto","relative",3,"content","backdrop","xPosition","yPosition","hover"],["desk_tooltip",""],["name","space-info",3,"id"],[1,"arrow"],[1,"details"],["map-id","",1,"m-0","font-medium"],["user","","class","mt-2 text-sm",4,"ngIf"],["start","","class","mt-1 text-sm",4,"ngIf"],["user","",1,"mt-2","text-sm"],["start","",1,"mt-1","text-sm"]],template:function(t,o){if(1&t&&(e._UZ(0,"div",0),e.YNc(1,it,7,6,"ng-template",null,1,e.W1O)),2&t){const a=e.MAs(2);e.Q6J("content",a)("backdrop",!1)("xPosition","center")("yPosition","center")("hover",!0),e.uIk("id",o.id)("map_id",o.map_id)}},dependencies:[b.O5,H.X,b.uU],styles:["[name=space-info][_ngcontent-%COMP%]{width:16rem}[name=status][_ngcontent-%COMP%]{background-color:#43a047;font-weight:500}[name=status].busy[_ngcontent-%COMP%]{background-color:#e53935}[name=status].pending[_ngcontent-%COMP%]{background-color:#ffb300}[name=status].not-bookable[_ngcontent-%COMP%]{background-color:#757575}\n/*# sourceMappingURL=explore-desk-info.component.ts-angular-inline--62.css.map*/"]}),n})();var at=_(9380),lt=_(8987);const rt=["explore-device-info",""];function ct(n,m){if(1&n&&(e.TgZ(0,"p",15)(1,"label"),e._uU(2,"Manufacturer:"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.manufacturer," ")}}function pt(n,m){if(1&n&&(e.TgZ(0,"p",16)(1,"label"),e._uU(2,"OS:"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.os," ")}}function _t(n,m){if(1&n&&(e.TgZ(0,"p",17)(1,"label"),e._uU(2,"SSID:"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.ssid," ")}}function dt(n,m){if(1&n&&(e.TgZ(0,"p",18)(1,"label"),e._uU(2,"Username:"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",(null==t.user?null:t.user.name)||(null==t.user?null:t.user.username)||t.username," ")}}function ut(n,m){if(1&n&&(e.TgZ(0,"p",19)(1,"label"),e._uU(2,"Type:"),e.qZA(),e._uU(3),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij(" ",t.user.type," ")}}function mt(n,m){if(1&n){const t=e.EpF();e.TgZ(0,"div",6),e.NdJ("mouseleave",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.close())}),e._UZ(1,"div",7),e.TgZ(2,"div",8)(3,"p",9)(4,"label"),e._uU(5,"MAC:"),e.qZA(),e._uU(6),e.qZA(),e.TgZ(7,"p")(8,"label"),e._uU(9,"Accuracy:"),e.qZA(),e._uU(10),e.qZA(),e.TgZ(11,"p")(12,"label"),e._uU(13,"Last Seen:"),e.qZA(),e._uU(14),e.qZA(),e.YNc(15,ct,4,1,"p",10),e.YNc(16,pt,4,1,"p",11),e.YNc(17,_t,4,1,"p",12),e.YNc(18,dt,4,1,"p",13),e.YNc(19,ut,4,1,"p",14),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(6),e.hij(" ",t.mac,""),e.xp6(4),e.hij(" ",t.variance,"m"),e.xp6(4),e.hij(" ",t.last_seen,""),e.xp6(1),e.Q6J("ngIf",t.manufacturer&&!t.hide_fields.includes("manufacturer")),e.xp6(1),e.Q6J("ngIf",t.os&&!t.hide_fields.includes("os")),e.xp6(1),e.Q6J("ngIf",t.ssid&&!t.hide_fields.includes("ssid")),e.xp6(1),e.Q6J("ngIf",t.username&&!t.hide_fields.includes("username")),e.xp6(1),e.Q6J("ngIf",t.user&&!t.hide_fields.includes("user"))}}const ht=[];let Te=(()=>{class n extends v.KG{constructor(t,o,a){super(),this._details=t,this._settings=o,this._element=a,this.username="",this.user=this._details.user,this.mac=this._details.mac,this.manufacturer=this._details.manufacturer,this.os=this._details.os,this.ssid=this._details.ssid,this.variance=this._details.variance?.toFixed(2),this.bg_color=this._details.bg_color||this.distance_color,this.zoom=1}get hide_fields(){return this._settings.get("app.explore.hide_device_fields")||ht}get last_seen(){return(0,at.Z)(1e3*(this._details.last_seen||0),{addSuffix:!0})}get diameter(){return 100*this._details.variance*this.zoom}get distance(){return Math.abs((0,lt.Z)(1e3*(this._details.last_seen||0),new Date))}get distance_color(){return this.distance<10?"#43a047":this.distance<20?"#ffb300":"#e53935"}ngOnInit(t=0){t>10||setTimeout(()=>{const o=this._element.nativeElement.parentElement?.parentElement;if(!o)return this.ngOnInit(++t);const a_y=parseInt(o.style.top,10)/100,a_x=parseInt(o.style.left,10)/100;this.y_pos=a_y>=.5?"bottom":"top",this.x_pos=a_x>=.5?"end":"start",this.subscription("zoom",this._details.zoom$.subscribe(l=>this.zoom=l))},200)}loadUser(){var t=this;return(0,k.Z)(function*(){if(t.username)return;const o=(0,L.rTZ)(t._details.system,"LocationServices");if(!o)return;t.username="Loading...";const a=yield o.execute("check_ownership_of",[t.mac]).catch(l=>null);t.username=a&&a.assigned_to?a.assigned_to:""})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(W.u),e.Y36(v.gb),e.Y36(e.SBq))},n.\u0275cmp=e.Xpm({type:n,selectors:[["","explore-device-info",""]],features:[e.qOj],attrs:rt,decls:7,vars:9,consts:[["name","radius",1,"radius","absolute","center","bg-blue-600","bg-opacity-25","border-8","border-dashed","border-blue-600","rounded-full"],["shadow","",1,"absolute","center","bg-black/40","h-8","w-8","rounded-full"],["name","dot",1,"h-3","w-3","absolute","center","rounded-full","shadow","border-2","border-white"],["dot",""],["customTooltip","",1,"absolute","inset-0","pointer-events-auto",3,"content","backdrop","xPosition","yPosition","hover","mouseenter"],["device_tooltip",""],["name","device-info",1,"w-64","rounded","bg-white","dark:bg-neutral-800","p-4","top-0","left-0","shadow","pointer-events-none","mx-2",3,"mouseleave"],[1,"arrow"],[1,"details"],[1,"break-words"],["type","",4,"ngIf"],["os","",4,"ngIf"],["ssid","",4,"ngIf"],["username","",4,"ngIf"],["user","",4,"ngIf"],["type",""],["os",""],["ssid",""],["username",""],["user",""]],template:function(t,o){if(1&t&&(e._UZ(0,"div",0)(1,"div",1)(2,"div",2,3),e.TgZ(4,"div",4),e.NdJ("mouseenter",function(){return o.loadUser()}),e.qZA(),e.YNc(5,mt,20,8,"ng-template",null,5,e.W1O)),2&t){const a=e.MAs(6);e.Akn("height: "+o.diameter+"%; width: "+o.diameter+"%;"),e.xp6(2),e.Udp("background-color",o.bg_color),e.xp6(2),e.Q6J("content",a)("backdrop",!1)("xPosition",o.x_pos)("yPosition",o.y_pos)("hover",!0)}},dependencies:[b.O5,H.X],styles:["[_nghost-%COMP%]{pointer-events:auto}[_nghost-%COMP%] > [name=dot][_ngcontent-%COMP%]{background-color:#616161}[_nghost-%COMP%]:hover > [name=radius][_ngcontent-%COMP%]{opacity:1}[name=radius][_ngcontent-%COMP%]{opacity:0;transition:opacity .2s;pointer-events:none}\n/*# sourceMappingURL=explore-device-info.component.ts-angular-inline--63.css.map*/"]}),n})(),ce=(()=>{class n extends v.KG{constructor(t,o,a,l,p){super(),this._state=t,this._org=o,this._settings=a,this._bookings=l,this._dialog=p,this._in_use=new K.X([]),this._options=new K.X({}),this._presence=new K.X([]),this._signs_of_life=new K.X([]),this._statuses={},this._users={},this._poll=new K.X(0),this._checked_in=new K.X([]),this._desk_bookings=(0,ae.aj)([this._state.level,this._poll]).pipe((0,se.w)(([h])=>(0,Xe.F2)({period_start:(0,ye.Z)((0,qe.Z)(new Date)),period_end:(0,ye.Z)((0,Ze.Z)(new Date)),type:"desk",zones:h.id})),(0,le.d)(1)),this.desk_list=this._state.level.pipe((0,se.w)(h=>(0,L.rlq)(h.id,"desks").pipe((0,u.U)(S=>(S.details instanceof Array?S.details:[]).map(Z=>new Ve.n({...Z,zone:h}))))),(0,re.K)(h=>[]),(0,le.d)(1)),this._bind=this._state.level.pipe((0,u.U)(h=>{if(this._statuses={},this.unsubWith("lvl"),!h)return;const S=this._org.binding("area_management");if(!S)return;let Z=(0,L.rTZ)(S,"AreaManagement").binding(h.id);this.subscription("lvl-in_use",Z.listen().subscribe(J=>this.processBindingChange(J||{},S))),this.subscription("lvl-in_use_bind",Z.bind())})),this._state_change=(0,ae.aj)([this.desk_list,this._in_use,this._presence,this._checked_in,this._signs_of_life,this._options]).pipe((0,u.U)(([h,S,Z,J,Q])=>{this._statuses={};for(const{id:G,bookable:Oe}of h){const Ot=S.some(V=>G===V),Ae=Z.some(V=>G===V),At=Q.some(V=>G===V),Ue=J.some(V=>G===V);this._statuses[G]=Oe?Ot||Ae||Ue?Ae||Ue?"busy":"pending":At?"signs-of-life":"free":"not-bookable"}this.processDesks(h)})),this.init()}init(){var t=this;return(0,k.Z)(function*(){yield t._org.initialised.pipe((0,A.P)(o=>o)).toPromise(),t.setOptions({enable_booking:!1!==t._settings.get("app.desks.enable_maps")}),t.subscription("bind",t._bind.subscribe()),t.subscription("changes",t._state_change.subscribe()),t.subscription("desks",t.desk_list.subscribe(o=>t.processDesks(o)))})()}startPolling(t=1e4){return this.subscription("desks_in_use_bookings",this._desk_bookings.subscribe(o=>{const a=o.filter(l=>!(l.rejected||l.deleted||"ended"===l.extension_data.current_state));this._in_use.next(a.map(l=>l.asset_id)),this._checked_in.next(a.filter(l=>l.checked_in).map(l=>l.asset_id))})),this.interval("poll",()=>this._poll.next((new Date).valueOf()),t),()=>this.stopPolling()}stopPolling(){this.clearInterval("poll")}setOptions(t){this._options.next({...this._options.getValue(),...t})}processBindingChange({value:t},o){const a=(t||[]).filter(p=>!["desk","booking"].includes(p.location)),l=(t||[]).filter(p=>"desk"===p.location||"booking"===p.location&&"desk"===p.type);this._presence.next(l.filter(p=>p.at_location).map(p=>p.map_id||p.asset_id)),this._signs_of_life.next(l.filter(p=>p.signs_of_life).map(p=>p.map_id||p.asset_id)),this.processDevices(a,o),this.timeout("update",()=>this.updateStatus(),100)}updateStatus(){const t={},o=this._settings.get("app.explore.colors")||{};for(const a in this._statuses)!this._statuses[a]||(t[`#${a}`]={fill:o[`desk-${this._statuses[a]}`]||o[`${this._statuses[a]}`]||ie[`${this._statuses[a]}`]});this._state.setStyles("desks",t)}processDevices(t,o){const a=[];for(const l of t){const p=l.x/l.map_width,h=l.y/l.map_height;a.push({location:{x:l.coordinates_from?.includes("right")?1-p:p,y:l.coordinates_from?.includes("bottom")?1-h:h},content:Te,z_index:20,data:{...l,system:o}})}this._state.setFeatures("devices",a)}processDesks(t){var o=this;const a=[],l=[],p=this._options.getValue();for(const h of t){if(a.push({location:h.id,content:Ee,full_size:!0,no_scale:!0,data:{id:h.map_id||h.id,map_id:h.name,name:h.name||h.map_id,user:this._users[h.map_id]||h.staff_name,status:this._statuses[h.map_id]},z_index:20}),!h.bookable)continue;const S=function(){var Z=(0,k.Z)(function*(){o._bookings.newForm(),o._bookings.setOptions({type:"desk"});const{date:J,duration:Q}=yield o._setBookingTime(o._bookings.form.value.date,o._bookings.form.value.duration);o._bookings.form.patchValue({asset_id:h.id,asset_name:h.name,date:J,duration:Q,map_id:h?.map_id||h?.id,description:h.name,user:p.host||(0,v.ar)(),booking_type:"desk",zones:h.zone?[h.zone?.parent_id,h.zone?.id]:[]}),yield o._bookings.confirmPost(),o._users[h.map_id]=(p.host||(0,v.ar)())?.name,(0,v.t5)(`Successfull booked desk ${h.name||h.id}`)});return function(){return Z.apply(this,arguments)}}();l.push({id:h.id,action:"click",callback:S}),l.push({id:h.id,action:"touchend",callback:S})}this._state.setActions("desks",this._options.getValue().enable_booking?l:[]),this._state.setFeatures("desks",a),this.timeout("update",()=>this.updateStatus(),100)}_setBookingTime(t,o){var a=this;return(0,k.Z)(function*(){if(a._settings.get("app.desks.allow_time_changes")){const l=(0,Ze.Z)((0,Ke.Z)(Date.now(),a._settings.get("app.desks.available_period")||90)),h=yield a._dialog.open(Ce,{data:{date:t,duration:o,until:l}}).afterClosed().toPromise();if(!h)throw"User cancelled";t=h.date,o=h.duration}return{date:t,duration:o}})()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(x.c),e.LFG(Y.w),e.LFG(v.gb),e.LFG(Ge.f),e.LFG(q.uw))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();_(8461),_(4139),_(823),_(8759),_(9012),_(4618),_(8550);let wt=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[b.ez,M.Kk,E.u5,E.UX,y.rP,P.U8,T.eL,r.W]}),n})()},6667:(oe,X,_)=>{_.d(X,{c:()=>z});var b=_(1670),E=_(3690),M=_(4505),y=_(4139),P=_(7716),T=_(9095),r=_(6942),k=_(7418),v=_(9128),A=_(823),Y=_(5670),x=_(9151),e=_(9112),g=_(565),$=_(656),D=_(73),B=_(2560);let z=(()=>{class N extends e.KG{constructor(C,U,L){super(),this._org=C,this._spaces=U,this._settings=L,this._level=new M.X(null),this._positions=new M.X({zoom:1,center:{x:.5,y:.5}}),this._styles=new M.X({}),this._features=new M.X({}),this._actions=new M.X({}),this._labels=new M.X({}),this._options=new M.X({disable:["zones","devices"]}),this._message=new M.X(""),this.level=this._level.asObservable(),this.message=this._message.asObservable(),this.spaces=this._level.pipe((0,T.w)(I=>(0,E.vIL)({zone_id:I?.id,limit:50}).pipe((0,r.U)(({data:F})=>F.map(d=>new $.T(d))),(0,k.K)(F=>(0,y.of)([])))),(0,v.d)(1)),this.map_url=this._level.pipe((0,r.U)(I=>(I?I.map_id:"")||"")),this.map_positions=this._positions.asObservable(),this.map_features=(0,P.aj)([this._features,this._options]).pipe((0,A.b)(200),(0,r.U)(([I,F])=>{let d=[];for(const s in I)F.disable?.includes(s)||F.disable_features?.includes(s)||(d=d.concat(I[s]));return d})),this.map_actions=(0,P.aj)([this._actions,this._options]).pipe((0,A.b)(200),(0,r.U)(([I,F])=>{let d=[];for(const s in I)F.disable?.includes(s)||F.disable_actions?.includes(s)||(d=d.concat(I[s]));return d})),this.map_labels=(0,P.aj)([this._labels,this._options]).pipe((0,A.b)(200),(0,r.U)(([I,F])=>{let d=[];for(const s in I)F.disable?.includes(s)||F.disable_labels?.includes(s)||(d=d.concat(I[s]));return d})),this.map_styles=(0,P.aj)([this._styles,this._options]).pipe((0,A.b)(200),(0,r.U)(([I,F])=>{let d={text:{display:"none"}};for(const s in I)F.disable?.includes(s)||F.disable_styles?.includes(s)||(d={...d,...I[s]});return F.disable?.includes("zones")&&(d["#zones"]={display:"none"},d["#Zones"]={display:"none"}),d})),this.options=this._options.asObservable(),this.init()}get positions(){return this._positions.getValue()}get active_level(){return this._level.getValue()}init(){var C=this;return(0,b.Z)(function*(){yield C._org.initialised.pipe((0,Y.P)(U=>U)).toPromise(),C._org.active_building.pipe((0,x.h)(U=>!!U)).subscribe(U=>{const L=C._level.getValue(),I=C._org.levelsForBuilding(U);!I.find(d=>L?.id===d.id)&&I.length&&C.setLevel(I[0].id),C._settings.get("app.explore.disable_actions")&&C.setOptions({disable_actions:C._settings.get("app.explore.disable_actions")}),C._settings.get("app.explore.disable_labels")&&C.setOptions({disable_labels:C._settings.get("app.explore.disable_labels")}),C._settings.get("app.explore.disable_features")&&C.setOptions({disable_features:C._settings.get("app.explore.disable_features")}),C._settings.get("app.explore.disable_styles")&&C.setOptions({disable_styles:C._settings.get("app.explore.disable_styles")})})})()}setOptions(C){const U=this._options.getValue(),L=(0,e.Tw)([...C.disable||U.disable,...this._settings.get("app.explore.disable")||[]]);this._options.next({...this._options.getValue(),...C,disable:L})}reset(){this._styles.next({}),this._features.next({}),this._labels.next({}),this._actions.next({}),this.setPositions(1,{x:.5,y:.5})}setLevel(C){const U=this._org.levelWithID([C]);U&&this._level.next(U)}setStyles(C,U){const L=this._styles.getValue();L[C]=U,this._styles.next(L)}setFeatures(C,U){const L=this._features.getValue();L[C]=U,this._features.next(L)}setActions(C,U){const L=this._actions.getValue();L[C]=U,this._actions.next(L)}setLabels(C,U){const L=this._labels.getValue();L[C]=U,this._labels.next(L)}setPositions(C,U){this._positions.next({zoom:C,center:U})}}return N.\u0275fac=function(C){return new(C||N)(B.LFG(g.w),B.LFG(D.s),B.LFG(e.gb))},N.\u0275prov=B.Yz7({token:N,factory:N.\u0275fac,providedIn:"root"}),N})()},8461:(oe,X,_)=>{_.d(X,{s:()=>P});var b=_(6667),E=_(2560),M=_(5306),y=_(4522);let P=(()=>{class T{constructor(k){this._state=k,this.zoomIn=()=>this._state.setPositions(Math.min(10,1.2*this._state.positions.zoom),this._state.positions.center),this.zoomOut=()=>this._state.setPositions(Math.max(1,this._state.positions.zoom*(1/1.2)),this._state.positions.center),this.reset=()=>this._state.setPositions(1,{x:.5,y:.5})}}return T.\u0275fac=function(k){return new(k||T)(E.Y36(b.c))},T.\u0275cmp=E.Xpm({type:T,selectors:[["explore-zoom-controls"]],decls:9,vars:0,consts:[["z-in","","mat-icon-button","",1,"bg-white","dark:bg-neutral-800",3,"click"],["z-out","","mat-icon-button","",1,"bg-white","dark:bg-neutral-800",3,"click"],["reset","","mat-icon-button","",1,"bg-white","dark:bg-neutral-800",3,"click"]],template:function(k,v){1&k&&(E.TgZ(0,"button",0),E.NdJ("click",function(){return v.zoomIn()}),E.TgZ(1,"app-icon"),E._uU(2,"add"),E.qZA()(),E.TgZ(3,"button",1),E.NdJ("click",function(){return v.zoomOut()}),E.TgZ(4,"app-icon"),E._uU(5,"remove"),E.qZA()(),E.TgZ(6,"button",2),E.NdJ("click",function(){return v.reset()}),E.TgZ(7,"app-icon"),E._uU(8,"autorenew"),E.qZA()())},dependencies:[M.o,y.lW],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}button[_ngcontent-%COMP%]{border:1px solid #9998;border-radius:0}button[_ngcontent-%COMP%]:first-child{border-radius:.25rem .25rem 0 0;border-bottom:none}button[_ngcontent-%COMP%]:last-child{border-radius:0 0 .25rem .25rem;border-top:none}\n/*# sourceMappingURL=explore-zoom-control.component.ts-angular-inline--66.css.map*/"]}),T})()}}]);
//# sourceMappingURL=default-libs_explore_src_index_ts.js.map