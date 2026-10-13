import{n as m,t as l}from"./chunk-BwCtja5l.js";import{Br as re,Mn as de,Qt as Xt,S as E,W as Jn,X as Km,b as Dm,bn as b$1,ci as wt,ct as Nm,en as YC,m as Bm,vt as Pv,wi as zr,yi as ym}from"./chunk--InGYtT4.js";import{h as U,m as De,v as ce}from"./main.js";import{c as Pe}from"./chunk-B2ggC-Ch.js";import{b as je,c as Le,m as Wi}from"./chunk-mDw-dW8T.js";import{i as K,l as X}from"./chunk-D_cJUKMT.js";function j(i,m){}var I=`_mat-bottom-sheet-enter`;var F=`_mat-bottom-sheet-exit`;var z=(()=>{class i extends K{_breakpointSubscription;_animationsDisabled=De();_animationState=`void`;_animationStateChanged=new wt;_destroyed=!1;constructor(){super();let e=E(U);this._breakpointSubscription=e.observe([ce.Medium,ce.Large,ce.XLarge]).subscribe(()=>{let n=this._elementRef.nativeElement.classList;n.toggle(`mat-bottom-sheet-container-medium`,e.isMatched(ce.Medium)),n.toggle(`mat-bottom-sheet-container-large`,e.isMatched(ce.Large)),n.toggle(`mat-bottom-sheet-container-xlarge`,e.isMatched(ce.XLarge))})}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._animationsDisabled&&this._simulateAnimation(I))}exit(){this._destroyed||(this._elementRef.nativeElement.setAttribute(`mat-exit`,``),this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._animationsDisabled&&this._simulateAnimation(F))}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=!0}_simulateAnimation(e){this._ngZone.run(()=>{this._handleAnimationEvent(!0,e,this._elementRef.nativeElement),setTimeout(()=>this._handleAnimationEvent(!1,e,this._elementRef.nativeElement))})}_trapFocus(){super._trapFocus({preventScroll:!0})}_handleAnimationEvent(e,n,t){if(t===this._elementRef.nativeElement){let o=n===I;(o||n===F)&&this._animationStateChanged.emit({toState:o?`visible`:`hidden`,phase:e?`start`:`done`})}}static ɵfac=function(n){return new(n||i)};static ɵcmp=YC({type:i,selectors:[[`mat-bottom-sheet-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-bottom-sheet-container`],hostVars:9,hostBindings:function(n,t){n&1&&Bm(`animationstart`,function(a){return t._handleAnimationEvent(!0,a.animationName,a.target)})(`animationend`,function(a){return t._handleAnimationEvent(!1,a.animationName,a.target)})(`animationcancel`,function(a){return t._handleAnimationEvent(!1,a.animationName,a.target)}),n&2&&(Nm(`role`,t._config.role)(`aria-modal`,t._config.ariaModal)(`aria-label`,t._config.ariaLabel),Km(`mat-bottom-sheet-container-animations-enabled`,!t._animationsDisabled)(`mat-bottom-sheet-container-enter`,t._animationState===`visible`)(`mat-bottom-sheet-container-exit`,t._animationState===`hidden`))},features:[ym],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(n,t){n&1&&Dm(0,j,0,0,`ng-template`,0)},dependencies:[Wi],styles:[`@keyframes _mat-bottom-sheet-enter {
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
`],encapsulation:2,changeDetection:1})}return i})();var P=new b$1(`MatBottomSheetData`);var b=class{viewContainerRef;injector;panelClass;direction;data=null;hasBackdrop=!0;backdropClass;disableClose=!1;ariaLabel=null;ariaModal=!1;closeOnNavigation=!0;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;height=``;minHeight;maxHeight;bindings};var d=class{_ref;get instance(){return this._ref.componentInstance}get componentRef(){return this._ref.componentRef}containerInstance;disableClose;_afterOpened=new re;_result;_closeFallbackTimeout;constructor(m,e,n){this._ref=m,this.containerInstance=n,this.disableClose=e.disableClose,n._animationStateChanged.pipe(zr(t=>t.phase===`done`&&t.toState===`visible`),Jn(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),n._animationStateChanged.pipe(zr(t=>t.phase===`done`&&t.toState===`hidden`),Jn(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result)}),m.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result)}),Pv(this.backdropClick(),this.keydownEvents().pipe(zr(t=>t.keyCode===27))).subscribe(t=>{!this.disableClose&&(t.type!==`keydown`||!Pe(t))&&(t.preventDefault(),this.dismiss())})}dismiss(m){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe(zr(e=>e.phase===`start`),Jn(1)).subscribe(()=>{this._closeFallbackTimeout=setTimeout(()=>this._ref.close(this._result),500),this._ref.overlayRef.detachBackdrop()}),this._result=m,this.containerInstance.exit(),this.containerInstance=null)}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}};var V=new b$1(`mat-bottom-sheet-default-options`);var lt=(()=>{class i{_injector=E(de);_parentBottomSheet=E(i,{optional:!0,skipSelf:!0});_animationsDisabled=De();_defaultOptions=E(V,{optional:!0});_bottomSheetRefAtThisLevel=null;_dialog=E(X);get _openedBottomSheetRef(){let e=this._parentBottomSheet;return e?e._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(e){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=e:this._bottomSheetRefAtThisLevel=e}open(e,n){let t=l(l({},this._defaultOptions||new b),n),o;return this._dialog.open(e,m(l({},t),{disableClose:!0,closeOnOverlayDetachments:!1,maxWidth:`100%`,container:z,scrollStrategy:t.scrollStrategy||Le(this._injector),positionStrategy:je(this._injector).centerHorizontally().bottom(`0`),disableAnimations:this._animationsDisabled,templateContext:()=>({bottomSheetRef:o}),providers:(a,X,L)=>(o=new d(a,t,L),[{provide:d,useValue:o},{provide:P,useValue:t.data}])})),o.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===o&&(this._openedBottomSheetRef=null)}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>o.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):o.containerInstance.enter(),this._openedBottomSheetRef=o,o}dismiss(e){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(e)}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss()}static ɵfac=function(n){return new(n||i)};static ɵprov=Xt({token:i,factory:i.ɵfac})}return i})();export{lt as n,d as t};
//# debugId=c5aeba70-a9ad-5c66-9180-2f58f56aaf90
//# sourceMappingURL=chunk-BroTrx0l.js.map