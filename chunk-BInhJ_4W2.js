import{n as m,t as l}from"./chunk-DzscigDP.js";import{$r as w,$t as YH,B as HT,Bn as hD,Bt as UT,Cn as dc,D as Ed,Dn as e2,En as dy,Et as Rp,F as GT,Ft as T_,G as IS,H as Hm,Hn as ha$1,In as gD,It as Tb,Jr as ue,Jt as X,K as IT,Kr as ty,L as Gm,Lt as Te,Mn as ey,Nr as pe,Or as os,Pn as f_,Pr as py,Q as Kn$1,Qn as jC,Qr as vn,Rn as gd,St as Qo,T as ET,Tt as Re,Un as he,Vt as VD,Wn as ht$1,Wr as t_,Y as Jm,Yt as XH,Z as KH,Zn as iy,a as $s,br as na$1,cn as a2,cr as lg,d as BT,dn as ay,dr as ly,er as jT,et as LC,fi as yy,ft as O_,g as CT,hn as b_,hr as md,ir as jo,j as Fi,jn as er,jt as Sv,k as Er,kn as ea$1,l as At,ln as ae,mi as zf,mn as bT,n as $_,ni as x,nn as Z,nr as jd,o as A_,oi as y,on as __,p as Br,pr as mD,pt as Op,q as JH,ri as xT,rt as LT,si as yD,sr as k_,t as $T,ti as wT,tn as Yw,ui as yd,ur as lr,v as Cy,vn as bw,w as ES,y as DT,yt as QD}from"./chunk-KHJgN2oW.js";import{Bt as mi,Jt as pf,Pt as ke,W as Su,Wt as oc,kt as jf,rt as Yu,yt as ff}from"./chunk-CNi4ZqVN.js";import{A as m$1,E as et,F as zn,N as q,P as qn$1,S as di,_ as _t,i as K,j as oe,l as Pt,m as Un$1,o as N,p as U,t as A,v as ae$1,y as ce}from"./chunk-D6DnGtLs.js";import{a as et$1,c as yt,r as Rt,t as Mt}from"./chunk-CGxJLKmh.js";import{Ct as ae$2,F as Jn$1,Ft as hd,Gt as ld,H as Mc,Ht as k_$1,Kt as md$1,X as P,Yt as ot$1,Zt as qa,_n as zo,an as tr,bt as Ze,et as S_,f as Ce,g as D_,k as Ho,nt as Sc,ot as U_,p as Cg,tn as ta$1,un as xg}from"./chunk-r-sW5LvC.js";import{a as b,c as Et,f as Xr,n as f,o as ie,t as N$1}from"./main.js";import{C as q$1,_ as Yt,g as Xt,n as A$1,p as Vt,s as It,t as $,y as di$1}from"./chunk-CiRYn04D.js";import{n as mt$1,t as Yt$1}from"./chunk-RYwdLIO8.js";import{i as Ht,n as Bt,p as ee,t as $e}from"./chunk-BwvSth3k.js";import{i as Rs,t as Ds}from"./chunk-D9K0MopM.js";import{a as qe,i as ht$2,o as vt,r as gt,s as xt,t as Kt}from"./chunk-CjSL62b5.js";import{n as Et$1,t as Dt}from"./chunk-Dig3H0oc.js";import{n as W,r as re,t as Re$1}from"./chunk-DR9ZdHtl.js";import{n as Pe,t as Be}from"./chunk-Bsc7aqC2.js";import{n as pe$1,t as ce$1}from"./chunk-BGsLV3Y9.js";import{t as w$1}from"./chunk-Civu0Ts72.js";import{n as T}from"./chunk-BMzhaTWj2.js";var fn=[`panel`];var gn=[`*`];function yn(n,d){if(n&1&&(md(0,`div`,1,0),BT(2),yd()),n&2){let e=d.id,i=LT();t_(i._classList),yy(`mat-mdc-autocomplete-visible`,i.showPanel)(`mat-mdc-autocomplete-hidden`,!i.showPanel)(`mat-autocomplete-panel-animations-enabled`,!i._animationsDisabled)(`mat-primary`,i._color===`primary`)(`mat-accent`,i._color===`accent`)(`mat-warn`,i._color===`warn`),iy(`id`,i.id),Jm(`aria-label`,i.ariaLabel||null)(`aria-labelledby`,i._getPanelAriaLabelledby(e))}}var it=class{source;option;constructor(d,e){this.source=d,this.option=e}};var Ki=new w(`mat-autocomplete-default-options`,{providedIn:`root`,factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})});var Qi=(()=>{class n{_changeDetectorRef=y(jd);_elementRef=y(Kn$1);_defaults=y(Ki);_animationsDisabled=qn$1();_activeOptionChanges=X.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new At;opened=new At;closed=new At;optionActivated=new At;set classList(e){this._classList=e,this._elementRef.nativeElement.className=``}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=y(oe).getId(`mat-autocomplete-`);inertGroups;constructor(){let e=y(m$1);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new ae$1(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let i=new it(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let i=e?e+` `:``;return this.ariaLabelledby?i+this.ariaLabelledby:e}_skipPredicate(){return!1}static ɵfac=function(i){return new(i||n)};static ɵcmp=Tb({type:n,selectors:[[`mat-autocomplete`]],contentQueries:function(i,t,a){if(i&1&&ly(a,Ho,5)(a,Mc,5),i&2){let o;HT(o=UT())&&(t.options=o),HT(o=UT())&&(t.optionGroups=o)}},viewQuery:function(i,t){if(i&1&&dy(Br,7)(fn,5),i&2){let a;HT(a=UT())&&(t.template=a.first),HT(a=UT())&&(t.panel=a.first)}},hostAttrs:[1,`mat-mdc-autocomplete`],inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],displayWith:`displayWith`,autoActiveFirstOption:[2,`autoActiveFirstOption`,`autoActiveFirstOption`,ES],autoSelectActiveOption:[2,`autoSelectActiveOption`,`autoSelectActiveOption`,ES],requireSelection:[2,`requireSelection`,`requireSelection`,ES],panelWidth:`panelWidth`,disableRipple:[2,`disableRipple`,`disableRipple`,ES],classList:[0,`class`,`classList`],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,ES]},outputs:{optionSelected:`optionSelected`,opened:`opened`,closed:`closed`,optionActivated:`optionActivated`},exportAs:[`matAutocomplete`],features:[b_([{provide:Sc,useExisting:n}])],ngContentSelectors:gn,decls:1,vars:0,consts:[[`panel`,``],[`role`,`listbox`,1,`mat-mdc-autocomplete-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`id`]],template:function(i,t){i&1&&(jT(),Gm(0,yn,3,17,`ng-template`))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2})}return n})();var Wi=(()=>{class n{elementRef=y(Kn$1);static ɵfac=function(i){return new(i||n)};static ɵdir=ha$1({type:n,selectors:[[``,`matAutocompleteOrigin`,``]],exportAs:[`matAutocompleteOrigin`]})}return n})();var bn={provide:ot$1,useExisting:os(()=>ot),multi:!0};var Cn=new w(`mat-autocomplete-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=y(he);return()=>It(n)}});var ot=(()=>{class n{_environmentInjector=y(pe);_element=y(Kn$1);_injector=y(he);_viewContainerRef=y(er);_zone=y(ue);_changeDetectorRef=y(jd);_dir=y(Pt,{optional:!0});_formField=y(vt,{optional:!0,host:!0});_viewportRuler=y(A$1);_scrollStrategy=y(Cn);_renderer=y(jo);_animationsDisabled=qn$1();_defaults=y(Ki,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new ae;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=X.EMPTY;_breakpointObserver=y(q);_handsetLandscapeSubscription=X.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new ae;_overlayPanelClass=K(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position=`auto`;connectedTo;autocompleteAttribute=`off`;autocompleteDisabled=!1;_aboveClass=`mat-mdc-autocomplete-panel-above`;ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen(`window`,`blur`,this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return gD(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(vn(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(vn(()=>this._overlayAttached)):Fi()).pipe(Te(e=>e instanceof Jn$1?e:null))}optionSelections=hD(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(mD(e),dc(()=>gD(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(dc(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new x(e=>{let i=a=>{let o=A(a),y=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,k=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&o!==this._element.nativeElement&&!this._hasFocus()&&(!y||!y.contains(o))&&(!k||!k.contains(o))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(o)&&e.next(a)},t=[this._renderer.listen(`document`,`click`,i),this._renderer.listen(`document`,`auxclick`,i),this._renderer.listen(`document`,`touchend`,i)];return()=>{t.forEach(a=>a())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let i=e,t=i.keyCode,a=et(i);if(t===27&&!a&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&t===13&&this.panelOpen&&!a)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let o=this.autocomplete._keyManager.activeItem,y=t===38||t===40;t===9||y&&!a&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):y&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(y||this.autocomplete._keyManager.activeItem!==o)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,t=i.value;if(i.type===`number`&&(t=t==``?null:parseFloat(t)),this._previousValue!==t){if(this._previousValue=t,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(t),!t)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let a=this.autocomplete.options?.find(o=>o.selected);if(a){let o=this._getDisplayValue(a.value);t!==o&&a.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let a=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(a)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return di()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel===`auto`&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel=`always`,this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel=`auto`),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){return gD(new x(t=>{bw(()=>{t.next()},{injector:this._environmentInjector})}),this.autocomplete.options?.changes.pipe(QD(()=>this._positionStrategy.reapplyLastPosition()),VD(0))??Fi()).pipe(dc(()=>this._zone.run(()=>{let t=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),t!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),lr(1)).subscribe(t=>this._setValueAndClose(t))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(e):e}_assignOptionValue(e){let i=this._getDisplayValue(e);e??this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??``)}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let i=this.autocomplete,t=e?e.source:this._pendingAutoselectedOption;t?(this._clearPreviousSelectedOption(t),this._assignOptionValue(t.value),this._onChange(t.value),i._emitSelectEvent(t),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,i){this.autocomplete?.options?.forEach(t=>{t!==e&&t.selected&&t.deselect(i)})}_openPanelInternal(e=this._element.nativeElement.value){this._attachOverlay(e),this._floatLabel()}_attachOverlay(e){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new $(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=Xt(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Un$1.HandsetLandscape).subscribe(a=>{a.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let t=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this.panelOpen&&t!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!et(e)||e.keyCode===38&&et(e,`altKey`))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??``),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new q$1({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=Yt(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation(`inline`);return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let i=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}],t=this._aboveClass,a=[{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:t},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:t}],o;this.position===`above`?o=a:this.position===`below`?o=i:o=[...i,...a],e.withPositions(o)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let i=-1;for(let t=0;t<e.options.length;t++)if(!e.options.get(t).disabled){i=t;break}e._keyManager.setActiveItem(i)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let i=this.autocomplete,t=D_(e,i.options,i.optionGroups);if(e===0&&t===1)i._setScrollTop(0);else if(i.panel){let a=i.options.toArray()[e];if(a){let o=a._getHostElement(),y=S_(o.offsetTop,o.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(y)}}}static ɵfac=function(i){return new(i||n)};static ɵdir=ha$1({type:n,selectors:[[`input`,`matAutocomplete`,``],[`textarea`,`matAutocomplete`,``]],hostAttrs:[1,`mat-mdc-autocomplete-trigger`],hostVars:7,hostBindings:function(i,t){i&1&&ay(`focusin`,function(){return t._handleFocus()})(`blur`,function(){return t._onTouched()})(`input`,function(o){return t._handleInput(o)})(`keydown`,function(o){return t._handleKeydown(o)})(`click`,function(){return t._handleClick()}),i&2&&Jm(`autocomplete`,t.autocompleteAttribute)(`role`,t.autocompleteDisabled?null:`combobox`)(`aria-autocomplete`,t.autocompleteDisabled?null:`list`)(`aria-activedescendant`,t.panelOpen&&t.activeOption?t.activeOption.id:null)(`aria-expanded`,t.autocompleteDisabled?null:t.panelOpen.toString())(`aria-controls`,t.autocompleteDisabled||!t.panelOpen?null:t.autocomplete?.id)(`aria-haspopup`,t.autocompleteDisabled?null:`listbox`)},inputs:{autocomplete:[0,`matAutocomplete`,`autocomplete`],position:[0,`matAutocompletePosition`,`position`],connectedTo:[0,`matAutocompleteConnectedTo`,`connectedTo`],autocompleteAttribute:[0,`autocomplete`,`autocompleteAttribute`],autocompleteDisabled:[2,`matAutocompleteDisabled`,`autocompleteDisabled`,ES]},exportAs:[`matAutocompleteTrigger`],features:[b_([bn]),na$1]})}return n})();var $i=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Qo({type:n});static ɵinj=Er({imports:[di$1,U_,Vt,U_,zn]})}return n})();var xn=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]];var Nn=[`*`,`mat-chip-avatar, [matChipAvatar]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function Mn(n,d){n&1&&(ea$1(0,`span`,3),BT(1,1),gd())}function En(n,d){n&1&&(ea$1(0,`span`,6),BT(1,2),gd())}var In=`.mdc-evolution-chip,
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
`;var kn=[[[``,`matChipEdit`,``]],[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[``,`matChipEditInput`,``]],`*`,[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]];var An=[`[matChipEdit]`,`mat-chip-avatar, [matChipAvatar]`,`[matChipEditInput]`,`*`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function Fn(n,d){n&1&&ty(0,`span`,0)}function On(n,d){n&1&&(ea$1(0,`span`,1),BT(1),gd())}function Dn(n,d){n&1&&(ea$1(0,`span`,3),BT(1,1),gd())}function Tn(n,d){n&1&&BT(0,2)}function Rn(n,d){n&1&&ty(0,`span`,7)}function Pn(n,d){if(n&1&&DT(0,Tn,1,0)(1,Rn,1,0,`span`,7),n&2)ET(LT().contentEditInput?0:1)}function Ln(n,d){n&1&&BT(0,3)}function Bn(n,d){n&1&&(ea$1(0,`span`,6),BT(1,4),gd())}var tn=[`*`];var Vn=`.mat-mdc-chip-set {
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
`;var nn=new w(`mat-chips-default-options`,{providedIn:`root`,factory:()=>({separatorKeyCodes:[13]})});var Yi=new w(`MatChipAvatar`);var Xi=new w(`MatChipTrailingIcon`);var Zi=new w(`MatChipEdit`);var ct=new w(`MatChipRemove`);var dt=new w(`MatChip`);var an=(()=>{class n{_elementRef=y(Kn$1);_parentChip=y(dt);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?``:null}constructor(){y(N).load(Rt),this._elementRef.nativeElement.nodeName===`BUTTON`&&this._elementRef.nativeElement.setAttribute(`type`,`button`)}focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(i){return new(i||n)};static ɵdir=ha$1({type:n,selectors:[[``,`matChipContent`,``]],hostAttrs:[1,`mat-mdc-chip-action`,`mdc-evolution-chip__action`,`mdc-evolution-chip__action--presentational`],hostVars:8,hostBindings:function(i,t){i&2&&(Jm(`disabled`,t._getDisabledAttribute())(`aria-disabled`,t.disabled),yy(`mdc-evolution-chip__action--primary`,t._isPrimary)(`mdc-evolution-chip__action--secondary`,!t._isPrimary)(`mdc-evolution-chip__action--trailing`,!t._isPrimary&&!t._isLeading))},inputs:{disabled:[2,`disabled`,`disabled`,ES],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?-1:IS(e)],_allowFocusWhenDisabled:`_allowFocusWhenDisabled`}})}return n})();var pt=(()=>{class n extends an{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static ɵfac=(()=>{let e;return function(t){return(e||(e=lg(n)))(t||n)}})();static ɵdir=ha$1({type:n,selectors:[[``,`matChipAction`,``]],hostVars:3,hostBindings:function(i,t){i&1&&ay(`click`,function(o){return t._handleClick(o)})(`keydown`,function(o){return t._handleKeydown(o)}),i&2&&(Jm(`tabindex`,t._getTabindex()),yy(`mdc-evolution-chip__action--presentational`,!1))},features:[Hm]})}return n})();var on=(()=>{class n extends pt{_isPrimary=!1;_handleClick(e){this.disabled||(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}static ɵfac=(()=>{let e;return function(t){return(e||(e=lg(n)))(t||n)}})();static ɵdir=ha$1({type:n,selectors:[[``,`matChipRemove`,``]],hostAttrs:[`role`,`button`,1,`mat-mdc-chip-remove`,`mat-mdc-chip-trailing-icon`,`mat-focus-indicator`,`mdc-evolution-chip__icon`,`mdc-evolution-chip__icon--trailing`],hostVars:1,hostBindings:function(i,t){i&2&&Jm(`aria-hidden`,null)},features:[b_([{provide:ct,useExisting:n}]),Hm]})}return n})();var st=(()=>{class n{_changeDetectorRef=y(jd);_elementRef=y(Kn$1);_tagName=y(YH);_ngZone=y(ue);_focusMonitor=y(_t);_globalRippleOptions=y(et$1,{optional:!0});_document=y(Z);_onFocus=new ae;_onBlur=new ae;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=qn$1();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=y(oe).getId(`mat-mdc-chip-`);ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new At;destroyed=new At;basicChipAttrName=`mat-basic-chip`;leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=y(N$1);_injector=y(he);constructor(){let e=y(N);e.load(Rt),e.load(U),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:`mat-mdc-chip-ripple`,disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(`.mat-mdc-chip-action-label`),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=gD(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(i=>{let t=i._elementRef.nativeElement;return t===e||t.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let i=e!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static ɵfac=function(i){return new(i||n)};static ɵcmp=Tb({type:n,selectors:[[`mat-basic-chip`],[``,`mat-basic-chip`,``],[`mat-chip`],[``,`mat-chip`,``]],contentQueries:function(i,t,a){if(i&1&&ly(a,Yi,5)(a,Zi,5)(a,Xi,5)(a,ct,5)(a,Yi,5)(a,Xi,5)(a,Zi,5)(a,ct,5),i&2){let o;HT(o=UT())&&(t.leadingIcon=o.first),HT(o=UT())&&(t.editIcon=o.first),HT(o=UT())&&(t.trailingIcon=o.first),HT(o=UT())&&(t.removeIcon=o.first),HT(o=UT())&&(t._allLeadingIcons=o),HT(o=UT())&&(t._allTrailingIcons=o),HT(o=UT())&&(t._allEditIcons=o),HT(o=UT())&&(t._allRemoveIcons=o)}},viewQuery:function(i,t){if(i&1&&dy(pt,5),i&2){let a;HT(a=UT())&&(t.primaryAction=a.first)}},hostAttrs:[1,`mat-mdc-chip`],hostVars:31,hostBindings:function(i,t){i&1&&ay(`keydown`,function(o){return t._handleKeydown(o)}),i&2&&(iy(`id`,t.id),Jm(`role`,t.role)(`aria-label`,t.ariaLabel),t_(`mat-`+(t.color||`primary`)),yy(`mdc-evolution-chip`,!t._isBasicChip)(`mdc-evolution-chip--disabled`,t.disabled)(`mdc-evolution-chip--with-trailing-action`,t._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,t.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,t.leadingIcon)(`mdc-evolution-chip--with-avatar`,t.leadingIcon)(`mat-mdc-chip-with-avatar`,t.leadingIcon)(`mat-mdc-chip-highlighted`,t.highlighted)(`mat-mdc-chip-disabled`,t.disabled)(`mat-mdc-basic-chip`,t._isBasicChip)(`mat-mdc-standard-chip`,!t._isBasicChip)(`mat-mdc-chip-with-trailing-icon`,t._hasTrailingIcon())(`_mat-animation-noopable`,t._animationsDisabled))},inputs:{role:`role`,id:`id`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaDescription:[0,`aria-description`,`ariaDescription`],value:`value`,color:`color`,removable:[2,`removable`,`removable`,ES],highlighted:[2,`highlighted`,`highlighted`,ES],disableRipple:[2,`disableRipple`,`disableRipple`,ES],disabled:[2,`disabled`,`disabled`,ES]},outputs:{removed:`removed`,destroyed:`destroyed`},exportAs:[`matChip`],features:[b_([{provide:dt,useExisting:n}])],ngContentSelectors:Nn,decls:8,vars:2,consts:[[1,`mat-mdc-chip-focus-overlay`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipContent`,``],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`]],template:function(i,t){i&1&&(jT(xn),ty(0,`span`,0),ea$1(1,`span`,1)(2,`span`,2),DT(3,Mn,2,0,`span`,3),ea$1(4,`span`,4),BT(5),ty(6,`span`,5),gd()()(),DT(7,En,2,0,`span`,6)),i&2&&(Yw(3),ET(t.leadingIcon?3:-1),Yw(4),ET(t._hasTrailingIcon()?7:-1))},dependencies:[an],styles:[`.mdc-evolution-chip,
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
`],encapsulation:2})}return n})();var rt=(()=>{class n{_elementRef=y(Kn$1);_document=y(Z);initialize(e){this.getNativeElement().focus(),this.setValue(e)}getNativeElement(){return this._elementRef.nativeElement}setValue(e){this.getNativeElement().textContent=e,this._moveCursorToEndOfInput()}getValue(){return this.getNativeElement().textContent||``}_moveCursorToEndOfInput(){let e=this._document.createRange();e.selectNodeContents(this.getNativeElement()),e.collapse(!1);let i=window.getSelection();i.removeAllRanges(),i.addRange(e)}static ɵfac=function(i){return new(i||n)};static ɵdir=ha$1({type:n,selectors:[[`span`,`matChipEditInput`,``]],hostAttrs:[`role`,`textbox`,`tabindex`,`-1`,`contenteditable`,`true`,1,`mat-chip-edit-input`]})}return n})();var ht=(()=>{class n extends st{basicChipAttrName=`mat-basic-chip-row`;_renderer=y(jo);_cleanupMousedown;_editStartPending=!1;editable=!1;edited=new At;defaultEditInput;contentEditInput;_alreadyFocused=!1;_isEditing=!1;constructor(){super(),this.role=`row`,this._onBlur.pipe(yD(this.destroyed)).subscribe(()=>{this._isEditing&&!this._editStartPending&&this._onEditFinish(),this._alreadyFocused=!1})}ngAfterViewInit(){super.ngAfterViewInit(),this._cleanupMousedown=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`mousedown`,()=>{this._alreadyFocused=this._hasFocus()}))}ngOnDestroy(){super.ngOnDestroy(),this._cleanupMousedown?.()}_hasLeadingActionIcon(){return!this._isEditing&&!!this.editIcon}_hasTrailingIcon(){return!this._isEditing&&super._hasTrailingIcon()}_handleFocus(){!this._isEditing&&!this.disabled&&this.focus()}_handleKeydown(e){e.keyCode===13&&!this.disabled?this._isEditing?(e.preventDefault(),this._onEditFinish()):this.editable&&this._startEditing(e):this._isEditing?e.stopPropagation():super._handleKeydown(e)}_handleClick(e){!this.disabled&&this.editable&&!this._isEditing&&this._alreadyFocused&&(e.preventDefault(),e.stopPropagation(),this._startEditing(e))}_handleDoubleclick(e){!this.disabled&&this.editable&&this._startEditing(e)}_edit(){this._changeDetectorRef.markForCheck(),this._startEditing()}_startEditing(e){if(!this.primaryAction||this.removeIcon&&e&&this._getSourceAction(e.target)===this.removeIcon)return;let i=this.value;this._isEditing=this._editStartPending=!0,bw(()=>{this._getEditInput().initialize(i),setTimeout(()=>this._ngZone.run(()=>this._editStartPending=!1))},{injector:this._injector})}_onEditFinish(){this._isEditing=this._editStartPending=!1,this.edited.emit({chip:this,value:this._getEditInput().getValue()}),(this._document.activeElement===this._getEditInput().getNativeElement()||this._document.activeElement===this._document.body)&&this.primaryAction.focus()}_isRippleDisabled(){return super._isRippleDisabled()||this._isEditing}_getEditInput(){return this.contentEditInput||this.defaultEditInput}static ɵfac=function(i){return new(i||n)};static ɵcmp=Tb({type:n,selectors:[[`mat-chip-row`],[``,`mat-chip-row`,``],[`mat-basic-chip-row`],[``,`mat-basic-chip-row`,``]],contentQueries:function(i,t,a){if(i&1&&ly(a,rt,5),i&2){let o;HT(o=UT())&&(t.contentEditInput=o.first)}},viewQuery:function(i,t){if(i&1&&dy(rt,5),i&2){let a;HT(a=UT())&&(t.defaultEditInput=a.first)}},hostAttrs:[1,`mat-mdc-chip`,`mat-mdc-chip-row`,`mdc-evolution-chip`],hostVars:29,hostBindings:function(i,t){i&1&&ay(`focus`,function(){return t._handleFocus()})(`click`,function(o){return t._hasInteractiveActions()?t._handleClick(o):null})(`dblclick`,function(o){return t._handleDoubleclick(o)}),i&2&&(iy(`id`,t.id),Jm(`tabindex`,t.disabled?null:-1)(`aria-label`,null)(`aria-description`,null)(`role`,t.role),yy(`mat-mdc-chip-with-avatar`,t.leadingIcon)(`mat-mdc-chip-disabled`,t.disabled)(`mat-mdc-chip-editing`,t._isEditing)(`mat-mdc-chip-editable`,t.editable)(`mdc-evolution-chip--disabled`,t.disabled)(`mdc-evolution-chip--with-leading-action`,t._hasLeadingActionIcon())(`mdc-evolution-chip--with-trailing-action`,t._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,t.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,t.leadingIcon)(`mdc-evolution-chip--with-avatar`,t.leadingIcon)(`mat-mdc-chip-highlighted`,t.highlighted)(`mat-mdc-chip-with-trailing-icon`,t._hasTrailingIcon()))},inputs:{editable:`editable`},outputs:{edited:`edited`},features:[b_([{provide:st,useExisting:n},{provide:dt,useExisting:n}]),Hm],ngContentSelectors:An,decls:9,vars:8,consts:[[1,`mat-mdc-chip-focus-overlay`],[`role`,`gridcell`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--leading`],[`role`,`gridcell`,`matChipAction`,``,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`,3,`disabled`],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[`aria-hidden`,`true`,1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[`role`,`gridcell`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`],[`matChipEditInput`,``]],template:function(i,t){i&1&&(jT(kn),DT(0,Fn,1,0,`span`,0),DT(1,On,2,0,`span`,1),ea$1(2,`span`,2),DT(3,Dn,2,0,`span`,3),ea$1(4,`span`,4),DT(5,Pn,2,1)(6,Ln,1,0),ty(7,`span`,5),gd()(),DT(8,Bn,2,0,`span`,6)),i&2&&(ET(t._isEditing?-1:0),Yw(),ET(t._hasLeadingActionIcon()?1:-1),Yw(),ey(`disabled`,t.disabled),Jm(`aria-description`,t.ariaDescription)(`aria-label`,t.ariaLabel),Yw(),ET(t.leadingIcon?3:-1),Yw(2),ET(t._isEditing?5:6),Yw(3),ET(t._hasTrailingIcon()?8:-1))},dependencies:[pt,rt],styles:[In],encapsulation:2})}return n})();var Un=(()=>{class n{_elementRef=y(Kn$1);_changeDetectorRef=y(jd);_dir=y(Pt,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new ae;_defaultRole=`presentation`;get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new $s;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(mD(null),dc(()=>gD(...this._chips.map(e))))}_originatesFromChip(e){let i=e.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains(`mat-mdc-chip`))return!0;i=i.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(mD(this._chips)).subscribe(e=>{let i=[];e.forEach(t=>t._getActions().forEach(a=>i.push(a))),this._chipActions.reset(i),this._chipActions.notifyOnChanges()}),this._keyManager=new ce(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:`ltr`).withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(yD(this._destroyed)).subscribe(({chip:e})=>{let i=e._getSourceAction(document.activeElement);i&&this._keyManager.updateActiveItem(i)}),this._dir?.change.pipe(yD(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(mD(null),yD(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(yD(this._destroyed)).subscribe(e=>{let t=this._chips.toArray().indexOf(e.chip),a=e.chip._hasFocus(),o=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),y=a||o;this._isValidIndex(t)&&y&&(this._lastDestroyedFocusedChipIndex=t)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),i=this._chips.toArray()[e];i.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():i.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static ɵfac=function(i){return new(i||n)};static ɵcmp=Tb({type:n,selectors:[[`mat-chip-set`]],contentQueries:function(i,t,a){if(i&1&&ly(a,st,5),i&2){let o;HT(o=UT())&&(t._chips=o)}},hostAttrs:[1,`mat-mdc-chip-set`,`mdc-evolution-chip-set`],hostVars:1,hostBindings:function(i,t){i&1&&ay(`keydown`,function(o){return t._handleKeydown(o)}),i&2&&Jm(`role`,t.role)},inputs:{disabled:[2,`disabled`,`disabled`,ES],role:`role`,tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:IS(e)]},ngContentSelectors:tn,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(i,t){i&1&&(jT(),md(0,`div`,0),BT(1),yd())},styles:[`.mat-mdc-chip-set {
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
`],encapsulation:2})}return n})();var lt=class{source;value;constructor(d,e){this.source=d,this.value=e}};var rn=(()=>{class n extends Un{ngControl=y(Ce,{optional:!0,self:!0});controlType=`mat-chip-grid`;_chipInput;_defaultRole=`grid`;_errorStateTracker;_uid=y(oe).getId(`mat-chip-grid-`);_ariaDescribedbyIds=[];_onTouched=()=>{};_onChange=()=>{};get disabled(){return this.ngControl?!!this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=e,this._syncChipsState(),this.stateChanges.next()}get id(){return this._chipInput?this._chipInput.id:this._uid}get empty(){return(!this._chipInput||this._chipInput.empty)&&(!this._chips||this._chips.length===0)}get placeholder(){return this._chipInput?this._chipInput.placeholder:this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder=``;get focused(){return this._chipInput?.focused||this._hasFocusedChip()}get required(){return this._required??this.ngControl?.control?.hasValidator(tr.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get shouldLabelFloat(){return!this.empty||this.focused}get value(){return this._value}set value(e){this._value=e}_value=[];get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}change=new At;valueChange=new At;_chips=void 0;stateChanges=new ae;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(){super();let e=y(ld,{optional:!0}),i=y(hd,{optional:!0}),t=y(k_$1),a=y(Et,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._errorStateTracker=new zo(t,a||this.ngControl,i,e,this.stateChanges)}ngAfterContentInit(){this.chipBlurChanges.pipe(yD(this._destroyed)).subscribe(()=>{this._blur(),this.stateChanges.next()}),gD(this.chipFocusChanges,this._chips.changes).pipe(yD(this._destroyed)).subscribe(()=>this.stateChanges.next())}ngDoCheck(){this.ngControl&&this.updateErrorState()}ngOnDestroy(){super.ngOnDestroy(),this.stateChanges.complete()}registerInput(e){this._chipInput=e,this._chipInput.setDescribedByIds(this._ariaDescribedbyIds),this._elementRef.nativeElement.removeAttribute(`aria-describedby`)}onContainerClick(e){!this.disabled&&!this._originatesFromChip(e)&&this.focus()}focus(){if(!(this.disabled||this._chipInput?.focused)){if(!this._chips.length||this._chips.first.disabled){if(!this._chipInput)return;Promise.resolve().then(()=>this._chipInput.focus())}else{let e=this._keyManager.activeItem;e?e.focus():this._keyManager.setFirstItemActive()}this.stateChanges.next()}}get describedByIds(){if(this._chipInput)return this._chipInput.describedByIds||[];let e=this._elementRef.nativeElement.getAttribute(`aria-describedby`);return e?e.split(` `):[]}setDescribedByIds(e){this._ariaDescribedbyIds=e,this._chipInput?this._chipInput.setDescribedByIds(e):e.length?this._elementRef.nativeElement.setAttribute(`aria-describedby`,e.join(` `)):this._elementRef.nativeElement.removeAttribute(`aria-describedby`)}writeValue(e){this._value=e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this.stateChanges.next()}updateErrorState(){this._errorStateTracker.updateErrorState()}_blur(){this.disabled||setTimeout(()=>{this.focused||(this._propagateChanges(),this._markAsTouched())})}_allowFocusEscape(){this._chipInput?.focused||super._allowFocusEscape()}_handleKeydown(e){let i=e.keyCode,t=this._keyManager.activeItem;if(i===9)this._chipInput?.focused&&et(e,`shiftKey`)&&this._chips.length&&!this._chips.last.disabled?(e.preventDefault(),t?this._keyManager.setActiveItem(t):this._focusLastChip()):super._allowFocusEscape();else if(!this._chipInput?.focused)if((i===38||i===40)&&t){let a=this._chipActions.filter(k=>k._isPrimary===t._isPrimary&&!this._skipPredicate(k)),o=a.indexOf(t),y=e.keyCode===38?-1:1;e.preventDefault(),o>-1&&this._isValidIndex(o+y)&&this._keyManager.setActiveItem(a[o+y])}else super._handleKeydown(e);this.stateChanges.next()}_redirectDestroyedChipFocus(){this._lastDestroyedFocusedChipIndex!==null&&(super._redirectDestroyedChipFocus(),(!this._chips.length||this._chips.length===1&&this._chips.first.disabled)&&this._keyManager.updateActiveItem(-1))}_focusLastChip(){this._chips.length&&this._chips.last.focus()}_propagateChanges(){let e=this._chips.length?this._chips.toArray().map(i=>i.value):[];this._value=e,this.change.emit(new lt(this,e)),this.valueChange.emit(e),this._onChange(e),this._changeDetectorRef.markForCheck()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next()}static ɵfac=function(i){return new(i||n)};static ɵcmp=Tb({type:n,selectors:[[`mat-chip-grid`]],contentQueries:function(i,t,a){if(i&1&&ly(a,ht,5),i&2){let o;HT(o=UT())&&(t._chips=o)}},hostAttrs:[1,`mat-mdc-chip-set`,`mat-mdc-chip-grid`,`mdc-evolution-chip-set`],hostVars:10,hostBindings:function(i,t){i&1&&ay(`focus`,function(){return t.focus()})(`blur`,function(){return t._blur()}),i&2&&(Jm(`role`,t.role)(`tabindex`,t.disabled||t._chips&&t._chips.length===0?-1:t.tabIndex)(`aria-disabled`,t.disabled.toString())(`aria-invalid`,t.errorState),yy(`mat-mdc-chip-list-disabled`,t.disabled)(`mat-mdc-chip-list-invalid`,t.errorState)(`mat-mdc-chip-list-required`,t.required))},inputs:{disabled:[2,`disabled`,`disabled`,ES],placeholder:`placeholder`,required:[2,`required`,`required`,ES],value:`value`,errorStateMatcher:`errorStateMatcher`},outputs:{change:`change`,valueChange:`valueChange`},features:[b_([{provide:gt,useExisting:n}]),Hm],ngContentSelectors:tn,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(i,t){i&1&&(jT(),md(0,`div`,0),BT(1),yd())},styles:[Vn],encapsulation:2})}return n})();var cn=(()=>{class n{_elementRef=y(Kn$1);focused=!1;get chipGrid(){return this._chipGrid}set chipGrid(e){e&&(this._chipGrid=e,this._chipGrid.registerInput(this))}_chipGrid;addOnBlur=!1;separatorKeyCodes;chipEnd=new At;placeholder=``;id=y(oe).getId(`mat-mdc-chip-list-input-`);get disabled(){return this._disabled||this._chipGrid&&this._chipGrid.disabled}set disabled(e){this._disabled=e}_disabled=!1;readonly=!1;disabledInteractive;get empty(){return!this.inputElement.value}inputElement;constructor(){let e=y(nn),i=y(vt,{optional:!0});this.inputElement=this._elementRef.nativeElement,this.separatorKeyCodes=e.separatorKeyCodes,this.disabledInteractive=e.inputDisabledInteractive??!1,i&&this.inputElement.classList.add(`mat-mdc-form-field-input-control`)}ngOnChanges(){this._chipGrid.stateChanges.next()}ngOnDestroy(){this.chipEnd.complete()}_keydown(e){this.empty&&e.keyCode===8?(e.repeat||this._chipGrid._focusLastChip(),e.preventDefault()):this._emitChipEnd(e)}_blur(){this.addOnBlur&&this._emitChipEnd(),this.focused=!1,this._chipGrid.focused||this._chipGrid._blur(),this._chipGrid.stateChanges.next()}_focus(){this.focused=!0,this._chipGrid.stateChanges.next()}_emitChipEnd(e){(!e||this._isSeparatorKey(e)&&!e.repeat)&&(this.chipEnd.emit({input:this.inputElement,value:this.inputElement.value,chipInput:this}),e?.preventDefault())}_onInput(){this._chipGrid.stateChanges.next()}focus(){this.inputElement.focus()}clear(){this.inputElement.value=``}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute(`aria-describedby`,e.join(` `)):i.removeAttribute(`aria-describedby`)}_isSeparatorKey(e){if(!this.separatorKeyCodes)return!1;for(let i of this.separatorKeyCodes){let t,a;typeof i==`number`?(t=i,a=null):(t=i.keyCode,a=i.modifiers);let o=a?.length?et(e,...a):!et(e);if(t===e.keyCode&&o)return!0}return!1}_getReadonlyAttribute(){return this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(i){return new(i||n)};static ɵdir=ha$1({type:n,selectors:[[`input`,`matChipInputFor`,``]],hostAttrs:[1,`mat-mdc-chip-input`,`mat-mdc-input-element`,`mdc-text-field__input`,`mat-input-element`],hostVars:8,hostBindings:function(i,t){i&1&&ay(`keydown`,function(o){return t._keydown(o)})(`blur`,function(){return t._blur()})(`focus`,function(){return t._focus()})(`input`,function(){return t._onInput()}),i&2&&(iy(`id`,t.id),Jm(`disabled`,t.disabled&&!t.disabledInteractive?``:null)(`placeholder`,t.placeholder||null)(`aria-invalid`,t._chipGrid&&t._chipGrid.ngControl?t._chipGrid.ngControl.invalid:null)(`aria-required`,t._chipGrid&&t._chipGrid.required||null)(`aria-disabled`,t.disabled&&t.disabledInteractive?`true`:null)(`readonly`,t._getReadonlyAttribute())(`required`,t._chipGrid&&t._chipGrid.required||null))},inputs:{chipGrid:[0,`matChipInputFor`,`chipGrid`],addOnBlur:[2,`matChipInputAddOnBlur`,`addOnBlur`,ES],separatorKeyCodes:[0,`matChipInputSeparatorKeyCodes`,`separatorKeyCodes`],placeholder:`placeholder`,id:`id`,disabled:[2,`disabled`,`disabled`,ES],readonly:[2,`readonly`,`readonly`,ES],disabledInteractive:[2,`matChipInputDisabledInteractive`,`disabledInteractive`,ES]},outputs:{chipEnd:`matChipInputTokenEnd`},exportAs:[`matChipInput`,`matChipInputFor`],features:[na$1]})}return n})();var sn=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Qo({type:n});static ɵinj=Er({providers:[k_$1,{provide:nn,useValue:{separatorKeyCodes:[13]}}],imports:[Mt,zn]})}return n})();function Gn(n,d){if(n&1&&(ea$1(0,`div`,1)(1,`label`,2),f_(2,` Name`),ea$1(3,`span`),f_(4,`*`),gd(),f_(5,`: `),gd(),ea$1(6,`mat-form-field`,3),ty(7,`input`,4),LC(),ea$1(8,`mat-error`),f_(9,`Name is required`),gd()()()),n&2){let e=LT(2);Yw(),yy(`error`,e.hasError(`name`)),Yw(6),ey(`formField`,e.form().name),jC()}}function qn(n,d){if(n&1&&(ea$1(0,`div`,1)(1,`label`,5),f_(2,` Email`),ea$1(3,`span`),f_(4,`*`),gd(),f_(5,`: `),gd(),ea$1(6,`mat-form-field`,3),ty(7,`input`,6),LC(),ea$1(8,`mat-error`),f_(9,`A valid email is required`),gd()()()),n&2){let e=LT(2);Yw(),yy(`error`,e.hasError(`email`)),Yw(6),ey(`formField`,e.form().email),jC()}}function Kn(n,d){if(n&1&&(ea$1(0,`div`,1)(1,`label`,7),f_(2),A_(3,`translate`),ea$1(4,`span`),f_(5,`*`),gd(),f_(6,`: `),gd(),ea$1(7,`mat-form-field`,3),ty(8,`input`,8),LC(),ea$1(9,`mat-error`),f_(10),A_(11,`translate`),gd()()()),n&2){let e=LT(2);Yw(),yy(`error`,e.hasError(`organisation`)),Yw(),Ed(` `,O_(3,5,`COMMON.ORGANISATION`)),Yw(6),ey(`formField`,e.form().organisation),jC(),Yw(2),Ed(` `,O_(11,7,`COMMON.ORGANISATION`),` is required `)}}function Qn(n,d){if(n&1&&(ea$1(0,`div`,1)(1,`label`,9),f_(2,` Phone: `),gd(),ea$1(3,`mat-form-field`,3),ty(4,`input`,10),LC(),ea$1(5,`mat-error`),f_(6,`Phone format is invalid`),gd()()()),n&2){let e=LT(2);Yw(),yy(`error`,e.hasError(`phone`)),Yw(3),ey(`formField`,e.form().phone),jC()}}function Wn(n,d){if(n&1&&(ea$1(0,`div`,1)(1,`mat-checkbox`,11),f_(2,` Assistance required `),gd(),LC(),gd()),n&2){let e=LT(2);Yw(),ey(`formField`,e.form().assistance_required),jC()}}function $n(n,d){if(n&1&&(ea$1(0,`div`,1)(1,`mat-checkbox`,11),f_(2,` Visit expected `),gd(),LC(),gd()),n&2){let e=LT(2);Yw(),ey(`formField`,e.form().visit_expected),jC()}}function Yn(n,d){if(n&1&&(ea$1(0,`form`,0),DT(1,Gn,10,3,`div`,1),DT(2,qn,10,3,`div`,1),DT(3,Kn,12,9,`div`,1),DT(4,Qn,7,3,`div`,1),DT(5,Wn,3,1,`div`,1),DT(6,$n,3,1,`div`,1),gd()),n&2){let e=LT();Yw(),ET(e.form().name?1:-1),Yw(),ET(e.form().email?2:-1),Yw(),ET(e.form().organisation?3:-1),Yw(),ET(e.form().phone?4:-1),Yw(),ET(e.form().assistance_required?5:-1),Yw(),ET(e.form().visit_expected?6:-1)}}var ln=(()=>{class n{constructor(){this.form=XH(void 0)}hasError(e){let i=this.form()?.[e];return!!i&&i().invalid()&&i().touched()}static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=Tb({type:n,selectors:[[`user-form`]],inputs:{form:[1,`form`]},decls:1,vars:1,consts:[[`user-form`,``,1,`w-full`],[1,`flex`,`w-full`,`flex-col`],[`for`,`name`],[`appearance`,`outline`],[`matInput`,``,`placeholder`,`Name`,3,`formField`],[`for`,`email`],[`matInput`,``,`placeholder`,`Email Address`,3,`formField`],[`for`,`org`],[`matInput`,``,`placeholder`,`e.g. Conteso`,3,`formField`],[`for`,`phone`],[`matInput`,``,`type`,`tel`,`placeholder`,`Phone`,3,`formField`],[`color`,`primary`,3,`formField`]],template:function(i,t){i&1&&DT(0,Yn,7,6,`form`,0),i&2&&ET(t.form()?0:-1)},dependencies:[pe$1,ce$1,Kt,qe,ht$2,Be,Pe,Xr,f],styles:[`[_nghost-%COMP%], mat-form-field[_ngcontent-%COMP%]{width:100%}
/*# sourceMappingURL=user-form.component.css.map */`]})}}return n})();function Zn(n,d){n&1&&(ea$1(0,`button`,2)(1,`icon`),f_(2,`close`),gd()())}function Jn(n,d){if(n&1&&(ea$1(0,`main`,3),ty(1,`user-form`,6),gd()),n&2){let e=LT();Yw(),ey(`form`,e.form())}}function ea(n,d){n&1&&(ea$1(0,`main`,4),ty(1,`mat-spinner`,7),ea$1(2,`p`),f_(3),A_(4,`translate`),gd()()),n&2&&(Yw(3),Cy(O_(4,1,`COMMON.USER_SAVING`)))}function ta(n,d){if(n&1){let e=xT();ea$1(0,`footer`,5)(1,`button`,8),f_(2),A_(3,`translate`),gd(),ea$1(4,`button`,9),ay(`click`,function(){Rp(e);return Op(LT().saveChanges())}),f_(5),A_(6,`translate`),gd()()}n&2&&(Yw(2),Ed(` `,O_(3,2,`COMMON.CANCEL`),` `),Yw(3),Ed(` `,O_(6,4,`COMMON.SAVE`),` `))}var dn=(()=>{class n extends Su{constructor(){super(),this._data=y($e),this.event=KH(),this.user=ht$1(void 0),this.form=ht$1(ie(new Ze)),this.loading=ht$1(!1);let e=this._data.user||{};this.user.set(e),this.form.set(ie(e))}saveChanges(){let e=this.form();if(e&&(e().markAsTouched(),e().valid())){let i=new Ze(m(l({},e().value()),{is_external:!0}));this.event.emit({reason:`done`,metadata:i})}}static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=Tb({type:n,selectors:[[`new-user-modal`]],outputs:{event:`event`},features:[Hm],decls:8,vars:6,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[1,`flex`,`w-full`,`min-w-[24rem]`,`flex-col`,`items-center`,`px-4`],[1,`flex`,`w-full`,`flex-col`,`items-center`,`space-y-2`,`p-2`],[1,`border-base-200`,`flex`,`w-full`,`items-center`,`justify-end`,`space-x-2`,`border-t`,`p-2`],[3,`form`],[`diameter`,`32`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`],[`btn`,``,`matRipple`,``,3,`click`]],template:function(i,t){i&1&&(ea$1(0,`header`,0)(1,`h2`,1),f_(2),A_(3,`translate`),gd(),DT(4,Zn,3,0,`button`,2),gd(),DT(5,Jn,2,1,`main`,3)(6,ea,5,3,`main`,4),DT(7,ta,7,6,`footer`,5)),i&2&&(Yw(2),Ed(` `,O_(3,4,t.user()?.id?`COMMON.USER_EDIT`:`COMMON.USER_NEW`),` `),Yw(2),ET(t.loading()?-1:4),Yw(),ET(t.loading()?6:5),Yw(2),ET(t.loading()?-1:7))},dependencies:[Mt,yt,ln,Ht,Bt,jf,Dt,Et$1,f],styles:[`main[_ngcontent-%COMP%]{min-height:20em!important;width:100%}footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:8em}
/*# sourceMappingURL=new-user-modal.component.css.map */`]})}}return n})();var ia=[`search_field`];var na=[`*`];var aa=n=>({item:n});var oa=n=>({email:n});var pn=()=>({standalone:!0});var hn=(n,d)=>d.id||d.email;function ra(n,d){if(n&1){let e=xT();ea$1(0,`mat-chip-row`,14),ay(`removed`,function(){let t=Rp(e).$index;return Op(LT().removeUser(t))}),ea$1(1,`div`,15)(2,`div`),f_(3),gd()(),ea$1(4,`button`,16),A_(5,`translate`),ea$1(6,`icon`),f_(7,`cancel`),gd()()()}if(n&2){let e=d.$implicit;yy(`bg-base-200`,!e.is_external)(`bg-warning`,e.is_external),ey(`matTooltip`,e.email),Yw(),yy(`text-base-content!`,!e.is_external)(`text-warning-content!`,e.is_external),Yw(2),Cy(e.name||e.email),Yw(),yy(`text-base-content!`,!e.is_external)(`text-warning-content!`,e.is_external),Jm(`aria-label`,k_(5,15,`COMMON.REMOVE_ITEM`,__(18,aa,e.name||e.email)))}}function ca(n,d){n&1&&ty(0,`mat-spinner`,10)}function sa(n,d){if(n&1){let e=xT();ea$1(0,`mat-option`,17),ay(`click`,function(){Rp(e);return Op(LT().addUserFromEmail())}),f_(1),A_(2,`translate`),gd()}if(n&2){let e=LT();Yw(),Ed(` `,k_(2,1,`FORM.USER_LIST_ADD_EXTERNAL`,__(4,oa,e.search())),` `)}}function la(n,d){if(n&1&&(f_(0,` (`),ea$1(1,`span`,21),f_(2),gd(),f_(3,`) `)),n&2){let e=LT().$implicit;Yw(2),Cy(e.username)}}function da(n,d){if(n&1){let e=xT();ea$1(0,`mat-option`,18),ay(`click`,function(){let t=Rp(e).$implicit;return Op(LT().addUser(t))}),ea$1(1,`div`,15),ty(2,`a-user-avatar`,19),ea$1(3,`div`,11)(4,`div`),f_(5),gd(),ea$1(6,`div`,20),f_(7),DT(8,la,4,1),gd()()()()}if(n&2){let e=d.$implicit;Yw(2),ey(`user`,e),Yw(3),Cy(e.name),Yw(2),Ed(` `,e.email,` `),Yw(),ET(e.username&&e.username!==e.email?8:-1)}}function pa(n,d){if(n&1){let e=xT();ea$1(0,`div`,12)(1,`button`,22),ay(`click`,function(){Rp(e);return Op(LT().openNewUserModal())}),ea$1(2,`div`,23)(3,`span`,24),f_(4),A_(5,`translate`),gd(),ea$1(6,`span`,25),f_(7),A_(8,`translate`),gd()()(),ea$1(9,`button`,26)(10,`div`,23)(11,`span`,24),f_(12),A_(13,`translate`),gd(),ea$1(14,`span`,25),f_(15),A_(16,`translate`),gd()(),ea$1(17,`input`,27),ay(`change`,function(t){Rp(e);return Op(LT().addUsersFromFile(t))}),gd()(),ea$1(18,`button`,28),ay(`click`,function(){Rp(e);let t=LT();return t.downloadCSVTemplate(),Op(t.download.emit())}),ea$1(19,`div`,23)(20,`span`,24),f_(21),A_(22,`translate`),gd(),ea$1(23,`span`,25),f_(24),A_(25,`translate`),gd()()(),BT(26),gd()}n&2&&(Yw(4),Ed(` `,O_(5,6,`FORM.USER_BTN_ADD_EXTERNAL`),` `),Yw(3),Ed(` `,O_(8,8,`FORM.USER_BTN_ADD_EXTERNAL_SIMPLE`),` `),Yw(5),Ed(` `,O_(13,10,`FORM.USER_BTN_UPLOAD`),` `),Yw(3),Ed(` `,O_(16,12,`FORM.USER_BTN_UPLOAD_SIMPLE`),` `),Yw(6),Ed(` `,O_(22,14,`FORM.USER_BTN_TEMPLATE`),` `),Yw(3),Ed(` `,O_(25,16,`FORM.USER_BTN_TEMPLATE_SIMPLE`),` `))}function ha(n,d){if(n&1){let e=xT();ea$1(0,`mat-checkbox`,31),ay(`ngModelChange`,function(t){let a=Rp(e).$implicit;return Op(LT(2).setAttendeeInternational(a,t))}),f_(1),gd(),LC()}if(n&2){let e=d.$implicit;ey(`ngModel`,LT(2).getAttendeeInternational(e))(`ngModelOptions`,T_(3,pn)),jC(),Yw(),Ed(` `,e.name||e.email,` `)}}function ma(n,d){if(n&1&&(ea$1(0,`div`,13)(1,`label`),f_(2),A_(3,`translate`),gd(),ea$1(4,`div`,29),CT(5,ha,2,4,`mat-checkbox`,30,hn),gd()()),n&2){let e=LT();Yw(2),Cy(O_(3,1,`BOOKINGS.INTERNATIONAL_VISITORS`)),Yw(3),bT(e.active_list())}}function ua(n,d){if(n&1){let e=xT();ea$1(0,`div`,33)(1,`span`),f_(2),gd(),ea$1(3,`mat-radio-group`,31),ay(`ngModelChange`,function(t){let a=Rp(e).$implicit;return Op(LT(2).setAttendeeType(a,t))}),ea$1(4,`mat-radio-button`,34),f_(5),A_(6,`translate`),gd(),ea$1(7,`mat-radio-button`,35),f_(8),A_(9,`translate`),gd()(),LC(),gd()}if(n&2){let e=d.$implicit,i=LT(2);Yw(2),Cy(e.name||e.email),Yw(),ey(`ngModel`,i.getAttendeeType(e))(`ngModelOptions`,T_(9,pn)),jC(),Yw(2),Ed(` `,O_(6,5,`COMMON.TYPE_INTERNAL`),` `),Yw(3),Ed(` `,O_(9,7,`COMMON.TYPE_EXTERNAL`),` `)}}function _a(n,d){if(n&1&&(ea$1(0,`div`,13)(1,`label`),f_(2),A_(3,`translate`),gd(),ea$1(4,`div`,32),CT(5,ua,10,10,`div`,33,hn),gd()()),n&2){let e=LT();Yw(2),Cy(O_(3,1,`BOOKINGS.VISITOR_INTERNAL_OR_EXTERNAL`)),Yw(3),bT(e.active_list())}}function mt(n){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n)}var va=[`text/csv`,`text/plain`];var fa=[`application/vnd.ms-excel`,`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`];var _r=(()=>{class n extends Su{async searchStaff(e){return this._use_basic_user_search()?Yu({q:e,authority_id:ke()?.id}).then(i=>i.data.map(t=>new Ze(t))):Ds(e)}constructor(){super(),this._dialog=y(ee),this._settings=y(ae$2),this.time=XH(Date.now()),this.disabled=JH(void 0),this.limit=XH(3),this.guests=XH(!1),this.guests_only=XH(!1),this.hide_actions=XH(!1),this.flags=XH(!1),this.custom_template=XH(!1),this.filter=XH(void 0),this.new_user=KH(),this.download=KH(),this.separatorKeysCodes=[13,188],this.search=ht$1(``),this._search_el=e2(`search_field`),this._use_basic_user_search=this._settings.signal(`basic_user_search`,!1),this._allow_international=this._settings.signal(`events.allow_international`,!1),this._allow_internal_or_external=this._settings.signal(`events.allow_attendee_internal_or_external`,!1),this.show_international=Re(()=>this.flags()&&!!this._allow_international()),this.show_internal_or_external=Re(()=>this.flags()&&!!this._allow_internal_or_external()),this._debounced_search=a2(this.search,300),this._user_search=$_({params:()=>({q:this._debounced_search.value()}),loader:async({params:{q:e}})=>{if(!e)return[];try{if(!this.guests())return await this.searchStaff(e);let[i,t]=await Promise.all([this.searchStaff(e),Rs(e)]),a=this.guests_only()?[]:i,o=[],y=this._settings.get(`visitor-invitees`)||[];for(let k of y){if(typeof k!=`string`)continue;let[mn,un,_n,vn]=k.split(`|`);o.push({email:mn,name:un,company:_n,international:vn===`1`})}return mi(a.concat(t).concat(o),`email`)}catch{return[]}}}),this.user_list=Re(()=>[...this._user_search.value()??[]].sort((e,i)=>e.name.localeCompare(i.name))),this.loading=Re(()=>this._user_search.isLoading()),this.active_list=ht$1([]),this.validFn=e=>mt(e),this.emptyClick=()=>this.openNewUserModal(new Ze),this.search_valid_email=Re(()=>mt(this.search()))}updateSearch(e=``){this.timeout(`search`,()=>this.search.set(e))}addUserFromEmail(e=``){if(e||(e=this.search()),!mt(e))return;let i=new Ze({id:e,email:e,name:e.split(`@`)[0]});this.addUser(i);let{name:t,organisation:a}=i,o=`${e}|${t}|${a}|0`,y=this._settings.get(`visitor-invitees`)||[];this._settings.saveUserSetting(`visitor-invitees`,[...y.filter(k=>!k.includes(e)),o]),this.timeout(`clear_search`,()=>{this.search.set(``),this._search_el().nativeElement.value=``},100)}addUser(e){let i=e.id||e.email,t=this.active_list().filter(a=>(a.id||a.email)!==i);this.setValue([...t,new Ze(m(l({},e),{id:e.id||e.email,visit_expected:(!e.id&&e.is_external!==!0?e.visit_expected:null)??!0}))]),this.timeout(`clear_search`,()=>{this.search.set(``),this._search_el().nativeElement.value=``},100)}removeUser(e){let i=[...this.active_list()];e<0||e>=i.length||(i.splice(e,1),this.setValue(i))}getAttendeeInternational(e){return!!e?.extension_data?.international}getAttendeeType(e){return qa(e?.extension_data?.visitor_internal_or_external)}setAttendeeInternational(e,i){this._setAttendeeFlags(e,{international:!!i})}setAttendeeType(e,i){this._setAttendeeFlags(e,{visitor_internal_or_external:qa(i)})}_setAttendeeFlags(e,i){e&&this.setValue(this.active_list().map(t=>t===e?new Ze(m(l({},t),{extension_data:l(l({},t.extension_data),i)})):t))}addUsersFromFile(e){if(e.target){let i=e.target.files[0];if(i){if(!va.includes(i.type)||fa.includes(i.type)){oc(`Only CSV files are supported`);return}let t=new FileReader;t.readAsText(i,`UTF-8`),t.addEventListener(`load`,a=>{this.processCsvData(a.srcElement.result),e.target.value=``}),t.addEventListener(`error`,a=>oc(`Error reading file.`))}}}processCsvData(e){let i=ff(e)||[],t=P()?.staff_id||`unknown`;for(let a of i){a.name=a.name||`${a.first_name} ${a.last_name}`;let o=(a.name||`${Math.floor(Math.random()*99999999)}`).split(` `).join(`_`).toLowerCase();a.email||(a.email=`${o}+${t}@guest.${b}`);let y=this._settings.get(`app.bookings.internal_emails`)||[`place.tech`];a.visit_expected=a.visit_expected??!y.find(k=>a.email.endsWith(k)),a.phone=``+a.phone,this.addUser(new Ze(a))}}downloadCSVTemplate(){if(this.custom_template())return;pf(`template.csv`,`Organisation,First Name,Last Name,Email,Phone,Assistance Required,Visit Expected
Fake Org,John,Smith,john.smith@example.com,01234567898,false,true`)}setValue(e){this.active_list.set(e||[]),this._onChange&&this._onChange(e||[])}writeValue(e){this.active_list.set(e||[])}setDisabledState(e){this.disabled.set(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouch=e}displayFn(e){return e?.name||``}openNewUserModal(e=new Ze){let i=this._dialog.open(dn,{width:`auto`,height:`auto`,data:{user:e}}),t=i.componentInstance?.event;t&&T(t).pipe(zf(a=>a.reason===`done`)).subscribe(a=>{this.addUser(a.metadata),i.close()})}static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=Tb({type:n,selectors:[[`a-user-list-field`]],viewQuery:function(i,t){i&1&&py(t._search_el,ia,5),i&2&&$T()},inputs:{time:[1,`time`],disabled:[1,`disabled`],limit:[1,`limit`],guests:[1,`guests`],guests_only:[1,`guests_only`],hide_actions:[1,`hide_actions`],flags:[1,`flags`],custom_template:[1,`custom_template`],filter:[1,`filter`]},outputs:{disabled:`disabledChange`,new_user:`new_user`,download:`download`},features:[b_([{provide:ot$1,useExisting:os(()=>n),multi:!0}]),Hm],ngContentSelectors:na,decls:20,vars:13,consts:[[`origin`,`matAutocompleteOrigin`],[`chipList`,``],[`search_field`,``],[`auto`,`matAutocomplete`],[`form-field`,``,1,`mb-4`],[`search`,``],[`appearance`,`outline`,`matAutocompleteOrigin`,``,1,`w-full`],[`aria-label`,`User selection`],[`user`,``,3,`bg-base-200`,`bg-warning`,`matTooltip`],[`name`,`user_email`,3,`ngModelChange`,`matChipInputTokenEnd`,`placeholder`,`ngModel`,`matAutocomplete`,`matChipInputFor`,`matChipInputSeparatorKeyCodes`],[`diameter`,`24`,`matSuffix`,``],[1,`leading-tight`],[`actions`,``,1,`-mt-4`,`flex`,`items-center`,`space-x-2`],[1,`mt-2`,`flex`,`flex-col`],[`user`,``,3,`removed`,`matTooltip`],[1,`flex`,`items-center`,`space-x-2`],[`matChipRemove`,``,`remove`,``],[3,`click`],[1,`leading-tight`,3,`click`],[1,`-ml-2`,3,`user`],[1,`text-xs`,`opacity-30`],[1,`truncate`],[`btn`,``,`matRipple`,``,`type`,`button`,`name`,`new-contact`,1,`inverse`,`flex-1`,`sm:flex-none`,3,`click`],[1,`flex`,`items-center`,`justify-center`],[1,`hidden`,`sm:inline`],[1,`inline`,`sm:hidden`],[`btn`,``,`matRipple`,``,`type`,`button`,`name`,`upload-csv`,1,`inverse`,`relative`,`flex-1`,`sm:flex-none`],[`type`,`file`,1,`absolute`,`inset-0`,`opacity-0`,3,`change`],[`btn`,``,`matRipple`,``,`type`,`button`,`name`,`download-template`,1,`inverse`,`flex-1`,`sm:flex-none`,3,`click`],[1,`flex`,`flex-wrap`,`gap-x-4`,`gap-y-2`],[3,`ngModel`,`ngModelOptions`],[3,`ngModelChange`,`ngModel`,`ngModelOptions`],[1,`flex`,`flex-col`,`gap-y-2`],[1,`flex`,`flex-wrap`,`items-center`,`gap-x-4`],[`value`,`internal`],[`value`,`external`]],template:function(i,t){if(i&1&&(jT(),ea$1(0,`div`,4)(1,`div`,5)(2,`mat-form-field`,6,0)(4,`mat-chip-grid`,7,1),CT(6,ra,8,20,`mat-chip-row`,8,IT),gd(),ea$1(8,`input`,9,2),A_(10,`translate`),ay(`ngModelChange`,function(o){return t.updateSearch(o)})(`matChipInputTokenEnd`,function(o){return t.addUserFromEmail(o.value)}),gd(),LC(),DT(11,ca,1,0,`mat-spinner`,10),gd(),ea$1(12,`mat-autocomplete`,null,3),DT(14,sa,3,6,`mat-option`),CT(15,da,9,4,`mat-option`,11,wT),gd()(),DT(17,pa,27,18,`div`,12),DT(18,ma,7,3,`div`,13),DT(19,_a,7,3,`div`,13),gd()),i&2){let a=GT(5),o=GT(13);Jm(`disabled`,t.disabled()),Yw(6),bT(t.active_list()),Yw(2),ey(`placeholder`,O_(10,11,`FORM.USER_LIST_PLACEHOLDER`))(`ngModel`,t.search())(`matAutocomplete`,o)(`matChipInputFor`,a)(`matChipInputSeparatorKeyCodes`,t.separatorKeysCodes),jC(),Yw(3),ET(t.loading()?11:-1),Yw(3),ET(t.search_valid_email()?14:-1),Yw(),bT(t.user_list()),Yw(2),ET(t.hide_actions()?-1:17),Yw(),ET(t.show_international()&&t.active_list().length?18:-1),Yw(),ET(t.show_internal_or_external()&&t.active_list().length?19:-1)}},dependencies:[Sv,Kt,qe,xt,sn,rn,cn,on,ht,$i,Qi,Ho,ot,Wi,pe$1,ce$1,Re$1,re,W,xg,ta$1,Cg,md$1,Mt,yt,jf,Yt$1,mt$1,w$1,f],encapsulation:2})}}return n})();export{ot as a,_r as i,Qi as n,sn as o,Un as r,st as s,$i as t};
//# debugId=69b1cfd7-8728-5d2a-9240-82428a92a760
//# sourceMappingURL=chunk-BInhJ_4W2.js.map