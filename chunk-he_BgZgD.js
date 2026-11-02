import{i as o,n as m,t as l}from"./chunk-DzscigDP.js";import{$n as iy,$r as w,$t as Ym,A as FT,B as IT,Br as sy,C as Dd$1,Ct as Rp,E as Dy,Fn as fr$1,Fr as rs,G as Jr,Gr as ue$1,I as Gf,In as fy,It as UD,Jn as ha,Kn as hT,Kt as WT,L as Gp,Mn as ey,Mt as T_,Nn as fS,O as Er$1,On as ea,Or as pt,Pr as r_,Pt as Te,Qr as vy,Rr as se,S as Db,Sn as dT,Sr as ny,St as Re,Tt as ST,U as JS,Ur as uD,Vn as g_,Xn as he$1,Y as Kn,Yn as hd,Z as Lm,Zr as vw,Zt as YH,_r as mn,_t as Qm,a as $p,an as Zm,at as OT,bt as RT,ci as xt,dt as Pd,ei as w_,en as Yo$1,et as N,fn as b_,ft as Pe,g as Br$1,ii as xC,ir as jm,j as Fy,kt as Ss,li as y,nn as Z,nt as NT,pt as Po$1,s as $w,si as xT,tt as ND,u as Ap,ur as lT,vr as na,vt as RC,wn as dc,wt as SD,xn as dS,yr as ne,zn as gT,zr as sg,zt as VH}from"./chunk-w_clFm31.js";import{Bt as nr$1,Ct as ga,E as Kn$1,Ft as lf,Kt as pf,Lt as ma,M as Ms,N as Mu,Nt as ke$1,O as Ku,Q as Vu,St as ft,T as Ju,Tt as gs,V as Qu,W as Sl$1,Y as Ui,Yt as ps,Z as V$1,_ as Gh,at as Zu,b as Hf,ct as _i,dt as bf,en as sn,gt as ee,i as $t$1,nt as Xu,ot as _a,rn as te,s as Bu,t as $,un as vt,vt as et$1,xt as fs}from"./chunk-BFPoFtKo.js";import{B as vt$1,C as ge,E as jt,F as tr$1,N as sr$1,P as ti,R as v,a as D,b as ci,c as Jt,g as Ut,i as Bt$1,j as qs,l as Kt,m as Tt,o as Dt,w as ii,x as f,y as be}from"./chunk-B17E2uQY.js";import{$ as Sg,B as Ma$1,Ct as dg,Dt as ed,H as Nm,J as P,Jt as le,Kt as km,Lt as j,N as Jn,S as Gm,St as df,Tt as dm,U as Oa$1,W as Oe,Wt as ju,Xt as mg,_n as xg,d as Ce,fn as we,ft as Ys,gn as xd,i as Ad,in as rm,k as Ia$1,l as C,lt as Xe,m as Dh,n as Aa$1,nt as Uc,o as Bc,ot as W,sn as st,t as $$1,v as Fe,vt as cg,w as Gs,x as Gc,xt as ct}from"./chunk-CWytEn2_.js";import{c as Et,n as f$1,r as a}from"./main.js";import{S as q,T as zt$1,_ as ci$1,a as Ht,c as Pe$1,f as Vt$1,h as Xt,i as Ft$1,m as Xe$1,n as A,o as It,p as Wi,s as Le,t as $$2,v as di,w as wt,x as pt$1,y as je}from"./chunk-C57z-79G.js";import{n as mt,t as Yt}from"./chunk-tJTlzMN8.js";import{a as de,i as ae,o as le$1}from"./chunk-Bn40vxzt.js";var Je=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new se;bulk={select:i=>this._select(i),deselect:i=>this._deselect(i),setSelection:i=>this._setSelection(i)};constructor(i=!1,e,n=!0,a){this._multiple=i,this._emitChanges=n,this.compareWith=a,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){return this._select(i)}deselect(...i){return this._deselect(i)}setSelection(...i){return this._setSelection(i)}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_select(i){this._verifyValueAssignment(i),i.forEach(n=>this._markSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(i){this._verifyValueAssignment(i),i.forEach(n=>this._unmarkSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(i){this._verifyValueAssignment(i);let e=this.selected,n=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!n.has(this._getConcreteValue(o,n))).forEach(o=>this._unmarkSelected(o));let a=this._hasQueuedChanges();return this._emitChangeEvent(),a}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let n of e)if(this.compareWith(i,n))return n;return i}else return i}};var uo=(()=>{class t{_listeners=[];notify(e,n){for(let a of this._listeners)a(e,n)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(n=>e!==n)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(n){return new(n||t)};static ɵprov=Pe({token:t,factory:t.ɵfac})}return t})();var go=[`trigger`];var bo=[`panel`];var yo=[[[`mat-select-trigger`]],`*`];var vo=[`mat-select-trigger`,`*`];function xo(t,i){if(t&1&&(ea(0,`span`,4),r_(1),hd()),t&2){let e=ST();$w(),vy(e.placeholder)}}function ko(t,i){t&1&&xT(0)}function Co(t,i){if(t&1&&(ea(0,`span`,11),r_(1),hd()),t&2){let e=ST(2);$w(),vy(e.triggerValue)}}function wo(t,i){if(t&1&&(ea(0,`span`,5),lT(1,ko,1,0)(2,Co,2,1,`span`,11),hd()),t&2){let e=ST();$w(),dT(e.customTrigger?1:2)}}function So(t,i){if(t&1){let e=IT();ea(0,`div`,12,1),ny(`keydown`,function(a){Ap(e);return Rp(ST()._handleKeydown(a))}),xT(2,1),hd()}if(t&2){let e=ST();WT(e.panelClass),fy(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),Zm(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var Mo=new w(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let t=y(he$1);return()=>It(t)}});var Ao=new w(`MAT_SELECT_CONFIG`);var Eo=new w(`MatSelectTrigger`);var _n=class{source;value;constructor(i,e){this.source=i,this.value=e}};var Rs=(()=>{class t{_viewportRuler=y(A);_changeDetectorRef=y(Pd);_elementRef=y(Kn);_dir=y(ci,{optional:!0});_idGenerator=y(ge);_renderer=y(Po$1);_parentFormField=y(le$1,{optional:!0});ngControl=y(we,{self:!0,optional:!0});_liveAnnouncer=y(ti);_defaultOptions=y(Ao,{optional:!0});_animationsDisabled=Dt();_popoverLocation;_initialized=new se;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let n=this.options.toArray()[e];if(n){let a=this.panel.nativeElement,o=cg(e,this.options,this.optionGroups),r=n._getHostElement();e===0&&o===1?a.scrollTop=0:a.scrollTop=dg(r.offsetTop,r.offsetHeight,a.scrollTop,a.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new _n(this,e)}_scrollStrategyFactory=y(Mo);_panelOpen=!1;_compareWith=(e,n)=>e===n;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new se;_errorStateTracker;stateChanges=new se;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=pt(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Jn.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=SD(()=>{let e=this.options;return e?e.changes.pipe(UD(e),dc(()=>ND(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(dc(()=>this.optionSelectionChanges))});openedChange=new xt;_openedStream=this.openedChange.pipe(mn(e=>e),Te(()=>{}));_closedStream=this.openedChange.pipe(mn(e=>!e),Te(()=>{}));selectionChange=new xt;valueChange=new xt;constructor(){let e=y(mg),n=y(Uc,{optional:!0}),a=y(Bc,{optional:!0}),o=y(new Fy(`tabindex`),{optional:!0}),r=y(Ht,{optional:!0}),s=y(Et,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Oa$1(e,s||this.ngControl,a,n,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=r?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new Je(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(uD(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(uD(this._destroy)).subscribe(e=>{e.added.forEach(n=>n.select()),e.removed.forEach(n=>n.deselect())}),this.options.changes.pipe(UD(null),uD(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),n=this.ngControl;if(e!==this._triggerAriaLabelledBy){let a=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?a.setAttribute(`aria-labelledby`,e):a.removeAttribute(`aria-labelledby`)}n&&(this._previousControl!==n.control&&(this._previousControl!==void 0&&n.disabled!==null&&n.disabled!==this.disabled&&(this.disabled=n.disabled),this._previousControl=n.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(fr$1(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{n(),clearTimeout(a),this._cleanupDetach=void 0};let e=this.panel.nativeElement,n=this._renderer.listen(e,`animationend`,o=>{o.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),a=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(n=>n.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let n=e.keyCode,a=n===40||n===38||n===37||n===39,o=n===13||n===32,r=this._keyManager;if(!r.isTyping()&&o&&!vt$1(e)||(this.multiple||e.altKey)&&a)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;r.onKeydown(e);let c=this.selected;c&&s!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let n=this._keyManager,a=e.keyCode,o=a===40||a===38,r=n.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!r&&(a===13||a===32)&&n.activeItem&&!vt$1(e))e.preventDefault(),n.activeItem._selectViaInteraction();else if(!r&&this._multiple&&a===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(s?c.select():c.deselect())})}else{let s=n.activeItemIndex;n.onKeydown(e),this._multiple&&o&&e.shiftKey&&n.activeItem&&n.activeItemIndex!==s&&n.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!vt$1(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(n=>n.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(n=>this._selectOptionByValue(n)),this._sortValues();else{let n=this._selectOptionByValue(e);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let n=this.options.find(a=>{if(this._selectionModel.isSelected(a))return!1;try{return(a.value!=null||this.canSelectNullableOptions)&&this._compareWith(a.value,e)}catch{return!1}});return n&&this._selectionModel.select(n),n}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof zt$1?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new be(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=ND(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(uD(e)).subscribe(n=>{this._onSelect(n.source,n.isUserInput),n.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),ND(...this.options.map(n=>n._stateChanges)).pipe(uD(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,n){let a=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(a!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),n&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),n&&this.focus())),a!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((n,a)=>this.sortComparator?this.sortComparator(n,a,e):e.indexOf(n)-e.indexOf(a)),this.stateChanges.next()}}_propagateChanges(e){let n;this.multiple?n=this.selected.map(a=>a.value):n=this.selected?this.selected.value:e,this._value=n,this.valueChange.emit(n),this._onChange(n),this.selectionChange.emit(this._getChangeEvent(n)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let n=0;n<this.options.length;n++)if(!this.options.get(n).disabled){e=n;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,n=e?e+` `:``;return this.ariaLabelledby?n+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute(`aria-describedby`,e.join(` `)):n.removeAttribute(`aria-describedby`)}onContainerClick(e){let n=v(e);n&&(n.tagName===`MAT-OPTION`||n.classList.contains(`cdk-overlay-backdrop`)||n.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(n){return new(n||t)};static ɵcmp=Db({type:t,selectors:[[`mat-select`]],contentQueries:function(n,a,o){if(n&1&&iy(o,Eo,5)(o,Ia$1,5)(o,xd,5),n&2){let r;RT(r=OT())&&(a.customTrigger=r.first),RT(r=OT())&&(a.options=r),RT(r=OT())&&(a.optionGroups=r)}},viewQuery:function(n,a){if(n&1&&sy(go,5)(bo,5)(ci$1,5),n&2){let o;RT(o=OT())&&(a.trigger=o.first),RT(o=OT())&&(a.panel=o.first),RT(o=OT())&&(a._overlayDir=o.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(n,a){n&1&&ny(`keydown`,function(r){return a._handleKeydown(r)})(`focus`,function(){return a._onFocus()})(`blur`,function(){return a._onBlur()}),n&2&&(Zm(`id`,a.id)(`tabindex`,a.disabled?-1:a.tabIndex)(`aria-controls`,a.panelOpen?a.id+`-panel`:null)(`aria-expanded`,a.panelOpen)(`aria-label`,a.ariaLabel||null)(`aria-required`,a.required.toString())(`aria-disabled`,a.disabled.toString())(`aria-invalid`,a.errorState)(`aria-activedescendant`,a._getAriaActiveDescendant()),fy(`mat-mdc-select-disabled`,a.disabled)(`mat-mdc-select-invalid`,a.errorState)(`mat-mdc-select-required`,a.required)(`mat-mdc-select-empty`,a.empty)(`mat-mdc-select-multiple`,a.multiple)(`mat-select-open`,a.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,dS],disableRipple:[2,`disableRipple`,`disableRipple`,dS],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:fS(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,dS],placeholder:`placeholder`,required:[2,`required`,`required`,dS],multiple:[2,`multiple`,`multiple`,dS],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,dS],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,fS],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,dS]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[g_([{provide:ae,useExisting:t},{provide:Ad,useExisting:t}]),na],ngContentSelectors:vo,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(n,a){if(n&1&&(NT(yo),ea(0,`div`,2,0),ny(`click`,function(){return a.open()}),ea(3,`div`,3),lT(4,xo,2,1,`span`,4)(5,wo,3,1,`span`,5),hd(),ea(6,`div`,6)(7,`div`,7),$p(),ea(8,`svg`,8),Qm(9,`path`,9),hd()()()(),jm(10,So,3,16,`ng-template`,10),ny(`detach`,function(){return a.close()})(`backdropClick`,function(){return a.close()})(`overlayKeydown`,function(r){return a._handleOverlayKeydown(r)})),n&2){let o=FT(1);$w(3),Zm(`id`,a._valueId),$w(),dT(a.empty?4:5),$w(6),Ym(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,a._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,a._scrollStrategy)(`cdkConnectedOverlayOrigin`,a._preferredOverlayOrigin||o)(`cdkConnectedOverlayPositions`,a._positions)(`cdkConnectedOverlayWidth`,a._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,a._popoverLocation)}},dependencies:[zt$1,ci$1],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return t})();var Ls=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=Yo$1({type:t});static ɵinj=Er$1({imports:[di,Sg,Tt,Vt$1,de,Sg]})}return t})();function Do(t,i){}var he=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var gn=(()=>{class t extends pt$1{_elementRef=y(Kn);_focusTrapFactory=y(Jt);_config;_interactivityChecker=y(Kt);_ngZone=y(ue$1);_focusMonitor=y(jt);_renderer=y(Po$1);_changeDetectorRef=y(Pd);_injector=y(he$1);_platform=y(f);_document=y(Z);_portalOutlet;_focusTrapped=new se;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=y(he,{optional:!0})||new he,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let n=this._ariaLabelledByQueue.indexOf(e);n>-1&&(this._ariaLabelledByQueue.splice(n,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),n}attachTemplatePortal(e){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),n}attachDomPortal=e=>{this._portalOutlet.hasAttached();let n=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),n};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,n){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{o(),r(),e.removeAttribute(`tabindex`)},o=this._renderer.listen(e,`blur`,a),r=this._renderer.listen(e,`mousedown`,a)})),e.focus(n)}_focusByCssSelector(e,n){let a=this._elementRef.nativeElement.querySelector(e);a&&this._forceFocus(a,n)}_trapFocus(e){this._isDestroyed||vw(()=>{let n=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||n.focus(e);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,n=null;if(typeof e==`string`?n=this._document.querySelector(e):typeof e==`boolean`?n=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(n=e),this._config.restoreFocus&&n&&typeof n.focus==`function`){let a=Ut(),o=this._elementRef.nativeElement;(!a||a===this._document.body||a===o||o.contains(a))&&(this._focusMonitor?(this._focusMonitor.focusVia(n,this._closeInteractionType),this._closeInteractionType=null):n.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,n=Ut();return e===n||e.contains(n)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Ut()))}static ɵfac=function(n){return new(n||t)};static ɵcmp=Db({type:t,selectors:[[`cdk-dialog-container`]],viewQuery:function(n,a){if(n&1&&sy(Wi,7),n&2){let o;RT(o=OT())&&(a._portalOutlet=o.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(n,a){n&2&&Zm(`id`,a._config.id||null)(`role`,a._config.role)(`aria-modal`,a._config.ariaModal)(`aria-labelledby`,a._config.ariaLabel?null:a._ariaLabelledByQueue[0])(`aria-label`,a._config.ariaLabel)(`aria-describedby`,a._config.ariaDescribedBy||null)},features:[Lm],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(n,a){n&1&&jm(0,Do,0,0,`ng-template`,0)},dependencies:[Wi],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return t})();var ve=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new se;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,e){this.overlayRef=i,this.config=e,this.disableClose=e.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(n=>{n.keyCode===27&&!this.disableClose&&!vt$1(n)&&(n.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(i,e){if(this._canClose(i)){let n=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),n.next(i),n.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i=``,e=``){return this.overlayRef.updateSize({width:i,height:e}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(i,e,this.componentInstance))}};var Oo=new w(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let t=y(he$1);return()=>Le(t)}});var Io=new w(`DialogData`);var To=new w(`DefaultDialogConfig`);function No(t){let i=pt(t),e=new xt;return{valueSignal:i,get value(){return i()},change:e,ngOnDestroy(){e.complete()}}}var bn=(()=>{class t{_injector=y(he$1);_defaultOptions=y(To,{optional:!0});_parentDialog=y(t,{optional:!0,skipSelf:!0});_overlayContainer=y(Xe$1);_idGenerator=y(ge);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new se;_afterOpenedAtThisLevel=new se;_ariaHiddenElements=new Map;_scrollStrategy=y(Oo);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=SD(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(UD(void 0)));open(e,n){n=l(l({},this._defaultOptions||new he),n),n.id=n.id||this._idGenerator.getId(`cdk-dialog-`),n.id&&this.getDialogById(n.id);let o=this._getOverlayConfig(n),r=Xt(this._injector,o),s=new ve(r,n),c=this._attachContainer(r,s,n);if(s.containerInstance=c,!this.openDialogs.length){let l=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(fr$1(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(l)}):this._hideNonDialogContentFromAssistiveTechnology(l)}return this._attachDialogContent(e,s,c,n),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){fn(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(n=>n.id===e)}ngOnDestroy(){fn(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),fn(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let n=new q({positionStrategy:e.positionStrategy||je().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(n.backdropClass=e.backdropClass),n}_attachContainer(e,n,a){let o=a.injector||a.viewContainerRef?.injector,r=[{provide:he,useValue:a},{provide:ve,useValue:n},{provide:wt,useValue:e}],s;a.container?typeof a.container==`function`?s=a.container:(s=a.container.type,r.push(...a.container.providers(a))):s=gn;let c=new Ft$1(s,a.viewContainerRef,he$1.create({parent:o||this._injector,providers:r}));return e.attach(c).instance}_attachDialogContent(e,n,a,o){if(e instanceof Br$1){let r=this._createInjector(o,n,a,void 0),s={$implicit:o.data,dialogRef:n};o.templateContext&&(s=l(l({},s),typeof o.templateContext==`function`?o.templateContext():o.templateContext)),a.attachTemplatePortal(new $$2(e,null,s,r))}else{let r=this._createInjector(o,n,a,this._injector),s=a.attachComponentPortal(new Ft$1(e,o.viewContainerRef,r,null,o.bindings));n.componentRef=s,n.componentInstance=s.instance}}_createInjector(e,n,a,o){let r=e.injector||e.viewContainerRef?.injector,s=[{provide:Io,useValue:e.data},{provide:ve,useValue:n}];return e.providers&&(typeof e.providers==`function`?s.push(...e.providers(n,e,a)):s.push(...e.providers)),e.direction&&(!r||!r.get(ci,null,{optional:!0}))&&s.push({provide:ci,useValue:No(e.direction)}),he$1.create({parent:r||o,providers:s})}_removeOpenDialog(e,n){let a=this.openDialogs.indexOf(e);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,r)=>{o?r.setAttribute(`aria-hidden`,o):r.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),n&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let n=e.parentElement.children;for(let a=n.length-1;a>-1;a--){let o=n[a];o!==e&&o.nodeName!==`SCRIPT`&&o.nodeName!==`STYLE`&&!o.hasAttribute(`aria-live`)&&!o.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(o,o.getAttribute(`aria-hidden`)),o.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(n){return new(n||t)};static ɵprov=Pe({token:t,factory:t.ɵfac})}return t})();function fn(t,i){let e=t.length;for(;e--;)i(t[e])}var ka=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=Yo$1({type:t});static ɵinj=Er$1({providers:[bn],imports:[di,Pe$1,ii,Pe$1]})}return t})();function Ro(t,i){}var Lt=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var yn=`mdc-dialog--open`;var Ca=`mdc-dialog--opening`;var wa=`mdc-dialog--closing`;var Lo=150;var Fo=75;var Po=(()=>{class t extends gn{_animationStateChanged=new xt;_animationsEnabled=!Dt();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Ma(this._config.enterAnimationDuration)??Lo:0;_exitAnimationDuration=this._animationsEnabled?Ma(this._config.exitAnimationDuration)??Fo:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Sa,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ca,yn)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(yn),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(yn),this._animationsEnabled?(this._hostElement.style.setProperty(Sa,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(wa)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Ca,wa)}_waitForAnimationToComplete(e,n){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(n,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let n=super.attachComponentPortal(e);return n.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),n}static ɵfac=(()=>{let e;return function(a){return(e||(e=sg(t)))(a||t)}})();static ɵcmp=Db({type:t,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(n,a){n&2&&(ey(`id`,a._config.id),Zm(`aria-modal`,a._config.ariaModal)(`role`,a._config.role)(`aria-labelledby`,a._config.ariaLabel?null:a._ariaLabelledByQueue[0])(`aria-label`,a._config.ariaLabel)(`aria-describedby`,a._config.ariaDescribedBy||null),fy(`_mat-animation-noopable`,!a._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,a._actionSectionCount>0))},features:[Lm],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(n,a){n&1&&(ea(0,`div`,0)(1,`div`,1),jm(2,Ro,0,0,`ng-template`,2),hd()())},dependencies:[Wi],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})}return t})();var Sa=`--mat-dialog-transition-duration`;function Ma(t){return t==null?null:typeof t==`number`?t:t.endsWith(`ms`)?Bt$1(t.substring(0,t.length-2)):t.endsWith(`s`)?Bt$1(t.substring(0,t.length-1))*1e3:t===`0`?0:null}var Rt=(function(t){return t[t.OPEN=0]=`OPEN`,t[t.CLOSING=1]=`CLOSING`,t[t.CLOSED=2]=`CLOSED`,t})(Rt||{});var Be=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Jr(1);_beforeClosed=new Jr(1);_result;_closeFallbackTimeout;_state=Rt.OPEN;_closeInteractionType;constructor(i,e,n){this._ref=i,this._config=e,this._containerInstance=n,this.disableClose=e.disableClose,this.id=i.id,i.addPanelClass(`mat-mdc-dialog-panel`),n._animationStateChanged.pipe(mn(a=>a.state===`opened`),fr$1(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),n._animationStateChanged.pipe(mn(a=>a.state===`closed`),fr$1(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),ND(this.backdropClick(),this.keydownEvents().pipe(mn(a=>a.keyCode===27&&!this.disableClose&&!vt$1(a)))).subscribe(a=>{this.disableClose||(a.preventDefault(),Aa(this,a.type===`keydown`?`keyboard`:`mouse`))})}close(i){let e=this._config.closePredicate;e&&!e(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(mn(n=>n.state===`closing`),fr$1(1)).subscribe(n=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),n.totalTime+100)}),this._state=Rt.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let e=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?e.left(i.left):e.right(i.right):e.centerHorizontally(),i&&(i.top||i.bottom)?i.top?e.top(i.top):e.bottom(i.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(i=``,e=``){return this._ref.updateSize(i,e),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=Rt.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Aa(t,i,e){return t._closeInteractionType=i,t.close(e)}var vn=new w(`MatMdcDialogData`);var Bo=new w(`mat-mdc-dialog-default-options`);var qo=new w(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let t=y(he$1);return()=>Le(t)}});var Ea=(()=>{class t{_defaultOptions=y(Bo,{optional:!0});_scrollStrategy=y(qo);_parentDialog=y(t,{optional:!0,skipSelf:!0});_idGenerator=y(ge);_injector=y(he$1);_dialog=y(bn);_animationsDisabled=Dt();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new se;_afterOpenedAtThisLevel=new se;dialogConfigClass=Lt;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=SD(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(UD(void 0)));constructor(){this._dialogRefConstructor=Be,this._dialogContainerType=Po,this._dialogDataToken=vn}open(e,n){let a;n=l(l({},this._defaultOptions||new Lt),n),n.id=n.id||this._idGenerator.getId(`mat-mdc-dialog-`),n.scrollStrategy=n.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,m(l({},n),{positionStrategy:je(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||n.enterAnimationDuration?.toLocaleString()===`0`||n.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:n},{provide:he,useValue:n}]},templateContext:()=>({dialogRef:a}),providers:(r,s,c)=>(a=new this._dialogRefConstructor(r,n,c),a.updatePosition(n?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:a},{provide:ve,useValue:null}])}));return a.componentRef=o.componentRef,a.componentInstance=o.componentInstance,this.openDialogs.push(a),this.afterOpened.next(a),a.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(a);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),a}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(n=>n.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let n=e.length;for(;n--;)e[n].close()}static ɵfac=function(n){return new(n||t)};static ɵprov=Pe({token:t,factory:t.ɵfac})}return t})();var Da=(()=>{class t{dialogRef=y(Be,{optional:!0});_elementRef=y(Kn);_dialog=y(Ea);ariaLabel;type=`button`;dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=zo(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let n=e._matDialogClose;n&&(this.dialogResult=n.currentValue)}_onButtonClick(e){this._elementRef.nativeElement.getAttribute(`aria-disabled`)!==`true`&&Aa(this.dialogRef,e.screenX===0&&e.screenY===0?`keyboard`:`mouse`,this.dialogResult)}static ɵfac=function(n){return new(n||t)};static ɵdir=ha({type:t,selectors:[[``,`mat-dialog-close`,``],[``,`matDialogClose`,``]],hostVars:2,hostBindings:function(n,a){n&1&&ny(`click`,function(r){return a._onButtonClick(r)}),n&2&&Zm(`aria-label`,a.ariaLabel||null)(`type`,a.type)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],type:`type`,dialogResult:[0,`mat-dialog-close`,`dialogResult`],_matDialogClose:[0,`matDialogClose`,`_matDialogClose`]},exportAs:[`matDialogClose`],features:[na]})}return t})();function zo(t,i){let e=t.nativeElement.parentElement;for(;e&&!e.classList.contains(`mat-mdc-dialog-container`);)e=e.parentElement;return e?i.find(n=>n.id===e.id):null}var Oa=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=Yo$1({type:t});static ɵinj=Er$1({providers:[Ea],imports:[ka,di,Pe$1,Tt]})}return t})();var Vo=[`input`];var Uo=[`*`];var xn={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var jo=new w(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>xn});var E=(function(t){return t[t.Init=0]=`Init`,t[t.Checked=1]=`Checked`,t[t.Unchecked=2]=`Unchecked`,t[t.Indeterminate=3]=`Indeterminate`,t})(E||{});var kn=class{source;checked};var Cn=(()=>{class t{_elementRef=y(Kn);_changeDetectorRef=y(Pd);_ngZone=y(ue$1);_animationsDisabled=Dt();_options=y(jo,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let n=new kn;return n.source=this,n.checked=e,n}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new xt;indeterminateChange=new xt;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=E.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){y(D).load(tr$1);let e=y(new Fy(`tabindex`),{optional:!0});this._options=this._options||xn,this.color=this._options.color||xn.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=y(ge).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let n=e!=this._indeterminate();this._indeterminate.set(e),n&&(e?this._transitionCheckState(E.Indeterminate):this._transitionCheckState(this.checked?E.Checked:E.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=pt(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let n=this._currentCheckState,a=this._getAnimationTargetElement();if(!(n===e||!a)&&(this._currentAnimationClass&&a.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(n,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){a.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{a.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?E.Checked:E.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,n){if(this._animationsDisabled)return``;switch(e){case E.Init:if(n===E.Checked)return this._animationClasses.uncheckedToChecked;if(n==E.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case E.Unchecked:return n===E.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case E.Checked:return n===E.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case E.Indeterminate:return n===E.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let n=this._inputElement;n&&(n.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(n){return new(n||t)};static ɵcmp=Db({type:t,selectors:[[`mat-checkbox`]],viewQuery:function(n,a){if(n&1&&sy(Vo,5),n&2){let o;RT(o=OT())&&(a._inputElement=o.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(n,a){n&2&&(ey(`id`,a.id),Zm(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),WT(a.color?`mat-`+a.color:`mat-accent`),fy(`_mat-animation-noopable`,a._animationsDisabled)(`mdc-checkbox--disabled`,a.disabled)(`mat-mdc-checkbox-disabled`,a.disabled)(`mat-mdc-checkbox-checked`,a.checked)(`mat-mdc-checkbox-disabled-interactive`,a.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,dS],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,dS],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,dS],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?void 0:fS(e)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,dS],checked:[2,`checked`,`checked`,dS],disabled:[2,`disabled`,`disabled`,dS],indeterminate:[2,`indeterminate`,`indeterminate`,dS]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[g_([{provide:Ce,useExisting:rs(()=>t),multi:!0},{provide:ct,useExisting:t,multi:!0}]),na],ngContentSelectors:Uo,decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(n,a){if(n&1&&(NT(),ea(0,`label`,3),ny(`click`,function(r){return a._preventBubblingFromLabel(r)}),ea(1,`span`,4,0),Qm(3,`span`,5),ea(4,`input`,6,1),ny(`blur`,function(){return a._onBlur()})(`click`,function(){return a._onInputClick()})(`change`,function(r){return a._onInteractionEvent(r)}),hd(),Qm(6,`span`,7),ea(7,`span`,8),$p(),ea(8,`svg`,9),Qm(9,`path`,10),hd(),Gp(),Qm(10,`span`,11),hd(),Qm(11,`span`,12),hd(),ea(12,`span`,13,2),xT(14),hd()()),n&2){let o=FT(2);Ym(`labelPosition`,a.labelPosition)(`for`,a.inputId),$w(4),fy(`mdc-checkbox--selected`,a.checked),Ym(`checked`,a.checked)(`indeterminate`,a.indeterminate)(`disabled`,a.disabled&&!a.disabledInteractive)(`id`,a.inputId)(`required`,a.required)(`tabIndex`,a.disabled&&!a.disabledInteractive?-1:a.tabIndex),Zm(`aria-label`,a.ariaLabel||null)(`aria-labelledby`,a.ariaLabelledby)(`aria-describedby`,a.ariaDescribedby)(`aria-checked`,a.indeterminate?`mixed`:null)(`aria-controls`,a.ariaControls)(`aria-disabled`,a.disabled&&a.disabledInteractive?!0:null)(`aria-expanded`,a.ariaExpanded)(`aria-owns`,a.ariaOwns)(`name`,a.name)(`value`,a.value),$w(7),Ym(`matRippleTrigger`,o)(`matRippleDisabled`,a.disableRipple||a.disabled)(`matRippleCentered`,!0)}},dependencies:[qs,xg],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return t})();var Ia=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=Yo$1({type:t});static ɵinj=Er$1({imports:[Cn,Tt]})}return t})();function Ta(t,i){let e=$(t,i?.in);return e.setSeconds(59,999),e}function wn(t,i,e){return Kn$1(t,-i,e)}var Ft=`/api/staff/v1/calendars`;async function Sn(){return(await ee(Ft)).map(i=>new Aa$1(i))}async function Pt(t){let i=df(t);return(await ee(`${Ft}/availability${i?`?`+i:``}`)).map(n=>new Aa$1(n))}var Ho=(t,i)=>t.filter(e=>!!e.resource).map(e=>new Fe(m(l({},e.resource),{level:i?.levelWithID(e.resource.zones),availability:e.availability}))).filter(e=>e.bookable);async function jc(t){let i=df(t);return await ee(`${Ft}/free_busy${i?`?`+i:``}`)}async function Bt(t,i){let e=df(t);return Ho((await ee(`${Ft}/free_busy${e?`?`+e:``}`)).map(a=>new Aa$1(a)),i)}var X=`/api/staff/v1/events`;function Na(t){return m(l({},t),{extension_data:l(l({},t.extension_data||{}),Dh())})}async function Yc(t){return Wo(t).catch(()=>[])}async function Wo(t){return(await Ko(t)).events}async function Ko(t){let i=df(t),e=`${X}${i?`?`+i:``}`,n=await ee(e),a=ma(new URL(e,document.baseURI).href)[`x-calendar-issue`]||``;return{events:n.map(o=>new Ys(o)),failed_calendars:a.split(`,`).map(o=>o.trim().toLowerCase()).filter(Boolean)}}async function Zc(t,i={}){let e=df(i);return new Ys(await ee(`${X}/${encodeURIComponent(t)}${e?`?`+e:``}`))}async function Xo(t){return new Ys(await fs(`${X}`,new Ys(Na(t)).toJSON()))}async function Qo(t,i,e={},n=`patch`){let a=df(e);return new Ys(await(n===`patch`?_a:ps)(`${X}/${encodeURIComponent(t)}${a?`?`+a:``}`,new Ys(Na(i)).toJSON()))}var Jc=async(t,i)=>{let e=t.update_master&&t.recurring_event_id||t.id;return delete t?.status,e?Qo(e,m(l({},t),{id:e}),i):Xo(t)};function el(t,i={}){let e=df(i);return ga(`${X}/${encodeURIComponent(t)}${e?`?`+e:``}`,{response_type:`void`})}async function tl(t,i,e,n={}){let a=df(m(l({},n),{state:e}));return new Gs(await fs(`${X}/${encodeURIComponent(t)}/guests/${i}/checkin${a?`?`+a:``}`,``))}async function nl(t,i,e={}){let n=df(e);return new Gs(await fs(`${X}/${encodeURIComponent(t)}/attendee${n?`?`+n:``}`,i))}async function il(t,i,e={}){let n=df(e);return new Gs(await ga(`${X}/${encodeURIComponent(t)}/attendee/${encodeURIComponent(i.email)}${n?`?`+n:``}`))}async function al(t,i,e={}){let n=df(l({},e));return await ee(`${X}/${encodeURIComponent(t)}/metadata/${encodeURIComponent(i)}${n?`?`+n:``}`)}async function ol(t,i,e,n,a,o=[0,0]){let r=ft(i,e).valueOf(),[s,c]=await Promise.all([Pt({system_ids:t.join(),period_start:C(i),period_end:C(r)}).catch(()=>[]),n&&t.includes(n)?Bt({period_start:C(i),period_end:C(r),system_ids:n}):Promise.resolve([])]),l=t.map(d=>!!s.find(h=>h.id===d||h.resource?.id===d));for(let d of c){if(!t.includes(d.id))continue;let h=d.availability.filter(p=>!(p.date===o[0]&&p.duration===o[1]));l[t.indexOf(d.id)]=!h.find(p=>p.status!==`free`)}return l}async function rl(t,i={}){let e=df(m(l({},i),{limit:1e4}));try{let n=await fs(`${X}/clashing-assets${e?`?`+e:``}`,t.toJSON());return i.include_clash_time,n}catch{return[]}}var V=`/api/staff/v1/bookings`;function tt(){return`${Dh().app_name}_${$$1.hash}_${P().email||``}`}function Mn(t){let i=l({},t instanceof Ma$1?t.toJSON():t);return delete i.created_at,m(l({},i),{extension_data:l(l({},i.extension_data||{}),Dh())})}async function nt(t){return Fa(t).catch(()=>[])}async function Fa(t){let i=df(t);return(await ee(`${V}${i?`?`+i:``}`)).map(n=>new Ma$1(n))}async function xl(t,i){try{let{data:e,next:n,total:a}=await vt({query_params:m(l({},t),{limit:Math.max(200,i||0)}),endpoint:V,path:`booked`}),o=[...e],r=1;for(;n&&(!a||o.length<a)&&r<=Pa;){let s=await n();e=s.data,n=s.next,a=s.total,o=[...o,...e],r+=1}return _i(o)}catch{return[]}}async function kl(t,i={}){let e=df(m(l({},i),{limit:1e3}));try{let n=await fs(`${V}/clashing-assets${e?`?`+e:``}`,t.toJSON()).catch(()=>[]);return i.include_clash_time,n}catch{return[]}}var Pa=50;async function Cl(t,i={}){let{signal:e}=i;try{if(e?.aborted)return[];let{data:n,next:a}=await vt({query_params:t,fn:s=>new Ma$1(s),endpoint:V,path:``}),o=[...n],r=1;for(;a&&r<=Pa;){if(e?.aborted)return[];let s=await a();n=s.data,a=s.next,o.push(...n),r+=1}return e?.aborted?[]:_i(o,`id`)}catch{return[]}}async function wl(t){return new Ma$1(await ee(`${V}/${encodeURIComponent(t)}`))}function An(t){if(!t)throw new Error(`Missing parent booking id`);let i=Number(t);return Number.isSafeInteger(i)?i:t}async function qe(t,i){let e=df(m(l({},i),{utm_source:tt()}));return new Ma$1(await fs(`${V}${e?`?`+e:``}`,Mn(t)))}async function Ba(t,i,e=`patch`){return new Ma$1(await(e===`patch`?_a:ps)(`${V}/${encodeURIComponent(t)}`,Mn(i)))}async function Yo(t,i,e,n=`patch`){return new Ma$1(await(n===`patch`?_a:ps)(`${V}/${encodeURIComponent(t)}/instance/${i}`,Mn(e)))}var Sl=async(t,i)=>{let e=t.id;delete t.id;let n=i?.instance;return i&&delete i.instance,e?n?Yo(e,t.instance||t.booking_start,t):Ba(e,t):qe(Ui(t,[``,null,void 0])||{},i)};function et(t,i={}){if(i.instance)return Zo(t,i.start_time);let e=df({utm_source:tt()});return ga(`${V}/${encodeURIComponent(t)}?${e}`,{response_type:`void`})}function Zo(t,i){let e=df({utm_source:tt()});return ga(`${V}/${encodeURIComponent(t)}/instance/${i}?${e}`,{response_type:`void`})}async function Jo(t,i){let e=df({state:i});try{return new Ma$1(await fs(`${V}/${encodeURIComponent(t)}/check_in?${e}&utm_source=${tt()}`,``))}catch(n){let a=await n.json();throw a.error||a.message||a}}async function er(t,i,e){let n=df({state:e});try{return new Ma$1(await fs(`${V}/${encodeURIComponent(t)}/check_in/${i}?${n}&utm_source=${tt()}`,``))}catch(a){let o=await a.json();throw o.error||o.message||o}}async function Ml(t,i){return!!t.instance||!!t.recurrence_type&&t.recurrence_type!==`none`?er(t.id,t.instance||t.booking_start,i):Jo(t.id,i)}async function Al(t,i,e,n,a=`room`){let o=await nt({type:a,period_start:C(i),period_end:C(ft(i,e))});return t.map(r=>!o.find(s=>(s.asset_id===r||s.asset_ids.includes(r))&&(!n||n!==s.id)))}async function tr(t,i){return t.from_bookings?t.linked_bookings.filter(n=>n.booking_type===i).map(n=>new Ma$1(n)):(await Fa({type:i,event_id:t.id,period_start:C(t.date),period_end:C(ft(t.date,t.duration)),limit:500})).filter(n=>n.extension_data?.parent_id===t.id)}function nr(t,i){return t.from_bookings?[]:(t.linked_bookings||[]).filter(e=>{let n=e.extension_data?.parent_id;return e.booking_type===i&&!!n&&n!==t.id}).map(e=>e.id)}function ir(t,i){return i.id&&t.extension_data?.details?.id===i.id||i.email&&t.attendees?.find(e=>e.email===i.email)?!0:!!t.asset_ids?.find(e=>i.items?.find(n=>n.item_ids?.includes(e)))}function Ra(t){let i=JSON.parse(JSON.stringify(t??null));return i&&typeof i==`object`&&delete i.deliver_at_time,JSON.stringify(i,(e,n)=>n&&typeof n==`object`&&!Array.isArray(n)?Object.fromEntries(Object.entries(n).sort(([a],[o])=>a<o?-1:1)):n)}function La(t=[]){return t.map(i=>i.email?.toLowerCase()).sort().join(`,`)}function ar(t,i){let e={};(t.booking_start!==i.booking_start||t.booking_end!==i.booking_end)&&(e.booking_start=i.booking_start,e.booking_end=i.booking_end,e.all_day=i.all_day);for(let a of[`title`,`description`,`asset_name`])t[a]!==i[a]&&(e[a]=i[a]);return t.user_email.toLowerCase()!==i.user_email.toLowerCase()&&(e.user_email=i.user_email),t.asset_id!==i.asset_id&&(e.asset_id=i.asset_id,e.asset_ids=i.asset_ids),[...t.zones].sort().join()!==[...i.zones].sort().join()&&(e.zones=i.zones),La(t.attendees)!==La(i.attendees)&&(e.attendees=i.attendees),!(Ra(t.extension_data?.details)!==Ra(i.extension_data?.details))&&!Object.keys(e).length?null:m(l({},e),{extension_data:i.extension_data})}function or(t){return l(l({},ju(t)),ju(t.extension_data||{}))}async function El(t,i,e){let n=await tr(t,i),a=t.system?.zones||_i(pf(t.resources.map(s=>s.zones)))||[],o=new Set,r=[];try{for(let s of nr(t,i))await et(s);for(let s of e){let c=n.find(b=>!o.has(b.id)&&ir(b,s)),l$1=i===`catering-order`&&s.system_id?t.resources.find(b=>b.id===s.system_id||b.email===s.system_id):void 0,d=l$1?.id||s.system_id||s.email||s.id,h=l$1?.display_name||l$1?.name||s.name,p=new Ma$1({type:i,booking_type:i,date:t.date,duration:t.duration,description:t.title||s.name,user_email:t.host,asset_id:d,asset_name:h,title:t.title,attendees:s.email?[new Xe(s)]:[],extension_data:l({parent_id:t.id,name:h,location_id:l$1?.id||t.location,details:s},i===`visitor`?or(s):{}),zones:l$1?.zones||a});if(c){o.add(c.id);let b=ar(c,p);b&&await Ba(c.id,b);continue}r.push(t.from_bookings?await qe(m(l({},p.toJSON()),{parent_id:An(t.id)})):await qe(p.toJSON(),{ical_uid:t.ical_uid,event_id:t.id}))}for(let s of n)o.has(s.id)||await et(s.id)}catch(s){throw await Promise.all(r.filter(c=>!!c.id).map(c=>et(c.id).catch(()=>{}))),s}}function it(t,i=``){let e=i.trim().toLowerCase();return t.filter(n=>(n.name||``).trim().toLowerCase()===e).sort((n,a)=>(n.created_at||0)-(a.created_at||0))[0]}var ue=null;var xe=new Map;var qt=new Map;function En(){if(!ue){let t=Vu({hidden:!0,limit:500}).then(i=>i.data);t.catch(()=>{ue===t&&(ue=null)}),ue=t}return ue}function qa(t){if(!xe.has(t)){let i=Bu({category_id:t,limit:500}).then(e=>e.data);i.catch(()=>{xe.get(t)===i&&xe.delete(t)}),xe.set(t,i)}return xe.get(t)}async function rr(t){let i=it(await En(),t);if(i||(ue=null,i=it(await En(),t),i))return i;try{return i=await dr({name:t,hidden:!0}),ue=null,i}catch(e){if(ue=null,i=it(await En(),t),i)return i;throw e}}async function sr(t,i){let e=it(await qa(t),i);if(e)return e;try{return e=await pr({name:i,brand:`PlaceOS`,category_id:t}),xe.delete(t),e}catch(n){if(xe.delete(t),e=it(await qa(t),i),e)return e;throw n}}function Dn(t,i){let e=`${t}/${i}`;if(!qt.has(e)){let n=rr(t).then(a=>sr(a.id,i)).then(a=>a.id);n.catch(()=>qt.delete(e)),qt.set(e,n)}return qt.get(e)}async function On(t,i){return pf(await Promise.all(i.map(n=>In({zone_id:n,type_id:t}).then(a=>a.data))))}async function cr(t,i){return(await In({zones:i,type_id:t})).data}function lr(t){return m(l({},t),{data:t.data.filter(i=>!i?.hidden)})}async function za(t={}){if(t.hidden===!0)return Vu(t);let n=t,{hidden:i}=n;return lr(await Vu(o(n,[`hidden`])))}function dr(t){return t.id?Qu(t.id,t):Ku(t)}var zt=new Map;var mr=[`period_start`,`period_end`,`type`,`rejected`];var hr=100;async function In(t={}){let i=await Zu(m(l({},t),{limit:t.limit||500})),e=i.total,n=[...i.data];for(let a=1;a<hr&&typeof i.next==`function`;a++){let o=i.next();if(!o)break;i=await o,e=i.total,n.push(...i.data)}return{total:e,next:()=>null,data:n}}async function ur(t={}){let i=JSON.stringify({zones:t.zones||t.zone_id||``,category_id:t.category_id||``,q:t.q||``,type_id:t.type_id||``});if(zt.has(i))return zt.get(i);let e=l({},t);for(let l of mr)l in e&&delete e[l];e.zones&&!e.zone_id&&(e.zone_id=e.zones),e.zones&&delete e.zones;let[n,a]=await Promise.all([Bu(e),In(e)]),o=n.data.filter(l=>!l?.hidden);e.type_id&&(o=o.filter(l=>l.id===e.type_id));let r=new Set(o.map(l=>l.id)),s=new Map;for(let l of a.data){if(l?.hidden||!r.has(l.asset_type_id))continue;let d=s.get(l.asset_type_id)||[];d.push(l),s.set(l.asset_type_id,d)}let c=o.map(l$2=>m(l({},l$2),{assets:s.get(l$2.id)||[]}));return zt.set(i,c),setTimeout(()=>zt.delete(i),300*1e3),c}function pr(t){return t.id?Xu(t.id,t):Ju(t)}async function Tn(t,i=[]){let[e,n]=await Promise.all([ur(t),nt(m(l({},t),{type:`asset-request`}))]),a=n.filter(o=>o.status!==`declined`&&o.status!==`cancelled`);return e.map(o=>m(l({},o),{assets:o.assets.filter(r=>i?.includes(r.id)||!a.find(s=>!i.includes(s.id)&&(s.asset_id===r.id||s.asset_ids?.includes(r.id))))}))}function _r(t,i){if((!t||t?.length<=0)&&i?.length)return[];if(!i)return[];let e=[];for(let n of t){let a=i.find(o=>o.id===n.id);(!a||a.ref_id!==n.ref_id)&&e.push(n.id)}return e}async function jl({id:t,ical_uid:i,from_booking:e,from_bookings:n},{date:a,duration:o,all_day:r,host:s,location_name:c,location_id:l$3,zones:d,reset_state:h},p=[],b=!1){let U=await nt({period_start:C(a),period_end:C(ft(a,o)),type:`asset-request`,zones:d.join(`,`)}),O=!!(e||n),ze=t&&(i||O)?(await nt({period_start:C(V$1(a)),period_end:C(nr$1(a)),type:`asset-request`,email:s,event_id:O?``:t,ical_uid:i})).filter(_=>!O||String(_.extension_data?.parent_id)===String(t)):[],Ut=ze.map(_=>[_.id,new W(_.extension_data.request)]);p?.forEach(_=>_.conflict=!1);let $e=b?p.map(_=>_.id):_r(p,Ut.map(([_,k])=>k));if(h){let _=ze.filter(k=>k.approved||k.rejected);$e=_i([...$e,..._.map(k=>k.extension_data.request_id)])}let Pn=Ut.filter(([_,k])=>!$e.includes(k.id)),so=Ut.filter(([_,{id:k}])=>$e.includes(k)),co=p.filter(({id:_})=>$e.includes(_)),Ce=pf(U.filter(_=>!_.rejected&&(!ze.find(k=>k.id===_.id)||Pn.find(([k])=>_.event_id===k))).map(_=>_.asset_ids));for(let[_,k]of Pn)Ce=[...Ce,...pf(k.items.map(ot=>ot.item_ids))];let mo=await Tn({period_start:C(a),period_end:C(ft(a,o)),type:`asset-request`,zones:(d||[]).join(`,`)},ze.map(_=>_.id)),ho=co.map(_=>{let k=pf(_.items.map(({id:Y,item_ids:jt,quantity:Gt})=>{let Ve=jt||[],qn=mo.find(zn=>zn.id===Y)?.assets;if(!qn)return Ve;let Ht=[];return new Array(Gt).fill(0).map((zn,rt)=>{let Wt=Ce.includes(Ve[rt])||Ht.includes(Ve[rt])||!Ve[rt]?qn?.find(({id:$n})=>!Ce.includes($n)&&!Ht.includes($n))?.id:Ve[rt];if(!Wt)throw _.conflict=!0,`Unable to find available asset for request`;return Ht.push(Wt),Wt})}));if(!k.length||k.some(Y=>!Y))throw _.conflict=!0,`Unable to find available asset for request`;let ot=ze.find(Y=>Y.asset_ids.find(jt=>_.items?.find(Gt=>Gt.item_ids?.includes(jt))));Ce=[...Ce,...k];let Bn={type:`asset-request`,booking_type:`asset-request`,date:a,duration:o,all_day:r,description:c,user_email:s,asset_id:k[0],asset_ids:k,asset_name:_.items.map(Y=>Y.name).join(`, `),title:_.items.map(Y=>Y.name).join(`, `),approved:!h&&ot?.approved&&!_._changed,rejected:!h&&ot?.rejected&&!_._changed,extension_data:{parent_id:t,request_id:_.id,location_id:l$3,request:new W(m(l({},_),{event:null}))},zones:d||[]};return()=>O?qe(m(l({},new Ma$1(Bn).toJSON()),{parent_id:An(t)})):qe(new Ma$1(Bn),{ical_uid:i,event_id:t})});return async()=>{await Promise.all(so.map(([_])=>et(_))),await Promise.all(ho.map(_=>_()))}}var fr=[`*`];function gr(t,i){if(t&1&&(ea(0,`div`,3),r_(1),hd()),t&2){let e=ST();$w(),vy(e.info())}}function br(t,i){if(t&1&&(ea(0,`icon`,4),r_(1,`info`),hd()),t&2)Ym(`matTooltip`,ST().info())}function yr(t,i){t&1&&Qm(0,`div`,5)}function vr(t,i){if(t&1&&(ea(0,`div`,6)(1,`div`,8)(2,`div`,9)(3,`icon`,10),r_(4),hd()()()()),t&2){let e=ST();$w(),fy(`bg-base-200`,!e.value())(`bg-info`,e.value())(`border-info!`,e.value()),$w(),fy(`left-1`,!e.value())(`left-5`,e.value())(`bg-base-400`,!e.value())(`bg-info-light`,e.value()),$w(2),vy(e.value()?`done`:`remove`)}}function xr(t,i){if(t&1){let e=IT();ea(0,`mat-checkbox`,11),ny(`ngModelChange`,function(a){Ap(e);return Rp(ST().setValue(a))}),hd(),xC()}if(t&2){let e=ST();Ym(`tabIndex`,-1)(`ngModel`,e.value()),RC()}}var nd=(()=>{class t{constructor(){this.toggle=VH(void 0),this.label=VH(void 0),this.info=VH(void 0),this.inline=VH(!0),this.value=pt(void 0),this.registerOnChange=e=>this._onChange=e,this.registerOnTouched=e=>this._onTouch=e}setValue(e){this.value.set(e),this._onChange&&this._onChange(e)}writeValue(e){this.value.set(e)}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=Db({type:t,selectors:[[`settings-toggle`]],inputs:{toggle:[1,`toggle`],label:[1,`label`],info:[1,`info`],inline:[1,`inline`]},features:[g_([Gm(()=>t)])],ngContentSelectors:fr,decls:11,vars:16,consts:[[`type`,`button`,`matRipple`,``,1,`hover:bg-base-200`,`relative`,`flex`,`flex-1`,`items-center`,`space-x-2`,`overflow-hidden`,`rounded-sm`,`border`,`py-1`,`pr-1`,`pl-2`,3,`click`],[1,`z-10`,`flex`,`flex-1`,`items-center`,`space-x-2`,`px-2`,`text-left`],[1,`flex`,`h-full`,`w-full`,`flex-col`,`justify-center`,`leading-none`],[1,`text-xs`,`opacity-70`],[`aria-hidden`,`true`,3,`matTooltip`],[1,`bg-info`,`absolute`,`inset-0`,`z-0`,`m-0!`,`opacity-10`],[1,`px-2`],[`aria-hidden`,`true`,1,`pointer-events-none`,3,`tabIndex`,`ngModel`],[`toggle`,``,1,`border-base-400`,`relative`,`h-8`,`w-12`,`rounded-full`,`border-2`],[1,`absolute`,`top-1/2`,`flex`,`h-6`,`w-6`,`-translate-x-0.5`,`-translate-y-1/2`,`items-center`,`justify-center`,`rounded-full`,`text-black`,`shadow-sm`],[`aria-hidden`,`true`],[`aria-hidden`,`true`,1,`pointer-events-none`,3,`ngModelChange`,`tabIndex`,`ngModel`]],template:function(n,a){n&1&&(NT(),ea(0,`button`,0),ny(`click`,function(){return a.setValue(!a.value())}),ea(1,`div`,1)(2,`div`,2)(3,`div`),r_(4),xT(5),hd(),lT(6,gr,2,1,`div`,3),hd(),lT(7,br,2,1,`icon`,4),hd(),lT(8,yr,1,0,`div`,5),lT(9,vr,5,15,`div`,6)(10,xr,1,2,`mat-checkbox`,7),hd()),n&2&&(fy(`border-base-300`,!a.value())(`border-info`,a.value()),Zm(`role`,a.toggle()?`switch`:`checkbox`)(`aria-checked`,!!a.value())(`aria-description`,a.inline()?null:a.info()),$w(),fy(`py-2`,!a.inline())(`py-1`,a.inline()),$w(3),vy(a.label()),$w(2),dT(a.info()&&a.inline()?6:-1),$w(),dT(a.info()&&!a.inline()?7:-1),$w(),dT(a.value()?8:-1),$w(),dT(a.toggle()?9:10))},dependencies:[Ia,Cn,dm,rm,Gc,Hf,Yt,mt],styles:[`[_nghost-%COMP%]{display:flex}[toggle][_ngcontent-%COMP%]{transition:background .2s,left .2s}
/*# sourceMappingURL=settings-toggle.component.css.map */`]})}}return t})();function $a(t){let i={};return(e,n=!1)=>e?((!i[e]||n)&&(i[e]=gs(e,t).then(a=>a.details instanceof Array?a.details:[]).catch(()=>[])),i[e]):Promise.resolve([])}var Va=$a(`assets_config`);function Ua(t,i,e){let n=Date.now(),a$1=new Date(e.date),o=s=>t.name===s.name||t.category?.name.includes(s.name)||e.resources?.some(c=>c.zones?.includes(s.name))||e.space?.zones?.includes(s.name)||s.name===`*`,r=s=>s.rules.reduce((c,l)=>{switch(l[0]){case`is_before`:return c+(j(n,wn(a$1,l[1]))?1:0);case`within_hours`:return c+(Oe(n,wn(a$1,l[1]))?1:0);case`after_hour`:return c+(Oe(a$1,a(a$1,l[1]))?1:0);case`before_hour`:return c+(j(a$1,a(a$1,l[1]))?1:0);case`min_length`:return c+(e.duration>=ed(l[1])?1:0);case`max_length`:return c+(e.duration<=ed(l[1])?1:0);case`visitor_type`:return c+(e.ext(`visitor_type`)===l[1]?1:0);default:return c+1}},0);for(let s of i)if(o(s)&&r(s)<s.rules.length)return!1;return!0}function ja(t,i){return Array.from(new Set([...Object.keys(t),...Object.keys(i)])).every(n=>Object.is(t[n],i[n]))}var bd=(()=>{class t{constructor(){this._org=y(st),this._settings_service=y(le),this._injector=y(he$1),this._options=pt({date:Date.now()}),this._search=pt(``),this._category=pt([]),this._loading=pt(``),this._rules=pt([]),this._available_groups=pt([]),this._category_list=pt([]),this._settings=pt({}),this._network_requested=!1,this._network_consumed=pt(!1),this._category_list_request=null,this._available_group_requests=new Map,this._settings_requests=new Map,this._options_debounced=YH(this._options,300,{injector:this._injector,equal:ja}),this._requests_ready=Re(()=>{let e=this._org.active_building(),n=this._settings_service.overrides();return this._network_consumed()&&this._assetsEnabled()&&this._org.initialised()&&!!e?.id&&n.length>=(this._org.settings?.length||0)+2}),this.search=this._search.asReadonly(),this.category=this._category.asReadonly(),this.options=this._options.asReadonly(),this.loading=this._loading.asReadonly(),this.rules=Re(()=>(this._requestNetwork(),this._rules())),this.available_groups=Re(()=>(this._requestNetwork(),this._available_groups())),this.category_list=Re(()=>(this._requestNetwork(),this._category_list())),this.visible_category_ids=Re(()=>this._category_list().map(e=>e.id)),this.filtered_assets=Re(()=>{this._requestNetwork();let e=this._search().toLowerCase(),n=this._category(),a=this.visible_category_ids(),o=this._available_groups(),r=this._rules();return o.filter(s=>s.assets?.length&&a.includes(s.category_id)&&(!n.length||n.includes(s.category_id))&&(s.name.toLowerCase().includes(e)||s.description.toLowerCase().includes(e))&&Ua(s,r,this._options()))}),this.settings=Re(()=>(this._requestNetwork(),this._settings())),this.disabled_rooms=Re(()=>(this._requestNetwork(),this._settings().disabled_rooms||[])),Ss(()=>{let e=this._options_debounced.value(),n=this._org.active_building();!this._requests_ready()||!n?.id||!e||ne(()=>{this._loadRules(e,n.id),this._loadAvailableGroups(e,n.id),this._loadSettings(n.id),this._loadCategories()})}),Ss(()=>{let e=this.visible_category_ids(),n=this._category(),a=n.filter(o=>e.includes(o));a.length!==n.length&&this._category.set(a)})}_requestNetwork(){this._network_requested||(this._network_requested=!0,queueMicrotask(()=>this._network_consumed.set(!0)))}_assetsEnabled(){return this._settings_service.get(`app.has_assets`)!==!1}setSearch(e){this._search.set(`${e}`)}toggleCategory(e){let n=ne(this._category);n.includes(e)?this._category.set(n.filter(a=>a!==e)):this._category.set([...n,e])}getOptions(){return this._options()}setOptions(e){let n=ne(this._options),a=l(l({},n),e);ja(n,a)||this._options.set(a)}_appendLoading(e){this._loading.set(this._loading()+e)}_removeLoading(e){this._loading.set(this._loading().split(e).join(``))}async _loadRules(e,n){let a=e.zone||e.zone_id||n||``;this._appendLoading(`[Rules]`),this._rules.set(await Va(a)),this._removeLoading(`[Rules]`)}async _loadAvailableGroups({zone:e,zone_id:n,date:a,duration:o,ignore:r},s){let c={zones:e||n||s||``,period_start:C(sn(a)),period_end:C(Ta(ft(a,o||30))),type:`asset-request`,rejected:!1},l=JSON.stringify({query:c,ignore:r}),d=this._available_group_requests.get(l),h=d||Tn(c,r).catch(U=>(console.error(U),[]));d||this._available_group_requests.set(l,h),this._appendLoading(`[Availability]`);let p=await h;this._removeLoading(`[Availability]`),h.finally(()=>this._available_group_requests.delete(l));let b=p.sort((U,O)=>U.name.localeCompare(O.name));this._available_groups.set(b)}async _loadCategories(){return this._category_list_request?this._category_list_request:(this._category_list_request=za().then(e=>(this._category_list.set(e.data.sort((n,a)=>n.name.localeCompare(a.name)).filter(n=>!n.hidden)),e)).finally(()=>this._category_list_request=null),this._category_list_request)}async _loadSettings(e){let n=this._settings_requests.get(e),a=n||gs(e,`assets-settings`).then(o=>o.details||{}).catch(()=>({}));n||this._settings_requests.set(e,a),this._settings.set(await a),a.finally(()=>this._settings_requests.delete(e))}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵprov=N({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();var Ga=`_LOCKERS_`;var kr=`_LOCKER_BANKS_`;var Cr=`_LOCKERS_`;function wr(){return Dn(Ga,kr)}function Sr(){return Dn(Ga,Cr)}async function Ha(t){return t?.length?On(await wr(),t):[]}async function Wa(t){return t?.length?On(await Sr(),t):[]}var Mr=64;var Ar=64;var Er=30*1e3;var Dr=`PlaceOS.image-cache-v1`;var Or=`PlaceOS.image-cache-keys-v1`;var Q=new Map;var Nn=new Map;var ke=new Map;var Ka=!1;function Ir(){if(!Ka&&(Ka=!0,typeof caches<`u`&&caches.delete(Dr).catch(()=>!1),typeof sessionStorage<`u`))try{sessionStorage.removeItem(Or)}catch{}}function Tr(t){let i=Q.get(t);if(i)return Q.delete(t),Q.set(t,i),i}function Nr(t,i){let e=Q.get(t);for(e&&e!==i&&URL.revokeObjectURL(e),Q.delete(t),Q.set(t,i);Q.size>Mr;){let n=Q.keys().next().value;if(!n)break;let a=Q.get(n);Q.delete(n),a&&URL.revokeObjectURL(a)}return i}function Rr(t){for(ke.delete(t),ke.set(t,Date.now()+Er);ke.size>Ar;){let i=ke.keys().next().value;if(!i)break;ke.delete(i)}}function Rn(t){let i=et$1();document.cookie=`${i===`x-api-key`?`api-key=`+encodeURIComponent(te()):`bearer_token=`+encodeURIComponent(i)};max-age=30;path=${t};samesite=strict;${location.protocol===`https:`?`secure;`:``}`}function Lr(){let t=et$1();return t===`x-api-key`?{"X-API-Key":te()}:{Authorization:`Bearer ${t}`}}function Ed(t,i){return Xa(t,()=>(Rn(i),fetch(t)))}function Dd(t){return Xa(t,()=>fetch(t,{headers:Lr()}))}async function Xa(t,i){Ir();let e=Tr(t);if(e)return e;if((ke.get(t)||0)>Date.now())throw new Error(`Image load is in retry cooldown`);ke.delete(t);let a=Nn.get(t);if(a)return a;let o=i().then(async r=>{if(!r?.ok)throw new Error(`Failed to fetch image: ${r?.status}`);return Nr(t,URL.createObjectURL(await r.blob()))}).catch(r=>{throw Rr(t),r}).finally(()=>Nn.delete(t));return Nn.set(t,o),o}var Qa=10;var Ya=1;var Fr=.05;var Za=16;var Ja=4;var eo=2;var to=8192;function no(){if(typeof window>`u`||!window.matchMedia)return!1;let t=window.matchMedia(`(pointer: coarse)`).matches,i=window.matchMedia(`(max-width: 1024px)`).matches;return t&&i}function Pr(t){return t.replace(/[!"#$%&'()*+,.\/;<=>?@[\\\]^`{|}~]/g,`\\$&`).split(` `).map(e=>e.replace(/^\\/,``)).join(` `)}function Br(t){let i=0,e=0,n=0,a=0,o=t.getAttribute(`viewBox`);if(o){let r=o.split(/[\s,]+/).map(parseFloat);r.length>=4&&(i=r[0]||0,e=r[1]||0,n=r[2],a=r[3])}if(!n||!a){let r=t.getAttribute(`width`),s=t.getAttribute(`height`);n=r?parseFloat(r):0,a=s?parseFloat(s):0}if(!n||!a)try{let r=t.getBBox();i=r.x,e=r.y,n=r.width,a=r.height}catch{}return{x:i,y:e,width:n||1,height:a||1}}function qr(t,i){let e=t.getBBox(),n=i&&t.getScreenCTM?.();if(!n)return e;let a=i.multiply(n),o=[{x:e.x,y:e.y},{x:e.x+e.width,y:e.y},{x:e.x,y:e.y+e.height},{x:e.x+e.width,y:e.y+e.height}].map(c=>({x:a.a*c.x+a.c*c.y+a.e,y:a.b*c.x+a.d*c.y+a.f})),r=Math.min(...o.map(c=>c.x)),s=Math.min(...o.map(c=>c.y));return{x:r,y:s,width:Math.max(...o.map(c=>c.x))-r,height:Math.max(...o.map(c=>c.y))-s}}var zr=`http://www.w3.org/2000/svg`;function $r(t){for(let i of[t,...Array.from(t.querySelectorAll(`*`))]){if(i.namespaceURI!==zr||i.localName===`script`||i.localName===`foreignObject`){i.remove();continue}for(let{name:e,value:n}of Array.from(i.attributes)){let a=n.replace(/[\s\u0000-\u001f]/g,``).toLowerCase();(e.toLowerCase().startsWith(`on`)||a.includes(`javascript:`))&&i.removeAttribute(e)}}}function Vr(t){let i=new Map,e=new DOMParser().parseFromString(t,`image/svg+xml`).querySelector(`svg`);if(!(e instanceof SVGSVGElement))return{bounds:i,aspect_ratio:1};$r(e);let n=document.importNode(e,!0),a=document.createElement(`div`);a.style.position=`absolute`,a.style.visibility=`hidden`,a.style.pointerEvents=`none`,a.style.left=`-9999px`,a.style.top=`-9999px`,a.appendChild(n),document.body.appendChild(a);let{x:o,y:r,width:s,height:c}=Br(n),l=s/c,d=n.getScreenCTM?.(),h=d?d.inverse():null;return n.querySelectorAll(`[id]`).forEach(b=>{let U=b.getAttribute(`id`);if(U&&typeof b.getBBox==`function`)try{let O=qr(b,h);i.set(U,{x:(O.x-o)/s,y:(O.y-r)/c,w:O.width/s,h:O.height/c})}catch{}}),document.body.removeChild(a),{bounds:i,aspect_ratio:l}}var Ln=class{constructor(){this.store=new Map}get(i){if(!this.store.has(i)){let e=this._load(i);e.catch(()=>this.store.delete(i)),this.store.set(i,e)}return this.store.get(i)}async _load(i){for(;!ke$1();)await new Promise(l=>setTimeout(l,300));let e={},n=et$1(),a=new URL(i,location.origin).origin===location.origin;n&&a&&(bf()?Rn(`/`):e.headers=n===`x-api-key`?{"x-api-key":te()}:{Authorization:`Bearer ${n}`});let o=await fetch(i,e);if(!o.ok)throw new Error(`Failed to load map`);let r=await o.text(),{bounds:s,aspect_ratio:c}=Vr(r);return{raw_data:r,element_bounds:s,aspect_ratio:c}}};var ao=new Ln;function oo(t){return ao.get(t)}var io=class{constructor(i){this.map_image=null,this.styles_string=``,this.center={x:.5,y:.5},this.zoom=1,this.fixed_resolution_megapixels=0,this.disable_zoom=!1,this.disable_pan=!1,this.onViewChange=null,this.debug=!1,this.debug_info={pointer:null,hover_id:``,highlight_id:``,last_draw_ms:0,draws_last_second:0},this._map_path=``,this._image_generation=0,this._texture_width=0,this._texture_height=0,this._image_frame_id=null,this._draw_frame_id=null,this._notify_frame_id=null,this._debug_draw_count=0,this._debug_count_start=0,this._events=new Map,this._resize_observer=null,this._pointers=new Map,this._is_panning=!1,this._pinch_distance=null,this._pan_start_time=null,this._pan_exceeded_threshold=!1,this._overlay_instances=[],this._actions=[],this._action_event_handlers=new Map,this._action_pointerdown_pos=null,this._action_last_triggered=new Map,this.container=i,this.id=`m_view-${lf(8,`0123456789ABCDEF`)}`,this.container.innerHTML=``,this.container.style.overflow=`hidden`,this.container.style.touchAction=`none`,this.canvas=document.createElement(`canvas`),this.canvas.style.cssText=`position: absolute; inset: 0; pointer-events: none;`,this._ctx=this.canvas.getContext(`2d`),this.container.appendChild(this.canvas),this.overlays=document.createElement(`div`),this.overlays.id=`${this.id}-overlays`,this.overlays.style.cssText=`position: absolute; inset: 0; z-index: 0; pointer-events: none;`,this.container.appendChild(this.overlays),this._resize_observer=new ResizeObserver(()=>this._onResize()),this._resize_observer.observe(this.container),this._events.set(`wheel`,e=>this._onWheel(e)),this.container.addEventListener(`wheel`,this._events.get(`wheel`),{passive:!1}),this._events.set(`pointerdown`,e=>this._onPointerDown(e)),this._events.set(`pointermove`,e=>this._onPointerMove(e)),this._events.set(`pointerup`,e=>this._onPointerUp(e)),this.container.addEventListener(`pointerdown`,this._events.get(`pointerdown`)),window.addEventListener(`pointermove`,this._events.get(`pointermove`)),window.addEventListener(`pointerup`,this._events.get(`pointerup`)),window.addEventListener(`pointercancel`,this._events.get(`pointerup`))}async setMap(i){this._map_path=i;let e=await ao.get(i);this._map_path===i&&(this.map=e,this._renderMapImage())}setCenter(i){let e=this._clampCenter(i);e.x===this.center.x&&e.y===this.center.y||(this.center=e,this._renderMap())}setZoom(i){i=Math.max(Ya,Math.min(Qa,i)),i!==this.zoom&&(this.zoom=i,this._renderMap())}setFixedResolution(i){let e=i>0?i:0;this.fixed_resolution_megapixels!==e&&(this.fixed_resolution_megapixels=e,this.disable_zoom&&this._renderMapImage())}setOptions(i){let e=this.disable_zoom;this.disable_zoom=!!i?.disable_zoom,this.disable_pan=!!i?.disable_pan,e!==this.disable_zoom&&this._renderMapImage()}get overlay_count(){return this._overlay_instances.length}get texture_mode(){return this.disable_zoom?this.fixed_resolution_megapixels?`fixed ${this.fixed_resolution_megapixels}MP`:`fixed ${eo}\xD7 container`:no()?`mobile ${Ja}MP`:`desktop ${Za}MP`}setDebug(i){if(this.debug!==i){if(this.debug=i,i){let e=o=>{this.debug_info.pointer=this._eventToMap(o),this.debug_info.hover_id=this._elementAt(this.debug_info.pointer),this._renderMap()},n=()=>{this.debug_info.pointer=null,this.debug_info.hover_id=``,this._renderMap()},a=o=>{let r=this._eventToMap(o);console.log(`[MAP][DEBUG] Click at { x: ${r.x.toFixed(4)}, y: ${r.y.toFixed(4)} } on "${this._elementAt(r)||`no element`}"`)};this._events.set(`debug_move`,e),this._events.set(`debug_leave`,n),this._events.set(`debug_click`,a),this.container.addEventListener(`pointermove`,e),this.container.addEventListener(`pointerleave`,n),this.container.addEventListener(`click`,a)}else{for(let e of[`debug_move`,`debug_leave`,`debug_click`]){let n=this._events.get(e);if(!n)continue;let a=e===`debug_move`?`pointermove`:e===`debug_leave`?`pointerleave`:`click`;this.container.removeEventListener(a,n),this._events.delete(e)}this.debug_info.pointer=null,this.debug_info.hover_id=``,this.debug_info.highlight_id=``}this._applyOverlayOutlines(),this._renderMap()}}setDebugHighlight(i){this.debug_info.highlight_id!==i&&(this.debug_info.highlight_id=i,this.debug&&this._renderMap())}focusOn(i){let e=this.map?.element_bounds.get(i);e&&(this.setCenter({x:e.x+e.w/2,y:e.y+e.h/2}),this._notifyViewChange())}setOverlays(i){let e=new Map;for(let{overlay:o,element:r}of this._overlay_instances)typeof o.contents==`string`?r.remove():e.set(o.contents,r);this._overlay_instances=[];let n=[];for(let o of i){let r=typeof o.contents==`string`?void 0:e.get(o.contents);r&&e.delete(o.contents);let s=r||document.createElement(`div`);s.style.cssText=`position: absolute; top: 0; left: 0; display: flex; align-items: center; justify-content: center; transform-origin: center center; pointer-events: none;`,o.z_index!=null&&(s.style.zIndex=`${o.z_index}`),s.classList.toggle(`map-overlay-hover`,!!o.hover),typeof o.contents==`string`?s.innerHTML=o.contents:o.contents.parentNode!==s&&s.appendChild(o.contents),n.push(s),this._overlay_instances.push({overlay:o,element:s})}for(let o of e.values())o.remove();let a=this.overlays.firstChild;for(let o of n)o===a?a=o.nextSibling:this.overlays.insertBefore(o,a);this._applyOverlayOutlines(),this._updateOverlayPositions()}_applyOverlayOutlines(){for(let{element:i}of this._overlay_instances)i.style.outline=this.debug?`1px dashed #f0f`:``}_elementAt(i){let e=``,n=Number.POSITIVE_INFINITY;for(let[a,o]of this.map?.element_bounds||[]){if(i.x<o.x||i.x>o.x+o.w||i.y<o.y||i.y>o.y+o.h)continue;let r=o.w*o.h;r<n&&(e=a,n=r)}return e}setActions(i){for(let[n,a]of this._action_event_handlers)this.container.removeEventListener(n,a);this._action_event_handlers.clear(),this._action_last_triggered.clear(),this._actions=i;let e=new Set(i.flatMap(n=>n.events));for(let n of e){let a=o=>this._handleActionEvent(n,o);this._action_event_handlers.set(n,a),this.container.addEventListener(n,a)}if(!this._events.has(`action_pointerdown`)){let n=a=>{this._action_pointerdown_pos={x:a.clientX,y:a.clientY}};this._events.set(`action_pointerdown`,n),this.container.addEventListener(`pointerdown`,n)}}setStyles(i){let e=``;for(let[n,a]of Object.entries(i))a&&(e+=`svg ${Pr(n)} { ${a} }
`);e!==this.styles_string&&(this.styles_string=e,this._renderMapImage())}destroy(){this.setDebug(!1),this._resize_observer?.disconnect(),this._resize_observer=null,this.container.removeEventListener(`wheel`,this._events.get(`wheel`)),this.container.removeEventListener(`pointerdown`,this._events.get(`pointerdown`)),window.removeEventListener(`pointermove`,this._events.get(`pointermove`)),window.removeEventListener(`pointerup`,this._events.get(`pointerup`)),window.removeEventListener(`pointercancel`,this._events.get(`pointerup`));for(let[i,e]of this._action_event_handlers)this.container.removeEventListener(i,e);if(this._action_event_handlers.clear(),this._action_last_triggered.clear(),this._actions=[],this._events.has(`action_pointerdown`)){let i=this._events.get(`action_pointerdown`);this.container.removeEventListener(`pointerdown`,i),this._events.delete(`action_pointerdown`)}this._action_pointerdown_pos=null,this._image_generation++,this._map_path=``,this._image_frame_id!==null&&(cancelAnimationFrame(this._image_frame_id),this._image_frame_id=null),this._draw_frame_id!==null&&(cancelAnimationFrame(this._draw_frame_id),this._draw_frame_id=null),this._notify_frame_id!==null&&(cancelAnimationFrame(this._notify_frame_id),this._notify_frame_id=null);for(let i of this._overlay_instances)i.element.remove();this._overlay_instances=[],this.map_image=null,this.container.innerHTML=``}_viewScale(i=this.zoom){let e=this.map?.aspect_ratio||1,n=this.container.clientWidth||1,a=this.container.clientHeight||1,o=Math.min(a,n/e)*(1-Fr*2)*i;return{x:o*e,y:o}}_eventToMap(i,e=this.container.getBoundingClientRect()){let n=this._viewScale();return{x:(i.clientX-e.left-e.width/2)/n.x+this.center.x,y:(i.clientY-e.top-e.height/2)/n.y+this.center.y}}_clampCenter(i){return{x:Math.max(0,Math.min(1,i.x)),y:Math.max(0,Math.min(1,i.y))}}_zoomAboutPoint(i,e){let n=this.zoom;if(i=Math.max(Ya,Math.min(Qa,i)),i===n)return;let a=this.container.getBoundingClientRect(),o=this._eventToMap({clientX:e.x,clientY:e.y},a),r=this._viewScale(i),s={x:o.x-(e.x-a.left-a.width/2)/r.x,y:o.y-(e.y-a.top-a.height/2)/r.y};this.zoom=i,this.center=this._clampCenter(s),this._renderMap(),this._notifyViewChange()}_onWheel(i){if(i.preventDefault(),this.disable_zoom||!this.map_image)return;let e=i.deltaY>0?.97:1.03;this._zoomAboutPoint(this.zoom*e,{x:i.clientX,y:i.clientY})}_onPointerDown(i){if(this.map_image&&i.button===0){if(this._pointers.set(i.pointerId,{x:i.clientX,y:i.clientY}),this._pointers.size===2){this._is_panning=!1;let[e,n]=[...this._pointers.values()];this._pinch_distance=Math.hypot(n.x-e.x,n.y-e.y);return}this.disable_pan||(this._is_panning=!0,this._pan_start_time=Date.now(),this._pan_exceeded_threshold=!1,this.container.style.cursor=`grabbing`)}}_onPointerMove(i){let e=this._pointers.get(i.pointerId);if(!e)return;if(this._pointers.set(i.pointerId,{x:i.clientX,y:i.clientY}),this._pointers.size===2&&this._pinch_distance){if(this.disable_zoom)return;let[a,o]=[...this._pointers.values()],r=Math.hypot(o.x-a.x,o.y-a.y);r>0&&(this._zoomAboutPoint(this.zoom*(r/this._pinch_distance),{x:(a.x+o.x)/2,y:(a.y+o.y)/2}),this._pinch_distance=r);return}if(!this._is_panning)return;this._pan_start_time&&!this._pan_exceeded_threshold&&Date.now()-this._pan_start_time>200&&(this._pan_exceeded_threshold=!0);let n=this._viewScale();this.center=this._clampCenter({x:this.center.x-(i.clientX-e.x)/n.x,y:this.center.y-(i.clientY-e.y)/n.y}),this._renderMap(),this._notifyViewChange()}_onPointerUp(i){this._pointers.delete(i.pointerId),this._pointers.size<2&&(this._pinch_distance=null),this._is_panning&&this._pointers.size===0&&(this._is_panning=!1,this.container.style.cursor=``)}_onResize(){if(this._renderMap(),this.disable_zoom&&!this.fixed_resolution_megapixels){let{width:i,height:e}=this._textureDimensions();(i!==this._texture_width||e!==this._texture_height)&&this._renderMapImage()}}_targetTexturePixels(){return this.disable_zoom?this.fixed_resolution_megapixels>0?this.fixed_resolution_megapixels*1e6:(this.container.clientWidth||1)*(this.container.clientHeight||1)*eo:(no()?Ja:Za)*1e6}_textureDimensions(){let i=this.map?.aspect_ratio||1,e=this._targetTexturePixels(),n=Math.sqrt(e/i),a=n*i;return{width:Math.max(1,Math.min(to,Math.round(a))),height:Math.max(1,Math.min(to,Math.round(n)))}}_renderMapImage(){this._image_frame_id!==null&&cancelAnimationFrame(this._image_frame_id),this._image_frame_id=requestAnimationFrame(()=>{this._image_frame_id=null,this._doRenderMapImage()})}_doRenderMapImage(){if(!this.map?.raw_data)return;let i=++this._image_generation,n=new DOMParser().parseFromString(this.map.raw_data,`image/svg+xml`),a=n.querySelector(`svg`);if(!a)return;let{width:o,height:r}=this._textureDimensions();if(this._texture_width=o,this._texture_height=r,!a.getAttribute(`viewBox`)){let p=parseFloat(a.getAttribute(`width`)||``),b=parseFloat(a.getAttribute(`height`)||``);p>0&&b>0&&a.setAttribute(`viewBox`,`0 0 ${p} ${b}`)}if(a.getAttribute(`viewBox`)&&(a.setAttribute(`width`,`${o}`),a.setAttribute(`height`,`${r}`)),this.styles_string){let p=n.createElementNS(`http://www.w3.org/2000/svg`,`style`);p.textContent=this.styles_string,a.appendChild(p)}let c=new XMLSerializer().serializeToString(a),l=new Blob([c],{type:`image/svg+xml`}),d=URL.createObjectURL(l),h=new Image;h.onload=()=>{if(URL.revokeObjectURL(d),i!==this._image_generation)return;let p=document.createElement(`canvas`);p.width=o,p.height=r;let b=p.getContext(`2d`);if(!b){console.error(`Failed to get canvas context`);return}b.drawImage(h,0,0,o,r),this.map_image=p,this._renderMap()},h.onerror=()=>{URL.revokeObjectURL(d),console.error(`Failed to load map image`)},h.src=d}_renderMap(){this._draw_frame_id===null&&(this._draw_frame_id=requestAnimationFrame(()=>{this._draw_frame_id=null,this._drawMap()}))}_drawMap(){if(!this.map_image)return;let i=this.debug?performance.now():0,e=this.container.clientWidth||1,n=this.container.clientHeight||1,a=window.devicePixelRatio||1;(this.canvas.width!==Math.round(e*a)||this.canvas.height!==Math.round(n*a))&&(this.canvas.width=Math.round(e*a),this.canvas.height=Math.round(n*a),this.canvas.style.width=`${e}px`,this.canvas.style.height=`${n}px`);let o=this._viewScale(),r=this.center.x-e/2/o.x,s=this.center.y-n/2/o.y,c=Math.max(0,r),l=Math.max(0,s),d=Math.min(1,r+e/o.x),h=Math.min(1,s+n/o.y);if(this._ctx.setTransform(a,0,0,a,0,0),this._ctx.clearRect(0,0,e,n),d>c&&h>l){this._ctx.imageSmoothingEnabled=!0,this._ctx.imageSmoothingQuality=`high`;let p=this.map_image.width,b=this.map_image.height;this._ctx.drawImage(this.map_image,c*p,l*b,(d-c)*p,(h-l)*b,(c-r)*o.x,(l-s)*o.y,(d-c)*o.x,(h-l)*o.y)}if(this.debug){this._drawDebugInfo(o,r,s);let p=performance.now();this.debug_info.last_draw_ms=p-i,this._debug_draw_count++,p-this._debug_count_start>=1e3&&(this.debug_info.draws_last_second=this._debug_draw_count,this._debug_draw_count=0,this._debug_count_start=p)}this._updateOverlayPositions()}_drawDebugInfo(i,e,n){if(!this.map)return;let a=this._ctx,o=this.container.clientWidth||1,r=this.container.clientHeight||1,s=h=>(h-e)*i.x,c=h=>(h-n)*i.y;a.strokeStyle=`#f0f`,a.lineWidth=2,a.strokeRect(s(0),c(0),i.x,i.y),a.strokeStyle=`rgba(0, 200, 255, 0.6)`,a.lineWidth=1;for(let[,h]of this.map.element_bounds){let p=s(h.x),b=c(h.y),U=h.w*i.x,O=h.h*i.y;p+U<0||b+O<0||p>o||b>r||a.strokeRect(p,b,U,O)}let l=this.debug_info.highlight_id||this.debug_info.hover_id,d=l?this.map.element_bounds.get(l):null;if(d){let h=s(d.x),p=c(d.y);a.fillStyle=`rgba(255, 0, 255, 0.25)`,a.fillRect(h,p,d.w*i.x,d.h*i.y);let b=`#${l}`;a.font=`12px monospace`,a.fillStyle=`rgba(0, 0, 0, 0.7)`,a.fillRect(h,p-16,a.measureText(b).width+8,16),a.fillStyle=`#fff`,a.fillText(b,h+4,p-4)}a.strokeStyle=`#f00`,a.lineWidth=1,a.beginPath(),a.moveTo(o/2-8,r/2),a.lineTo(o/2+8,r/2),a.moveTo(o/2,r/2-8),a.lineTo(o/2,r/2+8),a.stroke()}_updateOverlayPositions(){if(!this.map?.element_bounds)return;let i=this.container.clientWidth||1,e=this.container.clientHeight||1,n=this._viewScale(),a=c=>({x:(c.x-this.center.x)*n.x+i/2,y:(c.y-this.center.y)*n.y+e/2}),o=(c,l)=>{c.last_display!==l&&(c.last_display=l,c.element.style.display=l)},r=(c,l)=>{c.last_transform!==l&&(c.last_transform=l,c.element.style.transform=l)},s=(c,l,d)=>{let h=`${l} ${d}`;c.last_size!==h&&(c.last_size=h,c.element.style.width=l,c.element.style.height=d)};for(let c of this._overlay_instances){let{overlay:l$4}=c;if(l$4.min_zoom&&this.zoom<l$4.min_zoom){o(c,`none`);continue}let d;if(typeof l$4.ref==`string`){if(d=this.map.element_bounds.get(l$4.ref),!d){o(c,`none`);continue}}else d=l({w:0,h:0},l$4.ref);if(o(c,``),l$4.type===`box`&&d.w>0&&d.h>0){let h=a({x:d.x,y:d.y});r(c,`translate(${h.x}px, ${h.y}px)`),s(c,`${d.w*n.x}px`,`${d.h*n.y}px`)}else{let h=a({x:d.x+d.w/2,y:d.y+d.h/2});s(c,``,``),r(c,l$4.scale_with_zoom?`translate(${h.x}px, ${h.y}px) translate(-50%, -50%) scale(${this.zoom})`:`translate(${h.x}px, ${h.y}px) translate(-50%, -50%)`)}}}_handleActionEvent(i,e){if(!this.map_image||!this.map?.element_bounds||this._pan_exceeded_threshold)return;if(i===`click`&&this._action_pointerdown_pos){let l=e.clientX-this._action_pointerdown_pos.x,d=e.clientY-this._action_pointerdown_pos.y;if(Math.hypot(l,d)>5)return}let n=this._eventToMap(e);if(n.x<0||n.x>1||n.y<0||n.y>1)return;let a=null,o=Number.POSITIVE_INFINITY;for(let l of this._actions){if(!l.events.includes(i))continue;if(l.ref===`*`){a||(a=l);continue}let d=this.map.element_bounds.get(l.ref);if(!d||n.x<d.x||n.x>d.x+d.w||n.y<d.y||n.y>d.y+d.h)continue;let h=d.w*d.h;(!a||a.ref===`*`||(l.priority||0)>(a.priority||0)||(l.priority||0)===(a.priority||0)&&h<o)&&(a=l,o=h)}if(!a)return;let r=Date.now(),s=`${a.ref}:${i}`;r-(this._action_last_triggered.get(s)||0)<300||(this._action_last_triggered.set(s,r),a.callback(n))}_notifyViewChange(){!this.onViewChange||this._notify_frame_id!==null||(this._notify_frame_id=requestAnimationFrame(()=>{this._notify_frame_id=null,this.onViewChange?.({zoom:this.zoom,center:l({},this.center)})}))}};function at(t,i){if(!t)return i;try{return JSON.parse(t)}catch{return i}}function qd(t){let i=!!t?.extension_data?.requires_manual_approval;return t?.approved!==!1?`pending`:i?`approval_required`:t.process_state===`wait_list`?`waitlist`:`pending`}function Ur(t){let i=t.other_data||{};return{id:t.id,map_id:t.map_id||i.map_id||``,level_id:t.zone_id,name:t.identifier||i.name||``,height:+(i.height||3),notes:t.notes||``,zones:t.zones||[t.zone_id].filter(e=>e),tags:t.tags||at(i.tags,[]),images:at(i.images,[]),lockers:[]}}function jr(t,i){let e=t.other_data||{},n=t.parent_id||``,a=i.find(o=>o.id===n);return{id:t.id,bank_id:n,map_id:t.map_id||e.map_id,assigned_to:t.assigned_to||e.assigned_to,assigned_name:t.assigned_name||e.assigned_name,name:t.identifier||e.name||``,accessible:e.accessible===`true`,bookable:t.bookable!==!1,position:at(e.position,[0,0]),size:at(e.size,[1,1]),bank:a,zone:a?.zone,features:t.features||at(e.features,[])}}var Gr=t=>`${(t.extension_data?.group_members||[]).find(n=>n?.email===t.asset_id)?.name||``}`.trim()||``;var Hr=t=>`${((t.attendees||[]).find(n=>n?.email===t.asset_id)||t.attendees?.[0])?.name||``}`.trim()||``;var Wr=t=>{if(!t.includes(`@`))return t;let[i]=t.split(`@`),e=i.replace(/[._-]+/g,` `).replace(/\s+/g,` `).trim();return e?e.replace(/\b\w/g,n=>n.toUpperCase()):t};var zd=t=>{let i=`${t?.asset_id||``}`.trim(),e=Gr(t);if(e)return e;let n=Hr(t);if(n)return n;let a=`${t?.extension_data?.visitor_name||t?.asset_name||``}`.trim(),o=[`${t?.title||``}`.trim().toLowerCase(),`${t?.description||``}`.trim().toLowerCase()].filter(r=>!!r);return a&&a.toLowerCase()!==i.toLowerCase()&&!o.includes(a.toLowerCase())?a:Wr(i||a||`Visitor`)};function $d(t,i,e=!1){let n=``,a=``;if(t instanceof Ma$1){n=t.booking_type===`visitor`?t.extension_data?.location||``:t.location||t.asset_name||``,n.startsWith(`unallocated`)&&(n=``),e&&t.booking_type===`parking`&&(n=``);let o=i.levelWithID(t.zones);a=o?.display_name||o?.name||``}else{n=t.location||t.space?.display_name||t.space?.name||t.system?.name||``;let o=i.levelWithID([...t.system?.zones||[]]);a=t.space?.level?.display_name||t.space?.level?.name||o?.display_name||o?.name||``}return n&&a?`${n} - ${a}`:n||a||``}async function Vd(t,i,e=[]){let n=await oo(t),a=c=>{let l=n.element_bounds.get(c);return l?{x:l.x+l.w/2,y:l.y+l.h/2}:null},o=(typeof i==`string`?a(i):i)||{x:.5,y:.5},r=10,s=``;for(let c of e){let{x:l,y:d}=a(c)||{x:2,y:2},h=Math.sqrt((l-o.x)*(l-o.x)+(d-o.y)*(d-o.y));h<r&&(r=h,s=c)}return s}function Ud(t){let i=t.date||t.event_start*1e3,e=t.duration??(t.event_end-t.event_start)/60,n=t.recurrence?.pattern?Nm(km(t.recurrence),i):{},a=[t.system,...t.resources||[]].filter(s=>!!s?.id),{system_id:o}=t,r=_i([...a.map(s=>s.id),o].filter(s=>!!s));return new Ma$1(m(l({id:t.id,user_id:t.organiser?.id||t.host,user_email:t.host,user_name:t.organiser?.name||t.host,title:t.title||void 0,date:i,duration:e,all_day:t.all_day,timezone:t.timezone,asset_id:r[0],asset_ids:r,asset_name:t.system?.display_name||t.system?.name,zones:_i(a.flatMap(s=>s.zones||[])),booking_type:`room`,approved:t.status===`approved`},n),{extension_data:l({},t)}))}async function Kr(t,i){if(!i)return[];let n=(await Ha([i]).catch(()=>[])).map(Ur);for(let a of n)a.zone=t.levelWithID(a.zones||[]);return n}async function Xr(t,i,e){if(!i)return[];let a=(await Wa([i]).catch(()=>[])).map(o=>jr(o,e));for(let o of e){let r=m(l({},o),{lockers:[]});o.lockers=a.filter(s=>s.bank_id===o.id).map(s=>m(l({},s),{bank:r}))}return a.filter(o=>o.bank)}async function jd(t,i){return Xr(t,i,await Kr(t,i))}var Yd=(()=>{class t extends Mu{constructor(){super(),this._org=y(st),this._settings=y(le),this._calendars=pt([]),this._calendars_request=null,this.calendar_list=this._calendars.asReadonly(),this.query=()=>Sn(),this.freeBusy=e=>Bt(e,this._org),this.availability=e=>Pt(e),this._waitForOrg()}async init(){this._settings.get(`app.events.use_bookings`)||this._initialised.next(!0)}get calendars(){return this._calendars()}async loadCalendars(){this._calendars().length||(this._calendars_request=this._calendars_request||Sn().then(e=>this._calendars.set(e)).catch(e=>{$t$1(`CalendarService`,`Failed to load calendars`,e,`warn`)}).finally(()=>this._calendars_request=null),await this._calendars_request)}_waitForOrg(){let e=()=>{if(this._org.initialised())return this.init();this.timeout(`init`,e,100)};e()}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵprov=N({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();var Qr=(t,i)=>i.booking_start;function Yr(t,i){if(t&1&&(ea(0,`tr`,10)(1,`td`,15),r_(2),w_(3,`date`),hd(),ea(4,`td`,15),r_(5),w_(6,`date`),w_(7,`date`),hd()()),t&2){let e=i.$implicit;$w(2),Dd$1(` `,T_(3,3,e.booking_start*1e3,`EEE, MMM d, yyyy`),` `),$w(3),Dy(` `,T_(6,6,e.booking_start*1e3,`h:mm a`),` - `,T_(7,9,e.booking_end*1e3,`h:mm a`),` `)}}async function lm(t,i){let e=i.open(Zr,{data:t});return Promise.race([e.componentInstance.event.pipe(Gf(n=>n.reason===`done`)).toPromise(),e.afterClosed().toPromise()])}var Zr=(()=>{class t{constructor(){this.event=new xt,this._data=y(vn),this._dialog_ref=y(Be)}get clashes(){return this._data.clashes||[]}onConfirm(){this.event.emit({reason:`done`}),this._dialog_ref.close({reason:`done`})}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=Db({type:t,selectors:[[`placeos-recurring-clash-modal`]],outputs:{event:`event`},decls:35,vars:21,consts:[[1,`relative`],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`m-2`,`h-14`,`w-[calc(100%-1rem)]`,`min-w-[20rem]`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[1,`flex`,`max-h-[60vh]`,`w-full`,`max-w-[calc(100vw-2rem)]`,`flex-col`,`items-center`,`space-y-4`,`overflow-auto`,`px-4`,`py-2`,`sm:max-w-md`],[1,`border-base-200`,`bg-warning`,`text-warning-content`,`flex`,`items-center`,`space-x-2`,`rounded-xl`,`border`,`p-2`,`shadow-sm`],[1,`text-5xl`],[1,`border-base-300`,`bg-base-100`,`max-h-48`,`w-full`,`overflow-auto`,`rounded-sm`,`border`],[1,`w-full`,`text-sm`],[1,`bg-base-200`,`sticky`,`top-0`],[1,`p-2`,`text-left`],[1,`border-base-300`,`border-t`],[1,`text-base-content/70`,`text-center`,`text-xs`],[1,`bg-base-200`,`sticky`,`bottom-0`,`m-2`,`flex`,`items-center`,`justify-center`,`space-x-2`,`rounded-sm`,`border-none`,`p-2`],[`btn`,``,`matRipple`,``,`mat-dialog-close`,``,1,`inverse`,`bg-base-100`,`flex-1`],[`btn`,``,`matRipple`,``,1,`flex-1`,3,`click`],[1,`p-2`]],template:function(n,a){n&1&&(ea(0,`div`,0)(1,`header`,1)(2,`h2`,2),r_(3),w_(4,`translate`),hd()(),ea(5,`main`,3)(6,`div`,4)(7,`icon`,5),r_(8,`warning`),hd(),ea(9,`p`),r_(10),w_(11,`translate`),hd()(),ea(12,`div`,6)(13,`table`,7)(14,`thead`,8)(15,`tr`)(16,`th`,9),r_(17),w_(18,`translate`),hd(),ea(19,`th`,9),r_(20),w_(21,`translate`),hd()()(),ea(22,`tbody`),hT(23,Yr,8,12,`tr`,10,Qr),hd()()(),ea(25,`p`,11),r_(26),w_(27,`translate`),hd()(),ea(28,`footer`,12)(29,`button`,13),r_(30),w_(31,`translate`),hd(),ea(32,`button`,14),ny(`click`,function(){return a.onConfirm()}),r_(33),w_(34,`translate`),hd()()()),n&2&&($w(3),Dd$1(` `,b_(4,7,`BOOKINGS.RECURRING_CLASHES_TITLE`),` `),$w(7),Dd$1(` `,b_(11,9,`BOOKINGS.RECURRING_CLASHES_MSG`),` `),$w(7),Dd$1(` `,b_(18,11,`FORM.DATE`),` `),$w(3),Dd$1(` `,b_(21,13,`COMMON.TIME`),` `),$w(3),gT(a.clashes),$w(3),Dd$1(` `,b_(27,15,`BOOKINGS.RECURRING_CLASHES_CONFIRM`),` `),$w(4),Dd$1(` `,b_(31,17,`COMMON.CANCEL`),` `),$w(3),Dd$1(` `,b_(34,19,`BOOKINGS.CONTINUE_BOOKING`),` `))},dependencies:[Hf,Oa,Da,sr$1,qs,f$1,JS],encapsulation:2})}}return t})();function Vt(t){let i=Gh(t,`UTC`);return`${Sl$1(i,`yyyyMMdd`)}T${Sl$1(i,`HHmmss`)}Z`}function Fn(t){return`${Sl$1(t,`yyyyMMdd`)}`}function $t(t){return(t||``).replace(/\\|;|,|\n/g,i=>{switch(i){case`\\`:return`\\\\`;case`;`:return`\\;`;case`,`:return`\\,`;case`
`:return`\\n`;default:return i}})}function um(t){if(!t)return`data:text/calendar;charset=utf8,`;let i=[],e=$t(`${t.body||``}${t.id?`

[ID|`+t.id+`]`:``}`),n=$t(`${t.location}`);i.push([`BEGIN`,`VCALENDAR`]),i.push([`VERSION`,`2.0`]),i.push([`BEGIN`,`VEVENT`]),i.push([`UID`,`${t.id||`uid-`+Date.now()}`]),i.push([`DTSTAMP`,Vt(new Date)]),t.meeting_url&&i.push([`URL`,`${t.meeting_url}`]),t.all_day?(i.push([`DTSTART;VALUE=DATE`,Fn(t.date)]),i.push([`DTEND;VALUE=DATE`,Fn(Ms(t.date,1))])):(i.push([`DTSTART`,Vt(t.date)]),i.push([`DTEND`,Vt(ft(t.date,t.duration||60))])),i.push([`SUMMARY`,$t(t.title)]),i.push([`DESCRIPTION`,e]),i.push([`LOCATION`,n]);let a=t.host||t.user_email||`no-reply@place.tech`,o=t.organiser?.name||a.split(`@`)[0]||`Staff`;i.push([`ORGANIZER`,`CN=${$t(o)}:mailto:${a}`]),i.push([`END`,`VEVENT`]),i.push([`END`,`VCALENDAR`]);let r=i.map(([c,l])=>`${c}:${l}`).join(`\r
`);return`data:text/calendar;charset=utf8,${encodeURIComponent(r)}`}function pm(t){let i=t.all_day?Fn:Vt,e={action:`TEMPLATE`,text:t.title,details:`${t.body||``}${t.id?`

[ID|`+t.id+`]`:``}`,location:t.location,trp:!1,dates:`${i(t.date)}/${i(ft(t.date,t.duration??60))}`},n=(t.attendees||[]).map(o=>o.email||o),a=((t.resources?.length?t.resources:null)||[t.system]).map(o=>o?.email||o);return(n.length||a.length)&&(e.add=_i([...n,...a]).join()),`https://calendar.google.com/calendar/render?${df(e)}`}function ro(t){return`${Sl$1(t,`yyyy-MM-dd`)}T${Sl$1(t,`HH:mm:ss`)}`}function _m(t,i=`office`,e=`free`){t.date||(t.date=Date.now());let n={startdt:ro(t.date),enddt:ro(ft(t.date,t.duration??60)),subject:t.title,body:`${t.body||``}${t.id?`


[ID|`+t.id+`]`:``}`,location:t.location,allday:t.all_day??!1};t.all_day&&delete n.enddt;let a=(t.attendees||[]).map(r=>r.email||r),o=((t.resources?.length?t.resources:null)||[t.system]).map(r=>r?.email||r);return(a.length||o.length)&&(n.to=_i([...a,...o]).filter(r=>!!r).join(`,`)),i===`office`?`https://outlook.office.com/calendar/deeplink/compose?${df(n)}`:`https://outlook.live.com/calendar/deeplink/compose?${df(n)}`}export{rl as $,Zc as A,io as B,Tr as C,Wr as D,Wo as E,cr as F,kl as G,jd as H,el as I,nl as J,lm as K,et as L,al as M,bd as N,Yc as O,bn as P,qd as Q,gn as R,Sn as S,Vd as T,jl as U,jc as V,ka as W,ol as X,nt as Y,pm as Z,Ml as _,Be as a,wl as at,Rs as b,Da as c,Ea as d,rr as et,Ed as f,Ls as g,Jc as h,Ba as i,vn as it,_m as j,Yd as k,Dd as l,Ia as m,$d as n,um as nt,Cl as o,xl as ot,El as p,nd as q,Al as r,uo as rt,Cn as s,zd as st,$a as t,tl as tt,Dn as u,Oa as v,Ud as w,Sl as x,On as y,il as z};
;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d59dbdb7-a833-5873-b352-f6d3e7e731f5")}catch(e){}}();
//# debugId=d59dbdb7-a833-5873-b352-f6d3e7e731f5
//# sourceMappingURL=chunk-he_BgZgD.js.map