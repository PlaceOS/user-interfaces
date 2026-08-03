import {m,ar as oe,eD as xs,eE as I,eF as Fp,aw as l,av as m$1,eG as Zi,eH as Fo,eI as L$1,eJ as z$1,eK as ct,eL as ut,eM as YN,eN as nh,eO as Lp,eP as _e,eQ as JE,eR as Gie,p as pt,eS as Xi,J as Je,b1 as DD,a2 as kt,t as zn,aU as xt}from'./main-H4HLNZM5.js';function j(o,m){}var F="_mat-bottom-sheet-enter",L="_mat-bottom-sheet-exit",z=(()=>{class o extends Lp{_breakpointSubscription;_animationsDisabled=xs();_animationState="void";_animationStateChanged=new _e;_destroyed=false;constructor(){super();let e=m(JE);this._breakpointSubscription=e.observe([Gie.Medium,Gie.Large,Gie.XLarge]).subscribe(()=>{let n=this._elementRef.nativeElement.classList;n.toggle("mat-bottom-sheet-container-medium",e.isMatched(Gie.Medium)),n.toggle("mat-bottom-sheet-container-large",e.isMatched(Gie.Large)),n.toggle("mat-bottom-sheet-container-xlarge",e.isMatched(Gie.XLarge));});}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._animationsDisabled&&this._simulateAnimation(F));}exit(){this._destroyed||(this._elementRef.nativeElement.setAttribute("mat-exit",""),this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._animationsDisabled&&this._simulateAnimation(L));}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=true;}_simulateAnimation(e){this._ngZone.run(()=>{this._handleAnimationEvent(true,e),setTimeout(()=>this._handleAnimationEvent(false,e));});}_trapFocus(){super._trapFocus({preventScroll:true});}_handleAnimationEvent(e,n){let t=n===F;(t||n===L)&&this._animationStateChanged.emit({toState:t?"visible":"hidden",phase:e?"start":"done"});}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=pt({type:o,selectors:[["mat-bottom-sheet-container"]],hostAttrs:["tabindex","-1",1,"mat-bottom-sheet-container"],hostVars:9,hostBindings:function(n,t){n&1&&kt("animationstart",function(a){return t._handleAnimationEvent(true,a.animationName)})("animationend",function(a){return t._handleAnimationEvent(false,a.animationName)})("animationcancel",function(a){return t._handleAnimationEvent(false,a.animationName)}),n&2&&(zn("role",t._config.role)("aria-modal",t._config.ariaModal)("aria-label",t._config.ariaLabel),xt("mat-bottom-sheet-container-animations-enabled",!t._animationsDisabled)("mat-bottom-sheet-container-enter",t._animationState==="visible")("mat-bottom-sheet-container-exit",t._animationState==="hidden"));},features:[Je],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(n,t){n&1&&DD(0,j,0,0,"ng-template",0);},dependencies:[Xi],styles:[`@keyframes _mat-bottom-sheet-enter {
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
`],encapsulation:2,changeDetection:1})}return o})(),P=new I("MatBottomSheetData"),b=class{viewContainerRef;injector;panelClass;direction;data=null;hasBackdrop=true;backdropClass;disableClose=false;ariaLabel=null;ariaModal=false;closeOnNavigation=true;autoFocus="first-tabbable";restoreFocus=true;scrollStrategy;height="";minHeight;maxHeight;bindings},d=class{_ref;get instance(){return this._ref.componentInstance}get componentRef(){return this._ref.componentRef}containerInstance;disableClose;_afterOpened=new z$1;_result;_closeFallbackTimeout;constructor(m,e,n){this._ref=m,this.containerInstance=n,this.disableClose=e.disableClose,n._animationStateChanged.pipe(ct(t=>t.phase==="done"&&t.toState==="visible"),ut(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete();}),n._animationStateChanged.pipe(ct(t=>t.phase==="done"&&t.toState==="hidden"),ut(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result);}),m.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result);}),YN(this.backdropClick(),this.keydownEvents().pipe(ct(t=>t.keyCode===27))).subscribe(t=>{!this.disableClose&&(t.type!=="keydown"||!nh(t))&&(t.preventDefault(),this.dismiss());});}dismiss(m){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe(ct(e=>e.phase==="start"),ut(1)).subscribe(()=>{this._closeFallbackTimeout=setTimeout(()=>this._ref.close(this._result),500),this._ref.overlayRef.detachBackdrop();}),this._result=m,this.containerInstance.exit(),this.containerInstance=null);}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}},V=new I("mat-bottom-sheet-default-options"),lt=(()=>{class o{_injector=m(oe);_parentBottomSheet=m(o,{optional:true,skipSelf:true});_animationsDisabled=xs();_defaultOptions=m(V,{optional:true});_bottomSheetRefAtThisLevel=null;_dialog=m(Fp);get _openedBottomSheetRef(){let e=this._parentBottomSheet;return e?e._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(e){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=e:this._bottomSheetRefAtThisLevel=e;}open(e,n){let t=l(l({},this._defaultOptions||new b),n),i;return this._dialog.open(e,m$1(l({},t),{disableClose:true,closeOnOverlayDetachments:false,maxWidth:"100%",container:z,scrollStrategy:t.scrollStrategy||Fo(this._injector),positionStrategy:Zi(this._injector).centerHorizontally().bottom("0"),disableAnimations:this._animationsDisabled,templateContext:()=>({bottomSheetRef:i}),providers:(a,X,H)=>(i=new d(a,t,H),[{provide:d,useValue:i},{provide:P,useValue:t.data}])})),i.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===i&&(this._openedBottomSheetRef=null);}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>i.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):i.containerInstance.enter(),this._openedBottomSheetRef=i,i}dismiss(e){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(e);}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss();}static \u0275fac=function(n){return new(n||o)};static \u0275prov=L$1({token:o,factory:o.\u0275fac})}return o})();export{d,lt as l};