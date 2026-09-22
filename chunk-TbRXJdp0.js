import{Br as xi,Cr as rt$1,Dr as te,Gt as Vr,Mn as g,Qn as lC,T as ED,Ur as yD,Wr as ye,Wt as Vc,Xr as l,Z as K,Zr as m,cn as _,i as $c,in as Y,j as Fe,jn as fh,kt as Rn,st as Me,t as $D,v as D,zr as xe}from"./chunk-B5hGj_t1.js";import{$i as xi$1,$n as et,An as bs,Br as ma,Ci as so,Ki as wn,Tt as Qf,Zt as WE,er as fB,hr as ip,ia as yR,in as Xf,k as Ft,la as zn,lr as hr,mr as io,rr as fr,vr as jY,y as EB}from"./chunk-DezTSj4g.js";import{n as Me$1}from"./chunk-COHaqUEe.js";function at(n,l){}var $=`_mat-bottom-sheet-enter`;var tt=`_mat-bottom-sheet-exit`;var ot=(()=>{class n extends Xf{_breakpointSubscription;_animationsDisabled=Ft();_animationState=`void`;_animationStateChanged=new Fe;_destroyed=!1;constructor(){super();let t=g(ma);this._breakpointSubscription=t.observe([WE.Medium,WE.Large,WE.XLarge]).subscribe(()=>{let i=this._elementRef.nativeElement.classList;i.toggle(`mat-bottom-sheet-container-medium`,t.isMatched(WE.Medium)),i.toggle(`mat-bottom-sheet-container-large`,t.isMatched(WE.Large)),i.toggle(`mat-bottom-sheet-container-xlarge`,t.isMatched(WE.XLarge))})}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._animationsDisabled&&this._simulateAnimation($))}exit(){this._destroyed||(this._elementRef.nativeElement.setAttribute(`mat-exit`,``),this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._animationsDisabled&&this._simulateAnimation(tt))}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=!0}_simulateAnimation(t){this._ngZone.run(()=>{this._handleAnimationEvent(!0,t,this._elementRef.nativeElement),setTimeout(()=>this._handleAnimationEvent(!1,t,this._elementRef.nativeElement))})}_trapFocus(){super._trapFocus({preventScroll:!0})}_handleAnimationEvent(t,i,e){if(e===this._elementRef.nativeElement){let a=i===$;(a||i===tt)&&this._animationStateChanged.emit({toState:a?`visible`:`hidden`,phase:t?`start`:`done`})}}static ɵfac=function(i){return new(i||n)};static ɵcmp=fh({type:n,selectors:[[`mat-bottom-sheet-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-bottom-sheet-container`],hostVars:9,hostBindings:function(i,e){i&1&&$c(`animationstart`,function(o){return e._handleAnimationEvent(!0,o.animationName,o.target)})(`animationend`,function(o){return e._handleAnimationEvent(!1,o.animationName,o.target)})(`animationcancel`,function(o){return e._handleAnimationEvent(!1,o.animationName,o.target)}),i&2&&(Vc(`role`,e._config.role)(`aria-modal`,e._config.ariaModal)(`aria-label`,e._config.ariaLabel),$D(`mat-bottom-sheet-container-animations-enabled`,!e._animationsDisabled)(`mat-bottom-sheet-container-enter`,e._animationState===`visible`)(`mat-bottom-sheet-container-exit`,e._animationState===`hidden`))},features:[yD],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(i,e){i&1&&ED(0,at,0,0,`ng-template`,0)},dependencies:[hr],styles:[`@keyframes _mat-bottom-sheet-enter {
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
`],encapsulation:2,changeDetection:1})}return n})();var st=new D(`MatBottomSheetData`);var v=class{viewContainerRef;injector;panelClass;direction;data=null;hasBackdrop=!0;backdropClass;disableClose=!1;ariaLabel=null;ariaModal=!1;closeOnNavigation=!0;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;height=``;minHeight;maxHeight;bindings};var f=class{_ref;get instance(){return this._ref.componentInstance}get componentRef(){return this._ref.componentRef}containerInstance;disableClose;_afterOpened=new te;_result;_closeFallbackTimeout;constructor(l,t,i){this._ref=l,this.containerInstance=i,this.disableClose=t.disableClose,i._animationStateChanged.pipe(xe(e=>e.phase===`done`&&e.toState===`visible`),rt$1(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),i._animationStateChanged.pipe(xe(e=>e.phase===`done`&&e.toState===`hidden`),rt$1(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result)}),l.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result)}),lC(this.backdropClick(),this.keydownEvents().pipe(xe(e=>e.keyCode===27))).subscribe(e=>{!this.disableClose&&(e.type!==`keydown`||!zn(e))&&(e.preventDefault(),this.dismiss())})}dismiss(l){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe(xe(t=>t.phase===`start`),rt$1(1)).subscribe(()=>{this._closeFallbackTimeout=setTimeout(()=>this._ref.close(this._result),500),this._ref.overlayRef.detachBackdrop()}),this._result=l,this.containerInstance.exit(),this.containerInstance=null)}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}};var rt=new D(`mat-bottom-sheet-default-options`);var mt=(()=>{class n{_injector=g(ye);_parentBottomSheet=g(n,{optional:!0,skipSelf:!0});_animationsDisabled=Ft();_defaultOptions=g(rt,{optional:!0});_bottomSheetRefAtThisLevel=null;_dialog=g(Qf);get _openedBottomSheetRef(){let t=this._parentBottomSheet;return t?t._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(t){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=t:this._bottomSheetRefAtThisLevel=t}open(t,i){let e=l(l({},this._defaultOptions||new v),i),a;return this._dialog.open(t,m(l({},e),{disableClose:!0,closeOnOverlayDetachments:!1,maxWidth:`100%`,container:ot,scrollStrategy:e.scrollStrategy||bs(this._injector),positionStrategy:fr(this._injector).centerHorizontally().bottom(`0`),disableAnimations:this._animationsDisabled,templateContext:()=>({bottomSheetRef:a}),providers:(o,lt,et)=>(a=new f(o,e,et),[{provide:f,useValue:a},{provide:st,useValue:e.data}])})),a.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===a&&(this._openedBottomSheetRef=null)}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>a.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):a.containerInstance.enter(),this._openedBottomSheetRef=a,a}dismiss(t){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(t)}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss()}static ɵfac=function(i){return new(i||n)};static ɵprov=K({token:n,factory:n.ɵfac})}return n})();var Dt=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Vr({type:n});static ɵinj=Rn({providers:[mt],imports:[yR,xi$1,et]})}return n})();var p;var Ot=(()=>{class n{get space_list(){return this.list()}constructor(){this._org=g(ip),this._settings=g(so),this._all_spaces=Y([]),this._initialised=Y(!1),this.initialised=this._initialised.asReadonly(),this.all_spaces=this._all_spaces.asReadonly(),this.list=Me(()=>this._all_spaces().filter(t=>t.map_id)),this._spaces_by_id=Me(()=>new Map(this.list().map(t=>[t.id,t]))),this._spaces_by_email=Me(()=>new Map(this.list().filter(({email:t})=>!!t).map(t=>[t.email,t]))),this.features=Me(()=>wn(jY(this.list().map(t=>t.features)))),this._compare=t=>t.zones.includes(this._org.building.id),p=new Me$1,p.org||(p.org=this._org),xi(()=>{this._org.initialised()&&this._init()})}_init(){this._settings.get(`app.prevent_space_init`)?this._initialised.set(!0):this.loadSpaces()}filter(t=this._compare){return this.space_list.filter(i=>t(i))}async loadSpace(t){let i=await EB(t),e=new io(m(l({},i),{level:this._org.levelWithID([...i.zones])}));p.updateSpaceList([e])}find(t){return this._spaces_by_id().get(t)||this._spaces_by_email().get(t)}async loadSpaces(){let i=(await fB({zone_id:this._org.organisation.id,limit:5e3})).data.map(e=>new io(m(l({},e),{level:this._org.levelWithID([...e.zones])})));this._all_spaces.set(i),p.updateSpaceList(this.space_list),this._initialised.set(!0)}static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵprov=_({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();export{st as a,mt as i,Ot as n,f as r,Dt as t};
//# debugId=e11f206d-bc0b-5f7a-9c77-ef5ca8173ed0
//# sourceMappingURL=chunk-TbRXJdp0.js.map