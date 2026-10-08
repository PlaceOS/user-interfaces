import{n as m,t as l}from"./chunk-Da4-SChG.js";import{$r as w,At as Ss,H as Hm,In as gD,It as Tb,Qr as vn,St as Qo,Tt as Re,Un as he,Wn as ht,Y as Jm,_t as Pe,dn as ay,dt as N,fi as yy,i as $m,k as Er,l as At,ln as ae,oi as y,ur as lr}from"./chunk-BAwOJ6nI.js";import{E as Nu,Lt as of,Mt as li,s as Cu}from"./chunk-DJ3iXP9W.js";import{E as et,F as zn,N as q,P as qn,m as Un}from"./chunk-BLOUne-x.js";import{H as Re$1,q as Si,rt as Ve}from"./chunk-DOqUrnHl.js";import{b as je,c as Le,l as Pe$1,m as Wi}from"./chunk-BLz2O4Zr.js";import{a as K,r as Fe,u as X}from"./chunk-CbfSdsYD.js";import{n as Me}from"./chunk-Cc1c3ygw.js";function at(n,l){}var $=`_mat-bottom-sheet-enter`;var tt=`_mat-bottom-sheet-exit`;var ot=(()=>{class n extends K{_breakpointSubscription;_animationsDisabled=qn();_animationState=`void`;_animationStateChanged=new At;_destroyed=!1;constructor(){super();let t=y(q);this._breakpointSubscription=t.observe([Un.Medium,Un.Large,Un.XLarge]).subscribe(()=>{let i=this._elementRef.nativeElement.classList;i.toggle(`mat-bottom-sheet-container-medium`,t.isMatched(Un.Medium)),i.toggle(`mat-bottom-sheet-container-large`,t.isMatched(Un.Large)),i.toggle(`mat-bottom-sheet-container-xlarge`,t.isMatched(Un.XLarge))})}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._animationsDisabled&&this._simulateAnimation($))}exit(){this._destroyed||(this._elementRef.nativeElement.setAttribute(`mat-exit`,``),this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._animationsDisabled&&this._simulateAnimation(tt))}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=!0}_simulateAnimation(t){this._ngZone.run(()=>{this._handleAnimationEvent(!0,t,this._elementRef.nativeElement),setTimeout(()=>this._handleAnimationEvent(!1,t,this._elementRef.nativeElement))})}_trapFocus(){super._trapFocus({preventScroll:!0})}_handleAnimationEvent(t,i,e){if(e===this._elementRef.nativeElement){let a=i===$;(a||i===tt)&&this._animationStateChanged.emit({toState:a?`visible`:`hidden`,phase:t?`start`:`done`})}}static ɵfac=function(i){return new(i||n)};static ɵcmp=Tb({type:n,selectors:[[`mat-bottom-sheet-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-bottom-sheet-container`],hostVars:9,hostBindings:function(i,e){i&1&&ay(`animationstart`,function(o){return e._handleAnimationEvent(!0,o.animationName,o.target)})(`animationend`,function(o){return e._handleAnimationEvent(!1,o.animationName,o.target)})(`animationcancel`,function(o){return e._handleAnimationEvent(!1,o.animationName,o.target)}),i&2&&(Jm(`role`,e._config.role)(`aria-modal`,e._config.ariaModal)(`aria-label`,e._config.ariaLabel),yy(`mat-bottom-sheet-container-animations-enabled`,!e._animationsDisabled)(`mat-bottom-sheet-container-enter`,e._animationState===`visible`)(`mat-bottom-sheet-container-exit`,e._animationState===`hidden`))},features:[Hm],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(i,e){i&1&&$m(0,at,0,0,`ng-template`,0)},dependencies:[Wi],styles:[`@keyframes _mat-bottom-sheet-enter {
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
`],encapsulation:2,changeDetection:1})}return n})();var st=new w(`MatBottomSheetData`);var v=class{viewContainerRef;injector;panelClass;direction;data=null;hasBackdrop=!0;backdropClass;disableClose=!1;ariaLabel=null;ariaModal=!1;closeOnNavigation=!0;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;height=``;minHeight;maxHeight;bindings};var f=class{_ref;get instance(){return this._ref.componentInstance}get componentRef(){return this._ref.componentRef}containerInstance;disableClose;_afterOpened=new ae;_result;_closeFallbackTimeout;constructor(l,t,i){this._ref=l,this.containerInstance=i,this.disableClose=t.disableClose,i._animationStateChanged.pipe(vn(e=>e.phase===`done`&&e.toState===`visible`),lr(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),i._animationStateChanged.pipe(vn(e=>e.phase===`done`&&e.toState===`hidden`),lr(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result)}),l.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result)}),gD(this.backdropClick(),this.keydownEvents().pipe(vn(e=>e.keyCode===27))).subscribe(e=>{!this.disableClose&&(e.type!==`keydown`||!et(e))&&(e.preventDefault(),this.dismiss())})}dismiss(l){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe(vn(t=>t.phase===`start`),lr(1)).subscribe(()=>{this._closeFallbackTimeout=setTimeout(()=>this._ref.close(this._result),500),this._ref.overlayRef.detachBackdrop()}),this._result=l,this.containerInstance.exit(),this.containerInstance=null)}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}};var rt=new w(`mat-bottom-sheet-default-options`);var mt=(()=>{class n{_injector=y(he);_parentBottomSheet=y(n,{optional:!0,skipSelf:!0});_animationsDisabled=qn();_defaultOptions=y(rt,{optional:!0});_bottomSheetRefAtThisLevel=null;_dialog=y(X);get _openedBottomSheetRef(){let t=this._parentBottomSheet;return t?t._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(t){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=t:this._bottomSheetRefAtThisLevel=t}open(t,i){let e=l(l({},this._defaultOptions||new v),i),a;return this._dialog.open(t,m(l({},e),{disableClose:!0,closeOnOverlayDetachments:!1,maxWidth:`100%`,container:ot,scrollStrategy:e.scrollStrategy||Le(this._injector),positionStrategy:je(this._injector).centerHorizontally().bottom(`0`),disableAnimations:this._animationsDisabled,templateContext:()=>({bottomSheetRef:a}),providers:(o,lt,et)=>(a=new f(o,e,et),[{provide:f,useValue:a},{provide:st,useValue:e.data}])})),a.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===a&&(this._openedBottomSheetRef=null)}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>a.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):a.containerInstance.enter(),this._openedBottomSheetRef=a,a}dismiss(t){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(t)}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss()}static ɵfac=function(i){return new(i||n)};static ɵprov=Pe({token:n,factory:n.ɵfac})}return n})();var Dt=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Qo({type:n});static ɵinj=Er({providers:[mt],imports:[Fe,Pe$1,zn]})}return n})();var p;var Ot=(()=>{class n{get space_list(){return this.list()}constructor(){this._org=y(Si),this._settings=y(Re$1),this._all_spaces=ht([]),this._initialised=ht(!1),this.initialised=this._initialised.asReadonly(),this.all_spaces=this._all_spaces.asReadonly(),this.list=Re(()=>this._all_spaces().filter(t=>t.map_id)),this._spaces_by_id=Re(()=>new Map(this.list().map(t=>[t.id,t]))),this._spaces_by_email=Re(()=>new Map(this.list().filter(({email:t})=>!!t).map(t=>[t.email,t]))),this.features=Re(()=>li(of(this.list().map(t=>t.features)))),this._compare=t=>t.zones.includes(this._org.building.id),p=new Me,p.org||(p.org=this._org),Ss(()=>{this._org.initialised()&&this._init()})}_init(){this._settings.get(`app.prevent_space_init`)?this._initialised.set(!0):this.loadSpaces()}filter(t=this._compare){return this.space_list.filter(i=>t(i))}async loadSpace(t){let i=await Nu(t),e=new Ve(m(l({},i),{level:this._org.levelWithID([...i.zones])}));p.updateSpaceList([e])}find(t){return this._spaces_by_id().get(t)||this._spaces_by_email().get(t)}async loadSpaces(){let i=(await Cu({zone_id:this._org.organisation.id,limit:5e3})).data.map(e=>new Ve(m(l({},e),{level:this._org.levelWithID([...e.zones])})));this._all_spaces.set(i),p.updateSpaceList(this.space_list),this._initialised.set(!0)}static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵprov=N({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();export{st as a,mt as i,Ot as n,f as r,Dt as t};