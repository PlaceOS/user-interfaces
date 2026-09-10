import{$n as q2,$t as dM,A as Hy,An as la,Bn as n_,Bt as _o,C as Fn$1,Cr as v_,Ct as Wa,D as Gi$1,Dr as w_,Dt as XT,En as kg,Et as X,Ft as ZS,Gn as oS,H as Ln$1,Hr as l,Ht as _y,I as JT,Ir as xy,It as Zo,J as Oe,Jn as p,Jt as cI,Kn as oc,Kt as bc,Ln as me,Lt as Zy,Mn as ln,Nr as x_,Nt as Z,O as Hf,Or as we,P as JD,Pr as xc,Pt as Z2,Q as Pe,Rr as y_,St as W2,T as G,U as Ly,Ur as m,V as Lf,Vr as zy,Vt as _t,Y as Og,Yt as cM,Zt as cn,_r as tt$1,an as ee,ar as rM,b as E_,bt as Vf,cn as fI,cr as rl,ct as Re,d as By,dn as fe,dr as t8,er as qS,fn as g_,ft as Sn$1,g as DM,hr as t_,ht as Te,in as e_,j as Ic,jr as x,jt as Yo,kn as lM,kt as Y2,m as D,mt as Sr,n as $f,o as A,on as et,or as r_,p as Cc,pr as tM,qn as oe,rn as eD,rt as QM,t as $_,tr as qf,u as Ar,un as fc,ur as rv,ut as Ry,wt as Wf,xt as Vy,yr as u_,zr as yo}from"./chunk-DtKoY7OQ.js";import{$t as Ut,An as be,Bt as Ri,Ci as to,Dt as Pp,Ei as u_$1,Fi as wd,Fr as nG,Gi as xt,Gr as oa,Ht as Rn,In as cs,It as Qs,Kr as oae,L as GU,Lt as Qu,M as ES,Mn as cG,Mt as Qe,N as E_$1,Oi as vE,On as b_,Ot as Pr,Pr as mre,Qt as Up,Ri as wr,Wi as xse,X as JO,Xt as Tt,Yi as yse,Zi as zO,b as BU,bt as On$1,c as on$1,dn as Xi$1,ei as pg,fi as rl$1,gi as sa,gt as Ni,hn as Yt,ji as vse,mi as ro,n as St,ni as pre,nn as Vo,pn as Y2$1,pt as Mp,ri as ps,rn as Vp,rt as Kn$1,sn as Wo,t as Qr,ti as pi,tt as Jy,u as $2,ui as ra,un as XO,ur as io,wi as u2,wr as kx,wt as PR,xr as kR,xt as Ose,y as BE,z as Gn$1}from"./chunk-Cy23QlJB.js";import{a as Be,d as qe,f as vt,i as u,l as gt,n as mt,o as Pe$1,p as xt$1,r as p$1,s as Kt,t as Yt$1,u as ht}from"./main.js";import{i as We,t as Je}from"./chunk-Cg_wnWId.js";import{n as Et,t as Dt}from"./chunk-U2RS2eee.js";import{n as Vn$1,r as ao}from"./chunk-CC1_33JP.js";import{t as w}from"./chunk-e93Y8jsO.js";import{n as T}from"./chunk-NT3pyCTK.js";var dn=[`panel`];var pn=[`*`];function hn(n,p){if(n&1&&(Hf(0,`div`,1,0),y_(2),$f()),n&2){let e=p.id,i=g_();x_(i._classList),Zy(`mat-mdc-autocomplete-visible`,i.showPanel)(`mat-mdc-autocomplete-hidden`,!i.showPanel)(`mat-autocomplete-panel-animations-enabled`,!i._animationsDisabled)(`mat-primary`,i._color===`primary`)(`mat-accent`,i._color===`accent`)(`mat-warn`,i._color===`warn`),Ly(`id`,i.id),Ic(`aria-label`,i.ariaLabel||null)(`aria-labelledby`,i._getPanelAriaLabelledby(e))}}var Ze=class{source;option;constructor(p,e){this.source=p,this.option=e}};var Hi=new D(`mat-autocomplete-default-options`,{providedIn:`root`,factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})});var zi=(()=>{class n{_changeDetectorRef=p(_o);_elementRef=p(cn);_defaults=p(Hi);_animationsDisabled=Ut();_activeOptionChanges=fe.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new Pe;opened=new Pe;closed=new Pe;optionActivated=new Pe;set classList(e){this._classList=e,this._elementRef.nativeElement.className=``}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=p(Yt).getId(`mat-autocomplete-`);inertGroups;constructor(){let e=p(be);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Mp(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let i=new Ze(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let i=e?e+` `:``;return this.ariaLabelledby?i+this.ariaLabelledby:e}_skipPredicate(){return!1}static ɵfac=function(i){return new(i||n)};static ɵcmp=Lf({type:n,selectors:[[`mat-autocomplete`]],contentQueries:function(i,t,a){if(i&1&&qf(a,PR,5)(a,BU,5),i&2){let o;Vy(o=Hy())&&(t.options=o),Vy(o=Hy())&&(t.optionGroups=o)}},viewQuery:function(i,t){if(i&1&&By(yo,7)(dn,5),i&2){let a;Vy(a=Hy())&&(t.template=a.first),Vy(a=Hy())&&(t.panel=a.first)}},hostAttrs:[1,`mat-mdc-autocomplete`],inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],displayWith:`displayWith`,autoActiveFirstOption:[2,`autoActiveFirstOption`,`autoActiveFirstOption`,Gi$1],autoSelectActiveOption:[2,`autoSelectActiveOption`,`autoSelectActiveOption`,Gi$1],requireSelection:[2,`requireSelection`,`requireSelection`,Gi$1],panelWidth:`panelWidth`,disableRipple:[2,`disableRipple`,`disableRipple`,Gi$1],classList:[0,`class`,`classList`],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,Gi$1]},outputs:{optionSelected:`optionSelected`,opened:`opened`,closed:`closed`,optionActivated:`optionActivated`},exportAs:[`matAutocomplete`],features:[tM([{provide:GU,useExisting:n}])],ngContentSelectors:pn,decls:1,vars:0,consts:[[`panel`,``],[`role`,`listbox`,1,`mat-mdc-autocomplete-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`id`]],template:function(i,t){i&1&&(v_(),Ry(0,hn,3,17,`ng-template`))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2})}return n})();var ji=(()=>{class n{elementRef=p(cn);static ɵfac=function(i){return new(i||n)};static ɵdir=Fn$1({type:n,selectors:[[``,`matAutocompleteOrigin`,``]],exportAs:[`matAutocompleteOrigin`]})}return n})();var mn={provide:Wo,useExisting:la(()=>tt),multi:!0};var un=new D(`mat-autocomplete-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=p(me);return()=>E_$1(n)}});var tt=(()=>{class n{_environmentInjector=p(oe);_element=p(cn);_injector=p(me);_viewContainerRef=p(ln);_zone=p(we);_changeDetectorRef=p(_o);_dir=p(Pr,{optional:!0});_formField=p(vt,{optional:!0,host:!0});_viewportRuler=p(ps);_scrollStrategy=p(un);_renderer=p(Sr);_animationsDisabled=Ut();_defaults=p(Hi,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new ee;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=fe.EMPTY;_breakpointObserver=p(oa);_handsetLandscapeSubscription=fe.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new ee;_overlayPanelClass=wr(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position=`auto`;connectedTo;autocompleteAttribute=`off`;autocompleteDisabled=!1;_aboveClass=`mat-mdc-autocomplete-panel-above`;ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen(`window`,`blur`,this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return cI(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Re(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Re(()=>this._overlayAttached)):A()).pipe(G(e=>e instanceof pg?e:null))}optionSelections=Zo(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(rl(e),Oe(()=>cI(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(Oe(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new x(e=>{let i=a=>{let o=Tt(a),v=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,k=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&o!==this._element.nativeElement&&!this._hasFocus()&&(!v||!v.contains(o))&&(!k||!k.contains(o))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(o)&&e.next(a)},t=[this._renderer.listen(`document`,`click`,i),this._renderer.listen(`document`,`auxclick`,i),this._renderer.listen(`document`,`touchend`,i)];return()=>{t.forEach(a=>a())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let i=e,t=i.keyCode,a=Gn$1(i);if(t===27&&!a&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&t===13&&this.panelOpen&&!a)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let o=this.autocomplete._keyManager.activeItem,v=t===38||t===40;t===9||v&&!a&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):v&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(v||this.autocomplete._keyManager.activeItem!==o)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,t=i.value;if(i.type===`number`&&(t=t==``?null:parseFloat(t)),this._previousValue!==t){if(this._previousValue=t,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(t),!t)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let a=this.autocomplete.options?.find(o=>o.selected);if(a){let o=this._getDisplayValue(a.value);t!==o&&a.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let a=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(a)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return Qs()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel===`auto`&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel=`always`,this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel=`auto`),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){return cI(new x(t=>{fc(()=>{t.next()},{injector:this._environmentInjector})}),this.autocomplete.options?.changes.pipe(tt$1(()=>this._positionStrategy.reapplyLastPosition()),fI(0))??A()).pipe(Oe(()=>this._zone.run(()=>{let t=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),t!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),et(1)).subscribe(t=>this._setValueAndClose(t))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(e):e}_assignOptionValue(e){let i=this._getDisplayValue(e);e??this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??``)}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let i=this.autocomplete,t=e?e.source:this._pendingAutoselectedOption;t?(this._clearPreviousSelectedOption(t),this._assignOptionValue(t.value),this._onChange(t.value),i._emitSelectEvent(t),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,i){this.autocomplete?.options?.forEach(t=>{t!==e&&t.selected&&t.deselect(i)})}_openPanelInternal(e=this._element.nativeElement.value){this._attachOverlay(e),this._floatLabel()}_attachOverlay(e){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new Ri(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=io(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(vE.HandsetLandscape).subscribe(a=>{a.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let t=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this.panelOpen&&t!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!Gn$1(e)||e.keyCode===38&&Gn$1(e,`altKey`))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??``),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new Ni({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=b_(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation(`inline`);return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let i=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}],t=this._aboveClass,a=[{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:t},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:t}],o;this.position===`above`?o=a:this.position===`below`?o=i:o=[...i,...a],e.withPositions(o)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let i=-1;for(let t=0;t<e.options.length;t++)if(!e.options.get(t).disabled){i=t;break}e._keyManager.setActiveItem(i)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let i=this.autocomplete,t=yse(e,i.options,i.optionGroups);if(e===0&&t===1)i._setScrollTop(0);else if(i.panel){let a=i.options.toArray()[e];if(a){let o=a._getHostElement(),v=vse(o.offsetTop,o.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(v)}}}static ɵfac=function(i){return new(i||n)};static ɵdir=Fn$1({type:n,selectors:[[`input`,`matAutocomplete`,``],[`textarea`,`matAutocomplete`,``]],hostAttrs:[1,`mat-mdc-autocomplete-trigger`],hostVars:7,hostBindings:function(i,t){i&1&&bc(`focusin`,function(){return t._handleFocus()})(`blur`,function(){return t._onTouched()})(`input`,function(o){return t._handleInput(o)})(`keydown`,function(o){return t._handleKeydown(o)})(`click`,function(){return t._handleClick()}),i&2&&Ic(`autocomplete`,t.autocompleteAttribute)(`role`,t.autocompleteDisabled?null:`combobox`)(`aria-autocomplete`,t.autocompleteDisabled?null:`list`)(`aria-activedescendant`,t.panelOpen&&t.activeOption?t.activeOption.id:null)(`aria-expanded`,t.autocompleteDisabled?null:t.panelOpen.toString())(`aria-controls`,t.autocompleteDisabled||!t.panelOpen?null:t.autocomplete?.id)(`aria-haspopup`,t.autocompleteDisabled?null:`listbox`)},inputs:{autocomplete:[0,`matAutocomplete`,`autocomplete`],position:[0,`matAutocompletePosition`,`position`],connectedTo:[0,`matAutocompleteConnectedTo`,`connectedTo`],autocompleteAttribute:[0,`autocomplete`,`autocompleteAttribute`],autocompleteDisabled:[2,`matAutocompleteDisabled`,`autocompleteDisabled`,Gi$1]},exportAs:[`matAutocompleteTrigger`],features:[tM([mn]),Ln$1]})}return n})();var qi=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Ar({type:n});static ɵinj=Sn$1({imports:[ro,xse,u_$1,xse,Qe]})}return n})();var fn=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]];var gn=[`*`,`mat-chip-avatar, [matChipAvatar]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function yn(n,p){n&1&&(oc(0,`span`,3),y_(1,1),Vf())}function bn(n,p){n&1&&(oc(0,`span`,6),y_(1,2),Vf())}var Sn=`.mdc-evolution-chip,
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
`;var Cn=[[[``,`matChipEdit`,``]],[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[``,`matChipEditInput`,``]],`*`,[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]];var wn=[`[matChipEdit]`,`mat-chip-avatar, [matChipAvatar]`,`[matChipEditInput]`,`*`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function xn(n,p){n&1&&Cc(0,`span`,0)}function Nn(n,p){n&1&&(oc(0,`span`,1),y_(1),Vf())}function En(n,p){n&1&&(oc(0,`span`,3),y_(1,1),Vf())}function In(n,p){n&1&&y_(0,2)}function Mn(n,p){n&1&&Cc(0,`span`,7)}function kn(n,p){if(n&1&&XT(0,In,1,0)(1,Mn,1,0,`span`,7),n&2)JT(g_().contentEditInput?0:1)}function An(n,p){n&1&&y_(0,3)}function Fn(n,p){n&1&&(oc(0,`span`,6),y_(1,4),Vf())}var Yi=[`*`];var On=`.mat-mdc-chip-set {
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
`;var Xi=new D(`mat-chips-default-options`,{providedIn:`root`,factory:()=>({separatorKeyCodes:[13]})});var Gi=new D(`MatChipAvatar`);var Ki=new D(`MatChipTrailingIcon`);var Qi=new D(`MatChipEdit`);var nt=new D(`MatChipRemove`);var ct=new D(`MatChip`);var Zi=(()=>{class n{_elementRef=p(cn);_parentChip=p(ct);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?``:null}constructor(){p(xt).load(wd),this._elementRef.nativeElement.nodeName===`BUTTON`&&this._elementRef.nativeElement.setAttribute(`type`,`button`)}focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(i){return new(i||n)};static ɵdir=Fn$1({type:n,selectors:[[``,`matChipContent`,``]],hostAttrs:[1,`mat-mdc-chip-action`,`mdc-evolution-chip__action`,`mdc-evolution-chip__action--presentational`],hostVars:8,hostBindings:function(i,t){i&2&&(Ic(`disabled`,t._getDisabledAttribute())(`aria-disabled`,t.disabled),Zy(`mdc-evolution-chip__action--primary`,t._isPrimary)(`mdc-evolution-chip__action--secondary`,!t._isPrimary)(`mdc-evolution-chip__action--trailing`,!t._isPrimary&&!t._isLeading))},inputs:{disabled:[2,`disabled`,`disabled`,Gi$1],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?-1:QM(e)],_allowFocusWhenDisabled:`_allowFocusWhenDisabled`}})}return n})();var rt=(()=>{class n extends Zi{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static ɵfac=(()=>{let e;return function(t){return(e||(e=rv(n)))(t||n)}})();static ɵdir=Fn$1({type:n,selectors:[[``,`matChipAction`,``]],hostVars:3,hostBindings:function(i,t){i&1&&bc(`click`,function(o){return t._handleClick(o)})(`keydown`,function(o){return t._handleKeydown(o)}),i&2&&(Ic(`tabindex`,t._getTabindex()),Zy(`mdc-evolution-chip__action--presentational`,!1))},features:[_y]})}return n})();var Ji=(()=>{class n extends rt{_isPrimary=!1;_handleClick(e){this.disabled||(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}static ɵfac=(()=>{let e;return function(t){return(e||(e=rv(n)))(t||n)}})();static ɵdir=Fn$1({type:n,selectors:[[``,`matChipRemove`,``]],hostAttrs:[`role`,`button`,1,`mat-mdc-chip-remove`,`mat-mdc-chip-trailing-icon`,`mat-focus-indicator`,`mdc-evolution-chip__icon`,`mdc-evolution-chip__icon--trailing`],hostVars:1,hostBindings:function(i,t){i&2&&Ic(`aria-hidden`,null)},features:[tM([{provide:nt,useExisting:n}]),_y]})}return n})();var at=(()=>{class n{_changeDetectorRef=p(_o);_elementRef=p(cn);_tagName=p(q2);_ngZone=p(we);_focusMonitor=p(ra);_globalRippleOptions=p(rl$1,{optional:!0});_document=p(X);_onFocus=new ee;_onBlur=new ee;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=Ut();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=p(Yt).getId(`mat-mdc-chip-`);ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new Pe;destroyed=new Pe;basicChipAttrName=`mat-basic-chip`;leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=p(Jy);_injector=p(me);constructor(){let e=p(xt);e.load(wd),e.load(Vo),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:`mat-mdc-chip-ripple`,disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(`.mat-mdc-chip-action-label`),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=cI(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(i=>{let t=i._elementRef.nativeElement;return t===e||t.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let i=e!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static ɵfac=function(i){return new(i||n)};static ɵcmp=Lf({type:n,selectors:[[`mat-basic-chip`],[``,`mat-basic-chip`,``],[`mat-chip`],[``,`mat-chip`,``]],contentQueries:function(i,t,a){if(i&1&&qf(a,Gi,5)(a,Qi,5)(a,Ki,5)(a,nt,5)(a,Gi,5)(a,Ki,5)(a,Qi,5)(a,nt,5),i&2){let o;Vy(o=Hy())&&(t.leadingIcon=o.first),Vy(o=Hy())&&(t.editIcon=o.first),Vy(o=Hy())&&(t.trailingIcon=o.first),Vy(o=Hy())&&(t.removeIcon=o.first),Vy(o=Hy())&&(t._allLeadingIcons=o),Vy(o=Hy())&&(t._allTrailingIcons=o),Vy(o=Hy())&&(t._allEditIcons=o),Vy(o=Hy())&&(t._allRemoveIcons=o)}},viewQuery:function(i,t){if(i&1&&By(rt,5),i&2){let a;Vy(a=Hy())&&(t.primaryAction=a.first)}},hostAttrs:[1,`mat-mdc-chip`],hostVars:31,hostBindings:function(i,t){i&1&&bc(`keydown`,function(o){return t._handleKeydown(o)}),i&2&&(Ly(`id`,t.id),Ic(`role`,t.role)(`aria-label`,t.ariaLabel),x_(`mat-`+(t.color||`primary`)),Zy(`mdc-evolution-chip`,!t._isBasicChip)(`mdc-evolution-chip--disabled`,t.disabled)(`mdc-evolution-chip--with-trailing-action`,t._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,t.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,t.leadingIcon)(`mdc-evolution-chip--with-avatar`,t.leadingIcon)(`mat-mdc-chip-with-avatar`,t.leadingIcon)(`mat-mdc-chip-highlighted`,t.highlighted)(`mat-mdc-chip-disabled`,t.disabled)(`mat-mdc-basic-chip`,t._isBasicChip)(`mat-mdc-standard-chip`,!t._isBasicChip)(`mat-mdc-chip-with-trailing-icon`,t._hasTrailingIcon())(`_mat-animation-noopable`,t._animationsDisabled))},inputs:{role:`role`,id:`id`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaDescription:[0,`aria-description`,`ariaDescription`],value:`value`,color:`color`,removable:[2,`removable`,`removable`,Gi$1],highlighted:[2,`highlighted`,`highlighted`,Gi$1],disableRipple:[2,`disableRipple`,`disableRipple`,Gi$1],disabled:[2,`disabled`,`disabled`,Gi$1]},outputs:{removed:`removed`,destroyed:`destroyed`},exportAs:[`matChip`],features:[tM([{provide:ct,useExisting:n}])],ngContentSelectors:gn,decls:8,vars:2,consts:[[1,`mat-mdc-chip-focus-overlay`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipContent`,``],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`]],template:function(i,t){i&1&&(v_(fn),Cc(0,`span`,0),oc(1,`span`,1)(2,`span`,2),XT(3,yn,2,0,`span`,3),oc(4,`span`,4),y_(5),Cc(6,`span`,5),Vf()()(),XT(7,bn,2,0,`span`,6)),i&2&&(oS(3),JT(t.leadingIcon?3:-1),oS(4),JT(t._hasTrailingIcon()?7:-1))},dependencies:[Zi],styles:[`.mdc-evolution-chip,
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
`],encapsulation:2})}return n})();var it=(()=>{class n{_elementRef=p(cn);_document=p(X);initialize(e){this.getNativeElement().focus(),this.setValue(e)}getNativeElement(){return this._elementRef.nativeElement}setValue(e){this.getNativeElement().textContent=e,this._moveCursorToEndOfInput()}getValue(){return this.getNativeElement().textContent||``}_moveCursorToEndOfInput(){let e=this._document.createRange();e.selectNodeContents(this.getNativeElement()),e.collapse(!1);let i=window.getSelection();i.removeAllRanges(),i.addRange(e)}static ɵfac=function(i){return new(i||n)};static ɵdir=Fn$1({type:n,selectors:[[`span`,`matChipEditInput`,``]],hostAttrs:[`role`,`textbox`,`tabindex`,`-1`,`contenteditable`,`true`,1,`mat-chip-edit-input`]})}return n})();var st=(()=>{class n extends at{basicChipAttrName=`mat-basic-chip-row`;_renderer=p(Sr);_cleanupMousedown;_editStartPending=!1;editable=!1;edited=new Pe;defaultEditInput;contentEditInput;_alreadyFocused=!1;_isEditing=!1;constructor(){super(),this.role=`row`,this._onBlur.pipe(Yo(this.destroyed)).subscribe(()=>{this._isEditing&&!this._editStartPending&&this._onEditFinish(),this._alreadyFocused=!1})}ngAfterViewInit(){super.ngAfterViewInit(),this._cleanupMousedown=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`mousedown`,()=>{this._alreadyFocused=this._hasFocus()}))}ngOnDestroy(){super.ngOnDestroy(),this._cleanupMousedown?.()}_hasLeadingActionIcon(){return!this._isEditing&&!!this.editIcon}_hasTrailingIcon(){return!this._isEditing&&super._hasTrailingIcon()}_handleFocus(){!this._isEditing&&!this.disabled&&this.focus()}_handleKeydown(e){e.keyCode===13&&!this.disabled?this._isEditing?(e.preventDefault(),this._onEditFinish()):this.editable&&this._startEditing(e):this._isEditing?e.stopPropagation():super._handleKeydown(e)}_handleClick(e){!this.disabled&&this.editable&&!this._isEditing&&this._alreadyFocused&&(e.preventDefault(),e.stopPropagation(),this._startEditing(e))}_handleDoubleclick(e){!this.disabled&&this.editable&&this._startEditing(e)}_edit(){this._changeDetectorRef.markForCheck(),this._startEditing()}_startEditing(e){if(!this.primaryAction||this.removeIcon&&e&&this._getSourceAction(e.target)===this.removeIcon)return;let i=this.value;this._isEditing=this._editStartPending=!0,fc(()=>{this._getEditInput().initialize(i),setTimeout(()=>this._ngZone.run(()=>this._editStartPending=!1))},{injector:this._injector})}_onEditFinish(){this._isEditing=this._editStartPending=!1,this.edited.emit({chip:this,value:this._getEditInput().getValue()}),(this._document.activeElement===this._getEditInput().getNativeElement()||this._document.activeElement===this._document.body)&&this.primaryAction.focus()}_isRippleDisabled(){return super._isRippleDisabled()||this._isEditing}_getEditInput(){return this.contentEditInput||this.defaultEditInput}static ɵfac=function(i){return new(i||n)};static ɵcmp=Lf({type:n,selectors:[[`mat-chip-row`],[``,`mat-chip-row`,``],[`mat-basic-chip-row`],[``,`mat-basic-chip-row`,``]],contentQueries:function(i,t,a){if(i&1&&qf(a,it,5),i&2){let o;Vy(o=Hy())&&(t.contentEditInput=o.first)}},viewQuery:function(i,t){if(i&1&&By(it,5),i&2){let a;Vy(a=Hy())&&(t.defaultEditInput=a.first)}},hostAttrs:[1,`mat-mdc-chip`,`mat-mdc-chip-row`,`mdc-evolution-chip`],hostVars:29,hostBindings:function(i,t){i&1&&bc(`focus`,function(){return t._handleFocus()})(`click`,function(o){return t._hasInteractiveActions()?t._handleClick(o):null})(`dblclick`,function(o){return t._handleDoubleclick(o)}),i&2&&(Ly(`id`,t.id),Ic(`tabindex`,t.disabled?null:-1)(`aria-label`,null)(`aria-description`,null)(`role`,t.role),Zy(`mat-mdc-chip-with-avatar`,t.leadingIcon)(`mat-mdc-chip-disabled`,t.disabled)(`mat-mdc-chip-editing`,t._isEditing)(`mat-mdc-chip-editable`,t.editable)(`mdc-evolution-chip--disabled`,t.disabled)(`mdc-evolution-chip--with-leading-action`,t._hasLeadingActionIcon())(`mdc-evolution-chip--with-trailing-action`,t._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,t.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,t.leadingIcon)(`mdc-evolution-chip--with-avatar`,t.leadingIcon)(`mat-mdc-chip-highlighted`,t.highlighted)(`mat-mdc-chip-with-trailing-icon`,t._hasTrailingIcon()))},inputs:{editable:`editable`},outputs:{edited:`edited`},features:[tM([{provide:at,useExisting:n},{provide:ct,useExisting:n}]),_y],ngContentSelectors:wn,decls:9,vars:8,consts:[[1,`mat-mdc-chip-focus-overlay`],[`role`,`gridcell`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--leading`],[`role`,`gridcell`,`matChipAction`,``,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`,3,`disabled`],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[`aria-hidden`,`true`,1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[`role`,`gridcell`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`],[`matChipEditInput`,``]],template:function(i,t){i&1&&(v_(Cn),XT(0,xn,1,0,`span`,0),XT(1,Nn,2,0,`span`,1),oc(2,`span`,2),XT(3,En,2,0,`span`,3),oc(4,`span`,4),XT(5,kn,2,1)(6,An,1,0),Cc(7,`span`,5),Vf()(),XT(8,Fn,2,0,`span`,6)),i&2&&(JT(t._isEditing?-1:0),oS(),JT(t._hasLeadingActionIcon()?1:-1),oS(),xy(`disabled`,t.disabled),Ic(`aria-description`,t.ariaDescription)(`aria-label`,t.ariaLabel),oS(),JT(t.leadingIcon?3:-1),oS(2),JT(t._isEditing?5:6),oS(3),JT(t._hasTrailingIcon()?8:-1))},dependencies:[rt,it],styles:[Sn],encapsulation:2})}return n})();var Dn=(()=>{class n{_elementRef=p(cn);_changeDetectorRef=p(_o);_dir=p(Pr,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new ee;_defaultRole=`presentation`;get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Wa;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(rl(null),Oe(()=>cI(...this._chips.map(e))))}_originatesFromChip(e){let i=e.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains(`mat-mdc-chip`))return!0;i=i.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(rl(this._chips)).subscribe(e=>{let i=[];e.forEach(t=>t._getActions().forEach(a=>i.push(a))),this._chipActions.reset(i),this._chipActions.notifyOnChanges()}),this._keyManager=new Pp(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:`ltr`).withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(Yo(this._destroyed)).subscribe(({chip:e})=>{let i=e._getSourceAction(document.activeElement);i&&this._keyManager.updateActiveItem(i)}),this._dir?.change.pipe(Yo(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(rl(null),Yo(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(Yo(this._destroyed)).subscribe(e=>{let t=this._chips.toArray().indexOf(e.chip),a=e.chip._hasFocus(),o=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),v=a||o;this._isValidIndex(t)&&v&&(this._lastDestroyedFocusedChipIndex=t)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),i=this._chips.toArray()[e];i.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():i.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static ɵfac=function(i){return new(i||n)};static ɵcmp=Lf({type:n,selectors:[[`mat-chip-set`]],contentQueries:function(i,t,a){if(i&1&&qf(a,at,5),i&2){let o;Vy(o=Hy())&&(t._chips=o)}},hostAttrs:[1,`mat-mdc-chip-set`,`mdc-evolution-chip-set`],hostVars:1,hostBindings:function(i,t){i&1&&bc(`keydown`,function(o){return t._handleKeydown(o)}),i&2&&Ic(`role`,t.role)},inputs:{disabled:[2,`disabled`,`disabled`,Gi$1],role:`role`,tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:QM(e)]},ngContentSelectors:Yi,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(i,t){i&1&&(v_(),Hf(0,`div`,0),y_(1),$f())},styles:[`.mat-mdc-chip-set {
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
`],encapsulation:2})}return n})();var ot=class{source;value;constructor(p,e){this.source=p,this.value=e}};var en=(()=>{class n extends Dn{ngControl=p(Xi$1,{optional:!0,self:!0});controlType=`mat-chip-grid`;_chipInput;_defaultRole=`grid`;_errorStateTracker;_uid=p(Yt).getId(`mat-chip-grid-`);_ariaDescribedbyIds=[];_onTouched=()=>{};_onChange=()=>{};get disabled(){return this.ngControl?!!this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=e,this._syncChipsState(),this.stateChanges.next()}get id(){return this._chipInput?this._chipInput.id:this._uid}get empty(){return(!this._chipInput||this._chipInput.empty)&&(!this._chips||this._chips.length===0)}get placeholder(){return this._chipInput?this._chipInput.placeholder:this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder=``;get focused(){return this._chipInput?.focused||this._hasFocusedChip()}get required(){return this._required??this.ngControl?.control?.hasValidator(Vp.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get shouldLabelFloat(){return!this.empty||this.focused}get value(){return this._value}set value(e){this._value=e}_value=[];get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}change=new Pe;valueChange=new Pe;_chips=void 0;stateChanges=new ee;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(){super();let e=p(zO,{optional:!0}),i=p(XO,{optional:!0}),t=p(Ose),a=p(St,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._errorStateTracker=new kR(t,a||this.ngControl,i,e,this.stateChanges)}ngAfterContentInit(){this.chipBlurChanges.pipe(Yo(this._destroyed)).subscribe(()=>{this._blur(),this.stateChanges.next()}),cI(this.chipFocusChanges,this._chips.changes).pipe(Yo(this._destroyed)).subscribe(()=>this.stateChanges.next())}ngDoCheck(){this.ngControl&&this.updateErrorState()}ngOnDestroy(){super.ngOnDestroy(),this.stateChanges.complete()}registerInput(e){this._chipInput=e,this._chipInput.setDescribedByIds(this._ariaDescribedbyIds),this._elementRef.nativeElement.removeAttribute(`aria-describedby`)}onContainerClick(e){!this.disabled&&!this._originatesFromChip(e)&&this.focus()}focus(){if(!(this.disabled||this._chipInput?.focused)){if(!this._chips.length||this._chips.first.disabled){if(!this._chipInput)return;Promise.resolve().then(()=>this._chipInput.focus())}else{let e=this._keyManager.activeItem;e?e.focus():this._keyManager.setFirstItemActive()}this.stateChanges.next()}}get describedByIds(){if(this._chipInput)return this._chipInput.describedByIds||[];let e=this._elementRef.nativeElement.getAttribute(`aria-describedby`);return e?e.split(` `):[]}setDescribedByIds(e){this._ariaDescribedbyIds=e,this._chipInput?this._chipInput.setDescribedByIds(e):e.length?this._elementRef.nativeElement.setAttribute(`aria-describedby`,e.join(` `)):this._elementRef.nativeElement.removeAttribute(`aria-describedby`)}writeValue(e){this._value=e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this.stateChanges.next()}updateErrorState(){this._errorStateTracker.updateErrorState()}_blur(){this.disabled||setTimeout(()=>{this.focused||(this._propagateChanges(),this._markAsTouched())})}_allowFocusEscape(){this._chipInput?.focused||super._allowFocusEscape()}_handleKeydown(e){let i=e.keyCode,t=this._keyManager.activeItem;if(i===9)this._chipInput?.focused&&Gn$1(e,`shiftKey`)&&this._chips.length&&!this._chips.last.disabled?(e.preventDefault(),t?this._keyManager.setActiveItem(t):this._focusLastChip()):super._allowFocusEscape();else if(!this._chipInput?.focused)if((i===38||i===40)&&t){let a=this._chipActions.filter(k=>k._isPrimary===t._isPrimary&&!this._skipPredicate(k)),o=a.indexOf(t),v=e.keyCode===38?-1:1;e.preventDefault(),o>-1&&this._isValidIndex(o+v)&&this._keyManager.setActiveItem(a[o+v])}else super._handleKeydown(e);this.stateChanges.next()}_redirectDestroyedChipFocus(){this._lastDestroyedFocusedChipIndex!==null&&(super._redirectDestroyedChipFocus(),(!this._chips.length||this._chips.length===1&&this._chips.first.disabled)&&this._keyManager.updateActiveItem(-1))}_focusLastChip(){this._chips.length&&this._chips.last.focus()}_propagateChanges(){let e=this._chips.length?this._chips.toArray().map(i=>i.value):[];this._value=e,this.change.emit(new ot(this,e)),this.valueChange.emit(e),this._onChange(e),this._changeDetectorRef.markForCheck()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next()}static ɵfac=function(i){return new(i||n)};static ɵcmp=Lf({type:n,selectors:[[`mat-chip-grid`]],contentQueries:function(i,t,a){if(i&1&&qf(a,st,5),i&2){let o;Vy(o=Hy())&&(t._chips=o)}},hostAttrs:[1,`mat-mdc-chip-set`,`mat-mdc-chip-grid`,`mdc-evolution-chip-set`],hostVars:10,hostBindings:function(i,t){i&1&&bc(`focus`,function(){return t.focus()})(`blur`,function(){return t._blur()}),i&2&&(Ic(`role`,t.role)(`tabindex`,t.disabled||t._chips&&t._chips.length===0?-1:t.tabIndex)(`aria-disabled`,t.disabled.toString())(`aria-invalid`,t.errorState),Zy(`mat-mdc-chip-list-disabled`,t.disabled)(`mat-mdc-chip-list-invalid`,t.errorState)(`mat-mdc-chip-list-required`,t.required))},inputs:{disabled:[2,`disabled`,`disabled`,Gi$1],placeholder:`placeholder`,required:[2,`required`,`required`,Gi$1],value:`value`,errorStateMatcher:`errorStateMatcher`},outputs:{change:`change`,valueChange:`valueChange`},features:[tM([{provide:gt,useExisting:n}]),_y],ngContentSelectors:Yi,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(i,t){i&1&&(v_(),Hf(0,`div`,0),y_(1),$f())},styles:[On],encapsulation:2})}return n})();var tn=(()=>{class n{_elementRef=p(cn);focused=!1;get chipGrid(){return this._chipGrid}set chipGrid(e){e&&(this._chipGrid=e,this._chipGrid.registerInput(this))}_chipGrid;addOnBlur=!1;separatorKeyCodes;chipEnd=new Pe;placeholder=``;id=p(Yt).getId(`mat-mdc-chip-list-input-`);get disabled(){return this._disabled||this._chipGrid&&this._chipGrid.disabled}set disabled(e){this._disabled=e}_disabled=!1;readonly=!1;disabledInteractive;get empty(){return!this.inputElement.value}inputElement;constructor(){let e=p(Xi),i=p(vt,{optional:!0});this.inputElement=this._elementRef.nativeElement,this.separatorKeyCodes=e.separatorKeyCodes,this.disabledInteractive=e.inputDisabledInteractive??!1,i&&this.inputElement.classList.add(`mat-mdc-form-field-input-control`)}ngOnChanges(){this._chipGrid.stateChanges.next()}ngOnDestroy(){this.chipEnd.complete()}_keydown(e){this.empty&&e.keyCode===8?(e.repeat||this._chipGrid._focusLastChip(),e.preventDefault()):this._emitChipEnd(e)}_blur(){this.addOnBlur&&this._emitChipEnd(),this.focused=!1,this._chipGrid.focused||this._chipGrid._blur(),this._chipGrid.stateChanges.next()}_focus(){this.focused=!0,this._chipGrid.stateChanges.next()}_emitChipEnd(e){(!e||this._isSeparatorKey(e)&&!e.repeat)&&(this.chipEnd.emit({input:this.inputElement,value:this.inputElement.value,chipInput:this}),e?.preventDefault())}_onInput(){this._chipGrid.stateChanges.next()}focus(){this.inputElement.focus()}clear(){this.inputElement.value=``}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute(`aria-describedby`,e.join(` `)):i.removeAttribute(`aria-describedby`)}_isSeparatorKey(e){if(!this.separatorKeyCodes)return!1;for(let i of this.separatorKeyCodes){let t,a;typeof i==`number`?(t=i,a=null):(t=i.keyCode,a=i.modifiers);let o=a?.length?Gn$1(e,...a):!Gn$1(e);if(t===e.keyCode&&o)return!0}return!1}_getReadonlyAttribute(){return this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(i){return new(i||n)};static ɵdir=Fn$1({type:n,selectors:[[`input`,`matChipInputFor`,``]],hostAttrs:[1,`mat-mdc-chip-input`,`mat-mdc-input-element`,`mdc-text-field__input`,`mat-input-element`],hostVars:8,hostBindings:function(i,t){i&1&&bc(`keydown`,function(o){return t._keydown(o)})(`blur`,function(){return t._blur()})(`focus`,function(){return t._focus()})(`input`,function(){return t._onInput()}),i&2&&(Ly(`id`,t.id),Ic(`disabled`,t.disabled&&!t.disabledInteractive?``:null)(`placeholder`,t.placeholder||null)(`aria-invalid`,t._chipGrid&&t._chipGrid.ngControl?t._chipGrid.ngControl.invalid:null)(`aria-required`,t._chipGrid&&t._chipGrid.required||null)(`aria-disabled`,t.disabled&&t.disabledInteractive?`true`:null)(`readonly`,t._getReadonlyAttribute())(`required`,t._chipGrid&&t._chipGrid.required||null))},inputs:{chipGrid:[0,`matChipInputFor`,`chipGrid`],addOnBlur:[2,`matChipInputAddOnBlur`,`addOnBlur`,Gi$1],separatorKeyCodes:[0,`matChipInputSeparatorKeyCodes`,`separatorKeyCodes`],placeholder:`placeholder`,id:`id`,disabled:[2,`disabled`,`disabled`,Gi$1],readonly:[2,`readonly`,`readonly`,Gi$1],disabledInteractive:[2,`matChipInputDisabledInteractive`,`disabledInteractive`,Gi$1]},outputs:{chipEnd:`matChipInputTokenEnd`},exportAs:[`matChipInput`,`matChipInputFor`],features:[Ln$1]})}return n})();var nn=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Ar({type:n});static ɵinj=Sn$1({providers:[Ose,{provide:Xi,useValue:{separatorKeyCodes:[13]}}],imports:[sa,Qe]})}return n})();function Pn(n,p){if(n&1&&(oc(0,`div`,1)(1,`label`,2),$_(2,` Name`),oc(3,`span`),$_(4,`*`),Vf(),$_(5,`: `),Vf(),oc(6,`mat-form-field`,3),Cc(7,`input`,4),qS(),oc(8,`mat-error`),$_(9,`Name is required`),Vf()()()),n&2){let e=g_(2);oS(),Zy(`error`,e.hasError(`name`)),oS(6),xy(`formField`,e.form().name),ZS()}}function Ln(n,p){if(n&1&&(oc(0,`div`,1)(1,`label`,5),$_(2,` Email`),oc(3,`span`),$_(4,`*`),Vf(),$_(5,`: `),Vf(),oc(6,`mat-form-field`,3),Cc(7,`input`,6),qS(),oc(8,`mat-error`),$_(9,`A valid email is required`),Vf()()()),n&2){let e=g_(2);oS(),Zy(`error`,e.hasError(`email`)),oS(6),xy(`formField`,e.form().email),ZS()}}function Bn(n,p){if(n&1&&(oc(0,`div`,1)(1,`label`,7),$_(2),cM(3,`translate`),oc(4,`span`),$_(5,`*`),Vf(),$_(6,`: `),Vf(),oc(7,`mat-form-field`,3),Cc(8,`input`,8),qS(),oc(9,`mat-error`),$_(10),cM(11,`translate`),Vf()()()),n&2){let e=g_(2);oS(),Zy(`error`,e.hasError(`organisation`)),oS(),Wf(` `,lM(3,5,`COMMON.ORGANISATION`)),oS(6),xy(`formField`,e.form().organisation),ZS(),oS(2),Wf(` `,lM(11,7,`COMMON.ORGANISATION`),` is required `)}}function Vn(n,p){if(n&1&&(oc(0,`div`,1)(1,`label`,9),$_(2,` Phone: `),Vf(),oc(3,`mat-form-field`,3),Cc(4,`input`,10),qS(),oc(5,`mat-error`),$_(6,`Phone format is invalid`),Vf()()()),n&2){let e=g_(2);oS(),Zy(`error`,e.hasError(`phone`)),oS(3),xy(`formField`,e.form().phone),ZS()}}function Un(n,p){if(n&1&&(oc(0,`div`,1)(1,`mat-checkbox`,11),$_(2,` Assistance required `),Vf(),qS(),Vf()),n&2){let e=g_(2);oS(),xy(`formField`,e.form().assistance_required),ZS()}}function Hn(n,p){if(n&1&&(oc(0,`div`,1)(1,`mat-checkbox`,11),$_(2,` Visit expected `),Vf(),qS(),Vf()),n&2){let e=g_(2);oS(),xy(`formField`,e.form().visit_expected),ZS()}}function zn(n,p){if(n&1&&(oc(0,`form`,0),XT(1,Pn,10,3,`div`,1),XT(2,Ln,10,3,`div`,1),XT(3,Bn,12,9,`div`,1),XT(4,Vn,7,3,`div`,1),XT(5,Un,3,1,`div`,1),XT(6,Hn,3,1,`div`,1),Vf()),n&2){let e=g_();oS(),JT(e.form().name?1:-1),oS(),JT(e.form().email?2:-1),oS(),JT(e.form().organisation?3:-1),oS(),JT(e.form().phone?4:-1),oS(),JT(e.form().assistance_required?5:-1),oS(),JT(e.form().visit_expected?6:-1)}}var an=(()=>{class n{constructor(){this.form=xc(void 0)}hasError(e){let i=this.form()?.[e];return!!i&&i().invalid()&&i().touched()}static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=Lf({type:n,selectors:[[`user-form`]],inputs:{form:[1,`form`]},decls:1,vars:1,consts:[[`user-form`,``,1,`w-full`],[1,`flex`,`w-full`,`flex-col`],[`for`,`name`],[`appearance`,`outline`],[`matInput`,``,`placeholder`,`Name`,3,`formField`],[`for`,`email`],[`matInput`,``,`placeholder`,`Email Address`,3,`formField`],[`for`,`org`],[`matInput`,``,`placeholder`,`e.g. Conteso`,3,`formField`],[`for`,`phone`],[`matInput`,``,`type`,`tel`,`placeholder`,`Phone`,3,`formField`],[`color`,`primary`,3,`formField`]],template:function(i,t){i&1&&XT(0,zn,7,6,`form`,0),i&2&&JT(t.form()?0:-1)},dependencies:[ao,Vn$1,Kt,qe,ht,Be,Pe$1,Qr,on$1],styles:[`[_nghost-%COMP%], mat-form-field[_ngcontent-%COMP%]{width:100%}
/*# sourceMappingURL=user-form.component.css.map */`]})}}return n})();function qn(n,p){n&1&&(oc(0,`button`,2)(1,`icon`),$_(2,`close`),Vf()())}function Gn(n,p){if(n&1&&(oc(0,`main`,3),Cc(1,`user-form`,6),Vf()),n&2){let e=g_();oS(),xy(`form`,e.form())}}function Kn(n,p){n&1&&(oc(0,`main`,4),Cc(1,`mat-spinner`,7),oc(2,`p`),$_(3),cM(4,`translate`),Vf()()),n&2&&(oS(3),eD(lM(4,1,`COMMON.USER_SAVING`)))}function Qn(n,p){if(n&1){let e=u_();oc(0,`footer`,5)(1,`button`,8),$_(2),cM(3,`translate`),Vf(),oc(4,`button`,9),bc(`click`,function(){Og(e);return kg(g_().saveChanges())}),$_(5),cM(6,`translate`),Vf()()}n&2&&(oS(2),Wf(` `,lM(3,2,`COMMON.CANCEL`),` `),oS(3),Wf(` `,lM(6,4,`COMMON.SAVE`),` `))}var on=(()=>{class n extends pi{constructor(){super(),this._data=p(kx),this.event=W2(),this.user=Z(void 0),this.form=Z(u(new cs)),this.loading=Z(!1);let e=this._data.user||{};this.user.set(e),this.form.set(u(e))}saveChanges(){let e=this.form();if(e&&(e().markAsTouched(),e().valid())){let i=new cs(m(l({},e().value()),{is_external:!0}));this.event.emit({reason:`done`,metadata:i})}}static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=Lf({type:n,selectors:[[`new-user-modal`]],outputs:{event:`event`},features:[_y],decls:8,vars:6,consts:[[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`w-[calc(100%-1rem)]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[1,`flex`,`w-full`,`min-w-[24rem]`,`flex-col`,`items-center`,`px-4`],[1,`flex`,`w-full`,`flex-col`,`items-center`,`space-y-2`,`p-2`],[1,`border-base-200`,`flex`,`w-full`,`items-center`,`justify-end`,`space-x-2`,`border-t`,`p-2`],[3,`form`],[`diameter`,`32`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`],[`btn`,``,`matRipple`,``,3,`click`]],template:function(i,t){i&1&&(oc(0,`header`,0)(1,`h2`,1),$_(2),cM(3,`translate`),Vf(),XT(4,qn,3,0,`button`,2),Vf(),XT(5,Gn,2,1,`main`,3)(6,Kn,5,3,`main`,4),XT(7,Qn,7,6,`footer`,5)),i&2&&(oS(2),Wf(` `,lM(3,4,t.user()?.id?`COMMON.USER_EDIT`:`COMMON.USER_NEW`),` `),oS(2),JT(t.loading()?-1:4),oS(),JT(t.loading()?6:5),oS(2),JT(t.loading()?-1:7))},dependencies:[sa,Up,an,mre,pre,oae,Dt,Et,on$1],styles:[`main[_ngcontent-%COMP%]{min-height:20em!important;width:100%}footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:8em}
/*# sourceMappingURL=new-user-modal.component.css.map */`]})}}return n})();var Wn=[`search_field`];var $n=n=>({name:n});var Yn=n=>({email:n});function Xn(n,p){if(n&1){let e=u_();oc(0,`mat-chip-row`,13),bc(`removed`,function(){let t=Og(e).$index;return kg(g_().removeUser(t))}),oc(1,`div`,14)(2,`div`),$_(3),Vf()(),oc(4,`button`,15),cM(5,`translate`),oc(6,`icon`),$_(7,`cancel`),Vf()()()}if(n&2){let e=p.$implicit;Zy(`bg-base-200`,!e.is_external)(`bg-warning`,e.is_external),xy(`matTooltip`,e.email),oS(),Zy(`text-base-content!`,!e.is_external)(`text-warning-content!`,e.is_external),oS(2),eD(e.name||e.email),oS(),Zy(`text-base-content!`,!e.is_external)(`text-warning-content!`,e.is_external),Ic(`aria-label`,dM(5,15,`COMMON.REMOVE_ITEM`,rM(18,$n,e.name||e.email)))}}function Zn(n,p){n&1&&Cc(0,`mat-spinner`,10)}function Jn(n,p){if(n&1){let e=u_();oc(0,`mat-option`,16),bc(`click`,function(){Og(e);return kg(g_().addUserFromEmail())}),$_(1),cM(2,`translate`),Vf()}if(n&2){let e=g_();oS(),Wf(` `,dM(2,1,`FORM.USER_LIST_ADD_EXTERNAL`,rM(4,Yn,e.search())),` `)}}function ea(n,p){if(n&1&&($_(0,` (`),oc(1,`span`,20),$_(2),Vf(),$_(3,`) `)),n&2){let e=g_().$implicit;oS(2),eD(e.username)}}function ta(n,p){if(n&1){let e=u_();oc(0,`mat-option`,17),bc(`click`,function(){let t=Og(e).$implicit;return kg(g_().addUser(t))}),oc(1,`div`,14),Cc(2,`a-user-avatar`,18),oc(3,`div`,11)(4,`div`),$_(5),Vf(),oc(6,`div`,19),$_(7),XT(8,ea,4,1),Vf()()()()}if(n&2){let e=p.$implicit;oS(2),xy(`user`,e),oS(3),eD(e.name),oS(2),Wf(` `,e.email,` `),oS(),JT(e.username&&e.username!==e.email?8:-1)}}function ia(n,p){if(n&1){let e=u_();oc(0,`div`,12)(1,`button`,21),bc(`click`,function(){Og(e);return kg(g_().openNewUserModal())}),oc(2,`div`,22)(3,`span`,23),$_(4),cM(5,`translate`),Vf(),oc(6,`span`,24),$_(7),cM(8,`translate`),Vf()()(),oc(9,`button`,25)(10,`div`,22)(11,`span`,23),$_(12),cM(13,`translate`),Vf(),oc(14,`span`,24),$_(15),cM(16,`translate`),Vf()(),oc(17,`input`,26),bc(`change`,function(t){Og(e);return kg(g_().addUsersFromFile(t))}),Vf()(),oc(18,`button`,27),bc(`click`,function(){Og(e);let t=g_();return t.downloadCSVTemplate(),kg(t.download.emit())}),oc(19,`div`,22)(20,`span`,23),$_(21),cM(22,`translate`),Vf(),oc(23,`span`,24),$_(24),cM(25,`translate`),Vf()()()()}n&2&&(oS(4),Wf(` `,lM(5,6,`FORM.USER_BTN_ADD_EXTERNAL`),` `),oS(3),Wf(` `,lM(8,8,`FORM.USER_BTN_ADD_EXTERNAL_SIMPLE`),` `),oS(5),Wf(` `,lM(13,10,`FORM.USER_BTN_UPLOAD`),` `),oS(3),Wf(` `,lM(16,12,`FORM.USER_BTN_UPLOAD_SIMPLE`),` `),oS(6),Wf(` `,lM(22,14,`FORM.USER_BTN_TEMPLATE`),` `),oS(3),Wf(` `,lM(25,16,`FORM.USER_BTN_TEMPLATE_SIMPLE`),` `))}function lt(n){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n)}var na=[`text/csv`,`text/plain`];var aa=[`application/vnd.ms-excel`,`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`];var ec=(()=>{class n extends pi{async searchStaff(e){return this._use_basic_user_search()?u2({q:e,authority_id:Kn$1()?.id}).then(i=>i.data.map(t=>new cs(t))):Je(e)}constructor(){super(),this._dialog=p(Qu),this._settings=p(to),this.time=xc(Date.now()),this.disabled=Z2(void 0),this.limit=xc(3),this.guests=xc(!1),this.guests_only=xc(!1),this.hide_actions=xc(!1),this.custom_template=xc(!1),this.filter=xc(void 0),this.new_user=W2(),this.download=W2(),this.separatorKeysCodes=[13,188],this.search=Z(``),this._search_el=Y2(`search_field`),this._use_basic_user_search=this._settings.signal(`basic_user_search`,!1),this._debounced_search=t8(this.search,300),this._user_search=DM({params:()=>({q:this._debounced_search.value()}),loader:async({params:{q:e}})=>{if(!e)return[];try{if(!this.guests())return await this.searchStaff(e);let[i,t]=await Promise.all([this.searchStaff(e),We(e)]),a=this.guests_only()?[]:i,o=[],v=this._settings.get(`visitor-invitees`)||[];for(let k of v){if(typeof k!=`string`)continue;let[cn,rn,sn,ln]=k.split(`|`);o.push({email:cn,name:rn,company:sn,international:ln===`1`})}return Rn(a.concat(t).concat(o),`email`)}catch{return[]}}}),this.user_list=Te(()=>[...this._user_search.value()??[]].sort((e,i)=>e.name.localeCompare(i.name))),this.loading=Te(()=>this._user_search.isLoading()),this.active_list=Z([]),this.validFn=e=>lt(e),this.emptyClick=()=>this.openNewUserModal(new cs),this.search_valid_email=Te(()=>lt(this.search()))}updateSearch(e=``){this.timeout(`search`,()=>this.search.set(e))}addUserFromEmail(e=``){if(e||(e=this.search()),!lt(e))return;let i=new cs({id:e,email:e,name:e.split(`@`)[0]});this.addUser(i);let{name:t,organisation:a}=i,o=`${e}|${t}|${a}|0`,v=this._settings.get(`visitor-invitees`)||[];this._settings.saveUserSetting(`visitor-invitees`,[...v.filter(k=>!k.includes(e)),o]),this.timeout(`clear_search`,()=>{this.search.set(``),this._search_el().nativeElement.value=``},100)}addUser(e){let i=e.id||e.email,t=this.active_list().filter(a=>(a.id||a.email)!==i);this.setValue([...t,new cs(m(l({},e),{id:e.id||e.email,visit_expected:(!e.id&&e.is_external!==!0?e.visit_expected:null)??!0}))]),this.timeout(`clear_search`,()=>{this.search.set(``),this._search_el().nativeElement.value=``},100)}removeUser(e){let i=[...this.active_list()];e<0||e>=i.length||(i.splice(e,1),this.setValue(i))}addUsersFromFile(e){if(e.target){let i=e.target.files[0];if(i){if(!na.includes(i.type)||aa.includes(i.type)){ES(`Only CSV files are supported`);return}let t=new FileReader;t.readAsText(i,`UTF-8`),t.addEventListener(`load`,a=>{this.processCsvData(a.srcElement.result),e.target.value=``}),t.addEventListener(`error`,a=>ES(`Error reading file.`))}}}processCsvData(e){let i=$2(e)||[],t=On$1()?.staff_id||`unknown`;for(let a of i){a.name=a.name||`${a.first_name} ${a.last_name}`;let o=(a.name||`${Math.floor(Math.random()*99999999)}`).split(` `).join(`_`).toLowerCase();a.email||(a.email=`${o}+${t}@guest.${p$1}`);let v=this._settings.get(`app.bookings.internal_emails`)||[`place.tech`];a.visit_expected=a.visit_expected??!v.find(k=>a.email.endsWith(k)),a.phone=``+a.phone,this.addUser(new cs(a))}}downloadCSVTemplate(){if(this.custom_template())return;Y2$1(`template.csv`,`Organisation,First Name,Last Name,Email,Phone,Assistance Required,Visit Expected
Fake Org,John,Smith,john.smith@example.com,01234567898,false,true`)}setValue(e){this.active_list.set(e||[]),this._onChange&&this._onChange(e||[])}writeValue(e){this.active_list.set(e||[])}setDisabledState(e){this.disabled.set(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouch=e}displayFn(e){return e?.name||``}openNewUserModal(e=new cs){let i=this._dialog.open(on,{width:`auto`,height:`auto`,data:{user:e}}),t=i.componentInstance?.event;t&&T(t).pipe(_t(a=>a.reason===`done`)).subscribe(a=>{this.addUser(a.metadata),i.close()})}static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=Lf({type:n,selectors:[[`a-user-list-field`]],viewQuery:function(i,t){i&1&&zy(t._search_el,Wn,5),i&2&&E_()},inputs:{time:[1,`time`],disabled:[1,`disabled`],limit:[1,`limit`],guests:[1,`guests`],guests_only:[1,`guests_only`],hide_actions:[1,`hide_actions`],custom_template:[1,`custom_template`],filter:[1,`filter`]},outputs:{disabled:`disabledChange`,new_user:`new_user`,download:`download`},features:[tM([{provide:Wo,useExisting:la(()=>n),multi:!0}]),_y],decls:18,vars:11,consts:[[`origin`,`matAutocompleteOrigin`],[`chipList`,``],[`search_field`,``],[`auto`,`matAutocomplete`],[`form-field`,``,1,`mb-4`],[`search`,``],[`appearance`,`outline`,`matAutocompleteOrigin`,``,1,`w-full`],[`aria-label`,`User Seleciom`],[`user`,``,3,`bg-base-200`,`bg-warning`,`matTooltip`],[`name`,`user_email`,3,`ngModelChange`,`matChipInputTokenEnd`,`placeholder`,`ngModel`,`matAutocomplete`,`matChipInputFor`,`matChipInputSeparatorKeyCodes`],[`diameter`,`24`,`matSuffix`,``],[1,`leading-tight`],[`actions`,``,1,`-mt-4`,`flex`,`items-center`,`space-x-2`],[`user`,``,3,`removed`,`matTooltip`],[1,`flex`,`items-center`,`space-x-2`],[`matChipRemove`,``,`remove`,``],[3,`click`],[1,`leading-tight`,3,`click`],[1,`-ml-2`,3,`user`],[1,`text-xs`,`opacity-30`],[1,`truncate`],[`btn`,``,`matRipple`,``,`type`,`button`,`name`,`new-contact`,1,`inverse`,`flex-1`,`sm:flex-none`,3,`click`],[1,`flex`,`items-center`,`justify-center`],[1,`hidden`,`sm:inline`],[1,`inline`,`sm:hidden`],[`btn`,``,`matRipple`,``,`type`,`button`,`name`,`upload-csv`,1,`inverse`,`relative`,`flex-1`,`sm:flex-none`],[`type`,`file`,1,`absolute`,`inset-0`,`opacity-0`,3,`change`],[`btn`,``,`matRipple`,``,`type`,`button`,`name`,`download-template`,1,`inverse`,`flex-1`,`sm:flex-none`,3,`click`]],template:function(i,t){if(i&1&&(oc(0,`div`,4)(1,`div`,5)(2,`mat-form-field`,6,0)(4,`mat-chip-grid`,7,1),n_(6,Xn,8,20,`mat-chip-row`,8,e_),Vf(),oc(8,`input`,9,2),cM(10,`translate`),bc(`ngModelChange`,function(o){return t.updateSearch(o)})(`matChipInputTokenEnd`,function(o){return t.addUserFromEmail(o.value)}),Vf(),qS(),XT(11,Zn,1,0,`mat-spinner`,10),Vf(),oc(12,`mat-autocomplete`,null,3),XT(14,Jn,3,6,`mat-option`),n_(15,ta,9,4,`mat-option`,11,t_),Vf()(),XT(17,ia,26,18,`div`,12),Vf()),i&2){let a=w_(5),o=w_(13);Ic(`disabled`,t.disabled()),oS(6),r_(t.active_list()),oS(2),xy(`placeholder`,lM(10,9,`FORM.USER_LIST_PLACEHOLDER`))(`ngModel`,t.search())(`matAutocomplete`,o)(`matChipInputFor`,a)(`matChipInputSeparatorKeyCodes`,t.separatorKeysCodes),ZS(),oS(3),JT(t.loading()?11:-1),oS(3),JT(t.search_valid_email()?14:-1),oS(),r_(t.user_list()),oS(2),JT(t.hide_actions()?-1:17)}},dependencies:[JD,Kt,qe,xt$1,nn,en,tn,Ji,st,qi,zi,PR,tt,ji,cG,BE,nG,JO,sa,Up,oae,Yt$1,mt,w,on$1],encapsulation:2})}}return n})();export{qi as a,nn as i,at as n,tt as o,ec as r,zi as s,Dn as t};
//# debugId=e4aede29-f97b-567a-9548-0cfac5b126c5
//# sourceMappingURL=chunk-Ca7In9qK.js.map