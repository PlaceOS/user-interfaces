import {m as m$1,ba as re,ei as xs,ej as I,ek as bp,u as l,t as m$2,el as Gi,em as Co,en as L,eo as z$1,ep as ct,eq as ut,er as jN,es as rh,et as Fe,eu as be,ev as S0,ew as ui,ex as Vs,ey as gp,ez as _e,eA as JE,eB as Iie,f as ft,eC as qi,g as Tt,bv as AD,V as Kn,bI as Yn,a1 as wt}from'./main-NAYCID7D.js';function Y(o,m){}var z="_mat-bottom-sheet-enter",P="_mat-bottom-sheet-exit",G=(()=>{class o extends gp{_breakpointSubscription;_animationsDisabled=xs();_animationState="void";_animationStateChanged=new _e;_destroyed=false;constructor(){super();let e=m$1(JE);this._breakpointSubscription=e.observe([Iie.Medium,Iie.Large,Iie.XLarge]).subscribe(()=>{let n=this._elementRef.nativeElement.classList;n.toggle("mat-bottom-sheet-container-medium",e.isMatched(Iie.Medium)),n.toggle("mat-bottom-sheet-container-large",e.isMatched(Iie.Large)),n.toggle("mat-bottom-sheet-container-xlarge",e.isMatched(Iie.XLarge));});}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._animationsDisabled&&this._simulateAnimation(z));}exit(){this._destroyed||(this._elementRef.nativeElement.setAttribute("mat-exit",""),this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._animationsDisabled&&this._simulateAnimation(P));}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=true;}_simulateAnimation(e){this._ngZone.run(()=>{this._handleAnimationEvent(true,e),setTimeout(()=>this._handleAnimationEvent(false,e));});}_trapFocus(){super._trapFocus({preventScroll:true});}_handleAnimationEvent(e,n){let t=n===z;(t||n===P)&&this._animationStateChanged.emit({toState:t?"visible":"hidden",phase:e?"start":"done"});}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=ft({type:o,selectors:[["mat-bottom-sheet-container"]],hostAttrs:["tabindex","-1",1,"mat-bottom-sheet-container"],hostVars:9,hostBindings:function(n,t){n&1&&Kn("animationstart",function(a){return t._handleAnimationEvent(true,a.animationName)})("animationend",function(a){return t._handleAnimationEvent(false,a.animationName)})("animationcancel",function(a){return t._handleAnimationEvent(false,a.animationName)}),n&2&&(Yn("role",t._config.role)("aria-modal",t._config.ariaModal)("aria-label",t._config.ariaLabel),wt("mat-bottom-sheet-container-animations-enabled",!t._animationsDisabled)("mat-bottom-sheet-container-enter",t._animationState==="visible")("mat-bottom-sheet-container-exit",t._animationState==="hidden"));},features:[Tt],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(n,t){n&1&&AD(0,Y,0,0,"ng-template",0);},dependencies:[qi],styles:[`@keyframes _mat-bottom-sheet-enter {
  from {
    transform: translateY(100%);
  }
  to {
    transform: none;
  }
}
@keyframes _mat-bottom-sheet-exit {
  from {
    transform: none;
  }
  to {
    transform: translateY(100%);
  }
}
.mat-bottom-sheet-container {
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  min-width: 100vw;
  box-sizing: border-box;
  display: block;
  outline: 0;
  max-height: 80vh;
  overflow: auto;
  position: relative;
  background: var(--mat-bottom-sheet-container-background-color, var(--mat-sys-surface-container-low));
  color: var(--mat-bottom-sheet-container-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-bottom-sheet-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-bottom-sheet-container-text-size, var(--mat-sys-body-large-size));
  line-height: var(--mat-bottom-sheet-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-weight: var(--mat-bottom-sheet-container-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-bottom-sheet-container-text-tracking, var(--mat-sys-body-large-tracking));
}
@media (forced-colors: active) {
  .mat-bottom-sheet-container {
    outline: 1px solid;
  }
}

.mat-bottom-sheet-container-animations-enabled {
  transform: translateY(100%);
}
.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter {
  animation: _mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit {
  animation: _mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards;
}

.mat-bottom-sheet-container-xlarge, .mat-bottom-sheet-container-large, .mat-bottom-sheet-container-medium {
  border-top-left-radius: var(--mat-bottom-sheet-container-shape, 28px);
  border-top-right-radius: var(--mat-bottom-sheet-container-shape, 28px);
}

.mat-bottom-sheet-container-medium {
  min-width: 384px;
  max-width: calc(100vw - 128px);
}

.mat-bottom-sheet-container-large {
  min-width: 512px;
  max-width: calc(100vw - 256px);
}

.mat-bottom-sheet-container-xlarge {
  min-width: 576px;
  max-width: calc(100vw - 384px);
}
`],encapsulation:2,changeDetection:1})}return o})(),K=new I("MatBottomSheetData"),b=class{viewContainerRef;injector;panelClass;direction;data=null;hasBackdrop=true;backdropClass;disableClose=false;ariaLabel=null;ariaModal=false;closeOnNavigation=true;autoFocus="first-tabbable";restoreFocus=true;scrollStrategy;height="";minHeight;maxHeight;bindings},d=class{_ref;get instance(){return this._ref.componentInstance}get componentRef(){return this._ref.componentRef}containerInstance;disableClose;_afterOpened=new z$1;_result;_closeFallbackTimeout;constructor(m,e,n){this._ref=m,this.containerInstance=n,this.disableClose=e.disableClose,n._animationStateChanged.pipe(ct(t=>t.phase==="done"&&t.toState==="visible"),ut(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete();}),n._animationStateChanged.pipe(ct(t=>t.phase==="done"&&t.toState==="hidden"),ut(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result);}),m.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result);}),jN(this.backdropClick(),this.keydownEvents().pipe(ct(t=>t.keyCode===27))).subscribe(t=>{!this.disableClose&&(t.type!=="keydown"||!rh(t))&&(t.preventDefault(),this.dismiss());});}dismiss(m){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe(ct(e=>e.phase==="start"),ut(1)).subscribe(()=>{this._closeFallbackTimeout=setTimeout(()=>this._ref.close(this._result),500),this._ref.overlayRef.detachBackdrop();}),this._result=m,this.containerInstance.exit(),this.containerInstance=null);}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}},U=new I("mat-bottom-sheet-default-options"),W=(()=>{class o{_injector=m$1(re);_parentBottomSheet=m$1(o,{optional:true,skipSelf:true});_animationsDisabled=xs();_defaultOptions=m$1(U,{optional:true});_bottomSheetRefAtThisLevel=null;_dialog=m$1(bp);get _openedBottomSheetRef(){let e=this._parentBottomSheet;return e?e._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(e){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=e:this._bottomSheetRefAtThisLevel=e;}open(e,n){let t=l(l({},this._defaultOptions||new b),n),i;return this._dialog.open(e,m$2(l({},t),{disableClose:true,closeOnOverlayDetachments:false,maxWidth:"100%",container:G,scrollStrategy:t.scrollStrategy||Co(this._injector),positionStrategy:Gi(this._injector).centerHorizontally().bottom("0"),disableAnimations:this._animationsDisabled,templateContext:()=>({bottomSheetRef:i}),providers:(a,Z,V)=>(i=new d(a,t,V),[{provide:d,useValue:i},{provide:K,useValue:t.data}])})),i.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===i&&(this._openedBottomSheetRef=null);}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>i.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):i.containerInstance.enter(),this._openedBottomSheetRef=i,i}dismiss(e){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(e);}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss();}static \u0275fac=function(n){return new(n||o)};static \u0275prov=L({token:o,factory:o.\u0275fac})}return o})(),dt=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=Fe({type:o});static \u0275inj=be({providers:[W],imports:[S0,ui,Vs]})}return o})();export{W,dt as a,d};