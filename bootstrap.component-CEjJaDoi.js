import{$n as qI,B as Km,Br as zm,Cn as iC,Ct as Vv,Dn as jT,Dt as Wb,En as iy,F as Jb,Fn as lT,Fr as ye,Ft as Xy,G as Mp,Gn as oS,Gt as ZT,Hn as n_,In as ld,It as Y,K as N,Kn as oT,Ln as m,Mn as km,Nt as XV,Or as wm,Ot as Wm,P as Ja,Pn as lD,Pt as Xm,Qn as pp,Qt as aC,Rt as YT,Sn as hp,Tn as id,Tr as vw,U as Lr,Un as nr,Ut as ZC,V as Lm,W as Ls,Xt as Zs,Yn as oy,_n as fr,_t as Ub,an as ay,c as Bm,ct as Sp,d as C,dr as sa,dt as T_,en as aS,f as CT,fn as de,fr as sd,ft as Te,gn as fT,hr as tH,ht as UT,in as at,ir as qn,k as Hv,kn as kT,kr as wt,kt as Ws,l as Bo,ln as cy,m as DD,n as $b,nn as ad,nr as qh,o as Ar,on as bi$1,p as Ce,pr as se,pt as Tm,qt as Zi,rn as ae,sn as bm,tn as aT,tr as qb,tt as QT,u as Bv,ur as sT,v as Fm,vr as uT,vt as Um,wt as WT,xn as hn,xt as Vm,z as KV,zr as zb}from"./chunk-CuzAEOo2.js";import{A as Ce$1,G as ja,I as f,J as ri$1,a as V,f as D,h as Te$1,i as U,k as B,l as v,n as C$1,o as be,r as De,s as ce,t as $,v as ki}from"./main.js";import{A as z,m as Pe,p as Mt,s as yt,t as Mt$1,v as Y$1,x as b}from"./chunk-CJ9NKIVz.js";import{_ as pt,d as Vt,g as oi$1,h as lt,l as P,s as He,u as Ve,y as ze}from"./chunk-Bb4pSOlv.js";import{c as Ue,g as wn,s as T,t as Dn,u as Zt$1}from"./chunk-D-j_DYZ4.js";import{a as X,c as w,l as ze$1,n as Ie,o as ce$1,s as le,t as Ce$2}from"./chunk-1QGtBu52.js";import"./chunk-nUc9GpQm.js";import{a as nt,c as zt,i as le$1,o as se$1,r as ce$2,s as wn$1,t as En}from"./chunk-C3UmLNry.js";var ii=[`panel`];var ni=[`*`];function ai(n,p){if(n&1&&(sd(0,`div`,1,0),aT(2),ad()),n&2){let e=p.id,t=oT();CT(t._classList),Xm(`mat-mdc-autocomplete-visible`,t.showPanel)(`mat-mdc-autocomplete-hidden`,!t.showPanel)(`mat-autocomplete-panel-animations-enabled`,!t._animationsDisabled)(`mat-primary`,t._color===`primary`)(`mat-accent`,t._color===`accent`)(`mat-warn`,t._color===`warn`),Vm(`id`,t.id),km(`aria-label`,t.ariaLabel||null)(`aria-labelledby`,t._getPanelAriaLabelledby(e))}}var me=class{source;option;constructor(p,e){this.source=p,this.option=e}};var Yt=new C(`mat-autocomplete-default-options`,{providedIn:`root`,factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})});var Qt=(()=>{class n{_changeDetectorRef=m(T_);_elementRef=m(Lr);_defaults=m(Yt);_animationsDisabled=De();_activeOptionChanges=Y.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new wt;opened=new wt;closed=new wt;optionActivated=new wt;set classList(e){this._classList=e,this._elementRef.nativeElement.className=``}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=m(Y$1).getId(`mat-autocomplete-`);inertGroups;constructor(){let e=m(C$1);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new z(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let t=new me(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return!1}static ɵfac=function(t){return new(t||n)};static ɵcmp=ZC({type:n,selectors:[[`mat-autocomplete`]],contentQueries:function(t,i,a){if(t&1&&zm(a,X,5)(a,ce$1,5),t&2){let r;uT(r=lT())&&(i.options=r),uT(r=lT())&&(i.optionGroups=r)}},viewQuery:function(t,i){if(t&1&&Wm(Ar,7)(ii,5),t&2){let a;uT(a=lT())&&(i.template=a.first),uT(a=lT())&&(i.panel=a.first)}},hostAttrs:[1,`mat-mdc-autocomplete`],inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],displayWith:`displayWith`,autoActiveFirstOption:[2,`autoActiveFirstOption`,`autoActiveFirstOption`,KV],autoSelectActiveOption:[2,`autoSelectActiveOption`,`autoSelectActiveOption`,KV],requireSelection:[2,`requireSelection`,`requireSelection`,KV],panelWidth:`panelWidth`,disableRipple:[2,`disableRipple`,`disableRipple`,KV],classList:[0,`class`,`classList`],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,KV]},outputs:{optionSelected:`optionSelected`,opened:`opened`,closed:`closed`,optionActivated:`optionActivated`},exportAs:[`matAutocomplete`],features:[UT([{provide:le,useExisting:n}])],ngContentSelectors:ni,decls:1,vars:0,consts:[[`panel`,``],[`role`,`listbox`,1,`mat-mdc-autocomplete-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`id`]],template:function(t,i){t&1&&(sT(),Tm(0,ai,3,17,`ng-template`))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2})}return n})();var oi={provide:T,useExisting:Zi(()=>he),multi:!0};var ri=new C(`mat-autocomplete-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=m(ye);return()=>Ve(n)}});var he=(()=>{class n{_environmentInjector=m(de);_element=m(Lr);_injector=m(ye);_viewContainerRef=m(qn);_zone=m(ae);_changeDetectorRef=m(T_);_dir=m(V,{optional:!0});_formField=m(se$1,{optional:!0,host:!0});_viewportRuler=m(P);_scrollStrategy=m(ri);_renderer=m(Ls);_animationsDisabled=De();_defaults=m(Yt,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new se;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=Y.EMPTY;_breakpointObserver=m(U);_handsetLandscapeSubscription=Y.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new se;_overlayPanelClass=v(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position=`auto`;connectedTo;autocompleteAttribute=`off`;autocompleteDisabled=!1;_aboveClass=`mat-mdc-autocomplete-panel-above`;ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen(`window`,`blur`,this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Vv(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(hn(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(hn(()=>this._overlayAttached)):bi$1()).pipe(Ce(e=>e instanceof w?e:null))}optionSelections=Bv(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(Hv(e),Ja(()=>Vv(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Ja(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new N(e=>{let t=a=>{let r=b(a),v=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,_e=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&r!==this._element.nativeElement&&!this._hasFocus()&&(!v||!v.contains(r))&&(!_e||!_e.contains(r))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(r)&&e.next(a)},i=[this._renderer.listen(`document`,`click`,t),this._renderer.listen(`document`,`auxclick`,t),this._renderer.listen(`document`,`touchend`,t)];return()=>{i.forEach(a=>a())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e,i=t.keyCode,a=Pe(t);if(i===27&&!a&&t.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&i===13&&this.panelOpen&&!a)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){let r=this.autocomplete._keyManager.activeItem,v=i===38||i===40;i===9||v&&!a&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):v&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(v||this.autocomplete._keyManager.activeItem!==r)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,i=t.value;if(t.type===`number`&&(i=i==``?null:parseFloat(i)),this._previousValue!==i){if(this._previousValue=i,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(i),!i)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let a=this.autocomplete.options?.find(r=>r.selected);if(a){let r=this._getDisplayValue(a.value);i!==r&&a.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let a=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(a)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return Mt()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel===`auto`&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel=`always`,this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel=`auto`),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){return Vv(new N(i=>{qI(()=>{i.next()},{injector:this._environmentInjector})}),this.autocomplete.options?.changes.pipe(DD(()=>this._positionStrategy.reapplyLastPosition()),lD(0))??bi$1()).pipe(Ja(()=>this._zone.run(()=>{let i=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),i!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),nr(1)).subscribe(i=>this._setValueAndClose(i))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e??this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??``)}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,i=e?e.source:this._pendingAutoselectedOption;i?(this._clearPreviousSelectedOption(i),this._assignOptionValue(i.value),this._onChange(i.value),t._emitSelectEvent(i),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(i=>{i!==e&&i.selected&&i.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){this._attachOverlay(e),this._floatLabel()}_attachOverlay(e){if(!this.autocomplete)return;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new lt(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=He(this._injector,this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(ce.HandsetLandscape).subscribe(a=>{a.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let i=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this.panelOpen&&i!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!Pe(e)||e.keyCode===38&&Pe(e,`altKey`))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??``),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new pt({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=ze(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation(`inline`);return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}],i=this._aboveClass,a=[{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:i},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:i}],r;this.position===`above`?r=a:this.position===`below`?r=t:r=[...t,...a],e.withPositions(r)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let i=0;i<e.options.length;i++)if(!e.options.get(i).disabled){t=i;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let t=this.autocomplete,i=Ce$2(e,t.options,t.optionGroups);if(e===0&&i===1)t._setScrollTop(0);else if(t.panel){let a=t.options.toArray()[e];if(a){let r=a._getHostElement(),v=Ie(r.offsetTop,r.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(v)}}}static ɵfac=function(t){return new(t||n)};static ɵdir=sa({type:n,selectors:[[`input`,`matAutocomplete`,``],[`textarea`,`matAutocomplete`,``]],hostAttrs:[1,`mat-mdc-autocomplete-trigger`],hostVars:7,hostBindings:function(t,i){t&1&&Um(`focusin`,function(){return i._handleFocus()})(`blur`,function(){return i._onTouched()})(`input`,function(r){return i._handleInput(r)})(`keydown`,function(r){return i._handleKeydown(r)})(`click`,function(){return i._handleClick()}),t&2&&km(`autocomplete`,i.autocompleteAttribute)(`role`,i.autocompleteDisabled?null:`combobox`)(`aria-autocomplete`,i.autocompleteDisabled?null:`list`)(`aria-activedescendant`,i.panelOpen&&i.activeOption?i.activeOption.id:null)(`aria-expanded`,i.autocompleteDisabled?null:i.panelOpen.toString())(`aria-controls`,i.autocompleteDisabled||!i.panelOpen?null:i.autocomplete?.id)(`aria-haspopup`,i.autocompleteDisabled?null:`listbox`)},inputs:{autocomplete:[0,`matAutocomplete`,`autocomplete`],position:[0,`matAutocompletePosition`,`position`],connectedTo:[0,`matAutocompleteConnectedTo`,`connectedTo`],autocompleteAttribute:[0,`autocomplete`,`autocompleteAttribute`],autocompleteDisabled:[2,`matAutocompleteDisabled`,`autocompleteDisabled`,KV]},exportAs:[`matAutocompleteTrigger`],features:[UT([oi]),Zs]})}return n})();var Ut=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Bo({type:n});static ɵinj=fr({imports:[oi$1,ze$1,Vt,ze$1,be]})}return n})();var li=[`determinateSpinner`];function ci(n,p){if(n&1&&(Sp(),Ws(0,`svg`,11),Lm(1,`circle`,12),id()),n&2){let e=oT();km(`viewBox`,e._viewBox()),vw(),Km(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),km(`r`,e._circleRadius())}}var di=new C(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:Xt})});var Xt=100;var pi=10;var Zt=(()=>{class n{_elementRef=m(Lr);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=m(di),t=$(),i=this._elementRef.nativeElement;this._noopAnimations=t===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=i.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&t===`reduced-motion`&&i.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Xt;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-pi)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(t){return new(t||n)};static ɵcmp=ZC({type:n,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(t,i){if(t&1&&Wm(li,5),t&2){let a;uT(a=lT())&&(i._determinateCircle=a.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(t,i){t&2&&(km(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,i.mode===`determinate`?i.value:null)(`mode`,i.mode),CT(`mat-`+i.color),Km(`width`,i.diameter,`px`)(`height`,i.diameter,`px`)(`--%NS%mat-progress-spinner-size`,i.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,i.diameter+`px`),Xm(`_mat-animation-noopable`,i._noopAnimations)(`mdc-circular-progress--indeterminate`,i.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,XV],diameter:[2,`diameter`,`diameter`,XV],strokeWidth:[2,`strokeWidth`,`strokeWidth`,XV]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(t,i){if(t&1&&(bm(0,ci,2,8,`ng-template`,null,0,QT),Ws(2,`div`,2,1),Sp(),Ws(4,`svg`,3),Lm(5,`circle`,4),id()(),Mp(),Ws(6,`div`,5)(7,`div`,6)(8,`div`,7),Bm(9,8),id(),Ws(10,`div`,9),Bm(11,8),id(),Ws(12,`div`,10),Bm(13,8),id()()()),t&2){let a=fT(1);vw(4),km(`viewBox`,i._viewBox()),vw(),Km(`stroke-dasharray`,i._strokeCircumference(),`px`)(`stroke-dashoffset`,i._strokeDashOffset(),`px`)(`stroke-width`,i._circleStrokeWidth(),`%`),km(`r`,i._circleRadius()),vw(4),Fm(`ngTemplateOutlet`,a),vw(2),Fm(`ngTemplateOutlet`,a),vw(2),Fm(`ngTemplateOutlet`,a)}},dependencies:[oS],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})}return n})();var $t=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Bo({type:n});static ɵinj=fr({imports:[be]})}return n})();function ui(n,p){n&1&&Lm(0,`mat-spinner`,13),n&2&&Fm(`diameter`,32)}function _i(n,p){if(n&1&&(Ws(0,`div`,19),kT(1),id()),n&2){let e=oT().$implicit;vw(),ld(` `,e.name,` `)}}function fi(n,p){if(n&1&&(Ws(0,`mat-option`,15)(1,`div`,17)(2,`div`,18)(3,`div`),kT(4),id(),Ub(5,_i,2,1,`div`,19),id(),Ws(6,`div`,20),kT(7),id()()()),n&2){let e=p.$implicit;Fm(`value`,e.id),vw(4),ld(` `,e.display_name||e.name,` `),vw(),$b(e.display_name&&e.display_name!==e.name?5:-1),vw(2),ld(` `,e.id,` `)}}function gi(n,p){n&1&&(Ws(0,`mat-option`,16),kT(1),WT(2,`translate`),id()),n&2&&(vw(),ld(` `,ZT(2,1,`COMMON.BOOTSTRAP_INPUT_PLACEHOLDER`),` `))}function vi(n,p){if(n&1){let e=Jb();Ws(0,`main`,5)(1,`label`,10),kT(2),WT(3,`translate`),id(),Ws(4,`mat-form-field`,11)(5,`input`,12),WT(6,`translate`),cy(`ngModelChange`,function(i){pp(e);let a=oT();return jT(a.system_id,i)||(a.system_id=i),hp(i)}),id(),iC(),Ub(7,ui,1,1,`mat-spinner`,13),Ws(8,`mat-hint`,14),kT(9),WT(10,`translate`),id()(),Ws(11,`mat-autocomplete`,null,0),Wb(13,fi,8,4,`mat-option`,15,zb),Ub(15,gi,3,3,`mat-option`,16),id()()}if(n&2){let e=fT(12),t=oT();vw(2),ld(` `,ZT(3,7,`COMMON.BOOTSTRAP_LABEL`),` `),vw(3),ay(`ngModel`,t.system_id),Fm(`matAutocomplete`,e)(`placeholder`,ZT(6,9,`COMMON.BOOTSTRAP_LABEL`)),aC(),vw(2),$b(t.searching()?7:-1),vw(2),ld(` `,ZT(10,11,`COMMON.BOOTSTRAP_ASSISTANT_INFO`),` `),vw(4),qb(t.space_list()),vw(2),$b(t.system_id().length<2&&!t.space_list().length?15:-1)}}function yi(n,p){n&1&&(Ws(0,`main`,6),Lm(1,`mat-spinner`,21),Ws(2,`p`),kT(3),WT(4,`translate`),id()()),n&2&&(vw(),Fm(`diameter`,48),vw(2),oy(ZT(4,2,`COMMON.BOOTSTRAP_LOADING`)))}function bi(n,p){if(n&1){let e=Jb();Ws(0,`footer`,7)(1,`button`,22),Um(`click`,function(){pp(e);return hp(oT().bootstrap())}),kT(2),WT(3,`translate`),id()()}if(n&2){let e=oT();vw(),Fm(`disabled`,!e.system_id()),vw(),ld(` `,ZT(3,2,`COMMON.CONTINUE`),` `)}}var ue=`PLACEOS.ASSISTANT.system`;var Sn=(()=>{class n extends ja{constructor(){super(...arguments),this._org=m(Te$1),this._router=m(Ce$1),this._route=m(B),this.loading=at(``),this.system_id=at(``),this._search=tH(this.system_id,300),this._spaces=n_({params:()=>({q:this._search.value(),ready:this._org.initialised()}),loader:async({params:e})=>{if(!e.ready||e.q.length<2)return[];let{data:t}=await ri$1({q:e.q,limit:20,fields:[`id`,`name`,`display_name`,`email`].join(`,`),zone_id:this._org.organisation.id});return t.map(i=>new ki(i))}}),this.space_list=Te(()=>this._spaces.value()??[]),this.searching=this._spaces.isLoading,this.bootstrap=()=>this.configure(this.system_id()),this.clearBootstrap=()=>localStorage.removeItem(ue)}get version(){return D}async ngOnInit(){this.subscription(`route.query`,this._route.queryParamMap.subscribe(e=>{e.has(`clear`)&&e.get(`clear`)&&this.clearBootstrap(),(e.has(`system_id`)||e.has(`sys_id`))&&(this.system_id.set(e.get(`system_id`)||e.get(`sys_id`)||``),this.bootstrap())})),this.checkBootstrapped()}configure(e){this.loading.set(`Setup`),localStorage&&(localStorage.setItem(ue,e),localStorage.setItem(`trust`,`true`),localStorage.setItem(`fixed_device`,`true`)),this._router.navigate([`/panel`,e],{queryParamsHandling:`preserve`}),this.loading.set(``)}checkBootstrapped(){if(this.loading.set(`Checks`),localStorage){let e=localStorage.getItem(ue);if(e){this._router.navigate([`/panel`,e],{queryParamsHandling:`preserve`});return}}this.loading.set(``)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=qh(n)))(i||n)}})()}static{this.ɵcmp=ZC({type:n,selectors:[[`app-bootstrap`]],features:[wm],decls:20,vars:20,consts:[[`auto`,`matAutocomplete`],[1,`bg-base-200`,`absolute`,`inset-0`,`z-0`],[1,`border-base-300`,`bg-base-100`,`relative`,`z-10`,`mx-auto`,`my-8`,`w-md`,`overflow-hidden`,`rounded-lg`,`border`],[1,`bg-secondary`,`text-secondary-content`,`flex`,`w-full`,`items-center`,`justify-between`,`px-4`,`py-3`,`text-xl`,`font-medium`],[1,`rounded-sm`,`px-2`,`py-1`,`font-mono`,`text-sm`,`uppercase`],[1,`flex`,`w-full`,`flex-col`,`space-y-2`,`p-4`],[1,`flex`,`w-full`,`flex-col`,`items-center`,`justify-center`,`p-8`],[1,`border-base-300`,`flex`,`w-full`,`items-center`,`justify-end`,`border-t`,`px-4`,`py-2`],[1,`absolute`,`right-0`,`bottom-0`,`z-10`,`p-2`,`text-right`],[1,`text-xs`,`opacity-40`],[`for`,`system-id`],[`appearance`,`outline`,1,`w-full`],[`id`,`system-id`,`matInput`,``,3,`ngModelChange`,`ngModel`,`matAutocomplete`,`placeholder`],[`matSuffix`,``,3,`diameter`],[1,`-mx-4`],[3,`value`],[1,`pointer-events-none`,`opacity-60`],[1,`flex`,`w-full`,`items-center`,`space-x-4`,`leading-tight`],[1,`flex`,`flex-1`,`flex-col`],[1,`text-xs`,`opacity-30`],[1,`bg-base-200`,`rounded-sm`,`px-2`,`py-1`,`font-mono`,`text-[0.625rem]`],[3,`diameter`],[`btn`,``,`matRipple`,``,1,`w-32`,3,`click`,`disabled`]],template:function(t,i){t&1&&(Lm(0,`div`,1),Ws(1,`div`,2)(2,`header`,3)(3,`div`),kT(4),WT(5,`translate`),id(),Ws(6,`div`,4),kT(7),WT(8,`translate`),id()(),Ub(9,vi,16,13,`main`,5)(10,yi,5,4,`main`,6),Ub(11,bi,4,4,`footer`,7),id(),Ws(12,`div`,8)(13,`div`,9),kT(14),WT(15,`translate`),id(),Ws(16,`div`,9),kT(17),WT(18,`date`),WT(19,`date`),id()()),t&2&&(vw(4),oy(ZT(5,8,`COMMON.BOOTSTRAP_ASSISTANT`)),vw(3),ld(` `,ZT(8,10,`COMMON.BOOTSTRAP_SETUP`),` `),vw(2),$b(i.loading()?10:9),vw(2),$b(i.loading()?-1:11),vw(3),iy(` `,ZT(15,12,`COMMON.CONTROLS_VERSION`),`: `,i.version.hash,` `),vw(3),iy(` `,YT(18,14,i.version.time,`longDate`),` (`,YT(19,17,i.version.time,`shortTime`),`) `))},dependencies:[Ut,Qt,X,he,ce$2,nt,le$1,zt,En,wn$1,$t,Zt,Mt$1,yt,Xy,wn,Ue,Dn,Zt$1,aS,f],encapsulation:2})}}return n})();export{Sn as BootstrapComponent};
//# debugId=9eb81358-786d-5a56-9b1f-34944c423b70
//# sourceMappingURL=bootstrap.component-CEjJaDoi.js.map