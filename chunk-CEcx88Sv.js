import{$ as Ls,Ar as l,Cn as hb,Er as zg,G as J,H as I,I as Gw,In as me,Nt as Ut,Ot as Tl,Pt as Uw,Qn as rm,R as Hg,Tt as T,Wt as Xe,Zn as rb,_t as RC,bn as fs,cr as uv,f as Br,n as $g,nr as tI,nt as Mn,o as AE,pt as Ps,q as Kg,rr as te,sn as bl,tn as aT,xn as ge,yn as fr}from"./chunk-D6s_tmkz.js";import{a as J$1,h as pe,i as G,n as B,s as Q}from"./chunk-CM7IuTLX.js";import{B as Vi,D as Vt,F as Ai,L as Pe,O as W,R as Pi,S as Me,T as Pt,V as x,j as oi,k as Ye,w as Ne,z as Ue}from"./main-5PB6HOVH.js";var ht=[`tooltip`];var dt=20;var ct=new T(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=I(ge);return()=>Me(a,{scrollThrottle:dt})}});var _t=new T(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var st=`tooltip-panel`;var pt={passive:!0};var mt=8;var ft=8;var ut=24;var gt=200;var yt=(()=>{class a{_elementRef=I(fr);_ngZone=I(me);_platform=I(G);_ariaDescriber=I(Ai);_focusMonitor=I(Pe);_dir=I(B);_injector=I(ge);_viewContainerRef=I(Mn);_mediaMatcher=I(x);_document=I(J);_renderer=I(fs);_animationsDisabled=Vi();_defaultOptions=I(_t,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=nt;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=Pi(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let i=Pi(t);this._disabled!==i&&(this._disabled=i,i?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=Q(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=Q(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(t){let i=this._message;this._message=t!=null?String(t).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(i)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new te;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=mt}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(uv(this._destroyed)).subscribe(t=>{t?t===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(i=>i()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,`tooltip`),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let e=this._createOverlay(i);this._detach(),this._portal=this._portal||new Vt(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=e.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(uv(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(t)}hide(t=this.hideDelay){let i=this._tooltipInstance;i&&(i.isVisible()?i.hide(t):(i._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&s._origin instanceof fr)return this._overlayRef;this._detach()}let i=this._injector.get(W).getAncestorScrollContainers(this._elementRef),e=`${this._cssClassPrefix}-${st}`,o=Ne(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i).withPopoverLocation(`global`);return o.positionChanges.pipe(uv(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Ye(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,e]:e,scrollStrategy:this._injector.get(ct)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(uv(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(uv(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(uv(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(uv(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let i=t.getConfig().positionStrategy,e=this._getOrigin(),o=this._getOverlayPosition();i.withPositions([this._addOffset(l(l({},e.main),o.main)),this._addOffset(l(l({},e.fallback),o.fallback))])}_addOffset(t){let i=ft,e=!this._dir||this._dir.value==`ltr`;return t.originY===`top`?t.offsetY=-i:t.originY===`bottom`?t.offsetY=i:t.originX===`start`?t.offsetX=e?-i:i:t.originX===`end`&&(t.offsetX=e?i:-i),t}_getOrigin(){let t=!this._dir||this._dir.value==`ltr`,i=this.position,e;i==`above`||i==`below`?e={originX:`center`,originY:i==`above`?`top`:`bottom`}:i==`before`||i==`left`&&t||i==`right`&&!t?e={originX:`start`,originY:`center`}:(i==`after`||i==`right`&&t||i==`left`&&!t)&&(e={originX:`end`,originY:`center`});let{x:o,y:s}=this._invertPosition(e.originX,e.originY);return{main:e,fallback:{originX:o,originY:s}}}_getOverlayPosition(){let t=!this._dir||this._dir.value==`ltr`,i=this.position,e;i==`above`?e={overlayX:`center`,overlayY:`bottom`}:i==`below`?e={overlayX:`center`,overlayY:`top`}:i==`before`||i==`left`&&t||i==`right`&&!t?e={overlayX:`end`,overlayY:`center`}:(i==`after`||i==`right`&&t||i==`left`&&!t)&&(e={overlayX:`start`,overlayY:`center`});let{x:o,y:s}=this._invertPosition(e.overlayX,e.overlayY);return{main:e,fallback:{overlayX:o,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),AE(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,i){return this.position===`above`||this.position===`below`?i===`top`?i=`bottom`:i===`bottom`&&(i=`top`):t===`end`?t=`start`:t===`start`&&(t=`end`),{x:t,y:i}}_updateCurrentPositionClass(t){let{overlayY:i,originX:e,originY:o}=t,s;if(i===`center`?this._dir&&this._dir.value===`rtl`?s=e===`end`?`left`:`right`:s=e===`start`?`left`:`right`:s=i===`bottom`&&o===`top`?`above`:`below`,s!==this._currentPosition){let _=this._overlayRef;if(_){let w=`${this._cssClassPrefix}-${st}-`;_.removePanelClass(w+this._currentPosition),_.addPanelClass(w+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,t=>{let i=t.targetTouches?.[0],e=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,e)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener(`mouseenter`,t=>{this._setupPointerExitEventsIfNeeded();let i;t.x!==void 0&&t.y!==void 0&&(i=t),this.show(void 0,i)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,t=>{let i=t.relatedTarget;(!i||!this._overlayRef?.overlayElement.contains(i))&&this.hide()}),this._addListener(`wheel`,t=>{if(this._isTooltipVisible()){let i=this._document.elementFromPoint(t.clientX,t.clientY),e=this._elementRef.nativeElement;i!==e&&!e.contains(i)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,t),this._addListener(`touchcancel`,t)}}}_addListener(t,i){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,i,pt))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t==`function`?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!==`off`){let i=this._elementRef.nativeElement,e=i.style;(t===`on`||i.nodeName!==`INPUT`&&i.nodeName!==`TEXTAREA`)&&(e.userSelect=e.msUserSelect=e.webkitUserSelect=e.MozUserSelect=`none`),(t===`on`||!i.draggable)&&(e.webkitUserDrag=`none`),e.touchAction=`none`,e.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,`tooltip`),this._isDestroyed||AE({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type===`keydown`?this._isTooltipVisible()&&t.keyCode===27&&!J$1(t):!0;static ɵfac=function(i){return new(i||a)};static ɵdir=Ps({type:a,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(i,e){i&2&&Kg(`mat-mdc-tooltip-disabled`,e.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return a})();var nt=(()=>{class a{_changeDetectorRef=I(aT);_elementRef=I(fr);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Vi();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new te;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>ut&&t.width>=gt}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let i=this._tooltip.nativeElement,e=this._showAnimation,o=this._hideAnimation;if(i.classList.remove(t?o:e),i.classList.add(t?e:o),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let s=getComputedStyle(i);(s.getPropertyValue(`animation-duration`)===`0s`||s.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(i.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(t))}static ɵfac=function(i){return new(i||a)};static ɵcmp=RC({type:a,selectors:[[`mat-tooltip-component`]],viewQuery:function(i,e){if(i&1&&zg(ht,7),i&2){let o;Uw(o=Gw())&&(e._tooltip=o.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(i,e){i&1&&Hg(`mouseleave`,function(s){return e._handleMouseLeave(s)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(i,e){i&1&&(bl(0,`div`,1,0),$g(`animationend`,function(s){return e._handleAnimationEnd(s)}),bl(2,`div`,2),hb(3),Tl()()),i&2&&(rb(e.tooltipClass),Kg(`mdc-tooltip--multiline`,e._isMultiline),tI(3),rm(e.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2})}return a})();var jt=(()=>{class a{static ɵfac=function(i){return new(i||a)};static ɵmod=Ls({type:a});static ɵinj=Br({imports:[Ue,oi,pe,Pt]})}return a})();var rt=class{constructor(n,t){this._max_vw=t,this._document=I(J),this._start_x=0,this._start_width=0,this.min_width=320,this.width=Xe(n),this.panel_width=Ut(()=>`min(${this.width()}px, ${this._max_vw}vw)`)}maxWidth(){return this._document.documentElement.clientWidth*this._max_vw/100}start(n){if(n.button!==0||!n.isPrimary)return;let t=n.currentTarget;this._start_x=n.clientX,this._start_width=t.parentElement.getBoundingClientRect().width,t.setPointerCapture(n.pointerId),n.preventDefault()}move(n){n.currentTarget.hasPointerCapture(n.pointerId)&&this.setWidth(this._start_width+this._start_x-n.clientX)}end(n){let t=n.currentTarget;t.hasPointerCapture(n.pointerId)&&t.releasePointerCapture(n.pointerId)}onKeydown(n){if(n.key!==`ArrowLeft`&&n.key!==`ArrowRight`)return;n.preventDefault();let t=Math.min(this.width(),this.maxWidth());this.setWidth(t+(n.key===`ArrowLeft`?16:-16))}setWidth(n){this.width.set(Math.min(this.maxWidth(),Math.max(this.min_width,n)))}};export{rt as n,yt as r,jt as t};
//# debugId=ca4889f5-bab9-53bd-9660-ed9cbcf37609
//# sourceMappingURL=chunk-CEcx88Sv.js.map