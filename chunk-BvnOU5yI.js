import{Ea as jt,Ha as m,Ja as mt,Jt as Le,K as ET,No as se,Ns as ye,Ot as It,P as Ch,Ts as xS,Uo as ta,Ut as L,Ws as zn,Xs as m$1,Ys as l,Zo as uae,ct as Gt,fo as pt,ha as it,io as oa,is as v,mo as q,mr as Ve,pt as Hb}from"./chunk-gxSf07aA.js";import{C as Ii,Ft as no,I as Nf,Z as Ti,_n as zv,l as Cf,x as Hn}from"./chunk-DMUT_Gs_.js";function Y(o,m){}var z=`_mat-bottom-sheet-enter`;var P=`_mat-bottom-sheet-exit`;var G=(()=>{class o extends Cf{_breakpointSubscription;_animationsDisabled=ta();_animationState=`void`;_animationStateChanged=new ye;_destroyed=!1;constructor(){super();let e=m(xS);this._breakpointSubscription=e.observe([uae.Medium,uae.Large,uae.XLarge]).subscribe(()=>{let n=this._elementRef.nativeElement.classList;n.toggle(`mat-bottom-sheet-container-medium`,e.isMatched(uae.Medium)),n.toggle(`mat-bottom-sheet-container-large`,e.isMatched(uae.Large)),n.toggle(`mat-bottom-sheet-container-xlarge`,e.isMatched(uae.XLarge))})}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._animationsDisabled&&this._simulateAnimation(z))}exit(){this._destroyed||(this._elementRef.nativeElement.setAttribute(`mat-exit`,``),this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._animationsDisabled&&this._simulateAnimation(P))}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=!0}_simulateAnimation(e){this._ngZone.run(()=>{this._handleAnimationEvent(!0,e,this._elementRef.nativeElement),setTimeout(()=>this._handleAnimationEvent(!1,e,this._elementRef.nativeElement))})}_trapFocus(){super._trapFocus({preventScroll:!0})}_handleAnimationEvent(e,n,t){if(t===this._elementRef.nativeElement){let i=n===z;(i||n===P)&&this._animationStateChanged.emit({toState:i?`visible`:`hidden`,phase:e?`start`:`done`})}}static ɵfac=function(n){return new(n||o)};static ɵcmp=It({type:o,selectors:[[`mat-bottom-sheet-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-bottom-sheet-container`],hostVars:9,hostBindings:function(n,t){n&1&&Gt(`animationstart`,function(a){return t._handleAnimationEvent(!0,a.animationName,a.target)})(`animationend`,function(a){return t._handleAnimationEvent(!1,a.animationName,a.target)})(`animationcancel`,function(a){return t._handleAnimationEvent(!1,a.animationName,a.target)}),n&2&&(zn(`role`,t._config.role)(`aria-modal`,t._config.ariaModal)(`aria-label`,t._config.ariaLabel),jt(`mat-bottom-sheet-container-animations-enabled`,!t._animationsDisabled)(`mat-bottom-sheet-container-enter`,t._animationState===`visible`)(`mat-bottom-sheet-container-exit`,t._animationState===`hidden`))},features:[it],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(n,t){n&1&&ET(0,Y,0,0,`ng-template`,0)},dependencies:[Ti],styles:[`@keyframes _mat-bottom-sheet-enter {
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
  background: var(--%NS%mat-bottom-sheet-container-background-color, var(--%NS%mat-sys-surface-container-low));
  color: var(--%NS%mat-bottom-sheet-container-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-bottom-sheet-container-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-bottom-sheet-container-text-size, var(--%NS%mat-sys-body-large-size));
  line-height: var(--%NS%mat-bottom-sheet-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-weight: var(--%NS%mat-bottom-sheet-container-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-bottom-sheet-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
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
  border-top-left-radius: var(--%NS%mat-bottom-sheet-container-shape, 28px);
  border-top-right-radius: var(--%NS%mat-bottom-sheet-container-shape, 28px);
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
`],encapsulation:2,changeDetection:1})}return o})();var K=new v(`MatBottomSheetData`);var b=class{viewContainerRef;injector;panelClass;direction;data=null;hasBackdrop=!0;backdropClass;disableClose=!1;ariaLabel=null;ariaModal=!1;closeOnNavigation=!0;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;height=``;minHeight;maxHeight;bindings};var d=class{_ref;get instance(){return this._ref.componentInstance}get componentRef(){return this._ref.componentRef}containerInstance;disableClose;_afterOpened=new q;_result;_closeFallbackTimeout;constructor(m,e,n){this._ref=m,this.containerInstance=n,this.disableClose=e.disableClose,n._animationStateChanged.pipe(pt(t=>t.phase===`done`&&t.toState===`visible`),mt(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),n._animationStateChanged.pipe(pt(t=>t.phase===`done`&&t.toState===`hidden`),mt(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result)}),m.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result)}),Hb(this.backdropClick(),this.keydownEvents().pipe(pt(t=>t.keyCode===27))).subscribe(t=>{!this.disableClose&&(t.type!==`keydown`||!Ch(t))&&(t.preventDefault(),this.dismiss())})}dismiss(m){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe(pt(e=>e.phase===`start`),mt(1)).subscribe(()=>{this._closeFallbackTimeout=setTimeout(()=>this._ref.close(this._result),500),this._ref.overlayRef.detachBackdrop()}),this._result=m,this.containerInstance.exit(),this.containerInstance=null)}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}};var U=new v(`mat-bottom-sheet-default-options`);var W=(()=>{class o{_injector=m(se);_parentBottomSheet=m(o,{optional:!0,skipSelf:!0});_animationsDisabled=ta();_defaultOptions=m(U,{optional:!0});_bottomSheetRefAtThisLevel=null;_dialog=m(Nf);get _openedBottomSheetRef(){let e=this._parentBottomSheet;return e?e._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(e){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=e:this._bottomSheetRefAtThisLevel=e}open(e,n){let t=l(l({},this._defaultOptions||new b),n),i;return this._dialog.open(e,m$1(l({},t),{disableClose:!0,closeOnOverlayDetachments:!1,maxWidth:`100%`,container:G,scrollStrategy:t.scrollStrategy||no(this._injector),positionStrategy:Ii(this._injector).centerHorizontally().bottom(`0`),disableAnimations:this._animationsDisabled,templateContext:()=>({bottomSheetRef:i}),providers:(a,Z,V)=>(i=new d(a,t,V),[{provide:d,useValue:i},{provide:K,useValue:t.data}])})),i.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===i&&(this._openedBottomSheetRef=null)}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>i.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):i.containerInstance.enter(),this._openedBottomSheetRef=i,i}dismiss(e){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(e)}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss()}static ɵfac=function(n){return new(n||o)};static ɵprov=L({token:o,factory:o.ɵfac})}return o})();var dt=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=Ve({type:o});static ɵinj=Le({providers:[W],imports:[zv,Hn,oa]})}return o})();export{d as n,dt as r,W as t};
//# debugId=8366463b-e34a-5998-8c0f-824ea7596e48
//# sourceMappingURL=chunk-BvnOU5yI.js.map