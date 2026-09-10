import{Er as vi,Hr as l,Ht as _y,Jn as p$1,Jt as cI,Kt as bc,Ln as me,Lt as Zy,Nt as Z,Q as Pe,Rt as _,Ur as m,V as Lf,an as ee,ct as Re,ft as Sn,ht as Te,j as Ic,m as D,on as et,q as Ny,tt as Q,u as Ar}from"./chunk-DtKoY7OQ.js";import{$t as Ut,Ci as to,Fn as cr,Ft as Qr,Gr as oa,Ht as Rn,Mt as Qe,Oi as vE,R as Gf,at as Ku,en as Vf,jn as c2,jr as lr,jt as QI,nt as K2,vt as Oi,wn as _s,z as Gn,zn as d2}from"./chunk-Cy23QlJB.js";import{n as Me}from"./chunk-Cg_wnWId.js";function at(n,l){}var $=`_mat-bottom-sheet-enter`;var tt=`_mat-bottom-sheet-exit`;var ot=(()=>{class n extends Vf{_breakpointSubscription;_animationsDisabled=Ut();_animationState=`void`;_animationStateChanged=new Pe;_destroyed=!1;constructor(){super();let t=p$1(oa);this._breakpointSubscription=t.observe([vE.Medium,vE.Large,vE.XLarge]).subscribe(()=>{let i=this._elementRef.nativeElement.classList;i.toggle(`mat-bottom-sheet-container-medium`,t.isMatched(vE.Medium)),i.toggle(`mat-bottom-sheet-container-large`,t.isMatched(vE.Large)),i.toggle(`mat-bottom-sheet-container-xlarge`,t.isMatched(vE.XLarge))})}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._animationsDisabled&&this._simulateAnimation($))}exit(){this._destroyed||(this._elementRef.nativeElement.setAttribute(`mat-exit`,``),this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._animationsDisabled&&this._simulateAnimation(tt))}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=!0}_simulateAnimation(t){this._ngZone.run(()=>{this._handleAnimationEvent(!0,t,this._elementRef.nativeElement),setTimeout(()=>this._handleAnimationEvent(!1,t,this._elementRef.nativeElement))})}_trapFocus(){super._trapFocus({preventScroll:!0})}_handleAnimationEvent(t,i,e){if(e===this._elementRef.nativeElement){let a=i===$;(a||i===tt)&&this._animationStateChanged.emit({toState:a?`visible`:`hidden`,phase:t?`start`:`done`})}}static ɵfac=function(i){return new(i||n)};static ɵcmp=Lf({type:n,selectors:[[`mat-bottom-sheet-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-bottom-sheet-container`],hostVars:9,hostBindings:function(i,e){i&1&&bc(`animationstart`,function(o){return e._handleAnimationEvent(!0,o.animationName,o.target)})(`animationend`,function(o){return e._handleAnimationEvent(!1,o.animationName,o.target)})(`animationcancel`,function(o){return e._handleAnimationEvent(!1,o.animationName,o.target)}),i&2&&(Ic(`role`,e._config.role)(`aria-modal`,e._config.ariaModal)(`aria-label`,e._config.ariaLabel),Zy(`mat-bottom-sheet-container-animations-enabled`,!e._animationsDisabled)(`mat-bottom-sheet-container-enter`,e._animationState===`visible`)(`mat-bottom-sheet-container-exit`,e._animationState===`hidden`))},features:[_y],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(i,e){i&1&&Ny(0,at,0,0,`ng-template`,0)},dependencies:[cr],styles:[`@keyframes _mat-bottom-sheet-enter {
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
`],encapsulation:2,changeDetection:1})}return n})();var st=new D(`MatBottomSheetData`);var v=class{viewContainerRef;injector;panelClass;direction;data=null;hasBackdrop=!0;backdropClass;disableClose=!1;ariaLabel=null;ariaModal=!1;closeOnNavigation=!0;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;height=``;minHeight;maxHeight;bindings};var f=class{_ref;get instance(){return this._ref.componentInstance}get componentRef(){return this._ref.componentRef}containerInstance;disableClose;_afterOpened=new ee;_result;_closeFallbackTimeout;constructor(l,t,i){this._ref=l,this.containerInstance=i,this.disableClose=t.disableClose,i._animationStateChanged.pipe(Re(e=>e.phase===`done`&&e.toState===`visible`),et(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),i._animationStateChanged.pipe(Re(e=>e.phase===`done`&&e.toState===`hidden`),et(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result)}),l.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result)}),cI(this.backdropClick(),this.keydownEvents().pipe(Re(e=>e.keyCode===27))).subscribe(e=>{!this.disableClose&&(e.type!==`keydown`||!Gn(e))&&(e.preventDefault(),this.dismiss())})}dismiss(l){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe(Re(t=>t.phase===`start`),et(1)).subscribe(()=>{this._closeFallbackTimeout=setTimeout(()=>this._ref.close(this._result),500),this._ref.overlayRef.detachBackdrop()}),this._result=l,this.containerInstance.exit(),this.containerInstance=null)}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}};var rt=new D(`mat-bottom-sheet-default-options`);var mt=(()=>{class n{_injector=p$1(me);_parentBottomSheet=p$1(n,{optional:!0,skipSelf:!0});_animationsDisabled=Ut();_defaultOptions=p$1(rt,{optional:!0});_bottomSheetRefAtThisLevel=null;_dialog=p$1(Gf);get _openedBottomSheetRef(){let t=this._parentBottomSheet;return t?t._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(t){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=t:this._bottomSheetRefAtThisLevel=t}open(t,i){let e=l(l({},this._defaultOptions||new v),i),a;return this._dialog.open(t,m(l({},e),{disableClose:!0,closeOnOverlayDetachments:!1,maxWidth:`100%`,container:ot,scrollStrategy:e.scrollStrategy||_s(this._injector),positionStrategy:lr(this._injector).centerHorizontally().bottom(`0`),disableAnimations:this._animationsDisabled,templateContext:()=>({bottomSheetRef:a}),providers:(o,lt,et)=>(a=new f(o,e,et),[{provide:f,useValue:a},{provide:st,useValue:e.data}])})),a.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===a&&(this._openedBottomSheetRef=null)}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>a.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):a.containerInstance.enter(),this._openedBottomSheetRef=a,a}dismiss(t){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(t)}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss()}static ɵfac=function(i){return new(i||n)};static ɵprov=Q({token:n,factory:n.ɵfac})}return n})();var Dt=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Ar({type:n});static ɵinj=Sn({providers:[mt],imports:[QI,Oi,Qe]})}return n})();var p;var Ot=(()=>{class n{get space_list(){return this.list()}constructor(){this._org=p$1(Ku),this._settings=p$1(to),this._all_spaces=Z([]),this._initialised=Z(!1),this.initialised=this._initialised.asReadonly(),this.all_spaces=this._all_spaces.asReadonly(),this.list=Te(()=>this._all_spaces().filter(t=>t.map_id)),this._spaces_by_id=Te(()=>new Map(this.list().map(t=>[t.id,t]))),this._spaces_by_email=Te(()=>new Map(this.list().filter(({email:t})=>!!t).map(t=>[t.email,t]))),this.features=Te(()=>Rn(K2(this.list().map(t=>t.features)))),this._compare=t=>t.zones.includes(this._org.building.id),p=new Me,p.org||(p.org=this._org),vi(()=>{this._org.initialised()&&this._init()})}_init(){this._settings.get(`app.prevent_space_init`)?this._initialised.set(!0):this.loadSpaces()}filter(t=this._compare){return this.space_list.filter(i=>t(i))}async loadSpace(t){let i=await d2(t),e=new Qr(m(l({},i),{level:this._org.levelWithID([...i.zones])}));p.updateSpaceList([e])}find(t){return this._spaces_by_id().get(t)||this._spaces_by_email().get(t)}async loadSpaces(){let i=(await c2({zone_id:this._org.organisation.id,limit:5e3})).data.map(e=>new Qr(m(l({},e),{level:this._org.levelWithID([...e.zones])})));this._all_spaces.set(i),p.updateSpaceList(this.space_list),this._initialised.set(!0)}static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵprov=_({token:n,factory:n.ɵfac,providedIn:`root`})}}return n})();export{st as a,mt as i,Ot as n,f as r,Dt as t};
//# debugId=d26bddb4-2df9-5be5-b0b1-d231f7d7c3a2
//# sourceMappingURL=chunk-B0eB6sp-.js.map