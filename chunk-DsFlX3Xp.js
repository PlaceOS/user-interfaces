import{$ as Ob,A as Hv,An as ge$1,Ar as vm,Br as xb,Bt as Xl,Cn as de,Dr as v,En as en,Er as uv,Fn as jl,Gr as yC,Hn as l_,Hr as xm,Ir as we,J as Nh,Kr as yT,Kt as Ys,Lr as wm,Lt as XB,Mr as vy,Mt as Uv,N as JB,Nn as hr$1,Nt as VI,On as fb,Qr as zm,R as Ll,Rn as kb,S as Fb,Sn as db,St as Sm,Tr as ut$1,V as Mm,Vt as Xs,W as N,Wn as lv,Y as Nm,Zr as zi$1,_ as E$1,_n as bm,_t as Rb,a as A$1,at as Pn$1,bt as Sb,dt as QB,ei as n,en as Zs,f as CC,fr as rs,gr as sm,h as Dm,ht as Qr,in as _n,ir as q,it as Pm,kt as To,l as Bl,lr as re,m as De$1,mr as sT,nt as Os,pr as rt$1,q as Nb,qn as mm,qr as ym,r as $n$1,t as $,ti as o,tn as Zt,tt as On$1,ut as Q,w as Fs,wn as dv,wr as ue,wt as T,x as F_,xr as t2,yr as ss,yt as ST,z as Lr$1}from"./chunk-YCyfK7D9.js";import{i as X$1,n as Dt$1,o as bt$1,t as C}from"./main-B7N3XIML.js";import{M as z,c as A$2,k as ns,l as E$2,o as ot$1,u as Fe$1}from"./chunk-L4r_WKcI.js";import{M as vn,N as xe,S as gn,_ as bn,b as fi$1,d as R,j as ut$2,k as ue$1,l as Qi$1,m as Tn$1,o as In$1,p as Sn,s as Ji$1,t as $$1,x as ge$2}from"./chunk-DBBcR0Ii.js";var tt=class{_box;_destroyed=new re;_resizeSubject=new re;_resizeObserver;_elementObservables=new Map;constructor(e){this._box=e,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(e){return this._elementObservables.has(e)||this._elementObservables.set(e,new N(t=>{var r;let i=this._resizeSubject.subscribe(t);return(r=this._resizeObserver)==null||r.observe(e,{box:this._box}),()=>{var o;(o=this._resizeObserver)==null||o.unobserve(e),i.unsubscribe(),this._elementObservables.delete(e)}}).pipe(Lr$1(t=>t.some(i=>i.target===e)),Uv({bufferSize:1,refCount:!0}),dv(this._destroyed))),this._elementObservables.get(e)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var Fn=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=E$1(ge$1);constructor(){}ngOnDestroy(){var t;for(let[,i]of this._observers)i.destroy();this._observers.clear(),(t=this._cleanupErrorListener)==null||t.call(this)}observe(t,i){let r=(i==null?void 0:i.box)||`content-box`;return this._observers.has(r)||this._observers.set(r,new tt(r)),this._observers.get(r).observe(t)}static ɵfac=function(i){return new(i||n)};static ɵprov=Zt({token:n,factory:n.ɵfac})}return n})();var _i=[`notch`];var vi=[`*`];var Rn=[`iconPrefixContainer`];var Tn=[`textPrefixContainer`];var Dn=[`iconSuffixContainer`];var An=[`textSuffixContainer`];var yi=[`textField`];var xi=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var Si=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function Ni(n,e){n&1&&vm(0,`span`,21)}function wi(n,e){if(n&1&&(Os(0,`label`,20),xb(1,1),db(2,Ni,1,0,`span`,21),Ll()),n&2){let t=Sb(2);ym(`floating`,t._shouldLabelFloat())(`monitorResize`,t._hasOutline())(`id`,t._labelId),mm(`for`,t._control.disableAutomaticLabeling?null:t._control.id),VI(2),fb(!t.hideRequiredMarker&&t._control.required?2:-1)}}function Mi(n,e){if(n&1&&db(0,wi,3,5,`label`,20),n&2)fb(Sb()._hasFloatingLabel()?0:-1)}function Ei(n,e){n&1&&vm(0,`div`,7)}function Ci(n,e){}function Fi(n,e){if(n&1&&sm(0,Ci,0,0,`ng-template`,13),n&2){Sb(2);ym(`ngTemplateOutlet`,Fb(1))}}function Ri(n,e){if(n&1&&(Os(0,`div`,9),db(1,Fi,1,1,null,13),Ll()),n&2){let t=Sb();ym(`matFormFieldNotchedOutlineOpen`,t._shouldLabelFloat()),VI(),fb(t._forceDisplayInfixLabel()?-1:1)}}function Ti(n,e){n&1&&(Os(0,`div`,10,2),xb(2,2),Ll())}function Di(n,e){n&1&&(Os(0,`div`,11,3),xb(2,3),Ll())}function Ai(n,e){}function Ii(n,e){if(n&1&&sm(0,Ai,0,0,`ng-template`,13),n&2){Sb();ym(`ngTemplateOutlet`,Fb(1))}}function ki(n,e){n&1&&(Os(0,`div`,14,4),xb(2,4),Ll())}function Pi(n,e){n&1&&(Os(0,`div`,15,5),xb(2,5),Ll())}function Oi(n,e){n&1&&vm(0,`div`,16)}function Li(n,e){n&1&&(Os(0,`div`,18),xb(1,6),Ll())}function zi(n,e){if(n&1&&(Os(0,`mat-hint`,22),sT(1),Ll()),n&2){let t=Sb(2);ym(`id`,t._hintLabelId),VI(),zm(t.hintLabel)}}function Vi(n,e){if(n&1&&(Os(0,`div`,19),db(1,zi,2,2,`mat-hint`,22),xb(2,7),vm(3,`div`,23),xb(4,8),Ll()),n&2){let t=Sb();VI(),fb(t.hintLabel?1:-1)}}var nt=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=Ys({type:n,selectors:[[`mat-label`]]})}return n})();var Vn=new T(`MatError`);var Bi=(()=>{class n{id=E$1(z).getId(`mat-mdc-error-`);static ɵfac=function(i){return new(i||n)};static ɵdir=Ys({type:n,selectors:[[`mat-error`],[``,`matError`,``]],hostAttrs:[1,`mat-mdc-form-field-error`,`mat-mdc-form-field-bottom-align`],hostVars:1,hostBindings:function(i,r){i&2&&wm(`id`,r.id)},inputs:{id:`id`},features:[yT([{provide:Vn,useExisting:n}])]})}return n})();var it=(()=>{class n{align=`start`;id=E$1(z).getId(`mat-mdc-hint-`);static ɵfac=function(i){return new(i||n)};static ɵdir=Ys({type:n,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(i,r){i&2&&(wm(`id`,r.id),mm(`align`,null),Pm(`mat-mdc-form-field-hint-end`,r.align===`end`))},inputs:{align:`align`,id:`id`}})}return n})();var Bn=new T(`MatPrefix`);var Hi=(()=>{class n{set _isTextSelector(t){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||n)};static ɵdir=Ys({type:n,selectors:[[``,`matPrefix`,``],[``,`matIconPrefix`,``],[``,`matTextPrefix`,``]],inputs:{_isTextSelector:[0,`matTextPrefix`,`_isTextSelector`]},features:[yT([{provide:Bn,useExisting:n}])]})}return n})();var Hn=new T(`MatSuffix`);var ji=(()=>{class n{set _isTextSelector(t){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||n)};static ɵdir=Ys({type:n,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[yT([{provide:Hn,useExisting:n}])]})}return n})();var jn=new T(`FloatingLabelParent`);var In=(()=>{class n{_elementRef=E$1(Pn$1);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=E$1(Fn);_ngZone=E$1(ge$1);_parent=E$1(jn);_resizeSubscription=new q;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return qi(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(i){return new(i||n)};static ɵdir=Ys({type:n,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(i,r){i&2&&Pm(`mdc-floating-label--float-above`,r.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return n})();function qi(n){let e=n;if(e.offsetParent!==null)return e.scrollWidth;let t=e.cloneNode(!0);t.style.setProperty(`position`,`absolute`),t.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(t);let i=t.scrollWidth;return t.remove(),i}var kn=`mdc-line-ripple--active`;var Ee=`mdc-line-ripple--deactivating`;var Pn=(()=>{class n{_elementRef=E$1(Pn$1);_cleanupTransitionEnd;constructor(){let t=E$1(ge$1),i=E$1(To);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(Ee),t.add(kn)}deactivate(){this._elementRef.nativeElement.classList.add(Ee)}_handleTransitionEnd=t=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Ee);t.propertyName===`opacity`&&r&&i.remove(kn,Ee)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(i){return new(i||n)};static ɵdir=Ys({type:n,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return n})();var On=(()=>{class n{_elementRef=E$1(Pn$1);_ngZone=E$1(ge$1);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,i=t.querySelector(`.mdc-floating-label`);i?(t.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(i.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration=``)}))):t.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(t){let i=this._notch.nativeElement;!this.open||!t?i.style.width=``:i.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${t}px)`)}static ɵfac=function(i){return new(i||n)};static ɵcmp=yC({type:n,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(i,r){if(i&1&&Mm(_i,5),i&2){let o;Rb(o=Ob())&&(r._notch=o.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(i,r){i&2&&Pm(`mdc-notched-outline--notched`,r.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:vi,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(i,r){i&1&&(Nb(),Dm(0,`div`,1),jl(1,`div`,2,0),xb(3),Bl(),Dm(4,`div`,3))},encapsulation:2})}return n})();var rt=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(i){return new(i||n)};static ɵdir=Ys({type:n})}return n})();var ot=new T(`MatFormField`);var Ki=new T(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var Ln=`fill`;var Ui=`auto`;var zn=`fixed`;var Wi=`translateY(-50%)`;var qn=(()=>{class n{_elementRef=E$1(Pn$1);_changeDetectorRef=E$1(vy);_platform=E$1(C);_idGenerator=E$1(z);_ngZone=E$1(ge$1);_defaults=E$1(Ki,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=XB(`iconPrefixContainer`);_textPrefixContainerSignal=XB(`textPrefixContainer`);_iconSuffixContainerSignal=XB(`iconSuffixContainer`);_textSuffixContainerSignal=XB(`textSuffixContainer`);_prefixSuffixContainers=we(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t==null?void 0:t.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=JB(nt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=ns(t)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){var t;return this._floatLabel||((t=this._defaults)==null?void 0:t.floatLabel)||Ui}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){var r;let i=t||((r=this._defaults)==null?void 0:r.appearance)||Ln;this._appearanceSignal.set(i)}_appearanceSignal=rt$1(Ln);get subscriptSizing(){var t;return this._subscriptSizing||((t=this._defaults)==null?void 0:t.subscriptSizing)||zn}set subscriptSizing(t){var i;this._subscriptSizing=t||((i=this._defaults)==null?void 0:i.subscriptSizing)||zn}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new re;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Dt$1();constructor(){let t=this._defaults,i=E$1(X$1);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!(t!=null&&t.hideRequiredMarker),t.color&&(this.color=t.color)),ss(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){var t,i,r,o;(t=this._outlineLabelOffsetResizeObserver)==null||t.disconnect(),(i=this._stateChanges)==null||i.unsubscribe(),(r=this._valueChanges)==null||r.unsubscribe(),(o=this._describedByChanges)==null||o.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=we(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(t){var o,a,s;let i=this._control,r=`mat-mdc-form-field-type-`;t&&this._elementRef.nativeElement.classList.remove(r+t.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),(o=this._stateChanges)==null||o.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),(a=this._describedByChanges)==null||a.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(lv([void 0,void 0]),ut$1(()=>[i.errorState,i.userAriaDescribedBy]),Hv(),Lr$1(([[d,u],[m,w]])=>d!==m||u!==w)).subscribe(()=>this._syncDescribedByIds()),(s=this._valueChanges)==null||s.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(dv(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),uv(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){var i,r,o;let t=this._control.focused;t&&!this._isFocused?(this._isFocused=!0,(i=this._lineRipple)==null||i.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,(r=this._lineRipple)==null||r.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,t),(o=this._textField)==null||o.nativeElement.classList.toggle(`mdc-text-field--focused`,t)}_syncOutlineLabelOffset(){t2({earlyRead:()=>{var t;if(this._appearanceSignal()!==`outline`)return(t=this._outlineLabelOffsetResizeObserver)==null||t.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||(this._outlineLabelOffsetResizeObserver=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())}));for(let i of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(i,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=we(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(t){let i=this._control?this._control.ngControl:null;return i&&i[t]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){var t,i;!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?(t=this._notchedOutline)==null||t._setNotchWidth(0):(i=this._notchedOutline)==null||i._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&t.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let o=this._hintChildren?this._hintChildren.find(s=>s.align===`start`):null,a=this._hintChildren?this._hintChildren.find(s=>s.align===`end`):null;o?t.push(o.id):this._hintLabel&&t.push(this._hintLabelId),a&&t.push(a.id)}else this._errorChildren&&t.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||t;r=t.concat(i.filter(a=>a&&!o.includes(a)))}else r=t;this._control.setDescribedByIds(r),this._describedByIds=t}}_getOutlinedLabelOffset(){var At,It,kt,Pt;if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let t=(At=this._iconPrefixContainer)==null?void 0:At.nativeElement,i=(It=this._textPrefixContainer)==null?void 0:It.nativeElement,r=(kt=this._iconSuffixContainer)==null?void 0:kt.nativeElement,o=(Pt=this._textSuffixContainer)==null?void 0:Pt.nativeElement,a=(t==null?void 0:t.getBoundingClientRect().width)??0,s=(i==null?void 0:i.getBoundingClientRect().width)??0,d=(r==null?void 0:r.getBoundingClientRect().width)??0,u=(o==null?void 0:o.getBoundingClientRect().width)??0;return[`var(--mat-mdc-form-field-label-transform, ${Wi} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${a+s}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,a+s+d+u]}_writeOutlinedLabelStyles(t){var i;if(t!==null){let[r,o]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=r),o!==null&&((i=this._notchedOutline)==null||i._setMaxWidth(o))}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let i=t.getRootNode();return i&&i!==t}return document.documentElement.contains(t)}static ɵfac=function(i){return new(i||n)};static ɵcmp=yC({type:n,selectors:[[`mat-form-field`]],contentQueries:function(i,r,o){if(i&1&&(Nm(o,r._labelChild,nt,5),Sm(o,rt,5)(o,Bn,5)(o,Hn,5)(o,Vn,5)(o,it,5)),i&2){kb();let a;Rb(a=Ob())&&(r._formFieldControl=a.first),Rb(a=Ob())&&(r._prefixChildren=a),Rb(a=Ob())&&(r._suffixChildren=a),Rb(a=Ob())&&(r._errorChildren=a),Rb(a=Ob())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(xm(r._iconPrefixContainerSignal,Rn,5)(r._textPrefixContainerSignal,Tn,5)(r._iconSuffixContainerSignal,Dn,5)(r._textSuffixContainerSignal,An,5),Mm(yi,5)(Rn,5)(Tn,5)(Dn,5)(An,5)(In,5)(On,5)(Pn,5)),i&2){kb(4);let o;Rb(o=Ob())&&(r._textField=o.first),Rb(o=Ob())&&(r._iconPrefixContainer=o.first),Rb(o=Ob())&&(r._textPrefixContainer=o.first),Rb(o=Ob())&&(r._iconSuffixContainer=o.first),Rb(o=Ob())&&(r._textSuffixContainer=o.first),Rb(o=Ob())&&(r._floatingLabel=o.first),Rb(o=Ob())&&(r._notchedOutline=o.first),Rb(o=Ob())&&(r._lineRipple=o.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(i,r){i&2&&Pm(`mat-mdc-form-field-label-always-float`,r._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,r._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,r._hasIconSuffix)(`mat-form-field-invalid`,r._control.errorState)(`mat-form-field-disabled`,r._control.disabled)(`mat-form-field-autofilled`,r._control.autofilled)(`mat-form-field-appearance-fill`,r.appearance==`fill`)(`mat-form-field-appearance-outline`,r.appearance==`outline`)(`mat-form-field-hide-placeholder`,r._hasFloatingLabel()&&!r._shouldLabelFloat())(`mat-primary`,r.color!==`accent`&&r.color!==`warn`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`ng-untouched`,r._shouldForward(`untouched`))(`ng-touched`,r._shouldForward(`touched`))(`ng-pristine`,r._shouldForward(`pristine`))(`ng-dirty`,r._shouldForward(`dirty`))(`ng-valid`,r._shouldForward(`valid`))(`ng-invalid`,r._shouldForward(`invalid`))(`ng-pending`,r._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[yT([{provide:ot,useExisting:n},{provide:jn,useExisting:n}])],ngContentSelectors:Si,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(i,r){if(i&1&&(Nb(xi),sm(0,Mi,1,1,`ng-template`,null,0,ST),Os(2,`div`,6,1),bm(`click`,function(a){return r._control.onContainerClick(a)}),db(4,Ei,1,0,`div`,7),Os(5,`div`,8),db(6,Ri,2,2,`div`,9),db(7,Ti,3,0,`div`,10),db(8,Di,3,0,`div`,11),Os(9,`div`,12),db(10,Ii,1,1,null,13),xb(11),Ll(),db(12,ki,3,0,`div`,14),db(13,Pi,3,0,`div`,15),Ll(),db(14,Oi,1,0,`div`,16),Ll(),Os(15,`div`,17),db(16,Li,2,0,`div`,18)(17,Vi,5,1,`div`,19),Ll()),i&2){let o;VI(2),Pm(`mdc-text-field--filled`,!r._hasOutline())(`mdc-text-field--outlined`,r._hasOutline())(`mdc-text-field--no-label`,!r._hasFloatingLabel())(`mdc-text-field--disabled`,r._control.disabled)(`mdc-text-field--invalid`,r._control.errorState),VI(2),fb(!r._hasOutline()&&!r._control.disabled?4:-1),VI(2),fb(r._hasOutline()?6:-1),VI(),fb(r._hasIconPrefix?7:-1),VI(),fb(r._hasTextPrefix?8:-1),VI(2),fb(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),VI(2),fb(r._hasTextSuffix?12:-1),VI(),fb(r._hasIconSuffix?13:-1),VI(),fb(r._hasOutline()?-1:14),VI(),Pm(`mat-mdc-form-field-subscript-dynamic-size`,r.subscriptSizing===`dynamic`);let a=r._getSubscriptMessageType();VI(),fb((o=a)===`error`?16:o===`hint`?17:-1)}},dependencies:[In,On,F_,Pn,it],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return n})();var at=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Zs({type:n});static ɵinj=Qr({imports:[Fe$1,qn,bt$1]})}return n})();var Gi=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=yC({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return n})();var $i={passive:!0};var Kn=(()=>{class n{_platform=E$1(C);_ngZone=E$1(ge$1);_renderer=E$1(On$1).createRenderer(null,null);_styleLoader=E$1(A$2);_monitoredElements=new Map;monitor(t){if(!this._platform.isBrowser)return en;this._styleLoader.load(Gi);let i=E$2(t),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new re,a=`cdk-text-field-autofilled`,s=u=>{u.animationName===`cdk-text-field-autofill-start`&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:u.target,isAutofilled:!0}))):u.animationName===`cdk-text-field-autofill-end`&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:u.target,isAutofilled:!1})))},d=this._ngZone.runOutsideAngular(()=>(i.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(i,`animationstart`,s,$i)));return this._monitoredElements.set(i,{subject:o,unlisten:d}),o}stopMonitoring(t){let i=E$2(t),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove(`cdk-text-field-autofill-monitored`),i.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((t,i)=>this.stopMonitoring(i))}static ɵfac=function(i){return new(i||n)};static ɵprov=Zt({token:n,factory:n.ɵfac})}return n})();var Un=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Zs({type:n});static ɵinj=Qr({})}return n})();var Qn=Symbol(`FIELD_TREE`);var st=0;function Zi(){return st}function V(n,e){return(...t)=>{try{return st=e,n(...t)}finally{st=0}}}function Qi(n){return!n}function Wn(n){return n}function A(n){return Array.isArray(n)}function Fe(n){return(typeof n==`object`||typeof n==`function`)&&n!=null}var K=Symbol();var Oe=Symbol();var pe=class{predicates;fns=[];constructor(e){this.predicates=e}push(e){this.fns.push(Gn(this.predicates,e))}mergeIn(e){let t=this.predicates?e.fns.map(i=>Gn(this.predicates,i)):e.fns;this.fns.push(...t)}hasRules(){return this.fns.length>0}};var Re=class extends pe{get defaultValue(){return!1}compute(e){return this.fns.some(t=>{let i=t(e);return i&&i!==Oe})}};var J=class n extends pe{ignore;static ignoreNull(e){return new n(e,t=>t===null)}constructor(e,t){super(e),this.ignore=t}get defaultValue(){return[]}compute(e){return this.fns.reduce((t,i)=>{let r=i(e);return r===void 0||r===Oe?t:A(r)?[...t,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?t:[...t,r]},[])}};var lt=class extends J{constructor(e){super(e,void 0)}};var dt=class extends pe{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(e,t){super(e),this.key=t}compute(e){if(this.fns.length===0)return this.key.reducer.getInitial();let t=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let r=this.fns[i](e);r!==Oe&&(t=this.key.reducer.reduce(t,r))}return t}};function Gn(n,e){return n.length===0?e:t=>{for(let i of n){let r=t.stateOf(i.path),o=de(r.structure.pathKeys).length-i.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!i.fn(r.context))return Oe}return e(t)}}var ee=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(e){this.predicates=e,this.hidden=new Re(e),this.disabledReasons=new lt(e),this.readonly=new Re(e),this.syncErrors=J.ignoreNull(e),this.syncTreeErrors=J.ignoreNull(e),this.asyncErrors=J.ignoreNull(e)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(e){return this.metadata.has(e)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(e){return this.metadata.has(e)||this.metadata.set(e,new dt(this.predicates,e)),this.metadata.get(e)}mergeIn(e){this.hidden.mergeIn(e.hidden),this.disabledReasons.mergeIn(e.disabledReasons),this.readonly.mergeIn(e.readonly),this.syncErrors.mergeIn(e.syncErrors),this.syncTreeErrors.mergeIn(e.syncTreeErrors),this.asyncErrors.mergeIn(e.asyncErrors);for(let t of e.getMetadataKeys()){let i=e.metadata.get(t);this.getMetadata(t).mergeIn(i)}}};var Te=class{depth;constructor(e){this.depth=e}build(){return new De(this,[],0)}};var te=class n extends Te{constructor(e){super(e)}current;all=[];addHiddenRule(e){this.getCurrent().addHiddenRule(e)}addDisabledReasonRule(e){this.getCurrent().addDisabledReasonRule(e)}addReadonlyRule(e){this.getCurrent().addReadonlyRule(e)}addSyncErrorRule(e){this.getCurrent().addSyncErrorRule(e)}addSyncTreeErrorRule(e){this.getCurrent().addSyncTreeErrorRule(e)}addAsyncErrorRule(e){this.getCurrent().addAsyncErrorRule(e)}addMetadataRule(e,t){this.getCurrent().addMetadataRule(e,t)}getChild(e){if(e===K){let t=this.getCurrent().children;t.size>(t.has(K)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(e)}hasLogic(e){return this===e?!0:this.all.some(({builder:t})=>t.hasLogic(e))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:e})=>e.anyChildHasLogic())}mergeIn(e,t){t?this.all.push({builder:e,predicate:{fn:V(t.fn,this.depth),path:t.path}}):this.all.push({builder:e}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new ge(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new n(0)}};var ge=class extends Te{logic=new ee([]);children=new Map;constructor(e){super(e)}addHiddenRule(e){this.logic.hidden.push(V(e,this.depth))}addDisabledReasonRule(e){this.logic.disabledReasons.push(V(e,this.depth))}addReadonlyRule(e){this.logic.readonly.push(V(e,this.depth))}addSyncErrorRule(e){this.logic.syncErrors.push(V(e,this.depth))}addSyncTreeErrorRule(e){this.logic.syncTreeErrors.push(V(e,this.depth))}addAsyncErrorRule(e){this.logic.asyncErrors.push(V(e,this.depth))}addMetadataRule(e,t){this.logic.getMetadata(e).push(V(t,this.depth))}getChild(e){return this.children.has(e)||this.children.set(e,new te(this.depth+1)),this.children.get(e)}hasLogic(e){return this===e}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let e of this.children.values())if(e.hasRules())return!0;return!1}};var De=class n{builder;predicates;depth;logic;constructor(e,t,i){this.builder=e,this.predicates=t,this.depth=i,this.logic=e?Yi(e,t,i):new ee([])}getChild(e){let t=this.builder?Yn(this.builder,e):[];if(t.length===0)return new n(void 0,[],this.depth+1);if(t.length===1){let{builder:i,predicates:r}=t[0];return new n(i,[...this.predicates,...r.map(o=>ut(o,this.depth))],this.depth+1)}else return new ct(t.map(({builder:r,predicates:o})=>new n(r,[...this.predicates,...o.map(a=>ut(a,this.depth))],this.depth+1)))}hasLogic(e){return this.builder?this.builder.hasLogic(e):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}};var ct=class n{all;logic;constructor(e){this.all=e,this.logic=new ee([]);for(let t of e)this.logic.mergeIn(t.logic)}getChild(e){return new n(this.all.flatMap(t=>t.getChild(e)))}hasLogic(e){return this.all.some(t=>t.hasLogic(e))}hasRules(){return this.all.some(e=>e.hasRules())}anyChildHasLogic(){return this.all.some(e=>e.anyChildHasLogic())}};function Yn(n,e){if(n instanceof te)return n.all.flatMap(({builder:t,predicate:i})=>{let r=Yn(t,e);return i?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,i]})):r});if(n instanceof ge)return[...e!==K&&n.children.has(K)?[{builder:n.getChild(K),predicates:[]}]:[],...n.children.has(e)?[{builder:n.getChild(e),predicates:[]}]:[]];throw new v(1909,!1)}function Yi(n,e,t){let i=new ee(e);if(n instanceof te){let r=n.all.map(({builder:o,predicate:a})=>new De(o,a?[...e,ut(a,t)]:e,t));for(let o of r)i.mergeIn(o.logic)}else if(n instanceof ge)i.mergeIn(n.logic);else throw new v(1909,!1);return i}function ut(n$1,e){return o(n({},n$1),{depth:e})}var Xn=Symbol(`PATH`);var I=class n{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,Xi);logicBuilder;constructor(e,t,i,r){this.keys=e,this.parent=i,this.keyInParent=r,this.root=t??this,i||(this.logicBuilder=te.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(e){return this.children.has(e)||this.children.set(e,new n([...this.keys,e],this.root,this,e)),this.children.get(e)}mergeIn(e,t){let i=e.compile();this.builder.mergeIn(i.builder,t)}static unwrapFieldPath(e){return e[Xn]}static newRoot(){return new n([],void 0,void 0,void 0)}};var Xi={get(n,e){return e===Xn?n:n.getChild(e).fieldPathProxy}};var Ce;var he=new Map;var Ae=class n{schemaFn;constructor(e){this.schemaFn=e}compile(){if(he.has(this))return he.get(this);let e=I.newRoot();he.set(this,e);let t=Ce;try{Ce=e,this.schemaFn(e.fieldPathProxy)}finally{Ce=t}return e}static create(e){return e instanceof n?e:new n(e)}static rootCompile(e){try{return he.clear(),e===void 0?I.newRoot():e instanceof n?e.compile():new n(e).compile()}finally{he.clear()}}};function Ji(n){return n instanceof Ae||typeof n==`function`}function Le(n){if(Ce!==I.unwrapFieldPath(n).root)throw new v(1908,!1)}function St(n,e,t){return Le(n),I.unwrapFieldPath(n).builder.addMetadataRule(e,t),e}var ne={list(){return{reduce:(n,e)=>e===void 0?n:[...n,e],getInitial:()=>[]}},min(){return{reduce:(n,e)=>n===void 0||e===void 0?n??e:e<n?e:n,getInitial:()=>{}}},max(){return{reduce:(n,e)=>n===void 0||e===void 0?n??e:e>n?e:n,getInitial:()=>{}}},or(){return{reduce:(n,e)=>n||e,getInitial:()=>!1}},and(){return{reduce:(n,e)=>n&&e,getInitial:()=>!0}},override:er};function er(n){return{reduce:(e,t)=>t,getInitial:()=>n==null?void 0:n()}}var Nt=Symbol(`IS_ASYNC_VALIDATION_RESOURCE`);var Ie=class{reducer;create;brand;[Nt];constructor(e,t){this.reducer=e,this.create=t}};function B(n){return new Ie(n??ne.override())}function wt(){return B()}var Mt=B(ne.or());var Jn=wt();var ei=wt();var ti=B(ne.max());var ni=B(ne.min());var ii=B(ne.list());function E(n,e){if(n===e)return!0;if(!n||!e||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(!Object.is(n[t],e[t]))return!1;return!0}function tr(n){return n.errors().length>0?`invalid`:n.pending()?`unknown`:`valid`}var ft=class{node;constructor(e){this.node=e}rawSyncTreeErrors=we(()=>{var e;return this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...((e=this.node.structure.parent)==null?void 0:e.validationState.rawSyncTreeErrors())??[]]},{equal:E});syncErrors=we(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...nr(this.node.submitState.submissionErrors())],{equal:E});syncValid=we(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(e,t)=>t&&e.validationState.syncValid(),Qi));syncTreeErrors=we(()=>this.rawSyncTreeErrors().filter(e=>e.fieldTree===this.node.fieldTree),{equal:E});rawAsyncErrors=we(()=>{var e;return this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...((e=this.node.structure.parent)==null?void 0:e.validationState.rawAsyncErrors())??[]]},{equal:E});asyncErrors=we(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(e=>e===`pending`||e.fieldTree===this.node.fieldTree),{equal:E});parseErrors=we(()=>this.node.formFieldBindings().flatMap(e=>e.parseErrors()),{equal:E});errors=we(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(e=>e!==`pending`)],{equal:E});errorSummary=we(()=>{let e=this.node.structure.reduceChildren(this.errors(),(t,i)=>[...i,...t.errorSummary()]);return de(()=>e.sort(ir)),e},{equal:E});pending=we(()=>this.node.structure.reduceChildren(this.asyncErrors().includes(`pending`),(e,t)=>t||e.validationState.pending()));status=we(()=>{if(this.shouldSkipValidation())return`valid`;let e=tr(this);return this.node.structure.reduceChildren(e,(t,i)=>i===`invalid`||t.validationState.status()===`invalid`?`invalid`:i===`unknown`||t.validationState.status()===`unknown`?`unknown`:`valid`,t=>t===`invalid`)});valid=we(()=>this.status()===`valid`);invalid=we(()=>this.status()===`invalid`);shouldSkipValidation=we(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function nr(n){return n===void 0?[]:A(n)?n:[n]}function Et(n,e){if(A(n))for(let t of n)t.fieldTree??(t.fieldTree=e);else n&&(n.fieldTree??(n.fieldTree=e));return n}function $n(n){return n.formField?n.formField.element:n.fieldTree().formFieldBindings().reduce((e,t)=>!e||!t.element?e??t.element:e.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t.element:e,void 0)}function ir(n,e){let t=$n(n),i=$n(e);return t===i?0:t===void 0||i===void 0?t===void 0?1:-1:t.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var mt=B();var ht=class{node;cache=new WeakMap;constructor(e){this.node=e,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(e){if(!this.cache.has(e)){let t=we(()=>{let i=I.unwrapFieldPath(e),r=this.node,o=Zi();for(;o>0||!r.structure.logic.hasLogic(i.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new v(1900,!1);for(let a of i.keys)if(r=r.structure.getChild(a),r===void 0)throw new v(1901,!1);return r.fieldTree});this.cache.set(e,t)}return this.cache.get(e)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=we(()=>{let e=this.key();if(!A(de(this.node.structure.parent.value)))throw new v(1906,!1);return Number(e)});fieldTreeOf(e){return this.resolve(e)}stateOf(e){return this.resolve(e)()}valueOf=e=>{let t=this.resolve(e)().value();if(t instanceof ue$1)throw new v(1907,!1);return t}};var pt=class{node;metadata=new Map;constructor(e){this.node=e}runMetadataCreateLifecycle(){if(!this.node.logicNode.logic.hasMetadataKeys())return;let e=Xl();e&&$n$1(!1);try{de(()=>zi$1(this.node.structure.injector,()=>{for(let t of this.node.logicNode.logic.getMetadataKeys())if(t.create){let i=this.node.logicNode.logic.getMetadata(t),r=t.create(this.node,we(()=>i.compute(this.node.context)));this.metadata.set(t,r)}}))}finally{e&&$n$1(!0)}}get(e){if(this.has(e)&&!this.metadata.has(e)){if(e.create)throw new v(1912,!1);let t=this.node.logicNode.logic.getMetadata(e);this.metadata.set(e,we(()=>t.compute(this.node.context)))}return this.metadata.get(e)}has(e){return this.node.logicNode.logic.hasMetadata(e)}};var rr={get(n,e,t){if(e===Qn)return!0;let i=n(),r=i.structure.getChild(e);if(r!==void 0)return r.fieldTree;let o=de(i.value);if(A(o)){if(e===`length`)return i.value().length;if(e===Symbol.iterator)return()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(Fe(o)&&e===Symbol.iterator)return function*(){for(let a in t)yield[a,t[a]]}},getOwnPropertyDescriptor(n,e){let t=de(n().value),i=Reflect.getOwnPropertyDescriptor(t,e);return i&&!i.configurable&&(i.configurable=!0),i},ownKeys(n){let e=de(n().value);return typeof e==`object`&&e!==null?Reflect.ownKeys(e):[]}};function or(n,e){let t=we(()=>n()[e()]);return t[$]=n[$],t.set=i=>{Object.is(de(t),i)||n.update(r=>ar(r,i,e()))},t.update=i=>{t.set(i(de(t)))},t.asReadonly=()=>t,t}function ar(n$2,e,t){if(A(n$2)){let i=[...n$2];return i[t]=e,i}else return o(n({},n$2),{[t]:e})}var X=Symbol(``);var ri=we(()=>!1);var ke=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??(this._injector=ue.create({providers:[],parent:this.fieldManager.injector})),this._injector}constructor(e,t,i){this.logic=e,this.node=t,this.createChildNode=i}children(){this.ensureChildrenMap();let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>de(t.reader))}materializedChildren(){let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>t.node)}_areChildrenMaterialized(){return de(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||de(()=>{this.childrenMap.update(e=>this.computeChildrenMap(this.value(),e,!0))})}getChild(e){var r,o;this.ensureChildrenMap();let t=e.toString(),i=(o=(r=de(this.childrenMap))==null?void 0:r.byPropertyKey.get(t))==null?void 0:o.reader;return i||(i=this.createReader(t)),i()}reduceChildren(e,t,i){let r=this.childrenMap();if(!r)return e;let o=e;for(let a of r.byPropertyKey.values()){if(i!=null&&i(o))break;o=t(de(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(e,t,i){if(e===`root`)return{keyInParent:oi,isOrphaned:ri};let r=this.parent,o=i,a=we(()=>{if(r.structure.isOrphaned())return X;let u=r.structure.childrenMap();if(!u)return X;let m=u.byPropertyKey.get(o);if(m&&m.node===this.node)return o;if(t===void 0)return X;for(let[w,M]of u.byPropertyKey)if(M.node===this.node)return o=w;return X}),s=we(()=>a()===X);return{keyInParent:we(()=>{let u=a();if(u===X)throw t===void 0?new v(-1902,!1):new v(1904,!1);return u}),isOrphaned:s}}createChildrenMap(){return Xs({source:this.value,computation:(e,t)=>this.computeChildrenMap(e,t==null?void 0:t.value,!1)})}computeChildrenMap(e,t,i){var a,s;if(!Fe(e)||!i&&t===void 0&&!(this._anyChildHasLogic??(this._anyChildHasLogic=this.logic.anyChildHasLogic())))return;t??(t={byPropertyKey:new Map});let r,o=A(e);t!==void 0&&(o?r=lr(t,e,this.identitySymbol):r=dr(t,e));for(let d of Object.keys(e)){let u,m=e[d];if(m===void 0){t.byPropertyKey.has(d)&&(r??(r=n({},t)),r.byPropertyKey.delete(d));continue}o&&Fe(m)&&!A(m)&&(u=m[a=this.identitySymbol]??(m[a]=Symbol(``)));let w;u&&((s=t.byTrackingKey)!=null&&s.has(u)||(r??(r=n({},t)),r.byTrackingKey??(r.byTrackingKey=new Map),r.byTrackingKey.set(u,this.createChildNode(d,u,o))),w=(r??t).byTrackingKey.get(u));let M=t.byPropertyKey.get(d);M===void 0?(r??(r=n({},t)),r.byPropertyKey.set(d,{reader:this.createReader(d),node:w??this.createChildNode(d,u,o)})):w&&w!==M.node&&(r??(r=n({},t)),M.node=w)}return r??t}createReader(e){return we(()=>{var t,i;return(i=(t=this.childrenMap())==null?void 0:t.byPropertyKey.get(e))==null?void 0:i.node})}};var gt=class extends ke{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return sr}get keyInParent(){return oi}isOrphaned=ri;childrenMap;constructor(e,t,i,r,o){super(t,e,o),this.fieldManager=i,this.value=r,this.childrenMap=this.createChildrenMap()}};var bt=class extends ke{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(e,t,i,r,o,a){super(t,e,a),this.logic=t,this.parent=i,this.root=this.parent.structure.root;let s=this.createKeyOrOrphanSignals(`child`,r,o);this.isOrphaned=s.isOrphaned,this.keyInParent=s.keyInParent,this.pathKeys=we(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=or(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var sr=we(()=>[]);var oi=we(()=>{throw new v(1905,!1)});function lr(n$3,e,t){let i,r=new Set(n$3.byPropertyKey.keys()),o=n$3.byTrackingKey&&new Set(n$3.byTrackingKey.keys());for(let a=0;a<e.length;a++){let s=e[a];r.delete(a.toString()),o&&Fe(s)&&Object.hasOwn(s,t)&&o.delete(s[t])}if(r.size>0){i??(i=n({},n$3));for(let a of r)i.byPropertyKey.delete(a)}if(o&&o.size>0){i??(i=n({},n$3));for(let a of o)i.byTrackingKey.delete(a)}return i}function dr(n$4,e){let t;for(let i of n$4.byPropertyKey.keys())Object.hasOwn(e,i)||(t??(t=n({},n$4)),t.byPropertyKey.delete(i));return t}var _t=class{node;selfSubmitting=rt$1(!1);submissionErrors;constructor(e){this.node=e,this.submissionErrors=Xs({source:this.node.structure.value,computation:()=>[]})}submitting=we(()=>{var e;return this.selfSubmitting()||(((e=this.node.structure.parent)==null?void 0:e.submitting())??!1)})};var be=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??(this._context=new ht(this))}fieldProxy=new Proxy(()=>this,rr);pathNode;constructor(e){this.pathNode=e.pathNode,this.fieldAdapter=e.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,e),this.validationState=this.fieldAdapter.createValidationState(this,e),this.nodeState=this.fieldAdapter.createNodeState(this,e),this.metadataState=new pt(this),this.submitState=new _t(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(e){var t;(t=this.getBindingForFocus())==null||t.focus(e)}getBindingForFocus(){return this.formFieldBindings().filter(t=>t.focus!==void 0).reduce(Zn,void 0)||this.structure.children().map(t=>t.getBindingForFocus()).reduce(Zn,void 0)}pendingSync=Xs({source:()=>this.value(),computation:(e,t)=>{var i;(i=t==null?void 0:t.value)==null||i.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){var t;let e=(t=this.metadata(ei))==null?void 0:t();return e?this.metadata(e):void 0}get maxLength(){return this.metadata(ni)}get min(){var t;let e=(t=this.metadata(Jn))==null?void 0:t();return e?this.metadata(e):void 0}get minLength(){return this.metadata(ti)}get pattern(){return this.metadata(ii)??cr}get required(){return this.metadata(Mt)??ur}metadata(e){return this.metadataState.get(e)}getError(e){return this.errors().find(t=>t.kind===e)}hasMetadata(e){return this.metadataState.has(e)}markAsTouched(e){this.structure.isOrphaned()||de(()=>{this.markAsTouchedInternal(e),this.flushSync()})}markAsTouchedInternal(e){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!(e!=null&&e.skipDescendants)))for(let t of this.structure.children())t.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(e){de(()=>this._reset(e))}_reset(e){var t;(t=this.pendingSync())==null||t.abort(),e!==void 0&&this.value.set(e),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let i of this.formFieldBindings())i.reset();for(let i of this.structure.materializedChildren())i._reset()}reloadValidation(){de(()=>this._reloadValidation())}_reloadValidation(){var t;let e=this.logicNode.logic.getMetadataKeys();for(let i of e)if(i[Nt]){let r=this.metadata(i);(t=r.reload)==null||t.call(r)}for(let i of this.structure.children())i._reloadValidation()}controlValueSignal(){let e=Xs(this.value);e.rawSet=e.set,e.set=i=>{e.rawSet(i),this.markAsDirty(),this.debounceSync()};let t=e.update;return e.update=i=>{t(i),this.markAsDirty(),this.debounceSync()},e}sync(){this.value.set(this.controlValue())}flushSync(){let e=this.pendingSync();e&&!e.signal.aborted&&(e.abort(),this.sync())}async debounceSync(){let e=de(()=>{var t;return(t=this.pendingSync())==null||t.abort(),this.nodeState.debouncer()});if(e){let t=new AbortController,i=e(t.signal);if(i&&(this.pendingSync.set(t),await i,t.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(e,t,i,r){return r.newRoot(e,t,i,r)}createStructure(e){return e.kind===`root`?new gt(this,e.logic,e.fieldManager,e.value,this.newChild.bind(this)):new bt(this,e.logic,e.parent,e.identityInParent,e.initialKeyInParent,this.newChild.bind(this))}newChild(e,t,i){let r,o;return i?(r=this.pathNode.getChild(K),o=this.structure.logic.getChild(K)):(r=this.pathNode.getChild(e),o=this.structure.logic.getChild(e)),this.fieldAdapter.newChild({kind:`child`,parent:this,pathNode:r,logic:o,initialKeyInParent:e,identityInParent:t,fieldAdapter:this.fieldAdapter})}};var cr=we(()=>[]);var ur=we(()=>!1);function Zn(n,e){return n?e&&n.element.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e:n:e}var vt=class{node;selfTouched=rt$1(!1);selfDirty=rt$1(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=rt$1([]);constructor(e){this.node=e}dirty=we(()=>{let e=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,i)=>i||t.nodeState.dirty(),Wn)});touched=we(()=>{let e=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,i)=>i||t.nodeState.touched(),Wn)});disabledReasons=we(()=>{var e;return[...((e=this.node.structure.parent)==null?void 0:e.nodeState.disabledReasons())??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)]},{equal:E});disabled=we(()=>!!this.disabledReasons().length);readonly=we(()=>{var e;return(((e=this.node.structure.parent)==null?void 0:e.nodeState.readonly())||this.node.logicNode.logic.readonly.compute(this.node.context))??!1});hidden=we(()=>{var e;return(((e=this.node.structure.parent)==null?void 0:e.nodeState.hidden())||this.node.logicNode.logic.hidden.compute(this.node.context))??!1});name=we(()=>{let e=this.node.structure.parent;return e?`${e.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=we(()=>{var e,t,i;if(this.node.logicNode.logic.hasMetadata(mt)){let o=this.node.logicNode.logic.getMetadata(mt).compute(this.node.context);if(o)return a=>o(this.node.context,a)}return(i=(e=this.node.structure.parent)==null?void 0:(t=e.nodeState).debouncer)==null?void 0:i.call(t)});isNonInteractive=we(()=>this.hidden()||this.disabled()||this.readonly())};var yt=class{newRoot(e,t,i,r){return new be({kind:`root`,fieldManager:e,value:t,pathNode:i,logic:i.builder.build(),fieldAdapter:r})}newChild(e){return new be(e)}createNodeState(e){return new vt(e)}createValidationState(e){return new ft(e)}createStructure(e,t){return e.createStructure(t)}};var xt=class{injector;rootName;submitOptions;constructor(e,t,i){this.injector=e,this.rootName=t??`${this.injector.get(hr$1)}.form${fr++}`,this.submitOptions=i}structures=new Set;createFieldManagementEffect(e){ss(()=>{let t=new Set;this.markStructuresLive(e,t);for(let i of this.structures)t.has(i)||(this.structures.delete(i),de(()=>i.destroy()))},{injector:this.injector})}markStructuresLive(e,t){t.add(e);for(let i of e.children())this.markStructuresLive(i.structure,t)}};var fr=0;var ai=new T(``);function mr(n){let e,t,i;return n.length===3?[e,t,i]=n:n.length===2?Ji(n[1])?[e,t]=n:[e,i]=n:[e]=n,[e,t,i]}function hr(...n){let[e,t,i]=mr(n),r=(i==null?void 0:i.injector)??E$1(ue),o=zi$1(r,()=>Ae.rootCompile(t)),a=new xt(r,i==null?void 0:i.name,i==null?void 0:i.submission),s=(i==null?void 0:i.adapter)??new yt,d=be.newRoot(a,e,o,s);a.createFieldManagementEffect(d.structure);let{experimentalWebMcpTool:u}=i??{};if(u){let m=zi$1(r,()=>E$1(ai,{optional:!0}));m&&zi$1(r,()=>m(d.fieldTree,{name:u.name,description:u.description}))}return d.fieldTree}async function pr(n,e){let t=de(n);if(de(t.submitState.submitting))return!1;let i=e===void 0?t.structure.root.fieldProxy:n,r={root:t.structure.root.fieldProxy,submitted:n};e=typeof e==`function`?{action:e}:e??t.structure.fieldManager.submitOptions;let o=e==null?void 0:e.action;if(!o)throw new v(1915,!1);t.markAsTouched();let a=e==null?void 0:e.onInvalid,s=gr(t,e==null?void 0:e.ignoreValidators);try{if(s){t.submitState.selfSubmitting.set(!0);let d=await de(()=>o==null?void 0:o(i,r));return d&&br(t,d),!d||A(d)&&d.length===0}else de(()=>a==null?void 0:a(i,r));return!1}finally{t.submitState.selfSubmitting.set(!1)}}function gr(n,e){switch(e){case`all`:return!0;case`none`:return de(n.valid);default:return!de(n.invalid)}}function br(n,e){A(e)||(e=[e]);let t=new Map;for(let i of e){let r=Et(i,n.fieldTree),o=r.fieldTree(),a=t.get(o);a||(a=[],t.set(o,a)),a.push(r)}for(let[i,r]of t)i.submitState.submissionErrors.set(r)}var Pe=class{kind=`compat`;control;fieldTree;context;message;constructor({context:e,kind:t,control:i}){this.context=e,this.kind=t,this.control=i}};function si(n){if(n.length===0)return null;let e={};for(let t of n)e[t.kind]=t instanceof Pe?t.context:t;return e}function li(n,e){return n===null?[]:Object.entries(n).map(([t,i])=>new Pe({context:i,kind:t,control:e}))}var _r=new T(``);function oa(n,e){Le(n);let t=I.unwrapFieldPath(n),i;typeof e==`function`||typeof e==`string`?i=e:i=e==null?void 0:e.when,t.builder.addDisabledReasonRule(r=>{let o=!0;return typeof i==`string`?o=i:i&&(o=i(r)),typeof o==`string`?{fieldTree:r.fieldTree,message:o}:o?{fieldTree:r.fieldTree}:void 0})}function di(n,e){return n instanceof Function?n(e):n}function vr(n){return typeof n==`number`?isNaN(n):n===``||n===!1||n==null}function ci(n){return n===void 0?[]:Array.isArray(n)?n:[n]}function yr(n,e){Le(n),I.unwrapFieldPath(n).builder.addSyncErrorRule(i=>Et(e(i),i.fieldTree))}function xr(n){return new Ct(n)}var ze=class{__brand=void 0;kind=``;fieldTree;message;constructor(e){e&&Object.assign(this,e)}};var Ct=class extends ze{kind=`required`};var Ve=class extends ze{kind=`parse`};function aa(n,e){let t=St(n,B(),i=>e!=null&&e.when?e.when(i):!0);St(n,Mt,({state:i})=>i.metadata(t)()),yr(n,i=>{if(i.state.metadata(t)()&&vr(i.value()))return e!=null&&e.error?di(e.error,i):xr({message:di(e==null?void 0:e.message,i)})})}function Sr(n,e,t){let i=Xs({source:n,computation:()=>[],equal:E}),r=a=>{let s=t(a);i.set(ci(s.error)),s.value!==void 0&&e(s.value),i.set(ci(s.error))},o=()=>{i.set([])};return{errors:i.asReadonly(),setRawValue:r,reset:o}}var Ft=class{field;constructor(e){this.field=e}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return si(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return`DISABLED`;if(this.field().valid())return`VALID`;if(this.field().invalid())return`INVALID`;if(this.field().pending())return`PENDING`;throw new v(1910,!1)}valueAccessor=null;hasValidator(e){return e===xe.required?this.field().required():!1}updateValueAndValidity(){}};var Rt={disabled:`disabled`,disabledReasons:`disabledReasons`,dirty:`dirty`,errors:`errors`,hidden:`hidden`,invalid:`invalid`,max:`max`,maxLength:`maxLength`,min:`min`,minLength:`minLength`,name:`name`,pattern:`pattern`,pending:`pending`,readonly:`readonly`,required:`required`,touched:`touched`};var Nr=(()=>{let n={};for(let e of Object.keys(Rt))n[Rt[e]]=e;return n})();function Tt(n,e){var i;return(i=n[Nr[e]])==null?void 0:i.call(n)}var Dt=Object.values(Rt);function He(){return{}}function H(n,e,t){return n[e]!==t?(n[e]=t,!0):!1}function wr(n,e,t){let i;if(mi(n)&&t.isBadInput(n))return{error:new Ve};switch(n.type){case`checkbox`:return{value:n.checked};case`number`:case`range`:case`datetime-local`:if(i=de(e),typeof i==`number`||i===null)return{value:n.value===``?null:n.valueAsNumber};break;case`date`:case`month`:case`time`:case`week`:if(i=de(e),i===null||i instanceof Date)return{value:n.valueAsDate};if(typeof i==`number`)return{value:n.valueAsNumber};break}if(n.tagName===`INPUT`&&n.type===`text`&&(i??(i=de(e)),typeof i==`number`||i===null)){if(n.value===``)return{value:null};let r=Number(n.value);return Number.isNaN(r)?{error:new Ve}:{value:r}}return{value:n.value}}function ui(n,e){switch(n.type){case`checkbox`:n.checked=e;return;case`radio`:n.checked=e===n.value;return;case`number`:case`range`:case`datetime-local`:if(typeof e==`number`){fi(n,e);return}else if(e===null){n.value=``;return}break;case`date`:case`month`:case`time`:case`week`:if(e===null||e instanceof Date){n.valueAsDate=e;return}else if(typeof e==`number`){fi(n,e);return}}if(n.tagName===`INPUT`&&n.type===`text`){if(typeof e==`number`){n.value=isNaN(e)?``:String(e);return}if(e===null){n.value=``;return}}n.value=e}function fi(n,e){isNaN(e)?n.value=``:n.valueAsNumber=e}function mi(n){return n.tagName===`INPUT`}function Mr(n){return n.type===`date`||n.type===`datetime-local`||n.type===`month`||n.type===`time`||n.type===`week`}function Er(n,e){let t=n.getUTCFullYear(),i=String(n.getUTCMonth()+1).padStart(2,`0`);if(e===`month`)return`${t}-${i}`;return`${t}-${i}-${String(n.getUTCDate()).padStart(2,`0`)}`}function hi(n,e,t){return e instanceof Date&&(n===`min`||n===`max`)&&(t===`date`||t===`month`)?Er(e,t):e}function Cr(n,e){n.listenToCustomControlModel(i=>e.state().controlValue.set(i)),n.listenToCustomControlOutput(`touch`,()=>e.state().markAsTouched()),e.registerAsBinding(n.customControl);let t=He();return()=>{let i=e.state(),r=i.controlValue();H(t,`controlValue`,r)&&n.setCustomControlModelInput(r);for(let o of Dt){let a;if(o===`errors`?a=e.errors():a=Tt(i,o),H(t,o,a)&&(n.setInputOnDirectives(o,a),e.elementAcceptsNativeProperty(o)&&!n.customControlHasInput(o))){let s=hi(o,a,e.nativeFormElement.type);vn(e.renderer,e.nativeFormElement,o,s)}}}}function Fr(n){return typeof n==`object`&&n!==null}function Rr(n,e){let t=He();e.controlValueAccessor.registerOnChange(r=>{t.controlValue=r,e.state().controlValue.set(r)}),e.controlValueAccessor.registerOnTouched(()=>e.state().markAsTouched());let i=e.injector.get(ge$2,null,{optional:!0,self:!0});if(i){let r;for(let d of i)Fr(d)&&d.registerOnValidatorChange&&(r??(r=rt$1(0)),d.registerOnValidatorChange(()=>{r.update(u=>u+1)}));let o=i.map(d=>typeof d==`function`?d:d.validate.bind(d)),a=xe.compose(o),s=we(()=>{r?.();return li(a?a(e.interopNgControl.control):null,e.interopNgControl.control)});e.parseErrorsSource.set(s)}return e.registerAsBinding({reset:()=>{let r=e.state().value();t.controlValue=r,de(()=>e.controlValueAccessor.writeValue(r))}}),()=>{let r=e.state(),o=r.controlValue();H(t,`controlValue`,o)&&de(()=>e.controlValueAccessor.writeValue(o));for(let a of Dt){let s=Tt(r,a);if(H(t,a,s)){let d=n.setInputOnDirectives(a,s,a===`name`?Tr:void 0);a===`disabled`&&e.controlValueAccessor.setDisabledState?de(()=>e.controlValueAccessor.setDisabledState(s)):!d&&e.elementAcceptsNativeProperty(a)&&vn(e.renderer,e.nativeFormElement,a,s)}}}}function Tr(n){return n==null}function Dr(n,e,t){if(typeof MutationObserver!=`function`)return;let i=new MutationObserver(r=>{r.some(o=>Ar(o))&&e()});i.observe(n,{attributes:!0,attributeFilter:[`value`],characterData:!0,childList:!0,subtree:!0}),t.onDestroy(()=>i.disconnect())}function Ar(n){if(n.type===`childList`||n.type===`characterData`){if(n.target instanceof Comment)return!1;for(let e of n.addedNodes)if(!(e instanceof Comment))return!0;for(let e of n.removedNodes)if(!(e instanceof Comment))return!0;return!1}return n.type===`attributes`&&n.target instanceof HTMLOptionElement}function Ir(n,e,t,i){let r=!1,o=e.nativeFormElement,a=Sr(()=>e.state().value(),d=>e.state().controlValue.set(d),d=>wr(o,e.state().value,i));t.set(a.errors),e.onReset=()=>{a.reset();let d=e.state().value();s.controlValue=d,ui(o,d)},n.listenToDom(`input`,()=>a.setRawValue(void 0)),n.listenToDom(`blur`,()=>e.state().markAsTouched()),mi(o)&&Mr(o)&&i.watchValidity(e.destroyRef,o,()=>a.setRawValue(void 0)),e.registerAsBinding(),o.tagName===`SELECT`&&Dr(o,()=>{r&&(o.value=e.state().controlValue())},e.destroyRef);let s=He();return()=>{let d=e.state();for(let M of Dt){let ie=Tt(d,M);if(H(s,M,ie)&&(n.setInputOnDirectives(M,ie),e.elementAcceptsNativeProperty(M))){let je=hi(M,ie,o.type);vn(e.renderer,o,M,je)}}let u=d.controlValue(),m=H(s,`controlValue`,u),w=o.type===`radio`&&H(s,`radioValue`,o.value);(m||w)&&ui(o,u),r=!0}}var pi=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵprov=A$1({token:n,factory:t=>kr.ɵfac(t),providedIn:`root`})}return n})();var kr=(()=>{class n extends pi{document=E$1(Q);cspNonce=E$1(rs,{optional:!0});injectedStyles=new WeakMap;watchValidity(t,i,r){let o=i.getRootNode();this.injectedStyles.has(o)||this.injectedStyles.set(o,this.createTransitionStyle(o));let a=s=>{let d=s;(d.animationName===`ng-valid`||d.animationName===`ng-invalid`)&&r()};i.addEventListener(`animationstart`,a),t.onDestroy(()=>{i.removeEventListener(`animationstart`,a)})}isBadInput(t){var i;return((i=t.validity)==null?void 0:i.badInput)??!1}createTransitionStyle(t){var r;let i=this.document.createElement(`style`);return this.cspNonce&&(i.nonce=this.cspNonce),i.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,t.nodeType===9?(r=t.head)==null||r.appendChild(i):t.appendChild(i),i}ngOnDestroy(){var t;(t=this.injectedStyles.get(this.document))==null||t.remove()}static ɵfac=(()=>{let t;return function(r){return(t||(t=Nh(n)))(r||n)}})();static ɵprov=A$1({token:n,factory:n.ɵfac})}return n})();var Pr=Symbol();var Be=new T(``);var sa=(()=>{class n$5{field=QB.required({alias:`formField`});state=we(()=>this.field()());renderer=E$1(To);destroyRef=E$1(De$1);injector=E$1(ue);element=E$1(Pn$1).nativeElement;elementIsNativeFormElement=gn(this.element);elementAcceptsTextualValues=Ji$1(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=t=>this.element.focus(t);controlValueAccessors=E$1($$1,{optional:!0,self:!0});config=E$1(_r,{optional:!0});validityMonitor=E$1(pi);parseErrorsSource=rt$1(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??(this._interopNgControl=new Ft(this.state))}parseErrors=we(()=>{var t;return((t=this.parseErrorsSource())==null?void 0:t().map(i=>o(n({},i),{fieldTree:de(this.state).fieldTree,formField:this})))??[]},{equal:E});errors=we(()=>this.state().errors().filter(t=>!t.formField||t.formField===this),{equal:E});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(t){this.parseErrorsSource.set(t)}set onReset(t){this.parseErrorsResetCallback=t}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){var t;return!this.controlValueAccessors||this.controlValueAccessors.length===0?((t=this.interopNgControl)==null?void 0:t.valueAccessor)??void 0:Sn(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){var r;let t=Object.entries(((r=this.config)==null?void 0:r.classes)??{}).map(([o,a])=>[o,we(()=>a(this))]);if(t.length===0)return;let i=He();t2({write:()=>{for(let[o,a]of t){let s=a();H(i,o,s)&&(s?this.renderer.addClass(this.element,o):this.renderer.removeClass(this.element,o))}}},{injector:this.injector})}focus(t){this.focuser(t)}reset(){var t;this.resetter(),(t=this.parseErrorsResetCallback)==null||t.call(this,this.state().value())}registerAsBinding(t){if(this.isFieldBinding)throw new v(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),t!=null&&t.focus&&(this.focuser=i=>t.focus(i)),t!=null&&t.reset&&(this.resetter=()=>t.reset()),ss(i=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),i(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this))})},{injector:this.injector})}[Pr];ɵngControlCreate(t){if(!t.hasPassThrough)if(this.controlValueAccessor)this.ɵngControlUpdate=Rr(t,this);else if(t.customControl)this.ɵngControlUpdate=Cr(t,this);else if(this.elementIsNativeFormElement)this.ɵngControlUpdate=Ir(t,this,this.parseErrorsSource,this.validityMonitor);else throw new v(1914,!1)}ɵngControlUpdate;elementAcceptsNativeProperty(t){if(!this.elementIsNativeFormElement)return!1;switch(t){case`min`:case`max`:return this._elementAcceptsMinMax??(this._elementAcceptsMinMax=Qi$1(this.element));case`minLength`:case`maxLength`:return this.elementAcceptsTextualValues;case`disabled`:case`required`:case`readonly`:case`name`:return!0;default:return!1}}static ɵfac=function(i){return new(i||n$5)};static ɵdir=Ys({type:n$5,selectors:[[``,`formField`,``]],inputs:{field:[1,`formField`,`field`]},exportAs:[`formField`],features:[yT([{provide:Be,useExisting:n$5},{provide:R,useFactory:()=>E$1(n$5).interopNgControl},{provide:bn,useFactory:()=>E$1(Be,{self:!0})}]),CC(`formField`)]})}return n$5})();var gi=new T(`MAT_INPUT_VALUE_ACCESSOR`);var Or=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var Lr=new T(`MAT_INPUT_CONFIG`);var Ta=(()=>{class n{_elementRef=E$1(Pn$1);_platform=E$1(C);ngControl=E$1(R,{optional:!0,self:!0});_autofillMonitor=E$1(Kn);_ngZone=E$1(ge$1);_formField=E$1(ot,{optional:!0});_renderer=E$1(To);_uid=E$1(z).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=E$1(Lr,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new re;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=ns(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){var t,i;return this._required??((i=(t=this.ngControl)==null?void 0:t.control)==null?void 0:i.hasValidator(xe.required))??!1}set required(t){this._required=ns(t)}_required;get type(){return this._type}set type(t){this._type=t||`text`,this._validateType(),!this._isTextarea&&ot$1().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=ns(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(t=>ot$1().has(t));constructor(){var u;let t=E$1(In$1,{optional:!0}),i=E$1(Tn$1,{optional:!0}),r=E$1(fi$1),o=E$1(gi,{optional:!0,self:!0}),a=E$1(Be,{optional:!0,self:!0}),s=this._elementRef.nativeElement,d=s.nodeName.toLowerCase();o?_n(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new ut$2(r,a||this.ngControl,i,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=d===`select`,this._isTextarea=d===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=((u=this._config)==null?void 0:u.disabledInteractive)||!1,this._isNativeSelect&&(this.controlType=s.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&ss(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){var t,i;this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),(t=this._cleanupIosKeyup)==null||t.call(this),(i=this._cleanupWebkitWheel)==null||i.call(this)}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type===`number`?(i.type=`text`,i.setSelectionRange(0,0),i.type=`number`):i.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=t,t?i.setAttribute(`placeholder`,t):i.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){Or.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,i=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){let i=this._elementRef.nativeElement.getAttribute(`aria-describedby`);return(i==null?void 0:i.split(` `))||[]}setDescribedByIds(t){let i=this._elementRef.nativeElement;t.length?i.setAttribute(`aria-describedby`,t.join(` `)):i.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let i=t.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(i){return new(i||n)};static ɵdir=Ys({type:n,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(i,r){i&1&&bm(`focus`,function(){return r._focusChanged(!0)})(`blur`,function(){return r._focusChanged(!1)})(`input`,function(){return r._onInput()}),i&2&&(wm(`id`,r.id)(`disabled`,r.disabled&&!r.disabledInteractive)(`required`,r.required),mm(`name`,r.name||null)(`readonly`,r._getReadonlyAttribute())(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null)(`aria-invalid`,r.empty&&r.required?null:r.errorState)(`aria-required`,r.required)(`id`,r.id),Pm(`mat-input-server`,r._isServer)(`mat-mdc-form-field-textarea-control`,r._isInFormField&&r._isTextarea)(`mat-mdc-form-field-input-control`,r._isInFormField)(`mat-mdc-input-disabled-interactive`,r.disabledInteractive)(`mdc-text-field__input`,r._isInFormField)(`mat-mdc-native-select-inline`,r._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,l_]},exportAs:[`matInput`],features:[yT([{provide:rt,useExisting:n}]),Fs]})}return n})();var Da=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Zs({type:n});static ɵinj=Qr({imports:[at,at,Un,bt$1]})}return n})();export{aa as a,ji as c,ot as d,pr as f,yr as h,Ta as i,nt as l,sa as m,Da as n,at as o,qn as p,Hi as r,hr as s,Bi as t,oa as u};