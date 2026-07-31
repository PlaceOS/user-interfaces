import {aK as ye,aL as ge,aM as qa,u,aN as q,aO as st,aP as tc,aQ as kn,aR as O,aS as j,aT as Nt,aU as re$1,aV as Q,aW as mn$1,aX as Ke$1,aY as df,aZ as es,a_ as ai$1,a$ as Y,b0 as ie$1,b1 as Ee,a4 as F,ah as K,b2 as ee$1,b3 as An,b4 as rn$1,b5 as Te,b6 as Le,b7 as on$1,b8 as Yi$1,b9 as _t$1,ba as Jn,bb as Ft,bc as Qe,bd as an$1,be as In,bf as Et$1,I,B,t as tt,bg as F2e,bh as Re,bi as Je$1,_,P,H,h,bj as _e,T,f,bk as Ta,bl as At,bm as oe$1,bn as se$1,bo as di$1,bp as jr,D,bq as en$1,br as $r,bs as Jl,bt as Pl,bu as Tt,bv as QGe,bw as Vt,bx as qi$1,by as Ky,bz as xe,bA as xr,bB as it$1,bC as Gte,bD as ic,a0 as je,an as vh,w,bE as PF,a5 as $e,M,aj as Vn,bF as te$1,bG as le,bH as Ka,bI as Fn$1,bJ as Xe$1,bK as z4,bL as he,bM as Lc,bN as Yd,bO as Mn,bP as Om,bQ as ze,bR as Tn,bS as fa,bT as FM,s as sn$1,a8 as ue,a9 as X,aa as S,ab as J,am as Kt$1,bU as $Y,bV as rM,bW as hi$1,bX as $d,bY as jd,X as E,ai as V,bZ as Qk}from'./main.js';function Xt(r){let n=r.cloneNode(true),t=n.querySelectorAll("[id]"),e=r.nodeName.toLowerCase();n.removeAttribute("id");for(let i=0;i<t.length;i++)t[i].removeAttribute("id");return e==="canvas"?Ue(r,n):(e==="input"||e==="select"||e==="textarea")&&Ze(r,n),qe("canvas",r,n,Ue),qe("input, textarea, select",r,n,Ze),n}function qe(r,n,t,e){let i=n.querySelectorAll(r);if(i.length){let a=t.querySelectorAll(r);for(let o=0;o<i.length;o++)e(i[o],a[o]);}}var Ni=0;function Ze(r,n){n.type!=="file"&&(n.value=r.value),n.type==="radio"&&n.name&&(n.name=`mat-clone-${n.name}-${Ni++}`);}function Ue(r,n){let t=n.getContext("2d");if(t)try{t.drawImage(r,0,0);}catch{}}function ae(r){let n=r.getBoundingClientRect();return {top:n.top,right:n.right,bottom:n.bottom,left:n.left,width:n.width,height:n.height,x:n.x,y:n.y}}function Jt(r,n,t){let{top:e,bottom:i,left:a,right:o}=r;return t>=e&&t<=i&&n>=a&&n<=o}function Fi(r,n){let t=n.left<r.left,e=n.left+n.width>r.right,i=n.top<r.top,a=n.top+n.height>r.bottom;return t||e||i||a}function bt(r,n,t){r.top+=n,r.bottom=r.top+r.height,r.left+=t,r.right=r.left+r.width;}function Ke(r,n,t,e){let{top:i,right:a,bottom:o,left:s,width:l,height:c}=r,h=l*n,y=c*n;return e>i-y&&e<o+y&&t>s-h&&t<a+h}var Pt=class{_document;positions=new Map;constructor(n){this._document=n;}clear(){this.positions.clear();}cache(n){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),n.forEach(t=>{this.positions.set(t,{scrollPosition:{top:t.scrollTop,left:t.scrollLeft},clientRect:ae(t)});});}handleScroll(n){let t=hi$1(n),e=this.positions.get(t);if(!e)return null;let i=e.scrollPosition,a,o;if(t===this._document){let c=this.getViewportScrollPosition();a=c.top,o=c.left;}else a=t.scrollTop,o=t.scrollLeft;let s=i.top-a,l=i.left-o;return this.positions.forEach((c,h)=>{c.clientRect&&t!==h&&t.contains(h)&&bt(c.clientRect,s,l);}),i.top=a,i.left=o,{top:s,left:l}}getViewportScrollPosition(){return {top:window.scrollY,left:window.scrollX}}};function li(r,n){let t=r.rootNodes;if(t.length===1&&t[0].nodeType===n.ELEMENT_NODE)return t[0];let e=n.createElement("div");return t.forEach(i=>e.appendChild(i)),e}function re(r,n,t){for(let e in n)if(n.hasOwnProperty(e)){let i=n[e];i?r.setProperty(e,i,t?.has(e)?"important":""):r.removeProperty(e);}return r}function it(r,n){let t=n?"":"none";re(r.style,{"touch-action":n?"":"none","-webkit-user-drag":n?"":"none","-webkit-tap-highlight-color":n?"":"transparent","user-select":t,"-ms-user-select":t,"-webkit-user-select":t,"-moz-user-select":t});}function Ye(r,n,t){re(r.style,{position:n?"":"fixed",top:n?"":"0",opacity:n?"":"0",left:n?"":"-999em"},t);}function It(r,n){return n&&n!="none"?r+" "+n:r}function Xe(r,n){r.style.width=`${n.width}px`,r.style.height=`${n.height}px`,r.style.transform=ut(n.left,n.top);}function ut(r,n){return `translate3d(${Math.round(r)}px, ${Math.round(n)}px, 0)`}var _t={capture:true},Kt={passive:false,capture:true},Hi=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275cmp=B({type:r,selectors:[["ng-component"]],hostAttrs:["cdk-drag-resets-container",""],decls:0,vars:0,template:function(e,i){},styles:[`@layer cdk-resets {
  .cdk-drag-preview {
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    inset: auto;
  }
}
.cdk-drag-placeholder *,
.cdk-drag-preview * {
  pointer-events: none !important;
}
`],encapsulation:2})}return r})(),Rt=(()=>{class r{_ngZone=u(ee$1);_document=u(le);_styleLoader=u(en$1);_renderer=u(Fn$1).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new j;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=I([]);_globalListeners;_draggingPredicate=t=>t.isDragging();_domNodesToDirectives=null;pointerMove=new j;pointerUp=new j;registerDropContainer(t){this._dropInstances.has(t)||this._dropInstances.add(t);}registerDragItem(t){this._dragInstances.add(t),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,"touchmove",this._persistentTouchmoveListener,Kt);});}removeDropContainer(t){this._dropInstances.delete(t);}removeDragItem(t){this._dragInstances.delete(t),this.stopDragging(t),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.();}startDragging(t,e){if(!(this._activeDragInstances().indexOf(t)>-1)&&(this._styleLoader.load(Hi),this._activeDragInstances.update(i=>[...i,t]),this._activeDragInstances().length===1)){let i=e.type.startsWith("touch"),a=s=>this.pointerUp.next(s),o=[["scroll",s=>this._scroll.next(s),_t],["selectstart",this._preventDefaultWhileDragging,Kt]];i?o.push(["touchend",a,_t],["touchcancel",a,_t]):o.push(["mouseup",a,_t]),i||o.push(["mousemove",s=>this.pointerMove.next(s),Kt]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=o.map(([s,l,c])=>this._renderer.listen(this._document,s,l,c));});}}stopDragging(t){this._activeDragInstances.update(e=>{let i=e.indexOf(t);return i>-1?(e.splice(i,1),[...e]):e}),this._activeDragInstances().length===0&&this._clearGlobalListeners();}isDragging(t){return this._activeDragInstances().indexOf(t)>-1}scrolled(t){let e=[this._scroll];return t&&t!==this._document&&e.push(new Te(i=>this._ngZone.runOutsideAngular(()=>{let a=this._renderer.listen(t,"scroll",o=>{this._activeDragInstances().length&&i.next(o);},_t);return ()=>{a();}}))),ai$1(...e)}registerDirectiveNode(t,e){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(t,e);}removeDirectiveNode(t){this._domNodesToDirectives?.delete(t);}getDragDirectiveForNode(t){return this._domNodesToDirectives?.get(t)||null}ngOnDestroy(){this._dragInstances.forEach(t=>this.removeDragItem(t)),this._dropInstances.forEach(t=>this.removeDropContainer(t)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete();}_preventDefaultWhileDragging=t=>{this._activeDragInstances().length>0&&t.preventDefault();};_persistentTouchmoveListener=t=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&t.preventDefault(),this.pointerMove.next(t));};_clearGlobalListeners(){this._globalListeners?.forEach(t=>t()),this._globalListeners=void 0;}static \u0275fac=function(e){return new(e||r)};static \u0275prov=te$1({token:r,factory:r.\u0275fac})}return r})();function Je(r){let n=r.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(r)*n}function zi(r){let n=getComputedStyle(r),t=Yt(n,"transition-property"),e=t.find(s=>s==="transform"||s==="all");if(!e)return 0;let i=t.indexOf(e),a=Yt(n,"transition-duration"),o=Yt(n,"transition-delay");return Je(a[i])+Je(o[i])}function Yt(r,n){return r.getPropertyValue(n).split(",").map(e=>e.trim())}var Vi=new Set(["position"]),te=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(n,t,e,i,a,o,s,l,c,h){this._document=n,this._rootElement=t,this._direction=e,this._initialDomRect=i,this._previewTemplate=a,this._previewClass=o,this._pickupPositionOnPage=s,this._initialTransform=l,this._zIndex=c,this._renderer=h;}attach(n){this._preview=this._createPreview(),n.appendChild(this._preview),ti(this._preview)&&this._preview.showPopover();}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null;}setTransform(n){this._preview.style.transform=n;}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(n){this._preview.classList.add(n);}getTransitionDuration(){return zi(this._preview)}addEventListener(n,t){return this._renderer.listen(this._preview,n,t)}_createPreview(){let n=this._previewTemplate,t=this._previewClass,e=n?n.template:null,i;if(e&&n){let a=n.matchSize?this._initialDomRect:null,o=n.viewContainer.createEmbeddedView(e,n.context);o.detectChanges(),i=li(o,this._document),this._previewEmbeddedView=o,n.matchSize?Xe(i,a):i.style.transform=ut(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y);}else i=Xt(this._rootElement),Xe(i,this._initialDomRect),this._initialTransform&&(i.style.transform=this._initialTransform);return re(i.style,{"pointer-events":"none",margin:ti(i)?"0 auto 0 0":"0",position:"fixed",top:"0",left:"0","z-index":this._zIndex+""},Vi),it(i,false),i.classList.add("cdk-drag-preview"),i.setAttribute("popover","manual"),i.setAttribute("dir",this._direction),t&&(Array.isArray(t)?t.forEach(a=>i.classList.add(a)):i.classList.add(t)),i}};function ti(r){return "showPopover"in r}var Gi={passive:true},ei={passive:false},Wi={passive:false,capture:true},ji=800,ii="cdk-drag-placeholder",ni=new Set(["position"]);function di(r,n,t={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let e=r.get(Xe$1,null,{optional:true})||r.get(Fn$1).createRenderer(null,null);return new ee(n,t,r.get(le),r.get(ee$1),r.get(Ka),r.get(Rt),e)}var ee=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=I(false);_hasMoved=false;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new j;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=xe.EMPTY;_pointerUpSubscription=xe.EMPTY;_scrollSubscription=xe.EMPTY;_resizeSubscription=xe.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=true;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction="ltr";_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(n){n!==this._disabled&&(this._disabled=n,this._toggleNativeDragInteractions(),this._handles.forEach(t=>it(t,n)));}_disabled=false;beforeStarted=new j;started=new j;released=new j;ended=new j;entered=new j;exited=new j;dropped=new j;moved=this._moveEvents;data;constrainPosition;constructor(n,t,e,i,a,o,s){this._config=t,this._document=e,this._ngZone=i,this._viewportRuler=a,this._dragDropRegistry=o,this._renderer=s,this.withRootElement(n).withParent(t.parentDragRef||null),this._parentPositions=new Pt(e),o.registerDragItem(this);}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(n){this._handles=n.map(e=>Yi$1(e)),this._handles.forEach(e=>it(e,this.disabled)),this._toggleNativeDragInteractions();let t=new Set;return this._disabledHandles.forEach(e=>{this._handles.indexOf(e)>-1&&t.add(e);}),this._disabledHandles=t,this}withPreviewTemplate(n){return this._previewTemplate=n,this}withPlaceholderTemplate(n){return this._placeholderTemplate=n,this}withRootElement(n){let t=Yi$1(n);if(t!==this._rootElement){this._removeRootElementListeners();let e=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[e.listen(t,"mousedown",this._pointerDown,ei),e.listen(t,"touchstart",this._pointerDown,Gi),e.listen(t,"dragstart",this._nativeDragStart,ei)]),this._initialTransform=void 0,this._rootElement=t;}return typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(n){return this._boundaryElement=n?Yi$1(n):null,this._resizeSubscription.unsubscribe(),n&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(n){return this._parentDragRef=n,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null;}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0};}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&Fi(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let n=this._boundaryElement.getBoundingClientRect(),t=this._rootElement.getBoundingClientRect(),e=0,i=0;t.left<n.left?e=n.left-t.left:t.right>n.right&&(e=n.right-t.right),t.top<n.top?i=n.top-t.top:t.bottom>n.bottom&&(i=n.bottom-t.bottom);let a=this._activeTransform.x,o=this._activeTransform.y,s=a+e,l=o+i;this._rootElement.style.transform=ut(s,l),this._activeTransform={x:s,y:l},this._passiveTransform={x:s,y:l};}}disableHandle(n){!this._disabledHandles.has(n)&&this._handles.indexOf(n)>-1&&(this._disabledHandles.add(n),it(n,true));}enableHandle(n){this._disabledHandles.has(n)&&(this._disabledHandles.delete(n),it(n,this.disabled));}withDirection(n){return this._direction=n,this}_withDropContainer(n){this._dropContainer=n;}getFreeDragPosition(){let n=this.isDragging()?this._activeTransform:this._passiveTransform;return {x:n.x,y:n.y}}setFreeDragPosition(n){return this._activeTransform={x:0,y:0},this._passiveTransform.x=n.x,this._passiveTransform.y=n.y,this._dropContainer||this._applyRootElementTransform(n.x,n.y),this}withPreviewContainer(n){return this._previewContainer=n,this}_sortFromLastPointerPosition(){let n=this._lastKnownPointerPosition;n&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(n),n);}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0;}_destroyPreview(){this._preview?.destroy(),this._preview=null;}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null;}_pointerDown=n=>{if(this.beforeStarted.next(),this._handles.length){let t=this._getTargetHandle(n);t&&!this._disabledHandles.has(t)&&!this.disabled&&this._initializeDragSequence(t,n);}else this.disabled||this._initializeDragSequence(this._rootElement,n);};_pointerMove=n=>{let t=this._getPointerPositionOnPage(n);if(!this._hasStartedDragging()){let i=Math.abs(t.x-this._pickupPositionOnPage.x),a=Math.abs(t.y-this._pickupPositionOnPage.y);if(i+a>=this._config.dragStartThreshold){let s=Date.now()>=this._dragStartTime+this._getDragStartDelay(n),l=this._dropContainer;if(!s){this._endDragSequence(n);return}(!l||!l.isDragging()&&!l.isReceiving())&&(n.cancelable&&n.preventDefault(),this._hasStartedDragging.set(true),this._ngZone.run(()=>this._startDragSequence(n)));}return}n.cancelable&&n.preventDefault();let e=this._getConstrainedPointerPosition(t);if(this._hasMoved=true,this._lastKnownPointerPosition=t,this._updatePointerDirectionDelta(e),this._dropContainer)this._updateActiveDropContainer(e,t);else {let i=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,a=this._activeTransform;a.x=e.x-i.x+this._passiveTransform.x,a.y=e.y-i.y+this._passiveTransform.y,this._applyRootElementTransform(a.x,a.y);}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:e,event:n,distance:this._getDragDistance(e),delta:this._pointerDirectionDelta});});};_pointerUp=n=>{this._endDragSequence(n);};_endDragSequence(n){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:n}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(n),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this);});else {this._passiveTransform.x=this._activeTransform.x;let t=this._getPointerPositionOnPage(n);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(t),dropPoint:t,event:n});}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this);}}_startDragSequence(n){pt(n)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let t=this._getShadowRoot(),e=this._dropContainer;if(t&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(t,"selectstart",Qi,Wi);}),e){let i=this._rootElement,a=i.parentNode,o=this._placeholder=this._createPlaceholderElement(),s=this._marker=this._marker||this._document.createComment("");a.insertBefore(s,i),this._initialTransform=i.style.transform||"",this._preview=new te(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(a,t)),Ye(i,false,ni),this._document.body.appendChild(a.replaceChild(o,i)),this.started.next({source:this,event:n}),e.start(),this._initialContainer=e,this._initialIndex=e.getItemIndex(this);}else this.started.next({source:this,event:n}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(e?e.getScrollableParents():[]);}_initializeDragSequence(n,t){this._parentDragRef&&t.stopPropagation();let e=this.isDragging(),i=pt(t),a=!i&&t.button!==0,o=this._rootElement,s=hi$1(t),l=!i&&this._lastTouchEventTime&&this._lastTouchEventTime+ji>Date.now(),c=i?$d(t):jd(t);if(s&&s.draggable&&t.type==="mousedown"&&t.preventDefault(),e||a||l||c)return;if(this._handles.length){let N=o.style;this._rootElementTapHighlight=N.webkitTapHighlightColor||"",N.webkitTapHighlightColor="transparent";}this._hasMoved=false,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(N=>this._updateOnScroll(N)),this._boundaryElement&&(this._boundaryRect=ae(this._boundaryElement));let h=this._previewTemplate;this._pickupPositionInElement=h&&h.template&&!h.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,n,t);let y=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(t);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:y.x,y:y.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,t);}_cleanupDragArtifacts(n){Ye(this._rootElement,true,ni),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let t=this._dropContainer,e=t.getItemIndex(this),i=this._getPointerPositionOnPage(n),a=this._getDragDistance(i),o=t._isOverContainer(i.x,i.y);this.ended.next({source:this,distance:a,dropPoint:i,event:n}),this.dropped.next({item:this,currentIndex:e,previousIndex:this._initialIndex,container:t,previousContainer:this._initialContainer,isPointerOverContainer:o,distance:a,dropPoint:i,event:n}),t.drop(this,e,this._initialIndex,this._initialContainer,o,a,i,n),this._dropContainer=this._initialContainer;});}_updateActiveDropContainer({x:n,y:t},{x:e,y:i}){let a=this._initialContainer._getSiblingContainerFromPosition(this,n,t);!a&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(n,t)&&(a=this._initialContainer),a&&a!==this._dropContainer&&this._ngZone.run(()=>{let o=this._dropContainer.getItemIndex(this),s=this._dropContainer.getItemAtIndex(o+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(a,this._dropContainer,s),this._dropContainer=a,this._dropContainer.enter(this,n,t,a===this._initialContainer&&a.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:a,currentIndex:a.getItemIndex(this)});}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(e,i),this._dropContainer._sortItem(this,n,t,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(n,t):this._applyPreviewTransform(n-this._pickupPositionInElement.x,t-this._pickupPositionInElement.y));}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let n=this._placeholder.getBoundingClientRect();this._preview.addClass("cdk-drag-animating"),this._applyPreviewTransform(n.left,n.top);let t=this._preview.getTransitionDuration();return t===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(e=>{let i=s=>{(!s||this._preview&&hi$1(s)===this._preview.element&&s.propertyName==="transform")&&(o(),e(),clearTimeout(a));},a=setTimeout(i,t*1.5),o=this._preview.addEventListener("transitionend",i);}))}_createPlaceholderElement(){let n=this._placeholderTemplate,t=n?n.template:null,e;return t?(this._placeholderRef=n.viewContainer.createEmbeddedView(t,n.context),this._placeholderRef.detectChanges(),e=li(this._placeholderRef,this._document)):e=Xt(this._rootElement),e.style.pointerEvents="none",e.classList.add(ii),e}_getPointerPositionInElement(n,t,e){let i=t===this._rootElement?null:t,a=i?i.getBoundingClientRect():n,o=pt(e)?e.targetTouches[0]:e,s=this._getViewportScrollPosition(),l=o.pageX-a.left-s.left,c=o.pageY-a.top-s.top;return {x:a.left-n.left+l,y:a.top-n.top+c}}_getPointerPositionOnPage(n){let t=this._getViewportScrollPosition(),e=pt(n)?n.touches[0]||n.changedTouches[0]||{pageX:0,pageY:0}:n,i=e.pageX-t.left,a=e.pageY-t.top;if(this._ownerSVGElement){let o=this._ownerSVGElement.getScreenCTM();if(o){let s=this._ownerSVGElement.createSVGPoint();return s.x=i,s.y=a,s.matrixTransform(o.inverse())}}return {x:i,y:a}}_getConstrainedPointerPosition(n){let t=this._dropContainer?this._dropContainer.lockAxis:null,{x:e,y:i}=this.constrainPosition?this.constrainPosition(n,this,this._initialDomRect,this._pickupPositionInElement):n;if(this.lockAxis==="x"||t==="x"?i=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis==="y"||t==="y")&&(e=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:a,y:o}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,s=this._boundaryRect,{width:l,height:c}=this._getPreviewRect(),h=s.top+o,y=s.bottom-(c-o),N=s.left+a,Lt=s.right-(l-a);e=ai(e,N,Lt),i=ai(i,h,y);}return {x:e,y:i}}_updatePointerDirectionDelta(n){let{x:t,y:e}=n,i=this._pointerDirectionDelta,a=this._pointerPositionAtLastDirectionChange,o=Math.abs(t-a.x),s=Math.abs(e-a.y);return o>this._config.pointerDirectionChangeThreshold&&(i.x=t>a.x?1:-1,a.x=t),s>this._config.pointerDirectionChangeThreshold&&(i.y=e>a.y?1:-1,a.y=e),i}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let n=this._handles.length>0||!this.isDragging();n!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=n,it(this._rootElement,n));}_removeRootElementListeners(){this._rootElementCleanups?.forEach(n=>n()),this._rootElementCleanups=void 0;}_applyRootElementTransform(n,t){let e=1/this.scale,i=ut(n*e,t*e),a=this._rootElement.style;this._initialTransform==null&&(this._initialTransform=a.transform&&a.transform!="none"?a.transform:""),a.transform=It(i,this._initialTransform);}_applyPreviewTransform(n,t){let e=this._previewTemplate?.template?void 0:this._initialTransform,i=ut(n,t);this._preview.setTransform(It(i,e));}_getDragDistance(n){let t=this._pickupPositionOnPage;return t?{x:n.x-t.x,y:n.y-t.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear();}_containInsideBoundaryOnResize(){let{x:n,y:t}=this._passiveTransform;if(n===0&&t===0||this.isDragging()||!this._boundaryElement)return;let e=this._rootElement.getBoundingClientRect(),i=this._boundaryElement.getBoundingClientRect();if(i.width===0&&i.height===0||e.width===0&&e.height===0)return;let a=i.left-e.left,o=e.right-i.right,s=i.top-e.top,l=e.bottom-i.bottom;i.width>e.width?(a>0&&(n+=a),o>0&&(n-=o)):n=0,i.height>e.height?(s>0&&(t+=s),l>0&&(t-=l)):t=0,(n!==this._passiveTransform.x||t!==this._passiveTransform.y)&&this.setFreeDragPosition({y:t,x:n});}_getDragStartDelay(n){let t=this.dragStartDelay;return typeof t=="number"?t:pt(n)?t.touch:t?t.mouse:0}_updateOnScroll(n){let t=this._parentPositions.handleScroll(n);if(t){let e=hi$1(n);this._boundaryRect&&e!==this._boundaryElement&&e.contains(this._boundaryElement)&&bt(this._boundaryRect,t.top,t.left),this._pickupPositionOnPage.x+=t.left,this._pickupPositionOnPage.y+=t.top,this._dropContainer||(this._activeTransform.x-=t.left,this._activeTransform.y-=t.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y));}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=rM(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(n,t){let e=this._previewContainer||"global";if(e==="parent")return n;if(e==="global"){let i=this._document;return t||i.fullscreenElement||i.webkitFullscreenElement||i.mozFullScreenElement||i.msFullscreenElement||i.body}return Yi$1(e)}_getPreviewRect(){return (!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=n=>{if(this._handles.length){let t=this._getTargetHandle(n);t&&!this._disabledHandles.has(t)&&!this.disabled&&n.preventDefault();}else this.disabled||n.preventDefault();};_getTargetHandle(n){return this._handles.find(t=>n.target&&(n.target===t||t.contains(n.target)))}_conditionallyInsertAnchor(n,t,e){if(n===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(t===this._initialContainer&&t.hasAnchor){let i=this._anchor??=Xt(this._placeholder);i.classList.remove(ii),i.classList.add("cdk-drag-anchor"),i.style.transform="",e?e.before(i):Yi$1(t.element).appendChild(i);}}};function ai(r,n,t){return Math.max(n,Math.min(t,r))}function pt(r){return r.type[0]==="t"}function Qi(r){r.preventDefault();}function ci(r,n,t){let e=ri(n,r.length-1),i=ri(t,r.length-1);if(e===i)return;let a=r[e],o=i<e?-1:1;for(let s=e;s!==i;s+=o)r[s]=r[s+o];r[i]=a;}function ri(r,n){return Math.max(0,Math.min(n,r))}var kt=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation="vertical";direction="ltr";constructor(n){this._dragDropRegistry=n;}_previousSwap={drag:null,delta:0,overlaps:false};start(n){this.withItems(n);}sort(n,t,e,i){let a=this._itemPositions,o=this._getItemIndexFromPointerPosition(n,t,e,i);if(o===-1&&a.length>0)return null;let s=this.orientation==="horizontal",l=a.findIndex(I=>I.drag===n),c=a[o],h=a[l].clientRect,y=c.clientRect,N=l>o?1:-1,Lt=this._getItemOffsetPx(h,y,N),Mi=this._getSiblingOffsetPx(l,a,N),Ai=a.slice();return ci(a,l,o),a.forEach((I,Oi)=>{if(Ai[Oi]===I)return;let he=I.drag===n,Mt=he?Lt:Mi,me=he?n.getPlaceholderElement():I.drag.getRootElement();I.offset+=Mt;let _e=Math.round(I.offset*(1/I.drag.scale));s?(me.style.transform=It(`translate3d(${_e}px, 0, 0)`,I.initialTransform),bt(I.clientRect,0,Mt)):(me.style.transform=It(`translate3d(0, ${_e}px, 0)`,I.initialTransform),bt(I.clientRect,Mt,0));}),this._previousSwap.overlaps=Jt(y,t,e),this._previousSwap.drag=c.drag,this._previousSwap.delta=s?i.x:i.y,{previousIndex:l,currentIndex:o}}enter(n,t,e,i){let a=this._activeDraggables,o=a.indexOf(n),s=n.getPlaceholderElement();o>-1&&a.splice(o,1);let l=i==null||i<0?this._getItemIndexFromPointerPosition(n,t,e):i,c=a[l];if(c===n&&(c=a[l+1]),!c&&(l==null||l===-1||l<a.length-1)&&this._shouldEnterAsFirstChild(t,e)&&(c=a[0]),c&&!this._dragDropRegistry.isDragging(c)){let h=c.getRootElement();h.parentElement.insertBefore(s,h),a.splice(l,0,n);}else this._element.appendChild(s),a.push(n);s.style.transform="",this._cacheItemPositions();}withItems(n){this._activeDraggables=n.slice(),this._cacheItemPositions();}withSortPredicate(n){this._sortPredicate=n;}reset(){this._activeDraggables?.forEach(n=>{let t=n.getRootElement();if(t){let e=this._itemPositions.find(i=>i.drag===n)?.initialTransform;t.style.transform=e||"";}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=false;}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(n){return this._getVisualItemPositions().findIndex(t=>t.drag===n)}getItemAtIndex(n){return this._getVisualItemPositions()[n]?.drag||null}updateOnScroll(n,t){this._itemPositions.forEach(({clientRect:e})=>{bt(e,n,t);}),this._itemPositions.forEach(({drag:e})=>{this._dragDropRegistry.isDragging(e)&&e._sortFromLastPointerPosition();});}withElementContainer(n){this._element=n;}_cacheItemPositions(){let n=this.orientation==="horizontal";this._itemPositions=this._activeDraggables.map(t=>{let e=t.getVisibleElement();return {drag:t,offset:0,initialTransform:e.style.transform||"",clientRect:ae(e)}}).sort((t,e)=>n?t.clientRect.left-e.clientRect.left:t.clientRect.top-e.clientRect.top);}_getVisualItemPositions(){return this.orientation==="horizontal"&&this.direction==="rtl"?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(n,t,e){let i=this.orientation==="horizontal",a=i?t.left-n.left:t.top-n.top;return e===-1&&(a+=i?t.width-n.width:t.height-n.height),a}_getSiblingOffsetPx(n,t,e){let i=this.orientation==="horizontal",a=t[n].clientRect,o=t[n+e*-1],s=a[i?"width":"height"]*e;if(o){let l=i?"left":"top",c=i?"right":"bottom";e===-1?s-=o.clientRect[l]-a[c]:s+=a[l]-o.clientRect[c];}return s}_shouldEnterAsFirstChild(n,t){if(!this._activeDraggables.length)return  false;let e=this._itemPositions,i=this.orientation==="horizontal";if(e[0].drag!==this._activeDraggables[0]){let o=e[e.length-1].clientRect;return i?n>=o.right:t>=o.bottom}else {let o=e[0].clientRect;return i?n<=o.left:t<=o.top}}_getItemIndexFromPointerPosition(n,t,e,i){let a=this.orientation==="horizontal",o=this._itemPositions.findIndex(({drag:s,clientRect:l})=>{if(s===n)return  false;if(i){let c=a?i.x:i.y;if(s===this._previousSwap.drag&&this._previousSwap.overlaps&&c===this._previousSwap.delta)return  false}return a?t>=Math.floor(l.left)&&t<Math.floor(l.right):e>=Math.floor(l.top)&&e<Math.floor(l.bottom)});return o===-1||!this._sortPredicate(o,n)?-1:o}},ie=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:false};_relatedNodes=[];constructor(n,t){this._document=n,this._dragDropRegistry=t;}start(n){let t=this._element.childNodes;this._relatedNodes=[];for(let e=0;e<t.length;e++){let i=t[e];this._relatedNodes.push([i,i.nextSibling]);}this.withItems(n);}sort(n,t,e,i){let a=this._getItemIndexFromPointerPosition(n,t,e),o=this._previousSwap;if(a===-1||this._activeItems[a]===n)return null;let s=this._activeItems[a];if(o.drag===s&&o.overlaps&&o.deltaX===i.x&&o.deltaY===i.y)return null;let l=this.getItemIndex(n),c=n.getPlaceholderElement(),h=s.getRootElement();a>l?h.after(c):h.before(c),ci(this._activeItems,l,a);let y=this._getRootNode().elementFromPoint(t,e);return o.deltaX=i.x,o.deltaY=i.y,o.drag=s,o.overlaps=h===y||h.contains(y),{previousIndex:l,currentIndex:a}}enter(n,t,e,i){let a=this._activeItems.indexOf(n);a>-1&&this._activeItems.splice(a,1);let o=i==null||i<0?this._getItemIndexFromPointerPosition(n,t,e):i;o===-1&&(o=this._getClosestItemIndexToPointer(n,t,e));let s=this._activeItems[o];s&&!this._dragDropRegistry.isDragging(s)?(this._activeItems.splice(o,0,n),s.getRootElement().before(n.getPlaceholderElement())):(this._activeItems.push(n),this._element.appendChild(n.getPlaceholderElement()));}withItems(n){this._activeItems=n.slice();}withSortPredicate(n){this._sortPredicate=n;}reset(){let n=this._element,t=this._previousSwap;for(let e=this._relatedNodes.length-1;e>-1;e--){let[i,a]=this._relatedNodes[e];i.parentNode===n&&i.nextSibling!==a&&(a===null?n.appendChild(i):a.parentNode===n&&n.insertBefore(i,a));}this._relatedNodes=[],this._activeItems=[],t.drag=null,t.deltaX=t.deltaY=0,t.overlaps=false;}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(n){return this._activeItems.indexOf(n)}getItemAtIndex(n){return this._activeItems[n]||null}updateOnScroll(){this._activeItems.forEach(n=>{this._dragDropRegistry.isDragging(n)&&n._sortFromLastPointerPosition();});}withElementContainer(n){n!==this._element&&(this._element=n,this._rootNode=void 0);}_getItemIndexFromPointerPosition(n,t,e){let i=this._getRootNode().elementFromPoint(Math.floor(t),Math.floor(e)),a=i?this._activeItems.findIndex(o=>{let s=o.getRootElement();return i===s||s.contains(i)}):-1;return a===-1||!this._sortPredicate(a,n)?-1:a}_getRootNode(){return this._rootNode||(this._rootNode=rM(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(n,t,e){if(this._activeItems.length===0)return  -1;if(this._activeItems.length===1)return 0;let i=1/0,a=-1;for(let o=0;o<this._activeItems.length;o++){let s=this._activeItems[o];if(s!==n){let{x:l,y:c}=s.getRootElement().getBoundingClientRect(),h=Math.hypot(t-l,e-c);h<i&&(i=h,a=o);}}return a}},oi=.05,hi=.05,R=(function(r){return r[r.NONE=0]="NONE",r[r.UP=1]="UP",r[r.DOWN=2]="DOWN",r})(R||{}),v=(function(r){return r[r.NONE=0]="NONE",r[r.LEFT=1]="LEFT",r[r.RIGHT=2]="RIGHT",r})(v||{});function mi(r,n){return new ne(n,r.get(Rt),r.get(le),r.get(ee$1),r.get(Ka))}var ne=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=false;sortingDisabled=false;lockAxis=null;autoScrollDisabled=false;autoScrollStep=2;hasAnchor=false;enterPredicate=()=>true;sortPredicate=()=>true;beforeStarted=new j;entered=new j;exited=new j;dropped=new j;sorted=new j;receivingStarted=new j;receivingStopped=new j;data;_container;_isDragging=false;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=xe.EMPTY;_verticalScrollDirection=R.NONE;_horizontalScrollDirection=v.NONE;_scrollNode;_stopScrollTimers=new j;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction="ltr";constructor(n,t,e,i,a){this._dragDropRegistry=t,this._ngZone=i,this._viewportRuler=a;let o=this.element=Yi$1(n);this._document=e,this.withOrientation("vertical").withElementContainer(o),t.registerDropContainer(this),this._parentPositions=new Pt(e);}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this);}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings();}enter(n,t,e,i){this._draggingStarted(),i==null&&this.sortingDisabled&&(i=this._draggables.indexOf(n)),this._sortStrategy.enter(n,t,e,i),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:n,container:this,currentIndex:this.getItemIndex(n)});}exit(n){this._reset(),this.exited.next({item:n,container:this});}drop(n,t,e,i,a,o,s,l){this._reset(),this.dropped.next({item:n,currentIndex:t,previousIndex:e,container:this,previousContainer:i,isPointerOverContainer:a,distance:o,dropPoint:s,event:l});}withItems(n){let t=this._draggables;return this._draggables=n,n.forEach(e=>e._withDropContainer(this)),this.isDragging()&&(t.filter(i=>i.isDragging()).every(i=>n.indexOf(i)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(n){return this._direction=n,this._sortStrategy instanceof kt&&(this._sortStrategy.direction=n),this}connectedTo(n){return this._siblings=n.slice(),this}withOrientation(n){if(n==="mixed")this._sortStrategy=new ie(this._document,this._dragDropRegistry);else {let t=new kt(this._dragDropRegistry);t.direction=this._direction,t.orientation=n,this._sortStrategy=t;}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((t,e)=>this.sortPredicate(t,e,this)),this}withScrollableParents(n){let t=this._container;return this._scrollableElements=n.indexOf(t)===-1?[t,...n]:n.slice(),this}withElementContainer(n){if(n===this._container)return this;Yi$1(this.element);let e=this._scrollableElements.indexOf(this._container),i=this._scrollableElements.indexOf(n);return e>-1&&this._scrollableElements.splice(e,1),i>-1&&this._scrollableElements.splice(i,1),this._sortStrategy&&this._sortStrategy.withElementContainer(n),this._cachedShadowRoot=null,this._scrollableElements.unshift(n),this._container=n,this}getScrollableParents(){return this._scrollableElements}getItemIndex(n){return this._isDragging?this._sortStrategy.getItemIndex(n):this._draggables.indexOf(n)}getItemAtIndex(n){return this._isDragging?this._sortStrategy.getItemAtIndex(n):this._draggables[n]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(n,t,e,i){if(this.sortingDisabled||!this._domRect||!Ke(this._domRect,oi,t,e))return;let a=this._sortStrategy.sort(n,t,e,i);a&&this.sorted.next({previousIndex:a.previousIndex,currentIndex:a.currentIndex,container:this,item:n});}_startScrollingIfNecessary(n,t){if(this.autoScrollDisabled)return;let e,i=R.NONE,a=v.NONE;if(this._parentPositions.positions.forEach((o,s)=>{s===this._document||!o.clientRect||e||Ke(o.clientRect,oi,n,t)&&([i,a]=$i(s,o.clientRect,this._direction,n,t),(i||a)&&(e=s));}),!i&&!a){let{width:o,height:s}=this._viewportRuler.getViewportSize(),l={width:o,height:s,top:0,right:o,bottom:s,left:0};i=_i(l,t),a=pi(l,n),e=window;}e&&(i!==this._verticalScrollDirection||a!==this._horizontalScrollDirection||e!==this._scrollNode)&&(this._verticalScrollDirection=i,this._horizontalScrollDirection=a,this._scrollNode=e,(i||a)&&e?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling());}_stopScrolling(){this._stopScrollTimers.next();}_draggingStarted(){let n=this._container.style;this.beforeStarted.next(),this._isDragging=true,this._initialScrollSnap=n.msScrollSnapType||n.scrollSnapType||"",n.scrollSnapType=n.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents();}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect;}_reset(){this._isDragging=false;let n=this._container.style;n.scrollSnapType=n.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(t=>t._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear();}_startScrollInterval=()=>{this._stopScrolling(),$Y(0,Qk).pipe(Ke$1(this._stopScrollTimers)).subscribe(()=>{let n=this._scrollNode,t=this.autoScrollStep;this._verticalScrollDirection===R.UP?n.scrollBy(0,-t):this._verticalScrollDirection===R.DOWN&&n.scrollBy(0,t),this._horizontalScrollDirection===v.LEFT?n.scrollBy(-t,0):this._horizontalScrollDirection===v.RIGHT&&n.scrollBy(t,0);});};_isOverContainer(n,t){return this._domRect!=null&&Jt(this._domRect,n,t)}_getSiblingContainerFromPosition(n,t,e){return this._siblings.find(i=>i._canReceive(n,t,e))}_canReceive(n,t,e){if(!this._domRect||!Jt(this._domRect,t,e)||!this.enterPredicate(n,this))return  false;let i=this._getShadowRoot().elementFromPoint(t,e);return i?i===this._container||this._container.contains(i):false}_startReceiving(n,t){let e=this._activeSiblings;!e.has(n)&&t.every(i=>this.enterPredicate(i,this)||this._draggables.indexOf(i)>-1)&&(e.add(n),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:n,receiver:this,items:t}));}_stopReceiving(n){this._activeSiblings.delete(n),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:n,receiver:this});}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(n=>{if(this.isDragging()){let t=this._parentPositions.handleScroll(n);t&&this._sortStrategy.updateOnScroll(t.top,t.left);}else this.isReceiving()&&this._cacheParentPositions();});}_getShadowRoot(){if(!this._cachedShadowRoot){let n=rM(this._container);this._cachedShadowRoot=n||this._document;}return this._cachedShadowRoot}_notifyReceivingSiblings(){let n=this._sortStrategy.getActiveItemsSnapshot().filter(t=>t.isDragging());this._siblings.forEach(t=>t._startReceiving(this,n));}};function _i(r,n){let{top:t,bottom:e,height:i}=r,a=i*hi;return n>=t-a&&n<=t+a?R.UP:n>=e-a&&n<=e+a?R.DOWN:R.NONE}function pi(r,n){let{left:t,right:e,width:i}=r,a=i*hi;return n>=t-a&&n<=t+a?v.LEFT:n>=e-a&&n<=e+a?v.RIGHT:v.NONE}function $i(r,n,t,e,i){let a=_i(n,i),o=pi(n,e),s=R.NONE,l=v.NONE;if(a){let c=r.scrollTop;a===R.UP?c>0&&(s=R.UP):r.scrollHeight-c>r.clientHeight&&(s=R.DOWN);}if(o){let c=r.scrollLeft;t==="rtl"?o===v.RIGHT?c<0&&(l=v.RIGHT):r.scrollWidth+c>r.clientWidth&&(l=v.LEFT):o===v.LEFT?c>0&&(l=v.LEFT):r.scrollWidth-c>r.clientWidth&&(l=v.RIGHT);}return [s,l]}var qi=(()=>{class r{_injector=u(Q);createDrag(t,e){return di(this._injector,t,e)}createDropList(t){return mi(this._injector,t)}static \u0275fac=function(e){return new(e||r)};static \u0275prov=te$1({token:r,factory:r.\u0275fac})}return r})(),St=new O("CDK_DRAG_PARENT");var bi=new O("CdkDragHandle"),On=(()=>{class r{element=u(q);_parentDrag=u(St,{optional:true,skipSelf:true});_dragDropRegistry=u(Rt);_stateChanges=new j;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._stateChanges.next(this);}_disabled=false;constructor(){this._parentDrag?._addHandle(this);}ngAfterViewInit(){if(!this._parentDrag){let t=this.element.nativeElement.parentElement;for(;t;){let e=this._dragDropRegistry.getDragDirectiveForNode(t);if(e){this._parentDrag=e,e._addHandle(this);break}t=t.parentElement;}}}ngOnDestroy(){this._parentDrag?._removeHandle(this),this._stateChanges.complete();}static \u0275fac=function(e){return new(e||r)};static \u0275dir=Y({type:r,selectors:[["","cdkDragHandle",""]],hostAttrs:[1,"cdk-drag-handle"],inputs:{disabled:[2,"cdkDragHandleDisabled","disabled",ie$1]},features:[Ee([{provide:bi,useExisting:r}])]})}return r})(),ui=new O("CDK_DRAG_CONFIG"),gi=new O("CdkDropList"),Bn=(()=>{class r{element=u(q);dropContainer=u(gi,{optional:true,skipSelf:true});_ngZone=u(ee$1);_viewContainerRef=u(An);_dir=u(kn,{optional:true});_changeDetectorRef=u(st);_selfHandle=u(bi,{optional:true,self:true});_parentDrag=u(St,{optional:true,skipSelf:true});_dragDropRegistry=u(Rt);_destroyed=new j;_handles=new rn$1([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(t){this._disabled=t,this._dragRef.disabled=this._disabled;}_disabled=false;constrainPosition;previewClass;previewContainer;scale=1;started=new re$1;released=new re$1;ended=new re$1;entered=new re$1;exited=new re$1;dropped=new re$1;moved=new Te(t=>{let e=this._dragRef.moved.pipe(Le(i=>({source:this,pointerPosition:i.pointerPosition,event:i.event,delta:i.delta,distance:i.distance}))).subscribe(t);return ()=>{e.unsubscribe();}});_injector=u(Q);constructor(){let t=this.dropContainer,e=u(ui,{optional:true});this._dragRef=di(this._injector,this.element,{dragStartThreshold:e&&e.dragStartThreshold!=null?e.dragStartThreshold:5,pointerDirectionChangeThreshold:e&&e.pointerDirectionChangeThreshold!=null?e.pointerDirectionChangeThreshold:5,zIndex:e?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),e&&this._assignDefaults(e),t&&(t.addItem(this),t._dropListRef.beforeStarted.pipe(Ke$1(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale;})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef);}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset();}resetToBoundary(){this._dragRef.resetToBoundary();}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(t){this._dragRef.setFreeDragPosition(t);}ngAfterViewInit(){on$1(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition);},{injector:this._injector});}ngOnChanges(t){let e=t.rootElementSelector,i=t.freeDragPosition;e&&!e.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,i&&!i.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition);}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose();});}_addHandle(t){let e=this._handles.getValue();e.push(t),this._handles.next(e);}_removeHandle(t){let e=this._handles.getValue(),i=e.indexOf(t);i>-1&&(e.splice(i,1),this._handles.next(e));}_setPreviewTemplate(t){this._previewTemplate=t;}_resetPreviewTemplate(t){t===this._previewTemplate&&(this._previewTemplate=null);}_setPlaceholderTemplate(t){this._placeholderTemplate=t;}_resetPlaceholderTemplate(t){t===this._placeholderTemplate&&(this._placeholderTemplate=null);}_updateRootElement(){let t=this.element.nativeElement,e=t;this.rootElementSelector&&(e=t.closest!==void 0?t.closest(this.rootElementSelector):t.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(e||t);}_getBoundaryElement(){let t=this.boundaryElement;return t?typeof t=="string"?this.element.nativeElement.closest(t):Yi$1(t):null}_syncInputs(t){t.beforeStarted.subscribe(()=>{if(!t.isDragging()){let e=this._dir,i=this.dragStartDelay,a=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,o=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;t.disabled=this.disabled,t.lockAxis=this.lockAxis,t.scale=this.scale,t.dragStartDelay=typeof i=="object"&&i?i:es(i),t.constrainPosition=this.constrainPosition,t.previewClass=this.previewClass,t.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(a).withPreviewTemplate(o).withPreviewContainer(this.previewContainer||"global"),e&&t.withDirection(e.value);}}),t.beforeStarted.pipe(_t$1(1)).subscribe(()=>{if(this._parentDrag){t.withParent(this._parentDrag._dragRef);return}let e=this.element.nativeElement.parentElement;for(;e;){let i=this._dragDropRegistry.getDragDirectiveForNode(e);if(i){t.withParent(i._dragRef);break}e=e.parentElement;}});}_handleEvents(t){t.started.subscribe(e=>{this.started.emit({source:this,event:e.event}),this._changeDetectorRef.markForCheck();}),t.released.subscribe(e=>{this.released.emit({source:this,event:e.event});}),t.ended.subscribe(e=>{this.ended.emit({source:this,distance:e.distance,dropPoint:e.dropPoint,event:e.event}),this._changeDetectorRef.markForCheck();}),t.entered.subscribe(e=>{this.entered.emit({container:e.container.data,item:this,currentIndex:e.currentIndex});}),t.exited.subscribe(e=>{this.exited.emit({container:e.container.data,item:this});}),t.dropped.subscribe(e=>{this.dropped.emit({previousIndex:e.previousIndex,currentIndex:e.currentIndex,previousContainer:e.previousContainer.data,container:e.container.data,isPointerOverContainer:e.isPointerOverContainer,item:this,distance:e.distance,dropPoint:e.dropPoint,event:e.event});});}_assignDefaults(t){let{lockAxis:e,dragStartDelay:i,constrainPosition:a,previewClass:o,boundaryElement:s,draggingDisabled:l,rootElementSelector:c,previewContainer:h}=t;this.disabled=l??false,this.dragStartDelay=i||0,this.lockAxis=e||null,a&&(this.constrainPosition=a),o&&(this.previewClass=o),s&&(this.boundaryElement=s),c&&(this.rootElementSelector=c),h&&(this.previewContainer=h);}_setupHandlesListener(){this._handles.pipe(Jn(t=>{let e=t.map(i=>i.element);this._selfHandle&&this.rootElementSelector&&e.push(this.element),this._dragRef.withHandles(e);}),Ft(t=>ai$1(...t.map(e=>e._stateChanges.pipe(mn$1(e))))),Ke$1(this._destroyed)).subscribe(t=>{let e=this._dragRef,i=t.element.nativeElement;t.disabled?e.disableHandle(i):e.enableHandle(i);});}static \u0275fac=function(e){return new(e||r)};static \u0275dir=Y({type:r,selectors:[["","cdkDrag",""]],hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(e,i){e&2&&K("cdk-drag-disabled",i.disabled)("cdk-drag-dragging",i._dragRef.isDragging());},inputs:{data:[0,"cdkDragData","data"],lockAxis:[0,"cdkDragLockAxis","lockAxis"],rootElementSelector:[0,"cdkDragRootElement","rootElementSelector"],boundaryElement:[0,"cdkDragBoundary","boundaryElement"],dragStartDelay:[0,"cdkDragStartDelay","dragStartDelay"],freeDragPosition:[0,"cdkDragFreeDragPosition","freeDragPosition"],disabled:[2,"cdkDragDisabled","disabled",ie$1],constrainPosition:[0,"cdkDragConstrainPosition","constrainPosition"],previewClass:[0,"cdkDragPreviewClass","previewClass"],previewContainer:[0,"cdkDragPreviewContainer","previewContainer"],scale:[2,"cdkDragScale","scale",an$1]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[Ee([{provide:St,useExisting:r}]),Qe]})}return r})(),si=new O("CdkDropListGroup");var Nn=(()=>{class r{element=u(q);_changeDetectorRef=u(st);_scrollDispatcher=u(tc);_dir=u(kn,{optional:true});_group=u(si,{optional:true,skipSelf:true});_latestSortedRefs;_destroyed=new j;_scrollableParentsResolved=false;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation="vertical";id=u(Nt).getId("cdk-drop-list-");lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(t){this._dropListRef.disabled=this._disabled=t;}_disabled=false;sortingDisabled=false;enterPredicate=()=>true;sortPredicate=()=>true;autoScrollDisabled=false;autoScrollStep;elementContainerSelector=null;hasAnchor=false;dropped=new re$1;entered=new re$1;exited=new re$1;sorted=new re$1;_unsortedItems=new Set;constructor(){let t=u(ui,{optional:true}),e=u(Q);this._dropListRef=mi(e,this.element),this._dropListRef.data=this,t&&this._assignDefaults(t),this._dropListRef.enterPredicate=(i,a)=>this.enterPredicate(i.data,a.data),this._dropListRef.sortPredicate=(i,a,o)=>this.sortPredicate(i,a.data,o.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),r._dropLists.push(this),this._group&&this._group._items.add(this);}addItem(t){this._unsortedItems.add(t),t._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(e=>e._dragRef));}removeItem(t){if(this._unsortedItems.delete(t),this._latestSortedRefs){let e=this._latestSortedRefs.indexOf(t._dragRef);e>-1&&(this._latestSortedRefs.splice(e,1),this._syncItemsWithRef(this._latestSortedRefs));}}getSortedItems(){return Array.from(this._unsortedItems).sort((t,e)=>t._dragRef.getVisibleElement().compareDocumentPosition(e._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let t=r._dropLists.indexOf(this);t>-1&&r._dropLists.splice(t,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete();}_setupInputSyncSubscription(t){this._dir&&this._dir.change.pipe(mn$1(this._dir.value),Ke$1(this._destroyed)).subscribe(e=>t.withDirection(e)),t.beforeStarted.subscribe(()=>{let e=df(this.connectedTo).map(i=>{if(typeof i=="string"){let a=r._dropLists.find(o=>o.id===i);return a}return i});if(this._group&&this._group._items.forEach(i=>{e.indexOf(i)===-1&&e.push(i);}),!this._scrollableParentsResolved){let i=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(a=>a.getElementRef().nativeElement);this._dropListRef.withScrollableParents(i),this._scrollableParentsResolved=true;}if(this.elementContainerSelector){let i=this.element.nativeElement.querySelector(this.elementContainerSelector);t.withElementContainer(i);}t.disabled=this.disabled,t.lockAxis=this.lockAxis,t.sortingDisabled=this.sortingDisabled,t.autoScrollDisabled=this.autoScrollDisabled,t.autoScrollStep=es(this.autoScrollStep,2),t.hasAnchor=this.hasAnchor,t.connectedTo(e.filter(i=>i&&i!==this).map(i=>i._dropListRef)).withOrientation(this.orientation);});}_handleEvents(t){t.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(e=>e._dragRef)),this._changeDetectorRef.markForCheck();}),t.entered.subscribe(e=>{this.entered.emit({container:this,item:e.item.data,currentIndex:e.currentIndex});}),t.exited.subscribe(e=>{this.exited.emit({container:this,item:e.item.data}),this._changeDetectorRef.markForCheck();}),t.sorted.subscribe(e=>{this.sorted.emit({previousIndex:e.previousIndex,currentIndex:e.currentIndex,container:this,item:e.item.data});}),t.dropped.subscribe(e=>{this.dropped.emit({previousIndex:e.previousIndex,currentIndex:e.currentIndex,previousContainer:e.previousContainer.data,container:e.container.data,item:e.item.data,isPointerOverContainer:e.isPointerOverContainer,distance:e.distance,dropPoint:e.dropPoint,event:e.event}),this._changeDetectorRef.markForCheck();}),ai$1(t.receivingStarted,t.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck());}_assignDefaults(t){let{lockAxis:e,draggingDisabled:i,sortingDisabled:a,listAutoScrollDisabled:o,listOrientation:s}=t;this.disabled=i??false,this.sortingDisabled=a??false,this.autoScrollDisabled=o??false,this.orientation=s||"vertical",this.lockAxis=e||null;}_syncItemsWithRef(t){this._latestSortedRefs=t,this._dropListRef.withItems(t);}static \u0275fac=function(e){return new(e||r)};static \u0275dir=Y({type:r,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(e,i){e&2&&(F("id",i.id),K("cdk-drop-list-disabled",i.disabled)("cdk-drop-list-dragging",i._dropListRef.isDragging())("cdk-drop-list-receiving",i._dropListRef.isReceiving()));},inputs:{connectedTo:[0,"cdkDropListConnectedTo","connectedTo"],data:[0,"cdkDropListData","data"],orientation:[0,"cdkDropListOrientation","orientation"],id:"id",lockAxis:[0,"cdkDropListLockAxis","lockAxis"],disabled:[2,"cdkDropListDisabled","disabled",ie$1],sortingDisabled:[2,"cdkDropListSortingDisabled","sortingDisabled",ie$1],enterPredicate:[0,"cdkDropListEnterPredicate","enterPredicate"],sortPredicate:[0,"cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:[2,"cdkDropListAutoScrollDisabled","autoScrollDisabled",ie$1],autoScrollStep:[0,"cdkDropListAutoScrollStep","autoScrollStep"],elementContainerSelector:[0,"cdkDropListElementContainer","elementContainerSelector"],hasAnchor:[2,"cdkDropListHasAnchor","hasAnchor",ie$1]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[Ee([{provide:si,useValue:void 0},{provide:gi,useExisting:r}])]})}return r})();var Zi=new O("CdkDragPlaceholder"),Fn=(()=>{class r{templateRef=u(In);_drag=u(St,{optional:true});data;constructor(){this._drag?._setPlaceholderTemplate(this);}ngOnDestroy(){this._drag?._resetPlaceholderTemplate(this);}static \u0275fac=function(e){return new(e||r)};static \u0275dir=Y({type:r,selectors:[["ng-template","cdkDragPlaceholder",""]],inputs:{data:"data"},features:[Ee([{provide:Zi,useExisting:r}])]})}return r})();var Hn=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=ye({type:r});static \u0275inj=ge({providers:[qi],imports:[qa]})}return r})();var nt=["*"];function Ui(r,n){r&1&&_e(0);}var wi=["tabListContainer"],Ci=["tabList"],Ti=["tabListInner"],xi=["nextPaginator"],Pi=["previousPaginator"],Ki=["content"];function Yi(r,n){}var Xi=["tabBodyWrapper"],Ji=["tabHeader"];function tn(r,n){}function en(r,n){if(r&1&&sn$1(0,tn,0,0,"ng-template",12),r&2){let t=S().$implicit;T("cdkPortalOutlet",t.templateLabel);}}function nn(r,n){if(r&1&&E(0),r&2){let t=S().$implicit;V(t.textLabel);}}function an(r,n){if(r&1){let t=ue();_(0,"div",7,2),P("click",function(){let i=X(t),a=i.$implicit,o=i.$index,s=S(),l=Kt$1(1);return J(s._handleClick(a,l,o))})("cdkFocusChange",function(i){let a=X(t).$index,o=S();return J(o._tabFocusChanged(i,a))}),H(2,"span",8)(3,"div",9),_(4,"span",10)(5,"span",11),w(6,en,1,1,null,12)(7,nn,1,1),h()()();}if(r&2){let t=n.$implicit,e=n.$index,i=Kt$1(1),a=S();Vn(t.labelClass),K("mdc-tab--active",a.selectedIndex===e),T("id",a._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",a.fitInkBarToContent),F("tabIndex",a._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",a._tabs.length)("aria-controls",a._getTabContentId(e))("aria-selected",a.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),f(3),T("matRippleTrigger",i)("matRippleDisabled",t.disabled||a.disableRipple),f(3),M(t.templateLabel?6:7);}}function rn(r,n){r&1&&_e(0);}function on(r,n){if(r&1){let t=ue();_(0,"mat-tab-body",13),P("_onCentered",function(){X(t);let i=S();return J(i._removeTabBodyWrapperHeight())})("_onCentering",function(i){X(t);let a=S();return J(a._setTabBodyWrapperHeight(i))})("_beforeCentering",function(i){X(t);let a=S();return J(a._bodyCentered(i))}),h();}if(r&2){let t=n.$implicit,e=n.$index,i=S();Vn(t.bodyClass),T("id",i._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",i._bodyAnimationDuration)("preserveContent",i.preserveContent),F("tabindex",i.contentTabIndex!=null&&i.selectedIndex===e?i.contentTabIndex:null)("aria-labelledby",i._getTabLabelId(t,e))("aria-hidden",i.selectedIndex!==e);}}var sn=new O("MatTabContent"),ln=(()=>{class r{template=u(In);static \u0275fac=function(e){return new(e||r)};static \u0275dir=Y({type:r,selectors:[["","matTabContent",""]],features:[Ee([{provide:sn,useExisting:r}])]})}return r})(),dn=new O("MatTabLabel"),Ii=new O("MAT_TAB"),cn=(()=>{class r extends QGe{_closestTab=u(Ii,{optional:true});static \u0275fac=(()=>{let t;return function(i){return (t||(t=Vt(r)))(i||r)}})();static \u0275dir=Y({type:r,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Ee([{provide:dn,useExisting:r}]),Re]})}return r})(),ki=new O("MAT_TAB_GROUP"),hn=(()=>{class r{_viewContainerRef=u(An);_closestTabGroup=u(ki,{optional:true});disabled=false;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t);}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new j;position=null;origin=null;isActive=false;constructor(){u(en$1).load($r);}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next();}ngOnDestroy(){this._stateChanges.complete();}ngOnInit(){this._contentPortal=new qi$1(this._explicitContent||this._implicitContent,this._viewContainerRef);}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t);}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=B({type:r,selectors:[["mat-tab"]],contentQueries:function(e,i,a){if(e&1&&di$1(a,cn,5)(a,ln,7,In),e&2){let o;oe$1(o=se$1())&&(i.templateLabel=o.first),oe$1(o=se$1())&&(i._explicitContent=o.first);}},viewQuery:function(e,i){if(e&1&&At(In,7),e&2){let a;oe$1(a=se$1())&&(i._implicitContent=a.first);}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,i){e&2&&F("id",null);},inputs:{disabled:[2,"disabled","disabled",ie$1],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Ee([{provide:Ii,useExisting:r}]),Qe],ngContentSelectors:nt,decls:1,vars:0,template:function(e,i){e&1&&(Je$1(),Ky(0,Ui,1,0,"ng-template"));},encapsulation:2,changeDetection:1})}return r})(),oe="mdc-tab-indicator--active",fi="mdc-tab-indicator--no-transition",Et=class{_items;_currentItem;constructor(n){this._items=n;}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0;}alignToElement(n){let t=this._items.find(i=>i.elementRef.nativeElement===n),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let i=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(i),this._currentItem=t;}}},Si=(()=>{class r{_elementRef=u(q);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=false;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement());}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(oe);return}let i=e.getBoundingClientRect(),a=t.width/i.width,o=t.left-i.left;e.classList.add(fi),this._inkBarContentElement.style.setProperty("transform",`translateX(${o}px) scaleX(${a})`),e.getBoundingClientRect(),e.classList.remove(fi),e.classList.add(oe),this._inkBarContentElement.style.setProperty("transform","");}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(oe);}ngOnInit(){this._createInkBarElement();}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null;}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),i=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",i.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement();}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement);}static \u0275fac=function(e){return new(e||r)};static \u0275dir=Y({type:r,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",ie$1]}})}return r})();var Ri=(()=>{class r extends Si{elementRef=u(q);disabled=false;focus(){this.elementRef.nativeElement.focus();}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(i){return (t||(t=Vt(r)))(i||r)}})();static \u0275dir=Y({type:r,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,i){e&2&&(F("aria-disabled",!!i.disabled),K("mat-mdc-tab-disabled",i.disabled));},inputs:{disabled:[2,"disabled","disabled",ie$1]},features:[Re]})}return r})(),vi={passive:true},mn=650,_n=100,Ei=(()=>{class r{_elementRef=u(q);_changeDetectorRef=u(st);_viewportRuler=u(Ka);_dir=u(kn,{optional:true});_ngZone=u(ee$1);_platform=u(it$1);_sharedResizeObserver=u(z4);_injector=u(Q);_renderer=u(Xe$1);_animationsDisabled=Tt();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=false;_destroyed=new j;_showPaginationControls=false;_disableScrollAfter=true;_disableScrollBefore=true;_tabLabelCount;_scrollDistanceChanged=false;_keyManager;_currentTextContent;_stopScrolling=new j;disablePagination=false;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=true,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e));}_selectedIndex=0;selectFocusedIndex=new re$1;indexFocused=new re$1;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())]);}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),vi),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),vi));}ngAfterContentInit(){let t=this._dir?this._dir.change:he("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Lc(32),Ke$1(this._destroyed)),i=this._viewportRuler.change(150).pipe(Ke$1(this._destroyed)),a=()=>{this.updatePagination(),this._alignInkBarToSelectedTab();};this._keyManager=new Yd(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>false),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),on$1(a,{injector:this._injector}),ai$1(t,i,e,this._items.changes,this._itemsResized()).pipe(Ke$1(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),a();});}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection());}),this._keyManager.change.subscribe(o=>{this.indexFocused.emit(o),this._setTabFocus(o);});}_itemsResized(){return typeof ResizeObserver!="function"?Mn:this._items.changes.pipe(mn$1(this._items),Ft(t=>new Te(e=>this._ngZone.runOutsideAngular(()=>{let i=new ResizeObserver(a=>e.next(a));return t.forEach(a=>i.observe(a.elementRef.nativeElement)),()=>{i.disconnect();}}))),Om(1),ze(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=false,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=false,this._changeDetectorRef.markForCheck());}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete();}_handleKeydown(t){if(!Tn(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t));}break;default:this._keyManager?.onKeydown(t);}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck();}));}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition();}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t);}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:true}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth;}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0);}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t);}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,i=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+i)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t);}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:a,offsetWidth:o}=e.elementRef.nativeElement,s,l;this._getLayoutDirection()=="ltr"?(s=a,l=s+o):(l=this._tabListInner.nativeElement.offsetWidth-a,s=l-o);let c=this.scrollDistance,h=this.scrollDistance+i;s<c?this.scrollDistance-=c-s:l>h&&(this.scrollDistance+=Math.min(l-h,s-c));}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=false;else {let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,i=t-e>=5;i||(this.scrollDistance=0),i!==this._showPaginationControls&&(this._showPaginationControls=i,this._changeDetectorRef.markForCheck());}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=true:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck());}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide();}_stopInterval(){this._stopScrolling.next();}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),fa(mn,_n).pipe(Ke$1(ai$1(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:i,distance:a}=this._scrollHeader(t);(a===0||a>=i)&&this._stopInterval();}));}_scrollTo(t){if(this.disablePagination)return {maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=true,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||r)};static \u0275dir=Y({type:r,inputs:{disablePagination:[2,"disablePagination","disablePagination",ie$1],selectedIndex:[2,"selectedIndex","selectedIndex",an$1]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return r})(),pn=(()=>{class r extends Ei{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=false;ngAfterContentInit(){this._inkBar=new Et(this._items),super.ngAfterContentInit();}_itemSelected(t){t.preventDefault();}static \u0275fac=(()=>{let t;return function(i){return (t||(t=Vt(r)))(i||r)}})();static \u0275cmp=B({type:r,selectors:[["mat-tab-header"]],contentQueries:function(e,i,a){if(e&1&&di$1(a,Ri,4),e&2){let o;oe$1(o=se$1())&&(i._items=o);}},viewQuery:function(e,i){if(e&1&&At(wi,7)(Ci,7)(Ti,7)(xi,5)(Pi,5),e&2){let a;oe$1(a=se$1())&&(i._tabListContainer=a.first),oe$1(a=se$1())&&(i._tabList=a.first),oe$1(a=se$1())&&(i._tabListInner=a.first),oe$1(a=se$1())&&(i._nextPaginator=a.first),oe$1(a=se$1())&&(i._previousPaginator=a.first);}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,i){e&2&&K("mat-mdc-tab-header-pagination-controls-enabled",i._showPaginationControls)("mat-mdc-tab-header-rtl",i._getLayoutDirection()=="rtl");},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",ie$1]},features:[Re],ngContentSelectors:nt,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,i){e&1&&(Je$1(),_(0,"div",5,0),P("click",function(){return i._handlePaginatorClick("before")})("mousedown",function(o){return i._handlePaginatorPress("before",o)})("touchend",function(){return i._stopInterval()}),H(2,"div",6),h(),_(3,"div",7,1),P("keydown",function(o){return i._handleKeydown(o)}),_(5,"div",8,2),P("cdkObserveContent",function(){return i._onContentChanges()}),_(7,"div",9,3),_e(9),h()()(),_(10,"div",10,4),P("mousedown",function(o){return i._handlePaginatorPress("after",o)})("click",function(){return i._handlePaginatorClick("after")})("touchend",function(){return i._stopInterval()}),H(12,"div",6),h()),e&2&&(K("mat-mdc-tab-header-pagination-disabled",i._disableScrollBefore),T("matRippleDisabled",i._disableScrollBefore||i.disableRipple),f(3),K("_mat-animation-noopable",i._animationsDisabled),f(2),F("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby||null),f(5),K("mat-mdc-tab-header-pagination-disabled",i._disableScrollAfter),T("matRippleDisabled",i._disableScrollAfter||i.disableRipple));},dependencies:[tt,F2e],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})}return r})(),Li=new O("MAT_TABS_CONFIG"),yi=(()=>{class r extends ic{_host=u(de);_ngZone=u(ee$1);_centeringSub=xe.EMPTY;_leavingSub=xe.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(mn$1(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content);});}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach());});}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe();}static \u0275fac=(()=>{let t;return function(i){return (t||(t=Vt(r)))(i||r)}})();static \u0275dir=Y({type:r,selectors:[["","matTabBodyHost",""]],features:[Re]})}return r})(),de=(()=>{class r{_elementRef=u(q);_dir=u(kn,{optional:true});_ngZone=u(ee$1);_injector=u(Q);_renderer=u(Xe$1);_diAnimationsDisabled=Tt();_eventCleanups;_initialized=false;_fallbackTimer;_positionIndex;_dirChangeSubscription=xe.EMPTY;_position;_previousPosition;_onCentering=new re$1;_beforeCentering=new re$1;_afterLeavingCenter=new re$1;_onCentered=new re$1(true);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=false;set position(t){this._positionIndex=t,this._computePositionAnimationState();}constructor(){if(this._dir){let t=u(st);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck();});}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(true),on$1(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=true;}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe();}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),i.type==="transitionend"&&this._transitionDone());};this._eventCleanups=[this._renderer.listen(t,"transitionstart",i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted());}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)];});}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight);}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit();}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t);}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)));}_simulateTransitionEvents(){this._transitionStarted(),on$1(()=>this._transitionDone(),{injector:this._injector});}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=B({type:r,selectors:[["mat-tab-body"]],viewQuery:function(e,i){if(e&1&&At(yi,5)(Ki,5),e&2){let a;oe$1(a=se$1())&&(i._portalHost=a.first),oe$1(a=se$1())&&(i._contentElement=a.first);}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,i){e&2&&F("inert",i._position==="center"?null:"");},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,i){e&1&&(_(0,"div",1,0),sn$1(2,Yi,0,0,"ng-template",2),h()),e&2&&K("mat-tab-body-content-left",i._position==="left")("mat-tab-body-content-right",i._position==="right")("mat-tab-body-content-can-animate",i._position==="center"||i._previousPosition==="center");},dependencies:[yi,FM],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})}return r})(),pa=(()=>{class r{_elementRef=u(q);_changeDetectorRef=u(st);_ngZone=u(ee$1);_tabsSubscription=xe.EMPTY;_tabLabelSubscription=xe.EMPTY;_tabBodySubscription=xe.EMPTY;_diAnimationsDisabled=Tt();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new xr;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck();}_fitInkBarToContent=false;stretchTabs=true;alignTabs=null;dynamicHeight=false;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t;}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=t,t&&typeof t=="object"?(this._bodyAnimationDuration=se(t.body),this._headerAnimationDuration=se(t.header)):this._headerAnimationDuration=this._bodyAnimationDuration=se(t);}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t;}_contentTabIndex=null;disablePagination=false;disableRipple=false;preserveContent=false;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t;}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new re$1;focusChange=new re$1;animationDone=new re$1;selectedTabChange=new re$1(true);_groupId;_isServer=!u(it$1).isBrowser;constructor(){let t=u(Li,{optional:true});this._groupId=u(Nt).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:false,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:false,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:false,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:true,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null;}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let i=this._tabBodyWrapper.nativeElement;i.style.minHeight=i.clientHeight+"px";}Promise.resolve().then(()=>{this._tabs.forEach((i,a)=>i.isActive=a===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="");});}this._tabs.forEach((e,i)=>{e.position=i-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex);}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck());}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),i;for(let a=0;a<e.length;a++)if(e[a].isActive){this._indexToSelect=this._selectedIndex=a,this._lastFocusedTabIndex=null,i=e[a];break}!i&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=true,this.selectedTabChange.emit(this._createChangeEvent(t));});}this._changeDetectorRef.markForCheck();});}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(true));}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(mn$1(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges();});}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe();}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab();}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination();}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t);}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t));}_createChangeEvent(t){let e=new ce;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=ai$1(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck());}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return `${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px");}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit());}_handleClick(t,e,i){e.focusIndex=i,t.disabled||(this.selectedIndex=i);}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e);}_bodyCentered(t){t&&this._tabBodies?.forEach((e,i)=>e._setActiveClass(i===this._selectedIndex));}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration==="0"||this._bodyAnimationDuration==="0ms"}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=B({type:r,selectors:[["mat-tab-group"]],contentQueries:function(e,i,a){if(e&1&&di$1(a,hn,5),e&2){let o;oe$1(o=se$1())&&(i._allTabs=o);}},viewQuery:function(e,i){if(e&1&&At(Xi,5)(Ji,5)(de,5),e&2){let a;oe$1(a=se$1())&&(i._tabBodyWrapper=a.first),oe$1(a=se$1())&&(i._tabHeader=a.first),oe$1(a=se$1())&&(i._tabBodies=a);}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:13,hostBindings:function(e,i){e&2&&(F("mat-align-tabs",i.alignTabs),Vn("mat-"+(i.color||"primary")),Ta("--mat-tab-body-animation-duration",i._bodyAnimationDuration)("--mat-tab-header-animation-duration",i._headerAnimationDuration),K("mat-mdc-tab-group-dynamic-height",i.dynamicHeight)("mat-mdc-tab-group-inverted-header",i.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",i.stretchTabs));},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",ie$1],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",ie$1],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",ie$1],selectedIndex:[2,"selectedIndex","selectedIndex",an$1],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",an$1],disablePagination:[2,"disablePagination","disablePagination",ie$1],disableRipple:[2,"disableRipple","disableRipple",ie$1],preserveContent:[2,"preserveContent","preserveContent",ie$1],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Ee([{provide:ki,useExisting:r}])],ngContentSelectors:nt,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,i){e&1&&(Je$1(),_(0,"mat-tab-header",3,0),P("indexFocused",function(o){return i._focusChanged(o)})("selectFocusedIndex",function(o){return i.selectedIndex=o}),je(2,an,8,17,"div",4,vh),h(),w(4,rn,1,0),_(5,"div",5,1),je(7,on,1,10,"mat-tab-body",6,vh),h()),e&2&&(T("selectedIndex",i.selectedIndex||0)("disableRipple",i.disableRipple)("disablePagination",i.disablePagination),PF("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby),f(2),$e(i._tabs),f(2),M(i._isServer?4:-1),f(),K("_mat-animation-noopable",i._bodyAnimationsDisabled()),f(2),$e(i._tabs));},dependencies:[pn,Ri,Gte,tt,ic,de],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})}return r})(),ce=class{index;tab};function se(r){let n=r+"";return /^\d+$/.test(n)?r+"ms":n}var bn=(()=>{class r extends Ei{_focusedItem=I(null);get fitInkBarToContent(){return this._fitInkBarToContent.value}set fitInkBarToContent(t){this._fitInkBarToContent.next(t),this._changeDetectorRef.markForCheck();}_fitInkBarToContent=new rn$1(false);stretchTabs=true;get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e;}_animationDuration;_items;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t;}_backgroundColor;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t);}_disableRipple=I(false);color="primary";tabPanel;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;constructor(){let t=u(Li,{optional:true});super(),this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:false,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:false,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:true;}_itemSelected(){}ngAfterContentInit(){this._inkBar=new Et(this._items),this._items.changes.pipe(mn$1(null),Ke$1(this._destroyed)).subscribe(()=>this.updateActiveLink()),super.ngAfterContentInit(),this._keyManager.change.pipe(mn$1(null),Ke$1(this._destroyed)).subscribe(()=>this._focusedItem.set(this._keyManager?.activeItem||null));}ngAfterViewInit(){this.tabPanel,super.ngAfterViewInit();}updateActiveLink(){if(!this._items)return;let t=this._items.toArray();for(let e=0;e<t.length;e++)if(t[e].active){this.selectedIndex=e,this.tabPanel&&(this.tabPanel._activeTabId=t[e].id),this._focusedItem.set(t[e]),this._changeDetectorRef.markForCheck();return}this.selectedIndex=-1;}_getRole(){return this.tabPanel?"tablist":this._elementRef.nativeElement.getAttribute("role")}_hasFocus(t){return this._keyManager?.activeItem===t}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=B({type:r,selectors:[["","mat-tab-nav-bar",""]],contentQueries:function(e,i,a){if(e&1&&di$1(a,un,5),e&2){let o;oe$1(o=se$1())&&(i._items=o);}},viewQuery:function(e,i){if(e&1&&At(wi,7)(Ci,7)(Ti,7)(xi,5)(Pi,5),e&2){let a;oe$1(a=se$1())&&(i._tabListContainer=a.first),oe$1(a=se$1())&&(i._tabList=a.first),oe$1(a=se$1())&&(i._tabListInner=a.first),oe$1(a=se$1())&&(i._nextPaginator=a.first),oe$1(a=se$1())&&(i._previousPaginator=a.first);}},hostAttrs:[1,"mat-mdc-tab-nav-bar","mat-mdc-tab-header"],hostVars:17,hostBindings:function(e,i){e&2&&(F("role",i._getRole()),Ta("--mat-tab-header-animation-duration",i.animationDuration),K("mat-mdc-tab-header-pagination-controls-enabled",i._showPaginationControls)("mat-mdc-tab-header-rtl",i._getLayoutDirection()=="rtl")("mat-mdc-tab-nav-bar-stretch-tabs",i.stretchTabs)("mat-primary",i.color!=="warn"&&i.color!=="accent")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("_mat-animation-noopable",i._animationsDisabled));},inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",ie$1],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",ie$1],animationDuration:"animationDuration",backgroundColor:"backgroundColor",disableRipple:[2,"disableRipple","disableRipple",ie$1],color:"color",tabPanel:"tabPanel"},exportAs:["matTabNavBar","matTabNav"],features:[Re],ngContentSelectors:nt,decls:13,vars:6,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-link-container",3,"keydown"],[1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-links"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,i){e&1&&(Je$1(),_(0,"div",5,0),P("click",function(){return i._handlePaginatorClick("before")})("mousedown",function(o){return i._handlePaginatorPress("before",o)})("touchend",function(){return i._stopInterval()}),H(2,"div",6),h(),_(3,"div",7,1),P("keydown",function(o){return i._handleKeydown(o)}),_(5,"div",8,2),P("cdkObserveContent",function(){return i._onContentChanges()}),_(7,"div",9,3),_e(9),h()()(),_(10,"div",10,4),P("mousedown",function(o){return i._handlePaginatorPress("after",o)})("click",function(){return i._handlePaginatorClick("after")})("touchend",function(){return i._stopInterval()}),H(12,"div",6),h()),e&2&&(K("mat-mdc-tab-header-pagination-disabled",i._disableScrollBefore),T("matRippleDisabled",i._disableScrollBefore||i.disableRipple),f(10),K("mat-mdc-tab-header-pagination-disabled",i._disableScrollAfter),T("matRippleDisabled",i._disableScrollAfter||i.disableRipple));},dependencies:[tt,F2e],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-links {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-links, .mat-mdc-tab-links.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab-link-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-focus-indicator::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mdc-tab__ripple::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
`],encapsulation:2,changeDetection:1})}return r})(),un=(()=>{class r extends Si{_tabNavBar=u(bn);elementRef=u(q);_focusMonitor=u(jr);_destroyed=new j;_isActive=false;_tabIndex=D(()=>this._tabNavBar._focusedItem()===this?this.tabIndex:-1);get active(){return this._isActive}set active(t){t!==this._isActive&&(this._isActive=t,this._tabNavBar.updateActiveLink());}disabled=false;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t);}_disableRipple=I(false);tabIndex=0;rippleConfig;get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}id=u(Nt).getId("mat-tab-link-");constructor(){super(),u(en$1).load($r);let t=u(Jl,{optional:true}),e=u(new Pl("tabindex"),{optional:true});this.rippleConfig=t||{},this.tabIndex=e==null?0:parseInt(e)||0,Tt()&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0}),this._tabNavBar._fitInkBarToContent.pipe(Ke$1(this._destroyed)).subscribe(i=>{this.fitInkBarToContent=i;});}focus(){this.elementRef.nativeElement.focus();}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef);}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),super.ngOnDestroy(),this._focusMonitor.stopMonitoring(this.elementRef);}_handleFocus(){this._tabNavBar.focusIndex=this._tabNavBar._items.toArray().indexOf(this);}_handleKeydown(t){(t.keyCode===32||t.keyCode===13)&&(this.disabled?t.preventDefault():this._tabNavBar.tabPanel&&(t.keyCode===32&&t.preventDefault(),this.elementRef.nativeElement.click()));}_getAriaControls(){return this._tabNavBar.tabPanel?this._tabNavBar.tabPanel?.id:this.elementRef.nativeElement.getAttribute("aria-controls")}_getAriaSelected(){return this._tabNavBar.tabPanel?this.active?"true":"false":this.elementRef.nativeElement.getAttribute("aria-selected")}_getAriaCurrent(){return this.active&&!this._tabNavBar.tabPanel?"page":null}_getRole(){return this._tabNavBar.tabPanel?"tab":this.elementRef.nativeElement.getAttribute("role")}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=B({type:r,selectors:[["","mat-tab-link",""],["","matTabLink",""]],hostAttrs:[1,"mdc-tab","mat-mdc-tab-link","mat-focus-indicator"],hostVars:11,hostBindings:function(e,i){e&1&&P("focus",function(){return i._handleFocus()})("keydown",function(o){return i._handleKeydown(o)}),e&2&&(F("aria-controls",i._getAriaControls())("aria-current",i._getAriaCurrent())("aria-disabled",i.disabled)("aria-selected",i._getAriaSelected())("id",i.id)("tabIndex",i._tabIndex())("role",i._getRole()),K("mat-mdc-tab-disabled",i.disabled)("mdc-tab--active",i.active));},inputs:{active:[2,"active","active",ie$1],disabled:[2,"disabled","disabled",ie$1],disableRipple:[2,"disableRipple","disableRipple",ie$1],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:an$1(t)],id:"id"},exportAs:["matTabLink"],features:[Re],ngContentSelectors:nt,decls:5,vars:2,consts:[[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"]],template:function(e,i){e&1&&(Je$1(),H(0,"span",0)(1,"div",1),_(2,"span",2)(3,"span",3),_e(4),h()()),e&2&&(f(),T("matRippleTrigger",i.elementRef.nativeElement)("matRippleDisabled",i.rippleDisabled));},dependencies:[tt],styles:[`.mat-mdc-tab-link {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab-link.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab-link .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab-link:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab-link.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab-link .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab-link .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab-link:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab-link .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link {
  flex-grow: 1;
}
.mat-mdc-tab-link::before {
  margin: 5px;
}

@media (max-width: 599px) {
  .mat-mdc-tab-link {
    min-width: 72px;
  }
}
`],encapsulation:2})}return r})(),ba=(()=>{class r{id=u(Nt).getId("mat-tab-nav-panel-");_activeTabId;static \u0275fac=function(e){return new(e||r)};static \u0275cmp=B({type:r,selectors:[["mat-tab-nav-panel"]],hostAttrs:["role","tabpanel",1,"mat-mdc-tab-nav-panel"],hostVars:2,hostBindings:function(e,i){e&2&&F("aria-labelledby",i._activeTabId)("id",i.id);},inputs:{id:"id"},exportAs:["matTabNavPanel"],ngContentSelectors:nt,decls:1,vars:0,template:function(e,i){e&1&&(Je$1(),_e(0));},encapsulation:2})}return r})(),ua=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=ye({type:r});static \u0275inj=ge({imports:[Et$1]})}return r})();export{Bn as B,Fn as F,Hn as H,Nn as N,On as O,ba as a,bn as b,un as c,ci as d,cn as e,hn as h,pa as p,ua as u};//# sourceMappingURL=chunk-7RGKr8ud.js.map
