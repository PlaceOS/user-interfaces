import{n as m,t as l}from"./chunk-BiC_2twR.js";import{$ as GD,$i as kE,$n as Ui$1,$t as OT,A as D0,Ai as hE,An as RD,Ao as yn$1,Ba as qT,Bn as T$1,Br as _e$1,Bt as Mt$1,C as Bt$2,Ca as nN,Cn as Qh,Ct as KS,D as CT,Di as gt$1,Dn as Qt$1,Dr as Z$e,Ea as nu,Ei as gs,En as Qo,Er as Yt$2,Et as Kn$1,F as Di$1,Fa as q$2,Fi as hs,Fn as Rz,Fr as Zt$1,Ft as Lt$2,G as Fe$1,Ga as qf,Gi as j,Gn as Tx,Gr as aY,H as F0,Hi as ip,Ia as q$e,Io as zd,It as M$,J as G$2,Jn as U0,Ka as qm,Kr as ae$1,L as Dn$1,La as q0,Li as iD,Ln as Sn$1,Lo as ze,Lr as _$e,Lt as MD,Ma as pn$2,Mi as hYe,Mo as z$e,Mr as ZW,N as DF,Na as pt$2,Ni as h_,Nr as Zd,Nt as Lee,O as Ci$1,Oa as oY,On as Qx,Or as Z0,P as DNe,Pi as he,Pn as Ri$1,Po as zH,Pr as Zn,Q as GAe,Qa as se,Qn as Ue,Qr as bT,R as ENe,Ra as qI,Rn as So$1,Ro as zx,Si as fr$1,So as x0,Sr as Xt$1,T as C,Ta as nge,Ti as gl,Tn as Qn$1,Tr as Yr,U as FH,Ua as qe$1,Ui as iu,Ur as aD,Va as qW,Vi as ige,Vr as _t$1,Wi as iye,Wt as N8,X as G9,Xa as rp,Xn as UO,Xr as bD,Y as G8,Ya as rc,Yi as jK,Yn as U8,Yr as b,Zi as jt$1,Zn as UT,Zt as OF,_a as ml,_t as Jr,ai as c_,ao as t_,ar as VI,at as I$2,br as XSe,co as u9,cr as VRe,ct as J$2,d as A8,dn as Pee,dr as W0,ei as bt$1,en as Of,eo as st$2,et as GH,fn as Pt$1,fo as vn$1,fr as W8,ft as Jc,ga as mO,gi as ee$1,gn as Q$e,go as wOe,gr as X$e,gt as Jn$1,ha as m$1,hi as eN,ho as w,hr as Wr,ht as Jme,ia as ko,ii as cU,in as Oy,io as t8,j as D8,ja as pe$1,jr as ZSe,jt as L_,ka as oc,ki as h$e,kn as R,ko as yi$1,l as $r,li as dZ,ln as PG,lo as ut$1,lr as Ve,lt as JH,m as Ai$1,mo as vz,mr as WD,mt as Jm,na as ki$1,no as su,nt as HAe,o as $d,oa as lAe,oi as cu,on as P$,oo as tge,pa as lx,pi as e8,pn as Py,pt as Jh,q as Fz,qa as qn$1,qi as jAe,qn as U$1,qr as at$3,qt as Ni$1,r as $D,ri as cP,rr as V,s as $e$2,sa as lD,so as tye,sr as VOe,tr as Un$1,tt as Gt$1,ua as le,ui as dq,un as Pa,ur as Vz,ut as JSe,v as BAe,vi as ep,vn as QS,vo as wW,w as Bz,wi as gH,wn as Qm,wo as xl,wt as Kf,x as BYe,xi as fe,xn as Qa,xo as x,xr as Xn$1,xt as K8,y as BD,ya as ms,yi as er$1,yn as QSe,yo as wt$1,yt as K$e,z as Er,zr as _a,zt as MW}from"./chunk-DP14Ww0y.js";function z(n,d){n&1&&Di$1(0,`div`,2)}var A$1=new b(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`);var L=(()=>{class n{_elementRef=m$1(le);_ngZone=m$1(ee$1);_changeDetectorRef=m$1(Qt$1);_renderer=m$1(gt$1);_cleanupTransitionEnd;constructor(){let r=dZ(),e=m$1(A$1,{optional:!0});this._isNoopAnimation=r===`di-disabled`,r===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),this.mode=e.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(r){this._color=r}_color;_defaultColor=`primary`;get value(){return this._value}set value(r){this._value=M(r||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(r){this._bufferValue=M(r||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new fe;get mode(){return this._mode}set mode(r){this._mode=r,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=r=>{this.animationEnd.observers.length===0||!r.target||!r.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(e){return new(e||n)};static ɵcmp=Ue({type:n,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(e,a){e&2&&(Zn(`aria-valuenow`,a._isIndeterminate()?null:a.value)(`mode`,a.mode),zd(`mat-`+a.color),ut$1(`_mat-animation-noopable`,a._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!a._isNoopAnimation)(`mdc-linear-progress--indeterminate`,a._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,qT],bufferValue:[2,`bufferValue`,`bufferValue`,qT],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(e,a){e&1&&(Jn$1(0,`div`,0),Di$1(1,`div`,1),Xn$1(2,z,1,0,`div`,2),er$1(),Jn$1(3,`div`,3),Di$1(4,`span`,4),er$1(),Jn$1(5,`div`,5),Di$1(6,`span`,4),er$1()),e&2&&(_t$1(),Jm(`flex-basis`,a._getBufferBarFlexBasis()),_t$1(),Qn$1(a.mode===`buffer`?2:-1),_t$1(),Jm(`transform`,a._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --%NS%mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --%NS%mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--%NS%mat-progress-bar-track-height, 4px), var(--%NS%mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--%NS%mat-progress-bar-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--%NS%mat-progress-bar-track-height, 4px);
  border-radius: var(--%NS%mat-progress-bar-track-shape, var(--%NS%mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant)) calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--%NS%mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})}return n})();function M(n,d=0,r=100){return Math.max(d,Math.min(r,n))}var Z=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=_e$1({type:n});static ɵinj=he({imports:[Dn$1]})}return n})();var $e$1=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`];var et$2=[`mat-icon, [matMenuItemIcon]`,`*`];function tt$1(a,Ue){a&1&&(UO(),$r(0,`svg`,2),Ai$1(1,`polygon`,3),Yr())}var nt$2=[`*`];function it$2(a,Ue){if(a&1){let e=CT();Jn$1(0,`div`,0),x0(`click`,function(){Qh(e);return Jh(Wr().closed.emit(`click`))})(`animationstart`,function(n){Qh(e);return Jh(Wr()._onAnimationStart(n.animationName))})(`animationend`,function(n){Qh(e);return Jh(Wr()._onAnimationDone(n.animationName))})(`animationcancel`,function(n){Qh(e);return Jh(Wr()._onAnimationDone(n.animationName))}),Jn$1(1,`div`,1),Xt$1(2),er$1()()}if(a&2){let e=Wr();zd(e._classList),ut$1(`mat-menu-panel-animations-disabled`,e._animationsDisabled)(`mat-menu-panel-exit-animation`,e._panelAnimationState===`void`)(`mat-menu-panel-animating`,e._isAnimating()),gl(`id`,e.panelId),Zn(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e.ariaLabelledby||null)(`aria-describedby`,e.ariaDescribedby||null)}}var q$1=new b(`MAT_MENU_PANEL`);var G$1=(()=>{class a{_elementRef=m$1(le);_document=m$1(G$2);_focusMonitor=m$1(bD);_parentMenu=m$1(q$1,{optional:!0});_changeDetectorRef=m$1(Qt$1);role=`menuitem`;disabled=!1;disableRipple=!1;_hovered=new R;_focused=new R;_highlighted=!1;_triggersSubmenu=!1;constructor(){m$1(Un$1).load(kE),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||a)};static ɵcmp=Ue({type:a,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:8,hostBindings:function(t,n){t&1&&Gt$1(`click`,function(s){return n._checkDisabled(s)})(`mouseenter`,function(){return n._handleMouseEnter()}),t&2&&(Zn(`role`,n.role)(`tabindex`,n._getTabIndex())(`aria-disabled`,n.disabled)(`disabled`,n.disabled||null),ut$1(`mat-mdc-menu-item-highlighted`,n._highlighted)(`mat-mdc-menu-item-submenu-trigger`,n._triggersSubmenu))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,Ve],disableRipple:[2,`disableRipple`,`disableRipple`,Ve]},exportAs:[`matMenuItem`],ngContentSelectors:et$2,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(t,n){t&1&&(Er($e$1),Xt$1(0),$r(1,`span`,0),Xt$1(2,1),Yr(),Ai$1(3,`div`,1),Xn$1(4,tt$1,2,0,`:svg:svg`,2)),t&2&&(_t$1(3),ml(`matRippleDisabled`,n.disableRipple||n.disabled)(`matRippleTrigger`,n._getHostElement()),_t$1(),Qn$1(n._triggersSubmenu?4:-1))},dependencies:[WD],encapsulation:2})}return a})();var at$2=new b(`MatMenuContent`);var st$1=new b(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var K=`_mat-menu-enter`;var D=`_mat-menu-exit`;var I$1=(()=>{class a{_elementRef=m$1(le);_changeDetectorRef=m$1(Qt$1);_injector=m$1(J$2);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Jr();_allItems;_directDescendantItems=new _a;_classList={};_panelAnimationState=`void`;_animationDone=new R;_isAnimating=I$2(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=l({},this._classList);t&&t.length&&t.split(` `).forEach(i=>{n[i]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(i=>{n[i]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new fe;close=this.closed;panelId=m$1(ko).getId(`mat-menu-panel-`);constructor(){let e=m$1(st$1);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new RD(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(Qo(this._directDescendantItems),pt$2(e=>PG(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),i=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[i]&&!n[i].disabled?t.setActiveItem(i):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Qo(this._directDescendantItems),pt$2(t=>PG(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:iu(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Zt$1(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=m(l({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===D;(t||e===K)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===K||e===D)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(D),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?K:D)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Qo(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||a)};static ɵcmp=Ue({type:a,selectors:[[`mat-menu`]],contentQueries:function(t,n,i){if(t&1&&Qm(i,at$2,5)(i,G$1,5)(i,G$1,4),t&2){let s;Ri$1(s=Ci$1())&&(n.lazyContent=s.first),Ri$1(s=Ci$1())&&(n._allItems=s),Ri$1(s=Ci$1())&&(n.items=s)}},viewQuery:function(t,n){if(t&1&&ms(qn$1,5),t&2){let i;Ri$1(i=Ci$1())&&(n.templateRef=i.first)}},hostVars:3,hostBindings:function(t,n){t&2&&Zn(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,Ve],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,e=>e==null?null:Ve(e)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[vn$1([{provide:q$1,useExisting:a}])],ngContentSelectors:nt$2,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(t,n){t&1&&(Er(),D0(0,it$2,3,12,`ng-template`))},styles:[`mat-menu {
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
`],encapsulation:2})}return a})();var ot$1=new b(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=m$1(J$2);return()=>BD(a)}});var u=new WeakMap;var rt$2=(()=>{class a{_canHaveBackdrop;_element=m$1(le);_viewContainerRef=m$1(yn$1);_menuItemInstance=m$1(G$1,{optional:!0,self:!0});_dir=m$1(su,{optional:!0});_focusMonitor=m$1(bD);_ngZone=m$1(ee$1);_injector=m$1(J$2);_scrollStrategy=m$1(ot$1);_changeDetectorRef=m$1(Qt$1);_animationsDisabled=Jr();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=se.EMPTY;_menuCloseSubscription=se.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=m$1(q$1,{optional:!0});this._parentMaterialMenu=t instanceof I$1?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&u.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=u.get(t);u.set(t,this),n&&n!==this&&n._closeMenu();let i=this._createOverlay(t),s=i.getConfig(),r=s.positionStrategy;this._setPosition(t,r),this._canHaveBackdrop?s.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:s.hasBackdrop=t.hasBackdrop??!1,i.hasAttached()||(i.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof I$1&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(pn$2(t.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof I$1&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(st$2(1)).subscribe(()=>{t.detach(),u.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&u.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=rp(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof I$1&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new oc({positionStrategy:GD(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let i=n.connectionPair.overlayX===`start`?`after`:`before`,s=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(i,s)})})}_setPosition(e,t){let[n,i]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[s,r]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[P,R]=[s,r],[T,N]=[n,i],c=0;if(this._triggersSubmenu()){if(N=n=e.xPosition===`before`?`start`:`end`,i=T=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let Z=this._parentMaterialMenu.items.first;this._parentInnerPadding=Z?Z._getHostElement().offsetTop:0}c=s===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(P=s===`top`?`bottom`:`top`,R=r===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:P,overlayX:T,overlayY:s,offsetY:c},{originX:i,originY:P,overlayX:N,overlayY:s,offsetY:c},{originX:n,originY:R,overlayX:T,overlayY:r,offsetY:-c},{originX:i,originY:R,overlayX:N,overlayY:r,offsetY:-c}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments();return PG(e,this._parentMaterialMenu?this._parentMaterialMenu.closed:x(),this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Fe$1(s=>this._menuOpen&&s!==this._menuItemInstance)):x(),t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new rc(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return u.get(e)===this}_triggerIsAriaDisabled(){return Ve(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){$d()};static ɵdir=j({type:a})}return a})();var Bt$1=(()=>{class a extends rt$2{_cleanupTouchstart;_hoverSubscription=se.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new fe;onMenuOpen=this.menuOpened;menuClosed=new fe;onMenuClose=this.menuClosed;constructor(){super(!0);let e=m$1(gt$1);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{qf(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Kf(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||a)};static ɵdir=j({type:a,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&Gt$1(`click`,function(s){return n._handleClick(s)})(`mousedown`,function(s){return n._handleMousedown(s)})(`keydown`,function(s){return n._handleKeydown(s)}),t&2&&Zn(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[$e$2]})}return a})();var Lt$1=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=_e$1({type:a});static ɵinj=he({imports:[ip,$D,Dn$1,MD]})}return a})();var qe=class{_box;_destroyed=new R;_resizeSubject=new R;_resizeObserver;_elementObservables=new Map;constructor(e){this._box=e,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(e){return this._elementObservables.has(e)||this._elementObservables.set(e,new V(t=>{let i=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(e,{box:this._box}),()=>{this._resizeObserver?.unobserve(e),i.unsubscribe(),this._elementObservables.delete(e)}}).pipe(Fe$1(t=>t.some(i=>i.target===e)),Py({bufferSize:1,refCount:!0}),pn$2(this._destroyed))),this._elementObservables.get(e)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var cn$1=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=m$1(ee$1);constructor(){}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,i){let r=i?.box||`content-box`;return this._observers.has(r)||this._observers.set(r,new qe(r)),this._observers.get(r).observe(t)}static ɵfac=function(i){return new(i||n)};static ɵprov=w({token:n,factory:n.ɵfac})}return n})();var Jn=[`notch`];var ei=[`*`];var fn=[`iconPrefixContainer`];var un$1=[`textPrefixContainer`];var mn$1=[`iconSuffixContainer`];var hn=[`textSuffixContainer`];var ti=[`textField`];var ni=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var ii=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function ri(n,e){n&1&&Ai$1(0,`span`,21)}function oi(n,e){if(n&1&&($r(0,`label`,20),Xt$1(1,1),Xn$1(2,ri,1,0,`span`,21),Yr()),n&2){let t=Wr(2);ml(`floating`,t._shouldLabelFloat())(`monitorResize`,t._hasOutline())(`id`,t._labelId),Zn(`for`,t._control.disableAutomaticLabeling?null:t._control.id),_t$1(2),Qn$1(!t.hideRequiredMarker&&t._control.required?2:-1)}}function ai(n,e){if(n&1&&Xn$1(0,oi,3,5,`label`,20),n&2)Qn$1(Wr()._hasFloatingLabel()?0:-1)}function di(n,e){n&1&&Ai$1(0,`div`,7)}function li(n,e){}function si(n,e){if(n&1&&qm(0,li,0,0,`ng-template`,13),n&2){Wr(2);ml(`ngTemplateOutlet`,ZW(1))}}function ci(n,e){if(n&1&&($r(0,`div`,9),Xn$1(1,si,1,1,null,13),Yr()),n&2){let t=Wr();ml(`matFormFieldNotchedOutlineOpen`,t._shouldLabelFloat()),_t$1(),Qn$1(t._forceDisplayInfixLabel()?-1:1)}}function fi(n,e){n&1&&($r(0,`div`,10,2),Xt$1(2,2),Yr())}function ui(n,e){n&1&&($r(0,`div`,11,3),Xt$1(2,3),Yr())}function mi(n,e){}function hi(n,e){if(n&1&&qm(0,mi,0,0,`ng-template`,13),n&2){Wr();ml(`ngTemplateOutlet`,ZW(1))}}function pi(n,e){n&1&&($r(0,`div`,14,4),Xt$1(2,4),Yr())}function gi(n,e){n&1&&($r(0,`div`,15,5),Xt$1(2,5),Yr())}function bi(n,e){n&1&&Ai$1(0,`div`,16)}function vi(n,e){n&1&&($r(0,`div`,18),Xt$1(1,6),Yr())}function yi(n,e){if(n&1&&($r(0,`mat-hint`,22),gs(1),Yr()),n&2){let t=Wr(2);ml(`id`,t._hintLabelId),_t$1(),W0(t.hintLabel)}}function _i(n,e){if(n&1&&($r(0,`div`,19),Xn$1(1,yi,2,2,`mat-hint`,22),Xt$1(2,7),Ai$1(3,`div`,23),Xt$1(4,8),Yr()),n&2){let t=Wr();_t$1(),Qn$1(t.hintLabel?1:-1)}}var We=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=j({type:n,selectors:[[`mat-label`]]})}return n})();var xn=new b(`MatError`);var xi=(()=>{class n{id=m$1(ko).getId(`mat-mdc-error-`);static ɵfac=function(i){return new(i||n)};static ɵdir=j({type:n,selectors:[[`mat-error`],[``,`matError`,``]],hostAttrs:[1,`mat-mdc-form-field-error`,`mat-mdc-form-field-bottom-align`],hostVars:1,hostBindings:function(i,r){i&2&&gl(`id`,r.id)},inputs:{id:`id`},features:[vn$1([{provide:xn,useExisting:n}])]})}return n})();var Ge=(()=>{class n{align=`start`;id=m$1(ko).getId(`mat-mdc-hint-`);static ɵfac=function(i){return new(i||n)};static ɵdir=j({type:n,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(i,r){i&2&&(gl(`id`,r.id),Zn(`align`,null),ut$1(`mat-mdc-form-field-hint-end`,r.align===`end`))},inputs:{align:`align`,id:`id`}})}return n})();var Sn=new b(`MatPrefix`);var Si=(()=>{class n{set _isTextSelector(t){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||n)};static ɵdir=j({type:n,selectors:[[``,`matPrefix`,``],[``,`matIconPrefix`,``],[``,`matTextPrefix`,``]],inputs:{_isTextSelector:[0,`matTextPrefix`,`_isTextSelector`]},features:[vn$1([{provide:Sn,useExisting:n}])]})}return n})();var Nn=new b(`MatSuffix`);var Ni=(()=>{class n{set _isTextSelector(t){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||n)};static ɵdir=j({type:n,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[vn$1([{provide:Nn,useExisting:n}])]})}return n})();var wn=new b(`FloatingLabelParent`);var pn$1=(()=>{class n{_elementRef=m$1(le);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=m$1(cn$1);_ngZone=m$1(ee$1);_parent=m$1(wn);_resizeSubscription=new se;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return wi(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(i){return new(i||n)};static ɵdir=j({type:n,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(i,r){i&2&&ut$1(`mdc-floating-label--float-above`,r.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return n})();function wi(n){let e=n;if(e.offsetParent!==null)return e.scrollWidth;let t=e.cloneNode(!0);t.style.setProperty(`position`,`absolute`),t.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(t);let i=t.scrollWidth;return t.remove(),i}var gn=`mdc-line-ripple--active`;var pe=`mdc-line-ripple--deactivating`;var bn=(()=>{class n{_elementRef=m$1(le);_cleanupTransitionEnd;constructor(){let t=m$1(ee$1),i=m$1(gt$1);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(pe),t.add(gn)}deactivate(){this._elementRef.nativeElement.classList.add(pe)}_handleTransitionEnd=t=>{let i=this._elementRef.nativeElement.classList,r=i.contains(pe);t.propertyName===`opacity`&&r&&i.remove(gn,pe)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(i){return new(i||n)};static ɵdir=j({type:n,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return n})();var vn=(()=>{class n{_elementRef=m$1(le);_ngZone=m$1(ee$1);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,i=t.querySelector(`.mdc-floating-label`);i?(t.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(i.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration=``)}))):t.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(t){let i=this._notch.nativeElement;!this.open||!t?i.style.width=``:i.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${t}px)`)}static ɵfac=function(i){return new(i||n)};static ɵcmp=Ue({type:n,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(i,r){if(i&1&&ms(Jn,5),i&2){let o;Ri$1(o=Ci$1())&&(r._notch=o.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(i,r){i&2&&ut$1(`mdc-notched-outline--notched`,r.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:ei,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(i,r){i&1&&(Er(),Di$1(0,`div`,1),Jn$1(1,`div`,2,0),Xt$1(3),er$1(),Di$1(4,`div`,3))},encapsulation:2})}return n})();var Mi=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(i){return new(i||n)};static ɵdir=j({type:n})}return n})();var Ci=new b(`MatFormField`);var Ei=new b(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var yn=`fill`;var Fi=`auto`;var _n=`fixed`;var Ri=`translateY(-50%)`;var Mn=(()=>{class n{_elementRef=m$1(le);_changeDetectorRef=m$1(Qt$1);_platform=m$1(ze);_idGenerator=m$1(ko);_ngZone=m$1(ee$1);_defaults=m$1(Ei,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=tge(`iconPrefixContainer`);_textPrefixContainerSignal=tge(`textPrefixContainer`);_iconSuffixContainerSignal=tge(`iconSuffixContainer`);_textSuffixContainerSignal=tge(`textSuffixContainer`);_prefixSuffixContainers=pe$1(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=nge(We);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=DNe(t)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Fi}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let i=t||this._defaults?.appearance||yn;this._appearanceSignal.set(i)}_appearanceSignal=I$2(yn);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||_n}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||_n}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new R;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Jr();constructor(){let t=this._defaults,i=m$1(su);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),Bt$2(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=pe$1(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(t){let i=this._control,r=`mat-mdc-form-field-type-`;t&&this._elementRef.nativeElement.classList.remove(r+t.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Qo([void 0,void 0]),ae$1(()=>[i.errorState,i.userAriaDescribedBy]),Oy(),Fe$1(([[o,a],[l,s]])=>o!==l||a!==s)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(pn$2(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),PG(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._control.focused;t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,t),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,t)}_syncOutlineLabelOffset(){ige({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=pe$1(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(t){let i=this._control?this._control.ngControl:null;return i&&i[t]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&t.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let o=this._hintChildren?this._hintChildren.find(l=>l.align===`start`):null,a=this._hintChildren?this._hintChildren.find(l=>l.align===`end`):null;o?t.push(o.id):this._hintLabel&&t.push(this._hintLabelId),a&&t.push(a.id)}else this._errorChildren&&t.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||t;r=t.concat(i.filter(a=>a&&!o.includes(a)))}else r=t;this._control.setDescribedByIds(r),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=t?.getBoundingClientRect().width??0,l=i?.getBoundingClientRect().width??0,s=r?.getBoundingClientRect().width??0,u=o?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${Ri} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${a+l}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,a+l+s+u]}_writeOutlinedLabelStyles(t){if(t!==null){let[i,r]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let i=t.getRootNode();return i&&i!==t}return document.documentElement.contains(t)}static ɵfac=function(i){return new(i||n)};static ɵcmp=Ue({type:n,selectors:[[`mat-form-field`]],contentQueries:function(i,r,o){if(i&1&&(F0(o,r._labelChild,We,5),Qm(o,Mi,5)(o,Sn,5)(o,Nn,5)(o,xn,5)(o,Ge,5)),i&2){qW();let a;Ri$1(a=Ci$1())&&(r._formFieldControl=a.first),Ri$1(a=Ci$1())&&(r._prefixChildren=a),Ri$1(a=Ci$1())&&(r._suffixChildren=a),Ri$1(a=Ci$1())&&(r._errorChildren=a),Ri$1(a=Ci$1())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(U0(r._iconPrefixContainerSignal,fn,5)(r._textPrefixContainerSignal,un$1,5)(r._iconSuffixContainerSignal,mn$1,5)(r._textSuffixContainerSignal,hn,5),ms(ti,5)(fn,5)(un$1,5)(mn$1,5)(hn,5)(pn$1,5)(vn,5)(bn,5)),i&2){qW(4);let o;Ri$1(o=Ci$1())&&(r._textField=o.first),Ri$1(o=Ci$1())&&(r._iconPrefixContainer=o.first),Ri$1(o=Ci$1())&&(r._textPrefixContainer=o.first),Ri$1(o=Ci$1())&&(r._iconSuffixContainer=o.first),Ri$1(o=Ci$1())&&(r._textSuffixContainer=o.first),Ri$1(o=Ci$1())&&(r._floatingLabel=o.first),Ri$1(o=Ci$1())&&(r._notchedOutline=o.first),Ri$1(o=Ci$1())&&(r._lineRipple=o.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(i,r){i&2&&ut$1(`mat-mdc-form-field-label-always-float`,r._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,r._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,r._hasIconSuffix)(`mat-form-field-invalid`,r._control.errorState)(`mat-form-field-disabled`,r._control.disabled)(`mat-form-field-autofilled`,r._control.autofilled)(`mat-form-field-appearance-fill`,r.appearance==`fill`)(`mat-form-field-appearance-outline`,r.appearance==`outline`)(`mat-form-field-hide-placeholder`,r._hasFloatingLabel()&&!r._shouldLabelFloat())(`mat-primary`,r.color!==`accent`&&r.color!==`warn`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`ng-untouched`,r._shouldForward(`untouched`))(`ng-touched`,r._shouldForward(`touched`))(`ng-pristine`,r._shouldForward(`pristine`))(`ng-dirty`,r._shouldForward(`dirty`))(`ng-valid`,r._shouldForward(`valid`))(`ng-invalid`,r._shouldForward(`invalid`))(`ng-pending`,r._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[vn$1([{provide:Ci,useExisting:n},{provide:wn,useExisting:n}])],ngContentSelectors:ii,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(i,r){if(i&1&&(Er(ni),qm(0,ai,1,1,`ng-template`,null,0,Vz),$r(2,`div`,6,1),Gt$1(`click`,function(a){return r._control.onContainerClick(a)}),Xn$1(4,di,1,0,`div`,7),$r(5,`div`,8),Xn$1(6,ci,2,2,`div`,9),Xn$1(7,fi,3,0,`div`,10),Xn$1(8,ui,3,0,`div`,11),$r(9,`div`,12),Xn$1(10,hi,1,1,null,13),Xt$1(11),Yr(),Xn$1(12,pi,3,0,`div`,14),Xn$1(13,gi,3,0,`div`,15),Yr(),Xn$1(14,bi,1,0,`div`,16),Yr(),$r(15,`div`,17),Xn$1(16,vi,2,0,`div`,18)(17,_i,5,1,`div`,19),Yr()),i&2){let o;_t$1(2),ut$1(`mdc-text-field--filled`,!r._hasOutline())(`mdc-text-field--outlined`,r._hasOutline())(`mdc-text-field--no-label`,!r._hasFloatingLabel())(`mdc-text-field--disabled`,r._control.disabled)(`mdc-text-field--invalid`,r._control.errorState),_t$1(2),Qn$1(!r._hasOutline()&&!r._control.disabled?4:-1),_t$1(2),Qn$1(r._hasOutline()?6:-1),_t$1(),Qn$1(r._hasIconPrefix?7:-1),_t$1(),Qn$1(r._hasTextPrefix?8:-1),_t$1(2),Qn$1(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),_t$1(2),Qn$1(r._hasTextSuffix?12:-1),_t$1(),Qn$1(r._hasIconSuffix?13:-1),_t$1(),Qn$1(r._hasOutline()?-1:14),_t$1(),ut$1(`mat-mdc-form-field-subscript-dynamic-size`,r.subscriptSizing===`dynamic`);let a=r._getSubscriptMessageType();_t$1(),Qn$1((o=a)===`error`?16:o===`hint`?17:-1)}},dependencies:[pn$1,vn,jK,bn,Ge],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return n})();var Br=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=_e$1({type:n});static ɵinj=he({imports:[cU,Mn,Dn$1]})}return n})();var Tn=Symbol(`FIELD_TREE`);var $e=0;function Ti(){return $e}function A(n,e){return(...t)=>{try{return $e=e,n(...t)}finally{$e=0}}}function Di(n){return!n}function Cn(n){return n}function O(n){return Array.isArray(n)}function be(n){return(typeof n==`object`||typeof n==`function`)&&n!=null}var B=Symbol();var Me=Symbol();var ie=class{predicates;fns=[];constructor(e){this.predicates=e}push(e){this.fns.push(En(this.predicates,e))}mergeIn(e){let t=this.predicates?e.fns.map(i=>En(this.predicates,i)):e.fns;this.fns.push(...t)}hasRules(){return this.fns.length>0}};var ve=class extends ie{get defaultValue(){return!1}compute(e){return this.fns.some(t=>{let i=t(e);return i&&i!==Me})}};var q=class n extends ie{ignore;static ignoreNull(e){return new n(e,t=>t===null)}constructor(e,t){super(e),this.ignore=t}get defaultValue(){return[]}compute(e){return this.fns.reduce((t,i)=>{let r=i(e);return r===void 0||r===Me?t:O(r)?[...t,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?t:[...t,r]},[])}};var Qe=class extends q{constructor(e){super(e,void 0)}};var Ye=class extends ie{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(e,t){super(e),this.key=t}compute(e){if(this.fns.length===0)return this.key.reducer.getInitial();let t=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let r=this.fns[i](e);r!==Me&&(t=this.key.reducer.reduce(t,r))}return t}};function En(n,e){return n.length===0?e:t=>{for(let i of n){let r=t.stateOf(i.path),o=U$1(r.structure.pathKeys).length-i.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!i.fn(r.context))return Me}return e(t)}}var U=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(e){this.predicates=e,this.hidden=new ve(e),this.disabledReasons=new Qe(e),this.readonly=new ve(e),this.syncErrors=q.ignoreNull(e),this.syncTreeErrors=q.ignoreNull(e),this.asyncErrors=q.ignoreNull(e)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(e){return this.metadata.has(e)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(e){return this.metadata.has(e)||this.metadata.set(e,new Ye(this.predicates,e)),this.metadata.get(e)}mergeIn(e){this.hidden.mergeIn(e.hidden),this.disabledReasons.mergeIn(e.disabledReasons),this.readonly.mergeIn(e.readonly),this.syncErrors.mergeIn(e.syncErrors),this.syncTreeErrors.mergeIn(e.syncTreeErrors),this.asyncErrors.mergeIn(e.asyncErrors);for(let t of e.getMetadataKeys()){let i=e.metadata.get(t);this.getMetadata(t).mergeIn(i)}}};var ye=class{depth;constructor(e){this.depth=e}build(){return new _e(this,[],0)}};var W$1=class n extends ye{constructor(e){super(e)}current;all=[];addHiddenRule(e){this.getCurrent().addHiddenRule(e)}addDisabledReasonRule(e){this.getCurrent().addDisabledReasonRule(e)}addReadonlyRule(e){this.getCurrent().addReadonlyRule(e)}addSyncErrorRule(e){this.getCurrent().addSyncErrorRule(e)}addSyncTreeErrorRule(e){this.getCurrent().addSyncTreeErrorRule(e)}addAsyncErrorRule(e){this.getCurrent().addAsyncErrorRule(e)}addMetadataRule(e,t){this.getCurrent().addMetadataRule(e,t)}getChild(e){if(e===B){let t=this.getCurrent().children;t.size>(t.has(B)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(e)}hasLogic(e){return this===e?!0:this.all.some(({builder:t})=>t.hasLogic(e))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:e})=>e.anyChildHasLogic())}mergeIn(e,t){t?this.all.push({builder:e,predicate:{fn:A(t.fn,this.depth),path:t.path}}):this.all.push({builder:e}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new re$1(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new n(0)}};var re$1=class extends ye{logic=new U([]);children=new Map;constructor(e){super(e)}addHiddenRule(e){this.logic.hidden.push(A(e,this.depth))}addDisabledReasonRule(e){this.logic.disabledReasons.push(A(e,this.depth))}addReadonlyRule(e){this.logic.readonly.push(A(e,this.depth))}addSyncErrorRule(e){this.logic.syncErrors.push(A(e,this.depth))}addSyncTreeErrorRule(e){this.logic.syncTreeErrors.push(A(e,this.depth))}addAsyncErrorRule(e){this.logic.asyncErrors.push(A(e,this.depth))}addMetadataRule(e,t){this.logic.getMetadata(e).push(A(t,this.depth))}getChild(e){return this.children.has(e)||this.children.set(e,new W$1(this.depth+1)),this.children.get(e)}hasLogic(e){return this===e}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let e of this.children.values())if(e.hasRules())return!0;return!1}};var _e=class n{builder;predicates;depth;logic;constructor(e,t,i){this.builder=e,this.predicates=t,this.depth=i,this.logic=e?Ai(e,t,i):new U([])}getChild(e){let t=this.builder?Dn(this.builder,e):[];if(t.length===0)return new n(void 0,[],this.depth+1);if(t.length===1){let{builder:i,predicates:r}=t[0];return new n(i,[...this.predicates,...r.map(o=>Ze(o,this.depth))],this.depth+1)}else return new Xe(t.map(({builder:r,predicates:o})=>new n(r,[...this.predicates,...o.map(a=>Ze(a,this.depth))],this.depth+1)))}hasLogic(e){return this.builder?this.builder.hasLogic(e):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}};var Xe=class n{all;logic;constructor(e){this.all=e,this.logic=new U([]);for(let t of e)this.logic.mergeIn(t.logic)}getChild(e){return new n(this.all.flatMap(t=>t.getChild(e)))}hasLogic(e){return this.all.some(t=>t.hasLogic(e))}hasRules(){return this.all.some(e=>e.hasRules())}anyChildHasLogic(){return this.all.some(e=>e.anyChildHasLogic())}};function Dn(n,e){if(n instanceof W$1)return n.all.flatMap(({builder:t,predicate:i})=>{let r=Dn(t,e);return i?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,i]})):r});if(n instanceof re$1)return[...e!==B&&n.children.has(B)?[{builder:n.getChild(B),predicates:[]}]:[],...n.children.has(e)?[{builder:n.getChild(e),predicates:[]}]:[]];throw new T$1(1909,!1)}function Ai(n,e,t){let i=new U(e);if(n instanceof W$1){let r=n.all.map(({builder:o,predicate:a})=>new _e(o,a?[...e,Ze(a,t)]:e,t));for(let o of r)i.mergeIn(o.logic)}else if(n instanceof re$1)i.mergeIn(n.logic);else throw new T$1(1909,!1);return i}function Ze(n,e){return m(l({},n),{depth:e})}var An=Symbol(`PATH`);var F=class n{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,Oi);logicBuilder;constructor(e,t,i,r){this.keys=e,this.parent=i,this.keyInParent=r,this.root=t??this,i||(this.logicBuilder=W$1.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(e){return this.children.has(e)||this.children.set(e,new n([...this.keys,e],this.root,this,e)),this.children.get(e)}mergeIn(e,t){let i=e.compile();this.builder.mergeIn(i.builder,t)}static unwrapFieldPath(e){return e[An]}static newRoot(){return new n([],void 0,void 0,void 0)}};var Oi={get(n,e){return e===An?n:n.getChild(e).fieldPathProxy}};var ge;var ne=new Map;var xe=class n{schemaFn;constructor(e){this.schemaFn=e}compile(){if(ne.has(this))return ne.get(this);let e=F.newRoot();ne.set(this,e);let t=ge;try{ge=e,this.schemaFn(e.fieldPathProxy)}finally{ge=t}return e}static create(e){return e instanceof n?e:new n(e)}static rootCompile(e){try{return ne.clear(),e===void 0?F.newRoot():e instanceof n?e.compile():new n(e).compile()}finally{ne.clear()}}};function Ii(n){return n instanceof xe||typeof n==`function`}function Ce(n){if(ge!==F.unwrapFieldPath(n).root)throw new T$1(1908,!1)}function ae(n,e,t){return Ce(n),F.unwrapFieldPath(n).builder.addMetadataRule(e,t),e}var G={list(){return{reduce:(n,e)=>e===void 0?n:[...n,e],getInitial:()=>[]}},min(){return{reduce:(n,e)=>n===void 0||e===void 0?n??e:e<n?e:n,getInitial:()=>{}}},max(){return{reduce:(n,e)=>n===void 0||e===void 0?n??e:e>n?e:n,getInitial:()=>{}}},or(){return{reduce:(n,e)=>n||e,getInitial:()=>!1}},and(){return{reduce:(n,e)=>n&&e,getInitial:()=>!0}},override:Pi};function Pi(n){return{reduce:(e,t)=>t,getInitial:()=>n?.()}}var st=Symbol(`IS_ASYNC_VALIDATION_RESOURCE`);var Se=class{reducer;create;brand;[st];constructor(e,t){this.reducer=e,this.create=t}};function T(n){return new Se(n??G.override())}function ct$1(){return T()}var ft=T(G.or());var On=ct$1();var In=ct$1();var Pn=T(G.max());var kn=T(G.min());var ut=T(G.list());function S(n,e){if(n===e)return!0;if(!n||!e||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(!Object.is(n[t],e[t]))return!1;return!0}function ki(n){return n.errors().length>0?`invalid`:n.pending()?`unknown`:`valid`}var Je=class{node;constructor(e){this.node=e}rawSyncTreeErrors=pe$1(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:S});syncErrors=pe$1(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...Li(this.node.submitState.submissionErrors())],{equal:S});syncValid=pe$1(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(e,t)=>t&&e.validationState.syncValid(),Di));syncTreeErrors=pe$1(()=>this.rawSyncTreeErrors().filter(e=>e.fieldTree===this.node.fieldTree),{equal:S});rawAsyncErrors=pe$1(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:S});asyncErrors=pe$1(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(e=>e===`pending`||e.fieldTree===this.node.fieldTree),{equal:S});parseErrors=pe$1(()=>this.node.formFieldBindings().flatMap(e=>e.parseErrors()),{equal:S});errors=pe$1(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(e=>e!==`pending`)],{equal:S});errorSummary=pe$1(()=>{let e=this.node.structure.reduceChildren(this.errors(),(t,i)=>[...i,...t.errorSummary()]);return U$1(()=>e.sort(zi)),e},{equal:S});pending=pe$1(()=>this.node.structure.reduceChildren(this.asyncErrors().includes(`pending`),(e,t)=>t||e.validationState.pending()));status=pe$1(()=>{if(this.shouldSkipValidation())return`valid`;let e=ki(this);return this.node.structure.reduceChildren(e,(t,i)=>i===`invalid`||t.validationState.status()===`invalid`?`invalid`:i===`unknown`||t.validationState.status()===`unknown`?`unknown`:`valid`,t=>t===`invalid`)});valid=pe$1(()=>this.status()===`valid`);invalid=pe$1(()=>this.status()===`invalid`);shouldSkipValidation=pe$1(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function Li(n){return n===void 0?[]:O(n)?n:[n]}function Ln(n,e){if(O(n))for(let t of n)t.fieldTree??=e;else n&&(n.fieldTree??=e);return n}function Fn(n){return n.formField?n.formField.element:n.fieldTree().formFieldBindings().reduce((e,t)=>!e||!t.element?e??t.element:e.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t.element:e,void 0)}function zi(n,e){let t=Fn(n),i=Fn(e);return t===i?0:t===void 0||i===void 0?t===void 0?1:-1:t.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var et$1=T();var tt=class{node;cache=new WeakMap;constructor(e){this.node=e,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(e){if(!this.cache.has(e)){let t=pe$1(()=>{let i=F.unwrapFieldPath(e),r=this.node,o=Ti();for(;o>0||!r.structure.logic.hasLogic(i.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new T$1(1900,!1);for(let a of i.keys)if(r=r.structure.getChild(a),r===void 0)throw new T$1(1901,!1);return r.fieldTree});this.cache.set(e,t)}return this.cache.get(e)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=pe$1(()=>{let e=this.key();if(!O(U$1(this.node.structure.parent.value)))throw new T$1(1906,!1);return Number(e)});fieldTreeOf(e){return this.resolve(e)}stateOf(e){return this.resolve(e)()}valueOf=e=>{let t=this.resolve(e)().value();if(t instanceof c_)throw new T$1(1907,!1);return t}};var nt$1=class{node;metadata=new Map;constructor(e){this.node=e}runMetadataCreateLifecycle(){if(!this.node.logicNode.logic.hasMetadataKeys())return;let e=cP();e&&UT(!1);try{U$1(()=>wt$1(this.node.structure.injector,()=>{for(let t of this.node.logicNode.logic.getMetadataKeys())if(t.create){let i=this.node.logicNode.logic.getMetadata(t),r=t.create(this.node,pe$1(()=>i.compute(this.node.context)));this.metadata.set(t,r)}}))}finally{e&&UT(!0)}}get(e){if(this.has(e)&&!this.metadata.has(e)){if(e.create)throw new T$1(1912,!1);let t=this.node.logicNode.logic.getMetadata(e);this.metadata.set(e,pe$1(()=>t.compute(this.node.context)))}return this.metadata.get(e)}has(e){return this.node.logicNode.logic.hasMetadata(e)}};var Vi={get(n,e,t){if(e===Tn)return!0;let i=n(),r=i.structure.getChild(e);if(r!==void 0)return r.fieldTree;let o=U$1(i.value);if(O(o)){if(e===`length`)return i.value().length;if(e===Symbol.iterator)return()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(be(o)&&e===Symbol.iterator)return function*(){for(let a in t)yield[a,t[a]]}},getOwnPropertyDescriptor(n,e){let t=U$1(n().value),i=Reflect.getOwnPropertyDescriptor(t,e);return i&&!i.configurable&&(i.configurable=!0),i},ownKeys(n){let e=U$1(n().value);return typeof e==`object`&&e!==null?Reflect.ownKeys(e):[]}};function Bi(n,e){let t=pe$1(()=>n()[e()]);return t[qe$1]=n[qe$1],t.set=i=>{Object.is(U$1(t),i)||n.update(r=>ji(r,i,e()))},t.update=i=>{t.set(i(U$1(t)))},t.asReadonly=()=>t,t}function ji(n,e,t){if(O(n)){let i=[...n];return i[t]=e,i}else return m(l({},n),{[t]:e})}var H=Symbol(``);var zn=pe$1(()=>!1);var Ne=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=J$2.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(e,t,i){this.logic=e,this.node=t,this.createChildNode=i}children(){this.ensureChildrenMap();let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>U$1(t.reader))}materializedChildren(){let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>t.node)}_areChildrenMaterialized(){return U$1(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||U$1(()=>{this.childrenMap.update(e=>this.computeChildrenMap(this.value(),e,!0))})}getChild(e){this.ensureChildrenMap();let t=e.toString(),i=U$1(this.childrenMap)?.byPropertyKey.get(t)?.reader;return i||(i=this.createReader(t)),i()}reduceChildren(e,t,i){let r=this.childrenMap();if(!r)return e;let o=e;for(let a of r.byPropertyKey.values()){if(i?.(o))break;o=t(U$1(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(e,t,i){if(e===`root`)return{keyInParent:Vn,isOrphaned:zn};let r=this.parent,o=i,a=pe$1(()=>{if(r.structure.isOrphaned())return H;let u=r.structure.childrenMap();if(!u)return H;let x=u.byPropertyKey.get(o);if(x&&x.node===this.node)return o;if(t===void 0)return H;for(let[$,R]of u.byPropertyKey)if(R.node===this.node)return o=$;return H}),l=pe$1(()=>a()===H);return{keyInParent:pe$1(()=>{let u=a();if(u===H)throw t===void 0?new T$1(-1902,!1):new T$1(1904,!1);return u}),isOrphaned:l}}createChildrenMap(){return Zd({source:this.value,computation:(e,t)=>this.computeChildrenMap(e,t?.value,!1)})}computeChildrenMap(e,t,i){if(!be(e)||!i&&t===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;t??={byPropertyKey:new Map};let r,o=O(e);t!==void 0&&(o?r=Hi(t,e,this.identitySymbol):r=qi(t,e));for(let a of Object.keys(e)){let l$1,s=e[a];if(s===void 0){t.byPropertyKey.has(a)&&(r??=l({},t),r.byPropertyKey.delete(a));continue}o&&be(s)&&!O(s)&&(l$1=s[this.identitySymbol]??=Symbol(``));let u;l$1&&(t.byTrackingKey?.has(l$1)||(r??=l({},t),r.byTrackingKey??=new Map,r.byTrackingKey.set(l$1,this.createChildNode(a,l$1,o))),u=(r??t).byTrackingKey.get(l$1));let x=t.byPropertyKey.get(a);x===void 0?(r??=l({},t),r.byPropertyKey.set(a,{reader:this.createReader(a),node:u??this.createChildNode(a,l$1,o)})):u&&u!==x.node&&(r??=l({},t),x.node=u)}return r??t}createReader(e){return pe$1(()=>this.childrenMap()?.byPropertyKey.get(e)?.node)}};var it$1=class extends Ne{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return Ki}get keyInParent(){return Vn}isOrphaned=zn;childrenMap;constructor(e,t,i,r,o){super(t,e,o),this.fieldManager=i,this.value=r,this.childrenMap=this.createChildrenMap()}};var rt$1=class extends Ne{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(e,t,i,r,o,a){super(t,e,a),this.logic=t,this.parent=i,this.root=this.parent.structure.root;let l=this.createKeyOrOrphanSignals(`child`,r,o);this.isOrphaned=l.isOrphaned,this.keyInParent=l.keyInParent,this.pathKeys=pe$1(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=Bi(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var Ki=pe$1(()=>[]);var Vn=pe$1(()=>{throw new T$1(1905,!1)});function Hi(n,e,t){let i,r=new Set(n.byPropertyKey.keys()),o=n.byTrackingKey&&new Set(n.byTrackingKey.keys());for(let a=0;a<e.length;a++){let l=e[a];r.delete(a.toString()),o&&be(l)&&Object.hasOwn(l,t)&&o.delete(l[t])}if(r.size>0){i??=l({},n);for(let a of r)i.byPropertyKey.delete(a)}if(o&&o.size>0){i??=l({},n);for(let a of o)i.byTrackingKey.delete(a)}return i}function qi(n,e){let t;for(let i of n.byPropertyKey.keys())Object.hasOwn(e,i)||(t??=l({},n),t.byPropertyKey.delete(i));return t}var ot=class{node;selfSubmitting=I$2(!1);submissionErrors;constructor(e){this.node=e,this.submissionErrors=Zd({source:this.node.structure.value,computation:()=>[]})}submitting=pe$1(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))};var oe=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new tt(this)}fieldProxy=new Proxy(()=>this,Vi);pathNode;constructor(e){this.pathNode=e.pathNode,this.fieldAdapter=e.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,e),this.validationState=this.fieldAdapter.createValidationState(this,e),this.nodeState=this.fieldAdapter.createNodeState(this,e),this.metadataState=new nt$1(this),this.submitState=new ot(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(e){this.getBindingForFocus()?.focus(e)}getBindingForFocus(){return this.formFieldBindings().filter(t=>t.focus!==void 0).reduce(Rn,void 0)||this.structure.children().map(t=>t.getBindingForFocus()).reduce(Rn,void 0)}pendingSync=Zd({source:()=>this.value(),computation:(e,t)=>{t?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let e=this.metadata(In)?.();return e?this.metadata(e):void 0}get maxLength(){return this.metadata(kn)}get min(){let e=this.metadata(On)?.();return e?this.metadata(e):void 0}get minLength(){return this.metadata(Pn)}get pattern(){return this.metadata(ut)??Ui}get required(){return this.metadata(ft)??Wi}metadata(e){return this.metadataState.get(e)}getError(e){return this.errors().find(t=>t.kind===e)}hasMetadata(e){return this.metadataState.has(e)}markAsTouched(e){this.structure.isOrphaned()||U$1(()=>{this.markAsTouchedInternal(e),this.flushSync()})}markAsTouchedInternal(e){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!e?.skipDescendants))for(let t of this.structure.children())t.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(e){U$1(()=>this._reset(e))}_reset(e){this.pendingSync()?.abort(),e!==void 0&&this.value.set(e),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let t of this.formFieldBindings())t.reset();for(let t of this.structure.materializedChildren())t._reset()}reloadValidation(){U$1(()=>this._reloadValidation())}_reloadValidation(){let e=this.logicNode.logic.getMetadataKeys();for(let t of e)t[st]&&this.metadata(t).reload?.();for(let t of this.structure.children())t._reloadValidation()}controlValueSignal(){let e=Zd(this.value);e.rawSet=e.set,e.set=i=>{e.rawSet(i),this.markAsDirty(),this.debounceSync()};let t=e.update;return e.update=i=>{t(i),this.markAsDirty(),this.debounceSync()},e}sync(){this.value.set(this.controlValue())}flushSync(){let e=this.pendingSync();e&&!e.signal.aborted&&(e.abort(),this.sync())}async debounceSync(){let e=U$1(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(e){let t=new AbortController,i=e(t.signal);if(i&&(this.pendingSync.set(t),await i,t.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(e,t,i,r){return r.newRoot(e,t,i,r)}createStructure(e){return e.kind===`root`?new it$1(this,e.logic,e.fieldManager,e.value,this.newChild.bind(this)):new rt$1(this,e.logic,e.parent,e.identityInParent,e.initialKeyInParent,this.newChild.bind(this))}newChild(e,t,i){let r,o;return i?(r=this.pathNode.getChild(B),o=this.structure.logic.getChild(B)):(r=this.pathNode.getChild(e),o=this.structure.logic.getChild(e)),this.fieldAdapter.newChild({kind:`child`,parent:this,pathNode:r,logic:o,initialKeyInParent:e,identityInParent:t,fieldAdapter:this.fieldAdapter})}};var Ui=pe$1(()=>[]);var Wi=pe$1(()=>!1);function Rn(n,e){return n?e&&n.element.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e:n:e}var at$1=class{node;selfTouched=I$2(!1);selfDirty=I$2(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=I$2([]);constructor(e){this.node=e}dirty=pe$1(()=>{let e=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,i)=>i||t.nodeState.dirty(),Cn)});touched=pe$1(()=>{let e=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,i)=>i||t.nodeState.touched(),Cn)});disabledReasons=pe$1(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:S});disabled=pe$1(()=>!!this.disabledReasons().length);readonly=pe$1(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=pe$1(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=pe$1(()=>{let e=this.node.structure.parent;return e?`${e.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=pe$1(()=>{if(this.node.logicNode.logic.hasMetadata(et$1)){let t=this.node.logicNode.logic.getMetadata(et$1).compute(this.node.context);if(t)return i=>t(this.node.context,i)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=pe$1(()=>this.hidden()||this.disabled()||this.readonly())};var dt$1=class{newRoot(e,t,i,r){return new oe({kind:`root`,fieldManager:e,value:t,pathNode:i,logic:i.builder.build(),fieldAdapter:r})}newChild(e){return new oe(e)}createNodeState(e){return new at$1(e)}createValidationState(e){return new Je(e)}createStructure(e,t){return e.createStructure(t)}};var lt$1=class{injector;rootName;submitOptions;constructor(e,t,i){this.injector=e,this.rootName=t??`${this.injector.get(yi$1)}.form${Gi++}`,this.submitOptions=i}structures=new Set;createFieldManagementEffect(e){Bt$2(()=>{let t=new Set;this.markStructuresLive(e,t);for(let i of this.structures)t.has(i)||(this.structures.delete(i),U$1(()=>i.destroy()))},{injector:this.injector})}markStructuresLive(e,t){t.add(e);for(let i of e.children())this.markStructuresLive(i.structure,t)}};var Gi=0;var Bn=new b(``);function $i(n){let e,t,i;return n.length===3?[e,t,i]=n:n.length===2?Ii(n[1])?[e,t]=n:[e,i]=n:[e]=n,[e,t,i]}function Qi(...n){let[e,t,i]=$i(n),r=i?.injector??m$1(J$2),o=wt$1(r,()=>xe.rootCompile(t)),a=new lt$1(r,i?.name,i?.submission),l=i?.adapter??new dt$1,s=oe.newRoot(a,e,o,l);a.createFieldManagementEffect(s.structure);let{experimentalWebMcpTool:u}=i??{};if(u){let x=wt$1(r,()=>m$1(Bn,{optional:!0}));x&&wt$1(r,()=>x(s.fieldTree,{name:u.name,description:u.description}))}return s.fieldTree}var we=class{kind=`compat`;control;fieldTree;context;message;constructor({context:e,kind:t,control:i}){this.context=e,this.kind=t,this.control=i}};function jn(n){if(n.length===0)return null;let e={};for(let t of n)e[t.kind]=t instanceof we?t.context:t;return e}function Kn(n,e){return n===null?[]:Object.entries(n).map(([t,i])=>new we({context:i,kind:t,control:e}))}var Yi=new b(``);function xo(n,e){Ce(n);let t=F.unwrapFieldPath(n),i;typeof e==`function`||typeof e==`string`?i=e:i=e?.when,t.builder.addDisabledReasonRule(r=>{let o=!0;return typeof i==`string`?o=i:i&&(o=i(r)),typeof o==`string`?{fieldTree:r.fieldTree,message:o}:o?{fieldTree:r.fieldTree}:void 0})}function Ee(n,e){return n instanceof Function?n(e):n}function Gn(n){return typeof n==`number`?isNaN(n):n===``||n===!1||n==null}function Hn(n){return n===void 0?[]:Array.isArray(n)?n:[n]}function $n(n,e){Ce(n),F.unwrapFieldPath(n).builder.addSyncErrorRule(i=>Ln(e(i),i.fieldTree))}function Xi(n){return new mt$1(n)}function Zi(n,e){return new ht$1(n,e)}var de=class{__brand=void 0;kind=``;fieldTree;message;constructor(e){e&&Object.assign(this,e)}};var mt$1=class extends de{kind=`required`};var ht$1=class extends de{pattern;kind=`pattern`;constructor(e,t){super(t),this.pattern=e}};var Fe=class extends de{kind=`parse`};function So(n,e,t){let i=ae(n,T(),r=>{if(!(t?.when&&!t.when(r)))return e instanceof RegExp?e:e(r)});ae(n,ut,({state:r})=>r.metadata(i)()),$n(n,r=>{if(Gn(r.value()))return;let o=r.state.metadata(i)();if(o!==void 0&&!o.test(r.value()))return t?.error?Ee(t.error,r):Zi(o,{message:Ee(t?.message,r)})})}function No(n,e){let t=ae(n,T(),i=>e?.when?e.when(i):!0);ae(n,ft,({state:i})=>i.metadata(t)()),$n(n,i=>{if(i.state.metadata(t)()&&Gn(i.value()))return e?.error?Ee(e.error,i):Xi({message:Ee(e?.message,i)})})}function Ji(n,e,t){let i=Zd({source:n,computation:()=>[],equal:S}),r=a=>{let l=t(a);i.set(Hn(l.error)),l.value!==void 0&&e(l.value),i.set(Hn(l.error))},o=()=>{i.set([])};return{errors:i.asReadonly(),setRawValue:r,reset:o}}var pt$1=class{field;constructor(e){this.field=e}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return jn(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return`DISABLED`;if(this.field().valid())return`VALID`;if(this.field().invalid())return`INVALID`;if(this.field().pending())return`PENDING`;throw new T$1(1910,!1)}valueAccessor=null;hasValidator(e){return e===qI.required?this.field().required():!1}updateValueAndValidity(){}};var gt={disabled:`disabled`,disabledReasons:`disabledReasons`,dirty:`dirty`,errors:`errors`,hidden:`hidden`,invalid:`invalid`,max:`max`,maxLength:`maxLength`,min:`min`,minLength:`minLength`,name:`name`,pattern:`pattern`,pending:`pending`,readonly:`readonly`,required:`required`,touched:`touched`};var er=(()=>{let n={};for(let e of Object.keys(gt))n[gt[e]]=e;return n})();function bt(n,e){return n[er[e]]?.()}var vt=Object.values(gt);function Re(){return{}}function I(n,e,t){return n[e]!==t?(n[e]=t,!0):!1}function tr(n,e,t){let i;if(Qn(n)&&t.isBadInput(n))return{error:new Fe};switch(n.type){case`checkbox`:return{value:n.checked};case`number`:case`range`:case`datetime-local`:if(i=U$1(e),typeof i==`number`||i===null)return{value:n.value===``?null:n.valueAsNumber};break;case`date`:case`month`:case`time`:case`week`:if(i=U$1(e),i===null||i instanceof Date)return{value:n.valueAsDate};if(typeof i==`number`)return{value:n.valueAsNumber};break}if(n.tagName===`INPUT`&&n.type===`text`&&(i??=U$1(e),typeof i==`number`||i===null)){if(n.value===``)return{value:null};let r=Number(n.value);return Number.isNaN(r)?{error:new Fe}:{value:r}}return{value:n.value}}function qn(n,e){switch(n.type){case`checkbox`:n.checked=e;return;case`radio`:n.checked=e===n.value;return;case`number`:case`range`:case`datetime-local`:if(typeof e==`number`){Un(n,e);return}else if(e===null){n.value=``;return}break;case`date`:case`month`:case`time`:case`week`:if(e===null||e instanceof Date){n.valueAsDate=e;return}else if(typeof e==`number`){Un(n,e);return}}if(n.tagName===`INPUT`&&n.type===`text`){if(typeof e==`number`){n.value=isNaN(e)?``:String(e);return}if(e===null){n.value=``;return}}n.value=e}function Un(n,e){isNaN(e)?n.value=``:n.valueAsNumber=e}function Qn(n){return n.tagName===`INPUT`}function nr(n){return n.type===`date`||n.type===`datetime-local`||n.type===`month`||n.type===`time`||n.type===`week`}function ir(n,e){let t=n.getUTCFullYear(),i=String(n.getUTCMonth()+1).padStart(2,`0`);if(e===`month`)return`${t}-${i}`;return`${t}-${i}-${String(n.getUTCDate()).padStart(2,`0`)}`}function Yn(n,e,t){return e instanceof Date&&(n===`min`||n===`max`)&&(t===`date`||t===`month`)?ir(e,t):e}function rr(n,e){n.listenToCustomControlModel(i=>e.state().controlValue.set(i)),n.listenToCustomControlOutput(`touch`,()=>e.state().markAsTouched()),e.registerAsBinding(n.customControl);let t=Re();return()=>{let i=e.state(),r=i.controlValue();I(t,`controlValue`,r)&&n.setCustomControlModelInput(r);for(let o of vt){let a;if(o===`errors`?a=e.errors():a=bt(i,o),I(t,o,a)&&(n.setInputOnDirectives(o,a),e.elementAcceptsNativeProperty(o)&&!n.customControlHasInput(o))){let l=Yn(o,a,e.nativeFormElement.type);D8(e.renderer,e.nativeFormElement,o,l)}}}}function or(n){return typeof n==`object`&&n!==null}function ar(n,e){let t=Re();e.controlValueAccessor.registerOnChange(r=>{t.controlValue=r,e.state().controlValue.set(r)}),e.controlValueAccessor.registerOnTouched(()=>e.state().markAsTouched());let i=e.injector.get(h_,null,{optional:!0,self:!0});if(i){let r;for(let s of i)or(s)&&s.registerOnValidatorChange&&(r??=I$2(0),s.registerOnValidatorChange(()=>{r.update(u=>u+1)}));let o=i.map(s=>typeof s==`function`?s:s.validate.bind(s)),a=qI.compose(o),l=pe$1(()=>{r?.();return Kn(a?a(e.interopNgControl.control):null,e.interopNgControl.control)});e.parseErrorsSource.set(l)}return e.registerAsBinding({reset:()=>{let r=e.state().value();t.controlValue=r,U$1(()=>e.controlValueAccessor.writeValue(r))}}),()=>{let r=e.state(),o=r.controlValue();I(t,`controlValue`,o)&&U$1(()=>e.controlValueAccessor.writeValue(o));for(let a of vt){let l=bt(r,a);if(I(t,a,l)){let s=n.setInputOnDirectives(a,l,a===`name`?dr:void 0);a===`disabled`&&e.controlValueAccessor.setDisabledState?U$1(()=>e.controlValueAccessor.setDisabledState(l)):!s&&e.elementAcceptsNativeProperty(a)&&D8(e.renderer,e.nativeFormElement,a,l)}}}}function dr(n){return n==null}function lr(n,e,t){if(typeof MutationObserver!=`function`)return;let i=new MutationObserver(r=>{r.some(o=>sr(o))&&e()});i.observe(n,{attributes:!0,attributeFilter:[`value`],characterData:!0,childList:!0,subtree:!0}),t.onDestroy(()=>i.disconnect())}function sr(n){if(n.type===`childList`||n.type===`characterData`){if(n.target instanceof Comment)return!1;for(let e of n.addedNodes)if(!(e instanceof Comment))return!0;for(let e of n.removedNodes)if(!(e instanceof Comment))return!0;return!1}return n.type===`attributes`&&n.target instanceof HTMLOptionElement}function cr(n,e,t,i){let r=!1,o=e.nativeFormElement,a=Ji(()=>e.state().value(),s=>e.state().controlValue.set(s),s=>tr(o,e.state().value,i));t.set(a.errors),e.onReset=()=>{a.reset();let s=e.state().value();l.controlValue=s,qn(o,s)},n.listenToDom(`input`,()=>a.setRawValue(void 0)),n.listenToDom(`blur`,()=>e.state().markAsTouched()),Qn(o)&&nr(o)&&i.watchValidity(e.destroyRef,o,()=>a.setRawValue(void 0)),e.registerAsBinding(),o.tagName===`SELECT`&&lr(o,()=>{r&&(o.value=e.state().controlValue())},e.destroyRef);let l=Re();return()=>{let s=e.state();for(let R of vt){let Q=bt(s,R);if(I(l,R,Q)&&(n.setInputOnDirectives(R,Q),e.elementAcceptsNativeProperty(R))){let Te=Yn(R,Q,o.type);D8(e.renderer,o,R,Te)}}let u=s.controlValue(),x=I(l,`controlValue`,u),$=o.type===`radio`&&I(l,`radioValue`,o.value);(x||$)&&qn(o,u),r=!0}}var Xn=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵprov=C({token:n,factory:t=>fr.ɵfac(t),providedIn:`root`})}return n})();var fr=(()=>{class n extends Xn{document=m$1(G$2);cspNonce=m$1(Jc,{optional:!0});injectedStyles=new WeakMap;watchValidity(t,i,r){let o=i.getRootNode();this.injectedStyles.has(o)||this.injectedStyles.set(o,this.createTransitionStyle(o));let a=l=>{let s=l;(s.animationName===`ng-valid`||s.animationName===`ng-invalid`)&&r()};i.addEventListener(`animationstart`,a),t.onDestroy(()=>{i.removeEventListener(`animationstart`,a)})}isBadInput(t){return t.validity?.badInput??!1}createTransitionStyle(t){let i=this.document.createElement(`style`);return this.cspNonce&&(i.nonce=this.cspNonce),i.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,t.nodeType===9?t.head?.appendChild(i):t.appendChild(i),i}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static ɵfac=(()=>{let t;return function(r){return(t||(t=Sn$1(n)))(r||n)}})();static ɵprov=C({token:n,factory:n.ɵfac})}return n})();var ur=Symbol();var Wn=new b(``);var wo=(()=>{class n{field=So$1.required({alias:`formField`});state=pe$1(()=>this.field()());renderer=m$1(gt$1);destroyRef=m$1(at$3);injector=m$1(J$2);element=m$1(le).nativeElement;elementIsNativeFormElement=A8(this.element);elementAcceptsTextualValues=XSe(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=t=>this.element.focus(t);controlValueAccessors=m$1(Of,{optional:!0,self:!0});config=m$1(Yi,{optional:!0});validityMonitor=m$1(Xn);parseErrorsSource=I$2(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new pt$1(this.state)}parseErrors=pe$1(()=>this.parseErrorsSource()?.().map(t=>m(l({},t),{fieldTree:U$1(this.state).fieldTree,formField:this}))??[],{equal:S});errors=pe$1(()=>this.state().errors().filter(t=>!t.formField||t.formField===this),{equal:S});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(t){this.parseErrorsSource.set(t)}set onReset(t){this.parseErrorsResetCallback=t}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:U8(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let t=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,pe$1(()=>o(this))]);if(t.length===0)return;let i=Re();ige({write:()=>{for(let[r,o]of t){let a=o();I(i,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(t){this.focuser(t)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(t){if(this.isFieldBinding)throw new T$1(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),t?.focus&&(this.focuser=i=>t.focus(i)),t?.reset&&(this.resetter=()=>t.reset()),Bt$2(i=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),i(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this))})},{injector:this.injector})}[ur];ɵngControlCreate(t){if(!t.hasPassThrough)if(this.controlValueAccessor)this.ɵngControlUpdate=ar(t,this);else if(t.customControl)this.ɵngControlUpdate=rr(t,this);else if(this.elementIsNativeFormElement)this.ɵngControlUpdate=cr(t,this,this.parseErrorsSource,this.validityMonitor);else throw new T$1(1914,!1)}ɵngControlUpdate;elementAcceptsNativeProperty(t){if(!this.elementIsNativeFormElement)return!1;switch(t){case`min`:case`max`:return this._elementAcceptsMinMax??=ZSe(this.element);case`minLength`:case`maxLength`:return this.elementAcceptsTextualValues;case`disabled`:case`required`:case`readonly`:case`name`:return!0;default:return!1}}static ɵfac=function(i){return new(i||n)};static ɵdir=j({type:n,selectors:[[``,`formField`,``]],inputs:{field:[1,`formField`,`field`]},exportAs:[`formField`],features:[vn$1([{provide:Wn,useExisting:n},{provide:xl,useFactory:()=>m$1(n).interopNgControl},{provide:N8,useFactory:()=>m$1(Wn,{self:!0})}]),bT(`formField`)]})}return n})();var J$1=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵcmp=Ue({type:s,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(t,i){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return s})();var Q={passive:!0};var $=(()=>{class s{_platform=m$1(ze);_ngZone=m$1(ee$1);_renderer=m$1(Mt$1).createRenderer(null,null);_styleLoader=m$1(Un$1);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return bt$1;this._styleLoader.load(J$1);let t=Ui$1(e),i=this._monitoredElements.get(t);if(i)return i.subject;let r=new R,o=`cdk-text-field-autofilled`,a=d=>{d.animationName===`cdk-text-field-autofill-start`&&!t.classList.contains(o)?(t.classList.add(o),this._ngZone.run(()=>r.next({target:d.target,isAutofilled:!0}))):d.animationName===`cdk-text-field-autofill-end`&&t.classList.contains(o)&&(t.classList.remove(o),this._ngZone.run(()=>r.next({target:d.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(t.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(t,`animationstart`,a,Q)));return this._monitoredElements.set(t,{subject:r,unlisten:l}),r}stopMonitoring(e){let t=Ui$1(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove(`cdk-text-field-autofill-monitored`),t.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static ɵfac=function(t){return new(t||s)};static ɵprov=w({token:s,factory:s.ɵfac})}return s})();var W=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵmod=_e$1({type:s});static ɵinj=he({})}return s})();var Y=new b(`MAT_INPUT_VALUE_ACCESSOR`);var ee=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var te=new b(`MAT_INPUT_CONFIG`);var Pe=(()=>{class s{_elementRef=m$1(le);_platform=m$1(ze);ngControl=m$1(xl,{optional:!0,self:!0});_autofillMonitor=m$1($);_ngZone=m$1(ee$1);_formField=m$1(Ci,{optional:!0});_renderer=m$1(gt$1);_uid=m$1(ko).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=m$1(te,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new R;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=DNe(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(qI.required)??!1}set required(e){this._required=DNe(e)}_required;get type(){return this._type}set type(e){this._type=e||`text`,this._validateType(),!this._isTextarea&&ENe().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=DNe(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(e=>ENe().has(e));constructor(){let e=m$1(G8,{optional:!0}),t=m$1(W8,{optional:!0}),i=m$1(hYe),r=m$1(Y,{optional:!0,self:!0}),o=m$1(Wn,{optional:!0,self:!0}),a=this._elementRef.nativeElement,l=a.nodeName.toLowerCase();r?Kn$1(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new JH(i,o||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l===`select`,this._isTextarea=l===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&Bt$2(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type===`number`?(t.type=`text`,t.setSelectionRange(0,0),t.type=`number`):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute(`placeholder`,e):t.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){ee.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(t){return new(t||s)};static ɵdir=j({type:s,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(t,i){t&1&&Gt$1(`focus`,function(){return i._focusChanged(!0)})(`blur`,function(){return i._focusChanged(!1)})(`input`,function(){return i._onInput()}),t&2&&(gl(`id`,i.id)(`disabled`,i.disabled&&!i.disabledInteractive)(`required`,i.required),Zn(`name`,i.name||null)(`readonly`,i._getReadonlyAttribute())(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null)(`aria-invalid`,i.empty&&i.required?null:i.errorState)(`aria-required`,i.required)(`id`,i.id),ut$1(`mat-input-server`,i._isServer)(`mat-mdc-form-field-textarea-control`,i._isInFormField&&i._isTextarea)(`mat-mdc-form-field-input-control`,i._isInFormField)(`mat-mdc-input-disabled-interactive`,i.disabledInteractive)(`mdc-text-field__input`,i._isInFormField)(`mat-mdc-native-select-inline`,i._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Ve]},exportAs:[`matInput`],features:[vn$1([{provide:Mi,useExisting:s}]),Pt$1]})}return s})();var Be=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵmod=_e$1({type:s});static ɵinj=he({imports:[Br,Br,W,Dn$1]})}return s})();var nt=[`tooltip`];var at=20;var rt=new b(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=m$1(J$2);return()=>BD(n,{scrollThrottle:at})}});var lt=new b(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var et=`tooltip-panel`;var ht={passive:!0};var dt=8;var ct=8;var pt=24;var _t=200;var mt=(()=>{class n{_elementRef=m$1(le);_ngZone=m$1(ee$1);_platform=m$1(ze);_ariaDescriber=m$1(VRe);_focusMonitor=m$1(bD);_dir=m$1(su);_injector=m$1(J$2);_viewContainerRef=m$1(yn$1);_mediaMatcher=m$1(hE);_document=m$1(G$2);_renderer=m$1(gt$1);_animationsDisabled=Jr();_defaultOptions=m$1(lt,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=it;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=DNe(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let e=DNe(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=nu(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=nu(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new R;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=dt}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(pn$2(this._destroyed)).subscribe(t=>{t?t===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,`tooltip`),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(e);this._detach(),this._portal=this._portal||new cu(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=i.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(pn$2(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(t)}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&s._origin instanceof le)return this._overlayRef;this._detach()}let e=this._injector.get(ep).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${et}`,o=GD(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e).withPopoverLocation(`global`);return o.positionChanges.pipe(pn$2(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=rp(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(rt)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(pn$2(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(pn$2(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(pn$2(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(pn$2(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let e=t.getConfig().positionStrategy,i=this._getOrigin(),o=this._getOverlayPosition();e.withPositions([this._addOffset(l(l({},i.main),o.main)),this._addOffset(l(l({},i.fallback),o.fallback))])}_addOffset(t){let e=ct,i=!this._dir||this._dir.value==`ltr`;return t.originY===`top`?t.offsetY=-e:t.originY===`bottom`?t.offsetY=e:t.originX===`start`?t.offsetX=i?-e:e:t.originX===`end`&&(t.offsetX=i?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,i;e==`above`||e==`below`?i={originX:`center`,originY:e==`above`?`top`:`bottom`}:e==`before`||e==`left`&&t||e==`right`&&!t?i={originX:`start`,originY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(i={originX:`end`,originY:`center`});let{x:o,y:s}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:o,originY:s}}}_getOverlayPosition(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,i;e==`above`?i={overlayX:`center`,overlayY:`bottom`}:e==`below`?i={overlayX:`center`,overlayY:`top`}:e==`before`||e==`left`&&t||e==`right`&&!t?i={overlayX:`end`,overlayY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(i={overlayX:`start`,overlayY:`center`});let{x:o,y:s}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:o,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Zt$1(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return this.position===`above`||this.position===`below`?e===`top`?e=`bottom`:e===`bottom`&&(e=`top`):t===`end`?t=`start`:t===`start`&&(t=`end`),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:i,originY:o}=t,s;if(e===`center`?this._dir&&this._dir.value===`rtl`?s=i===`end`?`left`:`right`:s=i===`start`?`left`:`right`:s=e===`bottom`&&o===`top`?`above`:`below`,s!==this._currentPosition){let d=this._overlayRef;if(d){let b=`${this._cssClassPrefix}-${et}-`;d.removePanelClass(b+this._currentPosition),d.addPanelClass(b+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,t=>{let e=t.targetTouches?.[0],i=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener(`mouseenter`,t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,t=>{let e=t.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide()}),this._addListener(`wheel`,t=>{if(this._isTooltipVisible()){let e=this._document.elementFromPoint(t.clientX,t.clientY),i=this._elementRef.nativeElement;e!==i&&!i.contains(e)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,t),this._addListener(`touchcancel`,t)}}}_addListener(t,e){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,e,ht))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t==`function`?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!==`off`){let e=this._elementRef.nativeElement,i=e.style;(t===`on`||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`)&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect=`none`),(t===`on`||!e.draggable)&&(i.webkitUserDrag=`none`),i.touchAction=`none`,i.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,`tooltip`),this._isDestroyed||Zt$1({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type===`keydown`?this._isTooltipVisible()&&t.keyCode===27&&!iu(t):!0;static ɵfac=function(e){return new(e||n)};static ɵdir=j({type:n,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(e,i){e&2&&ut$1(`mat-mdc-tooltip-disabled`,i.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return n})();var it=(()=>{class n{_changeDetectorRef=m$1(Qt$1);_elementRef=m$1(le);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Jr();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new R;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>pt&&t.width>=_t}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let e=this._tooltip.nativeElement,i=this._showAnimation,o=this._hideAnimation;if(e.classList.remove(t?o:i),e.classList.add(t?i:o),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let s=getComputedStyle(e);(s.getPropertyValue(`animation-duration`)===`0s`||s.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(t))}static ɵfac=function(e){return new(e||n)};static ɵcmp=Ue({type:n,selectors:[[`mat-tooltip-component`]],viewQuery:function(e,i){if(e&1&&ms(nt,7),e&2){let o;Ri$1(o=Ci$1())&&(i._tooltip=o.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(e,i){e&1&&Gt$1(`mouseleave`,function(s){return i._handleMouseLeave(s)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(e,i){e&1&&(Jn$1(0,`div`,1,0),x0(`animationend`,function(s){return i._handleAnimationEnd(s)}),Jn$1(2,`div`,2),gs(3),er$1()()),e&2&&(zd(i.tooltipClass),ut$1(`mdc-tooltip--multiline`,i._isMultiline),_t$1(3),W0(i.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
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
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})}return n})();var Yt$1=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=_e$1({type:n});static ɵinj=he({imports:[G9,$D,Dn$1,MD]})}return n})();var f=(()=>{class t{constructor(){this._locale=m$1(DF)}transform(e,r={},s){return this._locale.get(e,r,s)||e}static{this.ɵfac=function(r){return new(r||t)}}static{this.ɵpipe=hs({name:`translate`,type:t,pure:!1})}}return t})();function Ft(e,m){if(e&1&&Ai$1(0,`div`,1)(1,`div`,2),e&2){let t=m;Jm(`background-color`,t),_t$1(),Jm(`background-color`,t)}}function Vt(e,m){if(e&1){let t=CT();$r(0,`div`,3)(1,`div`,4),gs(2),Yr(),$r(3,`button`,5),Gt$1(`click`,function(){Qh(t);return Jh(Wr().close())}),$r(4,`icon`),gs(5,`close`),Yr()()()}if(e&2){let t=Wr();ut$1(`bg-info`,t.banner().type===`info`||!t.banner().type)(`text-info-content`,t.banner().type===`info`||!t.banner().type)(`bg-warning`,t.banner().type===`warn`)(`text-warning-content`,t.banner().type===`warn`)(`bg-error`,t.banner().type===`error`)(`text-error-content`,t.banner().type===`error`),_t$1(2),Ni$1(` `,t.banner()?.content||t.banner()?.message,` `)}}var wt=(()=>{class e{constructor(){this._org=m$1(QS),this._change=I$2(0),this.is_setup=I$2(!1),this.banner=u9(`banner`),this.environment_bar=u9(`environment_bar`),this._environment_bar_padding=Bt$2(()=>{document.body.classList.toggle(`has-environment-bar`,!!this.environment_bar())}),this.has_been_closed=pe$1(()=>this.is_setup()?(this._change(),!this.banner()?.content&&!this.banner()?.message||localStorage.getItem(`PLACE.last_banner`)===this.banner().id):!0)}async ngOnInit(){await this._org.waitUntilInitialised(),setTimeout(()=>this.is_setup.set(!0),500)}async close(){localStorage.setItem(`PLACE.last_banner`,this.banner()?.id||``),this._change.set(Date.now())}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵcmp=Ue({type:e,selectors:[[`global-banner`]],decls:2,vars:2,consts:[[1,`flex`,`w-full`,`items-center`,`space-x-4`,`p-4`,`print:hidden`,3,`bg-info`,`text-info-content`,`bg-warning`,`text-warning-content`,`bg-error`,`text-error-content`],[`aria-hidden`,`true`,1,`environment-bar`,`top-0`,`print:hidden`],[`aria-hidden`,`true`,1,`environment-bar`,`bottom-0`,`print:hidden`],[1,`flex`,`w-full`,`items-center`,`space-x-4`,`p-4`,`print:hidden`],[1,`flex-1`],[`icon`,``,`matRipple`,``,3,`click`]],template:function(i,n){if(i&1&&(Xn$1(0,Ft,2,4),Xn$1(1,Vt,6,13,`div`,0)),i&2){let l;Qn$1((l=n.environment_bar())?0:-1,l),_t$1(),Qn$1(!n.has_been_closed()&&n.banner()?1:-1)}},dependencies:[BYe],styles:[`[_nghost-%COMP%]{display:block;width:100%}.environment-bar[_ngcontent-%COMP%]{height:.5rem;left:0;pointer-events:none;position:fixed;width:100%;z-index:10000}`]})}}return e})();function Bt(e,m){e&1&&gs(0,` Enter the address of your PlaceOS server to connect this app. `)}function Wt(e,m){e&1&&gs(0,` Enter your work email to find your PlaceOS server and connect this app. `)}function Gt(e,m){if(e&1&&($r(0,`p`,6),gs(1),Yr()),e&2){let t=Wr();_t$1(),Ni$1(` `,t.error(),` `)}}function Ut(e,m){if(e&1&&($r(0,`p`,7),gs(1),Yr()),e&2){let t=Wr();_t$1(),Ni$1(` Settings provided by your administrator will be applied automatically in `,t.auto_accept_in(),`s. `)}}function Rt(e,m){if(e&1){let t=CT();$r(0,`div`,8)(1,`label`,12),gs(2,`Server Address`),Yr(),$r(3,`mat-form-field`,13)(4,`icon`,14),gs(5,`dns`),Yr(),$r(6,`input`,15),Z0(`ngModelChange`,function(n){Qh(t);let l=Wr();return vz(l.server_address,n)||(l.server_address=n),Jh(n)}),Yr(),oY(),Yr()(),$r(7,`div`,8)(8,`label`,16),gs(9,`API Key (optional)`),Yr(),$r(10,`mat-form-field`,13)(11,`icon`,14),gs(12,`key`),Yr(),$r(13,`input`,17),Z0(`ngModelChange`,function(n){Qh(t);let l=Wr();return vz(l.api_key,n)||(l.api_key=n),Jh(n)}),Yr(),oY(),Yr(),$r(14,`p`,18),gs(15,` When set, the app authenticates with this key instead of asking you to sign in. `),Yr()()}if(e&2){let t=Wr();_t$1(6),q0(`ngModel`,t.server_address),ml(`disabled`,t.loading()),aY(),_t$1(7),q0(`ngModel`,t.api_key),ml(`disabled`,t.loading()),aY()}}function jt(e,m){if(e&1){let t=CT();$r(0,`div`,8)(1,`label`,19),gs(2,`Work Email`),Yr(),$r(3,`mat-form-field`,13)(4,`icon`,14),gs(5,`mail`),Yr(),$r(6,`input`,20),Z0(`ngModelChange`,function(n){Qh(t);let l=Wr();return vz(l.email,n)||(l.email=n),Jh(n)}),Yr(),oY(),Yr()()}if(e&2){let t=Wr();_t$1(6),q0(`ngModel`,t.email),ml(`disabled`,t.loading()),aY()}}function Ht(e,m){e&1&&gs(0,` Find my server using my work email `)}function qt(e,m){e&1&&gs(0,` Enter a server address manually `)}var Dt=15;var Mt=(()=>{class e{constructor(){this.serverError=So$1(``),this.autoAccept=So$1(!1),this.domainSet=Jme(),this.email=I$2(_$e()??``),this.server_address=I$2(KS()??``),this.api_key=I$2(nN()??``),this.manual_entry=I$2(!!KS()),this.error=I$2(``),this.loading=I$2(!1),this.auto_accept_in=I$2(0),this._auto_accept_timer=null,Bt$2(()=>{let t=this.serverError();t&&(this.error.set(t),U$1(()=>this.stopAutoAccept()))}),Bt$2(()=>{this.autoAccept()&&U$1(this.server_address)&&U$1(()=>this.startAutoAccept())})}ngOnDestroy(){this.stopAutoAccept()}resetAutoAccept(){this._auto_accept_timer&&this.auto_accept_in.set(Dt)}startAutoAccept(){this.auto_accept_in.set(Dt),!this._auto_accept_timer&&(this._auto_accept_timer=setInterval(()=>{let t=this.auto_accept_in()-1;this.auto_accept_in.set(t),!(t>0)&&(this.stopAutoAccept(),this.submit())},1e3))}stopAutoAccept(){this._auto_accept_timer&&clearInterval(this._auto_accept_timer),this._auto_accept_timer=null,this.auto_accept_in.set(0)}toggleManualEntry(){this.loading()||(this.manual_entry.update(t=>!t),this.error.set(``))}async submit(){if(this.loading())return;if(this.stopAutoAccept(),this.manual_entry())return this.submitManual();let t=this.email().trim();if(!t){this.error.set(`A work email is required.`);return}this.loading.set(!0),this.error.set(``);try{let i=await GH(t);FH(t),eN(i),Pee(``),this.domainSet.emit(i)}catch{this.error.set(`Unable to find a server for this email address.`)}finally{this.loading.set(!1)}}submitManual(){let t=Lee(this.server_address());if(!t){this.error.set(`A valid server address is required.`);return}this.error.set(``),eN(t),Pee(this.api_key()),this.domainSet.emit(t)}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵcmp=Ue({type:e,selectors:[[`native-domain-overlay`]],hostBindings:function(i,n){i&1&&Gt$1(`pointerdown`,function(){return n.resetAutoAccept()},M$)(`keydown`,function(){return n.resetAutoAccept()},M$)},inputs:{serverError:[1,`serverError`],autoAccept:[1,`autoAccept`]},outputs:{domainSet:`domainSet`},decls:19,vars:8,consts:[[1,`bg-base-200`,`pointer-events-auto`,`fixed`,`inset-0`,`z-9999`,`flex`,`items-center`,`justify-center`,`p-4`],[1,`border-base-300`,`bg-base-100`,`flex`,`w-full`,`max-w-md`,`flex-col`,`rounded-sm`,`border`,`shadow-sm`,3,`ngSubmit`],[1,`bg-base-200`,`m-2`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[1,`flex`,`flex-col`,`space-y-4`,`p-4`],[1,`text-sm`,`opacity-60`],[1,`bg-error/10`,`text-error`,`rounded-sm`,`px-3`,`py-2`,`text-xs`],[1,`bg-info/10`,`text-info`,`rounded-sm`,`px-3`,`py-2`,`text-xs`],[1,`flex`,`w-full`,`flex-col`],[`type`,`button`,1,`self-start`,`text-sm`,`underline`,`opacity-60`,3,`click`,`disabled`],[1,`bg-base-200`,`m-2`,`flex`,`items-center`,`justify-center`,`space-x-2`,`rounded-sm`,`border-none`,`p-2`],[`btn`,``,`matRipple`,``,`type`,`submit`,1,`flex-1`,3,`disabled`],[`for`,`server-address`],[`appearance`,`outline`,1,`w-full`],[`matPrefix`,``],[`matInput`,``,`name`,`server-address`,`placeholder`,`placeos.company.com`,`type`,`text`,`autocapitalize`,`off`,`autocomplete`,`url`,`spellcheck`,`false`,`required`,``,3,`ngModelChange`,`ngModel`,`disabled`],[`for`,`api-key`],[`matInput`,``,`name`,`api-key`,`placeholder`,`Leave empty to sign in`,`type`,`password`,`autocapitalize`,`off`,`autocomplete`,`off`,`spellcheck`,`false`,3,`ngModelChange`,`ngModel`,`disabled`],[1,`text-xs`,`opacity-60`],[`for`,`email`],[`matInput`,``,`name`,`email`,`placeholder`,`name@company.com`,`type`,`email`,`autocapitalize`,`off`,`autocomplete`,`email`,`spellcheck`,`false`,`required`,``,3,`ngModelChange`,`ngModel`,`disabled`]],template:function(i,n){i&1&&($r(0,`div`,0)(1,`form`,1),Gt$1(`ngSubmit`,function(){return n.submit()}),$r(2,`header`,2)(3,`h2`,3),gs(4,`Connect to Server`),Yr()(),$r(5,`main`,4)(6,`p`,5),Xn$1(7,Bt,1,0)(8,Wt,1,0),Yr(),Xn$1(9,Gt,2,1,`p`,6),Xn$1(10,Ut,2,1,`p`,7),Xn$1(11,Rt,16,4)(12,jt,7,2,`div`,8),$r(13,`button`,9),Gt$1(`click`,function(){return n.toggleManualEntry()}),Xn$1(14,Ht,1,0)(15,qt,1,0),Yr()(),$r(16,`footer`,10)(17,`button`,11),gs(18),Yr()()()()),i&2&&(_t$1(7),Qn$1(n.manual_entry()?7:8),_t$1(2),Qn$1(n.error()?9:-1),_t$1(),Qn$1(n.auto_accept_in()>0?10:-1),_t$1(),Qn$1(n.manual_entry()?11:12),_t$1(2),ml(`disabled`,n.loading()),_t$1(),Qn$1(n.manual_entry()?14:15),_t$1(3),ml(`disabled`,n.loading()),_t$1(),Ni$1(` `,n.loading()?`Looking up...`:`Connect`,` `))},dependencies:[iye,tye,lx,QSe,JSe,Tx,K8,G8,BYe,Br,Mn,Si,Be,Pe,ip,WD],encapsulation:2})}}return e})();function zt(e,m){if(e&1){let t=CT();$r(0,`aside`,0)(1,`div`,1)(2,`h2`,2),gs(3),Yr(),$r(4,`p`,3),gs(5),Yr()(),$r(6,`button`,4),Gt$1(`click`,function(){Qh(t);return Jh(Wr().reloadApp())}),$r(7,`icon`),gs(8,`refresh`),Yr()()()}if(e&2){let t=m;_t$1(3),Ni$1(` `,t.message||`Update available`,` `),_t$1(2),Ni$1(` `,t.details||`Refresh the page to get the new version of the application`,` `),_t$1(),ml(`matTooltip`,t.action||`Reload App`)}}var kt=(()=>{class e{constructor(){this.update=BAe()}reloadApp(){location.reload()}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵcmp=Ue({type:e,selectors:[[`placeos-service-worker-update-card`]],decls:1,vars:1,consts:[[`role`,`status`,`aria-live`,`assertive`,1,`border-base-300`,`bg-base-100`,`text-base-content`,`pointer-events-auto`,`fixed`,`right-4`,`bottom-4`,`z-9999`,`flex`,`w-[20rem]`,`max-w-[calc(100vw-2rem)]`,`items-center`,`gap-3`,`rounded-lg`,`border`,`p-4`,`shadow-xl`],[1,`min-w-0`,`flex-1`],[1,`m-0`,`text-sm`,`leading-tight`,`font-medium`],[1,`m-0`,`mt-1`,`text-xs`,`opacity-70`],[`icon`,``,`default`,``,3,`click`,`matTooltip`]],template:function(i,n){if(i&1&&Xn$1(0,zt,9,3,`aside`,0),i&2){let l;Qn$1((l=n.update())?0:-1,l)}},dependencies:[BYe,Yt$1,mt],encapsulation:2})}}return e})();function Kt(e,m){if(e&1){let t=CT();$r(0,`native-domain-overlay`,3),Gt$1(`domainSet`,function(){Qh(t);return Jh(Wr().onDomainSet())}),Yr()}if(e&2){let t=Wr();ml(`serverError`,t.domain_error())(`autoAccept`,t.auto_confirm())}}function Qt(e,m){e&1&&($r(0,`div`,1),gs(1),OT(2,`translate`),Yr()),e&2&&(_t$1(),Ni$1(` `,Fz(2,1,`COMMON.SERVER_DOWN`),` `))}function Yt(e,m){if(e&1){let t=CT();$r(0,`div`,4)(1,`p`,5),gs(2),Yr(),$r(3,`button`,6),Gt$1(`click`,function(){Qh(t);return Jh(Wr(2).retry())}),gs(4,` Try again `),Yr()()}if(e&2){let t=Wr(2);_t$1(2),Ni$1(` `,t.initialisation_error(),` `)}}function Xt(e,m){if(e&1&&($r(0,`div`,7)(1,`p`,8),gs(2),Yr()(),$r(3,`div`,9),Ai$1(4,`mat-progress-bar`,10),Yr()),e&2){let t=Wr(2);_t$1(2),W0(t.message())}}function Zt(e,m){if(e&1&&($r(0,`div`,2),Xn$1(1,Yt,5,1,`div`,4)(2,Xt,5,1),Yr()),e&2){let t=Wr();_t$1(),Qn$1(t.initialisation_error()?1:2)}}var Et=(()=>{class e extends Pa{constructor(){super(...arguments),this._placeos=m$1(Q$e),this.online=I$2(!0),this.connection_checked=I$2(!1),this.message=z$e(),this.show_domain_overlay=K$e(),this.domain_error=q$e(),this.auto_confirm=Z$e(),this.initialisation_error=HAe(),this.initialisation_complete=GAe(),this.loading=pe$1(()=>!this.initialisation_complete())}retry(){jAe()}onDomainSet(){this._placeos.onNativeDomainSet()}ngOnInit(){let t=()=>{this.online.set(L_()),this.online()&&(this.connection_checked.set(!0),this.clearTimeout(`initial-connection`))};this.timeout(`initial-connection`,()=>{t(),this.connection_checked.set(!0)},5e3),t(),this.interval(`online`,t,1e3)}static{this.ɵfac=(()=>{let t;return function(n){return(t||(t=Sn$1(e)))(n||e)}})()}static{this.ɵcmp=Ue({type:e,selectors:[[`global-loading`]],features:[$e$2],decls:4,vars:3,consts:[[3,`serverError`,`autoAccept`],[1,`bg-error`,`fixed`,`top-2`,`left-1/2`,`z-9999`,`-translate-x-1/2`,`rounded-3xl`,`px-4`,`py-2`,`text-xs`,`text-white`,`shadow-sm`],[`loader`,``,1,`bg-base-300`,`pointer-events-auto`,`fixed`,`inset-0`,`z-9998`,`flex`,`flex-col`,`items-center`,`justify-end`,`space-y-2`,`p-4`],[3,`domainSet`,`serverError`,`autoAccept`],[1,`border-base-300`,`bg-base-100`,`w-[24rem]`,`max-w-[calc(100vw-2rem)]`,`rounded-lg`,`border`,`p-4`,`text-center`,`text-xs`,`shadow-sm`],[`initialisation-error`,``],[`type`,`button`,1,`bg-primary`,`text-primary-content`,`mt-3`,`rounded`,`px-4`,`py-2`,3,`click`],[1,`border-base-300`,`bg-base-100`,`w-[24rem]`,`max-w-[calc(100vw-2rem)]`,`rounded-lg`,`border`,`p-2`,`text-center`,`text-xs`,`shadow-sm`],[1,`text-center`,`font-mono`],[1,`border-base-300`,`w-[24rem]`,`max-w-[calc(100vw-2rem)]`,`overflow-hidden`,`rounded-full`,`border`,`shadow-sm`],[`mode`,`indeterminate`,1,`scale-150`,`rounded-sm`]],template:function(i,n){i&1&&(Xn$1(0,Kt,1,2,`native-domain-overlay`,0),Xn$1(1,Qt,3,3,`div`,1),Xn$1(2,Zt,3,1,`div`,2),Ai$1(3,`placeos-service-worker-update-card`)),i&2&&(Qn$1(n.show_domain_overlay()?0:-1),_t$1(),Qn$1(n.connection_checked()&&!n.online()?1:-1),_t$1(),Qn$1(n.loading()||n.initialisation_error()?2:-1))},dependencies:[Z,L,Mt,kt,f],styles:[`[_nghost-%COMP%]{pointer-events:none}[loader][_ngcontent-%COMP%]{background-image:linear-gradient(to right,#0d47a1,#2196f3)}`]})}}return e})();var Jt=()=>[import(`./chunk-fXRllVy2.js`).then(e=>e.SettingsDebugPanelComponent)];var $t=()=>[import(`./chunk-M_tx0rfN.js`).then(e=>e.BindingDebugPanelComponent)];var en=()=>[import(`./chunk-BIk0FQds.js`).then(e=>e.DebugConsoleComponent)];function tn(e,m){if(e&1){let t=CT();$r(0,`settings-debug-panel`,8),Gt$1(`showChange`,function(){Qh(t);return Jh(Wr(2).panel.set(null))}),Yr()}if(e&2){let t=Wr(2);ml(`show`,!0)(`schema`,t.schema())}}function nn(e,m){if(e&1&&Xn$1(0,tn,1,2,`settings-debug-panel`,7),e&2)Qn$1(Wr().panel()===`settings`?0:-1)}function on(e,m){if(e&1){let t=CT();$r(0,`binding-debug-panel`,10),Gt$1(`showChange`,function(){Qh(t);return Jh(Wr(2).panel.set(null))}),Yr()}e&2&&ml(`show`,!0)(`hotkeysEnabled`,!1)}function an(e,m){if(e&1&&Xn$1(0,on,1,2,`binding-debug-panel`,9),e&2)Qn$1(Wr().panel()===`bindings`?0:-1)}function rn(e,m){if(e&1){let t=CT();$r(0,`debug-console`,10),Gt$1(`showChange`,function(){Qh(t);return Jh(Wr(2).panel.set(null))}),Yr()}e&2&&ml(`show`,!0)(`hotkeysEnabled`,!1)}function sn(e,m){if(e&1&&Xn$1(0,rn,1,2,`debug-console`,9),e&2)Qn$1(Wr().panel()===`console`?0:-1)}var At=(()=>{class e extends Pa{constructor(){super(...arguments),this._hotkey=m$1(aD),this._document=m$1(G$2),this._menu_trigger=tge.required(Bt$1),this.loadSchema=So$1(),this.schema=I$2(null),this.panel=I$2(null)}ngOnInit(){for(let[i,n]of[[`settings`,[`Control`,`Alt`,`Shift`,`KeyS`]],[`bindings`,[`Control`,`Alt`,`Shift`,`KeyB`]],[`console`,[`Control`,`Backquote`]]])this.subscription(i,this._hotkey.listen(n,()=>{this.panel()===i?this.panel.set(null):this.openPanel(i)}))}onContextMenu(t){let i=this._document.documentElement.clientHeight;t.clientX<0||t.clientX>32||t.clientY<i-32||t.clientY>i||this.openMenu(t,this._menu_trigger())}openMenu(t,i){t.preventDefault(),i.openMenu()}openPanel(t){this.panel.set(t),t===`settings`&&(this._schema_request??=this.loadSettingsSchema())}async loadSettingsSchema(){try{this.schema.set(await this.loadSchema()?.()??null)}catch{this.schema.set(null)}}static{this.ɵfac=(()=>{let t;return function(n){return(t||(t=Sn$1(e)))(n||e)}})()}static{this.ɵcmp=Ue({type:e,selectors:[[`settings-debug-panel-launcher`]],viewQuery:function(i,n){i&1&&U0(n._menu_trigger,Bt$1,5),i&2&&qW()},hostBindings:function(i,n){i&1&&Gt$1(`contextmenu`,function(y){return n.onContextMenu(y)},P$)},inputs:{loadSchema:[1,`loadSchema`]},features:[$e$2],decls:33,vars:4,consts:[[`menu_trigger`,`matMenuTrigger`],[`debug_menu`,`matMenu`],[`type`,`button`,`aria-label`,`Open debugging tools`,1,`absolute`,`bottom-0`,`left-0`,`z-999`,`h-px`,`w-px`,3,`contextmenu`,`matMenuTriggerFor`],[`yPosition`,`above`],[1,`flex`,`w-64`,`items-center`,`justify-center`,`pb-2`,`text-sm`,`opacity-60`],[`mat-menu-item`,``,3,`click`],[1,`flex`,`items-center`,`gap-2`],[3,`show`,`schema`],[3,`showChange`,`show`,`schema`],[3,`show`,`hotkeysEnabled`],[3,`showChange`,`show`,`hotkeysEnabled`]],template:function(i,n){if(i&1){let l=CT();$r(0,`button`,2,0),Gt$1(`contextmenu`,function($){Qh(l);let It=ZW(1);return Jh(n.openMenu($,It))}),Yr(),$r(2,`mat-menu`,3,1)(4,`div`,4),gs(5,` Debugging Panels `),Yr(),$r(6,`button`,5),Gt$1(`click`,function(){return n.openPanel(`settings`)}),$r(7,`div`,6)(8,`icon`),gs(9,`discover_tune`),Yr(),$r(10,`div`),gs(11,`Settings`),Yr()()(),$r(12,`button`,5),Gt$1(`click`,function(){return n.openPanel(`bindings`)}),$r(13,`div`,6)(14,`icon`),gs(15,`linked_services`),Yr(),$r(16,`div`),gs(17,`Driver bindings`),Yr()()(),$r(18,`button`,5),Gt$1(`click`,function(){return n.openPanel(`console`)}),$r(19,`div`,6)(20,`icon`),gs(21,`terminal_2`),Yr(),$r(22,`div`),gs(23,`Console`),Yr()()()(),D0(24,nn,1,1),wW(25,24,Jt),D0(27,an,1,1),wW(28,27,$t),D0(30,sn,1,1),wW(31,30,en)}if(i&2)ml(`matMenuTriggerFor`,ZW(3)),_t$1(25),MW(n.panel()===`settings`),_t$1(3),MW(n.panel()===`bindings`),_t$1(3),MW(n.panel()===`console`)},dependencies:[Lt$1,I$1,G$1,Bt$1,BYe],encapsulation:2})}}return e})();var ln=()=>[`/`];var Tt=(()=>{class e{static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵcmp=Ue({type:e,selectors:[[`app-unauthorised`]],decls:15,vars:11,consts:[[`unauthorised`,``,1,`absolute`,`inset-0`],[1,`border-base-300`,`bg-base-100`,`text-base-content`,`mx-auto`,`my-4`,`flex`,`w-104`,`max-w-[calc(100%-1rem)]`,`flex-col`,`gap-2`,`rounded-xl`,`border`,`p-4`,`text-center`,`shadow-lg`],[1,`text-4xl`],[1,`py-4`],[`btn`,``,3,`routerLink`]],template:function(i,n){i&1&&($r(0,`div`,0)(1,`div`,1)(2,`h1`,2),gs(3,`403`),Yr(),$r(4,`h3`),gs(5),OT(6,`translate`),Yr(),$r(7,`p`,3),gs(8),OT(9,`translate`),Yr(),$r(10,`p`),gs(11),OT(12,`translate`),Yr(),$r(13,`a`,4),gs(14,`Try Again`),Yr()()()),i&2&&(_t$1(5),W0(Fz(6,4,`COMMON.FORBIDDEN`)),_t$1(3),Ni$1(` `,Fz(9,6,`COMMON.INVALID_PAGE_PERMISSIONS`),` `),_t$1(3),Ni$1(` `,Fz(12,8,`COMMON.CONTACT_ADMIN`),` `),_t$1(2),ml(`routerLink`,Rz(10,ln)))},dependencies:[t_,f],styles:[`[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center}[unauthorised][_ngcontent-%COMP%]{background-image:linear-gradient(to right,#c62828,#ef5350)}`]})}}return e})();var cn=20*1e3;function mn(){try{return!!Lt$2()}catch{return!1}}function dn(e,m){return new Promise(t=>{let i=setTimeout(()=>t(!1),m);e.then(()=>{clearTimeout(i),t(!0)},()=>{clearTimeout(i),t(!1)})})}var re=class{};var k=(()=>{class e{constructor(){this._router=m$1(jt$1),this._settings=m$1(Qa),this._org=m$1(QS),this._injector=m$1(J$2),this._access=m$1(re,{optional:!0})}async canActivate(t,i){return this.checkUser()}async canLoad(t,i){return this.checkUser()}async canActivateChild(t,i){return this.checkUser()}async checkUser(){if(!await this.waitForBackend(Promise.all([this._org.waitUntilInitialised(),zH(lD,Boolean,this._injector)])))return this.offlineAccess();let i=this._access?.group?[this._access.group]:this._settings.get(`app.allow_access_groups`)||[],n=await this.useGroupSubsystemAccess(),l=!1;if(n){let y=await this.waitForUser();if(!y)return this.offlineAccess();l=this.checkSubsystemAccess(y),q$2(`ACCESS`,`Checking subsystem access`,l)}else if(!i.length)l=!0,q$2(`ACCESS`,`No access groups`,l);else{let y=await this.waitForUser();if(!y)return this.offlineAccess();l=!!(y&&i.find($=>y.groups.includes($))),q$2(`ACCESS`,`Checking access groups`,l)}return l||this._router.navigate([`/unauthorised`]),!!l}async waitForUser(){if(!await this.waitForBackend(zx(Qx(),Boolean)))return null;let i=null;return await this.waitForBackend(iD(OF).then(l=>i=l))?i:null}async waitForBackend(t){return dn(t,cn)}offlineAccess(){return mn()?(q$2(`ACCESS`,`Backend unreachable. Continuing with cached credentials.`),!0):(q$2(`ACCESS`,`Backend unreachable and no cached credentials.`,void 0,`warn`),this._router.navigate([`/unauthorised`]),!1)}async useGroupSubsystemAccess(){let t=ki$1()?.config?.use_group_subsystem_access;return t===!0||t===`true`}checkSubsystemAccess(t){if(!t)return!1;let n=(`${this._settings.get(`app.access_subsystem`)||``}`.trim()||`${this._settings.app_name||``}`).trim().toLowerCase();return n?lAe(n,Yt$2.Read):!1}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵprov=C({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();function Nt(){q$2(`MOCKS`,`No mocks available in production`)}var pn=()=>[import(`./chunk-Be-Bz9HN.js`).then(e=>e.ChatComponent)];function un(e,m){e&1&&Ai$1(0,`global-chat`)}var Pt=(()=>{class e{constructor(){this.load_settings_schema=()=>import(`./chunk-C_d41ROx.js`),this.has_chat=u9(`chat.enabled`,!1),this._placeos=m$1(Q$e)}ngOnInit(){X$e(Nt),this._placeos.init()}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵcmp=Ue({type:e,selectors:[[`app-root`]],decls:10,vars:2,consts:[[`href`,`#stagehand-page-content`,1,`skip-link`],[1,`relative`,`h-1/2`,`w-full`,`flex-1`],[3,`loadSchema`]],template:function(i,n){i&1&&($r(0,`a`,0),gs(1,` Skip to page content `),Yr(),Ai$1(2,`global-banner`),$r(3,`div`,1),Ai$1(4,`router-outlet`),Yr(),D0(5,un,1,0),wW(6,5,pn),Ai$1(8,`global-loading`)(9,`settings-debug-panel-launcher`,2)),i&2&&(_t$1(6),MW(n.has_chat()),_t$1(3),ml(`loadSchema`,n.load_settings_schema))},dependencies:[VI,wt,Et,At],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}`]})}}return e})();var J={production:!0};var Ot=[{path:`unauthorised`,component:Tt},{path:`alerts`,loadComponent:()=>import(`./chunk-DuZB1dus.js`).then(e=>e.AlertsComponent),canActivate:[k]},{path:`alerts/:id`,loadComponent:()=>import(`./chunk-DuZB1dus.js`).then(e=>e.AlertsComponent),canActivate:[k]},{path:`remote-support`,loadComponent:()=>import(`./chunk-QnQxAdBO.js`).then(e=>e.RemoteSupportComponent),canActivate:[k]},{path:`analytics`,loadComponent:()=>import(`./chunk-BTVVMd2M.js`).then(e=>e.AnalyticsComponent),canActivate:[k]},{path:`dashboards`,loadComponent:()=>import(`./chunk-D4uchDGz.js`).then(e=>e.DashboardsComponent),canActivate:[k],children:[{path:`list`,loadComponent:()=>import(`./chunk-B7XYzreu.js`).then(e=>e.DashboardListComponent)},{path:`:id/alerts`,loadComponent:()=>import(`./chunk-DsxboE8Y.js`).then(e=>e.DashboardAlertListComponent)},{path:`:id/alerts/manage`,loadComponent:()=>import(`./chunk-CM8GWUR4.js`).then(e=>e.DashboardAlertManageComponent)},{path:`:id/alerts/manage/:alert_id`,loadComponent:()=>import(`./chunk-CM8GWUR4.js`).then(e=>e.DashboardAlertManageComponent)},{path:`manage`,loadComponent:()=>import(`./chunk-BLg3e-FD.js`).then(e=>e.DashboardManageComponent)},{path:`manage/:id`,loadComponent:()=>import(`./chunk-BLg3e-FD.js`).then(e=>e.DashboardManageComponent)},{path:`view/:id`,loadComponent:()=>import(`./chunk-B6ilqGOJ.js`).then(e=>e.DashboardViewComponent)},{path:`**`,redirectTo:`list`}]},{path:`recorder-grid`,loadComponent:()=>import(`./chunk-DKZPWqAn.js`).then(e=>e.RecorderGridViewComponent),canActivate:[k]},{path:`**`,redirectTo:`alerts`}];var Lt={providers:[Bz(),e8(Ot,t8()),mO(wOe),VOe(`ngsw-worker.js`,{enabled:J.production}),{provide:fr$1,useValue:h$e({showDialog:!1})},{provide:gH,deps:[jt$1]}]};J.production;dq(Pt,Lt).catch(e=>console.error(e));export{L as C,Lt$1 as S,xi as _,Pe as a,G$1 as b,Mi as c,No as d,Qi as f,wo as g,Wn as h,Be as i,Mn as l,So as m,Yt$1 as n,Br as o,Si as p,mt as r,Ci as s,f as t,Ni as u,xo as v,Z as w,I$1 as x,Bt$1 as y};