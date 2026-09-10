import{$a as gt,$r as Vr,$t as Ji,Aa as eE,Ao as kr,Ar as Ts,Bc as z_,Ci as Xt,Cs as qo,Da as e0,Ds as re,Dt as HR,E as Bm,Ec as xt,Et as HL,Fa as er,Fc as yse,Fi as Ze$1,Fr as UL,Ft as Hr,Ha as fU,Hc as zo,Hr as Un,Hs as tE,I as Cg,Ic as z$1,Io as lE,J as E,Jo as mt,K as Dse,Kn as Pe,Ko as mr,Kt as JD,Li as Zr,Ls as sf,Mc as ye,Ms as rx,O as Br,Oi as YR,P as Cc,Pc as yr,Qr as Vi,Rr as Ue$1,S as BL,Sc as xf,So as k,St as H,Tn as Mf,U as DI,Ui as _c,Uo as ly,Ut as It,Va as fI,Vo as lt,W as DO,Wr as Ur,Ws as tae,Xs as ts,Yn as Pr,Yr as VL,Z as EE,Za as gr,_n as Le,_t as Ge$1,aa as ax,an as KL,bc as xe,cr as Rc,d as AP,dn as Ko,ds as pI,et as Ee,fa as bre,fc as wa,fi as Wo,fr as Rt,h as Ae,ha as cE,ia as at,jr as Tt,js as rt,ko as kn,ks as ro,l as AE,lt as Fr,ms as po,mt as GR,na as an,nn as Jt,nr as Qt,ns as nr,os as or,pa as c4,pc as wse,pi as X,pn as L,q as Dt$1,qa as gE,ri as W,rn as K,rr as Qy,s as A,sc as ve,ss as p,ta as ag,ti as Vse,ut as Fs,v as B,vn as M,vr as Ss,w as Be,wa as dU,wc as xr,xo as jr,xt as Gt,ya as ce,yi as Xd,yr as Sse,za as f4,zi as Zy,zs as t0}from"./chunk-Bglc0UDD.js";import{_ as qr,a as Ci$1,c as Mi$1,m as Wn,o as Cn}from"./main.js";var ai=[`panel`];var oi=[`*`];function ci(n,r){if(n&1&&(Fr(0,`div`,1,0),or(2),Vr()),n&2){let t=r.id,i=Br();Bm(i._classList),Ze$1(`mat-mdc-autocomplete-visible`,i.showPanel)(`mat-mdc-autocomplete-hidden`,!i.showPanel)(`mat-autocomplete-panel-animations-enabled`,!i._animationsDisabled)(`mat-primary`,i._color===`primary`)(`mat-accent`,i._color===`accent`)(`mat-warn`,i._color===`warn`),Ur(`id`,i.id),xt(`aria-label`,i.ariaLabel||null)(`aria-labelledby`,i._getPanelAriaLabelledby(t))}}var Dt=class{source;option;constructor(r,t){this.source=r,this.option=t}};var qe=new E(`mat-autocomplete-default-options`,{providedIn:`root`,factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})});var Ge=(()=>{class n{_changeDetectorRef=p(Jt);_elementRef=p(K);_defaults=p(qe);_animationsDisabled=mr();_activeOptionChanges=z$1.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(t){this._color=t,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new W;opened=new W;closed=new W;optionActivated=new W;set classList(t){this._classList=t,this._elementRef.nativeElement.className=``}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let t of this.options)t._changeDetectorRef.markForCheck()}id=p(an).getId(`mat-autocomplete-`);inertGroups;constructor(){let t=p(ye);this.inertGroups=t?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new eE(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(t=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[t]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(t){this.panel&&(this.panel.nativeElement.scrollTop=t)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(t){let i=new Dt(this,t);this.optionSelected.emit(i)}_getPanelAriaLabelledby(t){if(this.ariaLabel)return null;let i=t?t+` `:``;return this.ariaLabelledby?i+this.ariaLabelledby:t}_skipPredicate(){return!1}static ɵfac=function(i){return new(i||n)};static ɵcmp=Ae({type:n,selectors:[[`mat-autocomplete`]],contentQueries:function(i,e,a){if(i&1&&fI(a,GR,5)(a,fU,5),i&2){let o;zo(o=qo())&&(e.options=o),zo(o=qo())&&(e.optionGroups=o)}},viewQuery:function(i,e){if(i&1&&Vi(Dt$1,7)(ai,5),i&2){let a;zo(a=qo())&&(e.template=a.first),zo(a=qo())&&(e.panel=a.first)}},hostAttrs:[1,`mat-mdc-autocomplete`],inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],displayWith:`displayWith`,autoActiveFirstOption:[2,`autoActiveFirstOption`,`autoActiveFirstOption`,Ge$1],autoSelectActiveOption:[2,`autoSelectActiveOption`,`autoSelectActiveOption`,Ge$1],requireSelection:[2,`requireSelection`,`requireSelection`,Ge$1],panelWidth:`panelWidth`,disableRipple:[2,`disableRipple`,`disableRipple`,Ge$1],classList:[0,`class`,`classList`],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,Ge$1]},outputs:{optionSelected:`optionSelected`,opened:`opened`,closed:`closed`,optionActivated:`optionActivated`},exportAs:[`matAutocomplete`],features:[gt([{provide:dU,useExisting:n}])],ngContentSelectors:oi,decls:1,vars:0,consts:[[`panel`,``],[`role`,`listbox`,1,`mat-mdc-autocomplete-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`id`]],template:function(i,e){i&1&&(Hr(),JD(0,ci,3,17,`ng-template`))},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--%NS%mat-autocomplete-container-shape, var(--%NS%mat-sys-corner-extra-small));
  box-shadow: var(--%NS%mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--%NS%mat-autocomplete-background-color, var(--%NS%mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2})}return n})();var ri={provide:ts,useExisting:rt(()=>z),multi:!0};var si=new E(`mat-autocomplete-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=p(k);return()=>gE(n)}});var z=(()=>{class n{_environmentInjector=p(Pe);_element=p(K);_injector=p(k);_viewContainerRef=p(It);_zone=p(B);_changeDetectorRef=p(Jt);_dir=p(gr,{optional:!0});_formField=p(Ci$1,{optional:!0,host:!0});_viewportRuler=p(Ts);_scrollStrategy=p(si);_renderer=p(xe);_animationsDisabled=mr();_defaults=p(qe,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new A;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=z$1.EMPTY;_breakpointObserver=p(z_);_handsetLandscapeSubscription=z$1.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new A;_overlayPanelClass=Ji(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position=`auto`;connectedTo;autocompleteAttribute=`off`;autocompleteDisabled=!1;_aboveClass=`mat-mdc-autocomplete-panel-above`;ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen(`window`,`blur`,this._windowBlurHandler)}ngOnChanges(t){t.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Mf(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Ue$1(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Ue$1(()=>this._overlayAttached)):Un()).pipe(Le(t=>t instanceof AE?t:null))}optionSelections=Fs(()=>{let t=this.autocomplete?this.autocomplete.options:null;return t?t.changes.pipe(yr(t),ly(()=>Mf(...t.map(i=>i.onSelectionChange)))):this._initialized.pipe(ly(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new M(t=>{let i=a=>{let o=lt(a),s=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,j=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&o!==this._element.nativeElement&&!this._hasFocus()&&(!s||!s.contains(o))&&(!j||!j.contains(o))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(o)&&t.next(a)},e=[this._renderer.listen(`document`,`click`,i),this._renderer.listen(`document`,`auxclick`,i),this._renderer.listen(`document`,`touchend`,i)];return()=>{e.forEach(a=>a())}})}writeValue(t){Promise.resolve(null).then(()=>this._assignOptionValue(t))}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this._element.nativeElement.disabled=t}_handleKeydown(t){let i=t,e=i.keyCode,a=kn(i);if(e===27&&!a&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&e===13&&this.panelOpen&&!a)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let o=this.autocomplete._keyManager.activeItem,s=e===38||e===40;e===9||s&&!a&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):s&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(s||this.autocomplete._keyManager.activeItem!==o)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(t){let i=t.target,e=i.value;if(i.type===`number`&&(e=e==``?null:parseFloat(e)),this._previousValue!==e){if(this._previousValue=e,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(e),!e)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let a=this.autocomplete.options?.find(o=>o.selected);if(a){let o=this._getDisplayValue(a.value);e!==o&&a.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let a=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(a)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return _c()===this._element.nativeElement}_floatLabel(t=!1){this._formField&&this._formField.floatLabel===`auto`&&(t?this._formField._animateAndLockLabel():this._formField.floatLabel=`always`,this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel=`auto`),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){return Mf(new M(e=>{Qt(()=>{e.next()},{injector:this._environmentInjector})}),this.autocomplete.options?.changes.pipe(xf(()=>this._positionStrategy.reapplyLastPosition()),DO(0))??Un()).pipe(ly(()=>this._zone.run(()=>{let e=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),e!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),Be(1)).subscribe(e=>this._setValueAndClose(e))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(t){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(t):t}_assignOptionValue(t){let i=this._getDisplayValue(t);t??this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??``)}_updateNativeInputValue(t){this._formField?this._formField._control.value=t:this._element.nativeElement.value=t,this._previousValue=t}_setValueAndClose(t){let i=this.autocomplete,e=t?t.source:this._pendingAutoselectedOption;e?(this._clearPreviousSelectedOption(e),this._assignOptionValue(e.value),this._onChange(e.value),i._emitSelectEvent(e),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(t,i){this.autocomplete?.options?.forEach(e=>{e!==t&&e.selected&&e.deselect(i)})}_openPanelInternal(t=this._element.nativeElement.value){this._attachOverlay(t),this._floatLabel()}_attachOverlay(t){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new Zr(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=Cc(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(bre.HandsetLandscape).subscribe(a=>{a.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=t,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let e=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this.panelOpen&&e!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=t=>{(t.keyCode===27&&!kn(t)||t.keyCode===38&&kn(t,`altKey`))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??``),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),t.stopPropagation(),t.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let t=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=t.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=t.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new ro({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let t=EE(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation(`inline`);return this._setStrategyPositions(t),this._positionStrategy=t,t}_setStrategyPositions(t){let i=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}],e=this._aboveClass,a=[{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:e},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:e}],o;this.position===`above`?o=a:this.position===`below`?o=i:o=[...i,...a],t.withPositions(o)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let t=this.autocomplete;if(t.autoActiveFirstOption){let i=-1;for(let e=0;e<t.options.length;e++)if(!t.options.get(e).disabled){i=e;break}t._keyManager.setActiveItem(i)}else t._keyManager.setActiveItem(-1)}_canOpen(){let t=this._element.nativeElement;return!t.readOnly&&!t.disabled&&!this.autocompleteDisabled}_scrollToOption(t){let i=this.autocomplete,e=yse(t,i.options,i.optionGroups);if(t===0&&e===1)i._setScrollTop(0);else if(i.panel){let a=i.options.toArray()[t];if(a){let o=a._getHostElement(),s=Sse(o.offsetTop,o.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(s)}}}static ɵfac=function(i){return new(i||n)};static ɵdir=H({type:n,selectors:[[`input`,`matAutocomplete`,``],[`textarea`,`matAutocomplete`,``]],hostAttrs:[1,`mat-mdc-autocomplete-trigger`],hostVars:7,hostBindings:function(i,e){i&1&&Tt(`focusin`,function(){return e._handleFocus()})(`blur`,function(){return e._onTouched()})(`input`,function(o){return e._handleInput(o)})(`keydown`,function(o){return e._handleKeydown(o)})(`click`,function(){return e._handleClick()}),i&2&&xt(`autocomplete`,e.autocompleteAttribute)(`role`,e.autocompleteDisabled?null:`combobox`)(`aria-autocomplete`,e.autocompleteDisabled?null:`list`)(`aria-activedescendant`,e.panelOpen&&e.activeOption?e.activeOption.id:null)(`aria-expanded`,e.autocompleteDisabled?null:e.panelOpen.toString())(`aria-controls`,e.autocompleteDisabled||!e.panelOpen?null:e.autocomplete?.id)(`aria-haspopup`,e.autocompleteDisabled?null:`listbox`)},inputs:{autocomplete:[0,`matAutocomplete`,`autocomplete`],position:[0,`matAutocompletePosition`,`position`],connectedTo:[0,`matAutocompleteConnectedTo`,`connectedTo`],autocompleteAttribute:[0,`autocomplete`,`autocompleteAttribute`],autocompleteDisabled:[2,`matAutocompleteDisabled`,`autocompleteDisabled`,Ge$1]},exportAs:[`matAutocompleteTrigger`],features:[gt([ri]),at]})}return n})();var Ke=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=re({type:n});static ɵinj=X({imports:[Rc,wse,lE,wse,Rt]})}return n})();var pi=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]];var hi=[`*`,`mat-chip-avatar, [matChipAvatar]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function mi(n,r){n&1&&(nr(0,`span`,3),or(1,1),xr())}function ui(n,r){n&1&&(nr(0,`span`,6),or(1,2),xr())}var _i=`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`;var vi=[[[``,`matChipEdit`,``]],[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[``,`matChipEditInput`,``]],`*`,[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]];var gi=[`[matChipEdit]`,`mat-chip-avatar, [matChipAvatar]`,`[matChipEditInput]`,`*`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function fi(n,r){n&1&&Ko(0,`span`,0)}function yi(n,r){n&1&&(nr(0,`span`,1),or(1),xr())}function bi(n,r){n&1&&(nr(0,`span`,3),or(1,1),xr())}function Si(n,r){n&1&&or(0,2)}function wi(n,r){n&1&&Ko(0,`span`,7)}function Ci(n,r){if(n&1&&Pr(0,Si,1,0)(1,wi,1,0,`span`,7),n&2)kr(Br().contentEditInput?0:1)}function Ii(n,r){n&1&&or(0,3)}function Ni(n,r){n&1&&(nr(0,`span`,6),or(1,4),xr())}var $e=[`*`];var ki=`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`;var Ze=new E(`mat-chips-default-options`,{providedIn:`root`,factory:()=>({separatorKeyCodes:[13]})});var Qe=new E(`MatChipAvatar`);var We=new E(`MatChipTrailingIcon`);var Ue=new E(`MatChipEdit`);var Lt=new E(`MatChipRemove`);var Ht=new E(`MatChip`);var Je=(()=>{class n{_elementRef=p(K);_parentChip=p(Ht);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(t){this._disabled=t}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?``:null}constructor(){p(Gt).load(HR),this._elementRef.nativeElement.nodeName===`BUTTON`&&this._elementRef.nativeElement.setAttribute(`type`,`button`)}focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(i){return new(i||n)};static ɵdir=H({type:n,selectors:[[``,`matChipContent`,``]],hostAttrs:[1,`mat-mdc-chip-action`,`mdc-evolution-chip__action`,`mdc-evolution-chip__action--presentational`],hostVars:8,hostBindings:function(i,e){i&2&&(xt(`disabled`,e._getDisabledAttribute())(`aria-disabled`,e.disabled),Ze$1(`mdc-evolution-chip__action--primary`,e._isPrimary)(`mdc-evolution-chip__action--secondary`,!e._isPrimary)(`mdc-evolution-chip__action--trailing`,!e._isPrimary&&!e._isLeading))},inputs:{disabled:[2,`disabled`,`disabled`,Ge$1],tabIndex:[2,`tabIndex`,`tabIndex`,t=>t==null?-1:AP(t)],_allowFocusWhenDisabled:`_allowFocusWhenDisabled`}})}return n})();var zt=(()=>{class n extends Je{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(t){!this.disabled&&this._isPrimary&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static ɵfac=(()=>{let t;return function(e){return(t||(t=mt(n)))(e||n)}})();static ɵdir=H({type:n,selectors:[[``,`matChipAction`,``]],hostVars:3,hostBindings:function(i,e){i&1&&Tt(`click`,function(o){return e._handleClick(o)})(`keydown`,function(o){return e._handleKeydown(o)}),i&2&&(xt(`tabindex`,e._getTabindex()),Ze$1(`mdc-evolution-chip__action--presentational`,!1))},features:[Ee]})}return n})();var ti=(()=>{class n extends zt{_isPrimary=!1;_handleClick(t){this.disabled||(t.stopPropagation(),t.preventDefault(),this._parentChip.remove())}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!this.disabled&&(t.stopPropagation(),t.preventDefault(),this._parentChip.remove())}static ɵfac=(()=>{let t;return function(e){return(t||(t=mt(n)))(e||n)}})();static ɵdir=H({type:n,selectors:[[``,`matChipRemove`,``]],hostAttrs:[`role`,`button`,1,`mat-mdc-chip-remove`,`mat-mdc-chip-trailing-icon`,`mat-focus-indicator`,`mdc-evolution-chip__icon`,`mdc-evolution-chip__icon--trailing`],hostVars:1,hostBindings:function(i,e){i&2&&xt(`aria-hidden`,null)},features:[gt([{provide:Lt,useExisting:n}]),Ee]})}return n})();var Bt=(()=>{class n{_changeDetectorRef=p(Jt);_elementRef=p(K);_tagName=p(c4);_ngZone=p(B);_focusMonitor=p(Xd);_globalRippleOptions=p(sf,{optional:!0});_document=p(L);_onFocus=new A;_onBlur=new A;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=mr();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=p(an).getId(`mat-mdc-chip-`);ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(t){this._value=t}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(t){this._disabled=t}_disabled=!1;removed=new W;destroyed=new W;basicChipAttrName=`mat-basic-chip`;leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=p(Vse);_injector=p(k);constructor(){let t=p(Gt);t.load(HR),t.load(Ss),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:`mat-mdc-chip-ripple`,disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(`.mat-mdc-chip-action-label`),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Mf(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(t){(t.keyCode===8&&!t.repeat||t.keyCode===46)&&(t.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(t){return this._getActions().find(i=>{let e=i._elementRef.nativeElement;return e===t||e.contains(t)})}_getActions(){let t=[];return this.editIcon&&t.push(this.editIcon),this.primaryAction&&t.push(this.primaryAction),this.removeIcon&&t.push(this.removeIcon),t}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(t){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{let i=t!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static ɵfac=function(i){return new(i||n)};static ɵcmp=Ae({type:n,selectors:[[`mat-basic-chip`],[``,`mat-basic-chip`,``],[`mat-chip`],[``,`mat-chip`,``]],contentQueries:function(i,e,a){if(i&1&&fI(a,Qe,5)(a,Ue,5)(a,We,5)(a,Lt,5)(a,Qe,5)(a,We,5)(a,Ue,5)(a,Lt,5),i&2){let o;zo(o=qo())&&(e.leadingIcon=o.first),zo(o=qo())&&(e.editIcon=o.first),zo(o=qo())&&(e.trailingIcon=o.first),zo(o=qo())&&(e.removeIcon=o.first),zo(o=qo())&&(e._allLeadingIcons=o),zo(o=qo())&&(e._allTrailingIcons=o),zo(o=qo())&&(e._allEditIcons=o),zo(o=qo())&&(e._allRemoveIcons=o)}},viewQuery:function(i,e){if(i&1&&Vi(zt,5),i&2){let a;zo(a=qo())&&(e.primaryAction=a.first)}},hostAttrs:[1,`mat-mdc-chip`],hostVars:31,hostBindings:function(i,e){i&1&&Tt(`keydown`,function(o){return e._handleKeydown(o)}),i&2&&(Ur(`id`,e.id),xt(`role`,e.role)(`aria-label`,e.ariaLabel),Bm(`mat-`+(e.color||`primary`)),Ze$1(`mdc-evolution-chip`,!e._isBasicChip)(`mdc-evolution-chip--disabled`,e.disabled)(`mdc-evolution-chip--with-trailing-action`,e._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,e.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,e.leadingIcon)(`mdc-evolution-chip--with-avatar`,e.leadingIcon)(`mat-mdc-chip-with-avatar`,e.leadingIcon)(`mat-mdc-chip-highlighted`,e.highlighted)(`mat-mdc-chip-disabled`,e.disabled)(`mat-mdc-basic-chip`,e._isBasicChip)(`mat-mdc-standard-chip`,!e._isBasicChip)(`mat-mdc-chip-with-trailing-icon`,e._hasTrailingIcon())(`_mat-animation-noopable`,e._animationsDisabled))},inputs:{role:`role`,id:`id`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaDescription:[0,`aria-description`,`ariaDescription`],value:`value`,color:`color`,removable:[2,`removable`,`removable`,Ge$1],highlighted:[2,`highlighted`,`highlighted`,Ge$1],disableRipple:[2,`disableRipple`,`disableRipple`,Ge$1],disabled:[2,`disabled`,`disabled`,Ge$1]},outputs:{removed:`removed`,destroyed:`destroyed`},exportAs:[`matChip`],features:[gt([{provide:Ht,useExisting:n}])],ngContentSelectors:hi,decls:8,vars:2,consts:[[1,`mat-mdc-chip-focus-overlay`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipContent`,``],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`]],template:function(i,e){i&1&&(Hr(pi),Ko(0,`span`,0),nr(1,`span`,1)(2,`span`,2),Pr(3,mi,2,0,`span`,3),nr(4,`span`,4),or(5),Ko(6,`span`,5),xr()()(),Pr(7,ui,2,0,`span`,6)),i&2&&(Xt(3),kr(e.leadingIcon?3:-1),Xt(4),kr(e._hasTrailingIcon()?7:-1))},dependencies:[Je],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})}return n})();var Pt=(()=>{class n{_elementRef=p(K);_document=p(L);initialize(t){this.getNativeElement().focus(),this.setValue(t)}getNativeElement(){return this._elementRef.nativeElement}setValue(t){this.getNativeElement().textContent=t,this._moveCursorToEndOfInput()}getValue(){return this.getNativeElement().textContent||``}_moveCursorToEndOfInput(){let t=this._document.createRange();t.selectNodeContents(this.getNativeElement()),t.collapse(!1);let i=window.getSelection();i.removeAllRanges(),i.addRange(t)}static ɵfac=function(i){return new(i||n)};static ɵdir=H({type:n,selectors:[[`span`,`matChipEditInput`,``]],hostAttrs:[`role`,`textbox`,`tabindex`,`-1`,`contenteditable`,`true`,1,`mat-chip-edit-input`]})}return n})();var jt=(()=>{class n extends Bt{basicChipAttrName=`mat-basic-chip-row`;_renderer=p(xe);_cleanupMousedown;_editStartPending=!1;editable=!1;edited=new W;defaultEditInput;contentEditInput;_alreadyFocused=!1;_isEditing=!1;constructor(){super(),this.role=`row`,this._onBlur.pipe(po(this.destroyed)).subscribe(()=>{this._isEditing&&!this._editStartPending&&this._onEditFinish(),this._alreadyFocused=!1})}ngAfterViewInit(){super.ngAfterViewInit(),this._cleanupMousedown=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`mousedown`,()=>{this._alreadyFocused=this._hasFocus()}))}ngOnDestroy(){super.ngOnDestroy(),this._cleanupMousedown?.()}_hasLeadingActionIcon(){return!this._isEditing&&!!this.editIcon}_hasTrailingIcon(){return!this._isEditing&&super._hasTrailingIcon()}_handleFocus(){!this._isEditing&&!this.disabled&&this.focus()}_handleKeydown(t){t.keyCode===13&&!this.disabled?this._isEditing?(t.preventDefault(),this._onEditFinish()):this.editable&&this._startEditing(t):this._isEditing?t.stopPropagation():super._handleKeydown(t)}_handleClick(t){!this.disabled&&this.editable&&!this._isEditing&&this._alreadyFocused&&(t.preventDefault(),t.stopPropagation(),this._startEditing(t))}_handleDoubleclick(t){!this.disabled&&this.editable&&this._startEditing(t)}_edit(){this._changeDetectorRef.markForCheck(),this._startEditing()}_startEditing(t){if(!this.primaryAction||this.removeIcon&&t&&this._getSourceAction(t.target)===this.removeIcon)return;let i=this.value;this._isEditing=this._editStartPending=!0,Qt(()=>{this._getEditInput().initialize(i),setTimeout(()=>this._ngZone.run(()=>this._editStartPending=!1))},{injector:this._injector})}_onEditFinish(){this._isEditing=this._editStartPending=!1,this.edited.emit({chip:this,value:this._getEditInput().getValue()}),(this._document.activeElement===this._getEditInput().getNativeElement()||this._document.activeElement===this._document.body)&&this.primaryAction.focus()}_isRippleDisabled(){return super._isRippleDisabled()||this._isEditing}_getEditInput(){return this.contentEditInput||this.defaultEditInput}static ɵfac=function(i){return new(i||n)};static ɵcmp=Ae({type:n,selectors:[[`mat-chip-row`],[``,`mat-chip-row`,``],[`mat-basic-chip-row`],[``,`mat-basic-chip-row`,``]],contentQueries:function(i,e,a){if(i&1&&fI(a,Pt,5),i&2){let o;zo(o=qo())&&(e.contentEditInput=o.first)}},viewQuery:function(i,e){if(i&1&&Vi(Pt,5),i&2){let a;zo(a=qo())&&(e.defaultEditInput=a.first)}},hostAttrs:[1,`mat-mdc-chip`,`mat-mdc-chip-row`,`mdc-evolution-chip`],hostVars:29,hostBindings:function(i,e){i&1&&Tt(`focus`,function(){return e._handleFocus()})(`click`,function(o){return e._hasInteractiveActions()?e._handleClick(o):null})(`dblclick`,function(o){return e._handleDoubleclick(o)}),i&2&&(Ur(`id`,e.id),xt(`tabindex`,e.disabled?null:-1)(`aria-label`,null)(`aria-description`,null)(`role`,e.role),Ze$1(`mat-mdc-chip-with-avatar`,e.leadingIcon)(`mat-mdc-chip-disabled`,e.disabled)(`mat-mdc-chip-editing`,e._isEditing)(`mat-mdc-chip-editable`,e.editable)(`mdc-evolution-chip--disabled`,e.disabled)(`mdc-evolution-chip--with-leading-action`,e._hasLeadingActionIcon())(`mdc-evolution-chip--with-trailing-action`,e._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,e.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,e.leadingIcon)(`mdc-evolution-chip--with-avatar`,e.leadingIcon)(`mat-mdc-chip-highlighted`,e.highlighted)(`mat-mdc-chip-with-trailing-icon`,e._hasTrailingIcon()))},inputs:{editable:`editable`},outputs:{edited:`edited`},features:[gt([{provide:Bt,useExisting:n},{provide:Ht,useExisting:n}]),Ee],ngContentSelectors:gi,decls:9,vars:8,consts:[[1,`mat-mdc-chip-focus-overlay`],[`role`,`gridcell`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--leading`],[`role`,`gridcell`,`matChipAction`,``,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`,3,`disabled`],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[`aria-hidden`,`true`,1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[`role`,`gridcell`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`],[`matChipEditInput`,``]],template:function(i,e){i&1&&(Hr(vi),Pr(0,fi,1,0,`span`,0),Pr(1,yi,2,0,`span`,1),nr(2,`span`,2),Pr(3,bi,2,0,`span`,3),nr(4,`span`,4),Pr(5,Ci,2,1)(6,Ii,1,0),Ko(7,`span`,5),xr()(),Pr(8,Ni,2,0,`span`,6)),i&2&&(kr(e._isEditing?-1:0),Xt(),kr(e._hasLeadingActionIcon()?1:-1),Xt(),Wo(`disabled`,e.disabled),xt(`aria-description`,e.ariaDescription)(`aria-label`,e.ariaLabel),Xt(),kr(e.leadingIcon?3:-1),Xt(2),kr(e._isEditing?5:6),Xt(3),kr(e._hasTrailingIcon()?8:-1))},dependencies:[zt,Pt],styles:[_i],encapsulation:2})}return n})();var xi=(()=>{class n{_elementRef=p(K);_changeDetectorRef=p(Jt);_dir=p(gr,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new A;_defaultRole=`presentation`;get chipFocusChanges(){return this._getChipStream(t=>t._onFocus)}get chipDestroyedChanges(){return this._getChipStream(t=>t.destroyed)}get chipRemovedChanges(){return this._getChipStream(t=>t.removed)}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(t){this._explicitRole=t}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new er;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(t=>t._hasFocus())}_syncChipsState(){this._chips?.forEach(t=>{t._chipListDisabled=this._disabled,t._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(t){this._originatesFromChip(t)&&this._keyManager.onKeydown(t)}_isValidIndex(t){return t>=0&&t<this._chips.length}_allowFocusEscape(){let t=this._elementRef.nativeElement.tabIndex;t!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=t))}_getChipStream(t){return this._chips.changes.pipe(yr(null),ly(()=>Mf(...this._chips.map(t))))}_originatesFromChip(t){let i=t.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains(`mat-mdc-chip`))return!0;i=i.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(yr(this._chips)).subscribe(t=>{let i=[];t.forEach(e=>e._getActions().forEach(a=>i.push(a))),this._chipActions.reset(i),this._chipActions.notifyOnChanges()}),this._keyManager=new tE(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:`ltr`).withHomeAndEnd().skipPredicate(t=>this._skipPredicate(t)),this.chipFocusChanges.pipe(po(this._destroyed)).subscribe(({chip:t})=>{let i=t._getSourceAction(document.activeElement);i&&this._keyManager.updateActiveItem(i)}),this._dir?.change.pipe(po(this._destroyed)).subscribe(t=>this._keyManager.withHorizontalOrientation(t))}_skipPredicate(t){return t.disabled}_trackChipSetChanges(){this._chips.changes.pipe(yr(null),po(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(po(this._destroyed)).subscribe(t=>{let e=this._chips.toArray().indexOf(t.chip),a=t.chip._hasFocus(),o=t.chip._hadFocusOnRemove&&this._keyManager.activeItem&&t.chip._getActions().includes(this._keyManager.activeItem),s=a||o;this._isValidIndex(e)&&s&&(this._lastDestroyedFocusedChipIndex=e)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let t=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),i=this._chips.toArray()[t];i.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():i.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static ɵfac=function(i){return new(i||n)};static ɵcmp=Ae({type:n,selectors:[[`mat-chip-set`]],contentQueries:function(i,e,a){if(i&1&&fI(a,Bt,5),i&2){let o;zo(o=qo())&&(e._chips=o)}},hostAttrs:[1,`mat-mdc-chip-set`,`mdc-evolution-chip-set`],hostVars:1,hostBindings:function(i,e){i&1&&Tt(`keydown`,function(o){return e._handleKeydown(o)}),i&2&&xt(`role`,e.role)},inputs:{disabled:[2,`disabled`,`disabled`,Ge$1],role:`role`,tabIndex:[2,`tabIndex`,`tabIndex`,t=>t==null?0:AP(t)]},ngContentSelectors:$e,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(i,e){i&1&&(Hr(),Fr(0,`div`,0),or(1),Vr())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})}return n})();var Vt=class{source;value;constructor(r,t){this.source=r,this.value=t}};var ei=(()=>{class n extends xi{ngControl=p(jr,{optional:!0,self:!0});controlType=`mat-chip-grid`;_chipInput;_defaultRole=`grid`;_errorStateTracker;_uid=p(an).getId(`mat-chip-grid-`);_ariaDescribedbyIds=[];_onTouched=()=>{};_onChange=()=>{};get disabled(){return this.ngControl?!!this.ngControl.disabled:this._disabled}set disabled(t){this._disabled=t,this._syncChipsState(),this.stateChanges.next()}get id(){return this._chipInput?this._chipInput.id:this._uid}get empty(){return(!this._chipInput||this._chipInput.empty)&&(!this._chips||this._chips.length===0)}get placeholder(){return this._chipInput?this._chipInput.placeholder:this._placeholder}set placeholder(t){this._placeholder=t,this.stateChanges.next()}_placeholder=``;get focused(){return this._chipInput?.focused||this._hasFocusedChip()}get required(){return this._required??this.ngControl?.control?.hasValidator(Cg.required)??!1}set required(t){this._required=t,this.stateChanges.next()}_required;get shouldLabelFloat(){return!this.empty||this.focused}get value(){return this._value}set value(t){this._value=t}_value=[];get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}get chipBlurChanges(){return this._getChipStream(t=>t._onBlur)}change=new W;valueChange=new W;_chips=void 0;stateChanges=new A;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}constructor(){super();let t=p(rx,{optional:!0}),i=p(ax,{optional:!0}),e=p(Dse),a=p(Wn,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._errorStateTracker=new YR(e,a||this.ngControl,i,t,this.stateChanges)}ngAfterContentInit(){this.chipBlurChanges.pipe(po(this._destroyed)).subscribe(()=>{this._blur(),this.stateChanges.next()}),Mf(this.chipFocusChanges,this._chips.changes).pipe(po(this._destroyed)).subscribe(()=>this.stateChanges.next())}ngDoCheck(){this.ngControl&&this.updateErrorState()}ngOnDestroy(){super.ngOnDestroy(),this.stateChanges.complete()}registerInput(t){this._chipInput=t,this._chipInput.setDescribedByIds(this._ariaDescribedbyIds),this._elementRef.nativeElement.removeAttribute(`aria-describedby`)}onContainerClick(t){!this.disabled&&!this._originatesFromChip(t)&&this.focus()}focus(){if(!(this.disabled||this._chipInput?.focused)){if(!this._chips.length||this._chips.first.disabled){if(!this._chipInput)return;Promise.resolve().then(()=>this._chipInput.focus())}else{let t=this._keyManager.activeItem;t?t.focus():this._keyManager.setFirstItemActive()}this.stateChanges.next()}}get describedByIds(){if(this._chipInput)return this._chipInput.describedByIds||[];let t=this._elementRef.nativeElement.getAttribute(`aria-describedby`);return t?t.split(` `):[]}setDescribedByIds(t){this._ariaDescribedbyIds=t,this._chipInput?this._chipInput.setDescribedByIds(t):t.length?this._elementRef.nativeElement.setAttribute(`aria-describedby`,t.join(` `)):this._elementRef.nativeElement.removeAttribute(`aria-describedby`)}writeValue(t){this._value=t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this.stateChanges.next()}updateErrorState(){this._errorStateTracker.updateErrorState()}_blur(){this.disabled||setTimeout(()=>{this.focused||(this._propagateChanges(),this._markAsTouched())})}_allowFocusEscape(){this._chipInput?.focused||super._allowFocusEscape()}_handleKeydown(t){let i=t.keyCode,e=this._keyManager.activeItem;if(i===9)this._chipInput?.focused&&kn(t,`shiftKey`)&&this._chips.length&&!this._chips.last.disabled?(t.preventDefault(),e?this._keyManager.setActiveItem(e):this._focusLastChip()):super._allowFocusEscape();else if(!this._chipInput?.focused)if((i===38||i===40)&&e){let a=this._chipActions.filter(j=>j._isPrimary===e._isPrimary&&!this._skipPredicate(j)),o=a.indexOf(e),s=t.keyCode===38?-1:1;t.preventDefault(),o>-1&&this._isValidIndex(o+s)&&this._keyManager.setActiveItem(a[o+s])}else super._handleKeydown(t);this.stateChanges.next()}_redirectDestroyedChipFocus(){this._lastDestroyedFocusedChipIndex!==null&&(super._redirectDestroyedChipFocus(),(!this._chips.length||this._chips.length===1&&this._chips.first.disabled)&&this._keyManager.updateActiveItem(-1))}_focusLastChip(){this._chips.length&&this._chips.last.focus()}_propagateChanges(){let t=this._chips.length?this._chips.toArray().map(i=>i.value):[];this._value=t,this.change.emit(new Vt(this,t)),this.valueChange.emit(t),this._onChange(t),this._changeDetectorRef.markForCheck()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next()}static ɵfac=function(i){return new(i||n)};static ɵcmp=Ae({type:n,selectors:[[`mat-chip-grid`]],contentQueries:function(i,e,a){if(i&1&&fI(a,jt,5),i&2){let o;zo(o=qo())&&(e._chips=o)}},hostAttrs:[1,`mat-mdc-chip-set`,`mat-mdc-chip-grid`,`mdc-evolution-chip-set`],hostVars:10,hostBindings:function(i,e){i&1&&Tt(`focus`,function(){return e.focus()})(`blur`,function(){return e._blur()}),i&2&&(xt(`role`,e.role)(`tabindex`,e.disabled||e._chips&&e._chips.length===0?-1:e.tabIndex)(`aria-disabled`,e.disabled.toString())(`aria-invalid`,e.errorState),Ze$1(`mat-mdc-chip-list-disabled`,e.disabled)(`mat-mdc-chip-list-invalid`,e.errorState)(`mat-mdc-chip-list-required`,e.required))},inputs:{disabled:[2,`disabled`,`disabled`,Ge$1],placeholder:`placeholder`,required:[2,`required`,`required`,Ge$1],value:`value`,errorStateMatcher:`errorStateMatcher`},outputs:{change:`change`,valueChange:`valueChange`},features:[gt([{provide:Mi$1,useExisting:n}]),Ee],ngContentSelectors:$e,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(i,e){i&1&&(Hr(),Fr(0,`div`,0),or(1),Vr())},styles:[ki],encapsulation:2})}return n})();var ii=(()=>{class n{_elementRef=p(K);focused=!1;get chipGrid(){return this._chipGrid}set chipGrid(t){t&&(this._chipGrid=t,this._chipGrid.registerInput(this))}_chipGrid;addOnBlur=!1;separatorKeyCodes;chipEnd=new W;placeholder=``;id=p(an).getId(`mat-mdc-chip-list-input-`);get disabled(){return this._disabled||this._chipGrid&&this._chipGrid.disabled}set disabled(t){this._disabled=t}_disabled=!1;readonly=!1;disabledInteractive;get empty(){return!this.inputElement.value}inputElement;constructor(){let t=p(Ze),i=p(Ci$1,{optional:!0});this.inputElement=this._elementRef.nativeElement,this.separatorKeyCodes=t.separatorKeyCodes,this.disabledInteractive=t.inputDisabledInteractive??!1,i&&this.inputElement.classList.add(`mat-mdc-form-field-input-control`)}ngOnChanges(){this._chipGrid.stateChanges.next()}ngOnDestroy(){this.chipEnd.complete()}_keydown(t){this.empty&&t.keyCode===8?(t.repeat||this._chipGrid._focusLastChip(),t.preventDefault()):this._emitChipEnd(t)}_blur(){this.addOnBlur&&this._emitChipEnd(),this.focused=!1,this._chipGrid.focused||this._chipGrid._blur(),this._chipGrid.stateChanges.next()}_focus(){this.focused=!0,this._chipGrid.stateChanges.next()}_emitChipEnd(t){(!t||this._isSeparatorKey(t)&&!t.repeat)&&(this.chipEnd.emit({input:this.inputElement,value:this.inputElement.value,chipInput:this}),t?.preventDefault())}_onInput(){this._chipGrid.stateChanges.next()}focus(){this.inputElement.focus()}clear(){this.inputElement.value=``}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(t){let i=this._elementRef.nativeElement;t.length?i.setAttribute(`aria-describedby`,t.join(` `)):i.removeAttribute(`aria-describedby`)}_isSeparatorKey(t){if(!this.separatorKeyCodes)return!1;for(let i of this.separatorKeyCodes){let e,a;typeof i==`number`?(e=i,a=null):(e=i.keyCode,a=i.modifiers);let o=a?.length?kn(t,...a):!kn(t);if(e===t.keyCode&&o)return!0}return!1}_getReadonlyAttribute(){return this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(i){return new(i||n)};static ɵdir=H({type:n,selectors:[[`input`,`matChipInputFor`,``]],hostAttrs:[1,`mat-mdc-chip-input`,`mat-mdc-input-element`,`mdc-text-field__input`,`mat-input-element`],hostVars:8,hostBindings:function(i,e){i&1&&Tt(`keydown`,function(o){return e._keydown(o)})(`blur`,function(){return e._blur()})(`focus`,function(){return e._focus()})(`input`,function(){return e._onInput()}),i&2&&(Ur(`id`,e.id),xt(`disabled`,e.disabled&&!e.disabledInteractive?``:null)(`placeholder`,e.placeholder||null)(`aria-invalid`,e._chipGrid&&e._chipGrid.ngControl?e._chipGrid.ngControl.invalid:null)(`aria-required`,e._chipGrid&&e._chipGrid.required||null)(`aria-disabled`,e.disabled&&e.disabledInteractive?`true`:null)(`readonly`,e._getReadonlyAttribute())(`required`,e._chipGrid&&e._chipGrid.required||null))},inputs:{chipGrid:[0,`matChipInputFor`,`chipGrid`],addOnBlur:[2,`matChipInputAddOnBlur`,`addOnBlur`,Ge$1],separatorKeyCodes:[0,`matChipInputSeparatorKeyCodes`,`separatorKeyCodes`],placeholder:`placeholder`,id:`id`,disabled:[2,`disabled`,`disabled`,Ge$1],readonly:[2,`readonly`,`readonly`,Ge$1],disabledInteractive:[2,`matChipInputDisabledInteractive`,`disabledInteractive`,Ge$1]},outputs:{chipEnd:`matChipInputTokenEnd`},exportAs:[`matChipInput`,`matChipInputFor`],features:[at]})}return n})();var ni=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=re({type:n});static ɵinj=X({providers:[Dse,{provide:Ze,useValue:{separatorKeyCodes:[13]}}],imports:[cE,Rt]})}return n})();var Ei=[`search_field`];function Mi(n,r){if(n&1){let t=KL();nr(0,`mat-chip-row`,8),Tt(`removed`,function(){let e=Zy(t),a=e.$implicit,o=e.$index;return Qy(Br().remove(a,o))}),nr(1,`span`,9),wa(2),xr(),nr(3,`button`,10)(4,`icon`),wa(5,`cancel`),xr()()()}if(n&2){let t=r.$implicit;Xt(2),DI(t),Xt(),xt(`aria-label`,`Remove `+t)}}function Oi(n,r){if(n&1&&(nr(0,`mat-option`,7),wa(1),xr()),n&2){let t=r.$implicit;Wo(`value`,t),Xt(),DI(t)}}function Fi(n,r){if(!n)return;let t=r.input,i=_t(n.value||[]),e=`${r.value||``}`.split(`,`).map(a=>a.trim()).filter(a=>!!a);for(let a of e)i.includes(a)||i.push(a);n.setValue(i),t&&(t.value=``)}function Di(n,r,t){if(!n)return;let i=[...n.value||[]],e=t??i.indexOf(r);e>=0&&e<i.length&&(i.splice(e,1),n.setValue(i))}function _t(n){return[...new Set(n)]}var qn=(()=>{class n{constructor(){this.separators=ag([13,188]),this.placeholder=ag(``),this.options=ag([]),this.value=ce([]),this.search=ce(``),this.panel_open=ce(!1),this._search_field=f4(`search_field`),this._autocomplete=f4(z),this.matching_options=ve(()=>{let t=this.search().trim().toLowerCase(),i=new Set(this.value().map(e=>`${e}`.toLowerCase()));return _t(this.options()).filter(e=>{let a=`${e}`.toLowerCase();return!i.has(a)&&(!t||a.includes(t))})}),this.add=t=>{this._autocomplete()?.activeOption||(Fi({value:this.value(),setValue:i=>this.setValue(i)},t),this._clearSearch())},this.remove=(t,i)=>Di({value:this.value(),setValue:e=>this.setValue(e)},t,i)}addSuggestion(t){this.setValue([...this.value(),t]),this._clearSearch()}setValue(t){let i=_t(t||[]);this.value.set(i),this._onChange&&this._onChange(i)}writeValue(t){this.value.set(_t(t||[]))}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouch=t}_clearSearch(){this.search.set(``);let t=this._search_field();t&&(t.nativeElement.value=``)}static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=Ae({type:n,selectors:[[`item-list-field`]],viewQuery:function(i,e){i&1&&pI(e._search_field,Ei,5)(e._autocomplete,z,5),i&2&&e0(2)},inputs:{separators:[1,`separators`],placeholder:[1,`placeholder`],options:[1,`options`]},features:[gt([{provide:ts,useExisting:rt(()=>n),multi:!0}])],decls:11,vars:5,consts:[[`chipList`,``],[`search_field`,``],[`auto`,`matAutocomplete`],[`appearance`,`outline`,1,`w-full`],[`aria-label`,`Zone Tags`],[3,`input`,`matChipInputTokenEnd`,`placeholder`,`matAutocomplete`,`matChipInputFor`,`matChipInputSeparatorKeyCodes`,`matChipInputAddOnBlur`],[3,`opened`,`closed`,`optionSelected`],[3,`value`],[3,`removed`],[1,`max-w-md`,`truncate`],[`matChipRemove`,``]],template:function(i,e){if(i&1){let a=KL();nr(0,`mat-form-field`,3)(1,`mat-chip-grid`,4,0),BL(3,Mi,6,2,`mat-chip-row`,null,VL),xr(),nr(5,`input`,5,1),Tt(`input`,function(){Zy(a);let s=t0(6);return Qy(e.search.set(s.value))})(`matChipInputTokenEnd`,function(s){return e.add(s)}),xr()(),nr(7,`mat-autocomplete`,6,2),Tt(`opened`,function(){return e.panel_open.set(!0)})(`closed`,function(){return e.panel_open.set(!1)})(`optionSelected`,function(s){return e.addSuggestion(s.option.value)}),BL(9,Oi,2,2,`mat-option`,7,UL),xr()}if(i&2){let a=t0(2),o=t0(8);Xt(3),HL(e.value()),Xt(2),Wo(`placeholder`,e.placeholder()||`User groups...`)(`matAutocomplete`,o)(`matChipInputFor`,a)(`matChipInputSeparatorKeyCodes`,e.separators())(`matChipInputAddOnBlur`,!e.panel_open()),Xt(4),HL(e.matching_options())}},dependencies:[qr,Cn,ni,ei,ii,ti,jt,Ke,Ge,GR,z,tae],encapsulation:2})}}return n})();export{qn as t};
//# debugId=d235e626-1096-599c-b35e-dd186a70e074
//# sourceMappingURL=chunk-BMymLb4O2.js.map