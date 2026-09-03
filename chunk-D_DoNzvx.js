import{$r as Ys,Co as pt,Eo as qD,Es as we,Io as qs,It as L,Nt as Kn,Sa as ie,Sr as Vt,T as Bt,To as q,Wn as Se,Xs as l,Zs as m,ct as I,dr as Ue,fo as ot,ga as ht,ma as hb,or as Tse,pi as _S,po as p,qn as St,yo as ph}from"./chunk-BVfe6scB.js";import{An as iw,E as Fi,Or as yr,U as Lh,hn as es,st as Ph,vr}from"./chunk-DZpWVV7z.js";function Y(o,m){}var z=`_mat-bottom-sheet-enter`;var P=`_mat-bottom-sheet-exit`;var G=(()=>{class o extends Ph{_breakpointSubscription;_animationsDisabled=Ys();_animationState=`void`;_animationStateChanged=new Se;_destroyed=!1;constructor(){super();let e=p(_S);this._breakpointSubscription=e.observe([Tse.Medium,Tse.Large,Tse.XLarge]).subscribe(()=>{let n=this._elementRef.nativeElement.classList;n.toggle(`mat-bottom-sheet-container-medium`,e.isMatched(Tse.Medium)),n.toggle(`mat-bottom-sheet-container-large`,e.isMatched(Tse.Large)),n.toggle(`mat-bottom-sheet-container-xlarge`,e.isMatched(Tse.XLarge))})}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._animationsDisabled&&this._simulateAnimation(z))}exit(){this._destroyed||(this._elementRef.nativeElement.setAttribute(`mat-exit`,``),this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._animationsDisabled&&this._simulateAnimation(P))}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=!0}_simulateAnimation(e){this._ngZone.run(()=>{this._handleAnimationEvent(!0,e,this._elementRef.nativeElement),setTimeout(()=>this._handleAnimationEvent(!1,e,this._elementRef.nativeElement))})}_trapFocus(){super._trapFocus({preventScroll:!0})}_handleAnimationEvent(e,n,t){if(t===this._elementRef.nativeElement){let i=n===z;(i||n===P)&&this._animationStateChanged.emit({toState:i?`visible`:`hidden`,phase:e?`start`:`done`})}}static ɵfac=function(n){return new(n||o)};static ɵcmp=St({type:o,selectors:[[`mat-bottom-sheet-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-bottom-sheet-container`],hostVars:9,hostBindings:function(n,t){n&1&&Vt(`animationstart`,function(a){return t._handleAnimationEvent(!0,a.animationName,a.target)})(`animationend`,function(a){return t._handleAnimationEvent(!1,a.animationName,a.target)})(`animationcancel`,function(a){return t._handleAnimationEvent(!1,a.animationName,a.target)}),n&2&&(Kn(`role`,t._config.role)(`aria-modal`,t._config.ariaModal)(`aria-label`,t._config.ariaLabel),Bt(`mat-bottom-sheet-container-animations-enabled`,!t._animationsDisabled)(`mat-bottom-sheet-container-enter`,t._animationState===`visible`)(`mat-bottom-sheet-container-exit`,t._animationState===`hidden`))},features:[ot],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(n,t){n&1&&qD(0,Y,0,0,`ng-template`,0)},dependencies:[yr],styles:[`@keyframes _mat-bottom-sheet-enter {
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
`],encapsulation:2,changeDetection:1})}return o})();var K=new I(`MatBottomSheetData`);var b=class{viewContainerRef;injector;panelClass;direction;data=null;hasBackdrop=!0;backdropClass;disableClose=!1;ariaLabel=null;ariaModal=!1;closeOnNavigation=!0;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;height=``;minHeight;maxHeight;bindings};var d=class{_ref;get instance(){return this._ref.componentInstance}get componentRef(){return this._ref.componentRef}containerInstance;disableClose;_afterOpened=new q;_result;_closeFallbackTimeout;constructor(m,e,n){this._ref=m,this.containerInstance=n,this.disableClose=e.disableClose,n._animationStateChanged.pipe(ht(t=>t.phase===`done`&&t.toState===`visible`),pt(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),n._animationStateChanged.pipe(ht(t=>t.phase===`done`&&t.toState===`hidden`),pt(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result)}),m.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result)}),hb(this.backdropClick(),this.keydownEvents().pipe(ht(t=>t.keyCode===27))).subscribe(t=>{!this.disableClose&&(t.type!==`keydown`||!ph(t))&&(t.preventDefault(),this.dismiss())})}dismiss(m){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe(ht(e=>e.phase===`start`),pt(1)).subscribe(()=>{this._closeFallbackTimeout=setTimeout(()=>this._ref.close(this._result),500),this._ref.overlayRef.detachBackdrop()}),this._result=m,this.containerInstance.exit(),this.containerInstance=null)}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}};var U=new I(`mat-bottom-sheet-default-options`);var W=(()=>{class o{_injector=p(ie);_parentBottomSheet=p(o,{optional:!0,skipSelf:!0});_animationsDisabled=Ys();_defaultOptions=p(U,{optional:!0});_bottomSheetRefAtThisLevel=null;_dialog=p(Lh);get _openedBottomSheetRef(){let e=this._parentBottomSheet;return e?e._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(e){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=e:this._bottomSheetRefAtThisLevel=e}open(e,n){let t=l(l({},this._defaultOptions||new b),n),i;return this._dialog.open(e,m(l({},t),{disableClose:!0,closeOnOverlayDetachments:!1,maxWidth:`100%`,container:G,scrollStrategy:t.scrollStrategy||es(this._injector),positionStrategy:vr(this._injector).centerHorizontally().bottom(`0`),disableAnimations:this._animationsDisabled,templateContext:()=>({bottomSheetRef:i}),providers:(a,Z,V)=>(i=new d(a,t,V),[{provide:d,useValue:i},{provide:K,useValue:t.data}])})),i.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===i&&(this._openedBottomSheetRef=null)}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>i.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):i.containerInstance.enter(),this._openedBottomSheetRef=i,i}dismiss(e){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(e)}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss()}static ɵfac=function(n){return new(n||o)};static ɵprov=L({token:o,factory:o.ɵfac})}return o})();var dt=(()=>{class o{static ɵfac=function(n){return new(n||o)};static ɵmod=Ue({type:o});static ɵinj=we({providers:[W],imports:[iw,Fi,qs]})}return o})();export{d as n,dt as r,W as t};
//# debugId=721c5f1a-379a-550c-8c36-ba0f7529acbb
//# sourceMappingURL=chunk-D_DoNzvx.js.map