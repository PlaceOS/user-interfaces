import{t as l$1}from"./chunk-BwCtja5l.js";import{Br as pe,Fr as oT,Pi as y$1,Rt as Uy,_i as ve,an as Yt,cr as it$1,xi as w}from"./chunk-BF3rhqXc.js";import{_ as C,v as De}from"./main.js";import{_ as g,i as Fe,l as Q$1,n as E,o as M,p as X}from"./chunk-V1WJ8TrX.js";var u;var H=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function it(){if(u)return u;if(typeof document!=`object`||!document)return u=new Set(H),u;let s=document.createElement(`input`);return u=new Set(H.filter(t=>(s.setAttribute(`type`,t),s.type===t))),u}var l=(function(s){return s[s.FADING_IN=0]=`FADING_IN`,s[s.VISIBLE=1]=`VISIBLE`,s[s.FADING_OUT=2]=`FADING_OUT`,s[s.HIDDEN=3]=`HIDDEN`,s})(l||{});var y=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=l.HIDDEN;constructor(t,e,n,i=!1){this._renderer=t,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}};var B=Fe({passive:!0,capture:!0});var D=class{_events=new Map;addHandler(t,e,n,i){let r=this._events.get(e);if(r){let d=r.get(n);d?d.add(i):r.set(n,new Set([i]))}else this._events.set(e,new Map([[n,new Set([i])]])),t.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,B)})}removeHandler(t,e,n){let i=this._events.get(t);if(!i)return;let r=i.get(e);r&&(r.delete(n),r.size===0&&i.delete(e),i.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,B)))}_delegateEventHandler=t=>{let e=E(t);e&&this._events.get(t.type)?.forEach((n,i)=>{(i===e||i.contains(e))&&n.forEach(r=>r.handleEvent(t))})}};var G={enterDuration:225,exitDuration:150};var q=800;var z=Fe({passive:!0,capture:!0});var V=[`mousedown`,`touchstart`];var Z=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var J=(()=>{class s{static ɵfac=function(n){return new(n||s)};static ɵcmp=oT({type:s,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return s})();var I=class s{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new D;constructor(t,e,n,i,r){this._target=t,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=g(n)),r&&r.get(M).load(J)}fadeInRipple(t,e,n={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=l$1(l$1({},G),n.animation);n.centered&&(t=i.left+i.width/2,e=i.top+i.height/2);let d=n.radius||K(t,e,i),$=t-i.left,j=e-i.top,m=r.enterDuration,o=document.createElement(`div`);o.classList.add(`mat-ripple-element`),o.style.left=`${$-d}px`,o.style.top=`${j-d}px`,o.style.height=`${d*2}px`,o.style.width=`${d*2}px`,n.color!=null&&(o.style.backgroundColor=n.color),o.style.transitionDuration=`${m}ms`,this._containerElement.appendChild(o);let R=window.getComputedStyle(o),Y=R.transitionProperty,w=R.transitionDuration,_=Y===`none`||w===`0s`||w===`0s, 0s`||i.width===0&&i.height===0,c=new y(this,o,n,_);o.style.transform=`scale3d(1, 1, 1)`,c.state=l.FADING_IN,n.persistent||(this._mostRecentTransientRipple=c);let h=null;return!_&&(m||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let O=()=>{h&&(h.fallbackTimer=null),clearTimeout(N),this._finishRippleTransition(c)},v=()=>this._destroyRipple(c),N=setTimeout(v,m+100);o.addEventListener(`transitionend`,O),o.addEventListener(`transitioncancel`,v),h={onTransitionEnd:O,onTransitionCancel:v,fallbackTimer:N}}),this._activeRipples.set(c,h),(_||!m)&&this._finishRippleTransition(c),c}fadeOutRipple(t){if(t.state===l.FADING_OUT||t.state===l.HIDDEN)return;let e=t.element,n=l$1(l$1({},G),t.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity=`0`,t.state=l.FADING_OUT,(t._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let e=g(t);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,V.forEach(n=>{s._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(t){t.type===`mousedown`?this._onMousedown(t):t.type===`touchstart`?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Z.forEach(e=>{this._triggerElement.addEventListener(e,this,z)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===l.FADING_IN?this._startFadeOutTransition(t):t.state===l.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let e=t===this._mostRecentTransientRipple,{persistent:n}=t.config;t.state=l.VISIBLE,!n&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=l.HIDDEN,e!==null&&(t.element.removeEventListener(`transitionend`,e.onTransitionEnd),t.element.removeEventListener(`transitioncancel`,e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),t.element.remove()}_onMousedown(t){let e=X(t),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+q;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!Q$1(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=t.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let e=t.state===l.VISIBLE||t.config.terminateOnPointerUp&&t.state===l.FADING_IN;!t.config.persistent&&e&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(V.forEach(e=>s._eventManager.removeHandler(e,t,this)),this._pointerUpEventsRegistered&&(Z.forEach(e=>t.removeEventListener(e,this,z)),this._pointerUpEventsRegistered=!1))}};function K(s,t,e){let n=Math.max(Math.abs(s-e.left),Math.abs(s-e.right)),i=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(n*n+i*i)}var Q=new w(`mat-ripple-global-options`);var vt=(()=>{class s{_elementRef=y$1(Yt);_animationsDisabled=De();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=y$1(pe),n=y$1(C),i=y$1(Q,{optional:!0}),r=y$1(ve);this._globalOptions=i||{},this._rippleRenderer=new I(this,e,this._elementRef,n,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:l$1(l$1(l$1({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,i){return typeof e==`number`?this._rippleRenderer.fadeInRipple(e,n,l$1(l$1({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,l$1(l$1({},this.rippleConfig),e))}static ɵfac=function(n){return new(n||s)};static ɵdir=it$1({type:s,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(n,i){n&2&&Uy(`mat-ripple-unbounded`,i.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return s})();var Tt=(()=>{class s{static ɵfac=function(n){return new(n||s)};static ɵcmp=oT({type:s,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return s})();export{it as a,Tt as i,I as n,l as o,Q as r,vt as s,G as t};
//# debugId=9e3218f9-504c-5ab8-a9cb-f4bc84b7c8f3
//# sourceMappingURL=chunk-lGKy5OGG.js.map