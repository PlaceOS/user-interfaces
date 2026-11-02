import{n as m,t as l}from"./chunk-DzscigDP.js";import{$n as iy,$r as w,$t as Ym,A as FT,B as IT,Br as sy,C as Dd,Ct as Rp,Dr as pe,Er as pT,Fn as fr$1,Fr as rs,Gr as ue,Hn as gd,I as Gf,In as fy,It as UD,Jn as ha$1,Kn as hT,Kt as WT,Lt as UH,Mn as ey,Mt as T_,N as GD,Nn as fS,O as Er,On as ea$1,Or as pt$1,Pn as fT,Pr as r_,Pt as Te,Qr as vy,Rr as se,S as Db,Sn as dT,Sr as ny,St as Re,Tt as ST,Ur as uD,Vn as g_,Xn as he,Y as Kn$1,Yn as hd,Yt as X,Z as Lm,Zr as vw,Zt as YH,_r as mn$1,_t as Qm,an as Zm,at as OT,bt as RT,ci as xt,dt as Pd,ei as w_,en as Yo,f as BH,fi as y_,fn as b_,g as Br,gr as md,hr as m_,ii as xC,it as OD,kn as er,li as y,lr as ki,m as Bm,nn as Z,nt as NT,o as $s,or as kT,pt as Po,ri as x,s as $w,si as xT,sr as k_,ti as wv,tt as ND,u as Ap,ur as lT,ut as PH,vr as na$1,vt as RC,wn as dc,wt as SD,xn as dS,yn as cy,z as HH,zn as gT,zr as sg,zt as VH}from"./chunk-w_clFm31.js";import{Et as hf,N as Mu,Nt as ke,_n as zu,an as uc,b as Hf,bt as ff,ct as _i}from"./chunk-BFPoFtKo.js";import{A as q,B as vt,C as ge,D as le,E as jt,F as tr,N as sr,O as ms,R as v,S as fi,a as D,b as ci,g as Ut,j as qs,m as Tt,o as Dt,v as X$1,x as f,y as be,z as ve}from"./chunk-B17E2uQY.js";import{$ as Sg,Ct as dg,Et as dr,Ht as jo,J as P,Jt as le$1,M as Ja,N as Jn,S as Gm,Tt as dm,U as Oa,Xt as mg,d as Ce,fn as we,gn as xd,i as Ad,in as rm,k as Ia,lt as Xe,nt as Uc,o as Bc,vt as cg,x as Gc}from"./chunk-ChrM-_EM.js";import{c as Et,f as Xr,n as f$1,o as k,s as oe,t as N}from"./main.js";import{S as q$1,f as Vt,g as Yt,h as Xt,n as A,o as It,t as $,v as di}from"./chunk-C57z-79G.js";import{n as mt,t as Yt$1}from"./chunk-tJTlzMN8.js";import{a as de,c as rn$1,i as ae,l as rt$1,n as Ot,o as le$2,r as Pt,s as on$1}from"./chunk-CMpkiOJX.js";import{c as Da,d as Ea,it as vn,m as Ia$1,s as Cn$1,v as Oa$1}from"./chunk-BoFe6Xc9.js";import{r as Ts,t as Cs}from"./chunk-H1-lR1j1.js";import{n as Z$1,t as J}from"./chunk-DnsCvTD5.js";import{n as W,r as re,t as Re$1}from"./chunk-Bc5Q0VNl.js";import{t as w$1}from"./chunk-BTEc9T00.js";import{n as T}from"./chunk-D3Nufj6L2.js";var yn=[`panel`];var bn=[`*`];function Cn(n,d){if(n&1&&(gd(0,`div`,1,0),xT(2),md()),n&2){let e=d.id,i=ST();WT(i._classList),fy(`mat-mdc-autocomplete-visible`,i.showPanel)(`mat-mdc-autocomplete-hidden`,!i.showPanel)(`mat-autocomplete-panel-animations-enabled`,!i._animationsDisabled)(`mat-primary`,i._color===`primary`)(`mat-accent`,i._color===`accent`)(`mat-warn`,i._color===`warn`),ey(`id`,i.id),Zm(`aria-label`,i.ariaLabel||null)(`aria-labelledby`,i._getPanelAriaLabelledby(e))}}var it=class{source;option;constructor(d,e){this.source=d,this.option=e}};var Qi=new w(`mat-autocomplete-default-options`,{providedIn:`root`,factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})});var Wi=(()=>{class n{_changeDetectorRef=y(Pd);_elementRef=y(Kn$1);_defaults=y(Qi);_animationsDisabled=Dt();_activeOptionChanges=X.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new xt;opened=new xt;closed=new xt;optionActivated=new xt;set classList(e){this._classList=e,this._elementRef.nativeElement.className=``}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=y(ge).getId(`mat-autocomplete-`);inertGroups;constructor(){let e=y(f);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new be(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let i=new it(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let i=e?e+` `:``;return this.ariaLabelledby?i+this.ariaLabelledby:e}_skipPredicate(){return!1}static ɵfac=function(i){return new(i||n)};static ɵcmp=Db({type:n,selectors:[[`mat-autocomplete`]],contentQueries:function(i,t,a){if(i&1&&iy(a,Ia,5)(a,xd,5),i&2){let o;RT(o=OT())&&(t.options=o),RT(o=OT())&&(t.optionGroups=o)}},viewQuery:function(i,t){if(i&1&&sy(Br,7)(yn,5),i&2){let a;RT(a=OT())&&(t.template=a.first),RT(a=OT())&&(t.panel=a.first)}},hostAttrs:[1,`mat-mdc-autocomplete`],inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],displayWith:`displayWith`,autoActiveFirstOption:[2,`autoActiveFirstOption`,`autoActiveFirstOption`,dS],autoSelectActiveOption:[2,`autoSelectActiveOption`,`autoSelectActiveOption`,dS],requireSelection:[2,`requireSelection`,`requireSelection`,dS],panelWidth:`panelWidth`,disableRipple:[2,`disableRipple`,`disableRipple`,dS],classList:[0,`class`,`classList`],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,dS]},outputs:{optionSelected:`optionSelected`,opened:`opened`,closed:`closed`,optionActivated:`optionActivated`},exportAs:[`matAutocomplete`],features:[g_([{provide:Ad,useExisting:n}])],ngContentSelectors:bn,decls:1,vars:0,consts:[[`panel`,``],[`role`,`listbox`,1,`mat-mdc-autocomplete-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`id`]],template:function(i,t){i&1&&(NT(),Bm(0,Cn,3,17,`ng-template`))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2})}return n})();var $i=(()=>{class n{elementRef=y(Kn$1);static ɵfac=function(i){return new(i||n)};static ɵdir=ha$1({type:n,selectors:[[``,`matAutocompleteOrigin`,``]],exportAs:[`matAutocompleteOrigin`]})}return n})();var Sn={provide:Ce,useExisting:rs(()=>ot),multi:!0};var wn=new w(`mat-autocomplete-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=y(he);return()=>It(n)}});var ot=(()=>{class n{_environmentInjector=y(pe);_element=y(Kn$1);_injector=y(he);_viewContainerRef=y(er);_zone=y(ue);_changeDetectorRef=y(Pd);_dir=y(ci,{optional:!0});_formField=y(le$2,{optional:!0,host:!0});_viewportRuler=y(A);_scrollStrategy=y(wn);_renderer=y(Po);_animationsDisabled=Dt();_defaults=y(Qi,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new se;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=X.EMPTY;_breakpointObserver=y(le);_handsetLandscapeSubscription=X.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new se;_overlayPanelClass=q(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position=`auto`;connectedTo;autocompleteAttribute=`off`;autocompleteDisabled=!1;_aboveClass=`mat-mdc-autocomplete-panel-above`;ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen(`window`,`blur`,this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return ND(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(mn$1(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(mn$1(()=>this._overlayAttached)):ki()).pipe(Te(e=>e instanceof dr?e:null))}optionSelections=SD(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(UD(e),dc(()=>ND(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(dc(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new x(e=>{let i=a=>{let o=v(a),f=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,O=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&o!==this._element.nativeElement&&!this._hasFocus()&&(!f||!f.contains(o))&&(!O||!O.contains(o))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(o)&&e.next(a)},t=[this._renderer.listen(`document`,`click`,i),this._renderer.listen(`document`,`auxclick`,i),this._renderer.listen(`document`,`touchend`,i)];return()=>{t.forEach(a=>a())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let i=e,t=i.keyCode,a=vt(i);if(t===27&&!a&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&t===13&&this.panelOpen&&!a)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let o=this.autocomplete._keyManager.activeItem,f=t===38||t===40;t===9||f&&!a&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):f&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(f||this.autocomplete._keyManager.activeItem!==o)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,t=i.value;if(i.type===`number`&&(t=t==``?null:parseFloat(t)),this._previousValue!==t){if(this._previousValue=t,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(t),!t)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let a=this.autocomplete.options?.find(o=>o.selected);if(a){let o=this._getDisplayValue(a.value);t!==o&&a.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let a=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(a)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return Ut()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel===`auto`&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel=`always`,this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel=`auto`),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){return ND(new x(t=>{vw(()=>{t.next()},{injector:this._environmentInjector})}),this.autocomplete.options?.changes.pipe(GD(()=>this._positionStrategy.reapplyLastPosition()),OD(0))??ki()).pipe(dc(()=>this._zone.run(()=>{let t=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),t!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),fr$1(1)).subscribe(t=>this._setValueAndClose(t))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(e):e}_assignOptionValue(e){let i=this._getDisplayValue(e);e??this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??``)}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let i=this.autocomplete,t=e?e.source:this._pendingAutoselectedOption;t?(this._clearPreviousSelectedOption(t),this._assignOptionValue(t.value),this._onChange(t.value),i._emitSelectEvent(t),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,i){this.autocomplete?.options?.forEach(t=>{t!==e&&t.selected&&t.deselect(i)})}_openPanelInternal(e=this._element.nativeElement.value){this._attachOverlay(e),this._floatLabel()}_attachOverlay(e){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new $(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=Xt(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(ms.HandsetLandscape).subscribe(a=>{a.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let t=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this.panelOpen&&t!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!vt(e)||e.keyCode===38&&vt(e,`altKey`))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??``),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new q$1({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=Yt(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation(`inline`);return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let i=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}],t=this._aboveClass,a=[{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:t},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:t}],o;this.position===`above`?o=a:this.position===`below`?o=i:o=[...i,...a],e.withPositions(o)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let i=-1;for(let t=0;t<e.options.length;t++)if(!e.options.get(t).disabled){i=t;break}e._keyManager.setActiveItem(i)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let i=this.autocomplete,t=cg(e,i.options,i.optionGroups);if(e===0&&t===1)i._setScrollTop(0);else if(i.panel){let a=i.options.toArray()[e];if(a){let o=a._getHostElement(),f=dg(o.offsetTop,o.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(f)}}}static ɵfac=function(i){return new(i||n)};static ɵdir=ha$1({type:n,selectors:[[`input`,`matAutocomplete`,``],[`textarea`,`matAutocomplete`,``]],hostAttrs:[1,`mat-mdc-autocomplete-trigger`],hostVars:7,hostBindings:function(i,t){i&1&&ny(`focusin`,function(){return t._handleFocus()})(`blur`,function(){return t._onTouched()})(`input`,function(o){return t._handleInput(o)})(`keydown`,function(o){return t._handleKeydown(o)})(`click`,function(){return t._handleClick()}),i&2&&Zm(`autocomplete`,t.autocompleteAttribute)(`role`,t.autocompleteDisabled?null:`combobox`)(`aria-autocomplete`,t.autocompleteDisabled?null:`list`)(`aria-activedescendant`,t.panelOpen&&t.activeOption?t.activeOption.id:null)(`aria-expanded`,t.autocompleteDisabled?null:t.panelOpen.toString())(`aria-controls`,t.autocompleteDisabled||!t.panelOpen?null:t.autocomplete?.id)(`aria-haspopup`,t.autocompleteDisabled?null:`listbox`)},inputs:{autocomplete:[0,`matAutocomplete`,`autocomplete`],position:[0,`matAutocompletePosition`,`position`],connectedTo:[0,`matAutocompleteConnectedTo`,`connectedTo`],autocompleteAttribute:[0,`autocomplete`,`autocompleteAttribute`],autocompleteDisabled:[2,`matAutocompleteDisabled`,`autocompleteDisabled`,dS]},exportAs:[`matAutocompleteTrigger`],features:[g_([Sn]),na$1]})}return n})();var Yi=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Yo({type:n});static ɵinj=Er({imports:[di,Sg,Vt,Sg,Tt]})}return n})();var Mn=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]];var In=[`*`,`mat-chip-avatar, [matChipAvatar]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function En(n,d){n&1&&(ea$1(0,`span`,3),xT(1,1),hd())}function kn(n,d){n&1&&(ea$1(0,`span`,6),xT(1,2),hd())}var An=`.mdc-evolution-chip,
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
`;var Fn=[[[``,`matChipEdit`,``]],[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[``,`matChipEditInput`,``]],`*`,[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]];var On=[`[matChipEdit]`,`mat-chip-avatar, [matChipAvatar]`,`[matChipEditInput]`,`*`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function Dn(n,d){n&1&&Qm(0,`span`,0)}function Tn(n,d){n&1&&(ea$1(0,`span`,1),xT(1),hd())}function Rn(n,d){n&1&&(ea$1(0,`span`,3),xT(1,1),hd())}function Pn(n,d){n&1&&xT(0,2)}function Ln(n,d){n&1&&Qm(0,`span`,7)}function Bn(n,d){if(n&1&&lT(0,Pn,1,0)(1,Ln,1,0,`span`,7),n&2)dT(ST().contentEditInput?0:1)}function Vn(n,d){n&1&&xT(0,3)}function Un(n,d){n&1&&(ea$1(0,`span`,6),xT(1,4),hd())}var nn=[`*`];var Hn=`.mat-mdc-chip-set {
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
`;var an=new w(`mat-chips-default-options`,{providedIn:`root`,factory:()=>({separatorKeyCodes:[13]})});var Xi=new w(`MatChipAvatar`);var Zi=new w(`MatChipTrailingIcon`);var Ji=new w(`MatChipEdit`);var ct=new w(`MatChipRemove`);var dt=new w(`MatChip`);var on=(()=>{class n{_elementRef=y(Kn$1);_parentChip=y(dt);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?``:null}constructor(){y(D).load(tr),this._elementRef.nativeElement.nodeName===`BUTTON`&&this._elementRef.nativeElement.setAttribute(`type`,`button`)}focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(i){return new(i||n)};static ɵdir=ha$1({type:n,selectors:[[``,`matChipContent`,``]],hostAttrs:[1,`mat-mdc-chip-action`,`mdc-evolution-chip__action`,`mdc-evolution-chip__action--presentational`],hostVars:8,hostBindings:function(i,t){i&2&&(Zm(`disabled`,t._getDisabledAttribute())(`aria-disabled`,t.disabled),fy(`mdc-evolution-chip__action--primary`,t._isPrimary)(`mdc-evolution-chip__action--secondary`,!t._isPrimary)(`mdc-evolution-chip__action--trailing`,!t._isPrimary&&!t._isLeading))},inputs:{disabled:[2,`disabled`,`disabled`,dS],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?-1:fS(e)],_allowFocusWhenDisabled:`_allowFocusWhenDisabled`}})}return n})();var pt=(()=>{class n extends on{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static ɵfac=(()=>{let e;return function(t){return(e||(e=sg(n)))(t||n)}})();static ɵdir=ha$1({type:n,selectors:[[``,`matChipAction`,``]],hostVars:3,hostBindings:function(i,t){i&1&&ny(`click`,function(o){return t._handleClick(o)})(`keydown`,function(o){return t._handleKeydown(o)}),i&2&&(Zm(`tabindex`,t._getTabindex()),fy(`mdc-evolution-chip__action--presentational`,!1))},features:[Lm]})}return n})();var rn=(()=>{class n extends pt{_isPrimary=!1;_handleClick(e){this.disabled||(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}static ɵfac=(()=>{let e;return function(t){return(e||(e=sg(n)))(t||n)}})();static ɵdir=ha$1({type:n,selectors:[[``,`matChipRemove`,``]],hostAttrs:[`role`,`button`,1,`mat-mdc-chip-remove`,`mat-mdc-chip-trailing-icon`,`mat-focus-indicator`,`mdc-evolution-chip__icon`,`mdc-evolution-chip__icon--trailing`],hostVars:1,hostBindings:function(i,t){i&2&&Zm(`aria-hidden`,null)},features:[g_([{provide:ct,useExisting:n}]),Lm]})}return n})();var st=(()=>{class n{_changeDetectorRef=y(Pd);_elementRef=y(Kn$1);_tagName=y(PH);_ngZone=y(ue);_focusMonitor=y(jt);_globalRippleOptions=y(fi,{optional:!0});_document=y(Z);_onFocus=new se;_onBlur=new se;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=Dt();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=y(ge).getId(`mat-mdc-chip-`);ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new xt;destroyed=new xt;basicChipAttrName=`mat-basic-chip`;leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=y(N);_injector=y(he);constructor(){let e=y(D);e.load(tr),e.load(X$1),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:`mat-mdc-chip-ripple`,disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(`.mat-mdc-chip-action-label`),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=ND(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(i=>{let t=i._elementRef.nativeElement;return t===e||t.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let i=e!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static ɵfac=function(i){return new(i||n)};static ɵcmp=Db({type:n,selectors:[[`mat-basic-chip`],[``,`mat-basic-chip`,``],[`mat-chip`],[``,`mat-chip`,``]],contentQueries:function(i,t,a){if(i&1&&iy(a,Xi,5)(a,Ji,5)(a,Zi,5)(a,ct,5)(a,Xi,5)(a,Zi,5)(a,Ji,5)(a,ct,5),i&2){let o;RT(o=OT())&&(t.leadingIcon=o.first),RT(o=OT())&&(t.editIcon=o.first),RT(o=OT())&&(t.trailingIcon=o.first),RT(o=OT())&&(t.removeIcon=o.first),RT(o=OT())&&(t._allLeadingIcons=o),RT(o=OT())&&(t._allTrailingIcons=o),RT(o=OT())&&(t._allEditIcons=o),RT(o=OT())&&(t._allRemoveIcons=o)}},viewQuery:function(i,t){if(i&1&&sy(pt,5),i&2){let a;RT(a=OT())&&(t.primaryAction=a.first)}},hostAttrs:[1,`mat-mdc-chip`],hostVars:31,hostBindings:function(i,t){i&1&&ny(`keydown`,function(o){return t._handleKeydown(o)}),i&2&&(ey(`id`,t.id),Zm(`role`,t.role)(`aria-label`,t.ariaLabel),WT(`mat-`+(t.color||`primary`)),fy(`mdc-evolution-chip`,!t._isBasicChip)(`mdc-evolution-chip--disabled`,t.disabled)(`mdc-evolution-chip--with-trailing-action`,t._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,t.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,t.leadingIcon)(`mdc-evolution-chip--with-avatar`,t.leadingIcon)(`mat-mdc-chip-with-avatar`,t.leadingIcon)(`mat-mdc-chip-highlighted`,t.highlighted)(`mat-mdc-chip-disabled`,t.disabled)(`mat-mdc-basic-chip`,t._isBasicChip)(`mat-mdc-standard-chip`,!t._isBasicChip)(`mat-mdc-chip-with-trailing-icon`,t._hasTrailingIcon())(`_mat-animation-noopable`,t._animationsDisabled))},inputs:{role:`role`,id:`id`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaDescription:[0,`aria-description`,`ariaDescription`],value:`value`,color:`color`,removable:[2,`removable`,`removable`,dS],highlighted:[2,`highlighted`,`highlighted`,dS],disableRipple:[2,`disableRipple`,`disableRipple`,dS],disabled:[2,`disabled`,`disabled`,dS]},outputs:{removed:`removed`,destroyed:`destroyed`},exportAs:[`matChip`],features:[g_([{provide:dt,useExisting:n}])],ngContentSelectors:In,decls:8,vars:2,consts:[[1,`mat-mdc-chip-focus-overlay`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipContent`,``],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`]],template:function(i,t){i&1&&(NT(Mn),Qm(0,`span`,0),ea$1(1,`span`,1)(2,`span`,2),lT(3,En,2,0,`span`,3),ea$1(4,`span`,4),xT(5),Qm(6,`span`,5),hd()()(),lT(7,kn,2,0,`span`,6)),i&2&&($w(3),dT(t.leadingIcon?3:-1),$w(4),dT(t._hasTrailingIcon()?7:-1))},dependencies:[on],styles:[`.mdc-evolution-chip,
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
`],encapsulation:2})}return n})();var rt=(()=>{class n{_elementRef=y(Kn$1);_document=y(Z);initialize(e){this.getNativeElement().focus(),this.setValue(e)}getNativeElement(){return this._elementRef.nativeElement}setValue(e){this.getNativeElement().textContent=e,this._moveCursorToEndOfInput()}getValue(){return this.getNativeElement().textContent||``}_moveCursorToEndOfInput(){let e=this._document.createRange();e.selectNodeContents(this.getNativeElement()),e.collapse(!1);let i=window.getSelection();i.removeAllRanges(),i.addRange(e)}static ɵfac=function(i){return new(i||n)};static ɵdir=ha$1({type:n,selectors:[[`span`,`matChipEditInput`,``]],hostAttrs:[`role`,`textbox`,`tabindex`,`-1`,`contenteditable`,`true`,1,`mat-chip-edit-input`]})}return n})();var ht=(()=>{class n extends st{basicChipAttrName=`mat-basic-chip-row`;_renderer=y(Po);_cleanupMousedown;_editStartPending=!1;editable=!1;edited=new xt;defaultEditInput;contentEditInput;_alreadyFocused=!1;_isEditing=!1;constructor(){super(),this.role=`row`,this._onBlur.pipe(uD(this.destroyed)).subscribe(()=>{this._isEditing&&!this._editStartPending&&this._onEditFinish(),this._alreadyFocused=!1})}ngAfterViewInit(){super.ngAfterViewInit(),this._cleanupMousedown=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`mousedown`,()=>{this._alreadyFocused=this._hasFocus()}))}ngOnDestroy(){super.ngOnDestroy(),this._cleanupMousedown?.()}_hasLeadingActionIcon(){return!this._isEditing&&!!this.editIcon}_hasTrailingIcon(){return!this._isEditing&&super._hasTrailingIcon()}_handleFocus(){!this._isEditing&&!this.disabled&&this.focus()}_handleKeydown(e){e.keyCode===13&&!this.disabled?this._isEditing?(e.preventDefault(),this._onEditFinish()):this.editable&&this._startEditing(e):this._isEditing?e.stopPropagation():super._handleKeydown(e)}_handleClick(e){!this.disabled&&this.editable&&!this._isEditing&&this._alreadyFocused&&(e.preventDefault(),e.stopPropagation(),this._startEditing(e))}_handleDoubleclick(e){!this.disabled&&this.editable&&this._startEditing(e)}_edit(){this._changeDetectorRef.markForCheck(),this._startEditing()}_startEditing(e){if(!this.primaryAction||this.removeIcon&&e&&this._getSourceAction(e.target)===this.removeIcon)return;let i=this.value;this._isEditing=this._editStartPending=!0,vw(()=>{this._getEditInput().initialize(i),setTimeout(()=>this._ngZone.run(()=>this._editStartPending=!1))},{injector:this._injector})}_onEditFinish(){this._isEditing=this._editStartPending=!1,this.edited.emit({chip:this,value:this._getEditInput().getValue()}),(this._document.activeElement===this._getEditInput().getNativeElement()||this._document.activeElement===this._document.body)&&this.primaryAction.focus()}_isRippleDisabled(){return super._isRippleDisabled()||this._isEditing}_getEditInput(){return this.contentEditInput||this.defaultEditInput}static ɵfac=function(i){return new(i||n)};static ɵcmp=Db({type:n,selectors:[[`mat-chip-row`],[``,`mat-chip-row`,``],[`mat-basic-chip-row`],[``,`mat-basic-chip-row`,``]],contentQueries:function(i,t,a){if(i&1&&iy(a,rt,5),i&2){let o;RT(o=OT())&&(t.contentEditInput=o.first)}},viewQuery:function(i,t){if(i&1&&sy(rt,5),i&2){let a;RT(a=OT())&&(t.defaultEditInput=a.first)}},hostAttrs:[1,`mat-mdc-chip`,`mat-mdc-chip-row`,`mdc-evolution-chip`],hostVars:29,hostBindings:function(i,t){i&1&&ny(`focus`,function(){return t._handleFocus()})(`click`,function(o){return t._hasInteractiveActions()?t._handleClick(o):null})(`dblclick`,function(o){return t._handleDoubleclick(o)}),i&2&&(ey(`id`,t.id),Zm(`tabindex`,t.disabled?null:-1)(`aria-label`,null)(`aria-description`,null)(`role`,t.role),fy(`mat-mdc-chip-with-avatar`,t.leadingIcon)(`mat-mdc-chip-disabled`,t.disabled)(`mat-mdc-chip-editing`,t._isEditing)(`mat-mdc-chip-editable`,t.editable)(`mdc-evolution-chip--disabled`,t.disabled)(`mdc-evolution-chip--with-leading-action`,t._hasLeadingActionIcon())(`mdc-evolution-chip--with-trailing-action`,t._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,t.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,t.leadingIcon)(`mdc-evolution-chip--with-avatar`,t.leadingIcon)(`mat-mdc-chip-highlighted`,t.highlighted)(`mat-mdc-chip-with-trailing-icon`,t._hasTrailingIcon()))},inputs:{editable:`editable`},outputs:{edited:`edited`},features:[g_([{provide:st,useExisting:n},{provide:dt,useExisting:n}]),Lm],ngContentSelectors:On,decls:9,vars:8,consts:[[1,`mat-mdc-chip-focus-overlay`],[`role`,`gridcell`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--leading`],[`role`,`gridcell`,`matChipAction`,``,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`,3,`disabled`],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[`aria-hidden`,`true`,1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[`role`,`gridcell`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`],[`matChipEditInput`,``]],template:function(i,t){i&1&&(NT(Fn),lT(0,Dn,1,0,`span`,0),lT(1,Tn,2,0,`span`,1),ea$1(2,`span`,2),lT(3,Rn,2,0,`span`,3),ea$1(4,`span`,4),lT(5,Bn,2,1)(6,Vn,1,0),Qm(7,`span`,5),hd()(),lT(8,Un,2,0,`span`,6)),i&2&&(dT(t._isEditing?-1:0),$w(),dT(t._hasLeadingActionIcon()?1:-1),$w(),Ym(`disabled`,t.disabled),Zm(`aria-description`,t.ariaDescription)(`aria-label`,t.ariaLabel),$w(),dT(t.leadingIcon?3:-1),$w(2),dT(t._isEditing?5:6),$w(3),dT(t._hasTrailingIcon()?8:-1))},dependencies:[pt,rt],styles:[An],encapsulation:2})}return n})();var zn=(()=>{class n{_elementRef=y(Kn$1);_changeDetectorRef=y(Pd);_dir=y(ci,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new se;_defaultRole=`presentation`;get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new $s;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(UD(null),dc(()=>ND(...this._chips.map(e))))}_originatesFromChip(e){let i=e.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains(`mat-mdc-chip`))return!0;i=i.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(UD(this._chips)).subscribe(e=>{let i=[];e.forEach(t=>t._getActions().forEach(a=>i.push(a))),this._chipActions.reset(i),this._chipActions.notifyOnChanges()}),this._keyManager=new ve(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:`ltr`).withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(uD(this._destroyed)).subscribe(({chip:e})=>{let i=e._getSourceAction(document.activeElement);i&&this._keyManager.updateActiveItem(i)}),this._dir?.change.pipe(uD(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(UD(null),uD(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(uD(this._destroyed)).subscribe(e=>{let t=this._chips.toArray().indexOf(e.chip),a=e.chip._hasFocus(),o=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),f=a||o;this._isValidIndex(t)&&f&&(this._lastDestroyedFocusedChipIndex=t)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),i=this._chips.toArray()[e];i.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():i.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static ɵfac=function(i){return new(i||n)};static ɵcmp=Db({type:n,selectors:[[`mat-chip-set`]],contentQueries:function(i,t,a){if(i&1&&iy(a,st,5),i&2){let o;RT(o=OT())&&(t._chips=o)}},hostAttrs:[1,`mat-mdc-chip-set`,`mdc-evolution-chip-set`],hostVars:1,hostBindings:function(i,t){i&1&&ny(`keydown`,function(o){return t._handleKeydown(o)}),i&2&&Zm(`role`,t.role)},inputs:{disabled:[2,`disabled`,`disabled`,dS],role:`role`,tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:fS(e)]},ngContentSelectors:nn,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(i,t){i&1&&(NT(),gd(0,`div`,0),xT(1),md())},styles:[`.mat-mdc-chip-set {
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
`],encapsulation:2})}return n})();var lt=class{source;value;constructor(d,e){this.source=d,this.value=e}};var cn=(()=>{class n extends zn{ngControl=y(we,{optional:!0,self:!0});controlType=`mat-chip-grid`;_chipInput;_defaultRole=`grid`;_errorStateTracker;_uid=y(ge).getId(`mat-chip-grid-`);_ariaDescribedbyIds=[];_onTouched=()=>{};_onChange=()=>{};get disabled(){return this.ngControl?!!this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=e,this._syncChipsState(),this.stateChanges.next()}get id(){return this._chipInput?this._chipInput.id:this._uid}get empty(){return(!this._chipInput||this._chipInput.empty)&&(!this._chips||this._chips.length===0)}get placeholder(){return this._chipInput?this._chipInput.placeholder:this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder=``;get focused(){return this._chipInput?.focused||this._hasFocusedChip()}get required(){return this._required??this.ngControl?.control?.hasValidator(Jn.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get shouldLabelFloat(){return!this.empty||this.focused}get value(){return this._value}set value(e){this._value=e}_value=[];get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}change=new xt;valueChange=new xt;_chips=void 0;stateChanges=new se;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(){super();let e=y(Uc,{optional:!0}),i=y(Bc,{optional:!0}),t=y(mg),a=y(Et,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._errorStateTracker=new Oa(t,a||this.ngControl,i,e,this.stateChanges)}ngAfterContentInit(){this.chipBlurChanges.pipe(uD(this._destroyed)).subscribe(()=>{this._blur(),this.stateChanges.next()}),ND(this.chipFocusChanges,this._chips.changes).pipe(uD(this._destroyed)).subscribe(()=>this.stateChanges.next())}ngDoCheck(){this.ngControl&&this.updateErrorState()}ngOnDestroy(){super.ngOnDestroy(),this.stateChanges.complete()}registerInput(e){this._chipInput=e,this._chipInput.setDescribedByIds(this._ariaDescribedbyIds),this._elementRef.nativeElement.removeAttribute(`aria-describedby`)}onContainerClick(e){!this.disabled&&!this._originatesFromChip(e)&&this.focus()}focus(){if(!(this.disabled||this._chipInput?.focused)){if(!this._chips.length||this._chips.first.disabled){if(!this._chipInput)return;Promise.resolve().then(()=>this._chipInput.focus())}else{let e=this._keyManager.activeItem;e?e.focus():this._keyManager.setFirstItemActive()}this.stateChanges.next()}}get describedByIds(){if(this._chipInput)return this._chipInput.describedByIds||[];let e=this._elementRef.nativeElement.getAttribute(`aria-describedby`);return e?e.split(` `):[]}setDescribedByIds(e){this._ariaDescribedbyIds=e,this._chipInput?this._chipInput.setDescribedByIds(e):e.length?this._elementRef.nativeElement.setAttribute(`aria-describedby`,e.join(` `)):this._elementRef.nativeElement.removeAttribute(`aria-describedby`)}writeValue(e){this._value=e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this.stateChanges.next()}updateErrorState(){this._errorStateTracker.updateErrorState()}_blur(){this.disabled||setTimeout(()=>{this.focused||(this._propagateChanges(),this._markAsTouched())})}_allowFocusEscape(){this._chipInput?.focused||super._allowFocusEscape()}_handleKeydown(e){let i=e.keyCode,t=this._keyManager.activeItem;if(i===9)this._chipInput?.focused&&vt(e,`shiftKey`)&&this._chips.length&&!this._chips.last.disabled?(e.preventDefault(),t?this._keyManager.setActiveItem(t):this._focusLastChip()):super._allowFocusEscape();else if(!this._chipInput?.focused)if((i===38||i===40)&&t){let a=this._chipActions.filter(O=>O._isPrimary===t._isPrimary&&!this._skipPredicate(O)),o=a.indexOf(t),f=e.keyCode===38?-1:1;e.preventDefault(),o>-1&&this._isValidIndex(o+f)&&this._keyManager.setActiveItem(a[o+f])}else super._handleKeydown(e);this.stateChanges.next()}_redirectDestroyedChipFocus(){this._lastDestroyedFocusedChipIndex!==null&&(super._redirectDestroyedChipFocus(),(!this._chips.length||this._chips.length===1&&this._chips.first.disabled)&&this._keyManager.updateActiveItem(-1))}_focusLastChip(){this._chips.length&&this._chips.last.focus()}_propagateChanges(){let e=this._chips.length?this._chips.toArray().map(i=>i.value):[];this._value=e,this.change.emit(new lt(this,e)),this.valueChange.emit(e),this._onChange(e),this._changeDetectorRef.markForCheck()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next()}static ɵfac=function(i){return new(i||n)};static ɵcmp=Db({type:n,selectors:[[`mat-chip-grid`]],contentQueries:function(i,t,a){if(i&1&&iy(a,ht,5),i&2){let o;RT(o=OT())&&(t._chips=o)}},hostAttrs:[1,`mat-mdc-chip-set`,`mat-mdc-chip-grid`,`mdc-evolution-chip-set`],hostVars:10,hostBindings:function(i,t){i&1&&ny(`focus`,function(){return t.focus()})(`blur`,function(){return t._blur()}),i&2&&(Zm(`role`,t.role)(`tabindex`,t.disabled||t._chips&&t._chips.length===0?-1:t.tabIndex)(`aria-disabled`,t.disabled.toString())(`aria-invalid`,t.errorState),fy(`mat-mdc-chip-list-disabled`,t.disabled)(`mat-mdc-chip-list-invalid`,t.errorState)(`mat-mdc-chip-list-required`,t.required))},inputs:{disabled:[2,`disabled`,`disabled`,dS],placeholder:`placeholder`,required:[2,`required`,`required`,dS],value:`value`,errorStateMatcher:`errorStateMatcher`},outputs:{change:`change`,valueChange:`valueChange`},features:[g_([{provide:ae,useExisting:n}]),Lm],ngContentSelectors:nn,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(i,t){i&1&&(NT(),gd(0,`div`,0),xT(1),md())},styles:[Hn],encapsulation:2})}return n})();var sn=(()=>{class n{_elementRef=y(Kn$1);focused=!1;get chipGrid(){return this._chipGrid}set chipGrid(e){e&&(this._chipGrid=e,this._chipGrid.registerInput(this))}_chipGrid;addOnBlur=!1;separatorKeyCodes;chipEnd=new xt;placeholder=``;id=y(ge).getId(`mat-mdc-chip-list-input-`);get disabled(){return this._disabled||this._chipGrid&&this._chipGrid.disabled}set disabled(e){this._disabled=e}_disabled=!1;readonly=!1;disabledInteractive;get empty(){return!this.inputElement.value}inputElement;constructor(){let e=y(an),i=y(le$2,{optional:!0});this.inputElement=this._elementRef.nativeElement,this.separatorKeyCodes=e.separatorKeyCodes,this.disabledInteractive=e.inputDisabledInteractive??!1,i&&this.inputElement.classList.add(`mat-mdc-form-field-input-control`)}ngOnChanges(){this._chipGrid.stateChanges.next()}ngOnDestroy(){this.chipEnd.complete()}_keydown(e){this.empty&&e.keyCode===8?(e.repeat||this._chipGrid._focusLastChip(),e.preventDefault()):this._emitChipEnd(e)}_blur(){this.addOnBlur&&this._emitChipEnd(),this.focused=!1,this._chipGrid.focused||this._chipGrid._blur(),this._chipGrid.stateChanges.next()}_focus(){this.focused=!0,this._chipGrid.stateChanges.next()}_emitChipEnd(e){(!e||this._isSeparatorKey(e)&&!e.repeat)&&(this.chipEnd.emit({input:this.inputElement,value:this.inputElement.value,chipInput:this}),e?.preventDefault())}_onInput(){this._chipGrid.stateChanges.next()}focus(){this.inputElement.focus()}clear(){this.inputElement.value=``}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute(`aria-describedby`,e.join(` `)):i.removeAttribute(`aria-describedby`)}_isSeparatorKey(e){if(!this.separatorKeyCodes)return!1;for(let i of this.separatorKeyCodes){let t,a;typeof i==`number`?(t=i,a=null):(t=i.keyCode,a=i.modifiers);let o=a?.length?vt(e,...a):!vt(e);if(t===e.keyCode&&o)return!0}return!1}_getReadonlyAttribute(){return this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(i){return new(i||n)};static ɵdir=ha$1({type:n,selectors:[[`input`,`matChipInputFor`,``]],hostAttrs:[1,`mat-mdc-chip-input`,`mat-mdc-input-element`,`mdc-text-field__input`,`mat-input-element`],hostVars:8,hostBindings:function(i,t){i&1&&ny(`keydown`,function(o){return t._keydown(o)})(`blur`,function(){return t._blur()})(`focus`,function(){return t._focus()})(`input`,function(){return t._onInput()}),i&2&&(ey(`id`,t.id),Zm(`disabled`,t.disabled&&!t.disabledInteractive?``:null)(`placeholder`,t.placeholder||null)(`aria-invalid`,t._chipGrid&&t._chipGrid.ngControl?t._chipGrid.ngControl.invalid:null)(`aria-required`,t._chipGrid&&t._chipGrid.required||null)(`aria-disabled`,t.disabled&&t.disabledInteractive?`true`:null)(`readonly`,t._getReadonlyAttribute())(`required`,t._chipGrid&&t._chipGrid.required||null))},inputs:{chipGrid:[0,`matChipInputFor`,`chipGrid`],addOnBlur:[2,`matChipInputAddOnBlur`,`addOnBlur`,dS],separatorKeyCodes:[0,`matChipInputSeparatorKeyCodes`,`separatorKeyCodes`],placeholder:`placeholder`,id:`id`,disabled:[2,`disabled`,`disabled`,dS],readonly:[2,`readonly`,`readonly`,dS],disabledInteractive:[2,`matChipInputDisabledInteractive`,`disabledInteractive`,dS]},outputs:{chipEnd:`matChipInputTokenEnd`},exportAs:[`matChipInput`,`matChipInputFor`],features:[na$1]})}return n})();var ln=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Yo({type:n});static ɵinj=Er({providers:[mg,{provide:an,useValue:{separatorKeyCodes:[13]}}],imports:[sr,Tt]})}return n})();function Kn(n,d){if(n&1&&(ea$1(0,`div`,1)(1,`label`,2),r_(2,` Name`),ea$1(3,`span`),r_(4,`*`),hd(),r_(5,`: `),hd(),ea$1(6,`mat-form-field`,3),Qm(7,`input`,4),xC(),ea$1(8,`mat-error`),r_(9,`Name is required`),hd()()()),n&2){let e=ST(2);$w(),fy(`error`,e.hasError(`name`)),$w(6),Ym(`formField`,e.form().name),RC()}}function Qn(n,d){if(n&1&&(ea$1(0,`div`,1)(1,`label`,5),r_(2,` Email`),ea$1(3,`span`),r_(4,`*`),hd(),r_(5,`: `),hd(),ea$1(6,`mat-form-field`,3),Qm(7,`input`,6),xC(),ea$1(8,`mat-error`),r_(9,`A valid email is required`),hd()()()),n&2){let e=ST(2);$w(),fy(`error`,e.hasError(`email`)),$w(6),Ym(`formField`,e.form().email),RC()}}function Wn(n,d){if(n&1&&(ea$1(0,`div`,1)(1,`label`,7),r_(2),w_(3,`translate`),ea$1(4,`span`),r_(5,`*`),hd(),r_(6,`: `),hd(),ea$1(7,`mat-form-field`,3),Qm(8,`input`,8),xC(),ea$1(9,`mat-error`),r_(10),w_(11,`translate`),hd()()()),n&2){let e=ST(2);$w(),fy(`error`,e.hasError(`organisation`)),$w(),Dd(` `,b_(3,5,`COMMON.ORGANISATION`)),$w(6),Ym(`formField`,e.form().organisation),RC(),$w(2),Dd(` `,b_(11,7,`COMMON.ORGANISATION`),` is required `)}}function $n(n,d){if(n&1&&(ea$1(0,`div`,1)(1,`label`,9),r_(2,` Phone: `),hd(),ea$1(3,`mat-form-field`,3),Qm(4,`input`,10),xC(),ea$1(5,`mat-error`),r_(6,`Phone format is invalid`),hd()()()),n&2){let e=ST(2);$w(),fy(`error`,e.hasError(`phone`)),$w(3),Ym(`formField`,e.form().phone),RC()}}function Yn(n,d){if(n&1&&(ea$1(0,`div`,1)(1,`mat-checkbox`,11),r_(2,` Assistance required `),hd(),xC(),hd()),n&2){let e=ST(2);$w(),Ym(`formField`,e.form().assistance_required),RC()}}function Xn(n,d){if(n&1&&(ea$1(0,`div`,1)(1,`mat-checkbox`,11),r_(2,` Visit expected `),hd(),xC(),hd()),n&2){let e=ST(2);$w(),Ym(`formField`,e.form().visit_expected),RC()}}function Zn(n,d){if(n&1&&(ea$1(0,`form`,0),lT(1,Kn,10,3,`div`,1),lT(2,Qn,10,3,`div`,1),lT(3,Wn,12,9,`div`,1),lT(4,$n,7,3,`div`,1),lT(5,Yn,3,1,`div`,1),lT(6,Xn,3,1,`div`,1),hd()),n&2){let e=ST();$w(),dT(e.form().name?1:-1),$w(),dT(e.form().email?2:-1),$w(),dT(e.form().organisation?3:-1),$w(),dT(e.form().phone?4:-1),$w(),dT(e.form().assistance_required?5:-1),$w(),dT(e.form().visit_expected?6:-1)}}var dn=(()=>{class n{constructor(){this.form=VH(void 0)}hasError(e){let i=this.form()?.[e];return!!i&&i().invalid()&&i().touched()}static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=Db({type:n,selectors:[[`user-form`]],inputs:{form:[1,`form`]},decls:1,vars:1,consts:[[`user-form`,``,1,`w-full`],[1,`flex`,`w-full`,`flex-col`],[`for`,`name`],[`appearance`,`outline`],[`matInput`,``,`placeholder`,`Name`,3,`formField`],[`for`,`email`],[`matInput`,``,`placeholder`,`Email Address`,3,`formField`],[`for`,`org`],[`matInput`,``,`placeholder`,`e.g. Conteso`,3,`formField`],[`for`,`phone`],[`matInput`,``,`type`,`tel`,`placeholder`,`Phone`,3,`formField`],[`color`,`primary`,3,`formField`]],template:function(i,t){i&1&&lT(0,Zn,7,6,`form`,0),i&2&&dT(t.form()?0:-1)},dependencies:[Ia$1,Cn$1,de,rt$1,Ot,rn$1,on$1,Xr,f$1],styles:[`[_nghost-%COMP%], mat-form-field[_ngcontent-%COMP%]{width:100%}
/*# sourceMappingURL=user-form.component.css.map */`]})}}return n})();function ea(n,d){n&1&&(ea$1(0,`button`,2)(1,`icon`),r_(2,`close`),hd()())}function ta(n,d){if(n&1&&(ea$1(0,`main`,3),Qm(1,`user-form`,6),hd()),n&2){let e=ST();$w(),Ym(`form`,e.form())}}function ia(n,d){n&1&&(ea$1(0,`main`,4),Qm(1,`mat-spinner`,7),ea$1(2,`p`),r_(3),w_(4,`translate`),hd()()),n&2&&($w(3),vy(b_(4,1,`COMMON.USER_SAVING`)))}function na(n,d){if(n&1){let e=IT();ea$1(0,`footer`,5)(1,`button`,8),r_(2),w_(3,`translate`),hd(),ea$1(4,`button`,9),ny(`click`,function(){Ap(e);return Rp(ST().saveChanges())}),r_(5),w_(6,`translate`),hd()()}n&2&&($w(2),Dd(` `,b_(3,2,`COMMON.CANCEL`),` `),$w(3),Dd(` `,b_(6,4,`COMMON.SAVE`),` `))}var pn=(()=>{class n extends Mu{constructor(){super(),this._data=y(vn),this.event=BH(),this.user=pt$1(void 0),this.form=pt$1(oe(new Xe)),this.loading=pt$1(!1);let e=this._data.user||{};this.user.set(e),this.form.set(oe(e))}saveChanges(){let e=this.form();if(e&&(e().markAsTouched(),e().valid())){let i=new Xe(m(l({},e().value()),{is_external:!0}));this.event.emit({reason:`done`,metadata:i})}}static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=Db({type:n,selectors:[[`new-user-modal`]],outputs:{event:`event`},features:[Lm],decls:8,vars:6,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[1,`flex`,`w-full`,`min-w-[24rem]`,`flex-col`,`items-center`,`px-4`],[1,`flex`,`w-full`,`flex-col`,`items-center`,`space-y-2`,`p-2`],[1,`border-base-200`,`flex`,`w-full`,`items-center`,`justify-end`,`space-x-2`,`border-t`,`p-2`],[3,`form`],[`diameter`,`32`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`],[`btn`,``,`matRipple`,``,3,`click`]],template:function(i,t){i&1&&(ea$1(0,`header`,0)(1,`h2`,1),r_(2),w_(3,`translate`),hd(),lT(4,ea,3,0,`button`,2),hd(),lT(5,ta,2,1,`main`,3)(6,ia,5,3,`main`,4),lT(7,na,7,6,`footer`,5)),i&2&&($w(2),Dd(` `,b_(3,4,t.user()?.id?`COMMON.USER_EDIT`:`COMMON.USER_NEW`),` `),$w(2),dT(t.loading()?-1:4),$w(),dT(t.loading()?6:5),$w(2),dT(t.loading()?-1:7))},dependencies:[sr,qs,dn,Oa$1,Da,Hf,J,Z$1,f$1],styles:[`main[_ngcontent-%COMP%]{min-height:20em!important;width:100%}footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:8em}
/*# sourceMappingURL=new-user-modal.component.css.map */`]})}}return n})();var aa=[`search_field`];var oa=[`*`];var ra=n=>({item:n});var ca=n=>({email:n});var mn=()=>({standalone:!0});var un=(n,d)=>d.id||d.email;function sa(n,d){if(n&1){let e=IT();ea$1(0,`mat-chip-row`,15),ny(`removed`,function(){let t=Ap(e).$index;return Rp(ST().removeUser(t))}),ea$1(1,`div`,16)(2,`div`),r_(3),hd()(),ea$1(4,`button`,17),w_(5,`translate`),ea$1(6,`icon`),r_(7,`cancel`),hd()()()}if(n&2){let e=d.$implicit;fy(`bg-base-200`,!e.is_external)(`bg-warning`,e.is_external),Ym(`matTooltip`,e.email),$w(),fy(`text-base-content!`,!e.is_external)(`text-warning-content!`,e.is_external),$w(2),vy(e.name||e.email),$w(),fy(`text-base-content!`,!e.is_external)(`text-warning-content!`,e.is_external),Zm(`aria-label`,T_(5,15,`COMMON.REMOVE_ITEM`,y_(18,ra,e.name||e.email)))}}function la(n,d){n&1&&Qm(0,`mat-spinner`,11)}function da(n,d){if(n&1){let e=IT();ea$1(0,`mat-option`,18),ny(`click`,function(){Ap(e);return Rp(ST().addUserFromEmail())}),r_(1),w_(2,`translate`),hd()}if(n&2){let e=ST();$w(),Dd(` `,T_(2,1,`FORM.USER_LIST_ADD_EXTERNAL`,y_(4,ca,e.search())),` `)}}function pa(n,d){if(n&1&&(r_(0,` (`),ea$1(1,`span`,22),r_(2),hd(),r_(3,`) `)),n&2){let e=ST().$implicit;$w(2),vy(e.username)}}function ha(n,d){if(n&1){let e=IT();ea$1(0,`mat-option`,19),ny(`click`,function(){let t=Ap(e).$implicit;return Rp(ST().addUser(t))}),ea$1(1,`div`,16),Qm(2,`a-user-avatar`,20),ea$1(3,`div`,12)(4,`div`),r_(5),hd(),ea$1(6,`div`,21),r_(7),lT(8,pa,4,1),hd()()()()}if(n&2){let e=d.$implicit;$w(2),Ym(`user`,e),$w(3),vy(e.name),$w(2),Dd(` `,e.email,` `),$w(),dT(e.username&&e.username!==e.email?8:-1)}}function ma(n,d){if(n&1){let e=IT();ea$1(0,`div`,13)(1,`button`,23),ny(`click`,function(){Ap(e);return Rp(ST().openNewUserModal())}),ea$1(2,`div`,24)(3,`span`,25),r_(4),w_(5,`translate`),hd(),ea$1(6,`span`,26),r_(7),w_(8,`translate`),hd()()(),ea$1(9,`button`,27),ny(`click`,function(t){Ap(e);let a=FT(18);return Rp(t.target!==a&&a.click())}),ea$1(10,`div`,24)(11,`span`,25),r_(12),w_(13,`translate`),hd(),ea$1(14,`span`,26),r_(15),w_(16,`translate`),hd()(),ea$1(17,`input`,28,4),ny(`change`,function(t){Ap(e);return Rp(ST().addUsersFromFile(t))}),hd()(),ea$1(19,`button`,29),ny(`click`,function(){Ap(e);let t=ST();return t.downloadCSVTemplate(),Rp(t.download.emit())}),ea$1(20,`div`,24)(21,`span`,25),r_(22),w_(23,`translate`),hd(),ea$1(24,`span`,26),r_(25),w_(26,`translate`),hd()()(),xT(27),hd()}n&2&&($w(4),Dd(` `,b_(5,6,`FORM.USER_BTN_ADD_EXTERNAL`),` `),$w(3),Dd(` `,b_(8,8,`FORM.USER_BTN_ADD_EXTERNAL_SIMPLE`),` `),$w(5),Dd(` `,b_(13,10,`FORM.USER_BTN_UPLOAD`),` `),$w(3),Dd(` `,b_(16,12,`FORM.USER_BTN_UPLOAD_SIMPLE`),` `),$w(7),Dd(` `,b_(23,14,`FORM.USER_BTN_TEMPLATE`),` `),$w(3),Dd(` `,b_(26,16,`FORM.USER_BTN_TEMPLATE_SIMPLE`),` `))}function ua(n,d){if(n&1){let e=IT();ea$1(0,`mat-checkbox`,32),ny(`ngModelChange`,function(t){let a=Ap(e).$implicit;return Rp(ST(2).setAttendeeInternational(a,t))}),r_(1),hd(),xC()}if(n&2){let e=d.$implicit;Ym(`ngModel`,ST(2).getAttendeeInternational(e))(`ngModelOptions`,m_(3,mn)),RC(),$w(),Dd(` `,e.name||e.email,` `)}}function _a(n,d){if(n&1&&(ea$1(0,`div`,14)(1,`label`),r_(2),w_(3,`translate`),hd(),ea$1(4,`div`,30),hT(5,ua,2,4,`mat-checkbox`,31,un),hd()()),n&2){let e=ST();$w(2),vy(b_(3,1,`BOOKINGS.INTERNATIONAL_VISITORS`)),$w(3),gT(e.active_list())}}function va(n,d){if(n&1){let e=IT();ea$1(0,`div`,34)(1,`span`),r_(2),hd(),ea$1(3,`mat-radio-group`,32),ny(`ngModelChange`,function(t){let a=Ap(e).$implicit;return Rp(ST(2).setAttendeeType(a,t))}),ea$1(4,`mat-radio-button`,35),r_(5),w_(6,`translate`),hd(),ea$1(7,`mat-radio-button`,36),r_(8),w_(9,`translate`),hd()(),xC(),hd()}if(n&2){let e=d.$implicit,i=ST(2);$w(2),vy(e.name||e.email),$w(),Ym(`ngModel`,i.getAttendeeType(e))(`ngModelOptions`,m_(9,mn)),RC(),$w(2),Dd(` `,b_(6,5,`COMMON.TYPE_INTERNAL`),` `),$w(3),Dd(` `,b_(9,7,`COMMON.TYPE_EXTERNAL`),` `)}}function fa(n,d){if(n&1&&(ea$1(0,`div`,14)(1,`label`),r_(2),w_(3,`translate`),hd(),ea$1(4,`div`,33),hT(5,va,10,10,`div`,34,un),hd()()),n&2){let e=ST();$w(2),vy(b_(3,1,`BOOKINGS.VISITOR_INTERNAL_OR_EXTERNAL`)),$w(3),gT(e.active_list())}}function hn(n){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n)}var ga=[`text/csv`,`text/plain`];var ya=[`application/vnd.ms-excel`,`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`];var fr=(()=>{class n extends Mu{async searchStaff(e,i){return this._use_basic_user_search()?zu({q:e,authority_id:ke()?.id}).then(t=>t.data.map(a=>new Xe(a))):Ts(e,{signal:i,exclude_guests:!1})}constructor(){super(),this._dialog=y(Ea),this._settings=y(le$1),this.time=VH(Date.now()),this.disabled=HH(void 0),this.limit=VH(3),this.guests=VH(!1),this.guests_only=VH(!1),this.hide_actions=VH(!1),this.flags=VH(!1),this.custom_template=VH(!1),this.filter=VH(void 0),this.new_user=BH(),this.download=BH(),this.separatorKeysCodes=[13,188],this.search=pt$1(``),this._search_el=UH(`search_field`),this._use_basic_user_search=this._settings.signal(`basic_user_search`,!1),this._allow_international=this._settings.signal(`events.allow_international`,!1),this._allow_internal_or_external=this._settings.signal(`events.allow_attendee_internal_or_external`,!1),this.show_international=Re(()=>this.flags()&&!!this._allow_international()),this.show_internal_or_external=Re(()=>this.flags()&&!!this._allow_internal_or_external()),this._debounced_search=YH(this.search,300),this._user_search=k_({params:()=>({q:this._debounced_search.value()}),loader:async({params:{q:e},abortSignal:i})=>{if(!e)return[];try{if(!this.guests())return await this.searchStaff(e,i);let[t,a]=await Promise.all([this.searchStaff(e,i),Cs(e)]),o=this.guests_only()?[]:t,f=[],O=this._settings.get(`visitor-invitees`)||[];for(let mt of O){if(typeof mt!=`string`)continue;let[_n,vn,fn,gn]=mt.split(`|`);f.push({email:_n,name:vn,company:fn,international:gn===`1`})}return _i(o.concat(a).concat(f),`email`)}catch{return[]}}}),this.user_list=Re(()=>[...this._user_search.value()??[]].sort((e,i)=>e.name.localeCompare(i.name))),this.loading=Re(()=>this._user_search.isLoading()),this.active_list=pt$1([]),this.search_valid_email=Re(()=>hn(this.search()))}updateSearch(e=``){this.timeout(`search`,()=>this.search.set(e))}addUserFromEmail(e=``){if(e||(e=this.search()),!hn(e))return;let i=new Xe({id:e,email:e,name:e.split(`@`)[0]});this.addUser(i);let{name:t,organisation:a}=i,o=`${e}|${t}|${a}|0`,f=this._settings.get(`visitor-invitees`)||[];this._settings.saveUserSetting(`visitor-invitees`,[...f.filter(O=>!O.includes(e)),o]),this.timeout(`clear_search`,()=>{this.search.set(``),this._search_el().nativeElement.value=``},100)}addUser(e){let i=e.id||e.email,t=this.active_list().filter(a=>(a.id||a.email)!==i);this.setValue([...t,new Xe(m(l({},e),{id:e.id||e.email,visit_expected:(!e.id&&e.is_external!==!0?e.visit_expected:null)??!0}))]),this.timeout(`clear_search`,()=>{this.search.set(``),this._search_el().nativeElement.value=``},100)}removeUser(e){let i=[...this.active_list()];e<0||e>=i.length||(i.splice(e,1),this.setValue(i))}getAttendeeInternational(e){return!!e?.extension_data?.international}getAttendeeType(e){return Ja(e?.extension_data?.visitor_internal_or_external)}setAttendeeInternational(e,i){this._setAttendeeFlags(e,{international:!!i})}setAttendeeType(e,i){this._setAttendeeFlags(e,{visitor_internal_or_external:Ja(i)})}_setAttendeeFlags(e,i){e&&this.setValue(this.active_list().map(t=>t===e?new Xe(m(l({},t),{extension_data:l(l({},t.extension_data),i)})):t))}addUsersFromFile(e){if(e.target){let i=e.target.files[0];if(i){if(!ga.includes(i.type)||ya.includes(i.type)){uc(`Only CSV files are supported`);return}let t=new FileReader;t.readAsText(i,`UTF-8`),t.addEventListener(`load`,a=>{this.processCsvData(a.srcElement.result),e.target.value=``}),t.addEventListener(`error`,a=>uc(`Error reading file.`))}}}processCsvData(e){let i=hf(e)||[],t=P()?.staff_id||`unknown`;for(let a of i){a.name=a.name||`${a.first_name} ${a.last_name}`;let o=(a.name||`${Math.floor(Math.random()*99999999)}`).split(` `).join(`_`).toLowerCase();a.email||(a.email=`${o}+${t}@guest.${k}`);let f=this._settings.get(`app.bookings.internal_emails`)||[`place.tech`];a.visit_expected=a.visit_expected??!f.find(O=>a.email.endsWith(O)),a.phone=``+a.phone,this.addUser(new Xe(a))}}downloadCSVTemplate(){if(this.custom_template())return;ff(`template.csv`,`Organisation,First Name,Last Name,Email,Phone,Assistance Required,Visit Expected
Fake Org,John,Smith,john.smith@example.com,01234567898,false,true`)}setValue(e){this.active_list.set(e||[]),this._onChange&&this._onChange(e||[])}writeValue(e){this.active_list.set(e||[])}setDisabledState(e){this.disabled.set(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouch=e}displayFn(e){return e?.name||``}openNewUserModal(e=new Xe){let i=this._dialog.open(pn,{width:`auto`,height:`auto`,data:{user:e}}),t=i.componentInstance?.event;t&&T(t).pipe(Gf(a=>a.reason===`done`)).subscribe(a=>{this.addUser(a.metadata),i.close()})}static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=Db({type:n,selectors:[[`a-user-list-field`]],viewQuery:function(i,t){i&1&&cy(t._search_el,aa,5),i&2&&kT()},inputs:{time:[1,`time`],disabled:[1,`disabled`],limit:[1,`limit`],guests:[1,`guests`],guests_only:[1,`guests_only`],hide_actions:[1,`hide_actions`],flags:[1,`flags`],custom_template:[1,`custom_template`],filter:[1,`filter`]},outputs:{disabled:`disabledChange`,new_user:`new_user`,download:`download`},features:[g_([Gm(()=>n)]),Lm],ngContentSelectors:oa,decls:20,vars:13,consts:[[`origin`,`matAutocompleteOrigin`],[`chipList`,``],[`search_field`,``],[`auto`,`matAutocomplete`],[`file_input`,``],[`form-field`,``,1,`mb-4`],[`search`,``],[`appearance`,`outline`,`matAutocompleteOrigin`,``,1,`w-full`],[`aria-label`,`User selection`],[`user`,``,3,`bg-base-200`,`bg-warning`,`matTooltip`],[`name`,`user_email`,3,`ngModelChange`,`matChipInputTokenEnd`,`placeholder`,`ngModel`,`matAutocomplete`,`matChipInputFor`,`matChipInputSeparatorKeyCodes`],[`diameter`,`24`,`matSuffix`,``],[1,`leading-tight`],[`actions`,``,1,`-mt-4`,`flex`,`items-center`,`space-x-2`],[1,`mt-2`,`flex`,`flex-col`],[`user`,``,3,`removed`,`matTooltip`],[1,`flex`,`items-center`,`space-x-2`],[`matChipRemove`,``,`remove`,``],[3,`click`],[1,`leading-tight`,3,`click`],[1,`-ml-2`,3,`user`],[1,`text-xs`,`opacity-30`],[1,`truncate`],[`btn`,``,`matRipple`,``,`type`,`button`,`name`,`new-contact`,1,`inverse`,`flex-1`,`sm:flex-none`,3,`click`],[1,`flex`,`items-center`,`justify-center`],[1,`hidden`,`sm:inline`],[1,`inline`,`sm:hidden`],[`btn`,``,`matRipple`,``,`type`,`button`,`name`,`upload-csv`,1,`inverse`,`relative`,`flex-1`,`sm:flex-none`,3,`click`],[`tabindex`,`-1`,`aria-hidden`,`true`,`type`,`file`,1,`absolute`,`inset-0`,`opacity-0`,3,`change`],[`btn`,``,`matRipple`,``,`type`,`button`,`name`,`download-template`,1,`inverse`,`flex-1`,`sm:flex-none`,3,`click`],[1,`flex`,`flex-wrap`,`gap-x-4`,`gap-y-2`],[3,`ngModel`,`ngModelOptions`],[3,`ngModelChange`,`ngModel`,`ngModelOptions`],[1,`flex`,`flex-col`,`gap-y-2`],[1,`flex`,`flex-wrap`,`items-center`,`gap-x-4`],[`value`,`internal`],[`value`,`external`]],template:function(i,t){if(i&1&&(NT(),ea$1(0,`div`,5)(1,`div`,6)(2,`mat-form-field`,7,0)(4,`mat-chip-grid`,8,1),hT(6,sa,8,20,`mat-chip-row`,9,fT),hd(),ea$1(8,`input`,10,2),w_(10,`translate`),ny(`ngModelChange`,function(o){return t.updateSearch(o)})(`matChipInputTokenEnd`,function(o){return t.addUserFromEmail(o.value)}),hd(),xC(),lT(11,la,1,0,`mat-spinner`,11),hd(),ea$1(12,`mat-autocomplete`,null,3),lT(14,da,3,6,`mat-option`),hT(15,ha,9,4,`mat-option`,12,pT),hd()(),lT(17,ma,28,18,`div`,13),lT(18,_a,7,3,`div`,14),lT(19,fa,7,3,`div`,14),hd()),i&2){let a=FT(5),o=FT(13);Zm(`disabled`,t.disabled()),$w(6),gT(t.active_list()),$w(2),Ym(`placeholder`,b_(10,11,`FORM.USER_LIST_PLACEHOLDER`))(`ngModel`,t.search())(`matAutocomplete`,o)(`matChipInputFor`,a)(`matChipInputSeparatorKeyCodes`,t.separatorKeysCodes),RC(),$w(3),dT(t.loading()?11:-1),$w(3),dT(t.search_valid_email()?14:-1),$w(),gT(t.user_list()),$w(2),dT(t.hide_actions()?-1:17),$w(),dT(t.show_international()&&t.active_list().length?18:-1),$w(),dT(t.show_internal_or_external()&&t.active_list().length?19:-1)}},dependencies:[wv,de,rt$1,Pt,ln,cn,sn,rn,ht,Yi,Wi,Ia,ot,$i,Ia$1,Cn$1,Re$1,re,W,dm,jo,rm,Gc,sr,qs,Hf,Yt$1,mt,w$1,f$1],encapsulation:2})}}return n})();export{ot as a,ln as i,Yi as n,st as o,fr as r,zn as s,Wi as t};
;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="cc3f92c0-9ec8-52b8-9231-5cefc803e996")}catch(e){}}();
//# debugId=cc3f92c0-9ec8-52b8-9231-5cefc803e996
//# sourceMappingURL=chunk-DpkuEi-02.js.map