import{t as l$1}from"./chunk-Da4-SChG.js";import{$r as ri,Br as pe,Fr as oT,Pi as y,Rt as Uy,_i as ve,an as Yt,cr as it,kt as Sr,xi as w}from"./chunk-lzlGCUxG.js";import{Jt as C,Qt as be,Yt as De}from"./main-ZW345KQF.js";import{D as y$1,_ as g,d as X,l as Q$1,o as Oe,u as T$1}from"./chunk-BGZVjTZb.js";var u;var z=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function ot(){if(u)return u;if(typeof document!=`object`||!document)return u=new Set(z),u;let i=document.createElement(`input`);return u=new Set(z.filter(t=>(i.setAttribute(`type`,t),i.type===t))),u}var l=(function(i){return i[i.FADING_IN=0]=`FADING_IN`,i[i.VISIBLE=1]=`VISIBLE`,i[i.FADING_OUT=2]=`FADING_OUT`,i[i.HIDDEN=3]=`HIDDEN`,i})(l||{});var D=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=l.HIDDEN;constructor(t,e,n,s=!1){this._renderer=t,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=s}fadeOut(){this._renderer.fadeOutRipple(this)}};var j=Oe({passive:!0,capture:!0});var T=class{_events=new Map;addHandler(t,e,n,s){let r=this._events.get(e);if(r){let d=r.get(n);d?d.add(s):r.set(n,new Set([s]))}else this._events.set(e,new Map([[n,new Set([s])]])),t.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,j)})}removeHandler(t,e,n){let s=this._events.get(t);if(!s)return;let r=s.get(e);r&&(r.delete(n),r.size===0&&s.delete(e),s.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,j)))}_delegateEventHandler=t=>{let e=y$1(t);e&&this._events.get(t.type)?.forEach((n,s)=>{(s===e||s.contains(e))&&n.forEach(r=>r.handleEvent(t))})}};var V={enterDuration:225,exitDuration:150};var Q=800;var Z=Oe({passive:!0,capture:!0});var $=[`mousedown`,`touchstart`];var Y=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var W=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=oT({type:i,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,s){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return i})();var R=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new T;constructor(t,e,n,s,r){this._target=t,this._ngZone=e,this._platform=s,s.isBrowser&&(this._containerElement=g(n)),r&&r.get(T$1).load(W)}fadeInRipple(t,e,n={}){let s=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=l$1(l$1({},V),n.animation);n.centered&&(t=s.left+s.width/2,e=s.top+s.height/2);let d=n.radius||tt(t,e,s),q=t-s.left,J=e-s.top,m=r.enterDuration,o=document.createElement(`div`);o.classList.add(`mat-ripple-element`),o.style.left=`${q-d}px`,o.style.top=`${J-d}px`,o.style.height=`${d*2}px`,o.style.width=`${d*2}px`,n.color!=null&&(o.style.backgroundColor=n.color),o.style.transitionDuration=`${m}ms`,this._containerElement.appendChild(o);let I=window.getComputedStyle(o),K=I.transitionProperty,w=I.transitionDuration,_=K===`none`||w===`0s`||w===`0s, 0s`||s.width===0&&s.height===0,c=new D(this,o,n,_);o.style.transform=`scale3d(1, 1, 1)`,c.state=l.FADING_IN,n.persistent||(this._mostRecentTransientRipple=c);let h=null;return!_&&(m||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let M=()=>{h&&(h.fallbackTimer=null),clearTimeout(O),this._finishRippleTransition(c)},v=()=>this._destroyRipple(c),O=setTimeout(v,m+100);o.addEventListener(`transitionend`,M),o.addEventListener(`transitioncancel`,v),h={onTransitionEnd:M,onTransitionCancel:v,fallbackTimer:O}}),this._activeRipples.set(c,h),(_||!m)&&this._finishRippleTransition(c),c}fadeOutRipple(t){if(t.state===l.FADING_OUT||t.state===l.HIDDEN)return;let e=t.element,n=l$1(l$1({},V),t.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity=`0`,t.state=l.FADING_OUT,(t._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let e=g(t);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,$.forEach(n=>{i._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(t){t.type===`mousedown`?this._onMousedown(t):t.type===`touchstart`?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Y.forEach(e=>{this._triggerElement.addEventListener(e,this,Z)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===l.FADING_IN?this._startFadeOutTransition(t):t.state===l.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let e=t===this._mostRecentTransientRipple,{persistent:n}=t.config;t.state=l.VISIBLE,!n&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=l.HIDDEN,e!==null&&(t.element.removeEventListener(`transitionend`,e.onTransitionEnd),t.element.removeEventListener(`transitioncancel`,e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),t.element.remove()}_onMousedown(t){let e=X(t),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Q;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!Q$1(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=t.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let e=t.state===l.VISIBLE||t.config.terminateOnPointerUp&&t.state===l.FADING_IN;!t.config.persistent&&e&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&($.forEach(e=>i._eventManager.removeHandler(e,t,this)),this._pointerUpEventsRegistered&&(Y.forEach(e=>t.removeEventListener(e,this,Z)),this._pointerUpEventsRegistered=!1))}};function tt(i,t,e){let n=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),s=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(n*n+s*s)}var et=new w(`mat-ripple-global-options`);var yt=(()=>{class i{_elementRef=y(Yt);_animationsDisabled=De();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=y(pe),n=y(C),s=y(et,{optional:!0}),r=y(ve);this._globalOptions=s||{},this._rippleRenderer=new R(this,e,this._elementRef,n,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:l$1(l$1(l$1({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,s){return typeof e==`number`?this._rippleRenderer.fadeInRipple(e,n,l$1(l$1({},this.rippleConfig),s)):this._rippleRenderer.fadeInRipple(0,0,l$1(l$1({},this.rippleConfig),e))}static ɵfac=function(n){return new(n||i)};static ɵdir=it({type:i,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(n,s){n&2&&Uy(`mat-ripple-unbounded`,s.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return i})();var Rt=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=oT({type:i,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,s){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return i})();var Mt=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=ri({type:i});static ɵinj=Sr({imports:[be]})}return i})();export{et as a,yt as c,V as i,R as n,l as o,Rt as r,ot as s,Mt as t};